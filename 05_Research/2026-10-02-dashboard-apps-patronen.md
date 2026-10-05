---
id: 2026-10-02-dashboard-apps-patronen
titel: "Dashboard — patronen uit Linear, Stripe, Shopify, Attio, HubSpot en Asana, verwerkt in prototype v2"
kerntitel: "Eén dataset en afgeleide signalen maken het dashboard betrouwbaar"
datum: 2026-10-02
bron: los
routine: ""
categorie: Techniek
status: nieuw
prioriteit: P2
samenvatting: "De beste werk-apps (Linear, Stripe, Shopify, Attio, HubSpot, Asana) delen een paar vaste patronen. Het belangrijkste: alle schermen rekenen uit één bron, en signalen en tellers worden berekend in plaats van ingevuld. Verder: ⌘K voor alles, opgeslagen weergaven als tabs, snel bekijken zonder de lijst te verlaten, en ongedaan maken in plaats van ‘weet je het zeker?’. Prototype v2 is op die manier herbouwd: elke actie werkt door in alle modules en niets staat meer dubbel."
gerelateerd: [2026-10-02-navigatie-en-takentijdlijn, 2026-09-29-crm-dashboard-voorstel, 2026-09-26-dashboard-ux-onderzoek, 2026-10-02-ai-in-het-dashboard, 2026-10-02-dashboard-ontwerpregels-kpi, 2026-10-03-dashboard-agenda-mail-ads-leveranciers, 2026-10-04-dashboard-herindeling-ai-mail-koppelingen, 2026-10-04-dashboard-bruikbaarheidsaudit]
vervangt: []
bronbestand: "https://claude.ai/artifact/XPnRocf1ZcG1J7pb82QBHy"
deadline: ""
---
# Dashboard — patronen uit Linear, Stripe, Shopify, Attio, HubSpot en Asana, verwerkt in prototype v2

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[Waar staat wat]] · [[Home]]

## In het kort

- **Eén bron, alles afgeleid.** In v1 waren schermen losse plaatjes, waardoor getallen elkaar konden tegenspreken. In v2 rekent elk scherm uit één dataset.
  - Signalen worden berekend: factuur te laat, voorraad + onderweg onder het herbestelpunt, stil in gesprek, herbestelmoment, dubbele relatie. Ze verdwijnen vanzelf zodra de oorzaak weg is.
  - Tellers in de zijbalk tellen alleen wat op jou wacht.
- **Snelheid zoals Linear:**
  - ⌘K zoekt over alle objecten en acties, met de sneltoets ernaast;
  - G-sneltoetsen om te navigeren;
  - J/K om door lijsten te lopen;
  - spatie om snel te bekijken zonder de lijst te verlaten.
- **Ongedaan maken in plaats van bevestigen.** Elke wijziging werkt direct en geeft een melding met *Ongedaan maken*. Een bevestigingsvraag komt alleen bij iets onomkeerbaars (voorbeelddata herstellen).
- **Lijsten zoals Shopify en Attio:**
  - tabs zijn opgeslagen weergaven, en je bewaart je eigen weergave met zoekterm en sortering;
  - sorteren via de kolomkop;
  - rijen selecteren voor bulkacties;
  - lege staten die zeggen wat je nu kunt doen.
- **Relatiepagina zoals HubSpot:** links eigenschappen die je met één klik wijzigt (Attio), in het midden de tijdlijn met een invoerveld, rechts de volgende actie, kerncijfers en open taken.
- **KPI's zoals Stripe:**
  - per tegel één getal, de verandering tegenover de vorige periode, een minigrafiek en de bron met de datum;
  - een periodekiezer (7, 30 of 90 dagen);
  - kleur alleen voor status.
- **Werkdruk zoals Asana:** capaciteit per persoon, rood boven de grens, en slepen om toe te wijzen of te verschuiven.

## Acties

- [ ] P2 · Prototype v2 met Lars en Tigo doorlopen (Ctrl K, slepen, goedkeuren, ongedaan maken) en per module noteren wat mist of anders moet
- [ ] P2 · Besluit: in het echte dashboard echte data tonen waar die bestaat (webshop, research, routines, koppelingen) en alleen nieuwe data invoeren voor wat nog nergens digitaal staat (relaties, orders, taken, voorraad)

## Bevindingen

### Wat de bronnen zeggen
- **Stripe:** een vaste, eigenzinnige home zonder te configureren widgets. Elke tegel heeft één getal plus de vergelijking met de vorige periode en een minigrafiek. Kleur staat alleen voor status. Eén zoekveld zoekt over alle objecten. Lege schermen leggen uit wat de volgende stap is.
- **Linear:**
  - ⌘K is het centrale instappunt; acties staan erin met hun sneltoets, en wat bij de huidige pagina hoort staat bovenaan;
  - het werkt met het toetsenbord;
  - er is een triage-inbox voor nieuw werk, met "later" (snooze) in gewone taal;
  - elk item heeft een eigen URL.
- **Shopify (Polaris):** tabs zijn opgeslagen weergaven. Zoeken en filteren maken een nieuwe weergave, bulkacties staan op geselecteerde rijen, en een lege staat begeleidt naar de volgende stap.
- **Attio:**
  - één lijst met meerdere weergaven (tabel en kanban);
  - kaarten sleep je tussen fases;
  - eigenschappen wijzig je op de plek waar ze staan;
  - een zijpaneel om een record te bekijken.
- **HubSpot:** de recordpagina heeft drie kolommen: eigenschappen, activiteitentijdlijn (komende activiteiten bovenaan) en gekoppelde records.
- **Asana Workload:** de inspanning per persoon tegenover de capaciteit. Een rode lijn betekent overvol, en slepen wijst toe of verschuift.
- **NN/g:** lengte en positie lees je het snelst af. Een dashboard is om in één oogopslag te zien en te handelen, en mensen haken af als het te druk is.
- **Undo tegenover bevestigen:** bevestigingsdialogen leren mensen om zonder lezen door te klikken. Een omkeerbare actie voer je direct uit, met *Ongedaan maken*. Bevestig alleen wat onomkeerbaar is of anderen raakt.

### Wat er in v2 zit
- **Eén dataset** met relaties, orders, taken, voorstellen, voorraad, posts en bestanden. De echte vault-data komt er bij het bouwen in: Shopify-dagen, GA4-weken, Search Console, koppelingen, alle notities en de routinetabel.
- **Hele stromen werken van begin tot eind:**
  - reeks goedkeuren → beltaak op dag 21;
  - uitkomst A, C of D → status en vervolgtaak;
  - offerte → order → verzonden, waarbij de voorraad daalt;
  - inkoop besteld → het voorraadsignaal verdwijnt;
  - dubbele relatie samenvoegen → het signaal verdwijnt.
- **Mobiel:** een onderbalk (Home · To do · + · Akkoord · Meer), panelen als sheet, en tabs die je opzij kunt scrollen.
- **Huisstijl (Brand Core van 1 oktober):**
  - H1 in Black Italic, labels in SemiBold met +0,24 em;
  - titanium als grijs op zwart;
  - iconen met vierkante uiteinden;
  - de CTA is een pill met chevron, nooit gevuld met een accentkleur.

## Bronnen

- [Stripe Dashboard Design Breakdown — 925 Studios](https://www.925studios.co/blog/stripe-dashboard-design-breakdown)
- [Chart layout for Stripe Apps](https://docs.stripe.com/stripe-apps/patterns/chart-layout)
- [Linear’s delightful design patterns — Gunpowder Labs](https://gunpowderlabs.com/2024/12/22/linear-delightful-patterns)
- [Linear — conceptual model](https://linear.app/docs/conceptual-model)
- [Index table — Shopify Polaris](https://polaris-react.shopify.com/components/tables/index-table)
- [Attio — kanban views](https://attio.com/help/reference/managing-your-data/views/create-and-manage-kanban-views) · [Attio — record pages](https://attio.com/help/reference/managing-your-data/records/configure-record-pages)
- [HubSpot — record page layout](https://knowledge.hubspot.com/records/work-with-records)
- [Asana — workload](https://help.asana.com/s/article/portfolio-workload-and-universal-workload?language=en_US)
- [NN/g — Dashboards: preattentive attributes](https://www.nngroup.com/articles/dashboards-preattentive/)
- [Confirmation dialogs and undo — UX Planet](https://uxplanet.org/confirmation-dialogs-how-to-design-dialogues-without-irritation-7b4cf2599956)
- Prototype v2 (privé): https://claude.ai/artifact/XPnRocf1ZcG1J7pb82QBHy · bron in `plans/prototype-bron/`

## Aantekeningen
