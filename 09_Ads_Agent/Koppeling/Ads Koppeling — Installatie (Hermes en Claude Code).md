---
type: koppeling
bijgewerkt: 2026-11-05
status: gebouwd en getest (49 tests geslaagd, nagebootste Meta-server); live Meta-aanroep geeft op 05-11-2026 nog "API access blocked (code 200)" (Meta-kant: app/token/rechten); geen token in de vault
---

# Ads Koppeling — Installatie (Hermes en Claude Code)

> Map: [[09 Ads Agent — Index]]

Dezelfde alleen-lezen Meta-koppeling draait in Hermes (profiel `ads`) en in Claude Code. Beschrijving, ontwerp en veiligheid: [[Ads Koppeling — Meta alleen-lezen]]. Dit is de installatiegids. In deze notitie staan geen tokens en geen paden van een specifieke computer.

## Bestanden (in de vault)
- `09_Ads_Agent/Koppeling/meta_ads_readonly_mcp.py`: het programma (alleen Python-standaardbibliotheek, alleen HTTP GET naar Meta).
- `09_Ads_Agent/Koppeling/test_meta_ads_readonly_mcp.py`: 49 tests met een nagebootste Meta-server (`python -m unittest test_meta_ads_readonly_mcp` in die map; verwijder daarna `__pycache__` en het logbestand).

## Vaste waarden (gelijk voor iedereen)
- Advertentieaccount: `act_581294088143656` (omgevingsvariabele `META_AD_ACCOUNT_ID`; het voorvoegsel `act_` wordt zo nodig aangevuld). Geen ander account kiesbaar.
- Token: Windows-referentiekluis, doel `HIGRIP_META_ADS_TOKEN`. Nooit in een bestand, `.env`, config of de chat.
- Tools: `meta_account_info`, `meta_campaigns`, `meta_adsets`, `meta_ads`, `meta_insights`, `meta_pixels`.

## Token zetten (elke gebruiker zelf, in een eigen terminal)
Een beheerder maakt in Meta Business Settings een token voor de systeemgebruiker met alleen leesrechten (`ads_read`). Daarna, in de eigen terminal van die gebruiker:
`cmdkey /generic:HIGRIP_META_ADS_TOKEN /user:meta /pass:<token>`
Controle zonder de waarde te tonen: `cmdkey /list` en zoek op `HIGRIP_META`.

## Zo verwijzen Hermes en Claude Code naar het programma
Het programma draait rechtstreeks uit de vault (`<vault>/09_Ads_Agent/Koppeling/meta_ads_readonly_mcp.py`, waarbij `<vault>` de plek is waar de vault op die computer staat). Er is dus één bron van waarheid en geen losse kopie. Alleen de eigen configuratie van elke computer (buiten de vault) bevat het volledige pad. Zet altijd `META_MCP_LOG` op een logbestand buiten de vault, anders schrijft het programma het log naast zichzelf in de vault.

Hermes (profiel `ads`), sectie `mcp_servers` in de configuratie van dat profiel:
```
mcp_servers:
  meta-ads:
    command: <python op deze computer>
    args:
      - <vault>/09_Ads_Agent/Koppeling/meta_ads_readonly_mcp.py
    env:
      META_AD_ACCOUNT_ID: '581294088143656'
      META_MCP_LOG: <logbestand buiten de vault>
    enabled: true
```

Claude Code (gebruikersscope):
```
claude mcp add --scope user meta-ads -e META_AD_ACCOUNT_ID=act_581294088143656 -e META_MCP_LOG=<logbestand buiten de vault> -- <python> <vault>/09_Ads_Agent/Koppeling/meta_ads_readonly_mcp.py
```
Controle: `claude mcp list` toont `meta-ads` als Connected. Zet nooit het token in deze configuratie.

## Agent en command in Claude Code
- Agent `ads-agent` (bestand `ads-agent.md` in de map `agents` van de Claude Code-gebruikersmap): alleen Read/Grep/Glob, vault lezen en de zes `meta-ads`-tools. Geen Bash, Write of Edit. Leest bij de start `01_Agent_Infrastructuur/Ads Agent/Agents Ads Agent.md` en `09_Ads_Agent/Profiel/Ads Profiel — SOUL.md`.
- Command `/ads-agent <opdracht>` (bestand `ads-agent.md` in de map `commands`): start de agent als sub-agent met een zelfstandige briefing.

## Bekend
- Rechten die het programma accepteert: `ads_read`, `public_profile`, `read_insights`, plus brede rechten (`ads_management`, `business_management`, `catalog_management`, `pages_manage_ads`, `pages_read_engagement`, `pages_show_list`). Onbekende extra rechten: het programma weigert (fail closed). Het kan hoe dan ook niets wijzigen. Aanbevolen: token met alleen `ads_read`.
- Foutmelding "API access blocked (code 200)": Meta-kant (app niet Live of zonder Marketing API, of token zonder toegang tot dit account). Geen installatiefout.
- Documentatieconflict over de parameters `action_report_time` en `use_unified_attribution_setting`: bewust niet ondersteund, zie [[2026-10-30-ads-agent-onderzoek]].
