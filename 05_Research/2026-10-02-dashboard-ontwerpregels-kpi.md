---
id: 2026-10-02-dashboard-ontwerpregels-kpi
titel: "Dashboard — 7 ontwerpregels (uiux.build) getoetst aan prototype v2, KPI-tegels aangescherpt"
kerntitel: "Een KPI-tegel toont wat veranderde, tegen welke basis en waar je verder kijkt"
datum: 2026-10-02
bron: los
routine: ""
categorie: Techniek
status: nieuw
prioriteit: P3
samenvatting: "Prototype v2 voldeed al aan vijf van de zeven regels; het gat zat in de KPI-tegels: de vergelijking was een percentage zonder zichtbare basis, en niet te zien was wat de verandering veroorzaakte of dat je erop kon klikken. Nu tonen de tegels de vorige periode als stippellijn in de minigrafiek, een regel ‘Vooral …’ met het onderdeel dat het meest veranderde, en een › naar de bron."
gerelateerd: [2026-10-02-dashboard-apps-patronen, 2026-09-26-dashboard-ux-onderzoek, 2026-10-03-dashboard-agenda-mail-ads-leveranciers, 2026-10-04-dashboard-bruikbaarheidsaudit]
vervangt: []
bronbestand: "https://claude.ai/artifact/XPnRocf1ZcG1J7pb82QBHy"
deadline: ""
---
# Dashboard — 7 ontwerpregels (uiux.build) getoetst aan prototype v2, KPI-tegels aangescherpt

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[Waar staat wat]] · [[Home]]

## In het kort

- **Aanleiding:** een Instagram-post van uiux.build met zeven regels voor dashboardontwerp, gedeeld door Timo met de vraag hoe we dit kunnen toepassen. Instagram markeert de post als AI-content. Lees hem dus als checklist, niet als onderzoek.
- **Vijf regels zaten er al in:**
  1. belangrijkste cijfers bovenaan;
  2. gegroepeerd in kaarten;
  3. één kaartstijl;
  4. eenvoudige grafieken met één reeks;
  5. filters en zoeken (⌘K, weergaven, zoekvelden).
- **Het gat zat in regel 5 en 7 en in de reacties onder de post.** Daar staat dat een dashboard een besluit moet verkleinen: een vergelijkingsbasis plus *wat veranderde / waarom / volgende stap*. Onze KPI-tegels gaven een percentage zonder zichtbare basis, zonder oorzaak, en je zag niet dat je erop kon klikken.
- **Gebouwd in prototype v2.6:** de vorige periode staat als stippellijn in de minigrafiek; een regel *Vooral …* benoemt het onderdeel dat het meest veranderde; elke klikbare tegel heeft een ›.

## Acties
- [ ] P3 · Bij de echte bouw: geef ook de CRM- en Financiën-tegels een vorige-periodebasis en een ‘Vooral …’-regel zodra die cijfers per periode bestaan

## Bevindingen

### Toetsing per regel

| Regel | In v2? | Waar |
|---|---|---|
| 1. Belangrijkste cijfers bovenaan | ja | KPI-strip bovenaan Home, CRM, Webshop, Financiën en AI |
| 2. Verwante data groeperen | ja | kaarten per onderwerp, grid van 12 kolommen |
| 3. Eén kaartstijl | ja | één `kpi()`-functie voor alle tegels |
| 4. Geen overvolle grafieken | ja | staafgrafiek en sparkline met één reeks; doellijn alleen waar een doel is |
| 5. Trends in de tijd | deels → nu ja | sparklines waren er al, maar zonder basis. Nu met de vorige periode als stippellijn |
| 6. Filters en zoeken | ja | ⌘K-palet, opgeslagen weergaven, zoekvelden in Relaties, Research en Bestanden |
| 7. Acties zichtbaar | deels → nu ja | één primaire knop per scherm stond er al. Klikbare tegels hadden geen zichtbaar teken, nu een › |

### Wat er in de tegel kwam
- **Basis:** de stippellijn is dezelfde periode ervoor, op dezelfde schaal. In de deltaregel staat een klein stippellijntje vóór *vs. vorige 30 d*, zodat de legenda in de tegel zelf zit.
- **Wat veranderde:** de regel wordt berekend en de grootste verschuiving staat eerst.
  - **Home-omzet:** webshop tegenover B2B, in euro's.
  - **Home-orders:** webshop tegenover B2B, in aantallen.
  - **Webshop-omzet:** aantal orders tegenover gemiddelde orderwaarde. Die twee hebben een andere eenheid, dus de rangorde loopt op het procentuele verschil.
  - Voorbeeld met echte Shopify-data (30 dagen): *Vooral aantal orders 4, was 15 · gem. orderwaarde € 29,43, was € 43,93*.
- **Niets dubbel:** de oude subregel *webshop € … · B2B € …* is vervangen door de nieuwe regel, niet aangevuld.
- **Uitlijning:** KPI-labels staan op één regel met afkapping, en twee te lange labels zijn ingekort. Zo staan de cijfers in een rij weer op gelijke hoogte.

## Bronnen
- uiux.build, *7 Dashboard Design Rules*, Instagram, september 2026: https://www.instagram.com/p/DdtcfHOt20t/ (door Instagram gemarkeerd als AI-content), met de reacties onder de post over vergelijkingsbasis en volgende stap.
- Prototype v2.6: https://claude.ai/artifact/XPnRocf1ZcG1J7pb82QBHy · handboek: https://claude.ai/artifact/AEzJLbcMsYRYRbT1SFNik1
- Eerder onderzoek: [[2026-10-02-dashboard-apps-patronen]] (de Stripe-tegel met delta, sparkline en bron), [[2026-09-26-dashboard-ux-onderzoek]].

## Aantekeningen
