"""HÏ Performance Days · 3 + 3 gratis · 'Kies je kant'.
Split zwart/wit: witte sokken op de zwarte helft, zwarte sokken op de witte helft.
Koppen met mix-blend-mode difference, zodat ze over de naad wisselen van kleur.
Gebruik: python build.py  (rendert feed 1080x1350 en reel 1080x1920 op 2x)"""
import pathlib
import sys

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[2] / "AB-ronde3" / "html"))
from common import CHEV, render  # noqa: E402

HERE = pathlib.Path(__file__).resolve().parent
PNG = HERE.parent / "png"
PNG.mkdir(exist_ok=True)
FONTS = "../../../Meta-batch-2026-11/fonts"

CSS = """
@font-face{font-family:P;font-weight:500;src:url(%(f)s/Poppins-Medium.ttf)}
@font-face{font-family:P;font-weight:600;src:url(%(f)s/Poppins-SemiBold.ttf)}
@font-face{font-family:P;font-weight:700;src:url(%(f)s/Poppins-Bold.ttf)}
@font-face{font-family:P;font-weight:800;src:url(%(f)s/Poppins-ExtraBold.ttf)}
@font-face{font-family:P;font-weight:900;src:url(%(f)s/Poppins-Black.ttf)}
@font-face{font-family:P;font-weight:900;font-style:italic;src:url(%(f)s/Poppins-BlackItalic.ttf)}
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:1080px;overflow:hidden;font-family:P,system-ui,sans-serif;-webkit-font-smoothing:antialiased}
.ad{position:relative;width:1080px;overflow:hidden;background:#fff;isolation:isolate}
.zw{position:absolute;left:0;top:0;width:540px;height:100%%;background:#0A0A0A}
.licht{position:absolute;border-radius:50%%;background:radial-gradient(closest-side,rgba(255,255,255,.10),rgba(255,255,255,0));}
.abs{position:absolute}
.logo{position:absolute;left:0;width:1080px;height:58px}
.logo img{position:absolute;left:455px;height:58px}
.logo .l{clip-path:inset(0 50%% 0 0)} .logo .r{clip-path:inset(0 0 0 50%%)}
.logo div{position:absolute;inset:0}
.dif{position:absolute;left:0;width:1080px;text-align:center;color:#fff;mix-blend-mode:difference;z-index:30}
.som{font-weight:900;font-style:italic;letter-spacing:-.04em;line-height:.82;white-space:nowrap}
.som .p{font-weight:900;font-style:normal;display:inline-block;transform:translateY(-.06em)}
.gr{font-weight:900;font-style:italic;letter-spacing:-.03em;line-height:1;text-transform:uppercase}
.sub{font-weight:600;letter-spacing:.01em}
.sk{position:absolute}
.zwart .sk{filter:drop-shadow(2px 4px 3px rgba(0,0,0,.35)) drop-shadow(18px 30px 26px rgba(0,0,0,.22))}
.wit .sk{filter:drop-shadow(0 0 1px rgba(255,255,255,.2)) drop-shadow(14px 26px 30px rgba(0,0,0,.9))}
.tag{position:absolute;z-index:25;font:800 26px/1 P;padding:12px 18px 11px;border-radius:8px;transform:translateX(-50%%);letter-spacing:.02em;text-transform:uppercase;white-space:nowrap}
.tag.op-zw{background:#fff;color:#0A0A0A;box-shadow:4px 8px 16px rgba(0,0,0,.5)}
.tag.op-wit{background:#0A0A0A;color:#fff;box-shadow:4px 8px 16px rgba(0,0,0,.25)}
.tag b{color:inherit}
.prijs{position:absolute;z-index:30}
.k1{font:600 28px/1 P;letter-spacing:.04em;text-transform:uppercase}.k1 s{text-decoration-thickness:3px;opacity:.6}
.k2{font:900 104px/1 P;letter-spacing:-.04em;margin-top:10px}
.k3{font:800 34px/1 P;margin-top:14px}
.oud{font:700 58px/1 P;letter-spacing:-.02em;text-decoration:line-through;text-decoration-thickness:5px;color:rgba(10,10,10,.45);margin-top:10px}
.eind{font:800 30px/1.25 P;margin-top:22px}
.pill{display:inline-flex;align-items:center;gap:22px;height:80px;padding:0 12px 0 36px;border-radius:40px;background:#0A0A0A;color:#fff;font:700 30px/1 P}
.pill i{width:56px;height:56px;border-radius:50%%;background:#fff;color:#0A0A0A;display:grid;place-items:center}
.pill svg{width:22px;height:22px}
.naad{position:absolute;left:539px;width:2px;background:linear-gradient(#0A0A0A,#0A0A0A)}
""" % {"f": FONTS}

PACK_AR = 1400 / 1339


def packs(kleur, side, top, h):
    """Twee 3-packs: het betaalde pack voor, het gratis pack erachter, hoger en naar buiten (duidelijk los)."""
    w, w2, h2 = h * PACK_AR, h * .80 * PACK_AR, h * .80
    if side == "l":
        voor_x, achter_x = 540 - w - 8, 24
    else:
        voor_x, achter_x = 548, 1080 - w2 - 24
    achter_top = top - h * .50
    return (f'<img class="sk" src="../bron/pack3_{kleur}.png" style="left:{achter_x:.0f}px;top:{achter_top:.0f}px;height:{h2:.0f}px;z-index:10;opacity:.96">'
            f'<img class="sk" src="../bron/pack3_{kleur}.png" style="left:{voor_x:.0f}px;top:{top:.0f}px;height:{h:.0f}px;z-index:12">'), (achter_x, achter_top, w2)


def ad(fmt):
    H = 1350 if fmt == "feed" else 1920
    r = dict(feed=dict(logo=56, som=128, somsz=250, gr=338, grsz=108, sub=470, subsz=34, pk=742, pkh=362, prijs=1130, k2=92),
             reel=dict(logo=250, som=322, somsz=214, gr=500, grsz=94, sub=612, subsz=32, pk=826, pkh=290, prijs=1136, k2=84))[fmt]
    wit, (lx, lt, lw) = packs('wit', 'l', r['pk'], r['pkh'])
    zw, (rx, rt, rw) = packs('zwart', 'r', r['pk'], r['pkh'])
    tagtop = lt - 34
    body = f"""
<div class="zw"></div>
<div class="licht" style="left:-140px;top:{r['pk']-300}px;width:760px;height:760px"></div>
<div class="logo" style="top:{r['logo']}px;mix-blend-mode:difference;z-index:30"><img src="../bron/logo_lockup_wit.png"></div>
<div class="dif som" style="top:{r['som']}px;font-size:{r['somsz']}px">3<span class="p" style="margin:0 .14em 0 .22em">+</span>3</div>
<div class="dif gr" style="top:{r['gr']}px;font-size:{r['grsz']}px">gratis</div>
<div class="dif sub" style="top:{r['sub']}px;font-size:{r['subsz']}px">Kies je kant. Wij doen er 3 bij.</div>
<div class="wit">{wit}</div>
<div class="zwart">{zw}</div>
<div class="tag op-zw" style="left:{lx + lw/2:.0f}px;top:{tagtop:.0f}px">+3 gratis</div>
<div class="tag op-wit" style="left:{rx + rw/2:.0f}px;top:{tagtop:.0f}px">+3 gratis</div>
<div class="prijs" style="left:72px;top:{r['prijs']}px;color:#fff">
  <div class="k1">6 paar · normaal <s>€89,90</s></div>
  <div class="k2" style="font-size:{r['k2']}px">€44,95</div>
  <div class="k3" style="color:#CCFF00">€7,49 per paar</div></div>
<div class="prijs" style="left:612px;top:{r['prijs'] + 22}px;color:#0A0A0A">
  <div class="eind" style="margin:0">Alleen t/m<br>maandag 30-11</div>
  <div class="pill" style="margin-top:26px">Shop nu<i>{CHEV}</i></div></div>
"""
    html = (f'<!doctype html><html lang="nl"><head><meta charset="utf-8"><style>{CSS}</style></head>'
            f'<body><div class="ad" style="height:{H}px">{body}</div></body></html>')
    p = HERE / f"pd_3plus3_kies-je-kant_{fmt}.html"
    p.write_text(html, encoding="utf-8")
    print(fmt, render(p, PNG / p.with_suffix(".png").name, 1080, H))


if __name__ == "__main__":
    for f in sys.argv[1:] or ["feed", "reel"]:
        ad(f)
