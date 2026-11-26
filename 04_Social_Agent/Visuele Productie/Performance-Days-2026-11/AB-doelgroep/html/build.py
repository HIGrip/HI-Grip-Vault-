"""Ronde 6/7: vijf favorieten gerepareerd (eigen bron per formaat) + drie doelgroep-ads.
Ronde 7: D1, E2, E3 en F2 opnieuw (bronnen in ../gen/r7, sokken en ruimte gecontroleerd).
Ronde 8 (kopie, r7 blijft staan): E3 en F2 op echte foto's van de shoot; AI alleen voor de omgeving,
de echte sokpixels zijn er met ../gen/r8/terugplakken.py weer overheen gezet.
Vast raster: logo, kop, sub en pill staan in één stapel met vaste tussenruimtes, links op 72px
(E3 uitgelijnd op de deur, daarom verder naar rechts).
Reel: stapel begint op 340 en blijft boven ~720, onderste 580px leeg voor de Insta-interface.
Gebruik: python build.py [code[:feed|reel] ...]   bv. python build.py D1 F2:reel"""
import pathlib
import sys

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[2] / "AB-ronde3" / "html"))
from common import CHEV, render  # noqa: E402

HERE = pathlib.Path(__file__).resolve().parent
PNG = HERE.parent / "png"
PNG.mkdir(exist_ok=True)
SIZES = {"feed": (1080, 1350), "reel": (1080, 1920)}
RASTER = {"feed": dict(logo=56, stapel=150), "reel": dict(logo=250, stapel=340)}

ADS = {
    "D1": dict(naam="wasmachine", map="AB-chatgpt", src="HG_fix_D1_wasmachine", donker=False,
               bron=dict(feed="../../AB-doelgroep/gen/r7/HG_r7_D1_feedext.png", reel="../../AB-doelgroep/gen/r7/HG_r7_D1_reel916.png"),
               kop="De wasmachine<br>neemt er één.",
               sub="Wij geven hem terug. Alles wat je bestelt,<br>krijg je twee keer. Vr 27 t/m ma 30 november.",
               ks=dict(feed=92, reel=96)),
    "D2": dict(naam="pakbon", map="AB-chatgpt", src="HG_fix_D2_pakbon", donker=False,
               kop="Er zit een fout<br>in je bestelling.",
               sub="Geen fout. Expres. T/m maandag 30 november<br>krijg je alles wat je bestelt twee keer.",
               sub_reel="Geen fout. Expres. Alles<br>twee keer, t/m ma 30-11.",
               ks=dict(feed=92, reel=88), zoom=dict(reel=1.12)),
    "D5": dict(naam="bon", map="AB-chatgpt", src="HG_fix_D5_bon", donker=True, pill=True,
               kop="Lees je bon<br>maar na.",
               sub="6 paar voor €44,95, verzending gratis.<br>Vanaf dinsdag 1 december weer 3 paar.",
               ks=dict(feed=100, reel=100)),
    "E2": dict(naam="pov", map="AB-teens", src="HG_fix_E2_pov", donker=True,
               bron=dict(feed="../../AB-doelgroep/gen/r7/HG_r7_E2_reel916.png", reel="../../AB-doelgroep/gen/r7/HG_r7_E2_reel916.png"),
               pos=dict(feed="50% 9%"),
               kop="POV: je bestelt<br>3 paar en er<br>komen er 6.",
               sub="Geen fout. Alles twee keer, t/m ma 30-11.",
               sub_reel="Geen fout. Alles twee keer,<br>t/m ma 30-11.",
               ks=dict(feed=92, reel=76)),
    "E3": dict(naam="moeder", map="AB-teens", src="HG_fix_E3_moeder", donker=True,
               bron=dict(feed="../../AB-doelgroep/gen/r7/HG_r7_E3_feed45.png", reel="../../AB-doelgroep/gen/r7/HG_r7_E3_reel916.png"),
               kop="Stuur dit naar<br>je moeder.",
               sub="Zij bestelt een 3-pack van €44,95.<br>Jij krijgt 6 paar. T/m maandag 30-11.",
               sub_reel="Zij bestelt 3, jij krijgt 6. T/m ma 30-11.", subsize=dict(reel=30),
               ks=dict(feed=92, reel=76), x=dict(feed=136, reel=180)),
    "F1": dict(naam="scrum", map="AB-doelgroep", src="HG_F1_scrum", donker=True, pill=True,
               kop="Vast in de scrum.<br>Dubbel in de tas.",
               sub="Alles wat je bestelt, krijg je twee keer.<br>Vr 27 t/m ma 30 november.",
               ks=dict(feed=92, reel=92)),
    "F2": dict(naam="padel", map="AB-doelgroep", src="HG_F2_padel", donker=True, pill=True,
               bron=dict(feed="../../AB-doelgroep/gen/r7/HG_r7_F2_feedext.png", reel="../../AB-doelgroep/gen/r7/HG_r7_F2_reel916.png"),
               kop="Halve finale 16:00.<br>Droge sokken 15:58.",
               sub="Eén paar voor de poule, één voor de finale.<br>Alles twee keer, t/m maandag 30-11.",
               ks=dict(feed=84, reel=84)),
    "F3": dict(naam="basis", map="AB-doelgroep", src="HG_F3_basis", donker=True, pill=True,
               kop="Basisplaats?<br>Begin bij de basis.",
               sub="Wij leggen de basis, jij presteert.<br>3-pack wordt 6 paar, t/m maandag 30-11.",
               ks=dict(feed=92, reel=92)),
    "E3r8": dict(naam="moeder", map="AB-teens", src="", donker=True, ronde="r8",
               bron=dict(feed="../gen/r8/out/HG_r8_E3_kleedkamer.png", reel="../gen/r8/out/HG_r8_E3_kleedkamer.png"),
               pos=dict(feed="50% 35%"),
               kop="Stuur dit naar<br>je moeder.",
               sub="Zij bestelt een 3-pack van €44,95.<br>Jij krijgt 6 paar. T/m maandag 30-11.",
               sub_reel="Zij bestelt 3, jij krijgt 6. T/m ma 30-11.", subsize=dict(reel=30),
               ks=dict(feed=76, reel=76), x=dict(feed=250, reel=250)),
    "F2r8": dict(naam="padel", map="AB-doelgroep", src="", donker=True, pill=True, ronde="r8",
               bron=dict(feed="../gen/r8/out/HG_r8_F2_padel_rechts.png", reel="../gen/r8/out/HG_r8_F2_padel_rechts.png"),
               pos=dict(feed="50% 10%"),
               kop="Halve finale 16:00.<br>Droge sokken 15:58.",
               sub="Eén paar voor de poule, één voor de finale.<br>Alles twee keer, t/m maandag 30-11.",
               ks=dict(feed=84, reel=84)),
    # Ronde 9 (kopie): oorspronkelijke concepten terug, echte shootfoto als basis, echte sok teruggeplakt (gen/r9).
    "D1r9": dict(naam="wasmachine", map="AB-doelgroep", src="", donker=False, ronde="r9",
               bron=dict(feed="../gen/r9/out/HG_r9_D1_zoom3.png", reel="../gen/r9/out/HG_r9_D1_zoom3.png"),
               pos=dict(feed="50% 85%"),
               kop="De wasmachine<br>neemt er één.",
               sub="Wij geven hem terug.<br>Alles wat je bestelt,<br>krijg je twee keer.<br>Vr 27 t/m ma 30 november.",
               sub_feed="Wij geven hem terug.<br>Alles wat je bestelt,<br>krijg je twee keer.<br>Vr 27 t/m ma 30-11.",
               ks=dict(feed=72, reel=84)),
    "E2r9": dict(naam="pov", map="AB-doelgroep", src="", donker=False, ronde="r9",
               bron=dict(feed="../gen/r9/out/HG_r9_E2.png", reel="../gen/r9/out/HG_r9_E2.png"),
               pos=dict(feed="50% 40%"),
               kop="POV: je bestelt<br>3 paar en er<br>komen er 6.",
               sub="Geen fout. Alles twee keer, t/m ma 30-11.",
               ks=dict(feed=84, reel=76)),
    "E3r9": dict(naam="moeder", map="AB-doelgroep", src="", donker=True, ronde="r9",
               bron=dict(feed="../gen/r9/out/HG_r9_E3.png", reel="../gen/r9/out/HG_r9_E3.png"),
               pos=dict(feed="50% 55%"),
               kop="Stuur dit naar<br>je moeder.",
               sub="Zij bestelt een 3-pack van €44,95.<br>Jij krijgt 6 paar. T/m maandag 30-11.",
               sub_reel="Zij bestelt 3, jij krijgt 6.<br>T/m ma 30-11.",
               ks=dict(feed=64, reel=64)),
    "F2r9": dict(naam="padel", map="AB-doelgroep", src="", donker=True, pill=True, ronde="r9",
               bron=dict(feed="../gen/r9/out/HG_r9_F2_v3.png", reel="../gen/r9/out/HG_r9_F2_v3.png"),
               pos=dict(feed="50% 100%"),
               kop="Halve finale<br>16:00. Droge<br>sokken 15:58.",
               sub="Eén paar voor de poule,<br>één voor de finale.<br>Alles twee keer, t/m ma 30-11.",
               ks=dict(feed=80, reel=64), subsize=dict(reel=28)),
    # Ronde 10 (kopie): E3 voordeur, sokken opnieuw door ChatGPT met de echte packshots + gripclose-up als referentie.
    "E3r10": dict(naam="moeder", map="AB-doelgroep", src="", donker=True, ronde="r10",
               bron=dict(feed="../gen/r10/out/HG_r10_E3.png", reel="../gen/r10/out/HG_r10_E3.png"),
               pos=dict(feed="50% 0%"),
               kop="Stuur dit naar<br>je moeder.",
               sub="Zij bestelt een 3-pack van €44,95.<br>Jij krijgt 6 paar. T/m maandag 30-11.",
               sub_reel="Zij bestelt 3, jij krijgt 6. T/m ma 30-11.", subsize=dict(reel=30),
               ks=dict(feed=92, reel=76), x=dict(feed=136, reel=180)),
}

CSS = """
.bg { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:50% 50%; }
.stapel { position:absolute; left:72px; right:72px; z-index:40; display:flex; flex-direction:column; align-items:flex-start; }
.stapel .kop, .stapel .sub { position:static; }
.stapel .sub { margin-top:28px; font-size:32px; font-weight:500; }
.stapel .cta { margin-top:40px; }
.licht .kop, .licht .sub { color: var(--hi-black); }
.donker .kop, .donker .sub { color: var(--hi-white); }
"""


def build(code, fmt):
    ad = ADS[code]
    r = RASTER[fmt]
    tone = "donker" if ad["donker"] else "licht"
    logo = "logo_lockup_wit" if ad["donker"] else "logo_lockup_zwart"
    suffix = "feed45" if fmt == "feed" else "reel916"
    stapel = [f'<div class="kop" style="font-size:{ad["ks"][fmt]}px">{ad["kop"]}</div>',
              f'<div class="sub" style="font-size:{ad.get("subsize", {}).get(fmt, 32)}px">{ad.get("sub_" + fmt, ad["sub"])}</div>']
    if ad.get("pill"):
        inv = "" if ad["donker"] else " inv"
        stapel.append(f'<div class="cta"><span class="pill{inv}">Shop nu<i>{CHEV}</i></span></div>')
    body = [
        f'<img class="bg" src="{ad.get("bron", {}).get(fmt) or f"../../{ad['map']}/gen/{ad['src']}_{suffix}.png"}"'
        f' style="object-position:{ad.get("pos", {}).get(fmt, "50% 50%")};transform:scale({ad.get("zoom", {}).get(fmt, 1)});transform-origin:50% 0">',
        f'<img class="logo" src="../../AB-ronde3/bron/{logo}.png" style="top:{r["logo"]}px">',
        f'<div class="stapel" style="top:{r["stapel"]}px;left:{ad.get("x", {}).get(fmt, 72)}px">{"".join(stapel)}</div>',
    ]
    return (f'<!doctype html><html lang="nl"><head><meta charset="utf-8"><link rel="stylesheet" href="base.css">'
            f'<style>{CSS}</style></head><body><div class="ad {fmt} {tone}">{"".join(body)}</div></body></html>')


if __name__ == "__main__":
    args = sys.argv[1:] or list(ADS)
    for a in args:
        code, _, only = a.partition(":")
        for fmt, (w, h) in SIZES.items():
            if only and only != fmt:
                continue
            stem = f"{ADS[code].get('ronde', 'r6')}_{code}_{ADS[code]['naam']}_{fmt}"
            html = HERE / f"{stem}.html"
            html.write_text(build(code, fmt), encoding="utf-8")
            print(stem, render(html, PNG / f"{stem}.png", w, h))
