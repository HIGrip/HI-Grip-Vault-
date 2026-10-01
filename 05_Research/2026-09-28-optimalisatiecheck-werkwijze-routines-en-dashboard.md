---
id: 2026-09-28-optimalisatiecheck-werkwijze-routines-en-dashboard
titel: "Optimalisatiecheck werkwijze routines en dashboard"
kerntitel: "Actiecontrole draait sinds 26-09 zonder repository en legt dus niets vast"
datum: 2026-09-28
bron: los
routine: ""
categorie: Techniek
status: nieuw
prioriteit: P1
samenvatting: "De Actiecontrole draait sinds 26-09 elke nacht, maar de routine heeft geen repository gekoppeld: hij stopt na 2 minuten zonder commit, waardoor CONTROLE.json, de Shopify- en GA4-cijfers en de dashboardsync op 26-09 blijven staan. Daarnaast zijn 11 open acties onzichtbaar in twee gearchiveerde weekoverzichten, staan minstens 8 groepen acties dubbel en is het dashboard nog alleen voor info@ zichtbaar."
gerelateerd: [2026-09-25-evaluatie-routines, 2026-09-26-onderzoek-nieuwe-routines, 2026-09-26-dashboard-ux-onderzoek, 2026-09-28-weekoverzicht]
vervangt: []
bronbestand: ""
deadline: ""
---
# Optimalisatiecheck werkwijze routines en dashboard — 28 september 2026

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[Waar staat wat]] · [[Home]]

## In het kort
De keten routine → vault → dashboard werkt voor de onderzoeksroutines: alles van vandaag staat op `HÏ-Grip-Vault-obsidian`. De Actiecontrole, het hart van het afvinken en de dashboardcijfers, legt sinds 26-09 niets meer vast. Oorzaak: de cloudroutine heeft geen bronrepository. Verder lekt er werk weg via archivering en dubbele acties.

## Kerncijfers
- **0** · Commits van de Actiecontrole sinds 26-09 · laatste run "geslaagd"
- **11** · Open acties in gearchiveerde weekoverzichten
- **9** · claude/-branches zonder eigen commits
- **7 van 14** · Routines nog niet aangemaakt op info@

## Acties
- [ ] P1 · Routine "HÏ Grip — Actiecontrole" op info@ bewerken: repository HIGrip/higrip-vault met schrijfrechten toevoegen (nu leeg) en na de run van 29-09 controleren dat CONTROLE.json en _data/ die dag zijn bijgewerkt
- [ ] P1 · Besluit: Research Dashboard via het Share-menu delen met Lars, Tigo en Timo (nu alleen zichtbaar voor info@)
- [ ] P2 · Weekoverzichten 2026-09-14 en 2026-09-21 van status gearchiveerd naar verwerkt zetten, zodat hun 11 open acties weer meetellen of bewust op niet doen gaan
- [ ] P2 · Dubbele acties uit deze notitie (sectie Dubbele acties) laten markeren als dubbel door de actiecontrole, met het backlogpunt als hoofdactie
- [ ] P2 · Denzel-prompt aanvullen: bestaat er al een backlogpunt voor een besluit, verwijs ernaar in plaats van een nieuwe Besluit-actie te maken
- [ ] P2 · Routines/README.md bijwerken: repository heet nu HIGrip/higrip-vault, en per routine de gekoppelde bron als controlepunt in de statustabel
- [ ] P2 · Besluit: Uitvoerder als cloudroutine op info@ aanmaken; zonder Uitvoerder blijven goedkeuringen op het dashboard liggen
- [ ] P3 · Achterhaalde acties op niet doen zetten via het dashboard: 2026-09-04-werkdossier-stand-van-zaken#7a54ab83 (22:00, feitenbestand zegt 1 werkdag), #f9369bdd (GSC-export, vervangen door google_data.py) en 2026-09-25-evaluatie-routines#5c41af01 (één backlog bestaat sinds 25-09)
- [ ] P3 · 9 claude/-branches zonder eigen commits verwijderen en claude/nifty-fermat-kr7pe6 (flyer in serif, juni) beoordelen: overnemen of weg

## Bevindingen

### Actiecontrole: routine zonder repository
- Trigger `trig_01NPCazQ7XMqTc5TkwYJXVrJ`, cron `1 3 * * *` (05:01 NL), laatste run 28-09 03:01 UTC met status SUCCEEDED, duur 2 minuten, 6.118 output-tokens.
- De sessie van die run heeft **geen `sources`** (geen repository) en geen uitvoerbranch. De Growth Radar-sessie van dezelfde ochtend heeft wel `HIGrip/HI-Grip-Vault-` als bron en pusht naar `claude/lucid-thompson-lyt9hi` en de hoofdbranch.
- Zonder repository kan de routine `Actiecontrole.md` niet lezen, dus niets doen: geen commit op de hoofdbranch en geen eigen `claude/...`-branch. Hij faalt dus niet en pusht niet naar een andere branch: hij stopt vroeg zonder werk.
- `CONTROLE.json` `laatste_run` 26-09 05:04 komt uit commit 449133c van Lars (lokaal), niet uit de cloudroutine.
- De prompt verwijst nog correct naar `04_Agent_Infrastructuur/Routines/Actiecontrole.md` ("Werk op branch HÏ-Grip-Vault-obsidian en push met git push origin HEAD:HÏ-Grip-Vault-obsidian").
- Connectors op de routine: Canva, Claude-Docs, Shopify, visualize. Volgens de README hoort alleen Shopify aan; Canva, Claude-Docs en visualize kosten tokens zonder nut. Dat geldt voor alle 6 routines.

### Dashboard
- Gepubliceerde `data/register.js` was byte-gelijk aan de build van 7787c22 (08:18 UTC); na deze sync is versie 3 gepubliceerd met de build van 08:27 UTC.
- De publish meldt "readable by only you": het artifact is **privé**. Lars, Tigo en Timo kunnen het niet openen tot het via het Share-menu gedeeld is. Niets aan gewijzigd.
- Opmerking bij de sync: `acties.py importeer` geeft in `te_verwijderen` doc-id's met `@`, terwijl de db `~` gebruikt. Het command `/research-sync` vangt dat af ("gebruik het id uit het list-resultaat"), maar een routine die `te_verwijderen` letterlijk doorgeeft, verwijdert niets.

### Dubbele acties (5a)
Open acties uit niet-gearchiveerde notities die inhoudelijk hetzelfde zijn:
- Titel/meta oude productpagina: 2026-09-25-search-console#6ae3949f = backlog#52886b90.
- "Grip socks" consolideren: 2026-09-25-search-console#0323b05e = backlog#8f8db388.
- Structured data naar live: 2026-09-28-weekoverzicht#2eb8c419 = backlog#fac26f6c.
- /en/-homepage: 2026-09-28-weekoverzicht#c7d8f1a0 = backlog#2c3eb956.
- Verzend- en retourbeleid gelijktrekken: 2026-09-28-weekoverzicht#4bff672b = backlog#246c61d9 = 2026-09-25-seo-audit#5c1c6209 = 2026-09-23-seo-conversietest-run-1#db685bc3 (en achterhaald: 2026-09-04-werkdossier-stand-van-zaken#7a54ab83).
- u-vorm naar je-vorm: 2026-09-24-growth-radar-cro#76b6296e = 2026-09-15-seo-audit#864864f2 = 2026-09-23-seo-conversietest-run-1#1b318f84.
- Alt-teksten: 2026-09-25-seo-audit#d619f84b = 2026-09-23-seo-conversietest-run-1#b441fff5 = 2026-09-15-seo-audit#7dda01c0.
- SEO-titels en meta's: 2026-09-23-seo-conversietest-run-1#52494c22 = 2026-09-04-werkdossier-stand-van-zaken#ee82c67c.
- Trustpilot: 2026-09-25-seo-audit#13130060 = 2026-09-04-werkdossier-stand-van-zaken#98a99a09 (raakt backlog#10ef70ca).
- Redirects oude URL's: 2026-09-23-seo-conversietest-run-1#b469a68a = 2026-09-16-seo-onderzoek-cloud-routine-website#3e155aa4; /pages/collection-301: 2026-09-25-seo-audit#6d7750aa = 2026-09-04-werkdossier-stand-van-zaken#b7ef376e.
- Rugby-sportpagina: 2026-09-21-beachhead-rugby#5a25b546 overlapt met 2026-09-25-seo-audit#71f4fc5b en #f637edc0.

`CONTROLE.json` telt nu 8 keer `dubbel`; bovenstaande groepen zijn grotendeels nog niet gemarkeerd, ook omdat de actiecontrole sinds 26-09 niet draaide.

### Weekoverzichten op gearchiveerd met open acties (5b)
- 2026-09-14-weekoverzicht: `gearchiveerd`, 3 open P-acties (plus 8 open outreach-regels zonder P-code).
- 2026-09-21-weekoverzicht: `gearchiveerd`, 8 open acties, waarvan een deel (Powerleague/Panna, content-voorstel Tigo, Rotterdam Cup) in 2026-09-28 opnieuw als besluit staat en een deel niet (tennisretailers, checkout-test, Update Log).
- Volgens PROCEDURE A3 (sinds 28-09) hoort dat `verwerkt` te zijn. Beide stammen van vóór de nieuwe regel. `acties.py open` slaat ze nu over, dus die acties staan nergens.

### Routineprompts (5c)
- Geen prompt in `04_Agent_Infrastructuur/Routines/` bevat de oude link KVXyNSCNEbKcj2EQGqkpuV of "Nog geldige acties neem je over".
- Geen prompt stopt bij een ArtifactData-fout: Actiecontrole ("ga altijd door") en Uitvoerder ("werk met wat in de vault staat") gaan door. De enige stops zijn guards, een buildfout en een geweigerde push, zoals bedoeld.
- De oude link staat nog in twee archiefdocumenten in `04_Agent_Infrastructuur/Beheer/` (Denzel stap 9, 17-09). Die worden niet door routines gelezen.
- De Growth Radar publiceerde vanochtend 03:41 UTC nog naar het oude artifact (van vóór de verhuizing om ~08:00); vanaf morgen gebruikt hij de nieuwe link via CLAUDE.md.

### Rolverdeling en opbrengst (5d)
- Overlap: op 28-09 meldden SEO-regressiecheck, Denzel en SEO- en conversietest dezelfde twee problemen (/en/-homepage, verzend-/retourpagina's). Denzel maakte er nieuwe Besluit-acties van naast bestaande backlogpunten; de README zegt dat Denzel geen eigen site-check doet en kansen niet herhaalt.
- 2026-09-25-seo-audit staat op `routine: seo-regressiecheck` maar is een volledige audit met 24 acties, wat eerder bij de SEO- en conversietest hoort.
- Geen nieuwe punten: de SEO- en conversietest run 2 meldt "geen nieuwe bevindingen, alles al open in de backlog" (wel concepten gebouwd). De andere routines leverden de afgelopen 14 dagen wel nieuwe punten. De 7 routines met status "Nog aanmaken" hebben nog nooit gedraaid.
- Growth Radar: geen notitie of commit op zaterdag 26-09; zondag 27-09 deed hij alleen onderhoud (volgens plan).

### Git (5e)
Alle routineruns van de laatste 7 dagen staan ook op `HÏ-Grip-Vault-obsidian`: elke `claude/...`-branch van 25–28 september heeft 0 eigen commits. Geen routine pusht alleen naar een losse branch. De enige branches met eigen werk: `claude/fervent-sagan-8bes8f` (1 commit, 25-09; dezelfde patch staat al op de hoofdbranch als ee49c53) en `claude/nifty-fermat-kr7pe6` (2 flyer-commits, juni).

### Versheid data (5f)
Peilmoment 28-09 ~10:30 NL.
- `kpi.json` 26-09 05:47, `koppelingen.json` 26-09 05:47, `shopify.json` 26-09 02:40: ouder dan 2 dagen (schrijver: Actiecontrole).
- `agenda.json` bestaat niet: het dashboard toont "nog niet gekoppeld".
- `cwv.json` 28-09 06:08 en `sync.json` 28-09 10:26: vers.

## Wat niet lukte
De transcripten van de Actiecontrole-runs van 27 en 28-09 zijn niet leesbaar vanuit deze sessie (geen list_events). De oorzaak is afgeleid uit de sessiegegevens: geen bronrepository, geen uitvoerbranch, 2 minuten looptijd. Met wie het dashboard buiten info@ gedeeld is, is niet uit te lezen; de publish meldt "readable by only you".

## Bronnen
- `list_triggers` en `get_session` (claude.ai/code/routines) voor Actiecontrole en Growth Radar, 28-09.
- `git log` per `claude/...`-branch tegen `origin/HÏ-Grip-Vault-obsidian`.
- `python 05_Research/_tools/acties.py open`, `05_Research/_backlog/CONTROLE.json`, `05_Research/_data/*.json`, `05_Research/_geheugen/*.md`.
- `04_Agent_Infrastructuur/Routines/README.md` en de promptbestanden.

## Aantekeningen
