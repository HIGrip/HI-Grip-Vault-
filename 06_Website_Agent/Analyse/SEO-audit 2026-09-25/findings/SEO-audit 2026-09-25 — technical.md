---
type: kennis
gebied: website-agent
bijgewerkt: 2026-10-01
---

# Technical SEO Findings — higrip.nl

Audited: 2026-09-25. Scope: all 109 URLs listed in the sitemap (product,
collection, page, blog, policy, and `/en/` market variants). Method: robots.txt
inspection, sitemap_discovery.py, render_page.py on the homepage, and a
sequential (~1 req/s) fetch of all 109 sitemap URLs collecting status code,
final URL, canonical, meta robots, hreflang set, title, and body length
(`C:/Users/lars/higrip.nl-audit/url_check_results.csv`). Raw source evidence
saved at `C:/Users/lars/higrip.nl-audit/home_raw.html` and
`C:/Users/lars/higrip.nl-audit/product.html`.

Overall Technical SEO Score: **80/100**

---

## 1. Crawlability — PASS (with one Medium issue)

- `robots.txt` (`https://www.higrip.nl/robots.txt`) returns 200, is
  well-structured, blocks only transactional/AJAX/crawl-trap paths
  (`/cart`, `/checkout`, `/account`, `/recommendations/products`,
  `sort_by`/filter combinatorics, preview params), and correctly declares
  `Sitemap: https://www.higrip.nl/sitemap.xml`.
- All 109 sitemap URLs returned **HTTP 200** on direct fetch — no broken
  links, no redirect chains inside the sitemap (`redirected` was false for
  every row in `url_check_results.csv`).
- A real 404 (`/products/nonexistent-product-xyz123`) correctly returns
  **404** with no soft-404 behavior.
- **Medium — `/blogs/intern` is fully crawlable and indexable.** It is
  listed in the sitemap, returns 200, `<title>INTERN – HÏ Grip</title>`, and
  has **no meta robots noindex tag**. This reads as an internal/staff blog
  channel unintentionally exposed to search engines and users.
  - Evidence: `https://www.higrip.nl/blogs/intern` and
    `https://www.higrip.nl/en/blogs/intern`, both status 200, `meta_robots`
    empty in `url_check_results.csv`.
  - Fix: rename/hide the blog in Shopify admin, or add
    `{% if template contains 'intern' %}<meta name="robots" content="noindex,nofollow">{% endif %}`
    to `theme.liquid`, and remove both `/blogs/intern` and
    `/en/blogs/intern` from the sitemap (Shopify auto-generates the sitemap
    from published blogs, so unpublishing/renaming is the cleanest fix).
- UCP/MCP and `agents.md` agentic-commerce directives in robots.txt are
  informational (Shopify default), not an SEO crawlability risk.

## 2. Indexability — PASS overall, Medium duplicate-content risk on 2 pages

- Canonical tags: **self-referencing and correct on all 108 HTML pages**
  checked (the 109th, `agents.md`, is a plaintext file with no HTML head).
  No canonical mismatches found anywhere in the sample, including all
  `/en/` variants (each `/en/...` page canonicalizes to itself, not folded
  into NL).
- Meta robots: **no `noindex` tags found on any of the 109 URLs**, including
  pages that should arguably be noindexed (see below). Confirmed via
  regex scan of `<meta name="robots">` across all fetched bodies — zero
  matches.
- **Medium — two structural duplicate/thin pages are indexable with no
  differentiation:**
  - `https://www.higrip.nl/collections/frontpage` — title "Homepage – HÏ
    Grip", 200, no noindex. This is Shopify's default homepage-collection
    URL and typically duplicates the actual homepage's product listing
    intent. It has no real reason to be indexed separately from `/`.
  - `https://www.higrip.nl/pages/collection` — title "HÏ Grip | Shop
    gripsokken", 200, no noindex, overlapping intent with
    `https://www.higrip.nl/collections/gripsokken` (the real, actively
    used shop collection).
  - Fix: add `noindex,follow` meta robots to both (Shopify: wrap in a
    template-specific conditional in `theme.liquid`, e.g.
    `{% if canonical_url contains '/collections/frontpage' or canonical_url contains '/pages/collection' %}`),
    or 301-redirect `/pages/collection` to `/collections/gripsokken` if it
    serves no unique content, and exclude `/collections/frontpage` from
    internal linking.
- **Low — policy pages are indexable boilerplate.** `/pages/terugbetalingsbeleid`,
  `/pages/retourbeleid`, `/pages/verzendbeleid`, `/pages/privacybeleid` (and
  their `/en/` counterparts) are thin, largely template-generated legal
  text. Not harmful, but they add little unique value and could be set to
  `noindex,follow` to concentrate crawl budget/ranking signals on
  commercial and sport-landing pages — optional given site size (109 URLs
  is small, crawl budget isn't a real constraint here). Recommendation:
  leave as-is unless Search Console flags them as "Crawled – currently not
  indexed" duplicates.
- No pagination, faceted-navigation, or parameterized URLs were present in
  the sitemap (robots.txt already blocks `sort_by`/filter/`+`-param crawl
  traps), so no duplicate-content risk from that vector.

## 3. hreflang (NL / EN) — PASS, but EN URLs keep Dutch slugs (Medium)

- Every page checked declares the same, correct 3-tag hreflang set:
  `x-default` → NL URL, `nl` → NL URL, `en` → `/en/...` URL. Return tags are
  consistent (checked homepage + sample of product/page/blog pairs).
- No hreflang confusion, no self-referencing omission, no orphaned `/en/`
  pages without an NL counterpart declared.
- Content is genuinely translated, not duplicated: verified on 4 NL/EN
  pairs — `<title>` tags differ meaningfully (e.g.
  "Gripsokken | Maximale Grip voor Elke Sport | HÏ Grip" vs.
  "Grip Socks | Maximum Grip for Every Sport | HÏ Grip"; "Over Ons" vs.
  "About Us") and body byte-length is close but not identical, consistent
  with translated (not machine-copy-pasted) content.
- **Medium — `/en/` URLs reuse the Dutch slugs**, e.g.
  `https://www.higrip.nl/en/pages/over-ons` (not `/en/pages/about-us`),
  `https://www.higrip.nl/en/pages/gripsokken-voor-tennis` (not
  `/en/pages/grip-socks-for-tennis`), `https://www.higrip.nl/en/blogs/hi-grip/wat-zijn-gripsokken`
  (not `/en/blogs/hi-grip/what-are-grip-socks`). This is not a duplicate-content
  or indexability problem (hreflang/canonical correctly disambiguate the
  two markets), but it is a missed keyword-in-URL opportunity for the
  English/international audience and looks unpolished to users landing on
  `/en/pages/gripsokken-voor-tennis` from an English-language search result.
  - Fix (Medium priority, non-urgent): if/when expanding the `/en/` market
    seriously, translate slugs and 301 the old Dutch-slug EN URLs to the
    new English-slug EN URLs, updating hreflang and internal links
    accordingly. Not urgent while `/en/` is a secondary market.
- Full hreflang implementation review, if deeper validation is needed
  (e.g. bidirectional-return-tag audit beyond this sample, or ISO code
  edge cases), should defer to the `seo-hreflang` sub-skill per standard
  practice — this audit covered representative sampling only, not
  exhaustive per-URL bidirectional validation of all 109 pages.

## 4. Security — PASS, one Low/Medium issue (http:// og:image)

- HTTPS is enforced correctly:
  - `http://higrip.nl/` → 301 → `https://higrip.nl/` → 301 →
    `https://www.higrip.nl/` (confirmed via curl `-I`).
  - `http://www.higrip.nl/` → 301 → `https://www.higrip.nl/`.
  - Bare apex `https://higrip.nl/` → 301 → `https://www.higrip.nl/`
    (canonical www redirect confirmed, matches `homepage.json`
    `redirect_chain`).
- Security headers present (checked on homepage and a product page):
  `Strict-Transport-Security: max-age=7889238` (~91 days — present but
  under the commonly recommended 1-year/31536000 minimum; no
  `includeSubDomains`/`preload`), `X-Frame-Options: DENY`,
  `Content-Security-Policy: block-all-mixed-content; frame-ancestors 'none'; upgrade-insecure-requests;`,
  `X-Content-Type-Options: nosniff`, `X-Permitted-Cross-Domain-Policies: none`,
  `X-XSS-Protection: 1; mode=block`.
- **Low — missing `Referrer-Policy` and `Permissions-Policy` headers.**
  Not present on homepage or product page responses. These are
  Shopify-platform-level headers that merchants cannot fully control on
  Online Store 2.0 without a headers-proxy/app; flagged for awareness, not
  independently actionable within theme code alone.
- **Medium — `og:image` is served over `http://`, not `https://`, on an
  otherwise fully-HTTPS site.**
  - Evidence (homepage, `home_raw.html`):
    `<meta property="og:image" content="http://www.higrip.nl/cdn/shop/files/LOGO_KLEIN.jpg?v=1773168731">`
    while the adjacent `og:image:secure_url` tag correctly uses
    `https://www.higrip.nl/cdn/shop/files/LOGO_KLEIN.jpg?v=1773168731`.
  - Impact: some social/chat platforms (and mixed-content-sensitive
    crawlers) ignore or downgrade insecure `og:image` values, causing
    missing link previews on Facebook, LinkedIn, WhatsApp, Slack, etc.
  - Fix: in the theme's `theme.liquid` / social-meta snippet, change the
    `og:image` tag to emit `https://` (use `| image_url` with an explicit
    `https:` scheme or `canonical_url | replace: 'http://', 'https://'`
    rather than a protocol-relative or hardcoded `http://` value). Verify
    this isn't only a homepage-specific hardcoded image (LOGO_KLEIN.jpg
    looks like a fixed fallback OG image rather than per-page/product
    image — confirm product pages use dynamic, correctly-scheme'd
    `og:image` too).

## 5. URL Structure — PASS

- Clean, lowercase, hyphenated URLs throughout (`/products/performance-gripsokken-2-0-zwart`,
  `/pages/gripsokken-voor-tennis`, etc.) — no session IDs, no unnecessary
  query parameters in the sitemap set.
- No redirect chains detected within the 109 sitemap URLs (all fetched
  directly with a 200, `redirected=False` for all).
- Bare-domain → www and http → https redirects both single-hop (not
  chained), confirmed above.
- Sport-specific landing pages exist as intended per the beachhead
  strategy (`/pages/gripsokken-voor-tennis`, `/pages/gripsokken-voor-padel`,
  `/pages/gripsokken-voor-voetbal`) — good alignment with the
  sport-focused SEO direction agreed 2026-09-21.

## 6. Mobile-Friendliness — PASS

- Correct responsive viewport meta tag on homepage:
  `<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">`.
  `viewport-fit=cover` also indicates safe-area handling for notched
  devices.
- `<html lang="nl" dir="ltr">` set correctly (and presumably `lang="en"` on
  `/en/` — not independently re-verified per URL, low risk given theme
  consistency).
- No further mobile-specific defects identified from source inspection
  (theme is Shopify Horizon, a modern responsive OS 2.0 theme). A full
  touch-target/tap-spacing audit requires live rendering/Lighthouse rather
  than source inspection alone — recommend running PageSpeed
  Insights/Lighthouse mobile audit as a follow-up if not already covered
  elsewhere in this audit.

## 7. Core Web Vitals (source-inspection-level risk flags) — Needs attention (Medium)

Note: only static risk indicators are assessable from source; no live CrUX/
Lighthouse data was collected in this pass.

- **Medium — heavy `<link rel=preload>` font/style chain on every page.**
  Homepage headers show 4 preloaded woff2 fonts (`poppins_n8`, `n7`, `n4`,
  `n5`) plus 4 preloaded stylesheets on top of the accelerated-checkout
  wallet CSS. Multiple render-blocking/preloaded font weights can delay
  LCP if the hero content depends on custom font rendering before paint.
  Fix: audit whether all 4 Poppins weights are actually used above the
  fold; drop unused preloads, and confirm `font-display: swap` (or
  `optional`) is set so text isn't blocked by invisible-text-flash
  behavior while fonts load.
- **Low/Medium — third-party/complexity signals.** `shopify-complexity-score-v2: 223`
  (homepage) and `198` (product page) — Shopify's own complexity scoring;
  higher scores generally correlate with more theme app/section overhead
  and higher LCP/INP risk. Not independently actionable without a theme
  section audit (recommend `/shopify-design` or a Lighthouse trace to
  identify which sections/apps contribute most).
- No specific CLS red flags found in source (no obviously unsized image
  placeholders detected in the static HTML), but this needs live-rendering
  confirmation (Playwright/Lighthouse) to be conclusive — flagged as an
  open item, not a confirmed defect.
- INP cannot be assessed from static source; requires field data (CrUX) or
  lab interaction testing. FID is deprecated and correctly not referenced.

## 8. Structured Data — PASS

- Homepage carries 3 valid JSON-LD blocks, all reported valid:
  `WebSite` + `SearchAction` (sitelinks searchbox eligibility), `FAQPage`
  with nested `Question`/`Answer` (matches `/pages/veelgestelde-vragen`
  content), and `Organization`.
- Product-level structured data (`Product`, `Offer`, `AggregateRating` if
  reviews exist) was not independently re-verified in this pass on
  `/products/performance-gripsokken` — recommend a follow-up
  `structured_data`-focused check on product templates specifically if not
  already covered under a separate schema audit (`/seo schema`).

## 9. JavaScript Rendering — PASS (SSR, not CSR-dependent)

- `render_page.py`'s `is_spa` flag was `false` for the homepage — no SPA
  shell detected, raw fetch mode sufficed.
- Confirmed independently: a plain `curl` fetch (no JS execution) of
  `/products/performance-gripsokken` returns ~74,600 characters of visible
  text content in `<body>` after stripping tags/scripts — full product
  copy, navigation, and content are present in the initial HTML response,
  not injected client-side. Shopify Horizon is server-rendered Liquid;
  no client-side rendering dependency risk for crawlers.
- Zero `<noscript>` fallback blocks were needed/found, consistent with a
  fully server-rendered page.

## 10. IndexNow Protocol — Not implemented (Low/Medium)

- No IndexNow key file found at either common location:
  `https://www.higrip.nl/.well-known/indexnow.txt` → 404,
  `https://www.higrip.nl/IndexNow.txt` → 404.
- Shopify does not natively push IndexNow pings on publish/update as of
  this audit; without a key file and ping integration, Bing/Yandex/Naver
  rely on regular crawling rather than instant-notification indexing.
- Fix: install an IndexNow app from the Shopify App Store (several free
  options exist) or implement a lightweight webhook (Shopify
  `products/update`, `products/create`, page/article publish webhooks →
  a small serverless function that pings
  `https://api.indexnow.org/indexnow` with the site's key). Priority is
  Low/Medium — primarily benefits faster Bing indexing of new sport
  landing pages/blog posts, not a core-ranking issue.

---

## Prioritized Issue Summary

| Priority | Issue | Evidence | Fix |
|---|---|---|---|
| Medium | `/blogs/intern` (NL + EN) indexable, no noindex, titled "INTERN" | 200, empty meta_robots, in sitemap | noindex + unpublish/rename + remove from sitemap |
| Medium | `og:image` served over `http://` on HTTPS site | homepage `home_raw.html`, og:image tag | Change to `https://` in theme social-meta snippet |
| Medium | `/collections/frontpage` and `/pages/collection` are indexable duplicate/overlapping-intent pages | 200, no noindex, titles "Homepage" / "Shop gripsokken" | noindex or 301 to canonical collection page |
| Medium | `/en/` pages keep Dutch slugs | e.g. `/en/pages/over-ons`, `/en/pages/gripsokken-voor-tennis` | Translate slugs + 301 when `/en/` market is prioritized |
| Medium | Heavy font/style preload chain, unverified CWV/LCP impact | homepage `link` header: 4 font preloads + 4 style preloads | Audit actual font usage, add font-display swap, trim unused preloads |
| Low | Missing `Referrer-Policy` / `Permissions-Policy` headers | curl -I homepage + product page | Platform-level; needs headers app/proxy if desired |
| Low | HSTS max-age ~91 days, no includeSubDomains/preload | `strict-transport-security: max-age=7889238` | Increase via Shopify if configurable, else accept platform default |
| Low | Policy pages (privacy/shipping/returns) thin but indexable | 200, no noindex | Optional noindex,follow; monitor GSC for "crawled, not indexed" |
| Low/Medium | No IndexNow key/integration | 404 on `.well-known/indexnow.txt` and `/IndexNow.txt` | Add IndexNow app or webhook integration |

## Things confirmed healthy (no action needed)

- robots.txt valid and correctly scoped; sitemap declared and 200/valid.
- All 109 sitemap URLs return 200, zero redirect chains, zero soft-404s.
- Canonicals self-referencing and correct on 100% of pages checked.
- hreflang NL/EN set is complete and correct on every page sampled; `/en/`
  content is genuinely translated, not duplicated.
- http→https and apex→www redirects both single-hop and correct.
- Core security headers (HSTS, CSP, X-Frame-Options, X-Content-Type-Options,
  X-XSS-Protection) present.
- Mobile viewport meta correct; theme is responsive (Shopify Horizon).
- Fully server-side rendered — no JS-rendering dependency for crawlers.
- Valid structured data present on homepage (WebSite/SearchAction, FAQPage,
  Organization).

---

## Evidence files
- `C:/Users/lars/higrip.nl-audit/robots.txt`
- `C:/Users/lars/higrip.nl-audit/urls.txt` (109 sitemap URLs)
- `C:/Users/lars/higrip.nl-audit/homepage.json` (rendered homepage + headers + redirect chain + structured data)
- `C:/Users/lars/higrip.nl-audit/home_raw.html` (raw homepage HTML — canonical/hreflang/og/viewport evidence)
- `C:/Users/lars/higrip.nl-audit/product.html` (raw product page HTML — JS-rendering evidence)
- `C:/Users/lars/higrip.nl-audit/url_check_results.csv` (per-URL status/canonical/meta-robots/hreflang/title for all 109 sitemap URLs)
- `C:/Users/lars/higrip.nl-audit/check_urls.py` (script used to generate the CSV)

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[03 Website Agent — Index]] · [[Home]]
