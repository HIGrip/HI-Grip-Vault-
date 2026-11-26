"""Sokmasker met GrabCut: polygoon = mogelijk sok, zeker-sok via kleur (marine/zwart), rest = achtergrond.
Gebruik: python grabsok.py <origineel> <uit_masker> <preview> x1,y1 x2,y2 ..."""
import sys
import cv2
import numpy as np

fo, fm, fp = sys.argv[1:4]
pts = np.array([[int(v) for v in p.split(',')] for p in sys.argv[4:]], np.int32)
o = cv2.imread(fo)
hsv = cv2.cvtColor(o, cv2.COLOR_BGR2HSV)
poly = np.zeros(o.shape[:2], np.uint8)
cv2.fillPoly(poly, [pts], 255)
m = np.full(o.shape[:2], cv2.GC_BGD, np.uint8)
m[poly > 0] = cv2.GC_PR_FGD
zeker = (poly > 0) & (((hsv[..., 0] > 95) & (hsv[..., 0] < 135) & (hsv[..., 1] > 60) & (hsv[..., 2] < 140)) | (hsv[..., 2] < 45))
zeker = cv2.erode(zeker.astype(np.uint8), np.ones((7, 7), np.uint8)) > 0
m[zeker] = cv2.GC_FGD
bg, fg = np.zeros((1, 65), np.float64), np.zeros((1, 65), np.float64)
cv2.grabCut(o, m, None, bg, fg, 6, cv2.GC_INIT_WITH_MASK)
k = np.where((m == cv2.GC_FGD) | (m == cv2.GC_PR_FGD), 255, 0).astype(np.uint8)
n, lab, st, _ = cv2.connectedComponentsWithStats(k)
k = (lab == 1 + np.argmax(st[1:, 4])).astype(np.uint8) * 255
# wit van logo en grip binnen de polygoon, aangrenzend aan de sok, hoort erbij
wit = (poly > 0) & (hsv[..., 1] < 60) & (hsv[..., 2] > 130) & (cv2.dilate(k, np.ones((25, 25), np.uint8)) > 0)
k = cv2.morphologyEx(k | (wit.astype(np.uint8) * 255), cv2.MORPH_CLOSE, np.ones((7, 7), np.uint8))
h, w = k.shape
ff = k.copy(); mm = np.zeros((h + 2, w + 2), np.uint8); cv2.floodFill(ff, mm, (0, 0), 255); k = k | cv2.bitwise_not(ff)
k = cv2.GaussianBlur(cv2.erode(k, np.ones((3, 3), np.uint8)), (0, 0), 1.2)
cv2.imwrite(fm, k)
x, y, bw, bh = cv2.boundingRect(pts)
v = o.copy(); sel = k > 128
v[sel] = (v[sel] * 0.55 + np.array([0, 0, 255]) * 0.45).astype(np.uint8)
cv2.imwrite(fp, v[max(0, y - 30):y + bh + 30, max(0, x - 30):x + bw + 30])
print("klaar", int(sel.sum()))
