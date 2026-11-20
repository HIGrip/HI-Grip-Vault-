# Funnel-ads v2: doorgestreept en vergelijking, sportneutraal (19 november 2026)

Stand: 19 november 2026. Herontwerp van borden 10 (probleem en oplossing) en 11 (vergelijking) uit `Funnel-ads-2026-11-16/`, op verzoek van het team: geen keuze tussen voetbal en rugby, puur psychologisch, een andere richting voor bord 10 en een vergelijking die minder leeg is. Twee statische ads in 4:5 (1080 × 1350). Niets gepland of gepubliceerd; een mens zet ze online.

- Beelden: `png/funnel_v2_doorgestreept_4x5.png`, `png/funnel_v2_vergelijking_4x5.png`
- Bron: `html/` (`base.css` is het gedeelde systeem, `render.py` rendert met headless Chrome), `bron/` (zwarte sok, zwart 3-pack, logo)

## Eén systeem voor beide ads

- **Donker is de wereld van het probleem, wit is HÏ Grip.** In de vergelijking is de productkaart het enige witte vlak, dus het oog landt daar (Von Restorff). In de doorgestreepte ad is wit de streep: HÏ Grip haalt het probleem weg.
- **Het product breekt op één plek uit het raster:** de sok vóór de doorgestreepte woorden, het 3-pack boven de kaart.
- **Volt alleen op de chevron en op de prijs.** Geen eyebrows, badges, strepen of gloed.
- **Zwarte sok voor beide sporten,** zodat geen sport gekozen wordt. Landingspagina: `performance-gripsokken-2-0-zwart`.
- Vast raster: marge 72, logo 72/72, kop op 176, knop op 1198 rechts.

## funnel_v2_doorgestreept (midden: klikken)

Vervangt de chatversie (19-11: niet mooi en passend genoeg). Drie klachten groot en doorgestreept, de sok staat ervoor. Achtergrond: eigen shootfoto van een veld onder flutlicht (`bron/veld_vervaagd.jpg`, uit `Campagne-ads-2026-11-15/bron/lagen/v6_bg.jpg`), zo sterk vervaagd dat geen sport herkenbaar is, links en onder extra donker voor de tekst.

**Psychologie**
- "Wat je straks niet meer voelt:" laat de kijker de toekomst zonder het probleem al voelen (future pacing).
- De klachten staan er nog wel: je herkent ze eerst (verliesaversie), de streep geeft daarna meteen opluchting (afsluiting).
- Drie woorden, oplopend tot de pijnlijkste: blaren.
- De sok staat vóór de letters (diepte, zie F7 in het bouwboek): product en belofte vallen samen.
- Sociaal bewijs klein onder de uitleg: 3500+ sporters gingen je voor.
- Geen sportwoorden, dus het werkt voor voetbal en rugby.

**Kop in beeld:** A (probleem) `Schuiven. Glippen. Blaren.` doorgestreept (staat in het ontwerp) · B (emotie) `Voel je voet niet meer.`

**Primaire tekst A (probleem)**

Schuiven in je schoen. Een hiel die glipt bij elke draai. Blaren na afloop. Daar ben je straks vanaf.

Performance Gripsokken 2.0 houden je voet vast met siliconen gripzones. Binnen 1 werkdag verzonden.

**Primaire tekst B (sociaal bewijs)**

3500+ sporters denken tijdens de wedstrijd niet meer aan hun voeten. Alleen nog aan het spel.

Siliconen gripzones houden je voet vast in je schoen. Gratis verzending vanaf €35.

| Veld | Variant A | Variant B |
|---|---|---|
| Kop | Je voet schuift niet meer (probleem) | 3500+ sporters gingen je voor (sociaal bewijs) |
| Beschrijving | Binnen 1 werkdag verzonden | Gratis verzending vanaf €35 |
| Knop | Nu kopen | Meer informatie |

**Aanbeveling:** A voor koud publiek, beeld en tekst zeggen hetzelfde. B voor wie de ad al eens zag.

## funnel_v2_vergelijking (onder: kopen)

**Psychologie**
- Referentiepunt: de gewone sok is grijs en zonder beeld, HÏ Grip wit met het product.
- "Eén voor de training. Eén voor de wedstrijd. Eén in de was." staat naast de drie sokken: de kijker verdeelt de pack zelf al (mentale boekhouding), waardoor drie paar logisch voelt in plaats van duur.
- Prijsanker per paar: €14,98 tegenover het losse paar van €17,95 (bundelkorting tegenover losse paren, toegestaan volgens het feitenbestand).
- Risico weg: gratis verzending en 30 dagen retour direct onder de prijs.
- Eén aanbod, één knop.

**Kop in beeld:** A (performance) `Niet elke sok houdt je vast.` (staat in het ontwerp) · B (aanbod) `3 paar voor €44,95.`

**Primaire tekst A (performance en aanbod)**

Een gewone sok ligt los in je schoen. Een gripsok zet je voet vast met siliconen zones onder je zool.

3 paar Performance Gripsokken 2.0 voor €44,95. Dat is €14,98 per paar, met gratis verzending.

**Primaire tekst B (identiteit)**

Eén paar voor de training, één voor de wedstrijd, één in de was. Zo sta je elke week vast.

3 paar voor €44,95 met gratis verzending en 30 dagen retour.

| Veld | Variant A | Variant B |
|---|---|---|
| Kop | 3 paar €44,95, gratis verzending (aanbod) | €14,98 per paar in het 3-pack (prijsanker) |
| Beschrijving | 30 dagen retour | Binnen 1 werkdag verzonden |
| Knop | Nu kopen | Nu bestellen |

**Aanbeveling:** A voor wie op de doorgestreepte ad klikte, B voor retargeting (winkelwagens zonder aankoop).

**Prijs in beeld:** €44,95, €14,98 en €17,95. Verandert een van die prijzen, dan gaat deze ad eerst uit.

## funnel_v2_twijfel (onder: kopen, 19-11)

Bezwaarbreker voor warm publiek (bezoekers, winkelwagen, engagers). Gebouwd op de koopdata van de laatste 30 dagen: alleen de ads die het product en de features laten zien leverden winkelwagens op (Tigo Sport, Timo Rugby features); gevoel-ads gaven goedkope klikken zonder productweergave.

**Psychologie**
- De kop stelt de vraag die de koper zichzelf al stelt: het besluit is half genomen, alleen de twijfel blijft over.
- Vier bezwaren in de woorden van de koper, elk direct weggenomen (risico-omkering): pasvorm, verzendkosten, snelheid, werkt het.
- Sociaal bewijs als laatste antwoord: 3500+ sporters en 4,6 op Trustpilot.
- Prijsanker per paar: €14,98 tegenover €17,95 los (bundelkorting, toegestaan).
- Eén aanbod, één knop. Volt alleen op prijs en chevron.

**Kop in beeld:** A (probleem) `Wat houdt je nog tegen?` (staat in het ontwerp) · B (urgentie) `Zondag spelen? Bestel vandaag.`

**Primaire tekst A (risico weg)**

Je hebt ze al bekeken. Dit is wat je nog moet weten: past hij niet, dan stuur je hem binnen 30 dagen terug. Verzending is gratis vanaf €35 en je bestelling gaat binnen 1 werkdag de deur uit.

3 paar Performance Gripsokken 2.0 voor €44,95. Eén voor de training, één voor de wedstrijd, één in de was.

**Primaire tekst B (sociaal bewijs)**

3500+ sporters gingen je voor. 4,6 op Trustpilot.

Siliconen gripzones houden je voet vast in je schoen. 3 paar voor €44,95, gratis verzonden, 30 dagen retour.

| Veld | Variant A | Variant B |
|---|---|---|
| Kop | 3 paar voor €44,95 (aanbod) | 3500+ sporters gingen je voor (sociaal bewijs) |
| Beschrijving | Gratis verzending · 30 dagen retour | Binnen 1 werkdag verzonden |
| Knop | Nu kopen | Nu kopen |

**Aanbeveling:** A voor retargeting van productpaginabezoekers en winkelwagenverlaters (7 dagen). B voor Instagram-engagers die nog niet op de site waren. Landingspagina: `performance-gripsokken-2-0-zwart`, 3-pack voorgeselecteerd als dat kan.

## funnel_v2_wedstrijd (onder: kopen, 19-11, vervangt funnel_v2_twijfel)

Feedback team 19-11 op de twijfel-versie: copy en indeling konden beter, geen retour noemen (kost te veel), geen zwevende sokken. Nu een echte shootfoto (`bron/zool_kunstgras.jpg`, uit `Campagne-ads-2026-11-15/bron/lagen/v7_photo.jpg`): de grip-zool staat op kunstgras en is het enige focuspunt. Witte sok in beeld, dus landingspagina `performance-gripsokken-2-0-wit`.

**Psychologie**
- Verliesaversie: de kop laat de kijker kiezen tussen nóg een wedstrijd glijden of niet. Niemand antwoordt "ja".
- Contrast: de subregel geeft meteen de uitweg ("Of sta de volgende gewoon vast").
- Beeld en kop zeggen hetzelfde: de grip-zool op het gras.
- Sociaal bewijs vlak boven de prijs: 4,6 op Trustpilot en 3500+ sporters, waar de twijfel ontstaat.
- Prijsanker per paar (€14,98) en tempo (binnen 1 werkdag de deur uit) houden de stap klein.

**Kop in beeld:** A (probleem) `Nog één wedstrijd glijden?` (staat in het ontwerp) · B (urgentie) `Zaterdag spelen? Vandaag bestellen.`

**Primaire tekst A (probleem)**

Je weet hoe het voelt: een voet die schuift op het moment dat je wilt draaien. Nog één wedstrijd zo, of sta je de volgende gewoon vast?

Siliconen gripzones houden je voet vast in je schoen. 3 paar voor €44,95, gratis verzonden en binnen 1 werkdag de deur uit.

**Primaire tekst B (sociaal bewijs)**

3500+ sporters spelen al met HÏ Grip. 4,6 op Trustpilot.

Eén paar voor de training, één voor de wedstrijd, één in de was. 3 paar voor €44,95, gratis verzonden.

| Veld | Variant A | Variant B |
|---|---|---|
| Kop | 3 paar voor €44,95 (aanbod) | 3500+ sporters gingen je voor (sociaal bewijs) |
| Beschrijving | Gratis verzonden · binnen 1 werkdag de deur uit | €14,98 per paar |
| Knop | Nu kopen | Nu kopen |

**Aanbeveling:** A voor retargeting van productpaginabezoekers en winkelwagenverlaters (7 dagen). B voor Instagram-engagers die nog niet op de site waren.

## funnel_v2_twijfel2 (onder: kopen, 19-11, verbeterde twijfel-versie)

Zelfde concept als funnel_v2_twijfel, na feedback van het team: geen retour noemen (kost te veel), geen zwevende sokken, betere copy en indeling. De wedstrijd-ad hierboven was een ander concept en is niet de opvolger.

- Rechts een echte shootfoto (`bron/zool_kunstgras.jpg`): de grip-zool staat op kunstgras in plaats van een zwevend 3-pack. Witte sok in beeld, dus landingspagina `performance-gripsokken-2-0-wit`.
- Drie bezwaren in plaats van vier, van groot naar klein: werkt het (3500+ sporters, 4,6 op Trustpilot), kost het (€14,98 per paar bij 3 paar), komt het op tijd (binnen 1 werkdag de deur uit).
- Elk antwoord past op één regel, zonder losse woorden op de volgende regel.

**Kop in beeld:** A (probleem) `Wat houdt je nog tegen?` (staat in het ontwerp) · B (urgentie) `Zaterdag spelen? Vandaag bestellen.`

**Primaire tekst A (bezwaren weg)**

Je hebt ze al bekeken. Nog even de feiten: 3500+ sporters gingen je voor, met 3 paar betaal je €14,98 per paar en je bestelling gaat binnen 1 werkdag de deur uit.

Eén voor de training, één voor de wedstrijd, één in de was.

**Primaire tekst B (sociaal bewijs)**

3500+ sporters gingen je voor. 4,6 op Trustpilot.

Siliconen gripzones houden je voet vast in je schoen. 3 paar voor €44,95, gratis verzonden.

| Veld | Variant A | Variant B |
|---|---|---|
| Kop | 3 paar voor €44,95 (aanbod) | 3500+ sporters gingen je voor (sociaal bewijs) |
| Beschrijving | Gratis verzonden | Binnen 1 werkdag de deur uit |
| Knop | Nu kopen | Nu kopen |

**Aanbeveling:** A voor retargeting van productpaginabezoekers en winkelwagenverlaters (7 dagen). B voor Instagram-engagers die nog niet op de site waren.

## funnel_v2_twijfel3 (onder: kopen, 19-11, gekozen richting)

Feedback team 19-11: de originele achtergrond (vervaagd veld, `bron/veld_vervaagd.jpg`) was goed, alleen de indeling niet. Daarom de achtergrond van funnel_v2_twijfel met de bezwaren en copy van funnel_v2_twijfel2. Geen retour en geen zwevende sokken: één zwarte sok staat op zijn zool met een contactschaduw. Landingspagina `performance-gripsokken-2-0-zwart`. Primaire tekst en velden: zie funnel_v2_twijfel2.

> Map: [[04 Social Agent — Index]]
