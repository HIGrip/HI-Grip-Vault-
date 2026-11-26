# Ronde 1 · Deelnemer 6 · Art director

Gekeken naar: beide overzichten, alle B-feeds los (3 en 4 op ware grootte), beide COPY.md, de bronfoto's in `Meta-batch-2026-11/bron/foto/` (incl. pixelmaten).

**Kern in één zin:** set B ziet er saai uit omdat elk beeld een uitgeknipte sok op een leeg digitaal vlak is. Er is geen ondergrond, geen lichtbron en geen schaal. Het idee ligt dan in de tekst en niet in het beeld. Een studio bouwt eerst een *plek* (een tafel, een doos, een veld) en zet het product daar in.

## Waarschuwing bij het beeldmateriaal (vóór alles)

- **`voetbal_wit_breed.jpg` en `voetbal_zwart_trap.jpg` tonen allebei een adidas Predator** (strepen, "PREDATOR" groot op de zool, in `zwart_trap` zelfs scherp in het midden). Volgens de brief is alleen `voetbal_wit_trap` verboden, maar deze twee kunnen om dezelfde reden niet. Er blijft één schone foto over: **`voetbal_wit_grippatroon_4x5.jpg`** (zool met grip naar de camera, geen schoenen, 1080×1350). Kanttekening: het is daglicht, niet avond zoals de brief zegt.
- **Resolutie:** de packshots zijn 1024 tot 2000 px, de render 2160 breed. Een "extreme close-up van de nopjes" uit een packshot wordt zacht (het grippatroon is in de bron ±400 px hoog). Close-ups dus maximaal ~1,5× opschalen. Voor echte macro is `packshot_2-0_wit_voor_groot.png` (2000 px) de enige bruikbare bron.
- 3-pack en 5-pack hebben het rode "3 Paar"-label: wegsnijden of maskeren, anders oogt het als een webshopthumbnail.

## 1. Oordeel per ad (één regel)

**Set A (agents)**
- **A1 Kalender:** het beste object van beide sets: papier dat licht scheef ligt, met schaduw. Het blijft wel een kalender op zwart, de sok is plakwerk op de rand en het grid van 30 cijfers is visuele ruis.
- **A2 Teamregels:** bord met dikke rand, zwarte balk, 3-pack ervoor. Het is het meest "template": gemaakt als een slide, geen materiaal, geen licht.
- **A3 Tweede paar:** label aan touwtje is een goed fysiek detail. Maar het off-white vlak met de zwarte bovenhelft is een kale splitsing en twee vrijstaande sokken zonder vloer zweven.
- **A4 Was/tas:** twee gelijke panelen op zwart is precies de symmetrie die goedkoop oogt. De grijze gedimde sok voelt als een fout, niet als een keuze.
- **A5 Prijsladder:** een nette kaart met goede typografie, maar het blijft een tabel. Het pack dat boven de kaart uitsteekt is de enige breuk.
- **A6 Hangtags:** de kaartjes met lijntjes hebben vakmanschap, maar ogen als een infographic. Twee CTA-achtige vlakken concurreren.

**Set B (Claude)**
- **B1 Geen korting:** sterke kop. Zes zwarte sokken op zwart lossen op tot één donkere vlek: geen contrast, geen licht, geen vloer.
- **B2 Zoek de verschillen:** het idee is goed, maar twee identieke witte kaders op zwart zijn letterlijk een leeg formulier. Een puzzel vraagt om een gedrukt puzzelblad (krantenpapier, raster, nummering), niet om twee vakken.
- **B3 Expres:** het briefje is het enige object met houding. Het is wel puur wit zonder papiertextuur, de sokken erachter verdwijnen in het zwart en de onderste derde is leeg.
- **B4 Wasmachine:** het beste idee van de set. De schim is een egaal grijs silhouet met het woord "Kwijt." erin, waardoor het als een placeholder leest in plaats van als gemis. De helft van het frame is dood zwart.
- **B5 Zes paar:** numerositeit werkt, maar het oogt als een catalogusrij. Zes keer dezelfde uitsnede, even groot, zonder overlap of perspectief.
- **B6 3 = 6:** typografie als beeld is de goede richting, maar de som is te klein en de sokken onder de getallen zijn te klein om te lezen. Het volt-isteken is een vol volt-vlak als decoratie.

**Gemeenschappelijke diagnose:** 10 van de 12 hebben dezelfde opbouw (logo, kop links, product midden, regel eronder) op hetzelfde #111. Op een telefoon in de feed zie je dan één ad twaalf keer.

## 2. Visuele principes voor ronde 3

1. **Elke ad heeft een ondergrond met materiaal**: karton, pakpapier, houten bank, kunstgras, beton, een wit laken. Nooit meer een vlak #111 of #fff van rand tot rand. De "achtergrond" ís het object (doos, bon, tafelblad), het mag het hele frame vullen.
2. **Eén lichtbron, linksboven, overal gelijk.** Schaduwen vallen rechtsonder, in twee lagen: contactschaduw (scherp, 2 tot 6 px, 60% zwart) plus slagschaduw (zacht, 40 tot 80 px blur, 20%). Zonder contactschaduw zweeft alles. Dat is het verschil tussen geplakt en neergelegd.
3. **Schaal: het product vult minimaal 55% van het frame en mag eraf vallen.** Snij de sok af aan een rand (manchet buiten beeld, teen in de hoek). Uitsnede suggereert een groter geheel; een volledige sok met marge rondom is catalogus.
4. **Typografie in twee maten, geen middenmaat.** Kop 180 tot 320 px (op 2160 breed) Poppins 900, óf klein als drukwerk op het object (20 tot 28 px, zoals een pakbon). Niets in de 60 tot 90 px-zone, daar woont de template.
5. **Tekst die op een object staat, gedraagt zich als drukwerk**: hij volgt de rotatie van het object, krijgt `mix-blend-mode: multiply` op papier en mag deels onder tape of een vouw verdwijnen. Tekst die zweeft, staat recht en strak.
6. **Herhaling alleen met variatie**: bij 6 of 10 sokken verschilt elke sok in hoek (±4 tot 12°), overlap en diepte (de achterste 8% kleiner en 10% donkerder). Zes identieke klonen op een rij is de AI-signatuur.
7. **Per set minimaal drie verschillende ondergronden en kleurtemperaturen**: warm (karton, hout), koel (beton, laken), donker (kleedkamer). De feed-scroll moet zes verschillende plekken laten zien, niet zes varianten van één.
8. **Volt alleen op het ene detail dat de pointe draagt** (één getal, één streep tape) en alleen op een donkere ondergrond. Op karton of wit is er geen volt: daar draagt het zwart de nadruk.

**Hoe een packshot gaat leven:** (a) het staat op iets en raakt het (contactschaduw), (b) er ligt iets óp of tegen (tape, label, een tweede sok die eroverheen valt), (c) het is afgesneden door de frame-rand of door de rand van een doos, (d) een subtiele vervorming: `transform: rotate(-7deg)` plus een zachte `filter: drop-shadow` die past bij de lichtbron. Nooit recht, gecentreerd en met marge.

## 3. Drie eigen concepten

### Concept AD-1 · DE DOOS (klikken, bouwt verder op B3 "Expres")

**Kop:** **Twee keer ingepakt. Expres.** (4 woorden)

**Compositie feed 1080×1350 (in 1x-maten):**
- Het hele frame is de **binnenkant van een open verzenddoos, van bovenaf gezien**. De vier kartonnen flappen lopen uit het beeld: de linker- en bovenflap zijn zichtbaar als schuine vlakken, de randen gaan buiten het frame. Kraftkarton #C9A97A lijkt een uitzondering, maar karton is een *materiaal*, geen merkkleur. Om strikt in het palet te blijven: gebruik **ongebleekt grijs karton (#B9B4AC getint naar #EAE8E5)**. Mijn voorkeur: echt bruin karton als foto-textuur, laat het team beslissen.
- In de doos liggen **twee identieke zwarte 3-packs naast elkaar**, de rechter 5° gedraaid. Ze vullen samen ±70% van de breedte en lopen onderaan net uit beeld.
- Over beide heen loopt diagonaal **een strook bruine verpakkingstape**, half losgetrokken: de tape krult op aan de rechterkant met een eigen schaduw.
- **De pakbon** (A6-papier, wit met lichte papiertextuur, 4° gedraaid) ligt linksboven half óp het linker pack. Daarop staat in klein drukwerk, als echte pakbonregels: `Artikel  Performance Grip Socks 2.0 · 3-pack  aantal 1` en daaronder, met een **handgeschreven-ogende Poppins Italic 300 aanpassing**: `aantal 2`, met de 1 doorgestreept met één zwarte pennenstreek (SVG-path). Geen volt.
- Kop bovenaan in het frame over het karton, Poppins 900, 150 px op 1x, zwart, recht (zweeft dus boven de doos, niet erop). Logo-lockup gecentreerd erboven, zwart.
- Onder: "Vrijdag 27 t/m maandag 30 november." 20 px op de pakbon zelf (laatste regel, als leverdatum).

**Waarom het werkt:** de klant herkent het moment van uitpakken. Het idee (alles twee keer) staat in het object zelf: twee packs plus een gecorrigeerde pakbon. De doorgehaalde 1 is de pointe, en die is menselijk.

**Bouw in HTML/CSS:**
- Karton: een eigen foto van een doos (5 minuten werk met een telefoon in daglicht, van bovenaf) is veruit het beste. Zonder foto: een basiskleur plus een SVG `feTurbulence`-ruis (baseFrequency 0.8, opacity 0.08) met `mix-blend-mode: multiply`, plus de flappen als `clip-path`-polygonen met een lineaire *schaduw*overgang aan de vouwlijn. Dat laatste is schaduw, geen decoratieve gradiënt: het moet donkerder worden waar de flap omvouwt.
- Packs: zwarte 3-packshot met het label weggemaskeerd. Er is nu alleen een **wit** 3-pack: gebruik dan twee witte 3-packs (op karton is wit juist mooi) of stel drie `sok_zwart_vrij.png` samen tot een pack.
- Tape: `div` met #B08A55 op 85% dekking, `backdrop-filter: none`, een ruistextuur, gekartelde uiteinden via `clip-path` met zigzag, en een opgekrulde punt als tweede div met `transform: perspective(400px) rotateX(40deg)` en een eigen schaduw.
- Pakbon: div met #FDFCFA, ruis 4%, `box-shadow: 0 2px 3px rgba(0,0,0,.35), 8px 18px 40px rgba(0,0,0,.18)`, tekst in Poppins 500 13 px met `letter-spacing: .02em`.
- **Reel:** de doos wordt hoger (flappen boven en onder in beeld), packs onder elkaar in plaats van naast elkaar, pakbon over de naad. Kop binnen y 250 tot 600.

### Concept AD-2 · DE BANK (stoppen, voor alle sporten)

**Kop:** **Eén paar is nooit genoeg.** (5 woorden). Variant: **Altijd een schoon paar.**

**Compositie:**
- Frame gevuld met **een houten kleedkamerbank, schuin van bovenaf (±35°)**: drie planken lopen diagonaal van linksonder naar rechtsboven en vallen links en rechts buiten beeld. Donker gelakt hout, koel licht van linksboven alsof er een TL-balk hangt. De vloer onder de bank (rechtsonder zichtbaar) is donkergrijs beton #1a1a1a.
- Op de bank: **links een gedragen, verfrommeld wit paar** (de witte sok uit `voetbal_wit_grippatroon` kan niet, het moet een packshot zijn: `wit_achter` 12° gedraaid, deels over de rand van de plank gevouwen). Rechts **een opgevouwen, nieuw zwart paar** met tape eromheen (het verpakkingsbandje).
- Het belangrijkste: tussen de sokken in, op de bank, ligt **een tweede, identiek zwart opgevouwen paar** dat half onder het eerste uitsteekt. Er zijn er twee. Dat is het enige detail in volt: **de tape rond het tweede paar is volt** (een smalle strook, 18 px).
- Kop linksboven in het lege stuk beton, wit, Poppins 900, 120 px, 2 regels. Grid breken: de kop loopt door tot over de bovenste plank, en de plank ligt erover (z-index: de plank bedekt de onderkant van de letter "g").
- Onderin: "Alles wat je bestelt, krijg je twee keer. T/m maandag 30-11." 22 px wit.

**Waarom:** herkenning (de kleedkamer is sportneutraal: padel, voetbal, hockey, pilatesstudio, iedereen kent die bank), gevoel boven product (de brief noemt 9,98% CTR op gevoel). Het product is groot en tastbaar.

**Bouw:** de planken als drie divs met een houtnerf-foto als `background-image`. Zonder foto: SVG `feTurbulence` type fractalNoise met baseFrequency `0.02 0.4` (uitgerekt = nerf), getint naar #2a1f17, plus een naadschaduw tussen de planken. Daarna de hele bankgroep `transform: rotate(-18deg) skewX(-6deg)`. De letter die achter de plank valt: kop op z-index 1, plank op 2. Lichtval: één `radial-gradient` als *lichtval* op het beton (wit 6% naar 0%). Dit is licht, geen gloed. Als dat het "geen gradiënt"-gevoel raakt: weglaten en het licht alleen via de schaduwrichting suggereren.

### Concept AD-3 · DE ZOOL (stoppen/klikken, voetbal-specifiek, de enige echte foto)

**Kop:** **Twee keer deze grip.** (4 woorden)

**Compositie:**
- **`voetbal_wit_grippatroon_4x5.jpg` vult het frame volledig**, maar ingezoomd op 1,35×: de linkerkuit valt links weg, de opgetilde zool met het driehoekspatroon staat rechts van het midden en vult ±45% van de hoogte. Het goal en de bal blijven onscherp zichtbaar. Dit is het enige beeld uit beide sets met echte diepte, echt licht en een echt lichaam.
- **Het idee:** links, in de ruimte waar de linkerkuit was, staat dezelfde zool nog een keer: een **tweede uitsnede van exact dezelfde zool** (gespiegeld, gemaskeerd langs de sokrand, met de juiste schaduw op het gras), alsof de speler twee rechterbenen heeft. Dat laat de duim stoppen: de klant ziet "dubbel" voordat hij leest. Het is herhaling als grap, in een echte foto.
- Is dat te bizar voor het team? Dan een rustiger alternatief: de foto onveranderd, met **één wit papieren label aan de manchet van de rechtersok** (de A3-vondst, maar nu op een echt been): "2×".
- Kop onderin over het kunstgras, wit, Poppins 900, 140 px. Het gras is donker genoeg voor contrast. Eén woord in volt: **"Twee"**. Volt op donker groen gras kan schuren: eerst testen, anders alles wit.
- Logo-lockup bovenaan op de donkere boomlijn, wit.

**Waarom:** het is het enige echte beeld dat er is, en het toont het product in actie zonder ander merk. De meeste BF-ads in de feed zijn packshots, dus een echte foto valt op.
**Beperking:** voetbal-only. Zet hem in een voetbal-adset, niet als algemene ad.

**Bouw:** `img` met `object-fit: cover; object-position: 62% 55%; transform: scale(1.35)`. De verdubbeling: dezelfde foto nogmaals in een div met `clip-path: path(...)` langs de sokcontour (handmatig getekend in SVG, ±40 punten), `transform: scaleX(-1) translateX(...)`. Onder de voet een zachte ellips als contactschaduw op het gras (`filter: blur(18px)`, zwart 35%). Resolutie: 1080 → 2160 is 2× opschalen. Render daarom op **1x (1080×1350)** en lever dat zo aan; Meta toont het toch op die maat. Of laat het team de originele RAW aanleveren.

## 4. Top 3 van alle ideeën

1. **B4 Wasmachine, opnieuw gebouwd op een echte ondergrond.** Het sterkste herkenningsidee van beide sets en het beste voor een gevoelsad. Visuele fix: geen grijze schim, maar **één sok op een wit laken of op de rand van een wasmand, met ernaast de lege afdruk** (een licht ingedrukte plek in de stof, alleen schaduw), "Kwijt." weg. Het gemis moet je zien, niet lezen.
2. **AD-1 De doos (met B3's "Expres"-toon).** Het combineert het denkniveau van B (wederkerigheid, de doorgehaalde 1) met A's vakmanschap (fysiek papier) en voegt de ontbrekende ondergrond toe. Het is ook de sterkste kopen/klikken-ad, omdat de pakbon het aanbod letterlijk uitschrijft.
3. **B2 Zoek de verschillen, maar als gedrukte puzzel.** De open lus is psychologisch de sterkste stopper. Bouw hem als een **uitgescheurde krantenpagina met puzzelrubriek** (ruw krantenpapier #EAE8E5 met ruis, kolommen, de twee foto's in rasterdruk-look via `filter: grayscale(1) contrast(1.2)`, een potloodcirkel die níets omcirkelt). Dan wordt een leeg formulier een object met humor.

Afvallers: **A2 Teamregels** (blijft een slide) en **B6 3 = 6** (sterke pointe, maar het beeld is alleen typografie op zwart. Hooguit als derde kopen-ad, met de som geschreven op een **whiteboard/tactiekbord** in de kleedkamer, als die stijl gekozen wordt).

## Template versus studio (samenvatting voor het team)

| Template | Studio |
|---|---|
| Vlak #111 van rand tot rand | Een plek: doos, bank, veld, laken |
| Product gecentreerd met marge | Product afgesneden door de frame-rand |
| Drop-shadow zonder richting | Eén lichtbron, contact- plus slagschaduw |
| Kop 80 px, body 30 px | Kop 200+ px óf drukwerk op het object |
| 6 identieke klonen op een rij | Herhaling met hoek, overlap en diepte |
| Idee staat in de tekst | Idee staat in het object (doorgehaalde 1, lege plek) |
| Elke ad dezelfde opbouw | Zes verschillende ondergronden en temperaturen |

> Map: [[04 Social Agent — Index]]
