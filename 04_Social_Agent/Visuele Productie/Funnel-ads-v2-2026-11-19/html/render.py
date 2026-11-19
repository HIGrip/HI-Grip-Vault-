"""Rendert doorgestreept.html en vergelijking.html naar ../png/ (1080 x 1350) met headless Chrome.
Chrome blijft soms hangen na de screenshot, dus wachten we op het bestand en sluiten hem dan zelf."""
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

for name in sys.argv[1:] or ("doorgestreept", "vergelijking"):
    out = PNG / f"funnel_v2_{name}_4x5.png"
    out.unlink(missing_ok=True)
    proc = subprocess.Popen([CHROME, "--headless=new", "--disable-gpu", "--no-first-run", "--hide-scrollbars",
                             "--force-device-scale-factor=1", "--virtual-time-budget=4000", "--allow-file-access-from-files",
                             f"--user-data-dir={tempfile.mkdtemp(prefix='adrender-')}",
                             "--window-size=1080,1350", f"--screenshot={out}", (HERE / f"{name}.html").as_uri()],
                            stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    for _ in range(90):
        time.sleep(.5)
        if out.exists() and out.stat().st_size > 0:
            time.sleep(1)
            break
    proc.kill()
    print(name, Image.open(out).size)
