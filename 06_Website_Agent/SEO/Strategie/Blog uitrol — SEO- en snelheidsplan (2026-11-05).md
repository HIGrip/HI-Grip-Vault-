---
type: kennis
gebied: website-agent
bijgewerkt: 2026-11-05
---

# Blog uitrol: 2 blogs per week — SEO-plan en page speed-plan (5-11-2026)

> Voorstel van Claude op verzoek van Lars. Niets gepubliceerd, niets in Shopify of het thema gewijzigd. Bouwt voort op [[Blog SEO-plan (2026-10-02)]] en [[2026-10-12-blogs-stappenplan]]. Feiten: [[Feiten & Actuele Staat]].

## 1. Waar staan we (live gemeten 5-11)

- **3 artikelen live** in de sitemap: `wat-zijn-gripsokken`, `hoe-zorg-ik-voor-mijn-gripsokken`, `de-wetenschap-achter-gripsokken`. Alle drie vandaag bijgewerkt. De oude 23 zijn dus al opgeruimd. Daarnaast staan `/blogs/trends`, `/blogs/hi-grip` en `/blogs/intern` als indexpagina's in de sitemap.
- Twee concepten klaar in `02_Dashboard/_uitvoer/2026-10-12-blogs/`: *welke maat gripsokken* en *voet glijdt in schoen*.
- **Beslissing die afwijkt van het plan van 2-10:** de hoofdgids leeft nu op `wat-zijn-gripsokken`, het plan zei `waarom-hi-grip-gripsokken` (daar zat de positie). `[CHECK]` Lars: bewust gekozen? Zo ja, 301 van `waarom-hi-grip-gripsokken` naar `wat-zijn-gripsokken` en let op dat de oude vertoningen (586 in 90 dagen) mee verhuizen. Ik heb niet kunnen zien of die redirect al staat.

### Fouten op de live blogpost (gemeten op `wat-zijn-gripsokken`)

| # | Wat | Gevolg | Fix |
|---|---|---|---|
| 1 | `articleBody` in BlogPosting-schema is leeg ("None") | Geen tekst voor Google/AI | Template: `article.content \| strip_html` |
| 2 | Schema-`description` is een afgekapt stuk uit de tekst ("...") en niet de excerpt | Slechte snippet | Excerpt invullen in Shopify en in schema gebruiken |
| 3 | Auteur = persoonsnaam (Timo Heijligers) | Besluit 2-10 was "Team HÏ Grip" | Author-veld per artikel op Team HÏ Grip, of Organization-auteur |
| 4 | Publisher heeft geen `logo` | Mist in rich result-eisen | Logo toevoegen |
| 5 | `og:image` begint met `http://` | Mixed content, social preview | https via `image_url` |
| 6 | Titel begint met "HÏ Grip \|" en meta gebruikt "u" ("komt u alles te weten") | Zwakke titel, tegen merkregel "je" | Titel: zoekwoord vooraan, "\| HÏ Grip" achteraan; meta 120–155 tekens in je-vorm |
| 7 | `/blogs/intern` staat in de sitemap | Leeg/ongewenst | Verwijderen of noindex (besluit 2-10: weg + 301) |

Nummers 1, 2, 4 en 5 los je één keer op in de blogtemplate (`main-blog-post.liquid`), dan gelden ze voor elk nieuw artikel. Dat doen we **vóór** blog 3.

## 2. SEO-plan

### Wat we aanpakken
Elke blog beantwoordt één vraag die mensen echt stellen. De sportpagina's (tennis, padel, voetbal, rugby) en de productpagina's blijven de plekken om te kopen; een blog heeft nooit het hoofdkeyword van een sportpagina (regel uit 2-10). Hoofdkeyword blijft "gripsokken".

### SERP-check die ik vandaag deed (standard search, geen zoekvolume-data)
- **"Welke maat gripsokken kiezen":** de resultaten zijn vooral Decathlon-categoriepagina's en een bol.com-listing. Geen gerichte maatgids van een merk gevonden. Kans, maar zoekvolume onbekend. Het concept sluit aan: sokmaat = schoenmaat, kies de grotere bij twijfel.
- **"Voet glijdt in schoen padel/tennis":** resultaten zijn schoenwinkels (padelshop.com, padelproshop.com), geen onafhankelijke uitleg met sok als oplossing. Kans. Let op: de winkels beweren dat glijden tot enkelblessures leidt; die claim niet overnemen (claim-discipline hieronder).
- Controleer de SERP nog één keer met het echte zoekscherm vóór je publiceert, WebSearch is een samenvatting.

### Publicatiekalender (2 per week, di en vr 09:00)

| Week | Datum | Blog | Opmerking |
|---|---|---|---|
| 1 | di 10-11 / vr 13-11 | **1.** Welke maat gripsokken (concept klaar) · **2.** Voet glijdt in je schoen (concept klaar) | Template-fixes eerst (§1). Nu publiceren mag al vandaag/morgen, fixes dan achteraf; schema-fix is wel snel. |
| 2 | 17-11 / 20-11 | **3.** Zijn gripsokken toegestaan bij de KNVB? · **4.** Gripsokken dragen met scheenbeschermers en afgeknipte kous | KNVB-regel eerst bij de bron checken |
| 3 | 24-11 / 27-11 | **5.** Gripsokken vs gewone sokken vs tape (tabel) · **6.** Padelsokken kiezen | #6 pas als `/pages/gripsokken-voor-padel` weer 700+ woorden heeft `[CHECK]` |
| 4 | 1-12 / 4-12 | **7.** Tennis vs padel: beweging en ondergrond · **8.** Blaren bij tennis en padel | Bridge-post + pijnpunt |
| 5 | 8-12 / 11-12 | **9.** Mag je gripsokken dragen bij rugby? · **10.** Afgeknipte kousen bij amateurvoetbal (herschrijven met keyword) | #9 pas na `/pages/gripsokken-voor-rugby` en echte rugbyfoto `[CHECK]` |
| 6 | 15-12+ | Meten + volgende serie | Zie §4 |

Wijkt de kalender af van het plan van 2-10 (volgorde rugby eerst)? Ja: rugby heeft nog geen pagina, dus verschoven. Volgorde in het plan van 12-10 had "beste gripsokken voetbal": **niet schrijven** (besluit Lars 2-10).

Voorraad: wacht 2.0 zwart en wit op negatieve voorraad (−43/−34 op 12-10, `[CHECK]` live)? CTA's naar 2.0 alleen als de pagina's kopen toelaten.

### Vaste opbouw per blog (uit stappenplan 12-10, bevestigd)
1. Titel ≤ 60 tekens, zoekwoord vooraan, "| HÏ Grip" achteraan. Meta 120–155 tekens.
2. H1 = de vraag.
3. Direct antwoord in de eerste 40–60 woorden (de template maakt dat stuk al een uitgelicht blok).
4. H2's als vragen, korte zinnen, "je".
5. Elk getal met bron; minstens 1 eigen element (foto van een echte wedstrijd, quote, eigen test).
6. Tabel waar het kan, FAQ van 3–5 vragen onderaan, en dezelfde FAQ als `FAQPage` alleen als de zichtbare tekst identiek is.
7. Links: 1 sportpagina, 1 product (2.0 zwart of wit), 1–2 andere artikelen. Ankers beschrijvend. CTA naar `/collections/gripsokken`, nooit `/collections/all`.
8. Lengte: hoofdgids 1.200–1.600 woorden, ondersteunend 800–1.200.

### Op de dag van publiceren (checklist, 15 min)
- [ ] Excerpt ingevuld (= meta-description in schema)
- [ ] Auteur = Team HÏ Grip, afbeelding alt-tekst in het Nederlands, bestandsnaam beschrijvend (geen `ChatGPT_Image…`)
- [ ] Twee interne links **naar** de nieuwe blog vanuit bestaande pagina's (hoofdgids en de passende sportpagina)
- [ ] Zichtbare "laatst bijgewerkt"-datum
- [ ] Zoek in Search Console op de URL en vraag indexering aan
- [ ] Controleer in de EN-versie `/en/…`: onvertaald? Laten staan of uit hreflang `[CHECK]` (open besluit 8)
- [ ] Buffer-post (organisch) en mail: nieuwsbrief elke 3 weken verzamelt de blogs van die periode

### Claim-discipline
Gebruik de formuleringsregel uit [[Feiten & Actuele Staat]]: "Wetenschappelijk aangetoond: gripsokken verhogen de statische wrijvingscoëfficiënt van 0,60 naar 1,17, 95% meer grip (Apps et al. 2022)". Nooit "HÏ Grip getest". Geen "voorkomt blessures", wel "minder schuiven in je schoen". Friedl 2023 alleen +9,3% bij afremmen. Verzending €4,50, gratis vanaf €35, binnen 1 werkdag verzonden, retour 30 dagen. Alleen Trustpilot 4,6 met bron, nooit als schema-rating.

## 3. Page speed-plan voor blogs

### Meetstand
- **Geen verse meting.** Lighthouse draaide vandaag niet door en de gratis PageSpeed-API geeft "quota exceeded". Cijfers hieronder zijn van de audit van **25-9** (lab, mobiel) en gelden voor andere paginatypes; de blogpagina is nog niet los gemeten.
- Wel gemeten vandaag: de HTML van een blogpost is **215 KB**, TTFB 0,68 s vanaf mijn verbinding, **37 externe scripts** en 19 afbeeldingen in de HTML (waarvan 5+ betaal-iconen in de footer).
- Baseline 25-9 (mobiel): LCP **5,5–7,8 s** op alle geteste pagina's (doel ≤ 2,5 s), CLS goed, TTFB goed. Oorzaak LCP: afbeelding laat ontdekt en zwaar, plus 2,5–3,1 s JS van apps.

### Eerst meten (10 min, gratis)
1. **Search Console → Core Web Vitals (mobiel)**: echte veldcijfers, zie of blogs onder "slecht" vallen.
2. **PageSpeed Insights handmatig** op `wat-zijn-gripsokken`, daarna op elke nieuwe blog na publicatie. Noteer LCP, INP, CLS.
3. Zet een `GOOGLE_API_KEY` in de SEO-plugin zodat CrUX en PSI automatisch werken (nu geblokkeerd).

### Fixes in volgorde van effect
| # | Fix | Waar | Verwachting |
|---|---|---|---|
| 1 | **Featured image als LCP behandelen:** `fetchpriority="high"`, geen lazy-load, `sizes` passend bij 72rem breedte (max 1152 px), niet `width=2400` als hoofdbron. Nu staat de eerste afbeelding op `width=2400` in `src`. | `_blog-post-featured-image.liquid` | Grootste winst op LCP |
| 2 | **Beeldformaat en -gewicht:** uploads max 2000 px lange zijde, uitgelichte afbeelding ≤ 120 KB, overige ≤ 80 KB, WebP (of AVIF) via `image_url` met `format`. Bestanden `IMG_xxxx.jpg` vervangen door beschrijvende namen. | Upload-regel + template | −30–50% bytes |
| 3 | **Afbeeldingen in de tekst:** alle onder de vouw `loading="lazy"`, altijd `width` en `height` (anders CLS), geen afbeelding groter dan de 56rem leeskolom. | Blog-template + schrijfstandaard | CLS blijft < 0,1 |
| 4 | **App-scripts van blogpagina's halen:** Ecomsend-popup (265 KB, ~1,4 s hoofdthread), `block-cart.js` (forced reflow, 680 ms op productpagina), `fd-product-groups-ext.js` (67 KB). Laden alleen waar nodig, popup uitgesteld tot interactie of na 10 s. | Shopify admin → app-embeds, thema-editor | Grootste winst op INP/TBT |
| 5 | **Checkout-prefetch en accelerated-checkout CSS** niet op blogpagina's. | Thema | Minder JS op pagina's zonder koop |
| 6 | **Render-blocking CSS:** `base.css`, `compiled_assets/styles.css`, `hi-sale-price.css` — kritieke CSS inline voor de hero, rest uitstellen. | Thema | Lagere FCP |
| 7 | **Blogstijl blijft in `{% stylesheet %}`** (staat al zo in `main-blog-post.liquid`) — geen extra CSS-bestand voor blogs; check dat het ~7 KB blijft. | Template | Geen extra request |
| 8 | **Embeds:** geen YouTube-iframe in de eerste scherm; YouTube als preview-afbeelding met klik (facade). Geen Instagram-embeds. | Schrijfstandaard | Voorkomt 500 KB+ aan third-party |
| 9 | **Tabellen op mobiel:** `overflow-x: auto` in een wrapper zodat de brede maattabel de pagina niet breder maakt. | Template-CSS | Geen horizontale scroll |
| 10 | **Blogindex (`/blogs/hi-grip`):** kaartafbeeldingen 800 px breed, `loading="lazy"` buiten de eerste rij, 12 per pagina. | `main-blog.liquid` / `blog-posts-list` | Snelle lijstpagina |

### Budget per blog (pas verplicht vanaf blog 3)
- Hele pagina bij eerste laad ≤ 1,5 MB, afbeeldingen in de tekst samen ≤ 400 KB.
- LCP-doel mobiel ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1 (75e percentiel, veld).
- Falen op één van drie? Niet de volgende blog publiceren voordat de oorzaak is gevonden.

## 4. Meten en bijsturen
- Na **2, 4 en 8 weken**: Search Console per blog-URL (`google_data.py pagina --dagen 28`), vergelijk met de nulmeting in [[2026-10-12-blogs-stappenplan]] (1.815 vertoningen, 23 klikken in 90 dagen op 23 blogs).
- Kijk per blog naar: geïndexeerd ja/nee, positie op het hoofdkeyword, CTR, klikken naar sportpagina/product (GA4 `476032345`).
- Heeft een blog na 6 weken < 20 vertoningen? Titel en H1 herzien, intern meer links, niet direct een nieuwe schrijven.
- Her-audit van de hele site rond 15-12 (drift-baseline vastleggen na de template-fixes).

## 4b. Uitgevoerd op 5-11 (na akkoord Lars)

- Besluiten Lars: hoofdgids blijft `wat-zijn-gripsokken`; auteur = Team HÏ Grip; EN-blogs worden vertaald (niet uit hreflang).
- **Live:** 301 `/blogs/hi-grip/waarom-hi-grip-gripsokken` → `/blogs/hi-grip/wat-zijn-gripsokken`, en dezelfde onder `/en/`. Gecontroleerd met curl.
- **Werkthema 204029296967** (alleen unpublished; niet live): `snippets/hi-blogposting-schema.liquid` (articleBody + wordCount, description zonder "…", auteur Organization "Team HÏ Grip", publisher-logo) en `snippets/meta-tags.liquid` (og:image https, 1200 breed). Gecontroleerd in preview: geen Liquid-errors.
- **Nog te doen:** `templates/article.json` rendert de oude sectie `main-blog-post` én de nieuwe `hg-artikel-*` secties. Gevolg: tekst, H1 en BlogPosting-schema staan 2×. Eén van beide verwijderen.
- Titel/meta-teksten ("HÏ Grip |" voorop, "u") staan in het SEO-veld per artikel in Shopify, niet in het thema.

## 5. Open voor Lars
1. Hoofdgids-slug: blijft `wat-zijn-gripsokken` of terug naar `waarom-hi-grip-gripsokken`? En staat de 301 al?
2. Auteur: Team HÏ Grip (besluit 2-10) of Timo Heijligers (staat nu live)?
3. EN-blogs vertalen of uit hreflang?
4. Is `/pages/gripsokken-voor-padel` hersteld en `/pages/gripsokken-voor-rugby` gebouwd? Bepaalt week 3 en 5.
5. Mag Claude de template-fixes (§1, nrs 1–5) in het werkthema doen? Werkthema-ID: `shopify theme list` draaien, zie [[Technische Procedures]]. Niet live pushen zonder jouw opdracht.
6. Moeten blog 1 en 2 nog 301'en/H1 meekrijgen vanuit oude pagina's? Alleen als er oude URL's voor bestaan.

> Map: [[06 Website Agent — Index]]
