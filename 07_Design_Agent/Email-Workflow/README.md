---
type: readme
bijgewerkt: 2026-11-17
---

# E-mail-Workflow (Design Agent)

Dit is de lat voor elke HÏ Grip-mail. Hij komt uit de early-access-mails van de HÏ Performance Days, die Lars op 17-11-2026 na 7 rondes goedkeurde ("Super"). Ronde 1 werd afgekeurd als "echt lelijk" en "crimineel" om op te leveren.

**Algemene regel (Lars, 20-11-2026): een e-mail voelt als één geheel.** De secties lopen in elkaar over; zie [[WORKFLOW-Email]] §5 en E15 in [[Leerregels-Email-Design]]. Concepten over familie, referenties, creatieve loop, psychologie en werkafspraak staan als E16 t/m E20 en in [[WORKFLOW-Email]] §6.

**Belangrijk:** dit gaat om het **niveau**, niet om een sjabloon. Kopieer niet elke keer dezelfde opbouw (hero met woord achter de sporter, ticket, dealkaarten, slotbeeld). Neem de werkwijze en de kwaliteitslat over, en kies per mail een eigen idee, eigen beelden en een eigen opbouw.

## Lees in deze volgorde
1. [[Leerregels-Email-Design]]: wat Lars per ronde afkeurde en waarom.
2. [[WORKFLOW-Email]]: wat een mail premium maakt, de werkwijze en de kwaliteitspoort. In de poort zit ook een eigenheidscheck: een kopie van de voorbeelden wordt afgekeurd.
3. `Voorbeelden/`: de goedgekeurde mails (desktop en mobiel). Alleen ter vergelijking, niet om na te tekenen.
4. `Tools/`: de beeld- en HTML-code van het voorbeeld (Python + Pillow), om technieken te hergebruiken.

## Inhoud
- `Tools/beeld_basis.py`: herbruikbare beeldtechnieken, waaronder:
  - uitsnede-afwerking (`refine`), spotlight, achterlicht en schaduw;
  - grippatroon-raster, korrel en de randen naar zwart (alleen op de achtergrondlaag);
  - Volt-sticker, ronde badge, barcode en tekst met tracking;
  - huisgrade voor foto's.
- `Tools/beeld_voorbeeld_performance_days.py`: hoe die technieken samen beelden worden. Daaronder:
  - `outlined()` voor de Volt-rand rond sporters;
  - een hero met de kop achter en het aanbod vóór de sporter;
  - productkaarten met packshots;
  - het slotbeeld.
- `Tools/html_voorbeeld_performance_days.py`: het HTML-skelet voor e-mail:
  - tabellen van 600px met inline CSS, VML-knop voor Outlook en dark-mode-hooks;
  - mobiele media queries, een grote witte knop en een vooringevuld e-mailveld.
- `Fonts/`: Poppins Black Italic, Black en SemiBold, met `OFL.txt`.
- Werkmap: zet `EMAIL_WORK` op een map buiten de vault met `src/` (bronfoto's), `src/cut/` (uitsneden PNG's) en `assets/` (uitvoer). Uitsnijden gaat met `rembg` (model `isnet-general-use`) in een eigen Python-omgeving.

## Regels voor deze map
- Geen computerpaden, geen tokens en geen bronfoto's of uitsneden in de vault. Foto's staan op de gedeelde Drive of in Shopify Files.
- Na elke goedgekeurde of afgekeurde ronde [[Leerregels-Email-Design]] bijwerken. Een nieuwe goedgekeurde mail gaat in `Voorbeelden/`, maximaal ~300 KB per beeld.
- Niets versturen of uploaden zonder akkoord. Lars of Team HÏ Grip verstuurt.

> Map: [[07 Design Agent — Index]]
