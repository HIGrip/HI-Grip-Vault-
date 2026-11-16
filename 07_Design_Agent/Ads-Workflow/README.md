---
type: readme
bijgewerkt: 2026-11-16
---

# Ads-Workflow (Design Agent)

> Map: [[07 Design Agent — Index]]

Alles wat de Design Agent leert en bouwt voor ads staat hier, zodat elke laptop, collega of agent verder kan. Niets hiervan hoeft op de computer van Lars te staan. Foto's en video's staan op de gedeelde Drive (HiGripMedia) en zijn hier alleen verwezen, niet gekopieerd.

## Lees in deze volgorde
1. [[Leerregels-Ads-Design]]: wat Lars heeft gecorrigeerd en waarom (14 regels).
2. [[WORKFLOW]]: stijlregels, 4 layout-klassen, licht/donker, drempels van check.py, stappen, valkuilen.
3. [[VERBETERPLAN]]: stand, open punten uit QA, werkwijze per ronde.
4. [[Voorbeelden]] (map `Voorbeelden/`): 10 beste v6-ads + Lars' Canva-ads (alleen lezen).
5. [[Foto-index]]: welke Drive-foto bij welke ad hoort.
6. `Tools/` (code) en `Fonts/` (Poppins, OFL).

## Een ad maken (kort)
1. Eenmalig: Python 3.10+ met `pip install pillow numpy`, en Chrome of Edge. Zet `HIGRIP_MEDIA_ROOT` op de map met de lokale Drive-kopie (standaard `<thuismap>/HiGripMedia`). Optioneel `ADS_WORK` (werkmap buiten de vault; standaard `<MEDIA_ROOT>/_Output/design/ads-work`) en `CHROME_PATH`. Uitleg staat bovenin `Tools/config.py`.
2. Brief en copy lezen; claims uit `00_Brand_Core/Feiten & Actuele Staat.md`.
3. Foto kiezen ([[Foto-index]]), held-bbox bepalen: `python Tools/gridsheet.py <foto> <uit.jpg>`; foto, bbox en copy in `Tools/ads.json`; klasse in `LAYOUT` in `Tools/build.py` (P, K, S of F).
4. Bouwen en meten: `python Tools/build.py <id> [--fmt 4x5|9x16] [-v]` (grade, HTML, render met Chrome, check.py met 13 regels). Uitvoer in de werkmap `out/`.
5. Set controleren: `python Tools/check.py --set`; contactsheet: `python Tools/sheet.py 4x5 <uit.jpg>`.
6. Minimaal 2 zelfcontrole-rondes (wijzigen, opnieuw meten, kijken). Niets publiceren of uploaden; Lars of Team HÏ Grip zet live.
7. Nieuwe correctie of beste resultaat? Leerregel toevoegen in [[Leerregels-Ads-Design]]; goed eindresultaat (<= 300 KB) in `Voorbeelden/`.

## Inhoud van de map
- `Tools/`: `build.py` (bouwen + renderen), `check.py` (meting R1–R16), `grade2.py` (foto-venster, kleurgrade, gradient), `sheet.py` en `pilot_sheet.py` (contactsheets), `gridsheet.py` (raster voor held-bbox), `probe.py` (kleuren/rects per ad), `crop.py`, `config.py` (instellingen), `ads.json` (specs: foto, bbox, copy), `src/ads-v6.css` + `src/fit.js` (sjabloon: HTML wordt door build.py gegenereerd), `assets/wordmark-wit.png` (logo).
- `Fonts/`: Poppins Black Italic en Poppins Medium (de enige twee die de CSS gebruikt) + `OFL.txt` (SIL Open Font License 1.1, Poppins Project Authors). Herkomst: dezelfde Poppins als in de Drive-map `Content - HÏ Grip/Designen/…/higrip-video/fonts/` (fontsource-poppins 5.1.0). Overige gewichten: daar of via Google Fonts downloaden.
- `Voorbeelden/`, `Foto-index.md`, `WORKFLOW.md`, `VERBETERPLAN.md`, `Leerregels-Ads-Design.md`.

## Regels voor deze map
Geen computerpaden, geen tokens, geen foto's of video's, geen `__pycache__` of logs in de vault (draai de tools met `PYTHONDONTWRITEBYTECODE=1` of ruim `__pycache__` op). Canva-ontwerpen alleen via design-ID. `00_Brand_Core` blijft ongewijzigd.

## Portabiliteitstest (16-11-2026): GESLAAGD
- Opzet: map `Ads-Workflow` gekopieerd naar een lege tijdelijke map buiten de vault en buiten de HiGripMedia-uitvoermap; werkmap (`ADS_WORK`) ook leeg en buiten de vault. Alleen de vaultbestanden + `HIGRIP_MEDIA_ROOT` voor de bronfoto.
- Uitgevoerd: `python Tools/build.py vb-b-sporters --fmt 4x5 -v`. Resultaat: **ALLE PASS (13 regels)**, klasse K, licht 37% / donker 59%, identiek aan de originele v6-meting. Uitvoer: `.png`, `_notext.png`, `_rects.json`, `_check.txt` in de tijdelijke werkmap.
- Wat ontbrak / wat misging: (1) de eerste testrun faalde door een fout van mij in `build.py` bij het ontkoppelen van paden (variabele `p`), meteen hersteld; (2) `HIGRIP_MEDIA_ROOT` moet een pad zijn dat de gebruikte Python begrijpt (Windows: `C:/...`, niet `/c/...` uit git-bash); (3) niets anders ontbrak: lettertypen, CSS, fit.js en logo worden door `config.prepare_work()` naar de werkmap gekopieerd.
- Niet getest: andere laptop, macOS/Linux, Edge i.p.v. Chrome, en de andere 15 ads (alleen build-pad van 1 ad en 1 formaat; `--set`, `sheet.py`, `probe.py`, `grade`-reflect-pad in 9:16 niet opnieuw gedraaid). De hulpscripts `sheet.py`, `pilot_sheet.py` en `probe.py` zijn alleen aangepast op paden.
- Zoekopdracht naar Windows- en macOS-gebruikerspaden (de patronen "C:" + backslash of slash + "Users" en slash + "Users" + slash) in alle tekstbestanden en in de binaire bestanden (logo, fonts, JPG's): **0 treffers**.
