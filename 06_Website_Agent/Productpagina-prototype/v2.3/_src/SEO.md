# SEO — Productpagina 2.0 (v2.0, 26-11-2026)

De SEO-agent liep vast op zijn turnlimiet (higrip.nl gaf HTTP 429). Onderstaande is samengesteld uit de SEO-audit van 25-09 (`06_Website_Agent/Analyse/SEO-audit 2026-09-25/`) en het schema van prototype v1.0. Keywords zijn aannames uit de vault, geen keyword-tooldata.

## Meta (Shopify admin → product → Zoekmachine-weergave)

**Variant A — Performance**
- Title (54): `Performance Gripsokken 2.0 · 95% meer grip | HÏ Grip`
- Description (150): `Gripsokken met 15–20 mmHg compressie en siliconen grip onder de voet. Voor padel, voetbal, tennis en rugby. Binnen 1 werkdag verzonden, 30 dagen retour.`

**Variant B — Sport**
- Title (57): `Gripsokken voor padel, voetbal en rugby | HÏ Grip 2.0`
- Description (147): `Stop met glijden in je schoen. Siliconen grip, compressie en Coolmax® in één sok. Kies 1, 3 of 5 paar. Gratis verzending vanaf €35, 30 dagen retour.`

**Aanbeveling:** A, omdat "gripsokken" + modelnaam de merkzoekopdracht pakt; B testen op de witte variant. Let op: "95% meer grip" in de title is een categorieclaim (Apps et al. 2022); op de pagina staat de bron direct bij de claim.

## Structured data (`ld-product.json`, ook in index.html)
- ProductGroup met 6 varianten (SKU + GTIN-13 uit `Performance Grip Socks 2.0.md`), elk met Offer €17,95, `shippingDetails` (NL €4,50, verwerkingstijd 0–1 dag) en `hasMerchantReturnPolicy` (30 dagen).
- Geen BreadcrumbList: het zichtbare kruimelpad is in v2.1 verwijderd (feedback 27-11), en schema hoort te kloppen met wat op de pagina staat.
- FAQPage: de 8 vragen letterlijk gelijk aan de FAQ op de pagina (gegenereerd uit de `FAQ`-array).
- **Geen `aggregateRating`**: pas toevoegen als echte reviews zichtbaar op de productpagina staan.
- Packprijzen (€44,95 / €69,95) staan niet in het schema: dat zijn bundels, geen varianten.

## Open punten uit de audit van 25-09 (live thema)
- `@context` staat sitewide op `http://schema.org`; moet `https`.
- Organization mist `sameAs` en `contactPoint`.
- Live productschema mist GTIN en shipping/return-gegevens.
