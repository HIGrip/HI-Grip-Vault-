---
id: 2026-10-07-dashboard-v4-animaties-apple
titel: "Dashboard v4 — animaties in Apple-stijl: vensters uit de tegel, vellen, veren en laadblokken"
kerntitel: "Vensters groeien uit de tegel waarop je klikt en krimpen er bij sluiten weer in"
datum: 2026-10-07
bron: los
routine: ""
categorie: Techniek
status: nieuw
prioriteit: P3
samenvatting: "Prototype v4 heeft nu één bewegingssysteem in Apple-stijl: een venster groeit uit het blok waarop je klikt en krimpt daar bij sluiten weer in, op de telefoon schuift het als vel van onderen, een laag dieper schuift van rechts in zoals op de iPhone, en sluiten, menu's, meldingen, tabs en afvinken bewegen mee op veercurves. Tijdens het laden uit Shopify staan grijze laadblokken waar de cijfers komen. Alles is decoratie bovenop de app: de stand verandert direct, alle tests blijven groen en met 'minder beweging' staat het uit."
gerelateerd: [2026-10-07-dashboard-v4-controle-ui-snelheid, 2026-10-06-dashboard-v4-opruimen-focusvensters, 2026-10-07-dashboard-content-funnel-routines-klanten]
vervangt: []
bronbestand: "C:\\Users\\Test\\.claude\\plans\\prototype-bron\\v4\\motion.js"
deadline: ""
---
# Dashboard v4 — animaties in Apple-stijl: vensters uit de tegel, vellen, veren en laadblokken

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[Waar staat wat]] · [[Home]]

## In het kort

- **Vraag van Timo (7 okt):** een sluitanimatie en laadblokken, en meer animatie zoals bij Apple, ook bij het openen van een venster.
- **Gebouwd:** één bestand `motion.js` plus een CSS-blok "v4.2 · motion" in `v4.css`. Het eerdere werk staat in [[2026-10-07-dashboard-v4-controle-ui-snelheid]].
- **Principe:** de stand van de app verandert altijd direct. De animatie speelt op het nieuwe element, of op een kopie van wat weggaat. Logica en tests wachten dus nooit op een animatie.

## Kerncijfers
- **0** · fouten in de functionele test (210 ok), de AI-test (22 ok) en de live-test na de animaties
- **≈ 85 ms** · mediane paginawissel met animaties, tegen ≈ 45 ms zonder (gemeten met echte klok, direct na elkaar)

## Bevindingen

### Wat er beweegt
| Moment | Beweging | Voorbeeld bij Apple |
|---|---|---|
| Venster openen (desktop) | Groeit uit de tegel waarop je klikte; eerst het kader, dan de inhoud | Zoom-overgang in iOS 18, App Store-kaarten |
| Venster sluiten (desktop) | Krimpt terug in diezelfde tegel; is die weg, dan kort verkleinen en vervagen | Idem, omgekeerd |
| Venster op de telefoon | Vel dat van onderen omhoog veert en bij sluiten omlaag glijdt | Sheets in iOS |
| Wacht op jou (lade) | Veert van rechts in, glijdt rechts weg | Zijpanelen in iPadOS |
| Een laag dieper / terug | Nieuwe laag schuift van rechts over de oude, de oude wijkt 30% en dimt; terug omgekeerd | Navigatie (push/pop) in iOS |
| Achtergrond bij een venster | Donkerder én licht wazig | Materialen in iOS/macOS |
| Paneel, menu, palet | Paneel schuift in (telefoon: van onderen); menu groeit vanuit het punt waar je klikte | Contextmenu's in macOS |
| Melding (toast) | Veert omhoog in, zakt weg bij verdwijnen, springt kort op bij een nieuwe tekst | Meldingen in iOS |
| Nieuwe pagina | Pagina komt als geheel binnen, de cijfertegels kort na elkaar | — |
| Grafieken | Lijn tekent zich, vlak vervaagt in, eindpunt springt op; staven komen van onder; donut draait in | Gezondheid, Activiteit |
| Tabs | Het witte bolletje schuift naar de tab die je kiest | Gesegmenteerde knop |
| Taak afvinken | Rondje springt op, regel wordt doorgestreept en verdwijnt, regels eronder schuiven omhoog | Herinneringen |
| Indrukken | Knoppen en tegels geven iets mee (95–98,5%) | iOS |
| Laden uit Shopify | Grijze blokken die rustig pulseren (geen kleurverloop) waar de cijfers komen | Placeholder in iOS-widgets |

### Hoe het werkt
- **Veercurves:** echte veren (stijfheid en demping) omgezet naar een CSS-curve `linear()`, ongeveer SwiftUI `.spring(response .4, damping .8)`. Sluiten gebruikt de iOS-curve `cubic-bezier(.32,.72,0,1)`. Oudere browsers krijgen een gewone curve.
- **Waarnemers (MutationObserver)** op `#layer`, `#overlay`, `#view` en `#toast`. Wat verdwijnt, gaat naar `#ghost` en animeert daar uit, zonder klikbaarheid en zonder id's. De tests zoeken in `#layer` en `#overlay`, dus ze zien die kopieën niet.
- **"Minder beweging"** in het besturingssysteem zet alles uit; het bestaande blok in `app.css` en `MO.off()` dekken dat af.

### Wat de controle vond en oploste
- **Oude CSS-animatie:** `.lwin.focus` had nog zijn eigen `zoomin` en won van `animation: none`. Die speelde daardoor ook af op de kopie bij sluiten, waardoor het venster onzichtbaar werd. Opgelost met een specifiekere regel.
- **Kosten van de paginawissel:** blokken een voor een animeren of de pagina als geheel kost ongeveer hetzelfde, rond 40 ms extra voor het eerste beeld. Gekozen is voor de rustigere variant: de pagina als geheel, alleen de cijfertegels apart. Staafjes animeren nu met één beweging per grafiek in plaats van één per staaf.

### Meetgereedschap (in `prototype-bron/v4`)
- `film.mjs` + `film.py`: een filmstrip van een interactie. Alle animaties worden stilgezet en per beeld naar een exact moment gespoeld, dus de beelden kloppen, ook als een screenshot zelf traag is.
- `perf.mjs` met `RM=1`: dezelfde meting met animaties uit, om het verschil eerlijk te zien.
- Beide scripts sluiten nu de hele Chrome-boom af. Zonder dat bleef de poort bezet en hing de volgende meting.

## Wat niet lukte
Het v4-artifact is nog niet opnieuw gepubliceerd met deze animaties. De crawler-controle op desktop en telefoon liep nog toen deze notitie werd geschreven; de uitslag staat in de aantekening hieronder.

## Bronnen
- `C:\Users\Test\.claude\plans\prototype-bron\v4\motion.js`, `v4.css` (blok "v4.2 · motion"), `layer.js` (`data-depth`), `webshop.js` en `orders.js` (laadblokken)
- Vervolg: [[2026-10-07-dashboard-content-funnel-routines-klanten]]
- Eerder: [[2026-10-07-dashboard-v4-controle-ui-snelheid]], [[2026-10-06-dashboard-v4-opruimen-focusvensters]]

## Aantekeningen
