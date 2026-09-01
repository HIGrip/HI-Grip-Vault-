# Feedback & Iteratie Log

> Bevindingen uit het bouwen/gebruiken van sub-agents — vastgelegd per iteratie, zodat de volgende sub-agent niet dezelfde uitzoek-omweg hoeft te maken. Zie [[Stappenplan — Verdere Bouw]] voor de fasering.

---

## 2026-09-01 — Buffer → Claude Code koppeling live (`buffer` MCP) — 2 van de 3 "fundamenteel gat"-databronnen dicht

**Wat er gebeurde:** de Buffer-koppeling die sinds de kwaliteitsreview van 25-08 als blocker openstond, is opgezet met een API-key (Bearer-token) i.p.v. de OAuth-connector. Token geverifieerd tegen `https://mcp.buffer.com/mcp` — `get_account` gaf het HÏ Grip-account terug, alle 20 tools zichtbaar. Volledige eindopzet: [[API & Tool Connections]] § Buffer. Dit sluit de tweede van de drie ontbrekende feedbackbronnen uit de review van 25-08 (GA4 ✅ / Buffer ✅ / volledige Shopify-data ✗).

**Bevindingen:**
- **OAuth-connector was niet nodig.** Het weekoverzicht van 31-08 stelde de OAuth-route voor (paar klikken in claude.ai). lars had al een API-key; die als `Authorization: Bearer` header op de HTTP-MCP-server werkt net zo goed en is niet sessie-gebonden aan een claude.ai-connectorautorisatie. Zelfde patroon als `rubik-combined-listings` in `mcp.json`.
- **Zelfde herstart-lag als GA4 / `shopify-dev`.** De draaiende sessie had `buffer` al zonder auth geladen; de header wordt pas na een herstart opgepikt. Tot die tijd werkt de endpoint wel via directe JSON-RPC-calls (getest).
- **Token op 3 plekken** (`.mcp.json`, `.claude\mcp.json`, `settings.local.json` als env) — secret, niet in vault/repo.

**Openstaand:** de inhoudelijke reden waarom Content Agent-automatisering nog niet gebouwd is (lars wil eerst intern afstemmen met de content-afdeling) staat los van de techniek nog open — zie [[Stappenplan — Verdere Bouw]].

---

## 2026-08-30 — GA4 → Claude Code koppeling live (`analytics-mcp`) — 1 van de 3 "fundamenteel gat"-databronnen dicht

**Wat er gebeurde:** de GA4-toegang die sinds 1 aug als blocker openstond ([[Analytics & KPI Dashboard]], Fase 2) is opgezet en getest. `analytics-mcp` draait in Claude Code; er is direct een testrapport uit GA4 getrokken. Volledige eindopzet: [[API & Tool Connections]] § GA4. Dit sluit de eerste van de drie ontbrekende feedback-bronnen uit de kwaliteitsreview van 25-08 (GA4 ✅ / Buffer ✗ / volledige Shopify-data ✗).

**Bevindingen:**
- **De oorspronkelijke checklist klopte niet meer.** `gcloud auth application-default login` met de `analytics.readonly`-scope wordt door Google geblokkeerd voor de gedeelde gcloud client-ID ("deze app is geblokkeerd"). Opgelost met een **service account + JSON-key** i.p.v. user-login — omzeilt de scope-blokkade en is robuuster voor een achtergrond-MCP (geen tokenverval). Les: bij een Google-Cloud-koppeling niet uitgaan van ADC-user-login; service account is de nettere route voor tooling.
- **Nieuwe MCP-servers moeten in `~/.claude.json`**, niet (alleen) in `~/.claude/mcp.json` — de VS Code-extensie leest `~/.claude.json`. Kostte een extra herstart-ronde. Voor volgende MCP-koppelingen: beide bijwerken.
- **De GA4-property was niet leeg — er zat een datagat in.** Data mrt–dec 2025 (~250 sessies/mnd), daarna dood vanaf ~1 jan 2026 tot heropgekoppeld op 30-8 via de Shopify Google & YouTube-integratie. Lars' waarneming "geen data over 28 dagen" klopte dus. Oorzaak van het stoppen (thema-republicatie / app-wijziging rond de jaarwisseling) nog niet achterhaald.
- **Eerste inhoudelijke signaal:** 43% van de sessies staat op "Direct" — onwaarschijnlijk hoog, vrijwel zeker untagged social/influencer-verkeer zonder UTM. Raakt het "kanaal → identiteit"-gat uit [[Conversie Optimalisatie Checklist]] en [[Website Doel & KPI's]].
- **Aanvullend opgezet: Microsoft Clarity** (gratis "Microsoft Clarity: AI Insights" Shopify-app) als kwalitatieve laag (sessierecordings, heatmaps, AI-frictiesamenvattingen), gekoppeld aan GA4. Vervangt GA4 niet — GA4 = "wat/waar", Clarity = "waarom". Nog te regelen: Clarity-cookies (`_clck`, `_clsk`) in de cookiebanner / achter consent (AVG).

**Vervolgstappen (voor de vooruitblik):**
1. **~2 weken verse data laten opbouwen** vóór resultaat-KPI's (conversieratio, AOV, omzet/bezoeker) worden opgezet — tot dan Shopify Analytics als omzetbron. Ná die periode: [[Analytics & KPI Dashboard]] vullen volgens de KPI-aanpak uit [[Website Doel & KPI's]].
2. **Funnel-rapport op de historische data** (`run_funnel_report`, mrt–dec 2025): grootste absolute drop-off product → cart → checkout → betaling zoeken → concreet CRO-startpunt voor de [[Conversie Optimalisatie Checklist]].
3. **Checken of de nieuwe koppeling `purchase`/e-commerce-events doorgeeft** (afhankelijk van de Shopify-koppelmethode) — zonder dat zijn er geen conversies in GA4.
4. **UTM-discipline invoeren** op alle uitgaande links (bio, posts, influencer-briefings, e-mail) om de Direct-oververtegenwoordiging op te lossen.
5. **Clarity in de cookiebanner / achter consent zetten** (AVG).
6. **Achterhalen waarom de GA4-tag rond 1-1-2026 stopte**, zodat het niet opnieuw gebeurt.

**Let op voor de maandagroutine:** deze wijzigingen zitten in lokale vault-commits — de routine ziet ze pas na een `git push` naar GitHub. Obsidian Git pusht automatisch (elke 2 min, mits Obsidian openstaat); anders moet lars zelf pushen vóór de run van 31-08 06:00 UTC.

---

## 2026-08-25 — Kritische kwaliteitsreview (op verzoek van lars: "eerlijke mening, wees kritisch")

**Wat er gebeurde:** lars vroeg een eerlijk, kritisch oordeel: hebben de agents alles wat nodig is om topkwaliteit te leveren, of is het halfwerk? In plaats van het te beweren, zijn een aantal juli-notities (SEO Strategie & Keywords, Homepage Copy & Structuur, Conversie Optimalisatie Checklist) daadwerkelijk herlezen om het oordeel ergens op te baseren.

**Oordeel:**
- **Het denkwerk is op plekken echt goed** — de juli-audit (Cialdini/Kahneman-analyse op de echte homepage-tekst, concrete code-voorstellen) en de B2B/Events-criteria zijn scherp en specifiek, geen generieke adviesteksten.
- **Uitvoering loopt structureel vast.** Van de 8 actiepunten uit de juli-audit (6 weken oud) zijn er 2 gecodeerd en 0 live. De rest wacht op input van lars die nooit kwam (bv. welk klantenaantal-cijfer klopt: 2.000+ of 1500+?), of is simpelweg nooit opgepakt (og:image genereren, performance-check).
- **Automatische zoekacties waren oppervlakkig.** De eigen B2B-zoekactie (21-08) leverde alleen naam+categorie+locatie op — geen contactpersoon, geen concurrentiecheck. Vergeleken met de met de hand samengestelde Events-kandidaten (die wél telefoon/e-mail en scherpe onderbouwing hadden) was dit duidelijk een lagere kwaliteitslaag, ook al stonden ze in dezelfde tabel-vorm.
- **Zelfs de meest volwassen sub-agent (Influencer & Creator, draait al het langst) heeft losse eindjes:** de Influencer Database staat vol placeholder-rijen ("🔍 Zoeken → vul in") en ongeverifieerde volgers/ER-cijfers.
- **Fundamenteel gat:** geen enkele agent heeft ooit feedback uit de echte wereld gezien (verkocht een kandidaat iets, presteerde een post goed, steeg een SEO-positie) — GA4, Buffer en volledige Shopify-data ontbreken alle drie. Zonder dat werkt alles op aannames/best-practices, nooit op bewezen resultaat voor HÏ Grip specifiek.

**Acties die dezelfde sessie zijn ondernomen (lars: "fundamenteel gat moet opgelost worden, zoekacties oppervlakkig oplossen, losse eindjes oplossen"):**
1. **B2B-kandidatenlijst verdiept** — alle 6 kandidaten aangevuld met echte contactgegevens (WebFetch per site + gerichte websearch) en een concurrentiecheck (bv. Ultrapadel verkoopt nog geen grip socks). Eerste echte test van de kwaliteitscontrole-loop: gevonden probleem → zelf gecorrigeerd, zonder escalatie naar lars nodig.
2. **IG-zoekscript handmatig gedraaid** (met akkoord van lars, buiten het normale 2x/week-schema) om placeholder-rijen in de Influencer Database met echte cijfers te vullen.
3. **Fundamenteel gat: niet zelf op te lossen.** Alle drie de ontbrekende databronnen (GA4, Buffer, volledige Shopify-data) vereisen een actie die alleen lars kan zetten — interactieve browserlogin (`gcloud init`), connector-autorisatie via claude.ai, of een betaalde abonnementsupgrade. Tooling voor GA4 staat al klaar (Google Cloud SDK geïnstalleerd, geverifieerd 25-08); de sessie kan niet verder zonder dat lars die ene stap zet.

**Les:** een sub-agent kan pas écht topkwaliteit leveren als (a) het denkwerk klopt (vaak al zo), (b) er daadwerkelijk wordt doorgepakt tot uitvoering (vaak niet zo — dit is de grootste makkelijk-te-onderschatten faalfactor), en (c) er een feedback-loop met echte resultaten is (nog nergens aanwezig). Bij een volgende kwaliteitsclaim ("dit is klaar") altijd checken welke van deze drie lagen het betreft, niet aannemen dat goed denkwerk gelijkstaat aan goed resultaat.

---

## 2026-08-08/09 — Eerste 5 sub-agent-skills (Design, SEO, Copy, CRO, Video)

**Wat er gebeurde:** Design Agent werd als pilot gekozen (Website Agent had als enige al een complete autonomie-tabel en goedkeuringsworkflow — kortste afstand tot bruikbaar). Na de eerste skill bleek het patroon zo direct herbruikbaar dat dezelfde dag nog 4 andere sub-agents zijn gedaan.

**Bevindingen:**
- **Skills horen niet in de vault, maar in een aparte, gedeelde repo.** Eerste versie was een onderzoeksoverzicht (Artifact) van wát een skill zou moeten bevatten — dat bleek niet wat lars bedoelde. Het echte werk is een `.md`-bestand in `commands/` van `HI-Grip-claude-setup`, direct `/`-activeerbaar, net als het bestaande `/marketing-psychology`. Les: bij "skill" navragen/checken of een bestaande skill-repo-conventie al bestaat vóórdat je een nieuw format verzint.
- **Een skill heeft twee lagen nodig, niet één.** Eerste versies bevatten alleen HÏ Grip-operationele content (regels, huidige status). Lars vroeg expliciet om ook "pure stof" — algemene vaktheorie los van HÏ Grip, zoals `/marketing-psychology` die heeft (Kahneman, Cialdini, etc. staan daar zonder HÏ Grip-koppeling). Elke skill is daarna aangevuld met een theorie-sectie (hoe SEO/CRO/copywriting/montage/Liquid-rendering *echt* werkt) plus een symptoom→oorzaak-tabel, in dezelfde stijl als `/marketing-psychology`.
- **Niet elke sub-agent heeft een dedicated skill nodig.** Caption & Copy Agent en Content Strategie & Planning Agent bleken al grotendeels gedekt door de generieke `/social-content`- en `/content-strategy`-skills (die al in de repo stonden, niet HÏ Grip-specifiek). Een nieuwe skill bouwen was daar dubbel werk geweest — eerst checken wat een bestaande generieke skill al dekt, vóór een dedicated versie te bouwen.
- **Partnership Agent-sub-agents zijn geen skills.** Influencer & Creator / B2B Klanten / Partnerships & Events zijn workflow/automatisering (zoals het bestaande IG-zoekscript), geen taak die je handmatig met een `/`-commando aanroept. Onderscheid: een skill is voor terugkerend, door lars geïnitieerd werk; een workflow draait op een trigger/schema.
- **Git-hygiëne bij een gedeelde repo:** bij het committen bleek er al een niet-gerelateerde lokale wijziging (`ig_find_creators.py`) te staan — die is bewust buiten de commit gehouden. Les: bij een gedeelde repo altijd `git status` checken en alleen de eigen bestanden stagen, nooit een brede `git add -A`.

**Resultaat:** [[Stappenplan — Verdere Bouw]] Fase 3 is hiermee inhoudelijk afgerond — niet met één pilot zoals gepland, maar met 5 tegelijk zodra het patroon zich bewees. Zie de sub-agent-status in [[Agent Hiërarchie & Structuurschema]] en de individuele `_Werkplek.md`-bestanden voor details per sub-agent.

---

## 2026-08-19 — Grenzen-formulieren Partnership Agent, Content Agent, Denzel (Fase 1 afgerond)

**Wat er gebeurde:** Alle 3 resterende grenzen-formulieren van Fase 1 zijn ingevuld. Voor Partnership Agent en Content Agent leverde het gebruikelijke vragen-format (per taakcategorie: zelf doen / voorstellen / altijd overleg) meteen een bruikbare tabel op. Bij Denzel ging de eerste ronde mis: die vragen gingen alleen over vault-onderhoud en het aanpassen van andermans grenzen — geen van beide is Denzel's kernrol.

**Bevindingen:**
- **Bij een orchestrator-achtige agent dekt het standaard taakcategorie-format niet automatisch de kernrol.** Voor de 3 hoofdagents is "wat mag je zelf, wat moet overleg" een directe vertaling van hun identiteit.md-scope (content maken, outreach sturen, etc.). Bij Denzel — wiens werk juist over de ándere agents gaat — was de eerste vragenronde te smal: hij miste "hoofdagents proactief aan het werk zetten" en "hun werk controleren voordat het bij lars komt", terwijl dat letterlijk in Denzel's eigen Rol-omschrijving staat ("hoofd van alle agents"). Les: bij een grenzen-formulier eerst de Rol/Missie-tekst in identiteit.md naast de conceptvragen leggen — dekken de vragen echt de kernfunctie, of alleen de zijkanten (administratie, edge cases)?
- **lars corrigeerde dit zelf** ("Denzel is de hoofd van alle agents die moet ze ook soort van aan het werk zetten, controleren") — geen fout die ik zelf had opgemerkt vóór het afronden. Tweede vragenronde voegde 4 gerichte vragen toe (proactief starten, kwaliteitscontrole, wat bij afwijking, controle-moment) en breidde identiteit.md's Scope en soul.md's Autonomie/Werkwijze navenant uit.
- **Resultaat qua niveaus:** vaste/terugkerende taken proactief starten = zelf doen; werk van een hoofdagent controleren tegen Brand Core/soul.md-grenzen = zelf doen; bij afwijking eerst terugsturen naar de hoofdagent voor correctie, pas escaleren naar lars als het niet lukt of een patroon wordt; controle-moment = bij élk voorstel/overleg-punt van een hoofdagent, vóórdat lars het ziet.

**Resultaat:** [[Stappenplan — Verdere Bouw]] Fase 1 is nu volledig afgerond (Website Agent, Partnership Agent, Content Agent, Denzel). Denzel's volledige tabel staat direct in `soul Denzel.md` (geen aparte Beheer-tabel nodig, want geen sub-agents en geen eigen content/code).

---

## 2026-08-21 — B2B Klanten Agent (eerste Fase 5 sub-agent, idee → in ontwikkeling)

**Wat er gebeurde:** Bij het kiezen van een eerste sub-agent voor Fase 5 bleek er al een kant-en-klaar, door lars geschreven criteria-document te bestaan (`HiGrip_B2B_Samenwerking_Criteria.docx`, OneDrive/Documents, versie 2.0) dat nergens in de vault was verwerkt — alleen indirect genoemd als bronverwijzing in [[Voorbeelden Gevonden Organisaties (B2B Klanten)]]. Docx kon niet met de standaard Read-tool geopend worden (binair bestand); omweg: kopiëren naar .zip, uitpakken met PowerShell `Expand-Archive`, `word/document.xml` uitlezen en XML-tags strippen met regex. Werkte in één keer.

**Bevindingen:**
- **Bij "hier is een extern brondocument" eerst checken of het al in de vault is overgezet, vóór je zelf criteria gaat verzinnen.** Dit document bestond al, dekte zowel Lijn A (B2B Klanten) als Lijn B (Samenwerkingen & Events) in één bestand — Deel 2 ligt klaar voor wanneer de Partnerships & Events Agent aan de beurt is, hoeft niet opnieuw uitgezocht te worden.
- **Niet elke sub-agent heeft een script/API nodig om "gebouwd" te zijn.** Vergeleken met het IG-zoekscript (draait ongevraagd op schema, geen LLM-call, kost geld) stelde lars zelf voor: "kan jij niet gewoon Google gebruiken?" — een gewone websearch, on-demand door de agent uitgevoerd, zonder API-key of Google Cloud-account. Dit is ook inhoudelijk logischer: B2B-kandidaten zijn een kleiner, lager-frequent zoekvolume dan de duizenden Instagram-accounts die het IG-script doorzoekt. Les: bij "hoe wordt dit gevonden/aangeroepen" niet automatisch naar het zwaarste patroon (script + API) grijpen — eerst checken of een simpelere, al beschikbare tool (hier: WebSearch) volstaat.
- **Direct getest, niet alleen beschreven:** een echte websearch op "pilates studio sportschool Rotterdam regio" (hoogste prioriteit uit [[Partnership Strategie]] én [[Evaluatiecriteria (B2B Klanten)]]'s locatie-prioriteit) leverde 5 bruikbare, echte kandidaten op, verwerkt in het vaste output-format uit de criteria (naam, type, locatie, website, doel, prioriteit, reden, status). Zonder direct contact is een score "HOOG" zelden te onderbouwen — realistische standaard is MIDDEL tot na eerste contact.
- **Legacy-bestanden gevonden die vermoedelijk overbodig zijn:** [[Merk & Bedrijf Database]] en [[Retailer Database]] stonden leeg en lijken gedekt door de al bestaande, actief gebruikte combinatie [[Voorbeelden Gevonden Organisaties (B2B Klanten)]] + [[Actieve Samenwerkingen (B2B Klanten)]] + [[Pipeline Tracker]]. Niet verwijderd — geflagd voor bevestiging door lars, zelfde voorzichtige aanpak als eerder bij twijfelachtige content.

**Resultaat:** B2B Klanten Agent staat op "in ontwikkeling". Nog niet getest: daadwerkelijke outreach en pipeline-doorstroom (het volgende logische vervolg zodra lars klaar is om een van deze 5 kandidaten te benaderen).

**Vervolg, zelfde dag:** bij het doorpakken naar Partnerships & Events Agent bleek de aanname hierboven ("kan dit patroon direct hergebruiken") achterhaald — dit was al gedaan, en beter dan verwacht. [[Voorwaarden Samenwerking]] (= Deel 2 van de docx) stond al gevuld, mét een eigen scoreformule-uitbreiding (budget-check) en concrete afwijs-voorbeelden (WISH Streetball Courts, Padelclub Rotterdam) die niet uit de docx komen — dus eerder al eigen werk. [[Zoek Script & Gids (Samenwerkingen)]] beschreef exact dezelfde websearch-aanpak die ik zonet voor B2B Klanten Agent "ontdekte", per organisatietype met concrete zoektermen. En [[Voorbeelden Gevonden Organisaties (Events)]] had al 4 HOOG-kandidaten mét telefoon/e-mail/Instagram (Powerleague Rotterdam, Panna Knock Out, Rotterdam Basketbal 3x3, Sport Ondernemers Expo — dat laatste op 4 nov 2026, tijdgevoelig). **Les, aanvullend op eerdere Fase 2-ervaring:** bij élke sub-agent/hoofdagent eerst de bestaande bestanden in de map zelf doorlezen vóórdat je "gaat bouwen" — status-velden in identiteit.md ("idee") zijn niet betrouwbaar bijgewerkt gebleken, twee keer nu (Content/Partnership vakinhoud in Fase 2, en nu Partnerships & Events Agent in Fase 5).

---

## Gerelateerde bestanden

- [[Stappenplan — Verdere Bouw]]
- [[Agent Hiërarchie & Structuurschema]]
- [[Agent Bestandsschema (Soul, Identiteit, User)]]
