---
id: 2026-10-05-regressiecheck
titel: "SEO-regressiecheck — 5 oktober 2026"
kerntitel: "Geen nieuwe afwijkingen; /en/-H1-bug en lege EN-title lijken opgelost"
datum: 2026-10-05
bron: routine
routine: "seo-regressiecheck"
categorie: SEO
status: nieuw
prioriteit: P2
samenvatting: "Geen nieuwe afwijkingen deze week: de bekende /en/-H1-bug met onvertaalde hero-tekst en de lege EN-titel lijken opgelost, en /collections/frontpage is nu een directe 404 in plaats van de eerder gemelde ontbrekende meta description — beide horen bij al openstaande backlogpunten en krijgen geen nieuw punt. Prijzen kloppen exact met het feitenbestand en de kritieke aggregateRating-check blijft schoon op alle 12 gecontroleerde URL's."
gerelateerd: [2026-09-28-regressiecheck, 2026-09-21-regressiecheck, 2026-09-15-regressiecheck, 2026-10-05-growth-radar-seo-technisch]
vervangt: []
bronbestand: ""
deadline: ""
---
# SEO-regressiecheck — 5 oktober 2026

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[Waar staat wat]] · [[Home]]

## In het kort

Controle-run, geen onderzoek. Twaalf URL's gecontroleerd (sitemap-gedreven, één minder dan vorige week omdat `/collections/frontpage` uit de collectie-sitemap is verdwenen). Kritieke check (geen `aggregateRating`) blijft schoon op alle twaalf. Geen nieuwe afwijkingen: twee eerder gemelde bugs lijken opgelost (nog te bevestigen door de actiecontrole) en één bekend open punt is erger geworden maar blijft hetzelfde backlogpunt. GA4 steeg flink, PageSpeed Insights zat opnieuw op quotum.

## Kerncijfers

- **12** · gecontroleerde URL's · vorige week 13
- **0** · URL's met `aggregateRating`
- **116** · GA4-sessies (7 dagen) · +114,8% t.o.v. vorige week (54)
- **5** · AI Assistant-sessies (30 dagen) · vorige meting 3

## Acties

_Geen nieuwe backlogpunten deze week. Bestaande acties uit eerdere rapporten staan in `ACTIEBACKLOG.md` en komen via het dashboard binnen — hier niet gedupliceerd._

## Bevindingen

Referentiepunt: [[2026-09-28-regressiecheck]]. URL-lijst dit keer sitemap-gedreven (Stap 2 van de routine): homepage, de drie productpagina's, de collectie `gripsokken`, de drie `/pages/gripsokken-voor-*`-sportpagina's, beide blogindexen (`hi-grip`, `trends`), het nieuwste artikel (ongewijzigd: "De twee grootste problemen in de sportwereld...", 15 feb 2026) en `/en/`.

### Nieuw ontdekt in de sitemap t.o.v. vorige week

- `/collections/frontpage` is verdwenen uit `sitemap_collections_1.xml` (nu nog maar 1 collectie: `gripsokken`) en geeft een directe 404 — geen 301. Hoort bij het al openstaande backlogpunt "`/collections/frontpage` heeft geen meta description"; zie "Al bekend, blijft open" hieronder. Geen nieuw punt.
- Verder geen nieuwe URL's t.o.v. 28 september ontdekt binnen de gecontroleerde set.

### Mogelijk opgelost — nog te bevestigen door de actiecontrole

1. **`/en/`-homepage heeft weer precies 1 `<h1>` en een vertaalde hero.** De zichtbare `<h1 class="sl-teaser__title">HÏ Grip <em>Performance Grip Socks for Athletes</em></h1>` is nu in het Engels, met een Engelse lead-tekst ("Choose your sport. See why grip in your shoe matters."). Lijkt het backlogpunt "Nieuwe /en/-homepage heeft 2× H1 en een onvertaalde hero-tekst" op te lossen.
2. **`/en/`-title is niet meer leeg.** Nu `HÏ Grip | Performance Grip Socks for Athletes`, met een ingevulde Engelse meta description. Lijkt het backlogpunt "Nieuwe /en/-sectie heeft een lege, keyword-loze title-tag" op te lossen.
   **Let op:** die EN-meta description bevat zelf nog de vervallen belofte *"Order before 10:00 PM, shipped today"* — de NL-homepage-meta is al gecorrigeerd naar "Binnen 1 werkdag verzonden", de Engelse vertaling niet. Dit hoort bij het al openstaande punt over de 22:00-belofte (`2026-09-21-weekoverzicht#611d66c8`), dus geen nieuw punt — alleen hier gemeld als detail.

### Afwijkingen

Geen afwijkingen deze week.

### Al bekend, blijft open (staat open in de backlog — geen nieuw punt, niet gewijzigd)

- **Schema gedeeltelijk** (backlogpunt "SEO-schema-thema-wijzigingen gedeeltelijk gepusht"): vooruitgang t.o.v. 28 sep — `WebSite` en `FAQPage` staan nu ook op de drie sportpagina's (padel/tennis/voetbal), naast homepage en `/en/`. Nog steeds afwezig: `WebSite` op de collectie, de drie productpagina's, beide blogindexen en het artikel; `ItemList` op de collectie; `FAQPage` op de productpagina's (die wel een zichtbare FAQ hebben).
- **Redirect-keten `/products/hi-grip-gripsokken-1`** nog steeds 2 stappen (`hi-grip-gripsokken-1` → `hi-grip-gripsokken` → `performance-gripsokken`), tegen de regel van maximaal 1 stap. Getrackt via `2026-09-23-seo-conversietest-run-1#b469a68a`.
- **Verzend-/retour-/betalingspagina's blijven onvolledig en tegenstrijdig**, ongewijzigd t.o.v. 28 sep: `/pages/verzendbeleid` noemt nog geen verzendkosten (€4,50) of -drempel (€35); `/pages/retourbeleid` rekent nog 25% herbevoorradingskosten en eist "ongeopend"; `/policies/refund-policy` nog 14 dagen + 25%; `/policies/shipping-policy` nog "vóór 16:00"; `/policies/terms-of-service` nog €4,25.
- **`/collections/all`** heeft nog geen meta description en een niet-keyword-eerste title (`Producten – HÏ Grip`).
- **`/collections/frontpage`** (zie boven): nu een directe 404 in plaats van de eerder gemelde ontbrekende meta description — zelfde backlogpunt.
- **`/pages/gripsokken-voetbal`** (oude/typo-handle) geeft nog steeds 404.

### Ongewijzigd / schoon

- Alle 12 gecontroleerde URL's: HTTP 200, laadtijd 0,48–0,86s (ruim onder 1,5s).
- Alle 12: precies één niet-lege `<title>`, een niet-lege meta description, precies één `<h1>`.
- Canonical en `hreflang` (nl/en/x-default) correct op alle 12.
- **Geen enkele van de 12 pagina's bevat `aggregateRating`** — kritieke check blijft schoon.
- Homepage: 3 van 25 afbeeldingen met `alt=""` (vorige week 9/25) — ruim onder de meldgrens van 12.
- Live prijzen kloppen exact met het feitenbestand: 1-pack €14,95 / 3-pack €41,95 / 5-pack €64,95 (Performance Gripsokken) en €17,95 voor beide 2.0-varianten (zwart/wit) — geen tegenspraak.
- GA4 `purchase` staat nog steeds gemarkeerd als key event (`ONCE_PER_EVENT`, sinds 3 feb 2025).
- `shopify theme check`: niet uitgevoerd — thema-map niet beschikbaar in de cloudomgeving (bekende beperking van elke cloud-run).

### Trend

GA4-property 476032345, sessies per kanaal, laatste 7 dagen (28 sep–4 okt) vs. de 7 dagen daarvoor (21–27 sep):

| Kanaal | Deze week | Vorige week |
|---|---|---|
| Direct | 57 | 25 |
| Organic Search | 43 | 25 |
| Cross-network | 8 | 0 |
| Referral | 3 | 1 |
| Unassigned | 3 | 1 |
| AI Assistant | 2 | 1 |
| Organic Social | 1 | 1 |
| **Totaal** | **116** | **54** |

Let op botverkeer: de huidige opdracht (`google_data.py ga4`) levert geen land-dimensie, dus kon niet expliciet gefilterd worden op "Direct uit de VS of China met <5% engagement". Wel zichtbaar: Direct steeg naar 57 sessies met een lage engagementrate (12,3%, tegen 36% vorige week) — consistent met het patroon uit eerdere weken waarin een deel van het Direct-verkeer vermoedelijk bots waren. Niet verder te duiden zonder landdimensie; dat is werk voor de Growth Radar.

AI Assistant-kanaal, laatste 30 dagen: **5 sessies** (was 3 bij de vorige meting) — aanhoudende lichte groei, nog te klein om een trend te noemen.

PageSpeed Insights (mobiel): **niet gemeten** — openbaar PSI-quotum zit nog vast op HTTP 429 voor het project `higrip-analytics`, zelfde probleem als elke eerdere run.

## Wat niet lukte

- **PageSpeed Insights** (homepage, `/collections/gripsokken`, `/products/performance-gripsokken`): HTTP 429, quotum op. Nodig: `PageSpeed Insights API` aanzetten in `higrip-analytics` of een `PAGESPEED_API_KEY`.
- **`shopify theme check`**: thema-map `C:\Users\Test\higrip-theme` niet beschikbaar in deze cloudomgeving.
- **Botverkeer per land filteren**: `google_data.py ga4` heeft geen land-dimensie; alleen het totale Direct-kanaal gemeld, niet uitgesplitst naar VS/China.

## Bronnen

- Live site: curl op de 12 URL's + sitemap-bestanden (NL en EN), 5 oktober 2026.
- Shopify Admin API (`graphql_query`): nieuwste gepubliceerde artikel.
- `python 05_Research/_tools/google_data.py ga4 --dagen 7` / `--dagen 30` en `keyevents`.
- `python 05_Research/_tools/google_data.py cwv` (PageSpeed, gefaald op quotum).
- Feitenbestand: `00_Brand_Core/Feiten & Actuele Staat.md`.

## Aantekeningen
