window.HI_RESEARCH = {
 "backlog": [
  {
   "afgevinkt": true,
   "body_md": "**Wat er is gebeurd:** De productpagina-handle is sindsdien veranderd: het hoofdproduct heet nu `/products/performance-gripsokken` (was `/products/hi-grip-gripsokken-1`), en de twee oude URL's zijn mee omgenoemd naar `/products/performance-gripsokken-2-0-zwart` en `-wit`. Alle drie de eerder gemelde oude adressen (`hi-grip-gripsokken-1`, `performance-grip-socks-2-0-zwart`, `-wit`) geven nu automatisch een redirect naar hun nieuwe tegenhanger — geverifieerd met een `fetch`-test op 21 september 2026, canonical-tag op de live pagina klopt.\n**Let op:** De canonical handle in je eigen documentatie (projectgeheugen, theme-editor preview-links, mobiel-testinstructies) verwijst nog overal naar het oude `hi-grip-gripsokken-1`. Die links werken dankzij de redirect nog wel, maar zijn niet meer accuraat.\n**Gevonden op:** 15 september 2026 (regressiecheck), opgelost/herzien 21 september 2026 (SEO-technisch)",
   "id": "backlog#3621bd14",
   "kop": "~~[regressie] Oude productpagina's kannibaliseren nog het hoofdkeyword~~ — opgelost, canonical URL wel gewijzigd (bijgewerkt 21 sep 2026)",
   "prioriteit": "P1",
   "velden": {
    "Gevonden op": "15 september 2026 (regressiecheck), opgelost/herzien 21 september 2026 (SEO-technisch)"
   }
  },
  {
   "afgevinkt": false,
   "body_md": "**Waarom:** `keyEvents = 0` op elk kanaal, deze en vorige week. Blokkeert elke CRO-uitspraak (zie ook projectgeheugen, actie #1 uit de audit).\n**Waar:** GA4-property 476032345 → Admin → Events\n**Wat:** `purchase` markeren als key event.\n**Gevonden op:** 15 september 2026 (regressiecheck)",
   "id": "backlog#9c0719ed",
   "kop": "[regressie] GA4 key event voor `purchase` staat nog steeds uit",
   "prioriteit": "P1",
   "velden": {
    "Gevonden op": "15 september 2026 (regressiecheck)",
    "Waar": "GA4-property 476032345 → Admin → Events",
    "Waarom": "`keyEvents = 0` op elk kanaal, deze en vorige week. Blokkeert elke CRO-uitspraak (zie ook projectgeheugen, actie #1 uit de audit).",
    "Wat": "`purchase` markeren als key event."
   }
  },
  {
   "afgevinkt": false,
   "body_md": "**Waarom:** `snippets/hi-seo-schema.liquid` en de herschreven `snippets/product-schema.liquid` staan lokaal klaar in `C:\\Users\\Test\\higrip-theme` maar zijn nooit gepusht (Shopify CLI niet ingelogd). Dit verklaart waarom `WebSite` op alle 8 gecontroleerde URL's ontbreekt, `BreadcrumbList` op 6 van de 8, `ItemList` op beide collectiepagina's, `FAQPage` op de productpagina, en waarom `/pages/gripsokken-voetbal` nog 404 geeft.\n**Waar:** `C:\\Users\\Test\\higrip-theme` → Shopify test-thema 194761425223\n**Wat:** Eerst `shopify auth login` (device-code flow), dan pushen — thema-bestanden en `page.gripsokken-voetbal.json` in **aparte** pushes.\n**Gevonden op:** 15 september 2026 (regressiecheck)",
   "id": "backlog#93a9390e",
   "kop": "[regressie] SEO-schema-thema-wijzigingen nog niet gepusht naar productie",
   "prioriteit": "P1",
   "velden": {
    "Gevonden op": "15 september 2026 (regressiecheck)",
    "Waar": "`C:\\Users\\Test\\higrip-theme` → Shopify test-thema 194761425223",
    "Waarom": "`snippets/hi-seo-schema.liquid` en de herschreven `snippets/product-schema.liquid` staan lokaal klaar in `C:\\Users\\Test\\higrip-theme` maar zijn nooit gepusht (Shopify CLI niet ingelogd). Dit verklaart waarom `WebSite` op alle 8 gecontroleerde URL's ontbreekt, `BreadcrumbList` op 6 van de 8, `ItemList` op beide collectiepagina's, `FAQPage` op de productpagina, en waarom `/pages/gripsokken-voetbal` nog 404 geeft.",
    "Wat": "Eerst `shopify auth login` (device-code flow), dan pushen — thema-bestanden en `page.gripsokken-voetbal.json` in **aparte** pushes."
   }
  },
  {
   "afgevinkt": false,
   "body_md": "**Waarom:** Eén verborgen `visually-hidden` H1 (\"HÏ Grip\") naast de zichtbare hero-H1 — al genoteerd in de audit van 15 september maar nog niet opgelost.\n**Waar:** homepage hero-sectie (visually-hidden titel-element)\n**Wat:** De verborgen H1 wijzigen naar een `<span>` of `<p>`, zodat de hero-titel de enige H1 is.\n**Gevonden op:** 15 september 2026 (regressiecheck)",
   "id": "backlog#ee344d70",
   "kop": "[regressie] Homepage heeft nog steeds 2× H1",
   "prioriteit": "P1",
   "velden": {
    "Gevonden op": "15 september 2026 (regressiecheck)",
    "Waar": "homepage hero-sectie (visually-hidden titel-element)",
    "Waarom": "Eén verborgen `visually-hidden` H1 (\"HÏ Grip\") naast de zichtbare hero-H1 — al genoteerd in de audit van 15 september maar nog niet opgelost.",
    "Wat": "De verborgen H1 wijzigen naar een `<span>` of `<p>`, zodat de hero-titel de enige H1 is."
   }
  },
  {
   "afgevinkt": false,
   "body_md": "**Waarom:** Lege `<meta name=\"description\">` — al genoteerd in de audit van 15 september, nog niet opgelost.\n**Waar:** `/collections/all`\n**Wat:** Beschrijving toevoegen via Shopify admin → SEO-instellingen van de collectiepagina.\n**Gevonden op:** 15 september 2026 (regressiecheck)",
   "id": "backlog#49691d90",
   "kop": "[regressie] `/collections/all` heeft geen meta description",
   "prioriteit": "P1",
   "velden": {
    "Gevonden op": "15 september 2026 (regressiecheck)",
    "Waar": "`/collections/all`",
    "Waarom": "Lege `<meta name=\"description\">` — al genoteerd in de audit van 15 september, nog niet opgelost.",
    "Wat": "Beschrijving toevoegen via Shopify admin → SEO-instellingen van de collectiepagina."
   }
  },
  {
   "afgevinkt": false,
   "body_md": "**Waarom:** 48% van de Nederlandse winkelwagenverlating komt door onverwachte verzendkosten — het grootste enkele conversielek dat er is. Je 1-pack kost €14,99, je drempel ligt op €30. Elke 1-pack-koper loopt in die verrassing.\n**Waar:** `snippets/product-information-content.liquid`, direct onder de prijs\n**Wat:** Voortgangsbalk met \"Nog €15,01 tot gratis verzending\" die meerekent met de gekozen pack-variant. Bij 3-pack en 5-pack verandert hij in \"✓ Gratis verzending\".\n**Effect:** Grootste verwachte conversiewinst van deze hele lijst. Duwt bovendien richting 3-pack.\n**Inspanning:** Half dagdeel",
   "id": "backlog#c5274380",
   "kop": "1. Toon de gratis-verzendingsdrempel op de productpagina",
   "prioriteit": "P1",
   "velden": {
    "Waar": "`snippets/product-information-content.liquid`, direct onder de prijs",
    "Waarom": "48% van de Nederlandse winkelwagenverlating komt door onverwachte verzendkosten — het grootste enkele conversielek dat er is. Je 1-pack kost €14,99, je drempel ligt op €30. Elke 1-pack-koper loopt in die verrassing.",
    "Wat": "Voortgangsbalk met \"Nog €15,01 tot gratis verzending\" die meerekent met de gekozen pack-variant. Bij 3-pack en 5-pack verandert hij in \"✓ Gratis verzending\"."
   }
  },
  {
   "afgevinkt": false,
   "body_md": "**Waarom:** Sterren in de SERP verhogen de doorklikratio zichtbaar. Maar de volgorde was omgekeerd: `snippets/product-schema.liquid` bevatte al een `aggregateRating` met een hardcoded 4,5 uit 7 beoordelingen, terwijl er geen enkele zichtbare review op de productpagina staat. Dat is precies de overtreding die hieronder gewaarschuwd werd. Bij de audit van 15 september is die node **verwijderd**; het bestand rendeerde nog niet op de remote, dus het is nooit live geweest.\n**Waar:** eerst Shopify admin (reviewapp), daarna pas `snippets/product-schema.liquid`\n**Wat:** 1) Koppel een reviewapp die echte klantbeoordelingen verzamelt. 2) Zorg dat de beoordelingen zichtbaar op de productpagina staan. 3) Zet dan pas de `aggregateRating` terug, gevoed uit de metafields van die app — nooit met vaste waarden.\n**Let op:** Zolang stap 1 en 2 niet af zijn, is dit punt geblokkeerd. Niet vooruitlopen.\n**Effect:** Hogere CTR op je belangrijkste zoekterm zonder dat je positie hoeft te stijgen.\n**Inspanning:** Reviewapp een half dagdeel, schema daarna 1 uur",
   "id": "backlog#10ef70ca",
   "kop": "2. Reviewapp koppelen — pas dáárna AggregateRating (herzien 15 sep 2026)",
   "prioriteit": "P1",
   "velden": {
    "Waar": "eerst Shopify admin (reviewapp), daarna pas `snippets/product-schema.liquid`",
    "Waarom": "Sterren in de SERP verhogen de doorklikratio zichtbaar. Maar de volgorde was omgekeerd: `snippets/product-schema.liquid` bevatte al een `aggregateRating` met een hardcoded 4,5 uit 7 beoordelingen, terwijl er geen enkele zichtbare review op de productpagina staat. Dat is precies de overtreding die hieronder gewaarschuwd werd. Bij de audit van 15 september is die node **verwijderd**; het bestand rendeerde nog niet op de remote, dus het is nooit live geweest.",
    "Wat": "1) Koppel een reviewapp die echte klantbeoordelingen verzamelt. 2) Zorg dat de beoordelingen zichtbaar op de productpagina staan. 3) Zet dan pas de `aggregateRating` terug, gevoed uit de metafields van die app — nooit met vaste waarden."
   }
  },
  {
   "afgevinkt": false,
   "body_md": "**Waarom:** Staat al klaar in het projectgeheugen maar is nog niet toegepast. Dit is gratis winst die al maanden wacht.\n**Titel:** `Gripsokken | Anti-Slip Sportsokken voor Elke Sport | HÏ Grip`\n**Beschrijving:** `Voorkom glijden in je schoen met HÏ Grip gripsokken. Voor padel, voetbal, rugby & fitness. ✓ 1500+ sporters ✓ Gratis verzending vanaf €30 ✓ Vandaag verzonden`\n**Inspanning:** 15 minuten",
   "id": "backlog#1b3b78a6",
   "kop": "3. Meta title en description live zetten",
   "prioriteit": "P1",
   "velden": {
    "Waarom": "Staat al klaar in het projectgeheugen maar is nog niet toegepast. Dit is gratis winst die al maanden wacht."
   }
  },
  {
   "afgevinkt": false,
   "body_md": "**Waarom:** Shopify's harde deadline voor niet-Plus winkels om te migreren naar Checkout Extensibility was 26 augustus 2026. Wie toen niet gemigreerd was, kreeg een automatische upgrade waarbij het complete \"Additional Scripts\"-veld werd leeggetrokken — Google Ads-tracking, Meta pixel en GTM-containers stoppen dan zonder zichtbare storefront-fout. Dit hangt direct samen met het al openstaande punt hieronder dat GA4 `keyEvents = 0` toont op elk kanaal: het kan zijn dat niet alleen de key-event-instelling ontbreekt, maar dat het onderliggende trackingscript zelf al drie weken dood is.\n**Waar:** Shopify admin → Instellingen → Checkout (Additional Scripts-veld + eventuele checkout-tracking-apps)\n**Wat:** Controleren of `hi-grip.myshopify.com` op een niet-Plus plan zit, of de migratie voor 26 augustus is afgerond, en of Meta pixel/Google Ads-tracking via een officiële app loopt in plaats van het oude scriptveld. Doe dit vóór je de GA4-key-event-actie hieronder als opgelost afvinkt.\n**Effect:** Kan de verklaring zijn voor drie weken (of meer) ontbrekende conversiedata — blokkeert elke CRO-uitspraak zolang dit niet is uitgesloten.\n**Inspanning:** 30 minuten controle",
   "id": "backlog#3bab0fb9",
   "kop": "11. Controleer of trackingscripts nog vuren na de Checkout Extensibility-deadline (nieuw 17 sep 2026)",
   "prioriteit": "P1",
   "velden": {
    "Waar": "Shopify admin → Instellingen → Checkout (Additional Scripts-veld + eventuele checkout-tracking-apps)",
    "Waarom": "Shopify's harde deadline voor niet-Plus winkels om te migreren naar Checkout Extensibility was 26 augustus 2026. Wie toen niet gemigreerd was, kreeg een automatische upgrade waarbij het complete \"Additional Scripts\"-veld werd leeggetrokken — Google Ads-tracking, Meta pixel en GTM-containers stoppen dan zonder zichtbare storefront-fout. Dit hangt direct samen met het al openstaande punt hieronder dat GA4 `keyEvents = 0` toont op elk kanaal: het kan zijn dat niet alleen de key-event-instelling ontbreekt, maar dat het onderliggende trackingscript zelf al drie weken dood is.",
    "Wat": "Controleren of `hi-grip.myshopify.com` op een niet-Plus plan zit, of de migratie voor 26 augustus is afgerond, en of Meta pixel/Google Ads-tracking via een officiële app loopt in plaats van het oude scriptveld. Doe dit vóór je de GA4-key-event-actie hieronder als opgelost afvinkt."
   }
  },
  {
   "afgevinkt": false,
   "body_md": "**Waarom:** Producten met afwijkende attributen onder één ID riskeren verwerkingsproblemen en afkeuringen. Jij hebt zes varianten onder één product. Op NRF 2026 kondigde Google vier AI-shoppingfuncties aan (Universal Commerce Protocol, Native Checkout, Business Agent, Direct Offers) die allemaal leunen op dezelfde Merchant Center-feed — inclusief Universal Cart, dat producten laat toevoegen vanuit Search, Gemini, YouTube en Gmail. Een foutieve variant-ID kost dus niet meer alleen een Shopping-ad, maar ook zichtbaarheid in Google's AI Mode.\n**Waar:** Shopify Merchant Center-feedinstellingen\n**Wat:** Per variant een uniek, stabiel ID. Controleer of Shopify's feed dat correct doorgeeft.\n**Extra controlepunt (toegevoegd 21 sep 2026):** Google verhoogt de minimale productafbeelding-eis naar 500×500px (universeel, nu al als waarschuwing zichtbaar, hard vanaf 31 januari 2027). Gecontroleerd op higrip.nl: hoofdproductfoto's zijn 1024×1024 en 1536×1024 — ruim boven de eis. Geen actie nodig, alleen meenemen als checkpunt zodra je nieuwe productfoto's upload (bijv. voor de skisokken).\n**Inspanning:** 2 uur\n\n---",
   "id": "backlog#6050edaa",
   "kop": "4. Controleer je variant-ID's tegen de Merchant Center-eis van maart 2026 (herzien 16 sep 2026 — opgewaardeerd naar P1)",
   "prioriteit": "P1",
   "velden": {
    "Waar": "Shopify Merchant Center-feedinstellingen",
    "Waarom": "Producten met afwijkende attributen onder één ID riskeren verwerkingsproblemen en afkeuringen. Jij hebt zes varianten onder één product. Op NRF 2026 kondigde Google vier AI-shoppingfuncties aan (Universal Commerce Protocol, Native Checkout, Business Agent, Direct Offers) die allemaal leunen op dezelfde Merchant Center-feed — inclusief Universal Cart, dat producten laat toevoegen vanuit Search, Gemini, YouTube en Gmail. Een foutieve variant-ID kost dus niet meer alleen een Shopping-ad, maar ook zichtbaarheid in Google's AI Mode.",
    "Wat": "Per variant een uniek, stabiel ID. Controleer of Shopify's feed dat correct doorgeeft."
   }
  },
  {
   "afgevinkt": false,
   "body_md": "**Waarom:** De core update van maart/april beloonde webshops met eigen materiaal met ~22% meer zichtbaarheid. Jouw 1.17 wrijvingscoëfficiënt en 95%-claim zijn precies dat — maar ze staan nu alleen in campagnesecties, niet in een pagina die Google kan vinden en AI-modellen kunnen citeren.\n**Waar:** Nieuwe pagina, bijv. `/pages/onderzoek` of `/pages/waarom-hi-grip-werkt`\n**Wat:** Hoe is er gemeten, waartegen, met welke uitkomst. Grafiek of tabel. Meetmethode benoemen.\n**Effect:** Dubbel — organische autoriteit én de citeerbare bron die AI-assistenten nodig hebben om jou aan te bevelen.\n**Inspanning:** 1 dag",
   "id": "backlog#14c6ceb5",
   "kop": "5. Bouw een bewijspagina rond je eigen meetdata",
   "prioriteit": "P2",
   "velden": {
    "Waar": "Nieuwe pagina, bijv. `/pages/onderzoek` of `/pages/waarom-hi-grip-werkt`",
    "Waarom": "De core update van maart/april beloonde webshops met eigen materiaal met ~22% meer zichtbaarheid. Jouw 1.17 wrijvingscoëfficiënt en 95%-claim zijn precies dat — maar ze staan nu alleen in campagnesecties, niet in een pagina die Google kan vinden en AI-modellen kunnen citeren.",
    "Wat": "Hoe is er gemeten, waartegen, met welke uitkomst. Grafiek of tabel. Meetmethode benoemen."
   }
  },
  {
   "afgevinkt": false,
   "body_md": "**Waarom:** 31% zoekt inmiddels via generatieve AI; LLM-verkeer converteert op 5,53% tegen 3,7% organisch. Vraagvormige long-tails komen in die antwoorden terecht — mits de conclusie bovenaan staat.\n**Welke:** \"Waarom glijdt mijn voet in mijn padelschoen?\" · \"Wat zijn gripsokken?\" · \"Tapedesign alternatief\"\n**Format:** Antwoord in de eerste twee zinnen. Daarna pas onderbouwing. ~~FAQPage JSON-LD eronder~~ — geschrapt: Google toont sinds 7 mei 2026 geen FAQ rich results meer, en de officiële AI Overviews-gids (15 mei 2026) zegt expliciet dat structured data niet vereist is voor AI-citaties. Schema voegt hier niks meer toe; de antwoord-eerst-opbouw zelf is het werk dat telt.\n**Inspanning:** 1 dag voor alle drie",
   "id": "backlog#369a36c0",
   "kop": "6. Schrijf de vraagpagina's antwoord-eerst (herzien 15 sep 2026)",
   "prioriteit": "P2",
   "velden": {
    "Waarom": "31% zoekt inmiddels via generatieve AI; LLM-verkeer converteert op 5,53% tegen 3,7% organisch. Vraagvormige long-tails komen in die antwoorden terecht — mits de conclusie bovenaan staat."
   }
  },
  {
   "afgevinkt": false,
   "body_md": "**Waarom:** Meest consistent bewezen CRO-tactiek van 2026: +10 tot 30% conversie. Geen enkele andere losse ingreep haalt dat betrouwbaarheidsniveau.\n**Wat:** De sok in actie — slide-out op de padelbaan, close-up van de grip. Geen praatvideo.\n**Bonus:** Dezelfde opname is direct TikTok- en Reels-materiaal (zie punt 9).\n**Inspanning:** 1 dag opname + montage",
   "id": "backlog#b81d4226",
   "kop": "7. Productvideo van 30–60 seconden op de productpagina",
   "prioriteit": "P2",
   "velden": {
    "Waarom": "Meest consistent bewezen CRO-tactiek van 2026: +10 tot 30% conversie. Geen enkele andere losse ingreep haalt dat betrouwbaarheidsniveau.",
    "Wat": "De sok in actie — slide-out op de padelbaan, close-up van de grip. Geen praatvideo."
   }
  },
  {
   "afgevinkt": false,
   "body_md": "**Waarom:** Perplexity's Merchant Program is sinds januari 2026 gratis open voor Shopify-winkels: geen listingkosten, geen commissie, automatische productsynchronisatie voor Amerikaanse Shopify-winkels. \"Buy with Pro\" biedt gratis verzending betaald door Perplexity zelf. Perplexity meldt 45 miljoen maandelijkse gebruikers en een vijfvoudige stijging in shopping-intentie-zoekopdrachten. Voorwaarde: bedrijven moeten verkopen én verzenden naar de VS.\n**Waar:** Perplexity Merchant Program (aanmelding via Shopify-app of Perplexity zelf)\n**Wat:** Eerst controleren of higrip.nl momenteel naar de VS verzendt. Zo niet, dit punt geblokkeerd laten staan.\n**Effect:** Gratis extra AI-shoppingkanaal zonder commissie, mits geografisch van toepassing.\n**Inspanning:** Controle 15 minuten; aanmelding zelf een half dagdeel indien van toepassing.",
   "id": "backlog#511e5acb",
   "kop": "8. Perplexity Merchant Program — alleen als je naar de VS verzendt (nieuw 16 sep 2026)",
   "prioriteit": "P2",
   "velden": {
    "Waar": "Perplexity Merchant Program (aanmelding via Shopify-app of Perplexity zelf)",
    "Waarom": "Perplexity's Merchant Program is sinds januari 2026 gratis open voor Shopify-winkels: geen listingkosten, geen commissie, automatische productsynchronisatie voor Amerikaanse Shopify-winkels. \"Buy with Pro\" biedt gratis verzending betaald door Perplexity zelf. Perplexity meldt 45 miljoen maandelijkse gebruikers en een vijfvoudige stijging in shopping-intentie-zoekopdrachten. Voorwaarde: bedrijven moeten verkopen én verzenden naar de VS.",
    "Wat": "Eerst controleren of higrip.nl momenteel naar de VS verzendt. Zo niet, dit punt geblokkeerd laten staan."
   }
  },
  {
   "afgevinkt": false,
   "body_md": "**Waarom:** 2026-onderzoek naar prijsweergave laat zien dat het tonen van de prijs per stuk bij multipacks 5–15% meer conversie oplevert dan alleen de totaalprijs — ankering maakt de korting tastbaar. Jouw pack-structuur (1/3/5) is exact deze bundelvorm, maar de korting per paar staat nergens.\n**Waar:** `snippets/product-information-content.liquid`, bij de variant-selector\n**Wat:** \"€X,XX/paar\" tonen onder elke pack-optie: 1-pack €14,99/paar, 3-pack €13,99/paar, 5-pack €13,00/paar (herberekend per gekozen variant).\n**Effect:** Versterkt samen met de gratis-verzendbalk (punt 1) de duw richting het 3-pack.\n**Inspanning:** 1-2 uur",
   "id": "backlog#d29f2f96",
   "kop": "12. Toon prijs per paar naast de pack-selector (nieuw 17 sep 2026)",
   "prioriteit": "P2",
   "velden": {
    "Waar": "`snippets/product-information-content.liquid`, bij de variant-selector",
    "Waarom": "2026-onderzoek naar prijsweergave laat zien dat het tonen van de prijs per stuk bij multipacks 5–15% meer conversie oplevert dan alleen de totaalprijs — ankering maakt de korting tastbaar. Jouw pack-structuur (1/3/5) is exact deze bundelvorm, maar de korting per paar staat nergens.",
    "Wat": "\"€X,XX/paar\" tonen onder elke pack-optie: 1-pack €14,99/paar, 3-pack €13,99/paar, 5-pack €13,00/paar (herberekend per gekozen variant)."
   }
  },
  {
   "afgevinkt": false,
   "body_md": "**Waarom:** 2026-onderzoek naar Core Web Vitals op Shopify-winkels wijst INP (Interaction to Next Paint) aan als het metric waar winkels het vaakst op struikelen — en de oorzaak is bijna altijd eigen of app-JavaScript, niet het thema zelf. Landelijk haalt inmiddels 48% van mobiele sites alle drie de Core Web Vitals (was 44% in 2024), dus de lat ligt hoger dan voorheen.\n**Waar:** Homepage en productpagina, plus eventuele resterende custom secties met eigen JS (bijv. `assets/hi-wk-promo.js` — geverifieerd op 21 sep 2026: de sectie zelf staat niet meer op de homepage, maar controleer of het script-bestand nog wordt geladen).\n**Wat:** Draai PageSpeed Insights of het Core Web Vitals-rapport in Search Console, filter specifiek op INP (niet alleen LCP/CLS). Bij een slechte INP-score: zoek naar zware event-handlers in custom secties of apps.\n**Effect:** Core Web Vitals wegen mee in mobiele ranking; een slechte INP-score is bovendien vaak voelbaar in de conversie zelf.\n**Inspanning:** 1 uur meten, vervolgacties afhankelijk van bevindingen.",
   "id": "backlog#2f69e0df",
   "kop": "14. Controleer INP op productpagina en homepage — eigen JS is de waarschijnlijke boosdoener (nieuw 21 sep 2026)",
   "prioriteit": "P2",
   "velden": {
    "Waar": "Homepage en productpagina, plus eventuele resterende custom secties met eigen JS (bijv. `assets/hi-wk-promo.js` — geverifieerd op 21 sep 2026: de sectie zelf staat niet meer op de homepage, maar controleer of het script-bestand nog wordt geladen).",
    "Waarom": "2026-onderzoek naar Core Web Vitals op Shopify-winkels wijst INP (Interaction to Next Paint) aan als het metric waar winkels het vaakst op struikelen — en de oorzaak is bijna altijd eigen of app-JavaScript, niet het thema zelf. Landelijk haalt inmiddels 48% van mobiele sites alle drie de Core Web Vitals (was 44% in 2024), dus de lat ligt hoger dan voorheen.",
    "Wat": "Draai PageSpeed Insights of het Core Web Vitals-rapport in Search Console, filter specifiek op INP (niet alleen LCP/CLS). Bij een slechte INP-score: zoek naar zware event-handlers in custom secties of apps."
   }
  },
  {
   "afgevinkt": false,
   "body_md": "**Waarom:** TikTok Shop is sinds 15 juni 2026 officieel live in Nederland en koppelt via een losse app (bijv. SlashCart vanaf $9,99/maand, Optima gratis) rechtstreeks aan Shopify voor productsync, voorraad en orderafhandeling. De hele klantreis — ontdekken, valideren via creators, afrekenen — vindt dan binnen TikTok zelf plaats, met een \"Fast Shipping\"-badge die conversie verder verhoogt. Platformkosten: 2-8% commissie + $0,30 per transactie, plus optioneel 10-20% creator-affiliate-commissie.\n**Waar:** TikTok Seller Center (seller-nl.tiktok.com) + Shopify App Store\n**Wat:** Aanmeldprocedure doorlopen (KVK-gegevens, vier stappen, beoordeling 1-2 werkdagen) en beslissen of dit een los kanaal wordt naast higrip.nl of gecombineerd met het creator-plan (punt 9).\n**Effect:** Extra verkoopkanaal in de grootste groeimarkt (padel) met lagere aankoopdrempel dan doorklikken naar een externe site — vereist wel bewaking van last-click-attributie, die dit verkeer mist.\n**Inspanning:** Verkenning en aanmelding een half dagdeel; app-koppeling en catalogus-setup 1 dag.\n\n---",
   "id": "backlog#aa7afb12",
   "kop": "13. Onderzoek TikTok Shop Nederland — directe verkoop via Shopify-koppeling (nieuw 18 sep 2026)",
   "prioriteit": "P2",
   "velden": {
    "Waar": "TikTok Seller Center (seller-nl.tiktok.com) + Shopify App Store",
    "Waarom": "TikTok Shop is sinds 15 juni 2026 officieel live in Nederland en koppelt via een losse app (bijv. SlashCart vanaf $9,99/maand, Optima gratis) rechtstreeks aan Shopify voor productsync, voorraad en orderafhandeling. De hele klantreis — ontdekken, valideren via creators, afrekenen — vindt dan binnen TikTok zelf plaats, met een \"Fast Shipping\"-badge die conversie verder verhoogt. Platformkosten: 2-8% commissie + $0,30 per transactie, plus optioneel 10-20% creator-affiliate-commissie.",
    "Wat": "Aanmeldprocedure doorlopen (KVK-gegevens, vier stappen, beoordeling 1-2 werkdagen) en beslissen of dit een los kanaal wordt naast higrip.nl of gecombineerd met het creator-plan (punt 9)."
   }
  },
  {
   "afgevinkt": false,
   "body_md": "**Waarom:** TikTok Shop converteert op 4,7% — meer dan het dubbele van Instagram. 34% van de Nederlandse 18–35'ers kocht al via social. En: 85% van AI-merkvermeldingen komt uit derde partijen, dus creator-content voedt tegelijk je AI-zichtbaarheid. TikTok Shop is sinds 15 juni 2026 live in Nederland — dat opent een tweede route naast doorklikken naar higrip.nl: verkopen direct in de app via dezelfde creator-commissiestructuur. Zie ook punt 13 hieronder.\n**Aanpak:** Open plan op 10–12% commissie voor volume en reviews, daarna 18–25% voor de best presterende creators.\n**Wachten op:** Punt 7 eerst (eigen videomateriaal) én punt 13 (bepaalt of dit richting higrip.nl, TikTok Shop, of beide wordt ingericht).",
   "id": "backlog#69ac5806",
   "kop": "9. Padel-creators op prestatiebasis in plaats van vaste vergoeding (herzien 18 sep 2026)",
   "prioriteit": "P3",
   "velden": {
    "Waarom": "TikTok Shop converteert op 4,7% — meer dan het dubbele van Instagram. 34% van de Nederlandse 18–35'ers kocht al via social. En: 85% van AI-merkvermeldingen komt uit derde partijen, dus creator-content voedt tegelijk je AI-zichtbaarheid. TikTok Shop is sinds 15 juni 2026 live in Nederland — dat opent een tweede route naast doorklikken naar higrip.nl: verkopen direct in de app via dezelfde creator-commissiestructuur. Zie ook punt 13 hieronder."
   }
  },
  {
   "afgevinkt": false,
   "body_md": "**Waarom:** Zonder server-side signalen optimaliseert Meta op incomplete data. Relevant zodra je serieus gaat adverteren, niet eerder. Meta verwijderde op 12 januari 2026 de 7- en 28-dagen view-attributievensters uit de Ads Insights API (gerapporteerde conversies daalden 15-40% bij veel adverteerders) en mobiele Safari-pixeltracking is door iOS-privacybeperkingen nagenoeg dood (gaten tot 50-70%). CAPI is daarmee geen latere optimalisatie meer, maar de meetbasis vanaf de eerste advertentie-euro.\n**Wachten op:** Een lopende advertentiebudget-beslissing.\n**Let op:** Zodra die beslissing valt, CAPI vanaf dag 1 inrichten — niet pas toevoegen als de eerste campagnes al lopen.\n\n---",
   "id": "backlog#80f3e9b2",
   "kop": "10. Conversions API (CAPI) instellen (herzien 18 sep 2026)",
   "prioriteit": "P3",
   "velden": {
    "Waarom": "Zonder server-side signalen optimaliseert Meta op incomplete data. Relevant zodra je serieus gaat adverteren, niet eerder. Meta verwijderde op 12 januari 2026 de 7- en 28-dagen view-attributievensters uit de Ads Insights API (gerapporteerde conversies daalden 15-40% bij veel adverteerders) en mobiele Safari-pixeltracking is door iOS-privacybeperkingen nagenoeg dood (gaten tot 50-70%). CAPI is daarmee geen latere optimalisatie meer, maar de meetbasis vanaf de eerste advertentie-euro."
   }
  }
 ],
 "gebouwd": "2026-09-21T06:39:45+00:00",
 "kaart_md": "# Waar staat wat — onderzoek, routines en werkbestanden\n\n> Kaart van alle plekken waar HÏ Grip-onderzoek, routines en werkbestanden leven. De vault is de bron van waarheid; het dashboard toont wat hier staat. Bijgewerkt 2026-09-17.\n\n| Wat | Waar | Bijgewerkt | Hoe kom je erbij |\n|---|---|---|---|\n| **Onderzoeksnotities** (één bestand per onderzoek, vast formaat) | `05_Research\\` in de vault | bij elk onderzoek (routine of los) | Obsidian, of het dashboard (feed + detailpaneel) |\n| **Dashboard** | HÏ Grip Research Dashboard (artifact, gepind in de sidebar) | na elke build/publish | link in [Home](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/Home.md) en `CLAUDE.md` §15; bewerken alleen met interact-rechten |\n| **Register + buildscript** | `05_Research\\_build\\` (`build_register.py`, `register.js`, `PROCEDURE.md`) | bij elke build | `python 05_Research\\_build\\build_register.py` |\n| **Dashboard-bron (HTML)** | `05_Research\\_dashboard\\index.html` | bij elke wijziging aan de pagina | publish volgens `PROCEDURE.md` |\n| **Growth-radar-backlog** (dagelijkse acties P1/P2/P3) | `C:\\Users\\Test\\.claude\\research\\growth-radar\\ACTIEBACKLOG.md` (fase 2: verhuist naar de vault) | dagelijks door de routine | open het bestand, of NU AANDACHT in het dashboard |\n| **Growth-radar-dagrapporten** | `C:\\Users\\Test\\.claude\\research\\growth-radar\\rapporten\\` + `LEDGER.md` (anti-herhaling) | dagelijks ~08:00 | bestanden; sinds 17-09 ook als notitie in `05_Research\\` |\n| **Geplande lokale routines** | `C:\\Users\\Test\\.claude\\scheduled-tasks\\higrip-growth-radar\\SKILL.md` en `higrip-seo-regressiecheck\\SKILL.md` | bij wijziging van de routine | Claude-app (draait alleen als de app openstaat) |\n| **Denzel-weekoverzicht** (cloud-routine, maandag 08:00) | claude.ai routine `trig_01D9XwMiVvuq1FWr7CLoYTmN`; beschrijving in [Denzel Weekoverzicht — Routine](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Denzel%20Weekoverzicht%20%E2%80%94%20Routine.md); output tot 14-09 in `04_Agent_Infrastructuur\\Beheer\\Weekoverzicht\\`, daarna `05_Research\\JJJJ-MM-DD-weekoverzicht.md` | wekelijks | claude.ai → Routines (account info@higrip.nl) |\n| **Skills / commands** (`/shopify-seo`, `/research-nieuw`, `/research-sync`, …) | `C:\\Users\\Test\\.claude\\commands\\*.md` | bij wijziging | typ `/naam` in Claude Code |\n| **Claude-geheugen** (werkafspraken, projectcontext) | `C:\\Users\\Test\\.claude\\memory\\` (`MEMORY.md` = index) | bij nieuwe afspraak | wordt automatisch geladen; `project_higrip.md` = webshopcontext, `project_higrip_seo.md` = audit sep 2026 |\n| **Merkregels voor Claude** | `C:\\Users\\Test\\.claude\\CLAUDE.md` | bij merkbesluit | wordt automatisch geladen in elke sessie |\n| **Plannen** | `C:\\Users\\Test\\.claude\\plans\\` | per project | bestanden; `research-dashboard.md` = dit systeem |\n| **Projectmappen** | `C:\\Users\\Test\\.claude\\projects\\higrip-padel\\`, `higrip-redesign\\`, `higrip-skisokken\\` | per project | bestanden (Liquid/CSS-werk, geen onderzoek) |\n| **Shopify-thema (werkkopie)** | `C:\\Users\\Test\\higrip-theme` (test-thema 194761425223); `higrip-theme-ai2` (thema 200269168967) | bij themawerk | Shopify CLI via Git Bash — nooit naar live 199814873415 zonder opdracht |\n| **Website-analyse in de vault** | `03_Website_Agent\\Analyse\\` ([Stand van Zaken — Werkdossier 2026-09-04](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Analyse/Stand%20van%20Zaken%20%E2%80%94%20Werkdossier%202026-09-04.md), [Analytics & KPI Dashboard](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Analyse/Analytics%20%26%20KPI%20Dashboard.md), [Conversie Optimalisatie Checklist](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Analyse/Conversie%20Optimalisatie%20Checklist.md)) | bij audit | Obsidian |\n| **Doorgevoerde themawijzigingen** | [Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md) (`03_Website_Agent\\Technisch\\`) | bij elke push | Obsidian |\n| **Procesleerpunten agents** | [Feedback & Iteratie Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Feedback%20%26%20Iteratie%20Log.md) (`04_Agent_Infrastructuur\\Beheer\\`) | per iteratie | Obsidian |\n| **Compliance** | [Compliance To-Do Lijst](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Compliance/Compliance%20To-Do%20Lijst.md) (`00_Brand_Core\\Compliance\\`) + notitie `2026-09-07-compliance-todo` | 2026-09-14 | Obsidian / dashboard |\n| **Archief (oud werk)** | `C:\\Users\\Test\\.claude\\archief\\` met `README.md` | 2026-09-17 | bestanden; KNVB-scraper en oude landingsprojecten |\n| **KNVB-clubdata (B2B-outreach)** | `C:\\Users\\Test\\.claude\\archief\\knvb-scraper\\` (`knvb_clubs_v7.xlsx` = deliverable) | 2026-06-23 | zie `memory\\project_knvb_scraper.md` |\n",
 "notities": [
  {
   "acties": [],
   "body_md": "# Growth Radar — SEO Technisch (21 september 2026)\n\n## In het kort\n\nBelangrijkste vondst: de productpagina-URL is stilzwijgend veranderd sinds de laatste check, en dat lost toevallig het oudste openstaande regressiepunt op — maar het betekent ook dat verwijzingen in eigen documentatie nu verouderd zijn. Daarnaast twee kleinere technische signalen over Merchant Center-beeldeisen en Core Web Vitals.\n\n## Bevindingen\n\n### 1. Canonical productpagina-URL gewijzigd, oude-URL-kannibalisatie opgelost\n\nBij de regressiecheck van 15 september 2026 ([2026-09-15-regressiecheck](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-15-regressiecheck.md)) stond genoteerd dat `/products/hi-grip-gripsokken-1` de canonical productpagina was, en dat `/products/performance-grip-socks-2-0-zwart` en `-wit` nog HTTP 200 gaven in plaats van een 301 — interne kannibalisatie van het hoofdkeyword. Diezelfde bevinding stond ook in de audit van 15 september ([2026-09-15-seo-audit](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-15-seo-audit.md)).\n\nBij controle vandaag (21 september) bleek de producthandle zelf te zijn veranderd: het hoofdproduct heet nu `/products/performance-gripsokken` (was `hi-grip-gripsokken-1`), en de twee varianten zijn meeveranderd naar `/products/performance-gripsokken-2-0-zwart` en `-wit`. Geverifieerd met een `fetch`-test (redirect: follow) op alle drie de oude adressen: ze redirecten automatisch naar hun nieuwe tegenhanger, en de canonical-tag op de live pagina verwijst correct naar zichzelf. Dit is standaardgedrag van Shopify bij het hernoemen van een producthandle.\n\n**Aandachtspunt:** eigen documentatie (projectgeheugen, theme-editor previewlinks, testinstructies) verwijst nog overal naar de oude handle `hi-grip-gripsokken-1`. Die links werken dankzij de redirect nog, maar zijn niet meer accuraat — bijgewerkt in `project_higrip.md` onder SEO-inzichten. Een handlewijziging kan Search Console tijdelijk in de war brengen; de dekkingsrapportage is de moeite van het controleren waard over een paar dagen.\n\n### 2. Merchant Center: nieuw beeldminimum van 500×500px — higrip.nl al compliant\n\nGoogle voert een universele minimumeis van 500×500px in voor productafbeeldingen in Merchant Center-feeds (waarschuwingen sinds april 2026, hard afgedwongen vanaf 31 januari 2027), los van en strenger dan de eerdere 100×100px-eis. Gecontroleerd op higrip.nl: hoofdproductfoto's zijn 1024×1024 en 1536×1024px — ruim boven de nieuwe eis. Geen actie nodig nu; wel een blijvend checkpunt bij nieuwe productfoto's (bijv. skisokken).\n\n### 3. INP is in 2026 het meest voorkomende Shopify-knelpunt bij Core Web Vitals\n\nActuele benchmarks laten zien dat INP (Interaction to Next Paint) het metric is waar de meeste Shopify-winkels op vastlopen — meestal veroorzaakt door zware JavaScript in apps of custom secties, niet het thema zelf. Landelijk haalt 48% van mobiele sites nu alle drie de Core Web Vitals (was 44% in 2024). higrip.nl heeft een JS-zware WK-promosectie gebouwd (`hi-wk-promo.js`, count-up-animaties); de sectie zelf staat niet meer op de homepage, maar niet gecontroleerd of het script nog wordt geladen. Logisch moment voor een nulmeting vóór de skisokken-lancering.\n\n## Acties\n\n_Acties uit dit rapport staan al in de growth-radar-backlog (`ACTIEBACKLOG.md`, punten 4 en 14) en komen via de backlog-parser binnen — hier niet gedupliceerd. Het opgeloste regressiepunt is in de backlog afgevinkt._\n\n## Bronnen\n\n- Origineel: `C:\\Users\\Test\\.claude\\research\\growth-radar\\rapporten\\2026-09-21-seo-technisch.md`\n- [Merchant Center announcements change log](https://support.google.com/merchants/announcements/6192467?hl=en)\n- [Merchant Center product data specification update 2026](https://support.google.com/merchants/answer/16989427?hl=en)\n- [Core Web Vitals Benchmarks for Shopify Stores (2026 Data)](https://dev.to/apogeewatcher/core-web-vitals-benchmarks-for-shopify-stores-2026-data-1mel)\n- [Core Web Vitals for Shopify Stores: 2026 Benchmarks and Optimization Playbook](https://www.1digitalagency.com/blog/core-web-vitals-for-shopify-stores-2026-benchmarks-and-optimization-playbook-33932/)\n\n## Aantekeningen",
   "bron": "routine",
   "bronbestand": "C:\\Users\\Test\\.claude\\research\\growth-radar\\rapporten\\2026-09-21-seo-technisch.md",
   "bronbestand_url": null,
   "categorie": "SEO",
   "datum": "2026-09-21",
   "deadline": "",
   "gerelateerd": [
    "2026-09-15-regressiecheck",
    "2026-09-15-seo-audit"
   ],
   "id": "2026-09-21-growth-radar-seo-technisch",
   "prioriteit": "P2",
   "routine": "growth-radar",
   "samenvatting": "Productpagina-handle bleek stilzwijgend veranderd naar performance-gripsokken; de oude URL-kannibalisatie uit de regressiecheck van 15 september is daarmee feitelijk opgelost. Daarnaast: Merchant Center's nieuwe beeldminimum (500×500px) raakt higrip.nl niet, en INP is in 2026 het metric waar Shopify-winkels het vaakst op struikelen.",
   "status": "nieuw",
   "titel": "Growth Radar — SEO Technisch (21 september 2026)",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-21-growth-radar-seo-technisch.md",
   "vervangt": []
  },
  {
   "acties": [],
   "body_md": "# Growth Radar — Social naar website (TikTok Shop NL, Meta-attributie)\n\n## In het kort\n\nTwee bevindingen op de vrijdagfocus \"social naar website\". TikTok Shop is sinds 15 juni 2026 officieel live in Nederland en koppelt rechtstreeks aan Shopify — dat opent een route waarbij de hele klantreis (ontdekken, valideren via creators, afrekenen) binnen TikTok zelf plaatsvindt, in plaats van door te klikken naar higrip.nl. Daarnaast verwijderde Meta op 12 januari 2026 de 7- en 28-dagen view-attributievensters uit de Ads Insights API, wat de noodzaak van server-side tracking (CAPI) vergroot zodra HÏ Grip met Meta-advertenties start.\n\n## Bevindingen\n\n**18 september 2026 · vrijdag**\n\n### TikTok Shop is live in Nederland en koppelt direct met Shopify\n\nTikTok Shop lanceerde op 15 juni 2026 officieel in Nederland, samen met België, Polen en Oostenrijk. Verkopers konden zich vanaf 1 juni aanmelden via seller-nl.tiktok.com; de registratie loopt in vier stappen (bedrijfsgegevens/KVK, hoofdvertegenwoordiger, winkelinformatie inclusief webshop-koppeling, beoordelingsaanvraag) met beoordeling binnen 1-2 werkdagen.\n\nHet kernverschil met de oude situatie: waar social eerder alleen doorverwees naar een externe webshop, vindt de hele klantreis nu binnen TikTok zelf plaats — ontdekken, zoeken, valideren via creators en reacties, en afrekenen zonder de app te verlaten. Producten met snelle verzending krijgen een \"Fast Shipping\"-badge die conversie verder verhoogt. Nederlandse marketingbronnen (Twinkle) noemen dit expliciet een verschuiving \"van funnel naar loop\", met de waarschuwing dat last-click-attributie een groot deel van dat verhaal mist.\n\nDe Shopify-koppeling verloopt via losse apps (SlashCart vanaf $9,99/maand, Optima gratis te installeren met betaalde upgrades) voor productsync, voorraad en orderafhandeling. Platformkosten: 2-8% commissie + $0,30 per transactie (meeste categorieën 5-6%), plus optioneel 10-20% creator-affiliate-commissie — vergelijkbaar met het commissiemodel dat al gepland stond voor Instagram/TikTok-creators in de growth-radar-backlog.\n\n> **Voor higrip.nl:** raakt rechtstreeks backlogpunt 9 (\"Padel-creators op prestatiebasis\"), dat ervan uitging dat creator-content doorklikt naar higrip.nl. Padel is de grootste groeimarkt van HÏ Grip en precies het soort product (laag prijspunt, visueel te demonstreren, herhaalaankoop) dat goed past bij TikTok Shop. Geen vervanging van het eigen-site-werk (bewijspagina, SEO) — wel een aanvullend kanaal dat nu pas geografisch beschikbaar is.\n\n### Meta heeft de 7- en 28-dagen view-attributievensters verwijderd\n\nOp 12 januari 2026 verwijderde Meta permanent de 7-dagen- en 28-dagen-view-attributievensters uit de Ads Insights API. Gerapporteerde conversies daalden daardoor 15 tot 40% bij veel adverteerders. Gecombineerd met bredere iOS-privacybeperkingen — de meeste iOS-gebruikers hebben ATT uitgeschakeld, waardoor pixel-tracking op mobiele Safari nagenoeg dood is — lopen de gaten in 2026 op tot 50-70% van de conversies. Meta's aanbevolen instelling voor e-commerce is nu 7-dagen klik, 1-dag view. Op 15 april 2026 bracht Meta een \"one-click\" CAPI-installatie uit die server-side tracking laagdrempeliger maakt.\n\n> **Voor higrip.nl:** geen actieve Meta-advertenties op dit moment, dus geen blokkerende actie. Verandert wel de volgorde van het bestaande CAPI-punt (10): server-side tracking moet vanaf dag 1 van een toekomstige Meta-campagne staan, niet als latere toevoeging.\n\n## Acties\n\n_Acties uit dit rapport staan in de growth-radar-backlog (`ACTIEBACKLOG.md`, punt 13 nieuw, punten 9 en 10 bijgewerkt) en komen via het dashboard onder NU AANDACHT binnen — hier niet gedupliceerd._\n\n## Bronnen\n\n- [TikTok Shop in Nederland maakt de verschuiving zichtbaar: van funnel naar loop — Twinkle](https://twinklemagazine.nl/2026/06/tiktok-shop-in-nederland-maakt-de-verschuiving-zichtbaar-van-funnel-naar-lo/index.xml)\n- [TikTok introduceert TikTok Shop in Nederland — TikTok Newsroom](https://newsroom.tiktok.com/tiktok-introduceert-tiktok-shop-in-nederland?lang=nl-NL)\n- [Een TikTok Shop opzetten via Seller Center — TikTok for Business](https://ads.tiktok.com/resources/help/article/set-up-tiktok-shop-using-tiktok-seller-center?lang=nl-NL)\n- [TikTok Shop Fees Explained: Complete 2026 Cost Breakdown — Slayva](https://slayva.com/tiktok-shop-fees/)\n- [Shopify for TikTok Shop in 2026: Setup & Selling Guide — Mastroke](https://blog.mastroke.com/social-media-marketing/shopify-for-tiktok-shop-in-2026-how-to-connect-them-and-what-sells/)\n- [Meta Attribution Window Changes 2026: Fix Your Tracking — Conversios](https://www.conversios.io/blog/meta-attribution-window-changes-2026-fix-your-tracking/)\n- [Meta Ads Attribution in 2026: What Changed, Why It Matters, and How to Fix It — DOJO AI](https://www.dojoai.com/blog/meta-ads-attribution-2026-changes-fixes)\n- Origineel: `C:\\Users\\Test\\.claude\\research\\growth-radar\\rapporten\\2026-09-18-social.md`\n\n## Aantekeningen",
   "bron": "routine",
   "bronbestand": "C:\\Users\\Test\\.claude\\research\\growth-radar\\rapporten\\2026-09-18-social.md",
   "bronbestand_url": null,
   "categorie": "Social",
   "datum": "2026-09-18",
   "deadline": "",
   "gerelateerd": [
    "2026-09-15-growth-radar-basislijn"
   ],
   "id": "2026-09-18-growth-radar-social",
   "prioriteit": "P2",
   "routine": "growth-radar",
   "samenvatting": "TikTok Shop is sinds 15 juni 2026 live in Nederland en koppelt direct met Shopify, wat de social-funnel verandert van doorklikken naar in-app afrekenen — relevant voor het bestaande creator-plan. Daarnaast verwijderde Meta in januari 2026 twee attributievensters uit de Ads Insights API, waardoor CAPI vanaf dag 1 van elke toekomstige campagne nodig is.",
   "status": "nieuw",
   "titel": "Growth Radar — Social naar website (TikTok Shop NL, Meta-attributie)",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-18-growth-radar-social.md",
   "vervangt": []
  },
  {
   "acties": [],
   "body_md": "# Growth Radar — CRO (Checkout Extensibility-deadline, prijs per paar)\n\n## In het kort\n\nTwee bevindingen, beide direct gekoppeld aan bestaande P1-punten (GA4 purchase-event, gratis-verzendbalk richting 3-pack). Nieuwe backlogpunten 11 (P1) en 12 (P2) staan in de growth-radar-backlog.\n\n## Bevindingen\n\n**17 september 2026 · donderdag**\n\n### In het kort\nShopify's harde deadline om niet-Plus winkels over te zetten op Checkout Extensibility lag op 26 augustus — wie toen niet gemigreerd was, verloor stilzwijgend alle trackingscripts uit het oude checkoutsysteem. Dat raakt mogelijk direct de al bekende GA4-storing. Daarnaast: nieuw 2026-onderzoek bevestigt dat een per-stuk-prijs bij multipacks 5–15% conversiewinst oplevert, en die staat nergens op je productpagina.\n\n---\n\n### Checkout Extensibility-deadline is verstreken — controleer of je trackingscripts nog vuren\n\nShopify's migratiedeadline voor niet-Plus winkels (Basic, Shopify, Advanced, Pause and Build) naar Checkout Extensibility was 26 augustus 2026. Wie toen nog op het oude checkoutsysteem draaide, kreeg een automatische upgrade waarbij Shopify het complete \"Additional Scripts\"-veld leegtrok: Google Ads-conversietracking, Meta pixel, GTM-containers, affiliate-scripts en post-purchase apps stopten allemaal met werken.\n\nHet venijnige zit in de stilte. De checkout zelf blijft gewoon bestellingen verwerken — er verschijnt geen zichtbare fout in de winkelwagen of bij het afrekenen. Alleen de trackinglaag eronder valt weg, en dat merk je pas als je de cijfers gaat controleren.\n\n> **Voor higrip.nl:** Dit sluit direct aan op een al openstaand P1-punt: de GA4 key event `purchase` staat op nul op elk kanaal, deze en vorige week. Als `hi-grip.myshopify.com` op een niet-Plus plan zit en de migratie naar Checkout Extensibility nog niet (volledig) was afgerond vóór 26 augustus, is dit een directe, aanvullende verklaring — niet alleen \"key event niet aangevinkt\" maar mogelijk ook \"het script dat de data zou moeten leveren is drie weken geleden stilgezet.\"\n\n**Actie:** Controleer in Shopify admin → Instellingen → Checkout of er nog een \"Additional Scripts\"-sectie bestaat en of daar tracking in stond. Controleer parallel of Meta pixel en Google Ads-conversietracking via een officiële checkout-app/-extensie lopen in plaats van via het oude scriptveld. Voer dit uit vóórdat je de bestaande GA4-actie (key event aanvinken) als opgelost beschouwt — beide moeten samen kloppen.\n\n---\n\n### Per-stuk-prijs op multipacks: 5–15% conversiewinst die je nu laat liggen\n\n2026-onderzoek naar prijsweergave bevestigt een bekend ankerprincipe met concrete cijfers: bij bundels en multipacks levert het tonen van de prijs per stuk (naast de totaalprijs) 5 tot 15% meer conversie op dan alleen de totaalprijs. De verklaring is ankering: \"€6 per stuk (normaal €8,50)\" voelt tastbaarder en rationeler dan \"€36 voor het pakket\", ook al is de onderliggende informatie identiek.\n\nDit is geen nieuw fenomeen, maar de 2026-dataset maakt het een harde, kwantificeerbare business case in plaats van een vage UX-tip.\n\n> **Voor higrip.nl:** Je 1-pack/3-pack/5-pack-structuur is exact de bundelvorm waar dit op slaat. Uitgerekend: 1-pack = €14,99/paar, 3-pack = €13,99/paar (afgerond), 5-pack = €13,00/paar. Nergens in `snippets/product-information-content.liquid` staat dit per-paar-bedrag naast de variant-selector — de korting op grotere packs is dus onzichtbaar tenzij een klant het zelf uitrekent. Dit versterkt bovendien de al bestaande P1-actie over de gratis-verzendbalk: beide duwen in dezelfde richting, namelijk richting het 3-pack.\n\n**Actie:** Toon \"€X,XX/paar\" onder elke pack-optie in de variant-selector, herberekend op basis van de gekozen combinatie.\n\n---\n\n### Bronnen\n- [Shopify Checkout Extensibility for Non-Plus Stores: What Breaks on Aug 26](https://biscuitsbundles.com/blogs/learn/shopify-checkout-extensibility-for-non-plus-stores-what-breaks-on-august-26-2026-and-how-to-migrate-in-time)\n- [Shopify Checkout Extensibility August 26 Deadline: Important for Non-Plus Merchants](https://www.codilar.com/blog/shopify-checkout-extensibility-august-26-deadline5/)\n- [Shopify Redesigned Checkout for Higher Conversion](https://www.adbeacon.com/shopify-spring-2026-checkout-redesign-baseline/)\n- [E-Commerce Cart & Checkout Usability Research – Baymard](https://baymard.com/research/checkout-usability)\n- [The Anchoring Effect in Pricing](https://marketingagency.sg/anchoring-effect-pricing/)\n- [Price Anchoring in 2026: Definition, Strategy, Examples](https://www.impactanalytics.ai/blog/price-anchoring)\n- [Checkout Conversion Rate Benchmarks for Ecommerce 2026](https://mida-app.io/blog/checkout-conversion-rate-benchmarks-for-ecommerce/)\n\n## Acties\n\n_Acties uit dit rapport staan in de growth-radar-backlog (`ACTIEBACKLOG.md`) en komen via het dashboard onder NU AANDACHT binnen — hier niet gedupliceerd._\n\n## Bronnen\n\n- Origineel: `C:\\Users\\Test\\.claude\\research\\growth-radar\\rapporten\\2026-09-17-cro.md`\n\n## Aantekeningen\n\n- **Test · 2026-09-17 11:06** — Round-trip-test: deze aantekening hoort na /research-sync onder ## Aantekeningen in de vault te staan.",
   "bron": "routine",
   "bronbestand": "C:\\Users\\Test\\.claude\\research\\growth-radar\\rapporten\\2026-09-17-cro.md",
   "bronbestand_url": null,
   "categorie": "CRO",
   "datum": "2026-09-17",
   "deadline": "",
   "gerelateerd": [
    "2026-09-14-weekoverzicht",
    "2026-09-03-analytics-kpi-meetgat",
    "2026-09-15-regressiecheck"
   ],
   "id": "2026-09-17-growth-radar-cro",
   "prioriteit": "P1",
   "routine": "growth-radar",
   "samenvatting": "Shopify's deadline voor Checkout Extensibility (26 augustus 2026) heeft bij niet-Plus winkels stilzwijgend alle trackingscripts uit het oude checkoutveld gewist — mogelijk een tweede verklaring voor de GA4-storing naast het ontbrekende key event. Daarnaast: een prijs per paar bij multipacks levert 5–15% conversiewinst op en ontbreekt op de productpagina.",
   "status": "bekeken",
   "titel": "Growth Radar — CRO (Checkout Extensibility-deadline, prijs per paar)",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-17-growth-radar-cro.md",
   "vervangt": []
  },
  {
   "acties": [
    {
     "afgevinkt": false,
     "id": "2026-09-16-seo-onderzoek-cloud-routine-website#3e155aa4",
     "prioriteit": "P3",
     "tekst": "Verouderde URL's met numeriek ID en zonder `/pages/`-prefix in de Google-index controleren (HTTP-status) en 301'en naar de Shopify-equivalenten"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-16-seo-onderzoek-cloud-routine-website#5f5bdcde",
     "prioriteit": "P3",
     "tekst": "hreflang en canonicals tussen higrip.nl en /en controleren — of besluit 4 uit het werkdossier (Engels uitzetten) nemen"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-16-seo-onderzoek-cloud-routine-website#875468b1",
     "prioriteit": "P3",
     "tekst": "Maattabel-widget met schoenmaat-omrekening bij de variant-selector overwegen"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-16-seo-onderzoek-cloud-routine-website#999a1dd0",
     "prioriteit": "P3",
     "tekst": "Cloud-routine \"website\" (`trig_01BKt9WCeR9H92FDcS9HtPvV`) uitzetten of voorzien van repo + egress-toegang tot higrip.nl — draait nu dagelijks zonder de site te kunnen bereiken"
    }
   ],
   "body_md": "# SEO-onderzoek cloud-routine \"website\" — publieke data, 16 september 2026\n\n## In het kort\n\nRapport van de claude.ai-routine \"website\" (`trig_01BKt9WCeR9H92FDcS9HtPvV`, dagelijks 23:30 UTC, run `cse_016RYYiEW6zpxYL4gdBoz47n`). De routine had geen Shopify-toegang en geen netwerktoegang tot higrip.nl, dus alles is afgeleid van wat Google en Trustpilot tonen. Het rapport bevat twee content-drafts (padel-landingspagina, blog \"gripsokken vs. sportsokken\") en een actieplan. Geregistreerd op 17 september via `/research-nieuw` als eerste echte run van dat command.\n\n**Tegenstrijdig met geverifieerde vault-feiten — niet overnemen:**\n\n| Claim in het rapport | Wat de vault (geverifieerd) zegt |\n|---|---|\n| Trustpilot 4,5★ over 15 reviews | 4,6 uit 5 op 17 reviews (bij de bron opgehaald 3 sep, [Stand van Zaken — Werkdossier 2026-09-04](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Analyse/Stand%20van%20Zaken%20%E2%80%94%20Werkdossier%202026-09-04.md)) |\n| \"Geen sport-specifieke landingspagina's\" | `/pages/gripsokken-padel` bestaat en is goed (SEO-audit 15 sep); voetbalpagina staat lokaal klaar |\n| Alleen witte sok, twee maten 34-39 / 40-46 | Gripsok 1.0 (34-39/40-46) én 2.0 wit/zwart in 35-38/39-42/43-47 ([Performance Grip Socks 2.0](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Product/Performance%20Grip%20Socks%202.0.md)) |\n| \"Structured data ontbreekt vermoedelijk; voeg Product-schema met aggregateRating toe\" | Organization/WebSite/FAQPage zijn gebouwd; `aggregateRating` is juist **verwijderd** omdat er geen zichtbare reviews zijn — eerst reviewapp, dan schema (backlog punt 2) |\n| FAQPage-schema als groeihefboom | Google toont sinds 7 mei 2026 geen FAQ rich results meer ([2026-09-15-growth-radar-seo-content](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-15-growth-radar-seo-content.md)) |\n\nConcurrent \"Trusox\" komt in de vault niet voor (wel FitSockr, Tapedesign, Optigrip, Proskary) — onbevestigd.\n\n## Bevindingen\n\n### Wat wél nieuw is\n\n- **Verouderde URL-patronen in de Google-index.** Naast nette Shopify-slugs staan er pagina's zonder `/pages/`-prefix (`/algemene-voorwaarden`, `/winkel`) en URL's met een numeriek ID vóór de slug (`/2697390_hi-grip-zaalvoetbalsokken`, `/blogs/2630309_gripsokken-tijdens-pilates-yoga…`) — vermoedelijk restanten van het platform vóór Shopify. Ook minstens twee blog-handles (`/blogs/hi-grip/…` en `/blogs/trends/…`). Versnippert linkwaarde; controleren welke nog 200 geven en 301'en naar de Shopify-equivalenten.\n- **hreflang NL/EN.** `higrip.nl` en `higrip.nl/en` bestaan naast elkaar; het rapport vraagt om een check of `hreflang` en canonicals goed staan. Het werkdossier adviseert de Engelse versie uit te zetten — dat besluit staat nog open (beslispunt 4).\n- **Maatkeuze als afhaakreden.** Voorstel: maattabel-widget met schoenmaat-omrekening direct bij de variant-selector, niet alleen op de FAQ-pagina.\n- **Contentclusters die ontbreken volgens de index:** vergelijking (gripsokken vs. sportsokken, vs. concurrenten), onderhoud/gebruik (wassen, hoe vaak dragen), maatgids als eigen pagina, kids/jeugd. Sluit aan bij de hub-and-spoke-strategie uit het werkdossier.\n\n### Wat het rapport bevestigt (al in de vault)\n\n- Reviews opschalen via post-purchase-flow en zichtbaar op de productpagina (backlog punt 2).\n- Sport-specifieke landingspagina's (SEO-audit: 8 van 10 nog te vullen via `hi-sport-landing`).\n- Core Web Vitals / app-bloat auditen (werkdossier: 241 requests, 70 script-tags).\n- AI-zoekmachines: vraag-antwoordblokken, consistente feiten op één canonieke pagina, merkvermeldingen bij derden (basislijn §2, ai-search).\n- Bundel/herhaalaankoop en interne links blog ↔ product.\n\n### Content-drafts in het rapport\n\nTwee kant-en-klare drafts: een padel-landingspagina (SEO-titel \"Gripsokken voor Padel | Maximale Grip & Stabiliteit — HÏ Grip\") en een blogartikel \"Gripsokken vs. gewone sportsokken\" (~650 woorden, vraag/antwoord-opbouw). Beide gebruiken de verouderde productfeiten (2 maten, wit) en missen de merkstem (geen 1,17 / 95%, geen \"jij/je\"-toon consequent) — vóór gebruik herschrijven volgens [Brand Voice & Tone of Voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md) en de vaste cijfers uit het werkdossier.\n\n### Actieplan van het rapport\n\nWeek 1 redirects + hreflang · week 1-2 structured data · week 2 drafts publiceren en meten in Search Console · week 2-3 reviewflow · week 3-4 maattabel-widget + bundel · doorlopend CWV-audit en 1 contentcluster per maand.\n\n## Acties\n\n- [ ] P3 · Verouderde URL's met numeriek ID en zonder `/pages/`-prefix in de Google-index controleren (HTTP-status) en 301'en naar de Shopify-equivalenten\n- [ ] P3 · hreflang en canonicals tussen higrip.nl en /en controleren — of besluit 4 uit het werkdossier (Engels uitzetten) nemen\n- [ ] P3 · Maattabel-widget met schoenmaat-omrekening bij de variant-selector overwegen\n- [ ] P3 · Cloud-routine \"website\" (`trig_01BKt9WCeR9H92FDcS9HtPvV`) uitzetten of voorzien van repo + egress-toegang tot higrip.nl — draait nu dagelijks zonder de site te kunnen bereiken\n\n## Bronnen\n\n- Rapport-artifact: https://claude.ai/artifact/H5KiVWmh665yX9yTTKUseH (16 sep 2026)\n- Routine-run: `cse_016RYYiEW6zpxYL4gdBoz47n` (claude.ai/code/routines → \"website\")\n- Shopify — Latest SEO Trends in 2026: https://www.shopify.com/blog/seo-trends\n- Ice Cube Digital — Shopify SEO Checklist 2026: https://www.icecubedigital.com/blog/shopify-seo-checklist-2026/\n- SpearPoint — SEO for Shopify 2026: https://www.thespearpoint.com/blog/seo-for-shopify-complete-guide\n\n## Aantekeningen",
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
    "2026-09-16-growth-radar-ai-search"
   ],
   "id": "2026-09-16-seo-onderzoek-cloud-routine-website",
   "prioriteit": "P3",
   "routine": "",
   "samenvatting": "De dagelijkse cloud-routine \"website\" maakte op 16 september een SEO/CRO-rapport op basis van alleen publieke data (Google-index, Trustpilot) — higrip.nl zelf was geblokkeerd. Nieuw en bruikbaar: verouderde numerieke URL's in de index, een hreflang-check NL/EN en een maattabel-widget; vijf claims spreken geverifieerde vault-feiten tegen en zijn hier gemarkeerd.",
   "status": "bekeken",
   "titel": "SEO-onderzoek cloud-routine \"website\" — publieke data, 16 september 2026",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-16-seo-onderzoek-cloud-routine-website.md",
   "vervangt": []
  },
  {
   "acties": [],
   "body_md": "# Growth Radar — AI-search (checkout in AI is dood, feed is de ingang)\n\n## In het kort\n\nVier bevindingen die vooral bestaande prioriteiten bevestigen: bewijspagina, gratis-verzendingsdrempel, productvideo en variant-ID's (verplaatst naar P1). Eén open vraag: verzendt higrip.nl naar de VS?\n\n## Bevindingen\n\n**16 september 2026 · woensdag**\n\n### In het kort\nHet grootste nieuws is dat ChatGPT's native checkout dood is: OpenAI stopte Instant Checkout in maart 2026 nadat het bij Walmart drie keer slechter converteerde dan een gewone doorklik. Het model dat wint is \"ontdekken in AI, kopen op je eigen site\" — dat bevestigt de bestaande backlogprioriteiten in plaats van nieuwe te creëren. Daarnaast is er een concreet gratis kanaal (Perplexity Merchant Program) dat mogelijk niet inzetbaar is zolang HÏ Grip niet naar de VS verzendt.\n\n---\n\n### ChatGPT's native checkout is gestopt — \"ontdekken in AI, kopen op je eigen site\" wint\nOpenAI lanceerde Instant Checkout op 29 september 2025, eerst met Etsy en daarna met Shopify-merken als Glossier, Vuori en Spanx. In maart 2026 werd de functie alweer stopgezet. Walmart mat dat checkout binnen ChatGPT ongeveer drie keer slechter converteerde dan doorklikken naar de eigen site — ook al leverde ChatGPT wel ongeveer twee keer zoveel nieuwe klanten op als reguliere zoekopdrachten.\n\nHet model dat nu standaard is: AI-assistenten (ChatGPT, Google AI Mode, Perplexity) doen de productontdekking en aanbeveling, maar de daadwerkelijke aankoop gebeurt op de eigen webshop van de retailer. De onderliggende protocollen (ACP van Stripe/OpenAI, UCP van Shopify/Google) faciliteren vooral productdata-uitwisseling voor die aanbevelingen, niet een volledige in-chat kassa.\n\n> **Voor higrip.nl:** Dit betekent dat je geen tijd hoeft te steken in een native AI-checkout-integratie. De winst zit op twee plekken die al in je backlog staan: geciteerd worden in het AI-gesprek (backlogpunt 4, bewijspagina) én een productpagina die converteert zodra iemand doorklikt vanuit ChatGPT of Gemini (backlogpunt 1, gratis-verzendingsdrempel, en punt 6, productvideo). Deze vondst verhoogt het belang van die punten, ze zijn niet langer \"aardig om te hebben\" maar de kern van je AI-zichtbaarheidsstrategie.\n\n**Actie:** Alleen volgen — geen nieuwe actie, wel prioriteitsbevestiging voor bestaande punten 1, 4 en 6.\n\n---\n\n### Schema-markup verhoogt AI-citaties zelf niet — specifieke cijfers en attribuutrijke data wel\nAhrefs volgde 1.885 pagina's die tussen augustus 2025 en maart 2026 JSON-LD-schema toevoegden en vond geen betekenisvolle stijging in citaties door Google AI Overviews, AI Mode of ChatGPT. Belangrijke kanttekening: de onderzochte pagina's hadden vooraf al 100+ AI Overview-citaties, dus de conclusie geldt vooral voor pagina's die al zichtbaar zijn — niet per se voor een pagina die nog moet doorbreken.\n\nWel bleek dat attribuutrijke schema — met ingevulde prijs, rating, specificaties — de citatiekans voor domeinen met lager gezag bijna verdubbelt, terwijl generieke schema niets doet. De sterkste hefboom blijft je organische positie zelf, gevolgd door het toevoegen van citeerbare bronnen, concrete cijfers en naam-en-toenaam-citaten in de tekst.\n\n> **Voor higrip.nl:** Dit onderbouwt met data waarom de volgorde in je backlog klopt: eerst echte reviews zichtbaar maken en dan pas `aggregateRating` vullen (punt 2), en een bewijspagina bouwen rond je eigen meetdata (punt 4). Niet het schema zelf overtuigt AI-modellen — de concrete cijfers erachter (1.17 wrijvingscoëfficiënt, 95% meer grip) doen dat, mits ze leesbaar in de tekst staan én, zodra je reviews live zijn, volledig ingevuld zijn in het schema.\n\n**Actie:** Geen nieuwe actie — bevestigt bestaande prioriteit van punt 2 en 4. Zorg dat het `aggregateRating`-schema straks volledig ingevuld is (rating, aantal, geen lege velden) zodra de reviewapp staat.\n\n---\n\n### Google Merchant Center wordt ook de ingang voor AI Mode-shopping, niet alleen voor Shopping-ads\nOp NRF 2026 kondigde Google vier AI-shoppingfuncties aan die allemaal op Merchant Center-feeddata leunen: Universal Commerce Protocol, Native Checkout, Business Agent en Direct Offers. Universal Cart laat gebruikers producten toevoegen vanuit Search, Gemini, YouTube of Gmail — weer gevoed door dezelfde productfeed. Eerste deelnemers zijn onder meer geselecteerde Shopify-winkels.\n\n> **Voor higrip.nl:** Backlogpunt 7 (variant-ID's controleren tegen de Merchant Center-eis van maart 2026) stond er al vanuit feed-compliance, maar diezelfde feed is nu ook de poort naar zichtbaarheid in Google's AI Mode-shoppinglaag. Eén foutieve of ontbrekende variant-ID kost je dus niet alleen een Shopping-ad, maar ook een aanbeveling in AI Mode.\n\n**Actie:** Punt 7 verplaatst van P2 naar P1 — zie bijgewerkte backlog.\n\n---\n\n### Perplexity's Merchant Program is gratis voor Shopify — mits je naar de VS verzendt\nPerplexity's Merchant Program kost niets: geen listingkosten, geen commissie. Shopify-winkels in de VS krijgen automatische productsynchronisatie zonder aparte aanmelding. \"Buy with Pro\" is een one-click checkout voor Perplexity Pro-gebruikers met gratis verzending — betaald door Perplexity, niet door de verkoper. Perplexity meldt 45 miljoen maandelijkse gebruikers en een vijfvoudige stijging in shopping-intentie-zoekopdrachten sinds de functie verder open ging dan alleen Pro-gebruikers.\n\nDe voorwaarde is scherp: bedrijven moeten verkopen én verzenden naar de VS om in aanmerking te komen.\n\n> **Voor higrip.nl:** Onbekend of higrip.nl momenteel naar de VS verzendt — dat is nu de enige vraag die bepaalt of dit kanaal open staat. Zo niet, dan is dit een kanaal om te volgen voor het moment dat internationale verzending een overweging wordt, niet iets om nu op te bouwen.\n\n**Actie:** Controleer of higrip.nl naar de VS verzendt. Zo ja: gratis aanmelden bij het Perplexity Merchant Program. Zo nee: alleen volgen — nieuw backlogpunt toegevoegd onder voorbehoud.\n\n---\n\n### Bronnen\n- [Why AI Checkout Stalled: Discover in AI, Buy on Site](https://www.digitalapplied.com/blog/ai-agentic-commerce-discover-in-ai-buy-on-site-2026)\n- [Stripe powers Instant Checkout in ChatGPT and releases Agentic Commerce Protocol](https://stripe.com/newsroom/news/stripe-openai-instant-checkout)\n- [We Tracked 1,885 Pages Adding Schema. AI Citations Barely Moved. — Ahrefs](https://ahrefs.com/blog/schema-ai-citations/)\n- [Does Schema Markup Predict AI Citation? — SSRN](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6284518)\n- [Google's AI Shopping Announcements: What They Mean — Brainlabs](https://www.brainlabsdigital.com/google-2026-ai-shopping-announcements-explained/)\n- [Google unveils shopping ads in AI Mode — ppc.land](https://ppc.land/google-unveils-shopping-ads-in-ai-mode-doubling-down-on-conversational-commerce/)\n- [Perplexity Shopping: How to Optimize Your Store for AI — Shopify](https://www.shopify.com/blog/perplexity-shopping)\n- [Perplexity Merchant Program: What Most Sellers Miss (2026)](https://alhena.ai/blog/perplexity-shopping-merchants-setup-guide/)\n\n## Acties\n\n_Acties uit dit rapport staan in de growth-radar-backlog (`ACTIEBACKLOG.md`) en komen via het dashboard onder NU AANDACHT binnen — hier niet gedupliceerd._\n\n## Bronnen\n\n- Origineel: `C:\\Users\\Test\\.claude\\research\\growth-radar\\rapporten\\2026-09-16-ai-search.md`\n\n## Aantekeningen",
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
    "2026-09-16-seo-onderzoek-cloud-routine-website"
   ],
   "id": "2026-09-16-growth-radar-ai-search",
   "prioriteit": "P2",
   "routine": "growth-radar",
   "samenvatting": "ChatGPT's Instant Checkout is gestopt (3× slechtere conversie dan doorklik bij Walmart): \"ontdekken in AI, kopen op eigen site\" wint. Schema alleen verhoogt AI-citaties niet, concrete cijfers in de tekst wel; de Merchant Center-feed wordt ook de ingang voor Google AI Mode; Perplexity Merchant Program alleen bij VS-verzending.",
   "status": "bekeken",
   "titel": "Growth Radar — AI-search (checkout in AI is dood, feed is de ingang)",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-16-growth-radar-ai-search.md",
   "vervangt": []
  },
  {
   "acties": [
    {
     "afgevinkt": false,
     "id": "2026-09-15-seo-audit#2fb3a15f",
     "prioriteit": "P2",
     "tekst": "Resterende 8 sportlandingspagina's invullen via `sections/hi-sport-landing.liquid` (na push van het thema)"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-15-seo-audit#864864f2",
     "prioriteit": "P2",
     "tekst": "\"u/uw\" in FAQ-antwoorden, collectiebeschrijving en blogartikelen omzetten naar \"je/jij\""
    },
    {
     "afgevinkt": false,
     "id": "2026-09-15-seo-audit#070e0039",
     "prioriteit": "P2",
     "tekst": "Collectiebeschrijving `/collections/gripsokken` verbreden — beperkt zich nu tot \"witte\" gripsokken"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-15-seo-audit#7dda01c0",
     "prioriteit": "P3",
     "tekst": "Alt-teksten op de 12 lege homepage-afbeeldingen en `twitter:image` toevoegen"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-15-seo-audit#cd09f1bd",
     "prioriteit": "P3",
     "tekst": "Maandelijkse Search Console-review + AI-citatietest (5 vaste vragen aan ChatGPT en Perplexity) inplannen"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-15-seo-audit#581e7e2f",
     "prioriteit": "P3",
     "tekst": "Blogartikel \"waarom glijdt je voet in je schoen\" uit `C:\\Users\\Test\\higrip-seo\\content\\` publiceren"
    }
   ],
   "body_md": "# SEO- en conversieaudit higrip.nl — september 2026\n\n## In het kort\n\nNegen bevindingen, ernst aflopend, plus wat er al goed staat (Shopify UCP aan, snelle responstijden, wetenschappelijke onderbouwing). Bij 68 organische sessies per 90 dagen is A/B-testen onuitvoerbaar — meet voorlopers (indexatie, GSC-vertoningen, schema-validiteit, AI-citaties). De vijf verifieerbare afwijkingen uit deze audit staan als `[regressie]`-punten in de growth-radar-backlog; hieronder alleen de acties die dáár niet staan.\n\n## Bevindingen\n\nUitgevoerd op testthema `194761425223` (hi-grip.myshopify.com) en de live site www.higrip.nl.\nRapport: https://claude.ai/artifact/KXF6YLWedzMKs3A4Nv6hkq\n\n### Gemeten uitgangspunt (GA4 property 476032345, 15 jun – 14 sep 2026)\n\n213 sessies totaal: Direct 102, Organic Search 68, Organic Social 22, Referral 9,\nCross-network 4, **AI Assistant 2** (nieuw GA4-kanaal, houd de trend bij).\nMobiel 111 sessies / 43% bounce · desktop 101 / 75% bounce.\n\n**Conversiemeting staat uit:** keyEvents = 0 en purchaseRevenue = €0 over 90 dagen, terwijl er\nwél checkout-sessies in het landingspaginarapport staan. `purchase` is niet als key event\ngemarkeerd in GA4. Dit blokkeert elke CRO-uitspraak en is actie #1.\n\n**Statistische realiteit:** bij 68 organische sessies per 90 dagen is een klassieke A/B-test op\nconversieratio onuitvoerbaar (grofweg 4.000–5.000 sessies per variant nodig voor 2% → 3% bij 95%).\nMeet daarom voorlopers — indexatie, GSC-vertoningen en positie, schema-validiteit, AI-citaties —\nniet conversieratio.\n\n### Bevindingen, ernst aflopend\n\n1. `snippets/product-schema.liquid` bevatte een nep-`aggregateRating` (4.5 uit 7 reviews, hardcoded)\n   zonder zichtbare reviews, plus een dubbele Product-node náást Shopify's eigen ProductGroup.\n   Rendert niet op remote, dus nooit live geweest — maar zou dat bij de eerstvolgende push wel worden.\n2. Homepage-title is enkel `HÏ Grip`; hoofdkeyword ontbreekt. Plus 2× H1 (verborgen `visually-hidden` + hero).\n3. `/products/performance-grip-socks-2-0-zwart` en `-wit` geven nog HTTP 200 — niet op concept gezet\n   zoals eerder genoteerd. Samen 13 sessies per 90 dagen, méér dan de hoofdproductpagina (8). Kannibalisatie.\n4. 9 van 10 sportpagina's ontbreken. Alleen `/pages/gripsokken-padel` bestaat en is goed\n   (sterke title/desc, 14 H2's, eigen breadcrumb-schema). `/collections/padel` geeft 404.\n5. Buiten de productpagina alleen een minimale Shopify-`Organization` die naar `hi-grip.myshopify.com`\n   wees. Geen WebSite, BreadcrumbList of ItemList.\n6. FAQ-JSON-LD gebruikte 6 vragen die nergens op de productpagina staan; de pagina toont 8 andere in een accordion.\n7. `/collections/all` heeft geen meta description. `/collections/gripsokken` beperkt zich onnodig tot \"witte\" gripsokken.\n8. FAQ-antwoorden, collectiebeschrijving en meerdere blogartikelen gebruiken \"u/uw\" — tegen de merkstem in\n   (zie brand_higrip).\n9. 12 van 29 homepage-afbeeldingen hebben `alt=\"\"`; `twitter:image` ontbreekt in de meta-tags.\n\n### Al goed — niet aankomen\n\n- **Shopify UCP staat aan.** `robots.txt` verwijst naar `agents.md` en een UCP/MCP-endpoint, en de sitemap\n  bevat `sitemap_agentic_discovery.xml`. De catalogus is al benaderbaar vanuit ChatGPT, Perplexity, Copilot\n  en Gemini zonder extra werk.\n- Responstijden 0,2–0,8 s op alle geteste pagina's. 25 blogartikelen aanwezig.\n- Wetenschappelijke onderbouwing (wrijvingscoëfficiënt 1,17 vs 0,60; Apps et al. 2020 en 2022, Friedl et al. 2023)\n  is zeldzaam in deze categorie en precies het citeerbare materiaal waar AI-zoeksystemen op afgaan.\n\n### Gebouwd in `C:\\Users\\Test\\higrip-theme` — theme check schoon, NOG NIET GEPUSHT\n\nDe Shopify CLI was niet ingelogd (vraagt om een apparaatcode), dus pushen kon niet.\nEerst `shopify auth login`, dan pushen — thema-bestanden en `page.gripsokken-voetbal.json` in\n**aparte** pushes, anders stript de validatie onbekende settings.\n\n- `snippets/hi-seo-schema.liquid` — centrale `@graph`: Organization (eigen domein, e-mail, contactPoint,\n  4 sameAs), WebSite met SearchAction, BreadcrumbList per pagetype, ItemList op collecties.\n  Aangeroepen vanuit `layout/theme.liquid` direct na `content_for_header`.\n- `snippets/product-schema.liquid` — herschreven tot alleen een FAQPage met de 8 échte accordion-vragen.\n  Back-up van de oude versie: `C:\\Users\\Test\\higrip-seo\\product-schema.liquid.bak`.\n- `sections/hi-sport-landing.liquid` + `assets/hi-sport-landing.css` — herbruikbare sport-landingssectie.\n  De FAQ-blocks voeden zowel de zichtbare `<details>` als de FAQPage-JSON-LD, dus die kunnen niet meer\n  uiteenlopen. Sport #3 t/m #10 is daarmee invulwerk in de theme editor.\n- `templates/page.gripsokken-voetbal.json` — volledig ingevulde voetbalpagina.\n- `C:\\Users\\Test\\higrip-seo\\content\\` — blogartikel \"waarom glijdt je voet in je schoen\" en een\n  meta-teksten werkblad met A/B-varianten voor homepage, beide collecties, voetbalpagina en blog.\n\n### Routine\n\nGeplande taak `higrip-seo-regressiecheck` draait elke maandag 08:00 en schrijft naar\n`C:\\Users\\Test\\higrip-seo\\checks\\`. Verdere cadans: tweewekelijks één contentstuk helemaal af,\nmaandelijks Search Console-review op vertoningen en positie plus de AI-citatietest (5 vaste vragen aan\nChatGPT en Perplexity), per kwartaal de richting herzien.\n\n**Why:** De vier ritmes zijn bewust gescheiden — een wekelijkse controle die ook content maakt, wordt een\ncontrole die niets controleert. En bij dit verkeersvolume is één verandering per meetperiode de enige\nmanier om achteraf nog te weten wat werkte.\n\n**How to apply:** Begin altijd bij de meting (GA4 key events), dan pushen, dan admin-teksten, dan content.\nLeg elke wijziging vast met datum, anders is de maandelijkse GSC-review niet te interpreteren.\n\n### Twee dingen expliciet níét doen\n\n- **Geen `llms.txt`.** Google stelt dat het niets doet voor Search of de generatieve resultaten, en\n  AI-bots vragen het nauwelijks op (een fractie van een procent van hun verzoeken).\n- **Geen per-bot robots-groepen.** `robots.txt` staat al op `Allow: /`. Een eigen `User-agent: GPTBot`-blok\n  schakelt juist alle standaard-disallows uit, waarna die bot je winkelwagen, checkout en interne\n  zoekresultaten gaat crawlen.\n\n## Acties\n\n- [ ] P2 · Resterende 8 sportlandingspagina's invullen via `sections/hi-sport-landing.liquid` (na push van het thema)\n- [ ] P2 · \"u/uw\" in FAQ-antwoorden, collectiebeschrijving en blogartikelen omzetten naar \"je/jij\"\n- [ ] P2 · Collectiebeschrijving `/collections/gripsokken` verbreden — beperkt zich nu tot \"witte\" gripsokken\n- [ ] P3 · Alt-teksten op de 12 lege homepage-afbeeldingen en `twitter:image` toevoegen\n- [ ] P3 · Maandelijkse Search Console-review + AI-citatietest (5 vaste vragen aan ChatGPT en Perplexity) inplannen\n- [ ] P3 · Blogartikel \"waarom glijdt je voet in je schoen\" uit `C:\\Users\\Test\\higrip-seo\\content\\` publiceren\n\n## Bronnen\n\n- Origineel: `C:\\Users\\Test\\.claude\\memory\\project_higrip_seo.md`\n- Rapport-artifact: https://claude.ai/artifact/KXF6YLWedzMKs3A4Nv6hkq\n- GA4-property 476032345 (15 jun – 14 sep 2026)\n- Thema-werkkopie: `C:\\Users\\Test\\higrip-theme` · back-ups en content: `C:\\Users\\Test\\higrip-seo\\`\n\n## Aantekeningen",
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
    "2026-09-21-growth-radar-seo-technisch"
   ],
   "id": "2026-09-15-seo-audit",
   "prioriteit": "P1",
   "routine": "",
   "samenvatting": "Audit van testthema 194761425223 en de live site op 15 september 2026: conversiemeting staat uit (0 key events), de homepage-title mist het hoofdkeyword, twee oude product-URL's kannibaliseren en 9 van 10 sportpagina's ontbreken. Thema-fixes (schema, sportlandingssectie, voetbalpagina) staan lokaal klaar maar zijn niet gepusht.",
   "status": "in-uitvoering",
   "titel": "SEO- en conversieaudit higrip.nl — september 2026",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-15-seo-audit.md",
   "vervangt": []
  },
  {
   "acties": [],
   "body_md": "# SEO-regressiecheck — 15 september 2026\n\n## In het kort\n\nControle-run, geen onderzoek. De kritieke check (geen `aggregateRating` op enige pagina) is schoon. Alle vijf afwijkingen staan als `[regressie]`-punten op P1 in de growth-radar-backlog.\n\n## Bevindingen\n\nEerste run van deze routine, dus zonder voorgaande week om tegen af te zetten. Referentiepunt is de audit van 15 september 2026 (project_higrip_seo) en de daar beschreven verwachte staat.\n\n### Afwijkingen\n\n1. **Oude productpagina's kannibaliseren nog steeds het hoofdkeyword.**\n   URL: https://www.higrip.nl/products/performance-grip-socks-2-0-zwart en `-wit`\n   Wat: beide geven nog HTTP 200 in plaats van een 301 naar `/products/hi-grip-gripsokken-1`.\n   Fix: 301-redirects instellen in Shopify admin → URL-omleidingen.\n\n2. **GA4-conversiemeting staat nog uit.** `keyEvents = 0` op elk kanaal, deze week en vorige week.\n   URL: n.v.t. (GA4-property 476032345)\n   Wat: `purchase` is niet gemarkeerd als key event, dus elke CRO-uitspraak blijft ongefundeerd.\n   Fix: in GA4-admin → Events → `purchase` markeren als key event.\n\n3. **De thema-wijzigingen met SEO-schema staan nog steeds niet live.** Dit is de wortel van vrijwel alle schema-afwijkingen hieronder.\n   URL: alle 8 gecontroleerde URL's + https://www.higrip.nl/pages/gripsokken-voetbal\n   Wat: `snippets/hi-seo-schema.liquid` (WebSite/BreadcrumbList/ItemList) en de herschreven `snippets/product-schema.liquid` (FAQPage) staan lokaal klaar in `C:\\Users\\Test\\higrip-theme` maar zijn nog niet gepusht. Gevolg: `WebSite` ontbreekt op alle 8 URL's, `BreadcrumbList` op 6 van de 8, `ItemList` op beide collectiepagina's, `FAQPage` op de productpagina — en `/pages/gripsokken-voetbal` geeft nog 404.\n   Fix: eerst `shopify auth login` (device-code flow), dan pushen — thema-bestanden en `page.gripsokken-voetbal.json` in aparte pushes zoals in het projectgeheugen genoteerd.\n\n4. **Homepage heeft nog steeds 2× `<h1>`.**\n   URL: https://www.higrip.nl/\n   Wat: een `visually-hidden` H1 (\"HÏ Grip\") naast de zichtbare hero-H1 (`g2-hero__title`).\n   Fix: de visually-hidden H1 naar een `<span>` of `<p>` wijzigen, of de hero-titel als enige H1 laten staan.\n\n5. **`/collections/all` heeft nog geen meta description.**\n   URL: https://www.higrip.nl/collections/all\n   Wat: `<meta name=\"description\">` is leeg/afwezig.\n   Fix: beschrijving toevoegen via Shopify admin → SEO-instellingen van de collectiepagina.\n\n### Ongewijzigd\n\n0 van de 8 gecontroleerde URL's was volledig schoon op alle 8 checks — maar de kern zit in punt 3 hierboven: één ongepushte thema-wijziging verklaart het merendeel. Los daarvan: alle 8 URL's laadden binnen 0,53s (ruim onder de 1,5s-grens), elk had precies één niet-lege `<title>` en een correcte canonical naar zichzelf op www.higrip.nl, en **geen enkele pagina bevat een `aggregateRating`** — de kritieke check is dus schoon, het risico dat in de audit is opgelost blijft opgelost. `shopify theme check` gaf geen nieuwe fouten buiten de drie bekende, genegeerde types (JSONMissingBlock/Bundler, ImgWidthAndHeight, ParserBlockingScript). Homepage: 12 van 29 afbeeldingen met `alt=\"\"` — precies op de meldgrens, niet erboven.\n\n### Trend\n\nSessies per kanaal, laatste 7 dagen vs. de 7 dagen daarvoor (GA4-property 476032345):\n\n| Kanaal | Deze week | Vorige week |\n|---|---|---|\n| Direct | 83 | 15 |\n| Organic Search | 40 | 30 |\n| Organic Social | 10 | 11 |\n| Referral | 6 | 3 |\n| Unassigned | 3 | 3 |\n| AI Assistant | 1 | 1 |\n\nGrote sprong in Direct-verkeer (15 → 83) — mogelijk een campagne of e-mail; niet nader onderzocht, dat is werk voor de Growth Radar-routine, niet voor deze controle.\n\nAI Assistant-kanaal, laatste 30 dagen: **2 sessies** (ongewijzigd t.o.v. de 90-dagen-meting van 2 in de audit van 15 september — geen recente groei).\n\n## Acties\n\n_Acties uit dit rapport staan in de growth-radar-backlog (`ACTIEBACKLOG.md`) en komen via het dashboard onder NU AANDACHT binnen — hier niet gedupliceerd._\n\n## Bronnen\n\n- Origineel: `C:\\Users\\Test\\.claude\\research\\growth-radar\\rapporten\\regressiecheck-2026-09-15.md`\n- Routine: `C:\\Users\\Test\\.claude\\scheduled-tasks\\higrip-seo-regressiecheck\\SKILL.md`\n\n## Aantekeningen",
   "bron": "routine",
   "bronbestand": "C:\\Users\\Test\\.claude\\research\\growth-radar\\rapporten\\regressiecheck-2026-09-15.md",
   "bronbestand_url": null,
   "categorie": "SEO",
   "datum": "2026-09-15",
   "deadline": "",
   "gerelateerd": [
    "2026-09-15-seo-audit",
    "2026-09-14-weekoverzicht",
    "2026-09-21-growth-radar-seo-technisch"
   ],
   "id": "2026-09-15-regressiecheck",
   "prioriteit": "P1",
   "routine": "seo-regressiecheck",
   "samenvatting": "Eerste wekelijkse controle: 5 afwijkingen, grotendeels terug te voeren op het niet-gepushte thema (schema's ontbreken op alle 8 URL's), oude product-URL's zonder 301, GA4 zonder key event, 2× H1 en een lege meta description op /collections/all. Direct-verkeer sprong van 15 naar 83 sessies.",
   "status": "bekeken",
   "titel": "SEO-regressiecheck — 15 september 2026",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-15-regressiecheck.md",
   "vervangt": []
  },
  {
   "acties": [],
   "body_md": "# Growth Radar — SEO content & keywords (FAQ rich results weg)\n\n## In het kort\n\nEén scherpe bevinding met directe gevolgen voor een bestaand backlogpunt. Geen nieuwe acties.\n\n## Bevindingen\n\n**15 september 2026 · dinsdag**\n\n### In het kort\nGoogle heeft FAQ rich results per 7 mei 2026 volledig uit de zoekresultaten gehaald, en de officiële AI Overviews-gids van Google (15 mei 2026) zegt expliciet dat structured data niet nodig is om in AI-antwoorden geciteerd te worden. Dat raakt direct actiepunt 5 in de backlog — de vraagpagina's (\"waarom glijdt mijn voet...\") — die nu nog uitgaat van FAQPage JSON-LD als onderdeel van het format. De content-aanpak zelf blijft goed; de schema-stap is overbodig geworden.\n\n---\n\n### FAQ-schema levert geen rich result én geen AI-citatiebonus meer op\n\nFAQ rich results waren al jaren op hun retour: Search Engine Land registreerde een daling van 53,94% naar 17,04% van de SERP's met dit element na de beperking van augustus 2023 tot \"bekende, gezaghebbende overheids- en gezondheidssites\". Op 7 mei 2026 heeft Google de stekker er helemaal uitgetrokken — FAQ rich results verschijnen niet meer, voor niemand. Search Console verwijdert het bijbehorende rapport in juni 2026, de API-ondersteuning volgt in augustus.\n\nBelangrijker voor de contentkeuzes van vandaag: op 15 mei 2026 publiceerde Google zijn eerste officiële gids voor generatieve AI-zoekresultaten, en die stelt zonder omwegen dat structured data niet vereist is voor AI Overviews of AI Mode — er is geen speciale schema.org-markup die je citatiekans vergroot. Het `FAQPage`-type zelf is niet afgeschaft en mag blijven staan, maar het is geen groeihefboom meer. Sommige SEO-analisten melden zelfs een lichte negatieve correlatie tussen FAQ-schema en AI Overview-citaties (niet door Google bevestigd, dus met een korrel zout te nemen) — het punt is: schema toevoegen is geen vervanging voor goede content.\n\n> **Voor higrip.nl:** Actiepunt 5 in de backlog (\"Schrijf de vraagpagina's antwoord-eerst\") noemt nu nog \"FAQPage JSON-LD eronder\" als onderdeel van het format voor de drie geplande pagina's (\"Waarom glijdt mijn voet in mijn padelschoen?\", \"Wat zijn gripsokken?\", \"Tapedesign alternatief\"). Die schema-stap voegt niks meer toe — geen rich result, geen aantoonbare AI-citatiebonus. De rest van het plan (antwoord in de eerste twee zinnen, dan pas onderbouwing) is juist precies wat Google nu wél aanraadt: \"unique, compelling, and useful\" content met een heldere, direct beantwoordbare opening. Dat blijft de investering waard, puur omdat het de content zelf beter maakt — niet vanwege een schema-truc.\n\n**Actie:** Actiebacklogpunt 5 bijgewerkt — schemastap geschrapt, content-aanpak ongewijzigd. Zie `ACTIEBACKLOG.md`.\n\n---\n\n### Bronnen\n- [Google to no longer support FAQ rich results](https://searchengineland.com/google-to-no-longer-support-faq-rich-results-476957)\n- [Analysis: FAQ rich results show on 17% of Google SERPs, down from 54%](https://searchengineland.com/analysis-faq-rich-results-show-on-17-of-google-serps-down-from-54-432866)\n- [The rise and fall of FAQ schema – and what it means for SEO today](https://searchengineland.com/faq-schema-rise-fall-seo-today-463993)\n- [FAQ Schema After 7 May 2026: What Actually Changed](https://www.seostrategy.co.uk/learn/faq-schema-deprecation-2026-rich-result-vs-schema/)\n- [FAQ Schema in 2026: What's Confirmed, What's not & What to do](https://www.quattr.com/blog/faq-schema-in-2026)\n\n## Acties\n\n_Acties uit dit rapport staan in de growth-radar-backlog (`ACTIEBACKLOG.md`) en komen via het dashboard onder NU AANDACHT binnen — hier niet gedupliceerd._\n\n## Bronnen\n\n- Origineel: `C:\\Users\\Test\\.claude\\research\\growth-radar\\rapporten\\2026-09-15-seo-content.md`\n\n## Aantekeningen",
   "bron": "routine",
   "bronbestand": "C:\\Users\\Test\\.claude\\research\\growth-radar\\rapporten\\2026-09-15-seo-content.md",
   "bronbestand_url": null,
   "categorie": "SEO",
   "datum": "2026-09-15",
   "deadline": "",
   "gerelateerd": [
    "2026-09-15-growth-radar-basislijn",
    "2026-09-16-growth-radar-ai-search",
    "2026-09-16-seo-onderzoek-cloud-routine-website"
   ],
   "id": "2026-09-15-growth-radar-seo-content",
   "prioriteit": "P3",
   "routine": "growth-radar",
   "samenvatting": "Google toont sinds 7 mei 2026 geen FAQ rich results meer en zegt in de AI Overviews-gids (15 mei 2026) dat structured data niet nodig is voor AI-citaties. Het backlogpunt over de vraagpagina's is aangepast: schema-stap geschrapt, antwoord-eerst-opbouw blijft het werk dat telt.",
   "status": "bekeken",
   "titel": "Growth Radar — SEO content & keywords (FAQ rich results weg)",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-15-growth-radar-seo-content.md",
   "vervangt": []
  },
  {
   "acties": [],
   "body_md": "# Growth Radar — Basislijn (nulmeting zes thema's)\n\n## In het kort\n\nStartmeting van de dagelijkse Growth Radar-routine; vult het `LEDGER.md` zodat dagelijkse runs niet dezelfde koppen herhalen. Zes secties met per sectie een \"Voor higrip.nl\"-vertaling. Let op: sectie 3 noemt AggregateRating als ontbrekend — de audit van dezelfde dag heeft juist een verzonnen `aggregateRating` verwijderd; de juiste volgorde (eerst reviewapp, dan schema) staat in de backlog.\n\n## Bevindingen\n\n**15 september 2026 · nulmeting over alle zes thema's**\n\nDit is de startmeting. Vanaf 16 september draait de routine dagelijks met één focus per dag. Deze basislijn vult het `LEDGER.md`, zodat de dagelijkse runs niet dezelfde koppen blijven herhalen.\n\n---\n\n### 1. Wat er in 2026 is veranderd aan Google\n\nGoogle deed tussen februari en juni vijf bevestigde updates. Drie daarvan raken jou:\n\n**Core update februari — alleen voor Discover.** Eerste keer dat Google een update uitsluitend op Discover richtte. Relevant als je blogcontent gaat bouwen: Discover wordt een apart kanaal met eigen regels, niet langer een bijproduct van je rankings.\n\n**Brede core update 27 maart – 8 april.** Twaalf dagen uitrol, wereldwijd, alle branches. Het patroon is eenduidig: webshops met eigen materiaal — eigen testdata, echte klantinzichten, expertreviews — wonnen gemiddeld ~22% zichtbaarheid. AI-contentfarms verloren 60–80% van hun verkeer.\n\n**Spamupdate juni.** Snelste in de geschiedenis van Google. Richt zich op schaalbare contentproductie, site reputation abuse en onnatuurlijke links.\n\n> **Voor higrip.nl:** jouw voorsprong is dat je echte meetdata hebt — de 1.17 wrijvingscoëfficiënt, de 95%-claim. Dat is precies het type eigen materiaal dat deze updates belonen, en wat FitSockr, Tapedesign en Optigrip niet hebben. Maar die cijfers staan nu alleen in campagnesecties, niet in een vindbare, citeerbare pagina. Dat is het grootste onbenutte SEO-bezit dat je hebt.\n\n---\n\n### 2. AI-zoeken is geen zijspoor meer\n\nDe cijfers die ertoe doen:\n\n| Meting | Waarde |\n|---|---|\n| Amerikanen die generatieve AI voor zoeken gebruiken (2026) | 31% |\n| Shopping-vragen per dag in ChatGPT | ~50 miljoen |\n| Conversie van LLM-verkeer | 5,53% |\n| Conversie van regulier organisch verkeer | 3,7% |\n| Aandeel AI-merkvermeldingen dat uit derden komt (reviews, community's) | ~85% |\n\nBezoekers die via een AI-assistent binnenkomen converteren dus ongeveer anderhalf keer zo goed als gewone zoekers. Ze arriveren met een aanbeveling in hun hoofd in plaats van een lijst met tien opties.\n\nDe belangrijkste nuance uit het onderzoek: dit is **80% strategisch, 20% technisch**. Schema toevoegen is niet genoeg. Waar het echt op draait is of je genoemd wordt op plekken waar de modellen lezen — vergelijkingsartikelen, fora, reviewsites.\n\n> **Voor higrip.nl:** \"wat zijn gripsokken\" en \"tapedesign alternatief\" staan al in je keywordlijst. Dat zijn precies vraagvormige zoekopdrachten — het type dat in AI-antwoorden terechtkomt. Schrijf ze antwoord-eerst: de conclusie in de eerste twee zinnen, daarna pas de onderbouwing. Modellen lichten de opening eruit.\n\n---\n\n### 3. Structured data wordt hard afgedwongen\n\nTwee concrete ontwikkelingen:\n\n**Vanaf maart 2026** krijgen producten met afwijkende attributen onder één ID te maken met verwerkingsproblemen, minder zichtbaarheid of afkeuringen in Merchant Center. Jij hebt zes varianten (2 maten × 3 packs) onder één product — dit raakt je direct als je Merchant Center gebruikt of gaat gebruiken.\n\n**Universal Commerce Protocol.** Google standaardiseert hoe productdata en checkout-mogelijkheden worden gedeeld met AI-agents. Gestructureerde productdata is de toegangseis. Er is ook een \"Universal Cart\" aangekondigd.\n\nEén technisch detail dat vaak fout gaat: structured data moet in de HTML staan die de server teruggeeft. Door JavaScript gegenereerde markup na het laden telt niet.\n\n> **Voor higrip.nl:** je hebt `product-schema.liquid` al staan en die rendert server-side — goed. Wat ontbreekt is `AggregateRating`. Zonder dat krijg je geen sterren in Shopping-resultaten, terwijl je wel 4,8★ en 1.500+ sporters claimt.\n\n---\n\n### 4. Conversie: waar het geld weglekt\n\nBenchmarks 2026:\n\n| Meting | Waarde |\n|---|---|\n| Mediane Shopify-conversie | 1,4% |\n| Bovenste 20% | 3,2% |\n| Add-to-cart, gemiddeld | 8–10% |\n| Add-to-cart, best-in-class | 12–15% |\n| Verlaat winkelwagen na toevoegen | 60–70% |\n\nRedenen voor winkelwagenverlating in Nederland: **onverwachte verzendkosten 48%**, verplicht account aanmaken 24%, te ingewikkeld checkout 18%.\n\nTwee tactieken met het hardste bewijs:\n- Een productvideo van 30–60 seconden: **+10 tot 30% conversie**, consistent.\n- Algoritmische aanbevelingen in plaats van handmatige: **+15 tot 25%**.\n\nCore Web Vitals-drempels: LCP ≤2,5s · INP ≤200ms · CLS ≤0,1.\n\n> **Voor higrip.nl:** die 48% is jouw grootste enkele lek. Je hebt gratis verzending vanaf €30, maar je 1-pack kost €14,99 — een klant die één pack koopt loopt recht in de verrassing. Toon de drempel op de productpagina zelf (\"nog €15,01 tot gratis verzending\"), niet pas in de winkelwagen.\n\n---\n\n### 5. Social naar website: waar de conversie zit\n\n| Kanaal | Conversie |\n|---|---|\n| TikTok Shop | 4,7% |\n| Instagram Shopping | 2,1% |\n| Facebook Shops | 1,8% |\n| Livestream-sessies | 10–18% |\n| Gemiddelde webshop | 2–3% |\n\nNederlandse context: **34% van de consumenten tussen 18 en 35** heeft minstens één aankoop via social media gedaan. Nederlandse retailers met livesessies rapporteren 10–15% conversie.\n\nDe rolverdeling die in 2026 werkt: **TikTok maakt de vonk, Instagram voedt het verlangen, YouTube bevestigt de aankoopbeslissing.**\n\nCreator-samenwerkingen zijn verschoven van vaste vergoedingen naar prestatiegericht: open plan op 10–12% commissie om verkoopsnelheid en reviews op gang te krijgen, daarna gerichte plannen op 18–25% voor wie het echt doet.\n\n> **Voor higrip.nl:** padel is visueel, kort en herhaalbaar — de slide-out op de baan, de sok die grip houdt. Dat is TikTok-materiaal. Je hebt met 876.000 NL-padellers een doelgroep die op één platform zit. Een open commissieplan met padel-creators is goedkoper dan advertenties en levert tegelijk de reviews op die je AI-zichtbaarheid voeden (zie punt 2 — 85% van AI-vermeldingen komt uit derde partijen).\n\n---\n\n### 6. Funnel en meten\n\nDe Meta-playbook is verschoven van `koud verkeer → retargeting → korting` naar `creatives filteren op intentie → geconsolideerd advertentie-account → retentie`.\n\nWat je technisch nodig hebt: **Conversions API (CAPI)**. Zonder server-side signalen krijgt Meta geen post-purchase data (retourpercentages, klantwaarde) en optimaliseert het algoritme op incomplete informatie. Dynamische remarketing levert bij volwassen DTC-merken 30–50% van de omzet.\n\nCreatief testen: één variabele per test, 7–14 dagen minimum.\n\n> **Voor higrip.nl:** je WK-keyvisual uit v7 is al als PNG exporteerbaar voor Meta-creatives. Dat is een gratis eerste testbatch.\n\n---\n\n### Bronnen\n\n- [Imaginaire — Biggest Google Algorithm Updates 2026 for Ecommerce](https://www.imaginaire.co.uk/blog/the-biggest-google-algorithm-updates-so-far-in-2026/)\n- [Eyeful Media — Google Algorithm Updates 2026](https://www.eyefulmedia.com/blog/2026-google-algorithm-updates)\n- [Elogic — AI Search Visibility: Ecommerce GEO Guide](https://elogic.co/blog/ai-search-visibility-ecommerce/)\n- [ALM Corp — AEO and GEO Playbook 2026 for Retailers](https://almcorp.com/blog/aeo-geo-playbook-retail-ai-search-2026/)\n- [ALM Corp — Google Product ID Requirements 2026](https://almcorp.com/blog/google-product-id-requirements-2026/)\n- [Google Search Central — Merchant Listing Structured Data](https://developers.google.com/search/docs/appearance/structured-data/merchant-listing)\n- [Blend Commerce — Ecommerce Conversion Rate Benchmarks 2026](https://blendcommerce.com/blogs/shopify/ecommerce-conversion-rate-benchmarks-2026)\n- [Shopify — Ecommerce Conversion Rate Benchmarks](https://www.shopify.com/blog/ecommerce-conversion-rate)\n- [Digital Applied — TikTok Shop 2026 Social Commerce Guide](https://www.digitalapplied.com/blog/tiktok-shop-2026-social-commerce-guide)\n- [Opklopper — Conversie Webshop Verhogen: benchmarks NL](https://opklopper.nl/blog/conversie-webshop-verhogen)\n- [Providence IT — E-commerce Trends 2026 Nederland](https://providenceit.nl/kennisbank/ecommerce-trends-2026)\n- [Stackmatix — Meta Ads Funnel Strategy 2026](https://www.stackmatix.com/blog/meta-ads-funnel-strategy)\n\n## Acties\n\n_Acties uit dit rapport staan in de growth-radar-backlog (`ACTIEBACKLOG.md`) en komen via het dashboard onder NU AANDACHT binnen — hier niet gedupliceerd._\n\n## Bronnen\n\n- Origineel: `C:\\Users\\Test\\.claude\\research\\growth-radar\\rapporten\\2026-09-15-basislijn.md`\n- Bronnen per bevinding: zie de lijst onderaan Bevindingen\n\n## Aantekeningen",
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
   "prioriteit": "P2",
   "routine": "growth-radar",
   "samenvatting": "Nulmeting over zes thema's: Google-updates 2026, AI-zoeken, structured data, conversie, social en funnel. Grootste kans: de eigen meetdata (1,17 / 95%) staan nergens in een vindbare, citeerbare pagina; grootste lek: 48% winkelwagenverlating door onverwachte verzendkosten bij het 1-pack van €14,99.",
   "status": "bekeken",
   "titel": "Growth Radar — Basislijn (nulmeting zes thema's)",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-15-growth-radar-basislijn.md",
   "vervangt": []
  },
  {
   "acties": [
    {
     "afgevinkt": false,
     "id": "2026-09-14-weekoverzicht#a50d4c39",
     "prioriteit": "P1",
     "tekst": "Checkout onderzoeken: testbestelling op desktop én mobiel, Abandoned checkouts in Shopify Admin bekijken, eerdere weken vergelijken"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-14-weekoverzicht#f8aeca10",
     "prioriteit": "P2",
     "tekst": "Structured data-regressie op live herstellen — WebSite en FAQPage terug, oorzaak in de thema-historie zoeken"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-14-weekoverzicht#a21d0718",
     "prioriteit": "P2",
     "tekst": "Homepage-title (nu \"HÏ Grip\", 7 tekens) en meta description (175 tekens) aanpassen"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-14-weekoverzicht#6c815488",
     "prioriteit": "P2",
     "tekst": "6 partnership-kandidaten beoordelen: Urban Trail, Charity Run, Outdoor Valley, Fervor Pilates, bbb health boutique + 3 HOOG-Events"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-14-weekoverzicht#96504b01",
     "prioriteit": "P2",
     "tekst": "Padelclub Rotterdam-uitsluiting verifiëren (eigen clubshop gevonden)"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-14-weekoverzicht#f592e573",
     "prioriteit": "P2",
     "tekst": "Funnel-rapport op historische GA4-data (mrt–dec 2025)"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-14-weekoverzicht#4a6ec67e",
     "prioriteit": "P3",
     "tekst": "Update Log bijwerken zodra de structured data-situatie is opgelost"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-14-weekoverzicht#7da26b32",
     "prioriteit": "P3",
     "tekst": "Merk & Bedrijf Database / Retailer Database: bevestigen of ze verwijderd mogen worden"
    }
   ],
   "body_md": "# Denzel Weekoverzicht — 2026-09-14 (0 orders bij 7 checkouts)\n\n## In het kort\n\nVanaf deze week is de GA4-funnel-check t.o.v. benchmarks een vast onderdeel van de routine. Het checkout-signaal is het urgentste punt; de overige beslissingen lopen al 3–4 weken.\n\n## Bevindingen\n\n### Voortgang per hoofdagent\n\n- **Content Agent** — geen verandering. Video & Visuele Productie Agent (`/video-productie`) nog steeds zonder output. Automatisering van periodieke content-ideeën blijft bewust niet gebouwd (lars wil dit eerst intern afstemmen met de content-afdeling) — technisch kan het al (GA4 + Buffer-koppeling actief), de inhoudelijke reden staat nog open.\n- **Partnership Agent** — B2B Klanten Agent: lijst laatst bijgewerkt 2026-09-07 (7 dagen geleden, binnen de 1-2 weken-marge) — geen zoekactie nodig deze week. Partnerships & Events Agent: lijst laatst bijgewerkt 2026-09-07 (idem, binnen de marge) — geen zoekactie nodig. Influencer & Creator Agent draait ongewijzigd actief via het IG-zoekscript. De stapel onbeoordeelde kandidaten groeit door: 5 kandidaten (Urban Trail Rotterdam, Rotterdam Charity Run, Outdoor Valley Obstacle Run, Fervor Pilates, bbb health boutique Rotterdam) wachten nog steeds op een eerste beoordeling van lars, sommige al 3 weken.\n- **Website Agent** — live-site-check en SEO-check beide uitgevoerd, geen egress-problemen. Site bereikbaar, geen fouten, merknaam overal correct, vertrouwens-elementen aanwezig. **Structured data-probleem van vorige week is niet opgelost**: nog steeds alleen `Organization` live, geen `WebSite`/`FAQPage` — zie hieronder. Titel/meta-description-probleem staat nu 4 weken open zonder wijziging.\n\n### Wat ik deze week zelf heb opgepakt\n\n**B2B Klanten (Lijn A) en Samenwerkingen/Events (Lijn B):** geen zoekactie uitgevoerd. Beide kandidatenlijsten zijn 7 dagen oud (laatst bijgewerkt 2026-09-07), dus binnen de 1-2 weken-marge uit de routine-instructie. Geen nieuwe kandidaten toegevoegd deze week.\n\n**Live-site-check (14-09):**\n- Bereikbaar: `https://www.higrip.nl/` geeft HTTP 200, geen 404/500, geen zichtbare Liquid-errors.\n- Merknaam: overal correct \"HÏ Grip\" (35x gevonden) — geen enkele \"HI Grip\"/\"Hi Grip\" in de zichtbare paginatekst.\n- Vertrouwens-elementen aanwezig: e-mail (info@higrip.nl), telefoon, KVK/BTW-nummer, Trustpilot-link, klantlogo's (Concordia, SYTH, Sport2000), \"3000+ sporters\"-social proof.\n- **Structured data blijft op het niveau van vorige week — nog steeds geen herstel.** In de `<head>` staat nog maar 1 JSON-LD-blok, alleen `Organization` (naam + logo + url). Ook op de losse FAQ-pagina (`/pages/veelgestelde-vragen`) staat alleen `Organization`, geen `FAQPage`. Dit is dus een aanhoudende regressie, twee weken op rij nu (sinds 31-08 stond het wél compleet live: Organization + WebSite + FAQPage). [Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md) is nog steeds niet aangepast en klopt dus structureel niet (zegt nog \"nog niet naar live gekopieerd\" terwijl de praktijk 2x is gewijzigd).\n\n**SEO-check (14-09):**\n- `<title>` = nog steeds alleen **\"HÏ Grip\"** (7 tekens, geen keyword) — ongewijzigd t.o.v. 31-08/07-09. Het voorstel van 4 weken terug is nog niet doorgevoerd.\n- `<meta name=\"description\">` = nog steeds **175 tekens** (boven de aanbevolen 120-155) — ongewijzigd, zelfde tekst als eerdere weken.\n- Sitemap bereikbaar op `https://www.higrip.nl/sitemap.xml` (HTTP 200), geldige sitemap-index met 9 sub-sitemaps — ongewijzigd.\n- FAQPage-inhoud kon opnieuw niet gecheckt worden — de structured data zelf staat er nog steeds niet.\n- Geen van deze bevindingen zelf aangepast — alleen gesignaleerd, wijziging is aan lars/Website Agent via [Technische Procedures](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Technische%20Procedures.md).\n\n### Openstaande beslissingen voor lars\n\n- **SEO-titel en meta-description homepage aanpassen** — nu 4 weken op de plank (voorstel stond al in [Week 2026-08-31](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Weekoverzicht/Week%202026-08-31.md)): titel te kort/geen keyword, description iets te lang. Kleine, lage-risico wijziging.\n- **Structured data-regressie herstellen** — WebSite- en FAQPage-JSON-LD stonden op 31-08 bevestigd live, staan nu twee weken op rij (07-09 én 14-09) nog steeds alleen als Organization. Voorstel ongewijzigd: nagaan wat er sindsdien aan het thema is gewijzigd (republicatie, app-update, handmatige aanpassing?) en de FAQPage/WebSite-snippets opnieuw toevoegen.\n- **[Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md) klopt structureel niet meer** — staat inmiddels 6 weken achter op de praktijk. Voorstel blijft dat Website Agent dit bestand bij een volgende wijziging als bron van waarheid gaat bijhouden.\n- **Padelclub Rotterdam — mogelijk verouderde uitsluiting** (gesignaleerd 07-09, nog geen reactie). Bestaande uitsluiting in [Voorwaarden Samenwerking](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20B%20-%20Samenwerkingen/Voorwaarden%20Samenwerking.md) (\"geen event, geen pro shop\") lijkt tegenstrijdig met een gevonden eigen clubshop. Voorstel: kort navragen/verifiëren.\n- **6 kandidaten wachten op een eerste beoordeling:** Urban Trail Rotterdam & Rotterdam Charity Run (nu 3 weken), Outdoor Valley Obstacle Run, Fervor Pilates & bbb health boutique Rotterdam (nu 1 week), plus de eerdere 3 HOOG-kandidaten van Partnerships & Events (Powerleague Rotterdam, Panna Knock Out, Rotterdam Basketbal 3x3) die al langer klaarstaan maar nog niemand benaderd is.\n- **Merk & Bedrijf Database / Retailer Database** — nog steeds niet bevestigd of deze verwijderd mogen worden.\n- **Analytics-vervolgstappen** — funnel-rapport op de historische GA4-data (mrt–dec 2025) en checken of purchase-events doorkomen; staat nu 3 weken als actiepunt zonder dat het is opgepakt.\n- **Checkout onderzoeken — nieuw, waarschijnlijk urgenter dan bovenstaande punten.** Deze week 0 orders/€0 omzet, bevestigd door lars (geen trackingissue). Zie de conclusie bij \"Eerste conclusies uit Google Analytics\" hieronder voor het concrete voorstel (testbestelling doorlopen, Abandoned checkouts in Shopify Admin bekijken).\n\n### Vooruitblik — komende week\n\n1. **Structured data-regressie eindelijk oplossen** — dit is de belangrijkste openstaande actie, nu 2 weken zonder voortgang. Eerst de oorzaak vinden (theme-republicatie-historie in Shopify-admin), dan WebSite/FAQPage-snippets opnieuw toevoegen en deze keer verifiëren dat het blijft staan.\n2. **SEO-titel/description homepage doorvoeren** — het voorstel ligt er al 4 weken, kleine wijziging via de reguliere theme-procedure.\n3. **Beoordeling geven op de 6 openstaande partnership-kandidaten** (2 B2B, 4 Events) — de oudste liggen al 3 weken te wachten, de stapel groeit sneller dan hij afneemt.\n4. **[Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md) structureel bijwerken** zodra de structured data-situatie is opgelost, zodat het weer een betrouwbare bron is.\n5. **Analytics-vervolgstappen oppakken** — funnel-rapport op de historische GA4-data en checken of purchase-events doorkomen; dit staat nu 3 weken als actiepunt.\n\n### AI-ontwikkelingen die relevant kunnen zijn\n\n1. **Instagram First Draft** — nieuwe AI-functie in Instagram Edits die automatisch een Reel opbouwt uit een selectie bestaande clips (pauzes wegknippen, beste stukken eruit halen), alles blijft achteraf aanpasbaar. Direct relevant voor `/video-productie`: kan het eerste-cut-werk versnellen vóórdat de HÏ Grip-editingstijl (tempo, kleur, tekst-overlay) er overheen gaat.\n2. **TikTok Symphony Agent (Symphony Creative Studio)** — genereert volledige videocampagnes uit tekstprompts, beelden en voorbeelden, en analyseert wat nu al goed presteert op TikTok om vergelijkbare varianten voor te stellen. Relevant voor `/video-productie` en `/social-content` als startpunt voor concepten, met de HÏ Grip-merkstem er overheen.\n3. **Google Search Console: generatieve AI-prestatierapportage uitgebreid** — laat zien hoe vaak de site verschijnt in AI Overviews/AI Mode (impressies, pagina's, landen). Direct relevant nu de structured data-regressie hierboven al twee weken openstaat: zodra hersteld, kan dit rapport laten zien of het schema daadwerkelijk zichtbaarheid in AI-zoekresultaten oplevert. Kanttekening: Google zegt zelf dat er geen apart schema.org-type verplicht is voor AI Mode specifiek — bestaande structured data helpt via de normale Search-functies.\n4. **Shopify Magic \"Brand Voice Cloning\"** — leert de merkstem uit eerdere blogposts/social-comments om consistente copy te genereren. Kan relevant zijn voor `/shopify-copy` zodra de tool breed beschikbaar is, maar nog niet geverifieerd of dit al voor het HÏ Grip-abonnement geldt — eerst checken bij gebruik.\n\n### Aanvullingen van lars (14-09)\n\n> Onderstaande punten zijn deze week handmatig door lars uitgevoerd/aangeleverd, niet door de Denzel-routine gegenereerd.\n\n**Product meta-descriptions aangepast** — de meta-descriptions van de producten zijn deze week bijgewerkt. Dit staat los van het openstaande punt hierboven over de **homepage**-title/meta-description (die is ongewijzigd, nog steeds 175 tekens zonder keyword in de title) — dat blijft dus een apart, nog open actiepunt.\n\n**Structuurwijziging hoofdnavigatie: \"Alle sokken\" → \"Gripsokken\"** — de hoofdnavigatie wijst nu naar `/collections/gripsokken` in plaats van (uitsluitend) `/collections/all`. Check uitgevoerd (14-09):\n- `/collections/gripsokken` geeft HTTP 200, staat correct in `sitemap_collections_1.xml` en heeft een eigen self-referencing canonical (`rel=\"canonical\"` → zichzelf). Geen 404's, geen gebroken links.\n- `/collections/all` bestaat nog gewoon (HTTP 200, geen redirect), staat nog steeds in de site-navigatie, heeft ook een eigen self-referencing canonical, en staat niet in de sitemap (was hij al niet).\n- **Conclusie: geen negatieve SEO-impact** — er is niets weggehaald of doorverwezen, dus geen verloren linkwaarde of 404's. Enige kanttekening: `/collections/all` en `/collections/gripsokken` tonen grotendeels dezelfde producten en staan allebei nog live + gelinkt + indexeerbaar. Dat is op zichzelf geen probleem (aparte canonicals), maar in theorie een lichte duplicate-content-signaal voor Google. Geen actie nodig tenzij Search Console hier iets over meldt — dan `/collections/all` uit de navigatie halen of op noindex zetten.\n\n**Organisaties die wachten op een beoordeling van lars (uit de vault):**\n\n- [ ] Urban Trail Rotterdam — 3 weken wachtend\n- [ ] Rotterdam Charity Run — 3 weken wachtend\n- [ ] Outdoor Valley Obstacle Run — 1 week wachtend\n- [ ] Fervor Pilates — 1 week wachtend\n- [ ] bbb health boutique Rotterdam — 1 week wachtend\n- [ ] Powerleague Rotterdam — HOOG-kandidaat, langer klaarliggend, nog niemand benaderd\n- [ ] Panna Knock Out — HOOG-kandidaat, langer klaarliggend, nog niemand benaderd\n- [ ] Rotterdam Basketbal 3x3 — HOOG-kandidaat, langer klaarliggend, nog niemand benaderd\n\n**Eerste conclusies uit Google Analytics (laatste 7 dagen t.o.v. de 7 dagen ervoor):**\n- Sessies: 91 vs. 61 (+49%). Gebruikers: 78 vs. 47 (+66%). Paginaweergaven: 189 vs. 100 (+89%). Engagement rate stabiel (~0,49–0,53).\n- Grootste kanalen deze week: Organic Search (31 sessies) en Direct (35 sessies) ongeveer gelijk op, Organic Social (10) derde. Organic Search groeide licht (33 → 31 vorige week, dus stabiel/licht dalend), Direct groeide sterk (16 → 35).\n- Funnel: 42x `view_item`, 6x `add_to_cart`, 7x `begin_checkout`, 2x `add_shipping_info` — en **0 `purchase`-events in GA4**. **Bevestigd door lars: dit is geen trackingprobleem — er is deze week ook daadwerkelijk €0 omzet via de webshop binnengekomen.** GA4 klopt hier dus wel; het eerdere vermoeden dat dit \"alleen\" een trackingprobleem was, is onjuist gebleken.\n- Dat verandert het beeld: 7 bezoekers zijn met checkout begonnen, niemand heeft afgerekend — een reëel conversieprobleem in de checkout, geen meetprobleem. Concreet gat: van 7x `begin_checkout` nog maar 2x `add_shipping_info` (5 afhakers al vóór het verzendadres) en dus 0x afgerond. Met dit lage volume (7 checkouts) is het nog te vroeg om harde conclusies te trekken over *waar* precies het misgaat, maar het signaal (0 orders) is op zichzelf al reden voor actie. Ter context: gemiddelde cart-abandonment in e-commerce is ~70%, checkout-abandonment (al in de checkout, niet afgerond) daarbovenop ~17-20% (Baymard Institute) — HÏ Grip zat deze week op 100% checkout-abandonment (7 van de 7), ruim boven het gemiddelde, al is de steekproef te klein om dit als trend te zien.\n- **Volledige funnel t.o.v. benchmarks (dit is vanaf nu een vast wekelijks onderdeel, zie [Denzel Weekoverzicht — Routine](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Denzel%20Weekoverzicht%20%E2%80%94%20Routine.md)):**\n\n  | Stap | HÏ Grip deze week | Benchmark | Beeld |\n  |---|---|---|---|\n  | Sessie → `view_item` | 42/91 = 46% | geen harde standaard-benchmark | oke |\n  | Sessie → `add_to_cart` | 6/91 = 7% | ~8-10% van sessies | net onder gemiddeld, binnen spreiding bij dit volume |\n  | `add_to_cart` → `begin_checkout` | 6 → 7 (>100%) | normaal ~30-50% van toevoegingen | klopt niet logisch — zie kanttekening hieronder |\n  | `begin_checkout` → `purchase` | 7 → 0 (0%) | ~80-83% rondt af | ver onder benchmark |\n  | Sessie → `purchase` (totaal) | 0/91 = 0% | ~2-3% gemiddeld | bij 91 sessies is ook bij 2-3% maar ~2 orders te verwachten — deels ook klein volume |\n\n  Kanttekening: `add_to_cart` (6) is lager dan `begin_checkout` (7), wat niet zou moeten. Waarschijnlijke verklaring: bezoekers gebruiken een directe \"Koop nu\"/dynamische checkoutknop (bv. Shop Pay) die het `add_to_cart`-event overslaat — geen fout, maar betekent dat de cart-stap in GA4 niet volledig gemeten wordt.\n\n- **Actiepunt: checkout verbeteren/onderzoeken** — voorstel voor komende week: (1) zelf een testbestelling doorlopen op desktop én mobiel om een blokkade te vinden (bijv. verzendkosten die laat/onverwacht verschijnen, ontbrekende betaalmethode, foutmelding), (2) in Shopify Admin de \"Abandoned checkouts\" van deze week bekijken (heeft meer detail dan GA4 bij dit lage volume, laat ook zien wie waar afhaakte), (3) checken of dit een nieuw patroon is of dat eerdere weken (vóór de GA4-fix) ook al weinig omzet gaven. Dit staat los van het GA4-trackingpunt in \"Openstaande beslissingen\" hieronder — dat blijft ook relevant zodra het volume weer hoger is.\n- Kanttekening: dit is pas de tweede week met vergelijkbare data sinds de GA4-tag weer actief is, dus nog te vroeg voor trendconclusies over bezoekersaantallen — maar het omzetsignaal (€0, bevestigd door lars) verdient wel meteen aandacht.\n\n### Gerelateerde bestanden\n\n- [Stappenplan — Verdere Bouw](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Stappenplan%20%E2%80%94%20Verdere%20Bouw.md)\n- [Feedback & Iteratie Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Feedback%20%26%20Iteratie%20Log.md)\n- [Agent Werk & Kwaliteit Overzicht](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Agent%20Werk%20%26%20Kwaliteit%20Overzicht.md)\n\n## Acties\n\n- [ ] P1 · Checkout onderzoeken: testbestelling op desktop én mobiel, Abandoned checkouts in Shopify Admin bekijken, eerdere weken vergelijken\n- [ ] P2 · Structured data-regressie op live herstellen — WebSite en FAQPage terug, oorzaak in de thema-historie zoeken\n- [ ] P2 · Homepage-title (nu \"HÏ Grip\", 7 tekens) en meta description (175 tekens) aanpassen\n- [ ] P2 · 6 partnership-kandidaten beoordelen: Urban Trail, Charity Run, Outdoor Valley, Fervor Pilates, bbb health boutique + 3 HOOG-Events\n- [ ] P2 · Padelclub Rotterdam-uitsluiting verifiëren (eigen clubshop gevonden)\n- [ ] P2 · Funnel-rapport op historische GA4-data (mrt–dec 2025)\n- [ ] P3 · Update Log bijwerken zodra de structured data-situatie is opgelost\n- [ ] P3 · Merk & Bedrijf Database / Retailer Database: bevestigen of ze verwijderd mogen worden\n\n## Bronnen\n\n- Origineel: [Week 2026-09-14](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Weekoverzicht/Week%202026-09-14.md) (`04_Agent_Infrastructuur/Beheer/Weekoverzicht/`)\n- Routine: [Denzel Weekoverzicht — Routine](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Denzel%20Weekoverzicht%20%E2%80%94%20Routine.md)\n- GA4-property 476032345, Baymard Institute-benchmarks\n\n## Aantekeningen",
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
    "2026-09-04-werkdossier-stand-van-zaken"
   ],
   "id": "2026-09-14-weekoverzicht",
   "prioriteit": "P1",
   "routine": "denzel-week",
   "samenvatting": "De webshop had deze week 0 orders / €0 omzet bij 7 begonnen checkouts — door lars bevestigd als echt conversieprobleem, geen trackingfout. Structured data staat twee weken op rij alleen als Organization; homepage-title/description staan 4 weken open; 6 partnership-kandidaten wachten op beoordeling.",
   "status": "bekeken",
   "titel": "Denzel Weekoverzicht — 2026-09-14 (0 orders bij 7 checkouts)",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-14-weekoverzicht.md",
   "vervangt": [
    "2026-09-07-weekoverzicht"
   ]
  },
  {
   "acties": [
    {
     "afgevinkt": true,
     "id": "2026-09-07-weekoverzicht#ec78ee29",
     "prioriteit": "P1",
     "tekst": "Structured data-regressie onderzoeken en herstellen — overgenomen in Week 2026-09-14"
    },
    {
     "afgevinkt": true,
     "id": "2026-09-07-weekoverzicht#883d074a",
     "prioriteit": "P2",
     "tekst": "Homepage-title en meta description doorvoeren — overgenomen in Week 2026-09-14"
    },
    {
     "afgevinkt": true,
     "id": "2026-09-07-weekoverzicht#576d4e14",
     "prioriteit": "P3",
     "tekst": "Update Log structureel bijwerken — overgenomen in Week 2026-09-14"
    },
    {
     "afgevinkt": true,
     "id": "2026-09-07-weekoverzicht#006d589b",
     "prioriteit": "P2",
     "tekst": "Padelclub Rotterdam-uitsluiting verifiëren — overgenomen in Week 2026-09-14"
    },
    {
     "afgevinkt": true,
     "id": "2026-09-07-weekoverzicht#8ef1c2cb",
     "prioriteit": "P2",
     "tekst": "5 partnership-kandidaten beoordelen — overgenomen in Week 2026-09-14"
    },
    {
     "afgevinkt": true,
     "id": "2026-09-07-weekoverzicht#d54eb56f",
     "prioriteit": "P2",
     "tekst": "Analytics-vervolgstappen (funnel-rapport, purchase-events) — overgenomen in Week 2026-09-14"
    }
   ],
   "body_md": "# Denzel Weekoverzicht — 2026-09-07\n\n## In het kort\n\nVervangen door het weekoverzicht van 14 september; alle openstaande beslissingen zijn daar overgenomen. Bewaard als archief.\n\n## Bevindingen\n\n### Voortgang per hoofdagent\n\n- **Content Agent** — geen verandering. Video & Visuele Productie Agent (`/video-productie`, sinds 2026-08-09) nog steeds zonder output. Automatisering van periodieke content-ideeën blijft bewust niet gebouwd (lars wil dit eerst intern afstemmen met de content-afdeling) — technisch kan het al (Buffer-koppeling actief sinds 01-09), de inhoudelijke reden staat nog open.\n- **Partnership Agent** — B2B Klanten Agent: lijst laatst bijgewerkt 2026-08-25 (13 dagen geleden, buiten de 1-2 weken-marge) — zoekactie uitgevoerd, zie hieronder. Partnerships & Events Agent: lijst laatst bijgewerkt 2026-08-24 (14 dagen geleden, ook buiten de marge) — zoekactie uitgevoerd. Influencer & Creator Agent draait ongewijzigd actief via het IG-zoekscript. De twee MIDDEL-kandidaten van 2 weken terug (Urban Trail Rotterdam, Rotterdam Charity Run) wachten nog steeds op een eerste beoordeling van lars — nu aangevuld met een 3e (zie hieronder).\n- **Website Agent** — live-site-check en SEO-check beide uitgevoerd (geen egress-problemen deze week richting higrip.nl zelf). Belangrijkste bevinding: de structured data is **teruggegaan** ten opzichte van vorige week — zie hieronder. Titel/meta-description-probleem van de vorige 2 weken staat nog steeds open, geen wijziging doorgevoerd.\n\n### Wat ik deze week zelf heb opgepakt\n\n**B2B Klanten (Lijn A) — zoekactie uitgevoerd (lijst was 13 dagen oud):**\nWebsearch op pilates/sportscholen in Rotterdam-regio (prioriteit 1 uit [Partnership Strategie](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20A%20-%20B2B%20Klanten/Partnership%20Strategie.md)), getoetst aan [Evaluatiecriteria (B2B Klanten)](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20A%20-%20B2B%20Klanten/Evaluatiecriteria%20%28B2B%20Klanten%29.md). 2 nieuwe MIDDEL-kandidaten toegevoegd aan [Voorbeelden Gevonden Organisaties (B2B Klanten)](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20A%20-%20B2B%20Klanten/Voorbeelden%20Gevonden%20Organisaties%20%28B2B%20Klanten%29.md), geen dubbelingen met de bestaande lijst of [Pipeline Tracker](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Pipeline%20Tracker.md) (die is nog leeg):\n- **Fervor Pilates** (Berkel en Rodenrijs, Rotterdam-regio) — mat/reformer pilates + dans/peuteroudergym, ✉️ info@fervor.nl, 📞 085-0478378\n- **bbb health boutique Rotterdam** — ladies-only boutique gym (pilates, hot pilates, kickboksen, barre, HIIT, yoga), ✉️ rotterdam@bbbhealthboutique.nl, 📞 088-6440010\n\n**Zijvondst (niet toegevoegd, wel signaal):** een websearch naar padelclub-pro shops leverde op dat **Padelclub Rotterdam** (5 vestigingen, 30+ banen) een eigen clubshop/pro shop met kleding en accessoires heeft — dit lijkt tegenstrijdig met de bestaande uitsluiting in [Voorwaarden Samenwerking](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20B%20-%20Samenwerkingen/Voorwaarden%20Samenwerking.md) (\"Padelclub Rotterdam — geen event, geen pro shop\"). Niet zelf toegevoegd of gecorrigeerd (zou een eerdere afwijs-beslissing overschrijven, dat hoort niet bij deze routine) — zie \"Openstaande beslissingen\" hieronder.\n\n**Samenwerkingen/Events (Lijn B) — zoekactie uitgevoerd (lijst was 14 dagen oud):**\nWebsearch volgens [Zoek Script & Gids (Samenwerkingen)](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20B%20-%20Samenwerkingen/Zoek%20Script%20%26%20Gids%20%28Samenwerkingen%29.md) (voetbaltoernooien, streetball, obstacle run), getoetst aan [Voorwaarden Samenwerking](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20B%20-%20Samenwerkingen/Voorwaarden%20Samenwerking.md). 1 nieuwe MIDDEL-kandidaat toegevoegd aan [Voorbeelden Gevonden Organisaties (Events)](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20B%20-%20Samenwerkingen/Voorbeelden%20Gevonden%20Organisaties%20%28Events%29.md):\n- **Outdoor Valley Obstacle Run** (Bergschenhoek/Lansingerland, Rotterdam-regio, 10 mei 2026) — obstacle run, sterke performance/grip-fit, ~650 deelnemers (Mercy Ships-editie 2026 als indicatie), geen bevestigd sponsorprogramma gevonden dus MIDDEL i.p.v. HOOG\n\nTwee kandidaten expliciet **niet** toegevoegd, met reden:\n- **Harbour Run Rotterdam** (4 okt 2026) — 7.000 deelnemers = Mega-tier volgens [Voorwaarden Samenwerking](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20B%20-%20Samenwerkingen/Voorwaarden%20Samenwerking.md) (\"meestal te duur, kritisch toetsen, in praktijk vaak afwijzen\"), hoofdsponsor is al Havenbedrijf Rotterdam. Zelfde categorie als eerder afgewezen Premier Padel Rotterdam.\n- **CrossFit-wedstrijd Rotterdam** — geen concrete, actuele 2026-editie met contactgegevens gevonden, niet toegevoegd op basis van te weinig onderbouwing.\n\n**Live-site-check (07-09):**\n- Bereikbaar: `https://www.higrip.nl/` geeft HTTP 200, geen 404/500, geen zichtbare Liquid-errors.\n- Merknaam: overal correct \"HÏ Grip\" — geen \"HI Grip\"/\"Hi Grip\" in zichtbare paginatekst.\n- Vertrouwens-elementen aanwezig: e-mail (info@higrip.nl), telefoon, KVK/BTW-nummer, Trustpilot-link, klantlogo's (Hogeschool Rotterdam, Concordia, SYTH, Sport2000), \"3000+ sporters\"-social proof.\n- **Structured data is teruggegaan sinds vorige week.** Op 31-08 was bevestigd: Organization + WebSite + FAQPage (8 vragen) allemaal live. Vandaag (07-09) staat er nog maar **1 JSON-LD-blok** in de `<head>`, alleen `Organization` (naam + logo + url) — geen `WebSite`, geen `FAQPage`. Ook gecheckt op de losse FAQ-pagina (`/pages/veelgestelde-vragen`): ook daar geen FAQPage-schema. Dit is dus geen verplaatsing maar een echte regressie. Oorzaak onbekend (mogelijk een theme-republicatie of -wijziging na 31-08) — [Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md) is hier niet op aangepast, klopt dus sowieso al niet (zie ook vorige week) en nu extra achterhaald.\n\n**SEO-check (07-09):**\n- `<title>` = nog steeds **\"HÏ Grip\"** (7 tekens) — ongewijzigd t.o.v. 31-08, het voorstel van 2 weken terug is niet doorgevoerd.\n- `<meta name=\"description\">` = nog steeds **175 tekens** — ongewijzigd, zelfde tekst als 31-08.\n- Sitemap bereikbaar op `https://www.higrip.nl/sitemap.xml` (HTTP 200), geldige sitemap-index met 9 sub-sitemaps (producten/pagina's/collecties/blogs NL+EN + agentic discovery sitemap) — ongewijzigd.\n- FAQPage-inhoud kon dit keer niet gecheckt worden — de structured data zelf is er niet meer (zie hierboven).\n- Geen van deze bevindingen zelf aangepast — alleen gesignaleerd, wijziging is aan lars/Website Agent via [Technische Procedures](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Technische%20Procedures.md).\n\n### Openstaande beslissingen voor lars\n\n- **SEO-titel en meta-description homepage aanpassen** — nu 3 weken op de plank (voorstel stond al in [Week 2026-08-31](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Weekoverzicht/Week%202026-08-31.md)): titel te kort/geen keyword, description iets te lang. Kleine, lage-risico wijziging.\n- **Structured data-regressie onderzoeken.** WebSite- en FAQPage-JSON-LD stonden op 31-08 bevestigd live, nu (07-09) alleen nog Organization. Voorstel: nagaan wat er tussen 31-08 en nu aan het thema is gewijzigd (republicatie, app-update, handmatige aanpassing?) en de FAQPage/WebSite-snippets opnieuw toevoegen als dat inderdaad per ongeluk verdwenen is.\n- **[Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md) klopt structureel niet meer** — zegt nog \"nog niet naar live gekopieerd\" terwijl de praktijk inmiddels 2x is gewijzigd (wel live op 31-08, deels weer weg op 07-09). Buiten schrijfrechten van deze routine; voorstel is dat Website Agent dit bestand bij een volgende wijziging überhaupt als bron van waarheid gaat bijhouden.\n- **Padelclub Rotterdam — mogelijk verouderde uitsluiting.** Zie hierboven; nieuwe informatie suggereert een bestaande pro shop/clubwinkel, wat de eerdere afwijzing in [Voorwaarden Samenwerking](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20B%20-%20Samenwerkingen/Voorwaarden%20Samenwerking.md) zou kunnen tegenspreken. Voorstel: kort navragen/verifiëren, eventueel alsnog opnemen als Lijn A (B2B)-kandidaat i.p.v. Lijn B.\n- **5 kandidaten wachten op een eerste beoordeling:** Urban Trail Rotterdam & Rotterdam Charity Run (al 2 weken), Outdoor Valley Obstacle Run (nieuw), Fervor Pilates & bbb health boutique Rotterdam (nieuw).\n- **Merk & Bedrijf Database / Retailer Database** — nog steeds niet bevestigd of deze verwijderd mogen worden.\n\n### Vooruitblik — komende week\n\n1. **SEO-titel/description homepage doorvoeren** — het voorstel ligt er al 3 weken, kleine wijziging via de reguliere theme-procedure.\n2. **Structured data-regressie uitzoeken en herstellen** — WebSite/FAQPage staan niet meer live; eerst de oorzaak vinden (theme-log/republicatie-historie), dan opnieuw toevoegen.\n3. **[Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md) structureel bijwerken** zodra de structured data-situatie is opgelost, zodat het weer een betrouwbare bron is in plaats van 5 weken achter te lopen.\n4. **Beoordeling geven op de 5 openstaande partnership-kandidaten** (2 B2B, 3 Events) — sommige liggen al 2+ weken te wachten.\n5. **Analytics-vervolgstappen oppakken** — funnel-rapport op de historische GA4-data (mrt–dec 2025) en checken of purchase-events doorkomen; dit stond al 2 weken als actiepunt en is nog niet opgepakt.\n\n### AI-ontwikkelingen die relevant kunnen zijn\n\n1. **Shopify Rollouts (native A/B-testen, Winter '26, early access)** — ingebouwde split-testing direct in de Shopify-admin (Online Store > Themes), geen app of extra kosten nodig. Rechtstreeks bruikbaar voor `/shopify-cro`: de titel/description-wijziging en toekomstige CRO-voorstellen uit de [Conversie Optimalisatie Checklist](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Analyse/Conversie%20Optimalisatie%20Checklist.md) zouden hiermee eerst getest kunnen worden op een deel van het verkeer i.p.v. direct volledig door te voeren. Beperking: werkt nu alleen op het gepubliceerde thema via de theme-editor, geen Liquid-bestandswijzigingen.\n2. **Shopify's agentic-commerce-laag breidt verder uit** (Agentic Storefronts: producten zichtbaar in ChatGPT/Copilot/Perplexity, Storefront MCP). Maakt de structured-data-regressie van deze week extra relevant — niet alleen Google-SEO maar ook vindbaarheid voor AI-shopagents hangt af van correcte Organization/WebSite/FAQPage-schema's.\n3. **Buffer's AI Assistant staat nu op alle plannen, inclusief het gratis plan** (rewrites, hashtags, platform-specifieke varianten van één contentidee). Relevant zodra Content Agent-automatisering ter sprake komt met de content-afdeling — de tooling is er, alleen de interne afstemming ontbreekt nog.\n\n### Gerelateerde bestanden\n\n- [Stappenplan — Verdere Bouw](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Stappenplan%20%E2%80%94%20Verdere%20Bouw.md)\n- [Feedback & Iteratie Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Feedback%20%26%20Iteratie%20Log.md)\n- [Agent Werk & Kwaliteit Overzicht](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Agent%20Werk%20%26%20Kwaliteit%20Overzicht.md)\n\n## Acties\n\n- [x] P1 · Structured data-regressie onderzoeken en herstellen — overgenomen in Week 2026-09-14\n- [x] P2 · Homepage-title en meta description doorvoeren — overgenomen in Week 2026-09-14\n- [x] P3 · Update Log structureel bijwerken — overgenomen in Week 2026-09-14\n- [x] P2 · Padelclub Rotterdam-uitsluiting verifiëren — overgenomen in Week 2026-09-14\n- [x] P2 · 5 partnership-kandidaten beoordelen — overgenomen in Week 2026-09-14\n- [x] P2 · Analytics-vervolgstappen (funnel-rapport, purchase-events) — overgenomen in Week 2026-09-14\n\n## Bronnen\n\n- Origineel: [Week 2026-09-07](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Weekoverzicht/Week%202026-09-07.md) (`04_Agent_Infrastructuur/Beheer/Weekoverzicht/`)\n- Routine: [Denzel Weekoverzicht — Routine](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Denzel%20Weekoverzicht%20%E2%80%94%20Routine.md)\n\n## Aantekeningen",
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
   "prioriteit": "P2",
   "routine": "denzel-week",
   "samenvatting": "Structured data op live is teruggevallen naar alleen Organization (regressie sinds 31-08). Twee zoekacties: Fervor Pilates en bbb health boutique (B2B), Outdoor Valley Obstacle Run (Events). De uitsluiting van Padelclub Rotterdam is mogelijk verouderd. Shopify Rollouts (native A/B) in early access.",
   "status": "gearchiveerd",
   "titel": "Denzel Weekoverzicht — 2026-09-07",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-07-weekoverzicht.md",
   "vervangt": [
    "2026-08-31-weekoverzicht"
   ]
  },
  {
   "acties": [
    {
     "afgevinkt": false,
     "id": "2026-09-07-compliance-todo#24a0372f",
     "prioriteit": "P1",
     "tekst": "§1.1 Aansluiten bij UPV Textiel: aansluiting controleren, achterstallige jaren melden, jaaropgave (rond 1 augustus) agenderen"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-07-compliance-todo#8f1e2cfb",
     "prioriteit": "P2",
     "tekst": "§1.2 Verpakkingenadministratie opzetten (Verpact, aantonen onder 50.000 kg) + TikTok Shop Qualification Center EPR-sectie invullen"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-07-compliance-todo#d9728abb",
     "prioriteit": "P3",
     "tekst": "§1.3 Verzendverpakking toetsen aan PPWR: loze ruimte ≤ ~50%, conformiteitsverklaring bij leverancier"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-07-compliance-todo#30488d7c",
     "prioriteit": "P3",
     "tekst": "§1.4 Buitenlandse UPV regelen vóór de eerste zending naar een nieuw land"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-07-compliance-todo#841f80c9",
     "prioriteit": "P1",
     "tekst": "§2.1 Vezelsamenstelling op het label én op alle productpagina's (officiële EU-benamingen)"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-07-compliance-todo#371037f5",
     "prioriteit": "P2",
     "tekst": "§2.2 OEKO-TEX STANDARD 100-certificaat en ondertekende RSL-verklaring bij de fabrikant opvragen"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-07-compliance-todo#95bca180",
     "prioriteit": "P3",
     "tekst": "§2.3 SVHC-verklaring opvragen; SCIP-melding alleen indien boven 0,1%"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-07-compliance-todo#0dcfc0b5",
     "prioriteit": "P3",
     "tekst": "§2.4 Verboden biocide-claims (antibacterieel, antimicrobieel) opnemen in de copy-checklist"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-07-compliance-todo#c7eeb693",
     "prioriteit": "P1",
     "tekst": "§3.1 GPSR-gegevens op label, verpakking en als vast blok op elke productpagina; batchnummering per productieronde"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-07-compliance-todo#e54f05a9",
     "prioriteit": "P1",
     "tekst": "§3.2 Technische documentatie + risicoanalyse per product aanleggen (bewijsmap, 10 jaar)"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-07-compliance-todo#e62bb626",
     "prioriteit": "P2",
     "tekst": "§3.3 Klachtenregister opzetten en terugroepprocedure van één A4 schrijven"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-07-compliance-todo#08f96665",
     "prioriteit": "P1",
     "tekst": "§3.4 Claimstrategie skisokken met gelprotection vastleggen vóór de copy — comfort/drukverdeling, geen letselpreventie"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-07-compliance-todo#ef703dd7",
     "prioriteit": "P3",
     "tekst": "§3.5 Productaansprakelijkheidsverzekering met productdekking checken (richtlijn uiterlijk 9 december 2026 omgezet)"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-07-compliance-todo#70978779",
     "prioriteit": "P2",
     "tekst": "§4.1 Footer en contactpagina aanvullen: vestigingsadres, KvK-nummer, btw-id"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-07-compliance-todo#ad0b9d7c",
     "prioriteit": "P2",
     "tekst": "§4.2 Herroepingsrecht nalopen: retourpagina, modelformulier, terugbetaling incl. verzendkosten, bestelknop-tekst"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-07-compliance-todo#7c92cd94",
     "prioriteit": "P2",
     "tekst": "§4.3 Garantieteksten herschrijven — geen \"1 jaar garantie\" naast de wettelijke conformiteit"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-07-compliance-todo#5c31dc93",
     "prioriteit": "P2",
     "tekst": "§4.4 ODR-link uit footer en voorwaarden halen, vervangen door eigen klachtenprocedure"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-07-compliance-todo#c005d4e1",
     "prioriteit": "P3",
     "tekst": "§4.5 Keurmerk overwegen: Thuiswinkel Waarborg of WebwinkelKeur"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-07-compliance-todo#e0e2770b",
     "prioriteit": "P1",
     "tekst": "§5.1 Bewijsdossier gripclaims: bron van \"95%\" en \"1.17\" achterhalen, zo nodig labtest, goedgekeurde formulering vastleggen, \"1.500+ sporters\" onderbouwen"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-07-compliance-todo#d4e965b6",
     "prioriteit": "P1",
     "tekst": "§5.2 Van-prijzen toetsen aan de 30-dagenregel en een prijslogboek aanleggen"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-07-compliance-todo#c5185af4",
     "prioriteit": "P2",
     "tekst": "§5.3 Reviewbeleid publiceren (alinea bij reviewsectie + pagina)"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-07-compliance-todo#a41e0356",
     "prioriteit": "P2",
     "tekst": "§5.4 Duurzaamheidsclaims screenen — richtlijn (EU) 2024/825 van toepassing vanaf 27 september 2026 (deadline)"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-07-compliance-todo#5ca6f59a",
     "prioriteit": "P3",
     "tekst": "§5.5 Influencer-clausule (#advertentie, geen onbewezen claims) in alle samenwerkingscontracten"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-07-compliance-todo#e2a53ef3",
     "prioriteit": "P2",
     "tekst": "§6.1 Verwerkingsregister (AVG art. 30) opstellen"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-07-compliance-todo#8288285a",
     "prioriteit": "P2",
     "tekst": "§6.2 Verwerkersovereenkomsten per tool downloaden en archiveren"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-07-compliance-todo#e2fd0adb",
     "prioriteit": "P2",
     "tekst": "§6.3 Cookiebanner herzien: gelijkwaardige weiger-knop, Consent Mode v2, testen met schone browser"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-07-compliance-todo#c92ff3a9",
     "prioriteit": "P2",
     "tekst": "§6.4 Privacyverklaring laten matchen met de werkelijke toolset"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-07-compliance-todo#3d04c3b3",
     "prioriteit": "P3",
     "tekst": "§6.5 Datalekprocedure (één A4) en intern datalekregister"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-07-compliance-todo#1be6b788",
     "prioriteit": "P2",
     "tekst": "§6.6 E-mail- en SMS-marketing: inschrijfformulieren, pop-ups en checkout-opt-ins nalopen"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-07-compliance-todo#25efb9af",
     "prioriteit": "P3",
     "tekst": "§7.1 EU-omzet buiten NL monitoren; bij nadering €10.000 aanmelden voor OSS"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-07-compliance-todo#c217b298",
     "prioriteit": "P3",
     "tekst": "§7.2 Importdossier: EORI-nummer, art. 23-vergunning, GN-post 6115 en oorsprongsdocumenten"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-07-compliance-todo#f4e503ea",
     "prioriteit": "P3",
     "tekst": "§7.3 KvK-gegevens controleren (SBI-code, vestigingsadres)"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-07-compliance-todo#b8f1e4b9",
     "prioriteit": "P3",
     "tekst": "§7.4/§7.5 B2B-betaaltermijn 30 dagen in voorwaarden; RI&E zodra iemand in dienst komt"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-07-compliance-todo#e2982cd0",
     "prioriteit": "P3",
     "tekst": "§8.1 WCAG 2.1 AA in het thema: contrast #CCFF00, alt-teksten, formulierlabels, focus-states, ondertiteling"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-07-compliance-todo#d0aadc5c",
     "prioriteit": "P2",
     "tekst": "§9.1 Eén centrale compliance-bewijsmap inrichten (OneDrive naast de vault)"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-07-compliance-todo#0c0055d2",
     "prioriteit": "P3",
     "tekst": "§9.2 Jaarlijkse compliance-check in Q1 agenderen"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-07-compliance-todo#fed0c5d5",
     "prioriteit": "P2",
     "tekst": "Openstaande interne vragen beantwoorden: UPV-aansluiting, bron gripcijfers, materiaal grip-print, medewerkers/omzet, exportlanden, AVB"
    }
   ],
   "body_md": "# Compliance-verplichtingen NL/EU — to-do per categorie\n\n## In het kort\n\nPrioriteit hieronder volgt de legenda van de bron: 🔴 rechtsrisico loopt nu al → P1, 🟠 binnen 30 dagen → P2, 🟡/⚪ → P3. Werkdocument, geen juridisch advies — 🔴-punten laten toetsen (jurist, Modint, Thuiswinkel.org). Tweede datum om te onthouden: Productaansprakelijkheidsrichtlijn uiterlijk 9 december 2026 in NL recht.\n\n## Bevindingen\n\n> Alle wettelijke verplichtingen (NL + EU) waar HÏ Grip aan moet voldoen, gesorteerd per categorie. Per taak staat **waar** je het regelt en **hoe**. Opgesteld 2026-09-07.\n>\n> Dit is een werkdocument, geen juridisch advies. Laat de items met 🔴 toetsen door een jurist of via Modint / Thuiswinkel.org. Portaal-URL's kunnen wijzigen — verifieer bij eerste gebruik.\n\n---\n\n### Legenda\n\n| Symbool | Betekenis |\n|---|---|\n| 🔴 | Rechtsrisico loopt nu al — direct oppakken |\n| 🟠 | Binnen 30 dagen regelen |\n| 🟡 | Vóór volgende lancering / dit kwartaal |\n| ⚪ | Monitoren, nog niet actief |\n\n---\n\n### 0. Start hier — de vijf die als eerste moeten\n\n- [ ] UPV Textiel-aansluiting (§1.1)\n- [ ] GPSR fabrikantgegevens op label + productpagina (§3.1)\n- [ ] Bewijsdossier \"95% meer grip\" en \"1.17\" (§5.1)\n- [ ] Van-prijzen toetsen aan 30-dagenregel (§5.2)\n- [ ] Vezelsamenstelling op alle productpagina's (§2.1)\n\n---\n\n### 1. Producentenverantwoordelijkheid & Afval\n\n#### 1.1 🔴 Aansluiten bij UPV Textiel\n\n- [ ] Aansluiting controleren en zo nodig regelen\n- [ ] Achterstallige jaren melden\n- [ ] Jaarlijkse opgave in de agenda zetten\n\n**Wat:** Besluit UPV textiel (sinds 1 juli 2023). Geldt voor iedereen die textiel als eerste op de NL-markt brengt. Sokken vallen onder \"kleding\". Géén ondergrens — ook 500 paar telt.\n\n**Waar:** Stichting UPV Textiel (`upvtextiel.nl`) — collectieve uitvoerder. Alternatief: individueel melden bij Rijkswaterstaat via het meldportaal UPV Textiel (te vinden via `afvalcirculair.nl` of `rijkswaterstaat.nl`).\n\n**Hoe:**\n1. Controleer of HÏ Grip al is aangesloten (navragen bij boekhouder/oprichter).\n2. Zo niet: aanmeldformulier invullen bij Stichting UPV Textiel — nodig zijn KvK-nummer, btw-id en de jaarlijkse hoeveelheid textiel in **kg**.\n3. Bepaal het gewicht: aantal verkochte paren × gewicht per paar (weeg een paar inclusief hangtag en label).\n4. Ook achterstallige jaren melden — niet-melden is een economisch delict.\n\n**Terugkerend:** jaarlijkse opgave, deadline in de zomer (rond 1 augustus) over het voorgaande kalenderjaar.\n\n**Bewijs bewaren:** bevestiging aansluiting, jaaropgaven, facturen afvalbeheerbijdrage.\n\n#### 1.2 🟠 UPV Verpakkingen — Verpact (voorheen Afvalfonds Verpakkingen)\n\n- [ ] Verpakkingenadministratie opzetten (berekening onder 50.000 kg)\n- [ ] Leveranciersverklaringen PPWR-conformiteit verzamelen\n- [ ] TikTok Shop Qualification Center → EPR-sectie invullen (zie hieronder)\n\n> **Correctie 2026-09-14:** eerder stond hier dat de opgaveplicht onder 50.000 kg blijft. Dat klopt niet. Afvalfonds Verpakkingen heet inmiddels **Verpact**.\n\n**Wat:** UPV Verpakkingen. Je verstuurt pakketjes, dus je brengt verpakking op de markt — de verzenddoos én de verpakking waarin de sokken uit de fabriek komen (polybag, kartonnen wikkel, hangtag). Bij verzending via een fulfilmentpartner blijft HÏ Grip de producent.\n\n**Regel NL (2026):** onder **50.000 kg per kalenderjaar** hoef je **geen aangifte** te doen en **geen afvalbeheersbijdrage** te betalen. Er is dan ook **geen Verpact-registratienummer**. Wél verplicht: kunnen aantonen dát je onder de drempel zit — Verpact kan dat controleren.\n\n**Uitzondering:** voor statiegeldverpakkingen en single-use plastics (SUP) geldt géén drempel. Een polybag om sokken valt niet onder SUP; check dit wel als je ooit andere plastic items meelevert.\n\n**Waar:** `verpact.nl` → \"Moet ik aangifte doen?\" + Handreiking verpakkingenadministratie.\n\n**Hoe — administratie:**\n1. Weeg per verpakkingstype: verzenddoos/-zak, tape, vulmateriaal, polybag, kartonnen wikkel, hangtag.\n2. Vermenigvuldig met het aantal zendingen/verkochte paren per jaar, per materiaalsoort.\n3. Leg de berekening vast in één spreadsheet per kalenderjaar en bewaar die in de bewijsmap (§9).\n4. Herhaal jaarlijks — bij groei of een nieuw kanaal (TikTok Shop) kan het volume snel oplopen.\n\n**TikTok Shop (NL/BE, live sinds 15 juni 2026):**\n- EPR-gegevens lever je aan via **Seller Center → My Account → Account settings → Qualification Center → Extended Producer Responsibility**.\n- De juridische entiteit van de EPR-registratie moet **exact gelijk** zijn aan de bedrijfsnaam op je TikTok Shop-account.\n- **Nederland (bevestigd uit Seller Center, 2026-09-14):** géén verplicht nummer en géén automatische inschrijving. Je levert zelf EPR-informatie aan per productcategorie; TikTok vertrouwt erop dat die klopt en kan controleren.\n  - **Verpakking:** onder de Verpact-drempel is er geen nummer → niets invullen. Vul nooit een verzonnen nummer in.\n  - **Textiel:** voer hier de **UPV Textiel-registratie (§1.1)** in. Die kent géén drempel en is dus wél verplicht.\n- **Frankrijk, Italië, Spanje:** hier is een EPR-nummer **verplicht**. Zonder geldig nummer word je **automatisch ingeschreven voor EPR Pay On Behalf** (TikTok rekent kosten). Welke categorieën POB per land dekt en hoe je zelf registreert: zie §1.4. Duitsland heeft géén POB.\n- **Verenigd Koninkrijk:** alleen relevant bij verkoop op TikTok Shop UK. Als niet-Brits bedrijf word je dan automatisch ingeschreven in het EPR-bijdrageprogramma.\n- Verstuur je via TikTok Shop ook naar **Belgische** klanten → zie §1.4.\n\n**Komt eraan:** onder de PPWR komt een verplicht nationaal producentenregister (verwacht vanaf **augustus 2027**, eerste rapportagejaar 2028). De 50.000 kg-drempel vervalt dan naar verwachting; iedereen krijgt een registratienummer. Nederlandse uitvoeringsregels zijn nog niet gepubliceerd.\n\n#### 1.3 🟡 Verzendverpakking toetsen aan PPWR\n\n- [ ] Loze ruimte in de verzenddoos meten\n- [ ] Conformiteitsverklaring bij verpakkingsleverancier opvragen\n\n**Wat:** EU Verpakkingsverordening 2025/40, van toepassing sinds 12 augustus 2026. Belangrijkste nu: **loze ruimte in e-commerceverpakking max ongeveer 50%**.\n\n**Waar:** intern, samen met de fulfilmentpartner en verpakkingsleverancier.\n\n**Hoe:**\n1. Meet de gebruikte doos tegen het volume van een bestelling van 1 paar.\n2. Te veel leegte? Stap over op een kleinere doos of verzendzak per bestelgrootte.\n3. Vraag de leverancier om een PPWR-conformiteitsverklaring en recyclebaarheidsinfo.\n\n**Later:** materiaal- en sorteerlabel op verpakking wordt gefaseerd verplicht — heropnemen in 2027.\n\n#### 1.4 ⚪ Buitenlandse UPV bij export\n\n- [ ] Registreren vóór de eerste zending naar een nieuw land\n\n**Wat:** verkoop je aan consumenten in een ander land, dan geldt daar een eigen registratieplicht. De Nederlandse 50.000 kg-drempel geldt daar níét. Stand 2026-09-14.\n\n| Land | Verpakking | Textiel (sokken) | Gemachtigde nodig? | TikTok Pay On Behalf (POB) |\n|---|---|---|---|---|\n| **België** | Fost Plus / Valipac. Drempel **300 kg/jaar**; daaronder alleen informatieplicht richting de IVC. | nog geen EPR | nee | n.v.t. |\n| **Duitsland** | **LUCID** (gratis) + contract met een **duaal systeem**. **Geen drempel.** | nog geen EPR | nee | **Niet beschikbaar** — zonder eigen LUCID-nummer geen verkoop |\n| **Frankrijk** | Eco-organisme **Citeo** (of Léko/Adelphe) → ADEME geeft een **IDU** per stroom. | **Refashion** → aparte IDU. Wél EPR. | **Ja** — Franse gemachtigde verplicht sinds juli 2026 (te verifiëren of dit ook voor EU-bedrijven geldt) | Ja: verpakking + textiel |\n| **Spanje** | Registratie in het **RPP** + aansluiting bij **Ecoembes**. Geen drempel. Spaans NIF nodig. | nog geen EPR (decreet in voorbereiding) | **Ja** — RD 1055/2022 art. 17.2 | Ja: alleen verpakking |\n| **Italië** | Direct lid worden van **CONAI**. | nog geen EPR (decreet in concept) | nee, niet voor verpakking | Alleen batterijen — **verpakking niet gedekt** |\n\n**TikTok POB-tarieven (2025):** Frankrijk verpakking 0,49% en Spanje verpakking 0,89% van het orderbedrag. Het textieltarief voor Frankrijk staat in het POB-beleid in Seller Center. POB geldt alleen voor verkopen via TikTok, niet voor de eigen webshop.\n\n**Advies bij kleine volumes:**\n- **Frankrijk en Spanje via TikTok:** gebruik POB. Eigen registratie vereist een lokale gemachtigde en kost al snel meer dan het POB-percentage.\n- **Duitsland:** zelf regelen — (1) registreren op LUCID en DE-registratienummer ontvangen, (2) contract met een duaal systeem (bijv. Lizenzero, Interzero, Der Grüne Punkt; indicatief €50–300/jaar), (3) dezelfde hoeveelheden melden in LUCID als aan het systeem, (4) nummer invoeren in TikTok Qualification Center.\n- **Italië:** CONAI-lidmaatschap is wettelijk verplicht en POB dekt het niet. Check eerst of TikTok Shop Italië het nummer vraagt.\n- **Eigen webshop naar die landen:** dan heb je de eigen registratie nodig; POB helpt dan niet.\n\n**Let op TikTok Shop:** de NL/BE-shop kan Belgische bestellingen opleveren. Houd het verpakkingsgewicht naar België apart bij.\n\n**Markten beheren in TikTok Shop:** andere EU-landen staan níét standaard aan. Je verkoopt er pas als je **Sell Across EU** activeert én producten via de **Global Listing Tool** naar dat land synchroniseert. Uitzetten = in Seller Center naar die markt wisselen en de producten daar deactiveren. Let op: je Account Health Rating telt EU-breed, dus overtredingen in één land raken alle markten.\n\n**Ook nodig bij een nieuw land:** textieletiket in de landstaal (§2.1), GPSR-gegevens (§3.1), btw via OSS boven €10.000 EU-afstandsverkopen (§7.1). Frankrijk: **Triman-logo + Info-tri** op verpakking en textiel.\n\n**Trigger:** zodra een buitenlandse markt actief wordt geopend — zie [Website Structuur & Sitemap](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Strategie/Website%20Structuur%20%26%20Sitemap.md).\n\n---\n\n### 2. Productwetgeving & Etikettering\n\n#### 2.1 🔴 Vezelsamenstelling op label én productpagina\n\n- [ ] Samenstelling opvragen bij fabrikant\n- [ ] Blok toevoegen aan alle Shopify-productpagina's\n- [ ] Fysiek label controleren\n\n**Wat:** Textieletiketteringsverordening (EU) 1007/2011. Verplicht, ook online vóór aankoop.\n\n**Waar:** fysiek label (via fabrikant) + productpagina's op `higrip.nl`.\n\n**Hoe:**\n1. Vraag de exacte samenstelling in gewichtspercentages, opgeteld tot 100%.\n2. Gebruik de officiële EU-benamingen: katoen, polyamide, elastaan, polyester, viscose. Niet \"nylon\" of \"lycra\".\n3. Nederlandstalig, duurzaam en leesbaar op een aangehecht label.\n4. Zet het blok op elke productpagina, bijvoorbeeld in de accordeon \"Materiaal & onderhoud\".\n5. Bevat het product niet-textiele delen van dierlijke oorsprong → verplichte vermelding toevoegen.\n\n**Let op:** wasvoorschriften (GINETEX-symbolen) zijn níét verplicht, wel verstandig. Herkomstland is niet verplicht — vermeld je het, dan moet het kloppen.\n\n#### 2.2 🟠 RSL- en stoffendossier bij de fabrikant opvragen\n\n- [ ] OEKO-TEX STANDARD 100-certificaat opvragen\n- [ ] Ondertekende RSL-verklaring opvragen\n- [ ] Eis opnemen in inkoopvoorwaarden\n\n**Wat:** REACH (EG) 1907/2006 bijlage XVII — azokleurstoffen, nikkel, chroom VI, CMR-stoffen in textiel, NPE.\n\n**Waar:** bij je producent; certificering via `oeko-tex.com` (STANDARD 100).\n\n**Hoe:** het OEKO-TEX-certificaat dekt het gros van de REACH-beperkingen praktisch af. Vraag daarnaast een ondertekende RSL-verklaring (Restricted Substances List) en beschikbare testrapporten. Zet dit als vaste eis in je inkoopvoorwaarden voor nieuwe leveranciers.\n\n#### 2.3 🟡 SVHC- en SCIP-check\n\n- [ ] SVHC-verklaring bij fabrikant opvragen\n\n**Wat:** bevat een onderdeel meer dan 0,1 gewichtsprocent een zeer zorgwekkende stof, dan geldt een informatieplicht richting afnemers én melding in de SCIP-database.\n\n**Waar:** ECHA (`echa.europa.eu`).\n\n**Hoe:** vraag expliciet om een SVHC-verklaring. Bij \"geen SVHC boven 0,1%\" → verklaring archiveren, geen melding nodig. Bij wél → SCIP-melding doen.\n\n#### 2.4 🟡 Geen biocide-claims zonder dossier\n\n- [ ] Verboden woorden opnemen in de copy-checklist\n\n**Wat:** Biocidenverordening 528/2012. Claim je \"antibacterieel\", \"antimicrobieel\" of \"anti-geur door zilverionen\", dan is de sok een *behandeld voorwerp* met eigen etiketteringsplichten.\n\n**Waar:** intern, als copyrichtlijn in [Brand Voice & Tone of Voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md).\n\n**Hoe:** **verboden**: antibacterieel, antimicrobieel, doodt bacteriën. **Toegestaan**: \"blijft langer fris\", \"ademend\", \"vochtregulerend\". Wil je de claim wél voeren → goedgekeurde werkzame stof en etikettering regelen vóór lancering.\n\n---\n\n### 3. Productveiligheid (GPSR) & de skisok-lijn\n\n#### 3.1 🔴 GPSR-gegevens op product, verpakking en webshop\n\n- [ ] Fabrikant-/importeurgegevens op label en verpakking\n- [ ] Batchnummering invoeren per productieronde\n- [ ] Vast GPSR-blok bouwen in de Shopify-productsectie\n\n**Wat:** Algemene Productveiligheidsverordening (EU) 2023/988, van kracht sinds 13 december 2024. Meest onderschatte verplichting voor D2C-merken; de NVWA handhaaft hierop.\n\n**Waar:** labels en verpakking (via fabrikant), productpagina's op `higrip.nl`, interne documentatie.\n\n**Hoe:**\n1. **Op product of verpakking:** naam + handelsmerk, postadres én **e-mailadres** van HÏ Grip, plus type-, batch- of serienummer voor traceerbaarheid.\n2. HÏ Grip verkoopt onder eigen merknaam en is daarmee **zelf de fabrikant** in de zin van de GPSR — ook als een fabriek in het buitenland produceert. De fabriek hoort níét als fabrikant op het label. Omdat HÏ Grip in de EU gevestigd is, is er geen aparte \"verantwoordelijke persoon\" nodig.\n3. **Op elke productpagina online:** dezelfde gegevens, productidentificatie (incl. foto en type) en eventuele waarschuwingen. Bouw dit als vast blok, niet per product handmatig. Geldt ook voor de **TikTok Shop-listings** (GPSR-velden bij het product) en voor elk land waar je verkoopt, in de taal van dat land.\n4. Voeg een batchnummer toe per productieronde, bijvoorbeeld `HG-2026-03`.\n\n**Bewijs bewaren:** 10 jaar.\n\n#### 3.2 🔴 Technische documentatie + risicoanalyse per product\n\n- [ ] Per artikel één dossier aanleggen\n\n**Wat:** GPSR verplicht een intern dossier per product.\n\n**Waar:** bewijsmap (§9).\n\n**Hoe:** per artikel één document met: productomschrijving en foto's, materialen en samenstelling, fabrikant en adres, risicoanalyse (denk aan verstikkingsgevaar hangtag, huidirritatie door kleurstof, valgevaar bij slijtage van de grip-print), genomen maatregelen, testrapporten en batchnummers.\n\n#### 3.3 🟠 Klachtenregister en terugroepprocedure\n\n- [ ] Klachtenregister opzetten\n- [ ] Terugroepprocedure van één A4 schrijven\n\n**Waar:** intern register (spreadsheet of Shopify-tags) + Safety Business Gateway van de Europese Commissie (via `ec.europa.eu`) voor meldingen.\n\n**Hoe:**\n1. Register met datum, klacht, product, batch en afhandeling.\n2. Terugroepprocedure: wie beslist, hoe je klanten bereikt (e-mailbestand plus bestelgegevens), hoe je de NVWA informeert.\n3. Ongeval of ernstig veiligheidsrisico → melden via de Safety Business Gateway.\n\n#### 3.4 🔴 Claimstrategie skisokken met gelprotection vastleggen — vóór de copy\n\n- [ ] Besluit nemen en vastleggen in de productbriefing\n\n**Wat:** het regime hangt volledig af van je claim. Dit is een go/no-go-beslissing die je vóór de copywriting neemt.\n\n| Claim | Regime | Gevolg |\n|---|---|---|\n| \"extra demping en comfort\" | gewoon textiel | alleen §2 en §3.1 |\n| \"beschermt tegen stoten of drukletsel\" | **PBM-verordening (EU) 2016/425** | CE-markering, EU-typeonderzoek door notified body, technisch dossier, conformiteitsverklaring — maanden werk, duizenden euro's |\n| \"voorkomt blessures\", \"medische compressie\" | **MDR (EU) 2017/745** | medisch hulpmiddel, CE, UDI, EUDAMED-registratie |\n\n**Waar:** intern besluit in het productbriefing-document; bij PBM-route een notified body (te vinden via `rva.nl`).\n\n**Advies:** positioneer op comfort, drukverdeling en performance — niet op letselpreventie. Leg het besluit vast zodat copy, packaging en ads niet alsnog \"bescherming\" claimen.\n\n#### 3.5 🟡 Productaansprakelijkheidsverzekering\n\n- [ ] AVB met productdekking checken of afsluiten\n\n**Wat:** de nieuwe Productaansprakelijkheidsrichtlijn (EU) 2024/2853 moet uiterlijk 9 december 2026 in NL recht zijn omgezet. Risicoaansprakelijkheid voor gebrekkige producten.\n\n**Waar:** je verzekeringsadviseur of assurantiemakelaar.\n\n**Hoe:** vraag een AVB met expliciete productdekking inclusief recall-kosten, en toets het verzekerd bedrag aan omzet en exportlanden.\n\n---\n\n### 4. Webshop & Consumentenrecht\n\n#### 4.1 🟠 Wettelijke informatieplichten op de site\n\n- [ ] Footer en contactpagina aanvullen\n\n**Waar:** footer + pagina \"Contact\" of \"Over ons\" op `higrip.nl`.\n\n**Hoe:** vermeld handelsnaam, **vestigingsadres**, e-mailadres, telefoonnummer, **KvK-nummer** en **btw-identificatienummer**. Grondslag: art. 3:15d en 6:230m BW.\n\n#### 4.2 🟠 Herroepingsrecht correct ingericht\n\n- [ ] Retourpagina en voorwaarden nalopen\n- [ ] Modelformulier toevoegen\n- [ ] Bestelknop-tekst checken\n\n**Waar:** pagina \"Retourneren\", algemene voorwaarden, orderbevestigingsmail.\n\n**Hoe:**\n1. 14 dagen bedenktijd vanaf ontvangst, duidelijk vermeld. **Vermeld je het niet, dan wordt de termijn 12 maanden.**\n2. Voeg het **modelformulier voor herroeping** toe (downloadbaar of in de voorwaarden).\n3. Terugbetaling binnen 14 dagen, **inclusief de goedkoopste standaard verzendkosten heen**.\n4. Retourkosten mogen bij de klant, mits vooraf duidelijk vermeld.\n5. Lever binnen 30 dagen tenzij anders afgesproken.\n6. De bestelknop moet de betalingsverplichting uitdrukken. Shopify's \"Nu betalen\" is akkoord, \"Doorgaan\" niet.\n\n#### 4.3 🟠 Geen misleidende garantietekst\n\n- [ ] Alle garantieteksten herschrijven\n\n**Waar:** productpagina's, voorwaarden, FAQ.\n\n**Hoe:** schrap formuleringen als \"1 jaar garantie\". De wettelijke conformiteit is wat de consument redelijkerwijs mag verwachten, in de praktijk minstens 2 jaar. Een kortere \"garantie\" naast de wet noemen is misleidend. Bied je extra commerciële garantie, noem die dan expliciet **naast** de wettelijke rechten.\n\n#### 4.4 🟠 ODR-link verwijderen\n\n- [ ] Link uit footer en voorwaarden halen\n\n**Wat:** het EU ODR-platform is per 20 juli 2025 opgeheven. De verplichte link is vervallen en verwijst nu naar niets.\n\n**Hoe:** verwijderen en vervangen door je eigen klachtenprocedure met contactgegevens en reactietermijn.\n\n#### 4.5 🟡 Keurmerk overwegen\n\n- [ ] Thuiswinkel Waarborg en WebwinkelKeur naast elkaar zetten\n\n**Waar:** `thuiswinkel.org` of `webwinkelkeur.nl`.\n\n**Hoe:** levert juridisch getoetste algemene voorwaarden, een geschillenregeling en conversievoordeel. Vergelijk kosten, doorlooptijd en of hun voorwaarden botsen met jullie retourbeleid.\n\n---\n\n### 5. Marketing, Claims & Reviews\n\n#### 5.1 🔴 Bewijsdossier voor de gripclaims\n\n- [ ] Bron van \"95%\" en \"1.17\" achterhalen\n- [ ] Zo nodig test laten uitvoeren\n- [ ] Goedgekeurde claimformulering vastleggen\n- [ ] \"1.500+ sporters\" onderbouwen\n\n**Wat:** \"95% meer grip\" en \"wrijvingscoëfficiënt 1.17\" zijn meetbare claims en moeten bewijsbaar zijn. Zonder dossier is dit een misleidende handelspraktijk (art. 6:193a e.v. BW). Dit raakt de kernboodschap van het hele merk.\n\n**Waar:** bewijsmap (§9); testrapport opvragen bij de fabrikant of laten uitvoeren door een onafhankelijk textiellab.\n\n**Hoe:**\n1. Achterhaal de bron van beide cijfers: wie heeft gemeten, met welke methode, tegen welk referentieproduct?\n2. Ontbreekt een rapport → wrijvingstest laten uitvoeren bij een geaccrediteerd lab.\n3. Voeg een onderbouwende voetnoot toe aan de copy, bijvoorbeeld: *\"t.o.v. een standaard katoenen sportsok, gemeten volgens [methode] door [lab], [datum].\"*\n4. Leg de goedgekeurde formulering vast in [Brand Voice & Tone of Voice](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Voice%20%26%20Tone%20of%20Voice.md), zodat elke agent en copywriter dezelfde tekst gebruikt.\n\n#### 5.2 🔴 Van-prijzen toetsen aan de 30-dagenregel\n\n- [ ] Alle vergelijkingsprijzen in Shopify nalopen\n- [ ] Prijslogboek aanleggen\n\n**Wat:** Omnibus-richtlijn. Bij elke prijsvermindering moet je de **laagste prijs van de afgelopen 30 dagen** als referentie tonen. Doorlopende \"van-prijzen\" die nooit gevraagd zijn, zijn verboden. De ACM beboet hier actief op.\n\n**Waar:** Shopify → producten → *Vergelijkingsprijs*, plus alle ads en e-mails.\n\n**Hoe:**\n1. Loop alle producten met een ingevulde vergelijkingsprijs langs.\n2. Is die prijs de laatste 30 dagen daadwerkelijk gevraagd? Zo nee → leegmaken.\n3. Leg een prijslogboek aan (datum, product, prijs) zodat je bij een sale kunt aantonen wat de laagste 30-daagse prijs was.\n4. Bundelkortingen (\"3 paar voor €X\") mogen vrij, mits de stukprijs klopt.\n\n#### 5.3 🟠 Reviewbeleid publiceren\n\n- [ ] Alinea bij de reviewsectie plaatsen\n- [ ] Pagina \"Reviewbeleid\" aanmaken\n\n**Wat:** je mag alleen \"geverifieerde reviews\" claimen als je verifieert dat de reviewer gekocht heeft. Nepreviews en het selectief wissen van negatieve reviews staan op de zwarte lijst van oneerlijke handelspraktijken.\n\n**Hoe:** beschrijf of en hoe je verifieert (bijvoorbeeld: \"reviews worden alleen gevraagd aan klanten met een afgeronde bestelling\"), of je modereert en op welke gronden. Trustpilot-sterren alleen in `#00b67a` — zie [Logo & Kleurenpalet](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Logo%20%26%20Kleurenpalet.md).\n\n#### 5.4 🟠 Duurzaamheidsclaims screenen\n\n- [ ] Alle groene claims inventariseren en toetsen\n\n**Wat:** de Richtlijn Empowering Consumers (EU) 2024/825 is van toepassing vanaf **27 september 2026**. Generieke claims (\"duurzaam\", \"milieuvriendelijk\", \"klimaatneutraal\" op basis van compensatie) en keurmerken zonder certificeringssysteem worden verboden.\n\n**Waar:** ACM Leidraad Duurzaamheidsclaims op `acm.nl`; toetsing van copy op site, packaging en social.\n\n**Hoe:** per claim beoordelen of die specifiek, meetbaar en onderbouwd is. Zo niet: schrappen of concreet maken — \"verpakking van 100% gerecycled karton, FSC-gecertificeerd\" in plaats van \"duurzame verpakking\".\n\n#### 5.5 🟡 Influencerafspraken vastleggen\n\n- [ ] Clausule toevoegen aan alle samenwerkingscontracten\n\n**Wat:** Reclamecode Social Media & Influencer Marketing — verplichte reclame-aanduiding, ook bij gratis producten. Jij bent als adverteerder medeverantwoordelijk.\n\n**Waar:** `reclamecode.nl`; contracten in de flow van [Zoek Script & Gids](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/Influencers_Creators/Zoek%20Script%20%26%20Gids.md).\n\n**Hoe:** neem per samenwerking op: verplichte vermelding #advertentie of #betaaldesamenwerking, zichtbaar in de eerste regels, en geen onbewezen productclaims. Bij grote accounts: check registratieplicht bij het Commissariaat voor de Media (`cvdm.nl`).\n\n---\n\n### 6. Privacy, Cookies & E-mail\n\n#### 6.1 🟠 Verwerkingsregister opstellen\n\n- [ ] Register invullen met alle verwerkingen\n\n**Wat:** AVG art. 30. Ook voor kleine bedrijven, want je verwerkt structureel klantgegevens.\n\n**Waar:** intern document; model te vinden op `autoriteitpersoonsgegevens.nl`.\n\n**Hoe:** per verwerking vastleggen: doel, categorieën betrokkenen, gegevens, ontvangers (Shopify, e-mailtool, fulfilment, analytics), bewaartermijn en doorgifte buiten de EU. Bewaartermijnen: facturen 7 jaar (fiscaal), marketingdata korter.\n\n#### 6.2 🟠 Verwerkersovereenkomsten verzamelen\n\n- [ ] Per tool de DPA downloaden en archiveren\n\n**Waar:** in de accountinstellingen van elke tool — zie [API & Tool Connections](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/API%20%26%20Tool%20Connections.md) en [Shopify App Stack](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Shopify%20App%20Stack.md) voor de volledige lijst.\n\n**Hoe:** per leverancier (Shopify, e-mailtool, review-tool, fulfilment, analytics, ads) de DPA accepteren en archiveren. Check bij Amerikaanse partijen of ze onder het **EU-US Data Privacy Framework** gecertificeerd zijn.\n\n#### 6.3 🟠 Cookiebanner herzien\n\n- [ ] Weiger-knop gelijkwaardig maken\n- [ ] Consent Mode v2 koppelen\n- [ ] Testen met een schone browser\n\n**Wat:** art. 11.7a Telecommunicatiewet. Analytics- en trackingcookies (GA4, Meta Pixel, TikTok Pixel) vereisen voorafgaande toestemming. AP en ACM handhaven hier actiever.\n\n**Waar:** Shopify → Klantprivacy of de consent-app; Google Consent Mode v2.\n\n**Hoe:**\n1. **Weigeren moet net zo makkelijk zijn als accepteren** — gelijkwaardige knoppen op het eerste scherm. Geen cookiewall met alleen \"Accepteren\".\n2. Geen enkele tracker laden vóór toestemming.\n3. Koppel Shopify's Customer Privacy API aan Google Consent Mode v2 — dat is bovendien nodig om Google Ads-conversies te blijven meten.\n4. Test met een schone browser of de pixels echt pas ná toestemming vuren.\n\n#### 6.4 🟠 Privacyverklaring actualiseren\n\n- [ ] Tekst laten matchen met de werkelijke toolset\n\n**Waar:** `higrip.nl/policies/privacy-policy`.\n\n**Hoe:** benoem alle tools uit §6.2, plus grondslagen, bewaartermijnen, rechten van betrokkenen, contactgegevens en doorgifte naar de VS.\n\n#### 6.5 🟡 Datalekprocedure\n\n- [ ] Procedure van één A4 schrijven\n- [ ] Intern datalekregister aanleggen\n\n**Waar:** intern + meldloket op `autoriteitpersoonsgegevens.nl`.\n\n**Hoe:** leg vast wie constateert, wie beoordeelt, melding binnen **72 uur** bij de AP indien nodig, en wanneer je betrokkenen informeert. Houd ook lekken bij die je niet meldt.\n\n#### 6.6 🟠 E-mail- en SMS-marketing toetsen\n\n- [ ] Alle inschrijfformulieren en pop-ups nalopen\n\n**Wat:** art. 11.7 Telecommunicatiewet. Opt-in vereist, behalve de klantuitzondering: bestaande klant + eigen soortgelijke producten + afmeldmogelijkheid.\n\n**Hoe:** geen voor-aangevinkte vakjes; afmeldlink in elk bericht én afmeldmogelijkheid op het moment van verzamelen; duidelijke afzender. Check ook pop-ups en checkout-opt-ins.\n\n---\n\n### 7. Fiscaal, Import & Bedrijfsvoering\n\n#### 7.1 🟡 Btw en OSS bij EU-verkoop\n\n- [ ] EU-omzet buiten NL monitoren\n- [ ] Bij nadering €10.000 aanmelden voor OSS\n\n**Wat:** 21% btw op sokken in NL. Bij consumentenverkoop in andere EU-landen geldt een drempel van **€10.000** voor afstandsverkopen; daarboven reken je btw van het land van de klant.\n\n**Waar:** Belastingdienst → Mijn Belastingdienst Zakelijk, aanmelding One Stop Shop (OSS) op `belastingdienst.nl`.\n\n**Hoe:** meld je aan vóór het kwartaal waarin je de drempel passeert en stel de btw-tarieven per land in Shopify in.\n\n#### 7.2 🟡 Importdossier op orde\n\n- [ ] EORI-nummer regelen\n- [ ] Art. 23-vergunning aanvragen\n- [ ] Goederencode en oorsprongsdocumenten checken\n\n**Waar:** Douane (`douane.nl`) voor EORI en art. 23-vergunning; je expediteur voor de aangiften.\n\n**Hoe:**\n1. **EORI-nummer** aanvragen als je dat nog niet hebt.\n2. **Art. 23-vergunning** aanvragen: btw bij invoer verleggen naar de aangifte, geeft cashflowvoordeel.\n3. Goederencode controleren — sokken en kousen vallen onder **GN-post 6115**; het tarief hangt af van materiaal en oorsprong.\n4. Oorsprongsdocumenten opvragen voor een eventueel preferentieel tarief.\n5. Invoeraangiften en leveranciersverklaringen 7 jaar archiveren.\n\n#### 7.3 🟡 KvK-gegevens kloppend\n\n- [ ] SBI-code en vestigingsadres controleren\n\n**Waar:** `kvk.nl`.\n\n**Hoe:** check dat de SBI-code past bij groothandel of detailhandel in kleding en dat het vestigingsadres actueel is — dat moet matchen met §4.1 en §3.1.\n\n#### 7.4 ⚪ Betaaltermijnen B2B\n\n- [ ] 30 dagen opnemen in B2B-voorwaarden\n\n**Wat:** lever je aan grote sportretailers, dan geldt dwingend een maximale betaaltermijn van 30 dagen ten opzichte van een mkb-leverancier. Weiger langere termijnen in retailcontracten.\n\n#### 7.5 ⚪ Arbo bij personeel\n\n- [ ] RI&E opstellen zodra iemand in dienst komt\n\n**Waar:** `arboportaal.nl`, RI&E-instrument via `rie.nl`.\n\n**Hoe:** bij indiensttreding: RI&E opstellen, verzuimbeleid regelen, arbodienst of bedrijfsarts contracteren, cao-check.\n\n---\n\n### 8. Toegankelijkheid & Techniek\n\n#### 8.1 🟡 WCAG 2.1 AA meenemen in het thema\n\n- [ ] Contrast van `#CCFF00` corrigeren waar het op licht staat\n- [ ] Alt-teksten op alle productafbeeldingen\n- [ ] Formulierlabels en foutmeldingen in tekst\n- [ ] Toetsenbordnavigatie met zichtbare focus-state\n- [ ] Ondertiteling op video's\n\n**Wat:** European Accessibility Act, sinds 28 juni 2025 van toepassing op e-commercediensten. **Micro-ondernemingen (<10 medewerkers én ≤€2 mln omzet) zijn vrijgesteld** — waarschijnlijk vallen jullie daaronder, maar die vrijstelling vervalt bij groei.\n\n**Waar:** Shopify Horizon-thema; themawijzigingen loggen in [Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md).\n\n**Belangrijkste designpunt:** `#CCFF00` haalt geen contrastratio van 4.5:1 op wit. Gebruik het geel altijd op zwart of near-black, nooit als tekst op een lichte achtergrond. Video-ondertiteling loopt via [Reel & TikTok Format Gids](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/01_Content_Agent/Visuele%20Productie/Reel%20%26%20TikTok%20Format%20Gids.md).\n\n---\n\n### 9. Documentatie & Bewijsmap\n\n#### 9.1 🟠 Eén centrale compliance-map inrichten\n\n- [ ] Map aanmaken met submappen per categorie\n\n**Waar:** map in OneDrive naast deze vault, bijvoorbeeld `HI-Grip-Compliance/`.\n\n**Wat erin moet** — alles wat je bij een controle door NVWA, ACM of AP direct moet kunnen tonen:\n\n| Document | Uit |\n|---|---|\n| UPV-aansluiting en jaaropgaven | §1.1 |\n| Verpakkingenadministratie (berekening onder 50.000 kg) | §1.2 |\n| OEKO-TEX, RSL, SVHC-verklaringen | §2.2, §2.3 |\n| GPSR technische documentatie + risicoanalyse | §3.2 |\n| Testrapport gripclaims | §5.1 |\n| Prijslogboek 30-dagenregel | §5.2 |\n| Verwerkingsregister + DPA's | §6.1, §6.2 |\n| Polis productaansprakelijkheid | §3.5 |\n| Invoeraangiften en oorsprongsdocumenten | §7.2 |\n\n**Bewaartermijn:** GPSR-documentatie 10 jaar, fiscaal 7 jaar.\n\n#### 9.2 🟡 Jaarlijkse compliance-check agenderen\n\n- [ ] Terugkerende afspraak in Q1 zetten\n\n**Hoe:** één jaarlijkse ronde: UPV-opgave, verpakkingenadministratie bijwerken, claims hertoetsen, privacyverklaring bijwerken, nieuwe wetgeving doorlopen (§10).\n\n---\n\n### 10. Monitoren — komt eraan (2027–2030)\n\n| Regeling | Impact op HÏ Grip | Verwacht |\n|---|---|---|\n| **ESPR / Digitaal Productpaspoort** | Textiel is prioritaire groep. Per product een DPP met materiaal-, herkomst- en recyclinginfo via QR-code. | gedelegeerde handelingen 2027–2030 |\n| **ESPR vernietigingsverbod onverkocht textiel** | Micro-ondernemingen permanent vrijgesteld, middelgroot tot 2030. Nu geen actie. | loopt |\n| **EU-brede UPV textiel** | Registratieplicht in elk EU-land waar je verkoopt. | ~2028 |\n| **Verordening dwangarbeid (EU) 2024/3015** | Verbod op producten uit dwangarbeid; due diligence in de Aziatische keten. Begin nu met leveranciersverklaringen. | 14 dec 2027 |\n| **Green Claims Richtlijn** | Voorafgaande verificatie van milieuclaims. Status onzeker — volgen. | onbekend |\n| **EUDR (ontbossing)** | Alleen relevant bij **natuurrubber** in de grip-print. Silicone en TPU vallen erbuiten, katoen valt níét onder EUDR. Materiaal navragen bij de fabrikant. | status checken |\n| **CSRD / CSDDD** | Niet direct van toepassing, **maar** B2B-retailers gaan vragenlijsten sturen over CO₂, materialen en keten. Verzamel de data alvast. | doorlopend |\n\n---\n\n### Openstaande vragen om intern te beantwoorden\n\n- [ ] Is HÏ Grip al aangesloten bij Stichting UPV Textiel? Zo ja, sinds wanneer?\n- [ ] Waar komen de cijfers \"95% meer grip\" en \"1.17\" vandaan — is er een rapport?\n- [ ] Wat is het materiaal van de grip-print: silicone/TPU of natuurrubber?\n- [ ] Hoeveel medewerkers en welke omzet? Dit bepaalt de vrijstelling voor EAA en ESPR.\n- [ ] Naar welke landen wordt nu verkocht buiten NL?\n- [ ] Is er een bedrijfsaansprakelijkheidsverzekering met productdekking?\n\n## Acties\n\n- [ ] P1 · §1.1 Aansluiten bij UPV Textiel: aansluiting controleren, achterstallige jaren melden, jaaropgave (rond 1 augustus) agenderen\n- [ ] P2 · §1.2 Verpakkingenadministratie opzetten (Verpact, aantonen onder 50.000 kg) + TikTok Shop Qualification Center EPR-sectie invullen\n- [ ] P3 · §1.3 Verzendverpakking toetsen aan PPWR: loze ruimte ≤ ~50%, conformiteitsverklaring bij leverancier\n- [ ] P3 · §1.4 Buitenlandse UPV regelen vóór de eerste zending naar een nieuw land\n- [ ] P1 · §2.1 Vezelsamenstelling op het label én op alle productpagina's (officiële EU-benamingen)\n- [ ] P2 · §2.2 OEKO-TEX STANDARD 100-certificaat en ondertekende RSL-verklaring bij de fabrikant opvragen\n- [ ] P3 · §2.3 SVHC-verklaring opvragen; SCIP-melding alleen indien boven 0,1%\n- [ ] P3 · §2.4 Verboden biocide-claims (antibacterieel, antimicrobieel) opnemen in de copy-checklist\n- [ ] P1 · §3.1 GPSR-gegevens op label, verpakking en als vast blok op elke productpagina; batchnummering per productieronde\n- [ ] P1 · §3.2 Technische documentatie + risicoanalyse per product aanleggen (bewijsmap, 10 jaar)\n- [ ] P2 · §3.3 Klachtenregister opzetten en terugroepprocedure van één A4 schrijven\n- [ ] P1 · §3.4 Claimstrategie skisokken met gelprotection vastleggen vóór de copy — comfort/drukverdeling, geen letselpreventie\n- [ ] P3 · §3.5 Productaansprakelijkheidsverzekering met productdekking checken (richtlijn uiterlijk 9 december 2026 omgezet)\n- [ ] P2 · §4.1 Footer en contactpagina aanvullen: vestigingsadres, KvK-nummer, btw-id\n- [ ] P2 · §4.2 Herroepingsrecht nalopen: retourpagina, modelformulier, terugbetaling incl. verzendkosten, bestelknop-tekst\n- [ ] P2 · §4.3 Garantieteksten herschrijven — geen \"1 jaar garantie\" naast de wettelijke conformiteit\n- [ ] P2 · §4.4 ODR-link uit footer en voorwaarden halen, vervangen door eigen klachtenprocedure\n- [ ] P3 · §4.5 Keurmerk overwegen: Thuiswinkel Waarborg of WebwinkelKeur\n- [ ] P1 · §5.1 Bewijsdossier gripclaims: bron van \"95%\" en \"1.17\" achterhalen, zo nodig labtest, goedgekeurde formulering vastleggen, \"1.500+ sporters\" onderbouwen\n- [ ] P1 · §5.2 Van-prijzen toetsen aan de 30-dagenregel en een prijslogboek aanleggen\n- [ ] P2 · §5.3 Reviewbeleid publiceren (alinea bij reviewsectie + pagina)\n- [ ] P2 · §5.4 Duurzaamheidsclaims screenen — richtlijn (EU) 2024/825 van toepassing vanaf 27 september 2026 (deadline)\n- [ ] P3 · §5.5 Influencer-clausule (#advertentie, geen onbewezen claims) in alle samenwerkingscontracten\n- [ ] P2 · §6.1 Verwerkingsregister (AVG art. 30) opstellen\n- [ ] P2 · §6.2 Verwerkersovereenkomsten per tool downloaden en archiveren\n- [ ] P2 · §6.3 Cookiebanner herzien: gelijkwaardige weiger-knop, Consent Mode v2, testen met schone browser\n- [ ] P2 · §6.4 Privacyverklaring laten matchen met de werkelijke toolset\n- [ ] P3 · §6.5 Datalekprocedure (één A4) en intern datalekregister\n- [ ] P2 · §6.6 E-mail- en SMS-marketing: inschrijfformulieren, pop-ups en checkout-opt-ins nalopen\n- [ ] P3 · §7.1 EU-omzet buiten NL monitoren; bij nadering €10.000 aanmelden voor OSS\n- [ ] P3 · §7.2 Importdossier: EORI-nummer, art. 23-vergunning, GN-post 6115 en oorsprongsdocumenten\n- [ ] P3 · §7.3 KvK-gegevens controleren (SBI-code, vestigingsadres)\n- [ ] P3 · §7.4/§7.5 B2B-betaaltermijn 30 dagen in voorwaarden; RI&E zodra iemand in dienst komt\n- [ ] P3 · §8.1 WCAG 2.1 AA in het thema: contrast #CCFF00, alt-teksten, formulierlabels, focus-states, ondertiteling\n- [ ] P2 · §9.1 Eén centrale compliance-bewijsmap inrichten (OneDrive naast de vault)\n- [ ] P3 · §9.2 Jaarlijkse compliance-check in Q1 agenderen\n- [ ] P2 · Openstaande interne vragen beantwoorden: UPV-aansluiting, bron gripcijfers, materiaal grip-print, medewerkers/omzet, exportlanden, AVB\n\n## Bronnen\n\n- Origineel: [Compliance To-Do Lijst](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Compliance/Compliance%20To-Do%20Lijst.md)\n- Portalen: upvtextiel.nl · verpact.nl · echa.europa.eu · acm.nl · autoriteitpersoonsgegevens.nl · belastingdienst.nl · douane.nl\n\n## Aantekeningen",
   "bron": "los",
   "bronbestand": "C:\\Users\\Test\\OneDrive\\Documents\\HI-Grip-Vault-\\00_Brand_Core\\Compliance\\Compliance To-Do Lijst.md",
   "bronbestand_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Compliance/Compliance%20To-Do%20Lijst.md",
   "categorie": "Compliance",
   "datum": "2026-09-07",
   "deadline": "2026-09-27",
   "gerelateerd": [
    "2026-09-04-werkdossier-stand-van-zaken"
   ],
   "id": "2026-09-07-compliance-todo",
   "prioriteit": "P1",
   "routine": "",
   "samenvatting": "Alle NL/EU-verplichtingen voor HÏ Grip op één lijst (7 september 2026, aangevuld 14 september): vijf punten lopen nu al rechtsrisico — UPV Textiel, GPSR-gegevens, bewijsdossier gripclaims, van-prijzen en vezelsamenstelling. Eerste harde datum: de richtlijn duurzaamheidsclaims is van toepassing per 27 september 2026.",
   "status": "bekeken",
   "titel": "Compliance-verplichtingen NL/EU — to-do per categorie",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-07-compliance-todo.md",
   "vervangt": []
  },
  {
   "acties": [
    {
     "afgevinkt": false,
     "id": "2026-09-04-werkdossier-stand-van-zaken#dbe12b46",
     "prioriteit": "P1",
     "tekst": "Producten koppelen aan collectie `gripsokken` — hub is leeg (Shopify Admin, lars)"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-04-werkdossier-stand-van-zaken#279fd735",
     "prioriteit": "P1",
     "tekst": "Purchase-event aan de Shopify-checkout koppelen — bedankpagina-tag ontbreekt"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-04-werkdossier-stand-van-zaken#c1ccbbfc",
     "prioriteit": "P1",
     "tekst": "Template `gripsokken` toewijzen aan de collectie"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-04-werkdossier-stand-van-zaken#7a54ab83",
     "prioriteit": "P1",
     "tekst": "Verzend- en retourbeleid in Shopify Admin bijwerken naar 22:00 en 30 dagen — policies lopen achter op de site"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-04-werkdossier-stand-van-zaken#4cf0833c",
     "prioriteit": "P2",
     "tekst": "Besluit Engelse versie: afmaken of uitzetten (advies: uitzetten)"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-04-werkdossier-stand-van-zaken#fc5dfe9d",
     "prioriteit": "P2",
     "tekst": "Besluit drie off-topic blogartikelen: noindex, herschrijven of laten staan"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-04-werkdossier-stand-van-zaken#b7ef376e",
     "prioriteit": "P2",
     "tekst": "`/pages/collection`: 301 naar de hub of ombouwen tot echte shoppagina"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-04-werkdossier-stand-van-zaken#b83b8e37",
     "prioriteit": "P2",
     "tekst": "Kortingspopup vertragen, met Escape sluitbaar, sluitknop ≥ 24 px (EcomSend)"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-04-werkdossier-stand-van-zaken#98a99a09",
     "prioriteit": "P2",
     "tekst": "Trustpilot-widget repareren — laadt van drie domeinen en toont niets"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-04-werkdossier-stand-van-zaken#ee82c67c",
     "prioriteit": "P2",
     "tekst": "Titels en meta descriptions site-breed zoekwoord-eerst (Website Agent levert, lars plakt)"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-04-werkdossier-stand-van-zaken#f9369bdd",
     "prioriteit": "P2",
     "tekst": "Search Console-export (3 maanden, Zoekopdrachten + Pagina's)"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-04-werkdossier-stand-van-zaken#fc53b6be",
     "prioriteit": "P2",
     "tekst": "Shopify Analytics-export (12 maanden: orders, omzet, AOV, conversie)"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-04-werkdossier-stand-van-zaken#8c9ef446",
     "prioriteit": "P2",
     "tekst": "Eén uur klantstem: 50 service-mails, 17 reviews, eerste vraag per clubgesprek"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-04-werkdossier-stand-van-zaken#1a42e935",
     "prioriteit": "P2",
     "tekst": "Akkoord op omdraaien typografie-instellingen (body Poppins 400/16px, koppen 800 UPPERCASE)"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-04-werkdossier-stand-van-zaken#cbad707e",
     "prioriteit": "P3",
     "tekst": "Testimonials-sectie van 4,5 naar 4,6 zetten"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-04-werkdossier-stand-van-zaken#a6c02566",
     "prioriteit": "P3",
     "tekst": "Volgorde sportpagina's bepalen na de Search Console-export"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-04-werkdossier-stand-van-zaken#30d11c31",
     "prioriteit": "P3",
     "tekst": "Skisokken: moment bepalen (geparkeerd op verzoek van lars)"
    }
   ],
   "body_md": "# Werkdossier higrip.nl — stand van zaken 4 september 2026\n\n## In het kort\n\nWat er van dit dossier daadwerkelijk is doorgevoerd staat in [Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md). De vaste cijfers (1,17 / 95% / 2.000+ / 4,6 op 17) gelden voor alle copy en schema; niets uit de tegenspraken-lijst overnemen.\n\n## Bevindingen\n\n> Vault-versie van het werkdossier dat op 4 september 2026 is samengesteld uit vier audits van 3 september (SEO & techniek, meting & conversie, toegankelijkheid, content). Het originele dossier staat als artifact op claude.ai; **dit bestand is de bron in de vault**, zodat een volgende sessie er zonder externe link bij kan. Wat er sindsdien daadwerkelijk is doorgevoerd staat in [Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md).\n\n**Let op bij het lezen:** waar een cijfer nog niet vaststaat, staat het hieronder onder *Tegenspraken* en niet onder *Cijfers*. Neem niets uit de tegenspraken-lijst over in nieuwe copy of schema.\n\n---\n\n### De twee dingen die alles blokkeren\n\n1. **Producten koppelen aan de collectie `gripsokken`.** De hub staat klaar maar toont \"Geen producten gevonden\". Elke spoke die ernaartoe linkt versterkt nu niets — en de canonical-regel die ik in het thema heb gezet activeert zichzelf pas zodra de hub gevuld is.\n2. **Purchase-event koppelen aan de checkout.** Zonder dit is van geen enkele wijziging te zien of hij omzet oplevert.\n\nSamen ongeveer een half uur werk, allebei alleen door lars te doen. Zonder deze twee blijft de rest van dit dossier theorie.\n\n---\n\n### Beslisregister\n\n#### Blokkerend\n\n| # | Keuze | Waarom het blokkeert | Wie |\n|---|---|---|---|\n| 1 | Producten koppelen aan collectie `gripsokken` | Hub is leeg; elke interne link ernaartoe versterkt niets | lars |\n| 2 | Purchase-event aan de checkout koppelen | Zonder dit geen enkele meetbare uitkomst | lars |\n| 3 | Template `gripsokken` toewijzen aan de collectie | Anders blijft de oude pagina actief en is het gebouwde onzichtbaar | lars |\n\n#### Strategisch\n\n| # | Keuze | Opties |\n|---|---|---|\n| 4 | Engelse versie | Afmaken of uitzetten. Nu geven drie FAQ-vragen hetzelfde antwoord en is de meta description Nederlands. **Advies: uitzetten** — de focus ligt op Nederland |\n| 5 | Productsterren in Google | Trustpilot 4,6 op 17 is een *winkelscore* en mag alleen op Organization-schema. Sterren bij producten vereisen een review-app |\n| 6 | Drie off-topic blogartikelen | Noindex, herschrijven, of laten staan |\n| 7 | `/pages/collection` | 301 naar de hub, of ombouwen tot echte shoppagina. Nu belooft de titel \"Shop gripsokken\" en toont hij het retourbeleid |\n| 8 | `/collections/all` en `/frontpage` | Canonical naar de hub of noindex — **doorgevoerd in het thema**, zie [Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md) |\n| 9 | `/blogs/intern` | Noindex of verwijderen — **noindex doorgevoerd**, zie [Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md) |\n| 10 | Volgorde van de sportpagina's | Hangt af van de Search Console-export |\n| 11 | Skisokken | Geparkeerd op verzoek van lars. Wanneer erbij? |\n\n#### Uitvoering\n\n| # | Actie | Waar | Wie |\n|---|---|---|---|\n| 12 | Kortingspopup vertragen én Escape laten sluiten, sluitknop naar ≥24 px | EcomSend-app | lars |\n| 13 | Trustpilot-widget repareren — laadt van drie domeinen en toont niets | Trustpilot-app | lars |\n| 14 | `sameAs` invullen: Instagram, TikTok, Trustpilot | ~~Theme Editor~~ → **themacode, doorgevoerd** (zie correctie hieronder) | Website Agent |\n| 15 | Titels en meta descriptions site-breed omdraaien naar zoekwoord-eerst | Shopify Admin | lars plakt, Website Agent levert teksten |\n| 16 | Search Console-export (3 maanden, Zoekopdrachten + Pagina's) | Google Search Console | lars |\n| 17 | Shopify Analytics-export (12 maanden: orders, omzet, AOV, conversie) | Shopify Admin | lars |\n| 18 | Eén uur klantstem: 50 service-mails, 17 reviews, eerste vraag per clubgesprek | Mailbox, Trustpilot | lars |\n\n---\n\n### Tegenspraken — opgelost in het thema op 2026-09-04\n\nZeven plekken waar de site zichzelf tegensprak. Vijf kwamen uit het dossier, twee zijn er op 4 september bij gevonden, plus een vierde beoordelingscijfer.\n\n**Correctie op mijn eerste inschatting:** ik noemde deze tegenspraken \"bedrijfsbeslissingen die lars moet nemen\". lars corrigeerde dat — het zijn gewoon waarden die bij een eerdere wijziging niet overal zijn meegenomen. De juiste waarden zijn bevestigd en **staan nu overal gelijk in theme `200269168967`**: besteldeadline **22:00**, retourtermijn **30 dagen**, gratis verzending vanaf **€35**.\n\n| Wat | Was | Is nu | Nog te doen |\n|---|---|---|---|\n| Besteldeadline | 22:00 / 16:00 / 17:00 | **22:00** overal | ⚠️ Shopify-verzendpolicy zegt nog 16:00 |\n| Retourtermijn | 30 / 14 dagen | **30 dagen** overal | ⚠️ Shopify-retourpolicy zegt nog 14 dagen |\n| Verzenddrempel | €35 / €30 | **€35** overal | Meta descriptions in Admin |\n| Beoordeling | 4,5 / 4,6 / **4,8** | 4,6 (schema-default) | Testimonials-sectie nog op 4,5 |\n| Klantenaantal | 2.000+ / 1500+ | 2.000+ op alle pagina's | Meta descriptions in Admin |\n| Lopende actie | 50% korting / 2+2 gratis | — | Jubileum viel mei 2026, WK-actie liep af 19 juli 2026 |\n\n#### ⚠️ De policy-pagina's lopen nu achter op de site\n\nDit is het belangrijkste dat hieruit volgt en het kan alleen in Shopify Admin. De **officieel bindende policies** (Instellingen → Beleid) zeggen nog:\n\n- Verzendbeleid: *\"bestellingen die vóór **16:00** uur zijn geplaatst\"*\n- Retourbeleid: *\"binnen **14 dagen** na ontvangst retourneren\"*\n\nDe site belooft nu 22:00 en 30 dagen. Dat is de gevaarlijke kant van het verschil: je adverteert ruimer dan je policy dekt. **Beide policies moeten in Shopify Admin worden bijgewerkt naar 22:00 en 30 dagen.** Let op: `templates/page.verzendbeleid.json` en `page.retourbeleid.json` zijn *themapagina's* die de policies dupliceren — die stonden al goed en zijn dus niet hetzelfde als de echte policy onder `/policies/`.\n\n#### Waar de waarden stonden\n\nBewaard voor het geval er een volgende ronde nodig is. Paden relatief aan de themamap.\n\n**Besteldeadline** — al goed op 22:00: `templates/collection.json:24`, `templates/product.json:220,305,1046`, `templates/product.performance-grip-socks-2.json:222,307,1328`, `templates/page.verzendbeleid.json:19`, `sections/header-group.json:133`, `sections/shop-intro.liquid:89` · gecorrigeerd van 16:00: `templates/index.json`, `templates/page.veelgestelde-vragen.json`, `templates/product.product-gratis-verzending.json` (2×), `templates/collection.gripsokken.json`, `snippets/faq-schema.liquid`, `snippets/padel-faq.liquid` (2×), `snippets/padel-usp-bar.liquid` (2×) · van 17:00: `snippets/product-schema.liquid`\n\n**Retourtermijn** — al goed op 30 dagen: `templates/collection.json:30`, `templates/page.retourbeleid.json:19`, `templates/product.json:305,1124`, `templates/product.performance-grip-socks-2.json:307,1406`, `sections/hi-wk-promo.liquid:250`, `sections/shop-intro.liquid:90` · gecorrigeerd van 14 dagen: `templates/page.json` (3×), `templates/page.veelgestelde-vragen.json`, `templates/product.product-gratis-verzending.json`\n\n**Verzenddrempel** — al goed op €35: `templates/collection.json:18`, `sections/header-group.json:103`, `sections/shop-intro.liquid:79,88` · gecorrigeerd van €30: `templates/page.veelgestelde-vragen.json`, `templates/product.json`, `templates/product.performance-grip-socks-2.json`\n\n---\n\n### Cijfers die wél vaststaan\n\nGebruik deze in copy en schema; verzin er nooit nieuwe bij.\n\n| Gegeven | Waarde | Bron |\n|---|---|---|\n| Wrijvingscoëfficiënt | 1,17 tegenover 0,60 | FAQ met drie citaties |\n| Meer grip | 95% | Merkclaim, productpagina |\n| Wetenschappelijke bronnen | Apps et al. 2020 · Apps et al. 2022 · Friedl et al. 2023 | FAQ-snippet |\n| Klantenaantal | 2.000+ sporters | Consistent op alle pagina's |\n| Trustpilot | 4,6 uit 5 · 17 reviews | Bij de bron opgehaald, 3 sep |\n| Maten 1.0 | 34–39 · 40–46 | Productvarianten |\n| Maten 2.0 | 35–38 · 39–42 · 43–47 | Productvarianten |\n| 2.0 compressie | 15–20 mmHg | Productbeschrijving |\n| 2.0 kenmerken | 7 zones, waarvan er 1 nog omschreven moet worden | Infographic |\n| Team | 4 oprichters | Over ons |\n| Productlijn | 3 producten: Gripsok 1.0, 2.0 wit, 2.0 zwart | Sitemap |\n\n#### Snelheid — labmeting 3 sep, mobiele viewport\n\nTTFB 26 ms · FCP 584 ms · CLS 0,00 · 0 lange taken · 0 render-blokkerende scripts (alle 28 head-scripts zijn modules). **Zwaar:** 241 requests, ~966 KB, 70 script-tags. LCP niet betrouwbaar te meten (PSI-API op dagquotum).\n\n---\n\n### Het meetgat\n\nGA4-property `476032345`. **Nul purchase-events in de volledige historie** — niet nul deze week, maar nul sinds februari 2025, ook in de maanden met 266–334 sessies. Conversieratio, omzet per bezoeker en kanaalattributie zijn in GA4 dus niet laag maar onbestaand. Dit beantwoordt de openstaande vraag uit [Analytics & KPI Dashboard](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Analyse/Analytics%20%26%20KPI%20Dashboard.md).\n\nDe meting is hersteld op **30 augustus 2026 om 19:42**; alle andere e-commerce-events vuren sindsdien. Alleen het event op de bedankpagina na betaling ontbreekt — de tag zit niet aan de Shopify-checkout vast.\n\n**Sessies per maand:** sep 2025 266 · okt 292 · nov 334 · dec 233 · jan 2026 1 (meting valt uit) · feb–jul 2026 geen enkele rij, zes maanden definitief verloren · aug 12 · sep 24.\n\n**Events 30 aug – 3 sep (4,5 dagen):** page_view 45 · session_start 35 · first_visit 31 · user_engagement 28 · scroll 16 · view_item 8 · view_item_list 3 · begin_checkout 2 · add_to_cart 1 · click 1 · **purchase 0**.\n\n**Twee structurele gevolgen van dit volume:**\n- **A/B-testen kan niet.** Voor 20% verbetering op ~2% conversie heb je circa 20.000 sessies per variant nodig; bij twaalf sessies per dag is dat ruim vier jaar per variant. Werk met voor/na op grote wijzigingen plus kwalitatief onderzoek.\n- **Echte Core Web Vitals komen er nooit.** Google's drempel voor veldgegevens haal je bij dit volume niet. Labmetingen zijn het enige dat er ooit zal zijn — behandel snelheid als hygiëne.\n\n---\n\n### Contentinventaris\n\n3 producten · 3 collecties (twee leeg) · 19 pagina's (vier onder de 400 woorden) · 3 blogs (waarvan één interne, publiek zichtbaar) · 23 artikelen (vrijwel alle 400–750 woorden).\n\n**Problemen:** 3 kannibaliserende paren (blessures · onderhoud · pilates) · 3 off-topic artikelen (sportvoeding · ochtendroutine · mentale voordelen) · 1 sportlandingspagina (alleen padel, 1167 woorden — het te kopiëren model) · 6 ontbrekende spokes (voetbal, tennis, fitness, hockey, basketbal, rugby).\n\n**Strategie in één zin:** alle kracht naar één sterke gripsokken-hub, met de sportpagina's als spokes die er met beschrijvende ankertekst naartoe linken. Merk-breed, niet sport-per-sport, zodat de skisokkenlijn er straks in past. **Eerst verdichten, dan pas schrijven.**\n\n---\n\n### Correcties op het dossier zelf\n\nTwee dingen kloppen niet meer of niet helemaal, vastgesteld bij het doorvoeren op 4 september. Zie [Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md) voor wat er vervolgens is gebouwd.\n\n- **Beslispunt 14 (`sameAs`) kán niet in de Theme Editor.** Het dossier zet hem op \"Theme Editor, jij\". Maar `snippets/organization-schema.liquid` leest `settings.social_instagram_link` en soortgenoten — en die instellingen bestaan niet in Horizon. Dat snippet zou `sameAs` dus altijd leeg hebben gelaten, en de Theme Editor biedt er geen veld voor. Opgelost in code, in de Organization-node in `sections/header.liquid`.\n- **Het vijfde lettertype `GTStandard-MMedium` zit niet in elk thema.** In `200269168967` staan alle vier de fontinstellingen op Poppins (n8/n7/n4/n5). Die bevinding geldt dus voor het live-thema, niet overal.\n\n### Nieuwe bevindingen van 4 september\n\nBuiten de 39 uit het dossier, gevonden in theme `200269168967`:\n\n- **Derde besteldeadline (17:00)** en **de retourtermijn-tegenspraak (14 vs 30 dagen)** — beide hierboven verwerkt.\n- **30 KB ongebruikte blocking CSS op de homepage en de shoppagina.** Zes secties laadden `padel-page.css` terwijl dat bestand uitsluitend `.padel-*`-selectors en `--padel-*`-tokens bevat, en geen van die secties één zo'n klasse of token gebruikt. Verwijderd.\n- **De typografie-instellingen staan omgekeerd.** `type_body_font` = `poppins_n8` (800) en `type_heading_font` = `poppins_n4` (400), met `type_size_paragraph` = 14. Nagemeten in de gerenderde CSS van de preview: `--font-body--weight: 800`, `--font-heading--weight: 400`. Gevolg: lopende tekst is ExtraBold, de H1 van 56px en H2 van 48px zijn Regular — de hiërarchie staat op zijn kop, en `<strong>` doet niets meer omdat alles al 800 is. Dat het niet meteen opvalt komt doordat de maatwerksecties (`g2-`, `padel-`, `shop-`) hun eigen `font-weight` zetten; het treft vooral de Horizon-eigen onderdelen: productbeschrijvingen, blogartikelen, beleidspagina's, FAQ-tekst en de winkelwagen. Daarnaast staan `type_case_h1`/`h2` op `none` terwijl koppen UPPERCASE horen. [Brand Identity Overview](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/00_Brand_Core/Identiteit/Brand%20Identity%20Overview.md) schrijft body Poppins 400 op 15–16px voor en koppen 700–800. Zichtbare ontwerpwijziging, dus wacht op akkoord van lars — zie [Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md).\n- **Een vierde beoordelingscijfer.** `sections/hi-wk-promo.liquid` had als schema-default `\"4.8/5 op Trustpilot\"`, naast de 4,5 uit de testimonials en de werkelijke 4,6 op 17 reviews. Default gecorrigeerd naar 4,6; de testimonials-sectie staat nog op 4,5.\n- **`snippets/product-schema.liquid` was een tikkende bom.** Niet gerenderd, maar mét harde fallbacks 4,5 en 7 reviews op metafields die niet bestaan. Wie dit ooit aanzet, publiceert verzonnen reviews. Dit is dossier-bevinding H11; de aggregateRating is nu uit het bestand gehaald.\n\n---\n\n### Gerelateerde bestanden\n\n- [Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md) — wat er van dit dossier daadwerkelijk is doorgevoerd, en waar\n- [Technische Procedures](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Technische%20Procedures.md) — hoe een themawijziging naar Shopify gaat\n- [Conversie Optimalisatie Checklist](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Analyse/Conversie%20Optimalisatie%20Checklist.md) — de CRO-kant\n- [Analytics & KPI Dashboard](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Analyse/Analytics%20%26%20KPI%20Dashboard.md) — het meetgat in context\n- [SEO Strategie & Keywords](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/SEO/Strategie/SEO%20Strategie%20%26%20Keywords.md) — de hub-and-spoke-strategie\n- [Website Doel & KPI's](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Doel/Website%20Doel%20%26%20KPI%27s.md)\n- [Goedkeuringsworkflow](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Goedkeuringsworkflow.md) — hoe dit richting live gaat\n\n## Acties\n\n- [ ] P1 · Producten koppelen aan collectie `gripsokken` — hub is leeg (Shopify Admin, lars)\n- [ ] P1 · Purchase-event aan de Shopify-checkout koppelen — bedankpagina-tag ontbreekt\n- [ ] P1 · Template `gripsokken` toewijzen aan de collectie\n- [ ] P1 · Verzend- en retourbeleid in Shopify Admin bijwerken naar 22:00 en 30 dagen — policies lopen achter op de site\n- [ ] P2 · Besluit Engelse versie: afmaken of uitzetten (advies: uitzetten)\n- [ ] P2 · Besluit drie off-topic blogartikelen: noindex, herschrijven of laten staan\n- [ ] P2 · `/pages/collection`: 301 naar de hub of ombouwen tot echte shoppagina\n- [ ] P2 · Kortingspopup vertragen, met Escape sluitbaar, sluitknop ≥ 24 px (EcomSend)\n- [ ] P2 · Trustpilot-widget repareren — laadt van drie domeinen en toont niets\n- [ ] P2 · Titels en meta descriptions site-breed zoekwoord-eerst (Website Agent levert, lars plakt)\n- [ ] P2 · Search Console-export (3 maanden, Zoekopdrachten + Pagina's)\n- [ ] P2 · Shopify Analytics-export (12 maanden: orders, omzet, AOV, conversie)\n- [ ] P2 · Eén uur klantstem: 50 service-mails, 17 reviews, eerste vraag per clubgesprek\n- [ ] P2 · Akkoord op omdraaien typografie-instellingen (body Poppins 400/16px, koppen 800 UPPERCASE)\n- [ ] P3 · Testimonials-sectie van 4,5 naar 4,6 zetten\n- [ ] P3 · Volgorde sportpagina's bepalen na de Search Console-export\n- [ ] P3 · Skisokken: moment bepalen (geparkeerd op verzoek van lars)\n\n## Bronnen\n\n- Origineel: [Stand van Zaken — Werkdossier 2026-09-04](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Analyse/Stand%20van%20Zaken%20%E2%80%94%20Werkdossier%202026-09-04.md)\n- Doorgevoerd: [Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md) (2026-09-04)\n- Labmeting 3 september (mobiele viewport), GA4-property 476032345\n\n## Aantekeningen",
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
    "2026-09-16-seo-onderzoek-cloud-routine-website"
   ],
   "id": "2026-09-04-werkdossier-stand-van-zaken",
   "prioriteit": "P1",
   "routine": "",
   "samenvatting": "Vier audits van 3 september samengebracht: twee blokkades (producten koppelen aan collectie gripsokken, purchase-event aan de checkout), 18 beslispunten en zeven tegenspraken (besteldeadline, retourtermijn, verzenddrempel) die in thema 200269168967 zijn rechtgezet. De officiële Shopify-policies lopen nu achter op wat de site belooft.",
   "status": "in-uitvoering",
   "titel": "Werkdossier higrip.nl — stand van zaken 4 september 2026",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-04-werkdossier-stand-van-zaken.md",
   "vervangt": []
  },
  {
   "acties": [
    {
     "afgevinkt": false,
     "id": "2026-09-03-analytics-kpi-meetgat#872bb605",
     "prioriteit": "P2",
     "tekst": "Resultaat-KPI's opzetten (conversieratio, AOV, omzet/bezoeker) met Shopify Analytics als omzetbron"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-03-analytics-kpi-meetgat#8d1d8e60",
     "prioriteit": "P2",
     "tekst": "Funnel-rapport product → cart → checkout → betaling via `run_funnel_report`; grootste absolute drop-off zoeken"
    },
    {
     "afgevinkt": true,
     "id": "2026-09-03-analytics-kpi-meetgat#2632acc5",
     "prioriteit": "P2",
     "tekst": "UTM-discipline op alle uitgaande links (bio, posts, influencer-briefings, e-mail)"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-03-analytics-kpi-meetgat#96f1208f",
     "prioriteit": "P3",
     "tekst": "Microsoft Clarity koppelen aan de diagnoses: bij een funnel-drop recordings/heatmaps erbij pakken"
    },
    {
     "afgevinkt": false,
     "id": "2026-09-03-analytics-kpi-meetgat#997d251e",
     "prioriteit": "P3",
     "tekst": "Achterhalen waarom de GA4-tag rond 1 januari 2026 stopte"
    },
    {
     "afgevinkt": true,
     "id": "2026-09-03-analytics-kpi-meetgat#72df5bef",
     "prioriteit": "P2",
     "tekst": "Controleren of de koppeling purchase-events doorgeeft — gecontroleerd 3 september: nee"
    }
   ],
   "body_md": "# GA4 — het meetgat en de eerste cijfers\n\n## In het kort\n\nBij ~12 sessies per dag kan A/B-testen niet en komen er nooit echte Core Web Vitals-velddata; werk met voor/na-metingen plus kwalitatief onderzoek (Clarity, klantstem). Shopify Analytics blijft de bron voor omzet en orders.\n\n## Bevindingen\n\n> **GA4-toegang is live sinds 2026-08-30** via de `analytics-mcp`-koppeling (zie [API & Tool Connections](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/API%20%26%20Tool%20Connections.md)). Dit bestand wordt gevuld volgens de KPI-aanpak uit [Website Doel & KPI's](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Doel/Website%20Doel%20%26%20KPI%27s.md): resultaat-KPI's (omzet, conversie, AOV, omzet/bezoeker) + een diagnostische laag over *waarom* bezoekers wel/niet kopen. Shopify Analytics blijft bron van waarheid voor omzet/orders; GA4 is voor gedrags-/funnelinzicht.\n\n### Databeschikbaarheid — let op het gat\n\n| Periode | Status |\n|---|---|\n| ~2025-03-13 t/m 2025-12-31 | GA4-data aanwezig (~250 sessies/mnd) |\n| ~2026-01-01 t/m 2026-08-29 | **geen data** — GA4-tag lag stil (waarschijnlijk door thema-republicatie/app-wijziging) |\n| vanaf 2026-08-30 | opnieuw gekoppeld via Shopify Google & YouTube-integratie; verse data zit met 24-48u vertraging in de standaardrapporten |\n\nGevolg: voor trend/vergelijking is alleen mrt–dec 2025 bruikbaar in GA4. Voor de tussenliggende maanden en de lange-termijn-omzettrend → Shopify Analytics.\n\n### Eerste cijfers (GA4, 2025-03-13 – 2026-01-04)\n\n**Kanaalverdeling (sessies / gebruikers):**\n\n| Kanaal | Sessies | Gebruikers |\n|---|---|---|\n| Direct | 1.083 | 713 |\n| Organic Search | 829 | 403 |\n| Organic Social | 360 | 287 |\n| Referral | 258 | 93 |\n\n**Sessies per maand:** mrt 192 · apr 134 · mei 429 · jun 272 · jul 216 · aug 164 · sep 266 · okt 292 · nov 334 · dec 233.\n\n**Eerste observaties (nog te verdiepen):**\n- **Direct = 43% van de sessies.** Onwaarschijnlijk hoog voor een webshop van deze omvang — vrijwel zeker deels untagged social/influencer/nieuwsbrief-verkeer zonder UTM-parameters. Raakt de \"kanaal → identiteit\"-mapping uit [Website Doel & KPI's](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Doel/Website%20Doel%20%26%20KPI%27s.md) en [Conversie Optimalisatie Checklist](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Analyse/Conversie%20Optimalisatie%20Checklist.md). → Voorstel: UTM-discipline op alle uitgaande links (bio, posts, influencer-briefings, e-mail).\n- Laag volume (~250 sessies/mnd) → kleine-steekproef-ruis; behandel korte-periode-verschillen als hypothese, niet als bewijs.\n\n### Het purchase-gat (vastgesteld 2026-09-03)\n\n**Er zijn nul purchase-events in de volledige historie van deze property.** Niet nul deze week — nul sinds februari 2025, ook in de maanden met 266 tot 334 sessies. Conversieratio, omzet per bezoeker en kanaalattributie zijn in GA4 dus niet *laag* maar *onbestaand*, en alle CRO-conclusies die op GA4 leunen zijn tot die tijd ongeldig.\n\nSinds het herstel op 30-08 om 19:42 vuren alle andere e-commerce-events wel (`view_item`, `view_item_list`, `add_to_cart`, `begin_checkout`). Alleen het event op de bedankpagina na betaling ontbreekt — de tag zit dus niet aan de Shopify-checkout vast. Dit koppelen is beslispunt 2 uit [Stand van Zaken — Werkdossier 2026-09-04](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Analyse/Stand%20van%20Zaken%20%E2%80%94%20Werkdossier%202026-09-04.md) en blokkeert alles wat met meten te maken heeft.\n\n**Twee gevolgen van het huidige volume (~12 sessies/dag) die niet weggaan als de meting klopt:**\n- **A/B-testen kan niet.** Voor 20% verbetering op ~2% conversie zijn circa 20.000 sessies per variant nodig — ruim vier jaar per variant. Werk met voor/na op grote wijzigingen plus kwalitatief onderzoek (Clarity, klantstem).\n- **Echte Core Web Vitals komen er nooit** — Google's drempel voor veldgegevens wordt bij dit volume niet gehaald. Labmetingen zijn het enige dat er ooit zal zijn.\n\n### Nog te doen\n\n- [ ] Zodra ~2 weken verse data binnen is: resultaat-KPI's opzetten (conversieratio, AOV, omzet/bezoeker) met Shopify Analytics als omzetbron\n- [ ] Funnel-rapport (product → cart → checkout → betaling) via `run_funnel_report` — grootste absolute drop-off zoeken\n- [x] ~~Controleren of de nieuwe koppeling `purchase`/e-commerce-events doorgeeft~~ → **gecontroleerd 2026-09-03, en het antwoord is nee.** Zie hieronder.\n- [ ] Microsoft Clarity (kwalitatieve laag) koppelen aan de diagnoses: bij een funnel-drop → recordings/heatmaps erbij pakken voor het *waarom*\n- [ ] Achterhalen waarom de tag rond 1-1-2026 stopte, zodat het niet opnieuw gebeurt\n\n### Gerelateerde bestanden\n\n- [Website Doel & KPI's](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Doel/Website%20Doel%20%26%20KPI%27s.md) — De KPI-filosofie die dit dashboard invult\n- [Conversie Optimalisatie Checklist](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Analyse/Conversie%20Optimalisatie%20Checklist.md) — Openstaande CRO-punten\n- [Stappenplan — Shopify Apps & Analytics Toegang](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Stappenplan%20%E2%80%94%20Shopify%20Apps%20%26%20Analytics%20Toegang.md) — Hoe de GA4-toegang is afgerond\n- [Shopify App Stack](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Shopify%20App%20Stack.md) — Technische stand van zaken\n- [API & Tool Connections](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/API%20%26%20Tool%20Connections.md) — Volledige achtergrond + eindopzet van de GA4-route\n\n## Acties\n\n- [ ] P2 · Resultaat-KPI's opzetten (conversieratio, AOV, omzet/bezoeker) met Shopify Analytics als omzetbron\n- [ ] P2 · Funnel-rapport product → cart → checkout → betaling via `run_funnel_report`; grootste absolute drop-off zoeken\n- [x] P2 · UTM-discipline op alle uitgaande links (bio, posts, influencer-briefings, e-mail)\n- [ ] P3 · Microsoft Clarity koppelen aan de diagnoses: bij een funnel-drop recordings/heatmaps erbij pakken\n- [ ] P3 · Achterhalen waarom de GA4-tag rond 1 januari 2026 stopte\n- [x] P2 · Controleren of de koppeling purchase-events doorgeeft — gecontroleerd 3 september: nee\n\n## Bronnen\n\n- Origineel: [Analytics & KPI Dashboard](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Analyse/Analytics%20%26%20KPI%20Dashboard.md)\n- [API & Tool Connections](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/API%20%26%20Tool%20Connections.md) § GA4 · GA4-property 476032345\n\n## Aantekeningen",
   "bron": "los",
   "bronbestand": "C:\\Users\\Test\\OneDrive\\Documents\\HI-Grip-Vault-\\03_Website_Agent\\Analyse\\Analytics & KPI Dashboard.md",
   "bronbestand_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Analyse/Analytics%20%26%20KPI%20Dashboard.md",
   "categorie": "CRO",
   "datum": "2026-09-03",
   "deadline": "",
   "gerelateerd": [
    "2026-09-04-werkdossier-stand-van-zaken",
    "2026-09-14-weekoverzicht",
    "2026-09-15-seo-audit"
   ],
   "id": "2026-09-03-analytics-kpi-meetgat",
   "prioriteit": "P2",
   "routine": "",
   "samenvatting": "GA4 draait weer sinds 30 augustus 2026, maar de property heeft in de volledige historie nul purchase-events en de data van januari–augustus 2026 is definitief verloren. Direct is 43% van de sessies (mrt–dec 2025) — vrijwel zeker untagged social- en nieuwsbriefverkeer zonder UTM's.",
   "status": "bekeken",
   "titel": "GA4 — het meetgat en de eerste cijfers",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-09-03-analytics-kpi-meetgat.md",
   "vervangt": []
  },
  {
   "acties": [
    {
     "afgevinkt": true,
     "id": "2026-08-31-weekoverzicht#ad18c10a",
     "prioriteit": "P2",
     "tekst": "Homepage-title en meta description aanpassen — overgenomen in Week 2026-09-14"
    },
    {
     "afgevinkt": true,
     "id": "2026-08-31-weekoverzicht#85863581",
     "prioriteit": "P3",
     "tekst": "Update Log bijwerken (structured data stond live) — overgenomen in Week 2026-09-14"
    },
    {
     "afgevinkt": true,
     "id": "2026-08-31-weekoverzicht#a0a77caf",
     "prioriteit": "P2",
     "tekst": "Buffer MCP-server koppelen — gedaan 01-09, zie Feedback & Iteratie Log"
    },
    {
     "afgevinkt": true,
     "id": "2026-08-31-weekoverzicht#3a792a61",
     "prioriteit": "P2",
     "tekst": "Events-kandidaten Urban Trail / Charity Run beoordelen — overgenomen in Week 2026-09-14"
    },
    {
     "afgevinkt": true,
     "id": "2026-08-31-weekoverzicht#0d20a6f4",
     "prioriteit": "P2",
     "tekst": "Funnel-rapport op historische GA4-data en purchase-events checken — overgenomen in Week 2026-09-14"
    }
   ],
   "body_md": "# Denzel Weekoverzicht — 2026-08-31\n\n## In het kort\n\nEerste week met live-site-check en SEO-check. Vervangen door het weekoverzicht van 7 september. Bewaard als archief.\n\n## Bevindingen\n\n### Voortgang per hoofdagent\n\n- **Content Agent** — geen verandering. Video & Visuele Productie Agent (`/video-productie`, sinds 2026-08-09) nog steeds zonder output. Automatisering van periodieke content-ideeën blijft bewust niet gebouwd (lars wil dit eerst intern afstemmen) — de technische blocker daarachter (Buffer-koppeling stond op \"requires authentication\") lijkt inmiddels weg te vallen, zie AI-ontwikkelingen hieronder.\n- **Partnership Agent** — B2B Klanten Agent: lijst laatst bijgewerkt 2026-08-25 (6 dagen geleden), binnen de 1-2 weken-marge, geen nieuwe zoekactie nodig. Partnerships & Events Agent: lijst laatst bijgewerkt 2026-08-24 (7 dagen geleden), ook binnen de marge, geen nieuwe zoekactie nodig. Influencer & Creator Agent draait ongewijzigd actief via het IG-zoekscript. De twee MIDDEL-kandidaten van vorige week (Urban Trail Rotterdam, Rotterdam Charity Run) wachten nog steeds op een eerste beoordeling van lars. **Update 31-08:** lars heeft Sport Ondernemers Expo geschrapt (\"niet iets voor ons\" — B2B-vakbeurs, geen sportpubliek/activatie); verwijderd uit [Voorbeelden Gevonden Organisaties (Events)](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20B%20-%20Samenwerkingen/Voorbeelden%20Gevonden%20Organisaties%20%28Events%29.md) en als uitsluitingsregel vastgelegd in [Voorwaarden Samenwerking](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20B%20-%20Samenwerkingen/Voorwaarden%20Samenwerking.md).\n- **Website Agent** — dit was de eerste geplande run van de live-site-check en SEO-check (vastgesteld 2026-08-25). **Update 31-08 (tweede check, later op de dag):** de egress-blokkade is niet meer aanwezig — WebFetch en curl naar `higrip.nl` werken nu gewoon (HTTP 200). Live-site-check en SEO-check alsnog uitgevoerd, zie hieronder. GA4-koppeling (`analytics-mcp`) draait sinds 2026-08-30 naar behoren, los van dit probleem.\n\n### Wat ik deze week zelf heb opgepakt\n\n**B2B Klanten (Lijn A):** geen zoekactie — lijst is recent genoeg (2026-08-25, binnen de marge).\n\n**Samenwerkingen/Events (Lijn B):** geen zoekactie — lijst is recent genoeg (2026-08-24, binnen de marge).\n\n**Live-site-check (alsnog uitgevoerd, 31-08 later op de dag):**\n- Bereikbaar: `https://www.higrip.nl/` geeft HTTP 200, geen 404/500, geen zichtbare Liquid-errors.\n- **Structured data staat nu wél live.** `<script type=\"application/ld+json\">` voor Organization, WebSite én FAQPage (8 vragen) staat in de `<head>` van de productiepagina — de wachtende actie sinds 2026-08-02 ([Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md)) blijkt afgerond. Denzel kan dit niet zelf in [Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md) markeren (buiten schrijfrechten van deze routine) — signaal voor lars/Website Agent om die notitie bij te werken.\n- Merknaam: overal zichtbaar correct \"HÏ Grip\" (og:title, twitter:title, `<title>`, JSON-LD `name`, paginatekst). De enige \"HI_Grip\"-vermeldingen staan in bestandsnamen/URL's van het logo (bv. `HI_Grip_logo_high_res.png`) — niet zichtbaar voor bezoekers, geen actie nodig.\n- Vertrouwens-elementen uit [Conversie Optimalisatie Checklist](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Analyse/Conversie%20Optimalisatie%20Checklist.md) staan er: contactgegevens (e-mail, telefoon, KVK), Trustpilot-link, klantlogo's (Hogeschool Rotterdam, Concordia, SYTH, Sport2000), wetenschappelijke bronvermeldingen.\n\n**SEO-check (alsnog uitgevoerd, 31-08 later op de dag):**\n- `<title>` = **\"HÏ Grip\"** — slechts 7 tekens, ver onder de aanbevolen ~50-60. Geen keyword (\"gripsokken\", \"performance sportswear\") in de title — gemiste SEO-kans op de homepage. **Voorstel:** iets als \"HÏ Grip — Performance Gripsokken voor Sporters\" (past binnen 50-60 tekens, bevat het hoofdkeyword).\n- `<meta name=\"description\">` = 175 tekens — iets boven de aanbevolen ~120-155, risico op afkappen in Google-resultaten. **Voorstel:** inkorten met ~20 tekens, kernboodschap (grip + comfort + minder blessures) behouden.\n- Sitemap bereikbaar op `https://www.higrip.nl/sitemap.xml` (HTTP 200) — een geldige sitemap-index met 9 sub-sitemaps (producten/pagina's/collecties/blogs, NL+EN), plus een \"agentic discovery sitemap\" (sluit aan bij de Shopify-agentic-commerce-ontwikkeling uit de AI-ontwikkelingen hieronder).\n- FAQPage-inhoud (8 vragen) inhoudelijk gecheckt: missie, verzorging, levertijd, zakelijk-aanbod-link, FAQ-paginalink — lijkt allemaal actueel, geen verwijzingen naar iets verouderds gevonden.\n- Zoals altijd: geen van deze twee bevindingen (title/description) is door Denzel zelf aangepast — alleen gesignaleerd met een concreet voorstel, wijziging is aan lars/Website Agent via de reguliere procedure ([Technische Procedures](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Technische%20Procedures.md)).\n\n**AI-ontwikkelingen:** gerichte websearch gedaan naar wat er de afgelopen periode concreet is bijgekomen voor contentcreatie/marketing/e-commerce, zie hieronder — met één vondst die direct een bekende blocker raakt (Buffer-MCP).\n\n### Openstaande beslissingen voor lars\n\n- ~~**Egress-toegang tot higrip.nl vrijgeven voor deze cloud-routine.**~~ — **opgelost, bleek tijdelijk.** Bij een tweede check later op 31-08 werkten WebFetch én curl naar `higrip.nl` gewoon (HTTP 200) — de eerdere 403 op de CONNECT-tunnel was kennelijk een voorbijgaand probleem van de egress-proxy, geen permanente blokkade. Geen verdere actie van lars nodig, wel iets om in de gaten te houden als het volgende week weer optreedt.\n- **Structured data staat live, [Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md) klopt niet meer.** Organization/WebSite/FAQPage JSON-LD staat op de productie-homepage (bevestigd 31-08) — de notitie zegt nog \"nog niet door lars naar het live theme gekopieerd\". Voorstel: lars of Website Agent werkt [Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md) bij zodat de status klopt (buiten schrijfrechten van deze routine).\n- **SEO-titel en meta-description homepage aanpassen.** Title is nu alleen \"HÏ Grip\" (7 tekens, geen keyword); description is 175 tekens (net te lang). Voorstel staat hierboven bij de SEO-check — kleine, lage-risico wijziging via de reguliere theme-procedure.\n- **Buffer MCP-server koppelen** (zie AI-ontwikkelingen) — voorstel: koppel Buffer via de OAuth-custom-connector in Claude (geen API-key nodig, een paar klikken). Dit lost in één keer twee bekende blockers op: het \"fundamenteel gat\" uit de kritische kwaliteitsreview van 25-08 (Buffer als ontbrekende feedbackbron) én de reden waarom Content Agent's contentkalender-automatisering nog niet gebouwd kon worden.\n- ~~**Sport Ondernemers Expo (4 nov 2026)**~~ — afgehandeld 31-08: door lars geschrapt, geen HÏ Grip-fit (B2B-vakbeurs).\n- **Urban Trail Rotterdam & Rotterdam Charity Run** (MIDDEL, toegevoegd 2026-08-24) — wachten nog op een eerste beoordeling/budget-check.\n- **Merk & Bedrijf Database / Retailer Database** — nog steeds niet bevestigd of deze verwijderd mogen worden (lijken overbodig, functie al gedekt door andere bestanden).\n\n### Vooruitblik — komende week\n\n1. **Title tag en meta description van de homepage verbeteren** — concreet voorstel staat in de SEO-check hierboven; kleine wijziging, kan snel via de reguliere theme-procedure.\n2. **[Update Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/03_Website_Agent/Technisch/Update%20Log.md) laten bijwerken** — structured data staat al live, de notitie zegt nog van niet.\n3. **Buffer-koppeling opzetten** via de nieuwe OAuth-MCP-server — daarna kan zowel de Buffer-feedbackloop als (op termijn) een voorstel voor Content Agent-automatisering opnieuw bekeken worden.\n4. **Beoordeling geven op de openstaande Events-kandidaten** (Urban Trail Rotterdam, Rotterdam Charity Run) — liggen al een week te wachten op een budget-check.\n5. **Analytics-vervolgstappen oppakken nu GA4 een week draait:** funnel-rapport op de historische data (mrt–dec 2025) om het grootste CRO-startpunt te vinden, en checken of purchase-events daadwerkelijk doorkomen.\n\n### AI-ontwikkelingen die relevant kunnen zijn\n\n1. **Buffer heeft een gratis MCP-server gelanceerd** (27 mei 2026, beschikbaar op elk abonnement incl. het gratis plan) — Claude kan als custom connector via OAuth verbinden (geen API-key), en kan dan posts opstellen, plannen, de wachtrij beheren en analytics uitlezen. Dit is direct relevant: lost het \"Buffer ✗\"-gat uit de kwaliteitsreview van 25-08 op én de reden waarom Content Agent-automatisering nog niet gebouwd was (contentkalender staat in Buffer, koppeling stond op \"requires authentication\").\n2. **Shopify's agentic-commerce-laag (Storefront MCP / Universal Commerce Protocol) is dit jaar breed uitgerold** — elke Shopify-store krijgt een eigen Storefront MCP-server, waardoor AI-shopassistenten (ChatGPT e.d.) productdata direct kunnen doorzoeken. Relevant voor `/shopify-seo`: goede structured data/productdata wordt niet alleen een Google-zoekwoordvraag maar ook een \"vindbaar zijn voor AI-shopagents\"-vraag — extra reden om de nog-niet-live structured data (zie hierboven) alsnog naar live te krijgen.\n3. **Pippit** (AI-tool die contentcreatie combineert met publiceren en analytics, gericht op commerce) — zet productpagina's/bronmateriaal automatisch om in video's en avatar-content, met een gedeelde kalender voor distributie. Kan relevant zijn voor `/video-productie` en `/social-content` als sneller startpunt voor productvideo's, zonder dat het de eigen HÏ Grip-beeldtaal (échte producten/mensen) hoeft te vervangen.\n\n### Gerelateerde bestanden\n\n- [Stappenplan — Verdere Bouw](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Stappenplan%20%E2%80%94%20Verdere%20Bouw.md)\n- [Feedback & Iteratie Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Feedback%20%26%20Iteratie%20Log.md)\n- [Agent Werk & Kwaliteit Overzicht](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Agent%20Werk%20%26%20Kwaliteit%20Overzicht.md)\n\n## Acties\n\n- [x] P2 · Homepage-title en meta description aanpassen — overgenomen in Week 2026-09-14\n- [x] P3 · Update Log bijwerken (structured data stond live) — overgenomen in Week 2026-09-14\n- [x] P2 · Buffer MCP-server koppelen — gedaan 01-09, zie Feedback & Iteratie Log\n- [x] P2 · Events-kandidaten Urban Trail / Charity Run beoordelen — overgenomen in Week 2026-09-14\n- [x] P2 · Funnel-rapport op historische GA4-data en purchase-events checken — overgenomen in Week 2026-09-14\n\n## Bronnen\n\n- Origineel: [Week 2026-08-31](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Weekoverzicht/Week%202026-08-31.md) (`04_Agent_Infrastructuur/Beheer/Weekoverzicht/`)\n- Routine: [Denzel Weekoverzicht — Routine](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Denzel%20Weekoverzicht%20%E2%80%94%20Routine.md)\n\n## Aantekeningen",
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
   "prioriteit": "P3",
   "routine": "denzel-week",
   "samenvatting": "Structured data bleek op 31-08 wél live (Organization/WebSite/FAQPage); de homepage-title is maar 7 tekens en de description 175. Buffer heeft een gratis MCP-server gelanceerd. Sport Ondernemers Expo geschrapt door lars.",
   "status": "gearchiveerd",
   "titel": "Denzel Weekoverzicht — 2026-08-31",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-08-31-weekoverzicht.md",
   "vervangt": [
    "2026-08-24-weekoverzicht"
   ]
  },
  {
   "acties": [
    {
     "afgevinkt": true,
     "id": "2026-08-24-weekoverzicht#f1807684",
     "prioriteit": "P2",
     "tekst": "Sport Ondernemers Expo (4 nov 2026) beoordelen — geschrapt door lars op 31-08, geen fit"
    },
    {
     "afgevinkt": true,
     "id": "2026-08-24-weekoverzicht#f8ab4b38",
     "prioriteit": "P2",
     "tekst": "Urban Trail Rotterdam en Rotterdam Charity Run beoordelen — overgenomen in Week 2026-09-14"
    },
    {
     "afgevinkt": true,
     "id": "2026-08-24-weekoverzicht#b9dd7542",
     "prioriteit": "P2",
     "tekst": "GA4-stappen afronden (Analytics & KPI Dashboard) — GA4 live sinds 30-08"
    },
    {
     "afgevinkt": true,
     "id": "2026-08-24-weekoverzicht#73b8d50e",
     "prioriteit": "P3",
     "tekst": "Merk & Bedrijf Database / Retailer Database: bevestigen of ze weg mogen — overgenomen in Week 2026-09-14"
    }
   ],
   "body_md": "# Denzel Weekoverzicht — 2026-08-24\n\n## In het kort\n\nVervangen door het weekoverzicht van 31 augustus; de openstaande beslissingen zijn daar overgenomen. Bewaard als archief.\n\n## Bevindingen\n\n> Eerste run van de wekelijkse routine.\n\n### Voortgang per hoofdagent\n\n- **Content Agent** — Video & Visuele Productie Agent staat op \"in ontwikkeling\" (skill `/video-productie` sinds 2026-08-09), maar nog niet ingezet sinds bouw. Caption & Copy Agent en Content Strategie & Planning Agent blijven bewust \"idee\" (gedekt door de generieke `/social-content`- en `/content-strategy`-skills). Geen openstaande actie deze week.\n- **Partnership Agent** — B2B Klanten Agent: laatste zoekactie 2026-08-21 (3 dagen geleden), binnen de 1-2 weken-marge — deze week geen nieuwe zoekactie nodig. Partnerships & Events Agent: kandidatenlijst bleek 5+ weken niet bijgewerkt — deze week zelf een zoekactie gedaan (zie hieronder). Influencer & Creator Agent draait ongewijzigd actief via het IG-zoekscript.\n- **Website Agent** — Alle 4 sub-agent skills (`/shopify-seo`, `/shopify-design`, `/shopify-copy`, `/shopify-cro`) staan sinds 2026-08-09 op \"in ontwikkeling\", geen van alle heeft sindsdien output gehad. Analytics & KPI Dashboard staat nog open — geen bevestiging dat lars de GA4-stappen heeft afgerond.\n\n### Wat ik deze week zelf heb opgepakt\n\n**B2B Klanten (Lijn A):** geen zoekactie — de kandidatenlijst is al op 2026-08-21 bijgewerkt (3 dagen geleden), dat valt binnen de 1-2 weken-marge.\n\n**Samenwerkingen/Events (Lijn B):** wél een zoekactie — de kandidatenlijst was sinds 2026-07-17 niet meer aangevuld (5+ weken). Gezocht via de kanalen/zoektermen uit [Zoek Script & Gids (Samenwerkingen)](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20B%20-%20Samenwerkingen/Zoek%20Script%20%26%20Gids%20%28Samenwerkingen%29.md): voetbaltoernooien, padel-events, sportvoeding-co-activaties, hardloopevenementen en CrossFit/obstacle run, Rotterdam eerst. De meeste treffers vielen af bij toetsing aan [Voorwaarden Samenwerking](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20B%20-%20Samenwerkingen/Voorwaarden%20Samenwerking.md): Premier Padel Rotterdam is mega-tier (al bekend afwijsvoorbeeld), CrossFit RTM is een gym/box zonder eigen event (geen Lijn B-fit), voetbaltoernooien.info/Tournify zijn platforms, geen partners zelf.\n\n2 nieuwe, echte kandidaten toegevoegd (MIDDEL-prioriteit) aan [Voorbeelden Gevonden Organisaties (Events)](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20B%20-%20Samenwerkingen/Voorbeelden%20Gevonden%20Organisaties%20%28Events%29.md):\n- **Urban Trail Rotterdam (Golazo)** — jaarlijkse stadsloop door Rotterdam-Zuid (27 sep 2026), eigen sponsorpagina + contact (sponsoring@golazo.com). Schaal nog niet bevestigd, dus MIDDEL i.p.v. HOOG tot een budget-check.\n- **Rotterdam Charity Run (Erasmus MC Foundation)** — jaarlijks hardloop-/wandelevenement incl. Business Run-categorie (5 jun 2026, Kralingse Bos), direct telefoon/e-mailcontact. Charity- i.p.v. puur performance-karakter, vandaar MIDDEL.\n\nGeen van beide is al in [Pipeline Tracker](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Pipeline%20Tracker.md) of de bestaande lijst opgenomen — geen dubbelingen.\n\n### Openstaande beslissingen voor lars\n\n- **Sport Ondernemers Expo (4 nov 2026)** — tijdgevoelig, HOOG-kandidaat staat al langer klaar in [Voorbeelden Gevonden Organisaties (Events)](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/02_Partnership_Agent/B2B_Samenwerkingen/Lijn%20B%20-%20Samenwerkingen/Voorbeelden%20Gevonden%20Organisaties%20%28Events%29.md), nog niemand benaderd (outreach = Altijd overleg vooraf).\n- De 2 nieuwe MIDDEL-kandidaten (Urban Trail Rotterdam, Rotterdam Charity Run) wachten op een eerste beoordeling van lars of ze een budget-check waard zijn.\n- **Analytics & KPI Dashboard** (Website Agent) — nog steeds geen bevestiging dat de GA4-stappen (gcloud-login, Property-ID, credentials) zijn afgerond.\n- **Merk & Bedrijf Database / Retailer Database** — lijken overbodig (functie al gedekt door andere bestanden), nog te bevestigen door lars of ze verwijderd mogen worden.\n\n### AI-ontwikkelingen die relevant kunnen zijn\n\n1. **Shopify Magic accepteert nu preciezere input** (doelgroep-persona, keywords, concurrent-link) bij het genereren van producttitels/meta descriptions/alt-tekst — direct bruikbaar binnen `/shopify-seo` en `/shopify-copy` als extra invoer, geen aparte tool nodig.\n2. **Yotpo Discover (AEO/GEO voor e-commerce)** — houdt bij hoe een merk verschijnt in ChatGPT/Gemini/Google AI Mode, tot op product/categorie-niveau. Relevant voor `/shopify-seo`: SEO verschuift deels naar \"vindbaar zijn in AI-antwoorden\", nog geen actie nodig maar goed om te volgen.\n3. **EU AI Act-verplichting vanaf 2 augustus 2026**: AI-gegenereerde content (incl. synthetische stemmen/deepfakes) moet herkenbaar gelabeld worden. Relevant voor `/video-productie` en `/social-content` zodra AI-voice-over of AI-gegenereerd beeld wordt gebruikt in socials.\n4. **Veo 3-integratie in videotools als CapCut/Dreamina** — tekst-naar-scène-generatie met karakterconsistentie voor Reels/Shorts. Kan `/video-productie` versterken voor snellere concept-previews, mits het geen HÏ Grip-merkbeeld (échte producten/mensen) moet vervangen.\n\n### Gerelateerde bestanden\n\n- [Stappenplan — Verdere Bouw](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Stappenplan%20%E2%80%94%20Verdere%20Bouw.md)\n- [Feedback & Iteratie Log](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Feedback%20%26%20Iteratie%20Log.md)\n- [Agent Werk & Kwaliteit Overzicht](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Agent%20Werk%20%26%20Kwaliteit%20Overzicht.md)\n\n## Acties\n\n- [x] P2 · Sport Ondernemers Expo (4 nov 2026) beoordelen — geschrapt door lars op 31-08, geen fit\n- [x] P2 · Urban Trail Rotterdam en Rotterdam Charity Run beoordelen — overgenomen in Week 2026-09-14\n- [x] P2 · GA4-stappen afronden (Analytics & KPI Dashboard) — GA4 live sinds 30-08\n- [x] P3 · Merk & Bedrijf Database / Retailer Database: bevestigen of ze weg mogen — overgenomen in Week 2026-09-14\n\n## Bronnen\n\n- Origineel: [Week 2026-08-24](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Weekoverzicht/Week%202026-08-24.md) (`04_Agent_Infrastructuur/Beheer/Weekoverzicht/`)\n- Routine: [Denzel Weekoverzicht — Routine](https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/04_Agent_Infrastructuur/Beheer/Denzel%20Weekoverzicht%20%E2%80%94%20Routine.md)\n\n## Aantekeningen",
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
   "prioriteit": "P3",
   "routine": "denzel-week",
   "samenvatting": "Eerste run van de wekelijkse Denzel-routine. Events-zoekactie leverde 2 MIDDEL-kandidaten (Urban Trail Rotterdam, Rotterdam Charity Run); de vier Website-skills hebben sinds 09-08 geen output; de GA4-stappen wachten op lars.",
   "status": "gearchiveerd",
   "titel": "Denzel Weekoverzicht — 2026-08-24",
   "vault_url": "https://github.com/HIGrip/HI-Grip-Vault-/blob/H%C3%8F-Grip-Vault-obsidian/05_Research/2026-08-24-weekoverzicht.md",
   "vervangt": []
  }
 ],
 "stats": {
  "open_per_prioriteit": {
   "P1": 21,
   "P2": 43,
   "P3": 30
  },
  "per_categorie": {
   "CRO": 3,
   "Compliance": 1,
   "Merk": 3,
   "SEO": 7,
   "Social": 1,
   "Techniek": 1
  },
  "per_week": [
   {
    "aantal": 0,
    "start": "2026-07-06",
    "week": "2026-W28"
   },
   {
    "aantal": 0,
    "start": "2026-07-13",
    "week": "2026-W29"
   },
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
    "aantal": 1,
    "start": "2026-09-21",
    "week": "2026-W39"
   }
  ],
  "totaal_notities": 16
 },
 "vault_branch": "HÏ-Grip-Vault-obsidian"
};
