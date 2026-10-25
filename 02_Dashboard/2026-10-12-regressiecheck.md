---
id: 2026-10-12-regressiecheck
titel: "SEO-regressiecheck — 12 oktober 2026"
kerntitel: "Geen nieuwe afwijkingen; sporters-claim op EN al 3500+, NL-homepage en collectie nog niet"
datum: 2026-10-12
bron: routine
routine: "seo-regressiecheck"
categorie: SEO
status: nieuw
prioriteit: P2
samenvatting: "Geen nieuwe afwijkingen deze week: alle 12 gecontroleerde URL's zijn technisch schoon (200, één title/H1/meta, correcte canonical/hreflang, geen aggregateRating) en de prijzen kloppen exact met het feitenbestand. De al openstaande 3000+/3500+-sporterstegenspraak (2026-10-11-seo-audit-weekdelta) is gedeeltelijk voortgeschreden: de EN-homepage zegt nu overal 3500+, de NL-homepage-meta en de collectiepagina nog 3000+ — geen nieuw punt, de actiecontrole volgt het bestaande."
gerelateerd: [2026-10-19-regressiecheck, 2026-10-05-regressiecheck, 2026-09-28-regressiecheck, 2026-09-21-regressiecheck, 2026-09-15-regressiecheck, 2026-10-11-seo-audit-weekdelta, 2026-10-12-seo-conversietest-run-4]
vervangt: []
bronbestand: ""
deadline: ""
---
# SEO-regressiecheck — 12 oktober 2026

> Map: [[Waar staat wat]]

## In het kort

Controle-run, geen onderzoek. Twaalf URL's gecontroleerd (sitemap-gedreven, zelfde opzet als vorige week). Kritieke check (geen `aggregateRating`) blijft schoon op alle twaalf. Geen nieuwe afwijkingen: de enige content-afwijking die opviel (3000+ vs 3500+ sporters) staat al open via een andere notitie van gisteren en wordt niet gedupliceerd. GA4-sessies daalden deze week t.o.v. vorige week, maar key events en omzet stegen; PageSpeed Insights zat opnieuw op quotum.

## Kerncijfers

- **12** · gecontroleerde URL's · gelijk aan vorige week
- **0** · URL's met `aggregateRating`
- **98** · GA4-sessies (7 dagen) · −15,5% t.o.v. vorige week (116)
- **3** · GA4 key events (7 dagen) · vorige week 1

## Acties

_Geen nieuwe backlogpunten deze week. De enige opgevallen afwijking (sporters-claim) staat al open als actie onder [[2026-10-11-seo-audit-weekdelta]] en komt via de actiecontrole binnen — hier niet gedupliceerd._

## Bevindingen

Referentiepunt: [[2026-10-05-regressiecheck]]. URL-lijst dit keer: homepage, de drie productpagina's, de collectie `gripsokken`, de drie `/pages/gripsokken-voor-*`-sportpagina's, beide blogindexen (`hi-grip`, `trends`), het nieuwste artikel (ongewijzigd: "De twee grootste problemen in de sportwereld...", lastmod 9 okt) en `/en/`.

### Nieuw ontdekt in de sitemap t.o.v. vorige week

- `sitemap.xml` bevat sinds deze week een extra sub-sitemap `sitemap_metaobject_pages_1.xml` (en de EN-variant). Beide zijn leeg (`<urlset>` zonder `<url>`-entries) — geen actie nodig, alleen gemeld.
- Verder geen wijzigingen in de samenstelling van de gecontroleerde sub-sitemaps (producten, collecties, sportpagina's, blogindexen, nieuwste artikel) t.o.v. 5 oktober.

### Afwijkingen

Geen afwijkingen deze week.

### Al bekend, blijft open (staat open in de backlog — geen nieuw punt, niet gewijzigd)

- **Sporters-claim 3000+ vs 3500+** (open actie onder [[2026-10-11-seo-audit-weekdelta]]: "Homepage-meta ... van 3000+ naar 3500+ sporters zetten" en "Collectie-USP ... naar 3500+"): bevestigd nog steeds aanwezig — de NL-homepage-meta description (en de identieke `og:description`/`twitter:description`) zegt nog "de keuze van 3000+ sporters", en `/collections/gripsokken` toont de zichtbare trustbar "3000+ sporters gingen je voor". **Nieuw waargenomen t.o.v. gisteren:** de EN-homepage (`/en/`) is inmiddels gecorrigeerd en zegt nu overal "3500+ athletes" (5×, geen enkele 3000+ meer) — dat deel van de genoemde actie lijkt dus al uitgevoerd, de twee NL-onderdelen (homepage-meta, collectie-USP) nog niet.
- **Schema gedeeltelijk** (backlogpunt "SEO-schema-thema-wijzigingen gedeeltelijk gepusht"): ongewijzigd t.o.v. 5 oktober — `WebSite` staat alleen op homepage, `/en/` en de drie sportpagina's; ontbreekt nog op de collectie, de drie productpagina's en beide blogindexen. `ItemList` ontbreekt nog op de collectie. `FAQPage` ontbreekt nog op de drie productpagina's (die wel een zichtbare FAQ hebben).
- **Redirect-keten `/products/hi-grip-gripsokken-1`**: nog steeds 2 stappen (`hi-grip-gripsokken-1` → `hi-grip-gripsokken` → `performance-gripsokken`), tegen de regel van maximaal 1 stap.
- **Verzend-/retour-/betalingspagina's**: ongewijzigd. `/pages/verzendbeleid` noemt nog geen verzendkosten (€4,50) of -drempel (€35); `/pages/retourbeleid` rekent nog 25% herbevoorradingskosten en eist "ongeopend"; `/policies/refund-policy` nog 14 dagen + 25%; `/policies/shipping-policy` nog "vóór 16:00"; `/policies/terms-of-service` nog €4,25.
- **`/collections/all`**: nog geen meta description, title nog generiek ("Producten – HÏ Grip").
- **`/collections/frontpage`**: nog een directe 404 (geen 301).
- **`/pages/gripsokken-voetbal`** (typo-handle): nog steeds 404.

### Ongewijzigd / schoon

- Alle 12 gecontroleerde URL's: HTTP 200, laadtijd 0,47–1,06s (ruim onder 1,5s).
- Alle 12: precies één niet-lege `<title>`, een niet-lege meta description, precies één `<h1>`.
- Canonical en `hreflang` (nl/en/x-default) correct op alle 12.
- **Geen enkele van de 12 pagina's bevat `aggregateRating`** — kritieke check blijft schoon.
- Homepage: 4 van 25 afbeeldingen met `alt=""` — ruim onder de meldgrens van 12.
- Live prijzen kloppen exact met het feitenbestand: 1-pack €14,95 / 3-pack €41,95 / 5-pack €64,95 (Performance Gripsokken) en €17,95 voor beide 2.0-varianten (zwart/wit) — geen tegenspraak.
- `/collections/gripsokken` toont wel correct "30 dagen retour" in de trustbar (overeenkomstig het feitenbestand), alleen de sporters-USP ernaast is nog 3000+ (zie hierboven).
- GA4 `purchase` staat nog steeds gemarkeerd als key event; 3 key events deze week (vorige week 1), omzet €62,98 (vorige week €37,70).
- `shopify theme check`: niet uitgevoerd — thema-map niet beschikbaar in de cloudomgeving (bekende beperking van elke cloud-run).

### Trend

GA4-property 476032345, sessies per kanaal, laatste 7 dagen (5–11 okt) vs. de 7 dagen daarvoor (28 sep–4 okt):

| Kanaal | Deze week | Vorige week |
|---|---|---|
| Organic Search | 52 | 51 |
| Direct | 33 | 57 |
| Organic Social | 7 | 1 |
| Unassigned | 4 | 2 |
| Referral | 2 | 3 |
| AI Assistant | 0 | 2 |
| **Totaal** | **98** | **116** |

Botverkeer expliciet gefilterd (land + kanaal): "United States | Direct" daalde van 43 sessies (0% engagement — vrijwel zeker bots) naar 11 sessies (27,3% engagement) deze week. De daling van het Direct-kanaal in de tabel hierboven (57 → 33) is dus voor een belangrijk deel het verdwijnen van dat botverkeer, niet een echte terugval. Organic Search bleef nagenoeg gelijk (51 → 52).

AI Assistant-kanaal, laatste 30 dagen: **3 sessies** (vorige meting 5 oktober: 5) — te klein om een trend aan te wijzen.

PageSpeed Insights (mobiel): **niet gemeten** — openbaar PSI-quotum zit nog vast op HTTP 429 voor het project `higrip-analytics`, zelfde probleem als elke eerdere run.

## Wat niet lukte

- **PageSpeed Insights** (homepage, `/collections/gripsokken`, `/products/performance-gripsokken`): HTTP 429, quotum op. Nodig: `PageSpeed Insights API` aanzetten in `higrip-analytics` of een `PAGESPEED_API_KEY`.
- **`shopify theme check`**: thema-map `C:\Users\Test\higrip-theme` niet beschikbaar in deze cloudomgeving.

## Bronnen

- Live site: curl op de 12 URL's + sitemap-bestanden (NL en EN), 12 oktober 2026.
- `python 02_Dashboard/_tools/google_data.py ga4 --dagen 7` / `--dagen 30` (na eenmalig `pip install google-analytics-data google-auth` + `pip install --force-reinstall cffi cryptography` in deze cloudomgeving, voor een module- en bindingconflict).
- `python 02_Dashboard/_tools/google_data.py cwv` (PageSpeed, gefaald op quotum).
- Feitenbestand: `00_Brand_Core/Feiten & Actuele Staat.md`.

## Aantekeningen
