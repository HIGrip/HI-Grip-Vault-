"""v3.15: rustigere, premium hero. Foto ademt (alleen onderin donker verloop), grote witte 30% met kleine, verfijnde tekst ernaast."""
import pathlib
import sys
from PIL import Image, ImageDraw, ImageFont, ImageEnhance, ImageOps

HERE = pathlib.Path(__file__).parent
VAULT = HERE.parent
CONCORDIA = pathlib.Path("H:/Gedeelde drives/HÏ GRIP WORKSPACE/B2B - HÏ Grip/SPORTCLUBS/CONCORDIA")
ADS = VAULT / "05_Social_Agent" / "Visuele Productie" / "Ads AB-test features vs beste"
OUT = HERE / "mail-assets"
S = 2  # weergave 552x414, bestand 1104x828
W, H = 552 * S, 414 * S
M = 36 * S  # ruimere marge dan de koppen in de mail: meer lucht
WHITE = (255, 255, 255)
SOFT = (255, 255, 255, 190)  # wit op ~75%, voor de tweede regel

font = lambda name, size: ImageFont.truetype(str(ADS / "fonts" / f"Poppins-{name}.ttf"), round(size * S))


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
    left, top, right, bottom = f.getmask(text).getbbox()
    ox, oy = f.getbbox(text, anchor="ls")[:2]
    return ox + left, oy + top, ox + right, oy + bottom


def shade(im, start, strength):
    """Donker verloop van `start` (fractie van de hoogte) naar onder; geen kleur, alleen zwart."""
    grad = Image.new("L", (1, H))
    for y in range(H):
        t = max(0.0, (y / H - start) / (1 - start))
        grad.putpixel((0, y), round(255 * strength * t ** 1.6))
    black = Image.new("RGB", (W, H), (0, 0, 0))
    return Image.composite(black, im, grad.resize((W, H)))


def hero(variant):
    photo = cover(load(CONCORDIA / "IMG_0268.JPG"), (W, H), (0.5, 0.55))
    im = shade(ImageEnhance.Brightness(photo).enhance(0.72), 0.35, 0.88).convert("RGBA")
    layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    base = H - M
    if variant == "a":
        # 30% groot, rechts ervan twee korte regels die met de voet van de 30% eindigen
        big = font("BlackItalic", 118)
        d.text((M - ink(big, "30%")[0], base), "30%", font=big, fill=WHITE, anchor="ls")
        x = M + ink(big, "30%")[2] - ink(big, "30%")[0] + 20 * S
        # op een telefoon wordt het beeld ~60%: 21px wordt dan nog ~13px
        d.text((x, base - 32 * S), "KORTING", font=font("Bold", 21), fill=WHITE, anchor="ls")
        d.text((x, base), "na 5 korte vragen", font=font("Regular", 19), fill=SOFT, anchor="ls")
        print("rechterrand tekst:", round(x + d.textlength("na 5 korte vragen", font=font("Regular", 19))) // S, "van", (W - M) // S)
    else:
        # tekst klein bovenaan de stapel, 30% als slot
        big = font("BlackItalic", 150)
        d.text((M - ink(big, "30%")[0], base), "30%", font=big, fill=WHITE, anchor="ls")
        top = base + ink(big, "30%")[1] - 22 * S
        d.text((M, top), "Korting na 5 korte vragen", font=font("SemiBold", 17), fill=SOFT, anchor="ls")
    return Image.alpha_composite(im, layer).convert("RGB")


for v in sys.argv[1:] or ["a", "b"]:
    hero(v).save(OUT / f"fi315-hero-{v}.jpg", quality=86, optimize=True, progressive=True)
    print(v, (OUT / f"fi315-hero-{v}.jpg").stat().st_size // 1024, "KB")
