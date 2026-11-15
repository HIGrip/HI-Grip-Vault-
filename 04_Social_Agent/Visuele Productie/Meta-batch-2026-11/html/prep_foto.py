"""Bereidt de vrijstaande zwarte sok voor (python -I prep_foto.py).

Bron: bron/foto/packshot_2-0_zwart_achter.png (witte achtergrond, geen alfakanaal).
Resultaat in bron/foto/afgeleid/:
  sok_zwart_vrij.png      vrijstaand, bijgesneden tot de omtrek
  sok_zwart_h<H>.png      dezelfde sok op exacte hoogte H (LANCZOS), geen schaling in de browser
  sok_meta.json           verhouding en positie van de zool, voor de contactschaduw
"""
import json
import pathlib

from PIL import Image, ImageChops, ImageDraw, ImageFilter

HERE = pathlib.Path(__file__).resolve().parent
BRON = HERE.parent / "bron" / "foto"
OUT = BRON / "afgeleid"
OUT.mkdir(exist_ok=True)

HOOGTES = [800, 610, 640, 520, 470, 300, 280, 170]
TOL = 12

src = Image.open(BRON / "packshot_2-0_zwart_achter.png").convert("RGB")
w, h = src.size

# Vlak de achtergrond vanaf de vier hoeken weg (flood fill op luminantie, tolerantie 12 zoals in de spec).
# Een ruimere tolerantie lekt via de witte embleemlijnen die tegen de sokrand liggen en vreet het
# embleem aan. Alleen onder y 1050 (zool en vloerschaduw, ligt rond 215-250) gaat het ruimer.
TOL_VLOER = 45
gray = src.convert("L")
work = gray.copy()
for pt in [(0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1)]:
    ImageDraw.floodfill(work, pt, 100, thresh=TOL)
bg1 = ImageChops.difference(work, gray).point(lambda v: 255 if v > 0 else 0)
floor = gray.copy()
ImageDraw.Draw(floor).rectangle((0, 0, w, 1049), fill=0)
for pt in [(0, h - 1), (w - 1, h - 1)]:
    ImageDraw.floodfill(floor, pt, 100, thresh=TOL_VLOER)
ref = gray.copy()
ImageDraw.Draw(ref).rectangle((0, 0, w, 1049), fill=0)
bg2 = ImageChops.difference(floor, ref).point(lambda v: 255 if v > 0 else 0)
bg = ImageChops.lighter(bg1, bg2)
inside = bg.point(lambda v: 255 - v)  # 255 = sok

# Rand: 1 px verzachten. De sok is zwart, dus in de randband komt de dekking uit de
# donkerte van het pixel en wordt de kleur zwart: geen witte franje op off-white.
inner = inside.filter(ImageFilter.MinFilter(5))            # 2 px naar binnen
outer = inside.filter(ImageFilter.MaxFilter(5))            # 2 px naar buiten
band = ImageChops.subtract(outer, inner)
lum = src.convert("L")
EDGE_DARK = 24
alpha_band = lum.point(lambda v: max(0, min(255, int((255 - v) * 255 / (255 - EDGE_DARK)))))
alpha = ImageChops.lighter(inner, ImageChops.multiply(band, alpha_band))
alpha = ImageChops.multiply(alpha, outer)
alpha = alpha.filter(ImageFilter.GaussianBlur(0.6))

rgb = Image.composite(src, Image.new("RGB", (w, h), (EDGE_DARK, EDGE_DARK, EDGE_DARK)), inner)
sock = rgb.convert("RGBA")
sock.putalpha(alpha)

bbox = alpha.point(lambda v: 255 if v > 8 else 0).getbbox()
sock = sock.crop(bbox)
sock.save(OUT / "sok_zwart_vrij.png")
sw, sh = sock.size
print("omtrek", bbox, "->", sock.size)

# Zool: breedte van de onderste 3% van de omtrek
a = sock.split()[3]
strip = a.crop((0, int(sh * 0.97), sw, sh)).point(lambda v: 255 if v > 128 else 0)
sb = strip.getbbox()
meta = {"ratio": sw / sh, "sole_x0": sb[0] / sw, "sole_x1": sb[2] / sw, "widths": {}}
for hh in sorted(set(HOOGTES)):
    ww = round(sw * hh / sh)
    sock.resize((ww, hh), Image.LANCZOS).save(OUT / f"sok_zwart_h{hh}.png")
    meta["widths"][hh] = ww
(OUT / "sok_meta.json").write_text(json.dumps(meta, indent=1))
print(meta)
