# Stappenplan — Agent-structuur verder bouwen

> Volgorde en prioriteit hieronder volgen uit wat er nu al staat — niet uit het niets bedacht. Voor de structuur zelf: zie [[Agent Hiërarchie & Structuurschema]]. Voor de status per bestand: zie [[Agent Bestandsschema (Soul, Identiteit, User)]].

---

## Waar we nu staan

- **Brand Core** — volledig gevuld, bron van waarheid voor alle agents.
- **Structuur staat** — Denzel (Orchestrator) + 3 hoofdagents (Content, Partnership, Website), elk met `identiteit.md`/`soul.md` (plus één gedeelde `user.md` in Beheer); 10 sub-agents zijn uitgewerkt als catalogus-item per categorie, allemaal status "idee".
- **Website Agent liep voorop** — als eerste een compleet grenzen-formulier doorlopen (14 juli 2026): [[Agent Takenverdeling & Grenzen]] en [[Goedkeuringsworkflow]] staan er. Ook al 4 vakinhoudelijke notities gevuld: [[SEO Strategie & Keywords]], [[Website Structuur & Sitemap]], [[Homepage Copy & Structuur]], [[Conversie Optimalisatie Checklist]].
- **Partnership Agent, Content Agent en Denzel volgden** (19 augustus 2026): alle 4 grenzen-formulieren nu ingevuld — [[Agent Takenverdeling & Grenzen — Partnership Agent]], [[Agent Takenverdeling & Grenzen — Content Agent]] en de tabel direct in `soul Denzel.md`. **Fase 1 is hiermee volledig afgerond.**
- **Fase 2 (vakinhoud) is vrijwel afgerond** (2026-08-20) — Content Agent en Partnership Agent bleken bij hercontrole al grotendeels gevuld (buiten dit stappenplan om), CTA Bibliotheek en Shopify App Stack zijn aangevuld. Alleen Analytics & KPI Dashboard staat nog open, wacht op bevestiging van lars over GA4-toegang.
- **5 van de 10 sub-agents zijn "in ontwikkeling"** (2026-08-09): SEO Agent, Design Agent, Website Copy Agent, Conversie & Analyse Agent (Website Agent) en Video & Visuele Productie Agent (Content Agent) hebben elk een echte, `/`-activeerbare Claude Code Skill gekregen in de gedeelde `HI-Grip-claude-setup`-repo. Caption & Copy Agent en Content Strategie & Planning Agent bleven bewust "idee": hun functie wordt al grotendeels gedekt door de generieke `/social-content`- en `/content-strategy`-skills.
- **B2B Klanten Agent en Partnerships & Events Agent zijn nu ook "in ontwikkeling"** (2026-08-21, Fase 5) — geen skills maar workflows (zoals het bestaande IG-zoekscript): evaluatiecriteria uit `HiGrip_B2B_Samenwerking_Criteria.docx` overgezet, zoekmethode = gewone websearch on-demand (geen API/script nodig), en voor beide staan al echte, concrete kandidaten klaar. Partnerships & Events Agent bleek bij hercontrole zelfs al veel verder dan gedacht (Voorwaarden Samenwerking + Zoek Script & Gids + 4 HOOG-kandidaten met contactgegevens stonden er al, buiten dit stappenplan om). Influencer & Creator Agent draait al langer via het bestaande IG-zoekscript, maar staat formeel nog op "idee" — nog bij te werken.

**Waarom deze volgorde:** eerst de laag die alles daaronder veilig maakt (autonomie/soul.md), dan de vakinhoud die sub-agents nodig hebben om daadwerkelijk iets te kunnen opleveren, en pas dán één sub-agent als pilot echt bouwen. Dat is exact het pad dat Website Agent al heeft afgelegd — dit stappenplan herhaalt dat voor de rest.

---

## Fase 1 — Autonomie vastleggen (soul.md invullen)

- [x] Grenzen-formulier voor **Denzel** — ingevuld 19 augustus 2026, volledige tabel staat direct in `soul Denzel.md` (geen aparte Beheer-tabel nodig, Denzel heeft geen sub-agents en maakt zelf geen content/code)
- [x] Grenzen-formulier voor **Content Agent** — ingevuld 19 augustus 2026, zie [[Agent Takenverdeling & Grenzen — Content Agent]] en soul.md/identiteit.md in de Content Agent-map
- [x] Grenzen-formulier voor **Partnership Agent** — ingevuld 19 augustus 2026, zie [[Agent Takenverdeling & Grenzen — Partnership Agent]] en soul.md/identiteit.md in de Partnership Agent-map

Zonder deze tabel weet geen enkele sub-agent onder deze hoofdagents wanneer hij zelf mag handelen of eerst moet overleggen met lars.

## Fase 2 — Vakinhoud vullen per hoofdagent

- [x] **Content Agent** — [[Content Strategie]], [[Content Pillars]], [[Platform Richtlijnen]], [[Posting Frequentie per Platform]] — bleken bij hercontrole (2026-08-20) al volledig gevuld, buiten dit stappenplan om
- [x] **Content Agent** — [[Copy Bank]], [[Caption Gids per Platform]], [[Hashtag Bibliotheek]] al gevuld; **[[CTA Bibliotheek]] was nog leeg — nu aangevuld (2026-08-20)** op basis van bestaande Brand Voice/Copy Bank-bouwstenen
- [x] **Partnership Agent** — [[Ideale Partner Profiel]], [[Partnership Strategie]], [[Evaluatiecriteria]] — bleken bij hercontrole (2026-08-20) al volledig gevuld, buiten dit stappenplan om
- [x] **Website Agent (restant)** — Technische Procedures en Update Log waren al gevuld; **[[Shopify App Stack]] was nog leeg — nu aangevuld (2026-08-20)** (store/abonnement, thema's, tooling, wat níet werkte). Bevat een open vraag voor lars: welke klant-facing apps (reviews, e-mail, chat, upsell) daadwerkelijk op de live store draaien — dat weet de agent niet en is nergens in de vault gedocumenteerd.
- [ ] **Website Agent (restant)** — [[Analytics & KPI Dashboard]] — nog steeds leeg. De datum-blocker (1 augustus 2026) is voorbij, maar er staat geen bevestiging dat lars de GA4-stappen (gcloud-login, Property-ID, credentials) echt heeft afgerond — zie [[API & Tool Connections]]. **Niet aannemen dat dit klaar is zonder navraag bij lars.**

**Fase 2 is hiermee vrijwel afgerond** — de 2 laatste losse eindjes (welke apps op de live store draaien, en GA4-toegang) staan als concrete invul-checklist in [[Stappenplan — Shopify Apps & Analytics Toegang]], klaar voor lars om zelf af te vinken.

## Fase 3 — Eén sub-agent als pilot bouwen

- [x] Eén sub-agent kiezen om als eerste van "idee" → "in ontwikkeling" te brengen — **werd Design Agent** (2026-08-08), en is daarna dezelfde dag doorgetrokken naar 4 andere sub-agents (2026-08-09) toen bleek dat het patroon direct herbruikbaar was — zie "Skills-laag" hieronder.
- [x] Hóe een sub-agent technisch wordt "aangeroepen" ligt nu vast: **als `/`-activeerbare Claude Code Skill** in de gedeelde `HI-Grip-claude-setup`-repo (`commands/*.md`), niet als apart systeem/project. Zie "Skills-laag" hieronder voor de volledige uitleg.
- [x] Bevindingen van de pilot vastgelegd in [[Feedback & Iteratie Log]].

### Skills-laag (nieuw, 2026-08-09)

Naast de vault (identiteit.md/soul.md = wie een sub-agent is) bestaat er nu een **tweede, uitvoerende laag**: een echte Claude Code Skill per sub-agent, in de gedeelde team-repo `github.com/HIGrip/HI-Grip-claude-setup` (`commands/`). Een sub-agent "bouwen" betekent in de praktijk: zo'n skill schrijven.

**Elke skill heeft twee lagen, naar het voorbeeld van de bestaande `/marketing-psychology`-skill:**
1. **HÏ Grip-operationeel** — de regels, harde grenzen en huidige status uit de vault (bv. welk Shopify-theme-ID, welke structured data al live staat, de KPI-filosofie).
2. **Algemene vaktheorie ("pure stof")** — hoe het vakgebied zelf werkt, los van HÏ Grip (bv. hoe crawling/indexing/ranking werkt voor SEO, het LIFT-model voor CRO, het Kuleshov-effect voor video-editing). Dit maakt de skill ook bruikbaar/sterker in situaties die de vault nog niet heeft gedocumenteerd.

**Gebouwd (2026-08-09):** `/shopify-design`, `/shopify-seo`, `/shopify-copy`, `/shopify-cro`, `/video-productie` — telkens met verwijzing naar de vault-bronkennis, niet als kopie ervan (vault blijft bron van waarheid, skill is de uitvoerende laag).

**Bewust overgeslagen:**
- Caption & Copy Agent, Content Strategie & Planning Agent — al grotendeels gedekt door de generieke `/social-content` en `/content-strategy`-skills.
- Influencer & Creator, B2B Klanten, Partnerships & Events (Partnership Agent) — dit zijn automatische workflows (zoals het IG-zoekscript), geen `/`-geactiveerde skills. Blijven status "idee" tot dat onderscheid opnieuw relevant wordt.

## Fase 4 — Resterende infrastructuur

- [x] [[API & Tool Connections]] invullen met de eerste cross-agent tool-regel (Chrome-kill) — verder aanvullen zodra er meer van dit soort regels ontstaan
- [x] `System Prompts/` en `Context & Output/` waren overbodig geworden sinds het soul/identiteit-schema — verwijderd op 2026-07-17, die informatie staat nu per agent in identiteit.md/soul.md

## Fase 5 — Opschalen

- [x] **B2B Klanten Agent** — idee → in ontwikkeling (2026-08-21). Evaluatiecriteria overgezet uit `HiGrip_B2B_Samenwerking_Criteria.docx` (was nog nergens in de vault verwerkt) naar [[Evaluatiecriteria (B2B Klanten)]]. Zoekmethode vastgesteld: gewone websearch op trefwoord+locatie, on-demand door de agent — geen script/API nodig, in tegenstelling tot het IG-zoekscript. Getest met een echte zoekactie: 5 nieuwe pilates-studio's in Rotterdam gevonden en verwerkt in [[Voorbeelden Gevonden Organisaties (B2B Klanten)]]. Nog niet getest: outreach/pipeline-doorstroom.
- [x] **Partnerships & Events Agent** — idee → in ontwikkeling (2026-08-21). Bleek bij hercontrole al veel verder dan de status deed vermoeden: Deel 2 van de criteria-docx stond al overgezet (als [[Voorwaarden Samenwerking]], zelfs aangevuld met scoreformule + budget-check + concrete afwijs-voorbeelden), plus een volledige [[Zoek Script & Gids (Samenwerkingen)]] en 4 HOOG-kandidaten met echte contactgegevens in [[Voorbeelden Gevonden Organisaties (Events)]] — waaronder Sport Ondernemers Expo op 4 nov 2026 (tijdgevoelig). Nog niet getest: outreach/pipeline-doorstroom.
- [x] Influencer & Creator Agent — statusveld gecorrigeerd naar **actief** (2026-08-21): draaide al via het bestaande IG-zoekscript, stond alleen nog op "idee". Geen nieuw werk nodig.
- [x] **Website Agent's wekelijkse monitoring geautomatiseerd (2026-08-25, op verzoek van lars: "automatiseer meer bestaande sub-agents").** De regels "Live site monitoren — Wekelijks" en "Design-consistentie checken — Wekelijks" stonden al sinds 14 juli 2026 in [[Agent Takenverdeling & Grenzen]], maar waren nog nooit uitgevoerd. Nu onderdeel van dezelfde maandagroutine: WebFetch-check op higrip.nl (bereikbaarheid, structured-data-status, merk-inconsistenties) — zie [[Denzel Weekoverzicht — Routine]]. Eerste run 31-08-2026.
- [x] **SEO Agent geautomatiseerd (2026-08-25).** Zelfde maandagroutine, zelfde patroon als de live-site-check: meta title/description, sitemap.xml, FAQPage-inhoud — puur technisch, geen Search Console/GA4 nodig. Zie [[Denzel Weekoverzicht — Routine]].
- [ ] **Content Agent — bewust NIET geautomatiseerd (2026-08-25).** Voorstel was een wekelijkse batch content-ideeën (Content-ideeën bedenken = "Voorstellen, ik keur goed", dus dit zou alleen een voorstel zijn geweest, geen publicatie). lars wil dit eerst intern bespreken met de content-afdeling van HÏ Grip voordat dit gebouwd wordt. Complicatie: de échte contentkalender staat niet in de vault maar in Buffer (Content Kalender Template.md verwijst er alleen naartoe) — de Buffer-MCP-koppeling staat nog op "requires authentication", dus zonder die koppeling kan de routine sowieso niet zien wat er al gepland staat.
- [ ] Website Agent's overige 3 sub-agent-skills (Design, Website Copy) en Content Agent's Video & Visuele Productie Agent staan op "in ontwikkeling" (werkende `/`-skills sinds 2026-08-09) — nog nooit ingezet. Deze lenen zich minder voor een terugkerende/automatiseerbare taak (project-getriggerd, geen vast ritme) — nog geen automatiseringsvoorstel voor.
- [ ] Denzel's routerende rol pas echt testen zodra minstens 2 hoofdagents met actieve sub-agents tegelijk draaien — pas dan is er iets om te routeren/bewaken
- [x] **Denzel's mandaat uitgebreid (2026-08-21, op verzoek van lars):** verantwoordelijk voor het najagen van de doelen zelf — bepaalt het tempo van terugkerende "Zelf doen"-zoekacties (nooit hoger dan het bestaande autonomie-niveau), en levert wekelijks (maandag) een overzicht van voortgang, eigen acties en relevante AI-ontwikkelingen. Uitgevoerd als een echte, geautomatiseerde cloud-routine — zie [[Denzel Weekoverzicht — Routine]] voor de technische opzet en de routine-link. **Let op:** de routine kan pas de wijzigingen van vandaag zien zodra de openstaande lokale vault-commit naar GitHub gepusht is — lars moet dit zelf doen (Bash-push werd geblokkeerd door de auto-mode classifier).
- [x] **Doorlopend kwaliteitsdashboard toegevoegd (2026-08-21, op verzoek van lars):** [[Agent Werk & Kwaliteit Overzicht]] — één levende notitie, per (sub-)agent een rij met laatste output, datum, kwaliteitsstatus en toelichting. Denzel werkt dit bij in élke sessie (niet alleen wekelijks) zodra zijn kwaliteitscontrole-loop wordt doorlopen; de wekelijkse routine is hiervoor ook bijgewerkt. Vult direct in: Website Agent's 4 skills en Video & Visuele Productie Agent hebben nog geen output sinds bouw (09-08); B2B/Events-werk van vandaag staat er al in.

---

## Openstaande keuzes voor lars

- **Alle drie voormalige open punten zijn bevestigd (21 augustus 2026):** Content Agent's "content van derden verwerken" (Voorstellen, ik keur goed) en "Copy Bank bijhouden" (Zelf doen) — zie [[Agent Takenverdeling & Grenzen — Content Agent]]; Partnership Agent's follow-up-berichten (zelfde niveau als eerste bericht: Altijd overleg vooraf) — zie [[Agent Takenverdeling & Grenzen — Partnership Agent]]. Alle 3 doorgevoerd in de bijbehorende soul.md's.
- GA4-toegang (Fase 2, Analytics & KPI Dashboard) — lars koos voor de GA4-route, maar voert de stappen later uit. Zie [[Stappenplan — Shopify Apps & Analytics Toegang]].
- Fase 5 — welke van de 2 resterende sub-agents eerst (B2B Klanten Agent of Partnerships & Events Agent) — nog geen keuze gemaakt.

---

## Gerelateerde bestanden

- [[Agent Hiërarchie & Structuurschema]]
- [[Agent Bestandsschema (Soul, Identiteit, User)]]
- [[Agent Takenverdeling & Grenzen]]
- [[Agent Takenverdeling & Grenzen — Partnership Agent]]
- [[Agent Takenverdeling & Grenzen — Content Agent]]
- [[Goedkeuringsworkflow]]
