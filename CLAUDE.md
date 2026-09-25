# HÏ Grip Vault — gedeelde instructies voor Claude

> Dit bestand laadt automatisch bij elke Claude die in deze vault werkt: lokaal (Lars, Tigo, Timo), in Claude Code op het web en in de geplande cloudroutines op info@higrip.nl. Het is de gedeelde basis. Persoonlijke voorkeuren horen in je eigen `~/.claude/CLAUDE.md`, niet hier.

## 1. Waar staat wat

| Wat | Waar |
|---|---|
| **Feiten** (prijzen, handles, URL's, ID's, verzending, claims) | `00_Brand_Core/Feiten & Actuele Staat.md`. **Lees dit eerst.** Zet feiten nooit in een prompt. |
| Productwaarheid 2.0 (maten, EAN, B2B-prijzen) | `00_Brand_Core/Product/Performance Grip Socks 2.0.md` |
| Merk (verhaal, stem, kleuren, design) | `00_Brand_Core/`, begin bij `Brand Identity Overview.md` |
| Onderzoek (alle routines + losse onderzoeken) | `05_Research/`. De procedure staat in `05_Research/_build/PROCEDURE.md`. |
| Acties (één backlog) | `05_Research/_backlog/ACTIEBACKLOG.md` |
| Geheugen van de routines | `05_Research/_geheugen/`. De regels staan in `_geheugen/README.md`. |
| Research Dashboard | https://claude.ai/artifact/KVXyNSCNEbKcj2EQGqkpuV (bron: `05_Research/`) |
| Agent-systeem (Denzel + hoofdagents) | `04_Agent_Infrastructuur/` |
| Routine-prompts | `04_Agent_Infrastructuur/Routines/` |

De vault is de bron van waarheid. Spreekt iets anders (een geheugenbestand, een oud document, je eigen kennis) de vault tegen, dan wint de vault. Spreekt de live site de vault tegen, meld dat dan en werk de vault bij.

## 2. Identiteit

- **HÏ Grip**, altijd met trema op de Ï. Performance-gripsokken; skisokken met gelprotection zijn uitgesteld.
- Markt: Nederlandse consument + B2B (sportclubs, retailers, sportscholen).
- Slogan: "More grip, better performance."
- Taal: Nederlands voor alle consumentgerichte tekst; Engels mag voor code-comments.

## 3. Tone of voice

- Direct en informeel: altijd "jij/je", nooit "u".
- Performance eerst: noem de meetbare claim vóór het comfort. Gebruik alleen claims uit het feitenbestand.
- Sportspecifiek jargon per sport (padel, voetbal, tennis, rugby, pilates).
- Geen AI-openers ("Zeker!", "Natuurlijk!") en geen vulwoorden ("geweldig", "fantastisch").

## 4. Visueel

- Merkkleuren: zwart `#000000`, wit `#FFFFFF`, volt `#CCFF00`, pumpkin `#FF6A00`, royal blue `#0011A7`, rood `#E10600`. Trustpilot-groen `#00b67a` alleen voor review-sterren.
- Neutraal voor achtergronden: `#111111`, `#1a1a1a`, `#EAE8E5`.
- Font: **alleen Poppins**. Koppen UPPERCASE 800–900. Nooit Franklin Gothic, Impact of serif.
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

## 8. Git

- Branch: `HÏ-Grip-Vault-obsidian` (er is geen `main`). Altijd `git pull --rebase` vóór `git push`.
- Commitberichten in het Nederlands, kort: `research: <id> geregistreerd`, `feiten: <wat> bijgewerkt`.
