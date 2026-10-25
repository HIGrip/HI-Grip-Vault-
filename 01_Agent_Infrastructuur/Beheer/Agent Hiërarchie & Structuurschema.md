---
type: kennis
gebied: agent-infrastructuur
bijgewerkt: 2026-10-25
---

# Agent Hiërarchie & Structuurschema

> Hoe het agent-systeem in elkaar zit: wie onder wie hangt, hoe een agent-bestand is opgebouwd en waar dingen staan. Wie Team HÏ Grip is, wie wat beslist en de basisregels voor iedere agent: [[user]]. Samenwerking met het dashboard: [[Agents en het dashboard]]. Stand 25-10-2026.

**Interactief:** de stamboom staat op https://claude.ai/artifact/CB7kPsG8rXxGKZ2JEUpChf. De vault blijft de bron van waarheid.

## De lagen

```
Team HÏ Grip (Lars, Tigo, Timo)
   │   beslist; zet altijd zelf de laatste stap (live, publiceren, versturen, geld, contracten)
   ▼
Denzel, alleen orchestrator (03_Denzel), geen eigen sub-agents
   │   routeert, bewaakt kwaliteit, één aanspreekpunt, krijgt een kopie van elk QA-verdict
   ▼
Hoofdagents (01_Agent_Infrastructuur, één Agents-bestand per hoofdagent)
   ├── Social Agent       → Content Strategie & Planning · Caption & Copy · Video & Visuele Productie · Content Maker · Socials Analyzer · Content-QA
   ├── Partnership Agent  → Influencer & Creator · B2B Klanten · Partnerships & Events · Partnership-QA
   ├── Website Agent      → SEO · Website Copy · Conversie & Analyse · E-mail Marketing · Website-QA
   ├── Design Agent       → visuele uitwerking voor Social en Website (QA nog voorstel)
   ├── Operations Agent   → Stafchef · Vooruitblik-agent
   └── Ads-tak            → nog niet uitgewerkt (zie [[Stappenplan — Verdere Bouw]])
```

Zes agents (Denzel + vijf hoofdagents) vormen de groep die samenwerkt; de sub-agents werken binnen hun hoofdagent.

## Hoe een agent is vastgelegd

Eén bestand per hoofdagent: `Agents <naam>.md`, in `01_Agent_Infrastructuur/<Agent>/` (Denzel: `03_Denzel/`). Daarin staat alleen hoe de agent werkt:

1. **Hoofdagent:** rol, wat wel en niet, autonomie (zelf doen, voorstellen, altijd overleg), harde grenzen, escalatie, samenwerking.
2. **Sub-agents:** per sub-agent korte regels (taak, input, output, grens).
3. **QA:** de toetslijst van de eigen QA-agent (gedeelde regels: [[Toetsregels]]).
4. **Overdracht:** welke mappen de agent leest en schrijft.

Wat niet in een Agents-bestand staat, staat één keer elders: merkregels en feiten in `00_Brand_Core/`, basisregels en beslissers in [[user]], vakkennis in de map van de agent, werklogs en leerregels in `08_Operations_Agent/`. Een Agents-bestand verwijst, het herhaalt niet.

## Hoe verantwoordelijkheid stroomt

- **Delegeren (naar beneden):** een hoofdagent zet een sub-agent in zodra een taak binnen diens specialisme valt.
- **Escaleren (naar boven):** een sub-agent escaleert via zijn hoofdagent, nooit rechtstreeks naar Denzel of Team HÏ Grip. Alles op "Altijd overleg vooraf" gaat via Denzel naar Team HÏ Grip.
- **Tussen hoofdagents (besloten 25-10-2026):** de zes agents (Denzel + vijf hoofdagents) overleggen onderling in een groepschat (maximaal 6 deelnemers). Alleen Denzel praat met Team HÏ Grip. Afspraken en overdracht staan altijd ook in een bestand, zodat er een spoor is. De technische inrichting van de groepschat is nog niet vastgelegd.
- **Toetsen:** elke hoofdagent met sub-agents heeft een eigen QA-agent. Het verdict gaat naar die hoofdagent en altijd als kopie naar Denzel. De hoofdagent handelt GOED en CORRIGEER af en mag een verdict niet aanpassen of tegenhouden; Denzel grijpt in bij ESCALEER, een grensschending of een patroon.
- **Administratie:** de Operations Agent, met de Stafchef die briefings schrijft, houdt het kwaliteitslog en de [[Leerregels per Agent]] bij, maakt de weekoverzichten, onderhoudt het dashboard en vinkt in het dashboard af wat met bewijs af is.
- **Wie een taak oppakt:** de taakregel in [[user]] (de eerste die oppakt wordt gekoppeld).

## Wie doet wat in de content-keten

| Stap | Wie |
|---|---|
| Idee bedenken en in Buffer zetten, met pillar-tag en globale beschrijving | Content Strategie & Planning Agent |
| Kiezen welk idee wordt uitgevoerd | Team HÏ Grip, in Buffer |
| Productieplanning: wanneer filmen, monteren en af | Content Strategie & Planning Agent |
| Productielijst, edit-instructies, sound en cover-brief | Video & Visuele Productie Agent |
| Visuele uitwerking van het idee (gevoel en uitstraling) | Design Agent (nieuw, nog uit te werken) |
| Filmen | Team HÏ Grip |
| Monteren, foto's bewerken, cover en AI-beeld maken | Content Maker |
| Caption, CTA en hashtags | Caption & Copy Agent |
| Toetsen | Content-QA, verdict naar de Social Agent, kopie naar Denzel |
| Plaatsen | Altijd een mens |
| Bereik, volgers en klikken meten en advies geven | Socials Analyzer, via de Social Agent |

## Waar draaien de agents

Alle agents worden gebouwd in **Hermes** (besloten 12-10-2026). Een paar agents roepen Claude aan om iets echt te bouwen, zoals een websitesectie. Schrijfwerk (captions, sitecopy, mails) doet Team HÏ Grip waarschijnlijk via de chat met Claude; dat is nog niet definitief. De `Agents <naam>.md`-bestanden zijn de bron en tegelijk de back-up voor Hermes; Claude kan ze ook lezen. De Claude Code-laag staat in de setup-repo `HIGrip/HI-Grip-claude-setup`; een `agents/*.md` daar verwijst alleen naar het bestand in de vault.

## Een nieuwe agent toevoegen

1. Voorstel aan Lars en Timo (zij beslissen over de AI-structuur).
2. Maak `Agents <naam>.md` volgens het model hierboven in `01_Agent_Infrastructuur/<Agent>/`. Mapnaam en bestandsnaam met hoofdletters exact gelijk aan de naam, want cloudsessies zijn hoofdlettergevoelig.
3. Voeg de agent toe aan dit schema en aan [[user]] (sectie De agent-structuur).
4. Geef de agent een sectie in [[Leerregels per Agent]].
5. Draai `01_Agent_Infrastructuur/Beheer/vault_nav.py` zodat de indexen kloppen.

## Gerelateerde bestanden

[[Opdrachtprotocol]] · [[Goedkeuringsworkflow]] · [[API & Tool Connections]] · [[03 Denzel — Index]]

> Map: [[01 Agent Infrastructuur — Index]]
