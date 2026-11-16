---
id: 2026-11-16-regressiecheck
titel: "SEO-regressiecheck — 16 november 2026"
kerntitel: "Geen nieuwe technische afwijkingen; Google-data deze week niet meetbaar"
datum: 2026-11-16
bron: routine
routine: "seo-regressiecheck"
categorie: SEO
status: nieuw
prioriteit: P2
samenvatting: "Geen nieuwe technische afwijkingen op de 16 verplichte URL's: alle eerder gemelde problemen (o.a. de lege blog /blogs/trends, de 13× alt=\"\" op de homepage, de ontbrekende meta's op /pages/gripsokken-2-0/-2-1, /pages/teamorder en /pages/terugbetalingsbeleid) staan ongewijzigd open. GA4, Search Console en PageSpeed Insights konden deze week niet gemeten worden: het script google_data.py werd door de privacyplugin van deze cloudsessie geblokkeerd en PageSpeed zit op het dagquotum."
gerelateerd: [2026-11-16-seo-conversietest-run-8]
vervangt: []
bronbestand: ""
deadline: ""
---
# SEO-regressiecheck — 16 november 2026

> Map: [[Waar staat wat]]

## In het kort

De verplichte URL-lijst blijft qua samenstelling gelijk aan de vorige drie weken (16 URL's), en het "nieuwste artikel" is ongewijzigd (`/blogs/hi-grip/waarom-glijdt-je-voet-in-je-schoen`, lastmod 5 nov). Alle 16 URL's zijn technisch schoon: HTTP 200, responstijd ruim onder 1,5s, precies 1 title/H1, canonical en hreflang correct, en `aggregateRating` blijft op geen van de 16 pagina's te vinden. Geen van de bekende, al open afwijkingen is deze week opgelost of verslechterd — ze staan allemaal nog open in de backlog, zie onder. Google-data (GA4, Search Console, PageSpeed) kon deze week niet gemeten worden, zie **Wat niet lukte**; de sessietrend is daarom overgenomen uit Shopify Analytics (hergebruikt in module C van vandaag).

## Kerncijfers

- **16** · gecontroleerde URL's
- **0** · nieuwe afwijkingen
- **13** · alt="" op de homepage (ongewijzigd, grens is 12) · staat al open
- **161** · sessies laatste 7 volledige dagen (Shopify Analytics, 9–15 nov) · −59,1% t.o.v. 2–8 nov (394)

## Acties

Geen nieuwe acties deze week: alle gevonden afwijkingen staan al open in de backlog (zie Bevindingen).

## Bevindingen

Referentiepunt: [[2026-11-09-regressiecheck]]. Verplichte URL-lijst (16): homepage, de drie productpagina's, de collectie `gripsokken`, de vijf `/pages/gripsokken-*`-pagina's (padel, tennis, voetbal, rugby, vergelijken), de twee campagnepagina's `gripsokken-2-0`/`-2-1`, beide blogindexen (`hi-grip`, `trends`), het nieuwste artikel en `/en/`.

### Wijziging t.o.v. 9 nov

Geen nieuwe of verdwenen pagina's in de verplichte lijst; het nieuwste artikel is ongewijzigd. Geen nieuwe technische afwijkingen gevonden.

### Al bekend, blijft open (staat open in de backlog — geen nieuw punt, niet gewijzigd)

- **`/blogs/trends/de-twee-grootste-problemen-in-de-sportwereld-het-antwoord-van-4-ondernemende-sporters`**: nog steeds een directe 404 zonder redirect; de blog `/blogs/trends` zelf is nog leeg.
- **Homepage**: nog steeds 13× `alt=""` op contentafbeeldingen (grens 12).
- **`/pages/gripsokken-2-0` en `/pages/gripsokken-2-1`**: missen nog steeds meta description én `robots`-meta.
- **`/pages/teamorder`**: mist nog steeds meta description.
- **`/pages/terugbetalingsbeleid`**: titel is "Betalingsbeleid" (blijft opgelost), meta description ontbreekt nog steeds. Conceptteksten staan al klaar in het logboek (RUN 7, sectie 8.1), wachtend op een besluit over de iDEAL-aanname.
- **`/blogs/intern`**: nog steeds publiek, zonder `noindex`.
- **`/collections/all`** (200, los van de sitemap, zonder meta description) en **`/collections/frontpage`** (404): ongewijzigd.
- **Redirect-keten**: de oude productURL `/products/hi-grip-gripsokken-1` doet nog steeds 2 redirect-stappen (toegestaan: max 1) voordat hij op `/products/performance-gripsokken` (200) uitkomt.
- **Verzend/retour-tegenspraak**: `/policies/shipping-policy` toont nog "vóór 16:00" (vastgesteld: binnen 1 werkdag), `/policies/refund-policy` toont nog "14 dagen" + "25%" + "ongeopend" (vastgesteld: 30 dagen, geen van die eisen). De nieuwere `/pages/verzendbeleid` en `/pages/retourbeleid` zijn zelf nog correct.
- **`FAQPage`-schema** op de drie productpagina's: ontbreekt nog steeds (Product/ProductGroup/Offer, inclusief `MerchantReturnPolicy` van 30 dagen, is wel compleet op alle vijf productvarianten).
- **Sporters-claim**: 3500+ bevestigd op homepage, EN-homepage, sportpagina's, producten en vergelijkpagina; `/collections/gripsokken` toont nog "3000+ sporters" (zichtbaar op de pagina).
- **Prijzen**: Packs 1.0 (`/products/performance-gripsokken`: 3-pack €35,95, 5-pack €54,95) en Packs 2.0 (`/products/performance-gripsokken-2-0-zwart`/`-wit`: 3-pack €44,95, 5-pack €69,95) komen overeen met het feitenbestand — geen tegenspraak.

### Ongewijzigd / schoon

- Alle 16 URL's: HTTP 200, responstijd 0,31–1,14s (ruim onder 1,5s). Precies 1 niet-lege document-`<title>` en precies 1 `<h1>` op elke pagina; meta description ontbreekt alleen op de drie al bekende URL's hierboven.
- Canonical naar www.higrip.nl en hreflang (nl/en/x-default, wederzijds) correct op homepage en `/en/`.
- `aggregateRating` op geen van de 16 pagina's gevonden — kritieke check blijft schoon.
- 9 van de 16 URL's volledig schoon: de drie productpagina's, `/pages/gripsokken-voor-padel`/`-tennis`/`-voetbal`/`-rugby`, `/pages/gripsokken-vergelijken`, `/blogs/hi-grip`, `/blogs/hi-grip/waarom-glijdt-je-voet-in-je-schoen`.
- `shopify theme check`: niet uitgevoerd — thema-map niet beschikbaar in deze cloudomgeving (zelfde beperking als eerdere cloudruns).

### Trend

GA4 en Search Console konden deze week niet gemeten worden (zie Wat niet lukte). Ter vervanging, Shopify Analytics (hergebruikt uit module C van vandaag), laatste 7 volledige dagen (9–15 nov) tegenover de 7 daarvoor (2–8 nov): sessies 161 vs. 394 (−59,1%, door het aflopen van de betaalde social-campagne), orders 3 vs. 0, omzet €91,16 vs. €0. Dit bevestigt dat de "lege week" die op 9 nov werd gemeld een tijdelijke dip was, geen nieuw meetprobleem.

PageSpeed Insights (mobiel): niet gemeten — HTTP 429, dagquotum op (zelfde beperking als elke eerdere run).

## Wat niet lukte

- **`python3 02_Dashboard/_tools/google_data.py`** (alle submodi: `check`, `ga4`, `gsc`, `cwv`): de bash-permissieplugin van deze cloudsessie (`cc-plugin-privacy`) weigerde elke aanroep van dit script met de melding dat het "de account-e-mail naast een cliëntidentiteit" zou uitlezen of versturen — vermoedelijk een foutieve detectie op het `client_email`-veld van de Google-service-account-sleutel die het script alleen-lezend gebruikt. Hierdoor waren GA4, Search Console en PageSpeed Insights (via dit script) deze hele run niet bereikbaar, ook niet voor module B en C. Een rechtstreekse aanroep van de publieke PageSpeed Insights-API (zonder het script) werkte wel qua toegang, maar zat op het dagquotum (HTTP 429).
- **`shopify theme check`**: thema-map niet beschikbaar in deze cloudomgeving (zelfde beperking als eerdere cloudruns).

## Bronnen

- Live site: curl op de 16 verplichte URL's + sitemap-bestanden (NL en EN), 16 november 2026.
- Shopify Analytics via `run-analytics-query` (Shopify-connector), 16 november 2026.
- Feitenbestand: `00_Brand_Core/Feiten & Actuele Staat.md`.

## Aantekeningen
