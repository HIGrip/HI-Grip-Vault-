---
type: kennis
gebied: website-agent
bijgewerkt: 2026-10-01
---

# SXO Findings: higrip.nl (Search Experience)

Audit date: 2026-09-25 · Pages were fetched with render_page.py (`--mode auto`). All pages are server-rendered Shopify with `is_spa=false`. SERP data comes from WebSearch (NL queries).
**The SXO Gap Score is separate from the SEO Health Score.**

## 1. Keyword → SERP → target URL matrix

| Keyword | Page type that ranks (top ~9 organic) | Dominant type / confidence | higrip.nl target | Target type | Mismatch |
|---|---|---|---|---|---|
| gripsokken | Passasports PLP, Decathlon PLP, Voetbalshop PLP, GXOX category, Jako PDP, Gripzy PDP, Teamswear PDP, YouTube (Voetbalshop) video | PLP / category, 50% (implicit voetbal skew) | /collections/gripsokken | PLP | ALIGNED on type, but weak on content and signals |
| gripsokken voetbal | Decathlon, Passasports, Voetbalshop, Stanno, Teamswear (PLPs), bol.com PDP, GXOX sport landing, Debeterewereld "beste van 2026" listicle, Fitsockr guide | PLP, 56% | /pages/gripsokken-voor-voetbal | Sport landing (hybrid: 1 product plus copy) | MEDIUM |
| gripsokken tennis | bol.com PDP x3 (titles stress "anti blaren"), Skor PDP, Optigrip brand home ("tennis en padel"), GXOX home | PDP / marketplace, ~70% | /pages/gripsokken-voor-tennis | Sport landing | MEDIUM (no buy box on the page) |
| gripsokken padel | bol.com PDP x3, Padellife PDP, Fitsockr padel PLP, Proskary PLP, Fitsockr blog, Padelheld guide, PlayWear info page, Optigrip home | Mixed (PDP 40% / guide 30% / PLP 20%) | /pages/gripsokken-voor-padel | Sport landing | ALIGNED on type (hybrid fits mixed intent), but thin |
| gripsokken rugby | Skor, Proskary, U-Sport, Lux Sports, Rugbystuff (PLPs), De Rugby Specialist PDP (Stanno), Perfectly Perform PDP x2 | PLP, ~63%. No Dutch rugby-specific guide exists | none: /pages/gripsokken-voor-rugby returns **404** | none | CRITICAL |
| anti slip sokken sport | Sliponline, Decathlon BE, Loopladders, Fitnessyogashop, Sokken.be (PLPs), bol.com / Aiki-Budo / Promomundo PDPs, eBay | PLP, 56%. Intent skews toward yoga, pilates, dojo and home use | /collections/gripsokken (secondary) | PLP | ALIGNED, but off-beachhead so low priority |
| wat zijn gripsokken | GXOX, Voetbaldirect, Fitsockr x2, Stanno, GearXpro, Sockerwear (blogs), Debeterewereld listicle, **higrip.nl/blogs/hi-grip/waarom-hi-grip-gripsokken** | Informational blog / guide, ~89% | /blogs/hi-grip/wat-zijn-gripsokken | Blog | ALIGNED on type, but **the wrong higrip URL ranks** (cannibalization) → HIGH |

Supporting SERP signals:
- The generic "gripsokken" SERP is football-dominated (Voetbalshop, Passasports, Teamswear, Decathlon voetbal).
- bol.com takes 3 or more slots on tennis and padel.
- Listicles ("Beste gripsokken voetbal van 2026" on debeterewereld, consumententop, consumentenbeste) name Prostec, Fitsockr, Knap'man and Decathlon. HÏ Grip is not listed.
- GXOX is the closest direct competitor. It runs brand sport-landing pages (/gripsokken-voetbal/, /gripsokken-fitness/) that rank next to retailer PLPs. That shows a single-brand sport landing page can rank for these queries.

## 2. Findings (severity · evidence · fix)

### F1: CRITICAL: No rugby page on a beachhead sport
- **Evidence:** `/pages/gripsokken-voor-rugby` returns HTTP 404 ("Pagina helaas niet gevonden"). Rugby is missing from the sitemap and from the sport hub /pages/ontdek-jouw-sport, which lists padel, futsal, hardlopen, basketbal, tennis, fitness and voetbal. Yet the homepage meta description promises "tennis, padel, rugby en voetbal". The rugby SERP has no Dutch rugby-specific content page; it is all generic PLPs plus UK Rugbystuff and De Rugby Specialist (Stanno). That makes it the easiest term to win.
- **Fix:** Build `page.sport-rugby` in the existing sport-landing system (same template as tennis, voetbal and padel). Suggested H1 "Gripsokken voor rugby". Blocks: "Geen schuiven in je noppen bij scrum, tackle en sidestep", "Stevig bij de afzet op nat gras", "Minder blaren over een heel seizoen". Add an FAQ ("Mag je gripsokken dragen in een wedstrijd?", "Gripsok onder of over je rugbykous?" (answer: afgeknipt + kous), "Welke maat?"). Link it from the hub, from the homepage teaser and from the other sport pages.

### F2: HIGH: Cannibalization on "wat zijn gripsokken". The wrong page ranks and the right page is thin
- **Evidence:** The page Google ranks for this query is `/blogs/hi-grip/waarom-hi-grip-gripsokken` (title "HÏ Grip | Wat zijn de voordelen van gripsokken?"), not `/blogs/hi-grip/wat-zijn-gripsokken`. The intended page has:
  - 340 words and 1 image
  - **0 internal links and 0 CTAs**
  - a formal "u" register, against the brand tone
  - a publication date of 15-12-2025
  - no sources

  Competing guides (GXOX, Stanno, Fitsockr) are longer, sport-specific and link to products. At least four more overlapping posts exist: /blogs/hi-grip/de-wetenschap-achter-gripsokken, /blogs/trends/voor-welke-sport-zijn-gripsokken-onmisbaar-van-voetbal-tot-pilates, /blogs/trends/welke-gripsokken-bestaan-er-van-budget-tot-premium-wat-kies-jij and /blogs/trends/waarom-gripsokken-het-verschil-maken-meer-stabiliteit-minder-blessures.
- **Fix:** Make `wat-zijn-gripsokken` the pillar page:
  - 1,200+ words, in "je" form
  - H2s: Wat zijn gripsokken · Hoe werken ze (siliconen plus wrijving) · Werken gripsokken echt? (cite Apps et al. 2020/2022 and Friedl 2023, which the homepage FAQ already uses) · Voor welke sporten (links to the 3 sport pages plus rugby) · Gripsokken vs afgeknipte kousen · Welke maat · Wassen (link to hoe-zorg-ik-voor-mijn-gripsokken) · CTA to /collections/gripsokken
  - FAQPage schema

  Then either 301 `waarom-hi-grip-gripsokken` into the pillar, or retitle it to a clearly different intent ("Waarom HÏ Grip: ons grippatroon") and link it to the pillar. Update dateModified.

### F3: HIGH: Sport landing pages are too thin and lack trust for decision-stage queries
- **Evidence:** The tennis, voetbal and padel pages each have about 250 words and near-identical templates. The meta descriptions differ only in the sport word. Each page has:
  - 5 images, 2 without alt text
  - 0 video
  - **0 reviews** (Trustpilot shows on the PDP and collection, not here)
  - no size picker or add-to-cart on the page. Every CTA goes to `/products/performance-gripsokken-2-0-wit`; zwart appears only as a swatch link.

  Schema is WebPage→about Product (no Offer), FAQPage and BreadcrumbList. The ranking SERP pages are PLPs with price, filters and many products (voetbal) or PDPs with a buy box (tennis and padel on bol.com).
- **Fix:**
  - Add an inline buy block: colour and size selector (35-38 / 39-42 / 43-47), price €14,95 (was €17,95), add-to-cart.
  - Add 2-3 sport-specific reviews or quotes. A voetballer review belongs on the voetbal page; the current review carousel is mostly pilates and wandelen.
  - Tennis: add a "blaren" block and use "anti blaren" wording, because the bol.com titles show that as the searcher's pain point.
  - Voetbal: add a block "Gripsokken + afgeknipte kousen: zo draag je ze" (the Voetbalshop YouTube result and the HÏ Grip blog on afgeknipte kousen both point to this need) and link the existing blog post.
  - Grow each page to 600-900 words and add a sport-specific image or video of grip in the shoe.
  - Add an Offer plus aggregateRating to the Product entity once reviews are marked up.

### F4: HIGH: The sport hub is a dead end and does not link to the sport pages
- **Evidence:** `/pages/ontdek-jouw-sport` (H1 "GRIPSOKKEN VOOR ELKE SPORT") links internally only to `/pages/over-ons`. The PDP's "Voor jouw sport … Ontdek jouw sport" link leads here, so users who click it from the PDP never reach the tennis, voetbal or padel pages. The hub also promotes non-beachhead sports (futsal, basketbal, hardlopen, fitness) with no pages behind them.
- **Fix:** Turn the hub into the "gripsokken per sport" index. Link cards to voetbal, tennis, padel and rugby first, and pilates second. Remove or merge the sports that have no page. Link the hub from the main nav and the footer.

### F5: MEDIUM: The collection page underserves the head term "gripsokken"
- **Evidence:** Title "Gripsokken – HÏ Grip" (21 characters). H1 "Kies je gripsok." does not contain the keyword. There is only about 111 words of real copy. The **meta description is outdated and off-strategy**: it says "witte gripsokken, maten 34-39 en 40-46 … yoga, pilates of gewoon thuis", while the actual range is wit and zwart in 35-38 / 39-42 / 43-47 with a sport beachhead. Schema is only BreadcrumbList plus Organization, with no ItemList. The comparison-block CTAs link to `/products/performance-grip-socks-2-0-wit-1` and `/products/hi-grip-gripsokken-1`, which both 301 to other handles. There are also parallel listing URLs `/collections/all` (the target of /winkel's 301) and `/pages/collection`. The SERP winners are retailer PLPs with sport filters.
- **Fix:**
  - Title: "Gripsokken kopen | Voor voetbal, tennis, padel & rugby | HÏ Grip".
  - H1: "Gripsokken" with the subline "Kies je gripsok."
  - Rewrite the meta description with the correct sizes and sports, plus the "vóór 22:00 besteld = binnen 1 werkdag verzonden" USP.
  - Add a "Shop per sport" chip row linking to the sport pages.
  - Add a 150-250 word intro, with an FAQ below the grid.
  - Point the CTAs at the canonical handles.
  - 301 `/winkel` to /collections/gripsokken and canonicalize or noindex `/pages/collection`.

### F6: MEDIUM: Indexed legacy URLs return 404 or lose relevance
- **Evidence:** Search still shows old-platform URLs:
  - `/blogs/2630309_gripsokken-tijdens-pilates-yoga…` returns **404**.
  - `/2697390_hi-grip-zaalvoetbalsokken` 301s to the homepage, which is irrelevant for zaalvoetbal.
  - `/products/hi-grip-gripsokken-1` shows in the SERP as "Gripsokken | Maximale Grip voor Elke Sport" with old prices (€13,99 / 3-pack €38,99).
- **Fix:** Add Shopify URL redirects: pilates blog → `/blogs/trends/gripsokken-tijdens-pilates-en-yoga-optimale-grip-en-comfort-met-hi-grip`; zaalvoetbalsokken → `/pages/gripsokken-voor-voetbal`. Point the old product handles straight to the 2.0 PDP to avoid chains. Recommend `/seo technical` for a full redirect map.

### F7: MEDIUM: Star rating shown but not marked up, and the shipping promise is inconsistent
- **Evidence:** The PDP shows "★★★★½ · 3.000+ sporters" and a Trustpilot 4.5/5 carousel, but there is **no aggregateRating or Review** in any JSON-LD (checked on the PDP, collection and voetbal page). Shipping copy varies:
  - Homepage meta: "Bestel vóór 22:00, vandaag verzonden"
  - Sport pages: "Voor 22:00 besteld, dezelfde werkdag verzonden"
  - PDP: "Binnen 1 werkdag verzonden"

  The agreed rule is: vóór 22:00 besteld = binnen 1 dag verzonden.
- **Fix:** Harmonize to one sentence across the site. Mark up product reviews through Shopify's review app or Judge.me, not self-serving Organization ratings. Recommend `/seo schema`.

### F8: LOW: Homepage H1 is placed in a lower teaser section
- **Evidence:** The homepage H1 "HÏ Grip Performance Gripsokken voor Sporters" sits in `sl-teaser__title` after several H2 and H3 sections (the "HÏ GRIP" H2, Comfort, "Performance Gripsokken 2.0"). 11 of 18 images have no alt text.
- **Fix:** Move the H1 into the hero and add alt text to the hero and USP images.

## 3. SXO Gap Scores (per target URL)

| Dimension (max) | /collections/gripsokken | /pages/gripsokken-voor-voetbal | /pages/…-tennis | /pages/…-padel | /blogs/hi-grip/wat-zijn-gripsokken | rugby (404) |
|---|---|---|---|---|---|---|
| Page Type (15) | 12 | 9 | 8 | 11 | 12 (wrong sibling ranks) | 0 |
| Content Depth (15) | 5 | 5 | 5 | 5 | 5 | 0 |
| UX Signals (15) | 10 | 9 | 9 | 9 | 3 | 1 |
| Schema (15) | 5 | 9 | 9 | 9 | 10 | 0 |
| Media (15) | 9 | 6 | 6 | 6 | 4 | 0 |
| Authority (15) | 9 | 4 | 4 | 4 | 4 | 0 |
| Freshness (10) | 6 | 9 | 9 | 9 | 5 | 0 |
| **SXO Gap Score** | **56/100** | **51/100** | **50/100** | **53/100** | **43/100** | **1/100** |

## 4. User stories (from SERP signals)
1. **Awareness.** "As a footballer who sees teammates in gripsokken, I want to know what they are and whether they really work, so I don't waste money." Signal: 8 of 9 "wat zijn gripsokken" results are explainer blogs, several titled "waarom professionele voetballers…".
2. **Consideration.** "As a footballer I want to know how to wear gripsokken with cut-off socks, so I stay within the match rules." Signal: Voetbalshop YouTube "Dit is waarom jij GRIPSOKKEN moet hebben!", Sockerwear's "welke gripsokken gebruiken voetballers", and HÏ Grip's own blog on afgeknipte kousen.
3. **Consideration.** "As a tennis or padel player I want no blisters in long rallies, so I can play multiple sets." Signal: every bol.com tennis and padel title carries "anti blaren".
4. **Decision.** "As a buyer comparing bol.com, Decathlon and brands, I want price, sizes and reviews at a glance, so I can order right away." Signal: PLP and PDP dominance, plus "beste gripsokken van 2026" listicles.
5. **Decision.** "As a rugby player I want gripsokken strong enough for scrums and wet grass, from a shop that knows rugby." Signal: De Rugby Specialist (Stanno Raw Grip) and Rugbystuff rank. No Dutch generalist speaks to rugby.

## 5. Persona scores (Relevance / Clarity / Trust / Action, 25 each). Weakest first.

| Persona (SERP source) | Best URL | R | C | T | A | Total | Top improvement |
|---|---|---|---|---|---|---|---|
| Fanatical rugby player 18-30 (rugby SERP) | none (404) | 3 | 5 | 8 | 5 | **21** | Build the rugby page (F1) |
| Research-first beginner (wat zijn gripsokken) | wat-zijn-gripsokken | 14 | 13 | 7 | 3 | **37** | Pillar rewrite with studies and CTA/links (F2) |
| Bargain comparer (bol.com / listicles) | /collections/gripsokken | 14 | 12 | 13 | 16 | **55** | Show multi-pack or bundle value and review count on the PLP; aim to get into the "beste gripsokken 2026" listicles (outreach) |
| Club / team manager (Stanno, Teamswear, "sportclubs" blog) | /pages/zakelijk | 15 | 13 | 12 | 13 | **53** | Add a "Voor clubs" block on the voetbal and rugby pages linking /pages/zakelijk |
| Competitive tennis or padel player (bol.com PDPs) | /pages/gripsokken-voor-tennis, -padel | 18 | 17 | 9 | 13 | **57** | Inline buy box, "anti blaren" block, player reviews (F3) |
| Fanatical amateur footballer (voetbal SERP) | /pages/gripsokken-voor-voetbal | 19 | 17 | 9 | 14 | **59** | Afgeknipte-kousen how-to, voetballer reviews, inline add-to-cart (F3) |

## 6. Limitations
- WebSearch is not a real google.nl SERP. Positions are approximate, and ads, PAA, AI Overview and featured snippets could not be observed. A direct Google fetch returned a JS or bot-wall page.
- No Search Console or rank data, so actual higrip.nl positions are unknown. The only confirmed higrip presence is the waarom-hi-grip blog on "wat zijn gripsokken" and brand queries.
- Competitor word counts were not rendered. Depth comparisons are qualitative.
- Mobile above-the-fold layout was not screenshotted (`--mode auto` resolved to raw because the pages are not SPAs).

## 7. Structured findings (for audit-data.json → "Search Experience")
```json
[
 {"id":"SXO-1","severity":"critical","title":"No rugby landing page (404) for beachhead sport","url":"/pages/gripsokken-voor-rugby","fix":"Build page.sport-rugby, link from hub/home/sport pages"},
 {"id":"SXO-2","severity":"high","title":"Cannibalization: waarom-hi-grip-gripsokken ranks for 'wat zijn gripsokken'; target blog thin (340 words, 0 links, 0 CTA)","url":"/blogs/hi-grip/wat-zijn-gripsokken","fix":"Pillar rewrite 1200+ words, consolidate/301 overlapping posts"},
 {"id":"SXO-3","severity":"high","title":"Sport landing pages thin (~250 words), no reviews, no inline buy box","url":"/pages/gripsokken-voor-{tennis,voetbal,padel}","fix":"Add buy block, sport reviews, sport-specific blocks, 600-900 words"},
 {"id":"SXO-4","severity":"high","title":"Sport hub /pages/ontdek-jouw-sport links to no sport pages","url":"/pages/ontdek-jouw-sport","fix":"Link cards to sport landings; drop sports without pages"},
 {"id":"SXO-5","severity":"medium","title":"Collection: weak title/H1, outdated meta (sizes 34-39/40-46, yoga), 301 CTAs, duplicate listing URLs","url":"/collections/gripsokken","fix":"New title/H1/meta, shop-per-sport chips, intro+FAQ, fix handles, 301 /winkel here"},
 {"id":"SXO-6","severity":"medium","title":"Indexed legacy URLs 404 or redirect to irrelevant pages","url":"/blogs/2630309_..., /2697390_hi-grip-zaalvoetbalsokken","fix":"Targeted 301s"},
 {"id":"SXO-7","severity":"medium","title":"Visible star rating without Review/aggregateRating markup; inconsistent shipping promise","url":"PDP, collection, sport pages","fix":"Product review markup; single shipping sentence"},
 {"id":"SXO-8","severity":"low","title":"Homepage H1 in lower teaser section; 11/18 images without alt","url":"/","fix":"Move H1 to hero, add alts"}
]
```

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[03 Website Agent — Index]] · [[Home]]
