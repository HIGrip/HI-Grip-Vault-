---
id: 2026-10-02-ai-in-het-dashboard
titel: "AI in het HÏ Grip-dashboard — waar het helpt, hoe het werkt en waar een mens beslist"
kerntitel: "AI schrijft, vat samen en stelt voor; rekenregels rekenen; een mens beslist"
datum: 2026-10-02
bron: los
routine: ""
categorie: Techniek
status: nieuw
prioriteit: P2
samenvatting: "Voor een team van drie levert AI het meest op bij schrijven (mails, belscripts, captions), samenvatten en uitleggen, vragen stellen aan je eigen data en concrete voorstellen doen. Steeds met een korte reden en altijd met een mens die goedkeurt. Voorraad, reeksen en signalen blijven vaste rekenregels: er is te weinig historie voor een voorspelmodel. In prototype v2 werken nu 13 van de 22 AI-functies, waaronder Denzel met tools, Mijn dag, Leg de cijfers uit en Slimme selectie."
gerelateerd: [2026-10-02-dashboard-apps-patronen, 2026-09-29-crm-dashboard-voorstel, 2026-09-26-onderzoek-nieuwe-routines]
vervangt: []
bronbestand: "https://claude.ai/artifact/XPnRocf1ZcG1J7pb82QBHy"
deadline: ""
---
# AI in het HÏ Grip-dashboard — waar het helpt, hoe het werkt en waar een mens beslist

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[Waar staat wat]] · [[Home]]

## In het kort

- **Waar AI het meest oplevert:**
  - schrijven: eerste mail, belscript, herbestelmail, caption;
  - samenvatten: een relatie, een onderzoek, je dag;
  - uitleggen: wat doen de webshopcijfers;
  - vragen in gewone taal: Denzel, slimme selectie;
  - voorstellen: een uitkomst na een reactie, verschuivingen in de planning, ideeën per pilaar.
- **Waar AI níet moet rekenen:** herbestelpunten, reeksdagen, te late facturen en dubbele relaties zijn vaste regels. Er zijn te weinig orders voor een voorspelmodel. AI legt een afwijking hooguit uit.
- **Vijf regels** (uit de richtlijnen van Microsoft, Linear, HubSpot en Anthropic):
  1. AI stelt voor, een mens beslist en verstuurt;
  2. altijd met reden en bron;
  3. makkelijk corrigeren en ongedaan maken;
  4. rekenregels waar het kan, AI waar het helpt;
  5. zuinig en privé: snel model voor korte taken, maandlimiet, geen onnodige klantgegevens in prompts.
- **Hoe het technisch werkt:** Denzel is een "augmented LLM" met tools: zoeken, relatie, taken, capaciteit, voorraad en research. Elke wijziging die hij wil (*propose_task*, *propose_move*) wordt een voorstel in Wacht op akkoord. Elke AI-actie komt in het logboek, als audittrail.
- **In het prototype** draait AI op het Claude-account van de gebruiker, die eerst om toestemming wordt gevraagd. In de app wordt dat de Claude API-sleutel met een maandlimiet.

## Acties

- [ ] P2 · Besluit: AI in het dashboard bouwen volgens de vijf regels (AI stelt voor en een mens beslist, met reden, corrigeerbaar, rekenregels waar het kan, zuinig en privé)
- [ ] P2 · De AI-functies die nu werken in het prototype uitproberen met echte vragen (Denzel, Mijn dag, Leg de cijfers uit, Slimme selectie, Reactie lezen) en per functie kiezen: houden, aanpassen of schrappen
- [ ] P3 · Een maandlimiet voor de Claude API-sleutel vastleggen in Instellingen › AI-limiet zodra het besluit over de API-sleutel valt (schatting $10–40/mnd)

## Bevindingen

### Wat andere apps doen
- **HubSpot Breeze:**
  - de assistent vat records samen, schrijft follow-ups en bereidt gesprekken voor;
  - de Prospecting Agent zoekt koopsignalen en schrijft persoonlijke outreach in de merkstem;
  - sinds januari 2026 laten *Audit Cards* precies zien wat een agent deed.
- **Linear Triage Intelligence:** zoekt eerst kandidaten met gewone zoektechniek en laat dan een LLM oordelen: dubbel, verwant, voorgestelde eigenaar en label. Altijd met een korte uitleg, en de mens accepteert of wijst af.
- **Shopify Sidekick:** beantwoordt vragen over de eigen winkeldata in gewone taal ("waarom daalt de omzet?") en doet sinds Winter '26 ook uit zichzelf aanbevelingen.
- **Anthropic, *Building effective agents*:**
  - begin met één goede aanroep en voeg pas complexiteit toe als die aantoonbaar beter werkt;
  - investeer in duidelijke tools;
  - bouw menselijke controlepunten in.
- **Microsoft, 18 richtlijnen voor mens-AI-interactie:**
  - maak duidelijk wat het systeem kan;
  - maak corrigeren makkelijk;
  - leg uit waarom het iets doet.
- **Voorraad-AI voor e-commerce:** voorspelmodellen hebben veel verkoophistorie nodig. Een vaste regel (verbruik × levertijd + buffer), met AI om uit te leggen en afwijkingen te duiden, past bij een jong merk.

### De 22 functies in het prototype
- **Werkt nu (13):**
  - Overal: Denzel (vraag alles).
  - Home: Mijn dag.
  - To do: Plan mijn week, de overvol-waarschuwing.
  - CRM: mail en belscript schrijven, reactie lezen → uitkomst, relatie samenvatten + volgende stap, slimme selectie, dubbele relaties.
  - Content: captions, ideeën per pilaar.
  - Webshop: leg de cijfers uit.
  - Research: notitie samenvatten.
- **Voorbeeld (4):** kandidaten zoeken en scoren, actuele punten, herbestelmail, inkoopvoorstel.
- **Routine (3):** het Denzel-weekoverzicht, Verbanden & kansen, de Uitvoerder.
- **Later (2):** afwijkingen signaleren, uitgaven categoriseren.

De volledige lijst staat in het prototype, onder AI & agents › AI-functies. Per functie staan daar het patroon, de trigger, het model en het menselijke controlepunt.

## Bronnen

- [Anthropic — Building effective agents](https://www.anthropic.com/engineering/building-effective-agents)
- [HubSpot Breeze agents in 2026 — eesel](https://www.eesel.ai/blog/breeze-agents) · [HubSpot Breeze — Sybill](https://www.sybill.ai/blogs/hubspot-breeze-ai)
- [Linear — How we built Triage Intelligence](https://linear.app/now/how-we-built-triage-intelligence) · [Linear — Triage](https://linear.app/docs/triage)
- [Shopify Sidekick 2026 — Mesa](https://www.getmesa.com/blog/shopify-sidekick)
- [Microsoft — Guidelines for Human-AI Interaction](https://www.microsoft.com/en-us/research/blog/guidelines-for-human-ai-interaction-design/)
- [AI inventory forecasting for Shopify — Prediko](https://www.prediko.io/blog/ai-inventory-forecasting-shopify)
- Prototype v2 (privé): https://claude.ai/artifact/XPnRocf1ZcG1J7pb82QBHy · bron in `plans/prototype-bron/`

## Aantekeningen
