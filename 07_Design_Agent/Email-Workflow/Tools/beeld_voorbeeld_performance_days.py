# Ronde 5: feedback Lars 17-11. Groene (Volt) rand rond sporters, kop EARLY ACCESS HÏ PERFORMANCE DAYS,
# aanbod 1+1 / 2+2 / 3+3, inschrijf-/bestelsectie, nieuw GA DOOR-slotbeeld. Voor mail A (inschrijven) en B (code).
from PIL import Image, ImageDraw, ImageFilter
import beeld_basis as A
from beeld_basis import (W, VOLT, WHITE, BLACK, MUTE, BI, BLK, font, tw, text, caps, refine, shadow, spotlight,
                     tri_raster, grain, edge_to_black, backlight, sticker_img, circle_badge, barcode, save_jpg,
                     round_corners, OUT)

CARD_BG = (20, 20, 20)


def outlined(p, width=7, color=VOLT):
    """Sticker-rand: effen Volt-omlijning rond de uitgeknipte sporter (gladde, ronde hoeken)."""
    pad = width + 4
    a = p.getchannel("A")
    big = Image.new("L", (p.size[0] + pad * 2, p.size[1] + pad * 2), 0)
    big.paste(a, (pad, pad))
    d = big.filter(ImageFilter.MaxFilter(width * 2 + 1)).filter(ImageFilter.GaussianBlur(1.4))
    d = d.point(lambda v: 0 if v < 90 else 255 if v > 165 else int((v - 90) * 255 / 75))
    out = Image.new("RGBA", big.size, color + (0,))
    out.putalpha(d)
    out.alpha_composite(p, (pad, pad))
    return out, pad


def put(im, p, xy, width=7):
    o, pad = outlined(p, width)
    im.alpha_composite(o, (xy[0] - pad, xy[1] - pad))


# ---------------------------------------------------------------- HERO (A en B)
def hero(out, athlete, ath_h, ath_cx, badge, ath_bottom=1150):
    H = 1500
    size = (W, H)
    bg = Image.alpha_composite(spotlight(size, 820, 720, 600).convert("RGBA"), backlight(size, ath_cx, 640, 330, 420, (56, 58, 52)))
    bg = Image.alpha_composite(bg, tri_raster(size, ath_cx, 680, 540))
    im = edge_to_black(grain(bg), 120).convert("RGBA")
    # EARLY achter de sporter
    back = Image.new("RGBA", size, (0, 0, 0, 0))
    text(ImageDraw.Draw(back), (70, 130), "EARLY", font(BI, 200), WHITE)
    im = Image.alpha_composite(im, back)
    p = refine(athlete, ath_h)
    px, py = int(ath_cx - p.size[0] / 2), ath_bottom - p.size[1]
    im = Image.alpha_composite(im, shadow(size, ath_cx + 30, ath_bottom - 10, p.size[0] * 0.33, 26))
    put(im, p, (px, py), 8)
    # voor de sporter: ACCESS-sticker en HÏ PERFORMANCE DAYS
    st = sticker_img("ACCESS", 156, -4)
    im.alpha_composite(st, (64, 318))
    d = ImageDraw.Draw(im)
    f3 = font(BI, 118)
    text(d, (70, 520), "HÏ PERFORMANCE", f3, WHITE)
    text(d, (70, 630), "DAYS.", f3, WHITE)
    caps(d, (W - 72, 70), "[ BLACK FRIDAY 27.11 ]", 18, MUTE, anchor="r")
    caps(d, (W - 72, 100), "T/M CYBER MONDAY 30.11", 18, WHITE, anchor="r")
    # aanbod onderin
    f4 = font(BI, 116)
    x = 70
    for i, t in enumerate(["1", "+", "1", "  ", "2", "+", "2", "  ", "3", "+", "3"]):
        x = text(d, (x, 1196), t, f4, VOLT if t == "+" else WHITE)
    caps(d, (74, 1352), "[ KOOP 1, 2 OF 3 PAAR. JE KRIJGT ER EVENVEEL GRATIS BIJ ]", 17, (190, 190, 190))
    circle_badge(d, 120, 1050, 46, badge[0], badge[1])
    caps(d, (W - 72, H - 50), "03", 16, MUTE, track=0.1, anchor="r")
    d.line([(W - 200, H - 40), (W - 108, H - 40)], fill=MUTE, width=2)
    caps(d, (W - 250, H - 50), "01", 16, MUTE, track=0.1)
    save_jpg(im, out, 84)


# ---------------------------------------------------------------- DEALKAARTEN per tier (sokken)
def tier_cards():
    """Bol-stijl: echte packshots op wit, strak en schoon."""
    socks = {"z": "pack-zwart.png", "w": "pack-wit.png"}
    tiers = [("1+1", "r5-tier-1.jpg", "zw"), ("2+2", "r5-tier-2.jpg", "zwzw"), ("3+3", "r5-tier-3.jpg", "zwzwzw")]
    for label, name, combo in tiers:
        w, h, cut = 520, 640, 70
        card = Image.new("RGBA", (w, h), (0, 0, 0, 0))
        d = ImageDraw.Draw(card)
        d.rounded_rectangle([0, 0, w - 1, h - 1], 22, fill=(250, 250, 248, 255))
        n = len(combo)
        sh = {2: 400, 4: 350, 6: 310}[n]
        step = {2: 170, 4: 100, 6: 66}[n]
        total = step * (n - 1)
        for i, k in enumerate(combo):
            s = refine(socks[k], sh, con=1.0)
            cx = int(w / 2 - total / 2 + i * step) + 20
            card.alpha_composite(shadow((w, h), cx, 582, 80, 9, 60, 10))
            card.alpha_composite(s, (cx - s.size[0] // 2, 585 - s.size[1]))
        text(ImageDraw.Draw(card), (34, 18), label, font(BI, 104), BLACK)
        mask = Image.new("L", (w, h), 0)
        md = ImageDraw.Draw(mask)
        md.rounded_rectangle([0, 0, w - 1, h - 1], 22, fill=255)
        md.polygon([(w - cut, h), (w, h), (w, h - cut)], fill=0)
        card.putalpha(Image.composite(card.getchannel("A"), Image.new("L", (w, h), 0), mask))
        bg = Image.new("RGBA", (w, h), BLACK + (255,))
        save_jpg(Image.alpha_composite(bg, card), name, 90)


# ---------------------------------------------------------------- INSCHRIJF-/BESTELKAART (sporter rechts)
def cta_athlete(athlete, h, out, anchor_top=False):
    w, H = 520, 640
    im = Image.new("RGBA", (w, H), CARD_BG + (255,))
    im = Image.alpha_composite(im, backlight((w, H), w // 2, 300, 200, 260, (44, 46, 40)))
    im = Image.alpha_composite(im, tri_raster((w, H), w // 2, 300, 300, (36, 36, 36), 26))
    p = refine(athlete, h)
    x = w // 2 - p.size[0] // 2
    y = (-6) if anchor_top else (H - 50 - p.size[1])
    if not anchor_top:
        im = Image.alpha_composite(im, shadow((w, H), w // 2, H - 56, p.size[0] * 0.34, 14, 220, 10))
    put(im, p, (x, y), 7)
    save_jpg(im, out, 84)


# ---------------------------------------------------------------- GA DOOR WAAR ANDEREN STOPPEN (slotbeeld)
def closer(out, athlete, ath_h, ath_cx):
    H = 1460
    size = (W, H)
    bg = Image.alpha_composite(spotlight(size, ath_cx, 700, 620).convert("RGBA"), backlight(size, ath_cx, 700, 360, 480, (54, 56, 50)))
    bg = Image.alpha_composite(bg, tri_raster(size, ath_cx, 720, 560))
    im = edge_to_black(grain(bg), 120).convert("RGBA")
    back = Image.new("RGBA", size, (0, 0, 0, 0))
    bd = ImageDraw.Draw(back)
    text(bd, (66, 210), "GA DOOR", font(BI, 236), WHITE)
    fs = 150
    while tw(font(BI, fs), "WAAR ANDEREN", -0.045) > W - 150:
        fs -= 2
    text(bd, (70, 440), "WAAR ANDEREN", font(BI, fs), WHITE)
    im = Image.alpha_composite(im, back)
    p = refine(athlete, ath_h)
    bottom = 1330
    im = Image.alpha_composite(im, shadow(size, ath_cx + 20, bottom - 8, p.size[0] * 0.33, 24))
    put(im, p, (int(ath_cx - p.size[0] / 2), bottom - p.size[1]), 8)
    d = ImageDraw.Draw(im)
    st = sticker_img("STOPPEN.", 196, -4)  # voor de sporter, als stempel
    im.alpha_composite(st, (40, 600))
    d = ImageDraw.Draw(im)
    caps(d, (72, 70), "[ HÏ PERFORMANCE DAYS ]", 18, MUTE)
    for i, s in enumerate(["VOOR WIE DOORGAAT.", "NIET VOOR DE REST."]):
        caps(d, (W - 72, 70 + i * 30), s, 18, WHITE, anchor="r")
    for i, s in enumerate(["[ VOETBAL ]", "[ TENNIS ]", "[ PADEL ]", "[ RUGBY ]"]):
        caps(d, (76, 960 + i * 32), s, 17, (170, 170, 170))
    barcode(d, W - 72 - 210, H - 120, 210, 50)
    caps(d, (W - 72, H - 56), "MADE FOR WINNING", 14, MUTE, anchor="r")
    save_jpg(im, out, 84)


# ---------------------------------------------------------------- STUDIO-TEGELS met groene rand
def studio(name, w, h, fig_h, out, anchor="floor", cx=0.5):
    t = Image.new("RGB", (w, h), (0, 0, 0))
    d = ImageDraw.Draw(t)
    for y in range(h):
        q = y / h
        v = 30 - 14 * q if q < 0.72 else 22 + 10 * (q - 0.72) / 0.28
        d.line([(0, y), (w, y)], fill=(int(v), int(v), int(v * 0.96)))
    t = t.convert("RGBA")
    t = Image.alpha_composite(t, backlight((w, h), int(w * cx), int(h * 0.42), int(w * 0.42), int(h * 0.42), (64, 66, 60)))
    f = refine(name, fig_h)
    x = int(w * cx - f.size[0] / 2)
    if anchor == "floor":
        y = int(h * 0.9 - f.size[1])
        t = Image.alpha_composite(t, shadow((w, h), int(w * cx), int(h * 0.9) - 4, f.size[0] * 0.36, 12, 200, 9))
    elif anchor == "top":
        y = int(h * 0.92 - f.size[1])
        t = Image.alpha_composite(t, shadow((w, h), int(w * cx), int(h * 0.92) - 4, f.size[0] * 0.36, 12, 200, 9))
    else:
        y = -2
    put(t, f, (x, y), 6)
    save_jpg(round_corners(grain(t, 0.02), 22), out, 84)


def studio_tiles():
    studio("sp-tennis-wit-1179.png", 560, 560, 460, "r5-g1.jpg")
    studio("voetbal_wit_trap.png", 560, 560, 400, "r5-g2.jpg", anchor="flush")
    studio("f6.png", 360, 460, 380, "r5-g3.jpg")
    studio("sport-padel-2000.png", 360, 460, 510, "r5-g4.jpg", anchor="top")
    studio("sport-voetbal-2000.png", 360, 460, 370, "r5-g5.jpg", cx=0.52)


def run6():
    tier_cards()
    closer("r5-closer-a.jpg", "tennis-actie.png", 860, 900)
    closer("r5-closer-b.jpg", "sport-voetbal-2000.png", 780, 860)
    cta_athlete("sport-padel-2000.png", 600, "r5-cta-a.jpg", anchor_top=True)
    cta_athlete("sport-padel-2000.png", 600, "r5-cta-b.jpg", anchor_top=True)


if __name__ == "__main__":
    import sys
    if "6" in sys.argv:
        run6(); sys.exit()
    hero("r5-hero-a.jpg", "sport-voetbal-2000.png", 1000, 860, ("VROEGE TOEGANG", "[DATUM]"))
    hero("r5-hero-b.jpg", "sp-tennis-wit-1179.png", 820, 870, ("JOUW CODE", "IS BINNEN"))
    tier_cards()
    cta_athlete("f6.png", 520, "r5-cta-a.jpg")
    cta_athlete("sport-voetbal-2000.png", 560, "r5-cta-b.jpg")
    closer("r5-closer-a.jpg", "sp-tennis-wit-1179.png", 820, 1000)
    closer("r5-closer-b.jpg", "sport-voetbal-2000.png", 780, 860)
    studio_tiles()
