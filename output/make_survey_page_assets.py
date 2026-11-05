"""Survey-pagina: foto's per sport als thema-assets (breed voor de vraag, staand voor de sportkeuze)."""
import pathlib
import sys
from PIL import Image, ImageOps

HERE = pathlib.Path(__file__).parent
SHOP = HERE / "_src3"
PILATES = pathlib.Path("H:/Gedeelde drives/HÏ GRIP WORKSPACE/B2B - HÏ Grip/PILATES/MYHEALTH CLUB/PILATES SHOOT")
OUT = HERE / "survey-pagina" / "assets"

# zelfde bronnen en focuspunten als de mail (make_assets_3_2.py)
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
    im.draft("RGB", (2400, 2400))
    return ImageOps.exif_transpose(im).convert("RGB")


def cover(im, size, focus):
    tw, th = size
    scale = max(tw / im.width, th / im.height)
    im = im.resize((round(im.width * scale), round(im.height * scale)), Image.LANCZOS)
    left = min(max(0, round(im.width * focus[0] - tw / 2)), im.width - tw)
    top = min(max(0, round(im.height * focus[1] - th / 2)), im.height - th)
    return im.crop((left, top, left + tw, top + th))


OUT.mkdir(parents=True, exist_ok=True)
for key, (path, focus) in SPORTS.items():
    im = load(path)
    if min(im.size) < 720:
        print("let op: bron klein", key, im.size, file=sys.stderr)
    cover(im, (1280, 720), focus).save(OUT / f"hg-survey-{key}.jpg", quality=72, optimize=True, progressive=True)
    cover(im, (480, 600), focus).save(OUT / f"hg-survey-{key}-tegel.jpg", quality=74, optimize=True, progressive=True)

for f in sorted(OUT.glob("hg-survey-*.jpg")):
    print(f.name, f.stat().st_size // 1024, "KB")
