---
status: actueel
---

# Computerpaden uit vaultnotities (16-11-2026)

Aanleiding: basisregel 16 (geen computerpaden in de vault). Taak t_6ec5756a, doorgegeven door Denzel.

## Aangepast (tekst, 28 bestanden, 65 regels, regel voor regel vervangen)
- Pad naar de lokale mediamap `C:\Users\<naam>\HiGripMedia\...` is nu `<HiGripMedia>/...` (submap behouden). Uitleg van de plaatshouder staat in [[Mediabibliotheek HiGripMedia]]. Bestanden: Mediabibliotheek, ads-html fase1/fase2/fase4, ads-visuals-voetbal-rugby, concurrent-ads-langlopend (v1+v2), rugby-shoot-fotolijst, Agent Werk & Kwaliteit Overzicht.
- Overige `C:\Users\<naam>\...` is nu `<gebruikersmap>\...` (rest van het pad behouden). Bestanden: API & Tool Connections (9), Waar staat wat (9), Routines README en SEO, PROCEDURE.md, Website-CRO (2 notities), Website-techniek (4), Ads-funnel-en-snelheid, ek-rugby-plan, Zoek Script & Gids, seo-audit, Sportlanding-systeem, Technische Procedures, Update Log.

## Niet aangepast
- Frontmatter `bronbestand:` bij 18 notities (opdracht: frontmatter niet wijzigen). Eigenaar beslist of dit veld leeg/herschreven moet.
- `02_Dashboard/_backlog/ACTIEBACKLOG.md`, 2 treffers (regel 33 en 39, oud thema-pad): niet rechtstreeks bewerkt.
- `00_Brand_Core`: 0 treffers. `07_Design_Agent/Ads-Workflow/Tools/` (config.py, ads.json): geen computerpad; MEDIA_ROOT komt uit `HIGRIP_MEDIA_ROOT` of de thuismap.

## Controle
Treffers `C:\Users` in .md (00–09): 28 bestanden aangepast (65 regels); na de ingreep 19 bestanden met een treffer over (18 alleen frontmatter-veld `bronbestand` + ACTIEBACKLOG, 2 treffers). Een aantal bestanden stond in zowel de tekst- als de frontmatterlijst.. `vault_nav.py --dry-run` draait (11 nav-wijzigingen staan open, niet van deze taak; niet uitgevoerd). `build_register.py --check`: OK, 0 FOUT. Niets afgevinkt, niet gecommit.

> Map: [[08 Operations Agent — Index]]
