---
type: archief
status: archief
---

# QA-lijst D1-D13 (vóór Design DNA)

Kopie van sectie 5 uit Agents Design Agent op 19-11-2026; origineel ongewijzigd.

## 5. QA

De lijst D1 t/m D13 is **vastgesteld en geldend** (besluit Lars, 16-11-2026: er hoeft hierover niets meer beslist te worden). Afgeleid van de Website-QA (W1, W2, W5, W9, W13) en Content-QA (C8, C10, C12, C13). Toetsing door een onafhankelijk profiel, niet door de maker (zelfde profiel als maker is geen onafhankelijke QA). Bij ads: aanvullend de meetregels R1–R16 (`07_Design_Agent/Ads-Workflow/`, WORKFLOW §3 en `Tools/check.py`) en `Leerregels-Ads-Design.md`; bij D5 geldt: een echte review letterlijk met bron, nooit een placeholder. Verdict, ernst en correctieronden volgens [[Toetsregels]].

| # | Controle | Bewijs | Bij falen |
|---|---|---|---|
| D1 | **Principes.** Alle vijf designprincipes in [[Design Elementen]] zijn herkenbaar aanwezig | Per principe: de uitwerking naast de bronregel in 07_Design_Agent/ gelegd, met de zichtbare plek | Belangrijk |
| D2 | **Merkregels.** Kleur-, font-, logo-, raster- en iconenregels uit 07_Design_Agent/ gevolgd; geen afwijking zonder besluit | Ontwerp naast de bronpagina | Blokkerend |
| D3 | **Kanaalvertaling.** Formaat, marges en sjabloon kloppen voor het kanaal; zelfde stijl als de andere kanalen | Formaat, en uitwerking naast de bronregel in 07_Design_Agent/ (referentiemap is nog leeg, dus nog geen vergelijking met een bestaand stuk) | Belangrijk |
| D4 | **Boodschap en gevoel.** Het ontwerp draagt de boodschap en het gevoel uit brief, pillar en aangeleverde copy, per post of sectie | Brief en copy letterlijk naast het ontwerp; per post/sectie één regel waarom het past | Blokkerend |
| D5 | **Echtheid.** Geen beeld, claim, review of mechanisme dat iets toont wat niet klopt; productbeeld klopt met echt product | Beeld naast productfoto, zin met bron of **[HÏ GRIP]** | Blokkerend |
| D6 | **Tekst.** HÏ Grip met umlaut, copy komt van Social, Website Copy of (bij ads) de Ads Agent, niets zelf verzonnen | Letterlijk citaat | Belangrijk |
| D7 | **Rechten.** Fonts, stock, muziek, tools en personen in beeld met bekende licentie of toestemming | Bronvermelding of toestemming in vault | Blokkerend |
| D8 | **Niets gepubliceerd of live gezet.** Uitvoer is een voorstel; niets ingepland of live | Bestand/preview als enige uitvoer; geen publicatie op kanaal of live thema | Blokkerend |
| D9 | **Mobiel en leesbaarheid.** Gecontroleerd op klein scherm; contrast voldoende; alt-teksten aanwezig | Mobiele weergave of screenshot, contrastwaarde, lijst alt-teksten | Belangrijk |
| D10 | **E-mail** (alleen e-mail), volgens [[WORKFLOW-Email]] en [[Leerregels-Email-Design]] (leidend sinds 17-11-2026) en [[E-mail Design & Stijlgids]]. Max. 5 secties; per sectie ander beeld; eigen concept dat zichtbaar verschilt van eerdere mails (geen kopie van Voorbeelden/); kwaliteitspoort: full-length screenshot desktop + mobiel naast de referenties (Voorbeelden/, FRZN, Doré); dark-mode-hooks gecombineerd in één regel | Screenshots desktop en mobiel naast referenties; sectietelling | Blokkerend |
| D11 | **Werkthema en preview** (alleen site). Gewerkt in het werkthema, niet het live thema; preview rendert zonder fouten | Uitvoer `theme list`, `theme check`, preview-URL | Blokkerend |
| D13 | **Feedbeeld (4:5).** Beoordelingskaart en poort uit [[Ads Bouwboek — bewezen elementen]]; bewezen format gekozen vóór het beeld | Score per punt naast het beeld; poortpunten ja/nee | Belangrijk; poortpunt blokkerend |
| D12 | **Gaten.** Wat is niet bekeken (andere kanalen, donkere/lichte variant, e-mailclients) | Lijst | Klein |

Verdict met bewijs en altijd "niet gecontroleerd"; correctierondes en escalatie volgens [[Toetsregels]] (maximaal 2 correctierondes).

## 6. Open punten

- Design-QA bestaat en toetst volgens D1 t/m D13 (vastgesteld door Lars, 16-11-2026), via een kanbankaart; de toetser is een ander profiel dan de maker.
- Autonomie en het blok 'Voorstel, nog te bevestigen' in sectie 1 zijn afgeleid; bevestigen.

> Map: [[07 Design Agent — Index]]
