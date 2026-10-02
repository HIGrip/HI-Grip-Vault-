---
id: 2026-10-02-navigatie-en-takentijdlijn
titel: "Dashboard — navigatie (alle menu's) en To do als tijdlijn per persoon"
kerntitel: "Zijbalk in 4 groepen, max 3 niveaus; To do wordt een tijdlijn met een rij per persoon"
datum: 2026-10-02
bron: los
routine: ""
categorie: Techniek
status: nieuw
prioriteit: P2
samenvatting: "Het dashboard krijgt een zijbalk in vier groepen (Home · Werk · Inzicht · Systeem) met per module 3–6 submenu's in een pill-balk, en nooit meer dan drie niveaus diep. To do wordt standaard een tijdlijn met een rij per persoon (Lars, Tigo, Timo, Nog niemand), waarin je met slepen de datum, eigenaar of duur wijzigt en per dag ziet wie overvol zit."
gerelateerd: [2026-09-29-crm-dashboard-voorstel, 2026-09-26-dashboard-ux-onderzoek]
vervangt: []
bronbestand: "C:\\Users\\Test\\.claude\\plans\\modules\\00-navigatie.md"
deadline: ""
---
# Dashboard — navigatie (alle menu's) en To do als tijdlijn per persoon

## In het kort

- **Navigatie in drie niveaus:**
  - de zijbalk (module);
  - de pill-balk bovenin (submenu);
  - binnen het scherm (tabbladen, panelen, detailpagina's met een kruimelpad).

  Dieper gaat het nergens. Op elk submenu kun je linken, dus je kunt een link naar een scherm delen.
- **De zijbalk staat in groepen.**
  - Home (los);
  - WERK: To do, CRM, Content;
  - INZICHT: Webshop, Financiën, Research;
  - SYSTEEM: Bestanden, AI & agents, Instellingen.

  Tien modules is boven de grens van 5–7 waarboven je volgens de bronnen groepslabels nodig hebt. Daarom de groepen, die naar doel zijn ingedeeld en niet naar de techniek.
- **Altijd bovenin:**
  - ⌘K (zoeken en naar een scherm gaan);
  - Vraag Denzel;
  - + snel toevoegen;
  - meldingen;
  - profiel.

  Op mobiel komt er een onderbalk met 5 knoppen: Home · To do · + · Akkoord · Meer.
- **To do wordt een tijdlijn.**
  - Een rij per persoon plus een rij *Nog niemand*, met de dagen als kolommen en een kolom *Verlopen*.
  - Elke taak is een balk in de kleur van de module waar hij vandaan komt, met een P-badge.
  - Slepen: opzij verandert de datum, naar een andere rij verandert de eigenaar, aan de rand verandert de duur.
  - Onder elke rij een bezettingsbalk per dag (geplande uren tegenover de capaciteit). Wie over de capaciteit gaat, kleurt rood, en Denzel stelt een verschuiving voor. Een mens geeft akkoord.
  - Lijst, Bord en Gedaan blijven als tabbladen.
- **Bij het tekenen gevonden:** de voorraadcheck moet *voorraad + onderweg* tellen. Anders vraagt het systeem opnieuw om bij te bestellen terwijl er al een levering onderweg is. Verwerkt in `plans/modules/06-financien-voorraad.md`.

## Acties

- [ ] P2 · Besluit: standaardcapaciteit voor de To do-tijdlijn, voorstel 4 uur per werkdag per persoon, per persoon aan te passen in Instellingen › Gebruikers
- [ ] P2 · Het klikbare test-prototype van het dashboard doorlopen en per module noteren wat mist of anders moet

## Bevindingen

### Navigatie: wat de bronnen zeggen en wat we overnemen
- **Zijbalk voor apps met veel onderdelen, een bovenbalk alleen voor wat overal geldt** (zoeken, account, meldingen, een maakknop). De meeste volwassen producten combineren die twee. Wij doen dat ook.
- **5–7 hoofdonderdelen, daarboven groepslabels.** Groepeer naar het doel van de gebruiker, niet naar de organisatie of de database. Onze groepen Werk (doen), Inzicht (kijken) en Systeem (beheren) volgen dat.
- **Submenu's als tabbladen binnen het onderdeel** (bijv. Overzicht, Instellingen, Activiteit), met kruimelpaden voor detailpagina's. Bij ons zijn dat de pill-balk en het kruimelpad op relatie-, notitie- en routinepagina's.
- **De command palette (⌘K) komt naast de zichtbare navigatie, niet in plaats ervan.**
- **Mobiel:** maximaal 5 knoppen in een onderbalk, de rest via *Meer*.

### Tijdlijn en bezetting: hoe grote tools het doen
- **Asana en Monday tonen dezelfde taken als lijst, bord, kalender, tijdlijn en *workload*.** Workload laat per persoon zien hoe vol iemand zit (capaciteitsbalken), en slepen past de eigenaar of de datum aan. Dat nemen we over: één takenlijst, vier weergaven.
- **Swimlanes per persoon zitten niet standaard in de tijdlijn van Asana.** Gebruikers vragen er al jaren om op het forum. Voor drie mensen is precies dat het nuttigst: daarom combineren we tijdlijn en workload in één scherm (rij = persoon).
- **Voor ons klein:** geen afhankelijkheden tussen taken, geen sprints en geen mijlpalen. Een taak heeft een start, een deadline, een geschatte duur, een eigenaar en een bron (module).

## Bronnen

- [SaaS Navigation UX Patterns — saasui.design](https://www.saasui.design/blog/saas-navigation-ux-patterns)
- [SaaS navigation menu design — Lollypop](https://lollypop.design/blog/2025/december/saas-navigation-menu-design/)
- [Sidebar design for web apps — ALF Design Group](https://www.alfdesigngroup.com/post/improve-your-sidebar-design-for-web-apps)
- [Asana Workload](https://asana.com/features/resource-management/workload)
- [Asana: Lists, Boards, Calendar en Timeline](https://asana.com/inside-asana/manage-workflow-project-views)
- [Asana Forum — "Please add swimlanes to Timeline"](https://forum.asana.com/t/please-add-swimlanes-to-timeline/24745)
- Uitwerking (lokaal): `plans/modules/00-navigatie.md`, `plans/modules/02-todo.md`, `plans/dashboard-blauwdruk.md`

## Aantekeningen
