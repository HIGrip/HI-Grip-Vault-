# HÏ Grip — Afgeronde acties

> Map: [[Waar staat wat]]

Archief van afgevinkte punten uit `ACTIEBACKLOG.md`. De routine verplaatst ze hier elke zondag.

---

## 18 oktober 2026

### [x] [regressie] Nieuwe /en/-homepage heeft 2× H1 en een onvertaalde hero-tekst (nieuw 28 sep 2026)
**Bevestigd:** 11 oktober 2026 door actiecontrole — https://www.higrip.nl/en/ op 11-10: precies 1 <h1> (geen duplicaat), tekst 'HÏ Grip Performance Grip Socks for Athletes' — al Engels.
**Waarom:** Naast de verwachte verborgen `<h1>HÏ GRIP</h1>` staat een tweede, zichtbare `<h1 class="sl-teaser__title">HÏ Grip Performance Gripsokken voor Sporters</h1>` — nog in het Nederlands, niet vertaald. Exact hetzelfde bugpatroon als de NL-homepage vóór 15 september (toen opgelost). De EN-title is bovendien nog steeds enkel "HÏ Grip" (al bekend, apart open punt hieronder).
**Waar:** `https://www.higrip.nl/en/`
**Wat:** De verborgen H1 naar een `<span>`/`<p>` wijzigen (zoals eerder op de NL-homepage) en de zichtbare hero-tekst naar het Engels vertalen.
**Gevonden op:** 28 september 2026 (regressiecheck)
**Stond op:** P1

### [x] [regressie] /collections/frontpage heeft geen meta description (nieuw 28 sep 2026)
**Bevestigd:** 11 oktober 2026 door Lars (via Claude) — /collections/frontpage geeft 404 en staat niet meer in de sitemap (crawl 11-10)
**Waarom:** 0 `<meta name="description">`-tags gevonden. Mogelijk dezelfde oorzaak als het al openstaande punt over `/collections/all` hieronder, maar een andere, nog niet eerder gemelde URL.
**Waar:** `/collections/frontpage`
**Wat:** Beschrijving toevoegen via Shopify admin → SEO-instellingen van de collectiepagina.
**Gevonden op:** 28 september 2026 (regressiecheck)
**Stond op:** P1

### [x] [regressie] Nieuwe `/en/`-sectie heeft een lege, keyword-loze title-tag (nieuw 21 sep 2026)
**Bevestigd:** 11 oktober 2026 door actiecontrole — https://www.higrip.nl/en/ op 11-10: <title> = 'HÏ Grip | Performance Grip Socks for Athletes'; meta description Engels met keyword ('Performance grip socks made for football, tennis, padel and rugby... Shipped within 1 business day').
**Waarom:** `sitemap.xml` bevat sinds deze week vier extra `/en/`-sub-sitemaps (products, pages, collections, blogs) die er bij de vorige check niet waren — een Engelse marktuitbreiding die niet in het projectgeheugen staat. `hreflang` (x-default/nl/en) staat correct op zowel NL- als EN-homepage en de canonical klopt, maar de EN-title is enkel `HÏ Grip` — exact hetzelfde probleem dat de NL-homepage vóór 15 september had.
**Waar:** `https://www.higrip.nl/en/`
**Wat:** Engelse title en meta description toevoegen, analoog aan de bestaande NL-teksten.
**Gevonden op:** 21 september 2026 (regressiecheck)
**Stond op:** P1

### [x] 11. Controleer of trackingscripts nog vuren na de Checkout Extensibility-deadline (nieuw 17 sep 2026, aangevuld 25 sep 2026, bijgewerkt 12 okt 2026)
**Update 12 okt 2026 (growth-radar):** Shopify's eigen deprecation-documentatie bevestigt dat apps sinds 1 oktober 2026 geen script tags meer kunnen aanmaken of bijwerken (`scriptTagCreate`/`scriptTagUpdate` falen); bestaande tags blijven draaien en kunnen nog gelezen/verwijderd worden tot de storefront-injectie zelf stopt op 1 maart 2027 (bevestigt de eerder genoteerde einddatum van 24 sep, nu met een tussenstap). Voor higrip.nl betekent dit: als Trustpilot of de Bundler-restanten (zie update 24 sep) hun script tag-configuratie via de API proberen te verversen, faalt dat voortaan stil. Check daarom nu ook of die apps al op theme-app-extensions/web-pixels draaien, niet alleen of ze nog vuren.
**Update 25 sep 2026 — begin hier:** In de live broncode staat de Google & YouTube-app-pixel (GA4 `G-MP0982HHKM` + Merchant Center `MC-8TZQW9T6Q7`, stuurt ook `purchase`) op `dataSharingState: optimized`. Sinds 13 jan 2026 mag Shopify in die stand de datadeling pauzeren als er dagen of weken geen signalen zijn. Dat kan de nul `purchase`-events verklaren. Stap 0: Instellingen → Klantgebeurtenissen → App-pixels → activity log van de Google-pixel bekijken (historie vanaf 3 juni 2026), dan Mode op **Always on** zetten. De tweede app-pixel (account `raqds3-tb`) staat ook op optimized: nagaan welke app dat is.
**Waarom:** Shopify's harde deadline voor niet-Plus winkels om te migreren naar Checkout Extensibility was 26 augustus 2026. Wie toen niet gemigreerd was, kreeg een automatische upgrade waarbij het complete "Additional Scripts"-veld werd leeggetrokken — Google Ads-tracking, Meta pixel en GTM-containers stoppen dan zonder zichtbare storefront-fout. Dit hangt direct samen met het al openstaande punt hieronder dat GA4 `keyEvents = 0` toont op elk kanaal: het kan zijn dat niet alleen de key-event-instelling ontbreekt, maar dat het onderliggende trackingscript zelf al drie weken dood is.
**Waar:** Shopify admin → Instellingen → Checkout (Additional Scripts-veld + eventuele checkout-tracking-apps)
**Wat:** Controleren of `hi-grip.myshopify.com` op een niet-Plus plan zit, of de migratie voor 26 augustus is afgerond, en of Meta pixel/Google Ads-tracking via een officiële app loopt in plaats van het oude scriptveld. Doe dit vóór je de GA4-key-event-actie hieronder als opgelost afvinkt.
**Effect:** Kan de verklaring zijn voor drie weken (of meer) ontbrekende conversiedata — blokkeert elke CRO-uitspraak zolang dit niet is uitgesloten.
**Inspanning:** 30 minuten controle
**Stond op:** P1

## 11 oktober 2026

### [x] ~~[regressie] Oude productpagina's kannibaliseren nog het hoofdkeyword~~ — opgelost, canonical URL wel gewijzigd (bijgewerkt 21 sep 2026)
**Wat er is gebeurd:** De productpagina-handle is sindsdien veranderd: het hoofdproduct heet nu `/products/performance-gripsokken` (was `/products/hi-grip-gripsokken-1`), en de twee oude URL's zijn mee omgenoemd naar `/products/performance-gripsokken-2-0-zwart` en `-wit`. Alle drie de eerder gemelde oude adressen (`hi-grip-gripsokken-1`, `performance-grip-socks-2-0-zwart`, `-wit`) geven nu automatisch een redirect naar hun nieuwe tegenhanger — geverifieerd met een `fetch`-test op 21 september 2026, canonical-tag op de live pagina klopt.
**Let op:** De canonical handle in je eigen documentatie (projectgeheugen, theme-editor preview-links, mobiel-testinstructies) verwijst nog overal naar het oude `hi-grip-gripsokken-1`. Die links werken dankzij de redirect nog wel, maar zijn niet meer accuraat.
**Gevonden op:** 15 september 2026 (regressiecheck), opgelost/herzien 21 september 2026 (SEO-technisch)
**Stond op:** P1

### [x] [regressie] GA4 key event voor `purchase` staat nog steeds uit
**Bevestigd:** 25 september 2026 door actiecontrole — GA4 Admin API (google_data.py keyevents): purchase is key event sinds 2025-02-03 (ONCE_PER_EVENT); 28 dagen t/m 24-09: 3 purchase-events, keyEvents 3.
**Waarom:** `keyEvents = 0` op elk kanaal, deze en vorige week. Blokkeert elke CRO-uitspraak (zie ook projectgeheugen, actie #1 uit de audit).
**Waar:** GA4-property 476032345 → Admin → Events
**Wat:** `purchase` markeren als key event.
**Gevonden op:** 15 september 2026 (regressiecheck)
**Stond op:** P1

### [x] ~~[regressie] Homepage heeft 2× H1~~ — opgelost (bevestigd 21 sep 2026)
**Wat er is gebeurd:** De homepage heeft nu precies één `<h1>` (de zichtbare hero-titel). De eerder gemelde verborgen `visually-hidden` H1 is niet meer aanwezig of niet meer als `<h1>` gerenderd.
**Gevonden op:** 15 september 2026 (regressiecheck), opgelost/bevestigd 21 september 2026 (regressiecheck)
**Stond op:** P1

### [x] ~~3. Meta title en description live zetten~~ — live (bevestigd 24 sep 2026)
**Wat er is gebeurd:** Staat live met iets andere tekst: title `Gripsokken | Maximale Grip voor Elke Sport | HÏ Grip`, description met "3000+ sporters" en "vanaf €35". Let op: die €35 moet kloppen met de verzenddrempel-actie uit `2026-09-23-seo-conversietest-run-1`.
**Oorspronkelijk:** Staat al klaar in het projectgeheugen maar is nog niet toegepast. Dit is gratis winst die al maanden wacht.
**Titel:** `Gripsokken | Anti-Slip Sportsokken voor Elke Sport | HÏ Grip`
**Beschrijving:** `Voorkom glijden in je schoen met HÏ Grip gripsokken. Voor padel, voetbal, rugby & fitness. ✓ 1500+ sporters ✓ Gratis verzending vanaf €30 ✓ Vandaag verzonden`
**Inspanning:** 15 minuten
**Stond op:** P1
