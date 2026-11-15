---
id: 2026-11-09-search-console
titel: "Search Console & rankings — week 46"
kerntitel: "Klikken en CTR dalen ondanks meer vertoningen; voetbalpagina-herstel zet derde week door"
datum: 2026-11-09
bron: routine
routine: "search-console"
categorie: SEO
status: nieuw
prioriteit: P2
samenvatting: "Beide vensters laten een lichte terugval zien ondanks meer vertoningen: 7 dagen klikken −17,1%, CTR 2,6% (was 3,32%), positie 0,3 slechter; 28 dagen klikken −13,0%, CTR 2,9% (was 4,06%). Positief: /pages/gripsokken-voor-voetbal (NL) herstelt voor de derde meting op rij (11,6 → 9,7); nieuw gevonden: de NL-homepage verliest flink positie (9,1 → 14,0 over 7 dagen, 8,4 → 11,5 over 28 dagen) ondanks een sterke CTR."
gerelateerd: [2026-11-02-search-console, 2026-11-09-regressiecheck, 2026-11-09-seo-conversietest-run-7, 2026-11-10-growth-radar-seo-content]
vervangt: []
bronbestand: ""
deadline: ""
---
# Search Console & rankings — week 46

> Map: [[Waar staat wat]]

## In het kort

Zevende meting van deze routine. Beide vensters draaien dit keer de verbetering van vorige week deels terug: 7 dagen klikken 34 (was 41, −17,1%), vertoningen 1.307 (+5,9%), CTR 2,6% (was 3,32%), positie 8,2 (was 7,9, 0,3 slechter); 28 dagen klikken 140 (was 161, −13,0%), vertoningen 4.822 (+21,7%), CTR 2,9% (was 4,06%), positie 8,3 (was 8,1, 0,2 slechter). Meer vertoningen maar minder klikken en een lagere CTR wijst op SERP-weergave (titel/meta of concurrentie), niet op een rankingprobleem — de gemiddelde positie bleef vrijwel gelijk. Nieuw gevonden: de NL-homepage (`/`) verliest duidelijk positie, zowel over 7 dagen (9,1 → 14,0) als over 28 dagen (8,4 → 11,5), ondanks een nog steeds sterke CTR (7,41%/11,38%) — nieuw backlogpunt. Positief: `/pages/gripsokken-voor-voetbal` (NL) verbetert voor de derde meting op rij (15,7 → 11,6 → 9,7), bestaand backlogpunt 27 bijgewerkt. Geen kannibalisatie op de kernzoektermen deze week.

## Kerncijfers

- **34** · Klikken (7 dagen) · −17,1%
- **140** · Klikken (28 dagen) · −13,0%
- **8,2** · Gemiddelde positie (7 dagen) · 0,3 slechter
- **2,6%** · CTR (7 dagen) · −0,72 pt

## Acties

- [ ] P2 · [search-console] Positieval NL-homepage (`/`) uitzoeken: 9,1 → 14,0 (7d) en 8,4 → 11,5 (28d), ondanks CTR 7,41%/11,38%
- [ ] P2 · Zie bijgewerkt backlogpunt 27: derde week op rij herstel `/pages/gripsokken-voor-voetbal` (NL), nog niet afsluiten

## Bevindingen

Referentiepunt: [[2026-11-02-search-console]]. Meting 7 tegen 7 dagen (2–8 nov vs. 26 okt–1 nov) plus 28 dagen, via `python3 02_Dashboard/_tools/google_data.py gsc --dagen 7 --top 50` en `--dagen 28 --top 50` (Google-pakketten in de cloudomgeving opnieuw geïnstalleerd onder de juiste `python3`-interpreter, zie "Wat niet lukte").

### Totaal

| Venster | Klikken | Vertoningen | CTR | Positie |
|---|---|---|---|---|
| 7 dagen (nu) | 34 | 1.307 | 2,6% | 8,2 |
| 7 dagen (vorige) | 41 | 1.234 | 3,32% | 7,9 |
| 28 dagen (nu) | 140 | 4.822 | 2,9% | 8,3 |
| 28 dagen (vorige) | 161 | 3.963 | 4,06% | 8,1 |

### Zoektermen (top, 7 dagen)

- **gripsokken**: positie 5,4 (was 7,1, +1,7 — beter), 323 vertoningen, 4 klikken, CTR 1,24%. 96,6% van de vertoningen (312/323) loopt nog op de oude URL `/products/hi-grip-gripsokken-1` (vergelijkbaar met vorige weken).
- **grip socks**: positie 10,2 (was 8,8, −1,4 — slechter), 151 vertoningen, 0 klikken, verdeeld over 4 URL's (`/en` 65, `/en/products/performance-gripsokken` 65, `/` 22, `/en/collections/gripsokken` 1) — kannibalisatie blijft, bekend (backlogpunt 18).
- **grip sokken** (NL): positie 14,1 (was 12,0, −2,1 — slechter), 41 vertoningen, 0 klikken, verdeeld over 4 URL's (`/` 32, `/products/hi-grip-gripsokken-1` 6, `/collections/all` 5, 1 EN-productpagina) — zelfde patroon, bekend.
- **gripsokken voetbal**, **gripsokken kopen**, **gripsokken padel/tennis/rugby**, **antislip sokken**: geen of te weinig vertoningen in de top 50 deze week (max 7 vertoningen bij de losse term "grip voetbal") — zelfde structurele beperking als elke voorgaande run.
- Nieuwe lange staart (grip voetbal, grip socks padel, grip sport, grip sportsokken, grippy socks, grip bal voetbal, e.d.): 1–7 vertoningen, te weinig voor conclusies.

### Kernkeywords (verplichte lijst)

| Zoekterm | Positie (7d) | Vorige | Vertoningen (7d) |
|---|---|---|---|
| gripsokken | 5,4 | 7,1 | 323 |
| grip socks | 10,2 | 8,8 | 151 |
| grip sokken | 14,1 | 12,0 | 41 |
| gripsokken kopen | te weinig | — | ≤6 |
| gripsokken voetbal | te weinig | — | ≤1 |
| gripsokken padel/tennis/rugby, antislip sokken | geen data | — | — |

### Pagina's (top, 7 dagen op klikken)

| Pagina | Klikken | Vertoningen | CTR | Positie | Vorige positie |
|---|---|---|---|---|---|
| `/` | 18 | 243 | 7,41% | 14,0 | 9,1 |
| `/en` | 6 | 172 | 3,49% | 8,2 | 7,8 |
| `/products/hi-grip-gripsokken-1` | 5 | 473 | 1,06% | 5,8 | 7,2 |
| `/collections/all` | 1 | 45 | 2,22% | 7,0 | 4,8 |
| `/collections/gripsokken` | 1 | 34 | 2,94% | 7,6 | 12,1 |
| `/pages/over-ons` | 1 | 22 | 4,55% | 1,1 | 2,1 |
| `/blogs/hi-grip/de-wetenschap-achter-gripsokken` | 1 | 21 | 4,76% | 5,4 | 6,3 |
| `/en/products/performance-gripsokken` | 0 | 163 | 0% | 8,7 | 9,1 |
| `/blogs/hi-grip/hoe-zorg-ik-voor-mijn-gripsokken` | 0 | 63 | 0% | 3,7 | 3,9 |
| `/pages/gripsokken-voor-voetbal` | 0 | 18 | 0% | 9,7 | 11,6 |

De NL-homepage is deze week de grootste daler qua positie (9,1 → 14,0) ondanks een nog steeds hoge CTR — nieuw backlogpunt. `/collections/gripsokken` verbetert sterk (12,1 → 7,6), mogelijk een vroeg signaal van de RUN 2-SEO-titels (zie Doorwerking).

### Kansen

- **Striking distance (positie 5–20, ≥20 vertoningen):** gripsokken (5,4/323), grip socks (10,2/151), grip sokken (14,1/41) — alle drie al bekende kannibalisatie- of oude-URL-punten, geen nieuwe actie.
- **Lage CTR:** `/en/products/performance-gripsokken` (163 vert., 0% CTR, bekend punt 26 — ondanks de op 8 nov bevestigde titel/meta-herschrijving nog geen klikeffect zichtbaar, 1 dag oud) en `/pages/gripsokken-voor-voetbal` (18 vert., 0% CTR, maar te weinig volume deze week voor een conclusie).

### Kannibalisatie

Geen gevonden op de kernzoektermen: "gripsokken voetbal" rankt alleen via de eigen sportpagina (1 vertoning), "gripsokken kopen" te weinig volume voor een conclusie. "grip socks" en "grip sokken" blijven over meerdere URL's verdeeld (bekend, backlogpunt 18, geen nieuw punt).

### Indexering

Geen tool voor het indexeringsrapport of het generatieve-AI-impressierapport beschikbaar in deze koppeling — zelfde beperking als elke voorgaande meting.

### Doorwerking

- **Backlogpunt 27** (positieval `/pages/gripsokken-voor-voetbal`, NL): derde meting op rij herstel — 15,7 → 11,6 → 9,7, op afnemend maar consistent volume (18 vertoningen/7d, minder dan voorheen). Backlogpunt bijgewerkt met deze datum; nog niet afsluiten (dat doet alleen de actiecontrole), wel het patroon nu stevig genoeg om als "herstel bevestigd" te labelen.
- **Punt 26** (`/en/products/performance-gripsokken`): titel/meta op 8 november door de actiecontrole bevestigd als live. Nog maar 1 dag oud, dus nog geen CTR-effect te zien (0% deze week) — te vroeg om te beoordelen.
- **Punten 19, 21, 22** (resp. `/pages/ontdek-jouw-sport`, blog "hoe zorg ik", blog "waarom HÏ Grip"): niet in de top-15-paginalijst van deze week beland, dus geen directe nieuwe cijfers; geen aanleiding om de bestaande status te wijzigen.
- **Nieuw backlogpunt `/en` (EN-homepage, 2 nov):** CTR verbetert verder naar 3,49% (was 1,88% op 2 nov) op positie 8,2 — duidelijke verbetering, nog niet afsluiten.
- **SEO-titels 2.0/collectie gripsokken** (live sinds 11 okt, nu ±4 weken oud): `/collections/gripsokken` verbetert deze week sterk in positie (12,1 → 7,6); evaluatievenster is bereikt — volledige KPI-evaluatie (inclusief Shopify Analytics-conversie) hoort bij module C van deze run.

### Te weinig data

"gripsokken kopen", "gripsokken voetbal", "gripsokken padel/tennis/rugby" en "antislip sokken": allemaal onder de drempel voor een conclusie deze week.

## Wat niet lukte

- De Google-pakketten (`google-analytics-data`, `google-api-python-client`, `google-auth`) ontbraken bij de start van deze run in de cloudomgeving onder de `python3`-interpreter die `google_data.py` gebruikt (gaf `ModuleNotFoundError`); opgelost met `python3 -m pip install cffi google-analytics-data google-api-python-client google-auth`, verder geen vault-wijziging nodig.
- Geen tool voor het indexeringsrapport (geïndexeerd vs. niet-geïndexeerd met redenen) of het generatieve-AI-impressierapport (AI Overviews/AI Mode) — zelfde structurele beperking als elke voorgaande meting.

## Bronnen

- `python3 02_Dashboard/_tools/google_data.py gsc --dagen 7 --top 50` en `--dagen 28 --top 50`, 9 november 2026.
- Backlog: `02_Dashboard/_backlog/ACTIEBACKLOG.md`, punten 18, 19, 21, 22, 26, 27, en het EN-homepage-punt van 2 nov.

## Aantekeningen
