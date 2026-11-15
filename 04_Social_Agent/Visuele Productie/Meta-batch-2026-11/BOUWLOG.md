# Bouwlog Meta-batch november 2026

Stand: 10 november 2026. Gebouwd volgens `spec.json` (leidend) en `CREATIEVE-RICHTING.md`. Niets gepubliceerd of geüpload, niets buiten deze map gewijzigd, geen AI-beeld van product of personen.

## Wat er is gebouwd

- `html/ad.html`: één pagina die per `?ad=<id>&f=4x5|9x16` precies één ad rendert op 1080x1350 of 1080x1920. Alle tekst is echte tekst uit spec.json, fonts via `@font-face` uit `../fonts/`, kleuren als `--hi-*`-variabelen. De chevron in de pill en het quoteteken zijn getekende SVG. De kop heeft autofit (stappen van 2 px tot minimaal 88 px, meting via de breedte van het tekstblok); de uiteindelijke grootte staat in `data-kopsize` op het ad-element en in de console. De pagina schrijft ook een controlerapport (kopgroottes, regelaantallen, safe zone, overlap van tekstvakken, ink-posities) dat `render.py` uitleest.
- `html/prep_foto.py`: maakt de vrijstaande zwarte sok en de afgeleide maten in `bron/foto/afgeleid/`.
- `html/render.py`: rendert alle 16 naar `png/<id>_<formaat>.png` met headless Chrome en controleert met PIL de afmetingen (alle 16 exact 1080x1350 of 1080x1920). Het controlerapport staat in `html/render_rapport.json`. `--alt` rendert `voetbal_probleem` met de oorspronkelijke foto naar `png/alternatief/` (alleen ter beoordeling, niet voor gebruik).
- `html/contactsheet.py`: maakt `png/overzicht.jpg`.
- Autofit: geen enkele kop hoefde te krimpen. Alle koppen zijn op de spec-grootte gebleven (92, 100/88, 108, 96/92 bij voetbal; 96, 100/96, 118/112, 96/92 bij rugby, telkens 4:5 / 9:16).

## Per ad: foto en bewerking

| Ad | Foto | Bewerking |
|---|---|---|
| voetbal_probleem 4:5 en 9:16 | `voetbal_wit_grippatroon_4x5.jpg` (fallback uit de spec, zie afwijkingen) | 4:5 schaal 1,25, uitsnede x 100 en y 700, plaat 1080x960; 9:16 schaal 1,2, uitsnede x 60 en y 490, plaat 1080x1152; lineaire fade naar #0A0A0A volgens spec |
| voetbal_klantwoord | `voetbal_wit_grippatroon.jpg` | schaal 0,84375 (1080x772); 4:5 uitsnede y 80 tot 680 op y 0; 9:16 uitsnede y 100 tot 640 op y 250; harde randen, geen fade |
| voetbal_aanbod | `voetbal_wit_grippatroon_4x5.jpg` | ware grootte, op y -150; fade 880 (860 in 9:16) tot 1200 |
| voetbal_vergelijking | `voetbal_zwart_trap.jpg` | alleen de strook y 706 tot 1142, schaal 0,9457 naar 1080x412; fade over 82 px (80 px in 9:16) vanaf de bovenrand |
| rugby (alle 8) | `packshot_2-0_zwart_achter.png` | vrijstaand gemaakt (zie hieronder), per ad exact op de gevraagde hoogte gesampled met LANCZOS (800, 610, 520, 280, 640, 470, 300, 170 px), contactschaduw als ovaal #0A0A0A 18% |

**Vrijstaande sok.** Flood fill vanaf de vier hoeken op luminantie met tolerantie 12, rand 2 px verzacht: in de randband komt de dekking uit de donkerte van het pixel en de kleur wordt zwart, zodat er op off-white geen witte franje staat. De witte gripdriehoeken, het embleem en het woord HÏ GRIP blijven staan. Ingezoomd gecontroleerd op rood en off-white: embleem en bovenrand intact, randen schoon. Het product is niet aangepast, alleen vrijgemaakt en geschaald. Het 3-pack-beeld van Bol (rood label) en de witte multipacks zijn niet gebruikt, dus het label hoefde niet weggemaskeerd.

## Afwijkingen van de spec, met reden

1. **voetbal_probleem gebruikt de fallbackfoto, niet `voetbal_wit_trap.jpg`.** De trapfoto toont de drie strepen van een ander merk groot en scherp op de zool van de geheven schoen (en klein COPA). De opdracht zegt dan: fallback uit de spec. Gevolg: er zijn geen noppen in beeld (kop zegt 'JE NOPPEN PAKKEN'; beeld toont de zool met siliconen gripzones) en de foto is dezelfde shoot als voetbal_aanbod. Ik heb daarom een andere, strakkere uitsnede gekozen (kuiten tot voeten, schaal 1,25 en 1,2) zodat probleem en aanbod verschillen. Ter beoordeling staat de variant volgens de oorspronkelijke spec in `png/alternatief/` (zelfde layout, trapfoto zoals in de spec, met de strepen zichtbaar).
2. **Autofit van `voetbal_vergelijking` en andere koppen**: niet nodig, zie boven.
3. **Letter-spacing rugbykoppen -0,02em in plaats van -0,04em.** Bij -0,04em lopen 'F' en 'T' in SCHUIFT en de 'N' en dubbele punt in GRIPSOKKEN: samen in elkaar (kop leesbaar op duimformaat). Voetbalkoppen blijven op -0,04em met een woordafstand van +0,08em, omdat de spatie anders bijna dichtvalt ('JENOPPEN'). Het reuzenwoord RUGBY staat op -0,02em.
4. **Sub-teksten met `text-wrap: balance`** (alleen waar de tekst op de maximale breedte afbreekt), zodat er geen weduwe-regel ontstaat (bijv. 'schoen.' alleen op de tweede regel). Maximale breedte en aantal regels van de spec zijn aangehouden.
5. **Rode streep in rugby_vergelijking onder de komma.** De komma van '1,17' hangt tot ongeveer 32 px onder de basislijn en sneed de streep op y 520 tot 528. De streep staat nu direct onder de komma (4:5 op y 538 tot 546, 9:16 evenredig) en de labels staan 14 px daaronder (4:5 top 560 in plaats van 548, 9:16 top 698 in plaats van 686). Breedte van de streep is de inktbreedte van het cijfer, zoals in de spec.
6. **Italic 400 en 600 ontbraken in `fonts\`.** Alleen Black Italic stond erin. Ik heb Poppins-Italic.ttf en Poppins-SemiBoldItalic.ttf (zelfde familie, OFL) naar `fonts\` gekopieerd uit de lokale fontinstallatie, zodat quote-regels echt italic zijn in plaats van een schuin gezette variant. Dit is de enige keer dat iets uit buiten de map in de map is gekomen; er is niets buiten de map gewijzigd.
7. **Quoteteken getekend.** In de vault is geen bestand van het merk-quoteteken te vinden (alleen de omschrijving 'blok met gebogen staart' in Design Elementen). Ik heb een paar blokken met gebogen staart als SVG getekend volgens die omschrijving, niet schuin en niet vervormd (gelijke schaal in de breedte, aanpassing naar 110x90, 100x82, 120x100 en 100x84 volgt de spec en is dus licht afwijkend in verhouding). Vervang door het echte merkmateriaal als dat er is.
8. **Vloer van de packshot.** De spec noemt tolerantie ongeveer 12. Voor de zachte vloerschaduw onder de zool (waarden rond 215 tot 250) gebruik ik onder y 1050 van de packshot een ruimere tolerantie (45), anders blijft er een grijswitte vlek onder de sok. Boven y 1050 geldt 12, omdat een ruimere waarde via het embleem tegen de sokrand lekt en dat aanvreet.
9. **Contactschaduw geschaald.** De vervaging is 30 px bij sokken vanaf 640 px hoog en loopt terug naar 8 px bij de kleinste (170 px). Bij een kleine sok maakt 30 px de schaduw een nevel.
10. **Veldlijn en hairlines** zijn 2 px elementen op de gegeven y als bovenkant; de vergelijkingsfade in 4:5 loopt 82 px (938 tot 1020) en in 9:16 80 px zoals de spec zegt.

## Controle per ad (alle PNG's bekeken)

Tekst identiek aan spec.json, niets afgesneden of overlappend (controlerapport meldde geen waarschuwingen: geen tekst buiten het canvas, buiten de 9:16-safe-zone, geen overlap van tekstvakken, geen overschrijding van het maximum aantal regels), Poppins overal geladen (geen fallback), 9:16 met tekst en product tussen y 270 en 1250 (de foto's in voetbal lopen daarbuiten door, zoals de spec voorschrijft), CTA-pill zwart/wit met getekende chevron, geen accent-gevulde knop, geen Trustpilot-groen, geen badges of tickets, HÏ met trema correct, randen van de vrijstaande sokken schoon. Per familie: de vier voetbal-ads delen donkere basis, rechtopstaande 900-koppen en één volt-accent; de vier rugby-ads delen off-white, italic 900-koppen, zwarte sok en één rood accent. Dat is zichtbaar op `png/overzicht.jpg`.

## Wat een mens nog moet beoordelen

- **Merken van derden in beeld.** voetbal_probleem gebruikt de fallbackfoto zonder dat. voetbal_vergelijking gebruikt de strook onder de schoen met PREDATOR: het woord valt boven de strook en is in de fade weg, maar op de standschoen staat klein een logo van een ander merk (groen), en op de bal staat een klein woord. Eigenaar moet akkoord geven (staat ook in de spec).
- **Keuze voetbal_probleem:** fallbackfoto (geen noppen, dezelfde shoot als aanbod) of de oorspronkelijke trapfoto (noppen, maar drie strepen). Beide staan klaar.
- **Rugby probleem:** de sok bedekt de letter G van RUGBY (spec: sok vóór het woord, gecentreerd op x 580). Het woord leest als 'RU BY' en wordt door het oog aangevuld. Alternatief binnen de spec bestaat niet; een andere x-positie van de sok is een ontwerpkeuze voor de eigenaar. Het rood is groot: de fallback in de spec is het woord in zwart met alleen 'SCHUIFT.' in rood.
- **De euro-teken in Poppins Black** loopt bij 108 tot 118 px dichtbij het cijfer door de krappe letter-spacing. Leesbaar, maar kijk er op telefoonformaat naar.
- **0,60 in titanium op off-white** (rugby_vergelijking) heeft laag contrast (zoals de spec voorschrijft): bewust als 'achtergrondcijfer', maar controleer op telefoon.
- **Afbeeldingen zijn vergrotingen**: voetbal_probleem 1,25 en 1,2 van de 4x5-foto (1080x1350); controleer de scherpte op telefoon. Op ware grootte (aanbod, klantwoord) is dat niet nodig.
- **9:16 voetbal_vergelijking**: de fotoband heeft een harde onderrand op y 1482 (spec geeft daar geen fade). Ligt in de onderste interface-zone van Reels.
- **Rechten en bewoording**: beide klantwoord-ads vragen toestemming van de reviewers vóór livegang (staat in de spec); de review van juni 2025 staat naast beeld van de 2.0.
- **Kwaliteitscontrole van het quoteteken** tegen het echte merkmateriaal (zie afwijking 7).

> Map: [[04 Social Agent — Index]]
