"""Maakt de beeldafgeleiden voor early-access v2 uit eigen productbeeld.

Gebruik:  python make_assets.py <doelmap-voor-assets/img>
Bron:     MEDIA_ROOT = omgevingsvariabele HIGRIP_MEDIA_ROOT, anders ~/HiGripMedia
Originelen worden alleen gelezen. Uitvoer staat buiten de vault.
"""
import os, sys
from pathlib import Path
from PIL import Image, ImageChops

ROOT = Path(os.environ.get("HIGRIP_MEDIA_ROOT", Path.home() / "HiGripMedia"))
SRC = ROOT / "Content - HÏ Grip" / "Productfoto's" / "PERFORMANCE GRIP SOCKS 2.0"
OUT = Path(sys.argv[1]); OUT.mkdir(parents=True, exist_ok=True)

def trim_alpha(name, out, width):
    im = Image.open(SRC / name).convert("RGBA")
    im = im.crop(im.getchannel("A").getbbox())
    im.thumbnail((width, width * 2), Image.LANCZOS)
    im.save(OUT / out, optimize=True); print(out, im.size)

# vrijstaande packs (eigen alpha uit de bron)
trim_alpha("Performance Gripsokken 2.0 Wit 5-pack productfoto ZA.png", "pack-w5.png", 1500)
trim_alpha("Performance Gripsokken 2.0 Wit 3-pack productfoto ZA.png", "pack-w3.png", 1500)
trim_alpha("Performance Gripsokken 2.0 Zwart 5-pack productfoto ZA.png", "pack-b5.png", 1500)
trim_alpha("Performance Gripsokken 2.0 Zwart 3-pack productfoto ZA.png", "pack-b3.png", 1500)

# zwarte losse sok op lichte achtergrond: achtergrond naar zuiver wit (multiply-klaar)
b1 = Image.open(SRC / "Performance Gripsokken 2.0 Zwart voorkant.jpg").convert("RGB")
bg = b1.getpixel((5, 5))
diff = ImageChops.difference(b1, Image.new("RGB", b1.size, bg)).convert("L").point(lambda v: 255 if v > 18 else 0)
x0, y0, x1, y1 = diff.getbbox()
pad = 80
box = (max(0, x0 - pad), max(0, y0 - pad), min(b1.width, x1 + pad), min(b1.height, y1 + pad))
c = b1.crop(box)
lut = [min(255, round(v * 255 / max(bg[0], 1))) for v in range(256)]
c = c.point(lut * 3)
big = c.copy(); big.thumbnail((1500, 2800), Image.LANCZOS); big.save(OUT / "sock-b1.jpg", quality=90); print("sock-b1.jpg", big.size)

# macro-uitsneden uit dezelfde 4096-foto (tegels in bronpixels)
def tile(name, t, size=900):
    im = b1.crop(t).resize((size, size), Image.LANCZOS)
    im = im.point(lut * 3)
    im.save(OUT / name, quality=90); print(name)
tile("macro-sole.jpg", (2026, 2882, 3026, 3882))
tile("macro-sole2.jpg", (1149, 2882, 2149, 3882))
tile("macro-mid.jpg", (1149, 2106, 2149, 3106))
tile("macro-cuff.jpg", (1149, 306, 2149, 1306))
