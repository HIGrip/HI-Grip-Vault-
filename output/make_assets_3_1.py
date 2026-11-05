"""v3.1: mailbeelden met alle zes sporten (rugby, pilates en anders erbij) plus de pagina-foto's per sport."""
import pathlib
from PIL import Image, ImageDraw, ImageFont, ImageEnhance, ImageOps

HERE = pathlib.Path(__file__).parent
VAULT = HERE.parent
SHOP = HERE / "_src3"  # gedownload van higrip.nl/cdn/shop/files
CLUB = VAULT / "06_Website_Agent" / "Teamorder-prototype" / "v1.12" / "img"
PILATES = pathlib.Path("H:/Gedeelde drives/HÏ GRIP WORKSPACE/B2B - HÏ Grip/PILATES/MYHEALTH CLUB/PILATES SHOOT")
ADS = VAULT / "05_Social_Agent" / "Visuele Productie" / "Ads AB-test features vs beste"
OUT = HERE / "mail-assets"
W, H = 600, 450
BLACK, WHITE = (10, 10, 10), (255, 255, 255)

font = lambda name, s: ImageFont.truetype(str(ADS / "fonts" / f"Poppins-{name}.ttf"), s)

# per sport: bron en focuspunt (fracties); pilates zonder co-branding van MyHealth Club in beeld
SPORTS = {
    "padel": (SHOP / "IMG_1655.jpg", (0.42, 0.5)),
    "tennis": (SHOP / "Tennissokken_met_grip.jpg", (0.5, 0.5)),
    "voetbal": (SHOP / "IMG_1478_1c5d2d86-ffa3-4467-8388-dbc0d3b478cd.jpg", (0.52, 0.45)),
    "rugby": (SHOP / "hg-rugby-hero.jpg", (0.5, 0.5)),
    "pilates": (PILATES / "IMG_2727.JPG", (0.5, 0.55)),
    "anders": (SHOP / "Gymsokken_met_grip.jpg", (0.62, 0.5)),
}


def load(path):
    im = Image.open(path)
    im.draft("RGB", (2000, 2000))
    return ImageOps.exif_transpose(im).convert("RGB")


def cover(im, size, focus=(0.5, 0.5)):
    """Vul size volledig, bijsnijden rond focus."""
    tw, th = size
    scale = max(tw / im.width, th / im.height)
    im = im.resize((round(im.width * scale), round(im.height * scale)), Image.LANCZOS)
    left = min(max(0, round(im.width * focus[0] - tw / 2)), im.width - tw)
    top = min(max(0, round(im.height * focus[1] - th / 2)), im.height - th)
    return im.crop((left, top, left + tw, top + th))


photos = {key: load(path) for key, (path, _) in SPORTS.items()}


def poster():
    im = ImageEnhance.Brightness(cover(load(CLUB / "con-0268.webp"), (W, H), (0.5, 0.6))).enhance(0.42)
    d = ImageDraw.Draw(im)
    d.text((32, 196), "FLITS-", font=font("BlackItalic", 92), fill=WHITE, anchor="ls")
    d.text((32, 288), "INTERVIEW", font=font("BlackItalic", 92), fill=WHITE, anchor="ls")
    d.text((36, 352), "Speler van de week: jij.", font=font("SemiBold", 26), fill=WHITE, anchor="ls")
    return im


def photo_word(key, word):
    im = ImageEnhance.Brightness(cover(photos[key], (W, H), SPORTS[key][1])).enhance(0.62)
    ImageDraw.Draw(im).text((32, H - 40), word, font=font("BlackItalic", 96), fill=WHITE, anchor="ls")
    return im


def closing():
    im = Image.new("RGB", (W, H), WHITE)
    d = ImageDraw.Draw(im)
    d.text((32, H - 136), "OF IETS", font=font("BlackItalic", 96), fill=BLACK, anchor="ls")
    d.text((32, H - 40), "ANDERS?", font=font("BlackItalic", 96), fill=BLACK, anchor="ls")
    return im


frames = [poster()] + [photo_word(k, f"{k.upper()}?") for k in ("padel", "tennis", "voetbal", "rugby", "pilates")] + [closing()]
durations = [2000] + [700] * 5 + [1000]
# op weergavebreedte (552) en één gedeeld palet houden de GIF klein; het lichte slotbeeld zonder dither
GW, GH = 552, 414
frames = [f.resize((GW, GH), Image.LANCZOS) for f in frames]
master = Image.new("RGB", (GW * len(frames), GH))
for i, f in enumerate(frames):
    master.paste(f, (i * GW, 0))
palette = master.quantize(colors=48, method=Image.Quantize.MEDIANCUT)
pal = [f.quantize(palette=palette, dither=Image.Dither.NONE if i == len(frames) - 1 else Image.Dither.FLOYDSTEINBERG) for i, f in enumerate(frames)]
gif = OUT / "flitsinterview-31.gif"
pal[0].save(gif, save_all=True, append_images=pal[1:], duration=durations, loop=0, optimize=True, disposal=1)

# sporttegels voor de mail (2x, weergave 176x220) en brede foto's voor de pagina
for key, (_, focus) in SPORTS.items():
    cover(photos[key], (352, 440), focus).save(OUT / f"fi31-{key}.jpg", quality=76, optimize=True, progressive=True)
    cover(photos[key], (760, 420), focus).save(HERE / "_img" / f"page-{key}.jpg", quality=74, optimize=True, progressive=True)

for f in sorted(OUT.glob("fi31-*")) + [gif]:
    print(f.name, f.stat().st_size // 1024, "KB")
