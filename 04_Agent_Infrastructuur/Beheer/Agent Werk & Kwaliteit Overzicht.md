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
| Conversie & Analyse Agent | Live-site-check (eerste geplande run) | 2026-08-31 | ✅ Opgelost na correctie | Eerste poging (ochtend) geblokkeerd door een 403 op de egress-proxy — bleek tijdelijk, tweede poging (later op de dag) werkte (HTTP 200). Site bereikbaar, geen fouten. **Structured data (Organization/WebSite/FAQPage) staat nu live** — de wachtende actie sinds 2026-08-02 is afgerond, [[Update Log]] moet nog bijgewerkt worden. Merknaam overal correct "HÏ Grip"; vertrouwens-elementen (contact, Trustpilot, klantlogo's) aanwezig. Zie [[Week 2026-08-31]]. |
| SEO Agent | SEO-check (eerste geplande run) | 2026-08-31 | ⏳ Wacht op lars | Zelfde tweede poging als de live-site-check hierboven — nu wel uitgevoerd. Bevinding: `<title>` is alleen "HÏ Grip" (7 tekens, geen keyword, ver onder de aanbevolen 50-60) en de meta description is 175 tekens (iets boven de aanbevolen 120-155). Sitemap.xml bereikbaar en geldig (sitemap-index, 9 sub-sitemaps incl. een agentic discovery sitemap). FAQPage-inhoud (8 vragen) inhoudelijk actueel. Concreet titel/description-voorstel staat in [[Week 2026-08-31]] — wacht op akkoord van lars vóór doorvoeren (site-wijziging valt buiten wat deze routine zelf mag). |
| Conversie & Analyse Agent | Live-site-check | 2026-09-07 | ✅ OK | Site bereikbaar (HTTP 200), geen fouten. Merknaam overal correct "HÏ Grip". Vertrouwens-elementen (contact, KVK, Trustpilot, klantlogo's) aanwezig. Zie [[Week 2026-09-07]]. |
| SEO Agent | SEO-check | 2026-09-07 | 🚩 Geëscaleerd naar lars | Titel/description-probleem van 31-08 nog steeds niet opgelost (3 weken open). **Nieuwe, grotere bevinding: structured data is teruggegaan** — op 31-08 stonden Organization+WebSite+FAQPage live, nu (07-09) alleen nog Organization; WebSite en FAQPage zijn verdwenen (ook gecheckt op de losse FAQ-pagina, geen schema gevonden). Oorzaak onbekend, [[Update Log]] loopt hierdoor nog verder achter. Zie [[Week 2026-09-07]]. |

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
| B2B Klanten Agent | Websearch (pilates/sportscholen Rotterdam-regio) — 2 nieuwe MIDDEL-kandidaten toegevoegd: Fervor Pilates, bbb health boutique Rotterdam | 2026-09-07 | ⏳ Wacht op lars | Uitgevoerd door Denzel (wekelijkse routine), lijst stond sinds 2026-08-25 stil (13 dagen). Getoetst aan [[Evaluatiecriteria (B2B Klanten)]] — geen dubbelingen met [[Pipeline Tracker]]. Zijvondst: mogelijke verouderde uitsluiting van Padelclub Rotterdam in [[Voorwaarden Samenwerking]] (nieuwe info wijst op een bestaand pro shop) — gesignaleerd, niet zelf gecorrigeerd. Zie [[Voorbeelden Gevonden Organisaties (B2B Klanten)]] en [[Week 2026-09-07]]. |
| Partnerships & Events Agent | 3 HOOG-kandidaten met contactgegevens (Powerleague Rotterdam, Panna Knock Out, Rotterdam Basketbal 3x3) | onbekend (al aanwezig, datum niet vastgelegd) | ⏳ Wacht op lars | Kandidaten zijn goedgekeurd en klaar, maar niemand is nog benaderd. Sport Ondernemers Expo op 31-08-2026 door lars geschrapt ("niet iets voor ons" — B2B-vakbeurs, geen sportpubliek/activatie), verwerkt in [[Voorwaarden Samenwerking]]. Zie [[Voorbeelden Gevonden Organisaties (Events)]]. |
| Partnerships & Events Agent | Websearch (voetbaltoernooien, padel, hardlopen, CrossFit/obstacle run) — 2 nieuwe MIDDEL-kandidaten toegevoegd: Urban Trail Rotterdam (Golazo), Rotterdam Charity Run (Erasmus MC Foundation) | 2026-08-24 | ⏳ Wacht op lars | Uitgevoerd door Denzel (wekelijkse routine), lijst stond sinds 2026-07-17 stil. Getoetst aan [[Voorwaarden Samenwerking]] — geen dubbelingen met [[Pipeline Tracker]]. Zie [[Voorbeelden Gevonden Organisaties (Events)]] en [[Week 2026-08-24]]. Wacht op beoordeling/budget-check door lars. |
| Partnerships & Events Agent | Websearch (voetbal, streetball, obstacle run) — 1 nieuwe MIDDEL-kandidaat toegevoegd: Outdoor Valley Obstacle Run (Bergschenhoek). Harbour Run Rotterdam bewust niet toegevoegd (Mega-tier, 7.000 deelnemers) | 2026-09-07 | ⏳ Wacht op lars | Uitgevoerd door Denzel (wekelijkse routine), lijst stond sinds 2026-08-24 stil (14 dagen). Getoetst aan [[Voorwaarden Samenwerking]] — geen dubbelingen met [[Pipeline Tracker]]. Zie [[Voorbeelden Gevonden Organisaties (Events)]] en [[Week 2026-09-07]]. |

## Denzel (Orchestrator)

| Actie | Datum | Status | Toelichting |
|---|---|---|---|
| Wekelijkse weekoverzicht-routine aangemaakt | 2026-08-21 | ⏳ Wacht op lars | Eerste run 24-08-2026. Routine kan pas de laatste vault-stand zien zodra lars de openstaande commit naar GitHub pusht — zie [[Denzel Weekoverzicht — Routine]]. |
| Eerste weekoverzicht uitgevoerd | 2026-08-24 | ✅ OK | Zie [[Week 2026-08-24]]. B2B-lijst was recent genoeg (geen zoekactie nodig), Events-lijst 5+ weken stil — zoekactie uitgevoerd (zie rij hierboven bij Partnerships & Events Agent). |
| Kritische kwaliteitsreview uitgevoerd (op verzoek van lars) | 2026-08-25 | 🚩 Geëscaleerd naar lars | Zie [[Feedback & Iteratie Log]] voor het volledige oordeel. Fundamenteel gat (GA4/Buffer/volledige Shopify-data) blijft geblokkeerd — vereist stuk voor stuk een actie die alleen lars kan zetten (browserlogin, connector-autorisatie, abonnementsupgrade). Niet op te lossen door de agent zelf, hoe vaak ook gevraagd. |
| Weekoverzicht uitgevoerd | 2026-08-31 | 🚩 Geëscaleerd naar lars | Zie [[Week 2026-08-31]]. B2B- en Events-lijst beide recent genoeg (geen zoekactie nodig). Eerste geplande live-site-check en SEO-check konden niet draaien door een egress-blokkade naar higrip.nl in de cloud-omgeving — actie van lars nodig. AI-ontwikkelingen-sectie bevat een relevante vondst (Buffer MCP-server) die het "Buffer ✗"-gat uit de 25-08-review kan dichten. |
| Weekoverzicht bijgewerkt (tweede check zelfde dag) | 2026-08-31 | ✅ Opgelost na correctie | Egress-blokkade bleek tijdelijk — live-site-check en SEO-check alsnog uitgevoerd. Belangrijkste bevindingen: structured data staat nu live (wachtende actie sinds 2026-08-02 afgerond), en homepage-title/meta-description hebben een concreet SEO-verbeterpunt (title te kort, description iets te lang). Zie [[Week 2026-08-31]] en de bijgewerkte rijen bij Website Agent hierboven. |
| Weekoverzicht uitgevoerd | 2026-09-07 | 🚩 Geëscaleerd naar lars | Zie [[Week 2026-09-07]]. Beide kandidatenlijsten waren >1-2 weken oud — zoekacties uitgevoerd (2 B2B, 1 Events). Live-site- en SEO-check zonder egress-problemen uitgevoerd. Titel/description-probleem staat nu 3 weken open zonder actie; daarnaast een nieuwe, grotere bevinding — structured data (WebSite/FAQPage) is teruggegaan t.o.v. 31-08, alleen Organization staat nog live. Beide vereisen een beslissing/actie van lars. |

---

## Gerelateerde bestanden

- [[soul Denzel]] — De kwaliteitscontrole-loop die dit dashboard voedt
- [[Denzel Weekoverzicht — Routine]] — De geautomatiseerde routine die dit ook bijwerkt
- [[Feedback & Iteratie Log]] — Bevindingen over het bóuwen van agents (dit dashboard gaat over hun lópende werk/output)
- [[Stappenplan — Verdere Bouw]]
