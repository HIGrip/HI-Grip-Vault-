---
type: kennis
gebied: website-agent
bijgewerkt: 2026-10-01
---

# Schema.org / Structured Data Audit — higrip.nl
Date: 2026-09-25 | Fetched via render_page.py, mode=auto (all pages confirmed server-rendered, `is_spa: false`, JSON-LD present in raw HTML — not client-injected).

## Pages checked
Homepage, 3 product pages (performance-gripsokken, -2-0-zwart, -2-0-wit), /collections/gripsokken, /pages/veelgestelde-vragen, /pages/gripsokken-voor-tennis, /pages/over-ons, /pages/contact, 2 blog articles (hi-grip/wat-zijn-gripsokken, trends/gripsokken-de-toekomst-van-jouw-sportoutfit), /pages/retourbeleid (for return-policy facts only).

---

## 1. Detection summary

| Page | JSON-LD blocks found |
|---|---|
| Homepage `/` | WebSite+SearchAction, **FAQPage**, Organization |
| `/products/performance-gripsokken` | BreadcrumbList, Organization, ProductGroup (+ Product variants + Offer + Brand) |
| `/products/performance-gripsokken-2-0-zwart` | same pattern |
| `/products/performance-gripsokken-2-0-wit` | same pattern |
| `/collections/gripsokken` | BreadcrumbList, Organization only — **no CollectionPage/ItemList** |
| `/pages/veelgestelde-vragen` | BreadcrumbList, Organization only — **no FAQPage**, despite being the FAQ page |
| `/pages/gripsokken-voor-tennis` | BreadcrumbList, Organization, WebPage (with `about: Product`), **FAQPage** |
| `/pages/over-ons` | BreadcrumbList, Organization only |
| `/pages/contact` | BreadcrumbList, Organization only — **no ContactPage/LocalBusiness data** |
| Blog articles (both sampled) | BreadcrumbList, Organization, Article |

No Microdata or RDFa detected anywhere — JSON-LD only, which is correct practice.

---

## 2. Validation results

### 2.1 Organization (present on every page) — FAIL (Error, sitewide)
Evidence, homepage block:
```json
{"@context":"http://schema.org","@type":"Organization","name":"HÏ Grip",
 "logo":"https://www.higrip.nl/cdn/shop/files/HI_Grip_logo_high_res.png?v=1763380366&width=500",
 "url":"https://www.higrip.nl"}
```
- **Error — `@context` uses `http://schema.org`, not `https://schema.org`.** Present on every single page sampled (home, products, collection, FAQ, tennis, about, contact, blog). Low functional risk (schema.org resolves either way) but fails the "always https" checklist rule and is trivial to fix in the Liquid snippet.
- **Error — `url` is wrong on non-home/non-product pages.** On the homepage and all 3 product pages, `Organization.url` correctly points to `https://www.higrip.nl`. On `/pages/veelgestelde-vragen`, `/pages/over-ons`, `/pages/contact`, and `/pages/gripsokken-voor-tennis`, `Organization.url` is instead set to **the current page's own URL** (e.g. `"url": "https://www.higrip.nl/pages/gripsokken-voor-tennis"`). An Organization's `url` must always be the entity's canonical homepage, not the page it happens to render on — this looks like two different Liquid snippets (one correct, one buggy) being used across templates. Confuses entity disambiguation for Google/AI crawlers building the Organization/brand knowledge graph.
- **Missing (opportunity) — no `sameAs` (Instagram etc.), no `contactPoint`, no `address`.** The Organization block is minimal (name/logo/url only) on every page. Given HÏ Grip actively runs Instagram (@higrip.nl) and has a contact page, this is low-hanging fruit for brand entity/E-E-A-T signals and Knowledge Panel eligibility.
- Note: Organization is duplicated as a full block on every page rather than referenced via `@id`. Not an error, but consolidating to one canonical Organization node (ideally emitted once via a shared snippet, referenced with `@id` where practical) would reduce inconsistency risk like the `url` bug above.

### 2.2 WebSite (homepage) — PASS
```json
{"@context":"https://schema.org","@type":"WebSite","name":"HÏ Grip","url":"https://www.higrip.nl",
 "inLanguage":"nl","potentialAction":{"@type":"SearchAction",
 "target":{"@type":"EntryPoint","urlTemplate":"https://www.higrip.nl/search?q={search_term_string}"},
 "query-input":"required name=search_term_string"}}
```
Correct `https` context, valid Sitelinks Searchbox markup. No issues.

### 2.3 BreadcrumbList — PASS (structurally)
Present and valid on every non-homepage page checked, correct `position`/`name`/`item` (absolute URLs). No errors found. Note: breadcrumb `item` values are consistent with actual page hierarchy.

### 2.4 Product / Offer (3 product pages) — PARTIAL FAIL
Evidence (performance-gripsokken):
```json
{"@context":"http://schema.org/","@type":"ProductGroup","productGroupID":"10755241083207",
 "name":"Performance Gripsokken","brand":{"@type":"Brand","name":"HÏ Grip"},
 "category":"Atletische sokken","hasVariant":[{"@type":"Product","name":"... 34-39 / 1-pack",
 "offers":{"@type":"Offer","availability":"http://schema.org/InStock","price":"13.49","priceCurrency":"EUR",...}}, ...]}
```
Pass:
- ✅ Valid `ProductGroup` + variant `Product`/`Offer` structure (Shopify's native theme output), correct for multi-variant products.
- ✅ `price` and `priceCurrency` present per variant, correctly formatted.
- ✅ `availability` present per variant (`InStock`).
- ✅ `brand` present.
- ✅ Absolute, working variant `url`s.

Fail / missing (Error unless noted):
- **Error — `@context` is `http://schema.org/`** (note trailing slash too) on all 3 product pages, and `availability` enum values also use `http://schema.org/InStock` instead of `https://`. Same fix as §2.1.
- **Error (Critical for rich results) — no `gtin`/`gtin8`/`gtin12`/`gtin13`/`mpn` and no `sku`** on any variant. Google's Product structured-data guidelines require *at least one* of `gtin`, `mpn`, or the combination of `brand`+two other identifying properties for full Product rich-result eligibility; right now only `brand` is present, which is on the edge of Google's minimum. Recommend adding `sku` (Shopify variant SKU) at minimum, `gtin13`/`gtin12` if you have real barcodes.
- **Critical — no `hasMerchantReturnPolicy`.** Required by Google since 2023 for Merchant Listing / product snippet eligibility (shown as "free returns" badges etc.). You have a concrete return policy (30 days, 25% restocking fee, unopened condition) at `/pages/retourbeleid` — ready to convert, see §4.
- **Critical — no `shippingDetails` (`OfferShippingDetails`).** Also required by Google's current Product guidelines for the shipping badge/eligibility. You have concrete policy language ("vóór 22:00 besteld = dezelfde dag verzonden via PostNL") — ready to convert, see §4.
- **Missing (High-value opportunity) — no `aggregateRating` / `review`.** No star ratings anywhere in Product schema, even though the FAQ text on the homepage references "3000+ sporters" as social proof and the site is working on a Trustpilot integration (per current project notes). Once Trustpilot review counts/ratings are reliably available, add `aggregateRating` — this is the single biggest visible SERP upgrade available (yellow stars in search results). Do **not** fabricate ratings; only add once real aggregate data can be pulled (e.g. via Trustpilot product review count API/Shopify app metafields) — a static hand-written number would violate Google's spam policies and could trigger a manual action.
- **Note (not an error):** `ProductGroup`-level has no `image` (only per-variant `image`) — acceptable per Google's spec since each variant supplies one, but adding a top-level `image` array is a nice-to-have for the ProductGroup entity itself.

### 2.5 Article / BlogPosting (2 sampled blog posts) — FAIL
Evidence (`/blogs/hi-grip/wat-zijn-gripsokken`):
```json
{"@context":"http://schema.org/","@type":"Article",
 "mainEntityOfPage":{"@type":"WebPage","@id":"https://www.higrip.nl/blogs/hi-grip/wat-zijn-gripsokken"},
 "articleBody":"#PremiumSportsokken","headline":"Wat zijn gripsokken?","description":"",
 "image":"https://www.higrip.nl/cdn/shop/articles/IMG_1478_....jpg?...","datePublished":"2025-12-15T23:15:21+01:00",
 "dateModified":"2025-12-15T23:13:21+01:00","author":{"@type":"Person","name":"Timo Heijligers"},
 "publisher":{"@type":"Organization","name":"HÏ Grip"}}
```
Pass:
- ✅ `datePublished`/`dateModified` present and ISO 8601 with timezone offset.
- ✅ `author` present as `Person`.
- ✅ `image` present, absolute URL.

Fail:
- **Error — `articleBody` contains only a hashtag fragment** (`"#PremiumSportsokken"` on post 1, `"#Toekomst"` on post 2), not the actual article text. This is a template/Liquid data-source bug (looks like it's pulling a tag or the first `<h#>`/hashtag element instead of `article.content` stripped of HTML). This is inaccurate structured data describing the page's own content and should be fixed — either populate `articleBody` with the real stripped body text or drop the property entirely (it's optional).
- **Error — `description` is an empty string** `""` on both sampled posts. Either populate with a real excerpt or omit the property; an empty string is worse than absent.
- **Error — `@context` is `http://schema.org/`** (same sitewide issue).
- **Missing — `publisher.logo`.** The `Article.publisher` Organization sub-object only has `name`, no `logo` (an `ImageObject`), which Google's Article guidelines ask for to correctly render publisher branding/avoid ambiguity, even though standalone Article rich results are limited today. Low priority but a 2-line fix.
- **Note — `dateModified` is earlier than or equal to `datePublished`** in both samples (post 1: modified `23:13:21` vs published `23:15:21`, i.e. *before* publish; post 2: modified 53 min after publish, that one's fine). The post-1 case (`dateModified` < `datePublished`) is logically invalid — flag as a data-quality Error since it will look wrong to any consumer validating date logic, even though Google doesn't hard-reject it.
- **Not checked in this pass:** `author.url`/`sameAs` for E-E-A-T (Person "Timo Heijligers" has no profile URL attached) — worth adding if an author bio page exists.

### 2.6 FAQPage — Info priority (per current Google policy)
Found on: homepage (8 Q&As) and `/pages/gripsokken-voor-tennis` (3 Q&As). **Not found** on the dedicated `/pages/veelgestelde-vragen` FAQ page itself, which is a minor missed-opportunity in isolation but is moot given the ranking rules below.
- **Google retired FAQ rich results for all sites (May 7, 2026).** There is currently no Google SERP benefit from FAQPage anywhere on the site. Flagging as **Info**, not Critical/Error — the markup is technically valid (see below) and there may be unconfirmed AI/GEO (Overviews, assistants) benefit from having well-structured Q&A content, but this should not be treated as an SEO priority.
- Technical validation of what exists: both blocks are structurally valid (`Question`/`acceptedAnswer`/`Answer`), use `https://schema.org` context correctly (unlike the Organization/Product blocks — interesting inconsistency, suggests different developer/app authored this vs. the theme's native snippets), and content matches on-page text.
- No action required. If new FAQ content is added, plain HTML with FAQPage JSON-LD is fine to keep for GEO purposes, but don't expect a Google SERP feature.

### 2.7 Collection page (`/collections/gripsokken`) — Missing opportunity (Low priority)
No `CollectionPage` or `ItemList` schema. Shopify's default collection template does not emit this, and Google does not guarantee a distinct rich result for generic collection/category pages, so this is low priority — but adding a lightweight `CollectionPage`+`ItemList` (of the 3 products) is a reasonable low-effort addition for entity clarity, not for a specific SERP feature.

### 2.8 Contact page (`/pages/contact`) — Missing opportunity
No `LocalBusiness`/`ContactPage`/`ContactPoint` schema — only the generic (and buggy, see §2.1) `Organization` block. If HÏ Grip has a customer-service email/phone worth surfacing, adding `ContactPoint` to the Organization block (with `contactType: "customer service"`, `email: "info@higrip.nl"`) is a quick, accurate addition. No physical retail storefront implied by current content, so `LocalBusiness` is not recommended unless that changes.

---

## 3. Priority summary

| Priority | Finding | Pages affected |
|---|---|---|
| Critical | Missing `hasMerchantReturnPolicy` on Product/Offer | All 3 product pages |
| Critical | Missing `shippingDetails` on Product/Offer | All 3 product pages |
| Critical | Missing `gtin`/`mpn`/`sku` on Product variants | All 3 product pages |
| Error | `@context` = `http://schema.org` (not https) | Sitewide, every block except WebSite + FAQPage blocks |
| Error | `Organization.url` = current page URL instead of homepage | FAQ, tennis, over-ons, contact pages |
| Error | `Article.articleBody` = hashtag fragment, not real body text | Both sampled blog posts (likely sitewide — same template) |
| Error | `Article.description` = empty string | Both sampled blog posts (likely sitewide) |
| Error | `dateModified` earlier than `datePublished` | 1 of 2 sampled blog posts (data bug, check others) |
| High opportunity | No `aggregateRating`/`review` on Products | All 3 product pages (add once real Trustpilot data is reliable — do not fabricate) |
| Medium opportunity | Organization missing `sameAs`, `contactPoint`, `address` | Sitewide |
| Info | FAQPage present — no Google SERP benefit anymore (retired May 2026) | Homepage, tennis page |
| Low opportunity | No `CollectionPage`/`ItemList` on collection page | `/collections/gripsokken` |
| Low opportunity | `Article.publisher.logo` missing | Blog posts |
| Low opportunity | No `ContactPoint` on contact page | `/pages/contact` |

---

## 4. Ready-to-paste JSON-LD for the gaps

### 4.1 Product `hasMerchantReturnPolicy` + `shippingDetails` (add inside the existing `Offer` object, per variant, in `product.json.liquid` / the snippet emitting the current ProductGroup block)

Based on actual policy text from `/pages/retourbeleid` (30-day window, unopened condition, 25% restocking fee) and the site's stated same-day dispatch cutoff (orders before 22:00 shipped same day via PostNL). **Confirm the restocking-fee framing with legal/CS before publishing** — Google's schema doesn't have a dedicated "restocking fee %" property, so it's represented via `restockingFee` on `MerchantReturnPolicy`.

```json
{
  "@context": "https://schema.org",
  "@type": "MerchantReturnPolicy",
  "applicableCountry": "NL",
  "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
  "merchantReturnDays": 30,
  "returnMethod": "https://schema.org/ReturnByMail",
  "returnFees": "https://schema.org/RestockingFees",
  "restockingFeePercentage": 25,
  "itemCondition": "https://schema.org/NewCondition"
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "OfferShippingDetails",
  "shippingRate": {
    "@type": "MonetaryAmount",
    "value": "0",
    "currency": "EUR"
  },
  "shippingDestination": {
    "@type": "DefinedRegion",
    "addressCountry": "NL"
  },
  "deliveryTime": {
    "@type": "ShippingDeliveryTime",
    "handlingTime": {
      "@type": "QuantitativeValue",
      "minValue": 0,
      "maxValue": 0,
      "unitCode": "DAY"
    },
    "transitTime": {
      "@type": "QuantitativeValue",
      "minValue": 1,
      "maxValue": 2,
      "unitCode": "DAY"
    }
  }
}
```
Notes:
- `shippingRate` of €0 assumes the "gratis verzending boven €35" free-shipping tier; if there's a non-free base rate for orders under €35, emit a second `OfferShippingDetails` object for that tier, or use `shippingRate` conditional on `eligibleTransactionVolume` (Google's spec supports multiple `shippingDetails` entries).
- `transitTime` 1–2 days is a reasonable PostNL NL estimate for "shipped same day if ordered before 22:00" — confirm actual carrier transit SLA before publishing; don't guess higher than reality.
- Liquid-friendly: wrap `merchantReturnDays`, `restockingFeePercentage`, and shipping values in theme settings/metafields rather than hardcoding, so Lars/CS can update policy once in Shopify admin without touching Liquid.

### 4.2 Product `sku` / `gtin` (add to each variant `Product` inside `hasVariant`)
```json
"sku": "{{ variant.sku }}",
"gtin13": "{{ variant.barcode }}"
```
Liquid: pull `variant.sku` and `variant.barcode` directly — Shopify already stores these per variant; only emit `gtin13`/`gtin12` if `variant.barcode` is a real GS1 barcode (don't emit an internal SKU as a fake GTIN).

### 4.3 Fixed Organization block (fix `@context`, `url`, add `sameAs`/`contactPoint`) — replace the current sitewide snippet
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "HÏ Grip",
  "url": "https://www.higrip.nl",
  "logo": "https://www.higrip.nl/cdn/shop/files/HI_Grip_logo_high_res.png?v=1763380366&width=500",
  "sameAs": [
    "https://www.instagram.com/higrip.nl"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "info@higrip.nl",
    "contactType": "customer service",
    "areaServed": "NL",
    "availableLanguage": ["nl"]
  }
}
```
Liquid fix for the `url` bug: ensure this snippet always renders `{{ shop.url }}` (or a hardcoded `https://www.higrip.nl`), never `{{ canonical_url }}`/`{{ page.url }}`/`{{ request.origin }}{{ page.url }}` — that's almost certainly the source of the per-page `url` bug on FAQ/tennis/over-ons/contact.

### 4.4 Fixed Article block (fix `@context`, `articleBody`, `description`, add `publisher.logo`)
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": "https://www.higrip.nl/blogs/hi-grip/wat-zijn-gripsokken#article",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.higrip.nl/blogs/hi-grip/wat-zijn-gripsokken" },
  "headline": "Wat zijn gripsokken?",
  "description": "{{ article.excerpt | strip_html | truncate: 160 }}",
  "image": "https://www.higrip.nl/cdn/shop/articles/IMG_1478_7f502afc-e377-4a49-b13b-6a6f31703e6a.jpg?v=1787309217&width=1920",
  "articleBody": "{{ article.content | strip_html }}",
  "datePublished": "2025-12-15T23:15:21+01:00",
  "dateModified": "2025-12-15T23:15:21+01:00",
  "author": { "@type": "Person", "name": "Timo Heijligers" },
  "publisher": {
    "@type": "Organization",
    "name": "HÏ Grip",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.higrip.nl/cdn/shop/files/HI_Grip_logo_high_res.png?v=1763380366&width=500"
    }
  }
}
```
Notes:
- Switched `@type` from bare `Article` to `BlogPosting` — more precise for a blog template (Google treats both the same for eligibility, but `BlogPosting` is the semantically correct subtype here).
- `description`: use `article.excerpt` if populated in Shopify admin; if empty, fall back to a truncated `article.content | strip_html`, never leave `""`.
- `articleBody`: pull from `article.content | strip_html`, not a tag/hashtag field — this fixes the `#PremiumSportsokken`/`#Toekomst` bug.
- Fixed the `dateModified` < `datePublished` case by defaulting `dateModified` to `datePublished` when Shopify hasn't recorded a real edit — never emit a modified date earlier than the published date.

### 4.5 Optional: CollectionPage for `/collections/gripsokken` (low priority)
```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Gripsokken",
  "url": "https://www.higrip.nl/collections/gripsokken",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "url": "https://www.higrip.nl/products/performance-gripsokken" },
      { "@type": "ListItem", "position": 2, "url": "https://www.higrip.nl/products/performance-gripsokken-2-0-zwart" },
      { "@type": "ListItem", "position": 3, "url": "https://www.higrip.nl/products/performance-gripsokken-2-0-wit" }
    ]
  }
}
```

---

## 5. What NOT to do
- Do not implement/keep expanding FAQPage for SEO reasons — no Google SERP benefit since May 2026. Fine to keep existing ones for GEO/AI-answer purposes if desired, but treat as Info, not a ranking lever.
- Do not fabricate `aggregateRating` values — wait for real Trustpilot data feed.
- Do not use HowTo schema for any "hoe verzorg ik mijn gripsokken" / how-to style blog content — deprecated, no rich results since Sept 2023.

---

## Summary

**Detected:** WebSite+SearchAction (homepage), FAQPage (homepage + tennis page), Organization (sitewide), BreadcrumbList (all non-home pages), ProductGroup/Product/Offer (3 product pages, Shopify-native), Article (blog posts). All server-rendered JSON-LD, no Microdata/RDFa, no deprecated types (HowTo/SpecialAnnouncement/CourseInfo) present.

**Key problems:** every JSON-LD block on the site uses `http://schema.org` instead of `https://schema.org`; `Organization.url` is wrong (set to the current page instead of the homepage) on 4+ page templates; Product/Offer blocks are missing the two properties Google explicitly requires for current Merchant/Product rich-result eligibility (`hasMerchantReturnPolicy`, `shippingDetails`) plus `gtin`/`sku`; Article blocks have a template bug where `articleBody` outputs a bare hashtag instead of real content, `description` is empty, and one sampled post has `dateModified` earlier than `datePublished`. FAQPage markup is technically valid but delivers no Google SERP benefit anymore (Info only). No aggregateRating anywhere — biggest available upgrade once real review data is reliable.

**Schema Score: 52/100** — solid Shopify-native foundation (breadcrumbs, product/offer, article dates/author all present and mostly correctly structured) undercut by a sitewide `http`/`https` context slip, a real `Organization.url` bug on several templates, missing Product return/shipping/identifier properties required for current Google rich-result eligibility, and a content-accuracy bug in `articleBody`/`description` on blog posts.

## Gerelateerd onderzoek (automatisch)

Onderzoek uit `05_Research/` dat naar deze notitie verwijst, nieuwste eerst. Bijgewerkt door `vault_nav.py`; niet met de hand bewerken.

- [[2026-09-25-seo-audit]] — SEO-audit higrip.nl 25 september — 54/100, padel-regressie en rugby ontbreekt

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[03 Website Agent — Index]] · [[Home]]
