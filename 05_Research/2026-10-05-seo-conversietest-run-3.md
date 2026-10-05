---
id: 2026-10-05-seo-conversietest-run-3
titel: "SEO- en conversietest run 3 — auditblok C, concept Waardebalk (gratis verzending + per paar)"
kerntitel: "Combinatieconcept gratis-verzendbalk + prijs per paar gebouwd in het testthema"
datum: 2026-10-05
bron: routine
routine: "seo-conversietest"
categorie: CRO
status: nieuw
prioriteit: P2
samenvatting: "Derde run (modus CONCEPT): de diepe audit van blok C (content en AI-zichtbaarheid) levert geen nieuwe bevindingen op — alles staat al open in de backlog. Gebouwd is een nieuw thema-blok 'HÏ Grip — Waardebalk' dat backlogpunt 1 (gratis-verzendingsdrempel) en 12 (prijs per paar) combineert, in het niet-gepubliceerde testthema; het staat nog niet in een productsjabloon. Sessies herstelden deze week flink (Shopify 276, GA4 +114,8%), maar een deel is vermoedelijk botverkeer en de meetbreuk van 21-23 sep maakt vergelijken met de nulmeting onbetrouwbaar."
gerelateerd: [2026-09-23-seo-conversietest-run-1, 2026-09-28-seo-conversietest-run-2, 2026-10-05-regressiecheck, 2026-09-25-seo-audit]
vervangt: []
bronbestand: "https://admin.shopify.com/store/raqds3-tb/pages/168287895879"
deadline: ""
---
# SEO- en conversietest run 3 — auditblok C, concept Waardebalk (gratis verzending + per paar)

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[Waar staat wat]] · [[Home]]

## In het kort

Derde run van de wekelijkse SEO- en conversietest (modus CONCEPT: niets live gewijzigd). Auditblok deze run: **C — content en AI-zichtbaarheid** (rotatie B→C→D→B, volgens `05_Research/_geheugen/seo-conversietest.md`). Het volledige rapport staat, zoals afgesproken, in de verborgen Shopify-pagina `seo-routine-logboek` (RUN 3-sectie, bovenaan). Deze notitie bevat de kern.

## Kerncijfers

- **276** · sessies deze week (Shopify Analytics, 28 sep–4 okt) · vorige week 266
- **116** · GA4-sessies deze week · +114,8% t.o.v. vorige week (54)
- **2** · bestellingen deze week / €75,40 · vorige week 1 / €41,99
- **7,8** · gemiddelde Search Console-positie (26 sep–2 okt) · vorige periode 7,9

## Acties

_Geen nieuwe backlogpunten deze run: auditblok C bevestigt alleen al openstaande punten (FAQ-structuur, de twee nog ontbrekende vraagpagina's uit backlogpunt 6, NL/EN-dekking, E-E-A-T). Het nieuwe thema-blok dekt backlogpunt 1 (gratis-verzendingsdrempel) en 12 (prijs per paar) als concept, maar verandert hun status niet: beide blijven open tot het blok in een productsjabloon staat en live is gezet._

## Bevindingen

### KPI's (Shopify Analytics; nulmeting = 23 sep 2026)

| KPI | Deze week (28 sep–4 okt) | Vorige week (21–27 sep) | Nulmeting (16–23 sep) |
|---|---|---|---|
| Sessies | 276 | 266 | 346 |
| Sessies via zoekmachines | 36 | 15 | 16 |
| Sessies met add-to-cart | 9 | 5 | 6 |
| Checkout bereikt / voltooid | 5 / 2 | 2 / 1 | 4 / 3 |
| Bestellingen / omzet | 2 / €75,40 | 1 / €41,99 | 3 / €72,74 |
| Gem. orderwaarde | €34,43 | €34,70 | €19,54 |
| Conversieratio | 0,725% | 0,376% | 0,87% |

**Let op — meetbreuk 21-23 sep** (open backlogpunt 20): Shopify veranderde toen de sessiedefinitie. De week-op-week-vergelijking hierboven (beide na de breuk) is geldig; de vergelijking met de nulmeting (ervoor) niet.

GA4 (476032345) toont voor dezelfde week 116 sessies (+114,8% t.o.v. 54 vorige week) — nog steeds ruim onder de Shopify-telling (276), een gat dat al twee runs lang onverklaard blijft. Een substantieel deel van de GA4-groei lijkt botverkeer: "United States | Direct" steeg naar 43 sessies (was 7) met 0% engagement. Search Console (26 sep–2 okt, loopt 3 dagen achter): 22 klikken (−8,3%), 860 vertoningen (−15,5%), positie 7,8 (vorige 7,9). "Gripsokken" verslechterde naar positie 8,1 (−2,5), "higrip" verbeterde naar 2,6 (+0,9).

### Auditblok C — content en AI-zichtbaarheid (diep)

Gecontroleerd: FAQ-paginastructuur, de volledige blogcatalogus (24 artikelen via de Admin API), het content-gat tegenover FitSockr, en of de twee nog ontbrekende vraagpagina's uit backlogpunt 6 (`backlog#b02ee884`) er inmiddels zijn.

- **FAQ-pagina** (`/pages/veelgestelde-vragen`): categorie-koppen (H3) ongewijzigd ("Over gripsokken", "Sport en gebruik", "Bestellen, verzending en retour", "Over HÏ Grip"). Individuele vragen renderen niet als koppen in de statische HTML (waarschijnlijk een accordion-component) — niet te beoordelen op "antwoord in de eerste 1-2 zinnen" zonder browser-rendering. Geen nieuw punt.
- **Blogcatalogus:** 24 artikelen bevestigd. `wat-zijn-gripsokken` bestaat al (15 dec 2025) — dit beantwoordt materieel al één van de drie vragen uit backlogpunt 6, zij het als losse blogpost en niet als de bedoelde zelfstandige vraagpagina met `FAQPage`-schema. De andere twee vragen ("waarom glijdt mijn voet in mijn padelschoen", "tapedesign alternatief") hebben nog geen artikel. Backlogpunt 6 blijft dus onveranderd open, met deze nuance voor de volgende contentronde.
- **E-E-A-T / NL-EN:** niets nieuws t.o.v. de regressiecheck van 5 okt — de bekende punten (demo-tekst onder de oprichters op `/pages/ons-verhaal`, deels onvertaalde `/en`-sportpagina's) staan al open.

Conclusie: geen nieuwe bevindingen in blok C deze run. Volgende run: blok D (conversie).

### Gebouwd (concept — alleen in het testthema, niets live)

Nieuw thema-blok **"HÏ Grip — Waardebalk"** in het testthema `SEO TEST - HI Grip WEBSITE` (ID 200249901383, bevestigd niet-gepubliceerd via `themes(first:20)`; hetzelfde testthema als RUN 1). Het combineert backlogpunt 1 (gratis-verzendingsdrempel tonen) en 12 (prijs per paar) — de Growth Radar-weekchecks van 27 sep en 4 okt stelden al voor deze twee punten samen te voegen, omdat ze dezelfde sectie en beslissing raken. De backlogkoppen zelf zijn niet samengevoegd (dat blijft aan Lars); dit is alleen de uitvoering als concept.

- **Bestanden:** `blocks/hi-pack-value-bar.liquid` (nieuw thema-blok) en `assets/hi-pack-value-bar.js` (custom element `<hi-pack-value-bar>`), aangemaakt via `themeFilesUpsert` ná `validate_graphql_codeblocks` (verplicht volgens de routine, regel 5).
- **Werking:** voortgangsbalk + tekst "Nog €X,XX tot gratis verzending" (of "✓ Gratis verzending"), en bij multipack-varianten (titel bevat "N-pack") de prijs per paar. Herrekent live bij een variantwissel door het bestaande `ProductSelectEvent`-patroon van het thema te volgen (zoals `assets/product-price.js` al doet) — geen eigen serverfetch.
- **Niet hardcoded:** drempel (€35 standaard) en alle teksten zijn block-settings, instelbaar via de theme-editor.
- **Nog niet gekoppeld aan een productsjabloon.** Het blok staat klaar in de block-bibliotheek (categorie "Product"); het moet nog handmatig onder het prijsblok worden toegevoegd via de theme-editor. Zie "Wat niet lukte".

### Resultaten eerdere testplannen

- **Maatgids** (168287863111): op 28 sep door Lars afgewezen. Vervallen, niet opnieuw voorgesteld.
- **RUN 2-concepten** (collectiebeschrijving, SEO-titels/meta's 2.0 + collecties, alt-teksten, producttype/SKU/GTIN): nog steeds niet gepubliceerd — `seo.title`/`seo.description` op de 2.0-producten en de collectie staan nog op `null`, `productType` nog leeg (gecontroleerd 5 okt). Label: **te vroeg**, wacht op publicatie.

## Wat niet lukte

- Het nieuwe blok automatisch aan `templates/product.json` of `templates/product.performance-grip-socks-2.json` toevoegen: deze template-bestanden waren te groot om in deze sessie veilig uit te lezen en te bewerken. Vereist nu een handmatige stap in de theme-editor.
- De sessiediscrepantie Shopify (276) vs. GA4 (116) in dezelfde week: twee runs op rij onverklaard.
- Botverkeer kon niet op land uitgesplitst worden in de GA4-funnel-tool (geen landdimensie beschikbaar); wel apart gesignaleerd (VS-Direct, 0% engagement).
- Visuele controle van de nieuwe Waardebalk in een browser: niet gedaan (geen storefront-previewrendering beschikbaar in deze cloudomgeving, bekende beperking). De code volgt bewust het bestaande `product-price.js`-patroon van het thema als risicobeperking.

## Bronnen

- Shopify Admin API (GraphQL) en ShopifyQL-analytics, HÏ Grip, 5 oktober 2026.
- `python 05_Research/_tools/google_data.py ga4/gsc`, 5 oktober 2026.
- Verborgen Shopify-pagina `seo-routine-logboek` (volledig rapport, RUN 3).
- `00_Brand_Core/Feiten & Actuele Staat.md`.

## Aantekeningen
