# Semantic Cluster Analysis — higrip.nl (NL)

Date: 2026-09-25 | Scope: NL URLs from urls.txt (23 blog posts, 5 sport/hub pages, collection) | Market: google.nl, Dutch
Machine-readable plan: `findings/cluster-plan.json` (pillars, spokes, 115 links, SERP matrix, redirect map, validation)

**Method.** I ran 22 SERPs through WebSearch, which returns roughly 8-10 organic URLs per keyword. This is a proxy for google.nl, not DataForSEO. I counted exact-URL overlap for each pair of keywords. Every blog post and sport page was crawled with curl for title, H1, main-content word count and internal links. No search volumes are available (no GSC or DataForSEO), so pillar choice rests on SERP breadth and the beachhead priority. Because WebSearch returns fewer and noisier results than a real top 10, the absolute overlap scores run low. Read them as relative.

## Content Architecture score: 22 / 100

| Sub-check | Result |
|---|---|
| Sport pillars exist | 3 of 4 beachhead sports (rugby returns **404**) |
| Pillar depth | 249-256 words each (tennis/voetbal/padel), pilates 101 words and no H1 |
| Blog -> sport-page links | **0 of 23** posts link to any sport page |
| Sport page -> blog links | **0**. They link only to each other and the two 2.0 products |
| Blog commercial link target | 20 of 23 link to `/collections/all`, **none** to `/collections/gripsokken` |
| Cannibalizing groups | 6 (see below) |
| Beachhead blog coverage | voetbal 1 post, tennis 0, padel 0, rugby 0 |
| Off-topic or near-empty posts | 3 (sportvoeding **45 words**, ochtendroutine, mentale voordeel) |

## 1. Critical findings (evidence)

1. **Padel page regression.** In findings/content.md (2026-09-18), `/pages/gripsokken-padel` had 747 words, FAQPage schema and the best readability on the site. It now 301s to `/pages/gripsokken-voor-padel`, which has **249 words**. The new sport-landing template replaced the strongest page on the site with a thin one. Restore the old copy and FAQ into the new template.
2. **Sport pages are islands.** All three sport pages come from the same ~250-word template. Their in-content links go only to the sibling sport pages and the 2.0 wit/zwart products. `/pages/ontdek-jouw-sport` (the natural sport hub) links only to `/collections/all` and `/pages/over-ons`. It does not link to a single sport page.
3. **Rugby pillar missing.** `/pages/gripsokken-voor-rugby` returns 404. The "gripsokken rugby" SERP holds only product pages from niche shops (derugbyspecialist.nl, rugbystuff.com, perfectlyperform.com, luxsports.co) and **no Dutch guide or landing page**. It is the lowest-competition beachhead SERP.
4. **Link equity goes to the wrong collection.** Blogs link to `/collections/all`. The commercial target is `/collections/gripsokken`. The collection itself links to legacy product handles (`/products/hi-grip-gripsokken-1`, `/products/performance-grip-socks-2-0-wit-1`) that redirect through 1-2 hops.
5. **Legacy URLs still indexed.** `site:higrip.nl` still returns `/blogs/2630309_gripsokken-tijdens-pilates-yoga-...`, which now **404s**. The krachttraining post has an in-body link to `/blogs/2590799_het-innovatieve-hi-grip-grippatroon-...`, which also **404s**.

## 2. SERP overlap (non-zero pairs, exact URL)

| Pair | Shared | Decision |
|---|---|---|
| grip sokken pilates / pilates sokken | 6 | Same cluster, one target page |
| gripsokken voetbal / beste gripsokken voetbal | 4 | Same cluster. Separate post justified by best-of intent (5/9 are affiliate "beste ... 2026" lists) |
| gripsokken kopen / gripsokken voetbal | 4 | The head term is voetbal-dominated. The collection and the voetbal page must be split by intent (PLP vs sport landing) |
| gripsokken tennis / gripsokken padel | 3 | Interlink. Separate pillars plus a bridge post (shared bol.com listings, Optigrip "tennis en padel") |
| afgeknipte voetbalsokken / hoe draag je gripsokken | 3 | Same cluster (tie-break: same intent, same domains Prostec/FitSockr/TikTok) |
| gripsokken / gripsokken voetbal | 3 | Interlink collection with voetbal pillar |
| gripsokken kopen / blessures voorkomen, / fitness | 3 | PLPs rank for both (Proskary) |
| blessures voorkomen / gripsokken blaren | 2 | Interlink |
| wat zijn gripsokken / verschil met gewone sokken | 2 | One explainer (G1) |
| gripsokken padel / padelsokken | 1 | Separate post |
| gripsokken tennis / tennissokken | 0 | Do not target "tennissokken" with the pillar (generic apparel PLPs: Falke, Sport2000, Tennis-Point) |
| gripsokken rugby / rugby sokken | 0 | Kit PLPs (Decathlon, Canterbury). Comparison spoke only |
| anti slip sokken / anything | 0 | **Exclude.** The SERP is elderly/medical/house socks (Medipoint, Vitaness, hulpmiddelenwijzer) |
| gripsokken knvb toegestaan / anything | 0 | Own spoke. The SERP is KNVB PDFs, an answer gap |

Where HÏ Grip ranks today: `/blogs/hi-grip/waarom-hi-grip-gripsokken` appears in **3 SERPs** (wat zijn gripsokken, verschil met gewone sokken, blessures voorkomen). `/blogs/trends/voorkom-uitglijden...krachttraining` and `/blogs/hi-grip/de-geschiedenis-van-gripsokken` appear for "gripsokken fitness". `/pages/veelgestelde-vragen` appears for "blessures voorkomen". **No HÏ Grip URL appears in any sport SERP** (voetbal, tennis, padel, rugby).

## 3. Cannibalization (6 groups) and consolidation

| # | Competing URLs | Evidence | Action |
|---|---|---|---|
| C1 | `wat-zijn-gripsokken` (340 w) + `waarom-hi-grip-gripsokken` (398 w) + `gripsokken-de-toekomst-van-jouw-sportoutfit` (355 w) | Only `waarom-hi-grip-gripsokken` ranks for "wat zijn gripsokken" | Keep **waarom-hi-grip-gripsokken** (it is the one Google chose). Retitle it "Wat zijn gripsokken? Voordelen en verschil met gewone sokken" and expand to ~1,600 words. 301 the other two to it |
| C2 | `hoe-gripsokken-kunnen-helpen-bij-het-voorkomen-van-blessures` + `waarom-gripsokken-het-verschil-maken-meer-stabiliteit-minder-blessures` + `meer-grip-meer-vertrouwen-...` | 3 posts on one topic, none of them in the "blessures voorkomen" SERP | Keep the first as survivor (G2), 301 the other two |
| C3 | `hoe-zorg-ik-voor-mijn-gripsokken` (201 w) + `hoe-verleng-je-de-levensduur-van-je-gripsokken` (335 w) | Same how-to intent. HÏ Grip absent from "gripsokken wassen" (Maestro and Mastr guides rank) | Merge into `hoe-zorg-ik...` (G5), 301 |
| C4 | `gripsokken-tijdens-pilates-en-yoga...` + `waarom-gripsokken-verplicht-zijn-bij-pilates` + `/pages/pilates` | Pilates keywords overlap 6, so they need one target | Keep `/pages/pilates` as the commercial target and `waarom-verplicht` as the single spoke. 301 the yoga/pilates post (and legacy `/blogs/2630309_...`) to it |
| C5 | `voor-welke-sport-zijn-gripsokken-onmisbaar...` vs `/pages/ontdek-jouw-sport` | Same "which sport" topic | Expand the page into the sport hub and 301 the blog to it |
| C6 | `welke-gripsokken-bestaan-er-van-budget-tot-premium` vs the planned "beste gripsokken voetbal" | Both commercial-compare intent | Fold into V1 and 301 once V1 is live |

Prune: `de-laatste-gezonde-trends-op-het-gebied-van-sportvoeding` (**45 words**) should 301 to /blogs/trends. The ochtendroutine and mentale-voordeel posts sit outside every cluster. Leave them out of the architecture, or noindex them.

## 4. Architecture: hub → sport pillars → spokes

```
/collections/gripsokken (HUB, "gripsokken kopen")  <->  /pages/ontdek-jouw-sport (SPORTHUB)
 ├─ /pages/gripsokken-voor-voetbal  (P-VOET, 253 -> 1,800 w)
 │    Kiezen & kopen:   V1 NEW Beste gripsokken voetbal 2026 (best-of) · G1 Wat zijn gripsokken
 │    Dragen & regels:  V2 REFRESH Afgeknipte voetbalsokken · V3 NEW Hoe draag je gripsokken (how-to) · V4 NEW Zijn gripsokken toegestaan door de KNVB?
 ├─ /pages/gripsokken-voor-tennis   (P-TEN, 256 -> 1,500 w)
 │    Kiezen:           T1 NEW Beste sokken voor tennis: gripsokken vs tennissokken · T2 NEW Tennis vs padel (bridge)
 │    Blessurevrij:     T3 NEW Blaren bij tennis* · G3 Gripsokken en blaren
 ├─ /pages/gripsokken-voor-padel    (P-PAD, 249 -> restore ~1,500 w)
 │    Kiezen:           PA1 NEW Padelsokken kiezen · T2 (bridge)
 │    Blessurevrij:     PA2 NEW Enkelblessures bij padel* · G2 Blessures voorkomen
 ├─ /pages/gripsokken-voor-rugby    (P-RUG, NEW)
 │    Dragen & kiezen:  R1 NEW Gripsokken bij rugby dragen* · R2 NEW Rugbysokken vs gripsokken
 │    Blessurevrij:     G2 · G3
 └─ /pages/pilates (P-PIL, secondary: expand 101 w, add H1, one spoke = waarom-verplicht-bij-pilates)
Shared proof and evergreen content: G4 De wetenschap achter gripsokken (linked from every pillar), G5 Gripsokken wassen
* = hypothesis spoke, not SERP-tested. Validate with GSC or Keyword Planner before writing.
```

Spec deviations, with reasons:
- **Pillar length.** Sport pillars are set at 1,500-1,800 words, not the 2,500-4,000 spec. Every sport SERP is 60-90% PLPs and product listings, so a 4,000-word landing page would work against the transactional intent. Depth comes from the spokes.
- **Cluster size.** Voetbal cluster 1 and several others have 2 posts, the spec minimum. Tennis and padel share T2 and rugby shares G2 and G3, which fits the observed overlaps (tennis/padel 3, blessures/blaren 2).
- **Overlap rule.** Spokes with overlap below 4 to their peers (V2/V3/V4, T1/T2) are grouped by intent tie-break because WebSearch scores run low overall. Re-check with DataForSEO before merging or splitting.

## 5. Internal link matrix (adjacency list; M = mandatory, R = recommended, O = optional)

```
HUB:      P-VOET(M) P-TEN(M) P-PAD(M) P-RUG(M) P-PIL(M) SPORTHUB(R)
SPORTHUB: P-VOET(M) P-TEN(M) P-PAD(M) P-RUG(M) P-PIL(M)
P-VOET:   V1 G1 V2 V3 V4 HUB (M) · P-RUG G4 (R) · G5 (O)
P-TEN:    T1 T2 T3 G3 HUB (M) · P-PAD G4 (R) · G5 G1 (O)
P-PAD:    PA1 T2 PA2 G2 HUB (M) · P-TEN G4 (R) · G5 G1 (O)
P-RUG:    R1 R2 G2 G3 HUB (M) · P-VOET G4 (R) · G5 G1 (O)
P-PIL:    HUB (M) · G4 (R) · G5 G1 (O)
V1: P-VOET(M) G1(R) G5 G4 HUB(O)          V2: P-VOET(M) V3 V4(R)
V3: P-VOET(M) V2 V4(R) R1(O)              V4: P-VOET(M) V2 V3(R)
T1: P-TEN(M) T2(R) PA1 HUB(O)             T2: P-TEN P-PAD(M) T1 PA1(R) G4(O)
T3: P-TEN(M) G3(R) PA2(O)                 PA1: P-PAD(M) T2(R) T1 HUB(O)
PA2: P-PAD(M) G2(R) T3(O)                 R1: P-RUG(M) R2(R) V3 G2(O)
R2: P-RUG(M) R1(R) T1 HUB(O)
G1: P-VOET(M) V1(R) G4 G5 HUB R2 P-PIL(O) G2: P-PAD P-RUG(M) PA2 G3(R) G4 R1(O)
G3: P-TEN P-RUG(M) T3 G2(R)               G4: G1 HUB V1(O)     G5: G1 HUB(O)
```
Validation: 0 duplicate primary keywords · every spoke has ≥3 incoming links · 0 orphans · every spoke↔pillar pair is bidirectional.
Also change the default blog CTA from `/collections/all` to the matching sport pillar, or to `/collections/gripsokken` for generic posts.

## 6. Existing post → cluster map

| Post | Cluster role | Action |
|---|---|---|
| afgeknipte-kousen-bij-amateurvoetbal... (421 w) | V2 voetbal | Refresh, put keyword in <title>, link P-VOET |
| waarom-hi-grip-gripsokken (398) | G1 | Survivor C1, expand |
| wat-zijn-gripsokken (340), gripsokken-de-toekomst (355) | → G1 | 301 |
| hoe-gripsokken-kunnen-helpen...blessures (397) | G2 | Survivor C2 |
| waarom-gripsokken-het-verschil-maken (381), meer-grip-meer-vertrouwen (420) | → G2 | 301 |
| smalle-voeten-brede-schoenen...blaren (301) | G3 | Refresh |
| de-wetenschap-achter-gripsokken (558) | G4 proof | Keep, link from all pillars |
| hoe-zorg-ik-voor-mijn-gripsokken (201) | G5 | Survivor C3 |
| hoe-verleng-je-de-levensduur (335) | → G5 | 301 |
| waarom-gripsokken-verplicht-zijn-bij-pilates (467) | Pilates spoke | Keep |
| gripsokken-tijdens-pilates-en-yoga (418) | → pilates spoke | 301 |
| welke-gripsokken-bestaan-er (442) | → V1 | 301 after V1 is live |
| voor-welke-sport-zijn-gripsokken-onmisbaar (356) | → SPORTHUB | 301 after the hub is expanded |
| voorkom-uitglijden...krachttraining (410) | Fitness (off-beachhead, ranks) | Keep, fix 404 link, link HUB |
| het-innovatieve-grippatroon (428), geschiedenis (357), hoe-is-hi-grip-ontstaan (217), twee-grootste-problemen (466) | Brand/E-E-A-T | Keep, link from /pages/over-ons, G4 |
| waarom-steeds-meer-sportclubs... (315) | B2B | Link to /pages/zakelijk, /pages/clubwear |
| sportvoeding (45), ochtendroutine (532), mentale voordeel (450) | none | 301 / noindex |

## 7. Priority order

1. Restore the padel content (747 w + FAQ) into `/pages/gripsokken-voor-padel`. [S]
2. Build `/pages/gripsokken-voor-rugby` (open SERP). [M]
3. Link the sport pillars into the site: from ontdek-jouw-sport, the collection and blog CTAs, plus sport-pillar→blog links. [S]
4. Carry out the 11 redirects in cluster-plan.json → consolidation (C1-C6 + legacy 404s). [S]
5. Expand the voetbal and tennis pillars to 1,500-1,800 words. [M]
6. Write the new spokes in this order: V1 beste gripsokken voetbal → V4 KNVB → V3 hoe draag je → PA1 padelsokken → T1 beste tennissokken → T2 bridge → R2 → hypothesis spokes once validated. [L]

## Audit-data (Content Architecture)

```json
{"category":"Content Architecture","score":22,"findings":[
 {"id":"CA-1","severity":"critical","title":"Padel sport page regressed from 747 to 249 words; FAQ lost","url":"/pages/gripsokken-voor-padel"},
 {"id":"CA-2","severity":"high","title":"Sport pages receive 0 links from 23 blog posts; hub page ontdek-jouw-sport links to none","url":"/pages/ontdek-jouw-sport"},
 {"id":"CA-3","severity":"high","title":"Rugby pillar missing (404) while SERP has no Dutch landing/guide","url":"/pages/gripsokken-voor-rugby"},
 {"id":"CA-4","severity":"high","title":"6 cannibalizing groups (wat-zijn, blessures x3, onderhoud x2, pilates x2, sportkeuze, budget-premium)","url":"/blogs/trends"},
 {"id":"CA-5","severity":"medium","title":"Blog CTAs link /collections/all instead of /collections/gripsokken; collection links legacy product handles via redirects","url":"/collections/gripsokken"},
 {"id":"CA-6","severity":"medium","title":"Legacy /blogs/2630309_ (indexed) and /blogs/2590799_ (linked) return 404","url":"/blogs/trends/voorkom-uitglijden-verlies-geen-focus-de-voordelen-van-gripsokken-in-krachttraining"},
 {"id":"CA-7","severity":"medium","title":"'anti slip sokken' is a care/elderly SERP - exclude from targeting; 'tennissokken'/'rugby sokken' 0 overlap with gripsokken variants","url":null},
 {"id":"CA-8","severity":"low","title":"Off-topic/near-empty posts (sportvoeding 45 w) dilute topical focus","url":"/blogs/trends/de-laatste-gezonde-trends-op-het-gebied-van-sportvoeding"}]}
```
