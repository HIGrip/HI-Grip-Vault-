"""PASS/FAIL per ad (PIL + rects).  python check.py <stem> [map]   (stem = <id>_<4x5|9x16>)
          python check.py --set [map]   variatie over de hele set (R16)
Regels staan hier een keer; WORKFLOW.md verwijst ernaar."""
import sys, json, glob, os, collections
import numpy as np
from PIL import Image
import config
B = config.WORK
if sys.argv[1] == "--set":
    D = sys.argv[2] if len(sys.argv) > 2 else os.path.join(B, "out"); grp = collections.defaultdict(list); ok = True
    for f in sorted(glob.glob(os.path.join(D, "*_rects.json"))):
        st = os.path.basename(f)[:-11]; d = json.load(open(f, encoding="utf-8")); fmt = st.rsplit("_", 1)[1]; sport = st[:2]
        grp[(sport, fmt)].append((st, d["layout"]))
    for k, v in sorted(grp.items()):
        c = collections.Counter(l for _, l in v); worst = max(c.values()); good = worst <= 2
        ok &= good; print(f"{'PASS' if good else 'FAIL'}  R16 variatie {k[0]} {k[1]}: klassen {dict(c)} (max {worst} gelijk, toegestaan 2; doel: allemaal verschillend)")
    print("SET OK" if ok else "SET FAIL"); sys.exit(0)
n = sys.argv[1]; B = sys.argv[2] if len(sys.argv) > 2 else os.path.join(B, "out")
fmt = n.rsplit("_", 1)[1]
a = np.asarray(Image.open(os.path.join(B, n + ".png")).convert("RGB")).astype(float); H, W = a.shape[:2]
nt = np.asarray(Image.open(os.path.join(B, n + "_notext.png")).convert("RGB")).astype(float)
J = json.load(open(os.path.join(B, n + "_rects.json"), encoding="utf-8")); R = J["rects"]; LAY = J["layout"]; AL = J["align"]; BW = float(J["bw"])
M = 72; TOPMIN = 72 if fmt == "4x5" else 250; BOTMIN = 72 if fmt == "4x5" else 340


def lum(c):
    c = np.asarray(c, float)/255
    c = np.where(c <= .03928, c/12.92, ((c+.055)/1.055)**2.4)
    return .2126*c[..., 0]+.7152*c[..., 1]+.0722*c[..., 2]


volt = (abs(a[..., 0]-204) < 40) & (a[..., 1] > 215) & (a[..., 2] < 70)
res = []


def rule(name, ok, val):
    res.append(ok); print(f"{'PASS' if ok else 'FAIL'}  {name}: {val}")


kop = [r for r in R if r["m"] == "kop"]; blk = [r for r in R if r["m"] == "block"][0]; bt = [r for r in R if r["m"] == "blocktxt"][0]
logo = [r for r in R if r["m"] == "logo"][0]; proof = [r for r in R if r["m"] == "proof"]
fsk = min(float(r["fs"][:-2]) for r in kop); fsb = float(bt["fs"][:-2]); full = BW >= 900
rule("R1 kop >= 100 px", fsk >= 100, f"{fsk:.0f}px (klasse {LAY})")
rule(f"R2 bloktekst >= {96 if full else 80} px", fsb >= (96 if full else 80), f"{fsb:.0f}px")
if proof:
    rule("R2b bewijsregel >= 30 px", float(proof[0]["fs"][:-2]) >= 30, proof[0]["fs"])
rows = volt[blk["y"]:blk["y"]+blk["h"]]; xs = np.nonzero(rows.any(0))[0]; bx0, bx1 = xs.min(), xs.max()
rule(f"R3 blok >= {85 if full else 62}% breed (pixels)", (bx1-bx0+1)/W >= (.85 if full else .62), f"{(bx1-bx0+1)/W*100:.0f}% ({bx0}..{bx1})")
okm = (abs(bx0-M) <= 3 if AL == "left" else True) and (abs((W-1-bx1)-M) <= 3 if (AL == "right" or full) else True)
rule("R4 blokmarge 72 +-3 aan de uitgelijnde kant(en)", okm, f"links {bx0}, rechts {W-1-bx1}, uitlijning {AL}")
rule("R6 logo links 72, boven >= zone; geen sportlabel", abs(logo["x"]-M) <= 3 and logo["y"] >= TOPMIN-3, f"links {logo['x']}, boven {logo['y']}")
share = blk["w"]*blk["h"]/(W*H)*100; need = (11 if fmt == "4x5" else 8) if full else (8 if fmt == "4x5" else 6)
rule(f"R7 blokvlak >= {need}% van het vlak", share >= need, f"{share:.1f}% (Volt-pixels totaal {volt.mean()*100:.1f}%)")
right = max(r["x"]+r["w"] for r in kop+proof if r["m"] != "panel"); left = min(r["x"] for r in kop+proof)
rule("R8 kop/bewijs binnen marge 72", left >= M-2 and right <= W-M+2, f"links {left}, rechts {W-right}")
bottom = blk["y"]+blk["h"] if not proof else max(blk["y"]+blk["h"], proof[0]["y"]+proof[0]["h"])
rule("R9 onderrand tekst <= safe zone", H-bottom >= BOTMIN-3, f"vrij onder {H-bottom} (min {BOTMIN})")
# R10 foto zichtbaar: pixels die geen Volt, geen vlak wit (>=245) en geen zwart-vlak (#0A0A0A+-4) zijn, op de notext-versie
flat_white = (nt.min(-1) >= 245); flat_black = (nt.max(-1) <= 14); voltn = (abs(nt[..., 0]-204) < 40) & (nt[..., 1] > 215) & (nt[..., 2] < 70)
photo = ~(flat_white | flat_black | voltn)
rule("R10 foto zichtbaar >= 30% (4:5) / 25% (9:16; safe zones)", photo.mean() >= (.30 if fmt == "4x5" else .25), f"{photo.mean()*100:.0f}%")
# contrast: per tekstregel de werkelijke tekstkleur t.o.v. de achtergrond (notext). Kop: mediaan >= 7:1; kleine tekst: p95/p5 slechtste >= 4.5:1; kop slechtste 5% >= 4.5:1
worst_k, med_k, worst_s = 99, 99, 99
for r in kop + proof:
    reg = nt[r["y"]:r["y"]+r["h"], r["x"]:r["x"]+r["w"]].reshape(-1, 3); L = lum(reg)
    col = [int(x) for x in r["col"][r["col"].index("(")+1:-1].split(",")[:3]]; Lt = lum(col)
    if Lt > .5:   # lichte tekst: achtergrond moet donker zijn -> slechtste = lichtste 5%
        cm = (Lt+.05)/(np.median(L)+.05); cw = (Lt+.05)/(np.percentile(L, 95)+.05)
    else:         # donkere tekst: slechtste = donkerste 5% achtergrond
        cm = (np.median(L)+.05)/(Lt+.05); cw = (np.percentile(L, 5)+.05)/(Lt+.05)
    if r["m"] == "kop": worst_k = min(worst_k, cw); med_k = min(med_k, cm)
    else: worst_s = min(worst_s, cw)
rule("R11 contrast kop: mediaan >= 7:1", med_k >= 7, f"{med_k:.1f}:1")
rule("R12 contrast kop slechtste 5% >= 4.5:1; kleine tekst slechtste 5% >= 4.5:1 (zonder schaduw)", worst_k >= 4.5 and worst_s >= 4.5, f"kop {worst_k:.1f}:1, klein {worst_s if worst_s < 99 else float('nan'):.1f}:1")
rule("R13 kopkleur wit of zwart; blokcontrast zwart op Volt >= 7:1", all(r["col"] in ("rgb(255, 255, 255)", "rgb(10, 10, 10)") for r in kop) and (lum([204, 255, 0])+.05)/(lum([10, 10, 10])+.05) >= 7, f"{(lum([204,255,0])+.05)/(lum([10,10,10])+.05):.1f}:1")
# R14 licht/donker-verhouding (niet-Volt oppervlak, notext): licht = lum >= 0.5, donker = lum < 0.2
Ln = lum(nt); nv = ~voltn; lt = ((Ln >= .5) & nv).sum()/nv.sum(); dk = ((Ln < .2) & nv).sum()/nv.sum(); md = 1-lt-dk
rule("R14 licht 12-40%, donker >= 40% (doel ~30/70)", .12 <= lt <= .40 and dk >= .40, f"licht {lt*100:.0f}%, midden {md*100:.0f}%, donker {dk*100:.0f}%")
print(("ALLE PASS" if all(res) else f"{res.count(False)} FAIL") + f" ({len(res)} regels) {n} klasse {LAY}")
