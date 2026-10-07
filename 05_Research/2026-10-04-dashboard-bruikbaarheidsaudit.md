---
id: 2026-10-04-dashboard-bruikbaarheidsaudit
titel: "Dashboard — bruikbaarheidsaudit: werkt elke knop, is het rustig op de telefoon en klopt het contrast?"
kerntitel: "Elke knop werkt nu; telefoon rustiger, randen 3:1, geen volt-gevulde tegels meer"
datum: 2026-10-04
bron: los
routine: ""
categorie: Techniek
status: nieuw
prioriteit: P2
samenvatting: "Een automatische klikronde over alle 80 schermen (ruim 2.500 klikken) vond twee echte fouten en acht knoppen die stil bleven bij een leeg formulier; die zijn opgelost en de ronde geeft nu 0 fouten op desktop en telefoon. Het drukke gevoel kwam vooral van de telefoon (grote KPI-tegels met grafiek vóór de taken, drie navigatielagen, tot zes witte knoppen per scherm) en van te zwakke randen: knoppen, velden en vinkjes hadden 1,1 tot 1,7:1 contrast, de norm is 3:1. Volt werd als vulling gebruikt op tegels die juist achterliepen, en de takentijdlijn kleurde per module in plaats van per status; beide zijn rechtgezet."
gerelateerd: [2026-10-04-dashboard-herindeling-ai-mail-koppelingen, 2026-10-02-dashboard-ontwerpregels-kpi, 2026-09-26-dashboard-ux-onderzoek, 2026-10-02-dashboard-apps-patronen, 2026-10-04-dashboard-efferd-volgorde-cijfers, 2026-10-06-dashboard-v4-opruimen-focusvensters, 2026-10-07-dashboard-v4-controle-ui-snelheid]
vervangt: []
bronbestand: "https://claude.ai/artifact/XPnRocf1ZcG1J7pb82QBHy"
deadline: ""
---
# Dashboard — bruikbaarheidsaudit: werkt elke knop, is het rustig op de telefoon en klopt het contrast?

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[Waar staat wat]] · [[Home]]

## In het kort

- **Werkt alles?** Een klikronde over alle schermen klikte elke knop, tab en filter aan, plus elke knop in het paneel of menu dat daarbij openging. Er bleken twee echte fouten te zijn:
  - na "Voorbeelddata herstellen" crashten Notities en Sparren;
  - bij een teamorder meldde "Link kopiëren" ook "gekopieerd" als het klembord geblokkeerd was.
  - Daarnaast deden acht knoppen niets bij een leeg formulier, zonder enige melding.
  - Nu geeft de ronde 0 fouten op desktop en telefoon. Geen enkele knop zegt nog "werkt nog niet".
- **Waarom het druk voelde:**
  - De telefoon kreeg het desktopscherm, alleen smaller. Op Home stonden eerst drie grote tegels met grafiek en pas daaronder de taken.
  - Er waren drie navigatielagen: bovenbalk, tabs en onderbalk.
  - Per scherm stonden er tot zes witte hoofdknoppen.
  - Bijna de helft van de tekst was 10 à 10,5 px.
- **Contrast:** tekst haalde de norm bijna overal. Het probleem zat in de **randen**: knoppen, velden, keuzelijsten en vinkjes hadden 1,1 tot 1,7:1 contrast, terwijl de norm (WCAG 1.4.11) 3:1 is. Daardoor zag je slecht wat klikbaar was.
- **Kleur op de verkeerde plek:**
  - De omzettegel was volt (= goed) terwijl de omzet op 13% van het doel stond.
  - De takentijdlijn kleurde per module, waardoor pumpkin zowel "Financiën" als "let op" betekende.
  - In een tabel vol klanten stond in elke rij een volt chip.

## Kerncijfers
- **0** · fouten in de klikronde, desktop en telefoon · was 15
- **90** · tekstelementen kleiner dan 11 px · was 1.643
- **23** · witte hoofdknoppen op 24 telefoonschermen · was 37
- **3:1** · contrast van knop-, veld- en vinkjesranden · was 1,1–1,7:1

## Acties
- [ ] P2 · Lars, Tigo en Timo: gebruik het prototype twee dagen op je telefoon en noteer per scherm wat je mist of nooit gebruikt, vóór de echte bouw start

## Bevindingen

### Hoe er getest is
- Een **klikcrawler** (`_crawl.js`, in de prototypebron) opent elk scherm en zet daarbij steeds de voorbeelddata terug. Daarna klikt hij elk element met een actie of link aan, en ook elke knop in het paneel of menu dat dan opent.
- Per klik legt hij de uitkomst vast:
  - een fout in de code;
  - de melding "werkt nog niet";
  - er verandert niets zichtbaars;
  - alleen een melding;
  - een link die terugvalt op Home.
- Telefoonbreedte is getest in een iframe van precies 390 px. Headless Chrome gaat zelf nooit onder 500 px, dus de eerdere "390 px"-screenshots waren uitsneden van 500 px.
- Een **contrastmeting** (`_contrast.js`) berekent voor elke zichtbare tekst de echte achtergrond, inclusief doorschijnende lagen, in het donkere en het lichte thema. Voor knoppen, velden en vinkjes meet hij de rand tegen de omgeving.
- Een **drukte-meting** (`_density.js`) telt per telefoonscherm:
  - de hoogte;
  - het aantal knoppen en witte hoofdknoppen;
  - het aantal filters;
  - de vlakken in een accentkleur;
  - de kleine tekst.

### Vergelijking met andere dashboards
| Patroon | Bij anderen | Bij ons vóór | Nu |
|---|---|---|---|
| Telefoon | 3–5 KPI's, details pas na een tik; een telefoondashboard is een ander product, geen verkleind desktopscherm | 3 grote tegels met grafiek, legenda en bron, vóór de taken | Taken en akkoord eerst; KPI's als kleine 2×2-tegels zonder grafiek; tik = detail |
| Filters | Max. 3–4 zichtbaar, de rest achter één knop; actieve filters als chips (Polaris IndexFilters, Linear) | To do: drie keuzelijsten plus "Filters wissen" | Ik · Team · namen (zelfde als de agenda) + één knop **Filter** met wegklikbare chips |
| Acties | Eén primaire actie; meer dan drie acties gaan onder "Meer" (Polaris) | Relatiepagina: 8 knoppen; lijstregels met een eigen witte knop | Max. 3 knoppen + **Meer**; regels met een vinkcirkel of een pijl |
| Navigatie telefoon | Max. 5 tabs onderaan, geen dubbele navigatie (Apple HIG); Linear mobiel draait om inbox en eigen taken | Bovenbalk met 4 iconen + tabs + onderbalk | De bel is weg op de telefoon (Akkoord zit in de onderbalk); het actieve tabblad schuift in beeld |
| Donker thema | Donkergrijs als oppervlak; verzadigde kleur niet in grote vlakken; accent spaarzaam (Material) | Volt-gevulde tegels en "volgende actie"-blokken, gekleurde tijdlijnbalken | Neutrale tegels en balken met een dunne gekleurde streep; volt alleen voor status en actief |

### Wat er veranderd is (prototype v3.0)
- **Fouten:** reset herstelt ook notities en gesprekken. Kopiëren heeft een terugval: als het klembord geblokkeerd is, opent een paneel met de tekst om zelf te kopiëren.
- **Geen stille knoppen meer:** een leeg verplicht veld kleurt rood en een melding zegt wat er mist. Dat geldt voor Loggen, Toevoegen, Aanmelden, Vraag, Opslaan en Selecteer met AI.
- **"Later" bij besluiten:** het besluit verdwijnt nu echt tot maandag. Eerst gaf de knop alleen een melding.
- **Contrast:** er is een vaste token voor randen van bedieningselementen, met 3:1 in beide thema's. Aangevinkte vakjes zijn in het lichte thema zwart, want volt op wit was onzichtbaar (1,2:1). Tekst is nooit kleiner dan 11 px.
- **Kleur = status:**
  - geen volt-gevulde KPI-tegels meer;
  - takenbalken neutraal met een modulestreep, rood alleen bij verlopen;
  - "Klant" als omlijnde chip, alleen "Vaste klant" (het doel) in volt;
  - "niet gekoppeld" bij mail neutraal;
  - tellers in de zijbalk als rustige cijfers.
- **Rust:**
  - "Snel toevoegen" op Home is weg, want het dubbelde de + in de bovenbalk;
  - "Vastpinnen" is een klein icoon, alleen op desktop;
  - besluiten hebben Ja en Nee als gewone knoppen;
  - de agenda op de telefoon toont alleen dagen met iets erin;
  - de relatiepagina toont op de telefoon eerst de volgende actie, dan de tijdlijn, dan de eigenschappen.

### Wat bewust blijft
- Iconknoppen in de bovenbalk hebben een zwakke rand. Het icoon zelf heeft genoeg contrast, en dat telt volgens WCAG.
- Infochips zonder klikactie, zoals "Club A", zijn labels en geen knoppen.
- De titel in de notitie-editor heeft bewust geen rand. Het is een documentweergave, zoals Notion.

## Bronnen
- Telefoondashboards, 3–5 KPI's en progressive disclosure: https://www.boundev.ai/blog/mobile-data-visualization-design-guide · https://querio.ai/articles/how-to-design-dashboards-for-mobile-users · https://www.thebricks.com/resources/best-practices-for-mobile-dashboard-design
- Cognitieve belasting, max. 3–4 filters en 3–7 hoofdcijfers: https://www.uxmatters.com/mt/archives/2025/03/from-features-to-value-designing-saas-dashboards-that-deliver-insights.php · https://easy.bi/blog/dashboard-ux-optimization · https://www.designrush.com/agency/ui-ux-design/trends/dashboard-design-principles
- Opgeslagen weergaven, filters en chips: https://polaris-react.shopify.com/components/selection-and-input/index-filters · https://shopify.dev/docs/apps/build/app-home/migrate-from-polaris-react/index-filters
- Donker thema en kleur: https://m2.material.io/design/color/dark-theme
- Tabbalk en telefoonnavigatie: https://developer-rno.apple.com/design/human-interface-guidelines/components/navigation-and-search/tab-bars · https://linear.app/changelog/2024-09-19-introducing-linear-mobile · https://linear.app/changelog/2026-01-22-customize-your-navigation-in-linear-mobile
- Stripe mobiel: https://docs.stripe.com/dashboard/mobile
- Prototype v3.0: https://claude.ai/artifact/XPnRocf1ZcG1J7pb82QBHy · handboek: https://claude.ai/artifact/AEzJLbcMsYRYRbT1SFNik1
- Eerder: [[2026-10-04-dashboard-herindeling-ai-mail-koppelingen]], [[2026-10-02-dashboard-ontwerpregels-kpi]], [[2026-09-26-dashboard-ux-onderzoek]], [[2026-10-02-dashboard-apps-patronen]]

## Aantekeningen
