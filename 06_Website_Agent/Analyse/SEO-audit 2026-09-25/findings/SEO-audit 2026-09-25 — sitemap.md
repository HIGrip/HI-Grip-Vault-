---
type: kennis
gebied: website-agent
bijgewerkt: 2026-10-01
---

# Sitemap & Site Architecture Audit — higrip.nl
Date: 2026-09-25

## 1. Sitemap Structure & XML Validity

| Check | Result | Severity |
|---|---|---|
| Sitemap index reachable (`/sitemap.xml`) | PASS — valid `<sitemapindex>`, well-formed XML | — |
| Child sitemaps well-formed | PASS — all 9 listed sitemaps (4 NL + 4 EN + 1 agentic-discovery) parsed cleanly, no XML errors | — |
| Per-file URL/size limits | PASS — largest child sitemap (`sitemap_blogs_1.xml`) has 25 URLs; total flattened URL count is 109. Far below the 50,000 URL / 50 MB cap. | — |
| `news:` sitemap present | N/A — none present | — |
| Non-standard sitemap: `sitemap_agentic_discovery.xml` | INFO — lists only `https://www.higrip.nl/agents.md` with a `changefreq` tag. Not a standard Google/Bing sitemap type (no `robots.txt`-registered spec for "agentic discovery"); harmless but provides no SEO value and duplicates what `agents.md` + `robots.txt` should already declare. Low priority — verify it isn't silently consuming crawl budget from a bot that treats every `<sitemapindex>` entry as equally important. | Info |

## 2. Deprecated Tags (`priority` / `changefreq`)

- **Finding:** Every `<url>` entry across all NL and EN sitemaps uses `<changefreq>` (daily/weekly). No `<priority>` tags found. Google has explicitly ignored both since 2005 (`priority`) and confirmed `changefreq` is ignored too (per Google's own sitemap docs / John Mueller statements). Bing gives `changefreq` minimal weight at best.
- **Impact:** No penalty, but it's dead weight — increases file size marginally and can mislead whoever maintains the theme into thinking crawl frequency is being controlled here (it isn't; this is Shopify's native sitemap generator, not editable).
- **Recommendation:** No action needed since Shopify generates this automatically and merchants cannot edit sitemap.xml directly. Documented for awareness only.
- **Severity:** Info

## 3. `lastmod` Accuracy

| Observation | Detail | Severity |
|---|---|---|
| Product pages | All 3 products share identical `lastmod` = `2026-09-25T08:24:10+02:00` (today, same second-level batch) — this is a real inventory/price sync timestamp from Shopify, not fabricated, so acceptable but worth noting all 3 update in lockstep (likely a shared metafield or app touching all products). | Low |
| Sport pages (`gripsokken-voor-tennis/padel/voetbal`) | All 3 share `lastmod = 2026-09-21T12:22-12:23` (within 26 seconds of each other) — confirms these pages were just built as a batch on 2026-09-21, consistent with the "sport-focused IA" project note. Legitimate, not fake. | — |
| Policy/about pages | Spread across real historical dates (2025-12-03 through 2026-03-13) — legitimate, reflects actual edits, not boilerplate-stamped. | — |
| `blogs/intern` | `lastmod = 2026-02-18` — stale relative to other blog content (rest of blog stamped 2026-08-21), but that's expected since it's an internal test post, not a real article (see §5). | — |
| Collections | `collections/gripsokken` lastmod `2026-09-23` (recent, real product/collection edit); `collections/frontpage` lastmod `2026-09-04`. Both plausible. | — |

No evidence of blanket/fake `lastmod` stamping — dates vary realistically and W3C-datetime format (ISO 8601 with timezone offset) is valid throughout. **PASS.**

## 4. HTTP Status / Indexability of Sitemap URLs

Spot-checked all higher-risk URLs (policy pages, collections, `pages/collection`, `blogs/intern`, sport pages, EN variants, `agents.md`):

- **All returned 200 OK**, no redirects, no 404s found in this sample.
- **All spot-checked pages self-canonicalize** (canonical tag matches the URL requested) — no canonical-consolidation issue found among sitemap URLs.
- **No `noindex` meta robots tags found** on any sampled page, including `blogs/intern` and `pages/collection` — meaning genuinely low-value pages are fully indexable.
- `hreflang` is implemented correctly on the NL/EN pairs I checked (`x-default`→NL, `nl`→NL, `en`→`/en/...`), which is good technical execution.

**Caveat:** this was a sample of ~13 of 109 URLs (all judged highest-risk); a full 100% crawl of all 109 was not re-verified for status code in this pass, but the pattern (clean, real Shopify-served pages) makes further 404s unlikely.

## 5. Low-Value / Should-Not-Be-Indexed URLs in Sitemap

| URL | Issue | Evidence | Severity |
|---|---|---|---|
| `https://www.higrip.nl/blogs/intern` (+ NL/EN dupes) | Title tag is literally **"INTERN – HÏ Grip"**, H1 is "INTERN". This is an internal/test blog channel, not customer content, yet it is live, 200, self-canonical, no noindex, and listed in the sitemap (`lastmod 2026-02-18`). It is actively being submitted to Google as indexable content. | Confirmed via direct fetch: `<h1>INTERN` | **High** |
| `https://www.higrip.nl/pages/collection` | Generic "HÏ Grip \| Shop gripsokken" page with `<h1>Shop`, functionally overlapping with `/collections/gripsokken` and `/collections/frontpage`. Three separate URLs compete for the same "shop all socks" intent with no clear content differentiation. | Confirmed via canonical + title diffs | Medium |
| `https://www.higrip.nl/collections/frontpage` | Shopify's default homepage-as-collection artifact (title "Homepage – HÏ Grip"). Commonly a doorway/duplicate against `/` itself in Shopify stores; only useful if intentionally used as the homepage-embedded product grid. Confirm it isn't cannibalizing `/` or `/collections/gripsokken` in Search Console. | Sitemap entry + fetch | Medium |
| `/en/*` duplicate tree (48 URLs: all products, pages, collections, blogs mirrored under `/en/`) | **Mixed-language duplicate content.** Spot check of `/en/pages/gripsokken-voor-tennis`: UI chrome is English ("THE CHOICE OF 1000+ ATHLETES", "ORDERED BEFORE 10 PM? SHIPPED TODAY") but the actual page title (`Gripsokken voor tennis \| HÏ Grip`) and hero/body copy (`"Meer grip in je schoen. Minder wegglijden, meer controle."`) remain **Dutch**. The page self-canonicalizes to its own `/en/` URL (not to the NL original) and `hreflang="en"` points to it — telling Google "this is the English version" when it is not actually translated. This is a duplicate/thin-translation problem across the entire `/en/` sitemap branch (48 of 109 URLs — 44% of the whole sitemap). | Fetched `/en/pages/gripsokken-voor-tennis`, confirmed Dutch body copy under English theme strings | **High** |
| `/pages/terugbetalingsbeleid`, `/pages/retourbeleid`, `/pages/verzendbeleid`, `/pages/privacybeleid` (+ EN dupes) | Legal/policy boilerplate pages included in sitemap. Not harmful, but zero search-demand value and add to the duplicate-content surface once doubled by `/en/`. Standard practice is to leave them out of the sitemap or accept as low-priority noise — not a violation, just worth flagging as sitemap bloat contributing to the `/en/` duplication problem above. | Present in `sitemap_pages_1.xml` (NL) and `en/sitemap_pages_1.xml` | Low |
| `sitemap_agentic_discovery.xml` → `agents.md` | Fine on its own, but note it sits in the sitemap index as a first-class equal to product/collection sitemaps — not itself a problem, just unusual. | — | Info |

**Net effect:** roughly half the sitemap (49 of 109 URLs, the entire `/en/` branch) is submitting duplicate-content pages with inconsistent language signals to Google. This is the single largest architecture issue found.

## 6. Missing Pages vs. Strategic Sport Focus

Per the confirmed beachhead strategy (tennis, rugby, voetbal, padel — HÏ Grip project notes, 2026-09-16/21):

| Sport | Dedicated landing page? | Dedicated collection? |
|---|---|---|
| Tennis | Yes — `/pages/gripsokken-voor-tennis` (built 2026-09-21) | No |
| Padel | Yes — `/pages/gripsokken-voor-padel` (built 2026-09-21) | No |
| Voetbal | Yes — `/pages/gripsokken-voor-voetbal` (built 2026-09-21) | No |
| **Rugby** | **Missing** — no `/pages/gripsokken-voor-rugby` anywhere in the sitemap or URL list | No |
| Pilates | Yes — `/pages/pilates` (older, pre-dates the sport-page template judging by URL naming: no `gripsokken-voor-` prefix, inconsistent naming vs. the 3 new sport pages) | No |

**Findings:**
- **Missing rugby landing page** — explicitly called out as one of the 4 beachhead sports, but absent from sitemap entirely. Given tennis/padel/voetbal were just built in a batch on 2026-09-21, rugby appears to have been dropped or is still pending. **High priority gap** relative to stated strategy.
- **No sport-specific collections.** All 3 sport landing pages presumably funnel to the same single product line (`/collections/gripsokken`, 1 core product in 2 colorways) rather than sport-filtered collections. With only 3 SKUs total this is currently unavoidable, but as SKU count grows this will need `/collections/tennis-sokken`, `/collections/rugby-sokken`, etc., or filtered collection views — flagging now so URL structure is planned ahead of product expansion.
- **Naming inconsistency:** `/pages/pilates`, `/pages/retail`, `/pages/clubwear` (no "gripsokken-voor-" prefix, no keyword-rich slug) vs. `/pages/gripsokken-voor-tennis` (keyword-rich). This is a URL taxonomy inconsistency — the newer pages follow better SEO practice (keyword in slug); the older ones don't and should be reconsidered for a rename+redirect if they're meant to be discovery/landing pages rather than B2B/info pages.

## 7. Quality Gate Check (Location/Programmatic Page Thresholds)

- Total sport-style landing pages: 3 (tennis, padel, voetbal) + pilates/clubwear/retail as adjacent-but-not-sport pages = well under the 30-page WARNING threshold and far under the 50-page HARD STOP.
- **No quality gate triggered.** Each sport page appears hand-built (distinct `lastmod` batch, distinct hero copy per spot-check) rather than templated/programmatic — good practice at this scale. Re-check this gate if/when rugby + additional sports (hockey, basketbal, etc.) push the count toward 10+ pages; at that point verify each page still carries genuinely unique content (not just sport-name find/replace) before scaling further.

## 8. Proposed Ideal IA / URL Structure (Sport-Focused Grip-Sock Store)

Given the beachhead strategy (tennis, rugby, voetbal, padel) and current flat `/pages/` structure:

```
/                                   → homepage
/collections/gripsokken             → all products (keep as master collection)
/collections/gripsokken-tennis      → tennis-tagged products (once >1 SKU per sport, or as a filtered/curated collection now)
/collections/gripsokken-rugby       → rugby-tagged products
/collections/gripsokken-voetbal     → voetbal-tagged products
/collections/gripsokken-padel       → padel-tagged products
/pages/gripsokken-voor-tennis       → tennis landing/education page (existing — keep)
/pages/gripsokken-voor-rugby        → NEW — close the gap identified in §6
/pages/gripsokken-voor-voetbal      → existing — keep
/pages/gripsokken-voor-padel        → existing — keep
/products/performance-gripsokken-2-0-zwart / -wit → keep as-is (canonical product URLs, sport-agnostic since 1 SKU serves all sports)
/blogs/hi-grip/*                    → evergreen brand/product education (keep, well-structured)
/blogs/trends/*                     → sport/lifestyle content (keep; strong internal-linking opportunity into the 4 sport pages — verify each trend article that mentions a sport links to its `/pages/gripsokken-voor-*` page)
```

**Structural recommendations:**
1. **Build the missing `/pages/gripsokken-voor-rugby`** page to match the tennis/padel/voetbal template — completes the beachhead set.
2. **Resolve the 3-way "shop all" overlap**: pick one canonical "shop" URL (recommend `/collections/gripsokken`) and either 301-redirect `/pages/collection` into it or repurpose `/pages/collection` for a distinct comparison/buying-guide purpose with unique content. `/collections/frontpage` should generally not be a separate indexable/linked destination from the homepage — check internal links pointing to it.
3. **Remove `blogs/intern` from public indexation**: either delete/unpublish it, or at minimum add `noindex` and it will drop out of the sitemap automatically (Shopify excludes noindexed/unpublished content from sitemap.xml). This is the single fastest, lowest-risk fix available.
4. **Fix or drop the `/en/` tree**: since HÏ Grip is a Dutch brand targeting Dutch sporters (per brand core), either (a) fully translate the `/en/` pages so `hreflang="en"` is honest and the pages provide real incremental value, or (b) disable the Shopify Markets/language `/en/` publication entirely if there's no active English-market strategy, removing 48 duplicate-content URLs from the sitemap. Given the brand is NL-first with no stated international expansion in project notes, option (b) is the pragmatic near-term fix.
5. **Rationalize the older non-keyword pages** (`/pages/pilates`, `/pages/clubwear`, `/pages/retail`): confirm whether `pilates` should join the sport-page family (`/pages/gripsokken-voor-pilates`) for consistency, or is intentionally a different content type (it currently sits in the `pages/` sitemap with `lastmod 2026-03-13`, older/different style than the September sport-page batch).
6. **Add sport-tagged collections** as SKU count grows so tennis/rugby/voetbal/padel landing pages can link to a filtered product set rather than the single generic collection — currently forgivable with only 3 SKUs, but flag before scaling.

## Summary

- **XML validity:** Pass — all sitemaps well-formed, no size/URL-count violations.
- **Deprecated tags:** `changefreq` used everywhere (no `priority`) — informational only, Shopify-generated, ignored by Google, no action possible/needed.
- **lastmod:** Accurate and varied — no fake blanket-stamping detected.
- **Status codes / indexability:** All sampled sitemap URLs return 200, self-canonicalize correctly, no noindex leaks — clean on that front.
- **Biggest issue (High):** The entire `/en/` sitemap branch (48-49 URLs, ~44% of the sitemap) serves English UI chrome wrapped around untranslated Dutch body copy, self-canonicalized and hreflang-tagged as genuine English pages — a structural duplicate-content problem, not a one-off.
- **Second issue (High):** `blogs/intern` — an internal/test blog post titled "INTERN" — is live, indexable, and listed in the sitemap.
- **Missing page (High, strategic):** No rugby landing page (`/pages/gripsokken-voor-rugby`) despite rugby being one of the 4 confirmed beachhead sports; tennis/padel/voetbal were built together on 2026-09-21 but rugby was not.
- **Medium:** Three overlapping "shop all" URLs (`/pages/collection`, `/collections/frontpage`, `/collections/gripsokken`) with no clear differentiation.
- **No quality-gate violations** — sport page count (3-4) is far below the 30-page warning threshold, and pages appear hand-built rather than templated/thin.

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[03 Website Agent — Index]] · [[Home]]
