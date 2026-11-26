"""Bouwt de 3 Performance Days-ads (feed 4:5 en reel 9:16) als HTML en rendert ze op 2x met headless Chrome.
Gebruik: python build.py [nr ...]"""
import pathlib
import subprocess
import sys
import tempfile
import time

from PIL import Image

CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
HERE = pathlib.Path(__file__).resolve().parent
PNG = HERE.parent / "png"
PNG.mkdir(exist_ok=True)

CHEVRON = '<svg viewBox="0 0 24 24"><path d="M9 4l8 8-8 8" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>'


def page(body, fmt, extra_css=""):
    return f"""<!doctype html><html lang="nl"><head><meta charset="utf-8"><link rel="stylesheet" href="base.css">
<style>{extra_css}</style></head><body><div class="ad {fmt}">{body}</div></body></html>"""


# 1 · Stoppen: twee identieke paren
CSS1 = """
.pair { position: absolute; }
.pair img { position: absolute; top: 0; }
.pair .achter { filter: brightness(.9); }
.schaduw { position: absolute; height: 46px; border-radius: 50%; background: #000; filter: blur(18px); opacity: .75; }
.label { position: absolute; font-weight: 800; text-transform: uppercase; }
.sub { position: absolute; left: 72px; font: 500 30px/1.35 Poppins; color: var(--hi-white); }
"""


def ad1(fmt):
    reel = fmt == "reel"
    logo_top, kop_top, kop_size = (250, 350, 124) if reel else (72, 176, 132)
    sub_top = kop_top + int(kop_size * 1.8) + 30
    sock_top = sub_top + 110 if reel else sub_top + 120
    h = 520 if reel else 540
    w = round(h * 613 / 1102)
    off = round(w * .5)
    pw = w + off
    gap = 936 - 2 * pw
    left2 = 72 + pw + gap
    lab_top = sock_top + h + 34
    pairs = ""
    for i, x in enumerate((72, left2)):
        pairs += f'<div class="schaduw" style="left:{x + 20}px;top:{sock_top + h - 36}px;width:{pw - 40}px"></div>'
        pairs += (f'<div class="pair" style="left:{x}px;top:{sock_top}px;width:{pw}px;height:{h}px">'
                  f'<img class="achter" src="../bron/sok_wit_vrij.png" style="left:0;top:0;height:{round(h * .93)}px">'
                  f'<img src="../bron/sok_wit_vrij.png" style="left:{off}px;top:{round(h * .07)}px;height:{h}px"></div>')
    labels = (f'<div class="label" style="left:72px;width:{pw}px;text-align:center;top:{lab_top}px;font-size:28px;color:var(--hi-titanium)">Jij bestelt</div>'
              f'<div class="label vol" style="left:{left2}px;width:{pw}px;text-align:center;top:{lab_top}px;font-size:28px">Gratis erbij</div>')
    body = (f'<img class="logo" src="../bron/logo_lockup_wit.png" style="top:{logo_top}px">'
            f'<div class="abs kop" style="left:72px;top:{kop_top}px;font-size:{kop_size}px">Verdubbel<br>je order.</div>'
            f'<div class="sub" style="top:{sub_top}px">Wat je bestelt, krijg je twee keer.<br>Van vrijdag 27 t/m maandag 30 november.</div>'
            + pairs + labels)
    return page(body, fmt, CSS1)


# 2 · Klikken: de pakbon
CSS2 = """
.ad { background: var(--hi-warm-dark); }
.slip { position: absolute; background: var(--hi-white); color: var(--hi-black); padding: 52px 56px 48px;
        transform: rotate(-2.5deg); box-shadow: 0 34px 70px rgba(0,0,0,.6), 0 4px 10px rgba(0,0,0,.35); }
.slip .kopregel { display: flex; justify-content: space-between; align-items: baseline; }
.slip .kopregel b { font: 900 40px/1 Poppins; }
.slip .kopregel span { font: 500 24px/1 Poppins; color: #555; }
.slip hr { border: 0; border-top: 3px solid var(--hi-black); margin: 26px 0; }
.slip .regel { display: flex; justify-content: space-between; align-items: flex-start; padding: var(--rp, 16px) 0; }
.slip .regel b { display: block; font: 700 var(--f, 30px)/1.2 Poppins; }
.slip .regel span { display: block; font: 500 24px/1.3 Poppins; color: #555; margin-top: 4px; }
.slip .regel em { font: 700 var(--f, 30px)/1.2 Poppins; font-style: normal; white-space: nowrap; }
.slip .gratis { background: var(--hi-black); margin: 6px -24px; padding: 20px 24px; }
.slip .gratis b, .slip .gratis em { color: var(--hi-yellow); font-weight: 800; }
.slip .gratis span { color: var(--hi-titanium); }
.slip .totaal b, .slip .totaal em { font-weight: 900; font-size: 36px; }
.liggend { position: absolute; transform: rotate(-104deg); filter: drop-shadow(0 22px 26px rgba(0,0,0,.6)); }
"""


def ad2(fmt):
    reel = fmt == "reel"
    logo_top, kop_top, kop_size = (250, 345, 124) if reel else (72, 176, 132)
    slip_top = kop_top + int(kop_size * 1.8) + (40 if reel else 60)
    slip = f"""<div class="slip" style="left:{86 if reel else 84}px;top:{slip_top}px;width:{900 if reel else 912}px;{'' if reel else '--f:34px;--rp:22px;padding:60px 60px 56px'}">
<div class="kopregel"><b>PAKBON</b><span>HÏ Grip · 27-11-2026</span></div>
<hr>
<div class="regel"><div><b>Performance Grip Socks 2.0</b><span>3 paar · wit · maat 43-47</span></div><em>€44,95</em></div>
<div class="regel gratis"><div><b>+3 paar · GRATIS</b><span>HÏ Performance Days</span></div><em>€0,00</em></div>
<div class="regel"><div><b>Verzending</b></div><em>Gratis</em></div>
<hr>
<div class="regel totaal"><div><b>Totaal</b></div><em>€44,95</em></div>
</div>"""
    sock_top = slip_top + (520 if reel else 610)
    sock = (f'<img class="liggend" src="../bron/sok_wit_vrij.png" style="height:520px;left:{690 if reel else 700}px;'
            f'top:{sock_top}px">')
    body = (f'<img class="logo" src="../bron/logo_lockup_wit.png" style="top:{logo_top}px">'
            f'<div class="abs kop" style="left:72px;top:{kop_top}px;font-size:{kop_size}px">Bestel 3.<br>Krijg 6.</div>'
            + slip)
    return page(body, fmt, CSS2)


# 3 · Kopen: rekensom en deadline
CSS3 = """
.licht { position: absolute; left: 0; top: 0; width: 1080px; background: var(--hi-warm-offwhite); }
.pack { position: absolute; filter: drop-shadow(0 26px 24px rgba(0,0,0,.28)); }
.prijs { position: absolute; left: 72px; font-weight: 900; font-style: italic; letter-spacing: -.04em; line-height: .9; text-transform: uppercase; }
.regel { position: absolute; left: 72px; font: 500 30px/1.4 Poppins; }
.regel s { text-decoration-thickness: 3px; }
.grijs { color: var(--hi-titanium); }
"""


def ad3(fmt):
    reel = fmt == "reel"
    if reel:
        logo_top, panel, pack_top, pack_h = 250, 800, 345, 400
        p_top, p_size, pp_size = 830, 150, 88
    else:
        logo_top, panel, pack_top, pack_h = 72, 690, 175, 450
        p_top, p_size, pp_size = 730, 168, 96
    pp_top = p_top + int(p_size * .9) + 6
    n_top = pp_top + int(pp_size * .9) + 30
    i_top = n_top + 52
    btn_top = i_top + 96 if reel else 1198
    body = (f'<div class="licht" style="height:{panel}px"></div>'
            f'<img class="logo" src="../bron/logo_lockup_zwart.png" style="top:{logo_top}px">'
            + ''.join(f'<img class="pack" src="../bron/pack3_zwart.png" style="top:{pack_top}px;height:{pack_h}px;left:{x}px">'
                      for x in (540 - round(pack_h * 1400 / 1339) - 6, 546)) +
            f'<div class="prijs vol" style="top:{p_top}px;font-size:{p_size}px">€7,49</div>'
            f'<div class="prijs" style="top:{pp_top}px;font-size:{pp_size}px">per paar.</div>'
            f'<div class="regel grijs" style="top:{n_top}px">Normaal <s>€14,98</s> per paar in het 3-pack.</div>'
            f'<div class="regel" style="top:{i_top}px">HÏ Grip 3-pack 2.0 = 6 paar voor €44,95.<br>Alleen t/m maandag 30-11.</div>'
            f'<div class="abs" style="left:72px;top:{btn_top}px"><span class="pill">Shop nu<i>{CHEVRON}</i></span></div>')
    return page(body, fmt, CSS3)


ADS = {1: ("verdubbeling", ad1), 2: ("pakbon", ad2), 3: ("rekensom", ad3)}
SIZES = {"feed": (1080, 1350), "reel": (1080, 1920)}


def render(html, out, w, h):
    out.unlink(missing_ok=True)
    proc = subprocess.Popen([CHROME, "--headless=new", "--disable-gpu", "--no-first-run", "--hide-scrollbars",
                             "--force-device-scale-factor=2", "--virtual-time-budget=4000", "--allow-file-access-from-files",
                             f"--user-data-dir={tempfile.mkdtemp(prefix='pdrender-')}",
                             f"--window-size={w},{h}", f"--screenshot={out}", html.as_uri()],
                            stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    for _ in range(90):
        time.sleep(.5)
        if out.exists() and out.stat().st_size > 0:
            time.sleep(1)
            break
    proc.kill()


for nr in [int(a) for a in sys.argv[1:]] or ADS:
    concept, fn = ADS[nr]
    for fmt, (w, h) in SIZES.items():
        html = HERE / f"pd_{nr}_{concept}_{fmt}.html"
        html.write_text(fn(fmt), encoding="utf-8")
        out = PNG / f"pd_{nr}_{concept}_{fmt}.png"
        render(html, out, w, h)
        print(out.name, Image.open(out).size)
