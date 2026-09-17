# Denzel Weekoverzicht — Routineprompt stap 9 (2026-09-17)

> **Handmatige stap voor lars.** De routine-id uit [[Denzel Weekoverzicht — Routine]] (`trig_01D9XwMiVvuq1FWr7CLoYTmN`) gaf op 17-09-2026 een 404 via de routine-API, dus de prompt kon niet automatisch worden bijgewerkt. Open https://claude.ai/code/routines, zoek de maandag-routine van Denzel, en vervang in de prompt de stap die het weekoverzicht naar `04_Agent_Infrastructuur/Beheer/Weekoverzicht/` schrijft door de tekst hieronder. Alle andere stappen (voortgang, zoekacties, live-site-check, SEO-check, GA4-funnel-check, AI-nieuws, vooruitblik, Agent Werk & Kwaliteit Overzicht, commit + push) blijven exact zoals ze zijn.
>
> Staat de routine er niet meer? Dan is hij verwijderd en moet hij opnieuw worden aangemaakt (repo `https://github.com/HIGrip/HI-Grip-Vault-`, branch `HÏ-Grip-Vault-obsidian`, cron `0 6 * * 1` UTC, model claude-sonnet-5) met de volledige routinebeschrijving uit [[Denzel Weekoverzicht — Routine]] plus onderstaande stap.

---

## Te plakken tekst (vervangt de bestaande "schrijf het weekoverzicht"-stap)

```
STAP — WEEKOVERZICHT ALS ONDERZOEKSNOTITIE

Lees eerst `05_Research/_build/PROCEDURE.md` in de repo en volg sectie A, met deze invulling:

1. Schrijf het weekoverzicht NIET meer naar `04_Agent_Infrastructuur/Beheer/Weekoverzicht/` maar als notitie naar `05_Research/JJJJ-MM-DD-weekoverzicht.md` (datum = de maandag van de run, bijv. `05_Research/2026-09-21-weekoverzicht.md`).

2. Frontmatter exact in dit formaat (platte YAML-subset, strings tussen dubbele aanhalingstekens, lijsten inline):
---
id: JJJJ-MM-DD-weekoverzicht
titel: "Denzel Weekoverzicht — JJJJ-MM-DD"
datum: JJJJ-MM-DD
bron: routine
routine: "denzel-week"
categorie: Merk
status: nieuw
prioriteit: P2
samenvatting: "Twee zinnen: het belangrijkste signaal van deze week en wat het voor higrip.nl betekent."
gerelateerd: [<id van vorige week>]
vervangt: [<id van vorige week>]
bronbestand: ""
deadline: ""
---
Kies `categorie: CRO`, `SEO`, `B2B`, `Compliance` of `Techniek` in plaats van `Merk` als één thema de week duidelijk domineert. Zet `prioriteit: P1` als er een punt is dat deze week moet gebeuren (bijv. 0 orders bij begonnen checkouts). Vul een `deadline` alleen als een concrete datum in de week naar voren komt.

3. Body, in deze volgorde van koppen:
# Denzel Weekoverzicht — JJJJ-MM-DD
## In het kort        (2–3 zinnen)
## Bevindingen        (hierin de vertrouwde secties als ###: Voortgang per hoofdagent · Wat ik deze week zelf heb opgepakt · Live-site-check · SEO-check · GA4-funnel-check t.o.v. benchmarks · Openstaande beslissingen voor lars · Vooruitblik — komende week · AI-ontwikkelingen die relevant kunnen zijn)
## Acties             (elke openstaande beslissing voor lars als `- [ ] P1 · tekst`, `- [ ] P2 · tekst` of `- [ ] P3 · tekst` — één regel per actie, géén acties overnemen uit de growth-radar-backlog)
## Bronnen            (o.a. `[[Denzel Weekoverzicht — Routine]]`, GA4-property 476032345, gebruikte webbronnen)
## Aantekeningen      (leeg laten)
Wikilinks naar andere vault-bestanden zijn gewenst.

4. Verbanden (procedure A3): zet in de notitie van VORIGE week `status: gearchiveerd`, en vink daar de acties af die je in de nieuwe notitie hebt overgenomen, met de toevoeging `— overgenomen in Week JJJJ-MM-DD`. Vul in die oudere notitie ook `gerelateerd` aan met het nieuwe id.

5. Build (procedure A4): draai `python 05_Research/_build/build_register.py`. Exit 0 is verplicht; bij een validatiefout repareer je de notitie (niet het script) en draai je opnieuw.

6. Commit + push (procedure A6): `git add 05_Research` plus de andere aangeraakte bestanden, commit-bericht `research: JJJJ-MM-DD-weekoverzicht geregistreerd`, push naar de branch `HÏ-Grip-Vault-obsidian`.

7. NIET publiceren naar het dashboard — dat doet de dagelijkse lokale Growth Radar-routine. Wel in je afsluitende bericht één regel: welke notitie geregistreerd, hoeveel verbanden bijgewerkt, en dat het dashboard (https://claude.ai/artifact/KVXyNSCNEbKcj2EQGqkpuV) bij de eerstvolgende dagelijkse run bijwerkt.
```

---

## Controle na het plakken

- Eerstvolgende maandag: staat er een `05_Research/JJJJ-MM-DD-weekoverzicht.md` in de repo en heeft de vorige week `status: gearchiveerd`?
- Draait de lokale Growth Radar daarna, dan verschijnt de week vanzelf op het dashboard.
- Werkt het niet: `git log` in de vault toont of de routine gepusht heeft; het run-log staat op https://claude.ai/code/routines.
