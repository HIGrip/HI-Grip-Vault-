"""v3.10: hero en GIF met tekst uitgelijnd op de inkt (cursief), koppen passend binnen gelijke marges. Tegels, sok en teamfoto blijven die van v3.9."""
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


HEAD = fit("BlackItalic", ["FLITS-", "INTERVIEW"], 92)
WORD = fit("BlackItalic", ["VOETBAL?", "PILATES?", "ANDERS?", "OF IETS"], 96)
SUB = font("SemiBold", 26)


def poster():
    im = ImageEnhance.Brightness(cover(load(CONCORDIA / "IMG_0268.JPG"), (W, H), (0.5, 0.6))).enhance(0.42)
    d = ImageDraw.Draw(im)
    put(d, "FLITS-", HEAD, 196 * S, WHITE)
    put(d, "INTERVIEW", HEAD, 288 * S, WHITE)
    put(d, "Vier vragen. Eén minuut.", SUB, 352 * S, WHITE)
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
gif = OUT / "flitsinterview-310.gif"
pal[0].save(gif, save_all=True, append_images=pal[1:], duration=durations, loop=0, optimize=True, disposal=1)
frames[0].save(OUT / "fi310-hero.jpg", quality=84, optimize=True, progressive=True)

print("kop", HEAD.size // S, "woord", WORD.size // S)
for f in (OUT / "fi310-hero.jpg", gif):
    print(f.name, Image.open(f).size, f.stat().st_size // 1024, "KB")
