---
id: 2026-11-27-landingspaginas-ads-effectmeting-dag-1
titel: "Effect nieuwe landingspagina's voetbal, rugby, product: eerste meting na livegang"
kerntitel: "Nog geen effect meetbaar: 6 echte bezoeken, de helft landt nog op de oude pagina"
datum: 2026-11-27
bron: los
routine: ""
categorie: CRO
status: nieuw
prioriteit: P1
samenvatting: "Anderhalve dag na de livegang (26-11, ~16:00) is er nog geen effect te meten: de nieuwe pagina's kregen 6 echte bezoeken (18 s per sessie, 0 winkelwagens) en 13 van de 24 campagnesessies op 26-11 landden nog op de oude productpagina. De 21 sessies van 0 seconden tussen 16 en 18 uur op 26-11 zijn testverkeer rond de livegang en moeten uit elke meting."
gerelateerd: [2026-11-24-landingspaginas-live-ads-message-match, 2026-11-27-meta-ads-verblijftijd-productpagina, 2026-11-27-meta-campagne-diagnose-rugby-voetbal-product]
vervangt: []
bronbestand: ""
deadline: "2026-12-03"
---
# Effect nieuwe landingspagina's: eerste meting na livegang

> Map: [[Waar staat wat]]

## In het kort

De pagina's `/pages/gripsokken-voetbal`, `/pages/gripsokken-rugby` en `/pages/performance-gripsokken` staan sinds 26-11 rond 16:00 live voor campagne HG_NL_Rugby_Voetbal_Product_2026-11-20. Na anderhalve dag is er te weinig echt verkeer op die pagina's om iets over effect te zeggen. De lijnen in Meta (paginaweergave per klik, winkelwagens) liggen op 26-11 binnen de spreiding van de dagen ervoor.

## Kerncijfers
- **6** · Echte sessies op de nieuwe pagina's (26-11 18:00 t/m 27-11 ochtend)
- **18 s** · Actief per sessie op de nieuwe pagina's (4 van 6 betrokken)
- **13 van 24** · Campagnesessies op 26-11 nog op de oude productpagina
- **21** · Testsessies van 0 s op 26-11 tussen 16 en 18 uur

## Acties
- [ ] P1 · Alle ads in HG_NL_Rugby_Voetbal_Product_2026-11-20 in Ads Manager naar de nieuwe pagina's (met ?ad=) laten linken; op 26-11 ging nog ruim de helft naar /products/
- [ ] P2 · Effectmeting herhalen op 3 december (7 dagen na livegang), met testverkeer van 26-11 16:00–18:00 uitgesloten

## Bevindingen

### Meta per dag (campagne Rugby Voetbal Product)
| Dag | Uitgave | Linkklikken | Paginaweergaven | Per klik | Winkelwagens |
|---|---|---|---|---|---|
| 20-11 | €40,01 | 34 | 17 | 50% | 2 |
| 21-11 | €43,09 | 34 | 18 | 53% | 0 |
| 22-11 | €55,06 | 63 | 42 | 67% | 3 |
| 23-11 | €36,53 | 29 | 21 | 72% | 9 |
| 24-11 | €55,02 | 36 | 24 | 67% | 0 |
| 25-11 | €48,89 | 40 | 29 | 73% | 10 |
| 26-11 (livegang) | €48,29 | 37 | 25 | 68% | 3 |
| 27-11 (loopt) | €13,08 | 8 | 4 | 50% | 0 |

Winkelwagens springen per dag tussen 0 en 10; één dag zegt niets.

### GA4 seconden actief per sessie (campagne)
23-11: 7 s · 24-11: 7 s · 25-11: 12 s · 26-11: 12 s · 27-11: 38 s (3 sessies, loopt nog). Vóór 23-11 had de campagne in GA4 een numerieke naam (120247407556860449, waarschijnlijk dezelfde campagne), daarom start de reeks later.

### Testverkeer bij livegang
Op 26-11 om 16 en 17 uur kwamen 21 sessies op de nieuwe pagina's, 18 op desktop, allemaal 0 seconden en één pagina. Elf daarvan droegen de campagne-utm (o.a. 7 op rugby). Dat past bij controleren van de live links, niet bij echte bezoekers. Daarna alleen mobiel, met normale betrokkenheid (rugby 62 s, product 33 s).

## Wat niet lukte
Stap B (research-sync) en publicatie van het dashboard overgeslagen: alleen vanaf info@. Testverkeer is herkend op tijdstip en apparaat, niet hard uitgesloten.

## Bronnen
- GA4-property www.higrip.nl (476032345), 18-11 t/m 27-11-2026: date, dateHour, sessionCampaignName, landingPage, deviceCategory.
- Meta Ads via alleen-lezen koppeling, campagneniveau per dag, 20-11 t/m 27-11-2026.

## Aantekeningen
