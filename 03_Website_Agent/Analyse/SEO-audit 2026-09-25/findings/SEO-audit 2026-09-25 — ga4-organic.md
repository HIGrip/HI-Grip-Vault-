# GA4 organic data (analytics-mcp, property 476032345, 2026-08-01 – 2026-09-24)

Note: GA4 tag was dead Jan–Aug 2026, so only ~8 weeks of data. No GSC connection (plugin google_auth not configured) → no queries/impressions/indexation data.

## Channels
| Channel | Sessions | Engaged | Purchases | Revenue |
|---|---|---|---|---|
| Direct | 163 | 42 | 1 | €13.50 |
| Organic Search | 107 | 58 | 2 | €54.74 |
| Organic Social | 24 | 17 | 0 | – |
| Referral | 11 | 9 | 0 | – |
| AI Assistant | 2 | 1 | 0 | – |

Organic is the #1 revenue channel (2 of 3 purchases).

## Organic landing pages
- `/` 58 sessions (54%) — mostly brand search → non-brand visibility is very low
- `/en` 15 sessions, only 5 engaged (33%) — Dutch-intent searchers likely landing on the EN homepage (hreflang/locale issue)
- Blogs: 1–3 sessions each; `/collections/gripsokken` 3; product pages 1 each
- Sport pages (tennis/voetbal/padel): 0 organic landings (live only since ~21-9)

## Legacy URLs still receiving organic clicks
- `/products/performance-grip-socks-2-0-zwart` → 301 → `/products/performance-gripsokken-2-0-zwart` ✅
- `/products/hi-grip-gripsokken-1` → 301 → `/products/hi-grip-gripsokken` → 301 → `/products/performance-gripsokken` ⚠️ 2-hop chain
- `/collections/all` 200 — indexable duplicate of /collections/gripsokken (check canonical)
- Apex `higrip.nl` → 301 → `www` ✅

## Orchestrator-verificatie: /en/ vertaling (25-9, H1-vergelijking NL vs EN)
Technical-agent ("/en/ genuinely translated") en sitemap-agent ("/en/ duplicate Dutch") hadden elk deels gelijk:
- Vertaald ✅: products (Performance Grip Socks 2.0 Black), collections (Choose your grip sock.), blogs (What are grip socks?)
- NIET vertaald ❌: /en/pages/gripsokken-voor-tennis, /en/pages/gripsokken-voor-voetbal (H1 NL), /en/pages/over-ons
→ Nieuwe sportpagina's (21-9) zijn niet door Shopify Translate & Adapt gegaan; hreflang="en" belooft een Engelse pagina die Nederlands is. Fix: vertalen of pages-resource uitsluiten voor EN.

## Orchestrator-correctie: "4.5/5" op productpagina's (25-9)
De e-commerce-agent adviseerde AggregateRating-markup op basis van de getoonde "4.5 / 5". Geverifieerd: dit is statische tekst in een testimonial-sectie (`ss_testimonial_8`, kop "DIT ZEGGEN ONZE SPORTERS. 4.5 / 5"), niet gekoppeld aan een reviewplatform.
→ NIET als AggregateRating markeren (self-serving/niet-verifieerbare rating = schending Google review-snippet-richtlijnen, risico op manual action).
→ Wel: Trustpilot-reviews echt koppelen (to-do 21-9), daarna rating dynamisch in zowel UI als schema. Tot dan: overweeg de statische "4.5 / 5" te vervangen door echte reviewquotes of het aantal echte reviews.
