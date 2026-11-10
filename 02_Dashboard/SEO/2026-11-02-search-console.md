---
id: 2026-11-02-search-console
titel: "Search Console & rankings — week 45"
kerntitel: "Klikken en positie herstellen; voetbalpagina-positie draait voor het eerst bij"
datum: 2026-11-02
bron: routine
routine: "search-console"
categorie: SEO
status: nieuw
prioriteit: P2
samenvatting: "Na twee weken van dalende klikken en CTR herstelt zowel het 7-dagen- als het 28-dagenbeeld: klikken +51,9% (7d) resp. +30,8% (28d), positie verbetert in beide vensters. De drie weken dalende positie van /pages/gripsokken-voor-voetbal (NL) draait voor het eerst bij (15,7 → 11,6), zonder kannibalisatie op de kernterm zelf; nieuw gevonden: /en (homepage) combineert een hoog aantal vertoningen (266, pos. 7,8) met een lage CTR van 1,88%."
gerelateerd: [2026-11-02-regressiecheck, 2026-10-27-seo-audit-higrip-nl, 2026-11-10-growth-radar-seo-content]
vervangt: []
bronbestand: ""
deadline: ""
---
# Search Console & rankings — week 45

> Map: [[Waar staat wat]]

## In het kort

Zesde meting van deze routine. Beide vensters laten herstel zien na de terugval van 21 oktober: 7 dagen klikken 41 (was 27, +51,9%), vertoningen 1.234 (+17,9%), CTR 3,32% (was 2,58%), positie 7,9 (was 8,9, 1,0 beter); 28 dagen klikken 174 (+30,8%), vertoningen 4.534 (+15,5%), CTR 3,84% (was 3,39%), positie 8,2 (was 8,8). Dit komt overeen met GA4, waar Organic Search deze week ook steeg (42 sessies, was 26) — al is de grootste GA4-stijging dit keer Paid Social, niet organisch (zie de regressiecheck van vandaag). Positief: `/pages/gripsokken-voor-voetbal` (NL), al drie metingen op rij slechter, verbetert voor het eerst (positie 15,7 → 11,6) op vergelijkbaar volume — bestaand backlogpunt 27 bijgewerkt, niet gesloten. Geen kannibalisatie gevonden op de kernzoektermen: "gripsokken voetbal" rankt alleen via de eigen sportpagina, en "gripsokken" blijft voor 95,6% op de oude URL `/products/hi-grip-gripsokken-1` (vergelijkbaar met vorige weken). Nieuw: `/en` (de EN-homepage) combineert 266 vertoningen op positie 7,8 met maar 1,88% CTR — nieuw backlogpunt.

## Kerncijfers

- **41** · Klikken (7 dagen) · +51,9%
- **174** · Klikken (28 dagen) · +30,8%
- **7,9** · Gemiddelde positie (7 dagen) · 1,0 beter
- **3,32%** · CTR (7 dagen) · +0,74 pt

## Acties

- [ ] P2 · [search-console] Titel/meta van `/en` (EN-homepage) herschrijven: positie 7,8, 266 vertoningen (7 dagen), maar 1,88% CTR
- [ ] P2 · Zie bijgewerkt backlogpunt 27: positieherstel `/pages/gripsokken-voor-voetbal` (NL) volgende week bevestigen

## Bevindingen

Referentiepunt: [[2026-10-21-search-console]]. Meting 7 tegen 7 dagen (26 okt–1 nov vs. 19–25 okt) plus 28 dagen, via `python3.13 02_Dashboard/_tools/google_data.py gsc`.

### Totaal

| Venster | Klikken | Vertoningen | CTR | Positie |
|---|---|---|---|---|
| 7 dagen (nu) | 41 | 1.234 | 3,32% | 7,9 |
| 7 dagen (vorige) | 27 | 1.047 | 2,58% | 8,9 |
| 28 dagen (nu) | 174 | 4.534 | 3,84% | 8,2 |
| 28 dagen (vorige) | 133 | 3.925 | 3,39% | 8,8 |

### Zoektermen (top, 7 dagen)

- **gripsokken**: positie 7,1 (was 5,8, −1,4 — iets slechter), 180 vertoningen, 7 klikken. 95,6% van de vertoningen (172/180) loopt nog via de oude URL `/products/hi-grip-gripsokken-1` (vergelijkbaar met de ~100% van vorige week).
- **grip socks**: positie 8,8 (was 10,0, +1,2 — beter), 142 vertoningen, verdeeld over 5 URL's (`/en` 106, `/en/products/performance-gripsokken` 22, `/` 14, `/en/collections/gripsokken` 2, `/products/hi-grip-gripsokken-1` 1) — kannibalisatie blijft, bekend (backlogpunt 18).
- **grip sokken** (NL): positie 12,0 (was 9,4, −2,5 — slechter), 29 vertoningen, verdeeld over 3 URL's (`/products/hi-grip-gripsokken-1` 18, `/` 11, 1 blog) — zelfde patroon als vorige weken, bekend.
- **gripsokken voetbal**: positie 25,0 (was 27,0), slechts 6 vertoningen — te weinig voor een conclusie. Rankt uitsluitend via `/pages/gripsokken-voor-voetbal` (geen kannibalisatie door `/`).
- **gripsokken kopen**: positie 10,9 (was 3,5), 8 vertoningen — grote uitslag maar te weinig data voor een conclusie.
- **gripsokken padel / tennis / rugby, antislip sokken**: geen vertoningen in de top 50 (7 en 28 dagen) — zelfde beperking als elke voorgaande run.
- Overige lange staart (grips, gripsok, grip socks men, football socks grip, e.d.): allemaal 1–6 vertoningen, te weinig voor conclusies; enkele nieuwe termen (grip, gripsokke, grip socken, grip socks near me, blauwe gripsokken, free grip socks, grip docks) met 1–3 vertoningen — ruis, geen actie.

### Kernkeywords (verplichte lijst)

| Zoekterm | Positie (7d) | Vorige | Vertoningen (7d) |
|---|---|---|---|
| gripsokken | 7,1 | 5,8 | 180 |
| grip socks | 8,8 | 10,0 | 142 |
| grip sokken | 12,0 | 9,4 | 29 |
| gripsokken kopen | 10,9 | 3,5 | 8 (te weinig) |
| gripsokken voetbal | 25,0 | 27,0 | 6 (te weinig) |
| gripsokken padel/tennis/rugby, antislip sokken | geen data | — | — |

### Pagina's (top, 7 dagen op klikken)

| Pagina | Klikken | Vertoningen | CTR | Positie | Vorige positie |
|---|---|---|---|---|---|
| `/` | 23 | 182 | 12,64% | 9,1 | 12,7 |
| `/products/hi-grip-gripsokken-1` | 8 | 374 | 2,14% | 7,2 | 7,4 |
| `/en` | 5 | 266 | 1,88% | 7,8 | 7,5 |
| `/blogs/hi-grip/hoe-zorg-ik-voor-mijn-gripsokken` | 2 | 60 | 3,33% | 3,9 | 4,5 |
| `/en/products/performance-gripsokken` | 1 | 99 | 1,01% | 9,1 | 7,6 |
| `/collections/all` | 1 | 56 | 1,79% | 4,8 | 12,5 |
| `/en/collections/gripsokken` | 1 | 38 | 2,63% | 6,7 | 11,1 |
| `/collections/gripsokken` | 1 | 12 | 8,33% | 12,1 | 10,5 |
| `/pages/gripsokken-voor-voetbal` | 0 | 41 | 0% | 11,6 | 16,1 |

De homepage verbetert sterk (positie 12,7 → 9,1, CTR 12,64%); `/collections/all` en `/en/collections/gripsokken` verbeteren ook flink in positie (bekende meta-descriptionpunten, geen nieuwe actie — zie regressiecheck van vandaag voor `/collections/all`).

### Kansen

- **Striking distance (positie 5–20, ≥20 vertoningen):** gripsokken (7,1/180), grip socks (8,8/142), grip sokken (12,0/29) — alle drie al bekende kannibalisatie- of oude-URL-punten, geen nieuwe actie.
- **Lage CTR (nieuw):** `/en` — 266 vertoningen, positie 7,8, CTR 1,88%. Nieuw backlogpunt, want niet gedekt door de bestaande EN-punten (die gaan over `/en/pages/gripsokken-voor-voetbal` en `/en/products/performance-gripsokken` specifiek, niet de EN-homepage zelf).

### Kannibalisatie

Geen gevonden op de kernzoektermen deze week: `/` rankt niet voor "gripsokken voetbal" (die term rankt uitsluitend via de sportpagina). "grip socks" en "grip sokken" blijven wel over meerdere URL's verdeeld (bekend, backlogpunt 18, geen nieuw punt).

### Indexering

Geen tool voor het indexeringsrapport of het generatieve-AI-impressierapport beschikbaar in deze koppeling — zelfde beperking als elke voorgaande run.

### Doorwerking

- **Backlogpunt 27** (positieval `/pages/gripsokken-voor-voetbal`, NL): voor het eerst herstel, 15,7 → 11,6 op vergelijkbaar volume (41 vertoningen). Backlogpunt bijgewerkt met deze datum, niet gesloten — nog geen verklaring, bevestiging nodig volgende week.
- **Punt 19** (`/pages/ontdek-jouw-sport`, lage CTR): nog steeds 0% CTR (15 vert./7d, 49/28d) ondanks een goede positie (4,1–5,4) — ongewijzigd, blijft open.
- **Punten 25/26** (`/en/pages/gripsokken-voor-voetbal`, `/en/products/performance-gripsokken`): CTR blijft laag (0% resp. 1,01%/0,98%) — punt 26 verbeterde licht t.o.v. 14 okt (was 0%), maar nog ver onder een gezond niveau. Beide blijven open, geen wijziging in het backlogpunt.
- **Punt 21** (blog "hoe zorg ik voor mijn gripsokken"): CTR is nu 3,33% (7d)/2,08% (28d) op een goede positie (3,9–4,0) — duidelijk verbeterd t.o.v. de 1,x% waarop het punt destijds werd geopend. Mogelijk al (deels) opgepakt; niet zelf afgevinkt (dat doet alleen de actiecontrole), wel vermeld hier.
- **Punt 22** (blog "waarom HÏ Grip gripsokken"): CTR blijft 0% op 42 (7d)/164 (28d) vertoningen — ongewijzigd, blijft open.
- **SEO-titels 2.0/collectie gripsokken** (live sinds 11 okt): nu 3+ weken oud, evaluatievenster (±8 nov) bijna bereikt — volgende run beoordelen.

### Te weinig data

"gripsokken kopen" (8 vert.), "gripsokken voetbal" (6 vert.), "gripsokken padel/tennis/rugby" en "antislip sokken" (geen data): allemaal onder de drempel voor een conclusie.

## Wat niet lukte

- Geen tool voor het indexeringsrapport (geïndexeerd vs. niet-geïndexeerd met redenen) of het generatieve-AI-impressierapport (AI Overviews/AI Mode) — zelfde structurele beperking als elke voorgaande meting.

## Bronnen

- `python3.13 02_Dashboard/_tools/google_data.py gsc --dagen 7 --top 50` en `--dagen 28 --top 50`, 2 november 2026.
- GA4 (zie [[2026-11-02-regressiecheck]]) voor de vergelijking met organisch verkeer.
- Backlog: `02_Dashboard/_backlog/ACTIEBACKLOG.md`, punten 18, 19, 21, 22, 25, 26, 27.

## Aantekeningen
