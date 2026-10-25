---
type: kennis
gebied: agent-infrastructuur
bijgewerkt: 2026-10-25
---

# Routine — SEO (wekelijks, maandag 06:00)

> Map: [[Waar staat wat]]

> Promptbestand. De routine op info@ heet **HÏ Grip — SEO** en bevat alleen: "Lees en volg `02_Dashboard/Routines/SEO.md` in de HÏ Grip-vault." Wijzig de werking hier.

Vervangt SEO-regressiecheck, SEO- en conversietest, Search Console & rankings en Backlinks & Merchant Center. Eén sessie voor www.higrip.nl, Nederlands, kort en feitelijk. Basisregels (tokens, veiligheid, push): `02_Dashboard/Routines/Routine-basisregels.md`. Beslissingen horen bij Team HÏ Grip.

**Modules, in deze volgorde:** A technische regressiecheck · B Search Console & rankings · C meten, audit, bouwen, evalueren · D Backlinks & Merchant Center, **alleen op de eerste maandag van de maand** (dag 1 t/m 7). *Auditblok B/C/D in module C is iets anders dan module B/C/D.* Een module die faalt stopt de andere niet: noteer het onder `## Wat niet lukte` en ga door.

## Rolverdeling (Doet NIET)
- **A is de enige routine die de site technisch controleert.** B, C en D gebruiken de uitkomst van A uit deze run en herhalen die niet. A is een controle- en geen bouwtaak: geen thema-bestanden wijzigen, niets naar het thema pushen, geen content. Een saai rapport is een goed rapport.
- **B** controleert geen site-techniek en bouwt niets. **C** zoekt geen technische regressies. **D** doet geen on-page SEO (C), geen posities of zoektermen (B), geen technische check (A); links aanvragen of partners mailen doet een mens, jij levert de lijst.
- Bestaande backlogpunten controleert of vinkt niemand hier af: dat doet de actiecontrole.
- Marktnieuws over SEO-thema's blijft bij de Growth Radar.

## Harde grenzen
1. **Alleen C schrijft in Shopify, en alleen als concept (modus CONCEPT).** A, B en D: Merchant Center, Search Console, Shopify en de site alleen lezen; nooit een feed, product, prijs of instelling wijzigen.
2. Nooit iets verwijderen; geen prijzen, kortingen, voorraad of bestellingen wijzigen; geen thema publiceren; niet aan checkout of betaalinstellingen komen; geen URL-handles van live pagina's wijzigen.
3. Geen persoonsgegevens van klanten, alleen totalen. Niets en geen cijfers verzinnen: is een bron niet gekoppeld of geeft hij een fout, neem de uitleg letterlijk over onder `## Wat niet lukte` en ga door.

## Fase 1 — Gedeelde leesfase (één keer)
1. `Routine-basisregels.md` en `CLAUDE.md`.
2. `00_Brand_Core/Feiten & Actuele Staat.md`: zoek gericht (handles, thema-regels, claims, domein, hoofdkeyword, long-tails, concurrenten, bevestigde waarden voor prijzen, verzenddrempel, verzendbelofte, retourtermijn). **Gebruik geen URL of ID uit je eigen kennis.** Voor C en de GTIN-controle in D gericht in `00_Brand_Core/Performance Grip Socks 2.0.md` (enige bron voor prijzen, maten, claims, verzendregels, EAN-lijst).
3. Geheugen `02_Dashboard/_geheugen/seo.md` (groot): eerst `grep -n "^## "`, lees dan alleen de kopjes van de modules die draaien, daarin de recente regels en de nieuwste URL-lijst. Volg de geheugenregel uit `_geheugen/README.md`: alleen nieuwe punten, veranderde punten bijwerken, niets nieuws is een geldige uitkomst.
4. Backlog: `python 02_Dashboard/_tools/acties.py open`. `ACTIEBACKLOG.md`, `CONTROLE.json` en `AFGEROND.md` niet volledig lezen: zoek op trefwoorden (wat de actiecontrole als gedaan, open, handmatig of dubbel vastlegde). Punten met `[regressie]` zijn van module A. Stel niets voor wat als gedaan of dubbel staat.
5. Google-data: `python 02_Dashboard/_tools/google_data.py check` één keer; `ga4` en `gsc` ook één keer per periode, hergebruik in A, B en C. Filter botverkeer (Direct uit de VS of China met minder dan 5% engagement) eruit of vermeld het expliciet.

## Module A — Technische regressiecheck
**URL-lijst (niet hardcoded):** `https://www.higrip.nl/sitemap.xml` en sub-sitemaps. Altijd: homepage, elke productpagina uit de sitemap, alle collecties, elke `/pages/gripsokken-*`-sportpagina, de blogindex en het nieuwste artikel, plus `/en/`. Vergelijk met de lijst van vorige week (geheugen) en meld wat nieuw is of verdwenen. Oude handles uit het feitenbestand: alleen een correcte 301 met maximaal 1 stap.

**Checks per URL** (ruwe HTML met curl; plak de regeleindes aan elkaar vóór je grept, want meta-tags lopen over meerdere regels):
1. HTTP 200 en responstijd onder 1,5 s.
2. Precies één niet-lege `<title>` en een niet-lege meta description.
3. Precies één `<h1>`.
4. Canonical naar dezelfde URL op www.higrip.nl; `hreflang` correct op NL en EN.
5. JSON-LD `@type`: overal `Organization` en `WebSite`; buiten de homepage ook `BreadcrumbList`; productpagina's `Product`/`ProductGroup` + `Offer` (+ `FAQPage` bij een zichtbare FAQ); collecties `ItemList`; artikelen `Article`.
6. **Kritiek:** `aggregateRating` hoort er niet te staan zolang er geen zichtbare reviews zijn. Vind je hem toch, meld dat als eerste punt.
7. Tel `alt=""` op de homepage; meld boven de 12.
8. **Tegenspraak met de feiten:** vergelijk zichtbare prijzen, verzenddrempel, verzendbelofte en retourtermijn met de "bevestigde waarde" in het feitenbestand. Meld elke afwijking.

**Extra:**
- `shopify theme check`, alleen als de thema-map beschikbaar is (lokaal `C:\Users\Test\higrip-theme`). Niet melden: JSONMissingBlock (Bundler), ImgWidthAndHeight, ParserBlockingScript. Vraagt de CLI om in te loggen: melden en overslaan.
- GA4: sessies per kanaal laatste 7 dagen tegenover de 7 daarvoor, aantal key events (0 = conversiemeting werkt nog niet) en kanaal "AI Assistant" over 30 dagen.
- PageSpeed Insights (mobiel) voor de homepage, 1 collectie en 1 product: LCP, INP, CLS. Lukt het niet (quotum): melden.

**Uitkomst A:** notitie `02_Dashboard/JJJJ-MM-DD-regressiecheck.md` (`routine: seo-regressiecheck`), onder `## Bevindingen`: "Afwijkingen" (genummerd, ernstigste eerst, met URL, wat er mis is en de fix), "Ongewijzigd" (aantal schone URL's), "Trend" (GA4 en CWV). Geen afwijkingen? Schrijf letterlijk "Geen afwijkingen deze week". Backlog: alleen nieuwe afwijkingen als `### [ ] [regressie] …` onder P1, met Waarom / Waar / Wat / Gevonden op, **maximaal 5 per week**. Staat de afwijking al open: geen nieuw punt, het bestaande niet wijzigen, in de notitie één regel "staat open in de backlog". Bevestigde de actiecontrole het punt als `gedaan` en is het weer kapot: nieuw punt `### [ ] [regressie] … (weer kapot, eerder bevestigd <datum>)`.

## Module B — Search Console & rankings
Hoe doet higrip.nl het in Google, en leveren verbeteringen iets op? Draai `python 02_Dashboard/_tools/google_data.py gsc --dagen 7 --top 50` en `--dagen 28`. Geeft Search Console "FOUT": meld de foutmelding in je notitie en sla de rest van B over; verzin geen cijfers.

**Timing:** het script eindigt op vandaag min 3 dagen, dus een maandagrun meet t/m vrijdag. Dat is werkbaar voor een 7-tegen-7-vergelijking (zelfde opzet elke week), maar het weekend zie je pas de week erna en het venster schuift twee dagen op ten opzichte van de oude woensdagmeting. Noem dat in de eerste notitie na de omschakeling en trek geen conclusies uit dat ene verschil.

Meting (7 tegen 7 dagen, plus 28 dagen):
1. **Totaal:** klikken, vertoningen, CTR, gemiddelde positie. AI Overviews/AI Mode apart als het generatieve-AI-rapport beschikbaar is.
2. **Zoektermen:** top 25 op vertoningen. Markeer nieuw (niet in geheugen), gestegen of gedaald (≥ 3 posities), merk of niet-merk ("hi grip"/"higrip").
3. **Kernkeywords:** "gripsokken", "gripsokken kopen", "gripsokken voetbal", "gripsokken padel", "gripsokken tennis", "gripsokken rugby", "antislip sokken", "grip socks", plus de long-tails uit het feitenbestand: positie en rankende URL.
4. **Pagina's:** top 15 op klikken, grootste stijgers en dalers. Rankt `/` op "gripsokken voetbal" terwijl er een sportpagina is: **kannibalisatie**.
5. **Kansen:** zoektermen op positie 5–20 met ≥ 20 vertoningen (striking distance); pagina's met veel vertoningen en CTR onder 2% (titel of meta verbeteren).
6. **Indexering:** geïndexeerd tegenover niet-geïndexeerd, met redenen; nieuwe fouten in "Pagina's"?
7. **Doorwerking:** trend sinds de startdatum van pagina's die module C eerder aanpaste (geheugen kopje module C) en van acties die de actiecontrole als gedaan bevestigde (`sinds` in `CONTROLE.json`, of `**Bevestigd:**` in `AFGEROND.md`).

Te weinig data (bijv. < 100 vertoningen per zoekterm): zeg dat, geen conclusies.

**Uitkomst B:** notitie `02_Dashboard/JJJJ-MM-DD-search-console.md` (`routine: search-console`). Klikken, vertoningen, CTR en positie in `## Kerncijfers`, tabellen onder `## Bevindingen`: totalen (deze week, vorige week, verschil), kernkeywords (positie, verschil, URL), nieuwe zoektermen, kansen, kannibalisatie, doorwerking. Backlog: **maximaal 3 nieuwe punten per week**, prefix `[search-console]`, alleen concrete kansen (bijv. "titel /collections/gripsokken herschrijven: 340 vertoningen, CTR 0,6%").

## Module C — Meten, audit, bouwen, evalueren
Vindbaarheid (Google én AI-zoekmachines) en conversie meetbaar verbeteren: meten → kleine verbeteringen als concept bouwen → testen of eerdere verbeteringen werken.

**Instellingen:** winkel HÏ Grip via de Shopify-koppeling (controleer met `get-shop-info`; meerdere winkels: `switch-shop`). Alleen een niet-gepubliceerd testthema, controleer eerst welke thema's er zijn, nooit het live thema. Detaillogboek: de verborgen Shopify-pagina met handle `seo-routine-logboek` (per item: wat, waar, ID, oude waarde, datum, zodat alles terug te draaien is); bestaat hij niet, maak hem aan als verborgen pagina. Modus LIVE bestaat pas als Team HÏ Grip dat hier expliciet aanpast.

**Extra harde regels:** bestaande live content wijzig je niet, je stelt wijzigingen voor. Twijfel: `[CHECK]` in het concept en noem het in je notitie. Maximaal 1 blogartikel en maximaal 2 nieuwe of herziene pagina's per run. Valideer GraphQL met `validate_graphql_codeblocks` vóór elke mutation. Lukt iets niet: noteer, ga door, meld.

**Meten** (laatste 7 dagen, 7 daarvoor en de nulmeting 23 sep 2026): Shopify Analytics (sessies, sessies via zoekmachines, conversieratio, add-to-cart, bereikte checkout, orders, gemiddelde orderwaarde, omzet, top-10 landingspagina's); GA4 dezelfde funnel (hergebruik fase 1); Search Console vertoningen en klikken van pagina's die deze routine eerder maakte of aanpaste (hergebruik module B). Weinig sessies: geen harde conclusies.

**Audit (roulerend, één auditblok diep per run):** welk blok aan de beurt is staat in het geheugen. Volgorde **B → C → D → B …**
- **Auditblok B, producten en collecties:** SEO-titel (max 60 tekens, keyword vooraan), meta description (± 150–155 tekens), unieke beschrijving, alt-teksten, collectietekst van 150–300 woorden, complete productdata voor Google Shopping en AI-agents (merk, materiaal, kleur, maat, sport, categorie, GTIN uit de EAN-lijst), interne links.
- **Auditblok C, content en AI-zichtbaarheid:** vragen als kop, direct antwoord in de eerste 1–2 zinnen, feiten en tabellen, E-E-A-T, content-gaten tegenover concurrenten, NL én EN.
- **Auditblok D, conversie:** productpagina (sterren, maatbereik consistent — **géén aparte maatgids-pagina, afgewezen door Lars 28-9**, USP-balk, iDEAL | Wero, bestelknop op mobiel, bundels, cross-sell), vertrouwen, collectiepagina's, zakelijk-pagina, FAQ.

**Bouwen (1–3 items):** houd een backlog bij, gesorteerd op impact × zekerheid ÷ moeite, voer de bovenste 1–3 uit. Pagina's en blogs als verborgen pagina of niet-gepubliceerd artikel (Nederlands, SEO-titel, meta description, interne links). Secties alleen in een niet-gepubliceerd thema; lukt dat niet, zet de Liquid/JSON in je notitie. Elk item krijgt een testplan: hypothese, KPI, startdatum, evaluatiedatum (SEO: 4–8 weken).

**Evalueren:** vergelijk de KPI's van eerdere items met hun startmeting. Label: werkt / werkt niet / te vroeg / te weinig data. Werkt iets niet: stel een aanpassing of terugdraaien voor.

**Uitkomst C:** notitie `02_Dashboard/JJJJ-MM-DD-seo-conversietest-run-<n>.md` (`routine: seo-conversietest`, `bronbestand` = admin-URL van het logboek, `## Kerncijfers` met de belangrijkste KPI's): samenvatting in 3 zinnen, KPI-tabel (deze week, vorige week, nulmeting, verschil), wat gemaakt of voorgesteld is met admin-links, resultaten van eerdere tests, wat Team HÏ Grip zelf moet doen. Backlog: aanbevelingen voor een mens als `### [ ] [conversietest] …` in `ACTIEBACKLOG.md`; nooit dupliceren met bestaande punten of met wat in `CONTROLE.json` als `gedaan` of `dubbel` staat.

## Module D — Backlinks & Merchant Center (alleen eerste maandag)
Nieuwe en verloren links, verwijzende domeinen, link-kansen (bijv. clubs of partners die HÏ Grip noemen maar niet linken), en Merchant Center-statussen, afkeuringen, fouten en waarschuwingen met oorzaak en oplossing.

**Guard (eerst):** `grep -E "^[0-9]{4}-[0-9]{2}-[0-9]{2} [|] run [|]" 02_Dashboard/_geheugen/seo.md | tail -1`. Geen uitvoer = eerste run: ga door. Minder dan 25 dagen geleden? Sla alleen module D over en meld "D overgeslagen: vorige run <datum>"; de andere modules gaan gewoon door.

**Merchant Center:** (1) `python 02_Dashboard/_tools/google_data.py merchant`. Geeft het "niet gekoppeld" of een fout: neem de uitleg letterlijk over onder `## Wat niet lukte` en sla de rest van deze stap over. (2) Tel per status (goedgekeurd, afgekeurd, beperkt), groepeer problemen per soort (ontbrekende GTIN, prijsverschil, afbeelding, verzending): aantal producten, ernst, oorzaak, oplossing (welk veld in Shopify of welke instelling in de feed-app). (3) Twijfel bij een GTIN- of merkfout: controleer het product via de Shopify-connector (alleen lezen) en de EAN-lijst.

**Backlinks (max 6 zoekopdrachten, max 15 URL's controleren):** het linkrapport van Search Console bestaat niet in de API. (1) Staat een Ahrefs- of Similarweb-connector aan? Gebruik die (verwijzende domeinen, nieuw en verloren) en sla 2 en 3 over. (2) Verloren links: controleer elke link uit de linkinventaris (geheugen) met `curl -sL -o /tmp/bl.html -w "%{http_code}"` en `grep -c "higrip.nl" /tmp/bl.html`; geen 200 of geen link meer = verloren. (3) Nieuwe links en vermeldingen: websearch naar `"higrip.nl" -site:higrip.nl` en `"HÏ Grip" OR "HI Grip" gripsokken -site:higrip.nl`, laatste maand; vermelding zonder link = link-kans. (4) Kijk bij de concurrenten uit het feitenbestand welke soorten sites naar hen linken (clubs, bonden, blogs, vergelijkers), alleen als zoekrichting.

**Uitkomst D:** notitie `02_Dashboard/JJJJ-MM-DD-backlinks-merchant.md`: `titel: "Backlinks & Merchant Center — JJJJ-MM-DD (<kern>)"`, `kerntitel`, `routine: backlinks-merchant`, `bronbestand: ""`. `## Kerncijfers` alleen echte cijfers (goedgekeurd, afgekeurd, verwijzende domeinen). `## Bevindingen`: `### Merchant Center` (tabel per soort probleem), `### Backlinks` (nieuw, verloren, link-kansen met URL), `### Doorwerking` (wat sinds vorige maand is opgelost). `## Wat niet lukte` als een bron niet gekoppeld is of faalde. Backlog: **maximaal 3 nieuwe punten**, prefix `[merchant]` of `[backlinks]`; link-kansen zijn één punt met de lijst. Max vier regels afsluiting: Merchant-stand, nieuwe en verloren links, aantal acties, wat niet gekoppeld is.

## Fase 3 — Eindfase (één keer, in deze volgorde)
1. **Notities** per uitgevoerde module, ieder met `bron: routine`, `categorie: SEO` en de `routine`-waarde hierboven, volgens het sjabloon in `02_Dashboard/_build/PROCEDURE.md` (`kerntitel`, `## Kerncijfers`, vaste volgorde). Begin de `titel` met dezelfde reeksnaam als de vorige notitie van die reeks.
2. **Backlog:** de punten uit de modules, binnen de maxima hierboven. Daarna één keer `python 02_Dashboard/_tools/acties.py kop --door seo`.
3. **Geheugen:** `seo.md`, onder het kopje van de eigen module, formaat `JJJJ-MM-DD | thema | onderwerp | notitie-id`. A: URL-lijst van deze week (`### URL-lijst <datum>`) en één regel per afwijking. B: één regel kerncijfers per week plus een regel per nieuw behandeld keyword of kans. C: gebouwde items, lopende testplannen met evaluatiedatum, volgend auditblok. D: linkinventaris (`JJJJ-MM-DD | link | <verwijzende URL> | <notitie-id>`, verloren: `| link-verloren |`), één regel `JJJJ-MM-DD | merchant | <n> goed, <m> afgekeurd, <k> waarschuwingen | <notitie-id>`, en als laatste `JJJJ-MM-DD | run | <kern> | <notitie-id>`.
4. **Feiten:** klopt een handle, ID of URL in het feitenbestand niet meer, of wijkt de site af? Werk hem bij, met datum (live-kolom).
5. **Afronden:** procedure B, dan A3 (voor A: koppel aan de vorige regressiecheck), A4 (build), A5 (publiceren) en A6 (commit en push, nooit force) uit `PROCEDURE.md`, één keer voor alle notities van deze run. Geweigerde push of conflict: stop en meld.
6. **Melding:** de eerste zin is de belangrijkste actie voor Team HÏ Grip (uit C); daarna het aantal afwijkingen uit A, de kern van B, en op de eerste maandag de afsluiting van D.
