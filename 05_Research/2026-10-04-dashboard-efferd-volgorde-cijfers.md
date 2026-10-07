---
id: 2026-10-04-dashboard-efferd-volgorde-cijfers
titel: "Dashboard — Efferd-dashboards als voorbeeld: To do als volgorde, blokken met randen en doorklikbare cijfers"
kerntitel: "To do wordt een volgorde, blokken krijgen randen en elk cijfer is door te klikken"
datum: 2026-10-04
bron: los
routine: ""
categorie: Techniek
status: nieuw
prioriteit: P3
samenvatting: "De Efferd-dashboards 3, 4 en 5 lezen goed omdat elk blok een dunne lichte rand heeft op bijna-zwart, grafieken wit en grijs zijn, en kleur alleen plus en min aangeeft; dat ontbrak in de donkere modus van ons prototype. De gratis Efferd-code (2–5) is gecontroleerd en veilig (geen netwerkaanroepen, scripts of verborgen instructies), maar we nemen alleen patronen over. De To do is nu een genummerde volgorde (eerst, dan dat) in plaats van een tijdlijn, en elk hoofdcijfer opent een eigen pagina met periode, opbouw en de orders erachter."
gerelateerd: [2026-10-04-dashboard-bruikbaarheidsaudit, 2026-10-04-dashboard-herindeling-ai-mail-koppelingen, 2026-10-02-dashboard-ontwerpregels-kpi, 2026-10-06-dashboard-v4-opruimen-focusvensters]
vervangt: []
bronbestand: "https://claude.ai/artifact/XPnRocf1ZcG1J7pb82QBHy"
deadline: ""
---
# Dashboard — Efferd-dashboards als voorbeeld: To do als volgorde, blokken met randen en doorklikbare cijfers

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[Waar staat wat]] · [[Home]]

## In het kort

- **Waarom Efferd 3, 4 en 5 fijn lezen:**
  - Elk blok heeft een dunne lichte rand op bijna-zwart. Je ziet dus altijd waar een blok begint, ook in de donkere modus.
  - Grafieken zijn wit en grijs; kleur zit alleen op plus en min.
  - Een KPI-kaart heeft een eigen voetregel met de vergelijking.
  - Onder elke lijst staat "Alles bekijken →".
- **Ons prototype miste precies dat in de donkere modus.** Kaarten (#1a1a1a) lagen randloos op #111. Nu heeft elk blok een rand en zijn geneste tegels een stap lichter.
- **Veiligheid:**
  - De gratis code van Efferd 2–5 is opgehaald en nagelopen: geen netwerkaanroepen, eval, scripts, opslag of verborgen instructies. Alleen voorbeeldplaatjes van avatar.vercel.sh en flag.vercel.app.
  - Volgens de voorwaarden mogen blokken in eigen projecten. Doorverkopen als kit mag niet.
  - Wij nemen alleen de patronen over, in eigen code en huisstijl. Pro-blokken 6–14 zijn alleen als voorbeeld bekeken.
- **To do = volgorde:**
  - één kaart "Eerst · begin hiermee", daarna een genummerd lijstje;
  - "Jouw dag" toont uren tegenover capaciteit;
  - het team ziet een kolom per persoon;
  - de tijdlijn staat nog onder Planning.
- **Doorklikken:** Omzet, Orders en Gemiddelde orderwaarde openen een eigen pagina. Daarop:
  - een periode van 7 dagen tot 12 maanden;
  - een staaf per dag, week of maand, met de vorige periode erachter;
  - de verdeling webshop/B2B, per klanttype, de grootste klanten en per variant;
  - de orders erachter.
  - Elke staaf en regel filtert of opent de bron.

## Kerncijfers
- **0** · netwerkaanroepen, scripts of verborgen instructies in de Efferd-code 2–5
- **3** · cijfers op Home die nu naar een eigen detailpagina klikken

## Acties
- [ ] P3 · Besluit: bouwen we het echte dashboard op shadcn/ui (dan passen Efferd-blokken direct, eventueel met Pro-licentie) of houden we de eigen componenten uit het prototype?

## Bevindingen

### Wat we overnemen van Efferd
| Blok | Patroon | Bij ons |
|---|---|---|
| 3, 4, 5 | Dunne lichte rand op elk blok, geneste tegels een stap lichter | Elke kaart, KPI, tabel, planningbalk en agendacel |
| 4 | KPI met voetband (vergelijking, bron) en "View report →" | KPI-kaart met voetband; klik opent de cijferpagina |
| 5 | Lijst waarin de balk achter het label ligt | Cijferpagina: waar het vandaan komt, klanttype, klanten, varianten |
| 2, 5 | "View all →" onder een lijst | Kaartvoet "Alle signalen ›", "Bekijk de volgorde ›" |
| 6 | "Needs attention" met tellers | Home › Vraagt aandacht |
| 12 | Leadfunnel met % door, deals die stilliggen met "Follow up" | CRM › Funnel als stappen, Liggen stil met Opvolgen (maakt een taak) |
| 8 | Vergroten naar detail | Elke KPI-kaart opent zijn eigen pagina |

### Wat we bewust niet overnemen
- Lettertypes en kleurpalet van Efferd. De huisstijl blijft Poppins met de merkkleuren.
- De drie bijgeleverde skills alleen voor zover ze over bruikbaarheid gaan. Een skill zegt zelf "niet voor dashboards", een andere is voor bureauwebsites (scroll-animaties, glas, grote witruimte), de derde is voor Google Stitch.

### To do: van tijdlijn naar volgorde
- De volgorde per persoon is:
  - eerst eigen keuze (slepen of Meer › Bovenaan);
  - dan verlopen, prioriteit en deadline.
- De blokken zijn Nu, Hierna (7 dagen) en Later (ingeklapt).
- Kleur alleen waar het iets betekent: rood voor te laat en P1, een volt streep op de Eerst-kaart.

## Bronnen
- Efferd dashboard-blokken: https://efferd.com/blocks/dashboard · voorbeelden https://efferd.com/view/dashboard-3, https://efferd.com/view/dashboard-4, https://efferd.com/view/dashboard-5 · voorwaarden https://efferd.com/terms
- Prototype v3.1: https://claude.ai/artifact/XPnRocf1ZcG1J7pb82QBHy · handboek: https://claude.ai/artifact/AEzJLbcMsYRYRbT1SFNik1
- Eerder: [[2026-10-04-dashboard-bruikbaarheidsaudit]], [[2026-10-04-dashboard-herindeling-ai-mail-koppelingen]], [[2026-10-02-dashboard-ontwerpregels-kpi]]

## Aantekeningen
