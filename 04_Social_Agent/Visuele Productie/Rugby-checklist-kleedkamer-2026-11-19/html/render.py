"""Rendert ad.html naar ../png/rugby_checklist_kleedkamer_<formaat>.png met headless Chrome."""
import pathlib
import subprocess
import tempfile

from PIL import Image

CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
HERE = pathlib.Path(__file__).resolve().parent
PNG = HERE.parent / "png"
PNG.mkdir(exist_ok=True)
SIZES = {"4x5": (1080, 1350), "9x16": (1080, 1920)}

for fmt, (w, h) in SIZES.items():
    out = PNG / f"rugby_checklist_kleedkamer_{fmt}.png"
    url = (HERE / "ad.html").as_uri() + f"?f={fmt}"
    subprocess.run([CHROME, "--headless=new", "--disable-gpu", "--no-first-run", "--hide-scrollbars",
                    "--force-device-scale-factor=1", "--virtual-time-budget=5000", "--allow-file-access-from-files",
                    f"--user-data-dir={tempfile.mkdtemp(prefix='adrender-')}",
                    f"--window-size={w},{h}", f"--screenshot={out}", url], capture_output=True, timeout=60)
    print(fmt, Image.open(out).size)
