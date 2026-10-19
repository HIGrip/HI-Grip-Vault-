---
type: schema
bijgewerkt: 2026-10-19
status: concept — ter goedkeuring door Lars
---

# Wiki Schema — HÏ Grip Vault (SCHEMA)

> Spelregels voor agents en mensen die in deze vault werken (LLM-wiki-patroon). Het startpunt/de index is [[Home]]. Wijzigingen hier: eerst voorstellen aan Lars.

## Drie lagen

| Laag | Wat | Wie mag wijzigen |
|---|---|---|
| **1 Bron** | Wat van buiten komt: exports, rapporten, pdf's, audit-ruwdata (`05_Research/*/raw`, bijlagen, `.xlsx`, afbeeldingen) | Alleen toevoegen, nooit aanpassen |
| **2 Wiki** | Kennis en systeem: `00` t/m `06`, onderzoek in `05_Research` | Agents, via de procedure en de rechten in hun Identiteit |
| **3 Schema** | Dit bestand + `CLAUDE.md` | Alleen Lars |

## Waar staat wat

| Vraag | Map |
|---|---|
| Wat is waar (prijzen, handles, claims)? | `00_Brand_Core/Feiten & Actuele Staat.md` |
| Hoe praat/ziet HÏ Grip eruit? | `00_Brand_Core/` |
| Vakkennis content / partnerships / website | `01_` / `02_` / `03_` |
| Wie is welke agent, wat mag hij? | `04_Agent_Infrastructuur/` (hoofdagents, sub-agents, spelregels) en `06_Denzel/` (Denzel + eigen team) |
| Onderzoek, routine-rapporten, acties | `05_Research/` (backlog: `_backlog/ACTIEBACKLOG.md`) |
| Wat is er gedaan en wanneer? | [[log]] (nieuw) en de git-historie |

Regel: één plek per feit. Staat iets op twee plekken, dan is één van de twee een verwijzing.

## Conventies
- Bestandsnamen: bestaande stijl aanhouden (`Identiteit <Agent>.md`, `Werkplek <Agent>.md`, `YYYY-MM-DD-onderwerp.md` in `05_Research`). Een naam is uniek in de hele vault. Uitzondering (bewust): 7 paren routine-prompt (`04_Agent_Infrastructuur/Routines/`) en routine-geheugen (`05_Research/_geheugen/`) heten hetzelfde (README, Actiecontrole, Klantstem, Productradar, SEO-regressiecheck, Uitvoerder, Website-UX). Link die altijd met pad (`[[05_Research/_geheugen/klantstem|…]]`) en hernoem ze niet: de cloudroutines lezen die paden.
- Frontmatter: `type`, `gebied`, `bijgewerkt`, `status`. Datums `YYYY-MM-DD`.
- Elke notitie: navigatieregel `> **Brand Core (00):** …`, minstens 2 uitgaande `[[links]]`.
- Index-secties in mapindexen worden door `vault_nav.py` bijgewerkt, niet met de hand.
- Sprekende titel + eerste alinea als samenvatting van max. 3 regels, zodat een agent na lezen daarvan kan stoppen.
- **Maximaal ~15 KB per notitie.** Groter: splits in onderwerpen, of zet het archief naast de actuele versie. Groeiende logs: actueel (laatste 2 weken) + `_archief/`.
- Tegenspraak: nieuwere bron wint, noteer beide met datum en markeer `contested: true`. Rangorde: zie `CLAUDE.md` §1.
- Geen persoonsgegevens van klanten, geen wachtwoorden, tokens of privédocumenten in de vault.

## Agent-regels
- Oriënteren: `Home` → map-index → gericht zoeken (`search_files`), nooit een hele map lezen.
- Schrijven alleen volgens `05_Research/_build/PROCEDURE.md` en op verzoek; log elke wijziging in [[log]].
- Pushen/committen: alleen op opdracht van Lars (zie skill `higrip-vault`).

## Stand na lint (19-10-2026)
- 320 notities. Van de 25 'kapotte' links zijn er 0 echt stuk: ze zijn padlinks naar de 7 bewuste dubbele namen, of voorbeeldtekst (`[[wikilinks]]`, `[[Naam]]`) in uitleg.
- **Gesplitst:** `Zoek Script & Gids` van 113 KB naar 12 KB; de 100 KB broncode-back-up staat apart in `Zoek Script — broncode (back-up)`.
- **Nog te groot, bewust niet aangepast:** `ACTIEBACKLOG` (47 KB, wordt door `05_Research/_tools/acties.py` beheerd: alleen zoeken, niet volledig lezen; afgerond staat al in `AFGEROND.md`), `Agent Werk & Kwaliteit Overzicht` (53 KB; de geplande verhuizing naar `06_Denzel/Kwaliteitslog/` is nog niet gedaan, tot die tijd is dit het actuele log, lees per sectie), SEO-audit content (38 KB), compliance-todo (38 KB), crm-dashboard-voorstel (34 KB).
