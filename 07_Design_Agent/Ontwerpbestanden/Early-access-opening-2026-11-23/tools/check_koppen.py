import pathlib, sys
from playwright.sync_api import sync_playwright
base = pathlib.Path(sys.argv[1])
tmp = base / "_render_tmp.html"  # laatst gerenderde variant (met lokale fonts)
JS = """() => {
 const out = {};
 for (const sel of ['.hg-h1', '.hg-h2']) {
  const el = document.querySelector(sel); const td = el.parentElement;
  const r = document.createRange(); r.selectNodeContents(el);
  const rects = [...r.getClientRects()].map(x => Math.round(x.right));
  const cs = getComputedStyle(td);
  const inner = td.getBoundingClientRect().right - parseFloat(cs.paddingRight);
  out[sel] = {maxRight: Math.max(...rects), innerRight: Math.round(inner), lines: Math.round(el.getBoundingClientRect().height / parseFloat(getComputedStyle(el).lineHeight)), font: getComputedStyle(el).fontFamily.slice(0,30)};
 }
 out.fonts = [...document.fonts].filter(f => f.status === 'loaded').map(f => f.family + f.weight + f.style).join(',');
 return out; }"""
html = pathlib.Path(sys.argv[2]).read_text(encoding="utf-8")
f = "C:/Users/lars/Documents/ObsidianVault/07_Design_Agent/Email-Workflow/Fonts/"
css = ("@font-face{font-family:'Poppins';font-weight:900;font-style:italic;src:url('file:///%sPoppins-BlackItalic.ttf');}"
       "@font-face{font-family:'Poppins';font-weight:600;src:url('file:///%sPoppins-SemiBold.ttf');}") % (f, f)
html = html.replace("</head>", "<style>" + css + "</style></head>", 1)
tmp.write_text(html, encoding="utf-8")
with sync_playwright() as p:
    b = p.chromium.launch(channel="chrome")
    for w in (700, 375, 320):
        pg = b.new_page(viewport={"width": w, "height": 900})
        pg.goto(tmp.as_uri()); pg.wait_for_timeout(600)
        print(w, pg.evaluate(JS)); pg.close()
    b.close()
tmp.unlink()
