# Ronde 3: 6 ads HÏ Performance Days (Design Agent, bouwer)

Gemaakt 24-11-2026 op basis van `OORDEEL.md` (R1 t/m R6). Aanbod: alles wat je bestelt krijg je twee keer, vrijdag 27 t/m maandag 30 november 2026; dinsdag 1-12 is het voorbij. Bouw: `html/build.py` met `a1.py` t/m `a6.py`, `common.py` (materialen, schaduwen, render), `base.css`, `textures.py`. Render op 2x met headless Chrome: feed 2160×2700, reel 2160×3840 (gecontroleerd met PIL, alle 13 bestanden). PNG's in `png/` (`r3_<nr>_<naam>_feed.png`, `_reel.png`, extra `r3_2_pakbon_feed_kopB.png`), overzicht in `overzicht.jpg`. Niets gepubliceerd, niets gecommit.

Vaste bouwregels: elke ad is een scène met materiaal, één lichtbron linksboven (schaduwen vallen rechts en omlaag), per object een contactschaduw en een valschaduw, korrel over het hele beeld, vloeipapier, karton, hout, linnen, kalksteen, rubber en aluminium als ondergrond. Zes verschillende ondergronden: wit gelakte wasmachine (R1), kleedkamerwand en houten bank (R2), eikenhout en linnen (R3), kalksteen (R4), zwart rubber (R5), geborsteld aluminium met witte plank (R6). Koppen: Poppins 900 italic, hoofdletters, met woordafstand zodat woorden los staan.

## R1 · De wasmachine (stoppen)
- **Idee:** voorlader met open deur (scharnier zichtbaar, chromen deurrand, glas), bedieningspaneel met zeeplade en draaiknop. Eén wit HÏ Grip-paar blijft in de rubberen rand hangen. Van links schuift een kraft-envelop met een nieuw zwart paar het beeld in.
- **Tekst in beeld:** "De wasmachine neemt er één." · "Wij geven hem terug. Alles wat je bestelt, krijg je twee keer." · "Vrijdag 27 t/m maandag 30 november."
- **Primair:** Tot en met maandag geven wij hem terug: alles wat je bestelt, krijg je twee keer. Vrijdag 27 t/m maandag 30 november. Voor de sporttas, de training en de wedstrijd.
- **Kop A (probleem):** De wasmachine neemt er één. **Kop B (urgentie):** Alles dubbel t/m maandag 30-11
- **Beoordelingskaart (feed):** focus 2 · native 2 · herkenning 2 · één idee 2 · beeld=kop 2 · echt beeld 1 · accent op betekenis 1 · merk in pointe 1 · laag 2 · leesbaar 2 = **17/20**
- **Poortcheck:** Poppins lokaal, geen volt (niet nodig); geen CTA (stoppen-laag); geen stippen, badges, eyebrows, countdown, nep-UI; chroom en rubber zijn materiaal (conic- en radial-gradient als renderhulp voor chroom en rubberen plooien, geen decoratieve gradiënt of gloed); logo-lockup gecentreerd bovenaan, reel op y 250, tekst en sok binnen y 250 tot 1340; alleen eigen packshots.
- **Afgeweken:** deur staat open met scharnier (opdracht Denzel na feedback: moet als voorlader lezen), envelop komt van links in plaats van rechts zodat de open deur rechts ruimte heeft. De wit-grijze lak is #ECEBE8 (net buiten het palet, materiaalkleur van de machine).

## R2 · De pakbon (stoppen)
- **Idee:** open kraftdoos op een houten kleedkamerbank in lage driekwart, twee 3-packs diep in de doos gezakt met vloeipapier eromheen en ervoor, een pakbon over de voorrand met één pencirkel om "6 paar". Raamlicht als gobo-schaduw op de muur.
- **Tekst in beeld (kop A):** "Er zit een fout in je bestelling." · pakbon: "Pakbon · Besteld 3 paar · Geleverd 6 paar · Extra betaald €0,00". Extra bestand `r3_2_pakbon_feed_kopB.png` met "Besteld: 3. Geleverd: 6."
- **Primair:** Geen fout. Expres. Tot en met maandag 30 november krijg je alles wat je bestelt twee keer.
- **Kop A (twijfel):** Er zit een fout in je bestelling. **Kop B (test):** Besteld: 3. Geleverd: 6.
- **Beoordelingskaart:** 2 · 2 · 2 · 2 · 2 · 1 · 2 · 1 · 2 · 2 = **18/20** (accent = de pencirkel)
- **Poortcheck:** geen volt; geen CTA; gewone getallen uit de brief; alleen packshot 3-pack zwart; geen los briefje (één focuspunt); reel herschikt, pakbon-tekst tot y 1340.
- **Afgeweken:** de pakbon staat gedeeltelijk over de rand omdat de doos van voren gezien wordt (alleen vooraanzicht-packshots).

## R3 · Waar laat je zes paar? (klikken)
- **Idee:** vrije flatlay op een linnen doek over eikenhout, zes zwarte paren (de sokken liggen op hun zijkant, dus het profiel klopt), elk paar met een stukje masking tape: Sporttas, Was, Ilse groot; Auto, Reserve, December klein. Geen raster, paren gekanteld en door de rand afgesneden.
- **Tekst in beeld:** "Waar laat je zes paar?" · "Bestel het 3-pack, krijg 6 paar voor €44,95." · "Vrijdag 27 t/m maandag 30 november."
- **Primair:** Bestel het 3-pack en krijg 6 paar voor €44,95. Eén voor je tas, één voor de was, één voor wie je wilt. T/m maandag 30-11.
- **Kop A (vraag):** Waar laat je zes paar? **Kop B (performance):** 6 paar voor €44,95, t/m maandag
- **Beoordelingskaart:** 2 · 2 · 1 · 2 · 2 · 1 · 1 · 1 · 2 · 2 = **16/20**
- **Poortcheck:** geen volt (de tape draagt de betekenis); geen CTA (klik-laag, tekst en beeld volstaan); tape-tekst in Poppins, niet handgeschreven (geen handschriftfont toegestaan); geen verzonnen naam behalve de voornaam "Ilse" uit de oordeel-brief.
- **Afgeweken:** geen knop. Zwart op linnen omdat wit op warm off-white wegvalt.

## R4 · Eén houd je. Eén geef je. (klikken)
- **Idee:** flatlay op kalksteen: links het paar dat je houdt, rechts een paar in vloeipapier met katoenen lint en strik, een kraft-kaartje "voor ______" met open invulregel en een pen. Een wit manchet piept boven het papier uit.
- **Tekst in beeld:** "Eén houd je. Eén geef je." · "Alles wat je bestelt, krijg je twee keer." · "Vrijdag 27 t/m maandag 30 november."
- **Primair:** Alles wat je bestelt, krijg je twee keer. Eén voor jou, één voor wie ook grip nodig heeft. T/m maandag 30-11.
- **Kop A (identiteit):** Eén houd je. Eén geef je. **Kop B (sociaal):** Eén voor jou, één voor je maat
- **Beoordelingskaart:** 2 · 2 · 2 · 2 · 2 · 1 · 1 · 1 · 2 · 2 = **17/20**
- **Poortcheck:** geen Sinterklaasrijm, geen leverbelofte, geen volt; geen CTA; pen en kaartje zijn objecten zonder functie.
- **Afgeweken:** kaartje toont alleen "voor" met een lege lijn, zodat niets verzonnen wordt.

## R5 · Lees je bon maar na. (kopen)
- **Idee:** thermische bon met gescheurde rand op zwart rubber, een 3-pack erachter. Elke regel dubbel, de tweede regel €0,00 omcirkeld met pen, plus de eerlijke kleine regels.
- **Tekst in beeld:** "Lees je bon maar na." (volt op "bon") · "3-pack 2.0 €44,95 · 3-pack 2.0 €0,00 · Verzending €0,00 · Totaal 6 paar €44,95 · Per paar €7,49" · "1 paar? Verzending €4,50. Pak er 2, dan krijg je 4 en verzend je gratis." · "Vanaf dinsdag 1-12 weer 3 paar." · knop "Shop nu" (wit, zwarte chevron)
- **Primair:** Bestel het 3-pack 2.0 en krijg 6 paar voor €44,95, €7,49 per paar, gratis verzending. Vrijdag 27 t/m maandag 30 november, daarna weer 3 paar.
- **Kop A (herkenning):** Lees je bon maar na. **Kop B (performance):** 6 paar, €7,49 per paar
- **Beoordelingskaart:** 2 · 1 · 2 · 2 · 2 · 1 · 2 · 1 · 2 · 2 = **17/20**
- **Poortcheck:** geen anker (geen €107,70); "gratis" alleen op verzending; 2 × €17,95 = €35,90 is boven de €35-grens; geen nep-UI (de bon is een papieren object zonder functie); volt op één woord; CTA wit met chevron.
- **Afgeweken:** volt staat op "bon" in de kop (de bon is wit, dus geen volt op €0,00; daar staat de pencirkel).

## R6 · 3 = 6 (kopen)
- **Idee:** de som als reliëf in een geborsteld aluminium paneel, "=" als enige volt. Eronder op een witte plank één 3-pack onder de 3 en twee onder de 6 (de achterste donkerder en kleiner).
- **Tekst in beeld:** "3 = 6" · "Klopt niet. Tot maandag wel." · "3-pack 2.0 · €44,95 · gratis verzending. Vrijdag 27 t/m maandag 30 november." · knop "Shop nu"
- **Primair:** Klopt niet, weten we. Tot en met maandag 30-11 wordt je 3-pack 2.0 gewoon 6 paar. Zelfde prijs: €44,95.
- **Kop A (emotie):** 3 = 6. Tot maandag **Kop B (performance):** 6 paar voor €44,95
- **Beoordelingskaart:** 2 · 1 · 1 · 2 · 2 · 1 · 2 · 1 · 2 · 2 = **16/20**
- **Poortcheck:** volt alleen op "="; CTA wit met chevron; geen tactiekbord (sportneutraal); geen percentages.
- **Afgeweken:** de cijfers 3 en 6 zijn licht reliëf (lichtgrijs, niet donker) omdat donker op donker op een telefoon onleesbaar was.

## Technisch en eerlijk over wat niet goed is
- Chrome kapt SVG-filters boven ca. 2500 px hoogte af. De drie volle ondergronden (kalksteen, rubber, aluminium) zijn daarom vooraf gerenderd met `html/textures.py` (numpy-ruis, PNG in `bron/`); hout, linnen en kraft komen uit SVG-filters. De korrel is een SVG-filter, in twee helften. Headless Chrome liet onderaan 80 px weg; de render maakt het venster groter en snijdt bij.
- Niet goed gekregen: het vloeipapier (R2) leest als geknipt papier met een golvende rand, niet als zacht vloeipapier; de envelop (R1) is nog groot en de deur geen echte 3D; het gewikkelde pakje (R4) is vlak; in R5 verdwijnt het zwarte 3-pack deels achter de bon op zwart rubber. Sokken zijn alleen vooraanzicht (of liggend profiel), dus geen echte diepte in sokken zelf. Reels hebben onderin lege ondergrond (onveilige zone), geen content.
- Niet gecontroleerd: weergave in de Meta-app, andere plaatsingen dan feed 4:5 en reel 9:16, kleurweergave op een echt telefoonscherm. Het Performance Days-aanbod staat nog niet in `Feiten & Actuele Staat`. Retourbeleid niet genoemd (site tegenstrijdig). Eindtijd maandag niet genoemd.

> Map: [[04 Social Agent — Index]]
