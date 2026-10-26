---
id: 2026-10-15-growth-radar-cro
titel: "Growth Radar — CRO (geen kwalificerende vondst)"
kerntitel: "Geen nieuwe CRO-vondst deze donderdag; cijfers zijn herhaling of te zwak gesourced"
datum: 2026-10-15
bron: routine
routine: growth-radar
categorie: CRO
status: nieuw
prioriteit: P3
samenvatting: "Geen van de vandaag gevonden berichten over productpagina, winkelwagen, checkout, prijsweergave, trust of mobiel haalde de drempel van een primaire bron, nieuwheid of een concrete koppeling aan higrip.nl. De enige primair gesourcete Shopify-wijziging (2026-10 release notes, nu stable) raakt alleen de Customer Account API en checkout-UI-extensiemetafields — higrip.nl gebruikt beide niet."
gerelateerd: [2026-10-01-growth-radar-cro, 2026-10-08-growth-radar-cro, 2026-10-13-homepage-redesign, 2026-10-14-homepage-herontwerp-vanaf-leeg-canvas-richting-b-doorgaan, 2026-10-22-growth-radar-cro]
vervangt: []
bronbestand: ""
deadline: ""
---
# Growth Radar — CRO (geen kwalificerende vondst)

> Map: [[Waar staat wat]]

## In het kort
Geen relevante ontwikkelingen vandaag binnen de dagfocus productpagina, winkelwagen, checkout, prijsweergave, trust, mobiel en A/B-resultaten uit de markt.

## Bevindingen
### Gecontroleerd, niet opgenomen
- **Shopify API-release 2026-10 (shopify.dev, primaire bron, nu "Latest stable"):** verwijdert het al verouderde veld `Customer.lastIncompleteCheckout` plus de onbereikbare `Checkout`-subboom (sinds 6 juli 2026) en verplicht een `owner_type` op metafield-declaraties in checkout-UI-extensies (sinds 8 okt 2026). Beide gecontroleerd tegen higrip.nl: de winkel gebruikt geen Customer Account API-checkout-queries en geen eigen checkout-UI-extensie met metafields — geen concrete koppeling, dus niet opgenomen. Niets gevonden over Additional Scripts, trackingscripts of carrier-verzendtarieven in deze release.
- **Baymard-cijfers (cart abandonment ~70,19–70,22%, 18% haakt af op checkout-UX, gemiddeld 23,48 formulierelementen tegen een ideaal van 12):** het abandonment-cijfer staat al in het geheugen (basislijn §4, 17 sep; bevestigd 17 sep). De 18%- en 23,48-cijfers komen alleen via secundaire 2026-blogs die naar Baymard verwijzen; geen vindbare eigen Baymard-publicatie met die exacte getallen voor 2026 — op bronkwaliteit afgevallen.
- **Trust badges en checkout-vertrouwen (diverse 2026-vendorblogs):** cijfers over afhaakpercentages door onvertrouwen (17-25%) verwijzen naar Baymard-zegel-onderzoek uit 2013-2021 — ouder dan de 2026-framing suggereert, dus geen nieuwheid. Een losse claim over 15-30% conversiewinst bij zegels vlak bij het betaalveld is niet tot een primaire Baymard-bron te herleiden — genegeerd per de contentfarm-regel, zelfde patroon als 8 okt.
- **Mobiel-desktop conversiekloof (diverse 2026-vendorblogs):** bronnen spreken elkaar tegen (sommige zien de kloof van 3-4× naar 2-3× krimpen, andere blogs herhalen cijfers uit 2024 onder een 2026-label) en leveren geen cijfer dat het al bekende, Shopify-gesourcete punt (38%→42%, basislijn 17 sep) aanvult of tegenspreekt.
- **Prijsweergave-A/B-tests (anchoring, decoy-tier, aflopende volgorde):** alleen testideeën en methodologie-advies gevonden, geen gepubliceerd test met een gemeten resultaat voor 2026 — voldoet niet aan "eigen data" of "primaire bron".

## Wat niet lukte
Geen toegangsproblemen. Alle kandidaten vielen af op bronkwaliteit (niet-primair, niet-dateerbaar, tegenstrijdig) of op het ontbreken van een concrete koppeling aan higrip.nl, niet op onvermogen om te zoeken.

## Bronnen
- [Shopify developer changelog — 2026-10 release notes](https://shopify.dev/changelog/release-notes/2026-10)

## Aantekeningen
