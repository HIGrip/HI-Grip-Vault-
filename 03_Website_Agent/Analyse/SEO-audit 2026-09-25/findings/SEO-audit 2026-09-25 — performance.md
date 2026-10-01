# Core Web Vitals / Performance Audit — higrip.nl

Date: 2026-09-25
Scope: homepage, product page (Performance Gripsokken 2.0 Zwart), collection page
(gripsokken), tennis landing page (gripsokken-voor-tennis) — mobile + desktop.

## Data sources & important caveats

- **Lab data**: Lighthouse 13.5.0, run locally via `npx lighthouse`. Mobile runs use
  the standard Moto G power CPU/network throttling profile
  (`--preset=perf --form-factor=mobile`); desktop runs use `--preset=desktop`
  (no throttling, "good" fiber-like conditions).
- **Field data (CrUX, real Chrome users, 28-day rolling)**: **NOT AVAILABLE in
  this run.** The claude-seo plugin's unauthenticated PSI request hit
  `"PSI rate limit exceeded (240 QPM / 25,000 QPD)"`, and the CrUX API returned
  `"CrUX API requires an API key"` — no `GOOGLE_API_KEY` is configured in this
  environment. **All numbers below are lab data unless explicitly labelled
  "field."** This is a meaningful gap: lab data on a single synthetic run can
  over- or under-state what 75% of real higrip.nl visitors experience.
  Recommended next step: pull the real field numbers from **Google Search
  Console → Core Web Vitals report** (free, no extra API key needed) or
  configure `GOOGLE_API_KEY` for the claude-seo plugin and re-run
  `pagespeed_check.py --crux-only`, and cross-check with **CrUX Vis**
  (cruxvis.withgoogle.com) for higrip.nl.
- Multiple mobile runs carried the Lighthouse runtime warning **"The page
  loaded too slowly to finish within the time limit. Results may be
  incomplete"** — the trace was cut off before the page reached CPU idle. This
  is itself a severity signal (heavy, sustained main-thread work), but it also
  means Lighthouse could not compute Total Blocking Time (TBT) or an overall
  0–100 score for those mobile runs; `maxPotentialFID` (a legacy long-task
  proxy, not a real metric) and the raw main-thread work breakdown are used as
  supporting evidence instead where the true TBT is missing.
- Lighthouse 13's insight-based audits (LCP breakdown, render-blocking, 3rd
  parties, forced reflow, etc.) were used per the current plugin skill
  guidance; the removed legacy audits (first-meaningful-paint, font-size,
  third-party-facades) are not referenced.

## Results summary (lab data)

| Page | Device | LCP | FCP | Speed Index | CLS | TBT | TTFB | Page weight | Requests | LH Perf score |
|---|---|---|---|---|---|---|---|---|---|---|
| Homepage | Mobile | **6.46s POOR** | 1.61s | 8.66s | 0.003 good | n/a* (maxPotentialFID 1004ms) | 53ms | 1.80MB | 275 | n/a (incomplete trace) |
| Homepage | Desktop | 1.68s good | 0.59s | 1.64s | 0.0005 good | 149ms good | 15ms | 3.05MB | 346 | 88 |
| Product (zwart 2.0) | Mobile | **5.53s POOR** | 2.33s | 10.72s | 0.066 good | n/a* (maxPotentialFID 1259ms) | 14ms | 2.08MB | 213 | n/a (incomplete trace) |
| Product (zwart 2.0) | Desktop | 2.49s needs improv. | 2.49s | 4.54s | 0.061 good | 226ms good | 17ms | 1.92MB | 274 | 60 |
| Collection (gripsokken) | Mobile | **5.48s POOR** | 2.01s | 10.39s | 0.003 good | n/a* (maxPotentialFID 1285ms) | 17ms | 1.72MB | 292 | n/a (incomplete trace) |
| Collection (gripsokken) | Desktop | 1.15s good | 0.51s | 2.03s | 0.00003 good | 187ms good | 14ms | 2.14MB | 347 | 88 |
| Tennis landing page | Mobile | **7.77s POOR** | 1.67s | 6.90s | 0.003 good | n/a* (maxPotentialFID 829ms) | 13ms | 2.17MB | 278 | n/a (incomplete trace) |
| Tennis landing page | Desktop | 1.15s good | 0.40s | 0.99s | 0.0003 good | 164ms good | 14ms | 2.33MB | 332 | 94 |

\* TBT audit did not resolve numerically on 4/4 mobile runs because the trace
ran out before CPU idle; treat as "very likely POOR" given the LCP figures and
main-thread evidence below, not as a hard number.

**CLS is good everywhere** (well under 0.1) on both devices — not a priority.
**TTFB is excellent everywhere** (13–53ms) — server response time is not a
bottleneck; the LCP problem is entirely downstream of first byte.

**Mobile LCP fails "good" (≤2.5s) by 2.2×–3.1×, and fails even the "poor"
threshold (>4.0s) on every single page tested.** Desktop is fine to good
(1.15–2.49s). Because Google evaluates the 75th percentile and Search Console
mobile/desktop are scored separately, this pattern would very likely fail the
mobile LCP assessment in the field even allowing for lab/field variance.

## Findings, evidence, severity, fixes

### 1. Mobile LCP is Poor on all 4 pages tested — CRITICAL
**Evidence:** LCP 5.48s–7.77s on mobile vs. 1.15s–2.49s on desktop for the
same pages. LCP breakdown (Lighthouse `lcp-breakdown-insight`), mobile:

| Page | TTFB | Resource load delay | Resource load duration | Element render delay |
|---|---|---|---|---|
| Homepage | 53ms | 2067ms | 4312ms | 25ms |
| Product | 52ms | 1519ms | 2735ms | **1224ms** |
| Collection | 58ms | 2391ms | 1777ms | 601ms |
| Tennis | 55ms | 1963ms | 5045ms | 702ms |

TTFB is a negligible share everywhere. The dominant cost is **resource load
delay + resource load duration** — i.e., the LCP image is discovered late
and/or takes a long time to download under mobile throttling — plus, on the
product and tennis pages, a large **element render delay** (main thread busy
with other work when the image is ready, so it can't paint immediately).

**Severity:** Critical — this is the single biggest Core Web Vitals problem
on the site and affects every template type.

**Fix, prioritized:**
- Preload the actual LCP image (`<link rel=preload as=image>` with matching
  `imagesrcset`/`imagesizes`) on each template's hero/first product image so
  the browser starts the fetch immediately instead of waiting on discovery.
- Serve LCP images (and all product imagery) as **WebP/AVIF** instead of JPG
  — see Finding 3, this alone should cut resource load duration substantially.
- Reduce the amount of main-thread JS competing for the CPU before/around the
  LCP paint (see Finding 2) — this directly reduces "element render delay,"
  which is 1.2s on the product page alone.
- Re-check Shopify's automatic `srcset`/`sizes` output on the product and
  collection pages: several LCP-eligible images are serving intrinsic
  3840×3840/5001×4000 originals with only a `width=` CDN param — confirm the
  `sizes` attribute matches actual rendered width so the browser doesn't
  fetch an oversized variant on mobile.

### 2. Heavy Shopify app-extension JavaScript blocks the main thread — HIGH
**Evidence:** `third-parties-insight` audit, mobile, every page:
- `ecomsend.js` (Ecomsend app/extension "ecomsend-207"): **265KB transfer,
  ~1.39s main-thread time** on the homepage alone; present as a 265KB script
  on every page tested (home, product, collection, tennis).
- `block-cart.js` (Shopify "section-factory-362" extension): ~80KB, 377ms
  main-thread time on homepage; **679.8ms of forced reflow** attributed
  directly to this script on the product page (`forced-reflow-insight`
  audit, `block-cart.js:8:13035`).
- `fd-product-groups-ext.js` ("fd-product-groups-852" extension): 67KB,
  ~297ms main-thread time.
- Combined Shopify-origin scripts: **2.5–3.1s of main-thread time per page**
  on mobile (`third-parties-insight`: Shopify entity 2703ms on homepage,
  3104ms on product page, 2539ms on tennis page).
- `mainthread-work-breakdown` on the product page shows **18.2s of Style &
  Layout work** and 9.9s "Other" during the (throttled, 4×-CPU) trace, with
  **4.3s of unattributed forced-reflow** plus the 679.8ms attributed to
  `block-cart.js` — classic layout-thrashing pattern (JS reads geometry after
  invalidating styles, forcing synchronous reflow repeatedly).
- These scripts also load on pages where they're not obviously needed (e.g.,
  checkout-web assets — `hydrate.js` 206KB, `addresses-is-address-empty.js`
  90KB, `context-browser.js` 71KB — are being fetched on the collection and
  tennis pages, far from checkout).

**Severity:** High — this is the most likely cause of poor INP in the field
(no INP field data available, but 2.5–3.1s of blocking JS plus a confirmed
forced-reflow pattern is a strong poor-INP predictor) and is a direct
contributor to LCP's "element render delay."

**Fix, prioritized:**
1. Audit whether Ecomsend, the cart block-cart extension, and the
   fd-product-groups extension are configured to load on every page or can be
   scoped to only the pages that need them (e.g., Ecomsend's popup likely only
   needs to load once, lazily, not render-blocking).
2. Ask the block-cart.js vendor/theme-extension about the forced-reflow
   pattern (reading `offsetWidth`/`getBoundingClientRect` after a DOM/style
   write) — batching reads before writes (or using `requestAnimationFrame`)
   would remove the 680ms+ of forced reflow.
3. Defer/lazy-load non-critical checkout-web prefetch assets so they don't
   compete with LCP/INP-critical work on collection/landing pages that aren't
   checkout.
4. Re-run with Chrome DevTools Performance panel (matches Lighthouse 13's
   insight-audit model) to pinpoint the "4.3s unattributed" reflow source
   precisely, since Lighthouse could not attribute it to a script.

### 3. Product/hero images are large, unoptimized JPGs — MEDIUM-HIGH
**Evidence:** `image-delivery-insight` flags "Est savings of up to 305 KiB"
per page. Individual image transfer sizes observed in `network-requests`
(mobile, already CDN-resized via Shopify's `width=` param, still JPG format):
- Homepage hero (`padel-hero.jpg`): 163KB
- Product page: `Gripsokken_voetbal...jpg` 173KB, `Hardlopen_gripsokken...jpg`
  156KB, `Tennis_actie_gripsokken.jpg` 152KB, second voetbal variant 127KB
  (4 large JPGs load for one product view — gallery/thumbnails)
- Tennis landing page: `Tennis_gripsokken_wit.jpg` 181KB,
  `Tennis_actie_gripsokken.jpg` 166KB
- All LCP-candidate images use `.jpg`, none use `.webp`/`.avif` in the
  network payload, despite Shopify CDN supporting `format=webp`/`format=avif`
  transform params.
- Homepage hero `padel-hero.jpg` is served with intrinsic 5001×4000 (20MP)
  source and the collection-page LCP image with 3840×3840 intrinsic — far
  larger than any rendered size, relying entirely on the `width=` CDN param
  and `srcset` to right-size, which adds one more thing that must resolve
  correctly on every breakpoint.

**Severity:** Medium-High — meaningfully contributes to LCP resource-load
duration (Finding 1) and to total page weight (1.7–2.3MB per page on mobile).

**Fix:**
- Add `&format=webp` (or `avif`) to the Shopify CDN image URLs used in theme
  liquid/`image_url` filters for hero and product imagery — typically a
  30–50% byte reduction with no visible quality loss for photographic
  content.
- Reduce the number of full-resolution gallery images loaded eagerly on the
  product page; lazy-load thumbnails beyond the first 1–2 with
  `loading="lazy"` (confirm the LCP candidate itself keeps
  `fetchpriority="high"` and eager loading — that part is already correct on
  product/tennis pages).
- Consider capping source image uploads to a sane max (e.g., 2500px longest
  edge) in the Shopify Files library so `width=` transforms aren't
  downsampling from 20MP originals on every request.

### 4. Render-blocking CSS on the homepage — LOW-MEDIUM
**Evidence:** `render-blocking-insight` audit (homepage, mobile) flags 4
render-blocking stylesheets: `hi-sale-price.css`, `base.css`,
`compiled_assets/styles.css`, and Shopify's
`accelerated-checkout-backwards-compat.css`. Transfer sizes reported as 0B
(cached/compressed in this run) so the byte cost is small, but they still
block first paint sequentially before CSSOM is ready.

**Severity:** Low-Medium — FCP is already good (1.6–2.3s) so this isn't the
top priority, but removing it helps LCP's "resource load delay" indirectly by
freeing up the critical path earlier.

**Fix:** Inline critical above-the-fold CSS for the hero section and defer
the rest (`base.css`/`styles.css` split, or `media="print" onload="this.media=
'all'"` pattern) — standard Shopify Horizon/Dawn-family optimization. Confirm
`accelerated-checkout-backwards-compat.css` is actually needed on this theme
version; Shopify has been deprecating that compat layer.

### 5. Font loading — not a current issue
**Evidence:** `font-display-insight` audit scored 1.0/clean on all pages —
Google Fonts (Poppins, self-hosted via `fonts.googleapis.com` /
`fonts.gstatic.com`) already uses `display=swap`. No action needed; noted
only because font FOIT/FOUT is a common CLS cause and was checked.

### 6. DOM size — borderline, monitor
**Evidence:** `dom-size-insight`: homepage has **1,221 DOM elements** — under
the commonly-cited 1,500-element caution threshold but not far off, with a DOM
depth of 29 in the account-login dialog markup. Not flagged as a current
bottleneck but worth watching as more sections/apps are added, since it
compounds the Style & Layout cost already seen in Finding 2.

## Field data gap (action item)

No CrUX/PSI field data was obtainable in this environment (no `GOOGLE_API_KEY`
configured, and the unauthenticated PSI quota was already exhausted at time of
testing). Given the severity of the mobile lab numbers above (LCP 2.2–3.1×
over the "poor" threshold on every page), the highest-value next step is
pulling real user data:
- Google Search Console → **Core Web Vitals** report for higrip.nl (mobile
  URL group) — free, immediate, no API key needed.
- Or configure `GOOGLE_API_KEY` and re-run:
  `"C:/Users/lars/.claude/plugins/cache/agricidaniel-claude-seo/claude-seo/2.3.1/scripts/claude-seo" run pagespeed_check.py <url> --crux-only --json`
- Or CrUX Vis (cruxvis.withgoogle.com) for a dashboard view.

This will confirm whether real higrip.nl mobile visitors (rather than this
single throttled lab run) are experiencing the same LCP failure at the 75th
percentile, and will also provide the real INP number that Lighthouse's
mobile traces could not compute here.

## Raw data

Lighthouse JSON reports saved at:
`C:/Users/lars/higrip.nl-audit/lh/{home,product,collection,tennis}-{mobile,desktop}.json`

## Summary & Performance Score

- **Mobile (lab)**: LCP fails "poor" threshold (>4.0s) on all 4 pages tested
  (5.48s–7.77s); TBT/INP could not be numerically computed (trace timeout) but
  main-thread evidence (2.5–3.1s of blocking third-party JS, forced reflow,
  1.0–1.3s maxPotentialFID) strongly suggests INP is also at risk in the
  field; CLS is good everywhere.
- **Desktop (lab)**: Good to very good — LCP 1.15–2.49s, TBT 149–226ms, CLS
  negligible. Not a priority.
- **Root causes, ranked by impact**: (1) LCP images not preloaded / not
  next-gen format, competing with (2) heavy Shopify app-extension JavaScript
  (Ecomsend popup, cart block extension, product-groups extension) that blocks
  the main thread for 2.5–3.1s per page and causes measurable forced-reflow
  layout thrashing, and (3) unoptimized JPG imagery adding up to 300KB of
  avoidable weight per page.
- **Field data**: not available in this run — CrUX/PSI field metrics should
  be pulled via Search Console or a configured `GOOGLE_API_KEY` to validate
  these lab findings against real higrip.nl visitors before treating the
  numbers above as final.

**Overall Performance Score: ~35/100** (mobile-weighted average across the 4
pages tested; desktop alone averages ~82/100 "Good," mobile is effectively
"Poor" — Lighthouse could not emit a mobile 0–100 score due to trace timeouts,
so this is a reasoned estimate from the LCP/TBT evidence above, not a
Lighthouse-reported figure). **This is a lab-data estimate; treat as
directional until confirmed against CrUX field data.**

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[03 Website Agent — Index]] · [[Home]]
