---
id: 2026-09-28-regressiecheck
titel: "SEO-regressiecheck — 28 september 2026"
kerntitel: "Nieuwe /en/-homepage heeft 2× H1; nieuwe verzend-/retourpagina's zijn onvolledig"
datum: 2026-09-28
bron: routine
routine: "seo-regressiecheck"
categorie: SEO
status: nieuw
prioriteit: P1
samenvatting: "De kritieke check (geen aggregateRating) blijft schoon, maar drie nieuwe bevindingen: de /en/-homepage heeft 2× H1 met een onvertaalde Nederlandse hero-tekst, drie nieuwe verzend-/retour-/betalingspagina's zijn onvolledig en spreken de oude /policies/*-pagina's tegen, en /collections/frontpage mist een meta description. Vier eerder gemelde afwijkingen staan nog steeds open, zonder verandering."
gerelateerd: [2026-09-21-regressiecheck, 2026-09-15-regressiecheck, 2026-09-21-weekoverzicht, 2026-09-23-seo-conversietest-run-1, 2026-09-25-seo-audit, 2026-09-07-compliance-todo, 2026-09-28-seo-conversietest-run-2]
vervangt: []
bronbestand: ""
deadline: ""
---
# SEO-regressiecheck — 28 september 2026

## In het kort

Controle-run, geen onderzoek. Dertien URL's gecontroleerd (sitemap-gedreven, zie hieronder). Kritieke check (geen `aggregateRating`) blijft schoon op alle dertien. Drie nieuwe afwijkingen dit keer, vier bekende afwijkingen blijven ongewijzigd open (geen nieuw backlogpunt, staat al open). GA4 werkte deze week wel; PageSpeed Insights zat op quotum.

## Kerncijfers

- **13** · gecontroleerde URL's · 0 met `aggregateRating`
- **54** · GA4-sessies (7 dagen) · -56% t.o.v. vorige week (123)
- **1** · GA4 key events (purchase) deze week · vorige week 2
- **3** · nieuwe pagina's in `sitemap.xml` ontdekt (verzendbeleid, retourbeleid, terugbetalingsbeleid)

## Acties

_Acties uit dit rapport staan in de growth-radar-backlog (`ACTIEBACKLOG.md`) en komen via het dashboard binnen — hier niet gedupliceerd._

## Bevindingen

Referentiepunt: [[2026-09-21-regressiecheck]] en de audit [[2026-09-25-seo-audit]]. URL-lijst dit keer sitemap-gedreven opgebouwd (zie Stap 2 van de routine): homepage, de drie productpagina's, beide collecties (`frontpage`, `gripsokken`), de drie `/pages/gripsokken-voor-*`-sportpagina's, beide blogindexen (`hi-grip`, `trends`), het nieuwste artikel (bepaald via de atom-feeds: "De twee grootste problemen in de sportwereld", gepubliceerd 15 feb 2026) en `/en/`.

### Nieuw ontdekt in de sitemap t.o.v. vorige week

1. `sitemap_agentic_discovery.xml` → `/agents.md` — Shopify's nieuwe agentic-commerce/UCP-bestand (200, `text/markdown`), standaard gegenereerd. Geen actie, informatief voor de Growth Radar.
2. Drie nieuwe pagina's: `/pages/verzendbeleid`, `/pages/retourbeleid`, `/pages/terugbetalingsbeleid` (zie afwijking 2 hieronder) — lijken een vervanging van de oude `/policies/*`-pagina's voor te bereiden, maar zijn dat nog niet.

### Afwijkingen

1. **Nieuwe `/en/`-homepage heeft 2× `<h1>` en een onvertaalde hero-tekst.** Naast de verwachte (verborgen) `<h1>HÏ GRIP</h1>` staat een tweede, zichtbare `<h1 class="sl-teaser__title">HÏ Grip Performance Gripsokken voor Sporters</h1>` — dezelfde Nederlandse tekst als de NL-homepage, niet vertaald naar het Engels. Exact hetzelfde bugpatroon als de NL-homepage vóór 15 september (toen opgelost, bevestigd 21 sep). De title-tag van `/en/` is bovendien nog steeds enkel `HÏ Grip` — dat is het al bekende, nog open backlogpunt over de lege EN-title.
   **Fix:** de verborgen H1 naar een `<span>`/`<p>` wijzigen (zoals eerder op de NL-homepage) en de hero-tekst vertalen.

2. **Drie nieuwe verzend-/retour-/betalingspagina's zijn onvolledig en spreken de oude beleidspagina's tegen.**
   - `/pages/verzendbeleid` (nieuw): noemt "binnen 1 werkdag verzonden" (correct, conform het besluit van Lars van 25 sep) maar noemt nergens de verzendkosten (€4,50) of de gratis-verzenddrempel (€35).
   - `/pages/retourbeleid` (nieuw): retourtermijn is gecorrigeerd naar 30 dagen (correct), maar rekent nog steeds **25% herbevoorradingskosten** en eist het product "ongeopend" terug — in strijd met de geest van het besluit van Lars en met het al genoteerde juridische risico in de Compliance To-Do Lijst §4.2 (herroepingsrecht mag geen kosten voor de consument met zich meebrengen anders dan de retourverzendkosten).
   - Ondertussen bestaan `/policies/refund-policy` (14 dagen, 25%), `/policies/shipping-policy` ("vóór 16:00") en `/policies/terms-of-service` (€4,25) gewoon door met de oude, foute waarden — er zijn nu **twee parallelle bronnen** voor dezelfde beleidsinformatie.
   - De homepage-meta-tekst "Bestel vóór 22:00, vandaag verzonden" (de vervallen belofte) blijkt via een gedeelde metafield ook op andere pagina's te verschijnen (gezien in de broncode van `/pages/terugbetalingsbeleid`, `/policies/refund-policy`, `/policies/shipping-policy`, `/policies/terms-of-service`) — breder dan eerder aangenomen.
   **Fix:** één bron van waarheid kiezen (waarschijnlijk de nieuwe `/pages/*`-pagina's), de oude `/policies/*`-pagina's laten doorverwijzen of bijwerken, de 25%-herbevoorradingskosten en de "ongeopend"-eis uit het retourbeleid halen, en de verzendkosten/-drempel op `/pages/verzendbeleid` zetten.

3. **`/collections/frontpage` heeft geen meta description** (0 `<meta name="description">`-tags gevonden). Mogelijk dezelfde onderliggende oorzaak als het al openstaande punt over `/collections/all` (ontbrekende SEO-instellingen op automatische collecties), maar een andere URL dan tot nu toe gemeld.
   **Fix:** beschrijving toevoegen via Shopify admin → SEO-instellingen, voor beide collecties.

### Al bekend, blijft open (staat open in de backlog — geen nieuw punt, niet gewijzigd)

- **Schema gedeeltelijk** (backlogpunt "SEO-schema-thema-wijzigingen gedeeltelijk gepusht"): `WebSite` staat nu alléén nog op de homepage en `/en/` — niet meer op de padel-pagina, waar hij op 21 september nog wel stond. `ItemList` ontbreekt nog op beide collecties. `FAQPage` ontbreekt nog op de productpagina('s) (wel aanwezig op homepage en de drie sportpagina's, nieuw t.o.v. eerdere metingen).
- **Redirect-keten `/products/hi-grip-gripsokken-1`** is nog steeds 2 stappen (`hi-grip-gripsokken-1` → `hi-grip-gripsokken` → `performance-gripsokken`), tegen de regel van maximaal 1 stap. Getrackt via `2026-09-23-seo-conversietest-run-1#b469a68a` (open). De twee 2.0-varianten (`performance-grip-socks-2-0-zwart/-wit`) redirecten wél in 1 stap — correct.
- **Homepage-meta "vóór 22:00 vandaag verzonden"**: getrackt via `2026-09-21-weekoverzicht#611d66c8` (open).
- **`/pages/gripsokken-voetbal`** (oude/typo-handle, niet hetzelfde als het nieuwe `/pages/gripsokken-voor-voetbal`) geeft nog steeds 404.

### Ongewijzigd / schoon

- Alle 13 URL's: HTTP 200, laadtijd 0,44–0,91s (ruim onder 1,5s).
- 12 van de 13 URL's: precies één niet-lege `<title>` en precies één `<h1>` (uitzondering: `/en/`, zie afwijking 1).
- Canonical en `hreflang` (nl/en/x-default) correct op alle 13 URL's.
- **Geen enkele van de 13 pagina's bevat `aggregateRating`** — kritieke check blijft schoon.
- Homepage: 9 van 25 afbeeldingen met `alt=""` (vorige week ook 9/25) — onder de meldgrens van 12, ongewijzigd.
- Live prijzen kloppen exact met het feitenbestand: 1-pack €13,49 / 3-pack €39,95 / 5-pack €61,95 (Performance Gripsokken) en €14,95 voor beide 2.0-varianten — geen tegenspraak.
- GA4 `purchase` staat nog steeds gemarkeerd als key event (`ONCE_PER_EVENT`, sinds 3 feb 2025) — bevestigt het al afgevinkte backlogpunt blijft correct.
- `shopify theme check`: niet uitgevoerd — thema-map niet beschikbaar in de cloudomgeving (bekende beperking).

### Trend

GA4-property 476032345, sessies per kanaal, laatste 7 dagen (21–27 sep) vs. de 7 dagen daarvoor (14–20 sep):

| Kanaal | Deze week | Vorige week |
|---|---|---|
| Direct | 25 | 88 |
| Organic Search | 23 | 24 |
| Organic Social | 1 | 4 |
| Referral | 1 | 4 |
| Cross-network | 2 | 0 |
| Unassigned | 2 | 2 |
| AI Assistant | 1 | 0 |
| Email | 0 | 1 |
| **Totaal** | **54** | **123** |

Let op botverkeer: "United States | Direct" daalde van 51 naar 7 sessies (0% engagement, waarschijnlijk bot) — de daling in Direct-verkeer is dus deels een opschoning van botverkeer, geen echt verlies. Na aftrek blijft ook het Nederlandse verkeer lager (40 vs 52 sessies), engagementrate steeg wel (57,5% vs 46,2%). Niet verder geduid — dat is werk voor de Growth Radar.

AI Assistant-kanaal, laatste 30 dagen: **3 sessies** (was 1-2 in eerdere metingen — lichte groei, te klein om een trend te noemen).

PageSpeed Insights (mobiel): **niet gemeten** — openbaar PSI-quotum zit vast op HTTP 429 voor het project `higrip-analytics` (zelfde probleem als eerdere runs). Zie "Wat niet lukte".

## Wat niet lukte

- **PageSpeed Insights** (homepage, `/collections/gripsokken`, `/products/performance-gripsokken`): HTTP 429, quotum op. PageSpeed Insights API staat uit in het Cloud-project `higrip-analytics`; nodig is óf de API aanzetten óf een `PAGESPEED_API_KEY`.
- **`shopify theme check`**: thema-map `C:\Users\Test\higrip-theme` is niet beschikbaar in deze cloudomgeving. Overgeslagen, zoals in elke eerdere cloud-run van deze routine.

## Bronnen

- Live site: curl op de 13 URL's + sitemap-bestanden, 28 september 2026.
- `python 05_Research/_tools/google_data.py ga4 [--dagen 30]` en `keyevents`.
- `python 05_Research/_tools/google_data.py cwv` (PageSpeed, gefaald op quotum).
- Feitenbestand: `00_Brand_Core/Feiten & Actuele Staat.md`.

## Aantekeningen
