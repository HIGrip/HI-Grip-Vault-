---
id: 2026-09-15-regressiecheck
titel: "SEO-regressiecheck — 15 september 2026"
datum: 2026-09-15
bron: routine
routine: "seo-regressiecheck"
categorie: SEO
status: bekeken
prioriteit: P1
samenvatting: "Eerste wekelijkse controle: 5 afwijkingen, grotendeels terug te voeren op het niet-gepushte thema (schema's ontbreken op alle 8 URL's), oude product-URL's zonder 301, GA4 zonder key event, 2× H1 en een lege meta description op /collections/all. Direct-verkeer sprong van 15 naar 83 sessies."
gerelateerd: [2026-09-15-seo-audit, 2026-09-14-weekoverzicht]
vervangt: []
bronbestand: "C:\\Users\\Test\\.claude\\research\\growth-radar\\rapporten\\regressiecheck-2026-09-15.md"
deadline: ""
---
# SEO-regressiecheck — 15 september 2026

## In het kort

Controle-run, geen onderzoek. De kritieke check (geen `aggregateRating` op enige pagina) is schoon. Alle vijf afwijkingen staan als `[regressie]`-punten op P1 in de growth-radar-backlog.

## Bevindingen

Eerste run van deze routine, dus zonder voorgaande week om tegen af te zetten. Referentiepunt is de audit van 15 september 2026 ([[project_higrip_seo]]) en de daar beschreven verwachte staat.

### Afwijkingen

1. **Oude productpagina's kannibaliseren nog steeds het hoofdkeyword.**
   URL: https://www.higrip.nl/products/performance-grip-socks-2-0-zwart en `-wit`
   Wat: beide geven nog HTTP 200 in plaats van een 301 naar `/products/hi-grip-gripsokken-1`.
   Fix: 301-redirects instellen in Shopify admin → URL-omleidingen.

2. **GA4-conversiemeting staat nog uit.** `keyEvents = 0` op elk kanaal, deze week en vorige week.
   URL: n.v.t. (GA4-property 476032345)
   Wat: `purchase` is niet gemarkeerd als key event, dus elke CRO-uitspraak blijft ongefundeerd.
   Fix: in GA4-admin → Events → `purchase` markeren als key event.

3. **De thema-wijzigingen met SEO-schema staan nog steeds niet live.** Dit is de wortel van vrijwel alle schema-afwijkingen hieronder.
   URL: alle 8 gecontroleerde URL's + https://www.higrip.nl/pages/gripsokken-voetbal
   Wat: `snippets/hi-seo-schema.liquid` (WebSite/BreadcrumbList/ItemList) en de herschreven `snippets/product-schema.liquid` (FAQPage) staan lokaal klaar in `C:\Users\Test\higrip-theme` maar zijn nog niet gepusht. Gevolg: `WebSite` ontbreekt op alle 8 URL's, `BreadcrumbList` op 6 van de 8, `ItemList` op beide collectiepagina's, `FAQPage` op de productpagina — en `/pages/gripsokken-voetbal` geeft nog 404.
   Fix: eerst `shopify auth login` (device-code flow), dan pushen — thema-bestanden en `page.gripsokken-voetbal.json` in aparte pushes zoals in het projectgeheugen genoteerd.

4. **Homepage heeft nog steeds 2× `<h1>`.**
   URL: https://www.higrip.nl/
   Wat: een `visually-hidden` H1 ("HÏ Grip") naast de zichtbare hero-H1 (`g2-hero__title`).
   Fix: de visually-hidden H1 naar een `<span>` of `<p>` wijzigen, of de hero-titel als enige H1 laten staan.

5. **`/collections/all` heeft nog geen meta description.**
   URL: https://www.higrip.nl/collections/all
   Wat: `<meta name="description">` is leeg/afwezig.
   Fix: beschrijving toevoegen via Shopify admin → SEO-instellingen van de collectiepagina.

### Ongewijzigd

0 van de 8 gecontroleerde URL's was volledig schoon op alle 8 checks — maar de kern zit in punt 3 hierboven: één ongepushte thema-wijziging verklaart het merendeel. Los daarvan: alle 8 URL's laadden binnen 0,53s (ruim onder de 1,5s-grens), elk had precies één niet-lege `<title>` en een correcte canonical naar zichzelf op www.higrip.nl, en **geen enkele pagina bevat een `aggregateRating`** — de kritieke check is dus schoon, het risico dat in de audit is opgelost blijft opgelost. `shopify theme check` gaf geen nieuwe fouten buiten de drie bekende, genegeerde types (JSONMissingBlock/Bundler, ImgWidthAndHeight, ParserBlockingScript). Homepage: 12 van 29 afbeeldingen met `alt=""` — precies op de meldgrens, niet erboven.

### Trend

Sessies per kanaal, laatste 7 dagen vs. de 7 dagen daarvoor (GA4-property 476032345):

| Kanaal | Deze week | Vorige week |
|---|---|---|
| Direct | 83 | 15 |
| Organic Search | 40 | 30 |
| Organic Social | 10 | 11 |
| Referral | 6 | 3 |
| Unassigned | 3 | 3 |
| AI Assistant | 1 | 1 |

Grote sprong in Direct-verkeer (15 → 83) — mogelijk een campagne of e-mail; niet nader onderzocht, dat is werk voor de Growth Radar-routine, niet voor deze controle.

AI Assistant-kanaal, laatste 30 dagen: **2 sessies** (ongewijzigd t.o.v. de 90-dagen-meting van 2 in de audit van 15 september — geen recente groei).

## Acties

_Acties uit dit rapport staan in de growth-radar-backlog (`ACTIEBACKLOG.md`) en komen via het dashboard onder NU AANDACHT binnen — hier niet gedupliceerd._

## Bronnen

- Origineel: `C:\Users\Test\.claude\research\growth-radar\rapporten\regressiecheck-2026-09-15.md`
- Routine: `C:\Users\Test\.claude\scheduled-tasks\higrip-seo-regressiecheck\SKILL.md`

## Aantekeningen
