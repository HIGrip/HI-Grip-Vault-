---
id: "2026-11-09-ads-visuals-voetbal-rugby"
titel: "Ads: visuals voetbal en rugby (4 per sport, 4:5 en 9:16)"
kerntitel: "20 visuals staan lokaal klaar; Canva-generator onbruikbaar, dus geen Canva-links"
datum: "2026-11-09"
bron: "los"
routine: ""
categorie: "Social"
status: "nieuw"
prioriteit: "P1"
samenvatting: "Vier ads per sport in HÏ Grip-stijl, elk in 4:5 (1080x1350) en 9:16 (1080x1920), lokaal gerenderd met Poppins en het echte logo en packshot. Teksten letterlijk uit de tekstnotitie. De Canva-generator negeerde de copy en gaf generiek stockbeeld, dus er zijn geen Canva-links; zonder foto's (rechten onbevestigd) zijn situatie en klantwoord typografisch."
gerelateerd: [2026-11-09-ads-teksten-voetbal-rugby, 2026-11-09-ads-plan-voetbal-rugby-psychologie]
vervangt: []
bronbestand: ""
deadline: "2026-11-12"
---

# Ads: visuals voetbal en rugby

> Map: [[Waar staat wat]]

Alleen concepten. Niets geüpload, gepubliceerd of live gezet. Canva-ontwerpen van Lars ("3 pack AD", DAHaLImDhz4) zijn gezien (alleen thumbnail, lezen) en niet gewijzigd.

## In het kort
- **Bestanden:** `C:\Users\lars\HiGripMedia\_Output\design\ads-voetbal-rugby\` — `vb-` (voetbal) en `rb-` (rugby), `1-situatie`, `2-klantwoord`, `3-aanbod`, `4-vergelijking-A` (HOUDT VAST, Lars' tekst) en `4-vergelijking-B-grijpt` (zachter), elk `_4x5.png` en `_9x16.png`. Totaal 20 bestanden (16 hoofdbestanden + 4 B-varianten).
- **Stijl:** zwart #0A0A0A, Poppins Black hoofdletters (tracking -0,04 em), één accent per ad: voetbal volt #CCFF00, rugby Tangerine #E10600 (accent per kernsport, Logo & Kleurenpalet). Eén rasterelement per uiting (halftone-hoek; bij aanbod een grijs dotveld achter de packshot), schuine vormen, sportwoord in parallellogram, wordmark klein linksonder.
- **Beeld:** alleen eigen packshot (Performance Gripsokken 2.0 Wit 3-pack, bij aanbod) en logo uit de mediabibliotheek. Situatie en klantwoord zijn typografisch: geen actiefoto's gebruikt (zie Besluit).
- **9:16:** bovenste 150 px en onderste 250 px bevatten geen tekst of logo (pixelcontrole: onderste 250 px leeg; bovenste 150 px alleen halftone-dots, geen tekst).

## Acties
- [ ] P1 · Besluit: Lars levert actiebeeld vanaf de taille zonder gezicht (rugby tackle, voetbal draai) of bevestigt rechten voor betaald gebruik van bestaande foto's in `HiGripMedia\Content - HÏ Grip\Sporten\RUGBY` en `VOETBAL`; in de vault staat geen rechtenbevestiging, dus ik gebruikte ze niet. Met beeld wordt situatie sterker (principe Performance: beweging zichtbaar)
- [ ] P1 · Besluit: Canva-links. Uploaden naar Canva is volgens de mediabibliotheek-regel ("niets uploaden of delen") aan Lars; zeg of ik de PNG's als afbeelding in Canva mag zetten, of dat Lars ze zelf importeert. Platte PNG is niet bewerkbaar in Canva
- [ ] P1 · Besluit: aanbod toont "3-PACK €44,95 · GRATIS VERZENDING" en geen was-prijs (€53,85 is een som, geen eerdere prijs; open besluit uit tekstnotitie). €44,95 en €14,98 staan niet in Feiten [CHECK]; Lars' Canva-ad leek in de thumbnail €53,95 te tonen: controleer dat het €53,85 moet zijn
- [ ] P1 · Besluit: ad 4 A ("HOUDT VAST") of B ("GRIJPT"); beide staan klaar, bronregel uit de formuleringsregel staat in beeld
- [ ] P2 · Besluit: Rox-quote niet gebruikt (geen vrijgave voor betaald); klantwoord = 3.500+ (schrijfwijze met punt zoals schema)
- [ ] P2 · Content-QA/Design-QA: onafhankelijke toetsing ontbreekt (D1 t/m D12 was op 09-11 voorstel; sinds 16-11-2026 geldend, toetser is een onafhankelijk profiel)
- [ ] P2 · Besluit: rugby-accent rood (sportaccent) versus algemene regel "donker = volt"; ik koos de sportregel. Rood op zwart heeft ca. 3,6:1: alleen grote koppen, geen kleine tekst in rood
- [ ] P2 · Performance Days: aanbod-visuals (vb-3, rb-3) noemen prijs; per 27-11 pauzeren (advies Ads-plan)

## Bevindingen

### Canva-route (gebruikt en beperkingen)
Gebruikt: `search_designs` (3-pack-ad gevonden, alleen gelezen), `list_brand_kits` (BRANDING, kAG7-jVXg8k), `search_brand_templates` (leeg: geen brand templates), `generate_design` met brand kit (instagram_post), `create_design_from_candidate`, `start_editing_transaction`, `get_design_content`, daarna `cancel_editing_transaction`. Vision, terminal en Python (PIL) voor lokale render en controle.
Beperkingen:
1. De generator negeerde de opgegeven tekst en schreef eigen Engelse copy ("Elevate your game…"), zonder logo, met generiek stockbeeld van blauwe sokken. Dat is geen echt productbeeld en geen merkcopy: afgekeurd (D5, D6). Eén afgekeurde draft bleef in Canva staan: "Instagram-bericht - GRIP SOCKS" (DAHaaloUmQc), niet gecommit; Lars mag hem verwijderen.
2. Geen brand templates beschikbaar, dus geen autofill-route.
3. De bewerk-API kan alleen tekst vervangen en afbeeldingen plaatsen, geen vormen, lettertypes of nieuwe tekstblokken toevoegen: een eigen lay-out met Poppins-Black-tracking is zo niet te bouwen.
4. Eigen route: lokaal gerenderd met Poppins (OFL, uit `Designen\KLEUR & LETTERTYPES`), logo-wordmark uit het logosysteem, packshot uit Productfoto's. Toolkeuze is een voorstel; dit is geen vastgelegde tool.
Skills gebruikt: `higrip-vault`. Geen design-skill geladen (geen passende Canva-skill beschikbaar).

### Zelfcheck tegen de vijf designprincipes
| Principe | Waar |
|---|---|
| Performance | Schuine vormen, diagonale divider, rasterverloop; **zwak** zonder actiefoto bij 1 en 2 |
| Whitespace | Veel zwart, max. 4 regels kop, geen tekstvakken |
| Emoties | Herkenning in situatie (koptekst), bewijs in klantwoord |
| Branding | Wordmark, embleem-driehoek niet apart getoond [NIET GECONTROLEERD of de driehoek terugkomt] |
| Stijl | Halftone-raster als handtekening, één accent |

### Letterlijk getoetst aan tekstnotitie
Situatie "JE VOET SCHUIFT IN JE SCHOEN. BIJ ELKE TACKLE./DRAAI." · Klantwoord "3.500+ SPORTERS GINGEN JE VOOR." · Aanbod "3 PAAR. €14,98 PER PAAR." + "3-PACK €44,95 · GRATIS VERZENDING" + "PERFORMANCE GRIP SOCKS 2.0" · Vergelijking "GEWONE SOK GLIJDT. GRIPSOK HOUDT VAST." (of "GRIJPT."), regel "0,60 tegen 1,17 wrijving. 95% meer grip.*", bronregel volgens Feiten (Apps et al. 2022, gripsokken in het algemeen).

## Wat niet lukte
- Geen Canva-links per ad (zie Beperkingen en Besluit).
- Niet gecontroleerd: weergave in Meta-interface, kleurweergave op telefoon, contrast gemeten (alleen berekend: rood ca. 3,6:1), kleine tekst op echt schermformaat (bronregel 24 px). Visuele controle was via een beeldmodel; spatiëring en afkapping zijn daarnaast met pixelcontrole op marges gedaan.
- Het logo is gebruikt als wordmark uit het logosysteem; de officiële Canva-logobestanden zijn niet vergeleken.
- Geen Design-QA (nog niet in gebruik).

## Bronnen
- [[2026-11-09-ads-teksten-voetbal-rugby]] · [[2026-11-09-ads-plan-voetbal-rugby-psychologie]] · [[Logo & Kleurenpalet]] · [[Design Elementen]] · [[Mediabibliotheek HiGripMedia]]
- Script: scratch `ads_render_20261109.py` (herbouwbaar)

## Aantekeningen
