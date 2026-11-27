---
id: 2026-11-27-meta-ads-verblijftijd-productpagina
titel: "Verblijftijd vanuit Meta-ads op de productpagina (GA4, 28 okt – 26 nov)"
kerntitel: "Meta-bezoekers blijven 13 seconden op de productpagina, Google-bezoekers 58"
datum: 2026-11-27
bron: los
routine: ""
categorie: CRO
status: nieuw
prioriteit: P2
samenvatting: "Bezoekers die vanuit een Meta-ad op een productpagina landen, zijn daar gemiddeld 13 seconden actief (372 sessies), tegen 58 seconden voor Google organisch en 92 voor e-mail. Ads die het product en de features laten zien houden mensen 20 tot 36 seconden vast; Product VS Gevoel en /pages/gripsokken-2-1 leveren vrijwel 0 seconden op, wat past bij het eerder vermoede botverkeer."
gerelateerd: [2026-11-27-meta-black-friday-klikken-vs-paginaweergaven, 2026-11-23-funnel-ga4-verkeersbronnen, 2026-11-23-meta-campagnerapport, 2026-11-10-ads-plan-bereik-conversie-sales, 2026-11-27-meta-campagne-diagnose-rugby-voetbal-product, 2026-11-27-landingspaginas-ads-effectmeting-dag-1]
vervangt: []
bronbestand: ""
deadline: ""
---
# Verblijftijd vanuit Meta-ads op de productpagina

> Map: [[Waar staat wat]]

## In het kort

Meta Ads Manager toont geen verblijftijd; GA4 wel, via de utm-tags. Over 28 okt – 26 nov zijn Meta-bezoekers op de productpagina gemiddeld 13 seconden actief. Dat is een kwart van Google organisch. Instagram houdt iets langer vast dan Facebook. Per ad loopt het uiteen van onder 1 tot 36 seconden.

## Kerncijfers
- **13 s** · Betrokkenheidstijd per sessie, Meta-ad op productpagina (372 sessies)
- **58 s** · Google organisch, hele site (183 sessies)
- **45%** · Betrokken sessies Meta op productpagina (169 van 372)
- **23** · Toevoegingen aan winkelwagen vanuit Meta op productpagina, 0 aankopen in GA4

## Acties
- [ ] P2 · Eén UTM-regel voor alle Meta-ads: nu lopen `facebook / paid`, `fb / paid_social` en ad-ID's als utm_content door elkaar, waardoor ruim 130 sessies niet per ad-naam leesbaar zijn
- [ ] P2 · Besluit: Product VS Gevoel en ads naar /pages/gripsokken-2-1 stoppen of Audience Network uitsluiten (37 + 13 sessies met samen ~17 s betrokkenheid)

## Bevindingen

### Meta toont het niet, GA4 wel
Ads Manager telt linkklikken en bestemmingspaginaweergaven, geen tijd op de pagina. GA4 meet `userEngagementDuration` per sessie (tijd dat de pagina in beeld was). Gefilterd op medium `paid` / `paid_social` en landingspagina `/products/…`.

### Per platform (productpagina)
| Platform | Sessies | s per sessie | Betrokken | Winkelwagen |
|---|---|---|---|---|
| Instagram | 111 | 16 | 50% | 14 |
| Facebook | 243 | 12 | 44% | 8 |
| Audience Network | 18 | 13 | 39% | 1 |

Instagram levert per sessie bijna vier keer zoveel winkelwagens als Facebook. Zwart via Instagram springt eruit: 33 sessies, 28 s, 7 winkelwagens (kleine n).

### Per ad (minimaal 8 sessies, productpagina)
| Ad (utm_content) | Sessies | s per sessie | Winkelwagen |
|---|---|---|---|
| Timo Rugby (De GRIPSOK met alle features) | 9 | 36 | 3 |
| Gewone sok vs HÏ Grip AD | 8 | 33 | 1 |
| Tigo (Sport) | 14 | 31 | 2 |
| Lifestyle AD voetbal | 17 | 20 | 5 |
| Timo Rugby (Optimale gripsok) | 18 | 20 | 0 |
| Founders AD rugby | 43 | 11 | 1 |
| Facebook_UA | 20 | 11 | 2 |
| Tigo (Grip) | 15 | 10 | 0 |
| 3 pack korting | 28 | 9 | 3 |
| Sportsokken | 15 | 6 | 1 |
| More Grip, Better Performance AD | 10 | 5 | 4 |
| Wat houd je tegen AD product | 9 | 5 | 0 |
| Nieuwe advertentie voor Leads (Product VS Gevoel) | 13 | <1 | 0 |

Ads die de sok en de features laten zien (Timo Rugby, vergelijking, Tigo Sport) houden mensen het langst vast. Aanbod-ads (3-pack, More Grip) zijn kort maar leveren wel winkelwagens: wie al wil kopen, leest niet lang. Lange tijd zonder winkelwagen (Timo Rugby Optimale gripsok, 20 s, 0) wijst op twijfel op de pagina.

### Botverkeer bevestigd
`/pages/gripsokken-2-1` kreeg 37 Meta-sessies met samen ~10 seconden betrokkenheid; de Product VS Gevoel-ad 13 sessies met 7 seconden. Dat bevestigt het vermoeden uit [[2026-11-10-ads-plan-bereik-conversie-sales]].

### Tracking rommelig
Drie varianten van bron/medium voor Meta en drie campagnes waarvan utm_campaign en utm_content een numeriek ID zijn (o.a. 120247407556860449, 93 sessies). Per ad-naam vergelijken lukt daardoor maar voor een deel.

## Wat niet lukte
Stap B (research-sync) en publicatie van het dashboard overgeslagen: die lukken alleen vanaf info@, deze sessie draait op het persoonlijke account. Aankopen niet beoordeeld: GA4 mist een deel van de orders (zie [[2026-11-23-funnel-ga4-verkeersbronnen]]).

## Bronnen
- GA4-property www.higrip.nl (476032345), Data API, 28-10 t/m 26-11-2026: `sessionSourceMedium`, `landingPage`, `sessionManualAdContent`, `sessionCampaignName`; metrics sessions, engagedSessions, userEngagementDuration, addToCarts.

## Aantekeningen
