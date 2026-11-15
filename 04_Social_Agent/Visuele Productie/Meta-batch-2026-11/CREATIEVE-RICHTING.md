# Creatieve richting Meta-batch november 2026

Stand: 10 november 2026. Dit is de creatieve richting vóór de productie. De machineleesbare versie staat in `spec.json` in dezelfde map en is bij verschil leidend voor maten en posities. Er worden hier geen eindbeelden gemaakt en er gaat niets live: een mens richt Ads Manager in.

## De strategische keuze in het kort

**Wat de vorige ads deden.** De kick-off ads waren mooie productbeelden met een bewering over onszelf ("de beste gripsok", "vier details"). Ze kregen klikken en geen aankopen. Het onderzoek naar langlopende ads in de sector laat een ander patroon zien: één herkenbaar probleem, een echte stem en een multipack met een lage prijs per paar.

**Wat deze batch doet.** Elke hoek krijgt één taak en één dominant element:

| Hoek | Taak | Dominant element | Voor wie |
|---|---|---|---|
| Probleem | Herkenning: dit ben ik | Een kop met een tegenstelling | Wie niet zoekt |
| Klantwoord | Geloof: het werkt bij een ander | De woorden van een klant, groot gezet | De twijfelaar |
| Aanbod | Reden om nu te kopen | De prijs van het 3-pack | Wie al wil |
| Vergelijking (wissel) | Bewijs uit onderzoek | Twee cijfers als een stand | Wie niet zoekt |

**Twee werelden, één merk.** Voetbal is fotografisch en donker met volt als accent. Rugby is typografisch en licht (warm off-white, zwarte sok, italic) met rood als accent. Zo is in één oogopslag te zien voor wie de ad is, en lost de rugbyset het ontbreken van een rugbyfoto op zonder AI-beeld. Per ad staat er precies één accentelement.

**Eén aanbod in alle ads.** Elke ad klikt naar de productpagina 2.0 met het 3-pack van €44,95 als landing. Het 5-pack en het losse paar staan niet in de ads.

**Wat de batch moet leren.**
1. Welke hoek binnen een sport de meeste winkelwagens en aankopen per euro geeft. Dat is de hoofdvraag.
2. Of een hoek in beide sporten wint. Wint klantwoord in voetbal én rugby, dan is dat een sterker signaal dan een winst in één set.
3. Of een typografische rugbyset zonder foto klikken en winkelwagens kan halen.
4. Na de wissel op 14 november: of bewijs uit onderzoek beter of slechter werkt dan de zwakste van de drie.

**Wat de batch niet kan leren.** Sport en beeldstijl vallen samen (voetbal is foto, rugby is product). Een verschil tussen de sets zegt dus niets over foto tegenover product. Vergelijk hoeken binnen een sport, niet stijlen tussen sporten. De aantallen blijven klein: lees de uitkomst als richting.

## Gedeelde regels voor de bouwer

- Canvas: 4:5 is 1080x1350, 9:16 is 1080x1920. Marge 64 px, tekstkolom 952 px.
- Alleen Poppins. Voetbalkoppen rechtop 900, rugbykoppen italic 900, altijd hoofdletters.
- Kop minimaal 88 px, lopende tekst minimaal 30 px.
- 9:16: alle tekst en het leesbare product tussen y 270 en y 1250. Daarbuiten alleen achtergrond of doorlopende foto.
- CTA-pill alleen in de aanbod-ads: wit met zwarte tekst op donker, zwart met witte tekst op licht, met een getekende chevron. Nooit gevuld met een accentkleur.
- Geen gedachtestreepjes en geen pijltjes in beeldtekst of copy. Altijd jij en je. Altijd HÏ Grip met trema.
- Het product komt altijd uit een echte foto. Geen AI voor product of personen.
- Geen leesbaar woordmerk van een ander merk in beeld.
- Alle stijlen, de uitsnede van de sok en de regel voor passend maken staan in `spec.json` onder `tokens`.

## De wereld per sport

- **Voetbal.** Echte shootfoto, donkere basis (#0A0A0A of #111111), witte tekst, kop rechtop 900. Eén accent in volt per ad. Sportcontext via de foto, de wedstrijdminuut, de trainingsweek en één witte veldlijn (hairline 2 px).
- **Rugby.** Geen foto van een speler. Warm off-white #EAE8E5, zwarte sok als vrijstaand product, zwarte tekst, kop italic 900. Eén accent in rood per ad. Sportcontext via het woord RUGBY en via rugbytaal (scrum, ruck).

## Overzicht van de acht concepten

| Concept | Status | Kop | Foto | Landing |
|---|---|---|---|---|
| voetbal_probleem | live | JE NOPPEN PAKKEN. JE VOET SCHUIFT. | voetbal_wit_trap.jpg | wit |
| voetbal_klantwoord | live | JE MERKT DAADWERKELIJK EEN VERSCHIL. | voetbal_wit_grippatroon.jpg | wit |
| voetbal_aanbod | live | 3 PAAR. €44,95. | voetbal_wit_grippatroon_4x5.jpg | wit |
| voetbal_vergelijking | wissel | GRIPSOKKEN: 95% MEER GRIP. | voetbal_zwart_trap.jpg | zwart |
| rugby_probleem | live | JE VOET SCHUIFT. JE SCRUM OOK. | packshot_2-0_zwart_achter.png | zwart |
| rugby_klantwoord | live | NIET ECHT VERWACHT EERLIJK GEZEGD, | packshot_2-0_zwart_achter.png | zwart |
| rugby_aanbod | live | 3 PAAR. €44,95. | packshot_2-0_zwart_achter.png | zwart |
| rugby_vergelijking | wissel | GRIPSOKKEN: 95% MEER GRIP. | packshot_2-0_zwart_achter.png | zwart |

## Voetbal

### Voetbal · probleem (live)

Bestanden: `voetbal_probleem_4x5.png` en `voetbal_probleem_9x16.png` · landingspagina `performance-gripsokken-2-0-wit` · foto `voetbal_wit_trap.jpg`

**Idee.** Je noppen staan vast in het gras, maar je voet schuift in je schoen: het probleem zit binnenin.

**Waarom dit stopt.** Een echte trap van dichtbij met de noppen in beeld, en een kop die een tegenstelling noemt die elke voetballer voelt maar nooit zo heeft horen zeggen.

**Beeldtekst**

| Onderdeel | Tekst |
|---|---|
| Eyebrow | VOETBAL · 78E MINUUT |
| Kop | JE NOPPEN PAKKEN. JE VOET SCHUIFT. |
| Subregel | Siliconen gripzones houden je voet vast in je schoen. |
| Bronregel | geen |
| CTA-pill | geen |

**Layout 4:5.** Achtergrond #0A0A0A. Foto schalen naar 1280x960 (factor 1,25). Uitsnede van het geschaalde beeld: x 80 tot 1160, volledige hoogte. Plaatsen op y 0 tot 960. De geheven schoen met noppen staat links, de standvoet met het woord HÏ GRIP in het midden, de bal rechts. Fade-out naar #0A0A0A: 0% op y 640, 100% op y 960. Logo-label wit op (64,56). Eyebrow wit, top y 812, x 64. Kop (stijl kop_voetbal) wit, 92 px, 2 regels, top y 862, x 64: regel 1 'JE NOPPEN PAKKEN.', regel 2 'JE VOET SCHUIFT.'. Alleen het woord 'SCHUIFT.' in volt: dat is het ene accent. Sub wit, top y 1076, x 64, max breedte 860. Veldlijn: witte hairline 2 px op y 1224 van x 64 tot 1016. Micro 'PERFORMANCE GRIP SOCKS 2.0' wit, top y 1258, x 64. Geen pill.

**Layout 9:16.** Achtergrond #0A0A0A. Foto schalen naar 1536x1152 (factor 1,5). Uitsnede van het geschaalde beeld: x 70 tot 1150, volledige hoogte (de bal valt buiten beeld, de geheven schoen en de standvoet blijven). Plaatsen op y 0 tot 1152. Fade-out naar #0A0A0A: 0% op y 800, 100% op y 1152. Daaronder effen #0A0A0A. Logo-label wit op (64,290). Eyebrow wit, top y 900. Kop wit, 92 px, 2 regels, top y 946, 'SCHUIFT.' in volt. Sub wit, top y 1150, max breedte 952, maximaal 2 regels, onderkant uiterlijk y 1245. Geen veldlijn, geen micro, geen pill.

**Copyrichting.** Het probleem zit niet onder je schoen maar erin: bij draaien, afremmen en aanzetten schuift je voet in je schoen. Gripsokken 2.0 hebben siliconen gripzones die je voet vasthouden in je schoen. Benoem het herkenbare moment, daarna het product, daarna het 3-pack met gratis verzending.

A/B voor kop en CTA: variant A vanuit **probleem**, variant B vanuit **performance**.

**Claims**

- Feature 2.0: siliconen gripzones houden de voet vast in de schoen (productwaarheid, feature 4)

**Risico's**

- Niet versterken tot een garantie ('nooit meer schuiven') en geen blaren- of blessureclaim.
- Foto is 1024x768: in 4:5 een vergroting van 1,25 en in 9:16 van 1,5. Controleer de scherpte op telefoonformaat.
- De schoenen in beeld tonen drie strepen en klein het woord COPA van een ander merk. Geen woordmerk in focus, maar wel herkenbaar: laat de eigenaar akkoord geven of kies de fallback voetbal_wit_grippatroon_4x5.jpg.
- Rechten: foto komt uit de eigen shoot en staat openbaar op higrip.nl. Bevestig dat het model akkoord is met gebruik in betaalde ads.

### Voetbal · klantwoord (live)

Bestanden: `voetbal_klantwoord_4x5.png` en `voetbal_klantwoord_9x16.png` · landingspagina `performance-gripsokken-2-0-wit` · foto `voetbal_wit_grippatroon.jpg`

**Idee.** Een echte klant zegt in gewone woorden dat je het verschil merkt, groot gezet als kop boven een eerlijke foto van de sok op het veld.

**Waarom dit stopt.** Een heldere strook met twee witte sokken en het grippatroon, en daaronder een zin in spreektaal in plaats van reclametaal. Het leest als een bericht van een teamgenoot.

**Beeldtekst**

| Onderdeel | Tekst |
|---|---|
| Eyebrow | KLANTREVIEW · JUNI 2025 |
| Kop | JE MERKT DAADWERKELIJK EEN VERSCHIL. |
| Subregel | 3500+ SPORTERS GINGEN JE VOOR |
| Bronregel | geen |
| CTA-pill | geen |
| Quote volledig | Hele fijne gripsokken voor het voetballen. Je merkt daadwerkelijk een verschil. |
| Opbouw quote | Zin 1 klein in gewone schrijfwijze, zin 2 groot als kop in hoofdletters. Samen de volledige review, woordelijk en in de oorspronkelijke volgorde. |

**Layout 4:5.** Achtergrond #111111. Fotostrook: foto schalen naar 1080x772 (factor 0,84). Uitsnede van het geschaalde beeld: y 80 tot 680, volledige breedte. Plaatsen op y 0 tot 600. Beide sokken met het woord HÏ GRIP, het grippatroon en de bal zijn zichtbaar. Geen fade: harde onderrand. Logo-label wit op (64,56). Quoteteken in volt, 110x90, op (64,548), half over de onderrand van de foto: dat is het ene accent. Eyebrow wit, top y 612, x 200. Quote zin 1: 'Hele fijne gripsokken voor het voetballen.' Poppins 400 italic, 36 px, wit, top y 676, x 64. Kop (stijl kop_voetbal) wit, 100 px, 3 regels, top y 736, x 64: 'JE MERKT' / 'DAADWERKELIJK' / 'EEN VERSCHIL.'. Hairline wit 30% dekking, 2 px, y 1150, x 64 tot 1016. Sub: '3500+ SPORTERS GINGEN JE VOOR' Poppins 800, 40 px, uppercase, wit, top y 1182, x 64. Micro 'PERFORMANCE GRIP SOCKS 2.0' titanium, top y 1262, x 64. Geen pill, geen sterren.

**Layout 9:16.** Achtergrond #111111. Fotostrook: foto schalen naar 1080x772. Uitsnede van het geschaalde beeld: y 100 tot 640. Plaatsen op y 250 tot 790, met effen #111111 erboven en eronder. Logo-label wit op (64,290), over de foto. Quoteteken in volt, 100x82, op (64,740). Eyebrow wit, top y 800, x 190. Quote zin 1 Poppins 400 italic, 34 px, wit, top y 852. Kop wit, 88 px, 3 regels, top y 904. Sub '3500+ SPORTERS GINGEN JE VOOR' Poppins 800, 36 px, wit, top y 1192. Geen hairline, geen micro, geen pill.

**Copyrichting.** Laat de klant het werk doen. Open de primaire tekst met de volledige review tussen aanhalingstekens, noem daarna 3500+ sporters en sluit af met het 3-pack en gratis verzending. Geen eigen superlatieven erbovenop.

A/B voor kop en CTA: variant A vanuit **sociaal bewijs**, variant B vanuit **emotie**.

**Claims**

- 3500+ sporters
- Klantreview van 18 juni 2025, woordelijk

**Risico's**

- [RECHTEN NODIG] Toestemming van de reviewer is nodig vóór gebruik in een betaalde ad. Zonder toestemming gaat dit concept niet live.
- De review is van juni 2025 en gaat dus waarschijnlijk over de 1.0. De datum staat daarom in beeld en de tekst noemt de review nergens een review van de 2.0. Laat de eigenaar beslissen of een review van de 1.0 naast een foto van de 2.0 acceptabel is.
- Geen Trustpilot-naam, score, logo of sterren. Ook geen groene sterren.
- De hoofdletters in de kop zijn een typografische keuze, de woorden blijven ongewijzigd.

### Voetbal · aanbod (live)

Bestanden: `voetbal_aanbod_4x5.png` en `voetbal_aanbod_9x16.png` · landingspagina `performance-gripsokken-2-0-wit` · foto `voetbal_wit_grippatroon_4x5.jpg`

**Idee.** Een trainingsweek vraagt drie paar: training, training, wedstrijd. Het 3-pack met de prijs groot en de vergelijking uitgeschreven.

**Waarom dit stopt.** De scherpste foto uit de shoot met het grippatroon vol in beeld, en een prijs in volt die je in één blik leest. De eyebrow geeft de reden voor drie paar.

**Beeldtekst**

| Onderdeel | Tekst |
|---|---|
| Eyebrow | TRAINING · TRAINING · WEDSTRIJD |
| Kop | 3 PAAR. €44,95. |
| Subregel | In plaats van €53,85 voor 3 losse paren. Gratis verzending. |
| Bronregel | geen |
| CTA-pill | Shop 3-pack |

**Layout 4:5.** Achtergrond #0A0A0A. Foto op ware grootte (1080x1350), 150 px omhoog geschoven: plaatsen op y -150 tot 1200. De zool met grippatroon staat dan op ongeveer y 450 tot 900. Fade-out naar #0A0A0A: 0% op y 880, 100% op y 1200. Daaronder effen #0A0A0A. Logo-label wit op (64,56). Eyebrow wit, top y 940, x 64. Kop (stijl kop_voetbal), 108 px, 1 regel, top y 984, x 64: '3 PAAR.' in wit en '€44,95.' in volt: dat is het ene accent. Sub wit, top y 1112, x 64, 2 regels: regel 1 'In plaats van €53,85 voor 3 losse paren.', regel 2 'Gratis verzending.'. Pill wit met zwarte tekst 'Shop 3-pack' en chevron, rechts uitgelijnd op x 1016, y 1232 tot 1310. Micro 'PERFORMANCE GRIP SOCKS 2.0' wit, x 64, verticaal gecentreerd op y 1271. Geen doorgestreepte prijs, geen badge.

**Layout 9:16.** Achtergrond #0A0A0A. Foto op ware grootte, plaatsen op y -150 tot 1200. Fade-out naar #0A0A0A: 0% op y 860, 100% op y 1200. Daaronder effen #0A0A0A. Logo-label wit op (64,290). Eyebrow wit, top y 900. Kop 108 px, 1 regel, top y 940, '€44,95.' in volt. Sub wit, top y 1066, 2 regels. Pill wit met zwarte tekst 'Shop 3-pack', links uitgelijnd op x 64, y 1172 tot 1250. Geen micro.

**Copyrichting.** Eén aanbod, helder: 3 paar Performance Gripsokken 2.0 voor €44,95 in plaats van €53,85 voor 3 losse paren, met gratis verzending. Geef de reden voor drie paar (twee trainingen en een wedstrijd per week). Feiten die erbij mogen: binnen 1 werkdag verzonden, 30 dagen retour, op de pagina het label 'Meest gekozen'.

A/B voor kop en CTA: variant A vanuit **urgentie**, variant B vanuit **sociaal bewijs**.

**Claims**

- 3-pack €44,95, 3 losse paren €53,85
- Gratis verzending vanaf €35, dus bij het 3-pack
- Binnen 1 werkdag verzonden, 30 dagen retour
- 3500+ sporters (alleen in hoek B)

**Risico's**

- Geen doorgestreepte €19,95 en ook geen doorgestreepte €53,85: een doorhaling suggereert een eerdere prijs. De vergelijking wordt uitgeschreven.
- Niet '€9 korting' schrijven: het verschil is €8,90. De pagina rondt af naar €9, de ad niet.
- Urgentie alleen met echte feiten (binnen 1 werkdag verzonden, de wedstrijd van komend weekend). Geen verzonnen einddatum, geen beloofde bezorgdag.
- Controleer op de dag van livegang of prijs en gratis verzending nog kloppen met de productpagina.
- Zelfde shoot als voetbal_klantwoord. Het verschil in uitsnede (staand volbeeld tegenover liggende strook) moet groot genoeg blijven.

### Voetbal · vergelijking (wissel)

Bestanden: `voetbal_vergelijking_4x5.png` en `voetbal_vergelijking_9x16.png` · landingspagina `performance-gripsokken-2-0-zwart` · foto `voetbal_zwart_trap.jpg`

**Idee.** De stand als op een scorebord: gewone sok 0,60, gripsok 1,17. Onderzoek naar de categorie, met de bron erbij en het product duidelijk los van het getal.

**Waarom dit stopt.** Twee grote cijfers als een uitslag, één in volt. Een stand lees je sneller dan een zin en je wilt weten waar hij over gaat.

**Beeldtekst**

| Onderdeel | Tekst |
|---|---|
| Eyebrow | WETENSCHAPPELIJK AANGETOOND |
| Kop | GRIPSOKKEN: 95% MEER GRIP. |
| Subregel | PERFORMANCE GRIP SOCKS 2.0 |
| Bronregel | Statische wrijvingscoëfficiënt: gewone sok 0,60, gripsok 1,17. Onderzoek naar gripsokken in het algemeen. Bron: Apps et al. 2022. |
| CTA-pill | geen |
| Scorebord | GEWONE SOK 0,60 tegenover GRIPSOK 1,17 |

**Layout 4:5.** Achtergrond #111111. Logo-label wit op (64,56). Eyebrow wit, top y 150, x 64. Scorebord met gedeelde basislijn op y 470: links '0,60' Poppins 900, 190 px, titanium, x 64. Rechts '1,17' Poppins 900, 250 px, volt, rechts uitgelijnd op x 1016: dat is het ene accent. Labels (stijl micro, 26 px) top y 500: 'GEWONE SOK' titanium onder het linker getal, 'GRIPSOK' wit onder het rechter getal. Het label is altijd 'GRIPSOK', nooit de merknaam. Veldlijn: witte hairline 2 px op y 566 van x 64 tot 1016. Kop (stijl kop_voetbal) wit, 96 px, 2 regels, top y 604: 'GRIPSOKKEN:' / '95% MEER GRIP.'. Bron (stijl bron) titanium, top y 808, max breedte 952, maximaal 3 regels, onderkant uiterlijk y 930. Fotoband: uit de bronfoto de strook y 706 tot 1142 over de volle breedte (1142x436), schalen naar 1080x412, plaatsen op y 938 tot 1350. De geheven schoen met het woord PREDATOR valt boven de strook en mag nergens zichtbaar zijn: controleer de bovenrand. Fade vanaf de bovenrand van de band: #111111 100% op y 938 naar 0% op y 1020. Micro 'PERFORMANCE GRIP SOCKS 2.0' wit, top y 1282, x 64, over het gras. Het product staat dus onder de lijn en los van het getal. Geen pill.

**Layout 9:16.** Achtergrond #111111. Logo-label wit op (64,290). Eyebrow wit, top y 370. Scorebord met basislijn op y 660: '0,60' 190 px titanium links, '1,17' 250 px volt rechts uitgelijnd op x 1016. Labels top y 690. Veldlijn wit 2 px op y 744. Kop wit, 92 px, 2 regels, top y 772. Bron titanium, top y 968, maximaal 2 regels van 30 px, onderkant uiterlijk y 1050: gebruik hier de korte bronregel 'Onderzoek naar gripsokken in het algemeen. Bron: Apps et al. 2022.'. Fotoband 1080x412 op y 1070 tot 1482, bovenrand met fade van #111111 over 80 px. De sok met het embleem staat in de bovenste 100 px van de band en valt dus binnen de safe zone. Geen micro, geen pill.

**Copyrichting.** Categoriebewijs, eerlijk gebracht. Gebruik in de primaire tekst de volledige formulering: 'Wetenschappelijk aangetoond: gripsokken verhogen de statische wrijvingscoëfficiënt van 0,60 naar 1,17, 95% meer grip (Apps et al. 2022).' Zeg daarna pas dat de Performance Gripsokken 2.0 van HÏ Grip gripsokken met siliconen gripzones zijn. Nooit schrijven of suggereren dat HÏ Grip zelf getest of gemeten is.

A/B voor kop en CTA: variant A vanuit **performance**, variant B vanuit **probleem**.

**Claims**

- Wetenschappelijk aangetoond: gripsokken verhogen de statische wrijvingscoëfficiënt van 0,60 naar 1,17, 95% meer grip (Apps et al. 2022)

**Risico's**

- Grootste claimrisico van de batch. Het getal 1,17 hoort bij 'GRIPSOK' als categorie. Zet het product nooit direct naast of achter het getal en gebruik nooit 'HÏ Grip: 1,17' of 'getest'.
- De bronregel staat in elk formaat in beeld en in de primaire tekst.
- De korte bronregel in 9:16 laat het getal zonder de woorden 'statische wrijvingscoëfficiënt'. Laat de eigenaar bevestigen dat dit volstaat, anders de kop naar 84 px en de volledige bronregel.
- De fotoband komt uit voetbal_zwart_trap.jpg. De volledige foto toont groot het woord PREDATOR: alleen de strook onder y 706 gebruiken. Op de standschoen staat klein een logo van een ander merk: laat de eigenaar akkoord geven.
- Het product is klein in beeld. Dat is een bewuste keuze om het getal en het merk te scheiden.

## Rugby

### Rugby · probleem (live)

Bestanden: `rugby_probleem_4x5.png` en `rugby_probleem_9x16.png` · landingspagina `performance-gripsokken-2-0-zwart` · foto `packshot_2-0_zwart_achter.png`

**Idee.** Als je voet in je schoen schuift, schuift je scrum mee: het probleem in rugbytaal, met de zwarte sok vóór het woord RUGBY.

**Waarom dit stopt.** Het woord RUGBY schermbreed in rood op een licht vlak valt op in een feed vol foto's. Een rugbyer ziet zijn sport in advertenties bijna nooit en blijft dus kijken.

**Beeldtekst**

| Onderdeel | Tekst |
|---|---|
| Eyebrow | geen |
| Reuzenwoord | RUGBY |
| Kop | JE VOET SCHUIFT. JE SCRUM OOK. |
| Subregel | Siliconen gripzones houden je voet vast in je schoen. |
| Bronregel | geen |
| CTA-pill | geen |

**Layout 4:5.** Achtergrond #EAE8E5. Logo-label zwart op (64,56). Micro 'PERFORMANCE GRIP SOCKS 2.0' zwart, rechts uitgelijnd op x 1016, top y 58. Reuzenwoord 'RUGBY' in Poppins 900 italic, uppercase, passend gemaakt op een breedte van 952 px (ongeveer 285 px), x 64 tot 1016, bovenkant van de hoofdletters op y 300, in rood: dat is het ene accent. Vrijstaande zwarte sok (regel sok_vrijstaand), hoogte 800 px, horizontaal gecentreerd op x 580, y 120 tot 920, vóór het woord. Kop (stijl kop_rugby) zwart, 96 px, 2 regels, top y 950, x 64: 'JE VOET SCHUIFT.' / 'JE SCRUM OOK.'. Sub zwart, top y 1158, x 64, max breedte 952. Geen pill, geen tweede accent.

**Layout 9:16.** Achtergrond #EAE8E5 over het hele vlak. Logo-label zwart op (64,286). Reuzenwoord 'RUGBY' in rood, passend op 952 px breed, bovenkant hoofdletters op y 350. Vrijstaande zwarte sok, hoogte 610 px, gecentreerd op x 580, y 300 tot 910, vóór het woord. Kop zwart, 96 px, 2 regels, top y 936. Sub zwart, top y 1140, maximaal 2 regels, onderkant uiterlijk y 1245. Onder y 1250 alleen off-white.

**Copyrichting.** Spreek de rugbyer aan in zijn eigen taal: scrum, ruck, aanzetten, natte velden. Het probleem is de voet die in de schoen schuift op het moment dat je kracht zet. Daarna het product (siliconen gripzones, versterkte hiel, naadloze teenzone) en het 3-pack met gratis verzending. Gripsokken zijn in rugby nog nieuw: schrijf alsof je het een teamgenoot uitlegt.

A/B voor kop en CTA: variant A vanuit **probleem**, variant B vanuit **identiteit**.

**Claims**

- Feature 2.0: siliconen gripzones houden de voet vast in de schoen (productwaarheid, feature 4)
- Features 2.0: versterkte hiel, naadloos (alleen in de primaire tekst)

**Risico's**

- 'Je scrum ook' is beeldspraak voor een herkenbaar probleem. Niet doortrekken naar een prestatieclaim ('sterkere scrum', 'meer duwkracht').
- Geen blaren- of blessureclaim en geen claim over natte omstandigheden.
- Een groot rood woord is luid. Vindt de eigenaar het te veel, dan is de fallback het woord in #0A0A0A en 'SCHUIFT.' in rood.
- Geen AI-beeld van spelers, geen rugbyfoto met verkeerd logo.

### Rugby · klantwoord (live)

Bestanden: `rugby_klantwoord_4x5.png` en `rugby_klantwoord_9x16.png` · landingspagina `performance-gripsokken-2-0-zwart` · foto `packshot_2-0_zwart_achter.png`

**Idee.** De sceptische klant: de twijfel groot in beeld, de ommekeer eronder. Precies de gedachte van een rugbyer die gripsokken voor het eerst ziet.

**Waarom dit stopt.** De kop zegt hardop wat de kijker zelf denkt: niet echt verwacht, eerlijk gezegd. Een advertentie die met twijfel opent, leest niet als een advertentie.

**Beeldtekst**

| Onderdeel | Tekst |
|---|---|
| Eyebrow | KLANTREVIEW · JUNI 2025 |
| Kop | NIET ECHT VERWACHT EERLIJK GEZEGD, |
| Subregel | 3500+ SPORTERS GINGEN JE VOOR |
| Bronregel | geen |
| CTA-pill | geen |
| Productlabel | GRIP SOCKS 2.0 · VOOR RUGBY |
| Quote volledig | Prima prijs/kwaliteit. Niet echt verwacht eerlijk gezegd, maar de grip maakt wel degelijk een verschil. |
| Opbouw quote | Drie lagen in de oorspronkelijke volgorde. Laag 1 klein: 'Prima prijs/kwaliteit.' Laag 2 groot als kop: 'NIET ECHT VERWACHT EERLIJK GEZEGD,' Laag 3 middelgroot: 'maar de grip maakt wel degelijk een verschil.' Samen de volledige review, woordelijk. |

**Layout 4:5.** Achtergrond #EAE8E5. Logo-label zwart op (64,56). Quoteteken in rood, 120x100, op (64,170): dat is het ene accent. Eyebrow zwart, top y 236, x 210. Laag 1 'Prima prijs/kwaliteit.' Poppins 400 italic, 38 px, zwart, top y 316, x 64. Laag 2 als kop (stijl kop_rugby) zwart, 100 px, 3 regels, top y 380: 'NIET ECHT' / 'VERWACHT' / 'EERLIJK GEZEGD,'. Laag 3 'maar de grip maakt wel degelijk een verschil.' Poppins 600 italic, 46 px, gewone schrijfwijze, zwart, top y 696, max breedte 952, 2 regels. Hairline zwart 2 px op y 880 van x 64 tot 600. Sub '3500+ SPORTERS' / 'GINGEN JE VOOR' Poppins 900 italic, 56 px, zwart, 2 regels, top y 912, x 64. Micro 'GRIP SOCKS 2.0 · VOOR RUGBY' zwart, top y 1262, x 64. Vrijstaande zwarte sok, hoogte 520 px, rechts uitgelijnd op x 1016, y 800 tot 1320. Geen sterren, geen pill.

**Layout 9:16.** Achtergrond #EAE8E5. Logo-label zwart op (64,286). Quoteteken in rood, 100x84, op (64,350). Eyebrow zwart, top y 404, x 190. Laag 1 Poppins 400 italic, 36 px, top y 462. Laag 2 als kop zwart, 96 px, 3 regels, top y 516. Laag 3 Poppins 600 italic, 44 px, top y 818, 2 regels. Hairline zwart 2 px op y 990 van x 64 tot 600. Sub Poppins 900 italic, 48 px, 2 regels, top y 1016. Micro 'GRIP SOCKS 2.0 · VOOR RUGBY' top y 1200, x 64. Vrijstaande zwarte sok, hoogte 280 px, rechts uitgelijnd op x 1016, y 968 tot 1248.

**Copyrichting.** Open met de twijfel en geef de kijker gelijk: gripsokken klinken als een hype. Laat daarna de klant de ommekeer vertellen met de volledige review. Koppel pas in de eigen merkzin aan rugby ('ook voor scrum, ruck en sprint'). Schrijf nergens dat de reviewer rugby speelt.

A/B voor kop en CTA: variant A vanuit **sociaal bewijs**, variant B vanuit **emotie**.

**Claims**

- 3500+ sporters
- Klantreview van 25 juni 2025, woordelijk en volledig

**Risico's**

- [RECHTEN NODIG] Toestemming van de reviewer is nodig vóór gebruik in een betaalde ad.
- De reviewer is geen bekende rugbyspeler. De review staat los van het woord rugby: het rugbywoord staat alleen in het productlabel en in de merkzin, nooit in of direct bij de quote.
- De review is van juni 2025 en gaat dus waarschijnlijk over de 1.0. De datum staat in beeld. Laat de eigenaar beslissen of dit naast de packshot van de 2.0 acceptabel is.
- Geen Trustpilot-naam, score, logo of sterren.
- Zelfde thema als de UGC-video (de sceptische sporter): bewust, zodat statisch en video elkaar versterken.

### Rugby · aanbod (live)

Bestanden: `rugby_aanbod_4x5.png` en `rugby_aanbod_9x16.png` · landingspagina `performance-gripsokken-2-0-zwart` · foto `packshot_2-0_zwart_achter.png`

**Idee.** Drie zwarte sokken op een rij en één prijsregel: 3 paar voor €44,95, met de vergelijking eerlijk uitgeschreven.

**Waarom dit stopt.** Drie keer hetzelfde zwarte silhouet op licht is een ritme dat het oog vangt, en de prijs in rood is het enige kleurpunt in beeld.

**Beeldtekst**

| Onderdeel | Tekst |
|---|---|
| Eyebrow | RUGBY · TRAINING · TRAINING · WEDSTRIJD |
| Kop | 3 PAAR. €44,95. |
| Subregel | In plaats van €53,85 voor 3 losse paren. Gratis verzending. |
| Bronregel | geen |
| CTA-pill | Shop 3-pack |

**Layout 4:5.** Achtergrond #EAE8E5. Logo-label zwart op (64,56). Eyebrow zwart, top y 130, x 64. Drie keer de vrijstaande zwarte sok (dezelfde packshot, regel sok_vrijstaand), elk 640 px hoog, y 200 tot 840, horizontaal gecentreerd op x 320, x 560 en x 800. Ze overlappen elkaar: de linker sok ligt bovenop, de rechter onderop. Eén gezamenlijke contactschaduw. Kop (stijl kop_rugby), 118 px, 1 regel, top y 870, x 64: '3 PAAR.' in zwart en '€44,95.' in rood: dat is het ene accent. Sub zwart, top y 1012, x 64, 2 regels: 'In plaats van €53,85 voor 3 losse paren.' / 'Gratis verzending.'. Pill zwart met witte tekst 'Shop 3-pack' en chevron, rechts uitgelijnd op x 1016, y 1232 tot 1310. Micro 'GRIP SOCKS 2.0 · VOOR RUGBY' zwart, x 64, verticaal gecentreerd op y 1271. Geen doorgestreepte prijs, geen badge, geen reuzenwoord.

**Layout 9:16.** Achtergrond #EAE8E5. Logo-label zwart op (64,286). Eyebrow zwart, top y 340. Drie sokken, elk 470 px hoog, y 390 tot 860, gecentreerd op x 350, x 560 en x 770. Kop 112 px, 1 regel, top y 884, '€44,95.' in rood. Sub zwart, top y 1014, 2 regels. Pill zwart met witte tekst 'Shop 3-pack', links uitgelijnd op x 64, y 1150 tot 1228. Geen micro.

**Copyrichting.** Eén aanbod: 3 paar Performance Gripsokken 2.0 voor €44,95 in plaats van €53,85 voor 3 losse paren, met gratis verzending. Reden voor drie: twee trainingen en een wedstrijd. In rugbytaal, kort. Feiten die erbij mogen: binnen 1 werkdag verzonden, 30 dagen retour.

A/B voor kop en CTA: variant A vanuit **urgentie**, variant B vanuit **identiteit**.

**Claims**

- 3-pack €44,95, 3 losse paren €53,85
- Gratis verzending vanaf €35, dus bij het 3-pack
- Binnen 1 werkdag verzonden, 30 dagen retour

**Risico's**

- Het beeld is een compositie van drie keer dezelfde echte packshot. Er bestaat geen foto van een zwart 3-pack. Het toont drie sokken voor drie paar, net als de officiële 3-pack-foto in wit.
- Geen doorgestreepte prijs en niet '€9 korting': het verschil is €8,90.
- Urgentie alleen met echte feiten. Geen verzonnen einddatum.
- Niet vooruitlopen op de Performance Days: in deze ad staat niets over 1+1.
- Controleer op de dag van livegang prijs en gratis verzending op de productpagina.

### Rugby · vergelijking (wissel)

Bestanden: `rugby_vergelijking_4x5.png` en `rugby_vergelijking_9x16.png` · landingspagina `performance-gripsokken-2-0-zwart` · foto `packshot_2-0_zwart_achter.png`

**Idee.** Dezelfde stand in de rugbywereld: 0,60 tegenover 1,17 als typografisch scorebord op off-white, met de sok klein en onder de lijn.

**Waarom dit stopt.** Een reusachtig zwart cijfer met één rode streep eronder, zonder foto. Het ziet eruit als een uitslag en niet als een advertentie.

**Beeldtekst**

| Onderdeel | Tekst |
|---|---|
| Eyebrow | WETENSCHAPPELIJK AANGETOOND |
| Kop | GRIPSOKKEN: 95% MEER GRIP. |
| Subregel | Gripsokken voor scrum, ruck en sprint. |
| Bronregel | Statische wrijvingscoëfficiënt: gewone sok 0,60, gripsok 1,17. Onderzoek naar gripsokken in het algemeen. Bron: Apps et al. 2022. |
| CTA-pill | geen |
| Productlabel | HÏ GRIP PERFORMANCE GRIP SOCKS 2.0 |
| Scorebord | GEWONE SOK 0,60 tegenover GRIPSOK 1,17 |

**Layout 4:5.** Achtergrond #EAE8E5. Logo-label zwart op (64,56). Eyebrow zwart, top y 150, x 64. Scorebord met gedeelde basislijn op y 500: links '0,60' Poppins 900 italic, 190 px, titanium, x 64. Rechts '1,17' Poppins 900 italic, 270 px, zwart, rechts uitgelijnd op x 1016. Rode streep van 8 px hoog onder '1,17', even breed als het getal, op y 520 tot 528: dat is het ene accent. Labels (stijl micro, 26 px) zwart, top y 548: 'GEWONE SOK' links, 'GRIPSOK' rechts uitgelijnd op x 1016. Het label is altijd 'GRIPSOK', nooit de merknaam. Kop (stijl kop_rugby) zwart, 96 px, 2 regels, top y 620: 'GRIPSOKKEN:' / '95% MEER GRIP.'. Bron (stijl bron) carbon #1a1a1a, top y 826, max breedte 952, maximaal 3 regels, onderkant uiterlijk y 950. Hairline zwart 2 px op y 990 van x 64 tot 1016. Onder de lijn: productlabel 'HÏ GRIP PERFORMANCE' / 'GRIP SOCKS 2.0' Poppins 800, 34 px, uppercase, zwart, top y 1050, x 64. Sub zwart, top y 1160, x 64, max breedte 720. Vrijstaande zwarte sok, hoogte 300 px, rechts uitgelijnd op x 1016, y 1020 tot 1320. De sok staat onder de lijn en raakt het getal niet. Geen pill.

**Layout 9:16.** Achtergrond #EAE8E5. Logo-label zwart op (64,286). Eyebrow zwart, top y 350. Scorebord met basislijn op y 640: '0,60' 180 px titanium links, '1,17' 250 px zwart rechts uitgelijnd op x 1016. Rode streep 8 px op y 660 tot 668. Labels top y 686. Kop zwart, 92 px, 2 regels, top y 744. Bron carbon, top y 936, maximaal 2 regels, onderkant uiterlijk y 1020: gebruik de korte bronregel 'Onderzoek naar gripsokken in het algemeen. Bron: Apps et al. 2022.'. Hairline zwart 2 px op y 1060. Productlabel 'HÏ GRIP PERFORMANCE GRIP SOCKS 2.0' Poppins 800, 30 px, top y 1090, max breedte 760. Sub zwart 30 px, top y 1180, max breedte 760, 1 regel. Vrijstaande zwarte sok, hoogte 170 px, rechts uitgelijnd op x 1016, y 1076 tot 1246.

**Copyrichting.** Categoriebewijs voor een doelgroep die gripsokken nog niet kent. Gebruik in de primaire tekst de volledige formulering: 'Wetenschappelijk aangetoond: gripsokken verhogen de statische wrijvingscoëfficiënt van 0,60 naar 1,17, 95% meer grip (Apps et al. 2022).' Daarna in een aparte zin: de Performance Gripsokken 2.0 van HÏ Grip zijn gripsokken met siliconen gripzones, voor scrum, ruck en sprint. Niet schrijven dat het onderzoek over rugby ging en niet dat HÏ Grip getest is.

A/B voor kop en CTA: variant A vanuit **performance**, variant B vanuit **emotie**.

**Claims**

- Wetenschappelijk aangetoond: gripsokken verhogen de statische wrijvingscoëfficiënt van 0,60 naar 1,17, 95% meer grip (Apps et al. 2022)

**Risico's**

- Het getal hoort bij de categorie. In de rugbywereld staat de sok normaal vóór het grote woord: hier bewust niet, omdat een sok vóór '1,17' suggereert dat HÏ Grip zelf gemeten is.
- Het woord rugby staat niet bij het bewijs, alleen onder de lijn bij het product. Het onderzoek ging niet over rugby.
- Titanium wordt alleen gebruikt voor het grote cijfer 0,60, niet voor lopende tekst op licht.
- De korte bronregel in 9:16: laat de eigenaar bevestigen dat dit volstaat.

## De vier bewuste keuzes

**Klantwoord zonder Trustpilot.** Geen naam, score, logo of sterren van Trustpilot en ook geen groene sterren. Het bewijs zit in de woorden zelf: de volledige review staat woordelijk in beeld, met typografische hiërarchie in plaats van inkorten. De bron is eerlijk benoemd als "Klantreview" met maand en jaar. Het merk-quoteteken is het ene accent. Daaronder staat 3500+ sporters als tweede laag bewijs. Voetbal krijgt de review die over voetballen gaat. Rugby krijgt de sceptische review, omdat die de gedachte verwoordt van een sporter voor wie gripsokken nieuw zijn. Het woord rugby staat nooit in of bij de quote.

**Het aanbod eerlijk en sterk.** De prijs is de kop: "3 PAAR. €44,95." met de prijs in de accentkleur. De vergelijking staat er uitgeschreven onder: "In plaats van €53,85 voor 3 losse paren. Gratis verzending." Geen doorhaling, geen badge, geen percentage. De eyebrow "TRAINING · TRAINING · WEDSTRIJD" geeft de reden voor drie paar, zodat het pack logisch voelt en niet als korting.

**De vergelijking als categoriebewijs.** De labels zijn "GEWONE SOK" en "GRIPSOK", nooit de merknaam. De kop begint met het woord "GRIPSOKKEN:". De bronregel zegt letterlijk dat het onderzoek over gripsokken in het algemeen gaat. Het product staat onder een lijn, klein, en raakt het getal niet. In de rugbyset staat de sok daarom bij uitzondering niet vóór het grote element.

**De rugbyset als basis voor de Performance Days.** Het beste concept om door te trekken is **rugby_aanbod**. De opbouw is een rij sokken plus één prijsregel. Voor 1+1 hoeft alleen de inhoud te wisselen, de wereld blijft gelijk en is dan al twee weken gezien door de rugbydoelgroep. Aanpassing: Sokkenrij van 3 naar 4 (2 gekocht, 2 gratis). Kop wordt de actieregel van de Performance Days, bijvoorbeeld '2 KOPEN. 2 GRATIS.'. Sub noemt de looptijd 27 tot en met 30 november. Eyebrow wordt 'HÏ PERFORMANCE DAYS · RUGBY'. Accent volgens de campagne-uitzondering: volt als vlak met zwarte tekst of zwarte omlijning, niet rood en nooit volt als tekstkleur op licht. De pill blijft zwart. Tweede keus: rugby_probleem met het reuzenwoord RUGBY als herkenningsbeeld voor de aankondiging vooraf. Open: De exacte voorwaarden van 1+1 en of het stapelt met het 3-pack zijn een besluit van de eigenaar. Niets hiervan staat in de novemberbatch.

## UGC-video: de sceptische sporter

Formaat: 9:16, 1080x1920, 22 tot 24 seconden, verticaal gefilmd met een telefoon, daglicht, geen statief nodig.

**Idee.** Een echte sporter vertelt in eigen woorden dat hij gripsokken onzin vond, waarom hij ze toch probeerde en wat hij merkte.

**Waarom dit stopt.** De eerste zin is een afwijzing van het product, uitgesproken door iemand in sportkleding die recht in de camera kijkt. Dat verwacht je niet van een advertentie.

**Voorwaarden voor de persoon**

- Iemand die de sokken echt draagt en zijn eigen ervaring vertelt. Geen acteur met een script.
- Is de persoon lid van het team, betaald of kreeg hij de sokken gratis, dan wordt hij niet gepresenteerd als onafhankelijke klant. Maak dat zichtbaar: noem de eigen rol in beeld ('van team HÏ Grip') of gebruik het label voor betaalde samenwerking.
- Schriftelijke toestemming voor gebruik in betaalde ads.
- Voor de rugbyvariant: iemand die echt rugby speelt. Anders alleen de voetbalvariant opnemen.
- Geen clublogo's, geen sponsors en geen leesbaar woordmerk van een ander merk in beeld.

**Structuur per seconde**

| Tijd | Fase | Shot | Wat de persoon zegt | Ondertitel |
|---|---|---|---|---|
| 0 tot 2 s | hook | Close-up, borst tot hoofd, langs het veld of in de kleedkamer. Persoon houdt één sok omhoog naast zijn gezicht en kijkt in de lens. Geen intro, geen logo. | Voetbal: 'Gripsokken? Leek mij echt onzin.' Rugby: 'Gripsokken bij rugby? Dat leek mij echt onzin.' | Voetbal: GRIPSOKKEN? LEEK MIJ ONZIN. Rugby: GRIPSOKKEN BIJ RUGBY? LEEK MIJ ONZIN. |
| 2 tot 6 s | twijfel | Zelfde plek, iets wijder. Persoon gooit de sok in zijn tas of haalt zijn schouders op. | In eigen woorden waarom hij twijfelde. Richting: 'Een sok is een sok, dacht ik. Ik speel al jaren op gewone sokken.' | Een sok is een sok, dacht ik. |
| 6 tot 11 s | het moment van overstag | Drie korte shots van elk ongeveer 1,5 s: sok aantrekken met de zool en het grippatroon naar de camera, voet in de schoen en veters aantrekken, een echte draai of aanzet op het veld vanaf kniehoogte. | Zijn eigen ervaring van de eerste keer. Richting: 'Tot ik ze een training aanhad. Bij het draaien bleef mijn voet gewoon staan in mijn schoen.' Alleen zeggen als het voor hem klopt. | Tot ik ze een training aanhad. |
| 11 tot 16 s | het bewijs | Macro van de zool met het grippatroon, langzaam draaiend in de hand. Tekstkaart over het beeld: 'GRIPSOKKEN: 95% MEER GRIP' met daaronder de bronregel. De persoon zegt het getal niet zelf. | Richting: 'En ik ben niet de enige.' | Tekstkaart: GRIPSOKKEN: 95% MEER GRIP. Bronregel 30 px: 'Statische wrijvingscoëfficiënt 0,60 naar 1,17. Onderzoek naar gripsokken in het algemeen. Bron: Apps et al. 2022.' Daarna 1 s: '3500+ sporters gingen je voor.' |
| 16 tot 21 s | het aanbod | Persoon met drie paar in de hand of drie paar op de bank in de kleedkamer. Kijkt weer in de lens. | Richting: 'Ik heb er nu drie. Training, training, wedstrijd.' | 3 paar voor €44,95 in plaats van €53,85. Gratis verzending. |
| 21 tot 24 s | eindkaart | Effen #0A0A0A. Logo HÏ GRIP wit, gecentreerd op y 700. Regel 'PERFORMANCE GRIP SOCKS 2.0' in micro op y 800. Witte pill met zwarte tekst 'Shop 3-pack' en chevron op y 900 tot 978. Regel '30 dagen retour' in 30 px op y 1020. | Niets, alleen omgevingsgeluid dat uitloopt. | geen |

**Shotlist**

- A1 Hook voetbal: close-up met sok naast het gezicht, 3 takes
- A2 Hook rugby: zelfde kader, andere zin, 3 takes (alleen met een echte rugbyer)
- B Twijfel: iets wijder, sok in de tas
- C1 Sok aantrekken, zool naar de camera
- C2 Voet in de schoen, veters
- C3 Draai of aanzet op het veld, kniehoogte, 5 takes
- D Macro van de zool in de hand, langzaam draaien, 10 s materiaal
- E Drie paar in de hand of op de bank, persoon kijkt in de lens
- F Reserve: lopen naar het veld van achteren, taille tot voet

**Ondertitels.** Poppins 700, 54 px, gewone schrijfwijze, wit met een zwart vlak van 60% dekking erachter (hoek 12 px). Maximaal 2 regels van 28 tekens. De hook in Poppins 900 uppercase, 88 px, zonder vlak. Eén woord per ondertitel mag volt zijn in de voetbalvariant; in de rugbyvariant geen kleur. Gecentreerd, onderkant van het tekstblok op y 1180. Alles tussen y 270 en y 1250. De ondertitels volgen wat de persoon echt zegt. De regels hierboven zijn richting, geen script. Prijs, bron en 3500+ staan letterlijk zoals opgegeven.

**Geluid.** Eigen stem en omgevingsgeluid van het veld. Geen muziek zonder licentie, zie Muziek & Licenties in de vault.

**Varianten.** Twee exports met alleen een andere hook (A1 of A2). De rest van de video is gelijk, zodat het verschil tussen de sporten in de eerste 2 seconden zit.

**Claims**

- Eigen ervaring van de persoon, in eigen woorden
- Wetenschappelijk aangetoond: gripsokken verhogen de statische wrijvingscoëfficiënt van 0,60 naar 1,17, 95% meer grip (Apps et al. 2022), alleen als tekstkaart met bron
- 3500+ sporters
- 3-pack €44,95 in plaats van €53,85 voor 3 losse paren, gratis verzending, 30 dagen retour

**Risico's**

- Geen zelfgemaakte griptest in beeld (trekken, schuiven, meten): dat suggereert een eigen meting van HÏ Grip.
- De persoon noemt geen getallen, geen blaren, geen blessures en geen 'beste'.
- Een teamlid dat zich voordoet als klant is misleidend. Zie de voorwaarden voor de persoon.
- Het thema lijkt op een hook van een concurrent uit het ads-onderzoek. Neem die zin niet over: de eigen woorden van de persoon zijn leidend.
- Toestemming van de persoon en van de locatie (club) vóór het filmen.

## Wat ik heb afgewezen en waarom

- **Trustpilot-score, logo of sterren in beeld.** Mag volgens de merkrichtlijnen van Trustpilot alleen met een betaald abonnement. Open besluit, dus niet in deze batch.
- **Doorgestreepte prijzen.** De €19,95 is een Omnibus-risico. Ook de €53,85 wordt niet doorgehaald: dat is de som van drie losse paren en geen eerdere prijs.
- **"€9 korting" of een percentage.** Het echte verschil is €8,90. Een afgerond bedrag of een zelf berekend percentage is een nieuw cijfer dat nergens vastligt.
- **Kortingsbadge, ticket of cirkel.** Door de eigenaar eerder afgewezen als AI-achtig. De prijs is gewoon de kop.
- **AI-beeld van rugbyspelers en de clubshoot.** Verkeerd logo en geen rechten.
- **De actiefoto's met het woord PREDATOR groot in beeld** (de zwarte trap volledig en de brede witte foto). Een leesbaar woordmerk van een ander merk hoort niet in een betaalde ad. Alleen de onderste strook van de zwarte trap wordt gebruikt.
- **Feature-callouts met lijntjes en vier labels.** Te veel concurrerende elementen en een bewering over onszelf. De features staan in de primaire tekst.
- **Koppen als "de beste gripsok" en "de optimale gripsok".** Niet te onderbouwen en verboden in de briefing.
- **De sok vóór het getal 1,17.** Dat maakt van categoriebewijs een test van HÏ Grip.
- **Een pill in elke ad.** Meta zet zelf een knop onder de ad. Een pill is alleen zinvol waar de ad om een aankoop vraagt, dus alleen bij het aanbod.
- **De rood gevulde knop uit het eerdere rugbyontwerp.** De pill is altijd zwart of wit.
- **De review over beter voetballen (april 2026).** Een prestatieclaim van een klant is in een betaalde ad nog steeds een prestatieclaim van ons.
- **"Geen blaren" als voordeel.** Staat in ouder materiaal, maar de briefing verbiedt de claim dat de sok blaren voorkomt.
- **De sceptische review als uitspraak van een rugbyer.** De reviewer is geen bekende rugbyspeler.
- **Het 5-pack als tweede aanbod.** Twee aanbiedingen in één test maken onduidelijk wat werkt.
- **Volt in de rugbyset of twee accenten in één ad.** Eén accent per ad houdt de twee werelden uit elkaar.
- **De wedstrijdminuut op elke voetbalad.** Sterk als het één keer gebeurt, een trucje als het overal staat. Alleen in het probleemconcept.
- **Een griptest in de video.** Een zelfgemaakte proef suggereert een eigen meting.
- **Het reuzenwoord RUGBY in alle vier de rugbyads.** Dan lijken de ads op elkaar en leert de test minder over de hoek. Het staat alleen in het probleemconcept.

## Open punten voor de eigenaar

- Toestemming van de twee reviewers vóór livegang van beide klantwoord-ads.
- Akkoord op een review van vóór de 2.0 naast beeld van de 2.0.
- Akkoord op de schoenen van een ander merk in de foto van het probleemconcept, en op het kleine logo in de strook van de vergelijking.
- Akkoord op het grote rode woord in het rugbyprobleem, anders de fallback.
- De korte bronregel in 9:16 bij de vergelijking.
- Wie de video inspreekt en in welke rol.

> Map: [[04 Social Agent — Index]]
