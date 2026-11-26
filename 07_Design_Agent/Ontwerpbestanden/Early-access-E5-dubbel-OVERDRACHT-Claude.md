---
type: overdracht
gebied: design-agent
datum: 2026-11-20
status: overdracht voor Claude (afmaken E5), niet verzonden
---

# Overdracht E5 'Dubbel': afmaken met Claude

Doel (Lars, 20-11-2026): "dit lijkt al heel veel meer ergens op, ik zie potentie, maak hem af met Claude." Dit document zegt hoe, wat en waarom E5 werkt en wat er nog open staat. Bij de volgende mails geldt E5 als standaard (zie skill higrip-email-design-build).

## Waar staat wat
- Mail, assets, screenshots, scripts: map `mail-e5-dubbel` onder Downloads > HI-Grip-early-access-mails (`mail-e5-dubbel.html`, `assets/`, `shots/`, `bron/e5_assets.py`, `bron/e5_build.py`, `bron/e5_shot.py`).
- Uitgeknipte atleten en sokken: `src/cut/` in dezelfde Downloads-map (sport-voetbal-2000, sp-tennis-wit-1179, pack-wit, pack-zwart).
- Render met `py -3.12` (Playwright en Chrome); `python` (3.14) heeft geen Playwright.
- Voorstel met cijfers en aannames: [[Early-access-E5-dubbel-VOORSTEL]].

## Hoe het gebouwd is
1. `e5_assets.py` tekent hero, slot en dealtegels in Pillow: zwart met grippatroon-raster, kop als beeld (Poppins Black Italic, handmatige kerning en extra woordspatie), uitgeknipte sporter met dunne Volt-outline en een naar links uitlopende Volt-trail, sokken licht gekanteld met outline en schaduw.
2. `e5_build.py` bouwt de HTML (tabellen, live tekst voor ticket, stappen, dealtekst, knoppen, footer; media-query voor 390 px).
3. `e5_shot.py` rendert desktop (pagina 800 px, mail 600 px) en mobiel (390 px) op 2x.

## Waarom het werkt
Zie het blok 'Waarom E5 werkt' in de skill higrip-email-design-build: één idee gekoppeld aan het aanbod (1+1 is atleet met echo), gigantische kop in de eerste seconde, één zwarte wereld met alleen wit en Volt, één wit ticket en één witte knop als focus, echte inhoud (code, stappen, dealtiers, prijzen), ritme van zware beeldranden met compacte info ertussen, nette typografie, mobiel zonder breuken.

## Wat Claude nog moet afmaken (volgorde van impact)
1. Hero-uitsnede premium maken: echte segmentatie (bijvoorbeeld rembg of SAM) in plaats van de huidige uitsnede, outline dunner of weg, geen korrel bij hoofd en rug, bal afmaken of weglaten.
2. Dealkaarten: op desktop vullen (twee echte kolommen, foto tot aan de kaartrand), prijzen dominant, één schaal.
3. Slotbeeld: zachte randen of doorlopend raster zodat de rechthoek niet zichtbaar is; sokken scherp uitgeknipt.
4. Ticket: gewicht rechts (groter barcode of perforatie), bijschrift met ruimte.
5. Clients testen: Outlook (VML-fallback voor achtergrond/koppen), Gmail (donkere modus), Apple Mail, beelden-uit.
6. Beeldgewicht onder 600 KB (nu ongeveer 0,8 MB).
7. Merklogo's op schoenen en sokken op 100% controleren.
8. Aannames bevestigen door Lars: deal (1+1 / 3+3 / 5+5), prijzen, datum (25 november) en "eerder" (twee of vier dagen), merge-tags, knoplink, bedrijfsgegevens, toestemming persoon op de foto.

## Regels om te bewaren
Leerregels E1-E20 in [[Leerregels-Email-Design]]: wit knop nooit Volt, geen eyebrows, max 5 secties, ander beeld per sectie, uitsneden zonder halo, echte packshots, mobiel 390 px, geen verzonnen claims.

> Map: [[07 Design Agent — Index]]
