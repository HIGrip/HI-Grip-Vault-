---
type: werkplek
gebied: denzel
bijgewerkt: 2026-10-02
---

# Werkplek — Denzel

## Status: herinrichting in uitvoering (sinds 2026-10-02)

Doel: Denzel op hetzelfde niveau brengen als de andere agents, met een eigen kernmap, een volledig handboek en vijf eigen sub-agents. Aanleiding: Lars zag dat Denzel te veel zelf deed en daardoor minder presteerde, omdat zijn werkwijze verspreid stond over vijf notities en niet aan de agents zelf was gekoppeld.

---

## 2026-10-02 — Concept van de kernmap opgezet

**Wat:** map `06_Denzel` aangemaakt met Identiteit, Soul, Werkplek, het handboek (routering, delegeren, kwaliteitscontrole, escalatie, ritmes, vaktheorie) en de vijf sub-agents met elk een Identiteit en Werkplek. De drie QA-agents hebben daarnaast een Toetslijst.

**Waarom:** Denzels bestaande bronnen stonden verspreid: `identiteit Denzel`, `soul Denzel`, [[Opdrachtprotocol]], [[Verbeterlus]], [[Leerregels per Agent]], de weekroutine en het kwaliteitsoverzicht. Er was geen plek die zegt wat hij doet, hoe, en wat hij aan wie overlaat.

**Afbakening:** `04_Agent_Infrastructuur` blijft de structuur en spelregels voor het hele systeem. Niets is gekopieerd: waar de spelregel in 04 staat, verwijst het handboek ernaar.

---

## Openstaande punten

| # | Punt | Wie |
|---|---|---|
| 1 | Alles in deze map is concept. **Autonomie en grenzen van de vijf nieuwe sub-agents moet Lars goedkeuren**, net als de rijen met "(voorstel)" in [[Soul Denzel]]. | Lars |
| 2 | **Verhuizen:** `identiteit Denzel.md` en `soul Denzel.md` uit `04_Agent_Infrastructuur` vervallen zodra deze versies zijn goedgekeurd. Pas daarna verplaatsen, en pas ná de lopende vault-merge. Tot die tijd bestaan er twee versies; **deze map wint**. | Denzel / Lars |
| 3 | **Eén actiesysteem.** Er is al één actiebacklog (`05_Research/_backlog/ACTIEBACKLOG.md`) met de actiecontrole als enige die afvinkt. Het postvak is geen tweede backlog: het is alleen het overdrachtskanaal voor opdrachten die Denzel aan een hoofdagent geeft. Vooruitblik-acties komen eerst in de backlog. Controleren of dit zo werkt in de praktijk. | Denzel |
| 4 | **Kwaliteitslog splitsen.** [[Agent Werk & Kwaliteit Overzicht]] is één lange tabel. Verdelen over [[Kwaliteitslog Overzicht]] en een log per hoofdagent, met behoud van de historie. Dit is een verhuizing van bestaande rijen, dus pas na de merge. | Stafchef |
| 5 | `vault_nav.py` kent map 06 nog niet. Toevoegen, zodat de index, de navigatieregel en de losse-notitie-controle ook hier werken. Daarna `CLAUDE.md` (sectie 1 en 9) en `Home.md` aanvullen. | Denzel |
| 6 | Dunne agentbestanden voor de vijf sub-agents in `agents/` (alleen frontmatter plus de opdracht om hun identiteit uit deze map te lezen), daarna de setup-repo bijwerken, committen en pushen. | Denzel |
| 7 | Verwijzingen naar de oude paden van Denzels bestanden aanpassen in `commands/denzel.md`, de routineprompts en de Hermes-skill `higrip-denzel`. Het command loopt bovendien al achter (verkeerde routinetijd en -id, "7 checks"), zie [[Huidig gebruik van Denzel]], sectie 5. | Denzel |
| 7b | De Hermes-skill `higrip-denzel` lezen en vergelijken met het opdrachtprotocol en met dit handboek. Nu onbekend wat erin staat. | Denzel |
| 8 | Eén bewuste keuze nog open: **welke regelgeving telt voor de Vooruitblik-agent** (alleen Nederland en EU voor webshops, of ook sportspecifieke regels), en de frequentie van scan en overzicht. | Lars |
| 9 | Het model voor interactief gebruik van Denzel en van de nieuwe sub-agents is nog niet bevestigd. | Lars |

---

## Bewust niet gebouwd

- Geen aparte agent voor het weekoverzicht: de Stafchef stelt het samen, Denzel doet de eindredactie. Pas splitsen als dat in de praktijk te veel blijkt.
- Geen vierde QA-agent per toetsregel (merk, feiten, grenzen). Eén QA per domein weet meer van zijn vak dan een toetser per regel.

---

## Gerelateerde bestanden

- [[Identiteit Denzel]]
- [[Soul Denzel]]
- [[Opdrachtprotocol]]
- [[Verbeterlus]]

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[06 Denzel — Index]] · [[Home]]
