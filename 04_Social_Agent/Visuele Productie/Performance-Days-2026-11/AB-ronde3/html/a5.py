"""R5 Lees je bon maar na.: thermische bon op zwart rubber, 3-pack ernaast, pencirkel om de nul."""
from common import ASPECT, CHEV, DS, pack, page, tex

CSS = """
.kop { color: var(--hi-white); }
.raam { position: absolute; background: rgba(255,255,255,.045); filter: blur(8px); z-index: 1; }
.bon { position: absolute; z-index: 30; width: 640px; background: #F3F1EC; color: #161616; padding: 46px 44px 70px;
       box-shadow: 1px 2px 2px rgba(0,0,0,.55), 22px 34px 34px rgba(0,0,0,.55);
       background-image: repeating-linear-gradient(0deg, rgba(0,0,0,.018) 0 2px, rgba(0,0,0,0) 2px 4px); }
.bon .kopje { font: 700 22px/1.3 Poppins; letter-spacing: .2em; text-transform: uppercase; color: #55534e; padding-bottom: 20px; border-bottom: 3px dashed #bdb9b1; margin-bottom: 8px; }
.bon .r { display: flex; justify-content: space-between; align-items: baseline; font: 500 31px/1 Poppins; padding: 15px 0; font-variant-numeric: tabular-nums; }
.bon .r b { font-weight: 800; }
.bon .r.tot { border-top: 3px dashed #bdb9b1; margin-top: 8px; padding-top: 22px; }
.bon .n { font: 500 27px/1.3 Poppins; color: #222; margin-top: 22px; }
.bon .n + .n { margin-top: 12px; }
.rol { position: absolute; z-index: 31; height: 34px; border-radius: 17px 17px 0 0; background: #E4E1DA; box-shadow: 0 -2px 4px rgba(0,0,0,.4); }
.pilw { position: absolute; z-index: 40; }
"""


def build(fmt):
    reel = fmt == "reel"
    H = 1920 if reel else 1350
    kt, ks = (335, 112) if reel else (160, 120)
    top = 575 if reel else 470
    body = [tex("tex_rubber.png", H)]
    body.append(f'<div class="raam" style="left:60px;top:-60px;width:150px;height:{H + 120}px;transform:skewX(-14deg)"></div>')
    body.append(f'<div class="raam" style="left:300px;top:-60px;width:150px;height:{H + 120}px;transform:skewX(-14deg)"></div>')
    body.append('<img class="logo" src="../bron/logo_lockup_wit.png" style="top:%dpx">' % (250 if reel else 60))
    body.append(f'<div class="kop" style="top:{kt}px;font-size:{ks}px">Lees je <span class="vol">bon</span><br>maar na.</div>')

    # 3-pack achter de bon
    ph = 540
    body.append(pack(0, top + 150, ph, rot=-6, z=10))

    # de bon
    rows = [("3-pack 2.0", "€44,95"), ("3-pack 2.0", "€0,00"), ("Verzending", "€0,00")]
    rh = ''.join(f'<div class="r"><span>{a}</span><b>{b}</b></div>' for a, b in rows)
    bon = (f'<div class="rol" style="left:395px;top:{top - 22}px;width:640px;transform:rotate(-3deg);transform-origin:0 100%"></div>'
           f'<div class="bon" style="left:395px;top:{top}px;transform:rotate(-3deg);transform-origin:0 0;'
           f'clip-path:polygon(0 0,100% 0,100% calc(100% - 22px),96% 100%,92% calc(100% - 20px),88% 100%,84% calc(100% - 18px),80% 100%,76% calc(100% - 20px),72% 100%,68% calc(100% - 18px),64% 100%,60% calc(100% - 22px),56% 100%,52% calc(100% - 18px),48% 100%,44% calc(100% - 20px),40% 100%,36% calc(100% - 18px),32% 100%,28% calc(100% - 20px),24% 100%,20% calc(100% - 18px),16% 100%,12% calc(100% - 20px),8% 100%,4% calc(100% - 18px),0 100%)">'
           f'<div class="kopje">Jouw bestelling</div>{rh}'
           f'<div class="r tot"><span>Totaal 6 paar</span><b>€44,95</b></div>'
           f'<div class="r"><span>Per paar</span><b>€7,49</b></div>'
           f'<div class="n">1 paar? Verzending €4,50. Pak er 2, dan krijg je 4 en verzend je gratis.</div>'
           f'<div class="n">Vanaf dinsdag 1-12 weer 3 paar.</div></div>')
    # pencirkel om de tweede regel (€0,00)
    cy_ = top + 46 + 56 + 8 + 15 + 52 + 36 + 20
    body.append(bon)
    body.append(f'<svg class="pilw" style="left:395px;top:{top}px;transform:rotate(-3deg);transform-origin:0 0;overflow:visible" width="640" height="700" viewBox="0 0 640 700">'
                f'<path d="M450 178 C 488 160, 600 162, 606 192 C 612 224, 520 236, 468 226 C 430 218, 436 190, 490 176 C 530 166, 560 168, 578 172" '
                f'fill="none" stroke="#1a1a1a" stroke-width="5" stroke-linecap="round" opacity=".9"/></svg>')
    bt = 1260 if reel else 1190
    body.append(f'<div class="abs" style="left:{640 if reel else 72}px;top:{bt}px;z-index:40"><span class="pill">Shop nu<i>{CHEV}</i></span></div>')
    return page('\n'.join(body), fmt, CSS)
