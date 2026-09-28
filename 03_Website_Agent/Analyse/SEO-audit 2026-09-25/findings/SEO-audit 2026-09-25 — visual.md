# Visual / Mobile Audit — higrip.nl

Date: 2026-09-25
Viewports tested: Desktop 1440x900, Mobile 390x844 (iPhone Safari UA, DPR 2)
Pages: Homepage (/), Product (/products/performance-gripsokken-2-0-zwart), Collection (/collections/gripsokken), Sport landing (/pages/gripsokken-voor-tennis)

Screenshots: `C:/Users/lars/higrip.nl-audit/screenshots/{page}_{viewport}_{abovefold|fullpage}.png`
Raw measurement data: `C:/Users/lars/higrip.nl-audit/screenshots/audit_data.json`, `audit_data_retry.json`

## Findings (by severity)

### HIGH — Add-to-cart CTA not visible above the fold on mobile product page
Page: `/products/performance-gripsokken-2-0-zwart`, mobile (390x844).
The "Aan winkelwagen toevoegen" button sits at `top: 1434px` in a 844px-tall viewport — roughly 1.7 screens of scrolling required before a mobile visitor sees the primary conversion CTA. Only the product image and announcement bar are visible above the fold; price, size selector and add-to-cart are all below.
Evidence: `product-zwart_mobile_abovefold.png` (cart button not present), `product-zwart_mobile_fullpage.png` (button visible far down).
Recommendation: pull price + a sticky/compact add-to-cart bar higher, or add a sticky bottom "add to cart" bar on mobile PDP.

### HIGH — Real H1 on homepage is buried ~2900px down the page, not the visible hero heading
Page: Homepage, both viewports.
The DOM's only `<h1>` is "HÏ GRIP PERFORMANCE GRIPSOKKEN VOOR SPORTERS" located at `top: 2912px` (desktop), far below the fold. The large "HÏ GRIP" text shown in the hero (visible above the fold on both desktop and mobile) is NOT the semantic H1 — it's a decorative element (likely a div/logo-style heading). This means the primary on-screen heading carries no H1 semantic weight, while the real H1 is invisible without scrolling. This is both an SEO and UX/accessibility issue (screen reader users landing on the page won't get a meaningful heading first).
Evidence: `home_desktop_abovefold.png` shows "HÏ GRIP" as hero text; `h1Check` script confirms actual `<h1>` position at y=2912.
Recommendation: make the hero headline (or an equivalent value-prop headline) the actual `<h1>`, or move a proper H1 into the hero.

### MEDIUM — Cookie consent banner occupies a large share of the mobile above-fold viewport
Pages: all 4, mobile.
On mobile, the cookie banner is a full-width bottom sheet that takes up ~45% of the 844px viewport height on load (visible in every mobile above-fold screenshot). It does not cover the H1/hero CTA on the homepage or tennis landing page, but on the product and collection pages it obscures most of the page content directly below the hero/image (e.g., product page: banner covers the bottom third of the product photo; collection page: banner covers the first product card almost entirely). Buttons ("Accepteren"/"Afwijzen") are reasonably sized, but "Voorkeuren beheren" (desktop, 182x50px) and "Voorkeuren beheren" (mobile, 316x33px) — the mobile height of ~33px is below the 44px recommended minimum tap target.
Evidence: `home_mobile_abovefold.png`, `product-zwart_mobile_abovefold.png`, `collection-gripsokken_mobile_abovefold.png`, `page-tennis_mobile_abovefold.png`. Data: `audit_data.json` → cta.height 32.8px on mobile for "Voorkeuren beheren".
Recommendation: shrink the banner or make it dismiss-on-scroll; increase "Voorkeuren beheren" tap-target height to ≥44px on mobile.

### MEDIUM — Announcement bar marquee shows overlapping/ghosted duplicate text on mobile
Pages: Homepage and Collection, mobile (not observed on product/tennis captures, but same component).
The scrolling announcement bar ("GRATIS VERZENDING BOVEN DE €35" / other rotating messages) renders with two copies of the text stacked directly on top of each other (ghosting effect) rather than a clean single line, on mobile only — reproduced independently in two separate script runs (home and collection pages), so this isn't a one-off timing artifact of a single screenshot.
Evidence: `home_mobile_abovefold.png`, `collection-gripsokken_mobile_abovefold.png` — both show doubled/overlapping text in the black announcement strip.
Recommendation: check the marquee/carousel CSS transform or slide-duplication logic on mobile breakpoints; likely a translateX/width miscalculation causing two message instances to render at the same X position instead of sequentially.

### MEDIUM — Mobile body copy renders below recommended 16px minimum
Pages: Product page (representative; same component/theme styles likely apply site-wide).
Computed font sizes on mobile: product bullet list (features) 13.5px, "Aan winkelwagen toevoegen" button label 14px, cookie banner paragraph 14px, strikethrough "Normale prijs" 11.5–19.7px (inconsistent across product card instances). Google/WCAG guidance recommends ≥16px base body text on mobile for legibility without zoom.
Evidence: computed-style dump via Playwright (see script output above), `product-zwart_mobile_abovefold.png`/`fullpage.png`.
Recommendation: bump base mobile font-size (theme `body { font-size }` currently 14px) to 16px, and increase feature-list/button label sizes accordingly.

### LOW — No horizontal overflow detected
All 4 pages, both viewports: `document.body.scrollWidth` equals `window.innerWidth` in every test (no horizontal scroll). Good — no positive finding needed here beyond confirmation.

### LOW — Non-ASCII characters (€, Ï, ö) rendering as replacement glyphs in some headless captures
Some automated data extraction runs printed "�" in place of €/Ï characters (encoding artifact of the headless Chromium console/print pipeline, not a live-page bug — screenshots render these correctly, e.g. "GRATIS VERZENDING BOVEN DE €35" and "HÏ GRIP" display correctly in all screenshots). No action needed; noted only so this isn't mistaken for a real rendering bug — confirmed cosmetic via screenshots which show correct characters.

## Positive findings (above-the-fold quality)

- **Product page** (desktop): H1 "PERFORMANCE GRIPSOKKEN 2.0 ZWART", price, color/size selector, and part of the add-to-cart module all visible above the fold. Clean layout, no overlap.
- **Collection page** (desktop + mobile): H1 "KIES JE GRIPSOK.", 4 trust/USP bullets, and start of product grid visible above the fold on both viewports.
- **Tennis landing page** (desktop + mobile): Strong above-fold value proposition — eyebrow label "PERFORMANCE GRIPSOKKEN", H1 "GRIPSOKKEN VOOR TENNIS" with orange accent, subheading "Meer grip in je schoen. Minder wegglijden, meer controle.", and primary CTA "SHOP DE PERFORMANCE GRIPSOKKEN 2.0" (desktop) / same CTA visible on mobile above the cookie banner. This is the best-performing page of the four for above-the-fold conversion clarity.
- Tap targets for primary CTAs (Shop buttons, Add to cart) all meet or exceed 44px height where visible.
- No layout-breaking overlaps or cut-off text found outside the cookie-banner/marquee issues above.

## Screenshot inventory
`C:/Users/lars/higrip.nl-audit/screenshots/`
- `home_desktop_abovefold.png`, `home_desktop_fullpage.png`, `home_mobile_abovefold.png`, `home_mobile_fullpage.png`
- `product-zwart_desktop_abovefold.png`, `product-zwart_desktop_fullpage.png`, `product-zwart_mobile_abovefold.png`, `product-zwart_mobile_fullpage.png`
- `collection-gripsokken_desktop_abovefold.png`, `collection-gripsokken_desktop_fullpage.png`, `collection-gripsokken_mobile_abovefold.png`, `collection-gripsokken_mobile_fullpage.png`
- `page-tennis_desktop_abovefold.png`, `page-tennis_desktop_fullpage.png`, `page-tennis_mobile_abovefold.png`, `page-tennis_mobile_fullpage.png`
