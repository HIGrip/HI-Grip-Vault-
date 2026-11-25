---
id: 2026-11-09-ads-live-check-website
titel: "Ads live check website: landingspagina's, 3-pack, voorraad, tracking, UTM (peildatum 9 november 11:30 tot 11:45)"
kerntitel: "3-pack 2.0 is een bundelblok, maar de landing toont hem niet; consent staat open"
datum: 2026-11-09
bron: los
routine: ""
categorie: Techniek
status: nieuw
prioriteit: P1
samenvatting: "Het 3-pack 2.0 (€44,95, was €53,85) staat live als bundelblok op de productpagina, maar niet op de landingspagina's voetbal en rugby. De pixel laadt zonder cookiebanner en met alle consent op toestaan; voorraad en checkout-prijs zijn niet vast te stellen zonder Shopify-beheer."
gerelateerd: [2026-11-05-meta-opbouw-statische-ads-voetbal-en-rugby, 2026-10-29-ads-funnel-en-snelheid-productpagina]
vervangt: []
bronbestand: ""
deadline: "2026-11-13"
---

# Ads live check website

> Map: [[Waar staat wat]]

Alleen gelezen. Niets gewijzigd aan thema, prijzen, voorraad of checkout. Peildatum 9 november 2026, ca. 11:30 tot 11:45, via browser (Nederlands netwerk) op de live site. Live thema is `t/39` (uit de asset-URL's; geen `shopify theme list` gedraaid, want er is niets aan het thema gedaan).

## In het kort
| # | Punt | Stand |
|---|---|---|
| 1 | Landingspagina's voetbal en rugby | GEEL |
| 2 | 3-pack bestaat, checkout-prijs | GEEL |
| 3 | Voorraad 1.0 en 2.0 | GEEL (niet vast te stellen) |
| 4 | Pixel, CAPI, consent | ROOD op consent, GEEL op events |
| 5 | UTM-regels voor 8 ads | GROEN voor de regel, GEEL voor de uitvoering |

## Acties
- [ ] P1 · Besluit: ads sturen op de productpagina 2.0 (bundelblok zichtbaar) of de landingspagina krijgt het 3-pack-blok; nu ziet de bezoeker na een 3-pack-ad alleen 1 paar voor €17,95
- [ ] P1 · Besluit: consent. Is de standaard "alles toegestaan zonder banner" bewust (AVG/ePrivacy)? Zo niet, vóór betaald verkeer laten oplossen door Lars of Timo (Shopify Customer Privacy / Consent Mode)
- [ ] P1 · Voorraad 2.0 en 1.0 live nakijken in Shopify Admin en de negatieve telling verklaren (ik heb geen Admin-toegang)
- [ ] P1 · Door een mens: testbestelling of winkelwagen met 3-pack 2.0 en de prijs op checkout noteren (zie punt 2)
- [ ] P1 · Door een mens in Events Manager: checklist onder punt 4 afvinken
- [ ] P2 · Landingspagina's: "Geen doorglijden" en "Je voet staat vast" omzetten naar vergelijkende of onderzoeksformulering, en de doorgestreepte €19,95 laten controleren
- [ ] P2 · Productpagina: ★★★★½ en de slogan "Meer grip. Meer controle. Meer winnen." controleren tegen Feiten (4,6 Trustpilot met bron); de 4,5 sterren staan zonder bronvermelding
- [x] P2 · Paginatitel van de landingspagina's begint met een paardemoji ("🐴 Gripsokken voor voetbal"): oorzaak zoeken in Shopify Admin en weghalen (zichtbaar in tab en zoekresultaten)

## Bevindingen

### 1. Landingspagina's (GEEL)
URL's: `/pages/gripsokken-voor-voetbal` en `/pages/gripsokken-voor-rugby` (uit sitemap; `/pages/voetbal` bestaat niet).
- Laden: eerste meting rugby: TTFB 0,27 s, DOMContentLoaded 4,4 s, load 6,0 s, 171 requests, 57 kB document. Eénmalige koude meting op een gedeelde browser, geen Lighthouse. De eerdere meting (29-10) op de productpagina gaf live LCP 4,0 tot 4,8 s en een werkthema-verbetering naar ca. 3,4 s; die verbetering staat nog niet live (live thema t/39, Lighthouse niet opnieuw gedraaid). Dus niet snel voor mobiel betaald verkeer.
- Aanbod: de pagina toont alleen "PERFORMANCE GRIPSOKKEN 2.0 WIT €17,95 (doorgestreept €19,95)" en een knop naar de productpagina. Het 3-pack €44,95 staat er niet. €35 gratis verzending, 3.500+ sporters en 1 werkdag verzending staan er wel en kloppen met Feiten.
- Claims: "Je voet staat vast in je schoen", "Geen doorglijden in je schoen", "Je voet blijft staan" zijn absolute claims. De bronregel (Apps et al. 2022, "gripsokken in het algemeen, niet HÏ Grip specifiek") staat wel onderaan. "Minder schuiven" is wel in orde. Vergelijkingsad (14 november): de pagina heeft een vergelijkingssectie (FAQ "Gripsok of gewone sok?"); inhoud niet gelezen.
- Doorgestreepte €19,95 is de adviesprijs retail (besluit 29-10), niet een eerdere webshopprijs. Als "was"-prijs bij een consument kan dat misleidend zijn: Lars of Timo laat beoordelen.
- Rugby en voetbal verwijzen allebei naar dezelfde wit-variant (geen sportverschil in product).

### 2. 3-pack (GEEL)
- 2.0: bestaat niet als apart product. Het is een bundelblok (Section Store, `hi-bundle`) op `/products/performance-gripsokken-2-0-wit` (en zwart): 1-pack €17,95, 3-pack €44,95 (doorgestreept €53,85, "€9,- Korting", gratis verzending), 5-pack €69,95 (was €89,75). €44,95 komt overeen met Feiten (3 x €17,95 = €53,85) en met €14,98 per paar.
- 1.0: 3-pack €35,95 (was €44,85), 5-pack €54,95, dus €11,98 per paar. Dit is een ander aanbod dan de ads ("€14,98 per paar").
- Werking: het 3-pack is 3 stuks van één maat, met een bundle-eigenschap op de regel (`hi-bundle.js`, `hi-cart.js`). Dus één maat per 3-pack; verschillende maten in één pack kan niet. Geen eigen SKU, dus geen eigen voorraadregel: het telt 3 stuks van die maat.
- Checkout-prijs per sporttype: er is geen sporttype in het product; voetbal en rugby verwijzen naar dezelfde producten, dus de prijs is gelijk. NIET GECONTROLEERD: de prijs in winkelwagen en checkout. Mijn test in de winkelwagen liep op een 429 (Cloudflare-verificatie) en is afgebroken; dat is geen bewijs dat het niet werkt. Menselijke controle nodig.
- Nu ook controleren: of het €9 korting uit het bundelblok bij elke maat en elke browser doorkomt (ook mobiel in Safari/Instagram-browser).

### 3. Voorraad (GEEL, niet vast te stellen)
- Storefront (9 nov): alle varianten 1.0 (34-39, 40-46) en 2.0 zwart en wit (35-38, 39-42, 43-47) staan als `available: true` ("Nu op voorraad"). De exacte aantallen geeft de storefront niet vrij.
- Stand uit de vault van 5 november: 1.0 158 paar; 2.0 zwart −54 en wit −47 (negatief). Een beschikbare productpagina met negatieve telling betekent waarschijnlijk dat doorverkopen aanstaat. Niet vastgesteld.
- Risico: een 3-pack haalt 3 stuks uit één maat per bestelling. Bij negatieve voorraad verkoop je mogelijk iets dat niet geleverd kan worden binnen "1 werkdag verzonden".
- Besluit: Lars (via Denzel) bepaalt of de ads starten met een negatieve voorraadtelling. Mijn advies: eerst fysiek tellen per maat en kleur en de verzendbelofte daarop afstemmen. Voor wie 1.0 wil adverteren: voorraad is er, maar het aanbod en de prijs per paar wijken af.

### 4. Pixel, CAPI, consent
Wat ik kon lezen (productpagina 2.0 wit, 9 nov):
- Eén Meta-pixel (`3125677007638719`) geladen; `fbevents.js` en `signals/config` komen binnen. Er is dus geen tweede pixel-ID te zien.
- Er zijn twee Shopify web pixels actief (app-pixels) en eigen thema-scripts (`page-view-event.js`, `standard-actions-override.js`). Of dit de Facebook & Instagram-app is met server-side events (CAPI), is vanaf de voorkant niet te zien.
- Google: GA4 `G-MP0982HHKM` plus tag `GT-NCGVWN62` (Google & YouTube-app) en Merchant Center-analytics. `page_view` en `view_item` gaan af.
- Consent: de dataLayer begint met `consent default` waarbij `ad_storage`, `ad_user_data`, `ad_personalization` en `analytics_storage` alle op `granted` staan, `inject_cmp_banner` staat uit en er is geen zichtbare cookiebanner. De cookies `_fbp` en `_ga` zijn al gezet vóór enige keuze. Uit de browser is niet te zien of dit afhangt van regio; mijn netwerk is Nederlands. Dit is een AVG/ePrivacy-risico bij betaald verkeer uit Nederland: ROOD tot Lars en Timo beslissen.
- Dubbeltelling: er is hier geen aanwijzing voor een dubbele pixel, maar de combinatie "thema-event-scripts plus Shopify-pixel plus eventuele server-side" kan dubbele events geven. Alleen Events Manager kan dat bevestigen.
- Niet getest: winkelwagen en aankoop. De winkelwagen-test is afgebroken (429), en een aankoop doe ik niet.

Menselijke checklist Events Manager (Pixel `3125677007638719`, dataset en test-events):
- [ ] Test events: ViewContent, AddToCart, InitiateCheckout, Purchase komen elk één keer binnen met `Browser` en eventueel `Server`.
- [ ] Bij dubbele bron (Browser en Server): "Gededupliceerd" staat zichtbaar en `event_id` komt overeen. Aantal events per bron is gelijk.
- [ ] Event-matchkwaliteit voor Purchase en AddToCart is hoger dan 6 (e-mail en `fbp` doorgegeven).
- [ ] Purchase draagt waarde (€44,95 voor het 3-pack) en valuta EUR, en telt niet dubbel op de bedankpagina (herladen telt niet opnieuw).
- [ ] Bekijk-event heet in Ads de gewenste conversie en staat bovenaan in de prioriteit (Aggregated Event Measurement) voor de gekozen sets.
- [ ] Consent: een bezoek met "weigeren" stuurt geen marketing-events (pas na besluit onder punt 4).

### 5. UTM-regels voor de 8 ads
Bestaande regel (29-10-notitie, als "goed" beoordeeld): `utm_source={{site_source_name}}&utm_medium=paid_social&utm_campaign={{campaign.name}}&utm_id={{campaign.id}}&utm_content={{ad.name}}`.
Voorstel voor de 8 ads (naamgeving, niet ingesteld):

| Ad | utm_content (= advertentienaam) |
|---|---|
| Voetbal situatie | `vb-1-situatie` |
| Voetbal klantwoord | `vb-2-klantwoord` |
| Voetbal aanbod | `vb-3-aanbod` |
| Voetbal vergelijking (vanaf 14 nov) | `vb-4-vergelijking` |
| Rugby situatie | `rb-1-situatie` |
| Rugby klantwoord | `rb-2-klantwoord` |
| Rugby aanbod | `rb-3-aanbod` |
| Rugby vergelijking (vanaf 14 nov) | `rb-4-vergelijking` |

- Campagne: één verkoopcampagne; sets heten `voetbal-breed` en `rugby-interesse`. Vaste `utm_campaign` bij voorkeur zonder spaties en zonder hoofdletters.
- Bestemming: uit punt 1 en 2 volgt dat de bestemming bij het aanbod (ad 3) de productpagina 2.0 moet zijn en bij ad 1, 2 en 4 de sportlanding. Ads en Lars bepalen dat; ik pas niets aan.
- Controle: `utm_content` moet in GA4 verschijnen onder sessiebron/medium `paid_social`. Niet gecontroleerd: GA4 is niet geraadpleegd (geen toegang in deze run).

## Wat niet lukte
- curl van mijn machine gaf op de meeste URL's een 429 (rate limit of botcontrole). Niets wat daardoor ontbreekt is daarmee bewezen afwezig. De pagina's zijn daarna in de browser gelezen.
- Winkelwagen en checkout-prijs: 429 bij `cart/add.js` en `cart.js`. Niet vastgesteld.
- Voorraadaantallen en CAPI-status: geen Shopify-Admin- of Events Manager-toegang.
- Geen Lighthouse- of echte-gebruikersmeting gedaan.

## Besluiten voor Lars (via Denzel)
Besluit: starten met voorraad 2.0 die op 5 november negatief stond, ja of nee, en zo ja met welke verzendbelofte.
Besluit: standaard consent zonder banner laten staan of herstellen vóór de ads.
Besluit: bestemming per ad (productpagina met 3-pack of landing met nieuw 3-pack-blok); een landingswijziging bouw ik in het werkthema, live zetten doet een mens.
Besluit: doorgestreepte €19,95 laten staan bij een prijs van €17,95.

## Bronnen
- Live site higrip.nl, gelezen 9 november 2026 ca. 11:30 tot 11:45.
- `00_Brand_Core/Feiten & Actuele Staat.md`
- `02_Dashboard/2026-11-05-meta-opbouw-statische-ads-voetbal-en-rugby.md`
- `02_Dashboard/Ads/2026-10-29-ads-funnel-en-snelheid-productpagina.md`
