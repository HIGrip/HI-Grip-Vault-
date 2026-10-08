---
id: 2026-10-08-audit-higrip-nl-seo-aeo-geo-aio-sxo-nieuwe-run
titel: "Audit higrip.nl — SEO, AEO, GEO, AIO en SXO, nieuwe run 8 oktober (met Search Console en GA4)"
kerntitel: "Techniek is sterk, maar entiteit, claims en vertrouwen kosten AI-zichtbaarheid"
datum: 2026-10-08
bron: los
routine: ""
categorie: SEO
status: nieuw
prioriteit: P1
samenvatting: "De techniek van higrip.nl is in orde (alle 105 sitemap-URL's gecontroleerd, canonical en hreflang overal goed), maar de entiteit voor AI-systemen is kaal en verkeerde claims staan nog in schema en op EN-pagina's. Zoekverkeer groeit wel: Search Console toont +90% klikken, vooral op merktermen, en de GA4-aankooptracking werkt weer."
gerelateerd: [2026-10-08-seo-aeo-geo-aio-sxo-audit, 2026-09-25-seo-audit, 2026-10-08-search-console, 2026-10-05-regressiecheck, 2026-09-30-growth-radar-ai-search, 2026-10-07-missie-visie-pagina, 2026-10-07-shoppagina-keuzepagina, 2026-09-21-beachhead-rugby]
vervangt: []
bronbestand: ""
deadline: ""
---
# Audit higrip.nl — SEO, AEO, GEO, AIO en SXO, nieuwe run 8 oktober (met Search Console en GA4)

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[Waar staat wat]] · [[Home]]

## In het kort

Tweede audit op 8 oktober, gedaan door Denzel via de Website Agent met drie sub-agents: SEO technisch, AEO/GEO/AIO en Conversie & Analyse (data en SXO). Design, Website Copy en E-mail zijn bewust overgeslagen, omdat er niets gebouwd of geschreven is. Alles is alleen gelezen; niets is gewijzigd.

Het verschil met [[2026-10-08-seo-aeo-geo-aio-sxo-audit]]: dit keer zijn alle 105 sitemap-URL's opgehaald (112 requests, 3 seconden pauze, geen enkele 403), dus alle 23 blogs en alle `/en/*`-pagina's zijn wel beoordeeld. Search Console en GA4 werkten via `google_data.py`. PageSpeed Insights gaf nog steeds 429, dus er is geen echte LCP-, INP- of CLS-meting.

**Scores** (door de sub-agents toegekend, binnen dezelfde sessie en niet extern gevalideerd; de 54 van 25-9 komt uit een andere meetmethode en is niet 1-op-1 vergelijkbaar):

| Lens | Score | Kern |
|---|---|---|
| SEO technisch en on-page | 62 | Technisch 82, on-page 48, structured data 55, interne links 50, performance 50 (indicatief) |
| AEO | 58 | Sportpagina's sterk; gids "Wat zijn gripsokken?" zwak |
| GEO | 38 | Kale Organization, inconsistent aantal oprichters, claims in schema |
| AIO / Merchant | 45 | Geen `gtin`, `shippingDetails` of `hasMerchantReturnPolicy`; `InStock` bij voorraad 0 |
| SXO | 58 | Sportpagina's sluiten aan; vertrouwen ondermijnd door demo-tekst en tegenstrijdig beleid |
| Performance / data | 45 | Data werkt nu, maar geen enkele CWV-meting |

**Wat opnieuw bevestigd is (nog open sinds 8-10 of eerder):** rugby geeft 404, de demo-tekst op `/pages/ons-verhaal` staat live, `Organization` bevat alleen naam, logo en url, `http://schema.org` wordt nog gebruikt, `/blogs/intern` is publiek, `gtin` ontbreekt en de blessureclaim staat nog in het FAQ-schema. Bevestigd sinds de audit van 8-10 eerder die dag: `/policies/refund-policy` zegt nog 14 dagen en "ongeopend".

**Sinds 25-9 opgelost:** padelpagina weer 640 woorden met FAQPage (oude URL 301't), `dateModified` ligt niet meer vóór `datePublished`, `Organization.url` klopt op product-, collectie- en blogpagina's, productpagina's hebben `sku`, en "€30", "€4,25" en "22:00" staan niet meer op NL-pagina's.

## Kerncijfers

- **165** · Klikken Search Console (28 dagen, 8 sep–5 okt) · +89,7%
- **8,3** · Gemiddelde positie (was 11,2)
- **5** · Aankopen in GA4 (28 dagen) · €118,51 `purchaseRevenue`; vorige periode 0
- **228** · NL-sessies in GA4 van 400 totaal; ruim 30% van de sessies is botverkeer (VS en China)

## Acties

Open acties uit [[2026-10-08-seo-aeo-geo-aio-sxo-audit]] en [[2026-09-25-seo-audit]] gelden nog en staan niet opnieuw hieronder (rugby, demo-tekst, oprichtersaantal, blessureclaim in schema, `InStock`, Organization uitbreiden, titels en H1's, gids herschrijven, B2B-pagina's, meting AI-zichtbaarheid). Dit zijn alleen nieuwe punten uit deze run.

- [ ] P1 · Het "vóór 22:00 uur… dezelfde dag verzonden"-antwoord uit het FAQPage-JSON-LD van `/` en `/en` halen en gelijktrekken met "binnen 1 werkdag verzonden"
- [ ] P1 · Op `/en/pages/gripsokken-voor-padel`, `-tennis` en `-voetbal` de zin "Ordered before 22:00, shipped the same business day" vervangen, en op `/en/products/performance-gripsokken-2-0-zwart` en `-wit` "€30" naar €35 zetten
- [ ] P1 · De kapotte H1 "Gripsokken voor grip socks for padel" op de drie EN-sportpagina's herstellen
- [ ] P1 · Het FAQ-antwoord "Zijn gripsokken wetenschappelijk bewezen?" herschrijven volgens de formuleringsregel (gripsokken in het algemeen, Apps et al. 2022, Friedl 2023 als gemengd bewijs) en "wetenschappelijk bewezen effectiviteit" uit de v1-productbeschrijving in het Product-schema halen
- [ ] P1 · Besluit: socialprofielen en KvK-nummer van de footer (Instagram, TikTok, LinkedIn, Trustpilot, KvK) in het feitenbestand vastleggen, zodat ze als `sameAs` en `contactPoint` in het Organization-schema mogen
- [ ] P1 · GA4-aankopen (5, €118,51 over 28 dagen) naast Shopify-orders van dezelfde periode leggen en pas dan conversieconclusies op GA4 baseren
- [ ] P1 · Het merkcijfer 4,6 ★ met bron Trustpilot en link tonen op de homepage en de 2.0-productpagina; nu staat daar "★★★★½" zonder cijfer of bron
- [ ] P2 · `Organization.url` op de sportpagina's en `/pages/over-ons` naar de homepage laten wijzen (nu wijst het naar de pagina zelf) en `https://schema.org` gebruiken
- [ ] P2 · Het FAQ-verzorgingsantwoord van "u/uw" naar "je/jouw" zetten en het missie-antwoord gelijktrekken met "Wij versnellen de beweging van iedere sporter."
- [ ] P2 · Filter het botverkeer (VS en China) uit GA4 en bereken conversie alleen op NL-sessies
- [ ] P2 · `/products/hi-grip-gripsokken-1` (1.091 vertoningen, CTR 0,82%) 301'en naar de canonieke productpagina, of de titel en meta verbeteren
- [ ] P2 · EAN's als barcode in Shopify invullen, zodat `gtin` en `itemCondition` in het Product-schema en de Merchant-feed kunnen
- [ ] P2 · Alle 23 blogs koppelen aan de sportpagina's en `/collections/gripsokken`; nu heeft geen enkel artikel een link naar een sport- of productpagina
- [ ] P2 · Article-schema van de blogs vullen: `articleBody` is nu alleen een hashtag en `description` is leeg; type `BlogPosting`
- [ ] P2 · `/collections/all` en `/pages/collection` via canonical of 301 laten verwijzen naar `/collections/gripsokken` (kannibalisatie op "gripsokken")
- [ ] P2 · `/blogs/trends/de-laatste-gezonde-trends-op-het-gebied-van-sportvoeding` (39 woorden) aanvullen of 301'en naar `/blogs/trends`
- [ ] P2 · Padel en rugby toevoegen aan het blok "Voor jouw sport" op de 2.0-productpagina, en padel in de collectietitel zetten
- [ ] P2 · PageSpeed Insights draaien met een API-key (`PAGESPEED_API_KEY`) of de API aanzetten in het project higrip-analytics; nu 429 op alle URL's
- [ ] P3 · De Trustpilot-profieltekst "honderden sporters en organisaties" laten corrigeren en nagaan waarom de pagina zowel 4,5 als 4,6 toont
- [ ] P3 · De 24 GA4-sessies met landingspagina "(not set)" en 100% bounce onderzoeken
- [ ] P3 · Titels van meer dan 60 tekens (5 blogs) inkorten en 130+ titels die met "HÏ Grip |" beginnen herschrijven met het keyword vooraan

## Bevindingen

### SEO technisch en on-page — 62/100

- **Indexatie en crawl in orde.** `robots.txt` is de Shopify-standaard, de sitemap-index heeft 13 sub-sitemaps (NL en `/en/`), allemaal 200. Elke 200-pagina heeft een zelfverwijzende canonical en hreflang nl/en/x-default. Geen `noindex`, geen AI-bot geblokkeerd.
- **Redirects.** `http://higrip.nl` loopt via `https://higrip.nl` naar `www` (2 stappen). `/pages/gripsokken-padel` geeft 301 naar de nieuwe URL. 404's: `/pages/gripsokken-voor-rugby`, `/collections/frontpage`, `/pages/shop`.
- **Titels en meta's.** Te korte titels (<30 tekens): Over Ons, Pilates, Retail, Zakelijk, Contact, Clubwear, Blogs. `/pages/terugbetalingsbeleid` heet "Betalingsbeleid". Meta description ontbreekt op `/blogs/intern`, `/collections/all`, `/pages/terugbetalingsbeleid` en `/policies/refund-policy`. Alle ingevulde descriptions zijn uniek.
- **Koppen.** Geen H1 op retourbeleid, terugbetalingsbeleid, retail en pilates. Drie H1's op verzendbeleid en privacybeleid. Vijf theme-H2's ("Taal", "Zoekopdracht", "Je winkelwagen is leeg") staan als ruis op elke pagina.
- **Thin content.** `/blogs/intern` 1 woord, `/pages/collection` 38, `/pages/contact` 48, `/pages/retail` 94, `/pages/pilates` 100, `/pages/clubwear` 111. Sportpagina's hebben 635–660 woorden, productpagina's 1.120–1.240.
- **Interne links.** Geen enkel van de 23 blogartikelen linkt naar een sport- of productpagina.
- **Performance (indicatief).** Homepage-HTML 344 KB met 113 scripts, productpagina 527–535 KB met 119–123 scripts en 41–59 afbeeldingen, nauwelijks WebP of AVIF. Serverresponstijd 0,12–0,7 s.
- **EN-pagina's.** De EN-sportpagina's hebben wel Engelse tekst (de eerdere claim "Nederlandse inhoud" is verouderd), maar een kapotte H1 en de oude 22:00- en €30-belofte.

### Structured data

- **Product-schema.** ProductGroup met brand, prijs (€14,95 en €17,95, kloppen met het feitenbestand) en `sku`. Ontbreekt: `gtin`, `shippingDetails`, `hasMerchantReturnPolicy`, `itemCondition`, `variesBy`. Alle 8 varianten staan op `InStock`.
- **Geen `aggregateRating`**, en dat is correct.
- **Organization.** Alleen naam, logo en url, met `http://schema.org`.
- **FAQPage.** Het homepage-antwoord op de levertijd noemt nog 22:00. Het antwoord over wetenschappelijk bewijs wijkt af van de formuleringsregel en noemt Friedl 2023 zonder te zeggen dat dat bewijs gemengd is.

### AEO — 58/100

De drie sportpagina's zijn sterk: vraag-koppen, FAQPage en een tabel. De gids "Wat zijn gripsokken?" heeft 344 woorden, geen tabel, geen FAQ en geen bron. Het FAQ-verzorgingsantwoord gebruikt "u/uw". Het missie-antwoord ("Optimale performance voor elke sporter") wijkt af van de vaste missie.

### GEO — 38/100

- **De data voor het schema bestaat al op de site.** De footer toont KvK 97210129, een btw-nummer, en links naar Instagram, TikTok, LinkedIn en Trustpilot. Dit staat niet in het schema. Eerder is in [[2026-10-07-missie-visie-pagina]] bewust besloten geen socials in `sameAs` te zetten zolang ze niet in het feitenbestand staan; daarom staat dit hierboven als besluit voor Lars.
- **Oprichters.** Het feitenbestand zegt drie. `/pages/over-ons` zegt "de vier founders", `/pages/ons-verhaal` toont vier namen onder de kop "4 sporters", en een blog noemt ook vier.
- **Trustpilot.** De pagina toont 19 reviews (het feitenbestand noemde 17 op 3-9), zowel 4,5 als 4,6 als score, en een profieltekst "honderden sporters en organisaties" die botst met het feitenbestand.
- **Zichtbaarheid (signaal, geen meting).** Brave Search met landinstelling NL: op "wat zijn gripsokken" staat higrip.nl op positie 9 en 20, op "beste gripsokken padel" op 9 (met de collectiepagina in plaats van de padelpagina), en op "gripsokken voetbal kopen" niet in de top 12. Concurrenten die domineren: FitSockr, Optigrip, Proskary, Decathlon, bol.com en Voetbalshop.
- **`/llms.txt`** is de Shopify-standaard en gaat over bestellen door agents, niet over wie HÏ Grip is.

### AIO / Merchant — 45/100

Het Product-schema mist de velden die AI Mode en Merchant Center gebruiken. De barcode van de Shopify-varianten is leeg (`barcode: null`), dus `gtin` kan pas na invullen in Shopify. De beleidswaarden moeten eerst gelijk zijn voordat `shippingDetails` en `hasMerchantReturnPolicy` erin kunnen.

### Search Console en GA4

- **Search Console (28 dagen, 8 sep–5 okt, tegenover 11 aug–7 sep):** klikken 165 (was 87), vertoningen 3.998 (was 3.157), CTR 4,13% (was 2,76%), positie 8,3 (was 11,2). De winst komt vooral van merktermen ("higrip" 52 klikken, "hi grip" 27).
- **Zoekterm "gripsokken":** 284 vertoningen, 5 klikken, positie 6,5. Bijna alles loopt via de oude URL `/products/hi-grip-gripsokken-1` (282 vertoningen).
- **Sportpagina's:** de padelpagina had 36 vertoningen en 2 klikken; voor "gripsokken padel/tennis/rugby" was er geen data in de top 40. Alle termen onder 100 vertoningen zijn indicatief.
- **GA4 (property 476032345):** 400 sessies (was 92), 5 aankopen en €118,51. Organic Search 152 sessies (was 41). NL-sessies 228. De omzet is de bron van waarheid in Shopify, niet in GA4.
- **Funnel (gebruikers, 28 dagen):** 90 productweergaves, 28 add-to-cart, 19 checkout gestart, 7 verzendinfo, 5 aankopen. De aantallen zijn te laag voor significante conclusies.

### SXO — 58/100

De sportpagina's sluiten goed aan op de zoekintentie en de 2.0-productpagina heeft een sticky add-to-cart, 30 dagen retour en een viewport-tag. Het vertrouwen wordt ondermijnd door de demo-tekst op `/pages/ons-verhaal`, het verschil in oprichtersaantal, de rugby-404, de blessureclaim op `/pages/over-ons` en een retourbeleid dat "u" gebruikt, "ongeopend" eist en 25% kosten rekent. De 2.0-pagina's hebben 83–100% bounce, maar op kleine aantallen.

## Wat niet lukte

PageSpeed Insights gaf op alle drie de geteste URL's 429 (daglimiet), dus er is geen LCP, INP of CLS. Het indexatierapport en AI Overviews-vertoningen kan `google_data.py` niet ophalen. Zeven van de tien AI-zichtbaarheidsvragen konden niet worden uitgevoerd (zoekbron gaf 429); ChatGPT, Perplexity, Gemini en Google AI Mode zijn niet bevraagd. Instagram, TikTok en LinkedIn gaven 429 of een lege pagina, en het KvK-nummer is niet extern geverifieerd. De Merchant Center-feed is niet gecontroleerd. Tap-targets zijn alleen uit HTML afgeleid, niet gerenderd. `/llms.txt`, `/agents.md` en `/.well-known/ucp` zijn niet inhoudelijk gelezen.

## Bronnen

- Live crawl van www.higrip.nl op 8-10-2026: 105 sitemap-URL's plus 7 extra, NL en `/en/`, inclusief alle blogs
- Search Console en GA4 via `python -I 05_Research/_tools/google_data.py` (check, gsc, ga4, keyevents)
- Brave Search (landinstelling NL), WebFetch van nl.trustpilot.com/review/higrip.nl
- Vault: [[Feiten & Actuele Staat]], [[2026-10-08-seo-aeo-geo-aio-sxo-audit]], [[2026-09-25-seo-audit]], [[2026-10-08-search-console]], `05_Research/_backlog/ACTIEBACKLOG.md`

## Aantekeningen
