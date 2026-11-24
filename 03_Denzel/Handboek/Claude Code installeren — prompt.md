---
type: kennis
gebied: denzel
bijgewerkt: 2026-11-20
status: actief
---

# Claude Code installeren en controleren: prompt

> Plak de prompt hieronder in een nieuwe Claude Code-sessie. Hij haalt de vault binnen, controleert de agents en skills, installeert ze ook voor gebruik buiten de vault en test het resultaat. De bron blijft de vault (`.claude/`); deze prompt kopieert alleen.

## Prompt

```
Je gaat de HÏ Grip-agents en -skills in Claude Code installeren en testen. Werk stap voor stap, meld echte uitvoer en verzin niets. Als een stap faalt: stop, meld de foutmelding en probeer een alternatief; doe nooit alsof iets gelukt is.

Vault: C:\Users\lars\Documents\ObsidianVault (bron van waarheid; wijzig niets in 00_Brand_Core en lees nooit de map _prive).

1. Ga naar de vault en haal de laatste versie binnen: `git pull --rebase` (geen force). Mislukt dat, meld het en ga door met de lokale versie.

2. Controleer in `.claude/agents/` en `.claude/skills/` van de vault dat dit bestaat.
   Skills (slash-commands): denzel, social-agent, content-agent, partnership-agent, website-agent, design-agent, ads-agent, operations-agent.
   Subagents: ads-agent, b2b-klanten-agent, caption-copy-agent, content-maker-agent, content-qa-agent, content-strategie-planning-agent, conversie-analyse-agent, design-agent, email-marketing-agent, influencer-creator-agent, operations-agent, partnerships-events-agent, seo-agent, socials-analyzer-agent, stafchef-agent, video-visuele-productie-agent, vooruitblik-agent, website-copy-agent, website-qa-agent.
   Ontbreekt er iets, meld dat precies; maak het niet zelf aan zonder het te melden.

3. Controleer de frontmatter van elk van die bestanden. Een `description:` of `argument-hint:` met ": " of "#" erin moet tussen dubbele aanhalingstekens staan, anders laadt Claude Code het bestand niet. Pas alleen die regels aan en meld welke bestanden je hebt aangepast.

4. Controleer dat elk vaultpad in backticks in die bestanden bestaat (alleen paden die met 00_ t/m 09_ beginnen en op .md eindigen). Meld ontbrekende paden; verzin geen vervanging.

5. Maak een backup van `%USERPROFILE%\.claude\agents` en `%USERPROFILE%\.claude\skills` naar `%USERPROFILE%\.claude\backup-<datum>`. Kopieer daarna de agents en skills uit stap 2 van de vault naar `%USERPROFILE%\.claude\agents` en `...\skills`, zodat ze ook buiten de vault werken. Overschrijf alleen bestanden met dezelfde naam; laat andere bestanden staan.

6. Test vanuit de vault met een echte aanroep:
   `claude -p "Lijst alle skills en subagent-types waarvan de naam op 'agent' eindigt, plus denzel. Geen uitleg." --max-turns 2`
   Test daarna hetzelfde vanuit een andere map (bv. %USERPROFILE%). Vergelijk met de lijst uit stap 2.

7. Rapporteer in dit formaat:
   RESULTAAT: wat is geïnstalleerd en waar.
   GECONTROLEERD: welke tests zijn echt gedraaid en wat gaven ze.
   NIET GECONTROLEERD: wat je niet kon testen.
   OPEN: ontbrekende bestanden of paden.
   Sluit af met de opdracht: start Claude Code opnieuw, want een lopende sessie laadt nieuwe skills niet.

Regels: niets versturen of publiceren, niets naar het live Shopify-thema, geen tokens of .env lezen, geen push anders dan `git pull`.
```

## Bekende aandachtspunten

- Er bestaat nog geen `Agents Partnership Agent.md`; de Partnership-sub-agents wijzen naar de index van `05_Partnership_Agent`.
- Design, Ads en Partnership hebben nog geen QA-agent.
- Hermes (v0.22.5) heeft v0.23.3 beschikbaar; dat staat los van deze installatie.

> Map: [[03 Denzel — Index]]
