---
id: 2026-10-12-werkthema-vs-live
titel: "Werkthema vs live thema — vergelijking 12 oktober 2026, referentie voor de to-do's"
kerntitel: "Werkthema loopt deels voor en deels achter op live: niet in één keer pushen"
datum: 2026-10-12
bron: los
routine: ""
categorie: Techniek
status: nieuw
prioriteit: P2
samenvatting: "Het werkthema loopt op een paar plekken vóór op live (3500+, 'binnen 1 werkdag', nieuwe producthandles, verzendbalk, vier nieuwe paginaconcepten), maar op andere plekken juist achter (bronnen op de sportpagina's, knopinstellingen, taalwissel-app). Deze vergelijking is het referentiepunt voor de open to-do's: wat al in het werkthema klaarstaat, hoeft Claude niet opnieuw te bouwen en wacht op een selectieve push door een mens."
gerelateerd: [2026-10-07-shoppagina-keuzepagina, 2026-10-07-missie-visie-pagina, 2026-10-11-seo-audit-weekdelta, 2026-10-08-audit-higrip-nl-seo-aeo-geo-aio-sxo-nieuwe-run, 2026-10-14-homepage-herontwerp-vanaf-leeg-canvas-richting-b-doorgaan]
vervangt: []
bronbestand: ""
deadline: ""
---
# Werkthema vs live thema — vergelijking 12 oktober 2026

> Map: [[Waar staat wat]]

## In het kort

Werkthema "AI website workspace 2.0" (`201133490503`, laatst gewijzigd 11-10 12:14) en live thema (`201132507463`, laatst gewijzigd 11-10 12:31) op 12-10 rond 10:40 allebei met `shopify theme pull` opgehaald en bestand voor bestand vergeleken. Alleen gelezen: er is niets gepusht en niets gewijzigd. **Besluit van Lars (12-10): niet pushen, maar deze vergelijking gebruiken als referentiepunt voor de to-do's.** Wat hieronder bij "voor op live" staat, is het Claude-deel van een to-do; het live zetten blijft mensenwerk en gebeurt selectief (`--only`), nooit het hele werkthema.

## Kerncijfers
- **116** · Verschillen tussen werkthema en live (bestanden)
- **0** · Oude productlinks in het werkthema · live nog in 10 bestanden
- **4** · Nieuwe paginaconcepten in het werkthema, nog aan geen pagina gekoppeld

## Acties
- [ ] P2 · Werkthema bijwerken met wat alleen live staat (bronnen en FAQ-link op de sportpagina's padel en voetbal, knopinstellingen van de testimonials-sectie, taalwissel-app T-Lab, primaire knoprand 1) zodat een push niets live wegschrijft
- [ ] P2 · Prijzen in het werkthema rechtzetten vóór een push: "Vanaf €13,49" in `templates/collection.json` en het producttrio (live 1-pack €14,95), en de 2.0 als €14,95 met doorgestreept €17,95 in het producttrio en `page.shop.json` (live €17,95 zonder korting)

## Bevindingen

### Voor op live: klaar in het werkthema, wacht op een push
- **Sporters 3.500+** in plaats van 1.500+/3.000+: `gripsocks2-photo`, `gripsocks2-proof`, `hi-wk-promo`, `shop-hero`, `shop-intro`, `shop-keuzehulp`, `sport-proof`, `templates/collection.json` (USP), `templates/page.sport-rugby.json`, `snippets/product-schema.liquid` (FAQ), `templates/product.json` (EN-strip), `blocks/ai_gen_block_6458eb3`.
- **"Binnen 1 werkdag verzonden"** in plaats van 22:00 / "vandaag verzonden" / "voor 16:00": `sport-hero` (chip), `sport-proof`, `shop-intro`, `hi-wk-promo`, `page.sport-rugby.json`, `padel-faq`, `padel-usp-bar`, `padel-guarantee-strip`, `padel-products`, `padel-final-cta`.
- **Nieuwe producthandles** (`performance-gripsokken`, `performance-gripsokken-2-0-wit`) in plaats van `hi-grip-gripsokken-1` en `performance-grip-socks-2-0-wit-1`: `templates/collection.json`, `shop-keuzehulp`, `shop-size-row`, `gripsocks2-products-trio` en zes `padel-*`-snippets. Werkthema: 0 oude links; live: 10 bestanden.
- **Organization-schema** in `sections/header.liquid`: `url` = `shop.url` en een `@id`, in plaats van de URL van de pagina zelf. `@context` is nog `http://schema.org`; `sameAs`, `alternateName` en `foundingDate` ontbreken nog.
- **Gratis-verzendbalk** in het winkelwagenvenster: `snippets/free-shipping-bar.liquid` + `cart-drawer`, met de drempel als thema-instelling (Gratis verzending, standaard €35). Op de 2.0-productpagina een vertrouwensregel uit dezelfde drempel (gratis vanaf €35 · binnen 1 werkdag · 30 dagen retour). **Niet:** een balk op de productpagina die per pack meerekent.
- **Productaanbevelingen** onder de 1.0- en 2.0-productpagina (`product.json`, `product.performance-grip-socks-2.json`).
- **Kopniveau instelbaar (H1-H4 of geen kop)** in 13 AI-blokken.
- **Sale-badge** op productkaarten bij een doorgestreepte prijs (`card-gallery`, `_product-card-gallery`).
- **Homepage:** twee extra blokken (infographic en "Ontdek jouw sport"), hero-uitsnede aangepast.
- **Prijzen** €14,99/€17,99 → €14,95/€17,95 in het producttrio en `page.shop.json`. Let op: de 2.0 staat daar als €14,95 met doorgestreept €17,95, maar live kost de 2.0 €17,95 zonder korting. De maat 43-47 in `product-schema.liquid` klopt wel (live 2.0: 35-38 / 39-42 / 43-47); live staat nog 43-46.
- **Blog "problemen in de sportwereld":** "Vier" → "Drie ondernemende sporters". **`page.json`:** retourtermijn 14 → 30 dagen.

### Nieuwe paginaconcepten, nog nergens gekoppeld
- **Shop** (`collection.gripsokken.json` en `page.shop-2.json`, secties `sh-1` t/m `sh-6`). De collectie gripsokken heeft geen template-suffix, dus pushen verandert niets tot iemand het template toewijst.
- **Vergelijkpagina 1.0 vs 2.0** (`page.vergelijken.json`, `vg-1` t/m `vg-7`, met "laagste prijs per paar" in de tabel, ItemList-schema en 4,6 ★). Er bestaat nog geen pagina.
- **Missie** (`page.missie-2.json`, `mvm-1` t/m `mvm-8`) en **Visie** (`page.visie-2.json`, `mvv-1` t/m `mvv-8`), met foundingDate in de hero en 4,6 ★. /pages/onze-missie en /pages/onze-visie gebruiken nog hun oude templates.

### Live loopt voor: hier niet zomaar het werkthema overheen pushen
- **Sportpagina's padel en voetbal:** live heeft de bronnen (Apps et al.), de FAQ-link en de achtergrondkleuren; het werkthema niet. Ook `sections/sport-faq.liquid` verschilt (werkthema heeft een nieuw ontwerp).
- **Testimonials (`ss-testimonial-8`) en de productpagina's:** live heeft extra knopinstellingen.
- **Thema-instellingen:** live heeft de taalwissel-app (T-Lab) als app-embed; in het werkthema is de primaire knoprand 0 in plaats van 1.
- **Alleen live, ongebruikt:** `ss-comparison-table-pro`, `ss-faq-17`, `ss-feature-54`, `ss-scrolling-features`, `ss-stats-5` (geen template gebruikt ze).

### Niet in het werkthema (geen voortgang ten opzichte van live)
4,6 ★ op homepage en 2.0-productpagina (staat nog "★★★★½" en in de testimonials 4,5) · padel/rugby in "Voor jouw sport" op de 2.0-productpagina · rugby-FAQ op de homepage · rugbytekst van 800+ woorden · H1's op de beleidspagina's · og:image https · prijs per paar bij de pack-selector.

## Wat niet lukte

Het visuele resultaat is niet in een browser bekeken; de vergelijking is tekstueel (bestanden en instellingen). Vertalingen (Translate & Adapt) en Online Store-voorkeuren zitten niet in het thema en zijn dus niet vergeleken.

## Bronnen

- `shopify theme pull --theme 201133490503` en `--theme 201132507463`, 12-10-2026
- Shopify Admin API (alleen lezen): `themes`, `pages` (template-suffix per pagina), `collections`
- [[Update Log]] (pushes van 2-10 en 11-10)

## Aantekeningen
