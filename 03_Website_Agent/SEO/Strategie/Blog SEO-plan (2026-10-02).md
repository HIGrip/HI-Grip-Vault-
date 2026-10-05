---
type: kennis
gebied: website-agent
bijgewerkt: 2026-10-02
---

# Blog SEO-plan — updaten en verbeteren (2-10-2026)

> Voorstel van de Website Agent (SEO + Conversie & Analyse + Website Copy), door Denzel gecheckt tegen Brand Core en [[Feiten & Actuele Staat]]. **Niets gewijzigd, gepubliceerd of naar live gepusht.** Bouwt voort op [[SEO-audit 2026-09-25 — Actieplan]] (punt 16 en 25) en [[SEO-audit 2026-09-25 — content]] (H1-H8).

## Datakwaliteit (lees dit eerst)
- GA4 heeft pas data vanaf 30-8 (tag lag dood): ~5 weken, 27 blog-landingssessies in totaal. Alles is indicatie, geen bewijs. Purchase-tracking is pas recent hersteld, dus "0 productviews/0 add-to-cart vanaf blogs" bewijst niets.
- higrip.nl gaf de agents tijdens de sessie HTTP 429 (Cloudflare). Alleen de sitemap en 1 post zijn vandaag live gemeten; woordaantallen, titels en claims komen uit de audit van 25-9.
- SERP-uitspraken komen uit de audit (WebSearch was niet beschikbaar). Zoekvolumes: onbekend. Controleer de SERP handmatig vóór het schrijven van elke nieuwe post.

## Live stand (sitemap, 2-10)
3 blogs (`hi-grip` 7 posts, `trends` 17, `intern`) = 24 posts + 3 indexpagina's. Alle posts hebben lastmod 21-8-2026: niets nieuw sinds februari. De lege sportvoeding-post en `/blogs/intern` staan nog in de sitemap.

## Wat goed is (behouden en versterken)
| Post | Waarom |
|---|---|
| `hi-grip/de-wetenschap-achter-gripsokken` | Enige post met echte bronnen (Apps 2020/2022, Friedl 2023), beste engagement (73 s), organisch verkeer, rankt positie 7-8. Bewijsanker voor de hele site. |
| `hi-grip/waarom-hi-grip-gripsokken` | Google rankt deze URL al in 3 SERP-checks; 194 vertoningen, positie 6,9, maar CTR 1,03% → grootste onbenutte zichtbaarheid. |
| `hi-grip/hoe-zorg-ik-voor-mijn-gripsokken` | Rankt (positie 4→8, ook "antislip sokken"), maar houdt bezoekers niet vast (181 woorden). |
| `trends/afgeknipte-kousen-bij-amateurvoetbal-...` | Enige sportspecifieke post; onderwerp heeft echte zoekintentie. Titel mist het keyword. |
| `trends/smalle-voeten-...-blaren` | Blaren = herkenbare pijn bij tennis/padel. |
| `hi-grip/het-innovatieve-...-grippatroon`, `de-geschiedenis-van-gripsokken`, `trends/waarom-gripsokken-verplicht-zijn-bij-pilates`, `trends/waarom-steeds-meer-sportclubs-...`, `trends/voorkom-uitglijden-...-krachttraining` | Behouden, alleen titel/meta/links repareren (P3). |

## Wat niet goed is
- **0 van 24 posts** halen 1.500 woorden; 20 posts 284-424 woorden.
- **7 clusters kannibaliseren elkaar** (zelfde zoekintentie, geen gekopieerde tekst).
- **0 posts linken naar een sportpagina of product**; 20 van 23 CTA's wijzen naar `/collections/all`; 1 kapotte link (`/blogs/2590799_...`, 404).
- **Geen enkele post over tennis, padel of rugby** (beachhead); sportpagina's krijgen nog geen organisch verkeer.
- **Ongesourcete gezondheidsclaims** ("minder blessures", "medische staf", "onderzoek laat zien", "wetenschappelijk bewezen beter") → herformuleren (zie claim-tabel).
- Off-topic posts (ochtendroutine, mentale voordelen, sportvoeding), een lege post, een lege blog `/intern`.
- Schema: `articleBody` = hashtag, lege `description`, `dateModified` vóór `datePublished`, http-context. Geen zichtbare auteur. Formeel "u" in 3 posts. Niets gepubliceerd sinds 15-2.
- Blogs dragen nu niet aantoonbaar bij aan verkoop: 4 doorkliks naar collecties op 27 landingen (n=4, indicatief).

## Besluit per post
**Aanbeveling hoofdgids: `waarom-hi-grip-gripsokken` (behoud slug, nieuwe titel/H1).** Beide agents + de data kiezen deze; de audit (content.md) koos `wat-zijn-gripsokken`, dat 0 organisch krijgt. **Aanbeveling verzorg-post: `hoe-zorg-ik-voor-mijn-gripsokken`.**

### /blogs/hi-grip
| Post | Besluit | Prio |
|---|---|---|
| waarom-hi-grip-gripsokken | HERSCHRIJVEN tot hoofdgids "Wat zijn gripsokken?" (1.200-1.600 woorden, 40-60 woorden direct antwoord, vergelijkingstabel, links naar 4 sportpagina's) | P1 |
| wat-zijn-gripsokken | SAMENVOEGEN → waarom-hi-grip (301) | P1 |
| de-wetenschap-achter-gripsokken | BEHOUDEN + VERSTERKEN: titel "Werken gripsokken? Wat onderzoek zegt", bronregel bij elk getal, Friedl eerlijk (+9,3% tractie bij afremmen), alinea "wat dit niet bewijst" | P1 |
| hoe-zorg-ik-voor-mijn-gripsokken | VERSTERKEN tot ~800 woorden (temperatuur, droger, levensduur), "u"→"je" | P1 |
| grippatroon-post | BEHOUDEN, titel (65) + H1 (puntkomma) repareren, cross-link wetenschap | P3 |
| hoe-is-hi-grip-ontstaan | SAMENVOEGEN → /pages/over-ons, ná besluit en nadat over-ons klopt | P2 |
| de-geschiedenis-van-gripsokken | BEHOUDEN, bronnen + titel | P3 |
| index "Algemeen" | H1 → "Kennisbank gripsokken", meta 120-155 | P2 |

### /blogs/trends
| Post | Besluit | Prio |
|---|---|---|
| …gezonde-trends-sportvoeding (leeg) | VERWIJDEREN + 301 → /blogs/trends | **P1** |
| hoe-gripsokken-kunnen-helpen-bij-het-voorkomen-van-blessures | HERSCHRIJVEN tot enige blessurepost ("minder schuiven, meer stabiliteit"; niet aangetoond dat het blessures voorkomt) | P1 |
| waarom-gripsokken-het-verschil-maken-… ; meer-grip-meer-vertrouwen-… | SAMENVOEGEN → blessurepost (301); alleen bron-gedekte zinnen mee | P1 |
| gripsokken-de-toekomst-van-jouw-sportoutfit | SAMENVOEGEN → hoofdgids (301) | P2 |
| afgeknipte-kousen-bij-amateurvoetbal | HERSCHRIJVEN: keyword in titel, link naar voetbalpagina, stap-voor-stap | P1 |
| hoe-verleng-je-de-levensduur | SAMENVOEGEN → hoe-zorg-ik (301) | P2 |
| smalle-voeten-…-blaren | HERSCHRIJVEN (stray H2 weg, 1.000+ woorden, tennis/padel-link) | P2 |
| welke-gripsokken-bestaan-er-… | HERSCHRIJVEN of samenvoegen met vergelijkingsgids; **geen 301 zolang doel niet bestaat** | P2 |
| voor-welke-sport-zijn-gripsokken-onmisbaar | SAMENVOEGEN → /pages/ontdek-jouw-sport pas als die hub 4 sportpagina's linkt; "beperkt op voorraad" weg | P2 |
| pilates-yoga (2 H1) → pilates-verplicht | SAMENVOEGEN (301), lichte herschrijving; pilates is geen beachhead | P3 |
| waarom-steeds-meer-sportclubs | BEHOUDEN, link naar /pages/zakelijk + /pages/clubwear | P3 |
| voorkom-uitglijden-…-krachttraining | Licht herschrijven, 404-link fixen | P3 |
| de-twee-grootste-problemen-… ("4 sporters") | SAMENVOEGEN → over-ons of NOINDEX (besluit; feiten = 3 founders) | P2 |
| ochtendroutine ; waarom-sporten-meer-is-dan-bewegen | VERWIJDEREN + 301, of NOINDEX (besluit) | P2 |
| /blogs/intern | VERWIJDEREN of NOINDEX | **P1** |
| /pages/blogs, index "Trends" | NOINDEX/301 resp. H1 + meta aanpassen | P2 |

Na consolidatie: 24 → **13 posts**. Redirectkaart (incl. de 3 reeds-404-URL's `/blogs/2630309_…`, `/blogs/2590799_…`, `/2697390_hi-grip-zaalvoetbalsokken`): zie het SEO-agent-rapport in de sessie; redirects altijd direct naar het eindpunt (geen ketens) en alleen instellen op uitdrukkelijke opdracht van lars. **Niet 301'en** zonder besluit: ochtendroutine, mentale voordeel, intern, brand-story-posts, /pages/blogs en alles waarvan het doel nog niet bestaat.

## Nieuwe posts (blog = uitleg/vraag, sportpagina = kopen)
Basisregel: een blog mag nooit het primaire keyword van de sportpagina hebben ("gripsokken tennis/padel/voetbal/rugby"). De 4 Sportgidsen in `Content\Sportgidsen\` hebben precies die keywords als handle → **niet 1-op-1 publiceren** (zelfkannibalisatie), maar herstructureren tot vraagposts. Futsal/basketbal/fitness/hardlopen-gidsen wachten (geen beachhead).

Volgorde: 1 → 2 → 3 → 4 → 5 → 8 → 6 → 7.
1. **Mag je gripsokken dragen bij rugby? (onder je clubkous)** — first-mover, geen NL-gids in SERP; Law 4 / Rugby Nederland eerst verifiëren; pas live na `/pages/gripsokken-voor-rugby` (nu 404 of concept) en een echte rugbyfoto.
2. **Zijn gripsokken toegestaan bij de KNVB?** — antwoordkloof (SERP = pdf's); KNVB-regel eerst bij de bron checken.
3. **Hoe draag je gripsokken met scheenbeschermers en afgeknipte kous?** — how-to, voetbal + rugby.
4. **Padelsokken kiezen** — pas na herstel `/pages/gripsokken-voor-padel` (747→249 woorden).
5. **Tennis vs padel: beweging en ondergrond** — bridge-post.
6. **Gripsokken vs gewone sokken vs tape** (vergelijkingstabel) — GEO-citeerbaar; alleen controleerbare feiten, concurrenten met datum/bron.
7. **Beste sokken voor tennis** + **Blaren bij tennis en padel** — SERP-hypothese, eerst checken.
8. "Welke maat?": hooguit korte FAQ (maatgids-pagina is afgewezen, sokmaat = schoenmaat).

Per post: 40-60 woorden direct antwoord onder de H1, bronregel bij elk getal, minstens 1 echt eerste-persoon-element (speler/founder/foto), 1 link naar sportpagina + 1 naar product 2.0 + 1-2 zusterposts, CTA naar `/collections/gripsokken` (pill, zwart/wit), geen batch-publicatie (1 post per 1-2 weken).

## Technisch
- **Blogtemplate-schema in één keer voor alle 24 posts:** BlogPosting, https, `articleBody` = `article.content | strip_html`, `description` = excerpt, `datePublished` ≤ `dateModified`, `publisher.logo`, `author` Person met `url` + `sameAs`. Paste-klare code: `findings/schema.md` §4.4. Alleen in werkthema.
- Titels ≤60 tekens, keyword eerst, merk achteraan (nu staat "HÏ Grip |" voorop); metas 120-155. Te lang: grippatroon 65, meer-grip 64, blessures 64, welke-gripsokken 62, afgeknipte 61; metas >160: waarom-hi-grip 200, hoe-zorg 172, ontstaan 169.
- Interne links + CTA's: `/collections/all` en `/winkel` vervangen; sporthub `/pages/ontdek-jouw-sport` (positie 3,9, 0% CTR, linkt 0 sportpagina's) eerst fixen.
- Alt-teksten NL en specifiek; AI-bestandsnamen (`ChatGPT_Image…`, `Firefly_…`) vervangen. Zichtbare byline + auteurpagina.
- `/en/`-blogs ranken al (112 vertoningen, 0% CTR) maar zijn onvertaald: vertalen of uit hreflang.

## Claim-discipline (blog-versie)
| Nu | Wordt |
|---|---|
| "wetenschappelijk bewezen beter" / "onderzoek laat zien" | Vaste formulering: "Wetenschappelijk aangetoond: gripsokken verhogen de statische wrijvingscoëfficiënt van 0,60 naar 1,17, 95% meer grip (Apps et al. 2022)" — categoriebewijs, nooit "HÏ Grip getest" |
| "minder blessures" / "voorkom een verzwikte enkel" | "minder schuiven in je schoen, meer stabiliteit"; blessurepreventie niet aangetoond |
| "aanbevolen door medische staf", "sporters rapporteren consequent" | Schrappen of bronnen |
| "15-20 mmHg ondersteunt je doorbloeding" | Alleen als specificatie, zonder gezondheidsbelofte (tenzij lars bron levert) |
| "nu beperkt op voorraad!" | Weg (2.0 stond op 1-10 op voorraad 0) |
| "4 ondernemende sporters", "vóór 22:00" | 3 founders; "binnen 1 werkdag verzonden" |
| Friedl 2023 | Alleen "+9,3% benutte tractie bij afremmen" |
| Reviewscore | 4,6 ★ alleen met bron Trustpilot; nooit `aggregateRating` |

## Top-10 acties
1. Lege sportvoeding-post + `/blogs/intern` weg/NOINDEX (+301).
2. Blogtemplate-schema repareren (werkthema).
3. Hoofdgids herschrijven; wat-zijn + toekomst erin 301'en.
4. Blessurecluster 3→1 + claims herformuleren.
5. CTA's + contextuele links (sportpagina's, product 2.0, 404-link); sporthub laten linken.
6. Verzorg-post uitbreiden; wetenschap-post versterken.
7. Afgeknipte-kousen-post herschrijven.
8. Eerste nieuwe posts (rugby, KNVB, hoe-draag-je) als vraagposts.
9. Auteur + byline + Person-schema (na goedgekeurde founderbio's, audit C2).
10. Hermeting na 4-6 weken (GSC per URL, 10-prompts AI-zichtbaarheid); SERP-check vóór elke nieuwe post.

## Afhankelijkheden (vóór publicatie)
Padelpagina herstellen · rugbypagina bouwen · 2.0-voorraad controleren (CTA's naar 2.0) · founderbio's echt maken · feiten gelijktrekken (zie [[Feiten & Actuele Staat]]).

## Besluiten van lars (2-10-2026)
- **Plan goedgekeurd** als uitgangspunt.
- **Hoofdgids** = `waarom-hi-grip-gripsokken` (advies gevolgd); verzorg-post = `hoe-zorg-ik-voor-mijn-gripsokken`.
- **"Beste gripsokken voetbal":** niet schrijven (advies SEO-agent gevolgd; geen 301 van `welke-gripsokken-bestaan-er` op dit punt).
- **Sportgidsen:** mogen als basis dienen voor blogs, maar **niet 1-op-1 publiceren** (geen sportpagina-keyword als blogkeyword; herstructureren tot vraagposts).
- **Off-topic posts mogen weg** (ochtendroutine, mentale voordelen, lege sportvoeding-post) en `/blogs/intern`: verwijderen + 301. Uitvoering in Shopify Admin doet lars zelf (agents publiceren niet live).
- **Auteur = "Team HÏ Grip"** (geen persoonsnaam): byline en Person-schema → Organization/Team-auteur; geen bio/foto per founder nodig voor de byline en geen "gecontroleerd door" tenzij er echt een reviewer is. Founderbio's op `/pages/ons-verhaal` (audit C2) blijven een los punt.
- **Nog niet beslist:** punt 5 brand-story-posts → over-ons, 7 `/pages/blogs`, 8 EN-blogs, 9 compressie-claim, 10 spelerstest.

## Open voor lars
**Beslissingen (zie ook hierboven wat al is besloten):** (1) hoofdgids-URL = waarom-hi-grip (advies)? · (2) ochtendroutine/mentale-voordeel/intern: weg+301 of NOINDEX? · (3) Sportgidsen herstructureren tot vraagposts (advies) of publiceren? · (4) **"Beste gripsokken voetbal": SEO-agent wijst het af (strategienotitie: kansloos, affiliate-lijsten), Copy-agent en audit willen het** — geen 301 van welke-gripsokken tot besloten · (5) brand-story-posts samenvoegen in over-ons? · (6) wie is auteur (+ bio/foto), en is er een fysio/trainer als "gecontroleerd door"? · (7) /pages/blogs NOINDEX of 301? · (8) /en/-blogs vertalen of uit hreflang? · (9) bron voor compressie-claim of schrappen · (10) echte spelerstest voor een "beste"-post?

**Input nodig voor de Copy-briefs:** citaten/foto's van een voetballer, tennis/padel-speler (niveau 7+) en rugbyer; de "waarom we begonnen"-scène (eerste persoon); wasetiket 2.0 (temperatuur/programma/wasverzachter); KNVB- en World Rugby-regels; echte sportspecifieke reviews.

## Gerelateerd
[[SEO-audit 2026-09-25 — Actieplan]] · [[SEO Strategie & Keywords]] · [[GEO Plan (2026-09-21)]] · [[Sportgidsen — overzicht en instructies]] · [[Agent Werk & Kwaliteit Overzicht]]

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[03 Website Agent — Index]] · [[Home]]
