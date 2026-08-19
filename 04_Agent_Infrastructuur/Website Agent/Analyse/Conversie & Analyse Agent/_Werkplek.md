# Werkplek — Conversie & Analyse Agent

## Status: in ontwikkeling (sinds 2026-08-09)

Volledige definitie (specialisme, wanneer inschakelen, autonomie, harde grenzen, toon): zie de "Sub-agents"-sectie in identiteit.md in de Website Agent-map (`04_Agent_Infrastructuur/Website Agent/`). Bronkennis ([[Conversie Optimalisatie Checklist]], [[Analytics & KPI Dashboard]]): zie 03_Website_Agent/Analyse.

---

## 2026-08-09 — Skill gebouwd: `/shopify-cro`

**Wat:** Een echte, `/`-activeerbare Claude Code Skill in de gedeelde `HI-Grip-claude-setup`-repo (`commands/shopify-cro.md`). Bevat twee lagen:
- **HÏ Grip-operationeel:** de KPI-filosofie uit [[Website Doel & KPI's]] (resultaat- vs. diagnostische KPI's, elke diagnose moet terugslaan op een resultaat-KPI), GA4-vs-Shopify-Analytics-toegangsstatus, de openstaande punten uit de audit van 2026-07-14, en de harde grens (signaleren + voorstel, zelf niets uitvoeren).
- **Algemene CRO-theorie** ("pure stof"): het LIFT-model, funnel-analyse op absolute drop i.p.v. percentage, statistische significantie/steekproefgrootte bij A/B-testen, attributiemodellen, en waarom Core Web Vitals conversie raken — met een signaal→vraag-tabel.

**Waar:** `github.com/HIGrip/HI-Grip-claude-setup`, gecommit + gepusht (commit `d986534`). Direct bruikbaar na `git pull`.

**Kanttekening:** GA4-toegang zou sinds 1 augustus 2026 beschikbaar moeten zijn — nog niet geverifieerd of de koppeling (`analytics-mcp`) al actief is. Eerste taak voor deze agent zodra hij echt gebruikt wordt: dat checken vóór op aannames verder te werken.

---

## Gerelateerde bestanden

- [[Conversie Optimalisatie Checklist]]
- [[Website Doel & KPI's]]
- [[Analytics & KPI Dashboard]]
- [[Stappenplan — Verdere Bouw]]
