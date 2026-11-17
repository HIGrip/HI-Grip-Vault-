---
id: "2026-11-09-ads-visuals-design-qa"
titel: "Design-QA: 8 ad-visuals voetbal en rugby"
kerntitel: "CORRIGEER: woordspatie en bronregel te klein, prijs 3-pack niet in Feiten"
datum: "2026-11-09"
bron: "los"
routine: ""
categorie: "Social"
status: "nieuw"
prioriteit: "P1"
samenvatting: "Onafhankelijke toetsing van 20 PNG's (8 ads, 4:5 en 9:16, plus B-variant). Verdict CORRIGEER. Merkregels en 9:16 safe zones kloppen; correcties: woordspatie, bronregel-grootte, was-prijs/3-pack-prijs bevestigen. Ongewijzigd zijn van Lars' Canva-ad is niet te bewijzen."
gerelateerd: [2026-11-09-ads-visuals-voetbal-rugby]
vervangt: []
bronbestand: ""
deadline: "2026-11-12"
---

# Design-QA: ad-visuals voetbal en rugby

> Map: [[Waar staat wat]]

Alleen gelezen en gemeten; geen ontwerp gewijzigd, niets gepubliceerd. Toetser: Design Agent in QA-rol (D1 t/m D12 was op 09-11 voorstel, sinds 16-11-2026 geldend; geen onafhankelijke tweede toetser beschikbaar, dit is dus geen goedgekeurde QA).

## Verdict: CORRIGEER

## Bewijs per toets
| Toets | Uitkomst | Bewijs |
|---|---|---|
| Merkregels (kleur) | GOED | Zwart #0A0A0A, voetbal volt #CCFF00 (ca. 18:1 op zwart), rugby Tangerine #E10600 per sportregel in Logo & Kleurenpalet. Rood op zwart berekend 3,98:1 (de ontwerpnotitie zei 3,6): alleen grote koppen, geen kleine rode tekst gezien |
| Wordmark | GEDEELTELIJK | Wordmark klein linksonder, trema zichtbaar op uitvergroting. Vergelijking met officiële Canva-logobestanden niet gedaan; vrijruimte (piek-hoogte) niet gemeten |
| Duimformaat kop | GOED | Koppen 100+ px kapitaalhoogte op 1080 breed |
| Duimformaat woordspatie | CORRIGEER | Regel "GEWONE SOK" heeft woordspatie van 24 px bij 104 px kapitaalhoogte (letterruimte tot 10 px); twee beeldlezingen lazen "GEWONESOK". Zelfde bij "3 PAAR" (vb-3, rb-3: gelezen als "3PAAR"). Oorzaak: tracking -0,04 em. Verbreed de woordspatie |
| Duimformaat bronregel | CORRIGEER | Bronregel ad 4 ca. 24 px = ca. 8,7 pt op een telefoon van 390 pt breed. Grip-claim vereist bronregel, dus niet weglaten maar groter (min. 32 px) of korter |
| Eén idee per beeld | GOED, 1 kanttekening | 1, 2 en 3 zijn helder. Ad 4 draagt contrast-kop plus cijferregel plus voetnoot: lees de cijferregel als ondersteuning, anders splitsen |
| 9:16 safe zones | GOED | Pixelcontrole: bovenste 150 px en onderste 250 px bevatten 0 heldere (tekst)pixels in alle 10 bestanden. 4:5: niets afgekapt, marges ca. 72 px |
| Geen verzonnen claims | CORRIGEER | Ad 3: €44,95 en €14,98 staan niet in Feiten; 2.0 is €17,95 per paar en een 3-pack 2.0 bestaat daar niet. Ontwerper liet de was-prijs weg (goed). Ad 2: 3.500+ klopt met Feiten (3500+). Ad 4: 0,60/1,17/95% met bronregel Apps et al. 2022 volgens de formuleringsregel; geen Rox-quote, geen reviews, geen nep-mechanisme |
| Rechten van beeld | GOED | Alleen eigen packshot (Productfoto's) en logo; geen actiefoto's, geen herkenbaar persoon. Wel een afwijking van het schema: situatie vraagt actiebeeld vanaf de taille; dit is typografisch |
| 3-pack-ads van Lars ongewijzigd | NIET TE BEWIJZEN | Canva "3 pack AD" (DAHaLImDhz4) heeft updated_at 09-11 ca. 11:35, rond de ontwerpsessie. Ontwerper meldt alleen gelezen, de bewerksessie ging over een ander concept. Versiegeschiedenis niet beschikbaar voor mij. Daarnaast toont de thumbnail €53,95 als doorgestreepte som (3 x €17,95 = €53,85), dus een typefout in Lars' ad |
| Afstemming op Lars' ad | CORRIGEER (laag) | Lars' ad heeft foto (voetbal, gras), gele banner, doorgestreepte prijzen; de nieuwe ad 3 is typografisch zwart zonder was-prijs. "Stem de rest daarop af" is niet gebeurd: sets zien er naast elkaar niet uit als één campagne |

## Acties
- [ ] P1 · Design: woordspatie vergroten (min. 0,25 em) in "GEWONE SOK", "3 PAAR" en dezelfde kop in alle 4:5 en 9:16; opnieuw exporteren en opnieuw meten
- [ ] P1 · Design: bronregel ad 4 groter (min. 32 px) of korter, in 4:5 en 9:16
- [ ] P1 · Design: ad 3 afstemmen op Lars' 3-pack-ad of Lars laat bewust twee stijlen toe
- [x] P1 · Website/Ads: €44,95 en €14,98 bevestigen in Feiten voordat ad 3 live gaat; ook 3-pack 2.0 als product en voorraad 2.0 (5-11 negatief)
- [ ] P2 · Design: Canva-versiegeschiedenis van "3 pack AD" controleren (Lars) en €53,95 vs €53,85 rechtzetten
- [ ] P2 · Design: officiële logobestanden naast wordmark leggen
- [ ] P2 · Design: contrast of rood alleen groot gebruiken vastleggen (3,98:1)

## Besluiten
Besluit: Lars (via Denzel) beslist over 3-pack-prijs in Feiten, voorraad 2.0 en live zetten van ad 3 bij negatieve voorraad.
Besluit: Lars kiest ad 4 A (HOUDT VAST) of B (GRIJPT) en of actiefoto's voor betaald gebruik zijn vrijgegeven.

## Niet gecontroleerd
Meta-interface, kleur op telefoon, Canva-bewerkgeschiedenis, officiële logo, spatiëring van 9:16-koppen afzonderlijk gemeten (4:5 wel). Beeldmodel-lezingen waren inconsistent (misleden woorden); bevindingen hier steunen op pixelmetingen waar vermeld.
