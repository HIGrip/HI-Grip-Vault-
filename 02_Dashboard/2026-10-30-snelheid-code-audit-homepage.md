---
id: 2026-10-30-snelheid-code-audit-homepage
titel: "Snelheid- en code-audit homepage higrip.nl"
kerntitel: "Homepage-laag staat 12 keer in de pagina en kost 3,7 s blokkeertijd op desktop"
datum: 2026-10-30
bron: los
routine: ""
categorie: Techniek
status: nieuw
prioriteit: P1
samenvatting: "De homepage scoort 5 op 10 (PSI: mobiel LCP 5,3 s, desktop TBT 2.750 ms), en de grootste oorzaak is dat de gedeelde homepage-laag met fonts, hp-home.css en hp-home.js 12 keer in de pagina staat: één keer laden haalde in een lokaal experiment 93% van de blokkeertijd op desktop weg. Daarnaast laden carrouselkopieën, video-posters en dubbele beeldbreedtes ruim 1 MB aan beelden die bij binnenkomst niet in beeld staan, en dat is met kleine codewijzigingen te verhelpen."
gerelateerd: [2026-10-29-ads-funnel-en-snelheid-productpagina, 2026-10-30-e-mailpopup-wat-converteert-het-best, 2026-10-13-homepage-redesign, 2026-10-27-seo-audit-higrip-nl]
vervangt: []
bronbestand: ""
deadline: ""
---
# Snelheid- en code-audit homepage higrip.nl

> Map: [[Waar staat wat]]

## In het kort
De vraag was een volledige snelheids- en code-audit van de homepage, mobiel en desktop: eerst meten, dan per sectie advies, en een grondige review van elk bestand dat de homepage rendert. Velddata bestaat niet (CrUX heeft te weinig verkeer), dus alle cijfers zijn labcijfers uit PSI en lokale Lighthouse. Het grootste probleem zit in de eigen homepagecode, niet in de apps: `snippets/hp-base.liquid` staat in alle 12 hp-secties, waardoor fonts, `hp-home.css` en `hp-home.js` 12 keer in de HTML staan. In een lokaal experiment met dezelfde HTML daalde de blokkeertijd op desktop daardoor van 3.965 naar 286 ms. Het werkthema lost het belangrijkste deel al op (fonts en CSS één keer: 3.753 naar 85 ms), maar mist `hg-deelcode.js`, die op live wel staat. Daarna volgen drie kleine fixes die samen ruim 1 MB beeld uit het begin van het bezoek halen: carrouselkopieën die direct laden (721 KB), posters die met de hero meeladen (92 KB) en twee foto's die in twee breedtes laden (222 KB). Er is niets aan het thema gewijzigd en niets gepusht.

## Kerncijfers
- **5,3 s** · LCP mobiel (PSI, lab; grens goed is 2,5 s)
- **2.750 ms** · TBT desktop (PSI, lab; INP-benadering)
- **-93%** · Blokkeertijd desktop als de homepage-laag één keer laadt (lokaal experiment, 3 runs)
- **1.102 KB** · Beelden vóór scrollen op mobiel, terwijl 155 KB in beeld staat

## Acties
- [ ] P1 · hg-deelcode.js en de scripttag uit live (layout/theme.liquid:25) in het werkthema zetten vóór het live zetten, anders verdwijnt de deelcode
- [ ] P1 · Carrouselkopieën van hp-07 en hp-09 pas aanmaken bij naderen (hp-home.js:1079-1090 en 1360-1368): 721 KB minder vóór scrollen op mobiel
- [ ] P1 · Video-posters in hp-06 als data-poster en pas in load() zetten: 92 KB uit het LCP-venster op mobiel
- [ ] P1 · hp-04 en hp-08 dezelfde breedteladder geven als hp-07 (500,1000,1500,2000): 222 KB dubbele downloads minder op mobiel
- [ ] P2 · Productmodules en de quick-add-modal niet laden op de homepage (scripts.liquid:155-264, theme.liquid:196-198), daarna drawers en zoeken testen
- [ ] P2 · Op de homepage testen welk winkelwagen-drawer opent (Horizon of Section Store) en het andere laten vallen
- [ ] P2 · Besluit: app-embeds T Lab Translation (beide switchers uit) en Microsoft Clarity (geen output) uitzetten in de thema-editor
- [ ] P2 · sizes corrigeren in hp-09 (160px en 120px), hp-10 kaart 1 en 2 (46vw) en hp-02 (38vw op desktop)
- [ ] P2 · Sectie-inits in hp-home.js pas starten bij naderen (IntersectionObserver in initIn, 150% marge): 550 tot 650 ms reflow minder op desktop
- [ ] P2 · build.py: hp-home.css splitsen in een klein kritiek deel (inline) en CSS per sectie, en hp-05 en hp-13 uit de bundel halen
- [ ] P2 · Staande hero-uitsnede voor mobiel uploaden als image_mobile in hp-01 en de hero opnieuw comprimeren (PSI: 122 KiB te besparen)
- [ ] P2 · Besluit: vaste prijzen in de hp-02-kaarten leegmaken, zodat de live productprijs getoond wordt
- [ ] P2 · Na het live zetten PSI mobiel en desktop opnieuw draaien en vergelijken met deze nulmeting (score mobiel 76, desktop 60)
- [ ] P3 · Poppins alleen via Shopify font_face laden en de Google Fonts-link schrappen
- [ ] P3 · Betaaliconen in de footer als lazy img in plaats van 9 inline SVG's (19,5 KB per pagina)
- [ ] P3 · Lege staat van de zoekmodal pas bij openen vullen (74 DOM-nodes en 13,8 KB per pagina)
- [ ] P3 · Headerscript in theme.liquid:129-131 omzetten naar een ResizeObserver (43 tot 77 ms reflow)
- [ ] P3 · Besluit: ongebruikte Horizon-secties quick-order-list, product-hotspots en layered-slideshow verwijderen, met de scripttag in scripts.liquid
- [ ] P3 · Mobiele merkvideo lichter coderen (nu 3.714 KB) of de lichte versie standaard maken op mobiel
- [ ] P3 · Dode code opruimen: chat-drawer-render, hpLightbox, kleurgolf in hp-07, dode hp-home.css-klassen, 31 dode eigen secties, dode snippets en hp-urltest.webp
- [ ] P3 · Besluit: wat hide_theme_header in hp-01 moet doen, want de instelling werkt nu niet
- [ ] P3 · Telefoonlink in de footer (text_TxDeYL) van mailto: naar tel: zetten

## Bevindingen
### 1. Totaalcijfer: 5/10

Velddata (CrUX) bestaat niet: PageSpeed Insights meldt voor de pagina én de origin "niet voldoende echte snelheidsgegevens". Alle cijfers hieronder zijn dus labcijfers. Oordeel per Google-drempel (LCP ≤ 2,5 s goed, > 4 s slecht; CLS ≤ 0,1 goed; TBT als INP-proxy: ≤ 200 ms goed, > 600 ms slecht op mobiel, > 350 ms slecht op desktop).

| Metriek | Mobiel veld | Mobiel PSI (LH 13.6) | Mobiel lokaal (LH 12.8, mediaan van 3, bereik) | Oordeel mobiel | Desktop PSI | Desktop lokaal (mediaan van 3, bereik) | Oordeel desktop |
|---|---|---|---|---|---|---|---|
| LCP | geen data | 5,3 s | 4,5 s (4,5-9,5) | **slecht** | 1,1 s | 1,05 s (0,98-1,08) | goed |
| CLS | geen data | 0,01 | 0,001 (0-0,067) | goed | 0,001 | 0,005 | goed |
| INP | niet gemeten | TBT 230 ms | TBT 10,1 s (7,1-10,3)* | **verbeteren** | TBT 2.750 ms | TBT 3,6 s (2,7-3,6) | **slecht** |
| FCP | geen data | 1,1 s | 2,6 s (2,4-4,0) | goed | 0,3 s | 0,7 s | goed |
| TTFB | geen data | 10 ms (LCP-opbouw) | 32 ms (20-87); curl 274 ms | goed | 10 ms | 22 ms | goed |
| Speed Index | - | 3,2 s | 6,3 s (5,6-7,4) | verbeteren | 3,2 s | 3,3 s | verbeteren |
| Score | - | 76 | 44 (30-47) | - | 60 | 60 (59-60) | - |

\* De lokale machine is trager dan de PSI-servers (Lighthouse benchmarkIndex 731-882), dus lokale TBT op mobiel (4× CPU-vertraging) is te hoog. Voor TBT is PSI leidend; lokaal dient als richting. Desktop draait zonder CPU-vertraging en komt in beide omgevingen op 2,7-3,6 s TBT uit.

Waarom een 5: CLS, TTFB en de beeldformaten (WebP/AVIF met `srcset`) zijn op orde. Daartegenover staan een slechte LCP op mobiel, een slechte blokkeertijd op desktop (9,1 s Style & Layout in PSI), 3,4 MB per bezoek (PSI 3.466 KiB, 351 requests) en een gedeelde homepage-laag die 12 keer in de HTML staat.

### 2. Top 10 fixes (impact gedeeld door moeite)

| # | Probleem en bewijs | Oplossing | Winst | Moeite |
|---|---|---|---|---|
| 1 | **De homepage-laag staat 12 keer in de HTML.** `snippets/hp-base.liquid` wordt in elke hp-sectie gerenderd. Daardoor staan de Google Fonts-link, `hp-home.css` (121,5 KB geserveerd) en `hp-home.js` elk 12 keer in de pagina. Coverage: 12 losse `hp-home.css`-stylesheets in de CSSOM, waarvan 11 met 0% gebruik, en 12 uitvoeringen van `hp-home.js`. PSI meldt 146 KiB dubbele JS. Twee experimenten op desktop (elk 3 runs, zelfde HTML lokaal geserveerd): TBT-proxy 3.965 naar 286 ms en 3.753 naar 44 ms als alles één keer laadt, en 3.753 naar **85 ms** als alleen fonts en CSS één keer laden (precies de werkthema-versie). | Zet fonts en `hp-home.css` één keer in de `<head>` van de homepage, zoals het werkthema al doet. Zet de scripts er voor de netheid bij (meet nauwelijks verschil). **Let op:** het werkthema mist `hg-deelcode.js` en de scripttag uit live (`layout/theme.liquid:25`). Werk dat eerst bij, anders verdwijnt de deelcode bij het live zetten. | -3,7 s blokkeertijd op desktop (-93% tot -98%) | S |
| 2 | **De carrouselkopieën laden 721 KB foto's bij binnenkomst.** Op mobiel, zonder te scrollen, vragen scripts 11 afbeeldingen op: 5 sportfoto's uit hp-07 (639 KB) en 6 logo's uit hp-09 (82 KB). De CDP-stack wijst naar `copy()` in hp-07 (`hp-home.js:1079-1090`) en de kloonlus van hp-09 (`hp-home.js:1360-1368`). De originelen staan nog op `lazy` en zijn niet geladen; alleen de klonen zijn binnen. | Kloon pas in de `hpInView`-callback die hp-07 al heeft (`hp-home.js:1174`, marge 100%), en voor hp-09 in een eigen `hpInView`. Of maak de klonen zonder `src`/`srcset` en vul die bij naderen. | -721 KB vóór scrollen op mobiel, -717 KB op desktop | S |
| 3 | **De video-posters laden tegelijk met de hero.** `hp-06-brandvideo.liquid:51-52` zet `poster=` direct in de HTML, en `preload="none"` houdt posters niet tegen. Op mobiel starten de desktopposter (58 KB, op mobiel nooit zichtbaar) en de mobiele poster (34 KB) op t=404 ms. De LCP-foto start op t=403 ms. De sectie staat op 2.695 px. | Gebruik `data-poster` en zet `v.poster` in `load(v)` (`hp-home.js:946`), die al bij 150% marge draait. | 92 KB uit het LCP-venster op mobiel; 58 KB nooit meer op mobiel, 34 KB nooit meer op desktop | S |
| 4 | **Dezelfde foto laadt twee keer in een andere breedte.** De `widths` verschillen per sectie: hp-04 `'450,900,1350,1800'`, hp-08 `'600,1200,1600,2000'`, hp-07 `'500,1000,1500,2000'`. Gemeten op mobiel: rugby laadt op 900w (91,7 KB, hp-04) én 1000w (hp-07); voetbal op 1024w (130,8 KB, hp-08) én 1000w (hp-07). | Geef hp-04 (`:48`) en hp-08 (`:32`) dezelfde ladder als hp-07: `'500,1000,1500,2000'`. Dan komt de tweede keer uit de cache. | -222 KB op mobiel (gemeten bytes van de dubbele downloads) | S |
| 5 | **Productcode laadt op een homepage zonder producten.** 23 Horizon-modules hebben geen enkel element in de homepage-DOM (mobiel en desktop). Ze laden toch: 118,5 KB geserveerd, 51,8 KB overdracht, waarvan 10,4 KB gebruikt. Voorbeelden: product-form, variant-picker, quick-add, layered-slideshow, media-gallery (`snippets/scripts.liquid:155-264`). De quick-add-modal rendert omdat `mobile_quick_add` aan staat, maar de homepage heeft geen quick-add-knoppen (`layout/theme.liquid:196-198`). | Zet de productmodules in `{%- unless template.name == 'index' -%}` en laat de importmap staan. Render de quick-add-modal niet op `index`. Test daarna het menudrawer, de zoekmodal en het cart drawer. | tot 51,8 KB overdracht en 23 requests minder | S |
| 6 | **App-embeds die niets doen of dubbel draaien.** Bundler is verwijderd maar staat nog aan en rendert een Liquid-foutcommentaar. Clarity rendert alleen lege regels en stuurt geen request. T Lab Translation heeft beide switchers uit, maar laadt toch 14 KB in de head plus `advanced-switcher.js` (5,4 KB). Er draaien twee winkelwagen-drawers tegelijk: die van Horizon en Section Store block-cart (92,9 KB JS en 18,6 KB HTML). FD Product Groups laadt 86 KB op de homepage. | Zet in de thema-editor de embeds uit die niets doen. Klik op de homepage op het winkelwagen-icoon om te zien welke drawer opent, en laat de andere vallen. FD, Bundler, Essential en EcomSend staan al in de notitie van 29-10. | T Lab ca. 21 KB; één drawer minder: 93 KB JS of 37,5 KB CSS plus 4 modules | S |
| 7 | **Verkeerde `sizes` op logo's en B2B-beelden.** hp-09 heeft `sizes="200px"`, maar de logo's zijn 47-112 px breed: 2,1× tot 5,5× te groot. hp-10 gebruikt `92vw` voor alle drie de kaarten, terwijl kaart 1 en 2 op mobiel 166 px breed zijn: club-spirit 2,41× (85,4 KB), sok-zwart 1,93× (34,6 KB). hp-02 heeft op desktop `50vw`, maar toont 544 px op 1440 (38vw): 1,65×. | Zet `sizes` gelijk aan de echte weergave. hp-09: `(min-width: 769px) 160px, 120px`. hp-10: `46vw` voor kaart 1 en 2 via `forloop.index`. hp-02: `(min-width: 769px) 38vw, 50vw`. | Deze beelden wegen nu 82 KB (hp-09) en 120 KB (hp-10, twee beelden) op mobiel; de besparing in KB is niet gemeten | S |
| 8 | **Alle sectie-inits draaien in één keer bij het laden, met gedwongen reflows.** `hpRegister` voert elke sectie-init synchroon uit (`hp-home.js:294-302`). Lokale Lighthouse koppelt reflowtijd aan hp-07 `hpDrag.measure()` (243-310 ms desktop), hp-08 `rest()` (151-180 ms) en hp-09 `measure()` (154-163 ms). PSI noemt lange taken van hp-home.js van 304, 209 en 126 ms (desktop). | Start elke sectie-init pas als de sectie op 150% marge nadert, via één IntersectionObserver in `initIn`. Dat lost fix 2 meteen mee op. Meet de rustpositie van hp-08 pas bij de eerste `pointerenter`. | 550-650 ms reflow uit de laadtaak op desktop, 120-175 ms op mobiel (lokaal gemeten) | M |
| 9 | **Render-blocking CSS met dode en uitgestelde regels.** PSI schat 980 ms vertraging door blokkerende CSS. `compiled_assets/styles.css` is 51,8 KB br; op de homepage is 91% ongebruikt. `hp-home.css` blokkeert met 20 KB br. Daarin matcht 27,9 KB ruw nergens in de DOM, en de dode secties hp-05 en hp-13 zitten er nog in (17,7 KB min). Drie ongebruikte Horizon-secties (quick-order-list, product-hotspots, layered-slideshow) zetten 28 KB ruw in `styles.css`. `layered-slideshow.js` laadt toch op elke pagina. | Splits `hp-home.css` in `build.py`: de CSS voor tokens, de basis en hp-01 inline (ca. 3,6 KB gzip), de rest per sectie of asynchroon. Haal hp-05 en hp-13 uit de bundel. Verwijder de drie Horizon-secties met hun scripttag, als die functies niet gepland zijn. | Blokkerende hp-CSS van ca. 20 KB br naar ca. 3,6 KB inline; ca. 28 KB ruw minder in `styles.css` op elke pagina | M |
| 10 | **De hero (LCP) heeft de verkeerde uitsnede.** Op mobiel staat een liggend bestand van 900×604 in een staand vak van 453×981 (`object-fit: cover`). Voor scherp beeld op DPR 2 is ca. 2.924 px breedte nodig; het bestand weegt 152,5 KB. PSI: LCP 5,3 s en 122 KiB te besparen door compressie. `image_mobile` is hetzelfde bestand als `image`, dus de `<picture>` doet nu niets. | Upload een staande uitsnede als `image_mobile` en exporteer op lagere kwaliteit. Houd `fetchpriority="high"`. Fix 1 tot en met 5 halen daarnaast ruim 1 MB uit het begin van het bezoek, waar de hero nu mee concurreert. | PSI: -122 KiB; scherper beeld op mobiel | M |

Net buiten de top 10, wel gemeten:
- **Poppins uit twee bronnen** (S/M). Shopify `font_face` levert n4, i7 en i8 (33 KB). Google Fonts staat 12 keer gelinkt en levert 9 tot 10 bestanden (70-80 KB) via twee extra origins. 400 en cursief 800 komen dubbel binnen; cursief 700 wordt gebruikt maar zit niet in de Google-URL. Fix: alleen Shopify `font_face` met `font_modify` voor 300/600/900/900-cursief, Google laten vallen.
- **Betaaliconen in de footer** (S). 9 inline SVG's, 19,5 KB ruw en 7,1 KB gz op elke pagina (`blocks/payment-icons.liquid:23-25`). Fix: `<img src="{{ type | payment_type_img_url }}" width="38" height="24" loading="lazy">`.
- **Lege staat van de zoekmodal** (M). Bij elke paginalading rendert `predictive-search-empty-state.liquid:22-41` vier producten met 6 lazy afbeeldingen: 74 DOM-nodes en 13,8 KB HTML, ook als niemand zoekt. Fix: vullen bij de eerste keer openen via `/?section_id=predictive-search`.
- **Header-script** (S). `layout/theme.liquid:129-131` leest `getBoundingClientRect` in een rAF: 43 ms (mobiel) en 77 ms (desktop) gedwongen reflow. Fix: ResizeObserver.
- **Shop-accounticoon** (M). `<shopify-account>` laadt account.js met 185 ms reflow (PSI desktop), plus de Shop-font GTStandard (64 KB). Dit besluit staat al in de notitie van 29-10.
- **Merkvideo mobiel 3.714 KB** (M). `hp-home.js:951` zet `preload = 'auto'` zodra je binnen 1,5 scherm komt. De lichte versie wordt alleen bij saveData of 2g/3g gebruikt. Fix: codeer de mobiele mp4 lichter of maak de lichte versie de standaard op mobiel.
- **Niet-gecomponeerde animaties** (S). `z-index` in `@keyframes hp-02-duel-a` (`hp-home.css:614-616`), `visibility` in de aankondigingsbalk (`header-announcements.liquid:67`), `stroke-dashoffset` in de Shop-login. De duel-animatie uitzetten leverde in het experiment maar 53 ms TBT op, binnen de spreiding.

### 3. Per sectie

| Sectie | Cijfer | Zwaarste asset (gemeten) | Problemen | Fix |
|---|---|---|---|---|
| Aankondigingsbalk | 7 | 12,6 KB HTML, 5,3 KB inline JS | `visibility`-overgang wordt niet gecomponeerd (PSI desktop) | Alleen `opacity` laten overgaan en verborgen slides `inert` geven |
| Header | 5 | Shop-login: account.js en submodules plus GTStandard-font 64 KB | 36 KB HTML en 216 nodes. Gedwongen reflow in het headerscript (43/77 ms) en in `overflow-list.js` (144 ms, desktop; het menu loopt bij 1440 px nooit over). Zoekmodal rendert vooraf 74 nodes. | ResizeObserver; lege staat van de zoekmodal pas bij openen; accounticoon (besluit van 29-10) |
| hp-01 hero | 4 | IMG_3844, 152,5 KB mobiel / 242 KB desktop | LCP 5,3 s (PSI mobiel); liggend bestand in staand vak; CLS 0,01 door font-swap in `hp-01-stage`. `hide_theme_header` werkt niet, want `#header-group:has(...)` in `styles.css` wint. `show_bar` staat uit, dus 14 instellingen en de kopbalkcode renderen nooit. | Fix 10. Besluit wat `hide_theme_header` moet doen; repareren haalt de navigatie van de homepage. |
| hp-02 kies je paar | 6 | shop-sok-10, 39,5 KB desktop | `z-index`-keyframes; `sizes` 50vw tegen 38vw (1,65×); `offsetTop` lezen na elke write bij scrollen (30-134 ms reflow, mobiel). De vaste `price` in index.json overschrijft `product.price` (risico op een verouderde prijs). | Fix 7; offsets cachen bij resize; prijsveld leeg laten zodat de live prijs telt (door een mens) |
| hp-03 bewijsbalk | 9 | 3,4 KB HTML, geen beelden | rekent bij scrollen ook buiten beeld (`hpScrollY`) | Terugkeren als de sectie niet in beeld is |
| hp-04 fotoraster | 6 | hp-sport-rugby 900w, 91,7 KB | andere breedteladder dan hp-07, dus dubbele download | Fix 4 |
| hp-06 merkvideo | 3 | mp4 mobiel 3.714 KB | posters laden met de hero mee (92 KB); video `preload = 'auto'`; verborgen geluidsknop en `.hp-06-panel*` zijn dood | Fix 3; lichtere encode |
| hp-07 kies je sport | 4 | hp-sport-padel 149,5 KB | klonen laden 639 KB bij binnenkomst; `hpDrag.measure()` 243-310 ms reflow (desktop). De kleurgolf staat op `display:none`, maar `paint()` meet en forceert hem nog bij elke wissel. Overschreven CSS-lagen. | Fix 2 en 8; golfcode weg. Beelden niet kleiner maken: 1000w is op mobiel juist te klein. |
| hp-08 over ons | 6 | hp-sport-voetbal 1024w, 130,8 KB | andere breedteladder dan hp-07; `rest()` meet bij init (151-180 ms reflow, desktop); dubbele spans door lege `cta_label_mobile` | Fix 4 en 8 |
| hp-14 teamorders | 6 | IMG_0252, 109,4 KB mobiel | staande bestanden (900×1350) in liggende vakken (343×190) | Uitsnede per breakpoint (`image_url: width:, height:, crop:`), na controle van de verhouding op desktop |
| hp-09 logoband | 6 | hp-logo-myhealthclub 21,6 KB | `sizes` 200px tegen 47-112 px; 2 van de 3 sets laden direct; `measure()` direct na het klonen (154-163 ms reflow, desktop) | Fix 2, 7 en 8 |
| hp-10 zakelijk | 5 | hp-b2b-club-spirit 85,4 KB | `92vw` voor alle kaarten | Fix 7 |
| hp-11 FAQ | 8 | 9,8 KB HTML | `padding`-transitie op `.hp-11-sum`. FAQ is native `<details>`, JSON-LD staat er één keer in. | Alleen de achtergrondkleur laten overgaan; JSON-LD intact laten |
| hp-12 slogan | 9 | 2,5 KB HTML | geen | - |
| Footer-groep, section_FGgkjf (3 groepblokken) | 6 | 21,1 KB HTML | telefoonlink wijst naar `mailto:` in plaats van `tel:` | Link corrigeren (inhoud, geen snelheid) |
| Footer | 6 | 45,7 KB HTML en 171 nodes, waarvan 19,5 KB betaal-SVG | betaaliconen inline | Betaaliconen als lazy `<img>` |
| Na de footer (drawers, zoeken, modals, app-blokken) | 4 | Section Store block-cart 18,6 KB HTML en 92,9 KB JS | twee cart drawers; quick-add-modal zonder triggers; chat-drawer zonder chatscript; EcomSend-blok 13,8 KB | Fix 5 en 6; `{% render 'chat-drawer' %}` (`theme.liquid:52`) weg |

### 4. Afbeeldingen

Gemeten met de echte bestandspixels (opnieuw opgehaald en met PIL uitgelezen). Bij `object-fit: cover` telt de grootste schaalfactor. "Nodig" = weergegeven CSS-pixels × DPR (mobiel 2, desktop 1). Verspilling boven 1,5× is vetgedrukt.

| Bestand (sectie) | Scherm | Bestand | Weergegeven | Nodig | Factor | KB | Fix |
|---|---|---|---|---|---|---|---|
| IMG_3844 (hp-01, LCP) | 375 | 900×604 | 453×981 | 2.924 breed | 0,31 (te klein) | 152,5 | Staande uitsnede als `image_mobile` |
| IMG_3844 (hp-01, LCP) | 1440 | 1264×848 | 1524×953 | 1.524 breed | 0,83 (te klein) | 242,0 | Compressie (PSI: -122 KiB) |
| hp-sport-padel (hp-07) | 375 | 1000×667 | 363×495 | 1.484 | 0,67 | 149,5 | Klonen pas laden bij naderen |
| hp-sport-tennis (hp-07) | 375 | 1000×667 | 304×411 | 1.232 | 0,81 | 138,9 | Idem |
| hp-sport-voetbal (hp-07 + hp-08) | 375 | 1000×1000 en 1024×1024 | 304×411 | 822 | 1,22 | 122,6 + 127,8 | Dubbel: zelfde breedteladder (fix 4) |
| hp-sport-rugby (hp-04 + hp-07) | 375 | 900×521 en 1000×579 | 343×229 / 304×411 | 791 / 1.420 | 1,14 / 0,70 | 89,5 + 100,1 | Dubbel: zelfde breedteladder (fix 4) |
| hp-logo-hr (hp-09) | 375 | 500×500 | 47×47 | 94 | **5,32** | 12,6 | `sizes` naar 120px |
| hp-logo-syth (hp-09) | 375 | 512×512 | 50×50 | 100 | **5,12** | 6,0 | Idem |
| hp-logo-myhealthclub (hp-09) | 375 | 600×600 | 112×112 | 224 | **2,68** | 21,6 | Idem |
| hp-logo-spirit (hp-09) | 375 | 252×300 | 51×60 | 102 | **2,47** | 14,3 | Idem |
| hp-logo-concordia (hp-09) | 375 | 360×345 | 82×78 | 164 | **2,20** | 17,3 | Idem |
| hp-logo-sport2000 (hp-09) | 375 | 240×240 | 57×57 | 114 | **2,11** | 10,3 | Idem |
| hp-b2b-club-spirit (hp-10) | 375 | 800×1200 | 166×207 | 332 | **2,41** | 85,4 | `sizes` 46vw |
| hp-b2b-sok-zwart (hp-10) | 375 | 800×800 | 166×207 | 414 | **1,93** | 34,6 | Idem |
| hp-b2b-sokhoogtes (hp-10) | 375 | 800×1000 | 343×343 | 686 | 1,17 | 18,1 | OK |
| IMG_0252 / IMG_0258 (hp-14) | 375 | 900×1350 | 343×190 | 686 | 1,31 | 106,8 / 68,2 | Liggende uitsnede |
| shop-sok-10 (hp-02) | 1440 | 900×900 | 544×340 | 544 | **1,65** | 39,5 | `sizes` 38vw |
| hp-sh-sok-20-wit (hp-02) | 1440 | 900×900 | 544×340 | 544 | **1,65** | 27,9 | Idem |
| hp-sh-sok-20-zwart (hp-02) | 1440 | 900×900 | 544×340 | 544 | **1,65** | 19,0 | Idem |
| hp-sh-sok-10 thumb (hp-02) | 1440 | 150×150 | 94×94 | 94 | **1,60** | 5,4 | `sizes` 94px op desktop |
| hp-logo-syth / hr (hp-09) | 1440 | 300×300 | 64×64 | 64 | **4,69** | 5,0 / 9,0 | `sizes` 160px |
| hp-logo-spirit (hp-09) | 1440 | 252×300 | 69×82 | 69 | **3,65** | 14,3 | Idem |
| hp-sport-voetbal (hp-08) | 1440 | 1024×1024 | 720×630 | 720 | 1,42 | 127,8 | `sizes` 50vw |
| Brandvideo-poster desktop (hp-06) | 375 | 1920 breed | niet zichtbaar | 0 | - | 56,8 | Alleen de zichtbare poster laden (fix 3) |

Op mobiel komt vóór scrollen 1.102 KB aan beelden binnen, terwijl alleen logo en hero (155 KB) in beeld staan. Op desktop is dat 1.173 KB. Alle beelden hebben `width`/`height`, `srcset` en `loading="lazy"`, behalve de hero, die `fetchpriority="high"` heeft. Het formaat is WebP/AVIF via het Shopify-CDN. Het logo is een PNG van 110×110 (3,2 KB), dat is in orde. Het bestand `hp-urltest.webp` (113 KB) staat in de assets zonder enige verwijzing. hp-04 en hp-10 op desktop zijn niet geladen tijdens de snelle scroll, dus hun keuze op 1440 is niet gemeten.

### 5. Scripts en apps

KB = overdracht (Lighthouse mobiel). Main-thread-ms komt uit PSI mobiel waar beschikbaar. Anders is het lokaal Lighthouse mobiel; die machine is trager, dus de cijfers zijn daar hoger.

| Naam | Bron | KB | Main-thread-ms | Nodig | Advies |
|---|---|---|---|---|---|
| EcomSend (e-mailpopups) | app | 272,3 JS + style.css 8,8 (100% ongebruikt bij laden) | PSI 128 · lokaal 937 | ja, maar later | Staat al in de notitie van 29-10: laden na interactie of na 10 s |
| hp-home.js | thema | 13,1 br per tag, 12 tags | lokaal 3.514 · PSI lange taken 304/209/126 (desktop) | ja | Fix 1, 2 en 8 |
| Section Store block-cart | app | 92,9 | PSI 47 · lokaal 838 · reflow 200 ms (desktop) | onzeker | Fix 6: draait naast het Horizon-cart drawer |
| FD Product Groups | app | 86,0 (77% ongebruikt) + 3,2 KB inline | PSI 42 · lokaal 261 | nee op de homepage | Staat al in de notitie van 29-10 |
| Shop-login (`<shopify-account>`, account.js, Gravity-font GTStandard) | Shopify | 10,7 (account.js) + submodules + font 64 | reflow 185 ms (PSI desktop) | besluit | Staat al in de notitie van 29-10 (accounticoon) |
| Web Pixels Manager + pixels (Facebook, Google, Essential A/B, Shoplift, onbekende app 12388204545) | Shopify en apps | 83,7 | lokaal 790 | ja (meten) | Onbekende pixel uitzoeken; Essential gaat al weg volgens 29-10 |
| shopify-perf-kit | Shopify | 26,6 | lokaal 690 | platform | Niet via het thema aan te passen |
| trekkie | Shopify | 30,6 | lokaal 342 | platform | Niet via het thema aan te passen |
| Privacybanner | Shopify | 21,3 | lokaal 121 | ja (AVG) | Houden; gaf in één run CLS 0,067 |
| Horizon-themamodules | thema | 57 bestanden, 133 KB overdracht; 23 zonder element op de homepage (51,8 KB) | `overflow-list.js` lokaal 327 (desktop) | deels | Fix 5 |
| T Lab AI Language Translate | app | 14 KB inline in de head + advanced-switcher.js 5,4 + init 1,9 | niet apart gemeten | onzeker | Beide switchers staan uit; nagaan of vertalingen nodig zijn, anders embed uit |
| Essential A/B Testing | app | 6,4 KB inline in de head + pixel | niet apart gemeten | onzeker | Uit als de test op `page.ab-a/b` klaar is |
| Shoplift | app | pixel (events.shoplift.ai) | niet apart gemeten | onzeker | Tweede A/B-tool naast Essential; nagaan of er een test loopt |
| SEOAnt (incl. pagespeed-preloading.js) | app | 1,1 + 1,9 | verwaarloosbaar | onzeker | Overwegen het preloadscript uit te zetten: het concurreert met de eigen preloads |
| Microsoft Clarity (embed) | app | 0 (rendert alleen lege regels, geen request) | 0 | nee | Embed uit of opnieuw koppelen |
| Bundler (verwijderd) | app | 0, wel een Liquid-foutcommentaar | 0 | nee | Embed uit en de blocks uit `templates/product*.json` halen |
| Onbekende Google Fonts-aanroep `Poppins:wght@400;600;700` (initiator `about:client`) | onbekend | klein | - | onzeker | Niet uit het thema; bron is onbekend |
| Checkout-prefetch (`checkouts/internal/preloads.js`) | Shopify | 644 (73 requests, in rusttijd) | in rusttijd | platform | Niet via het thema aan te passen; kost wel mobiele data |

Render-blocking op mobiel (Lighthouse en PSI): `compiled_assets/styles.css`, `base.css`, `hi-headings.css`, `hi-sale-price.css`, `hi-app-fixes.css` en `accelerated-checkout-backwards-compat.css`. PSI noemt ook `overflow-list.css`. De drie kleine `hi-*.css` zijn samen 1,5 KB in drie aparte requests; samenvoegen in één bestand scheelt twee requests. `hi-sale-price.css` gebruikt `#e10600` hardgecodeerd in plaats van `var(--hi-red)`.

Waterval, de grootste requests (Lighthouse mobiel, run 1, 343 requests):

| Request | Type | KB | Laadtijd | Blokkerend |
|---|---|---|---|---|
| ecomsend.js | script (app) | 272,3 | 100 ms | nee |
| checkout-prefetch 164ad2e3 | overig (Shopify) | 174,8 | 91 ms | nee |
| IMG_3844 (hero, LCP) | beeld | 152,4 | 463 ms | nee |
| hp-sport-padel | beeld (kloon) | 149,5 | 161 ms | nee |
| hp-sport-tennis | beeld (kloon) | 138,9 | 126 ms | nee |
| hp-sport-voetbal (1024w en 1000w) | beeld | 127,7 + 122,6 | 122 / 137 ms | nee |
| checkout-prefetch 6a2fc6d6 | overig (Shopify) | 103,9 | 94 ms | nee |
| hp-sport-rugby (1000w) | beeld (kloon) | 100,1 | 85 ms | nee |
| block-cart.js | script (app) | 90,0 | 148 ms | nee |
| hp-sport-rugby (900w, hp-04) | beeld | 89,5 | 288 ms | nee |
| wpm (Web Pixels Manager) | script | 83,7 | 268 ms | nee |
| fd-product-groups-ext.js | script (app) | 83,5 | 165 ms | nee |
| document | HTML | 75,1 | 565 ms | n.v.t. |
| GTStandard-MMedium.woff2 | font (Shop) | 63,0 | 67 ms | nee |
| brandvideo-poster desktop | beeld | 56,8 | 111 ms | nee |
| compiled_assets/styles.css | CSS | 52 KiB (PSI) | 660 ms vertraging (PSI) | **ja** |

### 6. Code-review per bestand

Live thema 202669916487, read-only gepulld. Gecontroleerd zijn 19 secties, 86 snippets, 21 blocks en 92 assets die de homepage rendert of laadt, plus 51 secties, 25 snippets en 50 blocks die nergens gerenderd lijken. Een bestand heet alleen "dood" als er nergens een render, include, sectieverwijzing of JS-verwijzing naar bestaat, in live én in het werkthema. Let op: `hp-home.css` en `hp-home.js` worden gebouwd met `shopify/build.py` uit het prototype. Wijzigingen daarin horen dus in de bron van die build.

Algemeen goed: geen `all_products`, geen geneste collectielussen, `hp-img` zet altijd `width`/`height`/`loading`/`decoding`, de hero heeft `fetchpriority="high"`, de FAQ is native `<details>`, de FAQPage-JSON-LD staat er één keer in. Alle 572 instellingen van de 12 hp-secties worden in de Liquid gebruikt.

#### snippets/hp-base.liquid
- **Dubbel:** 12 keer gerenderd. Dat geeft 12 stylesheets in de CSSOM (121,5 KB elk, 11 met 0% gebruik) en 12 uitvoeringen van `hp-home.js` (11 stoppen pas bij de guard `window.__hpHome`). Het commentaar in de snippet ("de browser haalt elk bestand maar één keer op en het script draait één keer") klopt niet: elke `<link>` is een eigen stylesheet en elke klassieke `<script>` draait opnieuw.
- **Efficiënter** (`hp-base.liquid:6-11`, huidig):
  ```liquid
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:...&display=swap">
  {{ 'hp-home.css' | asset_url | stylesheet_tag }}
  <script>if ('IntersectionObserver' in window && ...) document.documentElement.classList.add('hp-motion');</script>
  <script src="{{ 'hp-home.js' | asset_url }}" defer></script>
  ```
  Beter: alles binnen `{%- unless template.name == 'index' -%}` in de snippet, en in `layout/theme.liquid` binnen de `<head>`:
  ```liquid
  {%- if template.name == 'index' -%}
    {{ 'hp-home.css' | asset_url | stylesheet_tag }}
    <script>if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) document.documentElement.classList.add('hp-motion');</script>
    <script src="{{ 'hp-home.js' | asset_url }}" defer></script>
  {%- endif -%}
  ```
- **Besparing:** ca. 7,9 KB ruw HTML (gecomprimeerd < 1 KB), 11 stylesheets en 11 scriptuitvoeringen, plus de PSI-melding van 146 KiB dubbele JS. In het experiment: -3,7 s blokkeertijd op desktop.

#### sections/hp-01-hero.liquid
- **Dood door de configuratie:** `show_bar: false` in index.json, dus regels 27-46, 14 instellingen en de linkblokken renderen nooit. Hetzelfde geldt voor de CSS (`hp-home.css:196-207, 222, 227-230`, ca. 2,0 KB ruw) en de JS (`hp-home.js:323-338`). Dit is ongebruikt maar wel beschikbaar in de editor. Weghalen kan als de eigen kopbalk niet terugkomt.
- **Werkt niet:** `hp-01-hero.liquid:23-25`.
  ```liquid
  {%- if s.hide_theme_header -%}
    <style>#header-group { display: none; }</style>
  {%- endif -%}
  ```
  `#header-group:has(#header-component[sticky]){display:contents}` in `styles.css` wint op specificiteit. De header blijft dus zichtbaar (gemeten 60 px). Zet iemand sticky uit, dan verdwijnt de header ineens op de homepage. Beter: instelling en regels weghalen.
- **Overbodig:** `image_mobile` is hetzelfde bestand als `image`, dus de `<picture>` (`:49-56`) doet niets. Beter: een staande uitsnede uploaden (top-10 fix 8), of de `<picture>` alleen renderen als `s.image_mobile.src != s.image.src`.
- **JS:** `hp-home.js:342-353`. De offscreen-pauze (`is-still`) staat ná `if (... data-hp-01-zoom === 'off') return;`, dus de oneindige `hp-01-breathe` loopt ook buiten beeld door. Beter: de `hpInView(media, ...is-still...)`-regel vóór de `return` zetten.

#### sections/hp-02-kies-je-paar.liquid
- **Efficiënter** (`hp-home.css:616`):
  ```css
  @keyframes hp-02-duel-a { 0%, 40% { transform: none; z-index: 1; } 50% { transform: translateX(30px) rotate(8deg); z-index: 3; } … }
  ```
  Beter:
  ```css
  .hp-02-duel__socks { transform-style: preserve-3d; }
  @keyframes hp-02-duel-a { 0%,40%,60%,100% { transform: none; } 50% { transform: translate3d(30px,0,2px) rotate(8deg); } }
  ```
  Dat geeft één animatie op de main thread minder. Visueel controleren.
- **Juistheid:** `card_1`/`card_2` in index.json hebben een vaste `price` (€14,95 en €17,95), terwijl `product` gevuld is. `hp-02:45-48` gebruikt `product.price` alleen als `price` leeg is. Dat geeft risico op een verouderde prijs. Niet door Claude aan te passen (prijsweergave).
- **Micro:** `sizes: '(min-width: 769px) 50vw, 50vw'` is gelijk aan `'50vw'`.

#### sections/hp-04-fotoraster.liquid en sections/hp-08-over-ons.liquid
- **Dubbel:** de breedteladders verschillen van hp-07.
  ```liquid
  {%- render 'hp-img', ..., widths: '450,900,1350,1800' -%}   {%- comment -%} hp-04:48 {%- endcomment -%}
  {%- render 'hp-img', ..., widths: '600,1200,1600,2000' -%}  {%- comment -%} hp-08:32 {%- endcomment -%}
  ```
  Beter in beide: `widths: '500,1000,1500,2000'`, zoals hp-07. **Besparing: 222 KB op mobiel** (91,7 KB rugby + 130,8 KB voetbal, gemeten).
- hp-08: `cta_label_mobile` is leeg, waardoor dezelfde tekst in 4 spans staat. Beter: de mobiele span alleen renderen `{% if s.cta_label_mobile != blank %}`.

#### sections/hp-06-brandvideo.liquid
- **Efficiënter** (`:51-52`, huidig):
  ```liquid
  <video class="hp-06-vid hp-06-vid--wide" data-src="{{ src_d }}"{% if poster_d != blank %} poster="{{ poster_d }}"{% endif %} muted playsinline preload="none" ...>
  ```
  Beter: `data-poster="{{ poster_d }}"`, en in `load(v)` (`hp-home.js:946`): `if (v.dataset.poster) v.poster = v.dataset.poster;`. **Besparing:** 92 KB uit het LCP-venster op mobiel.
- **Dood:** de geluidsknop (`:72-75`) is `hidden style="display:none!important"` en de labels zijn leeg. Dat is 650 B markup, 502 B CSS en een listener op `hp-home.js:1005`. Bij weghalen in JS `if (sound)` toevoegen, anders crasht de sectie. `.hp-06-panel*` in `hp-home.css` (9 regels, 893 B) komt nergens meer in DOM, Liquid of JS voor.

#### sections/hp-07-kies-je-sport.liquid
- **Dubbel:** twee `<style>`-blokken ná `{% endschema %}` (`:755-766`, 981 B per paginaweergave). Ze overschrijven 5 definities van `--hp-07-card-w` in `hp-home.css` (`:1306, :1410, :1615, :1628, :1631`), die daardoor dood zijn. `hp-07-streak` (`:1523-1528`) en `hp-07-comet` (`:1588-1595`) worden volledig overschreven door `hp-07-glide` (`:1601`). Beter: de blokken in de bron van `hp-home.css` zetten en de overschreven regels schrappen. Dat scheelt ca. 1 KB HTML en 1,25 KB CSS.
- **Efficiënter:** `hp-home.css:1332` animeert `width`/`height` van een cirkel met een `box-shadow` van 300vmax, wat bij elke sportwissel layout en paint per frame kost. Beter: `clip-path: circle(var(--r) at var(--hp-07-wx) var(--hp-07-wy))` en in `hp-home.js:1073` luisteren op `clip-path` in plaats van `width`.
- **JS-kopieën** (`hp-home.js:1079-1090`): zie top-10 fix 2.

#### sections/hp-14-teamorders.liquid
- **Efficiënter** (`:43`): staande originelen (4000×6000) laden als 900×1350 voor liggende vakken van 343×190 (109,4 KB + 69,9 KB). Beter: `image_url: width: 900, height: 500, crop: 'center'` in een `<picture>` voor mobiel, met `pos_x/pos_y` als focuspunt.

#### sections/hp-09-logoband.liquid en sections/hp-10-zakelijk.liquid
- hp-09 (`:44`): `sizes: '200px'` wordt `'(min-width: 769px) 160px, 120px'`.
- hp-10 (`:48`): één `sizes` voor drie kaarten. Beter:
  ```liquid
  if forloop.index == 3
    assign sz = '(min-width: 900px) 30vw, 92vw'
  else
    assign sz = '(min-width: 900px) 30vw, 46vw'
  endif
  ```
  Bijvangst: `hp-home.css:2097-2141` stelt de mobiele layout van `:first-child` in, en `:2145-2156` draait die weer om.

#### sections/hp-11-faq.liquid, hp-03, hp-12
- hp-11: alleen `hp-home.css:2196` heeft een `padding`-transitie op `.hp-11-sum` (layout-eigenschap). Laat alleen de achtergrondkleur overgaan. JSON-LD intact laten.
- hp-03 en hp-12: geen eigen bevindingen.

#### Inline `<style>` in alle 12 hp-secties
- 13,8 KB ruw in de HTML, waarvan ca. 5,7 KB gelijk is aan de fallback in `hp-home.css`. Beter: `{% unless s.h2_m == 32 %}--hp-02-h2-k: …;{% endunless %}`, of in de build genereren. Dat scheelt ca. 1 KB gz.

#### sections/header-announcements.liquid, header.liquid, footer.liquid, footer-group.json
- `header-announcements.liquid:67`: `transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;` wordt niet gecomponeerd. Beter: alleen `opacity`, en verborgen slides `inert` geven. Dit is Horizon-kern, dus het wordt bij een thema-update overschreven.
- `header.liquid`: geen dode instellingen. De 7 schijnbaar ongebruikte header-instellingen worden dynamisch gelezen (`section.settings[...]`, `header.liquid:390-439`).
- `footer-group.json`: het blok `payment_icons_D7mcep` rendert 9 inline SVG's (19,5 KB ruw, 7,1 KB gz). Zie top-10 fix 10. Inhoud: de telefoonlink in `text_TxDeYL` wijst naar `mailto:`.

#### Secties die nergens gerenderd worden (51)
Geparsed: alle `templates/**/*.json` (ook de A/B-templates en alternatieve product- en paginatemplates), alle sectiegroepen, `{% section %}` in alle .liquid, en de naam als token in alle .liquid, .json en assets/*.js, in live en werkthema.
- **Niet dood, ondanks de eerste lijst:** `cart-drawer-section` (`snippets/cart-drawer.liquid:118,126` en `assets/component-cart-items.js:75,195`) en `predictive-search` (`snippets/search-modal.liquid:45` en `assets/predictive-search.js:339,380`). Beide worden via de Section Rendering API gebruikt. Laten staan.
- **Horizon-kern, ongebruikt maar beschikbaar in de editor (7)**, met CSS in de blokkerende `styles.css`: quick-order-list (12,6 KB), product-hotspots (8,8 KB), layered-slideshow (6,5 KB; `layered-slideshow.js` laadt toch op elke pagina via `snippets/scripts.liquid:215-219`), collection-links (1,5 KB), footer-utilities (1,2 KB), featured-product (1,0 KB), logo (0,9 KB). Samen 32,5 KB ruw. Advies: de eerste drie plus de scripttag weghalen, als die functies niet gepland zijn. Dat scheelt ca. 28 KB ruw op elke pagina.
- **Eigen secties, dood (31):** onder andere anniversary-banner, gripsocks2-*, hg-ab-anatomie, hi-preorder-promo, hi-wk-promo, legal-more, mvv-5-statement, sh-1 tot en met sh-6, shop-*-strip, shop-hero, shop-size-row, sport-faq/hero/story/teaser, zk-calc/nav/trust. Geen van alle heeft een `{% stylesheet %}`, dus ze kosten de homepage 0 bytes. Samen 194 KB Liquid aan rommel. Ook de assets die alleen door deze secties gebruikt worden, zijn weg te halen: `anniversary-banner.css`, `hi-wk-promo.css/.js`, `sh-page.css`, `sh-page.js`, `sh-extra.css` en `shop-page.css`.
- **hp-05-features en hp-13-footer** zijn dood, maar hun code zit in assets die wél op de homepage laden: `hp-home.css:925-1131` (16,0 KB ruw) en `:2311-2417` (6,3 KB ruw), plus `hp-home.js:528-914` (17,3 KB ruw). **Besparing:** ca. 6 KB gz blokkerende CSS en 6 KB gz JS. Via `build.py`.
- **Section Store-app (`ss-*`), dood (9):** samen 642 KB Liquid, 0 bytes op de homepage. Controleer in de app dat er geen ss-sectie meer is toegewezen (ss-testimonial-8 is wel in gebruik).

#### layout/theme.liquid
- **Dood:** `{% render 'chat-drawer' %}` (`:52`). Er wordt geen Inbox- of shopify-chat-script opgevraagd, dus het element doet niets. Weghalen scheelt ca. 3 KB HTML en 310 B CSS. Bewaar de snippet voor als de Inbox-app ooit aangaat.
- **Dubbel:** twee winkelwagen-drawers. Horizon `cart-drawer` (`:191`) en de Section Store block-cart-embed (`intercept_cart_links: true`) laden allebei.
- **Efficiënter** (`:129-131`, huidig):
  ```liquid
  window.requestAnimationFrame(function () {
    header.style.setProperty('--top-row-height', `${headerTopRow.getBoundingClientRect().height}px`);
  });
  ```
  Beter:
  ```js
  new ResizeObserver(([e]) => {
    header.style.setProperty('--top-row-height', `${e.borderBoxSize[0].blockSize}px`);
  }).observe(headerTopRow);
  ```
  Besparing: 43 ms (mobiel) en 77 ms (desktop) gedwongen reflow.
- **Efficiënter** (`:196-198`): de quick-add-modal rendert op de homepage zonder dat er quick-add-knoppen zijn.
  ```liquid
  {% if settings.quick_add or settings.mobile_quick_add %}
    {% unless template.name == 'index' %}{% render 'quick-add-modal' %}{% endunless %}
  {% endif %}
  ```
  Besparing: `gift-card-recipient-form.js` en de modal-DOM (16,1 KB geserveerd, 5,9 KB overdracht samen met `quick-add.js`).
- **Werkthema loopt achter:** daar ontbreken `assets/hg-deelcode.js` en de `<script src="{{ 'hg-deelcode.js' | asset_url }}" defer>` uit live (`:25`). Het werkthema rendert ook `hi-breadcrumbs` in plaats van `higrip-breadcrumb`.

#### snippets/scripts.liquid
- **Dood op de homepage:** 23 modules zonder bijbehorend element in de DOM (118,5 KB geserveerd, 51,8 KB overdracht), waaronder product-form (21,9 KB ruw), layered-slideshow (11,6 KB), variant-picker (11,4 KB) en quick-add (8,4 KB). `slideshow.js` is wél nodig (de aankondigingsbalk gebruikt het), net als `product-card.js` en de cart-scripts.
- **Efficiënter** (`:155-264`, huidig):
  ```liquid
  <script src="{{ 'variant-picker.js' | asset_url }}" type="module" fetchpriority="low"></script>
  ```
  Beter: de productmodules in één blok `{%- unless template.name == 'index' -%} … {%- endunless -%}`. Laat de importmap (`:20-36`) staan voor dynamische imports. Risico: komt er later een productblok op de homepage, dan moet de guard mee.

#### snippets/theme-styles-variables.liquid + hp-base.liquid:8 (fonts)
- **Dubbel:** Poppins uit twee bronnen met dezelfde family-naam. 400 en cursief 800 komen dubbel binnen.
- **Beter:**
  ```liquid
  {%- assign p = settings.type_body_font -%}
  {{ p | font_modify: 'weight', '300' | font_face: font_display: 'swap' }}
  {{ p | font_modify: 'weight', '600' | font_face: font_display: 'swap' }}
  {{ p | font_modify: 'weight', '900' | font_face: font_display: 'swap' }}
  {{ p | font_modify: 'weight', '900' | font_modify: 'style', 'italic' | font_face: font_display: 'swap' }}
  ```
  Daarna de Google-link schrappen. Besparing: ca. 22 KB dubbele woff2, één font-CSS-request en twee origins vóór de eerste tekst. Cursief 700 en het pijltje (U+2192) zitten dan ook goed.

#### snippets/stylesheets.liquid, hi-headings.css, hi-app-fixes.css, hi-sale-price.css
- 3 kleine render-blocking requests (samen ca. 1,5 KB geserveerd). `hi-app-fixes.css` (EcomSend) is bij het laden 100% ongebruikt. `hi-headings.css:45-52` hoort alleen bij de sportpagina's.
- Beter: samenvoegen in één bestand, of onderaan `base.css` zetten, dat al gepreload wordt. Vervang `#e10600` in `hi-sale-price.css` door `var(--hi-red)`. Lighthouse schat 0 ms FCP-winst, dus lage prioriteit.

#### snippets/search-modal.liquid + predictive-search-empty-state.liquid
- **Efficiënter** (`predictive-search-empty-state.liquid:22-41`): `paginate collection.products by 4` met 6 resourcekaarten, bij elke paginalading. Beter: een lege container renderen en die bij de eerste keer openen vullen via de Section Rendering API (`sections/predictive-search.liquid` bestaat al). Besparing: 74 DOM-nodes en 13,8 KB HTML (2,6 KB gz) per pagina, plus een collectiequery op de server.

#### snippets/header-actions.liquid
- `:88-112`: `<shopify-account>` laadt account.js (10,7 KB) plus submodules en de Shop-font. Reflow 185 ms (PSI desktop) en 333 ms (lokaal mobiel). Beter: een gewone `<a href="{{ routes.account_url }}">`, of het component pas na de eerste interactie laden. Dat kost de snelle-loginpopover, dus het besluit uit de notitie van 29-10 geldt.

#### snippets/hi-collection-schema.liquid
- `:14`: `assign hi_source = collections['gripsokken']` draait op elke pagina, ook op de homepage, terwijl het pas in de page-tak (`:22`) nodig is. Beter: de assign binnen `elsif request.page_type == 'page'` zetten. Dat scheelt een collectie-lookup op de server. JSON-LD intact laten.

#### snippets/meta-tags.liquid, view-transition-opt-in.liquid
- `meta-tags.liquid:17`: `<meta name="theme-color" content="">` is leeg. Vullen of weglaten (cosmetisch).
- `view-transition-opt-in.liquid:18-20`: `<link rel="expect" href="#MainContent" blocking="render">` kan bij interne navigatie naar de homepage het renderen ophouden tot `#MainContent` geparsed is (byte ca. 166K van 348 KB). Niet gemeten; PSI meet een koude lading, waar dit niet speelt.

#### blocks/payment-icons.liquid
- `:23-25`, huidig:
  ```liquid
  {%- for type in shop.enabled_payment_types -%}
    <li class="payment-icons__item">
      {{ type | payment_type_svg_tag: class: 'icon icon--full-color' }}
  ```
  Beter:
  ```liquid
  {%- for type in shop.enabled_payment_types -%}
    <li class="payment-icons__item">
      <img src="{{ type | payment_type_img_url }}" width="38" height="24" loading="lazy" alt="{{ type | replace: '_', ' ' }}">
  ```
  Besparing: ca. 18 KB ruw (6,5 KB gz) HTML en ca. 58 DOM-nodes per pagina. Pas de `.payment-icons__item svg`-selectors aan naar `img`.

#### Header- en footerblokken (Horizon-kern)
- Stock. `_header-menu` rendert twee keer (drawer en desktopnavigatie); dat hoort zo. De `.header__underlay`-style staat twee keer (94 B); niet aanraken. Geen andere bevindingen.

#### snippets/hp-img.liquid
- Alle aanroepen geven `sizes` mee. `src` gebruikt de originele breedte; dat is alleen een fallback, dus geen extra download. Klein punt (`:35`): `decoding="async"` staat ook op het LCP-beeld. Laat dat weg bij `priority`. De winst is niet gemeten.

#### assets/hp-home.css (build van `shopify/build.py`)
- Gemeten tegen 4 DOM-dumps (1.201 regels): 91,5 KB van de regels matcht, 10,4 KB hangt aan JS-staat, **27,9 KB matcht nergens**. 94 regels worden volledig overschreven door een latere regel met dezelfde selector (7,0 KB). 70 selectors staan 3 keer of vaker in dezelfde media-context, bijvoorbeeld `.hp-02-media` 7 keer. Dat zijn opgestapelde versielagen 1.2 tot 1.36.
- **Dood** (klasse komt in geen enkele .liquid, .js of .json voor): `.hp-02-vs*`, `.hp-02-bullets`, `.hp-02-compare__text/__a` (`:312-541`), `.hp-06-panel*` (`:1141-1258`), `.hp-07-chev` (`:1385-1419`), `.hp-08-foot/.hp-08-body` (`:1696-1764`), `.hp-09-logo--spirit…--hr` (`:1944-1950`), `.hp-media` (`:124-125`), `.hp-06.is-cta` (`:1215`). Samen 6,5 KB ruw. Ook dood: `.hp-lightbox*` (`:152-173`, 1,9 KB), want `hpLightbox.open` wordt nergens aangeroepen. `.hp-07-wave/.hp-07-hole` (`:1316-1332`) staat sinds 1.5 op `display: none`.
- **Ongebruikt maar beschikbaar in de editor:** blok 05 (`:925-1131`) en 13 (`:2311-2417`), samen 17,7 KB min en ca. 4,3 KB gzip.
- **Efficiënter:**
  - Critical CSS scheiden in `build.py`: `hp-critical.css` (tokens, basis zonder lightbox, hp-01; ca. 11,8 KB min en 3,6 KB gzip) inline in de head, en `hp-NN.css` per sectie bovenaan die sectie. Een link in de body houdt alleen de inhoud erna tegen, dus de pagina rendert per sectie. Of: `hp-rest.css` asynchroon (`media="print" onload="this.media='all'"` met `<noscript>`).
  - Versielagen platslaan: in `build.py` na het samenvoegen `lightningcss --minify` of `csso --restructure` draaien. Besparing netto ca. 13-19 KB ruw (2-3 KB gzip).
  - `:1578-1585`: `.hp-07-card { will-change: transform; }` houdt permanent ca. 30 compositorlagen open (ook voor de 8 JS-kopieën). Beter: `.hp-07-viewport.is-dragging .hp-07-card, .hp-07-track.is-moving .hp-07-card { will-change: transform; }`.
  - `:95`: `:where(.hp-section) :is(h1,…,details) { all: revert }` draait de regels van `base.css` en `hi-headings.css` terug voor 314 elementen, waarna regel 104 hoofdletters en letterspatiëring opnieuw zet. Het effect op de stijlherberekening is niet gemeten.

#### assets/hp-home.js (build van `shopify/build.py`)
- 68,2 KB ruw, 13,1 KB br, 12 keer ingeladen. Coverage: één exemplaar gebruikt 18,9 KB, de andere 11 alleen 123-425 B. Ongebruikt: 55% (mobiel), 65% (desktop).
- **Dood:** `hpLightbox` (`:229-290` en de export op `:310`, 3,6 KB ruw), want nergens aangeroepen. De kleurgolf in `paint()` (`:1057-1076`): het element is sinds 1.5 onzichtbaar, maar bij elke sportwissel draaien nog 3 `getBoundingClientRect`, 4 style-writes en `void wave.offsetWidth` (een gedwongen reflow). hp-05-blok (`:528-913`, 17,3 KB ruw): geparsed, maar er is geen `[data-hp="05"]`.
- **Efficiënter:**
  - `:294-302`, luie init per sectie. Huidig:
    ```js
    Array.prototype.forEach.call(scope.querySelectorAll(id ? '[data-hp="' + id + '"]' : '[data-hp]'), function (el) {
      var fn = registry[el.getAttribute('data-hp')];
      if (!fn || el.__hpInit) return;
      el.__hpInit = true;
      try { fn(el); } catch (err) { … }
    ```
    Beter:
    ```js
    var lazyIO = 'IntersectionObserver' in window && new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { lazyIO.unobserve(e.target); run(e.target); } });
    }, { rootMargin: '150% 0px' });
    // in initIn: el.__hpInit = true; lazyIO ? lazyIO.observe(el) : run(el);
    ```
    Besparing: 550-650 ms reflow uit de laadtaak op desktop, ca. 120-175 ms op mobiel, en de 721 KB vroege beeldfetches.
  - `:1079-1090` en `:1359-1368`: klonen pas bij naderen.
    ```js
    real.slice().reverse().forEach(function (it) { track.insertBefore(copy(it), track.firstChild); });
    ```
    Beter: dezelfde regels binnen `window.hpInView(root, function () { if (!cloned) { cloned = true; …; drag.refresh(); } }, null, { rootMargin: '100% 0px' })`.
  - `:39-53`, scroll-dispatcher. `hpScrollY()` leest `scrollHeight`, `clientHeight` en `getComputedStyle` en wordt per frame door meerdere secties na elkaars writes aangeroepen. Beter: de scroller één keer (en bij resize) bepalen, `y` één keer per frame lezen en doorgeven. hp-03 (`:468`) en hp-14 (`:1327`) moeten terugkeren als ze niet in beeld zijn.
    ```js
    var scroller = null;
    function detect() { var w = document.querySelector('.page-wrapper'), o = w && getComputedStyle(w).overflowY; scroller = w && (o === 'auto' || o === 'scroll') && w.scrollHeight > w.clientHeight + 1 ? w : false; }
    function hpScrollY() { if (scroller === null) detect(); return scroller ? scroller.scrollTop : window.scrollY; }
    ```
  - `:396-406` (hp-02): `card.offsetTop` cachen bij resize in plaats van per scrollframe na een write te lezen. Besparing: 30-134 ms reflow (lokaal mobiel).
  - `:1266-1295` (hp-08): `rest()` pas bij de eerste `pointerenter` aanroepen en de rustpositie in CSS zetten. Besparing: 151-180 ms reflow (desktop).
  - `:207-208` (`hpDrag`): de dubbele `measure()` bij init schrappen. In hp-07 `:1146-1157` de dichtstbijzijnde kaart uit de gecachete `stops` halen in plaats van 12 keer `getBoundingClientRect` per `pointermove`. Effect op INP is niet apart gemeten.

#### assets/overflow-list.js (Horizon-kern)
- `:287-299` schrijft `flex-wrap`, `order` en `hidden` en leest daarna `getBoundingClientRect` per menu-item: 42-324 ms reflow (lokaal desktop). Op 1440 px loopt het menu met 5 items nooit over. Na fix 1 wordt deze reflow vanzelf goedkoper. Optioneel: in `blocks/_header-menu.liquid:207` `disabled` meegeven bij 5 of minder items. Kern niet aanpassen.

#### compiled_assets/styles.css (405 KB ruw, 51,8 KB br, render-blocking)
- Shopify bundelt alle `{% stylesheet %}`-tags van het hele thema. Op de homepage is 91% ongebruikt.
- (a) **Nergens gebruikt:** 29 bestanden, 58,1 KB ruw (ca. 7,4 KB br). Allemaal Horizon-secties en -blokken die "beschikbaar in de editor" zijn, bijvoorbeeld quick-order-list 12,6 KB, product-hotspots 8,8 KB, layered-slideshow 6,5 KB, disclosures 5,5 KB, comparison-slider 5,2 KB, footer-policy-list 2,4 KB en popup-link 2,2 KB. Weghalen is een keuze, geen fout.
- (b) **Alleen op andere pagina's gebruikt:** 78 bestanden, 187,9 KB ruw (ca. 24 KB br). Makkelijk en zonder Horizon-risico zijn de eigen `hg-ab-*`-secties (9,1 KB ruw): hun `{% stylesheet %}` naar een eigen asset verplaatsen.
- (c) **Op de homepage gerenderd maar pas nodig na interactie:** predictive-search-styles 14,0 KB, quick-add-modal-styles 13,7 KB, cart-products 11,1 KB, cart-disclosure-tooltip 9,4 KB, search-modal 8,8 KB, cart-summary 6,6 KB. Alleen verplaatsen naar losse assets helpt; dat is veel Horizon-kern (L).
- Onzeker: de hp-snippets leveren 134,5 KB aan `{% stylesheet %}` in deze bundel, naast `hp-home.css` (121,5 KB). Mogelijk dubbele regels; niet regel voor regel vergeleken.

#### Dode bestanden thema-breed (geen laadtijd, wel rommel)
- **Snippets, dood:** faq-schema, product-schema, organization-schema, hi-website-schema, hi-breadcrumb-schema (vervangen door de hi-varianten), hg-upload-test, en de 13 `padel-*`-snippets (39,9 KB). Ook `templates/padel-press-bar.liquid`, een kopie van de snippet met een ongeldige templatenaam. Samen ca. 53 KB, 0 B op de homepage.
- **Snippets, niet dood:** `format-price`, `padel-guarantee-strip` en `sock-icon` (in presets van secties), `predictive-search-resource-carousel` (Section Rendering API), en `hg-ab-fd-colors` en `hg-ab-ss-bundle` (via custom_liquid in `templates/page.ab-a/b.json`).
- **Blocks (50):** geen enkele staat in een template of sectiegroep. 13 `ai_gen_block_*` (Sidekick, ca. 134 KB bron, inline style, 0 B runtime). 22 blocks hebben wél `{% stylesheet %}` en kosten samen 25,5 KB ruw in `styles.css` op elke pagina. Alleen comparison-slider, popup-link en disclosures zijn veilig weg te halen; de rest is Horizon-kern.
- **Assets, dood (geen enkele verwijzing):** `hp-urltest.webp` (113 KB), `product-sticky-atc.js`, drie Horizon-iconen en dev-bestanden (`*.d.ts`, `jsconfig.json`, `package.json`). Samen ca. 123 KB plus 30 KB aan types. Niet dood, ook al lijkt het zo: `hg-survey-*.jpg` en `about-kid-*.jpg` (naam wordt dynamisch opgebouwd).
- **App-restcode:** de Bundler-blocks in `templates/product.json:15-16, 229-233` en in de productvarianttemplates; de 9 ongebruikte `ss-*`-secties (642 KB Liquid).

#### Samenvatting besparing per bestand (schatting)

| Bestand | Dood | Dubbel | Efficiënter | KB-winst op de homepage |
|---|---|---|---|---|
| `snippets/hp-base.liquid` | - | 11 extra stylesheets en scripts | 1× in de head | 7,9 KB ruw HTML; -3,7 s TBT desktop |
| `assets/hp-home.css` | 6,5 KB + lightbox 1,9 KB + wave 1,2 KB; hp-05/13 17,7 KB min | overschreven lagen 7,0-12,7 KB | critical split | ca. 16 KB br minder blokkerend |
| `assets/hp-home.js` | lightbox 3,6 KB, golf 1,0 KB, hp-05 17,3 KB ruw | 11 extra uitvoeringen | luie init, één scrollY per frame | ca. 4 KB br; 550-650 ms reflow desktop |
| `snippets/scripts.liquid` + quick-add-modal | 23 modules zonder element | - | guard op index | tot 51,8 KB overdracht |
| `blocks/payment-icons.liquid` | - | - | lazy `<img>` | 6,5 KB gz HTML |
| `predictive-search-empty-state.liquid` | - | - | vullen bij openen | 2,6 KB gz HTML, 74 nodes |
| `compiled_assets/styles.css` | 58,1 KB ruw onbereikbaar | - | interactie-CSS verplaatsen | tot 7,4 KB br (a) |
| `theme-styles-variables` + Google Fonts | - | 400 en 800i dubbel | één bron | ca. 22 KB woff2 |
| `layout/theme.liquid` | chat-drawer 3 KB | twee cart drawers | ResizeObserver | 3 KB HTML; 43-77 ms reflow |
| hp-sectiebestanden | dode CSS/markup ca. 4 KB | breedteladders | posters, `sizes` | 222 KB + 92 KB beeld (mobiel) |

### 7. Niet gemeten of onzeker

**Niet gemeten**
- INP in het veld: niet gemeten. CrUX heeft geen data, niet voor de pagina en niet voor de origin (te weinig verkeer). TBT is alleen een labbenadering.
- PSI-API: niet gemeten (HTTP 429, dagquotum op). PSI is via de webinterface gedraaid, één run per profiel.
- CSS-coverage op desktop: niet gemeten. Met het bijhouden van regelgebruik liep de desktoppagina vast door de aanhoudende stijlherberekening. De desktopmeting is daarom zonder CSS-coverage gedaan.
- Beelden van hp-04 en hp-10 op desktop: niet gemeten, ze laadden niet tijdens de snelle scroll.
- Grootte van de lichte video (`data-src-lo`): niet gemeten.
- KB-besparing van een `sizes`-fix: niet gemeten. Alleen de verspillingsfactor en de huidige KB zijn gemeten.
- Effect van `all: revert` (`hp-home.css:95`) op de stijlherberekening, en van de view-transition-blocker bij interne navigatie: niet gemeten.

**Onzeker**
- **Lokale Lighthouse is te traag.** De benchmarkIndex was 731 tot 882. Daardoor zijn TBT en LCP lokaal op mobiel (4× CPU-vertraging) veel hoger dan in PSI. De lokale cijfers zijn alleen bruikbaar als richting.
- **Het experiment op mobiel geeft geen uitsluitsel.** Eén run (A, ronde 0) gaf overal 0, en de overige runs lagen dicht bij elkaar (TBT-proxy 0 tot 97 ms). Desktop is wel eenduidig en past bij PSI: Style & Layout was 9.095 ms op desktop tegen 982 ms op mobiel.
- **Werkthema en fix 1.** Variant D bootst het werkthema na: fonts en CSS één keer, scripts nog 12 keer. Desktop, 3 runs: de TBT-proxy daalde van 3.753 naar 85 ms (bereik 67 tot 547). De stijlherberekening daalde van 7.068 naar 2.739 ms. Met alles één keer (variant B) was het 44 ms en 1.994 ms. De CSS-dubbeling is dus de hoofdzaak; het werkthema pakt die al aan. Wel loopt het werkthema achter op live, want het mist `hg-deelcode.js`.
- **Waarom de carrouselkopieën direct laden.** De CDP-stack wijst eenduidig naar `copy()` (hp-07) en de kloonlus van hp-09. In een losse testpagina laadde een gekloonde `lazy`-afbeelding echter niet direct, ook niet met `src` vóór `loading`. Het precieze mechanisme is daarom niet vastgesteld. De fix werkt hoe dan ook: pas klonen bij naderen.
- **Welk winkelwagen-drawer opent:** Horizon of Section Store. Niet getest, omdat klikken op de live site buiten een read-only meting valt. Dat bepaalt welke van de twee weg kan.
- **T Lab Translation:** niet nagegaan of de vertaalfunctie nodig is naast de eigen landen- en taalkeuze van Horizon.
- **Clarity:** de embed rendert alleen lege regels en er gaat geen request uit. Of er geen project-ID is ingevuld of dat Clarity pas na cookietoestemming laadt, is niet vastgesteld.
- **A/B-pagina's** `page.ab-a/b`: niet nagegaan of de Essential-test nog loopt. Zo nee, dan kunnen `hg-ab-fd-colors` (18,8 KB), `hg-ab-ss-bundle` (71 KB), beide templates en de Essential-embed weg.
- **Onbekende fontaanroep** `Poppins:wght@400;600;700` (initiator `about:client`): niet uit het thema, de bron is onbekend.
- **Dode code** is alleen zo genoemd na controle op render, include, sectieverwijzing en JS-verwijzing in alle templates, groepen en assets van live en werkthema. `cart-drawer-section` en `predictive-search` stonden eerst als onbereikt, maar worden via de Section Rendering API gebruikt. Ze zijn dus **niet** dood. `blocks/logo` stond als gerenderd, maar de logo-blocks van hp-09 zijn sectie-eigen blocks. De `ss-*`-secties beheert de Section Store-app: controleer in de app dat er geen ss-sectie meer is toegewezen voordat ze weggaan.
- **hp-14 uitsnede:** de verhouding van de blokken op desktop is niet gemeten. Een vaste crop kan daar het focuspunt breken.
- **Productmodules weglaten op index:** Horizon kan via de Section Rendering API later productelementen invoegen, bijvoorbeeld in het cart drawer. Test eerst op een niet-live thema.
- **Bytes per bestand in `styles.css`** zijn schattingen, want het gecompileerde bestand heeft geen bestandsmarkeringen. De hp-snippets leveren 134,5 KB aan `{% stylesheet %}` naast `hp-home.css`; mogelijk dubbele regels, niet regel voor regel vergeleken.

## Wat niet lukte
De dashboardsync (procedure B) en het publiceren van het dashboard lukten niet. Het Research Dashboard is gedeeld vanuit het info@-account, en dit account mag de database niet lezen of schrijven. Publiceren moet daarom vanaf info@. De PSI-API gaf HTTP 429 (dagquotum op); PSI is daarom via de webinterface gedraaid. CrUX heeft geen velddata, dus INP is niet gemeten. Op desktop hing de CSS-coverage, dus die meting is zonder coverage gedaan. Het experiment op mobiel gaf geen uitsluitsel. Lokale Lighthouse draaide op een trage machine (benchmarkIndex 731 tot 882).

## Bronnen
- PageSpeed Insights (webinterface, Lighthouse 13.6), mobiel en desktop, 30-10-2026
- Lighthouse 12.8.2 lokaal, 3 runs per profiel (mobiel met 4G- en 4× CPU-vertraging, desktop)
- Eigen metingen met puppeteer-core en het Chrome DevTools Protocol: alle requests, JS- en CSS-coverage, beeldmaten (bestanden opnieuw opgehaald en met PIL uitgelezen), initiator-stacks en traces
- Experimenten met lokaal geserveerde HTML-varianten: A/B/C en A/B/D op desktop, A/B/C op mobiel, elk 3 runs
- Live thema 202669916487, read-only gepulld na `shopify theme list`; werkthema `C:\Users\Test\Werk\theme-snelheid\werkthema` (alleen gelezen)
- Code-review door drie subagents (secties, snippets/blocks/layout, assets): 70 + 172 bestanden plus 11 assets in detail en 201 assets gescand op dode code
- Bestaande acties over EcomSend, FD/Bundler/Essential, het Shop-accounticoon en het live zetten van het werkthema: [[2026-10-29-ads-funnel-en-snelheid-productpagina]]

## Aantekeningen
