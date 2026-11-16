"""Rendert de 16 ads naar ../png/<id>_<formaat>.png met headless Chrome (python -I render.py [id ...] [--alt]).

Per ad twee Chrome-runs: een screenshot en een DOM-dump met het controlerapport uit ad.html
(autofit-groottes, regelaantallen, safe zone, overlap). Daarna controleert PIL de afmetingen.
"""
import json
import pathlib
import re
import subprocess
import sys
import tempfile
from html import unescape

from PIL import Image

CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
HERE = pathlib.Path(__file__).resolve().parent
PNG = HERE.parent / "png"
PNG.mkdir(exist_ok=True)
SIZES = {"4x5": (1080, 1350), "9x16": (1080, 1920)}
ALL = [f"{s}_{h}" for s in ("voetbal", "rugby") for h in ("probleem", "klantwoord", "aanbod", "vergelijking")]

args = [a for a in sys.argv[1:] if not a.startswith("--")]
alt = "--alt" in sys.argv
ids = args or ALL
base = ["--headless=new", "--disable-gpu", "--no-first-run", "--hide-scrollbars",
        "--force-device-scale-factor=1", "--virtual-time-budget=6000", "--allow-file-access-from-files"]


def chrome(extra, tries=3):
    """Chrome hangt soms; elke poging krijgt een eigen profiel en een korte time-out."""
    for _ in range(tries):
        profile = tempfile.mkdtemp(prefix="adrender-")
        try:
            return subprocess.run([CHROME, *base, f"--user-data-dir={profile}", *extra], capture_output=True, timeout=40)
        except subprocess.TimeoutExpired:
            continue
    raise RuntimeError("Chrome time-out: " + " ".join(extra[-1:]))


reports = {}
bad = 0
for ad in ids:
    for fmt, (w, h) in SIZES.items():
        query = f"?ad={ad}&f={fmt}" + ("&foto=orig" if alt else "")
        url = (HERE / "ad.html").as_uri() + query
        out = (PNG / "alternatief" if alt else PNG) / f"{ad}_{fmt}.png"
        out.parent.mkdir(exist_ok=True)
        chrome([f"--window-size={w},{h}", f"--screenshot={out}", url])
        dom = chrome([f"--window-size={w},{h}", "--dump-dom", url]).stdout.decode("utf-8", "replace")
        m = re.search(r'<pre id="report"[^>]*>(.*?)</pre>', dom, re.S)
        rep = json.loads(unescape(m.group(1))) if m and m.group(1).strip() else None
        reports[f"{ad}_{fmt}"] = rep
        size = Image.open(out).size if out.exists() else None
        ok = size == (w, h)
        bad += not ok
        warns = rep["warnings"] if rep else ["GEEN RAPPORT (ad niet gerenderd?)"]
        kop = {k: v["final"] for k, v in rep["kop"].items()} if rep else {}
        print(f"{ad}_{fmt}: {size} {'OK' if ok else 'FOUT'} kop={kop} {warns if warns else ''}")
rap = HERE / "render_rapport.json"
oud = json.loads(rap.read_text(encoding="utf-8")) if rap.exists() and not alt else {}
oud.update(reports)
if not alt:
    rap.write_text(json.dumps(oud, indent=1, ensure_ascii=False), encoding="utf-8")
print("maatfouten:", bad)
