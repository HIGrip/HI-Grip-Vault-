---
type: plan
bijgewerkt: 2026-11-16
---

# Verbeterplan ads (v5 fase 1, bijgewerkt na v6 en QA)

Doel: HTML-ads op het niveau van Lars' Canva-ads (zie [[Voorbeelden]]). Sjabloonregels: [[WORKFLOW]].

## Kern (v5, nog geldig)
1 held in kleur (>= 55% zichtbaar waar mogelijk), 1 groot Volt-blok (>= 85% breed, >= 11% vlak), Volt enige accent, max 6 elementen, kop >= 100 px, gradient onder, marge 72 px.
Vervallen t.o.v. fase 4b: tabel met 3 rijen, kleine bronregel, "GA DOOR..." onderin, mono-grade, korrel/halftone, //-merkteken, sportlabel (v6).
Grootste hefboom: fotokeuze (volledige actie, held buiten de tekstzone) en korte kop.

## Stand per versie
- v5 fase 2: 16 ads, 13/13 regels, maar ogen nog te hetzelfde en te donker.
- v6 (16-11): sportlabel weg, licht/donker-vlakken, 4 layout-klassen; 16/16 ALLE PASS, R16 variatie OK.
- Onafhankelijke QA op v6 (16-11): CORRIGEER (licht), 16/16 technisch schoon.

## Open punten (uit QA, nog niet opgelost)
| Punt | Actie | Eigenaar |
|---|---|---|
| Bronregel (95%-ads) is ~11 px op 400 px breed, slecht leesbaar | grotere bronregel of korter bewijs; ontwerpkeuze | Design |
| Derde-merk-bal in rugbyfoto's (en een andere bal op voetbalfoto's) | rechten/merkcheck; na rugbyshoot (17-11) nieuwe foto's | Team HÏ Grip |
| 95%-ads (vb-c, rb-c) juridisch toetsen | vóór gebruik | Team HÏ Grip |
| R12 geeft `nan` voor kleine tekst als er geen bewijsregel is | meetmelding netjes afhandelen | Design |
| Zwakste ads: rb-a 9:16, rb-c 9:16, vb-a 9:16 | herontwerp | Design |
| Rugby = 1 foto in 4 crops | nieuwe foto's uit shoot 17-11 (shotlijst in `02_Dashboard/2026-11-10-rugby-shoot-fotolijst.md`) | Team + Design |
| Niet gemeten: Meta UI-overlays, kleurprofiel, alt-tekst SEO, reflect-pad artefacten 9:16 | check in een volgende ronde | Design |

## Werkwijze voor elke volgende ronde
1. Lees [[Leerregels-Ads-Design]] vóór je begint; voeg elke nieuwe correctie van Lars daar toe (regel + datum + reden).
2. Eén wijziging per ronde, daarna opnieuw meten (`check.py`) én kijken.
3. Beste goedgekeurde resultaat: kopieer naar `Voorbeelden/` (max ~10, <= 300 KB) met stijlnotitie in [[Voorbeelden]].
4. Drempel verruimen mag alleen met reden in [[WORKFLOW]] §3 (de twee verruimingen van v6 staan er al in).

> Map: [[07 Design Agent — Index]]
