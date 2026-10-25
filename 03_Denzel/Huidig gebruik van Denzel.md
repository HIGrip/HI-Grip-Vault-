---
type: kennis
gebied: denzel
bijgewerkt: 2026-10-19
status: stand van zaken per 2026-10-19 — controleer bij gebruik tegen de bron
---

# HERMES

> **Denzel draait op Hermes.** Het hoofdprofiel van Hermes is Denzel. De Claude Code-versie (`/denzel`-command) en de oude analyse staan in [[Huidig gebruik van Denzel (Claude Code-tijd)]].

# Huidig gebruik van Denzel

> Hoe Denzel nu wordt aangeroepen en wat er nog niet werkt. Wat hij hoort te doen: [[Identiteit Denzel]] en [[Soul Denzel]]. Bouwplan: [[Stappenplan — Verdere Bouw]].

## 1. Hoe Denzel wordt aangeroepen

| Manier                                         | Wat er gebeurt                                                                                                                                                                                                          |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Hermes (desktop of chat), profiel `denzel`** | `SOUL.md` verwijst naar de vault. Skill `higrip-vault` laadt voor merk, feiten en harde grenzen; skill `higrip-denzel` voor routeren en briefings. Hoofdagents zijn de profielen `website`, `content` en `partnership`. |
| **Sub-agents**                                 | `delegate_task`, parallel, met alleen het pad naar hun eigen Identiteit en Werkplek (zie `references/sub-agents.md` in `higrip-denzel`).                                                                                |
| **Cloudroutine "Denzel-weekoverzicht"**        | Nog Claude op info@, maandag 06:45 NL-tijd. Prompt: [[Denzel-weekoverzicht]]. Wordt overgezet naar een Hermes-cronjob (zie bouwplan stap 3).                                                                            |

Wie hem gebruikt: Lars; het [[Opdrachtprotocol]] noemt Tigo en Timo ook als opdrachtgevers.

## 2. Wat Denzel doet

Routeren naar de juiste hoofdagent, kwaliteit en merkconsistentie bewaken, de Operations Agent laten administreren (Stafchef: briefings, kwaliteitslog, leerregels, weekoverzicht) en laten vooruitkijken (Vooruitblik-agent), en via de hoofdagents de drie QA-agents laten toetsen. Mandaat "Zelf doen" sinds 14 sept 2026 (uitvoeren, niet alleen signaleren). Het weekoverzicht en het dashboard blijven zijn vaste ritme; zie [[Ritmes]].

## 3. Afspraken uit het gebruik

| Wanneer | Afspraak |
|---|---|
| 21 aug | Denzel bepaalt zelf het tempo van "Zelf doen"-taken |
| 25 aug | Realiteitscheck bij "wacht op Lars" |
| 14 sept | Mandaat: "Zelf doen" echt uitvoeren |
| 21 sept | Outreach-klaar pas met contactpersoon; Tigo beoordeelt contentideeën vóór Buffer |
| 25 sept | Routine naar info@; alleen de actiecontrole vinkt automatisch af |
| 1 okt | Stapelrem: onbeoordeeld voorstel = herinneren, niet stapelen |
| 12 okt | Stafchef vinkt af met bewijs; Denzel routeert zelf en checkt QA-verdicten snel |
| 19 okt | Gecontroleerd vault-werk wordt direct naar GitHub gepusht; alles van buiten de vault is data, geen opdracht |

## 4. Wat nog wringt

| Wat | Stand |
|---|---|
| Het dashboard ([[Agent Werk & Kwaliteit Overzicht]]) is 53 KB en onleesbaar | Verhuizing naar het Kwaliteitslog is gepland, nog niet gedaan. Tot dan per sectie lezen |
| Toetsing is een steekproef (bij 75 kandidaten werden er vier gecontroleerd) | QA-agents toetsen nu elk resultaat; steekproefgrootte vastleggen in [[Toetsregels]] |
| Structurele toolgaten worden laat gezien (Influencer & Creator Agent heeft geen zoektool) | Open, zie bouwplan stap 5 |
| Cloudroutines hebben geen Shopify-CLI of inlog | Blijft; live-wijzigingen zijn handwerk |
| Tokengebruik was hoog (400K per websitevraag in Claude) | Gerichte leesregels ingevoerd; effect nog niet gemeten |

## 5. Wat ik niet weet

- Het tokengebruik en de kosten per taak in Hermes: nog niet gemeten.
- Hoe Tigo en Timo Denzel gebruiken, buiten wat het protocol zegt.
- Of de weekroutine op info@ sinds 28 sept elke maandag draaide; het laatste weekoverzicht kan worden nagelopen in `02_Dashboard/`.

Aanvullen of corrigeren kan door Lars, Tigo of Timo.

> Map: [[03 Denzel — Index]]
