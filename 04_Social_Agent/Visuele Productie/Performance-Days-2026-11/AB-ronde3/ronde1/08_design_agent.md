# Ronde 3, sparring deelnemer 8: Design Agent (bouwer)

Gelezen: 01_Agent_Infrastructuur/Design Agent/Agents Design Agent.md

Bronnen bekeken: BRIEF, beide overzichten, beide COPY.md, `AB-agents/html/build.py` + `base.css`, de bronmap (zwart/wit vrijstaande sokken 613×1102 / 620×1126, `pack3_zwart.png` 1400×1339, packshots 2.0 voor/achter/vrijstaand, `voetbal_wit_breed.jpg`). Niets gebouwd, niets gewijzigd.

## 0. Eerlijke diagnose: waarom wint mijn ronde-2 design, en waar is het nog geen studio

**Wat het sterk maakte (feitelijk uit build.py/base.css):**
- Elke ad heeft een **fysiek object met een eigen materiaal**: papier met 1,2 graden kanteling, bord met binnenrand, hangtag met clip-path en gat, kaart met rijen. Het object is het ontwerp, de sok is er een tweede laag bij.
- **Gelaagde schaduw**: kalender `0 34px 70px` + `0 4px 10px` (contactschaduw plus valschaduw), sokken `drop-shadow(0 26px 24px)`. Twee schaduwen per object lezen als echt licht.
- **Eén gebroken raster per ad**: het paar dat over de papierrand steekt, de 3-pack die uit het bord komt, de sok die boven de kaart uitsteekt. De grens tussen object en tekst wordt overschreden, dat geeft diepte.
- **Typografische discipline**: Poppins 900 italic, `line-height .9`, `letter-spacing -.04em`, kop links op 72px marge, volt op precies één woord of detail.
- **Contrast in ondergrond per ad**: zwarte ondergrond voor witte objecten, warm off-white (#EAE8E5) paneel of achtergrond voor zwarte sokken. Het product is altijd zichtbaar.
- **Reel is herschikt, niet uitgerekt**: aparte maten per format.

**Wat nog geen "premium studio" was (eerlijk):**
1. **Eén lichtbron ontbrak.** Schaduwen vallen allemaal recht naar beneden, op elk object hetzelfde. Een studio heeft een key light met een vaste hoek: alle schaduwen vallen dezelfde kant op, met een harde en een zachte component.
2. **Geen materiaaltextuur.** Papier, bord en ondergrond zijn vlak gekleurd. Echt papier heeft korrel, vezel en een randschaduw. Zonder korrel ziet het er na 1 seconde uit als UI.
3. **Geen diepte in de scherptezone.** Alles is even scherp. Foto's hebben voorgrond (onscherp), midden (scherp) en achtergrond (zacht).
4. **Elke ad is één object op één vlak.** Een scène heeft minstens drie lagen: ondergrond, hoofdobject, bijobject (tape, pen, rand van een tas, schaduw van iets buiten beeld).
5. **Sokken zijn te klein en te netjes.** Ze liggen er als stickers. Een bouwer zou ze schalen tot ze het kader breken en niet-recht plaatsen (zwaartekracht, kanteling, overlap).
6. **Idee en beeld zijn niet verweven.** In A zit het idee in de tekst op het object; in B zit het idee in de compositie zelf. Dat is wat we moeten samenbrengen.

## 1. Mijn vakmanschapsregels die blijven (max 6)

1. **Elk idee krijgt een fysiek object met materiaal en randdikte** (papier, karton, plastic, tape). Nooit een element zonder dikte of schaduw.
2. **Twee schaduwlagen per object** (contact scherp en kort, val zacht en lang), en vanaf nu **één vaste lichthoek** voor de hele ad.
3. **Eén rasterbreker per ad**: het product of object steekt buiten zijn container. Nooit alles binnen de marges.
4. **Kop in Poppins 900 italic, line-height .9, tracking -.04em, links op 72px; volt op één woord of één detail**, alleen op donker.
5. **Ondergrondkeuze volgt het product**: zwarte sok op #EAE8E5 of lichtere zone, witte sok op #111/#1a1a1a. Een product mag nooit in zijn ondergrond verdwijnen.
6. **Reel wordt herschikt binnen y 250 tot 1340**, niet uitgerekt; achtergrond en dragende vlakken lopen door tot de rand.

## 2. Techniekgereedschap dat ronde 2 miste (haalbaar, zie sectie 5)

Dit zijn de bouwstenen waarmee elke upgrade hieronder gebouwd wordt. Allemaal vlakke vormen en filters, geen decoratieve gradiënt of gloed.

- **Papierkorrel**: inline SVG `feTurbulence` (baseFrequency .8, 2 octaven) als opaciteit-laag op #EAE8E5 en op #1a1a1a. Maakt papier, karton en rubber geloofwaardig. Geen zichtbaar patroon.
- **Gobo-schaduw**: een hard of licht verzacht polygoon (rgba zwart .28 tot .4, blur 2 tot 6px) alsof een raamkozijn of een deur licht blokkeert. Geeft "echte kamer" zonder gloed.
- **Vaste key light linksboven**: alle `drop-shadow` en box-shadows krijgen dezelfde offset (bijv. 28px rechts, 40px omlaag). Schaduwen op de ondergrond worden daarmee consistent.
- **Voorgrond-onscherpte**: dezelfde sok-PNG nogmaals, 130 tot 170% groot, `filter: blur(14px)`, aan de rand van het kader. Eén element, enorme diepte.
- **Reflectie op zwart acryl**: gespiegelde packshot, opaciteit .18, afgesneden met een harde rand of een zachte `mask-image`. Technisch een masker, visueel een fysieke weerspiegeling. Spaarzaam gebruiken en alleen op zwarte ondergrond.
- **Schaalbreuk**: object op 120 tot 160% van het kader laten wegvallen; kroppen is gratis.
- **Rand- en vouwschaduw op papier**: een tweede rechthoek 2px verschoven met lagere opaciteit simuleert dikte; een vouwlijn is één lijn 1px donker plus 1px licht ernaast.

Beperking: de bronnen zijn 2D-packshots, vooraanzicht. Gebroken perspectief (top-down tafelblad) doen we niet met sokken; wel met platte objecten (papier, bon, tape, doos) die van boven gezien kunnen worden, waar sokken dan als vooraanzicht-stickers zouden meteen kloppen. Dus: **sokken altijd frontaal, rechtopstaand of licht gekanteld (max 12 graden), tegen of op iets dat frontaal gezien wordt** (muur met plank, tas die openstaat, rand van een bank).

## 3. Per B-idee een concrete visuele upgrade

Gemeenschappelijk: de eerdere B's zijn *vlak zwart met packshot erop*. De upgrade is steeds **een scène met een ondergrond-materiaal, een tweede laag en een vaste lichtbron**, niet meer elementen of meer decoratie.

### B1 · Geen korting (stoppen)
- **Probleem in B:** twee 3-packs zwevend op zwart; "geen korting" is alleen tekst.
- **Upgrade:** de verdwenen korting wordt een **object**. Een wit kartonnen schap-label van 520×330 px, scheef op de plank, met een groot afgesneden **%-teken** (alleen het teken, geen getal; dat is een symbool dat de feed herkent, geen claim) dat dóórgestreept is met één brede zwarte tape-strook, rand ruw met een smalle opstaande hoek. Het label ligt omgevallen op de plank, half achter de packs. Twee 3-packs staan er rechtop voor, schaal 140% van B, onderrand valt buiten het kader. Ondergrond: de plank is een #EAE8E5 vlak met papierkorrel, achterwand #111 met gobo-schaduw van een raamkozijn die schuin over label en packs valt.
- **Materiaal en licht:** karton (dikte 6px zichtbaar aan de rand), tape (matte witte strook met lichte transparantie door een 85%-opaciteit, en een rafelrand via `clip-path` zigzag van 4px), plastic hoes op de packs (kleine speculaire streep als één wit rechthoekje met opacity .15).
- **Waarom rijk:** de feed ziet eerst "iets wat doorgehaald is" (vertrouwd van sale), daarna dat dit een andere tekst is. Het beeld vertelt het idee zonder lezen.
- **Risico:** het %-teken mag niet als "korting" gelezen worden die wij geven. Daarom gestreept, en kop blijft "Geen korting. Wel alles twee keer."

### B2 · Zoek de verschillen (stoppen)
- **Probleem in B:** twee witte kaders op vlak zwart; saaie packshots zonder context.
- **Upgrade:** **twee gedrukte fotokaarten naast elkaar op een werktafel van zwart rubber** (#1a1a1a met korrel). Elke kaart is een **polaroid/proefdruk-achtig vel**: wit papier met 24px rand, subtiele hoekknik en een A en B in de witte rand onderaan, met een echte pen-stippel (handgetekende cirkel in zwart, SVG-pad met lichte onregelmatigheid) om één plek waar de lezer gaat zoeken. Beide kaarten zijn verschillend gekanteld (-2,5 en +1,8 graden) maar tonen dezelfde sok. Op de tafel ligt een zwarte stift (lang rechthoekig object met gradient-vrije kegelpunt via `clip-path`) en een stukje witte tape dat de linkerkaart vasthoudt.
- **Materiaal en licht:** papier met korrel, tape, rubber. Eén key light linksboven, schaduw van de stift valt rechtsonder.
- **Waarom rijk:** het is een zoekplaatje dat je in een tijdschrift of een quizpagina zou zien. De circel is het native element, het stoppunt.
- **Opletten:** we tonen geen verschil, dat klopt en is de pointe. Cirkel moet om iets kleins en neutraals, bijvoorbeeld het "HÏ GRIP"-label; niet om iets wat een claim lijkt.

### B3 · Expres (briefje, klikken)
- **Probleem in B:** wit briefje zwevend boven een gedimde sok-rij; briefje is een flat rechthoek.
- **Upgrade:** **het briefje zit in de doos**. Een open zwarte verzenddoos (#0A0A0A, binnenzijde #111, rand 22px dik met lichte kantschaduw) gezien van opzij/voor, waaruit twee 3-packs steken (rechtop, een paar centimeter boven de rand). Het briefje ligt schuin over de rand: A5, EAE8E5 papier met korrel, een paperclip (SVG-pad, dun metaal #909194, 2 contactschaduwen) bovenaan, met onderaan een kleine Team HÏ Grip-handtekening in Poppins italic 400. Het "EXPRES." onderstreept niet; het staat gewoon groot en zwart, met een blauw-zwarte stempelachtige uitlijning (geen badge).
- **Materiaal en licht:** karton met kartelrand op de flappen (herhaald verticaal streepje, 1px, 4px afstand, opacity .08 via repeating-linear; technisch een lijn-patroon, geen kleurverloop), papier met korrel, metaal. Licht van linksboven; de flap werpt een gobo-schaduw op het briefje.
- **Waarom rijk:** ontvangt-een-pakket is het meest herkenbare gevoel in e-commerce. De klant ziet een unboxing-moment in 1 beeld, voordat die iets leest.
- **Let op:** geen vertrouwd merklogo van een vervoerder, geen echt-ogende verzendlabel met adres.

### B4 · De wasmachine neemt er één (klikken)
- **Probleem in B:** wit paar en een grijze schim op zwart; schim is nauwelijks een idee.
- **Upgrade:** **de afwezigheid wordt een object**. Een waslijn? Nee, te sentimenteel. Beter: **de open wastrommel-deur** (cirkel, dikke zwarte rand, binnen #0A0A0A, ronde glas-reflectie als één witte boog opacity .22) vult de onderste 55% van het kader en loopt buiten beeld. Er hangt **één witte sok over de rand van de deur**, de andere ontbreekt. Naast het gat in de rubberen afdichting (donkerder vlak) zit een kleine ruimte waar de tweede sok had moeten hangen: de **schim is een licht afdrukzone op de rubberen rand** (een iets lichtere sok-vormige uitsparing met zelfde silhouet als de sok-PNG, 12% donkerder/lichter, geen gloed).
- **Materiaal en licht:** rubber (korrel), glas (witte boog), textiel. Eén key light, de sok werpt een schaduw op de deur die dezelfde hoek volgt.
- **Waarom rijk:** het is een nieuwsgierigheid-moment: iedereen kent de andere sok die weg is. Een echt object (trommel) maakt het geloofwaardiger dan een abstracte schim.
- **Haalbaar:** de trommel is cirkels en rand; geen merk, geen knoppen, geen display.

### B5 · Zes paar. €44,95 (kopen)
- **Probleem in B:** zes sokken in een rij op vlak zwart; het is een catalogus-opstelling, geen ad.
- **Upgrade:** **een vaste lijn sokken op een draagbare plank of bankje**, maar anders: **zes sokken over een bankleuning gehangen** is lastig met PNG's. Haalbaar alternatief: **zes sokken in een sporttas**, gezien van voren, tas open: de tas is een zwart vlak (#0A0A0A, naden met 2px lichtere lijn, ritssluiting als herhaald klein vierkantje, `repeating-linear`) met een opening waaruit zes sokken staan in een waaier (verschillende hoek, -16 tot +16 graden), de voorste groot en scherp, de achterste kleiner en 8% donkerder (atmosferische diepte). Op de tas ligt de kassabon van €107,70 doorgestreept, op de bon in Poppins mono-achtige tabel (Poppins tabular-nums): 6 × €17,95 = €107,70, daaronder €44,95 groot.
- **Materiaal en licht:** nylon met tweede-laag textuur (een subtiele ribbelstructuur, 2px), papier-bon met korrel en gescheurde bovenrand (zigzag clip-path), schaduw van de tas op de #EAE8E5 vloer.
- **Waarom rijk:** het aantal zes wordt een visuele hoeveelheid (numerositeit) EN een herkenbare plek (de sporttas). De bon is het anker dat in B als tekst stond.
- **Opletten:** de kassabon-vorm is herkenning, geen nep-app-scherm. Geen winkelnaam, geen barcode die echt oogt.

### B6 · 3 = 6 (kopen)
- **Probleem in B:** drie sokken, "=", zes sokken, op vlak zwart: leest als een slide.
- **Upgrade:** **de som staat op een schoolbord/whiteboard-achtig vlak? Nee**, te kinderlijk. Beter: **een zwart paneel waarop de som is gestanst/gegraveerd** (eigenlijk: reliëf-letters in #1a1a1a op #111, met lichte rand-highlight linksboven en schaduw rechtsonder, de "debossed"-look, zonder gradiënt). Onder het "3" staat het echte 3-pack zwart (1400×1339 bron), onder het "6" staan **twee 3-packs** achter elkaar, de achterste 8% donkerder en iets omhoog. Het "=" is volt (het enige detail dat verandert). Het bord is kaal; de objecten staan op een lage plank onderin met contactschaduw.
- **Materiaal en licht:** gegraveerd/geperst paneel, plastic hoes, plank. De waarde van het ontwerp zit in de reliëfletter: het getal wordt object.
- **Waarom rijk:** de som is hergebruikt als iets materieels in plaats van een tekstregel; het klopt-niet-gevoel zit nu ook in de vorm.
- **Opletten:** reliëf werkt met 2 box-shadow of `text-shadow` van 1px licht en 1px donker; geen gloed.

## 4. Drie eigen nieuwe concepten (sterk idee + sterk beeld)

### Concept N1 · "De andere helft" (laag: stoppen)
- **Compositie:** een enkele witte sok in extreme close-up, 150% van het kader, onderrand weggevallen, **doormidden gescheurd** langs een verticale lijn... nee, geen beschadiging van product. In plaats daarvan: **een lege schoenendoos in het midden van de compositie met twee uitsparingen**. Eén uitsparing bevat een zwart paar, de ander is leeg en toont de bodem van de doos als een schim. De doos is **EAE8E5 karton met korrel**, gezien van voren, deksel 12 graden open, geworpen schaduw van het deksel op het vulpapier. Op de bodem van de lege uitsparing ligt een klein briefje: "Nog een." in Poppins 800.
- **Kop:** "Elk paar. Nog een keer." (5 woorden)
- **Psychologie:** onvolledigheid-drang (het brein wil de lege vakken vullen) plus verwachtingsbreuk; de lege plek is de tweede, gratis helft.
- **Haalbaar:** doos = polygonen met kleurverschil en korrel; sok = PNG; briefje = div. Medium.

### Concept N2 · "Klaar voor de trainer" (laag: klikken)
- **Compositie:** een **kleedkamerbank van boven-voor**: houten rand in #1a1a1a met korrel, daarop **twee tassen naast elkaar**, de linker open met één paar zwart erin, de rechter ook open met één paar wit; **op de rand van de bank hangt één handdoek (wit rechthoek met 3 plooien via box-shadow-lijnen)**. De sokken zijn de hero in de voorgrond, 130% schaal, licht onscherp vooraan. Er hangt een **sleutelhanger-labeltje** (zelfde zwart als hangtag) aan de rits van de rechter tas met de tekst "voor jou" en "voor de ander", als twee regels zonder vakjes.
- **Kop:** "Eentje voor jou. Eentje voor hem." (6 woorden). Alternatief neutraler: "Eentje voor jou. Eentje voor je maat."
- **Psychologie:** sociale wederkerigheid en vermijden van eigen gedragsrisico: jij geeft iets aan een teamgenoot (identiteit "ik ben iemand die zorgt voor de ploeg"), de gratis tweede is een geschenk dat je zelf mag uitdelen.
- **Haalbaar:** tassen zijn rechthoeken met afgeronde hoeken en naden; handdoek als wit vlak; sokken in PNG. Medium; schaal is risico.

### Concept N3 · "Het dozenmuurtje" (laag: kopen)
- **Compositie:** **drie zwarte 3-packs naast elkaar gestapeld als in een winkelschap**, dwars doorgesneden door een **rij van zes witte hangtags aan één draad** over het kader. Aan elke tag staat één getal: 1, 2, 3 (de gele) en onder hen 4, 5, 6 (wit). De tags vormen een lijn van links naar rechts; de eerste drie zijn zwart, de laatste drie wit (de dubbeling), aan elk hangt de echte sok-bron erachter. De draad is een SVG-pad met lichte doorbuiging.
- **Kop:** "Zes paar. Eén bestelling." (4 woorden)
- **Psychologie:** concreetheid en numerositeit; de dubbeling wordt zichtbaar als kleurwissel (zwart naar wit) zonder dat er een tekst als "gratis" nodig is.
- **Haalbaar:** tags hergebruiken van mijn ad 3/6 (clip-path); draad is SVG; makkelijk tot medium.

## 5. Mijn top 3 van alle ideeën, met reden en haalbaarheid

1. **B3 · Expres, in de doos (met briefje en paperclip).** Het is de ad met het sterkste fysieke moment (unboxing), de meeste materialen (karton, papier, metaal), en het idee draagt zichzelf. De klant herkent het gevoel in een fractie van een seconde, en het past bij "gevoels- en herkenningsads" (9,98% CTR). Technisch: doos in polygonen, briefje met korrel, paperclip SVG. Haalbaar, en het is het enige idee waar de sok níet de held hoeft te zijn.
2. **B2 · Zoek de verschillen als gedrukte proefkaarten met pen-cirkel.** Native, nieuwsgierig, stopt de duim. Mijn vakmanschap (twee kaarten, tape, stift, rubber) maakt het rijk zonder een lege achtergrond. Haalbaar: kaarten = divs met rand en korrel; pen-cirkel = SVG-pad; stift = clip-path.
3. **B6 · 3 = 6, met gegraveerd/gestanst reliëf en echte packs onder elk getal.** Hoog contrast, grote cijfers, direct leesbaar op een telefoon in 1,5 seconde. Het reliëf laat de schreeuwerige slide-look los. Haalbaar met box-shadow en de bestaande 3-pack bron.

(Eerste reserve: B1 met het doorgestreepte %-schaplabel; sterk idee, maar het raakt een prijsclaim-risico en vraagt akkoord van het team.)

### Technisch haalbaar in HTML/CSS + headless Chrome (bevestigd uit ronde 2)
- Wel: papierkorrel (SVG-filter), box-shadow in twee lagen, `clip-path` voor tags/kartelranden/zigzag, SVG-paden (touw, pen-cirkel, paperclip), `mix-blend-mode: multiply` voor schaduw van sokken op papier, `filter: blur()` voor voorgrondonscherpte, `mask-image` voor reflecties, `transform: rotate/perspective` licht (max 12 graden), `Poppins` lokaal, render op 2x.
- Beperkt: perspectief van sokken (alleen vooraanzicht bronnen), echte stof-draping, echte water/rubber-glans; liever suggereren dan nabootsen.
- Niet: AI-beeld, foto-compositing met echte handen of mensen (geen bron), merklogo's van anderen.
- Shootfoto's: `voetbal_wit_breed.jpg` is daglicht, ca. 1286 px, zichtbaar logo van een ander schoenmerk op de schoen en bal; bruikbaar alleen als **uitsnede op de sok** (ca. 110 px breed, te laag voor 2x) of als sfeerlaag onder ontwikkeling. Niet gekozen voor de hoofd-ads; wel mogelijk voor een voetbalspecifieke reel-variant als de rechten zijn vastgelegd.
- Reel: alle scènes hebben vlakken die door-lopen tot de onderrand; hoofdobject binnen y 250 tot 1340, x 72 tot 1008.

## 6. Wat ik de groep adviseer
- **Hou het denkniveau van B, maar bouw het als scène.** Per ad één ondergrond-materiaal, één bijobject, één key light, één rasterbreker.
- **Maximaal twee ads met sokken als held; de andere vier laten een object het verhaal dragen** (doos, kaart, label, paneel). De sok is het bewijs, niet de held; zo verdwijnt de "kale packshot-op-vlak"-indruk.
- **Eén regel voor de QA**: blur het beeld mentaal tot 10%: blijft er een duidelijk object met een duidelijke lichtrichting over? Zo ja, dan is het geen lege achtergrond.
- **Te beslissen door het team:** akkoord op het %-teken als doorgestreept object (B1) en op het gebruik van een kassabon (B5).

> Map: [[04 Social Agent — Index]]
