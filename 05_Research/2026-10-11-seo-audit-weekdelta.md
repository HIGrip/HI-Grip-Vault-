---
id: 2026-10-11-seo-audit-weekdelta
titel: "SEO-audit higrip.nl — weekvergelijking 11 oktober 2026, met prioriteitenlijst"
kerntitel: "Verkeer groeit hard, maar op de site is in een week bijna niets opgelost"
datum: 2026-10-11
bron: los
routine: ""
categorie: SEO
status: nieuw
prioriteit: P1
samenvatting: "Zoekverkeer is in een week sterk gegroeid (Search Console 61 klikken tegen 18, GA4 organisch 70 sessies tegen 32, 4 key events tegen 0), maar dat komt vooral door merkzoekopdrachten: op de site zelf is van de open punten uit de audits van 8-10 alleen de oprichterstekst op /pages/over-ons aangepast. De vertrouwens- en claimfouten (22:00-belofte en blessureclaim in schema, demo-tekst, tegenstrijdig retourbeleid) staan nog live, en er is een nieuwe tegenspraak bij gekomen: 3500+ sporters op bijna elke pagina tegen 3000+ in het feitenbestand. Na de live-fixes van 11-10 komt de SEO Health Score uit op 58/100, tegen 54 op 25-9 met dezelfde methode."
gerelateerd: [2026-10-08-audit-higrip-nl-seo-aeo-geo-aio-sxo-nieuwe-run, 2026-10-08-seo-aeo-geo-aio-sxo-audit, 2026-10-08-search-console, 2026-10-05-regressiecheck, 2026-09-25-seo-audit, 2026-10-12-regressiecheck, 2026-10-12-seo-conversietest-run-4, 2026-10-11-concurrentie-seo-per-merk]
vervangt: []
bronbestand: ""
deadline: ""
---
# SEO-audit higrip.nl — weekvergelijking 11 oktober 2026, met prioriteitenlijst

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[Waar staat wat]] · [[Home]]

## In het kort

Losse audit op vraag van Lars: is higrip.nl de afgelopen week beter geworden, en wat moet er gebeuren, op volgorde? Referentiepunt zijn de twee audits van 8 oktober ([[2026-10-08-seo-aeo-geo-aio-sxo-audit]] en [[2026-10-08-audit-higrip-nl-seo-aeo-geo-aio-sxo-nieuwe-run]]) en de regressiecheck van 5 oktober ([[2026-10-05-regressiecheck]]). Alles is alleen gelezen: 43 URL's live opgehaald (NL, `/en/`, beleid, blogs, oude URL's), plus Search Console en GA4 via `google_data.py`, week op week.

**Antwoord: verkeer ja, site nee.** De cijfers gaan duidelijk vooruit, maar dat komt vooral van merkzoekopdrachten ("higrip", "hi grip", "highgrip" zijn samen minstens 27 van de 61 klikken) en van minder botverkeer uit de VS. Op de site is in een week bijna niets veranderd: van de ruim twintig nieuwe punten van 8-10 is er één deels opgelost (`/pages/over-ons` zegt nu "Drie founders"). Later op 11-10, na de live-fixes, is alsnog een totaalscore berekend: **SEO Health Score 58/100**. Die is gemaakt met dezelfde zeven categorieën en wegingen als de 54/100 van 25-9, en is dus daarmee te vergelijken. Met de lensscores van 8-10 (62 voor "SEO technisch en on-page") is hij niet te vergelijken. Zie "SEO Health Score — 58/100" hieronder.

## Kerncijfers

- **61** · Klikken Search Console (2–8 okt) · was 18 (+238,9%)
- **6,03%** · CTR Search Console · was 2,17%; gemiddelde positie 8,0 (was 7,8)
- **70** · Organische sessies GA4 (4–10 okt) · was 32 (+118,8%)
- **4** · Key events GA4 (€100,68 `purchaseRevenue`) · was 0

## Acties

Alle open acties uit [[2026-10-08-audit-higrip-nl-seo-aeo-geo-aio-sxo-nieuwe-run]], [[2026-10-08-seo-aeo-geo-aio-sxo-audit]] en de backlog gelden nog; ze staan in de prioriteitenlijst hieronder, maar worden hier niet opnieuw als actie aangemaakt. Dit zijn alleen de nieuwe punten.

- [x] P1 · Besluit: aantal sporters vastleggen; de aankondigingsbalk op bijna elke NL-pagina en de productpagina's zeggen "3500+", de homepage-meta, `/en/` en het feitenbestand zeggen "3000+"
- [x] P1 · Meta description en AboutPage-schema van /pages/over-ons van "4 gedreven sporters" naar drie founders zetten; de paginatekst zegt sinds deze week "Drie founders één missie"
- [ ] P1 · Beleid plakken in Instellingen → Beleid (refund, verzending, voorwaarden art. 4 en 6) uit `_uitvoer/2026-10-11-live-fixes/beleid-plakken.md`
- [ ] P1 · Homepage-meta in Online Store → Voorkeuren van 3000+ naar 3500+ sporters zetten
- [ ] P1 · Collectie-USP "3000+ sporters gingen je voor" naar 3500+ in de thema-editor (live `collection.json` is via de CLI geweigerd)
- [ ] P2 · EN-H1 van de drie sportpagina's herstellen: titelvelden in de sport-hero invullen en "Grip socks for" als EN-vertaling registreren
- [ ] P2 · Wekelijkse check op verouderde EN-vertalingen met feiten (tijden, bedragen, termijnen, aantallen) toevoegen aan de SEO-regressiecheck
- [ ] P3 · /pages/ons-verhaal uitbouwen tot een echt oprichtersverhaal: sinds de demotekst weg is staan er nog 85 woorden (waarom gripsokken, wat de 2.0 anders maakt, links naar /pages/over-ons en de 2.0)
- [x] P1 · De routine Actiecontrole nakijken: CONTROLE.json staat sinds 26-9 stil, dus opgeloste punten (o.a. /en/-H1 en /en/-title in de backlog) worden niet bevestigd of afgevinkt

## Bevindingen

### Prioriteitenlijst — wat er moet gebeuren

Volgorde op impact × moeite. Bij elk punt de bron van de bestaande actie; nieuw = nieuw in deze notitie.

**P1 — deze week (kleine tekst- en themawijzigingen, groot vertrouwens- en claimrisico)**

1. ~~**22:00-belofte overal weg.**~~ **Opgelost op 11-10** (gecontroleerd met een nieuwe crawl: 22:00, "10 PM" en €30 staan niet meer in het schema en de tekst van NL en EN). Oorspronkelijke tekst: staat nog in het FAQPage-schema van `/` en `/en` ("vóór 22:00 uur … dezelfde dag verzonden"), op de drie EN-sportpagina's, in de EN-productpagina's ("before 10 PM … same day") en in de EN-homepage-meta ("Order before 10:00 PM, shipped today"). Op de EN-productpagina's staat ook nog gratis verzending vanaf €30 in plaats van €35. Open sinds 21-9. *Bron: 8-10 nieuwe run, backlog 2026-09-21-weekoverzicht.*
2. **Blessureclaim en "wetenschappelijk bewezen" uit schema en tekst.** "Minder risico op blessures" staat nog in het FAQPage-schema van `/` en `/en`, op de productpagina's, op `/pages/ontdek-jouw-sport` en in de EN-homepage-meta ("Fewer injuries"). "Gripsokken zijn wetenschappelijk bewezen effectiever" staat in het schema en op de productpagina's. Herschrijven volgens de formuleringsregel in [[Feiten & Actuele Staat]]. *Bron: beide audits 8-10.*
3. ~~**Demo-tekst en oprichters op `/pages/ons-verhaal`.**~~ **Opgelost op 11-10** (gecontroleerd: drie founders met naam en quote, demotekst weg; de pagina is nu wel dun, zie de nieuwe P3-actie). Oorspronkelijke tekst: de Shopify-demotekst ("We kunnen voor bepaalde artikelen geen retouren accepteren", "overtreft deze kenmerkende bestseller alle verwachtingen") en de kop "4 SPORTERS" staan er nog. Open sinds 25-9. *Bron: 2026-09-25-seo-audit, 8-10.*
4. **Sporters-claim gelijktrekken (nieuw).** Zie de actie hierboven: "3500+" staat op bijna elke NL-pagina, "3000+" in het feitenbestand.
5. **Beleid gelijktrekken (juridisch).** `/policies/refund-policy`: 14 dagen, "ongeopend" en 25%. `/pages/retourbeleid`: "ongeopend" en 25%. `/policies/terms-of-service`: €4,25 en 14 dagen. `/policies/shipping-policy`: "vóór 16:00". De vastgestelde waarden staan in [[Feiten & Actuele Staat]]. Ongewijzigd. *Bron: backlog "Nieuwe verzend-/retour-/betalingspagina's".*
6. **Kapotte H1 op de drie EN-sportpagina's.** Ook na de live-fixes nog kapot (gecontroleerd 11-10, 17:30). Nog steeds "Gripsokken voor grip socks for padel" (en ook voor tennis en football). *Bron: 8-10 nieuwe run.*
7. **Rugby.** `/pages/gripsokken-voor-rugby` geeft nog 404, terwijl de titel van `/collections/gripsokken` ("voor voetbal, tennis & rugby"), de FAQ en `/pages/ontdek-jouw-sport` rugby beloven. Publiceren of de belofte weghalen. *Bron: 8-10.*
8. **`InStock` bij voorraad 0.** Alle zes de 2.0-varianten staan op `available: true` en `InStock` in het schema. *Bron: besluit 8-10.*

**P2 — deze maand (structuur, schema en interne links)**

9. **Organization-schema.** Nog steeds alleen naam, logo en url, met `http://schema.org`; op sportpagina's en `/pages/over-ons` wijst `url` naar de pagina zelf. Eerst het besluit over socials en KvK. *Bron: 8-10.*
10. **Product-schema.** Nog geen `gtin`, `shippingDetails`, `hasMerchantReturnPolicy`, `itemCondition` of `variesBy`. Het barcodeveld in Shopify is leeg (`null` op 2.0). Pas na punt 5. *Bron: 8-10.*
11. **Oude URL `/products/hi-grip-gripsokken-1`.** Deze URL krijgt deze week 328 vertoningen (CTR 0,91%) en draagt bijna alle vertoningen voor "gripsokken" (positie 5,8, was 7,7). De redirect loopt nog in 2 stappen. *Bron: 8-10, backlog 17.*
12. **Blogs.** Nog steeds geen enkele link van een blogartikel naar een sport- of productpagina. Het Article-schema heeft een hashtag als `articleBody` en een lege `description`. *Bron: 8-10.*
13. **Kannibalisatie en ruis.** `/collections/all` (105 vertoningen deze week, geen meta description, zelf-canonical) en `/pages/collection` concurreren met `/collections/gripsokken`. `/blogs/intern` staat nog publiek. *Bron: 8-10, backlog.*
14. **Koppen en titels.** Geen H1 op `/pages/retail`, `/pages/pilates`, `/pages/retourbeleid` en `/pages/terugbetalingsbeleid` (die laatste heet nog "Betalingsbeleid"). Drie H1's op `/pages/verzendbeleid`. Korte titels op Over Ons, Retail, Pilates, Contact, Zakelijk en Clubwear. *Bron: 8-10.*
15. **Trustpilot 4,6 tonen.** Op de homepage staat geen cijfer en geen bron. *Bron: 8-10.*
16. **PageSpeed meten.** Het openbare quotum gaf opnieuw 429, en met de servicesleutel kwam 403 (API staat uit in het project). Er is dus nog steeds geen LCP-, INP- of CLS-meting. *Bron: 8-10.*

### SEO Health Score — 58/100 (berekend 11-10, na de live-fixes)

Methode: de vaste zeven categorieën en wegingen van claude-seo, dezelfde als in [[2026-09-25-seo-audit]] (54/100). Basis: een nieuwe crawl van alle 52 NL-URL's uit de sitemap op 11-10 (alle 200), plus de meting in deze notitie. Het is een eigen beoordeling binnen deze sessie, niet extern gevalideerd.

| Categorie | Gewicht | 11-10 | 25-9 | Waarom |
|---|---|---|---|---|
| Technical SEO | 22% | 80 | 78 | Alle 52 URL's geven 200, de canonical verwijst overal naar de pagina zelf en hreflang nl/en/x-default staat overal. Min: rugby-404 (wel gelinkt), `/blogs/intern` (1 woord) en `/pages/collection` in de sitemap, redirect van de oude URL in 2 stappen, `http://schema.org` |
| Content Quality | 23% | 52 | 47 | Plus: sportpagina's 629–652 woorden, demotekst en tegenstrijdig retourbeleid weg. Min: dunne pagina's (`/pages/collection` 37 woorden, contact 46, ons-verhaal 85, retail 95, pilates 101, clubwear 110), blog "Wat zijn gripsokken?" 340 woorden, sportvoedingsblog 45 woorden. Ook min: blessureclaim en "wetenschappelijk bewezen" nog in tekst en schema, en 3000+ naast 3500+ op over-ons en de collectie |
| On-Page SEO | 20% | 50 | 45 | Plus: sport- en productpagina's met een goede title en H1. Min: 21 titels onder 30 tekens (bijna alle /pages/ en de blogoverzichten), geen H1 op 4 pagina's (terugbetalingsbeleid, retourbeleid, retail, pilates), drie H1's op verzend- en privacybeleid, collectie-H1 "Kies je gripsok." zonder zoekwoord. Geen enkele van de 24 blogs linkt naar een product- of sportpagina |
| Schema | 10% | 55 | 52 | Plus: 22:00 weg uit het FAQ-schema, Breadcrumb overal, Article met auteur, geen nep-`aggregateRating`. Min: blessureclaim en "wetenschappelijk bewezen" in het FAQ- en Product-schema, kale Organization zonder `sameAs`, geen `gtin`/`shippingDetails`/`hasMerchantReturnPolicy`, `InStock` bij voorraad 0 |
| Performance | 10% | 45 | 35 | Indicatief: er is nog steeds geen CWV-meting, want PageSpeed geeft 429/403 en LCP was in de browser niet meetbaar. Labmeting op mobiel formaat: 273–302 requests, 790–940 kB, homepage geladen in 0,65 s en productpagina in 2,0 s (warme cache). De HTML is 348–542 kB met 107–122 scripts, en de Bundler-restanten (`nice-team.net`) laden nog |
| AI Search Readiness | 10% | 52 | 60 | AI-bots zijn toegelaten, sportpagina's geven eerst het antwoord en er is een EN-versie. Min: `llms.txt` is de Shopify-standaard, Organization zonder `sameAs` of KvK, en claims in het schema wijken af van de formuleringsregel. Lager dan 25-9 omdat de GEO-meting van 8-10 (38) de zwakke entiteit liet zien |
| Images | 5% | 60 | 50 | Per pagina meestal 1 afbeelding zonder alt; uitschieters zijn de homepage (4 van 25) en over-ons (5 van 20) |
| **Totaal** | | **58** | **54** | |

**Wat de score het snelst omhoog trekt:** de blessure- en bewijsclaim uit het schema en de tekst halen, en de 21 korte titels en zes ontbrekende of dubbele H1's rechtzetten. Daarna een link vanuit de 24 blogs naar een sport- of productpagina, en Organization met `sameAs` en `https`. Samen zijn die goed voor ongeveer +6 tot +8 (content, on-page, schema en AI). Al deze punten staan al in de prioriteitenlijst hierboven.

### Uitgevoerd op 11-10 (besluit Lars) en nieuwe meting

Lars besloot: overal 3500+ sporters (de tijdlijn op /pages/over-ons blijft 3000+), het feitenbestand houdt geen voorraad meer bij, en de punten 1, 3, 4, 5 en 6 van de prioriteitenlijst mochten live. Eerst gezet in werkthema `201133490503`, door Lars gecontroleerd, daarna live. Details en back-ups: [[Update Log]] en `05_Research/_uitvoer/2026-10-11-live-fixes/`.

- **Live in het thema:** FAQ-schema (3 sporters, binnen 1 werkdag, geen 22:00), /pages/ons-verhaal (3 founders, demotekst weg), /pages/retourbeleid ("ongeopend" en 25% weg), 1.0-pagina EN 3,500+.
- **Live via vertalingen en paginameta:** EN-aankondigingsbalk, EN-shopmeta, 22:00 weg op de drie EN-sportpagina's, €30 → €35 en "10 PM" weg op de EN 2.0-pagina's, /pages/over-ons-meta 3 sporters (NL en EN).
- **Nog bij Lars:** beleid plakken (de koppeling mist `write_legal_policies`), homepage-meta (Online Store → Voorkeuren) en de collectie-USP in de thema-editor (Shopify weigert `collection.json` om een bestaande ongeldige knopinstelling).

**Waarom EN niet meeging (drie oorzaken):** (1) EN-vertalingen staan los van de NL-tekst; na een NL-wijziging krijgen ze `outdated: true` maar blijven ze live staan, en bijna alle EN-vertalingen staan nu op verouderd. (2) Vaste Nederlandse tekst in de code: `sport-hero.liquid` plakt "Gripsokken voor" vóór de EN-paginatitel (vandaar de kapotte H1), en het FAQ-schema is een vaste NL-kopie die ook op /en verschijnt. (3) Custom-liquid-blokken met hardgecodeerd Engels (`if request.locale.iso_code == 'en'`) gaan niet mee met een NL-wijziging.

**Vaste checklistscore (20 checks op techniek, feiten, beleid en schema; niet vergelijkbaar met de 62 van 8-10):** 12/100 vóór, **24/100** na de live-fixes van vandaag. Als Lars het beleid plakt en de twee tekstvelden aanpast, komt de checklist uit op ongeveer 57/100; de rest zijn de schema- en techniekpunten uit P2.

**Posities (Search Console, 28 dagen tot 8-10; de fixes van vandaag zijn hier nog niet in te zien):** gripsokken 6,4 (was 9,6, 299 vertoningen), gripsocks 7,8 (was 9,7), higrip 2,6, hi grip 4,8 (was 6,1), high grip 4,0 (was 7,1), football grip socks 6,2, beste gripsokken 20,7 (was 23). Sportpagina's (7 dagen): padel 3,3, tennis 3,7, op kleine aantallen.

### Wat er sinds vorige week beter is

- **Zoekprestaties.** Search Console 2–8 okt tegenover 25 sep–1 okt: 61 klikken (was 18), 1.011 vertoningen (was 830), CTR 6,03% (was 2,17%). Over 28 dagen: 156 klikken (was 108), positie 8,1 (was 11,0).
- **Merkzoekopdrachten.** "higrip" positie 2,5 (16 klikken), "hi grip" 2,9 (was 7,7; 8 klikken), "highgrip" nieuw (3 klikken). De homepage staat voor "higrip" nu op 1,1.
- **Kernwoord.** "gripsokken" staat op positie 5,8 (was 7,7), maar met 85 vertoningen en 1 klik, via de oude URL. Onder ~100 vertoningen zijn dit signalen, geen conclusies.
- **Sportpagina's.** Padel staat op positie 3,3 (was 7,2) en tennis op 3,7, maar met 15–23 vertoningen.
- **GA4 4–10 okt tegenover 27 sep–3 okt.** 122 sessies (was 90), engagement 64% (was 29%), organisch 70 (was 32), NL 86 (was 38), VS 16 (was 43, minder botverkeer). 4 key events en €100,68 tegenover 0. De omzet is leidend in Shopify, niet in GA4.
- **Op de site.** `/pages/over-ons` zegt nu "Drie founders één missie". Het meta description en het AboutPage-schema zeggen nog "4 gedreven sporters". Bevestigd: `/en/` heeft één Engelse H1 en een ingevulde titel, en `/collections/frontpage` staat niet meer in de sitemap (404). Die backlogpunten zijn in feite opgelost, maar de Actiecontrole heeft ze niet afgevinkt (zie de acties).

### Wat ongewijzigd is

Alles uit de P1- en P2-lijst hierboven, behalve punt 3 deels. Prijzen op de site kloppen met het feitenbestand (1.0 €14,95, 2.0 €17,95). Er staat nergens `aggregateRating`, en dat is correct. `/llms.txt` is nog de Shopify-standaardtekst over bestellen door agents.

### Nieuw deze week

- **3500+ tegen 3000+ sporters.** De aankondigingsbalk ("De keuze van 3500+ sporters") staat op vrijwel elke NL-pagina en de productpagina's noemen het tot negen keer. De homepage-meta, de EN-pagina's en het feitenbestand zeggen 3000+. De audits van 8-10 hebben dit niet gemeld, dus het is onbekend of het nieuw live staat of eerder gemist is.
- **Oude 2.0-handle nog in Google.** `/products/performance-grip-socks-2-0-zwart` had 234 vertoningen in 28 dagen. De redirect is één stap (301) naar `performance-gripsokken-2-0-zwart`, dus dat lost zichzelf op; alleen volgen.

## Wat niet lukte

PageSpeed Insights: 429 op het openbare quotum en 403 met de servicesleutel, dus geen LCP-, INP- of CLS-meting. Search Console loopt 3 dagen achter (data tot 8 okt). Er is geen AI-zichtbaarheidsmeting gedaan (ChatGPT, Perplexity, Gemini, AI Mode) en de Merchant Center-feed is niet gecontroleerd. Woordaantallen zijn gemeten inclusief navigatie en dus niet 1-op-1 te vergelijken met 8-10. Het commando `/claude-seo:seo` is niet geïnstalleerd in deze sessie; de audit is gedaan met de vault-tools.

## Bronnen

- Live crawl van www.higrip.nl op 11-10-2026: 43 URL's (NL, `/en/`, beleid, blogs, oude en 404-URL's), plus `/products/<handle>.js` voor de 3 producten
- `python -I 05_Research/_tools/google_data.py gsc --dagen 7`, `gsc --dagen 28` en `ga4 --dagen 7`
- Vault: [[Feiten & Actuele Staat]], [[Performance Grip Socks 2.0]], [[2026-10-08-audit-higrip-nl-seo-aeo-geo-aio-sxo-nieuwe-run]], [[2026-10-08-seo-aeo-geo-aio-sxo-audit]], [[2026-10-05-regressiecheck]], `05_Research/_backlog/ACTIEBACKLOG.md`, `05_Research/_backlog/CONTROLE.json`

## Aantekeningen
