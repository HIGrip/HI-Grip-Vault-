---
id: 2026-11-16-seo-gsc-nulmeting-gripsokken
titel: "Search Console nulmeting gripsokken (NL, 28 dagen)"
kerntitel: "Op 'gripsokken' rankt een productpagina op ~5,7; de collectie telt niet mee"
datum: 2026-11-16
bron: los
routine: ""
categorie: SEO
status: nieuw
prioriteit: P1
samenvatting: "Geverifieerde Search Console-meting (land NL) voor gripsokken: gemiddelde positie 5,7 op 1.237 vertoningen en 12 klikken, vrijwel allemaal via de oude productpagina hi-grip-gripsokken-1. De collectie /collections/gripsokken en de sportpagina's krijgen bijna geen vertoningen."
gerelateerd: [2026-11-16-seo-plan-nummer-1-gripsokken]
vervangt: []
bronbestand: ""
deadline: ""
---
# Search Console nulmeting gripsokken (NL)

> Map: [[Waar staat wat]]

## In het kort

Gemeten door Denzel met de Search Console-API (alleen lezen, filter land = NL), periode 2026-10-17 t/m 2026-11-13 (28 dagen, 3 dagen vertraging; gecorrigeerd 16-11: eerder stond hier ten onrechte 19-10 t/m 15-11). Dit vervangt de niet-geverifieerde cijfers uit het conceptplan (daar waren land en apparaat onbekend). Let op: de novemberkernupdate liep vanaf 10-11, dus de laatste dagen zijn niet updatevrij. Gemiddelde positie is geen vaste SERP-positie.

## Kerncijfers

- **4.464** · NL-vertoningen totaal (146 klikken, gem. positie 7,7)
- **1.237** · vertoningen voor de exacte query "gripsokken", positie 5,7, 12 klikken, CTR 0,97%
- **~99%** · aandeel van die vertoningen op de oude productpagina `/products/hi-grip-gripsokken-1` (1.226 vertoningen, positie 5,4, 12 klikken)
- **1** · vertoning voor "gripsokken" op `/collections/gripsokken` (collectie is voor de kernterm vrijwel onzichtbaar)

## Tabellen

Exacte query "gripsokken", NL, per pagina:

| Pagina | Klikken | Vertoningen | Positie |
|---|---|---|---|
| /products/hi-grip-gripsokken-1 | 12 | 1.226 | 5,4 |
| / (homepage) | 0 | 15 | 35,9 |
| /collections/gripsokken | 0 | 1 | 2,0 |
| /products/performance-gripsokken?variant=...&utm_source=google (productfeed) | 0 | 1 | 2,0 |

Query's met "gripsokken" (bevat), NL, per pagina: oude productpagina 1.331 vertoningen (pos. 5,9); `/blogs/hi-grip/waarom-hi-grip-gripsokken` 36 (7,7); homepage 27 (23,4); `/collections/gripsokken` 11 (19,1); `/pages/gripsokken-voor-voetbal` 19 (26,5); `/pages/gripsokken-voor-padel` 3 (31,7); `/products/performance-gripsokken-2-0-zwart` 7 (19,4).

Varianten, NL: grip socks 335 vertoningen (pos. 9,9, 1 klik); grip sokken 129 (12,8, 1 klik); gripsok 37 (8,6). Beste/goedkope gripsokken: 1 tot 2 vertoningen, nog geen vraagzichtbaarheid.

Apparaat (query bevat gripsokken, NL): mobiel 841 vertoningen (CTR 0,48%), desktop 584 (CTR 1,37%), tablet 16.

Merkzoekopdrachten NL: hi grip (31 klikken, pos. 1), higrip (26, pos. 1), high grip (6). Samen zijn dat 63 van de 146 klikken (ongeveer 43%); het merkverkeer is dus een groot deel, niet de meerderheid.

## Wat dit betekent

- We staan op de kernterm al rond positie 5 tot 6, maar op de verkeerde pagina: de oude product-URL, niet de collectie (of die URL nu een collectie-achtige title heeft, is niet actueel vastgesteld).
- CTR van ~1% bij positie 5,7 is laag; een betere title/meta op de pagina die rankt is de snelste winst. Eerst bepalen welke pagina de hub wordt voordat iets wordt omgezet.
- Het volume is klein (circa 1.237 vertoningen per 28 dagen voor de kernterm), dus plek 1 levert extra klikken op in de orde van tientallen tot enkele honderden per 28 dagen, geen duizenden. Het plan werkt dit uit als scenario (circa 67 tot 157 extra klikken per 28 dagen bij positie 3 tot 1, bij algemene organische CTR meer); dat is een aanname uit CTR-gewoonten, geen meting en geen voorspelling.

## Acties

- [ ] P1 · Besluit: welke URL wordt de hoofdpagina voor "gripsokken": de collectie (nu bijna onzichtbaar) of de oude productpagina (rankt nu)? Voorstel (zie het plan): nu de rankende productpagina beschermen en optimaliseren (optie B), de collectie gefaseerd opbouwen en pas hoofdpagina maken als zij na 90 dagen tractie toont (optie A). Aanvulling 16-11: de oude URL `hi-grip-gripsokken-1` stuurt sinds 25-9 door (301, 2 stappen) naar `/products/performance-gripsokken`; Search Console toont nog de oude URL.

## Wat niet lukte

GA4-koppeling faalt in Denzels Python-omgeving (module ontbreekt); Google-organic sessies en vervolgklik zijn hier niet gemeten. Geen Google-SERP-controle van dit moment uitgevoerd.

## Bronnen

Search Console API via `02_Dashboard/_tools/google_data.py` (alleen lezen), ruwe JSON in de scratch-map van Hermes (`gsc_nulmeting_2026-11-16.json`).
