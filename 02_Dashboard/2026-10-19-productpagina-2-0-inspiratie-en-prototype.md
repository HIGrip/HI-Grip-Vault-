---
id: 2026-10-19-productpagina-2-0-inspiratie-en-prototype
titel: "Productpagina 2.0 — inspiratie (On, Apple, Oura, AI-testthema) en prototype v1.0"
kerntitel: "Nieuwe productpagina 2.0: koopblok, 360°, anatomie en volledige schema in één prototype"
datum: 2026-10-19
bron: los
routine: ""
categorie: CRO
status: nieuw
prioriteit: P1
samenvatting: "Een nieuw productpagina-prototype voor de Performance Gripsokken 2.0 combineert de duidelijkheid van On (wat je kunt verwachten), de ruimte en scrollmomenten van Apple en de uitleg per voordeel van Oura, in de stijl van het AI-testthema (zakelijk, over ons). Voor de bouw in het thema moeten de packprijzen van de 2.0, de 1.0-specificaties en de werkomschrijving van special cushioning nog worden bevestigd."
gerelateerd: [2026-10-14-homepage-herontwerp-vanaf-leeg-canvas-richting-b-doorgaan, 2026-10-13-homepage-redesign, 2026-10-08-growth-radar-cro, 2026-10-26-weekoverzicht]
vervangt: []
bronbestand: "https://claude.ai/artifact/DWTuACXKH2TFRtaxjNx1A9"
deadline: ""
---
# Productpagina 2.0 — inspiratie (On, Apple, Oura, AI-testthema) en prototype v1.0

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[Waar staat wat]] · [[Home]]

## In het kort

Op verzoek van Timo is de productpagina van de [[Performance Grip Socks 2.0]] opnieuw ontworpen als prototype (artifact v1.0, bron in `03_Website_Agent/Productpagina-prototype/v1.0/`). Stijl en componenten komen uit het AI-testthema (*Bijgewerkte kopie van AI website workspace 2.0*, #202398040391): Poppins 900 in hoofdletters met een grijs tweede deel van de kop, haarlijnen tussen features, genummerde hotspots op de sok en pill-knoppen met chevron. Inspiratie: On (Cloudmonster), Apple (AirPods Pro) en Oura (Ring 5). Alle feiten komen uit het [[Feiten & Actuele Staat|feitenbestand]] en de productnotitie; de gripclaim staat als categoriebewijs met bron.

## Acties

- [ ] P1 · Besluit: packprijzen 2.0 vastleggen in het feitenbestand (preview toont 3 paar €44,95 en 5 paar €69,95, het feitenbestand noemt alleen €17,95)
- [ ] P2 · Besluit: werkomschrijving special cushioning bevestigen ("dempingzones onder de voet") voordat hij live gaat
- [ ] P2 · Specificaties van de 1.0 vastleggen in de vault, zodat de vergelijking 1.0/2.0 meer kan tonen dan prijs, maten en kleur
- [ ] P1 · Prototype v1.0 laten beoordelen door Lars en daarna als secties in het AI-testthema bouwen (nooit op het live thema)
- [x] P2 · ProductGroup-schema met EAN en SKU per variant uit het prototype overnemen in het thema; shippingDetails en retourbeleid pas toevoegen als verzend- en retourpagina's gelijkgetrokken zijn

## Bevindingen

### AI-testthema: de nieuwe stijl
- **Zakelijk:** donkere hero met Poppins 900 italic ("STOP MET GLIJDEN. / START MET GRIP." in volt), daarna witte secties met haarlijn-lijsten, een sok met genummerde hotspots ("ZES KENMERKEN. EÉN SOK." met grijs tweede deel), een off-white processectie en een FAQ.
- **Over ons / missie:** zwarte secties met grote italic koppen, missie "WIJ VERSNELLEN DE BEWEGING VAN IEDERE SPORTER." met lichtstrepen; kernwaarden in royal blue. `/pages/missie` bestaat niet; de missie staat als sectie op `/pages/over-ons`.
- **Huidige productpagina 2.0 (preview):** standaard Horizon-koopblok met een bundle-block in oranje labels ("Meest gekozen", "€9,- Korting") die buiten de merkstijl vallen, gevolgd door een donkere expertisesectie en een anatomiesectie.

### Wat de inspiratie oplevert
- **On:** boven de vouw beantwoordt de pagina "wat krijg ik?" met vaste specificaties (drop, gewicht, stijl) en losse uitklapblokken voor maat, verzending en materiaal. Vertaald als het blok *Wat je kunt verwachten* (grip, compressie, materiaal, sporten) direct onder de koopknop.
- **Apple:** veel lucht, één groot statement per scherm en beeld dat op scroll opent. Vertaald als "JE VOET STAAT STIL. JIJ NIET." met een padelfoto die bij scrollen uitgroeit, en een 360°-weergave die meedraait.
- **Oura:** per voordeel eerst het onderdeel en dan wat het voor jou betekent. Vertaald als de interactieve anatomie: zeven features, elk met specificatie en een regel "wat jij merkt", gekoppeld aan hotspots op de sok.

### Conversie-opbouw van het prototype
- Koopblok: Trustpilot 4,6 en 3500+ sporters boven de titel, prijs per paar per pack, maatkiezer met invoer van je schoenmaat, knop die eerst om een maat vraagt in plaats van fout te bestellen, en verzendbelofte direct onder de knop.
- Sticky koopbalk zodra de koopknop uit beeld is; na toevoegen een melding met de voortgang naar gratis verzending vanaf €35.
- Vergelijking 1.0/2.0 helpt twijfelaars kiezen in plaats van weg te klikken; sportkaarten linken naar de vier sportpagina's.

### SEO in het prototype
- H1 met hoofdkeyword "gripsokken" (Performance Gripsokken 2.0), kruimelpad, metabeschrijving en zeven FAQ-vragen op long-tails ("wat zijn gripsokken", "werken gripsokken echt", maat, 1.0 vs 2.0).
- JSON-LD: ProductGroup met zes varianten (kleur × maat) inclusief EAN (gtin13) en SKU, BreadcrumbList en FAQPage. Geen aggregateRating, conform het feitenbestand.

## Wat niet lukte

- Inspiratiepagina's zijn alleen op koppen en structuur gelezen (tokenbewust), niet volledig gescreenshot.
- Het artifact gebruikt lokale kopieën van de foto's; de artifact-CSP blokkeert higrip.nl/cdn.

## Bronnen

- AI-testthema #202398040391, preview `/pages/zakelijk`, `/pages/over-ons`, `/products/performance-gripsokken-2-0-zwart` (19-10-2026)
- https://www.on.com/en-us/products/cloudmonster-61
- https://www.apple.com/airpods-pro/
- https://ouraring.com/nl/store/rings/oura-ring-5/silver
- [[Performance Grip Socks 2.0]] · [[Feiten & Actuele Staat]]
- Prototype: https://claude.ai/artifact/DWTuACXKH2TFRtaxjNx1A9

## Aantekeningen
