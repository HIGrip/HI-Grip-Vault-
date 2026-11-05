"""v3.11: hero en eerste GIF-beeld met "30% KORTING / NA 5 KORTE VRAGEN"; sporttegels met een witte knop op de foto zodat duidelijk is dat je erop tikt."""
import io
import pathlib
import urllib.request
from PIL import Image, ImageDraw, ImageFont, ImageEnhance, ImageOps

HERE = pathlib.Path(__file__).parent
VAULT = HERE.parent
SRC = HERE / "_src4"  # originelen van higrip.nl/cdn/shop/files, zonder verkleining
CONCORDIA = pathlib.Path("H:/Gedeelde drives/HÏ GRIP WORKSPACE/B2B - HÏ Grip/SPORTCLUBS/CONCORDIA")
PILATES = pathlib.Path("H:/Gedeelde drives/HÏ GRIP WORKSPACE/B2B - HÏ Grip/PILATES/MYHEALTH CLUB/PILATES SHOOT")
ADS = VAULT / "05_Social_Agent" / "Visuele Productie" / "Ads AB-test features vs beste"
OUT = HERE / "mail-assets"
S = 2  # GIF-schaal: weergave 552x414, bestand 1104x828
W, H = 552 * S, 414 * S
BLACK, WHITE = (10, 10, 10), (255, 255, 255)

font = lambda name, size: ImageFont.truetype(str(ADS / "fonts" / f"Poppins-{name}.ttf"), size * S)


def shop(name):
    path = SRC / name
    if not path.exists():
        SRC.mkdir(exist_ok=True)
        path.write_bytes(urllib.request.urlopen(f"https://www.higrip.nl/cdn/shop/files/{name}").read())
    return path


SPORTS = {
    "padel": (shop("IMG_1655.jpg"), (0.42, 0.5)),
    "tennis": (shop("Tennissokken_met_grip.jpg"), (0.5, 0.5)),
    "voetbal": (shop("IMG_1478_1c5d2d86-ffa3-4467-8388-dbc0d3b478cd.jpg"), (0.52, 0.45)),
    "rugby": (shop("hg-rugby-hero.jpg"), (0.5, 0.5)),
    "pilates": (PILATES / "IMG_2727.JPG", (0.5, 0.55)),
    "anders": (shop("Gymsokken_met_grip.jpg"), (0.62, 0.5)),
}


def load(path):
    im = Image.open(path)
    im.draft("RGB", (2400, 2400))
    return ImageOps.exif_transpose(im).convert("RGB")


def cover(im, size, focus=(0.5, 0.5)):
    tw, th = size
    scale = max(tw / im.width, th / im.height)
    if scale > 1:
        print("  let op: opgeschaald", im.size, "->", size)
    im = im.resize((round(im.width * scale), round(im.height * scale)), Image.LANCZOS)
    left = min(max(0, round(im.width * focus[0] - tw / 2)), im.width - tw)
    top = min(max(0, round(im.height * focus[1] - th / 2)), im.height - th)
    return im.crop((left, top, left + tw, top + th))


photos = {key: load(path) for key, (path, _) in SPORTS.items()}


M = 32 * S  # marge links en rechts


def fit(name, texts, size):
    """Grootste maat <= size waarbij de breedste regel binnen de marges past."""
    while max(ink(font(name, size), t)[2] - ink(font(name, size), t)[0] for t in texts) > W - 2 * M:
        size -= 1
    return font(name, size)


def ink(f, text):
    # echte inktrand t.o.v. het tekenpunt (anchor ls); cursief begint niet op x=0
    left, top, right, bottom = f.getmask(text).getbbox()
    ox, oy = f.getbbox(text, anchor="ls")[:2]
    return ox + left, oy + top, ox + right, oy + bottom


def put(d, text, f, base, fill):
    d.text((M - ink(f, text)[0], base), text, font=f, fill=fill, anchor="ls")


HEAD = fit("BlackItalic", ["30% KORTING"], 120)
HEAD2 = fit("BlackItalic", ["NA 5 KORTE VRAGEN"], 120)
WORD = fit("BlackItalic", ["VOETBAL?", "PILATES?", "ANDERS?", "OF IETS"], 96)


def poster():
    im = ImageEnhance.Brightness(cover(load(CONCORDIA / "IMG_0268.JPG"), (W, H), (0.5, 0.6))).enhance(0.42)
    d = ImageDraw.Draw(im)
    # twee regels even breed, onderste op dezelfde basislijn als de sportwoorden
    base2 = H - 40 * S
    base1 = base2 + ink(HEAD2, "NA 5 KORTE VRAGEN")[1] - 18 * S
    put(d, "30% KORTING", HEAD, base1, WHITE)
    put(d, "NA 5 KORTE VRAGEN", HEAD2, base2, WHITE)
    return im


def photo_word(key, word):
    im = ImageEnhance.Brightness(cover(photos[key], (W, H), SPORTS[key][1])).enhance(0.62)
    put(ImageDraw.Draw(im), word, WORD, H - 40 * S, WHITE)
    return im


def closing():
    im = Image.new("RGB", (W, H), WHITE)
    d = ImageDraw.Draw(im)
    put(d, "OF IETS", WORD, H - 136 * S, BLACK)
    put(d, "ANDERS?", WORD, H - 40 * S, BLACK)
    return im


frames = [poster()] + [photo_word(k, f"{k.upper()}?") for k in ("padel", "tennis", "voetbal", "rugby", "pilates")] + [closing()]
durations = [2000] + [700] * 5 + [1000]
# GIF op 1,5x met een eigen palet per beeld (geen korrel van een gedeeld klein palet); 2x werd 3,3 MB
GW, GH = 828, 621
pal = [f.resize((GW, GH), Image.LANCZOS).quantize(colors=128, method=Image.Quantize.MEDIANCUT) for f in frames]
gif = OUT / "flitsinterview-311.gif"
pal[0].save(gif, save_all=True, append_images=pal[1:], duration=durations, loop=0, optimize=True, disposal=1)
frames[0].save(OUT / "fi311-hero.jpg", quality=84, optimize=True, progressive=True)



# sporttegels op 3x (weergave 176x220) met een witte pill-knop onderin: de foto zelf leest als knop
T = 3
LABELS = {"padel": "Padel", "tennis": "Tennis", "voetbal": "Voetbal", "rugby": "Rugby", "pilates": "Pilates", "anders": "Anders"}
PILL_FONT = ImageFont.truetype(str(ADS / "fonts" / "Poppins-ExtraBold.ttf"), 13 * T)


def tile(key):
    im = cover(photos[key], (176 * T, 220 * T), SPORTS[key][1])
    d = ImageDraw.Draw(im)
    text = LABELS[key].upper()
    tw = d.textlength(text, font=PILL_FONT)
    pad, h, gap, chev = 14 * T, 34 * T, 8 * T, 6 * T
    w = round(pad + tw + gap + chev + pad - 2 * T)
    x0, y1 = 10 * T, 220 * T - 10 * T
    y0 = y1 - h
    d.rounded_rectangle((x0, y0, x0 + w, y1), radius=h // 2, fill=WHITE)
    cy = (y0 + y1) / 2
    d.text((x0 + pad, cy), text, font=PILL_FONT, fill=BLACK, anchor="lm")
    cx = x0 + pad + tw + gap
    d.line([(cx, cy - chev), (cx + chev, cy), (cx, cy + chev)], fill=BLACK, width=round(2.2 * T), joint="curve")
    return im


for key in LABELS:
    tile(key).save(OUT / f"fi311-{key}.jpg", quality=82, optimize=True, progressive=True)

print("kop", HEAD.size // S, HEAD2.size // S, "woord", WORD.size // S)
for f in [OUT / "fi311-hero.jpg", gif] + sorted(OUT.glob("fi311-*.jpg")):
    print(f.name, Image.open(f).size, f.stat().st_size // 1024, "KB")
