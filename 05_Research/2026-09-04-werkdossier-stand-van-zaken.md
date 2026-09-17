---
id: 2026-09-04-werkdossier-stand-van-zaken
titel: "Werkdossier higrip.nl — stand van zaken 4 september 2026"
datum: 2026-09-04
bron: los
routine: ""
categorie: Techniek
status: in-uitvoering
prioriteit: P1
samenvatting: "Vier audits van 3 september samengebracht: twee blokkades (producten koppelen aan collectie gripsokken, purchase-event aan de checkout), 18 beslispunten en zeven tegenspraken (besteldeadline, retourtermijn, verzenddrempel) die in thema 200269168967 zijn rechtgezet. De officiële Shopify-policies lopen nu achter op wat de site belooft."
gerelateerd: [2026-09-15-seo-audit, 2026-09-03-analytics-kpi-meetgat, 2026-09-14-weekoverzicht]
vervangt: []
bronbestand: "C:\\Users\\Test\\OneDrive\\Documents\\HI-Grip-Vault-\\03_Website_Agent\\Analyse\\Stand van Zaken — Werkdossier 2026-09-04.md"
deadline: ""
---
# Werkdossier higrip.nl — stand van zaken 4 september 2026

## In het kort

Wat er van dit dossier daadwerkelijk is doorgevoerd staat in [[Update Log]]. De vaste cijfers (1,17 / 95% / 2.000+ / 4,6 op 17) gelden voor alle copy en schema; niets uit de tegenspraken-lijst overnemen.

## Bevindingen

> Vault-versie van het werkdossier dat op 4 september 2026 is samengesteld uit vier audits van 3 september (SEO & techniek, meting & conversie, toegankelijkheid, content). Het originele dossier staat als artifact op claude.ai; **dit bestand is de bron in de vault**, zodat een volgende sessie er zonder externe link bij kan. Wat er sindsdien daadwerkelijk is doorgevoerd staat in [[Update Log]].

**Let op bij het lezen:** waar een cijfer nog niet vaststaat, staat het hieronder onder *Tegenspraken* en niet onder *Cijfers*. Neem niets uit de tegenspraken-lijst over in nieuwe copy of schema.

---

### De twee dingen die alles blokkeren

1. **Producten koppelen aan de collectie `gripsokken`.** De hub staat klaar maar toont "Geen producten gevonden". Elke spoke die ernaartoe linkt versterkt nu niets — en de canonical-regel die ik in het thema heb gezet activeert zichzelf pas zodra de hub gevuld is.
2. **Purchase-event koppelen aan de checkout.** Zonder dit is van geen enkele wijziging te zien of hij omzet oplevert.

Samen ongeveer een half uur werk, allebei alleen door lars te doen. Zonder deze twee blijft de rest van dit dossier theorie.

---

### Beslisregister

#### Blokkerend

| # | Keuze | Waarom het blokkeert | Wie |
|---|---|---|---|
| 1 | Producten koppelen aan collectie `gripsokken` | Hub is leeg; elke interne link ernaartoe versterkt niets | lars |
| 2 | Purchase-event aan de checkout koppelen | Zonder dit geen enkele meetbare uitkomst | lars |
| 3 | Template `gripsokken` toewijzen aan de collectie | Anders blijft de oude pagina actief en is het gebouwde onzichtbaar | lars |

#### Strategisch

| # | Keuze | Opties |
|---|---|---|
| 4 | Engelse versie | Afmaken of uitzetten. Nu geven drie FAQ-vragen hetzelfde antwoord en is de meta description Nederlands. **Advies: uitzetten** — de focus ligt op Nederland |
| 5 | Productsterren in Google | Trustpilot 4,6 op 17 is een *winkelscore* en mag alleen op Organization-schema. Sterren bij producten vereisen een review-app |
| 6 | Drie off-topic blogartikelen | Noindex, herschrijven, of laten staan |
| 7 | `/pages/collection` | 301 naar de hub, of ombouwen tot echte shoppagina. Nu belooft de titel "Shop gripsokken" en toont hij het retourbeleid |
| 8 | `/collections/all` en `/frontpage` | Canonical naar de hub of noindex — **doorgevoerd in het thema**, zie [[Update Log]] |
| 9 | `/blogs/intern` | Noindex of verwijderen — **noindex doorgevoerd**, zie [[Update Log]] |
| 10 | Volgorde van de sportpagina's | Hangt af van de Search Console-export |
| 11 | Skisokken | Geparkeerd op verzoek van lars. Wanneer erbij? |

#### Uitvoering

| # | Actie | Waar | Wie |
|---|---|---|---|
| 12 | Kortingspopup vertragen én Escape laten sluiten, sluitknop naar ≥24 px | EcomSend-app | lars |
| 13 | Trustpilot-widget repareren — laadt van drie domeinen en toont niets | Trustpilot-app | lars |
| 14 | `sameAs` invullen: Instagram, TikTok, Trustpilot | ~~Theme Editor~~ → **themacode, doorgevoerd** (zie correctie hieronder) | Website Agent |
| 15 | Titels en meta descriptions site-breed omdraaien naar zoekwoord-eerst | Shopify Admin | lars plakt, Website Agent levert teksten |
| 16 | Search Console-export (3 maanden, Zoekopdrachten + Pagina's) | Google Search Console | lars |
| 17 | Shopify Analytics-export (12 maanden: orders, omzet, AOV, conversie) | Shopify Admin | lars |
| 18 | Eén uur klantstem: 50 service-mails, 17 reviews, eerste vraag per clubgesprek | Mailbox, Trustpilot | lars |

---

### Tegenspraken — opgelost in het thema op 2026-09-04

Zeven plekken waar de site zichzelf tegensprak. Vijf kwamen uit het dossier, twee zijn er op 4 september bij gevonden, plus een vierde beoordelingscijfer.

**Correctie op mijn eerste inschatting:** ik noemde deze tegenspraken "bedrijfsbeslissingen die lars moet nemen". lars corrigeerde dat — het zijn gewoon waarden die bij een eerdere wijziging niet overal zijn meegenomen. De juiste waarden zijn bevestigd en **staan nu overal gelijk in theme `200269168967`**: besteldeadline **22:00**, retourtermijn **30 dagen**, gratis verzending vanaf **€35**.

| Wat | Was | Is nu | Nog te doen |
|---|---|---|---|
| Besteldeadline | 22:00 / 16:00 / 17:00 | **22:00** overal | ⚠️ Shopify-verzendpolicy zegt nog 16:00 |
| Retourtermijn | 30 / 14 dagen | **30 dagen** overal | ⚠️ Shopify-retourpolicy zegt nog 14 dagen |
| Verzenddrempel | €35 / €30 | **€35** overal | Meta descriptions in Admin |
| Beoordeling | 4,5 / 4,6 / **4,8** | 4,6 (schema-default) | Testimonials-sectie nog op 4,5 |
| Klantenaantal | 2.000+ / 1500+ | 2.000+ op alle pagina's | Meta descriptions in Admin |
| Lopende actie | 50% korting / 2+2 gratis | — | Jubileum viel mei 2026, WK-actie liep af 19 juli 2026 |

#### ⚠️ De policy-pagina's lopen nu achter op de site

Dit is het belangrijkste dat hieruit volgt en het kan alleen in Shopify Admin. De **officieel bindende policies** (Instellingen → Beleid) zeggen nog:

- Verzendbeleid: *"bestellingen die vóór **16:00** uur zijn geplaatst"*
- Retourbeleid: *"binnen **14 dagen** na ontvangst retourneren"*

De site belooft nu 22:00 en 30 dagen. Dat is de gevaarlijke kant van het verschil: je adverteert ruimer dan je policy dekt. **Beide policies moeten in Shopify Admin worden bijgewerkt naar 22:00 en 30 dagen.** Let op: `templates/page.verzendbeleid.json` en `page.retourbeleid.json` zijn *themapagina's* die de policies dupliceren — die stonden al goed en zijn dus niet hetzelfde als de echte policy onder `/policies/`.

#### Waar de waarden stonden

Bewaard voor het geval er een volgende ronde nodig is. Paden relatief aan de themamap.

**Besteldeadline** — al goed op 22:00: `templates/collection.json:24`, `templates/product.json:220,305,1046`, `templates/product.performance-grip-socks-2.json:222,307,1328`, `templates/page.verzendbeleid.json:19`, `sections/header-group.json:133`, `sections/shop-intro.liquid:89` · gecorrigeerd van 16:00: `templates/index.json`, `templates/page.veelgestelde-vragen.json`, `templates/product.product-gratis-verzending.json` (2×), `templates/collection.gripsokken.json`, `snippets/faq-schema.liquid`, `snippets/padel-faq.liquid` (2×), `snippets/padel-usp-bar.liquid` (2×) · van 17:00: `snippets/product-schema.liquid`

**Retourtermijn** — al goed op 30 dagen: `templates/collection.json:30`, `templates/page.retourbeleid.json:19`, `templates/product.json:305,1124`, `templates/product.performance-grip-socks-2.json:307,1406`, `sections/hi-wk-promo.liquid:250`, `sections/shop-intro.liquid:90` · gecorrigeerd van 14 dagen: `templates/page.json` (3×), `templates/page.veelgestelde-vragen.json`, `templates/product.product-gratis-verzending.json`

**Verzenddrempel** — al goed op €35: `templates/collection.json:18`, `sections/header-group.json:103`, `sections/shop-intro.liquid:79,88` · gecorrigeerd van €30: `templates/page.veelgestelde-vragen.json`, `templates/product.json`, `templates/product.performance-grip-socks-2.json`

---

### Cijfers die wél vaststaan

Gebruik deze in copy en schema; verzin er nooit nieuwe bij.

| Gegeven | Waarde | Bron |
|---|---|---|
| Wrijvingscoëfficiënt | 1,17 tegenover 0,60 | FAQ met drie citaties |
| Meer grip | 95% | Merkclaim, productpagina |
| Wetenschappelijke bronnen | Apps et al. 2020 · Apps et al. 2022 · Friedl et al. 2023 | FAQ-snippet |
| Klantenaantal | 2.000+ sporters | Consistent op alle pagina's |
| Trustpilot | 4,6 uit 5 · 17 reviews | Bij de bron opgehaald, 3 sep |
| Maten 1.0 | 34–39 · 40–46 | Productvarianten |
| Maten 2.0 | 35–38 · 39–42 · 43–47 | Productvarianten |
| 2.0 compressie | 15–20 mmHg | Productbeschrijving |
| 2.0 kenmerken | 7 zones, waarvan er 1 nog omschreven moet worden | Infographic |
| Team | 4 oprichters | Over ons |
| Productlijn | 3 producten: Gripsok 1.0, 2.0 wit, 2.0 zwart | Sitemap |

#### Snelheid — labmeting 3 sep, mobiele viewport

TTFB 26 ms · FCP 584 ms · CLS 0,00 · 0 lange taken · 0 render-blokkerende scripts (alle 28 head-scripts zijn modules). **Zwaar:** 241 requests, ~966 KB, 70 script-tags. LCP niet betrouwbaar te meten (PSI-API op dagquotum).

---

### Het meetgat

GA4-property `476032345`. **Nul purchase-events in de volledige historie** — niet nul deze week, maar nul sinds februari 2025, ook in de maanden met 266–334 sessies. Conversieratio, omzet per bezoeker en kanaalattributie zijn in GA4 dus niet laag maar onbestaand. Dit beantwoordt de openstaande vraag uit [[Analytics & KPI Dashboard]].

De meting is hersteld op **30 augustus 2026 om 19:42**; alle andere e-commerce-events vuren sindsdien. Alleen het event op de bedankpagina na betaling ontbreekt — de tag zit niet aan de Shopify-checkout vast.

**Sessies per maand:** sep 2025 266 · okt 292 · nov 334 · dec 233 · jan 2026 1 (meting valt uit) · feb–jul 2026 geen enkele rij, zes maanden definitief verloren · aug 12 · sep 24.

**Events 30 aug – 3 sep (4,5 dagen):** page_view 45 · session_start 35 · first_visit 31 · user_engagement 28 · scroll 16 · view_item 8 · view_item_list 3 · begin_checkout 2 · add_to_cart 1 · click 1 · **purchase 0**.

**Twee structurele gevolgen van dit volume:**
- **A/B-testen kan niet.** Voor 20% verbetering op ~2% conversie heb je circa 20.000 sessies per variant nodig; bij twaalf sessies per dag is dat ruim vier jaar per variant. Werk met voor/na op grote wijzigingen plus kwalitatief onderzoek.
- **Echte Core Web Vitals komen er nooit.** Google's drempel voor veldgegevens haal je bij dit volume niet. Labmetingen zijn het enige dat er ooit zal zijn — behandel snelheid als hygiëne.

---

### Contentinventaris

3 producten · 3 collecties (twee leeg) · 19 pagina's (vier onder de 400 woorden) · 3 blogs (waarvan één interne, publiek zichtbaar) · 23 artikelen (vrijwel alle 400–750 woorden).

**Problemen:** 3 kannibaliserende paren (blessures · onderhoud · pilates) · 3 off-topic artikelen (sportvoeding · ochtendroutine · mentale voordelen) · 1 sportlandingspagina (alleen padel, 1167 woorden — het te kopiëren model) · 6 ontbrekende spokes (voetbal, tennis, fitness, hockey, basketbal, rugby).

**Strategie in één zin:** alle kracht naar één sterke gripsokken-hub, met de sportpagina's als spokes die er met beschrijvende ankertekst naartoe linken. Merk-breed, niet sport-per-sport, zodat de skisokkenlijn er straks in past. **Eerst verdichten, dan pas schrijven.**

---

### Correcties op het dossier zelf

Twee dingen kloppen niet meer of niet helemaal, vastgesteld bij het doorvoeren op 4 september. Zie [[Update Log]] voor wat er vervolgens is gebouwd.

- **Beslispunt 14 (`sameAs`) kán niet in de Theme Editor.** Het dossier zet hem op "Theme Editor, jij". Maar `snippets/organization-schema.liquid` leest `settings.social_instagram_link` en soortgenoten — en die instellingen bestaan niet in Horizon. Dat snippet zou `sameAs` dus altijd leeg hebben gelaten, en de Theme Editor biedt er geen veld voor. Opgelost in code, in de Organization-node in `sections/header.liquid`.
- **Het vijfde lettertype `GTStandard-MMedium` zit niet in elk thema.** In `200269168967` staan alle vier de fontinstellingen op Poppins (n8/n7/n4/n5). Die bevinding geldt dus voor het live-thema, niet overal.

### Nieuwe bevindingen van 4 september

Buiten de 39 uit het dossier, gevonden in theme `200269168967`:

- **Derde besteldeadline (17:00)** en **de retourtermijn-tegenspraak (14 vs 30 dagen)** — beide hierboven verwerkt.
- **30 KB ongebruikte blocking CSS op de homepage en de shoppagina.** Zes secties laadden `padel-page.css` terwijl dat bestand uitsluitend `.padel-*`-selectors en `--padel-*`-tokens bevat, en geen van die secties één zo'n klasse of token gebruikt. Verwijderd.
- **De typografie-instellingen staan omgekeerd.** `type_body_font` = `poppins_n8` (800) en `type_heading_font` = `poppins_n4` (400), met `type_size_paragraph` = 14. Nagemeten in de gerenderde CSS van de preview: `--font-body--weight: 800`, `--font-heading--weight: 400`. Gevolg: lopende tekst is ExtraBold, de H1 van 56px en H2 van 48px zijn Regular — de hiërarchie staat op zijn kop, en `<strong>` doet niets meer omdat alles al 800 is. Dat het niet meteen opvalt komt doordat de maatwerksecties (`g2-`, `padel-`, `shop-`) hun eigen `font-weight` zetten; het treft vooral de Horizon-eigen onderdelen: productbeschrijvingen, blogartikelen, beleidspagina's, FAQ-tekst en de winkelwagen. Daarnaast staan `type_case_h1`/`h2` op `none` terwijl koppen UPPERCASE horen. [[Brand Identity Overview]] schrijft body Poppins 400 op 15–16px voor en koppen 700–800. Zichtbare ontwerpwijziging, dus wacht op akkoord van lars — zie [[Update Log]].
- **Een vierde beoordelingscijfer.** `sections/hi-wk-promo.liquid` had als schema-default `"4.8/5 op Trustpilot"`, naast de 4,5 uit de testimonials en de werkelijke 4,6 op 17 reviews. Default gecorrigeerd naar 4,6; de testimonials-sectie staat nog op 4,5.
- **`snippets/product-schema.liquid` was een tikkende bom.** Niet gerenderd, maar mét harde fallbacks 4,5 en 7 reviews op metafields die niet bestaan. Wie dit ooit aanzet, publiceert verzonnen reviews. Dit is dossier-bevinding H11; de aggregateRating is nu uit het bestand gehaald.

---

### Gerelateerde bestanden

- [[Update Log]] — wat er van dit dossier daadwerkelijk is doorgevoerd, en waar
- [[Technische Procedures]] — hoe een themawijziging naar Shopify gaat
- [[Conversie Optimalisatie Checklist]] — de CRO-kant
- [[Analytics & KPI Dashboard]] — het meetgat in context
- [[SEO Strategie & Keywords]] — de hub-and-spoke-strategie
- [[Website Doel & KPI's]]
- [[Goedkeuringsworkflow]] — hoe dit richting live gaat

## Acties

- [ ] P1 · Producten koppelen aan collectie `gripsokken` — hub is leeg (Shopify Admin, lars)
- [ ] P1 · Purchase-event aan de Shopify-checkout koppelen — bedankpagina-tag ontbreekt
- [ ] P1 · Template `gripsokken` toewijzen aan de collectie
- [ ] P1 · Verzend- en retourbeleid in Shopify Admin bijwerken naar 22:00 en 30 dagen — policies lopen achter op de site
- [ ] P2 · Besluit Engelse versie: afmaken of uitzetten (advies: uitzetten)
- [ ] P2 · Besluit drie off-topic blogartikelen: noindex, herschrijven of laten staan
- [ ] P2 · `/pages/collection`: 301 naar de hub of ombouwen tot echte shoppagina
- [ ] P2 · Kortingspopup vertragen, met Escape sluitbaar, sluitknop ≥ 24 px (EcomSend)
- [ ] P2 · Trustpilot-widget repareren — laadt van drie domeinen en toont niets
- [ ] P2 · Titels en meta descriptions site-breed zoekwoord-eerst (Website Agent levert, lars plakt)
- [ ] P2 · Search Console-export (3 maanden, Zoekopdrachten + Pagina's)
- [ ] P2 · Shopify Analytics-export (12 maanden: orders, omzet, AOV, conversie)
- [ ] P2 · Eén uur klantstem: 50 service-mails, 17 reviews, eerste vraag per clubgesprek
- [ ] P2 · Akkoord op omdraaien typografie-instellingen (body Poppins 400/16px, koppen 800 UPPERCASE)
- [ ] P3 · Testimonials-sectie van 4,5 naar 4,6 zetten
- [ ] P3 · Volgorde sportpagina's bepalen na de Search Console-export
- [ ] P3 · Skisokken: moment bepalen (geparkeerd op verzoek van lars)

## Bronnen

- Origineel: [[Stand van Zaken — Werkdossier 2026-09-04]]
- Doorgevoerd: [[Update Log]] (2026-09-04)
- Labmeting 3 september (mobiele viewport), GA4-property 476032345

## Aantekeningen
