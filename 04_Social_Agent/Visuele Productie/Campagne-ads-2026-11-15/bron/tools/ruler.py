"""Preview an image with source-pixel rulers: python -I ruler.py <img> <out.jpg> [maxside]"""
import sys
from PIL import Image, ImageDraw

src, out = sys.argv[1], sys.argv[2]
mx = int(sys.argv[3]) if len(sys.argv) > 3 else 900
im = Image.open(src).convert("RGB")
W, H = im.size
im.thumbnail((mx, mx))
k = W / im.width
d = ImageDraw.Draw(im)
step = 100 if mx >= 800 else 200
for v in range(0, int(H / k), step):
    d.line([(0, v), (14, v)], fill=(255, 40, 40), width=2); d.text((16, v - 5), str(int(v * k)), fill=(255, 40, 40))
for v in range(0, int(W / k), step):
    d.line([(v, 0), (v, 14)], fill=(255, 40, 40), width=2); d.text((v + 2, 16), str(int(v * k)), fill=(255, 40, 40))
im.save(out, quality=85)
