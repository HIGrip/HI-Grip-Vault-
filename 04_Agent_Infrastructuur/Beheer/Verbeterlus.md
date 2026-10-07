---
type: kennis
gebied: agent-infrastructuur
bijgewerkt: 2026-10-01
---

# Verbeterlus — Denzel en de agents worden steeds beter, binnen de kaders

> Aanvulling op [[Opdrachtprotocol]]. Het opdrachtprotocol verbetert één opdracht; deze lus verbetert het systeem zelf. Sub-agents onthouden niets, dus alle verbetering zit in bestanden: [[Leerregels per Agent]], de briefing-sjablonen, de zelfcheck-lijsten en de `Identiteit <Agent>.md`-bestanden.

## Kaders — wat Denzel zelf mag verbeteren

| Soort verbetering | Niveau |
|---|---|
| Leerregel toevoegen, aanscherpen, samenvoegen of verwijderen (met reden en datum) | Zelf doen |
| Briefing-sjabloon, zelfcheck-lijst en opleverformaat verbeteren | Zelf doen |
| Pitfall of procedure in een Hermes-skill (`higrip-*`) toevoegen | Zelf doen |
| Entry in [[Feedback & Iteratie Log]], rij in [[Agent Werk & Kwaliteit Overzicht]] | Zelf doen |
| Verouderde of tegenstrijdige vault-notitie signaleren | Zelf doen (melden) |
| Verouderde notitie inhoudelijk corrigeren | Voorstellen, Lars keurt goed |
| Wijziging in `Identiteit <Agent>.md` (rol, scope, werkwijze, vaktheorie) van een agent | Voorstellen, Lars keurt goed |
| Tools, MCP's of model van een agent wijzigen | Voorstellen, Lars keurt goed |
| Nieuwe routine of nieuwe agent | Voorstellen, Lars keurt goed |
| Autonomie-niveaus, harde grenzen, merkregels, feiten in Brand Core | **Nooit zelf.** Alleen een voorstel; Lars beslist |

Een verbetering mag nooit een grens of autonomie-niveau versoepelen, ook niet "een beetje". Twijfel = voorstel.

## Drie ritmes

### 1. Na elke opdracht (direct)
- Correctie of "voortaan…" van een opdrachtgever → leerregel (zie Opdrachtprotocol stap 8).
- Reviewer vond iets blokkerends dat de maker miste → leerregel voor die agent: wat had hij moeten checken?
- Een agent loopt vast op een tool, pad of bron → pitfall in de leerregels of de skill.

### 2. Wekelijks (in het Denzel-weekoverzicht, stap 8.4)
Denzel kijkt terug op de week en beantwoordt vier vragen, kort:
1. **Welke fout kwam voor de tweede keer terug?** Dan werkt de leerregel niet: herschrijf hem scherper, zet hem eerder in de briefing, of maak er een controlepunt van in de zelfcheck.
2. **Welke agent kreeg de meeste correcties of reviewer-bevindingen?** Daar zit de zwakste schakel; stel een verbetering voor.
3. **Wat kostte onnodig veel tijd of rondes?** Verbeter het sjabloon of de routering.
4. **Welk voorstel van Lars is onbeoordeeld?** Niet nog een voorstel erbij: herinner.

### 3. Maandelijks (eerste maandag, na het weekoverzicht)
Denzel doet een **systeemreview** en schrijft het resultaat als notitie in `05_Research/` volgens `PROCEDURE.md`:
- **Leerregels opschonen:** samenvoegen wat dubbel is, schrappen wat achterhaald is (bron controleren), regels ouder dan 90 dagen opnieuw toetsen aan de vault. Een lijst die alleen groeit wordt niet meer gelezen.
- **Scorekaart per agent bijwerken** (zie hieronder) en trend benoemen.
- **Check op drift:** staan `Identiteit <Agent>.md`, de skills en de routine-prompts nog gelijk aan de werkelijkheid (thema-ID's, tools, modellen, status)? Afwijkingen melden aan Lars.
- **Top 3 verbeteringen** voorstellen die Lars moet goedkeuren (alles wat boven de "Zelf doen"-regel valt).

## Scorekaart per agent

Wordt bijgehouden onder het kwaliteitsdashboard. Alleen cijfers die uit het werk komen, niets schatten.

| Maat | Betekenis |
|---|---|
| Opdrachten deze periode | Aantal |
| Eerste keer goed | Aandeel zonder blokkerende of belangrijke reviewer-bevinding |
| Geaccepteerd door de opdrachtgever | Aandeel opgeleverd werk dat Lars, Tigo of Timo zonder aanpassing goedkeurde. Dit telt zwaarder dan hoeveel een agent heeft gedaan |
| Correctierondes gemiddeld | Doel: dalend |
| Herhaalde fouten | Fout waarvoor al een leerregel bestond. Doel: 0 |
| Verzonnen of onbronde feiten | Doel: 0, elke keer een leerregel én melding |
| Opgeleverd zonder zelfcheck | Doel: 0 |

Een agent met herhaalde fouten krijgt geen nieuwe taak zonder dat de leerregel eerst is aangescherpt. Dat is een kwaliteitsmaatregel, geen straf.

## Denzel verbetert zichzelf ook

- Na elke opdracht van gewicht: **wat heb ik zelf gemist dat de reviewer of Lars wel zag?** Dat is een leerregel onder "Voor Denzel" in [[Leerregels per Agent]].
- Denzel controleert zijn eigen opleverformaat: staat "wat ik mis of kan beter" er echt in, en is het concreet?
- Denzel meldt zelf wanneer hij iets niet kon controleren. Nooit een gat verbergen.

## Wat Lars ziet

Eén regel in elke oplevering als er iets is geleerd: `GELEERD: <regel> → vastgelegd bij <agent>`. Verder niets, tenzij een voorstel zijn goedkeuring nodig heeft. Het maandelijkse systeemreview-voorstel is de plek waar Lars het systeem bijstuurt.

## Wat dit niet is
- Geen zelfsturende uitbreiding van bevoegdheden. Meer leren betekent beter werken binnen dezelfde grenzen.
- Geen reden om de vault vol te schrijven. Een leerregel hoort kort te zijn: regel, reden, datum.

## Gerelateerd onderzoek (automatisch)

Onderzoek uit `05_Research/` dat naar deze notitie verwijst, nieuwste eerst. Bijgewerkt door `vault_nav.py`; niet met de hand bewerken.

- [[2026-10-07-notebooklm-ai-agent-tiktoks]] — NotebookLM met AI-agent TikToks: wat is bruikbaar voor HÏ Grip

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[04 Agent Infrastructuur — Index]] · [[Home]]
