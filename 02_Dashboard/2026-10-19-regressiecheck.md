---
id: 2026-10-19-regressiecheck
titel: "SEO-regressiecheck — 19 oktober 2026"
kerntitel: "Nieuwe rugbypagina heeft dubbele H1; terugbetalingsbeleid-titel is 'American Express'"
datum: 2026-10-19
bron: routine
routine: "seo-regressiecheck"
categorie: SEO
status: nieuw
prioriteit: P1
samenvatting: "Twee nieuwe technische afwijkingen op nieuw gepubliceerde pagina's: de nieuwe sportpagina /pages/gripsokken-voor-rugby heeft twee H1-tags en /pages/terugbetalingsbeleid toont de titel 'American Express' zonder meta description. Daarnaast flink voortgang op het al openstaande verzend-/retourpunt: de nieuwe /pages/*-beleidspagina's zijn nu compleet en consistent, alleen de twee oude /policies/*-pagina's lopen nog achter."
gerelateerd: [2026-10-12-regressiecheck, 2026-10-05-regressiecheck, 2026-09-28-regressiecheck, 2026-10-11-seo-audit-weekdelta, 2026-10-29-ads-funnel-en-snelheid-productpagina]
vervangt: []
bronbestand: ""
deadline: ""
---
# SEO-regressiecheck — 19 oktober 2026

> Map: [[Waar staat wat]]

## In het kort

De sitemap is deze week flink gegroeid: een vierde sportpagina (`/pages/gripsokken-voor-rugby`), de drie verzend-/retourpagina's en een hele reeks "over ons"-pagina's staan er nu in, en `/collections/all` en `/collections/frontpage` zijn verdwenen uit de sitemap (maar bestaan nog los — zie onder). Twee nieuwe, concrete technische afwijkingen gevonden op de nieuw gepubliceerde pagina's: een dubbele H1 op de rugbypagina en een onjuiste titel ("American Express") zonder meta description op het terugbetalingsbeleid. Positief: de al drie weken openstaande tegenspraak tussen de nieuwe beleidspagina's en de oude policy-pagina's is grotendeels opgelost — alleen `/policies/shipping-policy` en `/policies/refund-policy` lopen nog achter.

## Kerncijfers

- **13** · gecontroleerde URL's · +1 t.o.v. vorige week (nieuwe sportpagina rugby)
- **2** · nieuwe P1-afwijkingen · beide op pas gepubliceerde pagina's
- **82** · GA4-sessies (7 dagen) · −16,3% t.o.v. vorige week (98)
- **3** · GA4 key events (7 dagen) · gelijk aan vorige week, omzet €170,75 (vorige week €62,98)

## Acties

- [x] P1 · `/pages/gripsokken-voor-rugby` heeft twee H1-tags (los tekstblok + hero-titel) — niveau van het bovenste blok naar H2
- [ ] P1 · `/pages/terugbetalingsbeleid` heeft titel "American Express" en geen meta description — herschrijven
- [ ] P2 · `/blogs/intern` staat publiek en zonder noindex in de sitemap — nagaan of dat bedoeld is

## Bevindingen

Referentiepunt: [[2026-10-12-regressiecheck]]. Verplichte URL-lijst dit keer (13, sitemap-gedreven): homepage, de drie productpagina's, de collectie `gripsokken`, nu vier `/pages/gripsokken-voor-*`-sportpagina's (padel, tennis, voetbal, **nieuw: rugby**), beide bestaande blogindexen (`hi-grip`, `trends`), het nieuwste artikel (ongewijzigd: "De twee grootste problemen in de sportwereld...", lastmod 9 okt) en `/en/`.

### Nieuw ontdekt in de sitemap t.o.v. vorige week

- **Vierde sportpagina `/pages/gripsokken-voor-rugby`** — rugby stond al als kernsport in het feitenbestand, dit is de eerste keer dat de bijbehorende pagina in de sitemap staat.
- **`sitemap_pages_1.xml` flink uitgebreid**: naast de drie beleidspagina's (verzendbeleid, retourbeleid, terugbetalingsbeleid, al sinds 28 sep bekend) staan er nu ook `/pages/over-ons`, `/pages/zakelijk`, `/pages/blogs`, `/pages/contact`, `/pages/veelgestelde-vragen`, `/pages/onze-missie`, `/pages/onze-waarden`, `/pages/onze-visie`, `/pages/ons-verhaal`, `/pages/privacybeleid`, `/pages/retail`, `/pages/pilates`, `/pages/clubwear` en `/pages/collection` in. Deze vallen buiten de verplichte checklist van deze routine (geen productpagina, collectie, sportpagina of blogindex) en zijn dus niet individueel gecontroleerd — wel een duidelijke uitbreiding van de geïndexeerde site t.o.v. vorige week.
- **Nieuwe blogindex `/blogs/intern`** (titel "INTERN"): publiek bereikbaar (HTTP 200), geen artikelen, geen `noindex`-meta. Zie afwijkingen.
- **`sitemap_metaobject_pages_1.xml`** (NL+EN, vorige week leeg ontdekt) is deze week weer helemaal uit `sitemap.xml` verdwenen — geen actie, alleen gemeld.
- **`/collections/all` en `/collections/frontpage` staan niet meer in `sitemap_collections_1.xml`** (nu bevat die alleen `/collections/gripsokken`). Beide URL's bestaan nog los: `/collections/all` geeft nog gewoon HTTP 200 (en nog steeds geen meta description — bekend P2-punt, ongewijzigd), `/collections/frontpage` geeft nog een directe 404 (bekend punt, ongewijzigd). Dat ze niet meer in de sitemap staan verandert niets aan die twee punten.
- **Nieuw artikel in de sitemap:** `/blogs/hi-grip/wat-zijn-gripsokken` (lastmod 21 aug, dus niet het nieuwste artikel — dat blijft "de twee grootste problemen..." van 9 okt). Dit lijkt de eerste van de "antwoord-eerst"-vraagpagina's uit backlogpunt 6 — niet apart gecontroleerd, want geen nieuwste artikel en geen sportpagina.

### Afwijkingen

1. **`/pages/gripsokken-voor-rugby` heeft twee `<h1>`-tags (nieuw, 19 okt 2026)**
   De pagina bevat een los tekstblok direct boven de hero-sectie met `<h1>Gripsokken voor rugby</h1>` (de omringende div-klasse suggereert zelf "h2", het gerenderde element is toch een `h1`), plus de eigen `<h1 class="sl-hero__title">` van de hero-sectie eronder. Op de drie bestaande sportpagina's (padel, tennis, voetbal) is dat bovenste blok afwezig of op een lager niveau gerenderd: daar is alleen de hero-h1 aanwezig, dus precies één `<h1>` per pagina. Fix: het tekstblok naar `h2` zetten, of verwijderen als duplicaat van de hero-titel.
2. **`/pages/terugbetalingsbeleid` heeft een onjuiste titel en geen meta description (nieuw, 19 okt 2026)**
   De pagina gaat over het betalingsbeleid (H1: "Betalingsbeleid", uitleg over betaalmethodes), maar de `<title>` is simpelweg "American Express" — een betaalmethode, geen paginatitel — en er is geen `<meta name="description">`. Verwarrend voor zoekers en een gemiste kans in de SERP.

### Al bekend, blijft open (staat open in de backlog — geen nieuw punt, niet gewijzigd)

- **Schema gedeeltelijk**: `WebSite` staat nu op alle vier sportpagina's (rugby inbegrepen) plus homepage en `/en/`, maar ontbreekt nog op de collectie, de drie productpagina's en beide blogindexen. `ItemList` ontbreekt nog op de collectie. `FAQPage` ontbreekt nog op de drie productpagina's (die wel een zichtbare FAQ hebben) — opvallend: de homepage en `/en/` hebben inmiddels wél een `FAQPage`, dat is sinds vorige week nieuw maar lost het bekende punt niet op.
- **Redirect-keten `/products/hi-grip-gripsokken-1`**: nog steeds 2 stappen (`hi-grip-gripsokken-1` → `hi-grip-gripsokken` → `performance-gripsokken`), tegen de regel van maximaal 1 stap.
- **`/collections/all`**: nog geen meta description, titel nog generiek ("Producten – HÏ Grip").
- **`/collections/frontpage`**: nog een directe 404 (geen 301).
- **Sporters-claim 3000+ vs 3500+** (open actie onder [[2026-10-11-seo-audit-weekdelta]]): de NL-homepage en `/collections/gripsokken` tonen nog "3000+ sporters"; de EN-homepage blijft consistent op "3500+ athletes" (al vorige week gecorrigeerd). Geen verandering t.o.v. 12 oktober.

### Grote voortgang (geen nieuw punt — update van het bestaande backlogpunt "Nieuwe verzend-/retour-/betalingspagina's")

- `/pages/verzendbeleid` noemt nu wél de verzendkosten (**€4,50**) en de gratis-verzenddrempel (**GRATIS VERZENDING BOVEN DE €35**), en "Binnen 1 werkdag verzonden" — vorige week nog leeg op dit punt.
- `/pages/retourbeleid` zegt nog steeds 30 dagen, en de 25%-herbevoorradingskosten en de "ongeopend"-eis zijn **verdwenen** (niet meer op de pagina aangetroffen); de losse vermelding van "14 dagen" op die pagina gaat over de terugbetalingstermijn na de retourmelding (wettelijk, geen tegenspraak).
- `/policies/terms-of-service` toont nu **€4,50** (vorige week nog €4,25) — opgelost.
- **Nog niet opgelost:** `/policies/shipping-policy` zegt nog steeds "vóór 16:00" (in plaats van "binnen 1 werkdag"); `/policies/refund-policy` zegt nog steeds "14 dagen" retourtermijn mét de 25%-herbevoorradingskosten — deze twee oude `/policies/*`-pagina's zijn de enige overgebleven tegenspraak.
- Het feitenbestand is bijgewerkt met deze actuele live-stand (zie Wijzigingslog daar, 19-10-2026).

### Ongewijzigd / schoon

- Alle 13 gecontroleerde URL's: HTTP 200. Eén meting op het nieuwste artikel gaf bij de eerste poging 1,78s (boven de norm), drie herhaalde metingen gaven 0,40–0,75s — netwerk-uitschieter, geen structurele regressie.
- Alle 13: precies één niet-lege `<title>`, een niet-lege meta description, en precies één `<h1>` — **behalve de nieuwe rugbypagina** (zie afwijkingen).
- Canonical en `hreflang` (nl/en/x-default) correct op alle 13.
- **Geen enkele van de 13 pagina's bevat `aggregateRating`** — kritieke check blijft schoon.
- Homepage: 4 `alt=""`-afbeeldingen — ruim onder de meldgrens van 12.
- Live prijzen op de productpagina's kloppen met het feitenbestand (€14,95 1-pack, €17,95 voor beide 2.0-varianten, €4,50 verzendkosten zichtbaar).
- `shopify theme check`: niet uitgevoerd — thema-map niet beschikbaar in de cloudomgeving (bekende beperking van elke cloud-run).

### Trend

GA4-property 476032345, sessies per kanaal, laatste 7 dagen (12–18 okt) vs. de 7 dagen daarvoor (5–11 okt):

| Kanaal | Deze week | Vorige week |
|---|---|---|
| Organic Search | 36 | 52 |
| Direct | 27 | 33 |
| Referral | 9 | 2 |
| Organic Social | 6 | 7 |
| Unassigned | 3 | 4 |
| Organic Shopping | 1 | 0 |
| **Totaal** | **82** | **98** |

Botverkeer expliciet gefilterd (land + kanaal): "United States | Direct" daalde verder van 11 naar 7 sessies (0% engagement, vrijwel zeker bots); "United States | Organic Search" en "Organic Social" en "China | Direct" zijn allemaal te klein om iets te zeggen. Organic Search daalde het sterkst van alle kanalen (52 → 36, −30,8%), los van het botverkeer — geen duidelijke technische oorzaak gevonden op de gecontroleerde pagina's; houd dit in de gaten bij de volgende meting.

AI Assistant-kanaal, laatste 30 dagen: **3 sessies** (vorige meting 12 oktober: 2) — te klein om een trend aan te wijzen.

PageSpeed Insights (mobiel): **niet gemeten** — openbaar PSI-quotum zit nog vast op HTTP 429 voor het project `higrip-analytics`, zelfde probleem als elke eerdere run.

## Wat niet lukte

- **PageSpeed Insights** (homepage, `/collections/gripsokken`, `/products/performance-gripsokken`): HTTP 429, quotum op. Nodig: `PageSpeed Insights API` aanzetten in `higrip-analytics` of een `PAGESPEED_API_KEY`.
- **`shopify theme check`**: thema-map `C:\Users\Test\higrip-theme` niet beschikbaar in deze cloudomgeving.

## Bronnen

- Live site: curl op de 13 URL's + sitemap-bestanden (NL en EN) + de beleidspagina's, 19 oktober 2026.
- `python3.13 02_Dashboard/_tools/google_data.py ga4 --dagen 7` / `--dagen 30` (python3 in deze cloudomgeving is 3.11 zonder de GA4-modules; `pip install` installeerde ze onder python 3.13 — draai daarom voortaan `python3.13`, niet `python3`, voor dit script in deze omgeving).
- `python3.13 02_Dashboard/_tools/google_data.py cwv` (PageSpeed, gefaald op quotum).
- Feitenbestand: `00_Brand_Core/Feiten & Actuele Staat.md`.

## Aantekeningen
