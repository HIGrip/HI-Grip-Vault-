---
type: kennis
gebied: agent-infrastructuur
bijgewerkt: 2026-10-12
---

# Stappenplan — Agent-structuur verder bouwen

> Volgorde en prioriteit hieronder volgen uit wat er nu al staat — niet uit het niets bedacht. Voor de structuur zelf: zie [[Agent Hiërarchie & Structuurschema]]. Voor de status per bestand: zie [[Agent Bestandsschema (Soul, Identiteit, User)]].

## Stand 12 oktober 2026

- **Structuur:** Team HÏ Grip (Lars, Tigo, Timo) → Denzel met eigen team (Stafchef, Vooruitblik-agent, drie QA-agents) → drie hoofdagents met dertien sub-agents. Volledig schema: [[Agent Hiërarchie & Structuurschema]].
- **Invulschema verwerkt.** Alle agents zijn ingevuld via het invulschema (https://claude.ai/artifact/AUGt7FiK4K3qHqoruDCyYB), behalve de Ads-tak. Beoordeling met cijfers per agent: https://claude.ai/artifact/9QqJ4dLqK8E9hmgmNG3FKo.
- **Besluiten van Lars van 12-10 doorgevoerd:** Stafchef vinkt af in het dashboard met bewijs en houdt de leerregels bij; Denzel routeert zelf en checkt QA-verdicten alleen snel; muziek mag rechtenvrij of gelicenseerd, per post checken op TikTok en Instagram; Partnership-QA checkt wie al benaderd is en of een kandidaat een match is; e-mailplatform verdeeld (Shopify transactiemails, SendWILL de rest); werkthema `202398040391`.
- **Nieuw vastgelegd:** wie Team HÏ Grip is en wie waarover beslist, plus tien basisregels voor iedere agent, in [[user]]. De aansluiting op het dashboard staat in [[Agents en het dashboard]].
- **Opgeruimd:** de vervallen kopieën van Denzel in `04_Agent_Infrastructuur` zijn weg, de leerregels zijn per agent geordend, Content Maker en Socials Analyzer hebben hun vaste mapnaam.

**Hieronder:** eerst de fases tot nu toe (historie), daarna Fase 6 met de to-do's voor de komende weken.

---

## Waar we stonden (tot september 2026)

- **Brand Core** — volledig gevuld, bron van waarheid voor alle agents.
- **Structuur staat** — Denzel (Orchestrator) + 3 hoofdagents (Content, Partnership, Website), elk met `Identiteit <Agent>.md`/`Soul <Agent>.md` (plus één gedeelde `user.md` in Beheer); 10 sub-agents zijn uitgewerkt als catalogus-item per categorie, allemaal status "idee".
- **Website Agent liep voorop** — als eerste een compleet grenzen-formulier doorlopen (14 juli 2026): [[Agent Takenverdeling & Grenzen]] en [[Goedkeuringsworkflow]] staan er. Ook al 4 vakinhoudelijke notities gevuld: [[SEO Strategie & Keywords]], [[Website Structuur & Sitemap]], [[Homepage Copy & Structuur]], [[Conversie Optimalisatie Checklist]].
- **Partnership Agent, Content Agent en Denzel volgden** (19 augustus 2026): alle 4 grenzen-formulieren nu ingevuld — [[Agent Takenverdeling & Grenzen — Partnership Agent]], [[Agent Takenverdeling & Grenzen — Content Agent]] en de tabel direct in `soul Denzel.md`. **Fase 1 is hiermee volledig afgerond.**
- **Fase 2 (vakinhoud) is volledig afgerond** — Content Agent en Partnership Agent bleken bij hercontrole (2026-08-20) al grotendeels gevuld (buiten dit stappenplan om), CTA Bibliotheek en Shopify App Stack aangevuld. Laatste losse eindje — GA4-toegang voor [[Analytics & KPI Dashboard]] — is afgerond op **2026-08-30**: `analytics-mcp` draait, eerste cijfers staan in het dashboard. Daarmee is ook 1 van de 3 ontbrekende feedback-databronnen uit de kwaliteitsreview van 25-08 dicht (GA4 ✅ / Buffer ✗ / volledige Shopify-data ✗). **Update 2026-09-01:** ook de 2e bron is dicht — Buffer-MCP gekoppeld (GA4 ✅ / Buffer ✅ / volledige Shopify-data ✗), zie [[API & Tool Connections]] § Buffer.
- **5 van de 10 sub-agents zijn "in ontwikkeling"** (2026-08-09): SEO Agent, Design Agent, Website Copy Agent, Conversie & Analyse Agent (Website Agent) en Video & Visuele Productie Agent (Content Agent) hebben elk een echte, `/`-activeerbare Claude Code Skill gekregen in de gedeelde `HI-Grip-claude-setup`-repo. Caption & Copy Agent en Content Strategie & Planning Agent bleven bewust "idee": hun functie wordt al grotendeels gedekt door de generieke `/social-content`- en `/content-strategy`-skills.
- **B2B Klanten Agent en Partnerships & Events Agent zijn nu ook "in ontwikkeling"** (2026-08-21, Fase 5) — geen skills maar workflows (zoals het bestaande IG-zoekscript): evaluatiecriteria uit `HiGrip_B2B_Samenwerking_Criteria.docx` overgezet, zoekmethode = gewone websearch on-demand (geen API/script nodig), en voor beide staan al echte, concrete kandidaten klaar. Partnerships & Events Agent bleek bij hercontrole zelfs al veel verder dan gedacht (Voorwaarden Samenwerking + Zoek Script & Gids + 4 HOOG-kandidaten met contactgegevens stonden er al, buiten dit stappenplan om). Influencer & Creator Agent draait al langer via het bestaande IG-zoekscript, maar staat formeel nog op "idee" — nog bij te werken.

**Waarom deze volgorde:** eerst de laag die alles daaronder veilig maakt (autonomie/Soul <Agent>.md), dan de vakinhoud die sub-agents nodig hebben om daadwerkelijk iets te kunnen opleveren, en pas dán één sub-agent als pilot echt bouwen. Dat is exact het pad dat Website Agent al heeft afgelegd — dit stappenplan herhaalt dat voor de rest.

---

## Fase 1 — Autonomie vastleggen (Soul <Agent>.md invullen)

- [x] Grenzen-formulier voor **Denzel** — ingevuld 19 augustus 2026, volledige tabel staat direct in `soul Denzel.md` (geen aparte Beheer-tabel nodig, Denzel heeft geen sub-agents en maakt zelf geen content/code)
- [x] Grenzen-formulier voor **Content Agent** — ingevuld 19 augustus 2026, zie [[Agent Takenverdeling & Grenzen — Content Agent]] en Soul <Agent>.md/Identiteit <Agent>.md in de Content Agent-map
- [x] Grenzen-formulier voor **Partnership Agent** — ingevuld 19 augustus 2026, zie [[Agent Takenverdeling & Grenzen — Partnership Agent]] en Soul <Agent>.md/Identiteit <Agent>.md in de Partnership Agent-map

Zonder deze tabel weet geen enkele sub-agent onder deze hoofdagents wanneer hij zelf mag handelen of eerst moet overleggen met lars.

## Fase 2 — Vakinhoud vullen per hoofdagent

- [x] **Content Agent** — [[Content Strategie]], [[Content Pillars]], [[Platform Richtlijnen]], [[Posting Frequentie per Platform]] — bleken bij hercontrole (2026-08-20) al volledig gevuld, buiten dit stappenplan om
- [x] **Content Agent** — [[Copy Bank]], [[Caption Gids per Platform]], [[Hashtag Bibliotheek]] al gevuld; **[[CTA Bibliotheek]] was nog leeg — nu aangevuld (2026-08-20)** op basis van bestaande Brand Voice/Copy Bank-bouwstenen
- [x] **Partnership Agent** — [[Ideale Partner Profiel]], [[Partnership Strategie]], [[Evaluatiecriteria]] — bleken bij hercontrole (2026-08-20) al volledig gevuld, buiten dit stappenplan om
- [x] **Website Agent (restant)** — Technische Procedures en Update Log waren al gevuld; **[[Shopify App Stack]] was nog leeg — nu aangevuld (2026-08-20)** (store/abonnement, thema's, tooling, wat níet werkte). Bevat een open vraag voor lars: welke klant-facing apps (reviews, e-mail, chat, upsell) daadwerkelijk op de live store draaien — dat weet de agent niet en is nergens in de vault gedocumenteerd.
- [x] **Website Agent (restant)** — [[Analytics & KPI Dashboard]] — **GA4-toegang afgerond op 2026-08-30.** `analytics-mcp` draait en is getest; koppeling via een service account (niet de gcloud user-login — die scope wordt door Google geblokkeerd). Property `properties/476032345`, project `higrip-analytics`. Zie [[API & Tool Connections]] § GA4 en de log-entry van 2026-08-30 in [[Feedback & Iteratie Log]]. Dashboard is nu gevuld met databeschikbaarheid + eerste cijfers; de resultaat-KPI's wachten op ~2 weken verse data. Ook Microsoft Clarity opgezet als kwalitatieve laag.

**Fase 2 is hiermee volledig afgerond.** Beide laatste losse eindjes (welke apps op de live store draaien → ingevuld 2026-08-20; GA4-toegang → afgerond 2026-08-30) zijn klaar. Vervolgstappen voor analytics staan in [[Analytics & KPI Dashboard]] § "Nog te doen" en in de [[Feedback & Iteratie Log]]-entry van 2026-08-30.

## Fase 3 — Eén sub-agent als pilot bouwen

- [x] Eén sub-agent kiezen om als eerste van "idee" → "in ontwikkeling" te brengen — **werd Design Agent** (2026-08-08), en is daarna dezelfde dag doorgetrokken naar 4 andere sub-agents (2026-08-09) toen bleek dat het patroon direct herbruikbaar was — zie "Skills-laag" hieronder.
- [x] Hóe een sub-agent technisch wordt "aangeroepen" ligt nu vast: **als `/`-activeerbare Claude Code Skill** in de gedeelde `HI-Grip-claude-setup`-repo (`commands/*.md`), niet als apart systeem/project. Zie "Skills-laag" hieronder voor de volledige uitleg.
- [x] Bevindingen van de pilot vastgelegd in [[Feedback & Iteratie Log]].

### Skills-laag (nieuw, 2026-08-09)

Naast de vault (Identiteit <Agent>.md / Soul <Agent>.md = wie een sub-agent is) bestaat er nu een **tweede, uitvoerende laag**: een echte Claude Code Skill per sub-agent, in de gedeelde team-repo `github.com/HIGrip/HI-Grip-claude-setup` (`commands/`). Een sub-agent "bouwen" betekent in de praktijk: zo'n skill schrijven.

**Elke skill heeft twee lagen, naar het voorbeeld van de bestaande `/marketing-psychology`-skill:**
1. **HÏ Grip-operationeel** — de regels, harde grenzen en huidige status uit de vault (bv. welk Shopify-theme-ID, welke structured data al live staat, de KPI-filosofie).
2. **Algemene vaktheorie ("pure stof")** — hoe het vakgebied zelf werkt, los van HÏ Grip (bv. hoe crawling/indexing/ranking werkt voor SEO, het LIFT-model voor CRO, het Kuleshov-effect voor video-editing). Dit maakt de skill ook bruikbaar/sterker in situaties die de vault nog niet heeft gedocumenteerd.

**Gebouwd (2026-08-09):** `/shopify-design`, `/shopify-seo`, `/shopify-copy`, `/shopify-cro`, `/video-productie` — telkens met verwijzing naar de vault-bronkennis, niet als kopie ervan (vault blijft bron van waarheid, skill is de uitvoerende laag).

**Bewust overgeslagen:**
- Caption & Copy Agent, Content Strategie & Planning Agent — al grotendeels gedekt door de generieke `/social-content` en `/content-strategy`-skills.
- Influencer & Creator, B2B Klanten, Partnerships & Events (Partnership Agent) — dit zijn automatische workflows (zoals het IG-zoekscript), geen `/`-geactiveerde skills. Blijven status "idee" tot dat onderscheid opnieuw relevant wordt.

## Fase 4 — Resterende infrastructuur

- [x] [[API & Tool Connections]] invullen met de eerste cross-agent tool-regel (Chrome-kill) — verder aanvullen zodra er meer van dit soort regels ontstaan
- [x] `System Prompts/` en `Context & Output/` waren overbodig geworden sinds het soul/identiteit-schema — verwijderd op 2026-07-17, die informatie staat nu per agent in Identiteit <Agent>.md / Soul <Agent>.md

## Fase 5 — Opschalen

- [x] **B2B Klanten Agent** — idee → in ontwikkeling (2026-08-21). Evaluatiecriteria overgezet uit `HiGrip_B2B_Samenwerking_Criteria.docx` (was nog nergens in de vault verwerkt) naar [[Evaluatiecriteria (B2B Klanten)]]. Zoekmethode vastgesteld: gewone websearch op trefwoord+locatie, on-demand door de agent — geen script/API nodig, in tegenstelling tot het IG-zoekscript. Getest met een echte zoekactie: 5 nieuwe pilates-studio's in Rotterdam gevonden en verwerkt in [[Voorbeelden Gevonden Organisaties (B2B Klanten)]]. Nog niet getest: outreach/pipeline-doorstroom.
- [x] **Partnerships & Events Agent** — idee → in ontwikkeling (2026-08-21). Bleek bij hercontrole al veel verder dan de status deed vermoeden: Deel 2 van de criteria-docx stond al overgezet (als [[Voorwaarden Samenwerking]], zelfs aangevuld met scoreformule + budget-check + concrete afwijs-voorbeelden), plus een volledige [[Zoek Script & Gids (Samenwerkingen)]] en 4 HOOG-kandidaten met echte contactgegevens in [[Voorbeelden Gevonden Organisaties (Events)]] — waaronder Sport Ondernemers Expo op 4 nov 2026 (tijdgevoelig). Nog niet getest: outreach/pipeline-doorstroom.
- [x] Influencer & Creator Agent — statusveld gecorrigeerd naar **actief** (2026-08-21): draaide al via het bestaande IG-zoekscript, stond alleen nog op "idee". Geen nieuw werk nodig.
- [x] **Website Agent's wekelijkse monitoring geautomatiseerd (2026-08-25, op verzoek van lars: "automatiseer meer bestaande sub-agents").** De regels "Live site monitoren — Wekelijks" en "Design-consistentie checken — Wekelijks" stonden al sinds 14 juli 2026 in [[Agent Takenverdeling & Grenzen]], maar waren nog nooit uitgevoerd. Nu onderdeel van dezelfde maandagroutine: WebFetch-check op higrip.nl (bereikbaarheid, structured-data-status, merk-inconsistenties) — zie [[Denzel Weekoverzicht — Routine]]. Eerste run 31-08-2026.
- [x] **SEO Agent geautomatiseerd (2026-08-25).** Zelfde maandagroutine, zelfde patroon als de live-site-check: meta title/description, sitemap.xml, FAQPage-inhoud — puur technisch, geen Search Console/GA4 nodig. Zie [[Denzel Weekoverzicht — Routine]].
- [ ] **Content Agent — bewust NIET geautomatiseerd (2026-08-25).** Voorstel was een wekelijkse batch content-ideeën (Content-ideeën bedenken = "Voorstellen, ik keur goed", dus dit zou alleen een voorstel zijn geweest, geen publicatie). lars wil dit eerst intern bespreken met de content-afdeling van HÏ Grip voordat dit gebouwd wordt. Complicatie: de échte contentkalender staat niet in de vault maar in Buffer (Content Kalender Template.md verwijst er alleen naartoe) — de Buffer-MCP-koppeling staat nog op "requires authentication", dus zonder die koppeling kan de routine sowieso niet zien wat er al gepland staat. **Update 2026-09-01:** de technische blocker is weg — Buffer-koppeling actief (zie [[API & Tool Connections]] § Buffer), de routine kan nu wél de geplande content lezen. De inhoudelijke reden (eerst intern afstemmen met de content-afdeling) staat nog open, dus dit blijft bewust ongebouwd tot dat gesprek is geweest.
- [ ] Website Agent's overige 3 sub-agent-skills (Design, Website Copy) en Content Agent's Video & Visuele Productie Agent staan op "in ontwikkeling" (werkende `/`-skills sinds 2026-08-09) — nog nooit ingezet. Deze lenen zich minder voor een terugkerende/automatiseerbare taak (project-getriggerd, geen vast ritme) — nog geen automatiseringsvoorstel voor.
- [ ] Denzel's routerende rol pas echt testen zodra minstens 2 hoofdagents met actieve sub-agents tegelijk draaien — pas dan is er iets om te routeren/bewaken
- [x] **Denzel's mandaat uitgebreid (2026-08-21, op verzoek van lars):** verantwoordelijk voor het najagen van de doelen zelf — bepaalt het tempo van terugkerende "Zelf doen"-zoekacties (nooit hoger dan het bestaande autonomie-niveau), en levert wekelijks (maandag) een overzicht van voortgang, eigen acties en relevante AI-ontwikkelingen. Uitgevoerd als een echte, geautomatiseerde cloud-routine — zie [[Denzel Weekoverzicht — Routine]] voor de technische opzet en de routine-link. **Let op:** de routine kan pas de wijzigingen van vandaag zien zodra de openstaande lokale vault-commit naar GitHub gepusht is — lars moet dit zelf doen (Bash-push werd geblokkeerd door de auto-mode classifier).
- [x] **E-mail Marketing Agent toegevoegd (2026-09-14, op verzoek van lars).** Nieuwe sub-agent onder Website Agent, categorie "E-mail Marketing" (nieuwe submap, uitzondering op de onderbouwingsregel — zie [[Agent Hiërarchie & Structuurschema]]). Trigger: elke nieuwe blogpost op de website levert gelijktijdig een e-mail op, in de stijl van de 5 eerder gemaakte ontwerpen. Vakinhoud gevuld: [[E-mail Lijst Strategie]], [[E-mail Marketing Benchmarks]], [[E-mail Design & Stijlgids]], [[E-mail Mailflows Artifact]]. **`/`-skill gebouwd 2026-09-16** (`/email-marketing`) — zie hieronder. Nog niet getest in de praktijk.
- [x] **Parallelle dispatch-laag toegevoegd (2026-09-16, op verzoek van lars: "ik wil de agents zien werken zoals bij de seo-plugin, tabjes naast Sonnet").** Tot nu toe draaiden alle 5 Website Agent-sub-agents als `/`-skills **inline** in de hoofdsessie — geen apart tabje, geen echte parallelliteit. Nieuw: elke sub-agent kreeg een losse **agent-definitie** in `HI-Grip-claude-setup/agents/` (`seo-agent`, `design-agent`, `website-copy-agent`, `conversie-analyse-agent`, `email-marketing-agent`) — zelfde frontmatter-patroon (`name`/`description`/`model`/`tools`) als de Claude SEO-plugin's `agents/*.md`. `setup.ps1` synct deze map nu ook naar `~/.claude/agents` (junction, zelfde patroon als `commands/`/`skills/`). Een nieuwe orchestrator-skill **`/website-agent <opdracht>`** (`commands/website-agent.md`) bepaalt welke sub-agents een taak raakt en dispatcht die in één beurt parallel via de Agent-tool, zelfde patroon als `/seo audit`. De losse `/shopify-*`/`/email-marketing`-skills blijven ernaast bestaan voor snel, inline gebruik. **Getest en bevestigd werkend** — na sessie-herstart pikte de harness de 5 nieuwe agents op (system-reminder "New agent types are now available").
- [x] **Agent-bestanden herstructureerd naar het vault-schema (2026-09-16, op verzoek van lars: "alle agents moeten dezelfde structuur hebben als beschreven in de vault").** De eerste versie van de 5 `agents/*.md`-bestanden was ad-hoc content, 1-op-1 gekopieerd uit de bestaande `/shopify-*`-skills. Herschreven naar het `Identiteit <Agent>.md`+`Soul <Agent>.md`-schema uit [[Agent Bestandsschema (Soul, Identiteit, User)]], samengevoegd in één bestand: Rol → Missie → Scope (wel/niet) → Verhouding tot andere agents → Autonomie per taak → Harde grenzen → Werkwijze → Communicatiestijl → Vaktheorie → Kernbronnen. `CLAUDE.md` bevat nu een expliciete, doorlopende sync-regel: vault blijft bron van waarheid, agent-bestanden en `CLAUDE.md` moeten in dezelfde sessie meebewegen bij wijzigingen aan weerszijden.
- [x] **Parallelle dispatch uitgebreid naar Content Agent en Partnership Agent (2026-09-16, op verzoek van lars: "dit moet dus ook voor partner en content").** Zelfde schema en patroon als Website Agent, nu ook voor de andere 2 hoofdagents: 6 nieuwe `agents/*.md`-bestanden (`content-strategie-planning-agent`, `caption-copy-agent`, `video-visuele-productie-agent`, `influencer-creator-agent`, `b2b-klanten-agent`, `partnerships-events-agent`) + 2 orchestrator-skills (`/content-agent`, `/partnership-agent`). Voor Partnership Agent's 3 sub-agents was er nog geen `/`-skill (workflows, geen skill-kandidaat) — de agent-definities zijn hun eerste `/`-activeerbare vorm. `CLAUDE.md` bevat nu één tabel met alle 3 orchestrators + 11 sub-agents, en de schema-/sync-regels zijn gegeneraliseerd naar alle hoofdagents. **Nog niet getest in de praktijk** (Website Agent's laag wel al bevestigd werkend na sessie-herstart, dit volgt hetzelfde technische patroon).
- [x] **Doorlopend kwaliteitsdashboard toegevoegd (2026-08-21, op verzoek van lars):** [[Agent Werk & Kwaliteit Overzicht]] — één levende notitie, per (sub-)agent een rij met laatste output, datum, kwaliteitsstatus en toelichting. Denzel werkt dit bij in élke sessie (niet alleen wekelijks) zodra zijn kwaliteitscontrole-loop wordt doorlopen; de wekelijkse routine is hiervoor ook bijgewerkt. Vult direct in: Website Agent's 4 skills en Video & Visuele Productie Agent hebben nog geen output sinds bouw (09-08); B2B/Events-werk van vandaag staat er al in.

## Fase 6 — Van ingevuld naar draaiend (vanaf 12 oktober 2026)

### Gedaan
- [x] Invulschema door Team HÏ Grip ingevuld voor alle agents behalve de Ads-tak (9 t/m 12 oktober 2026)
- [x] Content Maker en Socials Analyzer toegevoegd als sub-agents van de Content Agent (9-10), Content Maker afgemaakt (12-10)
- [x] Besluiten van 12-10 doorgevoerd in de identiteiten, souls, handboek van Denzel en leerregels
- [x] Team HÏ Grip en basisregels voor alle agents vastgelegd in [[user]]
- [x] Dashboard-check: wat sluit aan en wat niet, in [[Agents en het dashboard]]
- [x] Vault opgeruimd: dubbele Denzel-bestanden weg, leerregels geordend, structuurschema herschreven

### To do — koppelingen (eerst)
- [ ] **Model en tools voor de drie hoofdagents vastleggen.** Website, Content en Partnership Agent hebben nog geen Model & Tools-sectie.
- [ ] **Tools afstemmen op de regels.** Een QA-agent zonder schrijftool kan echt niets schrijven; dat is sterker dan een zin in de vault. Controleer per agent in de setup-repo (`agents/*.md`) dat de tools overeenkomen met de identiteit. Terminal (Bash) alleen waar nodig.
- [ ] **Content-QA beeld laten bekijken.** Hij toetst nu ook afbeeldingen maar kan alleen tekst lezen.
- [ ] **Socials Analyzer:** Instagram- en TikTok-statistieken koppelen (nu alleen Buffer).
- [ ] **Influencer & Creator Agent:** web zoeken toevoegen (open sinds 30-9).
- [ ] **E-mail Marketing:** Pinterest heeft geen koppeling; tot die er is levert het team links of screenshots.
- [ ] **Basisregels in de setup-repo:** controleer dat elke `agents/*.md` ook [[user]] laat lezen, zodat de basisregels bij elke run meegaan.

### To do — keuzes van Team HÏ Grip
- [ ] **Toolkeuze Content Maker:** Higgsfield, Claude Design, Adobe of Canva. Daarna een maandbudget vastleggen in [[Identiteit Content Maker]].
- [ ] **Montageprogramma koppelen** voor de Content Maker (de Adobe Premiere- en Photoshop-koppelingen verbonden op 12-10 niet).
- [ ] **Ads-tak uitwerken:** hoofdagent ADS met de sub-agents Ads-analyse en Ads-creator, plus ADS-QA in het team van Denzel. Grenzen: uitgeven altijd overleg vooraf; later eventueel automatisch binnen een limiet (± 20% budget, max € 10 per dag, zie het dashboardhandboek).

### To do — afstemmen met de bouwer van het dashboard
- [ ] Afvinken met bewijs door de Stafchef mogelijk maken (veld en tool, met log).
- [ ] Soorten voorstellen in *Wacht op akkoord* uitbreiden: website-wijziging, beeld of video, QA-escalatie, wijziging AI-structuur.
- [ ] Rechten per persoon: AI-structuur Lars en Timo, live zetten Lars.
- [ ] Plek voor beeld en video van de Content Maker bij een post.
- [ ] Afspreken welke agents via Hermes draaien en welke als Claude Code-sub-agent.
- Volledige lijst en uitleg: [[Agents en het dashboard]].

### Later
- [ ] **B2B Klanten Agent meer rechten in het nieuwe dashboard** (verwacht over twee à drie maanden, rond januari 2027). Pas na vrijgave door Lars of Timo, en na aanpassing van zijn grenzen. Zie [[Werkplek B2B Klanten Agent]].
- [ ] **Eerste echte proefrun per nieuwe agent** (Content Maker, Socials Analyzer, Stafchef met afvinken) en de uitkomst vastleggen in [[Agent Werk & Kwaliteit Overzicht]].
- [ ] **Na een maand de scorekaart van de Stafchef bekijken:** hoeveel werk kwam zonder grote aanpassing door, en waar ontstonden de meeste correcties?

---

## Openstaande keuzes voor lars

- **Nieuw (12-10-2026):** toolkeuze Content Maker, uitwerking Ads-tak, en de afstemming met de bouwer van het dashboard. Zie Fase 6 hierboven.

- **Alle drie voormalige open punten zijn bevestigd (21 augustus 2026):** Content Agent's "content van derden verwerken" (Voorstellen, ik keur goed) en "Copy Bank bijhouden" (Zelf doen) — zie [[Agent Takenverdeling & Grenzen — Content Agent]]; Partnership Agent's follow-up-berichten (zelfde niveau als eerste bericht: Altijd overleg vooraf) — zie [[Agent Takenverdeling & Grenzen — Partnership Agent]]. Alle 3 doorgevoerd in de bijbehorende Soul <Agent>.md's.
- ~~GA4-toegang (Fase 2, Analytics & KPI Dashboard)~~ — **afgerond 2026-08-30.** `analytics-mcp` draait via een service account. Vervolgstappen (funnel-rapport, ~2 weken data afwachten, purchase-events checken, UTM-discipline, Clarity in cookiebanner) staan in [[Analytics & KPI Dashboard]] en [[Feedback & Iteratie Log]] (2026-08-30).
- Fase 5 — welke van de 2 resterende sub-agents eerst (B2B Klanten Agent of Partnerships & Events Agent) — nog geen keuze gemaakt.

---

## Gerelateerde bestanden

- [[Agent Hiërarchie & Structuurschema]]
- [[Agent Bestandsschema (Soul, Identiteit, User)]]
- [[Agent Takenverdeling & Grenzen]]
- [[Agent Takenverdeling & Grenzen — Partnership Agent]]
- [[Agent Takenverdeling & Grenzen — Content Agent]]
- [[Goedkeuringsworkflow]]
- [[Agents en het dashboard]]
- [[Leerregels per Agent]]

## Gerelateerd onderzoek (automatisch)

Onderzoek uit `05_Research/` dat naar deze notitie verwijst, nieuwste eerst. Bijgewerkt door `vault_nav.py`; niet met de hand bewerken.

- [[2026-10-12-weekoverzicht]] — Denzel Weekoverzicht — 2026-10-12 (/en/-fixes bevestigd, B2B-outreach staat al 12 dagen stil)
- [[2026-10-05-weekoverzicht]] — Denzel Weekoverzicht — 2026-10-05 (NL-verkeer breekt 3 weken daling, /en/-fixes lijken opgelost)

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[04 Agent Infrastructuur — Index]] · [[Home]]
