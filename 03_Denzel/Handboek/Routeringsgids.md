---
type: kennis
gebied: denzel
bijgewerkt: 2026-10-25
status: concept — ter beoordeling door Lars en Timo
---

# Routeringsgids — welke taak naar welke agent, en wie vertelt wat aan wie

> Onderdeel van het handboek van [[Agents Denzel]]. De structuur zelf (lagen, escalatie) staat in [[Agent Hiërarchie & Structuurschema]]; dit bestand is de praktische routering voor Denzel.

## Eerste keuze: welke hoofdagent

| Onderwerp van de opdracht | Hoofdagent | Orchestrator-skill |
|---|---|---|
| higrip.nl: zoekmachines, techniek van thema en secties, paginacopy, conversie en analytics, e-mailflows en nieuwsbrief | **Website Agent** | `higrip-website-agent` |
| Social content: ideeën, kalender, captions, hashtags, video- en reelstijl | **Social Agent** (voorheen Content Agent) | `higrip-content-agent` |
| Influencers en creators, B2B-klanten (clubs, retail, gyms), events en samenwerkingen | **Partnership Agent** | `higrip-partnership-agent` |
| Visuele uitwerking (uiterlijk, kleur, beeld, e-mailontwerp) voor Social en Website | **Design Agent** | nog geen skill |
| Briefings uitschrijven, open lussen, kwaliteitslog, leerregels, dashboard afvinken, weekoverzicht samenstellen, vooruitblik (evenementen, regels, platformwijzigingen) | **Operations Agent** | nog geen skill |

**Toegevoegd op besluit Lars, 30-10-2026 (`t_f53d0c76`):** Meta Ads-analyse, verbeter-/optimalisatievoorstellen, plannen en menselijke implementatiechecklists gaan naar **Ads Agent**, met Ads-analyse en onafhankelijke Ads-QA. Skill `higrip-ads-agent` is alleen voorgesteld, niet beschikbaar; Hermes-profiel `ads` is niet aangemaakt. Routering is inhoudelijk vastgelegd, automatische dispatch blijft uit tot technische vrijgave en verificatie.

**Niet naar Ads routeren:** advertentiecontent/creatives/captions/copy/beelden/varianten of kant-en-klare advertenties; advertenties/campagnes maken of wijzigen; uploaden/inplannen/publiceren; budget, accountrechten of instellingen wijzigen. Ads voert geen externe handelingen uit, ook niet na adviesakkoord. Niet via Social/Design alsnog content laten maken binnen dit mandaat. Account/data/proefscope/tools/kosten uitsluitend na afzonderlijke expliciete menselijke vrijgave. Mens implementeert. Website behoudt tracking/CRO/GA4/Shopify; Social organische analyse. QA-route en stopvoorwaarden: [[Agent Hiërarchie & Structuurschema]] sectie Ads.

De hoofdagent bepaalt daarna zelf welke sub-agents hij parallel inzet. Denzel kiest geen sub-agent van een hoofdagent, tenzij de opdracht er expliciet om vraagt.

## Tweede keuze: waar zijn de taken van het vroegere team van Denzel gebleven

Denzel heeft geen eigen sub-agents meer (sinds 21-10-2026). Wat vroeger naar zijn team ging, gaat nu zo:

| Vraag of situatie | Hoofdagent (sub-agent) |
|---|---|
| "Wat komt er aan?" Datum, evenement, nieuwe regel, platformwijziging | Operations Agent (Vooruitblik-agent) |
| Een opdracht van gewicht moet worden uitgeschreven en het postvak in | Operations Agent (Stafchef) |
| Wat staat er te lang open? Waar wacht iets op Team HÏ Grip? | Operations Agent (Stafchef) |
| Een resultaat van een hoofdagent is klaar en moet getoetst worden | Die hoofdagent zelf, met zijn eigen QA-agent. Denzel krijgt een kopie van het verdict |
| Het weekoverzicht moet worden samengesteld | Operations Agent maakt het, Partnership en anderen leveren aan. Denzel geeft het door aan Team HÏ Grip en controleert het niet zelf |

## Raakt de opdracht meerdere agents?

Denzel bepaalt wie levert aan wie en wat parallel kan. Voorbeelden:

| Opdracht | Route |
|---|---|
| Nieuwe landingspagina of sportpagina | Website Agent: SEO, Website Copy en Conversie & Analyse, meestal parallel, de Design Agent voor het uiterlijk. Daarna Website-QA |
| Blogartikel met bijbehorende e-mail | Website Agent: Website Copy en E-mail Marketing |
| Contentidee over een B2B-partner die ook op de site moet | Social, Website en Partnership raken elkaar. Denzel bundelt en bepaalt de volgorde, de hoofdagenten werken niet los door elkaar |
| Evenement dat ook een samenwerkingskans is | Operations Agent (Vooruitblik) meldt het, Denzel geeft het door. Partnerships & Events beoordeelt de samenwerking. Social krijgt een opdracht als er content bij moet |
| Nieuwe regel die de site raakt (bijvoorbeeld cookies of beleidspagina's) | Operations Agent: Vooruitblik meldt, Stafchef maakt de opdracht. Website Agent voert uit, zijn Website-QA toetst, wie volgens [[user]] daarover beslist, beslist over live zetten |
| Rugbypartnerlijst of vergelijkbaar onderzoek met meerdere onderdelen | Partnership Agent: Influencer & Creator, B2B Klanten en Partnerships & Events parallel. Zijn Partnership-QA toetst de steekproef |

## Bij twijfel

- Twijfel tussen twee hoofdagents: **leg het aan Team HÏ Grip voor**, kies niet zelf.
- Raakt het twee agents die tegenstrijdige uitkomsten kunnen geven: Denzel beslist niet inhoudelijk, hij legt de keuze voor.
- Past de opdracht nergens: vraag Team HÏ Grip of er een nieuwe agent of een nieuwe routine nodig is. Maak er niet zelf een.

## Wie vertelt wat aan wie

| Van | Naar | Hoe | Wat |
|---|---|---|---|
| Lars, Tigo of Timo | Denzel | Gesprek of dashboard | Opdracht |
| Denzel | Operations Agent (Stafchef) | Postvak | Succescriteria van de opdracht, de Stafchef schrijft de briefing |
| Stafchef | Hoofdagent | Postvak | Briefing met doel, bronnen, niveau, leerregels, uitvoerformaat |
| Hoofdagent | Sub-agent | Eigen delegatie | Taak binnen zijn specialisme |
| Sub-agent | Hoofdagent | Resultaat | Resultaat met zelfcheck. Escaleert altijd via zijn hoofdagent |
| Hoofdagent | Eigen QA-agent | Eigen delegatie | Het resultaat en de succescriteria. Niet de samenvatting |
| QA-agent | Eigen hoofdagent, kopie naar Denzel | Verdict | GOED, CORRIGEER of ESCALEER met regel en bewijs. De hoofdagent past het niet aan |
| Hoofdagent | Sub-agent (maker) | Eigen delegatie | Bij CORRIGEER: de regel en het bewijs, geen "doe het beter" |
| QA-agent | Stafchef (Operations Agent) | Verdict | Om vast te leggen in het kwaliteitslog |
| Vooruitblik-agent | Stafchef (beide Operations Agent) | Item in het 90-dagenoverzicht | Datum, impact, wie het raakt, uiterste actiedatum, bron |
| Operations Agent | Denzel | Weekstand en meldingen | Wat te laat dreigt of te lang openstaat |
| Denzel | Team HÏ Grip | Opleverformaat | Resultaat en alleen de beslissing die echt van Team HÏ Grip is |

Overleg tussen hoofdagents gebeurt in de groepschat (besloten 25-10-2026); alleen Denzel praat met Team HÏ Grip. Afspraken en overdracht staan altijd ook in een bestand, zodat er een spoor is.

## Wat Denzel nooit doorgeeft

- Een opdracht zonder succescriteria
- Een samenvatting in plaats van het bronbestand
- Een feit uit het geheugen. Feiten staan in [[Feiten & Actuele Staat]], de briefing verwijst ernaar
- Een beslissing die al op "Altijd overleg vooraf" staat, alsof ze genomen is

> Map: [[03 Denzel — Index]]
