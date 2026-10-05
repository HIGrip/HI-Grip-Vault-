# Geheugen — seo-regressiecheck

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[Waar staat wat]] · [[Home]]

Zie [README](README.md) voor de geheugenregel.

Format: `JJJJ-MM-DD | thema | onderwerp | notitie-id`

---

2026-09-15 | SEO-techniek | Eerste check: 5 afwijkingen (schema onvolledig, 2× H1, oude productpagina's 200, GA4 keyEvents 0) | 2026-09-15-regressiecheck
2026-09-21 | SEO-techniek | H1 en oude product-URL's opgelost; schema gedeeltelijk live (WebSite/ItemList/FAQPage missen); /en/-title leeg; GA4-timeout | 2026-09-21-regressiecheck
2026-09-28 | SEO-techniek | /en/-homepage nu 2× H1 + onvertaalde hero; 3 nieuwe verzend-/retourpagina's onvolledig (geen kosten/drempel, nog 25% herbevoorrading); /collections/frontpage mist meta description; schema/redirect-keten/22:00-meta blijven bekend open; aggregateRating blijft schoon; GA4 werkte (54 sessies, keyEvents 1); PSI op quotum | 2026-09-28-regressiecheck
2026-10-05 | SEO-techniek | Geen nieuwe afwijkingen. /en/-H1-bug en lege EN-title lijken opgelost (EN-meta heeft nog wel de vervallen 22:00-belofte, NL al gecorrigeerd). /collections/frontpage verdwenen uit de sitemap en geeft nu 404 (zelfde backlogpunt). Schema-dekking iets beter (WebSite+FAQPage nu ook op de 3 sportpagina's). Overige bekende punten (verzend/retour-tegenspraak, redirect-keten, /collections/all, /pages/gripsokken-voetbal) ongewijzigd open. aggregateRating blijft schoon (12 URL's); GA4 steeg naar 116 sessies/7 dagen; PSI op quotum | 2026-10-05-regressiecheck

## URL-lijst 5 okt 2026 (12, sitemap-gedreven)
/, /products/performance-gripsokken, /products/performance-gripsokken-2-0-zwart, /products/performance-gripsokken-2-0-wit, /collections/gripsokken, /pages/gripsokken-voor-padel, /pages/gripsokken-voor-tennis, /pages/gripsokken-voor-voetbal, /blogs/hi-grip, /blogs/trends, /blogs/trends/de-twee-grootste-problemen-in-de-sportwereld-het-antwoord-van-4-ondernemende-sporters, /en/
Verdwenen t.o.v. vorige week: /collections/frontpage (niet meer in sitemap_collections_1.xml, geeft nu een directe 404).

## URL-lijst 28 sep 2026 (13, sitemap-gedreven)
/, /products/performance-gripsokken, /products/performance-gripsokken-2-0-zwart, /products/performance-gripsokken-2-0-wit, /collections/frontpage, /collections/gripsokken, /pages/gripsokken-voor-padel, /pages/gripsokken-voor-tennis, /pages/gripsokken-voor-voetbal, /blogs/hi-grip, /blogs/trends, /blogs/trends/de-twee-grootste-problemen-in-de-sportwereld-het-antwoord-van-4-ondernemende-sporters, /en/
Nieuw in sitemap.xml t.o.v. vorige week: sitemap_agentic_discovery.xml (→ /agents.md), en de pagina's /pages/verzendbeleid, /pages/retourbeleid, /pages/terugbetalingsbeleid.
