"""Gedeelde bouwstenen voor de ronde-3 ads (materialen via SVG-filters, schaduwen, sokken, render)."""
import pathlib
import subprocess
import tempfile
import time

from PIL import Image

CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
HERE = pathlib.Path(__file__).resolve().parent
PNG = HERE.parent / "png"
PNG.mkdir(exist_ok=True)

CHEV = '<svg viewBox="0 0 24 24"><path d="M9 4l8 8-8 8" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
ASPECT = {"sok_wit_vrij": 613 / 1102, "sok_zwart_vrij": 620 / 1126, "pack3_zwart": 1400 / 1339}

# Eén lichtbron linksboven: schaduwen vallen rechts en omlaag. Contact (kort, scherp) + val (lang, zacht).
DS = "drop-shadow(2px 3px 2px rgba(0,0,0,.5)) drop-shadow(22px 34px 26px rgba(0,0,0,.30))"
BS = "2px 3px 3px rgba(0,0,0,.45), 24px 36px 34px rgba(0,0,0,.28)"

DEFS = """<svg width="0" height="0" style="position:absolute"><defs>
<filter id="f_korrel" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">
 <feTurbulence type="fractalNoise" baseFrequency=".85" numOctaves="2" seed="3"/>
 <feColorMatrix values=".33 .33 .33 0 0  .33 .33 .33 0 0  .33 .33 .33 0 0  0 0 0 0 1"/></filter>
<filter id="f_hout" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">
 <feTurbulence type="fractalNoise" baseFrequency=".004 .2" numOctaves="4" seed="7"/>
 <feColorMatrix values=".40 0 0 0 .50  .36 0 0 0 .44  .30 0 0 0 .36  0 0 0 0 1"/></filter>
<filter id="f_linnen" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">
 <feTurbulence type="fractalNoise" baseFrequency=".8 .022" numOctaves="2" seed="2" result="a"/>
 <feTurbulence type="fractalNoise" baseFrequency=".022 .8" numOctaves="2" seed="5" result="b"/>
 <feComposite in="a" in2="b" operator="arithmetic" k1="0" k2=".55" k3=".55" k4="0"/>
 <feColorMatrix values=".7 0 0 0 .56  .7 0 0 0 .53  .7 0 0 0 .48  0 0 0 0 1"/></filter>
<filter id="f_pleister" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">
 <feTurbulence type="fractalNoise" baseFrequency=".007" numOctaves="4" seed="11"/>
 <feColorMatrix values=".30 0 0 0 .66  .29 0 0 0 .645  .28 0 0 0 .62  0 0 0 0 1"/></filter>
<filter id="f_beton" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">
 <feTurbulence type="fractalNoise" baseFrequency=".008" numOctaves="3" seed="4"/>
 <feColorMatrix values=".16 0 0 0 .75  .16 0 0 0 .735  .15 0 0 0 .70  0 0 0 0 1"/></filter>
<filter id="f_alu" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">
 <feTurbulence type="fractalNoise" baseFrequency=".0012 .75" numOctaves="3" seed="9"/>
 <feColorMatrix values=".22 0 0 0 .03  .22 0 0 0 .03  .22 0 0 0 .032  0 0 0 0 1"/></filter>
<filter id="f_rubber" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">
 <feTurbulence type="fractalNoise" baseFrequency=".32" numOctaves="3" seed="6"/>
 <feColorMatrix values=".12 0 0 0 .055  .12 0 0 0 .055  .12 0 0 0 .055  0 0 0 0 1"/></filter>
<filter id="f_kraft" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">
 <feTurbulence type="fractalNoise" baseFrequency=".35 .45" numOctaves="3" seed="13"/>
 <feColorMatrix values=".30 0 0 0 .58  .28 0 0 0 .49  .24 0 0 0 .39  0 0 0 0 1"/></filter>
<filter id="f_papier" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">
 <feTurbulence type="fractalNoise" baseFrequency=".6" numOctaves="3" seed="21"/>
 <feColorMatrix values=".10 0 0 0 .91  .10 0 0 0 .905  .10 0 0 0 .89  0 0 0 0 1"/></filter>
<filter id="f_vloei" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">
 <feTurbulence type="fractalNoise" baseFrequency=".02 .05" numOctaves="4" seed="31"/>
 <feColorMatrix values=".18 0 0 0 .86  .18 0 0 0 .855  .18 0 0 0 .84  0 0 0 0 1"/></filter>
</defs></svg>"""


def page(body, fmt, css=""):
    return (f'<!doctype html><html lang="nl"><head><meta charset="utf-8"><link rel="stylesheet" href="base.css">'
            f'<style>{css}</style></head><body><div class="ad {fmt}">{DEFS}{body}<div class="korrel" style="top:0;height:50%"></div><div class="korrel" style="top:50%;height:50%"></div></div></body></html>')


def sock(img, left, top, h, rot=0, z=10, extra=""):
    """Enkele sok. left/top = linkerbovenhoek vóór rotatie (rotatie om het midden)."""
    return (f'<img class="sk" src="../bron/{img}.png" style="left:{left:.0f}px;top:{top:.0f}px;height:{h:.0f}px;'
            f'transform:rotate({rot}deg);filter:{DS};z-index:{z};{extra}">')


def pack(left, top, h, rot=0, z=10, extra=""):
    return (f'<img class="sk" src="../bron/pack3_zwart.png" style="left:{left:.0f}px;top:{top:.0f}px;height:{h:.0f}px;'
            f'transform:rotate({rot}deg);filter:{DS};z-index:{z};{extra}">')


def mat(filt, left, top, w, h, extra="", z=0):
    return f'<div class="mat" style="left:{left}px;top:{top}px;width:{w}px;height:{h}px;filter:url(#{filt});z-index:{z};{extra}"></div>'


def render(html, out, w, h):
    out.unlink(missing_ok=True)
    proc = subprocess.Popen([CHROME, "--headless=new", "--disable-gpu", "--no-first-run", "--hide-scrollbars",
                             "--force-device-scale-factor=2", "--virtual-time-budget=5000", "--allow-file-access-from-files",
                             f"--user-data-dir={tempfile.mkdtemp(prefix='r3render-')}",
                             f"--window-size={w},{h + 140}", f"--screenshot={out}", html.as_uri()],
                            stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    for _ in range(120):
        time.sleep(.5)
        if out.exists() and out.stat().st_size > 0:
            time.sleep(1.5)
            break
    proc.kill()
    im = Image.open(out)
    im = im.crop((0, 0, 2 * w, 2 * h))
    im.save(out)
    return im.size


def tissue(left, top, w, h, seed=1, z=9, fill="#F3F1ED"):
    """Gekreukt vloeipapier: grillige bovenrand, vouwlijnen, zachte schaduw."""
    import random
    r = random.Random(seed)
    n = 11
    pts = [(0, h)]
    for i in range(n + 1):
        x = w * i / n
        y = h * (.18 + .42 * r.random()) if 0 < i < n else h * .62
        pts.append((x, y))
    pts.append((w, h))
    path = f"M{pts[0][0]:.0f} {pts[0][1]:.0f} L{pts[1][0]:.0f} {pts[1][1]:.0f}"
    for i in range(2, len(pts) - 1):
        mx, my = (pts[i - 1][0] + pts[i][0]) / 2, (pts[i - 1][1] + pts[i][1]) / 2
        path += f" Q{pts[i - 1][0]:.0f} {pts[i - 1][1]:.0f} {mx:.0f} {my:.0f}"
    path += f" L{pts[-2][0]:.0f} {pts[-2][1]:.0f} L{pts[-1][0]:.0f} {pts[-1][1]:.0f} Z"
    folds = ""
    for i in range(1, n):
        x0, y0 = pts[i + 1]
        x1 = x0 + (r.random() - .5) * 90
        folds += f'<path d="M{x0:.0f} {y0 + 6:.0f} L{x1:.0f} {h:.0f}" stroke="rgba(0,0,0,.09)" stroke-width="3" fill="none"/>'
        folds += f'<path d="M{x0 + 5:.0f} {y0 + 8:.0f} L{x1 + 6:.0f} {h:.0f}" stroke="rgba(255,255,255,.9)" stroke-width="2" fill="none"/>'
    return (f'<svg class="abs" style="left:{left:.0f}px;top:{top:.0f}px;width:{w}px;height:{h}px;z-index:{z};overflow:visible;'
            f'filter:drop-shadow(2px 3px 3px rgba(0,0,0,.3))" viewBox="0 0 {w} {h}"><path d="{path}" fill="{fill}"/>{folds}</svg>')


def tex(naam, h, z=0, left=0, top=0, w=1080, extra=""):
    """Vooraf gerenderde ondergrond (zie textures.py); schaal 1080x1920 css."""
    return (f'<div class="mat" style="left:{left}px;top:{top}px;width:{w}px;height:{h}px;z-index:{z};'
            f'background:url(../bron/{naam}) 0 0/1080px 1920px no-repeat;{extra}"></div>')
