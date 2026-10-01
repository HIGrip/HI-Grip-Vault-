---
id: 2026-09-28-seo-conversietest-run-2
titel: "SEO- en conversietest run 2 — auditblok B, concepten voor 2.0-producten en collecties"
kerntitel: "SEO-titels, meta's en collectietekst voor de 2.0-producten uitgewerkt als concept"
datum: 2026-09-28
bron: routine
routine: "seo-conversietest"
categorie: SEO
status: nieuw
prioriteit: P2
samenvatting: "Tweede run (modus CONCEPT): diepe audit van blok B (producten en collecties) bevestigt alleen al bekende, open backlogpunten — geen nieuwe bevindingen — maar levert wel uitgewerkte concepten op: een herschreven collectiebeschrijving, SEO-titels/meta's voor de 2.0-producten en beide collecties, beschrijvende alt-tekstvoorstellen en een SKU/GTIN-koppeling per variant. Sessies en omzet liggen deze week onder de nulmeting van 23 sep, maar het volume blijft te klein voor harde conclusies, en er is een onverklaard verschil tussen Shopify- en GA4-sessietellingen."
gerelateerd: [2026-09-23-seo-conversietest-run-1, 2026-09-28-regressiecheck, 2026-09-25-seo-audit, 2026-09-25-search-console, 2026-09-25-evaluatie-routines, 2026-09-30-search-console, 2026-10-01-growth-radar-cro]
vervangt: []
bronbestand: "https://admin.shopify.com/store/raqds3-tb/pages/168287895879"
deadline: ""
---
# SEO- en conversietest run 2 — auditblok B, concepten voor 2.0-producten en collecties

## In het kort

Tweede run van de wekelijkse SEO- en conversietest (modus CONCEPT: niets live gewijzigd). Auditblok deze run: **B — producten en collecties** (rotatie B→C→D→B, volgens `05_Research/_geheugen/seo-conversietest.md`). Het volledige rapport staat, zoals afgesproken, in de verborgen Shopify-pagina `seo-routine-logboek` (RUN 2-sectie, bovenaan). Deze notitie bevat de kern.

## Kerncijfers

- **248** · sessies deze week (Shopify Analytics, 21–27 sep) · −28% t.o.v. nulmeting (346)
- **1** · bestellingen deze week / €41,99 · vorige week 2 / €30,75; nulmeting 3 / €72,74
- **0,40%** · conversieratio deze week · nulmeting 0,87%
- **7,9** · gemiddelde Search Console-positie (19–25 sep) · vorige periode 8,7 (verbeterd)

## Acties

_Geen nieuwe backlogpunten deze run: alle bevindingen in blok B waren al open (SEO-titel/meta 2.0-producten en collectie, producttype/SKU/GTIN, dubbele alt-teksten op de 2.0-producten, te smalle collectietekst, en de op 28 sep al gemelde ontbrekende meta op `/collections/frontpage`). Wat nieuw is: voor al deze punten staat nu een concreet concept klaar in het logboek (zie hieronder), zodat de eigenaar ze rechtstreeks kan overnemen in Shopify admin. Verder is de bestaande actie "Productdata aanvullen: type, SKU, GTIN" nu voor de 2.0-varianten volledig ingevuld met de EAN-lijst uit [[Performance Grip Socks 2.0]] §1 — voor de 1.0 (Performance Gripsokken) ontbreekt nog een EAN/SKU-systeem in het feitenbestand [CHECK]._

## Bevindingen

### KPI's (Shopify Analytics; nulmeting = 23 sep 2026)

| KPI | Deze week (21–27 sep) | Vorige week (14–20 sep) | Nulmeting (16–23 sep) |
|---|---|---|---|
| Sessies | 248 | 277 | 346 |
| Sessies via zoekmachines | 15 | 25 | 16 |
| Sessies met add-to-cart | 5 (2,0%) | 9 (3,2%) | 6 (1,7%) |
| Checkout bereikt / voltooid | 2 / 1 | 7 / 2 | 4 / 3 |
| Bestellingen / omzet | 1 / €41,99 | 2 / €30,75 | 3 / €72,74 |
| Gem. orderwaarde | €34,70 | €11,96 | €19,54 |
| Conversieratio | 0,40% | 0,72% | 0,87% |

GA4 (476032345) toont voor dezelfde weken 54 resp. 123 sessies — ruim onder de Shopify-tellingen. Dit gat is deze run niet verklaard; het raakt mogelijk het al openstaande backlogpunt over de "Optimized"-pixelstand. Search Console (19–25 sep, loopt 3 dagen achter): 24 klikken (−48,9%), 1.018 vertoningen (−4,5%), positie 7,9 (verbeterd van 8,7). "Gripsokken" steeg naar positie 5,6, "grip socks" naar 10,4. Onder de 100 echte sessies per week blijft dit indicatief.

### Auditblok B — producten en collecties (via de Shopify Admin API)

- **SEO-titel/meta:** leeg (`null`/`null`) op Performance Gripsokken 2.0 Zwart, 2.0 Wit, collectie Gripsokken én — nieuw bevestigd — collectie "Homepage" (`frontpage`, 0 producten, wel in de sitemap; dit is dezelfde bevinding als de regressiecheck van 28 sep).
- **Producttype:** leeg bij alle drie producten.
- **SKU/barcode:** overal `null`. Voor de 2.0-varianten nu een concept-koppeling gemaakt met de EAN-lijst uit het feitenbestand (PGSZ201–203, PGSW201–203, 6 EAN's). Voor de 1.0 ontbreekt een bronbestand [CHECK].
- **Alt-teksten:** 2.0 Zwart en 2.0 Wit hebben elk 5 gecontroleerde foto's met een identieke alt-tekst (0 van 10 uniek) — dezelfde onderliggende afwijking als het al bekende punt over de hoofdproductpagina, nu bevestigd voor de 2.0-producten.
- **Collectietekst Gripsokken:** de huidige tekst (169 woorden) noemt alleen "witte gripsokken", de oude maten 34-39/40-46 en een onbevestigde doelgroep ("kinderen"), terwijl de collectie alle drie producten en vijf maten bevat. Herschreven naar 222 woorden (binnen de norm van 150–300), inclusief de wrijvingscoëfficiënt-claim met bron.
- **Interne links:** niet volledig te controleren zonder rendering van het thema (bekende beperking in de cloudomgeving).

### Gebouwd (concept, niets live)

In de logboekpagina staan volledig uitgewerkt: de herschreven collectiebeschrijving, SEO-titels en meta's voor de 2.0-producten en beide collecties (Gripsokken en Homepage/frontpage), 10 beschrijvende alt-tekstvoorstellen (gemarkeerd [CHECK], niet visueel geverifieerd) en de producttype/SKU/GTIN-koppeltabel voor de 2.0-varianten.

### Resultaten eerdere testplannen

**Maatgids gripsokken** (168287863111): nog steeds niet gepubliceerd (bevestigd door de actiecontrole op 26 sep). Testplan nog niet gestart. Label: **te vroeg**.

## Wat niet lukte

- Het verschil tussen Shopify-sessies (248/277) en GA4-sessies (54/123) in dezelfde weken is niet verklaard.
- Interne links vanuit producten/collecties naar de maatgids en sportpagina's: niet te controleren zonder thema-rendering.
- Shopify's gestructureerde Google-productcategorie (los van het vrije producttype-veld): niet gecontroleerd.
- Merchant Center-status (`google_data.py merchant`): niet uitgevoerd deze run, hoort bij auditblok A (techniek).
- Stap B (dashboard → vault) kon niet draaien: de `ArtifactData`-database van het dashboard is voor deze cloudsessie niet leesbaar ("shared with you from another organization" — geen db-toegang voor uitgenodigde editors), zelfde beperking als bij eerdere runs. Build en publish zijn wel gedaan vanuit de bestaande vaultstand.

## Bronnen

- Shopify Admin API (GraphQL) en ShopifyQL-analytics, HÏ Grip, 28-09-2026.
- `python 05_Research/_tools/google_data.py ga4/gsc`, 28-09-2026.
- `00_Brand_Core/Feiten & Actuele Staat.md` en [[Performance Grip Socks 2.0]] (EAN-lijst).
- Verborgen Shopify-pagina `seo-routine-logboek` (volledig rapport, RUN 2).

## Aantekeningen
