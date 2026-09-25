# Waar staat wat — onderzoek, routines en werkbestanden

> Kaart van alle plekken waar HÏ Grip-onderzoek, routines en werkbestanden leven. De vault is de bron van waarheid; het dashboard toont wat hier staat. Bijgewerkt 2026-09-25.

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
| **Geplande lokale routines** | `C:\Users\Test\.claude\scheduled-tasks\higrip-growth-radar\SKILL.md` en `higrip-seo-regressiecheck\SKILL.md` | bij wijziging van de routine | Claude-app (draait alleen als de app openstaat) |
| **Denzel-weekoverzicht** (cloud-routine, maandag 08:00) | claude.ai routine `trig_01D9XwMiVvuq1FWr7CLoYTmN`; beschrijving in [[Denzel Weekoverzicht — Routine]]; output tot 14-09 in `04_Agent_Infrastructuur\Beheer\Weekoverzicht\`, daarna `05_Research\JJJJ-MM-DD-weekoverzicht.md` | wekelijks | claude.ai → Routines (account info@higrip.nl) |
| **Skills / commands** (`/shopify-seo`, `/research-nieuw`, `/research-sync`, …) | `C:\Users\Test\.claude\commands\*.md` | bij wijziging | typ `/naam` in Claude Code |
| **Claude-geheugen** (werkafspraken, projectcontext) | `C:\Users\Test\.claude\memory\` (`MEMORY.md` = index) | bij nieuwe afspraak | wordt automatisch geladen; `project_higrip.md` = webshopcontext, `project_higrip_seo.md` = audit sep 2026 |
| **Merkregels voor Claude** | `C:\Users\Test\.claude\CLAUDE.md` | bij merkbesluit | wordt automatisch geladen in elke sessie |
| **Plannen** | `C:\Users\Test\.claude\plans\` | per project | bestanden; `research-dashboard.md` = dit systeem |
| **Projectmappen** | `C:\Users\Test\.claude\projects\higrip-padel\`, `higrip-redesign\`, `higrip-skisokken\` | per project | bestanden (Liquid/CSS-werk, geen onderzoek) |
| **Shopify-thema (werkkopie)** | `C:\Users\Test\higrip-theme` (test-thema 194761425223); `higrip-theme-ai2` (thema 200269168967) | bij themawerk | Shopify CLI via Git Bash — nooit naar live 199814873415 zonder opdracht |
| **Website-analyse in de vault** | `03_Website_Agent\Analyse\` ([[Stand van Zaken — Werkdossier 2026-09-04]], [[Analytics & KPI Dashboard]], [[Conversie Optimalisatie Checklist]]) | bij audit | Obsidian |
| **Doorgevoerde themawijzigingen** | [[Update Log]] (`03_Website_Agent\Technisch\`) | bij elke push | Obsidian |
| **Procesleerpunten agents** | [[Feedback & Iteratie Log]] (`04_Agent_Infrastructuur\Beheer\`) | per iteratie | Obsidian |
| **Compliance** | [[Compliance To-Do Lijst]] (`00_Brand_Core\Compliance\`) + notitie `2026-09-07-compliance-todo` | 2026-09-14 | Obsidian / dashboard |
| **Archief (oud werk)** | `C:\Users\Test\.claude\archief\` met `README.md` | 2026-09-17 | bestanden; KNVB-scraper en oude landingsprojecten |
| **KNVB-clubdata (B2B-outreach)** | `C:\Users\Test\.claude\archief\knvb-scraper\` (`knvb_clubs_v7.xlsx` = deliverable) | 2026-06-23 | zie `memory\project_knvb_scraper.md` |
