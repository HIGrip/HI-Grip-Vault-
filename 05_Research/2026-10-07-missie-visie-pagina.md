---
id: 2026-10-07-missie-visie-pagina
titel: "Missie & Visie-pagina higrip.nl — onderzoek, SEO-keuzes en concept"
kerntitel: "Missie en visie als twee pagina's, ontdubbeld tegen de nieuwe Over ons"
datum: 2026-10-07
bron: los
routine: ""
categorie: SEO
status: nieuw
prioriteit: P2
samenvatting: "De nieuwe Over ons in het werkthema linkt al naar /pages/onze-missie en /pages/onze-visie, dus de Missie & visie-pagina hoort op /pages/onze-missie, met 'missie en visie HÏ Grip' als keyword omdat Over ons al op de merknaam rankt. Het concept (versie 2) gebruikt dezelfde bewegingstaal als Over ons en is ontdubbeld: geen founderfoto's, geen kernwaardensectie en geen tagline-slot die Over ons al heeft."
gerelateerd: [2026-09-25-seo-audit, 2026-09-04-werkdossier-stand-van-zaken, 2026-10-07-shoppagina-keuzepagina]
vervangt: []
bronbestand: "https://claude.ai/artifact/Dy7Vmadcqj1N4iEYbeZx87"
deadline: ""
---
# Missie & Visie-pagina higrip.nl — onderzoek, SEO-keuzes en concept

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[Waar staat wat]] · [[Home]]

## In het kort

Opdracht van 7-10 via `/denzel`: een Missie & Visie-pagina voor higrip.nl, opgeleverd als één artifact, zonder het Shopify-thema aan te raken. Missie, visie, kernwaarden en tagline komen letterlijk uit het Canva-document *MERK & STRATEGIE* en [[Brand Identity Overview]] (die zijn gelijk; de visie bestond, er was geen placeholder nodig). Het concept staat op https://claude.ai/artifact/Dy7Vmadcqj1N4iEYbeZx87, bedoelde URL `https://www.higrip.nl/pages/missie-visie` (nu 404).

## Kerncijfers

- **52** · Vertoningen 'hi grip' op /pages/over-ons, positie 1 (90 dagen)
- **172** · Vertoningen 'higrip' sitebreed, positie 2,9 (90 dagen)
- **0** · Vertoningen op 'missie', 'merk' of 'wie zit achter' (90 dagen)

## Acties

- [ ] P1 · Besluit: de oude dunne pagina's /pages/onze-missie en /pages/onze-visie vervangen door de twee nieuwe concepten (Over ons linkt er al naar)
- [ ] P3 · Nagaan of de templates onze-waarden en ons-verhaal nog live pagina's voeden die Over ons dubbelen
- [ ] P2 · Besluit: oprichtingsdatum vastleggen in het feitenbestand (Over ons-tijdlijn en -schema zeggen december 2024, de oude Over ons september 2024)
- [ ] P2 · Besluit: Instagram, TikTok en LinkedIn van HÏ Grip in het feitenbestand zetten, zodat ze in sameAs mogen
- [ ] P2 · Besluit: founderquotes op de nieuwe Over ons bevestigen als echte uitspraken van Lars, Timo en Tigo
- [ ] P2 · Over ons-schema gelijktrekken met Missie & visie: volledige namen en dezelfde jobTitle per founder (nu "Lars" met rol [CHECK])
- [ ] P3 · Over ons: knoppen zijn gevuld met volt en zonder chevron, Timo's accent is #4d63ff (geen merkkleur) en "Snowbaorden" is een typfout

## Bevindingen

### Keyword-keuze: niet concurreren met Over ons
Search Console (7-7 t/m 4-10) laat zien dat `/pages/over-ons` op positie 1 staat voor "hi grip" (52 vertoningen) en ook vertoond wordt op "higrip". De merkzoekopdrachten zijn sitebreed de sterkste: "higrip" 172 vertoningen (ctr 47,7%), "hi grip" 151 (ctr 37,8%). Daarom krijgt Missie & Visie **niet** de kale merknaam als primair keyword, maar **"missie en visie HÏ Grip"** (merk + intentie). Secundair: "Nederlands sportsokkenmerk", "gripsokkenmerk", "wie zit achter HÏ Grip". Op de categoriewoorden en "wie zit achter" is in 90 dagen geen enkele vertoning gemeten: dat zijn verwachtingen, geen bewezen vraag.

### Voorbeeldsites (bekeken in de browser op 7-10)
| Site | Patroon | SEO-opbouw |
|---|---|---|
| Nike (about.nike.com/en/mission) | Eén oversized missiezin als hero, verbreed naar iedere sporter | Geen H1, geen JSON-LD, ~340 woorden |
| On (on.com/en-us/explore/about-on) | Oprichtersverhaal, portretten, waarden als houding | H1 = slogan, beschrijvende alt-teksten per founder, geen JSON-LD, ~760 woorden |
| Adidas (annual report, purpose & mission) | Purpose → mission, zichtbare breadcrumb | Tekst grotendeels in beeld (~40 crawlbare woorden), geen JSON-LD |

Geen van de drie heeft schema op deze pagina. HÏ Grip kan hier voorlopen met AboutPage + Organization als entiteit.

### SEO-keuzes in het concept
- Title (53): "Missie en visie: Nederlands sportsokkenmerk | HÏ Grip". Description (150 tekens).
- H1 = eyebrow "Missie & visie van HÏ Grip" + de missiezin. Zeven H2's, elk geopend met één zelfstandige zin van 42–50 woorden (citeerbaar voor AI-zoekmachines).
- JSON-LD: AboutPage → Organization (`@id` `https://www.higrip.nl/#organization`, founders als Person met `jobTitle` Co-founder, `sameAs` alleen Trustpilot), BreadcrumbList (Home → Over ons → Missie & Visie), FAQPage. Geen rating of review.
- Interne links: Over ons, Performance Gripsokken (1.0) en 2.0 zwart, homepage. Gripclaim met de verplichte formulering en bron Apps et al. 2022.
- ~1.270 woorden. Geen overflow gemeten op 375 en 1440 px.

### Controle (seo-schema, seo-geo, seo-content)
Schema geldig; GEO 78/100; content 9 van 11 geslaagd, daarna opgelost (homepagelink in de tekst, samenstellingen). Bewust niet overgenomen: de grip-claim afzwakken (de formulering is verplicht volgens [[Feiten & Actuele Staat]]) en socials in `sameAs` (staan niet in het feitenbestand). De schema-agent stelt dat Google FAQ-rich-results sinds mei 2026 voor alle sites heeft stopgezet; niet geverifieerd. Het FAQPage-blok blijft staan omdat het 1-op-1 met de zichtbare tekst overeenkomt.

### Founders
Namen, sporten en focusgebieden komen uit de investeringspitch van 6-10 (slide "Wij zijn HÏ Grip"); foto's uit `Pitch/fotos` (Lars voetbal, Tigo voetbal, Timo snowboarden). De pitch-notities zeggen zelf dat portretten beter zijn.

### Update 7-10 · Over ons in het werkthema "AI website workspace 2.0" (201133490503)
Alleen gelezen (`shopify theme pull` naar een tijdelijke map; niets gepusht). De nieuwe Over ons bestaat uit acht `about-*`-secties met één script (`assets/about-page.js`).

**Bewegingstaal, overgenomen in versie 2 van het concept:** easing `cubic-bezier(.2,.7,.1,1)`; fade-up van 28px bij in beeld komen (.7s opacity, .9s transform, stagger .12s); hero-regels die oplopen met vertraging .05/.18/.31s en een foto die met het scrollen zoomt (scale 1,08 → 1); een sticky statement waarin woorden een voor een oplichten, met volt-snelheidslijnen en een voortgangsbalk; outline-woorden die met volt vollopen; een balk die zich met het scrollen vult (tijdlijn); woorden die in het slot oplopen. Respecteert prefers-reduced-motion. Kopstijl: Poppins 800 schuin, −0,045em.

**Dubbelingen, en wat eruit is gehaald:**
- Founderfoto's en -cards (Over ons heeft ze met sport en quote): op Missie & visie alleen namen en rollen, zonder foto. Tigo en Timo stonden met precies dezelfde foto's in het eerste concept.
- Kernwaardensectie (Over ons heeft comfort/vertrouwen/innovatie met animatie): nu één regel met de drie lijnen plus een link naar Over ons. Op Missie & visie staan in plaats daarvan de vijf werkprincipes, die niet op Over ons staan.
- Slot "Ga door waar anderen stoppen." (de outro van Over ons): vervangen door de core message "Wie blijft gaan, bepaalt zelf waar het stopt."
- Hero- en tennisbeeld uit dezelfde shoot als de fotostrook van Over ons, en de pitchfoto uit de zaal (staat daar ook): vervangen door de serve op gravel, de tennisclub, TVB Open en het RBS-gebouw.
- Binnen de pagina: de FAQ is weg (geen zoekvolume in Search Console en elke vraag stond al als H2), de 3000+-badge in de hero is weg, en de visie staat nog maar één keer. Bewust blijven staan: de missiezin in de H1 en in de antwoordzin, en het keyword in twee H2's.

**URL:** Over ons linkt "Lees de hele missie" naar `/pages/onze-missie` en "Lees de visie" naar `/pages/onze-visie`. Beide bestaan live als dunne oude pagina's (170 en 229 woorden, zonder meta description, met teksten van vóór Canva). Het concept staat nu op canonical `/pages/onze-missie`.

### Update 7-10 · Gesplitst in twee pagina's
Op verzoek van Lars zijn missie en visie twee aparte pagina's geworden, elk met een eigen zoekwoord en zonder overlap:
- **Missie** (`/pages/onze-missie`, https://claude.ai/artifact/Dy7Vmadcqj1N4iEYbeZx87): keyword "missie HÏ Grip". Title "Missie van HÏ Grip: Nederlands sportsokkenmerk | HÏ Grip" (56), description 141 tekens, ~770 woorden. Secties: filosofie/missie/gevoel, oerverhaal + vijf werkprincipes, wat performance is (zes omschrijvingen uit Canva, als meeschuivende strook), founders, wat het voor jou betekent (claim met bron).
- **Visie** (`/pages/onze-visie`, https://claude.ai/artifact/WgshFnrwqqFyLyBMEPj1Kc): keyword "visie HÏ Grip". Title "Visie van HÏ Grip: Nederlands sportmerk met impact | HÏ Grip" (60), description 150 tekens, ~670 woorden. Secties: visie + tijdlijn, vier pijlers, Performance Academy (uit [[Strategische Keuzes]]), vijf-jaar-statement, vier ambities (uitklappende panelen), wat het voor jou betekent (met link naar /pages/zakelijk).
- Beide pagina's komen uit één bouwscript met gedeelde CSS en JS, dus stijl en beweging zijn gelijk. Eyebrows zijn weg (feedback van Lars: te AI-achtig). Ze linken naar elkaar via `relatedLink` en de slot-CTA, en hebben hetzelfde Organization-blok.
- Dubbelingscheck (5-woordreeksen): geen overlap tussen Visie en Over ons. Tussen Missie en Over ons alleen de missiezin en de filosofie, bewust. Tussen Missie en Visie alleen de shop-knop en één vaste Canva-frase.
- Beeld: geen foto staat op twee van de drie pagina's. Voor Visie zijn twee Shopify-foto's gebruikt die nergens in het thema staan (hardlopen, voetbal wit).

## Wat niet lukte

Het concept-artifact van de nieuwe Over ons (NhEKihrG6Y9MrWe1TM8smz) was niet leesbaar vanaf het persoonlijke account; aansluiting is gemaakt op de Over ons in het thema (live-snapshot) en op de Brand Core. Visuele screenshots op 375/1440 lukten niet (browserpane verborgen, headless Edge geblokkeerd); de layout is gecontroleerd met metingen in iframes van exact 375 en 1440 px. Het Research Dashboard is niet gesynct of opnieuw gepubliceerd: het is van info@ en dat mag niet vanaf het persoonlijke account.

## Bronnen

- Canva *MERK & STRATEGIE — HÏ Grip*, pagina 1–12 (gelezen via de Canva-koppeling)
- [[Brand Identity Overview]] · [[Brand Voice & Tone of Voice]] · [[Strategische Keuzes]] · [[Feiten & Actuele Staat]]
- Search Console via `05_Research/_tools/google_data.py` (gsc en pagina, 90 dagen)
- Investeringspitch `Pitch/HI-Grip-Investeringspitch-2026-v2.pptx`, slide 10
- about.nike.com/en/mission · on.com/en-us/explore/about-on · report.adidas-group.com/2024/en/at-a-glance/our-purpose-and-mission.html

## Aantekeningen
