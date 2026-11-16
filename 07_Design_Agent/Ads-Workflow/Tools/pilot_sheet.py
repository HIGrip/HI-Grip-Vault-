import sys
from PIL import Image, ImageDraw
import os, config; B = os.path.join(config.WORK, "out", "pilot")
names = sys.argv[2:]; out = sys.argv[1]; th = 900; tw = int(th*0.8)
sh = Image.new("RGB", (len(names)*(tw+16)+16, th+50), (30, 30, 30)); d = ImageDraw.Draw(sh)
for i, n in enumerate(names):
    im = Image.open(os.path.join(B, n + ".png")).convert("RGB").resize((tw, th), Image.LANCZOS); sh.paste(im, (16+i*(tw+16), 34)); d.text((16+i*(tw+16), 10), n, fill=(255, 255, 255))
sh.save(out, quality=90); print(out, sh.size)
