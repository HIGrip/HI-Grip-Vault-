# Werkplek — Design Agent

## Status: in ontwikkeling (sinds 2026-08-08)

Volledige definitie (specialisme, wanneer inschakelen, autonomie, harde grenzen, toon): zie de "Sub-agents"-sectie in identiteit.md in de Website Agent-map (`04_Agent_Infrastructuur/Website Agent/`). Bronkennis ([[Shopify App Stack]], [[Logo & Kleurenpalet]]): zie 03_Website_Agent/Technisch.

> Deze log is samengesteld door de inhoud van de lokale werkkopie (`C:\Users\lars\shopify-ai-workspace-theme`) te inspecteren — er is geen git-historie in die map, dus dit is gebaseerd op welke bestanden er nu staan en welke daarvan nieuw/eigen zijn t.o.v. een standaard Shopify-thema. Nog niet bevestigd door lars of alles al gepusht/preview-getest is — dat loopt in een aparte sessie.

---

## 2026-08-08 (a) — Padel-landingspagina

**Wat:** Volledige nieuwe landingspagina "Gripsokken voor Padel" gebouwd: 14 secties.

**Nieuwe bestanden (theme `198505464135`, AI Workspace):**
- `templates/page.gripsokken-padel.liquid` — nieuw pagina-template, rendert de 14 secties hieronder in volgorde + een BreadcrumbList structured-data blok
- `assets/padel-page.css` — eigen styling voor de padel-pagina (accentkleur oranje `#ff6a00`, urgentie-rood, eigen sectie-padding/radius)
- `snippets/padel-*.liquid` (14 stuks): hero, press-bar, usp-bar, problem, how-it-works, science, product-showcase, comparison, products, guarantee-strip, reviews, faq, final-cta, sticky-cta

**Nog open:** onbekend of dit al gepusht is naar het testtheme en op de preview-URL gecontroleerd (`https://hi-grip.myshopify.com?preview_theme_id=198505464135`) — zie [[Technische Procedures]] voor de vervolgstappen (lint → push → preview → aan lars presenteren). Nog niets hiervan is live.

---

## 2026-08-08 (b) — Performance Grip Socks 2.0: preorder-lancering (concept-template)

**Wat:** Voorbereiding van de lancering van het nieuwe product **Performance Grip Socks 2.0**, incl. een **preorder-campagne "2+1 gratis", geldig t/m 28 augustus 2026** (korting automatisch verrekend in de winkelwagen). Dit is het werk waar lars het over had toen hij "de 2.0" noemde — niet de Shopify-theme-architectuur, maar de productlancering zelf.

**Concept-template:** `templates/product.performance-grip-socks-2.json` — eigen producttemplate (auto-gegenereerd/bijgehouden door de Shopify-admin-editor), zodat dit product een eigen pagina-opbouw krijgt los van het standaard producttemplate. Opbouw:
- **Main (`product-information`)** — media-gallery, producttitel/reviews/prijs, variant-picker, **Bundler-app-blokken** (upsell/bundle-app, `shopify://apps/bundler/...`), 3 USP-bullets (grip/comfort/verzending), **preorder-badge**, buy-buttons, social-proof-strip ("1.500+ sporters gingen je voor"), grip-tech-stats (wrijvingscoëfficiënt 0.60 standaard vs. 1.17 HÏ Grip → "+95% meer grip"), materialen/verzending/sport-info
- **Testimonials** (SS - Testimonial #8) — 7 klantreviews
- **Editorial-sectie** — productfoto + FAQ-accordion (voordelen, wetenschappelijk bewezen mét bronvermelding — Apps et al. 2020/2022, Friedl et al. 2023 —, verzorging, sport-geschiktheid, maattabel) + verzending/retour-accordion
- Product recommendations, divider, marquee "More Grip Better Performance" — beide **disabled**, dus nog niet zichtbaar

**Bijbehorende nieuwe/gewijzigde bestanden:**
- `sections/product-information.liquid` (bewerkt 22:04) — de hoofdsectie zelf; laadt `product-improvements.css`, rendert de structured-data van het product (`{{ closest.product | structured_data }}`)
- `sections/hi-preorder-promo.liquid` (nieuw, 22:06) — apart promobanner-blok "Preorder promo (2+1)", met eigen `hi-wk-promo.css`/`hi-wk-promo.js` (marquee met USP's)
- `assets/product-improvements.css` + `assets/product-sticky-atc.js` — horen dus specifiek bij déze lancering, niet bij een generieke productpagina-opfrisser zoals ik eerder schreef
- `snippets/product-schema.liquid` — structured data (product + FAQ) voor deze pagina — SEO Agent-scope, hier alleen genoemd voor het overzicht

**Nog open:** net als bij de padel-pagina onbekend of dit al gepusht/preview-getest is; de preorder-einddatum (28 augustus) en de Bundler-app-koppeling zijn dingen om expliciet met lars te bevestigen voordat dit richting live gaat.

---

## 2026-08-02 — (referentie, vóór dit sub-agent-onderscheid bestond)

**Wat:** Organization/WebSite + FAQPage structured data toegevoegd op de homepage — dit is eigenlijk **SEO Agent**-werk (structured data), niet Design. Volledige entry: zie [[Update Log]].

**Relevantie hier:** dit was de eerste keer dat de workflow uit [[Technische Procedures]] (pull → bewerken → theme check → push → preview) op dit thema is toegepast — dezelfde workflow die ook voor het werk van vandaag geldt.

---

## Gerelateerde bestanden

- [[Technische Procedures]] — werkwijze pull/bewerk/check/push/preview
- [[Update Log]] — officiële datumgewijze log van doorgevoerde wijzigingen
- [[Stappenplan — Verdere Bouw]] — Fase 3, pilot-sub-agent
- [[Shopify App Stack]], [[Logo & Kleurenpalet]]
