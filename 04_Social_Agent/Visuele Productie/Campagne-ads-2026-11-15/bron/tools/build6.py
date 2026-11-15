"""Builds the photo layers for the six campaign ads.

python -I build6.py <name> [<name> ...]     names: v6 v7 v8 r6 r7 r8
Outputs to ../ads6/: <name>_bg.jpg (graded, retouched, 1080x1350) and,
for the text-behind-subject ads, <name>_fg.png (same pixels, subject alpha).
"""
import sys, pathlib
import numpy as np
from PIL import Image
sys.path.insert(0, str(pathlib.Path(__file__).parent))
from imgops import *
from seg import segment

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC, OUT = ROOT / "src2", ROOT / "ads6"
OUT.mkdir(exist_ok=True)


def neutralise(a, box, target=None, blur=4):
    """Desaturate a logo area and pull its luminance to the surrounding material."""
    m = feather_mask(a.shape, box, blur)
    y = luma(a)[..., None]
    if target is None:
        ring = (m > 0.02) & (m < 0.4)
        target = float(luma(a)[ring].mean()) if ring.any() else float(y.mean())
    flat = np.repeat(np.full_like(y, target) * 0.7 + y * 0.3, 3, 2)
    return a * (1 - m[..., None]) + flat * m[..., None]


def poly_mask(shape, pts, blur=4):
    from PIL import ImageDraw, ImageFilter
    m = Image.new("L", (shape[1], shape[0]), 0)
    ImageDraw.Draw(m).polygon(pts, fill=255)
    return np.asarray(m.filter(ImageFilter.GaussianBlur(blur))).astype(np.float32) / 255


def desat(a, box, k=0.15, blur=10, dim=1.0):
    if isinstance(box[0], tuple):
        m = poly_mask(a.shape, box, blur)[..., None]
    else:
        m = feather_mask(a.shape, box, blur)[..., None]
    b = saturation(a, k) * dim
    return a * (1 - m) + b * m


def v6():
    a = load_crop(SRC / "IMG_0261.jpg", (0, 250, 2000, 2750))
    # third-party marks: boots (runbird, heel text), ball print, shorts logo
    a = neutralise(a, (684, 1112, 784, 1166), blur=5)
    a = neutralise(a, (842, 1090, 884, 1121), blur=4)
    a = neutralise(a, (800, 1112, 834, 1134), blur=3)
    a = neutralise(a, (898, 1086, 929, 1107), blur=3)
    a = clone(a, (690, 1060, 730, 1088), 0, -34, blur=4)
    a = clone(a, (600, 555, 630, 595), 0, -60, blur=4)
    a = desat(a, ((480, 930), (392, 1032), (578, 1028)), 0.2, 4)  # blue cone
    a = desat(a, (624, 1074, 840, 1176), 0.12, 8)          # boots
    a = desat(a, (820, 1050, 950, 1146), 0.12, 8)
    a = levels(a, black=0.015, white=0.98, gamma=0.96)
    a = saturation(a, 0.55)
    a = split_tone(a, shadow=(-0.004, -0.002, 0.006), highlight=(0.01, 0.008, 0.0))
    a = scurve(a, 0.18)
    a = vignette(a, 0.32, cx=0.6, cy=0.42, radius=0.85)
    h, w = a.shape[:2]
    a = darken(a, grad_v(h, w, 1010, 1350, 0.0, 0.78))
    a = grain(a, 0.022, seed=6)
    m = segment((a * 255).astype(np.uint8), "isnet")
    m[:, :440] = 0          # distant players stay in the background
    m[1180:, :] = 0         # only the body needs to sit above the type
    save_jpg(a, OUT / "v6_bg.jpg")
    save_cutout(a, m, OUT / "v6_fg.png")




# ---------------------------------------------------------------- helpers 2
def load_full(name):
    return np.asarray(Image.open(SRC / name).convert("RGB")).astype(np.float32) / 255


def resize(a, size):
    return np.asarray(to_img(a).resize(size, Image.LANCZOS)).astype(np.float32) / 255


def knit_logo_remove(a, poly, thr=0.24, sat_max=0.16, grow=9, seed=3):
    """Remove a light knitted logo from a dark sleeve: exact pixel mask + diffusion fill + rib texture."""
    from PIL import ImageFilter
    xs, ys = [p[0] for p in poly], [p[1] for p in poly]
    x0, y0, x1, y1 = min(xs) - 20, min(ys) - 20, max(xs) + 20, max(ys) + 20
    r = a[y0:y1, x0:x1].copy()
    inside = poly_mask(a.shape, poly, 0)[y0:y1, x0:x1] > 0.5
    lum = luma(r); sat = r.max(2) - r.min(2)
    m = ((lum > thr) & (sat < sat_max) & inside).astype(np.uint8) * 255
    m = np.asarray(Image.fromarray(m).filter(ImageFilter.MaxFilter(grow))).astype(np.float32) / 255
    m = m * inside
    known = (m < 0.5) & inside & (lum < 0.22)
    fill = r.copy()
    fill[~known] = r[known].mean(0) if known.any() else 0.1
    for _ in range(400):
        avg = (np.roll(fill, 1, 0) + np.roll(fill, -1, 0) + np.roll(fill, 1, 1) + np.roll(fill, -1, 1)) / 4
        fill = np.where(known[..., None], r, avg)
    keep = m < 0.5
    dark = r[known & (lum < 0.25)]
    sd = float(luma(dark).std()) if dark.size else 0.02
    rng = np.random.default_rng(seed)
    h, w = lum.shape
    n = rng.normal(0, 1, (max(h // 4, 1), w)).astype(np.float32)
    n = np.asarray(Image.fromarray(n).resize((w, h), Image.BILINEAR))
    fill = fill + (n * min(sd, 0.03))[..., None] * (~keep)[..., None]
    soft = np.asarray(Image.fromarray((m * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(1.5))).astype(np.float32)[..., None] / 255
    a[y0:y1, x0:x1] = r * (1 - soft) + np.clip(fill, 0, 1) * soft
    return a


def v7():
    a = load_full("IMG_2101.jpg")                      # 3000 x 2000
    a = knit_logo_remove(a, [(1680, 150), (2238, 150), (2240, 530), (1855, 530), (1830, 460),
                             (1805, 380), (1775, 300), (1722, 222)])        # right sleeve
    a = knit_logo_remove(a, [(548, 725), (962, 725), (962, 1046), (656, 1046), (546, 788)])  # left sleeve
    a = levels(a, black=0.03, white=0.99, gamma=0.97)
    a = saturation(a, 0.62)
    a = split_tone(a, shadow=(-0.006, -0.002, 0.004), highlight=(0.006, 0.004, 0.0))
    a = scurve(a, 0.2)
    a = resize(a, (1872, 1248))
    a = vignette(a, 0.22, cx=0.62, cy=0.55, radius=0.9)
    a = grain(a, 0.016, seed=17)
    save_jpg(a, OUT / "v7_photo.jpg")


def solid_alpha(m, close=21, erode=5):
    """Dark parts inside a light subject (grip pads) come out half transparent: fill the silhouette."""
    from PIL import ImageFilter, ImageDraw
    b = Image.fromarray(((m > 0.5) * 255).astype(np.uint8))
    b = b.filter(ImageFilter.MaxFilter(close)).filter(ImageFilter.MinFilter(close))
    pad = Image.new("L", (b.width + 2, b.height + 2), 0); pad.paste(b, (1, 1))
    ImageDraw.floodfill(pad, (0, 0), 128)
    solid = np.asarray(pad)[1:-1, 1:-1] != 128
    core = np.asarray(Image.fromarray((solid * 255).astype(np.uint8)).filter(ImageFilter.MinFilter(erode))) > 0
    return np.maximum(m, core.astype(np.float32))


def r6():
    a = load_crop(SRC / "IMG_1578.jpg", (390, 0, 1990, 2000))
    a = levels(a, black=0.035, white=0.97, gamma=0.92)
    a = saturation(a, 0.0)
    a = scurve(a, 0.12)
    a = vignette(a, 0.4, cx=0.62, cy=0.45, radius=0.8)
    a = grain(a, 0.02, seed=26)
    m = solid_alpha(segment((a * 255).astype(np.uint8), "isnet"))
    save_jpg(a, OUT / "r6_bg.jpg")
    save_cutout(a, m, OUT / "r6_fg.png")


def r7():
    a = load_full("IMG_0364.jpg")                      # 2000 x 3000 macro
    a = a[700:1980, 40:1960]                           # 1920 x 1280 window on the big pads
    a = levels(a, black=0.04, white=0.97, gamma=1.0)   # keep the grey studio sweep
    a = saturation(a, 0.0)
    a = scurve(a, 0.14)
    a = resize(a, (1872, 1248))
    a = grain(a, 0.012, seed=37)
    save_jpg(a, OUT / "r7_photo.jpg")


def v8():
    a = load_crop(SRC / "IMG_2228.jpg", (1140, 100, 2660, 2000))
    a = levels(a, black=0.03, white=0.985, gamma=0.98)
    a = saturation(a, 0.6)
    a = split_tone(a, shadow=(-0.004, -0.002, 0.004), highlight=(0.008, 0.006, 0.0))
    a = scurve(a, 0.16)
    h, w = a.shape[:2]
    a = darken(a, grad_v(h, w, 760, 1350, 0.0, 0.74))
    a = darken(a, grad_v(h, w, 0, 260, 0.35, 0.0))
    a = vignette(a, 0.22, cx=0.48, cy=0.35, radius=0.9)
    a = grain(a, 0.018, seed=8)
    save_jpg(a, OUT / "v8_bg.jpg")


def r8():
    im = Image.open(SRC / "IMG_1569.jpg").convert("RGB").crop((420, 280, 2860, 1720))
    a = np.asarray(im).astype(np.float32) / 255
    a = levels(a, black=0.08, white=0.64, gamma=1.0)   # backdrop -> black, socks (~0.6 in source) -> white
    a = saturation(a, 0.0)
    im = to_img(a).rotate(-58, resample=Image.BICUBIC, expand=True, fillcolor=(0, 0, 0))
    g = np.asarray(im.convert("L"))
    ys, xs = np.nonzero(g > 60)
    im = im.crop((xs.min(), ys.min(), xs.max() + 1, ys.max() + 1))
    k = 800 / im.height
    im = im.resize((int(im.width * k), 800), Image.LANCZOS)
    canvas = Image.new("RGB", (1080, 1350), (0, 0, 0))
    canvas.paste(im, ((1080 - im.width) // 2 + 40, 112))
    a = np.asarray(canvas).astype(np.float32) / 255
    h, w = a.shape[:2]
    yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
    glow = np.exp(-(((xx - 560) / 520) ** 2 + ((yy - 500) / 460) ** 2)) * 0.075
    a = np.clip(a + glow[..., None] * (1 - a), 0, 1)     # soft white-to-black falloff behind the pair
    a = scurve(a, 0.08)
    a = grain(a, 0.016, seed=48)
    save_jpg(a, OUT / "r8_bg.jpg")


if __name__ == "__main__":
    for n in sys.argv[1:]:
        globals()[n]()
        print("built", n)
