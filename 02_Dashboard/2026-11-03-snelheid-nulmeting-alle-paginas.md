---
id: 2026-11-03-snelheid-nulmeting-alle-paginas
titel: "Snelheid higrip.nl: nulmeting op alle paginatypes"
kerntitel: "Echte bezoekers zitten in het groen; het lab laat ~860 KB JS op elke pagina zien"
datum: 2026-11-03
bron: los
routine: ""
categorie: Techniek
status: nieuw
prioriteit: P1
samenvatting: "Echte bezoekers zitten op alle paginatypes al in het groen (Shopify-velddata, 30 dagen: LCP p75 mobiel 1,1 tot 1,5 s, INP onder 115 ms), maar in het lab (trage telefoon, 4G) laadt elke pagina 1,9 tot 2,8 MB met ~860 KB JavaScript en scoort mobiel 41 tot 58. Die JavaScript zit op elke pagina: Shop-login, EcomSend, Section Store en Shopify zelf; de grootste winst voor de hele site zit dus in apps en scripts, niet in losse pagina's."
gerelateerd: [2026-10-30-snelheid-code-audit-homepage, 2026-10-29-ads-funnel-en-snelheid-productpagina, 2026-11-03-snelheid-werkthema-02]
vervangt: []
bronbestand: ""
deadline: ""
---
# Snelheid higrip.nl: nulmeting op alle paginatypes

> Map: [[Waar staat wat]]

## In het kort
Fase 0 van het snelheidsplan: een nulmeting van de hele site, zodat elke volgende stap ergens tegen gemeten kan worden. Twee bronnen. De velddata van Shopify (echte bezoekers, via ShopifyQL `FROM web_performance`) laat zien dat de site voor bezoekers al snel is: alle paginatypes zitten onder de Google-grenzen. Het lab (Lighthouse 12.8.2, 3 runs per pagina, mobiel en desktop, live thema `203461034311`) laat een ander beeld zien: elke pagina laadt 1,9 tot 2,8 MB en ~860 KB JavaScript, en dat bedrag is bijna gelijk op een contactpagina en een productpagina. De rekenkosten zitten dus in wat op elke pagina meekomt: de Shop-login in de header (~270 KB, ~1 s rekentijd mobiel), EcomSend (~300 KB), de winkelwagen van Section Store (97 KB, 0,6 tot 1,2 s) en Shopify's eigen scripts. Het lab telt vooral voor de eerste klik uit een advertentie op een trage telefoon, waar volgens [[2026-10-29-ads-funnel-en-snelheid-productpagina]] 60% afhaakt.

Er is niets live gezet. Het snelheidswerk zelf gebeurt in WERKTHEMA 02 (`203928076615`), zie [[2026-11-03-snelheid-werkthema-02]]. Deze notitie is de nulmeting waartegen dat werk gemeten wordt. Een eerder testthema uit deze sessie is daardoor overbodig (zie Bevindingen 5).

## Kerncijfers
- **1,1-1,5 s** · LCP p75 mobiel bij echte bezoekers (Shopify, 30 dagen) · grens goed is 2,5 s
- **~860 KB** · JavaScript per pagina in het lab, op elk paginatype gelijk
- **41-58** · Lighthouse-score mobiel (lab, 11 paginatypes)
- **~270 KB** · Shop-login per pagina (account.js, shop-js, GTStandard-font), ~1 s rekentijd mobiel

## Acties
- [ ] P2 · Besluit: testthema SNELHEID TEST 2026-11-03 (203928011079) verwijderen, nu WERKTHEMA 02 het enige snelheidsthema is
- [ ] P2 · In WERKTHEMA 02: Poppins op de homepage alleen via Shopify font_face (300, 600, 900 en 900 cursief erbij via font_modify) en de Google Fonts-link van het thema schrappen; uitgewerkt en getest in 203928011079
- [ ] P3 · In WERKTHEMA 02: hi-sale-price.css, hi-headings.css en hi-app-fixes.css samenvoegen tot één hi-site.css en de actieprijs op var(--hi-red) zetten
- [ ] P2 · cwv.json op het dashboard vullen uit Shopify `FROM web_performance` (lcp_p75_ms, inp_p75_ms, cls_*_view_count per page_type) in plaats van de PageSpeed-API die op 429 staat
- [ ] P2 · Homepage-build (06_Website_Agent/Homepage-prototype/shopify) bijwerken met de fixes die direct in het thema staan (hp-04, hp-06, hp-07, hp-08, hp-base, hp-home.js), anders draait de volgende build ze terug
- [ ] P2 · Productpagina 2.0 apart doorlichten: hoogste FCP van de site (3,5 s mobiel lab) en LCP 5,7 s
- [ ] P3 · Blogoverzicht: 612 KB beeld op mobiel bij binnenkomst, kaartbeelden en sizes nalopen
- [ ] P3 · Nagaan of de Shopify-cookiebanner sneller kan renderen: hij is het LCP-element op winkelwagen en contact (7,0 tot 7,4 s mobiel lab)

## Bevindingen
### 1. Velddata: echte bezoekers zitten al in het groen
ShopifyQL `FROM web_performance`, laatste 30 dagen, p75. Grenzen: LCP 2,5 s, INP 200 ms, CLS 0,1.

| Paginatype | LCP mobiel | LCP desktop | INP mobiel | INP desktop | CLS goed/totaal |
|---|---|---|---|---|---|
| Homepage | 1,50 s | 1,63 s | 88 ms | 114 ms | 20/20 |
| Product | 1,07 s | 2,11 s | 96 ms | 112 ms | 18/21 |
| Collectie | 1,49 s | 0,87 s | 56 ms | 88 ms | 7/7 |
| Pagina | 1,27 s | 1,13 s | 88 ms | 66 ms | 12/12 |

Trend LCP p75 desktop: augustus 3,2 s, september 1,3 s, oktober 1,4 s, november 1,2 s. Mobiel: 1,7 → 1,4 → 1,2 → 1,1 s.

Kanttekening: dit zijn ~200 gemeten paginaweergaven in 30 dagen, dus één trage bezoeker verschuift de p75 al. CrUX (Google) heeft voor higrip.nl nog steeds te weinig data.

### 2. Lab: elke pagina draagt dezelfde last
Lighthouse 12.8.2, mediaan van 3 runs, `www.higrip.nl`, live thema 203461034311, 3 november 2026 tussen 22:00 en 23:05. Mobiel = Moto G Power-simulatie met 4× CPU-vertraging en traag 4G. De lokale machine is trager dan de PageSpeed-servers (zie [[2026-10-30-snelheid-code-audit-homepage]]), dus TBT is hier te hoog; als richting en voor vergelijking voor/na zijn de cijfers bruikbaar.

| Pagina | Score m/d | LCP m | FCP m | TBT m | LCP d | TBT d | KB m | JS KB | Requests | DOM |
|---|---|---|---|---|---|---|---|---|---|---|
| Homepage | 41/73 | 6,8 s | 2,9 s | 3.558 | 0,9 s | 499 | 2.696 | 866 | 331 | 1.391 |
| Product 1.0 | 52/82 | 4,0 s | 2,8 s | 2.891 | 1,1 s | 314 | 2.150 | 857 | 329 | 1.857 |
| Product 2.0 zwart | 42/74 | 5,7 s | 3,5 s | 2.136 | 1,1 s | 428 | 2.276 | 884 | 334 | 1.878 |
| Collectie | 43/91 | 5,4 s | 2,5 s | 2.685 | 1,0 s | 175 | 2.075 | 852 | 324 | 1.425 |
| Winkelwagen | 42/85 | 7,4 s | 2,1 s | 4.233 | 0,7 s | 305 | 2.000 | 821 | 305 | 967 |
| Blogoverzicht | 58/91 | 3,4 s | 2,2 s | 2.925 | 0,9 s | 206 | 2.349 | 790 | 289 | 936 |
| Blogartikel | 52/84 | 4,4 s | 2,4 s | 1.873 | 1,8 s | 246 | 2.128 | 879 | 314 | 886 |
| Sportpagina (padel) | 42/76 | 6,3 s | 2,5 s | 2.127 | 1,3 s | 414 | 2.442 | 847 | 317 | 1.035 |
| Zakelijk | 44/72 | 5,5 s | 2,4 s | 3.496 | 0,8 s | 575 | 2.305 | 827 | 307 | 1.357 |
| FAQ | 58/90 | 3,5 s | 2,4 s | 1.859 | 1,3 s | 172 | 2.069 | 867 | 314 | 982 |
| Contact | 45/85 | 7,0 s | 2,3 s | 2.232 | 1,1 s | 276 | 1.925 | 885 | 314 | 951 |

CLS is overal goed (0,001 tot 0,030). Product 2.0 mobiel heeft 2 geldige runs in plaats van 3. De 404-pagina meet Lighthouse niet (de pagina geeft zelf status 404).

LCP-element mobiel: hero-foto (homepage), productfoto (product, collectie), blogbeeld (blog, artikel), hero (sport, zakelijk), en op winkelwagen en contact de tekst van de Shopify-cookiebanner (`#shopify-pc__banner`).

### 3. Waar de rekentijd zit (mobiel, mediaan per pagina)
KB = overdracht, ms = main-thread-tijd volgens Lighthouse `bootup-time`.

| Bron | KB per pagina | Rekentijd per pagina | Op elke pagina? |
|---|---|---|---|
| Shopify-platform (checkout-prefetch, trekkie, perf-kit, wallets) | ~760 | 0,66-1,0 s | ja, niet via het thema aan te passen |
| EcomSend (e-mailpopup) | ~301 | 0,59-0,79 s | ja |
| Shop-login (account.js, shop-js, login-form, GTStandard-font 63 KB, Shop Pay-notifier) | 167-299 | 0,70-1,56 s | ja |
| Section Store (block-cart.js) | ~97 | 0,62-1,22 s | ja |
| Web Pixels Manager + pixels | ~91 | 0,65-0,99 s | ja |
| Shoplift (A/B) | ~63 | klein | ja |
| Google Fonts | 25 (95 op de homepage) | - | ja, deels via de @import van EcomSend |
| T Lab Translation, SEOAnt | 2-7 | verwaarloosbaar | ja |
| HTML en inline scripts | 107-717 | 3,0-8,4 s* | ja |

\* Inclusief scriptevaluatie en layout die Lighthouse aan het document toeschrijft. Op de homepage het hoogst door hp-home.js en de secties.

Correctie op [[2026-10-30-snelheid-code-audit-homepage]]: het bestand van 63 KB onder `static_uploads/shoplift/` is het GTStandard-font van de Shop-login, niet de A/B-app Shoplift.

### 4. Extra landingspagina's (indicatief)
Eén run per pagina, gemeten terwijl een andere sessie tegelijk Lighthouse draaide, dus alleen als indicatie:
- `/pages/gripsokken-2-1` (70 sessies in 30 dagen): mobiel score 41, LCP 6,8 s, TBT 3.656 ms, 2.371 KB; desktop score 69, LCP 2,0 s.
- `/en` (28 sessies): mobiel score 54, LCP 3,8 s, TBT 3.679 ms, 2.550 KB.

### 5. Testthema 203928011079 is overbodig
In deze sessie is eerst een eigen testthema gemaakt (`SNELHEID TEST 2026-11-03`, `203928011079`, unpublished, lokale git-kopie `C:\Users\Test\Werk\theme-snelheid\testthema`) met vijf fixes: productmodules niet op de homepage, Poppins via Shopify `font_face`, `hi-site.css`, betaaliconen als lazy `<img>` en gecorrigeerde `sizes` in hp-02, hp-09 en hp-10. Alles is getest in de preview zonder consolefouten. Tegelijk bleek een tweede sessie WERKTHEMA 02 te bouwen met een bredere set (zie [[2026-11-03-snelheid-werkthema-02]]). Afgesproken: WERKTHEMA 02 is het enige werkthema. De twee fixes die daar nog niet in zitten (fonts en `hi-site.css`) staan bij de acties. Let bij de fonts op: Liquid staat geen filter in de kop van een `for` toe (eerst `assign`), en `shopify theme push` meldt zo'n fout alleen als "pushed with errors".

Meetvalkuil voor elke voor/na-meting: een unpublished preview krijgt geen Early Hints en soms wel en soms niet de preview-balk (~585 KB). Vergelijk daarom basis en geoptimaliseerd op hetzelfde thema-ID en blokkeer `*preview-bar*`, `*theme-hot-reload*` en `*shopifyinter*`. Draai nooit twee Lighthouse-metingen tegelijk op deze machine (4 kernen). De A/B-meting live tegen 203928011079 is om die redenen gestopt.

## Wat niet lukte
De PageSpeed Insights-API geeft nog steeds 429, daarom is lokaal gemeten. De 404-pagina meet Lighthouse niet. De dashboard-sync (stap B) en publicatie kunnen niet vanaf het persoonlijke account, want het dashboard is van info@. De Shopify-connector van de small-business-plugin vroeg om opnieuw inloggen, maar de tweede Shopify-connector werkte.

## Bronnen
- Lighthouse-JSON en samenvatting: lokaal in de scratchpad van sessie "Website performance optimization" (65 runs).
- ShopifyQL: `FROM web_performance SHOW lcp_p75_ms, inp_p75_ms, ... GROUP BY page_type, device_type SINCE -30d`.
- Sessies per landingspagina, 30 dagen: `/` 1.000, `/password` 124, product 2.0 wit 94, product 2.0 zwart 85, `/pages/gripsokken-2-1` 70, product 1.0 28, `/en` 28. Apparaat: desktop 1.129, mobiel 398, tablet 42 (desktop deels botverkeer, zie [[2026-10-29-ads-funnel-en-snelheid-productpagina]]).

## Aantekeningen
