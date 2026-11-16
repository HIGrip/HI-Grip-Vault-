"""Subject segmentation with the rembg ONNX models, run directly via onnxruntime.

Library use:  from seg import segment, guided_filter
CLI:          python -I seg.py <img> <out_mask.png> [isnet|human]

segment(rgb_uint8_array, model) -> float32 alpha in [0,1], same HxW as input.
Edges are refined with a guided filter that uses the photo itself as guide,
so hair-thin leg edges follow the real contour instead of the 1024 px model grid.
"""
import sys, pathlib
import numpy as np
from PIL import Image
import onnxruntime as ort

MODELS = pathlib.Path(__file__).resolve().parent.parent / "models"
CFG = {
    "isnet": ("isnet-general-use.onnx", (0.485, 0.456, 0.406), (1.0, 1.0, 1.0), 1024),
    "human": ("u2net_human_seg.onnx", (0.485, 0.456, 0.406), (0.229, 0.224, 0.225), 320),
}
_sessions = {}


def _session(name):
    if name not in _sessions:
        _sessions[name] = ort.InferenceSession(str(MODELS / CFG[name][0]), providers=["CPUExecutionProvider"])
    return _sessions[name]


def box(a, r):
    """Mean filter with window (2r+1)^2 via integral image, edge-normalised."""
    h, w = a.shape
    c = np.cumsum(np.cumsum(np.pad(a, ((1, 0), (1, 0))), 0), 1)
    y0 = np.clip(np.arange(h) - r, 0, h); y1 = np.clip(np.arange(h) + r + 1, 0, h)
    x0 = np.clip(np.arange(w) - r, 0, w); x1 = np.clip(np.arange(w) + r + 1, 0, w)
    s = c[y1][:, x1] - c[y0][:, x1] - c[y1][:, x0] + c[y0][:, x0]
    n = (y1 - y0)[:, None] * (x1 - x0)[None, :]
    return s / n


def guided_filter(guide, src, r=6, eps=1e-3):
    I, p = guide.astype(np.float64), src.astype(np.float64)
    mI, mp = box(I, r), box(p, r)
    cov = box(I * p, r) - mI * mp
    var = box(I * I, r) - mI * mI
    a = cov / (var + eps)
    b = mp - a * mI
    return (box(a, r) * I + box(b, r)).astype(np.float32)


def segment(rgb, model="isnet", refine=True):
    fname, mean, std, size = CFG[model]
    h, w = rgb.shape[:2]
    im = Image.fromarray(rgb).resize((size, size), Image.LANCZOS)
    x = np.asarray(im).astype(np.float32)
    x = x / max(x.max(), 1e-6)
    x = (x - np.array(mean, np.float32)) / np.array(std, np.float32)
    x = x.transpose(2, 0, 1)[None].astype(np.float32)
    s = _session(model)
    out = s.run(None, {s.get_inputs()[0].name: x})[0][0, 0]
    out = (out - out.min()) / max(out.max() - out.min(), 1e-6)
    m = np.asarray(Image.fromarray((out * 255).astype(np.uint8)).resize((w, h), Image.BILINEAR)).astype(np.float32) / 255
    if refine:
        g = np.asarray(Image.fromarray(rgb).convert("L")).astype(np.float32) / 255
        m = guided_filter(g, m, r=max(2, round(w / 360)), eps=2e-3)
    return np.clip(m, 0, 1)


if __name__ == "__main__":
    src, dst = sys.argv[1], sys.argv[2]
    model = sys.argv[3] if len(sys.argv) > 3 else "isnet"
    rgb = np.asarray(Image.open(src).convert("RGB"))
    m = segment(rgb, model)
    Image.fromarray((m * 255).astype(np.uint8)).save(dst)
    print("mask", m.shape, float(m.mean()))
