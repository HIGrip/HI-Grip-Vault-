"""Plakt de echte foto terug over een ChatGPT-bewerking, zodat sok, logo en grip echte pixels blijven.
Uitlijning: ORB-punten + RANSAC (schaal, rotatie, verschuiving) van origineel naar ChatGPT-beeld.
Gebruik:
  python terugplakken.py rand  <origineel> <chatgpt> <uit> [rand_px]      hele echte foto terug, zachte rand
  python terugplakken.py masker <origineel> <chatgpt> <uit> <masker.png>  alleen wit deel van masker terug (in origineel-coördinaten)
"""
import sys

import cv2
import numpy as np


def lijn_uit(orig, out):
    g1 = cv2.cvtColor(orig, cv2.COLOR_BGR2GRAY)
    g2 = cv2.cvtColor(out, cv2.COLOR_BGR2GRAY)
    orb = cv2.ORB_create(8000)
    k1, d1 = orb.detectAndCompute(g1, None)
    k2, d2 = orb.detectAndCompute(g2, None)
    m = cv2.BFMatcher(cv2.NORM_HAMMING).knnMatch(d1, d2, k=2)
    goed = [a for a, b in (p for p in m if len(p) == 2) if a.distance < 0.75 * b.distance]
    p1 = np.float32([k1[a.queryIdx].pt for a in goed])
    p2 = np.float32([k2[a.trainIdx].pt for a in goed])
    M, inl = cv2.estimateAffinePartial2D(p1, p2, method=cv2.RANSAC, ransacReprojThreshold=3)
    print(f"matches {len(goed)}, inliers {int(inl.sum())}, schaal {np.hypot(M[0,0], M[1,0]):.4f}")
    return M


def plak(orig, out, M, masker):
    h, w = out.shape[:2]
    wo = cv2.warpAffine(orig, M, (w, h), flags=cv2.INTER_LANCZOS4)
    wm = cv2.warpAffine(masker, M, (w, h), flags=cv2.INTER_LINEAR).astype(np.float32)[..., None] / 255
    return (wo * wm + out * (1 - wm)).astype(np.uint8)


if __name__ == "__main__":
    modus, fo, fc, fu = sys.argv[1:5]
    orig, out = cv2.imread(fo), cv2.imread(fc)
    # werk op ChatGPT-schaal: verklein origineel eerst grofweg voor stabiele punten
    M = lijn_uit(orig, out)
    if modus == "rand":
        r = int(sys.argv[5]) if len(sys.argv) > 5 else 40
        m = np.zeros(orig.shape[:2], np.uint8)
        m[r:-r, r:-r] = 255
        m = cv2.GaussianBlur(m, (0, 0), r / 2)
    else:
        m = cv2.imread(sys.argv[5], cv2.IMREAD_GRAYSCALE)
    cv2.imwrite(fu, plak(orig, out, M, m))
    print("klaar", fu)
