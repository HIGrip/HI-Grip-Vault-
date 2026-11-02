---
id: 2026-11-02-seo-conversietest-run-6
titel: "SEO- en conversietest run 6 — auditblok C (content en AI-zichtbaarheid), omzetpiek door betaalde campagne"
kerntitel: "Sessies +69% w/w door een betaalde campagne; geen nieuwe contentgaten in blok C"
datum: 2026-11-02
bron: routine
routine: "seo-conversietest"
categorie: SEO
status: nieuw
prioriteit: P2
samenvatting: "Zesde run (modus CONCEPT): Shopify Analytics bevestigt de in GA4 gesignaleerde piek — sessies +68,6% w/w (536 vs. 318) en omzet +235,6% (€150,85 vs. €44,95), gedreven door een actieve betaald-social-campagne richting de nieuwe pagina's /pages/gripsokken-2-0 en -2-1. De diepe audit van blok C (content en AI-zichtbaarheid) vindt geen nieuwe contentgaten; de eerder gebouwde conceptitems (Waardebalk, GTIN/productType) staan ongewijzigd en nog te vroeg om te evalueren."
gerelateerd: [2026-10-19-seo-conversietest-run-5, 2026-11-02-regressiecheck, 2026-10-27-seo-audit-higrip-nl, 2026-10-29-ads-funnel-en-snelheid-productpagina]
vervangt: []
bronbestand: "https://admin.shopify.com/store/raqds3-tb/pages/168287895879"
deadline: ""
---
# SEO- en conversietest run 6 — auditblok C (content en AI-zichtbaarheid), omzetpiek door betaalde campagne

> Map: [[Waar staat wat]]

## In het kort

Zesde run van de wekelijkse SEO- en conversietest (modus CONCEPT: niets live gewijzigd, niets nieuw gelogd deze run). Auditblok deze run: **C — content en AI-zichtbaarheid** (rotatie B→C→D→B, vorige run blok B op 19 okt; volgende run blok D). De grote sessie- en omzetstijging deze week komt via Shopify Analytics bevestigd niet van SEO, maar van een actieve betaald-social-campagne naar `/pages/gripsokken-2-0` en `/pages/gripsokken-2-1` — al gesignaleerd in de regressiecheck van vandaag, hier bevestigd vanuit Shopify's eigen cijfers. De prijs op die pagina's (€19,95 doorgestreept, €17,95 "met korting") is gecontroleerd en correct.

## Kerncijfers

- **536** · sessies deze week (27 okt–2 nov) · vorige week 318 (+68,6%), nulmeting 23 sep: 346
- **€150,85** · omzet deze week · vorige week €44,95 (+235,6%), nulmeting €72,74
- **11** · cart-additions deze week · vorige week 3 (+267%)
- **3** · orders deze week (AOV €50,28) · vorige week 1, nulmeting 3

## Acties

- [ ] P2 · (zie regressiecheck van vandaag) `/pages/gripsokken-2-0` en `/pages/gripsokken-2-1` missen meta description en robots-meta — geen nieuwe actie hier, zelfde punt

## Bevindingen

### Meten (Shopify Analytics)

| KPI | Deze week (27/10–2/11) | Vorige week (20–26/10) | Nulmeting (23 sep) | Verschil (w/w) |
|---|---|---|---|---|
| Sessies | 536 | 318 | 346 | +68,6% |
| Sessies via zoekmachines (referrer) | 19 | 21 | 16 | −9,5% |
| Cart-additions | 11 | 3 | — | +266,7% |
| Checkout bereikt | 5 | 2 | — | +150% |
| Checkout voltooid / conversieratio | 3 / 0,56% | 0 / 0% | 3 orders | n.v.t. |
| Orders | 3 | 1 | 3 | +200% |
| Omzet | €150,85 | €44,95 | €72,74 | +235,6% |
| Gem. orderwaarde | €50,28 | €44,95 | €24,25 | +11,9% |

**Let op venster-verschil:** Shopify-sessies tellen t/m vandaag (2 nov), GA4 t/m gisteren (1 nov), Search Console t/m vrijdag (30 okt) — niet als gelijk venster naast elkaar zetten. Zowel Shopify als GA4 wijzen onafhankelijk op dezelfde oorzaak: een betaalde social-campagne (GA4: Paid Social 0 → 139 sessies deze week) die naar `/pages/gripsokken-2-0` en `/pages/gripsokken-2-1` leidt.

### Audit — blok C: content en AI-zichtbaarheid (diep)

- **`/pages/gripsokken-vergelijken`** (nieuw deze week): een interactieve keuzehulp/quiz ("1.0 of 2.0? Kies je grip"), geen vraag-en-antwoord-content. `FAQPage`-schema is hier terecht afwezig — geen gebrek, geen actie.
- Geen nieuwe content-gaten gevonden ten opzichte van wat al openstaat. De bestaande EEAT-, Article-schema- en AI-zichtbaarheidspunten uit `2026-10-08-audit-higrip-nl-seo-aeo-geo-aio-sxo-nieuwe-run` en `2026-10-08-seo-aeo-geo-aio-sxo-audit` dekken dit onderwerp al; niets dubbel voorgesteld.
- Volgende run: **blok D (conversie)**.

### Bouwen

Niets nieuws gebouwd of gelogd deze run. Bevestigd dat eerder gebouwde conceptitems ongewijzigd in het testthema `SEO TEST - HI Grip WEBSITE` (200249901383) staan:
- **Waardebalk** (`blocks/hi-pack-value-bar.liquid`, dekt backlogpunt 1 + 12): nog gekoppeld in `templates/product.json`, niet live.
- **RUN 5-concepten** (GTIN/productType-koppeling): nog niet gepubliceerd.

### Evalueren

| Item | Status | Toelichting |
|---|---|---|
| Waardebalk (gratis-verzenddrempel + prijs per paar) | **Te vroeg** | Staat alleen in het testthema, wacht nog op publicatie door de eigenaar. Ongewijzigd t.o.v. 19 okt. |
| RUN 5: GTIN/productType-concept | **Te vroeg** | Nog niet gepubliceerd. |
| RUN 2: SEO-titels/meta's, collectiebeschrijving, alt-teksten | **Te vroeg** | Live sinds 11 okt, evaluatievenster (4-8 weken) loopt rond ±8 nov — volgende run beoordelen. |

### Nieuwe pagina's `/pages/gripsokken-2-0` en `/pages/gripsokken-2-1`

De prijsweergave is gecontroleerd in de live HTML en is **correct**: €19,95 staat doorgestreept als "Normale prijs" (compare-at), €17,95 is de echte "Prijs met korting" — in lijn met het besluit van 29 oktober (adviesprijs retail €19,95, webshop blijft €17,95). Geen conversie- of prijsfout. Het technische punt (ontbrekende meta description, geen robots-meta, bijna-identieke duplicaten) staat als nieuw backlogpunt onder de regressiecheck van vandaag ([[2026-11-02-regressiecheck]]) — niet hier dubbel opgevoerd.

## Wat niet lukte

Niets — alle benodigde Shopify-queries en de theme-check liepen door.

## Bronnen

- Shopify Analytics (`run-analytics-query`), 2 november 2026.
- Shopify-testthema `SEO TEST - HI Grip WEBSITE` (200249901383), `templates/product.json`.
- Live HTML van `/pages/gripsokken-2-0` en `/pages/gripsokken-2-1` (prijscontrole).
- [[2026-11-02-regressiecheck]] voor de GA4-kant van de verkeerspiek.
- Logboek: `seo-routine-logboek` (https://admin.shopify.com/store/raqds3-tb/pages/168287895879).

## Aantekeningen
