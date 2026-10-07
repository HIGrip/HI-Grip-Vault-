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
samenvatting: "De shoppagina blijft op /collections/gripsokken en wordt een keuzepagina met twee kaarten (2.0 dominant met kleurwissel wit/zwart, 1.0 kleiner), een keuzehulp en compact bewijs, op keyword 'gripsokken kopen'. Live toont de 1.0 geen packs (alleen €14,95), terwijl de bundel-app 3-pack €35,95 en 5-pack €54,95 bevat en het feitenbestand €41,95/€64,95 noemt; daarom staat er geen 'vanaf €12,99'."
gerelateerd: [2026-10-07-missie-visie-pagina, 2026-09-25-search-console, 2026-09-28-seo-conversietest-run-2]
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

## Wat niet lukte

De Website Copy-agent leverde niets: zijn identiteitsbestand stond niet op het verwachte pad. De SEO- en de Design-agent misten het ook, maar adviseerden wel. De copy is daarom zelf geschreven uit het feitenbestand. Playwright was bezet door een andere sessie; de test liep via een tijdelijke lokale server in de browserpane, en de tijdelijke bestanden zijn verwijderd. Het Research Dashboard is niet gesynct of gepubliceerd, omdat het van info@ is en deze sessie op het persoonlijke account draait. Er bestaan geen losse founderportretten: de gebruikte slide-11-foto's staan niet op Missie of Visie, maar wel op Over ons.

## Bronnen

- [[Feiten & Actuele Staat]] · [[Performance Grip Socks 2.0]] · [[00 Brand Core]]
- Live: `https://www.higrip.nl/products/<handle>.js` voor de drie handles, de gerenderde productpagina 1.0 en /collections/gripsokken (7-10)
- Werkthema #201133490503, `sections/about-*` en `assets/about-*` (alleen lezen, via `shopify theme pull`)
- Pitch/fotos: slide-11-lars, slide-11-tigo, slide-11-timo
- Subagents seo-agent en design-agent (advies, 7-10)

## Aantekeningen
