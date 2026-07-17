# API & Tool Connections

> Technische tool-regels die voor meerdere agents (kunnen) gelden — niet gebonden aan één hoofdagent. Agent-specifieke tool-afspraken (bv. het IG-zoekscript) blijven in het `soul.md` van die agent staan; hier komt het pas bij zodra een regel breder relevant wordt.

---

## Browser-automatisering — Chrome-kill regel

**Regel:** nooit alle Chrome-processen killen. Alleen het PID bijhouden van een door de agent zelf gestarte Chrome-instantie, en uitsluitend dat proces sluiten.

**Why:** een eerdere poging killte alle openstaande Chrome-vensters, inclusief die lars zelf open had staan — dat mag nooit meer gebeuren.

**Geldt nu voor:** Partnership Agent / Influencer & Creator Agent (IG-zoekscript). Van toepassing op elke toekomstige agent die zelf een browser aanstuurt.

---

## Nog aan te vullen

- Overige tool/API-koppelingen zodra ze ontstaan (bv. Shopify-admin/GA4-toegang vanaf 1 augustus 2026 — zie [[Stappenplan — Verdere Bouw]])

---

## Gerelateerde bestanden

- [[Agent Hiërarchie & Structuurschema]]
- [[Agent Bestandsschema (Soul, Identiteit, User)]]
