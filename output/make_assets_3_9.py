"""v3.9: scherpe mailbeelden. Originele bronnen (shop-originelen + Concordia-shoot), GIF op 2x met eigen palet per beeld, tegels en sok op 3x."""
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


def poster():
    im = ImageEnhance.Brightness(cover(load(CONCORDIA / "IMG_0268.JPG"), (W, H), (0.5, 0.6))).enhance(0.42)
    d = ImageDraw.Draw(im)
    d.text((32 * S, 196 * S), "FLITS-", font=font("BlackItalic", 92), fill=WHITE, anchor="ls")
    d.text((32 * S, 288 * S), "INTERVIEW", font=font("BlackItalic", 92), fill=WHITE, anchor="ls")
    d.text((36 * S, 352 * S), "Vier vragen. Eén minuut.", font=font("SemiBold", 26), fill=WHITE, anchor="ls")
    return im


def photo_word(key, word):
    im = ImageEnhance.Brightness(cover(photos[key], (W, H), SPORTS[key][1])).enhance(0.62)
    ImageDraw.Draw(im).text((32 * S, H - 40 * S), word, font=font("BlackItalic", 96), fill=WHITE, anchor="ls")
    return im


def closing():
    im = Image.new("RGB", (W, H), WHITE)
    d = ImageDraw.Draw(im)
    d.text((32 * S, H - 136 * S), "OF IETS", font=font("BlackItalic", 96), fill=BLACK, anchor="ls")
    d.text((32 * S, H - 40 * S), "ANDERS?", font=font("BlackItalic", 96), fill=BLACK, anchor="ls")
    return im


frames = [poster()] + [photo_word(k, f"{k.upper()}?") for k in ("padel", "tennis", "voetbal", "rugby", "pilates")] + [closing()]
durations = [2000] + [700] * 5 + [1000]
# GIF op 1,5x met een eigen palet per beeld (geen korrel van een gedeeld klein palet); 2x werd 3,3 MB
GW, GH = 828, 621
pal = [f.resize((GW, GH), Image.LANCZOS).quantize(colors=128, method=Image.Quantize.MEDIANCUT) for f in frames]
gif = OUT / "flitsinterview-39.gif"
pal[0].save(gif, save_all=True, append_images=pal[1:], duration=durations, loop=0, optimize=True, disposal=1)
frames[0].save(OUT / "fi39-hero.jpg", quality=84, optimize=True, progressive=True)

# sporttegels op 3x (weergave 176x220), sok op 3x (56), teamfoto op 2x (552)
for key, (_, focus) in SPORTS.items():
    cover(photos[key], (528, 660), focus).save(OUT / f"fi39-{key}.jpg", quality=82, optimize=True, progressive=True)
cover(load(shop("Performance_Grip_Socks_2.0_zwart_voorkant.png")), (168, 168)).save(OUT / "fi39-sok.jpg", quality=88, optimize=True)
cover(load(CONCORDIA / "IMG_0174.JPG"), (1104, 690), (0.5, 0.45)).save(OUT / "fi39-team.jpg", quality=82, optimize=True, progressive=True)

for f in sorted(OUT.glob("fi39-*")) + [gif]:
    print(f.name, Image.open(f).size, f.stat().st_size // 1024, "KB")
