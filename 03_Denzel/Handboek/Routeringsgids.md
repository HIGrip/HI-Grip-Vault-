---
type: kennis
gebied: denzel
bijgewerkt: 2026-10-21
status: concept — ter beoordeling door Lars
---

# Routeringsgids — welke taak naar welke agent, en wie vertelt wat aan wie

> Onderdeel van het handboek van [[Identiteit Denzel]]. De structuur zelf (lagen, escalatie) staat in [[Agent Hiërarchie & Structuurschema]]; dit bestand is de praktische routering voor Denzel.

## Eerste keuze: welke hoofdagent

| Onderwerp van de opdracht | Hoofdagent | Orchestrator-skill |
|---|---|---|
| higrip.nl: zoekmachines, thema en ontwerp, paginacopy, conversie en analytics, e-mailflows en nieuwsbrief | **Website Agent** | `/website-agent` |
| Social content: ideeën, kalender, captions, hashtags, video- en reelstijl | **Content Agent** | `/content-agent` |
| Influencers en creators, B2B-klanten (clubs, retail, gyms), events en samenwerkingen | **Partnership Agent** | `/partnership-agent` |
| Briefings uitschrijven, open lussen, kwaliteitslog, leerregels, dashboard afvinken, weekoverzicht samenstellen, vooruitblik (evenementen, regels, platformwijzigingen) | **Operations Agent** | nog geen skill |

De hoofdagent bepaalt daarna zelf welke sub-agents hij parallel inzet. Denzel kiest geen sub-agent van een hoofdagent, tenzij de opdracht er expliciet om vraagt.

## Tweede keuze: waar zijn de taken van het vroegere team van Denzel gebleven

Denzel heeft geen eigen sub-agents meer (sinds 21-10-2026). Wat vroeger naar zijn team ging, gaat nu zo:

| Vraag of situatie | Hoofdagent (sub-agent) |
|---|---|
| "Wat komt er aan?" Datum, evenement, nieuwe regel, platformwijziging | Operations Agent (Vooruitblik-agent) |
| Een opdracht van gewicht moet worden uitgeschreven en het postvak in | Operations Agent (Stafchef) |
| Wat staat er te lang open? Waar wacht iets op Lars? | Operations Agent (Stafchef) |
| Een resultaat van een hoofdagent is klaar en moet getoetst worden | Die hoofdagent zelf, met zijn eigen QA-agent. Denzel krijgt een kopie van het verdict |
| Het weekoverzicht moet worden samengesteld | Operations Agent (Stafchef). Denzel schrijft de besluiten |

## Raakt de opdracht meerdere agents?

Denzel bepaalt wie levert aan wie en wat parallel kan. Voorbeelden:

| Opdracht | Route |
|---|---|
| Nieuwe landingspagina of sportpagina | Website Agent: SEO, Design, Website Copy en Conversie & Analyse, meestal parallel. Daarna zijn eigen Website-QA |
| Blogartikel met bijbehorende e-mail | Website Agent: Website Copy en E-mail Marketing |
| Contentidee over een B2B-partner die ook op de site moet | Content, Website en Partnership raken elkaar. Denzel bundelt en bepaalt de volgorde, de hoofdagenten werken niet los door elkaar |
| Evenement dat ook een samenwerkingskans is | Operations Agent (Vooruitblik) meldt het, Denzel geeft het door. Partnerships & Events beoordeelt de samenwerking. Content krijgt een opdracht als er content bij moet |
| Nieuwe regel die de site raakt (bijvoorbeeld cookies of beleidspagina's) | Operations Agent: Vooruitblik meldt, Stafchef maakt de opdracht. Website Agent voert uit, zijn Website-QA toetst, Lars beslist over live zetten |
| Rugbypartnerlijst of vergelijkbaar onderzoek met meerdere onderdelen | Partnership Agent: Influencer & Creator, B2B Klanten en Partnerships & Events parallel. Zijn Partnership-QA toetst de steekproef |

## Bij twijfel

- Twijfel tussen twee hoofdagents: **leg het aan Lars voor**, kies niet zelf.
- Raakt het twee agents die tegenstrijdige uitkomsten kunnen geven: Denzel beslist niet inhoudelijk, hij legt de keuze voor.
- Past de opdracht nergens: vraag Lars of er een nieuwe agent of een nieuwe routine nodig is. Maak er niet zelf een.

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
| Denzel | Lars | Opleverformaat | Resultaat en alleen de beslissing die echt van Lars is |

Rechtstreeks overleg tussen agents bestaat niet. Alles loopt via een bestand, zodat er een spoor is en niets in een gesprek blijft hangen.

## Wat Denzel nooit doorgeeft

- Een opdracht zonder succescriteria
- Een samenvatting in plaats van het bronbestand
- Een feit uit het geheugen. Feiten staan in [[Feiten & Actuele Staat]], de briefing verwijst ernaar
- Een beslissing die al op "Altijd overleg vooraf" staat, alsof ze genomen is

> Map: [[03 Denzel — Index]]
