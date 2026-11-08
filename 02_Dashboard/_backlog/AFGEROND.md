# HÏ Grip — Afgeronde acties

> Map: [[Waar staat wat]]

Archief van afgevinkte punten uit `ACTIEBACKLOG.md`. De routine verplaatst ze hier elke zondag.

---

## 8 november 2026

### [x] 1. Toon de gratis-verzendingsdrempel op de productpagina (herzien 24 sep 2026)
**Bevestigd:** 3 november 2026 door actiecontrole — performance-gripsokken toont een tekstblok met verzendkosten 4,50 euro en gratis verzending vanaf 35 euro
**Update 2 okt 2026 (vault-review):** sinds 28-9 zijn de prijzen weer €14,95 / €41,95 / €64,95 (zie [[Feiten & Actuele Staat]]). Balktekst bij 1-pack wordt dus "Nog €20,05 tot gratis verzending"; de bedragen hieronder zijn achterhaald. Het punt blijft staan.
**Update 24 sep 2026:** Live prijzen en drempel zijn veranderd: 1-pack €13,49, verzendkosten €4,50, drempel volgens announcementbar €35 (FAQ zegt nog €30 — eerst gelijktrekken, zie P1-actie in vault-notitie `2026-09-23-seo-conversietest-run-1`). Omdat het 3-pack per paar nog maar €0,17 goedkoper is dan een 1-pack, is gratis verzending nu hét argument voor het 3-pack — dit punt weegt daardoor zwaarder. Balktekst bij 1-pack: "Nog €21,51 tot gratis verzending". Laat het bedrag uit één theme-setting komen, niet hardcoded.
**Waarom:** 48% van de Nederlandse winkelwagenverlating komt door onverwachte verzendkosten — het grootste enkele conversielek dat er is. Je 1-pack kost €13,49, je drempel ligt op €35. Elke 1-pack-koper loopt in die verrassing.
**Waar:** `snippets/product-information-content.liquid`, direct onder de prijs
**Wat:** Voortgangsbalk met "Nog €21,51 tot gratis verzending" die meerekent met de gekozen pack-variant. Bij 3-pack en 5-pack verandert hij in "✓ Gratis verzending".
**Effect:** Grootste verwachte conversiewinst van deze hele lijst. Duwt bovendien richting 3-pack.
**Update 12 okt 2026 (werkthema, [[2026-10-12-werkthema-vs-live]]):** deels klaar in het werkthema, niet live: balk in het winkelwagenvenster (`snippets/free-shipping-bar.liquid`, drempel als thema-instelling, standaard €35) en een vertrouwensregel op de 2.0-productpagina uit dezelfde drempel. Nog niet: de balk op de productpagina die per pack meerekent.
**Update 12 okt 2026 (verouderd-check):** de prijsupdates hierboven kloppen niet meer. Live staat de 1.0 op 1-pack €14,95 · 3-pack €35,95 · 5-pack €54,95 (Section Store bundle-block; 3- en 5-pack tonen al 'Gratis verzending'). De balktekst bij een 1-pack blijft 'Nog €20,05 tot gratis verzending'. Het argument 'het 3-pack is per paar maar €0,17 goedkoper' vervalt: het scheelt nu €2,97 per paar. De €30 in de FAQ staat niet meer live.
**Inspanning:** Half dagdeel
**Stond op:** P1

### [x] 4. Controleer je variant-ID's tegen de Merchant Center-eis van maart 2026 (herzien 16 sep 2026 — opgewaardeerd naar P1)
**Bevestigd:** 5 november 2026 door actiecontrole — alle 8 varianten (2x 1.0, 6x 2.0) hebben nu een gevulde barcode/EAN (bv. 6154419797731, 9110024809242), conform de Merchant Center-eis
**Waarom:** Producten met afwijkende attributen onder één ID riskeren verwerkingsproblemen en afkeuringen. Jij hebt zes varianten onder één product. Op NRF 2026 kondigde Google vier AI-shoppingfuncties aan (Universal Commerce Protocol, Native Checkout, Business Agent, Direct Offers) die allemaal leunen op dezelfde Merchant Center-feed — inclusief Universal Cart, dat producten laat toevoegen vanuit Search, Gemini, YouTube en Gmail. Een foutieve variant-ID kost dus niet meer alleen een Shopping-ad, maar ook zichtbaarheid in Google's AI Mode.
**Waar:** Shopify Merchant Center-feedinstellingen
**Wat:** Per variant een uniek, stabiel ID. Controleer of Shopify's feed dat correct doorgeeft.
**Extra controlepunt (toegevoegd 21 sep 2026):** Google verhoogt de minimale productafbeelding-eis naar 500×500px (universeel, nu al als waarschuwing zichtbaar, hard vanaf 31 januari 2027). Gecontroleerd op higrip.nl: hoofdproductfoto's zijn 1024×1024 en 1536×1024 — ruim boven de eis. Geen actie nodig, alleen meenemen als checkpunt zodra je nieuwe productfoto's upload (bijv. voor de skisokken).
**Extra controlepunt (toegevoegd 28 sep 2026):** Google's oude Content API for Shopping (voedt deze feed) geeft sinds 1 september 2026 al progressieve HTTP 410-fouten voor wie niet is overgezet naar de nieuwe Merchant API; volledige uitschakeling begin 2027. Shopify's native Google & YouTube-kanaal migreert gefaseerd vanzelf, maar product-ID's kunnen daarbij wijzigen — dezelfde app die volgens punt 11 ook op de riskante "Optimized"-pixelstand staat. Controleren: is de migratie voor `raqds3-tb` voltooid, en zijn product-ID's gewijzigd?
**Extra controlepunt (toegevoegd 30 sep 2026):** Universal Cart (NRF 2026-aankondiging) is geen concept meer: sinds 19 mei 2026 live in de VS, met AP2 als betaallaag (inmiddels overgedragen aan de FIDO Alliance). Uitbreiding naar de Gemini-app volgde deze zomer; Nederland/Europa staat nog niet op de rolluit-lijst. Geen actie nu, maar bevestigt dat dezelfde Merchant Center-feed straks ook de ingang voor Universal Cart wordt zodra dat naar Europa komt.
**Update 12 okt 2026 (verouderd-check):** 'zes varianten onder één product' klopt niet meer. De 1.0 heeft 2 maatvarianten (34-39 en 40-46). De 2.0 is gesplitst in twee producten (zwart en wit) met elk 3 maten (35-38, 39-42, 43-47). Packs zijn geen varianten maar een app-bundel. GTIN/EAN is bij alle varianten nog leeg.
**Extra controlepunt (toegevoegd 14 okt 2026):** Universal Cart/UCP (zie 30 sep) krijgt meer vorm voor Europa: het Verenigd Koninkrijk wordt genoemd als eerste Europese markt (na Canada en Australië), een DACH-uitrol is nog niet aangekondigd. Nexi Group en Google Cloud tekenden op 3 maart 2026 een MoU om agentic-commerce-infrastructuur (UCP/AP2-standaarden) in Europa op te bouwen — dit is infrastructuurwerk, nog geen productlancering. Nederland wordt nergens genoemd. Geen actie, blijft volgen.
**Extra controlepunt (toegevoegd 4 nov 2026):** Shopify's Fall '26 Edition (shopify.com/editions/fall2026, eind okt 2026) voegt "Shopify Catalog" toe als apart mechanisme naast de Merchant Center-feed: dit voedt de agentic storefronts (Google AI Mode, Gemini-app) en de "shop skill" van agents zoals ChatGPT/Claude. De pagina noemt geen VS-beperking, in tegenstelling tot de eerdere Agentic Storefronts (zie 23 sep 2026). Geschiktheidscheck en het nieuwe agent-kennisbestand staan als los punt 28 in de backlog; dit punt (Merchant Center/GTIN) blijft daarnaast nodig voor Google Shopping zelf.
**Update 19 okt 2026 (seo-conversietest, auditblok B):** concrete invulling klaar, niet live gezet. Voor de zes 2.0-varianten is een ondubbelzinnige GTIN-koppeling te maken uit de EAN-lijst in [[Performance Grip Socks 2.0]]: PGSZ201→9110024809242, PGSZ202→9110024809259, PGSZ203→9110024809266, PGSW201→9110024809211, PGSW202→9110024809228, PGSW203→9110024809235. Voor de 1.0-varianten (GS110, GS100) staat geen EAN in het bronbestand — blijft `[CHECK]`. Voorgestelde `productType` voor alle drie producten: "Sportsokken". Volledig mutatievoorstel (met `validate_graphql_codeblocks`-controle) in het Shopify-logboek `seo-routine-logboek`, RUN 5 — nog niet uitgevoerd, vereist een go van Lars.
**Inspanning:** 2 uur
**Stond op:** P1

### [x] 6. Schrijf de vraagpagina's antwoord-eerst, mét FAQPage-schema (herzien 22 sep 2026)
**Bevestigd:** 3 november 2026 door actiecontrole — pagina bevat een FAQPage JSON-LD blok met meerdere Question en acceptedAnswer paren, antwoorden beginnen direct met de definitie
**Update 29 sep 2026:** Google breidt AI Overviews sinds 28 augustus 2026 bevestigd automatisch uit tot de volle lengte voor vragen waar het systeem dat nuttig acht — de knop "Toon meer" vervalt dan en de vervolgvraagbox opent vanzelf, richting AI Mode in plaats van terug naar de gewone resultaten. Effect: blauwe links (dus ook een eventuele toekomstige positie van higrip.nl) komen bij die vragen nog verder onder de vouw. Versterkt de al bestaande reden voor dit punt — geciteerd worden in het antwoord weegt zwaarder naarmate er minder organische ruimte overblijft. Geen nieuw punt, alleen extra gewicht.
**Waarom:** 31% zoekt inmiddels via generatieve AI; LLM-verkeer converteert op 5,53% tegen 3,7% organisch. Vraagvormige long-tails komen in die antwoorden terecht — mits de conclusie bovenaan staat. **Terugdraaiing t.o.v. 15 sep:** toen is `FAQPage`-schema geschrapt omdat de AI Overviews-gids zei dat structured data "niet vereist" is voor AI-citaties — dat klopt nog steeds, maar onderzoek van maart 2026 (Universiteit van Tokio/Tsukuba) laat zien dat een schone kop-en-antwoordstructuur ~2,8× vaker geciteerd wordt door AI-antwoordmachines, en dat het specifieke "antwoordcapsule"-patroon een gemeten +17,3% citatiekans oplevert over zes engines. Niet vereist ≠ geen effect. Concurrent FitSockr heeft bovendien al een ongestructureerde blogpost live op exact de long-tail "wat zijn gripsokken" — reden om hier niet halfslachtig in te zitten.
**Welke:** "Waarom glijdt mijn voet in mijn padelschoen?" · "Wat zijn gripsokken?" · "Tapedesign alternatief"
**Format:** Direct onder elke vraag-H2 een zelfstandige alinea van 40-60 woorden die de vraag volledig beantwoordt, zonder link of opmaak erin. Onderbouwing en eventuele link komen in de alinea daarna. `FAQPage` JSON-LD eronder — niet voor rich results (die bestaan niet meer sinds mei 2026), maar als machineleesbare, vooraf afgebakende vraag-antwoordparen voor AI-crawlers.
**Inspanning:** 1 dag voor alle drie
**Stond op:** P2

### [x] 17. Titel/meta van de oude productpagina-URL optimaliseren of nieuwe canonical laten indexeren (nieuw 25 sep 2026)
**Bevestigd:** 3 november 2026 door actiecontrole — hi-grip-gripsokken-1 redirect 301 naar performance-gripsokken met titel, meta description en zelfreferentiele canonical
**Waarom:** Search Console-meting (routine "Search Console & rankings", eerste run): `/products/hi-grip-gripsokken-1` trekt met 310 vertoningen in 7 dagen (1.003 in 28 dagen) verreweg de meeste vertoningen van alle pagina's op higrip.nl, maar met een CTR van 0,32% — ruim onder elke andere pagina. De nieuwe canonieke handle `performance-gripsokken` (zie feitenbestand) trekt via de 2.0-varianten veel minder vertoningen (65–162), wat erop wijst dat Google het rankingsignaal nog niet volledig naar de nieuwe URL heeft overgezet ondanks de redirect (opgelost 21 sep, zie regressie-actie hierboven).
**Waar:** Search Console → URL-inspectie/indexering, en de titel/meta die Google nu toont voor de oude URL
**Wat:** Nagaan of de oude URL opnieuw geïndexeerd moet worden gemeld, en of de getoonde titel/meta in de SERP nog van de oude pagina komt.
**Gevonden op:** 25 september 2026 (Search Console & rankings)
**Stond op:** P2

### [x] 25. [search-console] Titel/meta van `/en/pages/gripsokken-voor-voetbal` herschrijven (nieuw 14 okt 2026)
**Bevestigd:** 6 november 2026 door actiecontrole — Titel en meta description zijn specifiek Engels en op de zoekterm gericht, hreflang nl/en/x-default correct
**Waarom:** Search Console-meting (routine "Search Console & rankings", vierde run): de pagina rankt goed — positie 7,6 (7 dagen, 65 vertoningen) resp. 7,3 (28 dagen, 107 vertoningen) — maar trok in geen van beide periodes één klik (0% CTR). Zelfde patroon als bij de al bekende punten 19, 21 en 22: een goede positie zonder klikken wijst op een titel/omschrijving die niet aansluit bij de zoekintentie.
**Waar:** `/en/pages/gripsokken-voor-voetbal` — titel en meta description via Shopify admin
**Wat:** SERP-titel en meta description herschrijven voor de Engelse zoekintentie (o.a. "football grip socks", "grip socks football"); nagaan welke zoektermen de vertoningen opleveren voordat je herschrijft.
**Gevonden op:** 14 oktober 2026 (Search Console & rankings)
**Stond op:** P2

## 1 november 2026

### [x] [regressie] `/pages/gripsokken-voor-rugby` heeft twee H1-tags (nieuw 19 okt 2026)
**Bevestigd:** 27 oktober 2026 door actiecontrole — precies 1 h1 meer (class 'spf-hero__h1'), het losse tekstblok-h1 bovenaan is weg; https://www.higrip.nl/pages/gripsokken-voor-rugby
**Waarom:** Precies één `<h1>` per pagina is een vaste regel in de regressiecheck en is al eerder geschonden (de EN-homepage, 28 sep 2026, inmiddels opgelost). De nieuwe sportpagina `/pages/gripsokken-voor-rugby` (deze week voor het eerst in de sitemap) heeft nu zelf twee `<h1>`-tags: een los tekstblok bovenaan met `<h1>Gripsokken voor rugby</h1>` (de omringende div-klasse suggereert zelf "h2") plus de eigen `<h1 class="sl-hero__title">` van de hero-sectie eronder. Op de drie bestaande sportpagina's (padel, tennis, voetbal) ontbreekt dit bovenste blok of rendert het op een lager niveau: daar is alleen de hero-h1 aanwezig.
**Waar:** `/pages/gripsokken-voor-rugby` — het tekstblok direct boven de hero-sectie
**Wat:** Het heading-niveau van dat tekstblok van `h1` naar `h2` zetten (of het blok verwijderen als het een duplicaat is van de hero-titel), zodat net als bij de andere drie sportpagina's precies één `<h1>` overblijft.
**Gevonden op:** 19 oktober 2026 (regressiecheck)
**Stond op:** P1

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
