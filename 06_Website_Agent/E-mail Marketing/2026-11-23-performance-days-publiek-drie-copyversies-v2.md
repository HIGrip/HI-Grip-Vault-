---
type: e-mailcopy
gebied: website-agent
datum-opdracht: 2026-11-23
status: concept v2.1
eigenaar: E-mail Marketing Agent
platform: SendWILL (verzending later door een mens; deze agent verzendt nooit)
vervangt: 2026-11-23-performance-days-publiek-drie-copyversies.md (v1, ongewijzigd)
---

# HÏ Performance Days, publieke lancering: drie copyversies (A, B, C), versie 2.1

**Status: concept v2.1, niet verzendgereed.** 23-11-2026 is de opdrachtdatum, geen verzend- of publicatiemoment. v2 verwerkte de negen CORRIGEER-bevindingen van Website-QA ronde 1. v2.1 verwerkt de feedback van Lars: compact, direct te snappen, geen dubbele uitleg. v1 staat ongewijzigd ernaast.

**Doelgroep:** uitsluitend B2C-ontvangers met geldige marketing-opt-in. Aankoop, orderbevestiging of early-access-deelname bewijst die opt-in niet. Geen B2B-menging (Agents Website Agent r.69).

**Hoe dit bestand te lezen:**
- **VERZENDBARE KERN** per versie = de neutrale copy. Zij bevat geen livebewering, geen deal, geen datum, geen prijs, geen code en geen beloofd productresultaat.
- Regels met het label **[ALLEEN NA BEVESTIGDE LIVEGANG]** mogen pas in de mail als Lars bevestigt dat Performance Days publiek live staat op het verzendmoment. Elk zo'n label heeft direct ervoor een neutrale fallback.
- Regels met **[LARS: ...]** zijn placeholders en worden nooit door deze agent ingevuld.
- **Regel v2.1:** de livegang wordt per versie maar één keer gezegd, in het eerste scherm. Onderwerp, preheader en overige secties bevatten geen livebewering.

---

## PREFLIGHT (intern, niet in de mail)

Alles hieronder is onbevestigd. Het hangt aan de genoemde copyplek. Lars bevestigt vóór Design de HTML finaliseert en vóór een mens verzendt.

| # | Onbevestigd | Hangt aan copyplek | Wat de neutrale kern doet |
|---|---|---|---|
| 1 | **Livegang en verzendmoment.** Staat Performance Days publiek live op het moment van verzenden? | Alleen de [ALLEEN NA BEVESTIGDE LIVEGANG]-regel in het eerste scherm van A, B en C (sectie 1, regel 1 of 2). Nergens anders. | Fallback zonder 'is open', 'loopt', 'staat online' |
| 2 | **Publieke deal of mechaniek.** Briefing 5-11 noemt 1+1 (r.15) als voorstel, geen bevestigde uiting. | Het lege voordeel-slot en Module A, B, C in het eerste scherm | Geen deal in de kern |
| 3 | **Korting of code, prijzen en staffels voor deze actie.** Alleen reguliere prijzen staan in Feiten & Actuele Staat r.39-44. | Module A, B, C in het eerste scherm | Niet genoemd |
| 4 | **Deelnemende artikelen.** Briefing r.64 zegt 1.0 en 2.0; bevestiging voor de publieke uiting ontbreekt. | A (regel 2 en sectie 2), B (regel 2), C (regel 2): overal alleen 2.0 genoemd | Alleen 2.0 in kleur genoemd, omdat Feiten r.40-41 de 2.0-productpagina's als live geeft |
| 5 | **Voorraad.** Niet in de vault (Feiten r.45, negatieve waarden 2.0 op 12-10). | Geen copyplek | Geen schaarstetaal |
| 6 | **Start- en einddatum en tijdzone.** Briefing r.67 noemt 30-11-2026 als laatste dag, maar dat is planning. | Module A, B, C | Geen datum in de copy |
| 7 | **Combinaties en uitsluitingen, verzend- en retourvoorwaarden voor deze actie.** Algemene waarden staan in Feiten r.53-57, twee oude beleidspagina's spreken dat tegen. | Geen copyplek | Niet genoemd |
| 8 | **CTA-bestemming** (landingspagina, collectie of productpagina). | A sectie 1, B sectie 1, C sectie 1 (de ene knop per versie) | Placeholder [LARS: CTA-bestemming] |
| 9 | **Opt-in-bevestiging.** Is het segment uitsluitend B2C met geldige marketing-opt-in, en hoe wordt dat in SendWILL gefilterd? De formulering 'omdat je je hebt aangemeld' is daarom uit de zichtbare mail gehaald. | Footer A, B, C | Footer bevat alleen een gemarkeerde placeholder-regel |
| 10 | **Afmeldlink** en **afzender/bedrijfsgegevens.** | Footer A, B, C | Placeholders |
| 11 | **SendWILL merge-tag-syntax.** Onbevestigd (Agents Website Agent r.70). | Geen copyplek | Geen tags, geen voornaam |
| 12 | **Beeldrechten en gebruiksscope.** Briefing r.66: rechten volgens Lars aanwezig, scope niet onafhankelijk gecontroleerd. | Alle gebruikte beelden: A a1 en a3, B b1 en b2, C c1 en c2 | Niet bevestigd |
| 13 | **Toestemming herkenbare personen** (rugbyspeler in hero A en hero C; omstanders deels zichtbaar in het basketbalbeeld c2). | A sectie 1, C sectie 1 en 2 | Niet bevestigd |
| 14 | **Volgorde met aankondigingsvideo en early-access-mail.** Briefing r.67. Deze mail neemt geen vroege toegang, persoonlijke code of exclusiviteit over. | Geen copyplek | Niet overgenomen |
| 15 | **Gebruik van '3500+ sporters' en Trustpilot 4,6** (Feiten r.67 en r.70, Trustpilot altijd met bron). | Geen copyplek | Bewust niet gebruikt |

### Optionele losse invulmodules (alleen na bevestiging, nooit zelf invullen)

Elke module staat in het eerste scherm direct onder regel 2, zodat een voordeel direct herkenbaar bovenaan staat (Leerregels per Agent r.130).

- **Module A:** "[LARS: dealregel in één zin, bijvoorbeeld mechaniek en deelnemende artikelen]. [LARS: looptijd met einddatum en tijdzone]."
- **Module B:** "[LARS: dealregel in één zin]. Geldt voor [LARS: deelnemende artikelen]. [LARS: einddatum en tijdzone]."
- **Module C:** "[LARS: dealregel in één zin]. [LARS: code, alleen als er een code is]. [LARS: einddatum en tijdzone]."

Bij elke module: geen countdown, geen 'bijna op', geen schaarstetaal tenzij voorraad en einddatum bevestigd zijn.

---

## EERSTE SCHERM PER VARIANT (voor Design)

Het eerste scherm = kop, twee korte regels, voordeel-slot, één knop. Elk element heeft een kern (altijd) en waar nodig een regel [ALLEEN NA BEVESTIGDE LIVEGANG]. Het voordeel-slot is expliciet leeg: er is geen bevestigd voordeel, geen korting, geen code, geen deal en geen datum. Pas in te vullen door Lars, nooit door deze agent.

Gecontroleerde feiten voor alle drie: PERFORMANCE GRIP SOCKS 2.0 in zwart en wit, maten 35-38, 39-42, 43-47: Feiten & Actuele Staat r.40 (2.0 Zwart) en r.41 (2.0 Wit), productpagina's live geverifieerd 10-11. Externe naam: Brand Voice & Tone of Voice r.96 en r.100, Feiten r.92.

### A: nieuws en campagne
- **Kop:** HÏ PERFORMANCE DAYS
- **Regel 1 [ALLEEN NA BEVESTIGDE LIVEGANG]:** HÏ Performance Days is open.
- **Regel 1 (fallback, kern):** Een campagne van HÏ Grip.
- **Regel 2 (kern, altijd):** PERFORMANCE GRIP SOCKS 2.0, in zwart en wit.
- **Voordeel-slot (leeg):** [LARS: bevestigd voordeel in één korte zin, alleen als het bevestigd is; anders deze regel weglaten]
- **CTA (knop wit):** Bestel de sokken

### B: detail siliconen zones
- **Kop:** Siliconen zones.
- **Regel 1 (kern, altijd, bronzin letterlijk):** Siliconen zones houden de voet vast in de schoen.
- **Regel 2 [ALLEEN NA BEVESTIGDE LIVEGANG]:** HÏ Performance Days loopt: bestel de PERFORMANCE GRIP SOCKS 2.0 in jouw maat.
- **Regel 2 (fallback, kern):** Bekijk de PERFORMANCE GRIP SOCKS 2.0 en zoek je maat.
- **Voordeel-slot (leeg):** [LARS: bevestigd voordeel in één korte zin, alleen als het bevestigd is; anders deze regel weglaten]
- **CTA (knop wit):** Bekijk de sok

### C: beweging
- **Kop:** Eén stap. Eén duw. Eén afzet.
- **Regel 1 [ALLEEN NA BEVESTIGDE LIVEGANG]:** HÏ Performance Days staat online.
- **Regel 1 (fallback, kern):** Van HÏ Grip.
- **Regel 2 (kern, altijd):** Bestel PERFORMANCE GRIP SOCKS 2.0 in zwart of wit, in jouw maat.
- **Voordeel-slot (leeg):** [LARS: bevestigd voordeel in één korte zin, alleen als het bevestigd is; anders deze regel weglaten]
- **CTA (knop wit):** Kies je maat

### Controle eerste schermen
- Verschil in invalshoek: A noemt de campagne en het nieuws, B de siliconen zones (één kenmerk), C de beweging. Geen gedeelde kop, regel of knoplabel.
- Elke tekst is zonder uitleg te lezen: wat open is (alleen onder het label), wat je kunt bekijken of bestellen, en één knop.
- Geen voordeel, korting, code, deal, datum, prijs of voorraad. Het voordeel-slot staat in alle drie leeg.
- De livegang komt na het eerste scherm niet meer terug.

---

## OVERDRACHT DESIGN (copy vraagt, Design beslist)

- **E15 (doorlopend geheel) en E21 (E5-afwerking):** ontwerpzaak, niet door copy op te lossen. Copy vraagt alleen dat de drie secties als één verhaal te lezen zijn. Uiterlijk bepaalt Design.
- **Knop:** per versie precies één primaire knop, **knop wit**, **geen tweede Volt-knop** (E6). De README noemt in B nu een Volt-knop en een Volt-vlak; de copy vraagt een witte knop. Design beoordeelt de rest van de kleurstelling.
- **Secties:** v2.1 heeft in alle drie 3 secties inclusief footer (hero met eerste scherm, één inhoudssectie, footer). De README noemt 5 secties, Volt-lijn per moment, Volt-vlak en slot (README r.13 en r.15); dat vraagt aanpassing door Design.
- **Beelden volgens README (r.21 tot 26):** één rugbyfoto (hero C, knipsel in hero A). Gebruikt in v2.1: A a1 (hero) en a3 (packshot); B b1 (hero) en b2 (zoolfoto, padel); C c1 (hero) en c2 (basketbal). Vervallen: a2, a4, b3, b4, c3, c4 (hun secties zijn geschrapt). Waar een beeld nodig is dat niet bestaat, staat een BEELDVEREISTE VOOR DESIGN bij de plek.
- **Alt-teksten:** beschrijven wat de README als zichtbaar meldt of staan gemarkeerd 'afstemmen op definitief beeld'. Copy heeft de beelden niet zelf beoordeeld.
- **Kopgrootte:** copy stelt geen eis aan kopgrootte.
- **Gewicht:** README meldt C als zwaar (1,1 MB); minder beelden in v2.1 helpt, verder comprimeren is een Designzaak.

---

# VERSIE A: Lanceringsnieuws eerst

**Invalshoek:** de campagnenaam is de held. Structuur: eerste scherm, één inhoudssectie met de maten, footer.

### Onderwerp en preheader (alleen kern)
- **Onderwerp:** Performance Days van HÏ Grip
- **Preheader:** De PERFORMANCE GRIP SOCKS 2.0 in twee kleuren.

### Sectie 1: Hero (eerste scherm, zie hierboven)
- **Kop, regels, voordeel-slot en knop:** zoals bij A in 'Eerste scherm per variant'. Hier niet herhaald.
- **Knop, knop wit, volle breedte direct onder de hero. Link:** [LARS: CTA-bestemming]. Dit is de enige primaire bestelactie; geen tweede Volt-knop.
- **Beeld:** hero a1 (rugbysporter, uitgeknipt, volgens README). BEELDVEREISTE VOOR DESIGN: randcontrole door een mens (README meldt halo bij schouder en arm), toestemming van de persoon.
- **Alt-tekst:** Uitgeknipte rugbysporter in beweging op een zwarte achtergrond. Afstemmen op definitief beeld.
- Optie: Module A, alleen na bevestiging.

### Sectie 2: Maten
- **Kop:** Drie maatgroepen.
- **Body:** 35 tot 38, 39 tot 42 en 43 tot 47.
- **Beeld:** a3, packshot PERFORMANCE GRIP SOCKS 2.0 (README: enkele sok).
- **Alt-tekst:** Packshot van een PERFORMANCE GRIP SOCKS 2.0. Afstemmen op definitief beeld (kleur controleren).
- 1.0 is bewust niet genoemd: deelname onbevestigd (preflight 4). Geen tweede knop.

### Sectie 3: Footer
- **Tekst (kern):** [LARS: opt-in-tekst, pas invullen na bevestiging van het segment, preflight 9]. Geen mails meer? [LARS: afmeldlink]
  HÏ Grip. [LARS: afzender/bedrijfsgegevens]
- **Alt-tekst woordmerk:** HÏ Grip.

### Bronregels versie A
| Feitelijke zin in de copy | Bron |
|---|---|
| PERFORMANCE GRIP SOCKS 2.0, in zwart en wit (regel 2, preheader 'twee kleuren') | Feiten & Actuele Staat r.40 en r.41 (2.0 Zwart en 2.0 Wit, productpagina live, geverifieerd 10-11) |
| 35 tot 38, 39 tot 42 en 43 tot 47 | Feiten & Actuele Staat r.40 en r.41 (maten) |
| Productnaam extern PERFORMANCE GRIP SOCKS 2.0 | Brand Voice & Tone of Voice r.96 en r.100; Feiten r.92 |
| HÏ Performance Days is open (alleen onder label) | Onbevestigd: preflight 1. Geen vaultbron |
| Een campagne van HÏ Grip | Naam van de campagne volgens de briefing; geen productclaim |
| Merknaam HÏ Grip met trema | E-mail Design & Stijlgids r.40 (overgenomen uit v1, niet opnieuw geopend) |
| Eén actie, witte knop | Leerregels-Email-Design E6 en E8 (overgenomen uit v1, niet opnieuw geopend) |

### Zelfcheck versie A
- ✅ Geen claim sterker dan Brand Core: geen grip-zin, geen resultaat, alleen kleuren en maten (Feiten r.40-41).
- ✅ De livegang staat één keer, in het eerste scherm, onder het label met kernfallback. Onderwerp, preheader en sectie 2 hebben geen livebewering.
- ✅ Alleen 2.0 zwart en wit; geen 1.0.
- ✅ Eén witte knop, 3 secties. Geschrapt: 'Pak je grip', 'Zo bestel je' met drie stapjes, 'Grip waar je speelt', 'Kijk rond', sectie 'Nieuws'.
- ❌ Niet geverifieerd: beeldinhoud, resolutie, rechten, render.

---

# VERSIE B: Productdetail eerst

**Invalshoek:** één controleerbaar detail, de siliconen zones, als held. Structuur: eerste scherm met de bronzin, één inhoudssectie met drie kenmerken, footer.

### Onderwerp en preheader (alleen kern)
- **Onderwerp:** Wat houdt je voet vast in je schoen?
- **Preheader:** Eén detail in de PERFORMANCE GRIP SOCKS 2.0.

### Sectie 1: Hero (eerste scherm, zie hierboven)
- **Kop, regels, voordeel-slot en knop:** zoals bij B in 'Eerste scherm per variant'. Hier niet herhaald.
- **Knop, knop wit, volle breedte. Link:** [LARS: CTA-bestemming]. Enige primaire actie; geen tweede Volt-knop.
- **Beeld:** b1 (README: één sok). Copy spreekt daarom in het enkelvoud over de sok.
- **Alt-tekst:** Eén PERFORMANCE GRIP SOCKS 2.0. Afstemmen op definitief beeld.
- Optie: Module B, alleen na bevestiging.

### Sectie 2: Meer kenmerken
- **Kop:** Eén van de zeven kenmerken.
- **Body (drie korte regels):**
  Compressie van 15 tot 20 mmHg.
  Versterkte hiel: extra dikte precies onder de hiel.
  Naadloos: rondom gebreid, zonder stiksels.
- **Beeld:** b2 is volgens README een zoolfoto (padel), geen macro. De kop belooft daarom geen macro.
- **BEELDVEREISTE VOOR DESIGN (echte macro, optioneel):** close-up van de siliconen zones op een PERFORMANCE GRIP SOCKS 2.0, zones scherp en herkenbaar als siliconen, sok alleen of op een voet zonder herkenbaar gezicht, andere crop dan hero, minimaal 1200 px breed, eigen opname of bevestigd recht. Tot dat beeld er is: b2 plaatsen met een eerlijke alt of de sectie zonder beeld laten.
- **Alt-tekst (b2):** Zoolfoto van een sok, genomen bij padel. Geen close-up van de siliconen zones. Afstemmen op definitief beeld.
- Geen getal over grip en geen prestatiebelofte. Het getal 95% (Brand Core r.139-150) is categoriebewijs en vereist de formuleringsregel; niet gebruikt. Bewust niets over doorbloeding, blessures of comfort.

### Sectie 3: Footer
- **Tekst (kern):** [LARS: opt-in-tekst, pas invullen na bevestiging van het segment, preflight 9]. Geen mails meer? [LARS: afmeldlink]
  HÏ Grip. [LARS: afzender/bedrijfsgegevens]
- **Alt-tekst woordmerk:** HÏ Grip.

### Bronregels versie B
| Feitelijke zin in de copy | Bron |
|---|---|
| Siliconen zones houden de voet vast in de schoen (letterlijk) | Performance Grip Socks 2.0.md r.125 |
| Eén van de zeven kenmerken | Performance Grip Socks 2.0.md r.116 ('7, vastgesteld door Lars') |
| Compressie van 15 tot 20 mmHg | Performance Grip Socks 2.0.md r.122 (omschrijving daar noemt ook doorbloeding; hier bewust niet overgenomen) |
| Versterkte hiel, extra dikte precies onder de hiel (letterlijk) | Performance Grip Socks 2.0.md r.123 |
| Naadloos, rondom gebreid zonder stiksels | Performance Grip Socks 2.0.md r.127 |
| Zoek je maat (maten bestaan) | Feiten & Actuele Staat r.40 en r.41 (35-38, 39-42, 43-47) |
| Naam PERFORMANCE GRIP SOCKS 2.0 extern | Brand Voice r.96 en r.100; Feiten r.92 |
| HÏ Performance Days loopt (alleen onder label) | Onbevestigd: preflight 1. Geen vaultbron |
| Knoplabel 'Bekijk de sok' | Geen productclaim |

### Zelfcheck versie B
- ✅ De bronzin staat letterlijk en alleen in het eerste scherm van B (r.125).
- ✅ De livegang staat één keer, onder het label met kernfallback. Onderwerp, preheader en sectie 2 hebben geen livebewering.
- ✅ Eén witte knop, 3 secties. Geschrapt: 'Bestel je grip', 'Eén detail' als aparte sectie, 'En verder', sectie 'Performance Days' met 'Je kunt nu bestellen'.
- ✅ Hero-kop twee woorden; geen kopgrootte-eis.
- ⚠️ Onderwerp als vraag: niet getest op open rate. De vraag wordt door regel 1 beantwoord; wie dat als beloofd resultaat leest, kan de vraag schrappen.
- ❌ Niet geverifieerd: of een echte macro bestaat, inhoud b1 en b2, resolutie, rechten, render.

---

# VERSIE C: Scène eerst

**Invalshoek:** een beweging, geen product. Structuur: eerste scherm met de beweging, één korte regel bij het tweede beeld, footer. De productbeschrijving uit v1 (en dus de bronzin) is hier bewust geschrapt.

### Onderwerp en preheader (alleen kern)
- **Onderwerp:** Het moment vlak voor je afzet
- **Preheader:** Een stap, een duw, een draai. Van HÏ Grip.

### Sectie 1: Hero (eerste scherm, zie hierboven)
- **Kop, regels, voordeel-slot en knop:** zoals bij C in 'Eerste scherm per variant'. Hier niet herhaald.
- **Knop, knop wit, volle breedte. Link:** [LARS: CTA-bestemming]. Enige primaire actie; geen tweede Volt-knop.
- **Beeld:** c1, de enige echte rugbyfoto (bewegingsonscherp volgens README). Copy eist geen scherpe voet.
- **Alt-tekst:** Rugbyspeler in beweging, bewegingsonscherp. Afstemmen op definitief beeld.
- Toestemming van de persoon: preflight 13. Optie: Module C, alleen na bevestiging.

### Sectie 2: De beweging
- **Body (één korte regel, geen kop):** Naar links, dan naar rechts. Afzet, draai, weer vooruit.
- **Beeld:** c2 (basketbal volgens README, omstanders deels zichtbaar, toestemming onbevestigd). Copy is sport-neutraal en past daarbij.
- **Alt-tekst:** Basketbalbeeld. Afstemmen op definitief beeld.
- Geen scrum, sidestep of tackle in de copy: er is geen tweede rugbybeeld. Geen tweede knop.

### Sectie 3: Footer
- **Tekst (kern):** [LARS: opt-in-tekst, pas invullen na bevestiging van het segment, preflight 9]. Geen mails meer? [LARS: afmeldlink]
  HÏ Grip. [LARS: afzender/bedrijfsgegevens]
- **Alt-tekst woordmerk:** HÏ Grip.

### Bronregels versie C
| Feitelijke zin in de copy | Bron |
|---|---|
| PERFORMANCE GRIP SOCKS 2.0 in zwart of wit | Feiten & Actuele Staat r.40 en r.41 (2.0 Zwart, 2.0 Wit, productpagina live 10-11) |
| In jouw maat (maten bestaan) | Feiten & Actuele Staat r.40 en r.41 (35-38, 39-42, 43-47) |
| Productnaam extern PERFORMANCE GRIP SOCKS 2.0 | Brand Voice r.96 en r.100; Feiten r.92 |
| HÏ Performance Days staat online (alleen onder label) | Onbevestigd: preflight 1. Geen vaultbron |
| Scène (stap, duw, afzet, draai) | Geen productclaim, sfeer; geen vaultbron nodig |
| Er staat geen zin over wat de sok doet | Bewust: de bronzin staat alleen in B |

### Zelfcheck versie C
- ✅ Geen impliciete belofte en geen productclaim in de hele versie.
- ✅ De livegang staat één keer, onder het label met fallback. Onderwerp, preheader en sectie 2 hebben geen livebewering.
- ✅ Alleen 2.0 genoemd (geen 1.0-deelname geclaimd); in v2 stond de naam zonder generatie.
- ✅ Eén witte knop, 3 secties. Geschrapt: 'Drie momenten' (kop en drie regels), 'Dat geldt in elke sport', 'Kom kijken', 'Daarna is het aan jou', sectie 'Het nieuws' en slot met c3 en c4.
- ⚠️ Sectie 2 is sfeer. Wil Lars die ook weg, dan blijven er twee secties (hero, footer) en moet er een inhoudssectie bij voor het minimum van drie, bijvoorbeeld het packshot c3.
- ❌ Niet geverifieerd: inhoud c1 en c2, resolutie, rechten, gewicht van C, render.

---

## Verschillen tussen de versies (geen gedeelde zinnen)

De drie versies delen geen kopzin, regel, body-zin of knoplabel. Alleen de productnaam en feiten (kleuren, maten) komen terug, in verschillende zinnen. De bronzin voor grip staat alleen in B. De livegangzin verschilt per versie ('is open', 'loopt', 'staat online') en staat per versie één keer.

## WIJZIGINGEN

### v2.1 t.o.v. v2

| Plek | v2 | v2.1 | Reden |
|---|---|---|---|
| Bovenaan | Geen eerste-schermtekst | Sectie 'Eerste scherm per variant (voor Design)': kop, twee regels, leeg voordeel-slot, één witte CTA, fallback per element | Feedback Lars: direct begrijpelijk |
| Livegang | Meerdere plekken per versie (onderwerp, preheader, hero, kop, body, knopvariant) | Eén keer per versie, in het eerste scherm; onderwerp, preheader en rest alleen kern | Dubbele lanceringsuitleg |
| Knop | Kern plus livegangvariant ('Bestel tijdens Performance Days', 'Bestel in Performance Days', 'Bestel je paar tijdens Performance Days') | Eén neutraal label per versie: A 'Bestel de sokken', B 'Bekijk de sok', C 'Kies je maat' | Geen livebewering in de knop; geen 'Bestel je grip' |
| A | 5 secties, 'Pak je grip', 'Zo bestel je' (Kies je sok, Kies je maat, Bestel), 'Grip waar je speelt', 'Kijk rond', sectie 'Nieuws' met a2, slot met a4 | 3 secties: hero, 'Drie maatgroepen' met a3, footer | Generiek, onnodige stapjes, dubbele uitleg |
| B | 5 secties: Het detail, En verder, Performance Days met b4 | 3 secties: bronzin in eerste scherm, 'Eén van de zeven kenmerken' met drie feiten en b2, footer. 'Bestel je grip' vervallen | Detail naar het eerste scherm; dubbele livegang geschrapt |
| C | 5 secties: 'Drie momenten' met vier regels, 'Het nieuws', slot 'Daarna is het aan jou' | 3 secties: hero, één korte regel bij c2, footer; naam nu 'PERFORMANCE GRIP SOCKS 2.0' | Sfeer ingekort; generiek geschrapt; geen impliciete 1.0-deelname |
| Preflight 1, 2, 3, 4, 6, 12, 13 | Koppeling aan oude secties | Koppeling aan het eerste scherm en de nieuwe secties; a2, a4, b3, b4, c3, c4 vervallen | Consistentie |
| Modules A, B, C | Onder de body van sectie 2, 4, 3 | In het eerste scherm onder regel 2 | Voordeel direct bovenaan |
| Overdracht Design | Max 5 secties; beelden a2 tot a4, b2 tot b4, c2 tot c4 | 3 secties; gebruikt a1, a3, b1, b2, c1, c2; README moet mee | Kloppend met README |
| Bronregels en zelfchecks | Verwijzingen naar geschrapte secties | Per versie herschreven | Consistentie |
| Verschillen | 'Maat kiezen' overlap A en C | Overlap vervallen: geen gedeelde zin meer | Compacter |

### v2 t.o.v. v1

| Plek | Oud | Nieuw | Reden |
|---|---|---|---|
| A sectie 2 body | 'Zoals je voet die blijft staan waar jij hem neerzet' en 'zet zijn gripsokken centraal', 'gewonnen of verloren in de kleine dingen' | Campagne van HÏ Grip rond PERFORMANCE GRIP SOCKS (in v2.1 naar het eerste scherm) | Bron zegt voet in de schoen, niet op de ondergrond; sjabloonklinkers |
| A onderwerp en kop | 'HÏ Performance Days is open' (zonder voorbehoud) | Kernfallback plus label voor livegang | Livestatus onbevestigd (QA 2) |
| A hero subregel en knop | 'Het is begonnen. Pak je grip.' en 'Bestel tijdens Performance Days' | In v2 kern plus livegangvariant onder label; in v2.1 vervangen door het eerste scherm | QA 2 |
| A sectie 3 zin | 'Twee generaties ... in zwart en wit' | 'PERFORMANCE GRIP SOCKS 2.0 is er in zwart en wit.' | Deelname 1.0 onbevestigd; beeld toont 2.0 |
| A sectie 4 | Kop 'Grip op het veld', body met bronzin en 'Daar is de sok voor gemaakt' | In v2 'Grip waar je speelt.'; in v2.1 geschrapt | Beeld is basketbalhal; dubbeling met B; sjabloonklinker |
| B hero | Kop 'Siliconen zones. Jouw voet blijft waar hij hoort.' en subregel 'nu tijdens HÏ Performance Days' | Kop 'Siliconen zones.'; subregel zonder livebewering | Resultaatbelofte; livestatus |
| B knop | 'Bestel je grip' | In v2 neutraal knoplabel met livegangvariant; in v2.1 'Bekijk de sok' | Neutraal knoplabel (QA 2) |
| B sectie 2 | Kop 'Waar het om draait', 'In de zool' en 'Dat is alles wat ze doen, en daar zijn ze voor gemaakt' | Bronzin letterlijk (in v2.1 in het eerste scherm), 'Eén van de zeven kenmerken' | Absolute claim; 'zool' niet in bron; macro bestaat niet |
| B sectie 2 alt en beeld | 'Close-up van siliconen grip zones' | Eerlijke alt voor zoolfoto plus beeldvereiste echte macro | Beeld-tekstmatch (QA 6) |
| B sectie 4 | 'HÏ Performance Days is open. Dit is de lancering voor iedereen. Kijk wat er voor jou is.' | In v2 kernfallback plus livegangvariant; in v2.1 geschrapt | Dubbeling en livestatus |
| C onderwerp | 'De voet die blijft staan' | 'Het moment vlak voor je afzet' | Impliciete belofte |
| C sectie 2 | Scrum, sidestep, tackle; 'In die seconden wil je niet nadenken over je voeten' | Sport-neutrale beweging (in v2.1 één korte regel) | Alleen hero is rugby; impliciete belofte |
| C sectie 3 en 4 | Lancering voor iedereen plus bronzin plus 'Zo hoef je er niet aan te denken'; 'Jij zet af. De rest volgt.' en 'Zet je volgende wedstrijd goed in' | Zonder productzin en zonder belofte; in v2.1 beide secties geschrapt | Dubbeling en belofte; zwakke afronding |
| C knop | 'Bestel voor je volgende wedstrijd' | In v2 'Bestel je paar' plus livegangvariant; in v2.1 'Kies je maat' | QA 2 en variatie |
| Footer A, B, C | 'Je ontvangt deze mail omdat je je hebt aangemeld voor mails van HÏ Grip.' | Placeholder-regel; opt-in naar PREFLIGHT 9 | Opt-in onbevestigd (QA 5) |
| Bovenaan | OPEN PREFLIGHT als lijst met 16 punten | Tabel PREFLIGHT (intern) met koppeling aan copyplek | QA 5 |
| Alle alt-teksten | Beschreven rugbyacties die er niet zijn | Beschrijven wat README meldt of 'afstemmen op definitief beeld' | QA 6 |
| Alle drie | 'Dit is de lancering voor iedereen. Kijk wat er voor jou is.' woordelijk drie keer | Per versie eigen formulering, alleen onder label | QA 3 |

## ZELFCHECK OPLEVERING

1. ✅ Geen claim sterker dan Brand Core: één bronzin in B (letterlijk, r.125), overige productfeiten uit r.116 tot r.127 van Performance Grip Socks 2.0.md. Bronregels met regelnummers per versie. Feiten-regels r.40-41 en r.92, Brand Voice r.96 en r.100 en Performance Grip Socks 2.0.md r.116 tot r.127 zelf gelezen; Stijlgids r.40 en Leerregels-Email-Design E6/E8 zijn uit v1 overgenomen en niet opnieuw geopend.
2. ✅ Livegang staat per versie één keer, in het eerste scherm onder [ALLEEN NA BEVESTIGDE LIVEGANG], met kernfallback.
3. ✅ Geen woordelijke dubbelingen tussen A, B, C in koppen, regels en knoppen. Generieke slogans en onnodige stapjes geschrapt.
4. ✅ Geen voordeel, korting, code, deal of datum verzonnen: het voordeel-slot staat leeg als [LARS: ...]. Onbevestigde offer, CTA, footer, opt-in, afmeld en livegang staan in PREFLIGHT met koppeling aan de copyplek.
5. ✅ Beelden in de BEELDVEREISTE-notities en Overdracht Design kloppen met de README-beschrijving. ⚠️ De beelden zelf zijn niet door mij bekeken; alt-teksten rusten op de README.
6. ✅ Greppel-check op het eigen bestand: 0 treffers voor lange en korte gedachtestreep, pijltjes en de verkeerde schrijfwijzen van de merknaam (zonder trema), uitgevoerd na schrijven.

**Niet gecontroleerd:** beeldinhoud, resolutie, rechten en toestemming, SendWILL-render, Gmail, Outlook, dark mode, mobiel op 390 px, spam-score, klanktest op AI-tekst door een mens (E14), Brand Voice buiten r.95 tot r.100, Stijlgids en Email-Design-leerregels niet opnieuw geopend, README zelf is nog niet aangepast aan 3 secties.

**Wat een expert nog zou toevoegen:** bevestigde livegang, datum en deal in het voordeel-slot en de modules; een echte macro van de siliconen zones; extra rugbymateriaal als rugby de hoek moet blijven; A/B-test van onderwerpen; UTM-structuur; plain-text versie; bij een cijfer voor grip de verplichte formuleringsregel met bron (Brand Core r.145-150).

Map: 06_Website_Agent, E-mail Marketing
