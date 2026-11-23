---
id: 2026-11-23-regressiecheck
titel: "SEO-regressiecheck — 23 november 2026"
kerntitel: "Nieuw internationaal domein higripsportswear.com ontdekt, nergens vastgelegd"
datum: 2026-11-23
bron: routine
routine: seo-regressiecheck
categorie: Techniek
status: nieuw
prioriteit: P2
samenvatting: "higripsportswear.com bestaat, is live en staat als hreflang-doel voor 11 EU-landen op elke higrip.nl-pagina, maar stond nergens in de vault. Verder blijven alle bekende technische afwijkingen (meta's, 404-artikel, alt-teksten) ongewijzigd open en zijn er 2 nieuwe kleine afwijkingen op twee campagnepagina's."
gerelateerd: [2026-11-09-regressiecheck, 2026-11-23-seo-conversietest-run-9]
vervangt: []
bronbestand: ""
deadline: ""
---
# SEO-regressiecheck — 23 november 2026

> Map: [[Waar staat wat]]

## In het kort
Grootste vondst van deze run: `higripsportswear.com`, een volledig werkende Shopify-site met dezelfde theme-assets als higrip.nl, staat als hreflang-doel voor 11 EU-landen (AT, BE, DE, FR, IT, LU, PL, PT, RO, CH, GB) op elke higrip.nl-pagina — en dat domein kwam nergens in de vault voor. Voorlopig vastgelegd in Feiten met `[CHECK]`; een mens moet bevestigen of dit bewust is. Verder: alle 16 verplichte URL's geven HTTP 200 binnen 1,5s, geen `aggregateRating` gevonden, geen prijs/verzend-tegenspraak. Twee nieuwe campagnepagina's (`/pages/early-access`, `/pages/early-access-bedankt`) missen een meta description. Alle eerder bekende afwijkingen (gripsokken-2-0/-2-1, teamorder, het 404-blogartikel, 13× lege alt-tekst op de homepage, /blogs/intern, /collections/all, terugbetalingsbeleid, de oude verzend/retour-policies, schema-push) staan ongewijzigd open — geen van die zes weken tot nu opgelost.

## Kerncijfers
- **16 / 16** · Verplichte URL's met HTTP 200, alle onder 1,5s
- **0** · Pagina's met `aggregateRating` (moet 0 blijven)
- **2** · Nieuwe afwijkingen (beide P2); **1** · nieuw Besluit-backlogpunt (higripsportswear.com)

## Acties
- [ ] P2 · Besluit: bevestig of `higripsportswear.com` een bewust internationaal domein is (backlog#nieuw, zie Feiten)
- [ ] P2 · [regressie] `/pages/early-access` en `/pages/early-access-bedankt` missen meta description — bevestigen tijdelijk (noindex) of permanent (meta's toevoegen)

## Bevindingen

### 1. Nieuw: higripsportswear.com (niet eerder vastgelegd)
Elke higrip.nl-pagina bevat sinds onbekende datum hreflang-tags naar `higripsportswear.com` voor 11 EU-landen (`en-AT`/`nl-AT`, `en-BE`/`nl-BE`, enz. — zie bijv. de homepage-`<head>`). Het domein is live: HTTP 200, een Engelstalige homepage ("HÏ Grip | Performance Grip Socks for Athletes"), canonical naar zichzelf, en theme-assets met exact dezelfde bestandsnamen als het hoofdthema (`hi-sale-price.css`, `hi-headings.css`, `hi-app-fixes.css` — bekend uit eerdere backlogpunten over WERKTHEMA 02). Dit wijst op een Shopify Markets-opzet voor overige EU-landen, maar is in geen enkel vaultbestand of eerdere notitie terug te vinden. Voorlopig in Feiten & Actuele Staat gezet met `[CHECK]`-status; een mens moet bevestigen of dit bewust en actueel is, en of prijzen/voorraad daar synchroon lopen (niet gecontroleerd — buiten de scope van deze check en zou prijswijziging-territorium kunnen raken).

### 2. Nieuw (P2): `/pages/early-access` en `/pages/early-access-bedankt` missen meta description
Beide pagina's staan voor het eerst in `sitemap_pages_1.xml` (campagnepagina's voor "HÏ Performance Days", zie de lopende Ads-planning in de backlog). Titels zijn correct aanwezig, maar geen `<meta name="description">` en geen `robots`-meta (dus standaard indexeerbaar). Zie backlogpunt.

### 3. Bekend, ongewijzigd open
- `/pages/gripsokken-2-0` en `/pages/gripsokken-2-1`: nog steeds geen meta description, geen robots-meta (schema zelf is wel compleet: Product/ProductGroup/Offer/Brand). Staat open in de backlog.
- `/pages/teamorder`: nog steeds geen meta description. Staat open in de backlog.
- `/blogs/trends/de-twee-grootste-problemen-...`: nog steeds directe 404 zonder redirect; `/blogs/trends` zelf nog steeds leeg ("Nog geen artikelen. Kom snel terug."). Nieuwste artikel blijft `/blogs/hi-grip/waarom-glijdt-je-voet-in-je-schoen` (lastmod 5 nov, ongewijzigd). Staat open in de backlog.
- Homepage: nog steeds 13× `alt=""` (grens 12, van 79 `<img>`-tags). Staat open in de backlog.
- `/blogs/intern`: nog steeds publiek, nog steeds geen `robots`-meta. Staat open in de backlog.
- `/collections/all`: nog steeds geen meta description. Staat open in de backlog.
- `/pages/terugbetalingsbeleid`: titel is en blijft gecorrigeerd ("Betalingsbeleid – HÏ Grip"), maar meta description is nog steeds leeg. Staat open in de backlog.
- Verzend-/retourbeleid: `/pages/verzendbeleid` en `/pages/retourbeleid` hebben nu wél een eigen meta description, maar die is in de u-vorm geschreven ("Ontdek hoe uw verzending/retour wordt geregeld") — dit stond al als tone-of-voice-punt open in het bestaande backlogpunt over deze pagina's (19 okt), geen nieuw punt. Prijs/termijn-inhoud zelf klopt: €4,50, €35-drempel, binnen 1 werkdag, 30 dagen retour, geen 25%-herbevoorrading (het "14 dagen"/"25%"-treffer in de automatische grep bleek bij controle respectievelijk de terugbetaaltermijn ná een retour en het materiaalpercentage polyester te zijn — geen echte tegenspraak).
- Schema-push (`/pages/gripsokken-voetbal`-typo-redirect, WebSite/ItemList/FAQPage-gaten): ongewijzigd, staat open in de backlog.

### Ongewijzigd (schoon)
14 van de 16 verplichte URL's hebben geen afwijking op title/meta/H1/canonical/hreflang/schema-basis (Organization + WebSite overal, BreadcrumbList buiten de homepage, ItemList op collectie en sportpagina's, Product/ProductGroup/Offer op productpagina's). De FAQPage-op-producten-gap is een bekend, al open punt.

### Trend
GA4 niet beschikbaar deze week (zie Wat niet lukte). Shopify-sessietrend wordt in module C gemeten (Shopify Analytics).

## Wat niet lukte
- **`python 02_Dashboard/_tools/google_data.py`** (elke subcommand: `check`, `gsc`, `merchant`, …) wordt sinds deze run volledig geblokkeerd door een Bash-permissieplugin (`cc-plugin-privacy`): het script bevat het service-account-e-mailadres en het account-e-mailadres als defaultwaarde, en de plugin weigert elke aanroep ervan. Dit is nieuw — eerdere runs hadden alleen Python-moduleproblemen, geen harde blokkade. Gevolg: geen GA4-sessietrend in deze check, en module B (Search Console) kan deze week helemaal niet draaien (zie elders). Geen alternatief geprobeerd dat niet al in de routine staat.
- PageSpeed Insights (publieke API zonder sleutel): HTTP 429 (quotum), net als voorgaande weken.
- `shopify theme check`: niet geprobeerd, er is in deze cloudomgeving geen lokale thema-map beschikbaar.

## Bronnen
- https://www.higrip.nl/sitemap.xml en sub-sitemaps (23 nov 2026)
- https://www.higripsportswear.com/ (23 nov 2026)
- `00_Brand_Core/Feiten & Actuele Staat.md`
- `02_Dashboard/_geheugen/seo.md`
- `02_Dashboard/_backlog/ACTIEBACKLOG.md`

## Aantekeningen
