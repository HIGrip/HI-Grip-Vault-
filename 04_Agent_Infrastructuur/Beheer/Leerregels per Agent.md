---
type: kennis
gebied: agent-infrastructuur
bijgewerkt: 2026-10-01
---

# Leerregels per Agent

> Het geheugen van het agent-systeem. Sub-agents starten koud en onthouden niets; hier staat wat ze van eerdere opdrachten, correcties en reviews moeten weten. Denzel voegt regels toe volgens [[Opdrachtprotocol]] (stap 8) en geeft de relevante regels mee in elke briefing. Regels hebben een reden en een datum. Verouderde of tegenstrijdige regels worden aangepast of verwijderd, niet opgestapeld. Een leerregel versoepelt nooit een harde grens of autonomie-niveau.

Formaat: `- **Regel.** Reden. (datum, bron)`

## Voor alle agents
- **Een bron die niet te openen is, is een blocker, geen reden om iets vergelijkbaars te verzinnen.** Vraag het op en wacht; vul de tijd met voorbereiding. (2026-09-04, Lars)
- **`[[wikilinks]]` zijn geen paden.** Zoek het bestand met een zoekactie op bestandsnaam voordat je concludeert dat een bron ontbreekt. (2026-09-17, testrun)
- **Geen claims sterker dan de vault onderbouwt.** Niet-onderbouwde feiten markeer je als **[LARS]**. (2026-09-17, testrun)
- **Een voorstel zonder beoordeling is geen voortgang.** Staat het vorige voorstel nog open, maak dan geen nieuw voorstel maar herinner. (2026-10-01, Denzel)
- **Onderbouwing vóór prioriteit.** Geef pas HOOG na verdieping en noem de bron; geen geschatte volumes zonder bron. (2026-09-17, testrun)

## Website — SEO Agent
- **Eerst meten of het meetprobleem opgelost is.** Zie ook Conversie & Analyse. (2026-09-17)
- **Wijzigingen die alleen via Shopify Admin kunnen (title/meta) zijn geen theme-wijziging.** Schrijf de fix plakklaar uit en zeg wie hem moet doorvoeren. (2026-09-17)

## Website — Design Agent
- **Grens op de rol `live`, niet op een thema-nummer.** Draai vóór elke theme-actie `shopify theme list`. (2026-09-17)
- **Lees grote templates niet half.** Inventariseer eerst alle secties voordat je zegt wat er wel of niet op de pagina staat. (2026-09-17)
- **Toets sportpagina's en homepage aan de beachhead-volgorde** (tennis, rugby, voetbal). Rugby ontbrak in de sport-grid. (2026-09-17)

## Website — Website Copy Agent
- **Nooit zelf een cijfer kiezen.** Klantenaantal en ratings moeten overal identiek zijn; twijfel = **[LARS]**. (2026-09-17)

## Website — Conversie & Analyse Agent
- **Tracking eerst.** 0 conversies in GA4 is een meetprobleem tot Shopify Analytics het tegenspreekt. Geen CRO-voorstel op onbetrouwbare cijfers. (2026-09-17)
- **Onder ~100 echte sessies per week zijn cijfers indicatief, geen trend.** Filter botverkeer. (2026-09-28)

## Website — E-mail Marketing Agent
- **Geen claims als "getest door tennissers" zonder bron.** Platform (SendWILL of Shopify Messaging) benoemen en markeren als **[LARS]** tot bevestigd. (2026-09-17)

## Content — Content Strategie & Planning Agent
- **Gebruik de pillar-namen letterlijk uit Content Pillars.** Verzin geen eigen pillar. Begin Buffer-acties met `get_account`. (2026-09-17)
- **Houd de verdeling over sporten in de gaten.** Buffer-ideeën waren 74% persoonlijk en 0 noemden tennis/rugby/voetbal. (2026-09-17)
- **Plan geen skisokken-content zolang de lancering is uitgesteld.** (2026-09-17)

## Content — Caption & Copy Agent
- **Hashtags eerst uit de Hashtag Bibliotheek.** Nederlands, je/jij; hype-adviezen uit generieke skills overrulen nooit de merkstem. (2026-09-17)

## Content — Video & Visuele Productie Agent
- **Geen frame uit de video trekken voor een thumbnail.** Werk vanaf een aangeleverde still. Muziek alleen binnen Muziek & Licenties. (2026-09-17)

## Partnership — B2B Klanten Agent
- **Een kandidaat is pas outreach-klaar met een contactpersoon.** Doe een vervolgzoekactie naar contactgegevens bij hoge scores zonder contact. (2026-09-21)
- **Geen pilates of sportscholen meer; focus op de beachhead.** (2026-09-17, Lars)
- **Afgeschermd e-mailadres niet omzeilen.** Gebruik telefoon, formulier of Instagram. (2026-09-17)

## Partnership — Partnerships & Events Agent
- **Zoek per ronde alle drie de beachhead-sporten apart.** Rugby werd overgeslagen. (2026-09-17)
- **Signaleer jeugdtoernooien als doelgroeprisico (18–35).** (2026-09-17)
- **Beachhead-fit eerst:** niet-passende events (basketbal, run) niet als HOOG voorstellen. (2026-09-17)

## Partnership — Influencer & Creator Agent
- **@finnpicard_ is geen voetbalaccount;** controleer een seed-account altijd zelf. Sluit bij browser-automatisering alleen zelf-gestarte Chrome-processen. (2026-08, Lars)

## Voor alle agents (toegevoegd na testrun 2026-10-01)
- **Schrijf nooit "niet te verifiëren" voordat je het kwaliteitsdashboard en het nieuwste weekoverzicht hebt doorzocht.** De maker van de proef concludeerde dat "rugby ontbreekt in de sportgrid" niet te bevestigen was; de reviewer vond het wel, in `Agent Werk & Kwaliteit Overzicht.md` en `05_Research/2026-09-21-weekoverzicht.md`. (2026-10-01, test Opdrachtprotocol)
- **Geef bij tegenstrijdige documenten een ernst en de bron mee, en zeg welk document volgens jou gelijk heeft of dat het een vraag voor Lars is.** Een lijst zonder rangorde dwingt de lezer tot opnieuw beoordelen. (2026-10-01, test Opdrachtprotocol)

## Voor Denzel
- **Controleer thema-ID's met `shopify theme list` voordat je ze uit de vault overneemt.** Op 2026-10-01 stond de vault op live `200269398343`, terwijl de echte live-rol `201132507463` was. (2026-10-01, themacontrole)
- **Verifieer de zwaarste bevindingen zelf in de bron** voordat je ze doorgeeft. (2026-10-01, test Opdrachtprotocol)

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[04 Agent Infrastructuur — Index]] · [[Home]]
