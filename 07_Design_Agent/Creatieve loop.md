---
type: werkwijze
gebied: design-agent
status: concept
bijgewerkt: 2026-11-20
bron: taak t_856f7143 (herschrijving na correctie Lars 19-11-2026; niets geactiveerd)
---

# Creatieve loop

> **Concept.** Vervangt na goedkeuring de meetgestuurde ronde in [[WORKFLOW]]. Kijken stuurt; metingen vangen alleen harde fouten. Stuurmiddel zijn de twee toetsen uit [[Design DNA]].

1. **Lezen (klein houden).** [[Design DNA]], 3 referenties uit [[Ontwerp-analyse]] bij kanaal en idee, brief en copy. Niet de hele regelstapel.
2. **Drie concepten.** Drie duidelijk verschillende richtingen (andere held, indeling of onverwacht element; geen kleurvarianten), elk met een grove thumbnail. Kies één en schrijf waarom. Kijk wat de recente stukken deden en kies bewust een andere indeling dan de laatste.
3. **Bouwen.** HTML/CSS plus headless Chrome voor ads en social; Canva alleen lezen. `claude-design` helpt bij compositie en slop-diagnose.
4. **Kijken met `vision_analyze`.** Render op volledige grootte en op klein formaat. Doe beide toetsen:
   - **Herkenningstest:** naast de vaste referentieset hieronder; zou iemand zonder logo zeggen dat het hetzelfde merk is?
   - **Variatietest:** naast 8 eerdere stukken (9 totaal); 9 ideeën in één familie, of 9 keer hetzelfde? Richtwaarde: maximaal 2 van de 9 met dezelfde indeling; geen harde regel.
   - **Smaakkompas:** stel de 10 vragen uit [[Smaakkompas]] (bronkwaliteit, compleetheid, zoomen op randen, effect gedoseerd, held en verhouding, stelligheid, familie, echt platform, goedgekeurd laten staan, premium-vergelijking).
   Schrijf kritiek in eigen woorden: wat is saai, wat voelt niet als HÏ Grip, wat is de held in één seconde. Beeldmodellen zien kleuren en tellingen soms fout: benoem twijfel.
5. **Verbeteren.** 2 rondes: nieuwe render, nieuwe kritiek, beide toetsen opnieuw. Faalt de herkenning: versterk een anker. Faalt de variatie: andere indeling, niet andere kleur. Na 2 rondes zonder verbetering: terug naar stap 2 of escaleren.
6. **Vangnet.** `check.py` en R-regels alleen op harde zaken: echt product, claim en feit kloppen, leesbaar op klein scherm, veilige zones, merknaam met trema. Een falende harde check blokkeert. Stijlmaten sturen niet; een bewaarde waarde is een richtwaarde met reden.
7. **Oplevering.** Vast formaat; vermeld de uitkomst van beide toetsen, de gebogen regel en wat niet gecontroleerd is. Toetsing door een ander profiel: D14 in [[Regelvoorstel Design DNA]].

## Vaste referentieset voor de herkenningstest

Vijf eigen HÏ Grip-stukken (titel en bron, geen kopie) uit [[Ontwerp-analyse]]:
1. Ad 'GRIP' (RUGBY): Ontwerp-analyse A #1, gedeelde Drive > Content > Ads.
2. Ad 'SPORT' (RUGBY): Ontwerp-analyse A #2, idem.
3. Performance Days A (inschrijven): Ontwerp-analyse B #4, Email-Workflow/Voorbeelden.
4. Performance Days B (code): Ontwerp-analyse B #5, idem.
5. Inspiratie-ad 'Performance Gripsok': Ontwerp-analyse A #3, gedeelde Drive > Inspiratie > Foto's.

Vervang een stuk alleen na akkoord van Lars. Aanname: dat Lars #5 goed vindt is niet uitdrukkelijk bevestigd (Ontwerp-analyse noemt het eigen inspiratie).

## E-mail (concept, 20-11-2026)

Zelfde loop, full-length op desktop (600px) en mobiel (390px). Extra kijkvraag in stap 4: leest de mail als één geheel (E15) en loopt er per sectiegrens iets over? Bekijk ook de fallback in effen kleur. Voorstel, niet besloten: korte tussencheck met Lars na de 3 concepten. Details: [[WORKFLOW-Email]] §5 en §6.

## Gaten
- Smaak blijft het oordeel van een beeldmodel plus de maker; zonder Lars of een toetser is dat zwak bewijs.
- De variatietest vraagt een contactvel van eerdere stukken; ontbreekt dat, test dan tegen wat er is en meld het.

> Map: [[07 Design Agent — Index]]
