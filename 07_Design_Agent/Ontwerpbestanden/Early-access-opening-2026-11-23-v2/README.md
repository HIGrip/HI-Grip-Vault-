---
titel: Early-access openingsmail 23-11-2026, herontwerp v2
status: concept, niets verstuurd
---

# Early-access openingsmail, v2 (herontwerp)

v1 (map Early-access-opening-2026-11-23) blijft staan als negatief voorbeeld. Copy en feiten komen uit de brief in 06_Website_Agent/E-mail Marketing/2026-11-23-early-access-opening-brief.md. Nieuwe tekst is niet verzonnen; alleen de woorden in de kop 'Jij ziet het eerder dan de rest' en de sluitregel 'Veel plezier, en tot op het veld. Team HÏ Grip' staan zo ook in de brief of zijn voorstel (zie onder: voorstellen).

## Gekozen: concept A, één zwarte wereld
Bestanden: `mail.html`, `assets/`, `preview/desktop-640.png`, `preview/mobiel-375.png`. Alternatieven (zelfde copy, zelfde bouwstenen): `alternatief-B-wit-anker/` (zwart met foto achter de kop, witte kaart waar het packshot de rand doorbreekt) en `alternatief-C-licht/` (papierkleur, zwarte codekaart).

Waarom A: één doorlopende achtergrond (#0A0A0A), geen kaartranden of vlakwisselingen om de aandacht te verdelen. De foto lost aan boven- en onderrand op in dezelfde halftone-stippen; die stippen zijn de enige handtekening, en ze zijn de overgang (de foto passeert de sectiegrens). Alleen de kop, de code en de witte knop zijn wit op zwart; alles daaromheen is grijs en klein. B heeft de ene wow-beweging (packshot over de kaartrand) maar twee zwaartepunten (foto en witte kaart) die om de eerste blik vechten. C is rustig en premium, maar de zwarte codekaart staat onder de foto los van het beeld en de lichte basis is minder 'als eerste binnen' dan een donkere wereld.

## Stap 1, inspiratie (kort)
Kijkwerk gedaan in de eerdere sessie van deze kaart (vision, daarna voor de voorbeelden die ertoe deden bevestigd). Per referentie wat ik leen, als principe:
1. NEW SUBSCRIBERS #1 (Lars): één kop, één beeld, één actie; accentkleur als punt, niet als vlak. Leen: één zwaartepunt per scherm.
2. 1 JAAR OFFICIEEL (Lars): één groot beeld bovenaan, de kop erdirect onder, één achtergrondkleur door de hele mail. Leen: geen vlakwissels.
3. RESULTAAT TELT (Lars): weinig tekst, sterke contrastknop. Leen: knop als zwart/wit pill, niets ernaast.
4. TM EINDE VAN DE WEEK (Lars): grote kop, hoog contrast. Leen: schaal voor hiërarchie. Niet: urgentietoon (geen nepurgentie).
5. DISCOUNT REMINDER #1 (Lars): code en knop dicht bij elkaar. Leen: code, voorwaarde en knop in één blok.
6. Ontwerp-analyse.md (mailblok) en Leerregels-Email-Design: E-regels over aandacht en één geheel; hier toegepast als toets.
Niet gedaan: de TikTok-lessen-notitie is niet apart opnieuw doorgelezen in deze ronde; popular-web-designs (Apple, Nike-achtige premium ritme in het skill-materiaal) en design-md zijn geladen als werkwijze, niet als stijlbron. De taste-skills design-taste-frontend en high-end-visual-design staan niet in dit profiel; niets geïnstalleerd.

## Ontwerpkeuzes
- Kopschaal: één kop 76/72 px (mobiel 50/48), één sub-kop 28/32, body 17/27, kleine tekst 12 tot 15. Poppins Black Italic voor koppen, Regular/SemiBold voor tekst. Geen eyebrows.
- Foto's: 2 (tennisser in actie, productdetail), zelfde grading (ontverzadigd, lagere helderheid, zelfde halftone-cel van 10 px en dezelfde ruis), brede crops van 1280 px. Beide uit de gedeelde Drive, originelen ongewijzigd.
- Accent: alleen als punt achter de koppen (#CCFF00). Knop: witte pill met zwart chevron-bolletje, nooit accentkleur.
- Live tekst: kop, code, percentage, einddatum, knop en alle tekst. Geen tekst in beeld.
- Mailveilig: tabellen, bgcolor-fallback, VML-knop voor Outlook, preheader, `hg-bg` hook met `[data-ogsb]` voor Gmail dark mode, max 5 secties (hero, code, detail, afsluiting met bewijs, footer), mobiele CSS in één blok.

## Aandachtstest (verkleind tot 400 px hoogte en geblurd, `preview/aandachtstest-A.png`)
Vision gaf bij 3 vragen drie verschillende antwoorden en is hier alleen signaal. Zelf uitgevoerde grove saliency-meting (contrast tegen omgeving, per band van 200 px, script `bron/`): hoogste gewicht ligt in het code-/knopblok (17%), daarna de kop (13,7%), daarna de foto-overgangen (8 tot 9%). Gewenste volgorde is kop, code, knop. Meting: code/knop wint van de kop. Gevolg: de kop wint niet duidelijk eerst. Dat is een zwak punt, zie onder. Blur-lezing van mij: 1 kop en foto als één geheel boven, 2 wit blok met code, 3 witte pill.

## Kritiekrondes
1. Ronde 1: kop liep woorden aan elkaar (JIJBENTER) en de halftone-rand was te hard met blauwe dots. Gemeten woordgaten nu 10 tot 16 px. Foto donkerder en minder verzadigd, stippen kleiner en tot dichtbij het midden van de foto doorgetrokken.
2. Ronde 2: kop groter (60 naar 76 px), woordspatie; secties C en B naast elkaar gerenderd en bekeken (B: twee zwaartepunten, daarom niet gekozen).
3. Ronde 3: grijze tekst lichter (contrast), code- en knopblok vastgezet. Echte placeholders gerenderd naast teststrings.
Streng oordeel: duidelijk beter dan v1 (één wereld, twee beelden, één knop, geen kaarten). Naast Nike of Gymshark: nog niet; zie zwakke punten.

## Wat ik zelf nog zwak vind
1. De aandachtsvolgorde is niet bewezen: de code-/knopzone weegt in de meting zwaarder dan de kop. Eventueel de code minder zwaar (maat 52 naar 44) of de kop in wit op een rustigere foto-zone.
2. Alleen Chrome-render met Poppins als bestand; echte clients (Gmail, Outlook, Apple Mail), dark mode en de halftone in verkleinde mobiele weergave zijn niet getest. Vision gaf contradicties over de foto (hardloper, tennisser, ontverzadigd of blauw): ik heb de foto zelf niet 100% betrouwbaar kunnen beoordelen; de sporter is nog niet op persoon bevestigd.
3. Het product komt in A niet voor (alleen de sok in het detailbeeld); het packshot zit in alternatief B. Sectie 2 van de brief vraagt een packshot bij de code. Keuze voor Lars.
Ook: ronde 3 was een kleine correctie, geen volledige herziening; 3 concepten zijn gebouwd uit dezelfde bouwstenen, niet drie onafhankelijke ideeën. Het ontbreken van een Design-QA staat open.

## Personen en rechten
Beeld uit gedeelde Drive > Content - HÏ Grip > Sporten > TENNIS > Zwart 2.0: bronbestanden IMG_4074 (hero) en IMG_1437 (detail). Toestemming personen: niet gecontroleerd. Packshot (alternatief B): Productfoto's > PERFORMANCE GRIP SOCKS 2.0, Wit 3-pack.

## Voorstellen
- Kop 'Jij ziet het eerder dan de rest' en sluitregel staan in de brief of zijn voorstel; brief blijft leidend.
- Teksten in de plaatsmarkering [INVUL: ...] staan in `mail.html`; plaatsmarkeringen zijn gestippeld omrand.

## Wat Lars invult
voornaam (SendWILL-veld, niet geraden), kortingscode, percentage of bedrag, einddatum, early-access-moment, link naar de webshop (knop), voorwaarden, extra informatie (1 tot 3 punten), of de code automatisch is toegepast, afzender en bedrijfsgegevens, afmeldlink. Trustpilot 4,6 vlak voor verzending controleren.

## Wat Lars uploadt
`assets/hero.jpg` (227 KB), `assets/detail.jpg` (224 KB), `assets/emblem.png` (5 KB); totaal 456 KB (budget 600 KB). In `mail.html` staat `assets/...` relatief; vervang door de online URL na upload. Alternatief B: 290 KB, C: 547 KB.

## Niet getest
Echte e-mailclients, dark mode (alleen hooks), spamtest, SendWILL-import, het afbreken van de lange plaatsmarkeringen (de code is `nowrap`; bij een lange code controleren op 375 px), Poppins-fallback in Outlook (Arial), VML-knop in Outlook, alt-teksten met SEO-woorden.

## Werkscripts
`bron/` bevat de drie scripts (beeldbouw, html-generator, render). Ze lezen de Drive-kopie, wijzigen geen origineel.

> Map: [[07 Design Agent — Index]]
