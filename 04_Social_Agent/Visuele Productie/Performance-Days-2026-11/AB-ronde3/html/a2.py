"""R2 De pakbon: open kraftdoos op een houten kleedkamerbank, twee 3-packs in vloeipapier, pakbon met pencirkel om de 6."""
from common import ASPECT, BS, DS, mat, pack, page, tissue

VARIANTS = [("", {"kop": "a"}), ("_kopB", {"kop": "b"})]

CSS = """
.ad { background: #E4E1DC; }
.kop { color: var(--hi-black); }
.raam { position: absolute; background: rgba(0,0,0,.075); filter: blur(5px); z-index: 1; }
.rand { position: absolute; left: 0; width: 1080px; z-index: 3; }
.flap { position: absolute; z-index: 5; }
.vloei { position: absolute; background: #F1EFEB; z-index: 9; filter: drop-shadow(2px 3px 3px rgba(0,0,0,.28)); }
.pakbon { position: absolute; z-index: 30; background: #F6F5F2; color: var(--hi-black); box-shadow: 1px 2px 2px rgba(0,0,0,.4), 14px 22px 22px rgba(0,0,0,.28); }
.pakbon .h { font: 700 22px/1 Poppins; letter-spacing: .18em; text-transform: uppercase; color: #5a5955; position: absolute; left: 34px; top: 30px; }
.pakbon .r { position: absolute; left: 34px; right: 34px; display: flex; justify-content: space-between; font: 500 32px/1 Poppins; border-bottom: 2px solid #bdbab4; padding-bottom: 14px; }
.pakbon .r b { font-weight: 800; }
.tape { position: absolute; z-index: 6; background: rgba(214,196,158,.82); filter: drop-shadow(2px 3px 2px rgba(0,0,0,.35)); }
"""


def build(fmt, kop="a"):
    reel = fmt == "reel"
    rim = 1040 if reel else 1010
    kt = 335 if reel else 170
    ks = 94 if reel else 106
    back = rim - 130
    body = []
    # muur en bank
    body.append('<div class="fill" style="position:absolute;left:0;top:0;width:1080px;height:%dpx;background:#E6E3DE"></div>' % (back + 60))
    body.append(f'<div class="raam" style="left:560px;top:-60px;width:150px;height:{back + 80}px;transform:skewX(-14deg)"></div>')
    body.append(f'<div class="raam" style="left:760px;top:-60px;width:150px;height:{back + 80}px;transform:skewX(-14deg)"></div>')
    body.append(mat("f_hout", 0, back + 20, 1080, (1920 if reel else 1350) - back - 20, z=2))
    # voorkant van de bank onderin
    body.append(f'<div class="abs" style="left:0;top:{rim + 250}px;width:1080px;height:{400}px;background:#8a6a47;z-index:3;box-shadow:0 -3px 6px rgba(0,0,0,.35)"></div>')
    body.append(f'<div class="abs" style="left:0;top:{back + 14}px;width:1080px;height:12px;background:rgba(0,0,0,.35);filter:blur(4px);z-index:3"></div>')

    # losse tape op de bank
    body.append(f'<div class="tape" style="left:40px;top:{rim + 120}px;width:250px;height:50px;transform:rotate(-8deg);'
                f'clip-path:polygon(0 0,100% 0,98% 25%,100% 50%,97% 75%,100% 100%,0 100%,3% 75%,0 50%,3% 25%)"></div>')

    # doos: achterflap, binnenkant
    bx, bw = 90, 820
    body.append(f'<div class="flap" style="left:{bx}px;top:{back - 250}px;width:{bw}px;height:260px;background:#9c8160;'
                f'clip-path:polygon(0 100%,100% 100%,94% 0,6% 0);z-index:4"></div>')
    body.append(mat("f_kraft", bx + 6, back - 250, bw - 12, 262,
                    "clip-path:polygon(0 100%,100% 100%,94% 0,6% 0);opacity:.75;mix-blend-mode:multiply", z=4))
    body.append(f'<div class="abs" style="left:{bx}px;top:{back}px;width:{bw}px;height:{rim - back}px;background:#6a5538;z-index:5"></div>')
    # schaduw van de doos op de bank
    body.append(f'<div class="abs" style="left:{bx + 60}px;top:{rim + 120}px;width:{bw + 70}px;height:230px;background:rgba(0,0,0,.5);filter:blur(34px);z-index:4"></div>')

    # vloeipapier achter en tussen de packs
    body.append(tissue(bx + 20, rim - 230, bw - 40, 250, seed=3, z=7))
    # twee 3-packs, diep in de doos gezakt en overlappend
    ph = 500
    pw = ph * ASPECT["pack3_zwart"]
    body.append(pack(bx + 20, rim - ph + 200, ph, rot=-3, z=8))
    body.append(pack(bx + 20 + pw * .52, rim - ph + 222, ph, rot=2.5, z=9, extra="filter:brightness(.92) drop-shadow(2px 3px 2px rgba(0,0,0,.5)) drop-shadow(22px 34px 26px rgba(0,0,0,.30))"))
    # vloeipapier voor de packs: valt over de rand
    body.append(tissue(bx + 4, rim - 170, 400, 200, seed=8, z=11))
    body.append(tissue(bx + 330, rim - 190, 400, 220, seed=5, z=12))
    body.append(tissue(bx + 560, rim - 150, 270, 180, seed=2, z=11))

    # voorflap: hangt naar voren over de voorkant
    fh = 330
    body.append(f'<div class="flap" style="left:{bx - 24}px;top:{rim}px;width:{bw + 48}px;height:{fh}px;background:#b59b78;z-index:14;'
                f'clip-path:polygon(3% 0,97% 0,100% 100%,0 100%);box-shadow:{BS}"></div>')
    body.append(mat("f_kraft", bx - 24, rim, bw + 48, fh, "clip-path:polygon(3% 0,97% 0,100% 100%,0 100%);mix-blend-mode:multiply;opacity:.45", z=15))
    body.append(f'<div class="abs" style="left:{bx - 24 + 24}px;top:{rim}px;width:{bw + 48 - 48}px;height:5px;background:rgba(255,255,255,.55);z-index:16"></div>')
    # golfkarton-rand en logo op de voorflap
    body.append(f'<div class="abs" style="left:{bx - 24 + 26}px;top:{rim}px;width:{bw + 48 - 52}px;height:16px;z-index:16;'
                f'background:repeating-linear-gradient(90deg,#c9b08a 0 5px,#a98f6b 5px 10px)"></div>')
    body.append(f'<img class="abs" src="../bron/logo_mark_zwart.png" style="left:{bx + 60}px;top:{rim + 90}px;height:120px;z-index:16;opacity:.8;mix-blend-mode:multiply">')
    # doosvoorkant eronder
    body.append(f'<div class="abs" style="left:{bx}px;top:{rim + fh - 10}px;width:{bw}px;height:140px;background:#8a7052;z-index:13"></div>')
    # tape-strook over het midden van de voorflap
    body.append(f'<div class="tape" style="left:{bx + 360}px;top:{rim}px;width:70px;height:120px;z-index:17"></div>')

    # pakbon over de rand
    pw_, ph_ = 470, (360 if reel else 400)
    px, py = 480, rim - 18
    rows = [("Besteld", "3 paar"), ("Geleverd", "6 paar"), ("Extra betaald", "€0,00")]
    body.append(f'<div class="pakbon" style="left:{px}px;top:{py}px;width:{pw_}px;height:{ph_}px;transform:rotate(3deg);transform-origin:0 0">'
                f'<div class="h">Pakbon</div>'
                + ''.join(f'<div class="r" style="top:{88 + i * (76 if reel else 84)}px"><span>{a}</span><b>{b}</b></div>' for i, (a, b) in enumerate(rows)) +
                f'<svg style="position:absolute;left:0;top:0;width:{pw_}px;height:{ph_}px;overflow:visible" viewBox="0 0 {pw_} {ph_}">'
                f'<path d="M322 176 C 350 156, 446 158, 454 190 C 462 222, 372 230, 330 214 C 300 202, 306 178, 346 168 C 372 162, 394 162, 408 166" '
                f'fill="none" stroke="#1f1f1f" stroke-width="5" stroke-linecap="round" opacity=".88"/></svg>'
                '</div>')

    body.append('<img class="logo" src="../bron/logo_lockup_zwart.png" style="top:%dpx">' % (250 if reel else 60))
    if kop == "a":
        body.append(f'<div class="kop" style="top:{kt + (0 if reel else 20)}px;font-size:{ks}px">Er zit een<br>fout in je<br>bestelling.</div>')
    else:
        body.append(f'<div class="kop" style="top:{kt + (0 if reel else 20)}px;font-size:{ks + 18}px">Besteld: 3.<br>Geleverd: 6.</div>')
    return page('\n'.join(body), fmt, CSS)
