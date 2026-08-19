# Agent Hiërarchie & Structuurschema

> Legt de volledige laagstructuur vast: Denzel (Orchestrator Agent) boven de 3 hoofdagents, en sub-agents als catalogus-items ónder elke hoofdagent. Voor de bestandsopbouw van een los agent-profiel (soul/identiteit + de gedeelde user.md): zie [[Agent Bestandsschema (Soul, Identiteit, User)]].

**Interactieve versie (stamboom):** https://claude.ai/code/artifact/26ae684f-642b-461d-866b-348ce1ec6f0d — zelfde structuur, maar klikbaar/invulbaar, met Denzel bovenaan en per hoofdagent de sub-agents inclusief hun mini-soul (autonomie/harde grenzen/toon).

---

## De 3 lagen

```
Laag 0 — Denzel, de Orchestrator Agent (1x)
   │   verdeelt werk, bewaakt merk-consistentie tussen agents, is hét aanspreekpunt voor lars
   ▼
Laag 1 — Hoofdagents (3x): Content Agent, Partnership Agent, Website Agent
   │   elk met eigen identiteit.md / soul.md (user.md is gedeeld, zie hieronder)
   ▼
Laag 2 — Sub-agents (Nx per hoofdagent)
      smalle specialisten, elk heel goed in één ding — vastgelegd als
      catalogus-item, per categorie/submap gegroepeerd, in de
      "Sub-agents"-sectie van het identiteit.md van hun hoofdagent
      (géén losse bestanden)
```

## Hoe verantwoordelijkheid stroomt

- **Delegeren (naar beneden):** een hoofdagent zet een sub-agent in zodra een taak binnen diens specifieke specialisme valt — zie het veld "Wanneer inschakelen" per sub-agent, en de "Delegatie naar sub-agents"-tabel in het `soul.md` van de hoofdagent.
- **Escaleren (naar boven):** een sub-agent escaleert altijd via zijn hoofdagent, nooit rechtstreeks naar Denzel of lars. Een hoofdagent volgt zijn eigen autonomie-tabel in soul.md; alles op "Altijd overleg vooraf" gaat richting lars.
- **Denzel:** grijpt in zodra taken tussen hoofdagents overlappen of tegenstrijdig dreigen te worden (bv. content over een B2B-partner die ook op de site moet komen), en bundelt overleg richting lars zodat die niet los met 3 agents hoeft te schakelen.

**Hoe een hoofdagent herkent dat hij een sub-agent nodig heeft:** elke hoofdagent heeft in zijn eigen `soul.md` een sectie "Delegatie naar sub-agents" — een korte tabel "als... → dan sub-agent X" die de "Wanneer inschakelen"-triggers uit de sub-agent-catalogus samenvat. Dat is de plek waar de hoofdagent zelf checkt of een binnenkomende taak eigenlijk bij een specialist hoort, vóórdat hij het zelf oppakt.

---

## Bestandsstructuur per laag (2026-07-17, tweede herziening)

**Kernprincipe: 04_Agent_Infrastructuur bevat het hele "systeem" (wie elke agent is en hoe hij zich gedraagt), 01/02/03 bevatten alleen nog de vakinhoudelijke bronkennis.** Niet omgekeerd — identiteit.md/soul.md staan dus NIET meer in de hoofdagent-mappen zelf.

| Laag | Bestanden | Locatie |
|---|---|---|
| Orchestrator (Denzel) | `identiteit.md`, `soul.md` | `04_Agent_Infrastructuur/` (root) |
| Hoofdagent | `identiteit.md`, `soul.md` | `04_Agent_Infrastructuur/Content Agent/`, `.../Partnership Agent/`, `.../Website Agent/` |
| Sub-agent (catalogus) | geen eigen bestanden — catalogus-item, gegroepeerd per categorie, in de "Sub-agents"-sectie van het `identiteit.md` van zijn hoofdagent | binnen `04_Agent_Infrastructuur/[Hoofdagent]/identiteit.md` |
| Sub-agent werkplek | `_Werkplek.md` — gereserveerd voor toekomstige output zodra een sub-agent van "idee" naar "in ontwikkeling" gaat | `04_Agent_Infrastructuur/[Hoofdagent]/[Categorie]/[Sub-agent naam]/` — dezelfde categorie-submap-naam als in 01/02/03 |
| **Gedeeld (alle agents)** | `user.md` (wie is lars/HÏ Grip), [[API & Tool Connections]] (tool-regels), [[Agent Takenverdeling & Grenzen]], [[Goedkeuringsworkflow]], [[Feedback & Iteratie Log]] | `04_Agent_Infrastructuur/Beheer/` |
| **Vakinhoudelijke bronkennis** | de originele notities per submap/categorie (bv. Content Pillars, SEO Strategie & Keywords) | `01_Content_Agent/`, `02_Partnership_Agent/`, `03_Website_Agent/` — puur kennisbank, geen agent-definities meer |

Elk `identiteit.md`/`soul.md`/`_Werkplek.md` in 04 linkt terug naar de bronkennis in 01/02/03 (via wikilink of een expliciete padverwijzing) — de "kennis" en het "systeem" zijn zo gescheiden, maar wel aan elkaar gekoppeld.

**Waarom user.md gedeeld is:** de 4 losse versies (Denzel + 3 hoofdagents) waren voor 90% identiek — merk, lars, tone of voice. Sinds 2026-07-17 is dat één bestand in Beheer; alleen wat écht per agent verschilt (scope, sub-agents, autonomie) staat nog in het eigen `identiteit.md`/`soul.md`.

**Wat is verdwenen:** de mappen `Context & Output/` en `System Prompts/` zijn verwijderd — die informatie (systeem-prompt-achtige inhoud) staat nu per agent in zijn eigen `identiteit.md` + `soul.md`, in plaats van in aparte, generieke sjabloonbestanden.

---

## Template: sub-agent catalogus-item

Plak dit blok onder de juiste categorie-kop in de `## Sub-agents`-sectie van het `identiteit.md` van de betreffende hoofdagent:

```markdown
### Categorie: [naam van de bestaande submap waar dit bij hoort]

#### [Naam sub-agent]
- **Specialisme:** [het ene ding waar hij heel goed in is]
- **Wanneer inschakelen:** [trigger — wanneer schuift de hoofdagent een taak hierheen door, i.p.v. zelf te doen]
- **Levert op:** [concreet resultaat/output]
- **Kernbronnen:** [[...]]
- **Status:** idee / in ontwikkeling / actief
- **Autonomie:** [zelf doen / voorstellen, ik keur goed / altijd overleg vooraf — voor de taak van déze sub-agent specifiek]
- **Harde grenzen:** [wat deze sub-agent nooit doet]
- **Toon:** [alleen relevant als de output extern/klant-zichtbaar is; anders "n.v.t."]
```

**Waarom categorieën (2026-07-17):** elke sub-agent hoort al bij een bestaande submap binnen de hoofdagent (zie de onderbouwingsregel hieronder) — door de catalogus zelf ook per categorie te groeperen, is dat verband meteen zichtbaar in plaats van alleen in een losse toelichtingsregel.

**Waarom Autonomie/Harde grenzen/Toon (2026-07-17, op verzoek van lars):** een sub-agent is smal genoeg om geen eigen `soul.md`-bestand nodig te hebben, maar had geen eigen gedragsdefinitie — alleen wat hij doet en wanneer, niet hóe. Dit zijn de 3 velden zijn de "mini-soul" van de sub-agent. Bij twijfel eerst kijken of de hoofdagent's eigen `soul.md` al iets zegt over dezelfde taak (dan overnemen) vóór iets nieuws te verzinnen.

**Onderbouwingsregel:** kies sub-agents die aansluiten bij een bestaande, al georganiseerde submap/thema binnen de hoofdagent (dus niet uit het niets verzinnen) — dat is de eerste vraag om te toetsen of een sub-agent-indeling klopt. Zo zijn ze nu ingevuld:

| Hoofdagent | Categorie (submap) | Sub-agent |
|---|---|---|
| Content Agent | Copy & Tekst | Caption & Copy Agent |
| Content Agent | Strategie & Planning | Content Strategie & Planning Agent |
| Content Agent | Visuele Productie | Video & Visuele Productie Agent |
| Partnership Agent | Influencers_Creators | Influencer & Creator Agent |
| Partnership Agent | B2B_Samenwerkingen / Lijn A | B2B Klanten Agent |
| Partnership Agent | B2B_Samenwerkingen / Lijn B | Partnerships & Events Agent |
| Website Agent | Strategie | SEO Agent |
| Website Agent | Technisch | Design Agent |
| Website Agent | Content | Website Copy Agent |
| Website Agent | Analyse | Conversie & Analyse Agent |

---

## Status

| Onderdeel | Status |
|---|---|
| Orchestrator Agent (identiteit/soul) | Naam vastgesteld: **Denzel**. Scope-concept staat er; autonomie-tabel nog te bevestigen door lars |
| Gedeelde user.md | Geconsolideerd in Beheer, 2026-07-17 |
| Sub-agents-sectie in identiteit.md | Ingevuld en gecategoriseerd voor Content (3), Partnership (3) en Website (4). 5 sub-agents zijn sinds 2026-08-09 "in ontwikkeling" met een echte skill (zie hieronder); 5 blijven "idee" (2 gedekt door generieke skills, 3 zijn workflow-automatisering, geen skill-kandidaat) |
| Skills-laag (nieuw) | Uitvoerende laag naast de vault: `/`-activeerbare skills in `github.com/HIGrip/HI-Grip-claude-setup` (`commands/*.md`). Zie [[Stappenplan — Verdere Bouw]] § Skills-laag voor de volledige uitleg en [[Feedback & Iteratie Log]] voor bevindingen |

## Openstaand

Zie [[Stappenplan — Verdere Bouw]] voor de volledige, gefaseerde aanpak (autonomie vastleggen → vakinhoud vullen → één sub-agent als pilot bouwen → resterende infra → opschalen).

---

## Gerelateerde bestanden

- [[Stappenplan — Verdere Bouw]]
- [[Agent Bestandsschema (Soul, Identiteit, User)]]
- [[Agent Takenverdeling & Grenzen]]
- [[Goedkeuringsworkflow]]
- [[API & Tool Connections]]
