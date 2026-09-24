---
id: 2026-09-21-growth-radar-seo-technisch
titel: "Growth Radar — SEO Technisch (21 september 2026)"
datum: 2026-09-21
bron: routine
routine: "growth-radar"
categorie: SEO
status: nieuw
prioriteit: P2
samenvatting: "Productpagina-handle bleek stilzwijgend veranderd naar performance-gripsokken; de oude URL-kannibalisatie uit de regressiecheck van 15 september is daarmee feitelijk opgelost. Daarnaast: Merchant Center's nieuwe beeldminimum (500×500px) raakt higrip.nl niet, en INP is in 2026 het metric waar Shopify-winkels het vaakst op struikelen."
gerelateerd: [2026-09-15-regressiecheck, 2026-09-15-seo-audit, 2026-09-21-regressiecheck, 2026-09-23-seo-conversietest-run-1, 2026-09-24-growth-radar-cro]
vervangt: []
bronbestand: "C:\\Users\\Test\\.claude\\research\\growth-radar\\rapporten\\2026-09-21-seo-technisch.md"
deadline: ""
---
# Growth Radar — SEO Technisch (21 september 2026)

## In het kort

Belangrijkste vondst: de productpagina-URL is stilzwijgend veranderd sinds de laatste check, en dat lost toevallig het oudste openstaande regressiepunt op — maar het betekent ook dat verwijzingen in eigen documentatie nu verouderd zijn. Daarnaast twee kleinere technische signalen over Merchant Center-beeldeisen en Core Web Vitals.

## Bevindingen

### 1. Canonical productpagina-URL gewijzigd, oude-URL-kannibalisatie opgelost

Bij de regressiecheck van 15 september 2026 ([[2026-09-15-regressiecheck]]) stond genoteerd dat `/products/hi-grip-gripsokken-1` de canonical productpagina was, en dat `/products/performance-grip-socks-2-0-zwart` en `-wit` nog HTTP 200 gaven in plaats van een 301 — interne kannibalisatie van het hoofdkeyword. Diezelfde bevinding stond ook in de audit van 15 september ([[2026-09-15-seo-audit]]).

Bij controle vandaag (21 september) bleek de producthandle zelf te zijn veranderd: het hoofdproduct heet nu `/products/performance-gripsokken` (was `hi-grip-gripsokken-1`), en de twee varianten zijn meeveranderd naar `/products/performance-gripsokken-2-0-zwart` en `-wit`. Geverifieerd met een `fetch`-test (redirect: follow) op alle drie de oude adressen: ze redirecten automatisch naar hun nieuwe tegenhanger, en de canonical-tag op de live pagina verwijst correct naar zichzelf. Dit is standaardgedrag van Shopify bij het hernoemen van een producthandle.

**Aandachtspunt:** eigen documentatie (projectgeheugen, theme-editor previewlinks, testinstructies) verwijst nog overal naar de oude handle `hi-grip-gripsokken-1`. Die links werken dankzij de redirect nog, maar zijn niet meer accuraat — bijgewerkt in `project_higrip.md` onder SEO-inzichten. Een handlewijziging kan Search Console tijdelijk in de war brengen; de dekkingsrapportage is de moeite van het controleren waard over een paar dagen.

### 2. Merchant Center: nieuw beeldminimum van 500×500px — higrip.nl al compliant

Google voert een universele minimumeis van 500×500px in voor productafbeeldingen in Merchant Center-feeds (waarschuwingen sinds april 2026, hard afgedwongen vanaf 31 januari 2027), los van en strenger dan de eerdere 100×100px-eis. Gecontroleerd op higrip.nl: hoofdproductfoto's zijn 1024×1024 en 1536×1024px — ruim boven de nieuwe eis. Geen actie nodig nu; wel een blijvend checkpunt bij nieuwe productfoto's (bijv. skisokken).

### 3. INP is in 2026 het meest voorkomende Shopify-knelpunt bij Core Web Vitals

Actuele benchmarks laten zien dat INP (Interaction to Next Paint) het metric is waar de meeste Shopify-winkels op vastlopen — meestal veroorzaakt door zware JavaScript in apps of custom secties, niet het thema zelf. Landelijk haalt 48% van mobiele sites nu alle drie de Core Web Vitals (was 44% in 2024). higrip.nl heeft een JS-zware WK-promosectie gebouwd (`hi-wk-promo.js`, count-up-animaties); de sectie zelf staat niet meer op de homepage, maar niet gecontroleerd of het script nog wordt geladen. Logisch moment voor een nulmeting vóór de skisokken-lancering.

## Acties

_Acties uit dit rapport staan al in de growth-radar-backlog (`ACTIEBACKLOG.md`, punten 4 en 14) en komen via de backlog-parser binnen — hier niet gedupliceerd. Het opgeloste regressiepunt is in de backlog afgevinkt._

## Bronnen

- Origineel: `C:\Users\Test\.claude\research\growth-radar\rapporten\2026-09-21-seo-technisch.md`
- [Merchant Center announcements change log](https://support.google.com/merchants/announcements/6192467?hl=en)
- [Merchant Center product data specification update 2026](https://support.google.com/merchants/answer/16989427?hl=en)
- [Core Web Vitals Benchmarks for Shopify Stores (2026 Data)](https://dev.to/apogeewatcher/core-web-vitals-benchmarks-for-shopify-stores-2026-data-1mel)
- [Core Web Vitals for Shopify Stores: 2026 Benchmarks and Optimization Playbook](https://www.1digitalagency.com/blog/core-web-vitals-for-shopify-stores-2026-benchmarks-and-optimization-playbook-33932/)

## Aantekeningen
