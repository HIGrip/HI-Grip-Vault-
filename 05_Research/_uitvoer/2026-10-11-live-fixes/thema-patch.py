"""Live-fixes 11-10-2026, toepasbaar op een gepulde themamap (werkthema of live).
python3 -I patch2.py <theme_dir>. Idempotent: wat al goed staat, wordt overgeslagen."""
import json
import sys
from pathlib import Path

root = Path(sys.argv[1])


def tekst(rel, oud, nieuw):
    p = root / rel
    if not p.exists():
        print(f"--  {rel}: bestand ontbreekt"); return
    s = p.read_text(encoding="utf-8")
    if nieuw in s and oud not in s:
        print(f"=   {rel}: al goed ({nieuw[:40]!r})"); return
    if s.count(oud) != 1:
        sys.exit(f"STOP {rel}: {s.count(oud)}x gevonden: {oud[:60]!r}")
    p.write_text(s.replace(oud, nieuw), encoding="utf-8")
    print(f"ok  {rel}: {nieuw[:50]!r}")


# FAQ-schema homepage
tekst("snippets/faq-schema.liquid",
      "Team HÏ Grip bestaat uit 4 sporters met een missie en een oprecht verhaal.",
      "Team HÏ Grip bestaat uit 3 sporters met een missie en een oprecht verhaal.")
tekst("snippets/faq-schema.liquid",
      "Bestellingen die vóór 22:00 uur worden geplaatst, worden dezelfde dag verzonden via PostNL.",
      "Bestellingen worden binnen 1 werkdag verzonden via PostNL.")
# Collectie-USP
tekst("templates/collection.json", '"3000+ sporters gingen je voor"', '"3500+ sporters gingen je voor"')
# 1.0-productpagina, Engelse social-proof-strip
tekst("templates/product.performance-grip-socks-1.json",
      "3,000+ athletes went before you", "3,500+ athletes went before you")
# /pages/retourbeleid
tekst("templates/page.retourbeleid.json",
      "<li> Het product is in originele staat en verpakking (ongeopend).</li><li> Er zijn geen sporen van gebruik (indien redelijkerwijs mogelijk).</li><li>Bewaar altijd het verzendbewijs van uw retourzending.</li><li>Door onze verwerkprocedure moet u rekening houden met herbevoorradingskosten. Dit bedrag is 25% van het aankoopbedrag.</li>",
      "<li>Je mag het product uitpakken en bekijken zoals je dat in een winkel zou doen. Is het product meer gebruikt dan nodig was om het te beoordelen, dan mogen we de waardevermindering verrekenen.</li><li>Gepersonaliseerde producten (zoals bedrukkingen) kun je niet retourneren.</li><li>De kosten van het terugsturen zijn voor jouw rekening. Bewaar het verzendbewijs van je retourzending.</li><li>Je geld krijg je binnen 14 dagen na je retourmelding terug, inclusief de verzendkosten van je bestelling.</li>")

# /pages/ons-verhaal: 3 founders, demotekst weg (teksten uit de founders-sectie van /pages/over-ons)
rel = "templates/page.ons-verhaal.json"
p = root / rel
raw = p.read_text(encoding="utf-8")
kop, body = raw[: raw.index("{")], raw[raw.index("{"):]
d = json.loads(body)
slide = d["sections"]["slideshow_kjE9nV"]["blocks"]["slide_aFrm6F"]["blocks"]["group_bKfBrU"]["blocks"]
slide["text_iy3FnB"]["settings"]["text"] = "<p>3 SPORTERS DIE DE WERELD KENNIS LATEN MAKEN MET DE TOEKOMST VAN PERFORMANCE.</p>"
d["sections"]["section_kKkTLX"]["blocks"]["group_G8Jj7q"]["blocks"]["text_CVqDKa"]["settings"]["text"] = (
    "<p>HÏ Grip is opgericht in december 2024 door drie founders op Rotterdam Business School. "
    "Wij versnellen de beweging van iedere sporter.</p>")
acc = d["sections"]["section_mPgMmE"]["blocks"]["accordion_pgACwP"]
acc["blocks"].pop("accordion_row_rQeTkW", None)          # Luuk
acc["block_order"] = [b for b in acc["block_order"] if b != "accordion_row_rQeTkW"]
acc["blocks"]["accordion_row_JpEj8e"]["blocks"]["text_pCbecB"]["settings"]["text"] = (
    "<p><strong>Voetbal &amp; Tennis.</strong> “Elk detail telt op het veld, maar ook voor je sportswear.”</p>")
acc["blocks"]["accordion_row_aCbaHg"]["blocks"]["text_XqirK6"]["settings"]["text"] = (
    "<p><strong>Voetbal.</strong> “Iedere sporter moet op zijn spullen kunnen bouwen.”</p>")
acc["blocks"]["accordion_row_yNJ4eH"]["blocks"]["text_fkWpJJ"]["settings"]["text"] = (
    "<p><strong>Snowboarden &amp; Gym.</strong> “Een kleine verbetering merk je pas echt in de laatste minuut.”</p>")
p.write_text(kop + json.dumps(d, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(f"ok  {rel}: 3 founders, demotekst vervangen")
