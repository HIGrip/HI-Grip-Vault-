---
id: 2026-11-09-regressiecheck
titel: "SEO-regressiecheck — 9 november 2026"
kerntitel: "Nieuwste blogartikel verdwenen: directe 404 zonder redirect, blog /blogs/trends nu leeg"
datum: 2026-11-09
bron: routine
routine: "seo-regressiecheck"
categorie: SEO
status: nieuw
prioriteit: P1
samenvatting: "Het artikel dat sinds 28 september elke week als 'nieuwste artikel' in de sitemap stond, is verwijderd en geeft nu een directe 404 zonder 301 — de blog /blogs/trends zelf is leeg geworden, terwijl 4 nieuwe artikelen onder /blogs/hi-grip zijn verschenen. Daarnaast telt de homepage nu 13 lege alt-teksten op contentafbeeldingen (grens 12), en meldt GA4 deze week 0 key events ondanks 198 sessies."
gerelateerd: [2026-11-09-search-console, 2026-11-09-seo-conversietest-run-7]
vervangt: []
bronbestand: ""
deadline: ""
---
# SEO-regressiecheck — 9 november 2026

> Map: [[Waar staat wat]]

## In het kort

De verplichte URL-lijst blijft qua samenstelling gelijk aan 2 november (16 URL's), maar het "nieuwste artikel" is gewisseld: `/blogs/trends/de-twee-grootste-problemen-in-de-sportwereld-het-antwoord-van-4-ondernemende-sporters` — dat sinds 28 september elke week als nieuwste artikel werd gecontroleerd — is uit de sitemap verdwenen en geeft nu een directe 404 zonder redirect. De hele blog `/blogs/trends` is leeg ("geen artikelen in deze blog"). Tegelijk zijn er 4 nieuwe artikelen onder `/blogs/hi-grip` verschenen (lastmod ~5 nov), met `waarom-glijdt-je-voet-in-je-schoen` als nieuwste. Verder nieuw: de homepage telt 13× `alt=""` op echte contentafbeeldingen (grens is 12, waarschijnlijk een dubbele `<img>/<source>`-render van 6 foto's). Alle 16 URL's zijn verder technisch schoon (200, <1,5s, 1 title/H1, canonicals/hreflang correct, `aggregateRating` blijft schoon). GA4 laat deze week 0 key events zien (vorige week 2) bij een daling naar 198 sessies (−41,8%, door het aflopen van de betaalde social-campagne) — net als op 15 september een week met 0 geregistreerde key events, mogelijk gewoon een week zonder aankopen via dat kanaal, geen directe actie.

## Kerncijfers

- **16** · gecontroleerde URL's
- **2** · nieuwe afwijkingen (beide P1 regressie)
- **198** · GA4-sessies (7 dagen) · −41,8% t.o.v. vorige week (340)
- **0** · GA4 key events (7 dagen) · vorige week 2, omzet €0 (vorige €105,90)

## Acties

- [ ] P1 · [regressie] `/blogs/trends/de-twee-grootste-problemen-in-de-sportwereld-het-antwoord-van-4-ondernemende-sporters` geeft nu een directe 404 zonder redirect; de blog `/blogs/trends` zelf is leeg
- [ ] P1 · [regressie] Homepage: 13× `alt=""` op contentafbeeldingen (grens 12), waarschijnlijk een dubbele render van 6 foto's

## Bevindingen

Referentiepunt: [[2026-11-02-regressiecheck]]. Verplichte URL-lijst dit keer (16): homepage, de drie productpagina's, de collectie `gripsokken`, de vijf `/pages/gripsokken-*`-pagina's (padel, tennis, voetbal, rugby, vergelijken), de twee campagnepagina's `gripsokken-2-0`/`-2-1`, beide blogindexen (`hi-grip`, `trends`), het nieuwste artikel en `/en/`.

### Wijziging t.o.v. 2 nov

Geen nieuwe of verdwenen pagina's in de verplichte lijst zelf, maar het nieuwste artikel wisselde: zie Afwijkingen. `sitemap_metaobject_pages_1.xml` (altijd al leeg) staat deze week niet meer in de hoofd-`sitemap.xml` — geen actie.

### Afwijkingen (nieuw)

1. **`/blogs/trends/de-twee-grootste-problemen-in-de-sportwereld-het-antwoord-van-4-ondernemende-sporters`: directe 404, geen redirect; `/blogs/trends` is leeg (nieuw, 9 nov 2026)**
   Deze URL stond minimaal sinds 28 september elke week in de verplichte lijst als "nieuwste artikel" en was dus geïndexeerd. Hij is nu uit `sitemap_articles_1.xml` verwijderd en geeft 404 in plaats van een 301. De blog `/blogs/trends` zelf bestaat nog maar toont "geen artikelen in deze blog. Kom snel terug." Tegelijk zijn er 4 nieuwe/andere artikelen onder `/blogs/hi-grip` verschenen (lastmod ~5 nov): `hoe-zorg-ik-voor-mijn-gripsokken`, `de-wetenschap-achter-gripsokken`, `welke-maat-gripsokken`, `waarom-glijdt-je-voet-in-je-schoen` (nieuwste, als verplichte check gebruikt).
   **Fix:** of het artikel herstellen/verplaatsen met een 301 vanaf de oude URL naar een vervangend artikel of naar `/blogs/hi-grip`, zodat eventuele backlinks en resterende ranking niet verloren gaan; of, als bewust verwijderd, alsnog een 301 zetten.
2. **Homepage: 13× `alt=""` op contentafbeeldingen (nieuw, 9 nov 2026)**
   Het gaat om echte product-/sfeerfoto's (o.a. `hp-sh-sok-10`, `hp-sh-sok-20-zwart`, `IMG_0269`, `IMG_0231`, `IMG_0252`, `IMG_0258`, elk 2×, waarschijnlijk door een dubbele `<img>/<source>`-render), niet om decoratieve iconen.
   **Fix:** beschrijvende alt-tekst toevoegen (bv. "HÏ Grip gripsokken 2.0 zwart in actie").

### Al bekend, blijft open (staat open in de backlog — geen nieuw punt, niet gewijzigd)

- **`/pages/terugbetalingsbeleid`**: titel is "Betalingsbeleid" (opgelost), meta description ontbreekt nog steeds.
- **Verzend/retour-tegenspraak**: `/policies/shipping-policy` toont nog "vóór 16:00", `/policies/refund-policy` toont nog "14 dagen" + "25%"; de nieuwe `/pages/verzendbeleid` en `/pages/retourbeleid` zijn zelf al correct (€4,50/€35-drempel, 30 dagen zonder 25%/ongeopend-eis).
- **`FAQPage`-schema op de drie productpagina's**: ontbreekt nog (Product/ProductGroup/Offer, inclusief correcte `MerchantReturnPolicy` van 30 dagen, is wel compleet).
- **`/pages/gripsokken-2-0` en `/pages/gripsokken-2-1`**: missen nog steeds meta description én `robots`-meta, blijven bijna-identieke duplicaten. Vooruitgang: beide hebben inmiddels wél Product/ProductGroup/Offer/Brand-schema (was er bij de vorige check nog niet) — geen apart punt, alleen een verbetering.
- **`/pages/teamorder`**: mist nog steeds meta description.
- **`/blogs/intern`**: nog steeds publiek, zonder `noindex`.
- **`/collections/all`** (200, los van de sitemap) en **`/collections/frontpage`** (404): ongewijzigd.
- **Sporters-claim 3500+**: bevestigd op homepage, EN-homepage, alle sportpagina's, producten, vergelijkpagina en teamorder; alleen `/collections/gripsokken` toont nog "3000+ sporters" (JSON-LD description én zichtbare USP-balk) — bekend sinds 12 okt via [[2026-10-11-seo-audit-weekdelta]], geen apart backlogpunt.
- **Redirect-keten** `hi-grip-gripsokken-1` → `hi-grip-gripsokken` → `performance-gripsokken`: nog steeds 2 stappen (meer dan de toegestane 1), eindigt op 200.

### Ongewijzigd / schoon

- Alle 16 URL's: HTTP 200, responstijd 0,30–0,90s (ruim onder 1,5s). Precies 1 niet-lege document-`<title>` + 1 niet-lege meta description (behalve de 3 bekende lege-meta-URL's) en precies 1 `<h1>` op elke pagina.
- Canonical naar www.higrip.nl en hreflang (nl/en/x-default) correct op alle 16.
- **`aggregateRating`** op geen van de 16 pagina's gevonden — kritieke check blijft schoon.
- 8 van de 16 URL's volledig schoon: `/pages/gripsokken-voor-padel`, `-tennis`, `-voetbal`, `-rugby`, `/pages/gripsokken-vergelijken`, `/blogs/hi-grip`, `/blogs/hi-grip/waarom-glijdt-je-voet-in-je-schoen`, `/en/`.
- `shopify theme check`: niet uitgevoerd — thema-map niet beschikbaar in de cloudomgeving.

### Trend

GA4, sessies per kanaal, laatste 7 dagen (2–8 nov) vs. de 7 dagen daarvoor (26 okt–1 nov):

| Kanaal | Deze week | Vorige week |
|---|---|---|
| Paid Social | 26 | 139 |
| Organic Search | 38 | 42 |
| **Totaal** | **198** | **340** |

De daling (−41,8%) komt grotendeels door het aflopen van de betaalde social-campagne (Paid Social −81%); Organic Search bleef vrijwel stabiel (−9,5%). **Key events: 0 (vorige 2), omzet €0 (vorige €105,90)** — net als bij de allereerste meting (15 sep) een week zonder geregistreerde aankopen via GA4; of dit een echte lege week is of een hernieuwd meetgat, wordt duidelijk uit de Shopify Analytics-cijfers van module C van vandaag.

30 dagen: 716 sessies (vorige periode 439, +63%), key events 5 (vorige 7), omzet €276,65 (vorige €168,92).

AI Assistant-kanaal, laatste 30 dagen: **3 sessies** (vorige meting 2 nov, 30-daags venster: 4), key events 0 — te klein voor een trend.

PageSpeed Insights (mobiel): **niet gemeten** — openbaar PSI-quotum zit nog vast op HTTP 429 voor het project `higrip-analytics`, zelfde beperking als elke eerdere run.

## Wat niet lukte

- **PageSpeed Insights** (homepage, 1 collectie, 1 product): HTTP 429, quotum op. Nodig: `PageSpeed Insights API` aanzetten in `higrip-analytics` of een `PAGESPEED_API_KEY`.
- **`shopify theme check`**: thema-map niet beschikbaar in deze cloudomgeving.
- De Google-pakketten (`google-analytics-data`, `google-api-python-client`, `google-auth`) ontbraken aanvankelijk onder de `python3`-interpreter van deze cloudsessie; opgelost met `python3 -m pip install cffi google-analytics-data google-api-python-client google-auth` — geen vault-wijziging nodig, werkt nu ook voor module B en C.

## Bronnen

- Live site: curl op de 16 verplichte URL's + sitemap-bestanden (NL en EN), 9 november 2026.
- `python3 02_Dashboard/_tools/google_data.py ga4 --dagen 7` / `--dagen 30`.
- Feitenbestand: `00_Brand_Core/Feiten & Actuele Staat.md`.

## Aantekeningen
