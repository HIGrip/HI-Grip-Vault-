"""R3 Waar laat je zes paar?: vrije flatlay op linnen en eikenhout, elk paar heeft een plek met een plakbandje."""
from common import ASPECT, page, mat

CSS = """
.kop { color: var(--hi-black); }
.sub { color: #2a2a2a; }
.laag { position: absolute; left: 0; top: 0; width: 1080px; height: 100%; filter: drop-shadow(2px 3px 2px rgba(0,0,0,.5)) drop-shadow(22px 34px 24px rgba(0,0,0,.28)); z-index: 20; }
.paar { position: absolute; }
.paar img { position: absolute; }
.tape { position: absolute; background: rgba(233,224,198,.93); color: var(--hi-black); font-weight: 800; text-align: center; letter-spacing: -.01em;
        display: grid; place-items: center; box-shadow: 1px 2px 2px rgba(0,0,0,.28);
        clip-path: polygon(0 0,100% 0,99% 20%,100% 45%,99% 70%,100% 100%,0 100%,1% 75%,0 50%,1% 25%); }
.doek { position: absolute; left: -120px; width: 1320px; background: #D9D0C2; box-shadow: 0 -2px 3px rgba(0,0,0,.35), 0 -18px 34px rgba(0,0,0,.35); z-index: 3; }
.plooi { position: absolute; z-index: 4; filter: blur(14px); }
"""

# (cx, cy, rot, hoogte, label, groot)
PAIRS = [
    (205, 0, -17, 420, "Sporttas", True, 0),
    (560, 30, 7, 440, "Was", True, 0),
    (900, -10, 21, 425, "Ilse", True, 0),
    (180, 25, 14, 390, "Auto", False, 1),
    (540, 55, -9, 405, "Reserve", False, 1),
    (900, 0, -20, 395, "December", False, 1),
]


def pair(cx, cy, rot, h, label, big, tape_rot):
    w = h * ASPECT["sok_zwart_vrij"]
    off = w * .62
    W = w + off
    tw, th, fs = (270, 74, 50) if big else (232, 56, 33)
    tl = (W - tw) / 2 + 12
    tt = h * .26
    return (f'<div class="paar" style="left:{cx - W / 2:.0f}px;top:{cy - h / 2:.0f}px;width:{W:.0f}px;height:{h:.0f}px;transform:rotate({rot}deg)">'
            f'<img src="../bron/sok_zwart_vrij.png" style="left:0;top:{h * .05:.0f}px;height:{h * .95:.0f}px;filter:brightness(.88)">'
            f'<img src="../bron/sok_zwart_vrij.png" style="left:{off:.0f}px;top:0;height:{h:.0f}px">'
            f'<div class="tape" style="left:{tl:.0f}px;top:{tt:.0f}px;width:{tw}px;height:{th}px;font-size:{fs}px;transform:rotate({tape_rot}deg)">{label}</div>'
            '</div>')


def build(fmt):
    reel = fmt == "reel"
    H = 1920 if reel else 1350
    kt, ks = (335, 108) if reel else (140, 114)
    sub_t = kt + round(ks * 2.0) + 14
    cloth_top = 690 if reel else 505
    r1, r2 = (940, 1325) if reel else (cloth_top + 225, cloth_top + 625)
    body = [mat("f_hout", 0, 0, 1080, H, z=1)]
    body.append('<img class="logo" src="../bron/logo_lockup_zwart.png" style="top:%dpx">' % (250 if reel else 60))
    body.append(f'<div class="kop" style="top:{kt}px;font-size:{ks}px">Waar laat je<br>zes paar?</div>')
    body.append(f'<div class="sub" style="top:{sub_t}px;font-size:28px">Bestel het 3-pack, krijg 6 paar voor €44,95.<br>Vrijdag 27 t/m maandag 30 november.</div>')
    # linnen doek: schuine bovenrand (geen rotatie op het filter), zoomlijn en vouwschaduw
    ch = H - cloth_top + 60
    poly = "polygon(0 40px,1080px 0,1080px 100%,0 100%)"
    body.append(f'<div class="abs" style="left:0;top:{cloth_top - 40}px;width:1080px;height:{ch}px;background:rgba(0,0,0,.55);filter:blur(16px);clip-path:{poly};transform:translate(6px,-8px);z-index:2"></div>')
    body.append(f'<div class="abs" style="left:0;top:{cloth_top - 40}px;width:1080px;height:{ch}px;background:#D9D0C2;clip-path:{poly};z-index:3"></div>')
    body.append(mat("f_linnen", 0, cloth_top - 40, 1080, ch, f"clip-path:{poly}", z=3))
    body.append(f'<div class="plooi" style="left:330px;top:{cloth_top + 60}px;width:70px;height:{H}px;background:rgba(0,0,0,.07);transform:rotate(14deg)"></div>')
    body.append(f'<div class="plooi" style="left:700px;top:{cloth_top + 40}px;width:60px;height:{H}px;background:rgba(255,255,255,.35);transform:rotate(-10deg)"></div>')
    layer = ''
    tape_rots = (-5, 4, -3, 5, -4, 3)
    for (cx, dy, rot, h, lab, big, rw), tr in zip(PAIRS, tape_rots):
        row = r1 if rw == 0 else r2
        layer += pair(cx, row + dy, rot, h * (1.06 if reel else 1), lab, big, tr)
    body.append(f'<div class="laag">{layer}</div>')
    return page('\n'.join(body), fmt, CSS)
