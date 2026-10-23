# Homepage 1.36 als Shopify-secties

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[03 Website Agent — Index]] · [[Home]]

Deze map zet het homepage-prototype (artifact v1.36) om naar 14 Shopify-secties voor het Horizon-thema. Elke tekst, kleur, foto, uitlijning, maat, ruimte en animatie is daarna in de thema-editor aan te passen. Standaard zien de secties er exact uit als het prototype, zowel op mobiel als op laptop.

## Wat er in het thema komt

| Bestand | Wat |
|---|---|
| `sections/hp-01-hero.liquid` … `hp-14-teamorders.liquid` | De 14 secties, elk met een eigen instellingenpaneel (zie de koppen per paneel) |
| `snippets/hp-base.liquid` | Laadt Poppins, `hp-home.css` en `hp-home.js` (één keer per pagina) |
| `snippets/hp-img.liquid` | Responsieve afbeelding uit Shopify Bestanden |
| `assets/hp-home.css`, `assets/hp-home.js` | De stijl en motion van het prototype, afgeschermd van de themastijl |
| `templates/index.json` | De homepage met de 14 secties in de volgorde van het prototype |
| `layout/theme.liquid` | Alleen de oude `faq-schema` op de homepage eruit; de FAQ-sectie levert nu zelf de FAQPage-data |

## Hoe het werkt

- `bron/` is de bron: het prototype (`homepage-1.36.html`) per sectie geknipt.
- `src/` bevat de CSS en JS uit het prototype en de Liquid-sjablonen.
- `specs/sNN.py` beschrijft per sectie de instellingen. Een maat is een schuif in px waarvan de standaard de gemeten waarde uit het prototype is; een kleur zet een CSS-variabele.
- `python3 build.py` bouwt `theme/`. Met `--measure` meet het eerst de maten en kleuren opnieuw in het prototype (`test/measure.json`).
- `./run.sh [secties]` bouwt, rendert het thema lokaal (liquidjs) en vergelijkt elke sectie pixel voor pixel met het prototype.
- `test/settings_test.js` zet elke instelling op een andere waarde en controleert dat de sectie daadwerkelijk verandert; `test/combo_test.js` doet dat voor gevallen die pas na een handeling zichtbaar worden (menu open, hover, logo-afbeelding, animaties).
- `test/themecheck.js` draait Shopify Theme Check.

Uploadlog: [[Update Log]] (23-10-2026).

## Terugzetten

`backup/` bevat `templates/index.json` en `layout/theme.liquid` van thema `202669916487` van vóór deze upload. Terugzetten = die twee bestanden terugzetten; de `hp-*`-bestanden mogen blijven staan.
