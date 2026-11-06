---
type: koppeling
bijgewerkt: 2026-11-06
status: gebouwd, getest met nagebootste Meta-server, code-QA ronde 1 CORRIGEER verwerkt (ronde 2 loopt), geregistreerd in profiel `ads` met account-ID; token staat in de Windows-referentiekluis; live `meta_account_info` via Claude Code geeft op 06-11-2026 echte accountdata; overige vijf tools en de koppeling in Hermes live nog niet getest (Ads-profiel draait alleen-lezen via kanban)
---

# Ads Koppeling — Meta alleen-lezen (MCP)

Besluit Lars (03-11-2026): de Ads Agent leest Meta Ads-cijfers en -instellingen zelf via een MCP-koppeling, in plaats van handmatige CSV-exports. Dit is de aparte menselijke vrijgave voor toegang tot Meta-data die [[Agents Ads Agent]] en [[2026-10-30-ads-agent-onderzoek]] vragen. Het blijft adviserend: de koppeling kan niets wijzigen.

## Wat het is
Een klein Python-programma zonder externe afhankelijkheden: `09_Ads_Agent/Koppeling/meta_ads_readonly_mcp.py` (vault-pad, gedeeld met het hele team), met tests in `09_Ads_Agent/Koppeling/test_meta_ads_readonly_mcp.py` (25 geslaagd, 0 mislukt, nagebootste Meta-server). Het praat MCP over stdin/stdout met Hermes.

## Zes alleen-lees-tools
`meta_account_info` · `meta_campaigns` · `meta_adsets` · `meta_ads` · `meta_insights` (cijfers per niveau, periode en optionele uitsplitsing) · `meta_pixels` (kan extra rechten vragen).

## Waarom dit veilig is (ontwerp)
- **Token kan niets wijzigen:** alleen `ads_read`. Dit is de eigenlijke beveiliging, niet het gedrag van de agent.
- **Alleen HTTP GET** naar graph.facebook.com; geen schrijf-, maak- of verwijdertool; er is geen manier om een vrij pad of URL mee te geven.
- **Vast advertentieaccount** (`META_AD_ACCOUNT_ID` in de configuratie van de koppeling); de agent kan geen ander account kiezen.
- **Token in de Windows-referentiekluis** (doel `HIGRIP_META_ADS_TOKEN`), niet in een bestand, config, `.env` of omgevingsvariabele. Reden: Hermes geeft omgevingsvariabelen bewust niet door aan MCP-programma's, en een token in `config.yaml` kan de agent zelf lezen (en de agent kan in de vault schrijven). Het token staat in de header, nooit in een URL, log of antwoord.
- **Begrensd:** maximaal 100 rijen, 150 KB per antwoord, geen automatische herhaalpogingen, whitelist voor velden en uitsplitsingen, cursor en id's gecontroleerd.
- **Weigert te werken met een te ruim token (fail closed, 03-11-2026).** Vóór de eerste gegevensaanroep controleert de koppeling bij Meta welke rechten het token heeft. Alleen `ads_read` (plus `public_profile`, `read_insights`) is toegestaan. Heeft het token ook `ads_management`, `business_management`, `catalog_management`, `pages_manage_ads` of iets anders, dan weigert de koppeling, noemt de reden en haalt niets op. Zo hangt de veiligheid niet af van wie het token maakt.
- **Bewust niet ondersteund:** de parameters `action_report_time` en `use_unified_attribution_setting` (documentatieconflict in Meta, zie [[2026-10-30-ads-agent-onderzoek]] §4).
- Aanroeplog (zonder token) in `meta_ads_readonly_mcp.log` naast het programma.

## Zo zet Lars het aan (stappen buiten de agent)
1. Meta Business Settings: beheerder van het advertentieaccount.
2. developers.facebook.com: app van het type Business, product Marketing API toevoegen.
3. Systeemgebruiker met alleen leesrechten op het advertentieaccount; token met alleen `ads_read` genereren.
4. Token opslaan in een eigen terminal (niet in de chat): `cmdkey /generic:HIGRIP_META_ADS_TOKEN /user:meta /pass:HIER_JE_TOKEN`, met het token zonder haakjes, spaties of aanhalingstekens.
5. Advertentieaccount-ID (`act_...`) doorgeven aan Denzel. Dat is geen geheim.

Daarna registreert Denzel de koppeling in het profiel `ads` (`hermes mcp add`), test hij met één dag aan gegevens en toetst de QA het resultaat.

## Fase B: klaarzetten na akkoord (besluit Lars 03-11-2026, nog niet gebouwd)
De agent voert nooit zelf iets uit; hooguit zet hij iets klaar in status **uit**, na een voorstel, controle en schriftelijk akkoord van Team HÏ Grip. Aanzetten doet altijd een mens in Ads Manager. Volledige procedure, vier technische sloten en controlelijst: [[Agents Ads Agent]] (kopje Klaarzetten).
- **Twee tokens, twee systeemgebruikers.** Het lezen blijft op een token met uitsluitend `ads_read` (`HIGRIP_META_ADS_TOKEN`, deze koppeling). Voor klaarzetten komt later een apart, breed token in een eigen kluisitem, achter een eigen tussenprogramma met een vaste toolslijst. Nooit in één koppeling.
- **Meta's regels** (Business Suite → Ads MCP-server → HÏ Grip ADS): nu staan alle schakelaars op "Allowed". Lars zet ze uit tot de klaarzet-koppeling klaar en getoetst is; daarna alleen "aanmaken" aan; budget, targeting, creative en status blijven uit.
- **Nog te beslissen:** alleen structuur (campagne en advertentieset) of ook advertenties met door Team HÏ Grip aangeleverde creatives. Voorlopig alleen structuur.

## Vrijgave proef (fase 1, nog te bevestigen door Lars)
Eigenaar: Lars (te bevestigen) · looptijd: 4 weken, daarna evalueren (te bevestigen) · kostenplafond: €0, geen advertentie-uitgaven (te bevestigen) · beoordelingscriteria: zie onderzoeksnotitie §7 fase 1.

## Niet gecontroleerd
Live bewezen op 06-11-2026: alleen `meta_account_info` via Claude Code, met API-versie `v26.0` en toegangslaag `development_access`. Nog niet live getest: `meta_campaigns`, `meta_adsets`, `meta_ads`, `meta_insights`, `meta_pixels` en de koppeling in Hermes. Dus ook nog onbekend: of `ads_read` alle bedoelde velden dekt, vooral pixel en CAPI, en of de ontwikkeltoegang genoeg is voor routinematig gebruik.

> Map: [[09 Ads Agent — Index]]
