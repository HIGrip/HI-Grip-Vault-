"""Small photo toolkit for the ad layers (numpy + PIL only).

All functions take/return float32 RGB arrays in [0,1] unless noted.
"""
import numpy as np
from PIL import Image, ImageFilter

W, H = 1080, 1350


def load_crop(path, box, size=(W, H)):
    im = Image.open(path).convert("RGB").crop(box).resize(size, Image.LANCZOS)
    return np.asarray(im).astype(np.float32) / 255


def to_img(a):
    return Image.fromarray((np.clip(a, 0, 1) * 255 + 0.5).astype(np.uint8))


def luma(a):
    return a[..., 0] * 0.2126 + a[..., 1] * 0.7152 + a[..., 2] * 0.0722


def levels(a, black=0.0, white=1.0, gamma=1.0):
    a = np.clip((a - black) / max(white - black, 1e-6), 0, 1)
    return a ** (1 / gamma)


def scurve(a, amount=0.2):
    """Contrast around mid-grey; amount 0..1."""
    s = a * a * (3 - 2 * a)
    return a + (s - a) * amount


def saturation(a, k):
    y = luma(a)[..., None]
    return np.clip(y + (a - y) * k, 0, 1)


def split_tone(a, shadow=(0, 0, 0), highlight=(0, 0, 0), balance=0.5):
    y = luma(a)[..., None]
    ws = np.clip(1 - y / balance, 0, 1)
    wh = np.clip((y - balance) / (1 - balance), 0, 1)
    return np.clip(a + ws * np.array(shadow, np.float32) + wh * np.array(highlight, np.float32), 0, 1)


def vignette(a, strength=0.35, cx=0.5, cy=0.5, radius=0.75, power=2.2):
    h, w = a.shape[:2]
    yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
    d = np.sqrt(((xx / w - cx) / radius) ** 2 + ((yy / h - cy) / radius * h / w) ** 2)
    m = 1 - strength * np.clip(d, 0, 1.6) ** power
    return np.clip(a * np.clip(m, 0, 1)[..., None], 0, 1)


def grad_v(h, w, y0, y1, a0, a1):
    """Vertical ramp of alpha from a0 at y0 to a1 at y1 (smoothstep)."""
    t = np.clip((np.arange(h, dtype=np.float32) - y0) / max(y1 - y0, 1), 0, 1)
    t = t * t * (3 - 2 * t)
    return np.repeat((a0 + (a1 - a0) * t)[:, None], w, 1)


def darken(a, alpha, color=(0.04, 0.04, 0.04)):
    return a * (1 - alpha[..., None]) + np.array(color, np.float32) * alpha[..., None]


def grain(a, sigma=0.018, seed=7, size=1.0):
    rng = np.random.default_rng(seed)
    h, w = a.shape[:2]
    n = rng.normal(0, 1, (int(h / size) + 1, int(w / size) + 1)).astype(np.float32)
    if size != 1.0:
        n = np.asarray(Image.fromarray(n).resize((w, h), Image.BILINEAR))
    n = n[:h, :w]
    y = luma(a)
    weight = 4 * y * (1 - y) + 0.25  # strongest in mid-tones, like film
    return np.clip(a + (n * sigma * weight)[..., None], 0, 1)


def feather_mask(shape, poly_or_box, blur=6):
    """Mask from an ellipse box (x0,y0,x1,y1) with gaussian feather."""
    from PIL import ImageDraw
    m = Image.new("L", (shape[1], shape[0]), 0)
    ImageDraw.Draw(m).ellipse(poly_or_box, fill=255)
    m = m.filter(ImageFilter.GaussianBlur(blur))
    return np.asarray(m).astype(np.float32) / 255


def clone(a, box, dx, dy, blur=6, match=True):
    """Cover an ellipse region with pixels from (dx,dy) away, feathered, luminance-matched."""
    m = feather_mask(a.shape, box, blur)
    src = np.roll(np.roll(a, -dy, 0), -dx, 1)
    if match:
        x0, y0, x1, y1 = [int(v) for v in box]
        ring = (m > 0.02) & (m < 0.5)
        if ring.any():
            src = src * (a[ring].mean(0) / np.maximum(src[ring].mean(0), 1e-4))
    return a * (1 - m[..., None]) + np.clip(src, 0, 1) * m[..., None]


def median_patch(a, box, k=15, blur=6):
    img = to_img(a).filter(ImageFilter.MedianFilter(k))
    b = np.asarray(img).astype(np.float32) / 255
    m = feather_mask(a.shape, box, blur)
    return a * (1 - m[..., None]) + b * m[..., None]


def save_jpg(a, path, q=92):
    to_img(a).save(path, quality=q, subsampling=0)


def save_cutout(a, alpha, path):
    rgba = np.dstack([np.clip(a, 0, 1), np.clip(alpha, 0, 1)])
    Image.fromarray((rgba * 255 + 0.5).astype(np.uint8), "RGBA").save(path, optimize=True)
