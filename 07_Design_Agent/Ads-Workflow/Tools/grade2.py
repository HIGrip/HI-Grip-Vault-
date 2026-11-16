"""Foto -> canvas (2x): held-venster uit een bounding box, reflect-pad waar het venster buiten de bron valt, kleurgrade, gradient.
grade(src, out, fmt, hero, target, gs, ge, top=0.55)
  hero   = [x0, y0, x1, y1]  bounding box van de held in de BRON (fracties 0-1; schatten via sheet/vision, bijsturen op beeld)
  target = [tt, tb]          waar de held op het canvas moet staan (fractie van canvashoogte), bv. [0.17, 0.50]
  Venster: hoogte = (y1-y0)/(tb-tt) bronhoogtes, boven = y0 - tt*hoogte, horizontaal gecentreerd op het midden van de held.
  Valt het venster buiten de bron: reflect-pad + lichte blur (de padzone ligt onder/in de donkere gradient).
  gs/ge  = begin/eind (fractie van canvashoogte) van de gradient naar #0A0A0A (smoothstep)."""
from PIL import Image, ImageOps, ImageEnhance, ImageFilter
import numpy as np


def window(iw, ih, fmt, hero, target):
    ratio = 0.8 if fmt == '4x5' else 0.5625
    x0, y0, x1, y1 = hero; tt, tb = target
    hf = (y1-y0)/(tb-tt)                      # venster-hoogte in bronhoogtes
    ch = hf*ih; cw = ch*ratio
    top = y0*ih - tt*ch; left = (x0+x1)/2*iw - cw/2
    return left, top, cw, ch


def grade(src, out, fmt, hero, target, gs, ge, top=0.55):
    W, H = (2160, 2700) if fmt == '4x5' else (2160, 3840)
    im = ImageOps.exif_transpose(Image.open(src)).convert('RGB'); iw, ih = im.size
    left, tp, cw, ch = window(iw, ih, fmt, hero, target)
    # pad zodat het venster binnen het beeld valt
    pl = max(0, int(-left)+2); pt = max(0, int(-tp)+2); pr = max(0, int(left+cw-iw)+2); pb = max(0, int(tp+ch-ih)+2)
    if pl or pt or pr or pb:
        a = np.asarray(im)
        pad = ((min(pt, ih-1), min(pb, ih-1)), (min(pl, iw-1), min(pr, iw-1)), (0, 0))
        a = np.pad(a, pad, mode='reflect'); big = Image.fromarray(a)
        mask = Image.new('L', big.size, 0); mask.paste(255, (pad[1][0], pad[0][0], pad[1][0]+iw, pad[0][0]+ih))
        blur = big.filter(ImageFilter.GaussianBlur(max(10, int(0.03*big.size[1]))))
        im = Image.composite(big, blur, mask); ox, oy = pad[1][0], pad[0][0]
    else:
        ox = oy = 0
    box = (left+ox, tp+oy, left+ox+cw, tp+oy+ch)
    im = im.resize((W, H), Image.LANCZOS, box=box)
    im = ImageEnhance.Contrast(im).enhance(1.10); im = ImageEnhance.Color(im).enhance(1.06)
    a = np.asarray(im).astype(np.float32); y = np.linspace(0, 1, H)[:, None]
    t = np.clip((y-gs)/(ge-gs), 0, 1); t = t*t*(3-2*t)
    tpg = np.clip(1-(y/0.14), 0, 1)*top
    k = np.maximum(t, tpg)[:, :, None]
    a = a*(1-k) + np.array([10, 10, 10], np.float32)*k
    Image.fromarray(a.clip(0, 255).astype(np.uint8)).save(out, quality=90)
    return dict(window=(round(left), round(tp), round(cw), round(ch)), pad=(pl, pt, pr, pb))
