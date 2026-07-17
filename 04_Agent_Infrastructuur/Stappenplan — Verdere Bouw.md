# Stappenplan — Agent-structuur verder bouwen

> Volgorde en prioriteit hieronder volgen uit wat er nu al staat — niet uit het niets bedacht. Voor de structuur zelf: zie [[Agent Hiërarchie & Structuurschema]]. Voor de status per bestand: zie [[Agent Bestandsschema (Soul, Identiteit, User)]].

---

## Waar we nu staan

- **Brand Core** — volledig gevuld, bron van waarheid voor alle agents.
- **Structuur staat** — Denzel (Orchestrator) + 3 hoofdagents (Content, Partnership, Website), elk met `identiteit.md`/`soul.md`/`user.md`; 10 sub-agents zijn uitgewerkt als catalogus-item, allemaal status "idee".
- **Website Agent loopt voorop** — als enige al een compleet grenzen-formulier doorlopen (14 juli 2026): [[Agent Takenverdeling & Grenzen]] en [[Goedkeuringsworkflow]] staan er. Ook al 4 vakinhoudelijke notities gevuld: [[SEO Strategie & Keywords]], [[Website Structuur & Sitemap]], [[Homepage Copy & Structuur]], [[Conversie Optimalisatie Checklist]].
- **Denzel, Content Agent, Partnership Agent** — hun `soul.md` (autonomie-tabel: wat mag zelf, wat moet overleg) is nog niet doorgesproken.
- **Content Agent en Partnership Agent** — de vakinhoudelijke notities eronder (Content Pillars, Content Strategie, Ideale Partner Profiel, etc.) staan grotendeels nog leeg.
- Geen van de 10 sub-agents is al echt in gebruik — allemaal status "idee".

**Waarom deze volgorde:** eerst de laag die alles daaronder veilig maakt (autonomie/soul.md), dan de vakinhoud die sub-agents nodig hebben om daadwerkelijk iets te kunnen opleveren, en pas dán één sub-agent als pilot echt bouwen. Dat is exact het pad dat Website Agent al heeft afgelegd — dit stappenplan herhaalt dat voor de rest.

---

## Fase 1 — Autonomie vastleggen (soul.md invullen)

- [ ] Grenzen-formulier voor **Denzel** — zelfde gesprek als bij Website Agent op 14 juli
- [ ] Grenzen-formulier voor **Content Agent**
- [ ] Grenzen-formulier voor **Partnership Agent**

Zonder deze tabel weet geen enkele sub-agent onder deze hoofdagents wanneer hij zelf mag handelen of eerst moet overleggen met lars.

## Fase 2 — Vakinhoud vullen per hoofdagent

- [ ] **Content Agent** — [[Content Strategie]], [[Content Pillars]], [[Platform Richtlijnen]], [[Posting Frequentie per Platform]]
- [ ] **Content Agent** — [[Copy Bank]], [[Caption Gids per Platform]], [[CTA Bibliotheek]], [[Hashtag Bibliotheek]]
- [ ] **Partnership Agent** — [[Ideale Partner Profiel]], [[Partnership Strategie]], [[Evaluatiecriteria]]
- [ ] **Website Agent (restant)** — Technisch/[[Shopify App Stack]], Technische Procedures, Update Log
- [ ] **Website Agent (restant)** — [[Analytics & KPI Dashboard]] — *geblokkeerd tot Shopify-admin/GA4-toegang, 1 augustus 2026*

Dit is de content die de sub-agents straks daadwerkelijk gebruiken: zonder gevulde bron kan bv. de Content Strategie & Planning Agent geen kalender vullen, en de B2B Klanten Agent geen partner beoordelen.

## Fase 3 — Eén sub-agent als pilot bouwen

- [ ] Eén sub-agent kiezen om als eerste van "idee" → "in ontwikkeling" → "actief" te brengen
- [ ] **Voorstel:** SEO Agent of Design Agent (beide onder Website Agent) — die hoofdagent heeft al de meeste vakinhoud én een werkende goedkeuringsworkflow, dus de kortste afstand tot iets bruikbaars. Geen besluit, een uitgangspunt.
- [ ] Bij deze pilot meteen vastleggen hóe een sub-agent technisch wordt "aangeroepen" — apart systeem/project, of een sectie die erbij komt als er met de hoofdagent gewerkt wordt. Dit ligt nog helemaal open.
- [ ] Bevindingen van de pilot vastleggen in [[Feedback & Iteratie Log]] vóórdat de volgende sub-agent aan de beurt is

## Fase 4 — Resterende infrastructuur

- [ ] [[API & Tool Connections]] invullen — tool-regels die voor meerdere (sub-)agents gelden (bv. de Chrome-kill regel, nu alleen genoemd in Partnership Agent's `soul.md`)
- [ ] Besluiten wat er gebeurt met de lege bestanden in `System Prompts/` — overbodig geworden sinds het soul/identiteit/user-schema
- [ ] [[Context Injection Template]] en [[Output Format Specificaties]] invullen zodra er echt met een sub-agent gewerkt wordt

## Fase 5 — Opschalen

- [ ] De overige 9 sub-agents één voor één dezelfde weg laten volgen (idee → in ontwikkeling → actief)
- [ ] Denzel's routerende rol pas echt testen zodra minstens 2 hoofdagents met actieve sub-agents tegelijk draaien — pas dan is er iets om te routeren/bewaken

---

## Openstaande keuzes voor lars

- Volgorde tussen Content Agent en Partnership Agent in Fase 1/2 — hierboven bewust geen voorkeur op gezet.
- Welke sub-agent echt als eerste pilot (Fase 3) — SEO/Design zijn een voorstel, geen besluit.
- Hoe een sub-agent straks technisch draait — bepaalt hoeveel bouwwerk Fase 3 kost.

---

## Gerelateerde bestanden

- [[Agent Hiërarchie & Structuurschema]]
- [[Agent Bestandsschema (Soul, Identiteit, User)]]
- [[Agent Takenverdeling & Grenzen]]
- [[Goedkeuringsworkflow]]
