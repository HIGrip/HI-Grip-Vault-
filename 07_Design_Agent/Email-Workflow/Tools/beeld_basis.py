# Ronde 4: A1 x B3 op zwart, FRZN/Doré-niveau. Alle beelden 2x (1200 breed voor 600px slot).
import pathlib, random
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageEnhance, ImageChops

import os
ROOT = pathlib.Path(os.environ.get("EMAIL_WORK", pathlib.Path(__file__).parent))  # werkmap met src/, src/cut/, assets/
FONTS_DIR = pathlib.Path(__file__).parent.parent / "Fonts"
SRC, CUT, OUT, FONTS = ROOT / "src", ROOT / "src" / "cut", ROOT / "assets", FONTS_DIR
BI, BLK, SEMI = (str(FONTS / f) for f in ("Poppins-BlackItalic.ttf", "Poppins-Black.ttf", "Poppins-SemiBold.ttf"))
VOLT, WHITE, BLACK, MUTE = (204, 255, 0), (255, 255, 255), (10, 10, 10), (144, 145, 148)
W = 1200


# ---------------------------------------------------------------- helpers
def font(path, size):
    return ImageFont.truetype(path, size)


def tw(f, s, track):
    return sum(f.getlength(c) for c in s) + track * f.size * (len(s) - 1)


def text(d, xy, s, f, fill, track=-0.045):
    x, y = xy
    for c in s:
        d.text((x, y), c, font=f, fill=fill)
        x += f.getlength(c) + track * f.size
    return x


def caps(d, xy, s, size=19, fill=MUTE, track=0.18, anchor="l"):
    f = font(SEMI, size)
    w = tw(f, s, track)
    x = xy[0] - (w if anchor == "r" else 0)
    text(d, (x, xy[1]), s, f, fill, track)
    return w


ERODE = {"sp-tennis-wit-1179.png": 7, "f6.png": 5}


def refine(name, height, sat=1.0, con=1.06):
    """Gladde, afgeronde randen: 1px eroderen, alpha verzachten en weer aanscherpen (geen rafels of halo)."""
    im = Image.open(CUT / name).convert("RGBA")
    a = im.getchannel("A").filter(ImageFilter.MinFilter(ERODE.get(name, 3))).filter(ImageFilter.GaussianBlur(1.6))
    a = a.point(lambda v: 0 if v < 70 else 255 if v > 190 else int((v - 70) * 255 / 120))
    rgb = ImageEnhance.Contrast(ImageEnhance.Color(im.convert("RGB")).enhance(sat)).enhance(con)
    im = rgb.convert("RGBA")
    im.putalpha(a)
    w = int(im.size[0] * height / im.size[1])
    return im.resize((w, height), Image.LANCZOS)


def rim(p, color=(235, 240, 225), spread=3, blur=4, op=0.35):
    """Randlicht: zachte lichtrand rond de sporter zodat zwart shirt loskomt van zwarte achtergrond."""
    a = p.getchannel("A")
    pad = spread * 4
    big = Image.new("L", (p.size[0] + pad * 2, p.size[1] + pad * 2), 0)
    big.paste(a, (pad, pad))
    g = big.filter(ImageFilter.MaxFilter(spread * 2 + 1)).filter(ImageFilter.GaussianBlur(blur))
    g = g.point(lambda v: int(v * op))
    lay = Image.new("RGBA", big.size, color + (0,))
    lay.putalpha(g)
    return lay, pad


def place(im, p, xy, rim_col=(235, 240, 225), rim_op=0.35, shift=(-5, -6)):
    """Gericht randlicht van linksboven: de gloed schuift op, de sporter dekt de rest af."""
    lay, pad = rim(p, rim_col, op=rim_op)
    im.alpha_composite(lay, (xy[0] - pad + shift[0], xy[1] - pad + shift[1]))
    im.alpha_composite(p, xy)


def backlight(size, cx, cy, rx, ry, col=(70, 72, 66), op=255):
    lay = Image.new("RGBA", size, (0, 0, 0, 0))
    ImageDraw.Draw(lay).ellipse([cx - rx, cy - ry, cx + rx, cy + ry], fill=col + (op,))
    return lay.filter(ImageFilter.GaussianBlur(min(rx, ry) * 0.55))


def shadow(size, cx, cy, rw, rh, op=170, blur=22):
    s = Image.new("RGBA", size, (0, 0, 0, 0))
    ImageDraw.Draw(s).ellipse([cx - rw, cy - rh, cx + rw, cy + rh], fill=(0, 0, 0, op))
    return s.filter(ImageFilter.GaussianBlur(blur))


def spotlight(size, cx, cy, r, col=(34, 34, 34)):
    w, h = size
    base = Image.new("RGB", size, BLACK)
    m = Image.new("L", size, 0)
    ImageDraw.Draw(m).ellipse([cx - r, cy - r, cx + r, cy + r], fill=255)
    m = m.filter(ImageFilter.GaussianBlur(r * 0.45))
    return Image.composite(Image.new("RGB", size, col), base, m)


def tri_raster(size, cx, cy, r, col=(40, 40, 40), cell=30):
    """Grippatroon van de zool (driehoeken) als 'gespoten' merkhandtekening, vervaagt naar de randen."""
    w, h = size
    lay = Image.new("RGBA", size, (0, 0, 0, 0))
    d = ImageDraw.Draw(lay)
    rnd = random.Random(5)
    for j, y in enumerate(range(0, h, int(cell * 0.87))):
        off = (cell / 2) if j % 2 else 0
        for x in range(-cell, w + cell, cell):
            px = x + off
            dist = ((px - cx) ** 2 + (y - cy) ** 2) ** 0.5 / r
            if dist > 1 or rnd.random() < dist ** 1.6:
                continue
            s = cell * 0.36
            up = (j + x // cell) % 2 == 0
            pts = [(px, y - s), (px - s, y + s * 0.8), (px + s, y + s * 0.8)] if up else [(px, y + s), (px - s, y - s * 0.8), (px + s, y - s * 0.8)]
            d.polygon(pts, fill=col + (int(255 * (1 - dist) ** 0.7),))
    return lay


def grain(im, amt=0.035):
    n = Image.effect_noise(im.size, 40).convert("RGB")
    return Image.blend(im.convert("RGB"), n, amt)


def round_corners(im, r, bg=BLACK):
    m = Image.new("L", im.size, 0)
    ImageDraw.Draw(m).rounded_rectangle([0, 0, im.size[0] - 1, im.size[1] - 1], r, fill=255)
    out = Image.new("RGB", im.size, bg)
    out.paste(im.convert("RGB"), (0, 0), m)
    return out


def sticker_img(s, size, rot):
    f = font(BI, size)
    w, h = int(tw(f, s, -0.045)) + int(size * 0.34), int(size * 1.18)
    t = Image.new("RGBA", (w, h), VOLT + (255,))
    text(ImageDraw.Draw(t), (int(size * 0.15), int(-size * 0.17)), s, f, BLACK)
    return t.rotate(rot, expand=True, resample=Image.BICUBIC)


def circle_badge(d, cx, cy, r, line1, line2):
    d.ellipse([cx - r, cy - r, cx + r, cy + r], outline=(200, 200, 200), width=2)
    a = r * 0.32
    d.line([(cx - a, cy + a), (cx + a, cy - a)], fill=WHITE, width=3)
    d.line([(cx + a, cy - a), (cx - a * 0.1, cy - a)], fill=WHITE, width=3)
    d.line([(cx + a, cy - a), (cx + a, cy + a * 0.1)], fill=WHITE, width=3)
    caps(d, (cx + r + 24, cy - 26), line1, 17, MUTE)
    text(d, (cx + r + 24, cy - 2), line2, font(BLK, 30), WHITE, -0.02)


def barcode(d, x, y, w, h, col=WHITE, seed=27):
    rnd = random.Random(seed)
    xx = x
    while xx < x + w:
        b = rnd.choice([2, 2, 3, 4, 5])
        if rnd.random() > 0.4:
            d.rectangle([xx, y, xx + b - 1, y + h], fill=col)
        xx += b + rnd.choice([2, 3])


def edge_to_black(im, feather=110):
    """Randen naadloos naar mailzwart, zodat het beeld geen zichtbaar blok vormt."""
    w, h = im.size
    m = Image.new("L", (w, h), 0)
    ImageDraw.Draw(m).rectangle([feather, feather, w - feather, h - feather], fill=255)
    m = m.filter(ImageFilter.GaussianBlur(feather * 0.55))
    return Image.composite(im.convert("RGB"), Image.new("RGB", (w, h), BLACK), m)


def save_jpg(im, name, q=80):
    im.convert("RGB").save(OUT / name, "JPEG", quality=q, optimize=True, progressive=True)
    print(name, im.size, round((OUT / name).stat().st_size / 1024), "KB")


def crop_to(im, w, h, cx=0.5, cy=0.5):
    sw, sh = im.size
    r = w / h
    nw, nh = (int(sh * r), sh) if sw / sh > r else (sw, int(sw / r))
    x = max(0, min(sw - nw, int(cx * sw - nw / 2)))
    y = max(0, min(sh - nh, int(cy * sh - nh / 2)))
    return im.crop((x, y, x + nw, y + nh)).resize((w, h), Image.LANCZOS)


def grade(im, sat=0.86, con=1.14, bright=None, target=0.40):
    """Huis-grading: gelijke helderheid, iets minder verzadiging, diepe zwarten, warm-neutrale hooglichten."""
    im = im.convert("RGB")
    from PIL import ImageStat
    lum = ImageStat.Stat(im.convert("L")).mean[0] / 255
    im = ImageEnhance.Brightness(im).enhance(target / max(lum, 0.05))
    im = ImageEnhance.Color(im).enhance(sat)
    im = ImageEnhance.Contrast(im).enhance(con)
    # zwart naar mailzwart, hooglichten afronden
    lut = [max(10, min(245, int(10 + (v / 255) ** 1.08 * 235))) for v in range(256)]
    im = im.point(lut * 3)
    r, g, b = im.split()
    b = b.point(lambda v: int(v * 0.96))  # klein beetje warmer, alle foto's gelijk
    return Image.merge("RGB", (r, g, b))


# ---------------------------------------------------------------- 1. HERO
def hero():
    H = 1500
    size = (W, H)
    bg = Image.alpha_composite(spotlight(size, 800, 760, 600).convert("RGBA"), backlight(size, 850, 640, 330, 420, (58, 60, 54)))
    bg = Image.alpha_composite(bg, tri_raster(size, 800, 700, 540))
    im = edge_to_black(grain(bg), 120).convert("RGBA")  # alleen de achtergrond loopt naadloos weg
    # laag 1: kop (achter de sporter)
    back = Image.new("RGBA", size, (0, 0, 0, 0))
    bd = ImageDraw.Draw(back)
    f = font(BI, 182)
    y0 = 150
    text(bd, (72, y0), "JIJ BENT", f, WHITE)
    x_er = text(bd, (72, y0 + 164), "ER", f, WHITE)
    text(bd, (72, y0 + 328), "BIJ.", f, WHITE)
    im = Image.alpha_composite(im, back)
    # laag 2: sporter, overlapt alleen de uiteinden van de regels
    p = refine("sport-voetbal-2000.png", 1060, sat=1.02)
    cx = 830
    px, py = cx - p.size[0] // 2, 1250 - p.size[1]
    im = Image.alpha_composite(im, shadow(size, cx + 40, 1236, 280, 28))
    place(im, p, (px, py), rim_op=0.42)
    # laag 3 (voor de sporter): sticker, aanbod, annotaties
    st = sticker_img("EERDER", 150, -4)
    im.alpha_composite(st, (int(x_er + 26), y0 + 164 + 14))
    d = ImageDraw.Draw(im)
    caps(d, (W - 72, 70), "[ HÏ PERFORMANCE DAYS ]", 18, MUTE, anchor="r")
    caps(d, (W - 72, 100), "27.11 T/M 30.11.2026", 18, WHITE, anchor="r")
    for i, s in enumerate(["[ ALLEEN VOOR DE LIJST ]", "[ VÓÓR DE REST ]", "[ BLACK FRIDAY 27.11 ]"]):
        caps(d, (76, 760 + i * 32), s, 17, (170, 170, 170))
    f2 = font(BI, 112)
    text(d, (72, 1236), "2 KOPEN.", f2, WHITE)
    text(d, (72, 1340), "2 GRATIS.", f2, VOLT)
    circle_badge(d, W - 400, 1330, 50, "VROEGE TOEGANG", "[DATUM]")
    caps(d, (W - 72, H - 50), "03", 16, MUTE, track=0.1, anchor="r")
    d.line([(W - 200, H - 40), (W - 108, H - 40)], fill=MUTE, width=2)
    caps(d, (W - 250, H - 50), "01", 16, MUTE, track=0.1)
    save_jpg(im, "r4-hero.jpg", 84)


# ---------------------------------------------------------------- 2. WOORDMERK MET SPORTERS (FRZN PUFFERS)
def wordmark():
    H = 820
    size = (W, H)
    im = Image.new("RGBA", size, BLACK + (255,))
    s = "HÏ GRIP"
    tr = -0.05
    fs = 400
    while tw(font(BI, fs), s, tr) > W - 170:
        fs -= 4
    f = font(BI, fs)
    x0 = (W - tw(f, s, tr)) / 2
    lay = Image.new("RGBA", size, (0, 0, 0, 0))
    text(ImageDraw.Draw(lay), (x0, 330), s, f, VOLT, tr)
    dots_top, bottom = lay.getbbox()[1], lay.getbbox()[3]
    g = Image.new("L", size, 0)
    ImageDraw.Draw(g).text((x0 + sum(f.getlength(c) + tr * f.size for c in "HÏ "), 330), "G", font=f, fill=255)
    top = g.getbbox()[1] + 6  # echte bovenrand van de letters (zonder trema)
    im = Image.alpha_composite(im, lay)
    # middens per letter
    centers, x = {}, x0
    for i, c in enumerate(s):
        w = f.getlength(c)
        centers[i] = x + w / 2 + f.size * 0.06  # cursief: bovenkant schuift naar rechts
        x += w + tr * f.size
    figs = [  # (bestand, hoogte, midden-x, onderkant-y, soort)
        ("sp-tennis-wit-1179.png", 320, centers[3] + 6, top + 4, "top"),                 # staat op de G
        ("f6.png", 290, centers[6] + 4, top + 4, "top"),                                 # staat op de P
        ("sport-voetbal-2000.png", 420, centers[0] - 30, bottom + 60, "front"),          # haalt uit voor de H
    ]
    for name, h, cx, by, kind in figs:
        p = refine(name, h)
        if kind == "air":
            im = Image.alpha_composite(im, shadow(size, cx + 10, dots_top + 4, p.size[0] * 0.22, 8, 120, 9))
        elif kind == "top":
            im = Image.alpha_composite(im, shadow(size, cx, by - 6, p.size[0] * 0.3, 10, 230, 7))
        else:
            im = Image.alpha_composite(im, shadow(size, cx + 30, by - 10, p.size[0] * 0.36, 14, 220, 12))
        place(im, p, (int(cx - p.size[0] / 2), int(by - p.size[1])), rim_op=0.3, shift=(-3, -4))
    d = ImageDraw.Draw(im)
    caps(d, (76, 56), "[ VOETBAL ]  [ TENNIS ]  [ PADEL ]  [ RUGBY ]", 17, MUTE)
    caps(d, (W - 76, 56), "3500+ SPORTERS", 17, WHITE, anchor="r")
    caps(d, (W - 76, H - 52), "DE KEUZE VAN 3500+ SPORTERS", 16, MUTE, anchor="r")
    save_jpg(im, "r4-wordmark.jpg", 84)


# ---------------------------------------------------------------- 3. DEALKAARTEN (FRZN inventory)
def deal_cards():
    for src, name in [("sock-f7.png", "r4-card-zwart.png"), ("sock-f8.png", "r4-card-wit.png"), ("sock-f9.png", "r4-card-10.png")]:
        w, h, cut = 520, 640, 70
        card = Image.new("RGBA", (w, h), (0, 0, 0, 0))
        d = ImageDraw.Draw(card)
        d.rounded_rectangle([0, 0, w - 1, h - 1], 22, fill=(228, 228, 224, 255))
        d.polygon([(w - cut, h), (w, h), (w, h - cut)], fill=(0, 0, 0, 0))
        # afgeschuinde hoek rechtsonder (FRZN): rand met transparantie
        mask = Image.new("L", (w, h), 0)
        md = ImageDraw.Draw(mask)
        md.rounded_rectangle([0, 0, w - 1, h - 1], 22, fill=255)
        md.polygon([(w - cut, h), (w, h), (w, h - cut)], fill=0)
        card.putalpha(mask)
        p = refine(src, 500)
        card.alpha_composite(shadow((w, h), w // 2, 590, 150, 16, 90, 14))
        card.alpha_composite(p, ((w - p.size[0]) // 2, 70))
        card = card.convert("RGBA")
        bg = Image.new("RGBA", (w, h), BLACK + (255,))
        save_jpg(Image.alpha_composite(bg, card), name.replace(".png", ".jpg"), 84)


# ---------------------------------------------------------------- 4. FOTO-GRID met ronde hoeken (kleur)
def grid_photos():
    jobs = [("f1.jpg", "r4-g1.jpg", .52, .66, 560, 560),                       # zool op stadiongras
            ("hero-padel-zool-2400.webp", "r4-g2.jpg", .5, .5, 560, 560),       # grippatroon padel
            ("f5.jpg", "r4-g3.jpg", .30, .78, 360, 460),                        # sok + schoen in de trap
            ("sp-padel-voeten-1800.webp", "r4-g4.jpg", .5, .6, 360, 460),        # voeten op de baan
            ("f4.jpg", "r4-g5.jpg", .62, .62, 360, 460)]                         # gravel, harde schaduw
    for src, name, cx, cy, w, h in jobs:
        save_jpg(round_corners(grade(crop_to(Image.open(SRC / src), w, h, cx, cy)), 22), name, 80)


# ---------------------------------------------------------------- 4b. STUDIO-TEGELS (FRZN: elke figuur in dezelfde studio)
def studio(name, w, h, fig_h, anchor="floor", cx=0.5, out="x.jpg"):
    t = Image.new("RGB", (w, h), (0, 0, 0))
    d = ImageDraw.Draw(t)
    for y in range(h):  # wand: zacht verloop, vloer iets lichter (cyclorama)
        p = y / h
        v = 30 - 14 * p if p < 0.72 else 22 + 10 * (p - 0.72) / 0.28
        d.line([(0, y), (w, y)], fill=(int(v), int(v), int(v * 0.96)))
    t = t.convert("RGBA")
    t = Image.alpha_composite(t, backlight((w, h), int(w * cx), int(h * 0.42), int(w * 0.42), int(h * 0.42), (64, 66, 60)))
    f = refine(name, fig_h)
    x = int(w * cx - f.size[0] / 2)
    if anchor == "floor":
        y = int(h * 0.9 - f.size[1])
        t = Image.alpha_composite(t, shadow((w, h), int(w * cx), int(h * 0.9) - 4, f.size[0] * 0.36, 12, 200, 9))
    elif anchor == "top":  # bovenkant valt buiten beeld (bron is afgesneden)
        y = int(h * 0.92 - f.size[1])
        t = Image.alpha_composite(t, shadow((w, h), int(w * cx), int(h * 0.92) - 4, f.size[0] * 0.36, 12, 200, 9))
    else:  # 'flush': bovenrand van de figuur precies op de tegelrand
        y = -2
    place(t, f, (x, y), rim_op=0.14, shift=(-2, -3))
    d = ImageDraw.Draw(t)
    save_jpg(round_corners(grain(t, 0.02), 22), out, 84)


def studio_tiles():
    studio("sp-tennis-wit-1179.png", 560, 560, 470, out="r4-g1.jpg")
    studio("voetbal_wit_trap.png", 560, 560, 400, anchor="flush", cx=0.5, out="r4-g2.jpg")
    studio("f6.png", 360, 460, 390, out="r4-g3.jpg")
    studio("sport-padel-2000.png", 360, 460, 520, anchor="top", out="r4-g4.jpg")
    studio("sport-voetbal-2000.png", 360, 460, 380, cx=0.52, out="r4-g5.jpg")


# ---------------------------------------------------------------- 5. SLOTBEELD (FRZN 'BUILT FOR COLD')
def closer():
    H = 1300
    ph = grade(crop_to(Image.open(SRC / "f1.jpg"), W, H, 0.55, 0.55), target=0.36)
    # verloop naar zwart onder voor de tekst
    m = Image.new("L", (W, H), 0)
    md = ImageDraw.Draw(m)
    for y in range(H):
        p = y / H
        md.line([(0, y), (W, y)], fill=int(255 * max(0, (p - 0.45) / 0.55) ** 1.3 * 0.95))
    ph = Image.composite(Image.new("RGB", (W, H), BLACK), ph, m).convert("RGBA")
    d = ImageDraw.Draw(ph)
    caps(d, (72, 64), "[ BLACK FRIDAY 27.11 ]", 18, WHITE)
    for i, s in enumerate(["VOOR WIE DOORGAAT.", "NIET VOOR", "DE REST."]):
        caps(d, (W - 72, 64 + i * 30), s, 18, WHITE, anchor="r")
    f = font(BI, 132)
    for i, s in enumerate(["GA DOOR WAAR", "ANDEREN", "STOPPEN."]):
        text(d, (72, 880 + i * 118), s, f, VOLT if i == 2 else WHITE)
    barcode(d, W - 72 - 220, H - 128, 220, 56)
    caps(d, (W - 72, H - 58), "PERFORMANCE DAYS 2026", 14, MUTE, anchor="r")
    save_jpg(round_corners(grain(ph, 0.03), 26), "r4-closer.jpg", 80)


# ---------------------------------------------------------------- 6. kleine barcode voor topbar/footer
def small_barcode():
    im = Image.new("RGB", (300, 60), BLACK)
    barcode(ImageDraw.Draw(im), 0, 0, 300, 60, WHITE, seed=9)
    im.save(OUT / "r4-barcode.png", optimize=True)


if __name__ == "__main__":
    hero(); wordmark(); deal_cards(); grid_photos(); studio_tiles(); closer(); small_barcode()
