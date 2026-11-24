"""Render mail.html (A/B/C) naar full-length PNG: desktop 640 px (1x) en mobiel 375 px (2x). Alleen Chrome-preview, geen e-mailclient.
Gebruik: python render_v2_20261120.py <map met mail.html> <prefix> <fontsmap> [--standin]
--standin: vervangt plaatsmarkeringen door neutrale teststrings van realistische lengte (alleen voor aandachtstest en afbreken van de code)."""
import sys, re, pathlib
from playwright.sync_api import sync_playwright
args = [a for a in sys.argv[1:] if not a.startswith("--")]
base = pathlib.Path(args[0]).resolve(); prefix = args[1]; f = args[2].rstrip("/") + "/"
standin = "--standin" in sys.argv
def ff(w, st, fn): return "@font-face{font-family:'Poppins';font-weight:%d;font-style:%s;src:url('file:///%s%s');}" % (w, st, f, fn)
css = "".join([ff(900, "italic", "Poppins-BlackItalic.ttf"), ff(900, "normal", "Poppins-Black.ttf"), ff(600, "normal", "Poppins-SemiBold.ttf"),
               ff(700, "normal", "Poppins-SemiBold.ttf"), ff(400, "normal", "Poppins-Regular.ttf")])
html = (base / "mail.html").read_text(encoding="utf-8")
html = re.sub(r'<link href="https://fonts.googleapis.com[^>]*>', "", html)
html = html.replace("</head>", "<style>" + css + "</style></head>", 1)
if standin:
    M = {"kortingscode": "EARLY-XXXX", "voornaam": "Naam", "percentage of bedrag": "XX%", "einddatum": "dd-mm",
         "early-access-moment": "xxxx xxxxx xxxxxxxx xxxx xxxxx xxxxxxxxxx.",
         "extra informatie, 1 tot 3 punten": "xxxx xxxxxx xxxxx xxxx xxxxxxxx. xxxx xxxxx xxxxxxxxx xxxxx.",
         "voorwaarden": "xxxx xxxxxxxx xxxxx xxxxx xxxxxxxxx.", "code automatisch toegepast? ja/nee": "xxxxx xxxxxxxx xxxx."}
    for k, v in M.items():
        html = re.sub(r'<span class="hg-fill">\[INVUL: %s\]</span>' % re.escape(k), v, html)
tmp = base / "_render_tmp.html"; tmp.write_text(html, encoding="utf-8")
suffix = "-standin" if standin else ""
(base / "preview").mkdir(exist_ok=True)
with sync_playwright() as p:
    b = p.chromium.launch(channel="chrome")
    for name, w, scale in [("desktop", 640, 1), ("mobiel", 375, 2)]:
        pg = b.new_page(viewport={"width": w, "height": 900}, device_scale_factor=scale)
        pg.goto(tmp.as_uri()); pg.wait_for_timeout(900)
        out = base / "preview" / ("%s-%s%s.png" % (prefix, name, suffix))
        pg.screenshot(path=str(out), full_page=True); print(out.name, pg.evaluate("document.documentElement.scrollHeight"), "px hoog")
        pg.close()
    b.close()
tmp.unlink()
