# Home — HÏ Grip Vault

> **Fundament: [[00 Brand Core]]** — elke notitie verwijst daarnaar terug.
>
> Startpunt van de vault. De vault is de **bron van waarheid voor kennis** (merk, strategie, vakinhoud). De *uitvoerende* laag staat elders — zie "Waar staat wat" onderaan.

---

## De 6 mappen

| Map | Waarvoor | Begin bij |
|---|---|---|
| **00_Brand_Core** | Merkfundament: verhaal, waarden, doelgroep, visuele identiteit, strategie. Alles verwijst hiernaar terug. | **[[00 Brand Core]]** · [[Brand Identity Overview]] |
| **01_Content_Agent** | Kennisbank voor social content: copy, strategie/planning, visuele productie. | [[01 Content Agent — Index]] · [[Content Strategie]] |
| **02_Partnership_Agent** | Kennisbank voor B2B-klanten (Lijn A), samenwerkingen/events (Lijn B) en influencers. | [[02 Partnership Agent — Index]] · [[Partnership Strategie]] |
| **03_Website_Agent** | Kennisbank voor higrip.nl: doel/KPI's, copy, SEO, techniek, conversie. | [[03 Website Agent — Index]] · [[Website Doel & KPI's]] |
| **04_Agent_Infrastructuur** | Het "systeem": wie elke agent is (`Identiteit <Agent>.md`), hoe hij zich gedraagt (`Soul <Agent>.md`), en de gedeelde regels. | [[04 Agent Infrastructuur — Index]] · [[Agent Hiërarchie & Structuurschema]] |
| **05_Research** | Alle onderzoek in één vast formaat: routine-rapporten (Growth Radar, regressiecheck, Denzel-week) én losse onderzoeken, met acties en verbanden. Bron van het Research Dashboard. | [[Waar staat wat]] · dashboard: https://claude.ai/artifact/JEmxjrviuoSPGWHvGyJszS |

---

## Kern-ingangen

**Onderzoek**
- **HÏ Grip Research Dashboard** — https://claude.ai/artifact/JEmxjrviuoSPGWHvGyJszS — alle onderzoeken, routines en open acties; de bron is `05_Research/` ([[Waar staat wat]])

**Merk** — alles begint bij [[00 Brand Core]]
- **Leidend document (sinds 30-9-2026):** Canva *MERK & STRATEGIE — HÏ Grip* — https://canva.link/a48n60z2ay1g7bp. Spreekt de vault dit tegen, dan wint het Canva-document.
- [[Brand Identity Overview]] — oerverhaal, missie, visie, waarden, pitch (enige plek)
- [[Brand Voice & Tone of Voice]] — hoe HÏ Grip praat, core messages, slogans, productnamen
- [[Logo & Kleurenpalet]] · [[Design Elementen]] · [[Iconografie]] · [[Fotografie & Art-Direction]]
- [[Brand Symbolen]] · [[Doelgroep & Persona's]] · [[Strategische Keuzes]] (marketingstrategie, kanalen, Performance Academy) · [[Beachhead Strategie]]

**Product**
- [[Performance Grip Socks 2.0]] — productwaarheid: specs, features, claims, designsysteem B2B (enige plek)

**Compliance**
- [[Compliance To-Do Lijst]] — alle NL/EU-verplichtingen (UPV, GPSR, claims, privacy) met waar en hoe

**Agent-systeem**
- [[CLAUDE]] — gedeelde instructies voor elke Claude in deze vault
- [[04_Agent_Infrastructuur/Routines/README|Routines]] — rolverdeling en prompts van alle routines
- [[Agent Hiërarchie & Structuurschema]] — Denzel + 3 hoofdagents + sub-agents
- [[Agent Bestandsschema (Soul, Identiteit, User)]] — hoe Identiteit <Agent>.md / Soul <Agent>.md / user.md werken
- [[user]] — gedeeld: wie lars en HÏ Grip zijn
- [[Stappenplan — Verdere Bouw]] — wat er nog gebouwd wordt · [[Feedback & Iteratie Log]] · [[Agent Werk & Kwaliteit Overzicht]]
- Agent-profielen — wie (`identiteit`) + gedrag (`soul`):
    - Content Agent: [[Identiteit Content Agent|identiteit]] · [[Soul Content Agent|soul]]
    - Partnership Agent: [[Identiteit Partnership Agent|identiteit]] · [[Soul Partnership Agent|soul]]
    - Website Agent: [[Identiteit Website Agent|identiteit]] · [[Soul Website Agent|soul]]
    - Denzel (Orchestrator): [[Identiteit Denzel|identiteit]] · [[Soul Denzel|soul]]

**Lopend werk**
- [[Pipeline Tracker]] — B2B-outreach status
- [[Influencer Database]] · [[Voorbeelden Gevonden Organisaties (B2B Klanten)]] · [[Voorbeelden Gevonden Organisaties (Events)]]
- [[Update Log]] — doorgevoerde website-wijzigingen
- [[Denzel Weekoverzicht — Routine]] + map `Weekoverzicht/`

---

## Waar staat wat (niet alles zit in de vault)

| Laag | Wat | Waar |
|---|---|---|
| **Kennis / bron van waarheid** | merk, strategie, vakinhoud, agent-definities | deze vault |
| **Uitvoerende skills** | `/shopify-seo`, `/shopify-design`, `/shopify-copy`, `/shopify-cro`, `/video-productie` | repo `github.com/HIGrip/HI-Grip-claude-setup` (`commands/*.md`) |
| **Zoekscript** | `ig_find_creators.py` (2×/week via Task Scheduler) | zelfde repo (`scripts/`) — back-up-kopie in [[Zoek Script & Gids]] |
| **Werkafspraken/correcties voor Claude** | losse feedback- en projectregels | Claude Code memory (`MEMORY.md` + `memory/*.md`) |
| **Wekelijkse routine** | Denzel-weekoverzicht (maandag) | claude.ai cloud-routine — zie [[Denzel Weekoverzicht — Routine]] |
| **Onderzoek (bron van waarheid)** | notities `JJJJ-MM-DD-slug.md`, `Waar staat wat.md`, buildscript + `PROCEDURE.md` | `05_Research/` in deze vault — [[Waar staat wat]] |
| **Research Dashboard** | vitrine + werkplek: open acties (NU AANDACHT), feed, aantekeningen; wijzigingen gaan via `/research-sync` terug naar de vault | https://claude.ai/artifact/JEmxjrviuoSPGWHvGyJszS (claude.ai, org-intern) |
| **Dagelijkse routines** | Growth Radar (dagelijks ~05:30) en SEO-regressiecheck (maandag 07:00) — rapporten + `ACTIEBACKLOG.md` | `C:\Users\Test\.claude\research\growth-radar\` (fase 2: naar de vault); registratie in `05_Research/` |
| **Projecten (code)** | padel-landing, redesign, skisokken | `C:\Users\Test\.claude\projects\higrip-padel\`, `higrip-redesign\`, `higrip-skisokken\` |
| **Archief** | KNVB-scraper, CLAUDE.md-back-ups, oude landingsprojecten — verplaatst 2026-09-17, niets verwijderd | `C:\Users\Test\.claude\archief\` + `README.md` |

> Let op: de vault linkt op een paar plekken naar memory-slugs (bv. `feedback_ig_script_sync`). Dat zijn geen vault-notities — het zijn regels die in Claude Code memory leven. Waar zo'n verwijzing belangrijk is, hoort de inhoud op termijn naar de vault verplaatst te worden.

---

## Opschoonstatus (2026-09-17)

Bijgewerkt bij de bouw van het Research Dashboard (17-09); eerdere ronde 30-08.

**Gedaan 2026-09-17**
- `05_Research/` aangemaakt met 14 notities (migratie van SEO-audit, growth-radar-rapporten, regressiecheck, 4 Denzel-weekoverzichten, werkdossier, compliance-lijst, analytics-meetgat) + [[Waar staat wat]]
- Research Dashboard gepubliceerd en gepind; procedure in `05_Research/_build/PROCEDURE.md`; commands `/research-nieuw` en `/research-sync`; registratiestap in beide lokale routines; Denzel-routine stap 9 → `05_Research/` (prompttekst: [[Denzel Weekoverzicht — Routineprompt stap 9 (2026-09-17)]] — handmatig te plakken)
- Oud werk uit `.claude\` naar `.claude\archief\` (README aanwezig); Claude-memory zonder Franklin Gothic, klantenaantal 3000+, verzenddrempel €35
- [[Content Pillars]] (01_) aangevuld met de Buffer-tagkoppeling uit de 04_-kopie
- Weekoverzichten t/m 2026-09-14 blijven in `04_Agent_Infrastructuur/Beheer/Weekoverzicht/` als archief; nieuwe weken komen in `05_Research/`

**Gedaan 2026-08-30**
- Losse `Naamloos*`-bestanden uit de root verwijderd
- `.gitignore` toegevoegd; `.obsidian/workspace.json` niet meer getrackt
- Kapotte wikilinks opgeruimd (op 3 na, in bestanden met niet-gecommitte wijzigingen)
- Wees-notities aan een inbound-link geholpen
- Lege notities voorzien van een eerlijke "nog te vullen"-status i.p.v. stilzwijgend leeg

**Nog te doen — input van lars nodig**
- **Lege notities invullen of verwijderen:** [[Concurrentieanalyse]], [[Testimonials & Social Proof]], [[Partnership Voorwaarden Template]], [[Product Pagina Gids]], [[Stock Bronnen]], [[Template Overzicht]] — nu placeholders, nog geen echte inhoud
- ~~**Shopify `theme list` draaien**~~ — gedaan 17-9 (Denzel): werkthema `200269168967` (bevestigd door lars), live `200269398343`. Staat in [[Technische Procedures]].
