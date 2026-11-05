---
id: 2026-11-05-winkelwagen-section-store-weer-actief
titel: "Winkelwagen live: Section Store staat weer aan, naast de eigen lade"
kerntitel: "De winkelwagenlade is weer Section Store: 99 KB en 1,1 s rekenwerk op elke pagina"
datum: 2026-11-05
bron: los
routine: ""
categorie: Techniek
status: nieuw
prioriteit: P1
samenvatting: "De lade op live (thema 203954520391) is weer de Section Store-winkelwagen, nu zwart met volt. In het thema stond hij op 4-11 nog uit, hij is daarna weer aangezet. Het script laadt op elke pagina zonder te wachten op interactie: 99 KB en ~1,1 s rekentijd op een vertraagde telefoon, bovenop de eigen lade die ook nog in de pagina staat. De lade opent wel snel (129 ms). Stijl: Engelse teksten (Subtotal, Checkout) en een afrekenknop gevuld met volt."
gerelateerd: [2026-11-03-snelheid-werkthema-02, 2026-11-03-snelheid-nulmeting-alle-paginas]
vervangt: []
bronbestand: ""
deadline: ""
---
# Winkelwagen live: Section Store staat weer aan, naast de eigen lade

> Map: [[Waar staat wat]]

## In het kort
De lade die opent via het winkelmandje is op live (`203954520391`, "Bijgewerkte kopie van Live website 04-11-2026") weer `section-store--cart-block`. De kopie uit de git-map `update-04` van 4-11 heeft de app-embed `block-cart` nog op `disabled: true`, dus hij is daarna aangezet (door wie is niet te zien). De nieuwe opmaak staat in de app-instellingen: zwart met volt, eigen CSS van 2.601 tekens. De pagina `/cart` is wel het thema zelf.

Daarmee is de winkelwagenwinst uit [[2026-11-03-snelheid-werkthema-02]] weer weg. Het script wacht niet op interactie en de eigen themalade staat er nog steeds, dus elke pagina draagt nu twee complete winkelwagens.

## Kerncijfers
- **99 KB** · block-cart.js gecomprimeerd (424 KB uitgepakt), plus 53 KB CSS in de lade
- **~1,1 s** · rekentijd van dat script (1,10 / 1,11 / 1,22 s, Lighthouse mobiel, 3 runs)
- **1,1-1,9 s** · moment in de laadtijd dat het script start, zonder interactie
- **129 ms** · lade open na klik (één meting, snelle laptop)

## Acties
- [ ] P1 · Besluit: Section Store-lade houden of terug naar de eigen themalade in deze stijl; bepaalt of block-cart op elke pagina blijft laden
- [ ] P2 · Blijft Section Store: "Subtotal" en "Checkout • bedrag" in de app vertalen naar Nederlands
- [ ] P2 · Blijft Section Store: afrekenknop, Toepassen-knop en lege-staat-knop van volt naar wit met zwarte tekst (CTA nooit gevuld met accentkleur)
- [ ] P2 · Blijft Section Store: script laden na eerste interactie, en bij laden de eigen themalade niet meer in de HTML zetten
- [ ] P3 · Pagina /cart: kop "Cart" naar Nederlands; prijs staat dubbel in de regel (onder de titel en rechts)
- [ ] P3 · Cookiebanner: knoppen Accepteren en Afwijzen zijn volt gevuld

## Bevindingen
### 1. Wat er nu staat
- Lade: Section Store, script `section-factory-462/assets/block-cart.js`, element in shadow DOM met 148 knopen.
- In de lade aan: verzendbalk tot €35, kortingscode, korting, subtotaal, betaaliconen, drie vertrouwensregels. Uit: upsell, timer, notitie.
- Daarnaast staat de themalade `THEME-DRAWER#cart-drawer` in de pagina (47,6 KB HTML). Het mandje is bedoeld voor die lade; Section Store vangt de klik af (`intercept_cart_links`).
- `Shopify.theme`: `203954520391`, rol `main`.

### 2. Stijl
Klopt: zwart, Poppins, pill-knoppen, volt als accent in kop en verzendbalk. Wijkt af:
- Afrekenknop, Toepassen en de lege-staat-knop zijn gevuld met volt `#ccff00`.
- Teksten "Subtotal" en "Checkout • €17,95" staan in het Engels. De rest is Nederlands.
- Op `/cart` staat de kop "Cart".

### 3. Snelheid
Live productpagina 2.0 zwart, Lighthouse 12.8.2 mobiel, om en om met en zonder block-cart.js.

| | Met (3 runs) | Zonder (2 runs) |
|---|---|---|
| JavaScript | 433 KB | 340 KB |
| Score | 46 | 48 |
| LCP | 4,7 s | 3,4 s |
| TBT | 3.270 ms | 5.869 ms |

De totalen zijn niet bruikbaar: de rekentijd per run liep uiteen van 11 tot 23 s, en één run zonder het script faalde (`CHROME_INTERSTITIAL_ERROR`). De hogere TBT zonder het script is dus geen bewijs dat het script helpt. Bruikbaar zijn de directe cijfers: bytes en rekentijd van het script zelf, die in alle runs vrijwel gelijk zijn. EcomSend laadt in deze runs niet, die wacht dus wel op interactie; block-cart niet.

## Wat niet lukte
- `shopify theme list` bleef hangen; het thema-ID komt uit `Shopify.theme` op de live pagina.
- Kortingscode, lege lade en desktop zijn niet getest. De eigen lade is niet naast deze getimed.
- Openen is één meting op de laptop, zonder vertraging.

## Bronnen
- Live www.higrip.nl op 5 november 2026, testartikel toegevoegd en weer verwijderd
- `theme-snelheid/update-04/config/settings_data.json`, regel 138-139

## Aantekeningen
