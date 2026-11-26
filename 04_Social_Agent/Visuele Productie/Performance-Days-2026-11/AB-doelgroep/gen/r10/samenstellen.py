"""E3 ronde 10: echte packshot-sokken op de deurmat in plaats van de AI-sokken.
Stappen: sok uitknippen -> schalen/draaien -> licht en zwartniveau van de flitsfoto -> contactschaduw
-> resten van de AI-sokken wegwerken (inpaint) -> korrel. Het masker van de echte sok wordt bewaard,
zodat een eventuele ChatGPT-harmonisatie er later weer exact overheen geplakt kan worden.
Gebruik: python samenstellen.py [preview]"""
import sys
from pathlib import Path

import cv2
import numpy as np

HIER = Path(__file__).resolve().parent
BEELDEN = HIER.parents[2] / "voor-chatgpt" / "beelden"

# (bestand, schaal, hoek in graden, linksboven x, y, spiegelen) — coördinaten in E3_basis (941x1672)
SOKKEN = [
    ("06_sok_zwart_transparant.png", 0.40, 8, 330, 570),
    ("04_sok_zwart_achter.png", 0.40, -6, 560, 585),
]


def knip(naam):
    img = cv2.imread(str(BEELDEN / naam), cv2.IMREAD_UNCHANGED)
    if img.shape[2] == 4:
        bgr, a = img[..., :3], img[..., 3]
    else:
        bgr = img
        # witte achtergrond: alles wat vanaf de rand bereikbaar en licht is, is achtergrond
        licht = (bgr.min(2) > 200).astype(np.uint8)
        ff = licht.copy()
        h, w = ff.shape
        mask = np.zeros((h + 2, w + 2), np.uint8)
        for p in [(0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1)]:
            cv2.floodFill(ff, mask, p, 2)
        a = np.where(ff == 2, 0, 255).astype(np.uint8)
        a = cv2.morphologyEx(a, cv2.MORPH_OPEN, np.ones((5, 5), np.uint8))
        a = cv2.GaussianBlur(cv2.erode(a, np.ones((3, 3), np.uint8)), (0, 0), 1)
    ys, xs = np.where(a > 20)
    return bgr[ys.min():ys.max() + 1, xs.min():xs.max() + 1], a[ys.min():ys.max() + 1, xs.min():xs.max() + 1]


def draai(bgr, a, s, hoek):
    bgr = cv2.resize(bgr, None, fx=s, fy=s, interpolation=cv2.INTER_AREA)
    a = cv2.resize(a, None, fx=s, fy=s, interpolation=cv2.INTER_AREA)
    h, w = a.shape
    M = cv2.getRotationMatrix2D((w / 2, h / 2), hoek, 1)
    c, si = abs(M[0, 0]), abs(M[0, 1])
    W, H = int(h * si + w * c), int(h * c + w * si)
    M[0, 2] += W / 2 - w / 2
    M[1, 2] += H / 2 - h / 2
    return (cv2.warpAffine(bgr, M, (W, H), flags=cv2.INTER_LANCZOS4, borderValue=(0, 0, 0)),
            cv2.warpAffine(a, M, (W, H), flags=cv2.INTER_LINEAR))


def main():
    basis = cv2.imread(str(HIER / "in" / "E3_basis.png"))
    H, W = basis.shape[:2]
    uit = basis.astype(np.float32)
    totaal = np.zeros((H, W), np.float32)

    # oude AI-sokken: donker (en hun witte logo's) binnen de twee sokgebieden
    hsv = cv2.cvtColor(basis, cv2.COLOR_BGR2HSV)
    oud = np.zeros((H, W), np.uint8)
    for poly in ([(335, 575), (470, 570), (500, 660), (555, 840), (560, 960), (500, 1000), (370, 1000),
                  (350, 930), (395, 830), (405, 700)],
                 [(580, 600), (720, 600), (790, 780), (790, 830), (640, 830), (585, 760)]):
        p = np.zeros((H, W), np.uint8)
        cv2.fillPoly(p, [np.array(poly)], 255)
        oud |= p & (((hsv[..., 2] < 95) | ((hsv[..., 1] < 50) & (hsv[..., 2] > 150))) * 255).astype(np.uint8)
    oud = cv2.morphologyEx(oud, cv2.MORPH_CLOSE, np.ones((9, 9), np.uint8))
    oud = cv2.dilate(oud, np.ones((7, 7), np.uint8))

    lagen = []
    for naam, s, hoek, x, y in SOKKEN:
        bgr, a = draai(*knip(naam), s, hoek)
        h, w = a.shape
        x2, y2 = min(W, x + w), min(H, y + h)
        bgr, a = bgr[:y2 - y, :x2 - x], a[:y2 - y, :x2 - x]
        vol = np.zeros((H, W), np.float32)
        vol[y:y2, x:x2] = a / 255
        laag = np.zeros((H, W, 3), np.float32)
        laag[y:y2, x:x2] = bgr
        lagen.append((laag, vol))
        totaal = np.maximum(totaal, vol)

    # resten van de oude sokken die niet bedekt worden: inpainten (vóór de nieuwe sokken erop gaan)
    rest = (oud > 0) & (totaal < 0.5)
    basis_ip = cv2.inpaint(basis, rest.astype(np.uint8) * 255, 9, cv2.INPAINT_TELEA)
    uit = basis_ip.astype(np.float32)

    for laag, vol in lagen:
        # contactschaduw: flits van voren-boven, schaduw kort en zacht naar achteren/onder
        sch = cv2.GaussianBlur(np.roll(vol, (6, 3), (0, 1)), (0, 0), 7)
        uit *= (1 - 0.55 * sch)[..., None]
        # zwartniveau en contrast van de flitsfoto: packshot-zwart is te grijs/zacht
        sok = laag.copy()
        sok = np.clip((sok - 8) * 0.78, 0, 255)
        uit = uit * (1 - vol[..., None]) + sok * vol[..., None]

    # korrel over het geheel, iets meer op de sokken
    rng = np.random.default_rng(7)
    ruis = rng.normal(0, 3.2, (H, W, 1)).astype(np.float32)
    uit = np.clip(uit + ruis * (1 + 0.6 * totaal[..., None]), 0, 255).astype(np.uint8)
    cv2.imwrite(str(HIER / "out" / "HG_r10_E3.png"), uit)
    cv2.imwrite(str(HIER / "out" / "HG_r10_E3_sokmasker.png"), (totaal * 255).astype(np.uint8))
    if len(sys.argv) > 1:
        cv2.imwrite(sys.argv[1], uit[500:1100])


if __name__ == "__main__":
    main()
