"""Ronde 4: ChatGPT-scène als foto, Claude zet kop, logo-lockup en pill erop.
Gebruik: python build.py [nr[:feed|reel] ...]"""
import pathlib
import sys

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[2] / "AB-ronde3" / "html"))
from common import CHEV, render  # noqa: E402

HERE = pathlib.Path(__file__).resolve().parent
PNG = HERE.parent / "png"
PNG.mkdir(exist_ok=True)
SIZES = {"feed": (1080, 1350), "reel": (1080, 1920)}
PILL = f'<span class="pill{{inv}}">Shop nu<i>{CHEV}</i></span>'

# Per ad: bron, licht/donker, en per formaat de uitsnede (object-position) en posities.
ADS = {
    1: dict(naam="wasmachine", src="HIGRIP_cgpt_r4_1_wasmachine_v3.png", donker=False,
            kop="De wasmachine<br>neemt er één.",
            sub="Wij geven hem terug. Alles wat je bestelt,<br>krijg je twee keer. Vr 27 t/m ma 30 november.",
            feed=dict(pos="50% 84%", logo=34, kt=112, ks=76, st=280),
            reel=dict(pos="50% 0%", logo=250, kt=340, ks=88, st=540)),
    2: dict(naam="pakbon", src="HIGRIP_cgpt_r4_2_pakbon_v5.png", donker=False, x=150,
            kop="Er zit een fout<br>in je bestelling.",
            sub="Geen fout. Expres. T/m maandag 30 november<br>krijg je alles wat je bestelt twee keer.",
            feed=dict(pos="50% 70%", logo=40, kt=128, ks=80, st=308),
            reel=dict(pos="50% 0%", logo=250, kt=340, ks=88, st=540),
            varianten=[("_kopB", dict(kop="Besteld: 3.<br>Geleverd: 6."))]),
    3: dict(naam="zes_paar", src="HIGRIP_cgpt_r4_3_zesplekken_v1.png", donker=False,
            kop="Waar laat je<br>zes paar?",
            sub="Bestel het 3-pack en krijg 6 paar voor €44,95.<br>Tot en met maandag 30 november.",
            feed=dict(pos="50% 0%", logo=56, kt=170, ks=104, st=400),
            reel=dict(pos="50% 0%", logo=250, kt=350, ks=110, st=590)),
    4: dict(naam="een_houd_je", src="HIGRIP_cgpt_r4_4_cadeau_v1.png", donker=False,
            kop="Eén houd je.<br>Eén geef je.",
            sub="Alles wat je bestelt, krijg je twee keer.<br>Eén voor jou, één voor wie ook grip nodig heeft.",
            feed=dict(pos="50% 0%", logo=56, kt=170, ks=104, st=400),
            reel=dict(pos="50% 0%", logo=250, kt=350, ks=110, st=590)),
    5: dict(naam="bon", src="HIGRIP_cgpt_r4_5_bon_v3.png", donker=True,
            kop="Lees je bon<br>maar na.",
            sub="6 paar voor €44,95, verzending gratis.<br>Vanaf dinsdag 1 december weer 3 paar.",
            pill=True,
            feed=dict(pos="50% 0%", logo=56, kt=150, ks=96, st=366, pt=1206),
            reel=dict(pos="15% 0%", logo=250, kt=330, ks=96, st=540, pt=1250)),
    6: dict(naam="drie_is_zes", src="HIGRIP_cgpt_r4_6_drieiszes_v1.png", donker=True,
            kop='3 = <span class="vol">6</span>',
            sub="Klopt niet. Tot maandag wel.<br>Bestel een 3-pack van €44,95 en krijg er 6.",
            pill=True,
            feed=dict(pos="50% 0%", logo=56, kt=130, ks=280, st=440, pt=560),
            reel=dict(pos="50% 0%", logo=250, kt=330, ks=300, st=660, pt=790)),
}

CSS = """
.bg { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; }
.kop { font-style: normal; }
.licht .kop, .licht .sub { color: var(--hi-black); }
.donker .kop, .donker .sub { color: var(--hi-white); }
.sub { font-size: 32px; font-weight: 500; }
.cta { position:absolute; left:72px; z-index:40; }
"""


def build(nr, fmt, **override):
    ad = {**ADS[nr], **override}
    p = ad[fmt]
    tone = "donker" if ad["donker"] else "licht"
    logo = "logo_lockup_wit" if ad["donker"] else "logo_lockup_zwart"
    body = [
        f'<img class="bg" src="../gen/{ad["src"]}" style="object-position:{p["pos"]}">',
        f'<img class="logo" src="../../AB-ronde3/bron/{logo}.png" style="top:{p["logo"]}px">',
        f'<div class="kop" style="top:{p["kt"]}px;left:{ad.get("x",72)}px;font-size:{p["ks"]}px">{ad["kop"]}</div>',
        f'<div class="sub" style="top:{p["st"]}px;left:{ad.get("x",72)}px">{ad["sub"]}</div>',
    ]
    if ad.get("pill"):
        body.append(f'<div class="cta" style="top:{p["pt"]}px">{PILL.format(inv="")}</div>')
    korrel = '<div class="korrel"></div>'
    return (f'<!doctype html><html lang="nl"><head><meta charset="utf-8"><link rel="stylesheet" href="base.css">'
            f'<style>{CSS}</style></head><body><div class="ad {fmt} {tone}">{"".join(body)}</div></body></html>')


if __name__ == "__main__":
    args = sys.argv[1:] or [str(n) for n in ADS]
    for a in args:
        nr, _, only = a.partition(":")
        nr = int(nr)
        ad = ADS[nr]
        for fmt, (w, h) in SIZES.items():
            if only and only != fmt:
                continue
            for suffix, kw in [("", {})] + ad.get("varianten", []):
                if suffix and fmt != "feed":
                    continue
                stem = f"r4_{nr}_{ad['naam']}_{fmt}{suffix}"
                html = HERE / f"{stem}.html"
                html.write_text(build(nr, fmt, **kw), encoding="utf-8")
                print(stem, render(html, PNG / f"{stem}.png", w, h))
