# Referentie 07 · Eight Sleep "A night on the Pod, personalized to you"

Bron: https://www.eightsleep.com/eu/ (Playwright, 18-10-2026, cookies: "Essential cookies only"). Shots: `1440-state1.png`, `1440-hover-next.png`, `1440-t150ms.png`, `1440-t650ms.png`, `1440-dragging.png`, `1440-state3.png`, `375-state1.png`, `contact.png`.

## Layout (1440)
- Sectie ±1020 px hoog, full-bleed achtergrond: foto (nachtlucht) op een kleurvlak `rgb(3,25,56)`. De kleur van het vlak heeft `transition: background-color .495s cubic-bezier(.4,0,.2,1)`.
- Kop gecentreerd bovenaan: max 658 px breed, h2 44/48, gewicht 500. Daaronder een lead van 18 px, max 450 px.
- Carrousel: een **gecentreerde actieve kaart van 520 × 440** met de buren links en rechts (±340 px breed, kleiner en gedempt, dus de buren zijn half zichtbaar). Gap 56 px.
- De randen van de rij vervagen met een mask: `linear-gradient(90deg, transparant, zwart 80px, zwart calc(100% − 80px), transparant)`.
- Kaarten: afgerond (±24 px), glasachtig: licht-transparant vlak met blur. Beeld bovenin de kaart, titel eronder, op de actieve kaart ook bodytekst.
- Onder de rij: 5 stippen plus een vorige- en volgende-knop (rond, 56 px, rand in currentColor, opacity .7 → 1 bij hover).
- Scroll-snap `x mandatory`; de lus is oneindig (de inhoud is herhaald en scrollLeft springt terug).

## Motion
- Volgende: de rij schuift één kaart op (±462 px) in ±400 ms en snapt. De nieuwe actieve kaart groeit naar 520 × 440; de vorige krimpt en dimt.
- Zwevende chips (Apple Health, Health Connect, melding) komen per moment met fade en kleine translate binnen, ±200 ms na de wissel.
- Hover op een knop: opacity .7 → 1, 150 ms.
- Opmerking: de achtergrondkleur bleef in onze test bij elk moment `rgb(3,25,56)`. Het wisselgedrag per item is daarom **onze eigen spec** (brief 07): de hele sectie-achtergrond gaat naar de sporttint uit rhythm.json zodra de volgende sport centraal staat, met dezelfde duur (±500 ms) en standaard-easing.
- In de automatisering schoof de carrousel niet blijvend door (oneindige lus springt terug), daarom zijn er geen opnames van staat 2–5. De structuur hierboven is gemeten in de DOM.

## Mobiel (375)
- De kop staat bovenaan, de actieve kaart is bijna schermbreed met een stukje van de buur zichtbaar, en navigeren gaat via swipen. Zie `375-state1.png`.

## Vertaling naar HÏ Grip (sectie 07)
- Kaart = sportfoto (rijk, rand-tot-rand in de kaart), met de sportnaam en één regel. De hele kaart is een link naar de sportpagina-URL uit facts.json.
- Slepen en swipen via `hpDrag` (een swipe telt niet als klik). Pijltjestoetsen werken ook. Vorige/volgende als ronde knoppen; geen stippen nodig bij 4 items, maar wel aria-live met "Sport X van 4".
- Achtergrond: per sport een gedempte tint (rhythm.json), nooit volle volt, royal blue, pumpkin of tangerine.
- Geen glas-blur nodig; afgeronde mediaframes volgens `--hp-radius-media`.

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[06 Website Agent — Index]] · [[Home]]
