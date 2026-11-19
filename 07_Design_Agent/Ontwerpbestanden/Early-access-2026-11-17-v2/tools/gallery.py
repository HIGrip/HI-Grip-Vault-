"""Schrijft index.html (galerij) in de uitvoermap: python gallery.py <uitvoermap>"""
import sys
from pathlib import Path
O = Path(sys.argv[1])
T = {"a1":"A1 Jij koos al voor grip","a2":"A2 Dit krijg je met early access","a3":"A3 Ga door waar anderen stoppen","c1":"C1 Dit is je code","c2":"C2 Bedankt. Jouw voordeel","c3":"C3 De keuze van 3500+ sporters"}
rows = "".join(f'<section><h2>{t}</h2><div class="r"><a href="{k}.html"><img src="shots/{k}-640.png" width="640" alt="{t} desktop"></a><a href="{k}.html"><img src="shots/{k}-375.png" width="375" alt="{t} 375px"></a></div></section>' for k,t in T.items())
(O/"index.html").write_text(f'<!DOCTYPE html><meta charset="utf-8"><title>HÏ Grip early-access v2</title><style>body{{background:#111;color:#fff;font:14px Poppins,Arial;margin:24px}}.r{{display:flex;gap:24px;align-items:flex-start;flex-wrap:wrap}}h2{{margin:32px 0 12px}}img{{display:block}}</style><h1>HÏ Grip early-access v2: concept, niet verzonden</h1>{rows}', encoding="utf-8")
