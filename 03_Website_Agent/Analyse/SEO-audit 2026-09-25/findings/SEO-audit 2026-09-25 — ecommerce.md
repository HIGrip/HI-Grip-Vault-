# E-commerce SEO Audit — higrip.nl

Date: 2026-09-25
Scope: Product pages (performance-gripsokken, performance-gripsokken-2-0-zwart, performance-gripsokken-2-0-wit), collection page (gripsokken), Merchant Center readiness, marketplace/competitor visibility.
Data source: On-page analysis (static + rendered via Playwright) for all product/collection findings. Marketplace/competitor data: DataForSEO Merchant API call required approval (`needs_approval`, endpoint not in cost DB, est. $0.05) — **not auto-approved, so live marketplace data was not fetched**; direct web fetches to bol.com (403 bot-blocked) and Google SERP (returned a non-JS consent/limited shell, no usable data) were also attempted and did not yield reliable data. Marketplace section below is therefore qualitative/limitations-flagged, not live data.

## Scores (on-page only, no marketplace data)

| Category | Score |
|---|---|
| Schema completeness | 40/100 |
| Images | 60/100 |
| Content uniqueness | 35/100 |
| Pricing/Merchant readiness | 30/100 |
| Internal linking | 70/100 |
| **Overall** | **45/100** |

---

## Critical

### 1. Zwart and Wit product pages are near-duplicate content
**Evidence:** `/products/performance-gripsokken-2-0-zwart` and `/products/performance-gripsokken-2-0-wit` have **identical** meta descriptions, word count (1373 words on both), and near-identical body copy — the meta description doesn't even mention the color:
> "Performance Gripsokken 2.0 met siliconen noppen en 15-20 mmHg compressie. Ervaar maximale grip en controle tijdens jouw sport. Gratis verzending vanaf €35. Blijf staan waar anderen uitglijden. Wij leggen de basis, jij presteert. ✓ Antislip sokken..." (verbatim on both URLs)

Product schema `description` field is also verbatim identical between the two (color-agnostic copy).

**Severity:** Critical
**Fix:** Rewrite meta description and at least the opening 2-3 sentences of body copy per color variant (e.g. reference color-specific use cases, styling angle "zwart = subtiel onder sportkleding" vs "wit = fris, zichtbaar"). Google can otherwise fold these into duplicate-content clustering and pick one canonical version to rank, suppressing the other in search. Expected impact: both color pages become independently indexable/rankable instead of competing with each other.

### 2. Old "Performance Gripsokken" (v1) directly cannibalizes the 2.0 line and the collection page
**Evidence:**
- `/products/performance-gripsokken` (v1, sizes 34-39/40-46, 1/3/5-packs, €13.49-€61.95) is fully live, indexable (`meta_robots: null`, no noindex), and has title `"Gripsokken | Maximale Grip voor Elke Sport | HÏ Grip"` — this is a **head keyword title**, nearly identical in intent to the collection page (`"Gripsokken – HÏ Grip"`) and to what a category-level page should own.
- It is still linked from the collection page (`/collections/gripsokken`) alongside the 2.0 zwart/wit products, so all three products (v1, 2.0 zwart, 2.0 wit) compete for the same "gripsokken" query cluster.
- Different size grid (34-39/40-46 vs 35-38/39-42/43-47) and different price (€13.49 vs €14.95) signal this is a genuinely separate, still-sold SKU line — not a leftover redirect stub.

**Severity:** Critical
**Fix:** Decide product architecture: either (a) position v1 as a distinct budget/bundle line with its own differentiated title/meta ("Gripsokken 5-pack voordeelset" angle, since it's the only one with multi-packs) and stop competing on the generic "gripsokken" head term, letting the **collection page** own that term; or (b) if v1 is being phased out in favor of 2.0, add a "Nieuwe versie beschikbaar" cross-link to 2.0 and demote it in nav/collection ordering. Currently three self-competing pages dilute ranking signals for the money keyword "gripsokken".

---

## High

### 3. Product schema missing Merchant Center / rich-result required fields
**Evidence:** Rendered `ProductGroup`/`Offer` JSON-LD on all three product pages contains only `price`, `priceCurrency`, `availability`, `url`, `brand`, `category`. Confirmed **absent** across all pages:
- `gtin`/`gtin13`/`mpn`/`sku` — not present anywhere in HTML or schema
- `aggregateRating` / `review` — not present, despite a visible on-page "4.5 / 5" testimonials rating block (`DIT ZEGGEN ONZE SPORTERS`, static 4.5 rating shown to users but not machine-readable)
- `shippingDetails` (OfferShippingDetails) — absent; the site's actual shipping promise (order before 22:00 = shipped within 1 day, free shipping from €35) is not present anywhere in the on-page copy of the product/collection pages, only as a generic line in one meta description ("Gratis verzending vanaf €35")
- `hasMerchantReturnPolicy` — absent
- `itemCondition` — absent

**Severity:** High
**Fix:**
1. Add `gtin`/`mpn` or at minimum `sku` per variant Offer (required for Shopping ads and increasingly weighted for organic Product rich results).
2. Wire the existing 4.5/5 rating block into `aggregateRating` schema (data already exists on-page, just not marked up — low-effort, immediate rich-snippet eligibility).
3. Add `shippingDetails` with the real cutoff (`cutoffTime`, `businessDays`, `transitTime`) reflecting "vóór 22:00 besteld = binnen 1 dag verzonden" — this is both a schema gap and a missed on-page trust/urgency signal (currently not stated in product copy at all, only "gratis verzending" is).
4. Add `hasMerchantReturnPolicy`.
Expected impact: eligibility for Merchant Center free listings / Shopping ads and Google's Product rich results (price, rating stars, shipping badge in SERP).

### 4. Zero review/rating platform integration despite visible rating claim
**Evidence:** Trustpilot scripts detected in `<head>` (`invitejs.trustpilot.com`, `ecommplugins-scripts.trustpilot.com`) — but these are **post-purchase invite widgets only**, not an on-page TrustBox/review display, and no `aggregateRating`/`Review` schema exists anywhere. Meanwhile a static "4.5 / 5" testimonials block is rendered on product pages without linking to real review counts or schema. No judge.me / Loox / Yotpo / Stamped app detected.
**Severity:** High
**Fix:** Embed a Trustpilot TrustBox (or equivalent reviews widget) that renders actual review count + score on product pages, and emit matching `aggregateRating` schema. This also directly supports the standing to-do ("Trustpilot-koppeling verbeteren") already flagged for this site. Expected impact: star ratings in SERP, higher CTR (typically +10-15% for rich snippet with ratings).

### 5. Generic, non-descriptive image alt text
**Evidence:** On `/products/performance-gripsokken-2-0-zwart`, every product image (voorkant, achterkant, voetbal-actiefoto, tennis-actiefoto, hardlopen close-up) shares the **same alt text**: "Performance Grip Socks 2.0 Zwart HÏ Grip" — no differentiation between a football action shot, a tennis shot, or a close-up product detail.
**Severity:** Medium-High
**Fix:** Write unique, descriptive alt text per image reflecting context (e.g. "HÏ Grip performance gripsokken 2.0 zwart tijdens voetbalactie", "close-up siliconen grippatroon onderkant gripsok zwart"). Supports Google Images/Lens discovery for sport-specific queries (aligns with the beachhead sport-page strategy already in progress for tennis/rugby/voetbal).

---

## Medium

### 6. Collection page meta description doesn't match actual catalog
**Evidence:** `/collections/gripsokken` meta description: *"Ontdek onze collectie witte gripsokken, beschikbaar in de maten 34-39 en 40-46, perfect voor mannen, vrouwen, jonge volwassenen en kinderen..."* — this:
- only mentions "witte" (white) gripsokken, ignoring the zwart variant and the v1 line entirely,
- cites size ranges (34-39/40-46) that only match the old v1 product, not the 2.0 line's actual sizes (35-38/39-42/43-47),
- reads as leftover/generic boilerplate not updated after the 2.0 launch.

**Severity:** Medium
**Fix:** Rewrite collection meta description to accurately reflect current catalog (both colors, correct size ranges, sport use-cases per the beachhead strategy: tennis/rugby/voetbal).

### 7. Duplicate/legacy product handles still linked from the collection page
**Evidence:** Collection page links include `/products/hi-grip-gripsokken-1` and `/products/performance-grip-socks-2-0-wit-1` in addition to the canonical URLs. Both return HTTP 200 with an internal 301 redirect to the correct canonical product (`performance-gripsokken` and `performance-gripsokken-2-0-wit` respectively) — confirmed via header fetch (`status_code: 301`, `canonical` href points to the real URL). No duplicate-content risk since they redirect, but they add an unnecessary redirect hop from an internal link and suggest leftover handles from a prior product duplication/import.
**Severity:** Medium (Low SEO risk, but a link-hygiene issue)
**Fix:** Update the collection page's product links/handles to point directly at the canonical URLs, avoiding the redirect hop and cleaning up orphaned product handles in Shopify admin.

### 8. Old v1 product page title targets the head keyword, product/offer copy is thinner than 2.0
**Evidence:** v1 page title "Gripsokken | Maximale Grip voor Elke Sport | HÏ Grip" (1222 words body) vs 2.0 pages "Performance Gripsokken 2.0 [Kleur] – HÏ Grip" (1373 words). The v1 page's schema description is generic ("Ervaar maximale grip en controle...") while 2.0 pages have richer, more specific compression/material copy (15-20 mmHg, siliconen noppen, Coolmax®).
**Severity:** Medium (tied to Critical finding #2 — same root cause)
**Fix:** Once product architecture decision is made (see #2), align title/meta strategy so only one page targets the bare "gripsokken" term.

---

## Low

### 9. og:image served over http (not https) on secure page
**Evidence:** `og:image` on product pages is `http://www.higrip.nl/cdn/shop/files/...` while `og:image:secure_url` correctly uses `https://`. Most crawlers use secure_url as fallback so impact is minimal, but it's an inconsistency worth cleaning up in the theme's OG output.
**Severity:** Low
**Fix:** Ensure `og:image` itself is emitted as `https://` (theme/liquid template fix).

### 10. Title tags carry a stray line break
**Evidence:** Rendered `<title>` value is literally `"Performance Gripsokken 2.0 Zwart\n – HÏ Grip"` (embedded newline before the en-dash) on both 2.0 product pages. Cosmetically harmless in most SERPs but indicates a template whitespace bug (likely `{{ product.title }}\n{{ shop.name }}` without trimming).
**Severity:** Low
**Fix:** Trim whitespace/newline in the theme's title tag Liquid snippet.

---

## Marketplace / Competitor Visibility (limitation notice)

DataForSEO Merchant API call for bol.com/Amazon.nl/competitor marketplace data required cost approval (`needs_approval`, unknown endpoint in cost DB, est. $0.05/call) and was **not approved within this session** — flagging to the orchestrator: if live marketplace/SERP data on HÏ Grip's presence on bol.com, Amazon.nl, and competitor grip-sock brands (e.g. Trusox, Sockstar, decathlon private label) is wanted, approve the `dataforseo_merchant` endpoint and re-run.

Fallback web fetches were attempted and did not succeed:
- `bol.com` search returned HTTP 403 (bot-blocked, expected for a major marketplace).
- Google SERP raw fetch returned a non-JS consent/limited shell with no extractable ranking data.

**Recommendation:** Given the Merchant Center schema gaps above (#3), HÏ Grip is currently not well-positioned for Google Shopping surfacing regardless of marketplace presence — fixing schema (gtin/shippingDetails/returns) should precede any marketplace expansion analysis, since Shopping eligibility is currently blocked at the schema level, not the marketplace-presence level.

---

## Priority Summary

| # | Finding | Severity |
|---|---|---|
| 1 | Zwart/Wit product pages near-duplicate content | Critical |
| 2 | v1 "Performance Gripsokken" cannibalizes 2.0 + collection page for "gripsokken" | Critical |
| 3 | Missing gtin/mpn/sku, aggregateRating, shippingDetails, return policy in schema | High |
| 4 | No review platform wired into on-page display/schema (Trustpilot invite-only) | High |
| 5 | Generic, identical alt text across all product images | Medium-High |
| 6 | Collection meta description outdated (wrong sizes, only mentions white) | Medium |
| 7 | Legacy product handles linked from collection page (redirect hop) | Medium |
| 8 | v1 title/copy strategy conflicts with 2.0 line | Medium |
| 9 | og:image served over http | Low |
| 10 | Title tag stray line break/whitespace | Low |
| — | Marketplace/competitor data unavailable (DataForSEO approval needed) | Limitation |
