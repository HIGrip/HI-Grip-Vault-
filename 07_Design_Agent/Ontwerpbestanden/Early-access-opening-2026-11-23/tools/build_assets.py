"""Early-access opening 2026-11-23: beeldbouw (Pillow + numpy). Lokaal draaien; bronfoto's staan op de gedeelde Drive.
Gebruik: python build_assets.py <HIGRIP_MEDIA_ROOT> <uitvoermap> [stap ...]
Stappen: hero field scene s3 macro (leeg = alles). Vaste volgorde: field vóór scene.
"""
import sys, os
import numpy as np
from PIL import Image, ImageOps, ImageDraw, ImageFont, ImageFilter
Image.MAX_IMAGE_PIXELS = None

ROOT = sys.argv[1]; OUT = sys.argv[2]; STEPS = sys.argv[3:] or ["hero", "field", "scene", "s3", "macro"]
os.makedirs(OUT, exist_ok=True)
VAULT = os.environ.get("HIGRIP_VAULT", "C:/Users/lars/Documents/ObsidianVault")
FONTS = VAULT + "/07_Design_Agent/Email-Workflow/Fonts/"
LOGO = VAULT + "/07_Design_Agent/Ontwerpbestanden/Early-access-2026-11-17-v2/assets/logo/embleem-wit.png"
CONTENT = ROOT + "/Content - HÏ Grip"
SP = CONTENT + "/Sporten"
PF = CONTENT + "/Productfoto's/PERFORMANCE GRIP SOCKS 2.0"
BLACK = (10, 10, 10); WHITE = (255, 255, 255); VOLT = (204, 255, 0)
W = 1280  # @2x van 640


def font(name, size): return ImageFont.truetype(FONTS + name, size)
BLACKIT = "Poppins-BlackItalic.ttf"


def ease(t): return t * t * (3 - 2 * t)


def vgrad(h, a0, a1, y0, y1):
    y = np.arange(h, dtype=np.float32)
    t = np.clip((y - y0) / max(1, (y1 - y0)), 0, 1)
    return (a0 + (a1 - a0) * ease(t))[:, None]


def to_arr(im): return np.asarray(im.convert("RGB"), dtype=np.float32)
def to_img(a): return Image.fromarray(np.clip(a, 0, 255).astype(np.uint8))


def crop_fill(path, box, size):
    im = ImageOps.exif_transpose(Image.open(path)).convert("RGB").crop(box)
    return im.resize(size, Image.LANCZOS)


def grade(im, contrast=1.18, sat=0.95, bright=0.82, cool=0.0):
    a = to_arr(im) / 255.0
    a = np.clip((a - 0.5) * contrast + 0.5, 0, 1)
    a = a ** 1.12
    l = a.mean(axis=2, keepdims=True)
    a = l + (a - l) * sat
    a = a * bright
    if cool:
        a[..., 2] = a[..., 2] * (1 + cool); a[..., 0] = a[..., 0] * (1 - cool * 0.6)
    return to_img(np.clip(a, 0, 1) * 255)


def grain(im, amt=5.0, seed=3):
    rng = np.random.default_rng(seed)
    a = to_arr(im); n = rng.normal(0, amt, a.shape[:2])[..., None]
    return to_img(a + n)


def tracked(d, xy, s, f, fill, track=-0.04, anchor="l"):
    x, y = xy; sz = f.size
    widths = [d.textlength(c, font=f) + track * sz + (0.16 * sz if c == " " else 0) for c in s]
    if anchor == "r": x -= sum(widths)
    for c, w in zip(s, widths):
        col = fill(c) if callable(fill) else fill
        d.text((x, y), c, font=f, fill=col); x += w


def save(im, name, q=82):
    p = os.path.join(OUT, name)
    if name.endswith(".png"): im.save(p, optimize=True)
    else: im.convert("RGB").save(p, quality=q, optimize=True, progressive=True)
    print(name, im.size, "%d KB" % (os.path.getsize(p) / 1024))


def logo_lockup(im, x, y, h=64, size=56):
    d = ImageDraw.Draw(im)
    lg = Image.open(LOGO).convert("RGBA"); lg = lg.crop(lg.getchannel("A").getbbox()); s = h / lg.height
    lg = lg.resize((int(lg.width * s), h), Image.LANCZOS); im.paste(lg, (x, y), lg)
    tracked(d, (x + lg.width + 22, y - 6), "HÏ GRIP", font(BLACKIT, size), WHITE, -0.03)


def hero():
    H = 1860; PH = 1480; PY = 380
    cv = np.zeros((H, W, 3), np.float32) + np.array(BLACK, np.float32)
    photo = crop_fill(SP + "/HARDLOPEN/Zwart 2.0/IMG_3950.JPG", (2180, 400, 4080, 2600), (W, PH))
    photo = grade(photo, 1.22, 0.92, 0.80, cool=0.05)
    p = to_arr(photo)
    al = vgrad(PH, 0, 1, 0, 620) * vgrad(PH, 1, 0, PH - 380, PH)
    xs = np.linspace(-1, 1, W, dtype=np.float32)[None, :]
    vig = 1 - 0.35 * np.clip(np.abs(xs) - 0.4, 0, 1) ** 1.5
    p = p * vig[..., None]
    cv[PY:PY + PH] = cv[PY:PY + PH] * (1 - al[..., None]) + p * al[..., None]
    # v2 (correctieronde 1): geen kop en geen logo meer in het beeld; die zijn live tekst in mail.html.
    # Beeld begint in het zwart op y=300, zodat het naadloos onder de live-tekstrij sluit.
    im = grain(to_img(cv), 2.0)
    im = im.crop((0, 300, W, H))
    im = im.resize((1120, int(im.height * 1120 / W)), Image.LANCZOS)
    save(im, "hero.jpg", 70)


FIELD_H = 1800


def field():
    """Eén halftone-raster dat van de tekstzone (boven) naar de scène loopt; dichtheid groeit naar het product."""
    H = FIELD_H
    cv = Image.new("RGB", (W, H), BLACK); d = ImageDraw.Draw(cv, "RGBA")
    cell = 40; cy_focus = 1180; cx_focus = 860
    for gy in range(0, H // cell + 1):
        for gx in range(0, W // cell + 1):
            x = gx * cell + (cell // 2 if gy % 2 else 0); y = gy * cell
            t_top = ease(float(np.clip((y - 120) / 1000, 0, 1)))
            dist = np.hypot(x - cx_focus, (y - cy_focus) * 1.25)
            t_focus = float(np.clip(1 - dist / 900, 0, 1))
            r = 1.2 + 12.5 * (t_focus ** 1.4) * t_top
            if y < 140: r = 0
            if y > H - 160: r *= float(np.clip((H - y) / 160, 0, 1))
            if r < 1.2: continue
            a = int(30 + 90 * t_focus * t_top)
            d.ellipse((x - r, y - r, x + r, y + r), fill=(255, 255, 255, a))
    cv = grain(cv, 1.5)
    cv.crop((0, 0, W, 560)).save(os.path.join(OUT, "field-top.jpg"), quality=72, optimize=True, progressive=True)
    cv.crop((0, 560, W, H)).save(os.path.join(OUT, "scene-bg.jpg"), quality=72, optimize=True, progressive=True)
    print("field-top.jpg / scene-bg.jpg klaar")


def scene():
    """S2: pack schuin door de rand van de witte codekaart; kop 'JOUW CODE' (de code zelf is live tekst)."""
    bg = Image.open(os.path.join(OUT, "scene-bg.jpg")).convert("RGB")
    H = bg.height
    im = bg.convert("RGBA")
    pack = Image.open(PF + "/Performance Gripsokken 2.0 Wit 3-pack productfoto ZA.png").convert("RGBA")
    pack = pack.crop(pack.getchannel("A").point(lambda v: 255 if v > 20 else 0).getbbox())
    ph = 760; s = ph / pack.height
    pack = pack.resize((int(pack.width * s), ph), Image.LANCZOS).rotate(8, expand=True, resample=Image.BICUBIC)
    px, py = W - pack.width + 30, H - 190 - pack.height + 150
    sh = Image.new("RGBA", im.size, (0, 0, 0, 0))
    sa = pack.getchannel("A").filter(ImageFilter.GaussianBlur(28)).point(lambda v: int(v * 0.85))
    sh.paste((0, 0, 0, 255), (px + 16, py + 44), sa)
    im = Image.alpha_composite(im, sh)
    d = ImageDraw.Draw(im)
    f = font(BLACKIT, 150)
    tracked(d, (68, 120), "JOUW", f, WHITE, -0.045)
    tracked(d, (68, 120 + 138), "CODE", f, WHITE, -0.045)
    inset = 48; ytop = H - 110
    card = Image.new("RGBA", im.size, (0, 0, 0, 0)); cd = ImageDraw.Draw(card)
    cd.rounded_rectangle((inset, ytop, W - inset, H + 200), radius=56, fill=WHITE + (255,))
    im = Image.alpha_composite(im, card)
    im.alpha_composite(pack, (max(0, px), py))
    im = im.convert("RGB"); im = im.resize((1120, int(im.height * 1120 / W)), Image.LANCZOS); save(im, "scene.jpg", 72)


def s3():
    """S3 v2: padel, omlaag vanuit het zwart (kop is live tekst erboven). Nieuw (E15): hetzelfde halftone-raster
    als sectie 1/2 loopt het beeld in, en het witte 3-pack steekt schuin over de onderrand van de foto het zwarte veld in."""
    H = 1560; PH = 1240; PY = 0
    cv = np.zeros((H, W, 3), np.float32) + np.array(BLACK, np.float32)
    # sterkere crop: dichter op speler en schoenen (landscape-bron 6000x4000), uitsnede 2400 breed
    photo = crop_fill(SP + "/PADEL/Wit 1.0/IMG_1646.JPG", S3_BOX, (W, PH))
    photo = grade(photo, 1.2, 0.95, 0.78, cool=0.03)
    p = to_arr(photo)
    al = vgrad(PH, 0, 1, 0, 420) * vgrad(PH, 1, 0, PH - 420, PH)
    cv[PY:PY + PH] = cv[PY:PY + PH] * (1 - al[..., None]) + p * al[..., None]
    im = grain(to_img(cv), 2.0, seed=5).convert("RGBA")
    # raster: zelfde taal als field(); dichtheid groeit naar het pack (rechtsonder)
    dots = Image.new("RGBA", im.size, (0, 0, 0, 0)); dd = ImageDraw.Draw(dots)
    cell = 40; cx_f, cy_f = 880, 1260
    for gy in range(0, H // cell + 1):
        for gx in range(0, W // cell + 1):
            x = gx * cell + (cell // 2 if gy % 2 else 0); y = gy * cell
            dist = np.hypot(x - cx_f, (y - cy_f) * 1.15)
            tf = float(np.clip(1 - dist / 820, 0, 1))
            r = 1.2 + 12.0 * (tf ** 1.4)
            if tf <= 0 or r < 2.0: continue
            dd.ellipse((x - r, y - r, x + r, y + r), fill=(255, 255, 255, int(25 + 95 * tf)))
    im = Image.alpha_composite(im, dots)
    pack = Image.open(PF + "/Performance Gripsokken 2.0 Wit 3-pack productfoto ZA.png").convert("RGBA")
    pack = pack.crop(pack.getchannel("A").point(lambda v: 255 if v > 20 else 0).getbbox())
    ph = 700; s = ph / pack.height
    pack = pack.resize((int(pack.width * s), ph), Image.LANCZOS).rotate(-9, expand=True, resample=Image.BICUBIC)
    px, py = W - pack.width - 40, H - pack.height - 20
    sh = Image.new("RGBA", im.size, (0, 0, 0, 0))
    sa = pack.getchannel("A").filter(ImageFilter.GaussianBlur(28)).point(lambda v: int(v * 0.85))
    sh.paste((0, 0, 0, 255), (px - 14, py + 40), sa)
    im = Image.alpha_composite(im, sh)
    im.alpha_composite(pack, (px, py))
    im = im.convert("RGB"); im = im.resize((1120, int(im.height * 1120 / W)), Image.LANCZOS)
    save(im, "s3.jpg", 70)


S3_BOX = (1000, 700, 3400, 3025)


def macro():
    """S4: macro van het grip-patroon als rustige onderlaag achter de ene bewijsregel."""
    H = 560
    src = Image.open(PF + "/Performance Gripsokken 2.0 Zwart voorkant.jpg").convert("RGB")
    w, h = src.size
    box = (int(w * 0.30), int(h * 0.55), int(w * 0.30) + 1600, int(h * 0.55) + int(1600 * H / W))
    ph = src.crop(box).resize((W, H), Image.LANCZOS)
    ph = grade(ph, 1.25, 0.6, 0.85)
    p = to_arr(ph)
    al = vgrad(H, 0, 1, 0, 300) * 0.9
    cv = np.zeros((H, W, 3), np.float32) + np.array(BLACK, np.float32)
    cv = cv * (1 - al[..., None]) + p * al[..., None]
    # links donkerder voor de tekst
    xs = np.linspace(0, 1, W, dtype=np.float32)[None, :]
    cv = BLACK[0] + (cv - BLACK[0]) * (0.35 + 0.65 * np.clip((xs - 0.35) / 0.65, 0, 1))[..., None]
    im = grain(to_img(cv), 2.0, seed=9)
    save(im, "macro.jpg", 68)


def emblem():
    lg = Image.open(LOGO).convert("RGBA"); lg = lg.crop(lg.getchannel("A").getbbox())
    s = 120 / lg.height; lg = lg.resize((int(lg.width * s), 120), Image.LANCZOS)
    save(lg, "emblem.png")


STEPS_MAP = {"hero": hero, "field": field, "scene": scene, "s3": s3, "macro": macro, "emblem": emblem}
if __name__ == "__main__":
    for s in STEPS:
        STEPS_MAP[s]()
