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
samenvatting: "Update 6-11: op opdracht staat de eigen lade live en is block-cart uit; 3-pack en kortingscode live getest. Oorspronkelijke bevinding: de lade op live (thema 203954520391) is weer de Section Store-winkelwagen, nu zwart met volt. In het thema stond hij op 4-11 nog uit, hij is daarna weer aangezet. Het script laadt op elke pagina zonder te wachten op interactie: 99 KB en ~1,1 s rekentijd op een vertraagde telefoon, bovenop de eigen lade die ook nog in de pagina staat. De lade opent wel snel (129 ms). Stijl: Engelse teksten (Subtotal, Checkout) en een afrekenknop gevuld met volt."
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
- [ ] P1 · Eigen lade staat sinds 6-11 live: eerste toevoeging aan een lege wagen op een echte telefoon nakijken (duur overgang "leeg" naar gevuld)
- [ ] P3 · Codes die niet samengaan met de pakketkorting (zoals TENNIS20) vervangen die korting; op een 5-pack zou 20% op €89,75 uitkomen op €71,80, duurder dan de pakketprijs van €69,95 (berekend, niet getest)
- [ ] P2 · Besluit: knoppen in de lade volt laten of naar wit op zwart (merkregel CTA); één variabele in hi-cart.css
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

### 4. Bouw in het werkthema (niet live)
In werkthema `204029296967` (lokale git-kopie: map `theme-snelheid/werkthema-0511`) staat de eigen lade nu in dezelfde zwart-met-volt stijl, zonder Section Store-script.
- Gewijzigd: `assets/hi-cart.css`, `snippets/hi-cart-extras.liquid` (vet in de verzendbalk), `snippets/cart-summary.liquid` ("Afrekenen" in plaats van "Checkout").
- De knopkleur staat op één plek: `--hi-cart-cta-bg` en `--hi-cart-cta-text`. Volt is op verzoek overgenomen en wijkt af van de CTA-regel.
- De embed `block-cart` staat in dit thema al uit. Tussen live en werkthema is dat de enige inhoudelijke afwijking in `settings_data.json`.
- De producttitelfix van live (`product-information-content.liquid`) ontbrak in het werkthema en is overgenomen: titelkolom op 1280 px van 280 naar 350 px, gelijk aan live.
- Getest op telefoon: openen, aantal wijzigen, verzendbalk gehaald, verwijderen, lege lade, geen script van Section Store. Op desktop: openen en weergave.
- Livegang vraagt om deze bestanden plus de embed uit. De Section Store-app zelf blijft staan, want de pakketkorting draait daarop.

### 5. Test 3-pack en kortingscode (6-11, werkthema, telefoonformaat)
Bedragen uit `/cart.js`, gelijk aan wat de lade toont. Ze worden server-side berekend en hangen dus niet af van het thema.

| Winkelwagen | Korting | Code | Totaal | Afrekenknop |
|---|---|---|---|---|
| 3-pack | -€8,90 | geen | €44,95 | Afrekenen • €44,95 |
| 3-pack + TTL10 | -€8,90 | -€4,49 | €40,46 | Afrekenen • €40,46 |
| 3-pack + TENNIS20 | vervalt | -€10,77 | €43,08 | Afrekenen • €43,08 |

- De 3-pack is toegevoegd via de echte knop op de productpagina; `__section_store_bundle` staat op de regel en de korting werkt zonder het script van Section Store in de pagina.
- TTL10 gaat samen met de pakketkorting. De code staat als pil met kruisje en verwijderen werkt.
- TENNIS20 mag niet samen met andere kortingen. Shopify laat dan de pakketkorting vallen. De lade toont dat goed: de regel gaat terug naar €53,85, de rij Korting wordt -€6,00 (van adviesprijs €59,85) en de som klopt.
- Bij de eerste toevoeging aan een lege wagen stond de lade open met de tekst "leeg" tot het herladen van de inhoud klaar was. Dat is de overgang `fill-cart-drawer` van Horizon, die in een zichtbaar venster een fractie van een seconde duurt. In deze test lag het venster verborgen, dus de echte duur is niet gemeten.
- HI30 is geen geldige code: het is het voorvoegsel van deellinkcodes (`HI30-XXXXXXXX`). De eerdere conclusie "werkt niet op dit product" was fout.
- Testwagen en codes zijn verwijderd. Op live is niets gewijzigd.

### 6. Livegang (6-11, op opdracht)
Live-thema `203954520391` met `theme list --role live` bevestigd en de bestanden eerst opgehaald. Op live was niets afgeweken van de verwachte basis.
- Gepusht naar live: `assets/hi-cart.css`, `snippets/cart-summary.liquid`, `snippets/hi-cart-extras.liquid`, `config/settings_data.json`.
- In `settings_data.json` is alleen `disabled` van `block-cart` gewijzigd, op de actuele live-versie.
- Live getest op de productpagina: geen `block-cart` meer in de HTML of bij de geladen bestanden. 3-pack €44,95 met de bundel-eigenschap, met TTL10 €40,46. Testwagen en code verwijderd.
- Terugdraaien: `disabled` van `block-cart` op false zet de Section Store-lade weer aan. De app-instellingen zijn niet aangeraakt.
- De volt-knoppen staan dus live; dat besluit (P2) blijft open.

## Wat niet lukte
- Kortingscode en lade zijn in deze test via de knoppen in de pagina bediend (script), omdat muisklikken in het verborgen venster verschoven. Openen via het mandje is op 5-11 getest.
- De duur van de overgang bij de eerste toevoeging is niet gemeten.
- De eigen lade is niet getimed naast de Section Store-lade.
- Openen van de Section Store-lade is één meting op de laptop, zonder vertraging.

## Bronnen
- Live www.higrip.nl op 5 november 2026, testartikel toegevoegd en weer verwijderd
- `theme-snelheid/update-04/config/settings_data.json`, regel 138-139

## Aantekeningen
