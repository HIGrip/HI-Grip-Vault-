# Content Quality & On-Page SEO: higrip.nl

Audit date: 2026-09-25 (supersedes the 2026-09-18 version of this file)
Scope: 54 NL URLs from `urls.txt` (the /en/ URLs were excluded). All returned HTTP 200.
Method: curl at about 1 request per second. Parsed with BeautifulSoup against `<main>`, so header, footer and cart chrome are excluded. Blog body = the top-level `.rte` blocks. The Flesch-Douma score is an approximation based on counting vowel groups as syllables. Metadata was checked with `metadata_template.py --pairs-file` over all 54 pages. Blog overlap was measured with TF-IDF cosine and 4-gram Jaccard.
Strategic lens: since Sept 2026 the site should rank for tennis / padel / voetbal / rugby.

## Scores

| Area | Score |
|---|---|
| Content Quality (E-E-A-T weighted) | **47 / 100** |
| On-Page SEO | **45 / 100** |
| Images (alt text) | **50 / 100** |
| AI citation readiness | **44 / 100** |
| Sport repositioning support | **25 / 100** |

### E-E-A-T breakdown

| Factor | Weight | Score | Driver |
|---|---|---|---|
| Experience | 20% | 50 | Real team photos and a club shoot (Excelsior). But no first-hand test data, no athlete stories, and the blogs are generic |
| Expertise | 25% | 48 | 1 post cites 3 real peer-reviewed studies. The author (Timo Heijligers) appears only in JSON-LD: no visible byline or bio. Injury and circulation claims have no evidence behind them |
| Authoritativeness | 25% | 40 | Club and retail logos have empty alt text and no names. Trustpilot is only a footer text link: no widget, no score. No press |
| Trustworthiness | 30% | 50 | Policies, contact and named reviews (4.5/5) are present. But there is Shopify placeholder text on the founders page, an empty blog post is live, and hard facts contradict each other (shipping, founder count, timeline, sizes) |
| **Weighted** | | **47** | |

*These weights are this skill's internal model. Google publishes no numeric E-E-A-T weights; it says only that trust matters most.*

Templated metadata check (`metadata_template.py`): `site_risk: low`, `templated_ratio: 0.0`, `shared_cta_phrases: {}`. There is no bulk-template pattern. The only flags are 10 low-severity `brand_suffix_in_description` (Low; the brand name in a description is fine for a small brand) and 3 `missing-metadata` (/pages/terugbetalingsbeleid, /collections/frontpage, /blogs/intern).

---

## 1. Critical findings

### C1. An empty blog post is live and indexable (Critical)
- Evidence: the body of `/blogs/trends/de-laatste-gezonde-trends-op-het-gebied-van-sportvoeding` is only dot characters (`......`, `....................`), 17 words in total. It still has Article schema, a meta description ("Ontdek de ultieme combinatie van gripsokken & sportvoeding") and a featured image. dateModified is 2025-12-29, so the content was apparently wiped on that date.
- Impact: a textbook QRG "lowest quality / no main content" page. It is also off-topic for a sock brand.
- Fix: delete it and 301 it to `/blogs/hi-grip/wat-zijn-gripsokken` (or to the blog index). Do not rewrite it. Sportvoeding is outside the brand's topical authority.

### C2. Shopify placeholder text as founder bios on /pages/ons-verhaal (Critical, Trust)
- Evidence: under each founder name is Shopify demo text:
  - "Luuk Verwaal: *We willen dat elke klant volledig tevreden is met zijn aankoop...*"
  - "Lars Cretz: *We kunnen voor bepaalde artikelen geen retouren accepteren...*"
  - "Tigo Twigt: *We doen ons best om je bestelling zo snel mogelijk te verzenden...*"
  - "Timo Heijligers: *Onze producten worden zowel lokaal als wereldwijd geproduceerd...*"
  - Under "Hogeschool Rotterdam": "*Met zorg gemaakt en onvoorwaardelijk geliefd bij onze klanten, overtreft deze kenmerkende bestseller alle verwachtingen.*"
- Impact: this is the one page that names the people behind the brand, and it reads as unfinished or fake. That undermines Experience and Trust across the whole site.
- Fix: give each founder a real 2-3 sentence bio: role, own sport and level, and what they own in the company. Link Timo's bio from the blogs as the author.

### C3. Public, indexable internal blog /blogs/intern (Critical, hygiene)
- Evidence: H1 "INTERN", title "INTERN – HÏ Grip", 1 word, no meta, no robots noindex.
- Fix: delete the blog in Shopify, or hide it and add noindex. It signals an unfinished site to both users and raters.

---

## 2. Content quality and E-E-A-T

### H1. Blog authorship is invisible (High, Expertise)
- Evidence: all 24 posts have `"author": {"@type":"Person","name":"Timo Heijligers"}` in JSON-LD. The visible article has only a date and a hashtag. No byline, bio, author page or credentials.
- Fix: add a visible byline with a photo and one line of credentials, linking to a founder bio (see C2). Add `url`/`sameAs` (LinkedIn) to the Person schema. Posts about injuries should be reviewed by a physio or trainer, shown as "Gecontroleerd door ...".

### H2. Health claims go beyond the cited evidence (High, Trust / YMYL-adjacent)
- Evidence:
  - Homepage meta: "Minder blessures".
  - `/blogs/trends/hoe-gripsokken-kunnen-helpen-bij-het-voorkomen-van-blessures` meta: "Voorkom blessures zoals een verzwikte enkel".
  - Product: "15–20 mmHg compressie ondersteunt je doorbloeding".
  - `/blogs/trends/waarom-gripsokken-het-verschil-maken-...`: "Onderzoek binnen de sportpraktijk laat zien...", "Sporters rapporteren consequent...", "aanbevolen door performance-coaches en medische staf". None of these are sourced.
  - The studies actually cited (Apps et al. 2020/2022, Friedl et al. 2023) measure friction, in-shoe slip and agility. They do not measure injury rates.
- Fix: rephrase to what the evidence supports: "minder schuiven in je schoen, meer stabiliteit". Keep injury language hedged ("kan helpen"). Put a citation next to every quantified claim. Remove the unsourced "medische staf" and "onderzoek laat zien" lines, or source them.

### H3. Hard facts contradict each other across pages (High, Trust)

| Fact | Versions found |
|---|---|
| Shipping | Homepage meta "Bestel vóór 22:00, vandaag verzonden". Sport pages "Voor 22:00 besteld, dezelfde werkdag verzonden". Product and FAQ "Binnen 1 werkdag verzonden". House rule: "vóór 22:00 besteld = binnen 1 dag verzonden" |
| Number of founders | Homepage FAQ "3 sporters met een missie". /over-ons, /ons-verhaal and blog "4 ondernemende sporters": 4 |
| Timeline | /over-ons: founded Nov '24, pre-order Feb '25, launch May '25. `/blogs/hi-grip/hoe-is-hi-grip-ontstaan`: born Dec 2024, launch Feb 2025 |
| Sizes | 2.0 product and sport FAQ: 35-38 / 39-42 / 43-47. /collections/gripsokken meta and /products/performance-gripsokken: 34-39 / 40-46, "witte gripsokken ... kinderen" |

- Fix: set one source of truth and update all of these. For shipping, use "Vóór 22:00 besteld = binnen 1 werkdag verzonden" everywhere.

### H4. Off-topic "Trends" posts dilute topical focus (High)
- Evidence:
  - `een-ochtendroutine-met-grip-voor-een-fitte-geest` (500 words, snooze and morning-routine tips, no visible date).
  - `waarom-sporten-meer-is-dan-bewegen-het-mentale-voordeel-van-actief-zijn` (411 words).
  - `de-laatste-gezonde-trends-...sportvoeding` (empty, see C1).
  - `smalle-voeten-brede-schoenen-...blaren` contains a leftover H2 "Trends in sportvoeding" above text about blisters.
- Fix: delete or noindex the 2 lifestyle posts and 301 them to /pages/blogs. Fix the stray H2 in the blisters post. Future posts should serve sport plus in-shoe grip intent only.

### H5. Blog cannibalisation: 7 clusters compete with each other (High)
The overlap is at intent level. There is no copied text: 4-gram Jaccard is at most 0.04 and TF-IDF cosine at most 0.27 (verschil-maken vs meer-grip-meer-vertrouwen). The SERP intent is still the same.

| Cluster (query) | Competing URLs | Keep as primary | Action |
|---|---|---|---|
| "wat zijn / voordelen / waarom gripsokken" | hi-grip/wat-zijn-gripsokken; hi-grip/waarom-hi-grip-gripsokken (title "Wat zijn de voordelen van gripsokken?"); trends/waarom-gripsokken-het-verschil-maken...; trends/meer-grip-meer-vertrouwen...; trends/gripsokken-de-toekomst-van-jouw-sportoutfit; + homepage and FAQ answers | wat-zijn-gripsokken (expand to 1,500+ words, sections "voordelen", "wetenschap", "per sport") | Merge the voordelen/verschil/vertrouwen/toekomst posts into it and 301 them |
| "gripsokken blessures" | trends/hoe-gripsokken-kunnen-helpen-bij-het-voorkomen-van-blessures; trends/waarom-gripsokken-het-verschil-maken-meer-stabiliteit-minder-blessures (URL slug); "Bescherming tegen blessures" section in voorkom-uitglijden...krachttraining | hoe-gripsokken-kunnen-helpen...blessures | Merge verschil-maken into it, rewrite with sources (H2), 301 |
| "gripsokken wassen / verzorgen" | hi-grip/hoe-zorg-ik-voor-mijn-gripsokken (181 words); trends/hoe-verleng-je-de-levensduur-van-je-gripsokken (311 words) | hoe-verleng-je... (better title) | Merge and 301 |
| "gripsokken pilates" | trends/gripsokken-tijdens-pilates-en-yoga...; trends/waarom-gripsokken-verplicht-zijn-bij-pilates; /pages/pilates (B2B) | one post | Merge the 2 posts. Retitle /pages/pilates as "Gripsokken voor pilatesstudio's (zakelijk)" |
| "ontstaan / verhaal HÏ Grip" | hi-grip/hoe-is-hi-grip-ontstaan (56 words); trends/de-twee-grootste-problemen...4-ondernemende-sporters; /pages/over-ons; /pages/ons-verhaal; /pages/onze-missie, -visie, -waarden (169-233 words each) | /pages/over-ons | Fold mission, vision, values and story into /over-ons. 301 the rest |
| "welke sport gripsokken" | trends/voor-welke-sport-zijn-gripsokken-onmisbaar...; /pages/ontdek-jouw-sport; the 3 sport pages | the sport pages | Rewrite the post as a hub that links to each sport page |
| "wetenschap / grippatroon" | hi-grip/de-wetenschap-achter-gripsokken; hi-grip/het-innovatieve-hi-grip-grippatroon...; "De wetenschap achter voetfixatie" H2 in meer-grip-meer-vertrouwen | de-wetenschap-achter-gripsokken | Keep both (different angles) but cross-link |

After merging, about 24 posts become about 13 substantive ones, plus new sport-specific posts (see H7).

### H6. Thin content (High / Medium)
- Blog body word counts (article only): 17 (sportvoeding), 56 (ontstaan), 181 (verzorgen), 284-424 for the other 20. **0 of 24 posts reach the 1,500-word blog floor.** The longest is de-wetenschap-achter-gripsokken at 520.
- Pages under their floor: /pages/collection 25 words, /pages/contact 40, /pages/retail 94, /pages/pilates 99, /pages/clubwear 111, /pages/ons-verhaal 147, mission/vision/values 169-233, **sport pages 236-244 words each** (floor about 500-800 for a landing page meant to rank).
- Fix: prioritise depth on the sport pages and the primary cluster posts (H5) over publishing new generic posts. Word count is a coverage floor, not a ranking factor.

### H7. Sport repositioning barely present in the content (High, strategic)
- Evidence: "tennis" appears on 10 of 54 pages, 9 of those mentions on the tennis page itself. "padel" appears on 10 pages. **"rugby" appears in the body copy of 0 core pages.** It is only in the homepage meta description and one passing mention each on /ontdek-jouw-sport and wat-zijn-gripsokken. `/pages/gripsokken-voor-rugby` returns **404**. None of the 24 posts is about tennis, padel or rugby. The only sport-specific post is voetbal (afgeknipte-kousen), and it does not link to /pages/gripsokken-voor-voetbal.
- The 3 sport pages share about 50% of their trigrams (padel/tennis/voetbal: 0.49-0.50 Jaccard). Only about 120 words per page are sport-specific. That is a templated or doorway-like pattern at this length.
- Fix, per sport page: add 600+ unique words: sport-specific movement analysis (tennis: split-step and sliding on gravel; padel: lateral slides on artificial grass; voetbal: in-studs slip, afgeknipte kousen), 1 player or club quote, sizes and shoe fit for that sport, and 4-6 sport-specific FAQs. Build `/pages/gripsokken-voor-rugby`. Write 2 supporting posts per sport that link up to the sport page.

### M1. Generic AI-style phrasing and batch publishing (Medium, QRG Sept 2025)
- Evidence: repeated interchangeable claims with no specifics ("Sporters rapporteren consequent", "steeds vaker standaard in de sporttas", "De toekomst is rijk", "110% aan performance"). 12 posts were published on 13-15 Feb 2026 (8 on 15 Feb alone). One featured image is named `ChatGPT_Image_25_jan_2026...`, and several image files are named after AI prompts (see Images). Nothing has been published since 15-02-2026 (7 months).
- Fix: every post should include at least one first-hand element: a founder or player test, a photo from a real match, numbers from HÏ Grip's own customers or clubs. Publish on a steady cadence rather than in batches.

### M2. Formal "u" and informal "je" mixed (Medium, brand and readability)
- Evidence: /zakelijk (14x u/uw), FAQ (13 u / 13 je), product pages (13 u), and wat-zijn / hoe-zorg-ik posts use "u". Sport pages and newer posts use "je". The brand voice is energetic and direct, which means "je".
- Fix: switch everything to "je" (legal pages can stay neutral).

### M3. Readability (Medium)
- Flesch-Douma (approximate): most commercial pages score 60-66 (fine).
- Poor scores: wat-zijn-gripsokken 34 (average sentence 20.5 words), waarom-...verschil-maken 44, meer-grip-meer-vertrouwen 44, welke-gripsokken 45, hoe-gripsokken...blessures 48 (20.1 words/sentence), /pages/zakelijk 42, /pages/clubwear 49 (27.8 words/sentence), privacybeleid 19.
- The blessures post also contains a garbled sentence: "...die zich opstapelen en later grotere problemen kunnen veroorzaken kunnen wordt verminderd".
- Fix: aim for 12-15 words per sentence on pages for the 18-35 audience. Proofread the flagged posts.

### M4. Trust signals are underused (Medium, Authority)
- Reviews exist: product pages show 4.5/5, 7 named reviewers, and "3.000+ sporters gingen je voor". But there is no `aggregateRating` in Product schema, and **no Trustpilot widget anywhere**. There is only a text link to nl.trustpilot.com/review/higrip.nl in the footer on all 54 pages. The Trustpilot scripts load but render nothing visible.
- "VERTROUWD DOOR Sportclubs, sportscholen en retail" shows logos (Concordia, SYTH, SPORT2000, Nootdorp, Excelsior shoot) with **empty alt**, so crawlers see no club names.
- The review excerpt on product pages leans on pilates ("top sokken voor pilates!") and has nothing from sport-focus athletes.
- Fix: add a Trustpilot TrustBox (mini or carousel) to the homepage, products and sport pages. Name the clubs in text and alt ("Partner: VV Concordia"). Collect reviews from tennis, padel and voetbal players and show them on the matching sport page.

---

## 3. On-page SEO

### H8. Internal linking gaps (High)
- **0 of 24 blog posts link to /pages/gripsokken-voor-tennis, -voetbal or -padel.** The sport pages are linked only from the homepage and from each other. They are missing from the main nav and from /pages/ontdek-jouw-sport, even though that page is meant to be the sport hub (H1 "GRIPSOKKEN VOOR ELKE SPORT").
- **0 of 24 posts link to a product URL.** Every CTA ("Shop performance gripsokken") goes to `/collections/all`, a non-curated default listing. 17 posts have no in-body links at all.
- Broken or redirecting links: `voorkom-uitglijden...krachttraining` links to `/blogs/2590799_het-innovatieve-hi-grip-grippatroon-op-basis-van-de-drukpunten-van-sporters`, which returns **404**. `waarom-sporten-meer-is-dan-bewegen...` links to `/winkel`, which 301s to /collections/all.
- Fix: every post gets at least 1 contextual link to the relevant sport page, 1 to `/products/performance-gripsokken-2-0-wit` or `-zwart`, and 1-2 to sibling posts. Point the global blog CTA at /collections/gripsokken. Add Tennis, Padel, Voetbal (and later Rugby) to the header nav. Make /pages/ontdek-jouw-sport link to all sport pages. Fix the 404 link.

### H9. Head-term cannibalisation on "gripsokken" (High)
- Evidence:
  - `/products/performance-gripsokken` (old 1.0 with sizes 34-39/40-46, title "Gripsokken | Maximale Grip voor Elke Sport").
  - `/collections/gripsokken` (title "Gripsokken – HÏ Grip").
  - `/collections/frontpage` (title "Homepage – HÏ Grip", same H1 "Kies je gripsok.", 86% trigram overlap with /collections/gripsokken, no meta).
  - `/pages/collection` (H1 "Shop", 25 words).
  - `/collections/all` (blog CTA target).
  - The homepage.
- Fix: make /collections/gripsokken the one "gripsokken kopen" page: title "Gripsokken kopen | Voor tennis, padel & voetbal | HÏ Grip" plus 150-300 words of intro. Noindex or redirect /collections/frontpage and /pages/collection. Retitle the old 1.0 product to its model name, or redirect it to 2.0 if it is discontinued.

### H10. H1 and heading hierarchy (High)
- No H1: /pages/terugbetalingsbeleid, /pages/retourbeleid, /pages/retail, /pages/pilates.
- Several H1s, including empty ones: /pages/verzendbeleid (3, 2 empty), /pages/privacybeleid (3, 2 empty), gripsokken-tijdens-pilates-en-yoga (2, 1 empty).
- Generic or duplicate H1s: "Shop", "Trends", "Algemeen", "INTERN", and "Kies je gripsok." on 2 URLs. All-caps H1s ("HÏ GRIP BIJ JOU OP LOCATIE?", "ONZE MISSIE", "CLUBWEAR").
- Hierarchy: every page skips h2 to h4 (theme footer). There are h1-to-h3/h4 skips on the homepage, /ontdek-jouw-sport, the collections and the blog indexes. Theme chrome adds H2s ("Taal" x2, "Je winkelwagen is leeg", "Zoekopdracht") to every page.
- Fix: exactly one descriptive H1 per template. In the theme, demote the language, cart and search headings to `<p>`/`<span>` and fix the footer h4.

### M5. Title tags (Medium)
- Too long (>60, truncation likely): grippatroon post (65), meer-grip-meer-vertrouwen (64), blessures (64), welke-gripsokken (62), afgeknipte-kousen (61).
- Too short or missing the keyword: "HÏ Grip | Over Ons", "| Zakelijk", "| Contact", "| Retail", "| Pilates", "| Clubwear", "| Blogs", "Homepage – HÏ Grip", "INTERN – HÏ Grip".
- "HÏ Grip |" as a prefix on all blog titles pushes the keyword back. Use "Keyword ... | HÏ Grip", as the sport pages already do.
- Title-intent mismatch: afgeknipte-kousen is about amateur football, but the title says "Waarom kiezen steeds meer sporters voor gripsokken?", so it loses the voetbal keyword. The waarom-hi-grip-gripsokken title says "voordelen" while the H1 says "Waarom HÏ Grip".
- The title "Betalingsbeleid | HÏ Grip" is on /pages/terugbetalingsbeleid, so it does not match the slug.
- Uniqueness: no exact duplicate titles.

### M6. Meta descriptions (Medium)
- Missing: /pages/terugbetalingsbeleid, /collections/frontpage, /blogs/intern.
- Over 160 characters: both 2.0 product pages (320 each, **identical**, a dump of product body copy with a missing space in "controle✓Compressie"), /collections/gripsokken (320, outdated), waarom-hi-grip-gripsokken (200), hoe-zorg-ik (172), hoe-is-hi-grip-ontstaan (169).
- Too short: retourbeleid (76), verzendbeleid (81), privacybeleid (81), trends index (65), hi-grip index (77).
- Typos and grammar: "momemt" (onze-visie), "elke sporter in beter te laten presteren" (ons-verhaal), "onze de antislipsokken" (pilates-yoga post), "gripsokken onmisbaar is" (pilates-verplicht), "Gripsokken is de nieuwe standaard" (sportclubs).
- Unverified scarcity: "nu beperkt op voorraad!" (voor-welke-sport post). Remove it unless it is true at all times.
- Fix: write 2 distinct 140-155 character metas for the zwart and wit products. Rewrite the rest to 120-155 characters, keyword first.

---

## 4. Images

- 218 unique images inside `<main>` across 54 pages: **6 with no alt, 58 with empty alt (29% without useful alt).**
- Empty alt on meaningful images:
  - All 6 team and origin photos on `hoe-is-hi-grip-ontstaan` (Teamfoto, IMG_0134, IMG_0332, Excelsior shoot).
  - Club and retail logos: LOGO_CONCORDIA, LOGO_SYTH, SPORT2000, NOOTDORP.
  - The Excelsior shoot on /zakelijk and /ons-verhaal.
  - Sport tiles on the homepage and sport pages (Grip_sokken_voetbal.jpg, Padelsokken_met_grip.jpg).
  - The Hogeschool Rotterdam logo.
- No alt: `padel-hero.jpg` and the 2.0 infographic on the homepage; 2 thumbnails on each 2.0 product page.
- English alt on the NL site: "Performance Grip Socks 2.0 Zwart/Wit HÏ Grip" is used on 24 images, including tennis action, voetbal and running shots. That makes the alt text both duplicated and non-descriptive.
- Generic repeated alt: "HÏ Grip Gripsokken HÏ Grip" on 13 images.
- AI prompt leaked into alt: "sokken minder goed zichtbaar en menselijker" (/pages/pilates).
- Filenames that are AI prompts or unfinished:
  - `een-modern-sportcomplex-met-een-neutrale-en-professionele-uitstraling...png`
  - `maak-een-sportzaak-van-binnen-met-sokken-kleding-etc...png`
  - `in-een-retailzaak-uit-de-sport-branche...png`
  - `geef-de-vorige-afbeelding-terug.png` (on several pages)
  - `ChatGPT_Image_25_jan_2026...`
  - `Firefly_Referenceimage-attached...`
  These are exposed to image search and look like placeholder imagery on the B2B pages.
- Blog featured images use the post title as alt. That is acceptable, but a description of the image would be better.
- Fix: write Dutch, image-specific alt text ("Tennisser maakt split-step met HÏ Grip gripsokken 2.0 zwart"). Name the clubs in logo alt. Re-upload AI-generated assets with descriptive filenames, and replace them with real photos over time (B2B pages first).

---

## 5. AI citation readiness: 44 / 100
- Strong: the homepage and product FAQ block has a quotable number with sources ("wrijvingscoëfficiënt 1,17 vs 0,60", Apps et al. 2020/2022, Friedl et al. 2023). The sport pages have FAQPage schema. Blogs have Article schema with dates.
- Weak: no visible author or expert, no definitions box on "wat zijn gripsokken", sport pages too thin to be quoted, no comparison table (grip socks vs regular vs cut socks), inconsistent facts (H3) that lower confidence in the entity, and no rugby content.
- Fix: open each sport page and each primary post with a 40-60 word direct answer, add a spec or comparison table, and cite sources inline.

---

## 6. Prioritised fix list
1. Delete or 301 the empty sportvoeding post and /blogs/intern. Replace the placeholder founder bios. (C1-C3)
2. Standardise the facts: shipping promise, founder count, timeline, sizes. (H3)
3. Link sport pages from the nav, /ontdek-jouw-sport and every relevant post. Blog CTAs should go to /collections/gripsokken and products. Fix the 404 link. (H8)
4. Expand tennis, padel and voetbal to 800+ unique words each. Build a rugby page. (H7)
5. Merge the cannibalising clusters into single strong posts with 301s. Remove the lifestyle posts. (H4, H5)
6. Add a visible author and bio. Source or soften the injury and circulation claims. (H1, H2)
7. Consolidate "gripsokken" onto /collections/gripsokken. (H9)
8. Fix H1s and theme heading chrome, titles and metas per the table below. (H10, M5, M6)
9. Fix alt text: Dutch, specific, named club logos. (Images)
10. Add a Trustpilot widget and aggregateRating, and collect sport-specific reviews. (M4)

---

## 7. Per-URL title / meta / H1 table (NL, 54 URLs)
Title length is in characters. Meta = meta description length. H1 count includes empty H1 elements.

| # | URL | Title (len) | Meta len | H1 count / text | Issues | Sev |
|---|---|---|---|---|---|---|
| 1 | / | HÏ Grip \| Performance Gripsokken voor Sporters (46) | 160 | 1 / HÏ Grip Performance Gripsokken voor Spor | H1 skip h1>h3; meta promises "vandaag verzonden" (conflicts with other pages) | Medium |
| 2 | /products/performance-gripsokken | Gripsokken \| Maximale Grip voor Elke Sport \| HÏ Grip (52) | 159 | 1 / Performance Gripsokken | Title targets head term "gripsokken" = cannibalises /collections/gripsokken; old 1.0 sizes 34-39/40-46 | High |
| 3 | /products/performance-gripsokken-2-0-zwart | Performance Gripsokken 2.0 Zwart – HÏ Grip (42) | 320 | 1 / Performance Gripsokken 2.0 Zwart | meta >160; Meta 320 chars = body copy dump, missing space "controle✓"; identical to /wit | High |
| 4 | /products/performance-gripsokken-2-0-wit | Performance Gripsokken 2.0 Wit – HÏ Grip (40) | 320 | 1 / Performance Gripsokken 2.0 Wit | meta >160; Meta identical to /zwart; 98% duplicate body | High |
| 5 | /pages/collection | HÏ Grip \| Shop gripsokken (25) | 156 | 1 / Shop | title short/no keyword; 25 words, generic H1 "Shop"; 4th product-listing URL | Medium |
| 6 | /pages/over-ons | HÏ Grip \| Over Ons (18) | 155 | 1 / Team HÏ Grip | title short/no keyword; Title has no keyword; meta says 4 founders, homepage FAQ says 3 | Medium |
| 7 | /pages/zakelijk | HÏ Grip \| Zakelijk (18) | 156 | 1 / HÏ GRIP BIJ JOU OP LOCATIE? | title short/no keyword; H1 all caps; formal "u" vs brand "je" | Medium |
| 8 | /pages/blogs | HÏ Grip \| Blogs (15) | 153 | 1 / HÏ GRIP BLOGS | title short/no keyword; Duplicates /blogs/trends + /blogs/hi-grip as listing | Medium |
| 9 | /pages/contact | HÏ Grip \| Contact (17) | 160 | 1 / Neem contact op | title short/no keyword; 40 words; no phone/address in main | Medium |
| 10 | /pages/ontdek-jouw-sport | HÏ Grip \| Ontdek Jouw Sport (27) | 114 | 1 / GRIPSOKKEN VOOR ELKE SPORT | title short/no keyword; Hub does NOT link to the 3 sport pages; H1 skip | High |
| 11 | /pages/veelgestelde-vragen | HÏ Grip \| Veelgestelde Vragen (29) | 141 | 1 / Veelgestelde Vragen | title short/no keyword | Medium |
| 12 | /pages/onze-missie | HÏ Grip \| Onze missie (21) | 123 | 1 / ONZE MISSIE | title short/no keyword; 169 words; mission/visie/waarden = 3 thin pages | Medium |
| 13 | /pages/onze-waarden | HÏ Grip \| Onze waarden (22) | 143 | 1 / ONZE WAARDEN | title short/no keyword; 233 words thin | Medium |
| 14 | /pages/onze-visie | HÏ Grip \| Onze visie (20) | 148 | 1 / ONZE VISIE | title short/no keyword; Meta typo "momemt"; 227 words thin | Medium |
| 15 | /pages/ons-verhaal | HÏ Grip \| Ons verhaal (21) | 154 | 1 / ONS VERHAAL | title short/no keyword; Founder bios = Shopify placeholder text; meta typo "sporter in beter" | Critical |
| 16 | /pages/terugbetalingsbeleid | Betalingsbeleid \| HÏ Grip (25) | 0 | 0 / (none) | title short/no keyword; no meta; no H1; Title says "Betalingsbeleid", slug says terugbetaling; no meta; no H1 | High |
| 17 | /pages/retourbeleid | Retourbeleid \| HÏ Grip (22) | 76 | 0 / (none) | title short/no keyword; meta <110; no H1; No H1 | Medium |
| 18 | /pages/verzendbeleid | Verzendbeleid \| HÏ Grip (23) | 81 | 3 / Verzendbeleid | title short/no keyword; meta <110; 3 H1; 3 H1 (2 empty) | Medium |
| 19 | /pages/privacybeleid | Privacybeleid \| HÏ Grip (23) | 81 | 3 / Privacybeleid | title short/no keyword; meta <110; 3 H1; 3 H1 (2 empty) | Medium |
| 20 | /pages/retail | HÏ Grip \| Retail (16) | 154 | 0 / (none) | title short/no keyword; no H1; No H1; 94 words | High |
| 21 | /pages/pilates | HÏ Grip \| Pilates (17) | 154 | 0 / (none) | title short/no keyword; no H1; No H1; 99 words; B2B page on a consumer keyword (pilates) | High |
| 22 | /pages/clubwear | HÏ Grip \| Clubwear (18) | 141 | 1 / CLUBWEAR | title short/no keyword; H1 caps; 111 words | Medium |
| 23 | /pages/gripsokken-voor-padel | Gripsokken voor padel \| HÏ Grip (31) | 143 | 1 / Gripsokken voor padel | ~240 words, ~50% trigram overlap with tennis/voetbal | High |
| 24 | /pages/gripsokken-voor-tennis | Gripsokken voor tennis \| HÏ Grip (32) | 143 | 1 / Gripsokken voor tennis | ~240 words, templated with padel/voetbal | High |
| 25 | /pages/gripsokken-voor-voetbal | Gripsokken voor voetbal \| HÏ Grip (33) | 141 | 1 / Gripsokken voor voetbal | ~240 words, templated | High |
| 26 | /collections/frontpage | Homepage – HÏ Grip (18) | 0 | 1 / Kies je gripsok. | title short/no keyword; no meta; Title "Homepage"; no meta; H1 + 86% body duplicate of /collections/gripsokken | High |
| 27 | /collections/gripsokken | Gripsokken – HÏ Grip (20) | 320 | 1 / Kies je gripsok. | title short/no keyword; meta >160; Meta 320 chars, outdated ("witte", sizes 34-39/40-46, kinderen); no sport intent | High |
| 28 | /blogs/trends | HÏ Grip \| Trendblogs (20) | 65 | 1 / Trends | title short/no keyword; meta <110; Generic H1 "Trends"; heading skip h1>h4 | Medium |
| 29 | /blogs/hi-grip | HÏ Grip \| Algemene blogs (24) | 77 | 1 / Algemeen | title short/no keyword; meta <110; Generic H1 "Algemeen"; 67 words | Medium |
| 30 | /blogs/intern | INTERN – HÏ Grip (16) | 0 | 1 / INTERN | title short/no keyword; no meta; Empty internal blog, indexable, no meta | Critical |
| 31 | /blogs/hi-grip/wat-zijn-gripsokken | HÏ Grip \| Wat zijn gripsokken? Waarom gripsokken dragen? (56) | 149 | 1 / Wat zijn gripsokken? | OK-ish; body 328 words | Medium |
| 32 | /blogs/hi-grip/hoe-zorg-ik-voor-mijn-gripsokken | HÏ Grip \| Hoe was ik mijn gripsokken? Op hoeveel graden? (56) | 172 | 1 / Hoe zorg ik voor mijn gripsokken? | meta >160; Meta 172; overlaps /hoe-verleng-je-de-levensduur; formal "u" | High |
| 33 | /blogs/hi-grip/waarom-hi-grip-gripsokken | HÏ Grip \| Wat zijn de voordelen van gripsokken? (47) | 200 | 1 / Waarom HÏ Grip gripsokken? | meta >160; Meta 200; title "voordelen" ≠ H1 "Waarom HÏ Grip"; overlaps 31/45/47 | High |
| 34 | /blogs/hi-grip/de-wetenschap-achter-gripsokken | HÏ Grip \| Zijn gripsokken wetenschappelijk bewezen beter? (57) | 154 | 1 / De wetenschap achter gripsokken | Best post (real citations) | Medium |
| 35 | /blogs/hi-grip/het-innovatieve-hi-grip-grippatroon-o... | HÏ Grip \| Een grippatroon op basis van de drukpunten van sporters (65) | 157 | 1 / Het innovatieve HÏ Grip grippatroon; op  | title >60; Title 65; H1 contains semicolon; post 41 links to it via a broken /blogs/2590799_... URL (404) | Medium |
| 36 | /blogs/hi-grip/hoe-is-hi-grip-ontstaan | HÏ Grip \| Ontdek hier het verhaal achter het merk HÏ Grip (57) | 169 | 1 / Hoe is HÏ Grip ontstaan? | meta >160; 56 words body; timeline contradicts /over-ons | High |
| 37 | /blogs/trends/de-laatste-gezonde-trends-op-het-gebie... | HÏ Grip \| Wat zijn trends op het gebied van sportvoeding? (57) | 158 | 1 / De laatste gezonde trends op het gebied  | EMPTY BODY (dots only), off-topic | Critical |
| 38 | /blogs/trends/een-ochtendroutine-met-grip-voor-een-f... | HÏ Grip \| Een ochtendroutine met GRIP voor een fitte geest (58) | 159 | 1 / Een ochtendroutine met GRIP voor een fit | Off-topic (ochtendroutine); no visible date | Medium |
| 39 | /blogs/trends/waarom-sporten-meer-is-dan-bewegen-het... | HÏ Grip \| Wat is het mentale voordeel van sporten? (50) | 132 | 1 / Waarom sporten meer is dan bewegen; het  | Off-topic (mental benefits); links /winkel (301) | Medium |
| 40 | /blogs/hi-grip/de-geschiedenis-van-gripsokken | HÏ Grip \| Hoe zijn gripsokken in Nederland ontstaan? (52) | 156 | 1 / De geschiedenis van gripsokken |  | - |
| 41 | /blogs/trends/voorkom-uitglijden-verlies-geen-focus-... | HÏ Grip \| Voorkom uitglijden, verlies geen focus in training (60) | 155 | 1 / Voorkom uitglijden, verlies geen focus:  | Body link to /blogs/2590799_... returns 404 | High |
| 42 | /blogs/trends/gripsokken-tijdens-pilates-en-yoga-opt... | HÏ Grip \| Waarom gripsokken tijdens yoga en pilates? (52) | 127 | 2 / Gripsokken tijdens pilates en yoga; opti | 2 H1; 2nd H1 empty; meta grammar "onze de"; overlaps 44 | Medium |
| 43 | /blogs/trends/gripsokken-de-toekomst-van-jouw-sporto... | HÏ Grip \| Gripsokken zijn de toekomst van jouw sportoutfit (58) | 156 | 1 / Gripsokken zijn de toekomst van jouw spo | Featured image "ChatGPT_Image..."; overlaps 45/47 | Medium |
| 44 | /blogs/trends/waarom-gripsokken-verplicht-zijn-bij-p... | HÏ Grip \| Waarom zijn gripsokken verplicht bij pilates? (55) | 160 | 1 / Waarom gripsokken verplicht zijn bij pil | Meta grammar "gripsokken ... is"; overlaps 42 | Medium |
| 45 | /blogs/trends/waarom-gripsokken-het-verschil-maken-m... | HÏ Grip \| Waarom maken gripsokken voor jou het verschil? (56) | 157 | 1 / Waarom gripsokken het verschil maken: me | Unsourced claims; overlaps 52 (blessures) + 47 | High |
| 46 | /blogs/trends/voor-welke-sport-zijn-gripsokken-onmis... | HÏ Grip \| Voor welke sporten zijn gripsokken goed? (50) | 156 | 1 / Voor welke sport zijn gripsokken onmisba | Meta "nu beperkt op voorraad" (unverified scarcity); should feed sport pages | Medium |
| 47 | /blogs/trends/meer-grip-meer-vertrouwen-hoe-de-juist... | HÏ Grip \| Hoe de juiste sportsokken je sportprestatie verbeteren (64) | 152 | 1 / Meer grip, meer vertrouwen: hoe de juist | title >60; Title 64; overlaps 45 | Medium |
| 48 | /blogs/trends/hoe-verleng-je-de-levensduur-van-je-gr... | HÏ Grip \| Hoe verleng je de levensduur van je gripsokken? (57) | 149 | 1 / Hoe verleng je de levensduur van je grip | Overlaps 32 (verzorging) | High |
| 49 | /blogs/trends/waarom-steeds-meer-sportclubs-gripsokk... | HÏ Grip \| Waarom gripsokken voor mijn sportclub? (48) | 160 | 1 / Waarom steeds meer sportclubs gripsokken | Overlaps /pages/clubwear | Medium |
| 50 | /blogs/trends/smalle-voeten-brede-schoenen-zo-voorko... | HÏ Grip \| Zijn gripsokken goed tegen blaren? (44) | 156 | 1 / Smalle voeten, brede schoenen: zo voorko | H2 "Trends in sportvoeding" is a copy-paste error | High |
| 51 | /blogs/trends/afgeknipte-kousen-bij-amateurvoetbal-w... | HÏ Grip \| Waarom kiezen steeds meer sporters voor gripsokken? (61) | 153 | 1 / Afgeknipte kousen bij amateurvoetbal: wa | title >60; Title 61; title about "sporters" but post is voetbal-specific; no link to voetbal page | Medium |
| 52 | /blogs/trends/hoe-gripsokken-kunnen-helpen-bij-het-v... | HÏ Grip \| Hoe gripsokken helpen bij het voorkomen van blessures? (64) | 158 | 1 / Hoe gripsokken kunnen helpen bij het voo | title >60; Title 64; primary blessure post, overlaps 45 | High |
| 53 | /blogs/trends/welke-gripsokken-bestaan-er-van-budget... | HÏ Grip \| Welke gripsokken bestaan er? Van budget tot premium. (62) | 146 | 1 / Welke gripsokken bestaan er? Van budget  | title >60; Title 62 | Medium |
| 54 | /blogs/trends/de-twee-grootste-problemen-in-de-sport... | HÏ Grip \| De grootste problemen in de sportwereld (49) | 156 | 1 / De twee grootste problemen in de sportwe | Overlaps 36/over-ons origin story | Medium |

---

## 8. Structured findings (for audit-data.json, category "Content Quality")

```json
{
  "category": "Content Quality",
  "scores": {"content_quality": 47, "on_page_seo": 45, "images": 50, "ai_citation_readiness": 44,
             "eeat": {"experience": 50, "expertise": 48, "authoritativeness": 40, "trustworthiness": 50}},
  "metadata_template": {"site_risk": "low", "templated_ratio": 0.0, "shared_cta_phrases": {}},
  "findings": [
    {"id": "C1", "severity": "Critical", "title": "Empty blog post live (sportvoeding)", "url": "/blogs/trends/de-laatste-gezonde-trends-op-het-gebied-van-sportvoeding", "fix": "Delete + 301"},
    {"id": "C2", "severity": "Critical", "title": "Shopify placeholder text as founder bios", "url": "/pages/ons-verhaal", "fix": "Write real bios"},
    {"id": "C3", "severity": "Critical", "title": "Empty internal blog indexable", "url": "/blogs/intern", "fix": "Delete or noindex"},
    {"id": "H1", "severity": "High", "title": "No visible author/bio on 24 posts", "fix": "Byline + bio + Person sameAs"},
    {"id": "H2", "severity": "High", "title": "Injury/circulation claims exceed cited evidence", "fix": "Hedge + cite"},
    {"id": "H3", "severity": "High", "title": "Contradicting facts (shipping, founders, timeline, sizes)", "fix": "Single source of truth"},
    {"id": "H4", "severity": "High", "title": "Off-topic lifestyle posts", "fix": "Remove/301"},
    {"id": "H5", "severity": "High", "title": "7 cannibalising blog/page clusters", "fix": "Merge + 301"},
    {"id": "H6", "severity": "High", "title": "Thin content: 0/24 posts >=1500 words, sport pages ~240 words", "fix": "Expand priority pages"},
    {"id": "H7", "severity": "High", "title": "Sport repositioning absent; rugby page 404; sport pages ~50% templated", "fix": "Expand + rugby page + supporting posts"},
    {"id": "H8", "severity": "High", "title": "0 blogs link to sport pages or products; 404 internal link", "fix": "Contextual links + nav"},
    {"id": "H9", "severity": "High", "title": "Head term 'gripsokken' split over 6 URLs", "fix": "Consolidate on /collections/gripsokken"},
    {"id": "H10", "severity": "High", "title": "Missing/multiple/empty H1s; theme heading chrome", "fix": "One H1 per template"},
    {"id": "M1", "severity": "Medium", "title": "Generic AI-style phrasing, batch publishing, 7 months stale", "fix": "First-hand elements + cadence"},
    {"id": "M2", "severity": "Medium", "title": "u/je mixed", "fix": "Standardise on je"},
    {"id": "M3", "severity": "Medium", "title": "Low readability on 6 posts and B2B pages", "fix": "Shorter sentences, proofread"},
    {"id": "M4", "severity": "Medium", "title": "Trustpilot only as footer link; no aggregateRating; logos unnamed", "fix": "TrustBox + schema + named clubs"},
    {"id": "M5", "severity": "Medium", "title": "Title length/keyword/prefix issues", "fix": "Keyword-first titles <=60"},
    {"id": "M6", "severity": "Medium", "title": "Meta missing/overlong/typos; identical product metas", "fix": "Rewrite"},
    {"id": "IMG", "severity": "Medium", "title": "29% of images lack useful alt; English/duplicate alts; AI-prompt filenames", "fix": "Dutch descriptive alts, rename files"}
  ]
}
```
