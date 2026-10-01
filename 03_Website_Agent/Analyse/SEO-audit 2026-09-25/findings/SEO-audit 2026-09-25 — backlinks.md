# Backlink Profile — higrip.nl

**Tier: 0** (Common Crawl + Verification Crawler only — no Moz, Bing, or DataForSEO keys configured)
**Status: INSUFFICIENT DATA for a numeric Backlink Health Score.** Per scoring policy, fewer than 4 of 7 scoring factors have any data source at Tier 0, and Common Crawl alone must never be used to produce a score. No numeric score is reported below — this is intentional, not an oversight.

## 1. Data sources run

| Source | Available | Result |
|---|---|---|
| Common Crawl Web Graph | Yes (public, no key) | `higrip.nl` and `www.higrip.nl` both **not found** in the current CC release (`cc-main-2026-jan-feb-mar`) |
| Backlink Verification Crawler | Yes (public, no key) | Not run — requires a candidate list of known/suspected backlink URLs (`--links <file>`), which was not supplied. None were found already logged elsewhere in this audit's output directory (`C:/Users/lars/higrip.nl-audit/`) either. |
| Moz Link Explorer | No | No API key configured |
| Bing Webmaster Tools | No | No API key configured |
| DataForSEO | No | Extension not installed |

## 2. Common Crawl domain-level metrics

| Metric | higrip.nl | www.higrip.nl | Confidence |
|---|---|---|---|
| In CC crawl | False | False | 0.50 |
| In CC rankings | False | False | 0.50 |
| PageRank | null | null | 0.50 |
| PageRank rank | null | null | 0.50 |
| Harmonic centrality | null | null | 0.50 |
| Harmonic centrality rank | null | null | 0.50 |

**Important interpretation caveat (validated, not my own inference):** "not found in Common Crawl" does **not** mean "low authority" or "no backlinks." It means the CC crawler simply has not indexed the domain in this quarterly web-graph release. CC web graphs (quarterly, source: https://commoncrawl.org/web-graphs) systematically under-represent small/newer D2C sites, .nl domains with modest traffic, and sites without their own strong external inbound crawl footprint yet. A brand of higrip.nl's current size (small, D2C, launched relatively recently per prior audit notes) being absent from CC is common and not itself diagnostic of a weak backlink profile — it just means Tier 0 has nothing to measure with here.

Source: Common Crawl Web Graph (confidence: 0.50, domain-level only). Freshness: `cc-main-2026-jan-feb-mar` release, cached response from 2026-09-16 (per `metadata.cached_at`/`timestamp` in the tool output — i.e., roughly 9 days old relative to today).

## 3. Referring domains / anchor text

**Not available at Tier 0.** Neither Common Crawl nor the verification crawler can *discover* new referring domains — CC only reports domain-level graph metrics (and reported none here), and the verify script only *confirms or refutes* a link from a URL you already suspect exists (via `--links <file>`). No such candidate list was provided for this audit, and no known inbound links to higrip.nl were found elsewhere in the audit working directory (checked `FULL-AUDIT-REPORT.md`, `COMPETITOR-GRIPSOKKEN.md`, `ACTION-PLAN.md` for prior backlink mentions — none found beyond a Trustpilot *widget* reference, which is an on-site third-party script, not an inbound link).

To get real referring-domain and anchor-text data, one of the following is required:
- A Moz API key (free tier, 2,500 rows/month) — `moz_api.py domains` / `moz_api.py anchors`
- A Bing Webmaster Tools key, only usable if higrip.nl is a verified property there — `bing_webmaster.py links`
- The DataForSEO extension (paid, highest fidelity)
- Manual input: if Lars has a list of sites he knows link to HÏ Grip (press mentions, sponsored club pages, directory listings, influencer bio links), that list can be run through `verify_backlinks.py` right now at Tier 0 to confirm which are live vs. broken/removed.

## 4. Link-building opportunities (recommendations, not derived from backlink data)

These are qualitative, best-practice recommendations for a Dutch sport D2C brand targeting fanatieke tennis/rugby/voetbal spelers (per the beachhead strategy noted in memory), **not findings from a backlink audit** — clearly flagged as such since no competitor/referring-domain data was available to benchmark against.

**High priority — sport-club B2B/reseller angle (fits HÏ Grip's product and beachhead strategy):**
- KNVB-aangesloten amateurverenigingen (voetbal) and KNLTB-clubs (tennis/padel) often have club webshops or sponsor-partner pages that link out to kit/equipment suppliers. A wholesale/teamkorting-aanbod for grip socks to clubs, in exchange for a link on the club's sponsor page, is a natural, contextually relevant backlink with real local-SEO/off-page value.
- Padelbanen/padelclubs (fast-growing category in NL) frequently list "aanbevolen materialen" or partner-brand pages — a fit for grip socks given padel's rapid direction changes.
- Sportscholen/personal trainers with an online presence (blog + partner links) that already promote grip/stability products.

**Medium priority — sport content/media:**
- Dutch sport gear review blogs and niche sport blogs (tennis/padel/voetbal-specifieke sites) for product reviews or "beste sokken voor [sport]" roundup inclusion.
- Guest content or expert-quote contributions to sport-injury-prevention or performance blogs (grip → blessurepreventie angle), which tend to earn more durable editorial links than pure product placement.

**Lower priority / supporting:**
- Sponsored listings in sportwinkel/marketplace directories relevant to NL sport retail.
- Local business directories for higrip.nl's registered business entity (basic NAP-consistency link, low authority value but easy).

**Do NOT pursue:** reciprocal-link exchange schemes with unrelated sites — not checked here (no verify data to detect reciprocal patterns), but flagged as a standing risk to avoid given HÏ Grip's small link profile; a few obviously reciprocal/low-quality links could disproportionately affect a thin profile once real data is available.

## 5. What would upgrade this analysis

1. Add a free Moz API key → unlocks DA/PA, spam score, real referring-domain list, and anchor text (Tier 1, confidence 0.85).
2. If higrip.nl is verified in Bing Webmaster Tools, add that key for a second independent inbound-link source (Tier 2, confidence 0.70).
3. Supply any known backlink URLs (press coverage, club sponsor pages, influencer links) so `verify_backlinks.py` can confirm live/broken status today, at Tier 0, with confidence 0.95 per verified link.
4. For competitor gap analysis (which is where most practical link-building targets get identified), DataForSEO or Moz's competitor "linking domains" comparison is needed — Common Crawl alone cannot do this.

## 6. Validator check (mandatory pre-delivery step)

Ran `validate_backlink_report.py` against the collected `cc_data`: **status PASS** (0 errors, 0 warnings, 1 info notice — the CC "not found ≠ low authority" caveat reproduced in Section 2 above). No health score was included in the input, consistent with the "insufficient data" conclusion.

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[03 Website Agent — Index]] · [[Home]]
