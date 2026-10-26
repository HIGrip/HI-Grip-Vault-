---
id: 2026-10-14-homepage-herontwerp-vanaf-leeg-canvas-richting-b-doorgaan
titel: "Homepage herontwerp vanaf leeg canvas (richting B Doorgaan)"
kerntitel: "Nieuw homepage-prototype: claim, bron, prijs en CTA in de bovenste 400 px op mobiel"
datum: 2026-10-14
bron: los
routine: ""
categorie: CRO
status: nieuw
prioriteit: P1
samenvatting: "Een volledig nieuw homepage-prototype (richting B Doorgaan, gekozen door Lars) zet H1 met claim, bronregel, prijs en CTA in de bovenste 400 px op 375 px, toont vier sportmomenten inclusief rugby en het gripbewijs 1,17 als groot getal, met 4,3 KB eigen JS en 6.446 px lengte. Voor de bouw moeten eerst het sportersaantal, het font en de app-JS-opruiming beslist worden."
gerelateerd: [2026-10-13-homepage-redesign, 2026-10-07-missie-visie-pagina, 2026-10-12-werkthema-vs-live, 2026-10-08-growth-radar-cro, 2026-09-21-beachhead-rugby, 2026-10-07-shoppagina-keuzepagina, 2026-10-15-growth-radar-cro, 2026-10-19-productpagina-2-0-inspiratie-en-prototype]
vervangt: []
bronbestand: "https://claude.ai/artifact/BMpbfMzvEP5NnjS3TVuVLy"
deadline: ""
---
# Homepage herontwerp vanaf leeg canvas (richting B Doorgaan)

> Map: [[Waar staat wat]]

## In het kort
Opdracht van Lars via Denzel → Website Agent (13–14 okt): ontwerp de homepage opnieuw vanaf een leeg canvas, los van concept v3 en prototype v4. Ingezet: Design (materiaal, concepten, bouw), Website Copy, Conversie & Analyse, SEO en een los webonderzoek. E-mail Marketing, Content Agent en Partnership Agent zijn bewust overgeslagen. Verboden bronnen zijn niet geopend; de toegestane delen van [[2026-10-13-homepage-redesign]] zijn eerst geredigeerd (het 9-sectievoorstel zat ook in "In het kort").

Lars koos uit twee richtingen **B "Doorgaan"** (donker, sport-identiteit, vier wedstrijdmomenten) boven A "Het getal" (licht, bewijs eerst). Het prototype staat als nieuw artifact **[Homepage — herontwerp](https://claude.ai/artifact/BMpbfMzvEP5NnjS3TVuVLy)** met bouwspec. Niets is gebouwd in Shopify of gepusht. Deze notitie bevat alleen nieuwe punten ten opzichte van [[2026-10-13-homepage-redesign]].

## Kerncijfers
- **6.446 px** · Lengte prototype op 375 px · live 7.233 px
- **4,3 KB** · Eigen JS prototype (motion 3.802 + prototype-schakelaar 472 bytes) · budget 14 KB
- **159 KB** · App-JS op de homepage zonder homepage-functie (brotli)
- **3,7 MB** · 206 frames van de 360° (720×720 WebP)

## Acties
- [ ] P1 · Besluit: sportersaantal 3500+ (feitenbestand, besluit 11-10) of 3000+ (opdracht 13-10 en een actie in 2026-10-13-homepage-redesign); één waarde vastleggen in het feitenbestand
- [ ] P1 · Besluit: prototype richting B (artifact BMpbfMzvEP5NnjS3TVuVLy) als basis voor de homepage-bouw
- [ ] P1 · Besluit: hero-kop A "JIJ GAAT DOOR. JE VOET OOK." of B "JE VOET GEEFT EERST OP." en hoofd-CTA "SHOP GRIPSOKKEN" of "PAK GRIP"
- [ ] P1 · App-embeds Section Store block-cart.js (89,9 KB) en fd-product-groups (69 KB) beperken tot product- en cartpagina's in het werkthema, na controle of de aigenblock-secties ervan afhangen
- [ ] P1 · Voorraad Performance Gripsokken 2.0 live controleren voordat BESTEL in het keuzeblok naar 2.0 wijst
- [ ] P2 · Besluit: Poppins 900 italic aan het thema toevoegen voor de H1, of de H1 op 800 italic houden
- [ ] P2 · Poppins 800 italic preloaden in snippets/fonts.liquid (alle koppen gebruiken hem, nu zichtbare font-swap)
- [ ] P2 · Rugbyfotoshoot plannen: er is geen enkel eigen rugbybeeld, het prototype toont rugby alleen als typografie
- [ ] P2 · Foto met alleen de drie founders maken; de teamfoto toont vier personen
- [ ] P3 · Entiteitsalinea en schema-description gelijktrekken met de ingekorte alinea uit het prototype (58 woorden, gripregel met dubbele punt)
- [ ] P3 · Besluit: Hogeschool Rotterdam als partnerlogo op de homepage (staat niet in de partnerlijst van de productwaarheid)

## Bevindingen

### Werkwijze en bronhygiëne
De toegestane notitie bevatte in "In het kort" zelf het verboden 9-sectievoorstel en de v3-keuzes. Daarom is eerst een geredigeerde invoer gemaakt (`input-probleemanalyse.md`) en zijn alle sub-agents vanaf één gedeelde briefing koud gestart. Richting A kwam uit op een lichte basis; dat volgde uit de lichtgrijze 360°-frames, niet uit eerdere ontwerpen. Lars koos de donkere richting B.

### Nulmeting live (14-10, 375 px)
H1 op 3.888 px, pagina 7.233 px, 123 scripts. De cookiebanner bedekt bij binnenkomst de onderste helft van het eerste scherm: het echte budget voor claim en bewijs is de bovenste ±400 px. Live staat "DE KEUZE VAN 3500+ SPORTERS" in de announcementbar.

### Materiaal (werkthema 201133490503, read-only gepulld)
- Geen enkel eigen rugbybeeld; `page.sport-rugby.json` hergebruikt voetbal-, padel- en tennisfoto's.
- Sterkste beeld voor grip: `padel-schoen-closeup.jpg` (zool met driehoekig grippatroon op een padelbaan), 45 KB als WebP op 750 px.
- De 2.0-studiofoto's hebben een witte achtergrond zonder transparantie (niet los op zwart te gebruiken); 1.0-zijaanzicht is wel transparant.
- 360°: 206 frames van 720×720 WebP, 10,9–22,2 KB per frame, ±3,7 MB totaal, op lichtgrijze studio-achtergrond. Elke 6e frame (36 frames) ≈ 640 KB.
- Fonts: 8 Poppins-faces (400–800, recht en italic), geen 900. De 800 italic van alle koppen staat niet in de preload.
- JS (brotli, gemeten): thema 75,6 KB, apps 160,4 KB, platform 91,4 KB. `block-cart.js` (Section Store) en `fd-product-groups-ext.js` doen samen ±159 KB zonder homepage-functie.

### Over ons ontleed
Er zijn geen tellers in de code; getallen zijn statisch. De beweging komt uit één voortgangswaarde per sectie (`prog(el,a,b)`) en één easing `cubic-bezier(.2,.7,.1,1)` (hard weg, zacht landen). De `.rv`-reveal komt maar op 4 plekken voor en blijft onzichtbaar als `about-page.js` faalt. Die bewegingstaal is overgenomen als 11 motion-principes, niet de layout.

### Referenties en conversiebronnen
Hoka, Ciele, Salomon en TRU zijn geverifieerd: geen van de vier toont claim, prijs en bewijs samen boven de vouw; TRU (directe grip-sokconcurrent) toont op de homepage geen prijs en geen gripbewijs. Acht nieuwe referenties (o.a. FORM, Ultrahuman, COROS, SNOCKS) staan met bron in `out-referenties.md`. Twaalf conversietips met bron-URL (NN/g, Baymard, web.dev, shopify.dev) staan in `out-cro-analyse.md`; CXL gaf 403.

### Prototype richting B
Negen secties: hero (H1, bronregel Apps et al. 2022, VANAF €14,95 PER PAAR, CTA, 4,6 ★ Trustpilot en 3500+), vier momenten (Smash padel, Split-step tennis, Sprint voetbal, Scrum rugby als typografie zonder link), keuze 2.0/1.0 met prijzen, bewijs (1,17 tegen 0,60 als groot getal met eerlijkheidsregel), de sok, founders als typografie, clubs en retail, uitleg en FAQ, slotwoord "Ga door waar anderen stoppen." A/B voor hero-kop en hoofd-CTA via een prototype-schakelaar. Motion: alleen transform, opacity en clip-path; reduced motion toont direct de eindstand.

### QA en design-critique
Gecontroleerd op 375 en 1440 px (headless Chrome in een iframe van exacte breedte, omdat Chrome een minimale vensterbreedte heeft) en met reduced motion. Ronde 1 vond drie fouten: 1,17 bleef onzichtbaar zolang de IntersectionObserver niet afging, de slot-wordmark bleef grijs en overlapte de CTA, en de H1 startte afgeknipt. Alle drie zijn opgelost: de ruststand is nu altijd de leesbare eindstand. De critique (`out-design-critique.md`) leidde tot minder eyebrows (7 naar 3), een strakkere keuzesectie op desktop en meer lucht rond 1,17. Eindstand: 1 H1, geen horizontale scroll, lengte 6.446 px (375) en 6.988 px (1440).

## Wat niet lukte
GA4 verversen (analytics-mcp maakte geen verbinding, geen Python in de agentomgeving). Desktop-nulmeting van de live site (browserpaneel blokkeerde JS; de meting van 13-10 is gebruikt). Lighthouse, CrUX/INP en een echt iOS-toestel zijn niet gemeten. In het verborgen browserpaneel staat requestAnimationFrame stil, dus de scrollanimaties zijn alleen in code en in headless Chrome gecontroleerd. Het Research Dashboard is niet gesynct of gepubliceerd: het is van info@ en deze sessie draaide op het persoonlijke account.

## Bronnen
- Prototype: https://claude.ai/artifact/BMpbfMzvEP5NnjS3TVuVLy (bron en bouwspec: `C:\Users\Test\.claude\plans\homepage-herontwerp-2026-10\build\index.html` en `SPEC.md`)
- Analyses: `C:\Users\Test\.claude\plans\homepage-herontwerp-2026-10\` (BRIEF, input-probleemanalyse, out-design-materiaal, out-copy-analyse, out-copy-B, out-cro-analyse, out-seo-eisen, out-referenties, out-360-meting, out-concepten, out-design-critique)
- Werkthema "AI website workspace 2.0" `201133490503`, read-only gepulld naar `C:\Users\Test\ai-workspace-2.0-herontwerp`
- 360°-materiaal: artifact QL6Whv59zVzW4rKgVgKJ94 (bestandslijst en WebP-header)
- Live: https://www.higrip.nl/ (14-10)
- Feiten: [[Feiten & Actuele Staat]]; grip: Apps et al. 2022 (doi 10.1080/02640414.2022.2080163)
- Eerder onderzoek: [[2026-10-13-homepage-redesign]], [[2026-10-07-missie-visie-pagina]], [[2026-10-12-werkthema-vs-live]], [[2026-10-08-growth-radar-cro]], [[2026-09-21-beachhead-rugby]], [[2026-10-07-shoppagina-keuzepagina]]

## Aantekeningen
- **Team HÏ Grip · 2026-10-26 08:44** — Basisbesluit genomen: de homepage-bouw gaat door op basis van dit prototype (richting B) en komt vandaag (26-10) online. Welke keuze is gemaakt voor de losse P1-deelbesluiten hierboven (sportersaantal 3500+/3000+, hero-kop A/B, hoofd-CTA-tekst) is in dit bericht niet gespecificeerd — navragen en het feitenbestand en deze notitie bijwerken zodra bekend.
