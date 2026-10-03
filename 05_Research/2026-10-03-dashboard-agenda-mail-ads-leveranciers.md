---
id: 2026-10-03-dashboard-agenda-mail-ads-leveranciers
titel: "Dashboard — Agenda, Mail, Ads (Meta + Hermes) en Leveranciers toegevoegd, plus 20 features voor later"
kerntitel: "Agenda, mail, ads en leveranciers uit één bron; agents stellen voor, een mens beslist"
datum: 2026-10-03
bron: los
routine: ""
categorie: Techniek
status: nieuw
prioriteit: P2
samenvatting: "Het dashboard-prototype heeft nu een agenda, mail, ads en een leverancierspagina, en alles hangt aan elkaar: een akkoord op een mail kan een afspraak maken, afspraken tellen mee in de capaciteit en de tijdlijn van een relatie toont mail, chats en afspraken. Agents op Hermes doen het zoek- en rekenwerk, maar alleen als voorstel; versturen, publiceren en ads live zetten blijft mensenwerk. Daarnaast staan er 20 features voor later: 10 die andere dashboards hebben en 10 die HÏ Grip specifiek nodig heeft."
gerelateerd: [2026-10-02-dashboard-apps-patronen, 2026-09-29-crm-dashboard-voorstel, 2026-10-02-ai-in-het-dashboard, 2026-10-02-dashboard-ontwerpregels-kpi, 2026-10-04-dashboard-herindeling-ai-mail-koppelingen]
vervangt: []
bronbestand: "https://claude.ai/artifact/XPnRocf1ZcG1J7pb82QBHy"
deadline: ""
---
# Dashboard — Agenda, Mail, Ads (Meta + Hermes) en Leveranciers toegevoegd, plus 20 features voor later

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[Waar staat wat]] · [[Home]]

## In het kort

- **Gevraagd door Timo (3 okt):** een agenda die met alles verbonden is, een plek om mail te checken (er gaat B2B-mail uit het dashboard), meer contact met de leverancier, en ads met AI-agents via Hermes, inclusief onderzoek naar wat concurrenten draaien.
- **Keuzes van Timo:**
  - Meta nu, TikTok later.
  - De gedeelde info@ plus ieders eigen adres.
  - Leverancierscontact via mail en WhatsApp/WeChat.
  - Ads zet voorlopig altijd een mens live. Automatisch binnen een limiet pas als het werk van de AI bevalt.
- **Gebouwd in prototype v2.8:**
  - Agenda (week, maand, lijst);
  - Mail (postvak, wacht op antwoord, concepten en gepland, verstuurd);
  - Ads (overzicht, campagnes, creatives en tests, concurrenten, regels);
  - Leveranciers onder Financiën;
  - een overzicht van 7 Hermes-agents met hun rechten.
- **Kernprincipe blijft: één bron per gegeven.**
  - Mail staat alleen in Mail; de relatietijdlijn leest hem daar.
  - De agenda slaat alleen afspraken op. Taken, posts, reeksmails, facturen, leveringen en ad-tests leest hij uit hun eigen module.
  - De uitgaven aan ads in Financiën zijn dezelfde getallen als in Ads.

## Acties
- [ ] P2 · Besluit: maandbudget voor Meta-ads en een doel-CPA, zodat de Ads-analist onderbouwd kan voorstellen om te pauzeren of op te schalen
- [ ] P2 · Bevestig welke mailadressen bestaan (info@ en eigen @higrip.nl-adressen) voor de Gmail-koppeling van de module Mail
- [ ] P2 · Vraag de producent naar levertijd, logo-technieken en kleuren op maat voor personalisatie; die drie staan open in de productwaarheid 2.0 (V5)

## Bevindingen

### Wat erbij kwam en hoe het samenhangt
| Module | Wat | Verbonden met |
|---|---|---|
| **Agenda** | Afspraken uit Google Agenda + alles met een datum; filter per persoon en bron; vrije tijd per persoon | To do (afspraken tellen mee in de capaciteit), relatietijdlijn, Home › Vandaag, akkoord (maakt afspraken) |
| **Mail** | Gmail info@ (gedeeld) + eigen adres; wacht op antwoord met de volgende stap; reeksmails op dag 7 en 14 ingepland na versturen | CRM (reeks, herbestelmail, factuurherinnering), relatietijdlijn, Leveranciers, Mail-triage-agent |
| **Ads** | Meta-campagnes, A/B-hooktests met winnaarregel, CTR per hoek, concurrenten uit de Meta Ad Library met looptijd | Shopify (echte orders en orderwaarde naast Meta-aankopen), Content (post → ad), Financiën › Uitgaven, Agenda (einde test), To do (live zetten) |
| **Leveranciers** | Open vragen, levertijd (beloofd tegenover binnen), inkoop, gesprek (mail + WhatsApp/WeChat-log), AI-bericht in het Engels | Inkoop, Mail (info@), Agenda (calls), signaal na 14 dagen |
| **Hermes-agents** | Denzel, Mail-triage, Ads-onderzoek, Ads-analist, Leverancier-opvolging, Agenda-planner, B2B Klanten Agent | Wacht op akkoord (elk voorstel met de naam van de agent) |

### Grenzen die bewust zijn ingebouwd
- **Agents hebben alleen lees- en voorsteltools.** Versturen, publiceren, ads live zetten en geld uitgeven kunnen ze niet. Dat sluit aan op [[2026-09-29-crm-dashboard-voorstel]] en op de harde grens "voorstellen mag, versturen doet een mens".
- **Ads:** een akkoord maakt een taak; iemand zet het zelf in Ads Manager.
  - *Automatisch binnen een limiet* staat klaar als latere optie: pauzeren of budget ±20%, maximaal € 10 per dag per campagne, nooit nieuwe ads publiceren.
  - Aan zodra 8 weken lang ≥ 90% van de voorstellen ongewijzigd is goedgekeurd.
- **Hoeken en claims:** een test heeft altijd twee verschillende hoeken uit de tone of voice. Claims komen alleen uit het [[Feiten & Actuele Staat|feitenbestand]]. Dat past bij de Meta-ads-aanpak in [[Strategische Keuzes]]: eerst invalshoeken testen, dan opschalen.
- **Meta tegenover Shopify:** Meta rekent aankopen toe via de pixel; dat is niet hetzelfde als een Shopify-order. Het dashboard zet ze naast elkaar.
- **Concurrenten:** de agent Ads-onderzoek bouwt voort op de routine [[Concurrentie-monitor]], die al actieve ads in de Meta Ad Library bekijkt. Looptijd is het signaal: een ad die lang loopt, werkt waarschijnlijk.
- **Mail:**
  - Iemands eigen mailbox blijft privé, behalve mail die bij een relatie hoort.
  - Openen en lezen meten we niet: Gmail geeft dat niet.
- **WhatsApp en WeChat:** die synchroniseren niet vanaf een telefoon. Belangrijke berichten log je op de leverancierspagina.

### 10 features die andere dashboards hebben
1. Opmerkingen en @-vermeldingen op records (Linear, Attio, HubSpot)
2. Pijplijnwaarde en forecast (HubSpot, Pipedrive)
3. Sjablonen voor mail, offerte en terugkerende taken (HubSpot, Linear)
4. Zelf in te stellen automatiseringen, "als dit, dan dat" (Shopify Flow, HubSpot, Attio)
5. Rollen en rechten (HubSpot, Notion)
6. Geplande rapporten per mail (Stripe, Shopify, GA4)
7. Eigen widgets op Home (HubSpot, Stripe)
8. Pushmeldingen en offline op de telefoon (Linear, Asana)
9. Doelen met voortgang per kwartaal (Asana Goals, Linear)
10. Import/export en webhooks (Attio, HubSpot)

### 10 features die HÏ Grip nodig heeft
1. **Beachhead-scorebord** per kernsport (tennis/padel, voetbal, rugby): leads, klanten, omzet en kosten per klant. Het feitenbestand zegt dat we op alle drie testen en daarna één kiezen; dit scherm maakt die keuze.
2. **Teamorder met maatformulier:** spelers vullen hun maat in via een link, het dashboard telt op tot één order met de juiste staffel.
3. **Sample-tracker:** wie kreeg welk sample, opvolging, en hoeveel samples tot een order leiden.
4. **Clubdeal- en kortingscodeprestaties:** omzet per code uit Shopify.
5. **Personalisatietraject:** van logo tot levering, met MOQ 150 en de open vragen aan de producent.
6. **Creatorbeheer:** afspraken, code, deliverables, betaling en resultaat.
7. **Seizoens- en eventkalender per sport:** benaderen en posten op het juiste moment.
8. **Claim-checker:** elke mail, ad en post wordt getoetst aan het feitenbestand.
9. **Retouren, maatadvies en reviews** op één plek.
10. **Marketplaces in één voorraad:** bol.com en TikTok Shop.

**Voorstel volgorde:**
1. Eerst de kleine features met veel effect: sample-tracker, kortingscodeprestaties, claim-checker en sjablonen.
2. Daarna het beachhead-scorebord en de teamorder.

## Wat niet lukte
- De data in de nieuwe modules is voorbeelddata. Gmail, Google Agenda en Meta zijn in het prototype niet gekoppeld (alleen het Shopify-aantal orders en de gemiddelde orderwaarde zijn echt).
- Het Research Dashboard is niet opnieuw gepubliceerd: dat gebeurt vanaf info@ (`/research-sync`).

## Bronnen
- Prototype v2.8: https://claude.ai/artifact/XPnRocf1ZcG1J7pb82QBHy · handboek: https://claude.ai/artifact/AEzJLbcMsYRYRbT1SFNik1
- Plannen (lokaal): `plans/modules/11-agenda.md`, `12-mail.md`, `13-ads.md`, `06-financien-voorraad.md` (Leveranciers), `08-ai-agents.md` (Hermes), `dashboard-blauwdruk.md` §16
- Productwaarheid: [[Performance Grip Socks 2.0]] (V5: personalisatie, levertijd open)
- Eerder: [[2026-10-02-dashboard-apps-patronen]], [[2026-10-02-ai-in-het-dashboard]], [[2026-10-02-dashboard-ontwerpregels-kpi]]

## Aantekeningen
