---
id: "2026-11-09-ads-html-fase1"
titel: "Ads HTML fase 1: 4 ads in 4:5"
kerntitel: "Design bouwde 4 ads in 4:5 met HTML/CSS en headless Chrome"
datum: "2026-11-09"
bron: "los"
routine: ""
categorie: "Social"
status: "nieuw"
prioriteit: "P3"
samenvatting: "Eerste ronde HTML/CSS-ads (taak t_144c0efb): vier ads in 4:5 met vast tokenstelsel. Niets gepubliceerd of geüpload."
gerelateerd: []
vervangt: []
bronbestand: ""
deadline: ""
---
# Ads HTML fase 1: 4 ads in 4:5 (09-11-2026)

> Map: [[Waar staat wat]]

Taak t_144c0efb. Map: `<HiGripMedia>/_Output/design/ads-html/` (src = HTML/CSS/JS, img, fonts, out = PNG 1080x1350, `out\_contactsheet.png`). Niets gepubliceerd of geüpload.

## Systeem
- `src/style.css`: tokens (zwart #0A0A0A, wit, volt #CCFF00, rood #E10600, marge 72 px), Poppins via @font-face (relatief), lagen: foto mono, vignet, SVG-filmkorrel (overlay), halftone-raster, schuine balk, tag-parallellogram, wordmark. `src/fit.js` schaalt koppen op doelbreedte (936 px) en schrijft tekstblokken weg voor meting. `src/render.py` rendert (Chrome headless, eigen user-data-dir) en `src/measure.py` meet contrast.
- Poppins geladen: `document.fonts.check` = true in alle 4.
- Technische les: headless Chrome toonde `<img src=bestand>` niet bij screenshot (foto ontbrak); render.py zet afbeeldingen daarom als data-URI in een tijdelijke kopie. De bron-HTML blijft met relatieve paden.

## Per ad
| Ad | Foto | Referentie die ik volgde | Effecten |
|---|---|---|---|
| vb-1 SITUATIE | `Sporten\VOETBAL\IMG_1975.JPG`, middencrop 4:5 (echte foto, voet/schoen/sok, geen gezicht) | 'insta-do-the-work-oversized-typo': kop over de breedte; 'zwartwit-een-kleuraccent-neongeel': mono beeld + één volt-woord | grayscale+contrast, kop 226 px op SCHUIFT in volt met glow, schaduwverloop boven, halftone volt rechtsonder, vignet, korrel, schuine balk |
| vb-2 KLANTWOORD | `Sporten\VOETBAL\IMG_3702.JPG`, linkercrop (echte foto, trap, geen gezicht) | statistiek als designelement (inspiratiepunt 7); kleur-accent-regel | 3.500+ 287 px volt, mono foto onder donker verloop, tag VOETBAL klein rechtsboven |
| rb-1 SITUATIE | `Sporten\RUGBY\HI_Grip_Instagram_Post_1080x1350.png`, **taille-omlaag crop** (x100-740, y560-1350) | zelfde als vb-1, rood alleen op SCHUIFT | mono, balbeeld rechts donker weggeschermd (derdenmerk), halftone wit, korrel |
| rb-2 KLANTWOORD | `Designen\...\BRANDPICS HUISSTIJL\rugby\HG2_I05_rugby_tunnel_silhouet_ready.png`, crop y100-1450 (leeg van baked "READY", dat staat op y~1870) | 'pain-is-fuel': silhouet met tekst eromheen | mono gedimd, 3.500+ rood 287 px bovenin op bijna zwart, tekst onder het silhouet |

Feiten/teksten letterlijk uit `ads-teksten-voetbal-rugby-v2.md` (Ad 1 en Ad 2 variant A). Geen Rox-quote. Geen prijs, geen claim naast 3.500+ (Feiten, besluit Lars 11-10-2026).

## Rugbybeeld: herkomst eerlijk
- RUGBY-map: alleen het `HI_Grip_Instagram_Post`-bestand; het ziet er als echte foto uit (vision zegt echt, niet bevestigd), maar herkomst en rechten zijn niet vastgesteld. In het volle beeld staat een herkenbaar gezicht, daarom gebruik ik alleen de taille-omlaag crop. Op de schoen staan merkstrepen (derde partij) en op de bal Gilbert (afgeschermd).
- HG2_I05 is zeer waarschijnlijk **AI/gerenderd** (neon-contour, symmetrie; de bestandsnaam HG2 wijst hetzelfde). Echte rugby-foto zonder gezicht ontbreekt voor klantwoord. Ik zet dit als beslispunt hieronder.

## Zelfcontrole (PIL, 4 renders + 1 ronde per ad extra aan correcties)
Bug gevonden in ronde 1: koppen waren te klein (block-element gaf containerbreedte aan fit-script). Opgelost met `width:max-content`; kop nu 165/226/136 px (situatie) en 287/105/126 px (klantwoord).

Contrast tekst tegen achtergrond onder de tekst (tekst verborgen gerenderd; gemiddelde en p95):
- vb-1: wit 13.6-18.3 (p95 5.7), volt 15.0 (p95 13.4), klein wit 20.0. 
- vb-2: volt 15.4 (p95 7.8), wit 18.1/15.9 (p95 5.7/5.5).
- rb-1: wit 18.4-18.9 (p95 11.0), rood SCHUIFT 3.8 (p95 3.4), klein wit 18.7.
- rb-2: rood 4.0 (p95 3.8), wit 19.3/19.7.
Alles boven 3:1 voor koppen en 4.5:1 voor wit/klein. Rood zit krap (>= 3.4) en mag niet kleiner of op lichter beeld.

Woordspaties: koppen in aparte regels, geen samengevoegde woorden; `word-spacing .08em`. Marges: alle tekstblokken tussen x=72 en x=1008 (edge_ok true).
Mobiel (375 px): contactsheet bekeken; kop leesbaar in alle 4, beeld herkenbaar.

Vision-model was onbetrouwbaar (beschreef een zwarte voetbalschoen als 'zwart-wit voetbalveld', zei eerst dat tekst afwijkt). Ik vertrouw op PIL-metingen (contrast, helderheid per vak) en rapporteer alleen wat die bevestigen.

## Wat is nog zwak (eerlijk)
1. Ik kon het resultaat niet zelf zien; de beoordeling steunt op metingen en een vision-model dat slecht beschrijft. Lars' oog is de echte toets.
2. vb-1 en rb-1 zijn dezelfde compositie (bewust, één campagne), maar de middenzone van de foto is donkergrijs en vlak (waarden 60-110); de voet zelf is zwart. Het beeld mag meer kleur/lichtpunt krijgen (bv. lichtlek in volt achter de voet).
3. rb-1 is een 1,7x vergroting van een 1080-bronbeeld: zacht, korrel verdoezelt dat deels.
4. Referentie 'Performance Grip Socks 2' (product + gras + prijsbullets): niet nagebouwd, past niet bij situatie/klantwoord.
5. Slogan "Ga door waar anderen stoppen." niet opgenomen; Social Agent liet Design kiezen. Voorstel: kleine regel onder logo in fase 2.
6. Wordmark is een uitsnede van de lockup (`LOGO SYSTEM`, 5.png) met witte kleur. 230 px breed, vrije ruimte >= piekhoogte niet formeel gemeten.

## Besluiten voor Lars
- Rugby-situatie: mag de Instagram-post-foto (herkomst/rechten onbekend, derdenmerken in beeld) worden gebruikt, of een nieuwe rugbyshoot? 
- Rugby-klantwoord: AI-silhouet (HG2_I05) accepteren, of wachten op echte foto zonder gezicht?
- Kop vb-1/rb-1: telt "JE VOET SCHUIFT IN JE SCHOEN. BIJ ELKE DRAAI/TACKLE." als vaste kop; reservekoppen niet gebouwd.

## GEBRUIKT
Skills: higrip-vault, claude-design. Tools: terminal, Python/PIL, Chrome headless (eigen profiel), vision_analyze, read/write/patch. Plugins: geen. Geen Canva.
