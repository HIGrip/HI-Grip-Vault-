---
id: 2026-10-04-dashboard-herindeling-ai-mail-koppelingen
titel: "Dashboard — herindeling op doel, AI-antwoorden op B2B-mail, en wat er kan met WhatsApp en WeChat"
kerntitel: "WhatsApp is echt te koppelen; WeChat alleen via WeCom. Agenda is tijd, To do is werk"
datum: 2026-10-04
bron: los
routine: ""
categorie: Techniek
status: nieuw
prioriteit: P2
samenvatting: "WhatsApp kan echt aan het dashboard gekoppeld worden: met de WhatsApp Business Platform en coexistence blijft de app op de telefoon werken en lopen berichten ook via de API. WeChat kan alleen via WeCom met een externe archiveringskoppeling; dat is duur en ingewikkeld. Daarnaast is het prototype opnieuw ingedeeld op doel (Werk · Verkoop & marketing · Operatie · Kennis · Systeem), krijgt elke inkomende B2B-mail een AI-antwoord dat het team goedkeurt, en zijn sjablonen, flows, doelen met beachhead-scorebord, teamorders, evenementen en de kanalen van de centrale voorraad toegevoegd."
gerelateerd: [2026-10-03-dashboard-agenda-mail-ads-leveranciers, 2026-10-02-dashboard-apps-patronen, 2026-09-29-crm-dashboard-voorstel, 2026-10-04-dashboard-bruikbaarheidsaudit, 2026-10-04-dashboard-efferd-volgorde-cijfers]
vervangt: []
bronbestand: "https://claude.ai/artifact/XPnRocf1ZcG1J7pb82QBHy"
deadline: ""
---
# Dashboard — herindeling op doel, AI-antwoorden op B2B-mail, en wat er kan met WhatsApp en WeChat

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[Waar staat wat]] · [[Home]]

## In het kort

- **WhatsApp: ja, echt koppelen.**
  - De WhatsApp Business Platform (Cloud API) heeft sinds 2025 **coexistence**: hetzelfde nummer werkt in de WhatsApp Business-app én via de API.
  - Berichten van de laatste 6 maanden worden gesynchroniseerd en nieuwe berichten lopen beide kanten op.
  - Voorwaarden:
    - een zakelijk nummer in de WhatsApp Business-app (geen persoonlijk WhatsApp);
    - aansluiten via een officiële Meta-partner;
    - groepschats synchroniseren niet;
    - gesprekken via de API kosten per gesprek.
  - Daarna kan de AI ook WhatsApp-berichten lezen en een antwoord klaarzetten.
- **WeChat: alleen via een omweg.**
  - Een gewoon WeChat-account heeft geen open koppeling.
  - Het kan via **WeCom** (zakelijke WeChat), plus een archiveringskoppeling van een externe partij met Chinese licentie. Duur en ingewikkeld.
  - Advies: vraag de leverancier om mail of WhatsApp, of log WeChat met de hand.
- **Herindeling op doel** (feedback van Timo):
  - **Agenda is tijd, To do is werk.** Ze leken te veel op elkaar.
  - **Leveranciers** zitten nu bij Voorraad & inkoop in plaats van bij Financiën.
  - **Routines en Hermes-agents** zijn één lijst.
  - **Automatiseringen** heten nu Flows. De AI stelt nieuwe flows voor.
- **Mail:** elke inkomende B2B-mail wordt door de AI gelezen en krijgt een antwoord dat het team goedkeurt, aanpast of afwijst. Het staat onder de mail én in Wacht op akkoord, als één object.

## Acties
- [ ] P2 · Kies het zakelijke WhatsApp-nummer van HÏ Grip en sluit het aan via een Meta-partner (coexistence), zodat WhatsApp-berichten in het dashboard komen
- [ ] P3 · Vraag Producent A of contact via mail of WhatsApp kan in plaats van WeChat

## Bevindingen

### WhatsApp Business Platform met coexistence
- Hetzelfde nummer werkt tegelijk in de WhatsApp Business-app en via de Cloud API. Je hoeft het app-account niet op te geven.
- Synchronisatie van de berichtgeschiedenis (6 maanden) en realtime spiegeling van berichten in beide richtingen.
- Niet beschikbaar na aansluiten: synchronisatie van groepschats, verdwijnende berichten, eenmalig bekijken, live locatie, en verzendlijsten (die worden alleen-lezen).
- Eén nummer per app-account. Aansluiten via Embedded Signup van een officiële Meta-partner; dat kun je niet zelf aanzetten.
- De app blijft gratis; berichten via de API kosten per gesprek.
- Volgens de bron sinds mei 2025 wereldwijd beschikbaar, ook in de EU.

### WeChat
- WeCom (zakelijke WeChat) kan chatten met gewone WeChat-gebruikers.
- Archiveren van die gesprekken kan via een officiële Tencent-API, alleen via partijen met een Chinese ICP-licentie. Antwoorden van externe contacten worden alleen gearchiveerd als zij dat niet weigeren.
- Voor één leverancier is dat te zwaar. Met de hand loggen of een ander kanaal is realistischer.

### Wat er in prototype v2.9 veranderde
| Onderdeel | Wat | Waar |
|---|---|---|
| **Navigatie** | Groepen: Werk (To do, Agenda, Mail, Notities) · Verkoop & marketing (CRM, Content, Ads, Webshop) · Operatie (Voorraad & inkoop, Financiën) · Kennis (Research, Bestanden) · Systeem (AI & agents, Instellingen) | zijbalk |
| **Agenda** | Alleen afspraken; een tweede agenda met evenementen per sport; data uit andere modules staan in een zijbalk met link | Agenda |
| **AI-antwoorden** | Mail-triage zet onder elke B2B-mail een antwoord; *Keur goed en verstuur* | Mail · Wacht op akkoord |
| **Sjablonen** | Mail, offerte en factuur met variabelen en een AI-instructie; zelf aan te passen | Instellingen › Sjablonen |
| **Flows** | Als … dan …; de Flow-bouwer stelt flows voor uit herhaald werk | AI & agents › Flows |
| **Doelen** | Kwartaaldoelen die het dashboard zelf meet, met het beachhead-scorebord (tennis/padel, voetbal, rugby) | Home › Doelen |
| **Teamorder** | Eén deelbare link per club; spelers vullen maat in; sluiten = offerte | CRM › Offertes & orders |
| **Personalisatie** | Interesse als eigenschap en in de uitkomst; offerte op de personalisatiestaffel; stappen logo → geleverd op de order | CRM |
| **Voorraad** | Eén centrale voorraad die alle kanalen gelijkzet (Shopify nu, bol.com en TikTok Shop later) | Voorraad & inkoop |
| **Ads** | Jullie zetten het budget; de Ads-analist verdeelt, meet en leert (trackrecord); automatisch binnen limiet is een besluit van Lars, Tigo of Timo | Ads › Budget & agent |
| **Agents** | Eén lijst: de routines (nu cloud-routine op info@, verhuizen) en de nieuwe agents op Hermes. Op Hermes draait nog niets. | AI & agents › Agents |

### Antwoorden van Timo op open punten
- Eigen adressen lars@, tigo@ en timo@higrip.nl bestaan. Dat beantwoordt de actie in [[2026-10-03-dashboard-agenda-mail-ads-leveranciers]].
- Het ads-budget stellen jullie zelf in; de agent moet daar zelf steeds beter in worden.
- Met de leverancier mailen jullie in het Engels.
- Op Hermes draait nog niets; alle agents gaan daarlangs.

## Bronnen
- WhatsApp coexistence: https://chakrahq.com/article/whatsapp-coexistence-business-app-register-cloud-api/ · https://app.socialintents.com/docs/whatsapp-sms/whatsapp-coexistence-mode · https://developers.telnyx.com/docs/messaging/whatsapp/coexistence.md
- WeChat/WeCom-archivering: https://it-consultis.com/insights/wecom-message-archiving-for-regulated-industries/ · https://www.telemessage.com/?p=10099333
- Prototype v2.9: https://claude.ai/artifact/XPnRocf1ZcG1J7pb82QBHy · handboek: https://claude.ai/artifact/AEzJLbcMsYRYRbT1SFNik1
- Eerder: [[2026-10-03-dashboard-agenda-mail-ads-leveranciers]], [[2026-10-02-dashboard-apps-patronen]], [[2026-09-29-crm-dashboard-voorstel]]

## Aantekeningen
