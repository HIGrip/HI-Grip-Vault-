---
id: 2026-10-02-vault-review
titel: "Vault-review — koppelingen, dubbelingen en foutieve informatie"
kerntitel: "Besluiten van 25-9 stonden alleen in het feitenbestand, niet in de kopieën"
datum: 2026-10-02
bron: los
routine: ""
categorie: Merk
status: in-uitvoering
prioriteit: P1
samenvatting: "De vault is technisch gezond (4 kapotte links op 242 notities), maar feiten stonden op meer plekken dan de regel 'enige plek' toestaat, waardoor besluiten van 25-9 niet overal doorkwamen: 22:00-belofte in alle 7 sportgidsen, vier verschillende live-thema-ID's, pilates nog als B2B-prioriteit. Dit is op 2-10 rechtgezet; wat overblijft zijn besluiten voor Lars en structureel werk (hernoemen, skills naar de vault, rugbygids)."
gerelateerd: [2026-09-28-regressiecheck, 2026-09-25-evaluatie-routines, 2026-09-21-beachhead-rugby, 2026-09-21-weekoverzicht, 2026-09-23-seo-conversietest-run-1, 2026-10-02-obsidian-structuur-ai-agents]
vervangt: []
bronbestand: ""
deadline: ""
---
# Vault-review — koppelingen, dubbelingen en foutieve informatie

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[Waar staat wat]] · [[Home]]

## In het kort

Losse review op verzoek: hoe de vault gekoppeld is, wat dubbel staat, wat ontbreekt en wat fout is. De structuur (feitenbestand, Brand Core, vast notitieformaat, navigatiescript) is sterk. Het zwakke punt is dat feiten na een besluit wel in [[Feiten & Actuele Staat]] belanden, maar niet in de kopieën elders. Alles wat zonder besluit kon, is dezelfde dag rechtgezet (zie Bevindingen); de open punten hieronder vragen een besluit of meer werk.

## Kerncijfers

- **242** · Markdown-notities in de vault
- **4** · Kapotte wikilinks (nu 0)
- **4** · Verschillende "live" thema-ID's in omloop (nu alleen in Technische Procedures)
- **7** · Sportgidsen met de vervallen 22:00-belofte (nu gecorrigeerd)

## Acties

- [x] P1 · Besluit: welk reviewcijfer op drukwerk — 4,6 (Trustpilot) of 4,5 (higrip.nl)
- [x] P2 · Besluit: adviesprijs retail €17,99 naast webshopprijs €17,95 — bewust of gelijktrekken
- [ ] P2 · Besluit: B2B-minimum 5 paar (Evaluatiecriteria) tegenover prijsstaffel vanaf 6 stuks — één ondergrens kiezen
- [x] P2 · Rugby-sportgids schrijven: rugby is beachhead maar heeft geen website-content
- [ ] P2 · Skills naar `.claude/skills/` in de vault zetten zodat cloudroutines ze kunnen gebruiken
- [ ] P3 · Dubbele bestandsnamen hernoemen (14× identiteit.md, 11× _Werkplek.md, routine- en geheugenbestanden met gelijke naam) en agentdefinities meenemen
- [ ] P3 · Oude claude/*-branches op origin opruimen (7 stuks, inhoud staat al in de vault of is off-brand)
- [x] P3 · Onderzoek met vakkennis koppelen: een automatische sectie "Gerelateerd onderzoek" per kennisnotitie in vault_nav.py

## Bevindingen

### Rechtgezet op 2 oktober

- **Verzendbelofte:** alle 7 sportgidsen zeiden "voor 22:00 besteld, dezelfde werkdag verzonden"; nu "binnen 1 werkdag verzonden" (besluit 25-9).
- **Thema-ID's:** [[Update Log]], [[Waar staat wat]], [[Home]] en het Claude-geheugen noemden oude live-ID's. Nu alleen in [[Technische Procedures]].
- **Feitenbestand:** live staat verzending/retour bijgewerkt naar de regressiecheck van 28-9; claimbronnen gelijkgetrokken met de productwaarheid (Friedl 2023 is gemengd bewijs); formuleringsregel toegevoegd; beide reviewcijfers met bron.
- **AVG:** klantnamen in [[Performance Grip Socks 2.0]] §6b ingekort tot voornaam + initiaal.
- **Beachhead:** padel stond als "geen beachhead" in [[Sportgidsen — overzicht en instructies]]; tennis/padel is samen één beachhead.
- **B2B-koers:** [[Aanpak]] zette pilates op 1, [[Evaluatiecriteria (B2B Klanten)]] en [[user]] noemden pilates als doel; pilates is op 17-9 gestopt. Rugbyclubs toegevoegd als clubtype.
- **Founders:** [[user]] noemde Lars als enige opdrachtgever; er zijn drie founders.
- **Achterhaalde waarden:** het SEO-actieplan (22:00, €30, 4 oprichters) en twee backlogpunten (prijzen van 24-9) gemarkeerd.
- **Dubbel:** `Week 2026-09-21` (in 04 én 05), `Content Pillars — Buffer-tags` (opgenomen in [[Content Pillars]]) en `Denzel … Routineprompt stap 9` (vervangen door [[Denzel-weekoverzicht]]) verwijderd; de tabel "Toon per kanaal" staat nog alleen in [[Brand Voice & Tone of Voice]].
- **Oude dashboard-URL** in [[Denzel Weekoverzicht — Routine]] vervangen.
- **Rangorde bij tegenspraak** vastgelegd in `CLAUDE.md` (Canva voor merk, live voor operationele feiten, vault voor de rest).
- **Routines-README:** `.claude/skills/` bestaat niet in de vault; `BEHEER.json`/`OPDRACHTEN.json` ontstaan pas bij de eerste dashboardactie. Nu zo beschreven.
- **Ontbrekend:** [[Concurrentieanalyse]] gevuld met wat de vault al wist.
- **Buiten de vault:** de globale `~/.claude/CLAUDE.md` (€30, "vandaag verzonden", 1.500+, gele CTA, gelprotection-claim) en het Claude-geheugen (22:00, pilates, oude handle en thema) bijgewerkt; back-ups in de scratchpad van de sessie.

### Vervolg 2 oktober: besluiten en uitgevoerd werk

- **Reviewscore:** Lars koos **4,6 ★ (Trustpilot)** als merkcijfer; verwerkt in [[Feiten & Actuele Staat]] en [[Performance Grip Socks 2.0]].
- **Adviesprijs:** retail en webshop allebei **€ 17,95**; de one-pagers met € 17,99 staan als te corrigeren fout in [[Performance Grip Socks 2.0]] §5.
- **Rugbygids:** concept in [[Gripsokken voor rugby]] (regels, clubkous, scrum, natte velden); nog een rugbyfoto en een check door een rugbyer nodig.
- **Gerelateerd onderzoek:** `vault_nav.py` zet nu onder 44 kennisnotities automatisch de onderzoeksnotities die ernaar linken.
- **Hernoemen (niet gedaan, advies: niet doen):** de dubbele namen zitten in paden die 11 agentdefinities, `/denzel` en de Denzel-routine gebruiken, ook op de pc's van Lars en Tigo. Er waren maar twee kale, dubbelzinnige links; die zijn vervangen door volledige paden.
- **Skills naar de vault (niet gedaan, advies: niet doen):** geen enkele routine roept een skill aan; kopiëren maakt een derde versie naast `~/.claude/commands` en de setup-repo. Uitgelegd in de Routines-README.
- **B2B-minimum:** blijft open (zie acties), wacht op een besluit.

### Wat niet zonder besluit kon

Zie Acties. Het historische Growth Radar-basislijn-onderzoek van 15-9 noemt de 1,17 "echte meetdata" van HÏ Grip; dat is categoriebewijs. De notitie is archief en is niet aangepast; de formuleringsregel in het feitenbestand dekt dit voortaan af.

## Wat niet lukte

Stap B (dashboard naar vault) en de publicatie van het dashboard zijn overgeslagen: die horen vanaf het info@-account te gebeuren, deze sessie draait op een persoonlijk account. De volgende routine of /research-sync vanaf info@ neemt deze notitie mee.

## Bronnen

- Linkanalyse van alle wikilinks in de vault (eigen script, 2-10-2026)
- `python 05_Research/_build/build_register.py --check` en `vault_nav.py`
- [[Feiten & Actuele Staat]], [[Performance Grip Socks 2.0]], [[Technische Procedures]], `04_Agent_Infrastructuur/Routines/README.md`, `05_Research/_backlog/ACTIEBACKLOG.md`

## Aantekeningen
