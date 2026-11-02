---
id: 2026-11-02-video-edit-en-stijl-onderzoek
titel: "Video-editprogramma en visuele stijlanalyse social video — november 2026"
kerntitel: "Canva-MCP als hoofdroute, CapCut als fallback; stijlgids noemt nog ffmpeg"
datum: 2026-11-02
bron: los
routine: ""
categorie: Social
status: nieuw
prioriteit: P2
samenvatting: "Canva Pro/Business met de al gekoppelde Canva-MCP is de aanbevolen hoofdroute voor 9:16 social video, met CapCut desktop als snelle fallback; Premiere Pro valt af door het hardwareprobleem op de laptop. De Editing Stijl Gids Video noemt nog ffmpeg (EDL) als standaardmotor en loopt daarmee achter op deze toolkeuze."
gerelateerd: []
vervangt: []
bronbestand: "Kanban t_99460ed4 (toolkeuze, Content) en t_49099c06 (stijlanalyse, Design); samengevoegd in t_f8a3cf91"
deadline: ""
---
# Video-editprogramma en visuele stijlanalyse social video

> Map: [[Waar staat wat]]

> Samengevoegd uit twee Kanban-resultaten (beide kaarten staan al in het archief; de inhoud staat hier). Alleen onderzoek: niets gebouwd, geïnstalleerd, gedownload of gepubliceerd. Verwijzingen: [[Editing Stijl Gids Video]], [[Video-agent Nulmeting]], [[Logo & Kleurenpalet]].

## In het kort
- **Hoofdroute:** Canva Pro/Business + Canva-MCP (al actief in de Hermes-toolset; merktemplates en autofill; geen lokale rendering).
- **Fallback:** CapCut desktop voor losse TikTok/IG-clips met snelle auto-ondertiteling.
- **Afgeraden:** Premiere Pro (loopt vast op de laptop, bevestigd in de nulmeting).
- **Bewaard als toekomstoptie:** ffmpeg + EDL (gratis, al aanwezig); nu geen scripts of EDL-systeem bouwen.
- **Stijl:** wat past is scherpe zwart/wit grade, bold Poppins-captions onderin, snelle hook, harde cuts en match-cut op het actiemoment, logo-outro. Warme/retro grade en trage cinematic shots passen niet.
- **Tegenstrijdigheid:** de stijlgids noemt ffmpeg (EDL) als standaard, de toolkeuze koos Canva + CapCut.

## Acties
- [ ] P1 · Besluit: akkoord op Canva-MCP als hoofdroute en CapCut desktop als fallback voor social video?
- [ ] P1 · Besluit: blijft ffmpeg (EDL) standaardmotor in de stijlgids, of wordt het toekomstoptie en worden Canva + CapCut de standaard?
- [ ] P2 · Sectie "Software" in de Editing Stijl Gids Video bijwerken zodra het besluit er is (nu: ffmpeg-motor + Canva standaard, CapCut ontbreekt)
- [ ] P2 · Regel "hook-eerst" (vraag, claim of actiebeeld binnen 2 sec) toevoegen aan de stijlgids naast de cuttempo-tabel, ter beoordeling door de Social Agent
- [ ] P3 · Match-cut op het actiemoment expliciet als derde toegestane uitzondering in de stijlgids benoemen, ter beoordeling door de Social Agent
- [ ] P2 · Adobe-kwaliteitscheck (Adobe vs Canva/CapCut) doen nadat Lars zijn eigen voorbeelden uit Google Drive/AI TECH heeft toegevoegd
- [ ] P3 · Hands-on test van Canva-MCP met een echte HÏ Grip-template (outro/lower-third, ondertiteling) door de Video & Visuele Productie Agent
- [ ] P? · Camera/belichting-testdag plannen vóór DaVinci Resolve wordt overwogen

## Bevindingen
### 1. Toolkeuze en advies
Kosten en prijzen zijn algemene webbronnen van november 2026 (deels US/afwijkende regio), geen officiële NL-tarieven. Laptop: Ryzen 7 5700U, geen dGPU.

| Optie                          | Kosten                                                         | Leercurve   | Templates (outro/lower-third/grade)                                | Ondertiteling/automatisering                             | Past bij laptop                              |
| ------------------------------ | -------------------------------------------------------------- | ----------- | ------------------------------------------------------------------ | -------------------------------------------------------- | -------------------------------------------- |
| Premiere Pro                   | ~€24-32/mnd                                                    | Hoog        | Zeer sterk                                                         | Ja (speech-to-text)                                      | **Nee**, loopt vast (nulmeting t_3973ff61)   |
| Canva Pro/Business + Canva-MCP | Pro ~€15/mnd, Business ~€25/user/mnd                           | Laag        | Ja: create_design, autofill_design, export_design, brand templates | Browser-Canva heeft ondertitel-tool; via MCP niet getest | Ja, draait in de browser                     |
| ffmpeg / script                | Gratis, al geïnstalleerd (v9.0.1)                              | Hoog        | Ja via filters, maar nu niet bouwen                                | Whisper-filter aanwezig                                  | Ja: 30 s testclip x264 6,5 s, h264_amf 5,0 s |
| Hermes/Claude ingebouwd        | Gratis                                                         | n.v.t.      | Geen editor, alleen video_analyze                                  | Nee                                                      | Geen zelfstandige optie                      |
| CapCut desktop                 | Gratis voor eigen beelden; Pro ~€18-20/mnd (4K, auto-captions) | Laag-middel | Sterke TikTok/IG-sjablonen, geen brandkit zoals Canva              | Auto-captions achter Pro                                 | Ja, lichte app                               |

**Advies:** Canva (Pro/Business) met de Canva-MCP: laagste leercurve, geen installatie, herhaalbare merktemplates, geen lokale rendering. CapCut desktop als snelle fallback. Premiere Pro afgeraden. ffmpeg bewaard als toekomstige automatiseringsoptie; dat is een apart vervolgvoorstel voor Team HÏ Grip.

### 2. Visuele stijlanalyse en richtlijnen
Let op: analyse op basis van zoekresultaten, metadata en publieke beschrijvingen, niet frame-voor-frame bekeken (geen downloads). Getoetst aan de [[Editing Stijl Gids Video]] en [[Logo & Kleurenpalet]].

| #   | Voorbeeld                                              | Waarneming                                                                                                                  | Past bij HÏ Grip?                                            |
| --- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 1   | TRUsox (@officialtrusox, IG Reels), directe concurrent | Product/claim in beeld binnen 2 sec; clean zwart/wit; korte bold-caps claims; snel bij actie, rust bij close-up; logo + CTA | Ja, sluit aan op "koud & scherp"                             |
| 2   | Boot Wizard (TikTok)                                   | Directe vraag-hook; presenter + b-roll; bold captions onderin (CapCut-achtig)                                               | Ja: hook-eerst, tekst draagt zonder geluid                   |
| 3   | NOX PlayBIG padel (BM Produccions)                     | Cinematic 3D-reveal, retro/warme grade, lange shots                                                                         | **Nee**: warme tint verboden, tempo te traag                 |
| 4   | Padel match-cut reel (@shogentle)                      | Match-cuts smash naar impact                                                                                                | Ja: past bij uitzondering "zoom/push bij hoogtepunt"         |
| 5   | Court15.agency (tennis/padel)                          | Silent-first edits, leesbare captions, vertical-first                                                                       | Ja: sluit aan op Poppins-ondertitel onderaan en mobile-first |

**Wat past:** scherpe zwart/wit grade, bold Poppins-captions onderin, snelle hook, harde cuts plus actie-match-cut, logo-outro.
**Wat niet past:** warme/retro kleurgrades, lange cinematic shots zonder hook, een boodschap die van muziek afhangt (captions moeten zonder geluid werken). Trage cinematic opbouw blijft "toekomstdoel", niet nu.

**Voorgestelde aanscherping stijlgids (voorstel, niet doorgevoerd):** hook-eerst als harde regel; match-cut als derde uitzondering; sectie Software afstemmen op de toolkeuze.

### 3. Open punten en inconsistenties
- **Tegenstrijdigheid (gemeld, niet opgelost):** de sectie "Software" van de Editing Stijl Gids Video noemt nu *ffmpeg-motor (EDL-gedreven)* en Canva als standaard, Premiere Pro alleen als optie op een andere machine. De toolkeuze (t_99460ed4) adviseert Canva-MCP als hoofdroute en CapCut als fallback, en bewaart ffmpeg alleen als toekomstoptie. CapCut staat niet in de gids. Het besluit hierover is aan Team HÏ Grip; de gids wordt pas daarna aangepast door de eigenaar van die gids.
- **Kwaliteitsvraag Adobe vs Canva/CapCut is open:** Lars voegt nog eigen voorbeelden toe uit Google Drive/AI TECH. Pas daarmee kan de kwaliteit van Adobe, Canva en CapCut worden vergeleken, voor de pilaren Persoonlijk en Performance. Tot dan is het advies gebaseerd op kosten, hardware en workflow, niet op eindkwaliteit.
- **Staande aannames:** prijzen zijn geen officiële NL-tarieven; ondertiteling via Canva-MCP niet getest; CapCut-teamgebruik niet getest; of CapCut-sjablonen de stijl 1-op-1 kunnen maken is niet gecontroleerd; geen muziekrechten-check; voorbeeldaccounts niet live bekeken.

## Performance-pijler: realiteitscheck en DaVinci Resolve als toekomstoptie
Bron: eigen onderzoek van Lars in de Google Drive-map "AI TECH": 10 inspiratievideo's, 2 pijlers die moeten combineren (storytelling Persoonlijk + Performance-tempo/beelden). Dit is input van Lars; niet door de Operations Agent zelf bekeken.

- **Persoonlijke pijler** (voorbeeld: "Waarom alles met eiwit duurder wordt"): natuurlijk daglicht, handheld/smartphone-stijl, bold tekst-overlay. Dit is al de Canva/CapCut-stijl en goed haalbaar met de gekozen hoofdroute.
- **Performance-pijler** (Nike/Rafael Nadal, adidas "Great Rivals Make Great Motivation"): professionele reclamebureau-productie met cinema-camera, gecontroleerde belichting en precisiekleurgrading (zwart/wit high-contrast resp. moody regen/kleur). Niet haalbaar met Canva/CapCut-templates, maar ook niet met Adobe alleen: het gat zit in de ruwe beeldkwaliteit en belichting bij het filmen, niet in de edit-app.
- **Hoofdoordeel ongewijzigd:** Canva (Pro/Business) + Canva-MCP als hoofdroute, CapCut als fallback, voor regulier contentwerk.
- **Nieuw, als apart punt (geen vervanging): DaVinci Resolve.** Gratis, sterkere kleurgrading dan Canva/CapCut, geen Adobe-abonnement of laptopprobleem. Een latere upgrade-route, alleen relevant zodra HÏ Grip's eigen footage (camera/belichting) dat niveau aankan.
- **Adobe afgeraden voor de cinematic Performance-look:** niet omdat de software het niet kan, maar omdat het probleem bij het filmen zit.
- Niet gecontroleerd: of de laptop (Ryzen 7 5700U, geen dGPU) Resolve soepel draait; niet getest.

## Vergelijking: Palmier Pro vs Claude Code + Remotion
Gerichte vergelijking van twee kandidaten voor een vibe-code-editroute (code/agent-gestuurd, stijl per pijler herbruikbaar, alles blijft aanpasbaar). Beide stonden al als kandidaat in deze notitie; dit vervangt het hoofdoordeel (Canva-MCP + CapCut) niet.

| | Palmier Pro | Claude Code + Remotion |
|---|---|---|
| Kosten software | Gratis (editen zelf altijd gratis; betaald alleen voor AI-mediagenerate) | Gratis voor editen; Remotion kan een betaalde bedrijfslicentie vereisen bij bepaalde omzet/teamgrootte (nog niet gecontroleerd voor HÏ Grip) |
| Hardware | Vereist Mac (macOS 26 Tahoe minimaal). HÏ Grip heeft er geen → eenmalige Mac mini-investering (circa €600-800) | Draait direct op de bestaande Windows-laptop, geen nieuwe hardware |
| Bediening | Visuele timeline + GUI, Claude/Codex stuurt via MCP, ook handmatig te verfijnen | Volledig via code/tekst (geen losse GUI-timeline); Remotion Studio toont wel live preview met hot reload |
| Aanpasbaarheid | Hoog (GUI + agent) | Zeer hoog — de edit is code, dus elk detail is aanpasbaar |
| Stijlherhaling per pijler | Skills-systeem: één keer editen, opslaan als Skill, hergebruiken op volgende video's | Zelfde principe via herbruikbare Remotion-componenten/Skills (open-source gedocumenteerd, o.a. remotion-superpowers) |
| Leercurve team | Laag (lijkt op een gewone editor) | Hoger (code-gevoel nodig, al voert Claude het grootste deel uit) |
| Werkplek-fit | Extra apparaat + remote-desktopstap nodig vanaf de Windows-laptop | Past direct in de bestaande Hermes/Claude-werkwijze op de laptop |
| Volwassenheid | Jong bedrijf (YC-backed), beperkt trackrecord | Groot, actief open-source ecosystem rond Remotion + Claude Code |

> **Zonder Mac is Claude Code + Remotion nu de goedkopere en direct beschikbare route (geen hardware-aankoop, past in de bestaande laptop-werkwijze). Palmier wordt pas aantrekkelijker zodra er sowieso een Mac mini wordt aangeschaft — dan is de GUI eenvoudiger voor niet-technische teamleden. Open punt: Remotion's commerciële licentievoorwaarden voor een bedrijf van de omvang van HÏ Grip zijn nog niet gecontroleerd.**

## Wat niet lukte
Geen video's live bekeken (grens: geen downloads); Canva-MCP niet hands-on getest met een HÏ Grip-template.

## Bronnen
- Kanban t_99460ed4 (Content): toolkeuze, bronnen: nulmeting t_3973ff61, webzoekopdrachten prijzen november 2026, eigen Canva-MCP-toolset.
- Kanban t_49099c06 (Design): stijlanalyse, bronnen: [[Editing Stijl Gids Video]], [[Logo & Kleurenpalet]], zoekresultaten over TRUsox, Boot Wizard, NOX, @shogentle, Court15.agency.
- Samengevoegd door Operations Agent in t_f8a3cf91, 2026-11-02.

## Aantekeningen
