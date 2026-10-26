---
id: 2026-10-13-homepage-redesign
titel: "Homepage higrip.nl — analyse, benchmark en redesignvoorstel met motion"
kerntitel: "Homepage zegt boven de vouw niets: H1 pas na 4,8 schermen, geen claim, prijs of bewijs"
datum: 2026-10-13
bron: los
routine: ""
categorie: CRO
status: nieuw
prioriteit: P1
samenvatting: "De homepage converteert relatief goed (alle 7 GA4-aankopen startten op /) maar verspilt het eerste scherm: de hero zegt alleen HÏ GRIP, de H1 staat op 3.886 px mobiel, en er is geen claim, prijs, bewijs of rugby. Voorstel: 9 secties met H1, sportkiezer en bewijs bovenaan en motion in Over ons-stijl, maar pas na het opruimen van JavaScript (mobiel Lighthouse 54, TBT 7,9 s)."
gerelateerd: [2026-10-08-growth-radar-cro, 2026-10-08-search-console, 2026-10-07-shoppagina-keuzepagina, 2026-10-07-missie-visie-pagina, 2026-10-14-search-console, 2026-10-14-homepage-herontwerp-vanaf-leeg-canvas-richting-b-doorgaan, 2026-10-15-growth-radar-cro, 2026-10-19-productpagina-2-0-inspiratie-en-prototype]
vervangt: []
bronbestand: "C:\\Users\\Test\\.claude\\plans\\homepage-2026-10"
deadline: ""
---
# Homepage higrip.nl — analyse, benchmark en redesignvoorstel met motion

> Map: [[Waar staat wat]]

## In het kort
Opdracht van Lars via Denzel → Website Agent. Ingezet: Design, Website Copy, Conversie & Analyse, SEO en een los benchmark-onderzoek (28 sites zelf opgehaald). E-mail Marketing is bewust overgeslagen, omdat de homepage geen flow raakt. Alles is voorstel: er is niets gebouwd of gepusht.

De homepage is de enige landingspagina die verkoopt (7 van 7 GA4-aankopen), maar het eerste scherm doet niets. De hero zegt alleen "HÏ GRIP" met een knop. De enige H1 staat in de sport-teaser, op 2.737 px desktop en 3.886 px mobiel. Er is geen claim, prijs, reviewscore of rugby te zien, en 2.0 wit, 2.0 zwart en de drie tegels vertellen dezelfde route drie keer. De lengte is géén probleem: desktop ±5.070 px en mobiel ±6.130 px, net zo lang als Nike NL (5.351) en Gymshark (5.955).

Voorstel: 9 secties (hero met H1 → sportkiezer met 4 sporten → 2.0 in 360° → bewijs 1,17 → productkeuze met prijs → missie → vertrouwen → zakelijk → FAQ), motion in de stijl van Over ons (kinetic outline→vol, ab-up-reveal, tellers, scroll-gestuurde 360° van de bestaande 206 frames, marquee die reageert op scrollsnelheid) met maximaal 14 KB extra JS en zonder GSAP. **Volgorde van werken:** eerst het meetfundament en het opruimen van JavaScript, dan structuur en copy, motion als laatste.

**Let op: er bestaat al een homepage-concept v3 (07-10).** Het artifact staat op een ander account (https://claude.ai/artifact/5Tw9YZMfqT5xS8hqKruQz9) en was in deze sessie niet leesbaar; het werd pas na het onderzoek gevonden in [[Agent Werk & Kwaliteit Overzicht]]. Lars heeft het al drie keer bijgestuurd: lichte basis in Pitched-structuur, eigen HÏ Grip-header/-footer, gepinde horizontale merkboodschap, Insta/TikTok-feed. Dit onderzoek is daarom **input voor v4 van dat concept, geen vervanging.** De vergelijking staat onder Bevindingen.

## Kerncijfers
- **47%** · Aandeel van / in GA4-sessies (263 van 560, 29 aug – 12 okt)
- **64%** · Engagement op / tegen 26% op andere landingspagina's
- **54** · Lighthouse mobiel homepage (lokaal, indicatief) · LCP 3,1 s, TBT 7,9 s
- **3.886 px** · Positie H1 op mobiel (±4,8 schermen)

## Acties
- [ ] P1 · Besluit: dit onderzoek verwerken in homepage-concept v3 (artifact 5Tw9YZMfqT5xS8hqKruQz9) als v4, in plaats van een nieuw concept te starten
- [ ] P1 · Besluit: hero-kop A "STOP MET GLIJDEN." (probleem) of B "GA DOOR WAAR ANDEREN STOPPEN." (identiteit), met eyebrow PERFORMANCE GRIPSOKKEN en de vier sporten
- [ ] P1 · Besluit: hoofd-CTA in de hero naar het 2.0-product of naar /collections/gripsokken
- [ ] P1 · Besluit: 360°-onthulling in de eerste bouwronde of pas na het opruimen van JavaScript (Design wil sectie 3, Conversie zet hem op prioriteit 10)
- [ ] P1 · Besluit: blauwe bewijssectie (#0011A7, 1,17 in volt) of wit met volt-markering
- [ ] P1 · Besluit: geldt de afspraak "H1/H2 niet wijzigen" ook voor de homepage, of mag de H1 met dezelfde tekst naar de hero
- [ ] P1 · "3500+ sporters" corrigeren naar 3000+ in de announcementbar (header-group.json), de tijdlijnkop op Over ons en de presets van gripsocks2-proof en sport-proof
- [ ] P1 · Meetfundament vóór de bouw: events voor klik op sportkiezer, interactie met de 360° en scrolldiepte, plus 4 weken baseline van de huidige homepage
- [ ] P1 · JavaScript-budget homepage: inline-scripts van de ai_gen-blocks, dubbele gripsocks2-launch.css en padel-page.css van de homepage halen vóór er motion bij komt
- [ ] P2 · Rugbypagina /pages/gripsokken-voor-rugby bouwen in het werkthema, daarna de rugbytegel in de sportkiezer en rugby in de title
- [ ] P2 · Nieuwe homepage bouwen als testtemplate page.home-nieuw.json in werkthema 201133490503 (CSS → Liquid → JS), pas na de besluiten hierboven
- [ ] P2 · FAQ-antwoorden 4 en 7 van "uw" naar "je", in de sectie en in snippets/faq-schema.liquid tegelijk
- [ ] P2 · Besluit: welke van de 8 marquee-afbeeldingen echte klantlogo's zijn (4 lijken SEO-afbeeldingen)
- [ ] P2 · Besluit: staat page_transition_enabled bewust aan (rel="expect" blocking="render" kan de eerste paint tot 1,8 s vasthouden)
- [ ] P2 · 206 frames van het 360°-artifact exporteren naar Shopify Files (desktop elk 2e frame ≤ 1080 px, mobiel elk 3e ≤ 640 px, WebP q70)
- [ ] P3 · Title/meta-variant B (merk en entiteit) later testen; bij lancering variant A aanhouden
- [x] P3 · Technische Procedures bijwerken: live thema is nu 202394272071, er is ook 202398040391 "Bijgewerkte kopie van AI website workspace 2.0"

## Bevindingen

### Vergelijking met homepage-concept v3 (07-10, beschrijving uit het dashboard)
v3: hero → productkaarten wit/zwart → 360-video → merkboodschap "De laatste game/minuut/scrum" (gepinde horizontale scroll) + cijfers → sporten → logoband "Vertrouwd door:" + zakelijk → FAQ. Lichte basis, 50/50-splits, hairlines, pill-CTA.
- **Klopt met dit onderzoek:** product met prijs vroeg (Conversie #3 en de sokkenmerken in de benchmark), 360° onder de vouw, partnerlogo's samen met zakelijk (benchmarkpatroon 8), founders/Over ons-stijl, één idee per sectie.
- **Toevoegen aan v4:**
  - H1 met claim en sport plus een trustregel (4,6 ★ Trustpilot · 3000+) in het eerste scherm.
  - Bewijsregel 0,60 → 1,17 met bron bij de cijfers.
  - Sportkiezer hoger (nu 5e).
  - Motionbudget: 360° als scroll-gestuurde frames op canvas in plaats van video (zie motion-spec), pas laden na LCP.
  - Meetevents.
- **Niet overnemen uit het Design-voorstel van vandaag:** de donkere zwart/blauw-afwisseling botst met Lars' keuze voor een lichte basis in v2/v3. Pas de motion-spec toe op de lichte basis van v3.
- **Open punten uit v3 die hier terugkomen:** h1-tekst (copy vs SEO), partners achter 4 logobestanden, rugbyfoto, voorraad 2.0, retour 14/30 dagen.

### Huidige homepage (live, gemeten 13-10 op 1440×900 en 375×812)
Volgorde: hero (288 px desktop / 272 mobiel) → drie waarden COMFORT/VERTROUWEN/INNOVATIE → 2.0-hero → 2.0 zwart → drie tegels (verhaal, shop, zakelijk) → sport-teaser met H1 en tennis/voetbal/padel → B2B → "vertrouwd door" → marquee → FAQ. De hero is op desktop maar 288 px hoog, dus het eerste scherm toont al de waardenkaarten. Op mobiel bedekt de cookiebanner bij binnenkomst de onderste helft van het eerste scherm.

Merkafwijkingen in het werkthema: accentgevulde knoppen (`.g2-btn`, oranje tegelknoppen met radius 4), hardcoded `#666666`/`#f5f5f5`, groen `#22c55e` en sterkleur `#007f4e`, drie gelijke kaarten (twee keer), twee lege `_blocks`, lege `.g2-hero__side`. Rugby is ooit uit de sport-teaser verwijderd (block `s_2` ontbreekt). Disabled secties bevatten verouderde kortingen (december 15%, 50% verjaardag) en "2000+": die mogen nooit terugkomen.

### Waarom Over ons wel werkt
Eén typografisch systeem (Poppins 800 italic UPPERCASE, één accentwoord per kop), harde zwart/wit-ritmiek met veel lucht, en per sectie één scroll-mechaniek die op één voortgangswaarde draait: groeiende tijdlijnbalk, horizontale fotostrook, woord-voor-woord-missie, uitwaaierende polaroids. De reveal `ab-up` (0,9 s, `cubic-bezier(.2,.7,.1,1)`) start alleen met JS en zonder reduced motion: zonder JS is alles direct zichtbaar. Verhaalstructuur: overtuiging → bewijs (tijdlijn) → mensen. Voor de homepage een kleine dosis: één overtuigingszin, drie founders met één quote, drie tijdlijnpunten.

Niet overnemen van Over ons: de volt gevulde knop, drie zwarte secties achter elkaar, een rAF-lus die ook onzichtbare items meet.

### Data en snelheid (Conversie & Analyse)
- GA4 heeft ±6 weken bruikbare data en ziet vermoedelijk maar ±20% van het verkeer (Shopify 248 tegen GA4 54 sessies in week 21–27 sep). 136 VS-sessies zijn waarschijnlijk bots. Bij 7 aankopen is alles richtinggevend.
- Mobiel: 145 sessies, 74,5% engagement, alle 7 aankopen. Desktop: 118 sessies, 51,7% engagement, 0 aankopen.
- Organic Search is het sterkste kanaal (121 sessies, 76% engagement).
- Na de homepage doet 43% niets meer. 16% gaat naar /collections/gripsokken, 3% direct naar een 2.0-productpagina.
- Mobiel laadt 2,3 MB en 157 scripts (920 KiB). 52% van de LCP is renderdelay door JavaScript. PageSpeed Insights gaf 429, dus er zijn geen veldwaarden.
- Een A/B-test op aankopen is bij dit volume niet haalbaar. Meet micro-conversies 4 weken vooraf en 4–6 weken na livegang.

### Benchmark (28 sites, 13-10)
- Littledata (426 Shopify-stores, jul–okt 2026): mediaan 1,4% conversie, top 20% boven 2,7%, top 10% boven 3,5%.
- Sterke homepages zetten claim, bewijs en één knop in het eerste scherm (Feetures "America's #1 Running Sock", Loop met reviewaantal en sterren). Sokkenmerken (Bombas, Stance, Tapedesign) verkopen op packs met prijs per paar en een keuzehulp.
- Apple gebruikt nu sticky secties met video die meeloopt met het scrollen. Zware WebGL en Rive zie je alleen op campagne- en merksites, en die scoren het laagst op toegankelijkheid.
- Alleen snelheid heeft hard bewijs (Vodafone: 31% snellere LCP gaf 8% meer verkoop). De cijfers over reviews, quizzen, UGC en sticky add-to-cart komen grotendeels van leveranciers.
- Google toont sinds 7 mei 2026 geen FAQ-uitbreiding meer in de zoekresultaten. Houd FAQ-schema voor consistentie, niet voor rich results.
- Horizon heeft view transitions al ingebouwd (`assets/view-transitions.js`).

### Voorgestelde opbouw (Design)
| # | Sectie | Achtergrond | Doel |
|---|---|---|---|
| 1 | Hero met H1, subline, één pill-CTA, trustregel (4,6 ★ Trustpilot · 3000+ sporters · gratis vanaf €35) | #111111 + foto | Belofte in 3 seconden |
| 2 | Sportkiezer: tennis, padel, voetbal, rugby (accordeon op desktop, snap-rail op mobiel) | wit | Segmentatie |
| 3 | 2.0 in 360°: sticky canvas met callouts hiel/grip/ademend/teen | zwart | Productbegrip |
| 4 | Bewijs: 0,60 → 1,17 met verplichte bronregel (Apps et al. 2022) | Royal Blue | Geloofwaardigheid |
| 5 | Productkeuze 1.0 / 2.0 wit / 2.0 zwart, prijs uit Liquid, beschikbaarheid via `product.available` | #EAE8E5 | Conversie |
| 6 | Missie woord-voor-woord, CTA "Ons verhaal" | zwart | Merkband |
| 7 | Vertrouwen: Trustpilot 4,6 ★ + echte clublogo's | wit | Risico wegnemen |
| 8 | Zakelijk (split) | #111111 | Tweede doelgroep |
| 9 | FAQ + outro-wordmark "GA DOOR WAAR ANDEREN STOPPEN." | wit | Laatste twijfel |

**Correctie door Denzel:** Design schat de nieuwe pagina op ±9.000 px desktop (met runways van 300vh en 240vh). Dat is langer dan nu, terwijl de benchmark op ±5.000–6.500 px uitkomt. Advies: runways inkorten (360° naar ±180vh, missie naar ±140vh) en op ±6.000–6.500 px uitkomen.

### Motion-spec (Design, getoetst aan de benchmark)
- **Hero:** kinetic type, regels schuiven in (700 ms, stagger 80 ms), kernwoord outline → volt via `clip-path`. Pure CSS, de H1 is nooit onzichtbaar voor LCP.
- **CTA's:** magnetische pills (max 6 px, alleen bij muis), chevron schuift mee.
- **Sportkiezer:** flex-accordeon met grijs → kleur, op mobiel een snap-rail waarin elke kaart direct een link is.
- **360°:** sticky canvas, poster-img zonder JS, script pas na `load` + idle of bij 150% viewport. Ringbuffer van ±6 `ImageBitmap`s (alle frames gedecodeerd bewaren laat iOS crashen). Niet bij saveData, 2g/3g of reduced motion; dan een 2×2-grid met detailbeelden.
- **Bewijs:** tellers 0,60 → 1,17 en 0 → 3000, balken met `scaleX`, eindwaarde staat in de HTML.
- **Missie:** woord-voor-woord via `animation-timeline: view()` met de JS van Over ons als fallback.
- **Marquee:** reageert op scrollsnelheid via WAAPI `updatePlaybackRate` en keert om bij omhoog scrollen.
- **Techniek:** desktop scrolt in `.page-wrapper`, niet in het venster. Daarom één document-capture-listener, één rAF-lus en een IntersectionObserver-poort per sectie.
- **Budget:** LCP < 2,5 s mobiel, INP < 200 ms, CLS < 0,1, ≤ 14 KB gz extra JS, 360° ≤ 1,2 MB mobiel.
- **Niet doen:** GSAP, Lenis/smooth scroll, WebGL, custom cursor, parallax op mobiel, automatische carousels zonder pauze.

### Copy-richting (Website Copy)
- Hero A "STOP MET GLIJDEN." / B "GA DOOR WAAR ANDEREN STOPPEN.". Advies: A voor koud verkeer; B gaat naar de afsluiter.
- Bewijs A "95% MEER GRIP." met 0,60 → 1,17, bronregel en eerlijkheidsregel ("onderzoek naar gripsokken in het algemeen"). Friedl et al. 2023 weglaten.
- Product: één sectie voor wit en zwart, "7 FEATURES. ÉÉN SOK.". De 7e feature (cushioning) is nog niet bevestigd.
- Sportkiezer zonder sectie-CTA: de tegels zijn de CTA.
- Sticky CTA mobiel: "SHOP 2.0 · €17,95" zodra de voorraad bevestigd is, anders "SHOP · GRATIS VANAF €35".
- Volledige A/B per sectie, Cialdini/Kahneman-toets en 14 open vragen staan in het copyrapport.
- Denzel-check: het reviewcijfer is al beslist in het feitenbestand (4,6 ★ Trustpilot, besluit 2-10), net als 3000+ sporters. Die twee open vragen uit het copyrapport vervallen.

### SEO-eisen voor het redesign
- Eén H1 boven de vouw. Tekst niet alleen in canvas of afbeeldingen. Callouts als gewone HTML.
- Verplichte interne links naar de sportpagina's. De hoofdnavigatie linkt er nu niet naar en de announcementbar linkt twee keer naar /collections/all.
- FAQ-sectie en `faq-schema.liquid` in dezelfde wijziging aanpassen, anders ontstaat er een dubbele of afwijkende FAQPage. De Organization-snippet met `sameAs` wordt nu nergens gerenderd.
- Homepage-title en collectie-title zijn bijna gelijk: kannibalisatie op "performance gripsokken". / krijgt 101 van 165 klikken (28 dagen), vooral op merknaam; "hi grip" zonder trema staat op positie 6,1.
- Title A (lancering): `HÏ Grip | Performance gripsokken: tennis, padel & voetbal`. Rugby pas erin als de rugbypagina live is (nu 404).

### Feiten die rechtgezet moeten worden
- Sporters: 3000+ (feitenbestand, Lars 15-9). "3500+" staat op Over ons en in de announcementbar.
- Reviewscore: 4,6 ★ Trustpilot. Niet 4,5 van de site en nooit als `aggregateRating`.
- Verzending: drempel €35. Een oudere FAQ noemde €30. "30 dagen retour" pas in een USP-balk zodra de beleidspagina's kloppen.
- Voorraad 2.0 stond op 1-10 op 0 (feitenbestand). Live lijkt het weer beschikbaar: controleer dat voordat de hero-CTA naar 2.0 wijst.

## Wat niet lukte
PageSpeed Insights gaf HTTP 429, dus er zijn geen CrUX-veldwaarden (INP). Lighthouse is lokaal als indicatie gedraaid. De 206 frames van het 360°-artifact konden niet worden uitgelezen (afmeting en gewicht onbekend). Hoka, Ciele, Salomon en een deel van TRU waren niet te verifiëren. De eerste sectiehoogtes zijn gemeten in een verborgen browserpaneel (viewport 0×0) en waren ongeldig (±16.600 px); hermeten op 1440×900 en 375×812 geeft ±5.070 en ±6.130 px. De rapporten van Design, Conversie en Benchmark noemen nog het oude getal en hebben daarom een correctiekop.

## Bronnen
- Volledige rapporten: `C:\Users\Test\.claude\plans\homepage-2026-10\` (BRIEF, out-design, out-copy, out-cro, out-seo, out-benchmark)
- Werkthema "AI website workspace 2.0" `201133490503`, read-only gepulld naar `C:\Users\Test\ai-workspace-2.0`
- Live: https://www.higrip.nl/ en https://www.higrip.nl/pages/over-ons (13-10)
- **Prototype v4 (gebouwd 13-10 op basis van dit plan, niet live):** https://claude.ai/artifact/KWuQn9iWGcGtxCKsod1HGA. Bron: `C:\Users\Test\.claude\plans\homepage-2026-10\` (spec) en de scratchpad-HTML.
- Artifacts: [HÏ Grip 2.0 in 360°](https://claude.ai/artifact/QL6Whv59zVzW4rKgVgKJ94), [Homepage-analyse 13-08](https://claude.ai/artifact/5XAT2gCpT7eeMhZvdmFW5M)
- GA4 property uit het feitenbestand (29 aug – 12 okt); Littledata Shopify-benchmark jul–okt 2026; Apps et al. 2022 (doi 10.1080/02640414.2022.2080163)
- Kennis: [[Homepage Copy & Structuur]], [[Technische Procedures]], [[Sportlanding-systeem (21-9-2026)]], [[Feiten & Actuele Staat]]

## Aantekeningen
