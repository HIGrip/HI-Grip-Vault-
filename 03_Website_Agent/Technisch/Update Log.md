# Update Log — Website Agent

> Datumgewijze log van daadwerkelijk doorgevoerde wijzigingen aan Shopify-thema's. Voor de procedure zelf: zie [[Technische Procedures]]. Voor de inhoudelijke checklist erachter: zie [[Conversie Optimalisatie Checklist]].

---

## 2026-09-04 — Werkdossier doorgevoerd in theme `200269168967`

**Waar:** theme `200269168967` ("Bijgewerkte kopie van Bijgewerkte kopie van HÏ Grip WEBSITE", unpublished), op verzoek van lars. Lokale werkkopie: `C:\Users\Test\higrip-theme-ai2`. Bron van het werk: [[Stand van Zaken — Werkdossier 2026-09-04]].

**Live is `199814873415` — daar is niets naartoe gegaan en gaat ook nooit iets naartoe zonder expliciete opdracht.**

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
