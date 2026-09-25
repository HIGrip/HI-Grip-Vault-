# HÏ Grip — Actiebacklog

**Dit is het enige bestand dat je dagelijks hoeft te openen.**
De dagrapporten zijn archief; hier staat wat er te doen is.

Laatst bijgewerkt: 25 september 2026 (social)
Open: 18 · Afgerond: 0 (3 opgelost, wordt zondag verplaatst naar AFGEROND.md)

Zet een `x` tussen de haken als iets af is. De routine ruimt afgevinkte punten elke zondag op en verplaatst ze naar `AFGEROND.md`.

---

## P1 — Deze week

### [x] ~~[regressie] Oude productpagina's kannibaliseren nog het hoofdkeyword~~ — opgelost, canonical URL wel gewijzigd (bijgewerkt 21 sep 2026)
**Wat er is gebeurd:** De productpagina-handle is sindsdien veranderd: het hoofdproduct heet nu `/products/performance-gripsokken` (was `/products/hi-grip-gripsokken-1`), en de twee oude URL's zijn mee omgenoemd naar `/products/performance-gripsokken-2-0-zwart` en `-wit`. Alle drie de eerder gemelde oude adressen (`hi-grip-gripsokken-1`, `performance-grip-socks-2-0-zwart`, `-wit`) geven nu automatisch een redirect naar hun nieuwe tegenhanger — geverifieerd met een `fetch`-test op 21 september 2026, canonical-tag op de live pagina klopt.
**Let op:** De canonical handle in je eigen documentatie (projectgeheugen, theme-editor preview-links, mobiel-testinstructies) verwijst nog overal naar het oude `hi-grip-gripsokken-1`. Die links werken dankzij de redirect nog wel, maar zijn niet meer accuraat.
**Gevonden op:** 15 september 2026 (regressiecheck), opgelost/herzien 21 september 2026 (SEO-technisch)

### [ ] [regressie] GA4 key event voor `purchase` staat nog steeds uit
**Waarom:** `keyEvents = 0` op elk kanaal, deze en vorige week. Blokkeert elke CRO-uitspraak (zie ook projectgeheugen, actie #1 uit de audit).
**Waar:** GA4-property 476032345 → Admin → Events
**Wat:** `purchase` markeren als key event.
**Gevonden op:** 15 september 2026 (regressiecheck)

### [ ] [regressie] SEO-schema-thema-wijzigingen gedeeltelijk gepusht, nog niet compleet (bijgewerkt 21 sep 2026)
**Waarom:** Sinds 15 september is een deel van `hi-seo-schema.liquid` kennelijk live gezet: `Organization` en `BreadcrumbList` staan nu overal waar verwacht (vorige week ontbrak `BreadcrumbList` nog op 6 van de 8 URL's). Maar `WebSite` staat alleen op de homepage en de padel-pagina — niet op de productpagina, beide collectiepagina's of de blogpagina's. `ItemList` ontbreekt nog op beide collectiepagina's. `FAQPage` ontbreekt nog op de productpagina (de herschreven `product-schema.liquid` lijkt niet meegenomen). `/pages/gripsokken-voetbal` geeft nog steeds 404.
**Waar:** `C:\Users\Test\higrip-theme` → Shopify test-thema 194761425223
**Wat:** Nagaan welk bestand wél en welk niet is gepusht (vermoedelijk alleen een deel van `hi-seo-schema.liquid`), dan de rest alsnog pushen — inclusief `product-schema.liquid` (FAQPage) en `templates/page.gripsokken-voetbal.json`.
**Gevonden op:** 15 september 2026 (regressiecheck), bijgewerkt 21 september 2026 (regressiecheck)

### [x] ~~[regressie] Homepage heeft 2× H1~~ — opgelost (bevestigd 21 sep 2026)
**Wat er is gebeurd:** De homepage heeft nu precies één `<h1>` (de zichtbare hero-titel). De eerder gemelde verborgen `visually-hidden` H1 is niet meer aanwezig of niet meer als `<h1>` gerenderd.
**Gevonden op:** 15 september 2026 (regressiecheck), opgelost/bevestigd 21 september 2026 (regressiecheck)

### [ ] [regressie] Nieuwe `/en/`-sectie heeft een lege, keyword-loze title-tag (nieuw 21 sep 2026)
**Waarom:** `sitemap.xml` bevat sinds deze week vier extra `/en/`-sub-sitemaps (products, pages, collections, blogs) die er bij de vorige check niet waren — een Engelse marktuitbreiding die niet in het projectgeheugen staat. `hreflang` (x-default/nl/en) staat correct op zowel NL- als EN-homepage en de canonical klopt, maar de EN-title is enkel `HÏ Grip` — exact hetzelfde probleem dat de NL-homepage vóór 15 september had.
**Waar:** `https://www.higrip.nl/en/`
**Wat:** Engelse title en meta description toevoegen, analoog aan de bestaande NL-teksten.
**Gevonden op:** 21 september 2026 (regressiecheck)

### [ ] [regressie] `/collections/all` heeft geen meta description
**Waarom:** Lege `<meta name="description">` — al genoteerd in de audit van 15 september, nog niet opgelost.
**Waar:** `/collections/all`
**Wat:** Beschrijving toevoegen via Shopify admin → SEO-instellingen van de collectiepagina.
**Gevonden op:** 15 september 2026 (regressiecheck)

### [ ] 1. Toon de gratis-verzendingsdrempel op de productpagina (herzien 24 sep 2026)
**Update 24 sep 2026:** Live prijzen en drempel zijn veranderd: 1-pack €13,49, verzendkosten €4,50, drempel volgens announcementbar €35 (FAQ zegt nog €30 — eerst gelijktrekken, zie P1-actie in vault-notitie `2026-09-23-seo-conversietest-run-1`). Omdat het 3-pack per paar nog maar €0,17 goedkoper is dan een 1-pack, is gratis verzending nu hét argument voor het 3-pack — dit punt weegt daardoor zwaarder. Balktekst bij 1-pack: "Nog €21,51 tot gratis verzending". Laat het bedrag uit één theme-setting komen, niet hardcoded.
**Waarom:** 48% van de Nederlandse winkelwagenverlating komt door onverwachte verzendkosten — het grootste enkele conversielek dat er is. Je 1-pack kost €13,49, je drempel ligt op €35. Elke 1-pack-koper loopt in die verrassing.
**Waar:** `snippets/product-information-content.liquid`, direct onder de prijs
**Wat:** Voortgangsbalk met "Nog €21,51 tot gratis verzending" die meerekent met de gekozen pack-variant. Bij 3-pack en 5-pack verandert hij in "✓ Gratis verzending".
**Effect:** Grootste verwachte conversiewinst van deze hele lijst. Duwt bovendien richting 3-pack.
**Inspanning:** Half dagdeel

### [ ] 2. Reviewapp koppelen — pas dáárna AggregateRating (herzien 15 sep 2026)
**Waarom:** Sterren in de SERP verhogen de doorklikratio zichtbaar. Maar de volgorde was omgekeerd: `snippets/product-schema.liquid` bevatte al een `aggregateRating` met een hardcoded 4,5 uit 7 beoordelingen, terwijl er geen enkele zichtbare review op de productpagina staat. Dat is precies de overtreding die hieronder gewaarschuwd werd. Bij de audit van 15 september is die node **verwijderd**; het bestand rendeerde nog niet op de remote, dus het is nooit live geweest.
**Waar:** eerst Shopify admin (reviewapp), daarna pas `snippets/product-schema.liquid`
**Wat:** 1) Koppel een reviewapp die echte klantbeoordelingen verzamelt. 2) Zorg dat de beoordelingen zichtbaar op de productpagina staan. 3) Zet dan pas de `aggregateRating` terug, gevoed uit de metafields van die app — nooit met vaste waarden.
**Let op:** Zolang stap 1 en 2 niet af zijn, is dit punt geblokkeerd. Niet vooruitlopen.
**Effect:** Hogere CTR op je belangrijkste zoekterm zonder dat je positie hoeft te stijgen.
**Inspanning:** Reviewapp een half dagdeel, schema daarna 1 uur

### [x] ~~3. Meta title en description live zetten~~ — live (bevestigd 24 sep 2026)
**Wat er is gebeurd:** Staat live met iets andere tekst: title `Gripsokken | Maximale Grip voor Elke Sport | HÏ Grip`, description met "3000+ sporters" en "vanaf €35". Let op: die €35 moet kloppen met de verzenddrempel-actie uit `2026-09-23-seo-conversietest-run-1`.
**Oorspronkelijk:** Staat al klaar in het projectgeheugen maar is nog niet toegepast. Dit is gratis winst die al maanden wacht.
**Titel:** `Gripsokken | Anti-Slip Sportsokken voor Elke Sport | HÏ Grip`
**Beschrijving:** `Voorkom glijden in je schoen met HÏ Grip gripsokken. Voor padel, voetbal, rugby & fitness. ✓ 1500+ sporters ✓ Gratis verzending vanaf €30 ✓ Vandaag verzonden`
**Inspanning:** 15 minuten

### [ ] 11. Controleer of trackingscripts nog vuren na de Checkout Extensibility-deadline (nieuw 17 sep 2026, aangevuld 25 sep 2026)
**Update 25 sep 2026 — begin hier:** In de live broncode staat de Google & YouTube-app-pixel (GA4 `G-MP0982HHKM` + Merchant Center `MC-8TZQW9T6Q7`, stuurt ook `purchase`) op `dataSharingState: optimized`. Sinds 13 jan 2026 mag Shopify in die stand de datadeling pauzeren als er dagen of weken geen signalen zijn. Dat kan de nul `purchase`-events verklaren. Stap 0: Instellingen → Klantgebeurtenissen → App-pixels → activity log van de Google-pixel bekijken (historie vanaf 3 juni 2026), dan Mode op **Always on** zetten. De tweede app-pixel (account `raqds3-tb`) staat ook op optimized: nagaan welke app dat is.
**Waarom:** Shopify's harde deadline voor niet-Plus winkels om te migreren naar Checkout Extensibility was 26 augustus 2026. Wie toen niet gemigreerd was, kreeg een automatische upgrade waarbij het complete "Additional Scripts"-veld werd leeggetrokken — Google Ads-tracking, Meta pixel en GTM-containers stoppen dan zonder zichtbare storefront-fout. Dit hangt direct samen met het al openstaande punt hieronder dat GA4 `keyEvents = 0` toont op elk kanaal: het kan zijn dat niet alleen de key-event-instelling ontbreekt, maar dat het onderliggende trackingscript zelf al drie weken dood is.
**Waar:** Shopify admin → Instellingen → Checkout (Additional Scripts-veld + eventuele checkout-tracking-apps)
**Wat:** Controleren of `hi-grip.myshopify.com` op een niet-Plus plan zit, of de migratie voor 26 augustus is afgerond, en of Meta pixel/Google Ads-tracking via een officiële app loopt in plaats van het oude scriptveld. Doe dit vóór je de GA4-key-event-actie hieronder als opgelost afvinkt.
**Effect:** Kan de verklaring zijn voor drie weken (of meer) ontbrekende conversiedata — blokkeert elke CRO-uitspraak zolang dit niet is uitgesloten.
**Inspanning:** 30 minuten controle

### [ ] 4. Controleer je variant-ID's tegen de Merchant Center-eis van maart 2026 (herzien 16 sep 2026 — opgewaardeerd naar P1)
**Waarom:** Producten met afwijkende attributen onder één ID riskeren verwerkingsproblemen en afkeuringen. Jij hebt zes varianten onder één product. Op NRF 2026 kondigde Google vier AI-shoppingfuncties aan (Universal Commerce Protocol, Native Checkout, Business Agent, Direct Offers) die allemaal leunen op dezelfde Merchant Center-feed — inclusief Universal Cart, dat producten laat toevoegen vanuit Search, Gemini, YouTube en Gmail. Een foutieve variant-ID kost dus niet meer alleen een Shopping-ad, maar ook zichtbaarheid in Google's AI Mode.
**Waar:** Shopify Merchant Center-feedinstellingen
**Wat:** Per variant een uniek, stabiel ID. Controleer of Shopify's feed dat correct doorgeeft.
**Extra controlepunt (toegevoegd 21 sep 2026):** Google verhoogt de minimale productafbeelding-eis naar 500×500px (universeel, nu al als waarschuwing zichtbaar, hard vanaf 31 januari 2027). Gecontroleerd op higrip.nl: hoofdproductfoto's zijn 1024×1024 en 1536×1024 — ruim boven de eis. Geen actie nodig, alleen meenemen als checkpunt zodra je nieuwe productfoto's upload (bijv. voor de skisokken).
**Inspanning:** 2 uur

---

## P2 — Deze maand

### [ ] 5. Bouw een bewijspagina rond je eigen meetdata
**Waarom:** De core update van maart/april beloonde webshops met eigen materiaal met ~22% meer zichtbaarheid. Jouw 1.17 wrijvingscoëfficiënt en 95%-claim zijn precies dat — maar ze staan nu alleen in campagnesecties, niet in een pagina die Google kan vinden en AI-modellen kunnen citeren.
**Waar:** Nieuwe pagina, bijv. `/pages/onderzoek` of `/pages/waarom-hi-grip-werkt`
**Wat:** Hoe is er gemeten, waartegen, met welke uitkomst. Grafiek of tabel. Meetmethode benoemen.
**Effect:** Dubbel — organische autoriteit én de citeerbare bron die AI-assistenten nodig hebben om jou aan te bevelen.
**Inspanning:** 1 dag

### [ ] 6. Schrijf de vraagpagina's antwoord-eerst, mét FAQPage-schema (herzien 22 sep 2026)
**Waarom:** 31% zoekt inmiddels via generatieve AI; LLM-verkeer converteert op 5,53% tegen 3,7% organisch. Vraagvormige long-tails komen in die antwoorden terecht — mits de conclusie bovenaan staat. **Terugdraaiing t.o.v. 15 sep:** toen is `FAQPage`-schema geschrapt omdat de AI Overviews-gids zei dat structured data "niet vereist" is voor AI-citaties — dat klopt nog steeds, maar onderzoek van maart 2026 (Universiteit van Tokio/Tsukuba) laat zien dat een schone kop-en-antwoordstructuur ~2,8× vaker geciteerd wordt door AI-antwoordmachines, en dat het specifieke "antwoordcapsule"-patroon een gemeten +17,3% citatiekans oplevert over zes engines. Niet vereist ≠ geen effect. Concurrent FitSockr heeft bovendien al een ongestructureerde blogpost live op exact de long-tail "wat zijn gripsokken" — reden om hier niet halfslachtig in te zitten.
**Welke:** "Waarom glijdt mijn voet in mijn padelschoen?" · "Wat zijn gripsokken?" · "Tapedesign alternatief"
**Format:** Direct onder elke vraag-H2 een zelfstandige alinea van 40-60 woorden die de vraag volledig beantwoordt, zonder link of opmaak erin. Onderbouwing en eventuele link komen in de alinea daarna. `FAQPage` JSON-LD eronder — niet voor rich results (die bestaan niet meer sinds mei 2026), maar als machineleesbare, vooraf afgebakende vraag-antwoordparen voor AI-crawlers.
**Inspanning:** 1 dag voor alle drie

### [ ] 7. Productvideo van 30–60 seconden op de productpagina
**Waarom:** Meest consistent bewezen CRO-tactiek van 2026: +10 tot 30% conversie. Geen enkele andere losse ingreep haalt dat betrouwbaarheidsniveau.
**Wat:** De sok in actie — slide-out op de padelbaan, close-up van de grip. Geen praatvideo.
**Bonus:** Dezelfde opname is direct TikTok- en Reels-materiaal (zie punt 9).
**Inspanning:** 1 dag opname + montage

### [ ] 8. Perplexity Merchant Program — alleen als je naar de VS verzendt (nieuw 16 sep 2026, uitgebreid 23 sep 2026)
**Update 23 sep 2026:** De VS-vraag gaat nu over drie AI-kanalen tegelijk. ChatGPT Shopping haalt sinds 10 juli 2026 ~65% van de aanbevelingen uit feeds, en Shopify levert die via Agentic Storefronts automatisch aan ChatGPT en Copilot, maar alleen voor winkels die aan Amerikaanse kopers verkopen. ChatGPT Shopping zelf is voorlopig alleen in de VS live. Extra check (5 min): Shopify admin → Verkoopkanalen → **Agentic**: staat het aan, en welke kanalen zijn actief? Sinds 8 sep 2026 staat ook Meta (AI-agent Muse, alleen VS) in die lijst, en producten worden standaard gedeeld. Nog geen VS-verzendbeslissing nemen puur hierom.
**Waarom:** Perplexity's Merchant Program is sinds januari 2026 gratis open voor Shopify-winkels: geen listingkosten, geen commissie, automatische productsynchronisatie voor Amerikaanse Shopify-winkels. "Buy with Pro" biedt gratis verzending betaald door Perplexity zelf. Perplexity meldt 45 miljoen maandelijkse gebruikers en een vijfvoudige stijging in shopping-intentie-zoekopdrachten. Voorwaarde: bedrijven moeten verkopen én verzenden naar de VS.
**Waar:** Perplexity Merchant Program (aanmelding via Shopify-app of Perplexity zelf)
**Wat:** Eerst controleren of higrip.nl momenteel naar de VS verzendt. Zo niet, dit punt geblokkeerd laten staan.
**Effect:** Gratis extra AI-shoppingkanaal zonder commissie, mits geografisch van toepassing.
**Inspanning:** Controle 15 minuten; aanmelding zelf een half dagdeel indien van toepassing.

### [ ] 12. Toon prijs per paar naast de pack-selector (nieuw 17 sep 2026, herzien 24 sep 2026)
**Update 24 sep 2026:** Live prijzen zijn nu 1-pack €13,49 (doorgestreept €14,95) / 3-pack €39,95 / 5-pack €61,95 = €13,49 / €13,32 / €12,39 per paar. Het 3-pack scheelt maar €0,17 per paar (−1%): een per-paar-prijs tegen het 1-pack overtuigt dan niet. Twee opties: (a) per-paar-prijs afzetten tegen het ankerbedrag €14,95 ("€13,32/paar — 11% onder normaal"), of (b) eerst de pack-prijsladder zelf herzien (commerciële keuze). De bedragen hieronder zijn achterhaald.
**Waarom:** 2026-onderzoek naar prijsweergave laat zien dat het tonen van de prijs per stuk bij multipacks 5–15% meer conversie oplevert dan alleen de totaalprijs — ankering maakt de korting tastbaar. Jouw pack-structuur (1/3/5) is exact deze bundelvorm, maar de korting per paar staat nergens.
**Waar:** `snippets/product-information-content.liquid`, bij de variant-selector
**Wat:** "€X,XX/paar" tonen onder elke pack-optie, herberekend per gekozen variant — ~~1-pack €14,99/paar, 3-pack €13,99/paar, 5-pack €13,00/paar~~ (achterhaald door prijswijziging, zie update).
**Effect:** Versterkt samen met de gratis-verzendbalk (punt 1) de duw richting het 3-pack.
**Inspanning:** 1-2 uur

### [ ] 14. Controleer INP op productpagina en homepage — eigen JS is de waarschijnlijke boosdoener (nieuw 21 sep 2026)
**Waarom:** 2026-onderzoek naar Core Web Vitals op Shopify-winkels wijst INP (Interaction to Next Paint) aan als het metric waar winkels het vaakst op struikelen — en de oorzaak is bijna altijd eigen of app-JavaScript, niet het thema zelf. Landelijk haalt inmiddels 48% van mobiele sites alle drie de Core Web Vitals (was 44% in 2024), dus de lat ligt hoger dan voorheen.
**Waar:** Homepage en productpagina, plus eventuele resterende custom secties met eigen JS (bijv. `assets/hi-wk-promo.js` — geverifieerd op 21 sep 2026: de sectie zelf staat niet meer op de homepage, maar controleer of het script-bestand nog wordt geladen).
**Wat:** Draai PageSpeed Insights of het Core Web Vitals-rapport in Search Console, filter specifiek op INP (niet alleen LCP/CLS). Bij een slechte INP-score: zoek naar zware event-handlers in custom secties of apps.
**Effect:** Core Web Vitals wegen mee in mobiele ranking; een slechte INP-score is bovendien vaak voelbaar in de conversie zelf.
**Inspanning:** 1 uur meten, vervolgacties afhankelijk van bevindingen.

### [ ] 15. Bekijk het nieuwe Search Console-rapport voor generatieve AI-impressies (nieuw 22 sep 2026)
**Waarom:** Google heeft het "Prestaties in generatieve AI-functies"-rapport in Search Console op 3 juni 2026 gefaseerd uitgerold en dit is sinds 31 augustus 2026 wereldwijd beschikbaar. Het toont impressies uit AI Overviews, AI Mode en generatieve Discover per pagina, land en datum (nog geen kliks/CTR/zoekterm). Search Console staat al ingericht voor higrip.nl — dit is dus een gratis, direct beschikbare check.
**Waar:** Google Search Console → higrip.nl-property → nieuw AI-rapport
**Wat:** Eenmalig bekijken welke pagina's nu al impressies krijgen in AI-functies. Bepaalt of de vraagpagina's uit punt 6 vanaf nul beginnen of al ergens zichtbaar zijn.
**Effect:** Meetbaarheid — voorkomt dat je blind content bouwt zonder te weten wat al werkt in AI-zoekresultaten.
**Inspanning:** 15 minuten

### [ ] 16. Script-tag-apps overzetten vóór 1 maart 2027 — en Bundler-restanten opruimen (nieuw 24 sep 2026)
**Waarom:** Shopify stopt script tags in de Online Store op 1 maart 2027 (developer-changelog, 24 aug 2026). Op higrip.nl laden via script tags nu nog de Bundler-app (`cdn-bundler.nice-team.net`) en drie Trustpilot-scripts. Het projectgeheugen noemt de Bundler-app verwijderd na de WK-actie, maar live staan nog het script plus negen `bundler`-verwijzingen in de HTML — onnodig JavaScript dat ook punt 14 (INP) raakt. Trustpilot is je zichtbare review-proof; die mag niet stilletjes wegvallen.
**Waar:** Shopify admin → Apps (Bundler: nog geïnstalleerd?) en Online Store → Thema aanpassen → App embeds; Trustpilot-app-instellingen.
**Wat:** 1) Bundler-app verwijderen als hij niet meer gebruikt wordt, en eventuele achtergebleven app-blocks uit het thema halen. 2) Bij Trustpilot controleren of er een app-embed-versie is en overstappen. 3) Na afloop: `var urls = [...]` in de paginabron mag leeg zijn.
**Effect:** Voorkomt dat trust-widgets straks zonder foutmelding verdwijnen; minder JS op de productpagina.
**Inspanning:** 1 uur

### [ ] 13. Onderzoek TikTok Shop Nederland — directe verkoop via Shopify-koppeling (nieuw 18 sep 2026)
**Waarom:** TikTok Shop is sinds 15 juni 2026 officieel live in Nederland en koppelt via een losse app (bijv. SlashCart vanaf $9,99/maand, Optima gratis) rechtstreeks aan Shopify voor productsync, voorraad en orderafhandeling. De hele klantreis — ontdekken, valideren via creators, afrekenen — vindt dan binnen TikTok zelf plaats, met een "Fast Shipping"-badge die conversie verder verhoogt. Platformkosten: 2-8% commissie + $0,30 per transactie, plus optioneel 10-20% creator-affiliate-commissie.
**Waar:** TikTok Seller Center (seller-nl.tiktok.com) + Shopify App Store
**Wat:** Aanmeldprocedure doorlopen (KVK-gegevens, vier stappen, beoordeling 1-2 werkdagen) en beslissen of dit een los kanaal wordt naast higrip.nl of gecombineerd met het creator-plan (punt 9).
**Effect:** Extra verkoopkanaal in de grootste groeimarkt (padel) met lagere aankoopdrempel dan doorklikken naar een externe site — vereist wel bewaking van last-click-attributie, die dit verkeer mist.
**Inspanning:** Verkenning en aanmelding een half dagdeel; app-koppeling en catalogus-setup 1 dag.

---

## P3 — Op de radar

### [ ] 9. Padel-creators op prestatiebasis in plaats van vaste vergoeding (herzien 18 sep 2026, aangevuld 25 sep 2026)
**Update 25 sep 2026:** Derde route naast doorklikken en TikTok Shop: Meta's Creator Marketing Hub (wereldwijde uitrol t/m eind 2026) zet een creatorpost met één klik om naar een partnership ad vanaf je eigen account. Werkt pas als punt 10 staat.
**Waarom:** TikTok Shop converteert op 4,7% — meer dan het dubbele van Instagram. 34% van de Nederlandse 18–35'ers kocht al via social. En: 85% van AI-merkvermeldingen komt uit derde partijen, dus creator-content voedt tegelijk je AI-zichtbaarheid. TikTok Shop is sinds 15 juni 2026 live in Nederland — dat opent een tweede route naast doorklikken naar higrip.nl: verkopen direct in de app via dezelfde creator-commissiestructuur. Zie ook punt 13 hieronder.
**Aanpak:** Open plan op 10–12% commissie voor volume en reviews, daarna 18–25% voor de best presterende creators.
**Wachten op:** Punt 7 eerst (eigen videomateriaal) én punt 13 (bepaalt of dit richting higrip.nl, TikTok Shop, of beide wordt ingericht).

### [ ] 10. Conversions API (CAPI) instellen (herzien 18 sep 2026, aangevuld 25 sep 2026)
**Update 25 sep 2026:** Op higrip.nl draait op dit moment géén Meta- of TikTok-pixel. Een nieuw geïnstalleerde pixel zonder advertentieverkeer valt precies in Shopify's Optimized-pauzeprofiel. Zet hem daarom bij installatie meteen op **Always on** (Instellingen → Klantgebeurtenissen → App-pixels). Meta's one-click CAPI (sinds 15 apr 2026) staat in Events Manager.
**Waarom:** Zonder server-side signalen optimaliseert Meta op incomplete data. Relevant zodra je serieus gaat adverteren, niet eerder. Meta verwijderde op 12 januari 2026 de 7- en 28-dagen view-attributievensters uit de Ads Insights API (gerapporteerde conversies daalden 15-40% bij veel adverteerders) en mobiele Safari-pixeltracking is door iOS-privacybeperkingen nagenoeg dood (gaten tot 50-70%). CAPI is daarmee geen latere optimalisatie meer, maar de meetbasis vanaf de eerste advertentie-euro.
**Wachten op:** Een lopende advertentiebudget-beslissing.
**Let op:** Zodra die beslissing valt, CAPI vanaf dag 1 inrichten — niet pas toevoegen als de eerste campagnes al lopen.

---

## Hoe de routine hiermee omgaat

Elke ochtend leest de routine dit bestand voordat hij nieuw onderzoek doet:
- Al opgeschreven punten worden **niet opnieuw voorgesteld** in een andere formulering.
- Nieuwe vondsten worden hier toegevoegd, met prioriteit — niet alleen in het dagrapport.
- Als nieuw onderzoek een bestaand punt tegenspreekt of achterhaalt, wordt dat punt bijgewerkt of doorgestreept, met vermelding waarom.
