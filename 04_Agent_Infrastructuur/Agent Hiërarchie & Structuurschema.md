# Agent Hiërarchie & Structuurschema

> Legt de volledige laagstructuur vast: Denzel (Orchestrator Agent) boven de 3 hoofdagents, en sub-agents als catalogus-items ónder elke hoofdagent. Voor de bestandsopbouw van een los agent-profiel (identiteit/soul/user): zie [[Agent Bestandsschema (Soul, Identiteit, User)]].

---

## De 3 lagen

```
Laag 0 — Denzel, de Orchestrator Agent (1x)
   │   verdeelt werk, bewaakt merk-consistentie tussen agents, is hét aanspreekpunt voor lars
   ▼
Laag 1 — Hoofdagents (3x): Content Agent, Partnership Agent, Website Agent
   │   elk met eigen identiteit.md / soul.md / user.md
   ▼
Laag 2 — Sub-agents (Nx per hoofdagent)
      smalle specialisten, elk heel goed in één ding — vastgelegd als
      catalogus-item in de "Sub-agents"-sectie van het identiteit.md
      van hun hoofdagent (géén losse bestanden)
```

## Hoe verantwoordelijkheid stroomt

- **Delegeren (naar beneden):** een hoofdagent zet een sub-agent in zodra een taak binnen diens specifieke specialisme valt — zie het veld "Wanneer inschakelen" per sub-agent.
- **Escaleren (naar boven):** een sub-agent escaleert altijd via zijn hoofdagent, nooit rechtstreeks naar Denzel of lars. Een hoofdagent volgt zijn eigen autonomie-tabel in soul.md; alles op "Altijd overleg vooraf" gaat richting lars.
- **Denzel:** grijpt in zodra taken tussen hoofdagents overlappen of tegenstrijdig dreigen te worden (bv. content over een B2B-partner die ook op de site moet komen), en bundelt overleg richting lars zodat die niet los met 3 agents hoeft te schakelen.

**Hoe een hoofdagent herkent dat hij een sub-agent nodig heeft:** elke hoofdagent heeft in zijn eigen `soul.md` een sectie "Delegatie naar sub-agents" — een korte tabel "als... → dan sub-agent X" die de "Wanneer inschakelen"-triggers uit de sub-agent-catalogus samenvat. Dat is de plek waar de hoofdagent zelf checkt of een binnenkomende taak eigenlijk bij een specialist hoort, vóórdat hij het zelf oppakt.

## Bestandsstructuur per laag

| Laag | Bestanden | Locatie |
|---|---|---|
| Orchestrator (Denzel) | `identiteit.md`, `soul.md`, `user.md` | `04_Agent_Infrastructuur/` |
| Hoofdagent | `identiteit.md`, `soul.md`, `user.md` | `01_Content_Agent/`, `02_Partnership_Agent/`, `03_Website_Agent/` |
| Sub-agent | geen eigen bestanden — catalogus-item in de "Sub-agents"-sectie van het `identiteit.md` van zijn hoofdagent | binnen het `identiteit.md` van de hoofdagent |

---

## Template: sub-agent catalogus-item

Plak dit blok in de `## Sub-agents`-sectie van het `identiteit.md` van de betreffende hoofdagent, één blok per sub-agent:

```markdown
### [Naam sub-agent]
- **Specialisme:** [het ene ding waar hij heel goed in is]
- **Wanneer inschakelen:** [trigger — wanneer schuift de hoofdagent een taak hierheen door, i.p.v. zelf te doen]
- **Levert op:** [concreet resultaat/output]
- **Kernbronnen:** [[...]]
- **Status:** idee / in ontwikkeling / actief
- **Autonomie:** [zelf doen / voorstellen, ik keur goed / altijd overleg vooraf — voor de taak van déze sub-agent specifiek]
- **Harde grenzen:** [wat deze sub-agent nooit doet]
- **Toon:** [alleen relevant als de output extern/klant-zichtbaar is; anders "n.v.t."]
```

**Waarom deze 3 extra velden (2026-07-17, op verzoek van lars):** een sub-agent is smal genoeg om geen eigen `soul.md`-bestand nodig te hebben, maar had tot nu toe wél geen eigen gedragsdefinitie — alleen wat hij doet en wanneer, niet hóe. Autonomie/Harde grenzen/Toon zijn de "mini-soul" van de sub-agent, ingebed in hetzelfde catalogus-item. Bij twijfel eerst kijken of de hoofdagent's eigen `soul.md` al iets zegt over dezelfde taak (dan overnemen) vóór iets nieuws te verzinnen.

**Onderbouwingsregel:** kies sub-agents die aansluiten bij een bestaande, al georganiseerde submap/thema binnen de hoofdagent (dus niet uit het niets verzinnen) — dat is de eerste vraag om te toetsen of een sub-agent-indeling klopt. Zo zijn ze nu ingevuld:

| Hoofdagent | Sub-agent | Gebaseerd op bestaande submap |
|---|---|---|
| Content Agent | Caption & Copy Agent | Copy & Tekst |
| Content Agent | Content Strategie & Planning Agent | Strategie & Planning |
| Content Agent | Video & Visuele Productie Agent | Visuele Productie |
| Partnership Agent | Influencer & Creator Agent | Influencers_Creators |
| Partnership Agent | B2B Klanten Agent | B2B_Samenwerkingen / Lijn A |
| Partnership Agent | Partnerships & Events Agent | B2B_Samenwerkingen / Lijn B |
| Website Agent | SEO Agent | Strategie |
| Website Agent | Design Agent | Technisch |
| Website Agent | Website Copy Agent | Content |
| Website Agent | Conversie & Analyse Agent | Analyse |

---

## Status

| Onderdeel | Status |
|---|---|
| Orchestrator Agent (identiteit/soul/user) | Naam vastgesteld: **Denzel**. Scope-concept staat er; autonomie-tabel nog te bevestigen door lars |
| Sub-agents-sectie in identiteit.md | Ingevuld voor Content (3), Partnership (3) en Website (4) — allemaal status "idee", nog niets gebouwd |

## Openstaand

Zie [[Stappenplan — Verdere Bouw]] voor de volledige, gefaseerde aanpak (autonomie vastleggen → vakinhoud vullen → één sub-agent als pilot bouwen → resterende infra → opschalen).

---

## Gerelateerde bestanden

- [[Stappenplan — Verdere Bouw]]
- [[Agent Bestandsschema (Soul, Identiteit, User)]]
- [[Agent Takenverdeling & Grenzen]]
- [[Goedkeuringsworkflow]]
