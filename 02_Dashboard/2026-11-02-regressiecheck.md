---
id: 2026-11-02-regressiecheck
titel: "SEO-regressiecheck — 2 november 2026"
kerntitel: "Campagnepagina's gripsokken-2-0/-2-1: geen meta description, indexeerbare duplicaten"
datum: 2026-11-02
bron: routine
routine: "seo-regressiecheck"
categorie: SEO
status: nieuw
prioriteit: P2
samenvatting: "Twee nieuwe pagina's (/pages/gripsokken-2-0 en /pages/gripsokken-2-1), die deze week voor het eerst actief betaald social-verkeer krijgen, missen allebei een meta description en zijn — anders dan de al bekende noindex'd /-a/-b-varianten — zonder robots-meta dus gewoon indexeerbare, bijna-identieke duplicaten van elkaar. De prijs zelf klopt (€19,95 staat correct doorgestreept als 'Normale prijs', €17,95 is de echte 'Prijs met korting', in lijn met het besluit van 29-10); het risico zit in duplicate content, niet in de prijs."
gerelateerd: [2026-10-19-regressiecheck, 2026-10-27-seo-audit-higrip-nl, 2026-10-29-ads-funnel-en-snelheid-productpagina]
vervangt: []
bronbestand: ""
deadline: ""
---
# SEO-regressiecheck — 2 november 2026

> Map: [[Waar staat wat]]

## In het kort

De sitemap bevat deze week vier nieuwe `/pages/*`-URL's: `gripsokken-vergelijken`, `gripsokken-2-0`, `gripsokken-2-1` en `teamorder`. De laatste twee zijn vrijwel identiek aan elkaar en missen een meta description. GA4 bevestigt dat dit geen theoretisch risico is: Paid Social ging van 0 naar 139 sessies deze week, voor een flink deel landend op precies deze pagina's (met varianten als `?view=ab-b` en `?eaPreview=true&pb=0`, wat op een actieve advertentie- of AB-testcampagne wijst). Het doel van deze pagina's stond al als Besluit-punt open sinds de audit van 27 oktober (toen nog als `/pages/gripsokken-2-0-a`/`-b`, noindex); dit keer zijn ze zonder `-a`/`-b`-suffix en, anders dan die bekende varianten, zonder `noindex`-meta beland — dus gewoon indexeerbaar. De prijs zelf is **geen fout**: €19,95 staat correct doorgestreept als "Normale prijs" en €17,95 is de echte "Prijs met korting", in lijn met het besluit van 29 oktober (adviesprijs €19,95, webshop blijft €17,95) — module C (conversietest) bevestigde dit onafhankelijk via de live HTML. Verder: vooruitgang op schema (WebSite en ItemList staan nu ook op de collectie en de productpagina's) en op de titel van `/pages/terugbetalingsbeleid` (niet meer "American Express"), maar de meta description daar ontbreekt nog steeds.

## Kerncijfers

- **16** · gecontroleerde URL's (verplichte lijst + de 3 nieuwe `/pages/gripsokken-*`-pagina's)
- **2** · nieuwe afwijkingen (beide P2)
- **340** · GA4-sessies (7 dagen) · +325% t.o.v. vorige week (80), vrijwel volledig door Paid Social (139, vorige week 0)
- **2** · GA4 key events (7 dagen) · omzet €105,90 (vorige week €0)

## Acties

- [ ] P2 · Nieuwe pagina's `/pages/gripsokken-2-0` en `/pages/gripsokken-2-1` missen een meta description, hebben geen `robots`-meta (dus indexeerbaar, anders dan de bekende noindex `-a`/`-b`-varianten) en zijn bijna-identieke duplicaten van elkaar met overlappend Product/Offer/ProductGroup-schema — bevestigen of dit tijdelijke campagnepagina's zijn (dan noindex,nofollow) of permanent (dan unieke meta's)
- [ ] P2 · `/pages/teamorder` (nieuw in de sitemap) mist een meta description

## Bevindingen

Referentiepunt: [[2026-10-19-regressiecheck]]. Verplichte URL-lijst dit keer (16): homepage, de drie productpagina's, de collectie `gripsokken`, zeven `/pages/gripsokken-*`-pagina's (padel, tennis, voetbal, rugby, **nieuw:** vergelijken, 2-0, 2-1), beide bestaande blogindexen (`hi-grip`, `trends`), het nieuwste artikel (ongewijzigd: "De twee grootste problemen in de sportwereld...", lastmod 9 okt) en `/en/`.

### Nieuw ontdekt in de sitemap t.o.v. vorige week (19 okt)

- **`/pages/gripsokken-vergelijken`** — vergelijkingspagina "1.0 of 2.0? Kies je grip", eigen H1, titel en meta description aanwezig, geen technisch probleem gevonden.
- **`/pages/gripsokken-2-0` en `/pages/gripsokken-2-1`** — zie Afwijkingen.
- **`/pages/teamorder`** — zie Afwijkingen.
- **`sitemap_pages_1.xml`** bevat verder dezelfde eerder al geziene uitbreiding (over-ons, zakelijk, contact, veelgestelde-vragen, missie/waarden/visie, privacybeleid, retail, pilates, clubwear, collection, de 3 beleidspagina's) — buiten de verplichte checklist, niet individueel gecontroleerd.

### Afwijkingen

1. **`/pages/gripsokken-2-0` en `/pages/gripsokken-2-1`: geen meta description, geen `robots`-meta, bijna-identieke duplicaten (nieuw, 2 nov 2026)**
   Beide pagina's hebben hetzelfde H1 ("Performance Gripsokken 2.0 Wit"), dezelfde Product/Brand/Offer/ProductGroup-schema en geen `<meta name="description">`. De prijsweergave zelf is **correct**: €19,95 staat terecht doorgestreept als "Normale prijs" (compare-at) en €17,95 is de echte "Prijs met korting" — in lijn met het besluit van 29 oktober (adviesprijs €19,95, webshop blijft €17,95); module C (conversietest) bevestigde dit onafhankelijk. Wat wél opvalt: deze twee URL's hebben, anders dan de al bekende `/pages/gripsokken-2-0-a`/`-b`-varianten (noindex,nofollow), géén `robots`-meta — dus standaard indexeerbaar — terwijl ze inhoudelijk nagenoeg identiek zijn aan elkaar en overlappen met de echte productpagina's. GA4 (7 dagen) laat op deze pagina's en hun varianten (`?view=ab-b`, `?eaPreview=true&pb=0`, `?fbclid=...`) samen zeker 27 sessies zien met bouncerates van 83–100%, en Paid Social ging deze week van 0 naar 139 sessies — een actieve betaalde campagne landt hier.
   - **Gerelateerd, al open — niet gewijzigd:** [[2026-10-27-seo-audit-higrip-nl]] heeft al "Besluit: A/B-testpagina's `/pages/gripsokken-2-0-a` en `-b` (noindex,nofollow) staan in de sitemap; doel bevestigen voordat iets verandert" open staan (laatst gecontroleerd 28-10, nog `handmatig`) — dat besluit dekt nu ook deze twee niet-geïndexeerd-gemarkeerde varianten. Het aparte prijsbesluit-punt (€19,95) is met deze live-check beantwoord (de opzet is correct) maar niet aangepast, zoals de regel voorschrijft.
2. **`/pages/teamorder` mist een meta description (nieuw, 2 nov 2026)**
   Titel ("Teamorder – HÏ Grip") is aanwezig en correct, maar er is geen `<meta name="description">`.

### Al bekend, blijft open (staat open in de backlog — geen nieuw punt, niet gewijzigd)

- **`/pages/terugbetalingsbeleid`**: de titel is inmiddels "Betalingsbeleid | HÏ Grip" (niet meer "American Express" — opgelost), maar de meta description ontbreekt nog steeds. Komt overeen met het bewijs dat de actiecontrole vandaag (2-11) al vastlegde op `backlog#c51a9579`.
- **`FAQPage`-schema op de drie productpagina's**: ontbreekt nog, terwijl de pagina's een zichtbare "Veelgestelde Vragen"-sectie hebben (bevestigd op `/products/performance-gripsokken-2-0-zwart`).
- **`/blogs/intern`**: staat nog steeds publiek (HTTP 200) zonder `noindex`.
- **`/collections/all`**: nog geen meta description.
- **`/collections/frontpage`**: nog een directe 404.
- **Sporters-claim 3000+ vs 3500+**: de homepage-meta (NL) toont nog "3000+ sporters"; productpagina's en EN-homepage zijn al op 3500+ gecorrigeerd. Ongewijzigd.
- **Redirect-keten** `hi-grip-gripsokken-1` → `hi-grip-gripsokken` → `performance-gripsokken`: niet opnieuw getest deze week, vermoedelijk ongewijzigd (2 stappen).

### Vooruitgang (geen nieuw punt, update van een bekend schemapunt)

- `WebSite` staat nu ook op de collectiepagina en op alle drie productpagina's (eerder ontbrekend op precies die pagina's).
- `ItemList` staat nu op de collectiepagina (eerder ontbrekend).
- Dit lost het bekende backlogpunt over onvolledige schema (`backlog#fac26f6c`) niet volledig op: `FAQPage` op de productpagina's blijft het resterende gat.

### Ongewijzigd / schoon

- Alle 16 gecontroleerde URL's: HTTP 200. Twee eerste metingen gaven een uitschieter (2,29s en 2,02s); bij 3× herhalen op diezelfde URL's kwam de tijd steeds onder 1,5s uit — netwerk-uitschieter, geen structurele regressie.
- Alle 16: precies één niet-lege document-`<title>` (de generieke titelteller ving ook `<title>`-elementen van betaalicoon-SVG's in de footer op zoals "American Express"/"Visa" op elke pagina — dat zijn accessibility-titels van de SVG's, geen document-titel, en geen regressie) en precies één `<h1>`.
- Canonical en `hreflang` (nl/en/x-default) correct op alle 16.
- **Geen enkele van de 16 pagina's bevat `aggregateRating`** — kritieke check blijft schoon.
- Homepage en `/en/`: 8 `alt=""`-afbeeldingen elk — onder de meldgrens van 12.
- Live prijzen op de **echte** productpagina's kloppen met het feitenbestand (€14,95 1-pack, €17,95 voor beide 2.0-varianten); verzendkosten (€4,50), -drempel (€35) en -belofte (binnen 1 werkdag) komen overeen in de metadescriptions van homepage, productpagina's en `/en/`.
- `/collections/all` (200) en `/collections/frontpage` (404) bestaan nog los van de sitemap, zelfde status als voorgaande weken.
- `/blogs/intern` nog steeds 200, zonder artikelen.
- `shopify theme check`: niet uitgevoerd — thema-map niet beschikbaar in de cloudomgeving.

### Trend

GA4-property 476032345, sessies per kanaal, laatste 7 dagen (26 okt–1 nov) vs. de 7 dagen daarvoor (19–25 okt):

| Kanaal | Deze week | Vorige week |
|---|---|---|
| Paid Social | 139 | 0 |
| Direct | 105 | 37 |
| Organic Search | 42 | 26 |
| Organic Social | 26 | 5 |
| Paid Other | 12 | 0 |
| Organic Shopping | 3 | 7 |
| Referral | 6 | 3 |
| Email | 5 | 0 |
| Unassigned | 4 | 1 |
| AI Assistant | 1 | 1 |
| **Totaal** | **340** | **80** |

De stijging is niet alleen Paid Social: Direct (+184%) en Organic Social (+420%) stegen ook fors, wat past bij een campagne die ook los van de ad-click doorwerkt (merkzoekopdrachten, delen). Botverkeer ("United States | Direct", 57 sessies, 15,8% engagement) blijft fors maar is er in beide perioden; filteren verandert de richting van de trend niet. Funnel (7 dagen): 213 productweergaven, 16 add-to-cart, 6 begin-checkout, 2 purchases (vorige week: 25 / 3 / 2 / 0) — de funnel werkt door tot aankoop, al blijft het absolute aantal klein.

AI Assistant-kanaal, laatste 30 dagen: **2 sessies** (vorige meting 19 okt, 30-daags venster: 5) — te klein voor een trend.

PageSpeed Insights (mobiel): **niet gemeten** — openbaar PSI-quotum zit nog vast op HTTP 429 voor het project `higrip-analytics`, zelfde beperking als elke eerdere run.

## Wat niet lukte

- **PageSpeed Insights** (homepage, `/collections/gripsokken`, `/products/performance-gripsokken`): HTTP 429, quotum op. Nodig: `PageSpeed Insights API` aanzetten in `higrip-analytics` of een `PAGESPEED_API_KEY`.
- **`shopify theme check`**: thema-map niet beschikbaar in deze cloudomgeving.

## Bronnen

- Live site: curl op de 16 verplichte URL's + sitemap-bestanden (NL en EN) + `/pages/teamorder`, `/collections/all`, `/collections/frontpage`, `/blogs/intern`, 2 november 2026.
- Shopify product-JSON (`.js`) voor de drie echte productpagina's (prijscontrole).
- `python3.13 02_Dashboard/_tools/google_data.py ga4 --dagen 7` / `--dagen 30` (python3 in deze cloudomgeving mist de GA4-modules; gebruik python3.13).
- `python3.13 02_Dashboard/_tools/google_data.py cwv` (PageSpeed, gefaald op quotum).
- Feitenbestand: `00_Brand_Core/Feiten & Actuele Staat.md`.

## Aantekeningen
