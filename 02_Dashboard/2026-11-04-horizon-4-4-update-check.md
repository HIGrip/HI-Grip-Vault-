---
id: 2026-11-04-horizon-4-4-update-check
titel: "Horizon-update 4.3.0 naar 4.4.0: controle van de bijgewerkte kopie"
kerntitel: "Horizon 4.4.0: eigen code blijft, maar 12 paginatemplates en de A/B-productpagina's breken"
datum: 2026-11-04
bron: los
routine: ""
categorie: Techniek
status: verwerkt
prioriteit: P1
samenvatting: "De Shopify-update naar Horizon 4.4.0 (kopie 203954520391) houdt alle eigen aanpassingen van WERKTHEMA 02 intact, maar voegt aan 12 paginatemplates een standaard paginatitel toe; op de twee A/B-pagina's (gripsokken-2-0 en gripsokken-2-1) vervangt die zelfs de productsectie, waardoor product, pakketten en de knop In winkelwagen verdwijnen. Daarnaast breekt op desktop de producttitel midden in een woord. Snelheid, winkelwagen, betaalknoppen en fonts zijn gelijk aan live. Niet live zetten voordat de templates zijn teruggezet; niets gewijzigd aan live."
gerelateerd: [2026-11-03-snelheid-werkthema-02]
vervangt: []
bronbestand: ""
deadline: ""
---
# Horizon-update 4.3.0 naar 4.4.0: controle van de bijgewerkte kopie

> Map: [[Waar staat wat]]

## In het kort
Shopify maakte de kopie "Bijgewerkte kopie van Live website 04-11-2026" (`203954520391`, Horizon 4.4.0). Ik heb die vergeleken met live (`203928076615`, WERKTHEMA 02, Horizon 4.3.0). Daarvoor heb ik de code vergeleken (lokale kopie met git in `C:\Users\Test\Werk\theme-snelheid\update-04`) en in de preview getest. Tests: foutscan op 10 pagina's (telefoon en desktop), winkelwagenflow, snelheid met echte vertraging, fonts en afbeeldingsmaten, en een vergelijking van de paginatemplates.

Conclusie: de update is bruikbaar, maar **niet zoals hij nu is**. Eerst moeten de 12 paginatemplates terug en moet de titelafbreking op de productpagina opgelost worden.

## Kerncijfers
- **12** · paginatemplates met een extra paginatitel (tweede H1)
- **5753 → 3912 px** · hoogte A/B-pagina gripsokken-2-0, productsectie weg
- **823 → 729 px** · breedte productfoto op desktop-PDP
- **0** · JavaScript- of Liquid-fouten op 10 pagina's, telefoon en desktop

## Acties
- [x] P1 · Update-kopie 203954520391: 12 paginatemplates (page.*.json met nieuwe main-page-sectie, incl. ab-a en ab-b) terugzetten vanuit WERKTHEMA 02, alleen die bestanden pushen, daarna opnieuw testen
- [x] P1 · Update-kopie: producttitel op desktop-PDP breekt midden in een woord (PERFORMANC/E); woordafbreking of titelgrootte herstellen
- [x] P2 · Update-kopie: kleinere productfoto op desktop-PDP (823 naar 729 px) beoordelen; nieuwe img-breedteregel of galerijlogica van 4.4.0 terugdraaien als het slechter oogt
- [ ] P2 · Besluit: update-kopie live zetten nadat de P1-punten zijn opgelost en getest
- [ ] P3 · Instelling Shop Pay-betaalopties (voorheen installments) in de nieuwe themainstellingen bekijken

## Kansen
- [K] Checkout wacht in 4.4.0 tot een aantalwijziging in de winkelwagen is opgeslagen, wat een stille checkoutfout op iOS Safari voorkomt · impact: middel · bewijs: 2026-11-04-horizon-4-4-update-check · stap: na het herstellen van de templates de update live zetten

## Bevindingen
### Wat goed blijft
Alle eigen aanpassingen zijn bewaard gebleven, zowel die van WERKTHEMA 02 als de oudere HÏ-aanpassingen:
- scripts.liquid, cart-summary en cart-drawer (pakketprijs, Korting, Code en Totaal)
- header-actions, search-modal en payment-icons
- hi-defer-apps, hi-cart.css en hp-img (foto's na de hero)
- de HÏ-regel in predictive-search
- de lazy-fix in product-media-gallery en de ResizeObserver in theme.liquid

De winkelwagenflow (3-pack toevoegen, +, totalen) geeft in beide thema's precies dezelfde bedragen. De checkoutknop en de snelle betaalknoppen staan er. Fonts en knoppen zijn op 5 pagina's computed gelijk.

### Wat stuk gaat: paginatemplates
De update zette in 12 page-templates een nieuwe sectie `"main": main-page`, met de paginatitel als H1 en daaronder de pagina-inhoud.
- **Op shop (/pages/collection), contact, de vier beleidspagina's, zakelijk, gripsokken-vergelijken, teamorder en survey:** er komt een extra titelblok van 68 tot 306 px boven de eigen opbouw. Daarmee heeft de pagina een tweede H1 (slecht voor SEO) en een dubbele kop in beeld.
- **Op ab-a en ab-b (/pages/gripsokken-2-1 en /pages/gripsokken-2-0):** de eigen sectie `hg-ab-product` is vervangen. Product, pakketten en de knop In winkelwagen zijn weg, en de pagina is ongeveer 1840 px korter. Als hier advertentieverkeer op staat, verkoopt deze pagina na livegang niets.

Oplossing: de templates uit WERKTHEMA 02 terugzetten. Ze zijn niet versiegebonden, dus dat is veilig.

### Wat anders oogt: productpagina desktop
De verdeling tussen foto en tekst is iets verschoven:

| | Fotokolom | Tekstkolom |
|---|---|---|
| Live | 893 px | 467 px |
| Update | 907 px | 453 px |

Toch rendert de productfoto kleiner: 823 naar 729 px. Waarschijnlijk komt dat door de nieuwe galerij- en hoogtelogica, of door de nieuwe basisregel `img { width: 100% }` in base.css. Doordat de tekstkolom smaller is, breekt de H1 "PERFORMANCE GRIPSOKKEN 2.0 ZWART" midden in een woord ("PERFORMANC" / "E"). De prijs en de pakketten zakken daardoor 50 px.

### Snelheid
Geen achteruitgang. De metingen zijn ruisgevoelig: 3 runs per pagina, mediaan, met echte vertraging.

| Pagina | Meting | Live | Update |
|---|---|---|---|
| Home | LCP | 5,29 s | 5,73 s |
| Home | Load | 9,24 s | 8,30 s |
| PDP | LCP | 4,53 s | 3,61 s |
| PDP | Load | 9,68 s | 7,93 s |

### Overige wijzigingen in 4.4.0
- **Header:** de menustijl wordt vóór de eerste weergave gezet, dus minder flitsen op desktop.
- **Predictive search:** vangt niet-ondersteunde talen af (HTTP 417).
- **Winkelwagen:** checkout wacht op een openstaande aantalwijziging (`holdCheckoutForQuantitySave`).
- **Belastingtekst:** ondersteunt checkout-kosten.
- **Instellingen:** "installments" heet nu "Shop Pay-betaalopties".
- **Overige fixes:**
  - breedte van de e-mailinschrijving;
  - geneste kolommen in het megamenu;
  - sticky productmedia onder een sticky header;
  - CSS-variabelen voor het gewicht van knopfonts.
- **Afbeelding bij collectielinks:** link-featured-image valt niet meer terug op een productfoto als een collectielink geen eigen afbeelding heeft. Klein risico.
- **Talen en instellingen:** 26 nieuwe talen. In settings_data is alleen de volgorde van sleutels gewijzigd.
- **Om in de gaten te houden:** predictive-search.js en scripts.liquid blijven kernbestanden met eigen code. Controleer ze bij elke volgende update.

### Hersteld (4-11)
Op opdracht van de gebruiker is de kopie 203954520391 (unpublished, gecontroleerd met `theme list`) hersteld. Alleen deze 13 bestanden zijn gepusht:
- **12 paginatemplates:** teruggezet uit WERKTHEMA 02.
  - page.sport-rugby verschilde alleen in opmaak en is niet aangeraakt.
- **snippets/product-information-content.liquid:** de productgrid is terug van `minmax(0, 2fr) minmax(0, 1fr)` naar `2fr 1fr`, zoals live. De titel breekt daardoor niet meer midden in een woord.
- **Kleinere productfoto:** dit is bewust zo gelaten. In 4.4.0 trekt de foto de rij thumbnails af van de schermhoogte, zodat foto en thumbnails samen in beeld passen. Dat is een verbetering, geen fout.

Hertest na het herstel:
- **10 pagina's:** H1, aantal secties, hoogte en de knop In winkelwagen zijn gelijk aan live.
- **A/B-pagina's:** de productsectie is terug.
- **Productgrid:** gelijk aan live (893/467 px).
- **Foutscan:** geen fouten op 10 pagina's, op telefoon en desktop.

Lokale git staat in `update-04`. Let op: `product-information-content.liquid` is nu een kernbestand met eigen code; controleer het bij de volgende update.

### Tweede controle na herstel (4-11)
Na het herstel is de kopie opnieuw naast live gelegd, op telefoon en desktop.
- **11 pagina's:** de secties zijn per pagina even hoog en laden dezelfde foto's.
- **Klikgedrag is gelijk aan live**, zonder JS-fouten:
  - het menu;
  - de taalwissel nl/en, inclusief /en;
  - de zoekfunctie, met 3 resultaten;
  - de accountknop;
  - In winkelwagen;
  - de winkelwagenlade, met de knop Afrekenen en snelle betaalknoppen.
- **Enige zichtbare verschil:** de kleinere productfoto op de desktop-PDP. Daardoor staat het blok eronder een paar pixels anders.
- **Niet getest:** een echte bestelling afronden en de thema-editor.

## Bronnen
- Preview-tests met puppeteer op www.higrip.nl met `?preview_theme_id=` voor 203928076615 en 203954520391
- Codevergelijking: `C:\Users\Test\Werk\theme-snelheid\update-04` (git) tegen `C:\Users\Test\Werk\theme-snelheid\werkthema-02`
- [[2026-11-03-snelheid-werkthema-02]]

## Aantekeningen
