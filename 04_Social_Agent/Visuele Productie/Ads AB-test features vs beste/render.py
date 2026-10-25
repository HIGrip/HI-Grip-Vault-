"""Render the 8 ads in ad.html to png/ with headless Chrome (python render.py [1A 2B ...])."""
import pathlib
import subprocess
import sys
import tempfile

CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
HERE = pathlib.Path(__file__).resolve().parent
IDS = sys.argv[1:] or ["1A", "1B", "2A", "2B", "3A", "3B", "4A", "4B"]

profile = tempfile.mkdtemp(prefix="adrender-")
for ad in IDS:
    height = 1920 if ad.startswith("3") else 1350
    out = HERE / "png" / f"{ad}.png"
    subprocess.run([
        CHROME, "--headless=new", "--disable-gpu", "--no-first-run", f"--user-data-dir={profile}",
        "--hide-scrollbars", "--force-device-scale-factor=1", "--virtual-time-budget=4000",
        f"--window-size=1080,{height}", f"--screenshot={out}",
        (HERE / "ad.html").as_uri() + f"?ad={ad}",
    ], capture_output=True, timeout=60)
    print(ad, out.stat().st_size if out.exists() else "MISSING")
