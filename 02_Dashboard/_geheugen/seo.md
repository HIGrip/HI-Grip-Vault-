# Geheugen — seo

> Map: [[Waar staat wat]]

Zie [README](02_Dashboard/_geheugen/README.md) voor de geheugenregel. Samengevoegd uit `seo-regressiecheck.md`, `search-console.md`, `seo-conversietest.md` en `backlinks-merchant.md` (de routine HÏ Grip — SEO, promptbestand `02_Dashboard/Routines/SEO.md`). Per module een eigen kop; de regels staan ongewijzigd en in de oorspronkelijke volgorde.

Format: `JJJJ-MM-DD | thema | onderwerp | notitie-id`

---

## Module A — Technische regressiecheck

2026-09-15 | SEO-techniek | Eerste check: 5 afwijkingen (schema onvolledig, 2× H1, oude productpagina's 200, GA4 keyEvents 0) | 2026-09-15-regressiecheck
2026-09-21 | SEO-techniek | H1 en oude product-URL's opgelost; schema gedeeltelijk live (WebSite/ItemList/FAQPage missen); /en/-title leeg; GA4-timeout | 2026-09-21-regressiecheck
2026-09-28 | SEO-techniek | /en/-homepage nu 2× H1 + onvertaalde hero; 3 nieuwe verzend-/retourpagina's onvolledig (geen kosten/drempel, nog 25% herbevoorrading); /collections/frontpage mist meta description; schema/redirect-keten/22:00-meta blijven bekend open; aggregateRating blijft schoon; GA4 werkte (54 sessies, keyEvents 1); PSI op quotum | 2026-09-28-regressiecheck
2026-10-05 | SEO-techniek | Geen nieuwe afwijkingen. /en/-H1-bug en lege EN-title lijken opgelost (EN-meta heeft nog wel de vervallen 22:00-belofte, NL al gecorrigeerd). /collections/frontpage verdwenen uit de sitemap en geeft nu 404 (zelfde backlogpunt). Schema-dekking iets beter (WebSite+FAQPage nu ook op de 3 sportpagina's). Overige bekende punten (verzend/retour-tegenspraak, redirect-keten, /collections/all, /pages/gripsokken-voetbal) ongewijzigd open. aggregateRating blijft schoon (12 URL's); GA4 steeg naar 116 sessies/7 dagen; PSI op quotum | 2026-10-05-regressiecheck
2026-10-19 | SEO-techniek | 2 nieuwe afwijkingen: nieuwe sportpagina /pages/gripsokken-voor-rugby heeft 2× H1 (los tekstblok + hero); /pages/terugbetalingsbeleid heeft titel "American Express" en geen meta description. Nieuw gevonden maar als P2 genoteerd: /blogs/intern staat publiek zonder noindex in de sitemap (nog leeg). Grote voortgang op het verzend-/retourpunt: /pages/verzendbeleid noemt nu €4,50 + €35-drempel, /pages/retourbeleid heeft geen 25%/ongeopend-eis meer, /policies/terms-of-service toont nu €4,50 — alleen /policies/shipping-policy ("vóór 16:00") en /policies/refund-policy (14 dagen + 25%) resten nog. Sporters-claim 3000+/3500+ ongewijzigd (NL nog 3000+). Schema: WebSite nu op alle 4 sportpagina's, FAQPage nieuw op homepage/en (lost bekend punt niet op). Vierde sportpagina rugby nu in sitemap; collections/all en /frontpage uit de sitemap verdwenen maar bestaan nog los (zelfde status). GA4 82 sessies/7d (vorige 98), key events 3 (gelijk), omzet €170,75. PSI op quotum. python3 in de cloudomgeving is 3.11 zonder GA4-modules; gebruik python3.13 (daar geïnstalleerd). | 2026-10-19-regressiecheck
2026-10-12 | SEO-techniek | Geen nieuwe afwijkingen. EN-meta's vervallen 22:00-belofte is nu ook opgelost ("Shipped within 1 business day"). De sporters-claim 3000+/3500+ (al open via 2026-10-11-seo-audit-weekdelta) is gedeeltelijk voortgeschreden: EN-homepage nu overal 3500+, NL-homepage-meta en collectie-USP nog 3000+ — geen nieuw punt. Nieuwe lege sub-sitemap sitemap_metaobject_pages_1.xml (NL+EN) ontdekt, geen actie. Overige bekende punten (schema, redirect-keten, verzend/retour, /collections/all, /collections/frontpage, /pages/gripsokken-voetbal) ongewijzigd open. aggregateRating blijft schoon (12 URL's); GA4 daalde naar 98 sessies/7 dagen (vorige 116) maar key events stegen naar 3 (vorige 1); PSI op quotum. Cloudomgeving miste de google-analytics-data-module en had een cffi/cryptography-bindingconflict — opgelost met pip install + --force-reinstall, geen vault-wijziging nodig. | 2026-10-12-regressiecheck

### URL-lijst 19 okt 2026 (13, sitemap-gedreven)
Zelfde opzet als vorige week + de nieuwe vierde sportpagina: /, /products/performance-gripsokken, /products/performance-gripsokken-2-0-zwart, /products/performance-gripsokken-2-0-wit, /collections/gripsokken, /pages/gripsokken-voor-padel, /pages/gripsokken-voor-tennis, /pages/gripsokken-voor-voetbal, /pages/gripsokken-voor-rugby (nieuw), /blogs/hi-grip, /blogs/trends, /blogs/trends/de-twee-grootste-problemen-in-de-sportwereld-het-antwoord-van-4-ondernemende-sporters, /en/. Sitemap_pages_1.xml fors uitgebreid (over-ons, zakelijk, contact, veelgestelde-vragen, missie/waarden/visie, privacybeleid, retail, pilates, clubwear, collection, plus de 3 beleidspagina's) — niet individueel gecontroleerd, buiten de verplichte lijst. Nieuwe blogindex /blogs/intern (leeg, geen noindex) en nieuw artikel wat-zijn-gripsokken (lastmod 21 aug, niet het nieuwste). /collections/all en /collections/frontpage verdwenen uit sitemap_collections_1.xml maar bestaan nog los (zelfde status als vorige week).

### URL-lijst 12 okt 2026 (12, sitemap-gedreven)
Zelfde samenstelling als 5 okt (homepage, 3 producten, 1 collectie, 3 sportpagina's, 2 blogindexen, nieuwste artikel ongewijzigd, /en/). Nieuw in sitemap.xml t.o.v. vorige week: sitemap_metaobject_pages_1.xml (NL+EN), beide leeg.

### URL-lijst 5 okt 2026 (12, sitemap-gedreven)
/, /products/performance-gripsokken, /products/performance-gripsokken-2-0-zwart, /products/performance-gripsokken-2-0-wit, /collections/gripsokken, /pages/gripsokken-voor-padel, /pages/gripsokken-voor-tennis, /pages/gripsokken-voor-voetbal, /blogs/hi-grip, /blogs/trends, /blogs/trends/de-twee-grootste-problemen-in-de-sportwereld-het-antwoord-van-4-ondernemende-sporters, /en/
Verdwenen t.o.v. vorige week: /collections/frontpage (niet meer in sitemap_collections_1.xml, geeft nu een directe 404).

### URL-lijst 28 sep 2026 (13, sitemap-gedreven)
/, /products/performance-gripsokken, /products/performance-gripsokken-2-0-zwart, /products/performance-gripsokken-2-0-wit, /collections/frontpage, /collections/gripsokken, /pages/gripsokken-voor-padel, /pages/gripsokken-voor-tennis, /pages/gripsokken-voor-voetbal, /blogs/hi-grip, /blogs/trends, /blogs/trends/de-twee-grootste-problemen-in-de-sportwereld-het-antwoord-van-4-ondernemende-sporters, /en/
Nieuw in sitemap.xml t.o.v. vorige week: sitemap_agentic_discovery.xml (→ /agents.md), en de pagina's /pages/verzendbeleid, /pages/retourbeleid, /pages/terugbetalingsbeleid.

## Module B — Search Console & rankings

2026-09-25 | nulmeting | 7 dagen: 33 klikken/1.054 vert./CTR 3,13%/pos. 8,4 (klikken −39% w/w); 28 dagen: 139 klikken/3.972 vert. (+140% m/m) | 2026-09-25-search-console
2026-09-25 | kernkeyword | gripsokken pos. 7,3 (was 5,5, −1,7), rankt op oude URL /products/hi-grip-gripsokken-1 | 2026-09-25-search-console
2026-09-25 | kernkeyword | grip socks pos. 10,3, verdeeld over 4 eigen URL's (kannibalisatie) | 2026-09-25-search-console
2026-09-25 | kernkeyword | antislip sokken pos. 2 en gripsokken kopen pos. 11 opgedoken, te weinig vertoningen voor conclusie | 2026-09-25-search-console
2026-09-25 | kernkeyword | gripsokken padel/tennis/rugby: geen vertoningen in top 50 (7 en 28 dagen) | 2026-09-25-search-console
2026-09-25 | kans (lage CTR) | /products/hi-grip-gripsokken-1: 310 vert./7d, CTR 0,32% — backlogpunt 17 | 2026-09-25-search-console
2026-09-25 | kans (lage CTR) | /collections/all CTR 1,72% bevestigt bestaand backlogpunt (ontbrekende meta description) | 2026-09-25-search-console
2026-09-25 | beperking | Geen tool voor AI-overviews-rapport en indexeringsstatus; niet gemeten | 2026-09-25-search-console
2026-09-30 | totaal | 7 dagen: 24 klikken/911 vert./CTR 2,63%/pos. 7,6 (klikken −35,1% w/w, tweede week op rij); 28 dagen: 146 klikken/3.979 vert. (+160,7% m/m) | 2026-09-30-search-console
2026-09-30 | kernkeyword | gripsokken pos. 5,9 (was 7,1, +1,2), geen kannibalisatie meer zichtbaar deze week | 2026-09-30-search-console
2026-09-30 | kernkeyword | grip socks (28d) pos. 11,4 (was 12,7, +1,3), blijft verdeeld over 4 URL's (backlogpunt 18) | 2026-09-30-search-console
2026-09-30 | kernkeyword | gripsokken kopen/voetbal te weinig vertoningen (5 resp. 4); padel/tennis/rugby nog steeds geen data in top 50 | 2026-09-30-search-console
2026-09-30 | doorwerking | Homepage-titel (live sinds 25 sep) samen met positieverbetering / : 7d 9,4→6,6, 28d 18,8→11,9 | 2026-09-30-search-console
2026-09-30 | kans (lage CTR) | /pages/ontdek-jouw-sport: pos. 3,9, 0% CTR op 120 vert. (28d) — backlogpunt 19 | 2026-09-30-search-console
2026-09-30 | beperking | Geen tool voor AI-overviews-rapport en indexeringsstatus; niet gemeten (zelfde als vorige run) | 2026-09-30-search-console
2026-10-14 | totaal | 7 dagen: 50 klikken/1.046 vert./CTR 4,78%/pos. 8,3 (klikken +11,1% w/w, positie iets slechter); 28 dagen: 156 klikken/3.962 vert. (+33,3% m/m, positie 2,6 beter naar 8,1) | 2026-10-14-search-console
2026-10-14 | kernkeyword | gripsokken pos. 5,9 (was 6,9, +1,0), 28d pos. 6,4 (was 8,7, +2,4), nog 96-97% op de oude URL /products/hi-grip-gripsokken-1 | 2026-10-14-search-console
2026-10-14 | kernkeyword | grip socks pos. 10,4 (7d, +2,0); 28d niet in de top-50-lijst op zoekterm, handmatig berekend op basis van zoekterm+pagina: ≈10,9 over 9 eigen URL's | 2026-10-14-search-console
2026-10-14 | kernkeyword | grip sokken (NL) pos. 14,3 (was 12, −2,3), verdeeld over 3 URL's — zelfde kannibalisatiepatroon als "grip socks" (backlogpunt 18), nu ook voor de NL-term | 2026-10-14-search-console
2026-10-14 | kernkeyword | gripsokken kopen/voetbal/padel/tennis/rugby, antislip sokken: te weinig vertoningen voor conclusie (zelfde als vorige runs) | 2026-10-14-search-console
2026-10-14 | kans (lage CTR) | /en/pages/gripsokken-voor-voetbal: positie 7,3–7,6, 65–107 vert. (7d/28d), 0% CTR — backlogpunt 25 | 2026-10-14-search-console
2026-10-14 | kans (lage CTR) | /en/products/performance-gripsokken: positie 5,9–6,3, 58–98 vert. (7d/28d), 0% CTR — backlogpunt 26 | 2026-10-14-search-console
2026-10-14 | doorwerking | Punten 19, 21, 22 (eigen backlogpunten) nog steeds open en op CTR/vertoningen ongewijzigd of verslechterd; SEO-titels 2.0/collectie gripsokken sinds 11 okt live, nog te vroeg voor CTR-evaluatie | 2026-10-14-search-console
2026-10-14 | beperking | Geen tool voor AI-overviews-rapport en indexeringsstatus; niet gemeten (zelfde als vorige runs). Dashboard-sync (stap B) niet gedraaid: ArtifactData niet geladen deze run | 2026-10-14-search-console
2026-10-21 | totaal | 7 dagen: 35 klikken/1.192 vert./CTR 2,94%/pos. 8,6 (klikken −30%, CTR bijna gehalveerd, bevestigd door GA4 organic −48,9%); 28 dagen: 154 klikken/4.089 vert. (+12,4% m/m, positie 2,0 beter naar 8,1) | 2026-10-21-search-console
2026-10-21 | kernkeyword | gripsokken pos. 5,4 (was 5,9, +0,5), 28d pos. 5,8 (was 7,8, +2,0), nu 100% op de oude URL /products/hi-grip-gripsokken-1 (was 96-97%) | 2026-10-21-search-console
2026-10-21 | kernkeyword | grip socks pos. 10,6 (7d, −0,2); 28d niet in de top-50-lijst, handmatig ≈11,2 over 10 eigen URL's; grip sokken (NL) pos. 10,7 (7d, +3,6), 28d zelfs via zoekterm+pagina niet beschikbaar | 2026-10-21-search-console
2026-10-21 | kernkeyword | gripsokken kopen/padel/tennis/rugby, antislip sokken: geen of te weinig data (zelfde als vorige runs); gripsokken voetbal pos. 27,4 (was 41,8, +14,4) op 14 vert. — te weinig voor conclusie, geen kannibalisatie | 2026-10-21-search-console
2026-10-21 | signaal | /pages/gripsokken-voor-voetbal (NL) verslechtert 3 metingen op rij: pos. 6,4 → 12,2 → 15,7 op vergelijkbaar volume (64-80 vert./7d), zonder kannibalisatie op de kernterm zelf — backlogpunt 27 | 2026-10-21-search-console
2026-10-21 | doorwerking | Punten 17, 18, 19, 21, 22, 25, 26 nog steeds open, geen materiële verandering (25/26: CTR licht omhoog maar nog <1,2%); SEO-titels 2.0/collectie gripsokken (sinds 11 okt live) 10 dagen oud, nog te vroeg voor CTR-evaluatie (vanaf ±8 nov) | 2026-10-21-search-console
2026-10-21 | beperking | Geen tool voor AI-overviews-rapport en indexeringsstatus; niet gemeten (zelfde als vorige runs). google_data.py vereiste herinstallatie van Google-pakketten onder de python3-interpreter (3.11) die het script gebruikt — pip wees naar 3.13 | 2026-10-21-search-console

## Module C — SEO- en conversietest

2026-09-23 | nulmeting | 346 sessies, 16 via zoekmachines, 3 orders (€72,74); veel direct/testverkeer | 2026-09-23-seo-conversietest-run-1
2026-09-23 | CRO/vertrouwen | Site spreekt zichzelf tegen over verzendkosten, drempel, verzendtijd en retour | 2026-09-23-seo-conversietest-run-1
2026-09-23 | gebouwd (concept) | Verborgen maatgids + voorstellenpakket SEO-titels/redirects in Shopify; details in logboekpagina `seo-routine-logboek` | 2026-09-23-seo-conversietest-run-1
2026-09-23 | audit-rotatie | Volledige audit A–D gedaan; volgende run: blok B (producten & collecties) diep | 2026-09-23-seo-conversietest-run-1
2026-09-28 | audit-rotatie | Blok B (producten & collecties) diep gedaan — geen nieuwe bevindingen, alles al open in de backlog; volgende run: blok C (content & AI-zichtbaarheid) | 2026-09-28-seo-conversietest-run-2
2026-09-28 | gebouwd (concept) | Collectiebeschrijving Gripsokken herschreven (222 w.), SEO-titel/meta voor 2.0 Zwart/Wit + collecties Gripsokken en Homepage, 10 alt-tekstvoorstellen, producttype/SKU/GTIN-koppeling 2.0-varianten (bron: EAN-lijst) — alles in `seo-routine-logboek`, RUN 2 | 2026-09-28-seo-conversietest-run-2
2026-09-28 | testplan | Maatgids gripsokken nog niet gepubliceerd — evaluatie: te vroeg | 2026-09-28-seo-conversietest-run-2
2026-09-28 | AFGEWEZEN door Lars | Géén aparte maatgids-pagina: sokmaat = schoenmaat, dat snapt de klant zelf (het zijn sokken, geen kleding). Maatgids-concept (ID 168287863111) + testplan vervallen; niet opnieuw voorstellen, ook niet als "maatgids-link bij maatkeuze". Tegenstrijdige maatbereiken 34–39/40–46 vs 35–38/39–42/43–47 blijven melden (twee productgeneraties); de FAQ-tegenstrijdigheid (43–46) is op 12 okt opgelost aangetroffen, zie onder | handmatig (Lars)
2026-10-05 | audit-rotatie | Blok C (content & AI-zichtbaarheid) diep gedaan — geen nieuwe bevindingen, alles al open in de backlog of al bevestigd; volgende run: blok D (conversie) | 2026-10-05-seo-conversietest-run-3
2026-10-05 | gebouwd (concept) | Nieuw thema-blok "HÏ Grip — Waardebalk" (blocks/hi-pack-value-bar.liquid + assets/hi-pack-value-bar.js) in testthema 200249901383: combineert backlogpunt 1 (gratis-verzendingsdrempel) + 12 (prijs per paar), zoals de Growth Radar van 27 sep/4 okt voorstelde. Nog niet aan een productsjabloon gekoppeld (handmatig via theme-editor) | 2026-10-05-seo-conversietest-run-3
2026-10-05 | testplan | Waardebalk: nulmeting add-to-cart 9/276 = 3,3%; evaluatie conversie 4 weken na publicatie, zodra ≥300 productpaginasessies | 2026-10-05-seo-conversietest-run-3
2026-10-05 | testplan | RUN 2-concepten (collectiebeschrijving, SEO-titels/meta's, alt-teksten, producttype/SKU/GTIN) nog niet gepubliceerd — label te vroeg, geen wijziging nodig | 2026-10-05-seo-conversietest-run-3
2026-10-12 | audit-rotatie | Blok D (conversie) diep gedaan — geen nieuwe bevindingen, alles al open/bevestigd; rotatie B→C→D rond, volgende run weer blok B | 2026-10-12-seo-conversietest-run-4
2026-10-12 | opgelost | FAQ-vraag "Welke maat gripsokken heb ik nodig?" noemt geen vast, tegenstrijdig maatbereik meer — verwijst naar de productpagina, in lijn met het besluit van Lars van 28 sep | 2026-10-12-seo-conversietest-run-4
2026-10-12 | gebouwd (concept) | Waardebalk-blok (sinds RUN 3 klaar maar niet gekoppeld) nu daadwerkelijk toegevoegd aan templates/product.json in testthema 200249901383, ná de variant-picker, standaardinstellingen (drempel €35) | 2026-10-12-seo-conversietest-run-4
2026-10-12 | testplan | Waardebalk: blijft te vroeg, wacht nog op publicatie door de eigenaar. RUN 2-concepten (SEO-titels/meta's) zijn sinds 11 okt wél live (bevestigd door actiecontrole) — te vroeg voor SEO-evaluatie (4 weken) | 2026-10-12-seo-conversietest-run-4
2026-10-19 | audit-rotatie | Blok B (producten & collecties) diep gedaan — twee nieuwe contentgaten (sportvermeldingen in productbeschrijvingen, `<code>`-tag in 2.0) plus een GTIN/productType-concept voor backlogpunt 4; volgende run: blok C (content & AI-zichtbaarheid) | 2026-10-19-seo-conversietest-run-5
2026-10-19 | gebouwd (concept) | GTIN-koppeling (6 EAN's uit [[Performance Grip Socks 2.0]]) + productType-voorstel "Sportsokken" voor alle 3 producten; concepttekst productbeschrijvingen met padel/tennis/rugby en zonder `<code>`-tag — beide alleen in `seo-routine-logboek`, RUN 5, niets live | 2026-10-19-seo-conversietest-run-5
2026-10-19 | testplan | Waardebalk: blijft te vroeg — staat nog alleen in testthema 200249901383 (niet live); het live thema-ID is intussen gewisseld naar 202667458887, buiten deze routine om bijgehouden. RUN 2-concepten: 3 van de 4 onderdelen nu bevestigd live (SEO-titels/meta, collectiebeschrijving, alt-teksten), alleen productType/SKU/GTIN nog niet; SEO-evaluatie blijft te vroeg (live sinds 11 okt, evalueren vanaf ±8 nov) | 2026-10-19-seo-conversietest-run-5

## Module D — Backlinks & Merchant Center

Runregel (de guard leest de laatste): `JJJJ-MM-DD | run | <uitkomst in een paar woorden> | <notitie-id>`
Linkinventaris: `JJJJ-MM-DD | link | <verwijzende URL> | <notitie-id>` (verloren: `| link-verloren |`)
Merchant-stand: `JJJJ-MM-DD | merchant | <n> goed, <m> afgekeurd, <k> waarschuwingen | <notitie-id>`

(Nog geen regels: eerste run is de eerste maandag van de maand na de omschakeling. De guard van module D leest alleen regels met `| run |` als tweede veld; schrijf die nergens anders.)
