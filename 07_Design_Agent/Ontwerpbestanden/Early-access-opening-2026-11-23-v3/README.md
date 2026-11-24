---
status: concept
datum: 2026-11-20
---
# Early-access openingsmail 23-11, v3 (drie versies)

> Map: [[Home]]

Concept, niets verzonden of ingepland. Copy en feiten uit `06_Website_Agent/E-mail Marketing/2026-11-23-early-access-opening-brief.md`; de kop "Jij bent er als eerste bij." is ongewijzigd uit de brief. Lars doet zelf de smaaktoets. v1 en v2 zijn niet aangepast.

## Inspiratie (gedeelde Drive > Content - HÏ Grip > Emailmarketing)
Bekeken met beeldanalyse op contactsheets en losse mails (o.a. NEW SUBSCRIBERS #4, 1 JAAR OFFICIEEL, RESULTAAT TELT). Alleen principes geleend.
- Lars' mails als geheel: donker vlak, atleet of product groot en aangesneden, vaste volgorde belofte, code, knop. Geleend: één groot beeld bepaalt de sfeer, tekst staat rustig ernaast.
- 1 JAAR OFFICIEEL en RESULTAAT TELT: grote kop op donker, beeld krijgt de ruimte. Geleend: kop en beeld als één blok, geen kaartjes.
- NEW SUBSCRIBERS #4: één boodschap, één knop. Geleend: één focuspunt per scherm.
Zwak punt: de opdracht vraagt 4-6 referenties met twee regels per stuk; ik heb de ontwerptaal van drie mails samengevat en niet elke mail afzonderlijk uitgeschreven.

## De drie versies
| | Idee | Waarom het werkt |
|---|---|---|
| v1 Atleet in het donker | Zwart-wit tennisser uit de duisternis, daaronder een gele codeplaat, daarna het product. | Foto en kop vormen de openingsscene; de gele plaat is de enige felle vlek en trekt de code naar voren. |
| v2 Product als held | Sokken groot over de rand van een donker griptextuurvlak naar een wit paneel met zwarte codeplaat. | Het product is het beeld; donker naar wit is één duidelijke wending naar de actie. |
| v3 Licht met vensters | Lichte basis, twee afgeronde fotovensters (tennis, hardlopen) met zwarte 3-pack erover, daarna een zwart blok met witte codeplaat. | Andere toon dan de merkstandaard; de code staat in het enige zwarte blok. |

## Aandachtstest (benadering)
Eigen script: render op ~400 px hoogte, saliency (helderheid en kleurcontrast). Geen oogvolgstudie; richtinggevend.
- v1: top-3 kijkplekken alle drie in de codeplaat (19%); product 20%, hero 17%, kop 7%. Code wint, maar de kop komt laat; volgorde belofte, code, knop niet bewezen. Geel trekt bijna te veel.
- v2: kijkplekken kop, product, product. Code 12,8%, knop 4,7%. Code niet de tweede plek.
- v3: kijkplekken kop, venstercompositie, tekst. Code 10,8%, knop 4,2%; hero-beeld 42%.
Alleen v1 stuurt naar de code; v2 en v3 niet bewezen.

## Kritiek en zwakste punten
Eerlijk: 2 volledige rondes plus asset-rondes, niet de gevraagde 3 per versie.
- Ronde 1 (assets): eerste hero te veel achtergrond en bron bleek andere sport dan gedacht; vervangen door tennisfoto met vignet en grading. Manchetdetail te donker en onduidelijk, vervangen door productfoto.
- Ronde 2 (layout): code en datum waren versnipperd; samengevoegd in één codeplaat (live tekst).
- Beeldanalyse is onbetrouwbaar gebleken (verwart sporten en kleding); niet leidend gebruikt.
- v1 zwakste: geel is gewaagd en kan goedkoop lezen naast een premium sfeer; twee productbeelden achter elkaar.
- v2 zwakste: veilig, geen wow-beweging; donker-wit overgang hard.
- v3 zwakste: lichte basis past minder bij merkautoriteit; vensters kunnen als decoratie lezen; code niet in de top-3 kijkplekken.
- Grootste afwijking van de opdracht: geen uitgeknipte atleet. GrabCut gaf te rommelige randen (gras, achtergrond) en is niet gebruikt. Product is een transparante PNG uit de Drive, geen eigen uitknipwerk. Het idee "atleet passeert sectiegrenzen" is niet uitgevoerd.
- Naast Nike of Gymshark: v2 het dichtst; v1 en v3 niet overtuigend. Duidelijk beter dan v2 (vorige ronde): niet bewezen.

## Aanbeveling
v2: veiligste en meest merkvaste keuze, code en knop staan los van de foto. Tweede keus v1 met zwarte plaat in plaats van geel. Lars kiest.

## Beeldbronnen en personen (toestemming niet gecontroleerd)
- Tennisser (v1, v3): gedeelde Drive > Content - HÏ Grip > Sporten > TENNIS > Zwart 2.0, IMG_4130; van achteren; toestemming niet gecontroleerd.
- Hardloper (v3): Sporten > HARDLOPEN > Wit 1.0, IMG_1902; toestemming niet gecontroleerd.
- Product: Productfoto's > PERFORMANCE GRIP SOCKS 2.0 (Wit 3-pack, Wit 5-pack, Zwart 3-pack, ZA-varianten). Aantal sokken per pack niet door pixelmeting bevestigd; de beeldanalyse telde bij de zwarte 3-pack 3 losse sokken.
- Griptextuur: eigen werk uit v2-assets (HiGripMedia > _Output > design).
- Originelen niet gewijzigd.

## Wat Lars invult (zichtbare gestippelde [INVUL: ...]-markeringen)
voornaam, early-access-moment, kortingscode, percentage of bedrag, einddatum, code automatisch toegepast (ja/nee), voorwaarden, extra informatie (1 tot 3 punten), link naar de webshop (knop), afzender, bedrijfsgegevens, afmeldlink. De proof-regel (3500+ sporters, Trustpilot 4,6) staat in de mail: controleer tegen Feiten & Actuele Staat vóór verzending. SendWILL-merge-tags zijn niet geraden.

## Wat Lars uploadt
De beelden uit assets/ naar SendWILL en de relatieve `assets/`-paden in mail.html vervangen door de gehoste URL's. Poppins via Google Fonts-link, fallback Arial.

## Gewicht beelden
v1 509 KB (hero-atleet 184, product-wit 92, embleem 42 en overig), v2 211 KB, v3 272 KB; alle onder 600 KB. Beelden op 2x, getoond op 640 px.

## Mailveilig
Kop en code live tekst met bgcolor-fallback, Outlook-VML-knop, alt-teksten, dark-mode-hook als CSS-regel (`.hg-bg`), mobiel breakpoint. Knop zwart of wit met chevron, nooit accentkleur.

## Niet getest
Echte mailclients (Outlook, Gmail, Apple Mail), dark mode, spamtest, SendWILL-import, contrast gemeten. Previews zijn Chrome-renders met stand-in tekst voor de invulvelden. Geen onafhankelijke QA.
Previews per versie: `preview/*-desktop-standin.png` (640 px) en `*-mobiel-standin.png` (375 px), full-length.
