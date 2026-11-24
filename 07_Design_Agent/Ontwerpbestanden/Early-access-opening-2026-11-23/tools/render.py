"""Render (v2: previews met -v2; --noimg = beelden geblokkeerd) mail.html naar PNG (desktop 640/700 breed, mobiel 375). Playwright + lokale Chrome. Preview-only: Poppins lokaal geïnjecteerd.
Gebruik: python render.py <map met mail.html> [--standin]   (--standin: vervangt de codeplaatsmarkering door een stand-in van 10 tekens, alleen om breken te testen)
"""
import sys, os, re, pathlib
from playwright.sync_api import sync_playwright
base = pathlib.Path(sys.argv[1]); standin = "--standin" in sys.argv; noimg = "--noimg" in sys.argv
vault = os.environ.get("HIGRIP_VAULT", "C:/Users/lars/Documents/ObsidianVault")
f = vault + "/07_Design_Agent/Email-Workflow/Fonts/"
css = ("@font-face{font-family:'Poppins';font-weight:900;font-style:italic;src:url('file:///%sPoppins-BlackItalic.ttf');}"
       "@font-face{font-family:'Poppins';font-weight:900;font-style:normal;src:url('file:///%sPoppins-Black.ttf');}"
       "@font-face{font-family:'Poppins';font-weight:600;src:url('file:///%sPoppins-SemiBold.ttf');}"
       "@font-face{font-family:'Poppins';font-weight:700;src:url('file:///%sPoppins-SemiBold.ttf');}"
       "@font-face{font-family:'Poppins';font-weight:400;src:url('file:///%sPoppins-SemiBold.ttf');}") % ((f,) * 5)
html = (base / "mail.html").read_text(encoding="utf-8")
html = html.replace('<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;1,900&display=swap" rel="stylesheet">', "")
html = html.replace("</head>", "<style>" + css + "</style></head>", 1)
if standin: html = html.replace("[INVUL: kortingscode]", "EARLY-7KQ2")
tmp = base / ("_render_tmp.html"); tmp.write_text(html, encoding="utf-8")
suffix = "-v2" + ("-standin" if standin else "") + ("-zonderbeeld" if noimg else "")
with sync_playwright() as p:
    b = p.chromium.launch(channel="chrome")
    for name, w, scale in [("desktop", 700, 1), ("mobiel", 375, 2)]:
        pg = b.new_page(viewport={"width": w, "height": 900}, device_scale_factor=scale)
        if noimg: pg.route("**/*", lambda r: r.abort() if r.request.resource_type == "image" else r.continue_())
        pg.goto(tmp.as_uri()); pg.wait_for_timeout(700)
        out = base / "preview" / ("mail-%s%s.png" % (name, suffix))
        pg.screenshot(path=str(out), full_page=True); print(out.name, pg.evaluate("document.documentElement.scrollHeight"), "px hoog")
        pg.close()
    b.close()
tmp.unlink()
