---
id: 2026-10-07-dashboard-v4-controle-ui-snelheid
titel: "Dashboard v4 — controle op ontwerp, telefoon, animaties en snelheid, met fixes"
kerntitel: "Randen, kleine tekst en de telefoonweergave rechtgezet; paginawissel nu 47 ms"
datum: 2026-10-07
bron: los
routine: ""
categorie: Techniek
status: nieuw
prioriteit: P3
samenvatting: "De controle van prototype v4 vond zes afwijkingen van de eigen afspraken; vier zijn opgelost (randen onder 3:1, tekst onder 11 px, de drukke telefoonweergave en tekst die uit een CRM-kaart liep), het aantal filters blijft (besluit Timo) en de volt-gevulde menuknop blijft. Een paginawissel kost nu 47 ms (was 91–136 ms) en de klikcrawler draait parallel, zodat een volledige controle van desktop en telefoon in ongeveer 45 minuten klaar is in plaats van vele uren."
gerelateerd: [2026-10-06-dashboard-v4-opruimen-focusvensters, 2026-10-07-dashboard-stand-doel-optimalisaties, 2026-10-04-dashboard-bruikbaarheidsaudit]
vervangt: []
bronbestand: "C:\\Users\\Test\\.claude\\plans\\prototype-bron\\v4"
deadline: ""
---
# Dashboard v4 — controle op ontwerp, telefoon, animaties en snelheid, met fixes

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[Waar staat wat]] · [[Home]]

## In het kort

- **Vraag van Timo:** is het testdashboard echt af, visueel, op de telefoon, in animaties en snelheid, en zoals afgesproken?
- **Antwoord:** functioneel wel, maar zes punten weken af van de afspraken uit de [[2026-10-04-dashboard-bruikbaarheidsaudit|bruikbaarheidsaudit]].
- **Besluiten van Timo (7 okt):** randen, tekstgrootte, telefoon en de uitlopende tekst aanpassen. Het aantal filters (Mail 5, andere pagina's 4) blijft. De volt-gevulde actieve menuknop blijft.
- **Alles opgelost en opnieuw gemeten.**

## Kerncijfers
- **47 ms** · mediane paginawissel op desktop · was 91–136 ms
- **26 → 0** · tekstjes kleiner dan 11 px (eerste meting 318)
- **0** · fouten, "werkt nog niet" en terugval naar Home in de klikcrawler, desktop en telefoon (5.600+ klikken per breedte)
- **1778 px** · lengte van Home op de telefoon · was 2477 px, knoppen 112 → 29

## Bevindingen

### Wat is aangepast
| Punt | Oorzaak | Oplossing |
|---|---|---|
| Randen onder 3:1 | Icoonknoppen, chips en het actieve keuzeveld gebruikten nog de zwakke lijnkleur; het v3.0-blok dekte alleen velden en vinkjes | Allemaal op de rand van 3:1 (`--ctl`). Prioriteit P2 in licht krijgt een donkere pumpkin, zoals rood al `--crit-ink` had |
| Tekst onder 11 px | Avatars rekenden de lettergrootte uit als 36% van het rondje (20 px → 7 px); chips en labels stonden op 10 px | Avatars minimaal 24 px met minimaal 11 px tekst; alle 10 px-maten naar 11 px |
| Telefoon te druk | Home toonde eerst cijfers en grafieken en had 71 dagknoppen; het CRM-bord was een rij kolommen om opzij te vegen; Research had 61 hoge kaarten | Home: eerst Vraagt aandacht en Vandaag, grafiek en donut alleen op desktop, dagstrook 18 dagen. CRM: lijst per fase. Research: compacte tabel, eerst de 25 nieuwste, cijfers naast elkaar, lege voetbanden weg |
| Tekst uit de CRM-kaart | `.clip` op een inline element knipt niet af | De volgende stap loopt over maximaal twee regels |

### Animaties
- **Goed:**
  - kort (60–220 ms) met één vaste curve;
  - focusvenster zoomt in, lade schuift;
  - geen `transition: all`;
  - "minder beweging" van het besturingssysteem wordt gerespecteerd.
- **Ontbreekt nog (niet gebouwd):**
  - een sluitanimatie voor vensters (ze verdwijnen direct);
  - skeletblokken tijdens het laden uit Shopify. Nu staat er alleen "Laden uit Shopify…" en verspringt de pagina als de data binnenkomt.

### Snelheid
- **Gemeten met echte klok** via het DevTools-protocol van Chrome, ook met een 4× tragere CPU (telefoon).
- **Pieken van 2–5 seconden** in de eerste meting kwamen door de gelijktijdige crawler, niet door het dashboard; zonder belasting is de langste pagina 134 ms (Agenda).
- **Opgelost:**
  - getallen opmaken maakte bij elke aanroep een nieuwe opmaker (615 ms in het profiel);
  - de controle op dubbele relaties vergeleek alle paren bij elke weergave;
  - grafieken maten en tekenden om en om (dubbele opmaakberekening) en werden nooit opgeruimd.
- **Telefoon met 4× tragere CPU:** mediaan 58 ms, traagst 282 ms.

### Meetgereedschap (in `prototype-bron/v4`)
- `pcrawl.py`: de klikcrawler met meerdere Chrome-processen tegelijk, een wachtrij van één route per taak. 74 routes in ongeveer 43 minuten met 2 workers per breedte. Voorheen: meer dan 15 minuten per 3 routes.
- `perf.mjs`: de snelheidsmeting (paginawissel, focusvenster, lange taken), met `PROFILE=1` het CPU-profiel per functie.
- `_tiny.js`: elke tekst onder 11 px per scherm.

## Wat niet lukte
De Playwright-koppeling van deze sessie kon de lokale pagina niet openen (`file://` geblokkeerd, en de lokale server is daar niet bereikbaar). Daarom is gemeten via Chrome zelf met `perf.mjs`. Het artifact van v4 is nog niet opnieuw gepubliceerd met deze fixes.

## Bronnen
- Bron en meetscripts: `C:\Users\Test\.claude\plans\prototype-bron\v4\` (`v4.css` blokken "v4.1", `core.js` `av`/`relAv`/`nf`/`dupPairs`, `layer.js` `drawCharts`, `home.js`, `tpl.js`)
- Afspraken: `plans/modules/17-bruikbaarheid.md`, blauwdruk §10 (telefoon: kanban wordt lijst per status)
- Eerder: [[2026-10-06-dashboard-v4-opruimen-focusvensters]], [[2026-10-07-dashboard-stand-doel-optimalisaties]]

## Aantekeningen
