"""Sokmasker in origineel-coördinaten: zwart/donkergrijs met weinig kleur (sok), grootste vlak, gaten (logo) gevuld.
Gebruik: python sokmasker2.py <origineel> <uit_masker> [vmax] [smax] [preview]"""
import sys
import cv2
import numpy as np

fo, fm = sys.argv[1:3]
vmax = int(sys.argv[3]) if len(sys.argv) > 3 else 95
smax = int(sys.argv[4]) if len(sys.argv) > 4 else 90
o = cv2.imread(fo)
hsv = cv2.cvtColor(o, cv2.COLOR_BGR2HSV)
hue = hsv[..., 0]
d = (((hsv[..., 2] < vmax) & (hue > 90) & (hue < 135)) | (hsv[..., 2] < 48)).astype(np.uint8) * 255
d = cv2.morphologyEx(d, cv2.MORPH_OPEN, np.ones((5, 5), np.uint8))
n, lab, st, _ = cv2.connectedComponentsWithStats(d)
k = np.isin(lab, [j for j in range(1, n) if st[j, 4] > 3000]).astype(np.uint8) * 255
k = cv2.morphologyEx(k, cv2.MORPH_CLOSE, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (31, 31)))
h, w = k.shape
ff = k.copy(); mm = np.zeros((h + 2, w + 2), np.uint8); cv2.floodFill(ff, mm, (0, 0), 255); k = k | cv2.bitwise_not(ff)
k = cv2.GaussianBlur(cv2.erode(k, np.ones((3, 3), np.uint8)), (0, 0), 1.2)
cv2.imwrite(fm, k)
if len(sys.argv) > 5:
    vis = o.copy(); vis[k < 128] = (vis[k < 128] * 0.25).astype(np.uint8)
    cv2.imwrite(sys.argv[5], cv2.resize(vis, None, fx=0.5, fy=0.5))
print("klaar", fm, int((k > 128).sum()))
