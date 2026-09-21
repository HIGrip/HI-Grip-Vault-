# Sportlanding-systeem (21-9-2026)

> Herbruikbaar systeem voor sportlandingspagina's op higrip.nl, gebouwd in theme `201133490503` "AI website workspace 2.0" (unpublished; lokaal `C:\Users\lars\ai-workspace-2.0`). Past bij de beachhead-strategie (tennis/rugby/voetbal) en de open vraag over sportpagina's in [[Website Structuur & Sitemap]] en [[SEO Strategie & Keywords]]. Werkwijze/theme-ID's: [[Technische Procedures]]. Meta's: zie [[Sportpagina Meta's (21-9-2026)]] (aparte notitie).

---

## Wat is gebouwd

**Secties** (`sections/`): `sport-hero`, `sport-proof`, `sport-story`, `sport-product`, `sport-faq`, `sport-related`, `sport-teaser`
**Stijl:** `assets/sport-landing.css`
**Templates:** `page.sport-tennis.json`, `page.sport-rugby.json`, `page.sport-voetbal.json`, `page.sport-padel.json`
**Pagina's:** "Gripsokken voor <sport>" (tennis, rugby, voetbal, padel), staan op **concept**. Template moet in de Shopify-admin aan de pagina worden toegewezen, of te previewen met `?view=sport-tennis&preview_theme_id=201133490503`.
**Homepage:** sectie `sport_teaser_hg01` (na de anniversary-banner) met H1 "HÏ Grip — Performance Gripsokken voor Sporters".

## Kopniveau's (SEO)

- Alle `blocks/ai_gen_*` + `gripsocks2-hero` hebben nu de setting `heading_tag` (H1–H4).
- Verborgen H1 in de header is een `<p>` geworden.
- Regel: **precies één H1 per pagina.**

## Design

- Zwart `#0a0a0a` + neon `#CCFF00` als **één accent per pagina**; schakelaar neon / oranje / blauw / wit.
- Poppins, uppercase.
- Sticky mobiele CTA.
- FAQPage JSON-LD op de sportpagina's.
- Inspiratie: **Stox** (compressiesokken: sport-subnav, H2-vraagblokken) en **Pitched** (bewijsregel onder H1, één CTA).

## Openstaand

- Concept-handles verifiëren: links zijn gegokt als `/pages/gripsokken-voor-<sport>`.
- Rugby-foto ontbreekt.
- FAQ- en kaarttekst door lars nalezen.
- Sticky sport-subnav (à la Stox) is **niet** gebouwd.
- Pas daarna: lars zet pagina's live (agent publiceert nooit).

## Gerelateerd

- [[Technische Procedures]] — theme-ID's en push-werkwijze
- [[Website Structuur & Sitemap]] — plek van de sportpagina's in de structuur
- [[SEO Strategie & Keywords]]
- [[Sportpagina Meta's (21-9-2026)]]
