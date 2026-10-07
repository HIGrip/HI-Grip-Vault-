window.HI_RESEARCH = {
 "backlog": [
  {
   "afgevinkt": false,
   "beheer": null,
   "besluit": false,
   "body_md": "**Waarom:** Naast de verwachte verborgen `<h1>HÏ GRIP</h1>` staat een tweede, zichtbare `<h1 class=\"sl-teaser__title\">HÏ Grip Performance Gripsokken voor Sporters</h1>` — nog in het Nederlands, niet vertaald. Exact hetzelfde bugpatroon als de NL-homepage vóór 15 september (toen opgelost). De EN-title is bovendien nog steeds enkel \"HÏ Grip\" (al bekend, apart open punt hieronder).\n**Waar:** `https://www.higrip.nl/en/`\n**Wat:** De verborgen H1 naar een `<span>`/`<p>` wijzigen (zoals eerder op de NL-homepage) en de zichtbare hero-tekst naar het Engels vertalen.\n**Gevonden op:** 28 september 2026 (regressiecheck)",
   "controle": null,
   "id": "backlog#2c3eb956",
   "kop": "[regressie] Nieuwe /en/-homepage heeft 2× H1 en een onvertaalde hero-tekst (nieuw 28 sep 2026)",
   "prioriteit": "P1",
   "prioriteit_effectief": "P1",
   "uitvoerbaar": null,
   "velden": {
    "Gevonden op": "28 september 2026 (regressiecheck)",
    "Waar": "`https://www.higrip.nl/en/`",
    "Waarom": "Naast de verwachte verborgen `<h1>HÏ GRIP</h1>` staat een tweede, zichtbare `<h1 class=\"sl-teaser__title\">HÏ Grip Performance Gripsokken voor Sporters</h1>` — nog in het Nederlands, niet vertaald. Exact hetzelfde bugpatroon als de NL-homepage vóór 15 september (toen opgelost). De EN-title is bovendien nog steeds enkel \"HÏ Grip\" (al bekend, apart open punt hieronder).",
    "Wat": "De verborgen H1 naar een `<span>`/`<p>` wijzigen (zoals eerder op de NL-homepage) en de zichtbare hero-tekst naar het Engels vertalen."
   }
  },
  {
   "afgevinkt": false,
   "beheer": null,
   "besluit": false,
   "body_md": "**Waarom:** Deze week verschenen drie nieuwe pagina's (`/pages/verzendbeleid`, `/pages/retourbeleid`, `/pages/terugbetalingsbeleid`) die het besluit van Lars van 25 sep lijken te verwerken, maar dat nog niet volledig doen: `/pages/verzendbeleid` noemt nergens de verzendkosten (€4,50) of de gratis-verzenddrempel (€35); `/pages/retourbeleid` heeft de termijn wel naar 30 dagen gecorrigeerd, maar rekent nog steeds 25% herbevoorradingskosten en eist het product \"ongeopend\" terug — in strijd met de geest van het besluit en met het juridische risico dat al in de Compliance To-Do Lijst §4.2 staat. Tegelijk bestaan `/policies/refund-policy` (14 dagen, 25%), `/policies/shipping-policy` (\"vóór 16:00\") en `/policies/terms-of-service` (€4,25) gewoon door met de oude waarden: er zijn nu twee parallelle bronnen voor dezelfde informatie. De vervallen homepage-belofte \"vóór 22:00 vandaag verzonden\" staat via een gedeelde metafield ook op meerdere van deze pagina's.\n**Waar:** `/pages/verzendbeleid`, `/pages/retourbeleid`, `/pages/terugbetalingsbeleid`, `/policies/refund-policy`, `/policies/shipping-policy`, `/policies/terms-of-service`\n**Wat:** Eén bron van waarheid kiezen (waarschijnlijk de nieuwe `/pages/*`-pagina's), de oude `/policies/*`-pagina's laten doorverwijzen of bijwerken, de 25%-herbevoorradingskosten en de \"ongeopend\"-eis uit het retourbeleid halen, verzendkosten/-drempel op `/pages/verzendbeleid` zetten, en de 22:00-metatekst overal vervangen.\n**Gevonden op:** 28 september 2026 (regressiecheck)",
   "controle": null,
   "id": "backlog#246c61d9",
   "kop": "[regressie] Nieuwe verzend-/retour-/betalingspagina's zijn onvolledig en spreken de oude beleidspagina's tegen (nieuw 28 sep 2026)",
   "prioriteit": "P1",
   "prioriteit_effectief": "P1",
   "uitvoerbaar": null,
   "velden": {
    "Gevonden op": "28 september 2026 (regressiecheck)",
    "Waar": "`/pages/verzendbeleid`, `/pages/retourbeleid`, `/pages/terugbetalingsbeleid`, `/policies/refund-policy`, `/policies/shipping-policy`, `/policies/terms-of-service`",
    "Waarom": "Deze week verschenen drie nieuwe pagina's (`/pages/verzendbeleid`, `/pages/retourbeleid`, `/pages/terugbetalingsbeleid`) die het besluit van Lars van 25 sep lijken te verwerken, maar dat nog niet volledig doen: `/pages/verzendbeleid` noemt nergens de verzendkosten (€4,50) of de gratis-verzenddrempel (€35); `/pages/retourbeleid` heeft de termijn wel naar 30 dagen gecorrigeerd, maar rekent nog steeds 25% herbevoorradingskosten en eist het product \"ongeopend\" terug — in strijd met de geest van het besluit en met het juridische risico dat al in de Compliance To-Do Lijst §4.2 staat. Tegelijk bestaan `/policies/refund-policy` (14 dagen, 25%), `/policies/shipping-policy` (\"vóór 16:00\") en `/policies/terms-of-service` (€4,25) gewoon door met de oude waarden: er zijn nu twee parallelle bronnen voor dezelfde informatie. De vervallen homepage-belofte \"vóór 22:00 vandaag verzonden\" staat via een gedeelde metafield ook op meerdere van deze pagina's.",
    "Wat": "Eén bron van waarheid kiezen (waarschijnlijk de nieuwe `/pages/*`-pagina's), de oude `/policies/*`-pagina's laten doorverwijzen of bijwerken, de 25%-herbevoorradingskosten en de \"ongeopend\"-eis uit het retourbeleid halen, verzendkosten/-drempel op `/pages/verzendbeleid` zetten, en de 22:00-metatekst overal vervangen."
   }
  },
  {
   "afgevinkt": false,
   "beheer": null,
   "besluit": false,
   "body_md": "**Waarom:** 0 `<meta name=\"description\">`-tags gevonden. Mogelijk dezelfde oorzaak als het al openstaande punt over `/collections/all` hieronder, maar een andere, nog niet eerder gemelde URL.\n**Waar:** `/collections/frontpage`\n**Wat:** Beschrijving toevoegen via Shopify admin → SEO-instellingen van de collectiepagina.\n**Gevonden op:** 28 september 2026 (regressiecheck)",
   "controle": null,
   "id": "backlog#f74f148a",
   "kop": "[regressie] /collections/frontpage heeft geen meta description (nieuw 28 sep 2026)",
   "prioriteit": "P1",
   "prioriteit_effectief": "P1",
   "uitvoerbaar": null,
   "velden": {
    "Gevonden op": "28 september 2026 (regressiecheck)",
    "Waar": "`/collections/frontpage`",
    "Waarom": "0 `<meta name=\"description\">`-tags gevonden. Mogelijk dezelfde oorzaak als het al openstaande punt over `/collections/all` hieronder, maar een andere, nog niet eerder gemelde URL.",
    "Wat": "Beschrijving toevoegen via Shopify admin → SEO-instellingen van de collectiepagina."
   }
  },
  {
   "afgevinkt": true,
   "beheer": null,
   "besluit": false,
   "body_md": "**Wat er is gebeurd:** De productpagina-handle is sindsdien veranderd: het hoofdproduct heet nu `/products/performance-gripsokken` (was `/products/hi-grip-gripsokken-1`), en de twee oude URL's zijn mee omgenoemd naar `/products/performance-gripsokken-2-0-zwart` en `-wit`. Alle drie de eerder gemelde oude adressen (`hi-grip-gripsokken-1`, `performance-grip-socks-2-0-zwart`, `-wit`) geven nu automatisch een redirect naar hun nieuwe tegenhanger — geverifieerd met een `fetch`-test op 21 september 2026, canonical-tag op de live pagina klopt.\n**Let op:** De canonical handle in je eigen documentatie (projectgeheugen, theme-editor preview-links, mobiel-testinstructies) verwijst nog overal naar het oude `hi-grip-gripsokken-1`. Die links werken dankzij de redirect nog wel, maar zijn niet meer accuraat.\n**Gevonden op:** 15 september 2026 (regressiecheck), opgelost/herzien 21 september 2026 (SEO-technisch)",
   "controle": null,
   "id": "backlog#3621bd14",
   "kop": "~~[regressie] Oude productpagina's kannibaliseren nog het hoofdkeyword~~ — opgelost, canonical URL wel gewijzigd (bijgewerkt 21 sep 2026)",
   "prioriteit": "P1",
   "prioriteit_effectief": "P1",
   "uitvoerbaar": null,
   "velden": {
    "Gevonden op": "15 september 2026 (regressiecheck), opgelost/herzien 21 september 2026 (SEO-technisch)"
   }
  },
  {
   "afgevinkt": true,
   "beheer": null,
   "besluit": false,
   "body_md": "**Bevestigd:** 25 september 2026 door actiecontrole — GA4 Admin API (google_data.py keyevents): purchase is key event sinds 2025-02-03 (ONCE_PER_EVENT); 28 dagen t/m 24-09: 3 purchase-events, keyEvents 3.\n**Waarom:** `keyEvents = 0` op elk kanaal, deze en vorige week. Blokkeert elke CRO-uitspraak (zie ook projectgeheugen, actie #1 uit de audit).\n**Waar:** GA4-property 476032345 → Admin → Events\n**Wat:** `purchase` markeren als key event.\n**Gevonden op:** 15 september 2026 (regressiecheck)",
   "controle": {
    "bewijs": "GA4 Admin API (google_data.py keyevents): purchase is key event sinds 2025-02-03 (ONCE_PER_EVENT); 28 dagen t/m 24-09: 3 purchase-events, keyEvents 3.",
    "controle": "Staat purchase als key event in GA4-property 476032345?",
    "gecontroleerd": "2026-09-25",
    "methode": "ga4",
    "sinds": "2026-09-25",
    "uitkomst": "gedaan"
   },
   "id": "backlog#9c0719ed",
   "kop": "[regressie] GA4 key event voor `purchase` staat nog steeds uit",
   "prioriteit": "P1",
   "prioriteit_effectief": "P1",
   "uitvoerbaar": null,
   "velden": {
    "Gevonden op": "15 september 2026 (regressiecheck)",
    "Waar": "GA4-property 476032345 → Admin → Events",
    "Waarom": "`keyEvents = 0` op elk kanaal, deze en vorige week. Blokkeert elke CRO-uitspraak (zie ook projectgeheugen, actie #1 uit de audit).",
    "Wat": "`purchase` markeren als key event."
   }
  },
  {
   "afgevinkt": false,
   "beheer": null,
   "besluit": false,
   "body_md": "**Waarom:** Sinds 15 september is een deel van `hi-seo-schema.liquid` kennelijk live gezet: `Organization` en `BreadcrumbList` staan nu overal waar verwacht (vorige week ontbrak `BreadcrumbList` nog op 6 van de 8 URL's). Maar `WebSite` staat alleen op de homepage en de padel-pagina — niet op de productpagina, beide collectiepagina's of de blogpagina's. `ItemList` ontbreekt nog op beide collectiepagina's. `FAQPage` ontbreekt nog op de productpagina (de herschreven `product-schema.liquid` lijkt niet meegenomen). `/pages/gripsokken-voetbal` geeft nog steeds 404.\n**Waar:** `C:\\Users\\Test\\higrip-theme` → Shopify test-thema 194761425223\n**Wat:** Nagaan welk bestand wél en welk niet is gepusht (vermoedelijk alleen een deel van `hi-seo-schema.liquid`), dan de rest alsnog pushen — inclusief `product-schema.liquid` (FAQPage) en `templates/page.gripsokken-voetbal.json`.\n**Gevonden op:** 15 september 2026 (regressiecheck), bijgewerkt 21 september 2026 (regressiecheck)",
   "controle": {
    "bewijs": "/products/performance-gripsokken JSON-LD: alleen Product, ProductGroup, BreadcrumbList, Organization; /collections/gripsokken en /collections/all: alleen BreadcrumbList/Organization, geen ItemList.",
    "controle": "Staan WebSite, ItemList en FAQPage op product- en collectiepagina's?",
    "gecontroleerd": "2026-09-26",
    "methode": "site",
    "uitkomst": "open"
   },
   "id": "backlog#fac26f6c",
   "kop": "[regressie] SEO-schema-thema-wijzigingen gedeeltelijk gepusht, nog niet compleet (bijgewerkt 21 sep 2026)",
   "prioriteit": "P1",
   "prioriteit_effectief": "P1",
   "uitvoerbaar": {
    "beoordeeld": "2026-09-26",
    "claude": "deels",
    "wat_claude_doet": "Vergelijkt live schema met het testthema, zet ontbrekende WebSite/ItemList/FAQPage-snippets en de voetbaltemplate klaar in het testthema en levert een preview-link.",
    "wat_jij_doet": "Testthema controleren en live publiceren."
   },
   "velden": {
    "Gevonden op": "15 september 2026 (regressiecheck), bijgewerkt 21 september 2026 (regressiecheck)",
    "Waar": "`C:\\Users\\Test\\higrip-theme` → Shopify test-thema 194761425223",
    "Waarom": "Sinds 15 september is een deel van `hi-seo-schema.liquid` kennelijk live gezet: `Organization` en `BreadcrumbList` staan nu overal waar verwacht (vorige week ontbrak `BreadcrumbList` nog op 6 van de 8 URL's). Maar `WebSite` staat alleen op de homepage en de padel-pagina — niet op de productpagina, beide collectiepagina's of de blogpagina's. `ItemList` ontbreekt nog op beide collectiepagina's. `FAQPage` ontbreekt nog op de productpagina (de herschreven `product-schema.liquid` lijkt niet meegenomen). `/pages/gripsokken-voetbal` geeft nog steeds 404.",
    "Wat": "Nagaan welk bestand wél en welk niet is gepusht (vermoedelijk alleen een deel van `hi-seo-schema.liquid`), dan de rest alsnog pushen — inclusief `product-schema.liquid` (FAQPage) en `templates/page.gripsokken-voetbal.json`."
   }
  },
  {
   "afgevinkt": true,
   "beheer": null,
   "besluit": false,
   "body_md": "**Wat er is gebeurd:** De homepage heeft nu precies één `<h1>` (de zichtbare hero-titel). De eerder gemelde verborgen `visually-hidden` H1 is niet meer aanwezig of niet meer als `<h1>` gerenderd.\n**Gevonden op:** 15 september 2026 (regressiecheck), opgelost/bevestigd 21 september 2026 (regressiecheck)",
   "controle": null,
   "id": "backlog#6ad8d65d",
   "kop": "~~[regressie] Homepage heeft 2× H1~~ — opgelost (bevestigd 21 sep 2026)",
   "prioriteit": "P1",
   "prioriteit_effectief": "P1",
   "uitvoerbaar": null,
   "velden": {
    "Gevonden op": "15 september 2026 (regressiecheck), opgelost/bevestigd 21 september 2026 (regressiecheck)"
   }
  },
  {
   "afgevinkt": false,
   "beheer": null,
   "besluit": false,
   "body_md": "**Waarom:** `sitemap.xml` bevat sinds deze week vier extra `/en/`-sub-sitemaps (products, pages, collections, blogs) die er bij de vorige check niet waren — een Engelse marktuitbreiding die niet in het projectgeheugen staat. `hreflang` (x-default/nl/en) staat correct op zowel NL- als EN-homepage en de canonical klopt, maar de EN-title is enkel `HÏ Grip` — exact hetzelfde probleem dat de NL-homepage vóór 15 september had.\n**Waar:** `https://www.higrip.nl/en/`\n**Wat:** Engelse title en meta description toevoegen, analoog aan de bestaande NL-teksten.\n**Gevonden op:** 21 september 2026 (regressiecheck)",
   "controle": {
    "bewijs": "https://www.higrip.nl/en/: <title> = 'HÏ Grip' (generiek, geen keyword), meta description generiek Engels.",
    "controle": "Heeft /en/ een Engelse keyword-title en meta description?",
    "gecontroleerd": "2026-09-26",
    "methode": "site",
    "uitkomst": "open"
   },
   "id": "backlog#bafff35d",
   "kop": "[regressie] Nieuwe `/en/`-sectie heeft een lege, keyword-loze title-tag (nieuw 21 sep 2026)",
   "prioriteit": "P1",
   "prioriteit_effectief": "P1",
   "uitvoerbaar": {
    "beoordeeld": "2026-09-26",
    "claude": "ja",
    "wat_claude_doet": "Schrijft Engelse title en meta description voor de /en/-pagina's in een conceptbestand in _uitvoer.",
    "wat_jij_doet": "Teksten in Translate & Adapt plakken."
   },
   "velden": {
    "Gevonden op": "21 september 2026 (regressiecheck)",
    "Waar": "`https://www.higrip.nl/en/`",
    "Waarom": "`sitemap.xml` bevat sinds deze week vier extra `/en/`-sub-sitemaps (products, pages, collections, blogs) die er bij de vorige check niet waren — een Engelse marktuitbreiding die niet in het projectgeheugen staat. `hreflang` (x-default/nl/en) staat correct op zowel NL- als EN-homepage en de canonical klopt, maar de EN-title is enkel `HÏ Grip` — exact hetzelfde probleem dat de NL-homepage vóór 15 september had.",
    "Wat": "Engelse title en meta description toevoegen, analoog aan de bestaande NL-teksten."
   }
  },
  {
   "afgevinkt": false,
   "beheer": null,
   "besluit": false,
   "body_md": "**Waarom:** Lege `<meta name=\"description\">` — al genoteerd in de audit van 15 september, nog niet opgelost.\n**Waar:** `/collections/all`\n**Wat:** Beschrijving toevoegen via Shopify admin → SEO-instellingen van de collectiepagina.\n**Gevonden op:** 15 september 2026 (regressiecheck)",
   "controle": {
    "bewijs": "https://www.higrip.nl/collections/all: geen <meta name=\"description\">, <title> = 'Producten – HÏ Grip'.",
    "controle": "Heeft /collections/all een meta description?",
    "gecontroleerd": "2026-09-26",
    "methode": "site",
    "uitkomst": "open"
   },
   "id": "backlog#49691d90",
   "kop": "[regressie] `/collections/all` heeft geen meta description",
   "prioriteit": "P1",
   "prioriteit_effectief": "P1",
   "uitvoerbaar": {
    "beoordeeld": "2026-09-26",
    "claude": "ja",
    "wat_claude_doet": "Schrijft een meta description (max 155 tekens) voor /collections/all in _uitvoer.",
    "wat_jij_doet": "Tekst in Shopify admin bij de collectie plakken en opslaan."
   },
   "velden": {
    "Gevonden op": "15 september 2026 (regressiecheck)",
    "Waar": "`/collections/all`",
    "Waarom": "Lege `<meta name=\"description\">` — al genoteerd in de audit van 15 september, nog niet opgelost.",
    "Wat": "Beschrijving toevoegen via Shopify admin → SEO-instellingen van de collectiepagina."
   }
  },
  {
   "afgevinkt": false,
   "beheer": null,
   "besluit": false,
   "body_md": "**Update 2 okt 2026 (vault-review):** sinds 28-9 zijn de prijzen weer €14,95 / €41,95 / €64,95 (zie [[Feiten & Actuele Staat]]). Balktekst bij 1-pack wordt dus \"Nog €20,05 tot gratis verzending\"; de bedragen hieronder zijn achterhaald. Het punt blijft staan.\n**Update 24 sep 2026:** Live prijzen en drempel zijn veranderd: 1-pack €13,49, verzendkosten €4,50, drempel volgens announcementbar €35 (FAQ zegt nog €30 — eerst gelijktrekken, zie P1-actie in vault-notitie `2026-09-23-seo-conversietest-run-1`). Omdat het 3-pack per paar nog maar €0,17 goedkoper is dan een 1-pack, is gratis verzending nu hét argument voor het 3-pack — dit punt weegt daardoor zwaarder. Balktekst bij 1-pack: \"Nog €21,51 tot gratis verzending\". Laat het bedrag uit één theme-setting komen, niet hardcoded.\n**Waarom:** 48% van de Nederlandse winkelwagenverlating komt door onverwachte verzendkosten — het grootste enkele conversielek dat er is. Je 1-pack kost €13,49, je drempel ligt op €35. Elke 1-pack-koper loopt in die verrassing.\n**Waar:** `snippets/product-information-content.liquid`, direct onder de prijs\n**Wat:** Voortgangsbalk met \"Nog €21,51 tot gratis verzending\" die meerekent met de gekozen pack-variant. Bij 3-pack en 5-pack verandert hij in \"✓ Gratis verzending\".\n**Effect:** Grootste verwachte conversiewinst van deze hele lijst. Duwt bovendien richting 3-pack.\n**Inspanning:** Half dagdeel",
   "controle": {
    "bewijs": "/products/performance-gripsokken: geen 'tot gratis verzending' of voortgangsbalk in de HTML.",
    "controle": "Staat er een gratis-verzendingsbalk onder de prijs op de productpagina?",
    "gecontroleerd": "2026-09-26",
    "methode": "site",
    "uitkomst": "open"
   },
   "id": "backlog#6dd6caf8",
   "kop": "1. Toon de gratis-verzendingsdrempel op de productpagina (herzien 24 sep 2026)",
   "prioriteit": "P1",
   "prioriteit_effectief": "P1",
   "uitvoerbaar": {
    "beoordeeld": "2026-09-26",
    "claude": "ja",
    "wat_claude_doet": "Bouwt de verzenddrempel-balk (Liquid + CSS + vanilla JS, rekent mee per pack) in het testthema.",
    "wat_jij_doet": "Testthema bekijken en live publiceren."
   },
   "velden": {
    "Waar": "`snippets/product-information-content.liquid`, direct onder de prijs",
    "Waarom": "48% van de Nederlandse winkelwagenverlating komt door onverwachte verzendkosten — het grootste enkele conversielek dat er is. Je 1-pack kost €13,49, je drempel ligt op €35. Elke 1-pack-koper loopt in die verrassing.",
    "Wat": "Voortgangsbalk met \"Nog €21,51 tot gratis verzending\" die meerekent met de gekozen pack-variant. Bij 3-pack en 5-pack verandert hij in \"✓ Gratis verzending\"."
   }
  },
  {
   "afgevinkt": false,
   "beheer": null,
   "besluit": false,
   "body_md": "**Waarom:** Sterren in de SERP verhogen de doorklikratio zichtbaar. Maar de volgorde was omgekeerd: `snippets/product-schema.liquid` bevatte al een `aggregateRating` met een hardcoded 4,5 uit 7 beoordelingen, terwijl er geen enkele zichtbare review op de productpagina staat. Dat is precies de overtreding die hieronder gewaarschuwd werd. Bij de audit van 15 september is die node **verwijderd**; het bestand rendeerde nog niet op de remote, dus het is nooit live geweest.\n**Waar:** eerst Shopify admin (reviewapp), daarna pas `snippets/product-schema.liquid`\n**Wat:** 1) Koppel een reviewapp die echte klantbeoordelingen verzamelt. 2) Zorg dat de beoordelingen zichtbaar op de productpagina staan. 3) Zet dan pas de `aggregateRating` terug, gevoed uit de metafields van die app — nooit met vaste waarden.\n**Let op:** Zolang stap 1 en 2 niet af zijn, is dit punt geblokkeerd. Niet vooruitlopen.\n**Effect:** Hogere CTR op je belangrijkste zoekterm zonder dat je positie hoeft te stijgen.\n**Inspanning:** Reviewapp een half dagdeel, schema daarna 1 uur",
   "controle": {
    "bewijs": "/products/performance-gripsokken: geen aggregateRating in schema, geen reviewapp-widget; wel statische testimonials '4.5'.",
    "controle": "Is er een reviewapp met zichtbare reviews en daarna aggregateRating?",
    "gecontroleerd": "2026-09-26",
    "methode": "site",
    "uitkomst": "open"
   },
   "id": "backlog#10ef70ca",
   "kop": "2. Reviewapp koppelen — pas dáárna AggregateRating (herzien 15 sep 2026)",
   "prioriteit": "P1",
   "prioriteit_effectief": "P1",
   "uitvoerbaar": {
    "beoordeeld": "2026-09-26",
    "claude": "deels",
    "wat_claude_doet": "Vergelijkt reviewapps (Judge.me, Loox, Trustpilot) en zet de aggregateRating-code op app-metafields klaar in het testthema.",
    "wat_jij_doet": "Reviewapp kiezen, installeren en koppelen; daarna schema live zetten."
   },
   "velden": {
    "Waar": "eerst Shopify admin (reviewapp), daarna pas `snippets/product-schema.liquid`",
    "Waarom": "Sterren in de SERP verhogen de doorklikratio zichtbaar. Maar de volgorde was omgekeerd: `snippets/product-schema.liquid` bevatte al een `aggregateRating` met een hardcoded 4,5 uit 7 beoordelingen, terwijl er geen enkele zichtbare review op de productpagina staat. Dat is precies de overtreding die hieronder gewaarschuwd werd. Bij de audit van 15 september is die node **verwijderd**; het bestand rendeerde nog niet op de remote, dus het is nooit live geweest.",
    "Wat": "1) Koppel een reviewapp die echte klantbeoordelingen verzamelt. 2) Zorg dat de beoordelingen zichtbaar op de productpagina staan. 3) Zet dan pas de `aggregateRating` terug, gevoed uit de metafields van die app — nooit met vaste waarden."
   }
  },
  {
   "afgevinkt": true,
   "beheer": null,
   "besluit": false,
   "body_md": "**Wat er is gebeurd:** Staat live met iets andere tekst: title `Gripsokken | Maximale Grip voor Elke Sport | HÏ Grip`, description met \"3000+ sporters\" en \"vanaf €35\". Let op: die €35 moet kloppen met de verzenddrempel-actie uit `2026-09-23-seo-conversietest-run-1`.\n**Oorspronkelijk:** Staat al klaar in het projectgeheugen maar is nog niet toegepast. Dit is gratis winst die al maanden wacht.\n**Titel:** `Gripsokken | Anti-Slip Sportsokken voor Elke Sport | HÏ Grip`\n**Beschrijving:** `Voorkom glijden in je schoen met HÏ Grip gripsokken. Voor padel, voetbal, rugby & fitness. ✓ 1500+ sporters ✓ Gratis verzending vanaf €30 ✓ Vandaag verzonden`\n**Inspanning:** 15 minuten",
   "controle": null,
   "id": "backlog#341f8d60",
   "kop": "~~3. Meta title en description live zetten~~ — live (bevestigd 24 sep 2026)",
   "prioriteit": "P1",
   "prioriteit_effectief": "P1",
   "uitvoerbaar": null,
   "velden": {}
  },
  {
   "afgevinkt": false,
   "beheer": null,
   "besluit": false,
   "body_md": "**Update 25 sep 2026 — begin hier:** In de live broncode staat de Google & YouTube-app-pixel (GA4 `G-MP0982HHKM` + Merchant Center `MC-8TZQW9T6Q7`, stuurt ook `purchase`) op `dataSharingState: optimized`. Sinds 13 jan 2026 mag Shopify in die stand de datadeling pauzeren als er dagen of weken geen signalen zijn. Dat kan de nul `purchase`-events verklaren. Stap 0: Instellingen → Klantgebeurtenissen → App-pixels → activity log van de Google-pixel bekijken (historie vanaf 3 juni 2026), dan Mode op **Always on** zetten. De tweede app-pixel (account `raqds3-tb`) staat ook op optimized: nagaan welke app dat is.\n**Waarom:** Shopify's harde deadline voor niet-Plus winkels om te migreren naar Checkout Extensibility was 26 augustus 2026. Wie toen niet gemigreerd was, kreeg een automatische upgrade waarbij het complete \"Additional Scripts\"-veld werd leeggetrokken — Google Ads-tracking, Meta pixel en GTM-containers stoppen dan zonder zichtbare storefront-fout. Dit hangt direct samen met het al openstaande punt hieronder dat GA4 `keyEvents = 0` toont op elk kanaal: het kan zijn dat niet alleen de key-event-instelling ontbreekt, maar dat het onderliggende trackingscript zelf al drie weken dood is.\n**Waar:** Shopify admin → Instellingen → Checkout (Additional Scripts-veld + eventuele checkout-tracking-apps)\n**Wat:** Controleren of `hi-grip.myshopify.com` op een niet-Plus plan zit, of de migratie voor 26 augustus is afgerond, en of Meta pixel/Google Ads-tracking via een officiële app loopt in plaats van het oude scriptveld. Doe dit vóór je de GA4-key-event-actie hieronder als opgelost afvinkt.\n**Effect:** Kan de verklaring zijn voor drie weken (of meer) ontbrekende conversiedata — blokkeert elke CRO-uitspraak zolang dit niet is uitgesloten.\n**Inspanning:** 30 minuten controle",
   "controle": {
    "bewijs": "Shopify-plan nog Basic (niet-Plus); purchase komt binnen in GA4 (3 in 28 dagen); Additional Scripts en Meta pixel/Google Ads-app niet te controleren via de connector.",
    "controle": "Plan, checkout-migratie en tracking via officiële apps?",
    "gecontroleerd": "2026-09-26",
    "methode": "shopify",
    "uitkomst": "open"
   },
   "id": "backlog#cc86cc1e",
   "kop": "11. Controleer of trackingscripts nog vuren na de Checkout Extensibility-deadline (nieuw 17 sep 2026, aangevuld 25 sep 2026)",
   "prioriteit": "P1",
   "prioriteit_effectief": "P1",
   "uitvoerbaar": {
    "beoordeeld": "2026-09-26",
    "claude": "deels",
    "wat_claude_doet": "Checkt via connector en site welke trackingscripts vuren en of pixels via officiele apps lopen; levert een rapport met wat ontbreekt.",
    "wat_jij_doet": "Ontbrekende apps (Meta, Google) in Shopify installeren of koppelen."
   },
   "velden": {
    "Waar": "Shopify admin → Instellingen → Checkout (Additional Scripts-veld + eventuele checkout-tracking-apps)",
    "Waarom": "Shopify's harde deadline voor niet-Plus winkels om te migreren naar Checkout Extensibility was 26 augustus 2026. Wie toen niet gemigreerd was, kreeg een automatische upgrade waarbij het complete \"Additional Scripts\"-veld werd leeggetrokken — Google Ads-tracking, Meta pixel en GTM-containers stoppen dan zonder zichtbare storefront-fout. Dit hangt direct samen met het al openstaande punt hieronder dat GA4 `keyEvents = 0` toont op elk kanaal: het kan zijn dat niet alleen de key-event-instelling ontbreekt, maar dat het onderliggende trackingscript zelf al drie weken dood is.",
    "Wat": "Controleren of `hi-grip.myshopify.com` op een niet-Plus plan zit, of de migratie voor 26 augustus is afgerond, en of Meta pixel/Google Ads-tracking via een officiële app loopt in plaats van het oude scriptveld. Doe dit vóór je de GA4-key-event-actie hieronder als opgelost afvinkt."
   }
  },
  {
   "afgevinkt": false,
   "beheer": null,
   "besluit": false,
   "body_md": "**Waarom:** Producten met afwijkende attributen onder één ID riskeren verwerkingsproblemen en afkeuringen. Jij hebt zes varianten onder één product. Op NRF 2026 kondigde Google vier AI-shoppingfuncties aan (Universal Commerce Protocol, Native Checkout, Business Agent, Direct Offers) die allemaal leunen op dezelfde Merchant Center-feed — inclusief Universal Cart, dat producten laat toevoegen vanuit Search, Gemini, YouTube en Gmail. Een foutieve variant-ID kost dus niet meer alleen een Shopping-ad, maar ook zichtbaarheid in Google's AI Mode.\n**Waar:** Shopify Merchant Center-feedinstellingen\n**Wat:** Per variant een uniek, stabiel ID. Controleer of Shopify's feed dat correct doorgeeft.\n**Extra controlepunt (toegevoegd 21 sep 2026):** Google verhoogt de minimale productafbeelding-eis naar 500×500px (universeel, nu al als waarschuwing zichtbaar, hard vanaf 31 januari 2027). Gecontroleerd op higrip.nl: hoofdproductfoto's zijn 1024×1024 en 1536×1024 — ruim boven de eis. Geen actie nodig, alleen meenemen als checkpunt zodra je nieuwe productfoto's upload (bijv. voor de skisokken).\n**Extra controlepunt (toegevoegd 28 sep 2026):** Google's oude Content API for Shopping (voedt deze feed) geeft sinds 1 september 2026 al progressieve HTTP 410-fouten voor wie niet is overgezet naar de nieuwe Merchant API; volledige uitschakeling begin 2027. Shopify's native Google & YouTube-kanaal migreert gefaseerd vanzelf, maar product-ID's kunnen daarbij wijzigen — dezelfde app die volgens punt 11 ook op de riskante \"Optimized\"-pixelstand staat. Controleren: is de migratie voor `raqds3-tb` voltooid, en zijn product-ID's gewijzigd?\n**Extra controlepunt (toegevoegd 30 sep 2026):** Universal Cart (NRF 2026-aankondiging) is geen concept meer: sinds 19 mei 2026 live in de VS, met AP2 als betaallaag (inmiddels overgedragen aan de FIDO Alliance). Uitbreiding naar de Gemini-app volgde deze zomer; Nederland/Europa staat nog niet op de rolluit-lijst. Geen actie nu, maar bevestigt dat dezelfde Merchant Center-feed straks ook de ingang voor Universal Cart wordt zodra dat naar Europa komt.\n**Inspanning:** 2 uur\n\n---",
   "controle": {
    "bewijs": "GraphQL products(first:20): alle variant-sku's null en barcode leeg/null bij de 3 producten.",
    "controle": "Hebben alle varianten een uniek, stabiel ID in de Merchant Center-feed?",
    "gecontroleerd": "2026-09-26",
    "methode": "shopify",
    "uitkomst": "open"
   },
   "id": "backlog#6050edaa",
   "kop": "4. Controleer je variant-ID's tegen de Merchant Center-eis van maart 2026 (herzien 16 sep 2026 — opgewaardeerd naar P1)",
   "prioriteit": "P1",
   "prioriteit_effectief": "P1",
   "uitvoerbaar": {
    "beoordeeld": "2026-09-26",
    "claude": "deels",
    "wat_claude_doet": "Leest variant-ID's, SKU's en GTIN's uit via de Shopify-connector en maakt een lijst met wat niet aan de Merchant Center-eis voldoet.",
    "wat_jij_doet": "Ontbrekende ID's in Shopify admin of Merchant Center invullen."
   },
   "velden": {
    "Waar": "Shopify Merchant Center-feedinstellingen",
    "Waarom": "Producten met afwijkende attributen onder één ID riskeren verwerkingsproblemen en afkeuringen. Jij hebt zes varianten onder één product. Op NRF 2026 kondigde Google vier AI-shoppingfuncties aan (Universal Commerce Protocol, Native Checkout, Business Agent, Direct Offers) die allemaal leunen op dezelfde Merchant Center-feed — inclusief Universal Cart, dat producten laat toevoegen vanuit Search, Gemini, YouTube en Gmail. Een foutieve variant-ID kost dus niet meer alleen een Shopping-ad, maar ook zichtbaarheid in Google's AI Mode.",
    "Wat": "Per variant een uniek, stabiel ID. Controleer of Shopify's feed dat correct doorgeeft."
   }
  },
  {
   "afgevinkt": false,
   "beheer": null,
   "besluit": false,
   "body_md": "**Waarom:** De core update van maart/april beloonde webshops met eigen materiaal met ~22% meer zichtbaarheid. Jouw 1.17 wrijvingscoëfficiënt en 95%-claim zijn precies dat — maar ze staan nu alleen in campagnesecties, niet in een pagina die Google kan vinden en AI-modellen kunnen citeren.\n**Waar:** Nieuwe pagina, bijv. `/pages/onderzoek` of `/pages/waarom-hi-grip-werkt`\n**Wat:** Hoe is er gemeten, waartegen, met welke uitkomst. Grafiek of tabel. Meetmethode benoemen.\n**Effect:** Dubbel — organische autoriteit én de citeerbare bron die AI-assistenten nodig hebben om jou aan te bevelen.\n**Inspanning:** 1 dag",
   "controle": {
    "bewijs": "sitemap_pages_1.xml (21 URL's): geen bewijs- of onderzoekspagina.",
    "controle": "Bestaat er een bewijspagina rond de eigen meetdata?",
    "gecontroleerd": "2026-09-26",
    "methode": "site",
    "uitkomst": "open"
   },
   "id": "backlog#14c6ceb5",
   "kop": "5. Bouw een bewijspagina rond je eigen meetdata",
   "prioriteit": "P2",
   "prioriteit_effectief": "P2",
   "uitvoerbaar": {
    "beoordeeld": "2026-09-26",
    "claude": "deels",
    "wat_claude_doet": "Schrijft de bewijspagina (meetmethode, tabel, bron) als concept en pagina-template in het testthema.",
    "wat_jij_doet": "Meetdata en bron aanleveren, daarna pagina publiceren."
   },
   "velden": {
    "Waar": "Nieuwe pagina, bijv. `/pages/onderzoek` of `/pages/waarom-hi-grip-werkt`",
    "Waarom": "De core update van maart/april beloonde webshops met eigen materiaal met ~22% meer zichtbaarheid. Jouw 1.17 wrijvingscoëfficiënt en 95%-claim zijn precies dat — maar ze staan nu alleen in campagnesecties, niet in een pagina die Google kan vinden en AI-modellen kunnen citeren.",
    "Wat": "Hoe is er gemeten, waartegen, met welke uitkomst. Grafiek of tabel. Meetmethode benoemen."
   }
  },
  {
   "afgevinkt": false,
   "beheer": null,
   "besluit": false,
   "body_md": "**Update 29 sep 2026:** Google breidt AI Overviews sinds 28 augustus 2026 bevestigd automatisch uit tot de volle lengte voor vragen waar het systeem dat nuttig acht — de knop \"Toon meer\" vervalt dan en de vervolgvraagbox opent vanzelf, richting AI Mode in plaats van terug naar de gewone resultaten. Effect: blauwe links (dus ook een eventuele toekomstige positie van higrip.nl) komen bij die vragen nog verder onder de vouw. Versterkt de al bestaande reden voor dit punt — geciteerd worden in het antwoord weegt zwaarder naarmate er minder organische ruimte overblijft. Geen nieuw punt, alleen extra gewicht.\n**Waarom:** 31% zoekt inmiddels via generatieve AI; LLM-verkeer converteert op 5,53% tegen 3,7% organisch. Vraagvormige long-tails komen in die antwoorden terecht — mits de conclusie bovenaan staat. **Terugdraaiing t.o.v. 15 sep:** toen is `FAQPage`-schema geschrapt omdat de AI Overviews-gids zei dat structured data \"niet vereist\" is voor AI-citaties — dat klopt nog steeds, maar onderzoek van maart 2026 (Universiteit van Tokio/Tsukuba) laat zien dat een schone kop-en-antwoordstructuur ~2,8× vaker geciteerd wordt door AI-antwoordmachines, en dat het specifieke \"antwoordcapsule\"-patroon een gemeten +17,3% citatiekans oplevert over zes engines. Niet vereist ≠ geen effect. Concurrent FitSockr heeft bovendien al een ongestructureerde blogpost live op exact de long-tail \"wat zijn gripsokken\" — reden om hier niet halfslachtig in te zitten.\n**Welke:** \"Waarom glijdt mijn voet in mijn padelschoen?\" · \"Wat zijn gripsokken?\" · \"Tapedesign alternatief\"\n**Format:** Direct onder elke vraag-H2 een zelfstandige alinea van 40-60 woorden die de vraag volledig beantwoordt, zonder link of opmaak erin. Onderbouwing en eventuele link komen in de alinea daarna. `FAQPage` JSON-LD eronder — niet voor rich results (die bestaan niet meer sinds mei 2026), maar als machineleesbare, vooraf afgebakende vraag-antwoordparen voor AI-crawlers.\n**Inspanning:** 1 dag voor alle drie",
   "controle": {
    "bewijs": "Sitemap pages en blogs: geen pagina/artikel 'waarom glijdt mijn voet in mijn padelschoen' of 'tapedesign alternatief'.",
    "controle": "Staan de drie vraagpagina's antwoord-eerst met FAQPage live?",
    "gecontroleerd": "2026-09-26",
    "methode": "site",
    "uitkomst": "open"
   },
   "id": "backlog#b02ee884",
   "kop": "6. Schrijf de vraagpagina's antwoord-eerst, mét FAQPage-schema (herzien 22 sep 2026)",
   "prioriteit": "P2",
   "prioriteit_effectief": "P2",
   "uitvoerbaar": {
    "beoordeeld": "2026-09-26",
    "claude": "ja",
    "wat_claude_doet": "Schrijft de vraagpagina's antwoord-eerst met FAQPage-schema als templates in het testthema.",
    "wat_jij_doet": "Pagina's controleren en publiceren."
   },
   "velden": {
    "Waarom": "31% zoekt inmiddels via generatieve AI; LLM-verkeer converteert op 5,53% tegen 3,7% organisch. Vraagvormige long-tails komen in die antwoorden terecht — mits de conclusie bovenaan staat. **Terugdraaiing t.o.v. 15 sep:** toen is `FAQPage`-schema geschrapt omdat de AI Overviews-gids zei dat structured data \"niet vereist\" is voor AI-citaties — dat klopt nog steeds, maar onderzoek van maart 2026 (Universiteit van Tokio/Tsukuba) laat zien dat een schone kop-en-antwoordstructuur ~2,8× vaker geciteerd wordt door AI-antwoordmachines, en dat het specifieke \"antwoordcapsule\"-patroon een gemeten +17,3% citatiekans oplevert over zes engines. Niet vereist ≠ geen effect. Concurrent FitSockr heeft bovendien al een ongestructureerde blogpost live op exact de long-tail \"wat zijn gripsokken\" — reden om hier niet halfslachtig in te zitten."
   }
  },
  {
   "afgevinkt": false,
   "beheer": null,
   "besluit": false,
   "body_md": "**Waarom:** Meest consistent bewezen CRO-tactiek van 2026: +10 tot 30% conversie. Geen enkele andere losse ingreep haalt dat betrouwbaarheidsniveau.\n**Wat:** De sok in actie — slide-out op de padelbaan, close-up van de grip. Geen praatvideo.\n**Bonus:** Dezelfde opname is direct TikTok- en Reels-materiaal (zie punt 9).\n**Inspanning:** 1 dag opname + montage",
   "controle": {
    "bewijs": "/products/performance-gripsokken: geen <video>, YouTube- of Vimeo-embed.",
    "controle": "Staat er een productvideo op de productpagina?",
    "gecontroleerd": "2026-09-26",
    "methode": "site",
    "uitkomst": "open"
   },
   "id": "backlog#b81d4226",
   "kop": "7. Productvideo van 30–60 seconden op de productpagina",
   "prioriteit": "P2",
   "prioriteit_effectief": "P2",
   "uitvoerbaar": {
    "beoordeeld": "2026-09-26",
    "claude": "deels",
    "wat_claude_doet": "Schrijft een shotlist en script van 30-60 s en zet de videosectie klaar in het testthema.",
    "wat_jij_doet": "Video laten opnemen en uploaden."
   },
   "velden": {
    "Waarom": "Meest consistent bewezen CRO-tactiek van 2026: +10 tot 30% conversie. Geen enkele andere losse ingreep haalt dat betrouwbaarheidsniveau.",
    "Wat": "De sok in actie — slide-out op de padelbaan, close-up van de grip. Geen praatvideo."
   }
  },
  {
   "afgevinkt": false,
   "beheer": null,
   "besluit": false,
   "body_md": "**Update 23 sep 2026:** De VS-vraag gaat nu over drie AI-kanalen tegelijk. ChatGPT Shopping haalt sinds 10 juli 2026 ~65% van de aanbevelingen uit feeds, en Shopify levert die via Agentic Storefronts automatisch aan ChatGPT en Copilot, maar alleen voor winkels die aan Amerikaanse kopers verkopen. ChatGPT Shopping zelf is voorlopig alleen in de VS live. Extra check (5 min): Shopify admin → Verkoopkanalen → **Agentic**: staat het aan, en welke kanalen zijn actief? Sinds 8 sep 2026 staat ook Meta (AI-agent Muse, alleen VS) in die lijst, en producten worden standaard gedeeld. Nog geen VS-verzendbeslissing nemen puur hierom.\n**Waarom:** Perplexity's Merchant Program is sinds januari 2026 gratis open voor Shopify-winkels: geen listingkosten, geen commissie, automatische productsynchronisatie voor Amerikaanse Shopify-winkels. \"Buy with Pro\" biedt gratis verzending betaald door Perplexity zelf. Perplexity meldt 45 miljoen maandelijkse gebruikers en een vijfvoudige stijging in shopping-intentie-zoekopdrachten. Voorwaarde: bedrijven moeten verkopen én verzenden naar de VS.\n**Waar:** Perplexity Merchant Program (aanmelding via Shopify-app of Perplexity zelf)\n**Wat:** Eerst controleren of higrip.nl momenteel naar de VS verzendt. Zo niet, dit punt geblokkeerd laten staan.\n**Effect:** Gratis extra AI-shoppingkanaal zonder commissie, mits geografisch van toepassing.\n**Inspanning:** Controle 15 minuten; aanmelding zelf een half dagdeel indien van toepassing.",
   "controle": {
    "bewijs": "/policies/terms-of-service: verzending vindt nog uitsluitend plaats binnen Nederland; punt blijft geblokkeerd.",
    "controle": "Verzendt higrip.nl naar de VS (voorwaarde voor dit punt)?",
    "gecontroleerd": "2026-09-26",
    "methode": "site",
    "uitkomst": "open"
   },
   "id": "backlog#8fb4a493",
   "kop": "8. Perplexity Merchant Program — alleen als je naar de VS verzendt (nieuw 16 sep 2026, uitgebreid 23 sep 2026)",
   "prioriteit": "P2",
   "prioriteit_effectief": "P2",
   "uitvoerbaar": {
    "beoordeeld": "2026-09-26",
    "claude": "ja",
    "wat_claude_doet": "Controleert of higrip.nl naar de VS verzendt en meldt of het punt geblokkeerd blijft.",
    "wat_jij_doet": "Besluiten of VS-verzending gewenst is."
   },
   "velden": {
    "Waar": "Perplexity Merchant Program (aanmelding via Shopify-app of Perplexity zelf)",
    "Waarom": "Perplexity's Merchant Program is sinds januari 2026 gratis open voor Shopify-winkels: geen listingkosten, geen commissie, automatische productsynchronisatie voor Amerikaanse Shopify-winkels. \"Buy with Pro\" biedt gratis verzending betaald door Perplexity zelf. Perplexity meldt 45 miljoen maandelijkse gebruikers en een vijfvoudige stijging in shopping-intentie-zoekopdrachten. Voorwaarde: bedrijven moeten verkopen én verzenden naar de VS.",
    "Wat": "Eerst controleren of higrip.nl momenteel naar de VS verzendt. Zo niet, dit punt geblokkeerd laten staan."
   }
  },
  {
   "afgevinkt": false,
   "beheer": null,
   "besluit": false,
   "body_md": "**Update 2 okt 2026 (vault-review):** sinds 28-9 weer €14,95 / €41,95 / €64,95 = €14,95 / €13,98 / €12,99 per paar (zie [[Feiten & Actuele Staat]]). Het 3-pack scheelt nu €0,97 per paar (−6%), het 5-pack €1,96 (−13%): een per-paar-prijs tegen het 1-pack werkt weer. De update van 24 sep hieronder is achterhaald.\n**Update 24 sep 2026:** Live prijzen zijn nu 1-pack €13,49 (doorgestreept €14,95) / 3-pack €39,95 / 5-pack €61,95 = €13,49 / €13,32 / €12,39 per paar. Het 3-pack scheelt maar €0,17 per paar (−1%): een per-paar-prijs tegen het 1-pack overtuigt dan niet. Twee opties: (a) per-paar-prijs afzetten tegen het ankerbedrag €14,95 (\"€13,32/paar — 11% onder normaal\"), of (b) eerst de pack-prijsladder zelf herzien (commerciële keuze). De bedragen hieronder zijn achterhaald.\n**Waarom:** 2026-onderzoek naar prijsweergave laat zien dat het tonen van de prijs per stuk bij multipacks 5–15% meer conversie oplevert dan alleen de totaalprijs — ankering maakt de korting tastbaar. Jouw pack-structuur (1/3/5) is exact deze bundelvorm, maar de korting per paar staat nergens.\n**Waar:** `snippets/product-information-content.liquid`, bij de variant-selector\n**Wat:** \"€X,XX/paar\" tonen onder elke pack-optie, herberekend per gekozen variant — ~~1-pack €14,99/paar, 3-pack €13,99/paar, 5-pack €13,00/paar~~ (achterhaald door prijswijziging, zie update).\n**Effect:** Versterkt samen met de gratis-verzendbalk (punt 1) de duw richting het 3-pack.\n**Inspanning:** 1-2 uur",
   "controle": {
    "bewijs": "/products/performance-gripsokken: geen 'per paar' of '/paar' in de pagina.",
    "controle": "Staat de prijs per paar bij de pack-selector?",
    "gecontroleerd": "2026-09-26",
    "methode": "site",
    "uitkomst": "open"
   },
   "id": "backlog#a2e3406d",
   "kop": "12. Toon prijs per paar naast de pack-selector (nieuw 17 sep 2026, herzien 24 sep 2026)",
   "prioriteit": "P2",
   "prioriteit_effectief": "P2",
   "uitvoerbaar": {
    "beoordeeld": "2026-09-26",
    "claude": "ja",
    "wat_claude_doet": "Bouwt prijs-per-paar onder de pack-selector (berekend uit de variantprijs) in het testthema.",
    "wat_jij_doet": "Testthema bekijken en live publiceren."
   },
   "velden": {
    "Waar": "`snippets/product-information-content.liquid`, bij de variant-selector",
    "Waarom": "2026-onderzoek naar prijsweergave laat zien dat het tonen van de prijs per stuk bij multipacks 5–15% meer conversie oplevert dan alleen de totaalprijs — ankering maakt de korting tastbaar. Jouw pack-structuur (1/3/5) is exact deze bundelvorm, maar de korting per paar staat nergens.",
    "Wat": "\"€X,XX/paar\" tonen onder elke pack-optie, herberekend per gekozen variant — ~~1-pack €14,99/paar, 3-pack €13,99/paar, 5-pack €13,00/paar~~ (achterhaald door prijswijziging, zie update)."
   }
  },
  {
   "afgevinkt": false,
   "beheer": null,
   "besluit": false,
   "body_md": "**Waarom:** 2026-onderzoek naar Core Web Vitals op Shopify-winkels wijst INP (Interaction to Next Paint) aan als het metric waar winkels het vaakst op struikelen — en de oorzaak is bijna altijd eigen of app-JavaScript, niet het thema zelf. Landelijk haalt inmiddels 48% van mobiele sites alle drie de Core Web Vitals (was 44% in 2024), dus de lat ligt hoger dan voorheen.\n**Waar:** Homepage en productpagina, plus eventuele resterende custom secties met eigen JS (bijv. `assets/hi-wk-promo.js` — geverifieerd op 21 sep 2026: de sectie zelf staat niet meer op de homepage, maar controleer of het script-bestand nog wordt geladen).\n**Wat:** Draai PageSpeed Insights of het Core Web Vitals-rapport in Search Console, filter specifiek op INP (niet alleen LCP/CLS). Bij een slechte INP-score: zoek naar zware event-handlers in custom secties of apps.\n**Effect:** Core Web Vitals wegen mee in mobiele ranking; een slechte INP-score is bovendien vaak voelbaar in de conversie zelf.\n**Inspanning:** 1 uur meten, vervolgacties afhankelijk van bevindingen.",
   "controle": {
    "bewijs": "niet te controleren zonder browser/PageSpeed-tool; bundler.js en Trustpilot-scripts laden nog steeds.",
    "controle": "Is INP gemeten en zware eigen JS aangepakt?",
    "gecontroleerd": "2026-09-26",
    "methode": "site",
    "uitkomst": "open"
   },
   "id": "backlog#2f69e0df",
   "kop": "14. Controleer INP op productpagina en homepage — eigen JS is de waarschijnlijke boosdoener (nieuw 21 sep 2026)",
   "prioriteit": "P2",
   "prioriteit_effectief": "P2",
   "uitvoerbaar": {
    "beoordeeld": "2026-09-26",
    "claude": "ja",
    "wat_claude_doet": "Meet INP via PageSpeed/CrUX (zodra de API aanstaat) en wijst zware scripts aan in een notitie.",
    "wat_jij_doet": "Aangewezen app of script uitzetten als dat nodig is."
   },
   "velden": {
    "Waar": "Homepage en productpagina, plus eventuele resterende custom secties met eigen JS (bijv. `assets/hi-wk-promo.js` — geverifieerd op 21 sep 2026: de sectie zelf staat niet meer op de homepage, maar controleer of het script-bestand nog wordt geladen).",
    "Waarom": "2026-onderzoek naar Core Web Vitals op Shopify-winkels wijst INP (Interaction to Next Paint) aan als het metric waar winkels het vaakst op struikelen — en de oorzaak is bijna altijd eigen of app-JavaScript, niet het thema zelf. Landelijk haalt inmiddels 48% van mobiele sites alle drie de Core Web Vitals (was 44% in 2024), dus de lat ligt hoger dan voorheen.",
    "Wat": "Draai PageSpeed Insights of het Core Web Vitals-rapport in Search Console, filter specifiek op INP (niet alleen LCP/CLS). Bij een slechte INP-score: zoek naar zware event-handlers in custom secties of apps."
   }
  },
  {
   "afgevinkt": false,
   "beheer": null,
   "besluit": false,
   "body_md": "**Waarom:** Google heeft het \"Prestaties in generatieve AI-functies\"-rapport in Search Console op 3 juni 2026 gefaseerd uitgerold en dit is sinds 31 augustus 2026 wereldwijd beschikbaar. Het toont impressies uit AI Overviews, AI Mode en generatieve Discover per pagina, land en datum (nog geen kliks/CTR/zoekterm). Search Console staat al ingericht voor higrip.nl — dit is dus een gratis, direct beschikbare check.\n**Waar:** Google Search Console → higrip.nl-property → nieuw AI-rapport\n**Wat:** Eenmalig bekijken welke pagina's nu al impressies krijgen in AI-functies. Bepaalt of de vraagpagina's uit punt 6 vanaf nul beginnen of al ergens zichtbaar zijn.\n**Effect:** Meetbaarheid — voorkomt dat je blind content bouwt zonder te weten wat al werkt in AI-zoekresultaten.\n**Inspanning:** 15 minuten",
   "controle": {
    "bewijs": "niet te controleren: google_data.py heeft geen commando voor het rapport 'Prestaties in generatieve AI-functies'.",
    "controle": "Is het AI-rapport in Search Console bekeken?",
    "gecontroleerd": "2026-09-26",
    "methode": "gsc",
    "uitkomst": "open"
   },
   "id": "backlog#01dc4258",
   "kop": "15. Bekijk het nieuwe Search Console-rapport voor generatieve AI-impressies (nieuw 22 sep 2026)",
   "prioriteit": "P2",
   "prioriteit_effectief": "P2",
   "uitvoerbaar": {
    "beoordeeld": "2026-09-26",
    "claude": "nee",
    "wat_claude_doet": "Kan het AI-impressierapport niet via de API lezen; zet wel de vergelijkingsvragen klaar.",
    "wat_jij_doet": "Rapport in Search Console openen en een export in de vault zetten."
   },
   "velden": {
    "Waar": "Google Search Console → higrip.nl-property → nieuw AI-rapport",
    "Waarom": "Google heeft het \"Prestaties in generatieve AI-functies\"-rapport in Search Console op 3 juni 2026 gefaseerd uitgerold en dit is sinds 31 augustus 2026 wereldwijd beschikbaar. Het toont impressies uit AI Overviews, AI Mode en generatieve Discover per pagina, land en datum (nog geen kliks/CTR/zoekterm). Search Console staat al ingericht voor higrip.nl — dit is dus een gratis, direct beschikbare check.",
    "Wat": "Eenmalig bekijken welke pagina's nu al impressies krijgen in AI-functies. Bepaalt of de vraagpagina's uit punt 6 vanaf nul beginnen of al ergens zichtbaar zijn."
   }
  },
  {
   "afgevinkt": false,
   "beheer": null,
   "besluit": false,
   "body_md": "**Waarom:** Search Console-meting (routine \"Search Console & rankings\", eerste run): `/products/hi-grip-gripsokken-1` trekt met 310 vertoningen in 7 dagen (1.003 in 28 dagen) verreweg de meeste vertoningen van alle pagina's op higrip.nl, maar met een CTR van 0,32% — ruim onder elke andere pagina. De nieuwe canonieke handle `performance-gripsokken` (zie feitenbestand) trekt via de 2.0-varianten veel minder vertoningen (65–162), wat erop wijst dat Google het rankingsignaal nog niet volledig naar de nieuwe URL heeft overgezet ondanks de redirect (opgelost 21 sep, zie regressie-actie hierboven).\n**Waar:** Search Console → URL-inspectie/indexering, en de titel/meta die Google nu toont voor de oude URL\n**Wat:** Nagaan of de oude URL opnieuw geïndexeerd moet worden gemeld, en of de getoonde titel/meta in de SERP nog van de oude pagina komt.\n**Gevonden op:** 25 september 2026 (Search Console & rankings)",
   "controle": {
    "bewijs": "niet te controleren: geen URL-inspectietool; /products/hi-grip-gripsokken-1 loopt nog via een 301-keten (2 hops) naar /products/performance-gripsokken.",
    "controle": "Oude URL hi-grip-gripsokken-1: titel in de SERP en indexering van de nieuwe canonical?",
    "gecontroleerd": "2026-09-26",
    "methode": "site",
    "uitkomst": "open"
   },
   "id": "backlog#52886b90",
   "kop": "17. Titel/meta van de oude productpagina-URL optimaliseren of nieuwe canonical laten indexeren (nieuw 25 sep 2026)",
   "prioriteit": "P2",
   "prioriteit_effectief": "P2",
   "uitvoerbaar": {
    "beoordeeld": "2026-09-26",
    "claude": "deels",
    "wat_claude_doet": "Checkt indexatie en SERP-titel van oude en nieuwe URL via Search Console en schrijft een nieuwe title/meta.",
    "wat_jij_doet": "URL opnieuw indienen in Search Console en de meta in Shopify plakken."
   },
   "velden": {
    "Gevonden op": "25 september 2026 (Search Console & rankings)",
    "Waar": "Search Console → URL-inspectie/indexering, en de titel/meta die Google nu toont voor de oude URL",
    "Waarom": "Search Console-meting (routine \"Search Console & rankings\", eerste run): `/products/hi-grip-gripsokken-1` trekt met 310 vertoningen in 7 dagen (1.003 in 28 dagen) verreweg de meeste vertoningen van alle pagina's op higrip.nl, maar met een CTR van 0,32% — ruim onder elke andere pagina. De nieuwe canonieke handle `performance-gripsokken` (zie feitenbestand) trekt via de 2.0-varianten veel minder vertoningen (65–162), wat erop wijst dat Google het rankingsignaal nog niet volledig naar de nieuwe URL heeft overgezet ondanks de redirect (opgelost 21 sep, zie regressie-actie hierboven).",
    "Wat": "Nagaan of de oude URL opnieuw geïndexeerd moet worden gemeld, en of de getoonde titel/meta in de SERP nog van de oude pagina komt."
   }
  },
  {
   "afgevinkt": false,
   "beheer": null,
   "besluit": false,
   "body_md": "**Waarom:** Search Console-meting: de zoekterm \"grip socks\" (112 vertoningen/7 dagen, 613/28 dagen) rankt afwisselend via `/en/collections/gripsokken`, `/collections/gripsokken`, `/collections/all` en `/`, zonder dat één pagina domineert. De gemiddelde positie voor de hele term (10,3) is zwakker dan wat de sterkste pagina alleen zou moeten kunnen halen — kannibalisatie.\n**Waar:** Canonical tags en interne links tussen de vier genoemde URL's\n**Wat:** Bepalen welke pagina primair moet ranken voor \"grip socks\" (waarschijnlijk `/en/collections/gripsokken` of `/collections/gripsokken`) en de overige pagina's daarnaartoe laten doorverwijzen in interne links/canonical.\n**Gevonden op:** 25 september 2026 (Search Console & rankings)",
   "controle": {
    "bewijs": "/, /collections/all, /collections/gripsokken en /en/collections/gripsokken hebben elk nog een eigen zelf-canonical.",
    "controle": "Is één pagina primair voor 'grip socks' via canonical en interne links?",
    "gecontroleerd": "2026-09-26",
    "methode": "site",
    "uitkomst": "open"
   },
   "id": "backlog#8f8db388",
   "kop": "18. \"Grip socks\" consolideren — vier eigen URL's concurreren om dezelfde term (nieuw 25 sep 2026)",
   "prioriteit": "P2",
   "prioriteit_effectief": "P2",
   "uitvoerbaar": {
    "beoordeeld": "2026-09-26",
    "claude": "deels",
    "wat_claude_doet": "Kiest de primaire URL op GSC-data en zet interne links en canonical klaar in het testthema.",
    "wat_jij_doet": "Keuze bevestigen en het testthema publiceren."
   },
   "velden": {
    "Gevonden op": "25 september 2026 (Search Console & rankings)",
    "Waar": "Canonical tags en interne links tussen de vier genoemde URL's",
    "Waarom": "Search Console-meting: de zoekterm \"grip socks\" (112 vertoningen/7 dagen, 613/28 dagen) rankt afwisselend via `/en/collections/gripsokken`, `/collections/gripsokken`, `/collections/all` en `/`, zonder dat één pagina domineert. De gemiddelde positie voor de hele term (10,3) is zwakker dan wat de sterkste pagina alleen zou moeten kunnen halen — kannibalisatie.",
    "Wat": "Bepalen welke pagina primair moet ranken voor \"grip socks\" (waarschijnlijk `/en/collections/gripsokken` of `/collections/gripsokken`) en de overige pagina's daarnaartoe laten doorverwijzen in interne links/canonical."
   }
  },
  {
   "afgevinkt": false,
   "beheer": null,
   "besluit": false,
   "body_md": "**Waarom:** Shopify stopt script tags in de Online Store op 1 maart 2027 (developer-changelog, 24 aug 2026). Op higrip.nl laden via script tags nu nog de Bundler-app (`cdn-bundler.nice-team.net`) en drie Trustpilot-scripts. Het projectgeheugen noemt de Bundler-app verwijderd na de WK-actie, maar live staan nog het script plus negen `bundler`-verwijzingen in de HTML — onnodig JavaScript dat ook punt 14 (INP) raakt. Trustpilot is je zichtbare review-proof; die mag niet stilletjes wegvallen.\n**Waar:** Shopify admin → Apps (Bundler: nog geïnstalleerd?) en Online Store → Thema aanpassen → App embeds; Trustpilot-app-instellingen.\n**Wat:** 1) Bundler-app verwijderen als hij niet meer gebruikt wordt, en eventuele achtergebleven app-blocks uit het thema halen. 2) Bij Trustpilot controleren of er een app-embed-versie is en overstappen. 3) Na afloop: `var urls = [...]` in de paginabron mag leeg zijn.\n**Effect:** Voorkomt dat trust-widgets straks zonder foutmelding verdwijnen; minder JS op de productpagina.\n**Inspanning:** 1 uur",
   "controle": {
    "bewijs": "/products/performance-gripsokken: bundler.js (nice-team.net) en trustpilot-scripts nog aanwezig in de paginabron.",
    "controle": "Zijn het Bundler-script en de Trustpilot-scripttags weg?",
    "gecontroleerd": "2026-09-26",
    "methode": "site",
    "uitkomst": "open"
   },
   "id": "backlog#b34063f3",
   "kop": "16. Script-tag-apps overzetten vóór 1 maart 2027 — en Bundler-restanten opruimen (nieuw 24 sep 2026)",
   "prioriteit": "P2",
   "prioriteit_effectief": "P2",
   "uitvoerbaar": {
    "beoordeeld": "2026-09-26",
    "claude": "deels",
    "wat_claude_doet": "Inventariseert script-tags, Bundler-restanten en de Trustpilot-embed en haalt achtergebleven app-blocks uit het testthema.",
    "wat_jij_doet": "Bundler-app verwijderen en Trustpilot-embed aanzetten in de admin."
   },
   "velden": {
    "Waar": "Shopify admin → Apps (Bundler: nog geïnstalleerd?) en Online Store → Thema aanpassen → App embeds; Trustpilot-app-instellingen.",
    "Waarom": "Shopify stopt script tags in de Online Store op 1 maart 2027 (developer-changelog, 24 aug 2026). Op higrip.nl laden via script tags nu nog de Bundler-app (`cdn-bundler.nice-team.net`) en drie Trustpilot-scripts. Het projectgeheugen noemt de Bundler-app verwijderd na de WK-actie, maar live staan nog het script plus negen `bundler`-verwijzingen in de HTML — onnodig JavaScript dat ook punt 14 (INP) raakt. Trustpilot is je zichtbare review-proof; die mag niet stilletjes wegvallen.",
    "Wat": "1) Bundler-app verwijderen als hij niet meer gebruikt wordt, en eventuele achtergebleven app-blocks uit het thema halen. 2) Bij Trustpilot controleren of er een app-embed-versie is en overstappen. 3) Na afloop: `var urls = [...]` in de paginabron mag leeg zijn."
   }
  },
  {
   "afgevinkt": false,
   "beheer": null,
   "besluit": false,
   "body_md": "**Waarom:** Search Console-meting (routine \"Search Console & rankings\", tweede run): de pagina rankt sterk — gemiddelde positie 3,9 over 28 dagen (4,2 over 7 dagen) — maar trok in 28 dagen geen enkele klik op 120 vertoningen (0% CTR). Bij zo'n goede positie wijst 0% CTR op een titel/omschrijving die niet aansluit bij wat de zoeker verwacht, niet op een rankingprobleem.\n**Waar:** `/pages/ontdek-jouw-sport` — titel en meta description via Shopify admin\n**Wat:** SERP-titel en meta description herschrijven zodat ze de zoekintentie dekken (waarschijnlijk een sportkeuze-/overzichtspagina); nagaan welke zoektermen de vertoningen opleveren voordat je herschrijft.\n**Gevonden op:** 30 september 2026 (Search Console & rankings)",
   "controle": null,
   "id": "backlog#bf53be16",
   "kop": "19. [search-console] Titel/meta van `/pages/ontdek-jouw-sport` herschrijven (nieuw 30 sep 2026)",
   "prioriteit": "P2",
   "prioriteit_effectief": "P2",
   "uitvoerbaar": null,
   "velden": {
    "Gevonden op": "30 september 2026 (Search Console & rankings)",
    "Waar": "`/pages/ontdek-jouw-sport` — titel en meta description via Shopify admin",
    "Waarom": "Search Console-meting (routine \"Search Console & rankings\", tweede run): de pagina rankt sterk — gemiddelde positie 3,9 over 28 dagen (4,2 over 7 dagen) — maar trok in 28 dagen geen enkele klik op 120 vertoningen (0% CTR). Bij zo'n goede positie wijst 0% CTR op een titel/omschrijving die niet aansluit bij wat de zoeker verwacht, niet op een rankingprobleem.",
    "Wat": "SERP-titel en meta description herschrijven zodat ze de zoekintentie dekken (waarschijnlijk een sportkeuze-/overzichtspagina); nagaan welke zoektermen de vertoningen opleveren voordat je herschrijft."
   }
  },
  {
   "afgevinkt": false,
   "beheer": null,
   "besluit": false,
   "body_md": "**Waarom:** Shopify's sessiemeting-update telt sessies en `checkout_started` sinds 21-23 september 2026 anders (geen cutoff meer om middernacht UTC maar bij 30 minuten inactiviteit, sessies zonder pageview tellen nu mee, bot-sessies worden gefilterd). Shopify zelf meldt dat \"Reached checkout rate\" en \"Checkout conversion rate\" hierdoor kunnen verschuiven zonder dat bestellingen of klantgedrag veranderen. Dat valt vlak vóór de geplande pack-prijs-/verzenddrempeltest (punt 1/12, zelfde sectie `snippets/product-information-content.liquid`): een voor-/na-vergelijking via Shopify Analytics riskeert de meetbreuk aan te zien voor testeffect.\n**Waar:** Shopify Analytics-rapporten (sessies, reached checkout rate, checkout conversion rate) en het testlogboek van de SEO- en conversietest-routine (`seo-routine-logboek`)\n**Wat:** Zet bij de volgende voor-/na-meting van punt 1/12 een aantekening dat de periode vóór 21-23 sep niet 1-op-1 vergelijkbaar is met erna; vergelijk waar mogelijk op bestellingen/omzet in plaats van sessie-conversieratio, of meet pas vanaf na de meetbreuk.\n**Effect:** Voorkomt een foutieve conclusie (\"de test werkte niet\" of \"de test werkte geweldig\") die eigenlijk een meetartefact is.\n**Inspanning:** 15 minuten, bij de volgende testmeting\n**Gevonden op:** 1 oktober 2026 (Growth Radar, CRO)",
   "controle": null,
   "id": "backlog#42f6eb88",
   "kop": "20. Shopify conversieratio-meetbreuk (21-23 sep 2026) meewegen vóór je volgende CRO-test (nieuw 1 okt 2026)",
   "prioriteit": "P2",
   "prioriteit_effectief": "P2",
   "uitvoerbaar": null,
   "velden": {
    "Gevonden op": "1 oktober 2026 (Growth Radar, CRO)",
    "Waar": "Shopify Analytics-rapporten (sessies, reached checkout rate, checkout conversion rate) en het testlogboek van de SEO- en conversietest-routine (`seo-routine-logboek`)",
    "Waarom": "Shopify's sessiemeting-update telt sessies en `checkout_started` sinds 21-23 september 2026 anders (geen cutoff meer om middernacht UTC maar bij 30 minuten inactiviteit, sessies zonder pageview tellen nu mee, bot-sessies worden gefilterd). Shopify zelf meldt dat \"Reached checkout rate\" en \"Checkout conversion rate\" hierdoor kunnen verschuiven zonder dat bestellingen of klantgedrag veranderen. Dat valt vlak vóór de geplande pack-prijs-/verzenddrempeltest (punt 1/12, zelfde sectie `snippets/product-information-content.liquid`): een voor-/na-vergelijking via Shopify Analytics riskeert de meetbreuk aan te zien voor testeffect.",
    "Wat": "Zet bij de volgende voor-/na-meting van punt 1/12 een aantekening dat de periode vóór 21-23 sep niet 1-op-1 vergelijkbaar is met erna; vergelijk waar mogelijk op bestellingen/omzet in plaats van sessie-conversieratio, of meet pas vanaf na de meetbreuk."
   }
  },
  {
   "afgevinkt": false,
   "beheer": null,
   "besluit": false,
   "body_md": "**Waarom:** TikTok Shop is sinds 15 juni 2026 officieel live in Nederland en koppelt via een losse app (bijv. SlashCart vanaf $9,99/maand, Optima gratis) rechtstreeks aan Shopify voor productsync, voorraad en orderafhandeling. De hele klantreis — ontdekken, valideren via creators, afrekenen — vindt dan binnen TikTok zelf plaats, met een \"Fast Shipping\"-badge die conversie verder verhoogt. Platformkosten: 2-8% commissie + $0,30 per transactie, plus optioneel 10-20% creator-affiliate-commissie.\n**Waar:** TikTok Seller Center (seller-nl.tiktok.com) + Shopify App Store\n**Wat:** Aanmeldprocedure doorlopen (KVK-gegevens, vier stappen, beoordeling 1-2 werkdagen) en beslissen of dit een los kanaal wordt naast higrip.nl of gecombineerd met het creator-plan (punt 9).\n**Effect:** Extra verkoopkanaal in de grootste groeimarkt (padel) met lagere aankoopdrempel dan doorklikken naar een externe site — vereist wel bewaking van last-click-attributie, die dit verkeer mist.\n**Inspanning:** Verkenning en aanmelding een half dagdeel; app-koppeling en catalogus-setup 1 dag.\n\n---",
   "controle": {
    "bewijs": "Mensenwerk: aanmelding met KVK-gegevens en een besluit van het team.",
    "controle": "Aanmelding TikTok Shop en besluit over het kanaal.",
    "gecontroleerd": "2026-09-25",
    "methode": "geen",
    "uitkomst": "handmatig"
   },
   "id": "backlog#aa7afb12",
   "kop": "13. Onderzoek TikTok Shop Nederland — directe verkoop via Shopify-koppeling (nieuw 18 sep 2026)",
   "prioriteit": "P2",
   "prioriteit_effectief": "P2",
   "uitvoerbaar": {
    "beoordeeld": "2026-09-26",
    "claude": "deels",
    "wat_claude_doet": "Zet de aanmeldstappen, KVK-gegevens en een besliskader voor TikTok Shop op een rij in de vault.",
    "wat_jij_doet": "Aanmelden bij TikTok Shop en het kanaal kiezen."
   },
   "velden": {
    "Waar": "TikTok Seller Center (seller-nl.tiktok.com) + Shopify App Store",
    "Waarom": "TikTok Shop is sinds 15 juni 2026 officieel live in Nederland en koppelt via een losse app (bijv. SlashCart vanaf $9,99/maand, Optima gratis) rechtstreeks aan Shopify voor productsync, voorraad en orderafhandeling. De hele klantreis — ontdekken, valideren via creators, afrekenen — vindt dan binnen TikTok zelf plaats, met een \"Fast Shipping\"-badge die conversie verder verhoogt. Platformkosten: 2-8% commissie + $0,30 per transactie, plus optioneel 10-20% creator-affiliate-commissie.",
    "Wat": "Aanmeldprocedure doorlopen (KVK-gegevens, vier stappen, beoordeling 1-2 werkdagen) en beslissen of dit een los kanaal wordt naast higrip.nl of gecombineerd met het creator-plan (punt 9)."
   }
  },
  {
   "afgevinkt": false,
   "beheer": null,
   "besluit": false,
   "body_md": "**Update 25 sep 2026:** Derde route naast doorklikken en TikTok Shop: Meta's Creator Marketing Hub (wereldwijde uitrol t/m eind 2026) zet een creatorpost met één klik om naar een partnership ad vanaf je eigen account. Werkt pas als punt 10 staat.\n**Waarom:** TikTok Shop converteert op 4,7% — meer dan het dubbele van Instagram. 34% van de Nederlandse 18–35'ers kocht al via social. En: 85% van AI-merkvermeldingen komt uit derde partijen, dus creator-content voedt tegelijk je AI-zichtbaarheid. TikTok Shop is sinds 15 juni 2026 live in Nederland — dat opent een tweede route naast doorklikken naar higrip.nl: verkopen direct in de app via dezelfde creator-commissiestructuur. Zie ook punt 13 hieronder.\n**Aanpak:** Open plan op 10–12% commissie voor volume en reviews, daarna 18–25% voor de best presterende creators.\n**Wachten op:** Punt 7 eerst (eigen videomateriaal) én punt 13 (bepaalt of dit richting higrip.nl, TikTok Shop, of beide wordt ingericht).",
   "controle": {
    "bewijs": "Mensenwerk: afspraken met creators.",
    "controle": "Samenwerking met padel-creators op prestatiebasis.",
    "gecontroleerd": "2026-09-25",
    "methode": "geen",
    "uitkomst": "handmatig"
   },
   "id": "backlog#eb6e2f26",
   "kop": "9. Padel-creators op prestatiebasis in plaats van vaste vergoeding (herzien 18 sep 2026, aangevuld 25 sep 2026)",
   "prioriteit": "P3",
   "prioriteit_effectief": "P3",
   "uitvoerbaar": {
    "beoordeeld": "2026-09-26",
    "claude": "deels",
    "wat_claude_doet": "Schrijft een prestatiemodel (affiliate-%, codes) en een conceptvoorstel voor creators.",
    "wat_jij_doet": "Creators benaderen en afspraken maken."
   },
   "velden": {
    "Waarom": "TikTok Shop converteert op 4,7% — meer dan het dubbele van Instagram. 34% van de Nederlandse 18–35'ers kocht al via social. En: 85% van AI-merkvermeldingen komt uit derde partijen, dus creator-content voedt tegelijk je AI-zichtbaarheid. TikTok Shop is sinds 15 juni 2026 live in Nederland — dat opent een tweede route naast doorklikken naar higrip.nl: verkopen direct in de app via dezelfde creator-commissiestructuur. Zie ook punt 13 hieronder."
   }
  },
  {
   "afgevinkt": false,
   "beheer": null,
   "besluit": false,
   "body_md": "**Update 25 sep 2026:** Op higrip.nl draait op dit moment géén Meta- of TikTok-pixel. Een nieuw geïnstalleerde pixel zonder advertentieverkeer valt precies in Shopify's Optimized-pauzeprofiel. Zet hem daarom bij installatie meteen op **Always on** (Instellingen → Klantgebeurtenissen → App-pixels). Meta's one-click CAPI (sinds 15 apr 2026) staat in Events Manager.\n**Waarom:** Zonder server-side signalen optimaliseert Meta op incomplete data. Relevant zodra je serieus gaat adverteren, niet eerder. Meta verwijderde op 12 januari 2026 de 7- en 28-dagen view-attributievensters uit de Ads Insights API (gerapporteerde conversies daalden 15-40% bij veel adverteerders) en mobiele Safari-pixeltracking is door iOS-privacybeperkingen nagenoeg dood (gaten tot 50-70%). CAPI is daarmee geen latere optimalisatie meer, maar de meetbasis vanaf de eerste advertentie-euro.\n**Wachten op:** Een lopende advertentiebudget-beslissing.\n**Let op:** Zodra die beslissing valt, CAPI vanaf dag 1 inrichten — niet pas toevoegen als de eerste campagnes al lopen.\n\n---",
   "controle": {
    "bewijs": "niet te controleren: geen Meta-koppeling beschikbaar in deze run.",
    "controle": "Is Meta Conversions API ingesteld?",
    "gecontroleerd": "2026-09-26",
    "methode": "shopify",
    "uitkomst": "open"
   },
   "id": "backlog#aa17cef9",
   "kop": "10. Conversions API (CAPI) instellen (herzien 18 sep 2026, aangevuld 25 sep 2026)",
   "prioriteit": "P3",
   "prioriteit_effectief": "P3",
   "uitvoerbaar": {
    "beoordeeld": "2026-09-26",
    "claude": "nee",
    "wat_claude_doet": "Legt de stappen voor CAPI via de Meta-app vast.",
    "wat_jij_doet": "Meta-app in Shopify koppelen en CAPI activeren in Events Manager."
   },
   "velden": {
    "Waarom": "Zonder server-side signalen optimaliseert Meta op incomplete data. Relevant zodra je serieus gaat adverteren, niet eerder. Meta verwijderde op 12 januari 2026 de 7- en 28-dagen view-attributievensters uit de Ads Insights API (gerapporteerde conversies daalden 15-40% bij veel adverteerders) en mobiele Safari-pixeltracking is door iOS-privacybeperkingen nagenoeg dood (gaten tot 50-70%). CAPI is daarmee geen latere optimalisatie meer, maar de meetbasis vanaf de eerste advertentie-euro."
   }
  }
 ],
 "controle": {
  "laatste_run": "2026-09-26T05:04:15+02:00",
  "runs": [
   "2026-09-25",
   "2026-09-26"
  ],
  "telling": {
   "dubbel": 7,
   "gedaan": 10,
   "handmatig": 47,
   "ongecontroleerd": 62,
   "open": 86
  },
  "vandaag_gedaan": [],
  "volgende_run": "dagelijks 05:00"
 },
 "data": {
  "agenda": {
   "bijgewerkt": "2026-09-26T05:47:18+02:00",
   "items": [],
   "status": "niet_gekoppeld",
   "uitleg": "Google Calendar API staat uit in Google Cloud-project higrip-analytics. Koppelen: 1) 'Google Calendar API' aanzetten in project higrip-analytics. 2) Google Agenda van info@higrip.nl → Instellingen en delen → Delen met specifieke personen → ga4-mcp@higrip-analytics.iam.gserviceaccount.com toevoegen met 'Alle afspraakdetails bekijken'. Andere agenda: agenda.calendar_id in 05_Research/_data/instellingen.json."
  },
  "cwv": {
   "bijgewerkt": "2026-10-05T06:13:43+02:00",
   "paginas": [
    {
     "cls": null,
     "fout": "HTTP 429: Quota exceeded for quota metric 'Queries' and limit 'Queries per day' of service 'pagespeedonline.googleapis.com' for consumer 'project_number:583797351490'.",
     "inp_ms": null,
     "lcp_ms": null,
     "score": null,
     "url": "https://www.higrip.nl/"
    },
    {
     "cls": null,
     "fout": "HTTP 429: Quota exceeded for quota metric 'Queries' and limit 'Queries per day' of service 'pagespeedonline.googleapis.com' for consumer 'project_number:583797351490'.",
     "inp_ms": null,
     "lcp_ms": null,
     "score": null,
     "url": "https://www.higrip.nl/products/performance-gripsokken"
    },
    {
     "cls": null,
     "fout": "HTTP 429: Quota exceeded for quota metric 'Queries' and limit 'Queries per day' of service 'pagespeedonline.googleapis.com' for consumer 'project_number:583797351490'.",
     "inp_ms": null,
     "lcp_ms": null,
     "score": null,
     "url": "https://www.higrip.nl/collections/gripsokken"
    }
   ],
   "status": "niet_gekoppeld",
   "uitleg": "PageSpeed Insights API staat uit in Google Cloud-project higrip-analytics. Openbaar quotum op (429). Koppelen: 'PageSpeed Insights API' aanzetten in project higrip-analytics (of een API-sleutel als omgevingsvariabele PAGESPEED_API_KEY). Zonder een van beide deelt het script het openbare quotum en krijgt het 429."
  },
  "instellingen": {
   "agenda": {
    "calendar_id": "info@higrip.nl"
   },
   "doelen": {
    "2026": null,
    "2027": 115000
   },
   "kernwoorden": [
    "gripsokken",
    "gripsokken kopen",
    "wat zijn gripsokken",
    "waarom glijdt mijn voet in mijn padelschoen",
    "tapedesign alternatief"
   ],
   "merchant": {
    "account_id": null
   },
   "team": [
    "Lars",
    "Tigo",
    "Timo"
   ]
  },
  "koppelingen": {
   "bijgewerkt": "2026-09-26T05:47:22+02:00",
   "bronnen": [
    {
     "detail": "323 sessies in 12 weken",
     "hoe_koppelen": "ga4-mcp@higrip-analytics.iam.gserviceaccount.com als Viewer op GA4-property 476032345 (Beheer → Toegangsbeheer voor property) en 'Google Analytics Data API' aan in Google Cloud-project higrip-analytics.",
     "id": "ga4",
     "naam": "Google Analytics 4",
     "soort": "servicesleutel",
     "status": "ok"
    },
    {
     "detail": "https://www.higrip.nl/, data t/m 2026-09-23",
     "hoe_koppelen": "ga4-mcp@higrip-analytics.iam.gserviceaccount.com als gebruiker (Beperkt) in Search Console → Instellingen → Gebruikers en rechten, en 'Google Search Console API' aan in project higrip-analytics.",
     "id": "gsc",
     "naam": "Search Console",
     "soort": "servicesleutel",
     "status": "ok"
    },
    {
     "detail": "Google Calendar API staat uit in Google Cloud-project higrip-analytics.",
     "hoe_koppelen": "1) 'Google Calendar API' aanzetten in project higrip-analytics. 2) Google Agenda van info@higrip.nl → Instellingen en delen → Delen met specifieke personen → ga4-mcp@higrip-analytics.iam.gserviceaccount.com toevoegen met 'Alle afspraakdetails bekijken'. Andere agenda: agenda.calendar_id in 05_Research/_data/instellingen.json.",
     "id": "agenda",
     "naam": "Google Agenda",
     "soort": "servicesleutel",
     "status": "niet_gekoppeld"
    },
    {
     "detail": "Geen merchant.account_id in 05_Research/_data/instellingen.json.",
     "hoe_koppelen": "1) 'Merchant API' aanzetten in project higrip-analytics. 2) Merchant Center → Instellingen → Mensen en toegang → ga4-mcp@higrip-analytics.iam.gserviceaccount.com toevoegen (standaardtoegang). 3) Het Merchant Center-ID invullen als merchant.account_id in 05_Research/_data/instellingen.json.",
     "id": "merchant",
     "naam": "Merchant Center",
     "soort": "servicesleutel",
     "status": "niet_gekoppeld"
    },
    {
     "detail": "PageSpeed Insights API staat uit in Google Cloud-project higrip-analytics. Openbaar quotum op (429).",
     "hoe_koppelen": "'PageSpeed Insights API' aanzetten in project higrip-analytics (of een API-sleutel als omgevingsvariabele PAGESPEED_API_KEY). Zonder een van beide deelt het script het openbare quotum en krijgt het 429.",
     "id": "pagespeed",
     "naam": "PageSpeed Insights",
     "soort": "servicesleutel",
     "status": "niet_gekoppeld"
    },
    {
     "detail": "HTTP 200",
     "hoe_koppelen": "Netwerktoegang tot www.higrip.nl in de omgeving van de routine (cloud: sta het domein toe).",
     "id": "site",
     "naam": "Live site higrip.nl",
     "soort": "script",
     "status": "ok"
    },
    {
     "detail": "shopify.json door de Actiecontrole bijgewerkt op 2026-09-26",
     "hoe_koppelen": "claude.ai op info@ → Instellingen → Connectors → Shopify koppelen",
     "id": "shopify",
     "naam": "Shopify",
     "soort": "connector",
     "status": "ok"
    },
    {
     "detail": "Connector op claude.ai: alleen een routine op info@ kan hem gebruiken en controleren.",
     "hoe_koppelen": "claude.ai op info@ → Instellingen → Connectors → Meta koppelen",
     "id": "meta",
     "naam": "Meta",
     "soort": "connector",
     "status": "onbekend"
    },
    {
     "detail": "Connector op claude.ai: alleen een routine op info@ kan hem gebruiken en controleren.",
     "hoe_koppelen": "claude.ai op info@ → Instellingen → Connectors → Klaviyo koppelen",
     "id": "klaviyo",
     "naam": "Klaviyo",
     "soort": "connector",
     "status": "onbekend"
    },
    {
     "detail": "Connector op claude.ai: alleen een routine op info@ kan hem gebruiken en controleren.",
     "hoe_koppelen": "claude.ai op info@ → Instellingen → Connectors → Buffer koppelen",
     "id": "buffer",
     "naam": "Buffer",
     "soort": "connector",
     "status": "onbekend"
    },
    {
     "detail": "Connector op claude.ai: alleen een routine op info@ kan hem gebruiken en controleren.",
     "hoe_koppelen": "claude.ai op info@ → Instellingen → Connectors → Gmail koppelen",
     "id": "gmail",
     "naam": "Gmail",
     "soort": "connector",
     "status": "onbekend"
    },
    {
     "detail": "Connector op claude.ai: alleen een routine op info@ kan hem gebruiken en controleren.",
     "hoe_koppelen": "claude.ai op info@ → Instellingen → Connectors → Google Drive koppelen",
     "id": "drive",
     "naam": "Google Drive",
     "soort": "connector",
     "status": "onbekend"
    }
   ]
  },
  "kpi": {
   "bijgewerkt": "2026-09-26T05:47:18+02:00",
   "fouten": {},
   "gsc_laatste_dag": "2026-09-23",
   "kernwoorden": [
    {
     "term": "gripsokken",
     "weken": [
      {
       "positie": 3.0,
       "vertoningen": 1,
       "week": "2026-W28"
      },
      {
       "positie": null,
       "vertoningen": 0,
       "week": "2026-W29"
      },
      {
       "positie": 23.8,
       "vertoningen": 4,
       "week": "2026-W30"
      },
      {
       "positie": 16.5,
       "vertoningen": 2,
       "week": "2026-W31"
      },
      {
       "positie": 17.2,
       "vertoningen": 22,
       "week": "2026-W32"
      },
      {
       "positie": 17.3,
       "vertoningen": 15,
       "week": "2026-W33"
      },
      {
       "positie": 16.1,
       "vertoningen": 12,
       "week": "2026-W34"
      },
      {
       "positie": 8.8,
       "vertoningen": 42,
       "week": "2026-W35"
      },
      {
       "positie": 9.9,
       "vertoningen": 54,
       "week": "2026-W36"
      },
      {
       "positie": 5.8,
       "vertoningen": 53,
       "week": "2026-W37"
      },
      {
       "positie": 7.1,
       "vertoningen": 77,
       "week": "2026-W38"
      },
      {
       "positie": 5.4,
       "vertoningen": 43,
       "week": "2026-W39"
      }
     ]
    },
    {
     "term": "gripsokken kopen",
     "weken": [
      {
       "positie": null,
       "vertoningen": 0,
       "week": "2026-W28"
      },
      {
       "positie": null,
       "vertoningen": 0,
       "week": "2026-W29"
      },
      {
       "positie": null,
       "vertoningen": 0,
       "week": "2026-W30"
      },
      {
       "positie": null,
       "vertoningen": 0,
       "week": "2026-W31"
      },
      {
       "positie": null,
       "vertoningen": 0,
       "week": "2026-W32"
      },
      {
       "positie": null,
       "vertoningen": 0,
       "week": "2026-W33"
      },
      {
       "positie": null,
       "vertoningen": 0,
       "week": "2026-W34"
      },
      {
       "positie": null,
       "vertoningen": 0,
       "week": "2026-W35"
      },
      {
       "positie": 18.0,
       "vertoningen": 1,
       "week": "2026-W36"
      },
      {
       "positie": null,
       "vertoningen": 0,
       "week": "2026-W37"
      },
      {
       "positie": 10.0,
       "vertoningen": 3,
       "week": "2026-W38"
      },
      {
       "positie": 14.7,
       "vertoningen": 3,
       "week": "2026-W39"
      }
     ]
    },
    {
     "term": "wat zijn gripsokken",
     "weken": [
      {
       "positie": 9.0,
       "vertoningen": 23,
       "week": "2026-W28"
      },
      {
       "positie": 9.4,
       "vertoningen": 9,
       "week": "2026-W29"
      },
      {
       "positie": 9.0,
       "vertoningen": 12,
       "week": "2026-W30"
      },
      {
       "positie": 9.5,
       "vertoningen": 10,
       "week": "2026-W31"
      },
      {
       "positie": 10.5,
       "vertoningen": 8,
       "week": "2026-W32"
      },
      {
       "positie": 10.8,
       "vertoningen": 11,
       "week": "2026-W33"
      },
      {
       "positie": 9.8,
       "vertoningen": 13,
       "week": "2026-W34"
      },
      {
       "positie": 9.8,
       "vertoningen": 13,
       "week": "2026-W35"
      },
      {
       "positie": 14.0,
       "vertoningen": 13,
       "week": "2026-W36"
      },
      {
       "positie": 9.0,
       "vertoningen": 11,
       "week": "2026-W37"
      },
      {
       "positie": 8.6,
       "vertoningen": 12,
       "week": "2026-W38"
      },
      {
       "positie": 9.0,
       "vertoningen": 4,
       "week": "2026-W39"
      }
     ]
    },
    {
     "term": "waarom glijdt mijn voet in mijn padelschoen",
     "weken": [
      {
       "positie": null,
       "vertoningen": 0,
       "week": "2026-W28"
      },
      {
       "positie": null,
       "vertoningen": 0,
       "week": "2026-W29"
      },
      {
       "positie": null,
       "vertoningen": 0,
       "week": "2026-W30"
      },
      {
       "positie": null,
       "vertoningen": 0,
       "week": "2026-W31"
      },
      {
       "positie": null,
       "vertoningen": 0,
       "week": "2026-W32"
      },
      {
       "positie": null,
       "vertoningen": 0,
       "week": "2026-W33"
      },
      {
       "positie": null,
       "vertoningen": 0,
       "week": "2026-W34"
      },
      {
       "positie": null,
       "vertoningen": 0,
       "week": "2026-W35"
      },
      {
       "positie": null,
       "vertoningen": 0,
       "week": "2026-W36"
      },
      {
       "positie": null,
       "vertoningen": 0,
       "week": "2026-W37"
      },
      {
       "positie": null,
       "vertoningen": 0,
       "week": "2026-W38"
      },
      {
       "positie": null,
       "vertoningen": 0,
       "week": "2026-W39"
      }
     ]
    },
    {
     "term": "tapedesign alternatief",
     "weken": [
      {
       "positie": null,
       "vertoningen": 0,
       "week": "2026-W28"
      },
      {
       "positie": null,
       "vertoningen": 0,
       "week": "2026-W29"
      },
      {
       "positie": null,
       "vertoningen": 0,
       "week": "2026-W30"
      },
      {
       "positie": null,
       "vertoningen": 0,
       "week": "2026-W31"
      },
      {
       "positie": null,
       "vertoningen": 0,
       "week": "2026-W32"
      },
      {
       "positie": null,
       "vertoningen": 0,
       "week": "2026-W33"
      },
      {
       "positie": null,
       "vertoningen": 0,
       "week": "2026-W34"
      },
      {
       "positie": null,
       "vertoningen": 0,
       "week": "2026-W35"
      },
      {
       "positie": null,
       "vertoningen": 0,
       "week": "2026-W36"
      },
      {
       "positie": null,
       "vertoningen": 0,
       "week": "2026-W37"
      },
      {
       "positie": null,
       "vertoningen": 0,
       "week": "2026-W38"
      },
      {
       "positie": null,
       "vertoningen": 0,
       "week": "2026-W39"
      }
     ]
    }
   ],
   "status": "ok",
   "weken": [
    {
     "aankopen": 0,
     "conversie": 0.0,
     "gebruikers": 0,
     "gsc_ctr": 4.34,
     "gsc_klikken": 15,
     "gsc_positie": 13.8,
     "gsc_vertoningen": 346,
     "omzet": 0.0,
     "sessies": 0,
     "sessies_nl": 0,
     "start": "2026-07-06",
     "week": "2026-W28"
    },
    {
     "aankopen": 0,
     "conversie": 0.0,
     "gebruikers": 0,
     "gsc_ctr": 6.03,
     "gsc_klikken": 21,
     "gsc_positie": 9.6,
     "gsc_vertoningen": 348,
     "omzet": 0.0,
     "sessies": 0,
     "sessies_nl": 0,
     "start": "2026-07-13",
     "week": "2026-W29"
    },
    {
     "aankopen": 0,
     "conversie": 0.0,
     "gebruikers": 0,
     "gsc_ctr": 0.99,
     "gsc_klikken": 3,
     "gsc_positie": 10.6,
     "gsc_vertoningen": 303,
     "omzet": 0.0,
     "sessies": 0,
     "sessies_nl": 0,
     "start": "2026-07-20",
     "week": "2026-W30"
    },
    {
     "aankopen": 0,
     "conversie": 0.0,
     "gebruikers": 0,
     "gsc_ctr": 3.18,
     "gsc_klikken": 11,
     "gsc_positie": 13.9,
     "gsc_vertoningen": 346,
     "omzet": 0.0,
     "sessies": 0,
     "sessies_nl": 0,
     "start": "2026-07-27",
     "week": "2026-W31"
    },
    {
     "aankopen": 0,
     "conversie": 0.0,
     "gebruikers": 0,
     "gsc_ctr": 2.03,
     "gsc_klikken": 8,
     "gsc_positie": 12.9,
     "gsc_vertoningen": 394,
     "omzet": 0.0,
     "sessies": 0,
     "sessies_nl": 0,
     "start": "2026-08-03",
     "week": "2026-W32"
    },
    {
     "aankopen": 0,
     "conversie": 0.0,
     "gebruikers": 0,
     "gsc_ctr": 2.74,
     "gsc_klikken": 16,
     "gsc_positie": 10.8,
     "gsc_vertoningen": 585,
     "omzet": 0.0,
     "sessies": 0,
     "sessies_nl": 0,
     "start": "2026-08-10",
     "week": "2026-W33"
    },
    {
     "aankopen": 0,
     "conversie": 0.0,
     "gebruikers": 0,
     "gsc_ctr": 2.29,
     "gsc_klikken": 17,
     "gsc_positie": 10.6,
     "gsc_vertoningen": 742,
     "omzet": 0.0,
     "sessies": 0,
     "sessies_nl": 0,
     "start": "2026-08-17",
     "week": "2026-W34"
    },
    {
     "aankopen": 0,
     "conversie": 0.0,
     "gebruikers": 4,
     "gsc_ctr": 1.78,
     "gsc_klikken": 15,
     "gsc_positie": 11.4,
     "gsc_vertoningen": 841,
     "omzet": 0.0,
     "sessies": 4,
     "sessies_nl": 0,
     "start": "2026-08-24",
     "week": "2026-W35"
    },
    {
     "aankopen": 0,
     "conversie": 0.0,
     "gebruikers": 47,
     "gsc_ctr": 3.88,
     "gsc_klikken": 37,
     "gsc_positie": 11.5,
     "gsc_vertoningen": 953,
     "omzet": 0.0,
     "sessies": 61,
     "sessies_nl": 52,
     "start": "2026-08-31",
     "week": "2026-W36"
    },
    {
     "aankopen": 0,
     "conversie": 0.0,
     "gebruikers": 75,
     "gsc_ctr": 4.57,
     "gsc_klikken": 48,
     "gsc_positie": 9.3,
     "gsc_vertoningen": 1050,
     "omzet": 0.0,
     "sessies": 87,
     "sessies_nl": 67,
     "start": "2026-09-07",
     "week": "2026-W37"
    },
    {
     "aankopen": 2,
     "conversie": 1.63,
     "gebruikers": 98,
     "gsc_ctr": 3.47,
     "gsc_klikken": 37,
     "gsc_positie": 8.6,
     "gsc_vertoningen": 1065,
     "omzet": 26.25,
     "sessies": 123,
     "sessies_nl": 52,
     "start": "2026-09-14",
     "week": "2026-W38"
    },
    {
     "aankopen": 1,
     "conversie": 2.08,
     "gebruikers": 34,
     "gsc_ctr": 3.49,
     "gsc_klikken": 16,
     "gsc_positie": 8.1,
     "gsc_vertoningen": 458,
     "omzet": 41.99,
     "sessies": 48,
     "sessies_nl": 36,
     "start": "2026-09-21",
     "week": "2026-W39"
    }
   ]
  },
  "shopify": {
   "bijgewerkt": "2026-10-05T10:25:08+02:00",
   "dagen": [
    {
     "dag": "2026-07-07",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-07-08",
     "omzet": 51.73,
     "orders": 2
    },
    {
     "dag": "2026-07-09",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-07-10",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-07-11",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-07-12",
     "omzet": 34.48,
     "orders": 1
    },
    {
     "dag": "2026-07-13",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-07-14",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-07-15",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-07-16",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-07-17",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-07-18",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-07-19",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-07-20",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-07-21",
     "omzet": 83.98,
     "orders": 1
    },
    {
     "dag": "2026-07-22",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-07-23",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-07-24",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-07-25",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-07-26",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-07-27",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-07-28",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-07-29",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-07-30",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-07-31",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-08-01",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-08-02",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-08-03",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-08-04",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-08-05",
     "omzet": 41.99,
     "orders": 1
    },
    {
     "dag": "2026-08-06",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-08-07",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-08-08",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-08-09",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-08-10",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-08-11",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-08-12",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-08-13",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-08-14",
     "omzet": 143.92,
     "orders": 4
    },
    {
     "dag": "2026-08-15",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-08-16",
     "omzet": 107.94,
     "orders": 2
    },
    {
     "dag": "2026-08-17",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-08-18",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-08-19",
     "omzet": 35.98,
     "orders": 1
    },
    {
     "dag": "2026-08-20",
     "omzet": 35.98,
     "orders": 1
    },
    {
     "dag": "2026-08-21",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-08-22",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-08-23",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-08-24",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-08-25",
     "omzet": 158.91,
     "orders": 2
    },
    {
     "dag": "2026-08-26",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-08-27",
     "omzet": 35.98,
     "orders": 1
    },
    {
     "dag": "2026-08-28",
     "omzet": 59.96,
     "orders": 2
    },
    {
     "dag": "2026-08-29",
     "omzet": 38.23,
     "orders": 1
    },
    {
     "dag": "2026-08-30",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-08-31",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-09-01",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-09-02",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-09-03",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-09-04",
     "omzet": 44.97,
     "orders": 1
    },
    {
     "dag": "2026-09-05",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-09-06",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-09-07",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-09-08",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-09-09",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-09-10",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-09-11",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-09-12",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-09-13",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-09-14",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-09-15",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-09-16",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-09-17",
     "omzet": 30.75,
     "orders": 2
    },
    {
     "dag": "2026-09-18",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-09-19",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-09-20",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-09-21",
     "omzet": 41.99,
     "orders": 1
    },
    {
     "dag": "2026-09-22",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-09-23",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-09-24",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-09-25",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-09-26",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-09-27",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-09-28",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-09-29",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-09-30",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-10-01",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-10-02",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-10-03",
     "omzet": 0.0,
     "orders": 0
    },
    {
     "dag": "2026-10-04",
     "omzet": 75.4,
     "orders": 2
    },
    {
     "dag": "2026-10-05",
     "omzet": 0.0,
     "orders": 0
    }
   ],
   "ytd": {
    "omzet": 1569.53,
    "orders": 39
   }
  },
  "sync": {
   "door": "growth-radar",
   "laatste_sync": "2026-10-06T05:50:45+02:00",
   "overgeslagen": 0,
   "toegepast": 1
  }
 },
 "gebouwd": "2026-10-07T08:44:28+00:00",
 "kaart_md": "# Waar staat wat — onderzoek, routines en werkbestanden\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n> Kaart van alle plekken waar HÏ Grip-onderzoek, routines en werkbestanden leven. De vault is de bron van waarheid; het dashboard toont wat hier staat. Bijgewerkt 2026-10-02.\n\n| Wat | Waar | Bijgewerkt | Hoe kom je erbij |\n|---|---|---|---|\n| **Onderzoeksnotities** (één bestand per onderzoek, vast formaat) | `05_Research\\` in de vault | bij elk onderzoek (routine of los) | Obsidian, of het dashboard (feed + detailpaneel) |\n| **Dashboard** | HÏ Grip Research Dashboard (artifact, gepind in de sidebar) | na elke build/publish | link in [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md) en `CLAUDE.md` §15; bewerken alleen met interact-rechten |\n| **Register + buildscript** | `05_Research\\_build\\` (`build_register.py`, `register.js`, `PROCEDURE.md`) | bij elke build | `python 05_Research\\_build\\build_register.py` |\n| **Dashboard-bron (HTML)** | `05_Research\\_dashboard\\index.html` | bij elke wijziging aan de pagina | publish volgens `PROCEDURE.md` |\n| **Actiebacklog** (één backlog voor alle routines, P1/P2/P3) | `05_Research\\_backlog\\ACTIEBACKLOG.md` + `AFGEROND.md` (sinds 25-09 in de vault) | door de routines | Obsidian, of de pagina Acties in het dashboard |\n| **Geheugen van de routines** (anti-herhaling) | `05_Research\\_geheugen\\<routine>.md`; de regel staat in `_geheugen\\README.md` | aan het eind van elke run | Obsidian |\n| **Feiten** (prijzen, handles, URL's, ID's, claims) | [Feiten & Actuele Staat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) (`00_Brand_Core\\`) | bij elke wijziging of live afwijking | Obsidian; routines lezen dit als eerste |\n| **Gedeelde Claude-instructies** | `CLAUDE.md` in de hoofdmap van de vault | bij merk- of werkafspraak | laadt automatisch bij elke Claude die in de vault werkt |\n| **Routine-prompts + rolverdeling** | `04_Agent_Infrastructuur\\Routines\\` (`README.md` = rolverdeling en status) | bij wijziging van een routine | Obsidian; de routines op info@ verwijzen hiernaar |\n| **Growth-radar-dagrapporten (archief)** | `C:\\Users\\Test\\.claude\\research\\growth-radar\\rapporten\\` (tot 25-09) | — | nieuwe rapporten staan alleen als notitie in `05_Research\\` |\n| **Geplande lokale routines** | `C:\\Users\\Test\\.claude\\scheduled-tasks\\` | — | **staan sinds 25-09 uit**; alle routines draaien als cloudroutine op info@ (status en tijden: `04_Agent_Infrastructuur\\Routines\\README.md`) |\n| **Denzel-weekoverzicht** (cloud-routine, maandag; tijd in de Routines-README) | claude.ai routine `trig_01D9XwMiVvuq1FWr7CLoYTmN`; beschrijving in [Denzel Weekoverzicht — Routine](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Denzel%20Weekoverzicht%20%E2%80%94%20Routine.md); output tot 14-09 in `04_Agent_Infrastructuur\\Beheer\\Weekoverzicht\\`, daarna `05_Research\\JJJJ-MM-DD-weekoverzicht.md` | wekelijks | claude.ai → Routines (account info@higrip.nl) |\n| **Skills / commands** (`/shopify-seo`, `/research-nieuw`, `/research-sync`, …) | `C:\\Users\\Test\\.claude\\commands\\*.md` | bij wijziging | typ `/naam` in Claude Code |\n| **Claude-geheugen** (werkafspraken, projectcontext) | `C:\\Users\\Test\\.claude\\memory\\` (`MEMORY.md` = index) | bij nieuwe afspraak | wordt automatisch geladen; `project_higrip.md` = webshopcontext, `project_higrip_seo.md` = audit sep 2026 |\n| **Merkregels voor Claude** | `C:\\Users\\Test\\.claude\\CLAUDE.md` | bij merkbesluit | wordt automatisch geladen in elke sessie |\n| **Plannen** | `C:\\Users\\Test\\.claude\\plans\\` | per project | bestanden; `research-dashboard.md` = dit systeem |\n| **Projectmappen** | `C:\\Users\\Test\\.claude\\projects\\higrip-padel\\`, `higrip-redesign\\`, `higrip-skisokken\\` | per project | bestanden (Liquid/CSS-werk, geen onderzoek) |\n| **Shopify-thema (werkkopie)** | thema-ID's en lokale werkmappen staan alleen in [Technische Procedures](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Technische%20Procedures.md) | bij themawerk | Shopify CLI — eerst `shopify theme list`, nooit naar live zonder opdracht van Lars |\n| **Website-analyse in de vault** | `03_Website_Agent\\Analyse\\` ([Stand van Zaken — Werkdossier 2026-09-04](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Analyse/Stand%20van%20Zaken%20%E2%80%94%20Werkdossier%202026-09-04.md), [Analytics & KPI Dashboard](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Analyse/Analytics%20%26%20KPI%20Dashboard.md), [Conversie Optimalisatie Checklist](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Analyse/Conversie%20Optimalisatie%20Checklist.md)) | bij audit | Obsidian |\n| **Doorgevoerde themawijzigingen** | [Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md) (`03_Website_Agent\\Technisch\\`) | bij elke push | Obsidian |\n| **Procesleerpunten agents** | [Feedback & Iteratie Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Feedback%20%26%20Iteratie%20Log.md) (`04_Agent_Infrastructuur\\Beheer\\`) | per iteratie | Obsidian |\n| **Compliance** | [Compliance To-Do Lijst](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Compliance/Compliance%20To-Do%20Lijst.md) (`00_Brand_Core\\Compliance\\`) + notitie `2026-09-07-compliance-todo` | 2026-09-14 | Obsidian / dashboard |\n| **Archief (oud werk)** | `C:\\Users\\Test\\.claude\\archief\\` met `README.md` | 2026-09-17 | bestanden; KNVB-scraper en oude landingsprojecten |\n| **KNVB-clubdata (B2B-outreach)** | `C:\\Users\\Test\\.claude\\archief\\knvb-scraper\\` (`knvb_clubs_v7.xlsx` = deliverable) | 2026-06-23 | zie `memory\\project_knvb_scraper.md` |\n\n## Alle notities in deze map (automatisch)\n\nBijgewerkt door `04_Agent_Infrastructuur/Beheer/vault_nav.py`. Niet met de hand bewerken; draai het script opnieuw.\n\n### Hoofdmap\n- [2026-10-06-growth-radar-seo-content](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-06-growth-radar-seo-content.md)\n- [2026-10-06-dashboard-v4-opruimen-focusvensters](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-06-dashboard-v4-opruimen-focusvensters.md)\n- [2026-10-05-weekoverzicht](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-05-weekoverzicht.md)\n- [2026-10-05-seo-conversietest-run-3](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-05-seo-conversietest-run-3.md)\n- [2026-10-05-regressiecheck](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-05-regressiecheck.md)\n- [2026-10-05-growth-radar-seo-technisch](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-05-growth-radar-seo-technisch.md)\n- [2026-10-04-dashboard-herindeling-ai-mail-koppelingen](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-04-dashboard-herindeling-ai-mail-koppelingen.md)\n- [2026-10-04-dashboard-efferd-volgorde-cijfers](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-04-dashboard-efferd-volgorde-cijfers.md)\n- [2026-10-04-dashboard-bruikbaarheidsaudit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-04-dashboard-bruikbaarheidsaudit.md)\n- [2026-10-03-growth-radar-social-content](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-03-growth-radar-social-content.md)\n- [2026-10-03-dashboard-agenda-mail-ads-leveranciers](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-03-dashboard-agenda-mail-ads-leveranciers.md)\n- [2026-10-02-vault-review](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-02-vault-review.md)\n- [2026-10-02-obsidian-structuur-ai-agents](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-02-obsidian-structuur-ai-agents.md)\n- [2026-10-02-navigatie-en-takentijdlijn](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-02-navigatie-en-takentijdlijn.md)\n- [2026-10-02-growth-radar-social](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-02-growth-radar-social.md)\n- [2026-10-02-dashboard-ontwerpregels-kpi](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-02-dashboard-ontwerpregels-kpi.md)\n- [2026-10-02-dashboard-apps-patronen](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-02-dashboard-apps-patronen.md)\n- [2026-10-02-ai-in-het-dashboard](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-02-ai-in-het-dashboard.md)\n- [2026-10-01-growth-radar-cro](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-01-growth-radar-cro.md)\n- [2026-09-30-search-console](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-30-search-console.md)\n- [2026-09-30-growth-radar-ai-search](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-30-growth-radar-ai-search.md)\n- [2026-09-29-growth-radar-seo-content](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-29-growth-radar-seo-content.md)\n- [2026-09-29-crm-dashboard-voorstel](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-29-crm-dashboard-voorstel.md)\n- [2026-09-28-weekoverzicht](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-28-weekoverzicht.md)\n- [2026-09-28-seo-conversietest-run-2](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-28-seo-conversietest-run-2.md)\n- [2026-09-28-regressiecheck](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-28-regressiecheck.md)\n- [2026-09-28-optimalisatiecheck-werkwijze-routines-en-dashboard](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-28-optimalisatiecheck-werkwijze-routines-en-dashboard.md)\n- [2026-09-28-growth-radar-seo-technisch](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-28-growth-radar-seo-technisch.md)\n- [2026-09-26-onderzoek-nieuwe-routines](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-26-onderzoek-nieuwe-routines.md)\n- [2026-09-26-dashboard-ux-onderzoek](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-26-dashboard-ux-onderzoek.md)\n- [2026-09-25-seo-audit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-25-seo-audit.md)\n- [2026-09-25-search-console](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-25-search-console.md)\n- [2026-09-25-growth-radar-social](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-25-growth-radar-social.md)\n- [2026-09-25-evaluatie-routines](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-25-evaluatie-routines.md)\n- [2026-09-24-upfront-bestelvolume-schatting](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-24-upfront-bestelvolume-schatting.md)\n- [2026-09-24-growth-radar-cro](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-24-growth-radar-cro.md)\n- [2026-09-24-financieel-plan-2027-2031-bmc-2031](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-24-financieel-plan-2027-2031-bmc-2031.md)\n- [2026-09-23-seo-conversietest-run-1](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-23-seo-conversietest-run-1.md)\n- [2026-09-23-growth-radar-ai-search](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-23-growth-radar-ai-search.md)\n- [2026-09-22-growth-radar-seo-content](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-22-growth-radar-seo-content.md)\n- [2026-09-21-weekoverzicht](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-21-weekoverzicht.md)\n- [2026-09-21-regressiecheck](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-21-regressiecheck.md)\n- [2026-09-21-growth-radar-seo-technisch](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-21-growth-radar-seo-technisch.md)\n- [2026-09-21-beachhead-rugby](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-21-beachhead-rugby.md)\n- [2026-09-18-growth-radar-social](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-18-growth-radar-social.md)\n- [2026-09-17-growth-radar-cro](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-17-growth-radar-cro.md)\n- [2026-09-16-seo-onderzoek-cloud-routine-website](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-16-seo-onderzoek-cloud-routine-website.md)\n- [2026-09-16-growth-radar-ai-search](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-16-growth-radar-ai-search.md)\n- [2026-09-15-seo-audit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-15-seo-audit.md)\n- [2026-09-15-regressiecheck](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-15-regressiecheck.md)\n- [2026-09-15-growth-radar-seo-content](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-15-growth-radar-seo-content.md)\n- [2026-09-15-growth-radar-basislijn](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-15-growth-radar-basislijn.md)\n- [2026-09-14-weekoverzicht](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-14-weekoverzicht.md)\n- [2026-09-07-weekoverzicht](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-07-weekoverzicht.md)\n- [2026-09-07-compliance-todo](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-07-compliance-todo.md)\n- [2026-09-04-werkdossier-stand-van-zaken](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-04-werkdossier-stand-van-zaken.md)\n- [2026-09-03-analytics-kpi-meetgat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-03-analytics-kpi-meetgat.md)\n- [2026-08-31-weekoverzicht](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-08-31-weekoverzicht.md)\n- [2026-08-24-weekoverzicht](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-08-24-weekoverzicht.md)\n\n### _backlog\n- [ACTIEBACKLOG](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/_backlog/ACTIEBACKLOG.md)\n- [AFGEROND](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/_backlog/AFGEROND.md)\n\n### _build\n- PROCEDURE\n\n### _geheugen\n- [_geheugen/README](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/_geheugen/README.md)\n- [_geheugen/actiecontrole](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/_geheugen/actiecontrole.md)\n- [backlinks-merchant](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/_geheugen/backlinks-merchant.md)\n- [concurrentie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/_geheugen/concurrentie.md)\n- [denzel-week](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/_geheugen/denzel-week.md)\n- [growth-radar](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/_geheugen/growth-radar.md)\n- [_geheugen/klantstem](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/_geheugen/klantstem.md)\n- [materialen](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/_geheugen/materialen.md)\n- [_geheugen/productradar](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/_geheugen/productradar.md)\n- [search-console](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/_geheugen/search-console.md)\n- [seo-conversietest](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/_geheugen/seo-conversietest.md)\n- [_geheugen/seo-regressiecheck](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/_geheugen/seo-regressiecheck.md)\n- [strategie-maand](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/_geheugen/strategie-maand.md)\n- [_geheugen/uitvoerder](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/_geheugen/uitvoerder.md)\n- [verbanden](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/_geheugen/verbanden.md)\n- [_geheugen/website-ux](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/_geheugen/website-ux.md)\n",
 "notities": [
  {
   "acties": [],
   "body_md": "# Growth Radar — SEO content & keywords (geen kwalificerende vondst)\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\nGeen relevante ontwikkelingen vandaag binnen de dagfocus long-tails, sportlandingspagina's en SERP-features. Er is geen nieuwe `*-concurrentie.md` gepubliceerd (Concurrentie-monitor draait nog niet op info@), dus daar was ook niets te herhalen of te volgen.\n\n## Bevindingen\n### Gecontroleerd, niet opgenomen\n- **Long-tail-keywordonderzoek voor e-commerce (diverse 2026-artikelen):** de onderliggende cijfers (bijv. \"92% van alle zoekopdrachten krijgt minder dan 10 zoekopdrachten per maand\") zijn een Ahrefs-analyse uit 2024 die in 2026-blogs wordt herhaald — niet nieuw, en de artikelen zelf staan niet op de toegestane bronnenlijst (generieke contentbureaus, geen eigen dataset).\n- **\"Things to know\"-SERP-feature zou verplaatst zijn naar de rechterkolom en samenvoegen met het Knowledge Panel:** alleen gemeld door niet-toegestane bronnen (SEO-blogs buiten de lijst), zonder vindbare, gedateerde bevestiging van Google zelf of Search Engine Land/Roundtable. Niet opgenomen.\n- **AI Overviews/AI Mode-cijfers voor e-commerce (bereik, percentage queries):** horen bij de AI-search-dagfocus van woensdag, niet bij vandaag; bovendien grotendeels herhaling van wat al in het geheugen staat (31% AI-zoekers, 5,53% vs 3,7% conversie, basislijn §2).\n- **Generieke sport-e-commerce-SEO-tips (padel/voetbal/tennis):** adviesartikelen zonder eigen meetdata of herleidbare primaire bron (magentobrain, wisepim, fortismedia e.d.) — genegeerd per de contentfarm-regel.\n- **Google's `google.com/goto`-redirect op zoekresultaatlinks:** wél een stevige, goed onderbouwde vondst — Google bevestigde op 26 augustus 2026 aan Search Engine Land dat klikken op zoekresultaten voortaan via een geëncodeerde `google.com/goto`-redirect lopen; rank-trackers (Semrush, Ahrefs, SerpApi, SISTRIX, AccuRanker) moesten hun meetmethode herbouwen, en oktober 2026 is de eerste maand met weer vergelijkbare data. Search Console zelf blijft onaangetast (de wijziging zit in de resultatenpagina, niet op de eigen site). Dit is inhoudelijk een Google-updatenieuws, exact de dagfocus van maandag (SEO-techniek) — niet van vandaag. Niet opgenomen in deze notitie; komt terug bij de volgende maandag-run als het dan nog nieuw is.\n\n## Wat niet lukte\nGeen toegangsproblemen. De bronnen zelf waren ontoereikend (niet op de bronnenlijst, geen datum, of al bekend), met uitzondering van de `goto`-redirect — die viel af op dagfocus, niet op kwaliteit.\n\n## Bronnen\n- [Google's /goto Redirect Links Are Breaking SEO Rank Trackers — webepex.com, samenvatting SEL-bevestiging 26 aug 2026](https://webepex.com/blog/google-goto-redirect-rank-trackers)\n- [Google's New /goto Redirect URLs: Resolution in Progress — SerpApi](https://serpapi.com/blog/googles-new-goto-redirect-urls-resolution-in-progress/)\n\n## Aantekeningen",
   "bron": "routine",
   "bronbestand": "",
   "bronbestand_url": null,
   "categorie": "SEO",
   "datum": "2026-10-06",
   "deadline": "",
   "gerelateerd": [
    "2026-09-29-growth-radar-seo-content",
    "2026-09-22-growth-radar-seo-content",
    "2026-09-30-search-console"
   ],
   "id": "2026-10-06-growth-radar-seo-content",
   "kansen": [],
   "kerncijfers": [],
   "kerntitel": "Geen nieuwe contentkans deze dinsdag; vondsten vallen af op bron of dagfocus",
   "prioriteit": "P3",
   "routine": "growth-radar",
   "samenvatting": "Geen van de vandaag gevonden berichten over long-tails, sportlandingspagina's of SERP-features haalde de drempel van een primaire bron, nieuwheid of een concrete koppeling aan higrip.nl. Eén bevestigde, goed onderbouwde vondst (Google's google.com/goto-redirect op zoekresultaten) hoort inhoudelijk bij de SEO-techniek-dagfocus van maandag en is daarom niet opgenomen.",
   "status": "nieuw",
   "titel": "Growth Radar — SEO content & keywords (geen kwalificerende vondst)",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-06-growth-radar-seo-content.md",
   "vervangt": [],
   "wat_niet_lukte": "Geen toegangsproblemen. De bronnen zelf waren ontoereikend (niet op de bronnenlijst, geen datum, of al bekend), met uitzondering van de `goto`-redirect — die viel af op dagfocus, niet op kwaliteit."
  },
  {
   "acties": [
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-10-06-dashboard-v4-opruimen-focusvensters#253466b7",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "Besluit: wordt v4 het enige prototype dat we verder uitwerken, en zetten we het (met het v4-handboek) op het gedeelde info@-account?",
     "uitvoerbaar": null
    }
   ],
   "body_md": "# Dashboard v4 — opruimen op een kopie: focusvensters, live Shopify en alle modules zonder tabbladen\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\n- **Werkwijze:** Timo wil dat het origineel altijd terug kan. v3.1 (https://claude.ai/artifact/XPnRocf1ZcG1J7pb82QBHy) blijft daarom ongewijzigd; alle opruimwerk zit in een kopie, v4 (https://claude.ai/artifact/YUpv4tvpeUfNxQ2Bj3ahYj). Het plan staat in `plans/dashboard-v4-plan.md`.\n- **Regels voor v4:** één hoofdknop per pagina, hooguit 3 filters plus zoeken, elke actie in maximaal 2 klikken, geen informatie op twee plekken (een cijfer mag dubbel staan als het naar één bron klikt, een lijst niet).\n- **Stap 1 t/m 9 zijn af (4 t/m 6 oktober).** De bouwstand staat in plan §7.\n\n## Kerncijfers\n- **210** · geslaagde regels in de functionele test van v4 (`test.py`)\n- **22** · geslaagde regels in de AI-test met nagemaakte AI (`_harness_ai.js`)\n- **9** · geslaagde regels in de test van de live Shopify-paden met een nagemaakte connector (`_harness_live.js`)\n- **0** · fouten in alle drie de testruns (ERRS:0, gemeten 7 oktober)\n\n## Acties\n\n- [ ] P3 · Besluit: wordt v4 het enige prototype dat we verder uitwerken, en zetten we het (met het v4-handboek) op het gedeelde info@-account?\n\n## Bevindingen\n\n### Doorklikken is dieper, geen nieuwe pagina\n- Elk blok opent een **groot focusvenster** (`layer.js`). Klik je daarin verder, dan ga je een laag dieper; ← gaat één laag terug, Esc sluit.\n- Voorbeeld: Omzet → maand → klant → order.\n- Relaties, orders, teamorders, leveranciers, notities en routines zijn ook focusvensters. Een link ernaartoe opent het venster ter plekke, over de pagina waar je bent.\n- Op de telefoon sluit elke laag met de terugknop, omlaag vegen of een vaste Sluiten-balk. Tabellen worden kaarten met de kolomnaam bij elk getal.\n\n### Wacht op jou in plaats van een Inbox\n- Een icoon met teller in de bovenbalk opent een paneel van rechts met *Akkoord nodig* en *Signalen*.\n- AI-mailantwoorden keur je goed in Mail zelf, niet in het paneel.\n\n### Modules na stap 3 t/m 9\n| Stap | Module | Resultaat |\n|---|---|---|\n| 2–3 | To do, Home | Eén lijst met wissel Lijst ↔ Bord; Home = 4 KPI's, omzet als vlakgrafiek, donut, Vraagt aandacht, dagagenda en snelle acties |\n| 4 | CRM | Eigen fases per soort: B2B met Offerte, creators, partnerships & events; bord ↔ lijst |\n| 5 | Orders | Webshop en B2B in één lijst; Financiën › Facturen is erin opgegaan |\n| 6 | Webshop | Analyse · Producten · Klanten · Site & SEO, live uit Shopify |\n| 7 | Mail, Agenda, Notities, Content | Zonder tabbladen; Agenda ook per dag, afspraak met voorbereiding en actiepunten die naar To do gaan |\n| 8 | Ads, Inkoop, Financiën | Ads = Campagnes · Concurrenten; Financiën is één pagina met uitgaventabel |\n| 9 | Research, Bestanden, AI, Instellingen | Research = Onderzoeken · Acties & besluiten; Instellingen heeft nog 6 onderdelen |\n\n### Webshop live uit Shopify\n- De pagina leest via de Shopify-koppeling van wie kijkt (capability `mcp`, alleen-lezen tools `list-orders`, `get-order`, `run-analytics-query`, `search_products`, `list-customers`) en ververst elke 2 minuten. Er wordt niets opgeslagen in het dashboard en niets in Shopify gewijzigd.\n- Zonder koppeling toont de pagina de vault-stand met uitleg.\n- **Voorraad blijft centraal in het dashboard.** Shopify houdt geen voorraad bij, dus negatieve aantallen daar zijn geen probleem. Webshop › Producten toont alleen de centrale voorraad.\n- Klantnamen tonen is akkoord van Timo. In de echte app mag Shopify ook schrijven; dat akkoord geeft Timo zelf.\n\n### Pagina's die naar elkaar doorkoppelen\n- Een contentidee heeft *Uitwerking en notities* en *Productie*: een shootdag in de agenda en voorbereidingstaken in To do, die terug linken naar de post.\n- De omzetvensters op Home hebben een knop naar Financiën, met openstaand, uitgaven en saldo een laag dieper.\n- Een B2B-relatie heeft *Afspraken & gegevens*: prijslijst en korting, betaaltermijn, levertijd, minimum, verzending en een afsprakenlog.\n\n### Techniek en afspraken\n- Nieuwe bronbestanden in `prototype-bron/v4` o.a. `layer.js`, `drag.js`, `orders.js`, `webshop.js`, `v4.css`. De data gaat in de echte app via Supabase, niet Neon.\n- Let op naambotsingen bij nieuwe bestanden (`nf`, `UI.mf`, `.day`, `.mbar`).\n- Het handboek v4 staat los van het v3-handboek: https://claude.ai/artifact/UDYtF4nrKv813joETE8pSq.\n\n## Wat niet lukte\nVolledige crawl (alle routes, 1440 en 500 px) is bij deze registratie niet opnieuw gedraaid; een volledige run duurt meer dan 15 minuten per drie routes. Het Research Dashboard (info@) is niet bijgewerkt: deze registratie liep vanaf het persoonlijke account, dat het artifact niet kan lezen. Publiceren en `/research-sync` moeten vanaf info@.\n\n## Bronnen\n- Plan en bouwstand: `C:\\Users\\Test\\.claude\\plans\\dashboard-v4-plan.md` (§7), modules in `plans\\modules\\`.\n- Prototype v4: https://claude.ai/artifact/YUpv4tvpeUfNxQ2Bj3ahYj · origineel v3.1: https://claude.ai/artifact/XPnRocf1ZcG1J7pb82QBHy\n- Eerder: [2026-10-04-dashboard-efferd-volgorde-cijfers](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-04-dashboard-efferd-volgorde-cijfers.md), [2026-10-04-dashboard-bruikbaarheidsaudit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-04-dashboard-bruikbaarheidsaudit.md), [2026-10-04-dashboard-herindeling-ai-mail-koppelingen](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-04-dashboard-herindeling-ai-mail-koppelingen.md), [2026-10-03-dashboard-agenda-mail-ads-leveranciers](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-03-dashboard-agenda-mail-ads-leveranciers.md)\n\n## Aantekeningen",
   "bron": "los",
   "bronbestand": "https://claude.ai/artifact/YUpv4tvpeUfNxQ2Bj3ahYj",
   "bronbestand_url": "https://claude.ai/artifact/YUpv4tvpeUfNxQ2Bj3ahYj",
   "categorie": "Techniek",
   "datum": "2026-10-06",
   "deadline": "",
   "gerelateerd": [
    "2026-10-04-dashboard-efferd-volgorde-cijfers",
    "2026-10-04-dashboard-bruikbaarheidsaudit",
    "2026-10-04-dashboard-herindeling-ai-mail-koppelingen",
    "2026-10-03-dashboard-agenda-mail-ads-leveranciers"
   ],
   "id": "2026-10-06-dashboard-v4-opruimen-focusvensters",
   "kansen": [],
   "kerncijfers": [
    {
     "label": "geslaagde regels in de functionele test van v4 (`test.py`)",
     "verschil": "",
     "waarde": "210"
    },
    {
     "label": "geslaagde regels in de AI-test met nagemaakte AI (`_harness_ai.js`)",
     "verschil": "",
     "waarde": "22"
    },
    {
     "label": "geslaagde regels in de test van de live Shopify-paden met een nagemaakte connector (`_harness_live.js`)",
     "verschil": "",
     "waarde": "9"
    },
    {
     "label": "fouten in alle drie de testruns (ERRS:0, gemeten 7 oktober)",
     "verschil": "",
     "waarde": "0"
    }
   ],
   "kerntitel": "v4 vervangt tabbladen door focusvensters en haalt de webshop live uit Shopify",
   "prioriteit": "P3",
   "routine": "",
   "samenvatting": "Het prototype is in stap 1 t/m 9 opgeruimd op een kopie (v4), zodat v3.1 als origineel terug kan: elk blok opent een focusvenster in plaats van een pagina, en elke module heeft één lijst met hooguit één wissel. De webshop leest nu live uit Shopify (alleen lezen), de voorraad blijft centraal in het dashboard en het handboek is bijgewerkt. Daarmee is het prototype klaar om als ontwerp voor de echte app te dienen, met Supabase als opslag.",
   "status": "nieuw",
   "titel": "Dashboard v4 — opruimen op een kopie: focusvensters, live Shopify en alle modules zonder tabbladen",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-06-dashboard-v4-opruimen-focusvensters.md",
   "vervangt": [],
   "wat_niet_lukte": "Volledige crawl (alle routes, 1440 en 500 px) is bij deze registratie niet opnieuw gedraaid; een volledige run duurt meer dan 15 minuten per drie routes. Het Research Dashboard (info@) is niet bijgewerkt: deze registratie liep vanaf het persoonlijke account, dat het artifact niet kan lezen. Publiceren en `/research-sync` moeten vanaf info@."
  },
  {
   "acties": [
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-10-05-weekoverzicht#be6cd43b",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Besluit: content-voorstel week 2026-10-05 beoordelen (Tigo)",
     "uitvoerbaar": null
    }
   ],
   "body_md": "# Denzel Weekoverzicht — 2026-10-05\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\nEerste goed-nieuws-week na drie weken dalend NL-verkeer: +40% deze week, en de SEO-regressiecheck van vandaag vond geen nieuwe afwijkingen — de twee bekende `/en/`-bugs (2×H1/onvertaalde hero, lege titel) lijken zelfs opgelost. Partnership-kant was stabiel: beide kandidatenlijsten 3 dagen oud en al volledig beoordeeld, geen nieuwe zoekactie nodig. Een nieuw content-voorstel (5 ideeën) kon deze week gemaakt worden omdat beide vorige voorstellen (21-09 en 28-09) inmiddels bevestigd beoordeeld zijn. Geen nieuwe P1-bevindingen; de bestaande open punten (verzend-/retourbeleid, schema op collectie/producten/blogs, redirect-keten) blijven ongewijzigd open.\n\n## Kerncijfers\n\n- **56** · echte NL-sessies (GA4, 7 dagen) · +40% t.o.v. vorige week (40) — eerste stijging na 3 weken daling\n- **116** · totaal GA4-sessies (7 dagen) · +114,8% — grotendeels VS-Direct botverkeer (43 sessies, 0% engagement)\n- **€75,40** · omzet (Shopify, 28 sep–4 okt) · 2 bestellingen (#1040 en #1041, beide op 4-10); vorige week €41,99 / 1. GA4 telde er maar 1, daarom komt omzet voortaan uit Shopify\n- **6,6** · gem. Search Console-positie homepage (7 dagen) · was 9,4 vóór de titelfix van 25-09\n\n## Acties\n\n- [ ] P2 · Besluit: content-voorstel week 2026-10-05 beoordelen (Tigo)\n\n## Bevindingen\n\n### Voortgang per hoofdagent\n\n- **Content Agent** — nieuw content-voorstel deze week (5 ideeën, zie hieronder). Kon gemaakt worden omdat de stapelrem (sectie 2c) geen blokkade meer vond: de voorstellen van 21-09 én 28-09 zijn op 30-09 bevestigd beoordeeld door Tigo/Lars (zie [Agent Werk & Kwaliteit Overzicht](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Agent%20Werk%20%26%20Kwaliteit%20Overzicht.md)).\n- **Partnership Agent** — beide kandidatenlijsten (B2B en Events) zijn 3 dagen oud (laatst gewijzigd 2 oktober) en elke kandidaat heeft al een expliciete beoordeling — geen nieuwe zoekactie of herbeoordeling nodig deze week. Het outreach-besluit over Powerleague Rotterdam, Panna Knock Out en TennisFirst Rotterdam blijft op \"voorlopig niet, eerst andere prioriteiten\" (besluit Lars, 30-09) — niet opnieuw voorgesteld.\n- **Website Agent** — SEO-regressiecheck van vandaag (05-10) vond geen nieuwe afwijkingen. De twee `/en/`-regressies uit het vorige weekoverzicht (2×H1 met onvertaalde hero, lege titel-tag) lijken beide opgelost — nog te bevestigen door de actiecontrole, zie hieronder. Zie \"Website-stand\" voor het volledige beeld.\n\n### Afgevinkt door de actiecontrole deze week\n\nGeen nieuwe bevestigingen in `CONTROLE.json` deze week (laatste `gedaan`-resultaten dateren van vóór 28-09). De title/meta- en structured-data-fixes van de homepage die in eerdere weekoverzichten als geëscaleerd stonden, zijn op 30-09 al wél bevestigd — maar via een directe realiteitscheck met Lars, niet via de geautomatiseerde actiecontrole (zie [Agent Werk & Kwaliteit Overzicht](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Agent%20Werk%20%26%20Kwaliteit%20Overzicht.md), rijen SEO Agent 30-09). Die bevestiging gold dus niet opnieuw als \"nieuws\" deze week. De twee `/en/`-fixes die de regressiecheck van vandaag meldt (zie Website-stand) staan nog nergens bevestigd — dat is werk voor de volgende actiecontrole-run of een directe check.\n\n### Wat ik deze week zelf heb opgepakt\n\n**B2B (Lijn A):** geen zoekactie nodig — [Voorbeelden Gevonden Organisaties (B2B Klanten)](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20A%20-%20B2B%20Klanten/Voorbeelden%20Gevonden%20Organisaties%20%28B2B%20Klanten%29.md) is 3 dagen oud en elke kandidaat heeft al een expliciete beoordeling uit eerdere weken. Geen wijzigingen aangebracht. De ene openstaande datakwaliteitspunt (4 kleinere tennis-webshops in één rij, geflagd op 21-09 om op te splitsen) wacht nog op de volgende echte zoekronde — dit was geen zoekronde, dus niet aangepast.\n\n**Events (Lijn B):** idem — [Voorbeelden Gevonden Organisaties (Events)](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20B%20-%20Samenwerkingen/Voorbeelden%20Gevonden%20Organisaties%20%28Events%29.md) 3 dagen oud, alles al beoordeeld. Geen wijzigingen.\n\n**Content-voorstel:** zie hieronder.\n\n### Content-voorstel — Week 2026-10-05\n\n> Niveau: **Voorstellen, ik keur goed** ([Agent Takenverdeling & Grenzen — Content Agent](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Agent%20Takenverdeling%20%26%20Grenzen%20%E2%80%94%20Content%20Agent.md) sectie A). Nog steeds een voorstel: niets gepubliceerd of in Buffer ingepland. Vijf nieuwe ideeën, bewust anders dan de ideeën van 21-09 en 28-09.\n\n1. **Cijfer-reveal in beweging** (Pilaar 1 Performance, tag PERFORMANCE/LIFESTYLE/INFLUENCER) — slow-motion van een richtingsverandering (padel-volley, voetbal-schijnbeweging of rugby-sidestep) met een meelopende on-screen teller die van 0,60 naar 1,17 telt (de bevestigde wrijvingscoëfficiënt uit het feitenbestand, bron Apps et al. 2022). Psychologie: concreetheid — maakt een abstract getal (95% meer grip) voor het eerst letterlijk zichtbaar in plaats van alleen uitgesproken. Gebruik de verplichte formuleringsregel uit het feitenbestand (onderzoek over gripsokken in het algemeen, niet een eigen test).\n2. **Rugby-gat dichten** (Pilaar 1/3) — rugby is al sinds 16-9 beachhead-sport maar ontbreekt nog zichtbaar in content (Design Agent signaleerde dit al op 17-09 voor de homepage-sportgrid, nog steeds niet opgepakt — zie [Agent Werk & Kwaliteit Overzicht](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Agent%20Werk%20%26%20Kwaliteit%20Overzicht.md)). Voorstel: korte clip over richting veranderen/duwen op een natte ondergrond, vóór er nog meer tennis/voetbal-content bijkomt zonder rugby. Psychologie: consistentie tussen strategie (3 beachheads) en zichtbare content.\n3. **Misconceptie-interview** (Pilaar 2 Humor/Viral, tag PERFORMANCE/LIFESTYLE/INFLUENCER) — fake-straatinterview-format (bestaand format uit Content Pillars) waarin sporters een voor de hand liggende denkfout over gripsokken moeten \"raden\" (bv. \"gripsokken zijn alleen voor yoga/pilates\") waarna het echte antwoord de kernsporten (tennis/padel, voetbal, rugby) bevestigt. Psychologie: humor + misconceptie-correctie, een bekend viraal format.\n4. **\"Voor de aftrap\"-checklist** (Pilaar 1 Performance) — checklist-video (schoenen, warming-up, sokken) vlak vóór een training/wedstrijd, met tekst-overlay die één voor één wordt afgevinkt — laatste punt = HÏ Grip-sokken aan. Psychologie: Gestalt-afsluiting (een onvolledige checklist voelt onaf tot het laatste vakje is afgevinkt). Nieuw format t.o.v. de eerdere swap-/contrastvideo's.\n5. **UGC-reminder, gericht i.p.v. breed** (Pilaar 3 Story, social proof) — vervolg op de brede UGC-oproep uit 28-09 (idee 2, nog niet beoordeeld destijds als los idee): een korte, specifiek aan 3-pack-kopers gerichte reminder (grootste herhaalaankoop-signaal) in plaats van een generieke oproep aan iedereen. Psychologie: specificiteit verhoogt respons boven een brede oproep.\n\n**Beslissing voor Lars:** dit voorstel ter beoordeling door Tigo, zie Acties.\n\n### Website-stand en kant-en-klare fixes\n\nBron: [2026-10-05-regressiecheck](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-05-regressiecheck.md) (technische controle), [2026-09-30-search-console](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-30-search-console.md) (posities/klikken) en [2026-09-28-seo-conversietest-run-2](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-28-seo-conversietest-run-2.md) (laatste concepten, ongewijzigd sinds vorige week). Volledige diepgang staat in die notities — hier alleen de samenvatting en wat nieuw of veranderd is.\n\n**Mogelijk opgelost deze week (regressiecheck 05-10), nog te bevestigen door de actiecontrole:**\n1. **`/en/`-homepage heeft weer precies 1 `<h1>`, nu met een vertaalde hero-tekst** — lijkt het backlogpunt \"2×H1 en onvertaalde hero\" op te lossen.\n2. **`/en/`-title is niet meer leeg** — nu `HÏ Grip | Performance Grip Socks for Athletes` met een ingevulde Engelse meta description. Lijkt het backlogpunt \"lege, keyword-loze EN-title\" op te lossen. **Kanttekening:** die Engelse meta description bevat zelf nog de vervallen belofte \"Order before 10:00 PM, shipped today\" — de NL-homepage-meta is al gecorrigeerd naar \"binnen 1 werkdag verzonden\", de Engelse vertaling nog niet. Dit hoort bij het al openstaande punt over de vervallen verzendbelofte (zie [2026-09-21-weekoverzicht](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-21-weekoverzicht.md)) — geen nieuw backlogpunt, en omdat de exacte live tekst vanuit deze cloudomgeving niet te verifiëren was (Cloudflare-verificatiepagina bij een directe check), ook geen nieuwe kant-en-klare fix uitgeschreven: dat risico op een verkeerd geciteerde \"fix\" is groter dan de winst van nu alvast iets te plakken.\n\n**Geen nieuw klein probleem zonder bestaande fix gevonden deze week** — de overige, ongewijzigd open punten (structured data deels, verzend-/retour-/betalingspagina's, redirect-keten, `/collections/all` en `/collections/frontpage` zonder meta description) hebben allemaal al een bestaand backlogpunt of vereisen een thema-/beleidswijziging die geen los stuk HTML is (dus geen 3b-materiaal).\n\n**Blijft ongewijzigd open:** schema gedeeltelijk — vooruitgang t.o.v. 28-09: `WebSite`/`FAQPage` staan nu ook op de drie sportpagina's (padel/tennis/voetbal), naast homepage en `/en/`; nog afwezig op de collectie, de drie productpagina's en beide blogindexen. Redirect-keten `hi-grip-gripsokken-1` nog 2 stappen. Verzend-/retour-/betalingspagina's spreken de oude `/policies/*`-pagina's nog tegen. `/collections/all` zonder meta description. `/collections/frontpage` gaf vorige week geen meta description, is deze week een directe 404 (zelfde backlogpunt).\n\n**Verkeer (search console, meting 30-09):** maandtrend (28 dagen) blijft sterk positief op alle KPI's (klikken +160,7%, vertoningen +55,3%); de homepage-positie verbeterde van gem. 9,4 naar 6,6 (7 dagen) sinds de titelfix van 25-09 live staat — eerste duidelijke bevestiging dat die fix werkt. Nieuw gevonden: `/pages/ontdek-jouw-sport` rankt goed (positie 3,9) maar trok in 28 dagen geen enkele klik (0% CTR) — titel/meta-herschrijving nodig, staat al als eigen backlogpunt (19) sinds 30-09.\n\n### GA4-weekrapport en funnel (28 sep–4 okt t.o.v. 21–27 sep)\n\n> Property 476032345. **Filter botverkeer:** VS-Direct steeg naar 43 sessies met 0% engagement (vorige week 7) — dit is het enige segment dat aan het filtercriterium (Direct uit VS/China, <5% engagement) voldoet, dus eruit gefilterd. Na aftrek: **echte NL-sessies 56 tegen 40 vorige week (+40%)** — de eerste stijging na drie weken dalend NL-verkeer (was −23%, toen −22% daarvoor). Nog te vroeg om van een trendbreuk te spreken bij dit volume, maar wel het eerste tegensignaal.\n\n**Kanalen (sessies, deze week vs. vorige week, ongefilterd):**\n\n| Kanaal | Deze week | Vorige week |\n|---|---|---|\n| Direct | 57 | 25 |\n| Organic Search | 43 | 25 |\n| Cross-network | 8 | 0 |\n| Referral | 3 | 1 |\n| Unassigned | 3 | 1 |\n| AI Assistant | 2 | 1 |\n| Organic Social | 1 | 1 |\n\nOrganic Search steeg van 25 naar 43 sessies (engagementrate 72%, de hoogste van alle kanalen) — sterker signaal dan de ruwe Direct-stijging, die grotendeels bot is.\n\n**Landen:** Nederland 56 (40), Verenigde Staten 44 (7, grotendeels bot — 0% engagement), Zuid-Korea 3 (0), Duitsland 2 (2), overig incidenteel.\n\n**Apparaat:** desktop 74 sessies (bounce 74%, 0 key events — grotendeels de VS-bots), mobiel 42 (bounce 24%, 1 key event).\n\n**Funnel (events / unieke gebruikers, vorige week tussen haakjes):**\n\n| Stap | Deze week | Vorige week |\n|---|---|---|\n| view_item_list | 36 / 26 | 27 / 15 |\n| view_item | 59 / 37 | 19 / 9 |\n| add_to_cart | 15 / 9 | 16 / 3 |\n| begin_checkout | 5 / 5 | 2 / 2 |\n| add_shipping_info | 5 / 3 | 0 / 0 |\n| add_payment_info | 2 / 2 | 0 / 0 |\n| **purchase** | **GA4: 1 / 1 — Shopify telt 2 bestellingen (€75,40)** | GA4: 1 / 1 (Shopify: 1, €41,99) |\n\n**Duiding:** van 97 gebruikers bekijkt 26 (27%) een collectie, 37 (38%) een product — in absolute aantallen de beste week sinds het begin van deze meting. Opvallend: voor het eerst in meerdere weken zijn `add_shipping_info` (5) en `add_payment_info` (2) niet nul — in alle eerdere weken bleven die stappen op 0 omdat Shop Pay/Apple Pay ze overslaat. Te weinig volume (n=5) om te concluderen dat dit structureel is veranderd, maar wel vermeldenswaard: mogelijk rekenden deze week meer mensen af via de gewone checkout-flow in plaats van een snelle betaalknop. Van de 9 gebruikers die iets toevoegden aan het winkelwagentje bereikte 5 de checkout; volgens Shopify kochten er 2 (GA4 zag er 1) — bij n=5-9 is elk percentage nog ruis. Sessie→aankoop (echte NL-sessies, Shopify-bestellingen): 2/56 ≈ 3,6%, boven de Baymard-bandbreedte van 2-3% maar bij n=2 toeval, geen bewijs.\n\n**Conclusie:** de belangrijkste observatie is niet de funnel zelf (te klein volume), maar dat het echte NL-verkeer voor het eerst in drie weken weer stijgt, gedragen door Organic Search — consistent met de verbeterde Search Console-positie van de homepage sinds de titelfix.\n\n### Openstaande beslissingen voor Lars\n\nZie de Acties-lijst hierboven — dit weekoverzicht herhaalt de tekst niet twee keer. Aanvullend, ongewijzigd vanuit eerdere weken (geen checkbox, alleen ter herinnering):\n- nog open sinds [2026-09-28-weekoverzicht](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-28-weekoverzicht.md): verzend-/retour-/betalingsbeleid — één bron van waarheid kiezen tussen de nieuwe `/pages/*`- en de oude `/policies/*`-pagina's, nu bijna 6 weken open.\n- Rotterdam Cup (rugby) is op 5-10 vervallen (lars: de site bestaat niet meer, het domein staat te koop) en uit de Events-lijst gehaald.\n- [Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md) is op 5-10 bijgewerkt tot en met 2-10; werkthema is alleen `201133490503`.\n- Correctie 5-10: omzet in dit overzicht kwam uit GA4 (1 aankoop) en is vervangen door de Shopify-cijfers (2 bestellingen).\n\n### Vooruitblik — komende week\n\n1. **Bevestigen via de actiecontrole** dat de twee `/en/`-fixes (H1/hero-vertaling, titel/meta) echt live staan — dit weekoverzicht meldt ze als \"lijkt opgelost\", geen harde bevestiging.\n2. **Verzend-/retourbeleid consolideren** — nog steeds de langstlopende open P1, nu bijna 6 weken.\n3. **Rugby zichtbaar maken in content** — voorgesteld in het content-voorstel van deze week (idee 2), wacht nog op uitvoering zodra een idee is goedgekeurd.\n4. **Content-voorstel 05-10 laten beoordelen** door Tigo.\n5. **Schema verder afronden** op de collectie, de drie productpagina's en beide blogindexen — daar ontbreekt `WebSite`/`FAQPage` nog steeds, terwijl homepage/`/en/`/sportpagina's al compleet zijn.\n\n### AI-ontwikkelingen die relevant kunnen zijn\n\n1. **Buffer heeft zijn rapportage herbouwd rond AI-Insights** — herkent automatisch welke contenttypes, posttijden en formats het beste presteren per kanaal (Facebook/Instagram/TikTok) en geeft concrete vervolgacties in plaats van alleen ruwe cijfers; gratis onderdeel beschikbaar. **Raakt GEO niet**, maar dicht wel een deel van het al langer gesignaleerde \"geen feedback uit de echte wereld\"-gat (zie [Feedback & Iteratie Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Feedback%20%26%20Iteratie%20Log.md), 25-08): HÏ Grip heeft Buffer al gekoppeld (API-key, sinds 01-09) maar gebruikt het nooit voor performance-feedback op content-ideeën. Mogelijk nuttig zodra de contentkalender weer actief gevuld wordt.\n2. **TikTok Shop breidt zijn AI-productievoorzieningen uit** (AI Dubbing voor productvideo's, een AI Fashion/productvideo-maker, \"List with AI\", en een AI-agent in Shop Chat die realtime antwoorden voorstelt). **Raakt GEO niet direct**, wel relevant voor het al openstaande backlogpunt 13 (TikTok Shop-onderzoek) — verlaagt de productiedrempel voor shoppable video aanzienlijk, relevant zodra dat punt wordt opgepakt.\n3. **Shopify Catalog formatteert productdata automatisch voor AI-assistenten** (ChatGPT/Copilot), met een door Shopify gerapporteerde verdubbeling van conversie in AI-chats. **Raakt GEO direct**: dit is vermoedelijk hetzelfde mechanisme achter het al bekende backlogpunt 8 (Agentic Storefronts) en versterkt de onderbouwing van backlogpunt 4 (Merchant Center/variant-ID's) — geen nieuwe actie, wel extra gewicht voor die twee bestaande punten.\n4. **Somantra lanceerde begin oktober een nieuwe AI-zichtbaarheidsmeting** over ChatGPT, Google AI Overviews, Claude, Gemini en Perplexity. **Raakt GEO direct**: een tweede, net gelanceerde optie naast de Amplitude-tool die op 28-09 al gemeld is — nog niet getest, alleen gesignaleerd als alternatief.\n\n## Bronnen\n\n- [2026-10-05-regressiecheck](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-05-regressiecheck.md) · [2026-09-30-search-console](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-30-search-console.md) · [2026-09-28-seo-conversietest-run-2](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-28-seo-conversietest-run-2.md)\n- `python 05_Research/_tools/google_data.py check|ga4 --dagen 7`\n- [Voorbeelden Gevonden Organisaties (B2B Klanten)](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20A%20-%20B2B%20Klanten/Voorbeelden%20Gevonden%20Organisaties%20%28B2B%20Klanten%29.md) · [Voorbeelden Gevonden Organisaties (Events)](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20B%20-%20Samenwerkingen/Voorbeelden%20Gevonden%20Organisaties%20%28Events%29.md) · [Agent Werk & Kwaliteit Overzicht](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Agent%20Werk%20%26%20Kwaliteit%20Overzicht.md)\n- [Stappenplan — Verdere Bouw](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Stappenplan%20%E2%80%94%20Verdere%20Bouw.md) · [Feedback & Iteratie Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Feedback%20%26%20Iteratie%20Log.md)\n- Websearch AI-ontwikkelingen: Buffer AI-Insights, TikTok Shop AI-productietools, Shopify Catalog, Somantra (5 oktober 2026)\n- [Content Pillars](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/01_Content_Agent/Strategie%20%26%20Planning/Content%20Pillars.md) (content-voorstel)\n\n## Aantekeningen",
   "bron": "routine",
   "bronbestand": "",
   "bronbestand_url": null,
   "categorie": "SEO",
   "datum": "2026-10-05",
   "deadline": "",
   "gerelateerd": [
    "2026-09-28-weekoverzicht",
    "2026-10-05-regressiecheck",
    "2026-09-30-search-console",
    "2026-09-28-seo-conversietest-run-2"
   ],
   "id": "2026-10-05-weekoverzicht",
   "kansen": [],
   "kerncijfers": [
    {
     "label": "echte NL-sessies (GA4, 7 dagen)",
     "verschil": "+40% t.o.v. vorige week (40) — eerste stijging na 3 weken daling",
     "waarde": "56"
    },
    {
     "label": "totaal GA4-sessies (7 dagen)",
     "verschil": "+114,8% — grotendeels VS-Direct botverkeer (43 sessies, 0% engagement)",
     "waarde": "116"
    },
    {
     "label": "omzet (Shopify, 28 sep–4 okt)",
     "verschil": "2 bestellingen (#1040 en #1041, beide op 4-10); vorige week €41,99 / 1. GA4 telde er maar 1, daarom komt omzet voortaan uit Shopify",
     "waarde": "€75,40"
    },
    {
     "label": "gem. Search Console-positie homepage (7 dagen)",
     "verschil": "was 9,4 vóór de titelfix van 25-09",
     "waarde": "6,6"
    }
   ],
   "kerntitel": "NL-verkeer stijgt eerste keer in 3 weken (+40%); /en/-H1 en -titel lijken opgelost",
   "prioriteit": "P2",
   "routine": "denzel-week",
   "samenvatting": "Het echte Nederlandse verkeer stijgt deze week voor het eerst in drie weken (+40%), en de twee /en/-regressies van vorige week (2×H1, lege titel) lijken opgelost — allebei nog te bevestigen door de actiecontrole. Partnership-kant stabiel (geen nieuwe zoekactie nodig, outreach blijft voorlopig stil op besluit van Lars) en er ligt een nieuw content-voorstel (5 ideeën) ter beoordeling bij Tigo.",
   "status": "nieuw",
   "titel": "Denzel Weekoverzicht — 2026-10-05 (NL-verkeer breekt 3 weken daling, /en/-fixes lijken opgelost)",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-05-weekoverzicht.md",
   "vervangt": [
    "2026-09-28-weekoverzicht"
   ],
   "wat_niet_lukte": ""
  },
  {
   "acties": [],
   "body_md": "# SEO- en conversietest run 3 — auditblok C, concept Waardebalk (gratis verzending + per paar)\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\nDerde run van de wekelijkse SEO- en conversietest (modus CONCEPT: niets live gewijzigd). Auditblok deze run: **C — content en AI-zichtbaarheid** (rotatie B→C→D→B, volgens `05_Research/_geheugen/seo-conversietest.md`). Het volledige rapport staat, zoals afgesproken, in de verborgen Shopify-pagina `seo-routine-logboek` (RUN 3-sectie, bovenaan). Deze notitie bevat de kern.\n\n## Kerncijfers\n\n- **276** · sessies deze week (Shopify Analytics, 28 sep–4 okt) · vorige week 266\n- **116** · GA4-sessies deze week · +114,8% t.o.v. vorige week (54)\n- **2** · bestellingen deze week / €75,40 · vorige week 1 / €41,99\n- **7,8** · gemiddelde Search Console-positie (26 sep–2 okt) · vorige periode 7,9\n\n## Acties\n\n_Geen nieuwe backlogpunten deze run: auditblok C bevestigt alleen al openstaande punten (FAQ-structuur, de twee nog ontbrekende vraagpagina's uit backlogpunt 6, NL/EN-dekking, E-E-A-T). Het nieuwe thema-blok dekt backlogpunt 1 (gratis-verzendingsdrempel) en 12 (prijs per paar) als concept, maar verandert hun status niet: beide blijven open tot het blok in een productsjabloon staat en live is gezet._\n\n## Bevindingen\n\n### KPI's (Shopify Analytics; nulmeting = 23 sep 2026)\n\n| KPI | Deze week (28 sep–4 okt) | Vorige week (21–27 sep) | Nulmeting (16–23 sep) |\n|---|---|---|---|\n| Sessies | 276 | 266 | 346 |\n| Sessies via zoekmachines | 36 | 15 | 16 |\n| Sessies met add-to-cart | 9 | 5 | 6 |\n| Checkout bereikt / voltooid | 5 / 2 | 2 / 1 | 4 / 3 |\n| Bestellingen / omzet | 2 / €75,40 | 1 / €41,99 | 3 / €72,74 |\n| Gem. orderwaarde | €34,43 | €34,70 | €19,54 |\n| Conversieratio | 0,725% | 0,376% | 0,87% |\n\n**Let op — meetbreuk 21-23 sep** (open backlogpunt 20): Shopify veranderde toen de sessiedefinitie. De week-op-week-vergelijking hierboven (beide na de breuk) is geldig; de vergelijking met de nulmeting (ervoor) niet.\n\nGA4 (476032345) toont voor dezelfde week 116 sessies (+114,8% t.o.v. 54 vorige week) — nog steeds ruim onder de Shopify-telling (276), een gat dat al twee runs lang onverklaard blijft. Een substantieel deel van de GA4-groei lijkt botverkeer: \"United States | Direct\" steeg naar 43 sessies (was 7) met 0% engagement. Search Console (26 sep–2 okt, loopt 3 dagen achter): 22 klikken (−8,3%), 860 vertoningen (−15,5%), positie 7,8 (vorige 7,9). \"Gripsokken\" verslechterde naar positie 8,1 (−2,5), \"higrip\" verbeterde naar 2,6 (+0,9).\n\n### Auditblok C — content en AI-zichtbaarheid (diep)\n\nGecontroleerd: FAQ-paginastructuur, de volledige blogcatalogus (24 artikelen via de Admin API), het content-gat tegenover FitSockr, en of de twee nog ontbrekende vraagpagina's uit backlogpunt 6 (`backlog#b02ee884`) er inmiddels zijn.\n\n- **FAQ-pagina** (`/pages/veelgestelde-vragen`): categorie-koppen (H3) ongewijzigd (\"Over gripsokken\", \"Sport en gebruik\", \"Bestellen, verzending en retour\", \"Over HÏ Grip\"). Individuele vragen renderen niet als koppen in de statische HTML (waarschijnlijk een accordion-component) — niet te beoordelen op \"antwoord in de eerste 1-2 zinnen\" zonder browser-rendering. Geen nieuw punt.\n- **Blogcatalogus:** 24 artikelen bevestigd. `wat-zijn-gripsokken` bestaat al (15 dec 2025) — dit beantwoordt materieel al één van de drie vragen uit backlogpunt 6, zij het als losse blogpost en niet als de bedoelde zelfstandige vraagpagina met `FAQPage`-schema. De andere twee vragen (\"waarom glijdt mijn voet in mijn padelschoen\", \"tapedesign alternatief\") hebben nog geen artikel. Backlogpunt 6 blijft dus onveranderd open, met deze nuance voor de volgende contentronde.\n- **E-E-A-T / NL-EN:** niets nieuws t.o.v. de regressiecheck van 5 okt — de bekende punten (demo-tekst onder de oprichters op `/pages/ons-verhaal`, deels onvertaalde `/en`-sportpagina's) staan al open.\n\nConclusie: geen nieuwe bevindingen in blok C deze run. Volgende run: blok D (conversie).\n\n### Gebouwd (concept — alleen in het testthema, niets live)\n\nNieuw thema-blok **\"HÏ Grip — Waardebalk\"** in het testthema `SEO TEST - HI Grip WEBSITE` (ID 200249901383, bevestigd niet-gepubliceerd via `themes(first:20)`; hetzelfde testthema als RUN 1). Het combineert backlogpunt 1 (gratis-verzendingsdrempel tonen) en 12 (prijs per paar) — de Growth Radar-weekchecks van 27 sep en 4 okt stelden al voor deze twee punten samen te voegen, omdat ze dezelfde sectie en beslissing raken. De backlogkoppen zelf zijn niet samengevoegd (dat blijft aan Lars); dit is alleen de uitvoering als concept.\n\n- **Bestanden:** `blocks/hi-pack-value-bar.liquid` (nieuw thema-blok) en `assets/hi-pack-value-bar.js` (custom element `<hi-pack-value-bar>`), aangemaakt via `themeFilesUpsert` ná `validate_graphql_codeblocks` (verplicht volgens de routine, regel 5).\n- **Werking:** voortgangsbalk + tekst \"Nog €X,XX tot gratis verzending\" (of \"✓ Gratis verzending\"), en bij multipack-varianten (titel bevat \"N-pack\") de prijs per paar. Herrekent live bij een variantwissel door het bestaande `ProductSelectEvent`-patroon van het thema te volgen (zoals `assets/product-price.js` al doet) — geen eigen serverfetch.\n- **Niet hardcoded:** drempel (€35 standaard) en alle teksten zijn block-settings, instelbaar via de theme-editor.\n- **Nog niet gekoppeld aan een productsjabloon.** Het blok staat klaar in de block-bibliotheek (categorie \"Product\"); het moet nog handmatig onder het prijsblok worden toegevoegd via de theme-editor. Zie \"Wat niet lukte\".\n\n### Resultaten eerdere testplannen\n\n- **Maatgids** (168287863111): op 28 sep door Lars afgewezen. Vervallen, niet opnieuw voorgesteld.\n- **RUN 2-concepten** (collectiebeschrijving, SEO-titels/meta's 2.0 + collecties, alt-teksten, producttype/SKU/GTIN): nog steeds niet gepubliceerd — `seo.title`/`seo.description` op de 2.0-producten en de collectie staan nog op `null`, `productType` nog leeg (gecontroleerd 5 okt). Label: **te vroeg**, wacht op publicatie.\n\n## Wat niet lukte\n\n- Het nieuwe blok automatisch aan `templates/product.json` of `templates/product.performance-grip-socks-2.json` toevoegen: deze template-bestanden waren te groot om in deze sessie veilig uit te lezen en te bewerken. Vereist nu een handmatige stap in de theme-editor.\n- De sessiediscrepantie Shopify (276) vs. GA4 (116) in dezelfde week: twee runs op rij onverklaard.\n- Botverkeer kon niet op land uitgesplitst worden in de GA4-funnel-tool (geen landdimensie beschikbaar); wel apart gesignaleerd (VS-Direct, 0% engagement).\n- Visuele controle van de nieuwe Waardebalk in een browser: niet gedaan (geen storefront-previewrendering beschikbaar in deze cloudomgeving, bekende beperking). De code volgt bewust het bestaande `product-price.js`-patroon van het thema als risicobeperking.\n\n## Bronnen\n\n- Shopify Admin API (GraphQL) en ShopifyQL-analytics, HÏ Grip, 5 oktober 2026.\n- `python 05_Research/_tools/google_data.py ga4/gsc`, 5 oktober 2026.\n- Verborgen Shopify-pagina `seo-routine-logboek` (volledig rapport, RUN 3).\n- `00_Brand_Core/Feiten & Actuele Staat.md`.\n\n## Aantekeningen",
   "bron": "routine",
   "bronbestand": "https://admin.shopify.com/store/raqds3-tb/pages/168287895879",
   "bronbestand_url": "https://admin.shopify.com/store/raqds3-tb/pages/168287895879",
   "categorie": "CRO",
   "datum": "2026-10-05",
   "deadline": "",
   "gerelateerd": [
    "2026-09-23-seo-conversietest-run-1",
    "2026-09-28-seo-conversietest-run-2",
    "2026-10-05-regressiecheck",
    "2026-09-25-seo-audit"
   ],
   "id": "2026-10-05-seo-conversietest-run-3",
   "kansen": [],
   "kerncijfers": [
    {
     "label": "sessies deze week (Shopify Analytics, 28 sep–4 okt)",
     "verschil": "vorige week 266",
     "waarde": "276"
    },
    {
     "label": "GA4-sessies deze week",
     "verschil": "+114,8% t.o.v. vorige week (54)",
     "waarde": "116"
    },
    {
     "label": "bestellingen deze week / €75,40",
     "verschil": "vorige week 1 / €41,99",
     "waarde": "2"
    },
    {
     "label": "gemiddelde Search Console-positie (26 sep–2 okt)",
     "verschil": "vorige periode 7,9",
     "waarde": "7,8"
    }
   ],
   "kerntitel": "Combinatieconcept gratis-verzendbalk + prijs per paar gebouwd in het testthema",
   "prioriteit": "P2",
   "routine": "seo-conversietest",
   "samenvatting": "Derde run (modus CONCEPT): de diepe audit van blok C (content en AI-zichtbaarheid) levert geen nieuwe bevindingen op — alles staat al open in de backlog. Gebouwd is een nieuw thema-blok 'HÏ Grip — Waardebalk' dat backlogpunt 1 (gratis-verzendingsdrempel) en 12 (prijs per paar) combineert, in het niet-gepubliceerde testthema; het staat nog niet in een productsjabloon. Sessies herstelden deze week flink (Shopify 276, GA4 +114,8%), maar een deel is vermoedelijk botverkeer en de meetbreuk van 21-23 sep maakt vergelijken met de nulmeting onbetrouwbaar.",
   "status": "nieuw",
   "titel": "SEO- en conversietest run 3 — auditblok C, concept Waardebalk (gratis verzending + per paar)",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-05-seo-conversietest-run-3.md",
   "vervangt": [],
   "wat_niet_lukte": "- Het nieuwe blok automatisch aan `templates/product.json` of `templates/product.performance-grip-socks-2.json` toevoegen: deze template-bestanden waren te groot om in deze sessie veilig uit te lezen en te bewerken. Vereist nu een handmatige stap in de theme-editor.\n- De sessiediscrepantie Shopify (276) vs. GA4 (116) in dezelfde week: twee runs op rij onverklaard.\n- Botverkeer kon niet op land ui…"
  },
  {
   "acties": [],
   "body_md": "# SEO-regressiecheck — 5 oktober 2026\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\nControle-run, geen onderzoek. Twaalf URL's gecontroleerd (sitemap-gedreven, één minder dan vorige week omdat `/collections/frontpage` uit de collectie-sitemap is verdwenen). Kritieke check (geen `aggregateRating`) blijft schoon op alle twaalf. Geen nieuwe afwijkingen: twee eerder gemelde bugs lijken opgelost (nog te bevestigen door de actiecontrole) en één bekend open punt is erger geworden maar blijft hetzelfde backlogpunt. GA4 steeg flink, PageSpeed Insights zat opnieuw op quotum.\n\n## Kerncijfers\n\n- **12** · gecontroleerde URL's · vorige week 13\n- **0** · URL's met `aggregateRating`\n- **116** · GA4-sessies (7 dagen) · +114,8% t.o.v. vorige week (54)\n- **5** · AI Assistant-sessies (30 dagen) · vorige meting 3\n\n## Acties\n\n_Geen nieuwe backlogpunten deze week. Bestaande acties uit eerdere rapporten staan in `ACTIEBACKLOG.md` en komen via het dashboard binnen — hier niet gedupliceerd._\n\n## Bevindingen\n\nReferentiepunt: [2026-09-28-regressiecheck](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-28-regressiecheck.md). URL-lijst dit keer sitemap-gedreven (Stap 2 van de routine): homepage, de drie productpagina's, de collectie `gripsokken`, de drie `/pages/gripsokken-voor-*`-sportpagina's, beide blogindexen (`hi-grip`, `trends`), het nieuwste artikel (ongewijzigd: \"De twee grootste problemen in de sportwereld...\", 15 feb 2026) en `/en/`.\n\n### Nieuw ontdekt in de sitemap t.o.v. vorige week\n\n- `/collections/frontpage` is verdwenen uit `sitemap_collections_1.xml` (nu nog maar 1 collectie: `gripsokken`) en geeft een directe 404 — geen 301. Hoort bij het al openstaande backlogpunt \"`/collections/frontpage` heeft geen meta description\"; zie \"Al bekend, blijft open\" hieronder. Geen nieuw punt.\n- Verder geen nieuwe URL's t.o.v. 28 september ontdekt binnen de gecontroleerde set.\n\n### Mogelijk opgelost — nog te bevestigen door de actiecontrole\n\n1. **`/en/`-homepage heeft weer precies 1 `<h1>` en een vertaalde hero.** De zichtbare `<h1 class=\"sl-teaser__title\">HÏ Grip <em>Performance Grip Socks for Athletes</em></h1>` is nu in het Engels, met een Engelse lead-tekst (\"Choose your sport. See why grip in your shoe matters.\"). Lijkt het backlogpunt \"Nieuwe /en/-homepage heeft 2× H1 en een onvertaalde hero-tekst\" op te lossen.\n2. **`/en/`-title is niet meer leeg.** Nu `HÏ Grip | Performance Grip Socks for Athletes`, met een ingevulde Engelse meta description. Lijkt het backlogpunt \"Nieuwe /en/-sectie heeft een lege, keyword-loze title-tag\" op te lossen.\n   **Let op:** die EN-meta description bevat zelf nog de vervallen belofte *\"Order before 10:00 PM, shipped today\"* — de NL-homepage-meta is al gecorrigeerd naar \"Binnen 1 werkdag verzonden\", de Engelse vertaling niet. Dit hoort bij het al openstaande punt over de 22:00-belofte (`2026-09-21-weekoverzicht#611d66c8`), dus geen nieuw punt — alleen hier gemeld als detail.\n\n### Afwijkingen\n\nGeen afwijkingen deze week.\n\n### Al bekend, blijft open (staat open in de backlog — geen nieuw punt, niet gewijzigd)\n\n- **Schema gedeeltelijk** (backlogpunt \"SEO-schema-thema-wijzigingen gedeeltelijk gepusht\"): vooruitgang t.o.v. 28 sep — `WebSite` en `FAQPage` staan nu ook op de drie sportpagina's (padel/tennis/voetbal), naast homepage en `/en/`. Nog steeds afwezig: `WebSite` op de collectie, de drie productpagina's, beide blogindexen en het artikel; `ItemList` op de collectie; `FAQPage` op de productpagina's (die wel een zichtbare FAQ hebben).\n- **Redirect-keten `/products/hi-grip-gripsokken-1`** nog steeds 2 stappen (`hi-grip-gripsokken-1` → `hi-grip-gripsokken` → `performance-gripsokken`), tegen de regel van maximaal 1 stap. Getrackt via `2026-09-23-seo-conversietest-run-1#b469a68a`.\n- **Verzend-/retour-/betalingspagina's blijven onvolledig en tegenstrijdig**, ongewijzigd t.o.v. 28 sep: `/pages/verzendbeleid` noemt nog geen verzendkosten (€4,50) of -drempel (€35); `/pages/retourbeleid` rekent nog 25% herbevoorradingskosten en eist \"ongeopend\"; `/policies/refund-policy` nog 14 dagen + 25%; `/policies/shipping-policy` nog \"vóór 16:00\"; `/policies/terms-of-service` nog €4,25.\n- **`/collections/all`** heeft nog geen meta description en een niet-keyword-eerste title (`Producten – HÏ Grip`).\n- **`/collections/frontpage`** (zie boven): nu een directe 404 in plaats van de eerder gemelde ontbrekende meta description — zelfde backlogpunt.\n- **`/pages/gripsokken-voetbal`** (oude/typo-handle) geeft nog steeds 404.\n\n### Ongewijzigd / schoon\n\n- Alle 12 gecontroleerde URL's: HTTP 200, laadtijd 0,48–0,86s (ruim onder 1,5s).\n- Alle 12: precies één niet-lege `<title>`, een niet-lege meta description, precies één `<h1>`.\n- Canonical en `hreflang` (nl/en/x-default) correct op alle 12.\n- **Geen enkele van de 12 pagina's bevat `aggregateRating`** — kritieke check blijft schoon.\n- Homepage: 3 van 25 afbeeldingen met `alt=\"\"` (vorige week 9/25) — ruim onder de meldgrens van 12.\n- Live prijzen kloppen exact met het feitenbestand: 1-pack €14,95 / 3-pack €41,95 / 5-pack €64,95 (Performance Gripsokken) en €17,95 voor beide 2.0-varianten (zwart/wit) — geen tegenspraak.\n- GA4 `purchase` staat nog steeds gemarkeerd als key event (`ONCE_PER_EVENT`, sinds 3 feb 2025).\n- `shopify theme check`: niet uitgevoerd — thema-map niet beschikbaar in de cloudomgeving (bekende beperking van elke cloud-run).\n\n### Trend\n\nGA4-property 476032345, sessies per kanaal, laatste 7 dagen (28 sep–4 okt) vs. de 7 dagen daarvoor (21–27 sep):\n\n| Kanaal | Deze week | Vorige week |\n|---|---|---|\n| Direct | 57 | 25 |\n| Organic Search | 43 | 25 |\n| Cross-network | 8 | 0 |\n| Referral | 3 | 1 |\n| Unassigned | 3 | 1 |\n| AI Assistant | 2 | 1 |\n| Organic Social | 1 | 1 |\n| **Totaal** | **116** | **54** |\n\nLet op botverkeer: de huidige opdracht (`google_data.py ga4`) levert geen land-dimensie, dus kon niet expliciet gefilterd worden op \"Direct uit de VS of China met <5% engagement\". Wel zichtbaar: Direct steeg naar 57 sessies met een lage engagementrate (12,3%, tegen 36% vorige week) — consistent met het patroon uit eerdere weken waarin een deel van het Direct-verkeer vermoedelijk bots waren. Niet verder te duiden zonder landdimensie; dat is werk voor de Growth Radar.\n\nAI Assistant-kanaal, laatste 30 dagen: **5 sessies** (was 3 bij de vorige meting) — aanhoudende lichte groei, nog te klein om een trend te noemen.\n\nPageSpeed Insights (mobiel): **niet gemeten** — openbaar PSI-quotum zit nog vast op HTTP 429 voor het project `higrip-analytics`, zelfde probleem als elke eerdere run.\n\n## Wat niet lukte\n\n- **PageSpeed Insights** (homepage, `/collections/gripsokken`, `/products/performance-gripsokken`): HTTP 429, quotum op. Nodig: `PageSpeed Insights API` aanzetten in `higrip-analytics` of een `PAGESPEED_API_KEY`.\n- **`shopify theme check`**: thema-map `C:\\Users\\Test\\higrip-theme` niet beschikbaar in deze cloudomgeving.\n- **Botverkeer per land filteren**: `google_data.py ga4` heeft geen land-dimensie; alleen het totale Direct-kanaal gemeld, niet uitgesplitst naar VS/China.\n\n## Bronnen\n\n- Live site: curl op de 12 URL's + sitemap-bestanden (NL en EN), 5 oktober 2026.\n- Shopify Admin API (`graphql_query`): nieuwste gepubliceerde artikel.\n- `python 05_Research/_tools/google_data.py ga4 --dagen 7` / `--dagen 30` en `keyevents`.\n- `python 05_Research/_tools/google_data.py cwv` (PageSpeed, gefaald op quotum).\n- Feitenbestand: `00_Brand_Core/Feiten & Actuele Staat.md`.\n\n## Aantekeningen",
   "bron": "routine",
   "bronbestand": "",
   "bronbestand_url": null,
   "categorie": "SEO",
   "datum": "2026-10-05",
   "deadline": "",
   "gerelateerd": [
    "2026-09-28-regressiecheck",
    "2026-09-21-regressiecheck",
    "2026-09-15-regressiecheck",
    "2026-10-05-growth-radar-seo-technisch",
    "2026-10-05-seo-conversietest-run-3"
   ],
   "id": "2026-10-05-regressiecheck",
   "kansen": [],
   "kerncijfers": [
    {
     "label": "gecontroleerde URL's",
     "verschil": "vorige week 13",
     "waarde": "12"
    },
    {
     "label": "URL's met `aggregateRating`",
     "verschil": "",
     "waarde": "0"
    },
    {
     "label": "GA4-sessies (7 dagen)",
     "verschil": "+114,8% t.o.v. vorige week (54)",
     "waarde": "116"
    },
    {
     "label": "AI Assistant-sessies (30 dagen)",
     "verschil": "vorige meting 3",
     "waarde": "5"
    }
   ],
   "kerntitel": "Geen nieuwe afwijkingen; /en/-H1-bug en lege EN-title lijken opgelost",
   "prioriteit": "P2",
   "routine": "seo-regressiecheck",
   "samenvatting": "Geen nieuwe afwijkingen deze week: de bekende /en/-H1-bug met onvertaalde hero-tekst en de lege EN-titel lijken opgelost, en /collections/frontpage is nu een directe 404 in plaats van de eerder gemelde ontbrekende meta description — beide horen bij al openstaande backlogpunten en krijgen geen nieuw punt. Prijzen kloppen exact met het feitenbestand en de kritieke aggregateRating-check blijft schoon op alle 12 gecontroleerde URL's.",
   "status": "nieuw",
   "titel": "SEO-regressiecheck — 5 oktober 2026",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-05-regressiecheck.md",
   "vervangt": [],
   "wat_niet_lukte": "- **PageSpeed Insights** (homepage, `/collections/gripsokken`, `/products/performance-gripsokken`): HTTP 429, quotum op. Nodig: `PageSpeed Insights API` aanzetten in `higrip-analytics` of een `PAGESPEED_API_KEY`.\n- **`shopify theme check`**: thema-map `C:\\Users\\Test\\higrip-theme` niet beschikbaar in deze cloudomgeving.\n- **Botverkeer per land filteren**: `google_data.py ga4` heeft geen land-dimen…"
  },
  {
   "acties": [],
   "body_md": "# Growth Radar — SEO-techniek als nieuws (geen kwalificerende vondst)\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\nGeen relevante ontwikkelingen vandaag. Alles wat vandaag over Google-algoritme-updates, Core Web Vitals, structured data, Merchant Center en de Shopify-changelog naar boven kwam, viel af op de harde filter uit de routine: al bekend sinds de vorige seo-technisch-run (28 september), te vaag om aan higrip.nl te koppelen, of niet terug te voeren op een primaire bron met een 2026-datum.\n\n## Bevindingen\n### Gecontroleerd, niet opgenomen\n- **Google-kernupdate oktober 2026:** geen bevestigde nieuwe ranking-update gevonden. Enige document-wijziging (1 okt) is een synchronisatie van de richtlijnen voor AI-gegenereerde content met de Search Quality Raters Guidelines — procesmatig, geen concrete consequentie voor een higrip.nl-pagina of -keyword te benoemen.\n- **Core Web Vitals / INP-meetmethode \"2026-update\":** meerdere SEO-blogs (geen van allen Google zelf of Search Engine Land/Roundtable) melden een strakkere INP-meetmethode en uitgebreide soft-navigation-dekking in CrUX, zonder consistente datum of een vindbare Google-bron. Het al openstaande backlogpunt 14 (INP meten op higrip.nl) blijft de juiste actie; geen aanleiding voor een nieuw punt.\n- **Google Merchant Center — beleidsconsolidatie (sep 2026) en nieuwe attributen (`handling_cutoff_time`, `minimum_order_value`, `video_link`):** de attributen zijn optioneel en gingen al in april/juni 2026 in, dus niet nieuw; de beleidsconsolidatie is een herindeling van de Help Center-structuur zonder inhoudelijke wijziging voor higrip.nl. Het beeldminimum van 500×500px (hard vanaf 31 jan 2027) staat al sinds 21 september in het geheugen en is voor higrip.nl al gecheckt (ruim compliant).\n- **Shopify-changelog oktober 2026:** bevat Admin-taalondersteuning (Arabisch/Urdu/Hebreeuws), de Canvas-ontwerptool, discount rollouts en een notitieveld in Analytics — geen van alle raakt SEO-techniek. De eerder opgedoken \"Human or bot session\"-filter in Analytics-rapporten is bij navraag een changelogpost van **27 oktober 2025**, dus ruim ouder dan de huidige onderzoeksperiode; niet opgenomen.\n- **Search Console \"AI performance reports and controls\" (gemeld als oktober-nieuws door Search Engine Roundtable):** bij doorklikken naar Google's eigen Search Central-blog blijkt dit de al bekende combinatie van de generatieve-AI-prestatierapporten (gelanceerd 3 juni 2026) en de wereldwijde uitrol van de AI-content-control op 31 augustus 2026 — beide al op 22 september in het geheugen vastgelegd. Geen nieuw element.\n\n## Wat niet lukte\nGeen toegangsproblemen; de bronnen zelf waren ontoereikend of bleken bij verificatie ouder of al bekend.\n\n## Bronnen\n- [Google Merchant Center product data specification update 2026 — Google Merchant Center Help](https://support.google.com/merchants/answer/16989427)\n- [Google updates some Merchant Center product specifications for 2026 — Search Engine Roundtable](https://www.seroundtable.com/google-updates-some-merchant-center-product-spec-41171.html)\n- [Shopify Changelog](https://changelog.shopify.com/)\n- [Filter out bot traffic in your sessions related reports — Shopify Changelog, 27 oktober 2025](https://changelog.shopify.com/posts/filter-out-bot-traffic-in-your-sessions-related-reports)\n- [October 2026 Google Webmaster Report — Search Engine Roundtable](https://www.seroundtable.com/october-2026-google-webmaster-report-42185.html)\n- [Introducing Search Generative AI performance reports in Search Console — Google Search Central, juni 2026](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports)\n- [Search generative AI control — Search Console Help](https://support.google.com/webmasters/answer/16908024)\n- [Google Search Central Blog](https://developers.google.com/search/blog)\n\n## Aantekeningen",
   "bron": "routine",
   "bronbestand": "",
   "bronbestand_url": null,
   "categorie": "SEO",
   "datum": "2026-10-05",
   "deadline": "",
   "gerelateerd": [
    "2026-09-28-growth-radar-seo-technisch",
    "2026-09-21-growth-radar-seo-technisch",
    "2026-10-05-regressiecheck"
   ],
   "id": "2026-10-05-growth-radar-seo-technisch",
   "kansen": [],
   "kerncijfers": [],
   "kerntitel": "Geen nieuwe, bruikbare SEO-techniek-ontwikkeling deze maandag",
   "prioriteit": "P3",
   "routine": "growth-radar",
   "samenvatting": "Geen van de vandaag gevonden berichten over Google-updates, Core Web Vitals, structured data, Merchant Center of de Shopify-changelog haalde de drempel van een primaire bron, nieuwheid of een concrete koppeling aan higrip.nl. Bestaande P1-punten (Merchant Center variant-ID's, schema-thema, EN-title) blijven ongewijzigd staan.",
   "status": "nieuw",
   "titel": "Growth Radar — SEO-techniek als nieuws (geen kwalificerende vondst)",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-05-growth-radar-seo-technisch.md",
   "vervangt": [],
   "wat_niet_lukte": "Geen toegangsproblemen; de bronnen zelf waren ontoereikend of bleken bij verificatie ouder of al bekend."
  },
  {
   "acties": [
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-10-04-dashboard-herindeling-ai-mail-koppelingen#5363e78a",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Kies het zakelijke WhatsApp-nummer van HÏ Grip en sluit het aan via een Meta-partner (coexistence), zodat WhatsApp-berichten in het dashboard komen",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-10-04-dashboard-herindeling-ai-mail-koppelingen#a6f20288",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "Vraag Producent A of contact via mail of WhatsApp kan in plaats van WeChat",
     "uitvoerbaar": null
    }
   ],
   "body_md": "# Dashboard — herindeling op doel, AI-antwoorden op B2B-mail, en wat er kan met WhatsApp en WeChat\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\n- **WhatsApp: ja, echt koppelen.**\n  - De WhatsApp Business Platform (Cloud API) heeft sinds 2025 **coexistence**: hetzelfde nummer werkt in de WhatsApp Business-app én via de API.\n  - Berichten van de laatste 6 maanden worden gesynchroniseerd en nieuwe berichten lopen beide kanten op.\n  - Voorwaarden:\n    - een zakelijk nummer in de WhatsApp Business-app (geen persoonlijk WhatsApp);\n    - aansluiten via een officiële Meta-partner;\n    - groepschats synchroniseren niet;\n    - gesprekken via de API kosten per gesprek.\n  - Daarna kan de AI ook WhatsApp-berichten lezen en een antwoord klaarzetten.\n- **WeChat: alleen via een omweg.**\n  - Een gewoon WeChat-account heeft geen open koppeling.\n  - Het kan via **WeCom** (zakelijke WeChat), plus een archiveringskoppeling van een externe partij met Chinese licentie. Duur en ingewikkeld.\n  - Advies: vraag de leverancier om mail of WhatsApp, of log WeChat met de hand.\n- **Herindeling op doel** (feedback van Timo):\n  - **Agenda is tijd, To do is werk.** Ze leken te veel op elkaar.\n  - **Leveranciers** zitten nu bij Voorraad & inkoop in plaats van bij Financiën.\n  - **Routines en Hermes-agents** zijn één lijst.\n  - **Automatiseringen** heten nu Flows. De AI stelt nieuwe flows voor.\n- **Mail:** elke inkomende B2B-mail wordt door de AI gelezen en krijgt een antwoord dat het team goedkeurt, aanpast of afwijst. Het staat onder de mail én in Wacht op akkoord, als één object.\n\n## Acties\n- [ ] P2 · Kies het zakelijke WhatsApp-nummer van HÏ Grip en sluit het aan via een Meta-partner (coexistence), zodat WhatsApp-berichten in het dashboard komen\n- [ ] P3 · Vraag Producent A of contact via mail of WhatsApp kan in plaats van WeChat\n\n## Bevindingen\n\n### WhatsApp Business Platform met coexistence\n- Hetzelfde nummer werkt tegelijk in de WhatsApp Business-app en via de Cloud API. Je hoeft het app-account niet op te geven.\n- Synchronisatie van de berichtgeschiedenis (6 maanden) en realtime spiegeling van berichten in beide richtingen.\n- Niet beschikbaar na aansluiten: synchronisatie van groepschats, verdwijnende berichten, eenmalig bekijken, live locatie, en verzendlijsten (die worden alleen-lezen).\n- Eén nummer per app-account. Aansluiten via Embedded Signup van een officiële Meta-partner; dat kun je niet zelf aanzetten.\n- De app blijft gratis; berichten via de API kosten per gesprek.\n- Volgens de bron sinds mei 2025 wereldwijd beschikbaar, ook in de EU.\n\n### WeChat\n- WeCom (zakelijke WeChat) kan chatten met gewone WeChat-gebruikers.\n- Archiveren van die gesprekken kan via een officiële Tencent-API, alleen via partijen met een Chinese ICP-licentie. Antwoorden van externe contacten worden alleen gearchiveerd als zij dat niet weigeren.\n- Voor één leverancier is dat te zwaar. Met de hand loggen of een ander kanaal is realistischer.\n\n### Wat er in prototype v2.9 veranderde\n| Onderdeel | Wat | Waar |\n|---|---|---|\n| **Navigatie** | Groepen: Werk (To do, Agenda, Mail, Notities) · Verkoop & marketing (CRM, Content, Ads, Webshop) · Operatie (Voorraad & inkoop, Financiën) · Kennis (Research, Bestanden) · Systeem (AI & agents, Instellingen) | zijbalk |\n| **Agenda** | Alleen afspraken; een tweede agenda met evenementen per sport; data uit andere modules staan in een zijbalk met link | Agenda |\n| **AI-antwoorden** | Mail-triage zet onder elke B2B-mail een antwoord; *Keur goed en verstuur* | Mail · Wacht op akkoord |\n| **Sjablonen** | Mail, offerte en factuur met variabelen en een AI-instructie; zelf aan te passen | Instellingen › Sjablonen |\n| **Flows** | Als … dan …; de Flow-bouwer stelt flows voor uit herhaald werk | AI & agents › Flows |\n| **Doelen** | Kwartaaldoelen die het dashboard zelf meet, met het beachhead-scorebord (tennis/padel, voetbal, rugby) | Home › Doelen |\n| **Teamorder** | Eén deelbare link per club; spelers vullen maat in; sluiten = offerte | CRM › Offertes & orders |\n| **Personalisatie** | Interesse als eigenschap en in de uitkomst; offerte op de personalisatiestaffel; stappen logo → geleverd op de order | CRM |\n| **Voorraad** | Eén centrale voorraad die alle kanalen gelijkzet (Shopify nu, bol.com en TikTok Shop later) | Voorraad & inkoop |\n| **Ads** | Jullie zetten het budget; de Ads-analist verdeelt, meet en leert (trackrecord); automatisch binnen limiet is een besluit van Lars, Tigo of Timo | Ads › Budget & agent |\n| **Agents** | Eén lijst: de routines (nu cloud-routine op info@, verhuizen) en de nieuwe agents op Hermes. Op Hermes draait nog niets. | AI & agents › Agents |\n\n### Antwoorden van Timo op open punten\n- Eigen adressen lars@, tigo@ en timo@higrip.nl bestaan. Dat beantwoordt de actie in [2026-10-03-dashboard-agenda-mail-ads-leveranciers](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-03-dashboard-agenda-mail-ads-leveranciers.md).\n- Het ads-budget stellen jullie zelf in; de agent moet daar zelf steeds beter in worden.\n- Met de leverancier mailen jullie in het Engels.\n- Op Hermes draait nog niets; alle agents gaan daarlangs.\n\n## Bronnen\n- WhatsApp coexistence: https://chakrahq.com/article/whatsapp-coexistence-business-app-register-cloud-api/ · https://app.socialintents.com/docs/whatsapp-sms/whatsapp-coexistence-mode · https://developers.telnyx.com/docs/messaging/whatsapp/coexistence.md\n- WeChat/WeCom-archivering: https://it-consultis.com/insights/wecom-message-archiving-for-regulated-industries/ · https://www.telemessage.com/?p=10099333\n- Prototype v2.9: https://claude.ai/artifact/XPnRocf1ZcG1J7pb82QBHy · handboek: https://claude.ai/artifact/AEzJLbcMsYRYRbT1SFNik1\n- Eerder: [2026-10-03-dashboard-agenda-mail-ads-leveranciers](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-03-dashboard-agenda-mail-ads-leveranciers.md), [2026-10-02-dashboard-apps-patronen](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-02-dashboard-apps-patronen.md), [2026-09-29-crm-dashboard-voorstel](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-29-crm-dashboard-voorstel.md)\n\n## Aantekeningen",
   "bron": "los",
   "bronbestand": "https://claude.ai/artifact/XPnRocf1ZcG1J7pb82QBHy",
   "bronbestand_url": "https://claude.ai/artifact/XPnRocf1ZcG1J7pb82QBHy",
   "categorie": "Techniek",
   "datum": "2026-10-04",
   "deadline": "",
   "gerelateerd": [
    "2026-10-03-dashboard-agenda-mail-ads-leveranciers",
    "2026-10-02-dashboard-apps-patronen",
    "2026-09-29-crm-dashboard-voorstel",
    "2026-10-04-dashboard-bruikbaarheidsaudit",
    "2026-10-04-dashboard-efferd-volgorde-cijfers",
    "2026-10-06-dashboard-v4-opruimen-focusvensters"
   ],
   "id": "2026-10-04-dashboard-herindeling-ai-mail-koppelingen",
   "kansen": [],
   "kerncijfers": [],
   "kerntitel": "WhatsApp is echt te koppelen; WeChat alleen via WeCom. Agenda is tijd, To do is werk",
   "prioriteit": "P2",
   "routine": "",
   "samenvatting": "WhatsApp kan echt aan het dashboard gekoppeld worden: met de WhatsApp Business Platform en coexistence blijft de app op de telefoon werken en lopen berichten ook via de API. WeChat kan alleen via WeCom met een externe archiveringskoppeling; dat is duur en ingewikkeld. Daarnaast is het prototype opnieuw ingedeeld op doel (Werk · Verkoop & marketing · Operatie · Kennis · Systeem), krijgt elke inkomende B2B-mail een AI-antwoord dat het team goedkeurt, en zijn sjablonen, flows, doelen met beachhead-scorebord, teamorders, evenementen en de kanalen van de centrale voorraad toegevoegd.",
   "status": "nieuw",
   "titel": "Dashboard — herindeling op doel, AI-antwoorden op B2B-mail, en wat er kan met WhatsApp en WeChat",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-04-dashboard-herindeling-ai-mail-koppelingen.md",
   "vervangt": [],
   "wat_niet_lukte": ""
  },
  {
   "acties": [
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-10-04-dashboard-efferd-volgorde-cijfers#a38acc3a",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "Besluit: bouwen we het echte dashboard op shadcn/ui (dan passen Efferd-blokken direct, eventueel met Pro-licentie) of houden we de eigen componenten uit het prototype?",
     "uitvoerbaar": null
    }
   ],
   "body_md": "# Dashboard — Efferd-dashboards als voorbeeld: To do als volgorde, blokken met randen en doorklikbare cijfers\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\n- **Waarom Efferd 3, 4 en 5 fijn lezen:**\n  - Elk blok heeft een dunne lichte rand op bijna-zwart. Je ziet dus altijd waar een blok begint, ook in de donkere modus.\n  - Grafieken zijn wit en grijs; kleur zit alleen op plus en min.\n  - Een KPI-kaart heeft een eigen voetregel met de vergelijking.\n  - Onder elke lijst staat \"Alles bekijken →\".\n- **Ons prototype miste precies dat in de donkere modus.** Kaarten (#1a1a1a) lagen randloos op #111. Nu heeft elk blok een rand en zijn geneste tegels een stap lichter.\n- **Veiligheid:**\n  - De gratis code van Efferd 2–5 is opgehaald en nagelopen: geen netwerkaanroepen, eval, scripts, opslag of verborgen instructies. Alleen voorbeeldplaatjes van avatar.vercel.sh en flag.vercel.app.\n  - Volgens de voorwaarden mogen blokken in eigen projecten. Doorverkopen als kit mag niet.\n  - Wij nemen alleen de patronen over, in eigen code en huisstijl. Pro-blokken 6–14 zijn alleen als voorbeeld bekeken.\n- **To do = volgorde:**\n  - één kaart \"Eerst · begin hiermee\", daarna een genummerd lijstje;\n  - \"Jouw dag\" toont uren tegenover capaciteit;\n  - het team ziet een kolom per persoon;\n  - de tijdlijn staat nog onder Planning.\n- **Doorklikken:** Omzet, Orders en Gemiddelde orderwaarde openen een eigen pagina. Daarop:\n  - een periode van 7 dagen tot 12 maanden;\n  - een staaf per dag, week of maand, met de vorige periode erachter;\n  - de verdeling webshop/B2B, per klanttype, de grootste klanten en per variant;\n  - de orders erachter.\n  - Elke staaf en regel filtert of opent de bron.\n\n## Kerncijfers\n- **0** · netwerkaanroepen, scripts of verborgen instructies in de Efferd-code 2–5\n- **3** · cijfers op Home die nu naar een eigen detailpagina klikken\n\n## Acties\n- [ ] P3 · Besluit: bouwen we het echte dashboard op shadcn/ui (dan passen Efferd-blokken direct, eventueel met Pro-licentie) of houden we de eigen componenten uit het prototype?\n\n## Bevindingen\n\n### Wat we overnemen van Efferd\n| Blok | Patroon | Bij ons |\n|---|---|---|\n| 3, 4, 5 | Dunne lichte rand op elk blok, geneste tegels een stap lichter | Elke kaart, KPI, tabel, planningbalk en agendacel |\n| 4 | KPI met voetband (vergelijking, bron) en \"View report →\" | KPI-kaart met voetband; klik opent de cijferpagina |\n| 5 | Lijst waarin de balk achter het label ligt | Cijferpagina: waar het vandaan komt, klanttype, klanten, varianten |\n| 2, 5 | \"View all →\" onder een lijst | Kaartvoet \"Alle signalen ›\", \"Bekijk de volgorde ›\" |\n| 6 | \"Needs attention\" met tellers | Home › Vraagt aandacht |\n| 12 | Leadfunnel met % door, deals die stilliggen met \"Follow up\" | CRM › Funnel als stappen, Liggen stil met Opvolgen (maakt een taak) |\n| 8 | Vergroten naar detail | Elke KPI-kaart opent zijn eigen pagina |\n\n### Wat we bewust niet overnemen\n- Lettertypes en kleurpalet van Efferd. De huisstijl blijft Poppins met de merkkleuren.\n- De drie bijgeleverde skills alleen voor zover ze over bruikbaarheid gaan. Een skill zegt zelf \"niet voor dashboards\", een andere is voor bureauwebsites (scroll-animaties, glas, grote witruimte), de derde is voor Google Stitch.\n\n### To do: van tijdlijn naar volgorde\n- De volgorde per persoon is:\n  - eerst eigen keuze (slepen of Meer › Bovenaan);\n  - dan verlopen, prioriteit en deadline.\n- De blokken zijn Nu, Hierna (7 dagen) en Later (ingeklapt).\n- Kleur alleen waar het iets betekent: rood voor te laat en P1, een volt streep op de Eerst-kaart.\n\n## Bronnen\n- Efferd dashboard-blokken: https://efferd.com/blocks/dashboard · voorbeelden https://efferd.com/view/dashboard-3, https://efferd.com/view/dashboard-4, https://efferd.com/view/dashboard-5 · voorwaarden https://efferd.com/terms\n- Prototype v3.1: https://claude.ai/artifact/XPnRocf1ZcG1J7pb82QBHy · handboek: https://claude.ai/artifact/AEzJLbcMsYRYRbT1SFNik1\n- Vervolg: [2026-10-06-dashboard-v4-opruimen-focusvensters](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-06-dashboard-v4-opruimen-focusvensters.md)\n- Eerder: [2026-10-04-dashboard-bruikbaarheidsaudit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-04-dashboard-bruikbaarheidsaudit.md), [2026-10-04-dashboard-herindeling-ai-mail-koppelingen](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-04-dashboard-herindeling-ai-mail-koppelingen.md), [2026-10-02-dashboard-ontwerpregels-kpi](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-02-dashboard-ontwerpregels-kpi.md)\n\n## Aantekeningen",
   "bron": "los",
   "bronbestand": "https://claude.ai/artifact/XPnRocf1ZcG1J7pb82QBHy",
   "bronbestand_url": "https://claude.ai/artifact/XPnRocf1ZcG1J7pb82QBHy",
   "categorie": "Techniek",
   "datum": "2026-10-04",
   "deadline": "",
   "gerelateerd": [
    "2026-10-04-dashboard-bruikbaarheidsaudit",
    "2026-10-04-dashboard-herindeling-ai-mail-koppelingen",
    "2026-10-02-dashboard-ontwerpregels-kpi",
    "2026-10-06-dashboard-v4-opruimen-focusvensters"
   ],
   "id": "2026-10-04-dashboard-efferd-volgorde-cijfers",
   "kansen": [],
   "kerncijfers": [
    {
     "label": "netwerkaanroepen, scripts of verborgen instructies in de Efferd-code 2–5",
     "verschil": "",
     "waarde": "0"
    },
    {
     "label": "cijfers op Home die nu naar een eigen detailpagina klikken",
     "verschil": "",
     "waarde": "3"
    }
   ],
   "kerntitel": "To do wordt een volgorde, blokken krijgen randen en elk cijfer is door te klikken",
   "prioriteit": "P3",
   "routine": "",
   "samenvatting": "De Efferd-dashboards 3, 4 en 5 lezen goed omdat elk blok een dunne lichte rand heeft op bijna-zwart, grafieken wit en grijs zijn, en kleur alleen plus en min aangeeft; dat ontbrak in de donkere modus van ons prototype. De gratis Efferd-code (2–5) is gecontroleerd en veilig (geen netwerkaanroepen, scripts of verborgen instructies), maar we nemen alleen patronen over. De To do is nu een genummerde volgorde (eerst, dan dat) in plaats van een tijdlijn, en elk hoofdcijfer opent een eigen pagina met periode, opbouw en de orders erachter.",
   "status": "nieuw",
   "titel": "Dashboard — Efferd-dashboards als voorbeeld: To do als volgorde, blokken met randen en doorklikbare cijfers",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-04-dashboard-efferd-volgorde-cijfers.md",
   "vervangt": [],
   "wat_niet_lukte": ""
  },
  {
   "acties": [
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-10-04-dashboard-bruikbaarheidsaudit#65109f18",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Lars, Tigo en Timo: gebruik het prototype twee dagen op je telefoon en noteer per scherm wat je mist of nooit gebruikt, vóór de echte bouw start",
     "uitvoerbaar": null
    }
   ],
   "body_md": "# Dashboard — bruikbaarheidsaudit: werkt elke knop, is het rustig op de telefoon en klopt het contrast?\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\n- **Werkt alles?** Een klikronde over alle schermen klikte elke knop, tab en filter aan, plus elke knop in het paneel of menu dat daarbij openging. Er bleken twee echte fouten te zijn:\n  - na \"Voorbeelddata herstellen\" crashten Notities en Sparren;\n  - bij een teamorder meldde \"Link kopiëren\" ook \"gekopieerd\" als het klembord geblokkeerd was.\n  - Daarnaast deden acht knoppen niets bij een leeg formulier, zonder enige melding.\n  - Nu geeft de ronde 0 fouten op desktop en telefoon. Geen enkele knop zegt nog \"werkt nog niet\".\n- **Waarom het druk voelde:**\n  - De telefoon kreeg het desktopscherm, alleen smaller. Op Home stonden eerst drie grote tegels met grafiek en pas daaronder de taken.\n  - Er waren drie navigatielagen: bovenbalk, tabs en onderbalk.\n  - Per scherm stonden er tot zes witte hoofdknoppen.\n  - Bijna de helft van de tekst was 10 à 10,5 px.\n- **Contrast:** tekst haalde de norm bijna overal. Het probleem zat in de **randen**: knoppen, velden, keuzelijsten en vinkjes hadden 1,1 tot 1,7:1 contrast, terwijl de norm (WCAG 1.4.11) 3:1 is. Daardoor zag je slecht wat klikbaar was.\n- **Kleur op de verkeerde plek:**\n  - De omzettegel was volt (= goed) terwijl de omzet op 13% van het doel stond.\n  - De takentijdlijn kleurde per module, waardoor pumpkin zowel \"Financiën\" als \"let op\" betekende.\n  - In een tabel vol klanten stond in elke rij een volt chip.\n\n## Kerncijfers\n- **0** · fouten in de klikronde, desktop en telefoon · was 15\n- **90** · tekstelementen kleiner dan 11 px · was 1.643\n- **23** · witte hoofdknoppen op 24 telefoonschermen · was 37\n- **3:1** · contrast van knop-, veld- en vinkjesranden · was 1,1–1,7:1\n\n## Acties\n- [ ] P2 · Lars, Tigo en Timo: gebruik het prototype twee dagen op je telefoon en noteer per scherm wat je mist of nooit gebruikt, vóór de echte bouw start\n\n## Bevindingen\n\n### Hoe er getest is\n- Een **klikcrawler** (`_crawl.js`, in de prototypebron) opent elk scherm en zet daarbij steeds de voorbeelddata terug. Daarna klikt hij elk element met een actie of link aan, en ook elke knop in het paneel of menu dat dan opent.\n- Per klik legt hij de uitkomst vast:\n  - een fout in de code;\n  - de melding \"werkt nog niet\";\n  - er verandert niets zichtbaars;\n  - alleen een melding;\n  - een link die terugvalt op Home.\n- Telefoonbreedte is getest in een iframe van precies 390 px. Headless Chrome gaat zelf nooit onder 500 px, dus de eerdere \"390 px\"-screenshots waren uitsneden van 500 px.\n- Een **contrastmeting** (`_contrast.js`) berekent voor elke zichtbare tekst de echte achtergrond, inclusief doorschijnende lagen, in het donkere en het lichte thema. Voor knoppen, velden en vinkjes meet hij de rand tegen de omgeving.\n- Een **drukte-meting** (`_density.js`) telt per telefoonscherm:\n  - de hoogte;\n  - het aantal knoppen en witte hoofdknoppen;\n  - het aantal filters;\n  - de vlakken in een accentkleur;\n  - de kleine tekst.\n\n### Vergelijking met andere dashboards\n| Patroon | Bij anderen | Bij ons vóór | Nu |\n|---|---|---|---|\n| Telefoon | 3–5 KPI's, details pas na een tik; een telefoondashboard is een ander product, geen verkleind desktopscherm | 3 grote tegels met grafiek, legenda en bron, vóór de taken | Taken en akkoord eerst; KPI's als kleine 2×2-tegels zonder grafiek; tik = detail |\n| Filters | Max. 3–4 zichtbaar, de rest achter één knop; actieve filters als chips (Polaris IndexFilters, Linear) | To do: drie keuzelijsten plus \"Filters wissen\" | Ik · Team · namen (zelfde als de agenda) + één knop **Filter** met wegklikbare chips |\n| Acties | Eén primaire actie; meer dan drie acties gaan onder \"Meer\" (Polaris) | Relatiepagina: 8 knoppen; lijstregels met een eigen witte knop | Max. 3 knoppen + **Meer**; regels met een vinkcirkel of een pijl |\n| Navigatie telefoon | Max. 5 tabs onderaan, geen dubbele navigatie (Apple HIG); Linear mobiel draait om inbox en eigen taken | Bovenbalk met 4 iconen + tabs + onderbalk | De bel is weg op de telefoon (Akkoord zit in de onderbalk); het actieve tabblad schuift in beeld |\n| Donker thema | Donkergrijs als oppervlak; verzadigde kleur niet in grote vlakken; accent spaarzaam (Material) | Volt-gevulde tegels en \"volgende actie\"-blokken, gekleurde tijdlijnbalken | Neutrale tegels en balken met een dunne gekleurde streep; volt alleen voor status en actief |\n\n### Wat er veranderd is (prototype v3.0)\n- **Fouten:** reset herstelt ook notities en gesprekken. Kopiëren heeft een terugval: als het klembord geblokkeerd is, opent een paneel met de tekst om zelf te kopiëren.\n- **Geen stille knoppen meer:** een leeg verplicht veld kleurt rood en een melding zegt wat er mist. Dat geldt voor Loggen, Toevoegen, Aanmelden, Vraag, Opslaan en Selecteer met AI.\n- **\"Later\" bij besluiten:** het besluit verdwijnt nu echt tot maandag. Eerst gaf de knop alleen een melding.\n- **Contrast:** er is een vaste token voor randen van bedieningselementen, met 3:1 in beide thema's. Aangevinkte vakjes zijn in het lichte thema zwart, want volt op wit was onzichtbaar (1,2:1). Tekst is nooit kleiner dan 11 px.\n- **Kleur = status:**\n  - geen volt-gevulde KPI-tegels meer;\n  - takenbalken neutraal met een modulestreep, rood alleen bij verlopen;\n  - \"Klant\" als omlijnde chip, alleen \"Vaste klant\" (het doel) in volt;\n  - \"niet gekoppeld\" bij mail neutraal;\n  - tellers in de zijbalk als rustige cijfers.\n- **Rust:**\n  - \"Snel toevoegen\" op Home is weg, want het dubbelde de + in de bovenbalk;\n  - \"Vastpinnen\" is een klein icoon, alleen op desktop;\n  - besluiten hebben Ja en Nee als gewone knoppen;\n  - de agenda op de telefoon toont alleen dagen met iets erin;\n  - de relatiepagina toont op de telefoon eerst de volgende actie, dan de tijdlijn, dan de eigenschappen.\n\n### Wat bewust blijft\n- Iconknoppen in de bovenbalk hebben een zwakke rand. Het icoon zelf heeft genoeg contrast, en dat telt volgens WCAG.\n- Infochips zonder klikactie, zoals \"Club A\", zijn labels en geen knoppen.\n- De titel in de notitie-editor heeft bewust geen rand. Het is een documentweergave, zoals Notion.\n\n## Bronnen\n- Telefoondashboards, 3–5 KPI's en progressive disclosure: https://www.boundev.ai/blog/mobile-data-visualization-design-guide · https://querio.ai/articles/how-to-design-dashboards-for-mobile-users · https://www.thebricks.com/resources/best-practices-for-mobile-dashboard-design\n- Cognitieve belasting, max. 3–4 filters en 3–7 hoofdcijfers: https://www.uxmatters.com/mt/archives/2025/03/from-features-to-value-designing-saas-dashboards-that-deliver-insights.php · https://easy.bi/blog/dashboard-ux-optimization · https://www.designrush.com/agency/ui-ux-design/trends/dashboard-design-principles\n- Opgeslagen weergaven, filters en chips: https://polaris-react.shopify.com/components/selection-and-input/index-filters · https://shopify.dev/docs/apps/build/app-home/migrate-from-polaris-react/index-filters\n- Donker thema en kleur: https://m2.material.io/design/color/dark-theme\n- Tabbalk en telefoonnavigatie: https://developer-rno.apple.com/design/human-interface-guidelines/components/navigation-and-search/tab-bars · https://linear.app/changelog/2024-09-19-introducing-linear-mobile · https://linear.app/changelog/2026-01-22-customize-your-navigation-in-linear-mobile\n- Stripe mobiel: https://docs.stripe.com/dashboard/mobile\n- Prototype v3.0: https://claude.ai/artifact/XPnRocf1ZcG1J7pb82QBHy · handboek: https://claude.ai/artifact/AEzJLbcMsYRYRbT1SFNik1\n- Eerder: [2026-10-04-dashboard-herindeling-ai-mail-koppelingen](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-04-dashboard-herindeling-ai-mail-koppelingen.md), [2026-10-02-dashboard-ontwerpregels-kpi](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-02-dashboard-ontwerpregels-kpi.md), [2026-09-26-dashboard-ux-onderzoek](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-26-dashboard-ux-onderzoek.md), [2026-10-02-dashboard-apps-patronen](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-02-dashboard-apps-patronen.md)\n\n## Aantekeningen",
   "bron": "los",
   "bronbestand": "https://claude.ai/artifact/XPnRocf1ZcG1J7pb82QBHy",
   "bronbestand_url": "https://claude.ai/artifact/XPnRocf1ZcG1J7pb82QBHy",
   "categorie": "Techniek",
   "datum": "2026-10-04",
   "deadline": "",
   "gerelateerd": [
    "2026-10-04-dashboard-herindeling-ai-mail-koppelingen",
    "2026-10-02-dashboard-ontwerpregels-kpi",
    "2026-09-26-dashboard-ux-onderzoek",
    "2026-10-02-dashboard-apps-patronen",
    "2026-10-04-dashboard-efferd-volgorde-cijfers",
    "2026-10-06-dashboard-v4-opruimen-focusvensters"
   ],
   "id": "2026-10-04-dashboard-bruikbaarheidsaudit",
   "kansen": [],
   "kerncijfers": [
    {
     "label": "fouten in de klikronde, desktop en telefoon",
     "verschil": "was 15",
     "waarde": "0"
    },
    {
     "label": "tekstelementen kleiner dan 11 px",
     "verschil": "was 1.643",
     "waarde": "90"
    },
    {
     "label": "witte hoofdknoppen op 24 telefoonschermen",
     "verschil": "was 37",
     "waarde": "23"
    },
    {
     "label": "contrast van knop-, veld- en vinkjesranden",
     "verschil": "was 1,1–1,7:1",
     "waarde": "3:1"
    }
   ],
   "kerntitel": "Elke knop werkt nu; telefoon rustiger, randen 3:1, geen volt-gevulde tegels meer",
   "prioriteit": "P2",
   "routine": "",
   "samenvatting": "Een automatische klikronde over alle 80 schermen (ruim 2.500 klikken) vond twee echte fouten en acht knoppen die stil bleven bij een leeg formulier; die zijn opgelost en de ronde geeft nu 0 fouten op desktop en telefoon. Het drukke gevoel kwam vooral van de telefoon (grote KPI-tegels met grafiek vóór de taken, drie navigatielagen, tot zes witte knoppen per scherm) en van te zwakke randen: knoppen, velden en vinkjes hadden 1,1 tot 1,7:1 contrast, de norm is 3:1. Volt werd als vulling gebruikt op tegels die juist achterliepen, en de takentijdlijn kleurde per module in plaats van per status; beide zijn rechtgezet.",
   "status": "nieuw",
   "titel": "Dashboard — bruikbaarheidsaudit: werkt elke knop, is het rustig op de telefoon en klopt het contrast?",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-04-dashboard-bruikbaarheidsaudit.md",
   "vervangt": [],
   "wat_niet_lukte": ""
  },
  {
   "acties": [],
   "body_md": "# Growth Radar — Social content en platformalgoritmes (geen kwalificerende vondst)\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\nGeen relevante ontwikkelingen vandaag voor de zaterdagfocus (TikTok, Instagram, Reels, creators, sportformats). De meeste zoekresultaten waren generieke contentfarm-artikelen over \"het algoritme in 2026\" zonder eigen meetdata of directe bron; de twee items met een echte primaire bron (TikTok Newsroom, TikTok's eigen business-blog) waren Verenigde Staten/Canada-gericht en te enterprise-schaal om aan higrip.nl te koppelen.\n\n## Bevindingen\n### Gecontroleerd, niet opgenomen\n- **TikTok-algoritme 2026 (voltooiingsratio, watch time, zoekontdekking):** herhaald over tientallen marketingblogs (Hootsuite, OpusClip, Socialync, Mickyweis e.a.) zonder citaat van een primaire TikTok-bron of eigen dataset — precies het contentfarm-patroon dat de routine moet negeren.\n- **Instagram Reels-algoritme 2026 (skip rate, Trial Reels, DM-shares als topsignaal, Mosseri's \"polished aesthetic is dead\"-memo):** breed herhaald (SocialPilot, MeetEdgar, Later, CreatorFlow) maar zonder directe link naar Instagram's eigen blog of Mosseri's kanaal — niet te verifiëren als primaire bron binnen deze run.\n- **TikTok Newsroom, 1 okt 2026 (UNGA-bijeenkomst):** economische impact van TikTok in de VS (8,5 mln bedrijven, $81 mrd bbp) en TikTok Symphony als generatieve-AI-creatieftool. Primaire bron, maar zuiver VS-cijfers zonder raakvlak met higrip.nl.\n- **TikTok Business-blog, Q3 2026 Product Preview:** primaire bron, met onder meer GMV Max Pro en Smart+ Catalog Ads (advertentietools voor TikTok Shop-verkopers) en TikTok Pulse. Vrijwel alle onderdelen staan op een allowlist en zijn VS/Canada-gericht (GMV Max Pro expliciet \"niet beschikbaar in Canada\", Pulse-functies \"algemeen beschikbaar VS/Canada\"); geen enkel onderdeel bevestigt NL-beschikbaarheid. Relevant pas zodra P2-punt 13 (TikTok Shop Nederland) een besluit wordt — dan zijn dit de advertentietools die daarna beschikbaar zouden komen. Punt 13 is niet bijgewerkt: er is nog geen NL-bevestiging, dus geen aantoonbare verandering.\n- **TikTok Shop NL — creators en vroege merken:** bevestigt alleen de al bekende lancering van 15 juni 2026 en de voorwaarden voor het affiliateprogramma (1.000+ volgers, 18+, NL-woonplaats) — al verwerkt in de social-runs van 18 en 25 september en in backlogpunt 13.\n- **Social-commerce-marktcijfers 2026 (TikTok Shop-GMV, nano-influencer-engagement):** generieke affiliate-/contentmarketingblogs (ExplodingTopics, PostPlanify, Colaba) zonder eigen onderzoek of NL-cijfers — niet opgenomen.\n\n## Wat niet lukte\nGeen toegangsproblemen. De bronnen zelf waren ontoereikend: generieke \"algoritme in 2026\"-artikelen zonder primaire bron, en de twee primaire TikTok-bronnen die wel gevonden zijn, waren VS/Canada-specifiek zonder raakvlak met higrip.nl of Nederland.\n\n## Bronnen\n- [TikTok Q3 2026 Product Preview — TikTok for Business blog](https://ads.tiktok.com/business/en-US/blog/tiktok-product-preview)\n- [TikTok Newsroom — UNGA 2026, economische impact](https://newsroom.tiktok.com/) (bericht van 1 okt 2026)\n- [TikTok Shop in Nederland: dit betekent het voor jouw bedrijf — Reward](https://reward.nl/en/insights/insights-tiktok-shop-nederland/)\n- [TikTok Shop Nederland: wat je nu moet weten — Puredigital](https://puredigital.nl/insights/sea/tiktok-shop-nederland-drie-maanden-later/)\n- Afgewezen (geen primaire bron/eigen data): Hootsuite, OpusClip, Socialync, Mickyweis (TikTok-algoritme); SocialPilot, MeetEdgar, Later, CreatorFlow (Instagram Reels-algoritme); ExplodingTopics, PostPlanify, Colaba (social-commercecijfers)\n\n## Aantekeningen",
   "bron": "routine",
   "bronbestand": "",
   "bronbestand_url": null,
   "categorie": "Social",
   "datum": "2026-10-03",
   "deadline": "",
   "gerelateerd": [
    "2026-10-02-growth-radar-social",
    "2026-09-25-growth-radar-social",
    "2026-09-18-growth-radar-social"
   ],
   "id": "2026-10-03-growth-radar-social-content",
   "kansen": [],
   "kerncijfers": [],
   "kerntitel": "Geen bruikbare TikTok/Instagram-algoritme- of creatorontwikkeling voor higrip.nl",
   "prioriteit": "P3",
   "routine": "growth-radar",
   "samenvatting": "Geen van de vandaag gecontroleerde ontwikkelingen in TikTok- en Instagram-algoritmes, TikTok's Q3-productupdate of TikTok Shop-creators haalde de drempel van primaire bron, NL-relevantie en een concrete koppeling aan higrip.nl. De bestaande P3-punten 9 en 13 (creators, TikTok Shop) blijven ongewijzigd staan.",
   "status": "nieuw",
   "titel": "Growth Radar — Social content en platformalgoritmes (geen kwalificerende vondst)",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-03-growth-radar-social-content.md",
   "vervangt": [],
   "wat_niet_lukte": "Geen toegangsproblemen. De bronnen zelf waren ontoereikend: generieke \"algoritme in 2026\"-artikelen zonder primaire bron, en de twee primaire TikTok-bronnen die wel gevonden zijn, waren VS/Canada-specifiek zonder raakvlak met higrip.nl of Nederland."
  },
  {
   "acties": [
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-10-03-dashboard-agenda-mail-ads-leveranciers#dde5f999",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Besluit: maandbudget voor Meta-ads en een doel-CPA, zodat de Ads-analist onderbouwd kan voorstellen om te pauzeren of op te schalen",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-10-03-dashboard-agenda-mail-ads-leveranciers#e66dd117",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Bevestig welke mailadressen bestaan (info@ en eigen @higrip.nl-adressen) voor de Gmail-koppeling van de module Mail",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-10-03-dashboard-agenda-mail-ads-leveranciers#18bba47a",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Vraag de producent naar levertijd, logo-technieken en kleuren op maat voor personalisatie; die drie staan open in de productwaarheid 2.0 (V5)",
     "uitvoerbaar": null
    }
   ],
   "body_md": "# Dashboard — Agenda, Mail, Ads (Meta + Hermes) en Leveranciers toegevoegd, plus 20 features voor later\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\n- **Gevraagd door Timo (3 okt):** een agenda die met alles verbonden is, een plek om mail te checken (er gaat B2B-mail uit het dashboard), meer contact met de leverancier, en ads met AI-agents via Hermes, inclusief onderzoek naar wat concurrenten draaien.\n- **Keuzes van Timo:**\n  - Meta nu, TikTok later.\n  - De gedeelde info@ plus ieders eigen adres.\n  - Leverancierscontact via mail en WhatsApp/WeChat.\n  - Ads zet voorlopig altijd een mens live. Automatisch binnen een limiet pas als het werk van de AI bevalt.\n- **Gebouwd in prototype v2.8:**\n  - Agenda (week, maand, lijst);\n  - Mail (postvak, wacht op antwoord, concepten en gepland, verstuurd);\n  - Ads (overzicht, campagnes, creatives en tests, concurrenten, regels);\n  - Leveranciers onder Financiën;\n  - een overzicht van 7 Hermes-agents met hun rechten.\n- **Kernprincipe blijft: één bron per gegeven.**\n  - Mail staat alleen in Mail; de relatietijdlijn leest hem daar.\n  - De agenda slaat alleen afspraken op. Taken, posts, reeksmails, facturen, leveringen en ad-tests leest hij uit hun eigen module.\n  - De uitgaven aan ads in Financiën zijn dezelfde getallen als in Ads.\n\n## Acties\n- [ ] P2 · Besluit: maandbudget voor Meta-ads en een doel-CPA, zodat de Ads-analist onderbouwd kan voorstellen om te pauzeren of op te schalen\n- [ ] P2 · Bevestig welke mailadressen bestaan (info@ en eigen @higrip.nl-adressen) voor de Gmail-koppeling van de module Mail\n- [ ] P2 · Vraag de producent naar levertijd, logo-technieken en kleuren op maat voor personalisatie; die drie staan open in de productwaarheid 2.0 (V5)\n\n## Bevindingen\n\n### Wat erbij kwam en hoe het samenhangt\n| Module | Wat | Verbonden met |\n|---|---|---|\n| **Agenda** | Afspraken uit Google Agenda + alles met een datum; filter per persoon en bron; vrije tijd per persoon | To do (afspraken tellen mee in de capaciteit), relatietijdlijn, Home › Vandaag, akkoord (maakt afspraken) |\n| **Mail** | Gmail info@ (gedeeld) + eigen adres; wacht op antwoord met de volgende stap; reeksmails op dag 7 en 14 ingepland na versturen | CRM (reeks, herbestelmail, factuurherinnering), relatietijdlijn, Leveranciers, Mail-triage-agent |\n| **Ads** | Meta-campagnes, A/B-hooktests met winnaarregel, CTR per hoek, concurrenten uit de Meta Ad Library met looptijd | Shopify (echte orders en orderwaarde naast Meta-aankopen), Content (post → ad), Financiën › Uitgaven, Agenda (einde test), To do (live zetten) |\n| **Leveranciers** | Open vragen, levertijd (beloofd tegenover binnen), inkoop, gesprek (mail + WhatsApp/WeChat-log), AI-bericht in het Engels | Inkoop, Mail (info@), Agenda (calls), signaal na 14 dagen |\n| **Hermes-agents** | Denzel, Mail-triage, Ads-onderzoek, Ads-analist, Leverancier-opvolging, Agenda-planner, B2B Klanten Agent | Wacht op akkoord (elk voorstel met de naam van de agent) |\n\n### Grenzen die bewust zijn ingebouwd\n- **Agents hebben alleen lees- en voorsteltools.** Versturen, publiceren, ads live zetten en geld uitgeven kunnen ze niet. Dat sluit aan op [2026-09-29-crm-dashboard-voorstel](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-29-crm-dashboard-voorstel.md) en op de harde grens \"voorstellen mag, versturen doet een mens\".\n- **Ads:** een akkoord maakt een taak; iemand zet het zelf in Ads Manager.\n  - *Automatisch binnen een limiet* staat klaar als latere optie: pauzeren of budget ±20%, maximaal € 10 per dag per campagne, nooit nieuwe ads publiceren.\n  - Aan zodra 8 weken lang ≥ 90% van de voorstellen ongewijzigd is goedgekeurd.\n- **Hoeken en claims:** een test heeft altijd twee verschillende hoeken uit de tone of voice. Claims komen alleen uit het [feitenbestand](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md). Dat past bij de Meta-ads-aanpak in [Strategische Keuzes](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md): eerst invalshoeken testen, dan opschalen.\n- **Meta tegenover Shopify:** Meta rekent aankopen toe via de pixel; dat is niet hetzelfde als een Shopify-order. Het dashboard zet ze naast elkaar.\n- **Concurrenten:** de agent Ads-onderzoek bouwt voort op de routine [Concurrentie-monitor](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Routines/Concurrentie-monitor.md), die al actieve ads in de Meta Ad Library bekijkt. Looptijd is het signaal: een ad die lang loopt, werkt waarschijnlijk.\n- **Mail:**\n  - Iemands eigen mailbox blijft privé, behalve mail die bij een relatie hoort.\n  - Openen en lezen meten we niet: Gmail geeft dat niet.\n- **WhatsApp en WeChat:** die synchroniseren niet vanaf een telefoon. Belangrijke berichten log je op de leverancierspagina.\n\n### 10 features die andere dashboards hebben\n1. Opmerkingen en @-vermeldingen op records (Linear, Attio, HubSpot)\n2. Pijplijnwaarde en forecast (HubSpot, Pipedrive)\n3. Sjablonen voor mail, offerte en terugkerende taken (HubSpot, Linear)\n4. Zelf in te stellen automatiseringen, \"als dit, dan dat\" (Shopify Flow, HubSpot, Attio)\n5. Rollen en rechten (HubSpot, Notion)\n6. Geplande rapporten per mail (Stripe, Shopify, GA4)\n7. Eigen widgets op Home (HubSpot, Stripe)\n8. Pushmeldingen en offline op de telefoon (Linear, Asana)\n9. Doelen met voortgang per kwartaal (Asana Goals, Linear)\n10. Import/export en webhooks (Attio, HubSpot)\n\n### 10 features die HÏ Grip nodig heeft\n1. **Beachhead-scorebord** per kernsport (tennis/padel, voetbal, rugby): leads, klanten, omzet en kosten per klant. Het feitenbestand zegt dat we op alle drie testen en daarna één kiezen; dit scherm maakt die keuze.\n2. **Teamorder met maatformulier:** spelers vullen hun maat in via een link, het dashboard telt op tot één order met de juiste staffel.\n3. **Sample-tracker:** wie kreeg welk sample, opvolging, en hoeveel samples tot een order leiden.\n4. **Clubdeal- en kortingscodeprestaties:** omzet per code uit Shopify.\n5. **Personalisatietraject:** van logo tot levering, met MOQ 150 en de open vragen aan de producent.\n6. **Creatorbeheer:** afspraken, code, deliverables, betaling en resultaat.\n7. **Seizoens- en eventkalender per sport:** benaderen en posten op het juiste moment.\n8. **Claim-checker:** elke mail, ad en post wordt getoetst aan het feitenbestand.\n9. **Retouren, maatadvies en reviews** op één plek.\n10. **Marketplaces in één voorraad:** bol.com en TikTok Shop.\n\n**Voorstel volgorde:**\n1. Eerst de kleine features met veel effect: sample-tracker, kortingscodeprestaties, claim-checker en sjablonen.\n2. Daarna het beachhead-scorebord en de teamorder.\n\n## Wat niet lukte\n- De data in de nieuwe modules is voorbeelddata. Gmail, Google Agenda en Meta zijn in het prototype niet gekoppeld (alleen het Shopify-aantal orders en de gemiddelde orderwaarde zijn echt).\n- Het Research Dashboard is niet opnieuw gepubliceerd: dat gebeurt vanaf info@ (`/research-sync`).\n\n## Bronnen\n- Prototype v2.8: https://claude.ai/artifact/XPnRocf1ZcG1J7pb82QBHy · handboek: https://claude.ai/artifact/AEzJLbcMsYRYRbT1SFNik1\n- Plannen (lokaal): `plans/modules/11-agenda.md`, `12-mail.md`, `13-ads.md`, `06-financien-voorraad.md` (Leveranciers), `08-ai-agents.md` (Hermes), `dashboard-blauwdruk.md` §16\n- Productwaarheid: [Performance Grip Socks 2.0](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Product/Performance%20Grip%20Socks%202.0.md) (V5: personalisatie, levertijd open)\n- Eerder: [2026-10-02-dashboard-apps-patronen](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-02-dashboard-apps-patronen.md), [2026-10-02-ai-in-het-dashboard](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-02-ai-in-het-dashboard.md), [2026-10-02-dashboard-ontwerpregels-kpi](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-02-dashboard-ontwerpregels-kpi.md)\n\n## Aantekeningen",
   "bron": "los",
   "bronbestand": "https://claude.ai/artifact/XPnRocf1ZcG1J7pb82QBHy",
   "bronbestand_url": "https://claude.ai/artifact/XPnRocf1ZcG1J7pb82QBHy",
   "categorie": "Techniek",
   "datum": "2026-10-03",
   "deadline": "",
   "gerelateerd": [
    "2026-10-02-dashboard-apps-patronen",
    "2026-09-29-crm-dashboard-voorstel",
    "2026-10-02-ai-in-het-dashboard",
    "2026-10-02-dashboard-ontwerpregels-kpi",
    "2026-10-04-dashboard-herindeling-ai-mail-koppelingen",
    "2026-10-06-dashboard-v4-opruimen-focusvensters"
   ],
   "id": "2026-10-03-dashboard-agenda-mail-ads-leveranciers",
   "kansen": [],
   "kerncijfers": [],
   "kerntitel": "Agenda, mail, ads en leveranciers uit één bron; agents stellen voor, een mens beslist",
   "prioriteit": "P2",
   "routine": "",
   "samenvatting": "Het dashboard-prototype heeft nu een agenda, mail, ads en een leverancierspagina, en alles hangt aan elkaar: een akkoord op een mail kan een afspraak maken, afspraken tellen mee in de capaciteit en de tijdlijn van een relatie toont mail, chats en afspraken. Agents op Hermes doen het zoek- en rekenwerk, maar alleen als voorstel; versturen, publiceren en ads live zetten blijft mensenwerk. Daarnaast staan er 20 features voor later: 10 die andere dashboards hebben en 10 die HÏ Grip specifiek nodig heeft.",
   "status": "nieuw",
   "titel": "Dashboard — Agenda, Mail, Ads (Meta + Hermes) en Leveranciers toegevoegd, plus 20 features voor later",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-03-dashboard-agenda-mail-ads-leveranciers.md",
   "vervangt": [],
   "wat_niet_lukte": "- De data in de nieuwe modules is voorbeelddata. Gmail, Google Agenda en Meta zijn in het prototype niet gekoppeld (alleen het Shopify-aantal orders en de gemiddelde orderwaarde zijn echt).\n- Het Research Dashboard is niet opnieuw gepubliceerd: dat gebeurt vanaf info@ (`/research-sync`)."
  },
  {
   "acties": [
    {
     "afgevinkt": true,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-10-02-vault-review#2070b100",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "Besluit: welk reviewcijfer op drukwerk — 4,6 (Trustpilot) of 4,5 (higrip.nl)",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": true,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-10-02-vault-review#a2c2a797",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Besluit: adviesprijs retail €17,99 naast webshopprijs €17,95 — bewust of gelijktrekken",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-10-02-vault-review#f1d76446",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Besluit: B2B-minimum 5 paar (Evaluatiecriteria) tegenover prijsstaffel vanaf 6 stuks — één ondergrens kiezen",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": true,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-10-02-vault-review#f60dacc8",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Rugby-sportgids schrijven: rugby is beachhead maar heeft geen website-content",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-10-02-vault-review#91d877f1",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Skills naar `.claude/skills/` in de vault zetten zodat cloudroutines ze kunnen gebruiken",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-10-02-vault-review#0762cc50",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "Dubbele bestandsnamen hernoemen (14× identiteit.md, 11× _Werkplek.md, routine- en geheugenbestanden met gelijke naam) en agentdefinities meenemen",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-10-02-vault-review#bf041d98",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "Oude claude/*-branches op origin opruimen (7 stuks, inhoud staat al in de vault of is off-brand)",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": true,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-10-02-vault-review#495c5acb",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "Onderzoek met vakkennis koppelen: een automatische sectie \"Gerelateerd onderzoek\" per kennisnotitie in vault_nav.py",
     "uitvoerbaar": null
    }
   ],
   "body_md": "# Vault-review — koppelingen, dubbelingen en foutieve informatie\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\nLosse review op verzoek: hoe de vault gekoppeld is, wat dubbel staat, wat ontbreekt en wat fout is. De structuur (feitenbestand, Brand Core, vast notitieformaat, navigatiescript) is sterk. Het zwakke punt is dat feiten na een besluit wel in [Feiten & Actuele Staat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) belanden, maar niet in de kopieën elders. Alles wat zonder besluit kon, is dezelfde dag rechtgezet (zie Bevindingen); de open punten hieronder vragen een besluit of meer werk.\n\n## Kerncijfers\n\n- **242** · Markdown-notities in de vault\n- **4** · Kapotte wikilinks (nu 0)\n- **4** · Verschillende \"live\" thema-ID's in omloop (nu alleen in Technische Procedures)\n- **7** · Sportgidsen met de vervallen 22:00-belofte (nu gecorrigeerd)\n\n## Acties\n\n- [x] P1 · Besluit: welk reviewcijfer op drukwerk — 4,6 (Trustpilot) of 4,5 (higrip.nl)\n- [x] P2 · Besluit: adviesprijs retail €17,99 naast webshopprijs €17,95 — bewust of gelijktrekken\n- [ ] P2 · Besluit: B2B-minimum 5 paar (Evaluatiecriteria) tegenover prijsstaffel vanaf 6 stuks — één ondergrens kiezen\n- [x] P2 · Rugby-sportgids schrijven: rugby is beachhead maar heeft geen website-content\n- [ ] P2 · Skills naar `.claude/skills/` in de vault zetten zodat cloudroutines ze kunnen gebruiken\n- [ ] P3 · Dubbele bestandsnamen hernoemen (14× identiteit.md, 11× _Werkplek.md, routine- en geheugenbestanden met gelijke naam) en agentdefinities meenemen\n- [ ] P3 · Oude claude/*-branches op origin opruimen (7 stuks, inhoud staat al in de vault of is off-brand)\n- [x] P3 · Onderzoek met vakkennis koppelen: een automatische sectie \"Gerelateerd onderzoek\" per kennisnotitie in vault_nav.py\n\n## Bevindingen\n\n### Rechtgezet op 2 oktober\n\n- **Verzendbelofte:** alle 7 sportgidsen zeiden \"voor 22:00 besteld, dezelfde werkdag verzonden\"; nu \"binnen 1 werkdag verzonden\" (besluit 25-9).\n- **Thema-ID's:** [Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md), [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md), [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md) en het Claude-geheugen noemden oude live-ID's. Nu alleen in [Technische Procedures](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Technische%20Procedures.md).\n- **Feitenbestand:** live staat verzending/retour bijgewerkt naar de regressiecheck van 28-9; claimbronnen gelijkgetrokken met de productwaarheid (Friedl 2023 is gemengd bewijs); formuleringsregel toegevoegd; beide reviewcijfers met bron.\n- **AVG:** klantnamen in [Performance Grip Socks 2.0](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Product/Performance%20Grip%20Socks%202.0.md) §6b ingekort tot voornaam + initiaal.\n- **Beachhead:** padel stond als \"geen beachhead\" in [Sportgidsen — overzicht en instructies](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Content/Sportgidsen/Sportgidsen%20%E2%80%94%20overzicht%20en%20instructies.md); tennis/padel is samen één beachhead.\n- **B2B-koers:** [Aanpak](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/Strategie/Aanpak.md) zette pilates op 1, [Evaluatiecriteria (B2B Klanten)](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20A%20-%20B2B%20Klanten/Evaluatiecriteria%20%28B2B%20Klanten%29.md) en [user](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/user.md) noemden pilates als doel; pilates is op 17-9 gestopt. Rugbyclubs toegevoegd als clubtype.\n- **Founders:** [user](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/user.md) noemde Lars als enige opdrachtgever; er zijn drie founders.\n- **Achterhaalde waarden:** het SEO-actieplan (22:00, €30, 4 oprichters) en twee backlogpunten (prijzen van 24-9) gemarkeerd.\n- **Dubbel:** `Week 2026-09-21` (in 04 én 05), `Content Pillars — Buffer-tags` (opgenomen in [Content Pillars](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/01_Content_Agent/Strategie%20%26%20Planning/Content%20Pillars.md)) en `Denzel … Routineprompt stap 9` (vervangen door [Denzel-weekoverzicht](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Routines/Denzel-weekoverzicht.md)) verwijderd; de tabel \"Toon per kanaal\" staat nog alleen in [Brand Voice & Tone of Voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md).\n- **Oude dashboard-URL** in [Denzel Weekoverzicht — Routine](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Denzel%20Weekoverzicht%20%E2%80%94%20Routine.md) vervangen.\n- **Rangorde bij tegenspraak** vastgelegd in `CLAUDE.md` (Canva voor merk, live voor operationele feiten, vault voor de rest).\n- **Routines-README:** `.claude/skills/` bestaat niet in de vault; `BEHEER.json`/`OPDRACHTEN.json` ontstaan pas bij de eerste dashboardactie. Nu zo beschreven.\n- **Ontbrekend:** [Concurrentieanalyse](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Concurrentieanalyse.md) gevuld met wat de vault al wist.\n- **Buiten de vault:** de globale `~/.claude/CLAUDE.md` (€30, \"vandaag verzonden\", 1.500+, gele CTA, gelprotection-claim) en het Claude-geheugen (22:00, pilates, oude handle en thema) bijgewerkt; back-ups in de scratchpad van de sessie.\n\n### Vervolg 2 oktober: besluiten en uitgevoerd werk\n\n- **Reviewscore:** Lars koos **4,6 ★ (Trustpilot)** als merkcijfer; verwerkt in [Feiten & Actuele Staat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) en [Performance Grip Socks 2.0](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Product/Performance%20Grip%20Socks%202.0.md).\n- **Adviesprijs:** retail en webshop allebei **€ 17,95**; de one-pagers met € 17,99 staan als te corrigeren fout in [Performance Grip Socks 2.0](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Product/Performance%20Grip%20Socks%202.0.md) §5.\n- **Rugbygids:** concept in [Gripsokken voor rugby](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Content/Sportgidsen/Gripsokken%20voor%20rugby.md) (regels, clubkous, scrum, natte velden); nog een rugbyfoto en een check door een rugbyer nodig.\n- **Gerelateerd onderzoek:** `vault_nav.py` zet nu onder 44 kennisnotities automatisch de onderzoeksnotities die ernaar linken.\n- **Hernoemen (niet gedaan, advies: niet doen):** de dubbele namen zitten in paden die 11 agentdefinities, `/denzel` en de Denzel-routine gebruiken, ook op de pc's van Lars en Tigo. Er waren maar twee kale, dubbelzinnige links; die zijn vervangen door volledige paden.\n- **Skills naar de vault (niet gedaan, advies: niet doen):** geen enkele routine roept een skill aan; kopiëren maakt een derde versie naast `~/.claude/commands` en de setup-repo. Uitgelegd in de Routines-README.\n- **B2B-minimum:** blijft open (zie acties), wacht op een besluit.\n\n### Wat niet zonder besluit kon\n\nZie Acties. Het historische Growth Radar-basislijn-onderzoek van 15-9 noemt de 1,17 \"echte meetdata\" van HÏ Grip; dat is categoriebewijs. De notitie is archief en is niet aangepast; de formuleringsregel in het feitenbestand dekt dit voortaan af.\n\n## Wat niet lukte\n\nStap B (dashboard naar vault) en de publicatie van het dashboard zijn overgeslagen: die horen vanaf het info@-account te gebeuren, deze sessie draait op een persoonlijk account. De volgende routine of /research-sync vanaf info@ neemt deze notitie mee.\n\n## Bronnen\n\n- Linkanalyse van alle wikilinks in de vault (eigen script, 2-10-2026)\n- `python 05_Research/_build/build_register.py --check` en `vault_nav.py`\n- [Feiten & Actuele Staat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md), [Performance Grip Socks 2.0](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Product/Performance%20Grip%20Socks%202.0.md), [Technische Procedures](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Technische%20Procedures.md), `04_Agent_Infrastructuur/Routines/README.md`, `05_Research/_backlog/ACTIEBACKLOG.md`\n\n## Aantekeningen",
   "bron": "los",
   "bronbestand": "",
   "bronbestand_url": null,
   "categorie": "Merk",
   "datum": "2026-10-02",
   "deadline": "",
   "gerelateerd": [
    "2026-09-28-regressiecheck",
    "2026-09-25-evaluatie-routines",
    "2026-09-21-beachhead-rugby",
    "2026-09-21-weekoverzicht",
    "2026-09-23-seo-conversietest-run-1",
    "2026-10-02-obsidian-structuur-ai-agents"
   ],
   "id": "2026-10-02-vault-review",
   "kansen": [],
   "kerncijfers": [
    {
     "label": "Markdown-notities in de vault",
     "verschil": "",
     "waarde": "242"
    },
    {
     "label": "Kapotte wikilinks (nu 0)",
     "verschil": "",
     "waarde": "4"
    },
    {
     "label": "Verschillende \"live\" thema-ID's in omloop (nu alleen in Technische Procedures)",
     "verschil": "",
     "waarde": "4"
    },
    {
     "label": "Sportgidsen met de vervallen 22:00-belofte (nu gecorrigeerd)",
     "verschil": "",
     "waarde": "7"
    }
   ],
   "kerntitel": "Besluiten van 25-9 stonden alleen in het feitenbestand, niet in de kopieën",
   "prioriteit": "P1",
   "routine": "",
   "samenvatting": "De vault is technisch gezond (4 kapotte links op 242 notities), maar feiten stonden op meer plekken dan de regel 'enige plek' toestaat, waardoor besluiten van 25-9 niet overal doorkwamen: 22:00-belofte in alle 7 sportgidsen, vier verschillende live-thema-ID's, pilates nog als B2B-prioriteit. Dit is op 2-10 rechtgezet; wat overblijft zijn besluiten voor Lars en structureel werk (hernoemen, skills naar de vault, rugbygids).",
   "status": "in-uitvoering",
   "titel": "Vault-review — koppelingen, dubbelingen en foutieve informatie",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-02-vault-review.md",
   "vervangt": [],
   "wat_niet_lukte": "Stap B (dashboard naar vault) en de publicatie van het dashboard zijn overgeslagen: die horen vanaf het info@-account te gebeuren, deze sessie draait op een persoonlijk account. De volgende routine of /research-sync vanaf info@ neemt deze notitie mee."
  },
  {
   "acties": [
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-10-02-obsidian-structuur-ai-agents#353f4bcb",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "Status en echte datum op alle notities in 00–04: voeg `status` toe (actueel, concept of archief), zet `bijgewerkt` terug naar de laatste inhoudelijke wijziging uit git (nu staat overal 1 of 2 oktober) en leg in `CLAUDE.md` vast dat notities met status archief alleen gelezen worden als erom gevraagd wordt",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-10-02-obsidian-structuur-ai-agents#f4f04b6b",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "`vault_lint.py` naast `vault_nav.py`: meldt vervallen waarden uit de Wijzigingslog van het feitenbestand, notities zonder status, `bijgewerkt` dat niet klopt met git en bestanden boven 15 KB buiten `05_Research`; de Actiecontrole draait het en maakt van afwijkingen een backlogpunt",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-10-02-obsidian-structuur-ai-agents#c98ee1c9",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Besluit: waar staat de vault — laten staan in OneDrive met Google Drive erbij, verhuizen naar een map zonder clouddienst, of alleen de `.git`-map verplaatsen met `git init --separate-git-dir` (git en GitHub zijn al de sync; `fsck` is nu schoon)",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-10-02-obsidian-structuur-ai-agents#afd6bc87",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Besluit: één bron voor compliance — de lijst in `00_Brand_Core/Compliance` en notitie 2026-09-07-compliance-todo overlappen 74 tot 83 procent en lopen uit elkaar; voorstel: de lijst in 00 is de bron en de notitie wordt een korte registratie met alleen de acties",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-10-02-obsidian-structuur-ai-agents#3ebe2293",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Map `99_Archief` in de vault voor ruwe en achterhaalde bestanden (SEO-audit 2026-09-25 findings 256 KB, weekoverzichten tot 14-09, origineel Denzel-weekoverzicht, werkdossier 04-09), uitsluiten in Obsidian via Excluded files en in `CLAUDE.md`, en de `bronbestand`-verwijzingen meeverhuizen",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-10-02-obsidian-structuur-ai-agents#3488fdcd",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Globale `CLAUDE.md` van 458 naar onder 200 niet-lege regels: §9 tot §14 en §5 naar de Shopify-skills (laden alleen als ze nodig zijn) of naar `~/.claude/rules`, §2 tot §4 vervangen door een verwijzing naar de vault-`CLAUDE.md`, daarna `/doctor prompt-audit` draaien vanuit een terminal",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-10-02-obsidian-structuur-ai-agents#3f6943bd",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Schrijfrechten per map: tabel in `CLAUDE.md` (wie mag waar schrijven) en deny-regels in `.claude/settings.json` voor `05_Research/_backlog/*.json`, `05_Research/_data/*.json` en `register.js`, zodat alleen `acties.py` en `build_register.py` die bestanden wijzigen; testen in een routine-run",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-10-02-obsidian-structuur-ai-agents#14960853",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "obsidian-git rustiger afstellen: autosave van 2 naar 15 minuten, pull van 2 naar 10, bericht `autosave` met bestandslijst in de body; de instellingen staan in git en gelden voor Lars, Tigo en Timo, dus eerst afstemmen; core-plugin Sync uitzetten (staat aan zonder configuratie)",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-10-02-obsidian-structuur-ai-agents#cad6d1f6",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "Notitie Zoek Script & Gids inkorten van 110 KB (circa 31.000 tokens) naar een gids van hooguit 5 KB; het script zelf staat al in de setup-repo",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-10-02-obsidian-structuur-ai-agents#1493354a",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "`bronbestand` en andere paden in 32 notities vault-relatief maken in plaats van absolute `C:\\Users\\Test`-paden, zodat verhuizen of werken op een andere pc niets breekt",
     "uitvoerbaar": null
    }
   ],
   "body_md": "# Obsidian-structuren voor AI-agents en onze vault ernaast gelegd\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\n- **Wat de bronnen zeggen.** Een goede agent-vault heeft vijf dingen: een korte ingang (CLAUDE.md of AGENTS.md), drie gescheiden lagen (ruwe bronnen die niemand wijzigt, een wiki die de agent bijhoudt, een schema met de regels), voorspelbare paden met vaste frontmatter, ophalen via index en wikilinks in plaats van een vectordatabase, en duidelijke schrijfrechten met git als geschiedenis. Veroudering is het faalpunt dat het vaakst terugkomt.\n- **Wat bij ons goed is.** De ingang is kort (88 regels), er is één feitenbestand met een rangorde bij tegenspraak, 0 kapotte links op 243 notities, een navigatieregel op vrijwel elke notitie, frontmatter op alle 170 kennisnotities en scripts die de machinestaat beheren (nav, build, acties). Geheimen: 0 treffers.\n- **Waar het wringt.** Actualiteit is niet machineleesbaar, logs en kopieën groeien zonder plafond, twee grote documenten zijn uit elkaar gegroeid, de globale CLAUDE.md is ruim 2× te lang, en de vault wordt door OneDrive, Google Drive en obsidian-git tegelijk beschreven (nu zonder schade: `git fsck` is schoon).\n- **Wat te doen.** Eerst status en echte datum op elke kennisnotitie (P1); daarna een lint-script, archiefmap, schrijfrechten, rustiger autosave en twee besluiten (waar de vault staat, welke compliance-lijst de bron is).\n\n## Kerncijfers\n\n- **0** · Kapotte of dubbelzinnige wikilinks op 243 notities\n- **170/170** · Kennisnotities met bijgewerkt van 1 of 2 oktober (bulkstempel)\n- **54%** · Van de laatste 400 commits is een automatische vault backup\n- **458** · Niet-lege regels in de globale CLAUDE.md (richtlijn Anthropic: onder 200)\n\n## Acties\n\n- [ ] P1 · Status en echte datum op alle notities in 00–04: voeg `status` toe (actueel, concept of archief), zet `bijgewerkt` terug naar de laatste inhoudelijke wijziging uit git (nu staat overal 1 of 2 oktober) en leg in `CLAUDE.md` vast dat notities met status archief alleen gelezen worden als erom gevraagd wordt\n- [ ] P2 · `vault_lint.py` naast `vault_nav.py`: meldt vervallen waarden uit de Wijzigingslog van het feitenbestand, notities zonder status, `bijgewerkt` dat niet klopt met git en bestanden boven 15 KB buiten `05_Research`; de Actiecontrole draait het en maakt van afwijkingen een backlogpunt\n- [ ] P2 · Besluit: waar staat de vault — laten staan in OneDrive met Google Drive erbij, verhuizen naar een map zonder clouddienst, of alleen de `.git`-map verplaatsen met `git init --separate-git-dir` (git en GitHub zijn al de sync; `fsck` is nu schoon)\n- [ ] P2 · Besluit: één bron voor compliance — de lijst in `00_Brand_Core/Compliance` en notitie 2026-09-07-compliance-todo overlappen 74 tot 83 procent en lopen uit elkaar; voorstel: de lijst in 00 is de bron en de notitie wordt een korte registratie met alleen de acties\n- [ ] P2 · Map `99_Archief` in de vault voor ruwe en achterhaalde bestanden (SEO-audit 2026-09-25 findings 256 KB, weekoverzichten tot 14-09, origineel Denzel-weekoverzicht, werkdossier 04-09), uitsluiten in Obsidian via Excluded files en in `CLAUDE.md`, en de `bronbestand`-verwijzingen meeverhuizen\n- [ ] P2 · Globale `CLAUDE.md` van 458 naar onder 200 niet-lege regels: §9 tot §14 en §5 naar de Shopify-skills (laden alleen als ze nodig zijn) of naar `~/.claude/rules`, §2 tot §4 vervangen door een verwijzing naar de vault-`CLAUDE.md`, daarna `/doctor prompt-audit` draaien vanuit een terminal\n- [ ] P2 · Schrijfrechten per map: tabel in `CLAUDE.md` (wie mag waar schrijven) en deny-regels in `.claude/settings.json` voor `05_Research/_backlog/*.json`, `05_Research/_data/*.json` en `register.js`, zodat alleen `acties.py` en `build_register.py` die bestanden wijzigen; testen in een routine-run\n- [ ] P2 · obsidian-git rustiger afstellen: autosave van 2 naar 15 minuten, pull van 2 naar 10, bericht `autosave` met bestandslijst in de body; de instellingen staan in git en gelden voor Lars, Tigo en Timo, dus eerst afstemmen; core-plugin Sync uitzetten (staat aan zonder configuratie)\n- [ ] P3 · Notitie Zoek Script & Gids inkorten van 110 KB (circa 31.000 tokens) naar een gids van hooguit 5 KB; het script zelf staat al in de setup-repo\n- [ ] P3 · `bronbestand` en andere paden in 32 notities vault-relatief maken in plaats van absolute `C:\\Users\\Test`-paden, zodat verhuizen of werken op een andere pc niets breekt\n\n## Bevindingen\n\n### Bronnen 1: het instructiebestand is de ingang, geen kennisbank\n\n- Claude Code leest `CLAUDE.md` elke sessie. De documentatie van Anthropic noemt als richtlijn onder 200 regels per bestand; langere bestanden kosten context en verlagen de naleving.\n- Imports met `@pad` besparen geen context, want ze laden bij de start mee. Wat maar voor een deel van het werk geldt, hoort in een skill of in `.claude/rules/` met een `paths`-filter. Een `CLAUDE.md` in een submap laadt pas als Claude bestanden uit die map leest. Blok-HTML-commentaar wordt eruit gehaald voordat het in de context komt, dus onderhoudsnotities kosten geen tokens.\n- Het is context, geen afdwingbare configuratie. Wat hard moet (niet schrijven in map X) hoort in een hook of deny-regel.\n- HumanLayer houdt het eigen root-bestand onder 60 regels, wil verwijzingen in plaats van kopieën, en rekent met zo'n 150 tot 200 instructies die een model betrouwbaar volgt, waarvan ongeveer 50 al in de systeemprompt zitten. Dat is een rekenregel van een derde partij, geen cijfer van Anthropic.\n- Tegenstrijdige instructies: Claude kiest er volgens de documentatie willekeurig een. Loop de bestanden periodiek na; `/doctor prompt-audit` (Claude Code 2.1.283 of nieuwer) doet dat en stelt wijzigingen voor zonder ze door te voeren.\n\n### Bronnen 2: drie lagen, een index en een log (Karpathy, 4 april 2026)\n\n- **Ruwe bronnen** (onveranderlijk, het model leest ze maar schrijft er niet in), **de wiki** (markdownmap die het model bijhoudt) en **het schema** (een `CLAUDE.md` met structuur, namen en werkwijzen).\n- Twee vaste bestanden: `index.md` (catalogus per categorie, bijgewerkt bij elke invoer) en `log.md` (alleen toevoegen, chronologisch, met een parseerbaar voorvoegsel).\n- Drie handelingen: invoeren, vragen (goede antwoorden gaan terug als wikipagina) en **controleren**: tegenstrijdigheden, verouderde beweringen, wezen en ontbrekende kruisverwijzingen.\n- Obsidian is de editor eromheen: grafiek, Web Clipper, Dataview op frontmatter, git voor geschiedenis. Karpathy houdt het schema bewust abstract en laat het meegroeien met wat werkt.\n\n### Bronnen 3: voorspelbare paden en vaste bouwstenen\n\n- Een praktijkvault (okhlopkov) geeft elk project dezelfde vier bouwstenen (`overview`, `tasks`, `ideas`, `ai-docs/`) en zegt: moet de agent raden waar iets hoort, dan is de structuur te slim. Ruwe invoer blijft ongemoeid, de AI-synthese staat ernaast. Genoemde fouten: te complexe mappen, ruwe notities bewerken (herkomst weg), geheimen en geheugen mengen, lange regelboeken, zoeken belangrijker maken dan de werkstroom.\n- Een tweede voorbeeld (Luna-chan): `raw/` (alleen toevoegen), `wiki/` (mens en agent), `projects/` en `output/`. Frontmatter met `title`, `tags`, `status` (active, archived, draft), `updated` en `related`. Met `status: active` zoekt een agent gericht in de actuele kennis.\n\n### Bronnen 4: ophalen via index en wikilinks, niet via een vectordatabase\n\n- De agentic doc harness gebruikt een gegenereerde `VAULT_INDEX.md`, routeert naar een ingangsnotitie en volgt dan uitgaande wikilinks. Op een synthetische vault van 99 notities (15 synthesetaken, beoordeeld door een model) scoorde alleen-wikilinks hoger op onderbouwing (2,53 tegen 2,13) en inzichtwaarde (2,33 tegen 1,53) dan een vector-RAG-basislijn; de hybride variant scoorde overal het hoogst. Kanttekening: klein, synthetisch en een eigen evaluatie.\n- Meerdere gidsen geven hetzelfde advies: begin met platte markdown en git, voeg een MCP-server pas toe voor gestructureerde bewerkingen (backlinks, frontmatter-veilig bewerken).\n- Onze vault is ongeveer 528.000 tokens (schatting, bytes gedeeld door 3,6): te veel om te laden, goed genoeg voor index, hubs en links.\n\n### Bronnen 5: schrijfrechten, back-ups en herkomst\n\n- Mappen met eigenaar (ruwe bronnen, menselijke notities, agent-uitvoer), deny-regels in de projectinstellingen voor bronmappen, plan mode voor een eerste inventaris, `git diff` nalopen en een onafhankelijke back-up (aident.ai).\n- Herkomst is het zwakke punt van markdown: het weet niet welke agent welke regel schreef, heeft zonder git geen revisiegeschiedenis en kent geen reviewpoort (calmara). Meerdere schrijvers op dezelfde notitie geven conflictkopieën in plaats van een foutmelding; houd agents in eigen mappen en laat een mens samenvoegen.\n\n### Bronnen 6: geheugen veroudert stil\n\n- Volgens een zoekresultaat van aiweekly drijft markdown-geheugen weg zonder foutmelding: contextbestanden groeien en spreken zichzelf tegen, en de agent negeert ze zonder dat iemand het ziet. Die pagina was niet te openen, zie \"Wat niet lukte\".\n- Oplossingen die overal terugkomen: een eigenaar per bestand, een vervaldatum of status, periodiek samenvoegen, en wijzigingen via een voorstel dat een mens goedkeurt.\n\n### Bronnen 7: één synchronisatiemethode per vault\n\n- Obsidian zelf waarschuwt: synchroniseer dezelfde vault niet via meerdere diensten, want dat geeft data-conflicten of corruptie. Gebruikersmeldingen over git-repo's in OneDrive of iCloud noemen `bad object`-fouten bij push en pull.\n\n### Bronnen 8: Obsidian-eigen hulpmiddelen voor agents\n\n- `kepano/obsidian-skills` (Steph Ango) leert agents het bestandsformaat: Obsidian Flavored Markdown, Bases, JSON Canvas, de Obsidian CLI en defuddle (schone markdown uit webpagina's). Installatie via de plugin-marketplace of door de inhoud in `.claude/` in de vault te zetten.\n- Bases (core-plugin, bij ons al aan) maakt gefilterde tabellen op frontmatter. Handig voor mensen, maar geen ophaalmethode voor agents; die lezen beter de gewone index.\n\n### Scorekaart: de bronnen naast onze vault\n\n| Eigenschap | Onze stand (gemeten 2-10-2026) | Oordeel |\n|---|---|---|\n| Korte ingang | `CLAUDE.md` in de vault: 88 regels, 7,7 KB, met rangorde bij tegenspraak, harde grenzen en gitregels | goed |\n| Instructies buiten de vault | globale `CLAUDE.md`: 574 regels (458 niet-leeg), 24,8 KB | zwak |\n| Drie lagen | schema = `CLAUDE.md`, wiki = 00–04; ruwe laag bestaat (SEO-audit findings, `bronbestand`) maar is niet gelabeld | matig |\n| Index en log | automatische indexen per map, Wijzigingslog in het feitenbestand, Update Log; geen vaste log voor kennis | matig |\n| Voorspelbare paden | genummerd per agent, 5 niveaus diep; 10 bestandsnamen dubbel (42 bestanden) | matig |\n| Frontmatter | 170 van 170 in 00–04, maar `type` is bij 81% `kennis` en `bijgewerkt` is een bulkdatum | matig |\n| Ophalen | hubs en navigatieregel overal, 0 kapotte links, 7,2 echte uitgaande links per notitie | goed |\n| Controle (lint) | `vault_nav.py` (wezen), `build_register.py --check` (onderzoek), handmatige review; niets op vervallen feiten | zwak |\n| Schrijfrechten | regels in tekst, scripts voor machinestaat, geen deny-regels | matig |\n| Herkomst | git, maar 54% van de commits is een autosave onder de naam Lars | matig |\n| Geheimen | 0 treffers op 7 patronen; `_prive/` en `agenda.json` genegeerd | goed |\n| Synchronisatie | OneDrive, Google Drive en obsidian-git elke 2 minuten op dezelfde map | risico |\n\n### Goed: de ingang, het feitenbestand en de rangorde\n\n- [Feiten & Actuele Staat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) is één bestand van 10 KB (ongeveer 2.900 tokens) met een Wijzigingslog, een formuleringsregel voor grip-claims en de claimbron met DOI (Apps et al. 2022). `CLAUDE.md` verwijst ernaar in plaats van feiten te kopiëren, precies het \"pointers boven kopieën\" uit de bronnen.\n- De navigatieregel staat op alle notities behalve `Home` en `00 Brand Core` zelf. Er zijn geen kapotte of dubbelzinnige wikilinks; de hubs zijn Brand Voice (63 inkomende links), Brand Identity (56) en Update Log (55).\n- Een deel van de \"lint\" uit het Karpathy-patroon bestaat al: wezen-rapport in `vault_nav.py`, `build_register.py --check`, de Actiecontrole en de handmatige review van 2-10.\n\n### Goed: scripts beheren de machinestaat, het model het oordeel\n\n- `acties.py`, `build_register.py` en `vault_nav.py` schrijven `BEHEER.json`, `OPDRACHTEN.json`, `CONTROLE.json`, het register en de navigatie: deterministisch, idempotent, met hash-id's en een vaste conflictregel (de vault wint bij een latere wijziging). Dat is het sterkste patroon uit de bronnen.\n- Geheugen per routine in `05_Research/_geheugen/` met een vaste regel, plus een `MEMORY.md` van 9 regels: overleeft cloudruns en blijft klein.\n\n### Zwak: actualiteit is niet machineleesbaar\n\n- 168 van 170 kennisnotities hebben `bijgewerkt: 2026-10-01`, twee hebben 2026-10-02. Dat is een bulkstempel: de frontmatter is er, maar zegt niets over versheid. `type: kennis` staat bij 137 van de 170 (81%), `status` bij 2 en `laatst-geverifieerd` bij 2 ([Feiten & Actuele Staat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) en de productwaarheid).\n- Gevolg: een agent kan \"vervallen\" niet scheiden van \"actueel\". De tekenreeks 22:00 staat in 26 bestanden (65 plekken, waarvan 38 regels in 17 bestanden buiten gedateerde notities), maar dat zijn vermeldingen en geen actieve beloftes: uitleg dat de belofte vervalt (Home, Feiten, backlog, vault-review en deze notitie), historische vermeldingen in gedateerde stukken (Werkdossier 04-09, Update Log, Agent Werk & Kwaliteit Overzicht) en de open afwijking op de live site (gedeeld metafield, regressiecheck 28-9, niet opnieuw gecontroleerd). Alleen in de ruwe SEO-audit-findings leest 22:00 nog als geldende regel of aanbeveling (onder meer `content.md` regel 87 en `sxo.md` regel 96), terwijl alleen het Actieplan het als achterhaald markeert. Een telling meet dus vermeldingen en geen fouten; een agent kan ze niet uit elkaar houden zonder `status` en `vervangen-door`. Het besluit van 25-9 kwam daardoor pas bij de handmatige review van 2-10 in alle zeven sportgidsen aan ([2026-10-02-vault-review](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-02-vault-review.md)).\n- 36 bestanden buiten gedateerde notities noemen pilates. Een deel is terecht (strategie, hashtags), maar zonder status kan een agent dat niet weten.\n\n### Zwak: logs en kopieën groeien zonder plafond\n\n- `ACTIEBACKLOG.md` is 34 KB (circa 9.600 tokens, 25 open koppen, 4 afgevinkt) en wordt door elke routine gelezen. [Zoek Script & Gids](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/Influencers_Creators/Zoek%20Script%20%26%20Gids.md) is 110 KB (circa 31.000 tokens, 6% van alle tokens in de vault) en bevat de back-up van een script.\n- [Agent Werk & Kwaliteit Overzicht](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Agent%20Werk%20%26%20Kwaliteit%20Overzicht.md) (33 KB), `API & Tool Connections` (27 KB), [Feedback & Iteratie Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Feedback%20%26%20Iteratie%20Log.md) (26 KB) en `Stappenplan — Verdere Bouw` (19 KB) maken van `04_Agent_Infrastructuur` 477 KB: groter dan 00, 01 en 02 samen (403 KB).\n- SEO-audit 2026-09-25: 16 bestanden, 256 KB ruwe subagent-uitvoer midden in `03_Website_Agent/Analyse`, waarvan 11 zonder echte inkomende link. Dat is de ruwe laag uit het Karpathy-patroon, maar ongelabeld en met waarden die al achterhaald zijn.\n- `05_Research` groeit met ongeveer 2 notities per dag (40 in de 18 dagen sinds 15-9). Begin 2027 zijn dat ruim 200 notities, en de automatische lijst in `Waar staat wat` groeit mee.\n\n### Zwak: dubbele documenten lopen uit elkaar\n\n- Compliance: notitie 2026-09-07-compliance-todo (36 KB, 392 regels) en [Compliance To-Do Lijst](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Compliance/Compliance%20To-Do%20Lijst.md) (31 KB, 350 regels). 74% van de regels uit de notitie staat ook in de lijst, 83% omgekeerd; elk heeft eigen regels (97 en 55). Dit is de situatie waar het feitenbestand voor bedoeld was: twee kopieën, geen bron.\n- `Home` heeft een eigen \"Waar staat wat\"-tabel naast de kaart in `05_Research/Waar staat wat` en een Opschoonstatus-log (8,5 KB, tegen 4 KB voor de Brand Core).\n- 14× `identiteit.md`, 11× `_Werkplek.md`, 3× `soul.md` en vier routineprompts met dezelfde naam als hun geheugenbestand: kale wikilinks zijn dubbelzinnig. 14 routineprompts en `Verbeterlus` hebben daardoor geen echte inkomende wikilink en worden alleen via de automatische index en de Routines-README gevonden.\n\n### Zwak: de globale instructielaag is te groot en herhaalt de vault\n\n- `~/.claude/CLAUDE.md` (574 regels, ongeveer 7.000 tokens) laadt in elke sessie, ook bij vaultwerk zoals dit. §9 tot §14 (prompttemplates, layoutpatronen, Nike-, Gymshark- en Oura-patronen, workflows) beslaan regel 192 tot 545: 62% van het bestand en alleen relevant bij Shopify-ontwerpwerk.\n- §2 tot §4 herhaalt kleuren, fonts en tone of voice uit de vault. Dat dubbele werk drijft weg: op 2-10 bevatte dit exemplaar nog oude waarden (€30 verzenddrempel, \"vandaag verzonden\", 1.500+, gele CTA), zie [2026-10-02-vault-review](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-02-vault-review.md).\n- De `CLAUDE.md` in de vault zelf is 88 regels en goed. Houd hem zo.\n\n### Risico: de vault wordt door meerdere dingen tegelijk beschreven\n\n- De vaultmap en `.git` zijn OneDrive-reparsepunten, dus OneDrive synchroniseert ook `.git`. `GoogleDriveFS` draait en de map `.tmp.driveupload` (25 bestanden van 151 tot 12.892 bytes, de grootte van git-objecten en index) is bijgewerkt op precies de commit-tijden 22:09:57, 22:12:06 en 22:14:09. Google Drive pakt de vault dus waarschijnlijk ook op.\n- Daarbovenop commit, pusht en pullt obsidian-git elke 2 minuten (`syncMethod: merge`) terwijl cloudroutines naar dezelfde branch pushen. Een autosave kan een half afgemaakte wijziging van een agent vastleggen.\n- Stand: `git fsck` geeft exitcode 0 (16 dangling objecten, normaal), geen conflictmarkers, geen conflictkopieën. Het is dus een latent risico, geen schade. GitHub houdt de geschiedenis veilig; bij schade is opnieuw clonen het herstel.\n- Herkomst: 215 van de laatste 400 commits (24-6 tot 2-10) zijn \"vault backup\", ook als de wijziging van een lokale Claude-sessie komt. Auteurs: Lars 282, Claude 24, Denzel (Hermes) 5, HÏ Grip 1. Wie wat schreef is niet af te lezen en de git-log kan niet als wijzigingslog dienen.\n- `.obsidian/` staat in git (behalve `workspace.json`), dus plugin-instellingen gelden voor iedereen die de vault ophaalt.\n- `.claude/settings.local.json` bevat alleen allow-regels. \"Nooit met de hand\" voor `BEHEER.json`, `OPDRACHTEN.json` en `CONTROLE.json` staat in de procedure maar wordt niet afgedwongen. Routines mogen bovendien het feitenbestand bijwerken (rangorde 2 in `CLAUDE.md`) zonder tweede bron of reviewpoort.\n\n### Kleinere punten\n\n- De core-plugin Sync van Obsidian staat aan, maar er is geen `sync.json`: niet geconfigureerd. Uitzetten voorkomt een per ongeluk gestarte tweede sync.\n- 32 notities bevatten absolute `C:\\Users\\Test`-paden, onder meer in `bronbestand`. Dat breekt bij verhuizen en werkt niet op de pc van Lars of Tigo.\n- `register.js` (799 KB) is een gegenereerd bestand dat in git staat en bij elke build verandert.\n- Bronnen voor claims staan als DOI of URL in het feitenbestand; de documenten zelf staan niet in de vault. Voor publieke papers is dat prima, voor bestanden in `Downloads` (zoals het merkdocument) niet.\n\n## Wat niet lukte\n\n- Stap B (dashboard naar vault) en de publicatie van het dashboard zijn overgeslagen: het dashboard is van info@ en deze sessie draait op een persoonlijk account. De volgende routine-run of `/research-sync` vanaf info@ neemt deze notitie mee.\n- De pagina van aiweekly over \"prompt debt\" gaf HTTP 403. De bewering over stil verouderend markdown-geheugen komt uit een zoekresultaat en is niet aan de bron gecontroleerd.\n- Niet vastgesteld of Google Drive de map Documenten werkelijk back-upt; dat is afgeleid uit `.tmp.driveupload` en de tijdstippen. Controle: Google Drive, Instellingen, Mappen van je computer.\n- Niet getest of cloudroutines deny-regels uit `.claude/settings.json` van de repo toepassen.\n- Het getal van 150 tot 200 instructies is van HumanLayer en de evaluatie van de doc harness is eigen werk op een synthetische vault; beide zijn richting, geen bewijs.\n\n## Bronnen\n\n- Anthropic, hoe Claude Code geheugen laadt: https://code.claude.com/docs/en/memory\n- Karpathy, LLM Wiki (4 april 2026): https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f, samenvatting: https://www.noze.it/en/insights/llm-wiki/\n- HumanLayer, een goede CLAUDE.md schrijven: https://humanlayer.com/blog/writing-a-good-claude-md\n- Agentic doc harness voor Obsidian: https://dev.to/nickyeolk/think-with-your-second-brain-a-proper-claude-code-harness-for-obsidian-2c0o\n- Agent-leesbare vault (okhlopkov): https://okhlopkov.com/second-brain-obsidian-claude-code/\n- Vault voor mens en agent (Luna-chan): https://dev.to/luna_chan/a-practical-obsidian-vault-for-human-ai-agent-collaboration-2bkp\n- Claude Code zonder notities te verliezen: https://aident.ai/blog/claude-code-obsidian-without-losing-notes\n- Waar de vault-aanpak stopt (herkomst): https://calmara.app/blog/shared-memory-for-ai-assistants\n- Obsidian-skills van Steph Ango: https://github.com/kepano/obsidian-skills\n- Obsidian over synchroniseren: https://obsidian.md/help/sync-notes\n- Niet geopend (403), alleen zoekresultaat: https://aiweekly.co/alerts/markdown-agent-memory-accumulates-prompt-debt\n- Eigen metingen op 2-10-2026: scan van alle Markdown-notities (links, frontmatter, grootte, vervallen waarden, geheimen), `git fsck`, `git log` over 400 commits en `.obsidian/plugins/obsidian-git/data.json`\n- [Agent Bestandsschema (Soul, Identiteit, User)](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Agent%20Bestandsschema%20%28Soul%2C%20Identiteit%2C%20User%29.md) voor de opzet van identiteit en soul\n\n## Aantekeningen",
   "bron": "los",
   "bronbestand": "",
   "bronbestand_url": null,
   "categorie": "Techniek",
   "datum": "2026-10-02",
   "deadline": "",
   "gerelateerd": [
    "2026-10-02-vault-review",
    "2026-09-28-optimalisatiecheck-werkwijze-routines-en-dashboard",
    "2026-09-07-compliance-todo"
   ],
   "id": "2026-10-02-obsidian-structuur-ai-agents",
   "kansen": [],
   "kerncijfers": [
    {
     "label": "Kapotte of dubbelzinnige wikilinks op 243 notities",
     "verschil": "",
     "waarde": "0"
    },
    {
     "label": "Kennisnotities met bijgewerkt van 1 of 2 oktober (bulkstempel)",
     "verschil": "",
     "waarde": "170/170"
    },
    {
     "label": "Van de laatste 400 commits is een automatische vault backup",
     "verschil": "",
     "waarde": "54%"
    },
    {
     "label": "Niet-lege regels in de globale CLAUDE.md (richtlijn Anthropic: onder 200)",
     "verschil": "",
     "waarde": "458"
    }
   ],
   "kerntitel": "Sterke structuur voor agents, maar geen vangnet voor verouderde feiten",
   "prioriteit": "P2",
   "routine": "",
   "samenvatting": "De vault is voor agents goed opgezet (korte CLAUDE.md, één feitenbestand, 0 kapotte links, frontmatter op alle kennisnotities), maar mist een vangnet voor verouderde informatie: alle 170 bijgewerkt-stempels zijn een bulkdatum, er is geen status voor archief en geen automatische controle op vervallen waarden. Voor higrip.nl betekent dat dat een besluit zoals de vervallen 22:00-belofte alleen via een handmatige review overal doorkomt, en dat OneDrive, Google Drive en een autosave elke 2 minuten onnodig op dezelfde map schrijven.",
   "status": "nieuw",
   "titel": "Obsidian-structuren voor AI-agents en onze vault ernaast gelegd",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-02-obsidian-structuur-ai-agents.md",
   "vervangt": [],
   "wat_niet_lukte": "- Stap B (dashboard naar vault) en de publicatie van het dashboard zijn overgeslagen: het dashboard is van info@ en deze sessie draait op een persoonlijk account. De volgende routine-run of `/research-sync` vanaf info@ neemt deze notitie mee.\n- De pagina van aiweekly over \"prompt debt\" gaf HTTP 403. De bewering over stil verouderend markdown-geheugen komt uit een zoekresultaat en is niet aan de b…"
  },
  {
   "acties": [
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-10-02-navigatie-en-takentijdlijn#bbd9f471",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Besluit: standaardcapaciteit voor de To do-tijdlijn, voorstel 4 uur per werkdag per persoon, per persoon aan te passen in Instellingen › Gebruikers",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-10-02-navigatie-en-takentijdlijn#dcfcdda4",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Het klikbare test-prototype van het dashboard doorlopen en per module noteren wat mist of anders moet",
     "uitvoerbaar": null
    }
   ],
   "body_md": "# Dashboard — navigatie (alle menu's) en To do als tijdlijn per persoon\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\n- **Navigatie in drie niveaus:**\n  - de zijbalk (module);\n  - de pill-balk bovenin (submenu);\n  - binnen het scherm (tabbladen, panelen, detailpagina's met een kruimelpad).\n\n  Dieper gaat het nergens. Op elk submenu kun je linken, dus je kunt een link naar een scherm delen.\n- **De zijbalk staat in groepen.**\n  - Home (los);\n  - WERK: To do, CRM, Content;\n  - INZICHT: Webshop, Financiën, Research;\n  - SYSTEEM: Bestanden, AI & agents, Instellingen.\n\n  Tien modules is boven de grens van 5–7 waarboven je volgens de bronnen groepslabels nodig hebt. Daarom de groepen, die naar doel zijn ingedeeld en niet naar de techniek.\n- **Altijd bovenin:**\n  - ⌘K (zoeken en naar een scherm gaan);\n  - Vraag Denzel;\n  - + snel toevoegen;\n  - meldingen;\n  - profiel.\n\n  Op mobiel komt er een onderbalk met 5 knoppen: Home · To do · + · Akkoord · Meer.\n- **To do wordt een tijdlijn.**\n  - Een rij per persoon plus een rij *Nog niemand*, met de dagen als kolommen en een kolom *Verlopen*.\n  - Elke taak is een balk in de kleur van de module waar hij vandaan komt, met een P-badge.\n  - Slepen: opzij verandert de datum, naar een andere rij verandert de eigenaar, aan de rand verandert de duur.\n  - Onder elke rij een bezettingsbalk per dag (geplande uren tegenover de capaciteit). Wie over de capaciteit gaat, kleurt rood, en Denzel stelt een verschuiving voor. Een mens geeft akkoord.\n  - Lijst, Bord en Gedaan blijven als tabbladen.\n- **Bij het tekenen gevonden:** de voorraadcheck moet *voorraad + onderweg* tellen. Anders vraagt het systeem opnieuw om bij te bestellen terwijl er al een levering onderweg is. Verwerkt in `plans/modules/06-financien-voorraad.md`.\n\n## Acties\n\n- [ ] P2 · Besluit: standaardcapaciteit voor de To do-tijdlijn, voorstel 4 uur per werkdag per persoon, per persoon aan te passen in Instellingen › Gebruikers\n- [ ] P2 · Het klikbare test-prototype van het dashboard doorlopen en per module noteren wat mist of anders moet\n\n## Bevindingen\n\n### Navigatie: wat de bronnen zeggen en wat we overnemen\n- **Zijbalk voor apps met veel onderdelen, een bovenbalk alleen voor wat overal geldt** (zoeken, account, meldingen, een maakknop). De meeste volwassen producten combineren die twee. Wij doen dat ook.\n- **5–7 hoofdonderdelen, daarboven groepslabels.** Groepeer naar het doel van de gebruiker, niet naar de organisatie of de database. Onze groepen Werk (doen), Inzicht (kijken) en Systeem (beheren) volgen dat.\n- **Submenu's als tabbladen binnen het onderdeel** (bijv. Overzicht, Instellingen, Activiteit), met kruimelpaden voor detailpagina's. Bij ons zijn dat de pill-balk en het kruimelpad op relatie-, notitie- en routinepagina's.\n- **De command palette (⌘K) komt naast de zichtbare navigatie, niet in plaats ervan.**\n- **Mobiel:** maximaal 5 knoppen in een onderbalk, de rest via *Meer*.\n\n### Tijdlijn en bezetting: hoe grote tools het doen\n- **Asana en Monday tonen dezelfde taken als lijst, bord, kalender, tijdlijn en *workload*.** Workload laat per persoon zien hoe vol iemand zit (capaciteitsbalken), en slepen past de eigenaar of de datum aan. Dat nemen we over: één takenlijst, vier weergaven.\n- **Swimlanes per persoon zitten niet standaard in de tijdlijn van Asana.** Gebruikers vragen er al jaren om op het forum. Voor drie mensen is precies dat het nuttigst: daarom combineren we tijdlijn en workload in één scherm (rij = persoon).\n- **Voor ons klein:** geen afhankelijkheden tussen taken, geen sprints en geen mijlpalen. Een taak heeft een start, een deadline, een geschatte duur, een eigenaar en een bron (module).\n\n## Bronnen\n\n- [SaaS Navigation UX Patterns — saasui.design](https://www.saasui.design/blog/saas-navigation-ux-patterns)\n- [SaaS navigation menu design — Lollypop](https://lollypop.design/blog/2025/december/saas-navigation-menu-design/)\n- [Sidebar design for web apps — ALF Design Group](https://www.alfdesigngroup.com/post/improve-your-sidebar-design-for-web-apps)\n- [Asana Workload](https://asana.com/features/resource-management/workload)\n- [Asana: Lists, Boards, Calendar en Timeline](https://asana.com/inside-asana/manage-workflow-project-views)\n- [Asana Forum — \"Please add swimlanes to Timeline\"](https://forum.asana.com/t/please-add-swimlanes-to-timeline/24745)\n- Uitwerking (lokaal): `plans/modules/00-navigatie.md`, `plans/modules/02-todo.md`, `plans/dashboard-blauwdruk.md`\n\n## Aantekeningen",
   "bron": "los",
   "bronbestand": "C:\\Users\\Test\\.claude\\plans\\modules\\00-navigatie.md",
   "bronbestand_url": null,
   "categorie": "Techniek",
   "datum": "2026-10-02",
   "deadline": "",
   "gerelateerd": [
    "2026-09-29-crm-dashboard-voorstel",
    "2026-09-26-dashboard-ux-onderzoek",
    "2026-10-02-dashboard-apps-patronen"
   ],
   "id": "2026-10-02-navigatie-en-takentijdlijn",
   "kansen": [],
   "kerncijfers": [],
   "kerntitel": "Zijbalk in 4 groepen, max 3 niveaus; To do wordt een tijdlijn met een rij per persoon",
   "prioriteit": "P2",
   "routine": "",
   "samenvatting": "Het dashboard krijgt een zijbalk in vier groepen (Home · Werk · Inzicht · Systeem) met per module 3–6 submenu's in een pill-balk, en nooit meer dan drie niveaus diep. To do wordt standaard een tijdlijn met een rij per persoon (Lars, Tigo, Timo, Nog niemand), waarin je met slepen de datum, eigenaar of duur wijzigt en per dag ziet wie overvol zit.",
   "status": "nieuw",
   "titel": "Dashboard — navigatie (alle menu's) en To do als tijdlijn per persoon",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-02-navigatie-en-takentijdlijn.md",
   "vervangt": [],
   "wat_niet_lukte": ""
  },
  {
   "acties": [],
   "body_md": "# Growth Radar — Social naar website (geen kwalificerende vondst)\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\nGeen relevante ontwikkelingen vandaag. Alles wat vandaag over paid social, creatives, attributie, CAPI en funnel naar boven kwam, viel af op de harde filter uit de routine: geen primaire bron, niet geldig voor Nederland, of al bekend sinds de social-run van 25 september.\n\n## Bevindingen\n### Gecontroleerd, niet opgenomen\n- **Meta-attributievensters en Conversions API als minimale tracking-standaard:** meerdere adtech-blogs (geen van allen Meta zelf, Search Engine Land of een andere bron uit de toegestane lijst) herhalen de verwijdering van de 7- en 28-dagendagvensters van 12 januari 2026 — die staat al sinds 18 september in het geheugen. Een losse claim over een verkort engaged-view-venster (10s → 5s) en een \"CAPI attribution boost\" bleek bij doorklikken terug te voeren op een LinkedIn-post, niet op Meta's eigen documentatie: niet genoemd.\n- **Meta Advantage+/Andromeda-creativetips (hook rate, 9:16-formaat, UGC):** generieke adviesartikelen zonder eigen meetdata en zonder primaire Meta-bron — precies het type contentfarm-materiaal dat de routine moet negeren.\n- **TikTok Shop \"Sell Across EU\" (pilot 21 sep, live 19 okt 2026):** geverifieerd via ChannelX (7 sep 2026). Betreft uitsluitend **Britse** verkopers die vanuit hun UK-account naar twaalf EU-landen (incl. Nederland) mogen uitbreiden — niet relevant voor een Nederlandse verkoper als HÏ Grip, en geen paid-social/CAPI/funnel-onderwerp. Hoort eerder thuis bij de concurrentie- of TikTok Shop-afweging (P2-punt 13) dan bij de vrijdagfocus; te mager voor een eigen punt.\n- **TikTok Shop \"Smart Promotion Program\" (vaste 3,5%/4,5% GMV-fee, verplicht voor deelname aan platformcampagnes):** bevestigd via ppc.land (22 juni 2026), maar het artikel behandelt expliciet alleen de Amerikaanse markt — geen bevestiging dat dit voor NL/EU-verkopers geldt. Niet overgenomen in P2-punt 13 zolang dat niet vaststaat.\n\n## Wat niet lukte\nGeen van de bovenstaande kandidaten voldeed aan alle drie de eisen uit stap 4 (nieuw, concreet voor higrip.nl, uitvoerbaar of expliciet \"volgen\"). Geen toegangsproblemen; de bronnen zelf waren ontoereikend.\n\n## Bronnen\n- [Meta restricts attribution windows and data retention in Ads Insights API — ppc.land](https://ppc.land/meta-restricts-attribution-windows-and-data-retention-in-ads-insights-api/) (al bekend sinds 18 sep 2026)\n- [TikTok Shop Sell Across EU launches 19th October 2026 — ChannelX, 7 sep 2026](https://channelx.world/2026/09/tiktok-shop-sell-across-eu-launches-19th-october-2026/)\n- [TikTok Shop's Smart Promotion now costs sellers 3.5% of all GMV — ppc.land, 22 jun 2026](https://ppc.land/tiktok-shops-smart-promotion-now-costs-sellers-3-5-of-all-gmv/)\n- DAP #035 (Digital Analytics Pills), 5 apr 2026 — afgewezen: verwijst naar een LinkedIn-post, geen Meta-bron\n\n## Aantekeningen",
   "bron": "routine",
   "bronbestand": "",
   "bronbestand_url": null,
   "categorie": "Social",
   "datum": "2026-10-02",
   "deadline": "",
   "gerelateerd": [
    "2026-09-25-growth-radar-social",
    "2026-09-18-growth-radar-social",
    "2026-10-03-growth-radar-social-content"
   ],
   "id": "2026-10-02-growth-radar-social",
   "kansen": [],
   "kerncijfers": [],
   "kerntitel": "Geen nieuwe, bruikbare ontwikkeling voor paid social, creatives, CAPI of funnel",
   "prioriteit": "P3",
   "routine": "growth-radar",
   "samenvatting": "Geen van de vandaag gevonden berichten over Meta-attributie, Meta-creatives of TikTok Shop haalde de drempel van een primaire bron, geldigheid voor Nederland en een concrete koppeling aan higrip.nl. Bestaande P3-punten 9, 10 en 13 (creators, CAPI, TikTok Shop) blijven ongewijzigd staan.",
   "status": "nieuw",
   "titel": "Growth Radar — Social naar website (geen kwalificerende vondst)",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-02-growth-radar-social.md",
   "vervangt": [],
   "wat_niet_lukte": "Geen van de bovenstaande kandidaten voldeed aan alle drie de eisen uit stap 4 (nieuw, concreet voor higrip.nl, uitvoerbaar of expliciet \"volgen\"). Geen toegangsproblemen; de bronnen zelf waren ontoereikend."
  },
  {
   "acties": [
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-10-02-dashboard-ontwerpregels-kpi#a537b023",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "Bij de echte bouw: geef ook de CRM- en Financiën-tegels een vorige-periodebasis en een ‘Vooral …’-regel zodra die cijfers per periode bestaan",
     "uitvoerbaar": null
    }
   ],
   "body_md": "# Dashboard — 7 ontwerpregels (uiux.build) getoetst aan prototype v2, KPI-tegels aangescherpt\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\n- **Aanleiding:** een Instagram-post van uiux.build met zeven regels voor dashboardontwerp, gedeeld door Timo met de vraag hoe we dit kunnen toepassen. Instagram markeert de post als AI-content. Lees hem dus als checklist, niet als onderzoek.\n- **Vijf regels zaten er al in:**\n  1. belangrijkste cijfers bovenaan;\n  2. gegroepeerd in kaarten;\n  3. één kaartstijl;\n  4. eenvoudige grafieken met één reeks;\n  5. filters en zoeken (⌘K, weergaven, zoekvelden).\n- **Het gat zat in regel 5 en 7 en in de reacties onder de post.** Daar staat dat een dashboard een besluit moet verkleinen: een vergelijkingsbasis plus *wat veranderde / waarom / volgende stap*. Onze KPI-tegels gaven een percentage zonder zichtbare basis, zonder oorzaak, en je zag niet dat je erop kon klikken.\n- **Gebouwd in prototype v2.6:** de vorige periode staat als stippellijn in de minigrafiek; een regel *Vooral …* benoemt het onderdeel dat het meest veranderde; elke klikbare tegel heeft een ›.\n\n## Acties\n- [ ] P3 · Bij de echte bouw: geef ook de CRM- en Financiën-tegels een vorige-periodebasis en een ‘Vooral …’-regel zodra die cijfers per periode bestaan\n\n## Bevindingen\n\n### Toetsing per regel\n\n| Regel | In v2? | Waar |\n|---|---|---|\n| 1. Belangrijkste cijfers bovenaan | ja | KPI-strip bovenaan Home, CRM, Webshop, Financiën en AI |\n| 2. Verwante data groeperen | ja | kaarten per onderwerp, grid van 12 kolommen |\n| 3. Eén kaartstijl | ja | één `kpi()`-functie voor alle tegels |\n| 4. Geen overvolle grafieken | ja | staafgrafiek en sparkline met één reeks; doellijn alleen waar een doel is |\n| 5. Trends in de tijd | deels → nu ja | sparklines waren er al, maar zonder basis. Nu met de vorige periode als stippellijn |\n| 6. Filters en zoeken | ja | ⌘K-palet, opgeslagen weergaven, zoekvelden in Relaties, Research en Bestanden |\n| 7. Acties zichtbaar | deels → nu ja | één primaire knop per scherm stond er al. Klikbare tegels hadden geen zichtbaar teken, nu een › |\n\n### Wat er in de tegel kwam\n- **Basis:** de stippellijn is dezelfde periode ervoor, op dezelfde schaal. In de deltaregel staat een klein stippellijntje vóór *vs. vorige 30 d*, zodat de legenda in de tegel zelf zit.\n- **Wat veranderde:** de regel wordt berekend en de grootste verschuiving staat eerst.\n  - **Home-omzet:** webshop tegenover B2B, in euro's.\n  - **Home-orders:** webshop tegenover B2B, in aantallen.\n  - **Webshop-omzet:** aantal orders tegenover gemiddelde orderwaarde. Die twee hebben een andere eenheid, dus de rangorde loopt op het procentuele verschil.\n  - Voorbeeld met echte Shopify-data (30 dagen): *Vooral aantal orders 4, was 15 · gem. orderwaarde € 29,43, was € 43,93*.\n- **Niets dubbel:** de oude subregel *webshop € … · B2B € …* is vervangen door de nieuwe regel, niet aangevuld.\n- **Uitlijning:** KPI-labels staan op één regel met afkapping, en twee te lange labels zijn ingekort. Zo staan de cijfers in een rij weer op gelijke hoogte.\n\n## Bronnen\n- uiux.build, *7 Dashboard Design Rules*, Instagram, september 2026: https://www.instagram.com/p/DdtcfHOt20t/ (door Instagram gemarkeerd als AI-content), met de reacties onder de post over vergelijkingsbasis en volgende stap.\n- Prototype v2.6: https://claude.ai/artifact/XPnRocf1ZcG1J7pb82QBHy · handboek: https://claude.ai/artifact/AEzJLbcMsYRYRbT1SFNik1\n- Eerder onderzoek: [2026-10-02-dashboard-apps-patronen](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-02-dashboard-apps-patronen.md) (de Stripe-tegel met delta, sparkline en bron), [2026-09-26-dashboard-ux-onderzoek](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-26-dashboard-ux-onderzoek.md).\n\n## Aantekeningen",
   "bron": "los",
   "bronbestand": "https://claude.ai/artifact/XPnRocf1ZcG1J7pb82QBHy",
   "bronbestand_url": "https://claude.ai/artifact/XPnRocf1ZcG1J7pb82QBHy",
   "categorie": "Techniek",
   "datum": "2026-10-02",
   "deadline": "",
   "gerelateerd": [
    "2026-10-02-dashboard-apps-patronen",
    "2026-09-26-dashboard-ux-onderzoek",
    "2026-10-03-dashboard-agenda-mail-ads-leveranciers",
    "2026-10-04-dashboard-bruikbaarheidsaudit",
    "2026-10-04-dashboard-efferd-volgorde-cijfers"
   ],
   "id": "2026-10-02-dashboard-ontwerpregels-kpi",
   "kansen": [],
   "kerncijfers": [],
   "kerntitel": "Een KPI-tegel toont wat veranderde, tegen welke basis en waar je verder kijkt",
   "prioriteit": "P3",
   "routine": "",
   "samenvatting": "Prototype v2 voldeed al aan vijf van de zeven regels; het gat zat in de KPI-tegels: de vergelijking was een percentage zonder zichtbare basis, en niet te zien was wat de verandering veroorzaakte of dat je erop kon klikken. Nu tonen de tegels de vorige periode als stippellijn in de minigrafiek, een regel ‘Vooral …’ met het onderdeel dat het meest veranderde, en een › naar de bron.",
   "status": "nieuw",
   "titel": "Dashboard — 7 ontwerpregels (uiux.build) getoetst aan prototype v2, KPI-tegels aangescherpt",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-02-dashboard-ontwerpregels-kpi.md",
   "vervangt": [],
   "wat_niet_lukte": ""
  },
  {
   "acties": [
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-10-02-dashboard-apps-patronen#b58f424a",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Prototype v2 met Lars en Tigo doorlopen (Ctrl K, slepen, goedkeuren, ongedaan maken) en per module noteren wat mist of anders moet",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-10-02-dashboard-apps-patronen#f04e4d42",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Besluit: in het echte dashboard echte data tonen waar die bestaat (webshop, research, routines, koppelingen) en alleen nieuwe data invoeren voor wat nog nergens digitaal staat (relaties, orders, taken, voorraad)",
     "uitvoerbaar": null
    }
   ],
   "body_md": "# Dashboard — patronen uit Linear, Stripe, Shopify, Attio, HubSpot en Asana, verwerkt in prototype v2\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\n- **Eén bron, alles afgeleid.** In v1 waren schermen losse plaatjes, waardoor getallen elkaar konden tegenspreken. In v2 rekent elk scherm uit één dataset.\n  - Signalen worden berekend: factuur te laat, voorraad + onderweg onder het herbestelpunt, stil in gesprek, herbestelmoment, dubbele relatie. Ze verdwijnen vanzelf zodra de oorzaak weg is.\n  - Tellers in de zijbalk tellen alleen wat op jou wacht.\n- **Snelheid zoals Linear:**\n  - ⌘K zoekt over alle objecten en acties, met de sneltoets ernaast;\n  - G-sneltoetsen om te navigeren;\n  - J/K om door lijsten te lopen;\n  - spatie om snel te bekijken zonder de lijst te verlaten.\n- **Ongedaan maken in plaats van bevestigen.** Elke wijziging werkt direct en geeft een melding met *Ongedaan maken*. Een bevestigingsvraag komt alleen bij iets onomkeerbaars (voorbeelddata herstellen).\n- **Lijsten zoals Shopify en Attio:**\n  - tabs zijn opgeslagen weergaven, en je bewaart je eigen weergave met zoekterm en sortering;\n  - sorteren via de kolomkop;\n  - rijen selecteren voor bulkacties;\n  - lege staten die zeggen wat je nu kunt doen.\n- **Relatiepagina zoals HubSpot:** links eigenschappen die je met één klik wijzigt (Attio), in het midden de tijdlijn met een invoerveld, rechts de volgende actie, kerncijfers en open taken.\n- **KPI's zoals Stripe:**\n  - per tegel één getal, de verandering tegenover de vorige periode, een minigrafiek en de bron met de datum;\n  - een periodekiezer (7, 30 of 90 dagen);\n  - kleur alleen voor status.\n- **Werkdruk zoals Asana:** capaciteit per persoon, rood boven de grens, en slepen om toe te wijzen of te verschuiven.\n\n## Acties\n\n- [ ] P2 · Prototype v2 met Lars en Tigo doorlopen (Ctrl K, slepen, goedkeuren, ongedaan maken) en per module noteren wat mist of anders moet\n- [ ] P2 · Besluit: in het echte dashboard echte data tonen waar die bestaat (webshop, research, routines, koppelingen) en alleen nieuwe data invoeren voor wat nog nergens digitaal staat (relaties, orders, taken, voorraad)\n\n## Bevindingen\n\n### Wat de bronnen zeggen\n- **Stripe:** een vaste, eigenzinnige home zonder te configureren widgets. Elke tegel heeft één getal plus de vergelijking met de vorige periode en een minigrafiek. Kleur staat alleen voor status. Eén zoekveld zoekt over alle objecten. Lege schermen leggen uit wat de volgende stap is.\n- **Linear:**\n  - ⌘K is het centrale instappunt; acties staan erin met hun sneltoets, en wat bij de huidige pagina hoort staat bovenaan;\n  - het werkt met het toetsenbord;\n  - er is een triage-inbox voor nieuw werk, met \"later\" (snooze) in gewone taal;\n  - elk item heeft een eigen URL.\n- **Shopify (Polaris):** tabs zijn opgeslagen weergaven. Zoeken en filteren maken een nieuwe weergave, bulkacties staan op geselecteerde rijen, en een lege staat begeleidt naar de volgende stap.\n- **Attio:**\n  - één lijst met meerdere weergaven (tabel en kanban);\n  - kaarten sleep je tussen fases;\n  - eigenschappen wijzig je op de plek waar ze staan;\n  - een zijpaneel om een record te bekijken.\n- **HubSpot:** de recordpagina heeft drie kolommen: eigenschappen, activiteitentijdlijn (komende activiteiten bovenaan) en gekoppelde records.\n- **Asana Workload:** de inspanning per persoon tegenover de capaciteit. Een rode lijn betekent overvol, en slepen wijst toe of verschuift.\n- **NN/g:** lengte en positie lees je het snelst af. Een dashboard is om in één oogopslag te zien en te handelen, en mensen haken af als het te druk is.\n- **Undo tegenover bevestigen:** bevestigingsdialogen leren mensen om zonder lezen door te klikken. Een omkeerbare actie voer je direct uit, met *Ongedaan maken*. Bevestig alleen wat onomkeerbaar is of anderen raakt.\n\n### Wat er in v2 zit\n- **Eén dataset** met relaties, orders, taken, voorstellen, voorraad, posts en bestanden. De echte vault-data komt er bij het bouwen in: Shopify-dagen, GA4-weken, Search Console, koppelingen, alle notities en de routinetabel.\n- **Hele stromen werken van begin tot eind:**\n  - reeks goedkeuren → beltaak op dag 21;\n  - uitkomst A, C of D → status en vervolgtaak;\n  - offerte → order → verzonden, waarbij de voorraad daalt;\n  - inkoop besteld → het voorraadsignaal verdwijnt;\n  - dubbele relatie samenvoegen → het signaal verdwijnt.\n- **Mobiel:** een onderbalk (Home · To do · + · Akkoord · Meer), panelen als sheet, en tabs die je opzij kunt scrollen.\n- **Huisstijl (Brand Core van 1 oktober):**\n  - H1 in Black Italic, labels in SemiBold met +0,24 em;\n  - titanium als grijs op zwart;\n  - iconen met vierkante uiteinden;\n  - de CTA is een pill met chevron, nooit gevuld met een accentkleur.\n\n## Bronnen\n\n- [Stripe Dashboard Design Breakdown — 925 Studios](https://www.925studios.co/blog/stripe-dashboard-design-breakdown)\n- [Chart layout for Stripe Apps](https://docs.stripe.com/stripe-apps/patterns/chart-layout)\n- [Linear’s delightful design patterns — Gunpowder Labs](https://gunpowderlabs.com/2024/12/22/linear-delightful-patterns)\n- [Linear — conceptual model](https://linear.app/docs/conceptual-model)\n- [Index table — Shopify Polaris](https://polaris-react.shopify.com/components/tables/index-table)\n- [Attio — kanban views](https://attio.com/help/reference/managing-your-data/views/create-and-manage-kanban-views) · [Attio — record pages](https://attio.com/help/reference/managing-your-data/records/configure-record-pages)\n- [HubSpot — record page layout](https://knowledge.hubspot.com/records/work-with-records)\n- [Asana — workload](https://help.asana.com/s/article/portfolio-workload-and-universal-workload?language=en_US)\n- [NN/g — Dashboards: preattentive attributes](https://www.nngroup.com/articles/dashboards-preattentive/)\n- [Confirmation dialogs and undo — UX Planet](https://uxplanet.org/confirmation-dialogs-how-to-design-dialogues-without-irritation-7b4cf2599956)\n- Prototype v2 (privé): https://claude.ai/artifact/XPnRocf1ZcG1J7pb82QBHy · bron in `plans/prototype-bron/`\n\n## Aantekeningen",
   "bron": "los",
   "bronbestand": "https://claude.ai/artifact/XPnRocf1ZcG1J7pb82QBHy",
   "bronbestand_url": "https://claude.ai/artifact/XPnRocf1ZcG1J7pb82QBHy",
   "categorie": "Techniek",
   "datum": "2026-10-02",
   "deadline": "",
   "gerelateerd": [
    "2026-10-02-navigatie-en-takentijdlijn",
    "2026-09-29-crm-dashboard-voorstel",
    "2026-09-26-dashboard-ux-onderzoek",
    "2026-10-02-ai-in-het-dashboard",
    "2026-10-02-dashboard-ontwerpregels-kpi",
    "2026-10-03-dashboard-agenda-mail-ads-leveranciers",
    "2026-10-04-dashboard-herindeling-ai-mail-koppelingen",
    "2026-10-04-dashboard-bruikbaarheidsaudit"
   ],
   "id": "2026-10-02-dashboard-apps-patronen",
   "kansen": [],
   "kerncijfers": [],
   "kerntitel": "Eén dataset en afgeleide signalen maken het dashboard betrouwbaar",
   "prioriteit": "P2",
   "routine": "",
   "samenvatting": "De beste werk-apps (Linear, Stripe, Shopify, Attio, HubSpot, Asana) delen een paar vaste patronen. Het belangrijkste: alle schermen rekenen uit één bron, en signalen en tellers worden berekend in plaats van ingevuld. Verder: ⌘K voor alles, opgeslagen weergaven als tabs, snel bekijken zonder de lijst te verlaten, en ongedaan maken in plaats van ‘weet je het zeker?’. Prototype v2 is op die manier herbouwd: elke actie werkt door in alle modules en niets staat meer dubbel.",
   "status": "nieuw",
   "titel": "Dashboard — patronen uit Linear, Stripe, Shopify, Attio, HubSpot en Asana, verwerkt in prototype v2",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-02-dashboard-apps-patronen.md",
   "vervangt": [],
   "wat_niet_lukte": ""
  },
  {
   "acties": [
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-10-02-ai-in-het-dashboard#2cc0d27b",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Besluit: AI in het dashboard bouwen volgens de vijf regels (AI stelt voor en een mens beslist, met reden, corrigeerbaar, rekenregels waar het kan, zuinig en privé)",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-10-02-ai-in-het-dashboard#b3862590",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "De AI-functies die nu werken in het prototype uitproberen met echte vragen (Denzel, Mijn dag, Leg de cijfers uit, Slimme selectie, Reactie lezen) en per functie kiezen: houden, aanpassen of schrappen",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-10-02-ai-in-het-dashboard#c023dc01",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "Een maandlimiet voor de Claude API-sleutel vastleggen in Instellingen › AI-limiet zodra het besluit over de API-sleutel valt (schatting $10–40/mnd)",
     "uitvoerbaar": null
    }
   ],
   "body_md": "# AI in het HÏ Grip-dashboard — waar het helpt, hoe het werkt en waar een mens beslist\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\n- **Waar AI het meest oplevert:**\n  - schrijven: eerste mail, belscript, herbestelmail, caption;\n  - samenvatten: een relatie, een onderzoek, je dag;\n  - uitleggen: wat doen de webshopcijfers;\n  - vragen in gewone taal: Denzel, slimme selectie;\n  - voorstellen: een uitkomst na een reactie, verschuivingen in de planning, ideeën per pilaar.\n- **Waar AI níet moet rekenen:** herbestelpunten, reeksdagen, te late facturen en dubbele relaties zijn vaste regels. Er zijn te weinig orders voor een voorspelmodel. AI legt een afwijking hooguit uit.\n- **Vijf regels** (uit de richtlijnen van Microsoft, Linear, HubSpot en Anthropic):\n  1. AI stelt voor, een mens beslist en verstuurt;\n  2. altijd met reden en bron;\n  3. makkelijk corrigeren en ongedaan maken;\n  4. rekenregels waar het kan, AI waar het helpt;\n  5. zuinig en privé: snel model voor korte taken, maandlimiet, geen onnodige klantgegevens in prompts.\n- **Hoe het technisch werkt:** Denzel is een \"augmented LLM\" met tools: zoeken, relatie, taken, capaciteit, voorraad en research. Elke wijziging die hij wil (*propose_task*, *propose_move*) wordt een voorstel in Wacht op akkoord. Elke AI-actie komt in het logboek, als audittrail.\n- **In het prototype** draait AI op het Claude-account van de gebruiker, die eerst om toestemming wordt gevraagd. In de app wordt dat de Claude API-sleutel met een maandlimiet.\n\n## Acties\n\n- [ ] P2 · Besluit: AI in het dashboard bouwen volgens de vijf regels (AI stelt voor en een mens beslist, met reden, corrigeerbaar, rekenregels waar het kan, zuinig en privé)\n- [ ] P2 · De AI-functies die nu werken in het prototype uitproberen met echte vragen (Denzel, Mijn dag, Leg de cijfers uit, Slimme selectie, Reactie lezen) en per functie kiezen: houden, aanpassen of schrappen\n- [ ] P3 · Een maandlimiet voor de Claude API-sleutel vastleggen in Instellingen › AI-limiet zodra het besluit over de API-sleutel valt (schatting $10–40/mnd)\n\n## Bevindingen\n\n### Wat andere apps doen\n- **HubSpot Breeze:**\n  - de assistent vat records samen, schrijft follow-ups en bereidt gesprekken voor;\n  - de Prospecting Agent zoekt koopsignalen en schrijft persoonlijke outreach in de merkstem;\n  - sinds januari 2026 laten *Audit Cards* precies zien wat een agent deed.\n- **Linear Triage Intelligence:** zoekt eerst kandidaten met gewone zoektechniek en laat dan een LLM oordelen: dubbel, verwant, voorgestelde eigenaar en label. Altijd met een korte uitleg, en de mens accepteert of wijst af.\n- **Shopify Sidekick:** beantwoordt vragen over de eigen winkeldata in gewone taal (\"waarom daalt de omzet?\") en doet sinds Winter '26 ook uit zichzelf aanbevelingen.\n- **Anthropic, *Building effective agents*:**\n  - begin met één goede aanroep en voeg pas complexiteit toe als die aantoonbaar beter werkt;\n  - investeer in duidelijke tools;\n  - bouw menselijke controlepunten in.\n- **Microsoft, 18 richtlijnen voor mens-AI-interactie:**\n  - maak duidelijk wat het systeem kan;\n  - maak corrigeren makkelijk;\n  - leg uit waarom het iets doet.\n- **Voorraad-AI voor e-commerce:** voorspelmodellen hebben veel verkoophistorie nodig. Een vaste regel (verbruik × levertijd + buffer), met AI om uit te leggen en afwijkingen te duiden, past bij een jong merk.\n\n### De 22 functies in het prototype\n- **Werkt nu (13):**\n  - Overal: Denzel (vraag alles).\n  - Home: Mijn dag.\n  - To do: Plan mijn week, de overvol-waarschuwing.\n  - CRM: mail en belscript schrijven, reactie lezen → uitkomst, relatie samenvatten + volgende stap, slimme selectie, dubbele relaties.\n  - Content: captions, ideeën per pilaar.\n  - Webshop: leg de cijfers uit.\n  - Research: notitie samenvatten.\n- **Voorbeeld (4):** kandidaten zoeken en scoren, actuele punten, herbestelmail, inkoopvoorstel.\n- **Routine (3):** het Denzel-weekoverzicht, Verbanden & kansen, de Uitvoerder.\n- **Later (2):** afwijkingen signaleren, uitgaven categoriseren.\n\nDe volledige lijst staat in het prototype, onder AI & agents › AI-functies. Per functie staan daar het patroon, de trigger, het model en het menselijke controlepunt.\n\n## Bronnen\n\n- [Anthropic — Building effective agents](https://www.anthropic.com/engineering/building-effective-agents)\n- [HubSpot Breeze agents in 2026 — eesel](https://www.eesel.ai/blog/breeze-agents) · [HubSpot Breeze — Sybill](https://www.sybill.ai/blogs/hubspot-breeze-ai)\n- [Linear — How we built Triage Intelligence](https://linear.app/now/how-we-built-triage-intelligence) · [Linear — Triage](https://linear.app/docs/triage)\n- [Shopify Sidekick 2026 — Mesa](https://www.getmesa.com/blog/shopify-sidekick)\n- [Microsoft — Guidelines for Human-AI Interaction](https://www.microsoft.com/en-us/research/blog/guidelines-for-human-ai-interaction-design/)\n- [AI inventory forecasting for Shopify — Prediko](https://www.prediko.io/blog/ai-inventory-forecasting-shopify)\n- Prototype v2 (privé): https://claude.ai/artifact/XPnRocf1ZcG1J7pb82QBHy · bron in `plans/prototype-bron/`\n\n## Aantekeningen",
   "bron": "los",
   "bronbestand": "https://claude.ai/artifact/XPnRocf1ZcG1J7pb82QBHy",
   "bronbestand_url": "https://claude.ai/artifact/XPnRocf1ZcG1J7pb82QBHy",
   "categorie": "Techniek",
   "datum": "2026-10-02",
   "deadline": "",
   "gerelateerd": [
    "2026-10-02-dashboard-apps-patronen",
    "2026-09-29-crm-dashboard-voorstel",
    "2026-09-26-onderzoek-nieuwe-routines",
    "2026-10-03-dashboard-agenda-mail-ads-leveranciers"
   ],
   "id": "2026-10-02-ai-in-het-dashboard",
   "kansen": [],
   "kerncijfers": [],
   "kerntitel": "AI schrijft, vat samen en stelt voor; rekenregels rekenen; een mens beslist",
   "prioriteit": "P2",
   "routine": "",
   "samenvatting": "Voor een team van drie levert AI het meest op bij schrijven (mails, belscripts, captions), samenvatten en uitleggen, vragen stellen aan je eigen data en concrete voorstellen doen. Steeds met een korte reden en altijd met een mens die goedkeurt. Voorraad, reeksen en signalen blijven vaste rekenregels: er is te weinig historie voor een voorspelmodel. In prototype v2 werken nu 13 van de 22 AI-functies, waaronder Denzel met tools, Mijn dag, Leg de cijfers uit en Slimme selectie.",
   "status": "nieuw",
   "titel": "AI in het HÏ Grip-dashboard — waar het helpt, hoe het werkt en waar een mens beslist",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-02-ai-in-het-dashboard.md",
   "vervangt": [],
   "wat_niet_lukte": ""
  },
  {
   "acties": [],
   "body_md": "# Growth Radar — CRO (1 oktober 2026)\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\nShopify's eigen sessiemeting-update van 21-23 september 2026 kan de conversieratio in Shopify Analytics laten verschuiven zonder echte gedragsverandering — relevant omdat higrip.nl rond diezelfde periode een pack-prijs-/verzenddrempeltest plant waarvan het effect via diezelfde ratio gemeten zou worden.\n\n## Bevindingen\n### Shopify telt sessies en `checkout_started` sinds 21-23 sep 2026 anders\nShopify rolde tussen 21 en 23 september 2026 een \"session measurement update\" uit (Shopify Help Center, primaire bron). Sessies lopen niet langer af om middernacht UTC, maar bij 30 minuten inactiviteit; sessies zonder pageview (bijv. direct naar checkout via een cart-link) tellen nu ook mee; herkende bot-sessies worden standaard uit sessie-gerelateerde rapporten gefilterd. Shopify benoemt expliciet dat \"Reached checkout rate\" en \"Checkout conversion rate\" hierdoor kunnen veranderen, terwijl bestellingen, omzet en klantaantallen niet beïnvloed worden.\n\n> **Voor higrip.nl:** Backlogpunt 1 (gratis-verzenddrempel op de productpagina) en 12 (prijs per paar) plannen een voor-/na-conversievergelijking rond een wijziging in dezelfde sectie (`snippets/product-information-content.liquid`). Gebruik je daarvoor de ingebouwde Shopify Analytics-conversieratio, dan loopt de meetbreuk van 21-23 september precies vóór die periode: een verschil kan dan net zo goed de meetwijziging zijn als het effect van de test. Hetzelfde geldt voor het al openstaande GA4-meetgat (backlogpunt 11, `keyEvents = 0`) — apart probleem, maar in dezelfde week.\n\n**Actie:** zie backlog P2.\n\n## Wat niet lukte\nDrie andere sporen uit deze dagfocus zijn gecontroleerd maar niet opgenomen omdat ze niet terug te voeren waren op een primaire of nieuw-gedateerde bron: trust-badge-conversiecijfers (alleen vendor-case-studies zonder methodologie), strikethrough-prijsweergave-tests (marketingblogs, geen primaire studie) en Baymard-cijfers over het aantal formuliervelden (evergreen contentpagina, geen aantoonbare 2026-update — het cijfer over 35,26% conversiewinst door checkout-fixes stond al in de notitie van 17 september). Ook het Shopify-release-overzicht van oktober 2026 (shopify.dev) bevatte voor een Nederlandse single-market winkel geen relevante wijziging.\n\n## Bronnen\n- [Shopify Help Center — Session measurement update](https://help.shopify.com/en/manual/reports-and-analytics/discrepancies/session-measurement-update)\n- [Shopify Help Center — Analytics updates](https://help.shopify.com/en/manual/reports-and-analytics/discrepancies/analytics-updates)",
   "bron": "routine",
   "bronbestand": "",
   "bronbestand_url": null,
   "categorie": "CRO",
   "datum": "2026-10-01",
   "deadline": "",
   "gerelateerd": [
    "2026-09-17-growth-radar-cro",
    "2026-09-24-growth-radar-cro",
    "2026-09-23-seo-conversietest-run-1",
    "2026-09-28-seo-conversietest-run-2",
    "2026-09-03-analytics-kpi-meetgat"
   ],
   "id": "2026-10-01-growth-radar-cro",
   "kansen": [],
   "kerncijfers": [],
   "kerntitel": "Shopify wijzigde conversieratio-meting net vóór je pack-prijs/verzenddrempel-test",
   "prioriteit": "P2",
   "routine": "growth-radar",
   "samenvatting": "Shopify's sessiemeting-update (21-23 september 2026) telt sessies en checkout_started anders, waardoor de ingebouwde Shopify Analytics-conversieratio kan verschuiven zonder dat het koopgedrag verandert. Dat valt vlak vóór de geplande pack-prijs-/verzenddrempeltest (backlogpunt 1/12), dus een voor-/na-meting via Shopify Analytics moet deze meetbreuk eerst uitsluiten.",
   "status": "nieuw",
   "titel": "Growth Radar — CRO (1 oktober 2026)",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-10-01-growth-radar-cro.md",
   "vervangt": [],
   "wat_niet_lukte": "Drie andere sporen uit deze dagfocus zijn gecontroleerd maar niet opgenomen omdat ze niet terug te voeren waren op een primaire of nieuw-gedateerde bron: trust-badge-conversiecijfers (alleen vendor-case-studies zonder methodologie), strikethrough-prijsweergave-tests (marketingblogs, geen primaire studie) en Baymard-cijfers over het aantal formuliervelden (evergreen contentpagina, geen aantoonbare…"
  },
  {
   "acties": [
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-09-30-search-console#0b8e490a",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "[search-console] Titel/meta van `/pages/ontdek-jouw-sport` herschrijven: gemiddelde positie 3,9 (28 dagen) maar 0% CTR over 120 vertoningen — titel/omschrijving sluiten vermoedelijk niet aan bij de zoekintentie",
     "uitvoerbaar": null
    }
   ],
   "body_md": "# Search Console & rankings — week 40\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\nTweede meting van deze routine. Search Console en GA4 waren beide bereikbaar (`check` gaf \"ok\"). De maandtrend (28 dagen) blijft sterk positief op alle KPI's; de weektrend daalt voor de tweede week op rij in klikken, bij aantallen die nog te klein zijn voor een harde conclusie. Twee onderdelen kon ik weer niet meten: het generatieve-AI-impressierapport en de indexeringsstatus.\n\n## Kerncijfers\n\n- **146** · Klikken (28 dagen) · +160,7%\n- **3.979** · Vertoningen (28 dagen) · +55,3%\n- **3,67%** · CTR (28 dagen) · +1,48 pt\n- **9,2** · Gemiddelde positie (28 dagen) · 2,1 beter\n\n## Bevindingen\n\n### Kerncijfers — totaal higrip.nl\n\n| Periode | Klikken | Vertoningen | CTR | Gem. positie |\n|---|---|---|---|---|\n| Laatste 7 dagen (21–27 sep) | 24 | 911 | 2,63% | 7,6 |\n| Vorige 7 dagen (14–20 sep) | 37 | 1.065 | 3,47% | 8,6 |\n| Verschil | **−35,1%** | −14,5% | −0,84 pt | +1,0 (beter) |\n| Laatste 28 dagen (31 aug–27 sep) | 146 | 3.979 | 3,67% | 9,2 |\n| Vorige 28 dagen (3–30 aug) | 56 | 2.562 | 2,19% | 11,3 |\n| Verschil | **+160,7%** | +55,3% | +1,48 pt | +2,1 (beter) |\n\nZelfde patroon als vorige week: de maandtrend is op elke KPI positief, de weektrend niet. Vorige week daalden de wekelijkse klikken al 38,9%; deze week weer 35,1%, op een nog kleiner totaal (24). Bij zulke lage aantallen kan één dag het beeld kantelen — geen trendbreuk concluderen, wel blijven volgen. Let op: Search Console-data loopt 3 dagen achter, dus de meest recente dagen van elke periode zijn nog niet volledig.\n\n### Kernkeywords (7 dagen, 21–27 sep, tenzij anders vermeld)\n\n| Zoekterm | Positie | Vorige positie | Verschil | Rankende URL |\n|---|---|---|---|---|\n| gripsokken | 5,9 | 7,1 | **+1,2** | `/products/hi-grip-gripsokken-1` |\n| grip socks (28 dagen, meer volume) | 11,4 | 12,7 | +1,3 | verdeeld over 4 URL's (zie Kannibalisatie) |\n| grip socks (7 dagen) | 11,8 | 10,3 | −1,5 | idem |\n| gripsokken kopen | 14 (5 vert.) | 10 | −4 | `/products/hi-grip-gripsokken-1` |\n| gripsokken voetbal | 41,8 (4 vert.) | 57,7 | +15,9 | `/blogs/hi-grip/hoe-zorg-ik-voor-mijn-gripsokken` |\n| gripsokken padel / tennis / rugby | geen data | — | — | — |\n| antislip sokken / anti slip sokken | 1,7–6 (1–3 vert., 28 dagen) | — | — | wisselend, te weinig data |\n\n\"Gripsokken\" is deze week op één pagina geconcentreerd (81 vertoningen, geen kannibalisatie zichtbaar) — een verbetering ten opzichte van de vorige meting. \"Gripsokken kopen\" en \"gripsokken voetbal\" blijven ver onder de 100 vertoningen; geen conclusie. \"Gripsokken padel\", \"-tennis\" en \"-rugby\" staan nog steeds niet in de top 50 (7 én 28 dagen) — ondanks dat `/pages/gripsokken-voor-padel` inmiddels wél bestaat en 5 vertoningen trekt (zie Pagina's), rankt die pagina niet zichtbaar op de exacte term \"gripsokken padel\".\n\n### Nieuwe zoektermen (7 dagen)\n\nVan de 50 gemeten termen zijn er 26 nieuw, bijna allemaal eenmalige tikfout-varianten van \"grip socks\"/\"gripsokken\" (bijv. \"grib socks\", \"gryp socks\", \"grid socks\", \"gripsokjes\", \"gripsokken action\") met 1 vertoning — geen nieuws. Eén curiositeit zonder genoeg volume om iets mee te doen: \"fibromyalgie drukpunten\" (1 vertoning, positie 15) landt op de blog over drukpunten van sporters — ander publiek dan bedoeld, te weinig data om op te reageren.\n\n### Kansen\n\n**Striking distance (positie 5–20, ≥ 20 vertoningen, 7 dagen):**\n\n| Zoekterm | Positie | Vertoningen |\n|---|---|---|\n| gripsokken | 5,9 | 81 |\n| grip sokken | 9,0 | 47 |\n| grip socks | 11,8 | 46 |\n| gripsocks | 6,7 | 22 |\n\nAllemaal al gevolgde kernkeywords — geen nieuwe actie.\n\n**Lage CTR — nieuw dit keer (28 dagen, ≥ 100 vertoningen):**\n\n| Pagina | Vertoningen | CTR | Positie |\n|---|---|---|---|\n| `/pages/ontdek-jouw-sport` | 120 | **0%** | 3,9 |\n| `/en/blogs/hi-grip/hoe-zorg-ik-voor-mijn-gripsokken` | 112 | 0% | 8,1 |\n| `/blogs/hi-grip/waarom-hi-grip-gripsokken` | 194 | 1,03% | 6,9 |\n| `/products/performance-grip-socks-2-0-zwart` | 167 | 0,6% | 4,9 |\n\nDe overige lage-CTR-pagina's uit deze meting (`/products/hi-grip-gripsokken-1`, `/en/collections/gripsokken`, `/collections/all`, `/collections/gripsokken`) hebben al een openstaand backlogpunt (17, 18 of het feitenbestand) — niet opnieuw voorgesteld. Nieuw en opvallend: **`/pages/ontdek-jouw-sport`** rankt sterk (gem. positie 3,9, ook al 27 vertoningen/7 dagen op positie 4,2) maar trok in 28 dagen geen enkele klik — actie hieronder. `/products/performance-grip-socks-2-0-zwart` (0,6% CTR) is al verklaard door het openstaande punt dat de SEO-titels voor de 2.0-producten nog op CONCEPT staan (niet live, zie `2026-09-23-seo-conversietest-run-1#52494c22`) — geen nieuwe actie, bevestiging van bestaand punt.\n\n### Kannibalisatie\n\n**\"grip socks\"** blijft verdeeld over dezelfde vier eigen URL's als vorige meting: `/en` (15 vert., pos. 10,5), `/collections/all` (14 vert., pos. 12,5), `/products/performance-grip-socks-2-0-zwart` (4 vert.) en `/` (5 vert., pos. 8,4) — al genoteerd als backlogpunt 18, niet opnieuw voorgesteld. **\"gripsokken\"** (hoofdkeyword) toont deze week geen kannibalisatie — geconcentreerd op `/products/hi-grip-gripsokken-1`.\n\n### Pagina's (7 dagen, top gesorteerd op klikken)\n\n| Pagina | Klikken | Vertoningen | Positieverschil |\n|---|---|---|---|\n| `/` | 15 | 140 | **+2,8** (beter) |\n| `/products/hi-grip-gripsokken-1` | 3 | 273 | +0,5 |\n| `/en` | 2 | 113 | −1,2 |\n| `/collections/all` | 1 | 107 | +1,1 |\n| `/en/collections/gripsokken` | 1 | 60 | −0,9 |\n| `/blogs/hi-grip/de-wetenschap-achter-gripsokken` | 1 | 27 | −0,8 |\n| `/pages/gripsokken-voor-padel` (nieuw) | 1 | 5 | — |\n\nGrootste daler: `/blogs/hi-grip/hoe-zorg-ik-voor-mijn-gripsokken` (−3,9, van 4,1 naar 8,0, 49 vertoningen) — volgen, nog geen actie waard op dit volume. Grootste stijger: de homepage (+2,8, zie Doorwerking hieronder).\n\n### Indexering\n\nNiet te meten: `google_data.py` heeft geen commando voor het Index Coverage-rapport. Zelfde beperking als vorige meting, geen cijfer verzonnen.\n\n### Doorwerking van eerdere verbeteringen\n\n`CONTROLE.json` bevestigt sinds 25 september 2026 (`2026-09-21-weekoverzicht#fded3395`, methode `site`) dat de nieuwe homepage-titel (\"HÏ Grip | Performance Gripsokken voor Sporters\") en meta description live staan. Sindsdien is de positie van `/` duidelijk verbeterd: 7 dagen van gem. 9,4 naar 6,6 (+2,8), 28 dagen van 18,8 naar 11,9 (+6,9) — al valt een deel van dat 28-dagenvenster nog vóór de wijziging. CTR van de homepage is met 10,71% (7 dagen) en 11,58% (28 dagen) ruim boven de rest van de site. Voorzichtige conclusie: de titelwijziging lijkt te werken; volgende week bevestigt dit verder.\n\nOverige concepten uit `_geheugen/seo-conversietest.md` (SEO-titels 2.0-producten, herschreven collectiebeschrijving, alt-teksten) staan nog op CONCEPT, dus niets nieuws om op te meten. De verborgen maatgidspagina staat nog niet gepubliceerd.\n\n## Wat niet lukte\n\n- Generatieve-AI-impressierapport (AI Overviews/AI Mode): niet ondersteund door `google_data.py`. Blijft open als backlogpunt 15 (P2) — geen nieuwe actie nodig.\n- Indexeringsstatus (geïndexeerd/niet-geïndexeerd, foutredenen): zelfde beperking.\n\n## Acties\n\n- [ ] P2 · [search-console] Titel/meta van `/pages/ontdek-jouw-sport` herschrijven: gemiddelde positie 3,9 (28 dagen) maar 0% CTR over 120 vertoningen — titel/omschrijving sluiten vermoedelijk niet aan bij de zoekintentie\n\n## Bronnen\n\n- `python 05_Research/_tools/google_data.py check|gsc --dagen 7 --top 50|gsc --dagen 28 --top 50|ga4` (30 sep 2026)\n- `00_Brand_Core/Feiten & Actuele Staat.md`\n- `05_Research/_geheugen/search-console.md`, `05_Research/_geheugen/seo-conversietest.md`\n- `05_Research/_backlog/ACTIEBACKLOG.md`, `05_Research/_backlog/CONTROLE.json`\n\n## Aantekeningen",
   "bron": "routine",
   "bronbestand": "",
   "bronbestand_url": null,
   "categorie": "SEO",
   "datum": "2026-09-30",
   "deadline": "",
   "gerelateerd": [
    "2026-09-25-search-console",
    "2026-09-28-regressiecheck",
    "2026-09-28-seo-conversietest-run-2",
    "2026-09-29-growth-radar-seo-content",
    "2026-10-06-growth-radar-seo-content"
   ],
   "id": "2026-09-30-search-console",
   "kansen": [],
   "kerncijfers": [
    {
     "label": "Klikken (28 dagen)",
     "verschil": "+160,7%",
     "waarde": "146"
    },
    {
     "label": "Vertoningen (28 dagen)",
     "verschil": "+55,3%",
     "waarde": "3.979"
    },
    {
     "label": "CTR (28 dagen)",
     "verschil": "+1,48 pt",
     "waarde": "3,67%"
    },
    {
     "label": "Gemiddelde positie (28 dagen)",
     "verschil": "2,1 beter",
     "waarde": "9,2"
    }
   ],
   "kerntitel": "Homepage-titel duwt positie flink omhoog; /ontdek-jouw-sport blijft op 0% CTR",
   "prioriteit": "P2",
   "routine": "search-console",
   "samenvatting": "De 28-dagentrend blijft sterk positief (klikken +160,7%, vertoningen +55,3%) en de homepage — waarvan de titel sinds 25 september bevestigd live staat — klom in positie van gemiddeld 9,4 naar 6,6 (7 dagen); de wekelijkse klikken daalden voor de tweede week op rij (−35,1%), maar dat blijft bij 24 klikken nog ruis. Nieuw: /pages/ontdek-jouw-sport scoort met gemiddelde positie 3,9 goed, maar trok over 120 vertoningen in 28 dagen geen enkele klik.",
   "status": "nieuw",
   "titel": "Search Console & rankings — week 40",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-30-search-console.md",
   "vervangt": [],
   "wat_niet_lukte": "- Generatieve-AI-impressierapport (AI Overviews/AI Mode): niet ondersteund door `google_data.py`. Blijft open als backlogpunt 15 (P2) — geen nieuwe actie nodig.\n- Indexeringsstatus (geïndexeerd/niet-geïndexeerd, foutredenen): zelfde beperking."
  },
  {
   "acties": [],
   "body_md": "# Growth Radar — AI-search (Google's Universal Cart draait nu echt, maar nog niet in Nederland)\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\nBij de vorige AI-search runs ([2026-09-16-growth-radar-ai-search](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-16-growth-radar-ai-search.md), [2026-09-23-growth-radar-ai-search](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-23-growth-radar-ai-search.md)) was Universal Cart/UCP nog een aankondiging (Google NRF 2026). Die is inmiddels een live product geworden — alleen niet voor Nederlandse webshops. Verder onderzoek deze week (ChatGPT/AI Mode-interfacewijzigingen, een vermeende uitbreiding van het Perplexity Merchant Program) leverde geen bevinding op die de harde filter doorstond: geen concrete datum, of geen aantoonbaar verschil met wat al bekend is.\n\n## Bevindingen\n\n### Universal Cart is sinds 19 mei 2026 live in de VS, met AP2 als betaallaag — Nederland (nog) niet genoemd\nGoogle's Universal Cart (aangekondigd op I/O 2026, zie basislijn) is geen concept meer: het rolde op 19 mei 2026 uit in de VS, met producten toevoegen vanuit Search, Gemini, YouTube en Gmail, prijsdaling-tracking en Google Wallet-koppeling. Uitbreiding naar de Gemini-app volgde \"deze zomer\" (dus inmiddels), YouTube en Gmail komen daarna. Canada, Australië en het VK staan gepland voor later; Nederland en de rest van Europa worden niet genoemd. Onder de motorkap zit AP2 (Agent Payments Protocol, sinds 16 september 2025 een open standaard met 60+ partners waaronder Mastercard, PayPal en Amex), dat in april 2026 naar v0.2.0 ging en inmiddels aan de FIDO Alliance is overgedragen — Google maakt er dus bewust een branche-brede standaard van in plaats van een eigen slot.\n\n> **Voor higrip.nl:** Dit raakt vooralsnog niets direct: geen NL-rollout, en het artikel spreekt over \"participating merchants\" die zelf UCP moeten adopteren, niet over een automatische opname zoals bij ChatGPT/Shopify Catalog. Het bevestigt wel de onderbouwing van het al bestaande P1-punt 4 (Merchant Center feed/variant-ID's): die feed is straks niet alleen voor Shopping-ads, maar ook de ingang voor Universal Cart zodra dat naar Europa komt. Geen nieuwe actie — de bestaande actie dekt dit al.\n\n**Actie:** Geen nieuwe actie. Backlogpunt 4 bijgewerkt met deze datum als extra controlepunt (zie backlog).\n\n## Wat niet lukte\n\nTwee sporen leverden geen bevinding op die de harde filter (Stap 4) doorstond, en zijn daarom niet opgenomen:\n- Het Google Search Central-webmasterrapport van september 2026 meldt dat Google \"AI Mode\" en \"AI Overviews\" verder samenvoegt en nieuwe knoppen op de homepage test (Create Images, Ask About Files, Brainstorm) — maar zonder concrete datum en zonder duidelijke relatie tot shopping-zoekopdrachten. Te vaag om als bevinding op te nemen; overlapt bovendien met de al gelogde trend (volle-lengte AI Overviews, 29 sep).\n- Een claim dat het Perplexity Merchant Program via een Firmly.ai/PayPal-partnerschap nu open zou staan voor webshops van elke omvang (niet meer alleen grote retailers) kon niet aan een datum of eerste-partij-bron worden opgehangen. Niet gemeld; backlogpunt 8 blijft ongewijzigd (VS-verzending blijft de voorwaarde).\n\n## Bronnen\n\n- [Google's new Universal Cart wants to follow your entire shopping journey across the internet — TechCrunch, 19 mei 2026](https://techcrunch.com/2026/05/19/googles-new-universal-cart-wants-to-follow-your-entire-shopping-journey-across-the-internet/)\n- [AP2 Protocol Explained: Google's Agentic Commerce Standard 2026](https://eco.com/support/en/articles/15192002-ap2-protocol-explained-google-s-agentic-commerce-standard-2026)\n- [Google Shopping introduces Universal Cart, agentic shopping — Google](https://blog.google/products-and-platforms/products/shopping/google-shopping-cart/)\n- [September 2026 Google Webmaster Report: Spam Update, AI Mode — Search Engine Roundtable](https://www.seroundtable.com/sept-2026-google-webmaster-report-41979.html)\n\n## Aantekeningen",
   "bron": "routine",
   "bronbestand": "",
   "bronbestand_url": null,
   "categorie": "SEO",
   "datum": "2026-09-30",
   "deadline": "",
   "gerelateerd": [
    "2026-09-16-growth-radar-ai-search",
    "2026-09-23-growth-radar-ai-search"
   ],
   "id": "2026-09-30-growth-radar-ai-search",
   "kansen": [],
   "kerncijfers": [],
   "kerntitel": "Universal Cart/AP2 is live in de VS sinds 19 mei, Nederland staat nog niet op de lijst",
   "prioriteit": "P3",
   "routine": "growth-radar",
   "samenvatting": "Google's Universal Cart en het onderliggende AP2-betaalprotocol zijn sinds 19 mei 2026 live in de VS en breiden deze zomer uit naar de Gemini-app, maar Nederland en de rest van Europa staan nog niet op de rolluit-lijst. Voor higrip.nl verandert dit nu niets, maar het bevestigt dat de Merchant Center-feed uit backlogpunt 4 straks ook de ingang wordt voor deze agentic-checkout-laag.",
   "status": "nieuw",
   "titel": "Growth Radar — AI-search (Google's Universal Cart draait nu echt, maar nog niet in Nederland)",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-30-growth-radar-ai-search.md",
   "vervangt": [],
   "wat_niet_lukte": "Twee sporen leverden geen bevinding op die de harde filter (Stap 4) doorstond, en zijn daarom niet opgenomen:\n- Het Google Search Central-webmasterrapport van september 2026 meldt dat Google \"AI Mode\" en \"AI Overviews\" verder samenvoegt en nieuwe knoppen op de homepage test (Create Images, Ask About Files, Brainstorm) — maar zonder concrete datum en zonder duidelijke relatie tot shopping-zoekopdr…"
  },
  {
   "acties": [],
   "body_md": "# Growth Radar — SEO content & keywords (AI Overviews breiden zichzelf nu automatisch uit)\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\nDagfocus dinsdag: SEO-content en keywords (long-tails, landingspagina's per sport, SERP-features). Concurrentie-content volgt de Concurrentie-monitor (nog geen `*-concurrentie.md` gepubliceerd, dus niets te herhalen). Één harde, van Google bevestigde SERP-featurewijziging gevonden die aan de gate van stap 4 voldoet; overige zoekresultaten waren generieke tipslijsten zonder eigen data of niet terug te voeren op een bron uit de toegestane lijst, en zijn daarom niet opgenomen.\n\n## Bevindingen\n\n### AI Overviews breiden zichzelf sinds 28 augustus automatisch uit tot de volle lengte\n\nGoogle bevestigde op 28 augustus 2026 dat AI Overviews voor sommige zoekopdrachten niet langer wachten op een klik op \"Toon meer\": het systeem beslist zelf wanneer een langer antwoord nuttiger is en toont dat meteen, inclusief een vervolgvraagbox die naar AI Mode leidt in plaats van terug naar de gewone resultaten. Is een gebruiker al aan het scrollen voorbij het AI-overzicht, dan annuleert Google de uitbreiding om de leespositie niet te verstoren. Het praktische effect: het AI-antwoord vult een groter deel van het scherm en de gewone blauwe links — inclusief eventuele toekomstige posities van higrip.nl — schuiven verder naar beneden.\n\n> **Voor higrip.nl:** Dit raakt precies de vraagvormige long-tails uit backlogpunt 6 (\"waarom glijdt mijn voet in mijn padelschoen\", \"wat zijn gripsokken\", \"tapedesign alternatief\"): naarmate AI Overviews meer ruimte innemen, wordt geciteerd wórden in het antwoord belangrijker dan een hoge organische positie eronder. Geen nieuwe actie — het bestaande punt 6 (antwoordcapsules, 40-60 woorden, FAQPage-schema) is hierdoor dringender, niet anders. Backlogpunt bijgewerkt met deze bevinding en datum.\n\n**Actie:** Geen nieuwe actie — zie ACTIEBACKLOG.md, punt 6 (bijgewerkt, 29 sep 2026).\n\n## Wat niet lukte\n\nDe overige vier zoekopdrachten (sportspecifieke landingspagina's, long-tail-strategie voor e-commerce, groei van SERP-features als \"Things to Know\") leverden alleen generieke adviesartikelen zonder herleidbare eigen dataset of bron uit de toegestane lijst op (Search Engine Land, Search Engine Roundtable, Google Search Central, Shopify, Baymard, CXL, Ahrefs/Semrush, Emerce, Twinkle, Marketingfacts, Thuiswinkel.org). Eén los gevonden bericht over een Premier Padel-toernooi in Rotterdam (27 sep–4 okt 2026) leek relevant voor de beachhead-sport padel, maar kwam alleen van niet-erkende padelcommunitysites zonder officiële bevestiging — niet opgenomen, volgens de regel dat een bevinding zonder herleidbare primaire bron niet genoemd wordt.\n\n## Bronnen\n\n- [Google is dynamically expanding AI Overviews for some queries — Search Engine Land](https://searchengineland.com/google-is-dynamically-expanding-ai-overviews-for-some-queries-486200)\n- [Google Making AI Overviews Into AI Mode Responses — Search Engine Roundtable](https://www.seroundtable.com/google-ai-overviews-push-ai-mode-responses-41974.html)\n\n## Acties\n\n_Acties uit dit rapport staan in de growth-radar-backlog (`ACTIEBACKLOG.md`) en komen via het dashboard binnen — hier niet gedupliceerd._\n\n## Aantekeningen",
   "bron": "routine",
   "bronbestand": "",
   "bronbestand_url": null,
   "categorie": "SEO",
   "datum": "2026-09-29",
   "deadline": "",
   "gerelateerd": [
    "2026-09-22-growth-radar-seo-content",
    "2026-09-16-growth-radar-ai-search",
    "2026-09-25-search-console",
    "2026-09-30-search-console",
    "2026-10-06-growth-radar-seo-content"
   ],
   "id": "2026-09-29-growth-radar-seo-content",
   "kansen": [],
   "kerncijfers": [],
   "kerntitel": "AI Overviews vullen zich nu automatisch, blauwe links zakken verder weg",
   "prioriteit": "P2",
   "routine": "growth-radar",
   "samenvatting": "Google breidt AI Overviews sinds 28 augustus 2026 bevestigd automatisch uit tot de volle lengte zodra het systeem dat nuttig acht, zonder dat een gebruiker op 'Toon meer' hoeft te klikken. Voor higrip.nl betekent dit dat gewone organische resultaten op vraagvormige zoekwoorden nog verder onder de vouw komen — extra gewicht voor het al openstaande antwoordcapsule-plan.",
   "status": "nieuw",
   "titel": "Growth Radar — SEO content & keywords (AI Overviews breiden zichzelf nu automatisch uit)",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-29-growth-radar-seo-content.md",
   "vervangt": [],
   "wat_niet_lukte": "De overige vier zoekopdrachten (sportspecifieke landingspagina's, long-tail-strategie voor e-commerce, groei van SERP-features als \"Things to Know\") leverden alleen generieke adviesartikelen zonder herleidbare eigen dataset of bron uit de toegestane lijst op (Search Engine Land, Search Engine Roundtable, Google Search Central, Shopify, Baymard, CXL, Ahrefs/Semrush, Emerce, Twinkle, Marketingfacts…"
  },
  {
   "acties": [
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-09-29-crm-dashboard-voorstel#7f6ee085",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "Besluit: Vercel Pro ($20/mnd, alleen de bouwer betaalt een plek) in plaats van Vercel Hobby",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-09-29-crm-dashboard-voorstel#aadbc19d",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "Besluit: Hermes en de AI in het dashboard via een Claude API-sleutel, niet via Claude Max; laat ook toetsen of Max of het Team-plan past bij zakelijk gebruik door jullie drieën",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-09-29-crm-dashboard-voorstel#f3594009",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "Besluit: overstappen van e-Boekhouden naar Moneybird (vanaf € 15/mnd, facturen en betaalstatus via de API)",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-09-29-crm-dashboard-voorstel#4d19853f",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "Besluit: definitie van vaste klant, voorstel: minstens 2 orders, waarvan de laatste in de afgelopen 12 maanden",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-09-29-crm-dashboard-voorstel#99e7cc19",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "Bigin-data exporteren (CSV per module plus Data Backup) en versleuteld bewaren vóór de overstap",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-09-29-crm-dashboard-voorstel#9db15104",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "Fase 0 bouwen: Next.js-basis, Google-login, Neon Frankfurt, kerndatamodel en een dagelijkse back-up",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-09-29-crm-dashboard-voorstel#7b3e74fc",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Google Workspace-verwerkersovereenkomst (CDPA) laten accepteren door de superadmin",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-09-29-crm-dashboard-voorstel#4abba4c4",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Afwegingstoets gerechtvaardigd belang en privacytekst opstellen vóór de eerste koude benadering vanuit het CRM",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-09-29-crm-dashboard-voorstel#1e62e17e",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Boekhouder laten bevestigen: factuurtekst voor btw verlegd bij Belgische B2B-klanten, en of koude mail naar persoonlijke adressen (jan@club.nl) mag",
     "uitvoerbaar": null
    }
   ],
   "body_md": "# CRM-module HÏ Grip-dashboard — onderzoek en voorstel\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\n- **Eén relatielijst met een status.** Geen aparte lijsten voor huidig en potentieel: zo doen HubSpot en Attio het ook. \"Huidig\" en \"potentieel\" uit het Canva-ontwerp worden opgeslagen weergaven. Een club die klant wordt, verhuist niet; alleen de status verandert.\n- **Een funnel per klanttype met een vaste reeks** (bijgewerkt 30-09). AI vult een kandidatenpool en zet de beste door naar Nieuw. AI schrijft ook de mail, de herinneringen en het belscript; jij keurt de reeks één keer goed. Geen reactie is het standaardpad: herinneringen op dag 7 en 14, bellen op dag 21. Bij een reactie kies je positief, later of negatief. Alles wat terugvalt, krijgt een wachtdatum. Dat pakt het grootste pijnpunt aan: vergeten opvolging.\n- **Facturen bouw je niet zelf.** Het CRM maakt de offerte met de staffel of de klantprijs. Moneybird maakt en verstuurt de factuur en meldt via een webhook wanneer er betaald is. Het fiscale risico ligt dan bij het pakket: nummering, btw verlegd voor België, bewaarplicht.\n- **Twee aannames uit de vragenronde kloppen niet.**\n  - Vercel Hobby is volgens de voorwaarden alleen voor niet-commercieel gebruik. Neem Vercel Pro: $20/mnd, en alleen de bouwer betaalt een plek.\n  - Hermes en de app mogen niet op Claude Max draaien. Gebruik een Claude API-sleutel, naar schatting $10–40/mnd [aanname].\n  - Hermes draait continu en heeft daarom een kleine server nodig: Hetzner, ± € 6,60/mnd.\n- **Planning (schatting ± 74 bouwuren, bijgewerkt 30-09):**\n  - Eerst de kern zonder AI. De eerste bruikbare versie is er rond 20 oktober (8 u/week) of 10 november (4 u/week).\n  - Daarna werk je 4–6 weken met de hand en meet je. Intussen bouw je de Gmail-koppeling en Moneybird.\n  - AI-mail en Hermes komen na die meetperiode: bij 8 u/week vóór 2027, bij 4 u/week in het eerste kwartaal van 2027.\n\n## Acties\n\n- [ ] P1 · Besluit: Vercel Pro ($20/mnd, alleen de bouwer betaalt een plek) in plaats van Vercel Hobby\n- [ ] P1 · Besluit: Hermes en de AI in het dashboard via een Claude API-sleutel, niet via Claude Max; laat ook toetsen of Max of het Team-plan past bij zakelijk gebruik door jullie drieën\n- [ ] P1 · Besluit: overstappen van e-Boekhouden naar Moneybird (vanaf € 15/mnd, facturen en betaalstatus via de API)\n- [ ] P1 · Besluit: definitie van vaste klant, voorstel: minstens 2 orders, waarvan de laatste in de afgelopen 12 maanden\n- [ ] P1 · Bigin-data exporteren (CSV per module plus Data Backup) en versleuteld bewaren vóór de overstap\n- [ ] P1 · Fase 0 bouwen: Next.js-basis, Google-login, Neon Frankfurt, kerndatamodel en een dagelijkse back-up\n- [ ] P2 · Google Workspace-verwerkersovereenkomst (CDPA) laten accepteren door de superadmin\n- [ ] P2 · Afwegingstoets gerechtvaardigd belang en privacytekst opstellen vóór de eerste koude benadering vanuit het CRM\n- [ ] P2 · Boekhouder laten bevestigen: factuurtekst voor btw verlegd bij Belgische B2B-klanten, en of koude mail naar persoonlijke adressen (jan@club.nl) mag\n\n## Bevindingen\n\n### 1. Wat de grote CRM's goed doen, en wat we overnemen\n\nOnderzocht: HubSpot, Pipedrive, Attio, Teamleader en Twenty grondig. Salesforce, Folk, Copper, Bigin en de wholesale-tools (Shopify B2B, Faire, RepSpark/Brandwise) alleen op de punten die voor HÏ Grip relevant zijn.\n\n| Onderdeel | Hoe de grote CRM's het doen | Voor HÏ Grip |\n|---|---|---|\n| Datamodel | Bedrijf, persoon, deal en activiteit, bij alle CRM's | **Nu**, maar zonder apart deal-object (zie 3) |\n| Levenscyclus | HubSpot: één stage per record, schuift automatisch alleen vooruit. Attio: één object met weergaven per status | **Nu**: één lijst met status |\n| Apart lead-object | Salesforce (conversie is onomkeerbaar), Pipedrive (leads zonder pijplijn) | **Nooit**: het geeft conversiegedoe |\n| Volgende stap verplicht | Pipedrive vraagt na elke afgeronde activiteit om de volgende | **Nu** |\n| Stilstand-signaal | Pipedrive \"rotting\": een deal kleurt rood na X dagen stilte | **Nu**, maar op \"volgende actie verlopen\", want rotting negeert geplande acties |\n| Vandaag-scherm | Attio Home, Pipedrive Focus, Folk-reminders | **Nu**, als startscherm: CRM-home |\n| Sequences | Pipedrive en HubSpot: max 10 stappen, stopt bij een reactie | **Nu**, als mini-versie van jullie ritme (zie 4) |\n| Herbenaderdatum | HubSpot \"Bad timing\", Folk-reminders | **Nu** |\n| Snel toevoegen op mobiel | Pipedrive (visitekaartscan), HubSpot (QR) | **Nu**, met 3 velden |\n| Dubbelcontrole | HubSpot (op e-mail en domein), Attio (voorstel om samen te voegen) | **Nu**, op KvK-nummer, domein en e-mail |\n| Verrijking | Teamleader vult KvK-gegevens automatisch in | **Later**, via de KvK-API (€ 6,40/mnd + € 0,02 per profiel) |\n| E-mailsync | Pipedrive, Attio, Folk, Copper | **Fase 3**: laatste contact plus concepten |\n| WhatsApp loggen | Folk (QR-koppeling), Pipedrive (bèta, via de Business-API) | **Later**. Nu een knop \"Log contact\" |\n| Prijsafspraken per klant | Teamleader (prijslijst per bedrijf); HubSpot heeft het niet standaard | **Nu**, als eigen tabel |\n| Offerte → factuur | Teamleader, HubSpot Commerce | **Nu**, via Moneybird, niet zelf gebouwd |\n| Herbestelportaal | Shopify B2B \"easy reorders\", sinds 2 april 2026 in alle betaalde plannen | **Later**, via Shopify B2B in plaats van zelf bouwen |\n| Rapportage | Pipedrive-goals, Attio-rapporten | **Nu** 5 tellers, meer later |\n| AI | HubSpot Breeze, Attio, Pipedrive AI, Salesforce Agentforce | **Nu**: samenvatten, concepten, voorstellen. Nooit zelf versturen |\n\n### 2. Ontwerpregels: de Bigin-les\n\nBigin scoort 4,7 op Capterra om de snelle start. De klachten komen zodra je tegen de grenzen aanloopt: beperkte automatisering, weinig eigen rapportage, alleen goede koppelingen binnen Zoho, en een aparte site. Samen met jullie eigen ervaring leidt dat tot deze regels:\n\n1. Het CRM zit ín het dashboard: geen aparte site, één login.\n2. Het startscherm is **CRM-home**: verlopen, vandaag, reacties en voorstellen. Bovenaan staan maximaal 5 punten \"Eerst doen\" (les uit [2026-09-26-dashboard-ux-onderzoek](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-26-dashboard-ux-onderzoek.md)).\n3. Elke relatie heeft één volgende actie met een datum, of expliciet \"geen, want …\".\n4. Geen workflowbouwer, maar ± 10 vaste automatiseringen met een aan/uit-knop.\n5. Snel toevoegen vraagt maximaal 3 velden. Lege velden blijven verborgen.\n6. Het CRM-menu heeft maximaal 5 onderdelen. Een nieuw veld komt er pas bij als het drie keer gemist is.\n7. Kleur alleen voor status en urgentie; verder rustig en ruim. Dan helpt kleur, in plaats van dat het onrustig wordt.\n8. De AI levert concepten met één knop \"goedkeuren\" en verstuurt nooit zelf.\n9. Export en API zijn altijd beschikbaar. Het zijn jullie data, zonder plan-muren.\n\n### 3. Datamodel\n\n**Dashboardbreed**, gedeeld door alle modules: gebruikers, organisaties, personen, activiteiten (de tijdlijn), taken (vervangt Google Tasks), bestanden (links naar Google Drive), producten (artikelcodes uit [Performance Grip Socks 2.0](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Product/Performance%20Grip%20Socks%202.0.md)), labels, voorstellen (de AI-wachtrij) en meldingen.\n\n**CRM-specifiek:**\n\n| Object | Belangrijkste velden |\n|---|---|\n| Organisatie | naam, soort (sportclub, pilates/sportschool, retail, event, leverancier; later ook inkooporganisatie), sport, regio, status, prioriteit (HOOG/MIDDEL/LAAG uit [Evaluatiecriteria (B2B Klanten)](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20A%20-%20B2B%20Klanten/Evaluatiecriteria%20%28B2B%20Klanten%29.md)), eigenaar, bron, KvK-nummer, btw-nummer + VIES-controle, domein, prijslijst (Retail of Clubwear/Pilates), volgende actie + datum, herbenader op. Automatisch: laatste contact, herbestelcheck |\n| Creator | naam, soort (influencer of atleet), platform + handle, volgers, gem. views, ER, sport, status, kortingscode, volgende actie. Eigen lijst, want creators zijn personen zonder organisatie met andere velden; wel hetzelfde statusmodel |\n| Persoon | naam, organisatie, rol (voorzitter, inkoper, eigenaar, trainer, materiaalman), zakelijk e-mailadres en telefoonnummer, voorkeurskanaal, actief ja/nee (clubbesturen wisselen), bron, informatieplicht gemeld op |\n| Prijsafspraak | organisatie, product, prijs per paar, vanaf aantal, geldig van/tot, bron. Mag afwijken van de standaardstaffel; het CRM toont het verschil |\n| Offerte | organisatie, regels, prijsbasis (staffel of prijsafspraak), status (concept, verstuurd, geaccepteerd, afgewezen), geldig tot |\n| Order | organisatie, datum, regels (product, maat, aantal), personalisatie (logo, paper wrap, header card), status (besteld, geleverd, gefactureerd, betaald), Moneybird-id + factuurnummer, eventueel Shopify-order-id |\n| Sample | organisatie of creator, product, maat, verstuurd op, uitkomst |\n| Kortingscode | code, organisatie of creator, Shopify-id, omzet en aantal orders (elke nacht gesynchroniseerd) |\n| Leveranciersafspraak | leverancier, product of mogelijkheid, prijs, MOQ, levertijd, geldig van/tot. Inkooporders zelf horen in de module financiën & voorraad |\n| Blokkadelijst | hash van e-mailadres of telefoonnummer, kanaal, datum, reden. Alleen bedoeld om te blokkeren |\n| Doel | jaar, aantal vaste klanten (uit [Strategische Keuzes](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md)) |\n\n**Waarom er geen deal-object is.** Grote CRM's hebben deals nodig omdat één bedrijf daar vaak meerdere kansen tegelijk heeft. Bij 10–40 klanten dekt de combinatie van status en offerte dat. Komen parallelle kansen per klant vaak voor, dan kan een deal-object er later alsnog bij.\n\n**Aanvullingen (30-09):**\n- **Statusgeschiedenis** (van, naar, door, op), vanaf dag 1. Die is nodig voor doorstroom en doorlooptijd.\n- **Reeks:** stappen, goedgekeurd door, gestopt door.\n- **Relatie:** krijgt type, wachtdatum + wachtreden, score, bron en een vastgepinde notitie.\n- **Events:** krijgen een eventdatum.\n- **Deal actief:** kortingscode + startdatum. Hiermee wordt een club Klant zonder eigen order.\n\n### 4. Status, funnel en klantfases (bijgewerkt 30-09)\n\nHet volledige model, met alle overgangen en termijnen, staat op Canva pagina 2 en in het structuurdocument (`plans/crm-structuur.md` bij de bouwer).\n\n| Status | Betekenis |\n|---|---|\n| Kandidaat | Door AI gevonden. Staat in de kandidatenpool (de AI-map), nog niet in de funnel |\n| Nieuw | Klaar om te benaderen |\n| Benaderd | Eerste contact gedaan; de reeks loopt |\n| In gesprek | Positieve reactie; gesprekken lopen |\n| Huidig (per type) | Klant / Vaste klant · Actief / Ambassadeur · Bevestigd / Uitgevoerd / Terugkerend · Huidige leverancier |\n| Wacht op datum | Tijdelijk uit de funnel, met reden: geen reactie · later · negatief |\n| Geen contact | Wil niet meer benaderd worden → blokkadelijst |\n\n- **Route B (geen reactie) is het standaardpad, geen keuze.** Na goedkeuring loopt de reeks: mail (dag 0) → herinnering 1 (dag 7) → herinnering 2 (dag 14) → belherinnering (dag 21) → geen reactie (dag 28) → wacht op datum. Een reactie stopt de reeks, en dan kies je:\n  - **A · Positief** → In gesprek, met een verplichte volgende actie. Veel heen-en-weer mailen vraagt geen keuze. Pas na 30 dagen *zonder* contact komt het label Stil.\n  - **C · Later** → wacht op datum: de afgesproken datum of het volgende benadervenster (standaard 6 mnd). Het eerste gesprek komt in een vastgepinde notitie.\n  - **D · Negatief** → wacht op datum over 1 of 2 jaar, met de reden erbij.\n- **Datum bereikt** → terug in Nieuw met het label Opnieuw. De geschiedenis blijft.\n- **Wil geen contact** kan vanuit elke stap, met een knop op de relatiepagina.\n- **Kandidatenpool:** AI zet elke maandag per type de beste kandidaten door naar Nieuw, tot maximaal 20. Vooraf checkt AI op dubbelen en de blokkadelijst.\n- **De wachtdatum volgt het seizoen.** Per type is er een benadervenster, bijvoorbeeld sportclubs november–februari en events 3–6 maanden vóór de eventdatum.\n\n**Klanten (verfijnt het voorstel in de besluit-actie hierboven):**\n- **Klant** = eerste order **óf** een actieve clubdeal met omzet via de kortingscode.\n- **Vaste klant** = 2e order binnen 12 maanden, of een clubdeal die 12 maanden actief is met omzet.\n- **De status gaat alleen vooruit.** 12 maanden stil geeft het label Slapend. Het doel telt vaste klanten zonder dat label.\n- **Herbestellen (na een order):**\n  - Het herbestelmoment is de eerste die bestaat: 1) de afgesproken datum (veld op de order) → 2) een termijn die je per klant instelt → 3) de standaard per type.\n  - Op dat moment staat er een concept-herbestelmail klaar in *Wacht op akkoord*, met de laatste order (aantallen, maten, personalisatie) en de actuele prijs. Jij verstuurt, of maakt er met één klik een offerte van.\n  - Daarna: een nieuwe order → het moment wordt opnieuw berekend; \"later\" → een nieuwe afgesproken datum; 7 dagen niets → taak bellen [voorstel].\n  - Tot fase 6 komt de mail uit een sjabloon; daarna maakt AI hem persoonlijker.\n  - Relaties met alleen een clubdeal krijgen geen herbestelmail.\n\n| Type | Na In gesprek | Huidig vanaf |\n|---|---|---|\n| Sportclubs · Pilates & sportscholen · Retail (later Inkooporganisaties) | Klant → Vaste klant | Klant |\n| Creators | Product verstuurd → Actief → Ambassadeur | Actief (eerste content live) |\n| Events | Bevestigd → Uitgevoerd → Terugkerend | Bevestigd; evaluatietaak 1 week na het event |\n| Leveranciers | Aangevraagd → Vergelijken → Huidige leverancier | Huidige leverancier; geen verkoopreeks, wel een offerte-aanvraag |\n\n### 5. Schermen en navigatie (bijgewerkt 30-09)\n\n**Menu:** CRM-home · Funnels · Huidige relaties · Offertes & orders · Instellingen. De schetsen staan op Canva pagina 3.\n\n- **CRM-home:**\n  - eerst doen (max 5)\n  - wacht op akkoord (AI-reeksen, offertes)\n  - stats (vaste klanten x/10, nieuwe klanten, benaderd deze week, code-omzet)\n  - mini-funnels per type\n  - signalen (herbestelling, stil, opnieuw benaderen, datameldingen)\n- **Funnels:** één scherm met labels Sportclubs · Pilates & sportscholen · Retail · Creators · Events · Leveranciers · Alle (later Inkooporganisaties).\n  - Kanban: Nieuw → Benaderd → In gesprek → Huidig deze maand. Ingeklapt daaronder: Wacht op datum en Kandidatenpool.\n  - **Benader ›** opent het benaderpaneel: actuele punten met bronnen, het concept voor de mail of het belscript, de reeks, en de knoppen \"Keur reeks goed\" en \"Ik bel\".\n- **Relatiepagina:**\n  - **boven:** naam · type · status · eigenaar · wachtdatum, plus de volgende actie;\n  - **midden:** de vastgepinde notitie en de tijdlijn;\n  - **rechts:** contactpersonen, prijsafspraken, orders & samples, kortingscode + omzet, bestanden.\n\n  Onder \"Meer\" staat \"Wil geen contact\".\n- **Huidige relaties:** labels Klanten · Creators · Events · Leveranciers.\n- **Instellingen:** termijnen, benadervensters, maximum per type, AI-aanvoer en automatiseringen aan/uit.\n- **Mobiel (PWA):** een tabbalk met Home · Funnels · ＋ · Akkoord · Meer.\n- **Kleur alleen voor status:**\n  - wit met rand = Nieuw/Benaderd\n  - royal blue = In gesprek\n  - volt = huidig\n  - pumpkin = actie nodig\n  - rood = verlopen / geen contact\n  - warm grijs = wacht op datum / kandidaat\n\n### 6. Automatiseringen (bijgewerkt 30-09, vast, elk met een aan/uit-knop)\n\n1. **Elke maandag:** de kandidatenpool gaat door naar Nieuw (max 20 per type, na een check op dubbelen en de blokkadelijst).\n2. **De reeks:** herinnering 1 (dag 7), herinnering 2 (dag 14), belherinnering (dag 21). Die stopt bij een reactie. Vóór de Gmail-koppeling zijn het taken met de tekst al klaar.\n3. **Dag 28 zonder reactie** → wacht op datum (het volgende venster, minstens 6 maanden).\n4. **Wachtdatum bereikt** → Nieuw, met het label Opnieuw en een taak.\n5. **In gesprek, 30 dagen geen contact** → label Stil. Alleen een signaal.\n6. **Herbestelmoment bereikt** (afgesproken datum → termijn per klant → standaard per type) → label Herbestelling nodig + een concept-herbestelmail in Wacht op akkoord. Verstuurd en 7 dagen niets → taak bellen. Een nieuwe order berekent het moment opnieuw.\n7. **2e order of 12 maanden actieve deal** → Vaste klant. **12 maanden stil** → label Slapend + een AI-concept voor heractivatie.\n8. **Moneybird meldt \"betaald\"** → de order staat op betaald.\n9. **Omzet per kortingscode** → elke nacht uit Shopify.\n10. **Datacontrole elke nacht** → meldingen bij dubbelen, een ontbrekende volgende actie, een prijs onder de staffel, of Wacht op datum voorbij de bewaartermijn (wachtdatum + 3 mnd).\n\n### 7. AI en agents\n\n**Twee lagen:**\n- **De AI-assistent in het dashboard** (Vercel AI SDK + Claude API) kan:\n  - vragen aan je data beantwoorden, zoals \"welke clubs hebben dit jaar nog niet besteld?\"\n  - een tijdlijn samenvatten\n  - conceptberichten schrijven\n  - een volgende stap voorstellen\n  - leads scoren op de [Evaluatiecriteria (B2B Klanten)](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20A%20-%20B2B%20Klanten/Evaluatiecriteria%20%28B2B%20Klanten%29.md)\n\n  Sonnet 5.5 schrijft de concepten ($2 in / $10 uit per miljoen tokens). Haiku 4.5 doet de eenvoudige controles ($1 / $5).\n- **Hermes Agent** (Nous Research, open source) doet het achtergrondwerk: wekelijkse kandidaten en research. Hermes draait continu en kan daarom niet op Vercel. Zet het op een Hetzner-VPS (CX23, ± € 6,60/mnd). Hermes ondersteunt MCP.\n\n**Goedkeuringsflow:**\n1. Het dashboard krijgt een eigen MCP-endpoint met alleen lees- en voorsteltools (`read_*`, `propose_*`). Hermes krijgt een token per agent. Shopify- en Gmail-sleutels staan niet op de VPS.\n2. Elk voorstel komt in de tabel Voorstellen, met soort, inhoud, agent, status en wie er besliste.\n3. Een mens keurt goed, past aan of wijst af in het blok Wacht op akkoord op CRM-home, en krijgt daarvan een pushmelding.\n4. Pas daarna voert de server de actie uit, met het account van die mens. Een mail wordt eerst een Gmail-concept; versturen is een aparte klik.\n5. Alles komt in een wijzigingslog.\n\n**Beveiliging.** Inkomende mail en DM's zijn onbetrouwbare input (prompt-injectie). Agents krijgen daarom nooit tools om te versturen. De Hermes-versie wordt vastgezet: v0.21.5 op 24-9-2026, en het project verandert snel.\n\n**Claude Max.**\n- Anthropic's documentatie zegt dat ontwikkelaars API-sleutels moeten gebruiken, en dat verzoeken via Free-, Pro- of Max-credentials namens gebruikers niet zijn toegestaan.\n- Het beleid rond tools van derden is in 2026 vier keer veranderd.\n- Hermes rekent via OAuth bovendien af als \"extra usage\", los van je gewone abonnementstegoed.\n- De onderzoeksagent vond in de consumentenvoorwaarden ook een beperking op zakelijk gebruik [CHECK]. Laat toetsen of het Team-plan ($20–25 per plek, minimaal 2) beter past bij jullie drieën.\n\n### 8. Techniek, koppelingen en kosten\n\n**Stack:**\n- **App en login:** Next.js + shadcn/ui + Better Auth. Google-login alleen voor @higrip.nl, met het consentscherm op \"Internal\", dus zonder Google-verificatie.\n- **Database en hosting:** Drizzle + Postgres (Neon, Frankfurt) op Vercel Pro, in de functieregio fra1.\n- **Back-up:** elke nacht een database-dump naar de Hetzner-VPS, 30 dagen bewaard. Test één keer of terugzetten werkt.\n- **Bestanden** blijven in Google Drive; het CRM bewaart alleen links.\n- **Twenty** (open-source CRM) dient als voorbeeld voor het datamodel. De code nemen we niet over: die valt onder de AGPL-licentie.\n\n| Onderdeel | Keuze | Per maand | Goedkoper alternatief en wat je inlevert |\n|---|---|---|---|\n| Hosting | Vercel Pro (1 betaalde plek; de andere twee loggen in op de app zelf) | $20 | Hobby: niet toegestaan. Netlify of Cloudflare: minder bekend terrein voor Claude Code |\n| Database | Neon Frankfurt: Free tijdens de bouw, Launch bij livegang | € 0–5 | Supabase Pro $25: wel ingebouwde back-ups en opslag |\n| Server voor Hermes en back-ups | Hetzner CX23 | ± € 6,60 | Eigen pc: die staat niet 24/7 aan |\n| AI | Claude API-sleutel | $10–40 [aanname] | — |\n| Boekhouding | Moneybird Start (Groei € 29 bij meer dan 20 banktransacties/mnd) | € 15 excl. btw | e-Boekhouden met factureren: € 24, zonder webhooks |\n| Login, Gmail, Calendar, Tasks, Drive, Shopify-API | — | € 0 | — |\n\nNieuw per maand: ± € 25–30 voor techniek plus € 10–35 AI-gebruik. De boekhouding vervangt een bestaande kostenpost.\n\n| Koppeling | Fase | Wat | Let op |\n|---|---|---|---|\n| Shopify Admin API | 3 | Omzet per kortingscode, orders lezen; later draft orders met betaallink | Nieuwe custom apps via het Dev Dashboard (client credentials). B2B-functies zijn sinds 2 april 2026 niet meer alleen voor Plus |\n| Gmail | 3 | Laatste contact en concepten; niet versturen | Een interne Workspace-app heeft geen Google-verificatie nodig |\n| Google Tasks + Calendar | 3 | Tasks eenmalig importeren in de to-do-module; afspraken tonen | Gratis binnen de quota |\n| Moneybird | 4 | Conceptfactuur, offerte, betaalstatus | Webhooks bij betaling |\n| KvK | later | Gegevens automatisch invullen | € 6,40/mnd + € 0,02 per profiel |\n| WhatsApp Cloud API | later | Berichten loggen | Meta-verificatie, templates, ± $0,16 per NL-marketingbericht. Tot die tijd: \"Log contact\" |\n| Instagram-DM | later | DM's loggen | Werkt alleen voor het eigen account, antwoorden alleen binnen 24 uur |\n| Buffer | contentmodule | Posts en ideeën | API-sleutel werkt alleen voor het eigen account; OAuth is dicht voor nieuwe ontwikkelaars |\n| Sendcloud / MyParcel | niet | Tracking | Tracking komt uit de Shopify-fulfillments |\n\n### 9. Facturatie en btw\n\n- **Flow:**\n  1. Het CRM bepaalt klant, regels, prijs (staffel of prijsafspraak) en btw-code.\n  2. Moneybird maakt de factuur: nummer, btw, pdf, verzending en herinneringen.\n  3. Een webhook zet de betaalstatus terug in het CRM.\n- **Nederlandse eisen** regelt Moneybird: een uniek, opeenvolgend factuurnummer, btw-id, KvK-nummer en 7 jaar bewaren.\n- **België, bij een btw-plichtige klant:**\n  - controleer het btw-nummer in VIES vóór je factureert, en bewaar de afdruk;\n  - factureer 0% met de vermelding btw verlegd, en zet beide btw-nummers op de factuur;\n  - bewaar het transportbewijs en doe de ICP-opgaaf.\n- **Belgische vzw zonder geldig btw-nummer:** geen 0%, maar Nederlandse btw tot € 10.000 EU-omzet per jaar.\n- Laat de exacte factuurtekst door de boekhouder bevestigen.\n- **Moneybird tegenover e-Boekhouden:**\n  - Moneybird doet facturen, offertes (online te accepteren), relaties, webhooks bij betaling en automatische herinneringen.\n  - e-Boekhouden heeft een API voor facturen en relaties, maar er zijn geen webhooks gevonden. Het CRM moet dan dagelijks navragen. Factureren kost daar € 24/mnd.\n\n### 10. AVG-regels voor het CRM\n\nDit is geen juridisch advies.\n\n1. **Grondslag:** gerechtvaardigd belang. Leg de afwegingstoets schriftelijk vast.\n2. **Alleen zakelijke gegevens:** organisatie, functie, zakelijk e-mailadres en telefoonnummer, kanaal, bron en datums. Geen privénummers en geen volledige chats; alleen een samenvatting plus de uitkomst.\n3. **Informatieplicht** bij het eerste contact, uiterlijk binnen 1 maand: wie je bent, de bron, het doel en het recht om bezwaar te maken. Het veld \"informatieplicht gemeld op\" houdt dit bij.\n4. **Bezwaar** = direct stoppen en op de blokkadelijst zetten. Die bewaart alleen een hash, het kanaal, de datum en de reden.\n5. **Bewaartermijnen** [voorstel]: \"geen reactie\" 12 maanden, \"later opnieuw\" maximaal 24 maanden na het laatste contact, daarna verwijderen. Factuurgegevens 7 jaar.\n6. **Koude mail:**\n   - Het veiligst is een algemeen adres (info@) van een vereniging of bv, met duidelijke afzender en afmeldlink.\n   - Voor persoonlijke adressen en voor eenmanszaken of vof's is toestemming nodig, tenzij het adres publiek voor zakelijk contact bedoeld is [onzeker, laten toetsen].\n   - Koude WhatsApp verbiedt het WhatsApp-beleid zonder opt-in.\n7. **Verwerkers:**\n   - De verwerkersovereenkomst van Vercel geldt alleen voor Pro, nog een reden voor Pro.\n   - Kies bij de database een EU-regio. De verwerkersovereenkomst van Neon is niet onderzocht [CHECK].\n   - Google Workspace: de CDPA moet je handmatig accepteren.\n   - Stuur zo min mogelijk persoonsgegevens mee naar de Claude API.\n8. **Persoonsgegevens** komen nooit in de vault of in git.\n\n### 11. Overstap\n\n1. **Exporteer Bigin:** CSV per module plus een Data Backup. De downloadlink is 7 dagen geldig.\n2. **Verzamel de andere bronnen:**\n   - het voetbalclubbestand en het cold-acquisitiebestand als CSV;\n   - uit de vault: [Actieve Samenwerkingen (B2B Klanten)](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20A%20-%20B2B%20Klanten/Actieve%20Samenwerkingen%20%28B2B%20Klanten%29.md) en [Influencer Database](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/Influencers_Creators/Influencer%20Database.md);\n   - WhatsApp alleen voor de topleads, en dan alleen samenvatting, datum en uitkomst;\n   - Gmail importeer je niet; de koppeling vult later het laatste contact.\n3. **Blokkeren en ontdubbelen:** zet eerst afgewezen contacten en bezwaren op de blokkadelijst. Ontdubbel daarna in een tussentabel, in deze volgorde: KvK-nummer → domein → e-mail → telefoon → naam + plaats.\n4. **Importeer eerst een proef van 20 records**, daarna de rest. Zet Bigin 2 weken op alleen-lezen en zeg het daarna op.\n5. **Ruim de vault op:** [Pipeline Tracker](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Pipeline%20Tracker.md), de Retailer Database en de Merk & Bedrijf Database gaan naar het CRM verwijzen. Ze zijn nu toch leeg.\n\n### 12. Bouwvolgorde (bijgewerkt 30-09)\n\nDe uren zijn een schatting [aanname]: gebouwd met Claude Code, door iemand die het naast ander werk doet. Start is 30 september.\n\n| Fase | Inhoud | Uren | Klaar bij 8 u/week | Klaar bij 4 u/week |\n|---|---|---|---|---|\n| 1 | Fundament: login, database, online zetten, back-up | 8 | 6 okt | 13 okt |\n| 2 | Lijsten per type, statussen, wachtdatum, relatiepagina, CRM-home, import. **Zonder AI; Bigin kan uit** | 14 | 20 okt | 10 nov |\n| 3 | Reeks als taken, termijnen, labels, statusgeschiedenis, Instellingen | 10 | 27 okt | 24 nov |\n| — | **4–6 weken met de hand werken en meten; intussen fase 4 en 5** | | | |\n| 4 | Gmail: reeks echt versturen, reactie herkennen, reeks stoppen | 10 | 10 nov | 15 dec |\n| 5 | Offertes & orders, Moneybird, kortingscode-omzet, herbestelmoment + herbestelmail uit sjabloon | 14 | 17 nov | 12 jan |\n| 6 | AI: actuele punten, mail en belscript, reeks-goedkeuring | 8 | ± 8 dec | ± 26 jan |\n| 7 | Hermes: kandidatenpool, score, aanvulling op maandag | 10 | ± 22 dec | ± feb 2027 |\n\nReken bij tegenvallers op ongeveer anderhalf keer zoveel tijd. Bij 4 u/week staat de kern (fase 1–4) vóór 2027; AI en Hermes volgen in het eerste kwartaal.\n\n### 13. Succescriteria\n\n**Na 1 maand gebruik:**\n- Bigin is uit. Alle relaties uit Bigin, de Sheets en de vault staan in het CRM.\n- Elke relatie heeft een volgende actie, of de status Later opnieuw of Nooit meer.\n- Alle drie loggen hun contact in het CRM.\n\n**Na 3 maanden:**\n- Er is geen verlopen actie ouder dan 7 dagen.\n- Elke benaderde prospect is binnen 7 dagen opgevolgd.\n- Elke klant heeft een prijsafspraak en een herbestelcheck.\n- B2B-facturen lopen via het CRM naar Moneybird.\n- De stats op CRM-home tonen de stand ten opzichte van 10 vaste klanten, zonder handwerk.\n\n### 14. Risico's\n\n1. **Bouwtijd naast ander werk.** Fase 1 is al bruikbaar, en elke fase levert iets op. Loopt de bouw vast, dan is Twenty Cloud ($9 per gebruiker per maand) een noodoptie met hetzelfde soort datamodel.\n2. **Hermes en prompt-injectie.** Hermes verandert snel, en inkomende berichten kunnen prompt-injectie bevatten. Zet de versie vast en geef alleen voorsteltools.\n3. **Veranderend beleid rond Claude-abonnementen.** Met een API-sleutel staat het dashboard daar los van.\n4. **Dataverlies bij zelf bouwen.** Nachtelijke dump plus het herstel van Neon. Test één keer of terugzetten werkt.\n5. **AVG bij koude acquisitie.** Regel sectie 10 vóór de eerste koude benadering vanuit het CRM.\n\n## Wat niet lukte\n\n- **Niet bereikbaar:** Reddit. G2, de prijspagina van Pipedrive, de supportpagina's van Teamleader en de pagina van de AP gaven 403. Gebruikersoordelen komen daarom uit Capterra en Trustpilot; de prijzen van Pipedrive zijn niet geverifieerd.\n- **Niet bevestigd:** de API-documentatie van e-Boekhouden was niet leesbaar, dus webhooks en betaalstatus zijn onbekend. Over het plan waarin Attio sequences zit, spreken de bronnen elkaar tegen.\n- **Niet onderzocht:** de verwerkersovereenkomst van Neon.\n- **Niet gedaan:** de dashboard-sync (stap B) en de publicatie (stap A5). Deze sessie draait op het persoonlijke account; doe beide vanaf info@.\n\n## Bronnen\n\n- Onderzoeksopdracht: `C:\\Users\\Test\\.claude\\plans\\crm-onderzoek-prompt.md` en het Canva-ontwerp HÏ GRIP DASHBOARD VISUAL (https://www.canva.com/design/DAHWeZ1loP8), pagina 1\n- **CRM's:**\n  - HubSpot: https://knowledge.hubspot.com/records/use-lifecycle-stages · https://knowledge.hubspot.com/records/understand-the-default-record-layout · https://www.hubspot.com/pricing/sales\n  - Pipedrive: https://support.pipedrive.com/en/article/the-rotting-feature · https://support.pipedrive.com/en/article/sequences · https://support.pipedrive.com/en/article/leads-vs-deals · https://support.pipedrive.com/en/article/automation-limits\n  - Attio: https://attio.com/help/reference/attio-101/attios-data-model/define-your-data-model-objects-lists-and-views · https://attio.com/help/reference/productivity-collaborating/tasks · https://attio.com/pricing\n  - Overig: https://twenty.com/pricing · https://www.teamleader.eu/pricing · https://help.folk.app/en/articles/5007315-track-interactions-emails-calendar-events-whatsapp-conversations · https://www.capterra.com/p/204998/Bigin-by-Zoho-CRM/reviews/ · https://help.shopify.com/en/manual/b2b/getting-started/plan-features\n- **Techniek:**\n  - Vercel: https://vercel.com/docs/limits/fair-use-guidelines · https://vercel.com/docs/plans/hobby · https://vercel.com/legal/dpa\n  - Database en server: https://neon.com/pricing · https://supabase.com/pricing · https://docs.hetzner.com/general/infrastructure-and-availability/price-adjustment/\n  - Google: https://support.google.com/cloud/answer/13464323 · https://developers.google.com/workspace/gmail/api/auth/scopes\n  - Login en mobiel: https://www.better-auth.com/docs/authentication/google · https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados/\n  - Shopify en overige koppelingen: https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/client-credentials-grant · https://developers.buffer.com/guides/getting-started.html · https://developers.kvk.nl/nl/pricing · https://developers.facebook.com/docs/whatsapp/pricing\n- **AI:**\n  - Hermes: https://hermes-agent.nousresearch.com/docs/ · https://github.com/NousResearch/hermes-agent/releases · https://github.com/NousResearch/hermes-agent/issues/40014\n  - Anthropic: https://code.claude.com/docs/en/legal-and-compliance · https://www.anthropic.com/legal/consumer-terms · https://support.claude.com/en/articles/15036540-use-the-claude-agent-sdk-with-your-claude-plan · https://support.claude.com/en/articles/9266767-what-is-the-team-plan · https://platform.claude.com/docs/en/about-claude/pricing\n  - Goedkeuringsflow: https://ai-sdk.dev/docs/ai-sdk-ui/chatbot-tool-usage\n- **Facturatie:**\n  - Belastingdienst: https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/administratie_bijhouden/facturen_maken/factuureisen/factuureisen · https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/zakendoen_met_het_buitenland/goederen_en_diensten_naar_andere_eu_landen/btw_berekenen_bij_export_goederen_naar_eu_landen\n  - KVK: https://www.kvk.nl/internationaal/alles-over-btw-en-internationaal-zakendoen/\n  - Pakketten: https://www.moneybird.nl/prijzen/ · https://developer.moneybird.com/webhooks/events · https://www.e-boekhouden.nl/prijzen\n- **AVG:** https://zoek.officielebekendmakingen.nl/kst-35421-3.html · https://whatsappbusiness.com/policy/ · https://gdpr-info.eu/art-14-gdpr/ · https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/direct-marketing-guidance/respect-peoples-preferences/ · https://knowledge.workspace.google.com/admin/compliance/privacy-compliance-and-records-for-google-workspace-and-cloud-identity\n- **Overstap:** https://help.zoho.com/portal/en/kb/bigin/data-administration/articles/exporting-data · https://help.zoho.com/portal/en/kb/bigin/data-administration/articles/data-backup\n\n## Aantekeningen",
   "bron": "los",
   "bronbestand": "C:\\Users\\Test\\.claude\\plans\\crm-onderzoek-prompt.md",
   "bronbestand_url": null,
   "categorie": "B2B",
   "datum": "2026-09-29",
   "deadline": "2026-12-31",
   "gerelateerd": [
    "2026-09-24-financieel-plan-2027-2031-bmc-2031",
    "2026-09-26-dashboard-ux-onderzoek",
    "2026-09-26-onderzoek-nieuwe-routines",
    "2026-10-02-navigatie-en-takentijdlijn",
    "2026-10-02-dashboard-apps-patronen",
    "2026-10-02-ai-in-het-dashboard",
    "2026-10-03-dashboard-agenda-mail-ads-leveranciers",
    "2026-10-04-dashboard-herindeling-ai-mail-koppelingen"
   ],
   "id": "2026-09-29-crm-dashboard-voorstel",
   "kansen": [],
   "kerncijfers": [],
   "kerntitel": "Eén relatielijst met status; Vercel Pro en een Claude API-sleutel zijn nodig",
   "prioriteit": "P1",
   "routine": "",
   "samenvatting": "Bouw het CRM als één relatielijst met een status (zoals HubSpot en Attio), met een vast opvolgritme en een CRM-home met taken voor nu, en laat facturen via Moneybird lopen in plaats van ze zelf te maken. Twee aannames kloppen niet: Vercel Hobby mag niet voor een bedrijfsdashboard (neem Pro, $20/mnd) en Hermes en de app moeten op een Claude API-sleutel draaien, niet op Claude Max.",
   "status": "nieuw",
   "titel": "CRM-module HÏ Grip-dashboard — onderzoek en voorstel",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-29-crm-dashboard-voorstel.md",
   "vervangt": [],
   "wat_niet_lukte": "- **Niet bereikbaar:** Reddit. G2, de prijspagina van Pipedrive, de supportpagina's van Teamleader en de pagina van de AP gaven 403. Gebruikersoordelen komen daarom uit Capterra en Trustpilot; de prijzen van Pipedrive zijn niet geverifieerd.\n- **Niet bevestigd:** de API-documentatie van e-Boekhouden was niet leesbaar, dus webhooks en betaalstatus zijn onbekend. Over het plan waarin Attio sequence…"
  },
  {
   "acties": [
    {
     "afgevinkt": true,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-09-28-weekoverzicht#2eb8c419",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "Besluit: structured data-herstelpakket (werkthema `200269168967`) en de titel/meta-fix eindelijk naar het live thema kopiëren — staat nu 6 weken klaar",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": true,
     "controle": {
      "bewijs": "Staat open als backlog#246c61d9 (P1).",
      "controle": "Zelfde doel als backlogpunt over verzend-/retour-/betalingspagina's?",
      "dubbel_van": "backlog#246c61d9",
      "gecontroleerd": "2026-10-05",
      "methode": "vault",
      "uitkomst": "dubbel"
     },
     "id": "2026-09-28-weekoverzicht#4bff672b",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "Besluit: één bron van waarheid kiezen voor verzend-/retourbeleid (nieuwe `/pages/*` vs. oude `/policies/*`) en de 25%-herbevoorradingskosten + \"ongeopend\"-eis uit het retourbeleid halen",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": true,
     "controle": {
      "bewijs": "Staat als backlog#2c3eb956; dat punt volgt de controle.",
      "controle": "Zelfde doel als backlogpunt over /en/ 2xH1 en onvertaalde hero?",
      "dubbel_van": "backlog#2c3eb956",
      "gecontroleerd": "2026-10-05",
      "methode": "vault",
      "uitkomst": "dubbel"
     },
     "id": "2026-09-28-weekoverzicht#c7d8f1a0",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "Besluit: `/en/`-homepage laten repareren (2×H1, onvertaalde hero-tekst) — kant-en-klare titel/meta-fix staat hieronder, de H1/hero-fix zelf is een theme-wijziging die een lokale sessie moet doen",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": {
      "door": "lars",
      "niet_doen": {
       "datum": "2026-10-05",
       "door": "lars",
       "reden": "Besloten 30-9 (lars): voorlopig niet benaderen, eerst andere prioriteiten."
      },
      "ts": "2026-10-05T10:22:42+02:00"
     },
     "besluit": true,
     "controle": null,
     "id": "2026-09-28-weekoverzicht#ca04b3fb",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Besluit: outreach naar Powerleague Rotterdam en Panna Knock Out (staat al 2 weken klaar) en nu ook TennisFirst Rotterdam (nieuw outreach-klaar)",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": true,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-09-28-weekoverzicht#cff46a38",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Besluit: content-voorstel week 28-09 beoordelen (Tigo), ná het voorstel van 21-09 dat nog niet beoordeeld is",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": {
      "door": "lars",
      "niet_doen": {
       "datum": "2026-10-05",
       "door": "lars",
       "reden": "Achterhaald: NL-verkeer steeg in week 5-10 met +40% (56 tegen 40 sessies). Hervatten bij een nieuwe daling."
      },
      "ts": "2026-10-05T10:22:42+02:00"
     },
     "besluit": true,
     "controle": null,
     "id": "2026-09-28-weekoverzicht#2f883dca",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Besluit: waarom NL-verkeer 3 weken op rij daalt uitzoeken (Organic Search/Instagram al eerder gemeld, dit is nu een aanhoudend patroon, geen incident)",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": {
      "door": "lars",
      "niet_doen": {
       "datum": "2026-10-05",
       "door": "lars",
       "reden": "Vervallen (5-10, lars): Rotterdam Cup bestaat niet meer, het domein staat te koop. Geen verificatie meer nodig."
      },
      "ts": "2026-10-05T10:22:41+02:00"
     },
     "besluit": true,
     "controle": null,
     "id": "2026-09-28-weekoverzicht#37084c5c",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "Besluit: Rotterdam Cup schaal/contact laten verifiëren (site niet uitleesbaar vanuit de cloud-routine)",
     "uitvoerbaar": null
    }
   ],
   "body_md": "# Denzel Weekoverzicht — 2026-09-28\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\nDe structured-data-regressie en de titel/meta-fix staan nu al 6 respectievelijk 6 weken klaar zonder dat ze live zijn gezet — dat blijft de belangrijkste vertraging. Deze week kwamen daar twee nieuwe, vergelijkbare technische problemen bij: de nieuwe `/en/`-homepage heeft dezelfde 2×H1-fout die de NL-homepage half september ook had, en drie nieuwe verzend-/retour-/betalingspagina's spreken de oude `/policies/*`-pagina's tegen. Het echte Nederlandse verkeer daalt voor de derde week op rij. Partnership-kant: geen nieuwe zoekactie nodig (lijsten 7 dagen oud), wel een kleine vervolgzoekactie die 3 tennisretailers een contactpersoon gaf — TennisFirst Rotterdam is nu volledig outreach-klaar.\n\n## Kerncijfers\n\n- **54** · GA4-sessies (7 dagen) · −56% t.o.v. vorige week (123), grotendeels botopschoning (VS-Direct 51→7)\n- **40** · echte NL-sessies · −23% t.o.v. vorige week (52) — derde week op rij dalend (was al −22% de week ervoor)\n- **€41,99** · omzet · 1 aankoop (vorige week €26,25 / 2 aankopen)\n- **1** · GA4 key events (purchase) · vorige week 2\n\n## Acties\n- [x] P1 · Besluit: structured data-herstelpakket (werkthema `200269168967`) en de titel/meta-fix eindelijk naar het live thema kopiëren — staat nu 6 weken klaar\n- [ ] P1 · Besluit: één bron van waarheid kiezen voor verzend-/retourbeleid (nieuwe `/pages/*` vs. oude `/policies/*`) en de 25%-herbevoorradingskosten + \"ongeopend\"-eis uit het retourbeleid halen\n- [ ] P1 · Besluit: `/en/`-homepage laten repareren (2×H1, onvertaalde hero-tekst) — kant-en-klare titel/meta-fix staat hieronder, de H1/hero-fix zelf is een theme-wijziging die een lokale sessie moet doen\n- [ ] P2 · Besluit: outreach naar Powerleague Rotterdam en Panna Knock Out (staat al 2 weken klaar) en nu ook TennisFirst Rotterdam (nieuw outreach-klaar)\n- [x] P2 · Besluit: content-voorstel week 28-09 beoordelen (Tigo), ná het voorstel van 21-09 dat nog niet beoordeeld is\n- [ ] P2 · Besluit: waarom NL-verkeer 3 weken op rij daalt uitzoeken (Organic Search/Instagram al eerder gemeld, dit is nu een aanhoudend patroon, geen incident)\n- [ ] P3 · Besluit: Rotterdam Cup schaal/contact laten verifiëren (site niet uitleesbaar vanuit de cloud-routine)\n\n## Bevindingen\n\n### Voortgang per hoofdagent\n\n- **Content Agent** — nieuw content-voorstel deze week (4 ideeën, zie hieronder). Het voorstel van 21-09 staat nog steeds op \"wacht op lars/Tigo\" — geen beoordeling deze week gezien. Video & Visuele Productie Agent nog steeds zonder output.\n- **Partnership Agent** — beide kandidatenlijsten waren 7 dagen oud (binnen de 1-2 weken-marge) en al volledig expliciet beoordeeld sinds 21-09 — geen nieuwe zoekactie of herbeoordeling nodig. Wel een kleine vervolgzoekactie (mandaat \"Zelf doen\") naar contactgegevens voor de 8 tennisretailers zonder contact: TennisDirect.nl/PassaTennis, Tennisplanet.nl en TennisFirst Rotterdam hebben nu een klantenservice-contact. TennisFirst Rotterdam is daarmee outreach-klaar (telefoon + mail + adres); de andere twee hebben alleen een algemeen klantenservice-adres, nog geen naam van een zakelijk contact.\n- **Website Agent** — SEO-regressiecheck (28-09) vond 3 nieuwe afwijkingen naast de 4 al bekende, ongewijzigde punten. Kant-en-klare titel/meta-fix voor `/en/` staat hieronder (mandaat 3b). Zie \"Website-stand\" hieronder voor het volledige beeld.\n\n### Afgevinkt door de actiecontrole deze week\n\n- **GA4 key event `purchase`** — bevestigd 25-09-2026 door de actiecontrole: staat sinds 3 feb 2025 als key event (`ONCE_PER_EVENT`), 28 dagen t/m 24-09 telde 3 purchase-events/3 keyEvents. Dit lost het al langer openstaande blokkade-punt voor CRO-uitspraken op.\n- **Homepage-title en meta description** — bevestigd 24-09-2026 door de actiecontrole: live met `<title>Gripsokken | Maximale Grip voor Elke Sport | HÏ Grip</title>`, description noemt \"3000+ sporters\" en \"vanaf €35\". Dit is de fix die al 5+ weken op de plank lag (zie eerdere weekoverzichten).\n- **Homepage 2×H1** — bevestigd opgelost op 21-09-2026 (referentiepunt voor de nieuwe `/en/`-regressie hieronder, die exact hetzelfde patroon heeft).\n\nOpen P1-punten op `handmatig` (uit `CONTROLE.json`, werk voor Lars, niet voor een routine): typografie-instellingen, moment skisokken-lancering, besluit Engelse versie, volgorde sportpagina's, en Clarity-koppeling aan funneldiagnoses — al bekende beslispunten uit het werkdossier van 04-09, hier alleen genoemd zodat ze niet uit beeld raken.\n\n### Wat ik deze week zelf heb opgepakt\n\n**B2B (Lijn A):** geen zoekactie (lijst 7 dagen oud, al volledig beoordeeld). Kleine vervolgzoekactie naar contactgegevens voor de 8 tennisretailers zonder contact (afspraak 21-09: pas outreach-klaar met contactpersoon) — 3 gevonden (zie hierboven), direct verwerkt in [Voorbeelden Gevonden Organisaties (B2B Klanten)](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20A%20-%20B2B%20Klanten/Voorbeelden%20Gevonden%20Organisaties%20%28B2B%20Klanten%29.md). Uitsluitend contactgegevens gezocht en beoordeling bijgewerkt — geen outreach, geen verplaatsing naar Pipeline Tracker.\n\n**Events (Lijn B):** geen zoekactie nodig (lijst 7 dagen oud, al volledig beoordeeld op 21-09). Geen wijzigingen deze week.\n\n**Content-voorstel — Week 2026-09-28**\n\n> Niveau: **Voorstellen, ik keur goed** ([Agent Takenverdeling & Grenzen — Content Agent](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Agent%20Takenverdeling%20%26%20Grenzen%20%E2%80%94%20Content%20Agent.md) sectie A). Nog steeds een voorstel: niets gepubliceerd of in Buffer ingepland. Vier nieuwe ideeën, bewust anders dan de 5 ideeën van 21-09 (die nog beoordeeld moeten worden — zie Acties).\n\n1. **\"Voor de aftrap\"-swaptest** (Pilaar 1 Performance, tag PERFORMANCE/LIFESTYLE/INFLUENCER) — vlak vóór de aftrap/opslag/aftrap in tennis/rugby/voetbal een sokwissel in beeld: vóór met gewone sokken twijfelen op de ondergrond, na de wissel direct zeker starten. Psychologie: priming — de kijker ziet het beslismoment op het moment dat het telt, niet achteraf in een studio-opstelling.\n2. **UGC-oproep bij de \"3000+ sporters\"-claim** (Pilaar 3 Story, social proof) — actieve oproep aan bestaande klanten (e-mail + social) om 5-10 sec. wedstrijdclips met HÏ Grip te delen; beste clips terugposten, met een kleine bedank-actie richting hun club. Psychologie: reciprocity + social proof, en maakt de al langer voorgestelde testimonial-serie (21-09, idee 3) concreet uitvoerbaar in plaats van alleen \"verzamelen\".\n3. **Antwoord-eerst-short uit de geplande FAQ/GEO-vraagpagina's** (koppeling met backlogpunt 6, vraagpagina's) — de sterkste van de drie geplande vraagpagina's (\"Waarom glijdt mijn voet in mijn padelschoen?\") als 30-45 sec. video, antwoord in de eerste 5 seconden in beeldtekst — zelfde \"antwoordcapsule\"-patroon als de geplande tekstversie (onderzoek: +17,3% citatiekans). Dient tegelijk als contentidee én als GEO-materiaal. Tag PERFORMANCE/LIFESTYLE/INFLUENCER.\n4. **Coach-hoek met een beachhead-retailer** (Pilaar 3 Story, autoriteit) — kort interviewclipje met een lokale coach/verkoper (bijv. via het nu outreach-klare TennisFirst Rotterdam, zodra Lars akkoord geeft op outreach) over waarom grip/tractie in tennis/rugby/voetbal net zo belangrijk is als materiaalkeuze. Koppelt content direct aan een lopende partnership-kans. Tag PERFORMANCE/LIFESTYLE/INFLUENCER.\n\n**Beslissing voor Lars:** dit voorstel ter beoordeling door Tigo, net als het voorstel van 21-09 dat nog niet beoordeeld is — zie Acties.\n\n### Website-stand en kant-en-klare fixes\n\nBron: [2026-09-28-regressiecheck](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-28-regressiecheck.md) (technische controle), [2026-09-23-seo-conversietest-run-1](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-23-seo-conversietest-run-1.md) (meting + voorstellen) en [2026-09-25-search-console](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-25-search-console.md) (posities/klikken). Volledige diepgang staat in die drie notities — hier alleen de samenvatting en wat nieuw of veranderd is.\n\n**Nieuw deze week (regressiecheck 28-09):**\n1. **`/en/`-homepage heeft 2×`<h1>` en een onvertaalde hero-tekst** — naast de verborgen `<h1>HÏ GRIP</h1>` staat een zichtbare, nog-Nederlandse `<h1 class=\"sl-teaser__title\">HÏ Grip Performance Gripsokken voor Sporters</h1>`. Exact het bugpatroon dat de NL-homepage vóór 15 september ook had (toen opgelost). De EN-title is bovendien nog steeds enkel \"HÏ Grip\" (al bekend, staat al sinds 21-09 open) — kant-en-klare fix hieronder (mandaat 3b).\n2. **Drie nieuwe verzend-/retour-/betalingspagina's** (`/pages/verzendbeleid`, `/pages/retourbeleid`, `/pages/terugbetalingsbeleid`) zijn onvolledig en bestaan nu parallel aan de oude `/policies/*`-pagina's met andere waarden: `/pages/verzendbeleid` noemt geen verzendkosten/-drempel, `/pages/retourbeleid` heeft de termijn wel naar 30 dagen gecorrigeerd maar rekent nog 25% herbevoorradingskosten en eist \"ongeopend\" (juridisch risico, zie Compliance To-Do Lijst §4.2). De vervallen \"vóór 22:00\"-belofte staat via een gedeelde metafield op meerdere van deze pagina's.\n3. **`/collections/frontpage` heeft geen meta description** — nieuwe URL, mogelijk dezelfde oorzaak als het al bekende punt over `/collections/all`.\n\n**Blijft ongewijzigd open (geen actie deze week, staat al in de backlog):** structured data gedeeltelijk (`WebSite` nu ook van de padel-pagina verdwenen, alleen nog homepage + `/en/`), redirect-keten `hi-grip-gripsokken-1` (2 stappen), `/pages/gripsokken-voetbal` 404.\n\n**Verkeer (search console, meting 25-09):** 28-dagen-trend sterk positief (klikken +140%, vertoningen +79%), maar de losse week daalde 39% in klikken — bij 33 klikken te klein om een trend te noemen. \"Grip socks\" versnippert nog over 4 eigen URL's; de oude productpagina-URL trekt de meeste vertoningen (310/week) maar met 0,32% CTR, ruim onder elke andere pagina.\n\n**Kant-en-klare fix (nieuw, mandaat 3b — nog geen fix elders uitgeschreven):** titel en meta description voor `/en/`, analoog aan de al live NL-versie, klaar om in Shopify admin → Voorkeuren (of de theme-vertaling) te plakken:\n\n```html\n<title>Grip Socks | Maximum Grip for Every Sport | HÏ Grip</title>\n<meta name=\"description\" content=\"Stop slipping in your shoe with HÏ Grip socks. For tennis, rugby & football. Trusted by 3000+ athletes. Free shipping from €35, shipped within 1 business day.\">\n```\nTitel: 53 tekens. Description: 149 tekens. Vertaalt de live NL-versie (\"Gripsokken | Maximale Grip voor Elke Sport | HÏ Grip\") 1-op-1, met de beachhead-sporten (tennis/rugby/football) i.p.v. een generieke tekst. **Los van deze titel/meta-fix staat de eigenlijke 2×H1/hero-vertaling (afwijking 1) nog open** — dat is een theme-wijziging (verborgen H1 naar `<span>`/`<p>`, hero-tekst vertalen), geen los stuk HTML dat hier los te plakken is; dat moet een lokale sessie met theme-toegang doen.\n\nVoorgestelde meta description voor `/collections/frontpage` (nieuw ontbrekend punt, tekst nog niet eerder geschreven):\n```\nOntdek HÏ Grip gripsokken voor tennis, rugby en voetbal. Maximale grip, minder blessures. Gratis verzending vanaf €35.\n```\n119 tekens, toe te voegen via Shopify admin → SEO-instellingen van de collectiepagina.\n\n### GA4-weekrapport en funnel (21-27 sep t.o.v. 14-20 sep)\n\n> Property 476032345. **Filter botverkeer**: VS-Direct daalde van 51 naar 7 sessies (0% engagement, waarschijnlijk bot-opschoning, geen echt verlies), China van 7 naar 1. Na aftrek: NL-verkeer 40 sessies tegen 52 vorige week (**−23%**, engagementrate wél omhoog: 57,5% → deze week niet los gemeten maar Direct-engagement steeg van 17% naar 36%). Dit is de **derde week op rij** dat het echte NL-verkeer daalt (was −22% de week ervoor) — geen incident meer, een patroon.\n\n**Kanalen (sessies, deze week vs. vorige week):**\n\n| Kanaal | Deze week | Vorige week | Toelichting |\n|---|---|---|---|\n| Direct | 25 | 88 | Grotendeels bot-opschoning (VS/China −52) |\n| Organic Search | 23 | 24 | Nagenoeg gelijk, engagement steeg (56,5% vs 41,7%) |\n| Organic Social | 1 | 4 | Verder gedaald |\n| Referral | 1 | 4 | — |\n| Cross-network | 2 | 0 | Nieuw, klein |\n| AI Assistant | 1 | 0 | Klein, wel eerste sessie sinds weken |\n| Unassigned | 2 | 2 | — |\n| E-mail | 0 | 1 | — |\n\n**Landen:** Nederland 40 (52), VS 7 (51, bot), China 1 (7, bot), overig incidenteel (Duitsland 2, Spanje 1, Australië 1).\n\n**Landingspagina's:** homepage 31 sessies (bounce 48%, 1 key event), `/collections/gripsokken` 4, `/en` 2, `/products/performance-gripsokken-2-0-wit` 3 (bounce 100%), `/pages/over-ons` 2. `(not set)` daalde van 14 naar 3 — verdere bot-opschoning.\n\n**Apparaat:** desktop 34 sessies (bounce 56%, 0 key events, vorige week 84 met 80% bounce — grotendeels de VS/China-bots), mobiel 20 (bounce 50%, 1 key event, vorige week 39).\n\n**Funnel (events / unieke gebruikers, vorige week tussen haakjes):**\n\n| Stap | Deze week | Vorige week |\n|---|---|---|\n| view_item_list | 27 / 15 | 21 / 17 |\n| view_item | 19 / 9 | 40 / 24 |\n| add_to_cart | 16 / 3 | 11 / 9 |\n| begin_checkout | 2 / 2 | 8 / 7 |\n| add_shipping_info | 0 / 0 | 1 / 1 |\n| add_payment_info | 0 / 0 | 1 / 1 |\n| **purchase** | **1 / 1 (€41,99)** | 2 / 2 (€26,25) |\n\n**Duiding:** van 39 gebruikers bekijkt 15 (38%) een collectie, 9 (23%) een product — minder dan vorige week (24 productbekijkers), consistent met de lagere echte trafiek. Van 3 gebruikers die iets toevoegen aan het winkelwagentje, rekende 2 af en 1 kocht — bij deze steekproefgrootte (n=1-3) is elk percentage ruis, geen conclusie. `add_shipping_info`/`add_payment_info` bleven weer op 0 terwijl er wél 1 purchase was — bevestigt opnieuw dat een snelle betaalknop (Shop Pay/Apple Pay) die stappen overslaat; alleen `begin_checkout → purchase` (2→1) is enigszins bruikbaar, en ook dat is te klein om iets aan te concluderen. Sessie→aankoop dit keer 1/54 ≈ 1,9%, binnen de Baymard-bandbreedte van 2-3% — maar bij dit volume is dat toeval, geen bewijs dat de funnel gezond is.\n\n**Conclusie:** de opschoning van botverkeer verklaart het grootste deel van de schijnbare traffic-daling, maar het échte Nederlandse verkeer daalt nu voor de derde week op rij. Dat verdient gerichter uitzoeken dan alleen registreren — zie Acties.\n\n### Openstaande beslissingen voor Lars\n\nZie de Acties-lijst hierboven — dit weekoverzicht herhaalt de tekst niet twee keer. Aanvullend, ongewijzigd vanuit eerdere weken: Update Log klopt structureel niet meer (nu 8 weken achter), Merk & Bedrijf Database/Retailer Database (verwijderen?), checkout-onderzoek (Zuko Analytics als mogelijk hulpmiddel, zie AI-ontwikkelingen 21-09).\n\n### Vooruitblik — komende week\n\n1. **Structured data + titel/meta + `/en/`-fix in één keer live zetten** — drie samenhangende theme-wijzigingen die al weken klaarstaan, inclusief de nieuwe `/en/`-fix van deze week.\n2. **Verzend-/retourbeleid consolideren** — kiezen tussen de nieuwe `/pages/*`- en de oude `/policies/*`-pagina's, 25%-kosten en \"ongeopend\"-eis uit het retourbeleid halen.\n3. **Uitzoeken waarom het NL-verkeer 3 weken op rij daalt** — dit is nu een patroon, niet meer een losse week.\n4. **Twee content-voorstellen (21-09 en 28-09) laten beoordelen door Tigo** — de stapel groeit zonder beoordeling.\n5. **Outreach-besluiten nemen**: Powerleague Rotterdam, Panna Knock Out (2 weken wachtend) en TennisFirst Rotterdam (nieuw outreach-klaar).\n\n### AI-ontwikkelingen die relevant kunnen zijn\n\n1. **Gratis AI-zichtbaarheidscheck (Amplitude)** — een gratis tool om te meten hoe vaak en hoe een merk wordt genoemd in AI-antwoorden. **Raakt GEO direct**: een laagdrempelige manier om te testen of de FAQ/vraagpagina's uit backlogpunt 6 al effect hebben, zónder eerst een betaald GEO-platform aan te schaffen.\n2. **AI-citatiefragmentatie: 76% divergentie tussen AI-platforms** (Rankability-benchmark, sep 2026) — geen twee AI-zoekmachines citeren meer dan 24,1% van dezelfde pagina's. **Raakt GEO direct**: bevestigt dat schrijven voor \"de\" AI Overview niet genoeg is — de antwoordcapsule-aanpak uit backlogpunt 6 moet breed werken (Google AI Overviews, ChatGPT, Perplexity), niet voor één engine geoptimaliseerd.\n3. **Shopify's Shop-app herpositioneert zich als AI-gedreven ontdekkingskanaal** (productranking binnen de app zelf, niet alleen een bestel-app). **Raakt GEO deels**: nieuw zichtbaarheidskanaal binnen het eigen Shopify-ecosysteem, los van klassieke AI-zoekmachines — nog geen directe actie, wel volgen.\n4. **MikMak Insights MCP** — brengt e-commerce-analytics (conversie, forecasting) rechtstreeks in Claude/ChatGPT/Copilot als MCP-server. **Raakt GEO niet**, wel relevant als mogelijk alternatief/aanvulling op de huidige GA4/Search Console-scripttoegang, mocht die ooit vervangen moeten worden.\n\n## Bronnen\n- [2026-09-28-regressiecheck](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-28-regressiecheck.md) · [2026-09-23-seo-conversietest-run-1](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-23-seo-conversietest-run-1.md) · [2026-09-25-search-console](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-25-search-console.md)\n- `python 05_Research/_tools/google_data.py check|ga4 --dagen 7`\n- Websearch: TennisDirect.nl, Tennisplanet.nl, TennisFirst Rotterdam (contactgegevens, 28-09-2026)\n- Websearch AI-ontwikkelingen: Amplitude AI-zichtbaarheidscheck, Rankability-citatiebenchmark, Shopify Shop-app, MikMak Insights MCP (28-09-2026)\n- [Stappenplan — Verdere Bouw](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Stappenplan%20%E2%80%94%20Verdere%20Bouw.md) · [Feedback & Iteratie Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Feedback%20%26%20Iteratie%20Log.md) · [Agent Werk & Kwaliteit Overzicht](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Agent%20Werk%20%26%20Kwaliteit%20Overzicht.md)\n\n## Aantekeningen\n- **lars · 2026-09-28 08:38** — vorige week heb ik de 2x h1 tekst gefixt controleer of dat hij u wel goed werkt",
   "bron": "routine",
   "bronbestand": "",
   "bronbestand_url": null,
   "categorie": "SEO",
   "datum": "2026-09-28",
   "deadline": "",
   "gerelateerd": [
    "2026-09-21-weekoverzicht",
    "2026-09-28-regressiecheck",
    "2026-09-23-seo-conversietest-run-1",
    "2026-09-25-search-console",
    "2026-09-28-optimalisatiecheck-werkwijze-routines-en-dashboard",
    "2026-10-05-weekoverzicht"
   ],
   "id": "2026-09-28-weekoverzicht",
   "kansen": [],
   "kerncijfers": [
    {
     "label": "GA4-sessies (7 dagen)",
     "verschil": "−56% t.o.v. vorige week (123), grotendeels botopschoning (VS-Direct 51→7)",
     "waarde": "54"
    },
    {
     "label": "echte NL-sessies",
     "verschil": "−23% t.o.v. vorige week (52) — derde week op rij dalend (was al −22% de week ervoor)",
     "waarde": "40"
    },
    {
     "label": "omzet",
     "verschil": "1 aankoop (vorige week €26,25 / 2 aankopen)",
     "waarde": "€41,99"
    },
    {
     "label": "GA4 key events (purchase)",
     "verschil": "vorige week 2",
     "waarde": "1"
    }
   ],
   "kerntitel": "NL-verkeer daalt 3 weken op rij; nieuwe EN-homepage en beleidspagina's hebben eigen fouten",
   "prioriteit": "P1",
   "routine": "denzel-week",
   "samenvatting": "Het echte Nederlandse verkeer daalt voor de derde week op rij (nu 40 sessies, −23%), terwijl de nieuwe /en/-homepage en de drie nieuwe verzend-/retour-/betalingspagina's zelf weer fouten bevatten die het vertrouwen schaden. Drie tennisretailers hebben nu een contactpersoon (TennisFirst Rotterdam is outreach-klaar) en de titel/meta-fix voor /en/ ligt klaar voor een lokale sessie.",
   "status": "gearchiveerd",
   "titel": "Denzel Weekoverzicht — 2026-09-28 (NL-verkeer derde week op rij lager, nieuwe EN-/beleidspagina's hebben eigen fouten)",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-28-weekoverzicht.md",
   "vervangt": [
    "2026-09-21-weekoverzicht"
   ],
   "wat_niet_lukte": ""
  },
  {
   "acties": [],
   "body_md": "# SEO- en conversietest run 2 — auditblok B, concepten voor 2.0-producten en collecties\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\nTweede run van de wekelijkse SEO- en conversietest (modus CONCEPT: niets live gewijzigd). Auditblok deze run: **B — producten en collecties** (rotatie B→C→D→B, volgens `05_Research/_geheugen/seo-conversietest.md`). Het volledige rapport staat, zoals afgesproken, in de verborgen Shopify-pagina `seo-routine-logboek` (RUN 2-sectie, bovenaan). Deze notitie bevat de kern.\n\n## Kerncijfers\n\n- **248** · sessies deze week (Shopify Analytics, 21–27 sep) · −28% t.o.v. nulmeting (346)\n- **1** · bestellingen deze week / €41,99 · vorige week 2 / €30,75; nulmeting 3 / €72,74\n- **0,40%** · conversieratio deze week · nulmeting 0,87%\n- **7,9** · gemiddelde Search Console-positie (19–25 sep) · vorige periode 8,7 (verbeterd)\n\n## Acties\n\n_Geen nieuwe backlogpunten deze run: alle bevindingen in blok B waren al open (SEO-titel/meta 2.0-producten en collectie, producttype/SKU/GTIN, dubbele alt-teksten op de 2.0-producten, te smalle collectietekst, en de op 28 sep al gemelde ontbrekende meta op `/collections/frontpage`). Wat nieuw is: voor al deze punten staat nu een concreet concept klaar in het logboek (zie hieronder), zodat de eigenaar ze rechtstreeks kan overnemen in Shopify admin. Verder is de bestaande actie \"Productdata aanvullen: type, SKU, GTIN\" nu voor de 2.0-varianten volledig ingevuld met de EAN-lijst uit [Performance Grip Socks 2.0](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Product/Performance%20Grip%20Socks%202.0.md) §1 — voor de 1.0 (Performance Gripsokken) ontbreekt nog een EAN/SKU-systeem in het feitenbestand [CHECK]._\n\n## Bevindingen\n\n### KPI's (Shopify Analytics; nulmeting = 23 sep 2026)\n\n| KPI | Deze week (21–27 sep) | Vorige week (14–20 sep) | Nulmeting (16–23 sep) |\n|---|---|---|---|\n| Sessies | 248 | 277 | 346 |\n| Sessies via zoekmachines | 15 | 25 | 16 |\n| Sessies met add-to-cart | 5 (2,0%) | 9 (3,2%) | 6 (1,7%) |\n| Checkout bereikt / voltooid | 2 / 1 | 7 / 2 | 4 / 3 |\n| Bestellingen / omzet | 1 / €41,99 | 2 / €30,75 | 3 / €72,74 |\n| Gem. orderwaarde | €34,70 | €11,96 | €19,54 |\n| Conversieratio | 0,40% | 0,72% | 0,87% |\n\nGA4 (476032345) toont voor dezelfde weken 54 resp. 123 sessies — ruim onder de Shopify-tellingen. Dit gat is deze run niet verklaard; het raakt mogelijk het al openstaande backlogpunt over de \"Optimized\"-pixelstand. Search Console (19–25 sep, loopt 3 dagen achter): 24 klikken (−48,9%), 1.018 vertoningen (−4,5%), positie 7,9 (verbeterd van 8,7). \"Gripsokken\" steeg naar positie 5,6, \"grip socks\" naar 10,4. Onder de 100 echte sessies per week blijft dit indicatief.\n\n### Auditblok B — producten en collecties (via de Shopify Admin API)\n\n- **SEO-titel/meta:** leeg (`null`/`null`) op Performance Gripsokken 2.0 Zwart, 2.0 Wit, collectie Gripsokken én — nieuw bevestigd — collectie \"Homepage\" (`frontpage`, 0 producten, wel in de sitemap; dit is dezelfde bevinding als de regressiecheck van 28 sep).\n- **Producttype:** leeg bij alle drie producten.\n- **SKU/barcode:** overal `null`. Voor de 2.0-varianten nu een concept-koppeling gemaakt met de EAN-lijst uit het feitenbestand (PGSZ201–203, PGSW201–203, 6 EAN's). Voor de 1.0 ontbreekt een bronbestand [CHECK].\n- **Alt-teksten:** 2.0 Zwart en 2.0 Wit hebben elk 5 gecontroleerde foto's met een identieke alt-tekst (0 van 10 uniek) — dezelfde onderliggende afwijking als het al bekende punt over de hoofdproductpagina, nu bevestigd voor de 2.0-producten.\n- **Collectietekst Gripsokken:** de huidige tekst (169 woorden) noemt alleen \"witte gripsokken\", de oude maten 34-39/40-46 en een onbevestigde doelgroep (\"kinderen\"), terwijl de collectie alle drie producten en vijf maten bevat. Herschreven naar 222 woorden (binnen de norm van 150–300), inclusief de wrijvingscoëfficiënt-claim met bron.\n- **Interne links:** niet volledig te controleren zonder rendering van het thema (bekende beperking in de cloudomgeving).\n\n### Gebouwd (concept, niets live)\n\nIn de logboekpagina staan volledig uitgewerkt: de herschreven collectiebeschrijving, SEO-titels en meta's voor de 2.0-producten en beide collecties (Gripsokken en Homepage/frontpage), 10 beschrijvende alt-tekstvoorstellen (gemarkeerd [CHECK], niet visueel geverifieerd) en de producttype/SKU/GTIN-koppeltabel voor de 2.0-varianten.\n\n### Resultaten eerdere testplannen\n\n**Maatgids gripsokken** (168287863111): nog steeds niet gepubliceerd (bevestigd door de actiecontrole op 26 sep). Testplan nog niet gestart. Label: **te vroeg**.\n\n## Wat niet lukte\n\n- Het verschil tussen Shopify-sessies (248/277) en GA4-sessies (54/123) in dezelfde weken is niet verklaard.\n- Interne links vanuit producten/collecties naar de maatgids en sportpagina's: niet te controleren zonder thema-rendering.\n- Shopify's gestructureerde Google-productcategorie (los van het vrije producttype-veld): niet gecontroleerd.\n- Merchant Center-status (`google_data.py merchant`): niet uitgevoerd deze run, hoort bij auditblok A (techniek).\n- Stap B (dashboard → vault) kon niet draaien: de `ArtifactData`-database van het dashboard is voor deze cloudsessie niet leesbaar (\"shared with you from another organization\" — geen db-toegang voor uitgenodigde editors), zelfde beperking als bij eerdere runs. Build en publish zijn wel gedaan vanuit de bestaande vaultstand.\n\n## Bronnen\n\n- Shopify Admin API (GraphQL) en ShopifyQL-analytics, HÏ Grip, 28-09-2026.\n- `python 05_Research/_tools/google_data.py ga4/gsc`, 28-09-2026.\n- `00_Brand_Core/Feiten & Actuele Staat.md` en [Performance Grip Socks 2.0](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Product/Performance%20Grip%20Socks%202.0.md) (EAN-lijst).\n- Verborgen Shopify-pagina `seo-routine-logboek` (volledig rapport, RUN 2).\n\n## Aantekeningen",
   "bron": "routine",
   "bronbestand": "https://admin.shopify.com/store/raqds3-tb/pages/168287895879",
   "bronbestand_url": "https://admin.shopify.com/store/raqds3-tb/pages/168287895879",
   "categorie": "SEO",
   "datum": "2026-09-28",
   "deadline": "",
   "gerelateerd": [
    "2026-09-23-seo-conversietest-run-1",
    "2026-09-28-regressiecheck",
    "2026-09-25-seo-audit",
    "2026-09-25-search-console",
    "2026-09-25-evaluatie-routines",
    "2026-09-30-search-console",
    "2026-10-01-growth-radar-cro",
    "2026-10-05-seo-conversietest-run-3"
   ],
   "id": "2026-09-28-seo-conversietest-run-2",
   "kansen": [],
   "kerncijfers": [
    {
     "label": "sessies deze week (Shopify Analytics, 21–27 sep)",
     "verschil": "−28% t.o.v. nulmeting (346)",
     "waarde": "248"
    },
    {
     "label": "bestellingen deze week / €41,99",
     "verschil": "vorige week 2 / €30,75; nulmeting 3 / €72,74",
     "waarde": "1"
    },
    {
     "label": "conversieratio deze week",
     "verschil": "nulmeting 0,87%",
     "waarde": "0,40%"
    },
    {
     "label": "gemiddelde Search Console-positie (19–25 sep)",
     "verschil": "vorige periode 8,7 (verbeterd)",
     "waarde": "7,9"
    }
   ],
   "kerntitel": "SEO-titels, meta's en collectietekst voor de 2.0-producten uitgewerkt als concept",
   "prioriteit": "P2",
   "routine": "seo-conversietest",
   "samenvatting": "Tweede run (modus CONCEPT): diepe audit van blok B (producten en collecties) bevestigt alleen al bekende, open backlogpunten — geen nieuwe bevindingen — maar levert wel uitgewerkte concepten op: een herschreven collectiebeschrijving, SEO-titels/meta's voor de 2.0-producten en beide collecties, beschrijvende alt-tekstvoorstellen en een SKU/GTIN-koppeling per variant. Sessies en omzet liggen deze week onder de nulmeting van 23 sep, maar het volume blijft te klein voor harde conclusies, en er is een onverklaard verschil tussen Shopify- en GA4-sessietellingen.",
   "status": "nieuw",
   "titel": "SEO- en conversietest run 2 — auditblok B, concepten voor 2.0-producten en collecties",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-28-seo-conversietest-run-2.md",
   "vervangt": [],
   "wat_niet_lukte": "- Het verschil tussen Shopify-sessies (248/277) en GA4-sessies (54/123) in dezelfde weken is niet verklaard.\n- Interne links vanuit producten/collecties naar de maatgids en sportpagina's: niet te controleren zonder thema-rendering.\n- Shopify's gestructureerde Google-productcategorie (los van het vrije producttype-veld): niet gecontroleerd.\n- Merchant Center-status (`google_data.py merchant`): nie…"
  },
  {
   "acties": [],
   "body_md": "# SEO-regressiecheck — 28 september 2026\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\nControle-run, geen onderzoek. Dertien URL's gecontroleerd (sitemap-gedreven, zie hieronder). Kritieke check (geen `aggregateRating`) blijft schoon op alle dertien. Drie nieuwe afwijkingen dit keer, vier bekende afwijkingen blijven ongewijzigd open (geen nieuw backlogpunt, staat al open). GA4 werkte deze week wel; PageSpeed Insights zat op quotum.\n\n## Kerncijfers\n\n- **13** · gecontroleerde URL's · 0 met `aggregateRating`\n- **54** · GA4-sessies (7 dagen) · -56% t.o.v. vorige week (123)\n- **1** · GA4 key events (purchase) deze week · vorige week 2\n- **3** · nieuwe pagina's in `sitemap.xml` ontdekt (verzendbeleid, retourbeleid, terugbetalingsbeleid)\n\n## Acties\n\n_Acties uit dit rapport staan in de growth-radar-backlog (`ACTIEBACKLOG.md`) en komen via het dashboard binnen — hier niet gedupliceerd._\n\n## Bevindingen\n\nReferentiepunt: [2026-09-21-regressiecheck](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-21-regressiecheck.md) en de audit [2026-09-25-seo-audit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-25-seo-audit.md). URL-lijst dit keer sitemap-gedreven opgebouwd (zie Stap 2 van de routine): homepage, de drie productpagina's, beide collecties (`frontpage`, `gripsokken`), de drie `/pages/gripsokken-voor-*`-sportpagina's, beide blogindexen (`hi-grip`, `trends`), het nieuwste artikel (bepaald via de atom-feeds: \"De twee grootste problemen in de sportwereld\", gepubliceerd 15 feb 2026) en `/en/`.\n\n### Nieuw ontdekt in de sitemap t.o.v. vorige week\n\n1. `sitemap_agentic_discovery.xml` → `/agents.md` — Shopify's nieuwe agentic-commerce/UCP-bestand (200, `text/markdown`), standaard gegenereerd. Geen actie, informatief voor de Growth Radar.\n2. Drie nieuwe pagina's: `/pages/verzendbeleid`, `/pages/retourbeleid`, `/pages/terugbetalingsbeleid` (zie afwijking 2 hieronder) — lijken een vervanging van de oude `/policies/*`-pagina's voor te bereiden, maar zijn dat nog niet.\n\n### Afwijkingen\n\n1. **Nieuwe `/en/`-homepage heeft 2× `<h1>` en een onvertaalde hero-tekst.** Naast de verwachte (verborgen) `<h1>HÏ GRIP</h1>` staat een tweede, zichtbare `<h1 class=\"sl-teaser__title\">HÏ Grip Performance Gripsokken voor Sporters</h1>` — dezelfde Nederlandse tekst als de NL-homepage, niet vertaald naar het Engels. Exact hetzelfde bugpatroon als de NL-homepage vóór 15 september (toen opgelost, bevestigd 21 sep). De title-tag van `/en/` is bovendien nog steeds enkel `HÏ Grip` — dat is het al bekende, nog open backlogpunt over de lege EN-title.\n   **Fix:** de verborgen H1 naar een `<span>`/`<p>` wijzigen (zoals eerder op de NL-homepage) en de hero-tekst vertalen.\n\n2. **Drie nieuwe verzend-/retour-/betalingspagina's zijn onvolledig en spreken de oude beleidspagina's tegen.**\n   - `/pages/verzendbeleid` (nieuw): noemt \"binnen 1 werkdag verzonden\" (correct, conform het besluit van Lars van 25 sep) maar noemt nergens de verzendkosten (€4,50) of de gratis-verzenddrempel (€35).\n   - `/pages/retourbeleid` (nieuw): retourtermijn is gecorrigeerd naar 30 dagen (correct), maar rekent nog steeds **25% herbevoorradingskosten** en eist het product \"ongeopend\" terug — in strijd met de geest van het besluit van Lars en met het al genoteerde juridische risico in de Compliance To-Do Lijst §4.2 (herroepingsrecht mag geen kosten voor de consument met zich meebrengen anders dan de retourverzendkosten).\n   - Ondertussen bestaan `/policies/refund-policy` (14 dagen, 25%), `/policies/shipping-policy` (\"vóór 16:00\") en `/policies/terms-of-service` (€4,25) gewoon door met de oude, foute waarden — er zijn nu **twee parallelle bronnen** voor dezelfde beleidsinformatie.\n   - De homepage-meta-tekst \"Bestel vóór 22:00, vandaag verzonden\" (de vervallen belofte) blijkt via een gedeelde metafield ook op andere pagina's te verschijnen (gezien in de broncode van `/pages/terugbetalingsbeleid`, `/policies/refund-policy`, `/policies/shipping-policy`, `/policies/terms-of-service`) — breder dan eerder aangenomen.\n   **Fix:** één bron van waarheid kiezen (waarschijnlijk de nieuwe `/pages/*`-pagina's), de oude `/policies/*`-pagina's laten doorverwijzen of bijwerken, de 25%-herbevoorradingskosten en de \"ongeopend\"-eis uit het retourbeleid halen, en de verzendkosten/-drempel op `/pages/verzendbeleid` zetten.\n\n3. **`/collections/frontpage` heeft geen meta description** (0 `<meta name=\"description\">`-tags gevonden). Mogelijk dezelfde onderliggende oorzaak als het al openstaande punt over `/collections/all` (ontbrekende SEO-instellingen op automatische collecties), maar een andere URL dan tot nu toe gemeld.\n   **Fix:** beschrijving toevoegen via Shopify admin → SEO-instellingen, voor beide collecties.\n\n### Al bekend, blijft open (staat open in de backlog — geen nieuw punt, niet gewijzigd)\n\n- **Schema gedeeltelijk** (backlogpunt \"SEO-schema-thema-wijzigingen gedeeltelijk gepusht\"): `WebSite` staat nu alléén nog op de homepage en `/en/` — niet meer op de padel-pagina, waar hij op 21 september nog wel stond. `ItemList` ontbreekt nog op beide collecties. `FAQPage` ontbreekt nog op de productpagina('s) (wel aanwezig op homepage en de drie sportpagina's, nieuw t.o.v. eerdere metingen).\n- **Redirect-keten `/products/hi-grip-gripsokken-1`** is nog steeds 2 stappen (`hi-grip-gripsokken-1` → `hi-grip-gripsokken` → `performance-gripsokken`), tegen de regel van maximaal 1 stap. Getrackt via `2026-09-23-seo-conversietest-run-1#b469a68a` (open). De twee 2.0-varianten (`performance-grip-socks-2-0-zwart/-wit`) redirecten wél in 1 stap — correct.\n- **Homepage-meta \"vóór 22:00 vandaag verzonden\"**: getrackt via `2026-09-21-weekoverzicht#611d66c8` (open).\n- **`/pages/gripsokken-voetbal`** (oude/typo-handle, niet hetzelfde als het nieuwe `/pages/gripsokken-voor-voetbal`) geeft nog steeds 404.\n\n### Ongewijzigd / schoon\n\n- Alle 13 URL's: HTTP 200, laadtijd 0,44–0,91s (ruim onder 1,5s).\n- 12 van de 13 URL's: precies één niet-lege `<title>` en precies één `<h1>` (uitzondering: `/en/`, zie afwijking 1).\n- Canonical en `hreflang` (nl/en/x-default) correct op alle 13 URL's.\n- **Geen enkele van de 13 pagina's bevat `aggregateRating`** — kritieke check blijft schoon.\n- Homepage: 9 van 25 afbeeldingen met `alt=\"\"` (vorige week ook 9/25) — onder de meldgrens van 12, ongewijzigd.\n- Live prijzen kloppen exact met het feitenbestand: 1-pack €13,49 / 3-pack €39,95 / 5-pack €61,95 (Performance Gripsokken) en €14,95 voor beide 2.0-varianten — geen tegenspraak.\n- GA4 `purchase` staat nog steeds gemarkeerd als key event (`ONCE_PER_EVENT`, sinds 3 feb 2025) — bevestigt het al afgevinkte backlogpunt blijft correct.\n- `shopify theme check`: niet uitgevoerd — thema-map niet beschikbaar in de cloudomgeving (bekende beperking).\n\n### Trend\n\nGA4-property 476032345, sessies per kanaal, laatste 7 dagen (21–27 sep) vs. de 7 dagen daarvoor (14–20 sep):\n\n| Kanaal | Deze week | Vorige week |\n|---|---|---|\n| Direct | 25 | 88 |\n| Organic Search | 23 | 24 |\n| Organic Social | 1 | 4 |\n| Referral | 1 | 4 |\n| Cross-network | 2 | 0 |\n| Unassigned | 2 | 2 |\n| AI Assistant | 1 | 0 |\n| Email | 0 | 1 |\n| **Totaal** | **54** | **123** |\n\nLet op botverkeer: \"United States | Direct\" daalde van 51 naar 7 sessies (0% engagement, waarschijnlijk bot) — de daling in Direct-verkeer is dus deels een opschoning van botverkeer, geen echt verlies. Na aftrek blijft ook het Nederlandse verkeer lager (40 vs 52 sessies), engagementrate steeg wel (57,5% vs 46,2%). Niet verder geduid — dat is werk voor de Growth Radar.\n\nAI Assistant-kanaal, laatste 30 dagen: **3 sessies** (was 1-2 in eerdere metingen — lichte groei, te klein om een trend te noemen).\n\nPageSpeed Insights (mobiel): **niet gemeten** — openbaar PSI-quotum zit vast op HTTP 429 voor het project `higrip-analytics` (zelfde probleem als eerdere runs). Zie \"Wat niet lukte\".\n\n## Wat niet lukte\n\n- **PageSpeed Insights** (homepage, `/collections/gripsokken`, `/products/performance-gripsokken`): HTTP 429, quotum op. PageSpeed Insights API staat uit in het Cloud-project `higrip-analytics`; nodig is óf de API aanzetten óf een `PAGESPEED_API_KEY`.\n- **`shopify theme check`**: thema-map `C:\\Users\\Test\\higrip-theme` is niet beschikbaar in deze cloudomgeving. Overgeslagen, zoals in elke eerdere cloud-run van deze routine.\n\n## Bronnen\n\n- Live site: curl op de 13 URL's + sitemap-bestanden, 28 september 2026.\n- `python 05_Research/_tools/google_data.py ga4 [--dagen 30]` en `keyevents`.\n- `python 05_Research/_tools/google_data.py cwv` (PageSpeed, gefaald op quotum).\n- Feitenbestand: `00_Brand_Core/Feiten & Actuele Staat.md`.\n\n## Aantekeningen",
   "bron": "routine",
   "bronbestand": "",
   "bronbestand_url": null,
   "categorie": "SEO",
   "datum": "2026-09-28",
   "deadline": "",
   "gerelateerd": [
    "2026-09-21-regressiecheck",
    "2026-09-15-regressiecheck",
    "2026-09-21-weekoverzicht",
    "2026-09-23-seo-conversietest-run-1",
    "2026-09-25-seo-audit",
    "2026-09-07-compliance-todo",
    "2026-09-28-seo-conversietest-run-2",
    "2026-09-30-search-console",
    "2026-10-02-vault-review",
    "2026-10-05-regressiecheck"
   ],
   "id": "2026-09-28-regressiecheck",
   "kansen": [],
   "kerncijfers": [
    {
     "label": "gecontroleerde URL's",
     "verschil": "0 met `aggregateRating`",
     "waarde": "13"
    },
    {
     "label": "GA4-sessies (7 dagen)",
     "verschil": "-56% t.o.v. vorige week (123)",
     "waarde": "54"
    },
    {
     "label": "GA4 key events (purchase) deze week",
     "verschil": "vorige week 2",
     "waarde": "1"
    },
    {
     "label": "nieuwe pagina's in `sitemap.xml` ontdekt (verzendbeleid, retourbeleid, terugbetalingsbeleid)",
     "verschil": "",
     "waarde": "3"
    }
   ],
   "kerntitel": "Nieuwe /en/-homepage heeft 2× H1; nieuwe verzend-/retourpagina's zijn onvolledig",
   "prioriteit": "P1",
   "routine": "seo-regressiecheck",
   "samenvatting": "De kritieke check (geen aggregateRating) blijft schoon, maar drie nieuwe bevindingen: de /en/-homepage heeft 2× H1 met een onvertaalde Nederlandse hero-tekst, drie nieuwe verzend-/retour-/betalingspagina's zijn onvolledig en spreken de oude /policies/*-pagina's tegen, en /collections/frontpage mist een meta description. Vier eerder gemelde afwijkingen staan nog steeds open, zonder verandering.",
   "status": "nieuw",
   "titel": "SEO-regressiecheck — 28 september 2026",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-28-regressiecheck.md",
   "vervangt": [],
   "wat_niet_lukte": "- **PageSpeed Insights** (homepage, `/collections/gripsokken`, `/products/performance-gripsokken`): HTTP 429, quotum op. PageSpeed Insights API staat uit in het Cloud-project `higrip-analytics`; nodig is óf de API aanzetten óf een `PAGESPEED_API_KEY`.\n- **`shopify theme check`**: thema-map `C:\\Users\\Test\\higrip-theme` is niet beschikbaar in deze cloudomgeving. Overgeslagen, zoals in elke eerdere…"
  },
  {
   "acties": [
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-09-28-optimalisatiecheck-werkwijze-routines-en-dashboard#47525a8b",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "Routine \"HÏ Grip — Actiecontrole\" op info@ bewerken: repository HIGrip/higrip-vault met schrijfrechten toevoegen (nu leeg) en na de run van 29-09 controleren dat CONTROLE.json en _data/ die dag zijn bijgewerkt",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-09-28-optimalisatiecheck-werkwijze-routines-en-dashboard#a9d2df15",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "Besluit: Research Dashboard via het Share-menu delen met Lars, Tigo en Timo (nu alleen zichtbaar voor info@)",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-09-28-optimalisatiecheck-werkwijze-routines-en-dashboard#e6a6b0b2",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Weekoverzichten 2026-09-14 en 2026-09-21 van status gearchiveerd naar verwerkt zetten, zodat hun 11 open acties weer meetellen of bewust op niet doen gaan",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-09-28-optimalisatiecheck-werkwijze-routines-en-dashboard#bca6ece1",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Dubbele acties uit deze notitie (sectie Dubbele acties) laten markeren als dubbel door de actiecontrole, met het backlogpunt als hoofdactie",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-09-28-optimalisatiecheck-werkwijze-routines-en-dashboard#1cd8b622",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Denzel-prompt aanvullen: bestaat er al een backlogpunt voor een besluit, verwijs ernaar in plaats van een nieuwe Besluit-actie te maken",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-09-28-optimalisatiecheck-werkwijze-routines-en-dashboard#3055da63",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Routines/README.md bijwerken: repository heet nu HIGrip/higrip-vault, en per routine de gekoppelde bron als controlepunt in de statustabel",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-09-28-optimalisatiecheck-werkwijze-routines-en-dashboard#649b98b0",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Besluit: Uitvoerder als cloudroutine op info@ aanmaken; zonder Uitvoerder blijven goedkeuringen op het dashboard liggen",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-09-28-optimalisatiecheck-werkwijze-routines-en-dashboard#b4525640",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "Achterhaalde acties op niet doen zetten via het dashboard: 2026-09-04-werkdossier-stand-van-zaken#7a54ab83 (22:00, feitenbestand zegt 1 werkdag), #f9369bdd (GSC-export, vervangen door google_data.py) en 2026-09-25-evaluatie-routines#5c41af01 (één backlog bestaat sinds 25-09)",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-09-28-optimalisatiecheck-werkwijze-routines-en-dashboard#1c8db1a7",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "9 claude/-branches zonder eigen commits verwijderen en claude/nifty-fermat-kr7pe6 (flyer in serif, juni) beoordelen: overnemen of weg",
     "uitvoerbaar": null
    }
   ],
   "body_md": "# Optimalisatiecheck werkwijze routines en dashboard — 28 september 2026\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\nDe keten routine → vault → dashboard werkt voor de onderzoeksroutines: alles van vandaag staat op `HÏ-Grip-Vault-obsidian`. De Actiecontrole, het hart van het afvinken en de dashboardcijfers, legt sinds 26-09 niets meer vast. Oorzaak: de cloudroutine heeft geen bronrepository. Verder lekt er werk weg via archivering en dubbele acties.\n\n## Kerncijfers\n- **0** · Commits van de Actiecontrole sinds 26-09 · laatste run \"geslaagd\"\n- **11** · Open acties in gearchiveerde weekoverzichten\n- **9** · claude/-branches zonder eigen commits\n- **7 van 14** · Routines nog niet aangemaakt op info@\n\n## Acties\n- [ ] P1 · Routine \"HÏ Grip — Actiecontrole\" op info@ bewerken: repository HIGrip/higrip-vault met schrijfrechten toevoegen (nu leeg) en na de run van 29-09 controleren dat CONTROLE.json en _data/ die dag zijn bijgewerkt\n- [ ] P1 · Besluit: Research Dashboard via het Share-menu delen met Lars, Tigo en Timo (nu alleen zichtbaar voor info@)\n- [ ] P2 · Weekoverzichten 2026-09-14 en 2026-09-21 van status gearchiveerd naar verwerkt zetten, zodat hun 11 open acties weer meetellen of bewust op niet doen gaan\n- [ ] P2 · Dubbele acties uit deze notitie (sectie Dubbele acties) laten markeren als dubbel door de actiecontrole, met het backlogpunt als hoofdactie\n- [ ] P2 · Denzel-prompt aanvullen: bestaat er al een backlogpunt voor een besluit, verwijs ernaar in plaats van een nieuwe Besluit-actie te maken\n- [ ] P2 · Routines/README.md bijwerken: repository heet nu HIGrip/higrip-vault, en per routine de gekoppelde bron als controlepunt in de statustabel\n- [ ] P2 · Besluit: Uitvoerder als cloudroutine op info@ aanmaken; zonder Uitvoerder blijven goedkeuringen op het dashboard liggen\n- [ ] P3 · Achterhaalde acties op niet doen zetten via het dashboard: 2026-09-04-werkdossier-stand-van-zaken#7a54ab83 (22:00, feitenbestand zegt 1 werkdag), #f9369bdd (GSC-export, vervangen door google_data.py) en 2026-09-25-evaluatie-routines#5c41af01 (één backlog bestaat sinds 25-09)\n- [ ] P3 · 9 claude/-branches zonder eigen commits verwijderen en claude/nifty-fermat-kr7pe6 (flyer in serif, juni) beoordelen: overnemen of weg\n\n## Bevindingen\n\n### Actiecontrole: routine zonder repository\n- Trigger `trig_01NPCazQ7XMqTc5TkwYJXVrJ`, cron `1 3 * * *` (05:01 NL), laatste run 28-09 03:01 UTC met status SUCCEEDED, duur 2 minuten, 6.118 output-tokens.\n- De sessie van die run heeft **geen `sources`** (geen repository) en geen uitvoerbranch. De Growth Radar-sessie van dezelfde ochtend heeft wel `HIGrip/HI-Grip-Vault-` als bron en pusht naar `claude/lucid-thompson-lyt9hi` en de hoofdbranch.\n- Zonder repository kan de routine `Actiecontrole.md` niet lezen, dus niets doen: geen commit op de hoofdbranch en geen eigen `claude/...`-branch. Hij faalt dus niet en pusht niet naar een andere branch: hij stopt vroeg zonder werk.\n- `CONTROLE.json` `laatste_run` 26-09 05:04 komt uit commit 449133c van Lars (lokaal), niet uit de cloudroutine.\n- De prompt verwijst nog correct naar `04_Agent_Infrastructuur/Routines/Actiecontrole.md` (\"Werk op branch HÏ-Grip-Vault-obsidian en push met git push origin HEAD:HÏ-Grip-Vault-obsidian\").\n- Connectors op de routine: Canva, Claude-Docs, Shopify, visualize. Volgens de README hoort alleen Shopify aan; Canva, Claude-Docs en visualize kosten tokens zonder nut. Dat geldt voor alle 6 routines.\n\n### Dashboard\n- Gepubliceerde `data/register.js` was byte-gelijk aan de build van 7787c22 (08:18 UTC); na deze sync is versie 3 gepubliceerd met de build van 08:27 UTC.\n- De publish meldt \"readable by only you\": het artifact is **privé**. Lars, Tigo en Timo kunnen het niet openen tot het via het Share-menu gedeeld is. Niets aan gewijzigd.\n- Opmerking bij de sync: `acties.py importeer` geeft in `te_verwijderen` doc-id's met `@`, terwijl de db `~` gebruikt. Het command `/research-sync` vangt dat af (\"gebruik het id uit het list-resultaat\"), maar een routine die `te_verwijderen` letterlijk doorgeeft, verwijdert niets.\n\n### Dubbele acties (5a)\nOpen acties uit niet-gearchiveerde notities die inhoudelijk hetzelfde zijn:\n- Titel/meta oude productpagina: 2026-09-25-search-console#6ae3949f = backlog#52886b90.\n- \"Grip socks\" consolideren: 2026-09-25-search-console#0323b05e = backlog#8f8db388.\n- Structured data naar live: 2026-09-28-weekoverzicht#2eb8c419 = backlog#fac26f6c.\n- /en/-homepage: 2026-09-28-weekoverzicht#c7d8f1a0 = backlog#2c3eb956.\n- Verzend- en retourbeleid gelijktrekken: 2026-09-28-weekoverzicht#4bff672b = backlog#246c61d9 = 2026-09-25-seo-audit#5c1c6209 = 2026-09-23-seo-conversietest-run-1#db685bc3 (en achterhaald: 2026-09-04-werkdossier-stand-van-zaken#7a54ab83).\n- u-vorm naar je-vorm: 2026-09-24-growth-radar-cro#76b6296e = 2026-09-15-seo-audit#864864f2 = 2026-09-23-seo-conversietest-run-1#1b318f84.\n- Alt-teksten: 2026-09-25-seo-audit#d619f84b = 2026-09-23-seo-conversietest-run-1#b441fff5 = 2026-09-15-seo-audit#7dda01c0.\n- SEO-titels en meta's: 2026-09-23-seo-conversietest-run-1#52494c22 = 2026-09-04-werkdossier-stand-van-zaken#ee82c67c.\n- Trustpilot: 2026-09-25-seo-audit#13130060 = 2026-09-04-werkdossier-stand-van-zaken#98a99a09 (raakt backlog#10ef70ca).\n- Redirects oude URL's: 2026-09-23-seo-conversietest-run-1#b469a68a = 2026-09-16-seo-onderzoek-cloud-routine-website#3e155aa4; /pages/collection-301: 2026-09-25-seo-audit#6d7750aa = 2026-09-04-werkdossier-stand-van-zaken#b7ef376e.\n- Rugby-sportpagina: 2026-09-21-beachhead-rugby#5a25b546 overlapt met 2026-09-25-seo-audit#71f4fc5b en #f637edc0.\n\n`CONTROLE.json` telt nu 8 keer `dubbel`; bovenstaande groepen zijn grotendeels nog niet gemarkeerd, ook omdat de actiecontrole sinds 26-09 niet draaide.\n\n### Weekoverzichten op gearchiveerd met open acties (5b)\n- 2026-09-14-weekoverzicht: `gearchiveerd`, 3 open P-acties (plus 8 open outreach-regels zonder P-code).\n- 2026-09-21-weekoverzicht: `gearchiveerd`, 8 open acties, waarvan een deel (Powerleague/Panna, content-voorstel Tigo, Rotterdam Cup) in 2026-09-28 opnieuw als besluit staat en een deel niet (tennisretailers, checkout-test, Update Log).\n- Volgens PROCEDURE A3 (sinds 28-09) hoort dat `verwerkt` te zijn. Beide stammen van vóór de nieuwe regel. `acties.py open` slaat ze nu over, dus die acties staan nergens.\n\n### Routineprompts (5c)\n- Geen prompt in `04_Agent_Infrastructuur/Routines/` bevat de oude link KVXyNSCNEbKcj2EQGqkpuV of \"Nog geldige acties neem je over\".\n- Geen prompt stopt bij een ArtifactData-fout: Actiecontrole (\"ga altijd door\") en Uitvoerder (\"werk met wat in de vault staat\") gaan door. De enige stops zijn guards, een buildfout en een geweigerde push, zoals bedoeld.\n- De oude link staat nog in twee archiefdocumenten in `04_Agent_Infrastructuur/Beheer/` (Denzel stap 9, 17-09). Die worden niet door routines gelezen.\n- De Growth Radar publiceerde vanochtend 03:41 UTC nog naar het oude artifact (van vóór de verhuizing om ~08:00); vanaf morgen gebruikt hij de nieuwe link via CLAUDE.md.\n\n### Rolverdeling en opbrengst (5d)\n- Overlap: op 28-09 meldden SEO-regressiecheck, Denzel en SEO- en conversietest dezelfde twee problemen (/en/-homepage, verzend-/retourpagina's). Denzel maakte er nieuwe Besluit-acties van naast bestaande backlogpunten; de README zegt dat Denzel geen eigen site-check doet en kansen niet herhaalt.\n- 2026-09-25-seo-audit staat op `routine: seo-regressiecheck` maar is een volledige audit met 24 acties, wat eerder bij de SEO- en conversietest hoort.\n- Geen nieuwe punten: de SEO- en conversietest run 2 meldt \"geen nieuwe bevindingen, alles al open in de backlog\" (wel concepten gebouwd). De andere routines leverden de afgelopen 14 dagen wel nieuwe punten. De 7 routines met status \"Nog aanmaken\" hebben nog nooit gedraaid.\n- Growth Radar: geen notitie of commit op zaterdag 26-09; zondag 27-09 deed hij alleen onderhoud (volgens plan).\n\n### Git (5e)\nAlle routineruns van de laatste 7 dagen staan ook op `HÏ-Grip-Vault-obsidian`: elke `claude/...`-branch van 25–28 september heeft 0 eigen commits. Geen routine pusht alleen naar een losse branch. De enige branches met eigen werk: `claude/fervent-sagan-8bes8f` (1 commit, 25-09; dezelfde patch staat al op de hoofdbranch als ee49c53) en `claude/nifty-fermat-kr7pe6` (2 flyer-commits, juni).\n\n### Versheid data (5f)\nPeilmoment 28-09 ~10:30 NL.\n- `kpi.json` 26-09 05:47, `koppelingen.json` 26-09 05:47, `shopify.json` 26-09 02:40: ouder dan 2 dagen (schrijver: Actiecontrole).\n- `agenda.json` bestaat niet: het dashboard toont \"nog niet gekoppeld\".\n- `cwv.json` 28-09 06:08 en `sync.json` 28-09 10:26: vers.\n\n## Wat niet lukte\nDe transcripten van de Actiecontrole-runs van 27 en 28-09 zijn niet leesbaar vanuit deze sessie (geen list_events). De oorzaak is afgeleid uit de sessiegegevens: geen bronrepository, geen uitvoerbranch, 2 minuten looptijd. Met wie het dashboard buiten info@ gedeeld is, is niet uit te lezen; de publish meldt \"readable by only you\".\n\n## Bronnen\n- `list_triggers` en `get_session` (claude.ai/code/routines) voor Actiecontrole en Growth Radar, 28-09.\n- `git log` per `claude/...`-branch tegen `origin/HÏ-Grip-Vault-obsidian`.\n- `python 05_Research/_tools/acties.py open`, `05_Research/_backlog/CONTROLE.json`, `05_Research/_data/*.json`, `05_Research/_geheugen/*.md`.\n- `04_Agent_Infrastructuur/Routines/README.md` en de promptbestanden.\n\n## Aantekeningen",
   "bron": "los",
   "bronbestand": "",
   "bronbestand_url": null,
   "categorie": "Techniek",
   "datum": "2026-09-28",
   "deadline": "",
   "gerelateerd": [
    "2026-09-25-evaluatie-routines",
    "2026-09-26-onderzoek-nieuwe-routines",
    "2026-09-26-dashboard-ux-onderzoek",
    "2026-09-28-weekoverzicht",
    "2026-10-02-obsidian-structuur-ai-agents"
   ],
   "id": "2026-09-28-optimalisatiecheck-werkwijze-routines-en-dashboard",
   "kansen": [],
   "kerncijfers": [
    {
     "label": "Commits van de Actiecontrole sinds 26-09",
     "verschil": "laatste run \"geslaagd\"",
     "waarde": "0"
    },
    {
     "label": "Open acties in gearchiveerde weekoverzichten",
     "verschil": "",
     "waarde": "11"
    },
    {
     "label": "claude/-branches zonder eigen commits",
     "verschil": "",
     "waarde": "9"
    },
    {
     "label": "Routines nog niet aangemaakt op info@",
     "verschil": "",
     "waarde": "7 van 14"
    }
   ],
   "kerntitel": "Actiecontrole draait sinds 26-09 zonder repository en legt dus niets vast",
   "prioriteit": "P1",
   "routine": "",
   "samenvatting": "De Actiecontrole draait sinds 26-09 elke nacht, maar de routine heeft geen repository gekoppeld: hij stopt na 2 minuten zonder commit, waardoor CONTROLE.json, de Shopify- en GA4-cijfers en de dashboardsync op 26-09 blijven staan. Daarnaast zijn 11 open acties onzichtbaar in twee gearchiveerde weekoverzichten, staan minstens 8 groepen acties dubbel en is het dashboard nog alleen voor info@ zichtbaar.",
   "status": "nieuw",
   "titel": "Optimalisatiecheck werkwijze routines en dashboard",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-28-optimalisatiecheck-werkwijze-routines-en-dashboard.md",
   "vervangt": [],
   "wat_niet_lukte": "De transcripten van de Actiecontrole-runs van 27 en 28-09 zijn niet leesbaar vanuit deze sessie (geen list_events). De oorzaak is afgeleid uit de sessiegegevens: geen bronrepository, geen uitvoerbranch, 2 minuten looptijd. Met wie het dashboard buiten info@ gedeeld is, is niet uit te lezen; de publish meldt \"readable by only you\"."
  },
  {
   "acties": [],
   "body_md": "# Growth Radar — SEO Technisch (28 september 2026)\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\nDe belangrijkste vondst van vandaag raakt niet de site zelf, maar de leidingen eronder: Google's oude Content API for Shopping — de weg waarlangs Shopify je Merchant Center-feed vult — geeft sinds 1 september 2026 al progressieve fouten voor wie nog niet is overgezet naar de nieuwe Merchant API, met volledige uitschakeling begin 2027. Dat loopt via dezelfde Google & YouTube-app die vorige week al op de riskante \"Optimized\"-pixelstand bleek te staan. Daarnaast twee kleinere ontwikkelingen om te volgen, geen van beide met eigen actie nu: een normale Google-spamupdate en een nieuw multimodaal filter in Search Console.\n\n## Acties\n_Geen nieuwe backlogpunten vandaag. Eén bestaand P1-punt (4) is bijgewerkt met een extra controlepunt — niet hier herhaald._\n\n## Bevindingen\n\n### 1. Content API for Shopping faalt al sinds 1 september; Merchant API-migratie is de kern van backlogpunt 4\n\nGoogle's Content API for Shopping — de klassieke weg waarlangs productdata in Merchant Center terechtkomt — is per 18 augustus 2026 vervangen door de nieuwe Merchant API. Sinds 1 september 2026 geven aanvragen zonder goedgekeurde uitzondering al periodiek een HTTP 410-fout, en Google heeft de volledige uitfasering van alle endpoints voor begin 2027 aangekondigd. Voor winkels die hun feed via een custom integratie, een oudere feed-app of een script laten lopen, moet die koppeling nu over naar de Merchant API of de datastroom stopt. Wie handmatig of via een Google Sheet uploadt, is niet geraakt.\n\nVoor winkels die het native Shopify \"Google & YouTube\"-kanaal gebruiken — zoals higrip.nl — loopt de migratie via een gefaseerde uitrol van diezelfde app, die al bezig is. Een concreet aandachtspunt daarbij: product-ID's kunnen tijdens de migratie wijzigen, wat een lopende Shopping-ads-opzet kan raken.\n\n> **Voor higrip.nl:** Dit is dezelfde Google & YouTube-app (`MC-8TZQW9T6Q7`, account `raqds3-tb`) die de Growth Radar van 25 september al op de \"Optimized\"-pixelstand aantrof — een stand waarin Shopify de datadeling zelf al kan pauzeren. Een migratieprobleem boven op een gepauzeerde pixel zou de Merchant Center-feed dubbel kunnen raken: geen productdata én geen conversiesignaal. Backlogpunt 4 (variant-ID's tegen de Merchant Center-eis) gaat al over deze feed en is de logische plek om dit erbij te controleren, niet een nieuw punt.\n\n**Actie:** Backlogpunt 4 bijgewerkt met een extra controlepunt: nagaan of de migratie van de Google & YouTube-app naar de Merchant API is voltooid, en of product-ID's daarbij zijn gewijzigd.\n\n### 2. Google's september-spamupdate: normale update, geen nieuw beleid — alleen volgen\n\nGoogle rolde op 24 september 2026 om 9:15 uur Pacific-tijd de \"September 2026 spam update\" uit, wereldwijd en in alle talen, met een verwachte rolloutduur tot twee weken (langer dan de drie eerdere spamupdates van dit jaar). Google noemt het expliciet een normale update: geen nieuwe spambeleidsregels, en niet gericht op linkspam specifiek.\n\n> **Voor higrip.nl:** Geen enkele eerdere melding over spamgerelateerde risico's op de site. Een normale update zonder nieuw beleid raakt in de praktijk vrijwel nooit een compliant webshop.\n\n**Actie:** Alleen volgen — nog niet handelen. Pas relevant als de Search Console & rankings-routine na afronding van de rollout (rond 8 oktober) een ongewone positieverandering signaleert; dat is niet iets wat Growth Radar zelf controleert.\n\n### 3. Search Console: nieuw multimodaal filter voor zoekopdrachten via afbeeldingen, Lens en Circle to Search\n\nSamen met de spamupdate voegde Google Search Console een multimodaal filter toe waarmee je zoekopdrachten via afbeeldingen, Google Lens en Circle to Search apart kunt bekijken, met data vanaf 10 september 2026.\n\n> **Voor higrip.nl:** Een nieuwe, gratis dimensie in bestaande Search Console-data — geen eigen actie voor Growth Radar, maar wel een filter dat de moeite waard is om mee te nemen zodra de kernwoorden-analyse (Search Console & rankings, woensdag) weer draait, gezien de productfoto's al ruim aan de Merchant Center-beeldeisen voldoen.\n\n**Actie:** Alleen volgen — geen eigen sitecheck, dat hoort bij de Search Console & rankings-routine.\n\n## Wat niet lukte\nStap B (dashboard → vault via `ArtifactData`) gaf dezelfde foutmelding als bij de weekonderhoud-run van 27 september: \"shared with you from another organization\" — geen db-toegang voor deze cloudsessie op de `status`-collectie. Niet opnieuw geprobeerd voor de overige zes collecties, om dezelfde fout niet zes keer te herhalen. Build en publish zijn gedaan vanuit de bestaande vaultstand.\n\n## Bronnen\n- [Migrate from Content API for Shopping to Merchant API — Google for Developers](https://developers.google.com/merchant/api/guides/compatibility/overview)\n- [Google's Content API Shuts Down August 18: What Shopify Merchants Actually Need to Check — Simple Product Feeds](https://www.simpleproductfeeds.com/blog/content-api-for-shopping-sunset-shopify)\n- [Shopify Merchant Google & YouTube API Migration — Channable](https://www.channable.com/blog/shopify-google-youtube-app-migration)\n- [Google September 2026 Spam Update Is Rolling Out — Search Engine Roundtable](https://www.seroundtable.com/google-september-2026-spam-update-42163.html)\n- [Google Releases September 2026 Spam Update — Search Engine Watch](https://searchenginewatch.com/google-releases-september-2026-spam-update/)\n\n## Aantekeningen",
   "bron": "routine",
   "bronbestand": "",
   "bronbestand_url": null,
   "categorie": "SEO",
   "datum": "2026-09-28",
   "deadline": "",
   "gerelateerd": [
    "2026-09-21-growth-radar-seo-technisch",
    "2026-09-25-growth-radar-social",
    "2026-09-16-growth-radar-ai-search",
    "2026-10-05-growth-radar-seo-technisch"
   ],
   "id": "2026-09-28-growth-radar-seo-technisch",
   "kansen": [],
   "kerncijfers": [],
   "kerntitel": "Content API voor Shopping geeft al 410-fouten — Merchant API-migratie checken",
   "prioriteit": "P1",
   "routine": "growth-radar",
   "samenvatting": "Google's oude Content API for Shopping (die de Merchant Center-feed voedt) geeft sinds 1 september 2026 al progressieve 410-fouten voor wie niet is overgezet naar de nieuwe Merchant API, met volledige uitschakeling begin 2027 — en dat loopt via dezelfde Google & YouTube-app die op higrip.nl al op de riskante Optimized-stand staat. Daarnaast twee kleinere signalen om te volgen: een normale Google-spamupdate (24 sep, ~2 weken rollout) en een nieuw multimodaal filter in Search Console voor zoekopdrachten via afbeeldingen, Lens en Circle to Search.",
   "status": "nieuw",
   "titel": "Growth Radar — SEO Technisch (28 september 2026)",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-28-growth-radar-seo-technisch.md",
   "vervangt": [],
   "wat_niet_lukte": "Stap B (dashboard → vault via `ArtifactData`) gaf dezelfde foutmelding als bij de weekonderhoud-run van 27 september: \"shared with you from another organization\" — geen db-toegang voor deze cloudsessie op de `status`-collectie. Niet opnieuw geprobeerd voor de overige zes collecties, om dezelfde fout niet zes keer te herhalen. Build en publish zijn gedaan vanuit de bestaande vaultstand."
  },
  {
   "acties": [
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-09-26-onderzoek-nieuwe-routines#246b3e87",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Besluit: routine Subsidie- en financieringsradar bouwen (maandelijks; RVO, MIT, Innovatiekrediet, provinciale regelingen)",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-09-26-onderzoek-nieuwe-routines#88b981ea",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Besluit: routine Kansenkalender bouwen (maandelijks; seizoensstarts, toernooien, beurzen, inkoopmomenten van clubs)",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-09-26-onderzoek-nieuwe-routines#b267a978",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "Retentie-/lifecycle-routine pas bouwen bij meer dan 50 orders per maand of zodra Klaviyo gekoppeld is",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-09-26-onderzoek-nieuwe-routines#a6b5f6c9",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "Advertentie-monitor pas bouwen zodra er betaalde ads lopen",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-09-26-onderzoek-nieuwe-routines#fc2e9aa5",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "Bol.com/Amazon.nl eenmalig als los onderzoek bekijken, niet als routine",
     "uitvoerbaar": null
    }
   ],
   "body_md": "# Onderzoek nieuwe routines\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\nGeen enkel extern cijfer over AI-routines hield stand bij controle. Het advies rust daarom op de eigen cijfers van HÏ Grip, niet op beloftes van leveranciers.\n\n## Kerncijfers\n\n- **22** · Gecontroleerde cijfers · alle 22 weerlegd\n- **37** · Orders dit jaar (Shopify) · te weinig voor retentie- of servicerobots\n\n## Acties\n\n- [ ] P2 · Besluit: routine Subsidie- en financieringsradar bouwen (maandelijks; RVO, MIT, Innovatiekrediet, provinciale regelingen)\n- [ ] P2 · Besluit: routine Kansenkalender bouwen (maandelijks; seizoensstarts, toernooien, beurzen, inkoopmomenten van clubs)\n- [ ] P3 · Retentie-/lifecycle-routine pas bouwen bij meer dan 50 orders per maand of zodra Klaviyo gekoppeld is\n- [ ] P3 · Advertentie-monitor pas bouwen zodra er betaalde ads lopen\n- [ ] P3 · Bol.com/Amazon.nl eenmalig als los onderzoek bekijken, niet als routine\n\n## Bevindingen\n\n### Leverancierscijfers\nAlle weerlegde beweringen kwamen van blogs van leveranciers (Retainful, Enrich Labs, Zipchat, Mesa, Prediko, Kore.ai, Omnia, Admetrics, Archive, Fini): conversiepercentages van flows, ROI van e-mail, voorspelnauwkeurigheid van voorraad-AI, oplossingspercentages van servicebots. Geen primaire bron, geen methode.\n\n### Wat wel past bij HÏ Grip nu\n- Het financieel plan rekent vanaf 2028 op 185.000 euro extern geld; een maandelijkse scan van subsidies en financiering levert direct besluiten op.\n- B2B (61% van de omzet in 2027 volgens plan) hangt aan inkoopmomenten van clubs; een kansenkalender voorkomt dat een seizoen gemist wordt.\n- Met 37 orders dit jaar is er te weinig volume voor retentie-, retour- of klantenserviceautomatisering.\n\n## Bronnen\n\n- Deep-research-run wf_b24d32f4-91b (journal in de sessiemap)\n- 05_Research/2026-09-24-financieel-plan-2027-2031-bmc-2031.md\n- 05_Research/_data/shopify.json\n\n## Aantekeningen",
   "bron": "los",
   "bronbestand": "",
   "bronbestand_url": null,
   "categorie": "Techniek",
   "datum": "2026-09-26",
   "deadline": "",
   "gerelateerd": [
    "2026-09-24-financieel-plan-2027-2031-bmc-2031",
    "2026-09-25-evaluatie-routines",
    "2026-09-28-optimalisatiecheck-werkwijze-routines-en-dashboard",
    "2026-09-29-crm-dashboard-voorstel",
    "2026-10-02-ai-in-het-dashboard"
   ],
   "id": "2026-09-26-onderzoek-nieuwe-routines",
   "kansen": [],
   "kerncijfers": [
    {
     "label": "Gecontroleerde cijfers",
     "verschil": "alle 22 weerlegd",
     "waarde": "22"
    },
    {
     "label": "Orders dit jaar (Shopify)",
     "verschil": "te weinig voor retentie- of servicerobots",
     "waarde": "37"
    }
   ],
   "kerntitel": "Geen enkel leverancierscijfer houdt stand; subsidie-radar en kansenkalender zijn nu zinvol",
   "prioriteit": "P2",
   "routine": "",
   "samenvatting": "Een deep-research-run (Sonnet 5, 107 agents) vond 22 controleerbare cijfers over e-mailflows, voorraad-AI, prijsmonitoring, influencer- en klantenservicetools; alle 22 zijn door onafhankelijke controle weerlegd (leveranciersmarketing zonder bron). Op basis van de eigen cijfers (37 orders dit jaar, externe financiering nodig vanaf 2028, clubs bestellen in voorjaar/zomer) zijn nu alleen een subsidie- en financieringsradar en een kansenkalender zinvol; retentie, advertenties, influencers en klantenservice pas bij een drempel.",
   "status": "nieuw",
   "titel": "Onderzoek nieuwe routines — leverancierscijfers houden geen stand, twee routines nu zinvol",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-26-onderzoek-nieuwe-routines.md",
   "vervangt": [],
   "wat_niet_lukte": ""
  },
  {
   "acties": [
    {
     "afgevinkt": true,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-09-26-dashboard-ux-onderzoek#12145159",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Eerst doen beperken tot top 5 met focusvolgorde (deadline binnen 14 dagen, dan wat Claude kan voorbereiden)",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": true,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-09-26-dashboard-ux-onderzoek#61c4c4bc",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Actiecontrole op Vandaag inklappen tot één regel met tellers",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": true,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-09-26-dashboard-ux-onderzoek#5ce70d06",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "Mobiele tabbalk (Vandaag, Acties, Onderzoek, Cijfers)",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-09-26-dashboard-ux-onderzoek#8529e3a8",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Besluit: de P1-lijst terugbrengen naar maximaal 10 echte P1's; de rest naar P2 (via het actiemenu op het dashboard)",
     "uitvoerbaar": null
    }
   ],
   "body_md": "# Dashboard-UX — Vandaag was overladen\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\nDe startpagina had veel meer dan 7 concurrerende blokken en elke actie 4–6 regels tekst. Met 35 open P1's zegt de prioriteit niets meer. Doorgevoerd in versie 26 van het dashboard.\n\n## Kerncijfers\n\n- **35** · Open P1-acties · te veel om \"deze week\" te zijn\n- **5** · Acties in Eerst doen (was 8, elk 4–6 regels)\n\n## Acties\n\n- [x] P2 · Eerst doen beperken tot top 5 met focusvolgorde (deadline binnen 14 dagen, dan wat Claude kan voorbereiden)\n- [x] P2 · Actiecontrole op Vandaag inklappen tot één regel met tellers\n- [x] P3 · Mobiele tabbalk (Vandaag, Acties, Onderzoek, Cijfers)\n- [ ] P2 · Besluit: de P1-lijst terugbrengen naar maximaal 10 echte P1's; de rest naar P2 (via het actiemenu op het dashboard)\n\n## Bevindingen\n\n### Overladen startpagina\nBoven de vouw stonden cijfers, een groot controlepaneel met drie kolommen bewijs en lange actierijen. Onderzoek van Nielsen Norman Group: gebruikers haken af bij meer dan 7 concurrerende elementen boven de vouw; progressive disclosure (samenvatting eerst, details op verzoek) verlaagt de belasting.\n\n### Prioriteit-inflatie\n35 P1's. Linear houdt daarom een kleine focuslijst aan en laat de rest in de backlog tot een triagemoment.\n\n## Bronnen\n\n- https://www.nngroup.com/videos/progressive-disclosure/\n- https://www.smashingmagazine.com/2025/09/ux-strategies-real-time-dashboards/\n- https://www.uxpin.com/studio/blog/dashboard-design-principles/\n- https://linear.app/docs/triage\n\n## Aantekeningen",
   "bron": "los",
   "bronbestand": "",
   "bronbestand_url": null,
   "categorie": "Techniek",
   "datum": "2026-09-26",
   "deadline": "",
   "gerelateerd": [
    "2026-09-25-evaluatie-routines",
    "2026-09-28-optimalisatiecheck-werkwijze-routines-en-dashboard",
    "2026-09-29-crm-dashboard-voorstel",
    "2026-10-02-navigatie-en-takentijdlijn",
    "2026-10-02-dashboard-apps-patronen",
    "2026-10-02-dashboard-ontwerpregels-kpi",
    "2026-10-04-dashboard-bruikbaarheidsaudit"
   ],
   "id": "2026-09-26-dashboard-ux-onderzoek",
   "kansen": [],
   "kerncijfers": [
    {
     "label": "Open P1-acties",
     "verschil": "te veel om \"deze week\" te zijn",
     "waarde": "35"
    },
    {
     "label": "Acties in Eerst doen (was 8, elk 4–6 regels)",
     "verschil": "",
     "waarde": "5"
    }
   ],
   "kerntitel": "Vandaag was overladen: nu top 5, besluiten boven de vouw en een mobiele tabbalk",
   "prioriteit": "P3",
   "routine": "",
   "samenvatting": "De startpagina had veel meer dan 7 concurrerende blokken en elke actie 4–6 regels tekst; onderzoek (NN/g, Linear Triage) wijst op progressive disclosure en een beperkte focuslijst. Doorgevoerd in dashboard-versie 26: top 5 Eerst doen, besluiten ernaast, actiecontrole ingeklapt tot één regel, lege hoofdnamen onder Binnenkort en een tabbalk op mobiel.",
   "status": "verwerkt",
   "titel": "Dashboard-UX — Vandaag was overladen, nu top 5 en besluiten boven de vouw",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-26-dashboard-ux-onderzoek.md",
   "vervangt": [],
   "wat_niet_lukte": ""
  },
  {
   "acties": [
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "niet te controleren: vereist Shopify CLI (theme list/pull) op een lokale werkplek, niet beschikbaar in de cloudroutine; GraphQL themes(first:10) toont geen thema genaamd ai-workspace-2.0.",
      "controle": "Is het concepttheme-ID bevestigd met shopify theme list?",
      "gecontroleerd": "2026-09-26",
      "methode": "shopify",
      "uitkomst": "open"
     },
     "id": "2026-09-25-seo-audit#001be532",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "Concepttheme-ID bevestigen met `shopify theme list` en `ai-workspace-2.0` eerst `theme pull`en, zodat je niet op een verouderde kopie werkt",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Draait shopify theme list en theme pull van ai-workspace-2.0 naar de lokale map en bevestigt het ID.",
      "wat_jij_doet": "Niets, tenzij de CLI opnieuw moet inloggen."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "niet te controleren: theme-bestandsinhoud van het concepttheme is niet leesbaar zonder Shopify CLI/theme-pull.",
      "controle": "Is de inhoud van page.gripsokken-padel.liquid verwerkt in templates/page.sport-padel.json?",
      "gecontroleerd": "2026-09-26",
      "methode": "shopify",
      "uitkomst": "open"
     },
     "id": "2026-09-25-seo-audit#e28d3aaa",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "Padel-template herstellen: de inhoud van de oude `page.gripsokken-padel.liquid` (747 woorden + FAQ) verwerken in `templates/page.sport-padel.json`",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Zet de oude padeltekst en FAQ over in templates/page.sport-padel.json in het testthema.",
      "wat_jij_doet": "Controleren en publiceren."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "niet te controleren: theme-bestandsinhoud van het concepttheme is niet leesbaar zonder Shopify CLI/theme-pull; live pagina geeft nog 404.",
      "controle": "Is page.sport-rugby.json uitgebreid naar 800+ unieke woorden?",
      "gecontroleerd": "2026-09-26",
      "methode": "shopify",
      "uitkomst": "open"
     },
     "id": "2026-09-25-seo-audit#71f4fc5b",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "Rugby-template `page.sport-rugby.json` uitbreiden naar 800+ unieke woorden (scrum, sprint, nat gras, geen verbod op gripsokken) en klaarzetten voor koppeling",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Schrijft 800+ woorden rugbytekst in page.sport-rugby.json in het testthema.",
      "wat_jij_doet": "Controleren en publiceren."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "niet te controleren: theme-bestandsinhoud van het concepttheme is niet leesbaar zonder Shopify CLI/theme-pull.",
      "controle": "Zijn de sport-templates ontdubbeld en uitgebreid met koopblok, vraag-H2's en tabel?",
      "gecontroleerd": "2026-09-26",
      "methode": "shopify",
      "uitkomst": "open"
     },
     "id": "2026-09-25-seo-audit#e4c898cb",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "Sport-templates (tennis, voetbal, padel, rugby) ontdubbelen en uitbreiden: koopblok met maat en ATC, sportspecifieke vraag-H2's met antwoord in 40–60 woorden, \"waar let je op\"-tabel, de friction-statistiek met bron; tennis/padel: \"anti blaren\"; voetbal: afgeknipte kousen",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Herschrijft de vier sport-templates (koopblok, vraag-H2's, tabel, bron) in het testthema.",
      "wat_jij_doet": "Controleren en publiceren."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "https://www.higrip.nl/blogs/trends/de-laatste-gezonde-trends-op-het-gebied-van-sportvoeding toont in de body nog letterlijke reeksen punten ('...... ... ....................') in plaats van tekst.",
      "controle": "Is de puntjes-placeholder uit het sportvoeding-artikel weg?",
      "gecontroleerd": "2026-09-26",
      "methode": "site",
      "uitkomst": "open"
     },
     "id": "2026-09-25-seo-audit#ffcf7cad",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "Puntjes-placeholder uit `templates/article.trends-sportvoeding.json` halen (of de template ontkoppelen)",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Haalt de placeholder uit article.trends-sportvoeding.json in het testthema.",
      "wat_jij_doet": "Testthema publiceren."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-09-25-seo-audit#54738768",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "Schema-snippets fixen: `Organization.url` = `shop.url`, `https://schema.org`, sameAs Instagram/TikTok, alternateName \"HI Grip\"; BlogPosting articleBody/description/dateModified — code in [[SEO-audit 2026-09-25 — schema]]",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Homepage-navigatie linkt alleen naar padel, tennis en voetbal — geen link naar de rugbypagina.",
      "controle": "Linkt de hoofdnavigatie naar de 4 sportpagina's en blog-CTA's naar /collections/gripsokken?",
      "gecontroleerd": "2026-09-26",
      "methode": "site",
      "uitkomst": "open"
     },
     "id": "2026-09-25-seo-audit#832a400e",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "Hoofdnavigatie + `page.ontdek-jouw-sport.json` linken naar de 4 sportpagina's; blog-CTA's in de article-templates naar `/collections/gripsokken` in plaats van `/collections/all`",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Past de links in page.ontdek-jouw-sport.json en de article-CTA's aan in het testthema en levert de menustructuur.",
      "wat_jij_doet": "Hoofdnavigatie aanpassen in admin > Navigatie en het testthema publiceren."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Homepage og:image is nog http://www.higrip.nl/... (niet https); H1 in de hero is al aanwezig ('HÏ Grip Performance Gripsokken voor Sporters').",
      "controle": "Is og:image https, staat er een H1 in de hero en zijn theme-koppen omgezet?",
      "gecontroleerd": "2026-09-26",
      "methode": "site",
      "uitkomst": "open"
     },
     "id": "2026-09-25-seo-audit#a96c6e4f",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "og:image naar https in de social-meta-snippet; H1 in de hero van de homepage; theme-koppen (\"Taal\", \"Zoekopdracht\", winkelwagen) omzetten naar niet-heading-elementen",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Fixt og:image-https, de homepage-H1 en de theme-koppen in het testthema.",
      "wat_jij_doet": "Testthema publiceren."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "niet te controleren: mobiele lay-out vereist visuele/browser-rendering, niet zichtbaar in de statische HTML.",
      "controle": "Staan titel, prijs, maat en ATC hoger op de mobiele productpagina?",
      "gecontroleerd": "2026-09-26",
      "methode": "site",
      "uitkomst": "open"
     },
     "id": "2026-09-25-seo-audit#5497f485",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Mobiele productpagina: titel, prijs, maat en ATC hoger (kleinere galerij of sticky ATC)",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Bouwt een compactere mobiele productlayout of sticky ATC in het testthema.",
      "wat_jij_doet": "Op je telefoon bekijken en publiceren."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "niet te controleren: performance-meting vereist een browser/PageSpeed-tool, niet beschikbaar in deze routine.",
      "controle": "Gebruiken afbeeldingen image_url met width/WebP en is de kost van ecomsend.js/block-cart.js gemeten?",
      "gecontroleerd": "2026-09-26",
      "methode": "site",
      "uitkomst": "open"
     },
     "id": "2026-09-25-seo-audit#bb55f568",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Performance: afbeeldingen via `image_url` met width + WebP, en in het concepttheme meten hoeveel ecomsend.js en block-cart.js kosten",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Zet afbeeldingen om naar image_url met width/WebP en meet de scriptkosten in het testthema.",
      "wat_jij_doet": "Testthema publiceren; eventueel apps uitzetten."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "niet te controleren: mobiel renderinggedrag vereist een browser, niet zichtbaar in de statische HTML.",
      "controle": "Is de ghosting in de aankondigingsbalk mobiel gefixt, cookiebanner compacter en tap-targets ≥44px?",
      "gecontroleerd": "2026-09-26",
      "methode": "site",
      "uitkomst": "open"
     },
     "id": "2026-09-25-seo-audit#78cb1b3e",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Ghosting in de aankondigingsbalk op mobiel fixen; cookiebanner compacter; tap-targets ≥ 44 px",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Fixt de aankondigingsbalk, de cookiebanner-styling en de tap-targets in het testthema.",
      "wat_jij_doet": "Testthema publiceren."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Zelfde doel (verzendbelofte gelijktrekken) als 2026-09-21-weekoverzicht#611d66c8; homepage toont nog 'vóór 22:00 vandaag verzonden'.",
      "controle": "Is de verzendbelofte in theme-teksten gelijkgetrokken met het feitenbestand?",
      "dubbel_van": "2026-09-21-weekoverzicht#611d66c8",
      "gecontroleerd": "2026-09-26",
      "methode": "site",
      "uitkomst": "dubbel"
     },
     "id": "2026-09-25-seo-audit#f5e0fead",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Verzendbelofte in theme-teksten (sport-templates, homepage-secties) gelijktrekken met het feitenbestand: \"binnen 1 werkdag verzonden\", gratis vanaf €35; de 22:00-belofte weghalen",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Trekt de verzendteksten in de theme-templates gelijk met het feitenbestand, in het testthema.",
      "wat_jij_doet": "Testthema publiceren."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "/pages/ons-verhaal: onder 'Lars Cretz' en 'Tigo Twigt' staat nog generieke demo-tekst ('We willen dat elke klant volledig tevreden is...', 'We doen ons best om je bestelling...'), geen echte bio.",
      "controle": "Is de demo-tekst onder de oprichters op /pages/ons-verhaal vervangen door echte bio's?",
      "gecontroleerd": "2026-09-26",
      "methode": "site",
      "uitkomst": "open"
     },
     "id": "2026-09-25-seo-audit#d404a8b3",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "Demo-tekst onder de oprichters op `/pages/ons-verhaal` vervangen door echte bio's (tekst van lars)",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Schrijft conceptbio's in de merkstem op basis van wat in de vault staat.",
      "wat_jij_doet": "Lars levert of keurt de bio's en plakt ze op de pagina."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "https://www.higrip.nl/blogs/intern geeft nog 200 (niet unpublished).",
      "controle": "Is /blogs/intern unpublished en het lege sportvoedingsartikel verwijderd met 301?",
      "gecontroleerd": "2026-09-26",
      "methode": "site",
      "uitkomst": "open"
     },
     "id": "2026-09-25-seo-audit#3e55cce2",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "`/blogs/intern` unpublishen; leeg sportvoedingsartikel verwijderen + 301 naar `/blogs/trends`",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Zet de redirect-CSV en de lijst met te verbergen blogs klaar in _uitvoer.",
      "wat_jij_doet": "Blog unpublishen, artikel verwijderen en redirect importeren in admin."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Zelfde doel (rugbypagina publiceren) als 2026-09-21-beachhead-rugby#5a25b546; GraphQL pages: gripsokken-voor-rugby bestaat al maar isPublished=false.",
      "controle": "Is de pagina gripsokken-voor-rugby aangemaakt en aan page.sport-rugby gekoppeld?",
      "dubbel_van": "2026-09-21-beachhead-rugby#5a25b546",
      "gecontroleerd": "2026-09-26",
      "methode": "shopify",
      "uitkomst": "dubbel"
     },
     "id": "2026-09-25-seo-audit#f637edc0",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "Pagina `gripsokken-voor-rugby` aanmaken in de admin en aan `page.sport-rugby` koppelen (na publicatie van het theme)",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Zet de paginatekst en de SEO-velden klaar.",
      "wat_jij_doet": "Pagina aanmaken in admin en koppelen aan page.sport-rugby."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "/en/pages/gripsokken-voor-tennis heeft nog een Nederlandse <title> ('Gripsokken voor tennis | HÏ Grip'), terwijl /en/pages/gripsokken-voor-padel wel vertaald is — inconsistent.",
      "controle": "Zijn de /en/-sportpagina's en over-ons vertaald of uitgesloten voor de EN-markt?",
      "gecontroleerd": "2026-09-26",
      "methode": "site",
      "uitkomst": "open"
     },
     "id": "2026-09-25-seo-audit#1ab7195e",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "`/en/`-sportpagina's en over-ons vertalen in Translate & Adapt, of uitsluiten voor de EN-markt",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Levert de Engelse vertalingen als bestand, of een advies om de EN-markt uit te sluiten.",
      "wat_jij_doet": "Vertalingen in Translate & Adapt plakken of de markt uitzetten."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "/collections/frontpage geeft nog 200 (geen 301); /winkel redirect naar /collections/all (niet naar /collections/gripsokken); /pages/shop geeft nog 404.",
      "controle": "Zijn /collections/frontpage, /pages/collection en /winkel doorgestuurd naar /collections/gripsokken en is /pages/shop gerepareerd?",
      "gecontroleerd": "2026-09-26",
      "methode": "site",
      "uitkomst": "open"
     },
     "id": "2026-09-25-seo-audit#6d7750aa",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "`/collections/frontpage`, `/pages/collection` en `/winkel` 301 naar `/collections/gripsokken`; FAQ-link `/pages/shop` (404) repareren",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Maakt een CSV voor de redirect-import en fixt de FAQ-link in het testthema.",
      "wat_jij_doet": "CSV importeren bij admin > Navigatie > Omleidingen en het thema publiceren."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Productpagina en FAQ noemen al een bron (tandfonline.com) bij 1,17 vs 0,60; overige blogclaims zijn niet stuk voor stuk op onderbouwing gecontroleerd.",
      "controle": "Zijn gezondheidsclaims in blogs/FAQ afgezwakt of onderbouwd, met bron bij 1,17 vs 0,60?",
      "gecontroleerd": "2026-09-26",
      "methode": "site",
      "uitkomst": "open"
     },
     "id": "2026-09-25-seo-audit#9e6c49fd",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Gezondheidsclaims in blogs en FAQ afzwakken of onderbouwen; bron noemen bij 1,17 vs 0,60 (Apps et al. / Friedl et al.)",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Screent blogs en FAQ op gezondheidsclaims en levert herschreven tekst met bronvermelding.",
      "wat_jij_doet": "Teksten in admin of thema overnemen."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "/products/performance-gripsokken: 29 van 49 afbeeldingen met identieke alt 'HÏ Grip Gripsokken HÏ Grip'; homepage: 9 van 25 afbeeldingen zonder alt.",
      "controle": "Zijn de 64 ontbrekende alt-teksten ingevuld en AI-prompt-alts vervangen?",
      "gecontroleerd": "2026-09-26",
      "methode": "site",
      "uitkomst": "open"
     },
     "id": "2026-09-25-seo-audit#d619f84b",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Alt-teksten: 64 ontbrekende invullen in het Nederlands, per beeld specifiek; AI-prompt-alts vervangen",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Schrijft Nederlandse alt-teksten per afbeelding in een lijst (bestand + alt).",
      "wat_jij_doet": "Alt-teksten in admin plakken."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Geen cluster-plan.json gevonden in de vault; niet geverifieerd of wat-zijn-gripsokken al is herschreven tot hoofdgids.",
      "controle": "Is de blogconsolidatie volgens cluster-plan.json uitgevoerd en wat-zijn-gripsokken herschreven?",
      "gecontroleerd": "2026-09-26",
      "methode": "vault",
      "uitkomst": "open"
     },
     "id": "2026-09-25-seo-audit#0ca90574",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "Blog consolideren volgens `cluster-plan.json` (11 redirects); `wat-zijn-gripsokken` herschrijven tot hoofdgids van 1.200+ woorden",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Schrijft de hoofdgids van 1.200+ woorden en de redirect-CSV volgens cluster-plan.json.",
      "wat_jij_doet": "Gids publiceren en redirects importeren."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Zelfde doel (verzend/retourwaarden gelijktrekken) als 2026-09-21-weekoverzicht#611d66c8; /policies/refund-policy nog 14 dagen + 25%.",
      "controle": "Zijn retourbeleidspagina en algemene voorwaarden gelijkgetrokken met het besluit van 25-9?",
      "dubbel_van": "2026-09-21-weekoverzicht#611d66c8",
      "gecontroleerd": "2026-09-26",
      "methode": "site",
      "uitkomst": "dubbel"
     },
     "id": "2026-09-25-seo-audit#5c1c6209",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "Retourbeleidspagina en algemene voorwaarden gelijktrekken met het besluit van 25-9 (30 dagen, geen \"ongeopend\"/25%-kosten, €4,50 verzending); pas daarna MerchantReturnPolicy/shippingDetails in het schema",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Schrijft retourbeleid en voorwaarden volgens het besluit van 25-9 en zet het schema klaar in het testthema.",
      "wat_jij_doet": "Teksten in admin > Beleid plakken en het thema publiceren."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "/products/performance-gripsokken is nog live en niet doorgestuurd; titel nog 'Gripsokken | Maximale Grip voor Elke Sport | HÏ Grip'.",
      "controle": "Is /products/performance-gripsokken (v1) doorgestuurd of hernoemd?",
      "gecontroleerd": "2026-09-26",
      "methode": "site",
      "uitkomst": "open"
     },
     "id": "2026-09-25-seo-audit#409d7184",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "v1-product `/products/performance-gripsokken`: 301 naar 2.0/collectie, of hernoemen weg van \"Gripsokken | …\"",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Maakt een advies (301 of hernoemen) plus de redirect-regel of een nieuwe titel.",
      "wat_jij_doet": "Kiezen en in admin doorvoeren."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Zelfde doel (werkende Trustpilot-integratie) als 2026-09-04-werkdossier-stand-van-zaken#98a99a09; nog geen trustpilot-widget-element, wel statische '4.5' in het schema.",
      "controle": "Is Trustpilot echt gekoppeld?",
      "dubbel_van": "2026-09-04-werkdossier-stand-van-zaken#98a99a09",
      "gecontroleerd": "2026-09-26",
      "methode": "site",
      "uitkomst": "dubbel"
     },
     "id": "2026-09-25-seo-audit#13130060",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Trustpilot echt koppelen (to-do 21-9); de statische \"4.5 / 5\" tot die tijd niet in het schema zetten",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Haalt de statische 4.5 uit het schema in het testthema.",
      "wat_jij_doet": "Trustpilot-app koppelen en het thema publiceren."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Vereist interactieve OAuth-setup (google_auth.py --setup) door een mens, niet automatisch uit te voeren.",
      "controle": "Is Search Console gekoppeld aan de claude-seo-plugin?",
      "gecontroleerd": "2026-09-26",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-25-seo-audit#d7044ced",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "Search Console koppelen aan de claude-seo-plugin (`google_auth.py --setup`) voor echte queries, indexatie en CrUX-velddata; drift-baseline vastleggen na de P1-fixes",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "nee",
      "wat_claude_doet": "Legt de baseline vast zodra de koppeling er is.",
      "wat_jij_doet": "google_auth.py --setup draaien en inloggen met het Google-account."
     }
    }
   ],
   "body_md": "# SEO-audit higrip.nl 25 september — 54/100, padel-regressie en rugby ontbreekt\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\nSEO-audit van 25 september 2026 (claude-seo `/seo audit`, 11 specialist-agents parallel, 109 sitemap-URL's, GA4 via analytics-mcp). **SEO Health Score 54/100**, was 60 op 20 september. Een deel van de daling is echt: de padelpagina is ingekort en de nieuwe sportpagina's zijn dun. Een ander deel komt door een strengere meting, want deze keer zijn alle 54 NL-URL's bekeken in plaats van een steekproef. Het schema is wél vooruitgegaan (van 42 naar 52).\n\n**Voor maandag 28-9:** werk in het **concepttheme**. Het werkthema was op 21-9 #201133490503 (lokaal `C:\\Users\\lars\\ai-workspace-2.0`), maar ID's schuiven op, dus draai eerst `shopify theme list`. **Niets naar live.**\n\n**Wie voert het uit:** deze notitie staat in de reeks SEO-regressiecheck. Die routine controleert maandag alleen en bouwt niets, dus de theme-acties hieronder zijn voor wie in het concepttheme werkt (`/website-agent` of de design-agent). De regressiecheck kan de afgeronde punten daarna bevestigen.\n\n**Let op:** pagina's, blogartikelen, redirects, productteksten en meta's zijn winkelbreed. Die gaan direct live, ook als je \"in het concepttheme\" werkt. Die punten staan hieronder daarom apart, onder *na akkoord van lars*.\n\nVolledig rapport: [SEO-audit 2026-09-25 — Volledig rapport](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Analyse/SEO-audit%202026-09-25/SEO-audit%202026-09-25%20%E2%80%94%20Volledig%20rapport.md) · Actieplan (31 punten): [SEO-audit 2026-09-25 — Actieplan](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Analyse/SEO-audit%202026-09-25/SEO-audit%202026-09-25%20%E2%80%94%20Actieplan.md) · Kant-en-klare JSON-LD: [SEO-audit 2026-09-25 — schema](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Analyse/SEO-audit%202026-09-25/findings/SEO-audit%202026-09-25%20%E2%80%94%20schema.md) · Blog-redirectplan: `findings/cluster-plan.json` in dezelfde map.\n\n## Bevindingen\n\n### Scores\n\n| Categorie | Gewicht | 25-9 | 20-9 |\n|---|---|---|---|\n| Technical SEO | 22% | 78 | 80 |\n| Content Quality | 23% | 47 | 58 |\n| On-Page SEO | 20% | 45 | 55 |\n| Schema | 10% | 52 | 42 |\n| Performance (lab, mobiel) | 10% | 35 | 38 |\n| AI Search Readiness | 10% | 60 | 61 |\n| Images | 5% | 50 | 70 |\n\nAanvullende deelscores: E-commerce 45, contentarchitectuur (clusters) 22, SXO-gap per sportpagina 50–53, rugby 1.\n\n### GA4 (1-8 t/m 24-9)\n\n- Organic Search: 107 sessies en 2 van de 3 aankopen (€54,74). Daarmee is organisch het sterkste omzetkanaal.\n- 54% van het organische verkeer landt op `/`. Dat zijn vooral merkzoekopdrachten: wie zoekt op \"gripsokken\" zonder merknaam komt nauwelijks binnen.\n- `/en` krijgt 15 organische sessies met maar 33% engagement. Nederlandse zoekers belanden op de Engelse site.\n- De sportpagina's hebben nog 0 organische landingen, maar staan pas sinds 21-9 live.\n\n### Kritiek, zelf geverifieerd\n\n1. **`/pages/ons-verhaal` toont Shopify-demotekst onder de oprichters.** Onder Lars staat \"We kunnen voor bepaalde artikelen geen retouren accepteren…\", onder \"Hogeschool Rotterdam\" staat \"…overtreft deze kenmerkende bestseller alle verwachtingen\".\n2. **Het artikel `/blogs/trends/de-laatste-gezonde-trends-op-het-gebied-van-sportvoeding` bestaat alleen uit puntjes.** Die puntjes zitten in het theme zelf: `templates/article.trends-sportvoeding.json`.\n3. **`/blogs/intern` (titel \"INTERN\") is publiek, indexeerbaar en staat in de sitemap.**\n4. **De padelpagina is gekrompen.** Op 18-9 had `/pages/gripsokken-padel` 747 woorden en FAQ-schema; het was de beste pagina van de site. Die URL 301't nu naar `/pages/gripsokken-voor-padel`, met 249 woorden. De oude template staat nog in `C:\\Users\\lars\\shopify-ai-workspace-theme-new\\templates\\page.gripsokken-padel.liquid`, en de `padel-*`-snippets zitten al in `ai-workspace-2.0`.\n5. **Rugby geeft een 404** op `/pages/gripsokken-voor-rugby`, terwijl `templates/page.sport-rugby.json` lokaal al klaarstaat (208 woorden). De pagina is waarschijnlijk nooit in de admin aangemaakt of gekoppeld. \"Rugby\" staat ook in geen enkele kerntekst, terwijl de homepage-meta het wel belooft. Geen enkele Nederlandse shop heeft een rugbypagina (zie [2026-09-21-beachhead-rugby](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-21-beachhead-rugby.md)).\n6. **De sportpagina's zijn nergens mee verbonden.** Geen van de 23 blogs linkt ernaar, ze staan niet in de hoofdnavigatie en `/pages/ontdek-jouw-sport` is een doodlopende hub. 20 blogs sturen door naar `/collections/all`.\n7. **De site is traag op mobiel** (labmeting, geen velddata). LCP is 5,5–7,8 s op home, product, collectie en tennis. Oorzaak is app-JavaScript: ecomsend.js (265 KB popup), block-cart.js (680 ms forced reflow) en fd-product-groups-ext.js. Daarnaast worden JPG's tot 3840 px geladen zonder WebP. Op desktop is het in orde.\n\n### Hoog\n\n- **De `/en/`-sportpagina's en `/en/pages/over-ons` zijn Nederlands**, terwijl hreflang=\"en\" een Engelse pagina belooft. Producten, collecties en blogs zijn wel vertaald.\n- **Tegenstrijdige feiten.** Verzending en retour zijn op 25-9 vastgesteld in [Feiten & Actuele Staat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md): €4,50, gratis vanaf €35, \"binnen 1 werkdag verzonden\" (de 22:00-belofte vervalt) en 30 dagen retour. Op de site staan nog afwijkende waarden: de FAQ noemt €30, en de homepage-meta en de sport-templates noemen nog 22:00. Zie ook [2026-09-23-seo-conversietest-run-1](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-23-seo-conversietest-run-1.md). Daarnaast noemt de site zowel 3 als 4 oprichters; de oprichtingstijdlijn is nov '24 volgens de ene pagina en dec '24 volgens de andere.\n- **Zes URL's concurreren om \"gripsokken\":** `/`, `/collections/gripsokken`, `/collections/all`, `/collections/frontpage` (title \"Homepage\"), `/pages/collection` (25 woorden) en het v1-product `/products/performance-gripsokken` (title \"Gripsokken | …\").\n- **Structured data.**\n  - `Organization.url` wijst op 4 paginatypen naar de huidige pagina in plaats van de homepage (Liquid-bug).\n  - Vrijwel alle blokken gebruiken `http://schema.org`.\n  - Bij BlogPosting bestaat `articleBody` alleen uit een hashtag, is `description` leeg en ligt `dateModified` vóór `datePublished`.\n  - Op de productpagina's ontbreken `shippingDetails`, `hasMerchantReturnPolicy`, `sku` en `gtin`.\n- **De \"4.5 / 5\" op de productpagina's is vaste tekst** in een testimonial-sectie. Die mag niet als AggregateRating worden gemarkeerd; dat bleek op 15-9 ook al bij `product-schema.liquid`.\n- **Op mobiel staan titel, prijs, maat en de winkelwagenknop pas na ~1,7 scherm.** De cookiebanner beslaat ~45% van het scherm en de aankondigingsbalk laat twee teksten over elkaar heen zien.\n- **Gezondheidsclaims zijn niet onderbouwd.** Claims als \"minder blessures\" en \"aanbevolen door medische staf\" hebben geen bron; de geciteerde studies meten wrijving, niet blessures.\n\n### Medium (zie actieplan)\n\n- Headings:\n  - Geen H1 op de beleidspagina's, retail en pilates.\n  - Drie H1's op verzend- en privacybeleid.\n  - Theme-koppen staan als H2 op elke pagina (\"Taal\" ×2, \"Zoekopdracht\", \"Je winkelwagen is leeg\").\n  - De grote \"HÏ GRIP\" in de hero van de homepage is geen H1.\n- Alt-teksten:\n  - 29% van de afbeeldingen heeft geen alt-tekst.\n  - De Engelse alt \"Performance Grip Socks 2.0\" staat op 24 afbeeldingen.\n  - Op `/pages/pilates` staat een AI-prompt als alt-tekst.\n- Blog: 6–7 kannibalisatieclusters. Voorstel: van ~24 naar ~13 artikelen, met 11 redirects.\n- Voor \"wat zijn gripsokken\" rankt `waarom-hi-grip-gripsokken`, niet de bedoelde post.\n- De og:image van de homepage laadt via http://.\n\n### Agent-adviezen die ik heb gecorrigeerd\n\n- **AggregateRating op de statische 4.5:** niet doen. Dat is een verzonnen beoordeling.\n- **MerchantReturnPolicy met \"30 dagen\":** 30 dagen is inmiddels vastgesteld (25-9), maar de retourbeleidspagina zegt nog 14 dagen, alleen ongeopend en met 25% kosten (zie [2026-09-07-compliance-todo](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-07-compliance-todo.md)). Eerst de beleidspagina gelijktrekken, dan pas het schema.\n- **\"/en/ is volledig vertaald\" tegenover \"/en/ is een Nederlandse kopie\":** allebei maar half waar. Welke pagina's wel en niet vertaald zijn, staat hierboven onder *Hoog*.\n\n## Acties\n\n### Maandag 28-9: concepttheme (alleen theme-bestanden, niet pushen naar live)\n\n- [ ] P1 · Concepttheme-ID bevestigen met `shopify theme list` en `ai-workspace-2.0` eerst `theme pull`en, zodat je niet op een verouderde kopie werkt\n- [ ] P1 · Padel-template herstellen: de inhoud van de oude `page.gripsokken-padel.liquid` (747 woorden + FAQ) verwerken in `templates/page.sport-padel.json`\n- [ ] P1 · Rugby-template `page.sport-rugby.json` uitbreiden naar 800+ unieke woorden (scrum, sprint, nat gras, geen verbod op gripsokken) en klaarzetten voor koppeling\n- [ ] P1 · Sport-templates (tennis, voetbal, padel, rugby) ontdubbelen en uitbreiden: koopblok met maat en ATC, sportspecifieke vraag-H2's met antwoord in 40–60 woorden, \"waar let je op\"-tabel, de friction-statistiek met bron; tennis/padel: \"anti blaren\"; voetbal: afgeknipte kousen\n- [ ] P1 · Puntjes-placeholder uit `templates/article.trends-sportvoeding.json` halen (of de template ontkoppelen)\n- [ ] P1 · Schema-snippets fixen: `Organization.url` = `shop.url`, `https://schema.org`, sameAs Instagram/TikTok, alternateName \"HI Grip\"; BlogPosting articleBody/description/dateModified — code in [SEO-audit 2026-09-25 — schema](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Analyse/SEO-audit%202026-09-25/findings/SEO-audit%202026-09-25%20%E2%80%94%20schema.md)\n- [ ] P1 · Hoofdnavigatie + `page.ontdek-jouw-sport.json` linken naar de 4 sportpagina's; blog-CTA's in de article-templates naar `/collections/gripsokken` in plaats van `/collections/all`\n- [ ] P2 · og:image naar https in de social-meta-snippet; H1 in de hero van de homepage; theme-koppen (\"Taal\", \"Zoekopdracht\", winkelwagen) omzetten naar niet-heading-elementen\n- [ ] P2 · Mobiele productpagina: titel, prijs, maat en ATC hoger (kleinere galerij of sticky ATC)\n- [ ] P2 · Performance: afbeeldingen via `image_url` met width + WebP, en in het concepttheme meten hoeveel ecomsend.js en block-cart.js kosten\n- [ ] P2 · Ghosting in de aankondigingsbalk op mobiel fixen; cookiebanner compacter; tap-targets ≥ 44 px\n- [ ] P2 · Verzendbelofte in theme-teksten (sport-templates, homepage-secties) gelijktrekken met het feitenbestand: \"binnen 1 werkdag verzonden\", gratis vanaf €35; de 22:00-belofte weghalen\n\n### Na akkoord van lars: winkelbreed, gaat direct live\n\n- [ ] P1 · Demo-tekst onder de oprichters op `/pages/ons-verhaal` vervangen door echte bio's (tekst van lars)\n- [ ] P1 · `/blogs/intern` unpublishen; leeg sportvoedingsartikel verwijderen + 301 naar `/blogs/trends`\n- [ ] P1 · Pagina `gripsokken-voor-rugby` aanmaken in de admin en aan `page.sport-rugby` koppelen (na publicatie van het theme)\n- [ ] P1 · `/en/`-sportpagina's en over-ons vertalen in Translate & Adapt, of uitsluiten voor de EN-markt\n- [ ] P2 · `/collections/frontpage`, `/pages/collection` en `/winkel` 301 naar `/collections/gripsokken`; FAQ-link `/pages/shop` (404) repareren\n- [ ] P2 · Gezondheidsclaims in blogs en FAQ afzwakken of onderbouwen; bron noemen bij 1,17 vs 0,60 (Apps et al. / Friedl et al.)\n- [ ] P2 · Alt-teksten: 64 ontbrekende invullen in het Nederlands, per beeld specifiek; AI-prompt-alts vervangen\n- [ ] P3 · Blog consolideren volgens `cluster-plan.json` (11 redirects); `wat-zijn-gripsokken` herschrijven tot hoofdgids van 1.200+ woorden\n\n### Beslissingen van lars (blokkeren andere punten)\n\n- [ ] P1 · Retourbeleidspagina en algemene voorwaarden gelijktrekken met het besluit van 25-9 (30 dagen, geen \"ongeopend\"/25%-kosten, €4,50 verzending); pas daarna MerchantReturnPolicy/shippingDetails in het schema\n- [ ] P2 · v1-product `/products/performance-gripsokken`: 301 naar 2.0/collectie, of hernoemen weg van \"Gripsokken | …\"\n- [ ] P2 · Trustpilot echt koppelen (to-do 21-9); de statische \"4.5 / 5\" tot die tijd niet in het schema zetten\n\n### Meten\n\n- [ ] P3 · Search Console koppelen aan de claude-seo-plugin (`google_auth.py --setup`) voor echte queries, indexatie en CrUX-velddata; drift-baseline vastleggen na de P1-fixes\n\n## Bronnen\n\n- claude-seo 2.3.1 `/seo audit`: technical, content, schema, sitemap, performance (Lighthouse 13.5, lab), visual (Playwright), geo, sxo, ecommerce, backlinks (Common Crawl, tier 0) en cluster\n- GA4 property 476032345, 1-8 t/m 24-9-2026 (analytics-mcp)\n- Eigen verificatie met curl: ons-verhaal, sportvoeding-post, padel-woordaantal, /en-H1's, herkomst van de 4.5-rating\n- Lokaal: `C:\\Users\\lars\\higrip.nl-audit\\` (inclusief screenshots en de ruwe Lighthouse-JSON); vorige audit in `_archief-2026-09-20\\`\n- Rapport en findings in de vault: `03_Website_Agent\\Analyse\\SEO-audit 2026-09-25\\`\n\n## Aantekeningen",
   "bron": "routine",
   "bronbestand": "03_Website_Agent\\Analyse\\SEO-audit 2026-09-25\\SEO-audit 2026-09-25 — Volledig rapport.md",
   "bronbestand_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Analyse/SEO-audit%202026-09-25/SEO-audit%202026-09-25%20%E2%80%94%20Volledig%20rapport.md",
   "categorie": "SEO",
   "datum": "2026-09-25",
   "deadline": "2026-09-28",
   "gerelateerd": [
    "2026-09-15-seo-audit",
    "2026-09-21-regressiecheck",
    "2026-09-21-growth-radar-seo-technisch",
    "2026-09-22-growth-radar-seo-content",
    "2026-09-23-growth-radar-ai-search",
    "2026-09-23-seo-conversietest-run-1",
    "2026-09-21-beachhead-rugby",
    "2026-09-24-growth-radar-cro",
    "2026-09-07-compliance-todo",
    "2026-09-25-search-console",
    "2026-09-28-seo-conversietest-run-2",
    "2026-10-05-seo-conversietest-run-3"
   ],
   "id": "2026-09-25-seo-audit",
   "kansen": [],
   "kerncijfers": [],
   "kerntitel": "",
   "prioriteit": "P1",
   "routine": "seo-regressiecheck",
   "samenvatting": "Volledige audit (11 specialist-agents, 109 URL's, GA4) geeft 54/100, tegen 60 op 20-9. De padelpagina is bij de template-migratie van 747 naar 249 woorden gekrompen, rugby geeft 404 terwijl het template lokaal al klaarstaat, en er staan vertrouwen-killers live (demo-tekst onder de oprichters, een leeg blogartikel, een publieke intern-blog). Maandag 28-9 in het concepttheme uitvoeren wat theme-niveau is; winkelbrede aanpassingen pas na akkoord van lars.",
   "status": "nieuw",
   "titel": "SEO-audit higrip.nl 25 september — 54/100, padel-regressie en rugby ontbreekt",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-25-seo-audit.md",
   "vervangt": [],
   "wat_niet_lukte": ""
  },
  {
   "acties": [
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Zelfde URL (/products/hi-grip-gripsokken-1) en eindtoestand als backlog#52886b90.",
      "controle": "Zelfde taak als backlogpunt 17?",
      "dubbel_van": "backlog#52886b90",
      "gecontroleerd": "2026-09-25",
      "methode": "vault",
      "uitkomst": "dubbel"
     },
     "id": "2026-09-25-search-console#6ae3949f",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "[search-console] Titel/meta van `/products/hi-grip-gripsokken-1` optimaliseren of indexering van de nieuwe canonieke URL bespoedigen (opnieuw indienen via Search Console) — 310 vertoningen in 7 dagen, CTR 0,32%, ruim onder elke andere pagina, terwijl de nieuwe handle `performance-gripsokken` veel minder vertoningen trekt",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Schrijft een nieuwe title/meta voor /products/hi-grip-gripsokken-1 in _uitvoer.",
      "wat_jij_doet": "Meta plakken en de URL opnieuw indienen in Search Console."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Zelfde vier URL's en eindtoestand ('grip socks' consolideren) als backlog#8f8db388.",
      "controle": "Zelfde taak als backlogpunt 18?",
      "dubbel_van": "backlog#8f8db388",
      "gecontroleerd": "2026-09-25",
      "methode": "vault",
      "uitkomst": "dubbel"
     },
     "id": "2026-09-25-search-console#0323b05e",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "[search-console] \"Grip socks\" consolideren: vier eigen URL's (`/en/collections/gripsokken`, `/collections/gripsokken`, `/collections/all`, `/`) concurreren om dezelfde term met een zwakke gemiddelde positie (10,3) — canonical/interne links nalopen zodat één pagina primair rankt",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Kiest de primaire URL op GSC-data en zet canonical- en linkwijzigingen klaar in het testthema.",
      "wat_jij_doet": "Keuze bevestigen en publiceren."
     }
    }
   ],
   "body_md": "# Search Console & rankings — eerste meting (week 38)\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\nEerste run van deze nieuwe routine (besluit 25 sep 2026). Geen eerder geheugen om tegen te vergelijken — deze run is de nulmeting. Search Console en GA4 waren beide bereikbaar (`check` gaf \"ok\"). Twee onderdelen uit de routine kon ik niet meten: het generatieve-AI-impressierapport en de indexeringsstatus — zie \"Wat niet lukte\" hieronder.\n\n## Kerncijfers\n\n- **139** · Klikken (28 dagen) · +139,7%\n- **3.972** · Vertoningen (28 dagen) · +78,7%\n- **3,5%** · CTR (28 dagen) · +0,89 pt\n- **9,8** · Gemiddelde positie (28 dagen) · 2,0 hoger\n\n## Bevindingen\n\n### Kerncijfers — totaal higrip.nl\n\n| Periode | Klikken | Vertoningen | CTR | Gem. positie |\n|---|---|---|---|---|\n| Laatste 7 dagen (16–22 sep) | 33 | 1.054 | 3,13% | 8,4 |\n| Vorige 7 dagen (9–15 sep) | 54 | 1.123 | 4,81% | 8,7 |\n| Verschil | **−38,9%** | −6,1% | −1,68 pt | +0,3 (beter) |\n| Laatste 28 dagen (26 aug–22 sep) | 139 | 3.972 | 3,5% | 9,8 |\n| Vorige 28 dagen (29 jul–25 aug) | 58 | 2.223 | 2,61% | 11,8 |\n| Verschil | **+139,7%** | +78,7% | +0,89 pt | +2,0 (beter) |\n\nDe maandtrend is duidelijk positief op elke KPI. De weektrend wijkt daarvan af: klikken daalden 39% terwijl vertoningen nagenoeg gelijk bleven. Bij 33 klikken in totaal is dat een klein aantal — één of twee toevallige dagen kunnen dit verklaren. Geen conclusie trekken op basis van één week; volgende week bevestigt of dit ruis is of een echte knik.\n\n### Kernkeywords (7 dagen, 16–22 sep)\n\n| Zoekterm | Positie | Vorige positie | Verschil | Rankende URL |\n|---|---|---|---|---|\n| gripsokken | 7,3 | 5,5 | **−1,7** | `/products/hi-grip-gripsokken-1` |\n| grip socks | 10,3 | 11,4 | +1,1 | `/en/collections/gripsokken` |\n| grip sokken | 11,1 | 12,6 | +1,5 | `/` |\n| antislip sokken | 2,0 (nieuw, 2 vert.) | — | — | `/blogs/hi-grip/hoe-zorg-ik-voor-mijn-gripsokken` |\n| gripsokken kopen | 11,0 (nieuw, 4 vert.) | — | — | `/products/hi-grip-gripsokken-1` |\n| gripsokken voetbal | 52,8 (nieuw, 6 vert.) | — | — | `/en/products/hi-grip-gripsokken-1` |\n| grip voetbalsokken | 34,0 (nieuw, 8 vert.) | — | — | `/products/hi-grip-gripsokken-1` |\n| gripsokken padel / tennis / rugby | geen data | — | — | — |\n\nTe weinig vertoningen per keyword (ver onder 100) voor \"antislip sokken\", \"gripsokken kopen\", \"gripsokken voetbal\" en \"grip voetbalsokken\" om conclusies aan te verbinden — alleen registreren als startpunt. Voor \"gripsokken padel\", \"gripsokken tennis\" en \"gripsokken rugby\" staat geen enkele regel in de top 50 van deze of de vorige periode (7 én 28 dagen): geen vertoningen genoeg om te tonen, dus geen positie bekend.\n\nOpvallend: \"gripsokken voetbal\" en \"grip voetbalsokken\" ranken op generieke productpagina's (en zelfs op de Engelse productpagina voor een Nederlandse zoekterm), niet op een sportspecifieke pagina — logisch, want `/pages/gripsokken-voetbal` geeft nog 404 (al gemeld door de regressiecheck, niet opnieuw hier).\n\n### Nieuwe zoektermen (7 dagen)\n\nVan de 50 gemeten termen zijn er 26 nieuw (niet eerder gemeten, want dit is de nulmeting — dus \"nieuw\" is hier niet informatief). Relevant zonder ruis: **antislip sokken** (positie 2, maar 2 vertoningen) en **gripsokken kopen** (positie 11, 4 vertoningen) — beide kernkeywords uit het feitenbestand, dus vanaf nu gevolgd.\n\n### Kansen\n\n**Striking distance (positie 5–20, ≥ 20 vertoningen, 7 dagen):**\n\n| Zoekterm | Positie | Vertoningen |\n|---|---|---|\n| grip socks | 10,3 | 112 |\n| gripsokken | 7,3 | 86 |\n| grip sokken | 11,1 | 46 |\n| gripsocks | 7,4 | 22 |\n\n**Lage CTR (≥ 100 vertoningen, CTR < 2%, 7 dagen):**\n\n| Pagina | Vertoningen | CTR | Positie |\n|---|---|---|---|\n| `/products/hi-grip-gripsokken-1` | 310 | **0,32%** | 8,3 |\n| `/en/collections/gripsokken` | 133 | 1,5% | 9,0 |\n| `/collections/all` | 116 | 1,72% | 7,1 |\n\n`/collections/all` heeft al een openstaand backlogpunt (ontbrekende meta description) — deze meting bevestigt dat het CTR-probleem daar reëel is. Nieuw is de productpagina `/products/hi-grip-gripsokken-1`: met 310 vertoningen in 7 dagen (1.003 in 28 dagen) trekt die verreweg de meeste vertoningen van alle pagina's, maar met 0,32% CTR ligt hij ruim onder elke andere pagina. Dit is de **oude URL** — de canonieke handle is inmiddels `performance-gripsokken` (zie feitenbestand) en de nieuwe 2.0-varianten trekken veel minder vertoningen (65–162). Actie hieronder.\n\n### Kannibalisatie\n\n**\"grip socks\"** is verdeeld over minstens vier eigen URL's in de zoekterm-pagina-koppeling: `/en/collections/gripsokken` (56 vert., pos. 10,9), `/collections/gripsokken` (34 vert., pos. 8,8), `/collections/all` (17 vert., pos. 12,6) en `/` (4 vert.). Geen enkele pagina domineert; de gemiddelde positie voor de hele term (10,3) is zwakker dan wat de sterkste pagina alleen zou moeten kunnen halen. Dit verdringt zichzelf.\n\n### Pagina's (7 dagen, gesorteerd op klikken — slechts 8 pagina's hadden klikken)\n\n| Pagina | Klikken | Vertoningen | Positieverschil |\n|---|---|---|---|\n| `/` | 18 | 158 | +1,7 |\n| `/en` | 8 | 104 | +0,7 |\n| `/en/collections/gripsokken` | 2 | 133 | +1,3 |\n| `/collections/all` | 2 | 116 | +0,7 |\n| `/products/hi-grip-gripsokken-1` | 1 | 310 | −0,6 |\n| `/products/performance-grip-socks-2-0-zwart` | 1 | 65 | −1,2 |\n| `/blogs/hi-grip/de-wetenschap-achter-gripsokken` | 1 | 27 | +1,3 |\n| `/cart` | 1 | 21 | −0,2 |\n\nGrootste dalers in positie (geen klikken, wel opvallend): `/en/products/hi-grip-gripsokken-1` (−20,4, van 1,8 naar 22,1) en `/en/blogs/hi-grip/de-wetenschap-achter-gripsokken` (−21,7, van 7,3 naar 29). Beide op lage volumes (22 resp. 3 vertoningen) — volgen, nog niet concluderen.\n\n### Indexering\n\nNiet te meten: `google_data.py` heeft geen commando voor het Index Coverage-rapport (geïndexeerd vs. niet-geïndexeerd, met redenen). Dat vereist de URL Inspection API of handmatige toegang tot de Search Console-UI, die deze routine niet heeft. Genoteerd als beperking, geen cijfer verzonnen.\n\n### Doorwerking van eerdere verbeteringen\n\nUit `_geheugen/seo-conversietest.md`: de enige wijziging die volgens de backlog al **live** staat, is de meta title/description van de homepage (bevestigd 24 september 2026). Dat valt ná het gemeten venster van deze week (16–22 sep), dus het effect is hier nog niet zichtbaar — pas volgende week meetbaar, plus de bekende vertraging van 3 dagen in Search Console-data. De verborgen maatgidspagina (`maatgids-gripsokken`) staat nog niet gepubliceerd en genereert dan ook logischerwijs geen vertoningen. Overige acties uit de conversietest (verzend/retour-teksten gelijktrekken, redirects, SEO-titels 2.0-producten) staan nog op CONCEPT — niets om op te meten.\n\n## Wat niet lukte\n\n- Generatieve-AI-impressierapport (AI Overviews/AI Mode): niet ondersteund door `google_data.py` en niet bereikbaar zonder Search Console-UI-toegang. Blijft open als backlogpunt 15 (P2, al genoteerd 22 sep) — geen nieuwe actie nodig.\n- Indexeringsstatus (geïndexeerd/niet-geïndexeerd, foutredenen): zelfde beperking, zie hierboven.\n\n## Acties\n\n- [ ] P2 · [search-console] Titel/meta van `/products/hi-grip-gripsokken-1` optimaliseren of indexering van de nieuwe canonieke URL bespoedigen (opnieuw indienen via Search Console) — 310 vertoningen in 7 dagen, CTR 0,32%, ruim onder elke andere pagina, terwijl de nieuwe handle `performance-gripsokken` veel minder vertoningen trekt\n- [ ] P2 · [search-console] \"Grip socks\" consolideren: vier eigen URL's (`/en/collections/gripsokken`, `/collections/gripsokken`, `/collections/all`, `/`) concurreren om dezelfde term met een zwakke gemiddelde positie (10,3) — canonical/interne links nalopen zodat één pagina primair rankt\n\n## Bronnen\n\n- `python 05_Research/_tools/google_data.py check|gsc --dagen 7 --top 50|gsc --dagen 28 --top 50|ga4` (25 sep 2026)\n- `00_Brand_Core/Feiten & Actuele Staat.md`\n- `05_Research/_geheugen/seo-conversietest.md`, `05_Research/_backlog/ACTIEBACKLOG.md`\n\n## Aantekeningen",
   "bron": "routine",
   "bronbestand": "",
   "bronbestand_url": null,
   "categorie": "SEO",
   "datum": "2026-09-25",
   "deadline": "",
   "gerelateerd": [
    "2026-09-23-seo-conversietest-run-1",
    "2026-09-21-regressiecheck",
    "2026-09-15-regressiecheck",
    "2026-09-25-seo-audit",
    "2026-09-28-seo-conversietest-run-2",
    "2026-09-29-growth-radar-seo-content",
    "2026-09-30-search-console"
   ],
   "id": "2026-09-25-search-console",
   "kansen": [],
   "kerncijfers": [
    {
     "label": "Klikken (28 dagen)",
     "verschil": "+139,7%",
     "waarde": "139"
    },
    {
     "label": "Vertoningen (28 dagen)",
     "verschil": "+78,7%",
     "waarde": "3.972"
    },
    {
     "label": "CTR (28 dagen)",
     "verschil": "+0,89 pt",
     "waarde": "3,5%"
    },
    {
     "label": "Gemiddelde positie (28 dagen)",
     "verschil": "2,0 hoger",
     "waarde": "9,8"
    }
   ],
   "kerntitel": "Klikken groeien op maandbasis, maar 'grip socks' versnippert over vier pagina's",
   "prioriteit": "P2",
   "routine": "search-console",
   "samenvatting": "Eerste run van de nieuwe wekelijkse Search Console-routine: 28-dagentrend is sterk positief (klikken +140%, vertoningen +79%), maar de laatste 7 dagen daalden klikken 39% op vrijwel gelijke vertoningen — bij kleine aantallen nog geen trend. 'Grip socks' is verdeeld over vier eigen URL's (kannibalisatie) en de oude productpagina-URL trekt de meeste vertoningen maar een CTR van 0,32%.",
   "status": "nieuw",
   "titel": "Search Console & rankings — eerste meting (week 38)",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-25-search-console.md",
   "vervangt": [],
   "wat_niet_lukte": "- Generatieve-AI-impressierapport (AI Overviews/AI Mode): niet ondersteund door `google_data.py` en niet bereikbaar zonder Search Console-UI-toegang. Blijft open als backlogpunt 15 (P2, al genoteerd 22 sep) — geen nieuwe actie nodig.\n- Indexeringsstatus (geïndexeerd/niet-geïndexeerd, foutredenen): zelfde beperking, zie hierboven."
  },
  {
   "acties": [],
   "body_md": "# Growth Radar — Social naar website (Google-pixel op Optimized, geen Meta-pixel, Creator Hub)\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\nDe belangrijkste vondst van vandaag ligt niet op TikTok of Instagram. Hij zit in de eigen broncode van higrip.nl. De Google & YouTube-pixel, die GA4 én Merchant Center voedt met `purchase`, staat op Shopify's \"Optimized\"-stand. Shopify mag de datadeling van zo'n pixel dan stilletjes pauzeren. Dat is een concrete kandidaat-verklaring voor de `keyEvents = 0` die al sinds 15 september op P1 staat. Daarnaast staat er geen Meta- of TikTok-pixel op de site: social verkeer is nu alleen via GA4 zichtbaar. Meta bouwt verder aan creator-advertenties (Creator Marketing Hub, 17 sep) en is sinds 8 sep ook een AI-kanaal in Shopify, maar beide zijn voor nu alleen iets om te volgen.\n\n## Bevindingen\n### Je Google-pixel staat op \"Optimized\", en Shopify mag hem dan pauzeren\n\nOp 13 januari 2026 veranderde Shopify de standaardinstelling voor marketing-app-pixels van \"Always on\" naar \"Optimized\". Die stand kijkt naar verkeer en verkoop. Ziet Shopify dagen of weken geen attributiesignalen, dan stopt de datadeling naar die pixel tot er weer signalen komen. Custom pixels en server-side koppelingen (Meta CAPI, GA4 Measurement Protocol, TikTok Events API) vallen erbuiten. Tot 29 juni 2026 liet zo'n pauze geen enkel spoor achter. Sinds die datum is er een activity log per app-pixel, met geschiedenis vanaf 3 juni 2026.\n\nVanochtend is de broncode van `/products/performance-gripsokken` gecontroleerd. De `webPixelsConfigList` bevat twee app-pixels, en beide hebben `\"dataSharingState\":\"optimized\"`:\n\n| Pixel | Wat hij stuurt | Stand |\n|---|---|---|\n| Google & YouTube-app (`G-MP0982HHKM`, `GT-NCGVWN62`) | GA4-events incl. `purchase`, `begin_checkout`, `add_to_cart` + Merchant Center (`MC-8TZQW9T6Q7`) | optimized |\n| Tweede app-pixel (account `raqds3-tb`, de shop-ID) | analytics + marketing | optimized |\n\nEen Meta-pixel of TikTok-pixel is nergens te vinden. Er komt geen `fbq`, geen `connect.facebook.net` en geen `analytics.tiktok.com` in de pagina voor.\n\n> **Voor higrip.nl:** Het P1-punt \"GA4 key event voor `purchase` staat nog steeds uit\" en P1-punt 11 (trackingscripts na Checkout Extensibility) zoeken allebei naar de reden dat GA4 al weken nul conversies toont. De Optimized-stand is een derde, heel concrete kandidaat. Tijdens een stille periode kan Shopify de Google-pixel gepauzeerd hebben, en dan komen er geen `purchase`-events meer binnen. Zonder events is er ook niets om als key event te markeren. Dezelfde pixel levert conversies aan Merchant Center, dus backlogpunt 4 (feed en AI Mode-shopping) hangt er ook aan. Of de pixel echt gepauzeerd is geweest, zie je alleen in de activity log. Het past bij de notitie over het meetgat van 3 september: nul `purchase`-events in de volledige GA4-historie, en 43% van de sessies als \"Direct\". Dat laatste is vrijwel zeker social verkeer zonder UTM-tags.\n\n**Actie:** Instellingen → Klantgebeurtenissen → App-pixels: activity log van de Google & YouTube-pixel bekijken en de stand op \"Always on\" zetten. Toegevoegd aan P1-punt 11, als eerste controle.\n\n---\n\n### Geen Meta- of TikTok-pixel: social verkeer is alleen via GA4 zichtbaar\n\nOmdat er geen Meta- of TikTok-pixel draait, weet higrip.nl van bezoekers uit Instagram, TikTok of creatorlinks alleen wat GA4 via de referrer of UTM-tags opvangt. Voor organische social is dat genoeg, zolang links in bio's en creatorposts UTM-tags hebben. Voor betaalde social is het niet genoeg.\n\nDe Optimized-stand is juist voor een nieuwe pixel riskant. Een Meta-pixel die je installeert vóór de eerste campagne loopt, ziet dagen of weken geen advertentiesignalen. Dat is precies het profiel dat Shopify pauzeert. Meta heeft sinds 15 april 2026 ook een one-click Conversions API in Events Manager, en verrijkt pixel-events automatisch met product- en paginadata. Die verrijking stond na ~30 dagen standaard aan.\n\n> **Voor higrip.nl:** Dit scherpt P3-punt 10 (CAPI instellen) aan. Als de advertentiebeslissing valt, installeer je de Meta-app, zet je de pixel meteen op \"Always on\" en koppel je CAPI vanaf dag 1. Anders kan de pixel gepauzeerd zijn precies op het moment dat de eerste campagne start. Hetzelfde geldt voor een TikTok-pixel als punt 13 (TikTok Shop) doorgaat.\n\n**Actie:** Punt 10 in de backlog bijgewerkt. Verder alleen volgen, want er lopen geen advertenties.\n\n---\n\n### Meta Creator Marketing Hub: creatorposts worden met één klik advertenties\n\nMarketing Dive meldde op 17 september 2026 dat Meta Creator Marketplace en Partnership Ads Hub samenvoegt tot één Creator Marketing Hub. Die rolt wereldwijd uit tot het einde van 2026. Nieuw daarin:\n- zoekfilters die creators tonen die producten zoals het jouwe al laten zien\n- contentrechten per post met een vervaldatum\n- bewerkingstools die auteursrechtelijk beschermde muziek en stickers verwijderen, zodat een post als advertentie kan draaien\n- advertenties aanmaken met één klik vanuit de Hub\n\nInstagram voegt vanaf 29 september ook live-video-advertenties toe. Meta heeft geen prestatiecijfers voor partnership ads gepubliceerd.\n\n> **Voor higrip.nl:** P3-punt 9 (padel-creators op commissiebasis) gaat nu uit van twee routes: doorklik naar higrip.nl, of TikTok Shop. Met de Hub komt er een derde bij. Een goed presterende creatorpost van een padelspeler wordt dan, met diens toestemming, een partnership ad vanaf het HÏ Grip-account, gericht op de productpagina. Dat werkt pas met punt 10 (pixel + CAPI) op orde. Het zoekfilter kan wel nu al helpen om Nederlandse padel-creators te vinden die gripsokken of padelschoenen laten zien.\n\n**Actie:** Alleen volgen — nog niet handelen. Kort genoteerd bij punt 9.\n\n---\n\n### Meta is sinds 8 september een AI-kanaal in Shopify, maar alleen in de VS\n\nVolgens de Shopify-changelog staat Meta sinds 8 september 2026 tussen de AI-kanalen in Agentic Storefronts. Dat viel samen met de VS-lancering van Meta's persoonlijke AI-agent Muse. Producten worden standaard via Shopify Catalog met Meta gedeeld. Uitzetten kan via Verkoopkanalen → Agentic.\n\n> **Voor higrip.nl:** Dit hoort bij de bestaande VS-check in P2-punt 8. Daar staan ChatGPT en Copilot al, nu komt Meta erbij. Voor NL-kopers verandert er niets. Wel handig: bij de 5-minutencheck van Agentic zie je Meta nu ook in de lijst.\n\n**Actie:** Alleen volgen. Punt 8 met één regel aangevuld.\n\n---\n\n### Gecontroleerd, niet opgenomen\n- **Meta Andromeda / creatieve diversiteit** (8–12 echt verschillende concepten per campagne): er lopen geen advertenties, en het is vooral creatie-advies zonder nieuwe primaire bron. Dat hoort bij de zaterdagfocus.\n- **Instagram shoppable Reels-links** (tot 30 productlinks per Reel): nog niet live in Nederland (VS, Brazilië, India, Indonesië, Thailand).\n\n## Acties\nGeen nieuwe acties. Alle vervolgstappen zijn verwerkt in bestaande backlogpunten 11 (pixel op Always on, begin hier), 10, 9 en 8.\n\n## Bronnen\n- [New default setting for marketing pixel data sharing — Shopify Changelog (13 jan 2026)](https://changelog.shopify.com/posts/new-default-setting-for-pixel-data-sharing)\n- [App pixels — Shopify Help Center](https://help.shopify.com/en/manual/promoting-marketing/pixels/app-pixels)\n- [Shopify App Pixel Activity Log — WeltPixel](https://weltpixel.com/blogs/news/shopify-app-pixel-activity-log-what-it-records-and-how-to-use-it)\n- [Meta Changed How Conversions Are Counted in 2026 — WeltPixel](https://weltpixel.com/blogs/news/meta-changed-how-conversions-are-counted-in-2026-what-shopify-merchants-should-know)\n- [Meta streamlines creator, brand tie-ups with new marketing hub — Marketing Dive (17 sep 2026)](https://www.marketingdive.com/news/meta-streamlines-creator-brand-tie-ups-with-new-marketing-hub/830593/)\n- [Meta is now an AI channel in your admin — Shopify Changelog (8 sep 2026)](https://changelog.shopify.com/posts/meta-is-now-an-ai-channel-in-your-admin)\n- Eigen controle: broncode `https://www.higrip.nl/products/performance-gripsokken`, 25 sep 2026 (`webPixelsConfigList`)\n\n## Aantekeningen",
   "bron": "routine",
   "bronbestand": "C:\\Users\\Test\\.claude\\research\\growth-radar\\rapporten\\2026-09-25-social.md",
   "bronbestand_url": null,
   "categorie": "Social",
   "datum": "2026-09-25",
   "deadline": "",
   "gerelateerd": [
    "2026-09-03-analytics-kpi-meetgat",
    "2026-09-18-growth-radar-social",
    "2026-09-17-growth-radar-cro",
    "2026-09-23-growth-radar-ai-search",
    "2026-09-25-evaluatie-routines",
    "2026-09-28-growth-radar-seo-technisch",
    "2026-10-02-growth-radar-social",
    "2026-10-03-growth-radar-social-content"
   ],
   "id": "2026-09-25-growth-radar-social",
   "kansen": [],
   "kerncijfers": [],
   "kerntitel": "",
   "prioriteit": "P1",
   "routine": "growth-radar",
   "samenvatting": "De Google & YouTube-pixel op higrip.nl (GA4 + Merchant Center, incl. purchase) staat op Shopify's Optimized-stand, waarin Shopify de datadeling stil mag pauzeren. Dat is een concrete kandidaat-oorzaak voor GA4 keyEvents = 0. Er draait geen Meta- of TikTok-pixel, dus bij een advertentiestart direct Always on + CAPI; Meta Creator Hub en Meta als AI-kanaal (alleen VS) zijn nog alleen iets om te volgen.",
   "status": "nieuw",
   "titel": "Growth Radar — Social naar website (Google-pixel op Optimized, geen Meta-pixel, Creator Hub)",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-25-growth-radar-social.md",
   "vervangt": [],
   "wat_niet_lukte": ""
  },
  {
   "acties": [
    {
     "afgevinkt": true,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Routines/README.md (commit c237c17, 25-09) noemt 'De verwijderde routine website' en die staat niet meer in de statustabel.",
      "controle": "Is de cloud-routine 'website' uitgezet?",
      "gecontroleerd": "2026-09-25",
      "methode": "vault",
      "sinds": "2026-09-25",
      "uitkomst": "gedaan"
     },
     "id": "2026-09-25-evaluatie-routines#759e403a",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "Cloud-routine \"website\" (trig_01BKt9WCeR9H92FDcS9HtPvV) uitzetten — de SEO-conversietest dekt dit met echte Shopify-toegang",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": true,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "05_Research/2026-09-21-weekoverzicht.md bestaat; README: Denzel draait op info@ met Denzel-weekoverzicht.md, dat naar 05_Research/JJJJ-MM-DD-weekoverzicht.md schrijft.",
      "controle": "Schrijft Denzel naar 05_Research en is week 21-09 gemigreerd?",
      "gecontroleerd": "2026-09-25",
      "methode": "vault",
      "sinds": "2026-09-25",
      "uitkomst": "gedaan"
     },
     "id": "2026-09-25-evaluatie-routines#b74873c4",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "Denzel-routineprompt stap 9 handmatig doorvoeren op het account waar de routine draait, en Week 2026-09-21 als notitie naar 05_Research migreren",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": true,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Alle zes routineprompts verwijzen naar 00_Brand_Core/Feiten & Actuele Staat.md en bevatten geen prijzen, drempel of sportersclaim; de regressiecheck stelt de URL-lijst zelf samen.",
      "controle": "Verwijzen de routineprompts naar het feitenbestand in plaats van vaste context?",
      "gecontroleerd": "2026-09-25",
      "methode": "vault",
      "sinds": "2026-09-25",
      "uitkomst": "gedaan"
     },
     "id": "2026-09-25-evaluatie-routines#889605b9",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Vaste context (prijzen, sporters-claim, verzenddrempel, product-handle, URL-lijst regressiecheck) uit de prompts halen en naar één feitenbestand laten verwijzen dat na elke wijziging wordt bijgewerkt",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": true,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "SEO-regressiecheck.md draait maandag; Growth Radar maandag = SEO-techniek als nieuws, 'Geen eigen sitecheck'; Denzel leest de regressiecheck.",
      "controle": "Ligt de technische SEO-check alleen bij de regressiecheck?",
      "gecontroleerd": "2026-09-25",
      "methode": "vault",
      "sinds": "2026-09-25",
      "uitkomst": "gedaan"
     },
     "id": "2026-09-25-evaluatie-routines#c11500b8",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Technische SEO-check op maandag bij één routine beleggen (regressiecheck) en uit Denzel en de Growth Radar-maandagfocus halen",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Geen eigenaar vastgelegd in 04_Agent_Infrastructuur/Routines/README.md.",
      "controle": "Is er één backlog met één eigenaar?",
      "gecontroleerd": "2026-09-26",
      "methode": "vault",
      "uitkomst": "open"
     },
     "id": "2026-09-25-evaluatie-routines#5c41af01",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Eén backlog: aanbevelingen uit het Shopify-logboek en de Denzel-beslissingen spiegelen naar ACTIEBACKLOG.md of andersom, met één eigenaar",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Spiegelt de logboek- en Denzel-punten naar ACTIEBACKLOG.md in de vault.",
      "wat_jij_doet": "Een eigenaar aanwijzen."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Geen vast afvinkmoment in README; Growth Radar.md staat nog max. 3 nieuwe backlogpunten per dag.",
      "controle": "Is er een vast afvinkmoment of een lagere instroom?",
      "gecontroleerd": "2026-09-26",
      "methode": "vault",
      "uitkomst": "open"
     },
     "id": "2026-09-25-evaluatie-routines#03ec6b39",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Vast wekelijks afvinkmoment voor de eigenaar invoeren (bijv. maandag na Denzel), anders de instroom van de Growth Radar verlagen naar max. 1–2 punten per dag",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "nee",
      "wat_claude_doet": "Kan geen vast moment voor een mens afdwingen.",
      "wat_jij_doet": "Wekelijks afvinkmoment in de agenda zetten."
     }
    },
    {
     "afgevinkt": true,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Lokale taken 'Growth Radar (dagelijks 08:00)' en 'website-seo-en-cconversietest' staan uit; README: Growth Radar 05:30, regressiecheck ma 06:00, SEO- en conversietest ma 07:30 onder de juiste naam.",
      "controle": "Kloppen titels en tijden van de routines?",
      "gecontroleerd": "2026-09-25",
      "methode": "vault",
      "sinds": "2026-09-25",
      "uitkomst": "gedaan"
     },
     "id": "2026-09-25-evaluatie-routines#b46aa819",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "Tijden en titels rechtzetten: Growth Radar-titel \"08:00\" versus cron 05:30, volgorde met de regressiecheck, typfout in de taaknaam van de conversietest",
     "uitvoerbaar": null
    }
   ],
   "body_md": "# Evaluatie routines — 25 september 2026\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\nVijf automatische routines draaien voor HÏ Grip. Drie werken inhoudelijk goed, één is kapot en één mist sinds 17 september de koppeling met het dashboard. Het grootste probleem zit niet in één routine maar in het geheel: er wordt veel gevonden en weinig afgehandeld. Dezelfde bevindingen komen op meerdere plekken terug en de vaste context in de prompts veroudert.\n\n## Bevindingen\n\n### Overzicht\n\n| Routine | Waar | Schema | Runs | Oordeel |\n|---|---|---|---|---|\n| Growth Radar | lokaal (desktop-app) | dagelijks 05:30 (+ jitter) | 10 sinds 15 sep, 19 sep gemist | Werkt goed |\n| SEO-regressiecheck | lokaal | maandag 07:00 | 2 (15 en 21 sep) | Werkt goed |\n| Website SEO- en conversietest | lokaal, Shopify-MCP | maandag 09:00 | 1 (23 sep, handmatig gestart) | Veelbelovend |\n| Cloud-routine \"website\" (`trig_01BKt9WCeR9H92FDcS9HtPvV`) | claude.ai-cloud | dagelijks 01:30 | 10+ | Kapot, uitzetten |\n| Denzel-weekoverzicht (`trig_01D9XwMiVvuq1FWr7CLoYTmN`) | claude.ai-cloud, ander account | maandag 08:00 | wekelijks sinds 24 aug | Werkt, maar schrijft naar de verkeerde map |\n\n### Wat goed werkt\n- **Growth Radar** houdt zich aan de dagfocus, het LEDGER voorkomt herhaling en de bevindingen zijn concreet voor higrip.nl. Voorbeelden: de gewijzigde prijsladder (24 sep) en de App Pixel op `optimized` als mogelijke oorzaak van `purchase = 0` (25 sep). De zondagrun deed wat hij moest doen: hij signaleerde dat de backlog boven de 15 open punten zat.\n- **Regressiecheck** is bewust saai en verifieerbaar. Hij bevestigde opgeloste punten (H1, redirects), vond nieuwe regressies (lege `/en/`-titel) en meldde eerlijk dat GA4 die week een timeout gaf.\n- **SEO-conversietest** is de enige routine met echte Shopify-toegang. Run 1 vond de belangrijkste inhoudelijke fout tot nu toe: de site spreekt zichzelf tegen over verzendkosten, de drempel voor gratis verzending, de verzendtijd en de retourtermijn ([2026-09-23-seo-conversietest-run-1](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-23-seo-conversietest-run-1.md)).\n\n### Wat niet werkt\n1. **De cloud-routine \"website\" faalt elke nacht structureel.** In de run van 24 september gaf WebFetch op higrip.nl `EGRESS_BLOCKED`. De Shopify-connector is wel gekoppeld maar niet ingeschakeld voor de routine, en er is geen vault-repo als bron. De routine heeft dus geen geheugen: elke nacht verschijnt een nieuw artifact met dezelfde foute claims (Trustpilot \"4,5 uit 15\", \"geen sportpagina's\", concurrent \"Trusox\"), die al op 16 september als onjuist zijn gemarkeerd ([2026-09-16-seo-onderzoek-cloud-routine-website](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-16-seo-onderzoek-cloud-routine-website.md)). De prompt (\"creëer optimale pagina's en blogs\") is vaag en vraagt dingen die de routine technisch niet kan. De SEO-conversietest doet hetzelfde werk wél goed, dus deze routine is volledig overbodig.\n2. **Denzel is nooit bijgewerkt naar 05_Research.** Het weekoverzicht van 21 september staat in `04_Agent_Infrastructuur/Beheer/Weekoverzicht/Week 2026-09-21.md` en niet in `05_Research`, dus het staat niet op het dashboard. De routine hangt onder een ander claude.ai-account (via de API van dit account geeft hij 404). Daardoor is de prompttekst uit `Denzel Weekoverzicht — Routineprompt stap 9 (2026-09-17)` (verwijderd 2-10-2026, vervangen door [Denzel-weekoverzicht](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Routines/Denzel-weekoverzicht.md)) nooit doorgevoerd.\n3. **Lokale routines slaan runs over als de pc slaapt.** Op 19 september (zaterdag, social content) draaide de Growth Radar niet. Op 21 september startten de Growth Radar en de regressiecheck allebei om 06:32, als inhaalrun. De afgesproken volgorde \"regressiecheck vóór Growth Radar\" klopt ook zonder inhaalrun niet: de Growth Radar staat op 05:30 (de titel zegt \"08:00\") en de regressiecheck op 07:00.\n\n### Knelpunten in het geheel\n- **Drie backlogs.** Acties staan in `ACTIEBACKLOG.md` (Growth Radar en regressiecheck), in de verborgen Shopify-pagina `seo-routine-logboek` (SEO-conversietest) en in de lijsten \"openstaande beslissingen\" en \"vooruitblik\" van Denzel. Hetzelfde punt komt meerdere keren terug. Een voorbeeld is de titel/meta en structured data: Denzel meldt die al 5 weken, de regressiecheck heeft er een P1 voor en de conversietest een voorstellenpakket.\n- **Veel gevonden, niets afgevinkt.** De backlog telt 19 open koppen, 3 afgevinkt en 0 in `AFGEROND.md`, terwijl de zondagrun zelf een grens van 15 hanteert. Elke dag komen er tot 3 nieuwe punten bij, maar er is geen vast moment waarop de eigenaar punten afhandelt.\n- **Overvolle maandag.** Op maandag draaien vier routines binnen drie uur: Growth Radar (SEO-technisch), regressiecheck, Denzel (live-site- en SEO-check) en de conversietest. Drie daarvan controleren grotendeels dezelfde technische SEO.\n- **Verouderde vaste context.** De Growth Radar-prompt en `project_higrip.md` noemen nog de prijzen €14,99 / €41,99 / €64,99 (live: €13,49 / €39,95 / €61,95), \"1.500+ sporters\" (site: 3000+), gratis verzending vanaf €30 (voorwaarden: €35) en de handle `hi-grip-gripsokken-1`. Die handle loopt nu via twee redirects (`hi-grip-gripsokken-1` → `hi-grip-gripsokken` → `performance-gripsokken`). De regressiecheck controleert daardoor een redirect in plaats van de echte productpagina. `/pages/gripsokken-voetbal` staat in de URL-lijst maar geeft al twee weken een 404.\n- **Kleine slordigheden.** De taaknaam `website-seo-en-cconversietest` heeft een typfout. Bij de conversietest is de description \"analyseer de HÏ Grip website op  SEO- en conversie\" niet informatief.\n\n## Acties\n- [x] P1 · Cloud-routine \"website\" (trig_01BKt9WCeR9H92FDcS9HtPvV) uitzetten — de SEO-conversietest dekt dit met echte Shopify-toegang\n- [x] P1 · Denzel-routineprompt stap 9 handmatig doorvoeren op het account waar de routine draait, en Week 2026-09-21 als notitie naar 05_Research migreren\n- [x] P2 · Vaste context (prijzen, sporters-claim, verzenddrempel, product-handle, URL-lijst regressiecheck) uit de prompts halen en naar één feitenbestand laten verwijzen dat na elke wijziging wordt bijgewerkt\n- [x] P2 · Technische SEO-check op maandag bij één routine beleggen (regressiecheck) en uit Denzel en de Growth Radar-maandagfocus halen\n- [ ] P2 · Eén backlog: aanbevelingen uit het Shopify-logboek en de Denzel-beslissingen spiegelen naar ACTIEBACKLOG.md of andersom, met één eigenaar\n- [ ] P2 · Vast wekelijks afvinkmoment voor de eigenaar invoeren (bijv. maandag na Denzel), anders de instroom van de Growth Radar verlagen naar max. 1–2 punten per dag\n- [x] P3 · Tijden en titels rechtzetten: Growth Radar-titel \"08:00\" versus cron 05:30, volgorde met de regressiecheck, typfout in de taaknaam van de conversietest\n\n## Bronnen\n- `mcp__scheduled-tasks` — lijst en runs van de drie lokale taken (opgevraagd op 25 sep 2026)\n- RemoteTrigger — `trig_01BKt9WCeR9H92FDcS9HtPvV` config + runlog `cse_01RJs7tH1CfsMKA6i2fphNov` (24 sep), `trig_01D9XwMiVvuq1FWr7CLoYTmN` → 404\n- `C:\\Users\\Test\\.claude\\scheduled-tasks\\*\\SKILL.md` — prompts van de lokale routines\n- `C:\\Users\\Test\\.claude\\research\\growth-radar\\` — ACTIEBACKLOG, LEDGER, AFGEROND, rapporten\n- [Denzel Weekoverzicht — Routine](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Denzel%20Weekoverzicht%20%E2%80%94%20Routine.md) en de git-log van de vault (Denzel-commits elke maandag om ~06:20 UTC)\n- curl op higrip.nl (redirectketen productpagina, 404 voetbalpagina) — 25 sep 2026\n\n## Aantekeningen",
   "bron": "los",
   "bronbestand": "",
   "bronbestand_url": null,
   "categorie": "Techniek",
   "datum": "2026-09-25",
   "deadline": "",
   "gerelateerd": [
    "2026-09-16-seo-onderzoek-cloud-routine-website",
    "2026-09-23-seo-conversietest-run-1",
    "2026-09-21-regressiecheck",
    "2026-09-14-weekoverzicht",
    "2026-09-25-growth-radar-social",
    "2026-09-21-weekoverzicht",
    "2026-09-28-seo-conversietest-run-2",
    "2026-09-28-optimalisatiecheck-werkwijze-routines-en-dashboard",
    "2026-10-02-vault-review"
   ],
   "id": "2026-09-25-evaluatie-routines",
   "kansen": [],
   "kerncijfers": [],
   "kerntitel": "",
   "prioriteit": "P1",
   "routine": "",
   "samenvatting": "Van de vijf routines leveren Growth Radar, regressiecheck en de SEO-conversietest bruikbaar werk; de cloud-routine \"website\" faalt elke nacht (higrip.nl geblokkeerd, geen Shopify) en herhaalt foute claims, en Denzel schrijft nog naar de oude map zodat het weekoverzicht niet op het dashboard komt. Grootste systeemprobleem: acties landen op drie plekken en de backlog groeit (18 open, 0 afgerond) zonder dat er iets wordt afgevinkt.",
   "status": "nieuw",
   "titel": "Evaluatie routines — Growth Radar, regressiecheck, SEO-conversietest, cloud-routine website, Denzel",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-25-evaluatie-routines.md",
   "vervangt": [],
   "wat_niet_lukte": ""
  },
  {
   "acties": [
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Kan pas na afsluiting van boekjaar 2026; mensenwerk.",
      "controle": "Balans 2026 naast de jaarcijfers leggen.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-24-financieel-plan-2027-2031-bmc-2031#35da0930",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "Balans 2026 (kolom 2026 van vermogensbehoefte en financieringsplan) naast de jaarcijfers leggen zodra 2026 is afgesloten",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Legt de balans naast de jaarcijfers zodra die in de vault staan.",
      "wat_jij_doet": "Jaarcijfers 2026 aanleveren na afsluiting."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Controle van leningsvoorwaarden door Lars.",
      "controle": "Rente en aflossing investeerderslening controleren.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-24-financieel-plan-2027-2031-bmc-2031#6d2f6acc",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "Rente en aflossing van de investeerderslening controleren (model: 5%, aflossen 2028–2032)",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Herrekent rente en aflossing in het financieel plan en meldt afwijkingen.",
      "wat_jij_doet": "Uitkomst akkoord geven."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Contact met leverancier; mensenwerk.",
      "controle": "Offerte skisok met gelprotectie aanvragen.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-24-financieel-plan-2027-2031-bmc-2031#a7e763f5",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "Offerte skisok met gelprotectie aanvragen (FOB, MOQ, levertijd) vóór juni 2027 voor levering in september",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Schrijft een offerteaanvraag (FOB, MOQ, levertijd) als e-mailconcept.",
      "wat_jij_doet": "Aanvraag naar leveranciers versturen."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Financieringsaanvraag door de ondernemers.",
      "controle": "Qredits-aanvraag voorbereiden.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-24-financieel-plan-2027-2031-bmc-2031#83b47803",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Qredits € 25.000 voorbereiden voor aanvraag in Q4 2027",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Zet het Qredits-dossier (plan, cijfers, checklist) klaar in de vault.",
      "wat_jij_doet": "Aanvraag indienen bij Qredits."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Keuze en tekst van de ondernemers.",
      "controle": "Ondernemersvergoeding motiveren in het verslag.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-24-financieel-plan-2027-2031-bmc-2031#edd40a4a",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Ondernemersvergoeding 2027–2028 (€ 500 en € 1.000) motiveren in het verslag (richtlijn reader € 2.000)",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Schrijft de motivatie-alinea in het verslag.",
      "wat_jij_doet": "Tekst akkoord geven."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Feitenbestand zegt nog 'Skisokken met gelprotection: lancering uitgesteld'.",
      "controle": "Zeggen feitenbestand en Strategische Keuzes dat skisokken gepland zijn voor Q4 2027?",
      "gecontroleerd": "2026-09-26",
      "methode": "vault",
      "uitkomst": "open"
     },
     "id": "2026-09-24-financieel-plan-2027-2031-bmc-2031#9af07018",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Feitenbestand en Strategische Keuzes bijwerken: skisokken zijn niet meer uitgesteld maar gepland voor Q4 2027",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Werkt het feitenbestand en Strategische Keuzes in de vault bij.",
      "wat_jij_doet": "Wijziging bevestigen."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Financieel plan noemt nog ± 1 mln wintersporters (NBTC-NIPO, 2015).",
      "controle": "Staat er een recenter aantal Nederlandse wintersporters in het plan?",
      "gecontroleerd": "2026-09-26",
      "methode": "vault",
      "uitkomst": "open"
     },
     "id": "2026-09-24-financieel-plan-2027-2031-bmc-2031#8cdc0d8a",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "Recenter aantal Nederlandse wintersporters zoeken (laatste harde cijfer: ± 1 mln, 2015)",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Zoekt een recent cijfer voor Nederlandse wintersporters met bron en zet het in de vault.",
      "wat_jij_doet": "Niets."
     }
    }
   ],
   "body_md": "# Financieel plan 2027-2031 op basis van BMC 2031\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\nVermogensbehoefte, financieringsplan en exploitatiebegroting van HÏ Grip. 2027 staat per kwartaal, 2028–2031 per jaar. Versie 3 (25-09-2026) bouwt voort op het bestand waarin het team 2026 t/m Q3 heeft ingevuld: € 15.100 omzet, € 8.000 resultaat, een lening van een investeerder (€ 25.000) en een kortlopende lening (€ 4.200). Nieuw in v3:\n\n- de webshop 2027 per kwartaal zoals afgesproken (Q1 € 5.400, Q2 € 6.000, Q3 € 7.800);\n- de lancering van skisokken met gelprotectie in Q4 2027;\n- een groeicurve die eerst sneller stijgt en later meer afvlakt, met minstens € 500.000 webshopomzet in 2031.\n\nVersie 4 (25-09-2026) verwerkt de aanpassingen van het team in de kosten per kwartaal voor 2027 en laat vermogensbehoefte, financieringsplan en exploitatiebegroting sluitend op elkaar aansluiten. Het model telt 1.825 formules en geeft 0 fouten (herberekend in Excel).\n\n## Bevindingen\n\n**Kerncijfers v5 (€, excl. btw)**\n\n| | 2027 | 2028 | 2029 | 2030 | 2031 |\n|---|---|---|---|---|---|\n| Omzet | 114.800 | 323.000 | 720.000 | 1.142.000 | 1.713.000 |\n| …waarvan webshop | 45.800 | 130.000 | 276.000 | 438.000 | 638.000 |\n| …waarvan skisokken (webshop + retail) | 17.000 | 59.000 | 122.000 | 192.000 | 279.000 |\n| Groei | | ×2,8 | ×2,2 | ×1,6 | ×1,5 |\n| Aandeel B2B, alleen gripsokken | 61% | 56% | 57% | 56% | 56% |\n| EBITDA | 30.670 | 48.385 | 44.210 | 94.150 | 138.725 |\n| Resultaat na belasting | 28.380 | 40.845 | 26.441 | 63.567 | 96.904 |\n| Vermogensbehoefte (31-12) | 25.100 | 69.700 | 172.100 | 263.800 | 374.300 |\n\n1. **De 2026-cijfers laten een duidelijk seizoenspatroon zien.** Dat patroon is overgenomen in 2027, maar afgezwakt, omdat 2026 een opstartjaar is.\n   - Retail koopt in Q1 (€ 3.850) en Q3 (€ 2.290); Q2 is stil (€ 40).\n   - De hele clubomzet viel in Q2 (€ 6.330): clubs bestellen vóór het nieuwe seizoen.\n   - Verzendkosten waren maar € 188 t/m Q3, omdat de klant onder € 35 zelf € 4,50 betaalt. In het model is dat daarom € 1,75 netto per zending in plaats van € 3,50.\n   - Het subtotaal interne kosten in het ingevulde bestand miste de regel betalingsverschillen. Het model telt die wel mee, dus het resultaat over 2026 wordt € 7.963 in plaats van € 8.017.\n2. **Skisokken zijn een tweede omzetmotor met een betere marge.**\n   - Prijs: € 29,95 incl. btw, € 24 netto. Dat ligt onder de enige directe concurrent met scheenbescherming, de Sidas Ski Protect V2, die € 34,90 kost (normaal € 42,90).\n   - Inkoop is geschat op € 4,50 per paar. Premium sokken kosten in Turkije $ 1–2 bij 1.000+ paar; een lange sok met merino en gel is duurder.\n   - De verkoop komt in twee golven: Q4, en januari–maart. 49% van de Nederlandse wintersporters vertrekt in januari, slechts 12% met kerst.\n   - In 2031 gaat het om 8.300 paar via de webshop en 6.000 via retail. Dat is ± 1,4% van ± 1 miljoen wintersporters (cijfer uit 2015).\n3. **De groeicurve is steil in 2028–2029, zakt in 2030 naar ×1,6 en blijft in 2031 op ×1,5 (afspraak met het team).** Na 2029 komt de groei vooral uit bestaande kanalen, en daar zeggen benchmarks: DTC-merken onder $ 10 mln groeiden in 2025 gemiddeld 24%. De extra groei in 2028–2029 komt uit nieuwe stappen: het eerste volle skiseizoen, 45 → 72 retailpartners en een retailketen vanaf 2029. Stapgroei vraagt zo'n nieuw product of kanaal.\n4. **Alleen Qredits als nieuw geld; de winst financiert de groei.** Ultimo 2026 is het eigen vermogen € 12.700 (€ 791 begin 2026 + resultaat 2026 € 11.900). Samen met de lening van de investeerder (€ 25.000) dekt dat 2027 ruim.\n   - Nieuw geld: alleen Qredits € 25.000 in 2028 (aanvragen in Q4 2027), voor de voorraad skisokken en de retailgroei.\n   - Een investeerder en een banklening zijn niet nodig. Voor een snellere groei blijven ze een optie bij de omzetting naar een BV in 2029.\n   - De rekening-courant vangt de piek op: € 9.700 (2029), € 27.100 (2030) en € 21.700 (2031).\n   - In de VOF-jaren (2027–2028) gaat 20% van de winst privé naar de inkomstenbelasting van de vennoten.\n\n   Elk jaar sluit het plan.\n6. **Controle v5: één peildatum en de juiste btw.**\n   - Vermogensbehoefte en financieringsplan zijn nu allebei een balans per 31-12, net als de kolom 2026. Het eigen vermogen bevat het resultaat van het jaar en de leningen staan na aflossing.\n   - Aanloopkosten en aanloopverlies zijn geen apart actief meer. Ze zitten al in het resultaat en dus in het eigen vermogen; anders zouden ze dubbel tellen.\n   - Btw: er is nooit btw terug te vorderen. De verkoop is belast met 21% en de invoer-btw wordt in dezelfde aangifte verrekend. Daarom staat de af te dragen btw over Q4 nu als kort vreemd vermogen in het financieringsplan: € 3.800 ultimo 2027 en € 58.500 ultimo 2031.\n   - De rente op de rekening-courant is het saldo op 31-12 van het vorige jaar × 9%. Voor 2027 is dat de € 2.000 uit 2026.\n   - Een automatische controle bevestigt dat alles overeenkomt:\n     - eigen vermogen 2026 → 2027;\n     - ingehouden winst, rente, afschrijving, omzet, boekwaarde en leningen;\n     - de btw van Q4 2027 (apart nagerekend);\n     - alle kwartalen van 2026 en 2027 tellen op.\n\n5. **Het team groeit mee met het aantal orders.** Het eerste personeel komt in 2029: een marketeer en 0,5 fte operations. In 2031 zijn er 6 medewerkers (5,8 fte, deels parttime): twee marketeers, twee mensen operations, een developer en een R&D-medewerker. De ondernemersvergoeding volgt de richtlijn van € 2.000 uit de reader vanaf 2029; in 2027 is die € 500 en in 2028 € 1.000.\n\n## Acties\n- [ ] P1 · Balans 2026 (kolom 2026 van vermogensbehoefte en financieringsplan) naast de jaarcijfers leggen zodra 2026 is afgesloten\n- [ ] P1 · Rente en aflossing van de investeerderslening controleren (model: 5%, aflossen 2028–2032)\n- [ ] P1 · Offerte skisok met gelprotectie aanvragen (FOB, MOQ, levertijd) vóór juni 2027 voor levering in september\n- [ ] P2 · Qredits € 25.000 voorbereiden voor aanvraag in Q4 2027\n- [ ] P2 · Ondernemersvergoeding 2027–2028 (€ 500 en € 1.000) motiveren in het verslag (richtlijn reader € 2.000)\n- [ ] P2 · Feitenbestand en Strategische Keuzes bijwerken: skisokken zijn niet meer uitgesteld maar gepland voor Q4 2027\n- [ ] P3 · Recenter aantal Nederlandse wintersporters zoeken (laatste harde cijfer: ± 1 mln, 2015)\n\n## Bronnen\n\n- Eigen realisatie 2026 t/m Q3 (ingevuld door het team) + `Financiën - HÏ Grip.xlsx` (batches, staffels)\n- [Performance Grip Socks 2.0](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Product/Performance%20Grip%20Socks%202.0.md) (adviesprijs, B2B-prijzen), [2026-09-21-beachhead-rugby](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-21-beachhead-rugby.md), [2026-09-07-compliance-todo](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-07-compliance-todo.md)\n- Sidas Ski Protect V2: https://www.sportheaters.com/products/449/ski-socks-sidas-ski-protect-v2\n- Groothandelsmarge premium sokken (retail 55–65%, wholesale ≈ 0,4 × retail): https://deadsoxy.com/blogs/wholesale-socks/wholesale-socks-guide-retailers-resellers\n- Sokkenproductie Turkije ($ 1–2 bij 1.000+ paar): https://www.leelinesports.com/socks-manufacturers-in-turkey/ · MOQ merino 500 paar: https://deadsoxy.com/blogs/custom-socks/custom-wool-socks-a-buyers-guide-to-merino-blends-moqs-and-manufacturing\n- Wintersportonderzoek 2025–2026 (vertrekmaanden): https://www.snowplaza.nl/weblog/wintersportonderzoek-2025-2026-meer-geld-vaker-skien-en-trouw-aan-oostenrijk/\n- ± 1 mln Nederlandse wintersporters (NBTC-NIPO, 2015): https://skiinformatie.nl/aantal-wintersporters-stabiel-op-1-miljoen/\n- DTC-groeibenchmarks: https://ecomcfo.co/ecom-cfo-notebook-2026-annual-benchmark-report/ · https://www.projectionhub.com/post/direct-to-consumer-d2c-product-startup-revenue-stats-2022\n- Qredits: https://www.qredits.nl/zakelijk-krediet/mkb-krediet · PostNL: https://www.postnl.nl/zakelijk/tarieven/ · Vpb 2026: https://www.mkbservicedesk.nl/nieuws/ondernemersnieuws/vpb-tarief-in-2025-en-2026\n- Volledige lijst: tabblad *Bronnen* in het Excel-model\n\n## Aantekeningen",
   "bron": "los",
   "bronbestand": "C:\\Users\\Test\\Downloads\\HÏ Grip - Financieel Plan 2026-2031 (v5 balans 31-12).xlsx",
   "bronbestand_url": null,
   "categorie": "Merk",
   "datum": "2026-09-25",
   "deadline": "",
   "gerelateerd": [
    "2026-09-21-beachhead-rugby",
    "2026-09-07-compliance-todo",
    "2026-09-24-upfront-bestelvolume-schatting",
    "2026-09-29-crm-dashboard-voorstel"
   ],
   "id": "2026-09-24-financieel-plan-2027-2031-bmc-2031",
   "kansen": [],
   "kerncijfers": [],
   "kerntitel": "",
   "prioriteit": "P1",
   "routine": "",
   "samenvatting": "Versie 5 met de ingevulde 2026-cijfers en skisokken vanaf Q4 2027: 2027 € 115.000 omzet (gripsokken € 98.000 bij ± 15.000 stuks en 61% B2B, skisokken € 17.000), daarna ×2,8 → ×2,2 → ×1,6 → ×1,5 naar € 1,7 mln in 2031, waarvan € 638.000 webshop. Elk jaar winstgevend; in 2027 geen nieuw geld nodig dankzij de lening van de investeerder, daarna alleen Qredits € 25.000 (2028) plus een rekening-courant: de winst financiert de groei. Alle overzichten staan op balansdatum 31-12 en sluiten aantoonbaar op elkaar aan.",
   "status": "nieuw",
   "titel": "Financieel plan 2027-2031 op basis van BMC 2031 (vermogensbehoefte, financieringsplan, exploitatiebegroting)",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-24-financieel-plan-2027-2031-bmc-2031.md",
   "vervangt": [],
   "wat_niet_lukte": ""
  },
  {
   "acties": [
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Plan en keuze van het team.",
      "controle": "Piekdag-mechaniek uitwerken als test voor een actiedag.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-24-upfront-bestelvolume-schatting#3712b6e1",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "Piekdag-mechaniek van Upfront (aangekondigde eenmalige actie, bundels, hoge AOV) uitwerken als test voor een HÏ Grip-actiedag",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Werkt een actiedag-plan (mechaniek, bundels, planning) uit in de vault.",
      "wat_jij_doet": "Besluiten of en wanneer de actiedag doorgaat."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Financieel plan noemt Upfront alleen als gerelateerde notitie; geen vergelijking van groeitempo's in de tekst.",
      "controle": "Zijn de groeiaannames naast het groeitempo van Upfront gelegd?",
      "gecontroleerd": "2026-09-26",
      "methode": "vault",
      "uitkomst": "open"
     },
     "id": "2026-09-24-upfront-bestelvolume-schatting#8de73eba",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "Groeiaannames in het financieel plan naast het groeitempo van Upfront leggen (2023→2025) als sanity check",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Legt de groeiaannames naast het groeitempo van Upfront en schrijft een korte check.",
      "wat_jij_doet": "Niets."
     }
    }
   ],
   "body_md": "# Upfront bestelvolume-schatting (dag/week/maand/jaar)\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\nGevraagd: hoeveel bestellingen Upfront per dag, week, maand en jaar heeft. Upfront publiceert dat niet. Wel bekend zijn de omzet per kanaal over 2025 en een paar piekdagen, dus het volume is een schatting: online omzet gedeeld door een aangenomen gemiddelde orderwaarde (AOV).\n\n## Bevindingen\n\n**Harde cijfers (gepubliceerd)**\n\n| | Waarde | Bron |\n|---|---|---|\n| Omzet 2023 | € 6,3 mln | Wikipedia, MT/Sprout |\n| Omzet 2024 | € 23,4 mln | Wikipedia, MT/Sprout |\n| Omzet 2025 | ± € 70 mln (bedrijfsopgave; doel was € 90 mln) | AGF 20-01-2026 |\n| waarvan online | € 46 mln | AGF 14-07-2026 |\n| waarvan supermarkten | € 17 mln | AGF 14-07-2026 |\n| Piekdag (nieuwjaarsactie 2026) | 81.344 bestellingen × € 80 AOV = € 6,5 mln in 24 uur | Duo Diligence |\n| Vorig dagrecord | ± 42.000 bestellingen | Duo Diligence |\n| Eigen supermarkt, 2e weekend (dec 2025) | € 145k over 3 dagen, 3.458 klanten (± € 42 per bon) | RetailTrends 16-12-2025 |\n\n**Schatting online bestellingen 2025**\n\nDe € 80 van de piekdag geldt niet als normale AOV: op een actiedag slaan klanten in. Voor een gewone dag ligt € 50-65 realistischer (aanname, niet gepubliceerd).\n\n| Periode | AOV € 65 | AOV € 57,50 (midden) | AOV € 50 |\n|---|---|---|---|\n| Jaar | ± 708.000 | **± 800.000** | ± 920.000 |\n| Maand | ± 59.000 | **± 67.000** | ± 77.000 |\n| Week | ± 13.600 | **± 15.400** | ± 17.700 |\n| Dag (gemiddeld) | ± 1.940 | **± 2.190** | ± 2.520 |\n\n**Kanttekeningen**\n\n- *Gemiddelde ≠ normale dag.* Het volume komt in pieken binnen. De ene actiedag van januari 2026 leverde al € 6,5 mln op, ± 14% van de hele online omzet van 2025. Een gewone dag zonder actie ligt dus onder de ± 2.200.\n- *2026 ligt hoger.* De piekdag van januari valt in 2026, er is een tweede eigen winkel bij gekomen (± € 150k weekomzet) en België is opgestart. Het doel voor 2026 is € 250 mln, maar Upfront haalde het doel voor 2025 ook niet (€ 70 mln tegen € 90 mln). Een verdubbeling van de online omzet zou neerkomen op ± 1,5-1,8 mln bestellingen per jaar en ± 4.000-5.000 per dag. Dat is een scenario, geen gepubliceerd cijfer.\n- *Kwaliteit van de bronnen.* De cijfers over de piekdag komen uit een analyse die zelf zegt dat die deels op interviews en schattingen rust. De omzet per kanaal komt uit de vakpers en is door het bedrijf opgegeven.\n\n**Wat dit betekent voor HÏ Grip**\n\n- In het financieel plan (zie [2026-09-24-financieel-plan-2027-2031-bmc-2031](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-24-financieel-plan-2027-2031-bmc-2031.md)) haalt HÏ Grip in 2031 een omzet van € 2,5 mln, ongeveer 1/28e van Upfront in 2025. Upfront groeide in twee jaar van € 6,3 mln naar € 70 mln, vooral via de eigen community en grote actiedagen. Dat is een bruikbaar referentiepunt voor de groeiaannames, geen doel om op te koersen.\n- Het mechanisme om na te bootsen is de gepiekte actiedag: een aangekondigde, eenmalige deal voor een warme community, met een hoge orderwaarde doordat klanten inslaan. Dat is iets anders dan een altijd-aan-korting.\n\n## Acties\n\n- [ ] P3 · Piekdag-mechaniek van Upfront (aangekondigde eenmalige actie, bundels, hoge AOV) uitwerken als test voor een HÏ Grip-actiedag\n- [ ] P3 · Groeiaannames in het financieel plan naast het groeitempo van Upfront leggen (2023→2025) als sanity check\n\n## Bronnen\n\n- [AGF — Upfront zette voor 70 miljoen euro om in 2025 (20-01-2026)](https://www.agf.nl/article/9802915/upfront-zette-voor-70-miljoen-euro-om-in-2025/)\n- [AGF — Upfront zet ook in op groei in België (14-07-2026)](https://www.agf.nl/article/9856689/upfront-zet-ook-in-op-groei-in-belgie/)\n- [Duo Diligence — Upfront: Organisch groeien, viraal oogsten](https://duodiligence.substack.com/p/upfront-organisch-groeien-viraal)\n- [MT/Sprout — Upfront gaat met eigen fabriek op weg naar 90 miljoen omzet](https://mtsprout.nl/groei/upfront-gaat-met-eigen-fabriek-op-weg-naar-90-miljoen-omzet-ook-uit-pindakaas-en-honing)\n- [RetailTrends — Upfront noteert hogere omzet in 2e weekend (16-12-2025)](https://retailtrends.nl/news/77743/upfront-noteert-hogere-omzet-in-tweede-weekend)\n- [Wikipedia — Upfront](https://nl.wikipedia.org/wiki/Upfront)\n\n## Aantekeningen",
   "bron": "los",
   "bronbestand": "",
   "bronbestand_url": null,
   "categorie": "Merk",
   "datum": "2026-09-24",
   "deadline": "",
   "gerelateerd": [
    "2026-09-24-financieel-plan-2027-2031-bmc-2031"
   ],
   "id": "2026-09-24-upfront-bestelvolume-schatting",
   "kansen": [],
   "kerncijfers": [],
   "kerntitel": "",
   "prioriteit": "P3",
   "routine": "",
   "samenvatting": "Upfront maakt geen bestelaantallen bekend. Met € 46 mln online omzet in 2025 en een aangenomen orderwaarde van € 50-65 komt de webshop uit op ± 700.000-900.000 bestellingen per jaar, oftewel ± 65.000 per maand, ± 15.000 per week en ± 2.200 per dag. Het volume komt in pieken binnen (81.344 orders op één actiedag); voor HÏ Grip is vooral die actie- en communitymechaniek de les, niet het absolute volume.",
   "status": "nieuw",
   "titel": "Upfront bestelvolume-schatting (dag/week/maand/jaar)",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-24-upfront-bestelvolume-schatting.md",
   "vervangt": [],
   "wat_niet_lukte": ""
  },
  {
   "acties": [
    {
     "afgevinkt": true,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "/products/performance-gripsokken FAQ: nog 'profiteert u', 'bij u te'.",
      "controle": "Staan FAQ-blok en retourtekst op de productpagina in de je-vorm?",
      "gecontroleerd": "2026-09-26",
      "methode": "site",
      "uitkomst": "open"
     },
     "id": "2026-09-24-growth-radar-cro#76b6296e",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "FAQ-blok en retourtekst op de productpagina van \"u\" naar \"je\" omzetten",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Herschrijft FAQ en retourtekst naar je-vorm, in het testthema of als tekstbestand.",
      "wat_jij_doet": "Publiceren of de tekst in admin plakken."
     }
    }
   ],
   "body_md": "# Growth Radar — CRO (prijsladder gewijzigd, verzenddrempel, script tags)\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\nDe live productpagina wijkt af van alles wat in de backlog staat. De prijzen zijn verlaagd: een 3-pack is nu per paar nog maar €0,17 goedkoper dan een 1-pack. En dezelfde pagina noemt twee verschillende drempels voor gratis verzending: €35 in de balk en de meta description, €30 in de FAQ. Daardoor is gratis verzending het enige echte argument voor een groter pack. Die tegenstrijdigheid was gisteren al gemeld, maar weegt nu zwaarder. Punten 1 en 12 zijn daarop bijgewerkt. Verder stopt Shopify op 1 maart 2027 met script tags. Trustpilot en een Bundler-script laden nog via die weg.\n\n## Bevindingen\n\n### De prijsladder is veranderd: het 3-pack is nauwelijks voordeliger per paar\n\nEen check van de live productdata (`/products/performance-gripsokken.js`, 24 september 2026) laat andere prijzen zien dan in de backlog en het projectgeheugen staan:\n\n| Pack | Oude prijs (backlog) | Live prijs | Per paar live | Voordeel per paar t.o.v. 1-pack |\n|---|---|---|---|---|\n| 1-pack | €14,99 | €13,49 (van €14,95) | €13,49 | — |\n| 3-pack | €41,99 | €39,95 | €13,32 | €0,17 |\n| 5-pack | €64,99 | €61,95 | €12,39 | €1,10 |\n\nDrie losse 1-packs kosten samen €40,47, dus maar €0,52 meer dan één 3-pack. De prijsladder zelf geeft de koper dus nauwelijks een reden om groter te kopen. Het echte verschil zit in de verzendkosten. Onder de drempel betaal je €4,50, en een 1-pack van €13,49 blijft daar ruim onder. Twee 1-packs ook: €26,98.\n\nDat verandert twee backlogpunten. Een prijs per paar tonen (punt 12) zou nu vooral laten zien hoe klein het verschil is: \"€13,49 → €13,32/paar\" overtuigt niemand. De ankerwerking uit het onderzoek van 17 september werkt alleen als het verschil voelbaar is. Voor het 5-pack is het dat wel (−8%), voor het 3-pack niet. De verzendbalk (punt 1) wordt daarmee het belangrijkste argument voor het 3-pack. Die balk moet dan wel het juiste bedrag tonen, en daar gaat het nu mis.\n\n> **Voor higrip.nl:** In `snippets/product-information-content.liquid` (punt 12) kun je de prijs per paar beter afzetten tegen de doorgestreepte €14,95. Het 3-pack wordt dan \"€13,32/paar, 11% onder de normale prijs\" in plaats van −1%. Of je stelt de pack-prijzen zelf opnieuw vast. Dat is een commerciële keuze, geen code-fix. Voor punt 1 wordt de tekst bij een 1-pack \"Nog €21,51 tot gratis verzending\" (bij een drempel van €35).\n\n**Actie:** Punten 1 en 12 in de backlog zijn bijgewerkt met de nieuwe cijfers. Beslis eerst welke pack-prijzen je wilt aanhouden en bouw daarna.\n\n---\n\n### Twee verzenddrempels op dezelfde pagina: bevestigd en urgenter geworden\n\nDe seo-conversietest van 23 september ([2026-09-23-seo-conversietest-run-1](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-23-seo-conversietest-run-1.md)) vond al dat higrip.nl zichzelf tegenspreekt over de verzenddrempel. Vandaag live bevestigd: de announcementbar en de meta description zeggen **€35**, het FAQ-blok op dezelfde productpagina zegt *\"Bij een bestelwaarde van €30 of meer profiteert u van gratis verzending\"*. De verzendkosten zijn €4,50.\n\nNieuw ten opzichte van gisteren: door de prijswijziging hierboven is gratis verzending het enige echte argument voor het 3-pack. Een drempel die niet klopt, raakt daarmee het belangrijkste argument om groter te kopen. Daarnaast spreken het FAQ-blok en de retourtekst de klant met \"u\" aan (\"profiteert u\", \"uw retourproces\"). De rest van de site gebruikt \"je\".\n\n> **Voor higrip.nl:** De P1-actie uit de notitie van 23 september (verzend- en retourinfo overal gelijktrekken) moet af zijn vóór backlogpunt 1 (de verzendbalk). Neem de omzetting van \"u\" naar \"je\" in het FAQ-blok en de retourtekst in dezelfde ronde mee. Laat de balk het bedrag uit één theme-setting halen, zodat hij niet opnieuw uit de pas kan lopen.\n\n**Actie:** Geen nieuw backlogpunt, want de actie staat al in de notitie van 23 september. Wel meegenomen in punt 1.\n\n---\n\n### Script tags stoppen op 1 maart 2027: Trustpilot en Bundler laden nog zo\n\nShopify kondigde op 24 augustus 2026 in de developer-changelog aan dat script tags (de oude manier waarop apps JavaScript in je webshop injecteren) op **1 maart 2027** stoppen met werken in de Online Store. Apps moeten overstappen op theme app extensions (app embeds). Scripts die dan nog via script tags lopen, vallen zonder foutmelding weg. Het is hetzelfde patroon als bij de Checkout Extensibility-deadline van 26 augustus (zie punt 11).\n\nOp de live productpagina laden via script tags (`asyncLoad`) nu vier scripts:\n- `cdn-bundler.nice-team.net/app/js/bundler.js` (Bundler-app)\n- drie Trustpilot-scripts (`header.min.js`, `success.min.js`, trustbox-instellingen)\n\n> **Voor higrip.nl:** Het projectgeheugen zegt dat de Bundler-app is verwijderd na de WK-actie. Live laden echter nog steeds het Bundler-script plus negen `bundler`-verwijzingen in de HTML (target-elementen, een app-block, statusscript). Óf de app is nog geïnstalleerd, óf er zijn restanten achtergebleven. Dat is ook JavaScript dat punt 14 (INP) zwaarder maakt. Trustpilot is je review-proof: als die widget straks stilletjes verdwijnt, raakt dat punt 2 (reviews) en de trust op de productpagina.\n\n**Actie:** Nieuw backlogpunt 16 (P2): Bundler-app verwijderen of de restanten opruimen, en bij Trustpilot controleren of er een app-embed-versie is die de script tags vervangt.\n\n---\n\n### Ook gecontroleerd, geen actie\n- **iDEAL → Wero:** De betaaliconen op higrip.nl tonen al het co-branded \"iDEAL | Wero\"-logo. Shopify Payments regelt dat automatisch. De volledige overstap op Wero loopt tot eind 2027 en vraagt nu niets van je.\n- **Meta title en description (punt 3):** Staan inmiddels live, met iets andere tekst dan in de backlog (\"Maximale Grip voor Elke Sport\", \"3000+ sporters\", \"vanaf €35\"). Punt 3 is afgevinkt.\n- **Retourbeleid op de productpagina:** Staat erop (\"30 dagen retour via deze link\"). Baymard meet dat 60% van de kopers dit op de productpagina zoekt, dus hier is geen actie nodig.\n\n## Acties\nBacklogpunten 1, 12 (herzien) en 16 (nieuw) staan in `ACTIEBACKLOG.md`. De verzenddrempel-actie staat in [2026-09-23-seo-conversietest-run-1](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-23-seo-conversietest-run-1.md).\n- [x] P2 · FAQ-blok en retourtekst op de productpagina van \"u\" naar \"je\" omzetten\n\n## Bronnen\n- [Shopify Developer Changelog — Online Store Script Tags deprecation (24 aug 2026)](https://shopify.dev/changelog)\n- [Wero uitgelegd — Thuiswinkel.org (bijgewerkt 24 aug 2026)](https://www.thuiswinkel.org/kennisbank/kennisartikelen/wero-uitgelegd-al-je-vragen-over-het-nieuwe-europese-betaalsysteem/)\n- [iDEAL to Wero: Your Complete Guide for 2026–2027 — CM.com](https://www.cm.com/blog/ideal-to-wero-what-merchants-need-to-know-about-the-transition/)\n- [Shopify Help Center — iDEAL | Wero](https://help.shopify.com/en/manual/payments/shopify-payments/local-payment-methods/ideal)\n- [Product Details Page UX Research — Baymard](https://baymard.com/research/product-page)\n- Eigen meting: live `https://www.higrip.nl/products/performance-gripsokken` (HTML + `.js`-productdata), 24 september 2026\n\n## Aantekeningen",
   "bron": "routine",
   "bronbestand": "C:\\Users\\Test\\.claude\\research\\growth-radar\\rapporten\\2026-09-24-cro.md",
   "bronbestand_url": null,
   "categorie": "CRO",
   "datum": "2026-09-24",
   "deadline": "2027-03-01",
   "gerelateerd": [
    "2026-09-17-growth-radar-cro",
    "2026-09-23-seo-conversietest-run-1",
    "2026-09-21-growth-radar-seo-technisch",
    "2026-09-25-seo-audit",
    "2026-10-01-growth-radar-cro"
   ],
   "id": "2026-09-24-growth-radar-cro",
   "kansen": [],
   "kerncijfers": [],
   "kerntitel": "",
   "prioriteit": "P1",
   "routine": "growth-radar",
   "samenvatting": "De live prijzen zijn verlaagd (€13,49 / €39,95 / €61,95), waardoor het 3-pack per paar maar €0,17 goedkoper is dan een 1-pack: gratis verzending is nu het enige echte pack-argument, en juist die drempel spreekt zichzelf tegen (€35 vs €30). Daarnaast stoppen Shopify-script tags op 1 maart 2027, terwijl Trustpilot en Bundler-restanten er nog via laden.",
   "status": "nieuw",
   "titel": "Growth Radar — CRO (prijsladder gewijzigd, verzenddrempel, script tags)",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-24-growth-radar-cro.md",
   "vervangt": [],
   "wat_niet_lukte": ""
  },
  {
   "acties": [
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Zelfde eindtoestand (verzendkosten, drempel, verzendtijd en retour overal gelijk) als 2026-09-21-weekoverzicht#611d66c8.",
      "controle": "Zelfde taak als het gelijktrekken uit het weekoverzicht van 21-09?",
      "dubbel_van": "2026-09-21-weekoverzicht#611d66c8",
      "gecontroleerd": "2026-09-25",
      "methode": "vault",
      "uitkomst": "dubbel"
     },
     "id": "2026-09-23-seo-conversietest-run-1#db685bc3",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "Verzendkosten, gratis-verzenddrempel, verzendtijd en retourtermijn overal gelijktrekken (productpagina, FAQ, meta's, voorwaarden, beleid)",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Maakt een lijst van alle plekken met afwijkende verzend- en retourtekst plus de nieuwe tekst, en past het testthema aan.",
      "wat_jij_doet": "Beleid en productteksten in admin plakken en het thema publiceren."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "/products/hi-grip-gripsokken-34-39 -> 301 naar /products/gripsokken, dat zelf 404 geeft; hi-grip-gripsokken-1 nog via een 301-keten (2 hops); pilates-blog-URL nog 404.",
      "controle": "Zijn 404-doelen, ketens en oude URL's hersteld?",
      "gecontroleerd": "2026-09-26",
      "methode": "site",
      "uitkomst": "open"
     },
     "id": "2026-09-23-seo-conversietest-run-1#b469a68a",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "Redirects herstellen: 404-doelen, ketens, oude pilates-blog-URL en oude sport-URL's naar de sportpagina's (lijst in het Shopify-logboek)",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Maakt een redirect-CSV uit de lijst in het Shopify-logboek.",
      "wat_jij_doet": "CSV importeren in admin > Omleidingen."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "GraphQL pages: handle maatgids-gripsokken isPublished=false.",
      "controle": "Is de maatgids gepubliceerd en gelinkt?",
      "gecontroleerd": "2026-09-26",
      "methode": "shopify",
      "uitkomst": "open"
     },
     "id": "2026-09-23-seo-conversietest-run-1#6251497e",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Maatgids nalopen, [CHECK]'s oplossen, publiceren en linken vanaf de maatkeuze op de productpagina",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Lost de [CHECK]'s op waar de vault de maten heeft en zet de link bij de maatkeuze in het testthema.",
      "wat_jij_doet": "Openstaande maten bevestigen en de maatgids publiceren."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "GraphQL products/collections: seo.title en seo.description nog null voor Performance Gripsokken 2.0 Zwart/Wit en collectie gripsokken.",
      "controle": "Zijn de SEO-titels en -omschrijvingen uit het voorstel overgenomen?",
      "gecontroleerd": "2026-09-26",
      "methode": "shopify",
      "uitkomst": "open"
     },
     "id": "2026-09-23-seo-conversietest-run-1#52494c22",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "SEO-titels en meta-omschrijvingen voor Performance Gripsokken 2.0 Zwart/Wit en collectie Gripsokken overnemen uit het voorstel in het logboek",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Zet de voorgestelde titels en meta's klaar in een bestand.",
      "wat_jij_doet": "Plakken in de Shopify admin."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "GraphQL products: alle 3 producten productType leeg (\"\"), alle variant-sku's null, geen barcode.",
      "controle": "Zijn producttype, SKU's en GTIN/EAN ingevuld?",
      "gecontroleerd": "2026-09-26",
      "methode": "shopify",
      "uitkomst": "open"
     },
     "id": "2026-09-23-seo-conversietest-run-1#aef03a4a",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Productdata aanvullen: producttype, SKU's en GTIN/EAN",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Maakt uit de productwaarheid een tabel met producttype, SKU en EAN per variant.",
      "wat_jij_doet": "In admin invullen of via bulk-import."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "/products/performance-gripsokken: 29 van 49 afbeeldingen met identieke alt 'HÏ Grip Gripsokken HÏ Grip'.",
      "controle": "Hebben de productfoto's beschrijvende alt-teksten?",
      "gecontroleerd": "2026-09-26",
      "methode": "site",
      "uitkomst": "open"
     },
     "id": "2026-09-23-seo-conversietest-run-1#b441fff5",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "Alt-teksten productfoto's per foto beschrijvend maken",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Schrijft een beschrijvende alt-tekst per productfoto.",
      "wat_jij_doet": "Alt-teksten in admin plakken."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "/pages/zakelijk: nog 'VETROUWD DOOR' en 14x ' uw '; /pages/veelgestelde-vragen nog 4x ' u ' en 7x ' uw '.",
      "controle": "Zakelijk, FAQ en blogs in de je-vorm en typfout hersteld?",
      "gecontroleerd": "2026-09-26",
      "methode": "site",
      "uitkomst": "open"
     },
     "id": "2026-09-23-seo-conversietest-run-1#1b318f84",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "u-vorm vervangen door je-vorm op zakelijk, FAQ en blogs; typfout \"VETROUWD DOOR\" herstellen",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Herschrijft zakelijk-, FAQ- en blogteksten naar je-vorm en fixt de typfout in het testthema.",
      "wat_jij_doet": "Blog- en paginateksten in admin plakken en het thema publiceren."
     }
    }
   ],
   "body_md": "# SEO- en conversietest run 1 — nulmeting en tegenstrijdige verzend/retourinfo\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\nEerste run van de geplande taak `website-seo-en-cconversietest` (wekelijks, modus CONCEPT: niets live gewijzigd). Het volledige rapport, de backlog en de wijzigingslog staan in de verborgen Shopify-pagina `seo-routine-logboek`: die pagina is het geheugen van de routine tussen runs. Deze notitie bevat de kern.\n\n## Bevindingen\n\n**23 september 2026 · woensdag**\n\n### Nulmeting (16–23 sep tegenover 9–15 sep)\n\n| KPI | Deze week | Vorige week |\n|---|---|---|\n| Sessies | 346 | 296 |\n| Via zoekmachines | 16 | 43 |\n| Add-to-cart | 6 (1,7%) | 13 (4,4%) |\n| Checkout bereikt | 4 | 12 |\n| Bestellingen / omzet | 3 / €72,74 | 0 / €0 |\n\n328 van de 346 sessies zijn \"direct\", 285 landen op `/` en 33 op `/password`: waarschijnlijk veel eigen testverkeer of bots. Te weinig data voor conclusies. Zelfde week 2025: 0 sessies (winkel nog niet op Shopify).\n\n### De site spreekt zichzelf tegen (belangrijkste vondst)\n\n| Onderwerp | Waarden gevonden op higrip.nl |\n|---|---|\n| Verzendkosten | €4,25 (algemene voorwaarden) · €4,50 (FAQ-blok productpagina) |\n| Gratis verzending vanaf | €35 (voorwaarden, meta-omschrijving) · €30 (FAQ-blok productpagina) |\n| Verzendtijd | vóór 16:00 dezelfde dag (verzendbeleid) · vóór 22:00 vandaag verzonden (homepage-meta) · binnen 1 werkdag (productpagina) |\n| Retour | 14 dagen, ongeopend, 25% herbevoorradingskosten (retourbeleid) · 30 dagen retour (productpagina) |\n| Maten 2.0 | 43–47 (variant) · 43–46 (FAQ) |\n\nDe voorwaarden \"alleen ongeopend\" en \"25% herbevoorradingskosten\" lijken te botsen met het herroepingsrecht bij kopen op afstand. Zie ook het retourpunt in [2026-09-07-compliance-todo](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-07-compliance-todo.md). Ook de meta-omschrijving van het hoofdproduct is inmiddels gewijzigd (\"3000+ sporters\", \"€35\"); de tekst in de growth-radar-backlog (1500+, €30) klopt dus niet meer.\n\n### Techniek\n- Redirects: `/products/hi-grip-gripsokken-34-39` en `-40-46` wijzen naar `/products/gripsokken`, en die geeft 404. `hi-grip-gripsokken-1` en `performance-grip-socks-2-0-wit-1` lopen via een keten van 2 stappen. Oude sport-URL's (padelsokken, tennissokken, zaalvoetbalsokken) wijzen naar de homepage in plaats van naar de sportpagina's.\n- De oude URL `/blogs/2630309_gripsokken-tijdens-pilates-yoga-optimale-grip-en-comfort-met-hi-grip` staat nog in Google en geeft 404. Nieuwe URL: `/blogs/trends/gripsokken-tijdens-pilates-en-yoga-…`. Dit sluit aan op de \"verouderde numerieke URL's\" uit [2026-09-16-seo-onderzoek-cloud-routine-website](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-16-seo-onderzoek-cloud-routine-website.md).\n- Het Product/Offer-schema mist `shippingDetails`, `hasMerchantReturnPolicy`, SKU en GTIN. Pas invullen als de verzend- en retourinfo gelijk is.\n- Goed: canonicals, hreflang nl/en/x-default en een complete sitemap. `llms.txt`, `agents.md` en de agentic sitemap staan live, maar bevatten alleen standaardtekst van Shopify. AI-agents leunen dus volledig op de productdata.\n- PageSpeed Insights kon niet draaien (dagquotum zonder API-sleutel). De HTML is 324–443 KB per pagina met 2–3× `fetchpriority=\"high\"`. Het WK-promoscript wordt niet meer geladen, wat een deel van het INP-backlogpunt beantwoordt ([2026-09-21-growth-radar-seo-technisch](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-21-growth-radar-seo-technisch.md)).\n\n### Producten en content\n- De 2.0-producten hebben geen SEO-titel of meta, dus Shopify gebruikt automatisch 320 tekens uit de beschrijving. Alt-teksten zijn generiek en dubbel (\"HÏ Grip Gripsokken HÏ Grip\" 7×). Producttype, tags, SKU en barcode zijn leeg. In de 2.0-beschrijving staat een `<code>`-tag rond een zin.\n- De collectietekst noemt alleen \"witte\" sokken en de maten 34–39/40–46, terwijl de collectie drie producten bevat.\n- 24 blogartikelen zonder samenvatting (excerpt); veel \"u/uw\" op zakelijk, FAQ, blogs en in de beleidsteksten. Typfout \"VETROUWD DOOR\" op /pages/zakelijk.\n\n### Gemaakt (verborgen)\n- Pagina **Maatgids gripsokken** (`maatgids-gripsokken`, ID 168287863111): antwoord-eerst-opbouw (40–60 woorden onder elke vraag-H2, zie [2026-09-22-growth-radar-seo-content](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-22-growth-radar-seo-content.md)), maattabel voor beide modellen, vergelijkingstabel, interne links. Bevat twee [CHECK]-punten (43–46/47 en retourtermijn).\n\n## Acties\n\n- [ ] P1 · Verzendkosten, gratis-verzenddrempel, verzendtijd en retourtermijn overal gelijktrekken (productpagina, FAQ, meta's, voorwaarden, beleid)\n- [ ] P1 · Redirects herstellen: 404-doelen, ketens, oude pilates-blog-URL en oude sport-URL's naar de sportpagina's (lijst in het Shopify-logboek)\n- [ ] P2 · Maatgids nalopen, [CHECK]'s oplossen, publiceren en linken vanaf de maatkeuze op de productpagina\n- [ ] P2 · SEO-titels en meta-omschrijvingen voor Performance Gripsokken 2.0 Zwart/Wit en collectie Gripsokken overnemen uit het voorstel in het logboek\n- [ ] P2 · Productdata aanvullen: producttype, SKU's en GTIN/EAN\n- [ ] P3 · Alt-teksten productfoto's per foto beschrijvend maken\n- [ ] P3 · u-vorm vervangen door je-vorm op zakelijk, FAQ en blogs; typfout \"VETROUWD DOOR\" herstellen\n\n## Bronnen\n\n- Shopify Admin API en ShopifyQL-analytics (HÏ Grip, 23-09-2026)\n- Live site higrip.nl: curl-checks van redirects, titels, canonicals, hreflang en JSON-LD (23-09-2026)\n- [Could Google's next core update arrive in September 2026? — Search Engine Watch](https://searchenginewatch.com/could-googles-next-core-update-arrive-in-september-2026/)\n- [Google Search I/O 2026 updates — Google](https://blog.google/products-and-platforms/products/search/search-io-2026/)\n- [Shopify native llms.txt, agents.md en agentic sitemap — Craftshift](https://craftshift.com/shopify-native-llms-txt-agentic-discovery-rollout/)\n- [Van iDEAL naar Wero — Frankwatching](https://www.frankwatching.com/archive/2026/08/15/van-ideal-naar-wero/)\n\n## Aantekeningen\n- **Lars · 2026-09-25 09:26** — Besluit verzend/retour: verzendkosten €4,50, gratis verzending vanaf €35, binnen 1 werkdag verzonden, retour 30 dagen. Vastgelegd in [Performance Grip Socks 2.0](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Product/Performance%20Grip%20Socks%202.0.md) §1.",
   "bron": "routine",
   "bronbestand": "https://admin.shopify.com/store/raqds3-tb/pages/168287895879",
   "bronbestand_url": "https://admin.shopify.com/store/raqds3-tb/pages/168287895879",
   "categorie": "SEO",
   "datum": "2026-09-23",
   "deadline": "",
   "gerelateerd": [
    "2026-09-15-seo-audit",
    "2026-09-21-regressiecheck",
    "2026-09-21-growth-radar-seo-technisch",
    "2026-09-22-growth-radar-seo-content",
    "2026-09-16-seo-onderzoek-cloud-routine-website",
    "2026-09-07-compliance-todo",
    "2026-09-23-growth-radar-ai-search",
    "2026-09-24-growth-radar-cro",
    "2026-09-25-evaluatie-routines",
    "2026-09-21-weekoverzicht",
    "2026-09-25-seo-audit",
    "2026-09-28-seo-conversietest-run-2",
    "2026-10-01-growth-radar-cro",
    "2026-10-02-vault-review",
    "2026-10-05-seo-conversietest-run-3"
   ],
   "id": "2026-09-23-seo-conversietest-run-1",
   "kansen": [],
   "kerncijfers": [],
   "kerntitel": "",
   "prioriteit": "P1",
   "routine": "seo-conversietest",
   "samenvatting": "Eerste run van de wekelijkse SEO- en conversietest (modus CONCEPT): nulmeting van 346 sessies, 16 via zoekmachines en 3 bestellingen (€72,74), plus een volledige audit. De grootste vondst is inhoudelijk: higrip.nl spreekt zichzelf tegen over verzendkosten, de drempel voor gratis verzending, de verzendtijd en de retourtermijn. Dat schaadt het vertrouwen van klanten en AI-zoekmachines. Er staan een verborgen maatgids en een voorstellenpakket (SEO-titels, redirects) klaar.",
   "status": "nieuw",
   "titel": "SEO- en conversietest run 1 — nulmeting en tegenstrijdige verzend/retourinfo",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-23-seo-conversietest-run-1.md",
   "vervangt": [],
   "wat_niet_lukte": ""
  },
  {
   "acties": [
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Afhankelijk van een externe lancering en een besluit van het team.",
      "controle": "ChatGPT Ads opnieuw bekijken zodra NL-accounts kunnen.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-23-growth-radar-ai-search#76a1abe1",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "ChatGPT Ads opnieuw bekijken zodra je vanuit Nederland een advertentieaccount kunt aanmaken",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "nee",
      "wat_claude_doet": "Houdt in de Growth Radar bij of ChatGPT Ads in Nederland beschikbaar worden.",
      "wat_jij_doet": "Advertentieaccount aanmaken zodra dat kan."
     }
    }
   ],
   "body_md": "# Growth Radar — AI-search (ChatGPT Shopping draait op feeds, VS-verzending is de sleutel)\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\nVervolg op [2026-09-16-growth-radar-ai-search](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-16-growth-radar-ai-search.md): toen was Perplexity het enige AI-kanaal dat aan VS-verzending hing, nu geldt dat ook voor ChatGPT en Copilot. De feed neemt dezelfde verzendinfo over die in [2026-09-23-seo-conversietest-run-1](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-23-seo-conversietest-run-1.md) tegenstrijdig bleek.\n\n## Bevindingen\n\n### ChatGPT Shopping draait nu op feeds, en dat gaf in één dag een grote verschuiving\nProfound volgde in juli 2026 1,76 miljoen ChatGPT Shopping-prompts. Op 10 juli, één dag na de release van GPT-5.6, steeg het aandeel producten uit geïntegreerde feeds van 8,26% naar 61,54%. Begin september kwam ongeveer 65% van de aanbevelingen uit feeds.\n\n| Meting (7–9 juli vs 10–12 juli) | Waarde |\n|---|---|\n| Merchants met ≥ ⅓ minder zichtbaarheid | 450 van 687 |\n| Merchants met ≥ ⅓ meer zichtbaarheid | 67 van 687 |\n| Unieke merchants genoemd | 13.524 → 10.607 (−22%) |\n| Aandeel top 10-winkels | 22,5% → 41,8% |\n| Deel feed-retrieval via Shopify | ~35% |\n\nShopify-winkels hoeven hiervoor niets te doen: via Shopify Catalog en *Agentic Storefronts* (sinds maart 2026 standaard aan, opt-out) gaan hun producten automatisch naar ChatGPT, Copilot, Google AI Mode en Gemini. Er zijn wel twee voorwaarden. ChatGPT en Copilot nemen alleen winkels op die **aan Amerikaanse kopers verkopen**, ongeacht waar de winkel zelf zit. Google AI Mode/Gemini is voorlopig beperkt tot een selectie Amerikaanse winkels. En OpenAI zegt zelf dat Shopping \"live for ChatGPT users in the U.S.\" is, met uitbreiding naar andere regio's \"later\".\n\nDe zichtbaarheid concentreert zich snel bij de winkels met de beste feeds. Het advies uit de markt is daarom om in de feed te investeren: duidelijke producttitels, gestructureerde attributen (maat, materiaal, sport) en beschrijvingen die de twijfels van kopers beantwoorden, zoals \"past dit in mijn schoen\" of \"welke maat\".\n\n> **Voor higrip.nl:** Dit vult backlogpunt 8 (Perplexity, alleen bij VS-verzending) aan. De vraag \"verzenden we naar de VS?\" gaat nu over drie AI-kanalen tegelijk: Perplexity, ChatGPT en Copilot. Nederlandse gebruikers krijgen ChatGPT Shopping nog niet te zien, dus een VS-verzendbeslissing puur hiervoor zou te vroeg zijn. Wat je nu al kunt doen: in Shopify admin → **Verkoopkanalen → Agentic** kijken of het kanaal aanstaat en welke kanalen actief zijn. Als OpenAI Shopping naar Europa uitbreidt, sta je dan al klaar. Ook belangrijk: de feed gebruikt dezelfde producttitel, varianten en verzendinfo als je site. De tegenstrijdige verzend- en retourinformatie uit de SEO-conversietest van vandaag komt dus ook in AI-feeds terecht.\n\n**Actie:** Backlogpunt 8 uitgebreid: de VS-check en de Agentic-kanaalcheck zijn samengevoegd tot één beslismoment. Geen nieuw punt.\n\n---\n\n### ChatGPT Ads zijn live in Nederland, maar nog niet voor jou\nSinds 24 augustus 2026 verschijnen ChatGPT-advertenties in 31 Europese landen, waaronder Nederland. Op 31 augustus ging de self-serve Ads Manager open. Een advertentie verschijnt als gelabelde \"sponsored\"-suggestie onder een antwoord, alleen voor gebruikers met een Free- of Go-abonnement (niet voor Plus/Pro/Business en niet voor gebruikers onder de 18). Sinds 4 september zijn productfeeds verplicht voor shopping-advertenties.\n\nEr zijn twee drempels. Een advertentieaccount aanmaken en betalen kan nu alleen vanuit negen landen (VS, VK, Canada, Australië, Brazilië, Japan, Zuid-Korea, Mexico, Nieuw-Zeeland), dus nog niet vanuit Nederland. En OpenAI adviseert een startbod van $3–5 per klik.\n\n> **Voor higrip.nl:** Met een 1-pack van €14,99 en een conversie rond het Shopify-gemiddelde (1,4%) kost één verkoop bij $3–5 per klik ruim €200 aan klikken. Dat is economisch zinloos tot er Nederlandse accounts en data over lagere klikprijzen zijn. Dit sluit ook aan bij backlogpunt 10 (CAPI pas bij een advertentiebudget-beslissing): eerst meten, dan pas een nieuw betaald kanaal.\n\n**Actie:** Alleen volgen, nog niet handelen. Opnieuw bekijken als accountregistratie vanuit Nederland mogelijk wordt.\n\n---\n\n## Acties\n- [ ] P3 · ChatGPT Ads opnieuw bekijken zodra je vanuit Nederland een advertentieaccount kunt aanmaken\n\n## Bronnen\n\n- [ChatGPT Shopping Results Lean Hard On Product Feeds — Search Engine Journal](https://www.searchenginejournal.com/chatgpt-shopping-results-lean-hard-on-product-feeds/589000/)\n- [ChatGPT 5.6 has transformed Shopping mode — Profound](https://www.tryprofound.com/blog/chatgpt-5.6-shopping-transformation)\n- [Shopify agentic storefronts — Shopify Help Center](https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts)\n- [Agentic Commerce on Shopify: How It Works (2026) — Shopify](https://www.shopify.com/blog/how-agentic-commerce-works)\n- [ChatGPT Ads expands across Europe — OpenAI](https://openai.com/index/chatgpt-ads-expands-across-europe/)\n- [OpenAI Ads Is Heading to Europe — Mergado](https://www.mergado.com/blog/openai-ads-is-heading-to-europe)\n\n## Aantekeningen",
   "bron": "routine",
   "bronbestand": "C:\\Users\\Test\\.claude\\research\\growth-radar\\rapporten\\2026-09-23-ai-search.md",
   "bronbestand_url": null,
   "categorie": "SEO",
   "datum": "2026-09-23",
   "deadline": "",
   "gerelateerd": [
    "2026-09-16-growth-radar-ai-search",
    "2026-09-22-growth-radar-seo-content",
    "2026-09-23-seo-conversietest-run-1",
    "2026-09-25-growth-radar-social",
    "2026-09-25-seo-audit",
    "2026-09-30-growth-radar-ai-search"
   ],
   "id": "2026-09-23-growth-radar-ai-search",
   "kansen": [],
   "kerncijfers": [],
   "kerntitel": "",
   "prioriteit": "P2",
   "routine": "growth-radar",
   "samenvatting": "ChatGPT Shopping haalt sinds 10 juli 2026 ~65% van de aanbevelingen uit productfeeds. Shopify levert die automatisch via Agentic Storefronts, maar alleen voor winkels die aan VS-kopers verkopen, en Shopping is alleen in de VS live. ChatGPT Ads draaien sinds 24 augustus ook in Nederland, maar accounts kun je nog niet vanuit NL aanmaken en de klikprijs ($3–5) past niet bij een product van €14,99.",
   "status": "nieuw",
   "titel": "Growth Radar — AI-search (ChatGPT Shopping draait op feeds, VS-verzending is de sleutel)",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-23-growth-radar-ai-search.md",
   "vervangt": [],
   "wat_niet_lukte": ""
  },
  {
   "acties": [],
   "body_md": "# Growth Radar — SEO content & keywords (FAQ-schema terug van weggeweest)\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\nTwee bevindingen: één die een eerdere beslissing terugdraait ([2026-09-15-growth-radar-seo-content](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-15-growth-radar-seo-content.md)), en één nieuw, gratis meetpunt in Search Console.\n\n## Bevindingen\n\n**22 september 2026 · dinsdag**\n\n### FAQ-schema is terug van weggeweest — maar dan voor AI, niet voor Google\n\nDe aanname in de backlog was gebaseerd op de officiële AI Overviews-gids van 15 mei 2026, die zei dat structured data \"niet vereist\" is voor AI-citaties. Dat klopt nog steeds letterlijk, maar recenter onderzoek (maart 2026, Universiteit van Tokio/Tsukuba, gepubliceerd via Machine Relations Research) laat zien dat het wél degelijk helpt: content met een schone kop-en-antwoordstructuur wordt ongeveer 2,8× vaker geciteerd door AI-antwoordmachines dan ongestructureerde tekst, en het specifieke \"antwoordcapsule\"-patroon geeft een gemeten +17,3% aan citatiekans over zes generatieve engines — los van de kwaliteit van de content zelf.\n\nHet patroon is specifiek: een zelfstandige alinea van 40-60 woorden direct onder elke H2, die de vraag volledig beantwoordt zonder links of opmaak. Verwijzingen (bronvermeldingen, links) horen in de alinea daarna, niet in de antwoordcapsule zelf — 9 van de 10 geciteerde capsules bevatten nul hyperlinks.\n\nConcurrent FitSockr heeft bovendien al een blogpost live op exact de long-tail uit de backlog (\"Wat zijn gripsokken en waarom zijn ze belangrijk voor voetballers?\") — ongestructureerde marketingtekst zonder antwoordcapsule. Dat is de opening om met een beter gestructureerd antwoord voorbij te gaan, mét de eigen cijfers (1,17 wrijvingscoëfficiënt, 95% meer grip) die FitSockr niet heeft.\n\n> **Voor higrip.nl:** Backlogpunt 6 (\"Schrijf de vraagpagina's antwoord-eerst\") is aangepast: de drie vraagpagina's krijgen alsnog `FAQPage`-schema, en het antwoord-eerst-principe is concreter gemaakt — 40-60 woorden direct onder elke vraag-H2, zonder link erin, gevolgd door de onderbouwende tekst. Zie [2026-09-15-growth-radar-seo-content](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-15-growth-radar-seo-content.md) voor de eerdere (nu deels achterhaalde) beslissing.\n\n**Actie:** Zie ACTIEBACKLOG.md, punt 6 (bijgewerkt).\n\n---\n\n### Search Console toont nu AI-impressies per pagina\n\nGoogle rolde het generatieve-AI-prestatierapport in Search Console op 3 juni 2026 gefaseerd uit en heeft dit op 31 augustus 2026 wereldwijd beschikbaar gemaakt. Het toont impressies uit AI Overviews, AI Mode en generatieve Discover per pagina, land en datum — nog geen kliks, CTR of zoekterm.\n\n> **Voor higrip.nl:** Search Console staat al ingericht. Eenmalig bekijken welke pagina's nu al AI-impressies krijgen, om te bepalen of de geplande vraagpagina's vanaf nul beginnen of al ergens zichtbaar zijn.\n\n**Actie:** Zie ACTIEBACKLOG.md, punt 15 (nieuw).\n\n## Bronnen\n\n- [FAQ Schema Is Dead: What Actually Earns AI Citations in 2026](https://aifromthefield.substack.com/p/faq-schema-dead-ai-citations)\n- [How Content Structure Affects AI Citation Rates: The GEO-SFE Research Framework (2026)](https://machinerelations.ai/research/content-structure-ai-citation-rates-2026)\n- [The Answer Capsule Playbook: 40–60 Word Patterns That Turn Every H2 Into an AI Citation](https://www.averi.ai/blog/answer-capsules-40-60-word-patterns-that-turn-h2s-into-citations)\n- [Google Search Console AI Reports Rolled Out Worldwide](https://www.searchenginejournal.com/google-search-console-ai-reports-rolled-out-worldwide/587836/)\n- [Introducing Search Generative AI performance reports in Search Console — Google Search Central Blog](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports)\n- [FitSockr — Wat zijn gripsokken en waarom zijn ze belangrijk voor voetballers?](https://fitsockr.nl/blogs/blog/wat-zijn-gripsokken-en-waarom-zijn-ze-belangrijk-voor-voetballers)\n\n## Acties\n\n_Acties uit dit rapport staan in de growth-radar-backlog (`ACTIEBACKLOG.md`) en komen via het dashboard binnen — hier niet gedupliceerd._\n\n## Aantekeningen",
   "bron": "routine",
   "bronbestand": "C:\\Users\\Test\\.claude\\research\\growth-radar\\rapporten\\2026-09-22-seo-content.md",
   "bronbestand_url": null,
   "categorie": "SEO",
   "datum": "2026-09-22",
   "deadline": "",
   "gerelateerd": [
    "2026-09-15-growth-radar-seo-content",
    "2026-09-15-seo-audit",
    "2026-09-16-growth-radar-ai-search",
    "2026-09-16-seo-onderzoek-cloud-routine-website",
    "2026-09-23-seo-conversietest-run-1",
    "2026-09-23-growth-radar-ai-search",
    "2026-09-25-seo-audit",
    "2026-09-29-growth-radar-seo-content",
    "2026-10-06-growth-radar-seo-content"
   ],
   "id": "2026-09-22-growth-radar-seo-content",
   "kansen": [],
   "kerncijfers": [],
   "kerntitel": "",
   "prioriteit": "P2",
   "routine": "growth-radar",
   "samenvatting": "Onderzoek van maart 2026 (Univ. Tokio/Tsukuba) laat zien dat een schone kop-en-antwoordstructuur ~2,8× vaker geciteerd wordt door AI-antwoordmachines en dat het antwoordcapsule-patroon (40-60 woorden) +17,3% citatiekans geeft — dat draait de eerdere beslissing om FAQPage-schema te schrappen gedeeltelijk terug. Daarnaast is het generatieve-AI-impressierapport in Search Console sinds 31 augustus wereldwijd beschikbaar.",
   "status": "nieuw",
   "titel": "Growth Radar — SEO content & keywords (FAQ-schema terug van weggeweest)",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-22-growth-radar-seo-content.md",
   "vervangt": [
    "2026-09-15-growth-radar-seo-content"
   ],
   "wat_niet_lukte": ""
  },
  {
   "acties": [
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": true,
     "controle": {
      "bewijs": "Zelfde thema-bestanden en eindtoestand (schema-herstelpakket volledig live) als backlog#fac26f6c.",
      "controle": "Zelfde taak als backlogpunt SEO-schema?",
      "dubbel_van": "backlog#fac26f6c",
      "gecontroleerd": "2026-09-25",
      "methode": "vault",
      "uitkomst": "dubbel"
     },
     "id": "2026-09-21-weekoverzicht#d28bdc93",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "Structured data-herstelpakket van 17-09 uit het werkthema naar live kopiëren (thema-ID eerst verifiëren met shopify theme list)",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Controleert het thema-ID en de verschillen tussen werkthema en live, en zet een diff klaar.",
      "wat_jij_doet": "Het herstelpakket naar live publiceren."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": true,
     "controle": {
      "bewijs": "Homepage-meta nog 'vóór 22:00 vandaag verzonden'; /pages/veelgestelde-vragen retour 14 dagen; /policies/refund-policy 14 dagen + 25%; /policies/shipping-policy vóór 16:00; /policies/terms-of-service €4,25 en 'uitsluitend Nederland'.",
      "controle": "Staan verzend- en retourwaarden overal volgens besluit 25-09?",
      "gecontroleerd": "2026-09-26",
      "methode": "site",
      "uitkomst": "open"
     },
     "id": "2026-09-21-weekoverzicht#611d66c8",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "Live FAQ-tekst en beleid gelijktrekken met de vastgestelde waarden (besluit Lars 25-09): binnen 1 werkdag verzonden, €4,50 verzendkosten, gratis vanaf €35, 30 dagen retour",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Schrijft de FAQ- en beleidsteksten met de vastgestelde waarden.",
      "wat_jij_doet": "Plakken in admin > Beleid en FAQ."
     }
    },
    {
     "afgevinkt": true,
     "beheer": null,
     "besluit": true,
     "controle": {
      "bewijs": "https://www.higrip.nl/: <title> = 'HÏ Grip | Performance Gripsokken voor Sporters', meta description = voorstel ('Gripsokken voor maximale grip en stabiliteit tijdens tennis, padel, rugby en voetbal…').",
      "controle": "Staan de voorgestelde homepage-title en meta description live?",
      "gecontroleerd": "2026-09-25",
      "methode": "site",
      "sinds": "2026-09-25",
      "uitkomst": "gedaan"
     },
     "id": "2026-09-21-weekoverzicht#fded3395",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Homepage-title en meta description doorvoeren (kant-en-klare HTML in dit overzicht)",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": true,
     "controle": {
      "bewijs": "GA4 28 dagen: nog 72 sessies VS/Direct met 2,8% engagement, niet gefilterd; funnel begin_checkout 24 -> purchase 3; testbestelling op mobiel niet waar te nemen zonder browser.",
      "controle": "Is botverkeer gefilterd en de checkout-drop onderzocht?",
      "gecontroleerd": "2026-09-26",
      "methode": "ga4",
      "uitkomst": "open"
     },
     "id": "2026-09-21-weekoverzicht#05e354b4",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Checkout begin_checkout → purchase onderzoeken met een testbestelling op mobiel, en botverkeer (VS/China Direct) uit de GA4-rapportage filteren",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Analyseert funnel en botverkeer in GA4 en schrijft de filterinstelling uit.",
      "wat_jij_doet": "Testbestelling op mobiel doen en het filter aanzetten in GA4."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": true,
     "controle": {
      "bewijs": "Besluit van het team.",
      "controle": "Outreach-besluit Powerleague Rotterdam en Panna Knock Out.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-21-weekoverzicht#6026e4cd",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Outreach-besluit nemen over Powerleague Rotterdam en Panna Knock Out",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Zet voor- en nadelen en een concept-outreachmail klaar.",
      "wat_jij_doet": "Besluiten en de mail versturen."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": true,
     "controle": {
      "bewijs": "Mensenwerk: contacten leggen.",
      "controle": "Contactpersonen zoeken voor 8 tennisretailers.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-21-weekoverzicht#a3c2e86e",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Contactpersonen zoeken voor de 8 tennisretailers",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Zoekt de openbare zakelijke contactgegevens van de 8 tennisretailers en zet die in de vault.",
      "wat_jij_doet": "Niets."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": true,
     "controle": {
      "bewijs": "Beoordeling door Tigo.",
      "controle": "Contentvoorstel laten beoordelen door Tigo.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-21-weekoverzicht#3a00a6f3",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Content-voorstel week 21-09 laten beoordelen door Tigo vóór het naar Buffer gaat",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "nee",
      "wat_claude_doet": "Het gaat om een menselijke beoordeling.",
      "wat_jij_doet": "Tigo beoordeelt het contentvoorstel."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": true,
     "controle": {
      "bewijs": "Mensenwerk: contact met de organisatie.",
      "controle": "Rotterdam Cup: schaal en contactpersoon verifiëren.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-21-weekoverzicht#b9537f1d",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "Rotterdam Cup: schaal en contactpersoon verifiëren",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Zoekt schaal en contactpunt van de Rotterdam Cup op en noteert die in de vault.",
      "wat_jij_doet": "Niets."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": true,
     "controle": {
      "bewijs": "03_Website_Agent/Technisch/Update Log.md: laatste gedateerde entry nog 2026-09-04, bestand laatst gewijzigd 2026-09-17.",
      "controle": "Is de Update Log bijgewerkt?",
      "gecontroleerd": "2026-09-26",
      "methode": "vault",
      "uitkomst": "open"
     },
     "id": "2026-09-21-weekoverzicht#4b3d8f18",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "Update Log bijwerken (loopt 7 weken achter)",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Werkt het Update Log bij uit git-log en notities.",
      "wat_jij_doet": "Niets."
     }
    }
   ],
   "body_md": "# Denzel Weekoverzicht — 2026-09-21 (structured data 3 weken uit, 2 orders)\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\nGemigreerd vanuit `04_Agent_Infrastructuur/Beheer/Weekoverzicht/` (de routine schreef nog naar de oude map). Belangrijkste punten: structured data en de live FAQ-waarden lopen achter op het werkthema, het echte verkeer daalt achter een laag botverkeer, en twee events-kandidaten zijn outreach-klaar.\n\n## Bevindingen\n\n\n> **Mandaatuitbreiding actief vanaf deze week (vastgesteld 14-09-2026):** naast checken/signaleren voert deze routine nu ook zelf de beoordelingen (2b) en het content-voorstel (2c) uit, en bereidt kant-en-klare website-fixes voor (4b) — zie [Feedback & Iteratie Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Feedback%20%26%20Iteratie%20Log.md) entry 2026-09-14.\n\n### Voortgang per hoofdagent\n\n- **Content Agent** — geen technische verandering, maar wel een eerste concreet content-voorstel deze week (zie \"Content-voorstel — Week 2026-09-21\" hieronder en de Buffer-hygiëne-opmerking). Video & Visuele Productie Agent nog steeds zonder output.\n- **Partnership Agent** — B2B Klanten Agent: lijst was 4 dagen oud (17-09), binnen de marge, geen zoekactie nodig. Alle \"Nieuw\"-kandidaten (13 stuks, inclusief de 8 tennisretailers van vorige week) zijn deze week voor het eerst expliciet beoordeeld tegen de Evaluatiecriteria — zie hieronder. Partnerships & Events Agent: lijst was 14 dagen oud — zoekactie uitgevoerd, 1 nieuwe kandidaat (Rotterdam Cup, rugby). Alle 17 kandidaten in de Events-lijst zijn deze week voor het eerst expliciet beoordeeld.\n- **Website Agent** — live-site-check en SEO-check beide uitgevoerd (curl + directe HTML-inspectie, geen egress-problemen). Site bereikbaar, merknaam correct, vertrouwens-elementen aanwezig. Titel/meta-description-probleem staat nu **5 weken** open, structured data-regressie nu **3 weken op rij** onopgelost. Kant-en-klare fixes staan hieronder klaar om te plakken.\n\n### Wat ik deze week zelf heb opgepakt\n\n#### B2B Klanten (Lijn A) en Samenwerkingen/Events (Lijn B) — zoekactie + beoordelingen\n\n**Zoekactie:** B2B-lijst was 4 dagen oud (17-09) — binnen de 1-2 weken-marge, geen nieuwe zoekactie. Events-lijst was 14 dagen oud (laatst gewijzigd 07-09) — wel een zoekactie uitgevoerd, volgens [Zoek Script & Gids (Samenwerkingen)](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20B%20-%20Samenwerkingen/Zoek%20Script%20%26%20Gids%20%28Samenwerkingen%29.md), gericht op de beachhead-sporten (voetbal/rugby/tennis). Resultaat: **1 nieuwe kandidaat — Rotterdam Cup**, een jaarlijks rugbytoernooi in Rotterdam, georganiseerd door Stichting Rugby Topsport Rotterdam (dus een organisator, geen lidmaatschapsclub) met al bestaande lokale sponsors. Toegevoegd aan [Voorbeelden Gevonden Organisaties (Events)](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20B%20-%20Samenwerkingen/Voorbeelden%20Gevonden%20Organisaties%20%28Events%29.md) als HOOG, met de kanttekening dat schaal en direct contact nog niet bevestigd zijn (de organisator-site was vanuit deze cloud-omgeving niet uitleesbaar — alleen via websearch-snippets gevonden).\n\n**Beoordelingen (nieuw, mandaat \"Zelf doen\" — [Agent Takenverdeling & Grenzen — Partnership Agent](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Agent%20Takenverdeling%20%26%20Grenzen%20%E2%80%94%20Partnership%20Agent.md) sectie B):** alle kandidaten zonder expliciete pass/fail-beoordeling zijn getoetst tegen [Evaluatiecriteria (B2B Klanten)](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20A%20-%20B2B%20Klanten/Evaluatiecriteria%20%28B2B%20Klanten%29.md) / [Voorwaarden Samenwerking](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20B%20-%20Samenwerkingen/Voorwaarden%20Samenwerking.md) en de beachhead-prioriteit (tennis/rugby/voetbal). Resultaat direct bij elke kandidaat geschreven in beide bestanden. **Dit is uitsluitend beoordeeld — geen outreach, geen voorwaarden besproken, geen verplaatsing naar Pipeline Tracker.**\n\n- **B2B Klanten (13 kandidaten beoordeeld):** 11× ✅ voldoet aan de basiscriteria (met per kandidaat een kanttekening over beachhead-fit of ontbrekend contact), 1× ❌ (SportCity — centraal georganiseerd zonder vindbaar contact, buiten beachhead), 1× ⚠️ niet individueel te beoordelen (de 4-shops-in-1-rij, voorstel: opsplitsen bij volgende zoekronde). Belangrijkste bevinding: de 8 tennisretailers van vorige week (17-09) voldoen allemaal aan type/sport-fit, maar **geen van alle acht heeft al een contactpersoon** — de HOOG-scores voor TennisDirect/PassaTennis, Tennisplanet.nl en TennisFirst Rotterdam zijn dus nog niet outreach-klaar, ondanks de score.\n- **Events (17 kandidaten beoordeeld):** 17× ✅. Sterkste bevinding: **Powerleague Rotterdam en Panna Knock Out zijn allebei volledig outreach-klaar** (organisator-profiel, beachhead-sport, contact aanwezig) en wachten alleen nog op het outreach-besluit van lars. Rotterdam Basketbal 3x3, Hoopville, 3X3 Unites, Urban Sports Games en Streetball Masters voldoen aan de criteria maar vallen buiten de beachhead (basketbal/urban) — dus terecht lager geprioriteerd dan de voetbal/rugby/tennis-kandidaten. Urban Trail Rotterdam's editie 2026 is over 6 dagen (27-9) — een outreach-besluit voor déze editie komt vermoedelijk te laat, relevant voor 2027.\n\n#### Content-voorstel — Week 2026-09-21\n\n> Niveau: **Voorstellen, ik keur goed** ([Agent Takenverdeling & Grenzen — Content Agent](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Agent%20Takenverdeling%20%26%20Grenzen%20%E2%80%94%20Content%20Agent.md) sectie A) — dit is en blijft een voorstel. Niets hiervan is gepubliceerd of in Buffer ingepland. Combineert performance/loss-aversion/social-proof-denkwijze (marketing-psychology) met de bestaande pilaren uit [Content Pillars](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/01_Content_Agent/Strategie%20%26%20Planning/Content%20Pillars.md) en de Buffer-tagstructuur (social-content/content-strategy). Aanleiding: de Buffer-testrun van 17-09 liet zien dat van de 38 ideeën ~74% in PERSOONLIJKE CONTENT valt en maar ~8% in PERFORMANCE/LIFESTYLE/INFLUENCER, en dat geen enkel idee tennis/rugby/voetbal noemt — terwijl dat sinds 16-9 de beachhead is.\n\n1. **\"Zelfde grip, andere sport\"-vergelijkingsreel** (Pilaar 1 Performance, tag PERFORMANCE/LIFESTYLE/INFLUENCER) — split-/tri-screen van één atleet die in tennis (uitval), rugby (sprint/richting) en voetbal (richtingsverandering) laat zien wat grip oplevert. Psychologie: contrast-effect (met/zonder grip) + concreetheid — gebruik het eigen FAQ-cijfer (wrijvingscoëfficiënt 1,17 vs 0,60) als on-screen tekst i.p.v. een vage claim. Dicht meteen het \"geen enkel beachhead-idee\"-gat uit de Buffer-audit.\n2. **Wedstrijddag-scarcity rond de 22:00-belofte** — content gekoppeld aan een concreet tennis/rugby/voetbal-weekend: \"zaterdag gespeeld, zondag alweer een wedstrijd? Voor 22:00 besteld = morgen in huis.\" Psychologie: urgentie/loss aversion (niet fit zijn voor de volgende wedstrijd), gebruikt de bestaande, geverifieerde verzendbelofte als haak. Tag: PERFORMANCE/LIFESTYLE/INFLUENCER of ANNOUNCEMENT, afhankelijk van timing.\n3. **\"Van de zijlijn\"-testimonialserie** (Pilaar 3 Story, social proof) — korte quote-video's van échte gebruikers/coaches in tennis-, rugby- of voetbalcontext, gekoppeld aan de bestaande \"3000+ sporters\"-claim op de site. Psychologie: autoriteit + social proof. Sluit aan bij [Testimonials & Social Proof](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/01_Content_Agent/Copy%20%26%20Tekst/Testimonials%20%26%20Social%20Proof.md) — kan meteen materiaal opleveren voor de vertrouwens-elementen die de Website Agent al wekelijks checkt.\n4. **Rugby-introductiecontent** — rugby is sinds 16-9 beachhead-sport maar ontbreekt nog volledig in zichtbare content én op de homepage-sportgrid (Design Agent signaleerde dit al op 17-09, nog steeds niet opgepakt — zie [Agent Werk & Kwaliteit Overzicht](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Agent%20Werk%20%26%20Kwaliteit%20Overzicht.md)). Voorstel: één korte carousel/video \"waarom grip in rugby net zo cruciaal is als in voetbal\" om het gat tussen strategie en zichtbare content te dichten, vóórdat er meer tennis/voetbal-content bijkomt zonder rugby.\n5. **Contentkalender-hygiëne (geen nieuw idee, wel een voorstel):** de Buffer-testrun van 17-09 vond nog 2 ski-sokken-ideeën en een ski-campagne (nov/dec) terwijl de ski-lancering is uitgesteld. Voorstel: deze uit het ideeënbord halen of expliciet on-hold zetten, zodat de kalender de huidige beachhead-focus weerspiegelt. (Zelf niets aangepast in Buffer — dat valt buiten wat deze routine mag.)\n\n### Website — live-site-check en SEO-check (21-09)\n\n**Live-site-check:**\n- Bereikbaar: `https://www.higrip.nl/` → HTTP 200, geen fouten.\n- Merknaam: 31× correct \"HÏ Grip\" op de homepage, 0× \"HI Grip\"/\"Hi Grip\".\n- Vertrouwens-elementen aanwezig: e-mail, KVK, BTW, Trustpilot, \"3000+\"-social proof.\n- **Nieuwe bevinding (klein, los van de bekende issues):** de homepage-banner belooft \"VOOR 22:00 BESTELD? VANDAAG VERZONDEN\", maar de zichtbare FAQ-tekst op `/pages/veelgestelde-vragen` zegt nog \"vóór 16:00 uur... dezelfde dag verzonden\" — een zichtbare tegenspraak op de live site zelf. Dit is exact de waarde die [Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md) (04-09) al als \"achterstallige waarde, geen keuze\" bestempelde en corrigeerde in het werkthema (`200269168967`) — die correctie staat dus nog steeds niet live. Zelfde geldt vermoedelijk voor retourtermijn (live FAQ zegt \"14 dagen\", bevestigde waarde is 30 dagen) en verzenddrempel (live FAQ zegt \"gratis vanaf €30\", bevestigde waarde is €35) — niet apart geverifieerd deze week, wel dezelfde onderliggende oorzaak (werkthema nog niet naar live gekopieerd).\n\n**SEO-check:**\n- `<title>` = nog steeds alleen **\"HÏ Grip\"** (7 tekens) — **5 weken** ongewijzigd sinds het voorstel van 31-08.\n- `<meta name=\"description\">` = nog steeds **175 tekens**, zelfde tekst als 4 weken terug.\n- Sitemap bereikbaar op `/sitemap.xml` (HTTP 200), geldige sitemap-index.\n- Structured data: nog steeds alleen `Organization` in de `<head>`, zowel op de homepage als op de FAQ-pagina. **WebSite en FAQPage staan nu 3 weken op rij (07-09, 14-09, 21-09) niet meer live.** Herstelpakket hiervoor werd al op 2026-09-17 volledig voorbereid en gevalideerd door Design Agent (zie [Agent Werk & Kwaliteit Overzicht](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Agent%20Werk%20%26%20Kwaliteit%20Overzicht.md)) — dat is dus nog steeds niet doorgevoerd.\n\n#### Kant-en-klare fixes voor de volgende lokale sessie (4b — deze routine kan dit niet zelf pushen, geen Shopify-toegang)\n\n**1. Title tag en meta description (homepage) — klein, laag risico:**\n\n```html\n<title>HÏ Grip — Performance Gripsokken voor Sporters</title>\n<meta name=\"description\" content=\"Gripsokken voor maximale grip en stabiliteit tijdens tennis, rugby en voetbal. Minder blessures, betere prestaties. Bestel vóór 22:00, vandaag verzonden.\">\n```\nTitel: 47 tekens (binnen 50-60, bevat het hoofdkeyword \"gripsokken\"/\"performance\"). Description: 148 tekens (binnen 120-155), noemt de beachhead-sporten en de geverifieerde 22:00-belofte i.p.v. de oude, generieke tekst.\n\n**2. Structured data — WebSite + FAQPage (homepage):** het volledig gevalideerde herstelpakket van 09-17 (Design Agent, diff nagerekend door Denzel) staat al klaar in het werkthema `200269168967` (`snippets/hi-website-schema.liquid`, `snippets/hi-breadcrumb-schema.liquid`, aangepaste `snippets/faq-schema.liquid`, gerenderd na `render 'color-palette'` in `layout/theme.liquid` — volgorde is kritiek, anders Liquid-error op elke pagina, zie [Agent Werk & Kwaliteit Overzicht](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Agent%20Werk%20%26%20Kwaliteit%20Overzicht.md) rij 2026-09-17). **Advies: dit direct kopiëren vanuit het werkthema, niet opnieuw uitschrijven** — deze cloud-routine heeft geen Shopify CLI-toegang om de exacte bestandsinhoud te verifiëren, en een handmatig hergeschreven versie loopt het risico af te wijken van de al gevalideerde versie. Mocht die versie niet meer voorhanden zijn, is dit een correcte FAQPage-schema op basis van de daadwerkelijke, vandaag gescrapete live FAQ-tekst (let op: gebruikt de bevestigd-correcte 22:00/30 dagen/€35-waarden uit [Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md), niet de nog-live 16:00/14 dagen/€30-tekst):\n\n```html\n<script type=\"application/ld+json\">\n{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"WebSite\",\n  \"name\": \"HÏ Grip\",\n  \"url\": \"https://www.higrip.nl\",\n  \"potentialAction\": {\n    \"@type\": \"SearchAction\",\n    \"target\": \"https://www.higrip.nl/search?q={search_term_string}\",\n    \"query-input\": \"required name=search_term_string\"\n  }\n}\n</script>\n<script type=\"application/ld+json\">\n{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"FAQPage\",\n  \"mainEntity\": [\n    {\"@type\": \"Question\", \"name\": \"Wat zijn gripsokken?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Gripsokken zijn speciaal ontworpen sportsokken met een antislip grippatroon van siliconen aan de onderzijde, wat zorgt voor extra stabiliteit, controle en betere prestaties. Ze voorkomen schuiven in de schoen en zijn ideaal voor sporten zoals tennis, rugby en voetbal.\"}},\n    {\"@type\": \"Question\", \"name\": \"Wat zijn de voordelen van gripsokken?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"HÏ Grip gripsokken bieden maximale grip en controle, waardoor sporters stabieler bewegen en minder risico hebben op blessures of blaren. De versterkte onderzijde en ademende sportstof zorgen voor extra comfort en frisse, droge voeten tijdens elke training.\"}},\n    {\"@type\": \"Question\", \"name\": \"Zijn gripsokken wetenschappelijk bewezen?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Gripsokken zijn wetenschappelijk bewezen effectiever dan normale sokken: ze houden de voet beter op zijn plek en bieden bijna twee keer zoveel grip (wrijvingscoëfficiënt 1,17 vs. 0,60) (Apps et al., 2020; Apps et al., 2022; Friedl et al., 2023).\"}},\n    {\"@type\": \"Question\", \"name\": \"Hoe verzorg ik mijn gripsokken?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Was ze bij voorkeur met de hand of in de wasmachine op een zacht programma (30–40°C) met een mild wasmiddel, altijd binnenstebuiten. Laat ze aan de lucht drogen en vermijd de droger.\"}},\n    {\"@type\": \"Question\", \"name\": \"Welke maat heb ik?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"HÏ Grip gripsokken vallen over het algemeen hetzelfde als je schoenmaat. We hebben 3 maten: 35-38 (klein), 39-42 (meest gekozen) en 43-46 (groot). Twijfel je? Kies de grotere.\"}},\n    {\"@type\": \"Question\", \"name\": \"Wat is de levertijd?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Bestellingen die vóór 22:00 uur zijn geplaatst, worden dezelfde dag verzonden via PostNL.\"}},\n    {\"@type\": \"Question\", \"name\": \"Wat zijn de verzendkosten?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"De verzendkosten bedragen €4,50 per bestelling. Bij een bestelwaarde van €35 of meer is verzending gratis.\"}},\n    {\"@type\": \"Question\", \"name\": \"Hoe kan ik retourneren?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"U kunt uw bestelling binnen 30 dagen na ontvangst retourneren.\"}},\n    {\"@type\": \"Question\", \"name\": \"Heeft HÏ Grip ook een zakelijk aanbod?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Ja, HÏ Grip heeft een zakelijk aanbod voor sportclubs, retailers en organisaties.\"}}\n  ]\n}\n</script>\n```\n\n**Let op:** dit fallback-blok gebruikt de gecorrigeerde waarden (22:00/30 dagen/€35), die nog niet overeenkomen met de huidige, nog-niet-bijgewerkte live FAQ-tekst (zie bevinding hierboven). Als de live FAQ-tekst zelf nog niet is bijgewerkt op het moment van plakken, eerst de tekst en het schema gelijktrekken — anders ontstaat een nieuwe tegenspraak tussen zichtbare tekst en schema, precies het probleem uit de 09-17 dashboard-rij.\n\n### Openstaande beslissingen voor lars\n\n- **Content-voorstel hierboven goedkeuren** (of aanpassen) vóór er iets richting Buffer gaat.\n- **Twee volledig outreach-klare Events-kandidaten**: Powerleague Rotterdam en Panna Knock Out — beoordeling is klaar, alleen het outreach-besluit ontbreekt nog.\n- **Rotterdam Cup (nieuw, rugby)** — sterkste nieuwe match qua profiel, maar schaal/contact nog te verifiëren (site niet uitleesbaar vanuit de cloud-routine) vóór een outreach-besluit realistisch is.\n- **8 tennisretailers (B2B) hebben nog geen contactpersoon** — voorstel: eerst contactgegevens achterhalen (kleine vervolgzoekactie) vóór de HOOG-scores waargemaakt kunnen worden.\n- **SEO-titel en meta-description homepage** — kant-en-klare HTML staat hierboven, nu 5 weken op de plank.\n- **Structured data-regressie** — het al gevalideerde herstelpakket van 09-17 staat klaar in het werkthema en hoeft alleen nog gekopieerd te worden naar live; fallback-versie staat hierboven als vangnet.\n- **Live FAQ-tekst loopt achter op de bevestigde waarden** (16:00 i.p.v. 22:00, 14 dagen i.p.v. 30, €30 i.p.v. €35-drempel) — dezelfde onderliggende oorzaak als de structured-data-regressie (werkthema nog niet naar live gekopieerd), dus vermoedelijk in één keer op te lossen door het werkthema alsnog te publiceren.\n- **[Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md) klopt structureel niet meer** — staat nu 7 weken achter op de praktijk.\n- Overige langlopende punten ongewijzigd: Merk & Bedrijf Database/Retailer Database (verwijderen?), analytics-vervolgstappen (funnel-rapport, purchase-events), checkout-onderzoek (zie AI-ontwikkelingen hieronder voor een mogelijk hulpmiddel).\n\n### Vooruitblik — komende week\n\n1. **Structured data-regressie eindelijk oplossen** — het herstelpakket ligt al 4 dagen klaar (09-17), dit is de belangrijkste actie.\n2. **SEO-titel/description doorvoeren** — kant-en-klare HTML staat in dit overzicht, kleine wijziging.\n3. **Live FAQ-tekst en policies gelijktrekken** met de bevestigde waarden (22:00/30 dagen/€35) — voorkomt een nieuwe tegenspraak zodra de schema-fix wordt geplakt.\n4. **Contactgegevens vinden voor de 8 tennisretailers** zodat de HOOG-scores outreach-klaar worden.\n5. **Content-voorstel beoordelen** en, indien akkoord, de ski-sokken-ideeën uit Buffer laten halen.\n\n### AI-ontwikkelingen die relevant kunnen zijn\n\n1. **Shopify's Universal Commerce Protocol staat nu standaard aan** (Summer '26 Everywhere Edition) — elke winkel is nu vindbaar in ChatGPT/Perplexity/Copilot/Gemini via structured data en `llms.txt`. FAQPage-schema wordt expliciet genoemd als trigger voor AI Overview-opname. Maakt de al 3 weken openstaande structured-data-regressie urgenter dan een zuivere Google-SEO-kwestie — het raakt nu ook AI-zoekresultaten direct.\n2. **Predis.ai** — AI-tool die complete social posts (copy, visuals, carousels, video met AI-voiceover) genereert vanuit een Shopify-cataloguskoppeling. Relevant voor de ondervertegenwoordigde PERFORMANCE/LIFESTYLE/INFLUENCER-tag in Buffer (zie content-voorstel hierboven) als sneller startpunt, mits de HÏ Grip-beeldtaal er overheen blijft.\n3. **Zuko Analytics** — losstaande Shopify-checkout-analysetool die precies laat zien op welke checkout-stap bezoekers afhaken en hoe lang elke stap duurt. Direct relevant voor het nog openstaande checkout-onderzoek uit [Week 2026-09-14](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Weekoverzicht/Week%202026-09-14.md) (7 checkouts gestart, 0 afgerond) — kan gerichter zijn dan handmatig een testbestelling doorlopen.\n4. **Meta's Edits-app en de \"pillar video\"-aanpak** — één hoofdvideo per week wordt met AI-hulp (highlight-detectie, auto-caption, hook-varianten) omgezet in 20-40 micro-assets voor meerdere platforms. Relevant voor `/video-productie`, dat nog steeds zonder output staat — kan de opstartdrempel voor de eerste video-inzet verlagen.\n\n### GA4-weekrapport (14-09 t/m 20-09, achteraf toegevoegd op verzoek van lars)\n\n> Property 476032345, vergeleken met 07-09 t/m 13-09. Wordt vanaf nu elke week standaard toegevoegd — zie [Denzel Weekoverzicht — Routine](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Denzel%20Weekoverzicht%20%E2%80%94%20Routine.md) stap 6. **Gecorrigeerd 21-09** na controle: de eerste versie noemde het verkeer \"+41%\" en Google een groeikanaal; dat klopte niet (zie hieronder).\n\n**Verkeer:** 123 sessies (vorige week 87, +41%), 98 gebruikers (75), 202 paginaweergaven (185, +9%). **Die stijging komt volledig van vermoedelijk botverkeer**: VS 51 sessies (vorige week 15) met 3,9% engagement — 44 daarvan Direct/desktop met 4,5%, 7 Direct/mobiel met 0% — plus China 7 (vorige week 0). **Nederland, het echte verkeer: 52 sessies tegen 67 vorige week (−22%), engagement 46% tegen 67%.** Het \"bot\"-oordeel is een afleiding uit land + Direct + bijna 0% engagement, niet uit GA4 zelf bevestigd. Filter dit in GA4 (segment \"Land = Nederland\") voordat je op sessies of engagement stuurt.\n\n**Waar komen ze vandaan (sessies, deze week vs vorige week):**\n\n| Kanaal | Deze week | Vorige week | Toelichting |\n|---|---|---|---|\n| Direct | 88 | 33 | 60 daarvan VS/China-bots; NL-Direct ≈ 25 |\n| Organic Search | 24 | 33 (−27%) | google 23, bing 1; engagement 42% (was 61%) |\n| Organic Social | 4 | 10 (−60%) | alles l.instagram.com; engagement 50% (was 90%) |\n| Referral | 4 | 5 | linktr.ee 2 + raqds3-tb.myshopify.com 2 (dat laatste is een Shopify-preview, geen echt bezoek) → echt Referral = 2 |\n| AI Assistant | 0 | 2 | ChatGPT/Perplexity-verkeer viel weg |\n| E-mail | 1 | 0 | SendWILL |\n| Unassigned | 2 | 4 | bron onbekend |\n\nGoogle organic **daalde** dus; het is wel de bron van 1 van de 2 orders. Instagram levert maar 4 sessies.\n\n**Waar landen ze:** homepage 42 sessies (bounce 48%, gem. 3,2 min; beide orders hebben hier hun landing), 12 sessies zonder landingspagina (\"(not set)\", 0,06 sec — waarschijnlijk niet-menselijk of niet volledig gemeten), /en 7, /collections/all 5, productpagina's performance-grip-socks-2-0 wit en zwart 5 elk, hi-grip-gripsokken-1 4, blog \"de wetenschap achter gripsokken\" 3 (100% bounce), /collections/gripsokken 3 (100% bounce), over-ons 3. /collections/all krijgt 5 landingen tegen 3 voor /collections/gripsokken — te klein om een conclusie aan te hangen.\n\n**Apparaat:** mobiel 39 sessies (bounce 64%, vorige week 55 met 36%) → beide orders; desktop 84 sessies (bounce 80%, vorige week 32) → 0 orders. Ruim de helft van die desktop-sessies is VS/China-Direct (48 van 84); de rest is NL.\n\n**Funnel (events / unieke gebruikers, vorige week tussen haakjes):**\n\n| Stap | Deze week | Vorige week |\n|---|---|---|\n| view_item_list (collectie bekeken) | 21 / 17 | 33 / 28 |\n| view_item (product bekeken) | 40 / 24 | 40 / 27 |\n| add_to_cart | 11 / 9 | 6 / 5 |\n| begin_checkout | 8 / 7 | 7 / 5 |\n| add_shipping_info | 1 / 1 | 2 / 1 |\n| add_payment_info | 1 / 1 | 0 |\n| **purchase** | **2 / 2 (€26,25)** | 0 |\n\n**Waar haken ze af:** (1) *Voor een product:* van 98 gebruikers bekijken er 24 een product (25%), maar door de bots is dit percentage te laag; de collectiepagina's (view_item_list 28 → 17 gebruikers) zijn wel gedaald. (2) *Product → cart:* 24 → 9 gebruikers (38%), vorige week 19%. (3) *Checkout:* 7 gebruikers begonnen, 2 rekenden af (29%; benchmark ~80%). **Let op:** er zijn 2 purchases maar maar 1× add_shipping_info en 1× add_payment_info — bezoekers die met een snelle betaalknop (bv. Shop Pay/Apple Pay) afrekenen slaan die events over. De stap tussen begin_checkout en betaling is dus in GA4 niet betrouwbaar te meten; alleen begin_checkout → purchase (7 → 2) is bruikbaar. Volume <100 echte sessies, dus indicatief, geen trend.\n\n**Conclusie:** de €0-week is doorbroken (2 orders, beide mobiel, 1× Direct + 1× Google organic; omzet €26,25). Maar het échte verkeer daalde (NL −22%, Google −27%, Instagram −60%) — de \"groei\" is bots. Prioriteiten: (1) botverkeer uit de rapportage filteren, (2) begin_checkout → purchase onderzoeken via een testbestelling op mobiel (Zuko later, zie AI-ontwikkelingen punt 3), (3) uitzoeken waarom Organic Search en Instagram terugliepen.\n\n## Acties\n- [ ] P1 · Structured data-herstelpakket van 17-09 uit het werkthema naar live kopiëren (thema-ID eerst verifiëren met shopify theme list)\n- [ ] P1 · Live FAQ-tekst en beleid gelijktrekken met de vastgestelde waarden (besluit Lars 25-09): binnen 1 werkdag verzonden, €4,50 verzendkosten, gratis vanaf €35, 30 dagen retour\n- [x] P2 · Homepage-title en meta description doorvoeren (kant-en-klare HTML in dit overzicht)\n- [ ] P2 · Checkout begin_checkout → purchase onderzoeken met een testbestelling op mobiel, en botverkeer (VS/China Direct) uit de GA4-rapportage filteren\n- [ ] P2 · Outreach-besluit nemen over Powerleague Rotterdam en Panna Knock Out\n- [ ] P2 · Contactpersonen zoeken voor de 8 tennisretailers\n- [ ] P2 · Content-voorstel week 21-09 laten beoordelen door Tigo vóór het naar Buffer gaat\n- [ ] P3 · Rotterdam Cup: schaal en contactpersoon verifiëren\n- [ ] P3 · Update Log bijwerken (loopt 7 weken achter)\n\n## Bronnen\n- Origineel: `04_Agent_Infrastructuur/Beheer/Weekoverzicht/Week 2026-09-21.md` (Denzel-cloudroutine, 21 sep 2026) — kopie verwijderd op 2026-10-02, staat in de git-geschiedenis\n- [Stappenplan — Verdere Bouw](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Stappenplan%20%E2%80%94%20Verdere%20Bouw.md) · [Feedback & Iteratie Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Feedback%20%26%20Iteratie%20Log.md) · [Agent Werk & Kwaliteit Overzicht](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Agent%20Werk%20%26%20Kwaliteit%20Overzicht.md)\n\n## Aantekeningen",
   "bron": "routine",
   "bronbestand": "",
   "bronbestand_url": null,
   "categorie": "SEO",
   "datum": "2026-09-21",
   "deadline": "",
   "gerelateerd": [
    "2026-09-14-weekoverzicht",
    "2026-09-21-regressiecheck",
    "2026-09-23-seo-conversietest-run-1",
    "2026-09-21-beachhead-rugby",
    "2026-09-25-evaluatie-routines",
    "2026-09-28-weekoverzicht",
    "2026-10-02-vault-review"
   ],
   "id": "2026-09-21-weekoverzicht",
   "kansen": [],
   "kerncijfers": [],
   "kerntitel": "",
   "prioriteit": "P1",
   "routine": "denzel-week",
   "samenvatting": "De €0-week is doorbroken met 2 orders (€26,25), maar het echte Nederlandse verkeer daalde 22%: de groei is botverkeer uit de VS/China. WebSite- en FAQPage-schema staan 3 weken op rij niet live en de live FAQ spreekt de bevestigde waarden tegen (16:00/14 dagen/€30 i.p.v. 22:00/30 dagen/€35); het herstelpakket ligt klaar in het werkthema.",
   "status": "gearchiveerd",
   "titel": "Denzel Weekoverzicht — 2026-09-21 (structured data 3 weken uit, 2 orders)",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-21-weekoverzicht.md",
   "vervangt": [
    "2026-09-14-weekoverzicht"
   ],
   "wat_niet_lukte": ""
  },
  {
   "acties": [],
   "body_md": "# SEO-regressiecheck — 21 september 2026\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\nControle-run, geen onderzoek. De kritieke check (geen `aggregateRating` op enige pagina) blijft schoon. Twee eerder gemelde regressiepunten zijn deze week opgelost; één bestaand punt is bijgewerkt (gedeeltelijke voortgang) en één nieuw punt toegevoegd. GA4 was dit keer niet bereikbaar.\n\n## Bevindingen\n\nReferentiepunt: de audit van 15 september 2026 ([2026-09-15-seo-audit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-15-seo-audit.md)) en de regressiecheck van 15 september ([2026-09-15-regressiecheck](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-15-regressiecheck.md)). De Growth Radar-routine draaide dit keer vóór deze check en had de productpagina-URL-wijziging ([2026-09-21-growth-radar-seo-technisch](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-21-growth-radar-seo-technisch.md)) al in de backlog verwerkt — hier alleen technisch bevestigd, niet dubbel toegevoegd.\n\n### Afwijkingen\n\n1. **GA4 kon deze week niet gecontroleerd worden.** `analytics-mcp` gaf een verbindings-timeout (30s) bij elke poging. Sessies per kanaal, de AI Assistant-trend en de status van `keyEvents` zijn dus niet geverifieerd — geen aanname dat de situatie ongewijzigd is.\n\n2. **SEO-schema staat gedeeltelijk live, nog niet compleet.** Sinds 15 september is `hi-seo-schema.liquid` kennelijk deels gepusht: `Organization` en `BreadcrumbList` staan nu overal waar verwacht (vorige week ontbrak `BreadcrumbList` nog op 6 van de 8 URL's). Maar `WebSite` staat alleen op de homepage en de padel-pagina, `ItemList` ontbreekt nog op beide collectiepagina's, `FAQPage` ontbreekt nog op de productpagina, en `/pages/gripsokken-voetbal` geeft nog steeds 404.\n\n3. **Geen `aggregateRating` gevonden** op één van de zeven bereikbare pagina's — kritieke check blijft schoon.\n\n4. **Productpagina-URL-wijziging technisch bevestigd** (al gemeld door Growth Radar): `/products/hi-grip-gripsokken-1` en de twee oude duplicaten redirecten (301) naar de nieuwe handle `/products/performance-gripsokken`. Zelfde patroon bij `/pages/gripsokken-padel` → `/pages/gripsokken-voor-padel`.\n\n5. **Nieuwe `/en/`-sitemapsectie ontdekt, met een zwakke title-tag.** Vier extra `/en/`-sub-sitemaps (products, pages, collections, blogs) staan sinds deze week in `sitemap.xml` — een Engelse marktuitbreiding die nergens in het projectgeheugen staat. `hreflang` en canonical kloppen, maar de EN-title is enkel `HÏ Grip` — hetzelfde probleem dat de NL-homepage vóór 15 september had.\n\n6. **`/collections/all` heeft nog steeds geen meta description.** Ongewijzigd sinds 15 september.\n\n### Ongewijzigd / opgelost\n\n- Homepage heeft nu precies 1 `<h1>` (was 2×) — opgelost.\n- Alle 7 bereikbare URL's laadden in 0,29–0,70s, elk met precies één niet-lege `<title>` en een kloppende canonical.\n- Homepage: 9 afbeeldingen met `alt=\"\"` (vorige week 12) — onder de meldgrens.\n- `shopify theme check`: 7 fouten, alle binnen de drie bekende, genegeerde typen. Geen nieuwe foutsoort.\n\n## Acties\n\n_Acties uit dit rapport staan in de growth-radar-backlog (`ACTIEBACKLOG.md`) en komen via het dashboard binnen — hier niet gedupliceerd._\n\n## Bronnen\n\n- Origineel: `C:\\Users\\Test\\.claude\\research\\growth-radar\\rapporten\\regressiecheck-2026-09-21.md`\n- Routine: `C:\\Users\\Test\\.claude\\scheduled-tasks\\higrip-seo-regressiecheck\\SKILL.md`\n\n## Aantekeningen",
   "bron": "routine",
   "bronbestand": "C:\\Users\\Test\\.claude\\research\\growth-radar\\rapporten\\regressiecheck-2026-09-21.md",
   "bronbestand_url": null,
   "categorie": "SEO",
   "datum": "2026-09-21",
   "deadline": "",
   "gerelateerd": [
    "2026-09-15-regressiecheck",
    "2026-09-15-seo-audit",
    "2026-09-21-growth-radar-seo-technisch",
    "2026-09-23-seo-conversietest-run-1",
    "2026-09-25-evaluatie-routines",
    "2026-09-21-weekoverzicht",
    "2026-09-25-seo-audit"
   ],
   "id": "2026-09-21-regressiecheck",
   "kansen": [],
   "kerncijfers": [],
   "kerntitel": "",
   "prioriteit": "P1",
   "routine": "seo-regressiecheck",
   "samenvatting": "Twee backlogpunten opgelost sinds vorige week (oude product-URL's redirecten nu, homepage heeft nog maar 1 H1), maar het SEO-schema blijkt slechts gedeeltelijk gepusht (WebSite/ItemList/FAQPage missen nog op specifieke pagina's) en een nieuwe /en/-sectie heeft een keyword-loze title. GA4 kon deze week niet gecontroleerd worden door een tooling-storing.",
   "status": "nieuw",
   "titel": "SEO-regressiecheck — 21 september 2026",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-21-regressiecheck.md",
   "vervangt": [],
   "wat_niet_lukte": ""
  },
  {
   "acties": [],
   "body_md": "# Growth Radar — SEO Technisch (21 september 2026)\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\nBelangrijkste vondst: de productpagina-URL is stilzwijgend veranderd sinds de laatste check, en dat lost toevallig het oudste openstaande regressiepunt op — maar het betekent ook dat verwijzingen in eigen documentatie nu verouderd zijn. Daarnaast twee kleinere technische signalen over Merchant Center-beeldeisen en Core Web Vitals.\n\n## Bevindingen\n\n### 1. Canonical productpagina-URL gewijzigd, oude-URL-kannibalisatie opgelost\n\nBij de regressiecheck van 15 september 2026 ([2026-09-15-regressiecheck](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-15-regressiecheck.md)) stond genoteerd dat `/products/hi-grip-gripsokken-1` de canonical productpagina was, en dat `/products/performance-grip-socks-2-0-zwart` en `-wit` nog HTTP 200 gaven in plaats van een 301 — interne kannibalisatie van het hoofdkeyword. Diezelfde bevinding stond ook in de audit van 15 september ([2026-09-15-seo-audit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-15-seo-audit.md)).\n\nBij controle vandaag (21 september) bleek de producthandle zelf te zijn veranderd: het hoofdproduct heet nu `/products/performance-gripsokken` (was `hi-grip-gripsokken-1`), en de twee varianten zijn meeveranderd naar `/products/performance-gripsokken-2-0-zwart` en `-wit`. Geverifieerd met een `fetch`-test (redirect: follow) op alle drie de oude adressen: ze redirecten automatisch naar hun nieuwe tegenhanger, en de canonical-tag op de live pagina verwijst correct naar zichzelf. Dit is standaardgedrag van Shopify bij het hernoemen van een producthandle.\n\n**Aandachtspunt:** eigen documentatie (projectgeheugen, theme-editor previewlinks, testinstructies) verwijst nog overal naar de oude handle `hi-grip-gripsokken-1`. Die links werken dankzij de redirect nog, maar zijn niet meer accuraat — bijgewerkt in `project_higrip.md` onder SEO-inzichten. Een handlewijziging kan Search Console tijdelijk in de war brengen; de dekkingsrapportage is de moeite van het controleren waard over een paar dagen.\n\n### 2. Merchant Center: nieuw beeldminimum van 500×500px — higrip.nl al compliant\n\nGoogle voert een universele minimumeis van 500×500px in voor productafbeeldingen in Merchant Center-feeds (waarschuwingen sinds april 2026, hard afgedwongen vanaf 31 januari 2027), los van en strenger dan de eerdere 100×100px-eis. Gecontroleerd op higrip.nl: hoofdproductfoto's zijn 1024×1024 en 1536×1024px — ruim boven de nieuwe eis. Geen actie nodig nu; wel een blijvend checkpunt bij nieuwe productfoto's (bijv. skisokken).\n\n### 3. INP is in 2026 het meest voorkomende Shopify-knelpunt bij Core Web Vitals\n\nActuele benchmarks laten zien dat INP (Interaction to Next Paint) het metric is waar de meeste Shopify-winkels op vastlopen — meestal veroorzaakt door zware JavaScript in apps of custom secties, niet het thema zelf. Landelijk haalt 48% van mobiele sites nu alle drie de Core Web Vitals (was 44% in 2024). higrip.nl heeft een JS-zware WK-promosectie gebouwd (`hi-wk-promo.js`, count-up-animaties); de sectie zelf staat niet meer op de homepage, maar niet gecontroleerd of het script nog wordt geladen. Logisch moment voor een nulmeting vóór de skisokken-lancering.\n\n## Acties\n\n_Acties uit dit rapport staan al in de growth-radar-backlog (`ACTIEBACKLOG.md`, punten 4 en 14) en komen via de backlog-parser binnen — hier niet gedupliceerd. Het opgeloste regressiepunt is in de backlog afgevinkt._\n\n## Bronnen\n\n- Origineel: `C:\\Users\\Test\\.claude\\research\\growth-radar\\rapporten\\2026-09-21-seo-technisch.md`\n- [Merchant Center announcements change log](https://support.google.com/merchants/announcements/6192467?hl=en)\n- [Merchant Center product data specification update 2026](https://support.google.com/merchants/answer/16989427?hl=en)\n- [Core Web Vitals Benchmarks for Shopify Stores (2026 Data)](https://dev.to/apogeewatcher/core-web-vitals-benchmarks-for-shopify-stores-2026-data-1mel)\n- [Core Web Vitals for Shopify Stores: 2026 Benchmarks and Optimization Playbook](https://www.1digitalagency.com/blog/core-web-vitals-for-shopify-stores-2026-benchmarks-and-optimization-playbook-33932/)\n\n## Aantekeningen",
   "bron": "routine",
   "bronbestand": "C:\\Users\\Test\\.claude\\research\\growth-radar\\rapporten\\2026-09-21-seo-technisch.md",
   "bronbestand_url": null,
   "categorie": "SEO",
   "datum": "2026-09-21",
   "deadline": "",
   "gerelateerd": [
    "2026-09-15-regressiecheck",
    "2026-09-15-seo-audit",
    "2026-09-21-regressiecheck",
    "2026-09-23-seo-conversietest-run-1",
    "2026-09-24-growth-radar-cro",
    "2026-09-25-seo-audit",
    "2026-09-28-growth-radar-seo-technisch"
   ],
   "id": "2026-09-21-growth-radar-seo-technisch",
   "kansen": [],
   "kerncijfers": [],
   "kerntitel": "",
   "prioriteit": "P2",
   "routine": "growth-radar",
   "samenvatting": "Productpagina-handle bleek stilzwijgend veranderd naar performance-gripsokken; de oude URL-kannibalisatie uit de regressiecheck van 15 september is daarmee feitelijk opgelost. Daarnaast: Merchant Center's nieuwe beeldminimum (500×500px) raakt higrip.nl niet, en INP is in 2026 het metric waar Shopify-winkels het vaakst op struikelen.",
   "status": "nieuw",
   "titel": "Growth Radar — SEO Technisch (21 september 2026)",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-21-growth-radar-seo-technisch.md",
   "vervangt": [],
   "wat_niet_lukte": ""
  },
  {
   "acties": [
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "GraphQL pages: handle gripsokken-voor-rugby isPublished=false; https://www.higrip.nl/pages/gripsokken-voor-rugby geeft nog 404.",
      "controle": "Is de rugbypagina gepubliceerd?",
      "gecontroleerd": "2026-09-26",
      "methode": "shopify",
      "uitkomst": "open"
     },
     "id": "2026-09-21-beachhead-rugby#5a25b546",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "Rugby-sportpagina `/pages/gripsokken-voor-rugby` afmaken en publiceren: rugbyfoto laten schieten (scrum, voet in schoen), FAQ \"Mag je gripsokken dragen bij rugby?\" met het Law 4/VWW-antwoord uit §3, link naar het product",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Schrijft pagina en FAQ (Law 4/VWW) in het testthema en maakt een shotlist voor de foto.",
      "wat_jij_doet": "Foto laten schieten, uploaden en de pagina publiceren."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "03_Website_Agent/Content/Sportgidsen/ bevat geen rugbygids (wel padel, tennis, voetbal, futsal, fitness, hardlopen, basketbal).",
      "controle": "Bestaat de rugby-sportgids?",
      "gecontroleerd": "2026-09-26",
      "methode": "vault",
      "uitkomst": "open"
     },
     "id": "2026-09-21-beachhead-rugby#23a9609a",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "Rugby-sportgids schrijven in `03_Website_Agent/Content/Sportgidsen/` per positie (forwards/scrum, backs/sevens, kicker) met knip-je-clubkous-instructie",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Schrijft de rugby-sportgids per positie in 03_Website_Agent/Content/Sportgidsen/.",
      "wat_jij_doet": "Niets."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Mensenwerk: clubs benaderen.",
      "controle": "Pilot clubdeals rugby benaderen.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-21-beachhead-rugby#369a82cd",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "Pilot clubdeals Zuid-Holland: Rotterdamse RC, RSRC en de Delftse clubs benaderen met samples en een wear-test (10 spelers, één seizoen) in ruil voor foto's en quotes",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Schrijft het pilotvoorstel en de conceptmails aan de clubs.",
      "wat_jij_doet": "Mails versturen en samples uitleveren."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Mensenwerk: retailer benaderen.",
      "controle": "Rugbymagazijn benaderen als retailer.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-21-beachhead-rugby#d7babce5",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "Rugbymagazijn (Bussum, B2B-portaal) benaderen als retailer — beide gripsokken daar op 21-9-2026 in herenmaten uitverkocht, HÏ Grip als Nederlands alternatief met voorraad",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Schrijft een retailer-pitchmail met de B2B-voorwaarden.",
      "wat_jij_doet": "Mail versturen."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Niet automatisch waar te nemen: de vraag verschijnt pas na een echte bestelling.",
      "controle": "Post-purchase vraag 'Welke sport speel je?' toevoegen.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-21-beachhead-rugby#fe8e8c54",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Post-purchase vraag \"Welke sport speel je?\" toevoegen zodat het rugby-aandeel in D2C-orders meetbaar wordt (meetpunt vraag 9)",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Zet de post-purchase-vraag klaar (app-advies of Thank-you-blok).",
      "wat_jij_doet": "App installeren of het blok activeren in de checkout-editor."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Mensenwerk: ambassadeurs werven.",
      "controle": "Twee rugby-ambassadeurs werven.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-21-beachhead-rugby#03c52f62",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Twee rugby-ambassadeurs werven (één Ereklasse heren, één dames XV) via de RUGBY-rijen in de Influencer Database",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Selecteert twee kandidaten uit de Influencer Database en schrijft DM-concepten.",
      "wat_jij_doet": "Kandidaten benaderen."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Besluit van het team.",
      "controle": "Activatie Rotterdam Cup en Amsterdam Sevens beoordelen.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-21-beachhead-rugby#a87867c1",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Activatie beoordelen voor Rotterdam Cup (eind augustus 2027) en Amsterdam Sevens (juni 2027); Ameland en North Sea Beach Rugby alleen voor naamsbekendheid",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Maakt een besliskader (kosten, bereik) voor Rotterdam Cup en Amsterdam Sevens.",
      "wat_jij_doet": "Besluiten."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Mensenwerk: contact met Rugby Nederland.",
      "controle": "Rugby Nederland vragen naar het sokkenpartner-slot.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-21-beachhead-rugby#6241b745",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Rugby Nederland vragen naar het open sokkenpartner-slot (Errea kleding, Rhino materiaal): voorwaarden en kosten opvragen bij het bestuurslid Commercie",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Schrijft een conceptmail aan het bestuurslid Commercie.",
      "wat_jij_doet": "Mail versturen."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Mensenwerk: retailers benaderen.",
      "controle": "Rugbywinkels controleren en benaderen.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-21-beachhead-rugby#db86155f",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "All About Rugby (Den Bosch), Rugby-shop.nl, De RugbySpecialist en Ultimate Sports controleren op gripsok-assortiment en benaderen",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Controleert het assortiment van de vier winkels en schrijft pitchmails.",
      "wat_jij_doet": "Mails versturen."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "https://www.higrip.nl/: 'rugby' alleen in de meta description, geen vraag 'Mag je gripsokken dragen bij rugby?' in de zichtbare tekst.",
      "controle": "Staat de rugby-FAQ op de homepage?",
      "gecontroleerd": "2026-09-26",
      "methode": "site",
      "uitkomst": "open"
     },
     "id": "2026-09-21-beachhead-rugby#6c704ca5",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Homepage-FAQ \"Mag je gripsokken dragen bij rugby?\" (GEO-plan actie 3) invullen met het geverifieerde antwoord: ja — Law 4 verbiedt alleen harde materialen, VWW §3.0.7.5 verwijst alleen naar Law 4/Regulation 12",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Zet de FAQ met het geverifieerde antwoord in de homepage-template van het testthema.",
      "wat_jij_doet": "Testthema publiceren."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Mensenwerk: meten bij pilotclubs.",
      "controle": "Maat 48–50 verkennen met pilotclubs.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-21-beachhead-rugby#1c69e4f0",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "Maat 48–50 verkennen voor forwards (vier vrije EAN's); vraag eerst meten bij de pilotclubs",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Schrijft een meetvraag voor de pilotclubs en een EAN-plan.",
      "wat_jij_doet": "Meten bij de clubs en besluiten over de maat."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Beslissing van Lars.",
      "controle": "Lars bevestigt vraag 9 en 10.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-21-beachhead-rugby#4f10dbcf",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "Lars bevestigt vraag 9 (meetpunt) en vraag 10 (hockey) voor rugby in Beachhead Strategie.md",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "nee",
      "wat_claude_doet": "Het gaat om een besluit.",
      "wat_jij_doet": "Lars bevestigt vraag 9 en 10 in Beachhead Strategie.md."
     }
    }
   ],
   "body_md": "# Beachhead rugby — markt, regels, concurrentie en de 10 kernvragen\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\nSinds 16 september is rugby één van de drie beachhead-sporten, maar in [Beachhead Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Beachhead%20Strategie.md) stonden alle tien rugby-antwoorden nog op *nog invullen*. Dit onderzoek vult ze met publieke bronnen (Rugby Nederland-jaarverslag 2025-2026, World Rugby Law 4 en Regulation 12, het VWW 2026-2027, de Nederlandse rugbywinkels) en de productwaarheid uit [Performance Grip Socks 2.0](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Product/Performance%20Grip%20Socks%202.0.md). De ingevulde tabel staat in §7 en is overgenomen in Beachhead Strategie.md.\n\nDrie conclusies:\n\n1. **Het mag, zonder mitsen.** World Rugby Law 4 noemt gripsokken niet en verbiedt alleen harde materialen (gespen, clips, \"rigid material\"); Regulation 12 zegt over sokken niets, behalve dat scheenbeschermers eronder mogen. Rugby Nederland verwijst in VWW Algemeen 2026-2027 §3.0.7.5 uitsluitend naar die twee. Anders dan in voetbal (IFAB: tape in kouskleur) is er geen kleurregel. De homepage-FAQ-vraag \"Mag je gripsokken dragen bij rugby?\" uit het [GEO Plan (2026-09-21)](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/SEO/GEO%20Plan%20%282026-09-21%29.md) kan dus met \"ja\" worden beantwoord.\n2. **Er is een gat, maar het is klein.** Ruim 19.000 leden (2025) tegenover ~1,2 miljoen KNVB-leden — rugby is qua omvang ~1,5% van voetbal. Het gat is wél echt: geen Nederlands gripsokkenmerk positioneert zich op rugby, Decathlon (€ 8,99) en Rugbymagazijn (ATAK € 9,50, Rugby Bricks € 14,95–24,95) zijn de enige zichtbare aanbieders, en bij Rugbymagazijn waren op 21 september alle herenmaten van beide gripsokken uitverkocht.\n3. **Rugby is een geloofwaardigheids-beachhead, geen volume-beachhead.** 54% van de clubs zit in Zuid-Holland, Noord-Holland en Brabant; de landskampioen (Haagsche RC), de finalist (Rotterdamse RC) en drie Delftse clubs liggen binnen 30 km van Rotterdam. Vijf clubdeals plus twee ambassadeurs is genoeg om \"de gripsok van het Nederlandse rugby\" te zijn. Maar de rekensom (§8) laat zien dat zelfs dominantie ≈ € 50–70k per jaar oplevert. De waarde van rugby zit in het bewijs (\"gedragen in de Ereklasse\") dat voetbal en hockey overtuigt — niet in de omzet zelf.\n\n## Bevindingen\n\n### 1. De markt in cijfers\n\n| Kengetal | Waarde | Bron |\n|---|---|---|\n| Clubs | 100 aangesloten (2025); de Wikipedia-lijst telt 101 actieve | Jaarverslag RN 2025-2026 p.12; Wikipedia-lijst |\n| Leden | > 19.000 (2025); de site zegt \"ongeveer 18.500\" (2026) | Jaarverslag p.12; rugby.nl/vacatures |\n| Groei | 8.832 (2010) → 13.144 (2015) → 16.000 (2020) → 18.000 (2024) → 19.000+ (2025); +63% tussen 2013 en 2022 | Wikipedia Rugby Nederland; Rugby Factsheet (AAC/RC Amsterdam, 2024) |\n| Spelend aandeel | > 16.000 van 17.000 leden speelden (2022) ≈ 94% | Rugby Factsheet |\n| Vrouwen 19+ | verdubbeld van 1.000 naar 2.000 in vijf jaar (2018–2023) | SportKnowhowXL, aug 2023 |\n| Meisjes | Girls Rugby-events: 48–150 deelneemsters per event, record 150 (okt 2025) | Jaarverslag p.29–30 |\n| Ambitie | Strategisch Plan 2025-2032 / \"Rugby Agenda 2032\": groter, sterker, bekender; campagne ME \\| WE (2026) | rugby.nl; Jaarverslag p.27 |\n| Topsport | Heren én dames níet gekwalificeerd voor het WK 2027; World Rugby High Performance Grant loopt door | Jaarverslag p.41 |\n\nCompetitiestructuur seizoen 2025-2026 (Jaarverslag p.33–37):\n\n- **Heren:** Ereklasse 12 teams en Future klasse 11 teams (landelijk, \"prestatiesport\"), Eerste klasse 14, daaronder Tweede t/m Vierde klasse regionaal (Noord/Zuid, later Noord-Oost/Noord-West/Midden/Zuid-Oost/Zuid-West — \"participatiesport\"). Landskampioen 2025-2026: Haagsche RC (finale 30 mei, NRCA Amsterdam, 24-32 tegen RC The Dukes). Studentenclub Ascrum promoveerde naar de Ereklasse 2026-2027.\n- **Dames:** Ereklasse (8 teams in fase 1), Eerste, Tweede en Derde klasse (elk ~8). Kampioen: RC Waterland (39-12 tegen AAC).\n- **Jeugd:** TBM (Turven/Benjamins/Mini's, bondsdagen met ~40 clubs per ronde), Cubs, Junioren, Colts — in Cup/Plate/Bowl/Shield/Ribbon-poules; jeugdfinales 11 april 2026 in het NRCA-stadion; NK Sevens jeugd; Landelijk Mini Festival (Bredase RC, Haagsche RC).\n- De Ereklasse wordt gestreamd via Eyecons.\n\nDe leeftijdsverdeling (jeugd/senioren) publiceert de bond niet. Aanname voor de rekensom: 30–40% van de leden is jeugd onder schoenmaat 35 (TBM en jonge Cubs) — te toetsen bij een pilotclub.\n\n### 2. Waar zit rugby\n\nVerdeling van de 101 actieve clubs (Wikipedia-lijst, 2026):\n\n| Provincie | Clubs | Voor HÏ Grip relevant |\n|---|---|---|\n| Zuid-Holland | 21 | Rotterdamse RC (Ereklasse, finalist 2025), RSRC (studenten, Future klasse), Pitbulls Rotterdam, Sparta Capelle, RC Hoek van Holland (Ereklasse), RC Delft + DSR-C + Thor (Delft), Haagsche RC (landskampioen), DIOK Leiden (Ereklasse), LSRG, Gouda, Dordtsche, Voorburgse, Havestate, Te Werve, Bassets, Alphen, Eilanders |\n| Noord-Holland | 19 | AAC (nationaal centrum NRCA), Ascrum, RFC Haarlem, 't Gooi, Hilversum, Cas RC, Waterland, Amstelveense |\n| Noord-Brabant | 15 | The Dukes (Den Bosch), Bredase RC, Oisterwijk Oysters, Tilburg, Eindhoven |\n| Gelderland / Utrecht | 9 / 9 | RC Eemland (Amersfoort, Ereklasse), URC, NRC The Wasps |\n| Overige 7 provincies | 28 | verspreid, kleine clubs |\n\n**Drie provincies = 55 van 101 clubs (54%).** Zuid-Holland is de dichtste rugbyprovincie van Nederland én de thuisregio van HÏ Grip en de bestaande partners (Concordia Delft, Lyra, Spirit, Sport 2000 Naaldwijk/Nootdorp).\n\n**Studentenrugby** (NSRB, 15 verenigingen): LSRG Leiden, Ascrum Amsterdam, Thor Delft, DSR-C Delft, RSRC Rotterdam, USRS/RUS/VSRC Utrecht, Cadetten Breda, Obelix Nijmegen, Elephants Eindhoven, Tarantula Tilburg, GSRC Groningen e.a. Dit is exact de 18–25-doelgroep, geconcentreerd, met eigen besturen (één beslisser voor een clubdeal) en een sterke kleedkamer- en borrelcultuur.\n\nDigitaal is de community klein: @rugby.nederland 22K volgers, @ereklasserugby 3K, @damesrugbynederland 1,3K, @delta.rugbynederland 2,2K, clubaccounts 1–3K. Het echte bereik zit offline: clubhuis, derde helft, team-WhatsApp, clubnieuwsbrieven, rugby.nl en de nieuwsbrief van Rugbymagazijn.\n\n### 3. Regels — mag het?\n\n| Bron | Wat er staat | Gevolg |\n|---|---|---|\n| World Rugby Law 4.2 | Speler draagt \"jersey, shorts and underwear, socks and boots\" | Sokken zijn verplicht, type niet voorgeschreven |\n| Law 4.3 (toegestane extra's) | o.a. scheenbeschermers onder de sokken, tights onder shorts en sokken, noppen | Gripsokken niet genoemd — hoeft ook niet |\n| Law 4.4 (verboden) | \"buckles, clips, rings, hinges, zippers, screws, bolts or rigid material or projection\" | Siliconen grip is niet rigid; geen verbod |\n| Law 4.5–4.6 | Referee mag kleding altijd gevaarlijk/illegaal verklaren; inspectie vóór de wedstrijd | Theoretisch risico, in de praktijk nul: de gripsok zit onder de clubkous, in de schoen |\n| Regulation 12, Schedule 1 | Sokken alleen genoemd bij scheenbeschermers (≤ 0,5 cm, onder de sok); geen sokspecificatie, geen keuring | Geen World Rugby-approval vereist |\n| Rugby Nederland VWW Algemeen 2026-2027 §3.0.7.5 | \"Wedstrijdkleding dient te voldoen aan de normen van World Rugby (Laws of Rugby Law 4 en Regulation 12)\"; verder alleen unieke rugnummers en contrasterende kleuren | Geen Nederlandse extra regel, geen kleurregel |\n\nConclusie: **toegestaan op elk niveau, zonder kleurvoorschrift.** In de praktijk dragen spelers de gripsok onder de (afgeknipte) clubkous — internationaal de standaardmethode (\"cut sock\"), zodat de clubkleuren zichtbaar blijven.\n\n### 4. Wat rugbyers nu dragen en kopen\n\nNederlandse verkooppunten met gripsokken voor rugby (gecontroleerd 21-9-2026):\n\n| Aanbieder | Product | Prijs | Maten | Opvallend |\n|---|---|---|---|---|\n| Decathlon (huismerk Offload) | Antislip rugbysokken R500 halfhoog | € 8,99 | — | Copy noemt letterlijk \"meer steun in scrums\"; 3–4× per week gebruik |\n| Decathlon marketplace / stepl-rugby.com | Stepl Match Sock Grip (Italië) | € 28,00 | 37/40 · 41/44 · 45/48 | \"5 Top 14-clubs, 20.000+ spelers\"; compressie, versterkte hiel/teen |\n| Rugbymagazijn (Bussum, winkel + B2B-portaal) | ATAK Classic Mid Leg Grip | € 9,50 | 35-38 · 39-41 · 42-45 | **39-41 en 42-45 uitverkocht** |\n| Rugbymagazijn | Rugby Bricks Hot Stepper | € 24,95 → € 14,95 | 37-40 · 41-43 · 44-46 | **41-43 en 44-46 uitverkocht**; \"getest door Black Ferns/Springboks\" |\n| All About Rugby (Den Bosch, winkel) | Gilbert, Canterbury, Ellis | — | — | geen gripsokken gevonden; wel clubkits op maat |\n| Rugby-shop.nl, De RugbySpecialist, Ultimate Sports (Enschede) | — | — | — | niet gecontroleerd (site geblokkeerd / geen data) |\n\nInternationaal is de categorie geaccepteerd: rugbymerk Canterbury verkoopt een Mid Calf Grip Sock met Premgripp, daarnaast Grip Star, SoxPro, ATAK, Gain The Edge en OXEN. Rugbyretailers noemen gripsokken \"standaard uitrusting van jeugd tot internationals\" — dat zijn verkopende partijen, dus richtinggevend, geen bewijs.\n\nNederlandse gripsokkenmerken (Proskary, TapeDesign via grip2perform.nl, Stepzz, Fitsockr, Trusox) hebben geen rugbypagina of rugbypositionering, voor zover gevonden. Proskary noemt rugby alleen in een opsomming van sporten.\n\n**Prijspositie HÏ Grip:** € 17,99 zit precies tussen de budgetlaag (Decathlon/ATAK ± € 9) en de premiumlaag (Stepl € 28, Rugby Bricks € 24,95). Met 7 features, 15–20 mmHg compressie, Coolmax en het categoriebewijs (1,17 vs 0,60, Apps et al. 2022) is dat verdedigbaar. B2B-staffel € 7,00–8,20 per paar bij 6–239 stuks, personalisatie vanaf 150 stuks à € 8,70 — zie [Performance Grip Socks 2.0](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Product/Performance%20Grip%20Socks%202.0.md).\n\n**Het huidige alternatief** van de meeste Nederlandse rugbyers is simpelweg: de dikke clubkous zonder gripsok, soms twee paar sokken of tape om de kous omhoog te houden. De echte concurrent is gewoonte, niet een merk.\n\n### 5. Wat de rugbyer wil — per positie\n\n| Positie / situatie | Pijn | Wat de gripsok doet | Bewijs |\n|---|---|---|---|\n| Forwards (props, tweede rij) in de scrum | Voet schuift in de schoen bij het duwen; kracht lekt weg | Voet, sok en schoen bewegen als één geheel | Rugby Bricks-teamtest: props \"way more stable in scrums, could push harder without sliding\"; Decathlon claimt \"meer steun in scrums\" |\n| Backs en sevens-spelers | Sidesteps, sprints, afremmen op nat gras | Minder verschuiving van de voorvoet, snellere slalom | Apps et al. 2022 (categoriebewijs, al in de vault) |\n| Kicker (fly-half, fullback) | Standbeen moet stil staan bij de trap | Stabiliteit standvoet | Rugby Bricks-test (\"kicking stability\") — anekdotisch |\n| Iedereen, hele seizoen | Blaren in de pre-season (augustus) en bij 80 minuten + warming-up; natte, modderige velden oktober–maart | Minder wrijving huid/sok/schoen; Coolmax voert vocht af | Eigen productwaarheid; de blaarclaim is voordeel-taal uit de one-pagers |\n| Clubkous-cultuur | Clubkousen zijn dik, gestreept en verplicht zichtbaar | Gripsok eronder, clubkous afknippen of als tube | Internationale \"cut sock\"-praktijk |\n\nWinmoment (persona Fanatieke Sporter): de scrum die vooruit gaat, de tackle die staat, de finale in mei. Rugby-jargon voor copy: scrum, ruck, maul, line-out, tackle, sidestep, pre-season, derde helft, forwards/backs, Ereklasse, Oranje.\n\n### 6. Kanalen, momenten en beïnvloeders\n\nKalender (bron: rugby.nl, jaarverslag, eventsites):\n\n| Moment | Wanneer | Waarom relevant |\n|---|---|---|\n| Pre-season + competitiestart | augustus – begin september (2025: 8 sept) | Nieuwe uitrusting wordt gekocht; blaren-seizoen |\n| Rotterdam Cup (Rugby Topsport Rotterdam) | eind augustus | Thuisregio, pre-season, al kandidaat in [Voorbeelden Gevonden Organisaties (Events)](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20B%20-%20Samenwerkingen/Voorbeelden%20Gevonden%20Organisaties%20%28Events%29.md) |\n| Winterstop / feestdagen | december – januari | Cadeau-moment; natte velden |\n| Jeugdfinales (Cubs/Junioren/Colts) | april (2026: 11 april, NRCA) | Ouders + jeugd van de beste clubs op één plek |\n| Ereklasse-finaledag heren + dames | eind mei (2026: 30 mei, NRCA Amsterdam) | Hoogtepunt van het seizoen, vrijwilligersdag ME \\| WE |\n| NK Sevens jeugd + Amsterdam Sevens | mei – juni (Amsterdam Sevens 2026: 6–7 juni, 100+ teams, duizenden bezoekers) | Sevens = sprint- en sidestepsport: hoogste productrelevantie |\n| Dukes Jeugdtoernooi | 6–7 juni, Den Bosch | Internationaal jeugdtoernooi (€ 85 per team) |\n| Ameland Beach Rugby Festival / North Sea Beach Rugby Den Haag | juni (Ameland: ~130 teams, ~6.000 spelers, grootste van Europa; Den Haag 28 juni) | Grootste concentratie rugbyers — maar blootsvoets op zand: alleen naamsbekendheid, geen productmoment |\n| Bondsdagen TBM, Landelijk Mini Festival, Girls Rugby-events | door het seizoen | Ouders; maar TBM valt grotendeels onder maat 35 |\n\n**Kanalen die werken in rugby:** clubdeal + clubshop (via de kledingcommissie), samplepakketten in de kleedkamer, coach en fysio als adviseur, Rugbymagazijn-nieuwsbrief en B2B-portaal, rugby.nl-nieuws, Eyecons-streams (Ereklasse), Instagram alleen als ondersteuning (bereik klein). Rugby Nederland heeft partners voor kleding (Errea), materiaal (Rhino), reizen, bier en loterij — **geen sokkenpartner**: dat slot is open.\n\n**Wie beïnvloedt de aankoop:** de teamgenoot in de kleedkamer (\"wat draag jij?\"), de coach/trainer, de fysio (blaren, enkels — Fysio Cura Plaza is RN-partner), de kledingcommissie/kit-coördinator van de club (clubdeal), het studentenbestuur (praeses/materiaalcommissaris), ouders bij Cubs/Junioren, en als geloofwaardigheidsanker: Oranje-spelers (in de [Influencer Database](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/Influencers_Creators/Influencer%20Database.md) staan Pleuni Kievit en Famke Deelstra al als startpunt) en Rugby Nederland zelf.\n\n### 7. Het 10-vragenkader ingevuld\n\n| # | Vraag | Antwoord voor rugby |\n|---|---|---|\n| 1 | Wie precies? | Spelende senioren en Colts (16+) in Zuid-Holland, Noord-Holland en Brabant, met als speerpunt (a) Ereklasse/Future-spelers als bewijsdragers, (b) de 15 studentenclubs (18–25, één beslisser per club), (c) dames XV en Girls Rugby als snelst groeiend segment. |\n| 2 | Waar? | Fysiek: 55 clubs in ZH/NH/NB, NRCA Amsterdam (finales), Rotterdam Cup, Amsterdam Sevens. Digitaal: @rugby.nederland (22K), clubaccounts, rugby.nl, Rugbymagazijn-nieuwsbrief, team-WhatsApp. |\n| 3 | Wat willen ze? | Vaste voet in de schoen bij scrum en sidestep, geen blaren in de pre-season en na 80 minuten, droge voeten op natte velden — en erbij horen (clubkleuren blijven zichtbaar). |\n| 4 | Huidig alternatief? | Clubkous zonder gripsok (gewoonte), soms twee paar sokken of tape; een kleine groep koopt Decathlon R500 (€ 8,99) of ATAK/Rugby Bricks via Rugbymagazijn — herenmaten uitverkocht. |\n| 5 | Overtuigende koopreden? | \"Je scrum gaat vooruit omdat je voet niet meer schuift\" + 95% meer grip (categoriebewijs) + een Nederlands merk dat wél op voorraad is, voor € 17,99 tussen budget en premium in. Wat er anders gebeurt: kracht lekt weg in de scrum, blaren in augustus. |\n| 6 | Whole product? | Rugby-sportpagina + sportgids met het \"mag het?\"-antwoord en een knip-je-clubkous-instructie (video), rugbyfoto (ontbreekt, zie [Sportlanding-systeem (21-9-2026)](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Sportlanding-systeem%20%2821-9-2026%29.md)), clubdeal-formule met personalisatie (MOQ 150), beschikbaarheid bij Rugbymagazijn/All About Rugby, bewijs van een Ereklasse-speler en een dames XV-speler, wear-test-resultaat na één seizoen contactsport. |\n| 7 | Hoe bereiken? | Clubdeals in Zuid-Holland (Rotterdamse RC, RSRC, Delft, Haagsche RC, DIOK), samplepakketten kleedkamer, studentenclubs, Rugbymagazijn-listing, Rotterdam Cup en Amsterdam Sevens, content per positie (forwards/backs/kicker), Rugby Nederland-partnerslot. |\n| 8 | Wie beïnvloedt? | Teamgenoten, coach, fysio, kledingcommissie, studentenbestuur, ouders (Cubs/Junioren), Oranje-spelers, Rugby Nederland. |\n| 9 | Wanneer veroverd? (voorstel) | Einde seizoen 2027-2028: ≥ 5 clubdeals waarvan ≥ 2 Ereklasse-clubs · 2 ambassadeurs (heren Ereklasse + dames XV) · listing bij Rugbymagazijn · positie 1–3 op \"gripsokken rugby\" en \"antislip rugbysokken\" · ≥ 500 paar per seizoen naar rugbyers (≈ 3% van de spelende leden) · rugby meetbaar als sport bij ≥ 15% van de D2C-orders (vereist post-purchase vraag \"welke sport?\"). |\n| 10 | Volgende beachhead? | **Hockey**: dezelfde club- en kousencultuur (scheenbeschermer + kous, sokken afknippen), dezelfde Randstad-sportparken naast de rugbyvelden, ruim tien keer zoveel leden. Het rugbybewijs (\"gedragen in de Ereklasse\") is daar direct bruikbaar. |\n\n### 8. Rekensom — wat rugby maximaal kan opleveren\n\nUitgangspunten: 19.000 leden, ~94% spelend ≈ 17.900; minus geschat 30–40% jeugd onder maat 35 → **adresseerbaar ≈ 11.000–12.500 spelers**. Adviesprijs € 17,99, twee paar per seizoen.\n\n| Scenario | D2C | B2B (clubdeals à 150 paar gepersonaliseerd, € 8,70) | Totaal per jaar |\n|---|---|---|---|\n| Pilot (3% D2C, 5 clubs) | ~350 spelers × 2 × € 17,99 ≈ € 12.500 | 5 × € 1.305 ≈ € 6.500 | **≈ € 19.000** |\n| Dominant (10% D2C, 20 clubs) | ~1.200 × 2 × € 17,99 ≈ € 43.000 | 20 × € 1.305 ≈ € 26.000 | **≈ € 69.000** |\n\nDominantie in rugby — een niveau dat geen enkel merk in Nederland bereikt heeft — levert dus grofweg twee derde van de 2026-omzetdoelstelling (€ 100.000, [Strategische Keuzes](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md)). Dat maakt rugby een uitstekende plek om te *winnen* en een slechte plek om van te *leven*: de opbrengst is het bewijs en de clubreferenties; het volume komt uit voetbal (hetzelfde kous-knip-gedrag, ruim 60× groter) en straks hockey.\n\n### 9. Risico's en productgaten\n\n- **Maat 43–47 is de bovengrens.** Forwards met maat 48+ vallen buiten het assortiment; Stepl gaat tot 45/48. Laag volume, hoge zichtbaarheid (het zijn precies de spelers met het scrum-argument). Er zijn vier ongebruikte EAN's (zie [Performance Grip Socks 2.0](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Product/Performance%20Grip%20Socks%202.0.md)) — meet eerst de vraag via de pilotclubs.\n- **Maat 35 is de ondergrens.** TBM en jonge Cubs vallen buiten; ouders van die groep zijn (nog) geen doelgroep.\n- **Geen duurzaamheidsbewijs voor contactsport.** Er is geen test van een seizoen scrums, modder en wasbeurten. Geen claim \"gaat een seizoen mee\" maken tot een wear-test dat onderbouwt (de formuleringsregel in [Performance Grip Socks 2.0](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Product/Performance%20Grip%20Socks%202.0.md) §3 geldt hier ook).\n- **Performance Tubes passen niet bij gestreepte clubkousen.** Voor rugby werkt alleen: gripsok onder de eigen (afgeknipte) clubkous, óf tubes in clubkleuren via personalisatie. Instructiecontent is dus onderdeel van het product.\n- **Beach-events zijn blootsvoets.** Ameland en North Sea Beach Rugby trekken de meeste rugbyers, maar niemand draagt daar sokken. Alleen inzetten voor naamsbekendheid, niet voor verkoop of demo.\n- **Klein bereik op social.** Influencer-search in rugby levert nano-accounts (< 5K) op; prima voor bewijs, niet voor bereik. Bereik loopt via clubs.\n- **Opportuniteitskosten.** Elke euro naar rugby is een euro niet naar voetbal; de keuze is te verantwoorden zolang rugby als bewijsleverancier voor voetbal en hockey wordt ingezet (§8).\n- **WK 2027 zonder Oranje.** Het WK (oktober–november 2027, Australië) geeft rugby media-aandacht, maar zonder Nederlandse deelname is er geen nationale hype om op mee te liften.\n\n## Acties\n\n- [ ] P1 · Rugby-sportpagina `/pages/gripsokken-voor-rugby` afmaken en publiceren: rugbyfoto laten schieten (scrum, voet in schoen), FAQ \"Mag je gripsokken dragen bij rugby?\" met het Law 4/VWW-antwoord uit §3, link naar het product\n- [ ] P1 · Rugby-sportgids schrijven in `03_Website_Agent/Content/Sportgidsen/` per positie (forwards/scrum, backs/sevens, kicker) met knip-je-clubkous-instructie\n- [ ] P1 · Pilot clubdeals Zuid-Holland: Rotterdamse RC, RSRC en de Delftse clubs benaderen met samples en een wear-test (10 spelers, één seizoen) in ruil voor foto's en quotes\n- [ ] P1 · Rugbymagazijn (Bussum, B2B-portaal) benaderen als retailer — beide gripsokken daar op 21-9-2026 in herenmaten uitverkocht, HÏ Grip als Nederlands alternatief met voorraad\n- [ ] P2 · Post-purchase vraag \"Welke sport speel je?\" toevoegen zodat het rugby-aandeel in D2C-orders meetbaar wordt (meetpunt vraag 9)\n- [ ] P2 · Twee rugby-ambassadeurs werven (één Ereklasse heren, één dames XV) via de RUGBY-rijen in de Influencer Database\n- [ ] P2 · Activatie beoordelen voor Rotterdam Cup (eind augustus 2027) en Amsterdam Sevens (juni 2027); Ameland en North Sea Beach Rugby alleen voor naamsbekendheid\n- [ ] P2 · Rugby Nederland vragen naar het open sokkenpartner-slot (Errea kleding, Rhino materiaal): voorwaarden en kosten opvragen bij het bestuurslid Commercie\n- [ ] P2 · All About Rugby (Den Bosch), Rugby-shop.nl, De RugbySpecialist en Ultimate Sports controleren op gripsok-assortiment en benaderen\n- [ ] P2 · Homepage-FAQ \"Mag je gripsokken dragen bij rugby?\" (GEO-plan actie 3) invullen met het geverifieerde antwoord: ja — Law 4 verbiedt alleen harde materialen, VWW §3.0.7.5 verwijst alleen naar Law 4/Regulation 12\n- [ ] P3 · Maat 48–50 verkennen voor forwards (vier vrije EAN's); vraag eerst meten bij de pilotclubs\n- [ ] P3 · Lars bevestigt vraag 9 (meetpunt) en vraag 10 (hockey) voor rugby in Beachhead Strategie.md\n\n## Bronnen\n\n- Rugby Nederland, Jaarverslag 2025-2026 (pdf, juni 2026) — 100 clubs, > 19.000 leden (p.12); competitiestructuur en kampioenen (p.33–37); Girls Rugby (p.29–30); geen WK-kwalificatie (p.41): https://23g-sharedhosting-rugby.s3.eu-west-1.amazonaws.com/app/uploads/2026/06/25104659/Jaarverslag-2025-2026.pdf\n- Rugby Nederland, vacaturepagina (\"ongeveer 18.500 leden en 100 erkende rugbyclubs\", 2026): https://rugby.nl/organisatie/vacatures/\n- Rugby Nederland, VWW Algemeen 2026-2027 v1, §3.0.7.5 (kleding = Law 4 + Regulation 12): https://23g-sharedhosting-rugby.s3.eu-west-1.amazonaws.com/app/uploads/2026/09/03172946/3.0-VWW-Algemeen-2026-2027-v1.pdf\n- Rugby Nederland, partners (Errea, Rhino, Corendon, Grolsch, Nederlandse Loterij, Fysio Cura Plaza): https://rugby.nl/organisatie/partners/\n- Rugby Nederland, competitie-opzet (prestatie- vs participatiesport): https://rugby.nl/rugby/spelvormen/competitie/ · competitiestart 2025-2026 (8 sept 2025): https://rugby.nl/start-competitie-voor-jeugd-en-senioren/\n- World Rugby, Law 4 Permitted clothing: https://passport.world.rugby/laws-of-the-game/laws-by-number/4-permitted-clothing/\n- World Rugby, Regulation 12 (Schedule 1, players' dress): https://www.world.rugby/wr-resources/World_Rugby_Handbook/EN/pubData/source/files/Regulation12_1.pdf\n- Wikipedia, Rugby Nederland (ledenreeks 2010–2024): https://nl.wikipedia.org/wiki/Rugby_Nederland · Lijst van Nederlandse rugbyclubs (101 clubs per provincie): https://nl.wikipedia.org/wiki/Lijst_van_Nederlandse_rugbyclubs · Ereklasse rugby: https://nl.wikipedia.org/wiki/Ereklasse_rugby\n- Rugby Factsheet (AAC/RugbyClub Amsterdam, april 2024) — +63% 2013–2022, > 16.000 spelend: https://rugbyclub.amsterdam/wp-content/uploads/2024/04/Rugby-Factsheet.pdf\n- SportKnowhowXL, \"De rugbysport groeit, maar staat de sportiviteit onder druk?\" (29-8-2023) — vrouwen 19+ verdubbeld: https://www.sportknowhowxl.nl/opinie/de-rugbysport-groeit-maar-staat-de-sportiviteit-onder-druk\n- NSRB, lidverenigingen studentenrugby: https://nsrb.nl/lidverenigingen/\n- Decathlon, Offload antislip rugbysokken R500 (€ 8,99, \"meer steun in scrums\"): https://www.decathlon.nl/p/antislip-rugbysokken-r500-zwart-halfhoog/_/R-p-178331 · Stepl Match Sock Grip (€ 28, 5 Top 14-clubs): https://stepl-rugby.com/en/products/match-sock-grip-chaussette-performance-antiderapante\n- Rugbymagazijn, ATAK Classic Mid Leg (€ 9,50): https://rugbymagazijn.nl/products/atak-classic-mid-leg-grip-sokken-wit-kopie-voor-zwart · Rugby Bricks Hot Stepper (€ 24,95 / € 14,95): https://rugbymagazijn.nl/products/hot-stepper-grip-sokken-van-rugby-bricks · winkel Bussum + B2B-portaal: https://rugbymagazijn.nl/pages/contact\n- All About Rugby ('s-Hertogenbosch): https://allaboutrugby.nl/\n- Rugby Bricks, teamtest gripsokken vs gewone sokken (scrum-stabiliteit, anekdotisch): https://rugbybricks.com/blogs/rugby-training/grip-socks-vs-traditional-socks-we-put-them-to-the-test-in-a-full-rugby-training\n- Rugbystuff, \"What are grip socks\" (cut-sock-methode): https://rugbystuff.com/blogs/rugby-stuff-news/what-are-grip-socks\n- Canterbury Mid Calf Grip Sock (categorievalidatie): https://www.worldrugbyshop.com/products/canterbury-mid-calf-grip-sock\n- Amsterdam Sevens (6–7 juni 2026, 100+ teams): https://www.aacrugby.com/sevens/ · Ameland Beach Rugby Festival (~130 teams, ~6.000 spelers): https://beachrugby.nl/tournament/ · Dukes Jeugdtoernooi: https://www.dukesrugby.nl/dukes-jeugd-toernooi/ · Jeugdfinales 2026: https://rugby.nl/geslaagde-jeugdfinales-vol-sfeer-en-spanning/\n- Instagram-bereik (21-9-2026): @rugby.nederland 22K, @ereklasserugby 3K, @damesrugbynederland 1,3K, @delta.rugbynederland 2,2K\n- Vault: [Beachhead Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Beachhead%20Strategie.md), [Performance Grip Socks 2.0](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Product/Performance%20Grip%20Socks%202.0.md), [GEO Plan (2026-09-21)](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/SEO/GEO%20Plan%20%282026-09-21%29.md), [SEO Strategie & Keywords](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/SEO/Strategie/SEO%20Strategie%20%26%20Keywords.md), [Sportlanding-systeem (21-9-2026)](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Sportlanding-systeem%20%2821-9-2026%29.md), [Influencer Database](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/Influencers_Creators/Influencer%20Database.md), [Voorbeelden Gevonden Organisaties (Events)](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20B%20-%20Samenwerkingen/Voorbeelden%20Gevonden%20Organisaties%20%28Events%29.md), [Strategische Keuzes](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md)\n\n## Aantekeningen",
   "bron": "los",
   "bronbestand": "",
   "bronbestand_url": null,
   "categorie": "Merk",
   "datum": "2026-09-21",
   "deadline": "",
   "gerelateerd": [
    "2026-09-04-werkdossier-stand-van-zaken",
    "2026-09-15-seo-audit",
    "2026-09-24-financieel-plan-2027-2031-bmc-2031",
    "2026-09-21-weekoverzicht",
    "2026-09-25-seo-audit",
    "2026-10-02-vault-review"
   ],
   "id": "2026-09-21-beachhead-rugby",
   "kansen": [],
   "kerncijfers": [],
   "kerntitel": "",
   "prioriteit": "P1",
   "routine": "",
   "samenvatting": "Rugby in Nederland is klein (100 clubs, ruim 19.000 leden, 54% van de clubs in Zuid-Holland, Noord-Holland en Brabant) maar groeit, kent geen enkel verbod op gripsokken en heeft geen Nederlands gripsokkenmerk — de winkels die ze verkopen zijn in herenmaten uitverkocht. Voor HÏ Grip is rugby een geloofwaardigheids-beachhead (dominantie is haalbaar via een handvol Zuid-Hollandse clubs), geen volume-beachhead: zelfs bij dominantie blijft de omzet ver onder de €100k-doelstelling.",
   "status": "nieuw",
   "titel": "Beachhead rugby — markt, regels, concurrentie en de 10 kernvragen",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-21-beachhead-rugby.md",
   "vervangt": [],
   "wat_niet_lukte": ""
  },
  {
   "acties": [],
   "body_md": "# Growth Radar — Social naar website (TikTok Shop NL, Meta-attributie)\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\nTwee bevindingen op de vrijdagfocus \"social naar website\". TikTok Shop is sinds 15 juni 2026 officieel live in Nederland en koppelt rechtstreeks aan Shopify — dat opent een route waarbij de hele klantreis (ontdekken, valideren via creators, afrekenen) binnen TikTok zelf plaatsvindt, in plaats van door te klikken naar higrip.nl. Daarnaast verwijderde Meta op 12 januari 2026 de 7- en 28-dagen view-attributievensters uit de Ads Insights API, wat de noodzaak van server-side tracking (CAPI) vergroot zodra HÏ Grip met Meta-advertenties start.\n\n## Bevindingen\n\n**18 september 2026 · vrijdag**\n\n### TikTok Shop is live in Nederland en koppelt direct met Shopify\n\nTikTok Shop lanceerde op 15 juni 2026 officieel in Nederland, samen met België, Polen en Oostenrijk. Verkopers konden zich vanaf 1 juni aanmelden via seller-nl.tiktok.com; de registratie loopt in vier stappen (bedrijfsgegevens/KVK, hoofdvertegenwoordiger, winkelinformatie inclusief webshop-koppeling, beoordelingsaanvraag) met beoordeling binnen 1-2 werkdagen.\n\nHet kernverschil met de oude situatie: waar social eerder alleen doorverwees naar een externe webshop, vindt de hele klantreis nu binnen TikTok zelf plaats — ontdekken, zoeken, valideren via creators en reacties, en afrekenen zonder de app te verlaten. Producten met snelle verzending krijgen een \"Fast Shipping\"-badge die conversie verder verhoogt. Nederlandse marketingbronnen (Twinkle) noemen dit expliciet een verschuiving \"van funnel naar loop\", met de waarschuwing dat last-click-attributie een groot deel van dat verhaal mist.\n\nDe Shopify-koppeling verloopt via losse apps (SlashCart vanaf $9,99/maand, Optima gratis te installeren met betaalde upgrades) voor productsync, voorraad en orderafhandeling. Platformkosten: 2-8% commissie + $0,30 per transactie (meeste categorieën 5-6%), plus optioneel 10-20% creator-affiliate-commissie — vergelijkbaar met het commissiemodel dat al gepland stond voor Instagram/TikTok-creators in de growth-radar-backlog.\n\n> **Voor higrip.nl:** raakt rechtstreeks backlogpunt 9 (\"Padel-creators op prestatiebasis\"), dat ervan uitging dat creator-content doorklikt naar higrip.nl. Padel is de grootste groeimarkt van HÏ Grip en precies het soort product (laag prijspunt, visueel te demonstreren, herhaalaankoop) dat goed past bij TikTok Shop. Geen vervanging van het eigen-site-werk (bewijspagina, SEO) — wel een aanvullend kanaal dat nu pas geografisch beschikbaar is.\n\n### Meta heeft de 7- en 28-dagen view-attributievensters verwijderd\n\nOp 12 januari 2026 verwijderde Meta permanent de 7-dagen- en 28-dagen-view-attributievensters uit de Ads Insights API. Gerapporteerde conversies daalden daardoor 15 tot 40% bij veel adverteerders. Gecombineerd met bredere iOS-privacybeperkingen — de meeste iOS-gebruikers hebben ATT uitgeschakeld, waardoor pixel-tracking op mobiele Safari nagenoeg dood is — lopen de gaten in 2026 op tot 50-70% van de conversies. Meta's aanbevolen instelling voor e-commerce is nu 7-dagen klik, 1-dag view. Op 15 april 2026 bracht Meta een \"one-click\" CAPI-installatie uit die server-side tracking laagdrempeliger maakt.\n\n> **Voor higrip.nl:** geen actieve Meta-advertenties op dit moment, dus geen blokkerende actie. Verandert wel de volgorde van het bestaande CAPI-punt (10): server-side tracking moet vanaf dag 1 van een toekomstige Meta-campagne staan, niet als latere toevoeging.\n\n## Acties\n\n_Acties uit dit rapport staan in de growth-radar-backlog (`ACTIEBACKLOG.md`, punt 13 nieuw, punten 9 en 10 bijgewerkt) en komen via het dashboard onder NU AANDACHT binnen — hier niet gedupliceerd._\n\n## Bronnen\n\n- [TikTok Shop in Nederland maakt de verschuiving zichtbaar: van funnel naar loop — Twinkle](https://twinklemagazine.nl/2026/06/tiktok-shop-in-nederland-maakt-de-verschuiving-zichtbaar-van-funnel-naar-lo/index.xml)\n- [TikTok introduceert TikTok Shop in Nederland — TikTok Newsroom](https://newsroom.tiktok.com/tiktok-introduceert-tiktok-shop-in-nederland?lang=nl-NL)\n- [Een TikTok Shop opzetten via Seller Center — TikTok for Business](https://ads.tiktok.com/resources/help/article/set-up-tiktok-shop-using-tiktok-seller-center?lang=nl-NL)\n- [TikTok Shop Fees Explained: Complete 2026 Cost Breakdown — Slayva](https://slayva.com/tiktok-shop-fees/)\n- [Shopify for TikTok Shop in 2026: Setup & Selling Guide — Mastroke](https://blog.mastroke.com/social-media-marketing/shopify-for-tiktok-shop-in-2026-how-to-connect-them-and-what-sells/)\n- [Meta Attribution Window Changes 2026: Fix Your Tracking — Conversios](https://www.conversios.io/blog/meta-attribution-window-changes-2026-fix-your-tracking/)\n- [Meta Ads Attribution in 2026: What Changed, Why It Matters, and How to Fix It — DOJO AI](https://www.dojoai.com/blog/meta-ads-attribution-2026-changes-fixes)\n- Origineel: `C:\\Users\\Test\\.claude\\research\\growth-radar\\rapporten\\2026-09-18-social.md`\n\n## Aantekeningen",
   "bron": "routine",
   "bronbestand": "C:\\Users\\Test\\.claude\\research\\growth-radar\\rapporten\\2026-09-18-social.md",
   "bronbestand_url": null,
   "categorie": "Social",
   "datum": "2026-09-18",
   "deadline": "",
   "gerelateerd": [
    "2026-09-15-growth-radar-basislijn",
    "2026-09-25-growth-radar-social",
    "2026-10-03-growth-radar-social-content"
   ],
   "id": "2026-09-18-growth-radar-social",
   "kansen": [],
   "kerncijfers": [],
   "kerntitel": "",
   "prioriteit": "P2",
   "routine": "growth-radar",
   "samenvatting": "TikTok Shop is sinds 15 juni 2026 live in Nederland en koppelt direct met Shopify, wat de social-funnel verandert van doorklikken naar in-app afrekenen — relevant voor het bestaande creator-plan. Daarnaast verwijderde Meta in januari 2026 twee attributievensters uit de Ads Insights API, waardoor CAPI vanaf dag 1 van elke toekomstige campagne nodig is.",
   "status": "nieuw",
   "titel": "Growth Radar — Social naar website (TikTok Shop NL, Meta-attributie)",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-18-growth-radar-social.md",
   "vervangt": [],
   "wat_niet_lukte": ""
  },
  {
   "acties": [],
   "body_md": "# Growth Radar — CRO (Checkout Extensibility-deadline, prijs per paar)\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\nTwee bevindingen, beide direct gekoppeld aan bestaande P1-punten (GA4 purchase-event, gratis-verzendbalk richting 3-pack). Nieuwe backlogpunten 11 (P1) en 12 (P2) staan in de growth-radar-backlog.\n\n## Bevindingen\n\n**17 september 2026 · donderdag**\n\n### In het kort\nShopify's harde deadline om niet-Plus winkels over te zetten op Checkout Extensibility lag op 26 augustus — wie toen niet gemigreerd was, verloor stilzwijgend alle trackingscripts uit het oude checkoutsysteem. Dat raakt mogelijk direct de al bekende GA4-storing. Daarnaast: nieuw 2026-onderzoek bevestigt dat een per-stuk-prijs bij multipacks 5–15% conversiewinst oplevert, en die staat nergens op je productpagina.\n\n---\n\n### Checkout Extensibility-deadline is verstreken — controleer of je trackingscripts nog vuren\n\nShopify's migratiedeadline voor niet-Plus winkels (Basic, Shopify, Advanced, Pause and Build) naar Checkout Extensibility was 26 augustus 2026. Wie toen nog op het oude checkoutsysteem draaide, kreeg een automatische upgrade waarbij Shopify het complete \"Additional Scripts\"-veld leegtrok: Google Ads-conversietracking, Meta pixel, GTM-containers, affiliate-scripts en post-purchase apps stopten allemaal met werken.\n\nHet venijnige zit in de stilte. De checkout zelf blijft gewoon bestellingen verwerken — er verschijnt geen zichtbare fout in de winkelwagen of bij het afrekenen. Alleen de trackinglaag eronder valt weg, en dat merk je pas als je de cijfers gaat controleren.\n\n> **Voor higrip.nl:** Dit sluit direct aan op een al openstaand P1-punt: de GA4 key event `purchase` staat op nul op elk kanaal, deze en vorige week. Als `hi-grip.myshopify.com` op een niet-Plus plan zit en de migratie naar Checkout Extensibility nog niet (volledig) was afgerond vóór 26 augustus, is dit een directe, aanvullende verklaring — niet alleen \"key event niet aangevinkt\" maar mogelijk ook \"het script dat de data zou moeten leveren is drie weken geleden stilgezet.\"\n\n**Actie:** Controleer in Shopify admin → Instellingen → Checkout of er nog een \"Additional Scripts\"-sectie bestaat en of daar tracking in stond. Controleer parallel of Meta pixel en Google Ads-conversietracking via een officiële checkout-app/-extensie lopen in plaats van via het oude scriptveld. Voer dit uit vóórdat je de bestaande GA4-actie (key event aanvinken) als opgelost beschouwt — beide moeten samen kloppen.\n\n---\n\n### Per-stuk-prijs op multipacks: 5–15% conversiewinst die je nu laat liggen\n\n2026-onderzoek naar prijsweergave bevestigt een bekend ankerprincipe met concrete cijfers: bij bundels en multipacks levert het tonen van de prijs per stuk (naast de totaalprijs) 5 tot 15% meer conversie op dan alleen de totaalprijs. De verklaring is ankering: \"€6 per stuk (normaal €8,50)\" voelt tastbaarder en rationeler dan \"€36 voor het pakket\", ook al is de onderliggende informatie identiek.\n\nDit is geen nieuw fenomeen, maar de 2026-dataset maakt het een harde, kwantificeerbare business case in plaats van een vage UX-tip.\n\n> **Voor higrip.nl:** Je 1-pack/3-pack/5-pack-structuur is exact de bundelvorm waar dit op slaat. Uitgerekend: 1-pack = €14,99/paar, 3-pack = €13,99/paar (afgerond), 5-pack = €13,00/paar. Nergens in `snippets/product-information-content.liquid` staat dit per-paar-bedrag naast de variant-selector — de korting op grotere packs is dus onzichtbaar tenzij een klant het zelf uitrekent. Dit versterkt bovendien de al bestaande P1-actie over de gratis-verzendbalk: beide duwen in dezelfde richting, namelijk richting het 3-pack.\n\n**Actie:** Toon \"€X,XX/paar\" onder elke pack-optie in de variant-selector, herberekend op basis van de gekozen combinatie.\n\n---\n\n### Bronnen\n- [Shopify Checkout Extensibility for Non-Plus Stores: What Breaks on Aug 26](https://biscuitsbundles.com/blogs/learn/shopify-checkout-extensibility-for-non-plus-stores-what-breaks-on-august-26-2026-and-how-to-migrate-in-time)\n- [Shopify Checkout Extensibility August 26 Deadline: Important for Non-Plus Merchants](https://www.codilar.com/blog/shopify-checkout-extensibility-august-26-deadline5/)\n- [Shopify Redesigned Checkout for Higher Conversion](https://www.adbeacon.com/shopify-spring-2026-checkout-redesign-baseline/)\n- [E-Commerce Cart & Checkout Usability Research – Baymard](https://baymard.com/research/checkout-usability)\n- [The Anchoring Effect in Pricing](https://marketingagency.sg/anchoring-effect-pricing/)\n- [Price Anchoring in 2026: Definition, Strategy, Examples](https://www.impactanalytics.ai/blog/price-anchoring)\n- [Checkout Conversion Rate Benchmarks for Ecommerce 2026](https://mida-app.io/blog/checkout-conversion-rate-benchmarks-for-ecommerce/)\n\n## Acties\n\n_Acties uit dit rapport staan in de growth-radar-backlog (`ACTIEBACKLOG.md`) en komen via het dashboard onder NU AANDACHT binnen — hier niet gedupliceerd._\n\n## Bronnen\n\n- Origineel: `C:\\Users\\Test\\.claude\\research\\growth-radar\\rapporten\\2026-09-17-cro.md`\n\n## Aantekeningen\n\n- **Test · 2026-09-17 11:06** — Round-trip-test: deze aantekening hoort na /research-sync onder ## Aantekeningen in de vault te staan.",
   "bron": "routine",
   "bronbestand": "C:\\Users\\Test\\.claude\\research\\growth-radar\\rapporten\\2026-09-17-cro.md",
   "bronbestand_url": null,
   "categorie": "CRO",
   "datum": "2026-09-17",
   "deadline": "",
   "gerelateerd": [
    "2026-09-14-weekoverzicht",
    "2026-09-03-analytics-kpi-meetgat",
    "2026-09-15-regressiecheck",
    "2026-09-24-growth-radar-cro",
    "2026-09-25-growth-radar-social",
    "2026-10-01-growth-radar-cro"
   ],
   "id": "2026-09-17-growth-radar-cro",
   "kansen": [],
   "kerncijfers": [],
   "kerntitel": "",
   "prioriteit": "P1",
   "routine": "growth-radar",
   "samenvatting": "Shopify's deadline voor Checkout Extensibility (26 augustus 2026) heeft bij niet-Plus winkels stilzwijgend alle trackingscripts uit het oude checkoutveld gewist — mogelijk een tweede verklaring voor de GA4-storing naast het ontbrekende key event. Daarnaast: een prijs per paar bij multipacks levert 5–15% conversiewinst op en ontbreekt op de productpagina.",
   "status": "bekeken",
   "titel": "Growth Radar — CRO (Checkout Extensibility-deadline, prijs per paar)",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-17-growth-radar-cro.md",
   "vervangt": [],
   "wat_niet_lukte": ""
  },
  {
   "acties": [
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "/blogs/2630309_gripsokken-tijdens-pilates-yoga geeft nog 404.",
      "controle": "Zijn verouderde numerieke URL's met een 301 doorgestuurd?",
      "gecontroleerd": "2026-09-26",
      "methode": "site",
      "uitkomst": "open"
     },
     "id": "2026-09-16-seo-onderzoek-cloud-routine-website#3e155aa4",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "Verouderde URL's met numeriek ID en zonder `/pages/`-prefix in de Google-index controleren (HTTP-status) en 301'en naar de Shopify-equivalenten",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Checkt de HTTP-status van de geindexeerde oude URL's en maakt een redirect-CSV.",
      "wat_jij_doet": "CSV importeren in admin."
     }
    },
    {
     "afgevinkt": true,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "hreflang nl/en/x-default met juiste href en zelf-canonical op /, /en, /collections/gripsokken en /products/performance-gripsokken.",
      "controle": "Kloppen hreflang en canonicals tussen NL en /en?",
      "gecontroleerd": "2026-09-25",
      "methode": "site",
      "sinds": "2026-09-25",
      "uitkomst": "gedaan"
     },
     "id": "2026-09-16-seo-onderzoek-cloud-routine-website#5f5bdcde",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "hreflang en canonicals tussen higrip.nl en /en controleren — of besluit 4 uit het werkdossier (Engels uitzetten) nemen",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Afweging van het team.",
      "controle": "Maattabel-widget overwegen.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-16-seo-onderzoek-cloud-routine-website#875468b1",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "Maattabel-widget met schoenmaat-omrekening bij de variant-selector overwegen",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Bouwt een maattabel-widget met schoenmaat-omrekening in het testthema.",
      "wat_jij_doet": "Besluiten en publiceren."
     }
    },
    {
     "afgevinkt": true,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Routines/README.md (commit c237c17, 25-09) noemt 'De verwijderde routine website' en die staat niet meer in de statustabel.",
      "controle": "Is de cloud-routine 'website' uitgezet of gerepareerd?",
      "gecontroleerd": "2026-09-25",
      "methode": "vault",
      "sinds": "2026-09-25",
      "uitkomst": "gedaan"
     },
     "id": "2026-09-16-seo-onderzoek-cloud-routine-website#999a1dd0",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "Cloud-routine \"website\" (`trig_01BKt9WCeR9H92FDcS9HtPvV`) uitzetten of voorzien van repo + egress-toegang tot higrip.nl — draait nu dagelijks zonder de site te kunnen bereiken",
     "uitvoerbaar": null
    }
   ],
   "body_md": "# SEO-onderzoek cloud-routine \"website\" — publieke data, 16 september 2026\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\nRapport van de claude.ai-routine \"website\" (`trig_01BKt9WCeR9H92FDcS9HtPvV`, dagelijks 23:30 UTC, run `cse_016RYYiEW6zpxYL4gdBoz47n`). De routine had geen Shopify-toegang en geen netwerktoegang tot higrip.nl, dus alles is afgeleid van wat Google en Trustpilot tonen. Het rapport bevat twee content-drafts (padel-landingspagina, blog \"gripsokken vs. sportsokken\") en een actieplan. Geregistreerd op 17 september via `/research-nieuw` als eerste echte run van dat command.\n\n**Tegenstrijdig met geverifieerde vault-feiten — niet overnemen:**\n\n| Claim in het rapport | Wat de vault (geverifieerd) zegt |\n|---|---|\n| Trustpilot 4,5★ over 15 reviews | 4,6 uit 5 op 17 reviews (bij de bron opgehaald 3 sep, [Stand van Zaken — Werkdossier 2026-09-04](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Analyse/Stand%20van%20Zaken%20%E2%80%94%20Werkdossier%202026-09-04.md)) |\n| \"Geen sport-specifieke landingspagina's\" | `/pages/gripsokken-padel` bestaat en is goed (SEO-audit 15 sep); voetbalpagina staat lokaal klaar |\n| Alleen witte sok, twee maten 34-39 / 40-46 | Gripsok 1.0 (34-39/40-46) én 2.0 wit/zwart in 35-38/39-42/43-47 ([Performance Grip Socks 2.0](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Product/Performance%20Grip%20Socks%202.0.md)) |\n| \"Structured data ontbreekt vermoedelijk; voeg Product-schema met aggregateRating toe\" | Organization/WebSite/FAQPage zijn gebouwd; `aggregateRating` is juist **verwijderd** omdat er geen zichtbare reviews zijn — eerst reviewapp, dan schema (backlog punt 2) |\n| FAQPage-schema als groeihefboom | Google toont sinds 7 mei 2026 geen FAQ rich results meer ([2026-09-15-growth-radar-seo-content](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-15-growth-radar-seo-content.md)) |\n\nConcurrent \"Trusox\" komt in de vault niet voor (wel FitSockr, Tapedesign, Optigrip, Proskary) — onbevestigd.\n\n## Bevindingen\n\n### Wat wél nieuw is\n\n- **Verouderde URL-patronen in de Google-index.** Naast nette Shopify-slugs staan er pagina's zonder `/pages/`-prefix (`/algemene-voorwaarden`, `/winkel`) en URL's met een numeriek ID vóór de slug (`/2697390_hi-grip-zaalvoetbalsokken`, `/blogs/2630309_gripsokken-tijdens-pilates-yoga…`) — vermoedelijk restanten van het platform vóór Shopify. Ook minstens twee blog-handles (`/blogs/hi-grip/…` en `/blogs/trends/…`). Versnippert linkwaarde; controleren welke nog 200 geven en 301'en naar de Shopify-equivalenten.\n- **hreflang NL/EN.** `higrip.nl` en `higrip.nl/en` bestaan naast elkaar; het rapport vraagt om een check of `hreflang` en canonicals goed staan. Het werkdossier adviseert de Engelse versie uit te zetten — dat besluit staat nog open (beslispunt 4).\n- **Maatkeuze als afhaakreden.** Voorstel: maattabel-widget met schoenmaat-omrekening direct bij de variant-selector, niet alleen op de FAQ-pagina.\n- **Contentclusters die ontbreken volgens de index:** vergelijking (gripsokken vs. sportsokken, vs. concurrenten), onderhoud/gebruik (wassen, hoe vaak dragen), maatgids als eigen pagina, kids/jeugd. Sluit aan bij de hub-and-spoke-strategie uit het werkdossier.\n\n### Wat het rapport bevestigt (al in de vault)\n\n- Reviews opschalen via post-purchase-flow en zichtbaar op de productpagina (backlog punt 2).\n- Sport-specifieke landingspagina's (SEO-audit: 8 van 10 nog te vullen via `hi-sport-landing`).\n- Core Web Vitals / app-bloat auditen (werkdossier: 241 requests, 70 script-tags).\n- AI-zoekmachines: vraag-antwoordblokken, consistente feiten op één canonieke pagina, merkvermeldingen bij derden (basislijn §2, ai-search).\n- Bundel/herhaalaankoop en interne links blog ↔ product.\n\n### Content-drafts in het rapport\n\nTwee kant-en-klare drafts: een padel-landingspagina (SEO-titel \"Gripsokken voor Padel | Maximale Grip & Stabiliteit — HÏ Grip\") en een blogartikel \"Gripsokken vs. gewone sportsokken\" (~650 woorden, vraag/antwoord-opbouw). Beide gebruiken de verouderde productfeiten (2 maten, wit) en missen de merkstem (geen 1,17 / 95%, geen \"jij/je\"-toon consequent) — vóór gebruik herschrijven volgens [Brand Voice & Tone of Voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) en de vaste cijfers uit het werkdossier.\n\n### Actieplan van het rapport\n\nWeek 1 redirects + hreflang · week 1-2 structured data · week 2 drafts publiceren en meten in Search Console · week 2-3 reviewflow · week 3-4 maattabel-widget + bundel · doorlopend CWV-audit en 1 contentcluster per maand.\n\n## Acties\n\n- [ ] P3 · Verouderde URL's met numeriek ID en zonder `/pages/`-prefix in de Google-index controleren (HTTP-status) en 301'en naar de Shopify-equivalenten\n- [x] P3 · hreflang en canonicals tussen higrip.nl en /en controleren — of besluit 4 uit het werkdossier (Engels uitzetten) nemen\n- [ ] P3 · Maattabel-widget met schoenmaat-omrekening bij de variant-selector overwegen\n- [x] P3 · Cloud-routine \"website\" (`trig_01BKt9WCeR9H92FDcS9HtPvV`) uitzetten of voorzien van repo + egress-toegang tot higrip.nl — draait nu dagelijks zonder de site te kunnen bereiken\n\n## Bronnen\n\n- Rapport-artifact: https://claude.ai/artifact/H5KiVWmh665yX9yTTKUseH (16 sep 2026)\n- Routine-run: `cse_016RYYiEW6zpxYL4gdBoz47n` (claude.ai/code/routines → \"website\")\n- Shopify — Latest SEO Trends in 2026: https://www.shopify.com/blog/seo-trends\n- Ice Cube Digital — Shopify SEO Checklist 2026: https://www.icecubedigital.com/blog/shopify-seo-checklist-2026/\n- SpearPoint — SEO for Shopify 2026: https://www.thespearpoint.com/blog/seo-for-shopify-complete-guide\n\n## Aantekeningen",
   "bron": "los",
   "bronbestand": "https://claude.ai/artifact/H5KiVWmh665yX9yTTKUseH",
   "bronbestand_url": "https://claude.ai/artifact/H5KiVWmh665yX9yTTKUseH",
   "categorie": "SEO",
   "datum": "2026-09-16",
   "deadline": "",
   "gerelateerd": [
    "2026-09-15-seo-audit",
    "2026-09-04-werkdossier-stand-van-zaken",
    "2026-09-15-growth-radar-seo-content",
    "2026-09-16-growth-radar-ai-search",
    "2026-09-22-growth-radar-seo-content",
    "2026-09-23-seo-conversietest-run-1",
    "2026-09-25-evaluatie-routines"
   ],
   "id": "2026-09-16-seo-onderzoek-cloud-routine-website",
   "kansen": [],
   "kerncijfers": [],
   "kerntitel": "",
   "prioriteit": "P3",
   "routine": "",
   "samenvatting": "De dagelijkse cloud-routine \"website\" maakte op 16 september een SEO/CRO-rapport op basis van alleen publieke data (Google-index, Trustpilot) — higrip.nl zelf was geblokkeerd. Nieuw en bruikbaar: verouderde numerieke URL's in de index, een hreflang-check NL/EN en een maattabel-widget; vijf claims spreken geverifieerde vault-feiten tegen en zijn hier gemarkeerd.",
   "status": "bekeken",
   "titel": "SEO-onderzoek cloud-routine \"website\" — publieke data, 16 september 2026",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-16-seo-onderzoek-cloud-routine-website.md",
   "vervangt": [],
   "wat_niet_lukte": ""
  },
  {
   "acties": [],
   "body_md": "# Growth Radar — AI-search (checkout in AI is dood, feed is de ingang)\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\nVier bevindingen die vooral bestaande prioriteiten bevestigen: bewijspagina, gratis-verzendingsdrempel, productvideo en variant-ID's (verplaatst naar P1). Eén open vraag: verzendt higrip.nl naar de VS?\n\n## Bevindingen\n\n**16 september 2026 · woensdag**\n\n### In het kort\nHet grootste nieuws is dat ChatGPT's native checkout dood is: OpenAI stopte Instant Checkout in maart 2026 nadat het bij Walmart drie keer slechter converteerde dan een gewone doorklik. Het model dat wint is \"ontdekken in AI, kopen op je eigen site\" — dat bevestigt de bestaande backlogprioriteiten in plaats van nieuwe te creëren. Daarnaast is er een concreet gratis kanaal (Perplexity Merchant Program) dat mogelijk niet inzetbaar is zolang HÏ Grip niet naar de VS verzendt.\n\n---\n\n### ChatGPT's native checkout is gestopt — \"ontdekken in AI, kopen op je eigen site\" wint\nOpenAI lanceerde Instant Checkout op 29 september 2025, eerst met Etsy en daarna met Shopify-merken als Glossier, Vuori en Spanx. In maart 2026 werd de functie alweer stopgezet. Walmart mat dat checkout binnen ChatGPT ongeveer drie keer slechter converteerde dan doorklikken naar de eigen site — ook al leverde ChatGPT wel ongeveer twee keer zoveel nieuwe klanten op als reguliere zoekopdrachten.\n\nHet model dat nu standaard is: AI-assistenten (ChatGPT, Google AI Mode, Perplexity) doen de productontdekking en aanbeveling, maar de daadwerkelijke aankoop gebeurt op de eigen webshop van de retailer. De onderliggende protocollen (ACP van Stripe/OpenAI, UCP van Shopify/Google) faciliteren vooral productdata-uitwisseling voor die aanbevelingen, niet een volledige in-chat kassa.\n\n> **Voor higrip.nl:** Dit betekent dat je geen tijd hoeft te steken in een native AI-checkout-integratie. De winst zit op twee plekken die al in je backlog staan: geciteerd worden in het AI-gesprek (backlogpunt 4, bewijspagina) én een productpagina die converteert zodra iemand doorklikt vanuit ChatGPT of Gemini (backlogpunt 1, gratis-verzendingsdrempel, en punt 6, productvideo). Deze vondst verhoogt het belang van die punten, ze zijn niet langer \"aardig om te hebben\" maar de kern van je AI-zichtbaarheidsstrategie.\n\n**Actie:** Alleen volgen — geen nieuwe actie, wel prioriteitsbevestiging voor bestaande punten 1, 4 en 6.\n\n---\n\n### Schema-markup verhoogt AI-citaties zelf niet — specifieke cijfers en attribuutrijke data wel\nAhrefs volgde 1.885 pagina's die tussen augustus 2025 en maart 2026 JSON-LD-schema toevoegden en vond geen betekenisvolle stijging in citaties door Google AI Overviews, AI Mode of ChatGPT. Belangrijke kanttekening: de onderzochte pagina's hadden vooraf al 100+ AI Overview-citaties, dus de conclusie geldt vooral voor pagina's die al zichtbaar zijn — niet per se voor een pagina die nog moet doorbreken.\n\nWel bleek dat attribuutrijke schema — met ingevulde prijs, rating, specificaties — de citatiekans voor domeinen met lager gezag bijna verdubbelt, terwijl generieke schema niets doet. De sterkste hefboom blijft je organische positie zelf, gevolgd door het toevoegen van citeerbare bronnen, concrete cijfers en naam-en-toenaam-citaten in de tekst.\n\n> **Voor higrip.nl:** Dit onderbouwt met data waarom de volgorde in je backlog klopt: eerst echte reviews zichtbaar maken en dan pas `aggregateRating` vullen (punt 2), en een bewijspagina bouwen rond je eigen meetdata (punt 4). Niet het schema zelf overtuigt AI-modellen — de concrete cijfers erachter (1.17 wrijvingscoëfficiënt, 95% meer grip) doen dat, mits ze leesbaar in de tekst staan én, zodra je reviews live zijn, volledig ingevuld zijn in het schema.\n\n**Actie:** Geen nieuwe actie — bevestigt bestaande prioriteit van punt 2 en 4. Zorg dat het `aggregateRating`-schema straks volledig ingevuld is (rating, aantal, geen lege velden) zodra de reviewapp staat.\n\n---\n\n### Google Merchant Center wordt ook de ingang voor AI Mode-shopping, niet alleen voor Shopping-ads\nOp NRF 2026 kondigde Google vier AI-shoppingfuncties aan die allemaal op Merchant Center-feeddata leunen: Universal Commerce Protocol, Native Checkout, Business Agent en Direct Offers. Universal Cart laat gebruikers producten toevoegen vanuit Search, Gemini, YouTube of Gmail — weer gevoed door dezelfde productfeed. Eerste deelnemers zijn onder meer geselecteerde Shopify-winkels.\n\n> **Voor higrip.nl:** Backlogpunt 7 (variant-ID's controleren tegen de Merchant Center-eis van maart 2026) stond er al vanuit feed-compliance, maar diezelfde feed is nu ook de poort naar zichtbaarheid in Google's AI Mode-shoppinglaag. Eén foutieve of ontbrekende variant-ID kost je dus niet alleen een Shopping-ad, maar ook een aanbeveling in AI Mode.\n\n**Actie:** Punt 7 verplaatst van P2 naar P1 — zie bijgewerkte backlog.\n\n---\n\n### Perplexity's Merchant Program is gratis voor Shopify — mits je naar de VS verzendt\nPerplexity's Merchant Program kost niets: geen listingkosten, geen commissie. Shopify-winkels in de VS krijgen automatische productsynchronisatie zonder aparte aanmelding. \"Buy with Pro\" is een one-click checkout voor Perplexity Pro-gebruikers met gratis verzending — betaald door Perplexity, niet door de verkoper. Perplexity meldt 45 miljoen maandelijkse gebruikers en een vijfvoudige stijging in shopping-intentie-zoekopdrachten sinds de functie verder open ging dan alleen Pro-gebruikers.\n\nDe voorwaarde is scherp: bedrijven moeten verkopen én verzenden naar de VS om in aanmerking te komen.\n\n> **Voor higrip.nl:** Onbekend of higrip.nl momenteel naar de VS verzendt — dat is nu de enige vraag die bepaalt of dit kanaal open staat. Zo niet, dan is dit een kanaal om te volgen voor het moment dat internationale verzending een overweging wordt, niet iets om nu op te bouwen.\n\n**Actie:** Controleer of higrip.nl naar de VS verzendt. Zo ja: gratis aanmelden bij het Perplexity Merchant Program. Zo nee: alleen volgen — nieuw backlogpunt toegevoegd onder voorbehoud.\n\n---\n\n### Bronnen\n- [Why AI Checkout Stalled: Discover in AI, Buy on Site](https://www.digitalapplied.com/blog/ai-agentic-commerce-discover-in-ai-buy-on-site-2026)\n- [Stripe powers Instant Checkout in ChatGPT and releases Agentic Commerce Protocol](https://stripe.com/newsroom/news/stripe-openai-instant-checkout)\n- [We Tracked 1,885 Pages Adding Schema. AI Citations Barely Moved. — Ahrefs](https://ahrefs.com/blog/schema-ai-citations/)\n- [Does Schema Markup Predict AI Citation? — SSRN](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6284518)\n- [Google's AI Shopping Announcements: What They Mean — Brainlabs](https://www.brainlabsdigital.com/google-2026-ai-shopping-announcements-explained/)\n- [Google unveils shopping ads in AI Mode — ppc.land](https://ppc.land/google-unveils-shopping-ads-in-ai-mode-doubling-down-on-conversational-commerce/)\n- [Perplexity Shopping: How to Optimize Your Store for AI — Shopify](https://www.shopify.com/blog/perplexity-shopping)\n- [Perplexity Merchant Program: What Most Sellers Miss (2026)](https://alhena.ai/blog/perplexity-shopping-merchants-setup-guide/)\n\n## Acties\n\n_Acties uit dit rapport staan in de growth-radar-backlog (`ACTIEBACKLOG.md`) en komen via het dashboard onder NU AANDACHT binnen — hier niet gedupliceerd._\n\n## Bronnen\n\n- Origineel: `C:\\Users\\Test\\.claude\\research\\growth-radar\\rapporten\\2026-09-16-ai-search.md`\n\n## Aantekeningen",
   "bron": "routine",
   "bronbestand": "C:\\Users\\Test\\.claude\\research\\growth-radar\\rapporten\\2026-09-16-ai-search.md",
   "bronbestand_url": null,
   "categorie": "SEO",
   "datum": "2026-09-16",
   "deadline": "",
   "gerelateerd": [
    "2026-09-15-growth-radar-basislijn",
    "2026-09-15-growth-radar-seo-content",
    "2026-09-15-seo-audit",
    "2026-09-16-seo-onderzoek-cloud-routine-website",
    "2026-09-22-growth-radar-seo-content",
    "2026-09-23-growth-radar-ai-search",
    "2026-09-28-growth-radar-seo-technisch",
    "2026-09-29-growth-radar-seo-content",
    "2026-09-30-growth-radar-ai-search"
   ],
   "id": "2026-09-16-growth-radar-ai-search",
   "kansen": [],
   "kerncijfers": [],
   "kerntitel": "",
   "prioriteit": "P2",
   "routine": "growth-radar",
   "samenvatting": "ChatGPT's Instant Checkout is gestopt (3× slechtere conversie dan doorklik bij Walmart): \"ontdekken in AI, kopen op eigen site\" wint. Schema alleen verhoogt AI-citaties niet, concrete cijfers in de tekst wel; de Merchant Center-feed wordt ook de ingang voor Google AI Mode; Perplexity Merchant Program alleen bij VS-verzending.",
   "status": "bekeken",
   "titel": "Growth Radar — AI-search (checkout in AI is dood, feed is de ingang)",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-16-growth-radar-ai-search.md",
   "vervangt": [],
   "wat_niet_lukte": ""
  },
  {
   "acties": [
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "GraphQL pages: alleen padel, tennis, voetbal (sport-*) en pilates gepubliceerd; rugby nog concept, overige sporten ontbreken.",
      "controle": "Zijn de resterende 8 sportlandingspagina's live?",
      "gecontroleerd": "2026-09-26",
      "methode": "shopify",
      "uitkomst": "open"
     },
     "id": "2026-09-15-seo-audit#2fb3a15f",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Resterende 8 sportlandingspagina's invullen via `sections/hi-sport-landing.liquid` (na push van het thema)",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Schrijft de 8 sportlandingspagina's via hi-sport-landing.liquid in het testthema.",
      "wat_jij_doet": "Testthema publiceren en de pagina's aanmaken."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "/pages/veelgestelde-vragen: nog 4x ' u ' en 7x ' uw '.",
      "controle": "FAQ, collectiebeschrijving en blogs in de je-vorm?",
      "gecontroleerd": "2026-09-26",
      "methode": "site",
      "uitkomst": "open"
     },
     "id": "2026-09-15-seo-audit#864864f2",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "\"u/uw\" in FAQ-antwoorden, collectiebeschrijving en blogartikelen omzetten naar \"je/jij\"",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Herschrijft FAQ-, collectie- en blogteksten naar je-vorm.",
      "wat_jij_doet": "Plakken in admin of het thema publiceren."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "/collections/gripsokken meta description: nog 'Ontdek onze collectie witte gripsokken, beschikbaar in de maten 34-39 en 40-46...'.",
      "controle": "Is de collectiebeschrijving van /collections/gripsokken verbreed?",
      "gecontroleerd": "2026-09-26",
      "methode": "site",
      "uitkomst": "open"
     },
     "id": "2026-09-15-seo-audit#070e0039",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Collectiebeschrijving `/collections/gripsokken` verbreden — beperkt zich nu tot \"witte\" gripsokken",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Schrijft een bredere collectiebeschrijving.",
      "wat_jij_doet": "Tekst plakken bij de collectie in admin."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "https://www.higrip.nl/: 9 van 25 <img>-tags met alt=\"\"; geen meta name=\"twitter:image\".",
      "controle": "Hebben de homepage-afbeeldingen alt-teksten en is er twitter:image?",
      "gecontroleerd": "2026-09-26",
      "methode": "site",
      "uitkomst": "open"
     },
     "id": "2026-09-15-seo-audit#7dda01c0",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "Alt-teksten op de 12 lege homepage-afbeeldingen en `twitter:image` toevoegen",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Schrijft de alt-teksten en zet twitter:image in het testthema.",
      "wat_jij_doet": "Alts plakken en het thema publiceren."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Search Console-routine draait wekelijks; een AI-citatietest met 5 vaste vragen staat in geen routine-bestand (Woensdag-slot van Growth Radar is nieuws, geen vaste test).",
      "controle": "Zijn maandelijkse Search Console-review en AI-citatietest ingepland?",
      "gecontroleerd": "2026-09-26",
      "methode": "vault",
      "uitkomst": "open"
     },
     "id": "2026-09-15-seo-audit#cd09f1bd",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "Maandelijkse Search Console-review + AI-citatietest (5 vaste vragen aan ChatGPT en Perplexity) inplannen",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Neemt de maandelijkse GSC- en AI-citatietest op in een routineprompt.",
      "wat_jij_doet": "Routine aanmaken op info@ als dat nog niet is gebeurd."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "GraphQL articles(first:60): geen artikel met die titel onder de 25 artikelen.",
      "controle": "Is het blogartikel 'waarom glijdt je voet in je schoen' gepubliceerd?",
      "gecontroleerd": "2026-09-26",
      "methode": "shopify",
      "uitkomst": "open"
     },
     "id": "2026-09-15-seo-audit#581e7e2f",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "Blogartikel \"waarom glijdt je voet in je schoen\" uit `C:\\Users\\Test\\higrip-seo\\content\\` publiceren",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Maakt het blogartikel publicatieklaar (meta, alts, interne links).",
      "wat_jij_doet": "Artikel publiceren in admin."
     }
    }
   ],
   "body_md": "# SEO- en conversieaudit higrip.nl — september 2026\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\nNegen bevindingen, ernst aflopend, plus wat er al goed staat (Shopify UCP aan, snelle responstijden, wetenschappelijke onderbouwing). Bij 68 organische sessies per 90 dagen is A/B-testen onuitvoerbaar — meet voorlopers (indexatie, GSC-vertoningen, schema-validiteit, AI-citaties). De vijf verifieerbare afwijkingen uit deze audit staan als `[regressie]`-punten in de growth-radar-backlog; hieronder alleen de acties die dáár niet staan.\n\n## Bevindingen\n\nUitgevoerd op testthema `194761425223` (hi-grip.myshopify.com) en de live site www.higrip.nl.\nRapport: https://claude.ai/artifact/KXF6YLWedzMKs3A4Nv6hkq\n\n### Gemeten uitgangspunt (GA4 property 476032345, 15 jun – 14 sep 2026)\n\n213 sessies totaal: Direct 102, Organic Search 68, Organic Social 22, Referral 9,\nCross-network 4, **AI Assistant 2** (nieuw GA4-kanaal, houd de trend bij).\nMobiel 111 sessies / 43% bounce · desktop 101 / 75% bounce.\n\n**Conversiemeting staat uit:** keyEvents = 0 en purchaseRevenue = €0 over 90 dagen, terwijl er\nwél checkout-sessies in het landingspaginarapport staan. `purchase` is niet als key event\ngemarkeerd in GA4. Dit blokkeert elke CRO-uitspraak en is actie #1.\n\n**Statistische realiteit:** bij 68 organische sessies per 90 dagen is een klassieke A/B-test op\nconversieratio onuitvoerbaar (grofweg 4.000–5.000 sessies per variant nodig voor 2% → 3% bij 95%).\nMeet daarom voorlopers — indexatie, GSC-vertoningen en positie, schema-validiteit, AI-citaties —\nniet conversieratio.\n\n### Bevindingen, ernst aflopend\n\n1. `snippets/product-schema.liquid` bevatte een nep-`aggregateRating` (4.5 uit 7 reviews, hardcoded)\n   zonder zichtbare reviews, plus een dubbele Product-node náást Shopify's eigen ProductGroup.\n   Rendert niet op remote, dus nooit live geweest — maar zou dat bij de eerstvolgende push wel worden.\n2. Homepage-title is enkel `HÏ Grip`; hoofdkeyword ontbreekt. Plus 2× H1 (verborgen `visually-hidden` + hero).\n3. `/products/performance-grip-socks-2-0-zwart` en `-wit` geven nog HTTP 200 — niet op concept gezet\n   zoals eerder genoteerd. Samen 13 sessies per 90 dagen, méér dan de hoofdproductpagina (8). Kannibalisatie.\n4. 9 van 10 sportpagina's ontbreken. Alleen `/pages/gripsokken-padel` bestaat en is goed\n   (sterke title/desc, 14 H2's, eigen breadcrumb-schema). `/collections/padel` geeft 404.\n5. Buiten de productpagina alleen een minimale Shopify-`Organization` die naar `hi-grip.myshopify.com`\n   wees. Geen WebSite, BreadcrumbList of ItemList.\n6. FAQ-JSON-LD gebruikte 6 vragen die nergens op de productpagina staan; de pagina toont 8 andere in een accordion.\n7. `/collections/all` heeft geen meta description. `/collections/gripsokken` beperkt zich onnodig tot \"witte\" gripsokken.\n8. FAQ-antwoorden, collectiebeschrijving en meerdere blogartikelen gebruiken \"u/uw\" — tegen de merkstem in\n   (zie `brand_higrip.md` in het Claude-geheugen; merkbron is [Logo & Kleurenpalet](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Logo%20%26%20Kleurenpalet.md)).\n9. 12 van 29 homepage-afbeeldingen hebben `alt=\"\"`; `twitter:image` ontbreekt in de meta-tags.\n\n### Al goed — niet aankomen\n\n- **Shopify UCP staat aan.** `robots.txt` verwijst naar `agents.md` en een UCP/MCP-endpoint, en de sitemap\n  bevat `sitemap_agentic_discovery.xml`. De catalogus is al benaderbaar vanuit ChatGPT, Perplexity, Copilot\n  en Gemini zonder extra werk.\n- Responstijden 0,2–0,8 s op alle geteste pagina's. 25 blogartikelen aanwezig.\n- Wetenschappelijke onderbouwing (wrijvingscoëfficiënt 1,17 vs 0,60; Apps et al. 2020 en 2022, Friedl et al. 2023)\n  is zeldzaam in deze categorie en precies het citeerbare materiaal waar AI-zoeksystemen op afgaan.\n\n### Gebouwd in `C:\\Users\\Test\\higrip-theme` — theme check schoon, NOG NIET GEPUSHT\n\nDe Shopify CLI was niet ingelogd (vraagt om een apparaatcode), dus pushen kon niet.\nEerst `shopify auth login`, dan pushen — thema-bestanden en `page.gripsokken-voetbal.json` in\n**aparte** pushes, anders stript de validatie onbekende settings.\n\n- `snippets/hi-seo-schema.liquid` — centrale `@graph`: Organization (eigen domein, e-mail, contactPoint,\n  4 sameAs), WebSite met SearchAction, BreadcrumbList per pagetype, ItemList op collecties.\n  Aangeroepen vanuit `layout/theme.liquid` direct na `content_for_header`.\n- `snippets/product-schema.liquid` — herschreven tot alleen een FAQPage met de 8 échte accordion-vragen.\n  Back-up van de oude versie: `C:\\Users\\Test\\higrip-seo\\product-schema.liquid.bak`.\n- `sections/hi-sport-landing.liquid` + `assets/hi-sport-landing.css` — herbruikbare sport-landingssectie.\n  De FAQ-blocks voeden zowel de zichtbare `<details>` als de FAQPage-JSON-LD, dus die kunnen niet meer\n  uiteenlopen. Sport #3 t/m #10 is daarmee invulwerk in de theme editor.\n- `templates/page.gripsokken-voetbal.json` — volledig ingevulde voetbalpagina.\n- `C:\\Users\\Test\\higrip-seo\\content\\` — blogartikel \"waarom glijdt je voet in je schoen\" en een\n  meta-teksten werkblad met A/B-varianten voor homepage, beide collecties, voetbalpagina en blog.\n\n### Routine\n\nGeplande taak `higrip-seo-regressiecheck` draait elke maandag 08:00 en schrijft naar\n`C:\\Users\\Test\\higrip-seo\\checks\\`. Verdere cadans: tweewekelijks één contentstuk helemaal af,\nmaandelijks Search Console-review op vertoningen en positie plus de AI-citatietest (5 vaste vragen aan\nChatGPT en Perplexity), per kwartaal de richting herzien.\n\n**Why:** De vier ritmes zijn bewust gescheiden — een wekelijkse controle die ook content maakt, wordt een\ncontrole die niets controleert. En bij dit verkeersvolume is één verandering per meetperiode de enige\nmanier om achteraf nog te weten wat werkte.\n\n**How to apply:** Begin altijd bij de meting (GA4 key events), dan pushen, dan admin-teksten, dan content.\nLeg elke wijziging vast met datum, anders is de maandelijkse GSC-review niet te interpreteren.\n\n### Twee dingen expliciet níét doen\n\n- **Geen `llms.txt`.** Google stelt dat het niets doet voor Search of de generatieve resultaten, en\n  AI-bots vragen het nauwelijks op (een fractie van een procent van hun verzoeken).\n- **Geen per-bot robots-groepen.** `robots.txt` staat al op `Allow: /`. Een eigen `User-agent: GPTBot`-blok\n  schakelt juist alle standaard-disallows uit, waarna die bot je winkelwagen, checkout en interne\n  zoekresultaten gaat crawlen.\n\n## Acties\n\n- [ ] P2 · Resterende 8 sportlandingspagina's invullen via `sections/hi-sport-landing.liquid` (na push van het thema)\n- [ ] P2 · \"u/uw\" in FAQ-antwoorden, collectiebeschrijving en blogartikelen omzetten naar \"je/jij\"\n- [ ] P2 · Collectiebeschrijving `/collections/gripsokken` verbreden — beperkt zich nu tot \"witte\" gripsokken\n- [ ] P3 · Alt-teksten op de 12 lege homepage-afbeeldingen en `twitter:image` toevoegen\n- [ ] P3 · Maandelijkse Search Console-review + AI-citatietest (5 vaste vragen aan ChatGPT en Perplexity) inplannen\n- [ ] P3 · Blogartikel \"waarom glijdt je voet in je schoen\" uit `C:\\Users\\Test\\higrip-seo\\content\\` publiceren\n\n## Bronnen\n\n- Origineel: `C:\\Users\\Test\\.claude\\memory\\project_higrip_seo.md`\n- Rapport-artifact: https://claude.ai/artifact/KXF6YLWedzMKs3A4Nv6hkq\n- GA4-property 476032345 (15 jun – 14 sep 2026)\n- Thema-werkkopie: `C:\\Users\\Test\\higrip-theme` · back-ups en content: `C:\\Users\\Test\\higrip-seo\\`\n\n## Aantekeningen",
   "bron": "los",
   "bronbestand": "C:\\Users\\Test\\.claude\\memory\\project_higrip_seo.md",
   "bronbestand_url": null,
   "categorie": "SEO",
   "datum": "2026-09-15",
   "deadline": "",
   "gerelateerd": [
    "2026-09-15-regressiecheck",
    "2026-09-16-growth-radar-ai-search",
    "2026-09-04-werkdossier-stand-van-zaken",
    "2026-09-15-growth-radar-seo-content",
    "2026-09-16-seo-onderzoek-cloud-routine-website",
    "2026-09-21-growth-radar-seo-technisch",
    "2026-09-21-beachhead-rugby",
    "2026-09-22-growth-radar-seo-content",
    "2026-09-23-seo-conversietest-run-1",
    "2026-09-25-seo-audit"
   ],
   "id": "2026-09-15-seo-audit",
   "kansen": [],
   "kerncijfers": [],
   "kerntitel": "",
   "prioriteit": "P1",
   "routine": "",
   "samenvatting": "Audit van testthema 194761425223 en de live site op 15 september 2026: conversiemeting staat uit (0 key events), de homepage-title mist het hoofdkeyword, twee oude product-URL's kannibaliseren en 9 van 10 sportpagina's ontbreken. Thema-fixes (schema, sportlandingssectie, voetbalpagina) staan lokaal klaar maar zijn niet gepusht.",
   "status": "in-uitvoering",
   "titel": "SEO- en conversieaudit higrip.nl — september 2026",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-15-seo-audit.md",
   "vervangt": [],
   "wat_niet_lukte": ""
  },
  {
   "acties": [],
   "body_md": "# SEO-regressiecheck — 15 september 2026\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\nControle-run, geen onderzoek. De kritieke check (geen `aggregateRating` op enige pagina) is schoon. Alle vijf afwijkingen staan als `[regressie]`-punten op P1 in de growth-radar-backlog.\n\n## Bevindingen\n\nEerste run van deze routine, dus zonder voorgaande week om tegen af te zetten. Referentiepunt is de audit van 15 september 2026 ([2026-09-15-seo-audit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-15-seo-audit.md)) en de daar beschreven verwachte staat.\n\n### Afwijkingen\n\n1. **Oude productpagina's kannibaliseren nog steeds het hoofdkeyword.**\n   URL: https://www.higrip.nl/products/performance-grip-socks-2-0-zwart en `-wit`\n   Wat: beide geven nog HTTP 200 in plaats van een 301 naar `/products/hi-grip-gripsokken-1`.\n   Fix: 301-redirects instellen in Shopify admin → URL-omleidingen.\n\n2. **GA4-conversiemeting staat nog uit.** `keyEvents = 0` op elk kanaal, deze week en vorige week.\n   URL: n.v.t. (GA4-property 476032345)\n   Wat: `purchase` is niet gemarkeerd als key event, dus elke CRO-uitspraak blijft ongefundeerd.\n   Fix: in GA4-admin → Events → `purchase` markeren als key event.\n\n3. **De thema-wijzigingen met SEO-schema staan nog steeds niet live.** Dit is de wortel van vrijwel alle schema-afwijkingen hieronder.\n   URL: alle 8 gecontroleerde URL's + https://www.higrip.nl/pages/gripsokken-voetbal\n   Wat: `snippets/hi-seo-schema.liquid` (WebSite/BreadcrumbList/ItemList) en de herschreven `snippets/product-schema.liquid` (FAQPage) staan lokaal klaar in `C:\\Users\\Test\\higrip-theme` maar zijn nog niet gepusht. Gevolg: `WebSite` ontbreekt op alle 8 URL's, `BreadcrumbList` op 6 van de 8, `ItemList` op beide collectiepagina's, `FAQPage` op de productpagina — en `/pages/gripsokken-voetbal` geeft nog 404.\n   Fix: eerst `shopify auth login` (device-code flow), dan pushen — thema-bestanden en `page.gripsokken-voetbal.json` in aparte pushes zoals in het projectgeheugen genoteerd.\n\n4. **Homepage heeft nog steeds 2× `<h1>`.**\n   URL: https://www.higrip.nl/\n   Wat: een `visually-hidden` H1 (\"HÏ Grip\") naast de zichtbare hero-H1 (`g2-hero__title`).\n   Fix: de visually-hidden H1 naar een `<span>` of `<p>` wijzigen, of de hero-titel als enige H1 laten staan.\n\n5. **`/collections/all` heeft nog geen meta description.**\n   URL: https://www.higrip.nl/collections/all\n   Wat: `<meta name=\"description\">` is leeg/afwezig.\n   Fix: beschrijving toevoegen via Shopify admin → SEO-instellingen van de collectiepagina.\n\n### Ongewijzigd\n\n0 van de 8 gecontroleerde URL's was volledig schoon op alle 8 checks — maar de kern zit in punt 3 hierboven: één ongepushte thema-wijziging verklaart het merendeel. Los daarvan: alle 8 URL's laadden binnen 0,53s (ruim onder de 1,5s-grens), elk had precies één niet-lege `<title>` en een correcte canonical naar zichzelf op www.higrip.nl, en **geen enkele pagina bevat een `aggregateRating`** — de kritieke check is dus schoon, het risico dat in de audit is opgelost blijft opgelost. `shopify theme check` gaf geen nieuwe fouten buiten de drie bekende, genegeerde types (JSONMissingBlock/Bundler, ImgWidthAndHeight, ParserBlockingScript). Homepage: 12 van 29 afbeeldingen met `alt=\"\"` — precies op de meldgrens, niet erboven.\n\n### Trend\n\nSessies per kanaal, laatste 7 dagen vs. de 7 dagen daarvoor (GA4-property 476032345):\n\n| Kanaal | Deze week | Vorige week |\n|---|---|---|\n| Direct | 83 | 15 |\n| Organic Search | 40 | 30 |\n| Organic Social | 10 | 11 |\n| Referral | 6 | 3 |\n| Unassigned | 3 | 3 |\n| AI Assistant | 1 | 1 |\n\nGrote sprong in Direct-verkeer (15 → 83) — mogelijk een campagne of e-mail; niet nader onderzocht, dat is werk voor de Growth Radar-routine, niet voor deze controle.\n\nAI Assistant-kanaal, laatste 30 dagen: **2 sessies** (ongewijzigd t.o.v. de 90-dagen-meting van 2 in de audit van 15 september — geen recente groei).\n\n## Acties\n\n_Acties uit dit rapport staan in de growth-radar-backlog (`ACTIEBACKLOG.md`) en komen via het dashboard onder NU AANDACHT binnen — hier niet gedupliceerd._\n\n## Bronnen\n\n- Origineel: `C:\\Users\\Test\\.claude\\research\\growth-radar\\rapporten\\regressiecheck-2026-09-15.md`\n- Routine: `C:\\Users\\Test\\.claude\\scheduled-tasks\\higrip-seo-regressiecheck\\SKILL.md`\n\n## Aantekeningen",
   "bron": "routine",
   "bronbestand": "C:\\Users\\Test\\.claude\\research\\growth-radar\\rapporten\\regressiecheck-2026-09-15.md",
   "bronbestand_url": null,
   "categorie": "SEO",
   "datum": "2026-09-15",
   "deadline": "",
   "gerelateerd": [
    "2026-09-15-seo-audit",
    "2026-09-14-weekoverzicht",
    "2026-09-21-growth-radar-seo-technisch",
    "2026-09-21-regressiecheck"
   ],
   "id": "2026-09-15-regressiecheck",
   "kansen": [],
   "kerncijfers": [],
   "kerntitel": "",
   "prioriteit": "P1",
   "routine": "seo-regressiecheck",
   "samenvatting": "Eerste wekelijkse controle: 5 afwijkingen, grotendeels terug te voeren op het niet-gepushte thema (schema's ontbreken op alle 8 URL's), oude product-URL's zonder 301, GA4 zonder key event, 2× H1 en een lege meta description op /collections/all. Direct-verkeer sprong van 15 naar 83 sessies.",
   "status": "bekeken",
   "titel": "SEO-regressiecheck — 15 september 2026",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-15-regressiecheck.md",
   "vervangt": [],
   "wat_niet_lukte": ""
  },
  {
   "acties": [],
   "body_md": "# Growth Radar — SEO content & keywords (FAQ rich results weg)\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\nEén scherpe bevinding met directe gevolgen voor een bestaand backlogpunt. Geen nieuwe acties.\n\n## Bevindingen\n\n**15 september 2026 · dinsdag**\n\n### In het kort\nGoogle heeft FAQ rich results per 7 mei 2026 volledig uit de zoekresultaten gehaald, en de officiële AI Overviews-gids van Google (15 mei 2026) zegt expliciet dat structured data niet nodig is om in AI-antwoorden geciteerd te worden. Dat raakt direct actiepunt 5 in de backlog — de vraagpagina's (\"waarom glijdt mijn voet...\") — die nu nog uitgaat van FAQPage JSON-LD als onderdeel van het format. De content-aanpak zelf blijft goed; de schema-stap is overbodig geworden.\n\n---\n\n### FAQ-schema levert geen rich result én geen AI-citatiebonus meer op\n\nFAQ rich results waren al jaren op hun retour: Search Engine Land registreerde een daling van 53,94% naar 17,04% van de SERP's met dit element na de beperking van augustus 2023 tot \"bekende, gezaghebbende overheids- en gezondheidssites\". Op 7 mei 2026 heeft Google de stekker er helemaal uitgetrokken — FAQ rich results verschijnen niet meer, voor niemand. Search Console verwijdert het bijbehorende rapport in juni 2026, de API-ondersteuning volgt in augustus.\n\nBelangrijker voor de contentkeuzes van vandaag: op 15 mei 2026 publiceerde Google zijn eerste officiële gids voor generatieve AI-zoekresultaten, en die stelt zonder omwegen dat structured data niet vereist is voor AI Overviews of AI Mode — er is geen speciale schema.org-markup die je citatiekans vergroot. Het `FAQPage`-type zelf is niet afgeschaft en mag blijven staan, maar het is geen groeihefboom meer. Sommige SEO-analisten melden zelfs een lichte negatieve correlatie tussen FAQ-schema en AI Overview-citaties (niet door Google bevestigd, dus met een korrel zout te nemen) — het punt is: schema toevoegen is geen vervanging voor goede content.\n\n> **Voor higrip.nl:** Actiepunt 5 in de backlog (\"Schrijf de vraagpagina's antwoord-eerst\") noemt nu nog \"FAQPage JSON-LD eronder\" als onderdeel van het format voor de drie geplande pagina's (\"Waarom glijdt mijn voet in mijn padelschoen?\", \"Wat zijn gripsokken?\", \"Tapedesign alternatief\"). Die schema-stap voegt niks meer toe — geen rich result, geen aantoonbare AI-citatiebonus. De rest van het plan (antwoord in de eerste twee zinnen, dan pas onderbouwing) is juist precies wat Google nu wél aanraadt: \"unique, compelling, and useful\" content met een heldere, direct beantwoordbare opening. Dat blijft de investering waard, puur omdat het de content zelf beter maakt — niet vanwege een schema-truc.\n\n**Actie:** Actiebacklogpunt 5 bijgewerkt — schemastap geschrapt, content-aanpak ongewijzigd. Zie `ACTIEBACKLOG.md`.\n\n---\n\n### Bronnen\n- [Google to no longer support FAQ rich results](https://searchengineland.com/google-to-no-longer-support-faq-rich-results-476957)\n- [Analysis: FAQ rich results show on 17% of Google SERPs, down from 54%](https://searchengineland.com/analysis-faq-rich-results-show-on-17-of-google-serps-down-from-54-432866)\n- [The rise and fall of FAQ schema – and what it means for SEO today](https://searchengineland.com/faq-schema-rise-fall-seo-today-463993)\n- [FAQ Schema After 7 May 2026: What Actually Changed](https://www.seostrategy.co.uk/learn/faq-schema-deprecation-2026-rich-result-vs-schema/)\n- [FAQ Schema in 2026: What's Confirmed, What's not & What to do](https://www.quattr.com/blog/faq-schema-in-2026)\n\n## Acties\n\n_Acties uit dit rapport staan in de growth-radar-backlog (`ACTIEBACKLOG.md`) en komen via het dashboard onder NU AANDACHT binnen — hier niet gedupliceerd._\n\n## Bronnen\n\n- Origineel: `C:\\Users\\Test\\.claude\\research\\growth-radar\\rapporten\\2026-09-15-seo-content.md`\n\n## Aantekeningen",
   "bron": "routine",
   "bronbestand": "C:\\Users\\Test\\.claude\\research\\growth-radar\\rapporten\\2026-09-15-seo-content.md",
   "bronbestand_url": null,
   "categorie": "SEO",
   "datum": "2026-09-15",
   "deadline": "",
   "gerelateerd": [
    "2026-09-15-growth-radar-basislijn",
    "2026-09-16-growth-radar-ai-search",
    "2026-09-16-seo-onderzoek-cloud-routine-website",
    "2026-09-22-growth-radar-seo-content"
   ],
   "id": "2026-09-15-growth-radar-seo-content",
   "kansen": [],
   "kerncijfers": [],
   "kerntitel": "",
   "prioriteit": "P3",
   "routine": "growth-radar",
   "samenvatting": "Google toont sinds 7 mei 2026 geen FAQ rich results meer en zegt in de AI Overviews-gids (15 mei 2026) dat structured data niet nodig is voor AI-citaties. Het backlogpunt over de vraagpagina's is aangepast: schema-stap geschrapt, antwoord-eerst-opbouw blijft het werk dat telt. Achterhaald door [[2026-09-22-growth-radar-seo-content]]: structuur (incl. FAQPage-schema) blijkt AI-citatiekans wél te verhogen.",
   "status": "gearchiveerd",
   "titel": "Growth Radar — SEO content & keywords (FAQ rich results weg)",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-15-growth-radar-seo-content.md",
   "vervangt": [],
   "wat_niet_lukte": ""
  },
  {
   "acties": [],
   "body_md": "# Growth Radar — Basislijn (nulmeting zes thema's)\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\nStartmeting van de dagelijkse Growth Radar-routine; vult het `LEDGER.md` zodat dagelijkse runs niet dezelfde koppen herhalen. Zes secties met per sectie een \"Voor higrip.nl\"-vertaling. Let op: sectie 3 noemt AggregateRating als ontbrekend — de audit van dezelfde dag heeft juist een verzonnen `aggregateRating` verwijderd; de juiste volgorde (eerst reviewapp, dan schema) staat in de backlog.\n\n## Bevindingen\n\n**15 september 2026 · nulmeting over alle zes thema's**\n\nDit is de startmeting. Vanaf 16 september draait de routine dagelijks met één focus per dag. Deze basislijn vult het `LEDGER.md`, zodat de dagelijkse runs niet dezelfde koppen blijven herhalen.\n\n---\n\n### 1. Wat er in 2026 is veranderd aan Google\n\nGoogle deed tussen februari en juni vijf bevestigde updates. Drie daarvan raken jou:\n\n**Core update februari — alleen voor Discover.** Eerste keer dat Google een update uitsluitend op Discover richtte. Relevant als je blogcontent gaat bouwen: Discover wordt een apart kanaal met eigen regels, niet langer een bijproduct van je rankings.\n\n**Brede core update 27 maart – 8 april.** Twaalf dagen uitrol, wereldwijd, alle branches. Het patroon is eenduidig: webshops met eigen materiaal — eigen testdata, echte klantinzichten, expertreviews — wonnen gemiddeld ~22% zichtbaarheid. AI-contentfarms verloren 60–80% van hun verkeer.\n\n**Spamupdate juni.** Snelste in de geschiedenis van Google. Richt zich op schaalbare contentproductie, site reputation abuse en onnatuurlijke links.\n\n> **Voor higrip.nl:** jouw voorsprong is dat je echte meetdata hebt — de 1.17 wrijvingscoëfficiënt, de 95%-claim. Dat is precies het type eigen materiaal dat deze updates belonen, en wat FitSockr, Tapedesign en Optigrip niet hebben. Maar die cijfers staan nu alleen in campagnesecties, niet in een vindbare, citeerbare pagina. Dat is het grootste onbenutte SEO-bezit dat je hebt.\n\n---\n\n### 2. AI-zoeken is geen zijspoor meer\n\nDe cijfers die ertoe doen:\n\n| Meting | Waarde |\n|---|---|\n| Amerikanen die generatieve AI voor zoeken gebruiken (2026) | 31% |\n| Shopping-vragen per dag in ChatGPT | ~50 miljoen |\n| Conversie van LLM-verkeer | 5,53% |\n| Conversie van regulier organisch verkeer | 3,7% |\n| Aandeel AI-merkvermeldingen dat uit derden komt (reviews, community's) | ~85% |\n\nBezoekers die via een AI-assistent binnenkomen converteren dus ongeveer anderhalf keer zo goed als gewone zoekers. Ze arriveren met een aanbeveling in hun hoofd in plaats van een lijst met tien opties.\n\nDe belangrijkste nuance uit het onderzoek: dit is **80% strategisch, 20% technisch**. Schema toevoegen is niet genoeg. Waar het echt op draait is of je genoemd wordt op plekken waar de modellen lezen — vergelijkingsartikelen, fora, reviewsites.\n\n> **Voor higrip.nl:** \"wat zijn gripsokken\" en \"tapedesign alternatief\" staan al in je keywordlijst. Dat zijn precies vraagvormige zoekopdrachten — het type dat in AI-antwoorden terechtkomt. Schrijf ze antwoord-eerst: de conclusie in de eerste twee zinnen, daarna pas de onderbouwing. Modellen lichten de opening eruit.\n\n---\n\n### 3. Structured data wordt hard afgedwongen\n\nTwee concrete ontwikkelingen:\n\n**Vanaf maart 2026** krijgen producten met afwijkende attributen onder één ID te maken met verwerkingsproblemen, minder zichtbaarheid of afkeuringen in Merchant Center. Jij hebt zes varianten (2 maten × 3 packs) onder één product — dit raakt je direct als je Merchant Center gebruikt of gaat gebruiken.\n\n**Universal Commerce Protocol.** Google standaardiseert hoe productdata en checkout-mogelijkheden worden gedeeld met AI-agents. Gestructureerde productdata is de toegangseis. Er is ook een \"Universal Cart\" aangekondigd.\n\nEén technisch detail dat vaak fout gaat: structured data moet in de HTML staan die de server teruggeeft. Door JavaScript gegenereerde markup na het laden telt niet.\n\n> **Voor higrip.nl:** je hebt `product-schema.liquid` al staan en die rendert server-side — goed. Wat ontbreekt is `AggregateRating`. Zonder dat krijg je geen sterren in Shopping-resultaten, terwijl je wel 4,8★ en 1.500+ sporters claimt.\n\n---\n\n### 4. Conversie: waar het geld weglekt\n\nBenchmarks 2026:\n\n| Meting | Waarde |\n|---|---|\n| Mediane Shopify-conversie | 1,4% |\n| Bovenste 20% | 3,2% |\n| Add-to-cart, gemiddeld | 8–10% |\n| Add-to-cart, best-in-class | 12–15% |\n| Verlaat winkelwagen na toevoegen | 60–70% |\n\nRedenen voor winkelwagenverlating in Nederland: **onverwachte verzendkosten 48%**, verplicht account aanmaken 24%, te ingewikkeld checkout 18%.\n\nTwee tactieken met het hardste bewijs:\n- Een productvideo van 30–60 seconden: **+10 tot 30% conversie**, consistent.\n- Algoritmische aanbevelingen in plaats van handmatige: **+15 tot 25%**.\n\nCore Web Vitals-drempels: LCP ≤2,5s · INP ≤200ms · CLS ≤0,1.\n\n> **Voor higrip.nl:** die 48% is jouw grootste enkele lek. Je hebt gratis verzending vanaf €30, maar je 1-pack kost €14,99 — een klant die één pack koopt loopt recht in de verrassing. Toon de drempel op de productpagina zelf (\"nog €15,01 tot gratis verzending\"), niet pas in de winkelwagen.\n\n---\n\n### 5. Social naar website: waar de conversie zit\n\n| Kanaal | Conversie |\n|---|---|\n| TikTok Shop | 4,7% |\n| Instagram Shopping | 2,1% |\n| Facebook Shops | 1,8% |\n| Livestream-sessies | 10–18% |\n| Gemiddelde webshop | 2–3% |\n\nNederlandse context: **34% van de consumenten tussen 18 en 35** heeft minstens één aankoop via social media gedaan. Nederlandse retailers met livesessies rapporteren 10–15% conversie.\n\nDe rolverdeling die in 2026 werkt: **TikTok maakt de vonk, Instagram voedt het verlangen, YouTube bevestigt de aankoopbeslissing.**\n\nCreator-samenwerkingen zijn verschoven van vaste vergoedingen naar prestatiegericht: open plan op 10–12% commissie om verkoopsnelheid en reviews op gang te krijgen, daarna gerichte plannen op 18–25% voor wie het echt doet.\n\n> **Voor higrip.nl:** padel is visueel, kort en herhaalbaar — de slide-out op de baan, de sok die grip houdt. Dat is TikTok-materiaal. Je hebt met 876.000 NL-padellers een doelgroep die op één platform zit. Een open commissieplan met padel-creators is goedkoper dan advertenties en levert tegelijk de reviews op die je AI-zichtbaarheid voeden (zie punt 2 — 85% van AI-vermeldingen komt uit derde partijen).\n\n---\n\n### 6. Funnel en meten\n\nDe Meta-playbook is verschoven van `koud verkeer → retargeting → korting` naar `creatives filteren op intentie → geconsolideerd advertentie-account → retentie`.\n\nWat je technisch nodig hebt: **Conversions API (CAPI)**. Zonder server-side signalen krijgt Meta geen post-purchase data (retourpercentages, klantwaarde) en optimaliseert het algoritme op incomplete informatie. Dynamische remarketing levert bij volwassen DTC-merken 30–50% van de omzet.\n\nCreatief testen: één variabele per test, 7–14 dagen minimum.\n\n> **Voor higrip.nl:** je WK-keyvisual uit v7 is al als PNG exporteerbaar voor Meta-creatives. Dat is een gratis eerste testbatch.\n\n---\n\n### Bronnen\n\n- [Imaginaire — Biggest Google Algorithm Updates 2026 for Ecommerce](https://www.imaginaire.co.uk/blog/the-biggest-google-algorithm-updates-so-far-in-2026/)\n- [Eyeful Media — Google Algorithm Updates 2026](https://www.eyefulmedia.com/blog/2026-google-algorithm-updates)\n- [Elogic — AI Search Visibility: Ecommerce GEO Guide](https://elogic.co/blog/ai-search-visibility-ecommerce/)\n- [ALM Corp — AEO and GEO Playbook 2026 for Retailers](https://almcorp.com/blog/aeo-geo-playbook-retail-ai-search-2026/)\n- [ALM Corp — Google Product ID Requirements 2026](https://almcorp.com/blog/google-product-id-requirements-2026/)\n- [Google Search Central — Merchant Listing Structured Data](https://developers.google.com/search/docs/appearance/structured-data/merchant-listing)\n- [Blend Commerce — Ecommerce Conversion Rate Benchmarks 2026](https://blendcommerce.com/blogs/shopify/ecommerce-conversion-rate-benchmarks-2026)\n- [Shopify — Ecommerce Conversion Rate Benchmarks](https://www.shopify.com/blog/ecommerce-conversion-rate)\n- [Digital Applied — TikTok Shop 2026 Social Commerce Guide](https://www.digitalapplied.com/blog/tiktok-shop-2026-social-commerce-guide)\n- [Opklopper — Conversie Webshop Verhogen: benchmarks NL](https://opklopper.nl/blog/conversie-webshop-verhogen)\n- [Providence IT — E-commerce Trends 2026 Nederland](https://providenceit.nl/kennisbank/ecommerce-trends-2026)\n- [Stackmatix — Meta Ads Funnel Strategy 2026](https://www.stackmatix.com/blog/meta-ads-funnel-strategy)\n\n## Acties\n\n_Acties uit dit rapport staan in de growth-radar-backlog (`ACTIEBACKLOG.md`) en komen via het dashboard onder NU AANDACHT binnen — hier niet gedupliceerd._\n\n## Bronnen\n\n- Origineel: `C:\\Users\\Test\\.claude\\research\\growth-radar\\rapporten\\2026-09-15-basislijn.md`\n- Bronnen per bevinding: zie de lijst onderaan Bevindingen\n\n## Aantekeningen",
   "bron": "routine",
   "bronbestand": "C:\\Users\\Test\\.claude\\research\\growth-radar\\rapporten\\2026-09-15-basislijn.md",
   "bronbestand_url": null,
   "categorie": "SEO",
   "datum": "2026-09-15",
   "deadline": "",
   "gerelateerd": [
    "2026-09-15-growth-radar-seo-content",
    "2026-09-16-growth-radar-ai-search",
    "2026-09-15-seo-audit",
    "2026-09-18-growth-radar-social"
   ],
   "id": "2026-09-15-growth-radar-basislijn",
   "kansen": [],
   "kerncijfers": [],
   "kerntitel": "",
   "prioriteit": "P2",
   "routine": "growth-radar",
   "samenvatting": "Nulmeting over zes thema's: Google-updates 2026, AI-zoeken, structured data, conversie, social en funnel. Grootste kans: de eigen meetdata (1,17 / 95%) staan nergens in een vindbare, citeerbare pagina; grootste lek: 48% winkelwagenverlating door onverwachte verzendkosten bij het 1-pack van €14,99.",
   "status": "bekeken",
   "titel": "Growth Radar — Basislijn (nulmeting zes thema's)",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-15-growth-radar-basislijn.md",
   "vervangt": [],
   "wat_niet_lukte": ""
  },
  {
   "acties": [
    {
     "afgevinkt": true,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-09-14-weekoverzicht#cee3eb98",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "Checkout onderzoeken: testbestelling op desktop én mobiel, Abandoned checkouts in Shopify Admin bekijken, eerdere weken vergelijken — vervallen: overgenomen in [[2026-09-21-weekoverzicht]]",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": true,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-09-14-weekoverzicht#d83f133b",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Structured data-regressie op live herstellen — WebSite en FAQPage terug, oorzaak in de thema-historie zoeken — vervallen: overgenomen in [[2026-09-21-weekoverzicht]]",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": true,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-09-14-weekoverzicht#708642a8",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Homepage-title (nu \"HÏ Grip\", 7 tekens) en meta description (175 tekens) aanpassen — vervallen: overgenomen in [[2026-09-21-weekoverzicht]]",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": true,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-09-14-weekoverzicht#8ae0e641",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "6 partnership-kandidaten beoordelen: Urban Trail, Charity Run, Outdoor Valley, Fervor Pilates, bbb health boutique + 3 HOOG-Events — vervallen: beoordeeld in [[2026-09-21-weekoverzicht]]",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-09-14-weekoverzicht#96504b01",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Padelclub Rotterdam-uitsluiting verifiëren (eigen clubshop gevonden)",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-09-14-weekoverzicht#f592e573",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Funnel-rapport op historische GA4-data (mrt–dec 2025)",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": true,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-09-14-weekoverzicht#3be9bab5",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "Update Log bijwerken zodra de structured data-situatie is opgelost — vervallen: overgenomen in [[2026-09-21-weekoverzicht]]",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-09-14-weekoverzicht#7da26b32",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "Merk & Bedrijf Database / Retailer Database: bevestigen of ze verwijderd mogen worden",
     "uitvoerbaar": null
    }
   ],
   "body_md": "# Denzel Weekoverzicht — 2026-09-14 (0 orders bij 7 checkouts)\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\nVanaf deze week is de GA4-funnel-check t.o.v. benchmarks een vast onderdeel van de routine. Het checkout-signaal is het urgentste punt; de overige beslissingen lopen al 3–4 weken.\n\n## Bevindingen\n\n### Voortgang per hoofdagent\n\n- **Content Agent** — geen verandering. Video & Visuele Productie Agent (`/video-productie`) nog steeds zonder output. Automatisering van periodieke content-ideeën blijft bewust niet gebouwd (lars wil dit eerst intern afstemmen met de content-afdeling) — technisch kan het al (GA4 + Buffer-koppeling actief), de inhoudelijke reden staat nog open.\n- **Partnership Agent** — B2B Klanten Agent: lijst laatst bijgewerkt 2026-09-07 (7 dagen geleden, binnen de 1-2 weken-marge) — geen zoekactie nodig deze week. Partnerships & Events Agent: lijst laatst bijgewerkt 2026-09-07 (idem, binnen de marge) — geen zoekactie nodig. Influencer & Creator Agent draait ongewijzigd actief via het IG-zoekscript. De stapel onbeoordeelde kandidaten groeit door: 5 kandidaten (Urban Trail Rotterdam, Rotterdam Charity Run, Outdoor Valley Obstacle Run, Fervor Pilates, bbb health boutique Rotterdam) wachten nog steeds op een eerste beoordeling van lars, sommige al 3 weken.\n- **Website Agent** — live-site-check en SEO-check beide uitgevoerd, geen egress-problemen. Site bereikbaar, geen fouten, merknaam overal correct, vertrouwens-elementen aanwezig. **Structured data-probleem van vorige week is niet opgelost**: nog steeds alleen `Organization` live, geen `WebSite`/`FAQPage` — zie hieronder. Titel/meta-description-probleem staat nu 4 weken open zonder wijziging.\n\n### Wat ik deze week zelf heb opgepakt\n\n**B2B Klanten (Lijn A) en Samenwerkingen/Events (Lijn B):** geen zoekactie uitgevoerd. Beide kandidatenlijsten zijn 7 dagen oud (laatst bijgewerkt 2026-09-07), dus binnen de 1-2 weken-marge uit de routine-instructie. Geen nieuwe kandidaten toegevoegd deze week.\n\n**Live-site-check (14-09):**\n- Bereikbaar: `https://www.higrip.nl/` geeft HTTP 200, geen 404/500, geen zichtbare Liquid-errors.\n- Merknaam: overal correct \"HÏ Grip\" (35x gevonden) — geen enkele \"HI Grip\"/\"Hi Grip\" in de zichtbare paginatekst.\n- Vertrouwens-elementen aanwezig: e-mail (info@higrip.nl), telefoon, KVK/BTW-nummer, Trustpilot-link, klantlogo's (Concordia, SYTH, Sport2000), \"3000+ sporters\"-social proof.\n- **Structured data blijft op het niveau van vorige week — nog steeds geen herstel.** In de `<head>` staat nog maar 1 JSON-LD-blok, alleen `Organization` (naam + logo + url). Ook op de losse FAQ-pagina (`/pages/veelgestelde-vragen`) staat alleen `Organization`, geen `FAQPage`. Dit is dus een aanhoudende regressie, twee weken op rij nu (sinds 31-08 stond het wél compleet live: Organization + WebSite + FAQPage). [Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md) is nog steeds niet aangepast en klopt dus structureel niet (zegt nog \"nog niet naar live gekopieerd\" terwijl de praktijk 2x is gewijzigd).\n\n**SEO-check (14-09):**\n- `<title>` = nog steeds alleen **\"HÏ Grip\"** (7 tekens, geen keyword) — ongewijzigd t.o.v. 31-08/07-09. Het voorstel van 4 weken terug is nog niet doorgevoerd.\n- `<meta name=\"description\">` = nog steeds **175 tekens** (boven de aanbevolen 120-155) — ongewijzigd, zelfde tekst als eerdere weken.\n- Sitemap bereikbaar op `https://www.higrip.nl/sitemap.xml` (HTTP 200), geldige sitemap-index met 9 sub-sitemaps — ongewijzigd.\n- FAQPage-inhoud kon opnieuw niet gecheckt worden — de structured data zelf staat er nog steeds niet.\n- Geen van deze bevindingen zelf aangepast — alleen gesignaleerd, wijziging is aan lars/Website Agent via [Technische Procedures](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Technische%20Procedures.md).\n\n### Openstaande beslissingen voor lars\n\n- **SEO-titel en meta-description homepage aanpassen** — nu 4 weken op de plank (voorstel stond al in [Week 2026-08-31](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Weekoverzicht/Week%202026-08-31.md)): titel te kort/geen keyword, description iets te lang. Kleine, lage-risico wijziging.\n- **Structured data-regressie herstellen** — WebSite- en FAQPage-JSON-LD stonden op 31-08 bevestigd live, staan nu twee weken op rij (07-09 én 14-09) nog steeds alleen als Organization. Voorstel ongewijzigd: nagaan wat er sindsdien aan het thema is gewijzigd (republicatie, app-update, handmatige aanpassing?) en de FAQPage/WebSite-snippets opnieuw toevoegen.\n- **[Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md) klopt structureel niet meer** — staat inmiddels 6 weken achter op de praktijk. Voorstel blijft dat Website Agent dit bestand bij een volgende wijziging als bron van waarheid gaat bijhouden.\n- **Padelclub Rotterdam — mogelijk verouderde uitsluiting** (gesignaleerd 07-09, nog geen reactie). Bestaande uitsluiting in [Voorwaarden Samenwerking](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20B%20-%20Samenwerkingen/Voorwaarden%20Samenwerking.md) (\"geen event, geen pro shop\") lijkt tegenstrijdig met een gevonden eigen clubshop. Voorstel: kort navragen/verifiëren.\n- **6 kandidaten wachten op een eerste beoordeling:** Urban Trail Rotterdam & Rotterdam Charity Run (nu 3 weken), Outdoor Valley Obstacle Run, Fervor Pilates & bbb health boutique Rotterdam (nu 1 week), plus de eerdere 3 HOOG-kandidaten van Partnerships & Events (Powerleague Rotterdam, Panna Knock Out, Rotterdam Basketbal 3x3) die al langer klaarstaan maar nog niemand benaderd is.\n- **Merk & Bedrijf Database / Retailer Database** — nog steeds niet bevestigd of deze verwijderd mogen worden.\n- **Analytics-vervolgstappen** — funnel-rapport op de historische GA4-data (mrt–dec 2025) en checken of purchase-events doorkomen; staat nu 3 weken als actiepunt zonder dat het is opgepakt.\n- **Checkout onderzoeken — nieuw, waarschijnlijk urgenter dan bovenstaande punten.** Deze week 0 orders/€0 omzet, bevestigd door lars (geen trackingissue). Zie de conclusie bij \"Eerste conclusies uit Google Analytics\" hieronder voor het concrete voorstel (testbestelling doorlopen, Abandoned checkouts in Shopify Admin bekijken).\n\n### Vooruitblik — komende week\n\n1. **Structured data-regressie eindelijk oplossen** — dit is de belangrijkste openstaande actie, nu 2 weken zonder voortgang. Eerst de oorzaak vinden (theme-republicatie-historie in Shopify-admin), dan WebSite/FAQPage-snippets opnieuw toevoegen en deze keer verifiëren dat het blijft staan.\n2. **SEO-titel/description homepage doorvoeren** — het voorstel ligt er al 4 weken, kleine wijziging via de reguliere theme-procedure.\n3. **Beoordeling geven op de 6 openstaande partnership-kandidaten** (2 B2B, 4 Events) — de oudste liggen al 3 weken te wachten, de stapel groeit sneller dan hij afneemt.\n4. **[Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md) structureel bijwerken** zodra de structured data-situatie is opgelost, zodat het weer een betrouwbare bron is.\n5. **Analytics-vervolgstappen oppakken** — funnel-rapport op de historische GA4-data en checken of purchase-events doorkomen; dit staat nu 3 weken als actiepunt.\n\n### AI-ontwikkelingen die relevant kunnen zijn\n\n1. **Instagram First Draft** — nieuwe AI-functie in Instagram Edits die automatisch een Reel opbouwt uit een selectie bestaande clips (pauzes wegknippen, beste stukken eruit halen), alles blijft achteraf aanpasbaar. Direct relevant voor `/video-productie`: kan het eerste-cut-werk versnellen vóórdat de HÏ Grip-editingstijl (tempo, kleur, tekst-overlay) er overheen gaat.\n2. **TikTok Symphony Agent (Symphony Creative Studio)** — genereert volledige videocampagnes uit tekstprompts, beelden en voorbeelden, en analyseert wat nu al goed presteert op TikTok om vergelijkbare varianten voor te stellen. Relevant voor `/video-productie` en `/social-content` als startpunt voor concepten, met de HÏ Grip-merkstem er overheen.\n3. **Google Search Console: generatieve AI-prestatierapportage uitgebreid** — laat zien hoe vaak de site verschijnt in AI Overviews/AI Mode (impressies, pagina's, landen). Direct relevant nu de structured data-regressie hierboven al twee weken openstaat: zodra hersteld, kan dit rapport laten zien of het schema daadwerkelijk zichtbaarheid in AI-zoekresultaten oplevert. Kanttekening: Google zegt zelf dat er geen apart schema.org-type verplicht is voor AI Mode specifiek — bestaande structured data helpt via de normale Search-functies.\n4. **Shopify Magic \"Brand Voice Cloning\"** — leert de merkstem uit eerdere blogposts/social-comments om consistente copy te genereren. Kan relevant zijn voor `/shopify-copy` zodra de tool breed beschikbaar is, maar nog niet geverifieerd of dit al voor het HÏ Grip-abonnement geldt — eerst checken bij gebruik.\n\n### Aanvullingen van lars (14-09)\n\n> Onderstaande punten zijn deze week handmatig door lars uitgevoerd/aangeleverd, niet door de Denzel-routine gegenereerd.\n\n**Product meta-descriptions aangepast** — de meta-descriptions van de producten zijn deze week bijgewerkt. Dit staat los van het openstaande punt hierboven over de **homepage**-title/meta-description (die is ongewijzigd, nog steeds 175 tekens zonder keyword in de title) — dat blijft dus een apart, nog open actiepunt.\n\n**Structuurwijziging hoofdnavigatie: \"Alle sokken\" → \"Gripsokken\"** — de hoofdnavigatie wijst nu naar `/collections/gripsokken` in plaats van (uitsluitend) `/collections/all`. Check uitgevoerd (14-09):\n- `/collections/gripsokken` geeft HTTP 200, staat correct in `sitemap_collections_1.xml` en heeft een eigen self-referencing canonical (`rel=\"canonical\"` → zichzelf). Geen 404's, geen gebroken links.\n- `/collections/all` bestaat nog gewoon (HTTP 200, geen redirect), staat nog steeds in de site-navigatie, heeft ook een eigen self-referencing canonical, en staat niet in de sitemap (was hij al niet).\n- **Conclusie: geen negatieve SEO-impact** — er is niets weggehaald of doorverwezen, dus geen verloren linkwaarde of 404's. Enige kanttekening: `/collections/all` en `/collections/gripsokken` tonen grotendeels dezelfde producten en staan allebei nog live + gelinkt + indexeerbaar. Dat is op zichzelf geen probleem (aparte canonicals), maar in theorie een lichte duplicate-content-signaal voor Google. Geen actie nodig tenzij Search Console hier iets over meldt — dan `/collections/all` uit de navigatie halen of op noindex zetten.\n\n**Organisaties die wachten op een beoordeling van lars (uit de vault):**\n\n- [ ] Urban Trail Rotterdam — 3 weken wachtend\n- [ ] Rotterdam Charity Run — 3 weken wachtend\n- [ ] Outdoor Valley Obstacle Run — 1 week wachtend\n- [ ] Fervor Pilates — 1 week wachtend\n- [ ] bbb health boutique Rotterdam — 1 week wachtend\n- [ ] Powerleague Rotterdam — HOOG-kandidaat, langer klaarliggend, nog niemand benaderd\n- [ ] Panna Knock Out — HOOG-kandidaat, langer klaarliggend, nog niemand benaderd\n- [ ] Rotterdam Basketbal 3x3 — HOOG-kandidaat, langer klaarliggend, nog niemand benaderd\n\n**Eerste conclusies uit Google Analytics (laatste 7 dagen t.o.v. de 7 dagen ervoor):**\n- Sessies: 91 vs. 61 (+49%). Gebruikers: 78 vs. 47 (+66%). Paginaweergaven: 189 vs. 100 (+89%). Engagement rate stabiel (~0,49–0,53).\n- Grootste kanalen deze week: Organic Search (31 sessies) en Direct (35 sessies) ongeveer gelijk op, Organic Social (10) derde. Organic Search groeide licht (33 → 31 vorige week, dus stabiel/licht dalend), Direct groeide sterk (16 → 35).\n- Funnel: 42x `view_item`, 6x `add_to_cart`, 7x `begin_checkout`, 2x `add_shipping_info` — en **0 `purchase`-events in GA4**. **Bevestigd door lars: dit is geen trackingprobleem — er is deze week ook daadwerkelijk €0 omzet via de webshop binnengekomen.** GA4 klopt hier dus wel; het eerdere vermoeden dat dit \"alleen\" een trackingprobleem was, is onjuist gebleken.\n- Dat verandert het beeld: 7 bezoekers zijn met checkout begonnen, niemand heeft afgerekend — een reëel conversieprobleem in de checkout, geen meetprobleem. Concreet gat: van 7x `begin_checkout` nog maar 2x `add_shipping_info` (5 afhakers al vóór het verzendadres) en dus 0x afgerond. Met dit lage volume (7 checkouts) is het nog te vroeg om harde conclusies te trekken over *waar* precies het misgaat, maar het signaal (0 orders) is op zichzelf al reden voor actie. Ter context: gemiddelde cart-abandonment in e-commerce is ~70%, checkout-abandonment (al in de checkout, niet afgerond) daarbovenop ~17-20% (Baymard Institute) — HÏ Grip zat deze week op 100% checkout-abandonment (7 van de 7), ruim boven het gemiddelde, al is de steekproef te klein om dit als trend te zien.\n- **Volledige funnel t.o.v. benchmarks (dit is vanaf nu een vast wekelijks onderdeel, zie [Denzel Weekoverzicht — Routine](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Denzel%20Weekoverzicht%20%E2%80%94%20Routine.md)):**\n\n  | Stap | HÏ Grip deze week | Benchmark | Beeld |\n  |---|---|---|---|\n  | Sessie → `view_item` | 42/91 = 46% | geen harde standaard-benchmark | oke |\n  | Sessie → `add_to_cart` | 6/91 = 7% | ~8-10% van sessies | net onder gemiddeld, binnen spreiding bij dit volume |\n  | `add_to_cart` → `begin_checkout` | 6 → 7 (>100%) | normaal ~30-50% van toevoegingen | klopt niet logisch — zie kanttekening hieronder |\n  | `begin_checkout` → `purchase` | 7 → 0 (0%) | ~80-83% rondt af | ver onder benchmark |\n  | Sessie → `purchase` (totaal) | 0/91 = 0% | ~2-3% gemiddeld | bij 91 sessies is ook bij 2-3% maar ~2 orders te verwachten — deels ook klein volume |\n\n  Kanttekening: `add_to_cart` (6) is lager dan `begin_checkout` (7), wat niet zou moeten. Waarschijnlijke verklaring: bezoekers gebruiken een directe \"Koop nu\"/dynamische checkoutknop (bv. Shop Pay) die het `add_to_cart`-event overslaat — geen fout, maar betekent dat de cart-stap in GA4 niet volledig gemeten wordt.\n\n- **Actiepunt: checkout verbeteren/onderzoeken** — voorstel voor komende week: (1) zelf een testbestelling doorlopen op desktop én mobiel om een blokkade te vinden (bijv. verzendkosten die laat/onverwacht verschijnen, ontbrekende betaalmethode, foutmelding), (2) in Shopify Admin de \"Abandoned checkouts\" van deze week bekijken (heeft meer detail dan GA4 bij dit lage volume, laat ook zien wie waar afhaakte), (3) checken of dit een nieuw patroon is of dat eerdere weken (vóór de GA4-fix) ook al weinig omzet gaven. Dit staat los van het GA4-trackingpunt in \"Openstaande beslissingen\" hieronder — dat blijft ook relevant zodra het volume weer hoger is.\n- Kanttekening: dit is pas de tweede week met vergelijkbare data sinds de GA4-tag weer actief is, dus nog te vroeg voor trendconclusies over bezoekersaantallen — maar het omzetsignaal (€0, bevestigd door lars) verdient wel meteen aandacht.\n\n### Gerelateerde bestanden\n\n- [Stappenplan — Verdere Bouw](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Stappenplan%20%E2%80%94%20Verdere%20Bouw.md)\n- [Feedback & Iteratie Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Feedback%20%26%20Iteratie%20Log.md)\n- [Agent Werk & Kwaliteit Overzicht](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Agent%20Werk%20%26%20Kwaliteit%20Overzicht.md)\n\n## Acties\n\n- [x] P1 · Checkout onderzoeken: testbestelling op desktop én mobiel, Abandoned checkouts in Shopify Admin bekijken, eerdere weken vergelijken — vervallen: overgenomen in [2026-09-21-weekoverzicht](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-21-weekoverzicht.md)\n- [x] P2 · Structured data-regressie op live herstellen — WebSite en FAQPage terug, oorzaak in de thema-historie zoeken — vervallen: overgenomen in [2026-09-21-weekoverzicht](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-21-weekoverzicht.md)\n- [x] P2 · Homepage-title (nu \"HÏ Grip\", 7 tekens) en meta description (175 tekens) aanpassen — vervallen: overgenomen in [2026-09-21-weekoverzicht](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-21-weekoverzicht.md)\n- [x] P2 · 6 partnership-kandidaten beoordelen: Urban Trail, Charity Run, Outdoor Valley, Fervor Pilates, bbb health boutique + 3 HOOG-Events — vervallen: beoordeeld in [2026-09-21-weekoverzicht](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-21-weekoverzicht.md)\n- [ ] P2 · Padelclub Rotterdam-uitsluiting verifiëren (eigen clubshop gevonden)\n- [ ] P2 · Funnel-rapport op historische GA4-data (mrt–dec 2025)\n- [x] P3 · Update Log bijwerken zodra de structured data-situatie is opgelost — vervallen: overgenomen in [2026-09-21-weekoverzicht](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-21-weekoverzicht.md)\n- [ ] P3 · Merk & Bedrijf Database / Retailer Database: bevestigen of ze verwijderd mogen worden\n\n## Bronnen\n\n- Origineel: [Week 2026-09-14](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Weekoverzicht/Week%202026-09-14.md) (`04_Agent_Infrastructuur/Beheer/Weekoverzicht/`)\n- Routine: [Denzel Weekoverzicht — Routine](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Denzel%20Weekoverzicht%20%E2%80%94%20Routine.md)\n- GA4-property 476032345, Baymard Institute-benchmarks\n\n## Aantekeningen",
   "bron": "routine",
   "bronbestand": "C:\\Users\\Test\\OneDrive\\Documents\\HI-Grip-Vault-\\04_Agent_Infrastructuur\\Beheer\\Weekoverzicht\\Week 2026-09-14.md",
   "bronbestand_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Weekoverzicht/Week%202026-09-14.md",
   "categorie": "CRO",
   "datum": "2026-09-14",
   "deadline": "",
   "gerelateerd": [
    "2026-09-07-weekoverzicht",
    "2026-09-15-regressiecheck",
    "2026-09-03-analytics-kpi-meetgat",
    "2026-09-04-werkdossier-stand-van-zaken",
    "2026-09-25-evaluatie-routines",
    "2026-09-21-weekoverzicht"
   ],
   "id": "2026-09-14-weekoverzicht",
   "kansen": [],
   "kerncijfers": [],
   "kerntitel": "",
   "prioriteit": "P1",
   "routine": "denzel-week",
   "samenvatting": "De webshop had deze week 0 orders / €0 omzet bij 7 begonnen checkouts — door lars bevestigd als echt conversieprobleem, geen trackingfout. Structured data staat twee weken op rij alleen als Organization; homepage-title/description staan 4 weken open; 6 partnership-kandidaten wachten op beoordeling.",
   "status": "gearchiveerd",
   "titel": "Denzel Weekoverzicht — 2026-09-14 (0 orders bij 7 checkouts)",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-14-weekoverzicht.md",
   "vervangt": [
    "2026-09-07-weekoverzicht"
   ],
   "wat_niet_lukte": ""
  },
  {
   "acties": [
    {
     "afgevinkt": true,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-09-07-weekoverzicht#ec78ee29",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "Structured data-regressie onderzoeken en herstellen — overgenomen in Week 2026-09-14",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": true,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-09-07-weekoverzicht#883d074a",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Homepage-title en meta description doorvoeren — overgenomen in Week 2026-09-14",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": true,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-09-07-weekoverzicht#576d4e14",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "Update Log structureel bijwerken — overgenomen in Week 2026-09-14",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": true,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-09-07-weekoverzicht#006d589b",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Padelclub Rotterdam-uitsluiting verifiëren — overgenomen in Week 2026-09-14",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": true,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-09-07-weekoverzicht#8ef1c2cb",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "5 partnership-kandidaten beoordelen — overgenomen in Week 2026-09-14",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": true,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-09-07-weekoverzicht#d54eb56f",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Analytics-vervolgstappen (funnel-rapport, purchase-events) — overgenomen in Week 2026-09-14",
     "uitvoerbaar": null
    }
   ],
   "body_md": "# Denzel Weekoverzicht — 2026-09-07\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\nVervangen door het weekoverzicht van 14 september; alle openstaande beslissingen zijn daar overgenomen. Bewaard als archief.\n\n## Bevindingen\n\n### Voortgang per hoofdagent\n\n- **Content Agent** — geen verandering. Video & Visuele Productie Agent (`/video-productie`, sinds 2026-08-09) nog steeds zonder output. Automatisering van periodieke content-ideeën blijft bewust niet gebouwd (lars wil dit eerst intern afstemmen met de content-afdeling) — technisch kan het al (Buffer-koppeling actief sinds 01-09), de inhoudelijke reden staat nog open.\n- **Partnership Agent** — B2B Klanten Agent: lijst laatst bijgewerkt 2026-08-25 (13 dagen geleden, buiten de 1-2 weken-marge) — zoekactie uitgevoerd, zie hieronder. Partnerships & Events Agent: lijst laatst bijgewerkt 2026-08-24 (14 dagen geleden, ook buiten de marge) — zoekactie uitgevoerd. Influencer & Creator Agent draait ongewijzigd actief via het IG-zoekscript. De twee MIDDEL-kandidaten van 2 weken terug (Urban Trail Rotterdam, Rotterdam Charity Run) wachten nog steeds op een eerste beoordeling van lars — nu aangevuld met een 3e (zie hieronder).\n- **Website Agent** — live-site-check en SEO-check beide uitgevoerd (geen egress-problemen deze week richting higrip.nl zelf). Belangrijkste bevinding: de structured data is **teruggegaan** ten opzichte van vorige week — zie hieronder. Titel/meta-description-probleem van de vorige 2 weken staat nog steeds open, geen wijziging doorgevoerd.\n\n### Wat ik deze week zelf heb opgepakt\n\n**B2B Klanten (Lijn A) — zoekactie uitgevoerd (lijst was 13 dagen oud):**\nWebsearch op pilates/sportscholen in Rotterdam-regio (prioriteit 1 uit [Partnership Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20A%20-%20B2B%20Klanten/Partnership%20Strategie.md)), getoetst aan [Evaluatiecriteria (B2B Klanten)](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20A%20-%20B2B%20Klanten/Evaluatiecriteria%20%28B2B%20Klanten%29.md). 2 nieuwe MIDDEL-kandidaten toegevoegd aan [Voorbeelden Gevonden Organisaties (B2B Klanten)](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20A%20-%20B2B%20Klanten/Voorbeelden%20Gevonden%20Organisaties%20%28B2B%20Klanten%29.md), geen dubbelingen met de bestaande lijst of [Pipeline Tracker](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Pipeline%20Tracker.md) (die is nog leeg):\n- **Fervor Pilates** (Berkel en Rodenrijs, Rotterdam-regio) — mat/reformer pilates + dans/peuteroudergym, ✉️ info@fervor.nl, 📞 085-0478378\n- **bbb health boutique Rotterdam** — ladies-only boutique gym (pilates, hot pilates, kickboksen, barre, HIIT, yoga), ✉️ rotterdam@bbbhealthboutique.nl, 📞 088-6440010\n\n**Zijvondst (niet toegevoegd, wel signaal):** een websearch naar padelclub-pro shops leverde op dat **Padelclub Rotterdam** (5 vestigingen, 30+ banen) een eigen clubshop/pro shop met kleding en accessoires heeft — dit lijkt tegenstrijdig met de bestaande uitsluiting in [Voorwaarden Samenwerking](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20B%20-%20Samenwerkingen/Voorwaarden%20Samenwerking.md) (\"Padelclub Rotterdam — geen event, geen pro shop\"). Niet zelf toegevoegd of gecorrigeerd (zou een eerdere afwijs-beslissing overschrijven, dat hoort niet bij deze routine) — zie \"Openstaande beslissingen\" hieronder.\n\n**Samenwerkingen/Events (Lijn B) — zoekactie uitgevoerd (lijst was 14 dagen oud):**\nWebsearch volgens [Zoek Script & Gids (Samenwerkingen)](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20B%20-%20Samenwerkingen/Zoek%20Script%20%26%20Gids%20%28Samenwerkingen%29.md) (voetbaltoernooien, streetball, obstacle run), getoetst aan [Voorwaarden Samenwerking](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20B%20-%20Samenwerkingen/Voorwaarden%20Samenwerking.md). 1 nieuwe MIDDEL-kandidaat toegevoegd aan [Voorbeelden Gevonden Organisaties (Events)](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20B%20-%20Samenwerkingen/Voorbeelden%20Gevonden%20Organisaties%20%28Events%29.md):\n- **Outdoor Valley Obstacle Run** (Bergschenhoek/Lansingerland, Rotterdam-regio, 10 mei 2026) — obstacle run, sterke performance/grip-fit, ~650 deelnemers (Mercy Ships-editie 2026 als indicatie), geen bevestigd sponsorprogramma gevonden dus MIDDEL i.p.v. HOOG\n\nTwee kandidaten expliciet **niet** toegevoegd, met reden:\n- **Harbour Run Rotterdam** (4 okt 2026) — 7.000 deelnemers = Mega-tier volgens [Voorwaarden Samenwerking](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20B%20-%20Samenwerkingen/Voorwaarden%20Samenwerking.md) (\"meestal te duur, kritisch toetsen, in praktijk vaak afwijzen\"), hoofdsponsor is al Havenbedrijf Rotterdam. Zelfde categorie als eerder afgewezen Premier Padel Rotterdam.\n- **CrossFit-wedstrijd Rotterdam** — geen concrete, actuele 2026-editie met contactgegevens gevonden, niet toegevoegd op basis van te weinig onderbouwing.\n\n**Live-site-check (07-09):**\n- Bereikbaar: `https://www.higrip.nl/` geeft HTTP 200, geen 404/500, geen zichtbare Liquid-errors.\n- Merknaam: overal correct \"HÏ Grip\" — geen \"HI Grip\"/\"Hi Grip\" in zichtbare paginatekst.\n- Vertrouwens-elementen aanwezig: e-mail (info@higrip.nl), telefoon, KVK/BTW-nummer, Trustpilot-link, klantlogo's (Hogeschool Rotterdam, Concordia, SYTH, Sport2000), \"3000+ sporters\"-social proof.\n- **Structured data is teruggegaan sinds vorige week.** Op 31-08 was bevestigd: Organization + WebSite + FAQPage (8 vragen) allemaal live. Vandaag (07-09) staat er nog maar **1 JSON-LD-blok** in de `<head>`, alleen `Organization` (naam + logo + url) — geen `WebSite`, geen `FAQPage`. Ook gecheckt op de losse FAQ-pagina (`/pages/veelgestelde-vragen`): ook daar geen FAQPage-schema. Dit is dus geen verplaatsing maar een echte regressie. Oorzaak onbekend (mogelijk een theme-republicatie of -wijziging na 31-08) — [Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md) is hier niet op aangepast, klopt dus sowieso al niet (zie ook vorige week) en nu extra achterhaald.\n\n**SEO-check (07-09):**\n- `<title>` = nog steeds **\"HÏ Grip\"** (7 tekens) — ongewijzigd t.o.v. 31-08, het voorstel van 2 weken terug is niet doorgevoerd.\n- `<meta name=\"description\">` = nog steeds **175 tekens** — ongewijzigd, zelfde tekst als 31-08.\n- Sitemap bereikbaar op `https://www.higrip.nl/sitemap.xml` (HTTP 200), geldige sitemap-index met 9 sub-sitemaps (producten/pagina's/collecties/blogs NL+EN + agentic discovery sitemap) — ongewijzigd.\n- FAQPage-inhoud kon dit keer niet gecheckt worden — de structured data zelf is er niet meer (zie hierboven).\n- Geen van deze bevindingen zelf aangepast — alleen gesignaleerd, wijziging is aan lars/Website Agent via [Technische Procedures](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Technische%20Procedures.md).\n\n### Openstaande beslissingen voor lars\n\n- **SEO-titel en meta-description homepage aanpassen** — nu 3 weken op de plank (voorstel stond al in [Week 2026-08-31](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Weekoverzicht/Week%202026-08-31.md)): titel te kort/geen keyword, description iets te lang. Kleine, lage-risico wijziging.\n- **Structured data-regressie onderzoeken.** WebSite- en FAQPage-JSON-LD stonden op 31-08 bevestigd live, nu (07-09) alleen nog Organization. Voorstel: nagaan wat er tussen 31-08 en nu aan het thema is gewijzigd (republicatie, app-update, handmatige aanpassing?) en de FAQPage/WebSite-snippets opnieuw toevoegen als dat inderdaad per ongeluk verdwenen is.\n- **[Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md) klopt structureel niet meer** — zegt nog \"nog niet naar live gekopieerd\" terwijl de praktijk inmiddels 2x is gewijzigd (wel live op 31-08, deels weer weg op 07-09). Buiten schrijfrechten van deze routine; voorstel is dat Website Agent dit bestand bij een volgende wijziging überhaupt als bron van waarheid gaat bijhouden.\n- **Padelclub Rotterdam — mogelijk verouderde uitsluiting.** Zie hierboven; nieuwe informatie suggereert een bestaande pro shop/clubwinkel, wat de eerdere afwijzing in [Voorwaarden Samenwerking](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20B%20-%20Samenwerkingen/Voorwaarden%20Samenwerking.md) zou kunnen tegenspreken. Voorstel: kort navragen/verifiëren, eventueel alsnog opnemen als Lijn A (B2B)-kandidaat i.p.v. Lijn B.\n- **5 kandidaten wachten op een eerste beoordeling:** Urban Trail Rotterdam & Rotterdam Charity Run (al 2 weken), Outdoor Valley Obstacle Run (nieuw), Fervor Pilates & bbb health boutique Rotterdam (nieuw).\n- **Merk & Bedrijf Database / Retailer Database** — nog steeds niet bevestigd of deze verwijderd mogen worden.\n\n### Vooruitblik — komende week\n\n1. **SEO-titel/description homepage doorvoeren** — het voorstel ligt er al 3 weken, kleine wijziging via de reguliere theme-procedure.\n2. **Structured data-regressie uitzoeken en herstellen** — WebSite/FAQPage staan niet meer live; eerst de oorzaak vinden (theme-log/republicatie-historie), dan opnieuw toevoegen.\n3. **[Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md) structureel bijwerken** zodra de structured data-situatie is opgelost, zodat het weer een betrouwbare bron is in plaats van 5 weken achter te lopen.\n4. **Beoordeling geven op de 5 openstaande partnership-kandidaten** (2 B2B, 3 Events) — sommige liggen al 2+ weken te wachten.\n5. **Analytics-vervolgstappen oppakken** — funnel-rapport op de historische GA4-data (mrt–dec 2025) en checken of purchase-events doorkomen; dit stond al 2 weken als actiepunt en is nog niet opgepakt.\n\n### AI-ontwikkelingen die relevant kunnen zijn\n\n1. **Shopify Rollouts (native A/B-testen, Winter '26, early access)** — ingebouwde split-testing direct in de Shopify-admin (Online Store > Themes), geen app of extra kosten nodig. Rechtstreeks bruikbaar voor `/shopify-cro`: de titel/description-wijziging en toekomstige CRO-voorstellen uit de [Conversie Optimalisatie Checklist](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Analyse/Conversie%20Optimalisatie%20Checklist.md) zouden hiermee eerst getest kunnen worden op een deel van het verkeer i.p.v. direct volledig door te voeren. Beperking: werkt nu alleen op het gepubliceerde thema via de theme-editor, geen Liquid-bestandswijzigingen.\n2. **Shopify's agentic-commerce-laag breidt verder uit** (Agentic Storefronts: producten zichtbaar in ChatGPT/Copilot/Perplexity, Storefront MCP). Maakt de structured-data-regressie van deze week extra relevant — niet alleen Google-SEO maar ook vindbaarheid voor AI-shopagents hangt af van correcte Organization/WebSite/FAQPage-schema's.\n3. **Buffer's AI Assistant staat nu op alle plannen, inclusief het gratis plan** (rewrites, hashtags, platform-specifieke varianten van één contentidee). Relevant zodra Content Agent-automatisering ter sprake komt met de content-afdeling — de tooling is er, alleen de interne afstemming ontbreekt nog.\n\n### Gerelateerde bestanden\n\n- [Stappenplan — Verdere Bouw](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Stappenplan%20%E2%80%94%20Verdere%20Bouw.md)\n- [Feedback & Iteratie Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Feedback%20%26%20Iteratie%20Log.md)\n- [Agent Werk & Kwaliteit Overzicht](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Agent%20Werk%20%26%20Kwaliteit%20Overzicht.md)\n\n## Acties\n\n- [x] P1 · Structured data-regressie onderzoeken en herstellen — overgenomen in Week 2026-09-14\n- [x] P2 · Homepage-title en meta description doorvoeren — overgenomen in Week 2026-09-14\n- [x] P3 · Update Log structureel bijwerken — overgenomen in Week 2026-09-14\n- [x] P2 · Padelclub Rotterdam-uitsluiting verifiëren — overgenomen in Week 2026-09-14\n- [x] P2 · 5 partnership-kandidaten beoordelen — overgenomen in Week 2026-09-14\n- [x] P2 · Analytics-vervolgstappen (funnel-rapport, purchase-events) — overgenomen in Week 2026-09-14\n\n## Bronnen\n\n- Origineel: [Week 2026-09-07](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Weekoverzicht/Week%202026-09-07.md) (`04_Agent_Infrastructuur/Beheer/Weekoverzicht/`)\n- Routine: [Denzel Weekoverzicht — Routine](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Denzel%20Weekoverzicht%20%E2%80%94%20Routine.md)\n\n## Aantekeningen",
   "bron": "routine",
   "bronbestand": "C:\\Users\\Test\\OneDrive\\Documents\\HI-Grip-Vault-\\04_Agent_Infrastructuur\\Beheer\\Weekoverzicht\\Week 2026-09-07.md",
   "bronbestand_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Weekoverzicht/Week%202026-09-07.md",
   "categorie": "Merk",
   "datum": "2026-09-07",
   "deadline": "",
   "gerelateerd": [
    "2026-08-31-weekoverzicht",
    "2026-09-14-weekoverzicht"
   ],
   "id": "2026-09-07-weekoverzicht",
   "kansen": [],
   "kerncijfers": [],
   "kerntitel": "",
   "prioriteit": "P2",
   "routine": "denzel-week",
   "samenvatting": "Structured data op live is teruggevallen naar alleen Organization (regressie sinds 31-08). Twee zoekacties: Fervor Pilates en bbb health boutique (B2B), Outdoor Valley Obstacle Run (Events). De uitsluiting van Padelclub Rotterdam is mogelijk verouderd. Shopify Rollouts (native A/B) in early access.",
   "status": "gearchiveerd",
   "titel": "Denzel Weekoverzicht — 2026-09-07",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-07-weekoverzicht.md",
   "vervangt": [
    "2026-08-31-weekoverzicht"
   ],
   "wat_niet_lukte": ""
  },
  {
   "acties": [
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Administratie bij UPV Textiel; niet online waar te nemen.",
      "controle": "Aansluiting UPV Textiel regelen.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-07-compliance-todo#24a0372f",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "§1.1 Aansluiten bij UPV Textiel: aansluiting controleren, achterstallige jaren melden, jaaropgave (rond 1 augustus) agenderen",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Zoekt de UPV Textiel-eisen en meldprocedure uit en zet de jaaropgave-datum in een checklist.",
      "wat_jij_doet": "Aansluiten en melden bij UPV Textiel."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Administratie bij Verpact en TikTok; mensenwerk.",
      "controle": "Verpakkingenadministratie en TikTok-EPR invullen.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-07-compliance-todo#8f1e2cfb",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "§1.2 Verpakkingenadministratie opzetten (Verpact, aantonen onder 50.000 kg) + TikTok Shop Qualification Center EPR-sectie invullen",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Maakt een sjabloon voor de verpakkingenadministratie en de EPR-antwoorden.",
      "wat_jij_doet": "Gegevens invullen in het Verpact- en TikTok-portaal."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Toets met leverancier; mensenwerk.",
      "controle": "Verzendverpakking toetsen aan PPWR.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-07-compliance-todo#d9728abb",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "§1.3 Verzendverpakking toetsen aan PPWR: loze ruimte ≤ ~50%, conformiteitsverklaring bij leverancier",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Schrijft de PPWR-toets en een verzoek om een conformiteitsverklaring aan de leverancier.",
      "wat_jij_doet": "Verpakking meten en het verzoek versturen."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Administratie vóór export; mensenwerk.",
      "controle": "Buitenlandse UPV regelen.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-07-compliance-todo#30488d7c",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "§1.4 Buitenlandse UPV regelen vóór de eerste zending naar een nieuw land",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Zet de UPV-eisen per doelland in een checklist.",
      "wat_jij_doet": "Registreren voor de eerste zending."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "/products/performance-gripsokken toont nog 'Katoen · Polyester · Nylon · Spandex'; Nylon/Spandex zijn geen EU-benamingen (polyamide/elastaan).",
      "controle": "Staat de vezelsamenstelling met EU-benamingen op alle productpagina's?",
      "gecontroleerd": "2026-09-26",
      "methode": "site",
      "uitkomst": "open"
     },
     "id": "2026-09-07-compliance-todo#841f80c9",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "§2.1 Vezelsamenstelling op het label én op alle productpagina's (officiële EU-benamingen)",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Schrijft het vezelsamenstellingsblok in het testthema (bij bekende samenstelling).",
      "wat_jij_doet": "Samenstelling bevestigen, het label laten aanpassen en publiceren."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Opvragen bij de fabrikant; mensenwerk.",
      "controle": "OEKO-TEX-certificaat en RSL-verklaring opvragen.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-07-compliance-todo#371037f5",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "§2.2 OEKO-TEX STANDARD 100-certificaat en ondertekende RSL-verklaring bij de fabrikant opvragen",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Schrijft een verzoek aan de fabrikant om het OEKO-TEX-certificaat en de RSL-verklaring.",
      "wat_jij_doet": "Verzoek versturen."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Opvragen bij de fabrikant; mensenwerk.",
      "controle": "SVHC-verklaring opvragen.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-07-compliance-todo#95bca180",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "§2.3 SVHC-verklaring opvragen; SCIP-melding alleen indien boven 0,1%",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Schrijft een verzoek om een SVHC-verklaring.",
      "wat_jij_doet": "Verzoek versturen."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Geen copy-checklist-bestand gevonden in de vault.",
      "controle": "Staan verboden biocide-claims in een copy-checklist?",
      "gecontroleerd": "2026-09-26",
      "methode": "vault",
      "uitkomst": "open"
     },
     "id": "2026-09-07-compliance-todo#0dcfc0b5",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "§2.4 Verboden biocide-claims (antibacterieel, antimicrobieel) opnemen in de copy-checklist",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Voegt de verboden biocide-claims toe aan de copy-checklist in de vault.",
      "wat_jij_doet": "Niets."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "/products/performance-gripsokken: geen GPSR-blok met fabrikant/verantwoordelijke en adres gevonden.",
      "controle": "Staat het GPSR-blok op elke productpagina?",
      "gecontroleerd": "2026-09-26",
      "methode": "site",
      "uitkomst": "open"
     },
     "id": "2026-09-07-compliance-todo#c7eeb693",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "§3.1 GPSR-gegevens op label, verpakking en als vast blok op elke productpagina; batchnummering per productieronde",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Maakt het GPSR-blok in het testthema en een tekst voor label en verpakking.",
      "wat_jij_doet": "Label laten drukken, batchnummers invoeren en publiceren."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Dossier buiten de site; mensenwerk.",
      "controle": "Technische documentatie en risicoanalyse aanleggen.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-07-compliance-todo#e54f05a9",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "§3.2 Technische documentatie + risicoanalyse per product aanleggen (bewijsmap, 10 jaar)",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Maakt een sjabloon voor technische documentatie en risicoanalyse per product in de vault.",
      "wat_jij_doet": "Productgegevens en testrapporten aanleveren."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Interne administratie; mensenwerk.",
      "controle": "Klachtenregister en terugroepprocedure opzetten.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-07-compliance-todo#e62bb626",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "§3.3 Klachtenregister opzetten en terugroepprocedure van één A4 schrijven",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Schrijft het klachtenregister-sjabloon en de terugroepprocedure (een A4).",
      "wat_jij_doet": "Niets."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Geen claimstrategie skisokken buiten de Compliance To-Do Lijst zelf gevonden.",
      "controle": "Is de claimstrategie voor skisokken vastgelegd?",
      "gecontroleerd": "2026-09-26",
      "methode": "vault",
      "uitkomst": "open"
     },
     "id": "2026-09-07-compliance-todo#08f96665",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "§3.4 Claimstrategie skisokken met gelprotection vastleggen vóór de copy — comfort/drukverdeling, geen letselpreventie",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Schrijft de claimstrategie voor de skisokken (comfort, geen letselpreventie).",
      "wat_jij_doet": "Akkoord geven."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Contact met verzekeraar; mensenwerk.",
      "controle": "Productaansprakelijkheidsverzekering checken.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-07-compliance-todo#ef703dd7",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "§3.5 Productaansprakelijkheidsverzekering met productdekking checken (richtlijn uiterlijk 9 december 2026 omgezet)",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Zet de vragen voor de verzekeraar op een rij.",
      "wat_jij_doet": "Polis checken bij de verzekeraar."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Homepage-footer toont KVK 97210129 en BTW NL867952283B01, geen vestigingsadres; /pages/contact heeft wel 'Adres'.",
      "controle": "Staan vestigingsadres, KvK en btw-id in footer en op de contactpagina?",
      "gecontroleerd": "2026-09-26",
      "methode": "site",
      "uitkomst": "open"
     },
     "id": "2026-09-07-compliance-todo#70978779",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "§4.1 Footer en contactpagina aanvullen: vestigingsadres, KvK-nummer, btw-id",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Zet het footer- en contactblok in het testthema met plekken voor adres, KvK en btw-id.",
      "wat_jij_doet": "Gegevens invullen en publiceren."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "/policies/refund-policy: nog 14 dagen, ongeopend, 25% herbevoorradingskosten; geen modelformulier gevonden.",
      "controle": "Kloppen retourpagina, modelformulier en terugbetaling met het herroepingsrecht?",
      "gecontroleerd": "2026-09-26",
      "methode": "site",
      "uitkomst": "open"
     },
     "id": "2026-09-07-compliance-todo#ad0b9d7c",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "§4.2 Herroepingsrecht nalopen: retourpagina, modelformulier, terugbetaling incl. verzendkosten, bestelknop-tekst",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Toetst retourpagina en knoptekst en schrijft het modelformulier en de aangepaste teksten.",
      "wat_jij_doet": "Beleid in admin plakken."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "/policies/terms-of-service art. 8: nog 'garantietermijn van 1 maand op fabricage- of materiaalfouten'.",
      "controle": "Zijn de garantieteksten herschreven?",
      "gecontroleerd": "2026-09-26",
      "methode": "site",
      "uitkomst": "open"
     },
     "id": "2026-09-07-compliance-todo#7c92cd94",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "§4.3 Garantieteksten herschrijven — geen \"1 jaar garantie\" naast de wettelijke conformiteit",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Herschrijft de garantieteksten.",
      "wat_jij_doet": "Tekst in admin of thema plakken."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Geen ODR-link meer in footer of voorwaarden, maar art. 8 zegt alleen 'Klachten kunnen gemeld worden via info@higrip.nl', geen procedure.",
      "controle": "Is de ODR-link vervangen door een eigen klachtenprocedure?",
      "gecontroleerd": "2026-09-26",
      "methode": "site",
      "uitkomst": "open"
     },
     "id": "2026-09-07-compliance-todo#5c31dc93",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "§4.4 ODR-link uit footer en voorwaarden halen, vervangen door eigen klachtenprocedure",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Haalt de ODR-link uit de footer in het testthema en schrijft de klachtenprocedure.",
      "wat_jij_doet": "Voorwaarden in admin aanpassen en publiceren."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Afweging van het team.",
      "controle": "Keurmerk overwegen.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-07-compliance-todo#c005d4e1",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "§4.5 Keurmerk overwegen: Thuiswinkel Waarborg of WebwinkelKeur",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Vergelijkt Thuiswinkel Waarborg en WebwinkelKeur op kosten en eisen.",
      "wat_jij_doet": "Kiezen en aanmelden."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Geen bewijsdossier-bestand in de vault; feitenbestand onderbouwt de claims wel met bronnen.",
      "controle": "Is er een bewijsdossier voor de gripclaims?",
      "gecontroleerd": "2026-09-26",
      "methode": "vault",
      "uitkomst": "open"
     },
     "id": "2026-09-07-compliance-todo#e0e2770b",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "§5.1 Bewijsdossier gripclaims: bron van \"95%\" en \"1.17\" achterhalen, zo nodig labtest, goedgekeurde formulering vastleggen, \"1.500+ sporters\" onderbouwen",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Zoekt de bron van 95% en 1.17 in vault en literatuur en stelt een formulering voor.",
      "wat_jij_doet": "Labtest laten doen als er geen bron is en de formulering goedkeuren."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Geen prijslogboek-bestand in de vault gevonden.",
      "controle": "Zijn van-prijzen getoetst en is er een prijslogboek?",
      "gecontroleerd": "2026-09-26",
      "methode": "vault",
      "uitkomst": "open"
     },
     "id": "2026-09-07-compliance-todo#d4e965b6",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "§5.2 Van-prijzen toetsen aan de 30-dagenregel en een prijslogboek aanleggen",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Haalt de prijshistorie op via de Shopify-connector (alleen lezen) en maakt een prijslogboek.",
      "wat_jij_doet": "Van-prijzen aanpassen als ze niet kloppen."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Geen reviewbeleid-pagina in sitemap_pages_1.xml of GraphQL pages.",
      "controle": "Is er een reviewbeleid gepubliceerd?",
      "gecontroleerd": "2026-09-26",
      "methode": "site",
      "uitkomst": "open"
     },
     "id": "2026-09-07-compliance-todo#c5185af4",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "§5.3 Reviewbeleid publiceren (alinea bij reviewsectie + pagina)",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Schrijft het reviewbeleid (alinea en pagina).",
      "wat_jij_doet": "Publiceren in admin."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Geen screening van duurzaamheidsclaims vastgelegd buiten de Compliance To-Do Lijst zelf.",
      "controle": "Zijn de duurzaamheidsclaims gescreend?",
      "gecontroleerd": "2026-09-26",
      "methode": "vault",
      "uitkomst": "open"
     },
     "id": "2026-09-07-compliance-todo#a41e0356",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "§5.4 Duurzaamheidsclaims screenen — richtlijn (EU) 2024/825 van toepassing vanaf 27 september 2026 (deadline)",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Screent site en teksten op duurzaamheidsclaims en levert vervangende tekst.",
      "wat_jij_doet": "Aanpassingen live zetten."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Contracten buiten de vault; mensenwerk.",
      "controle": "Influencer-clausule in samenwerkingscontracten.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-07-compliance-todo#5ca6f59a",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "§5.5 Influencer-clausule (#advertentie, geen onbewezen claims) in alle samenwerkingscontracten",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Schrijft de influencer-clausule voor de contracten.",
      "wat_jij_doet": "Opnemen in de contracten."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Interne AVG-administratie; mensenwerk.",
      "controle": "Verwerkingsregister opstellen.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-07-compliance-todo#e2a53ef3",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "§6.1 Verwerkingsregister (AVG art. 30) opstellen",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Stelt het verwerkingsregister op uit de toollijst.",
      "wat_jij_doet": "Controleren."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Downloaden per tool; mensenwerk.",
      "controle": "Verwerkersovereenkomsten archiveren.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-07-compliance-todo#8288285a",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "§6.2 Verwerkersovereenkomsten per tool downloaden en archiveren",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "nee",
      "wat_claude_doet": "Maakt de lijst van tools waarvoor een overeenkomst nodig is.",
      "wat_jij_doet": "Verwerkersovereenkomsten downloaden in elk account."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "niet te controleren: de banner verschijnt pas na JavaScript-rendering.",
      "controle": "Heeft de cookiebanner een gelijkwaardige weigerknop en Consent Mode v2?",
      "gecontroleerd": "2026-09-26",
      "methode": "site",
      "uitkomst": "open"
     },
     "id": "2026-09-07-compliance-todo#e2fd0adb",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "§6.3 Cookiebanner herzien: gelijkwaardige weiger-knop, Consent Mode v2, testen met schone browser",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Test de banner in een schone browser en schrijft de instellingen voor Consent Mode v2.",
      "wat_jij_doet": "Instellingen in de cookie-app aanpassen."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "/policies/privacy-policy noemt Google Analytics en Microsoft Clarity niet.",
      "controle": "Noemt de privacyverklaring de werkelijke tools?",
      "gecontroleerd": "2026-09-26",
      "methode": "site",
      "uitkomst": "open"
     },
     "id": "2026-09-07-compliance-todo#c92ff3a9",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "§6.4 Privacyverklaring laten matchen met de werkelijke toolset",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Herschrijft de privacyverklaring op de werkelijke toolset.",
      "wat_jij_doet": "Plakken in admin > Beleid."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Interne administratie; mensenwerk.",
      "controle": "Datalekprocedure en -register.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-07-compliance-todo#3d04c3b3",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "§6.5 Datalekprocedure (één A4) en intern datalekregister",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Schrijft de datalekprocedure en het registersjabloon.",
      "wat_jij_doet": "Niets."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Handmatige controle van formulieren en checkout.",
      "controle": "E-mail- en SMS-opt-ins nalopen.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-07-compliance-todo#1be6b788",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "§6.6 E-mail- en SMS-marketing: inschrijfformulieren, pop-ups en checkout-opt-ins nalopen",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Controleert formulieren en opt-ins op de site en levert de aanpassingen.",
      "wat_jij_doet": "Instellingen in Klaviyo of Shopify aanpassen."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Boekhouding; mensenwerk.",
      "controle": "EU-omzet voor OSS monitoren.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-07-compliance-todo#25efb9af",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "§7.1 EU-omzet buiten NL monitoren; bij nadering €10.000 aanmelden voor OSS",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Meet de EU-omzet buiten NL via ShopifyQL in de Actiecontrole.",
      "wat_jij_doet": "OSS-aanmelding doen als de grens nadert."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Douane-administratie; mensenwerk.",
      "controle": "Importdossier regelen.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-07-compliance-todo#c217b298",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "§7.2 Importdossier: EORI-nummer, art. 23-vergunning, GN-post 6115 en oorsprongsdocumenten",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Maakt een checklist voor het importdossier.",
      "wat_jij_doet": "EORI en vergunning aanvragen."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Controle in het KvK-register door de ondernemers.",
      "controle": "KvK-gegevens controleren.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-07-compliance-todo#f4e503ea",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "§7.3 KvK-gegevens controleren (SBI-code, vestigingsadres)",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "nee",
      "wat_claude_doet": "Kan het KvK-uittreksel niet inzien.",
      "wat_jij_doet": "KvK-gegevens controleren in het KvK-portaal."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "/policies/terms-of-service: 0x 'betaaltermijn' of 'B2B'.",
      "controle": "Staat de B2B-betaaltermijn in de voorwaarden?",
      "gecontroleerd": "2026-09-26",
      "methode": "site",
      "uitkomst": "open"
     },
     "id": "2026-09-07-compliance-todo#b8f1e4b9",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "§7.4/§7.5 B2B-betaaltermijn 30 dagen in voorwaarden; RI&E zodra iemand in dienst komt",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Schrijft de B2B-betaaltermijnclausule voor de voorwaarden.",
      "wat_jij_doet": "Voorwaarden bijwerken."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Niet volledig te controleren; homepage: 9 van 25 afbeeldingen zonder alt.",
      "controle": "Voldoet het thema aan WCAG 2.1 AA?",
      "gecontroleerd": "2026-09-26",
      "methode": "site",
      "uitkomst": "open"
     },
     "id": "2026-09-07-compliance-todo#e2982cd0",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "§8.1 WCAG 2.1 AA in het thema: contrast #CCFF00, alt-teksten, formulierlabels, focus-states, ondertiteling",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Fixt contrast, labels en focus-states in het testthema.",
      "wat_jij_doet": "Testthema publiceren."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "niet te controleren: geen toegang tot de lokale OneDrive vanuit de cloudomgeving.",
      "controle": "Bestaat er een centrale compliance-bewijsmap?",
      "gecontroleerd": "2026-09-26",
      "methode": "vault",
      "uitkomst": "open"
     },
     "id": "2026-09-07-compliance-todo#d0aadc5c",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "§9.1 Eén centrale compliance-bewijsmap inrichten (OneDrive naast de vault)",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "nee",
      "wat_claude_doet": "Heeft geen toegang tot OneDrive buiten de vault.",
      "wat_jij_doet": "Map aanmaken in OneDrive."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Agenda van het team.",
      "controle": "Jaarlijkse compliance-check agenderen.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-07-compliance-todo#0c0055d2",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "§9.2 Jaarlijkse compliance-check in Q1 agenderen",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "nee",
      "wat_claude_doet": "Kan geen afspraken in de agenda zetten.",
      "wat_jij_doet": "Q1-check in de agenda zetten."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Antwoorden van de ondernemers.",
      "controle": "Interne compliance-vragen beantwoorden.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-07-compliance-todo#fed0c5d5",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Openstaande interne vragen beantwoorden: UPV-aansluiting, bron gripcijfers, materiaal grip-print, medewerkers/omzet, exportlanden, AVB",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "nee",
      "wat_claude_doet": "Zet de vragen als checklist klaar.",
      "wat_jij_doet": "Lars beantwoordt de vragen."
     }
    }
   ],
   "body_md": "# Compliance-verplichtingen NL/EU — to-do per categorie\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\nPrioriteit hieronder volgt de legenda van de bron: 🔴 rechtsrisico loopt nu al → P1, 🟠 binnen 30 dagen → P2, 🟡/⚪ → P3. Werkdocument, geen juridisch advies — 🔴-punten laten toetsen (jurist, Modint, Thuiswinkel.org). Tweede datum om te onthouden: Productaansprakelijkheidsrichtlijn uiterlijk 9 december 2026 in NL recht.\n\n## Bevindingen\n\n> Alle wettelijke verplichtingen (NL + EU) waar HÏ Grip aan moet voldoen, gesorteerd per categorie. Per taak staat **waar** je het regelt en **hoe**. Opgesteld 2026-09-07.\n>\n> Dit is een werkdocument, geen juridisch advies. Laat de items met 🔴 toetsen door een jurist of via Modint / Thuiswinkel.org. Portaal-URL's kunnen wijzigen — verifieer bij eerste gebruik.\n\n---\n\n### Legenda\n\n| Symbool | Betekenis |\n|---|---|\n| 🔴 | Rechtsrisico loopt nu al — direct oppakken |\n| 🟠 | Binnen 30 dagen regelen |\n| 🟡 | Vóór volgende lancering / dit kwartaal |\n| ⚪ | Monitoren, nog niet actief |\n\n---\n\n### 0. Start hier — de vijf die als eerste moeten\n\n- [ ] UPV Textiel-aansluiting (§1.1)\n- [ ] GPSR fabrikantgegevens op label + productpagina (§3.1)\n- [ ] Bewijsdossier \"95% meer grip\" en \"1.17\" (§5.1)\n- [ ] Van-prijzen toetsen aan 30-dagenregel (§5.2)\n- [ ] Vezelsamenstelling op alle productpagina's (§2.1)\n\n---\n\n### 1. Producentenverantwoordelijkheid & Afval\n\n#### 1.1 🔴 Aansluiten bij UPV Textiel\n\n- [ ] Aansluiting controleren en zo nodig regelen\n- [ ] Achterstallige jaren melden\n- [ ] Jaarlijkse opgave in de agenda zetten\n\n**Wat:** Besluit UPV textiel (sinds 1 juli 2023). Geldt voor iedereen die textiel als eerste op de NL-markt brengt. Sokken vallen onder \"kleding\". Géén ondergrens — ook 500 paar telt.\n\n**Waar:** Stichting UPV Textiel (`upvtextiel.nl`) — collectieve uitvoerder. Alternatief: individueel melden bij Rijkswaterstaat via het meldportaal UPV Textiel (te vinden via `afvalcirculair.nl` of `rijkswaterstaat.nl`).\n\n**Hoe:**\n1. Controleer of HÏ Grip al is aangesloten (navragen bij boekhouder/oprichter).\n2. Zo niet: aanmeldformulier invullen bij Stichting UPV Textiel — nodig zijn KvK-nummer, btw-id en de jaarlijkse hoeveelheid textiel in **kg**.\n3. Bepaal het gewicht: aantal verkochte paren × gewicht per paar (weeg een paar inclusief hangtag en label).\n4. Ook achterstallige jaren melden — niet-melden is een economisch delict.\n\n**Terugkerend:** jaarlijkse opgave, deadline in de zomer (rond 1 augustus) over het voorgaande kalenderjaar.\n\n**Bewijs bewaren:** bevestiging aansluiting, jaaropgaven, facturen afvalbeheerbijdrage.\n\n#### 1.2 🟠 UPV Verpakkingen — Verpact (voorheen Afvalfonds Verpakkingen)\n\n- [ ] Verpakkingenadministratie opzetten (berekening onder 50.000 kg)\n- [ ] Leveranciersverklaringen PPWR-conformiteit verzamelen\n- [ ] TikTok Shop Qualification Center → EPR-sectie invullen (zie hieronder)\n\n> **Correctie 2026-09-14:** eerder stond hier dat de opgaveplicht onder 50.000 kg blijft. Dat klopt niet. Afvalfonds Verpakkingen heet inmiddels **Verpact**.\n\n**Wat:** UPV Verpakkingen. Je verstuurt pakketjes, dus je brengt verpakking op de markt — de verzenddoos én de verpakking waarin de sokken uit de fabriek komen (polybag, kartonnen wikkel, hangtag). Bij verzending via een fulfilmentpartner blijft HÏ Grip de producent.\n\n**Regel NL (2026):** onder **50.000 kg per kalenderjaar** hoef je **geen aangifte** te doen en **geen afvalbeheersbijdrage** te betalen. Er is dan ook **geen Verpact-registratienummer**. Wél verplicht: kunnen aantonen dát je onder de drempel zit — Verpact kan dat controleren.\n\n**Uitzondering:** voor statiegeldverpakkingen en single-use plastics (SUP) geldt géén drempel. Een polybag om sokken valt niet onder SUP; check dit wel als je ooit andere plastic items meelevert.\n\n**Waar:** `verpact.nl` → \"Moet ik aangifte doen?\" + Handreiking verpakkingenadministratie.\n\n**Hoe — administratie:**\n1. Weeg per verpakkingstype: verzenddoos/-zak, tape, vulmateriaal, polybag, kartonnen wikkel, hangtag.\n2. Vermenigvuldig met het aantal zendingen/verkochte paren per jaar, per materiaalsoort.\n3. Leg de berekening vast in één spreadsheet per kalenderjaar en bewaar die in de bewijsmap (§9).\n4. Herhaal jaarlijks — bij groei of een nieuw kanaal (TikTok Shop) kan het volume snel oplopen.\n\n**TikTok Shop (NL/BE, live sinds 15 juni 2026):**\n- EPR-gegevens lever je aan via **Seller Center → My Account → Account settings → Qualification Center → Extended Producer Responsibility**.\n- De juridische entiteit van de EPR-registratie moet **exact gelijk** zijn aan de bedrijfsnaam op je TikTok Shop-account.\n- **Nederland (bevestigd uit Seller Center, 2026-09-14):** géén verplicht nummer en géén automatische inschrijving. Je levert zelf EPR-informatie aan per productcategorie; TikTok vertrouwt erop dat die klopt en kan controleren.\n  - **Verpakking:** onder de Verpact-drempel is er geen nummer → niets invullen. Vul nooit een verzonnen nummer in.\n  - **Textiel:** voer hier de **UPV Textiel-registratie (§1.1)** in. Die kent géén drempel en is dus wél verplicht.\n- **Frankrijk, Italië, Spanje:** hier is een EPR-nummer **verplicht**. Zonder geldig nummer word je **automatisch ingeschreven voor EPR Pay On Behalf** (TikTok rekent kosten). Welke categorieën POB per land dekt en hoe je zelf registreert: zie §1.4. Duitsland heeft géén POB.\n- **Verenigd Koninkrijk:** alleen relevant bij verkoop op TikTok Shop UK. Als niet-Brits bedrijf word je dan automatisch ingeschreven in het EPR-bijdrageprogramma.\n- Verstuur je via TikTok Shop ook naar **Belgische** klanten → zie §1.4.\n\n**Komt eraan:** onder de PPWR komt een verplicht nationaal producentenregister (verwacht vanaf **augustus 2027**, eerste rapportagejaar 2028). De 50.000 kg-drempel vervalt dan naar verwachting; iedereen krijgt een registratienummer. Nederlandse uitvoeringsregels zijn nog niet gepubliceerd.\n\n#### 1.3 🟡 Verzendverpakking toetsen aan PPWR\n\n- [ ] Loze ruimte in de verzenddoos meten\n- [ ] Conformiteitsverklaring bij verpakkingsleverancier opvragen\n\n**Wat:** EU Verpakkingsverordening 2025/40, van toepassing sinds 12 augustus 2026. Belangrijkste nu: **loze ruimte in e-commerceverpakking max ongeveer 50%**.\n\n**Waar:** intern, samen met de fulfilmentpartner en verpakkingsleverancier.\n\n**Hoe:**\n1. Meet de gebruikte doos tegen het volume van een bestelling van 1 paar.\n2. Te veel leegte? Stap over op een kleinere doos of verzendzak per bestelgrootte.\n3. Vraag de leverancier om een PPWR-conformiteitsverklaring en recyclebaarheidsinfo.\n\n**Later:** materiaal- en sorteerlabel op verpakking wordt gefaseerd verplicht — heropnemen in 2027.\n\n#### 1.4 ⚪ Buitenlandse UPV bij export\n\n- [ ] Registreren vóór de eerste zending naar een nieuw land\n\n**Wat:** verkoop je aan consumenten in een ander land, dan geldt daar een eigen registratieplicht. De Nederlandse 50.000 kg-drempel geldt daar níét. Stand 2026-09-14.\n\n| Land | Verpakking | Textiel (sokken) | Gemachtigde nodig? | TikTok Pay On Behalf (POB) |\n|---|---|---|---|---|\n| **België** | Fost Plus / Valipac. Drempel **300 kg/jaar**; daaronder alleen informatieplicht richting de IVC. | nog geen EPR | nee | n.v.t. |\n| **Duitsland** | **LUCID** (gratis) + contract met een **duaal systeem**. **Geen drempel.** | nog geen EPR | nee | **Niet beschikbaar** — zonder eigen LUCID-nummer geen verkoop |\n| **Frankrijk** | Eco-organisme **Citeo** (of Léko/Adelphe) → ADEME geeft een **IDU** per stroom. | **Refashion** → aparte IDU. Wél EPR. | **Ja** — Franse gemachtigde verplicht sinds juli 2026 (te verifiëren of dit ook voor EU-bedrijven geldt) | Ja: verpakking + textiel |\n| **Spanje** | Registratie in het **RPP** + aansluiting bij **Ecoembes**. Geen drempel. Spaans NIF nodig. | nog geen EPR (decreet in voorbereiding) | **Ja** — RD 1055/2022 art. 17.2 | Ja: alleen verpakking |\n| **Italië** | Direct lid worden van **CONAI**. | nog geen EPR (decreet in concept) | nee, niet voor verpakking | Alleen batterijen — **verpakking niet gedekt** |\n\n**TikTok POB-tarieven (2025):** Frankrijk verpakking 0,49% en Spanje verpakking 0,89% van het orderbedrag. Het textieltarief voor Frankrijk staat in het POB-beleid in Seller Center. POB geldt alleen voor verkopen via TikTok, niet voor de eigen webshop.\n\n**Advies bij kleine volumes:**\n- **Frankrijk en Spanje via TikTok:** gebruik POB. Eigen registratie vereist een lokale gemachtigde en kost al snel meer dan het POB-percentage.\n- **Duitsland:** zelf regelen — (1) registreren op LUCID en DE-registratienummer ontvangen, (2) contract met een duaal systeem (bijv. Lizenzero, Interzero, Der Grüne Punkt; indicatief €50–300/jaar), (3) dezelfde hoeveelheden melden in LUCID als aan het systeem, (4) nummer invoeren in TikTok Qualification Center.\n- **Italië:** CONAI-lidmaatschap is wettelijk verplicht en POB dekt het niet. Check eerst of TikTok Shop Italië het nummer vraagt.\n- **Eigen webshop naar die landen:** dan heb je de eigen registratie nodig; POB helpt dan niet.\n\n**Let op TikTok Shop:** de NL/BE-shop kan Belgische bestellingen opleveren. Houd het verpakkingsgewicht naar België apart bij.\n\n**Markten beheren in TikTok Shop:** andere EU-landen staan níét standaard aan. Je verkoopt er pas als je **Sell Across EU** activeert én producten via de **Global Listing Tool** naar dat land synchroniseert. Uitzetten = in Seller Center naar die markt wisselen en de producten daar deactiveren. Let op: je Account Health Rating telt EU-breed, dus overtredingen in één land raken alle markten.\n\n**Ook nodig bij een nieuw land:** textieletiket in de landstaal (§2.1), GPSR-gegevens (§3.1), btw via OSS boven €10.000 EU-afstandsverkopen (§7.1). Frankrijk: **Triman-logo + Info-tri** op verpakking en textiel.\n\n**Trigger:** zodra een buitenlandse markt actief wordt geopend — zie [Website Structuur & Sitemap](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Strategie/Website%20Structuur%20%26%20Sitemap.md).\n\n---\n\n### 2. Productwetgeving & Etikettering\n\n#### 2.1 🔴 Vezelsamenstelling op label én productpagina\n\n- [ ] Samenstelling opvragen bij fabrikant\n- [ ] Blok toevoegen aan alle Shopify-productpagina's\n- [ ] Fysiek label controleren\n\n**Wat:** Textieletiketteringsverordening (EU) 1007/2011. Verplicht, ook online vóór aankoop.\n\n**Waar:** fysiek label (via fabrikant) + productpagina's op `higrip.nl`.\n\n**Hoe:**\n1. Vraag de exacte samenstelling in gewichtspercentages, opgeteld tot 100%.\n2. Gebruik de officiële EU-benamingen: katoen, polyamide, elastaan, polyester, viscose. Niet \"nylon\" of \"lycra\".\n3. Nederlandstalig, duurzaam en leesbaar op een aangehecht label.\n4. Zet het blok op elke productpagina, bijvoorbeeld in de accordeon \"Materiaal & onderhoud\".\n5. Bevat het product niet-textiele delen van dierlijke oorsprong → verplichte vermelding toevoegen.\n\n**Let op:** wasvoorschriften (GINETEX-symbolen) zijn níét verplicht, wel verstandig. Herkomstland is niet verplicht — vermeld je het, dan moet het kloppen.\n\n#### 2.2 🟠 RSL- en stoffendossier bij de fabrikant opvragen\n\n- [ ] OEKO-TEX STANDARD 100-certificaat opvragen\n- [ ] Ondertekende RSL-verklaring opvragen\n- [ ] Eis opnemen in inkoopvoorwaarden\n\n**Wat:** REACH (EG) 1907/2006 bijlage XVII — azokleurstoffen, nikkel, chroom VI, CMR-stoffen in textiel, NPE.\n\n**Waar:** bij je producent; certificering via `oeko-tex.com` (STANDARD 100).\n\n**Hoe:** het OEKO-TEX-certificaat dekt het gros van de REACH-beperkingen praktisch af. Vraag daarnaast een ondertekende RSL-verklaring (Restricted Substances List) en beschikbare testrapporten. Zet dit als vaste eis in je inkoopvoorwaarden voor nieuwe leveranciers.\n\n#### 2.3 🟡 SVHC- en SCIP-check\n\n- [ ] SVHC-verklaring bij fabrikant opvragen\n\n**Wat:** bevat een onderdeel meer dan 0,1 gewichtsprocent een zeer zorgwekkende stof, dan geldt een informatieplicht richting afnemers én melding in de SCIP-database.\n\n**Waar:** ECHA (`echa.europa.eu`).\n\n**Hoe:** vraag expliciet om een SVHC-verklaring. Bij \"geen SVHC boven 0,1%\" → verklaring archiveren, geen melding nodig. Bij wél → SCIP-melding doen.\n\n#### 2.4 🟡 Geen biocide-claims zonder dossier\n\n- [ ] Verboden woorden opnemen in de copy-checklist\n\n**Wat:** Biocidenverordening 528/2012. Claim je \"antibacterieel\", \"antimicrobieel\" of \"anti-geur door zilverionen\", dan is de sok een *behandeld voorwerp* met eigen etiketteringsplichten.\n\n**Waar:** intern, als copyrichtlijn in [Brand Voice & Tone of Voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md).\n\n**Hoe:** **verboden**: antibacterieel, antimicrobieel, doodt bacteriën. **Toegestaan**: \"blijft langer fris\", \"ademend\", \"vochtregulerend\". Wil je de claim wél voeren → goedgekeurde werkzame stof en etikettering regelen vóór lancering.\n\n---\n\n### 3. Productveiligheid (GPSR) & de skisok-lijn\n\n#### 3.1 🔴 GPSR-gegevens op product, verpakking en webshop\n\n- [ ] Fabrikant-/importeurgegevens op label en verpakking\n- [ ] Batchnummering invoeren per productieronde\n- [ ] Vast GPSR-blok bouwen in de Shopify-productsectie\n\n**Wat:** Algemene Productveiligheidsverordening (EU) 2023/988, van kracht sinds 13 december 2024. Meest onderschatte verplichting voor D2C-merken; de NVWA handhaaft hierop.\n\n**Waar:** labels en verpakking (via fabrikant), productpagina's op `higrip.nl`, interne documentatie.\n\n**Hoe:**\n1. **Op product of verpakking:** naam + handelsmerk, postadres én **e-mailadres** van HÏ Grip, plus type-, batch- of serienummer voor traceerbaarheid.\n2. HÏ Grip verkoopt onder eigen merknaam en is daarmee **zelf de fabrikant** in de zin van de GPSR — ook als een fabriek in het buitenland produceert. De fabriek hoort níét als fabrikant op het label. Omdat HÏ Grip in de EU gevestigd is, is er geen aparte \"verantwoordelijke persoon\" nodig.\n3. **Op elke productpagina online:** dezelfde gegevens, productidentificatie (incl. foto en type) en eventuele waarschuwingen. Bouw dit als vast blok, niet per product handmatig. Geldt ook voor de **TikTok Shop-listings** (GPSR-velden bij het product) en voor elk land waar je verkoopt, in de taal van dat land.\n4. Voeg een batchnummer toe per productieronde, bijvoorbeeld `HG-2026-03`.\n\n**Bewijs bewaren:** 10 jaar.\n\n#### 3.2 🔴 Technische documentatie + risicoanalyse per product\n\n- [ ] Per artikel één dossier aanleggen\n\n**Wat:** GPSR verplicht een intern dossier per product.\n\n**Waar:** bewijsmap (§9).\n\n**Hoe:** per artikel één document met: productomschrijving en foto's, materialen en samenstelling, fabrikant en adres, risicoanalyse (denk aan verstikkingsgevaar hangtag, huidirritatie door kleurstof, valgevaar bij slijtage van de grip-print), genomen maatregelen, testrapporten en batchnummers.\n\n#### 3.3 🟠 Klachtenregister en terugroepprocedure\n\n- [ ] Klachtenregister opzetten\n- [ ] Terugroepprocedure van één A4 schrijven\n\n**Waar:** intern register (spreadsheet of Shopify-tags) + Safety Business Gateway van de Europese Commissie (via `ec.europa.eu`) voor meldingen.\n\n**Hoe:**\n1. Register met datum, klacht, product, batch en afhandeling.\n2. Terugroepprocedure: wie beslist, hoe je klanten bereikt (e-mailbestand plus bestelgegevens), hoe je de NVWA informeert.\n3. Ongeval of ernstig veiligheidsrisico → melden via de Safety Business Gateway.\n\n#### 3.4 🔴 Claimstrategie skisokken met gelprotection vastleggen — vóór de copy\n\n- [ ] Besluit nemen en vastleggen in de productbriefing\n\n**Wat:** het regime hangt volledig af van je claim. Dit is een go/no-go-beslissing die je vóór de copywriting neemt.\n\n| Claim | Regime | Gevolg |\n|---|---|---|\n| \"extra demping en comfort\" | gewoon textiel | alleen §2 en §3.1 |\n| \"beschermt tegen stoten of drukletsel\" | **PBM-verordening (EU) 2016/425** | CE-markering, EU-typeonderzoek door notified body, technisch dossier, conformiteitsverklaring — maanden werk, duizenden euro's |\n| \"voorkomt blessures\", \"medische compressie\" | **MDR (EU) 2017/745** | medisch hulpmiddel, CE, UDI, EUDAMED-registratie |\n\n**Waar:** intern besluit in het productbriefing-document; bij PBM-route een notified body (te vinden via `rva.nl`).\n\n**Advies:** positioneer op comfort, drukverdeling en performance — niet op letselpreventie. Leg het besluit vast zodat copy, packaging en ads niet alsnog \"bescherming\" claimen.\n\n#### 3.5 🟡 Productaansprakelijkheidsverzekering\n\n- [ ] AVB met productdekking checken of afsluiten\n\n**Wat:** de nieuwe Productaansprakelijkheidsrichtlijn (EU) 2024/2853 moet uiterlijk 9 december 2026 in NL recht zijn omgezet. Risicoaansprakelijkheid voor gebrekkige producten.\n\n**Waar:** je verzekeringsadviseur of assurantiemakelaar.\n\n**Hoe:** vraag een AVB met expliciete productdekking inclusief recall-kosten, en toets het verzekerd bedrag aan omzet en exportlanden.\n\n---\n\n### 4. Webshop & Consumentenrecht\n\n#### 4.1 🟠 Wettelijke informatieplichten op de site\n\n- [ ] Footer en contactpagina aanvullen\n\n**Waar:** footer + pagina \"Contact\" of \"Over ons\" op `higrip.nl`.\n\n**Hoe:** vermeld handelsnaam, **vestigingsadres**, e-mailadres, telefoonnummer, **KvK-nummer** en **btw-identificatienummer**. Grondslag: art. 3:15d en 6:230m BW.\n\n#### 4.2 🟠 Herroepingsrecht correct ingericht\n\n- [ ] Retourpagina en voorwaarden nalopen\n- [ ] Modelformulier toevoegen\n- [ ] Bestelknop-tekst checken\n\n**Waar:** pagina \"Retourneren\", algemene voorwaarden, orderbevestigingsmail.\n\n**Hoe:**\n1. 14 dagen bedenktijd vanaf ontvangst, duidelijk vermeld. **Vermeld je het niet, dan wordt de termijn 12 maanden.**\n2. Voeg het **modelformulier voor herroeping** toe (downloadbaar of in de voorwaarden).\n3. Terugbetaling binnen 14 dagen, **inclusief de goedkoopste standaard verzendkosten heen**.\n4. Retourkosten mogen bij de klant, mits vooraf duidelijk vermeld.\n5. Lever binnen 30 dagen tenzij anders afgesproken.\n6. De bestelknop moet de betalingsverplichting uitdrukken. Shopify's \"Nu betalen\" is akkoord, \"Doorgaan\" niet.\n\n#### 4.3 🟠 Geen misleidende garantietekst\n\n- [ ] Alle garantieteksten herschrijven\n\n**Waar:** productpagina's, voorwaarden, FAQ.\n\n**Hoe:** schrap formuleringen als \"1 jaar garantie\". De wettelijke conformiteit is wat de consument redelijkerwijs mag verwachten, in de praktijk minstens 2 jaar. Een kortere \"garantie\" naast de wet noemen is misleidend. Bied je extra commerciële garantie, noem die dan expliciet **naast** de wettelijke rechten.\n\n#### 4.4 🟠 ODR-link verwijderen\n\n- [ ] Link uit footer en voorwaarden halen\n\n**Wat:** het EU ODR-platform is per 20 juli 2025 opgeheven. De verplichte link is vervallen en verwijst nu naar niets.\n\n**Hoe:** verwijderen en vervangen door je eigen klachtenprocedure met contactgegevens en reactietermijn.\n\n#### 4.5 🟡 Keurmerk overwegen\n\n- [ ] Thuiswinkel Waarborg en WebwinkelKeur naast elkaar zetten\n\n**Waar:** `thuiswinkel.org` of `webwinkelkeur.nl`.\n\n**Hoe:** levert juridisch getoetste algemene voorwaarden, een geschillenregeling en conversievoordeel. Vergelijk kosten, doorlooptijd en of hun voorwaarden botsen met jullie retourbeleid.\n\n---\n\n### 5. Marketing, Claims & Reviews\n\n#### 5.1 🔴 Bewijsdossier voor de gripclaims\n\n- [ ] Bron van \"95%\" en \"1.17\" achterhalen\n- [ ] Zo nodig test laten uitvoeren\n- [ ] Goedgekeurde claimformulering vastleggen\n- [ ] \"1.500+ sporters\" onderbouwen\n\n**Wat:** \"95% meer grip\" en \"wrijvingscoëfficiënt 1.17\" zijn meetbare claims en moeten bewijsbaar zijn. Zonder dossier is dit een misleidende handelspraktijk (art. 6:193a e.v. BW). Dit raakt de kernboodschap van het hele merk.\n\n**Waar:** bewijsmap (§9); testrapport opvragen bij de fabrikant of laten uitvoeren door een onafhankelijk textiellab.\n\n**Hoe:**\n1. Achterhaal de bron van beide cijfers: wie heeft gemeten, met welke methode, tegen welk referentieproduct?\n2. Ontbreekt een rapport → wrijvingstest laten uitvoeren bij een geaccrediteerd lab.\n3. Voeg een onderbouwende voetnoot toe aan de copy, bijvoorbeeld: *\"t.o.v. een standaard katoenen sportsok, gemeten volgens [methode] door [lab], [datum].\"*\n4. Leg de goedgekeurde formulering vast in [Brand Voice & Tone of Voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md), zodat elke agent en copywriter dezelfde tekst gebruikt.\n\n#### 5.2 🔴 Van-prijzen toetsen aan de 30-dagenregel\n\n- [ ] Alle vergelijkingsprijzen in Shopify nalopen\n- [ ] Prijslogboek aanleggen\n\n**Wat:** Omnibus-richtlijn. Bij elke prijsvermindering moet je de **laagste prijs van de afgelopen 30 dagen** als referentie tonen. Doorlopende \"van-prijzen\" die nooit gevraagd zijn, zijn verboden. De ACM beboet hier actief op.\n\n**Waar:** Shopify → producten → *Vergelijkingsprijs*, plus alle ads en e-mails.\n\n**Hoe:**\n1. Loop alle producten met een ingevulde vergelijkingsprijs langs.\n2. Is die prijs de laatste 30 dagen daadwerkelijk gevraagd? Zo nee → leegmaken.\n3. Leg een prijslogboek aan (datum, product, prijs) zodat je bij een sale kunt aantonen wat de laagste 30-daagse prijs was.\n4. Bundelkortingen (\"3 paar voor €X\") mogen vrij, mits de stukprijs klopt.\n\n#### 5.3 🟠 Reviewbeleid publiceren\n\n- [ ] Alinea bij de reviewsectie plaatsen\n- [ ] Pagina \"Reviewbeleid\" aanmaken\n\n**Wat:** je mag alleen \"geverifieerde reviews\" claimen als je verifieert dat de reviewer gekocht heeft. Nepreviews en het selectief wissen van negatieve reviews staan op de zwarte lijst van oneerlijke handelspraktijken.\n\n**Hoe:** beschrijf of en hoe je verifieert (bijvoorbeeld: \"reviews worden alleen gevraagd aan klanten met een afgeronde bestelling\"), of je modereert en op welke gronden. Trustpilot-sterren alleen in `#00b67a` — zie [Logo & Kleurenpalet](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Logo%20%26%20Kleurenpalet.md).\n\n#### 5.4 🟠 Duurzaamheidsclaims screenen\n\n- [ ] Alle groene claims inventariseren en toetsen\n\n**Wat:** de Richtlijn Empowering Consumers (EU) 2024/825 is van toepassing vanaf **27 september 2026**. Generieke claims (\"duurzaam\", \"milieuvriendelijk\", \"klimaatneutraal\" op basis van compensatie) en keurmerken zonder certificeringssysteem worden verboden.\n\n**Waar:** ACM Leidraad Duurzaamheidsclaims op `acm.nl`; toetsing van copy op site, packaging en social.\n\n**Hoe:** per claim beoordelen of die specifiek, meetbaar en onderbouwd is. Zo niet: schrappen of concreet maken — \"verpakking van 100% gerecycled karton, FSC-gecertificeerd\" in plaats van \"duurzame verpakking\".\n\n#### 5.5 🟡 Influencerafspraken vastleggen\n\n- [ ] Clausule toevoegen aan alle samenwerkingscontracten\n\n**Wat:** Reclamecode Social Media & Influencer Marketing — verplichte reclame-aanduiding, ook bij gratis producten. Jij bent als adverteerder medeverantwoordelijk.\n\n**Waar:** `reclamecode.nl`; contracten in de flow van [Zoek Script & Gids](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/Influencers_Creators/Zoek%20Script%20%26%20Gids.md).\n\n**Hoe:** neem per samenwerking op: verplichte vermelding #advertentie of #betaaldesamenwerking, zichtbaar in de eerste regels, en geen onbewezen productclaims. Bij grote accounts: check registratieplicht bij het Commissariaat voor de Media (`cvdm.nl`).\n\n---\n\n### 6. Privacy, Cookies & E-mail\n\n#### 6.1 🟠 Verwerkingsregister opstellen\n\n- [ ] Register invullen met alle verwerkingen\n\n**Wat:** AVG art. 30. Ook voor kleine bedrijven, want je verwerkt structureel klantgegevens.\n\n**Waar:** intern document; model te vinden op `autoriteitpersoonsgegevens.nl`.\n\n**Hoe:** per verwerking vastleggen: doel, categorieën betrokkenen, gegevens, ontvangers (Shopify, e-mailtool, fulfilment, analytics), bewaartermijn en doorgifte buiten de EU. Bewaartermijnen: facturen 7 jaar (fiscaal), marketingdata korter.\n\n#### 6.2 🟠 Verwerkersovereenkomsten verzamelen\n\n- [ ] Per tool de DPA downloaden en archiveren\n\n**Waar:** in de accountinstellingen van elke tool — zie [API & Tool Connections](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/API%20%26%20Tool%20Connections.md) en [Shopify App Stack](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Shopify%20App%20Stack.md) voor de volledige lijst.\n\n**Hoe:** per leverancier (Shopify, e-mailtool, review-tool, fulfilment, analytics, ads) de DPA accepteren en archiveren. Check bij Amerikaanse partijen of ze onder het **EU-US Data Privacy Framework** gecertificeerd zijn.\n\n#### 6.3 🟠 Cookiebanner herzien\n\n- [ ] Weiger-knop gelijkwaardig maken\n- [ ] Consent Mode v2 koppelen\n- [ ] Testen met een schone browser\n\n**Wat:** art. 11.7a Telecommunicatiewet. Analytics- en trackingcookies (GA4, Meta Pixel, TikTok Pixel) vereisen voorafgaande toestemming. AP en ACM handhaven hier actiever.\n\n**Waar:** Shopify → Klantprivacy of de consent-app; Google Consent Mode v2.\n\n**Hoe:**\n1. **Weigeren moet net zo makkelijk zijn als accepteren** — gelijkwaardige knoppen op het eerste scherm. Geen cookiewall met alleen \"Accepteren\".\n2. Geen enkele tracker laden vóór toestemming.\n3. Koppel Shopify's Customer Privacy API aan Google Consent Mode v2 — dat is bovendien nodig om Google Ads-conversies te blijven meten.\n4. Test met een schone browser of de pixels echt pas ná toestemming vuren.\n\n#### 6.4 🟠 Privacyverklaring actualiseren\n\n- [ ] Tekst laten matchen met de werkelijke toolset\n\n**Waar:** `higrip.nl/policies/privacy-policy`.\n\n**Hoe:** benoem alle tools uit §6.2, plus grondslagen, bewaartermijnen, rechten van betrokkenen, contactgegevens en doorgifte naar de VS.\n\n#### 6.5 🟡 Datalekprocedure\n\n- [ ] Procedure van één A4 schrijven\n- [ ] Intern datalekregister aanleggen\n\n**Waar:** intern + meldloket op `autoriteitpersoonsgegevens.nl`.\n\n**Hoe:** leg vast wie constateert, wie beoordeelt, melding binnen **72 uur** bij de AP indien nodig, en wanneer je betrokkenen informeert. Houd ook lekken bij die je niet meldt.\n\n#### 6.6 🟠 E-mail- en SMS-marketing toetsen\n\n- [ ] Alle inschrijfformulieren en pop-ups nalopen\n\n**Wat:** art. 11.7 Telecommunicatiewet. Opt-in vereist, behalve de klantuitzondering: bestaande klant + eigen soortgelijke producten + afmeldmogelijkheid.\n\n**Hoe:** geen voor-aangevinkte vakjes; afmeldlink in elk bericht én afmeldmogelijkheid op het moment van verzamelen; duidelijke afzender. Check ook pop-ups en checkout-opt-ins.\n\n---\n\n### 7. Fiscaal, Import & Bedrijfsvoering\n\n#### 7.1 🟡 Btw en OSS bij EU-verkoop\n\n- [ ] EU-omzet buiten NL monitoren\n- [ ] Bij nadering €10.000 aanmelden voor OSS\n\n**Wat:** 21% btw op sokken in NL. Bij consumentenverkoop in andere EU-landen geldt een drempel van **€10.000** voor afstandsverkopen; daarboven reken je btw van het land van de klant.\n\n**Waar:** Belastingdienst → Mijn Belastingdienst Zakelijk, aanmelding One Stop Shop (OSS) op `belastingdienst.nl`.\n\n**Hoe:** meld je aan vóór het kwartaal waarin je de drempel passeert en stel de btw-tarieven per land in Shopify in.\n\n#### 7.2 🟡 Importdossier op orde\n\n- [ ] EORI-nummer regelen\n- [ ] Art. 23-vergunning aanvragen\n- [ ] Goederencode en oorsprongsdocumenten checken\n\n**Waar:** Douane (`douane.nl`) voor EORI en art. 23-vergunning; je expediteur voor de aangiften.\n\n**Hoe:**\n1. **EORI-nummer** aanvragen als je dat nog niet hebt.\n2. **Art. 23-vergunning** aanvragen: btw bij invoer verleggen naar de aangifte, geeft cashflowvoordeel.\n3. Goederencode controleren — sokken en kousen vallen onder **GN-post 6115**; het tarief hangt af van materiaal en oorsprong.\n4. Oorsprongsdocumenten opvragen voor een eventueel preferentieel tarief.\n5. Invoeraangiften en leveranciersverklaringen 7 jaar archiveren.\n\n#### 7.3 🟡 KvK-gegevens kloppend\n\n- [ ] SBI-code en vestigingsadres controleren\n\n**Waar:** `kvk.nl`.\n\n**Hoe:** check dat de SBI-code past bij groothandel of detailhandel in kleding en dat het vestigingsadres actueel is — dat moet matchen met §4.1 en §3.1.\n\n#### 7.4 ⚪ Betaaltermijnen B2B\n\n- [ ] 30 dagen opnemen in B2B-voorwaarden\n\n**Wat:** lever je aan grote sportretailers, dan geldt dwingend een maximale betaaltermijn van 30 dagen ten opzichte van een mkb-leverancier. Weiger langere termijnen in retailcontracten.\n\n#### 7.5 ⚪ Arbo bij personeel\n\n- [ ] RI&E opstellen zodra iemand in dienst komt\n\n**Waar:** `arboportaal.nl`, RI&E-instrument via `rie.nl`.\n\n**Hoe:** bij indiensttreding: RI&E opstellen, verzuimbeleid regelen, arbodienst of bedrijfsarts contracteren, cao-check.\n\n---\n\n### 8. Toegankelijkheid & Techniek\n\n#### 8.1 🟡 WCAG 2.1 AA meenemen in het thema\n\n- [ ] Contrast van `#CCFF00` corrigeren waar het op licht staat\n- [ ] Alt-teksten op alle productafbeeldingen\n- [ ] Formulierlabels en foutmeldingen in tekst\n- [ ] Toetsenbordnavigatie met zichtbare focus-state\n- [ ] Ondertiteling op video's\n\n**Wat:** European Accessibility Act, sinds 28 juni 2025 van toepassing op e-commercediensten. **Micro-ondernemingen (<10 medewerkers én ≤€2 mln omzet) zijn vrijgesteld** — waarschijnlijk vallen jullie daaronder, maar die vrijstelling vervalt bij groei.\n\n**Waar:** Shopify Horizon-thema; themawijzigingen loggen in [Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md).\n\n**Belangrijkste designpunt:** `#CCFF00` haalt geen contrastratio van 4.5:1 op wit. Gebruik het geel altijd op zwart of near-black, nooit als tekst op een lichte achtergrond. Video-ondertiteling loopt via [Reel & TikTok Format Gids](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/01_Content_Agent/Visuele%20Productie/Reel%20%26%20TikTok%20Format%20Gids.md).\n\n---\n\n### 9. Documentatie & Bewijsmap\n\n#### 9.1 🟠 Eén centrale compliance-map inrichten\n\n- [ ] Map aanmaken met submappen per categorie\n\n**Waar:** map in OneDrive naast deze vault, bijvoorbeeld `HI-Grip-Compliance/`.\n\n**Wat erin moet** — alles wat je bij een controle door NVWA, ACM of AP direct moet kunnen tonen:\n\n| Document | Uit |\n|---|---|\n| UPV-aansluiting en jaaropgaven | §1.1 |\n| Verpakkingenadministratie (berekening onder 50.000 kg) | §1.2 |\n| OEKO-TEX, RSL, SVHC-verklaringen | §2.2, §2.3 |\n| GPSR technische documentatie + risicoanalyse | §3.2 |\n| Testrapport gripclaims | §5.1 |\n| Prijslogboek 30-dagenregel | §5.2 |\n| Verwerkingsregister + DPA's | §6.1, §6.2 |\n| Polis productaansprakelijkheid | §3.5 |\n| Invoeraangiften en oorsprongsdocumenten | §7.2 |\n\n**Bewaartermijn:** GPSR-documentatie 10 jaar, fiscaal 7 jaar.\n\n#### 9.2 🟡 Jaarlijkse compliance-check agenderen\n\n- [ ] Terugkerende afspraak in Q1 zetten\n\n**Hoe:** één jaarlijkse ronde: UPV-opgave, verpakkingenadministratie bijwerken, claims hertoetsen, privacyverklaring bijwerken, nieuwe wetgeving doorlopen (§10).\n\n---\n\n### 10. Monitoren — komt eraan (2027–2030)\n\n| Regeling | Impact op HÏ Grip | Verwacht |\n|---|---|---|\n| **ESPR / Digitaal Productpaspoort** | Textiel is prioritaire groep. Per product een DPP met materiaal-, herkomst- en recyclinginfo via QR-code. | gedelegeerde handelingen 2027–2030 |\n| **ESPR vernietigingsverbod onverkocht textiel** | Micro-ondernemingen permanent vrijgesteld, middelgroot tot 2030. Nu geen actie. | loopt |\n| **EU-brede UPV textiel** | Registratieplicht in elk EU-land waar je verkoopt. | ~2028 |\n| **Verordening dwangarbeid (EU) 2024/3015** | Verbod op producten uit dwangarbeid; due diligence in de Aziatische keten. Begin nu met leveranciersverklaringen. | 14 dec 2027 |\n| **Green Claims Richtlijn** | Voorafgaande verificatie van milieuclaims. Status onzeker — volgen. | onbekend |\n| **EUDR (ontbossing)** | Alleen relevant bij **natuurrubber** in de grip-print. Silicone en TPU vallen erbuiten, katoen valt níét onder EUDR. Materiaal navragen bij de fabrikant. | status checken |\n| **CSRD / CSDDD** | Niet direct van toepassing, **maar** B2B-retailers gaan vragenlijsten sturen over CO₂, materialen en keten. Verzamel de data alvast. | doorlopend |\n\n---\n\n### Openstaande vragen om intern te beantwoorden\n\n- [ ] Is HÏ Grip al aangesloten bij Stichting UPV Textiel? Zo ja, sinds wanneer?\n- [ ] Waar komen de cijfers \"95% meer grip\" en \"1.17\" vandaan — is er een rapport?\n- [ ] Wat is het materiaal van de grip-print: silicone/TPU of natuurrubber?\n- [ ] Hoeveel medewerkers en welke omzet? Dit bepaalt de vrijstelling voor EAA en ESPR.\n- [ ] Naar welke landen wordt nu verkocht buiten NL?\n- [ ] Is er een bedrijfsaansprakelijkheidsverzekering met productdekking?\n\n## Acties\n\n- [ ] P1 · §1.1 Aansluiten bij UPV Textiel: aansluiting controleren, achterstallige jaren melden, jaaropgave (rond 1 augustus) agenderen\n- [ ] P2 · §1.2 Verpakkingenadministratie opzetten (Verpact, aantonen onder 50.000 kg) + TikTok Shop Qualification Center EPR-sectie invullen\n- [ ] P3 · §1.3 Verzendverpakking toetsen aan PPWR: loze ruimte ≤ ~50%, conformiteitsverklaring bij leverancier\n- [ ] P3 · §1.4 Buitenlandse UPV regelen vóór de eerste zending naar een nieuw land\n- [ ] P1 · §2.1 Vezelsamenstelling op het label én op alle productpagina's (officiële EU-benamingen)\n- [ ] P2 · §2.2 OEKO-TEX STANDARD 100-certificaat en ondertekende RSL-verklaring bij de fabrikant opvragen\n- [ ] P3 · §2.3 SVHC-verklaring opvragen; SCIP-melding alleen indien boven 0,1%\n- [ ] P3 · §2.4 Verboden biocide-claims (antibacterieel, antimicrobieel) opnemen in de copy-checklist\n- [ ] P1 · §3.1 GPSR-gegevens op label, verpakking en als vast blok op elke productpagina; batchnummering per productieronde\n- [ ] P1 · §3.2 Technische documentatie + risicoanalyse per product aanleggen (bewijsmap, 10 jaar)\n- [ ] P2 · §3.3 Klachtenregister opzetten en terugroepprocedure van één A4 schrijven\n- [ ] P1 · §3.4 Claimstrategie skisokken met gelprotection vastleggen vóór de copy — comfort/drukverdeling, geen letselpreventie\n- [ ] P3 · §3.5 Productaansprakelijkheidsverzekering met productdekking checken (richtlijn uiterlijk 9 december 2026 omgezet)\n- [ ] P2 · §4.1 Footer en contactpagina aanvullen: vestigingsadres, KvK-nummer, btw-id\n- [ ] P2 · §4.2 Herroepingsrecht nalopen: retourpagina, modelformulier, terugbetaling incl. verzendkosten, bestelknop-tekst\n- [ ] P2 · §4.3 Garantieteksten herschrijven — geen \"1 jaar garantie\" naast de wettelijke conformiteit\n- [ ] P2 · §4.4 ODR-link uit footer en voorwaarden halen, vervangen door eigen klachtenprocedure\n- [ ] P3 · §4.5 Keurmerk overwegen: Thuiswinkel Waarborg of WebwinkelKeur\n- [ ] P1 · §5.1 Bewijsdossier gripclaims: bron van \"95%\" en \"1.17\" achterhalen, zo nodig labtest, goedgekeurde formulering vastleggen, \"1.500+ sporters\" onderbouwen\n- [ ] P1 · §5.2 Van-prijzen toetsen aan de 30-dagenregel en een prijslogboek aanleggen\n- [ ] P2 · §5.3 Reviewbeleid publiceren (alinea bij reviewsectie + pagina)\n- [ ] P2 · §5.4 Duurzaamheidsclaims screenen — richtlijn (EU) 2024/825 van toepassing vanaf 27 september 2026 (deadline)\n- [ ] P3 · §5.5 Influencer-clausule (#advertentie, geen onbewezen claims) in alle samenwerkingscontracten\n- [ ] P2 · §6.1 Verwerkingsregister (AVG art. 30) opstellen\n- [ ] P2 · §6.2 Verwerkersovereenkomsten per tool downloaden en archiveren\n- [ ] P2 · §6.3 Cookiebanner herzien: gelijkwaardige weiger-knop, Consent Mode v2, testen met schone browser\n- [ ] P2 · §6.4 Privacyverklaring laten matchen met de werkelijke toolset\n- [ ] P3 · §6.5 Datalekprocedure (één A4) en intern datalekregister\n- [ ] P2 · §6.6 E-mail- en SMS-marketing: inschrijfformulieren, pop-ups en checkout-opt-ins nalopen\n- [ ] P3 · §7.1 EU-omzet buiten NL monitoren; bij nadering €10.000 aanmelden voor OSS\n- [ ] P3 · §7.2 Importdossier: EORI-nummer, art. 23-vergunning, GN-post 6115 en oorsprongsdocumenten\n- [ ] P3 · §7.3 KvK-gegevens controleren (SBI-code, vestigingsadres)\n- [ ] P3 · §7.4/§7.5 B2B-betaaltermijn 30 dagen in voorwaarden; RI&E zodra iemand in dienst komt\n- [ ] P3 · §8.1 WCAG 2.1 AA in het thema: contrast #CCFF00, alt-teksten, formulierlabels, focus-states, ondertiteling\n- [ ] P2 · §9.1 Eén centrale compliance-bewijsmap inrichten (OneDrive naast de vault)\n- [ ] P3 · §9.2 Jaarlijkse compliance-check in Q1 agenderen\n- [ ] P2 · Openstaande interne vragen beantwoorden: UPV-aansluiting, bron gripcijfers, materiaal grip-print, medewerkers/omzet, exportlanden, AVB\n\n## Bronnen\n\n- Origineel: [Compliance To-Do Lijst](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Compliance/Compliance%20To-Do%20Lijst.md)\n- Portalen: upvtextiel.nl · verpact.nl · echa.europa.eu · acm.nl · autoriteitpersoonsgegevens.nl · belastingdienst.nl · douane.nl\n\n## Aantekeningen",
   "bron": "los",
   "bronbestand": "C:\\Users\\Test\\OneDrive\\Documents\\HI-Grip-Vault-\\00_Brand_Core\\Compliance\\Compliance To-Do Lijst.md",
   "bronbestand_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Compliance/Compliance%20To-Do%20Lijst.md",
   "categorie": "Compliance",
   "datum": "2026-09-07",
   "deadline": "2026-09-27",
   "gerelateerd": [
    "2026-09-04-werkdossier-stand-van-zaken",
    "2026-09-23-seo-conversietest-run-1",
    "2026-09-24-financieel-plan-2027-2031-bmc-2031",
    "2026-09-25-seo-audit",
    "2026-10-02-obsidian-structuur-ai-agents"
   ],
   "id": "2026-09-07-compliance-todo",
   "kansen": [],
   "kerncijfers": [],
   "kerntitel": "",
   "prioriteit": "P1",
   "routine": "",
   "samenvatting": "Alle NL/EU-verplichtingen voor HÏ Grip op één lijst (7 september 2026, aangevuld 14 september): vijf punten lopen nu al rechtsrisico — UPV Textiel, GPSR-gegevens, bewijsdossier gripclaims, van-prijzen en vezelsamenstelling. Eerste harde datum: de richtlijn duurzaamheidsclaims is van toepassing per 27 september 2026.",
   "status": "bekeken",
   "titel": "Compliance-verplichtingen NL/EU — to-do per categorie",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-07-compliance-todo.md",
   "vervangt": [],
   "wat_niet_lukte": ""
  },
  {
   "acties": [
    {
     "afgevinkt": true,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Shopify: collectie gripsokken productsCount = 3 (alle actieve producten); /collections/gripsokken toont ze.",
      "controle": "Zitten er producten in collectie gripsokken?",
      "gecontroleerd": "2026-09-25",
      "methode": "shopify",
      "sinds": "2026-09-25",
      "uitkomst": "gedaan"
     },
     "id": "2026-09-04-werkdossier-stand-van-zaken#dbe12b46",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "Producten koppelen aan collectie `gripsokken` — hub is leeg (Shopify Admin, lars)",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": true,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "GA4 28-08 t/m 24-09: 3 purchase-events, purchaseRevenue €68,24, keyEvents 3.",
      "controle": "Komt het purchase-event uit de checkout in GA4 binnen?",
      "gecontroleerd": "2026-09-25",
      "methode": "ga4",
      "sinds": "2026-09-25",
      "uitkomst": "gedaan"
     },
     "id": "2026-09-04-werkdossier-stand-van-zaken#279fd735",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "Purchase-event aan de Shopify-checkout koppelen — bedankpagina-tag ontbreekt",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "GraphQL collections: gripsokken templateSuffix is leeg (standaardtemplate).",
      "controle": "Is template gripsokken aan de collectie toegewezen?",
      "gecontroleerd": "2026-09-26",
      "methode": "shopify",
      "uitkomst": "open"
     },
     "id": "2026-09-04-werkdossier-stand-van-zaken#c1ccbbfc",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "Template `gripsokken` toewijzen aan de collectie",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "nee",
      "wat_claude_doet": "Kan alleen controleren of het gelukt is.",
      "wat_jij_doet": "Template toewijzen in admin > Collecties."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "/policies/shipping-policy nog 'vóór 16:00 dezelfde dag'; /policies/refund-policy nog 14 dagen.",
      "controle": "Zijn verzend- en retourbeleid bijgewerkt?",
      "gecontroleerd": "2026-09-26",
      "methode": "site",
      "uitkomst": "open"
     },
     "id": "2026-09-04-werkdossier-stand-van-zaken#7a54ab83",
     "prioriteit": "P1",
     "prioriteit_effectief": "P1",
     "tekst": "Verzend- en retourbeleid in Shopify Admin bijwerken naar 22:00 en 30 dagen — policies lopen achter op de site",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Schrijft de beleidsteksten volgens het feitenbestand.",
      "wat_jij_doet": "Plakken in admin > Beleid."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Beslissing van Lars.",
      "controle": "Besluit Engelse versie.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-04-werkdossier-stand-van-zaken#4cf0833c",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Besluit Engelse versie: afmaken of uitzetten (advies: uitzetten)",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Zet de onderbouwing (verkeer, kosten) klaar.",
      "wat_jij_doet": "Besluiten."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Beslissing van Lars.",
      "controle": "Besluit over drie off-topic blogartikelen.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-04-werkdossier-stand-van-zaken#fc5dfe9d",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Besluit drie off-topic blogartikelen: noindex, herschrijven of laten staan",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Geeft per artikel een advies met data.",
      "wat_jij_doet": "Besluiten en doorvoeren in admin."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "https://www.higrip.nl/pages/collection geeft nog 200 met h1 'Shop' (template shop), geen 301.",
      "controle": "Is /pages/collection doorgestuurd of omgebouwd?",
      "gecontroleerd": "2026-09-26",
      "methode": "site",
      "uitkomst": "open"
     },
     "id": "2026-09-04-werkdossier-stand-van-zaken#b7ef376e",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "`/pages/collection`: 301 naar de hub of ombouwen tot echte shoppagina",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Maakt een advies en de redirect-regel of een template in het testthema.",
      "wat_jij_doet": "Kiezen en doorvoeren."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "niet te controleren: EcomSend-popup laadt (ecomsend.js), gedrag alleen met browser-rendering zichtbaar.",
      "controle": "Is de kortingspopup vertraagd en toegankelijk?",
      "gecontroleerd": "2026-09-26",
      "methode": "site",
      "uitkomst": "open"
     },
     "id": "2026-09-04-werkdossier-stand-van-zaken#b83b8e37",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Kortingspopup vertragen, met Escape sluitbaar, sluitknop ≥ 24 px (EcomSend)",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "nee",
      "wat_claude_doet": "Levert de gewenste instellingen.",
      "wat_jij_doet": "Instellingen in de EcomSend-app aanpassen."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Trustpilot-scripts laden nog, geen trustpilot-widget-element in de HTML zichtbaar.",
      "controle": "Werkt de Trustpilot-widget?",
      "gecontroleerd": "2026-09-26",
      "methode": "site",
      "uitkomst": "open"
     },
     "id": "2026-09-04-werkdossier-stand-van-zaken#98a99a09",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Trustpilot-widget repareren — laadt van drie domeinen en toont niets",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Diagnosticeert de widget en zet een schone embed klaar in het testthema.",
      "wat_jij_doet": "Trustpilot-app configureren en publiceren."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "/collections/all = 'Producten – HÏ Grip', /pages/contact = 'HÏ Grip | Contact' — merknaam eerst, geen zoekwoord.",
      "controle": "Zijn titels en meta's site-breed zoekwoord-eerst?",
      "gecontroleerd": "2026-09-26",
      "methode": "site",
      "uitkomst": "open"
     },
     "id": "2026-09-04-werkdossier-stand-van-zaken#ee82c67c",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Titels en meta descriptions site-breed zoekwoord-eerst (Website Agent levert, lars plakt)",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Schrijft zoekwoord-eerste titels en meta's voor alle pagina's in een bestand.",
      "wat_jij_doet": "Plakken in admin."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Geen export (Zoekopdrachten + Pagina's, 3 maanden) in de vault gevonden.",
      "controle": "Is er een Search Console-export van 3 maanden?",
      "gecontroleerd": "2026-09-26",
      "methode": "vault",
      "uitkomst": "open"
     },
     "id": "2026-09-04-werkdossier-stand-van-zaken#f9369bdd",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Search Console-export (3 maanden, Zoekopdrachten + Pagina's)",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Exporteert 3 maanden zoekopdrachten en pagina's via de GSC-API naar de vault.",
      "wat_jij_doet": "Niets."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Geen export in de vault gevonden.",
      "controle": "Is er een Shopify Analytics-export van 12 maanden?",
      "gecontroleerd": "2026-09-26",
      "methode": "vault",
      "uitkomst": "open"
     },
     "id": "2026-09-04-werkdossier-stand-van-zaken#fc53b6be",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Shopify Analytics-export (12 maanden: orders, omzet, AOV, conversie)",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Exporteert de totalen (orders, omzet, AOV, conversie) via ShopifyQL naar de vault.",
      "wat_jij_doet": "Niets."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Mensenwerk: mails, reviews en gesprekken doorlopen.",
      "controle": "Eén uur klantstem verzamelen.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-04-werkdossier-stand-van-zaken#8c9ef446",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Eén uur klantstem: 50 service-mails, 17 reviews, eerste vraag per clubgesprek",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Analyseert de reviews en mails die in de vault staan.",
      "wat_jij_doet": "Geanonimiseerde service-mails aanleveren."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Beslissing van Lars.",
      "controle": "Akkoord op typografie-instellingen.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-04-werkdossier-stand-van-zaken#1a42e935",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Akkoord op omdraaien typografie-instellingen (body Poppins 400/16px, koppen 800 UPPERCASE)",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "nee",
      "wat_claude_doet": "Voert de wijziging daarna door in het testthema.",
      "wat_jij_doet": "Akkoord geven."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "/products/performance-gripsokken toont nog '4.5'.",
      "controle": "Staat de testimonials-score op 4,6?",
      "gecontroleerd": "2026-09-26",
      "methode": "site",
      "uitkomst": "open"
     },
     "id": "2026-09-04-werkdossier-stand-van-zaken#cbad707e",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "Testimonials-sectie van 4,5 naar 4,6 zetten",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Past het cijfer aan in het testthema, maar alleen als de echte score 4,6 is.",
      "wat_jij_doet": "Score bevestigen en publiceren."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Beslissing van het team.",
      "controle": "Volgorde sportpagina's bepalen.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-04-werkdossier-stand-van-zaken#a6c02566",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "Volgorde sportpagina's bepalen na de Search Console-export",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Stelt de volgorde vast op GSC-data en legt die vast in de vault.",
      "wat_jij_doet": "Akkoord geven."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Beslissing van Lars.",
      "controle": "Moment skisokken bepalen.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-04-werkdossier-stand-van-zaken#30d11c31",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "Skisokken: moment bepalen (geparkeerd op verzoek van lars)",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "nee",
      "wat_claude_doet": "Het gaat om een besluit.",
      "wat_jij_doet": "Lars bepaalt het moment."
     }
    }
   ],
   "body_md": "# Werkdossier higrip.nl — stand van zaken 4 september 2026\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\nWat er van dit dossier daadwerkelijk is doorgevoerd staat in [Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md). De vaste cijfers (1,17 / 95% / 2.000+ / 4,6 op 17) gelden voor alle copy en schema; niets uit de tegenspraken-lijst overnemen.\n\n## Bevindingen\n\n> Vault-versie van het werkdossier dat op 4 september 2026 is samengesteld uit vier audits van 3 september (SEO & techniek, meting & conversie, toegankelijkheid, content). Het originele dossier staat als artifact op claude.ai; **dit bestand is de bron in de vault**, zodat een volgende sessie er zonder externe link bij kan. Wat er sindsdien daadwerkelijk is doorgevoerd staat in [Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md).\n\n**Let op bij het lezen:** waar een cijfer nog niet vaststaat, staat het hieronder onder *Tegenspraken* en niet onder *Cijfers*. Neem niets uit de tegenspraken-lijst over in nieuwe copy of schema.\n\n---\n\n### De twee dingen die alles blokkeren\n\n1. **Producten koppelen aan de collectie `gripsokken`.** De hub staat klaar maar toont \"Geen producten gevonden\". Elke spoke die ernaartoe linkt versterkt nu niets — en de canonical-regel die ik in het thema heb gezet activeert zichzelf pas zodra de hub gevuld is.\n2. **Purchase-event koppelen aan de checkout.** Zonder dit is van geen enkele wijziging te zien of hij omzet oplevert.\n\nSamen ongeveer een half uur werk, allebei alleen door lars te doen. Zonder deze twee blijft de rest van dit dossier theorie.\n\n---\n\n### Beslisregister\n\n#### Blokkerend\n\n| # | Keuze | Waarom het blokkeert | Wie |\n|---|---|---|---|\n| 1 | Producten koppelen aan collectie `gripsokken` | Hub is leeg; elke interne link ernaartoe versterkt niets | lars |\n| 2 | Purchase-event aan de checkout koppelen | Zonder dit geen enkele meetbare uitkomst | lars |\n| 3 | Template `gripsokken` toewijzen aan de collectie | Anders blijft de oude pagina actief en is het gebouwde onzichtbaar | lars |\n\n#### Strategisch\n\n| # | Keuze | Opties |\n|---|---|---|\n| 4 | Engelse versie | Afmaken of uitzetten. Nu geven drie FAQ-vragen hetzelfde antwoord en is de meta description Nederlands. **Advies: uitzetten** — de focus ligt op Nederland |\n| 5 | Productsterren in Google | Trustpilot 4,6 op 17 is een *winkelscore* en mag alleen op Organization-schema. Sterren bij producten vereisen een review-app |\n| 6 | Drie off-topic blogartikelen | Noindex, herschrijven, of laten staan |\n| 7 | `/pages/collection` | 301 naar de hub, of ombouwen tot echte shoppagina. Nu belooft de titel \"Shop gripsokken\" en toont hij het retourbeleid |\n| 8 | `/collections/all` en `/frontpage` | Canonical naar de hub of noindex — **doorgevoerd in het thema**, zie [Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md) |\n| 9 | `/blogs/intern` | Noindex of verwijderen — **noindex doorgevoerd**, zie [Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md) |\n| 10 | Volgorde van de sportpagina's | Hangt af van de Search Console-export |\n| 11 | Skisokken | Geparkeerd op verzoek van lars. Wanneer erbij? |\n\n#### Uitvoering\n\n| # | Actie | Waar | Wie |\n|---|---|---|---|\n| 12 | Kortingspopup vertragen én Escape laten sluiten, sluitknop naar ≥24 px | EcomSend-app | lars |\n| 13 | Trustpilot-widget repareren — laadt van drie domeinen en toont niets | Trustpilot-app | lars |\n| 14 | `sameAs` invullen: Instagram, TikTok, Trustpilot | ~~Theme Editor~~ → **themacode, doorgevoerd** (zie correctie hieronder) | Website Agent |\n| 15 | Titels en meta descriptions site-breed omdraaien naar zoekwoord-eerst | Shopify Admin | lars plakt, Website Agent levert teksten |\n| 16 | Search Console-export (3 maanden, Zoekopdrachten + Pagina's) | Google Search Console | lars |\n| 17 | Shopify Analytics-export (12 maanden: orders, omzet, AOV, conversie) | Shopify Admin | lars |\n| 18 | Eén uur klantstem: 50 service-mails, 17 reviews, eerste vraag per clubgesprek | Mailbox, Trustpilot | lars |\n\n---\n\n### Tegenspraken — opgelost in het thema op 2026-09-04\n\nZeven plekken waar de site zichzelf tegensprak. Vijf kwamen uit het dossier, twee zijn er op 4 september bij gevonden, plus een vierde beoordelingscijfer.\n\n**Correctie op mijn eerste inschatting:** ik noemde deze tegenspraken \"bedrijfsbeslissingen die lars moet nemen\". lars corrigeerde dat — het zijn gewoon waarden die bij een eerdere wijziging niet overal zijn meegenomen. De juiste waarden zijn bevestigd en **staan nu overal gelijk in theme `200269168967`**: besteldeadline **22:00**, retourtermijn **30 dagen**, gratis verzending vanaf **€35**.\n\n| Wat | Was | Is nu | Nog te doen |\n|---|---|---|---|\n| Besteldeadline | 22:00 / 16:00 / 17:00 | **22:00** overal | ⚠️ Shopify-verzendpolicy zegt nog 16:00 |\n| Retourtermijn | 30 / 14 dagen | **30 dagen** overal | ⚠️ Shopify-retourpolicy zegt nog 14 dagen |\n| Verzenddrempel | €35 / €30 | **€35** overal | Meta descriptions in Admin |\n| Beoordeling | 4,5 / 4,6 / **4,8** | 4,6 (schema-default) | Testimonials-sectie nog op 4,5 |\n| Klantenaantal | 2.000+ / 1500+ | 2.000+ op alle pagina's | Meta descriptions in Admin |\n| Lopende actie | 50% korting / 2+2 gratis | — | Jubileum viel mei 2026, WK-actie liep af 19 juli 2026 |\n\n#### ⚠️ De policy-pagina's lopen nu achter op de site\n\nDit is het belangrijkste dat hieruit volgt en het kan alleen in Shopify Admin. De **officieel bindende policies** (Instellingen → Beleid) zeggen nog:\n\n- Verzendbeleid: *\"bestellingen die vóór **16:00** uur zijn geplaatst\"*\n- Retourbeleid: *\"binnen **14 dagen** na ontvangst retourneren\"*\n\nDe site belooft nu 22:00 en 30 dagen. Dat is de gevaarlijke kant van het verschil: je adverteert ruimer dan je policy dekt. **Beide policies moeten in Shopify Admin worden bijgewerkt naar 22:00 en 30 dagen.** Let op: `templates/page.verzendbeleid.json` en `page.retourbeleid.json` zijn *themapagina's* die de policies dupliceren — die stonden al goed en zijn dus niet hetzelfde als de echte policy onder `/policies/`.\n\n#### Waar de waarden stonden\n\nBewaard voor het geval er een volgende ronde nodig is. Paden relatief aan de themamap.\n\n**Besteldeadline** — al goed op 22:00: `templates/collection.json:24`, `templates/product.json:220,305,1046`, `templates/product.performance-grip-socks-2.json:222,307,1328`, `templates/page.verzendbeleid.json:19`, `sections/header-group.json:133`, `sections/shop-intro.liquid:89` · gecorrigeerd van 16:00: `templates/index.json`, `templates/page.veelgestelde-vragen.json`, `templates/product.product-gratis-verzending.json` (2×), `templates/collection.gripsokken.json`, `snippets/faq-schema.liquid`, `snippets/padel-faq.liquid` (2×), `snippets/padel-usp-bar.liquid` (2×) · van 17:00: `snippets/product-schema.liquid`\n\n**Retourtermijn** — al goed op 30 dagen: `templates/collection.json:30`, `templates/page.retourbeleid.json:19`, `templates/product.json:305,1124`, `templates/product.performance-grip-socks-2.json:307,1406`, `sections/hi-wk-promo.liquid:250`, `sections/shop-intro.liquid:90` · gecorrigeerd van 14 dagen: `templates/page.json` (3×), `templates/page.veelgestelde-vragen.json`, `templates/product.product-gratis-verzending.json`\n\n**Verzenddrempel** — al goed op €35: `templates/collection.json:18`, `sections/header-group.json:103`, `sections/shop-intro.liquid:79,88` · gecorrigeerd van €30: `templates/page.veelgestelde-vragen.json`, `templates/product.json`, `templates/product.performance-grip-socks-2.json`\n\n---\n\n### Cijfers die wél vaststaan\n\nGebruik deze in copy en schema; verzin er nooit nieuwe bij.\n\n| Gegeven | Waarde | Bron |\n|---|---|---|\n| Wrijvingscoëfficiënt | 1,17 tegenover 0,60 | FAQ met drie citaties |\n| Meer grip | 95% | Merkclaim, productpagina |\n| Wetenschappelijke bronnen | Apps et al. 2020 · Apps et al. 2022 · Friedl et al. 2023 | FAQ-snippet |\n| Klantenaantal | 2.000+ sporters | Consistent op alle pagina's |\n| Trustpilot | 4,6 uit 5 · 17 reviews | Bij de bron opgehaald, 3 sep |\n| Maten 1.0 | 34–39 · 40–46 | Productvarianten |\n| Maten 2.0 | 35–38 · 39–42 · 43–47 | Productvarianten |\n| 2.0 compressie | 15–20 mmHg | Productbeschrijving |\n| 2.0 kenmerken | 7 zones, waarvan er 1 nog omschreven moet worden | Infographic |\n| Team | 4 oprichters | Over ons |\n| Productlijn | 3 producten: Gripsok 1.0, 2.0 wit, 2.0 zwart | Sitemap |\n\n#### Snelheid — labmeting 3 sep, mobiele viewport\n\nTTFB 26 ms · FCP 584 ms · CLS 0,00 · 0 lange taken · 0 render-blokkerende scripts (alle 28 head-scripts zijn modules). **Zwaar:** 241 requests, ~966 KB, 70 script-tags. LCP niet betrouwbaar te meten (PSI-API op dagquotum).\n\n---\n\n### Het meetgat\n\nGA4-property `476032345`. **Nul purchase-events in de volledige historie** — niet nul deze week, maar nul sinds februari 2025, ook in de maanden met 266–334 sessies. Conversieratio, omzet per bezoeker en kanaalattributie zijn in GA4 dus niet laag maar onbestaand. Dit beantwoordt de openstaande vraag uit [Analytics & KPI Dashboard](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Analyse/Analytics%20%26%20KPI%20Dashboard.md).\n\nDe meting is hersteld op **30 augustus 2026 om 19:42**; alle andere e-commerce-events vuren sindsdien. Alleen het event op de bedankpagina na betaling ontbreekt — de tag zit niet aan de Shopify-checkout vast.\n\n**Sessies per maand:** sep 2025 266 · okt 292 · nov 334 · dec 233 · jan 2026 1 (meting valt uit) · feb–jul 2026 geen enkele rij, zes maanden definitief verloren · aug 12 · sep 24.\n\n**Events 30 aug – 3 sep (4,5 dagen):** page_view 45 · session_start 35 · first_visit 31 · user_engagement 28 · scroll 16 · view_item 8 · view_item_list 3 · begin_checkout 2 · add_to_cart 1 · click 1 · **purchase 0**.\n\n**Twee structurele gevolgen van dit volume:**\n- **A/B-testen kan niet.** Voor 20% verbetering op ~2% conversie heb je circa 20.000 sessies per variant nodig; bij twaalf sessies per dag is dat ruim vier jaar per variant. Werk met voor/na op grote wijzigingen plus kwalitatief onderzoek.\n- **Echte Core Web Vitals komen er nooit.** Google's drempel voor veldgegevens haal je bij dit volume niet. Labmetingen zijn het enige dat er ooit zal zijn — behandel snelheid als hygiëne.\n\n---\n\n### Contentinventaris\n\n3 producten · 3 collecties (twee leeg) · 19 pagina's (vier onder de 400 woorden) · 3 blogs (waarvan één interne, publiek zichtbaar) · 23 artikelen (vrijwel alle 400–750 woorden).\n\n**Problemen:** 3 kannibaliserende paren (blessures · onderhoud · pilates) · 3 off-topic artikelen (sportvoeding · ochtendroutine · mentale voordelen) · 1 sportlandingspagina (alleen padel, 1167 woorden — het te kopiëren model) · 6 ontbrekende spokes (voetbal, tennis, fitness, hockey, basketbal, rugby).\n\n**Strategie in één zin:** alle kracht naar één sterke gripsokken-hub, met de sportpagina's als spokes die er met beschrijvende ankertekst naartoe linken. Merk-breed, niet sport-per-sport, zodat de skisokkenlijn er straks in past. **Eerst verdichten, dan pas schrijven.**\n\n---\n\n### Correcties op het dossier zelf\n\nTwee dingen kloppen niet meer of niet helemaal, vastgesteld bij het doorvoeren op 4 september. Zie [Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md) voor wat er vervolgens is gebouwd.\n\n- **Beslispunt 14 (`sameAs`) kán niet in de Theme Editor.** Het dossier zet hem op \"Theme Editor, jij\". Maar `snippets/organization-schema.liquid` leest `settings.social_instagram_link` en soortgenoten — en die instellingen bestaan niet in Horizon. Dat snippet zou `sameAs` dus altijd leeg hebben gelaten, en de Theme Editor biedt er geen veld voor. Opgelost in code, in de Organization-node in `sections/header.liquid`.\n- **Het vijfde lettertype `GTStandard-MMedium` zit niet in elk thema.** In `200269168967` staan alle vier de fontinstellingen op Poppins (n8/n7/n4/n5). Die bevinding geldt dus voor het live-thema, niet overal.\n\n### Nieuwe bevindingen van 4 september\n\nBuiten de 39 uit het dossier, gevonden in theme `200269168967`:\n\n- **Derde besteldeadline (17:00)** en **de retourtermijn-tegenspraak (14 vs 30 dagen)** — beide hierboven verwerkt.\n- **30 KB ongebruikte blocking CSS op de homepage en de shoppagina.** Zes secties laadden `padel-page.css` terwijl dat bestand uitsluitend `.padel-*`-selectors en `--padel-*`-tokens bevat, en geen van die secties één zo'n klasse of token gebruikt. Verwijderd.\n- **De typografie-instellingen staan omgekeerd.** `type_body_font` = `poppins_n8` (800) en `type_heading_font` = `poppins_n4` (400), met `type_size_paragraph` = 14. Nagemeten in de gerenderde CSS van de preview: `--font-body--weight: 800`, `--font-heading--weight: 400`. Gevolg: lopende tekst is ExtraBold, de H1 van 56px en H2 van 48px zijn Regular — de hiërarchie staat op zijn kop, en `<strong>` doet niets meer omdat alles al 800 is. Dat het niet meteen opvalt komt doordat de maatwerksecties (`g2-`, `padel-`, `shop-`) hun eigen `font-weight` zetten; het treft vooral de Horizon-eigen onderdelen: productbeschrijvingen, blogartikelen, beleidspagina's, FAQ-tekst en de winkelwagen. Daarnaast staan `type_case_h1`/`h2` op `none` terwijl koppen UPPERCASE horen. [Brand Identity Overview](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) schrijft body Poppins 400 op 15–16px voor en koppen 700–800. Zichtbare ontwerpwijziging, dus wacht op akkoord van lars — zie [Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md).\n- **Een vierde beoordelingscijfer.** `sections/hi-wk-promo.liquid` had als schema-default `\"4.8/5 op Trustpilot\"`, naast de 4,5 uit de testimonials en de werkelijke 4,6 op 17 reviews. Default gecorrigeerd naar 4,6; de testimonials-sectie staat nog op 4,5.\n- **`snippets/product-schema.liquid` was een tikkende bom.** Niet gerenderd, maar mét harde fallbacks 4,5 en 7 reviews op metafields die niet bestaan. Wie dit ooit aanzet, publiceert verzonnen reviews. Dit is dossier-bevinding H11; de aggregateRating is nu uit het bestand gehaald.\n\n---\n\n### Gerelateerde bestanden\n\n- [Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md) — wat er van dit dossier daadwerkelijk is doorgevoerd, en waar\n- [Technische Procedures](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Technische%20Procedures.md) — hoe een themawijziging naar Shopify gaat\n- [Conversie Optimalisatie Checklist](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Analyse/Conversie%20Optimalisatie%20Checklist.md) — de CRO-kant\n- [Analytics & KPI Dashboard](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Analyse/Analytics%20%26%20KPI%20Dashboard.md) — het meetgat in context\n- [SEO Strategie & Keywords](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/SEO/Strategie/SEO%20Strategie%20%26%20Keywords.md) — de hub-and-spoke-strategie\n- [Website Doel & KPI's](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Doel/Website%20Doel%20%26%20KPI%27s.md)\n- [Goedkeuringsworkflow](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Goedkeuringsworkflow.md) — hoe dit richting live gaat\n\n## Acties\n\n- [x] P1 · Producten koppelen aan collectie `gripsokken` — hub is leeg (Shopify Admin, lars)\n- [x] P1 · Purchase-event aan de Shopify-checkout koppelen — bedankpagina-tag ontbreekt\n- [ ] P1 · Template `gripsokken` toewijzen aan de collectie\n- [ ] P1 · Verzend- en retourbeleid in Shopify Admin bijwerken naar 22:00 en 30 dagen — policies lopen achter op de site\n- [ ] P2 · Besluit Engelse versie: afmaken of uitzetten (advies: uitzetten)\n- [ ] P2 · Besluit drie off-topic blogartikelen: noindex, herschrijven of laten staan\n- [ ] P2 · `/pages/collection`: 301 naar de hub of ombouwen tot echte shoppagina\n- [ ] P2 · Kortingspopup vertragen, met Escape sluitbaar, sluitknop ≥ 24 px (EcomSend)\n- [ ] P2 · Trustpilot-widget repareren — laadt van drie domeinen en toont niets\n- [ ] P2 · Titels en meta descriptions site-breed zoekwoord-eerst (Website Agent levert, lars plakt)\n- [ ] P2 · Search Console-export (3 maanden, Zoekopdrachten + Pagina's)\n- [ ] P2 · Shopify Analytics-export (12 maanden: orders, omzet, AOV, conversie)\n- [ ] P2 · Eén uur klantstem: 50 service-mails, 17 reviews, eerste vraag per clubgesprek\n- [ ] P2 · Akkoord op omdraaien typografie-instellingen (body Poppins 400/16px, koppen 800 UPPERCASE)\n- [ ] P3 · Testimonials-sectie van 4,5 naar 4,6 zetten\n- [ ] P3 · Volgorde sportpagina's bepalen na de Search Console-export\n- [ ] P3 · Skisokken: moment bepalen (geparkeerd op verzoek van lars)\n\n## Bronnen\n\n- Origineel: [Stand van Zaken — Werkdossier 2026-09-04](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Analyse/Stand%20van%20Zaken%20%E2%80%94%20Werkdossier%202026-09-04.md)\n- Doorgevoerd: [Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md) (2026-09-04)\n- Labmeting 3 september (mobiele viewport), GA4-property 476032345\n\n## Aantekeningen",
   "bron": "los",
   "bronbestand": "C:\\Users\\Test\\OneDrive\\Documents\\HI-Grip-Vault-\\03_Website_Agent\\Analyse\\Stand van Zaken — Werkdossier 2026-09-04.md",
   "bronbestand_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Analyse/Stand%20van%20Zaken%20%E2%80%94%20Werkdossier%202026-09-04.md",
   "categorie": "Techniek",
   "datum": "2026-09-04",
   "deadline": "",
   "gerelateerd": [
    "2026-09-15-seo-audit",
    "2026-09-03-analytics-kpi-meetgat",
    "2026-09-14-weekoverzicht",
    "2026-09-16-seo-onderzoek-cloud-routine-website",
    "2026-09-21-beachhead-rugby"
   ],
   "id": "2026-09-04-werkdossier-stand-van-zaken",
   "kansen": [],
   "kerncijfers": [],
   "kerntitel": "",
   "prioriteit": "P1",
   "routine": "",
   "samenvatting": "Vier audits van 3 september samengebracht: twee blokkades (producten koppelen aan collectie gripsokken, purchase-event aan de checkout), 18 beslispunten en zeven tegenspraken (besteldeadline, retourtermijn, verzenddrempel) die in thema 200269168967 zijn rechtgezet. De officiële Shopify-policies lopen nu achter op wat de site belooft.",
   "status": "in-uitvoering",
   "titel": "Werkdossier higrip.nl — stand van zaken 4 september 2026",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-04-werkdossier-stand-van-zaken.md",
   "vervangt": [],
   "wat_niet_lukte": ""
  },
  {
   "acties": [
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "03_Website_Agent/Analyse/Analytics & KPI Dashboard.md: 'resultaat-KPI's opzetten' staat nog als open taak.",
      "controle": "Zijn de resultaat-KPI's opgezet?",
      "gecontroleerd": "2026-09-26",
      "methode": "vault",
      "uitkomst": "open"
     },
     "id": "2026-09-03-analytics-kpi-meetgat#872bb605",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Resultaat-KPI's opzetten (conversieratio, AOV, omzet/bezoeker) met Shopify Analytics als omzetbron",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "KPI's staan al in kpi.json en shopify.json; Claude voegt AOV en omzet per bezoeker toe.",
      "wat_jij_doet": "Niets."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Taak staat nog open in Analytics & KPI Dashboard.md; GA4-funnel 28 dagen: view_item->add_to_cart->begin_checkout->purchase = 116->36->24->3, grootste drop-off blijft add_to_cart->begin_checkout niet vastgelegd als conclusie.",
      "controle": "Is het funnelrapport gemaakt en de grootste drop-off benoemd?",
      "gecontroleerd": "2026-09-26",
      "methode": "vault",
      "uitkomst": "open"
     },
     "id": "2026-09-03-analytics-kpi-meetgat#8d1d8e60",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Funnel-rapport product → cart → checkout → betaling via `run_funnel_report`; grootste absolute drop-off zoeken",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "ja",
      "wat_claude_doet": "Draait het funnelrapport via GA4 en noteert de grootste drop-off.",
      "wat_jij_doet": "Niets."
     }
    },
    {
     "afgevinkt": true,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-09-03-analytics-kpi-meetgat#2632acc5",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "UTM-discipline op alle uitgaande links (bio, posts, influencer-briefings, e-mail)",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Recordings en heatmaps bekijken is mensenwerk; geen Clarity-toegang.",
      "controle": "Clarity koppelen aan funneldiagnoses.",
      "gecontroleerd": "2026-09-25",
      "methode": "geen",
      "uitkomst": "handmatig"
     },
     "id": "2026-09-03-analytics-kpi-meetgat#96f1208f",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "Microsoft Clarity koppelen aan de diagnoses: bij een funnel-drop recordings/heatmaps erbij pakken",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "nee",
      "wat_claude_doet": "Kan Clarity niet lezen zonder koppeling.",
      "wat_jij_doet": "Clarity-toegang geven of recordings zelf bekijken."
     }
    },
    {
     "afgevinkt": false,
     "beheer": null,
     "besluit": false,
     "controle": {
      "bewijs": "Geen document in de vault legt een oorzaak vast; tag vuurt weer (323 sessies, 3 purchases in 28 dagen).",
      "controle": "Is de oorzaak van de GA4-stop rond 1-1-2026 achterhaald?",
      "gecontroleerd": "2026-09-26",
      "methode": "ga4",
      "uitkomst": "open"
     },
     "id": "2026-09-03-analytics-kpi-meetgat#997d251e",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "Achterhalen waarom de GA4-tag rond 1 januari 2026 stopte",
     "uitvoerbaar": {
      "beoordeeld": "2026-09-26",
      "claude": "deels",
      "wat_claude_doet": "Zoekt in GA4 en de thema-geschiedenis naar de oorzaak.",
      "wat_jij_doet": "Shopify-appgeschiedenis rond januari nakijken."
     }
    },
    {
     "afgevinkt": true,
     "beheer": null,
     "besluit": false,
     "controle": null,
     "id": "2026-09-03-analytics-kpi-meetgat#72df5bef",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Controleren of de koppeling purchase-events doorgeeft — gecontroleerd 3 september: nee",
     "uitvoerbaar": null
    }
   ],
   "body_md": "# GA4 — het meetgat en de eerste cijfers\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\nBij ~12 sessies per dag kan A/B-testen niet en komen er nooit echte Core Web Vitals-velddata; werk met voor/na-metingen plus kwalitatief onderzoek (Clarity, klantstem). Shopify Analytics blijft de bron voor omzet en orders.\n\n## Bevindingen\n\n> **GA4-toegang is live sinds 2026-08-30** via de `analytics-mcp`-koppeling (zie [API & Tool Connections](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/API%20%26%20Tool%20Connections.md)). Dit bestand wordt gevuld volgens de KPI-aanpak uit [Website Doel & KPI's](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Doel/Website%20Doel%20%26%20KPI%27s.md): resultaat-KPI's (omzet, conversie, AOV, omzet/bezoeker) + een diagnostische laag over *waarom* bezoekers wel/niet kopen. Shopify Analytics blijft bron van waarheid voor omzet/orders; GA4 is voor gedrags-/funnelinzicht.\n\n### Databeschikbaarheid — let op het gat\n\n| Periode | Status |\n|---|---|\n| ~2025-03-13 t/m 2025-12-31 | GA4-data aanwezig (~250 sessies/mnd) |\n| ~2026-01-01 t/m 2026-08-29 | **geen data** — GA4-tag lag stil (waarschijnlijk door thema-republicatie/app-wijziging) |\n| vanaf 2026-08-30 | opnieuw gekoppeld via Shopify Google & YouTube-integratie; verse data zit met 24-48u vertraging in de standaardrapporten |\n\nGevolg: voor trend/vergelijking is alleen mrt–dec 2025 bruikbaar in GA4. Voor de tussenliggende maanden en de lange-termijn-omzettrend → Shopify Analytics.\n\n### Eerste cijfers (GA4, 2025-03-13 – 2026-01-04)\n\n**Kanaalverdeling (sessies / gebruikers):**\n\n| Kanaal | Sessies | Gebruikers |\n|---|---|---|\n| Direct | 1.083 | 713 |\n| Organic Search | 829 | 403 |\n| Organic Social | 360 | 287 |\n| Referral | 258 | 93 |\n\n**Sessies per maand:** mrt 192 · apr 134 · mei 429 · jun 272 · jul 216 · aug 164 · sep 266 · okt 292 · nov 334 · dec 233.\n\n**Eerste observaties (nog te verdiepen):**\n- **Direct = 43% van de sessies.** Onwaarschijnlijk hoog voor een webshop van deze omvang — vrijwel zeker deels untagged social/influencer/nieuwsbrief-verkeer zonder UTM-parameters. Raakt de \"kanaal → identiteit\"-mapping uit [Website Doel & KPI's](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Doel/Website%20Doel%20%26%20KPI%27s.md) en [Conversie Optimalisatie Checklist](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Analyse/Conversie%20Optimalisatie%20Checklist.md). → Voorstel: UTM-discipline op alle uitgaande links (bio, posts, influencer-briefings, e-mail).\n- Laag volume (~250 sessies/mnd) → kleine-steekproef-ruis; behandel korte-periode-verschillen als hypothese, niet als bewijs.\n\n### Het purchase-gat (vastgesteld 2026-09-03)\n\n**Er zijn nul purchase-events in de volledige historie van deze property.** Niet nul deze week — nul sinds februari 2025, ook in de maanden met 266 tot 334 sessies. Conversieratio, omzet per bezoeker en kanaalattributie zijn in GA4 dus niet *laag* maar *onbestaand*, en alle CRO-conclusies die op GA4 leunen zijn tot die tijd ongeldig.\n\nSinds het herstel op 30-08 om 19:42 vuren alle andere e-commerce-events wel (`view_item`, `view_item_list`, `add_to_cart`, `begin_checkout`). Alleen het event op de bedankpagina na betaling ontbreekt — de tag zit dus niet aan de Shopify-checkout vast. Dit koppelen is beslispunt 2 uit [Stand van Zaken — Werkdossier 2026-09-04](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Analyse/Stand%20van%20Zaken%20%E2%80%94%20Werkdossier%202026-09-04.md) en blokkeert alles wat met meten te maken heeft.\n\n**Twee gevolgen van het huidige volume (~12 sessies/dag) die niet weggaan als de meting klopt:**\n- **A/B-testen kan niet.** Voor 20% verbetering op ~2% conversie zijn circa 20.000 sessies per variant nodig — ruim vier jaar per variant. Werk met voor/na op grote wijzigingen plus kwalitatief onderzoek (Clarity, klantstem).\n- **Echte Core Web Vitals komen er nooit** — Google's drempel voor veldgegevens wordt bij dit volume niet gehaald. Labmetingen zijn het enige dat er ooit zal zijn.\n\n### Nog te doen\n\n- [ ] Zodra ~2 weken verse data binnen is: resultaat-KPI's opzetten (conversieratio, AOV, omzet/bezoeker) met Shopify Analytics als omzetbron\n- [ ] Funnel-rapport (product → cart → checkout → betaling) via `run_funnel_report` — grootste absolute drop-off zoeken\n- [x] ~~Controleren of de nieuwe koppeling `purchase`/e-commerce-events doorgeeft~~ → **gecontroleerd 2026-09-03, en het antwoord is nee.** Zie hieronder.\n- [ ] Microsoft Clarity (kwalitatieve laag) koppelen aan de diagnoses: bij een funnel-drop → recordings/heatmaps erbij pakken voor het *waarom*\n- [ ] Achterhalen waarom de tag rond 1-1-2026 stopte, zodat het niet opnieuw gebeurt\n\n### Gerelateerde bestanden\n\n- [Website Doel & KPI's](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Doel/Website%20Doel%20%26%20KPI%27s.md) — De KPI-filosofie die dit dashboard invult\n- [Conversie Optimalisatie Checklist](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Analyse/Conversie%20Optimalisatie%20Checklist.md) — Openstaande CRO-punten\n- [Stappenplan — Shopify Apps & Analytics Toegang](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Stappenplan%20%E2%80%94%20Shopify%20Apps%20%26%20Analytics%20Toegang.md) — Hoe de GA4-toegang is afgerond\n- [Shopify App Stack](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Shopify%20App%20Stack.md) — Technische stand van zaken\n- [API & Tool Connections](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/API%20%26%20Tool%20Connections.md) — Volledige achtergrond + eindopzet van de GA4-route\n\n## Acties\n\n- [ ] P2 · Resultaat-KPI's opzetten (conversieratio, AOV, omzet/bezoeker) met Shopify Analytics als omzetbron\n- [ ] P2 · Funnel-rapport product → cart → checkout → betaling via `run_funnel_report`; grootste absolute drop-off zoeken\n- [x] P2 · UTM-discipline op alle uitgaande links (bio, posts, influencer-briefings, e-mail)\n- [ ] P3 · Microsoft Clarity koppelen aan de diagnoses: bij een funnel-drop recordings/heatmaps erbij pakken\n- [ ] P3 · Achterhalen waarom de GA4-tag rond 1 januari 2026 stopte\n- [x] P2 · Controleren of de koppeling purchase-events doorgeeft — gecontroleerd 3 september: nee\n\n## Bronnen\n\n- Origineel: [Analytics & KPI Dashboard](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Analyse/Analytics%20%26%20KPI%20Dashboard.md)\n- [API & Tool Connections](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/API%20%26%20Tool%20Connections.md) § GA4 · GA4-property 476032345\n\n## Aantekeningen",
   "bron": "los",
   "bronbestand": "C:\\Users\\Test\\OneDrive\\Documents\\HI-Grip-Vault-\\03_Website_Agent\\Analyse\\Analytics & KPI Dashboard.md",
   "bronbestand_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Analyse/Analytics%20%26%20KPI%20Dashboard.md",
   "categorie": "CRO",
   "datum": "2026-09-03",
   "deadline": "",
   "gerelateerd": [
    "2026-09-04-werkdossier-stand-van-zaken",
    "2026-09-14-weekoverzicht",
    "2026-09-15-seo-audit",
    "2026-09-25-growth-radar-social",
    "2026-10-01-growth-radar-cro"
   ],
   "id": "2026-09-03-analytics-kpi-meetgat",
   "kansen": [],
   "kerncijfers": [],
   "kerntitel": "",
   "prioriteit": "P2",
   "routine": "",
   "samenvatting": "GA4 draait weer sinds 30 augustus 2026, maar de property heeft in de volledige historie nul purchase-events en de data van januari–augustus 2026 is definitief verloren. Direct is 43% van de sessies (mrt–dec 2025) — vrijwel zeker untagged social- en nieuwsbriefverkeer zonder UTM's.",
   "status": "bekeken",
   "titel": "GA4 — het meetgat en de eerste cijfers",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-03-analytics-kpi-meetgat.md",
   "vervangt": [],
   "wat_niet_lukte": ""
  },
  {
   "acties": [
    {
     "afgevinkt": true,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-08-31-weekoverzicht#ad18c10a",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Homepage-title en meta description aanpassen — overgenomen in Week 2026-09-14",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": true,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-08-31-weekoverzicht#85863581",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "Update Log bijwerken (structured data stond live) — overgenomen in Week 2026-09-14",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": true,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-08-31-weekoverzicht#a0a77caf",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Buffer MCP-server koppelen — gedaan 01-09, zie Feedback & Iteratie Log",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": true,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-08-31-weekoverzicht#3a792a61",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Events-kandidaten Urban Trail / Charity Run beoordelen — overgenomen in Week 2026-09-14",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": true,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-08-31-weekoverzicht#0d20a6f4",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Funnel-rapport op historische GA4-data en purchase-events checken — overgenomen in Week 2026-09-14",
     "uitvoerbaar": null
    }
   ],
   "body_md": "# Denzel Weekoverzicht — 2026-08-31\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\nEerste week met live-site-check en SEO-check. Vervangen door het weekoverzicht van 7 september. Bewaard als archief.\n\n## Bevindingen\n\n### Voortgang per hoofdagent\n\n- **Content Agent** — geen verandering. Video & Visuele Productie Agent (`/video-productie`, sinds 2026-08-09) nog steeds zonder output. Automatisering van periodieke content-ideeën blijft bewust niet gebouwd (lars wil dit eerst intern afstemmen) — de technische blocker daarachter (Buffer-koppeling stond op \"requires authentication\") lijkt inmiddels weg te vallen, zie AI-ontwikkelingen hieronder.\n- **Partnership Agent** — B2B Klanten Agent: lijst laatst bijgewerkt 2026-08-25 (6 dagen geleden), binnen de 1-2 weken-marge, geen nieuwe zoekactie nodig. Partnerships & Events Agent: lijst laatst bijgewerkt 2026-08-24 (7 dagen geleden), ook binnen de marge, geen nieuwe zoekactie nodig. Influencer & Creator Agent draait ongewijzigd actief via het IG-zoekscript. De twee MIDDEL-kandidaten van vorige week (Urban Trail Rotterdam, Rotterdam Charity Run) wachten nog steeds op een eerste beoordeling van lars. **Update 31-08:** lars heeft Sport Ondernemers Expo geschrapt (\"niet iets voor ons\" — B2B-vakbeurs, geen sportpubliek/activatie); verwijderd uit [Voorbeelden Gevonden Organisaties (Events)](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20B%20-%20Samenwerkingen/Voorbeelden%20Gevonden%20Organisaties%20%28Events%29.md) en als uitsluitingsregel vastgelegd in [Voorwaarden Samenwerking](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20B%20-%20Samenwerkingen/Voorwaarden%20Samenwerking.md).\n- **Website Agent** — dit was de eerste geplande run van de live-site-check en SEO-check (vastgesteld 2026-08-25). **Update 31-08 (tweede check, later op de dag):** de egress-blokkade is niet meer aanwezig — WebFetch en curl naar `higrip.nl` werken nu gewoon (HTTP 200). Live-site-check en SEO-check alsnog uitgevoerd, zie hieronder. GA4-koppeling (`analytics-mcp`) draait sinds 2026-08-30 naar behoren, los van dit probleem.\n\n### Wat ik deze week zelf heb opgepakt\n\n**B2B Klanten (Lijn A):** geen zoekactie — lijst is recent genoeg (2026-08-25, binnen de marge).\n\n**Samenwerkingen/Events (Lijn B):** geen zoekactie — lijst is recent genoeg (2026-08-24, binnen de marge).\n\n**Live-site-check (alsnog uitgevoerd, 31-08 later op de dag):**\n- Bereikbaar: `https://www.higrip.nl/` geeft HTTP 200, geen 404/500, geen zichtbare Liquid-errors.\n- **Structured data staat nu wél live.** `<script type=\"application/ld+json\">` voor Organization, WebSite én FAQPage (8 vragen) staat in de `<head>` van de productiepagina — de wachtende actie sinds 2026-08-02 ([Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md)) blijkt afgerond. Denzel kan dit niet zelf in [Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md) markeren (buiten schrijfrechten van deze routine) — signaal voor lars/Website Agent om die notitie bij te werken.\n- Merknaam: overal zichtbaar correct \"HÏ Grip\" (og:title, twitter:title, `<title>`, JSON-LD `name`, paginatekst). De enige \"HI_Grip\"-vermeldingen staan in bestandsnamen/URL's van het logo (bv. `HI_Grip_logo_high_res.png`) — niet zichtbaar voor bezoekers, geen actie nodig.\n- Vertrouwens-elementen uit [Conversie Optimalisatie Checklist](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Analyse/Conversie%20Optimalisatie%20Checklist.md) staan er: contactgegevens (e-mail, telefoon, KVK), Trustpilot-link, klantlogo's (Hogeschool Rotterdam, Concordia, SYTH, Sport2000), wetenschappelijke bronvermeldingen.\n\n**SEO-check (alsnog uitgevoerd, 31-08 later op de dag):**\n- `<title>` = **\"HÏ Grip\"** — slechts 7 tekens, ver onder de aanbevolen ~50-60. Geen keyword (\"gripsokken\", \"performance sportswear\") in de title — gemiste SEO-kans op de homepage. **Voorstel:** iets als \"HÏ Grip — Performance Gripsokken voor Sporters\" (past binnen 50-60 tekens, bevat het hoofdkeyword).\n- `<meta name=\"description\">` = 175 tekens — iets boven de aanbevolen ~120-155, risico op afkappen in Google-resultaten. **Voorstel:** inkorten met ~20 tekens, kernboodschap (grip + comfort + minder blessures) behouden.\n- Sitemap bereikbaar op `https://www.higrip.nl/sitemap.xml` (HTTP 200) — een geldige sitemap-index met 9 sub-sitemaps (producten/pagina's/collecties/blogs, NL+EN), plus een \"agentic discovery sitemap\" (sluit aan bij de Shopify-agentic-commerce-ontwikkeling uit de AI-ontwikkelingen hieronder).\n- FAQPage-inhoud (8 vragen) inhoudelijk gecheckt: missie, verzorging, levertijd, zakelijk-aanbod-link, FAQ-paginalink — lijkt allemaal actueel, geen verwijzingen naar iets verouderds gevonden.\n- Zoals altijd: geen van deze twee bevindingen (title/description) is door Denzel zelf aangepast — alleen gesignaleerd met een concreet voorstel, wijziging is aan lars/Website Agent via de reguliere procedure ([Technische Procedures](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Technische%20Procedures.md)).\n\n**AI-ontwikkelingen:** gerichte websearch gedaan naar wat er de afgelopen periode concreet is bijgekomen voor contentcreatie/marketing/e-commerce, zie hieronder — met één vondst die direct een bekende blocker raakt (Buffer-MCP).\n\n### Openstaande beslissingen voor lars\n\n- ~~**Egress-toegang tot higrip.nl vrijgeven voor deze cloud-routine.**~~ — **opgelost, bleek tijdelijk.** Bij een tweede check later op 31-08 werkten WebFetch én curl naar `higrip.nl` gewoon (HTTP 200) — de eerdere 403 op de CONNECT-tunnel was kennelijk een voorbijgaand probleem van de egress-proxy, geen permanente blokkade. Geen verdere actie van lars nodig, wel iets om in de gaten te houden als het volgende week weer optreedt.\n- **Structured data staat live, [Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md) klopt niet meer.** Organization/WebSite/FAQPage JSON-LD staat op de productie-homepage (bevestigd 31-08) — de notitie zegt nog \"nog niet door lars naar het live theme gekopieerd\". Voorstel: lars of Website Agent werkt [Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md) bij zodat de status klopt (buiten schrijfrechten van deze routine).\n- **SEO-titel en meta-description homepage aanpassen.** Title is nu alleen \"HÏ Grip\" (7 tekens, geen keyword); description is 175 tekens (net te lang). Voorstel staat hierboven bij de SEO-check — kleine, lage-risico wijziging via de reguliere theme-procedure.\n- **Buffer MCP-server koppelen** (zie AI-ontwikkelingen) — voorstel: koppel Buffer via de OAuth-custom-connector in Claude (geen API-key nodig, een paar klikken). Dit lost in één keer twee bekende blockers op: het \"fundamenteel gat\" uit de kritische kwaliteitsreview van 25-08 (Buffer als ontbrekende feedbackbron) én de reden waarom Content Agent's contentkalender-automatisering nog niet gebouwd kon worden.\n- ~~**Sport Ondernemers Expo (4 nov 2026)**~~ — afgehandeld 31-08: door lars geschrapt, geen HÏ Grip-fit (B2B-vakbeurs).\n- **Urban Trail Rotterdam & Rotterdam Charity Run** (MIDDEL, toegevoegd 2026-08-24) — wachten nog op een eerste beoordeling/budget-check.\n- **Merk & Bedrijf Database / Retailer Database** — nog steeds niet bevestigd of deze verwijderd mogen worden (lijken overbodig, functie al gedekt door andere bestanden).\n\n### Vooruitblik — komende week\n\n1. **Title tag en meta description van de homepage verbeteren** — concreet voorstel staat in de SEO-check hierboven; kleine wijziging, kan snel via de reguliere theme-procedure.\n2. **[Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md) laten bijwerken** — structured data staat al live, de notitie zegt nog van niet.\n3. **Buffer-koppeling opzetten** via de nieuwe OAuth-MCP-server — daarna kan zowel de Buffer-feedbackloop als (op termijn) een voorstel voor Content Agent-automatisering opnieuw bekeken worden.\n4. **Beoordeling geven op de openstaande Events-kandidaten** (Urban Trail Rotterdam, Rotterdam Charity Run) — liggen al een week te wachten op een budget-check.\n5. **Analytics-vervolgstappen oppakken nu GA4 een week draait:** funnel-rapport op de historische data (mrt–dec 2025) om het grootste CRO-startpunt te vinden, en checken of purchase-events daadwerkelijk doorkomen.\n\n### AI-ontwikkelingen die relevant kunnen zijn\n\n1. **Buffer heeft een gratis MCP-server gelanceerd** (27 mei 2026, beschikbaar op elk abonnement incl. het gratis plan) — Claude kan als custom connector via OAuth verbinden (geen API-key), en kan dan posts opstellen, plannen, de wachtrij beheren en analytics uitlezen. Dit is direct relevant: lost het \"Buffer ✗\"-gat uit de kwaliteitsreview van 25-08 op én de reden waarom Content Agent-automatisering nog niet gebouwd was (contentkalender staat in Buffer, koppeling stond op \"requires authentication\").\n2. **Shopify's agentic-commerce-laag (Storefront MCP / Universal Commerce Protocol) is dit jaar breed uitgerold** — elke Shopify-store krijgt een eigen Storefront MCP-server, waardoor AI-shopassistenten (ChatGPT e.d.) productdata direct kunnen doorzoeken. Relevant voor `/shopify-seo`: goede structured data/productdata wordt niet alleen een Google-zoekwoordvraag maar ook een \"vindbaar zijn voor AI-shopagents\"-vraag — extra reden om de nog-niet-live structured data (zie hierboven) alsnog naar live te krijgen.\n3. **Pippit** (AI-tool die contentcreatie combineert met publiceren en analytics, gericht op commerce) — zet productpagina's/bronmateriaal automatisch om in video's en avatar-content, met een gedeelde kalender voor distributie. Kan relevant zijn voor `/video-productie` en `/social-content` als sneller startpunt voor productvideo's, zonder dat het de eigen HÏ Grip-beeldtaal (échte producten/mensen) hoeft te vervangen.\n\n### Gerelateerde bestanden\n\n- [Stappenplan — Verdere Bouw](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Stappenplan%20%E2%80%94%20Verdere%20Bouw.md)\n- [Feedback & Iteratie Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Feedback%20%26%20Iteratie%20Log.md)\n- [Agent Werk & Kwaliteit Overzicht](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Agent%20Werk%20%26%20Kwaliteit%20Overzicht.md)\n\n## Acties\n\n- [x] P2 · Homepage-title en meta description aanpassen — overgenomen in Week 2026-09-14\n- [x] P3 · Update Log bijwerken (structured data stond live) — overgenomen in Week 2026-09-14\n- [x] P2 · Buffer MCP-server koppelen — gedaan 01-09, zie Feedback & Iteratie Log\n- [x] P2 · Events-kandidaten Urban Trail / Charity Run beoordelen — overgenomen in Week 2026-09-14\n- [x] P2 · Funnel-rapport op historische GA4-data en purchase-events checken — overgenomen in Week 2026-09-14\n\n## Bronnen\n\n- Origineel: [Week 2026-08-31](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Weekoverzicht/Week%202026-08-31.md) (`04_Agent_Infrastructuur/Beheer/Weekoverzicht/`)\n- Routine: [Denzel Weekoverzicht — Routine](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Denzel%20Weekoverzicht%20%E2%80%94%20Routine.md)\n\n## Aantekeningen",
   "bron": "routine",
   "bronbestand": "C:\\Users\\Test\\OneDrive\\Documents\\HI-Grip-Vault-\\04_Agent_Infrastructuur\\Beheer\\Weekoverzicht\\Week 2026-08-31.md",
   "bronbestand_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Weekoverzicht/Week%202026-08-31.md",
   "categorie": "Merk",
   "datum": "2026-08-31",
   "deadline": "",
   "gerelateerd": [
    "2026-08-24-weekoverzicht",
    "2026-09-07-weekoverzicht"
   ],
   "id": "2026-08-31-weekoverzicht",
   "kansen": [],
   "kerncijfers": [],
   "kerntitel": "",
   "prioriteit": "P3",
   "routine": "denzel-week",
   "samenvatting": "Structured data bleek op 31-08 wél live (Organization/WebSite/FAQPage); de homepage-title is maar 7 tekens en de description 175. Buffer heeft een gratis MCP-server gelanceerd. Sport Ondernemers Expo geschrapt door lars.",
   "status": "gearchiveerd",
   "titel": "Denzel Weekoverzicht — 2026-08-31",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-08-31-weekoverzicht.md",
   "vervangt": [
    "2026-08-24-weekoverzicht"
   ],
   "wat_niet_lukte": ""
  },
  {
   "acties": [
    {
     "afgevinkt": true,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-08-24-weekoverzicht#f1807684",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Sport Ondernemers Expo (4 nov 2026) beoordelen — geschrapt door lars op 31-08, geen fit",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": true,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-08-24-weekoverzicht#f8ab4b38",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "Urban Trail Rotterdam en Rotterdam Charity Run beoordelen — overgenomen in Week 2026-09-14",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": true,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-08-24-weekoverzicht#b9dd7542",
     "prioriteit": "P2",
     "prioriteit_effectief": "P2",
     "tekst": "GA4-stappen afronden (Analytics & KPI Dashboard) — GA4 live sinds 30-08",
     "uitvoerbaar": null
    },
    {
     "afgevinkt": true,
     "beheer": null,
     "besluit": true,
     "controle": null,
     "id": "2026-08-24-weekoverzicht#73b8d50e",
     "prioriteit": "P3",
     "prioriteit_effectief": "P3",
     "tekst": "Merk & Bedrijf Database / Retailer Database: bevestigen of ze weg mogen — overgenomen in Week 2026-09-14",
     "uitvoerbaar": null
    }
   ],
   "body_md": "# Denzel Weekoverzicht — 2026-08-24\n\n> **Brand Core (00):** [00 Brand Core](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/00%20Brand%20Core.md) · [Feiten](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Feiten%20%26%20Actuele%20Staat.md) · [Identiteit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) · [Tone of voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) · [Doelgroep](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Doelgroep%20%26%20Persona%27s.md) · [Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Strategie/Strategische%20Keuzes.md) — **Map:** [Waar staat wat](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/Waar%20staat%20wat.md) · [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md)\n\n## In het kort\n\nVervangen door het weekoverzicht van 31 augustus; de openstaande beslissingen zijn daar overgenomen. Bewaard als archief.\n\n## Bevindingen\n\n> Eerste run van de wekelijkse routine.\n\n### Voortgang per hoofdagent\n\n- **Content Agent** — Video & Visuele Productie Agent staat op \"in ontwikkeling\" (skill `/video-productie` sinds 2026-08-09), maar nog niet ingezet sinds bouw. Caption & Copy Agent en Content Strategie & Planning Agent blijven bewust \"idee\" (gedekt door de generieke `/social-content`- en `/content-strategy`-skills). Geen openstaande actie deze week.\n- **Partnership Agent** — B2B Klanten Agent: laatste zoekactie 2026-08-21 (3 dagen geleden), binnen de 1-2 weken-marge — deze week geen nieuwe zoekactie nodig. Partnerships & Events Agent: kandidatenlijst bleek 5+ weken niet bijgewerkt — deze week zelf een zoekactie gedaan (zie hieronder). Influencer & Creator Agent draait ongewijzigd actief via het IG-zoekscript.\n- **Website Agent** — Alle 4 sub-agent skills (`/shopify-seo`, `/shopify-design`, `/shopify-copy`, `/shopify-cro`) staan sinds 2026-08-09 op \"in ontwikkeling\", geen van alle heeft sindsdien output gehad. Analytics & KPI Dashboard staat nog open — geen bevestiging dat lars de GA4-stappen heeft afgerond.\n\n### Wat ik deze week zelf heb opgepakt\n\n**B2B Klanten (Lijn A):** geen zoekactie — de kandidatenlijst is al op 2026-08-21 bijgewerkt (3 dagen geleden), dat valt binnen de 1-2 weken-marge.\n\n**Samenwerkingen/Events (Lijn B):** wél een zoekactie — de kandidatenlijst was sinds 2026-07-17 niet meer aangevuld (5+ weken). Gezocht via de kanalen/zoektermen uit [Zoek Script & Gids (Samenwerkingen)](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20B%20-%20Samenwerkingen/Zoek%20Script%20%26%20Gids%20%28Samenwerkingen%29.md): voetbaltoernooien, padel-events, sportvoeding-co-activaties, hardloopevenementen en CrossFit/obstacle run, Rotterdam eerst. De meeste treffers vielen af bij toetsing aan [Voorwaarden Samenwerking](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20B%20-%20Samenwerkingen/Voorwaarden%20Samenwerking.md): Premier Padel Rotterdam is mega-tier (al bekend afwijsvoorbeeld), CrossFit RTM is een gym/box zonder eigen event (geen Lijn B-fit), voetbaltoernooien.info/Tournify zijn platforms, geen partners zelf.\n\n2 nieuwe, echte kandidaten toegevoegd (MIDDEL-prioriteit) aan [Voorbeelden Gevonden Organisaties (Events)](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20B%20-%20Samenwerkingen/Voorbeelden%20Gevonden%20Organisaties%20%28Events%29.md):\n- **Urban Trail Rotterdam (Golazo)** — jaarlijkse stadsloop door Rotterdam-Zuid (27 sep 2026), eigen sponsorpagina + contact (sponsoring@golazo.com). Schaal nog niet bevestigd, dus MIDDEL i.p.v. HOOG tot een budget-check.\n- **Rotterdam Charity Run (Erasmus MC Foundation)** — jaarlijks hardloop-/wandelevenement incl. Business Run-categorie (5 jun 2026, Kralingse Bos), direct telefoon/e-mailcontact. Charity- i.p.v. puur performance-karakter, vandaar MIDDEL.\n\nGeen van beide is al in [Pipeline Tracker](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Pipeline%20Tracker.md) of de bestaande lijst opgenomen — geen dubbelingen.\n\n### Openstaande beslissingen voor lars\n\n- **Sport Ondernemers Expo (4 nov 2026)** — tijdgevoelig, HOOG-kandidaat staat al langer klaar in [Voorbeelden Gevonden Organisaties (Events)](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20B%20-%20Samenwerkingen/Voorbeelden%20Gevonden%20Organisaties%20%28Events%29.md), nog niemand benaderd (outreach = Altijd overleg vooraf).\n- De 2 nieuwe MIDDEL-kandidaten (Urban Trail Rotterdam, Rotterdam Charity Run) wachten op een eerste beoordeling van lars of ze een budget-check waard zijn.\n- **Analytics & KPI Dashboard** (Website Agent) — nog steeds geen bevestiging dat de GA4-stappen (gcloud-login, Property-ID, credentials) zijn afgerond.\n- **Merk & Bedrijf Database / Retailer Database** — lijken overbodig (functie al gedekt door andere bestanden), nog te bevestigen door lars of ze verwijderd mogen worden.\n\n### AI-ontwikkelingen die relevant kunnen zijn\n\n1. **Shopify Magic accepteert nu preciezere input** (doelgroep-persona, keywords, concurrent-link) bij het genereren van producttitels/meta descriptions/alt-tekst — direct bruikbaar binnen `/shopify-seo` en `/shopify-copy` als extra invoer, geen aparte tool nodig.\n2. **Yotpo Discover (AEO/GEO voor e-commerce)** — houdt bij hoe een merk verschijnt in ChatGPT/Gemini/Google AI Mode, tot op product/categorie-niveau. Relevant voor `/shopify-seo`: SEO verschuift deels naar \"vindbaar zijn in AI-antwoorden\", nog geen actie nodig maar goed om te volgen.\n3. **EU AI Act-verplichting vanaf 2 augustus 2026**: AI-gegenereerde content (incl. synthetische stemmen/deepfakes) moet herkenbaar gelabeld worden. Relevant voor `/video-productie` en `/social-content` zodra AI-voice-over of AI-gegenereerd beeld wordt gebruikt in socials.\n4. **Veo 3-integratie in videotools als CapCut/Dreamina** — tekst-naar-scène-generatie met karakterconsistentie voor Reels/Shorts. Kan `/video-productie` versterken voor snellere concept-previews, mits het geen HÏ Grip-merkbeeld (échte producten/mensen) moet vervangen.\n\n### Gerelateerde bestanden\n\n- [Stappenplan — Verdere Bouw](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Stappenplan%20%E2%80%94%20Verdere%20Bouw.md)\n- [Feedback & Iteratie Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Feedback%20%26%20Iteratie%20Log.md)\n- [Agent Werk & Kwaliteit Overzicht](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Agent%20Werk%20%26%20Kwaliteit%20Overzicht.md)\n\n## Acties\n\n- [x] P2 · Sport Ondernemers Expo (4 nov 2026) beoordelen — geschrapt door lars op 31-08, geen fit\n- [x] P2 · Urban Trail Rotterdam en Rotterdam Charity Run beoordelen — overgenomen in Week 2026-09-14\n- [x] P2 · GA4-stappen afronden (Analytics & KPI Dashboard) — GA4 live sinds 30-08\n- [x] P3 · Merk & Bedrijf Database / Retailer Database: bevestigen of ze weg mogen — overgenomen in Week 2026-09-14\n\n## Bronnen\n\n- Origineel: [Week 2026-08-24](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Weekoverzicht/Week%202026-08-24.md) (`04_Agent_Infrastructuur/Beheer/Weekoverzicht/`)\n- Routine: [Denzel Weekoverzicht — Routine](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Denzel%20Weekoverzicht%20%E2%80%94%20Routine.md)\n\n## Aantekeningen",
   "bron": "routine",
   "bronbestand": "C:\\Users\\Test\\OneDrive\\Documents\\HI-Grip-Vault-\\04_Agent_Infrastructuur\\Beheer\\Weekoverzicht\\Week 2026-08-24.md",
   "bronbestand_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Weekoverzicht/Week%202026-08-24.md",
   "categorie": "Merk",
   "datum": "2026-08-24",
   "deadline": "",
   "gerelateerd": [
    "2026-08-31-weekoverzicht"
   ],
   "id": "2026-08-24-weekoverzicht",
   "kansen": [],
   "kerncijfers": [],
   "kerntitel": "",
   "prioriteit": "P3",
   "routine": "denzel-week",
   "samenvatting": "Eerste run van de wekelijkse Denzel-routine. Events-zoekactie leverde 2 MIDDEL-kandidaten (Urban Trail Rotterdam, Rotterdam Charity Run); de vier Website-skills hebben sinds 09-08 geen output; de GA4-stappen wachten op lars.",
   "status": "gearchiveerd",
   "titel": "Denzel Weekoverzicht — 2026-08-24",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-08-24-weekoverzicht.md",
   "vervangt": [],
   "wat_niet_lukte": ""
  }
 ],
 "opdrachten": [],
 "stats": {
  "open_per_prioriteit": {
   "P1": 47,
   "P2": 107,
   "P3": 54
  },
  "per_categorie": {
   "B2B": 1,
   "CRO": 6,
   "Compliance": 1,
   "Merk": 7,
   "SEO": 25,
   "Social": 4,
   "Techniek": 15
  },
  "per_week": [
   {
    "aantal": 0,
    "start": "2026-07-20",
    "week": "2026-W30"
   },
   {
    "aantal": 0,
    "start": "2026-07-27",
    "week": "2026-W31"
   },
   {
    "aantal": 0,
    "start": "2026-08-03",
    "week": "2026-W32"
   },
   {
    "aantal": 0,
    "start": "2026-08-10",
    "week": "2026-W33"
   },
   {
    "aantal": 0,
    "start": "2026-08-17",
    "week": "2026-W34"
   },
   {
    "aantal": 1,
    "start": "2026-08-24",
    "week": "2026-W35"
   },
   {
    "aantal": 3,
    "start": "2026-08-31",
    "week": "2026-W36"
   },
   {
    "aantal": 2,
    "start": "2026-09-07",
    "week": "2026-W37"
   },
   {
    "aantal": 9,
    "start": "2026-09-14",
    "week": "2026-W38"
   },
   {
    "aantal": 16,
    "start": "2026-09-21",
    "week": "2026-W39"
   },
   {
    "aantal": 22,
    "start": "2026-09-28",
    "week": "2026-W40"
   },
   {
    "aantal": 6,
    "start": "2026-10-05",
    "week": "2026-W41"
   }
  ],
  "totaal_notities": 59
 },
 "vault_branch": "HÏ-Grip-Vault-obsidian"
};
