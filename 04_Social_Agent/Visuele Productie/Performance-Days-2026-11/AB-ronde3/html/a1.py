"""R1 De wasmachine: voorlader met open deur, een sok klemt in de rubberen rand, een nieuw paar schuift in een envelop het beeld in."""
from common import ASPECT, DS, page, sock

CSS = """
.ad { background: #ECEBE8; }
.kop { color: var(--hi-black); }
.sub { color: #2b2b2b; }
.top { position: absolute; left: 0; top: 0; width: 1080px; background: #F5F4F2; box-shadow: 0 8px 12px rgba(0,0,0,.12), 0 1px 0 rgba(0,0,0,.2); z-index: 2; }
.lade { position: absolute; background: #E2E0DC; border-radius: 14px; box-shadow: inset 4px 6px 10px rgba(0,0,0,.28), 0 1px 0 rgba(255,255,255,.9); z-index: 3; }
.greep { position: absolute; background: #CFCDC8; border-radius: 6px; box-shadow: inset 2px 3px 4px rgba(0,0,0,.3); z-index: 4; }
.knop { position: absolute; border-radius: 50%; z-index: 4; background: conic-gradient(from 0deg, #f4f4f5, #9b9da1 60deg, #f8f8f8 140deg, #7d7f84 220deg, #f1f1f2 300deg, #f4f4f5);
        box-shadow: 8px 12px 14px rgba(0,0,0,.35), 2px 3px 2px rgba(0,0,0,.4); }
.knop::after { content: ""; position: absolute; left: 50%; top: 12%; width: 6px; height: 26%; margin-left: -3px; background: #1a1a1a; border-radius: 3px; }
.ring { position: absolute; border-radius: 50%; }
.stalen { background: conic-gradient(from 0deg, #f7f7f7, #e9eaec 28deg, #a3a5a9 70deg, #6b6d72 125deg, #8f9195 160deg, #d4d6d9 205deg, #f9f9f9 250deg, #ffffff 285deg, #c9cbce 320deg, #f7f7f7);
          box-shadow: 14px 20px 26px rgba(0,0,0,.28), 2px 3px 2px rgba(0,0,0,.35); }
.gummi { background: repeating-radial-gradient(circle at 50% 50%, #262626 0 7px, #181818 7px 17px, #101010 17px 21px);
         -webkit-mask: radial-gradient(circle at 50% 50%, transparent 0 var(--hole), #000 calc(var(--hole) + 1px)); }
.gummi-licht { background: conic-gradient(from 250deg, rgba(255,255,255,0) 0deg, rgba(255,255,255,.26) 40deg, rgba(255,255,255,0) 95deg, rgba(255,255,255,0) 360deg);
               -webkit-mask: radial-gradient(circle at 50% 50%, transparent 0 var(--hole), #000 calc(var(--hole) + 1px)); }
.trommel { background: radial-gradient(circle at 40% 34%, #1d1d1d 0, #0b0b0b 55%, #050505 100%); box-shadow: inset 14px 18px 30px rgba(0,0,0,.75); }
.trommel-rand { border: 12px solid #262626; background: transparent; box-shadow: inset 0 0 18px rgba(0,0,0,.8); }
.deur { position: absolute; z-index: 9; border-radius: 50%; background: linear-gradient(100deg, #ffffff 0, #b9bbbf 28%, #f4f4f5 52%, #8b8d91 100%);
        box-shadow: 18px 24px 30px rgba(0,0,0,.35), 3px 4px 3px rgba(0,0,0,.4); }
.glas { position: absolute; z-index: 10; border-radius: 50%; background: rgba(40,52,62,.55); box-shadow: inset 8px 10px 16px rgba(0,0,0,.45); overflow: hidden; }
.glas::before { content: ""; position: absolute; left: 22%; top: -10%; width: 14%; height: 120%; background: rgba(255,255,255,.34); transform: rotate(8deg); }
.scharnier { position: absolute; z-index: 11; background: linear-gradient(90deg, #8d8f93, #f1f1f2 45%, #8d8f93); border-radius: 6px; box-shadow: 4px 6px 6px rgba(0,0,0,.4); }
.env { position: absolute; transform-origin: 0 0; z-index: 30; }
.env .p { position: absolute; }
"""


def build(fmt):
    reel = fmt == "reel"
    cx = 470
    if reel:
        top_h, logo_t, kt, subt, cy = 380, 250, 420, 620, 1110
    else:
        top_h, logo_t, kt, subt, cy = 250, 46, 292, 492, 1030
    ks, subs = 100, 28
    R_CH, R_GUM, R_HOLE = 350, 332, 246
    gx, gy = cx - R_GUM, cy - R_GUM

    body = [f'<div class="top" style="height:{top_h}px"></div>']
    body.append(f'<img class="logo" src="../bron/logo_lockup_zwart.png" style="top:{logo_t}px">')
    # bedieningspaneel: zeepla en draaiknop
    py_ = top_h - 108
    body.append(f'<div class="lade" style="left:72px;top:{py_}px;width:300px;height:70px"></div>')
    body.append(f'<div class="greep" style="left:150px;top:{py_ + 28}px;width:144px;height:14px"></div>')
    body.append(f'<div class="knop" style="left:{884}px;top:{py_ - 14}px;width:100px;height:100px"></div>')
    body.append(f'<div class="kop" style="top:{kt}px;font-size:{ks}px">De wasmachine<br>neemt er één.</div>')
    body.append(f'<div class="sub" style="top:{subt}px;font-size:{subs}px">Wij geven hem terug. Alles wat je bestelt, krijg je twee keer.<br>Vrijdag 27 t/m maandag 30 november.</div>')

    # opening: stalen rand, gummi, trommel
    body.append(f'<div class="ring stalen" style="left:{cx - R_CH}px;top:{cy - R_CH}px;width:{2 * R_CH}px;height:{2 * R_CH}px;z-index:3"></div>')
    body.append(f'<div class="ring" style="left:{cx - R_GUM - 6}px;top:{cy - R_GUM - 6}px;width:{2 * R_GUM + 12}px;height:{2 * R_GUM + 12}px;background:#2a2a2a;box-shadow:inset 6px 8px 10px rgba(0,0,0,.6);z-index:4"></div>')
    gum = f'width:{2 * R_GUM}px;height:{2 * R_GUM}px;--hole:{R_HOLE}px'
    body.append(f'<div class="ring gummi" style="left:{gx}px;top:{gy}px;{gum};z-index:5"></div>')
    body.append(f'<div class="ring gummi-licht" style="left:{gx}px;top:{gy}px;{gum};z-index:6"></div>')
    body.append(f'<div class="ring trommel" style="left:{cx - R_HOLE}px;top:{cy - R_HOLE}px;width:{2 * R_HOLE}px;height:{2 * R_HOLE}px;z-index:7"></div>')
    body.append(f'<div class="ring trommel-rand" style="left:{cx - 170}px;top:{cy - 170}px;width:340px;height:340px;z-index:8;opacity:.55"></div>')

    # open deur rechts: scharnier op de rand van de opening
    hx = cx + R_CH
    dw, dh = 250, 2 * R_CH + 40
    body.append(f'<div class="deur" style="left:{hx - 10}px;top:{cy - dh // 2}px;width:{dw}px;height:{dh}px"></div>')
    body.append(f'<div class="glas" style="left:{hx + 28}px;top:{cy - dh // 2 + 50}px;width:{dw - 76}px;height:{dh - 100}px"></div>')
    for off in (-210, 190):
        body.append(f'<div class="scharnier" style="left:{hx - 22}px;top:{cy + off}px;width:46px;height:84px"></div>')

    # sok klemt in het gummi bovenin
    sh = 600
    sw = sh * ASPECT["sok_wit_vrij"]
    body.append(sock("sok_wit_vrij", cx - sw / 2 + 40, cy - R_GUM + 70, sh, rot=-5, z=12))
    clip = f'clip-path:inset(0 0 {2 * R_GUM - 150}px 0)'
    body.append(f'<div class="ring gummi" style="left:{gx}px;top:{gy}px;{gum};z-index:13;{clip}"></div>')
    body.append(f'<div class="ring gummi-licht" style="left:{gx}px;top:{gy}px;{gum};z-index:14;{clip}"></div>')

    # envelop met nieuw paar schuift van links het beeld in
    ex, ey = -60, cy + 90
    ew, eh = 600, 600
    body.append(f'<div class="env" style="left:{ex}px;top:{ey}px;width:{ew}px;height:{eh}px;transform:rotate(5deg)">'
                f'<div class="p" style="left:0;top:-200px;width:{ew}px;height:220px;background:#a38a68;clip-path:polygon(0 100%,50% 0,100% 100%)"></div>'
                f'<div class="p" style="left:0;top:0;width:{ew}px;height:{eh}px;background:#6f5a40"></div>'
                + _pair() +
                f'<div class="p" style="left:22px;top:42px;width:{ew}px;height:{eh}px;background:rgba(0,0,0,.55);filter:blur(16px);clip-path:polygon(0 24px,50% 0,100% 24px,100% 100%,0 100%)"></div>'
                f'<div class="p" style="left:0;top:14px;width:{ew}px;height:{eh}px;background:#b6946a;clip-path:polygon(0 24px,50% 0,100% 24px,100% 100%,0 100%);filter:url(#f_kraft)"></div>'
                f'<div class="p" style="left:0;top:14px;width:{ew}px;height:{eh}px;clip-path:polygon(0 24px,50% 0,100% 24px,100% 26px,50% 2px,0 26px);background:rgba(255,255,255,.35)"></div>'
                f'<img class="p" src="../bron/logo_mark_zwart.png" style="left:300px;top:150px;height:84px;opacity:.78;mix-blend-mode:multiply">'
                '</div>')
    return page('\n'.join(body), fmt, CSS)


def _pair():
    h = 400
    w = h * ASPECT["sok_zwart_vrij"]
    s = ''
    for dx, dy, rot, shade in ((130, -250, -5, .85), (130 + w * .55, -222, 4, 1)):
        s += (f'<img class="p" src="../bron/sok_zwart_vrij.png" style="left:{dx:.0f}px;top:{dy}px;height:{h}px;'
              f'transform:rotate({rot}deg);filter:brightness({shade})">')
    return s
