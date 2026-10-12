---
type: kennis
gebied: agent-infrastructuur
bijgewerkt: 2026-10-12
---

# Agent Hiërarchie & Structuurschema

> De volledige structuur van het agent-systeem: wie onder wie hangt, wie wat doet en waar elk bestand staat. Stand 12-10-2026. Hoe een los agent-bestand is opgebouwd: [[Agent Bestandsschema (Soul, Identiteit, User)]]. Wie Team HÏ Grip is en de basisregels voor iedere agent: [[user]]. Hoe de agents met het dashboard samenwerken: [[Agents en het dashboard]].

**Interactief:** het invulschema met stamboom staat op https://claude.ai/artifact/AUGt7FiK4K3qHqoruDCyYB, de beoordeling van 12-10 op https://claude.ai/artifact/9QqJ4dLqK8E9hmgmNG3FKo. De vault blijft de bron van waarheid.

---

## De lagen

```
Team HÏ Grip (Lars, Tigo, Timo)
   │   beslist; zet altijd zelf de laatste stap (live, publiceren, versturen, geld, contracten)
   ▼
Denzel — orchestrator (06_Denzel)
   │   routeert, bewaakt kwaliteit, één aanspreekpunt
   ├── eigen team: Stafchef · Vooruitblik-agent · Website-QA · Content-QA · Partnership-QA
   ▼
Hoofdagents (04_Agent_Infrastructuur)
   ├── Website Agent      → SEO · Design · Website Copy · Conversie & Analyse · E-mail Marketing
   ├── Content Agent      → Content Strategie & Planning · Caption & Copy · Video & Visuele Productie · Content Maker · Socials Analyzer
   ├── Partnership Agent  → Influencer & Creator · B2B Klanten · Partnerships & Events
   └── Ads-tak            → nog niet uitgewerkt (zie Stappenplan)
```

## Hoe verantwoordelijkheid stroomt

- **Delegeren (naar beneden):** een hoofdagent zet een sub-agent in zodra een taak binnen diens specialisme valt. De "Delegatie naar sub-agents"-tabel in het `Soul <Agent>.md` van de hoofdagent zegt welke.
- **Escaleren (naar boven):** een sub-agent escaleert altijd via zijn hoofdagent, nooit rechtstreeks naar Denzel of Team HÏ Grip. Alles op "Altijd overleg vooraf" gaat via Denzel naar Team HÏ Grip.
- **Tussen hoofdagents:** geen rechtstreeks contact. Wat de ene hoofdagent van de andere nodig heeft, loopt via Denzel en het postvak, zodat er een spoor is.
- **Toetsen:** de QA-agents toetsen het werk van "hun" hoofdagent en rapporteren aan Denzel, niet aan die hoofdagent. Denzel checkt het verdict snel en beslist: door, terug of escaleren.
- **Administratie:** de Stafchef schrijft briefings, houdt het postvak, het kwaliteitslog en de [[Leerregels per Agent]] bij, en vinkt in het dashboard af wat met bewijs af is.

## Wie doet wat in de content-keten

| Stap | Wie |
|---|---|
| Idee bedenken en in Buffer zetten, met pillar-tag en globale beschrijving | Content Strategie & Planning Agent |
| Kiezen welk idee wordt uitgevoerd | Team HÏ Grip, in Buffer |
| Productieplanning: wanneer filmen, monteren en af | Content Strategie & Planning Agent |
| Productielijst, edit-instructies, sound en cover-brief | Video & Visuele Productie Agent |
| Filmen | Team HÏ Grip |
| Monteren, foto's bewerken, cover en AI-beeld maken | Content Maker |
| Caption, CTA en hashtags | Caption & Copy Agent |
| Toetsen | Content-QA, verdict naar Denzel |
| Plaatsen | Altijd een mens |
| Bereik, volgers en klikken meten en advies geven | Socials Analyzer, via de Content Agent |

## Waar staat wat

| Wat | Bestanden | Locatie |
|---|---|---|
| Denzel | `Identiteit Denzel.md`, `Soul Denzel.md`, `Werkplek Denzel.md`, handboek | `06_Denzel/` |
| Denzels eigen team | per agent `Identiteit <Agent>.md` + `Werkplek <Agent>.md`; QA-agents ook een toetslijst | `06_Denzel/Stafchef/`, `06_Denzel/Vooruitblik/`, `06_Denzel/Kwaliteitspartners/<QA>/` |
| Hoofdagent | `Identiteit <Agent>.md`, `Soul <Agent>.md` | `04_Agent_Infrastructuur/<Hoofdagent>/` |
| Sub-agent | `Identiteit <Agent>.md` + `Werkplek <Agent>.md`, één map per sub-agent | `04_Agent_Infrastructuur/<Hoofdagent>/<Sub-agent>/` |
| Gedeeld voor alle agents | [[user]], [[Leerregels per Agent]], [[Opdrachtprotocol]], [[Verbeterlus]], [[API & Tool Connections]], [[Goedkeuringsworkflow]], [[Agents en het dashboard]] | `04_Agent_Infrastructuur/Beheer/` |
| Routines (cloud) | promptbestanden en README | `04_Agent_Infrastructuur/Routines/` |
| Vakkennis | de bronnotities per vakgebied | `01_Content_Agent/`, `02_Partnership_Agent/`, `03_Website_Agent/` |
| Merk en strategie | Brand Core, leidend sinds 30-9-2026 (Canva *MERK & STRATEGIE*) | `00_Brand_Core/` |

**De uitvoerende laag** staat in de setup-repo `HIGrip/HI-Grip-claude-setup` (`agents/`, `commands/`, `skills/`). Een `agents/*.md` bevat alleen de technische frontmatter en de instructie om het eigen vault-bestand te lezen. De inhoud staat alleen in de vault.

## Sub-agents per hoofdagent

| Hoofdagent | Sub-agent | Map | Status |
|---|---|---|---|
| Website Agent | SEO Agent | `Website Agent/SEO Agent/` | in ontwikkeling |
| Website Agent | Design Agent | `Website Agent/Design Agent/` | in ontwikkeling |
| Website Agent | Website Copy Agent | `Website Agent/Website Copy Agent/` | in ontwikkeling |
| Website Agent | Conversie & Analyse Agent | `Website Agent/Conversie & Analyse Agent/` | in ontwikkeling |
| Website Agent | E-mail Marketing Agent | `Website Agent/E-mail Marketing Agent/` | in ontwikkeling |
| Content Agent | Content Strategie & Planning Agent | `Content Agent/Content Strategie & Planning Agent/` | idee |
| Content Agent | Caption & Copy Agent | `Content Agent/Caption & Copy Agent/` | idee |
| Content Agent | Video & Visuele Productie Agent | `Content Agent/Video & Visuele Productie Agent/` | in ontwikkeling |
| Content Agent | Content Maker | `Content Agent/Content Maker/` | concept (9-10, afgemaakt 12-10) |
| Content Agent | Socials Analyzer | `Content Agent/Socials Analyzer/` | concept (9-10) |
| Partnership Agent | Influencer & Creator Agent | `Partnership Agent/Influencer & Creator Agent/` | actief |
| Partnership Agent | B2B Klanten Agent | `Partnership Agent/B2B Klanten Agent/` | in ontwikkeling |
| Partnership Agent | Partnerships & Events Agent | `Partnership Agent/Partnerships & Events Agent/` | in ontwikkeling |

## Een nieuwe agent toevoegen

1. Voorstel aan Lars en Timo (zij beslissen over de AI-structuur). Vul het in via het invulschema.
2. Maak een eigen map onder de hoofdagent met `Identiteit <Agent>.md` en `Werkplek <Agent>.md`, volgens [[Agent Bestandsschema (Soul, Identiteit, User)]]. Mapnaam en bestandsnaam exact gelijk aan de naam van de agent, met hoofdletters, want cloudsessies zijn hoofdlettergevoelig.
3. Zet in de identiteit van de hoofdagent een regel met de rol en een link, en voeg de agent toe aan de delegatietabel in diens soul.
4. Voeg in de setup-repo een `agents/<naam>.md` toe die naar het vault-pad verwijst, en werk de tabel in `CLAUDE.md` bij.
5. Geef de agent een sectie in [[Leerregels per Agent]] en zet hem in de tabel hierboven.
6. Draai `04_Agent_Infrastructuur/Beheer/vault_nav.py` zodat de indexen kloppen.

---

## Gerelateerde bestanden

- [[Stappenplan — Verdere Bouw]]
- [[Agent Bestandsschema (Soul, Identiteit, User)]]
- [[Agent Takenverdeling & Grenzen]]
- [[Goedkeuringsworkflow]]
- [[API & Tool Connections]]
- [[06 Denzel — Index]]

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[04 Agent Infrastructuur — Index]] · [[Home]]
