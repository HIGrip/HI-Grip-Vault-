"""Ronde 10: F3 basisplaats (tieners, Insta) met de sale-stapel van Timo (26-11).
Volgorde: label, haak, campagnezin, deal (volt), deadline, pill; vertrouwensregel onderaan boven de onveilige zone.
Feiten (Feiten & Actuele Staat): 3500+ sporters, 4,6 Trustpilot, gratis verzending op packs.
Gebruik: python build_r10.py"""
import pathlib
import sys

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[2] / "AB-ronde3" / "html"))
from common import CHEV, render  # noqa: E402

HERE = pathlib.Path(__file__).resolve().parent
PNG = HERE.parent / "png"

# per formaat: logo-top, stapel-top, beeld omlaag schuiven (sokmanchet vrij), vertrouwensregel-top
OPZET = {
    "feed": dict(w=1080, h=1350, logo=48, stapel=136, schuif=210, trust=1262, kop=96, haak=40),
    "reel": dict(w=1080, h=1920, logo=230, stapel=318, schuif=260, trust=None, kop=96, haak=40),
}

STER = ('<svg viewBox="0 0 24 24"><path d="M12 2.5l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.8-6.2 3.8 1.6-7L2 9.7l7.1-.6z"'
        ' fill="#fff"/></svg>')

CSS = """
.ad { background:#000; }
.bg { position:absolute; left:0; width:100%; object-fit:cover; -webkit-mask-image:linear-gradient(#0000,#000 160px); }
.stapel { position:absolute; left:72px; right:72px; z-index:40; display:flex; flex-direction:column; align-items:flex-start; color:var(--hi-white); }
.label { font:700 24px/1 Poppins; letter-spacing:5px; text-transform:uppercase; }
.haak { margin-top:22px; font-weight:600; font-style:italic; line-height:1.15; }
.stapel .kop { position:static; margin-top:18px; color:var(--hi-white); }
.deal { margin-top:20px; font:900 italic 64px/1 Poppins; text-transform:uppercase; letter-spacing:-.02em; color:var(--hi-yellow); }
.tijd { margin-top:18px; font:500 32px/1.3 Poppins; }
.stapel .cta { margin-top:34px; }
.trust.los { position:absolute; left:0; right:0; justify-content:center; }
.trust.in { margin-top:30px; }
.trust { z-index:40; display:flex; align-items:center; gap:18px;
         font:600 26px/1 Poppins; color:var(--hi-white); }
.trust .tp { display:inline-flex; align-items:center; gap:10px; }
.trust .tp b { width:34px; height:34px; background:#00b67a; display:grid; place-items:center; }
.trust .tp svg { width:24px; height:24px; }
.trust .dot { width:6px; height:6px; border-radius:50%; background:var(--hi-white); opacity:.6; }
"""


def build(fmt):
    o = OPZET[fmt]
    src = f"../gen/HG_F3_basis_{'feed45' if fmt == 'feed' else 'reel916'}.png"
    stapel = (
        '<div class="label">HÏ Performance Days</div>'
        f'<div class="haak" style="font-size:{o["haak"]}px">Basisplaats?<br>Begin bij de basis.</div>'
        f'<div class="kop" style="font-size:{o["kop"]}px">Verdubbel je<br>bestelling.</div>'
        '<div class="deal">3 + 3 gratis</div>'
        '<div class="tijd">Alleen t/m ma 30-11.</div>'
        f'<div class="cta"><span class="pill">Shop nu<i>{CHEV}</i></span></div>'
    )
    los = o["trust"] is not None
    trust = (f'<div class="trust {"los" if los else "in"}" style="top:{o["trust"]}px">' if los else '<div class="trust in">')
    trust += (
             f'<span class="tp"><b>{STER}</b>4,6 Trustpilot</span><i class="dot"></i>'
             '<span>3500+ sporters</span><i class="dot"></i><span>Gratis verzending</span></div>')
    if not los:
        stapel, trust = stapel + trust, ""
    body = (f'<img class="bg" src="{src}" style="top:{o["schuif"]}px;height:{o["h"]}px">'
            f'<img class="logo" src="../../AB-ronde3/bron/logo_lockup_wit.png" style="top:{o["logo"]}px">'
            f'<div class="stapel" style="top:{o["stapel"]}px">{stapel}</div>{trust}')
    return (f'<!doctype html><html lang="nl"><head><meta charset="utf-8"><link rel="stylesheet" href="base.css">'
            f'<style>{CSS}</style></head><body><div class="ad {fmt}">{body}</div></body></html>')


if __name__ == "__main__":
    for fmt, o in OPZET.items():
        stem = f"r10_F3_basis_sale_{fmt}"
        html = HERE / f"{stem}.html"
        html.write_text(build(fmt), encoding="utf-8")
        print(stem, render(html, PNG / f"{stem}.png", o["w"], o["h"]))
