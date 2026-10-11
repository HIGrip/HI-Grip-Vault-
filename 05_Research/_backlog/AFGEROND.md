# HÏ Grip — Afgeronde acties

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[Waar staat wat]] · [[Home]]

Archief van afgevinkte punten uit `ACTIEBACKLOG.md`. De routine verplaatst ze hier elke zondag.

---

## 11 oktober 2026

### [x] ~~[regressie] Oude productpagina's kannibaliseren nog het hoofdkeyword~~ — opgelost, canonical URL wel gewijzigd (bijgewerkt 21 sep 2026)
**Wat er is gebeurd:** De productpagina-handle is sindsdien veranderd: het hoofdproduct heet nu `/products/performance-gripsokken` (was `/products/hi-grip-gripsokken-1`), en de twee oude URL's zijn mee omgenoemd naar `/products/performance-gripsokken-2-0-zwart` en `-wit`. Alle drie de eerder gemelde oude adressen (`hi-grip-gripsokken-1`, `performance-grip-socks-2-0-zwart`, `-wit`) geven nu automatisch een redirect naar hun nieuwe tegenhanger — geverifieerd met een `fetch`-test op 21 september 2026, canonical-tag op de live pagina klopt.
**Let op:** De canonical handle in je eigen documentatie (projectgeheugen, theme-editor preview-links, mobiel-testinstructies) verwijst nog overal naar het oude `hi-grip-gripsokken-1`. Die links werken dankzij de redirect nog wel, maar zijn niet meer accuraat.
**Gevonden op:** 15 september 2026 (regressiecheck), opgelost/herzien 21 september 2026 (SEO-technisch)
**Stond op:** P1

### [x] [regressie] GA4 key event voor `purchase` staat nog steeds uit
**Bevestigd:** 25 september 2026 door actiecontrole — GA4 Admin API (google_data.py keyevents): purchase is key event sinds 2025-02-03 (ONCE_PER_EVENT); 28 dagen t/m 24-09: 3 purchase-events, keyEvents 3.
**Waarom:** `keyEvents = 0` op elk kanaal, deze en vorige week. Blokkeert elke CRO-uitspraak (zie ook projectgeheugen, actie #1 uit de audit).
**Waar:** GA4-property 476032345 → Admin → Events
**Wat:** `purchase` markeren als key event.
**Gevonden op:** 15 september 2026 (regressiecheck)
**Stond op:** P1

### [x] ~~[regressie] Homepage heeft 2× H1~~ — opgelost (bevestigd 21 sep 2026)
**Wat er is gebeurd:** De homepage heeft nu precies één `<h1>` (de zichtbare hero-titel). De eerder gemelde verborgen `visually-hidden` H1 is niet meer aanwezig of niet meer als `<h1>` gerenderd.
**Gevonden op:** 15 september 2026 (regressiecheck), opgelost/bevestigd 21 september 2026 (regressiecheck)
**Stond op:** P1

### [x] ~~3. Meta title en description live zetten~~ — live (bevestigd 24 sep 2026)
**Wat er is gebeurd:** Staat live met iets andere tekst: title `Gripsokken | Maximale Grip voor Elke Sport | HÏ Grip`, description met "3000+ sporters" en "vanaf €35". Let op: die €35 moet kloppen met de verzenddrempel-actie uit `2026-09-23-seo-conversietest-run-1`.
**Oorspronkelijk:** Staat al klaar in het projectgeheugen maar is nog niet toegepast. Dit is gratis winst die al maanden wacht.
**Titel:** `Gripsokken | Anti-Slip Sportsokken voor Elke Sport | HÏ Grip`
**Beschrijving:** `Voorkom glijden in je schoen met HÏ Grip gripsokken. Voor padel, voetbal, rugby & fitness. ✓ 1500+ sporters ✓ Gratis verzending vanaf €30 ✓ Vandaag verzonden`
**Inspanning:** 15 minuten
**Stond op:** P1
