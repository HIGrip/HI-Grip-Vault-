"""Claude-spoor A/B: 6 Performance Days-ads (feed 4:5 en reel 9:16), render op 2x met headless Chrome.
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
B = "../bron/"

CHEVRON = ('<svg viewBox="0 0 24 24"><path d="M9 4l8 8-8 8" fill="none" stroke="#fff" stroke-width="3.2" '
           'stroke-linecap="round" stroke-linejoin="round"/></svg>')
PACK_R = 1400 / 1339
SOK_W_R = 613 / 1102
SOK_Z_R = 620 / 1126


def page(body, fmt, css="", bg=None):
    style = f' style="background:{bg}"' if bg else ""
    return (f'<!doctype html><html lang="nl"><head><meta charset="utf-8"><link rel="stylesheet" href="base.css">'
            f'<style>{css}</style></head><body><div class="ad {fmt}"{style}>{body}</div></body></html>')


def logo(top, kleur="wit"):
    return f'<img class="logo" src="{B}logo_lockup_{kleur}.png" style="top:{top}px">'


def pill(top, tekst, left=72):
    return f'<div class="abs" style="left:{left}px;top:{top}px"><span class="pill">{tekst}<i>{CHEVRON}</i></span></div>'


def pack(left, top, h, extra=""):
    return f'<img class="pack" src="{B}pack3_zwart.png" style="left:{left}px;top:{top}px;height:{h}px;{extra}">'


PACK_CSS = ".pack { position: absolute; filter: drop-shadow(0 30px 28px rgba(0,0,0,.55)); }"


# 1 · Stoppen: geen korting. Bonus pack-framing tegen een feed vol procenten.
def ad1(fmt):
    r = fmt == "reel"
    lt, kt, ks = (250, 330, 164) if r else (72, 168, 164)
    st = kt + round(ks * 1.8) + 34
    ph = 400 if r else 430
    pt = st + (100 if r else 110)
    pw = round(ph * PACK_R)
    bt = pt + ph + (50 if r else 70)
    body = (logo(lt)
            + f'<div class="kop" style="top:{kt}px;font-size:{ks}px">Geen<br>korting.</div>'
            + f'<div class="abs" style="left:72px;top:{st}px;font:800 56px/1 Poppins;letter-spacing:-.02em">'
              f'Wel alles <span class="vol">twee keer.</span></div>'
            + pack(540 - pw - 8, pt, ph) + pack(548, pt, ph)
            + f'<div class="txt" style="top:{bt}px"><b style="font-weight:800">HÏ Performance Days</b><br>'
              f'<span class="dim">Vrijdag 27 t/m maandag 30 november.</span></div>')
    return page(body, fmt, PACK_CSS)


# 2 · Stoppen: zoek de verschillen. Puzzel als open lus; de pointe is het aanbod.
CSS2 = """
.kaart { position: absolute; background: #fff; overflow: hidden; border-radius: 4px; box-shadow: 0 30px 60px rgba(0,0,0,.5); }
.kaart img { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); }
.nr { position: absolute; font: 800 26px/1 Poppins; color: var(--hi-titanium); }
"""


def ad2(fmt):
    r = fmt == "reel"
    lt, kt, ks = (250, 330, 104) if r else (72, 176, 108)
    ct = kt + round(ks * 1.8) + (50 if r else 56)
    ch = 470 if r else 540
    cw = 450
    nt = ct + ch + 26
    at = nt + (60 if r else 70)
    kaarten = ""
    for i, x in enumerate((72, 558)):
        kaarten += (f'<div class="kaart" style="left:{x}px;top:{ct}px;width:{cw}px;height:{ch}px">'
                    f'<img src="{B}packshot_2-0_zwart_voor.png" style="height:{ch + 30}px"></div>'
                    f'<div class="nr" style="left:{x}px;top:{nt}px">{"AB"[i]}</div>')
    body = (logo(lt)
            + f'<div class="kop" style="top:{kt}px;font-size:{ks}px">Zoek de<br>verschillen.</div>'
            + kaarten
            + f'<div class="kop" style="top:{at}px;font-size:{76 if r else 80}px;letter-spacing:-.03em">Er zijn er <span class="vol">nul.</span></div>'
            + f'<div class="txt" style="top:{at + (92 if r else 98)}px">Wat je bestelt, krijg je twee keer.<br>'
              f'<span class="dim">HÏ Performance Days, vrijdag 27 t/m maandag 30 november.</span></div>')
    return page(body, fmt, CSS2)


# 3 · Klikken: het briefje in de doos. Wederkerigheid, humor, afzender in de pointe.
CSS3 = PACK_CSS + """
.brief { position: absolute; left: 84px; width: 912px; background: #fff; color: var(--hi-black); transform: rotate(-2deg);
         box-shadow: 0 40px 80px rgba(0,0,0,.65), 0 4px 12px rgba(0,0,0,.35); }
.brief p { font: 400 30px/1.45 Poppins; }
.brief .aanhef { font: 800 32px/1.2 Poppins; margin-bottom: 18px; }
.brief .expres { font: 900 italic 96px/1 Poppins; letter-spacing: -.04em; text-transform: uppercase; margin: 18px 0 22px; }
.brief .sign { display: flex; align-items: center; gap: 16px; margin-top: 30px; font: 900 italic 32px/1 Poppins; }
.brief .sign img { height: 46px; }
.brief .ps { font: 500 26px/1.4 Poppins; color: #555; margin-top: 26px; padding-top: 22px; border-top: 2px solid #e2e2e2; }
"""


def ad3(fmt):
    r = fmt == "reel"
    lt = 250 if r else 72
    ph = 330 if r else 380
    pt = 330 if r else 150
    pw = round(ph * PACK_R)
    bt = pt + ph - (60 if r else 70)
    pad = "50px 56px 46px" if r else "58px 64px 52px"
    body = (logo(lt)
            + pack(540 - pw + 40, pt, ph, "transform:rotate(-6deg)") + pack(500, pt + 14, ph, "transform:rotate(5deg)")
            + f'<div class="brief" style="top:{bt}px;padding:{pad}">'
              '<p class="aanhef">Hé sporter,</p>'
              '<p>Deze week pakken we elke bestelling twee keer in.</p>'
              '<p class="expres">Expres.</p>'
              '<p>Bestel je 3 paar, dan zitten er 6 in je doos. Voor dezelfde prijs.</p>'
              f'<div class="sign"><img src="{B}logo_mark_zwart.png">Team HÏ Grip</div>'
              '<p class="ps">P.S. Alleen van vrijdag 27 t/m maandag 30 november.</p>'
              '</div>')
    return page(body, fmt, CSS3, "var(--hi-warm-dark)")


# 4 · Klikken: de wasmachine. Herkenning van een universeel verlies, daarna de compensatie.
CSS4 = """
.sok { position: absolute; }
.echt { filter: drop-shadow(0 30px 30px rgba(0,0,0,.6)); }
.spook { filter: brightness(0) invert(1); opacity: .07; }
"""


def ad4(fmt):
    r = fmt == "reel"
    lt, kt, ks = (250, 330, 96) if r else (72, 176, 100)
    sh = 470 if r else 520
    sw = round(sh * SOK_W_R)
    st = kt + round(ks * 1.8) + (60 if r else 70)
    lt2 = st + sh + (80 if r else 96)
    body = (logo(lt)
            + f'<div class="kop" style="top:{kt}px;font-size:{ks}px">De wasmachine<br>neemt er één.</div>'
            + f'<img class="sok spook" src="{B}sok_wit_vrij.png" style="left:{612}px;top:{st}px;height:{sh}px">'
            + f'<img class="sok echt" src="{B}sok_wit_vrij.png" style="left:{170}px;top:{st + 40}px;height:{sh}px;transform:rotate(-9deg)">'
            + f'<div class="abs" style="left:{612 + sw // 2 - 150}px;width:300px;text-align:center;top:{st + sh // 2 - 20}px;'
              f'font:700 26px/1.3 Poppins;color:var(--hi-titanium)">Kwijt.</div>'
            + f'<div class="abs" style="left:72px;top:{lt2}px;font:800 58px/1.05 Poppins;letter-spacing:-.02em">'
              f'Wij geven je alles <span class="vol">twee keer.</span></div>'
            + f'<div class="txt dim" style="top:{lt2 + 84}px">HÏ Performance Days, vrijdag 27 t/m maandag 30 november.</div>')
    return page(body, fmt, CSS4)


# 5 · Kopen: zes paar, één prijs. Numerositeit (zes echte sokken) plus het anker van losse paren.
CSS5 = ".rij { position: absolute; filter: drop-shadow(0 24px 22px rgba(0,0,0,.6)); }"


def ad5(fmt):
    r = fmt == "reel"
    lt, kt, ks = (250, 330, 150) if r else (72, 168, 150)
    sh = 360 if r else 400
    sw = round(sh * SOK_W_R)
    step = 132 if r else 140
    total = step * 5 + sw
    x0 = 540 - total // 2
    st = kt + round(ks * 1.8) + (50 if r else 60)
    tt = st + sh + (40 if r else 50)
    socks = "".join(f'<img class="rij" src="{B}sok_wit_vrij.png" style="left:{x0 + i * step}px;top:{st}px;height:{sh}px;z-index:{6 - i}">'
                    for i in range(6))
    body = (logo(lt)
            + f'<div class="kop" style="top:{kt}px;font-size:{ks}px">Zes paar.<br><span class="vol">€44,95.</span></div>'
            + socks
            + f'<div class="txt" style="top:{tt}px">Los betaal je voor zes paar <s class="dim" style="text-decoration-thickness:3px">€107,70</s>.<br>'
              f'Bestel het 3-pack 2.0, krijg er 6. T/m maandag 30-11.</div>'
            + pill(1230 if r else 1198, "Shop 3-pack"))
    return page(body, fmt, CSS5)


# 6 · Kopen: 3 = 6. Een rekensom die niet klopt (incongruentie) en een echte einddatum.
CSS6 = PACK_CSS + """
.som { position: absolute; left: 72px; width: 936px; display: flex; justify-content: space-between; align-items: baseline;
       font-weight: 900; font-style: italic; letter-spacing: -.04em; line-height: .82; }
"""


def ad6(fmt):
    r = fmt == "reel"
    lt, ft, fs = (250, 330, 280) if r else (72, 160, 300)
    ph = 280
    pw = round(ph * PACK_R)
    pt = ft + round(fs * .82) + (40 if r else 44)
    kt = pt + ph + (50 if r else 60)
    body = (logo(lt)
            + f'<div class="som" style="top:{ft}px;font-size:{fs}px"><span>3</span><span class="vol">=</span><span>6</span></div>'
            + pack(72, pt, ph)
            + pack(1008 - pw - 150, pt, ph) + pack(1008 - pw, pt, ph)
            + f'<div class="kop" style="top:{kt}px;font-size:72px;line-height:1">Klopt niet.<br>Tot maandag wel.</div>'
            + f'<div class="txt" style="top:{kt + 164}px">Bestel het 3-pack 2.0, krijg 6 paar.<br>'
              f'<span class="dim">Vrijdag 27 t/m maandag 30 november.</span></div>'
            + pill(1230 if r else 1198, "Shop nu"))
    return page(body, fmt, CSS6)


ADS = {1: ("geen-korting", ad1), 2: ("zoek-verschillen", ad2), 3: ("expres", ad3),
       4: ("wasmachine", ad4), 5: ("zes-paar", ad5), 6: ("drie-is-zes", ad6)}
SIZES = {"feed": (1080, 1350), "reel": (1080, 1920)}


def render(html, out, w, h):
    out.unlink(missing_ok=True)
    proc = subprocess.Popen([CHROME, "--headless=new", "--disable-gpu", "--no-first-run", "--hide-scrollbars",
                             "--force-device-scale-factor=2", "--virtual-time-budget=4000", "--allow-file-access-from-files",
                             f"--user-data-dir={tempfile.mkdtemp(prefix='abrender-')}",
                             f"--window-size={w},{h}", f"--screenshot={out}", html.as_uri()],
                            stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    for _ in range(90):
        time.sleep(.5)
        if out.exists() and out.stat().st_size > 0:
            time.sleep(1)
            break
    proc.kill()


if __name__ == "__main__":
    for nr in [int(a) for a in sys.argv[1:]] or ADS:
        concept, fn = ADS[nr]
        for fmt, (w, h) in SIZES.items():
            html = HERE / f"cl_{nr}_{concept}_{fmt}.html"
            html.write_text(fn(fmt), encoding="utf-8")
            out = PNG / f"cl_{nr}_{concept}_{fmt}.png"
            render(html, out, w, h)
            print(out.name, Image.open(out).size)
