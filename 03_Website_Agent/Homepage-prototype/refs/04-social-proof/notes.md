# Referentie 04 · "Op de baan, het veld en in de gym" (https://claude.ai/artifact/V9rrUz6EWAPMmavz3JSC8N, sectie .people)
Lokaal gerenderd (artifact-HTML met CDN-beelden), Playwright 18-10. Shots: `1440.png`, `1440-scrolled.png`, `375.png`. Fragmenten: `fragment.html`, `fragment.css`, `fragment-site.js`.

## Layout referentie
- Kop linksboven (H2 800), lead eronder. Daaronder een rij foto's van gelijke hoogte (min(62vh, 520px)) met eigen breedte (aspect-ratio per foto), radius 18 px, onderschrift (sport) eronder.
- Desktop: de rij schuift horizontaal mee met verticaal scrollen (sticky). Mobiel: overflow-x met scroll-snap.

## Voor 04 (brief)
- Zelfde layout, maar horizontaal **slepen via hpDrag** (geen sticky scroll-kaping, geen overflow-scroll).
- Achtergrond off-white (rhythm), niet donker zoals de referentie.
- Hover toont dat je kunt klikken (cursor, lichte schaal van de foto en de cue "Open foto"); op mobiel een zichtbare cue (copy 04.hint_touch).
- Klik of tik opent de foto groot via hpLightbox (vorige/volgende, Esc en klik buiten sluiten). Een sleepbeweging opent niets.
- Alleen de 8 foto's met sections ["04"] uit assets.json, in die volgorde; onderschriften uit copy 04.captions.
- Geen 3500+/Trustpilot in de lead (staat al in 03): lead uit copy.json.

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[03 Website Agent — Index]] · [[Home]]
