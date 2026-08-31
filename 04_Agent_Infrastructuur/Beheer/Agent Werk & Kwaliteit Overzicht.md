# Agent Werk & Kwaliteit Overzicht

> Doorlopend dashboard — niet alleen wekelijks. Vastgesteld 21 augustus 2026 op verzoek van lars: hij wil de output van de agents kunnen monitoren, maar Denzel doet de eerste beoordeling (zie [[soul Denzel]], sectie "Kwaliteitscontrole-loop"). Bij elke sessie waarin een hoofdagent/sub-agent iets oplevert op niveau "Voorstellen, ik keur goed" of "Altijd overleg vooraf", werkt Denzel dit bestand bij — nieuwe rij of statuswijziging, nooit een oude rij stilzwijgend overschrijven.

---

## Statuslegenda

| Status | Betekenis |
|---|---|
| ✅ OK | Denzel heeft gecheckt tegen Brand Core/soul.md-grenzen, geen afwijking gevonden |
| 🔁 Teruggestuurd | Denzel vond een afwijking, agent moet corrigeren — nog niet opgelost |
| ✅ Opgelost na correctie | Was teruggestuurd, agent heeft het gefixt, nu goedgekeurd |
| 🚩 Geëscaleerd naar lars | Correctie lukte niet, of het probleem is een patroon (2e keer) |
| ⏳ Wacht op lars | Klaar en goedgekeurd door Denzel, maar actie/beslissing van lars vereist (bv. outreach) |
| — Nog geen output | Gebouwd, maar nog niet gebruikt sinds skill/workflow bestaat |

---

## Website Agent

| Sub-agent | Laatste output/actie | Datum | Status | Toelichting |
|---|---|---|---|---|
| Website Agent (hoofdagent) | Organization/WebSite + FAQPage structured data toegevoegd (AI Workspace-theme) | 2026-08-02 | ✅ OK | Getest: `theme check` schoon, preview-URL zonder Liquid-errors. Zie [[Update Log]]. Nog niet door lars naar live gekopieerd. |
| SEO Agent | — Nog geen output | — | — | Skill (`/shopify-seo`) gebouwd 2026-08-09, nog niet ingezet sindsdien |
| Design Agent | — Nog geen output | — | — | Skill (`/shopify-design`) gebouwd 2026-08-09, nog niet ingezet sindsdien |
| Website Copy Agent | — Nog geen output | — | — | Skill (`/shopify-copy`) gebouwd 2026-08-09, nog niet ingezet sindsdien |
| Conversie & Analyse Agent | Live-site-check (eerste geplande run) | 2026-08-31 | 🚩 Geëscaleerd naar lars | Kon niet worden uitgevoerd: WebFetch én directe `curl` naar `higrip.nl`/`www.higrip.nl` werden geblokkeerd door organisatiebeleid van de egress-proxy in deze cloud-omgeving ("CONNECT tunnel failed, response 403"). Geen inhoudelijke bevinding — technische blocker, actie van lars nodig (allowlist/omgeving-instelling). Zie [[Week 2026-08-31]]. |
| SEO Agent | SEO-check (eerste geplande run) | 2026-08-31 | 🚩 Geëscaleerd naar lars | Zelfde blocker als de live-site-check hierboven (rij Conversie & Analyse Agent) — kon niet worden uitgevoerd. Meta title/description, sitemap.xml en FAQPage-inhoud dus nog niet gecontroleerd. Skill (`/shopify-seo`) zelf staat sinds 2026-08-09 op "in ontwikkeling", nog niet los daarvan ingezet. |

## Content Agent

| Sub-agent | Laatste output/actie | Datum | Status | Toelichting |
|---|---|---|---|---|
| Video & Visuele Productie Agent | — Nog geen output | — | — | Skill (`/video-productie`) gebouwd 2026-08-09, nog niet ingezet sindsdien |
| Caption & Copy Agent | n.v.t. | — | — | Idee-status, gedekt door generieke `/social-content`-skill — geen dedicated output te monitoren |
| Content Strategie & Planning Agent | n.v.t. | — | — | Idee-status, gedekt door generieke `/content-strategy`-skill |

## Partnership Agent

| Sub-agent | Laatste output/actie | Datum | Status | Toelichting |
|---|---|---|---|---|
| Influencer & Creator Agent | IG-zoekscript, lopende database-uitbreiding (o.a. @jayjay.wav als voetbal-referentie) | 2026-08-18 | ✅ OK | Draait actief via Task Scheduler, 2x/week. Zie [[Influencer Database]]. |
| B2B Klanten Agent | Websearch "pilates studio sportschool Rotterdam" — 5 nieuwe kandidaten toegevoegd | 2026-08-21 | 🔁 Teruggestuurd | Zie [[Voorbeelden Gevonden Organisaties (B2B Klanten)]]. Scores op zich correct (MIDDEL, geen direct contact) — maar bij kritische kwaliteitsreview (25-08, op verzoek van lars) bleek de lijst te oppervlakkig om mee te benaderen: alleen naam+categorie+locatie, geen contactgegevens, geen concurrentiecheck. |
| B2B Klanten Agent | Verdiepingsronde: alle 6 kandidaten aangevuld met echte contactgegevens (WebFetch + websearch) en een concurrentie-check (bv. Ultrapadel verkoopt nog geen grip socks — geen conflict) | 2026-08-25 | ✅ Opgelost na correctie | Zie [[Voorbeelden Gevonden Organisaties (B2B Klanten)]]. Eerste echte test van de kwaliteitscontrole-loop: probleem gevonden → gecorrigeerd, zonder dat het naar lars hoefde. |
| Partnerships & Events Agent | 4 HOOG-kandidaten met contactgegevens (Powerleague Rotterdam, Panna Knock Out, Rotterdam Basketbal 3x3, Sport Ondernemers Expo) | onbekend (al aanwezig, datum niet vastgelegd) | ⏳ Wacht op lars | Kandidaten zijn goedgekeurd en klaar, maar niemand is nog benaderd. Sport Ondernemers Expo is 4 nov 2026 — tijdgevoelig, zie [[Voorbeelden Gevonden Organisaties (Events)]]. |
| Partnerships & Events Agent | Websearch (voetbaltoernooien, padel, hardlopen, CrossFit/obstacle run) — 2 nieuwe MIDDEL-kandidaten toegevoegd: Urban Trail Rotterdam (Golazo), Rotterdam Charity Run (Erasmus MC Foundation) | 2026-08-24 | ⏳ Wacht op lars | Uitgevoerd door Denzel (wekelijkse routine), lijst stond sinds 2026-07-17 stil. Getoetst aan [[Voorwaarden Samenwerking]] — geen dubbelingen met [[Pipeline Tracker]]. Zie [[Voorbeelden Gevonden Organisaties (Events)]] en [[Week 2026-08-24]]. Wacht op beoordeling/budget-check door lars. |

## Denzel (Orchestrator)

| Actie | Datum | Status | Toelichting |
|---|---|---|---|
| Wekelijkse weekoverzicht-routine aangemaakt | 2026-08-21 | ⏳ Wacht op lars | Eerste run 24-08-2026. Routine kan pas de laatste vault-stand zien zodra lars de openstaande commit naar GitHub pusht — zie [[Denzel Weekoverzicht — Routine]]. |
| Eerste weekoverzicht uitgevoerd | 2026-08-24 | ✅ OK | Zie [[Week 2026-08-24]]. B2B-lijst was recent genoeg (geen zoekactie nodig), Events-lijst 5+ weken stil — zoekactie uitgevoerd (zie rij hierboven bij Partnerships & Events Agent). |
| Kritische kwaliteitsreview uitgevoerd (op verzoek van lars) | 2026-08-25 | 🚩 Geëscaleerd naar lars | Zie [[Feedback & Iteratie Log]] voor het volledige oordeel. Fundamenteel gat (GA4/Buffer/volledige Shopify-data) blijft geblokkeerd — vereist stuk voor stuk een actie die alleen lars kan zetten (browserlogin, connector-autorisatie, abonnementsupgrade). Niet op te lossen door de agent zelf, hoe vaak ook gevraagd. |
| Weekoverzicht uitgevoerd | 2026-08-31 | 🚩 Geëscaleerd naar lars | Zie [[Week 2026-08-31]]. B2B- en Events-lijst beide recent genoeg (geen zoekactie nodig). Eerste geplande live-site-check en SEO-check konden niet draaien door een egress-blokkade naar higrip.nl in de cloud-omgeving — actie van lars nodig. AI-ontwikkelingen-sectie bevat een relevante vondst (Buffer MCP-server) die het "Buffer ✗"-gat uit de 25-08-review kan dichten. |

---

## Gerelateerde bestanden

- [[soul Denzel]] — De kwaliteitscontrole-loop die dit dashboard voedt
- [[Denzel Weekoverzicht — Routine]] — De geautomatiseerde routine die dit ook bijwerkt
- [[Feedback & Iteratie Log]] — Bevindingen over het bóuwen van agents (dit dashboard gaat over hun lópende werk/output)
- [[Stappenplan — Verdere Bouw]]
