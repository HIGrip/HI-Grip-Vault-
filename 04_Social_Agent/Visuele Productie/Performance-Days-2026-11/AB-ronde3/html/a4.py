"""R4 Eén houd je. Eén geef je.: flatlay op kalksteen, links een los paar, rechts een paar in vloeipapier met lint en blanco kaartje."""
from common import ASPECT, DS, mat, page, tex, tissue

CSS = """
.kop { color: var(--hi-black); }
.sub { color: #262626; }
.raam { position: absolute; background: rgba(0,0,0,.07); filter: blur(6px); z-index: 1; }
.laag { position: absolute; left: 0; top: 0; width: 1080px; height: 100%; filter: drop-shadow(2px 3px 2px rgba(0,0,0,.5)) drop-shadow(22px 34px 24px rgba(0,0,0,.28)); z-index: 20; }
.paar, .bundel { position: absolute; }
.paar img { position: absolute; }
.bundel > div, .bundel > svg { position: absolute; }
.lint { background: repeating-linear-gradient(90deg, #E9E1D1 0 3px, #DDD3BF 3px 6px); box-shadow: 1px 2px 2px rgba(0,0,0,.25); }
.kaartje { background: #C9AE86; color: var(--hi-black); box-shadow: 1px 2px 2px rgba(0,0,0,.35), 8px 12px 14px rgba(0,0,0,.22);
           clip-path: polygon(0 44px,44px 0,100% 0,100% 100%,0 100%); }
.kaartje .gat { position: absolute; left: 24px; top: 24px; width: 20px; height: 20px; border-radius: 50%; background: #CFCAC2; }
.kaartje .t { position: absolute; left: 30px; top: 100px; font: 800 44px/1 Poppins; }
.kaartje .l { position: absolute; left: 30px; right: 28px; top: 190px; border-bottom: 4px solid var(--hi-black); }
"""


def build(fmt):
    reel = fmt == "reel"
    H = 1920 if reel else 1350
    kt, ks = (335, 118) if reel else (170, 122)
    sub_t = kt + round(ks * 2.28) + 10
    cy = 1000 if reel else 900
    body = [tex("tex_steen.png", H)]
    body.append(f'<div class="raam" style="left:600px;top:-60px;width:140px;height:{H + 120}px;transform:skewX(-14deg)"></div>')
    body.append(f'<div class="raam" style="left:800px;top:-60px;width:140px;height:{H + 120}px;transform:skewX(-14deg)"></div>')
    body.append('<img class="logo" src="../bron/logo_lockup_zwart.png" style="top:%dpx">' % (250 if reel else 60))
    body.append(f'<div class="kop" style="top:{kt}px;font-size:{ks}px;line-height:1.14">Eén houd je.<br>Eén geef je.</div>')
    body.append(f'<div class="sub" style="top:{sub_t}px;font-size:28px">Alles wat je bestelt, krijg je twee keer.<br>Vrijdag 27 t/m maandag 30 november.</div>')

    # links: het paar dat je houdt
    ph = 560
    sw = ph * ASPECT["sok_zwart_vrij"]
    off = sw * .62
    W = sw + off
    px, py = 285, cy + 10
    paar = (f'<div class="paar" style="left:{px - W / 2:.0f}px;top:{py - ph / 2:.0f}px;width:{W:.0f}px;height:{ph}px;transform:rotate(-9deg)">'
            f'<img src="../bron/sok_zwart_vrij.png" style="left:0;top:{ph * .05:.0f}px;height:{ph * .95:.0f}px;filter:brightness(.88)">'
            f'<img src="../bron/sok_zwart_vrij.png" style="left:{off:.0f}px;top:0;height:{ph}px"></div>')

    # rechts: het paar dat je geeft, in vloeipapier met lint en kaartje
    bw, bh = 350, 540
    bx, by = 585, cy - 250
    cuff_w = 190
    cuff_h = cuff_w / ASPECT["sok_wit_vrij"]
    inner = (
        f'<img class="sk" src="../bron/sok_wit_vrij.png" style="left:{(bw - cuff_w) / 2 - 6:.0f}px;top:-96px;width:{cuff_w}px;height:{cuff_h:.0f}px;z-index:1">'
        f'<div style="left:0;top:0;width:{bw}px;height:{bh}px;background:#F3F1ED;z-index:2;filter:url(#f_papier);'
        f'clip-path:polygon(0 3%,4% 0,18% 1.5%,40% 0,63% 1.2%,86% 0,100% 2%,99% 30%,100% 55%,98.5% 80%,100% 100%,70% 98.6%,45% 100%,20% 98.8%,0 100%,1.4% 70%,0 45%,1% 20%)"></div>'
        # bovenste vouwflap en onderste vouwflap
        f'<div style="left:0;top:0;width:{bw}px;height:{bh * .34:.0f}px;background:#ECE9E4;z-index:3;clip-path:polygon(0 0,100% 0,100% 55%,50% 100%,0 55%)"></div>'
        f'<div style="left:0;top:{bh * .60:.0f}px;width:{bw}px;height:{bh * .40:.0f}px;background:#F8F7F4;z-index:3;clip-path:polygon(0 0,50% 22%,100% 0,100% 100%,0 100%)"></div>'
        f'<svg style="left:0;top:0;z-index:4;overflow:visible" width="{bw}" height="{bh}" viewBox="0 0 {bw} {bh}">'
        f'<path d="M0 {bh * .19:.0f} L{bw / 2} {bh * .34:.0f} L{bw} {bh * .19:.0f}" stroke="rgba(0,0,0,.12)" stroke-width="3" fill="none"/>'
        f'<path d="M0 {bh * .60:.0f} L{bw / 2} {bh * .73:.0f} L{bw} {bh * .60:.0f}" stroke="rgba(255,255,255,.9)" stroke-width="3" fill="none"/>'
        f'<path d="M40 40 L130 120 M300 70 L220 150 M60 420 L140 360 M290 450 L210 380" stroke="rgba(0,0,0,.07)" stroke-width="3" fill="none"/>'
        f'<path d="M44 44 L134 124 M304 74 L224 154 M64 424 L144 364 M294 454 L214 384" stroke="rgba(255,255,255,.8)" stroke-width="2" fill="none"/></svg>'
        # lint kruislings
        f'<div class="lint" style="left:{bw / 2 - 20:.0f}px;top:0;width:40px;height:{bh}px;z-index:5"></div>'
        f'<div class="lint" style="left:0;top:{bh * .52:.0f}px;width:{bw}px;height:36px;z-index:5"></div>'
        # strik
        f'<svg style="left:{bw / 2 - 80:.0f}px;top:{bh * .52 - 40:.0f}px;z-index:6;overflow:visible" width="160" height="110" viewBox="0 0 160 110">'
        f'<path d="M80 52 C 40 -6, -6 8, 12 48 C 22 70, 60 62, 80 52" fill="#E3DAC7" stroke="rgba(0,0,0,.18)" stroke-width="2"/>'
        f'<path d="M80 52 C 120 -6, 166 8, 148 48 C 138 70, 100 62, 80 52" fill="#E9E1D1" stroke="rgba(0,0,0,.18)" stroke-width="2"/>'
        f'<path d="M80 54 C 66 80, 56 98, 44 112 M80 54 C 94 80, 106 98, 118 112" stroke="#DDD3BF" stroke-width="16" stroke-linecap="round" fill="none"/>'
        f'<circle cx="80" cy="52" r="16" fill="#D6CBB4" stroke="rgba(0,0,0,.2)" stroke-width="2"/></svg>'
        # touwtje en kaartje
        f'<svg style="left:0;top:0;z-index:7;overflow:visible" width="{bw}" height="{bh}" viewBox="0 0 {bw} {bh}">'
        f'<path d="M{bw / 2:.0f} {bh * .52 + 10:.0f} C {bw / 2 + 40:.0f} {bh * .52 + 80:.0f}, {bw - 60} {bh * .52 + 100:.0f}, {bw - 22} {bh * .52 + 128:.0f}" stroke="#0A0A0A" stroke-width="3" fill="none"/></svg>'
        f'<div class="kaartje" style="left:{bw - 100}px;top:{bh * .52 + 110:.0f}px;width:190px;height:280px;transform:rotate(-8deg);z-index:8">'
        f'<div class="gat"></div><div class="t">voor</div><div class="l"></div></div>'
    )
    bundel = f'<div class="bundel" style="left:{bx}px;top:{by}px;width:{bw}px;height:{bh}px;transform:rotate(5deg)">{inner}</div>'

    # pen met dop ernaast
    pen = (f'<div class="abs" style="left:{ 330}px;top:{cy + 395}px;width:430px;height:30px;transform:rotate(-4deg);transform-origin:0 50%">'
           f'<div class="abs" style="left:0;top:0;width:300px;height:30px;border-radius:15px 4px 4px 15px;background:#0A0A0A"></div>'
           f'<div class="abs" style="left:300px;top:0;width:18px;height:30px;background:#B9BBBE"></div>'
           f'<div class="abs" style="left:318px;top:3px;width:70px;height:24px;background:#0A0A0A;clip-path:polygon(0 0,100% 40%,100% 60%,0 100%)"></div>'
           f'<div class="abs" style="left:70px;top:6px;width:130px;height:5px;border-radius:3px;background:rgba(255,255,255,.25)"></div></div>')
    body.append(f'<div class="laag">{paar}{bundel}{pen}</div>')
    return page('\n'.join(body), fmt, CSS)
