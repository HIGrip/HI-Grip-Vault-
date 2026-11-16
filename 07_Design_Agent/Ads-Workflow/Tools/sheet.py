"""Contactsheet per formaat: python sheet.py <4x5|9x16> <uit.jpg> [map=out] -> rij 1 voetbal, rij 2 rugby (a situatie, b 3.500+, c vergelijking, d top)"""
import sys, os
from PIL import Image, ImageDraw
fmt, out = sys.argv[1], sys.argv[2]; import config; B = config.WORK
d = sys.argv[3] if len(sys.argv) > 3 else os.path.join(B, "out")
ids = [f"{s}-{k}" for s in ("vb", "rb") for k in ("a-situatie", "b-sporters", "c-vergelijking", "d-top")]
th = 720 if fmt == "4x5" else 800; tw = int(th*(1080/1350 if fmt == "4x5" else 1080/1920))
sh = Image.new("RGB", (4*(tw+16)+16, 2*(th+34)+16), (30, 30, 30)); dr = ImageDraw.Draw(sh)
for i, n in enumerate(ids):
    p = os.path.join(d, f"{n}_{fmt}.png")
    if not os.path.exists(p):
        continue
    im = Image.open(p).convert("RGB").resize((tw, th), Image.LANCZOS)
    x, y = 16+(i % 4)*(tw+16), 16+(i//4)*(th+34); sh.paste(im, (x, y+20)); dr.text((x, y+4), n, fill=(255, 255, 255))
sh.save(out, quality=90); print(out, sh.size)
