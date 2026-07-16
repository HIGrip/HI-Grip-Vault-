# Agent Bestandsschema — Soul, Identiteit, User

> Legt vast hoe de 3 kernbestanden per agent (`soul.md`, `identiteit.md`, `user.md`) zijn opgebouwd en wat erin hoort. Elke agent — Content, Partnership, Website — heeft deze 3 bestanden in zijn eigen map (01/02/03). Dit is het invulschema/template; de daadwerkelijke ingevulde bestanden staan al in die mappen.

---

## Waarom 3 losse bestanden

- **identiteit.md — Wie is de agent** → rol, missie, scope, verhouding tot de andere agents.
- **soul.md — Hoe gedraagt de agent zich** → autonomie-niveaus, harde grenzen, werkwijze, communicatiestijl.
- **user.md — Wie zijn wij** → HÏ Grip (het merk) en lars (opdrachtgever), zodat de agent weet voor wie en namens wie hij werkt.

Door dit te splitsen kan elk deel apart worden bijgewerkt zonder de rest opnieuw te hoeven doorlopen. Verandert de tone-of-voice van het merk? Dan werk je alleen `user.md` bij, niet de autonomie-afspraken in `soul.md`.

**Let op (Obsidian):** omdat alle drie de agents een bestand met dezelfde naam hebben (drie keer `soul.md`, drie keer `identiteit.md`, drie keer `user.md`), werkt een kale `[[soul]]`-wikilink niet betrouwbaar — Obsidian weet dan niet welke van de drie je bedoelt. Verwijs binnen een agent-map gewoon in platte tekst naar "soul.md in deze map", en gebruik voor links van buitenaf het volledige pad, bv. `[[02_Partnership_Agent/soul]]`.

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

## Harde grenzen — nooit zonder overleg
- ...

## Werkwijze
- ...

## Communicatiestijl naar lars
- ...

## Feedback & leren
- Zie [[Feedback & Iteratie Log]]
```

## Template: user.md

```markdown
# User — wie wij zijn (voor [Agent naam])

## Lars
[Rol van lars, wat hij zelf doet vs. wat de agent doet]

## HÏ Grip in het kort
[3-5 zinnen samenvatting — volledige versie: [[Brand Identity Overview]]]

## Tone of voice richting klanten
[Samenvatting — volledige versie: [[Brand Voice & Tone of Voice]]]

## Doelgroep relevant voor deze agent
[Samenvatting — volledige versie: [[Doelgroep & Persona's]]]

## Werkafspraken die altijd gelden
- ...
```

---

## Status per agent

| Agent | identiteit.md | soul.md | user.md |
|---|---|---|---|
| Website Agent | Ingevuld | Grotendeels ingevuld — overgenomen uit [[Agent Takenverdeling & Grenzen]] en [[Goedkeuringsworkflow]] | Ingevuld |
| Content Agent | Basis ingevuld | Autonomie-tabel nog leeg — grenzen-formulier nog niet doorlopen | Ingevuld |
| Partnership Agent | Basis ingevuld | Autonomie-tabel nog leeg — grenzen-formulier nog niet doorlopen; technische guardrails (IG-zoekscript) wel al bekend | Ingevuld |

## Openstaand

- Voor **Content Agent** en **Partnership Agent** moet nog hetzelfde gesprek gevoerd worden als voor de Website Agent (14 juli 2026, interactief grenzen-formulier) om de autonomie-tabel in `soul.md` te vullen.
- [[API & Tool Connections]] staat nog leeg — daar horen straks technische tool-regels die voor meerdere agents gelden, bv. de Chrome-kill regel bij IG-automatisering (nu tijdelijk alleen in Partnership Agent's soul.md genoemd).
- De lege bestanden in `System Prompts/` (System Prompt - Content Agent.md, etc.) zijn nu overbodig geworden door dit 3-bestanden-schema — laat het weten of die verwijderd mogen worden of dat je ze nog ergens anders voor gebruikt.

---

## Gerelateerde bestanden

- [[Agent Takenverdeling & Grenzen]]
- [[Goedkeuringsworkflow]]
- [[Brand Identity Overview]]
- [[Feedback & Iteratie Log]]
