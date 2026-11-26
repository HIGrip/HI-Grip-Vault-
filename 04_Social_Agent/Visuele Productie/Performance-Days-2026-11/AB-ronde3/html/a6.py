"""R6 3 = 6: gefreesde som in een aluminium paneel, op een plank staan echte packs onder elk getal."""
from common import ASPECT, CHEV, DS, BS, pack, page, tex

CSS = """
.raam { position: absolute; background: rgba(255,255,255,.04); filter: blur(8px); z-index: 1; }
.som { position: absolute; left: 0; width: 1080px; z-index: 5; display: flex; justify-content: space-between; align-items: center; padding: 0 70px;
       font-weight: 900; font-style: italic; line-height: .8; letter-spacing: -.04em; }
.gat { color: #E4E3E0; text-shadow: -1px -2px 1px rgba(255,255,255,.55), 3px 4px 2px rgba(0,0,0,.75), 12px 18px 16px rgba(0,0,0,.6); }
.gelijk { color: var(--hi-yellow); text-shadow: -2px -3px 1px rgba(0,0,0,.7), 3px 4px 1px rgba(255,255,255,.2); }
.plank { position: absolute; left: -20px; width: 1120px; z-index: 6; }
.plank .top { position: absolute; left: 0; top: 0; width: 100%; background: #EAE8E5; clip-path: polygon(3% 0,97% 0,100% 100%,0 100%); }
.plank .voor { position: absolute; left: 0; width: 100%; background: #CFCBC5; box-shadow: 0 18px 30px rgba(0,0,0,.5); }
.kop2 { position: absolute; left: 72px; color: var(--hi-white); font-weight: 900; font-style: italic; text-transform: uppercase; line-height: 1; letter-spacing: -.035em; word-spacing: .2em; z-index: 40; }
.sub { color: #d6d6d6; }
"""


def build(fmt):
    reel = fmt == "reel"
    H = 1920 if reel else 1350
    fs = 300 if reel else 340
    nt = 315 if reel else 175
    pt = 880 if reel else 800
    ph = 330 if reel else 340
    body = [tex("tex_alu.png", H)]
    body.append(f'<div class="raam" style="left:90px;top:-60px;width:150px;height:{H + 120}px;transform:skewX(-14deg)"></div>')
    body.append(f'<div class="raam" style="left:330px;top:-60px;width:110px;height:{H + 120}px;transform:skewX(-14deg)"></div>')
    body.append('<img class="logo" src="../bron/logo_lockup_wit.png" style="top:%dpx">' % (250 if reel else 60))
    body.append(f'<div class="som" style="top:{nt}px;height:{fs * .8:.0f}px;font-size:{fs}px;padding:0 90px">'
                f'<span class="gat">3</span><span class="gelijk" style="font-size:{fs * .62:.0f}px">=</span><span class="gat">6</span></div>')

    pw = ph * ASPECT["pack3_zwart"]
    body.append(f'<div class="plank" style="top:{pt}px"><div class="voor" style="top:34px;height:46px"></div>'
                f'<div class="top" style="height:40px"></div></div>')
    base = pt + 22
    body.append(pack(60, base - ph + 12, ph, rot=-1.5, z=8))
    body.append(pack(700, base - ph * .93 - 6, ph * .93, rot=1.5, z=8, extra="filter:brightness(.78) drop-shadow(2px 3px 2px rgba(0,0,0,.5))"))
    body.append(pack(520, base - ph + 16, ph, rot=-1, z=9))

    kt = pt + 110
    body.append(f'<div class="kop2" style="top:{kt}px;font-size:70px">Klopt niet.<br>Tot maandag wel.</div>')
    body.append(f'<div class="sub" style="position:absolute;left:72px;top:{kt + 148}px;font-size:28px;font-weight:500;z-index:40">'
                f'3-pack 2.0 · €44,95 · gratis verzending.<br>Vrijdag 27 t/m maandag 30 november.</div>')
    body.append(f'<div class="abs" style="left:72px;top:{kt + 250}px;z-index:40"><span class="pill">Shop nu<i>{CHEV}</i></span></div>')
    return page(chr(10).join(body), fmt, CSS)
