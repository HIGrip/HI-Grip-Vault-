---
id: 2026-09-23-seo-conversietest-run-1
titel: "SEO- en conversietest run 1 — nulmeting en tegenstrijdige verzend/retourinfo"
datum: 2026-09-23
bron: routine
routine: "seo-conversietest"
categorie: SEO
status: nieuw
prioriteit: P1
samenvatting: "Eerste run van de wekelijkse SEO- en conversietest (modus CONCEPT): nulmeting van 346 sessies, 16 via zoekmachines en 3 bestellingen (€72,74), plus een volledige audit. De grootste vondst is inhoudelijk: higrip.nl spreekt zichzelf tegen over verzendkosten, de drempel voor gratis verzending, de verzendtijd en de retourtermijn. Dat schaadt het vertrouwen van klanten en AI-zoekmachines. Er staan een verborgen maatgids en een voorstellenpakket (SEO-titels, redirects) klaar."
gerelateerd: [2026-09-15-seo-audit, 2026-09-21-regressiecheck, 2026-09-21-growth-radar-seo-technisch, 2026-09-22-growth-radar-seo-content, 2026-09-16-seo-onderzoek-cloud-routine-website, 2026-09-07-compliance-todo, 2026-09-23-growth-radar-ai-search, 2026-09-24-growth-radar-cro]
vervangt: []
bronbestand: "https://admin.shopify.com/store/raqds3-tb/pages/168287895879"
deadline: ""
---
# SEO- en conversietest run 1 — nulmeting en tegenstrijdige verzend/retourinfo

## In het kort

Eerste run van de geplande taak `website-seo-en-cconversietest` (wekelijks, modus CONCEPT: niets live gewijzigd). Het volledige rapport, de backlog en de wijzigingslog staan in de verborgen Shopify-pagina `seo-routine-logboek`: die pagina is het geheugen van de routine tussen runs. Deze notitie bevat de kern.

## Bevindingen

**23 september 2026 · woensdag**

### Nulmeting (16–23 sep tegenover 9–15 sep)

| KPI | Deze week | Vorige week |
|---|---|---|
| Sessies | 346 | 296 |
| Via zoekmachines | 16 | 43 |
| Add-to-cart | 6 (1,7%) | 13 (4,4%) |
| Checkout bereikt | 4 | 12 |
| Bestellingen / omzet | 3 / €72,74 | 0 / €0 |

328 van de 346 sessies zijn "direct", 285 landen op `/` en 33 op `/password`: waarschijnlijk veel eigen testverkeer of bots. Te weinig data voor conclusies. Zelfde week 2025: 0 sessies (winkel nog niet op Shopify).

### De site spreekt zichzelf tegen (belangrijkste vondst)

| Onderwerp | Waarden gevonden op higrip.nl |
|---|---|
| Verzendkosten | €4,25 (algemene voorwaarden) · €4,50 (FAQ-blok productpagina) |
| Gratis verzending vanaf | €35 (voorwaarden, meta-omschrijving) · €30 (FAQ-blok productpagina) |
| Verzendtijd | vóór 16:00 dezelfde dag (verzendbeleid) · vóór 22:00 vandaag verzonden (homepage-meta) · binnen 1 werkdag (productpagina) |
| Retour | 14 dagen, ongeopend, 25% herbevoorradingskosten (retourbeleid) · 30 dagen retour (productpagina) |
| Maten 2.0 | 43–47 (variant) · 43–46 (FAQ) |

De voorwaarden "alleen ongeopend" en "25% herbevoorradingskosten" lijken te botsen met het herroepingsrecht bij kopen op afstand. Zie ook het retourpunt in [[2026-09-07-compliance-todo]]. Ook de meta-omschrijving van het hoofdproduct is inmiddels gewijzigd ("3000+ sporters", "€35"); de tekst in de growth-radar-backlog (1500+, €30) klopt dus niet meer.

### Techniek
- Redirects: `/products/hi-grip-gripsokken-34-39` en `-40-46` wijzen naar `/products/gripsokken`, en die geeft 404. `hi-grip-gripsokken-1` en `performance-grip-socks-2-0-wit-1` lopen via een keten van 2 stappen. Oude sport-URL's (padelsokken, tennissokken, zaalvoetbalsokken) wijzen naar de homepage in plaats van naar de sportpagina's.
- De oude URL `/blogs/2630309_gripsokken-tijdens-pilates-yoga-optimale-grip-en-comfort-met-hi-grip` staat nog in Google en geeft 404. Nieuwe URL: `/blogs/trends/gripsokken-tijdens-pilates-en-yoga-…`. Dit sluit aan op de "verouderde numerieke URL's" uit [[2026-09-16-seo-onderzoek-cloud-routine-website]].
- Het Product/Offer-schema mist `shippingDetails`, `hasMerchantReturnPolicy`, SKU en GTIN. Pas invullen als de verzend- en retourinfo gelijk is.
- Goed: canonicals, hreflang nl/en/x-default en een complete sitemap. `llms.txt`, `agents.md` en de agentic sitemap staan live, maar bevatten alleen standaardtekst van Shopify. AI-agents leunen dus volledig op de productdata.
- PageSpeed Insights kon niet draaien (dagquotum zonder API-sleutel). De HTML is 324–443 KB per pagina met 2–3× `fetchpriority="high"`. Het WK-promoscript wordt niet meer geladen, wat een deel van het INP-backlogpunt beantwoordt ([[2026-09-21-growth-radar-seo-technisch]]).

### Producten en content
- De 2.0-producten hebben geen SEO-titel of meta, dus Shopify gebruikt automatisch 320 tekens uit de beschrijving. Alt-teksten zijn generiek en dubbel ("HÏ Grip Gripsokken HÏ Grip" 7×). Producttype, tags, SKU en barcode zijn leeg. In de 2.0-beschrijving staat een `<code>`-tag rond een zin.
- De collectietekst noemt alleen "witte" sokken en de maten 34–39/40–46, terwijl de collectie drie producten bevat.
- 24 blogartikelen zonder samenvatting (excerpt); veel "u/uw" op zakelijk, FAQ, blogs en in de beleidsteksten. Typfout "VETROUWD DOOR" op /pages/zakelijk.

### Gemaakt (verborgen)
- Pagina **Maatgids gripsokken** (`maatgids-gripsokken`, ID 168287863111): antwoord-eerst-opbouw (40–60 woorden onder elke vraag-H2, zie [[2026-09-22-growth-radar-seo-content]]), maattabel voor beide modellen, vergelijkingstabel, interne links. Bevat twee [CHECK]-punten (43–46/47 en retourtermijn).

## Acties

- [ ] P1 · Verzendkosten, gratis-verzenddrempel, verzendtijd en retourtermijn overal gelijktrekken (productpagina, FAQ, meta's, voorwaarden, beleid)
- [ ] P1 · Redirects herstellen: 404-doelen, ketens, oude pilates-blog-URL en oude sport-URL's naar de sportpagina's (lijst in het Shopify-logboek)
- [ ] P2 · Maatgids nalopen, [CHECK]'s oplossen, publiceren en linken vanaf de maatkeuze op de productpagina
- [ ] P2 · SEO-titels en meta-omschrijvingen voor Performance Gripsokken 2.0 Zwart/Wit en collectie Gripsokken overnemen uit het voorstel in het logboek
- [ ] P2 · Productdata aanvullen: producttype, SKU's en GTIN/EAN
- [ ] P3 · Alt-teksten productfoto's per foto beschrijvend maken
- [ ] P3 · u-vorm vervangen door je-vorm op zakelijk, FAQ en blogs; typfout "VETROUWD DOOR" herstellen

## Bronnen

- Shopify Admin API en ShopifyQL-analytics (HÏ Grip, 23-09-2026)
- Live site higrip.nl: curl-checks van redirects, titels, canonicals, hreflang en JSON-LD (23-09-2026)
- [Could Google's next core update arrive in September 2026? — Search Engine Watch](https://searchenginewatch.com/could-googles-next-core-update-arrive-in-september-2026/)
- [Google Search I/O 2026 updates — Google](https://blog.google/products-and-platforms/products/search/search-io-2026/)
- [Shopify native llms.txt, agents.md en agentic sitemap — Craftshift](https://craftshift.com/shopify-native-llms-txt-agentic-discovery-rollout/)
- [Van iDEAL naar Wero — Frankwatching](https://www.frankwatching.com/archive/2026/08/15/van-ideal-naar-wero/)

## Aantekeningen
- **Lars · 2026-09-25 09:26** — Besluit verzend/retour: verzendkosten €4,50, gratis verzending vanaf €35, binnen 1 werkdag verzonden, retour 30 dagen. Vastgelegd in [[Performance Grip Socks 2.0]] §1.
