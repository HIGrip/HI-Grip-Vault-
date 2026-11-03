---
id: 2026-11-03-snelheid-werkthema-02
titel: "Snelheid higrip.nl: optimalisaties in WERKTHEMA 02"
kerntitel: "WERKTHEMA 02 doet 3 tot 5 keer minder rekenwerk dan live; homepage-LCP in lab nog gelijk"
datum: 2026-11-03
bron: los
routine: ""
categorie: Techniek
status: nieuw
prioriteit: P1
samenvatting: "In een kopie van live (WERKTHEMA 02, 203928076615) laden apps pas na de eerste interactie, laden productmodules alleen waar ze nodig zijn en worden secties onder de vouw pas opgebouwd als je ernaartoe scrolt. Gemeten tegen live: blokkeertijd (TBT) 4,6 tot 4,9 keer lager, rekentijd 2 tot 3 keer lager, 30 tot 40% minder bytes en verzoeken; de productpagina is na 5,5 s klaar in plaats van 34 s. Alleen de gesimuleerde LCP van de homepage is in Lighthouse niet beter. Niets live gezet."
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

## Acties
- [ ] P1 · Besluit: WERKTHEMA 02 live zetten, na een eigen klikronde op de preview (winkelwagen, toevoegen, zoeken, account, maten kiezen, cookiebanner)
- [ ] P2 · De twee wijzigingen in hp-home.css (duel-animatie zonder z-index, preserve-3d) ook in de bron van de homepage-build zetten, anders draait de volgende build ze terug
- [ ] P2 · Na een Horizon-update opnieuw doorvoeren: predictive-search.js (lege zoekstaat bij openen) en scripts.liquid (modules op aanvraag) zijn kernbestanden
- [ ] P2 · Na livegang velddata vergelijken (Shopify web_performance, 30 dagen voor en na) op LCP en INP per paginatype
- [ ] P3 · Homepage-hero: nagaan of de zoom- en rise-animatie de eerste weergave van de hero na de eerste tekst laat vallen; dat drukt de gesimuleerde LCP

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
| Hero | `decoding="sync"` op het prioriteitsbeeld. | `snippets/hp-img.liquid` |

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

### 4. Wat overblijft
Na de ingrepen zit het meeste rekenwerk in Shopify zelf (pixels/web-pixels-manager 0,5 tot 0,7 s, perf-kit ~0,2 s). Dat valt niet vanuit het thema te sturen.

## Wat niet lukte
- Meetruis: previewthema's krijgen geen Early Hints en soms de Shopify-previewbalk (~585 KB); er liep een tijdlang een tweede meetsessie tegelijk. Opgevangen door om en om te meten, de balk te blokkeren en een controle met hetzelfde thema-ID.
- `shopify theme check` liep vast onder CPU-belasting; in de gerenderde pagina's stond geen "Liquid error".
- Dashboard publiceren: zie commit; het dashboard is eigendom van info@.

## Bronnen
- Lighthouse-uitvoer en meetscripts: lokale scratchpad van deze sessie (niet in de vault)
- Thema-git: `C:\Users\Test\Werk\theme-snelheid\werkthema-02` (commits e874c49 basis, 44fa5f2 optimalisaties, d332908 hero)
- Preview: https://www.higrip.nl/?preview_theme_id=203928076615
