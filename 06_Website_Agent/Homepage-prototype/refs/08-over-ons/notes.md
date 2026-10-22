# Referentie 08 · Battleface (Studio Freight, studiofreight.com/work/battleface)

Bron: schermopname Lars `battleface.mp4` (8,2 s, 1920×1032). Frames: `frames/` (2 fps), `contact.png`, `contact-fine.png` (10 fps crop).

## Layout
- 50/50: links een zwart tekstvlak, rechts een full-bleed foto. Tekst gecentreerd, 4 regels, volt op zwart.
- Voor HÏ Grip: links tekst (achtergrond uit rhythm.json), rechts teamfoto in afgerond mediaframe. Mobiel gestapeld: tekst boven, foto onder.

## Motion (de kern)
- De tekst wisselt in een lus tussen **drie letterstaten**:
  1. dun en wijd (mono-achtig, ruime letterafstand)
  2. zwaar en smal (condensed black)
  3. zwaar en iets breder
- De wissel is **hard (steps), niet vloeiend**: geen fade of morph.
- De wissel loopt **per regel van boven naar onder**, ±80 ms per regel. Halverwege staan er dus kort twee staten tegelijk (zie `shot-switch-midline.png`: regels 1–3 zwaar, regel 4 nog dun, met een korte overlap van 1 frame).
- Elke staat blijft ±0,8 s staan; één volledige cyclus duurt ±2,6 s.
- Er is geen trigger: de lus loopt zolang de sectie in beeld is.

## Vertaling naar Poppins (alleen Poppins toegestaan)
- Staat 1: Poppins 300, letter-spacing 0.08em (max 0.1em volgens lint)
- Staat 2: Poppins 900, letter-spacing −0.04em
- Staat 3: Poppins 800 italic, letter-spacing −0.02em
- Wissel per regel via een klasse (geen transition); stagger 80 ms = 1 × `--hp-dur-1`-fractie, via base.js-timer, alleen actief als de sectie in beeld is (IntersectionObserver binnen hpReveal).
- Regelhoogte vast, zodat de layout niet verspringt: elke regel heeft een vaste hoogte en `white-space: nowrap`. De breedte mag variëren, de hoogte niet.
- Reduced motion: staat 2 staat stil, geen timer.

## Teamfoto
- `../../teamfoto.jpg` (2000 px breed, van `Teamfoto - HÏ Grip.jpg`, 4000×1848). Voorlopige keuze van Lars (18-10). Vier personen; liggend formaat 2,16:1.

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[03 Website Agent — Index]] · [[Home]]
