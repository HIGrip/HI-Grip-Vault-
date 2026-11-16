"""Bronfoto met 10%-raster en labels, om de held-bbox (x0,y0,x1,y1 in fracties) te bepalen: python gridsheet.py <foto> <uit.jpg>"""
import sys
from PIL import Image, ImageDraw, ImageOps
im = ImageOps.exif_transpose(Image.open(sys.argv[1]).convert('RGB')); im.thumbnail((1200, 1200)); w, h = im.size
d = ImageDraw.Draw(im)
for i in range(1, 10):
    x, y = int(w*i/10), int(h*i/10)
    d.line([(x, 0), (x, h)], fill=(255, 0, 255), width=1); d.line([(0, y), (w, y)], fill=(255, 0, 255), width=1)
    d.text((x+2, 2), f".{i}", fill=(255, 255, 0)); d.text((2, y+2), f".{i}", fill=(255, 255, 0))
im.save(sys.argv[2], quality=88); print(sys.argv[2], im.size)
