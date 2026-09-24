---
id: 2026-09-17-growth-radar-cro
titel: "Growth Radar — CRO (Checkout Extensibility-deadline, prijs per paar)"
datum: 2026-09-17
bron: routine
routine: "growth-radar"
categorie: CRO
status: bekeken
prioriteit: P1
samenvatting: "Shopify's deadline voor Checkout Extensibility (26 augustus 2026) heeft bij niet-Plus winkels stilzwijgend alle trackingscripts uit het oude checkoutveld gewist — mogelijk een tweede verklaring voor de GA4-storing naast het ontbrekende key event. Daarnaast: een prijs per paar bij multipacks levert 5–15% conversiewinst op en ontbreekt op de productpagina."
gerelateerd: [2026-09-14-weekoverzicht, 2026-09-03-analytics-kpi-meetgat, 2026-09-15-regressiecheck, 2026-09-24-growth-radar-cro]
vervangt: []
bronbestand: "C:\\Users\\Test\\.claude\\research\\growth-radar\\rapporten\\2026-09-17-cro.md"
deadline: ""
---
# Growth Radar — CRO (Checkout Extensibility-deadline, prijs per paar)

## In het kort

Twee bevindingen, beide direct gekoppeld aan bestaande P1-punten (GA4 purchase-event, gratis-verzendbalk richting 3-pack). Nieuwe backlogpunten 11 (P1) en 12 (P2) staan in de growth-radar-backlog.

## Bevindingen

**17 september 2026 · donderdag**

### In het kort
Shopify's harde deadline om niet-Plus winkels over te zetten op Checkout Extensibility lag op 26 augustus — wie toen niet gemigreerd was, verloor stilzwijgend alle trackingscripts uit het oude checkoutsysteem. Dat raakt mogelijk direct de al bekende GA4-storing. Daarnaast: nieuw 2026-onderzoek bevestigt dat een per-stuk-prijs bij multipacks 5–15% conversiewinst oplevert, en die staat nergens op je productpagina.

---

### Checkout Extensibility-deadline is verstreken — controleer of je trackingscripts nog vuren

Shopify's migratiedeadline voor niet-Plus winkels (Basic, Shopify, Advanced, Pause and Build) naar Checkout Extensibility was 26 augustus 2026. Wie toen nog op het oude checkoutsysteem draaide, kreeg een automatische upgrade waarbij Shopify het complete "Additional Scripts"-veld leegtrok: Google Ads-conversietracking, Meta pixel, GTM-containers, affiliate-scripts en post-purchase apps stopten allemaal met werken.

Het venijnige zit in de stilte. De checkout zelf blijft gewoon bestellingen verwerken — er verschijnt geen zichtbare fout in de winkelwagen of bij het afrekenen. Alleen de trackinglaag eronder valt weg, en dat merk je pas als je de cijfers gaat controleren.

> **Voor higrip.nl:** Dit sluit direct aan op een al openstaand P1-punt: de GA4 key event `purchase` staat op nul op elk kanaal, deze en vorige week. Als `hi-grip.myshopify.com` op een niet-Plus plan zit en de migratie naar Checkout Extensibility nog niet (volledig) was afgerond vóór 26 augustus, is dit een directe, aanvullende verklaring — niet alleen "key event niet aangevinkt" maar mogelijk ook "het script dat de data zou moeten leveren is drie weken geleden stilgezet."

**Actie:** Controleer in Shopify admin → Instellingen → Checkout of er nog een "Additional Scripts"-sectie bestaat en of daar tracking in stond. Controleer parallel of Meta pixel en Google Ads-conversietracking via een officiële checkout-app/-extensie lopen in plaats van via het oude scriptveld. Voer dit uit vóórdat je de bestaande GA4-actie (key event aanvinken) als opgelost beschouwt — beide moeten samen kloppen.

---

### Per-stuk-prijs op multipacks: 5–15% conversiewinst die je nu laat liggen

2026-onderzoek naar prijsweergave bevestigt een bekend ankerprincipe met concrete cijfers: bij bundels en multipacks levert het tonen van de prijs per stuk (naast de totaalprijs) 5 tot 15% meer conversie op dan alleen de totaalprijs. De verklaring is ankering: "€6 per stuk (normaal €8,50)" voelt tastbaarder en rationeler dan "€36 voor het pakket", ook al is de onderliggende informatie identiek.

Dit is geen nieuw fenomeen, maar de 2026-dataset maakt het een harde, kwantificeerbare business case in plaats van een vage UX-tip.

> **Voor higrip.nl:** Je 1-pack/3-pack/5-pack-structuur is exact de bundelvorm waar dit op slaat. Uitgerekend: 1-pack = €14,99/paar, 3-pack = €13,99/paar (afgerond), 5-pack = €13,00/paar. Nergens in `snippets/product-information-content.liquid` staat dit per-paar-bedrag naast de variant-selector — de korting op grotere packs is dus onzichtbaar tenzij een klant het zelf uitrekent. Dit versterkt bovendien de al bestaande P1-actie over de gratis-verzendbalk: beide duwen in dezelfde richting, namelijk richting het 3-pack.

**Actie:** Toon "€X,XX/paar" onder elke pack-optie in de variant-selector, herberekend op basis van de gekozen combinatie.

---

### Bronnen
- [Shopify Checkout Extensibility for Non-Plus Stores: What Breaks on Aug 26](https://biscuitsbundles.com/blogs/learn/shopify-checkout-extensibility-for-non-plus-stores-what-breaks-on-august-26-2026-and-how-to-migrate-in-time)
- [Shopify Checkout Extensibility August 26 Deadline: Important for Non-Plus Merchants](https://www.codilar.com/blog/shopify-checkout-extensibility-august-26-deadline5/)
- [Shopify Redesigned Checkout for Higher Conversion](https://www.adbeacon.com/shopify-spring-2026-checkout-redesign-baseline/)
- [E-Commerce Cart & Checkout Usability Research – Baymard](https://baymard.com/research/checkout-usability)
- [The Anchoring Effect in Pricing](https://marketingagency.sg/anchoring-effect-pricing/)
- [Price Anchoring in 2026: Definition, Strategy, Examples](https://www.impactanalytics.ai/blog/price-anchoring)
- [Checkout Conversion Rate Benchmarks for Ecommerce 2026](https://mida-app.io/blog/checkout-conversion-rate-benchmarks-for-ecommerce/)

## Acties

_Acties uit dit rapport staan in de growth-radar-backlog (`ACTIEBACKLOG.md`) en komen via het dashboard onder NU AANDACHT binnen — hier niet gedupliceerd._

## Bronnen

- Origineel: `C:\Users\Test\.claude\research\growth-radar\rapporten\2026-09-17-cro.md`

## Aantekeningen

- **Test · 2026-09-17 11:06** — Round-trip-test: deze aantekening hoort na /research-sync onder ## Aantekeningen in de vault te staan.
