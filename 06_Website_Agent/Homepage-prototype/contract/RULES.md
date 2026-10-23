# RULES · HÏ Grip homepage-prototype

## Voorrang
contract/RULES.md gaat vóór §10, §10b, §10c en §14 van ~/.claude/CLAUDE.md: geen eyebrows, geen volt-statistieken in rijen, geen announcement bar, geen A/B-varianten, geen eigen keuze voor de achtergrond. Voor feiten wint de vault.

## Wat je krijgt
- `contract/tokens.css`: de enige plek met kleuren (`--hi-*`), ruimte (`--hp-space-*`), type (`--hp-type-*`), `--hp-radius-media`, `--hp-ease`, `--hp-dur-1/2/3`.
- `contract/base.css`: reset, `.hp-section`, `.hp-container` (gutter), `.hp-media`, `.hp-pill` (CTA met chevron), lightbox, reduced motion.
- `contract/base.js`: `hpDrag`, `hpReveal`, `hpInView`, `hpLightbox`, `hpOnResize`, `hpOnScroll`, `hpReduced`. Gebruik deze; schrijf geen eigen sleep-, reveal- of lightboxcode.
- `contract/copy.json` (jouw sectie), `facts.json`, `assets.json`, `rhythm.json`.
- `refs/NN-naam/`: screenshots, fragmenten en `notes.md` van jouw referentie.
- `sections/01-hero/`: het ijkpunt. Zo ziet een opgeleverde sectie eruit.

## Sectieformaat (verplicht)
Lever `sections/NN-naam/` met:
- `section.html`: één `<section class="hp-section hp-NN" data-hp="NN" …>` met de inhoud. Geen `<style>` of `<script>` erin.
- `section.css`: elke selector begint met `.hp-NN-` (of `.hp-NN` zelf / `[data-hp="NN"]`). Geen losse elementselectors (`img {}`, `h2 {}`), geen `:root`.
- `section.js`: één IIFE die alleen binnen `document.querySelector('[data-hp="NN"]')` werkt. Geen `window`-/`document`-listeners; resize via `hpOnResize`, scroll via `hpOnScroll`. Leeg bestand mag als de sectie geen JS nodig heeft.
- `meta.json`: `{ "id", "name", "bg" (uit rhythm.json), "assets": [ids], "links": [urls], "interactions": [..], "notes" }`.
- `shots/`: `1440.png`, `375.png`, plus elke hover-, tik- en interactiestaat (`1440-hover-*.png`, `375-tap-*.png`, `*-drag.png`, `*-lightbox.png`, `*-esc.png`, `375-reduced.png`).

Opleveren pas als `python contract/lint.py sections/NN-naam` groen is.

## Bouwregels
- Vanilla JS, geen externe bibliotheken. Alleen Poppins (al geladen in preview en index).
- Kleuren alleen via `var(--hi-*)`. Ruimte via `--hp-space-*`, type via `--hp-type-*`.
- Elke `transition`/`animation` gebruikt `var(--hp-ease)` en een `var(--hp-dur-*)`.
- `letter-spacing` maximaal 0.1em.
- Hover heeft altijd een tik-variant op mobiel (`@media (hover: hover)` voor hover; tik zet dezelfde staat via een klasse of `aria-pressed`).
- De pagina is compleet in rust: geen `opacity: 0`-wachtstanden die op een observer wachten. Motion verandert iets dat al zichtbaar is (positie, schaal, clip, kleur) of loopt op scroll.
- Reduced motion: alles staat in de eindstand, lussen staan stil.
- Alt-tekst op elke afbeelding (uit `assets.json` of `copy.json`), decoratieve beelden `alt=""`.
- `fetchpriority="high"` alleen op de hero; elke andere afbeelding `loading="lazy"`, met `width` en `height`.
- Afbeeldingen alleen via de paden in `assets.json` (`img/…`, `f360/…`, `teamfoto.jpg`). Nooit een CDN-URL in `src`: de artifact-CSP blokkeert die.
- Tekst alleen uit `copy.json` en `facts.json`. Geen eigen copy, geen eigen cijfers.
- Links alleen uit `facts.json`.
- Maximaal één primaire CTA per sectie: `.hp-pill` (zwart op licht, `.hp-pill--light` op donker). Nooit een accentkleur als vulling.
- Koppen in hoofdletters via CSS; jij/je.
- Geen horizontale scroll op 375 px; gutter komt uit `.hp-container`.

## Anti-slop (harde regels)
Niet gebruiken:
- stippenraster
- schuine sticker-badges
- volt onderstreepstrepen
- eyebrow-labeltjes met wijde letterspatiëring
- grote cursieve volt-cijfers in rijen van drie
- prominente bron- of voetnootregels
- volle royal-blue of volt sectievlakken
- losse tekstlinks zonder reden
- blokken van ongelijke hoogte zonder reden
- "binnenkort"-bandjes
- verzendbeleid-info (uitzondering: de verzendbelofte als korte frase in 03)
- een braaf glijtest-balkje
- oranje gloed op zwart
- grijze placeholders waar echte foto's bestaan

Wel:
- een rustige lichte basis
- afgeronde mediaframes (`--hp-radius-media`)
- veel lucht
- volt hooguit als detail
- motion bij hover of scroll die iets uitlegt (geen standaard fade-ups)
- het gevoel van Apple, Rivian, Studio Freight, Stripe, Loop en Eight Sleep

Alleen Poppins, koppen in hoofdletters, jij/je, CTA = pill met chevron (zwart op wit of wit op zwart, nooit een accentkleur als vulling).

## Testen
- `preview.html?s=NN` laadt tokens, base, jouw sectie en de achtergronden van de buren uit `rhythm.json`. Open via een lokale server (`npx http-server` in de map Homepage-prototype) of `file://`.
- Screenshots met Playwright op 1440×900 en 375×812, plus elke interactie.
- Je schrijft alleen in je eigen map `sections/NN-naam/`. Lees `theme-ref/` niet; alles staat in `refs/` en het contract.

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[06 Website Agent — Index]] · [[Home]]
