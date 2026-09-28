# Actieplan SEO higrip.nl — 25-9-2026

Geprioriteerd op impact × moeite. Details en bewijs per punt in `FULL-AUDIT-REPORT.md` en `findings/`.
Uitvoering in het werkthema (check eerst `shopify theme list`), niet direct live.

## Critical — deze week
| # | Actie | Waar | Moeite |
|---|---|---|---|
| 1 | Demo-tekst onder oprichters op `/pages/ons-verhaal` vervangen door echte bio's (of sectie verwijderen) | Shopify admin → pagina/sectie | 30 min |
| 2 | Lege post `de-laatste-gezonde-trends-op-het-gebied-van-sportvoeding` verwijderen + 301 naar `/blogs/trends` | Admin → blog + URL-redirects | 10 min |
| 3 | `/blogs/intern` unpublishen/verwijderen (valt dan vanzelf uit sitemap) | Admin → blogs | 5 min |
| 4 | Padel-content (747 woorden + FAQ) terugzetten in `/pages/gripsokken-voor-padel` — oude tekst staat in `_archief-2026-09-20/findings/content.md` en mogelijk nog in Shopify | Theme/pagina | 1–2 u |
| 5 | Rugby-pagina bouwen `/pages/gripsokken-voor-rugby` op het sport-template + in hub/nav | `sport-*`-secties, nieuw `page.sport-rugby.json` | 3–4 u |
| 6 | Feitenblad maken en overal gelijktrekken: verzending "vóór 22:00 besteld = binnen 1 dag verzonden", gratis verzending vanaf €30, 4 oprichters, maten 35-38/39-42/43-47, oprichtingstijdlijn | Homepage-meta, FAQ, sportpagina's, aankondigingsbalk, collectie-meta | 1 u |

## High — binnen 1–2 weken
| # | Actie | Moeite |
|---|---|---|
| 7 | `/en/`-sportpagina's + over-ons vertalen (Translate & Adapt) óf pages uitsluiten voor EN-markt | 1–2 u |
| 8 | Interne links: sportpagina's in hoofdnavigatie, `/pages/ontdek-jouw-sport` → 4 sportpagina's, blog-CTA's → `/collections/gripsokken`/producten i.p.v. `/collections/all`, relevante posts → sportpagina | 2 u |
| 9 | Sportpagina's uitbreiden naar 800+ unieke woorden: koopblok (maat + ATC), sportspecifieke reviews, "waar let je op"-tabel, bronvermelde statistiek; tennis/padel: "anti blaren"-sectie; voetbal: afgeknipte kousen | 3–4 u per pagina |
| 10 | Schema: `hasMerchantReturnPolicy` + `shippingDetails` + `sku` op producten; Organization-fix (`url`, https-context, sameAs, alternateName "HI Grip"); BlogPosting articleBody/description/dates fixen — paste-klare code in `findings/schema.md` | 1–2 u |
| 11 | Mobiele performance: ecomsend-popup (265 KB) scopen/uitstellen of vervangen, block-cart reflow, checkout-prefetch lazy; hero/productbeelden via `image_url` met width + WebP | 2–4 u |
| 12 | Mobiele productpagina: titel/prijs/maat/ATC hoger (kleinere galerij of sticky ATC) | 1–2 u |
| 13 | Beslissing v1-product `/products/performance-gripsokken`: 301 naar 2.0/collectie of titel weg van "Gripsokken | …" | 15 min + besluit |
| 14 | `/collections/frontpage` en `/pages/collection` → 301 naar `/collections/gripsokken`; `/winkel` idem; collectie-H1 + meta met keyword en juiste maten | 30 min |
| 15 | Gezondheidsclaims afzwakken of onderbouwen ("minder blessures", "aanbevolen door medische staf"); bron noemen bij 1,17 vs 0,60 | 1 u |

## Medium — binnen een maand
| # | Actie |
|---|---|
| 16 | Blog consolideren (~24 → ~13): 11 × 301 volgens `findings/cluster-plan.json`; off-topic lifestyle-posts weg; `wat-zijn-gripsokken` herschrijven tot 1.200+ woorden hoofdgids (definitie in eerste 40–60 woorden, vergelijkingstabel, links naar sportpagina's) |
| 17 | Zichtbare auteur + auteurspagina (Person-schema, LinkedIn sameAs) |
| 18 | Unieke copy + meta voor Zwart vs Wit; producttitel-newline fixen; typfouten in metas; "nu beperkt op voorraad!" alleen als het klopt |
| 19 | H1-fixes (beleidspagina's, retail, pilates, homepage-hero als echte H1); theme-H2's ("Taal", "Zoekopdracht", winkelwagen) naar niet-heading-elementen |
| 20 | Alt-teksten: 64 ontbrekende invullen in het Nederlands, per beeld specifiek; AI-prompt-alts en -bestandsnamen vervangen |
| 21 | FAQPage-schema op `/pages/veelgestelde-vragen`; link-only antwoorden uitschrijven; `/pages/shop`-link (404) fixen |
| 22 | Trustpilot echt koppelen (to-do 21-9) → zichtbare widget + dynamische AggregateRating. Statische "4.5 / 5" **niet** in schema zetten |
| 23 | Cookiebanner op mobiel compacter; aankondigingsbalk-ghosting fixen; tap-targets ≥ 44 px |
| 24 | og:image naar https + echte merk-/productfoto (1200×630) |

## Content & autoriteit — maand 2
| # | Actie |
|---|---|
| 25 | Nieuwe posts in volgorde: beste gripsokken voetbal → gripsokken & KNVB-regels → hoe draag je gripsokken → padelsokken → beste tennissokken → tennis vs padel (checken tegen SERP vóór schrijven) |
| 26 | Linkbuilding via clubs: KNVB/KNLTB/padel/rugbyclubs als B2B-klant → sponsor-/partnerpagina met link (afstemmen met Partnership Agent / B2B Klanten Agent) |
| 27 | Opname in NL "beste gripsokken"-lijstjes (Consumentenbeste, TijdVoorVoetbal, sportblogs); YouTube-kanaal koppelen |

## Monitoring — doorlopend
| # | Actie |
|---|---|
| 28 | Search Console-toegang regelen voor de SEO-plugin (`google_auth.py --setup`) → echte queries, posities, indexatie en CrUX-velddata |
| 29 | Gratis Moz API-key toevoegen voor backlinkdata |
| 30 | Drift-baseline vastleggen na de critical fixes (`/seo drift baseline https://www.higrip.nl`) zodat regressies zoals de padelpagina automatisch opvallen |
| 31 | Her-audit over ±6 weken; GA4: organische landingen op sportpagina's volgen |
