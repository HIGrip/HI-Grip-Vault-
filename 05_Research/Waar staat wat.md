# Waar staat wat — onderzoek, routines en werkbestanden

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[Home]]

> Kaart van alle plekken waar HÏ Grip-onderzoek, routines en werkbestanden leven. De vault is de bron van waarheid; het dashboard toont wat hier staat. Bijgewerkt 2026-10-02.

| Wat | Waar | Bijgewerkt | Hoe kom je erbij |
|---|---|---|---|
| **Onderzoeksnotities** (één bestand per onderzoek, vast formaat) | `05_Research\` in de vault | bij elk onderzoek (routine of los) | Obsidian, of het dashboard (feed + detailpaneel) |
| **Dashboard** | HÏ Grip Research Dashboard (artifact, gepind in de sidebar) | na elke build/publish | link in [[Home]] en `CLAUDE.md` §15; bewerken alleen met interact-rechten |
| **Register + buildscript** | `05_Research\_build\` (`build_register.py`, `register.js`, `PROCEDURE.md`) | bij elke build | `python 05_Research\_build\build_register.py` |
| **Dashboard-bron (HTML)** | `05_Research\_dashboard\index.html` | bij elke wijziging aan de pagina | publish volgens `PROCEDURE.md` |
| **Actiebacklog** (één backlog voor alle routines, P1/P2/P3) | `05_Research\_backlog\ACTIEBACKLOG.md` + `AFGEROND.md` (sinds 25-09 in de vault) | door de routines | Obsidian, of de pagina Acties in het dashboard |
| **Geheugen van de routines** (anti-herhaling) | `05_Research\_geheugen\<routine>.md`; de regel staat in `_geheugen\README.md` | aan het eind van elke run | Obsidian |
| **Feiten** (prijzen, handles, URL's, ID's, claims) | [[Feiten & Actuele Staat]] (`00_Brand_Core\`) | bij elke wijziging of live afwijking | Obsidian; routines lezen dit als eerste |
| **Gedeelde Claude-instructies** | `CLAUDE.md` in de hoofdmap van de vault | bij merk- of werkafspraak | laadt automatisch bij elke Claude die in de vault werkt |
| **Routine-prompts + rolverdeling** | `04_Agent_Infrastructuur\Routines\` (`README.md` = rolverdeling en status) | bij wijziging van een routine | Obsidian; de routines op info@ verwijzen hiernaar |
| **Growth-radar-dagrapporten (archief)** | `C:\Users\Test\.claude\research\growth-radar\rapporten\` (tot 25-09) | — | nieuwe rapporten staan alleen als notitie in `05_Research\` |
| **Geplande lokale routines** | `C:\Users\Test\.claude\scheduled-tasks\` | — | **staan sinds 25-09 uit**; alle routines draaien als cloudroutine op info@ (status en tijden: `04_Agent_Infrastructuur\Routines\README.md`) |
| **Denzel-weekoverzicht** (cloud-routine, maandag; tijd in de Routines-README) | claude.ai routine `trig_01D9XwMiVvuq1FWr7CLoYTmN`; beschrijving in [[Denzel Weekoverzicht — Routine]]; output tot 14-09 in `04_Agent_Infrastructuur\Beheer\Weekoverzicht\`, daarna `05_Research\JJJJ-MM-DD-weekoverzicht.md` | wekelijks | claude.ai → Routines (account info@higrip.nl) |
| **Skills / commands** (`/shopify-seo`, `/research-nieuw`, `/research-sync`, …) | `C:\Users\Test\.claude\commands\*.md` | bij wijziging | typ `/naam` in Claude Code |
| **Claude-geheugen** (werkafspraken, projectcontext) | `C:\Users\Test\.claude\memory\` (`MEMORY.md` = index) | bij nieuwe afspraak | wordt automatisch geladen; `project_higrip.md` = webshopcontext, `project_higrip_seo.md` = audit sep 2026 |
| **Merkregels voor Claude** | `C:\Users\Test\.claude\CLAUDE.md` | bij merkbesluit | wordt automatisch geladen in elke sessie |
| **Plannen** | `C:\Users\Test\.claude\plans\` | per project | bestanden; `research-dashboard.md` = dit systeem |
| **Projectmappen** | `C:\Users\Test\.claude\projects\higrip-padel\`, `higrip-redesign\`, `higrip-skisokken\` | per project | bestanden (Liquid/CSS-werk, geen onderzoek) |
| **Shopify-thema (werkkopie)** | thema-ID's en lokale werkmappen staan alleen in [[Technische Procedures]] | bij themawerk | Shopify CLI — eerst `shopify theme list`, nooit naar live zonder opdracht van Lars |
| **Website-analyse in de vault** | `03_Website_Agent\Analyse\` ([[Stand van Zaken — Werkdossier 2026-09-04]], [[Analytics & KPI Dashboard]], [[Conversie Optimalisatie Checklist]]) | bij audit | Obsidian |
| **Doorgevoerde themawijzigingen** | [[Update Log]] (`03_Website_Agent\Technisch\`) | bij elke push | Obsidian |
| **Procesleerpunten agents** | [[Feedback & Iteratie Log]] (`04_Agent_Infrastructuur\Beheer\`) | per iteratie | Obsidian |
| **Compliance** | [[Compliance To-Do Lijst]] (`00_Brand_Core\Compliance\`) + notitie `2026-09-07-compliance-todo` | 2026-09-14 | Obsidian / dashboard |
| **Archief (oud werk)** | `C:\Users\Test\.claude\archief\` met `README.md` | 2026-09-17 | bestanden; KNVB-scraper en oude landingsprojecten |
| **KNVB-clubdata (B2B-outreach)** | `C:\Users\Test\.claude\archief\knvb-scraper\` (`knvb_clubs_v7.xlsx` = deliverable) | 2026-06-23 | zie `memory\project_knvb_scraper.md` |

## Alle notities in deze map (automatisch)

Bijgewerkt door `04_Agent_Infrastructuur/Beheer/vault_nav.py`. Niet met de hand bewerken; draai het script opnieuw.

### Hoofdmap
- [[2026-10-04-dashboard-herindeling-ai-mail-koppelingen]]
- [[2026-10-04-dashboard-bruikbaarheidsaudit]]
- [[2026-10-03-growth-radar-social-content]]
- [[2026-10-03-dashboard-agenda-mail-ads-leveranciers]]
- [[2026-10-02-vault-review]]
- [[2026-10-02-obsidian-structuur-ai-agents]]
- [[2026-10-02-navigatie-en-takentijdlijn]]
- [[2026-10-02-growth-radar-social]]
- [[2026-10-02-dashboard-ontwerpregels-kpi]]
- [[2026-10-02-dashboard-apps-patronen]]
- [[2026-10-02-ai-in-het-dashboard]]
- [[2026-10-01-growth-radar-cro]]
- [[2026-09-30-search-console]]
- [[2026-09-30-growth-radar-ai-search]]
- [[2026-09-29-growth-radar-seo-content]]
- [[2026-09-29-crm-dashboard-voorstel]]
- [[2026-09-28-weekoverzicht]]
- [[2026-09-28-seo-conversietest-run-2]]
- [[2026-09-28-regressiecheck]]
- [[2026-09-28-optimalisatiecheck-werkwijze-routines-en-dashboard]]
- [[2026-09-28-growth-radar-seo-technisch]]
- [[2026-09-26-onderzoek-nieuwe-routines]]
- [[2026-09-26-dashboard-ux-onderzoek]]
- [[2026-09-25-seo-audit]]
- [[2026-09-25-search-console]]
- [[2026-09-25-growth-radar-social]]
- [[2026-09-25-evaluatie-routines]]
- [[2026-09-24-upfront-bestelvolume-schatting]]
- [[2026-09-24-growth-radar-cro]]
- [[2026-09-24-financieel-plan-2027-2031-bmc-2031]]
- [[2026-09-23-seo-conversietest-run-1]]
- [[2026-09-23-growth-radar-ai-search]]
- [[2026-09-22-growth-radar-seo-content]]
- [[2026-09-21-weekoverzicht]]
- [[2026-09-21-regressiecheck]]
- [[2026-09-21-growth-radar-seo-technisch]]
- [[2026-09-21-beachhead-rugby]]
- [[2026-09-18-growth-radar-social]]
- [[2026-09-17-growth-radar-cro]]
- [[2026-09-16-seo-onderzoek-cloud-routine-website]]
- [[2026-09-16-growth-radar-ai-search]]
- [[2026-09-15-seo-audit]]
- [[2026-09-15-regressiecheck]]
- [[2026-09-15-growth-radar-seo-content]]
- [[2026-09-15-growth-radar-basislijn]]
- [[2026-09-14-weekoverzicht]]
- [[2026-09-07-weekoverzicht]]
- [[2026-09-07-compliance-todo]]
- [[2026-09-04-werkdossier-stand-van-zaken]]
- [[2026-09-03-analytics-kpi-meetgat]]
- [[2026-08-31-weekoverzicht]]
- [[2026-08-24-weekoverzicht]]

### _backlog
- [[ACTIEBACKLOG]]
- [[AFGEROND]]

### _build
- [[PROCEDURE]]

### _geheugen
- [[05_Research/_geheugen/README|_geheugen/README]]
- [[05_Research/_geheugen/actiecontrole|_geheugen/actiecontrole]]
- [[backlinks-merchant]]
- [[concurrentie]]
- [[denzel-week]]
- [[growth-radar]]
- [[05_Research/_geheugen/klantstem|_geheugen/klantstem]]
- [[materialen]]
- [[05_Research/_geheugen/productradar|_geheugen/productradar]]
- [[search-console]]
- [[seo-conversietest]]
- [[05_Research/_geheugen/seo-regressiecheck|_geheugen/seo-regressiecheck]]
- [[strategie-maand]]
- [[05_Research/_geheugen/uitvoerder|_geheugen/uitvoerder]]
- [[verbanden]]
- [[05_Research/_geheugen/website-ux|_geheugen/website-ux]]
