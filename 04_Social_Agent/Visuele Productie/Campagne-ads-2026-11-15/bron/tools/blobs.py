"""List dark blobs (grip pads) in a region: python -I blobs.py <img> x0 y0 x1 y1 [thr] [light]"""
import sys
import numpy as np
from PIL import Image
from collections import deque

img, x0, y0, x1, y1 = sys.argv[1], *map(int, sys.argv[2:6])
thr = float(sys.argv[6]) if len(sys.argv) > 6 else 0.25
light = len(sys.argv) > 7 and sys.argv[7] == "light"
a = np.asarray(Image.open(img).convert("L")).astype(np.float32)[y0:y1, x0:x1] / 255
m = a > thr if light else a < thr
lab = np.zeros(m.shape, np.int32); n = 0; out = []
for sy, sx in zip(*np.nonzero(m)):
    if lab[sy, sx]: continue
    n += 1; q = deque([(sy, sx)]); lab[sy, sx] = n; pts = []
    while q:
        y, x = q.popleft(); pts.append((y, x))
        for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            yy, xx = y + dy, x + dx
            if 0 <= yy < m.shape[0] and 0 <= xx < m.shape[1] and m[yy, xx] and not lab[yy, xx]:
                lab[yy, xx] = n; q.append((yy, xx))
    if len(pts) > 150:
        p = np.array(pts)
        out.append((len(pts), x0 + p[:, 1].mean(), y0 + p[:, 0].mean(), x0 + p[:, 1].min(), y0 + p[:, 0].min(), x0 + p[:, 1].max(), y0 + p[:, 0].max()))
for o in sorted(out, key=lambda o: (o[2], o[1])):
    print("area %5d  c=(%.1f, %.1f)  box=(%d,%d)-(%d,%d)" % o)
