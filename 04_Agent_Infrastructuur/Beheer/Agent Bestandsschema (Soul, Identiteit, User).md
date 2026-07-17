# Agent Bestandsschema — Soul, Identiteit, User

> Bestandsnaam ongewijzigd gehouden (veel bestanden linken hierheen), maar het model is op 2026-07-17 herzien: **user.md is niet langer per agent gedupliceerd, maar één gedeeld bestand** in `04_Agent_Infrastructuur/Beheer/user.md`. Elke agent — Denzel én de 3 hoofdagents — heeft dus zelf alleen nog `identiteit.md` en `soul.md`. Voor de laagstructuur eromheen (Denzel boven, sub-agents onder de hoofdagents, per categorie gegroepeerd): zie [[Agent Hiërarchie & Structuurschema]].

---

## Waarom deze opzet

- **identiteit.md — Wie is de agent** → rol, missie, scope, verhouding tot de andere agents, (bij hoofdagents) de sub-agents-catalogus per categorie.
- **soul.md — Hoe gedraagt de agent zich** → autonomie-niveaus, harde grenzen, werkwijze, delegatie naar sub-agents, communicatiestijl.
- **user.md (gedeeld) — Wie zijn wij** → HÏ Grip (het merk) en lars (opdrachtgever), identiek relevant voor elke agent, dus niet meer gedupliceerd.

**Waarom user.md gedeeld werd:** de 4 losse versies waren voor het overgrote deel identieke tekst (merkverhaal, lars, tone of voice) met maar een klein per-agent verschil (welke doelgroep het meest relevant is). Dat laatste hoort al thuis in de "Scope"-sectie van het eigen `identiteit.md`, dus een apart user.md per agent voegde weinig toe en moest steeds dubbel bijgewerkt worden.

**Let op (Obsidian):** `identiteit.md` en `soul.md` bestaan nog steeds meerdere keren (één per agent) — een kale `[[soul]]`-wikilink is dus nog steeds ambigu, gebruik platte tekst ("soul.md in deze map") of het volledige pad. `[[user]]` is nu wél veilig, want dat bestand bestaat nog maar op één plek.

---

## Template: identiteit.md

```markdown
# Identiteit — [Agent naam]

## Rol
[1-2 zinnen: wat doet deze agent]

## Missie
[Waarom bestaat deze agent — welk resultaat moet hij opleveren]

## Scope — wat valt hieronder
- ...

## Scope — wat valt hier NIET onder
- ...

## Verhouding tot andere agents
- Content Agent: ...
- Partnership Agent: ...
- Website Agent: ...
- Orchestrator Agent (Denzel): ...

## Sub-agents
[Alleen voor de 3 hoofdagents — catalogus-items per categorie, zie [[Agent Hiërarchie & Structuurschema]]]

## Kernbronnen in de vault
- [[...]]
```

## Template: soul.md

```markdown
# Soul — [Agent naam]

## Autonomie per taak
| Taak | Niveau (Zelf doen / Voorstellen, ik keur goed / Altijd overleg vooraf) |
|---|---|
| ... | ... |

## Delegatie naar sub-agents
[Alleen voor de 3 hoofdagents — "als... → dan sub-agent X"-tabel]

## Harde grenzen — nooit zonder overleg
- ...

## Werkwijze
- ...

## Communicatiestijl naar lars
- ...

## Feedback & leren
- Zie [[Feedback & Iteratie Log]]
```

## user.md (gedeeld, niet per agent)

Ligt op `04_Agent_Infrastructuur/Beheer/user.md`. Bevat: Lars, HÏ Grip in het kort, tone of voice, doelgroep, de agent-structuur, en werkafspraken die voor iedere agent gelden. Alle agents linken hiernaar toe in plaats van een eigen kopie te hebben.

---

## Status per agent

| Agent | identiteit.md | soul.md | user.md |
|---|---|---|---|
| Denzel (Orchestrator) | Ingevuld, naam vastgesteld | Concept-versie, autonomie nog te bevestigen | Gedeeld — zie Beheer |
| Website Agent | Ingevuld incl. 4 sub-agents (gecategoriseerd) | Grotendeels ingevuld — overgenomen uit [[Agent Takenverdeling & Grenzen]] en [[Goedkeuringsworkflow]] | Gedeeld — zie Beheer |
| Content Agent | Ingevuld incl. 3 sub-agents (gecategoriseerd) | Autonomie-tabel nog leeg — grenzen-formulier nog niet doorlopen | Gedeeld — zie Beheer |
| Partnership Agent | Ingevuld incl. 3 sub-agents (gecategoriseerd) | Autonomie-tabel nog leeg — grenzen-formulier nog niet doorlopen; technische guardrails (IG-zoekscript) wel al bekend | Gedeeld — zie Beheer |

## Openstaand

- Voor **Denzel**, **Content Agent** en **Partnership Agent** moet nog hetzelfde gesprek gevoerd worden als voor de Website Agent (14 juli 2026, interactief grenzen-formulier) om de autonomie-tabel in `soul.md` te vullen.
- [[API & Tool Connections]] is ingevuld met de eerste cross-agent tool-regel (Chrome-kill) — verder aanvullen zodra er meer van dit soort regels ontstaan.
- Alle 10 sub-agents staan nog op status "idee" — zie [[Agent Hiërarchie & Structuurschema]] voor het overzicht en de onderbouwing per keuze.

---

## Gerelateerde bestanden

- [[Agent Hiërarchie & Structuurschema]]
- [[Agent Takenverdeling & Grenzen]]
- [[Goedkeuringsworkflow]]
- [[Brand Identity Overview]]
- [[Feedback & Iteratie Log]]
