---
id: 2026-10-07-dashboard-content-funnel-routines-klanten
titel: "Dashboard v4 — Content als funnel met soorten, routines en prestaties; klantenfunnel terug in het CRM"
kerntitel: "Content wordt een funnel met soorten en routines, het CRM krijgt de klantenfunnel terug"
datum: 2026-10-07
bron: los
routine: ""
categorie: Techniek
status: nieuw
prioriteit: P3
samenvatting: "Content is nu een funnel zoals de B2B-pipeline, elke post heeft een soort (persoonlijk, performance/lifestyle, announcement, overig) waarop je overal filtert, routines zetten vaste posts op een vaste dag en tijd in de kalender, en een nieuwe pagina Prestaties toont hoe live posts deden. De uitwerking van een post heeft geen AI meer maar wel het vaste format, en het CRM heeft weer een funnel voor huidige klanten (nieuwe klant, vaste klant, herbestellen, slapend) volgens de regels uit crm-structuur."
gerelateerd: [2026-10-07-dashboard-v4-animaties-apple, 2026-10-07-dashboard-v4-controle-ui-snelheid, 2026-10-06-dashboard-v4-opruimen-focusvensters]
vervangt: []
bronbestand: "C:\\Users\\Test\\.claude\\plans\\prototype-bron\\v4\\content_web.js"
deadline: ""
---
# Dashboard v4 — Content als funnel met soorten, routines en prestaties; klantenfunnel terug in het CRM

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[Waar staat wat]] · [[Home]]

## In het kort

- **Wensen van Timo (7 okt):**
  - de contentlijst als funnel;
  - soorten content met een filter;
  - geen AI in de voorbereiding;
  - routines in de kalender;
  - een pagina voor de cijfers van posts die live zijn geweest;
  - de klantenfunnel terug in het CRM.
- **Alles is gebouwd in prototype v4** en getest: 214 ok in de functionele test, 0 fouten. Het eerdere werk staat in [[2026-10-07-dashboard-v4-animaties-apple]].

## Kerncijfers
- **4** · soorten content: persoonlijk, performance/lifestyle, announcement, overig
- **4** · kolommen in de klantenfunnel: nieuwe klant, vaste klant, herbestellen, slapend
- **0** · fouten in de functionele test (214 ok) en de AI-test (22 ok) na de wijziging

## Acties
- [ ] P3 · Besluit: mag een routinepost automatisch op Gepland (en naar Buffer) zodra caption en visual klaar zijn, of blijft dat altijd een mens?

## Bevindingen

### Content
| Onderdeel | Hoe het werkt |
|---|---|
| Funnel | Kolommen Voorstel AI → Idee → Concept → Gepland → Live (30 d), met "% door" zoals het B2B-bord. Je sleept een post naar de volgende fase; naar Gepland kan alleen met een datum. Op de telefoon een lijst per fase. Weergaven: Funnel · Week · Maand · Prestaties |
| Soort content | Persoonlijke content, Performance / lifestyle, Announcement, Overig. Te kiezen in het postvenster, bij een nieuw idee en bij een routine; filter in de funnel, de kalender en Prestaties. Bestaande posts kregen een soort op basis van hun pijler en titel |
| Uitwerking | Geen AI meer. Dezelfde velden (samenvatting, uitwerking, shotlist, materiaal, locatie en mensen, notities), die starten in het vaste format (hook 0–2 s, shotlist met streepjes, materiaallijst …); je vult ze zelf in en het bewaart vanzelf. AI-ideeën krijgen alleen nog een titel en pijler |
| Routines | Een vaste post op een vaste weekdag en tijd (naam, kanaal, soort, pijler, maker, aan/uit). De kalender krijgt de edities vier weken vooruit; in de funnel verschijnen ze twee weken vooruit. Een editie die je zelf invult of verplaatst, blijft van jou; pas je de routine aan, dan volgen alleen de onaangeroerde edities. Voorbeeld: HÏ LIGHTS OF THE WEEK (vrijdag 17:00, Instagram) en Behind the grip (woensdag 19:00, TikTok) |
| Prestaties | Periode 30/90 dagen, soort en kanaal als filter. Bovenaan posts live, bereik, engagement en klikken naar de shop, met het verschil met de vorige periode; daaronder per soort en per kanaal (gemiddeld bereik, engagement), de beste post en een tabel van alle posts. Een post opent met dezelfde cijfers. Voorbeeldcijfers tot Meta, TikTok en LinkedIn gekoppeld zijn |

### CRM: klantenfunnel
- **Wat er misging:** in de herindeling van 4 oktober werd *Huidige relaties* de lijstweergave van het CRM, en daarmee verdween het overzicht van de huidige klanten als funnel.
- **De nieuwe tab Klanten** staat naast B2B, Creators en Partnerships & events, en volgt `crm-structuur.md` (§3 funnels, §2.6 herbestellen):
  - **Nieuwe klant:** eerste order of een actieve clubdeal.
  - **Vaste klant:** tweede order binnen 12 maanden.
  - **Herbestellen:** het herbestelmoment valt binnen 30 dagen, of is verstreken.
  - **Slapend:** 12 maanden geen order en geen omzet via de code.
- **De kolom volgt uit de orders**, dus slepen kan hier niet. Via ⋯ kies je de volgende stap: herbestelmail of heractivatiemail, nieuwe offerte, contact loggen of de relatie openen.
- **Per kolom** staat de omzet over 12 maanden. Een vaste klant die nu bij Herbestellen of Slapend staat, krijgt het label *Vaste klant*. Zo klopt de tegel "vaste klanten x/10" met wat je ziet.

## Bronnen
- `C:\Users\Test\.claude\plans\prototype-bron\v4\content_web.js` (funnel, soorten, routines, Prestaties), `crm.js` (`custBoard`), `ai_features.js` (AI-ideeën zonder uitwerking), `core.js` (oude routes ideeen/prestaties), tests in `_harness.js`
- `C:\Users\Test\.claude\plans\crm-structuur.md` §2.6 en §3
- Eerder: [[2026-10-07-dashboard-v4-animaties-apple]], [[2026-10-06-dashboard-v4-opruimen-focusvensters]]

## Aantekeningen
