---
id: 2026-09-24-growth-radar-cro
titel: "Growth Radar — CRO (prijsladder gewijzigd, verzenddrempel, script tags)"
datum: 2026-09-24
bron: routine
routine: "growth-radar"
categorie: CRO
status: nieuw
prioriteit: P1
samenvatting: "De live prijzen zijn verlaagd (€13,49 / €39,95 / €61,95), waardoor het 3-pack per paar maar €0,17 goedkoper is dan een 1-pack: gratis verzending is nu het enige echte pack-argument, en juist die drempel spreekt zichzelf tegen (€35 vs €30). Daarnaast stoppen Shopify-script tags op 1 maart 2027, terwijl Trustpilot en Bundler-restanten er nog via laden."
gerelateerd: [2026-09-17-growth-radar-cro, 2026-09-23-seo-conversietest-run-1, 2026-09-21-growth-radar-seo-technisch]
vervangt: []
bronbestand: "C:\\Users\\Test\\.claude\\research\\growth-radar\\rapporten\\2026-09-24-cro.md"
deadline: "2027-03-01"
---
# Growth Radar — CRO (prijsladder gewijzigd, verzenddrempel, script tags)

## In het kort
De live productpagina wijkt af van alles wat in de backlog staat. De prijzen zijn verlaagd: een 3-pack is nu per paar nog maar €0,17 goedkoper dan een 1-pack. En dezelfde pagina noemt twee verschillende drempels voor gratis verzending: €35 in de balk en de meta description, €30 in de FAQ. Daardoor is gratis verzending het enige echte argument voor een groter pack. Die tegenstrijdigheid was gisteren al gemeld, maar weegt nu zwaarder. Punten 1 en 12 zijn daarop bijgewerkt. Verder stopt Shopify op 1 maart 2027 met script tags. Trustpilot en een Bundler-script laden nog via die weg.

## Bevindingen

### De prijsladder is veranderd: het 3-pack is nauwelijks voordeliger per paar

Een check van de live productdata (`/products/performance-gripsokken.js`, 24 september 2026) laat andere prijzen zien dan in de backlog en het projectgeheugen staan:

| Pack | Oude prijs (backlog) | Live prijs | Per paar live | Voordeel per paar t.o.v. 1-pack |
|---|---|---|---|---|
| 1-pack | €14,99 | €13,49 (van €14,95) | €13,49 | — |
| 3-pack | €41,99 | €39,95 | €13,32 | €0,17 |
| 5-pack | €64,99 | €61,95 | €12,39 | €1,10 |

Drie losse 1-packs kosten samen €40,47, dus maar €0,52 meer dan één 3-pack. De prijsladder zelf geeft de koper dus nauwelijks een reden om groter te kopen. Het echte verschil zit in de verzendkosten. Onder de drempel betaal je €4,50, en een 1-pack van €13,49 blijft daar ruim onder. Twee 1-packs ook: €26,98.

Dat verandert twee backlogpunten. Een prijs per paar tonen (punt 12) zou nu vooral laten zien hoe klein het verschil is: "€13,49 → €13,32/paar" overtuigt niemand. De ankerwerking uit het onderzoek van 17 september werkt alleen als het verschil voelbaar is. Voor het 5-pack is het dat wel (−8%), voor het 3-pack niet. De verzendbalk (punt 1) wordt daarmee het belangrijkste argument voor het 3-pack. Die balk moet dan wel het juiste bedrag tonen, en daar gaat het nu mis.

> **Voor higrip.nl:** In `snippets/product-information-content.liquid` (punt 12) kun je de prijs per paar beter afzetten tegen de doorgestreepte €14,95. Het 3-pack wordt dan "€13,32/paar, 11% onder de normale prijs" in plaats van −1%. Of je stelt de pack-prijzen zelf opnieuw vast. Dat is een commerciële keuze, geen code-fix. Voor punt 1 wordt de tekst bij een 1-pack "Nog €21,51 tot gratis verzending" (bij een drempel van €35).

**Actie:** Punten 1 en 12 in de backlog zijn bijgewerkt met de nieuwe cijfers. Beslis eerst welke pack-prijzen je wilt aanhouden en bouw daarna.

---

### Twee verzenddrempels op dezelfde pagina: bevestigd en urgenter geworden

De seo-conversietest van 23 september ([[2026-09-23-seo-conversietest-run-1]]) vond al dat higrip.nl zichzelf tegenspreekt over de verzenddrempel. Vandaag live bevestigd: de announcementbar en de meta description zeggen **€35**, het FAQ-blok op dezelfde productpagina zegt *"Bij een bestelwaarde van €30 of meer profiteert u van gratis verzending"*. De verzendkosten zijn €4,50.

Nieuw ten opzichte van gisteren: door de prijswijziging hierboven is gratis verzending het enige echte argument voor het 3-pack. Een drempel die niet klopt, raakt daarmee het belangrijkste argument om groter te kopen. Daarnaast spreken het FAQ-blok en de retourtekst de klant met "u" aan ("profiteert u", "uw retourproces"). De rest van de site gebruikt "je".

> **Voor higrip.nl:** De P1-actie uit de notitie van 23 september (verzend- en retourinfo overal gelijktrekken) moet af zijn vóór backlogpunt 1 (de verzendbalk). Neem de omzetting van "u" naar "je" in het FAQ-blok en de retourtekst in dezelfde ronde mee. Laat de balk het bedrag uit één theme-setting halen, zodat hij niet opnieuw uit de pas kan lopen.

**Actie:** Geen nieuw backlogpunt, want de actie staat al in de notitie van 23 september. Wel meegenomen in punt 1.

---

### Script tags stoppen op 1 maart 2027: Trustpilot en Bundler laden nog zo

Shopify kondigde op 24 augustus 2026 in de developer-changelog aan dat script tags (de oude manier waarop apps JavaScript in je webshop injecteren) op **1 maart 2027** stoppen met werken in de Online Store. Apps moeten overstappen op theme app extensions (app embeds). Scripts die dan nog via script tags lopen, vallen zonder foutmelding weg. Het is hetzelfde patroon als bij de Checkout Extensibility-deadline van 26 augustus (zie punt 11).

Op de live productpagina laden via script tags (`asyncLoad`) nu vier scripts:
- `cdn-bundler.nice-team.net/app/js/bundler.js` (Bundler-app)
- drie Trustpilot-scripts (`header.min.js`, `success.min.js`, trustbox-instellingen)

> **Voor higrip.nl:** Het projectgeheugen zegt dat de Bundler-app is verwijderd na de WK-actie. Live laden echter nog steeds het Bundler-script plus negen `bundler`-verwijzingen in de HTML (target-elementen, een app-block, statusscript). Óf de app is nog geïnstalleerd, óf er zijn restanten achtergebleven. Dat is ook JavaScript dat punt 14 (INP) zwaarder maakt. Trustpilot is je review-proof: als die widget straks stilletjes verdwijnt, raakt dat punt 2 (reviews) en de trust op de productpagina.

**Actie:** Nieuw backlogpunt 16 (P2): Bundler-app verwijderen of de restanten opruimen, en bij Trustpilot controleren of er een app-embed-versie is die de script tags vervangt.

---

### Ook gecontroleerd, geen actie
- **iDEAL → Wero:** De betaaliconen op higrip.nl tonen al het co-branded "iDEAL | Wero"-logo. Shopify Payments regelt dat automatisch. De volledige overstap op Wero loopt tot eind 2027 en vraagt nu niets van je.
- **Meta title en description (punt 3):** Staan inmiddels live, met iets andere tekst dan in de backlog ("Maximale Grip voor Elke Sport", "3000+ sporters", "vanaf €35"). Punt 3 is afgevinkt.
- **Retourbeleid op de productpagina:** Staat erop ("30 dagen retour via deze link"). Baymard meet dat 60% van de kopers dit op de productpagina zoekt, dus hier is geen actie nodig.

## Acties
Backlogpunten 1, 12 (herzien) en 16 (nieuw) staan in `ACTIEBACKLOG.md`. De verzenddrempel-actie staat in [[2026-09-23-seo-conversietest-run-1]].
- [ ] P2 · FAQ-blok en retourtekst op de productpagina van "u" naar "je" omzetten

## Bronnen
- [Shopify Developer Changelog — Online Store Script Tags deprecation (24 aug 2026)](https://shopify.dev/changelog)
- [Wero uitgelegd — Thuiswinkel.org (bijgewerkt 24 aug 2026)](https://www.thuiswinkel.org/kennisbank/kennisartikelen/wero-uitgelegd-al-je-vragen-over-het-nieuwe-europese-betaalsysteem/)
- [iDEAL to Wero: Your Complete Guide for 2026–2027 — CM.com](https://www.cm.com/blog/ideal-to-wero-what-merchants-need-to-know-about-the-transition/)
- [Shopify Help Center — iDEAL | Wero](https://help.shopify.com/en/manual/payments/shopify-payments/local-payment-methods/ideal)
- [Product Details Page UX Research — Baymard](https://baymard.com/research/product-page)
- Eigen meting: live `https://www.higrip.nl/products/performance-gripsokken` (HTML + `.js`-productdata), 24 september 2026

## Aantekeningen
