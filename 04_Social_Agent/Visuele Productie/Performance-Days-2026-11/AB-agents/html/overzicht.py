"""Maakt overzicht.jpg: 6 feeds boven, 6 reels eronder, verkleind."""
import glob
import pathlib

from PIL import Image

P = pathlib.Path(__file__).resolve().parent.parent
fs = sorted(glob.glob(str(P / "png" / "ag_*.png")))
feeds = [f for f in fs if "feed" in f]
reels = [f for f in fs if "reel" in f]
fw, fh, rw, rh = 360, 450, 253, 450
sheet = Image.new("RGB", (6 * (fw + 16) + 16, fh + rh + 48), (40, 40, 40))
for i, f in enumerate(feeds):
    sheet.paste(Image.open(f).convert("RGB").resize((fw, fh), Image.LANCZOS), (16 + i * (fw + 16), 16))
for i, f in enumerate(reels):
    sheet.paste(Image.open(f).convert("RGB").resize((rw, rh), Image.LANCZOS), (16 + i * (fw + 16) + (fw - rw) // 2, fh + 32))
sheet.save(P / "overzicht.jpg", quality=88)
for f in fs:
    print(Image.open(f).size, pathlib.Path(f).name)
