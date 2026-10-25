---
type: schema
bijgewerkt: 2026-10-25
status: concept — ter goedkeuring door Lars en Timo (AI-structuur)
---

# Wiki Schema — HÏ Grip Vault (SCHEMA)

> Spelregels voor agents en mensen die in deze vault werken (LLM-wiki-patroon). Het startpunt/de index is [[Home]]. Wijzigingen hier: eerst voorstellen aan Team HÏ Grip (Lars en Timo besluiten over de AI-structuur).

## Drie lagen

| Laag         | Wat                                                                                                                  | Wie mag wijzigen                                         |
| ------------ | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| **1 Bron**   | Wat van buiten komt: exports, rapporten, pdf's, audit-ruwdata (`02_Dashboard/*/raw`, bijlagen, `.xlsx`, afbeeldingen) | Alleen toevoegen, nooit aanpassen                        |
| **2 Wiki**   | Kennis en systeem: `00` t/m `08`, onderzoek in `02_Dashboard`                                                         | Agents, via de procedure en de rechten in hun `Agents <naam>.md` |
| **3 Schema** | Dit bestand + `CLAUDE.md`                                                                                            | Alleen Lars en Timo (zie [[user]])                       |

## Waar staat wat

| Vraag | Map |
|---|---|
| Wat is waar (prijzen, handles, claims)? | `00_Brand_Core/Feiten & Actuele Staat.md` |
| Hoe praat/ziet HÏ Grip eruit? | `00_Brand_Core/` |
| Vakkennis social / partnerships / website / design | `04_Social_Agent` / `05_Partnership_Agent` / `06_Website_Agent` / `07_Design_Agent` |
| Wie is welke agent, wat mag hij? | `01_Agent_Infrastructuur/` (per hoofdagent één `Agents <naam>.md`, incl. sub-agents en QA; spelregels) en `03_Denzel/` (Denzel, alleen orchestrator) |
| Feedback, leerregels, kwaliteit, compliance | `08_Operations_Agent/` |
| Onderzoek, routine-rapporten, acties | `02_Dashboard/` (backlog: `_backlog/ACTIEBACKLOG.md`) |
| Wat is er gedaan en wanneer? | [[log]] (nieuw) en de git-historie |

Regel: één plek per feit. Staat iets op twee plekken, dan is één van de twee een verwijzing.

## Conventies
- Bestandsnamen: `Agents <Agent>.md` per hoofdagent, `NN <Map> — Index.md` per map, `YYYY-MM-DD-onderwerp.md` in `02_Dashboard`. Een naam is uniek in de hele vault. Uitzondering (bewust): 7 paren routine-prompt (`02_Dashboard/Routines/`) en routine-geheugen (`02_Dashboard/_geheugen/`) heten hetzelfde (README, Actiecontrole, Klantstem, Productradar, SEO-regressiecheck, Uitvoerder, Website-UX). Link die altijd met pad (`[[02_Dashboard/_geheugen/klantstem|…]]`) en hernoem ze niet: de cloudroutines lezen die paden.
- Frontmatter: `type`, `gebied`, `bijgewerkt`, `status`. Datums `YYYY-MM-DD`.
- Mindmap: elke notitie heeft precies één navigatieregel `> Map: [[<index van de eigen map>]]` (Brand Core en indexen: `[[Home]]`). Geen verplichte kruislinks: link alleen als een agent de informatie daar moet ophalen, zodat er niet onnodig veel wordt gelezen. `Agents <naam>.md`-bestanden verwijzen zelf naar Feiten en Tone of voice.
- Index-secties in mapindexen worden door `vault_nav.py` bijgewerkt, niet met de hand.
- Sprekende titel + eerste alinea als samenvatting van max. 3 regels, zodat een agent na lezen daarvan kan stoppen.
- **Maximaal ~15 KB per notitie.** Groter: splits in onderwerpen, of zet het archief naast de actuele versie. Groeiende logs: actueel (laatste 2 weken) + `_archief/`.
- Tegenspraak: nieuwere bron wint, noteer beide met datum en markeer `contested: true`. Rangorde: zie `CLAUDE.md` §1.
- Geen persoonsgegevens van klanten, geen wachtwoorden, tokens of privédocumenten in de vault.

## Agent-regels
- Oriënteren: `Home` → map-index → gericht zoeken (`search_files`), nooit een hele map lezen.
- Schrijven alleen volgens `02_Dashboard/_build/PROCEDURE.md` en op verzoek; log elke wijziging in [[log]].
- Pushen: gecontroleerd werk volgens skill `higrip-vault`, nooit forceren.

## Stand (25-10-2026)
- 289 notities na de herindeling; ~21 'kapotte' links zijn voorbeeldtekst (`[[wikilinks]]`, `[[Naam]]`), padlinks naar de bewuste dubbele namen of in archiefkopieën.
- Nog te groot, bewust niet aangepast: `ACTIEBACKLOG` (beheerd door `02_Dashboard/_tools/acties.py`: alleen zoeken), `Agent Werk & Kwaliteit Overzicht` (53 KB in `08_Operations_Agent/`: lees per sectie), SEO-audit content, compliance-todo, crm-dashboard-voorstel.
- Prototype- en themabestanden staan onder `06_Website_Agent/Homepage-prototype/`: nooit scannen, Obsidian sluit ze uit.
