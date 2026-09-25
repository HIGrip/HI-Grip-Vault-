---
id: 2026-09-25-evaluatie-routines
titel: "Evaluatie routines — Growth Radar, regressiecheck, SEO-conversietest, cloud-routine website, Denzel"
datum: 2026-09-25
bron: los
routine: ""
categorie: Techniek
status: nieuw
prioriteit: P1
samenvatting: "Van de vijf routines leveren Growth Radar, regressiecheck en de SEO-conversietest bruikbaar werk; de cloud-routine \"website\" faalt elke nacht (higrip.nl geblokkeerd, geen Shopify) en herhaalt foute claims, en Denzel schrijft nog naar de oude map zodat het weekoverzicht niet op het dashboard komt. Grootste systeemprobleem: acties landen op drie plekken en de backlog groeit (18 open, 0 afgerond) zonder dat er iets wordt afgevinkt."
gerelateerd: [2026-09-16-seo-onderzoek-cloud-routine-website, 2026-09-23-seo-conversietest-run-1, 2026-09-21-regressiecheck, 2026-09-14-weekoverzicht, 2026-09-25-growth-radar-social, 2026-09-21-weekoverzicht]
vervangt: []
bronbestand: ""
deadline: ""
---
# Evaluatie routines — 25 september 2026

## In het kort

Vijf automatische routines draaien voor HÏ Grip. Drie werken inhoudelijk goed, één is kapot en één mist sinds 17 september de koppeling met het dashboard. Het grootste probleem zit niet in één routine maar in het geheel: er wordt veel gevonden en weinig afgehandeld. Dezelfde bevindingen komen op meerdere plekken terug en de vaste context in de prompts veroudert.

## Bevindingen

### Overzicht

| Routine | Waar | Schema | Runs | Oordeel |
|---|---|---|---|---|
| Growth Radar | lokaal (desktop-app) | dagelijks 05:30 (+ jitter) | 10 sinds 15 sep, 19 sep gemist | Werkt goed |
| SEO-regressiecheck | lokaal | maandag 07:00 | 2 (15 en 21 sep) | Werkt goed |
| Website SEO- en conversietest | lokaal, Shopify-MCP | maandag 09:00 | 1 (23 sep, handmatig gestart) | Veelbelovend |
| Cloud-routine "website" (`trig_01BKt9WCeR9H92FDcS9HtPvV`) | claude.ai-cloud | dagelijks 01:30 | 10+ | Kapot, uitzetten |
| Denzel-weekoverzicht (`trig_01D9XwMiVvuq1FWr7CLoYTmN`) | claude.ai-cloud, ander account | maandag 08:00 | wekelijks sinds 24 aug | Werkt, maar schrijft naar de verkeerde map |

### Wat goed werkt
- **Growth Radar** houdt zich aan de dagfocus, het LEDGER voorkomt herhaling en de bevindingen zijn concreet voor higrip.nl. Voorbeelden: de gewijzigde prijsladder (24 sep) en de App Pixel op `optimized` als mogelijke oorzaak van `purchase = 0` (25 sep). De zondagrun deed wat hij moest doen: hij signaleerde dat de backlog boven de 15 open punten zat.
- **Regressiecheck** is bewust saai en verifieerbaar. Hij bevestigde opgeloste punten (H1, redirects), vond nieuwe regressies (lege `/en/`-titel) en meldde eerlijk dat GA4 die week een timeout gaf.
- **SEO-conversietest** is de enige routine met echte Shopify-toegang. Run 1 vond de belangrijkste inhoudelijke fout tot nu toe: de site spreekt zichzelf tegen over verzendkosten, de drempel voor gratis verzending, de verzendtijd en de retourtermijn ([[2026-09-23-seo-conversietest-run-1]]).

### Wat niet werkt
1. **De cloud-routine "website" faalt elke nacht structureel.** In de run van 24 september gaf WebFetch op higrip.nl `EGRESS_BLOCKED`. De Shopify-connector is wel gekoppeld maar niet ingeschakeld voor de routine, en er is geen vault-repo als bron. De routine heeft dus geen geheugen: elke nacht verschijnt een nieuw artifact met dezelfde foute claims (Trustpilot "4,5 uit 15", "geen sportpagina's", concurrent "Trusox"), die al op 16 september als onjuist zijn gemarkeerd ([[2026-09-16-seo-onderzoek-cloud-routine-website]]). De prompt ("creëer optimale pagina's en blogs") is vaag en vraagt dingen die de routine technisch niet kan. De SEO-conversietest doet hetzelfde werk wél goed, dus deze routine is volledig overbodig.
2. **Denzel is nooit bijgewerkt naar 05_Research.** Het weekoverzicht van 21 september staat in `04_Agent_Infrastructuur/Beheer/Weekoverzicht/Week 2026-09-21.md` en niet in `05_Research`, dus het staat niet op het dashboard. De routine hangt onder een ander claude.ai-account (via de API van dit account geeft hij 404). Daardoor is de prompttekst uit [[Denzel Weekoverzicht — Routineprompt stap 9 (2026-09-17)]] nooit doorgevoerd.
3. **Lokale routines slaan runs over als de pc slaapt.** Op 19 september (zaterdag, social content) draaide de Growth Radar niet. Op 21 september startten de Growth Radar en de regressiecheck allebei om 06:32, als inhaalrun. De afgesproken volgorde "regressiecheck vóór Growth Radar" klopt ook zonder inhaalrun niet: de Growth Radar staat op 05:30 (de titel zegt "08:00") en de regressiecheck op 07:00.

### Knelpunten in het geheel
- **Drie backlogs.** Acties staan in `ACTIEBACKLOG.md` (Growth Radar en regressiecheck), in de verborgen Shopify-pagina `seo-routine-logboek` (SEO-conversietest) en in de lijsten "openstaande beslissingen" en "vooruitblik" van Denzel. Hetzelfde punt komt meerdere keren terug. Een voorbeeld is de titel/meta en structured data: Denzel meldt die al 5 weken, de regressiecheck heeft er een P1 voor en de conversietest een voorstellenpakket.
- **Veel gevonden, niets afgevinkt.** De backlog telt 19 open koppen, 3 afgevinkt en 0 in `AFGEROND.md`, terwijl de zondagrun zelf een grens van 15 hanteert. Elke dag komen er tot 3 nieuwe punten bij, maar er is geen vast moment waarop de eigenaar punten afhandelt.
- **Overvolle maandag.** Op maandag draaien vier routines binnen drie uur: Growth Radar (SEO-technisch), regressiecheck, Denzel (live-site- en SEO-check) en de conversietest. Drie daarvan controleren grotendeels dezelfde technische SEO.
- **Verouderde vaste context.** De Growth Radar-prompt en `project_higrip.md` noemen nog de prijzen €14,99 / €41,99 / €64,99 (live: €13,49 / €39,95 / €61,95), "1.500+ sporters" (site: 3000+), gratis verzending vanaf €30 (voorwaarden: €35) en de handle `hi-grip-gripsokken-1`. Die handle loopt nu via twee redirects (`hi-grip-gripsokken-1` → `hi-grip-gripsokken` → `performance-gripsokken`). De regressiecheck controleert daardoor een redirect in plaats van de echte productpagina. `/pages/gripsokken-voetbal` staat in de URL-lijst maar geeft al twee weken een 404.
- **Kleine slordigheden.** De taaknaam `website-seo-en-cconversietest` heeft een typfout. Bij de conversietest is de description "analyseer de HÏ Grip website op  SEO- en conversie" niet informatief.

## Acties
- [x] P1 · Cloud-routine "website" (trig_01BKt9WCeR9H92FDcS9HtPvV) uitzetten — de SEO-conversietest dekt dit met echte Shopify-toegang
- [x] P1 · Denzel-routineprompt stap 9 handmatig doorvoeren op het account waar de routine draait, en Week 2026-09-21 als notitie naar 05_Research migreren
- [x] P2 · Vaste context (prijzen, sporters-claim, verzenddrempel, product-handle, URL-lijst regressiecheck) uit de prompts halen en naar één feitenbestand laten verwijzen dat na elke wijziging wordt bijgewerkt
- [x] P2 · Technische SEO-check op maandag bij één routine beleggen (regressiecheck) en uit Denzel en de Growth Radar-maandagfocus halen
- [ ] P2 · Eén backlog: aanbevelingen uit het Shopify-logboek en de Denzel-beslissingen spiegelen naar ACTIEBACKLOG.md of andersom, met één eigenaar
- [ ] P2 · Vast wekelijks afvinkmoment voor de eigenaar invoeren (bijv. maandag na Denzel), anders de instroom van de Growth Radar verlagen naar max. 1–2 punten per dag
- [x] P3 · Tijden en titels rechtzetten: Growth Radar-titel "08:00" versus cron 05:30, volgorde met de regressiecheck, typfout in de taaknaam van de conversietest

## Bronnen
- `mcp__scheduled-tasks` — lijst en runs van de drie lokale taken (opgevraagd op 25 sep 2026)
- RemoteTrigger — `trig_01BKt9WCeR9H92FDcS9HtPvV` config + runlog `cse_01RJs7tH1CfsMKA6i2fphNov` (24 sep), `trig_01D9XwMiVvuq1FWr7CLoYTmN` → 404
- `C:\Users\Test\.claude\scheduled-tasks\*\SKILL.md` — prompts van de lokale routines
- `C:\Users\Test\.claude\research\growth-radar\` — ACTIEBACKLOG, LEDGER, AFGEROND, rapporten
- [[Denzel Weekoverzicht — Routine]] en de git-log van de vault (Denzel-commits elke maandag om ~06:20 UTC)
- curl op higrip.nl (redirectketen productpagina, 404 voetbalpagina) — 25 sep 2026

## Aantekeningen
