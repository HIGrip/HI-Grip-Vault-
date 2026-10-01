---
id: 2026-10-01-growth-radar-cro
titel: "Growth Radar — CRO (1 oktober 2026)"
kerntitel: "Shopify wijzigde conversieratio-meting net vóór je pack-prijs/verzenddrempel-test"
datum: 2026-10-01
bron: routine
routine: growth-radar
categorie: CRO
status: nieuw
prioriteit: P2
samenvatting: "Shopify's sessiemeting-update (21-23 september 2026) telt sessies en checkout_started anders, waardoor de ingebouwde Shopify Analytics-conversieratio kan verschuiven zonder dat het koopgedrag verandert. Dat valt vlak vóór de geplande pack-prijs-/verzenddrempeltest (backlogpunt 1/12), dus een voor-/na-meting via Shopify Analytics moet deze meetbreuk eerst uitsluiten."
gerelateerd: [2026-09-17-growth-radar-cro, 2026-09-24-growth-radar-cro, 2026-09-23-seo-conversietest-run-1, 2026-09-28-seo-conversietest-run-2, 2026-09-03-analytics-kpi-meetgat]
vervangt: []
bronbestand: ""
deadline: ""
---
# Growth Radar — CRO (1 oktober 2026)

## In het kort
Shopify's eigen sessiemeting-update van 21-23 september 2026 kan de conversieratio in Shopify Analytics laten verschuiven zonder echte gedragsverandering — relevant omdat higrip.nl rond diezelfde periode een pack-prijs-/verzenddrempeltest plant waarvan het effect via diezelfde ratio gemeten zou worden.

## Bevindingen
### Shopify telt sessies en `checkout_started` sinds 21-23 sep 2026 anders
Shopify rolde tussen 21 en 23 september 2026 een "session measurement update" uit (Shopify Help Center, primaire bron). Sessies lopen niet langer af om middernacht UTC, maar bij 30 minuten inactiviteit; sessies zonder pageview (bijv. direct naar checkout via een cart-link) tellen nu ook mee; herkende bot-sessies worden standaard uit sessie-gerelateerde rapporten gefilterd. Shopify benoemt expliciet dat "Reached checkout rate" en "Checkout conversion rate" hierdoor kunnen veranderen, terwijl bestellingen, omzet en klantaantallen niet beïnvloed worden.

> **Voor higrip.nl:** Backlogpunt 1 (gratis-verzenddrempel op de productpagina) en 12 (prijs per paar) plannen een voor-/na-conversievergelijking rond een wijziging in dezelfde sectie (`snippets/product-information-content.liquid`). Gebruik je daarvoor de ingebouwde Shopify Analytics-conversieratio, dan loopt de meetbreuk van 21-23 september precies vóór die periode: een verschil kan dan net zo goed de meetwijziging zijn als het effect van de test. Hetzelfde geldt voor het al openstaande GA4-meetgat (backlogpunt 11, `keyEvents = 0`) — apart probleem, maar in dezelfde week.

**Actie:** zie backlog P2.

## Wat niet lukte
Drie andere sporen uit deze dagfocus zijn gecontroleerd maar niet opgenomen omdat ze niet terug te voeren waren op een primaire of nieuw-gedateerde bron: trust-badge-conversiecijfers (alleen vendor-case-studies zonder methodologie), strikethrough-prijsweergave-tests (marketingblogs, geen primaire studie) en Baymard-cijfers over het aantal formuliervelden (evergreen contentpagina, geen aantoonbare 2026-update — het cijfer over 35,26% conversiewinst door checkout-fixes stond al in de notitie van 17 september). Ook het Shopify-release-overzicht van oktober 2026 (shopify.dev) bevatte voor een Nederlandse single-market winkel geen relevante wijziging.

## Bronnen
- [Shopify Help Center — Session measurement update](https://help.shopify.com/en/manual/reports-and-analytics/discrepancies/session-measurement-update)
- [Shopify Help Center — Analytics updates](https://help.shopify.com/en/manual/reports-and-analytics/discrepancies/analytics-updates)
