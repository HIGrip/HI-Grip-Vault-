# HÏ Grip Vault — gedeelde instructies voor Claude

> Dit bestand laadt automatisch bij elke Claude die in deze vault werkt: lokaal (Lars, Tigo, Timo), in Claude Code op het web en in de geplande cloudroutines op info@higrip.nl. Het is de gedeelde basis. Persoonlijke voorkeuren horen in je eigen `~/.claude/CLAUDE.md`, niet hier.

## 1. Waar staat wat

| Wat | Waar |
|---|---|
| **Feiten** (prijzen, handles, URL's, ID's, verzending, claims) | `00_Brand_Core/Feiten & Actuele Staat.md`. **Lees dit eerst.** Zet feiten nooit in een prompt. |
| Productwaarheid 2.0 (maten, EAN, B2B-prijzen) | `00_Brand_Core/Product/Performance Grip Socks 2.0.md` |
| Merk en strategie (verhaal, stem, kleuren, design, kanalen) | **Leidend: Canva-document *MERK & STRATEGIE — HÏ Grip*** (https://canva.link/a48n60z2ay1g7bp). Uitgewerkt in `00_Brand_Core/`, begin bij `00 Brand Core.md`. |
| Onderzoek (alle routines + losse onderzoeken) | `05_Research/`. De procedure staat in `05_Research/_build/PROCEDURE.md`. |
| Acties (één backlog) | `05_Research/_backlog/ACTIEBACKLOG.md` |
| Geheugen van de routines | `05_Research/_geheugen/`. De regels staan in `_geheugen/README.md`. |
| Research Dashboard | https://claude.ai/artifact/JEmxjrviuoSPGWHvGyJszS (bron: `05_Research/`) |
| Agent-systeem (Denzel + hoofdagents) | `04_Agent_Infrastructuur/` |
| Routine-prompts | `04_Agent_Infrastructuur/Routines/` |

De vault is de bron van waarheid. Spreekt iets anders (een geheugenbestand, een oud document, je eigen kennis) de vault tegen, dan wint de vault. Spreekt de live site de vault tegen, meld dat dan en werk de vault bij.

## 2. Identiteit

- **HÏ Grip**, altijd met trema op de Ï (in URL's en handles zonder: `higrip.nl`, `@higrip.nl`). Een Nederlands performance sportswear merk, te beginnen met de Performance Grip Socks; Performance Tubes en Performance Ski Socks (ALPINE PRO) komen binnenkort, zonder datum.
- Missie: "Wij versnellen de beweging van iedere sporter." Kernwaarden: comfort, vertrouwen, innovatie.
- Doelgroep: de prestatiegerichte sporter; kernsporten tennis/padel, voetbal, rugby. B2B (HÏ Grip Zakelijk): retail en sportclubs.
- Primaire tagline: "Ga door waar anderen stoppen." Vaste slogans o.a. "More grip, better performance."
- Productnamen: in communicatie PERFORMANCE GRIP SOCKS (2.0); op higrip.nl PERFORMANCE GRIPSOKKEN (2.0).
- Taal: Nederlands voor alle consumentgerichte tekst, met moderne Engelse woorden (performance, winning, on fire, play); Engels mag voor code-comments.

## 3. Tone of voice

- Direct en informeel: altijd "jij/je", nooit "u".
- Energiek, sportief, modern en jong; ondersteunend als expert ("Wij leggen de basis, jij presteert.").
- Performance eerst: noem de meetbare claim vóór het comfort. Gebruik alleen claims uit het feitenbestand.
- Sportspecifiek jargon per sport (padel, voetbal, tennis, rugby, pilates).
- Geen AI-openers ("Zeker!", "Natuurlijk!") en geen vulwoorden ("geweldig", "fantastisch").

## 4. Visueel

- Merkkleuren: primair zwart `#000000` en wit `#FFFFFF`; tekstgrijzen graphite `#5C5D5F` (op wit) en titanium `#909194` (op zwart); accenten volt `#CCFF00`, royal blue `#0011A7`, pumpkin `#FF6A00`, tangerine `#E10600`. Trustpilot-groen `#00b67a` alleen voor review-sterren.
- Font: **alleen Poppins**. H1 Black Italic 900, H2 ExtraBold 800, H3 Bold 700, caption/label SemiBold 600: altijd in HOOFDLETTERS. Koppen tracking −0,04 em, body Regular 400 met −0,02 em. Nooit Franklin Gothic, Impact of serif.
- CTA: een pill met chevron, zwart op wit of wit op zwart. Nooit gevuld met een accentkleur.

## 5. Harde grenzen

- **Nooit naar het live Shopify-thema pushen** zonder expliciete opdracht van Lars. Thema-ID's wisselen: draai altijd eerst `shopify theme list`.
- Nooit prijzen, kortingen, voorraad, bestellingen of checkout-instellingen wijzigen.
- Nooit reviews, klantquotes, cijfers of keurmerken verzinnen. Geen `aggregateRating` zonder echte, zichtbare reviews op de site.
- Geen persoonsgegevens van klanten in notities of rapporten; alleen totalen (AVG).
- Nooit outreach versturen of iets publiceren namens HÏ Grip. Voorstellen mag, versturen doet een mens.

## 6. Onderzoek registreren (verplicht)

Elk onderzoek, zowel een routine-run als een losse vraag, eindigt als notitie in `05_Research/` volgens `05_Research/_build/PROCEDURE.md` (sectie A). Daarna volgen de build, publicatie van het dashboard en een commit met push. Acties schrijf je als `- [ ] P? · tekst`. Backlog-items kopieer je niet naar notities.

## 7. Regels voor routines

1. Lees eerst: dit bestand → het feitenbestand → je eigen geheugenbestand in `05_Research/_geheugen/` → de backlog.
2. **Alleen nieuwe punten**, tenzij een oud punt veranderd of verlopen is. Dan werk je het bestaande punt bij in plaats van een nieuw punt te maken.
3. Blijf binnen je rol (zie de rolverdeling in `04_Agent_Infrastructuur/Routines/README.md`). Controleer niet wat een andere routine al controleert.
4. Lukt iets niet (geen toegang, tool faalt)? Stop niet. Noteer het, ga door met wat wel kan en meld het in je notitie.
5. Sluit af met je geheugen bijwerken, een notitie, de build, publicatie van het dashboard en een commit met push. Bij een publish-conflict of een geweigerde push stop je en meld je het. Nooit forceren.
6. Afvinken doet alleen de actiecontrole (met bewijs) of een mens; routines lezen 05_Research/_backlog/CONTROLE.json en stellen geen acties voor die daar gedaan of dubbel zijn.

## 8. Git

- Branch: `HÏ-Grip-Vault-obsidian` (er is geen `main`).
- **Werk nooit op een losse branch.** Cloudsessies en routines starten vaak op een eigen `claude/...`-branch. Dan komt het werk niet in de vault en niet op het dashboard. Push daarom altijd zo:
  ```
  git pull --rebase origin HÏ-Grip-Vault-obsidian
  git push origin HEAD:HÏ-Grip-Vault-obsidian
  ```
  Wordt die push geweigerd, stop dan en meld het in je eindbericht, met de naam van de branch waar je werk nu staat.
- Commitberichten in het Nederlands, kort: `research: <id> geregistreerd`, `feiten: <wat> bijgewerkt`.

## 9. Links en Brand Core (verplicht)

- De Brand Core is het fundament: `00_Brand_Core/00 Brand Core.md` is het hoofdbestand. Elke notitie verwijst ernaar via één navigatieregel die begint met `> **Brand Core (00):**` en linkt naar de Brand Core, de kernbestanden en de index van de eigen map.
- Geen losse notities. Maak je een notitie aan of verplaats je er een, draai dan vóór je commit: `python "04_Agent_Infrastructuur/Beheer/vault_nav.py"`. Het script zet de navigatieregel, werkt de map-indexen bij (`01 … — Index`, `02 … — Index`, `03 … — Index`, `04 … — Index`, en voor 05 `Waar staat wat`) en meldt welke notities nog zonder inkomende link zijn.
- Bewerk de sectie `## Alle notities in deze map (automatisch)` in een index niet met de hand.

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[Home]]
