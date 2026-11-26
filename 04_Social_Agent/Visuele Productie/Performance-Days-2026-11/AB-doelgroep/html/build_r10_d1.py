"""Ronde 10: D1 wasmachine voor ouders (Facebook) met de sale-stapel.
De foto krijgt boven (en in de reel onder) extra muur/vloer door een uitgerekte, vervaagde rand,
zodat de tekst boven de wasmachine past. Bron: ../gen/r7/HG_r7_D1_feedext.png.
Feiten (Feiten & Actuele Staat): 3500+ sporters, 4,6 Trustpilot, gratis verzending op packs.
Gebruik: python build_r10_d1.py"""
import pathlib
import sys

from PIL import Image, ImageFilter

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[2] / "AB-ronde3" / "html"))
from common import CHEV, render  # noqa: E402

HERE = pathlib.Path(__file__).resolve().parent
PNG = HERE.parent / "png"
GEN = HERE.parent / "gen" / "r10"
GEN.mkdir(exist_ok=True)
SRC = HERE.parent / "gen" / "r7" / "HG_r7_D1_feedext.png"

# boven/onder: extra pixels muur en vloer (op 1080 breed)
OPZET = {
    "feed": dict(w=1080, h=1350, boven=110, onder=0, logo=48, stapel=128, kop=66, haak=34, sub=None),
    "reel": dict(w=1080, h=1920, boven=470, onder=100, logo=230, stapel=318, kop=80, haak=38,
                 sub="Met 6 paar ligt er altijd<br>een schoon paar klaar."),
}

STER = ('<svg viewBox="0 0 24 24"><path d="M12 2.5l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.8-6.2 3.8 1.6-7L2 9.7l7.1-.6z"'
        ' fill="#fff"/></svg>')

CSS = """
.bg { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:50% 0; }
.stapel { position:absolute; left:72px; right:72px; z-index:40; display:flex; flex-direction:column; align-items:flex-start; color:var(--hi-black); }
.label { font:700 22px/1 Poppins; letter-spacing:5px; text-transform:uppercase; }
.haak { margin-top:20px; font-weight:600; font-style:italic; line-height:1.15; }
.stapel .kop { position:static; margin-top:14px; color:var(--hi-black); line-height:.98; }
.deal { margin-top:18px; font:900 italic 60px/1 Poppins; text-transform:uppercase; letter-spacing:-.02em; }
.sub2 { margin-top:16px; font:500 30px/1.3 Poppins; }
.tijd { margin-top:12px; font:600 30px/1.3 Poppins; }
.stapel .cta { margin-top:28px; }
.trust { margin-top:24px; display:flex; align-items:center; gap:16px; font:600 24px/1 Poppins; }
.trust .tp { display:inline-flex; align-items:center; gap:10px; }
.trust .tp b { width:32px; height:32px; background:#00b67a; display:grid; place-items:center; }
.trust .tp svg { width:22px; height:22px; }
.trust .dot { width:6px; height:6px; border-radius:50%; background:var(--hi-black); opacity:.5; }
"""


def rand(strook, hoogte):
    """Rek een smalle strook uit tot `hoogte` en vervaag hem: egale muur of vloer zonder naad."""
    return strook.resize((strook.width, hoogte), Image.BICUBIC).filter(ImageFilter.GaussianBlur(18))


def bron(fmt):
    o = OPZET[fmt]
    im = Image.open(SRC).convert("RGB")
    im = im.resize((1080, round(im.height * 1080 / im.width)), Image.LANCZOS)
    h = im.height + o["boven"] + o["onder"]
    doek = Image.new("RGB", (1080, h))
    if o["boven"]:
        doek.paste(rand(im.crop((0, 0, 1080, 40)), o["boven"] + 60), (0, 0))
    if o["onder"]:
        doek.paste(rand(im.crop((0, im.height - 40, 1080, im.height)), o["onder"] + 60), (0, h - o["onder"] - 60))
    # zachte overgang: masker over de bovenste/onderste 60 px van de foto
    masker = Image.new("L", im.size, 255)
    for y in range(60):
        a = round(255 * y / 60)
        if o["boven"]:
            masker.paste(a, (0, y, 1080, y + 1))
        if o["onder"]:
            masker.paste(a, (0, im.height - 1 - y, 1080, im.height - y))
    doek.paste(im, (0, o["boven"]), masker)
    if doek.height > o["h"]:
        # verkleinen tot de hoogte past en de zijkanten aanvullen met uitgerekte, vervaagde randen
        klein = doek.resize((round(1080 * o["h"] / doek.height), o["h"]), Image.LANCZOS)
        zij = (1080 - klein.width + 1) // 2
        doek = Image.new("RGB", (1080, o["h"]))
        links = klein.crop((0, 0, 12, o["h"])).resize((zij + 40, o["h"])).filter(ImageFilter.GaussianBlur(14))
        rechts = klein.crop((klein.width - 12, 0, klein.width, o["h"])).resize((zij + 40, o["h"])).filter(ImageFilter.GaussianBlur(14))
        doek.paste(links, (0, 0)); doek.paste(rechts, (1080 - zij - 40, 0))
        m = Image.new("L", klein.size, 255)
        for x in range(30):
            a = round(255 * x / 30); m.paste(a, (x, 0, x + 1, o["h"])); m.paste(a, (klein.width - 1 - x, 0, klein.width - x, o["h"]))
        doek.paste(klein, (zij, 0), m)
    pad = GEN / f"HG_r10_D1_{fmt}.png"
    doek.save(pad)
    return f"../gen/r10/{pad.name}"


def build(fmt):
    o = OPZET[fmt]
    sub = f'<div class="sub2">{o["sub"]}</div>' if o["sub"] else ""
    stapel = (
        '<div class="label">HÏ Performance Days</div>'
        f'<div class="haak" style="font-size:{o["haak"]}px">Wedstrijd over een uur?</div>'
        f'<div class="kop" style="font-size:{o["kop"]}px">'
        + ("Nooit meer sokken<br>uit de was vissen.")
        + '</div><div class="deal">3 + 3 gratis</div>'
        f'{sub}<div class="tijd">6 paar voor €44,95. Alleen t/m ma 30-11.</div>'
        f'<div class="cta"><span class="pill inv">Shop nu<i>{CHEV}</i></span></div>'
        f'<div class="trust"><span class="tp"><b>{STER}</b>4,6 Trustpilot</span><i class="dot"></i>'
        '<span>3500+ sporters</span><i class="dot"></i><span>Gratis verzending</span></div>'
    )
    body = (f'<img class="bg" src="{bron(fmt)}">'
            f'<img class="logo" src="../../AB-ronde3/bron/logo_lockup_zwart.png" style="top:{o["logo"]}px">'
            f'<div class="stapel" style="top:{o["stapel"]}px">{stapel}</div>')
    return (f'<!doctype html><html lang="nl"><head><meta charset="utf-8"><link rel="stylesheet" href="base.css">'
            f'<style>{CSS}</style></head><body><div class="ad {fmt} licht">{body}</div></body></html>')


if __name__ == "__main__":
    for fmt, o in OPZET.items():
        stem = f"r10_D1_wasmachine_ouders_{fmt}"
        html = HERE / f"{stem}.html"
        html.write_text(build(fmt), encoding="utf-8")
        print(stem, render(html, PNG / f"{stem}.png", o["w"], o["h"]))
