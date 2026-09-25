---
id: 2026-09-25-search-console
titel: "Search Console & rankings — eerste meting (week 38)"
datum: 2026-09-25
bron: routine
routine: "search-console"
categorie: SEO
status: nieuw
prioriteit: P2
samenvatting: "Eerste run van de nieuwe wekelijkse Search Console-routine: 28-dagentrend is sterk positief (klikken +140%, vertoningen +79%), maar de laatste 7 dagen daalden klikken 39% op vrijwel gelijke vertoningen — bij kleine aantallen nog geen trend. 'Grip socks' is verdeeld over vier eigen URL's (kannibalisatie) en de oude productpagina-URL trekt de meeste vertoningen maar een CTR van 0,32%."
gerelateerd: [2026-09-23-seo-conversietest-run-1, 2026-09-21-regressiecheck, 2026-09-15-regressiecheck]
vervangt: []
bronbestand: ""
deadline: ""
---
# Search Console & rankings — eerste meting (week 38)

## In het kort

Eerste run van deze nieuwe routine (besluit 25 sep 2026). Geen eerder geheugen om tegen te vergelijken — deze run is de nulmeting. Search Console en GA4 waren beide bereikbaar (`check` gaf "ok"). Twee onderdelen uit de routine kon ik niet meten: het generatieve-AI-impressierapport en de indexeringsstatus — zie "Wat niet lukte" hieronder.

## Bevindingen

### Kerncijfers — totaal higrip.nl

| Periode | Klikken | Vertoningen | CTR | Gem. positie |
|---|---|---|---|---|
| Laatste 7 dagen (16–22 sep) | 33 | 1.054 | 3,13% | 8,4 |
| Vorige 7 dagen (9–15 sep) | 54 | 1.123 | 4,81% | 8,7 |
| Verschil | **−38,9%** | −6,1% | −1,68 pt | +0,3 (beter) |
| Laatste 28 dagen (26 aug–22 sep) | 139 | 3.972 | 3,5% | 9,8 |
| Vorige 28 dagen (29 jul–25 aug) | 58 | 2.223 | 2,61% | 11,8 |
| Verschil | **+139,7%** | +78,7% | +0,89 pt | +2,0 (beter) |

De maandtrend is duidelijk positief op elke KPI. De weektrend wijkt daarvan af: klikken daalden 39% terwijl vertoningen nagenoeg gelijk bleven. Bij 33 klikken in totaal is dat een klein aantal — één of twee toevallige dagen kunnen dit verklaren. Geen conclusie trekken op basis van één week; volgende week bevestigt of dit ruis is of een echte knik.

### Kernkeywords (7 dagen, 16–22 sep)

| Zoekterm | Positie | Vorige positie | Verschil | Rankende URL |
|---|---|---|---|---|
| gripsokken | 7,3 | 5,5 | **−1,7** | `/products/hi-grip-gripsokken-1` |
| grip socks | 10,3 | 11,4 | +1,1 | `/en/collections/gripsokken` |
| grip sokken | 11,1 | 12,6 | +1,5 | `/` |
| antislip sokken | 2,0 (nieuw, 2 vert.) | — | — | `/blogs/hi-grip/hoe-zorg-ik-voor-mijn-gripsokken` |
| gripsokken kopen | 11,0 (nieuw, 4 vert.) | — | — | `/products/hi-grip-gripsokken-1` |
| gripsokken voetbal | 52,8 (nieuw, 6 vert.) | — | — | `/en/products/hi-grip-gripsokken-1` |
| grip voetbalsokken | 34,0 (nieuw, 8 vert.) | — | — | `/products/hi-grip-gripsokken-1` |
| gripsokken padel / tennis / rugby | geen data | — | — | — |

Te weinig vertoningen per keyword (ver onder 100) voor "antislip sokken", "gripsokken kopen", "gripsokken voetbal" en "grip voetbalsokken" om conclusies aan te verbinden — alleen registreren als startpunt. Voor "gripsokken padel", "gripsokken tennis" en "gripsokken rugby" staat geen enkele regel in de top 50 van deze of de vorige periode (7 én 28 dagen): geen vertoningen genoeg om te tonen, dus geen positie bekend.

Opvallend: "gripsokken voetbal" en "grip voetbalsokken" ranken op generieke productpagina's (en zelfs op de Engelse productpagina voor een Nederlandse zoekterm), niet op een sportspecifieke pagina — logisch, want `/pages/gripsokken-voetbal` geeft nog 404 (al gemeld door de regressiecheck, niet opnieuw hier).

### Nieuwe zoektermen (7 dagen)

Van de 50 gemeten termen zijn er 26 nieuw (niet eerder gemeten, want dit is de nulmeting — dus "nieuw" is hier niet informatief). Relevant zonder ruis: **antislip sokken** (positie 2, maar 2 vertoningen) en **gripsokken kopen** (positie 11, 4 vertoningen) — beide kernkeywords uit het feitenbestand, dus vanaf nu gevolgd.

### Kansen

**Striking distance (positie 5–20, ≥ 20 vertoningen, 7 dagen):**

| Zoekterm | Positie | Vertoningen |
|---|---|---|
| grip socks | 10,3 | 112 |
| gripsokken | 7,3 | 86 |
| grip sokken | 11,1 | 46 |
| gripsocks | 7,4 | 22 |

**Lage CTR (≥ 100 vertoningen, CTR < 2%, 7 dagen):**

| Pagina | Vertoningen | CTR | Positie |
|---|---|---|---|
| `/products/hi-grip-gripsokken-1` | 310 | **0,32%** | 8,3 |
| `/en/collections/gripsokken` | 133 | 1,5% | 9,0 |
| `/collections/all` | 116 | 1,72% | 7,1 |

`/collections/all` heeft al een openstaand backlogpunt (ontbrekende meta description) — deze meting bevestigt dat het CTR-probleem daar reëel is. Nieuw is de productpagina `/products/hi-grip-gripsokken-1`: met 310 vertoningen in 7 dagen (1.003 in 28 dagen) trekt die verreweg de meeste vertoningen van alle pagina's, maar met 0,32% CTR ligt hij ruim onder elke andere pagina. Dit is de **oude URL** — de canonieke handle is inmiddels `performance-gripsokken` (zie feitenbestand) en de nieuwe 2.0-varianten trekken veel minder vertoningen (65–162). Actie hieronder.

### Kannibalisatie

**"grip socks"** is verdeeld over minstens vier eigen URL's in de zoekterm-pagina-koppeling: `/en/collections/gripsokken` (56 vert., pos. 10,9), `/collections/gripsokken` (34 vert., pos. 8,8), `/collections/all` (17 vert., pos. 12,6) en `/` (4 vert.). Geen enkele pagina domineert; de gemiddelde positie voor de hele term (10,3) is zwakker dan wat de sterkste pagina alleen zou moeten kunnen halen. Dit verdringt zichzelf.

### Pagina's (7 dagen, gesorteerd op klikken — slechts 8 pagina's hadden klikken)

| Pagina | Klikken | Vertoningen | Positieverschil |
|---|---|---|---|
| `/` | 18 | 158 | +1,7 |
| `/en` | 8 | 104 | +0,7 |
| `/en/collections/gripsokken` | 2 | 133 | +1,3 |
| `/collections/all` | 2 | 116 | +0,7 |
| `/products/hi-grip-gripsokken-1` | 1 | 310 | −0,6 |
| `/products/performance-grip-socks-2-0-zwart` | 1 | 65 | −1,2 |
| `/blogs/hi-grip/de-wetenschap-achter-gripsokken` | 1 | 27 | +1,3 |
| `/cart` | 1 | 21 | −0,2 |

Grootste dalers in positie (geen klikken, wel opvallend): `/en/products/hi-grip-gripsokken-1` (−20,4, van 1,8 naar 22,1) en `/en/blogs/hi-grip/de-wetenschap-achter-gripsokken` (−21,7, van 7,3 naar 29). Beide op lage volumes (22 resp. 3 vertoningen) — volgen, nog niet concluderen.

### Indexering

Niet te meten: `google_data.py` heeft geen commando voor het Index Coverage-rapport (geïndexeerd vs. niet-geïndexeerd, met redenen). Dat vereist de URL Inspection API of handmatige toegang tot de Search Console-UI, die deze routine niet heeft. Genoteerd als beperking, geen cijfer verzonnen.

### Doorwerking van eerdere verbeteringen

Uit `_geheugen/seo-conversietest.md`: de enige wijziging die volgens de backlog al **live** staat, is de meta title/description van de homepage (bevestigd 24 september 2026). Dat valt ná het gemeten venster van deze week (16–22 sep), dus het effect is hier nog niet zichtbaar — pas volgende week meetbaar, plus de bekende vertraging van 3 dagen in Search Console-data. De verborgen maatgidspagina (`maatgids-gripsokken`) staat nog niet gepubliceerd en genereert dan ook logischerwijs geen vertoningen. Overige acties uit de conversietest (verzend/retour-teksten gelijktrekken, redirects, SEO-titels 2.0-producten) staan nog op CONCEPT — niets om op te meten.

## Wat niet lukte

- Generatieve-AI-impressierapport (AI Overviews/AI Mode): niet ondersteund door `google_data.py` en niet bereikbaar zonder Search Console-UI-toegang. Blijft open als backlogpunt 15 (P2, al genoteerd 22 sep) — geen nieuwe actie nodig.
- Indexeringsstatus (geïndexeerd/niet-geïndexeerd, foutredenen): zelfde beperking, zie hierboven.

## Acties

- [ ] P2 · [search-console] Titel/meta van `/products/hi-grip-gripsokken-1` optimaliseren of indexering van de nieuwe canonieke URL bespoedigen (opnieuw indienen via Search Console) — 310 vertoningen in 7 dagen, CTR 0,32%, ruim onder elke andere pagina, terwijl de nieuwe handle `performance-gripsokken` veel minder vertoningen trekt
- [ ] P2 · [search-console] "Grip socks" consolideren: vier eigen URL's (`/en/collections/gripsokken`, `/collections/gripsokken`, `/collections/all`, `/`) concurreren om dezelfde term met een zwakke gemiddelde positie (10,3) — canonical/interne links nalopen zodat één pagina primair rankt

## Bronnen

- `python 05_Research/_tools/google_data.py check|gsc --dagen 7 --top 50|gsc --dagen 28 --top 50|ga4` (25 sep 2026)
- `00_Brand_Core/Feiten & Actuele Staat.md`
- `05_Research/_geheugen/seo-conversietest.md`, `05_Research/_backlog/ACTIEBACKLOG.md`

## Aantekeningen
