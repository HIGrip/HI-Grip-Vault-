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
| Conversie & Analyse Agent | — Nog geen output | — | — | Skill (`/shopify-cro`) gebouwd 2026-08-09, nog niet ingezet sindsdien |

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
| B2B Klanten Agent | Websearch "pilates studio sportschool Rotterdam" — 5 nieuwe kandidaten toegevoegd | 2026-08-21 | ✅ OK | Zie [[Voorbeelden Gevonden Organisaties (B2B Klanten)]]. Scores allemaal MIDDEL (nog geen direct contact) — dat is correct volgens de criteria, geen afwijking. |
| Partnerships & Events Agent | 4 HOOG-kandidaten met contactgegevens (Powerleague Rotterdam, Panna Knock Out, Rotterdam Basketbal 3x3, Sport Ondernemers Expo) | onbekend (al aanwezig, datum niet vastgelegd) | ⏳ Wacht op lars | Kandidaten zijn goedgekeurd en klaar, maar niemand is nog benaderd. Sport Ondernemers Expo is 4 nov 2026 — tijdgevoelig, zie [[Voorbeelden Gevonden Organisaties (Events)]]. |

## Denzel (Orchestrator)

| Actie | Datum | Status | Toelichting |
|---|---|---|---|
| Wekelijkse weekoverzicht-routine aangemaakt | 2026-08-21 | ⏳ Wacht op lars | Eerste run 24-08-2026. Routine kan pas de laatste vault-stand zien zodra lars de openstaande commit naar GitHub pusht — zie [[Denzel Weekoverzicht — Routine]]. |

---

## Gerelateerde bestanden

- [[soul Denzel]] — De kwaliteitscontrole-loop die dit dashboard voedt
- [[Denzel Weekoverzicht — Routine]] — De geautomatiseerde routine die dit ook bijwerkt
- [[Feedback & Iteratie Log]] — Bevindingen over het bóuwen van agents (dit dashboard gaat over hun lópende werk/output)
- [[Stappenplan — Verdere Bouw]]
