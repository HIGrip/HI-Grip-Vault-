---
id: 2026-11-03-snelheid-werkthema-02
titel: "Snelheid higrip.nl: optimalisaties in WERKTHEMA 02"
kerntitel: "WERKTHEMA 02: laden 1,8 tot 1,9x sneller, homepage-LCP 1,6x, eigen winkelwagen"
datum: 2026-11-03
bron: los
routine: ""
categorie: Techniek
status: nieuw
prioriteit: P1
samenvatting: "In een kopie van live (WERKTHEMA 02, 203928076615) laden apps pas na de eerste interactie, laden productmodules alleen waar ze nodig zijn en worden secties onder de vouw pas opgebouwd als je ernaartoe scrolt. Gemeten tegen live: blokkeertijd (TBT) 4,6 tot 4,9 keer lager, rekentijd 2 tot 3 keer lager, 30 tot 40% minder bytes en verzoeken; met echte vertraging laden home en productpagina 1,5 tot 1,7 keer sneller (load 14,6 → 9,4 s en 12,2 → 7,1 s). De LCP van de homepage daalt maar licht (7,8 → 7,1 s): die hangt aan bandbreedte en aan app-scripts buiten het thema, dus 3x sneller laden kan alleen met besluiten over apps. Niets live gezet."
gerelateerd: [2026-11-03-snelheid-nulmeting-alle-paginas, 2026-10-30-snelheid-code-audit-homepage, 2026-10-29-ads-funnel-en-snelheid-productpagina]
vervangt: []
bronbestand: ""
deadline: ""
---
# Snelheid higrip.nl: optimalisaties in WERKTHEMA 02

> Map: [[Waar staat wat]]

## In het kort
Opdracht: maak de site drie keer zo snel, in een kopie van live met "02" achter de naam. Live ("WERKTHEMA", `203461034311`) is op 3-11 gedupliceerd naar **WERKTHEMA 02** (`203928076615`, unpublished; lokale kopie met git in `C:\Users\Test\Werk\theme-snelheid\werkthema-02`). Alle wijzigingen staan alleen daar.

De nulmeting ([[2026-11-03-snelheid-nulmeting-alle-paginas]]) liet zien dat de last vooral in JavaScript zit die op elke pagina meekomt. Daar is op ingegrepen. Resultaat: de hoeveelheid rekenwerk op de telefoon (wat een pagina traag en hakkerig maakt) is 3 tot 5 keer lager. Bytes en verzoeken dalen 30 tot 40%. Wat níet beter werd: de gesimuleerde LCP van de homepage in Lighthouse. In de echte (niet-gesimuleerde) tijdlijn van dezelfde meting verschijnen de eerste tekst en de hero juist eerder dan op live; het verschil komt door hoe Lighthouse de laadtijd terugrekent (zie Bevindingen 3).

## Kerncijfers
- **4,6-4,9×** · lagere Total Blocking Time (home 5454 → 1110 ms, product 3829 → 831 ms, mediaan lab)
- **2-3×** · minder rekentijd op de hoofdthread (home 23,8 → 8,2 s, product 14,2 → 6,8 s)
- **34 → 5,5 s** · tot het load-event op de productpagina (4× CPU-vertraging)
- **335 → 207** · verzoeken op de homepage; 2755 → 1874 KB
- **14,6 → 9,4 s** · load-event homepage met echte vertraging (product 12,2 → 7,1 s); LCP home 7,8 → 7,1 s

## Acties
- [ ] P1 · Besluit: WERKTHEMA 02 live zetten, na een eigen klikronde op de preview (winkelwagen, toevoegen, zoeken, account, maten kiezen, cookiebanner)
- [ ] P2 · Na een Horizon-update opnieuw doorvoeren: predictive-search.js (lege zoekstaat bij openen) en scripts.liquid (modules op aanvraag) zijn kernbestanden
- [ ] P2 · Na livegang velddata vergelijken (Shopify web_performance, 30 dagen voor en na) op LCP en INP per paginatype
- [ ] P1 · Controle: nieuwe winkelwagen in WERKTHEMA 02 (eigen Horizon-drawer in Section Store-stijl) naast de oude leggen op telefoon en desktop, inclusief kortingscode en deel-link HI30
- [ ] P2 · Live hi-shop.js: kleurknoppen op /pages/collection werken niet door een syntaxfout; opgelost in WERKTHEMA 02 (komt mee bij livegang)
- [ ] P2 · Section Store-app niet verwijderen na livegang: de pakketkorting draait via die app, ook al gebruikt WERKTHEMA 02 haar winkelwagen niet

## Bevindingen
### 1. Wat er in WERKTHEMA 02 is veranderd
| Onderdeel | Wat | Bestand |
|---|---|---|
| Apps na interactie | EcomSend en de Section Store-winkelwagen laden pas bij de eerste tik, toets of scroll (of na 10 s). Klik je meteen op het winkelmandje, dan wacht de klik tot de winkelwagen er is en gaat dan door. Getest: winkelwagen opent bij de eerste klik, toevoegen werkt, geen fouten. | `snippets/hi-defer-apps.liquid` (nieuw) |
| Productmodules op aanvraag | 21 modules (maatkiezer, galerij, aantal, enz.) laden alleen als het element op de pagina staat; de rest na de eerste interactie of na 8 s. | `snippets/scripts.liquid` |
| Shop-login uit de header | `<shopify-account>` (~270 KB, ~1 s rekentijd) vervangen door een gewone link naar het account. | `snippets/header-actions.liquid`, `sections/header.liquid` |
| Secties onder de vouw | `content-visibility: auto` op homepage-secties (behalve hero en FAQ), productpagina-secties onder de hoofdsectie en footer. | `assets/hi-perf.css` (nieuw) |
| Homepage-CSS en -JS één keer | hp-home.css/js en het motion-script stonden in elke hp-sectie; nu één keer in de head. Quick-add-modal niet op de homepage. | `layout/theme.liquid`, `snippets/hp-base.liquid` |
| Geforceerde layout | Header-hoogte via ResizeObserver in plaats van meten tijdens het parsen. | `layout/theme.liquid` |
| Zoeken | Lege zoekstaat (recent + producten) laadt bij openen in plaats van bij elke pagina. Getest. | `assets/predictive-search.js`, `snippets/search-modal.liquid` |
| Betaaliconen | Inline SVG's vervangen door lazy afbeeldingen van Shopify (38×24). | `blocks/payment-icons.liquid` |
| Animatie | Duel-animatie op de homepage zonder z-index (compositor-only), visueel gelijk. | `assets/hp-home.css` |
| Hero | `decoding="sync"` op het prioriteitsbeeld; mobiele bron krijgt ook 540w en 720w (telefoon kiest 720w, 111 KB in plaats van 155 KB). | `snippets/hp-img.liquid`, `sections/hp-01-hero.liquid` |

Geprobeerd en teruggedraaid: Google Fonts niet-blokkerend laden op de homepage; gaf geen LCP-winst.

### 2. Metingen
Lighthouse 12.8.2 mobiel, `www.higrip.nl?preview_theme_id=…`, live en WERKTHEMA 02 om en om, Shopify-previewbalk geblokkeerd, mediaan van 3 runs:

| | Live home | 02 home | Live product | 02 product |
|---|---|---|---|---|
| TBT | 5454 ms | 1110 ms | 3829 ms | 831 ms |
| Rekentijd | 23,8 s | 8,2 s | 14,2 s | 6,8 s |
| KB | 2755 | 1874 | 2265 | 1404 |
| Verzoeken | 335 | 207 | - | - |
| Speed Index | 5,8 s | 3,6 s | - | - |
| LCP (gesimuleerd) | 3,8 s | 4,8 s | 3,6 s | 3,0 s |
| Score | - | - | 54 | 72 |

Controle met hetzelfde thema-ID (basisbestanden tijdelijk teruggezet, dan de optimalisaties) gaf hetzelfde beeld: rekentijd home 15 tot 17 s → 5,8 tot 11 s. Met Puppeteer (zonder Lighthouse): taaktijd home 11,1 → 4,5 s, product 10,6 → 3,3 s.

### 3. Waarom de homepage-LCP in Lighthouse niet daalt
In de echte tijdlijn van een run: eerste tekst 0,78 s en hero 1,21 s op WERKTHEMA 02, tegen 1,37 s voor beide op de basis; DOMContentLoaded 1,8 tegen 2,6 s, load 2,1 tegen 3,4 s. Alles is dus eerder. Lighthouse rekent de LCP terug met een model dat strenger wordt als de hero in een later frame verschijnt dan de eerste tekst. Op live komen tekst en hero in hetzelfde frame. Het beeld is binnen op ~0,55 s; waarschijnlijk vertraagt de hero-animatie (zoom/rise via hp-home.js) de eerste weergave. Zie actie P3.

### 4. Echte vertraging (geen simulatie)
Puppeteer, 4× CPU, traag 4G (562 ms RTT, 1,47 Mbit/s, de waarden die Lighthouse ook gebruikt), cache uit, hetzelfde thema-ID met eerst de basisbestanden en daarna de optimalisaties, mediaan van 4 runs:

| | Basis home | 02 home | Basis product | 02 product |
|---|---|---|---|---|
| FCP | 3,1 s | 3,1 s | 3,2 s | 3,0 s |
| LCP | 7,8 s | 7,1 s | 3,5 s | 3,3 s |
| TBT | 2,2 s | 1,0 s | 1,9 s | 0,8 s |
| DOMContentLoaded | 9,7 s | 6,5 s | 8,2 s | 5,5 s |
| Load | 14,6 s | 9,4 s | 12,2 s | 7,1 s |

De hero van de homepage is gebonden aan bandbreedte: hij deelt de lijn met de HTML (~60 KB), de CSS (~80 KB), app-scripts uit content_for_header (Section Store 97 KB, Shopify-pixels 84 KB, cookiebanner 21 KB, perf-kit 26 KB) en afbeeldingen onder de vouw (~325 KB). Test met die afbeeldingen geblokkeerd: LCP 5,9 s. Een 3x snellere LCP (2,6 s) is met deze apps niet haalbaar vanuit het thema. Live krijgt bovendien Early Hints (CSS al binnen vóór de HTML), previews niet; na livegang wint 02 daardoor ook op FCP.

### 5. Ronde 2 (4-11): apps vervangen zonder stijlverlies
Na de vraag om de visuele stijl te houden:
- **Winkelwagen:** de Section Store-drawer (97 KB script plus CSS op elke pagina) is vervangen door de eigen drawer van Horizon, opgemaakt zoals de oude: oranje kop met icoon, verzendbalk tot €35 met "Nog €X voor GRATIS VERZENDING", van-prijs per regel, open kortingscodeveld met oranje knop, regel Korting, Subtotaal met doorgestreepte van-prijs, oranje knop "Checkout • totaal", betaaliconen en de drie badges, lege staat met "Populair bij sporters". Gaat vanzelf open na toevoegen. Getest: aantal wijzigen, verwijderen, lege staat, 5-pack toevoegen (€69,95, gelijk aan de productpagina), geen consolefouten. Bestanden: `snippets/hi-cart-extras.liquid` (nieuw), `assets/hi-cart.css` (nieuw), `snippets/cart-drawer.liquid`, `snippets/cart-summary.liquid`, `snippets/cart-products.liquid`.
- **Prijzen ongewijzigd:** de pack-korting is een Shopify-kortingsfunctie op de regel-eigenschap `__section_store_bundle` en staat al in `/cart.js` zonder de drawer (3 paar €53,85 → €44,95). De Section Store-bundelkeuze op de productpagina blijft.
- **Translation Lab:** taal- en landkiezer stonden allebei uit, maar de embed laadde wel scripts. Embed uit in WERKTHEMA 02.
- **Fonts:** Poppins op de homepage via Shopify `font_face` (eigen domein) in plaats van Google Fonts; cursief 900 (hero) met preload.
- **Hero mobiel:** de liggende foto (1264×848) staat in een staand vak; Shopify snijdt nu de zichtbare strook uit (`crop: 'region'`, x-positie uit de sectie-instelling). Even zwaar, maar ruim twee keer zoveel echte pixels in beeld (was zichtbaar zacht, ook op live).
- **Beeldbreedtes:** fotoraster en over-ons krijgen 375/550/750 erbij; rugby 101 → 76 KB op mobiel.

Meting na ronde 2, echte vertraging, zelfde thema, mediaan van 4:

| | Basis | Nu | Factor |
|---|---|---|---|
| Home load | 15,1 s | 8,0 s | 1,9× |
| Product load | 11,7 s | 6,5 s | 1,8× |
| Home TBT | 2,0 s | 0,86 s | 2,4× |
| Product TBT | 1,5 s | 0,67 s | 2,3× |
| Home DOMContentLoaded | 9,7 s | 6,3 s | 1,5× |
| Home LCP | 8,3 s | 6,1 s | 1,35× |
| Product LCP | 3,5 s | 3,3 s | 1,07× |

Waarom LCP niet 3× sneller wordt: op traag 4G (1,47 Mbit/s) bepalen bytes de tijd. Vóór de hero moeten de HTML (~56 KB), de render-blokkerende CSS (Horizons gebundelde `compiled_assets/styles.css` 51 KB, base.css, hp-home.css) en de hero zelf (~120 KB) binnen zijn, naast Shopify-scripts die het thema niet kan sturen (web-pixels 84 KB, perf-kit 27 KB, webmcp 25 KB, cookiebanner 21 KB). Ongebruikte secties en blokken weghalen scheelt maar ~7 KB van die CSS.

### 6. Ronde 3 (4-11): foto's onder de hero later laden
Op de homepage laden alle beelden onder de hero pas als de hero binnen is, bij de eerste scroll of tik, of na 4 s. Zonder JavaScript staat er een gewone afbeelding in een noscript-blok, dus Google en bezoekers zonder JavaScript zien alles. In de theme-editor blijft alles direct laden. Getest op telefoonbreedte: alle 30 beelden laden, geen kapotte beelden, geen "Liquid error".

Echte vertraging, mediaan van 4 runs, hetzelfde thema-ID (basis2 tegen opt4):

| | Basis | Nu | Factor |
|---|---|---|---|
| Homepage LCP | 8,3 s | 5,1 s | 1,6x |
| Homepage geladen | 15,1 s | 7,8 s | 1,9x |
| Homepage DOM klaar | 9,7 s | 5,6 s | 1,8x |
| Productpagina geladen | 11,7 s | 6,7 s | 1,7x |
| Homepage TBT | 2,0 s | 1,0 s | 2,0x |

Het doel van 3x sneller is met echte vertraging niet gehaald. FCP blijft rond 3,1 s: dat bepalen de verbinding, de HTML en de vaste Horizon-CSS (51 KB), niet de apps of de foto's.

Bovengrens: dezelfde homepage met álle JavaScript geblokkeerd (geen thema, geen apps, geen Shopify-scripts) haalt LCP 3,8 s en geladen 6,1 s (mediaan van 3). Dat is 2,2x en 2,5x tegen de basis. Zonder JavaScript én zonder webfonts (alleen HTML, CSS en de hero): LCP 3,4 s (2,4x), FCP 2,85 s. De hero zelf is al 509 x 848 px WebP (116 KB). Laadtijd: een pagina zonder één themabestand (geen thema-CSS, thema-JS, fonts of app-embeds), alleen met de scripts die Shopify zelf altijd toevoegt, laadt de homepage in 5,2 s (2,9x) en de productpagina in 7,0 s (1,7x). 3x op LCP en op laadtijd kan met deze verbinding dus niet vanuit het thema; daarvoor moeten de HTML, de Horizon-CSS of de hero zelf kleiner, of moet het thema vervangen worden.

### 7. Ronde 4 (4-11): klaar voor livegang
- Winkelwagen: de doorgestreepte prijs van een pakket was 5 x de adviesprijs (5-pack €99,75), terwijl de pakketkeuze op de productpagina €89,75 toont. Nu rekent de winkelwagen bij pakketkorting met losse prijs x aantal, en anders met de adviesprijs. Getest: 3-pack €53,85 naar €44,95 en 5-pack €89,75 naar €69,95, gelijk aan de productpagina.
- Shoplinks: de lege winkelwagen, homepage-knoppen, de FAQ en de vergelijkpagina gingen naar /collections/gripsokken (Horizon-collectiepagina). Het menu gebruikt /pages/collection (de eigen shoppagina); alle links wijzen daar nu naar.
- Shoppagina: hi-shop.js had een syntaxfout (`img.hi-s-alt=` door een zoek-en-vervang), waardoor de kleurknoppen zwart/wit niets deden. Die fout staat ook in live.
- Foutscan op 10 pagina's, telefoon en desktop: geen JavaScript-fouten, geen Liquid-fouten, geen kapotte beelden, geen horizontale scroll. Toevoegen met pakketkeuze opent de winkelwagen met de juiste bedragen.
- Blijft: de cookiebanner van Shopify verschuift op telefoon soms de aankondigingsbalk (CLS tot 0,08, ook live).

### 8. Ronde 5 (4-11): na eigen klikronde
- Winkelwagen: snelle betaalknoppen (Apple Pay, Google Pay, PayPal) weer onder de afrekenknop. Een kortingscode staat nu als eigen regel ("Code TTL10") onder "Korting", en de onderste regel heet "Totaal"; eerder stond "Subtotaal" er twee keer.
- Taalkeuze: de schakelaar van Translation Lab stond in live al uit; de taalkeuze is die van Horizon zelf (menu en header). Getest in 02: English opent /en met Engelse teksten.
- Account: het icoon gaat naar /account; Shopify stuurt wie niet is ingelogd door naar de inlogpagina.
- Homepage-build (`06_Website_Agent/Homepage-prototype/shopify`): de 02-wijzigingen staan nu ook in de bron (hp-img, hero-uitsnede, beeldbreedtes, shoplinks, duel-animatie). Een nieuwe build geeft dezelfde bestanden als 02. De brandvideo-poster laadt nu ook in 02 pas bij naderen, zoals de bron al deed.
- Kortingscodes: TTL10 combineerde niet met productkortingen (pakketkorting); dat is een Shopify-instelling, geen themafout.

### 9. Wat overblijft
Na de ingrepen zit het meeste rekenwerk in Shopify zelf (pixels/web-pixels-manager 0,5 tot 0,7 s, perf-kit ~0,2 s). Dat valt niet vanuit het thema te sturen.

## Wat niet lukte
- Meetruis: previewthema's krijgen geen Early Hints en soms de Shopify-previewbalk (~585 KB); er liep een tijdlang een tweede meetsessie tegelijk. Opgevangen door om en om te meten, de balk te blokkeren en een controle met hetzelfde thema-ID.
- `shopify theme check` liep vast onder CPU-belasting; in de gerenderde pagina's stond geen "Liquid error".
- Dashboard publiceren: zie commit; het dashboard is eigendom van info@.

## Bronnen
- Lighthouse-uitvoer en meetscripts: lokale scratchpad van deze sessie (niet in de vault)
- Thema-git: `C:\Users\Test\Werk\theme-snelheid\werkthema-02` (commits e874c49 basis, 44fa5f2 optimalisaties, d332908 hero, daarna srcset 540w/720w)
- Preview: https://www.higrip.nl/?preview_theme_id=203928076615
