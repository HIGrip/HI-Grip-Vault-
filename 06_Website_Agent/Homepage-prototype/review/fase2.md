# Fase 2 · assemblage en aansluiting (19-10-2026)

## Build
- `py -3 build.py` → index.html 148 KB, 13 secties, 110 files (foto's, teamfoto, 69 frames server-side).
- `lint.py --page index.html` → GROEN. Eén FAQPage, geen dubbele ID's.

## Test (`node tools/fase2.cjs`, eigen headless Chrome)
- 70/70 controles geslaagd, 0 console-errors, 0 mislukte requests.
- Per breedte (1440, 375): geen horizontale scroll; achtergrond per sectie = rhythm.json; ≤1 pill per sectie.
- 04: slepen verschuift, slepen opent niets, klik opent lightbox, Esc sluit, scroll-lock weg. 375: tik opent lightbox.
- Lightbox en sportslider blokkeren elkaar niet: pijltje in de lightbox verschuift 07 niet.
- 05: hover op "Maximale grip" activeert de feature.
- 07: volgende → andere achtergrond; slepen → andere achtergrond en geen navigatie; klik op centrale kaart → sportpagina. 375: tik volgende wisselt tint.
- 11: FAQ opent en sluit; JSON-LD geldig.
- Screenshots: review/fase2/1440-full.png, 375-full.png, _1440-overview.png, _375-overview.png, 1440-04-lightbox, 1440-05-hover-grip, 1440-07-next, 1440-11-open, 375-04-lightbox, 375-reduced-top.

## Gevonden en opgelost
- Verminkte tekens (HÃ, â‚¬) in de lokale test: build schreef geen `<meta charset>`; toegevoegd (Denzel, build.py).
- Mobiele emulatie op 980 px: viewport-meta ontbrak lokaal; toegevoegd met viewport-fit=cover (Denzel, build.py).
- Favicon-404: `<link rel="icon" href="data:,">` (Denzel, build.py).
- Sectie 12: drift duwde regel 1 buiten beeld → agent 12 (extra ronde) + pill-uitlijning in transitions.css (Denzel). Hertest 70/70, 0 errors.

## Transitions
- transitions.css bevat alleen de pill-uitlijning van 12; alle buurovergangen zijn harde, bewuste kleurwissels volgens rhythm.json.

## Links op live higrip.nl (curl -L, 19-10)
- 28 bestemmingen gecontroleerd (review/fase2/links-status.txt). Alle higrip.nl-links 200: 4 sportpagina's (ook /pages/gripsokken-voor-rugby, titel "Gripsokken voor rugby"), 3 producten, collectie, over-ons, zakelijk, contact, FAQ, blog en alle beleids- en policypagina's.
- Ankers #clubs en #retailers bestaan live NIET (geen id op /pages/zakelijk); de links laden de pagina (200) maar springen naar boven. Werkt pas als het bronthema live gaat.
- Trustpilot: 403 voor curl (botblokkering), in een browser bereikbaar. Socials: 200 (Facebook-redirect naar /people/higripnl).

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[06 Website Agent — Index]] · [[Home]]
