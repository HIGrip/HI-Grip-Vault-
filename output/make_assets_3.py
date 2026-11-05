"""v3.0: alle mailbeelden uit eigen foto's (shop + Concordia-shoot): GIF-affiche, sporttegels, sok, teamfoto."""
import pathlib
from PIL import Image, ImageDraw, ImageFont, ImageEnhance, ImageOps

HERE = pathlib.Path(__file__).parent
VAULT = HERE.parent
SHOP = HERE / "_src3"  # gedownload van higrip.nl/cdn/shop/files
CLUB = VAULT / "06_Website_Agent" / "Teamorder-prototype" / "v1.12" / "img"
ADS = VAULT / "05_Social_Agent" / "Visuele Productie" / "Ads AB-test features vs beste"
OUT = HERE / "mail-assets"
W, H = 600, 450
BLACK, WHITE = (10, 10, 10), (255, 255, 255)

font = lambda name, s: ImageFont.truetype(str(ADS / "fonts" / f"Poppins-{name}.ttf"), s)


def load(path):
    return ImageOps.exif_transpose(Image.open(path)).convert("RGB")


def cover(im, size, focus=(0.5, 0.5)):
    """Vul size volledig, bijsnijden rond focus (fracties van breedte/hoogte)."""
    tw, th = size
    scale = max(tw / im.width, th / im.height)
    im = im.resize((round(im.width * scale), round(im.height * scale)), Image.LANCZOS)
    left = min(max(0, round(im.width * focus[0] - tw / 2)), im.width - tw)
    top = min(max(0, round(im.height * focus[1] - th / 2)), im.height - th)
    return im.crop((left, top, left + tw, top + th))


# GIF: affiche, dan de sporten om de beurt
def poster():
    im = ImageEnhance.Brightness(cover(load(CLUB / "con-0268.webp"), (W, H), (0.5, 0.6))).enhance(0.42)
    d = ImageDraw.Draw(im)
    d.text((32, 196), "FLITS-", font=font("BlackItalic", 92), fill=WHITE, anchor="ls")
    d.text((32, 288), "INTERVIEW", font=font("BlackItalic", 92), fill=WHITE, anchor="ls")
    d.text((36, 352), "Speler van de week: jij.", font=font("SemiBold", 26), fill=WHITE, anchor="ls")
    return im


def photo_word(path, word, focus):
    im = ImageEnhance.Brightness(cover(load(path), (W, H), focus)).enhance(0.62)
    ImageDraw.Draw(im).text((32, H - 40), word, font=font("BlackItalic", 96), fill=WHITE, anchor="ls")
    return im


def light_word(word, with_sock):
    im = Image.new("RGB", (W, H), WHITE)
    if with_sock:
        sock = Image.open(ADS / "img" / "sok-zwart-cut.png").convert("RGBA")
        sock.thumbnail((270, 270), Image.LANCZOS)
        im.paste(sock, (W - sock.width - 36, 18), sock)
    ImageDraw.Draw(im).text((32, H - 40), word, font=font("BlackItalic", 96), fill=BLACK, anchor="ls")
    return im


frames = [
    poster(),
    photo_word(SHOP / "IMG_1655.jpg", "PADEL?", (0.45, 0.45)),
    photo_word(SHOP / "Tennissokken_met_grip.jpg", "TENNIS?", (0.5, 0.5)),
    photo_word(SHOP / "IMG_1478_1c5d2d86-ffa3-4467-8388-dbc0d3b478cd.jpg", "VOETBAL?", (0.5, 0.5)),
    light_word("RUGBY?", True),
    light_word("PILATES?", False),
]
durations = [2000, 700, 700, 700, 700, 700]
# één gedeeld palet houdt de GIF klein; lichte beelden zonder dither
master = Image.new("RGB", (W * len(frames), H))
for i, f in enumerate(frames):
    master.paste(f, (i * W, 0))
palette = master.quantize(colors=64, method=Image.Quantize.MEDIANCUT)
pal = [f.quantize(palette=palette, dither=Image.Dither.FLOYDSTEINBERG if i < 4 else Image.Dither.NONE) for i, f in enumerate(frames)]
gif = OUT / "flitsinterview-3.gif"
pal[0].save(gif, save_all=True, append_images=pal[1:], duration=durations, loop=0, optimize=True, disposal=1)

# sporttegels, 2x voor scherpe schermen (weergave 176x220)
TILES = {
    "padel": (SHOP / "IMG_1655.jpg", (0.42, 0.5)),
    "tennis": (SHOP / "Tennissokken_met_grip.jpg", (0.5, 0.5)),
    "voetbal": (SHOP / "IMG_1478_1c5d2d86-ffa3-4467-8388-dbc0d3b478cd.jpg", (0.52, 0.45)),
}
for key, (path, focus) in TILES.items():
    cover(load(path), (352, 440), focus).save(OUT / f"fi3-{key}.jpg", quality=78, optimize=True, progressive=True)

sock = load(SHOP / "Performance_Grip_Socks_2.0_zwart_voorkant.png")
cover(sock, (160, 160)).save(OUT / "fi3-sok.jpg", quality=82, optimize=True)
cover(load(CLUB / "con-0174.webp"), (1104, 690), (0.5, 0.45)).save(OUT / "fi3-team.jpg", quality=72, optimize=True, progressive=True)

frames[0].save(HERE / "_img" / "gif3-frame0.png")
for f in sorted(OUT.glob("fi3-*")) + [gif]:
    print(f.name, f.stat().st_size // 1024, "KB")
