---
id: 2026-10-19-seo-conversietest-run-5
titel: "SEO- en conversietest run 5 — auditblok B (producten en collecties), GTIN/productType-concept"
kerntitel: "Productbeschrijvingen missen padel/tennis/rugby; GTIN/productType-concept klaar"
datum: 2026-10-19
bron: routine
routine: "seo-conversietest"
categorie: SEO
status: nieuw
prioriteit: P2
samenvatting: "Vijfde run (modus CONCEPT): de diepe audit van blok B (producten en collecties) vindt twee nieuwe contentgaten in de productbeschrijvingen — padel, tennis en rugby ontbreken in de sportopsomming van de 1.0- en 2.0-sokken, en de 2.0-beschrijving bevat nog een <code>-tag die het verplichte Poppins-lettertype doorbreekt — en levert een concrete GTIN- en productType-invulling op die het al openstaande backlogpunt 4 verder helpt. De add-to-cart-ratio daalde deze week naar 2,38% (vorige week 4,35%, nulmeting 1,92%) terwijl de Search Console-CTR halveerde naar 3,08% ondanks 21% meer vertoningen — geen van beide is toe te schrijven aan een eigen wijziging van deze routine."
gerelateerd: [2026-10-12-seo-conversietest-run-4, 2026-10-05-seo-conversietest-run-3, 2026-09-28-seo-conversietest-run-2, 2026-09-23-seo-conversietest-run-1, 2026-10-19-regressiecheck]
vervangt: []
bronbestand: "https://admin.shopify.com/store/raqds3-tb/pages/168287895879"
deadline: ""
---
# SEO- en conversietest run 5 — auditblok B (producten en collecties), GTIN/productType-concept

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[Waar staat wat]] · [[Home]]

## In het kort

Vijfde run van de wekelijkse SEO- en conversietest (modus CONCEPT: niets live gewijzigd). Auditblok deze run: **B — producten en collecties** (rotatie B→C→D→B, nu weer bij B; volgende run blok C). Het volledige rapport staat, zoals afgesproken, in de verborgen Shopify-pagina `seo-routine-logboek` (RUN 5-sectie, bovenaan, RUN 1–4 behouden). Deze notitie bevat de kern.

## Kerncijfers

- **2,38%** · add-to-cart-ratio deze week (Shopify, 12–18 okt) · vorige week 4,35%, nulmeting 1,92%
- **4 / €195,88** · orders en omzet deze week · vorige week 3 / €71,98
- **3,08%** · Search Console-CTR (10–16 okt) · vorige periode 6,67% (−54%)
- **83** · GA4-sessies (7 dagen) · vorige week 98 (−15%)

## Acties

- [ ] P2 · Productbeschrijvingen 1.0 en 2.0 aanvullen met padel/tennis/rugby, en de `<code>`-tag uit de 2.0-beschrijving halen (nieuw concepttekst in het logboek)
- [ ] P1 · (bestaand, bijgewerkt) Backlogpunt 4 — productType en GTIN: concrete invulling klaar (6 EAN's voor de 2.0-varianten, productType-voorstel "Sportsokken"), 1.0 blijft [CHECK] zonder bronbestand

## Bevindingen

### KPI's (Shopify Analytics; nulmeting = 16–23 sep 2026)

| KPI | Deze week (12–18 okt) | Vorige week (5–11 okt) | Nulmeting (16–23 sep) |
|---|---|---|---|
| Sessies | 336 | 230 | 364 |
| Sessies met add-to-cart | 8 (2,38%) | 10 (4,35%) | 7 (1,92%) |
| Checkout bereikt / voltooid | 7 / 4 | 8 / 3 | 5 / 3 |
| Orders / omzet | 4 / €195,88 | 3 / €71,98 | 3 / €72,74 |
| Gem. orderwaarde | €45,70 | €17,35 | €19,54 |
| Conversieratio | 1,19% | 1,30% | 0,82% |

Let op (bestaand backlogpunt 20): Shopify's sessiemeting is sinds 21–23 sep veranderd (geen cutoff om middernacht, sessies zonder pageview tellen mee, bots gefilterd), dus de nulmeting (16–23 sep) is niet 1-op-1 vergelijkbaar met de twee latere weken. De sessiestijging deze week (336 t.o.v. 230) komt grotendeels van de productpagina's — zie GA4-landingspagina's hieronder — en niet van een eigen wijziging van deze routine.

**GA4** (property 476032345), 12–18 okt vs. 5–11 okt: sessions 83 (98, −15,3%) · totalUsers 65 (68) · engagementRate 59,0% (55,1%) · keyEvents (purchase) 3 (3, gelijk) · purchaseRevenue €170,75 (€62,98). Kanalen: Organic Search 37 (52, −28,8%) · Direct 27 (33) · Referral 9 (2, 4,5×) · Organic Social 6 (7) · Unassigned 3 (4) · Organic Shopping 1 (0). Funnel (events, 7d): view_item_list 25 (24) → view_item 35 (37) → add_to_cart 18 (9) → begin_checkout 9 (10) → add_shipping_info 6 (8) → add_payment_info 4 (4) → purchase 3 (3). **Let op [CHECK]:** GA4 telt hier méér add_to_cart-events deze week (18 vs. 9), tegenover minder Shopify-sessies-met-cart-toevoeging (8 vs. 10) — verschillende telmethodes (events vs. sessies), geen tegenspraak maar ook geen eenduidig signaal; te weinig volume voor een conclusie.

**Search Console** (10–16 okt vs. 3–9 okt, loopt 3 dagen achter): klikken 38 (68, −44,1%) · vertoningen 1.234 (1.019, +21,1%) · CTR 3,08% (6,67%) · gem. positie 8,1 (8,0, stabiel). De klikdaling zit vooral in de merkzoektermen: "higrip" daalde van 2,3 naar 1,6 (positie verbeterde, klikken navenant minder omdat de trend hier op aantal klikken kijkt — zie onder), en de generieke term "gripsokken" bleef op 3 klikken ondanks een lichte positieverbetering (5,8 → 5,2). Te weinig volume om van een trend te spreken; geen van de wijzigingen van deze routine is hier de verklaring.

### Auditblok B — producten en collecties (diep)

Gecontroleerd via de Shopify Admin GraphQL API (producten, varianten, collectie) op 19 oktober 2026.

- **SEO-titels en meta descriptions:** Performance Gripsokken 2.0 Zwart en Wit en de collectie `gripsokken` hebben nu beide een ingevulde `seo.title`/`seo.description` (bevestigt eerdere runs, nog steeds live). De 1.0-product (`performance-gripsokken`) heeft **geen** `seo.title` (null) — Shopify valt terug op de producttitel "Performance Gripsokken" (24 tekens, bevat het hoofdkeyword, geen probleem). De meta description van 1.0 is 159 tekens (iets boven de 150–155-richtlijn); 2.0 zwart 142 tekens (iets kort), 2.0 wit 154 tekens (goed). De collectie-SEO-titel is 61 tekens, 1 teken boven de 60-tekenregel — verwaarloosbaar, geen apart punt.
- **Unieke beschrijving:** alle drie producten hebben een eigen, niet-gedupliceerde beschrijving. **Nieuwe bevinding:** geen van de drie noemt alle kernsporten. De 1.0-beschrijving noemt "padel, voetbal, hockey, fitness en meer" (tennis en rugby ontbreken uit de opsomming, al vallen ze mogelijk onder "en meer"); de 2.0-beschrijving (zwart én wit, identiek op dit punt) noemt alleen "tennis, basketbal, fitness en pilates" — **padel en rugby ontbreken volledig**, terwijl padel de grootste beachhead is (Feiten & Actuele Staat) en rugby sinds deze week een eigen sportpagina heeft. Voorstel in het logboek.
- **`<code>`-tag in de 2.0-beschrijving:** al gesignaleerd in RUN 1 (23 sep) maar nooit als apart punt vastgelegd — **nog steeds aanwezig** in zowel de zwarte als de witte 2.0-beschrijving, rond de zin "Voetbalsokken met grip, ook perfect voor tennis, basketbal, fitness en pilates". Een `<code>`-tag rendert in de browser doorgaans in een monospace-fallbackfont, wat in strijd is met de harde merkregel "alleen Poppins" (CLAUDE.md §4). Voorstel: tag verwijderen én meteen padel/rugby toevoegen — één concepttekst, zie het logboek.
- **Alt-teksten:** 1.0-product heeft nog steeds generieke, dubbele alt-tekst ("HÏ Grip Gripsokken HÏ Grip" op 7 van de 10 foto's) en 1 lege alt-tekst — al bekend, blijft open (geen nieuw punt; dit specifieke product stond niet in de RUN 2-alt-tekstronde, die zich op 2.0 richtte). De 2.0-foto's (zwart en wit) hebben allemaal beschrijvende, unieke Nederlandse alt-tekst — bevestigt eerdere runs.
- **Collectietekst (150–300 woorden):** de collectiebeschrijving van `gripsokken` is de RUN 2-herschrijving, nu bevestigd live, inclusief rugby in de lopende tekst. Bevat nog **"3000+ sporters"** in plaats van 3500+ — dit is het al bekende, open claim-punt uit [[2026-10-11-seo-audit-weekdelta]] (regressiecheck 19 okt bevestigde dit ook voor de homepage); geen nieuw punt, alleen herbevestigd vanuit blok B.
- **Productdata voor Google Shopping/AI-agents:** `productType` is nog steeds leeg (`""`) voor alle drie producten; `barcode`/GTIN is leeg (1.0: `""`) of `null` (2.0 zwart/wit) voor alle varianten — bevestigt het al openstaande backlogpunt 4 (variant-ID's/GTIN), geen nieuw punt. **Nieuw dit keer:** een concrete, bronbare invulling is nu klaar — zie Gebouwd hieronder — en als update aan backlogpunt 4 toegevoegd in plaats van een nieuw punt.
- **Interne links:** niet apart als probleem aangetroffen bij deze doorloop; geen diepgaande linkanalyse gedaan binnen de beschikbare tijd van deze run.

### Gebouwd (concept — alleen voorstellen, niets live aangepast)

1. **GTIN- en productType-concept voor backlogpunt 4.** Uit `00_Brand_Core/Product/Performance Grip Socks 2.0.md` (EAN-lijst, bron `EAN codes - HÏ Grip\ean_codes\EAN CODES.xlsx`) is een directe, ondubbelzinnige koppeling te maken voor de zes 2.0-varianten:

   | SKU | Variant | Voorgestelde GTIN (EAN) |
   |---|---|---|
   | PGSZ201 | 2.0 Zwart 35–38 | 9110024809242 |
   | PGSZ202 | 2.0 Zwart 39–42 | 9110024809259 |
   | PGSZ203 | 2.0 Zwart 43–47 | 9110024809266 |
   | PGSW201 | 2.0 Wit 35–38 | 9110024809211 |
   | PGSW202 | 2.0 Wit 39–42 | 9110024809228 |
   | PGSW203 | 2.0 Wit 43–47 | 9110024809235 |

   Voor de 1.0-varianten (GS110 34–39, GS100 40–46) staat geen EAN in het bronbestand — blijft `[CHECK]`, niet verzonnen. Voorgestelde `productType` voor alle drie producten: **"Sportsokken"** (consistente categorie, helpt zowel Google Shopping als AI-agentfeeds). Volledige mutatievoorstellen (met `validate_graphql_codeblocks` vooraf) staan in het logboek; niet uitgevoerd — dit wijzigt live productdata en vereist een go van Lars, net als eerdere SEO-titel/metawijzigingen via de opdrachtenstroom.
2. **Concepttekst productbeschrijvingen (1.0 en 2.0) met alle kernsporten en zonder `<code>`-tag.** Volledige voor/na-HTML staat in het logboek; de kern: 1.0 krijgt "padel, voetbal, tennis, rugby, hockey, fitness en meer", 2.0 krijgt (zonder `<code>`) "Gripsok met grip, ook perfect voor padel, tennis, rugby, basketbal, fitness en pilates".

### Resultaten eerdere testplannen

- **HÏ Grip — Waardebalk:** blijft **te vroeg**. Geverifieerd via de Shopify-theme-API: het blok staat nog altijd in `templates/product.json` van het niet-gepubliceerde testthema "SEO TEST - HI Grip WEBSITE" (ID 200249901383, ongewijzigd) en **niet** in het huidige live thema (ID **202667458887** — het live thema-ID is sinds de vorige run gewisseld, zie Aantekeningen). Nulmeting en evaluatiemoment blijven ongewijzigd (4 weken na publicatie).
- **RUN 2-concepten:** van de vier onderdelen staan er nu **drie** bevestigd live — SEO-titels/meta's (2.0 + collectie), de collectiebeschrijving en de alt-teksten (2.0). Alleen **productType/SKU/GTIN** staat nog niet live (zie boven, nu met een concreet voorstel). De live-datum van de SEO-titels/meta's is bevestigd op 11 oktober; dat is 8 dagen geleden — nog te vroeg voor de SEO-evaluatie (4–8 weken na livegang, dus ten vroegste 8 november).

## Wat niet lukte

- Geen diepgaande interne-linkanalyse binnen blok B (tijdsgrens van deze run); geen aanwijzing voor een probleem, maar ook niet actief uitgesloten.
- Geen visuele controle van de Waardebalk in een browser — zelfde, terugkerende beperking (geen storefront-rendering in deze cloudomgeving).

## Bronnen

- Shopify Admin API (GraphQL): producten, varianten, collectie, thema's en themabestanden, 19 oktober 2026.
- `python3.13 05_Research/_tools/google_data.py ga4/gsc` (servicesleutel via `GOOGLE_SA_JSON_B64`).
- ShopifyQL (`run-analytics-query`) voor sessies/cart/checkout/orders, 19 oktober 2026.
- `00_Brand_Core/Product/Performance Grip Socks 2.0.md` (EAN-lijst) en `00_Brand_Core/Feiten & Actuele Staat.md`.
- Verborgen Shopify-pagina `seo-routine-logboek` (volledig rapport, RUN 5).
- `05_Research/_backlog/CONTROLE.json` (actiecontrole 19 okt) en `05_Research/_backlog/ACTIEBACKLOG.md`.

## Aantekeningen

- Het live Shopify-thema is sinds de vorige run (12 okt, toen ID 202394272071) gewisseld naar ID **202667458887** ("Live HÏ Grip WEBSITE", rol MAIN); 202394272071 staat nu unpublished. Dit is gesignaleerd maar niet gewijzigd — thema-ID-beheer valt buiten deze routine (zie `03_Website_Agent/Technisch/Technische Procedures.md`). Het testthema van deze routine (200249901383) is niet aangeraakt en bleef veilig ongepubliceerd.
