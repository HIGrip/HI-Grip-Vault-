---
id: 2026-11-23-seo-conversietest-run-9
titel: "SEO- en conversietest run 9 — auditblok D (conversie), RUN 8 nooit geregistreerd"
kerntitel: "RUN 8 (16 nov) nooit vastgelegd; negatieve voorraad 2.0-varianten ondanks InStock"
datum: 2026-11-23
bron: routine
routine: "seo-conversietest"
categorie: CRO
status: nieuw
prioriteit: P1
samenvatting: "Een volledige RUN (16 november, blok B) is in het Shopify-logboek geschreven maar nooit in de vault-backlog, -notities of -geheugen terechtgekomen; die twee P1-bevindingen staan nu, een week te laat, alsnog in de backlog. De diepe audit van blok D (conversie) bevestigt dat de negatieve voorraad op alle zes 2.0-varianten aanhoudt terwijl het Product-schema nog InStock meldt, en dat deze week de vierde nul-omzetweek in zes weken is ondanks een sterke stijging in sessies."
gerelateerd: [2026-11-23-regressiecheck, 2026-11-09-seo-conversietest-run-7]
vervangt: []
bronbestand: "https://admin.shopify.com/store/raqds3-tb/pages/168287895879"
deadline: ""
---
# SEO- en conversietest run 9 — auditblok D (conversie), RUN 8 nooit geregistreerd

> Map: [[Waar staat wat]]

## In het kort
Het Shopify-logboek (`seo-routine-logboek`) bevatte al een volledige "RUN 8 — 16 november 2026" met twee P1-bevindingen en een gebouwd concept, maar geen van beide is ooit in de vault aangekomen: geen notitie, geen backlogpunt, geen geheugenregel. Die twee punten staan nu, een week te laat, alsnog in de backlog. Deze run (RUN 9) deed daarnaast de diepe audit van blok D (conversie — rotatie liep al door naar blok D volgens het logboek, niet blok B zoals het verouderde vault-geheugen nog zei), herbouwde het Waardebalk-concept in het actuele unpublished testthema, en meette een vierde nul-omzetweek in zes weken.

## Kerncijfers
- **358** · Sessies deze week (17-23 nov) · +122% t.o.v. vorige week (161)
- **0** · Orders deze week · vorige week 3 (€91,16)
- **1,86% → 0%** · Conversieratio, vorige week vs. deze week
- **-30** · Laagste variant-voorraad (PGSZ203 43–47), ondanks InStock-schema

## Acties
- [ ] P1 · Besluit: negatieve voorraad op alle zes 2.0-varianten (PGSZ201 -6, PGSZ202 -23, PGSZ203 -30, PGSW201 -8, PGSW202 -15, PGSW203 -24) terwijl Product-schema InStock blijft melden — risico op Merchant Center-afkeuring; bevestig de echte voorraadstatus.
- [ ] P1 · [conversietest] Collectiebeschrijving en interne links naar de sportpagina's op /collections/gripsokken zijn sinds de thema-wissel van begin november verdwenen (ontdekt 16 nov, nu opnieuw bevestigd) — concepttekst + kortere titel staan al klaar in het logboek §9.2.
- [ ] P2 · Besluit: bevestig vóór publicatie dat thema 204029296967 nog het juiste/actuele unpublished thema is — het MAIN-thema is op 23 nov alweer gewisseld (nu 204874187079) en dit thema is niet gegarandeerd een actuele kopie.
- [ ] P2 · De `theme_bash`-connector (Shopify MCP) weigert deze run met "This connector requires additional permissions" — moet opnieuw gekoppeld worden met extra rechten; themawerk liep nu via directe GraphQL-mutaties (trager, foutgevoeliger).

## Bevindingen
### Procesgat: RUN 8 (16 november) nooit geregistreerd
Het Shopify-logboek `seo-routine-logboek` bevat sinds 16 november een volledige sectie "RUN 8" met twee P1-bevindingen (collectiebeschrijving + interne links verdwenen op /collections/gripsokken; negatieve voorraad op de zes 2.0-varianten) en een gebouwd concept (nieuwe collectiebeschrijving + kortere titel). Geen van beide kwam in de vault terecht: er bestaat geen `02_Dashboard/2026-11-16-seo-conversietest-run-8.md`, geen backlogpunt, geen geheugenregel voor die datum. Het vault-geheugen (`_geheugen/seo.md`) liep daardoor een volle auditrotatie-cyclus achter (zei nog "volgende: blok B", terwijl het logboek na RUN 8 al "volgende: blok D" meldde). Oorzaak niet te achterhalen vanuit deze sessie (geen git-geschiedenis van een gestopte run gevonden); vermoedelijk is een eerdere run gestopt na de Shopify-stap maar vóór de vault-registratie. Beide RUN 8-bevindingen staan nu, een week te laat, als backlogpunten hierboven.

### Audit — blok D (conversie): bevestigd, geen nieuwe bevindingen
Gecontroleerd op de productpagina (Performance Gripsokken 2.0 Zwart): iDEAL/Wero ontbreken nog in de betaalicoon-rij (al open, backlog); USP-balk, sticky add-to-cart en de bundels (3-pack/5-pack, "Meest gekozen") zijn aanwezig en ongewijzigd; geen sterren/reviewwidget en geen FAQPage (geblokkeerd op de reviewapp-keuze, backlog#10ef70ca); geen cross-sell-sectie. Het Product-schema meldt InStock op alle zes 2.0-varianten terwijl de werkelijke voorraad negatief is — zie de actie hierboven.

### Meting (Shopify Analytics, 7 dagen / 7 daarvoor)
| Metric | 17-23 nov | 10-16 nov |
|---|---|---|
| Sessies | 358 | 161 |
| Orders | 0 | 3 |
| Omzet | €0 | €91,16 |
| Add-to-cart sessies | 10 | 9 |
| Bereikte checkout | 3 | 7 |
| Voltooide checkout | 0 | 3 |
| Conversieratio | 0% | 1,86% |

Sessies stegen sterk (vooral direct 80→210 en social 23→104) maar leverden geen enkele order op: de vierde nul-omzetweek in zes weken. Dit bevestigt verder het patroon achter het al openstaande backlogpunt "patroon van herhaalde nul-omzetweken laten onderzoeken" (geen nieuw punt). Top landingspagina's: `/` (175), `/products/performance-gripsokken-2-0-wit` (76), `/pages/early-access` (24, nieuw), `/products/performance-gripsokken-2-0-zwart` (23), `/password` (15, nieuw en opvallend voor een live store — mogelijk een tijdelijke campagne-/preview-afscherming, niet verder onderzocht).

### Gebouwd (concept): Waardebalk herbouwd in het actuele unpublished thema
Het `hi-pack-value-bar`-blok (RUN 3, backlogpunt 1+12 — gratis-verzenddrempel + prijs per paar) stond sinds de thema-wissel van begin november alleen nog in het verlaten testthema 200249901383 (zie RUN 7). Vandaag overgezet naar thema `204029296967` (UNPUBLISHED, "Bijgewerkte kopie van Live website 04-11-2026"): `blocks/hi-pack-value-bar.liquid` en `assets/hi-pack-value-bar.js` 1-op-1 overgenomen, en toegevoegd aan `templates/product.json` van dat thema, direct na de variant-picker. Via directe GraphQL-mutaties (`themeFilesUpsert`), omdat de `theme_bash`-sandbox deze run een permissiefout gaf. Gecontroleerd door het bestand na upload terug te lezen: identiek aan wat verstuurd is. **[CHECK]**: bevestig vóór publicatie dat dit nog het actuele unpublished thema is — het themalandschap wisselde op 23 nov alweer (nieuw MAIN 204874187079).

**Testplan:** hypothese: de balk verhoogt de add-to-cart-ratio op productpagina's (nulmeting RUN 3: 9/276 = 3,3%). KPI: add-to-cart-ratio op productpaginasessies. Startdatum: zodra gepubliceerd. Evaluatiedatum: 4-8 weken na publicatie.

### Evaluatie lopende testplannen
- **RUN 2 (/collections/gripsokken):** label blijft **werkt niet meer** — vandaag opnieuw bevestigd dat collectiebeschrijving en interne links nog ontbreken.
- **RUN 5 (productType/GTIN):** label blijft **live, te vroeg voor evaluatie** — geen nieuwe controle vandaag.
- **Waardebalk:** van **te vroeg/risico op verlies** naar **opnieuw gebouwd, nog niet gepubliceerd**; testklok start pas bij publicatie.

## Wat niet lukte
`python 02_Dashboard/_tools/google_data.py` (elke subcommand) werd deze run volledig geblokkeerd door een Bash-permissieplugin (cc-plugin-privacy: het script bevat het service-account-e-mailadres), en er was geen GA4-MCP beschikbaar in deze sessie. Daardoor geen GA4-kruisverwijzing en geen Search Console-hergebruik mogelijk deze week (module B kon om dezelfde reden niet draaien); gemeten is uitsluitend met Shopify Analytics. De `theme_bash`-connector weigerde met een permissiefout; themawerk liep via directe GraphQL-mutaties (zie Acties).

## Bronnen
- Shopify Analytics (ShopifyQL) — sessies, conversie, add-to-cart, landingspagina's
- Shopify Admin API — voorraad, productType/vendor/barcode, thema-lijst
- `https://www.higrip.nl/collections/gripsokken`, `/products/performance-gripsokken-2-0-zwart` (live curl-controle)
- Shopify-logboek `seo-routine-logboek` (RUN 7, 8, 9)
- `02_Dashboard/_geheugen/seo.md`, `02_Dashboard/_backlog/ACTIEBACKLOG.md`
