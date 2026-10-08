---
id: 2026-10-07-shoppagina-keuzepagina
titel: "Shoppagina higrip.nl — keuzepagina 1.0 vs 2.0, SEO-keuzes en concept"
kerntitel: "Shoppagina als keuzepagina: 2.0 als standaard, 1.0-packs live niet zichtbaar"
datum: 2026-10-07
bron: los
routine: ""
categorie: CRO
status: nieuw
prioriteit: P2
samenvatting: "De shoppagina blijft op /collections/gripsokken als gewone collectiepagina met de 1.0 (prijsvriendelijk) en 2.0 (ultieme performance) als gelijkwaardige keuzes, plus een aparte vergelijkingspagina /pages/gripsokken-vergelijken in de stijl van Over ons, op keyword 'gripsokken kopen'. Live toont de 1.0 geen packs (alleen €14,95), terwijl de bundel-app 3-pack €35,95 en 5-pack €54,95 bevat en het feitenbestand €41,95/€64,95 noemt; daarom staat er geen 'vanaf €12,99'."
gerelateerd: [2026-10-07-missie-visie-pagina, 2026-09-25-search-console, 2026-09-28-seo-conversietest-run-2, 2026-10-08-search-console]
vervangt: []
bronbestand: "https://claude.ai/artifact/32qFKvpp9uHTntU1EGPvFU"
deadline: ""
---
# Shoppagina higrip.nl — keuzepagina 1.0 vs 2.0, SEO-keuzes en concept

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[Waar staat wat]] · [[Home]]

## In het kort

Opdracht van 7-10 (prompt uit het Denzel-kwaliteitsoverzicht): een nieuwe shoppagina als HTML-concept met één taak, kiezen tussen [[Performance Grip Socks 2.0|Performance Gripsokken 2.0]] en de 1.0 en doorklikken naar de productpagina. Niets naar Shopify gepusht; het werkthema "AI website workspace 2.0" (#201133490503) is alleen gelezen (`about-*`), het live thema is niet aangeraakt. Concept: https://claude.ai/artifact/32qFKvpp9uHTntU1EGPvFU, bedoelde URL `https://www.higrip.nl/collections/gripsokken`.

## Kerncijfers

- **336** · Woorden op de huidige /collections/gripsokken
- **414** · Woorden in het concept
- **€14,95 / €17,95** · Live prijs per paar 1.0 / 2.0 (products/<handle>.js, 7-10)

## Acties

- [ ] P1 · Besluit: welke 1.0-packprijs geldt (feitenbestand €41,95/€64,95, bundel-app €35,95/€54,95) en moet de pack-keuze weer zichtbaar worden op de 1.0-productpagina
- [ ] P2 · Besluit: concept-shoppagina overnemen in het werkthema op /collections/gripsokken (H1 "Gripsokken. Kies je grip.", title en description uit het concept)
- [ ] P2 · Oude handles performance-grip-socks-2-0-wit-1 en hi-grip-gripsokken-1 uit de collectie gripsokken halen (ze staan als kaart-links op de live collectiepagina)
- [ ] P2 · Identiteitspaden van de website-subagents (SEO, Design, Website Copy) gelijktrekken met de map 04_Agent_Infrastructuur/Website Agent: alle drie vonden hun identiteit.md niet en de copy-agent stopte
- [ ] P2 · Besluit: vergelijkingspagina /pages/gripsokken-vergelijken aanmaken naast de shoppagina (concept https://claude.ai/artifact/2E6u9cpF5q9vDPE1ELJ2fq)
- [ ] P1 · Besluit: bevestigen welke features de 1.0 wel en niet heeft (compressie, naadloos, versterkte hiel, ademend, cushioning) en welke kleur, voor de spec-tabel op de vergelijkingspagina
- [ ] P3 · Vervolgpagina "Techniek van de 2.0" uitwerken (materialen, breiwijze, metingen), gelinkt vanuit de anatomie op de vergelijkingspagina
- [ ] P3 · Vergelijking met concurrenten bij naam pas op de shoppagina zetten als de Concurrentie-monitor prijs en features per merk heeft vastgelegd
- [ ] P3 · Besluit: echte portretfoto's van Lars, Tigo en Timo laten maken (Pitch/fotos heeft alleen actie- en jeugdfoto's die al op Over ons staan)

## Bevindingen

### URL en canonical
De huidige collectie is `/collections/gripsokken`, self-canonical, title "Performance Gripsokken voor voetbal, tennis & rugby | HÏ Grip", H1 "KIES JE GRIPSOK.", 336 woorden, JSON-LD BreadcrumbList + Organization. De URL bevat het hoofdkeyword "gripsokken" en blijft dus de canonical. `/collections/all` blijft self-canonical (andere inhoud) en krijgt geen interne links. Dit sluit aan op de kannibalisatie op "grip socks" uit [[2026-09-25-search-console]].

### SEO-keuzes in het concept
- Title (51): "Gripsokken kopen | Performance Gripsokken – HÏ Grip". Description (153) met beide modellen, €14,95, gratis verzending vanaf €35 en 30 dagen retour.
- Eén H1 "Gripsokken. Kies je grip." (keyword vooraan, zonder eyebrow), H2 "Gripsokken kopen die je voet vasthouden" met de crawlbare intro, H2 "1.0 of 2.0: welke past bij jou?", H2 "Grip die je kunt meten".
- JSON-LD in één @graph: CollectionPage → ItemList (3 product-URL's) + BreadcrumbList (Home → Shop) + Organization-verwijzing `https://www.higrip.nl/#organization`. Geen rating, geen review.
- Interne links: de 3 productpagina's, Over ons en de homepage (kruimelpad en voet).

### Eén kaart voor 2.0, niet twee
De SEO-agent zag drie kaarten als iets sterker (een eigen anker per product), maar noemde het verschil klein, zolang beide hrefs in de HTML staan. Dat is niet "duidelijk beter", dus het blijft één kaart. De kleurbolletjes zijn echte `<a href>`-links naar `-2-0-zwart` en `-2-0-wit`; JS onderschept de klik en wisselt beeld, label en knop. Crawlers zien beide URL's, de bezoeker ziet één keuze minder (Hick's Law). Getest: link, label en `aria-current` wisselen mee.

### Psychologie per sectie
- Hero: identiteit en probleem ("jij glijdt niet meer").
- Kaarten: default-effect (2.0 groter, zwart, label "Onze aanrader", over de hero-rand), 1.0 als lichte ankerkeuze (€3 voordeliger).
- Keuzehulp: tegen keuzestress, vier rijen (sport, gebruik, pasvorm en maat, prijs) die eindigen in één advies met één knop.
- Bewijs: autoriteit (1,17 met bron Apps et al. 2022, verplichte formulering uit [[Feiten & Actuele Staat]]) en sociaal bewijs (3000+, 4,6 ★ Trustpilot met link).
- Geruststellingsstrook: tegen spijtaversie.
- Founders: liking en eenheid.
- Slot: één CTA naar 2.0.

### Prijzen en packs live
`products/<handle>.js` geeft voor alle drie de producten `available: true` en geen pack-varianten. In de pagina-JSON zitten bundels van een volume-discount-app: 1.0 3-pack €35,95, 5-pack €54,95; 2.0 3-pack €44,95, 5-pack €69,95. Op de gerenderde 1.0-pagina staat geen pack-keuze (geen "pack"-tekst, geen bundel-element). "Vanaf €12,99 per paar" is dus niet live te onderbouwen; het concept toont €14,95 per paar.

### Stijl
De tokens en beweging komen uit `assets/about-page.css` en `about-page.js` van het werkthema: schuine Poppins 800 met −0,045em, easing cubic-bezier(.2,.7,.1,1), fade-up van 28px met stagger .12s, oplopende hero-regels (.05/.18/.31s), volt-snelheidslijnen, een contourcijfer dat met volt vol loopt en founderkaarten die openschuiven. Afwijking van Over ons: de knoppen zijn pills met chevron in zwart/wit, niet gevuld met volt (dat staat al als actie in [[2026-10-07-missie-visie-pagina]]).

### Controle
Op 375 en 1440 px: geen horizontale scroll, alle links en knoppen ten minste 44 px. Op desktop is de 2.0-kaart 774 px hoog en de 1.0-kaart 670 px. De productfoto's van Shopify hebben een witte achtergrond, daarom staat de sok op een wit productvlak in de zwarte kaart.

### Update 7-10 · Gesplitst in shoppagina en vergelijkingspagina
Feedback van Lars: het eerste concept is een vergelijkingspagina, geen shoppagina. Het is daarom gekopieerd naar https://claude.ai/artifact/2E6u9cpF5q9vDPE1ELJ2fq, met canonical `/pages/gripsokken-vergelijken`. Title "Gripsokken vergelijken: 1.0 of 2.0? | HÏ Grip" (45), description 155, H1 "1.0 of 2.0? Vergelijk je grip.", kruimelpad en BreadcrumbList Home → Shop → Vergelijken, schema WebPage + ItemList. De intro gaat nu over het verschil in plaats van over "gripsokken kopen", zodat de twee pagina's niet op hetzelfde keyword concurreren.

De shoppagina (zelfde artifact-URL, versie 2) is opnieuw opgebouwd en veel simpeler:
1. Eén groot beeld: de voetbalfoto met grip-zool uit de 1.0-productfoto's (IMG_1478), 88vh, met H1 "Gripsokken." en één knop.
2. Twee tegels. De 2.0 is breder, zwart, met "Onze aanrader", kleurwissel en de chips "Grip, plus: compressie · Coolmax® · naadloos · versterkte hiel". De 1.0 heeft "De basis: grip onder de voet · maat 34–46". Zo zie je het verschil zonder tabel.
3. Daaronder één knop "Vergelijk 1.0 en 2.0".
4. Premiumblok "7 features. Eén sok." met de 0,60-tegen-1,17-balk op schaal, plus de verplichte claimformulering en de bron.
5. Eén vertrouwensstrook: 3000+, 4,6 ★ Trustpilot, verzending en retour.

"Beter dan concurrenten" is alleen onderbouwd met categoriebewijs (gewone sok tegen gripsok) en de 7 features. [[Concurrentieanalyse]] heeft nog geen feature- of prijsdata per merk, dus er is geen vergelijking met naam gemaakt. Getest op 375 en 1440 px: geen overflow, tap-targets ≥ 44 px, en de kleurwissel zet de knop op `-2-0-wit`.

### Update 7-10 · Versie 3: conversie en high-tech
Feedback van Lars: de shoppagina moet beide opties tonen zonder scrollen en high-tech, innovatief en premium aanvoelen. De vergelijking mag meer ego tonen, dieper op de features ingaan en meer visuals hebben. Ook de uitlijning moest beter.

**Shoppagina** (versie 3)
- Het eerste scherm is het grote beeld met beide productkaarten onderin.
- Op 1440×900 eindigen de kaarten op 817 px. In het thema zet de variabele `--hdr` de Shopify-header (±110 px) van de schermhoogte af, zodat de kaarten boven de vouw blijven.
- Op 375×812 eindigen de kaarten op 629 px; met de header erbij is dat ±740 px.
- Beide kaarten hebben dezelfde interne opbouw, dus naam, prijs, specs en knop staan op exact dezelfde pixelhoogte.
- Elke kaart heeft een spec-raster (grip, compressie, Coolmax®, naadloos): volt en verlicht bij de 2.0, gedimd bij de 1.0.
- Een meetpaneel rechtsboven toont de wrijvingsbalk 0,60 tegen 1,17 met de verplichte formulering.
- Onder de vouw staat het blok "Gemeten. Niet beloofd." met vier instrumenten: wrijving, compressiemeter, Coolmax-ring en 7 features.

**Vergelijkingspagina** (versie 2)
- Duel 2.0 VS 1.0 en een spec-tabel met 11 rijen, waarin de 2.0-kolom volt is.
- Een interactieve anatomie: 7 hotspots op de 2.0 en een featurelijst die hetzelfde paneel aansturen, met een meter of ring per feature.
- Lab: drie studie-uitkomsten met visuals. Wrijving staat op schaal; slalom en voetverschuiving zijn gemarkeerd als "illustratie, niet op schaal".
- Momenten: sprint, draaien, afremmen en balans, gekoppeld aan sporten.
- Het statement "Andere sokken houden je voeten warm. Wij houden ze vast." en daarna het advies.
- Het ego zit in de toon en in categoriebewijs, niet in merknamen: [[Concurrentieanalyse]] heeft nog geen data per merk.
- Plek gereserveerd voor de vervolgpagina "Techniek van de 2.0" (nog niet gebouwd).

**Controle:** alle sectiekoppen, de tabel, de anatomie en het statement starten op dezelfde lijn. Kaarten in één rij zijn even hoog, met de titels op dezelfde hoogte. Geen overflow, en de tap-targets zijn ≥ 44 px op 375 en 1440 px.

**Nog te bevestigen:**
- Voor de 1.0 staan compressie, naadloos, versterkte hiel, ademend en cushioning als "nee". Coolmax klopt (de live materiaallijst bevat het niet), de rest is afgeleid van de live collectietekst die deze features alleen bij de 2.0 noemt.
- De kleur "wit" voor de 1.0 komt alleen van de productfoto's.
- De voordeelregels bij Coolmax, ademend en cushioning ("Droge voeten, ook in de derde set" en vergelijkbare) zijn nieuwe copy.

### Update 8-10 · Versie 4: basic shop, Over ons-stijl voor de vergelijking, 1.0 positief
Feedback van Lars: versie 3 voelde te AI, en de shoppagina miste wat een gewone shoppagina heeft. Verder moest de 1.0 niet negatief worden weggezet: beide zijn top in hun klasse, de 1.0 prijsvriendelijk en de 2.0 ultieme performance.

**Shoppagina** (versie 4): een gewone collectiepagina in Horizon-stijl, met:
- USP-balk en kruimelpad;
- H1 "Gripsokken" met een intro en "2 modellen · 3 varianten";
- twee gelijkwaardige productkaarten: 1.0 "Prijsvriendelijk" eerst, 2.0 "Ultieme performance" ernaast. Bij hover verschijnt een actiefoto, de 2.0 heeft kleurwissel, elke kaart heeft drie positieve punten en een eigen "Shop"-knop;
- een balk "Twijfel je? Vergelijk";
- vier USP's, een SEO-tekst met de claim en de bron, een FAQ met vier vragen, en vertrouwen (3000+, 4,6 ★ Trustpilot).

Op 1440×900 staan naam en prijs op 717–761 px, op 375 px staan beide producten met de knoppen op 645 px. De spec-vakjes met "—" bij de 1.0 zijn weg.

**Vergelijkingspagina** (versie 3) volgt de secties en scripts van Over ons (`about-hero`, `about-mission`, `about-founders`, `about-values`, `about-outro`):
- een hero met voetbalfoto en drie oplopende kopregels;
- het sticky statement "Andere sokken houden je voeten warm. Wij houden ze vast.", waarin woorden oplichten, met snelheidslijnen en een voortgangsbalk;
- twee uitschuivende kaarten (1.0 padel, 2.0 tennis);
- contourwoorden die met volt vollopen: Grip (1.0 · 2.0), €14,95 (1.0), Compressie, Coolmax® en Afwerking (2.0). Een sticky productplaat wisselt mee tussen 1.0 en 2.0;
- een tabel zonder "nee"-cellen, met de rij "Waar hij in uitblinkt";
- het bewijs met de contourcijfers 1,17 en "Geldt voor allebei";
- een outro met beide knoppen en het merkwoord "HÏ GRIP.".

Geen blueprint-raster en geen spec-readouts meer. Gemeten: alle secties beginnen op dezelfde lijn en er is geen overflow op 375 en 1440 px.

### Update 8-10 · Shoppagina definitief, vergelijking versie 4 (Apple/Nike-stijl)
Lars vindt de shoppagina "perfect". Er zijn subtiele merkaccenten bij gekomen: een volt-markering onder "GRIP", het 2.0-label in volt, volt-cirkels achter de USP-iconen, volt-tekst in de vergelijkbalk en de slogan "More grip, better performance." in de footer.

De vergelijkingspagina is via `/denzel` → Website Agent opnieuw ontworpen, naar Apple (`apple.com/nl/iphone/compare` bekeken), Nike/Adidas (callouts rond het product) en Whoop (keuzehulp):
1. Een linksuitgelijnde hero met kleine productbeelden in de kop. Op mobiel zijn die verborgen.
2. Een vaste koopbalk en twee productkolommen met kleurwissel.
3. Samenvattingsrijen in Apple-stijl: grip, klasse, materiaal, ideaal voor, maten, kleuren, "Alleen 1.0 / Plus in 2.0" en prijs. Er staan geen "—"-cellen in.
4. Een donker techniekblok met 7 genummerde callouts, gekoppeld aan punten op de sok.
5. Een verhaal voor de 1.0 met padelfoto.
6. Een keuzehulp met twee vragen die naar 1.0 of 2.0 leidt.
7. Een wrijvingsmeter (gripsok "1.0 én 2.0").
8. Een afsluiting met beide modellen.

Gemeten: de koopbalk, de productkoppen en alle rijen staan op exact dezelfde kolommiddens (437/989 px op 1440). Geen overflow op 375 en 1440 px.

## Wat niet lukte

De Website Copy-agent leverde niets: zijn identiteitsbestand stond niet op het verwachte pad. De SEO- en de Design-agent misten het ook, maar adviseerden wel. De copy is daarom zelf geschreven uit het feitenbestand. Playwright was bezet door een andere sessie; de test liep via een tijdelijke lokale server in de browserpane, en de tijdelijke bestanden zijn verwijderd. Het Research Dashboard is niet gesynct of gepubliceerd, omdat het van info@ is en deze sessie op het persoonlijke account draait. Er bestaan geen losse founderportretten: de gebruikte slide-11-foto's staan niet op Missie of Visie, maar wel op Over ons.

## Bronnen

- [[Feiten & Actuele Staat]] · [[Performance Grip Socks 2.0]] · [[00 Brand Core]]
- Live: `https://www.higrip.nl/products/<handle>.js` voor de drie handles, de gerenderde productpagina 1.0 en /collections/gripsokken (7-10)
- Werkthema #201133490503, `sections/about-*` en `assets/about-*` (alleen lezen, via `shopify theme pull`)
- Pitch/fotos: slide-11-lars, slide-11-tigo, slide-11-timo
- Subagents seo-agent en design-agent (advies, 7-10)

## Aantekeningen
