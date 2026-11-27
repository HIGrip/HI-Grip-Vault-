---
id: 2026-11-23-funnel-ga4-verkeersbronnen
titel: "Funnel en verkeersbronnen — waar komt verkeer vandaan en waar lopen we klanten mis"
kerntitel: "Organic Search verdient, Paid Social levert 0 aankopen, 44% verkeer komt uit buitenland"
datum: 2026-11-23
bron: los
routine: ""
categorie: CRO
status: nieuw
prioriteit: P1
samenvatting: "Over 24 okt–22 nov haakt 56% van de sessies af vóór een productpagina, levert Paid Social (266 sessies) 0 aankopen en Organic Search (182 sessies) 3 aankopen en €138. Na de winkelwagen kopen er 3 van 29. GA4 mist ongeveer een derde van de omzet (5 tegenover 7 orders in Shopify)."
gerelateerd: [2026-10-29-ads-funnel-en-snelheid-productpagina, 2026-09-03-analytics-kpi-meetgat, 2026-11-26-productpagina-2-0-onderzoek-en-prototype, 2026-11-27-meta-ads-verblijftijd-productpagina]
vervangt: []
bronbestand: ""
deadline: ""
---
# Funnel en verkeersbronnen, 24 okt – 22 nov 2026

> Map: [[Waar staat wat]]

GA4 `476032345`, Shopify Analytics als controle. Het Meta-account gaf twee keer een timeout, dus uitgaven en CPC per advertentie ontbreken nog. Het totaal is 5 aankopen en €192 omzet in GA4, en 7 orders en €287 in Shopify. Kleine aantallen: lees alles als hypothese, niet als bewijs.

## In het kort
- De grootste lek zit vóór de productpagina: van 775 gebruikers zien er 342 een product (44%). De andere 433 haken af, vooral betaald en direct verkeer.
- Paid Social (266 sessies) leverde 0 aankopen op. Organic Search (182 sessies) leverde 3 aankopen en €138 op: €0,76 per sessie tegen €0.
- 44% van de sessies komt uit het buitenland (VS, Frankrijk, Singapore) en levert 0 aankopen op. De conversie van de echte doelgroep is hoger dan het totaal doet lijken (Nederland: 5 aankopen op 574 sessies, 0,87%).
- Na de winkelwagen gaat het ook mis: van 29 mensen met iets in de wagen kopen er 3.
- GA4 mist ongeveer een derde van de omzet, dus kanaalconclusies zijn onzeker.

## Kerncijfers
- **1.019** · Sessies GA4 (Shopify: 1.617, met botverkeer)
- **0,49%** · Sessieconversie GA4 (5 aankopen) · Nederland alleen 0,87%
- **€0,76 vs €0** · Omzet per sessie Organic Search vs Paid Social
- **8,5%** · Productpagina → winkelwagen (niet het probleem)
- **3 van 29** · Winkelwagen → aankoop (tweede lek)

## Waar komt het verkeer vandaan

| Kanaal | Sessies | Betrokken | Cart | Checkout | Aankopen | Omzet | Omzet/sessie |
|---|---|---|---|---|---|---|---|
| Direct | 339 | 31% | 15 | 7 | 2 | €53,90 | €0,16 |
| Paid Social | 266 | 39% | 9 | 4 | 0 | €0 | €0 |
| Organic Search | 182 | 65% | 25 | 15 | 3 | €138,16 | €0,76 |
| Organic Social | 62 | 53% | 5 | 1 | 0 | €0 | €0 |
| Referral | 52 | 38% | 1 | 0 | 0 | €0 | €0 |
| Niet toegewezen | 47 | 15% | 0 | 0 | 0 | €0 | €0 |
| E-mail | 25 | 64% | 1 | 0 | 0 | €0 | €0 |
| Overig (shopping, AI, cross-network) | 36 | – | 0 | 0 | 0 | €0 | €0 |

- **Organic Search** is het enige kanaal dat verdient: gemiddeld 244 s op de site. Shopify bevestigt: search heeft 4 orders, gemiddelde orderwaarde €40,87.
- **Paid Social** haakt vroeg af: 61% bounce, 42 s per sessie. Instagram-mobiel is 62% betrokken, Instagram-tablet 12,5% (40 sessies): lijkt op in-app-browsers of ongeldig verkeer (hypothese).
- **Direct** is vooral ruis: 69% bounce; Shopify telt 1.150 directe sessies, wat op botverkeer wijst.
- **E-mail** trekt interesse maar geen aankoop: 64% betrokken, 235 s, 0 aankopen op 25 sessies. De mailing van 23-11 zit hier nog niet in.
- **Last-click onderschat assists.** Paid Social krijgt nu €0, terwijl het misschien het eerste contact was voor mensen die later direct of via zoeken kopen. Dat is nu niet te zien.

## Waar lopen we klanten mis

| Stap | Gebruikers | Doorstroom | Verlies |
|---|---|---|---|
| Sessie | 775 | | |
| Productpagina bekeken | 342 | 44% | 433 |
| In winkelwagen | 29 | 8,5% | 313 |
| Checkout gestart | 14 | 48% | 15 |
| Verzendgegevens | 10 | 71% | 4 |
| Betaalgegevens | 5 | 50% | 5 |
| Aankoop | 3 | 60% | 2 |

1. **Voor de productpagina (433 weg).** Grootste absolute drop. Deels ruis, bij betaald verkeer een echt lek: eerder zagen maar 116 van 288 klikkers een pagina (zie [[2026-10-29-ads-funnel-en-snelheid-productpagina]]). Dat past bij de trage mobiele productpagina. De snelheidswinst in het werkthema is nog niet live.
2. **Product → winkelwagen (8,5%)** is niet het acute probleem. Wie de pagina echt ziet, legt redelijk vaak iets in de wagen. Het probleem is wie er binnenkomt.
3. **Winkelwagen → aankoop (ongeveer 10%).** Grootste stap: na de verzendgegevens haakt 5 van 10 af. Hypothese: verzendkosten of totaalprijs worden laat zichtbaar. Raakt direct de omzet per bezoeker.
4. **Landingspagina's.**
   - 2.0 wit: 27 sessies, 93% bounce, 0 carts.
   - 2.0 zwart: 31 sessies, 74% bounce.
   - `/pages/gripsokken-2-1`: 15 sessies, 87% bounce.
   - Homepage: 320 sessies, 28 carts, 3 aankopen (€141,80), beste instap.

## Apparaat en land

| | Sessies | Aankopen | Conversie |
|---|---|---|---|
| Mobiel | 554 | 4 | 0,72% |
| Desktop | 422 | 1 | 0,24% |
| Tablet | 43 | 0 | 0% |

- Op desktop haalt maar 26% van de gebruikers een productpagina, tegen 58% op mobiel. Desktop is waarschijnlijk vervuild door bots en buitenlands verkeer.
- Nederland: 574 sessies (56%), 51 carts, alle 5 aankopen. VS (191), Frankrijk (37), Singapore (27), Duitsland (25) en België (18) leveren samen 0 aankopen.

## Meetproblemen
- GA4 mist 2 van 7 orders en een derde van de omzet (GA4 niet op alle themaversies). Shopify blijft de bron voor omzet.
- Sessies: GA4 1.019, Shopify 1.617.
- UTM's inconsistent: `facebook / paid` (147 sessies) naast `ig / paid_social`, `fb / paid_social` en `an / paid_social`.
- Ongeveer 39 sessies zijn intern verkeer of schermafdrukken (Shopify-admin, Ads Manager, myshopify.com, `slScreenshot`).
- 47 sessies niet toegewezen, 24 van `aocr.org` met 100% bounce (spam).

## Acties
- [ ] P1 · Besluit: werkthema live zetten na controle van de productpagina's, daarna LCP bij echte bezoekers meten (Design Agent, Lars)
- [ ] P1 · Verzendkosten en "gratis vanaf €35" op de productpagina en in de wagen tonen, vóór de checkout (Design + Copy Agent)
- [ ] P1 · GA4 op alle themaversies, intern verkeer en spam uitsluiten, één vaste UTM-structuur voor Meta (Lars/Timo)
- [ ] P2 · Aparte landing per kanaal: advertentie → productpagina die bij de creative past (Design + Copy Agent)
- [x] P2 · Sticky "in winkelwagen" op mobiel (Design Agent)
- [ ] P2 · Meta-targeting controleren op landen en Instagram-tablet; Meta-uitgaven opnieuw ophalen na de timeout (Ads Agent, adviserend)
- [ ] P2 · Organic Search uitbouwen, het enige kanaal met omzet (SEO Agent)

## Meten
Bij ongeveer 1.000 sessies per maand is een A/B-test op conversie niet betrouwbaar. Gebruik voor/na-vergelijking met diagnostische maatstaven (aandeel sessies met productpagina, add-to-cart-rate, checkout-afbreekpunt) en geef het minstens twee weken.

## Bronnen
- GA4 property 476032345 (30 dagen tot en met 22-11-2026), Shopify Analytics (ShopifyQL, 30 dagen).
- Meta Ads: niet beschikbaar (timeout).

## Aantekeningen
