---
type: cro-analyse
status: concept
agent: Conversie & Analyse Agent
datum: 2026-11-26
pagina: Performance Gripsokken 2.0 zwart en wit (NL)
live: nee, alleen signaleren en voorstellen
---

# CRO productpagina 2.0 (voor de herontwerp v2.0)

> Map: [[06 Website Agent — Index]]

Alleen signaleren en voorstellen. Niets is geïmplementeerd, gepusht of gepubliceerd. Uitvoering loopt via de genoemde sub-agent en de Goedkeuringsworkflow (Team HÏ Grip zet live).

## 0. Bronnen en wat niet lukte

| Bron | Status |
|---|---|
| GA4 property 476032345, eigen read-only queries via de servicesleutel van `02_Dashboard/_tools/google_data.py` | Gelukt. 28 dagen: 29-10 t/m 25-11-2026. 90 dagen: 28-08 t/m 25-11-2026 (de 2.0-pagina's krijgen pas sinds week 38 verkeer). |
| Shopify Analytics | Niet zelf opgehaald in deze sessie. Shopify-cijfers komen uit [[2026-11-23-seo-conversietest-run-9]] (17-23 nov). Pack-verdeling 1/3/5 en orders per product zijn daardoor niet vast te stellen: **[CHECK Shopify]**. |
| Live HTML van de productpagina's | **Niet gelukt.** curl geeft op /products/... en /collections/... HTTP 429 (local_rate_limited, ook na 45 s wachten, ook op de .js); de homepage en /pages/gripsokken-voetbal laden wel. WebFetch werd geblokkeerd door een domeinveiligheidscheck. De Website Copy Agent had hetzelfde probleem (zie [[COPY]] §0). De paginastructuur komt uit het werkthema (templates/product.performance-grip-socks-2.json, snippets/hi-bundle.liquid, laatste commit 29-10-2026) en uit het Copy-audit. Observaties uit het thema zijn gemarkeerd **[TPL]**: live niet bewezen identiek. Herhaal de pagina-audit zodra de rate limit weg is. |
| PageSpeed Insights | Dagquotum op (HTTP 429, zelfde als _data/cwv.json). Geen eigen snelheidscijfers geschat; geciteerd uit [[2026-11-03-snelheid-nulmeting-alle-paginas]]. |
| Scrolldiepte | Alleen het standaard GA4-event scroll (eenmalig, bij 90%). Geen 25/50/75%. |
| Heatmaps, sessie-opnames, maat- en pack-events | Bestaan niet in de meting. |

**Meetkwaliteit (W11).** Het productverkeer is in 28 dagen 507 NL-sessies (+26 EN). Boven de 100 sessies per week zit het alleen in week 44, 47 en 48 van de afgelopen 11 weken. Alles hieronder is indicatief: geen trend en geen bewezen winnaar. Er zit botverkeer in Direct (wit: 19 sessies, 10,5% engagement). Er is een tegenstrijdigheid tussen GA4 en Shopify (zie 1.5).

## 1. Kerncijfers (GA4, property 476032345; 28 dagen = 29-10 t/m 25-11-2026, 90 dagen = 28-08 t/m 25-11-2026)

| Meting | 28 dagen | 90 dagen |
|---|---|---|
| Sessies 2.0 zwart / wit (NL) | 220 / 287 | 318 / 377 |
| Sessies 2.0 EN (zwart + wit) | 26 | 43 |
| Engagement rate zwart / wit | 66,8% / 48,1% | 65,1% / 52,0% |
| Add-to-cart-sessies per view_item-sessie, zwart / wit / samen | 12,4% / 6,9% / 9,3% (26/210, 18/261, 44/471) | n.v.t. |
| Sitebrede sessies, aankopen, omzet | 1.078, 10, €351,97 | 1.935, 20, €691,64 |
| Sessie naar aankoop | 0,93% | 1,03% |
| AOV | €35,20 | €34,58 |
| Vorige 28 dagen (1-28 okt) | 469 sessies, 7 aankopen, AOV €38,78 | |

Sessies op de 2.0-pagina's per ISO-week: wk 38: 2, 39: 14, 40: 38, 41: 21, 42: 16, 43: 13, 44: 180, 45: 53, 46: 23, 47: 125, 48 (t/m 25-11): 171. Gemiddeld circa 17 per dag over 28 dagen, circa 57 per dag de laatste drie dagen.

**Mobiel tegenover desktop (28 d).** Productpagina-sessies: mobiel 394 (81%), desktop 72, tablet 18. Add-to-cart per view_item-sessie: mobiel 36/366 = 9,8%, desktop 6/64 = 9,4%. Sessies met 90% scroll: mobiel 18/366 = 4,9%, desktop 50/64 = 78%. Aankopen sitebreed: mobiel 9 uit 658 sessies (1,4%), desktop 1 uit 385 (0,26%), tablet 0 uit 46. Er is dus geen apparaatverschil in add-to-cart; wel in scrolldiepte.

**Kanaal (28 d), view_item-sessies naar add-to-cart-sessies op de 2.0-pagina's.** Paid Social 284 naar 11 (3,9%; 62% van het productverkeer), Organic Search 48 naar 11 (22,9%), E-mail 20 naar 10 (50%), Organic Social 15 naar 5, Direct 42 naar 3. Aankopen sitebreed per kanaal: Organic Search 5 (€228,06), Direct 2, E-mail 2, Referral 1, Paid Social 0 uit 339 sessies. Dat wit lager scoort komt vooral door 200 van de 287 wit-sessies uit Paid Social (engagement 44,5%): een verkeersverschil, geen bewezen paginaverschil.

**Funnel sitebreed (28 d, sessies per stap):** session_start 1.074, view_item 500, add_to_cart 55, begin_checkout 29, add_shipping_info 15, add_payment_info 11, purchase 10 (mobiel 9, desktop 1). Grootste absolute val: view_item naar add_to_cart (445 sessies, 89%), daarna add_to_cart naar checkout (26) en checkout naar verzendstap (14). GA4-eventtellingen, geen strikt geordende funnel.

**Maatverdeling add-to-cart (2.0 NL, 28 d):** 35-38 = 7%, 39-42 = 46%, 43-47 = 47%. **Orderwaarden:** 6 van 10 orders zijn €35,90 of hoger; op prijs herkend 3-pack 2.0 (€44,95) 2x en 5-pack 2.0 (€69,95) 1x. Pack-verdeling 1/3/5 is niet hard te maken: **[CHECK Shopify]**.

**Shopify (niet zelf opgehaald, uit run 9, 17-23 nov):** 358 sessies, 10 add-to-cart-sessies, 3 checkouts, 0 orders. GA4 meldt 5 aankopen op 23, 24 en 25 november (€159,91). Meetprobleem tot Shopify Admin dit bevestigt: **[CHECK]**.

**Snelheid (niet eigen gemeten, PageSpeed-quotum op; uit 2026-11-03-snelheid-nulmeting-alle-paginas):** veld productpagina LCP p75 mobiel 1,07 s, INP 96 ms (groen). Lab product 2.0 zwart mobiel: score 42, LCP 5,7 s, FCP 3,5 s, TBT 2.136 ms, 884 KB JS, 334 requests, DOM 1.878. Homepage-HTML nu: 39 externe en 46 inline scripts.

## 2. LIFT-frictiepunten (oordelen uit werkthema en Copy-audit, [TPL], live niet gezien)

| Factor | Oordeel | Concrete frictiepunten |
|---|---|---|
| Waardepropositie | Zwak boven de vouw | H1 is alleen de productnaam. 1,17 tegen 0,60 en 95% meer grip (Apps et al. 2022) staan niet zichtbaar; de wetenschapsvraag zit in een gesloten accordeon onderaan. Beschrijving noemt 4 van de 7 features. Geen 1.0-tegen-2.0-uitleg. |
| Relevantie | Matig | 62% van het productverkeer is Paid Social met sport-ads, de pagina is sport-neutraal (padel en rugby ontbreken). Reviews zijn van 2025, waarschijnlijk 1.0. |
| Helderheid | Matig tot zwak | Maatkeuze zonder advies. Bundellabels: "Meest gekozen" niet bevestigd met orderdata, "€9,- Korting" en "€20,- Korting" afgerond (echt €8,90 en €19,80), 1-pack toont adviesprijs €19,95 als doorstreep. Hoeveelheidskiezer naast de bundelkeuze (**[CHECK live]**). Knop "Aan winkelwagen toevoegen". Kleurwissel is een paginalink. x2-actie niet uitgelegd op de pagina (**[CHECK live]**). |
| Angst | Zwak op het beslismoment | Retour en verzendbelofte niet onder de knop. "Nu op voorraad" hardcoded terwijl alle zes 2.0-varianten negatieve voorraad hadden (-6 tot -30, run 9); 93% van de add-to-carts zit op de twee grootste maten. Sterren hardcoded zonder bron (merkcijfer is 4,6 Trustpilot, 21 reviews). Geen FAQPage-schema, iDEAL/Wero ontbreken in de betaalicoonrij. Link naar /policies/shipping-policy die nog "vóór 16:00" kan zeggen. Blessureclaim zonder bron en u/uw in FAQ (zie COPY.md A1, A2). |
| Afleiding | Matig | Eén CTA plus sticky add-to-cart (goed). Maar veel blokken in het koopblok en daarna 7 anatomiezones, 7 reviews, twee marquees, terwijl maar 4,9% van de mobiele sessies 90% haalt. Veel scripts (zie boven). |
| Urgentie | Aanwezig maar niet op de pagina | Performance Days x2 tot 30-11 23:59 staat in de announcementbar; op de productpagina niet aangetoond. Geen nep-urgentie. |

## 3. Geprioriteerde verbeteringen (impact x moeite)

Verwacht effect is een richting, geen toegezegd percentage.

| # | Verbetering | Impact | Moeite | Verwacht effect | Uitvoerder |
|---|---|---|---|---|---|
| 1 | Bewijs boven de vouw: onder de H1 "95% meer grip dan een gewone sok*" met zichtbare bronregel (Apps et al. 2022, categoriebewijs, nooit "HÏ Grip getest") en Trustpilot 4,6 met bron en 3500+ | H | L | Meer add-to-cart, vooral bij koud Paid Social-verkeer (3,9% tegen 22,9% bij Organic Search) | Website Copy Agent, Design Agent, Website Agent (bouw) |
| 2 | Zekerheidsregel direct onder de knop: binnen 1 werkdag verzonden, 30 dagen retour, gratis verzending vanaf €35. Geen link naar /policies/shipping-policy tot die pagina klopt | H | L | Minder twijfel op de grootste val (view_item naar add_to_cart, 89%) | Website Copy Agent, Website Agent |
| 3 | Maatadvies in de koopkolom: "Kies je maat", hulptekst op de grens (42/43, halve maten: kies de grotere), foutstaat zonder maat, link maat-blog. 93% van de add-to-carts is 39-42 of 43-47 | H | L | Minder twijfel en retouren; meetbaar via nieuw event size_select | Website Copy Agent, Website Agent |
| 4 | Voorraad eerlijk: hardcoded "Nu op voorraad" vervangen door echte voorraadstatus en een haalbare verzendbelofte. Besluit voor Lars/Timo; ik signaleer alleen | H | L (bouw) | Voorkomt gebroken belofte en annuleringen; hangt samen met Product-schema InStock | Besluit Lars/Timo; Website Agent; SEO Agent (schema) |
| 5 | Mobiele volgorde verkorten: bewijsblok (1,17 tegen 0,60, bron, 3 echte reviews) direct onder het koopblok, zones compact, FAQ in accordeons | H | M | Meer bezoekers zien bewijs (nu 4,9% mobiel tot 90% scroll). Zeer indicatief | Design Agent, Website Agent |
| 6 | Bundelblok verhelderen: per-paarprijs groot (€17,95 / €14,98 / €13,99), exacte of bewust afgeronde besparing (besluit), "Meest gekozen" alleen met orderdata, hoeveelheidskiezer weg of uitgelegd, €19,95 niet als korting | H | M | Hogere AOV (nu €35,20; 3-pack is €44,95) | Website Copy Agent, Design Agent, Website Agent |
| 7 | Paid Social anders laten landen: 62% van het productverkeer, 0 aankopen in 28 dagen. Vergelijk sport-landingspagina's (?ad=) met de productpagina op add-to-cart per klik | H | L | Beter boodschap-bij-bestemming; besluit bij Ads Agent | Ads Agent, Website Agent (tracking) |
| 8 | Performance Days-blok op de productpagina (kop "Verdubbel je grip", x2, geen code, echte deadline 30-11 23:59), herbruikbaar met einddatum. Alleen als het binnen 1-2 dagen live kan | H (tijdgebonden) | M | De actie-ads beloven iets wat de pagina nu niet bevestigt | Website Copy Agent, Design Agent, Website Agent |
| 9 | Reviews eerlijk: hardcoded sterren vervangen door Trustpilot 4,6 met bron; reviews met datum en model (1.0 of 2.0); voornaam plus initiaal. Reviewapp-besluit blijft bij Team HÏ Grip; geen aggregateRating zonder echte reviews | M | M | Meer vertrouwen, consistent cijfer | Website Copy Agent, SEO Agent, Website Agent |
| 10 | Betaalvertrouwen: iDEAL (en Wero indien ondersteund) zichtbaar bij de knop; checkout-instellingen blijven buiten scope | M | L | Kleiner verlies na add_to_cart (26 sessies) en bij de betaalstap | Design Agent, Website Agent |
| 11 | Verlaten winkelwagen: 55 add-to-cart-sessies, 29 checkout, 10 aankopen. Controleer cart-recovery-flow en timing; één actie. Voorstel, niets versturen | M | M | Deel van de 26 afhakers terughalen; pas meetbaar bij meer volume | E-mail Marketing Agent, Design Agent |
| 12 | Meetfundament vóór de herontwerp: events scroll 25/50/75, size_select, pack_select, sticky_atc_click, view_cart; filters intern en admin; GA4 tegen Shopify afstemmen (23-25 nov); botverkeer in Direct uitfilteren | H (enabler) | M | Zonder dit zijn tests van v2.0 niet beoordeelbaar | Website Agent, Lars |
| 13 | Sportrelevantie: drie korte regels tennis/padel, voetbal, rugby met link naar sportpagina's; geen prestatieclaim zonder bron (alleen voetbal heeft IJKHE 2023) | M | M | Hogere relevantie voor sportspecifieke ads | Website Copy Agent, Design Agent |
| 14 | Scriptlast en gewicht verder omlaag (app-scripts, DOM 1.878, eerste foto fetchpriority high, rest lazy) en nieuwe meting na de themawissel. Veld is al groen, dus lager dan 1 tot 6 | M | M-H | Lab-score en TBT omlaag; effect op conversie voor echte bezoekers waarschijnlijk klein | Website Agent, SEO Agent |
| 15 | Claim- en merkstemhygiëne: blessureclaim en superlatieven weg, wetenschapsclaim volgens de formuleringsregel, u/uw naar je/jij (compliance, geen CRO-hefboom) | n.v.t. | L | Pagina klopt met de vault | Website Copy Agent |

Volgorde: 12 parallel met 1 tot 4; 8 alleen als het vóór het einde van de actie kan; 5, 6 en 13 als onderdeel van de herontwerp; daarna 7, 9 tot 11 en 14.

## 4. Drie A/B-testvoorstellen

Voorwaarden: geen test tijdens de Performance Days (tot 30-11-2026 23:59); één test tegelijk; één KPI per test; minimaal 2 volledige weken; stop-regel vooraf; geen winnaar vóór de sample-grootte is gehaald; mobiel apart bekijken (81% van het verkeer).

**Sample-size-overweging.** Basis add-to-cart per view_item-sessie 9,3%. Met 80% power en 5% (tweezijdig): n per variant = 15,7 x p x (1-p) gedeeld door het kwadraat van het absolute verschil.

| Effect (relatief) | Van naar | n per variant | n totaal | Looptijd bij 17 sessies per dag | Looptijd bij 57 sessies per dag |
|---|---|---|---|---|---|
| +30% | 9,3% naar 12,1% | circa 2.000 | circa 4.000 | circa 235 dagen | circa 70 dagen |
| +50% | 9,3% naar 14,0% | circa 775 | circa 1.550 | circa 90 dagen | circa 27 dagen |
| +100% | 9,3% naar 18,6% | circa 200 | circa 400 | circa 24 dagen | circa 7 dagen |

Aankoop als KPI is niet haalbaar (10 aankopen in 28 dagen). Gebruik add-to-cart per view_item-sessie, secundair begin_checkout. Kleine verbeteringen (zekerheidsregel, maatadvies, betaalicoon) liever als best practice invoeren en tegen een nulmeting leggen dan als zware test.

**Test 1, bewijs boven de vouw.** Controle: huidige H1 en subregel. A: "Je voet blijft staan. Jij niet." B: "95% meer grip dan een gewone sok.*" met bronregel en Trustpilot-bron (teksten uit COPY.md F). KPI: add-to-cart per view_item-sessie, alleen mobiel. Bij 3 armen en +50% circa 2.300 sessies; met 2 armen (controle tegen B) circa 1.550. Uitvoering: Website Copy Agent, Website Agent. Welke split-tool er is (de Essential A/B-app is uit het thema; wel bestaan de templates product.ab-a en product.ab-b) is een besluit voor Team HÏ Grip: **[HÏ GRIP]**.

**Test 2, mobiele paginavolgorde.** Controle: koopblok, expertise, anatomie, reviews, logo-regel, FAQ. Variant: koopblok, bewijsblok met 3 echte reviews, compacte zones, FAQ-accordeons. Alleen mobiel, 50/50, circa 775 per arm bij +50%. KPI: add-to-cart per view_item-sessie; secundair 90%-scroll (eerst extra scrolldieptes meten, zie 12). Uitvoering: Design Agent, Website Agent.

**Test 3, bundelweergave.** Controle: huidige labels. Variant: per-paarprijs groot, exacte besparing, hoeveelheidskiezer weg of uitgelegd. KPI: aandeel 3- en 5-pack onder add-to-carts en omzet per view_item-sessie. Basisratio onbekend (**[CHECK Shopify]**). Voorbeeld: van 40% naar 55% geeft circa 175 add-to-cart-sessies per variant, circa 350 totaal; bij 44 per 28 dagen is dat circa 8 maanden, dus pas starten als het volume gestegen is, of voor-na vergelijken met kanaalcontrole. Prijzen, kortingen en acties wijzig ik niet; afronding en vergelijkingsprijs zijn een besluit voor Lars en Timo.

## 5. Besluiten voor Team HÏ Grip

1. Negatieve voorraad op alle zes 2.0-varianten terwijl pagina en schema "op voorraad" tonen.
2. Packkorting exact (€8,90 en €19,80) of afgerond (€9,- en €20,-); doorgestreepte €19,95 houden of niet.
3. Reviewapp ja of nee (blokkeert sterren-schema en FAQPage).
4. Welke split-tool voor A/B.
5. GA4 tegen Shopify afstemmen voor 23 tot 25 november.
6. Live HTML van zwart en wit opnieuw auditen zodra de 429-limiet weg is (wit apart).

## 6. Niet gecontroleerd

Live HTML van zwart en wit (429), mobiele weergave, wit apart, EN-pagina's, JSON-LD, sticky koopbalk, actiewinkelwagen, Shopify Analytics (pack-verdeling, orders per product), PageSpeed (quotum), heatmaps. Of het werkthema (laatste commit 29-10) gelijk is aan live. GA4-itemcijfers tellen eenheden per product en bevatten de bundelkorting niet.

## 7. Bronnen

GA4 property 476032345 (eigen read-only queries, 28 en 90 dagen t/m 25-11-2026); 02_Dashboard/Ads/2026-10-29-ads-funnel-en-snelheid-productpagina.md; 02_Dashboard/Website-CRO/2026-10-28-ga4-seo-conversie-audit-higrip-nl.md; 02_Dashboard/2026-11-23-seo-conversietest-run-9.md; 02_Dashboard/Website-techniek/2026-11-03-snelheid-nulmeting-alle-paginas.md; 06_Website_Agent/Productpagina-prototype/v2.0/_src/COPY.md; 00_Brand_Core/Feiten & Actuele Staat.md; werkthema-kopie C:\Users\Test\Werk\theme-snelheid\werkthema.
