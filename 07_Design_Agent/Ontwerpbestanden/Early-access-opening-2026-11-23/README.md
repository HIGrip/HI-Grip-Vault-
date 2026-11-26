---
status: concept
---
# Early-access openingsmail 23-11-2026 (Design)

Concept, niets verstuurd of ingepland. Verzending door Lars via SendWILL op 23-11-2026 12:00. Copy komt uit `06_Website_Agent/E-mail Marketing/2026-11-23-early-access-opening-brief.md`; er is geen tekst verzonnen.

## Gevoel en één idee
Gevoel: je staat op de lijst, dus je komt binnen voordat de deur open gaat; rustig, zwart, zelfverzekerd, zonder druk. Visueel idee: **één doorlopend zwart vlak waaruit de beelden opdoemen**, met één halftone-stippenraster dat uit de tekstzone het product in loopt, en een product dat door de rand van de witte codekaart steekt. Geen blokken met harde randen; geen klok, geen countdown.

## Drie concepten
- **A (gekozen) Zwart veld:** hardloper komt uit het zwart, stippen lopen door naar het pack dat de witte codekaart doorbreekt, padel komt weer uit het zwart. Gekozen omdat het E15 (één geheel) het sterkst invult en de code het enige witte vlak is, dus het belangrijkste moment.
- **B Gastenlijst** (`alternatieven/alt-B-gastenlijst.jpg`): tennisbeeld in zwart-wit, code als toegangsstrook die over de beeldrand loopt. Sterker idee van "toegang", maar de strook vraagt meer tekst op beeld en lijkt snel op een ticket-/evenementmail.
- **C Gripmeting** (`alternatieven/alt-C-gripmeting.jpg`): macro van het gripdessin vult het scherm met één regel. Rustig en product-eerst, maar er staat geen sporter in en dat past minder bij "jij bent erbij".

Variatietest t.o.v. de zes concepten van 17-11: die lopen als gestapelde blokken met een beeld per blok; hier loopt één achtergrond door alle secties en het product doorbreekt de kaartrand. Herkenningstest: zwart, Poppins Black Italic, volt-punt, witte pill-knop, wel dezelfde familie als de eigen mails en Performance Days; dit is niet getoetst naast de mails zelf door een tweede persoon.

## Secties (5)
1. Hero (`hero.jpg`): hardloper uit zwart, kop "JIJ BENT ER ALS EERSTE BIJ." met het punt in volt, intro, witte pill-knop met chevron, stippenveld begint.
2. Jouw code (`scene.jpg` + live tekst): stippen groeien naar het witte 3-pack dat door de rand van de witte kaart steekt; code, korting, einddatum, voorwaarden als tekst.
3. Eerder toegang (`s3.jpg`): padel uit zwart, plaats voor de extra info en de afsluiter.
4. Bewijs (`macro.jpg`): één regel, 3500+ sporters en Trustpilot 4,6 (beide uit Feiten; Trustpilot-cijfer altijd met bron).
5. Footer.

## Kritiekrondes (eigen beoordeling, bekeken met vision_analyze)
- **Ronde 1:** de eerste kop had te krap woordspatiëring, het hardloperbeeld was te laag gecropt (alleen schoen), het pack had te weinig schaduw voor diepte. Kop tracking gecorrigeerd, crop op de loper aangepast, schaduw sterker.
- **Ronde 2:** gat tussen knop en kaart was te groot en de zwarte leegte onder de knop te saai; ruimte verkleind (150 naar 96 px) zodat stippen eerder beginnen. Code-stand-in (10 tekens) getest op 375 px: past op één regel (preview `*-standin`).
- **Wat de beeldbeoordeling nog opleverde en niet is opgelost:** het geheel blijft voor een kritische kijker nog deels gestapeld; sectie 3 (padel) is de zwakste en voelt los van het product; de witte kaart is een bewuste harde toon (code = hoogtepunt), maar is het enige witte vlak. Let op: vision-oordelen waren deels onbetrouwbaar (verwarde padel met tennis), dus ik heb ze alleen als signaal gebruikt.

## Wat ik zelf nog zwak vind
1. Sectie 3: beeld zonder product, geen overlappend element; E15 daar alleen via het zwart-verloop.
2. Eén kop in vier secties in hetzelfde Black Italic: kan eentonig worden.
3. Achtergrond met `background-image` (stippenveld sectie 1, macro sectie 4) valt in Outlook weg naar effen zwart; de koppen zitten in de afbeeldingen, dus zonder beelden (standaard geblokkeerd in veel clients) ontbreken kop en logo. De alt-tekst op de hero draagt de kop.

## Bestanden (gewicht, 2x retina, 1280 px breed)
hero.jpg 312 KB · scene.jpg 218 KB · s3.jpg 301 KB · macro.jpg 51 KB · field-top.jpg 59 KB · emblem.png 7 KB (131 px, 33 px getoond). Totaal ongeveer 950 KB; `scene-bg.jpg` (196 KB) is tussenproduct en niet nodig voor de mail. Rebuild: `tools/build_assets.py`, preview: `tools/render.py` (Playwright, alleen een preview, geen e-mailclient).

## Personen en beeld (toestemming niet gecontroleerd, aanname)
Alle uit gedeelde Drive > Content - HÏ Grip:
- Hardloper (hero): Sporten/HARDLOPEN/Zwart 2.0/IMG_3950.JPG
- Padelspeler (sectie 3): Sporten/PADEL/Wit 1.0/IMG_1646.JPG
- Product: Productfoto's/PERFORMANCE GRIP SOCKS 2.0/ (Wit 3-pack productfoto ZA.png, Zwart voorkant.jpg)
- Alternatief B: Sporten/TENNIS/Wit 2.0/IMG_4148.JPG
Lars bevestigt dat deze personen e-mailgebruik hebben toegestaan.

## Wat Lars invult
Alle gestippeld omrande `[INVUL: ...]`: voornaam (SendWILL-merge-tag, niet geraden), early-access-moment, knoplink (twee keer in de HTML: knop en Outlook-versie), kortingscode, korting, einddatum, automatisch toepassen ja/nee, voorwaarden, extra info (sectie 3), afzender, bedrijfsgegevens, afmeldlink. Verwijder de `.hg-fill`-stijl niet vooraf; hij verdwijnt zodra de plaatsmarkering weg is. Preheader staat op keuze 1 uit de brief.

## Wat Lars uploadt
Alle bestanden in `assets/` (behalve `scene-bg.jpg`) moeten online gehost staan (SendWILL-bibliotheek of openbare URL); pas daarna de `src="assets/..."` en `background=...` paden in `mail.html` vervangen. Op de gedeelde Drive: `assets/` en de twee previews.

## Niet getest
Echte clients (Gmail, Outlook, Apple Mail), dark-mode in de praktijk, spamtest, SendWILL-import, linkcontrole. Poppins wordt geladen via Google Fonts en valt terug op Arial. Preview is een Chrome-render.

> Map: [[07 Design Agent — Index]]
