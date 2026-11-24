"""Early-access opening v2: beeldbouw voor 3 concepten (A donker, B wit anker, C licht).
Eén grade, één crop-taal, halftone-oplossing als vaste handtekening aan elke beeldrand.
Gebruik: python build_assets_v2_20261120.py <MEDIA_ROOT> <uitvoermap> <emblem.png>
MEDIA_ROOT = lokale kopie van de gedeelde Drive (bevat 'Content - HÏ Grip'). Originelen worden alleen gelezen.
"""
import sys, os
import numpy as np
from PIL import Image, ImageOps, ImageFilter, ImageDraw
Image.MAX_IMAGE_PIXELS = None
ROOT, OUT, EMB = sys.argv[1], sys.argv[2], sys.argv[3]
C = ROOT + "/Content - HÏ Grip/"
HERO_SRC = C + "Sporten/TENNIS/Zwart 2.0/IMG_4074.JPG"
DETAIL_SRC = C + "Sporten/TENNIS/Zwart 2.0/IMG_1437.JPG"
PACK_SRC = C + "Productfoto's/PERFORMANCE GRIP SOCKS 2.0/Performance Gripsokken 2.0 Wit 3-pack productfoto ZA.png"
BLACK = np.array([10, 10, 10], np.float32)
PAPER = np.array([236, 234, 228], np.float32)
W = 1280


def ease(t): return t * t * (3 - 2 * t)
def arr(im): return np.asarray(im.convert("RGB"), dtype=np.float32)
def img(a): return Image.fromarray(np.clip(a, 0, 255).astype(np.uint8))


def grade(im, sat=0.62, black=0.10, white=0.97, gamma=1.18, contrast=1.14, tint=0.03, exp=1.0):
    a = arr(im) / 255.0
    a = np.clip((a - black) / (white - black), 0, 1) ** gamma
    a = np.clip((a - 0.5) * contrast + 0.5, 0, 1)
    l = (a * [0.299, 0.587, 0.114]).sum(axis=2, keepdims=True)
    a = l + (a - l) * sat
    sh = (1 - l) ** 2
    a[..., 2] += tint * sh[..., 0]; a[..., 0] -= tint * 0.5 * sh[..., 0]
    return np.clip(a * exp, 0, 1) * 255.0


def vramp(h, top, bottom):
    y = np.arange(h, dtype=np.float32); m = np.ones(h, np.float32)
    if top: m *= ease(np.clip(y / top, 0, 1))
    if bottom: m *= ease(np.clip((h - 1 - y) / bottom, 0, 1))
    return m[:, None]


def screen(h, w, cell, angle=45.0, seed=0):
    yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
    a = np.deg2rad(angle)
    u = (xx * np.cos(a) + yy * np.sin(a)) / cell; v = (-xx * np.sin(a) + yy * np.cos(a)) / cell
    return (np.cos(2 * np.pi * u) + np.cos(2 * np.pi * v)) / 4 + 0.5  # 1 in dotcentrum


def dissolve(m, cell=10):
    """Ononderbroken beeld in het midden, halftone-stippen aan de randen: dezelfde overgang bij elke beeldrand."""
    h, w = m.shape[0], W
    t = screen(h, w, cell)
    dots = np.clip((m * 1.12 - (1 - t)) * 9 + 0.5, 0, 1)
    k = ease(np.clip((m - 0.88) / 0.1, 0, 1))
    return (dots * (1 - k) + k)[..., None]


def crop(path, box, size):
    im = ImageOps.exif_transpose(Image.open(path)).convert("RGB").crop(box)
    return im.resize(size, Image.LANCZOS)


def save(a, name, folder, q=70):
    d = os.path.join(OUT, folder); os.makedirs(d, exist_ok=True)
    p = os.path.join(d, name)
    im = img(a) if isinstance(a, np.ndarray) else a
    if name.endswith(".png"): im.save(p, optimize=True)
    else: im.convert("RGB").save(p, quality=q, optimize=True, progressive=True)
    print(folder, name, im.size, "%d KB" % (os.path.getsize(p) / 1024))


def photo_on(bg, src, box, size, top, bottom, folder, name, q=70, light=False, cell=10, seed=3):
    H = size[1]
    p = grade(crop(src, box, size), **({"black": 0.04, "sat": 0.7} if light else {"sat": 0.5, "exp": 0.78}))
    m = vramp(H, top, bottom)
    a = dissolve(m, cell)
    out = bg + (p - bg) * a
    rng = np.random.default_rng(seed)
    out = out + rng.normal(0, 1.8, out.shape[:2])[..., None] * (a > 0)
    save(out, name, folder, q)


def emblem(folder, dark):
    lg = Image.open(EMB).convert("RGBA")
    lg = lg.crop(lg.getchannel("A").getbbox()); s = 96 / lg.height
    lg = lg.resize((int(lg.width * s), 96), Image.LANCZOS)
    if dark:
        r = Image.new("RGBA", lg.size, (10, 10, 10, 255)); r.putalpha(lg.getchannel("A")); lg = r
    save(lg, "emblem.png", folder)


HERO_BOX = (1620, 160, 5460, 3760)      # 3840x3600, atleet op ~52% breedte
DETAIL_BOX = (900, 500, 5100, 3322)

# A: donker, één doorlopend zwart
photo_on(BLACK, HERO_SRC, HERO_BOX, (W, 1200), 300, 380, "A", "hero.jpg")
photo_on(BLACK, DETAIL_SRC, DETAIL_BOX, (W, 760), 300, 300, "A", "detail.jpg", seed=7)
emblem("A", False)

# B: donker hero + wit anker met product dat de kaartrand doorbreekt
photo_on(BLACK, HERO_SRC, HERO_BOX, (W, 1300), 260, 420, "B", "hero.jpg")
emblem("B", False)
H = 620; CARD_Y = 330; R = 56; M = 40
cv = Image.new("RGB", (W, H), tuple(int(x) for x in BLACK))
dr = ImageDraw.Draw(cv)
dr.rounded_rectangle((M, CARD_Y, W - M, H + 200), radius=R, fill=(255, 255, 255))
cv = cv.convert("RGBA")
pack = Image.open(PACK_SRC).convert("RGBA")
pack = pack.crop(pack.getchannel("A").point(lambda v: 255 if v > 20 else 0).getbbox())
ph = 560; s = ph / pack.height
pack = pack.resize((int(pack.width * s), ph), Image.LANCZOS).rotate(-6, expand=True, resample=Image.BICUBIC)
px, py = W - pack.width - 70, 20
sh = Image.new("RGBA", cv.size, (0, 0, 0, 0))
sa = pack.getchannel("A").filter(ImageFilter.GaussianBlur(26)).point(lambda v: int(v * 0.55))
sh.paste((0, 0, 0, 255), (px + 14, py + 34), sa)
cv = Image.alpha_composite(cv, sh); cv.alpha_composite(pack, (px, py))
save(cv.convert("RGB"), "pack.jpg", "B", 82)

# C: licht (papier), dezelfde crops en grade
photo_on(PAPER, HERO_SRC, HERO_BOX, (W, 1160), 0, 360, "C", "hero.jpg", light=True)
photo_on(PAPER, DETAIL_SRC, DETAIL_BOX, (W, 700), 280, 280, "C", "detail.jpg", light=True, seed=7)
emblem("C", True)
