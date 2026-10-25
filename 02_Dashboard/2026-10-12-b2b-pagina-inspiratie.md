---
id: 2026-10-12-b2b-pagina-inspiratie
titel: "Inspiratie zakelijke pagina (HÏ Grip Zakelijk) — oktober 2026"
kerntitel: "Sterke B2B-pagina's splitsen retailer en club en houden één pad naar het formulier"
datum: 2026-10-12
bron: los
routine: ""
categorie: B2B
status: nieuw
prioriteit: P2
samenvatting: "De sterkste voorbeelden kiezen één primaire actie, splitsen retailers en clubs vroeg en noemen proces en voorwaarden open. Motion is bij de beste pagina's een rustig reveal-ritme en geen showpiece, en dat is met vanilla CSS/JS te bouwen binnen Horizon."
gerelateerd: [2026-10-12-voordelenpagina-analyse]
vervangt: []
bronbestand: ""
deadline: ""
---
# Inspiratie zakelijke pagina (HÏ Grip Zakelijk) — oktober 2026

> Map: [[Waar staat wat]]

## In het kort
Onderzoek naar B2B-, wholesale- en teampagina's als inspiratie voor de zakelijke pagina van HÏ Grip (retailers en sportclubs). Uitgevoerd door de Website Agent met de Design Agent (code- en motion-analyse) en de Conversie & Analyse Agent (opbouw, formulier, bewijs). De analyse komt uit pagina-tekst en code; **er is niets gerenderd of gescreenshot**, dus visuele oordelen (kleurritme, typeschaal, whitespace) zijn niet onderbouwd. Er zijn geen conversiecijfers van deze pagina's bekend.

## Acties
- [ ] P2 · Besluit: reactietijd die HÏ Grip op de zakelijke pagina belooft (bijv. binnen 2 werkdagen)
- [ ] P2 · Besluit: clubaanbod tonen (korting, opbrengst voor de club, MOQ) of alleen "vraag een voorstel aan"
- [ ] P2 · Conceptpagina Zakelijk (artifact https://claude.ai/artifact/Nvf7BYRijqxRHaRdaEw2vH) beoordelen op motion, layout en teksten, en de open besluiten uit deze notitie nemen
- [ ] P3 · Mini-plan voor de nieuwe zakelijke pagina (>2 bestanden: CSS, Liquid-sectie, JS) opstellen met de Design Agent, in het testthema

## Bevindingen
### Eén primaire actie en een open proces
Surridge Sport (trade partners) herhaalt één CTA en toont een genummerde flow met reactietermijn, een gesprek en een accountcontact, plus "Need to talk first?" met telefoonnummer. Dat haalt onzekerheid weg zonder de hoofd-CTA te verzwakken. Faire toont kosten open en laat elke knop naar één aanmeldpad lopen.

### Splits doelgroepen vroeg
JAKO heeft aparte pagina's voor clubs en dealers met elk één taak (teamshop, B2B-portaal). Clothing The Gaps scheidt bestaande klanten ("sign in") van nieuwe ("apply") en filtert met drie zelf-kwalificerende vragen. Brikl begint bij herkenbare pijn van de club en eindigt met een volledig transparant prijsblok en een FAQ over de bezwaren van een club.

### Volgorde van Oura for Organizations
Vertrouwen → segment kiezen → bewijs → product → wetenschap → testimonials. Bruikbare skeletvolgorde voor de zakelijke pagina. Motion niet beoordeeld (11 van 13 assets niet op te halen).

### Gemeten motion-specs (live gemeten in de browser, 12-10-2026)
- **Surridge trade partners:** reveal = opacity 0→1 plus `translateY(28px)`, 0,7–0,8 s, `cubic-bezier(0.16, 1, 0.3, 1)`; hover-transform 0,3 s met dezelfde easing; ambient animatie 20 s ease-in-out; sticky sub-nav met scrollspy-pills (Overview, Kit, Offer, White-label, Account, Process, Apply); oversized "80+"-stat naast een lijst met losse cijfers. Geen library, pure CSS en observer.
- **Brikl:** `transform 0,82 s` en `opacity 0,7 s` met `cubic-bezier(0.22, 1, 0.36, 1)`, scroll-progressbalk (`scaleX`), header met blur, ambient wolkendrift 38–46 s, geen GSAP of Lenis.
- **Oura for Organizations:** vrijwel geen scrollmotion (geen reveals), alleen UI-transities van 0,15–0,3 s met `cubic-bezier(0.4, 0, 0.2, 1)` en een logo-marquee. Het premiumgevoel komt uit typografie, fotografie en donker vlak, niet uit motion.

Conclusie: een reveal van 28 px in 0,8 s met expo-out, een voortgangsbalk en een sticky scrollspy-nav zijn de gemeten norm. Meer motion is niet nodig om modern te ogen.

### Motion die aantoonbaar in code zit
- **On (on.com/nl-nl):** GSAP met ScrollTrigger en ScrollSmoother, `prefers-reduced-motion` wordt gerespecteerd.
- **Apple Mac:** `IntersectionObserver`, sticky-secties en een requestAnimationFrame-loop gekoppeld aan `video.currentTime`.
- **Linear:** CSS-marquee en veel keyframes, `prefers-reduced-motion` aanwezig.
- **Stripe:** `clip-path: inset()` in de navigatie en een marquee; waar de Three.js-chunk voor dient is onbekend.
- **Darn Tough:** een `shine`-keyframe als glanseffect.

Conclusie: een rustig, scrollgebonden reveal-ritme is de norm. Zware libraries (ScrollSmoother, Three.js) zijn niet nodig en passen niet bij Horizon met vanilla JS.

### Vijf patronen voor HÏ Grip Zakelijk
1. **Routekeuze onder de hero:** twee panelen (Retailer / Club), 60/40, zwart en wit, pill-CTA met chevron.
2. **Gepinde bewijssectie:** zwart, grote losse cijfers in volt, tekstwissel via `position: sticky` en een observer. Alleen claims uit het feitenbestand, met bronregel (Apps et al. 2022).
3. **Reveal-ritme:** fade plus 24px omhoog via `IntersectionObserver` en een `is-visible`-class, eenmalig, kleine stagger.
4. **CSS-marquee** met de kernsporten (padel, tennis, voetbal, rugby) in uppercase Poppins; logo's alleen van bevestigde partners.
5. **Stap-balk** 01 / 02 / 03 met grote cijfers en een volt accentlijn; het echte proces moet Lars bevestigen.

Techniek: alleen `opacity` en `transform` animeren, ruimte reserveren tegen CLS, alles uit onder `@media (prefers-reduced-motion: reduce)`, geen autoplay-video in de hero zonder poster, CSS in `/assets/`.

### Voorstel sectievolgorde
Hero met één CTA → keuze Retailer/Club → waarom het werkt (grip-cijfers met bron) → product en assortiment → voor retailers → voor clubs → zo werkt het (3–4 stappen) → bewijs → FAQ met formulier → menselijke fallback (naam en e-mail van een founder).

### Formulier (max 6 velden)
Ik ben retailer of club · naam winkel of club · naam en e-mail · sport of type winkel · verwachte hoeveelheid per jaar (bandbreedte) · opmerking (optioneel).

### Wat HÏ Grip mag tonen
Volgens [[Feiten & Actuele Staat|Feiten]]: 3000+ sporters, wrijvingscoëfficiënt 1,17 tegen 0,60 en "95% meer grip" uitsluitend met bronregel Apps et al. 2022 (nooit "HÏ Grip getest"), Trustpilot 4,6 ★ met bron (nooit als schema-rating), adviesprijs retail 2.0 €17,95. "Vertrouwd door 10+ organisaties" is niet geteld en blijft weg. Er bestaan al B2B-brochures, one-pagers 2.0 en een B2B-prijsstaffel in de vault (zie [[Performance Grip Socks 2.0]]); de pagina kan daar met en zonder prijzen op aansluiten.

### Valkuilen uit de voorbeelden
Serious Sport noemt twee verschillende clubaantallen op één pagina, en bij Surridge stonden de tellers op 0. Dat tast geloofwaardigheid aan. Gebruik één bevestigd getal. JAKO gebruikt "u"; HÏ Grip blijft bij "jij/je".

## Wat niet lukte
whoop.com en adidas.nl gaven een 403, bombas.com een 429, myclubgroup.com een 403 en faire.com/retailers een 404. Nike en Stance hadden geen bruikbare team- of wholesalepagina. Faire is client-side gerenderd. Formuliervelden achter pop-ups (Surridge, Faire, JAKO, Brikl) zijn niet gezien. Chrome was niet verbonden. In de ingebouwde browser zijn daarna wel screenshots gemaakt van On, Oura, Surridge en Brikl en is de motion gemeten, maar Apple, Linear, Stripe en Faire zijn niet gerenderd. De zoektool leverde vooral SaaS-roundups en geen bruikbare Awwwards-lijst voor B2B.

## Bronnen
- https://surridgesport.com/en/education/trade-partners
- https://www.faire.com/brands
- https://www.clothingthegaps.com.au/pages/wholesale
- https://www.brikl.com/branded-stores/sports-clubs
- https://serioussport.co.uk
- https://www.jako.com/nl-nl/community/jako-voor-clubs/
- https://www.jako.com/nl-nl/community/jako-voor-dealers/
- https://www.darntough.com/pages/dealer-resources
- https://www.stance.com/pages/group-pricing
- https://ouraring.com/business
- https://www.on.com/nl-nl
- https://www.apple.com/nl/mac/
- https://linear.app
- https://stripe.com/nl

## Aantekeningen
