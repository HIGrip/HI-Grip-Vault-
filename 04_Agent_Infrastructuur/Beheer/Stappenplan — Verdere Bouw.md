# Stappenplan — Agent-structuur verder bouwen

> Volgorde en prioriteit hieronder volgen uit wat er nu al staat — niet uit het niets bedacht. Voor de structuur zelf: zie [[Agent Hiërarchie & Structuurschema]]. Voor de status per bestand: zie [[Agent Bestandsschema (Soul, Identiteit, User)]].

---

## Waar we nu staan

- **Brand Core** — volledig gevuld, bron van waarheid voor alle agents.
- **Structuur staat** — Denzel (Orchestrator) + 3 hoofdagents (Content, Partnership, Website), elk met `identiteit.md`/`soul.md` (plus één gedeelde `user.md` in Beheer); 10 sub-agents zijn uitgewerkt als catalogus-item per categorie, allemaal status "idee".
- **Website Agent liep voorop** — als eerste een compleet grenzen-formulier doorlopen (14 juli 2026): [[Agent Takenverdeling & Grenzen]] en [[Goedkeuringsworkflow]] staan er. Ook al 4 vakinhoudelijke notities gevuld: [[SEO Strategie & Keywords]], [[Website Structuur & Sitemap]], [[Homepage Copy & Structuur]], [[Conversie Optimalisatie Checklist]].
- **Partnership Agent, Content Agent en Denzel volgden** (19 augustus 2026): alle 4 grenzen-formulieren nu ingevuld — [[Agent Takenverdeling & Grenzen — Partnership Agent]], [[Agent Takenverdeling & Grenzen — Content Agent]] en de tabel direct in `soul Denzel.md`. **Fase 1 is hiermee volledig afgerond.**
- **Content Agent en Partnership Agent** — de vakinhoudelijke notities eronder (Content Pillars, Content Strategie, Ideale Partner Profiel, etc.) staan grotendeels nog leeg — behalve Visuele Productie, die is wél volledig gevuld.
- **5 van de 10 sub-agents zijn nu "in ontwikkeling"** (2026-08-09): SEO Agent, Design Agent, Website Copy Agent, Conversie & Analyse Agent (Website Agent) en Video & Visuele Productie Agent (Content Agent) hebben elk een echte, `/`-activeerbare Claude Code Skill gekregen in de gedeelde `HI-Grip-claude-setup`-repo — zie per sub-agent de eigen `_Werkplek.md` en de nieuwe sectie "Skills-laag" verderop in dit document. Caption & Copy Agent en Content Strategie & Planning Agent bleven bewust "idee": hun functie wordt al grotendeels gedekt door de generieke `/social-content`- en `/content-strategy`-skills. De overige 3 (Influencer & Creator, B2B Klanten, Partnerships & Events, allemaal Partnership Agent) blijven "idee" — dat zijn automatische workflows (zoals het bestaande IG-zoekscript), geen `/`-geactiveerde skills.

**Waarom deze volgorde:** eerst de laag die alles daaronder veilig maakt (autonomie/soul.md), dan de vakinhoud die sub-agents nodig hebben om daadwerkelijk iets te kunnen opleveren, en pas dán één sub-agent als pilot echt bouwen. Dat is exact het pad dat Website Agent al heeft afgelegd — dit stappenplan herhaalt dat voor de rest.

---

## Fase 1 — Autonomie vastleggen (soul.md invullen)

- [x] Grenzen-formulier voor **Denzel** — ingevuld 19 augustus 2026, volledige tabel staat direct in `soul Denzel.md` (geen aparte Beheer-tabel nodig, Denzel heeft geen sub-agents en maakt zelf geen content/code)
- [x] Grenzen-formulier voor **Content Agent** — ingevuld 19 augustus 2026, zie [[Agent Takenverdeling & Grenzen — Content Agent]] en soul.md/identiteit.md in de Content Agent-map
- [x] Grenzen-formulier voor **Partnership Agent** — ingevuld 19 augustus 2026, zie [[Agent Takenverdeling & Grenzen — Partnership Agent]] en soul.md/identiteit.md in de Partnership Agent-map

Zonder deze tabel weet geen enkele sub-agent onder deze hoofdagents wanneer hij zelf mag handelen of eerst moet overleggen met lars.

## Fase 2 — Vakinhoud vullen per hoofdagent

- [ ] **Content Agent** — [[Content Strategie]], [[Content Pillars]], [[Platform Richtlijnen]], [[Posting Frequentie per Platform]]
- [ ] **Content Agent** — [[Copy Bank]], [[Caption Gids per Platform]], [[CTA Bibliotheek]], [[Hashtag Bibliotheek]]
- [ ] **Partnership Agent** — [[Ideale Partner Profiel]], [[Partnership Strategie]], [[Evaluatiecriteria]]
- [ ] **Website Agent (restant)** — Technisch/[[Shopify App Stack]], Technische Procedures, Update Log
- [ ] **Website Agent (restant)** — [[Analytics & KPI Dashboard]] — *geblokkeerd tot Shopify-admin/GA4-toegang, 1 augustus 2026*

Dit is de content die de sub-agents straks daadwerkelijk gebruiken: zonder gevulde bron kan bv. de Content Strategie & Planning Agent geen kalender vullen, en de B2B Klanten Agent geen partner beoordelen.

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

- [ ] De overige 9 sub-agents één voor één dezelfde weg laten volgen (idee → in ontwikkeling → actief)
- [ ] Denzel's routerende rol pas echt testen zodra minstens 2 hoofdagents met actieve sub-agents tegelijk draaien — pas dan is er iets om te routeren/bewaken

---

## Openstaande keuzes voor lars

- Content Agent — "follow-up content van derden verwerken" (categorie D in [[Agent Takenverdeling & Grenzen — Content Agent]]) en "Copy Bank bijhouden zonder overleg" (categorie B) stonden niet in het formulier zelf, zijn als voorstel ingevuld — nog te bevestigen.
- Partnership Agent — of follow-up-berichten aan een al lopend contact hetzelfde strenge niveau moeten hebben als het allereerste bericht (zie [[Agent Takenverdeling & Grenzen — Partnership Agent]], categorie C) — nog te bevestigen.
- Fase 2 volgorde: Content Agent vakinhoud vs. Partnership Agent vakinhoud vs. Website Agent-restant — geen voorkeur op gezet.

---

## Gerelateerde bestanden

- [[Agent Hiërarchie & Structuurschema]]
- [[Agent Bestandsschema (Soul, Identiteit, User)]]
- [[Agent Takenverdeling & Grenzen]]
- [[Agent Takenverdeling & Grenzen — Partnership Agent]]
- [[Agent Takenverdeling & Grenzen — Content Agent]]
- [[Goedkeuringsworkflow]]
