---
type: kennis
gebied: agent-infrastructuur
bijgewerkt: 2026-10-12
---

# Agents en het dashboard

> Hoe de agents samenwerken met het HÏ Grip-dashboard dat een collega bouwt, en wat er nog niet op elkaar aansluit. Gecheckt op 12-10-2026 tegen het dashboardhandboek (v4, stand 6-10-2026, https://claude.ai/artifact/UDYtF4nrKv813joETE8pSq) en het prototype (V4.2, https://claude.ai/code/artifact/feede8ac-d873-4c67-ac20-c339dc2fc458). **Aan het dashboard is niets veranderd.** De punten onder "Wat nog niet aansluit" zijn voor de bouwer.

## Wat al goed aansluit

- **AI stelt voor, een mens beslist en verstuurt.** Dat is dezelfde regel als onze autonomie-niveaus. "Voorstellen, ik keur goed" wordt in het dashboard een voorstel in *Wacht op akkoord*; "Altijd overleg vooraf" doet een mens.
- **Eén plek voor voorstellen.** *Wacht op akkoord*, met een logboek en zes seconden om iets ongedaan te maken.
- **Denzel kan in het dashboard niets zelf veranderen.** Hij heeft alleen leestools (`search`, `get_relation`, `get_tasks`, `get_capacity`, `get_research`, `get_stock`, `open_screen`) en twee voorsteltools (`propose_task`, `propose_move`). Dat past bij zijn grenzen.
- **Mail:** agents schrijven alleen concepten, versturen doet een mens.
- **CRM:** de drie pipelines (B2B, Creators, Partnerships & events) vallen samen met de drie sub-agents van de Partnership Agent. Doorzetten van de kandidatenpool naar "Nieuw" doet een mens.
- **Research:** de vault blijft de bron. Afvinken en besluiten in het dashboard gaan elk uur terug naar de vault.
- **Bron van waarheid:** de vault voor kennis, onderzoek en agents; het dashboard voor relaties, taken, orders, voorraad en prijzen; Moneybird voor facturen.

## Welke agent hoort bij welke dashboardfunctie

| Dashboard | Agent |
|---|---|
| Home › Denzel-weekoverzicht, Vraag Denzel, Sparren | Denzel, met de Operations Agent (Stafchef) voor het weekoverzicht |
| To do, Research › Acties & besluiten | Operations Agent (Stafchef): bijhouden en afvinken met bewijs. Denzel: taken voorstellen |
| Research › Opdrachten | Routine Uitvoerder |
| Agenda › evenementen | Operations Agent (Vooruitblik-agent) levert data; Partnerships & Events Agent beoordeelt de samenwerking |
| CRM › Kandidaten zoeken en scoren (B2B) | B2B Klanten Agent |
| CRM › pipeline Creators | Influencer & Creator Agent |
| CRM › pipeline Partnerships & events | Partnerships & Events Agent |
| CRM › mail en belscript (concept) | Agent van de betreffende pipeline; Partnership-QA (onder de Partnership Agent) toetst |
| Content › Ideeën per pilaar | Content Strategie & Planning Agent |
| Content › idee uitwerken (shotlist, materiaal, locatie) | Video & Visuele Productie Agent (productielijst) |
| Content › caption | Caption & Copy Agent |
| Content › beeld en video | Content Maker |
| Content › bereik en klikken na 48 uur | Socials Analyzer |
| Webshop › Analyse | Conversie & Analyse Agent |
| Webshop › Site & SEO | SEO Agent en de routine SEO-regressiecheck |
| Mail › campagnes (SendWILL) | E-mail Marketing Agent (concepten) |
| Ads › Campagnes en Concurrenten | Ads-tak, nog uit te werken |
| Voorraad, inkoop, financiën, teamorders | Geen agent: rekenregels en mensen |

## Wat nog niet aansluit

1. **Afvinken door de Stafchef.** Het handboek zegt bij Research "Afvinken doet een mens". Lars besloot op 12-10-2026 dat de Stafchef in het dashboard mag afvinken, met bewijs. Daarvoor heeft het dashboard een veld voor bewijs nodig en een tool voor de agent (bijvoorbeeld afvinken met een bewijslink), die in het AI-logboek komt.
2. **Postvak, kwaliteitslog en leerregels staan niet in het dashboard.** Ze leven nu in de vault (`06_Denzel/Postvak`, [[Kwaliteitslog Overzicht]], [[Leerregels per Agent]]). Keuze voor later: tonen in het dashboard, of bewust in de vault laten.
3. **Soorten voorstellen in *Wacht op akkoord*.** Nu: reeks, herbestelmail, offerte, idee, inkoop, taak, verschuiving. Voor onze agents ontbreken: een website-wijziging die klaarstaat in het werkthema, beeld of video van de Content Maker, een QA-escalatie en een wijziging aan de AI-structuur.
4. **Rechten per persoon.** *Instellingen › Gebruikers* kent alleen capaciteit. Over de AI-structuur beslissen Lars en Timo, over live zetten Lars (zie [[user]]). Het dashboard dwingt dat nog niet af.
5. **Bestanden van de Content Maker.** Het dashboard koppelt alleen Google Drive en heeft bij een post geen plek voor beeld of video. Afspraak nodig waar de exports komen.
6. ~~**Twee manieren waarop agents draaien.**~~ **Besloten 12-10-2026:** alle agents worden gebouwd in Hermes. Een paar agents roepen Claude aan om iets echt te bouwen, zoals een nieuwe websitesectie. Schrijfwerk (captions, sitecopy, mails) gaat waarschijnlijk via de chat met Claude, omdat dat menselijker wordt; nog niet definitief. De Claude Code-sub-agents in de setup-repo zijn daarmee een hulpmiddel, niet de plek waar agents standaard draaien.
7. **Wie keurt een post goed voor Buffer?** Staat in het handboek als open vraag. In onze structuur: Content-QA toetst eerst, Team HÏ Grip kiest en plant.
8. **Socials-cijfers.** Het handboek laat "de Content-agent" na 48 uur bereik en klikken ophalen. Bij ons is dat de Socials Analyzer. Instagram- en TikTok-statistieken zijn nog niet gekoppeld; Buffer geeft een deel.
9. **Meer rechten voor de B2B Klanten Agent, later.** Over twee à drie maanden krijgt hij in het dashboard meer rechten, zoals records bijwerken. Daarvoor is een tool nodig die dat per fase toestaat en logt. Tot Lars of Timo het vrijgeeft: alleen lezen en nieuwe prospects. Zie [[Werkplek B2B Klanten Agent]].
10. **Ads-limiet.** Het handboek noemt later automatisch bijsturen binnen een limiet (± 20% budget, max € 10 per dag). Die limiet hoort in de identiteit van de Ads-tak zodra die er is; tot dan altijd overleg vooraf.
11. **Sterren geven in het dashboard.** Team HÏ Grip wil bij elke echte oplevering (sectie, post, mail, lijst) snel 1 tot 5 sterren geven, met optioneel één zin waarom. Nodig: een sterrenknop op een post, taak of voorstel in *Wacht op akkoord* en bij het afronden, opgeslagen per agent, zodat de Stafchef het gemiddelde kan bijhouden. Zie [[Sterrenbeoordeling]].

## Gerelateerde bestanden

- [[Agent Hiërarchie & Structuurschema]]
- [[user]] (Team HÏ Grip en basisregels)
- [[Stappenplan — Verdere Bouw]]
- `04_Agent_Infrastructuur/Routines/README.md`

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[04 Agent Infrastructuur — Index]] · [[Home]]
