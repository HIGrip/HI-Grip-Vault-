---
type: werkwijze
gebied: design-agent
status: concept
bijgewerkt: 2026-11-19
bron: taak t_c06bded9 (voorstel Design Agent; niets geactiveerd)
---

# Creatieve loop

> **Voorstel, status concept.** Vervangt na goedkeuring de meetgestuurde ronde in [[WORKFLOW]]. Kijken en verbeteren stuurt; metingen vangen alleen harde fouten op.

**Principe:** eerst smaak, dan meting. Een ontwerp dat alle checks haalt maar saai is, is mislukt.

1. **Lezen (klein houden).** Alleen [[Design DNA]] en 3 referenties uit [[Ontwerp-analyse]] die bij het kanaal en het idee passen. Brief en copy van de opdracht. Niet de hele regelstapel.
2. **Drie concepten.** Schets drie duidelijk verschillende richtingen: elk een andere held, andere schaalsprong of ander onverwacht element (geen kleurvariaties). Per concept een korte omschrijving en een thumbnail (snelle HTML-schets of grof raster, ca. 400 px breed). Kies er één en schrijf de reden: welke richting heeft de sterkste held en het scherpste contrast, en past bij het gevoel uit de brief.
3. **Bouwen.** HTML/CSS plus headless Chrome blijft de route voor ads en social. Canva alleen lezen. Skill `claude-design` helpt bij compositie (eerst één oppervlakte-archetype kiezen) en heeft een slop-diagnose; `design-md` alleen als het resultaat een tokenbestand is.
4. **Kijken.** Render en bekijk het zelf met beeldanalyse (`vision_analyze`) op volledige grootte én op 400 px. Schrijf een kritische beoordeling in eigen woorden, met minimaal deze drie vragen: *Wat is saai? Wat is merk-onveilig? Wat mist spanning?* Voeg toe: wat is de held, in één seconde leesbaar? Beeldmodellen zien kleuren en tellingen soms fout: benoem twijfel in plaats van het als feit te schrijven.
5. **Verbeteren.** Minimaal 2 rondes op basis van die kritiek, elke ronde met nieuwe render en nieuwe kritiek. Stop pas als de kritiek geen 'saai' of 'mist spanning' meer noemt; na 4 rondes zonder verbetering: terug naar stap 2 met een ander concept.
6. **Vangnet (pas daarna).** `check.py` en de R-regels draaien alleen op harde zaken: product klopt, claim en feit kloppen, leesbaar op 400 px, safe zones, merknaam met trema. Een falende harde check is blokkerend; een falende meetdrempel over stijl (bijvoorbeeld kopgrootte of aandeel licht/donker) is een signaal, geen oordeel.
7. **Oplevering.** Vast formaat; vermeld welke regel je boog (Design DNA, één regel), de kritiekrondes in korte vorm, en wat niet gecontroleerd is. Toetsing door een ander profiel met D14 ([[Regelvoorstel Design DNA]]).

## Gaten
- Smaak blijft een oordeel van een beeldmodel plus de maker; zonder Lars of een toetser is dat zwak bewijs. Daarom D14.
- Thumbnails kosten per concept een build; houd ze grof.

> Map: [[07 Design Agent — Index]]
