---
id: 2026-11-27-meta-black-friday-klikken-vs-paginaweergaven
titel: "Black Friday-campagne: 27 klikken, 3 paginaweergaven (Meta + Shopify, 27-11 tot 16:00)"
kerntitel: "Bezoekers komen aan, maar de Meta-pixel telt ze niet: meetverlies, geen klikverlies"
datum: 2026-11-27
bron: los
routine: ""
categorie: Social
status: nieuw
prioriteit: P1
samenvatting: "Van de 27 klikken zijn er 23 linkklikken; dat 20 daarvan geen landing page view geven, is vooral meetverlies: de Instagram-adset gaf 5 linkklikken, Shopify zag 4 sessies uit deze campagne, en Meta telde 0 paginaweergaven. Omdat de campagne optimaliseert op landing page views, stuurt Meta nu op een signaal dat bijna niet binnenkomt; eerst de pixel en toestemming oplossen en UTM's op de Facebook-advertenties zetten."
gerelateerd: [2026-11-27-meta-campagne-diagnose-rugby-voetbal-product, 2026-11-27-meta-ads-verblijftijd-productpagina]
vervangt: []
bronbestand: ""
deadline: ""
---
# Black Friday-campagne: 27 klikken, 3 paginaweergaven

> Map: [[Waar staat wat]]

## In het kort
Vraag van Timo: hoe kan de nieuwe Black Friday-campagne 27 klikken hebben en maar 3 weergaven van de landingspagina? Antwoord: 4 van de 27 zijn geen linkklik (profiel, foto vergroten, meer lezen). De overige 20 zijn bezoekers die wel op de site komen maar niet door de Meta-pixel geteld worden. Bewijs: de Instagram-adset (met UTM's) gaf 5 linkklikken, Shopify registreerde 4 sessies met deze campagne-ID, en Meta telde voor die advertenties 0 landing page views en 0 view content. Waarschijnlijke oorzaak is toestemming: zonder marketingtoestemming vuurt de pixel niet, en eerder vandaag verscheen de cookiebanner niet in een testbrowser (zie [[2026-11-27-meta-campagne-diagnose-rugby-voetbal-product]], bevinding 12). Gevolg: de campagne optimaliseert op landing page views en krijgt dat signaal bijna niet, dus Meta leert slecht. Peildatum 27-11, data tot het uurblok 15:00 tot 15:59; de campagne startte om 11:30.

## Kerncijfers
- **27 / 23 / 3** · Klikken (alle) / linkklikken / landing page views (Meta, 27-11)
- **5 / 4 / 0** · Linkklikken Instagram-adset / Shopify-sessies uit deze campagne / Meta-paginaweergaven daarvan
- **€8,00** · Uitgegeven tot 16:00 · CTR (alle) 1,49%

## Acties
- [ ] P1 · Website Agent: nagaan of de cookiebanner op higrip.nl verschijnt in de Facebook- en Instagram-app (iPhone en Android) en of de pixel na toestemming PageView stuurt
- [ ] P1 · In Ads Manager UTM-parameters toevoegen aan de drie advertenties van adset "Facebook Ads", gelijk aan die van adset "Instagram Ads"
- [ ] P2 · In Ads Manager de websitelink van alle zes advertenties naast elkaar zetten en vergelijken met "3 + 3 Gratis" (Facebook Ads), de enige advertentie die events gaf
- [ ] P2 · Besluit: doel van de campagne (nu leads) en optimalisatie (nu landing page views) heroverwegen zodra de pixelmeting klopt; niet wijzigen op basis van 27 klikken
- [ ] P3 · Adset "Instagram Ads" controleren: alleen Facebook-plaatsingen ingesteld en leeftijd 18 tot 35 tegen 18 tot 65 in de targeting
- [ ] P2 · Op 28-11 dit rapport herhalen met een volle dag, met Shopify-sessies per utm_id en Events Manager (PageView en toestemmingsdiagnose)

## Bevindingen
### 1. Het getal 27 is "klikken (alle)"
Meta telt 27 klikken (alle), 23 linkklikken en 23 uitgaande klikken. Het verschil van 4 zijn klikken die niet naar de site gaan. Dat verklaart niet het grote gat: van 23 linkklikken naar 3 landing page views verdwijnt 87%. Bij de productcampagne is klik naar paginaweergave 63%.

### 2. Funnel
| Stap | Aantal |
|---|---|
| Vertoningen / bereik | 1.815 / 1.648 (frequentie 1,10, CPM €4,41) |
| Klikken (alle) | 27 |
| Linkklikken | 23 |
| Landing page views | 3 (€2,67 per stuk) |
| View content | 5 |
| Winkelwagen, checkout, aankoop | niet in de respons |

View content (5) is hoger dan landing page view (3). De pixel vuurde dus wel, maar alleen bij een paar bezoekers.

### 3. Alle events komen uit één advertentie en één apparaatsoort
- "3 + 3 Gratis" in adset "Facebook Ads": 6 linkklikken, 3 landing page views, 5 view content. Alle events op Android-smartphones.
- De andere 17 linkklikken (Wasmachine AD 8, Stuur dit naar je moeder 4, 2 + 2 Gratis 5) gaven samen 0 events.
- iPhone en iPad: 14 linkklikken, 0 events. Alle klikken openen in de in-app browser van Facebook.

### 4. Shopify ziet wel bezoekers
Shopify-sessies 27-11: 4 sessies met utm-campagne 120247746090730449 (deze campagne), mobiel, landingspagina /products/performance-gripsokken-2-0-zwart, bouncepercentage 50%, 0 winkelwagens. Alleen de advertenties van adset "Instagram Ads" hebben UTM's; die gaven 5 linkklikken en volgens Meta 0 events. Bezoekers kwamen dus aan, de pixel telde ze niet. De drie advertenties van adset "Facebook Ads" hebben geen UTM's en zijn in Shopify niet terug te vinden: er staat vandaag geen Facebook-sessie zonder campagnenaam in Shopify.

### 5. Wat het niet is
- Geen Audience Network of Messenger: die plaatsingen staan uit en leverden niet.
- Geen attributie- of vertragingseffect: 1 dag en 7 dagen na klik geven dezelfde waarden, en de eerste uren tonen hetzelfde gat.

### 6. Instellingen die opvallen
- Doel OUTCOME_LEADS met optimalisatie op LANDING_PAGE_VIEWS; Meta rapporteert "Unknown Optimization Goal".
- Twee adsets van €30 per dag. Adset "Instagram Ads" heeft geen Instagram-plaatsing en een leeftijdsbereik van 18 tot 35 naast 18 tot 65.
- Pixel "HÏ Grip" (3125677007638719) beschikbaar; `last_fired_time` staat op 27-11 00:07 en lijkt niet actueel.

## Wat niet lukte
De websitelink per advertentie geeft de Meta-koppeling niet terug (type SHARE). De cookiebannercheck in de ingebouwde browser was niet bruikbaar: die browser had nog toestemmingsinstellingen van een eerdere test, en Meta-pixelverzoeken lopen via een afgeschermd frame van Shopify. GA4 (analytics-mcp) en playwright maakten geen verbinding. Ads-QA overgeslagen: geen QA-agent voor het Ads-domein. Stap B (research-sync) en publicatie van het dashboard overgeslagen: dat lukt alleen vanaf info@, deze sessie draait op het persoonlijke account.

## Bronnen
- Meta, alleen-lezen koppeling (meta_campaigns, meta_adsets, meta_ads, meta_insights per campagne, adset, advertentie, uur, plaatsing, apparaat en attributievenster, meta_pixels, meta_activities), 27-11-2026 tot uurblok 15:00 tot 15:59
- Shopify Analytics (ShopifyQL): sessies per herkomst, utm-campagne, landingspagina en apparaat, 27-11-2026

## Aantekeningen
