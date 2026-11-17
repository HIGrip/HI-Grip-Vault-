---
type: werkwijze
bijgewerkt: 2026-11-16
status: actueel (ads v6)
---

# Ads-workflow v6: sjabloonregels en stappen

Alleen HTML/CSS + headless Chrome (Canva is niet voor AI-agents; Canva alleen lezen). Uitvoer komt in de werkmap buiten de vault (zie `Tools/config.py`), niets uploaden of publiceren. Dit is de v6-stand (iteratie op v5). Waarom elke regel er is: [[Leerregels-Ads-Design]].

## 1. Sjabloon = vaste stijlregels + 4 toegestane layout-klassen
**Stijlregels (voor elke ad):**
- Lettertype Poppins: Black Italic voor kop en blok, Medium voor de bewijsregel (bestanden: `Fonts/`).
- Kleur: Volt #CCFF00 is het enige accent; zwart #0A0A0A; wit.
- 1 echte kleurfoto als held, geen herkenbaar gezicht. Geen mono-grade; wel +10% contrast en +6% kleur.
- Marge 72 px; logo (wit wordmark) linksboven op 72 px (9:16: 250 px van boven).
- Volt-blok met zwarte tekst: >= 96 px (volle breedte) of >= 80 px (deelblok). Kop >= 100 px, wit of zwart op effen vlak.
- Max 6 elementen. 9:16 safe zone: boven 250 px, onder 340 px vrij.
- Geen sportlabel (zie Leerregels).

**Layout-klassen** (elke ad kiest er één; `LAYOUT` in `Tools/build.py`):

| Klasse | Compositie | Licht vlak |
|---|---|---|
| P paneel-onder | foto boven, wit paneel (volle breedte) met zwarte kop, Volt-blok eronder | paneel |
| K kop-boven | wit paneel bovenaan met zwart logo + zwarte kop, foto midden, Volt-blok onderaan (volle breedte of rechts uitgelijnd deelblok) | paneel |
| S strip | regel 1 wit op donkere foto, regel 2 zwart op witte strip, Volt-blok volle breedte | strip |
| F kader | foto in wit kader (brede rand boven met zwart logo, 36 px zijranden), kop wit op donker eronder, Volt-blok | kader |

Nieuwe klassen of afwijkingen = voorstel aan Team HÏ Grip.
**Variatieregel (R16):** per sport en formaat maximaal 2 ads met dezelfde klasse (doel: alle 4 verschillend). Stijl blijft gelijk, alleen de indeling varieert.

## 2. Licht/donker
Bewuste lichte vlakken (wit paneel, strip, kader) tegen donkere foto + zwart; streef ~30% licht / 70% donker.
Meting (R14, notext-versie, Volt-pixels uitgesloten): licht = relatieve luminantie >= 0.5; donker < 0.2. **Drempel: licht 12–40%, donker >= 40%.** Gemeten set: licht 13–39%, donker 44–75%. P en K halen ~30% licht, S en F (13–28%) zijn subtieler.

## 3. Drempels van check.py (`Tools/check.py`, 13 regels per ad + set)
| Regel | Drempel |
|---|---|
| R1 kop | >= 100 px |
| R2 bloktekst | >= 96 px (volle breedte) / >= 80 px (deelblok); R2b bewijsregel >= 30 px |
| R3 blokbreedte | >= 85% (volle breedte) / >= 62% (deelblok), gemeten in pixels |
| R4 blokmarge | 72 ± 3 px aan de uitgelijnde kant(en) |
| R6 logo | links 72, boven >= safe zone |
| R7 blokvlak | >= 11% (4:5) / 8% (9:16) volle breedte; 8% / 6% deelblok |
| R8 kop/bewijs binnen marge | 72 px |
| R9 onderrand tekst | vrij onder >= 72 (4:5) / 340 (9:16) |
| R10 foto zichtbaar | >= 30% (4:5) / 25% (9:16) (tekstzware klassen en safe zones; na eerste meting verruimd van 40/40) |
| R11 kopcontrast | mediaan >= 7:1 |
| R12 contrast slechtste 5% | kop en kleine tekst >= 4.5:1 (zonder tekstschaduw) |
| R13 kleur | kop wit of zwart; zwart op Volt = 16.8:1 |
| R14 licht/donker | licht 12–40%, donker >= 40% (verruimd van 50% na eerste meting) |
| R16 variatie (`--set`) | max 2 gelijke klassen per sport/formaat |
(R5 sportlabel is vervallen.) Meting is een benadering, geen vervanging voor kijken met eigen ogen.

## 4. Stappen per ad
1. Brief/copy lezen. Claims alleen uit `00_Brand_Core/Feiten & Actuele Staat.md`; 95% alleen met de verplichte formulering (staat in `Tools/ads.json` onder PROOF) + vlag "juridisch laten toetsen". Review alleen letterlijk uit een echte bron.
2. Foto kiezen uit de Drive-bibliotheek (zie [[Foto-index]]). Held-bbox bepalen met `python Tools/gridsheet.py <foto> <uit.jpg>` (10%-raster). Zet foto, bbox en copy in `Tools/ads.json`; kies klasse in `LAYOUT` (variatieregel).
3. `python Tools/build.py [id ...] [--fmt 4x5|9x16] [--layout P|K|S|F] [-v]`: grade, HTML, render, pass 2 (gradient volgt de gemeten kop), notext-versie, check.py. Met `--layout` naar `out/pilot/` (A/B-vergelijking).
4. `python Tools/check.py --set` (variatie); `python Tools/sheet.py 4x5|9x16 <uit.jpg>` (contactsheet; rij 1 voetbal, rij 2 rugby).
5. Zelfcontrole: minimaal 2 rondes (wijziging + nieuwe meting + kijken). Vision-modellen zijn onbetrouwbaar (verzinnen ad-namen, noemen verschillende ads identiek): altijd PIL-meting of rects (`Tools/probe.py`) als tweede bewijs.
6. Oplevering volgens het vaste formaat; niets publiceren.

Held-venster: `Tools/grade2.py` snijdt het venster uit de bronfoto zodat de held op `target` (fractie van canvashoogte) staat; valt het buiten de bron dan reflect-pad + blur onder de gradient (let op artefacten in 9:16 close-ups).

## 5. Valkuilen
- Ad met bewijsregel (95%-claim) is hoog: P/K laten weinig foto over; zet zulke ads op S of F.
- Klasse bepaalt held-venster en gradient; zonder dat dwong v5 alles in dezelfde zone.
- Deelblok (bw < 900) alleen bij korte bloktekst ("BIJ HOUVAST."); lange tekst haalt dan geen 80 px.
- Logo zwart via CSS `filter:brightness(0)` op het witte wordmark (K, F).
- Kop op lichte sok/grasvlek geeft slecht contrast: foto omhoog, gradient eerder starten, tekstschaduw.
- Held-bbox: eerste schatting uit een contactsheet was 3x fout; gebruik het raster en controleer `_notext.png`.
- Portretfoto's in liggend venster: bbox + reflect-pad lost het op, kijk naar artefacten.
- Chrome: eigen user-data-dir en `--virtual-time-budget=8000` zodat fonts laden (zit in build.py). `--dump-dom` leest de rects uit `<title>`.
- Rugby-pool is 1 foto (Instagram-post, mogelijk derde-merk-bal); pas na de rugbyshoot echt uniek.
- Geen heredoc-python in de agent-terminal (wordt geblokkeerd): schrijf scripts als bestand.
- Pad 'Content - HÏ Grip' bevat een Ï en spaties: altijd tussen aanhalingstekens.

## 6. Niet gecontroleerd (stand v6)
Weergave in Meta (UI-overlays), kleurprofiel, SEO-zoekwoorden in alt-teksten, reflect-pad artefacten in 9:16 close-ups. Onafhankelijke QA (v6): CORRIGEER (licht), zie [[VERBETERPLAN]] voor de open punten.

> Map: [[07 Design Agent — Index]]
