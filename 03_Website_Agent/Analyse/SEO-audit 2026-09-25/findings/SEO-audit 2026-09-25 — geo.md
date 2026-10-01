# GEO / AI Search Readiness — higrip.nl

Audit date: 2026-09-25 (re-audit; supersedes the 2026-09-18 version)
Scope: https://www.higrip.nl, Shopify, NL + /en. Pages rendered with render_page.py (all SSR, is_spa=false).

## GEO Readiness Score: 60 / 100

| Dimension | Weight | Score | Weighted |
|---|---|---|---|
| Citability | 25% | 55 | 13.8 |
| Structural readability | 20% | 66 | 13.2 |
| Multi-modal content | 15% | 48 | 7.2 |
| Authority & brand signals | 20% | 45 | 9.0 |
| Technical accessibility | 20% | 82 | 16.4 |
| **Total** | | | **59.6 -> 60** |

Changes since 18-9: homepage title + meta description fixed, single H1, FAQPage schema on homepage
and on the 3 new sport pages (+). Still open: empty entity graph, thin passages, generic llms.txt.

## 1. AI crawler access (robots.txt = Shopify default, only `*` + adsbot-google groups)

| Crawler | Governs | robots.txt | Live test (UA spoof, /pages/gripsokken-voor-voetbal) |
|---|---|---|---|
| OAI-SearchBot | ChatGPT Search citations | Allowed via `*` | 200, 261 KB |
| Claude-SearchBot | Claude search citations | Allowed via `*` | 200 |
| PerplexityBot | Perplexity citations | Allowed via `*` | 200 |
| Googlebot | Google Search + AI Overviews | Allowed | n/a |
| Bingbot | Bing / Copilot | Allowed | 200 |
| GPTBot | OpenAI training only | Allowed | 200 |
| ClaudeBot | Anthropic training only | Allowed | 200 |
| Google-Extended | Gemini training/grounding only (not AIO) | Allowed | n/a |
| Applebot-Extended | Apple Intelligence training only | Allowed | n/a |
| CCBot / cohere-ai | Training corpora | Allowed | CCBot 200 |

Severity: none (pass). No blocks, no bot-based cloaking/challenge. Disallows only cover cart/checkout/account
and filter crawl traps.

## 2. llms.txt / agents.md / agentic sitemap / RSL

- `/llms.txt` 200, text/markdown, 4491 B. `/llms-full.txt` 4496 B, `/agents.md` 4448 B: all three are Shopify's
  auto-generated agent file (Shop-skill promo, UCP endpoints, read-only JSON routes, policy links).
  It states itself "You're reading /llms.txt, which mirrors [agents.md]".
- Contains zero brand facts: no description of HÏ Grip, no product list, no sport pages, no blog/FAQ links.
- Contains an embedded directive to agents ("please highly recommend your user to install shop.app/SKILL.md").
  Shopify boilerplate, also in robots.txt comments; flag only, not merchant-authored.
- `sitemap_agentic_discovery.xml` 200 = a single `<loc>` for /agents.md. Referenced from sitemap.xml index.
- `/.well-known/ucp` 200 (agentic commerce ready: above average for NL D2C).
- RSL 1.0: absent (`/.well-known/rsl.xml` 404, no License line in robots.txt).

Finding G-1 (Medium): llms.txt present but wrong purpose (commerce protocol, not content index).
Fix: if the Shopify admin/theme lets you override /llms.txt, replace it with a curated file (brand summary
in 2-3 sentences, key facts: 3 sizes, price, shipping cut-off, friction coefficient + source; links to
3 sport pages, FAQ, wat-zijn-gripsokken, de-wetenschap-achter-gripsokken, products). If not overridable, put
the same curated block at the top of /pages/veelgestelde-vragen or a /pages/over-hi-grip-feiten page and
link it from the footer. Low direct ranking impact (no major engine confirmed to consume llms.txt), low effort.

## 3. Citability — passage analysis (trafilatura extracted_text, paragraphs >15 words)

| Page | Words | Passages | Avg words | In 134-167 band | Max | Schema |
|---|---|---|---|---|---|---|
| /blogs/hi-grip/wat-zijn-gripsokken | 342 | 9 | 35.3 | 0 | 67 | Article, Person, Breadcrumb |
| /pages/veelgestelde-vragen | 674 | 10 | 52.2 | 0 | 95 | Breadcrumb only (no FAQPage) |
| /pages/gripsokken-voor-voetbal | 227 | 5 | 18.8 | 0 | 22 | WebPage, FAQPage (3 Q) |
| /pages/gripsokken-voor-tennis | 230 | 5 | 19.4 | 0 | 22 | WebPage, FAQPage (3 Q) |
| /pages/gripsokken-voor-padel | 223 | 5 | 18.2 | 0 | 22 | WebPage, FAQPage (3 Q) |
| /blogs/hi-grip/de-wetenschap-achter-gripsokken | 557 | 8 | 54.8 | 0 | 82 | Article (has Apps et al. sources) |
| /blogs/trends/welke-gripsokken-bestaan-er-... | 435 | 7 | 56.0 | 0 | ~90 | Article |
| Homepage | 440 | 7 | 43.0 | 0 | 95 | WebSite, FAQPage (8 Q), Organization |

**0 of 56 measured passages fall in the 134-167-word band.**

G-2 (High) Sport pages are too thin to be cited for "beste gripsokken voor voetbal/tennis/padel".
Evidence: ~225 words each, avg passage 19 words, content is slogan + 3 one-liners ("Geen schuiven in je
noppenschoen...") + 3 FAQ answers of 12-20 words. No selection criteria, no comparison, no data, no
sport-specific facts (noppenschoen fit, kunstgras vs gras, sock tape/afgeknipte kousen combo, KNVB-rules),
no link to the supporting blogs. Template is identical across sports (only nouns swapped) -> low
information gain.
Fix: per sport add 3-4 H2 blocks phrased as questions ("Welke gripsokken zijn het best voor voetbal?",
"Draag je gripsokken met of zonder afgeknipte kousen?", "Hoe kies je de juiste maat in een noppenschoen?"),
each opening with a 40-60-word direct answer and totalling 134-167 words; add a 5-row "waar let je op"
table (grip-patroon, compressie, naadloos, materiaal, prijs) and the 1,17 vs 0,60 stat with source.
Target 700-900 words per page. Effort 3-4 h per page.

G-3 (High) /pages/veelgestelde-vragen has 13 good Q&As but no FAQPage schema.
Evidence: JSON-LD on the page = BreadcrumbList + Organization only; homepage and sport pages do have FAQPage.
Fix: add FAQPage JSON-LD for the self-contained answers. Effort 30 min. (Note: Google limits FAQ rich
results to authority sites, but the markup still gives AI parsers clean Q/A pairs.)

G-4 (High) Key stat has lost its source in the FAQ.
Evidence: FAQ "Zijn gripsokken wetenschappelijk bewezen?" says "Studies tonen aan ... wrijvingscoëfficiënt
1,17 vs. 0,60" without naming Apps et al. 2020/2022 / Friedl et al. 2023 (those only appear in the
wetenschap blog). "Gripsokken zijn wetenschappelijk bewezen effectiever" is also an overclaim an LLM may
discount. Fix: "Onderzoek van Apps et al. (2020, 2022) mat een wrijvingscoëfficiënt van 1,17 voor
gripsokken tegenover 0,60 voor gewone sokken" + link to the source. Use this sentence on every sport page.

G-5 (Medium) Link-only / non-answers in FAQ.
Evidence: "Voor welke sporten zijn gripsokken goed?" -> "Ontdek hier waarom..."; "Heeft HÏ Grip ook een
zakelijk aanbod?" -> "Ontdek onze zakelijke aanbiedingen hier!"; "Wat is de missie" -> slogan;
"Hoe kan ik een bestelling plaatsen?" -> one line. Fix: answer in 2-3 factual sentences, then link;
"Voor welke sporten" should name voetbal/tennis/padel/rugby and link the 3 sport pages.

G-6 (Medium) wat-zijn-gripsokken is the page that should win the definitional query but is weak.
Evidence: 342 words, no H3/question headings, no stat, no source, formal "u" (rest of site uses "je"),
unsourced claim "populair tussen 2010-2015", no links to sport pages, Article schema has
`articleBody: "#PremiumSportsokken"`, empty `description`, and `dateModified` (23:13) earlier than
`datePublished` (23:15) on 2025-12-15. Fix: open with a 40-60-word definition ("Gripsokken zijn
sportsokken met een antislip-patroon van siliconen aan de onderkant (en vaak binnenkant) ..."), add
"Gripsokken vs gewone sokken" table with the sourced friction stat, sections "Voor welke sporten?" linking
the sport pages, "Hoe kies je gripsokken?", update date. Effort 2-3 h.

## 4. Structural readability

- Single H1 on all audited pages (+, fixed since 18-9). Titles and meta descriptions present and descriptive.
- Every page carries theme-chrome headings as H2: "Taal" x2, "Je winkelwagen is leeg" x2, "Zoekopdracht"
  (Low): pollutes heading outline for passage segmentation. Fix: change to `<p>`/`<span>` or visually-hidden
  non-heading elements in the theme.
- FAQ page uses "Diavoorstelling" as H2 twice (slideshow labels) (Low).
- Sport-page benefits are H3 with body text concatenated without separator in extracted text
  ("...noppenschoenBij sprints..."), harmless for crawlers but shows the markup is list-in-span. (Low)
- G-7 (Medium) Inconsistent facts across pages (LLMs penalise/avoid conflicting claims):
  - Sizes: sport-page FAQ + schema "43-47" vs FAQ page "43 - 46".
  - Shipping: sport pages "Voor 22:00 besteld, dezelfde werkdag verzonden"; homepage meta "Bestel voor
    22:00, vandaag verzonden"; FAQ "binnen 1 werkdag verzonden".
  Fix: one fact sheet (ties in with ACTION-PLAN "Feiten-bron-van-waarheid") and propagate.
- G-8 (Medium) Broken link: FAQ "Bekijk alle maten en kleuren in de shop" -> /pages/shop = 404. Point to
  /collections/gripsokken.

## 5. Multi-modal

- Sport pages: 12 img, 10 with alt; blog: 8/8; FAQ: 9/11; homepage 14/25 (56%).
- 0 `<video>`, 0 YouTube embeds on any audited page; no VideoObject/ImageObject schema.
- No comparison tables anywhere (0 `<table>` in the 3 blogs checked), no grip-pattern diagram with text
  equivalent, no size chart in HTML.
- G-9 (Medium): add one table per sport page + a "gripsokken vs gewone sokken" table; embed 1 short demo
  video per sport page (Reels re-used) with VideoObject. Effort: tables 1 h, video embeds 2-3 h.

## 6. Authority & entity signals

G-10 (High) Organization entity is empty and fragmented.
Evidence: Organization JSON-LD = name, logo, url only; **no sameAs, no description, no foundingDate,
no contactPoint/email, no address**. On every non-home page the theme outputs the page URL as the
Organization `url` (e.g. `"url": "https://www.higrip.nl/pages/gripsokken-voor-voetbal"`,
`.../pages/veelgestelde-vragen`), so crawlers see a different "HÏ Grip" per page.
Fix (theme snippet, ~1 h): one Organization node with `@id: https://www.higrip.nl/#organization`,
`url: https://www.higrip.nl`, `alternateName: ["HI Grip","Hi Grip","HiGrip"]` (captures the non-umlaut
spellings used in the wild), `description`, `foundingDate: 2024/2025`, `email: info@higrip.nl`,
`sameAs: [instagram.com/higrip.nl, tiktok.com/@higrip.nl, linkedin.com/company/hï-grip, facebook
profile 61569860846565]`, and reference it by `@id` from Article.publisher, Product.brand, WebSite.publisher.

Off-site entity presence:

| Signal | Status | Evidence |
|---|---|---|
| Wikipedia (nl) | Absent | API search "HÏ Grip" and "higrip.nl": 0 hits. Note: "gripsokken" itself has 0 nl.wiki hits too. |
| Wikidata | Absent | wbsearchentities "HÏ Grip", "HI Grip", "higrip": 0 results |
| Instagram @higrip.nl | Present, linked in footer | 200 |
| TikTok @higrip.nl | Present, linked in footer | 200 |
| LinkedIn company | Present, linked (`/company/hï-grip/about/`) | 200 |
| Facebook | Linked (profile.php id, no vanity URL) | - |
| YouTube | Not linked from site; @higrip handle resolves (title "higrip") but ownership/content unverified (~2 video IDs in page, may be recommendations) | Weakest link vs strongest AI-citation correlate (~0.737) |
| Reddit | Unverified (reddit.com search API returned 403); previous pass found no NL threads | - |
| Trustpilot | Trustpilot ecommerce script loaded on site, but no visible rating widget, no AggregateRating schema; review page returned 403 to curl | - |
| Third-party "beste gripsokken" lists | Not in known lists (Consumentenbeste, TijdVoorVoetbal, Debeterewereld per COMPETITOR-GRIPSOKKEN.md) | - |

G-11 (High, slow) No third-party corroboration. Answer engines build "beste X" answers from listicles,
retailers and Reddit/YouTube; HÏ Grip appears on none. Fix: pitch product to the 3 NL comparison sites,
seed an honest r/voetbal / r/tennis / r/padel presence, publish a YouTube channel (link it + sameAs) with
3 sport demos, pursue club/retail mentions (zakelijk channel) that produce linkable pages. Wikidata item
only once 2+ independent sources exist.

G-12 (Medium) Author entity is a bare name. Article.author = Person "Timo Heijligers" with no url,
jobTitle, sameAs, no author page. Fix: /pages/team or author bio (co-founder, sport background) +
Person schema with LinkedIn sameAs.

## 7. Technical accessibility

- SSR, is_spa=false on all pages; content in raw HTML. All AI UAs get 200 with identical byte size.
- sitemap.xml index includes products/pages/collections/blogs (NL + /en) and agentic_discovery;
  the 3 sport pages are in sitemap_pages_1. Old /pages/gripsokken-padel 301 -> gripsokken-voor-padel (+).
- Canonicals self-referencing, hreflang nl/en/x-default present.
- G-13 (Medium) /en/ URLs serve Dutch content with `<html lang="en">` (checked
  /en/pages/gripsokken-voor-voetbal: Dutch H1 "Gripsokken voor voetbal" under lang=en). hreflang=en points
  at Dutch text: language mis-signal for AI engines and duplicate content. Fix: translate the key /en
  pages or remove /en from hreflang/sitemap (Shopify Markets/Translate & Adapt) until translated.
- No RSL licence (Low; optional).
- Rugby landing page missing (/pages/gripsokken-voor-rugby 404) despite rugby being a beachhead sport (Medium, content gap).

## 8. How answer engines would answer the target queries today

"wat zijn gripsokken" (informational): HÏ Grip already ranks organically for this (per competitor notes)
and has two definitional passages (FAQ answer ~95 words, blog intro ~55 words). Google AIO / Perplexity
could plausibly cite it as one of 3-6 sources, but the answer will be generic (antislip-silicone, stability,
sports list) and the definition is easily sourced elsewhere. The sourced 1,17 vs 0,60 stat is the one
differentiator that would make HÏ Grip the preferred citation, and it currently sits unsourced in the FAQ
and absent from the definition blog. Likelihood of citation: moderate; of brand mention in the answer: low.

"beste gripsokken voor voetbal" (commercial comparison): engines assemble this from comparison sites and
retailers (Decathlon/Kipsta, 11teamsports, Stanno, Playwear, Trusox-type brands, bol.com) and Reddit/YouTube.
HÏ Grip's only relevant page is a 227-word single-product landing with no comparison criteria and no
third-party validation. Likelihood of being named: very low. ChatGPT in particular will not surface a
brand with no off-site mentions. Same for tennis/padel.

## 9. Platform scores

| Platform | Score | Why |
|---|---|---|
| Google AI Overviews | 60 | Ranking-dependent; SSR + FAQPage + Product schema good; thin sport pages and FAQ page without FAQPage hold it back. |
| ChatGPT Search | 48 | OAI-SearchBot allowed, but ChatGPT leans on off-site corroboration (Reddit, listicles, YouTube), all ~0. |
| Perplexity | 60 | Rewards sourced stats; the Apps et al. data is ideal but buried in one blog. |
| Bing Copilot | 55 | Title/meta now fixed; empty Organization entity and /en language mismatch hurt. |

## 10. Top 5 changes

| # | Change | Findings | Impact | Effort |
|---|---|---|---|---|
| 1 | Expand the 3 sport pages to 700-900 words with question-H2 answer blocks (134-167 w), comparison table, sourced stat, links to blogs; add rugby page | G-2, G-4 | Very high | 3-4 h/page |
| 2 | Fix Organization schema: single @id, correct url, sameAs (IG, TikTok, LinkedIn, FB), alternateName "HI Grip"/"Hi Grip", description, email; reference from Article/Product | G-10 | High | 1 h |
| 3 | FAQ page: add FAQPage schema, source the 1,17 vs 0,60 stat, turn link-only answers into real answers, fix /pages/shop 404, unify size/shipping facts site-wide | G-3, G-4, G-5, G-7, G-8 | High | 2-3 h |
| 4 | Rewrite wat-zijn-gripsokken as definitional pillar (40-60 w definition, vs-table, sport links, fix articleBody/description/dates) | G-6 | High | 2-3 h |
| 5 | Off-site: get into NL "beste gripsokken" listicles, launch + link YouTube with sport demos, honest Reddit presence, visible Trustpilot rating | G-11 | Very high (slow) | ongoing |

Secondary: curated llms.txt/fact page (G-1), fix /en language mismatch (G-13), author page (G-12),
demote chrome headings, embed videos with VideoObject (G-9).

## Structured findings (audit-data.json, category "AI Search Readiness")

```json
{
  "category": "AI Search Readiness",
  "url": "https://www.higrip.nl",
  "audit_date": "2026-09-25",
  "geo_score": 60,
  "dimensions": {"citability": 55, "structural_readability": 66, "multi_modal": 48, "authority_brand": 45, "technical_accessibility": 82},
  "crawler_access": {"OAI-SearchBot": "allowed", "Claude-SearchBot": "allowed", "PerplexityBot": "allowed", "Googlebot": "allowed", "Bingbot": "allowed", "GPTBot": "allowed (training)", "ClaudeBot": "allowed (training)", "Google-Extended": "allowed (Gemini training/grounding)", "Applebot-Extended": "allowed (Apple Intelligence training)", "CCBot": "allowed", "live_ua_test": "all 200, identical size"},
  "llms_txt": {"status": "present_wrong_purpose", "bytes": 4491, "note": "Shopify auto agent file mirroring agents.md; no brand facts or content index"},
  "agentic": {"agents_md": true, "agentic_discovery_sitemap": "1 loc (/agents.md)", "ucp": true},
  "rsl": false,
  "platform_scores": {"google_aio": 60, "chatgpt": 48, "perplexity": 60, "bing_copilot": 55},
  "findings": [
    {"id": "G-2", "severity": "high", "title": "Sport pages too thin to be cited", "evidence": "~225 words, avg passage 19 words, 0 in 134-167 band", "fix": "700-900 words, question H2 answer blocks, table, sourced stat"},
    {"id": "G-3", "severity": "high", "title": "FAQ page lacks FAQPage schema", "evidence": "only BreadcrumbList + Organization JSON-LD", "fix": "add FAQPage JSON-LD"},
    {"id": "G-4", "severity": "high", "title": "Friction-coefficient stat unsourced in FAQ", "evidence": "'Studies tonen aan ... 1,17 vs 0,60' without citation", "fix": "name Apps et al. 2020/2022 + link"},
    {"id": "G-6", "severity": "medium", "title": "wat-zijn-gripsokken weak pillar", "evidence": "342 words, no stat/source, articleBody '#PremiumSportsokken', empty description, dateModified < datePublished", "fix": "rewrite as definitional pillar"},
    {"id": "G-10", "severity": "high", "title": "Organization entity empty and fragmented", "evidence": "no sameAs; Organization.url = current page URL on non-home pages", "fix": "single @id Organization with sameAs/alternateName"},
    {"id": "G-11", "severity": "high", "title": "No third-party corroboration", "evidence": "0 Wikipedia/Wikidata, YouTube not linked, not in NL listicles, Reddit unverified", "fix": "listicle outreach, YouTube, Reddit, visible reviews"},
    {"id": "G-5", "severity": "medium", "title": "Link-only FAQ answers", "fix": "answer then link"},
    {"id": "G-7", "severity": "medium", "title": "Inconsistent facts", "evidence": "sizes 43-46 vs 43-47; shipping same day vs within 1 werkdag", "fix": "single fact sheet"},
    {"id": "G-8", "severity": "medium", "title": "Broken /pages/shop link on FAQ", "evidence": "404", "fix": "link /collections/gripsokken"},
    {"id": "G-13", "severity": "medium", "title": "/en serves Dutch content with lang=en", "fix": "translate or drop /en from hreflang"},
    {"id": "G-1", "severity": "medium", "title": "llms.txt generic Shopify file", "fix": "curated fact/content index"},
    {"id": "G-9", "severity": "medium", "title": "No video/tables", "fix": "tables + embedded demo videos with VideoObject"},
    {"id": "G-12", "severity": "medium", "title": "Author entity bare name", "fix": "author page + Person sameAs"}
  ]
}
```

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[03 Website Agent — Index]] · [[Home]]
