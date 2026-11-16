"""Gedeelde instellingen voor de ads-tools. Geen vaste computerpaden: alles via omgevingsvariabelen of standaardwaarden.

Omgevingsvariabelen (allemaal optioneel):
  HIGRIP_MEDIA_ROOT  map met de lokale kopie van de gedeelde Drive (HiGripMedia). Standaard: <thuismap>/HiGripMedia
                     De bronfoto's staan hier onder 'Content - HÏ Grip/Sporten/VOETBAL|RUGBY/' (zie ads.json en Foto-index.md).
  ADS_WORK           werkmap voor tussenbeelden en uitvoer (img/, src/, out/, fonts/). Standaard: <MEDIA_ROOT>/_Output/design/ads-work
                     Moet BUITEN de vault liggen (geen PNG/JPG in de vault).
  CHROME_PATH        pad naar Chrome of Edge. Standaard: automatisch zoeken (Windows, macOS, Linux).
Vereist: Python 3.10+ met Pillow en NumPy (pip install pillow numpy), Chrome of Edge.
"""
import os, sys, shutil

TOOLS = os.path.dirname(os.path.abspath(__file__))
HOME = os.path.dirname(TOOLS)                      # = map Ads-Workflow
MEDIA_ROOT = os.environ.get("HIGRIP_MEDIA_ROOT") or os.path.join(os.path.expanduser("~"), "HiGripMedia")
WORK = os.environ.get("ADS_WORK") or os.path.join(MEDIA_ROOT, "_Output", "design", "ads-work")
FONTS_SRC = os.path.join(HOME, "Fonts")
CSS_SRC = os.path.join(TOOLS, "src")
WORDMARK = os.path.join(TOOLS, "assets", "wordmark-wit.png")
SPEC = os.path.join(TOOLS, "ads.json")


def chrome_path():
    p = os.environ.get("CHROME_PATH")
    if p and os.path.exists(p):
        return p
    kand = [os.path.join(os.environ.get(v, ""), r"Google\Chrome\Application\chrome.exe") for v in ("ProgramFiles", "ProgramFiles(x86)", "LOCALAPPDATA")]
    kand += [os.path.join(os.environ.get(v, ""), r"Microsoft\Edge\Application\msedge.exe") for v in ("ProgramFiles(x86)", "ProgramFiles")]
    kand += ["/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"]
    for n in ("google-chrome", "chromium", "chromium-browser", "chrome", "msedge"):
        w = shutil.which(n)
        if w:
            kand.append(w)
    for k in kand:
        if k and os.path.exists(k):
            return k
    sys.exit("Chrome/Edge niet gevonden: zet CHROME_PATH.")


def prepare_work():
    """Maak de werkmap en kopieer lettertypen, CSS, fit.js en logo erheen (HTML verwijst relatief: ../fonts, ../img)."""
    for d in ("img", "src", "out", "fonts"):
        os.makedirs(os.path.join(WORK, d), exist_ok=True)
    for f in os.listdir(FONTS_SRC):
        if f.endswith(".ttf"):
            shutil.copy2(os.path.join(FONTS_SRC, f), os.path.join(WORK, "fonts", f))
    for f in os.listdir(CSS_SRC):
        shutil.copy2(os.path.join(CSS_SRC, f), os.path.join(WORK, "src", f))
    shutil.copy2(WORDMARK, os.path.join(WORK, "img", "wordmark-wit.png"))
