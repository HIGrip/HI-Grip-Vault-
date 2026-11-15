---
id: 2026-11-09-seo-conversietest-run-7
titel: "SEO- en conversietest run 7 — auditblok D (conversie), Waardebalk-concept riskeert verloren te gaan"
kerntitel: "Waardebalk-concept riskeert verloren te gaan; iDEAL/Wero ontbreken op de productpagina"
datum: 2026-11-09
bron: routine
routine: "seo-conversietest"
categorie: CRO
status: nieuw
prioriteit: P2
samenvatting: "Het Waardebalk-concept (gratis-verzenddrempel + prijs per paar, gebouwd in oktober) staat alleen nog in het losstaande, verlaten testthema 200249901383 — niet in de huidige unpublished kopie van het live thema — en loopt zo het risico stilletjes te verdwijnen na de volledige thema-wissel van begin november. De diepe audit van blok D (conversie) vindt één nieuwe bevinding: iDEAL en Wero ontbreken in de betaalicoon-rij op de productpagina. RUN 2 (SEO-titels/meta's, live sinds 11 okt) laat voor /collections/gripsokken een eerste positief signaal zien; sessies en omzet zijn deze week ingestort doordat de betaalde social-campagne is afgelopen, niet door SEO."
gerelateerd: [2026-11-09-regressiecheck, 2026-11-09-search-console, 2026-10-19-seo-conversietest-run-5]
vervangt: []
bronbestand: "https://admin.shopify.com/store/raqds3-tb/pages/168287895879"
deadline: ""
---
# SEO- en conversietest run 7 — auditblok D (conversie), Waardebalk-concept riskeert verloren te gaan

> Map: [[Waar staat wat]]

## In het kort

Zevende run van de wekelijkse SEO- en conversietest (modus CONCEPT: niets live gewijzigd). Auditblok deze run: **D — conversie** (rotatie B→C→D→B, vorige run blok C op 2 nov; volgende run weer blok B). Belangrijkste nieuws: het thema-landschap is begin november volledig gewisseld (het MAIN-thema is nu een andere lijn, 203954520391, bijgewerkt vanaf "Live website 04-11-2026") en het **Waardebalk-concept** (`hi-pack-value-bar.liquid`, gebouwd in RUN 3/4) staat alleen nog in het oude, losstaande testthema `200249901383` — niet in de huidige unpublished kopie van het live thema (`204029296967`). Zonder actie gaat dit werk verloren zodra dat oude testthema ooit gepubliceerd wordt of simpelweg vergeten raakt. De diepe audit van blok D (conversie) levert één nieuwe bevinding op: **iDEAL en Wero ontbreken** in de betaalicoon-rij op de productpagina (alleen Amex, Apple Pay, Google Pay, Klarna, Maestro, PayPal, Visa staan er) — voor een Nederlandse webshop een gemiste trust-cue, en buiten de grens van deze routine (betaalinstellingen). Van de drie lopende testplannen is RUN 5 (productType + GTIN op de 2.0-varianten) inmiddels bevestigd live — op 2 nov nog gemeld als niet gepubliceerd, dat bleek achterhaald — en RUN 2 (SEO-titels/meta's) laat voor `/collections/gripsokken` een eerste positief signaal zien (positie 12,1→7,6, CTR 0%→2,94%, zie ook de Search Console-notitie van vandaag). Sessies en omzet zijn deze week ingestort (396 sessies/€0 omzet, vorige week 671/€195,80) door het aflopen van de betaalde social-campagne — bevestigd door zowel Shopify Analytics als GA4, niet door een SEO-probleem.

## Kerncijfers

- **396** · sessies deze week · vorige week 671 (−41,0%), nulmeting 23 sep: 346
- **€0** · omzet deze week · vorige week €195,80, nulmeting €72,74
- **0** · orders deze week · vorige week 4, nulmeting 3
- **0%** · conversieratio deze week · vorige week 0,45%

## Acties

- [ ] P2 · Besluit: staat iDEAL actief als betaalmethode in Shopify Payments, en waarom ontbreekt het icoon in de betaalrij op de productpagina (naast Amex, Apple Pay, Google Pay, Klarna, Maestro, PayPal, Visa)?
- [ ] P2 · [conversietest] Waardebalk-blok (`hi-pack-value-bar.liquid`) herbouwen in het huidige unpublished thema (204029296967) vóórdat het oude testthema 200249901383 ooit gepubliceerd wordt of in de vergetelheid raakt
- [ ] P3 · [conversietest] Terugbetalingsbeleid-conceptteksten (logboek, sectie 8.1) controleren en in Shopify plakken — bevat een `[CHECK]` die wacht op de iDEAL-beslissing hierboven

## Bevindingen

### Meten

**Shopify Analytics** (`run-analytics-query`), 7 dagen (3–9 nov) tegen de 7 daarvoor (27 okt–2 nov) en de nulmeting van 23 september:

| KPI | Deze week | Vorige week | Nulmeting | Verschil (w/w) |
|---|---|---|---|---|
| Sessies | 396 | 671 | 346 | −41,0% |
| Add-to-cart sessies | 3 | 12 | — | −75,0% |
| Bereikte checkout | 1 | 6 | — | −83,3% |
| Orders | 0 | 4 | 3 | −100% |
| Omzet | €0 | €195,80 | €72,74 | −100% |
| Conversieratio | 0% | 0,45% | — | — |

**GA4** (dezelfde funnel, via `python3 02_Dashboard/_tools/google_data.py ga4 --dagen 7`): Paid Social 26 sessies (vorige 139), key events 0 (vorige 2), omzet €0 (vorige €105,90) — bevestigt onafhankelijk hetzelfde beeld als Shopify Analytics. Dit beantwoordt de open vraag uit de regressiecheck van vandaag ([[2026-11-09-regressiecheck]]): **GA4's 0 key events deze week is geen hernieuwd meetgat, maar een echte nulweek** (Shopify Analytics bevestigt 0 orders), veroorzaakt door het aflopen van de betaalde social-campagne (Paid Social −81%), niet door een trackingprobleem.

**Search Console** (hergebruik van de meting van vandaag, [[2026-11-09-search-console]]): `/collections/gripsokken` (door RUN 2 aangepast) verbetert in positie van 12,1 naar 7,6; de twee 2.0-productpagina's blijven op 0-1% CTR, te vroeg voor een conclusie.

**Let op venster-verschil:** Shopify-sessies tellen t/m vandaag, GA4 t/m gisteren, Search Console t/m vrijdag — niet als gelijk venster naast elkaar zetten; bij zo weinig sessies deze week trekken we geen harde conclusies uit kleine verschillen.

### Audit — blok D: conversie (diep)

- **Productpagina — sterren, USP-balk, bestelknop mobiel, bundels, cross-sell:** geen nieuwe bevindingen, alles zoals eerder gecontroleerd (blok D liep al eerder mee op 12 okt, destijds zonder nieuwe punten).
- **Maatbereik:** blijft tegenstrijdig tussen de twee productgeneraties (34–39/40–46 vs. 35–38/39–42/43–47) — bekend, geen nieuwe actie; **géén aparte maatgids-pagina voorstellen** (afgewezen door Lars op 28-9).
- **iDEAL | Wero:** **nieuw.** De betaalicoon-rij op de productpagina toont Amex, Apple Pay, Google Pay, Klarna, Maestro, PayPal en Visa — geen iDEAL, geen Wero. Voor een Nederlandse webshop is iDEAL normaal de meest gebruikte betaalmethode; het ontbreken van het icoon (of van de methode zelf) is een gemiste vertrouwenscue op het conversiemoment. Dit valt buiten de grens van deze routine (betaalinstellingen zijn mensenwerk) — zie Acties.
- **Collectiepagina's, zakelijk-pagina, FAQ:** geen nieuwe bevindingen.

Volgende run: **blok B (producten & collecties)**.

### Bouwen

Eén conceptitem toegevoegd aan het logboek (`seo-routine-logboek`, sectie 8.1): SEO-titel en meta description voor `/pages/terugbetalingsbeleid` (sluit het al openstaande backlogpunt `backlog#c51a9579` — ontbrekende meta description — af naar concrete tekst):
- Titel: "Betalingsbeleid – iDEAL, Klarna & meer | HÏ Grip" (47 tekens)
- Meta description: 143 tekens, vat de beschikbare betaalmethodes samen
- **`[CHECK]`**: de tekst gaat ervan uit dat iDEAL een actieve betaalmethode is — dat is nog niet bevestigd (zie de nieuwe iDEAL/Wero-bevinding boven). Niet publiceren vóór die vraag beantwoord is.
- Testplan: KPI = CTR/vertoningen in Search Console voor `/pages/terugbetalingsbeleid`, evaluatie 4-8 weken na publicatie.

Geen nieuwe thema-sectie gebouwd deze run: er was geen duidelijk hoog-impact, laag-risico themawijziging voorhanden die niet al als mensenwerk (Shopify-instellingen) in de backlog stond, en het risico rond het verlaten testthema (zie hieronder) had voorrang als bevinding.

### Evalueren

| Item | Status | Toelichting |
|---|---|---|
| Waardebalk (gratis-verzenddrempel + prijs per paar) | **Te vroeg, + nieuw risico** | Bestaat alleen nog in het oude, losstaande testthema `200249901383` ("SEO TEST"), niet in de huidige unpublished kopie van het live thema (`204029296967`). Het MAIN-thema is sinds ~4 nov volledig vervangen door een andere lijn (`203954520391`). Zonder herbouw in het huidige testthema gaat dit concept stilletjes verloren. |
| RUN 2: SEO-titels/meta's, collectiebeschrijving, alt-teksten (live sinds 11 okt) | **Werkt (voorlopig) voor `/collections/gripsokken`** | Positie 12,1 → 7,6, CTR 0% → 2,94% (zie [[2026-11-09-search-console]]). Voor de 2.0-productpagina's nog **te vroeg/te weinig data** (CTR nog 0-1%). |
| RUN 5: productType "Gripsokken" + GTIN op de 2.0-varianten | **Bleek al live** (bevestigd via Shopify Admin API, 9 nov) — op 2 nov nog gemeld als niet gepubliceerd; dat was achterhaald. Te vroeg voor SEO-evaluatie; volgende keer checken op Merchant Center-geschiktheid (zodra dat gekoppeld is, zie de backlinks-notitie). |

## Wat niet lukte

Niets structureel. Het thema-rolvraagstuk (zie Bouwen/Evalueren) gaf geen schrijfprobleem — er is alleen gelezen en vergeleken, niets naar een thema geschreven.

## Bronnen

- Shopify Analytics (`run-analytics-query`), 9 november 2026.
- `python3 02_Dashboard/_tools/google_data.py ga4 --dagen 7`.
- Shopify-thema's: `200249901383` ("SEO TEST", oud, losstaand), `204029296967` (huidige unpublished kopie), `203954520391` (huidig MAIN) — via Shopify Admin API.
- [[2026-11-09-regressiecheck]] en [[2026-11-09-search-console]] (dezelfde dag, GA4- en Search Console-kant).
- Logboek: `seo-routine-logboek` (https://admin.shopify.com/store/raqds3-tb/pages/168287895879), sectie 8.1.

## Aantekeningen
