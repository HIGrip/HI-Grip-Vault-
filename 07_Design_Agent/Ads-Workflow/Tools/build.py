"""Bouw ads v6 uit specs/ads.json + LAYOUT-tabel: python Tools/build.py [id ...] [--fmt 4x5|9x16] [--layout P|K|S|F] [-v]
Layout-klassen: P paneel-onder, K kop-boven op wit, S strip, F kader. Uitvoer out/<id>[_<layout>]_<fmt>.png (+ _notext, _rects.json, _check.txt)
Pilot (--layout) schrijft naar out/pilot/ met stem <id>-<L>_<fmt>."""
import sys, os, json, re, subprocess
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import tempfile
import config
from grade2 import grade
B = config.WORK; CH = config.chrome_path(); UD = tempfile.mkdtemp(prefix="chrome-ud-")
config.prepare_work()
spec = json.load(open(config.SPEC, encoding="utf-8"))
# compositie per ad (Design-keuze; per sport/formaat 4 verschillende klassen) + per-ad overrides
LAYOUT = {"vb-a-situatie": "P", "vb-b-sporters": "K", "vb-c-vergelijking": "S", "vb-d-top": "F",
          "rb-a-situatie": "S", "rb-b-sporters": "P", "rb-c-vergelijking": "F", "rb-d-top": "K"}
OPT = {"K": dict(kopmax=112), "F": dict(kopmax=124), "S": dict(kopmax=140), "P": dict(kopmax=150)}
OVR = {"rb-d-top": dict(bw=780, align="right"), "vb-b-sporters": dict(bw=936, align="left")}
args = sys.argv[1:]; fmts = ["4x5", "9x16"]; force = None
if "--fmt" in args:
    i = args.index("--fmt"); fmts = [args[i+1]]; del args[i:i+2]
if "--layout" in args:
    i = args.index("--layout"); force = args[i+1]; del args[i:i+2]
verbose = "-v" in args; ids = [a for a in args if a != "-v"]
HT = {"4x5": 1350, "9x16": 1920}; TOP = {"4x5": 72, "9x16": 250}; BOT = {"4x5": 72, "9x16": 340}
OUT = os.path.join(B, "out", "pilot") if force else os.path.join(B, "out")


def chrome(extra):
    return subprocess.run([CH, "--headless=new", "--disable-gpu", "--hide-scrollbars", "--force-device-scale-factor=1",
                           "--user-data-dir=" + UD, "--allow-file-access-from-files", "--virtual-time-budget=8000"] + extra,
                          capture_output=True, text=True, timeout=180)


def html(ad, fmt, img, L):
    o = dict(OPT[L]); o.update(OVR.get(ad["id"], {}) if not force else {})
    bw = o.get("bw", 936); al = o.get("align", "left")
    T = lambda l, c="": f'<span class="t{c}" data-m="kop">{l}</span>'
    k = ad["kop"]
    if L == "P":
        kop = f'<div class="panel" data-m="panel"><div class="kop" data-max="{o["kopmax"]}">{T(k[0])}{T(k[1])}</div></div>'
    elif L == "S":
        kop = f'<div class="kop" data-max="{o["kopmax"]}">{T(k[0])}<div class="band" data-m="panel">{T(k[1])}</div></div>'
    elif L == "K":
        kop = f'<div class="toppanel" data-m="panel"><div class="kop" data-max="{o["kopmax"]}">{T(k[0])}{T(k[1])}</div></div>'
    else:
        kop = f'<div class="kop" data-max="{o["kopmax"]}">{T(k[0])}{T(k[1])}</div>'
    proof = f'<p class="proof" data-m="proof">{spec["PROOF"]}</p>' if ad["proof"] else ""
    blk = f'<div class="block" data-m="block" data-max="112" data-bw="{bw}" data-align="{al}" data-bh="{1.75 if fmt == "4x5" else 2.05}"><span data-m="blocktxt">{ad["blok"]}</span></div>'
    inner = (kop + blk + proof) if L in "PS" else ((kop + blk + proof) if L == "F" else (blk + proof))
    ink = " ink" if L in "KF" else ""
    frame = '<div class="frame" data-m="frame"></div>' if L == "F" else ""
    top = kop if L == "K" else ""
    return f'''<!doctype html>
<html lang="nl"><head><meta charset="utf-8"><title>HÏ Grip {ad["id"]} {fmt}</title>
<link rel="stylesheet" href="ads-v6.css"><style>:root{{--h:{HT[fmt]}px;--top:{TOP[fmt]}px;--bot:{BOT[fmt]}px}}</style></head>
<body data-layout="{L}" class="layout-{L}"><div class="ad">
<img class="photo" src="../img/{img}" alt="{ad["alt"]}">
{frame}{top}
<img class="logo{ink}" data-m="logo" src="../img/wordmark-wit.png" alt="HÏ GRIP">
<div class="stack">
{inner if L != "K" else inner}
</div></div>
<script src="fit.js"></script></body></html>'''


def render(stem, fmt):
    url = "file:///" + os.path.join(B, "src", stem + ".html").replace("\\", "/")
    out = os.path.join(OUT, stem)
    chrome([f"--window-size=1080,{HT[fmt]}", "--screenshot=" + out + ".png", url])
    chrome([f"--window-size=1080,{HT[fmt]}", "--screenshot=" + out + "_notext.png", url + "?notext"])
    r = chrome([f"--window-size=1080,{HT[fmt]}", "--dump-dom", url])
    m = re.search(r"<title>RECTS(.*?)</title>", r.stdout, re.S)
    if not m:
        print("GEEN rects (fit.js?)", stem); return None
    open(out + "_rects.json", "w", encoding="utf-8").write(m.group(1)); return json.loads(m.group(1))


os.makedirs(OUT, exist_ok=True)
for ad in spec["ads"]:
    if ids and ad["id"] not in ids:
        continue
    L = force or LAYOUT[ad["id"]]
    for fmt in fmts:
        stem = f'{ad["id"]}-{L}_{fmt}' if force else f'{ad["id"]}_{fmt}'; img = stem + ".jpg"; ip = os.path.join(B, "img", img)
        src = os.path.join(config.MEDIA_ROOT, *spec["foto_" + ad["dir"]].split("/"), ad["src"])
        if not os.path.exists(src):
            sys.exit(f"Bronfoto ontbreekt: {src} (controleer HIGRIP_MEDIA_ROOT)")
        p = ad["foto"]
        tt, tb = p["target"][fmt]; span = tb - tt; H = HT[fmt]; top0 = 0.0 if L in "KF" else 0.55

        def g(gs, ge, t0, t1):
            grade(src, ip, fmt, p["hero"], [t0, t1], gs, ge, top=top0)
        g(0.45, 0.80, tt, tb)
        open(os.path.join(B, "src", stem + ".html"), "w", encoding="utf-8").write(html(ad, fmt, img, L))
        d = render(stem, fmt)
        if not d:
            continue
        R = d["rects"]; get = lambda m: [r for r in R if r["m"] == m]
        kt = min(r["y"] for r in get("kop")); blk = get("block")[0]; bt = blk["y"]
        if L == "P":
            pt = get("panel")[0]["y"] / H; gs, ge = max(0.2, pt - 0.22), pt; n0 = min(tt, pt - 0.03 - span); n1 = n0 + span
        elif L == "K":
            pn = get("panel")[0]; pb = (pn["y"] + pn["h"]) / H; n0 = pb + 0.03; n1 = min(n0 + span*0.95, bt/H - 0.04)
            n0 = n1 - span*0.95 if n1 - n0 < span*0.95 else n0; gs, ge = max(0.2, bt/H - 0.08), bt/H
        elif L == "F":
            fr = get("frame")[0]; fb = (fr["y"] + fr["h"]) / H; barb = (TOP[fmt] + 96) / H
            n0 = barb + 0.03; n1 = min(n0 + span*0.95, fb - 0.03); n0 = n1 - span*0.95 if n1 - n0 < span*0.95 else n0
            gs, ge = fb - 0.07, fb + 0.04
        else:
            n0, n1 = tt, tb; gs = max(0.20, kt/H - 0.20); ge = min(0.95, bt/H + 0.02)
        g(gs, ge, n0, n1)
        d = render(stem, fmt)
        print(f"{stem} [{L}]: hero {n0:.2f}-{n1:.2f}, gradient {gs:.2f}->{ge:.2f}")
        r = subprocess.run([sys.executable, os.path.join(config.TOOLS, "check.py"), stem, OUT], capture_output=True, text=True)
        open(os.path.join(OUT, stem + "_check.txt"), "w", encoding="utf-8").write(r.stdout)
        print(r.stdout.strip() if verbose else (r.stdout.strip().splitlines()[-1] if r.stdout.strip() else r.stderr[-300:]))
