# HÏ Grip — Actiebacklog

> Map: [[Waar staat wat]]

**Dit is het enige bestand dat je dagelijks hoeft te openen.**
De dagrapporten zijn archief; hier staat wat er te doen is.

Laatst bijgewerkt: 29 oktober 2026 (actiecontrole)
Open: 29 · Afgerond: 8 (1 afgevinkt, wordt zondag verplaatst naar AFGEROND.md; 2 dubbel, zie dashboard)

Zet een `x` tussen de haken als iets af is. De routine ruimt afgevinkte punten elke zondag op en verplaatst ze naar `AFGEROND.md`.

---

## P1 — Deze week

### [x] [regressie] `/pages/gripsokken-voor-rugby` heeft twee H1-tags (nieuw 19 okt 2026)
**Bevestigd:** 27 oktober 2026 door actiecontrole — precies 1 h1 meer (class 'spf-hero__h1'), het losse tekstblok-h1 bovenaan is weg; https://www.higrip.nl/pages/gripsokken-voor-rugby
**Waarom:** Precies één `<h1>` per pagina is een vaste regel in de regressiecheck en is al eerder geschonden (de EN-homepage, 28 sep 2026, inmiddels opgelost). De nieuwe sportpagina `/pages/gripsokken-voor-rugby` (deze week voor het eerst in de sitemap) heeft nu zelf twee `<h1>`-tags: een los tekstblok bovenaan met `<h1>Gripsokken voor rugby</h1>` (de omringende div-klasse suggereert zelf "h2") plus de eigen `<h1 class="sl-hero__title">` van de hero-sectie eronder. Op de drie bestaande sportpagina's (padel, tennis, voetbal) ontbreekt dit bovenste blok of rendert het op een lager niveau: daar is alleen de hero-h1 aanwezig.
**Waar:** `/pages/gripsokken-voor-rugby` — het tekstblok direct boven de hero-sectie
**Wat:** Het heading-niveau van dat tekstblok van `h1` naar `h2` zetten (of het blok verwijderen als het een duplicaat is van de hero-titel), zodat net als bij de andere drie sportpagina's precies één `<h1>` overblijft.
**Gevonden op:** 19 oktober 2026 (regressiecheck)

### [ ] [regressie] `/pages/terugbetalingsbeleid` heeft titel "American Express" en geen meta description (nieuw 19 okt 2026)
**Waarom:** De pagina `/pages/terugbetalingsbeleid` (sinds deze week in de sitemap) gaat over het betalingsbeleid (H1: "Betalingsbeleid", met uitleg over betaalmethodes), maar de `<title>` die Google en browsers tonen is simpelweg "American Express" — een betaalmethode, geen paginatitel — en er is helemaal geen meta description. Dat is zowel verwarrend (het lijkt een American Express-pagina) als een gemiste SEO-kans.
**Waar:** `/pages/terugbetalingsbeleid` — SEO-titel en meta description via Shopify admin
**Wat:** Titel vervangen door iets herkenbaars zoals "Betalingsbeleid – HÏ Grip" en een meta description toevoegen die de beschikbare betaalmethodes samenvat.
**Gevonden op:** 19 oktober 2026 (regressiecheck)

### [ ] [regressie] Nieuwe verzend-/retour-/betalingspagina's zijn onvolledig en spreken de oude beleidspagina's tegen (nieuw 28 sep 2026)
**Waarom:** Deze week verschenen drie nieuwe pagina's (`/pages/verzendbeleid`, `/pages/retourbeleid`, `/pages/terugbetalingsbeleid`) die het besluit van Lars van 25 sep lijken te verwerken, maar dat nog niet volledig doen: `/pages/verzendbeleid` noemt nergens de verzendkosten (€4,50) of de gratis-verzenddrempel (€35); `/pages/retourbeleid` heeft de termijn wel naar 30 dagen gecorrigeerd, maar rekent nog steeds 25% herbevoorradingskosten en eist het product "ongeopend" terug — in strijd met de geest van het besluit en met het juridische risico dat al in de Compliance To-Do Lijst §4.2 staat. Tegelijk bestaan `/policies/refund-policy` (14 dagen, 25%), `/policies/shipping-policy` ("vóór 16:00") en `/policies/terms-of-service` (€4,25) gewoon door met de oude waarden: er zijn nu twee parallelle bronnen voor dezelfde informatie. De vervallen homepage-belofte "vóór 22:00 vandaag verzonden" staat via een gedeelde metafield ook op meerdere van deze pagina's.
**Waar:** `/pages/verzendbeleid`, `/pages/retourbeleid`, `/pages/terugbetalingsbeleid`, `/policies/refund-policy`, `/policies/shipping-policy`, `/policies/terms-of-service`
**Wat:** Eén bron van waarheid kiezen (waarschijnlijk de nieuwe `/pages/*`-pagina's), de oude `/policies/*`-pagina's laten doorverwijzen of bijwerken, de 25%-herbevoorradingskosten en de "ongeopend"-eis uit het retourbeleid halen, verzendkosten/-drempel op `/pages/verzendbeleid` zetten, en de 22:00-metatekst overal vervangen.
**Gevonden op:** 28 september 2026 (regressiecheck)

**Update 12 okt 2026 (werkthema, [[2026-10-12-werkthema-vs-live]]):** in het werkthema zijn alle thema-teksten al "binnen 1 werkdag verzonden" (sport-hero, sport-proof, shop-intro, padel-onderdelen, rugby-template) en staat `page.json` op 30 dagen retour; live nog niet. Het Shopify-beleid zelf loopt via `_uitvoer/2026-10-11-live-fixes/beleid-plakken.md`.
**Update 19 okt 2026 (regressiecheck):** grote voortgang, live. `/pages/verzendbeleid` noemt nu €4,50 en de €35-drempel; `/pages/retourbeleid` heeft geen 25%-herbevoorradingskosten en geen "ongeopend"-eis meer; `/policies/terms-of-service` toont nu ook €4,50. **Nog open:** `/policies/shipping-policy` zegt nog "vóór 16:00" (niet "binnen 1 werkdag"); `/policies/refund-policy` zegt nog "14 dagen" + 25% herbevoorradingskosten. Alleen deze twee oude `/policies/*`-pagina's resten nog. **Update 19 okt 2026 (Hermes, live gecontroleerd):** de twee `/policies/*`-pagina's zijn ook in de **Engelse** versie fout (`/en/policies/shipping-policy`: "before 16:00"; `/en/policies/refund-policy`: 14 dagen + 25% restocking). Beide NL-pagina's gebruiken de u-vorm ("uw"), tegen de tone of voice. `/en/pages/verzendbeleid` en `/en/pages/retourbeleid` zijn **niet vertaald** (inhoud is Nederlands). `/pages/verzendbeleid` en `/pages/retourbeleid` (NL) kloppen. **Wat:** Website Copy Agent schrijft concepten voor de vier policy-pagina's (NL en EN) op basis van [[Feiten & Actuele Staat]] (€4,50, gratis vanaf €35, binnen 1 werkdag, 30 dagen retour, geen herbevoorradingskosten, jij/je); Lars plakt ze in Shopify.
### [ ] [regressie] SEO-schema-thema-wijzigingen gedeeltelijk gepusht, nog niet compleet (bijgewerkt 21 sep 2026)
**Waarom:** Sinds 15 september is een deel van `hi-seo-schema.liquid` kennelijk live gezet: `Organization` en `BreadcrumbList` staan nu overal waar verwacht (vorige week ontbrak `BreadcrumbList` nog op 6 van de 8 URL's). Maar `WebSite` staat alleen op de homepage en de padel-pagina — niet op de productpagina, beide collectiepagina's of de blogpagina's. `ItemList` ontbreekt nog op beide collectiepagina's. `FAQPage` ontbreekt nog op de productpagina (de herschreven `product-schema.liquid` lijkt niet meegenomen). `/pages/gripsokken-voetbal` geeft nog steeds 404.
**Waar:** `C:\Users\Test\higrip-theme` → Shopify test-thema 194761425223
**Wat:** Nagaan welk bestand wél en welk niet is gepusht (vermoedelijk alleen een deel van `hi-seo-schema.liquid`), dan de rest alsnog pushen — inclusief `product-schema.liquid` (FAQPage) en `templates/page.gripsokken-voetbal.json`.
**Gevonden op:** 15 september 2026 (regressiecheck), bijgewerkt 21 september 2026 (regressiecheck)
**Update 19 okt 2026 (regressiecheck):** live, `WebSite` staat nu op alle vier sportpagina's (padel, tennis, voetbal, rugby) naast homepage en `/en/`; ontbreekt nog op de collectie, de drie productpagina's en beide blogindexen. `ItemList` ontbreekt nog op de collectie. `FAQPage` ontbreekt nog op de drie productpagina's — wel inmiddels aanwezig op homepage en `/en/` (nieuw, lost dit punt niet op). De typo-handle `/pages/gripsokken-voetbal` (zonder "voor") geeft nog steeds 404; de echte sportpagina `/pages/gripsokken-voor-voetbal` bestaat en werkt prima.

**Update 12 okt 2026 (werkthema, [[2026-10-12-werkthema-vs-live]]):** ItemList staat in het werkthema alleen in de nieuwe shop- en vergelijksecties (`sh-1`, `vg-1`); Organization.url via `shop.url` in `header.liquid`. WebSite en FAQPage op de productpagina en de voetbaltemplate staan ook in het werkthema nog niet. Niet live.
**Update 12 okt 2026 (verouderd-check):** het pad `C:\Users\Test\higrip-theme` en test-thema 194761425223 zijn verouderd. Het werkthema is nu 201133490503 ('AI website workspace 2.0'), live is 201132507463. Pull altijd vers met `shopify theme pull`.
### [ ] 1. Toon de gratis-verzendingsdrempel op de productpagina (herzien 24 sep 2026)
**Update 2 okt 2026 (vault-review):** sinds 28-9 zijn de prijzen weer €14,95 / €41,95 / €64,95 (zie [[Feiten & Actuele Staat]]). Balktekst bij 1-pack wordt dus "Nog €20,05 tot gratis verzending"; de bedragen hieronder zijn achterhaald. Het punt blijft staan.
**Update 24 sep 2026:** Live prijzen en drempel zijn veranderd: 1-pack €13,49, verzendkosten €4,50, drempel volgens announcementbar €35 (FAQ zegt nog €30 — eerst gelijktrekken, zie P1-actie in vault-notitie `2026-09-23-seo-conversietest-run-1`). Omdat het 3-pack per paar nog maar €0,17 goedkoper is dan een 1-pack, is gratis verzending nu hét argument voor het 3-pack — dit punt weegt daardoor zwaarder. Balktekst bij 1-pack: "Nog €21,51 tot gratis verzending". Laat het bedrag uit één theme-setting komen, niet hardcoded.
**Waarom:** 48% van de Nederlandse winkelwagenverlating komt door onverwachte verzendkosten — het grootste enkele conversielek dat er is. Je 1-pack kost €13,49, je drempel ligt op €35. Elke 1-pack-koper loopt in die verrassing.
**Waar:** `snippets/product-information-content.liquid`, direct onder de prijs
**Wat:** Voortgangsbalk met "Nog €21,51 tot gratis verzending" die meerekent met de gekozen pack-variant. Bij 3-pack en 5-pack verandert hij in "✓ Gratis verzending".
**Effect:** Grootste verwachte conversiewinst van deze hele lijst. Duwt bovendien richting 3-pack.
**Update 12 okt 2026 (werkthema, [[2026-10-12-werkthema-vs-live]]):** deels klaar in het werkthema, niet live: balk in het winkelwagenvenster (`snippets/free-shipping-bar.liquid`, drempel als thema-instelling, standaard €35) en een vertrouwensregel op de 2.0-productpagina uit dezelfde drempel. Nog niet: de balk op de productpagina die per pack meerekent.
**Update 12 okt 2026 (verouderd-check):** de prijsupdates hierboven kloppen niet meer. Live staat de 1.0 op 1-pack €14,95 · 3-pack €35,95 · 5-pack €54,95 (Section Store bundle-block; 3- en 5-pack tonen al 'Gratis verzending'). De balktekst bij een 1-pack blijft 'Nog €20,05 tot gratis verzending'. Het argument 'het 3-pack is per paar maar €0,17 goedkoper' vervalt: het scheelt nu €2,97 per paar. De €30 in de FAQ staat niet meer live.
**Inspanning:** Half dagdeel

### [ ] 2. Reviewapp koppelen — pas dáárna AggregateRating (herzien 15 sep 2026)
**Waarom:** Sterren in de SERP verhogen de doorklikratio zichtbaar. Maar de volgorde was omgekeerd: `snippets/product-schema.liquid` bevatte al een `aggregateRating` met een hardcoded 4,5 uit 7 beoordelingen, terwijl er geen enkele zichtbare review op de productpagina staat. Dat is precies de overtreding die hieronder gewaarschuwd werd. Bij de audit van 15 september is die node **verwijderd**; het bestand rendeerde nog niet op de remote, dus het is nooit live geweest.
**Waar:** eerst Shopify admin (reviewapp), daarna pas `snippets/product-schema.liquid`
**Wat:** 1) Koppel een reviewapp die echte klantbeoordelingen verzamelt. 2) Zorg dat de beoordelingen zichtbaar op de productpagina staan. 3) Zet dan pas de `aggregateRating` terug, gevoed uit de metafields van die app — nooit met vaste waarden.
**Let op:** Zolang stap 1 en 2 niet af zijn, is dit punt geblokkeerd. Niet vooruitlopen.
**Update 11 okt 2026 (weekonderhoud):** staat sinds 15 sep (26 dagen) zonder beweging op P1 — de drieweken-regel slaat aan. Niet verlaagd naar P2, want de CTR-winst blijft relevant zodra een reviewapp gekoppeld is; wel expliciet als blokkade gemarkeerd: dit punt wacht op een menselijke keuze (reviewapp koppelen) en kan niet door Claude worden opgepakt.
**Effect:** Hogere CTR op je belangrijkste zoekterm zonder dat je positie hoeft te stijgen.
**Inspanning:** Reviewapp een half dagdeel, schema daarna 1 uur

### [ ] 4. Controleer je variant-ID's tegen de Merchant Center-eis van maart 2026 (herzien 16 sep 2026 — opgewaardeerd naar P1)
**Waarom:** Producten met afwijkende attributen onder één ID riskeren verwerkingsproblemen en afkeuringen. Jij hebt zes varianten onder één product. Op NRF 2026 kondigde Google vier AI-shoppingfuncties aan (Universal Commerce Protocol, Native Checkout, Business Agent, Direct Offers) die allemaal leunen op dezelfde Merchant Center-feed — inclusief Universal Cart, dat producten laat toevoegen vanuit Search, Gemini, YouTube en Gmail. Een foutieve variant-ID kost dus niet meer alleen een Shopping-ad, maar ook zichtbaarheid in Google's AI Mode.
**Waar:** Shopify Merchant Center-feedinstellingen
**Wat:** Per variant een uniek, stabiel ID. Controleer of Shopify's feed dat correct doorgeeft.
**Extra controlepunt (toegevoegd 21 sep 2026):** Google verhoogt de minimale productafbeelding-eis naar 500×500px (universeel, nu al als waarschuwing zichtbaar, hard vanaf 31 januari 2027). Gecontroleerd op higrip.nl: hoofdproductfoto's zijn 1024×1024 en 1536×1024 — ruim boven de eis. Geen actie nodig, alleen meenemen als checkpunt zodra je nieuwe productfoto's upload (bijv. voor de skisokken).
**Extra controlepunt (toegevoegd 28 sep 2026):** Google's oude Content API for Shopping (voedt deze feed) geeft sinds 1 september 2026 al progressieve HTTP 410-fouten voor wie niet is overgezet naar de nieuwe Merchant API; volledige uitschakeling begin 2027. Shopify's native Google & YouTube-kanaal migreert gefaseerd vanzelf, maar product-ID's kunnen daarbij wijzigen — dezelfde app die volgens punt 11 ook op de riskante "Optimized"-pixelstand staat. Controleren: is de migratie voor `raqds3-tb` voltooid, en zijn product-ID's gewijzigd?
**Extra controlepunt (toegevoegd 30 sep 2026):** Universal Cart (NRF 2026-aankondiging) is geen concept meer: sinds 19 mei 2026 live in de VS, met AP2 als betaallaag (inmiddels overgedragen aan de FIDO Alliance). Uitbreiding naar de Gemini-app volgde deze zomer; Nederland/Europa staat nog niet op de rolluit-lijst. Geen actie nu, maar bevestigt dat dezelfde Merchant Center-feed straks ook de ingang voor Universal Cart wordt zodra dat naar Europa komt.
**Update 12 okt 2026 (verouderd-check):** 'zes varianten onder één product' klopt niet meer. De 1.0 heeft 2 maatvarianten (34-39 en 40-46). De 2.0 is gesplitst in twee producten (zwart en wit) met elk 3 maten (35-38, 39-42, 43-47). Packs zijn geen varianten maar een app-bundel. GTIN/EAN is bij alle varianten nog leeg.
**Extra controlepunt (toegevoegd 14 okt 2026):** Universal Cart/UCP (zie 30 sep) krijgt meer vorm voor Europa: het Verenigd Koninkrijk wordt genoemd als eerste Europese markt (na Canada en Australië), een DACH-uitrol is nog niet aangekondigd. Nexi Group en Google Cloud tekenden op 3 maart 2026 een MoU om agentic-commerce-infrastructuur (UCP/AP2-standaarden) in Europa op te bouwen — dit is infrastructuurwerk, nog geen productlancering. Nederland wordt nergens genoemd. Geen actie, blijft volgen.
**Update 19 okt 2026 (seo-conversietest, auditblok B):** concrete invulling klaar, niet live gezet. Voor de zes 2.0-varianten is een ondubbelzinnige GTIN-koppeling te maken uit de EAN-lijst in [[Performance Grip Socks 2.0]]: PGSZ201→9110024809242, PGSZ202→9110024809259, PGSZ203→9110024809266, PGSW201→9110024809211, PGSW202→9110024809228, PGSW203→9110024809235. Voor de 1.0-varianten (GS110, GS100) staat geen EAN in het bronbestand — blijft `[CHECK]`. Voorgestelde `productType` voor alle drie producten: "Sportsokken". Volledig mutatievoorstel (met `validate_graphql_codeblocks`-controle) in het Shopify-logboek `seo-routine-logboek`, RUN 5 — nog niet uitgevoerd, vereist een go van Lars.
**Inspanning:** 2 uur

### [ ] 10. Conversions API (CAPI) instellen (herzien 18 sep 2026, aangevuld 25 sep 2026, 9 okt 2026)
**Update 26 okt 2026 (besluit Team HÏ Grip, opgewaardeerd naar P1):** de advertentiebudget-beslissing waarop dit punt wachtte is genomen — deze week starten met Ads. CAPI vanaf dag 1 van de eerste campagne inrichten (zie ook punt 24, ChatGPT Ads, zelfde besluit).
**Update 9 okt 2026:** Meta heeft begin maart 2026 click-through-attributie beperkt tot echte linkkliks; likes, shares, saves en video-views van 5+ seconden tellen sindsdien apart mee als "engage-through-attributie", standaard aan met een venster van 1 dag (Search Engine Land). Meenemen bij de Ads Manager-inrichting zodra het budget besloten is: anders telt de gerapporteerde ROAS ook niet-klik-conversies mee.
**Update 25 sep 2026:** Op higrip.nl draait op dit moment géén Meta- of TikTok-pixel. Een nieuw geïnstalleerde pixel zonder advertentieverkeer valt precies in Shopify's Optimized-pauzeprofiel. Zet hem daarom bij installatie meteen op **Always on** (Instellingen → Klantgebeurtenissen → App-pixels). Meta's one-click CAPI (sinds 15 apr 2026) staat in Events Manager.
**Waarom:** Zonder server-side signalen optimaliseert Meta op incomplete data. Relevant zodra je serieus gaat adverteren, niet eerder. Meta verwijderde op 12 januari 2026 de 7- en 28-dagen view-attributievensters uit de Ads Insights API (gerapporteerde conversies daalden 15-40% bij veel adverteerders) en mobiele Safari-pixeltracking is door iOS-privacybeperkingen nagenoeg dood (gaten tot 50-70%). CAPI is daarmee geen latere optimalisatie meer, maar de meetbasis vanaf de eerste advertentie-euro.
**Wachten op:** Een lopende advertentiebudget-beslissing — genomen, zie Update 26 okt 2026 hierboven.
**Let op:** Zodra die beslissing valt, CAPI vanaf dag 1 inrichten — niet pas toevoegen als de eerste campagnes al lopen.
**Inspanning:** half dagdeel (pixel + CAPI), zodra het ads-platform gekozen is

---

## P2 — Deze maand

### [ ] [conversietest] Productbeschrijvingen 1.0 en 2.0 missen padel/tennis/rugby en bevatten een storende `<code>`-tag (nieuw 19 okt 2026)
**Waarom:** Geen van de drie productbeschrijvingen noemt alle kernsporten. De 1.0-beschrijving noemt "padel, voetbal, hockey, fitness en meer" (tennis en rugby ontbreken uit de opsomming); de 2.0-beschrijving (zwart én wit) noemt alleen "tennis, basketbal, fitness en pilates" — padel (de grootste beachhead) en rugby (sinds deze week een eigen sportpagina) ontbreken volledig. Daarnaast staat er, al sinds de nulmeting van 23 sep gesignaleerd maar nooit als apart punt vastgelegd, nog steeds een `<code>`-tag in de 2.0-beschrijving rond "Voetbalsokken met grip, ook perfect voor tennis, basketbal, fitness en pilates" — dat tag rendert doorgaans in een monospace-fallbackfont, in strijd met de harde merkregel "alleen Poppins" (CLAUDE.md §4).
**Waar:** Shopify admin → productbeschrijving van Performance Gripsokken (1.0), Performance Gripsokken 2.0 Zwart en 2.0 Wit
**Wat:** 1.0: "Geschikt voor padel, voetbal, hockey, fitness en meer" → "Geschikt voor padel, voetbal, tennis, rugby, hockey, fitness en meer". 2.0 (zwart én wit): `<code>`-tag verwijderen en de zin aanvullen tot "Gripsok met grip, ook perfect voor padel, tennis, rugby, basketbal, fitness en pilates". Volledige voor/na-HTML in het Shopify-logboek `seo-routine-logboek`, RUN 5.
**Gevonden op:** 19 oktober 2026 (SEO- en conversietest, auditblok B)

### [ ] [regressie] `/blogs/intern` staat publiek en zonder noindex in de sitemap (nieuw 19 okt 2026)
**Waarom:** Sinds deze week staat `/blogs/intern` (titel "INTERN") in `sitemap_blogs_1.xml` en is hij publiek bereikbaar (HTTP 200, geen `noindex`-meta). De blog bevat nog geen artikelen, maar een blogindex met die naam lijkt bedoeld als intern werkblad en hoort niet voor Google en bezoekers open te staan.
**Waar:** `/blogs/intern` — Shopify admin, blog-instellingen
**Wat:** Nagaan of deze blog bedoeld is als publiek kanaal. Zo niet: op niet-gepubliceerd zetten of een `noindex`-meta toevoegen, zodat hij uit de sitemap en index verdwijnt.
**Gevonden op:** 19 oktober 2026 (regressiecheck)

### [ ] [regressie] `/collections/all` heeft geen meta description
**Waarom:** Lege `<meta name="description">` — al genoteerd in de audit van 15 september, nog niet opgelost.
**Waar:** `/collections/all`
**Wat:** Beschrijving toevoegen via Shopify admin → SEO-instellingen van de collectiepagina.
**Update 11 okt 2026 (weekonderhoud):** stond sinds 15 sep (26 dagen) zonder beweging op P1 — verlaagd naar P2. Blijft een simpele, niet-geblokkeerde taak; duidelijk geen "deze week"-prioriteit gebleken.
**Gevonden op:** 15 september 2026 (regressiecheck)

### [ ] 5. Bouw een bewijspagina rond je eigen meetdata
**Waarom:** De core update van maart/april beloonde webshops met eigen materiaal met ~22% meer zichtbaarheid. Jouw 1.17 wrijvingscoëfficiënt en 95%-claim zijn precies dat — maar ze staan nu alleen in campagnesecties, niet in een pagina die Google kan vinden en AI-modellen kunnen citeren.
**Waar:** Nieuwe pagina, bijv. `/pages/onderzoek` of `/pages/waarom-hi-grip-werkt`
**Wat:** Hoe is er gemeten, waartegen, met welke uitkomst. Grafiek of tabel. Meetmethode benoemen.
**Effect:** Dubbel — organische autoriteit én de citeerbare bron die AI-assistenten nodig hebben om jou aan te bevelen.
**Inspanning:** 1 dag

### [ ] 6. Schrijf de vraagpagina's antwoord-eerst, mét FAQPage-schema (herzien 22 sep 2026)
**Update 29 sep 2026:** Google breidt AI Overviews sinds 28 augustus 2026 bevestigd automatisch uit tot de volle lengte voor vragen waar het systeem dat nuttig acht — de knop "Toon meer" vervalt dan en de vervolgvraagbox opent vanzelf, richting AI Mode in plaats van terug naar de gewone resultaten. Effect: blauwe links (dus ook een eventuele toekomstige positie van higrip.nl) komen bij die vragen nog verder onder de vouw. Versterkt de al bestaande reden voor dit punt — geciteerd worden in het antwoord weegt zwaarder naarmate er minder organische ruimte overblijft. Geen nieuw punt, alleen extra gewicht.
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
**Update 2 okt 2026 (vault-review):** sinds 28-9 weer €14,95 / €41,95 / €64,95 = €14,95 / €13,98 / €12,99 per paar (zie [[Feiten & Actuele Staat]]). Het 3-pack scheelt nu €0,97 per paar (−6%), het 5-pack €1,96 (−13%): een per-paar-prijs tegen het 1-pack werkt weer. De update van 24 sep hieronder is achterhaald.
**Update 24 sep 2026:** Live prijzen zijn nu 1-pack €13,49 (doorgestreept €14,95) / 3-pack €39,95 / 5-pack €61,95 = €13,49 / €13,32 / €12,39 per paar. Het 3-pack scheelt maar €0,17 per paar (−1%): een per-paar-prijs tegen het 1-pack overtuigt dan niet. Twee opties: (a) per-paar-prijs afzetten tegen het ankerbedrag €14,95 ("€13,32/paar — 11% onder normaal"), of (b) eerst de pack-prijsladder zelf herzien (commerciële keuze). De bedragen hieronder zijn achterhaald.
**Waarom:** 2026-onderzoek naar prijsweergave laat zien dat het tonen van de prijs per stuk bij multipacks 5–15% meer conversie oplevert dan alleen de totaalprijs — ankering maakt de korting tastbaar. Jouw pack-structuur (1/3/5) is exact deze bundelvorm, maar de korting per paar staat nergens.
**Waar:** `snippets/product-information-content.liquid`, bij de variant-selector
**Wat:** "€X,XX/paar" tonen onder elke pack-optie, herberekend per gekozen variant — ~~1-pack €14,99/paar, 3-pack €13,99/paar, 5-pack €13,00/paar~~ (achterhaald door prijswijziging, zie update).
**Effect:** Versterkt samen met de gratis-verzendbalk (punt 1) de duw richting het 3-pack.
**Update 12 okt 2026 (werkthema, [[2026-10-12-werkthema-vs-live]]):** prijs per paar staat in het werkthema alleen in de tabel van de nieuwe vergelijkpagina (`vg-2-tabel`), nog niet bij de pack-selector.
**Update 12 okt 2026 (verouderd-check):** beide prijsupdates hierboven zijn achterhaald. Live per paar: €14,95 / €11,98 / €10,99 (1-, 3- en 5-pack via het Section Store bundle-block op de 1.0-pagina). De pack-keuze bestaat alleen op de 1.0; de 2.0 heeft geen packs. De actiecontrole keek op de 2.0-pagina, dus haar bewijs zegt hier niets over.
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

### [ ] 17. Titel/meta van de oude productpagina-URL optimaliseren of nieuwe canonical laten indexeren (nieuw 25 sep 2026)
**Waarom:** Search Console-meting (routine "Search Console & rankings", eerste run): `/products/hi-grip-gripsokken-1` trekt met 310 vertoningen in 7 dagen (1.003 in 28 dagen) verreweg de meeste vertoningen van alle pagina's op higrip.nl, maar met een CTR van 0,32% — ruim onder elke andere pagina. De nieuwe canonieke handle `performance-gripsokken` (zie feitenbestand) trekt via de 2.0-varianten veel minder vertoningen (65–162), wat erop wijst dat Google het rankingsignaal nog niet volledig naar de nieuwe URL heeft overgezet ondanks de redirect (opgelost 21 sep, zie regressie-actie hierboven).
**Waar:** Search Console → URL-inspectie/indexering, en de titel/meta die Google nu toont voor de oude URL
**Wat:** Nagaan of de oude URL opnieuw geïndexeerd moet worden gemeld, en of de getoonde titel/meta in de SERP nog van de oude pagina komt.
**Gevonden op:** 25 september 2026 (Search Console & rankings)

### [ ] 18. "Grip socks" consolideren — vier eigen URL's concurreren om dezelfde term (nieuw 25 sep 2026)
**Waarom:** Search Console-meting: de zoekterm "grip socks" (112 vertoningen/7 dagen, 613/28 dagen) rankt afwisselend via `/en/collections/gripsokken`, `/collections/gripsokken`, `/collections/all` en `/`, zonder dat één pagina domineert. De gemiddelde positie voor de hele term (10,3) is zwakker dan wat de sterkste pagina alleen zou moeten kunnen halen — kannibalisatie.
**Waar:** Canonical tags en interne links tussen de vier genoemde URL's
**Wat:** Bepalen welke pagina primair moet ranken voor "grip socks" (waarschijnlijk `/en/collections/gripsokken` of `/collections/gripsokken`) en de overige pagina's daarnaartoe laten doorverwijzen in interne links/canonical.
**Gevonden op:** 25 september 2026 (Search Console & rankings)
**Update 14 okt 2026 (Search Console & rankings):** hetzelfde patroon geldt nu ook voor de Nederlandse variant "grip sokken" — verdeeld over `/collections/all` (14 vert./7d, positie 19,4), de oude productURL (6 vert.) en `/` (3 vert.). "Grip socks" (EN) zelf is inmiddels over negen eigen URL's verdeeld (28 dagen) in plaats van vier. Zelfde actie, nu voor beide taalvarianten.

### [ ] 16. Script-tag-apps overzetten vóór 1 maart 2027 — en Bundler-restanten opruimen (nieuw 24 sep 2026)
**Waarom:** Shopify stopt script tags in de Online Store op 1 maart 2027 (developer-changelog, 24 aug 2026). Op higrip.nl laden via script tags nu nog de Bundler-app (`cdn-bundler.nice-team.net`) en drie Trustpilot-scripts. Het projectgeheugen noemt de Bundler-app verwijderd na de WK-actie, maar live staan nog het script plus negen `bundler`-verwijzingen in de HTML — onnodig JavaScript dat ook punt 14 (INP) raakt. Trustpilot is je zichtbare review-proof; die mag niet stilletjes wegvallen.
**Waar:** Shopify admin → Apps (Bundler: nog geïnstalleerd?) en Online Store → Thema aanpassen → App embeds; Trustpilot-app-instellingen.
**Wat:** 1) Bundler-app verwijderen als hij niet meer gebruikt wordt, en eventuele achtergebleven app-blocks uit het thema halen. 2) Bij Trustpilot controleren of er een app-embed-versie is en overstappen. 3) Na afloop: `var urls = [...]` in de paginabron mag leeg zijn.
**Effect:** Voorkomt dat trust-widgets straks zonder foutmelding verdwijnen; minder JS op de productpagina.
**Update 11 okt 2026 (SEO Health Score, [[2026-10-11-seo-audit-weekdelta]]):** nog steeds open. Op mobiel formaat laden de homepage en de 2.0-productpagina nog `bundler.nice-team.net` en `cdn-bundler.nice-team.net`, naast drie Trustpilot-domeinen en Ecomsend; in totaal 273–302 requests per pagina.
**Update 12 okt 2026 (verouderd-check):** de packs op de 1.0-pagina komen van Section Store (bundle-block), niet van Bundler; het Bundler-blok op de pagina is leeg, maar `bundler.js` laadt nog. Test vóór het verwijderen van Bundler of de 3- en 5-pack-korting (€9 en €20) in de winkelwagen blijft werken. Er laden nu 4 Trustpilot-scripts, niet 3.
**Inspanning:** 1 uur

### [ ] 19. [search-console] Titel/meta van `/pages/ontdek-jouw-sport` herschrijven (nieuw 30 sep 2026)
**Waarom:** Search Console-meting (routine "Search Console & rankings", tweede run): de pagina rankt sterk — gemiddelde positie 3,9 over 28 dagen (4,2 over 7 dagen) — maar trok in 28 dagen geen enkele klik op 120 vertoningen (0% CTR). Bij zo'n goede positie wijst 0% CTR op een titel/omschrijving die niet aansluit bij wat de zoeker verwacht, niet op een rankingprobleem.
**Waar:** `/pages/ontdek-jouw-sport` — titel en meta description via Shopify admin
**Wat:** SERP-titel en meta description herschrijven zodat ze de zoekintentie dekken (waarschijnlijk een sportkeuze-/overzichtspagina); nagaan welke zoektermen de vertoningen opleveren voordat je herschrijft.
**Gevonden op:** 30 september 2026 (Search Console & rankings)

### [ ] 21. [search-console] Titel/meta van de blog "hoe zorg ik voor mijn gripsokken" herschrijven, NL en EN (nieuw 8 okt 2026)
**Waarom:** Search Console-meting (routine "Search Console & rankings", derde run): de NL-blogpagina rankt goed — gemiddelde positie 4,7 over 28 dagen — maar trok daarbij maar 1,0% CTR op 200 vertoningen. De EN-versie rankt met positie 7,8 over 154 vertoningen en trok in 28 dagen geen enkele klik (0% CTR). Net als bij `/pages/ontdek-jouw-sport` (punt 19) wijst een goede positie met vrijwel geen klikken op een titel/omschrijving die niet aansluit bij de zoekintentie.
**Waar:** `/blogs/hi-grip/hoe-zorg-ik-voor-mijn-gripsokken` en `/en/blogs/hi-grip/hoe-zorg-ik-voor-mijn-gripsokken` — titel en meta description via Shopify admin
**Wat:** SERP-titel en meta description herschrijven voor beide taalversies zodat ze de zoekintentie dekken; nagaan welke zoektermen de vertoningen opleveren voordat je herschrijft.
**Gevonden op:** 8 oktober 2026 (Search Console & rankings)

### [ ] 22. [search-console] Titel/meta van de blog "waarom HÏ Grip gripsokken" herschrijven (nieuw 8 okt 2026)
**Waarom:** Search Console-meting (routine "Search Console & rankings", derde run): de pagina rankt op gemiddelde positie 7,2 over 28 dagen, met 189 vertoningen en maar 1,06% CTR.
**Waar:** `/blogs/hi-grip/waarom-hi-grip-gripsokken` — titel en meta description via Shopify admin
**Wat:** SERP-titel en meta description herschrijven zodat ze de zoekintentie dekken; nagaan welke zoektermen de vertoningen opleveren voordat je herschrijft.
**Gevonden op:** 8 oktober 2026 (Search Console & rankings)

### [ ] 25. [search-console] Titel/meta van `/en/pages/gripsokken-voor-voetbal` herschrijven (nieuw 14 okt 2026)
**Waarom:** Search Console-meting (routine "Search Console & rankings", vierde run): de pagina rankt goed — positie 7,6 (7 dagen, 65 vertoningen) resp. 7,3 (28 dagen, 107 vertoningen) — maar trok in geen van beide periodes één klik (0% CTR). Zelfde patroon als bij de al bekende punten 19, 21 en 22: een goede positie zonder klikken wijst op een titel/omschrijving die niet aansluit bij de zoekintentie.
**Waar:** `/en/pages/gripsokken-voor-voetbal` — titel en meta description via Shopify admin
**Wat:** SERP-titel en meta description herschrijven voor de Engelse zoekintentie (o.a. "football grip socks", "grip socks football"); nagaan welke zoektermen de vertoningen opleveren voordat je herschrijft.
**Gevonden op:** 14 oktober 2026 (Search Console & rankings)

### [ ] 26. [search-console] Titel/meta van `/en/products/performance-gripsokken` herschrijven (nieuw 14 okt 2026)
**Waarom:** Search Console-meting (routine "Search Console & rankings", vierde run): de pagina rankt op positie 5,9 (7 dagen, 58 vertoningen) resp. 6,3 (28 dagen, 98 vertoningen), met 0% CTR in beide periodes.
**Waar:** `/en/products/performance-gripsokken` — titel en meta description via Shopify admin
**Wat:** SERP-titel en meta description herschrijven voor de Engelse zoekintentie; nagaan welke zoektermen de vertoningen opleveren voordat je herschrijft.
**Gevonden op:** 14 oktober 2026 (Search Console & rankings)

### [ ] 27. [search-console] Positieval `/pages/gripsokken-voor-voetbal` (NL) uitzoeken — derde week op rij slechter (nieuw 21 okt 2026)
**Waarom:** Search Console-meting (routine "Search Console & rankings", vijfde run): de gemiddelde positie van deze pagina daalt al drie metingen op rij — 6,4 (7 okt) → 12,2 (14 okt) → 15,7 (21 okt), over steeds vergelijkbaar volume (64-80 vertoningen/7 dagen). Geen kannibalisatie: de zoekterm "gripsokken voetbal" zelf rankt wél nog op de juiste pagina (positie 27,4, maar slechts 14 vertoningen — te weinig voor een zoekterm-conclusie). De daling zit dus in de bredere mix van zoektermen die op deze URL binnenkomen, niet in één specifieke term.
**Waar:** `/pages/gripsokken-voor-voetbal` — paginabron, interne links, en of er onlangs iets veranderd is (de rugbypagina ging 16 okt live; mogelijk is de sportkiezer/navigatie gewijzigd)
**Wat:** Nagaan of er een technische of content-wijziging op of rond deze pagina is geweest die de positie kan verklaren (gewijzigde interne links, ontbrekende sportkeuzetegel, title/H1-wijziging); zo niet, blijven volgen.
**Gevonden op:** 21 oktober 2026 (Search Console & rankings)

### [ ] 20. Shopify conversieratio-meetbreuk (21-23 sep 2026) meewegen vóór je volgende CRO-test (nieuw 1 okt 2026)
**Waarom:** Shopify's sessiemeting-update telt sessies en `checkout_started` sinds 21-23 september 2026 anders (geen cutoff meer om middernacht UTC maar bij 30 minuten inactiviteit, sessies zonder pageview tellen nu mee, bot-sessies worden gefilterd). Shopify zelf meldt dat "Reached checkout rate" en "Checkout conversion rate" hierdoor kunnen verschuiven zonder dat bestellingen of klantgedrag veranderen. Dat valt vlak vóór de geplande pack-prijs-/verzenddrempeltest (punt 1/12, zelfde sectie `snippets/product-information-content.liquid`): een voor-/na-vergelijking via Shopify Analytics riskeert de meetbreuk aan te zien voor testeffect.
**Waar:** Shopify Analytics-rapporten (sessies, reached checkout rate, checkout conversion rate) en het testlogboek van de SEO- en conversietest-routine (`seo-routine-logboek`)
**Wat:** Zet bij de volgende voor-/na-meting van punt 1/12 een aantekening dat de periode vóór 21-23 sep niet 1-op-1 vergelijkbaar is met erna; vergelijk waar mogelijk op bestellingen/omzet in plaats van sessie-conversieratio, of meet pas vanaf na de meetbreuk.
**Effect:** Voorkomt een foutieve conclusie ("de test werkte niet" of "de test werkte geweldig") die eigenlijk een meetartefact is.
**Inspanning:** 15 minuten, bij de volgende testmeting
**Gevonden op:** 1 oktober 2026 (Growth Radar, CRO)

### [ ] 13. Onderzoek TikTok Shop Nederland — directe verkoop via Shopify-koppeling (nieuw 18 sep 2026)
**Waarom:** TikTok Shop is sinds 15 juni 2026 officieel live in Nederland en koppelt via een losse app (bijv. SlashCart vanaf $9,99/maand, Optima gratis) rechtstreeks aan Shopify voor productsync, voorraad en orderafhandeling. De hele klantreis — ontdekken, valideren via creators, afrekenen — vindt dan binnen TikTok zelf plaats, met een "Fast Shipping"-badge die conversie verder verhoogt. Platformkosten: 2-8% commissie + $0,30 per transactie, plus optioneel 10-20% creator-affiliate-commissie.
**Waar:** TikTok Seller Center (seller-nl.tiktok.com) + Shopify App Store
**Wat:** Aanmeldprocedure doorlopen (KVK-gegevens, vier stappen, beoordeling 1-2 werkdagen) en beslissen of dit een los kanaal wordt naast higrip.nl of gecombineerd met het creator-plan (punt 9).
**Effect:** Extra verkoopkanaal in de grootste groeimarkt (padel) met lagere aankoopdrempel dan doorklikken naar een externe site — vereist wel bewaking van last-click-attributie, die dit verkeer mist.
**Inspanning:** Verkenning en aanmelding een half dagdeel; app-koppeling en catalogus-setup 1 dag.

---

## P3 — Op de radar

### [ ] 23. Handmatige factcheck verplichten voor AI-gegenereerde teksten vóór publicatie (nieuw 13 okt 2026)
**Waarom:** Google's Search Central-documentatie noemt het sinds 1 oktober 2026 "critical" om AI-gegenereerde content handmatig te factchecken op juistheid en betrouwbaarheid vóór publicatie — titels, meta descriptions, structured data en alt-tekst vallen daaronder. Reden: generatieve modellen voorspellen waarschijnlijke woordreeksen in plaats van feiten op te halen, en kunnen daardoor hallucineren. Geen nieuwe rankingfactor of penalty aangekondigd, wel een scherpere verwachting voor wie AI gebruikt bij het schrijven van content.
**Waar:** Elk AI-geschreven of AI-ondersteund stuk content voor higrip.nl: de vraagpagina's/antwoordcapsules uit backlogpunt 6, blogs, en elke tekst die via de contentagents loopt.
**Wat:** Vóór publicatie een mens laten controleren op feitelijke juistheid — sluit aan bij de bestaande formuleringsregel voor grip-claims in [[Feiten & Actuele Staat]] §Claims, maar dan voor elk cijfer/feit in AI-geschreven tekst, niet alleen grip-claims.
**Gevonden op:** 13 oktober 2026 (Growth Radar, SEO-content)

### [ ] 24. Overweeg ChatGPT Ads mee te nemen in de advertentiebudgetbeslissing (nieuw 14 okt 2026)
**Update 26 okt 2026 (besluit Team HÏ Grip):** de advertentiebudgetbeslissing is genomen — deze week starten met Ads. Nu relevant om mee te nemen bij de platformkeuze (zie punt 10, CAPI, nu op P1).
**Waarom:** Beslist.nl draaide begin september 2026 een praktijktest met ChatGPT Ads: in minder dan twee dagen ruim 1.700 advertenties en 61.711 vertoningen, een doorklikratio meer dan 2× hoger dan hun eigen Google Shopping-advertenties, en een kostprijs per klik van ongeveer €0,20 — ver onder de eerder genoteerde schatting van $3–5 (Growth Radar, 23 sep 2026). Beslist zegt dat de ChatGPT-advertenties in deze eerste periode presteren op het niveau van hun eigen Google Search-campagnes.
**Waar:** ChatGPT Ads (zelfbediening, sinds 31 augustus 2026 ook voor Nederlandse adverteerders, productfeed verplicht sinds 4 sep)
**Wat:** Meenemen als losse, goedkope optie zodra er een advertentiebudget-beslissing valt — hangt samen met punt 10 (CAPI) en de kanaalkeuzes uit punt 8/9/13. Niet apart oppakken vóór die beslissing er is.
**Gevonden op:** 14 oktober 2026 (Growth Radar, AI-search), bron: Emerce (8 sep 2026) over de Beslist.nl-test.

### [ ] 9. Padel-creators op prestatiebasis in plaats van vaste vergoeding (herzien 18 sep 2026, aangevuld 25 sep 2026)
**Update 25 sep 2026:** Derde route naast doorklikken en TikTok Shop: Meta's Creator Marketing Hub (wereldwijde uitrol t/m eind 2026) zet een creatorpost met één klik om naar een partnership ad vanaf je eigen account. Werkt pas als punt 10 staat.
**Waarom:** TikTok Shop converteert op 4,7% — meer dan het dubbele van Instagram. 34% van de Nederlandse 18–35'ers kocht al via social. En: 85% van AI-merkvermeldingen komt uit derde partijen, dus creator-content voedt tegelijk je AI-zichtbaarheid. TikTok Shop is sinds 15 juni 2026 live in Nederland — dat opent een tweede route naast doorklikken naar higrip.nl: verkopen direct in de app via dezelfde creator-commissiestructuur. Zie ook punt 13 hieronder.
**Aanpak:** Open plan op 10–12% commissie voor volume en reviews, daarna 18–25% voor de best presterende creators.
**Wachten op:** Punt 7 eerst (eigen videomateriaal) én punt 13 (bepaalt of dit richting higrip.nl, TikTok Shop, of beide wordt ingericht).

---

## Hoe de routine hiermee omgaat

Elke ochtend leest de routine dit bestand voordat hij nieuw onderzoek doet:
- Al opgeschreven punten worden **niet opnieuw voorgesteld** in een andere formulering.
- Nieuwe vondsten worden hier toegevoegd, met prioriteit — niet alleen in het dagrapport.
- Als nieuw onderzoek een bestaand punt tegenspreekt of achterhaalt, wordt dat punt bijgewerkt of doorgestreept, met vermelding waarom.

## Weekonderhoud (Growth Radar, elke zondag)

**27 sep 2026:** 20 open punten (backlog, `dubbel` niet meegeteld) — meer dan de 15 uit de vuistregel. Geen enkel P1-punt staat al drie weken zonder beweging (oudste dateert van 15 sep, 12 dagen). Kandidaten om samen te voegen of te schrappen, ter beoordeling:
- **Punt 1** (gratis-verzendingsdrempel) **+ punt 12** (prijs per paar): beide wijzigen dezelfde sectie (`snippets/product-information-content.liquid`, direct bij de pack-selector) en raken dezelfde beslissing (prijsweergave 1-/3-/5-pack). Kandidaat om als één implementatiepunt te draaien.
- **Punt 8** (Perplexity, wacht op VS-verzendbeslissing) **+ punt 13** (TikTok Shop, expliciet "of gecombineerd met punt 9") **+ punt 9** (creators, wacht op punt 13) **+ punt 10** (CAPI, wacht op budgetbeslissing): vier los genoteerde P2/P3-punten die allemaal op dezelfde soort besluit wachten (kanaal- of budgetkeuze). Kandidaat om te bundelen tot één `Besluit:`-punt voor Lars, met de vier uitwerkingen als sub-stappen zodra de keuze valt.
Niet zelf samengevoegd — dat wijzigt koppen en dus actie-id's; ter beoordeling aan Lars via het dashboard.

**Toegang:** De `ArtifactData`-database van het dashboard (collecties `status/checks/aantekeningen/beheer/nieuwe_acties/opdrachten/kansen`) is deze run niet leesbaar voor deze cloudsessie ("shared with you from another organization" — geen db-toegang voor uitgenodigde editors). Stap B (dashboard → vault) kon dus niet draaien; build en publish zijn wel gedaan vanuit de bestaande vaultstand.

**4 okt 2026:** 25 open punten (backlog, `dubbel` niet meegeteld — die 8 id's horen bij onderzoeksnotities, niet bij de backlog) — nog steeds boven de 15 uit de vuistregel. Geen P1-punt staat al drie weken zonder beweging: oudst zijn `/collections/all` zonder meta description en punt 2 (reviewapp), beide sinds 15 sep — 19 dagen, nog geen 21. Dezelfde twee samenvoegkandidaten uit de vorige weekcheck (27 sep) staan nog open, want nog niet samengevoegd:
- **Punt 1** (gratis-verzendingsdrempel) **+ punt 12** (prijs per paar): nog steeds dezelfde sectie en beslissing.
- **Punt 8 + 13 + 9 + 10**: nog steeds vier losse P2/P3-punten die op dezelfde kanaal-/budgetkeuze wachten.
Toegang tot de dashboard-database werkte deze run wel (alle 7 collecties leeg, dus niets te importeren uit stap B).

**11 okt 2026:** 27 open punten (backlog, `dubbel` niet meegeteld) — nog steeds boven de 15 uit de vuistregel. Twee P1-punten stonden al 26 dagen zonder beweging (sinds 15 sep, dus over de drieweken-grens): `/collections/all` zonder meta description is daarom verlaagd naar P2 (geen blokkade, gewoon geen prioriteit gebleken — zie het punt onder P2). Punt 2 (reviewapp koppelen) staat nog op P1 maar is nu expliciet als blokkade gemarkeerd: wacht op een menselijke keuze, niet op Claude-werk. Dezelfde twee samenvoegkandidaten uit de vorige weekchecks (27 sep, 4 okt) staan nog open, want nog niet samengevoegd:
- **Punt 1** (gratis-verzendingsdrempel) **+ punt 12** (prijs per paar): nog steeds dezelfde sectie en beslissing.
- **Punt 8 + 13 + 9 + 10**: nog steeds vier losse P2/P3-punten die op dezelfde kanaal-/budgetkeuze wachten.
Toegang tot de dashboard-database werkte deze run (alle 7 collecties leeg, dus niets te importeren uit stap B).

**18 okt 2026:** 27 open punten (backlog, `dubbel` niet meegeteld) — nog steeds boven de 15 uit de vuistregel, maar niet meer gestegen sinds 11 okt. Geen P1-punt staat al drie weken zonder beweging: alle vijf P1-punten (de twee regressiepunten, punt 1, punt 2, punt 4) zijn na 24 september bijgewerkt, de meeste nog op 12 of 14 oktober. Dezelfde twee samenvoegkandidaten uit de vorige weekchecks (27 sep, 4 okt, 11 okt) staan nog open, want nog niet samengevoegd:
- **Punt 1** (gratis-verzendingsdrempel) **+ punt 12** (prijs per paar): nog steeds dezelfde sectie en beslissing.
- **Punt 8 + 13 + 9 + 10**: nog steeds vier losse P2/P3-punten die op dezelfde kanaal-/budgetkeuze wachten.
Toegang tot de dashboard-database werkte deze run (alle 7 collecties leeg, dus niets te importeren uit stap B).

**25 okt 2026:** 29 open punten (backlog, `dubbel` niet meegeteld —3 dubbel) — nog steeds boven de 15 uit de vuistregel, iets gestegen sinds 18 okt (twee nieuwe regressiepunten, rugby-H1 en terugbetalingsbeleid-titel, zijn erbij gekomen op 19 okt). Geen P1-punt staat al drie weken zonder beweging: de drie regressiepunten en punt 4 zijn alle op 19 oktober bijgewerkt (6 dagen), punt 1 op 12 oktober (13 dagen). Punt 2 (reviewapp) staat sinds 11 oktober al expliciet als blokkade gemarkeerd (wacht op een menselijke keuze) — geen nieuwe actie nodig. Dezelfde twee samenvoegkandidaten uit de vorige weekchecks (27 sep t/m 18 okt) staan nog open, want nog niet samengevoegd:
- **Punt 1** (gratis-verzendingsdrempel) **+ punt 12** (prijs per paar): nog steeds dezelfde sectie en beslissing.
- **Punt 8 + 13 + 9 + 10**: nog steeds vier losse P2/P3-punten die op dezelfde kanaal-/budgetkeuze wachten.
Niet zelf samengevoegd — ter beoordeling Lars via het dashboard.
Toegang tot de dashboard-database werkte deze run (alle 7 collecties leeg, dus niets te importeren uit stap B).
