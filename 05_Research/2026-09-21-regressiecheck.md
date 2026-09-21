---
id: 2026-09-21-regressiecheck
titel: "SEO-regressiecheck — 21 september 2026"
datum: 2026-09-21
bron: routine
routine: "seo-regressiecheck"
categorie: SEO
status: nieuw
prioriteit: P1
samenvatting: "Twee backlogpunten opgelost sinds vorige week (oude product-URL's redirecten nu, homepage heeft nog maar 1 H1), maar het SEO-schema blijkt slechts gedeeltelijk gepusht (WebSite/ItemList/FAQPage missen nog op specifieke pagina's) en een nieuwe /en/-sectie heeft een keyword-loze title. GA4 kon deze week niet gecontroleerd worden door een tooling-storing."
gerelateerd: [2026-09-15-regressiecheck, 2026-09-15-seo-audit, 2026-09-21-growth-radar-seo-technisch]
vervangt: []
bronbestand: "C:\\Users\\Test\\.claude\\research\\growth-radar\\rapporten\\regressiecheck-2026-09-21.md"
deadline: ""
---
# SEO-regressiecheck — 21 september 2026

## In het kort

Controle-run, geen onderzoek. De kritieke check (geen `aggregateRating` op enige pagina) blijft schoon. Twee eerder gemelde regressiepunten zijn deze week opgelost; één bestaand punt is bijgewerkt (gedeeltelijke voortgang) en één nieuw punt toegevoegd. GA4 was dit keer niet bereikbaar.

## Bevindingen

Referentiepunt: de audit van 15 september 2026 ([[2026-09-15-seo-audit]]) en de regressiecheck van 15 september ([[2026-09-15-regressiecheck]]). De Growth Radar-routine draaide dit keer vóór deze check en had de productpagina-URL-wijziging ([[2026-09-21-growth-radar-seo-technisch]]) al in de backlog verwerkt — hier alleen technisch bevestigd, niet dubbel toegevoegd.

### Afwijkingen

1. **GA4 kon deze week niet gecontroleerd worden.** `analytics-mcp` gaf een verbindings-timeout (30s) bij elke poging. Sessies per kanaal, de AI Assistant-trend en de status van `keyEvents` zijn dus niet geverifieerd — geen aanname dat de situatie ongewijzigd is.

2. **SEO-schema staat gedeeltelijk live, nog niet compleet.** Sinds 15 september is `hi-seo-schema.liquid` kennelijk deels gepusht: `Organization` en `BreadcrumbList` staan nu overal waar verwacht (vorige week ontbrak `BreadcrumbList` nog op 6 van de 8 URL's). Maar `WebSite` staat alleen op de homepage en de padel-pagina, `ItemList` ontbreekt nog op beide collectiepagina's, `FAQPage` ontbreekt nog op de productpagina, en `/pages/gripsokken-voetbal` geeft nog steeds 404.

3. **Geen `aggregateRating` gevonden** op één van de zeven bereikbare pagina's — kritieke check blijft schoon.

4. **Productpagina-URL-wijziging technisch bevestigd** (al gemeld door Growth Radar): `/products/hi-grip-gripsokken-1` en de twee oude duplicaten redirecten (301) naar de nieuwe handle `/products/performance-gripsokken`. Zelfde patroon bij `/pages/gripsokken-padel` → `/pages/gripsokken-voor-padel`.

5. **Nieuwe `/en/`-sitemapsectie ontdekt, met een zwakke title-tag.** Vier extra `/en/`-sub-sitemaps (products, pages, collections, blogs) staan sinds deze week in `sitemap.xml` — een Engelse marktuitbreiding die nergens in het projectgeheugen staat. `hreflang` en canonical kloppen, maar de EN-title is enkel `HÏ Grip` — hetzelfde probleem dat de NL-homepage vóór 15 september had.

6. **`/collections/all` heeft nog steeds geen meta description.** Ongewijzigd sinds 15 september.

### Ongewijzigd / opgelost

- Homepage heeft nu precies 1 `<h1>` (was 2×) — opgelost.
- Alle 7 bereikbare URL's laadden in 0,29–0,70s, elk met precies één niet-lege `<title>` en een kloppende canonical.
- Homepage: 9 afbeeldingen met `alt=""` (vorige week 12) — onder de meldgrens.
- `shopify theme check`: 7 fouten, alle binnen de drie bekende, genegeerde typen. Geen nieuwe foutsoort.

## Acties

_Acties uit dit rapport staan in de growth-radar-backlog (`ACTIEBACKLOG.md`) en komen via het dashboard binnen — hier niet gedupliceerd._

## Bronnen

- Origineel: `C:\Users\Test\.claude\research\growth-radar\rapporten\regressiecheck-2026-09-21.md`
- Routine: `C:\Users\Test\.claude\scheduled-tasks\higrip-seo-regressiecheck\SKILL.md`

## Aantekeningen
