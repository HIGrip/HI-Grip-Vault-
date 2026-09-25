# Routine — SEO-regressiecheck (maandag)

> Promptbestand. De routine bevat alleen: "Lees en volg `04_Agent_Infrastructuur/Routines/SEO-regressiecheck.md` in de HÏ Grip-vault." Wijzig de werking hier.

Voer de wekelijkse technische SEO-regressiecheck uit voor www.higrip.nl.

## Rol
**De enige routine die de site technisch controleert.** De conversietest, Denzel en de Growth Radar lezen jouw uitkomst en doen deze check zelf niet. Dit is een controletaak, geen bouwtaak: je wijzigt geen thema-bestanden, pusht niets en maakt geen content. Een saai rapport is een goed rapport.

## Stap 1 — Lees eerst
1. `CLAUDE.md` en `00_Brand_Core/Feiten & Actuele Staat.md`. Hier haal je de actuele handles, thema-regels en claims vandaan. **Gebruik geen URL of ID uit je eigen kennis.**
2. `05_Research/_geheugen/seo-regressiecheck.md` en de vorige regressiecheck-notitie in `05_Research/`.
3. `05_Research/_backlog/ACTIEBACKLOG.md`: punten met `[regressie]` in de titel zijn van jou.

## Stap 2 — URL-lijst samenstellen (niet hardcoded)
- Haal `https://www.higrip.nl/sitemap.xml` en de sub-sitemaps op.
- Controleer altijd: de homepage, elke productpagina uit de sitemap, alle collecties, elke `/pages/gripsokken-*`-sportpagina, de blogindex en het nieuwste artikel, plus `/en/`.
- Vergelijk de lijst met die van vorige week (staat in je geheugen) en meld wat nieuw is of verdwenen.
- Oude handles uit het feitenbestand controleer je alleen op een correcte 301 met maximaal 1 stap.

## Stap 3 — Checks per URL
Haal de ruwe HTML op met curl. Plak de regeleindes aan elkaar vóór je grept, want de meta-tags in dit thema lopen over meerdere regels.
1. HTTP 200 en een responstijd onder 1,5 s.
2. Precies één niet-lege `<title>` en een niet-lege meta description.
3. Precies één `<h1>`.
4. De canonical wijst naar dezelfde URL op www.higrip.nl. `hreflang` is correct op de NL- en EN-varianten.
5. JSON-LD `@type`: overal `Organization` en `WebSite`; buiten de homepage ook `BreadcrumbList`; op productpagina's `Product`/`ProductGroup` + `Offer` (+ `FAQPage` als er een zichtbare FAQ staat); op collecties `ItemList`; op artikelen `Article`.
6. **Kritiek:** `aggregateRating` hoort er niet te staan zolang er geen zichtbare reviews op de pagina staan. Vind je hem toch, meld dat dan als eerste punt.
7. Tel `alt=""` op de homepage en meld het boven de 12.
8. **Tegenspraak met de feiten:** vergelijk de zichtbare prijzen, de verzenddrempel, de verzendbelofte en de retourtermijn met de "bevestigde waarde" in het feitenbestand. Meld elke afwijking.

## Stap 4 — Extra checks
- `shopify theme check`, alleen als de thema-map beschikbaar is (lokaal `C:\Users\Test\higrip-theme`). Bekende fouten die je niet meldt: JSONMissingBlock (Bundler), ImgWidthAndHeight, ParserBlockingScript. Vraagt de CLI om in te loggen, meld dat dan en sla de check over.
- **GA4** via `python 05_Research/_tools/google_data.py ga4` (lokaal mag ook `analytics-mcp`): sessies per kanaal over de laatste 7 dagen tegenover de 7 dagen daarvoor, het aantal key events (0 = de conversiemeting werkt nog niet) en het kanaal "AI Assistant" over 30 dagen. Filter het botverkeer (Direct uit de VS of China met minder dan 5% engagement) eruit of vermeld het expliciet.
- **PageSpeed Insights** (mobiel) voor de homepage, 1 collectie en 1 product: LCP, INP en CLS. Lukt dat niet (quotum), meld het dan.

## Stap 5 — Output
1. **Notitie** `05_Research/JJJJ-MM-DD-regressiecheck.md`: `bron: routine`, `routine: seo-regressiecheck`, `categorie: SEO`. Secties: "Afwijkingen" (genummerd, de ernstigste eerst, met URL, wat er mis is en de fix), "Ongewijzigd" (het aantal schone URL's), "Trend" (GA4 en CWV). Geen afwijkingen? Schrijf dan letterlijk "Geen afwijkingen deze week".
2. **Backlog:** elke afwijking als `### [ ] [regressie] …` onder P1, met Waarom / Waar / Wat / Gevonden op. Maximaal 5 per week. Stond een punt er vorige week al, werk dan die regel bij. Opgelost? Vink hem af met `[x]` en noteer "opgelost, bevestigd <datum>".
3. **Geheugen:** de URL-lijst van deze week en één regel per afwijking in `05_Research/_geheugen/seo-regressiecheck.md`.
4. **Feiten:** klopt een handle, ID of URL in het feitenbestand niet meer? Werk hem bij, met datum.
5. **Afronden:** procedure B, dan A3 (koppel aan de vorige regressiecheck), A4, A5 en A6.
6. **Melding** met het aantal afwijkingen.
