import sys, json
from PIL import Image
import os, config; B = os.path.join(config.WORK, "out")
n = sys.argv[1]; J = json.load(open(os.path.join(B, n + "_rects.json"), encoding="utf-8")); im = Image.open(os.path.join(B, n + ".png")).convert("RGB")
for r in J["rects"]:
    if r["m"] in ("panel", "kop", "block", "frame", "logo"):
        print(r["m"], r["x"], r["y"], r["w"], r["h"], r["fs"], r["col"], "px@mid", im.getpixel((min(1079, r["x"]+5), r["y"]+5)))
