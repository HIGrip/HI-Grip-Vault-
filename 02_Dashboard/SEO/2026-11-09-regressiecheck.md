---
id: 2026-11-09-regressiecheck
titel: "SEO-regressiecheck — 9 november 2026"
kerntitel: "Duplicaten 2-0/2-1 nog open; -a/-b zijn geen noindex meer; verkeer -41,8%, 0 aankopen"
samenvatting: "Handmatige hermeting op verzoek van Lars (geen routine-run), omdat er sinds 2 november veel veranderd is. Het verkeer zakte van 340 naar 198 sessies (-41,8%), vooral door Paid Social (139 → 26) nu de oktobercampagne is afgelopen; er waren 0 aankopen (vorige week 2). De campagnepagina's /pages/gripsokken-2-0 en -2-1 hebben nog steeds geen meta description en geen robots-meta. De bekende varianten /-a en /-b zijn bovendien niet meer als noindex herkend (geen robots-meta in de HTML) en hebben een canonical naar de andere pagina gekregen. Nieuw: FAQPage staat nu op de homepage, /en/, teamorder en de rugby- en voetbalpagina, maar nog niet op de drie productpagina's."
datum: 2026-11-09
bron: routine
routine: "seo-regressiecheck"
categorie: SEO
status: nieuw
prioriteit: P2
gerelateerd: [2026-11-02-regressiecheck, 2026-11-09-search-console, 2026-10-27-seo-audit-higrip-nl]
vervangt: []
bronbestand: ""
deadline: ""
---
# SEO-regressiecheck — 9 november 2026

> Map: [[Waar staat wat]]

## In het kort

Dit is een **handmatige hermeting** (op verzoek van Lars, uitgevoerd in een Claude Code-sessie), geen run van de geplande routine. Referentiepunt: [[2026-11-02-regressiecheck]]. Verkeer en funnel komen uit GA4 (2–8 nov vs. 26 okt–1 nov), de paginacontrole is live gedaan op 9 november.

Het verkeer zakte van 340 naar **198 sessies (-41,8%)**. Dat komt vrijwel volledig door Paid Social (139 → 26, -81%) nu de oktobercampagne is afgelopen; de opvolgende ads gaan deze week online (besluit Lars, 9-11). Aankopen: **0** (vorige week 2); GA4 en Shopify melden onafhankelijk van elkaar dezelfde nul. Op de site zelf zijn de twee open punten van vorige week niet opgelost, en bij de varianten `-a`/`-b` is iets veranderd dat bevestiging nodig heeft.

## Kerncijfers

- **198** · GA4-sessies (2–8 nov) · -41,8% t.o.v. vorige week (340)
- **26** · Paid Social-sessies · -81% (was 139)
- **0** · aankopen en key events (vorige week 2 aankopen, €105,90)
- **72 / 8 / 2 / 0** · view_item / add_to_cart / begin_checkout / purchase (vorige week 213 / 16 / 6 / 2)

## Acties

- [ ] P2 · `/pages/gripsokken-2-0` en `/pages/gripsokken-2-1` hebben nog steeds geen meta description en geen robots-meta (indexeerbare, bijna-identieke campagnepagina's) — bevestigen of ze tijdelijk zijn (dan noindex,nofollow) of permanent (dan unieke meta's). Onveranderd t.o.v. 2 november
- [ ] P2 · `/pages/gripsokken-2-0-a` en `-b`: eerder noindex,nofollow, nu geen robots-meta meer in de HTML en canonical naar de andere pagina (`-a` → `-2-1`, `-b` → `-2-0`). Controleren of de noindex bewust is vervangen door canonicals (kan ook via een HTTP-header lopen, die is hier niet gemeten)
- [ ] P2 · `/pages/teamorder` mist nog een meta description (onveranderd)

## Bevindingen

Live gecontroleerd via de browser (fetch vanaf higrip.nl; directe curl-verzoeken kregen HTTP 429 van Shopify). 17 URL's, allemaal HTTP 200, elk met precies één `<h1>` en een canonical.

| URL | Meta description | Robots-meta | Canonical |
|---|---|---|---|
| `/pages/gripsokken-2-0` | **nee** | geen | zelf |
| `/pages/gripsokken-2-1` | **nee** | geen | zelf |
| `/pages/gripsokken-2-0-a` | nee | **geen (was noindex)** | → `/pages/gripsokken-2-1` |
| `/pages/gripsokken-2-0-b` | nee | **geen (was noindex)** | → `/pages/gripsokken-2-0` |
| `/pages/teamorder` | **nee** | geen | zelf |
| `/pages/terugbetalingsbeleid` | **nee** (titel "Betalingsbeleid") | geen | zelf |
| `/collections/all` | **nee** | geen | zelf |
| `/blogs/intern` | nee | geen (nog publiek, HTTP 200) | zelf |

Alle andere gecontroleerde pagina's (homepage, `/en/`, collectie gripsokken, de drie productpagina's, vergelijken, rugby, voetbal) hebben een meta description en geen afwijkingen.

### Vooruitgang

- **FAQPage-schema** staat nu op de homepage, `/en/`, `/pages/teamorder`, `/pages/gripsokken-voor-rugby` en `/pages/gripsokken-voor-voetbal`. Op de drie productpagina's ontbreekt het nog (bekend backlogpunt blijft open).
- **`aggregateRating`**: op geen enkele van de 17 gecontroleerde pagina's aanwezig (kritieke check schoon).

### Trend (GA4, sessies per kanaal)

| Kanaal | 2–8 nov | 26 okt–1 nov |
|---|---|---|
| Direct | 84 | 105 |
| Organic Search | 38 | 42 |
| Referral | 31 | 6 |
| Paid Social | 26 | 139 |
| Organic Social | 5 | 26 |
| Unassigned | 4 | 1 |
| Cross-network | 3 | 0 |
| Organic Shopping | 3 | 3 |
| Paid Other | 2 | 12 |
| AI Assistant | 1 | 1 |
| Email | 1 | 5 |
| **Totaal** | **198** | **340** |

De daling zit dus niet alleen in Paid Social: ook Organic Social (-81%), Direct (-20%) en Paid Other (-83%) zakten, wat past bij het einde van een campagne. Referral steeg van 6 naar 31 sessies (niet uitgezocht welke bron). Landingspagina's: homepage 92 sessies (53% bounce); `/products/performance-gripsokken-2-0-wit` 7 sessies (86% bounce). In de top 15 staan ook testverkeer-URL's (`?preview_theme_id=…`, `slScreenshot=true`).

## Wat niet lukte

- **PageSpeed Insights** en **`shopify theme check`**: niet gemeten (zelfde beperking als eerdere runs; niet opnieuw geprobeerd).
- **HTTP-headers** (X-Robots-Tag) en de **sitemap**: niet gecontroleerd, dus nieuwe URL's in de sitemap sinds 2 november zijn niet beoordeeld.
- **Prijzen** op de productpagina's en de redirect-keten `hi-grip-gripsokken-1` zijn niet opnieuw gemeten.
- GA4 via de koppeling (analytics-mcp); het dashboardscript `google_data.py ga4` draaide niet omdat de GA4-module lokaal ontbreekt.

## Bronnen

- GA4-property 476032345, `run_report` via analytics-mcp, 9 november 2026.
- Live site: fetch vanaf higrip.nl in de browser, 9 november 2026.

## Aantekeningen
