# HÏ Grip Vault — gedeelde instructies voor Claude

> Dit bestand laadt automatisch bij elke Claude die in deze vault werkt: lokaal (Lars, Tigo, Timo), in Claude Code op het web en in de geplande cloudroutines op info@higrip.nl. Het is de gedeelde basis. Persoonlijke voorkeuren horen in je eigen `~/.claude/CLAUDE.md`, niet hier.

## 1. Waar staat wat

| Wat | Waar |
|---|---|
| **Feiten** (prijzen, handles, URL's, ID's, verzending, claims) | `00_Brand_Core/Feiten & Actuele Staat.md`. **Lees dit eerst.** Zet feiten nooit in een prompt. |
| Productwaarheid 2.0 (maten, EAN, B2B-prijzen) | `00_Brand_Core/Performance Grip Socks 2.0.md` |
| Merk en strategie (verhaal, stem, kleuren, design, kanalen) | **Leidend: Canva-document *MERK & STRATEGIE — HÏ Grip*** (https://canva.link/a48n60z2ay1g7bp). Uitgewerkt in `00_Brand_Core/`; begin bij `Home.md`. |
| Onderzoek (alle routines + losse onderzoeken) | `02_Dashboard/`. De procedure staat in `02_Dashboard/_build/PROCEDURE.md`. |
| Acties (één backlog) | `02_Dashboard/_backlog/ACTIEBACKLOG.md` |
| Geheugen van de routines | `02_Dashboard/_geheugen/`. De regels staan in `_geheugen/README.md`. |
| Research Dashboard | https://claude.ai/artifact/JEmxjrviuoSPGWHvGyJszS (bron: `02_Dashboard/`) |
| Agent-systeem: hoe elke hoofdagent werkt (`Agents <naam>.md`) | `01_Agent_Infrastructuur/` (Denzel: `03_Denzel/`) |
| Vakkennis per agent | `04_Social_Agent/`, `05_Partnership_Agent/`, `06_Website_Agent/`, `07_Design_Agent/`; feedback, leerregels, kwaliteit en compliance: `08_Operations_Agent/` |
| Routine-prompts | `02_Dashboard/Routines/` |

De vault is de bron van waarheid. Spreekt iets anders (een geheugenbestand, een oud document, je eigen kennis) de vault tegen, dan wint de vault. Spreekt de live site de vault tegen, meld dat dan en werk de vault bij.

Rangorde bij tegenspraak:
1. **Merk en strategie:** het Canva-document *MERK & STRATEGIE* wint van de vault (werk de vault bij).
2. **Operationele feiten** (prijzen, voorraad, thema-ID's): de live waarde wint van het feitenbestand (meld het en werk het bestand bij). Besluiten van Team HÏ Grip die nog niet live staan, gelden als de vastgestelde waarde; de live afwijking is dan een actie.
3. **Al het andere:** de vault wint van geheugenbestanden, oude documenten en je eigen kennis. Binnen de vault winnen de Brand Core en het feitenbestand van de overige mappen.

## 2. Identiteit

- **HÏ Grip**, altijd met trema op de Ï (in URL's en handles zonder: `higrip.nl`, `@higrip.nl`).
- Verhaal, missie, waarden, doelgroep en productnamen: [[Brand Identity Overview]], [[Brand Voice & Tone of Voice]], [[Performance Grip Socks 2.0]]. Feiten (prijzen, handles, ID's, claims) alleen in [[Feiten & Actuele Staat]].
- Taal: Nederlands voor alle consumentgerichte tekst, met moderne Engelse woorden; Engels mag voor code-comments.

## 3. Tone of voice

Volledig: [[Brand Voice & Tone of Voice]]. Harde regels voor alle tekst:
- Altijd "jij/je", nooit "u". Direct, energiek, sportief; ondersteunend als expert.
- Performance eerst: noem de meetbare claim vóór het comfort. Alleen claims uit het feitenbestand.
- Geen AI-openers ("Zeker!", "Natuurlijk!") en geen vulwoorden ("geweldig", "fantastisch"). Geen gedachtestreepjes (— of –) of pijltjes in tekst voor buiten.

## 4. Visueel

Volledig: [[Logo & Kleurenpalet]], [[Design Elementen]], [[Iconografie]]. Harde regels:
- Alleen het font Poppins; nooit Franklin Gothic, Impact of serif.
- CTA is een pill met chevron, zwart op wit of wit op zwart; nooit gevuld met een accentkleur.
- Trustpilot-groen alleen voor review-sterren.

## 5. Harde grenzen

- **Nooit naar het live Shopify-thema pushen** zonder expliciete opdracht van wie volgens [[user]] over live zetten beslist. Thema-ID's wisselen: draai altijd eerst `shopify theme list`.
- Nooit prijzen, kortingen, voorraad, bestellingen of checkout-instellingen wijzigen.
- Nooit reviews, klantquotes, cijfers of keurmerken verzinnen. Geen `aggregateRating` zonder echte, zichtbare reviews op de site.
- Geen persoonsgegevens van klanten in notities of rapporten; alleen totalen (AVG).
- Nooit outreach versturen of iets publiceren namens HÏ Grip. Voorstellen mag, versturen doet een mens.

## 6. Onderzoek registreren (verplicht)

Elk onderzoek, zowel een routine-run als een losse vraag, eindigt als notitie in `02_Dashboard/` volgens `02_Dashboard/_build/PROCEDURE.md` (sectie A). Daarna volgen de build, publicatie van het dashboard en een commit met push. Acties schrijf je als `- [ ] P? · tekst`. Backlog-items kopieer je niet naar notities.

## 7. Regels voor routines

1. Lees eerst: dit bestand → `02_Dashboard/Routines/Routine-basisregels.md` (tokens en veiligheid, verplicht) → het feitenbestand (gericht zoeken) → je eigen geheugenbestand in `02_Dashboard/_geheugen/` → de backlog (zoeken op je onderwerp of `acties.py open`, nooit volledig lezen).
2. **Alleen nieuwe punten**, tenzij een oud punt veranderd of verlopen is. Dan werk je het bestaande punt bij in plaats van een nieuw punt te maken.
3. Blijf binnen je rol (zie de rolverdeling in `02_Dashboard/Routines/README.md`). Controleer niet wat een andere routine al controleert.
4. Lukt iets niet (geen toegang, tool faalt)? Stop niet. Noteer het, ga door met wat wel kan en meld het in je notitie.
5. Sluit af met je geheugen bijwerken, een notitie, de build, publicatie van het dashboard en een commit met push. Bij een publish-conflict of een geweigerde push stop je en meld je het. Nooit forceren.
6. Afvinken doet alleen de actiecontrole (met bewijs) of een mens; routines lezen 02_Dashboard/_backlog/CONTROLE.json en stellen geen acties voor die daar gedaan of dubbel zijn.

## 8. Git

- Branch: `HÏ-Grip-Vault-obsidian` (er is geen `main`).
- **Werk nooit op een losse branch.** Cloudsessies en routines starten vaak op een eigen `claude/...`-branch. Dan komt het werk niet in de vault en niet op het dashboard. Push daarom altijd zo:
  ```
  git pull --rebase origin HÏ-Grip-Vault-obsidian
  git push origin HEAD:HÏ-Grip-Vault-obsidian
  ```
  Wordt die push geweigerd, stop dan en meld het in je eindbericht, met de naam van de branch waar je werk nu staat.
- Commitberichten in het Nederlands, kort: `research: <id> geregistreerd`, `feiten: <wat> bijgewerkt`.

## 9. Links (mindmap)

- De vault is een mindmap, geen web: elke notitie heeft precies één navigatieregel `> Map: [[<index van de eigen map>]]` (Brand Core en de indexen: `[[Home]]`). Verder linkt een notitie alleen naar een andere als een agent de informatie daar moet ophalen. Zo lees je niet onnodig veel.
- Startpunt: [[Home]] → map-index → gericht zoeken. Hoe een agent werkt: het bestand `Agents <naam>.md` in `01_Agent_Infrastructuur/`; dat verwijst zelf naar Feiten en Tone of voice.
- Maak je een notitie aan of verplaats je er een, draai dan vóór je commit: `python "01_Agent_Infrastructuur/Beheer/vault_nav.py"`. Het script zet de navigatieregel, werkt de compacte lijst in elke map-index bij en meldt notities zonder inkomende link. Het voegt geen onderzoeksverwijzingen meer toe.
- Bewerk de automatische sectie "Alle notities in deze map" in een index niet met de hand.
