---
id: "2026-11-09-ads-html-fase2"
titel: "Ads HTML fase 2 (Design)"
kerntitel: "16 ads (4 types x 2 sporten x 2 formaten) gerenderd in HTML"
datum: "2026-11-09"
bron: "los"
routine: ""
categorie: "Social"
status: "nieuw"
prioriteit: "P3"
samenvatting: "Tweede ronde HTML-ads: 16 PNG's in 4:5 en 9:16 met contactsheets en crop-overzichten. Niets gepubliceerd of geüpload."
gerelateerd: []
vervangt: []
bronbestand: ""
deadline: ""
---
# Ads HTML fase 2 (Design, 09-11-2026)

> Map: [[Waar staat wat]]

Map: `C:\Users\lars\HiGripMedia\_Output\design\ads-html\` (src/ HTML+CSS, img/, out/). Fase 1 staat in `out\v1\`.
Niets gepubliceerd of geüpload. 16 PNG's: `out\{vb,rb}-{1-situatie,2-klantwoord,3-aanbod,4-vergelijking}_{4x5,9x16}.png`. Contactsheets: `out\contactsheet_4x5.png`, `out\contactsheet_9x16.png`. Crop-overzicht (zonder tekst | met tekst) per ad: `out\review\<naam>_review.png`.

## Per ad
| Ad | Foto (bron) | Referentie | Effecten |
|---|---|---|---|
| vb-1 situatie | VOETBAL/IMG_1975.JPG, GrabCut-uitsnede | insta-pain-is-fuel (tekst achter onderwerp) | SCHUIFT achter voet/been (7-13% bedekt), accentlichtlek, rim-light, local contrast, korrel, vignet, slogan onder logo |
| rb-1 situatie | Instagram-post rugby (1080x1350), taille omlaag, derden afgeschermd (Lars akkoord) | idem | idem in rood; donkere band achter SCHUIFT |
| vb-2 klantwoord | VOETBAL/IMG_3702.JPG (geen gezicht) | do-the-work oversized typo | 3.500+ oversized op donkere band, slogan |
| rb-2 klantwoord | Zelfde Instagram-post, ander deel: laarzen/ondergrond (niet rb-1-uitsnede). Eerlijk: geen andere echte rugbyfoto zonder gezicht gevonden | idem | idem |
| vb/rb-3 aanbod | Echte packshot 3-pack wit (Productfoto's/PERFORMANCE GRIP SOCKS 2.0) | Lars' Canva '3 pack AD' (thumbnail) | prijsbox accentkleur, packshot kleiner, eigen donker vlak voor '3-PACK €44,95' en 'GRATIS VERZENDING' (wit), geen was-prijs (tekstnotitie legt dat niet vast) |
| vb/rb-4 vergelijking (A) | zelfde foto's als ad 1, onderste helft | Lars' split-schema | boven grijs 'GEWONE SOK GLIJDT.' met ghost-herhalingen, schuine accentlijn, onder accent 'GRIPSOK' + 'HOUDT VAST.', bronregel 32 px |

Slogan 'Ga door waar anderen stoppen.' staat onder het logo bij ad 1 en 2 (notitie: niet bij ad 3; bij 4 bewust weggelaten wegens bronregel). Wordmark 310 px breed (was kleiner). 9:16: boven 150 px en onder 250 px vrij van tekst/logo (logo-onderrand op 275 px van onder, tags op 170 px).

## Aanpassing na Denzels feedback
rb-3/vb-3: onderregels lagen over de sokken. Nu sokken kleiner/hoger, onderregels op eigen zwart vlak, beide wit. Ook toegepast in 9:16. vb-1 behouden.

## Metingen (PIL, pixel onder de glyphs vs. tekstkleur; bronnen: `adbuild3/prev/*_m.json`)
- Kopteksten: laagste mediaan 3,6:1 (rode SCHUIFT / 3.500+ / GRIPSOK op rugby; ≥3:1 voor grote tekst OK, p10 3,2-3,3 bij rb-1).
- Alle witte/kleine tekst ≥ 8,7:1 mediaan; p10 ≥ 5,0 behalve rb-2 9x16 'SPORTERS GINGEN JE VOOR.' (p10 2,7, mediaan 12,6) en rb-1 9x16 'IN JE SCHOEN.' (p10 4,9) – randgebieden.
- Bronregel 32 px in ad 4 (mediaan 15,9-18,7).
- Prijsbox: voetbal zwart op volt 17:1; rugby wit op rood 4,9:1 (OK ≥4,5).
- Woordspatie: letter/word-spacing in CSS; afkapping via bounding boxes (alle binnen 72 px marge, 936 px breed). 375 px-versie: `prev/*_375.png` (alleen gemaakt, niet allemaal visueel bekeken).

## Beperkingen / eerlijk zwak
- Beeldmodel is vaag en hallucineerde soms (las 'SCHUFT', 'ZINGEN'): ik vertrouw op metingen en op de review-beelden; Denzel/Lars moeten `out\review\*` zelf beoordelen.
- Tekst-achter-onderwerp werkt alleen bij ad 1 (vb en rb). Bij ad 2 is de uitsnede (te veel bedekking, 33-68%) weggelaten: oversized getal staat vóór de foto.
- Maskers (GrabCut) kunnen lichte halo's hebben; rb-1 blijft zacht door vergroting (bron 1080 px), scherpte+korrel verhelpen dat deels.
- Vorm bij ad 4: ghost-herhalingen zijn volgens beeldmodel wat vaag; niet volledig beoordeeld.
- vb-1 toont zichtbaar derdenmerk (schoen met streepdesign) – niet afgeschermd bij voetbal; aan Lars of dat mag.
- Ad 3: prijs 3-pack €44,95/€14,98 staat nog als [CHECK] in de tekstnotitie (niet in Feiten & Actuele Staat). Niet live gezet; Lars bepaalt.
- 3 rondes zelfcontrole: ronde 1 renderen+meten, ronde 2 aanpassen na Denzel (aanbod) en contrast (rode banden), ronde 3 volledige rerun+contactsheets. Referentievergelijking met 07_Design_Agent/Inspiratie/Fotos niet apart uitgevoerd.
- Geen Design-QA beschikbaar; onafhankelijke toetsing ontbreekt.

GEBRUIKT: skills higrip-vault, claude-design; tools Chrome headless (render), Python 3.12 + PIL/numpy/OpenCV (GrabCut, grade, meting), vision_analyze, Canva thumbnail (lezen), process_manage.
