# Home — HÏ Grip Vault

> Startpunt van de vault. De vault is de **bron van waarheid voor kennis** (merk, strategie, vakinhoud). De *uitvoerende* laag staat elders — zie "Waar staat wat" onderaan.

---

## De 5 mappen

| Map | Waarvoor | Begin bij |
|---|---|---|
| **00_Brand_Core** | Merkfundament: verhaal, waarden, doelgroep, visuele identiteit, strategie. Alles verwijst hiernaar terug. | [[Brand Identity Overview]] |
| **01_Content_Agent** | Kennisbank voor social content: copy, strategie/planning, visuele productie. | [[Content Strategie]] · [[Content Pillars]] |
| **02_Partnership_Agent** | Kennisbank voor B2B-klanten (Lijn A), samenwerkingen/events (Lijn B) en influencers. | [[Overzicht]] · [[Partnership Strategie]] |
| **03_Website_Agent** | Kennisbank voor higrip.nl: doel/KPI's, copy, SEO, techniek, conversie. | [[Website Doel & KPI's]] · [[Technische Procedures]] |
| **04_Agent_Infrastructuur** | Het "systeem": wie elke agent is (`identiteit.md`), hoe hij zich gedraagt (`soul.md`), en de gedeelde regels. | [[Agent Hiërarchie & Structuurschema]] |

---

## Kern-ingangen

**Merk**
- [[Brand Identity Overview]] — verhaal, missie, visie, waarden (enige plek)
- [[Brand Voice & Tone of Voice]] — hoe HÏ Grip praat, slogans
- [[Logo & Kleurenpalet]] · [[Brand Symbolen]] · [[Doelgroep & Persona's]] · [[Strategische Keuzes]]

**Agent-systeem**
- [[Agent Hiërarchie & Structuurschema]] — Denzel + 3 hoofdagents + sub-agents
- [[Agent Bestandsschema (Soul, Identiteit, User)]] — hoe identiteit.md / soul.md / user.md werken
- [[user]] — gedeeld: wie lars en HÏ Grip zijn
- [[Stappenplan — Verdere Bouw]] — wat er nog gebouwd wordt · [[Feedback & Iteratie Log]] · [[Agent Werk & Kwaliteit Overzicht]]
- Agent-profielen — wie (`identiteit`) + gedrag (`soul`):
    - Content Agent: [[04_Agent_Infrastructuur/Content Agent/identiteit|identiteit]] · [[04_Agent_Infrastructuur/Content Agent/soul|soul]]
    - Partnership Agent: [[04_Agent_Infrastructuur/Partnership Agent/identiteit|identiteit]] · [[04_Agent_Infrastructuur/Partnership Agent/soul|soul]]
    - Website Agent: [[04_Agent_Infrastructuur/Website Agent/identiteit|identiteit]] · [[04_Agent_Infrastructuur/Website Agent/soul|soul]]
    - Denzel (Orchestrator): [[identiteit Denzel|identiteit]] · [[soul Denzel|soul]]

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

> Let op: de vault linkt op een paar plekken naar memory-slugs (bv. `feedback_ig_script_sync`). Dat zijn geen vault-notities — het zijn regels die in Claude Code memory leven. Waar zo'n verwijzing belangrijk is, hoort de inhoud op termijn naar de vault verplaatst te worden.

---

## Opschoonstatus (2026-08-30)

Bijgewerkt tijdens een opschoonronde. Zie ook de losse acties hieronder.

**Gedaan**
- Losse `Naamloos*`-bestanden uit de root verwijderd
- `.gitignore` toegevoegd; `.obsidian/workspace.json` niet meer getrackt
- Kapotte wikilinks opgeruimd (op 3 na, in bestanden met niet-gecommitte wijzigingen)
- Wees-notities aan een inbound-link geholpen
- Lege notities voorzien van een eerlijke "nog te vullen"-status i.p.v. stilzwijgend leeg

**Nog te doen — input van lars nodig**
- **Lege notities invullen of verwijderen:** [[Concurrentieanalyse]], [[Testimonials & Social Proof]], [[Partnership Voorwaarden Template]], [[Product Pagina Gids]], [[Stock Bronnen]], [[Template Overzicht]] — nu placeholders, nog geen echte inhoud
- **Shopify `theme list` draaien** — werkthema-ID is bijgewerkt naar `199980286279` in [[Technische Procedures]]; nog te bevestigen: de themanaam en of het live-ID nog `198094127431` is
