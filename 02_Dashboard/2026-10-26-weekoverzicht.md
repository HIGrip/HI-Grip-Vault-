---
id: 2026-10-26-weekoverzicht
titel: "Denzel Weekoverzicht — 2026-10-26 (eerste nul-bestellingen-week, eerste partnership-zoekactie in 5 weken)"
kerntitel: "Nul bestellingen deze week, geen technische oorzaak gevonden"
datum: 2026-10-26
bron: routine
routine: "denzel-week"
categorie: Merk
status: nieuw
prioriteit: P1
samenvatting: "Voor het eerst in de gemeten periode geeft zowel Shopify als GA4 nul bestellingen voor een volledige week (19–25 okt), bij een dalende funnel (add_to_cart 18→3) maar zonder gevonden technische oorzaak (cart/checkout werken, geen nieuwe regressie). Daarnaast is na 5 weken stilstand voor het eerst weer echt gezocht naar B2B- en event-kandidaten (5 nieuwe, waaronder de eerste 2 rugbyclub-kandidaten), terwijl de drie grootste besluiten (B2B-outreach, content-voorstel 05-10, homepage-herontwerp) nog steeds op Lars wachten."
gerelateerd: [2026-10-19-weekoverzicht, 2026-10-19-regressiecheck, 2026-10-21-search-console, 2026-10-19-seo-conversietest-run-5, 2026-10-19-productpagina-2-0-inspiratie-en-prototype, 2026-10-12-b2b-pagina-inspiratie, 2026-10-12-voordelenpagina-analyse, 2026-10-11-omzetgroei-koersbepaling]
vervangt: [2026-10-19-weekoverzicht]
bronbestand: ""
deadline: ""
---
# Denzel Weekoverzicht — 2026-10-26

> Map: [[Waar staat wat]]

## In het kort

Twee dingen staan deze week boven de rest. **Nul bestellingen:** zowel Shopify (`FROM sales`) als GA4 (`purchase`-key event) telt **0 bestellingen en €0 omzet** voor de week 19–25 oktober — de eerste keer in de gemeten periode dat dit gebeurt, tegen 4 bestellingen/€195,88 de week ervoor. De funnel zakte al vóór de checkout in (add_to_cart 18→3, begin_checkout 9→2), maar een live check vond geen technische oorzaak: productpagina's hebben een werkend "toevoegen aan winkelwagen"-formulier, `/cart.js` en `/cart` werken normaal. Bij dit weekvolume (tientallen echte sessies) kan dit ruis zijn, maar het is wel de eerste keer dat de teller op nul staat. **Partnership:** de kandidatenlijsten stonden sinds 21 september (5+ weken) zonder een echt nieuwe kandidaat — ruim boven de 1-2 weken-drempel uit deze routine, ook al concludeerden de weekoverzichten van 05-10/12-10/19-10 telkens "geen zoekactie nodig" op basis van de bijgewerkt-datum van beoordelingen in plaats van echte nieuwe vondsten. Deze week is dat gecorrigeerd: een volledige zoekactie leverde 5 nieuwe kandidaten op (3 B2B, 2 events), waaronder de eerste 2 rugbyclub-kandidaten sinds rugby kernsport werd. Verder: op de site is live bevestigd dat de titel van `/pages/terugbetalingsbeleid` niet meer "American Express" is (de fix van 19-10 is deels doorgevoerd), maar de meta description ontbreekt nog steeds, de dubbele H1 op de rugbypagina staat nog live, en de 3000+/3500+-sporterstegenspraak op de homepage en collectiepagina blijft onopgelost. Content-voorstel 05-10 staat nu precies 3 weken open bij Tigo; de stapelrem houdt nog net stand.

## Kerncijfers

- **0** · bestellingen (Shopify, 19–25 okt) / €0 · vorige week 4 / €195,88 — **eerste nul-week**
- **80** · GA4-sessies (19–25 okt) · −3,6% t.o.v. vorige week (83)
- **0** · GA4 key events (purchase) · vorige week 3
- **5** · nieuwe partnership-kandidaten (3 B2B + 2 events) · eerste echte zoekactie sinds 21-09

## Acties

- [ ] P1 · Besluit: duiding nul bestellingen week 19-25 okt — checkout/techniek is live gecontroleerd en werkt (product-, cart- en cart.js-check), maar de funnel zelf zakte al bij add_to_cart in (18→3 gebeurtenissen); bij dit weekvolume kan dit ruis zijn, maar het is de eerste meting met exact nul. Volgende week bevestigen of dit doorzet.

## Bevindingen

### Voortgang per hoofdagent

- **Partnership Agent** — eerste echte zoekactie sinds 21-09 (5+ weken stilstand, zie "Wat ik deze week zelf heb opgepakt"). 5 nieuwe kandidaten gevonden en beoordeeld, waarvan 4 direct outreach-klaar (Padelshop.com, Rotterdamse Rugby Club, RSRC, en bevestigd: de bestaande North Sea Beach Rugby-kandidaat heeft al contact maar wacht nog op een schaal/budget-check). Rugby — tot nu toe vrijwel afwezig in beide lijsten — heeft er met RSRC, Rotterdamse Rugby Club, North Sea Beach Rugby en Amsterdam Rugby 7s in één ronde 4 kandidaten bij gekregen. Het bestaande outreach-besluit (Powerleague Rotterdam, Panna Knock Out, "voorlopig niet" sinds 30-09) is ongewijzigd, alleen gesignaleerd dat het nog openstaat.
- **Content Agent** — content-voorstel van 05-10 staat nu exact 3 weken open bij Tigo (⏳ Wacht op lars). De stapelrem ("ouder dan 3 weken" maakt een nieuw voorstel mogelijk) is vandaag precies op de grens — 21 dagen, niet ouder dan — dus geen nieuw voorstel deze week, maar volgende week is de drempel hoe dan ook gehaald als er dan nog geen beoordeling is.
- **Website Agent** — geen nieuwe regressiecheck deze week (de module draait pas op info@ zodra de geconsolideerde `SEO.md`-routine live is, zie [[Stappenplan — Verdere Bouw]]); de twee P1's van 19-10 (dubbele H1 rugbypagina, titel/meta betalingsbeleid) zijn vandaag opnieuw door de actiecontrole gecontroleerd en staan nog op `open`. Een eigen live check (curl) van vier kernpagina's bevestigt en verfijnt dit (zie "Website-stand" hieronder) en bevestigt daarnaast dat Search Console een scherpe 7-dagenterugval in klikken/CTR zag ondanks een positieve 28-dagentrend.

### Afgevinkt door de actiecontrole deze week

Geen nieuwe bevestigingen: `CONTROLE.json` bevat geen enkele actie met uitkomst `gedaan` gecontroleerd tussen 19-10 en 26-10 (de laatste bevestigingen, van 14-10 en 18-10, zijn al in het weekoverzicht van 19-10 gemeld). `AFGEROND.md` heeft sindsdien ook geen nieuwe sectie.

### Wat ik deze week zelf heb opgepakt

- **B2B (Lijn A):** eerste echte zoekactie sinds 21-09 (lijst stond 5+ weken zonder nieuwe kandidaat, ver boven de 1-2 weken-drempel). 3 nieuwe kandidaten: Padelshop.com (padel-retailer, outreach-klaar), Rotterdamse Rugby Club (outreach-klaar, nog geen naam) en RSRC (outreach-klaar, met naam + rol). Daarnaast de 6 kandidaten zonder expliciete beoordeling (de gestopte pilates-studio's) nu formeel ❌ beoordeeld, en een vervolgzoekactie naar contact voor de resterende 5 tennisretailers — geen verbetering gevonden (Tennis-Point.nl alleen een Duits adres, TennisPro.nl's contactpagina gaf een 403, de rest niet vindbaar).
- **Events (Lijn B):** zelfde zoekactie, met expliciete focus op rugby (sterk ondervertegenwoordigd). 2 nieuwe kandidaten: North Sea Beach Rugby (Den Haag, direct contact, MIDDEL) en Amsterdam Rugby 7s (Amsterdam, nog geen werkend contact, MIDDEL). Tennis/padel en voetbal leverden deze ronde geen nieuwe kwalificerende kandidaat op.
- **Website:** geen eigen regressiecheck (geen nieuwe gevonden door de SEO-routine deze week), maar wel een gerichte live-controle van vier kernpagina's (verzendbeleid, retourbeleid, terugbetalingsbeleid, de rugbypagina) en de homepage/collectiepagina op de sporters-claim — zie Website-stand. Geen themabestand aangeraakt, uitsluitend lezen.
- **GA4/Shopify:** omzet en bestellingen via de Shopify-connector (alleen totalen), verkeer/funnel via `google_data.py`. Resultaat: het 0-bestellingen-signaal (zie In het kort), en een korte check dat cart/checkout technisch werken.
- **Content:** geen nieuw voorstel — stapelrem, zie boven.

### Website-stand en kant-en-klare fixes

Bron: [[2026-10-19-regressiecheck]] (vorige, nog actuele technische controle), [[2026-10-21-search-console]] (posities/klikken), [[2026-10-19-seo-conversietest-run-5]] (laatste conceptronde) en een eigen live-controle vandaag (curl op vier pagina's + homepage/collectie).

**Vandaag live gecontroleerd (geen nieuwe regressiecheck deze week, dus zelf nagelopen):**
- `/pages/terugbetalingsbeleid` — de titelfix uit het weekoverzicht van 19-10 ("Betalingsbeleid – HÏ Grip" i.p.v. "American Express") **staat live**. De meta description staat er nog niet (leeg) — dat deel van de kant-en-klare fix uit 19-10 ("Lees hier hoe je veilig kunt betalen bij HÏ Grip...") is dus nog niet geplakt.
- `/pages/gripsokken-voor-rugby` — **nog steeds twee `<h1>`-tags** (los tekstblok + hero-titel), exact zoals op 19-10 gevonden. Dit is een themawijziging, geen los te plakken tekst.
- `/pages/verzendbeleid` en `/pages/retourbeleid` — beide live bevestigd correct: €4,50 verzendkosten, €35-drempel, "1 werkdag", 30 dagen retour, geen 25%-herbevoorradingskosten en geen "ongeopend"-eis. De waarschuwing die deze week in de backlog-bijhoudtekst stond (dat deze pagina's de bedragen niet zouden noemen) klopt dus niet meer voor de live site — alleen de twee oude `/policies/*`-pagina's (refund-policy, shipping-policy) lopen nog achter, zoals al op 19-10 gemeld.
- **Sporters-claim (3000+ vs. 3500+):** nog steeds tegenstrijdig, nu live bevestigd op zowel de homepage als de collectiepagina. De meta description en de hero-tekst van beide pagina's zeggen "de keuze van 3000+ sporters", terwijl een los marquee-blok op dezelfde pagina's "DE KEUZE VAN 3500+ SPORTERS" toont. Dit staat al als kant-en-klare fix in [[2026-10-11-seo-audit-weekdelta]] — alleen nog niet doorgevoerd.

**Blijft ongewijzigd open (uit [[2026-10-19-regressiecheck]], niet opnieuw gecontroleerd):** schema gedeeltelijk (`WebSite` ontbreekt op de collectie, de drie productpagina's en beide blogindexen; `FAQPage` ontbreekt op de drie productpagina's); redirect-keten `hi-grip-gripsokken-1` nog 2 stappen; `/collections/all` zonder meta description; typo-handle `/pages/gripsokken-voetbal` 404; `/blogs/intern` publiek zonder `noindex`.

**Verkeer (Search Console, meting 21-10):** de 28-dagentrend zet de verbetering van de vorige twee metingen voort, maar de laatste 7 dagen laten een scherpe terugval zien in klikken en CTR (bevestigd door GA4: organic sessions ook fors lager, 37→23 deze week, zie Kerncijfers GA4-sectie). `/pages/gripsokken-voor-voetbal` (NL) zakt al 3 weken op rij verder in positie zonder duidelijke oorzaak in de zoektermdata — nieuw backlogpunt vanuit die routine zelf, hier niet gedupliceerd.

**Nieuw deze week, nog niet eerder gemeld:** drie losse onderzoeken van lokale sessies wachten nog op een reactie van Lars en zijn in geen eerder weekoverzicht genoemd: [[2026-10-19-productpagina-2-0-inspiratie-en-prototype]] (P1, nieuw productpagina-prototype 2.0), [[2026-10-12-voordelenpagina-analyse]] (P1, de voordelenpagina onderbouwt zijn claims niet) en [[2026-10-12-b2b-pagina-inspiratie]] (P2, inspiratie voor de zakelijke pagina). Geen van de drie is gebouwd of gepubliceerd.

### GA4-weekrapport en funnel (19–25 okt t.o.v. 12–18 okt)

> Property 476032345. Omzet en bestellingen komen uit Shopify: **0 bestellingen, €0** deze week tegen **4 bestellingen, €195,88** vorige week (Shopify-connector, `FROM sales SHOW orders, total_sales`). GA4 telde zelf ook 0 key events (purchaseRevenue €0) tegen 3 vorige week (€170,75) — voor het eerst zijn beide bronnen het eens op exact nul, geen meetverschil zoals in eerdere weken.

**Kanalen (sessies, ongefilterd):**

| Kanaal | Deze week | Vorige week |
|---|---|---|
| Direct | 37 | 27 |
| Organic Search | 23 | 37 |
| Organic Shopping | 7 | 1 |
| Organic Social | 5 | 6 |
| Cross-network | 3 | 0 |
| Referral | 3 | 9 |
| Unassigned | 1 | 3 |
| AI Assistant | 1 | 0 |

Organic Search daalde sterk (37→23, −37,8%) — consistent met de Search Console-terugval van deze week. Een deel van "Direct" is bot: "United States \| Direct" steeg naar 19 sessies (0% engagement) tegen 7 vorige week. Nieuw, klein: voor het eerst 1 sessie via het kanaal "AI Assistant" — te weinig om iets aan te concluderen, maar wel het eerste signaal van dit kanaal in de gemeten periode.

**Landen:** Nederland 45 (59 vorige week), Verenigde Staten 21 (9, grotendeels bot via "Direct"), Frankrijk 6 (1), overig incidenteel verspreid.

**Apparaat:** desktop 42 sessies (bounce 61,9%, 0 key events), mobiel 39 (bounce 35,9%, 0 key events — vorige week kwamen hier nog alle aankopen vandaan).

**Funnel (events, vorige week tussen haakjes):**

| Stap | Deze week | Vorige week |
|---|---|---|
| view_item_list | 16 | 25 |
| view_item | 25 | 35 |
| add_to_cart | 3 | 18 |
| begin_checkout | 2 | 9 |
| add_shipping_info | 2 | 6 |
| add_payment_info | 0 | 4 |
| **purchase** | **0** | **3** |

**Duiding:** de funnel zakt al bij add_to_cart sterk in (18→3 gebeurtenissen, −83%) — een grotere terugval dan de sessiedaling (−3,6%) kan verklaren. Een live check van de productpagina (knop "toevoegen aan winkelwagen" aanwezig), `/cart.js` (reageert normaal, leeg mandje) en `/cart` (laadt, HTTP 200) vond geen technische storing. Bij dit weekvolume (enkele tientallen echte sessies) is een week met nul conversies niet uit te sluiten als ruis, maar het is de eerste keer in de gemeten periode dat dit gebeurt — vandaar de nieuwe actie om dit volgende week te bevestigen of te weerleggen.

### Openstaande beslissingen voor Lars

Nieuw deze week (zie Acties): duiding van de nul-bestellingen-week. Daarnaast, ongewijzigd of bijgewerkt vanuit eerdere weken en losse notities — geen checkbox, deze tekst herhaalt die besluiten niet als nieuwe actie:

- **B2B-outreach-besluit** — nog open sinds [[2026-10-11-omzetgroei-koersbepaling]] (P1, nu 15 dagen open): B2B levert ±83% van de omzet maar outreach staat sinds 30-09 stil. De pool kandidaten is deze week groter geworden (5 nieuwe, 4 nu outreach-klaar), wat de vraag niet makkelijker maakt uit te stellen.
- **Nog open sinds [[2026-10-05-weekoverzicht]], nu exact 3 weken:** content-voorstel week 2026-10-05 beoordelen (Tigo).
- **Nog open sinds [[2026-10-14-homepage-herontwerp-vanaf-leeg-canvas-richting-b-doorgaan]]:** basisbesluit voor de homepage-bouw (prototype richting B), plus hero-kop en sportersaantal.
- **Nieuw gesignaleerd (zie Website-stand):** [[2026-10-19-productpagina-2-0-inspiratie-en-prototype]] (P1) en [[2026-10-12-voordelenpagina-analyse]] (P1) wachten allebei op een eerste reactie, nog in geen eerder weekoverzicht genoemd.
- **Nog open:** sporters-claim 3000+ vs. 3500+ op de NL-homepage en collectiepagina — vandaag opnieuw live bevestigd, fix staat al klaar in [[2026-10-11-seo-audit-weekdelta]].
- **Nog open:** meta description `/pages/terugbetalingsbeleid` plakken (titel is al gefixt) en de dubbele H1 op `/pages/gripsokken-voor-rugby` (themawijziging) verhelpen — tekst voor de meta description staat al in [[2026-10-19-weekoverzicht]].
- **Blokkade, al langer open:** reviewapp koppelen (backlogpunt 2) — wacht op een menselijke keuze.

### Vooruitblik — komende week

1. **Nul-bestellingen-week duiden** — bevestigen of herstellen in de volgende meting, en zo niet, dieper kijken dan de technische check van deze week (bv. een eigen testbestelling).
2. **B2B-outreach-besluit van Lars** — nu 15 dagen open, met een grotere kandidatenpool dan vorige week.
3. **Content-voorstel 05-10 laten beoordelen** door Tigo — bij 3 weken (nu bereikt) mag een nieuwe routine-run een nieuw voorstel maken als er dan nog geen beoordeling is.
4. **Homepage-herontwerp: basisbesluit nemen.**
5. **Meta description betalingsbeleid plakken** (tekst staat al klaar) en **dubbele H1 rugbypagina** fixen (themawijziging).

### AI-ontwikkelingen die relevant kunnen zijn

Gerichte websearch naar nieuwe AI-tools/-functies voor content, marketing en e-commerce (Shopify-AI-apps, Buffer/TikTok-functies, agentic shopping/ChatGPT checkout) leverde niets op dat de datumtoets doorstaat: vooral evergreen vendor-content, ongedateerde artikelen of nieuws van eerder in 2026 (bv. de ChatGPT Instant Checkout-ontwikkeling liep via september 2025 en maart 2026, niets nieuws voor oktober). Dat komt overeen met de eigen Growth Radar-routines van deze week (10-20 content, 10-21 AI-search, 10-22 CRO, 10-26 SEO-technisch), die alle vier zelf ook niets vonden dat hun datumtoets doorstond. Wel een datapunt, geen "ontwikkeling": voor het eerst verscheen in GA4 een sessie via het kanaal "AI Assistant" (zie GA4-sectie) — te weinig volume om iets te concluderen, maar het eerste signaal van dit kanaal in de gemeten periode.

**Update 26 okt 2026 (Team HÏ Grip):** deze zoekactie keek alleen naar externe AI-ontwikkelingen. De eigenlijke relevante AI-ontwikkeling van deze week is intern: de vault/agentstructuur is herzien (dit blok 00-08, zie [[SCHEMA]] en `log.md`), met nieuwe agents en het gebruik van Hermes en de terminal. Dat verklaart ook waarom de paden en routines uit eerdere weekoverzichten (05_Research, oude Routines-map) deze week zijn verschoven naar `02_Dashboard` en `01_Agent_Infrastructuur`.

## Bronnen

- [[2026-10-19-regressiecheck]] · [[2026-10-21-search-console]] · [[2026-10-19-seo-conversietest-run-5]] · [[2026-10-19-productpagina-2-0-inspiratie-en-prototype]] · [[2026-10-12-b2b-pagina-inspiratie]] · [[2026-10-12-voordelenpagina-analyse]] · [[2026-10-11-omzetgroei-koersbepaling]] · [[2026-10-11-seo-audit-weekdelta]]
- `python3.13 02_Dashboard/_tools/google_data.py check|ga4 --dagen 7` (26 oktober 2026)
- Shopify-connector: `FROM sales SHOW orders, total_sales (TIMESERIES day) SINCE 2026-10-12 UNTIL 2026-10-25`, `... COMPARE TO previous_period`
- Live curl-controle: `/pages/verzendbeleid`, `/pages/retourbeleid`, `/pages/terugbetalingsbeleid`, `/pages/gripsokken-voor-rugby`, `/`, `/collections/gripsokken`, `/products/performance-gripsokken-2-0-zwart`, `/cart.js`, `/cart`
- `02_Dashboard/_backlog/CONTROLE.json` · `02_Dashboard/_backlog/ACTIEBACKLOG.md` · `02_Dashboard/_backlog/AFGEROND.md`
- [[Voorbeelden Gevonden Organisaties (B2B Klanten)]] · [[Voorbeelden Gevonden Organisaties (Events)]] · [[Agent Werk & Kwaliteit Overzicht]]
- [[Stappenplan — Verdere Bouw]] · [[Feedback & Iteratie Log]]
- Zoekactie B2B/events uitgevoerd door de sub-agents `b2b-klanten-agent` en `partnerships-events-agent` (26 oktober 2026)
- Websearch AI-ontwikkelingen: Shopify/e-commerce AI-apps, Buffer/TikTok-functies, agentic shopping (26 oktober 2026, geen harde oktober-vondst)

## Aantekeningen
- **Team HÏ Grip · 2026-10-26 08:44** — Reactie op vooruitblikpunt 1 (nul-bestellingen-week duiden): wordt opgelost door deze week te starten met Ads. Dit is de advertentiebudget-beslissing waarop backlogpunt 10 (CAPI) en 24 (ChatGPT Ads) wachtten; punt 10 is daarom opgewaardeerd naar P1. Dit duidt de week nog niet technisch (de funnel-vraag uit "Vooruitblik" blijft openstaan voor de volgende meting), maar geeft wel een concreet vervolg.
- **Team HÏ Grip · 2026-10-26 08:44** — Reactie op vooruitblikpunt 4 (homepage-herontwerp, basisbesluit nemen): basisbesluit genomen, komt vandaag online. Zie de aantekening bij [[2026-10-14-homepage-herontwerp-vanaf-leeg-canvas-richting-b-doorgaan]] — de losse deelbesluiten (sportersaantal, hero-kop-variant) zijn niet gespecificeerd.
