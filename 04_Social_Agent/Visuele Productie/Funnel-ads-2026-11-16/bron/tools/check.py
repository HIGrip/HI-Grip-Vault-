"""Render .dc.html artboards locally with headless Chrome and measure them.

python -I check.py <out_dir> <artboard.dc.html> [...]
- maps /_blob/<id> to the local source files (BLOBS below)
- screenshot -> <out_dir>/<name>.png at 1080x1350 (or $preview size)
- DOM report -> every text box: rect, font, lines; flags text outside the 72 px safe margin,
  clipped text (scroll > client), and whether Poppins actually loaded.
"""
import json, pathlib, re, subprocess, sys, tempfile, html as H

CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
SRC = pathlib.Path(r"C:/Users/Test/Werk/HI-Grip-Vault-/04_Social_Agent/Visuele Productie/Losse-ads-2026-11-15/bron")
BLOBS = {
    "fda1d877a6f4e53b46d1846880536316": r"C:/Users/Test/Werk/HI-Grip-Vault-/04_Social_Agent/Visuele Productie/Losse-ads-2026-11-15/bron/logo_mark_wit.png",
    "ca9b562f04354672820ddb842bd4599d": r"C:/Users/Test/Werk/HI-Grip-Vault-/04_Social_Agent/Visuele Productie/Losse-ads-2026-11-15/bron/logo_mark_zwart.png",
    "152daa292cd91e183fd3f919884de9b4": r"C:/Users/Test/Werk/HI-Grip-Vault-/04_Social_Agent/Visuele Productie/Losse-ads-2026-11-15/bron/v_sok_wit_vrij.png",
    "cda9da212b73671a5acfff17a8b436cd": r"C:/Users/Test/Werk/HI-Grip-Vault-/04_Social_Agent/Visuele Productie/Losse-ads-2026-11-15/bron/r_sok_vrij.png",
    "52ec37943180d61f6696208e44623ca2": r"C:/Users/Test/AppData/Local/Temp/claude/6c22fe3d3837b867/e1bac10f-931d-4d70-a6fb-32591bdce5fc/scratchpad/layers/v9_bg.jpg",
    "0afb13e6779736a8fd332bcf583832dd": r"C:/Users/Test/AppData/Local/Temp/claude/6c22fe3d3837b867/e1bac10f-931d-4d70-a6fb-32591bdce5fc/scratchpad/layers/pack3_wit.png",
    "a3e9f7fcfab2f5bc5ee5bab54f829088": r"C:/Users/Test/AppData/Local/Temp/claude/6c22fe3d3837b867/e1bac10f-931d-4d70-a6fb-32591bdce5fc/scratchpad/layers/pack3_zwart.png",
}
MARGIN = 72

PROBE = r"""
<script>
window.addEventListener('load', async () => {
  await document.fonts.ready;
  await new Promise(r => setTimeout(r, 300));
  const W = document.documentElement.dataset.w|0, Hh = document.documentElement.dataset.h|0, M = %d;
  const out = {fonts: {}, boxes: [], flags: []};
  for (const f of ['400 20px Poppins','500 20px Poppins','700 20px Poppins','800 20px Poppins','900 20px Poppins','italic 900 20px Poppins','300 20px Poppins','italic 300 20px Poppins'])
    out.fonts[f] = document.fonts.check(f);
  const all = document.querySelectorAll('body *');
  for (const el of all) {
    const own = [...el.childNodes].filter(n => n.nodeType === 3 && n.textContent.trim()).map(n => n.textContent.trim()).join(' ');
    if (!own) continue;
    const range = document.createRange(); range.selectNodeContents(el);
    const rects = [...range.getClientRects()].filter(r => r.width > 0.5);
    if (!rects.length) continue;
    const l = Math.min(...rects.map(r => r.left)), r = Math.max(...rects.map(r => r.right));
    const t = Math.min(...rects.map(r => r.top)), b = Math.max(...rects.map(r => r.bottom));
    const cs = getComputedStyle(el);
    const lines = new Set(rects.map(x => Math.round(x.top))).size;
    const box = {text: own.slice(0, 60), l: +l.toFixed(1), r: +r.toFixed(1), t: +t.toFixed(1), b: +b.toFixed(1),
      font: cs.fontWeight + ' ' + cs.fontStyle + ' ' + cs.fontSize + ' ' + cs.fontFamily.split(',')[0], lines};
    out.boxes.push(box);
    const rot = el.closest('[data-rot]');
    const tol = parseFloat(cs.fontSize) * 0.28;
    if (!rot && (l < M - 0.5 || r > W - M + 0.5 || t < M - tol || b > Hh - M + tol)) out.flags.push('MARGIN ' + JSON.stringify(box));
    if (el.scrollWidth > el.clientWidth + 1 && cs.overflow !== 'visible') out.flags.push('CLIP-X ' + own.slice(0, 40));
  }
  const pre = document.createElement('pre'); pre.id = 'report'; pre.textContent = JSON.stringify(out);
  document.body.appendChild(pre); pre.style.display = 'none';
});
</script>
""" % MARGIN


def build(src: pathlib.Path, work: pathlib.Path):
    s = src.read_text(encoding="utf-8")
    m = re.search(r'data-props=\'(.*?)\'', s, re.S)
    props = json.loads(H.unescape(m.group(1))) if m else {}
    w, h = props.get("$preview", {}).get("width", 1080), props.get("$preview", {}).get("height", 1350)
    helmet = re.search(r"<helmet>(.*?)</helmet>", s, re.S).group(1)
    body = re.search(r"</helmet>(.*?)</x-dc>", s, re.S).group(1)
    for bid, fn in BLOBS.items():
        uri = (SRC / fn).as_uri()
        helmet = helmet.replace(f"/_blob/{bid}", uri); body = body.replace(f"/_blob/{bid}", uri)
    ads6 = pathlib.Path(__file__).resolve().parent.parent / "ads6"
    for fn in sorted({m for m in re.findall(r"/_blob/([A-Za-z][\w.-]*\.(?:jpg|png))", body + helmet)}):
        uri = (ads6 / fn).as_uri()
        helmet = helmet.replace(f"/_blob/{fn}", uri); body = body.replace(f"/_blob/{fn}", uri)
    left = re.findall(r"/_blob/[0-9a-f]+", body + helmet)
    page = (f'<!doctype html><html lang="nl" data-w="{w}" data-h="{h}"><head><meta charset="utf-8">{helmet}'
            f'<style>html,body{{margin:0;width:{w}px;height:{h}px;overflow:hidden}}</style></head>'
            f'<body>{body}{PROBE}</body></html>')
    out = work / (src.name.replace(".dc.html", "") + ".preview.html")
    out.write_text(page, encoding="utf-8")
    return out, w, h, left


def chrome(args):
    prof = tempfile.mkdtemp(prefix="dccheck-")
    base = [CHROME, "--headless=new", "--disable-gpu", "--no-first-run", "--hide-scrollbars",
            "--force-device-scale-factor=1", "--allow-file-access-from-files", f"--user-data-dir={prof}",
            "--virtual-time-budget=8000"]
    return subprocess.run(base + args, capture_output=True, timeout=90)


def main():
    out_dir = pathlib.Path(sys.argv[1]); out_dir.mkdir(parents=True, exist_ok=True)
    for a in sys.argv[2:]:
        src = pathlib.Path(a)
        page, w, h, left = build(src, out_dir)
        png = out_dir / (src.name.replace(".dc.html", "") + ".png")
        chrome([f"--window-size={w},{h}", f"--screenshot={png}", page.as_uri()])
        dom = chrome([f"--window-size={w},{h}", "--dump-dom", page.as_uri()]).stdout.decode("utf-8", "replace")
        m = re.search(r'<pre id="report"[^>]*>(.*?)</pre>', dom, re.S)
        print("=" * 70); print(src.name, f"{w}x{h}", "->", png.name)
        if left: print("  UNMAPPED BLOBS:", left)
        if not m: print("  NO REPORT (render failed?)"); continue
        rep = json.loads(H.unescape(m.group(1)))
        bad = [k for k, v in rep["fonts"].items() if not v]
        print("  fonts:", "OK" if not bad else "MISSING " + ", ".join(bad))
        for b in rep["boxes"]:
            print(f"  [{b['l']:7.1f} {b['r']:7.1f}] y[{b['t']:7.1f} {b['b']:7.1f}] {b['lines']}L {b['font']:<32} {b['text']}")
        for f in rep["flags"]: print("  !!", f)


if __name__ == "__main__":
    main()
