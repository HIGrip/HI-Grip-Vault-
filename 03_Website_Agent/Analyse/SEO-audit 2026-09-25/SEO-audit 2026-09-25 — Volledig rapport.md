---
type: kennis
gebied: website-agent
bijgewerkt: 2026-10-01
---

# SEO-audit higrip.nl — 25 september 2026

**Site:** https://www.higrip.nl (Shopify, Horizon-theme, NL + /en)  ·  **Type:** e-commerce (D2C + B2B)  ·  **Gecrawld:** 109 sitemap-URL's (54 NL + 54 EN + agents.md)
**Bronnen:** 11 specialist-agents (`findings/*.md`), GA4 via analytics-mcp, eigen verificatie. **Niet beschikbaar:** Search Console (queries/indexatie), CrUX-velddata, Moz/DataForSEO (backlinks, marketplace).
**Vorige audit:** 20-9-2026 → `_archief-2026-09-20/`

## SEO Health Score: 54 / 100  (was 60 op 20-9)

| Categorie | Gewicht | 25-9 | 20-9 | Δ |
|---|---|---|---|---|
| Technical SEO | 22% | 78 | 80 | −2 |
| Content Quality | 23% | 47 | 58 | −11 |
| On-Page SEO | 20% | 45 | 55 | −10 |
| Schema / Structured Data | 10% | 52 | 42 | +10 |
| Performance (CWV, lab) | 10% | 35 | 38 | −3 |
| AI Search Readiness | 10% | 60 | 61 | −1 |
| Images | 5% | 50 | 70 | −20 |

Aanvullend: E-commerce 45, Content Architecture (cluster) 22, SXO-gap sportpagina's 50–53, rugby 1. Backlinks: onvoldoende data voor score (domein nog niet in Common Crawl).

**Over de daling:** deels echt (padelpagina 747 → 249 woorden bij de template-migratie van 21-9; nieuwe sportpagina's dun en ~50% identiek; /en-sportpagina's onvertaald), deels strengere meting deze keer (alle 54 NL-URL's i.p.v. steekproef → o.a. de lege blogpost, demo-tekst in founder-bio's en 29% ontbrekende alt-teksten kwamen nu pas boven). Schema is wél verbeterd (breadcrumbs, product, FAQ op sportpagina's, homepage-title/H1 gefixt).

## Wat de echte data zegt (GA4, 1-8 t/m 24-9)
- Organic Search: 107 sessies, **2 van de 3 aankopen** — sterkste omzetkanaal.
- 54% van organisch landt op `/` (merkzoekopdrachten) → non-brand zichtbaarheid is vrijwel nul.
- `/en` krijgt 15 organische sessies met 33% engagement → Nederlandse zoekers belanden op de Engelse site.
- Sportpagina's: 0 organische landingen (live sinds ±21-9, nog te vroeg om te oordelen).

## Top 5 kritieke issues
1. **Vertrouwen-killers live:** `/pages/ons-verhaal` toont Shopify-demotekst onder de oprichters (bij Lars: "We kunnen voor bepaalde artikelen geen retouren accepteren…", bij "Hogeschool Rotterdam": "…overtreft deze kenmerkende bestseller alle verwachtingen"); `/blogs/trends/de-laatste-gezonde-trends-op-het-gebied-van-sportvoeding` bestaat alleen uit puntjes; `/blogs/intern` ("INTERN") is publiek en indexeerbaar. *(Zelf geverifieerd.)*
2. **Rugby ontbreekt volledig** — `/pages/gripsokken-voor-rugby` = 404, "rugby" staat in geen enkele kerntekst, terwijl de homepage-meta rugby belooft. Makkelijkste sport om te winnen: geen enkele NL-shop heeft een rugby-gripsokkenpagina.
3. **Padelpagina gekrompen van 747 naar 249 woorden** — `/pages/gripsokken-padel` (beste pagina van de site op 18-9, met FAQ-schema) 301't nu naar de nieuwe template-pagina. Tennis/voetbal/padel zijn ~235–250 woorden, ~50% identiek, zonder koopblok of sportspecifieke reviews. *(Zelf geverifieerd.)*
4. **Sportpagina's zijn nergens mee verbonden:** 0 van 23 blogs linkt ernaar, niet in hoofdnavigatie, `/pages/ontdek-jouw-sport` is een doodlopende hub; 20 blogs sturen naar `/collections/all`.
5. **Mobiele snelheid slecht:** LCP 5,5–7,8 s op alle geteste pagina's (lab); app-JS (ecomsend 265 KB, block-cart reflow, fd-product-groups) blokkeert 2,5–3 s main thread. Desktop is prima.

## Top 5 quick wins (< 1 uur elk)
1. Demo-tekst op `/ons-verhaal` vervangen, lege sportvoeding-post verwijderen + 301, `/blogs/intern` unpublishen.
2. Eén feitenblad en overal gelijktrekken: verzending ("vóór 22:00 besteld = binnen 1 dag verzonden" — nu 3 varianten), gratis-verzendgrens (€30 in beleid; aankondigingsbalk checken), 3 vs 4 oprichters, maten 43-46 vs 43-47, oprichtingstijdlijn.
3. `og:image` naar https; Organization-schema fixen (`url` = homepage i.p.v. huidige pagina, `https://schema.org`, `sameAs` Instagram/TikTok, `alternateName` "HI Grip").
4. Collectie-meta `/collections/gripsokken` verversen (noemt nog v1-maten 34-39/40-46 en "witte gripsokken"); FAQ-link `/pages/shop` (404) → `/collections/gripsokken`; `/winkel` → `/collections/gripsokken`.
5. FAQPage-schema op `/pages/veelgestelde-vragen` (13 goede Q&A's) + bron noemen bij de 1,17 vs 0,60-statistiek (Apps et al. / Friedl et al.).

---

## Technical SEO — 78  (`findings/technical.md`, `findings/sitemap.md`)
**Goed:** alle 109 URL's 200, self-canonical, geen soft-404's; apex→www en http→https in 1 hop; hreflang nl/en/x-default wederkerig; volledig server-rendered; HSTS/CSP/X-Frame-Options; AI-crawlers niet geblokkeerd; sitemaps valide met echte lastmod.

**Issues:**
- *High* — `/en/`-sportpagina's en `/en/pages/over-ons` zijn Nederlands (H1 "Gripsokken voor tennis") maar hreflang="en" belooft Engels. Producten/collecties/blogs zijn wél vertaald. *(Orchestrator-verificatie; technical- en sitemap-agent spraken elkaar tegen.)*
- *Medium* — `/blogs/intern` indexeerbaar + in sitemap.
- *Medium* — 6 URL's concurreren om "gripsokken": `/`, `/collections/gripsokken`, `/collections/all`, `/collections/frontpage` (title "Homepage"), `/pages/collection` ("Shop", 25 woorden), `/products/performance-gripsokken` (v1, title "Gripsokken | …").
- *Medium* — og:image over http://.
- *Low* — redirect-keten `/products/hi-grip-gripsokken-1` → `hi-grip-gripsokken` → `performance-gripsokken` (collectiepagina linkt nog naar legacy-handles); 2 oude blog-URL's 404 (één nog in Google, één intern gelinkt vanuit de krachttraining-post).
- *Low* — geen IndexNow; Referrer/Permissions-Policy ontbreekt (Shopify-niveau); `/en/` houdt Nederlandse slugs.

## Content Quality — 47  (`findings/content.md`, `findings/cluster.md`)
- *Critical* — lege blogpost, demo-bio's, publieke intern-blog (zie top 5).
- *High* — tegenstrijdige feiten (verzending ×3, oprichters 3/4, tijdlijn nov/dec '24, maten).
- *High* — gezondheidsclaims ("minder blessures", "voorkom verzwikte enkel", "aanbevolen door medische staf") gaan verder dan de geciteerde studies (die meten wrijving/slip in de schoen, niet blessures).
- *High* — geen zichtbare auteur; Timo Heijligers staat alleen in JSON-LD.
- *High* — 6–7 kannibalisatieclusters over ~23 posts; voor "wat zijn gripsokken" rankt `waarom-hi-grip-gripsokken`, niet de bedoelde post. Voorstel: ~24 → ~13 sterkere posts via 11 × 301 (redirect-map in `findings/cluster-plan.json`).
- *High* — geen enkele post over tennis, padel of rugby; lifestyle-posts (ochtendroutine, mentaal voordeel) zijn off-topic; 12 posts in één batch 13–15 feb, daarna 7 maanden niets.
- *Medium* — mix van "u" en "je"; Flesch-Douma 34–49 op meerdere pagina's.
- Sterkste stuk: `/blogs/hi-grip/de-wetenschap-achter-gripsokken` (goed onderbouwd).

## On-Page SEO — 45  (per-URL tabel in `findings/content.md`)
- Geen H1 op retour-, terugbetalings-, retail- en pilatespagina; 3 H1's (2 leeg) op verzend- en privacybeleid; generieke H1's ("Shop", "Trends", "INTERN"); collectie-H1 "Kies je gripsok." zonder keyword.
- Homepage: echte H1 staat ~2900 px diep; de grote "HÏ GRIP" in de hero is geen H1.
- Theme zet "Taal" ×2, "Je winkelwagen is leeg", "Zoekopdracht" als H2 op elke pagina.
- Titles: 5 te lang, veel zonder keyword ("HÏ Grip | Zakelijk"), merk vooraan duwt keyword weg. Metas: 3 ontbreken, Zwart/Wit identiek (320 tekens body-dump), typfouten ("momemt"), "nu beperkt op voorraad!" als vaste claim.
- Producttitels bevatten een newline (Liquid-whitespace).

## Schema — 52  (`findings/schema.md`, paste-klare JSON-LD in dat bestand)
**Verbeterd sinds 20-9:** BreadcrumbList, ProductGroup/Offer, BlogPosting met auteur, FAQPage op homepage + sportpagina's.
- *Critical* — Product-Offers missen `hasMerchantReturnPolicy`, `shippingDetails`, `sku`/`gtin`.
- *Error* — `Organization.url` = huidige pagina op 4 paginatypen (Liquid-bug); vrijwel alles `http://schema.org`; `articleBody` = alleen een hashtag, `description` leeg, `dateModified` < `datePublished`.
- **Let op:** de "4.5 / 5" op productpagina's is statische tekst in een testimonial-sectie, geen reviewplatform. **Niet** als AggregateRating markeren (schending review-richtlijnen). Eerst Trustpilot echt koppelen, dan dynamisch in UI én schema.
- FAQ-rich results leveren geen SERP-voordeel meer op; markup blijft nuttig als machineleesbare context.

## Performance — 35  (`findings/performance.md`, lab-data Lighthouse 13.5, geen velddata)

| Pagina | LCP mobiel | LCP desktop | CLS | LH desktop |
|---|---|---|---|---|
| Homepage | 6,5 s | 1,7 s | 0,003 | 88 |
| Product zwart 2.0 | 5,5 s | 2,5 s | 0,066 | 60 |
| Collectie | 5,5 s | 1,2 s | 0,003 | 88 |
| Tennis | 7,8 s | 1,2 s | 0,003 | 94 |

- TTFB uitstekend (13–58 ms), CLS goed, fonts correct — het probleem is main-thread-JS en afbeeldingen.
- *High* — ecomsend.js (265 KB popup-app op elke pagina), block-cart.js (680 ms forced reflow), fd-product-groups-ext.js; checkout-assets laden op niet-checkoutpagina's.
- *Medium* — JPG's tot 3840 px/20 MP, tot 305 KB besparing per pagina met WebP/AVIF.
- Mobiele Lighthouse-score kon niet berekend worden (trace time-out) → sterk signaal van slechte INP. Valideren met Search Console → Core Web Vitals.

## Images — 50
- 64 van 218 unieke content-afbeeldingen (29%) zonder alt (teamfoto's, clublogo's, padel-hero); homepage 11–14 van ~25.
- Engelse alt "Performance Grip Socks 2.0 …" op 24 afbeeldingen incl. tennis/voetbal-actiefoto's; "HÏ Grip Gripsokken HÏ Grip" ×13; AI-prompt als alt op `/pages/pilates` ("sokken minder goed zichtbaar en menselijker"); bestandsnamen als `geef-de-vorige-afbeelding-terug.png`.

## AI Search Readiness — 60  (`findings/geo.md`)
- Alle AI-crawlers krijgen 200 + identieke content. `/llms.txt` en `/agents.md` zijn Shopify-boilerplate (UCP/Shop-app), zonder merkfeiten.
- Sportpagina's te dun voor citatie (gem. passage 19 woorden); geen tabellen/video.
- Merk-entiteit zwak: geen sameAs, geen Wikidata, niet in NL "beste gripsokken"-lijstjes (Consumentenbeste, TijdVoorVoetbal), reviews niet zichtbaar.
- Platformschatting: AI Overviews 60, ChatGPT 48, Perplexity 60, Copilot 55.

## E-commerce — 45  (`findings/ecommerce.md`)
- v1-product `/products/performance-gripsokken` (maten 34-39/40-46, vanaf €13,49) is volledig indexeerbaar en concurreert op "gripsokken" met 2.0 én de collectie → beslis: 301 naar 2.0/collectie of hernoemen naar een niche-term.
- Zwart en Wit 2.0: identieke meta + bijna identieke body.
- Verzendbelofte (22:00) staat niet in productcopy of schema.
- Marketplace-check (bol.com/Amazon) niet gedaan: DataForSEO vereist betaalde call (~$0,05), niet goedgekeurd.

## SXO — sportpagina's 50–53  (`findings/sxo.md`)

| Keyword | Wat rankt (NL) | Doel-URL | Gap |
|---|---|---|---|
| gripsokken | categoriepagina's (50%) | /collections/gripsokken | goed type, dunne content |
| gripsokken voetbal | categorie (56%) + listicle | /pages/gripsokken-voor-voetbal | medium |
| gripsokken tennis | productpagina's (~70%), "anti blaren" | /pages/gripsokken-voor-tennis | medium — geen koopblok |
| gripsokken padel | gemengd | /pages/gripsokken-voor-padel | dun |
| gripsokken rugby | categorie (63%), geen NL-rugbypagina | **404** | **kritiek** |
| wat zijn gripsokken | blogs/gidsen (89%) | /blogs/hi-grip/wat-zijn-gripsokken | verkeerde post rankt |

- "anti slip sokken" = ouderen/huis-intentie → niet targeten. "tennissokken"/"rugby sokken" delen 0 resultaten met de gripsokken-varianten → pagina's op "gripsokken [sport]" houden.

## Visual / mobiel  (`findings/visual.md`, `screenshots/`)
- *High* — mobiele productpagina: titel, prijs, maat en "In winkelwagen" pas na ~1,7 scherm (CTA op 1434 px bij 844 px viewport).
- *Medium* — cookiebanner beslaat ~45% van het mobiele scherm; "Voorkeuren beheren" tap-target 33 px.
- *Medium* — aankondigingsbalk toont op mobiel twee overlappende teksten (ghosting) — geverifieerd op screenshot.
- Geen horizontale overflow; tennispagina heeft de beste above-the-fold (H1 + propositie + CTA zichtbaar).

## Backlinks  (`findings/backlinks.md`)
- Domein staat niet in Common Crawl (jan–mrt 2026) — zegt niets over autoriteit, alleen dat het nog niet gecrawld is. Geen verwijzende domeinen meetbaar zonder Moz/Bing-key.
- Kansen: KNVB/KNLTB/padelclub-sponsorpagina's (teamkorting ↔ link — sluit aan op Partnership Agent / B2B), NL sport-reviewblogs, "beste gripsokken"-lijstjes.

## Beperkingen
Geen GSC-data (geen echte zoekwoorden, posities, indexatiestatus); geen CrUX-velddata; SERP-analyses via WebSearch (benadering van google.nl); geen backlink-API's; geen marketplace-data.

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[03 Website Agent — Index]] · [[Home]]
