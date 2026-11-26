"""Bouwt de 6 Performance Days-ads (agent-spoor) als HTML en rendert ze op 2x met headless Chrome.
Gebruik: python build.py [nr ...]"""
import math
import pathlib
import subprocess
import sys
import tempfile
import time

from PIL import Image

CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
HERE = pathlib.Path(__file__).resolve().parent
PNG = HERE.parent / "png"
PNG.mkdir(exist_ok=True)

CHEV = '<svg viewBox="0 0 24 24"><path d="M9 4l8 8-8 8" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
ASPECT = {"sok_wit_vrij": 613 / 1102, "sok_zwart_vrij": 620 / 1126}


def page(body, fmt, css=""):
    return (f'<!doctype html><html lang="nl"><head><meta charset="utf-8"><link rel="stylesheet" href="base.css">'
            f'<style>{css}</style></head><body><div class="ad {fmt}">{body}</div></body></html>')


def pair(img, left, top, h, rot=0, shade=.9):
    """Twee overlappende sokken (een paar). Geeft (html, breedte) terug; hoogte = 1.07*h."""
    w = round(h * ASPECT[img])
    off = round(w * .5)
    s = (f'<div class="pr" style="left:{left}px;top:{top}px;width:{w + off}px;height:{round(h * 1.07)}px;'
         f'transform:rotate({rot}deg)">'
         f'<img src="../bron/{img}.png" style="left:0;top:0;height:{round(h * .93)}px;filter:brightness({shade})">'
         f'<img src="../bron/{img}.png" style="left:{off}px;top:{round(h * .07)}px;height:{h}px"></div>')
    return s, w + off


def sock(img, left, top, h, rot=0):
    return f'<img class="sk" src="../bron/{img}.png" style="left:{left}px;top:{top}px;height:{h}px;transform:rotate({rot}deg)">'


BASE_CSS = """
.pr { position: absolute; filter: drop-shadow(0 26px 24px rgba(0,0,0,.45)); }
.pr img, .sk { position: absolute; }
.sk { filter: drop-shadow(0 26px 24px rgba(0,0,0,.45)); }
"""

# ---------------------------------------------------------------- 1 Kalender
CSS1 = BASE_CSS + """
.paper { position: absolute; left: 72px; width: 936px; background: var(--hi-warm-offwhite); color: var(--hi-black);
         transform: rotate(-1.2deg); box-shadow: 0 34px 70px rgba(0,0,0,.6), 0 4px 10px rgba(0,0,0,.35); padding: 0 40px 26px; }
.paper .maand { font: 900 46px/1 Poppins; text-transform: uppercase; letter-spacing: -.02em; display: flex; align-items: flex-end; padding-bottom: 14px; }
.paper .dagen, .paper .grid { display: grid; grid-template-columns: repeat(7, 1fr); }
.paper .dagen { align-items: center; }
.paper .dagen span { font: 700 26px/1 Poppins; color: #8a8885; text-align: center; text-transform: uppercase; }
.paper .grid { border-top: 3px solid var(--hi-black); }
.paper .c { display: grid; place-items: center; font: 600 38px/1 Poppins; color: #b9b7b3; position: relative; }
.paper .c.on { color: var(--hi-white); font-weight: 900; font-size: 46px; z-index: 1; }
.paper .c.on::before { content: ""; position: absolute; inset: 6px 8px; background: var(--hi-black); border-radius: 18px; z-index: -1; }
"""


def ad1(fmt):
    reel = fmt == "reel"
    logo_top, kop_top, ks = (250, 340, 100) if reel else (72, 176, 118)
    sub_top = kop_top + round(ks * 1.8) + 26
    fs = 28 if reel else 30
    rowh = 70 if reel else 80
    paper_top = 712 if reel else 620
    head_h, wk_h = (84, 44) if reel else (92, 50)
    cells = [f'<div class="c" style="height:{rowh}px"></div>'] * 6
    for d in range(1, 31):
        cells.append(f'<div class="c{" on" if d >= 27 else ""}" style="height:{rowh}px">{d}</div>')
    paper = (f'<div class="paper" style="top:{paper_top}px">'
             f'<div class="maand" style="height:{head_h}px">November 2026</div>'
             f'<div class="dagen" style="height:{wk_h}px">'
             + ''.join(f'<span>{d}</span>' for d in ("ma", "di", "wo", "do", "vr", "za", "zo")) + '</div>'
             f'<div class="grid">{"".join(cells)}</div></div>')
    ph = 260 if reel else 280
    _, pw = pair("sok_wit_vrij", 0, 0, ph)
    pr, pw = pair("sok_wit_vrij", 1008 - pw - 10, paper_top + 75 - round(ph * 1.07), ph, rot=7)
    body = (f'<img class="logo" src="../bron/logo_lockup_wit.png" style="top:{logo_top}px">'
            f'<div class="kop" style="top:{kop_top}px;font-size:{ks}px">4 dagen.<br>Alles <span class="vol">dubbel</span>.</div>'
            f'<div class="sub" style="top:{sub_top}px;font-size:{fs}px;width:640px">Vrijdag 27 t/m maandag 30 november.<br>Wat je bestelt, krijg je<br>nog een keer gratis.</div>'
            + paper + pr)
    return page(body, fmt, CSS1)


# ---------------------------------------------------------------- 2 Teamregel
CSS2 = BASE_CSS + """
.ad { background: var(--hi-warm-dark); }
.bord { position: absolute; left: 72px; width: 936px; background: var(--hi-white); color: var(--hi-black);
        box-shadow: 0 34px 70px rgba(0,0,0,.55); }
.bord::after { content: ""; position: absolute; inset: 18px; border: 4px solid var(--hi-black); pointer-events: none; }
.bord h2 { position: absolute; left: 64px; font-weight: 900; text-transform: uppercase; letter-spacing: -.03em; line-height: 1; }
.bord .rg { position: absolute; left: 64px; right: 64px; display: flex; gap: 28px; align-items: baseline; font-weight: 700; }
.bord .rg b { font-weight: 900; }
.bord .balk { position: absolute; left: 22px; right: 22px; background: var(--hi-black); color: var(--hi-yellow); display: flex; align-items: center; gap: 28px;
              padding: 0 42px; font-weight: 800; line-height: 1.2; }
.bord .balk b { font-weight: 900; color: var(--hi-yellow); }
.bord .bewijs { position: absolute; left: 64px; font-weight: 800; line-height: 1.3; }
.bord hr { position: absolute; left: 64px; right: 64px; border: 0; border-top: 3px solid var(--hi-black); }
"""


def ad2(fmt):
    reel = fmt == "reel"
    logo_top = 250 if reel else 72
    top, hgt = (350, 940) if reel else (176, 1010)
    if reel:
        t_top, t_size, hr_top, r1, r1s, bar_top, bar_h, bar_s, bw_top, bw_s = 66, 76, 176, 212, 50, 330, 200, 36, 712, 30
        pack_h = 410
    else:
        t_top, t_size, hr_top, r1, r1s, bar_top, bar_h, bar_s, bw_top, bw_s = 74, 92, 214, 270, 60, 392, 190, 42, 850, 34
        pack_h = 460
    pack_top = top + hgt - (400 if reel else 410)
    pw = round(pack_h * 1400 / 1339)
    pack_left = 1008 - pw
    board = (f'<div class="bord" style="top:{top}px;height:{hgt}px">'
             f'<h2 style="top:{t_top}px;font-size:{t_size}px">Teamregels</h2>'
             f'<hr style="top:{hr_top}px">'
             f'<div class="rg" style="top:{r1}px;font-size:{r1s}px"><b>1</b><span>Wees op tijd.</span></div>'
             f'<div class="balk" style="top:{bar_top}px;height:{bar_h}px;font-size:{bar_s}px"><b style="font-size:{round(bar_s * 1.15)}px">2</b>'
             f'<span>27 t/m 30 nov:<br>bestel er één, krijg er twee.</span></div>'
             f'<div class="bewijs" style="top:{bw_top}px;font-size:{bw_s}px;width:430px">3500+ sporters<br>gingen je voor</div></div>')
    pack = f'<img class="sk" src="../bron/pack3_zwart.png" style="left:{pack_left}px;top:{pack_top}px;height:{pack_h}px">'
    body = f'<img class="logo" src="../bron/logo_lockup_wit.png" style="top:{logo_top}px">' + board + pack
    return page(body, fmt, CSS2)


# ---------------------------------------------------------------- 3 Tweede paar
CSS3 = BASE_CSS + """
.panel { position: absolute; left: 0; width: 1080px; bottom: 0; background: var(--hi-warm-offwhite); }
.tagwrap { position: absolute; filter: drop-shadow(0 26px 24px rgba(0,0,0,.4)); }
.tag { position: absolute; inset: 0; background: var(--hi-black); clip-path: polygon(0 64px, 64px 0, calc(100% - 64px) 0, 100% 64px, 100% 100%, 0 100%); }
.tag .gat { position: absolute; left: 50%; top: 44px; width: 38px; height: 38px; margin-left: -19px; border-radius: 50%; background: var(--hi-warm-offwhite); }
.tag .rij { position: absolute; left: 48px; right: 40px; display: flex; align-items: center; gap: 26px; font-weight: 800; color: var(--hi-white); }
.tag .vak { width: 62px; height: 62px; border-radius: 12px; flex: none; display: grid; place-items: center; }
.tag .vak.aan { background: var(--hi-white); }
.tag .vak.leeg { border: 6px solid var(--hi-yellow); }
.tag .vak svg { width: 38px; height: 38px; }
.tag .mark { position: absolute; right: 40px; bottom: 36px; height: 50px; }
.string { position: absolute; left: 0; top: 0; width: 1080px; overflow: visible; }
"""


def ad3(fmt):
    reel = fmt == "reel"
    logo_top, kop_top, ks = (250, 340, 92) if reel else (72, 176, 100)
    sub_top = kop_top + round(ks * 1.8) + 26
    fs = 28 if reel else 30
    panel_top = 680 if reel else 560
    ph = 540 if reel else 580
    s_top = panel_top + (48 if reel else 56)
    tw, th = (390, 450) if reel else (420, 480)
    tcx, tcy = (792, s_top + th // 2 + 120) if reel else (792, s_top + th // 2 + 110)
    ang = 6
    wl = 70 if reel else 56
    wit = sock("sok_wit_vrij", wl, s_top + 30, ph, rot=-4)
    ww = round(ph * ASPECT["sok_wit_vrij"])
    zl = wl + ww - 30
    zwart = sock("sok_zwart_vrij", zl, s_top, ph, rot=3)
    zw = round(ph * ASPECT["sok_zwart_vrij"])
    sx, sy = zl + zw * .58, s_top + ph * .075
    a = math.radians(ang)
    ly = -th / 2 + 63
    hx = tcx - ly * math.sin(a)
    hy = tcy + ly * math.cos(a)
    hh = 1920 if reel else 1350
    string = (f'<svg class="string" height="{hh}" viewBox="0 0 1080 {hh}">'
              f'<path d="M{sx:.0f} {sy:.0f} C {sx + 50:.0f} {sy + 70:.0f}, {hx - 70:.0f} {hy - 60:.0f}, {hx:.0f} {hy:.0f}" fill="none" stroke="#0A0A0A" stroke-width="4" stroke-linecap="round"/>'
              f'<circle cx="{sx:.0f}" cy="{sy:.0f}" r="9" fill="#0A0A0A"/></svg>')
    check = '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7" fill="none" stroke="#0A0A0A" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    r1, r2 = (156, 262) if reel else (160, 270)
    fz = 46 if reel else 50
    tag = (f'<div class="tagwrap" style="left:{tcx - tw / 2:.0f}px;top:{tcy - th / 2:.0f}px;width:{tw}px;height:{th}px;transform:rotate({ang}deg)">'
           f'<div class="tag"><div class="gat"></div>'
           f'<div class="rij" style="top:{r1}px;font-size:{fz}px"><span class="vak aan">{check}</span>Voor mij</div>'
           f'<div class="rij" style="top:{r2}px;font-size:{fz}px">Voor<span class="vak leeg"></span></div>'
           f'<img class="mark" src="../bron/logo_mark_wit.png"></div></div>')
    body = (f'<img class="logo" src="../bron/logo_lockup_wit.png" style="top:{logo_top}px">'
            f'<div class="kop" style="top:{kop_top}px;font-size:{ks}px">Wie krijgt je<br>tweede paar?</div>'
            f'<div class="sub" style="top:{sub_top}px;font-size:{fs}px">Wat je bestelt, krijg je nog een keer gratis.<br>Vrijdag 27 t/m maandag 30 november.</div>'
            f'<div class="panel" style="top:{panel_top}px"></div>' + wit + zwart + string + tag)
    return page(body, fmt, CSS3)


# ---------------------------------------------------------------- 4 Was en tas
CSS4 = BASE_CSS + """
.lab { position: absolute; text-align: center; font-weight: 800; text-transform: uppercase; }
.lijn { position: absolute; left: 539px; width: 2px; background: var(--hi-titanium); opacity: .6; }
.tas { position: absolute; background: var(--hi-warm-offwhite); border-radius: 28px; }
"""


def ad4(fmt):
    reel = fmt == "reel"
    logo_top, kop_top, ks = (250, 340, 96) if reel else (72, 176, 104)
    col_top = kop_top + round(ks * 1.8) + (44 if reel else 64)
    col_h = 620 if reel else 690
    fs = 28 if reel else 30
    lab_s = 34 if reel else 38
    ph = 420 if reel else 470
    txt_top = col_top + col_h + (34 if reel else 54)
    ph_h = round(ph * 1.07)
    py = col_top + (col_h - ph_h) // 2 + 30
    _, pw = pair("sok_wit_vrij", 0, 0, ph)
    pl, _ = pair("sok_wit_vrij", 72 + (468 - pw) // 2, py, ph, shade=.9)
    _, pzw = pair("sok_zwart_vrij", 0, 0, ph)
    pz, _ = pair("sok_zwart_vrij", 556 + (452 - pzw) // 2, py, ph, shade=1)
    body = (f'<img class="logo" src="../bron/logo_lockup_wit.png" style="top:{logo_top}px">'
            f'<div class="kop" style="top:{kop_top}px;font-size:{ks}px">Een in de was.<br>Een in je tas.</div>'
            f'<div class="lijn" style="top:{col_top}px;height:{col_h}px"></div>'
            f'<div class="tas" style="left:556px;top:{col_top}px;width:452px;height:{col_h}px"></div>'
            f'<div class="lab" style="left:72px;width:456px;top:{col_top + 34}px;font-size:{lab_s}px;color:var(--hi-titanium)">In de was</div>'
            f'<div class="lab" style="left:556px;width:452px;top:{col_top + 34}px;font-size:{lab_s}px;color:var(--hi-black)">In je tas</div>'
            f'<div style="opacity:.42">{pl}</div>' + pz +
            f'<div class="sub" style="top:{txt_top}px;font-size:{fs}px">Elk paar dat je bestelt, krijg je er nog een bij.<br>'
            f'<span class="vol" style="font-weight:800">Gratis</span>, t/m maandag 30 november.</div>')
    return page(body, fmt, CSS4)


# ---------------------------------------------------------------- 5 Prijsladder
CSS5 = BASE_CSS + """
.ad { background: var(--hi-warm-offwhite); color: var(--hi-black); }
.kaart { position: absolute; left: 72px; width: 936px; background: var(--hi-black); color: var(--hi-white); border-radius: 28px; padding: 0 48px;
         box-shadow: 0 30px 60px rgba(0,0,0,.28); }
.kaart .los { display: flex; align-items: center; font-weight: 600; color: var(--hi-titanium); }
.kaart .los s { text-decoration-thickness: 3px; margin: 0 .35em; }
.kaart .kopje, .kaart .rij { display: grid; grid-template-columns: 1.05fr 1fr .95fr; align-items: center; }
.kaart .kopje span { font-weight: 700; color: var(--hi-titanium); text-transform: uppercase; letter-spacing: .02em; }
.kaart .kopje span:last-child, .kaart .rij :last-child { text-align: right; }
.kaart .rij { border-top: 2px solid rgba(255,255,255,.22); }
.kaart .rij span { font-weight: 700; }
.kaart .rij b { font-weight: 900; letter-spacing: -.03em; }
.pack3 { position: absolute; filter: drop-shadow(0 22px 22px rgba(0,0,0,.35)); }
"""


def ad5(fmt):
    reel = fmt == "reel"
    logo_top, kop_top, ks = (250, 340, 92) if reel else (72, 176, 112)
    sub_top = kop_top + round(ks * 1.8) + 20
    fs = 28 if reel else 30
    k_top = 690 if reel else 532
    los_h, kopje_h, rij_h = (78, 52, 120) if reel else (92, 60, 148)
    k_h = los_h + kopje_h + 3 * rij_h + 8
    ph = 390 if reel else 400
    pw = round(ph * 1400 / 1339)
    p_left, p_top = 1008 - pw, k_top - round(ph * (.9 if reel else .72))
    rows = [("1 paar", "2 paar", "€8,98", False), ("3-pack", "6 paar", "€7,49", True), ("5-pack", "10 paar", "€7,00", False)]
    sz = 38 if reel else 42
    bz = 56 if reel else 64
    rh = ''.join(f'<div class="rij" style="height:{rij_h}px"><span style="font-size:{sz}px">{a}</span><span style="font-size:{sz}px">{b}</span>'
                 f'<b class="{"vol" if v else ""}" style="font-size:{bz}px">{c}</b></div>' for a, b, c, v in rows)
    kaart = (f'<div class="kaart" style="top:{k_top}px;height:{k_h}px">'
             f'<div class="los" style="height:{los_h}px;font-size:{34 if reel else 38}px">Los<s>€17,95</s>per paar</div>'
             f'<div class="kopje" style="height:{kopje_h}px;font-size:26px"><span>Bestel</span><span>Je krijgt</span><span>Per paar</span></div>'
             + rh + '</div>')
    btn_top = k_top + k_h + (32 if reel else 36)
    body = (f'<img class="logo" src="../bron/logo_lockup_zwart.png" style="top:{logo_top}px">'
            f'<div class="kop" style="top:{kop_top}px;font-size:{ks}px">Prijs<br>per paar.</div>'
            f'<div class="sub" style="top:{sub_top}px;font-size:{fs}px">Alles dubbel t/m maandag 30-11.</div>'
            f'<img class="pack3" src="../bron/pack3_zwart.png" style="left:{p_left}px;top:{p_top}px;height:{ph}px">'
            + kaart +
            f'<div class="abs" style="left:72px;top:{btn_top}px"><span class="pill inv">Shop nu<i>{CHEV}</i></span></div>')
    return page(body, fmt, CSS5)


# ---------------------------------------------------------------- 6 Twee hangtags
CSS6 = BASE_CSS + """
.panel { position: absolute; left: 72px; width: 936px; background: var(--hi-warm-offwhite); border-radius: 28px; }
.tagwrap { position: absolute; filter: drop-shadow(0 22px 22px rgba(0,0,0,.35)); }
.tg { position: absolute; inset: 0; clip-path: polygon(0 56px, 56px 0, 100% 0, 100% 100%, 0 100%); }
.tg.nu { background: var(--hi-black); color: var(--hi-white); }
.tg.di { background: var(--hi-white); color: var(--hi-black); }
.tg .gat { position: absolute; left: 20px; top: 20px; width: 30px; height: 30px; border-radius: 50%; background: var(--hi-warm-offwhite); }
.tg .wan { position: absolute; left: 44px; font-weight: 800; text-transform: uppercase; }
.tg .pa { position: absolute; left: 44px; font-weight: 900; letter-spacing: -.03em; line-height: 1; text-transform: uppercase; }
.tg .pr2 { position: absolute; left: 44px; font-weight: 700; line-height: 1.2; }
.tg.di .wan, .tg.di .pr2 { color: #555; }
.string { position: absolute; left: 0; top: 0; width: 1080px; overflow: visible; }
"""


def ad6(fmt):
    reel = fmt == "reel"
    logo_top, kop_top, ks = (250, 340, 96) if reel else (72, 176, 116)
    sub_top = kop_top + round(ks * 1.8) + 24
    fs = 28 if reel else 30
    p_top, p_h = (650, 670) if reel else (560, 712)
    ph = 520 if reel else 600
    s_left, s_top = (96 if reel else 108), p_top + (50 if reel else 44)
    sw = round(ph * ASPECT["sok_zwart_vrij"])
    s = sock("sok_zwart_vrij", s_left, s_top, ph, rot=-3)
    tw, th1, th2 = (410, 238, 238) if reel else (440, 250, 250)
    tx = 580 if reel else 548
    t1y = p_top + (40 if reel else 40)
    t2y = t1y + th1 + (24 if reel else 26)
    cx, cy = s_left + sw * .80, s_top + ph * .05
    strings = ""
    for ty in (t1y, t2y):
        hx, hy = tx + 37, ty + 37
        strings += (f'<path d="M{cx:.0f} {cy:.0f} C {cx + 20:.0f} {cy + (hy - cy) * .55:.0f}, {hx - 90:.0f} {hy - 20:.0f}, {hx:.0f} {hy:.0f}" '
                    f'fill="none" stroke="#0A0A0A" stroke-width="4" stroke-linecap="round"/>')
    hh = 1920 if reel else 1350
    strings = (f'<svg class="string" height="{hh}" viewBox="0 0 1080 {hh}">{strings}'
               f'<circle cx="{cx:.0f}" cy="{cy:.0f}" r="9" fill="#0A0A0A"/></svg>')
    f1, f2, f3 = (28, 66, 28) if reel else (30, 74, 30)

    def tag(cls, y, h, wan, pa, pr):
        t0 = 56
        return (f'<div class="tagwrap" style="left:{tx}px;top:{y}px;width:{tw}px;height:{h}px"><div class="tg {cls}"><div class="gat"></div>'
                f'<div class="wan" style="top:{t0:.0f}px;font-size:{f1}px">{wan}</div>'
                f'<div class="pa" style="top:{t0 + f1 + 12:.0f}px;font-size:{f2}px">{pa}</div>'
                f'<div class="pr2" style="top:{t0 + f1 + f2 + 22:.0f}px;font-size:{f3}px">{pr}</div></div></div>')
    nu = tag("nu", t1y, th1, "Nu", "10 paar", "€69,95 · €7,00 per paar")
    di = tag("di", t2y, th2, "Dinsdag 1-12", "5 paar", "€69,95 · €13,99 per paar")
    btn_top = t2y + th2 + (30 if reel else 32)
    body = (f'<img class="logo" src="../bron/logo_lockup_wit.png" style="top:{logo_top}px">'
            f'<div class="kop" style="top:{kop_top}px;font-size:{ks}px">Nu <span class="vol">10 paar.</span><br>Dinsdag 5.</div>'
            f'<div class="sub" style="top:{sub_top}px;font-size:{fs}px">5-pack 2.0 · gratis verzending.<br>Aanbod t/m maandag 30 november.</div>'
            f'<div class="panel" style="top:{p_top}px;height:{p_h}px"></div>' + s + strings + nu + di +
            f'<div class="abs" style="left:{tx}px;top:{btn_top}px"><span class="pill inv">Shop nu<i>{CHEV}</i></span></div>')
    return page(body, fmt, CSS6)


ADS = {1: ("kalender", ad1), 2: ("teamregel", ad2), 3: ("tweede_paar", ad3), 4: ("was_en_tas", ad4), 5: ("prijsladder", ad5), 6: ("hangtags", ad6)}
SIZES = {"feed": (1080, 1350), "reel": (1080, 1920)}


def render(html, out, w, h):
    out.unlink(missing_ok=True)
    proc = subprocess.Popen([CHROME, "--headless=new", "--disable-gpu", "--no-first-run", "--hide-scrollbars",
                             "--force-device-scale-factor=2", "--virtual-time-budget=4000", "--allow-file-access-from-files",
                             f"--user-data-dir={tempfile.mkdtemp(prefix='agrender-')}",
                             f"--window-size={w},{h}", f"--screenshot={out}", html.as_uri()],
                            stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    for _ in range(90):
        time.sleep(.5)
        if out.exists() and out.stat().st_size > 0:
            time.sleep(1)
            break
    proc.kill()


if __name__ == "__main__":
    for nr in [int(a) for a in sys.argv[1:]] or ADS:
        concept, fn = ADS[nr]
        for fmt, (w, h) in SIZES.items():
            html = HERE / f"ag_{nr}_{concept}_{fmt}.html"
            html.write_text(fn(fmt), encoding="utf-8")
            out = PNG / f"ag_{nr}_{concept}_{fmt}.png"
            render(html, out, w, h)
            print(out.name, Image.open(out).size)
