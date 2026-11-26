"""Ronde 5 (tieners, voetbal/rugby, Insta): ChatGPT-scène als foto, Claude zet kop, logo en pill erop.
Gebruik: python build.py [nr[:feed|reel] ...]"""
import pathlib
import sys

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[2] / "AB-ronde3" / "html"))
from common import CHEV, render  # noqa: E402

HERE = pathlib.Path(__file__).resolve().parent
PNG = HERE.parent / "png"
PNG.mkdir(exist_ok=True)
SIZES = {"feed": (1080, 1350), "reel": (1080, 1920)}

ADS = {
    1: dict(naam="tweede_helft", src="HIGRIP_teen_E1_rust_v1.png", donker=True,
            kop="Tweede helft.<br>Droge sokken.",
            sub="Alles wat je bestelt, krijg je twee keer.<br>Eén paar voor de rust. T/m maandag 30-11.",
            feed=dict(pos="50% 0%", logo=56, kt=150, ks=96, st=366),
            reel=dict(pos="50% 0%", logo=250, kt=340, ks=100, st=564)),
    2: dict(naam="pov", src="HIGRIP_teen_E2_pov_v1.png", donker=False,
            kop="POV: je bestelt<br>3 paar en er<br>komen er 6.",
            sub="Geen fout. Alles twee keer, t/m ma 30-11.",
            feed=dict(pos="50% 0%", logo=56, kt=140, ks=80, st=410),
            reel=dict(pos="50% 0%", logo=250, kt=316, ks=76, st=554)),
    3: dict(naam="moeder", src="HIGRIP_teen_E3_moeder_v1.png", donker=True,
            kop="Stuur dit naar<br>je moeder.",
            sub="Zij bestelt een 3-pack van €44,95.<br>Jij krijgt 6 paar. T/m maandag 30-11.",
            feed=dict(pos="50% 0%", logo=56, kt=150, ks=96, st=366),
            reel=dict(pos="50% 0%", logo=250, kt=340, ks=100, st=564)),
    4: dict(naam="je_maat", src="HIGRIP_teen_E4_maat_v1.png", donker=True,
            kop="Eén voor jou.<br>Eén voor je maat.",
            sub="Alles wat je bestelt, krijg je twee keer.<br>Tot en met maandag 30 november.",
            feed=dict(pos="50% 0%", logo=56, kt=150, ks=92, st=360),
            reel=dict(pos="50% 0%", logo=250, kt=340, ks=96, st=556)),
    5: dict(naam="tien_haken", src="HIGRIP_teen_E5_haken_v1.png", donker=True,
            kop="10 haken.<br>10 paar.",
            sub="5-pack van €69,95 wordt 10 paar: €7,00 per paar.<br>Verzending gratis. T/m maandag 30-11.",
            pill=True,
            feed=dict(pos="50% 0%", logo=48, kt=128, ks=84, st=310, pt=900, px=760),
            reel=dict(pos="50% 0%", logo=250, kt=320, ks=84, st=500, pt=840, px=760)),
    6: dict(naam="altijd_schoon", src="HIGRIP_teen_E6_schoon_v1.png", donker=False,
            kop="Altijd één<br>paar schoon.",
            sub="6 paar voor €44,95. Eén in de modder,<br>één in de was, één schoon. T/m maandag 30-11.",
            pill=True,
            feed=dict(pos="50% 0%", logo=56, kt=150, ks=96, st=366, pt=480, px=72),
            reel=dict(pos="50% 0%", logo=250, kt=340, ks=100, st=564, pt=690, px=72)),
}

CSS = """
.bg { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; }
.licht .kop, .licht .sub { color: var(--hi-black); }
.donker .kop, .donker .sub { color: var(--hi-white); }
.sub { font-size: 32px; font-weight: 500; }
.cta { position:absolute; z-index:40; }
"""


def build(nr, fmt):
    ad = ADS[nr]
    p = ad[fmt]
    tone = "donker" if ad["donker"] else "licht"
    logo = "logo_lockup_wit" if ad["donker"] else "logo_lockup_zwart"
    body = [
        f'<img class="bg" src="../gen/{ad["src"]}" style="object-position:{p["pos"]}">',
        f'<img class="logo" src="../../AB-ronde3/bron/{logo}.png" style="top:{p["logo"]}px">',
        f'<div class="kop" style="top:{p["kt"]}px;font-size:{p["ks"]}px">{ad["kop"]}</div>',
        f'<div class="sub" style="top:{p["st"]}px">{ad["sub"]}</div>',
    ]
    if ad.get("pill"):
        inv = "" if ad["donker"] else " inv"
        body.append(f'<div class="cta" style="top:{p["pt"]}px;left:{p["px"]}px"><span class="pill{inv}">Shop nu<i>{CHEV}</i></span></div>')
    return (f'<!doctype html><html lang="nl"><head><meta charset="utf-8"><link rel="stylesheet" href="base.css">'
            f'<style>{CSS}</style></head><body><div class="ad {fmt} {tone}">{"".join(body)}</div></body></html>')


if __name__ == "__main__":
    args = sys.argv[1:] or [str(n) for n in ADS]
    for a in args:
        nr, _, only = a.partition(":")
        nr = int(nr)
        for fmt, (w, h) in SIZES.items():
            if only and only != fmt:
                continue
            stem = f"r5_{nr}_{ADS[nr]['naam']}_{fmt}"
            html = HERE / f"{stem}.html"
            html.write_text(build(nr, fmt), encoding="utf-8")
            print(stem, render(html, PNG / f"{stem}.png", w, h))
