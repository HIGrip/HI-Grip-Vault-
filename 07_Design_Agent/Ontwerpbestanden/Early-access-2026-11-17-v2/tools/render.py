"""Bouwt de v2-galerij: kopieert HTML + assets naar de uitvoermap, bouwt beeldafgeleiden, rendert desktop (640) en mobiel (375).

Gebruik:  python render.py <uitvoermap> [id ...]
Bron voor beeld: HIGRIP_MEDIA_ROOT (default ~/HiGripMedia). Chrome: CHROME_PATH of standaard Windows-pad.
Elke mail wordt in een iframe van exact 375 of 640 px gerenderd (headless Chrome kent een minimale venster-
breedte van ~500 px), daarna bijgesneden. Uitvoer: <uitvoermap>/shots/<id>-640.png en -375.png, metrics.json
"""
import os, sys, json, shutil, subprocess, re, tempfile
from pathlib import Path
from PIL import Image

HERE = Path(__file__).resolve().parent.parent
OUT = Path(sys.argv[1]); OUT.mkdir(parents=True, exist_ok=True)
CHROME = os.environ.get("CHROME_PATH", r"C:\Program Files\Google\Chrome\Application\chrome.exe")
IDS = [i for i in ["a1", "a2", "a3", "c1", "c2", "c3"] if (HERE / f"{i}.html").exists()]
if len(sys.argv) > 2: IDS = sys.argv[2:]

for sub in ["ea.css", "fonts", "logo"]:
    s = HERE / "assets" / sub; d = OUT / "assets" / sub
    if s.is_dir(): shutil.copytree(s, d, dirs_exist_ok=True)
    else: d.parent.mkdir(parents=True, exist_ok=True); shutil.copy2(s, d)
subprocess.run([sys.executable, str(HERE / "tools" / "make_assets.py"), str(OUT / "assets" / "img")], check=True, capture_output=True)

WRAP = """<!DOCTYPE html><html><body style="margin:0;background:#888"><iframe id="f" src="%(src)s" width="%(w)d" height="%(h)d" style="border:0;display:block"></iframe>
<script>
const f=document.getElementById('f');
f.addEventListener('load',()=>setTimeout(()=>{try{const d=f.contentDocument;const m=d.querySelector('.mail');const r=m.getBoundingClientRect();
const out={h:Math.ceil(r.height),w:Math.round(r.width),over:[],broken:[],small:[]};
m.querySelectorAll('*').forEach(e=>{const b=e.getBoundingClientRect();const cs=f.contentWindow.getComputedStyle(e);
 if(e.matches('.hook,.big,.code,.benefit,.codebig')&&(b.right>r.right+1||b.left<r.left-1))out.over.push((e.className||e.tagName)+':'+Math.round(b.left-r.left)+'..'+Math.round(b.right-r.left));
 if(e.tagName=='IMG'&&(!e.complete||e.naturalWidth==0))out.broken.push(e.getAttribute('src'));
 if(e.children.length==0&&e.textContent.trim()&&parseFloat(cs.fontSize)<11.9)out.small.push(e.textContent.trim().slice(0,30)+':'+cs.fontSize);});
out.overlap=[];const prod=[...m.querySelectorAll('img.shadow,img[class*=pack],img[class*=sock]')];
prod.forEach(p=>{const pb=p.getBoundingClientRect();m.querySelectorAll('.hook').forEach(h=>{const hb=h.getBoundingClientRect();
 const iw=Math.max(0,Math.min(pb.right,hb.right)-Math.max(pb.left,hb.left)),ih=Math.max(0,Math.min(pb.bottom,hb.bottom)-Math.max(pb.top,hb.top));
 if(iw*ih>0)out.overlap.push(p.className.split(' ')[0]+'x'+h.textContent.trim()+':'+Math.round(100*iw*ih/(hb.width*hb.height))+'%%');});});
document.title='M'+JSON.stringify(out);}catch(x){document.title='M{"err":"'+x+'"}'}},1500));
</script></body></html>"""

def chrome(args):
    ud = tempfile.mkdtemp(prefix="eav2_")
    return subprocess.run([CHROME, "--headless=new", "--disable-gpu", "--hide-scrollbars", "--allow-file-access-from-files",
                           f"--user-data-dir={ud}", "--force-device-scale-factor=1", "--virtual-time-budget=8000", *args],
                          capture_output=True, text=True, timeout=180)

shots = OUT / "shots"; shots.mkdir(exist_ok=True)
metrics = {}
for i in IDS:
    shutil.copy2(HERE / f"{i}.html", OUT / f"{i}.html")
    for w in (640, 375):
        wp = OUT / f"_wrap_{i}.html"
        wp.write_text(WRAP % {"src": f"{i}.html", "w": w, "h": 3200}, encoding="utf-8")
        r = chrome([f"--window-size={w+40},3300", "--dump-dom", wp.as_uri()])
        mm = re.search(r"<title>M(\{.*?\})</title>", r.stdout, re.S)
        met = json.loads(mm.group(1)) if mm else {"err": "geen metrics"}
        metrics[f"{i}-{w}"] = met
        h = met.get("h", 2400)
        wp.write_text(WRAP % {"src": f"{i}.html", "w": w, "h": h}, encoding="utf-8")
        tmp = shots / f"_{i}-{w}.png"
        chrome([f"--window-size={w+40},{h+60}", f"--screenshot={tmp}", wp.as_uri()])
        im = Image.open(tmp); im.crop((0, 0, w, h)).save(shots / f"{i}-{w}.png"); tmp.unlink()
        wp.unlink()
(OUT / "metrics.json").write_text(json.dumps(metrics, indent=1, ensure_ascii=False), encoding="utf-8")
print(json.dumps(metrics, ensure_ascii=False))
