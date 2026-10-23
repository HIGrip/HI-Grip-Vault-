# Referentie 11 · FAQ van de zakelijke pagina (bronthema)
Bestanden: `zk-faq.liquid` (markup + JSON-LD), CSS `hg-zakelijk-v2.css` r228–262 (.zk-gf*), `hg-zakelijk-more.css`, `hg-style.liquid`, `zk-vars.liquid`.
- Kop: Poppins 900 italic, clamp(28px, 4.2vw, 52px), met een schuine zwarte balk eronder (72 × 8, skewX(-24deg)).
- Lijst: bovenrand 2px zwart; per vraag `<details>`; summary = grid [nummer 48px | vraag | ronde knop 34px]. Nummer = counter 01, 02 … in 900 italic grafiet; vraag 700, 15–17 px, niet in hoofdletters.
- Knop: cirkel 2px zwart met +; open → draait 45° en vult zwart. Open vraag: summary en antwoord op een licht vlak (in het thema #f2f1ef; hier --hi-offwhite).
- Hover (desktop): het vlak verschijnt en de rij schuift 8px naar rechts. Focus: 3px outline binnenin.
- Werking: native details/summary, geen JS nodig; reduced motion: geen transitions.
- Verschil met het thema: de eyebrow "FAQ" vervalt (anti-slop).
- Inhoud: facts.json → faq (letterlijk). FAQPage JSON-LD meeleveren in section.html (script type application/ld+json is toegestaan).

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[06 Website Agent — Index]] · [[Home]]
