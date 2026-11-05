"""v3.14: alleen een stilstaande hero (geen GIF meer in de mail), met een grote volt 30% die eruit springt."""
import pathlib
from PIL import Image, ImageDraw, ImageFont, ImageEnhance, ImageOps

HERE = pathlib.Path(__file__).parent
VAULT = HERE.parent
CONCORDIA = pathlib.Path("H:/Gedeelde drives/HÏ GRIP WORKSPACE/B2B - HÏ Grip/SPORTCLUBS/CONCORDIA")
ADS = VAULT / "05_Social_Agent" / "Visuele Productie" / "Ads AB-test features vs beste"
OUT = HERE / "mail-assets"
S = 2  # weergave 552x414, bestand 1104x828
W, H = 552 * S, 414 * S
M = 32 * S  # marge links en rechts
WHITE, VOLT = (255, 255, 255), (204, 255, 0)

font = lambda name, size: ImageFont.truetype(str(ADS / "fonts" / f"Poppins-{name}.ttf"), size * S)


def load(path):
    im = Image.open(path)
    im.draft("RGB", (2400, 2400))
    return ImageOps.exif_transpose(im).convert("RGB")


def cover(im, size, focus=(0.5, 0.5)):
    tw, th = size
    scale = max(tw / im.width, th / im.height)
    im = im.resize((round(im.width * scale), round(im.height * scale)), Image.LANCZOS)
    left = min(max(0, round(im.width * focus[0] - tw / 2)), im.width - tw)
    top = min(max(0, round(im.height * focus[1] - th / 2)), im.height - th)
    return im.crop((left, top, left + tw, top + th))


def ink(f, text):
    # echte inktrand t.o.v. het tekenpunt (anchor ls); cursief begint niet op x=0
    left, top, right, bottom = f.getmask(text).getbbox()
    ox, oy = f.getbbox(text, anchor="ls")[:2]
    return ox + left, oy + top, ox + right, oy + bottom


def width_fit(name, text, width):
    size = 400
    while ink(font(name, size), text)[2] - ink(font(name, size), text)[0] > width:
        size -= 1
    return font(name, size)


def put(d, text, f, base, fill, x=M):
    d.text((x - ink(f, text)[0], base), text, font=f, fill=fill, anchor="ls")


im = ImageEnhance.Brightness(cover(load(CONCORDIA / "IMG_0268.JPG"), (W, H), (0.5, 0.6))).enhance(0.36)
d = ImageDraw.Draw(im)

# 30% is het beeld: ruim de helft van de breedte, in volt; KORTING ernaast op dezelfde basislijn
BIG = width_fit("BlackItalic", "30%", round((W - 2 * M) * 0.62))
SUB = font("SemiBold", 26)
base_big = H - 92 * S
put(d, "30%", BIG, base_big, VOLT)
x_side = M + ink(BIG, "30%")[2] - ink(BIG, "30%")[0] + 16 * S
SIDE = width_fit("BlackItalic", "KORTING", W - M - x_side)
put(d, "KORTING", SIDE, base_big, WHITE, x_side)
put(d, "Na 5 korte vragen.", SUB, H - 40 * S, WHITE)

im.save(OUT / "fi314-hero.jpg", quality=86, optimize=True, progressive=True)
print("30%:", BIG.size // S, "px", (OUT / "fi314-hero.jpg").stat().st_size // 1024, "KB")
