# Werkplek — SEO Agent

## Status: in ontwikkeling (sinds 2026-08-09)

Volledige definitie (specialisme, wanneer inschakelen, autonomie, harde grenzen, toon): zie de "Sub-agents"-sectie in identiteit.md in de Website Agent-map (`04_Agent_Infrastructuur/Website Agent/`). Bronkennis ([[SEO Strategie & Keywords]]): zie `03_Website_Agent/SEO/Strategie`.

---

## 2026-09-16 (vervolg) — Eerste volledige audit + Critical-actieplan

**Wat:** Volledige `/seo audit` (12 deelaudits) op higrip.nl gedraaid, health score 59/100. Alle 5 Critical-punten uitgezocht en vergeleken tegen het werktheme (`#200269168967`) om te weten wat al is opgelost bij publicatie vs. wat los in Admin moet. Root cause van de trycloudflare-devtunnel-bug gevonden (vergeten test-URL in de Amose-bundle-app, geen reden om over te stappen). Bijvangst: oud, ongebruikt "Bundler"-app-blok verwijderd uit het werktheme.

**Waar:** volledig uitgeschreven in [[Claude SEO Plugin — Skills & Agents]] (`03_Website_Agent/SEO/Technisch`), inclusief tabel met [LARS]-acties voor morgen. Visueel overzicht: [HÏ Grip SEO Audit](https://claude.ai/artifact/J4pGSpFe1TmWN5HLBqgMm3).

**Open beslissing voor lars:** collectiepagina "gripsokken voetbal" botst met het merk-brede-principe uit [[SEO Strategie & Keywords]] — nog niet doorgevoerd, wacht op akkoord.

---

## 2026-09-16 — Claude SEO plugin toegevoegd

**Wat:** De `claude-seo` Claude Code plugin geïnstalleerd — 25 sub-skills + 18 specialist-agents voor technische SEO, E-E-A-T, schema, GEO/AI Overviews, lokaal, e-commerce en i18n via `/seo <subcommando>`. Veel breder dan `/shopify-seo`; die laatste blijft de HÏ Grip-specifieke laag. Volledige documentatie: [[Claude SEO Plugin — Skills & Agents]] in `03_Website_Agent/SEO/Technisch`.

**Waar:** Plugin zelf staat niet in de vault of `HI-Grip-claude-setup`-repo (het is een losse marketplace-plugin, geen eigen skill-bestand) — installatiestappen voor collega's staan wel in die repo (`claude-seo-setup.md`).

---

## 2026-08-09 — Skill gebouwd: `/shopify-seo`

**Wat:** Een echte, `/`-activeerbare Claude Code Skill in de gedeelde `HI-Grip-claude-setup`-repo (`commands/shopify-seo.md`), niet alleen een vault-omschrijving. Bevat twee lagen:
- **HÏ Grip-operationeel:** het merk-brede-i.p.v.-sport-specifieke SEO-principe, waar title/meta echt leven (Shopify Admin, niet theme-code), de status van de al-geïmplementeerde structured data (2026-08-02), en de nieuwe Shopify 2026-functies (`/llms.txt`, `/agents.md`).
- **Algemene SEO-theorie** ("pure stof", op verzoek van lars): crawling→indexing→ranking, ranking-factoren gegroepeerd, E-E-A-T, zoekintentie, entity-based SEO/topical authority, wat structured data wel/niet doet, interne linkverdeling — met een symptoom→oorzaak-tabel.

**Waar:** `github.com/HIGrip/HI-Grip-claude-setup`, gecommit + gepusht (commit `d986534`). Direct bruikbaar na `git pull`.

**Kanttekening:** de vault-notitie [[SEO Strategie & Keywords]] blijft de bron van waarheid voor actuele HÏ Grip-specifieke keyword-prioriteiten — de skill verwijst daarnaar, dupliceert het niet.

---

## Gerelateerde bestanden

- [[SEO Strategie & Keywords]]
- [[Claude SEO Plugin — Skills & Agents]]
- [[Conversie Optimalisatie Checklist]]
- [[Stappenplan — Verdere Bouw]]
