---
type: kennis
gebied: website-agent
bijgewerkt: 2026-10-23
---

# Update Log — Website Agent

> Datumgewijze log van daadwerkelijk doorgevoerde wijzigingen aan Shopify-thema's. Voor de procedure zelf: zie [[Technische Procedures]]. Voor de inhoudelijke checklist erachter: zie [[Conversie Optimalisatie Checklist]].

---

> **Werkthema (5-10-2026, lars): alleen `201133490503` "AI website workspace 2.0".** Eerdere werkthema's (`200269168967` en ouder) zijn niet meer in gebruik en staan hieronder alleen als historie. Live is `201132507463`; check altijd `shopify theme list`, ID's schuiven. De entries van 21-09 t/m 02-10 zijn op 5-10 achteraf bijgewerkt uit de vaultnotities (Agent Werk & Kwaliteit Overzicht, [[Sportlanding-systeem (21-9-2026)]], [[Technische Procedures]]). Kleinere wijzigingen daartussen staan er niet bij, want de theme-map is geen git-repo.

---

## 2026-10-23 — `202669916487` "Live HÏ Grip WEBSITE + contactpagina" (niet gepubliceerd): homepage 1.36 als 14 aanpasbare secties

**Wat:** het homepage-prototype v1.36 als 14 eigen secties (`sections/hp-01-hero` … `hp-14-teamorders`), `snippets/hp-base` en `hp-img`, `assets/hp-home.css` en `hp-home.js`, een nieuwe `templates/index.json` en in `layout/theme.liquid` alleen de `faq-schema`-render op de homepage eruit (de FAQ-sectie levert nu zelf FAQPage-data, anders stond hij er dubbel). Elke tekst, kleur, foto, link, maat (mobiel en laptop apart), ruimte, uitlijning, knopstijl inclusief hover en elke animatie staat in de thema-editor. Standaard is elke sectie pixelgelijk aan het prototype (getest op 9 schermformaten van 360 tot 1920 px).

**Hoe:** gebouwd en getest in `06_Website_Agent/Homepage-prototype/shopify/` (zie de README daar), geüpload met `themeFilesUpsert` via Shopify's tijdelijke uploadopslag. Na de upload komen alle 20 bestanden byte voor byte overeen met de lokale versie (md5). Het live-thema `202667458887` is niet aangeraakt en er is niets gepubliceerd.

**Terugzetten:** `templates/index.json` en `layout/theme.liquid` van vóór de upload staan in `06_Website_Agent/Homepage-prototype/shopify/backup/`.

**Herstel 12:25:** sectie HÏ 12 · Slogan gebruikte voor de instelling "Grootte" dezelfde CSS-variabele (`--hp-12-k`) als de scrollanimatie van de knop, waardoor de titel bij scrollen meekromp en -groeide. Hernoemd naar `--hp-12-title-k`; alleen `sections/hp-12-slogan.liquid` en die ene regel in `assets/hp-home.css` opnieuw geüpload, `templates/index.json` niet aangeraakt. Getest met beweging aan op vier scrollposities: gelijk aan het prototype.

**Features in Kies je paar (12:48, op verzoek van Timo):** per productkaart een strakke featurelijst met vinkje, korte kop en op laptop een uitleg (op mobiel alleen de koppen, instelbaar). 1.0: siliconen grip · vanaf €10,99 per paar (5-pack; 3-pack €35,95) · voor elke training. 2.0: grip + 15–20 mmHg compressie · 30% Coolmax® · naadloos met versterkte hiel. Alle claims uit [[Feiten & Actuele Staat]] en [[Performance Grip Socks 2.0]]. Geüpload: `sections/hp-02-kies-je-paar.liquid`, `assets/hp-home.css` (alleen regels voor `.hp-02`) en `templates/index.json`, waarin alleen `hp_02` is aangepast (de rest is de editorstand van 12:29, kopie in `shopify/backup/`). Let op: dit zet de punten op mobiel terug, die Lars op 20-10 (versie 1.20) daar had weggehaald; uit te zetten met "Features tonen op mobiel".

**Kleurwissel 2.0 (13:03, op verzoek van Timo):** bij een kleurwissel veegde de witte foto over de zwarte en schemerde de zwarte door (multiply). Nu schuift de huidige foto links weg en de nieuwe van rechts in (480 ms). Alleen 6 regels voor `.hp-02-media__prod` in `assets/hp-home.css`; sectie en `templates/index.json` niet aangeraakt.

**Open:** de testafbeelding `assets/hp-urltest.webp` in dit thema mag weg (Shopify-koppeling mag geen themabestanden verwijderen; via Code bewerken). Live zetten alleen na akkoord van lars.

**Wie:** cloudsessie 23-10, op verzoek van Timo.

---

## 2026-10-11 — LIVE `201132507463`: 4 bestanden + EN-vertalingen + paginameta, op expliciet verzoek van lars

**Wat (thema, via Shopify CLI in de cloudsessie):** `snippets/faq-schema.liquid` (3 sporters; "binnen 1 werkdag verzonden" in plaats van 22:00), `templates/page.ons-verhaal.json` (3 sporters, rij Luuk eruit, demoteksten vervangen door sport en quote uit de founders-sectie van /pages/over-ons), `templates/page.retourbeleid.json` ("ongeopend" en 25% herbevoorrading eruit), `templates/product.performance-grip-socks-1.json` (EN social-proof 3,500+). Eerst in werkthema `201133490503` gezet en door lars gecontroleerd.

**Hoe:** live opnieuw gepulld, alleen tekstvervangingen met `02_Dashboard/_uitvoer/2026-10-11-live-fixes/thema-patch.py`, dan `shopify theme push --only … --nodelete --allow-live`. Prijzen, links en overige instellingen van live zijn niet aangeraakt. Back-up van de 5 bestanden vóór de push: `02_Dashboard/_uitvoer/2026-10-11-live-fixes/backup/live-thema-voor-push/`.

**Geweigerd:** `templates/collection.json` (USP "3000+ sporters gingen je voor" → 3500+). Shopify weigert het bestand om een bestaande ongeldige instelling (`button_border_thickness` < 1), niet om de tekstwijziging. Lars past de USP aan in de thema-editor.

**Via de Admin API (niet het thema):** EN-vertalingen bijgewerkt voor de aankondigingsbalk (3500+), shop-meta EN (zonder 10 PM en "Fewer injuries"), chip "Shipped within 1 business day" op de drie sportpagina's, levertijd en verzendkosten (€35) op de 2.0-productpagina, collectie-USP EN (3500+). Meta description /pages/over-ons NL en EN: 3 gedreven sporters.

**Open bij lars:** beleid plakken (Instellingen → Beleid, tekst in `02_Dashboard/_uitvoer/2026-10-11-live-fixes/beleid-plakken.md`; de koppeling mist `write_legal_policies`), homepage-meta 3000+ → 3500+ (Online Store → Voorkeuren), collectie-USP in de thema-editor.

**Wie:** cloudsessie 11-10, op verzoek van lars. Zie [[2026-10-11-seo-audit-weekdelta]].

---

## 2026-10-02 — LIVE `201132507463`: 9 bestanden, op expliciet verzoek van lars

**Wat:** `assets/hi-headings.css` (kopstijl h1-h3), `assets/hi-faq-hero.css`, `sections/faq-geo.liquid`, `sections/sport-guide.liquid`, `layout/theme.liquid`, `templates/page.sport-tennis.json`, `page.sport-padel.json`, `page.sport-voetbal.json` en `page.veelgestelde-vragen.json`. In de drie sportpagina-templates is de 22:00-verzendbelofte vervangen door "Binnen 1 werkdag verzonden". De sportpagina-templates zijn gebouwd uit de live-template plus alleen de FAQ-sectie uit het werkthema, zodat de live-foto's behouden bleven.

**Hoe:** `shopify theme push` met `--only`, `--nodelete` en `--allow-live`, alleen die 9 bestanden. Back-up van de volledige live-stand van vóór de push: `C:\Users\lars\live-backup-0210`; het gepushte pakket staat in `C:\Users\lars\live-push`. Terugdraaien = die 9 bestanden uit de back-up terugpushen (de nieuwe `hi-*.css`, `faq-geo` en `sport-guide` mogen blijven staan).

**Niet mee:** de rest van het werkthema (o.a. 14 `ai_gen`-blocks, gripsocks2-secties, collection-, index- en product-templates, `ss-*`-secties).

**Open:** Engelse vertalingen van de nieuwe secties ontbreken (`/en` toont Nederlandse tekst in koopgids en FAQ). Overige 22:00-plekken staan nog op live: `shop-intro`, `sport-hero`, `sport-proof`, `faq-schema`. Het werkthema is al gecorrigeerd.

**Wie:** hoofdsessie, op verzoek van lars. Zie ook [[Agent Werk & Kwaliteit Overzicht]] (rijen 2-10).

---

## 2026-10-02 — Werkthema `201133490503`: kopstijl, FAQ-pagina en sport-gids

**Waar:** alleen het werkthema; niets live tot de push hierboven.

**Wat:**
- **Kopstijl:** `assets/hi-headings.css`, h1-h3 in Poppins 800, schuin, -0.04em, HOOFDLETTERS. Een regressie (woorden plakten aan elkaar) is opgelost met `word-spacing: .1em` en `overflow-wrap`; door Design Agent en Denzel op tennis mobiel gecontroleerd.
- **Sport-gids:** `sections/sport-guide.liquid` herontworpen voor tennis, padel en voetbal: koopgids en sport-FAQ samengevoegd, uitklapbaar, FAQPage met 11 vragen, foto bij "Kort antwoord", nummering, accent-CTA. Mobiele tabel bijgewerkt met de `visually-hidden`-class.
- **FAQ-pagina:** hero met grotere foto en witte gradient (`assets/hi-faq-hero.css`); logo-slot (TennisNation) in de sport-CTA.
- 22:00-belofte in het werkthema gecorrigeerd naar "binnen 1 werkdag".

**Controle:** Design Agent liep alle paginatypes langs (desktop en mobiel), geen horizontale overflow. `shopify theme check` geeft 14 errors in andere bestanden (o.a. `ss-comparison-table-6`), los van deze wijzigingen.

**Open voor lars (design-keuzes):** heros op `/pages/ontdek-jouw-sport`, `/pages/zakelijk` en `/pages/over-ons` hebben donkere tekst op een donkere foto; homepage-FAQ-vragen staan in hoofdletter-italic; de cart-drawer-titel is oranje; de cookiebanner heeft een eigen kopstijl.

**Wie:** Design Agent (via `/denzel` → Website Agent) en de hoofdsessie.

---

## 2026-09-21 — Nieuw werkthema `201133490503` en sportlanding-systeem

**Waar:** theme `201133490503` "AI website workspace 2.0" (unpublished; lokaal `C:\Users\lars\ai-workspace-2.0`), opvolger van `200269168967`. Lars wisselde live intussen naar `201132507463`; het schema-herstel van 21-09 (WebSite, FAQPage en Breadcrumb) is daar meegekomen.

**Wat:** sportlanding-systeem: secties `sport-hero`, `sport-proof`, `sport-story`, `sport-product`, `sport-faq`, `sport-related`, `sport-teaser`, stijl `assets/sport-landing.css`, templates `page.sport-{tennis,rugby,voetbal,padel}.json` en een homepage-teaser. Alle `ai_gen_*`-blocks en `gripsocks2-hero` kregen de setting `heading_tag` (H1-H4); de verborgen H1 in de header werd een `<p>`, zodat er precies één H1 per pagina is. Details: [[Sportlanding-systeem (21-9-2026)]].

**Wie:** Website Agent / Design Agent, op verzoek van lars.

---

---

## 2026-09-04 — Werkdossier doorgevoerd in theme `200269168967` (inmiddels vervangen door `201133490503`)

**Waar:** theme `200269168967` ("Bijgewerkte kopie van Bijgewerkte kopie van HÏ Grip WEBSITE", unpublished), op verzoek van lars. Lokale werkkopie: `C:\Users\Test\higrip-theme-ai2`. Bron van het werk: [[Stand van Zaken — Werkdossier 2026-09-04]].

**Live was op dat moment `199814873415` (historisch: het live-ID is sindsdien gewisseld; de actuele stand staat alleen in [[Technische Procedures]]). Daar is niets naartoe gegaan en gaat ook nooit iets naartoe zonder expliciete opdracht.**

**Kwaliteitscontrole:** `shopify theme check` vóór en na. Baseline van het onaangeraakte thema: 44 offenses over 23 bestanden. Na de wijzigingen: 43 over 22. Eén minder, nul nieuwe — de vier nieuwe bestanden zijn schoon. Alle 120 JSON-templates opnieuw gevalideerd na de tekstwijzigingen.

### Structured data

- **WebSite + SearchAction** toegevoegd (`snippets/hi-website-schema.liquid`, alleen op de homepage). Ontbrak volledig.
- **FAQPage op de homepage aangezet.** `snippets/faq-schema.liquid` bestond al maar werd nergens gerenderd. Eerst geverifieerd dat de acht vragen nog exact overeenkomen met de accordeon-blokken in `templates/index.json` (block-id's `jYYdma`/`rJzNEW`/`zGKLfa`/… ongewijzigd sinds 02-08).
- **BreadcrumbList** toegevoegd (`snippets/hi-breadcrumb-schema.liquid`) voor product-, collectie-, artikel-, blog- en paginapagina's. Bevinding H8. Alleen structured data, geen zichtbare breadcrumb — zo raakt geen bestaand ontwerp van slag.
- **Organization-node gerepareerd** in `sections/header.liquid`: `url` wees naar de *huidige* pagina in plaats van naar de shop-URL, `@context` stond op `http`, en `sameAs` ontbrak. Nu Instagram, TikTok, Facebook, LinkedIn en Trustpilot. Dit is beslispunt 14 — dat kon níet in de Theme Editor, zie de correctie in het werkdossier.
- **`snippets/product-schema.liquid` ontwapend** (bevinding H11). Het snippet werd nergens gerenderd maar bevatte harde fallbacks van 4,5 sterren en 7 reviews op metafields die niet bestaan; wie het ooit aanzette publiceerde verzonnen reviews. De `aggregateRating` is eruit, met een kopcommentaar dat uitlegt waarom het snippet bewust ongebruikt blijft (Horizon zet zelf al Product-schema neer via `structured_data`).
- **`snippets/organization-schema.liquid` gemarkeerd als vervangen** — het zou dubbele Organization- en WebSite-nodes geven.

### Canonical en indexering

- **Beslispunt 8 doorgevoerd** in `snippets/meta-tags.liquid`: `/collections/all` en `/collections/frontpage` krijgen een canonical naar de hub `/collections/gripsokken`. **De regel activeert zichzelf pas zodra de hub producten bevat** — staat de hub nog leeg (beslispunt 1), dan blijft de eigen canonical staan en sturen we geen verkeer naar een lege pagina.
- **Beslispunt 9 doorgevoerd:** `/blogs/intern` krijgt `noindex, follow`.

### Toegankelijkheid en HTML

- **Bevinding K2 opgelost.** Horizon zette op de homepage een verborgen `<h1>` met alleen de merknaam neer; samen met de hero-H1 waren dat er twee, met het merk als eerste. Gedegradeerd naar `<p>`, zodat de zichtbare hero-H1 de enige is.
- **Zes niet-beschrijvende "Klik hier"-links vervangen** door tekst die los van context werkt (WCAG 2.4.4), in `index.json`, `page.veelgestelde-vragen.json` en `product.product-gratis-verzending.json`. Meteen ook de absolute interne link naar `https://www.higrip.nl/…` in `index.json` relatief gemaakt.
- **`og:locale` toegevoegd**, `og:image` van `http:` naar `https:`, de lege `theme-color` gevuld, en de Engelse titelsuffixen ("tagged", "Page N") vertaald.

### Performance

- **30 KB ongebruikte blocking CSS weg.** Zes secties (`gripsocks2-hero`, `gripsocks2-products-trio`, `gripsocks2-proof`, `shop-features-strip`, `shop-hero`, `shop-size-row`) laadden `padel-page.css` terwijl dat bestand uitsluitend `.padel-*`-selectors en `--padel-*`-tokens bevat, en geen van die secties er één van gebruikt. Geverifieerd over alle assets, secties, snippets én templates vóór het verwijderen. De padelpagina laadt het bestand zelf, die blijft ongemoeid.

### Merkkleuren

- **`--hi-*` bestaat nu écht.** Het werkdossier noteerde dat de merkkleuren nergens als CSS-variabele bestonden en elk sectie-CSS-bestand zijn eigen tokens definieerde. Nieuw bestand `assets/hi-brand-tokens.css` (als eerste stylesheet geladen) met alle `--hi-*`-kleuren en de spacing-schaal. Tien CSS-bestanden zijn erop aangesloten via hun eigen tokendeclaratie, met de oude hex als fallback — dus puur additief, geen zichtbare kleurverandering. Onder meer `anniversary-banner.css` gebruikte al `var(--hi-yellow, #CCFF00)` terwijl die variabele nergens gedefinieerd was; die valt nu niet meer terug.

### Overgezet uit het SEO-werkthema

De drie bestanden die op `200249901383` waren gebouwd staan nu ook hier: `sections/collection-faq.liquid`, `assets/collection-faq.css` en `templates/collection.gripsokken.json` (de hub met H1 "Gripsokken voor elke sport."). Alle vereiste secties bestaan in dit thema. De FAQ-sectie bouwt zijn FAQPage-schema uit dezelfde blokken als de zichtbare tekst, dus die twee kunnen niet uit elkaar lopen.

### Tweede ronde dezelfde dag — de tegenspraken rechtgetrokken

Ik had de tegenspraken weggezet als bedrijfsbeslissingen. lars corrigeerde dat: het zijn achterstallige waarden, geen keuzes. Na bevestiging van de juiste waarde staan ze nu overal gelijk in dit thema.

- **Besteldeadline → 22:00** in `index.json`, `page.veelgestelde-vragen.json`, `product.product-gratis-verzending.json` (2×), `collection.gripsokken.json`, `faq-schema.liquid`, `padel-faq.liquid` (2×), `padel-usp-bar.liquid` (2×), en de afwijkende 17:00 in `product-schema.liquid`.
- **Retourtermijn → 30 dagen** in `page.json` (3×), `page.veelgestelde-vragen.json`, `product.product-gratis-verzending.json`.
- **Verzenddrempel → €35** in `page.veelgestelde-vragen.json`, `product.json`, `product.performance-grip-socks-2.json`.
- **Vierde beoordelingscijfer weg:** de schema-default `"4.8/5 op Trustpilot"` in `hi-wk-promo.liquid` naar 4,6 — de waarde die er werkelijk staat.

Daarna nog een volledige sweep over `templates/`, `sections/` en `snippets/`: geen enkele `16:00`, `17:00`, `14 dagen` of `€30` meer over. Geverifieerd op de preview: homepage en FAQ tonen 22:00, 30 dagen en €35, zonder Liquid-fouten. Theme check bleef op 43.

**Bij het natrekken kwam er nog een valse alarm uit:** de link `https://www-higrip-nl.myparcel.me/returns/create` in de FAQ ziet er kapot uit maar klopt — koppeltekens horen in dat MyParcel-subdomein. Niet aangeraakt.

### ⚠️ Hieruit volgt één ding dat alleen in Shopify Admin kan

De **officiële policies** onder `/policies/` lopen nu achter op de site. Verzendbeleid zegt nog "vóór 16:00", retourbeleid "binnen 14 dagen", terwijl de site 22:00 en 30 dagen belooft. Dat is de gevaarlijke richting: ruimer adverteren dan de policy dekt. Beide moeten in Shopify Admin → Instellingen → Beleid worden bijgewerkt. Let op dat `page.verzendbeleid.json` en `page.retourbeleid.json` *themapagina's* zijn die de policies dupliceren — die stonden al goed en zijn niet dezelfde tekst.

### Wat hier bewust níet is gedaan

- **De typografie-instellingen omdraaien.** `type_body_font` staat op `poppins_n8` (800) en `type_heading_font` op `poppins_n4` (400), met paragraafgrootte 14px — nagemeten in de gerenderde CSS: `--font-body--weight: 800` tegen `--font-heading--weight: 400`. Dat is omgekeerd aan de merkregels (body 400 op 15–16px, koppen 700–800 UPPERCASE). Site-breed zichtbare wijziging → wacht op akkoord van lars. Voorstel: Body → Poppins 400, Heading → Poppins 800, paragraaf → 16px; Subheading 700 en Accent 500 blijven.
- **De testimonials-sectie staat nog op 4,5** terwijl Trustpilot 4,6 op 17 reviews toont. Dat is zichtbare copy op de pagina, geen schema-default — even bevestigen voor ik het aanpas.
- **Verzend- en retourgegevens in het productschema** (bevinding H7). Horizon genereert het Product-schema met de `structured_data`-filter; daar valt niets in te injecteren. Dit kan alleen door het native schema te vervangen door een eigen versie — een grotere ingreep die eerst een besluit vraagt.

**Status:** staat op de preview-URL `hi-grip.myshopify.com?preview_theme_id=200269168967`. Niet gepubliceerd.

**Wie:** Website Agent, via Shopify CLI (zie [[Technische Procedures]]).

---

## 2026-08-02

**Wat:** Organization/WebSite structured data + FAQPage structured data toegevoegd op de homepage.

**Waar:** theme `198505464135` ("HÏ Grip website AI Workspace", unpublished — nooit live). Nieuwe bestanden `snippets/organization-schema.liquid` en `snippets/faq-schema.liquid`, gerenderd via `layout/theme.liquid`.

**Status:** live op de preview-URL (`hi-grip.myshopify.com?preview_theme_id=198505464135`), nog niet door lars naar het live theme gekopieerd.

**Wie:** Website Agent, via Shopify CLI (zie [[Technische Procedures]] voor hoe).

---

## Gerelateerde bestanden

- [[Technische Procedures]] — De procedure die deze wijzigingen mogelijk maakt
- [[Stand van Zaken — Werkdossier 2026-09-04]] — Het dossier waar de wijzigingen van 04-09 uit voortkomen
- [[Conversie Optimalisatie Checklist]] — Volledige checklist waar dit uit voortkomt
- [[Goedkeuringsworkflow]] — Hoe dit richting live gaat

## Gerelateerd onderzoek (automatisch)

Onderzoek uit `02_Dashboard/` dat naar deze notitie verwijst, nieuwste eerst. Bijgewerkt door `vault_nav.py`; niet met de hand bewerken.

- [[2026-10-12-werkthema-vs-live]] — Werkthema vs live thema — vergelijking 12 oktober 2026, referentie voor de to-do's
- [[2026-10-11-seo-audit-weekdelta]] — SEO-audit higrip.nl — weekvergelijking 11 oktober 2026, met prioriteitenlijst
- [[2026-10-05-weekoverzicht]] — Denzel Weekoverzicht — 2026-10-05 (NL-verkeer breekt 3 weken daling, /en/-fixes lijken opgelost)
- [[2026-10-02-vault-review]] — Vault-review — koppelingen, dubbelingen en foutieve informatie
- [[2026-09-07-compliance-todo]] — Compliance-verplichtingen NL/EU — to-do per categorie
- [[2026-09-04-werkdossier-stand-van-zaken]] — Werkdossier higrip.nl — stand van zaken 4 september 2026

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[06 Website Agent — Index]] · [[Home]]
