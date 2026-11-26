"""Bouwt de 6 ronde-3 ads. Gebruik: python build.py [nr[:feed|reel] ...]"""
import importlib
import sys

from common import HERE, PNG, render

ADS = {1: ("wasmachine", "a1"), 2: ("pakbon", "a2"), 3: ("zes_paar", "a3"), 4: ("een_houd_je", "a4"), 5: ("bon", "a5"), 6: ("drie_is_zes", "a6")}
SIZES = {"feed": (1080, 1350), "reel": (1080, 1920)}

if __name__ == "__main__":
    args = sys.argv[1:] or [str(n) for n in ADS]
    for a in args:
        nr, _, only = a.partition(":")
        nr = int(nr)
        concept, mod = ADS[nr]
        m = importlib.import_module(mod)
        variants = getattr(m, "VARIANTS", [("", {})])
        for fmt, (w, h) in SIZES.items():
            if only and only != fmt:
                continue
            for suffix, kw in variants:
                if suffix and fmt != "feed":
                    continue
                html = HERE / f"r3_{nr}_{concept}_{fmt}{suffix}.html"
                html.write_text(m.build(fmt, **kw), encoding="utf-8")
                out = PNG / f"r3_{nr}_{concept}_{fmt}{suffix}.png"
                print(out.name, render(html, out, w, h))
