# Agent Hiërarchie & Structuurschema

> Legt de volledige laagstructuur vast: één Orchestrator Agent boven de 3 hoofdagents, en sub-agents als catalogus-items ónder elke hoofdagent. Voor de bestandsopbouw van een los agent-profiel (identiteit/soul/user): zie [[Agent Bestandsschema (Soul, Identiteit, User)]].

---

## De 3 lagen

```
Laag 0 — Orchestrator Agent (1x)
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
- **Escaleren (naar boven):** een sub-agent escaleert altijd via zijn hoofdagent, nooit rechtstreeks naar de Orchestrator of lars. Een hoofdagent volgt zijn eigen autonomie-tabel in soul.md; alles op "Altijd overleg vooraf" gaat richting lars.
- **Orchestrator:** grijpt in zodra taken tussen hoofdagents overlappen of tegenstrijdig dreigen te worden (bv. content over een B2B-partner die ook op de site moet komen), en bundelt overleg richting lars zodat die niet los met 3 agents hoeft te schakelen.

## Bestandsstructuur per laag

| Laag | Bestanden | Locatie |
|---|---|---|
| Orchestrator | `identiteit.md`, `soul.md`, `user.md` | `04_Agent_Infrastructuur/` |
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
```

---

## Status

| Onderdeel | Status |
|---|---|
| Orchestrator Agent (identiteit/soul/user) | Concept-versie neergezet — naam en scope nog te bevestigen door lars |
| Sub-agents-sectie in identiteit.md | Klaargezet in Content, Partnership en Website Agent — nog leeg, eerste sub-agents nog te benoemen |

## Openstaand

- Naam en precieze scope van de Orchestrator Agent bevestigen (of aanpassen) — concept staat in `04_Agent_Infrastructuur/identiteit.md`.
- Per hoofdagent de eerste sub-agents benoemen en invullen met het template hierboven.
- Autonomie-tabel van de Orchestrator (in `soul.md`) is nog niet doorgesproken — zelfde soort gesprek als het grenzen-formulier van de Website Agent.

---

## Gerelateerde bestanden

- [[Agent Bestandsschema (Soul, Identiteit, User)]]
- [[Agent Takenverdeling & Grenzen]]
- [[Goedkeuringsworkflow]]
