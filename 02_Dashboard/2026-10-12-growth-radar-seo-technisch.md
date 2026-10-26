---
id: 2026-10-12-growth-radar-seo-technisch
titel: "Growth Radar — SEO-techniek als nieuws, 12 oktober 2026"
kerntitel: "Shopify-scripttags kunnen sinds 1 okt 2026 niet meer aangemaakt of bijgewerkt worden"
datum: 2026-10-12
bron: routine
routine: "growth-radar"
categorie: Techniek
status: nieuw
prioriteit: P2
samenvatting: "Shopify's eigen deprecation-documentatie bevestigt dat apps sinds 1 oktober 2026 geen script tags meer kunnen aanmaken of bijwerken; bestaande tags blijven draaien tot de storefront-injectie zelf stopt op 1 maart 2027. Voor higrip.nl verscherpt dit het al openstaande backlogpunt over Trustpilot/Bundler-scripttags: niet alleen checken of ze nog vuren, maar ook of ze stilzwijgend niet meer te verversen zijn."
gerelateerd: [2026-10-05-growth-radar-seo-technisch, 2026-09-28-growth-radar-seo-technisch, 2026-09-24-growth-radar-cro, 2026-10-26-growth-radar-seo-technisch]
vervangt: []
bronbestand: ""
deadline: ""
---
# Growth Radar — SEO-techniek als nieuws, 12 oktober 2026

> Map: [[Waar staat wat]]

## In het kort
Shopify's officiële deprecation-documentatie bevestigt een tussenstap in de scripttag-afbouw die op 24 september al deels bekend was: sinds 1 oktober 2026 kunnen apps geen script tags meer aanmaken of bijwerken (`scriptTagCreate`/`scriptTagUpdate` falen), terwijl bestaande tags nog draaien en leesbaar/verwijderbaar blijven tot Shopify de storefront-injectie zelf stopt op 1 maart 2027. Verder onderzoek naar een Google-kernupdate, Core Web Vitals/INP, structured data en Merchant Center leverde vandaag niets op dat de harde filter doorstond.

## Acties
Geen nieuw backlogpunt: deze vondst werkt het bestaande punt 11 bij (zie backlog).

## Bevindingen
### Shopify-scripttags: aanmaken/bijwerken stopt 1 okt 2026, storefront-injectie stopt 1 mrt 2027
Shopify's eigen `script-tag-deprecation`-documentatie (shopify.dev) geeft twee aparte data, niet één: (1) sinds 1 oktober 2026 accepteert de Admin API geen nieuwe `scriptTagCreate`/`scriptTagUpdate`-aanroepen meer — bestaande scripttags blijven intact en leesbaar/verwijderbaar; (2) pas op 1 maart 2027 stopt Shopify met het injecteren van alle scripttags in de storefront zelf. De eerder genoteerde datum van 1 maart 2027 (growth-radar, 24 sep) betrof alleen stap 2; stap 1 is nieuw bevestigd en is vandaag al 12 dagen geleden ingegaan.

> **Voor higrip.nl:** Het al openstaande backlogpunt 11 noemt dat Trustpilot en Bundler-restanten nog via scripttags laden. Zolang die apps alleen lezen/tonen blijft dat werken tot maart 2027, maar als een van die apps zijn configuratie normaliter via een API-update verfrist (bijvoorbeeld bij een Trustpilot-widgetwijziging), faalt die aanroep sinds 1 oktober stil — zonder storefront-foutmelding. Dat is een extra, nu bevestigde reden om vóór maart 2027 over te zetten op theme-app-extensions of web pixels, niet alleen "nog actief, dus later".
**Actie:** zie backlogpunt 11 (bijgewerkt met deze vondst, geen nieuw punt).

## Wat niet lukte
Geen toegangsproblemen. De volgende sporen zijn gecontroleerd en vielen af op de harde filter (al bekend, geen primaire bron met 2026-datum, of geen concrete koppeling aan higrip.nl te maken):
- **Google-kernupdate oktober 2026:** geen bevestigde nieuwe ranking-update. De september-spamupdate liep in twee fasen door tot begin oktober (laatste fase 4–6 okt, nog onbevestigd door Search Engine Roundtable zelf) — dat is dezelfde "normale update, geen nieuw beleid" die al op 28 september in het geheugen staat, geen nieuw element.
- **Google Search crawl-rate-documentatie:** op 6 oktober toegevoegd met uitleg over de `Retry-After`-HTTP-header bij crawlthrottling. Een documentatiewijziging, geen beleidswijziging; geen bekend 429/crawlbudget-probleem op higrip.nl om aan te koppelen, dus geen concrete actie te benoemen — niet opgenomen.
- **Core Web Vitals / INP:** geen officiële Google-bron voor een oktober-wijziging gevonden; de enige claim over een strakkere INP-meting (een los blog, juni 2026) is niet op Search Central of Search Engine Land/Roundtable terug te voeren. Het al openstaande backlogpunt 14 (INP meten op higrip.nl) blijft de juiste actie.
- **Structured data / schema.org:** geen oktoberwijziging op Google Search Central gevonden; de gevonden artikelen herhalen de al bekende FAQ-rich-result-verwijdering (mei 2026) en de generatieve-AI-richtlijn dat structured data niet vereist is.
- **Google Merchant Center:** de enige bevestigde nieuwe eis (pickup cost + minimum bestelbedrag verplicht voor afhaalproducten, UK/CH/EEA, 30 sep 2026) raakt higrip.nl niet — geen afhaalproducten. Het beeldminimum van 500×500px (hard vanaf 31 jan 2027) stond al op 21 september in het geheugen en is voor higrip.nl al gecheckt.
- **Shopify API-versie 2026-10 (stabiel sinds 1 okt 2026):** breaking changes zitten in klantsegment-queries, SMS-marketingvelden, discount rollouts, orderfiscaliteit en POS — geen van alle raakt een SEO-technisch element van higrip.nl.

## Bronnen
- [Script tag deprecation — Shopify developer documentation](https://shopify.dev/docs/apps/build/online-store/script-tag-deprecation)
- [2026-10 API release notes — Shopify developer changelog](https://shopify.dev/changelog/release-notes/2026-10.md)
- [Phase Two Of The Google September 2026 Spam Update Hits On 9/30 — Search Engine Roundtable](https://www.seroundtable.com/)
- [Final Phase Of Google September 2026 Spam Update Rollout Oct 4-6? — Search Engine Roundtable](https://www.seroundtable.com/)
- [Google Search Crawl Rate Doc Adds Retry-After HTTP & More — Search Engine Roundtable](https://www.seroundtable.com/)
- [Google Merchant Center announcements change log](https://support.google.com/merchants/announcements/6192467?hl=en)
- [Google makes pickup cost and minimum order value mandatory in UK and EEA — PPC Land](https://ppc.land/google-makes-pickup-cost-and-minimum-order-value-mandatory-in-uk-and-eea/)

## Aantekeningen
