"""Sokmasker in ChatGPT-coördinaten: pixels die zowel in het uitgelijnde origineel als in de bewerking donker zijn.
Gebruik: python sokmasker.py <origineel> <chatgpt> <uit_masker> [vmax] [preview]"""
import sys
import cv2
import numpy as np
from terugplakken import lijn_uit

fo, fc, fm = sys.argv[1:4]
vmax = int(sys.argv[4]) if len(sys.argv) > 4 else 80
o, a = cv2.imread(fo), cv2.imread(fc)
M = lijn_uit(o, a)
h, w = a.shape[:2]
wo = cv2.warpAffine(o, M, (w, h), flags=cv2.INTER_LANCZOS4)
valid = cv2.warpAffine(np.full(o.shape[:2], 255, np.uint8), M, (w, h))
v1 = cv2.cvtColor(wo, cv2.COLOR_BGR2HSV)[..., 2]
v2 = cv2.cvtColor(a, cv2.COLOR_BGR2HSV)[..., 2]
d = ((v1 < vmax) & (v2 < vmax) & (valid > 0)).astype(np.uint8) * 255
d = cv2.morphologyEx(d, cv2.MORPH_OPEN, np.ones((3, 3), np.uint8))
d = cv2.morphologyEx(d, cv2.MORPH_CLOSE, np.ones((11, 11), np.uint8))
n, lab, st, _ = cv2.connectedComponentsWithStats(d)
i = 1 + np.argmax(st[1:, 4])
k = (lab == i).astype(np.uint8) * 255
ff = k.copy(); mm = np.zeros((h + 2, w + 2), np.uint8); cv2.floodFill(ff, mm, (0, 0), 255); k = k | cv2.bitwise_not(ff)
k = cv2.GaussianBlur(cv2.erode(k, np.ones((3, 3), np.uint8)), (0, 0), 1.5)
cv2.imwrite(fm, k)
m = k.astype(np.float32)[..., None] / 255
res = (wo * m + a * (1 - m)).astype(np.uint8)
cv2.imwrite(fm.replace('_masker', '_resultaat'), res)
if len(sys.argv) > 5:
    vis = res.copy(); vis[k < 128] = (vis[k < 128] * 0.3).astype(np.uint8)
    cv2.imwrite(sys.argv[5], cv2.resize(np.hstack([vis, res]), None, fx=0.5, fy=0.5))
print("klaar", fm)
