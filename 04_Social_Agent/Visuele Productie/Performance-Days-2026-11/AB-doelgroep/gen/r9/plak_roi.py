"""Als terugplakken.py masker, maar zoekt uitlijnpunten alleen rond de sok:
in het origineel binnen het (verruimde) masker, in het ChatGPT-beeld binnen een kader.
Gebruik: python plak_roi.py <origineel> <chatgpt> <uit> <masker.png> x1,y1,x2,y2"""
import sys

import cv2
import numpy as np

from terugplakken import plak

fo, fc, fu, fm, kader = sys.argv[1:6]
orig, out = cv2.imread(fo), cv2.imread(fc)
m = cv2.imread(fm, cv2.IMREAD_GRAYSCALE)
x1, y1, x2, y2 = map(int, kader.split(","))
m1 = cv2.dilate((m > 20).astype(np.uint8) * 255, np.ones((61, 61), np.uint8))
m2 = np.zeros(out.shape[:2], np.uint8)
m2[y1:y2, x1:x2] = 255
orb = cv2.ORB_create(8000)
k1, d1 = orb.detectAndCompute(cv2.cvtColor(orig, cv2.COLOR_BGR2GRAY), m1)
k2, d2 = orb.detectAndCompute(cv2.cvtColor(out, cv2.COLOR_BGR2GRAY), m2)
mt = cv2.BFMatcher(cv2.NORM_HAMMING).knnMatch(d1, d2, k=2)
goed = [a for a, b in (p for p in mt if len(p) == 2) if a.distance < 0.8 * b.distance]
p1 = np.float32([k1[a.queryIdx].pt for a in goed])
p2 = np.float32([k2[a.trainIdx].pt for a in goed])
M, inl = cv2.estimateAffinePartial2D(p1, p2, method=cv2.RANSAC, ransacReprojThreshold=3)
print(f"matches {len(goed)}, inliers {int(inl.sum())}, schaal {np.hypot(M[0,0], M[1,0]):.4f}")
cv2.imwrite(fu, plak(orig, out, M, m))
