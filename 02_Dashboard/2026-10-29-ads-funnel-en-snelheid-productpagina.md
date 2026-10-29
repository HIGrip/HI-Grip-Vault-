---
id: 2026-10-29-ads-funnel-en-snelheid-productpagina
titel: "Ads-funnel en snelheid productpagina — 0 sales uit 288 klikken"
kerntitel: "Van 288 adklikken komen er 116 aan: de productpagina laadt op mobiel te traag"
datum: 2026-10-29
bron: los
routine: ""
categorie: CRO
status: nieuw
prioriteit: P1
samenvatting: "De grootste lek in de ads-funnel zit vóór de productpagina: van 288 linkklikken worden er maar 116 landingspaginaweergaven, omdat de pagina op mobiel 5–8 s nodig had voor de hoofdfoto. In WERKTHEMA is de Lighthouse-score van 35–38 naar 52–54 gegaan en de hoofdfoto van ~6,2 s naar ~3,1 s; 90+ is op Shopify met ads-tracking niet haalbaar (zelfs zonder apps en tracking 57–68), dus het doel wordt 65–75 plus groene Core Web Vitals bij echte bezoekers."
gerelateerd: [2026-10-25-ab-test-ads-features-vs-beste, 2026-10-25-ads-onderzoek-bewezen-grip-sock-ads, 2026-09-03-analytics-kpi-meetgat, 2026-10-19-regressiecheck]
vervangt: []
bronbestand: "C:\\Users\\Test\\Werk\\theme-snelheid\\werkthema"
deadline: ""
---
# Ads-funnel en snelheid productpagina — 0 sales uit 288 klikken

> Map: [[Waar staat wat]]

## In het kort

De Meta-ads (A/B-test, zie [[2026-10-25-ab-test-ads-features-vs-beste]]) gaven 288 linkklikken, 5 keer toevoegen aan winkelwagen en 0 verkopen. De grootste lek zit vóór de pagina: maar 116 van de 288 klikken (40%) worden een landingspaginaweergave. Mensen haken af terwijl de productpagina laadt. Die laadde op mobiel traag: score 35–38, hoofdfoto na 5–8 s.

In WERKTHEMA (`203461034311`, zie [[Technische Procedures]]) is de pagina sneller gemaakt. De Visually-SDK is eruit, CSS laadt niet meer dubbel, de galerij laadt alleen de eerste foto direct, de testimonial-slider laadt pas bij scrollen en FD Product Groups is vervangen door een eigen kleurkeuze. Bundler en Essential A/B staan uit. Live is niet aangeraakt.

Voor 90+ is de pagina zelf niet meer het grootste probleem. Het zijn de app-widgets en de scripts van Shopify die de hoofdthread bezet houden. Zelfs zonder apps en tracking scoort de pagina 57–68, dus 90+ is op Shopify niet realistisch. Het doel wordt 65–75 en groene Core Web Vitals bij echte bezoekers.

## Kerncijfers
- **116 / 288** · Landingspaginaweergaven / linkklikken (Meta) · 40%
- **52–54** · Lighthouse mobiel WERKTHEMA · live 35–38
- **~3,1 s** · Hoofdfoto zichtbaar (LCP, gesimuleerd) · live ~6,2 s
- **60/s** · Layouts in rust door de glans-animatie van de Section Store-bundel

## Acties
- [ ] P1 · Besluit: WERKTHEMA (203461034311) live zetten na controle van de productpagina's
- [ ] P1 · Na 3 november 10:00: ad set dupliceren met conversie-event "Content bekijken" in plaats van "Betaalproces starten"
- [ ] P1 · Glans-effect (shine) op het badge van de Section Store-bundel uitzetten in de app-instellingen
- [ ] P2 · Besluit: bundelwidget van Section Store vervangen door een eigen Liquid-bundelkeuze
- [ ] P2 · EcomSend-popup pas na interactie of na 10 s laden, of vervangen door Shopify Forms
- [ ] P2 · FD Product Groups, Bundler en Essential A/B Testing ook in de Shopify-admin verwijderen
- [ ] P2 · GA4 koppelen op alle thema-versies zodat landingspagina-cijfers kloppen
- [ ] P2 · DOM van de productpagina verkleinen (nu ~2.200 elementen): vooraf geladen zoekresultaten, menu- en drawer-inhoud pas bij openen laden
- [ ] P2 · Besluit: account-icoon met Shop-login in de header vervangen door een gewone link naar /account
- [ ] P3 · Kleurswatches op productkaarten in collecties terugbouwen (vielen weg met FD Product Groups)

## Bevindingen

### Funnel: de lek zit vóór de pagina
- 288 linkklikken → 116 landingspaginaweergaven → 5 add-to-carts → 0 verkopen.
- De campagne optimaliseert op "Betaalproces starten" en dat event had 0 resultaten, dus Meta heeft geen signaal om op te leren. Tijdens de A/B-test is het event vergrendeld; na afloop (3 november 10:00) dupliceren met "Content bekijken".
- De UTM-parameters (`utm_source={{site_source_name}}&utm_medium=paid_social&utm_campaign={{campaign.name}}&utm_id={{campaign.id}}&utm_content={{ad.name}}`) zijn goed.
- GA4 (zie [[2026-09-03-analytics-kpi-meetgat]]) telt te laag: niet op alle thema-versies gekoppeld. Shopify toont daarnaast botverkeer uit Council Bluffs.
- De 3-pack staat bewust als standaard; in de winkelwagen staat al "€X tot gratis verzending".

### Snelheid: wat er in WERKTHEMA is aangepast
- Visually/Loomi-SDK verwijderd (120 KB inline JavaScript in de head).
- `overflow-list.css`, `base.css` en `hi-sale-price.css` laadden halverwege de pagina opnieuw in zes sjablonen; weggehaald. `product-improvements.css` laadt nu in de head.
- Homepage: fonts en `hp-home.css` laadden 12 keer; nu één keer.
- Productgalerij: alleen de eerste foto `eager`, de rest `lazy` (Horizon-kernbestand `product-media-gallery-content.liquid`, na een Horizon-update opnieuw doen).
- Testimonial-slider (Section Store): Swiper-CSS niet meer blokkerend, script pas laden en starten vlak voor de slider in beeld komt.
- Icoontjes in `ss-scrolling-features` laadden op volle grootte; nu 96 px.
- FD Product Groups vervangen door `snippets/hi-color-switch.liquid` (gewone links, geen app-script). Bundler-blokken en de embeds van FD, Bundler en Essential A/B uit.
- Logo's in de trust-marquee laadden 832 px-versies voor 52–80 px; `icon-or-image.liquid` gebruikt nu de ingestelde breedte.

### Metingen (mobiel, 3 runs per thema)
- Gesimuleerd (Lighthouse-standaard): live 37/36/38, LCP ~6,2 s; WERKTHEMA 52/53/53, LCP ~3,1 s.
- Met echte vertraging: live FCP 3,6–4,2 s, LCP 4,0–4,8 s, TTI 29,5 s (twee keer niet gehaald); WERKTHEMA FCP 2,9 s, LCP 3,4–3,5 s, TTI ~19 s.
- De blokkeertijd (TBT) is niet gedaald en bepaalt nu de score: TBT weegt 30% en scoort 0.

### Waarom nog geen 90+
- Lighthouse rekent met een trage telefoon (4× vertraagde processor). Een score van 90 vraagt TBT onder ~200–300 ms; nu is het 4–8 s.
- **Glans-animatie Section Store-bundel:** het badge animeert `left`, wat 60 keer per seconde een layout van de hele pagina forceert, ook in rust. Uitgezet: van 179 naar 3 layouts per 3 s. Zit in de shadow DOM van de app; het thema kan er niet bij.
- **Scripts per bron (bootup):** EcomSend 1,4 s, Section Store cart-blok 1,0 s, Section Store bundel 0,8 s, Shopify wpm 1,0 s, Shopify perf-kit 1,0 s, shop-js 0,6–0,8 s, trekkie 0,4 s. EcomSend geeft de langste taak (1,2 s).
- **Speed Index 11 s** komt mede door de EcomSend-popup die laat over de pagina valt.

### Plafondmeting: wat 90+ kost
Lighthouse mobiel op WERKTHEMA, 2 runs per variant, met geblokkeerde scripts om het effect van weghalen te meten:

| Variant | Score | LCP | TBT |
|---|---|---|---|
| Zoals nu | 47–51 | 3,6–4,6 s | 2,7–3,7 s |
| Zonder Section Store en EcomSend | 53–60 | 3,0–3,9 s | 2,0–2,4 s |
| Ook zonder Shopify-tracking (wpm, trekkie, perf-kit, shop-js) | 57–68 | 2,9–3,5 s | 1,0–2,0 s |

- Zelfs de kale variant haalt geen 90. Wat dan nog blokkeert, is Horizon zelf: ~2.200 DOM-elementen (3,2 s stijl en layout), de account-/inlogcomponenten van Shopify in de header (`login-form.js`, `account.js`, met oneindige laadanimaties), de `es-modules-shim`-polyfill en de inline scripts van het thema.
- Tracking (wpm = Meta-pixel en analytics) weghalen is geen optie: dan meet je de ads niet meer.
- **Conclusie:** 90+ in Lighthouse mobiel is voor deze productpagina op Shopify met ads-tracking niet haalbaar. Realistisch doel: 65–75 in Lighthouse en groene Core Web Vitals bij echte bezoekers (LCP < 2,5 s, INP < 200 ms, CLS < 0,1). Die veldcijfers gebruikt Google en die bepalen of een adklik de pagina haalt.

## Wat niet lukte
- Synchroniseren met en publiceren van het Research Dashboard: het dashboard is van info@ en dit account heeft geen schrijfrechten. Wordt bij de volgende routine-run bijgewerkt.
- PageSpeed Insights-API: quotum op (HTTP 429), daarom lokaal gemeten met Lighthouse 12.6.0. De gesimuleerde modus gaf steeds "Lantern cycle"-fouten; daarom ook gemeten met echte vertraging.

## Bronnen
- Meta Ads Manager (screenshots van de gebruiker), Shopify Analytics, GA4 property 476032345.
- Lighthouse 12.6.0, lokaal; rapporten in de sessie-scratchpad.
- Thema-werkkopie met git-historie: `C:\Users\Test\Werk\theme-snelheid\werkthema`.
- Preview: https://hi-grip.myshopify.com/products/performance-gripsokken-2-0-zwart?preview_theme_id=203461034311

## Aantekeningen
