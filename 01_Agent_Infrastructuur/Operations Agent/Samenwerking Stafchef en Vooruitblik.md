---
type: kennis
gebied: agent-infrastructuur
bijgewerkt: 2026-10-21
status: concept — ter beoordeling door Lars
---

# Samenwerking Stafchef en Vooruitblik

> Hoe de [[Identiteit Operations Agent|Operations Agent]] zijn twee sub-agents inzet. Tot 21-10-2026 heette dit bestand "Delegeren aan het eigen team" en hoorde het bij Denzel. Denzel is sindsdien alleen orchestrator; de Stafchef en de Vooruitblik-agent vallen onder de Operations Agent, de QA-agents onder hun eigen hoofdagent. Voor de opdracht aan een hoofdagent geldt het [[Opdrachtprotocol]].

## Kernregel

Een sub-agent start koud en onthoudt niets. Alles wat hij moet weten staat in zijn briefing en in zijn eigen identiteit. Een briefing zonder succescriteria of zonder bron levert een antwoord op dat er goed uitziet en niet te controleren is.

## Briefing aan een sub-agent

Altijd deze zeven velden:

1. **Taak** in één zin, en het gewenste *resultaat*
2. **Succescriteria**: 3 tot 6 controleerbare punten
3. **Context**: URL's, bestanden, deadline, eerdere beslissingen
4. **Paden**: de eigen identiteit van de agent en de relevante regels uit [[Leerregels per Agent]]
5. **Grenzen die nu gelden**: bijvoorbeeld "alleen lezen", "nog niet gepubliceerd"
6. **Uitvoerformaat**: het verdict, de lijst of het item dat terug moet komen
7. **Stopvoorwaarden**: wanneer de agent stopt en op een mens wacht (een harde grens, een ontbrekende bron, een tweede correctieronde zonder oplossing)

Dit format geldt ook voor de hoofdagents als die hun eigen QA-agent briefen.

## Per sub-agent

### Stafchef
- **Geef mee:** de succescriteria die Denzel heeft vastgelegd, de gewenste hoofdagent en het niveau ("Voorstellen" of "Altijd overleg vooraf").
- **Krijg terug:** een uitgewerkte briefing in het postvak en een regel in het kwaliteitslog.
- **Ook laten doen:** leerregels vastleggen die Denzel heeft bepaald, QA-verdicten vastleggen in het kwaliteitslog, en taken in het dashboard afvinken als er bewijs is.
- **Niet laten doen:** afvinken zonder bewijs of rechtstreeks in de actiebacklog, inhoudelijk oordelen, iets naar buiten sturen.

### Vooruitblik-agent
- **Geef mee:** het onderwerp of de periode ("de komende 90 dagen", "alleen regelgeving") en wat al bekend is.
- **Krijg terug:** items in het formaat van [[Identiteit Vooruitblik-agent]], elk met datum, impact, uiterste actiedatum en bron.
- **Niet laten doen:** juridisch advies, wijzigingen op de site, contact opnemen met organisatoren.

## Samenwerking Stafchef en Vooruitblik

1. Vooruitblik vindt een item en beoordeelt impact, datum en wie het raakt. Een item met actie wordt eerst een regel in de actiebacklog (`05_Research/_backlog/ACTIEBACKLOG.md`), volgens de procedure in `05_Research/_build/PROCEDURE.md`.
2. De Operations Agent legt het item met impact aan Denzel voor. Zodra Denzel besluit dat het wordt uitgezet, schrijft de Stafchef de opdracht in het postvak. Uiterlijk 14 dagen vóór de datum moet de opdracht lopen.
3. De Stafchef bewaakt de deadline. Dreigt een item te laat te komen, dan meldt de Operations Agent het aan Denzel.
4. De hoofdagent voert uit, zijn eigen QA-agent toetst.
5. Is er geen opdracht nodig (alleen bewustzijn), dan blijft het item staan in het 90-dagenoverzicht.

**Eén regel voor beide:** een item dat minder dan 30 dagen vóór de datum voor het eerst wordt gemeld, is te laat. Meld dat dan ook zo, zonder het mooier te maken.

## Parallel of na elkaar

- Vooruitblik en Stafchef werken na elkaar: eerst het item, daarna de opdracht.
- De wekelijkse scan van Vooruitblik en de weekstand van de Stafchef kunnen parallel.

## Wat de Operations Agent en de Stafchef nooit overnemen van Denzel

- Besluiten (kiezen tussen hoofdagents, "Voorstellen, ik keur goed"-onderdelen)
- Het gesprek met Lars over wat openstaat
- Wijzigingen in autonomie of grenzen

## Gerelateerd onderzoek (automatisch)

Onderzoek uit `05_Research/` dat naar deze notitie verwijst, nieuwste eerst. Bijgewerkt door `vault_nav.py`; niet met de hand bewerken.

- [[2026-10-07-notebooklm-ai-agent-tiktoks]] — NotebookLM met AI-agent TikToks: wat is bruikbaar voor HÏ Grip

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[01 Agent Infrastructuur — Index]] · [[Home]]
