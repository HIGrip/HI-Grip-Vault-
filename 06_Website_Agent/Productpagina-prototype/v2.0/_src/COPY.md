---
type: concept-copy
status: concept
agent: Website Copy Agent
datum: 2026-11-26
product: Performance Gripsokken 2.0 (zwart, wit)
live: nee, niets gepusht of gepubliceerd
---

# Productpagina 2.0: audit en nieuwe copy (concept v2.0)

Opgesteld door de Website Copy Agent op 2026-11-26. Alles hieronder is concept. Er is niets naar het thema gepusht en niets live gezet. Live zetten gaat via de Goedkeuringsworkflow (Team HÏ Grip).

## 0. Bronnen en beperkingen (lees dit eerst)

Wat ik wel gelezen heb:
- **[JS]** Live productdata `https://www.higrip.nl/products/performance-gripsokken-2-0-zwart.js` (opgehaald 2026-11-26): titel, beschrijving, prijzen, SKU's, barcodes.
- **[TPL]** Het productsjabloon `templates/product.performance-grip-socks-2.json` en `snippets/hi-bundle.liquid` uit de lokale werkthema-kopie (`C:\Users\Test\Werk\theme-snelheid\werkthema`). Dat is de opbouw en de tekst van de pagina zoals het thema die rendert. Het is geen live-HTML.
- Vault: Feiten & Actuele Staat (geverifieerd 2026-11-26 voor de actie), Performance Grip Socks 2.0 (§1 tot §3, §6b), Brand Voice & Tone of Voice, de nagekeken maat-blog (`02_Dashboard/_uitvoer/2026-10-12-blogs/blog-1-welke-maat-gripsokken-nagekeken.html`).

Wat niet gelukt is:
- De live HTML van `/products/performance-gripsokken-2-0-zwart` en `-wit` gaf herhaald **HTTP 429** (Retry-After 60) bij WebFetch. De `.js` van zwart lukte wel; de `.js` van wit niet. Ik kan dus niet bewijzen dat de live pagina exact gelijk is aan [TPL]. Elk citaat uit [TPL] is daarom gemarkeerd, en alles wat ik niet op live heb kunnen zien staat onder "Niet gecontroleerd" (einde sectie A). Herhaal de audit op de live HTML zodra de rate limit weg is.
- WebFetch geeft maximaal korte letterlijke fragmenten terug. De [JS]-citaten hieronder zijn fragment voor fragment overgenomen en dus letterlijk. De wit-pagina is niet apart opgehaald.

---

# A. Audit huidige productpagina

Ernst: **Blokkerend** (claim, beleid of feit dat niet mag blijven staan), **Belangrijk**, **Klein**.

## A1. Feitelijk en claims

1. **Blokkerend. Blessureclaim zonder bron.** [TPL, accordeon "Wat zijn de voordelen van gripsokken?"]: "waardoor sporters stabieler bewegen en minder risico hebben op blessures of blaren." Geen bron in de vault; Friedl et al. 2023 vond geen significante afname van verschuiving. Verwijderen.
2. **Blokkerend. Onbewezen superlatieven.** [TPL, zelfde antwoord]: "Ontworpen door professionals en geschikt voor alle sporten, waardoor je altijd het beste uit je performance haalt." "Door professionals", "alle sporten" en "altijd" hebben geen bron.
3. **Belangrijk. Wetenschapsclaim wijkt af van de formuleringsregel en gaat verder dan de bronnen.** [TPL, "Zijn gripsokken wetenschappelijk bewezen?"]: "ze houden de voet beter op zijn plek, verbeteren stabiliteit en verminderen uitglijden tijdens snelle of explosieve bewegingen." Verifieerd in de vault is: statische wrijvingscoëfficiënt 1,17 tegenover 0,60, sneller slalomparcours, minder voorvoetverschuiving bij afremmen (Apps et al. 2022). "Stabiliteit" en "uitglijden" zijn niet onderbouwd. Het getal "95%" staat er niet, de verplichte zin ("Wetenschappelijk aangetoond: ... 95% meer grip (Apps et al. 2022)") ook niet.
4. **Belangrijk. Bronnenlijst niet in lijn met de vault.** [TPL]: "(Apps et al., 2020; Apps et al., 2022; Friedl et al., 2023)". Apps 2020 (doi 10.1080/02640414.2019.1690618) staat niet als geverifieerd in de vault ([CHECK]). Friedl 2023 is **gemengd** bewijs en wordt hier gebruikt als steun voor "stabiliteit" en "minder uitglijden". Citeer alleen +9,3% benutte tractie bij afremmen.
5. **Belangrijk. Het sterkste verkoopargument zit achter een klik.** [TPL]: accordeonrij "Zijn gripsokken wetenschappelijk bewezen?" staat op `"open_by_default": false`, onderaan de pagina, onder "Gripsokken" als kop. Er is geen zichtbaar bewijsblok.
6. **Belangrijk. Ratings tegenstrijdig met het merkcijfer.** [TPL, social strip]: sterren "★★★★½" hardcoded, zonder cijfer en zonder bron. [TPL, testimonialsectie]: `"rating": 4.5`. Besluit Lars 2-10-2026: merkcijfer is **4,6 ★ met bron Trustpilot**; 4,5 is alleen de stand van reviews op higrip.nl en "geen merkscore". Het cijfer in het Horizon-reviewblok (`show_number: true`) kan ook afwijken ([CHECK] op live).
7. **Belangrijk. Sportersaantal wisselt van schrijfwijze.** [TPL, social strip]: "3.500+ sporters gingen je voor". [JS-beschrijving]: "De keuze van 3500+ sporters." Vaste schrijfwijze: 3500+. Cijfers moeten overal identiek zijn.
8. **Belangrijk. Reviews van vóór de 2.0 staan als bewijs voor de 2.0.** [TPL, "DIT ZEGGEN ONZE SPORTERS."]: "Priscilla Verwaal | 8 mei 2025", "Adri Noorlander | 31 aug 2025", "Dick | 12 juni 2025", "Sharon Burger | 4 sep 2025". De 2.0-brochures en one-pagers dateren van sept 2026; de brochures stonden in mei 2026 nog op 1.0. Deze reviews gaan dus waarschijnlijk over de 1.0 ([CHECK] lanceerdatum 2.0). Op een 2.0-pagina is dat misleidend zonder label.
9. **Belangrijk. Volledige achternamen bij reviews.** [TPL]: "Sharon Burger", "Adri Noorlander", "Priscilla Verwaal". De vault hanteert voornaam plus initiaal (AVG). [CHECK] of er toestemming is voor volledige namen.
10. **Blokkerend. Link naar tegenstrijdig beleid.** [TPL, Product info]: "Besteld? Binnen 1 werkdag verzonden <a href=\"/policies/shipping-policy\">Meer info</a>" en [TPL, FAQ levertijd] "Lees hier meer" naar `/policies/shipping-policy`. Volgens de Feiten-tabel (live 19-10) zegt die pagina nog "vóór 16:00", en `/policies/refund-policy` nog 14 dagen + 25% herbevoorradingskosten. Op de productpagina staat 1 werkdag en 30 dagen: de klik leidt naar een andere belofte (W4). Live opnieuw controleren.
11. **Belangrijk. "Nu op voorraad" is hardcoded.** [TPL, custom_liquid_stock_status]: `<span class="hi-stock-status">...Nu op voorraad</span>`, zonder koppeling aan voorraad. De Feiten noemen voor 12-10 negatieve voorraad voor 2.0 zwart (-43) en wit (-34). Een vaste tekst kan onwaar worden.
12. **Belangrijk. Doorgestreepte adviesprijs.** [JS]: `compare_at_price` 1995 op alle drie varianten (35-38, 39-42, 43-47), prijs 1795. Feiten: de 1-pack-vergelijkingsprijs €19,95 is de retail-adviesprijs en niet te gebruiken als korting. Een doorgestreepte referentieprijs zonder dat €19,95 ooit de verkoopprijs was, is een risico (Omnibus). Besluit voor Lars en Timo; ik wijzig geen prijzen.
13. **Klein. Packkorting naar boven afgerond.** [TPL/hi-bundle]: `pack_savings = '|€9,- Korting|€20,- Korting'`. Rekensom op basis van de Feiten: 3 x €17,95 = €53,85 min €44,95 = **€8,90**; 5 x €17,95 = €89,75 min €69,95 = **€19,80**. De Feiten leggen "€9,-" en "€20,-" als live vast; ik stel de exacte bedragen voor (beslispunt).
14. **Belangrijk. Materiaalsamenstelling niet in de vault.** [TPL, Product info]: "30% Coolmax · 28% Katoen · 25% Polyester · 14% Nylon · 3% Spandex". Alleen "30% Coolmax" staat in de vault. Rest vergelijken met het etiket ([CHECK]); samenstelling is wettelijk verplichte informatie.
15. **Belangrijk. Special cushioning niet bevestigd en met overclaim.** [TPL, zone_7]: "Anatomisch gevormde cushioningpunten zodat jij op elk moment comfort hebt en prestaties kunt leveren." De vault heeft alleen de werkomschrijving "speciale dempingzones onder de voet voor optimale prestaties", door Lars nog te bevestigen. "Op elk moment" en "prestaties kunt leveren" zijn onderbouwd door niets.
16. **Klein. Absolute claims over naden en blaren.** [TPL, expertise]: "Naadloos gebreid, dus niets schuurt en niks scheurt." [TPL, USP]: "Naadloos gebreid: geen stiksels, dus geen wrijving tegen je huid." [JS]: "✓ Naadloze afwerking, geen blaren". "Niks scheurt" heeft geen bron; "geen blaren" staat als voordeel-taal in de productnotitie, maar als belofte zonder voorbehoud is het riskant.
17. **Klein. "Heel Nederland" is niet onderbouwd.** [TPL, trust_heading]: "Sportclubs, sportscholen en retail door heel Nederland". "Vertrouwd door 10+ organisaties" is niet geteld; "heel Nederland" is een bewering zonder bron.
18. **Klein. Vervoerder niet in de vault.** [TPL, levertijd]: "alle bestellingen worden binnen 1 werkdag verzonden via PostNL." PostNL staat niet in de Feiten ([CHECK]); het retourlabel loopt via MyParcel.
19. **Belangrijk. Verzending buiten Nederland ontbreekt.** [TPL, verzendkosten]: alleen "€4,50 per bestelling" en "€35". De Feiten: €5,00 buiten Nederland (BE, DE, AT, FR, GB, IT, LU, PT, CH), gratis vanaf €35 in alle landen. De pagina is ook bereikbaar via hreflang voor andere landen.
20. **Klein. Beschrijving noemt 4 van de 7 features.** [JS]: compressie, grip, naadloos, ademend. Versterkte hiel, Coolmax® en special cushioning ontbreken in de beschrijving (de zones staan wel lager op de pagina). Maten staan niet in de beschrijving.

## A2. Merknaam, tone of voice en spelling

21. **Belangrijk. "u/uw" in drie antwoorden (moet je/jij).** [TPL] "Voor een lange levensduur van uw gripsokken", "Bewaar uw gripsokken op een droge plek", "streven we ernaar om uw bestelling zo snel mogelijk bij u te leveren", "profiteert u van gratis verzending", "Is het product toch niet helemaal wat u had verwacht?", "U kunt uw bestelling binnen 30 dagen na ontvangst retourneren."
22. **Klein. Grammaticafout.** [TPL, retour]: "We hopen dat uw performance naar het hoogste niveau gaan met uw aankoop bij HÏ Grip." Moet "gaat" zijn; de zin is ook slap.
23. **Klein. Grammatica levertijd.** [TPL]: "zorgen wij ervoor dat alle bestellingen worden binnen 1 werkdag verzonden via PostNL." Moet "binnen 1 werkdag worden verzonden". Bovendien: "leveren" in de eerste zin, "verzonden" in de tweede; dat zijn twee verschillende beloftes.
24. **Klein. Ontbrekende spaties in de wasinstructie.** [TPL, bron-HTML]: "op een<strong>zacht programma (30–40°C)</strong>met een<strong>mild wasmiddel</strong>,<strong>altijd binnenstebuiten</strong>om de antislip" en "<strong>Wring de sokken niet uit</strong>om". Dat rendert als "eenzacht", "(30–40°C)met", "binnenstebuitenom" ([CHECK] op live).
25. **Klein. Slogan is geen vaste slogan.** [TPL, social strip]: "Meer grip. Meer controle. Meer winnen." Brand Voice: alleen de primaire tagline en de vaste slogans gelden.
26. **Klein. Primaire tagline is aangepast.** [TPL, FAQ sporten]: "zodat jij doorgaat waar anderen stoppen." Vaste schrijfwijze: "Ga door waar anderen stoppen."
27. **Klein. Vulwoorden.** [JS]: "Ervaar maximale grip en controle tijdens jouw sport", "ook perfect voor tennis, basketbal, fitness en pilates". "Perfect" en "ervaar" zijn vulling en geen meetbare claim.
28. **Klein. Vinkjes als opsomming.** [JS]: vijf regels beginnend met "✓ " ("✓ Antislip sokken met siliconen grippatroon voor stabiliteit en controle", enzovoort). De agentregel verbiedt symbool-opsommingen in tekst.
29. **Klein. Streepjes inconsistent.** [JS] "15-20 mmHg" tegen [TPL] "15–20 mmHg" en "30–40°C", "35–47". Eén schrijfwijze kiezen: in deze copy het koppelteken (geen gedachtestreep).
30. **Klein. Linkteksten.** [TPL]: "Klik hier", "Lees hier meer", "deze link", "Ontdek hier". Beschrijvend maken (toegankelijkheid en SEO).
31. **Klein. Kopjes zonder inhoud.** [TPL]: H2 "Gripsokken" boven de accordeon (geen benefit en geen keyword-nut), H2 "Verzending & Retour" (ampersand).
32. **Klein. Engelse productnaam op de NL-webshop.** [TPL, anatomie]: `"image_alt": "Performance Grip Socks 2.0, opbouw van de sok"`. Op higrip.nl heet het product Performance Gripsokken 2.0 (Brand Voice). Bestandsnamen met "HI_Grip" (zonder trema) zijn technisch, maar worden ook als alt-fallback zichtbaar voor zoekmachines.
33. **Klein. Beschrijving bevat vreemde opmaak.** [JS-extractie]: de HTML bevat naast `<p>` en `<br>` ook `<span>` en `<code>` tags. [CHECK] of daar nog resten van een editor in zitten.

## A3. Zaken buiten copy die ik signaleer voor de Design Agent (niet mijn domein)

34. **Font.** [TPL, testimonialsectie]: `"heading_font": "josefin_sans_n4"` (ook voor rating-, tekst- en knopfont). Alleen Poppins is toegestaan.
35. **Trustpilot-groen buiten sterren.** [TPL]: `"card_shadow_color": "#00b67a"` als schaduw van de reviewkaarten. Alleen voor review-sterren.
36. **Kleurgradiënt.** [TPL]: `"background_gradient": "linear-gradient(0deg, rgba(255,255,255,1) ... rgba(0,17,167,1) 50% ...)"`. Royal blue-verloop is geen toegestaan merkverloop (wit naar zwart).
37. **Knop reviews.** [TPL]: tekst "Ontdek meer", `button_radius: 8`, `button_custom_styling`. Vage tekst, geen pill met chevron.
38. **Kleurconsistentie.** [TPL]: de zwarte productpagina gebruikt "Performance_Gripsokken_2.0_wit_voor_aanzicht.png" in de FAQ-sectie en "Gripsokken_wit_voetbal_HI_Grip.jpg" in de expertisesectie ([CHECK] of dat bedoeld is).

## A4. Structuur en ontbrekende elementen

39. **Geen benefit-kop.** De H1 is alleen de productnaam: `<h1><strong>{{ closest.product.title }}</strong></h1>`. Opbouw voor een productpagina is: benefit-headline, bewijs of spec, bezwaren, social proof, CTA.
40. **Volgorde.** [TPL, order]: koopblok, expertise, anatomie, reviews, logo's, FAQ in accordeon. Bewijs (1,17 vs 0,60) staat nergens zichtbaar; bezwaren zitten in een dichte accordeon met 7 vragen verdeeld over twee rijen met alleen algemene teksten.
41. **Geen risk reversal bij de knop.** De 30 dagen retour staat pas in het blok "Product info", onder spec-strip en social proof. Direct onder de knop staat alleen "Besteld? Binnen 1 werkdag verzonden".
42. **Geen maatadvies.** [TPL/hi-bundle]: label is alleen `size_label = 'Maat'`. Er is geen regel over schoenmaat naar sokmaat en niets over "tussen twee maten, kies de grotere". Een verkeerde maat kost retouren.
43. **Geen sportsecties voor de kernsporten.** [TPL, Product info]: "Voetbal, pilates, tennis, hardlopen en meer"; [JS]: "voetbal, tennis, basketbal, fitness en pilates". **Padel en rugby ontbreken** (beachheads tennis/padel, voetbal, rugby; check W8).
44. **Geen vergelijking 1.0 en 2.0, geen antwoord op "in welke schoen", "blaren" of "wassen" op ooghoogte.** Wassen en sporten staan wel in de accordeon; de rest ontbreekt.
45. **Geen FAQPage-schema bij een zichtbare FAQ** (al bekend bij SEO, regressiecheck 2-11). Niet mijn domein; voor de volledigheid.
46. **Lopende actie niet uitgelegd op de pagina.** [CHECK live]: in [TPL] staat geen blok over HÏ Performance Days (de announcementbar met aftelling staat site-breed). Bezoekers van de productpagina zien dus niet wat "x2" voor hun pack betekent.
47. **Trustpilot-bron ontbreekt bij de sterren.** [TPL]: de sterren in de social strip hebben geen bron; de enige Trustpilot-link zit in de knop "Ontdek meer" onderaan.
48. **Knoptekst.** [nl.json]: "Aan winkelwagen toevoegen" (standaardtekst van het thema). Lang, generiek en geen "kies eerst je maat"-status ([CHECK] in prototype v1.0 was dat wel zo).

## A5. Wat klopt wel (gecontroleerd)

- Prijzen [JS]: €17,95 per variant; packs [TPL/hi-bundle]: 3-pack €44,95 en 5-pack €69,95; per paar €14,98 en €13,99 (gelijk aan Feiten).
- Maten 35-38 · 39-42 · 43-47, SKU PGSZ201/202/203 en barcodes 9110024809242/-259/-266 [JS] kloppen met de EAN-lijst.
- €4,50 verzending, gratis vanaf €35, binnen 1 werkdag verzonden, 30 dagen retour [TPL] kloppen met de vastgestelde waarden (mits de beleidspagina's volgen, zie fout 10).
- "3500+" in de beschrijving [JS], "De keuze van 3500+ sporters" is een vaste formulering.
- Merknaam "HÏ Grip" staat met trema in alle geciteerde teksten. Geen gedachtestreepjes of pijltjes in de lopende tekst (alleen tussenstreepjes in getalbereiken).
- De wrijvingscoëfficiënt 1,17 tegen 0,60 is correct overgenomen.

## A6. Niet gecontroleerd

- Live HTML van zwart en wit (429), de wit-pagina in zijn geheel (zie sectie E voor de te verwachten afwijking), mobiele weergave, EN-versie, JSON-LD op de pagina, het sticky-koopbalk, de actiewinkelwagen en de tekst van het Horizon-reviewblok.
- Of [TPL] (werkthema-kopie) volledig gelijk is aan het live thema.

---

# B. Nieuwe copy

## B0. Uitgangspunten

- Alle tekst is concept, je/jij, geen gedachtestreepjes, geen pijltjes, geen emoji, geen vinkjes als opsomming. Geen eyebrows boven koppen (smaakregel van het team: eyebrow-labels zijn AI-slop).
- Koppen in de pagina staan hier in normale schrijfwijze; het thema zet ze in UPPERCASE.
- Het getal 95% staat nooit zonder bronregel en altijd als categoriebewijs. Nergens "HÏ Grip getest".
- Prijzen en aantallen komen uit de Feiten (zwart en wit hebben dezelfde prijzen). Afgeleide bedragen (per paar, besparing) zijn gerekend op die prijzen en afgerond op de cent.
- Echte reviews staan alleen letterlijk uit §6b van de productnotitie. Sterren per review zijn nog [CHECK], dus ik zet geen sterrenaantal per review in de copy.
- Knoppen: pill met chevron, zwart op wit of wit op zwart, maximaal twee woorden. De chevron is design, geen tekst.
- Psychologie per blok staat onder "Psychologie". Geen nep-urgentie: de enige deadline is de echte actietijd (30-11-2026 23:59). Geen "nog maar X op voorraad", geen verzonnen cijfers.
- Ontbrekende feiten staan als **[HÏ GRIP]**.

---

## B1. Koopblok (zonder actie)

**Titel (H1, vast voor SEO):** Performance Gripsokken 2.0 Zwart
(Op de witte pagina: "Performance Gripsokken 2.0 Wit".)

**Zekerheidsregel boven de titel (kort):** 4,6 ★ Trustpilot · De keuze van 3500+ sporters

**Subregel, twee varianten**

**Variant A: Probleem/identiteit**
Je voet blijft staan. Jij niet.

**Variant B: Performance (meetbaar)**
95% meer grip dan een gewone sok.*
*Gripsokken tegenover gewone sokken: statische wrijvingscoëfficiënt 1,17 tegenover 0,60 (Apps et al. 2022, Journal of Sports Sciences). Onderzoek naar gripsokken in het algemeen.

**Aanbeveling:** B voor zoekverkeer en retargeting (meetbare claim eerst), A voor koud verkeer uit ads en social. Gekozen voor het prototype: **B**, met A als alternatieve test.

**Ondersteunende regel (onder de subregel, 1 zin):**
Compressie, naadloos gebreid, Coolmax® en siliconen grip in één sok.

**Pack-keuze** (3-pack voorgeselecteerd zoals nu live)

| Pack | Label | Prijs | Per paar | Extra |
|---|---|---|---|---|
| 1 paar | (geen) | €17,95 | | |
| 3 paar | Meest gekozen | €44,95 (doorgestreept €53,85) | €14,98 per paar | Gratis verzending · Bespaar €8,90 |
| 5 paar | Meest voordelig | €69,95 (doorgestreept €89,75) | €13,99 per paar | Gratis verzending · Bespaar €19,80 |

Noot **[HÏ GRIP]**: de live labels zeggen "€9,- Korting" en "€20,- Korting" (afgerond). Ik stel de exacte besparingen voor; Lars/Timo kiezen.
De doorgestreepte €19,95 bij het 1-pack gebruik ik niet (Feiten).

**Microcopy bij de maat**
- Label: Kies je maat
- Hulptekst: Je maat volgt je schoenmaat: 35-38, 39-42 of 43-47. Zit je op de grens, bijvoorbeeld 38,5? Kies de grotere maat.
- Link: Bekijk de maattabel **[HÏ GRIP: URL maat-blog zodra die live staat]**
- Foutmelding zonder maat: Kies eerst je maat.
- **[HÏ GRIP]** Kun je in een pack van 3 of 5 per paar een andere maat kiezen, of geldt één maat voor het hele pack? De microcopy moet dat zeggen.

**Knoptekst, twee varianten (pill met chevron)**
**Variant A: Helderheid** In winkelwagen
**Variant B: Identiteit** Pak grip
**Aanbeveling:** A voor de hoofdknop (Systeem 1, geen interpretatie nodig), B voor de sticky balk of een testvariant.

**Belofte onder de knop** (één regel, direct onder de knop)
Binnen 1 werkdag verzonden · 30 dagen retour · Gratis verzending vanaf €35, daaronder €4,50

**Zekerheid bij de maat** (kleiner, onder de belofte)
Past de maat niet? Retourneer binnen 30 dagen na ontvangst.

**Psychologie (koopblok)**
- *Anchoring:* de prijs per paar zakt van €17,95 naar €14,98 en €13,99; de doorgestreepte som van losse paren (echte prijs per stuk x aantal) is het anker. Niet de €19,95.
- *Default en keuzehulp (Kahneman, Systeem 1):* 3-pack voorgeselecteerd en gelabeld "Meest gekozen". Dat is een eerlijk label zolang het ook waar is [HÏ GRIP: bevestig met orderdata voor 2.0].
- *Social proof (Cialdini):* 3500+ en 4,6 ★ Trustpilot boven de titel, met bron.
- *Risk reversal:* retour en maatadvies direct onder de knop, op het moment van twijfel.
- *Cognitieve ease:* maximaal één primaire actie, korte regel onder de knop.

---

## B1-actie. Koopblok met actie HÏ Performance Days (tot 30-11-2026 23:59)

Alles uit B1 blijft staan, behalve dit:

**Actieblok boven de pack-keuze, kop in twee varianten**

**Variant A: Emotie/identiteit**
Verdubbel je grip.

**Variant B: Urgentie (echte deadline)**
x2 tot 30 november 23:59.

**Aanbeveling:** A voor de merkstem en terugkerende bezoekers, B voor bezoekers uit ads met korte aandacht. Gekozen: **A als kop, B als regel eronder.**

**Uitleg (twee korte regels)**
HÏ Performance Days: verdubbel je order. Je krijgt hetzelfde aantal paar gratis erbij.
Het gratis actiepaar komt vanzelf in je winkelwagen. Geen code nodig.

**Pack-keuze met x2** (prijzen blijven die van de pagina; alleen het aantal paren verdubbelt)

| Pack | Label | Prijs | Je krijgt | Per paar |
|---|---|---|---|---|
| 1 paar | x2 | €17,95 | 2 paar | €8,98 per paar |
| 3 paar | x2 · Meest gekozen | €44,95 | 6 paar | €7,49 per paar |
| 5 paar | x2 · Meest voordelig | €69,95 | 10 paar | €7,00 per paar (afgerond) |

Regel onder de keuze: Gratis verzending vanaf €35. Een x2 op 1 paar (€17,95) valt eronder, dus €4,50 verzending.

**Knoptekst, twee varianten**
**Variant A: Voordeel** Verdubbel
**Variant B: Identiteit** Pak x2
**Aanbeveling:** A voor bezoekers die de actie al kennen via de balk, B voor nieuwe bezoekers.

**Belofte onder de knop (actie)**
x2 tot 30 november 23:59 · Binnen 1 werkdag verzonden · 30 dagen retour

**Psychologie (actie)**
- *Loss aversion:* de aftelling is echt; na 30-11-2026 23:59 betaal je weer voor elk paar. Geen herhaalde timers, geen valse "laatste kans". Haal dit blok na de eindtijd vanzelf weg (zie Feiten: sectie Lopende actie leegmaken).
- *Anchoring:* prijs per paar zonder actie (€17,95) naast prijs per paar met actie (€7,49). Beide cijfers zijn waar.
- *Reciprocity (Cialdini):* je geeft eerst, het gratis paar zit al in je winkelwagen.
- *Framing:* x2 als label, nooit "1+1" (Feiten).

**[HÏ GRIP]** Open punten voor de actie:
1. Welke kleur en maat heeft het gratis actiepaar (zelfde als je keuze, of kiest de klant)?
2. Mag het gratis paar retour? Geldt de 30 dagen retour voor het gratis paar?
3. Telt het gratis actiepaar mee voor de drempel van €35? (Ik ga ervan uit van niet: de drempel volgt het betaalde bedrag.)

---

## B2. Wat je merkt (7 features, benefit eerst)

**Kop, twee varianten**

**Variant A: Performance/specifiek**
Zeven zones. Eén sok.

**Variant B: Gevoel/situatie**
Dit merk je als het erop aankomt.

**Aanbeveling:** A voor een kalme productpagina met lezers die vergelijken (past bij Oura-patroon: onderdeel, dan betekenis), B voor sport-landingspagina's. Gekozen: **A**.

**Intro (1 zin, onder de kop)**
Elke zone doet iets anders. Samen houden ze je voet stil in je schoen.

Per feature: eerst wat je merkt, dan de spec.

**1. Compressie**
Ondersteuning die je blijft voelen.
15-20 mmHg compressie ondersteunt je doorbloeding tijdens inspanning.

**2. Versterkte hiel**
Stevig waar de druk het grootst is.
Extra dikte precies onder je hiel.

**3. Ademend vermogen**
Koelere voeten, ook als het zwaar wordt.
Open structuur bovenop je voet laat lucht door.

**4. Maximale grip**
Je voet blijft staan als jij versnelt, stopt of draait.
Siliconen zones houden je voet vast in je schoen.

**5. Coolmax®**
Droge voeten tot het einde.
30% Coolmax® voert vocht direct af van je huid.

**6. Naadloos**
Geen stiksels die schuren.
Rondom gebreid zonder stiksels, met een naadloze teenzone.

**7. Special cushioning**
Demping waar je voet die nodig heeft.
Speciale dempingzones onder je voet.
**[HÏ GRIP]** Werkomschrijving uit de productnotitie, nog door Lars te bevestigen. Ik laat "optimale prestaties" weg (onbewezen) en gebruik niet de huidige livetekst ("Anatomisch gevormde cushioningpunten ... op elk moment"), omdat die niet in de vault staat.

**Afsluitende regel onder de 7 (met link)**
Wil je weten wat er veranderd is tegenover de 1.0? Zie de vergelijking in de veelgestelde vragen.

**Psychologie (wat je merkt)**
- *Kahneman:* korte, concrete zinnen; eerst het gevoel (Systeem 1), dan de spec (Systeem 2) voor wie wil controleren.
- *Cialdini (autoriteit light):* specifieke getallen (15-20 mmHg, 30% Coolmax®) wekken vertrouwen zonder claim.
- *Klant is de held:* vrijwel elke regel gaat over "je voet" en "jij".

---

## B3. Bewijsblok (claim met bron, plus echte reviews)

**Kop, twee varianten**

**Variant A: Performance**
95% meer grip.

**Variant B: Sociaal bewijs**
De keuze van 3500+ sporters.

**Aanbeveling:** A direct boven de cijfers (claim met bron), B als kop boven de reviews. Gekozen: **A voor de cijfers, B voor de reviews.**

**Grote cijfers (twee losse stats, geen tabel)**
1,17 · Gripsok
0,60 · Gewone sok
Label onder beide: statische wrijvingscoëfficiënt

**Hoofdzin**
Wetenschappelijk aangetoond: gripsokken verhogen de statische wrijvingscoëfficiënt van 0,60 naar 1,17. Dat is 95% meer grip (Apps et al. 2022).

**Bronregel (zichtbaar, direct onder de stats)**
Bron: Apps et al. 2022, Journal of Sports Sciences 40(12), doi 10.1080/02640414.2022.2080163. Dit is onderzoek naar gripsokken in het algemeen, geen test van de HÏ Grip-sok zelf.

**Aanvullend bewijs (drie korte regels, elk met bron)**
- In dezelfde studie liepen sporters sneller een slalomparcours en verschoof de voorvoet minder bij het afremmen (Apps et al. 2022).
- Een tweede studie met 11 voetballers vond ook een sneller slalomparcours (IJKHE 2023, doi 10.1080/24711616.2023.2237449).
- Friedl et al. 2023 (Footwear Science, doi 10.1080/19424280.2023.2212628) vond 9,3% meer benutte tractie tijdens het afremmen.

**Optionele eerlijkheidsregel** (Lars beslist): "Niet elke meting schoot omhoog: in die laatste studie werden de tijden niet sneller." Reden: de vault noemt Friedl uitdrukkelijk gemengd; transparantie verhoogt geloofwaardigheid en voorkomt dat de claim breekt.

**Reviews** (letterlijk uit §6b van de productnotitie, niet ingekort)

Kop: De keuze van 3500+ sporters. 4,6 ★ op Trustpilot. (Link: https://nl.trustpilot.com/review/higrip.nl)
Kleine regel: Reviews uit onze webshop. **[HÏ GRIP]** Voeg "over de 1.0 en de 2.0" toe zodra bevestigd is welke review over welk model gaat (de reviews zijn van 2025).

> "De sokken doen echt wat er beloofd word, je merkt echt verschil in vergelijking met andere sokken, de grip maakt het verschil. Kwaliteit ook super na diverse keren wassen. Een top product dus."
Adri N.

> "Gripsokken zitten lekker en grip werkt top! Team heeft passie voor hun onderneming."
Priscilla V.

> "Sokken zitten uitstekend en sterke stof met goede grip. Ook voor wandelen fijne sokken. Snelle levering."
Dick

> "De sokken zitten echt super lekker! Heb absoluut geen spijt van de aankoop en wil het iedereen aanbevelen die kwalitatief goede sokken wil hebben."
Lydia

**[HÏ GRIP]** Sterren per review staan nog als [CHECK] in de productnotitie; geen sterren tonen tot dat is nagekeken. Datum optioneel: Adri N. (31 aug 2025), Priscilla V. (8 mei 2025), Dick (12 jun 2025), Lydia (13 jan 2026). De overige drie reviews uit §6b (Rox, Eveline, Sharon B.) mogen letterlijk in de slider; ze zijn geen onderdeel van deze 4.

**Partners (logoregel)**
Onze partners: Concordia, V.V. Lyra, V.V. Spirit, MyHealthclub, Sport 2000, SVS, SYTH en Hogeschool Rotterdam.
Ik schrijf geen "door heel Nederland" en geen aantal organisaties (10+ is niet geteld).

**Psychologie (bewijs)**
- *Autoriteit:* peer-reviewed bron zichtbaar bij het getal.
- *Pratfall/transparantie:* "geen test van de HÏ Grip-sok zelf" en de gemengde Friedl-uitkomst kosten een beetje glans en winnen vertrouwen.
- *Social proof:* echte reviews letterlijk, bron Trustpilot bij het cijfer.
- *Anchoring:* 0,60 naast 1,17 maakt het verschil zichtbaar zonder uitleg.

---

## B4. Voor wie: sporten (tennis/padel, voetbal, rugby)

**Kop, twee varianten**

**Variant A: Identiteit**
Gemaakt voor jouw sport.

**Variant B: Probleem**
Waar glijd jij nu nog?

**Aanbeveling:** A voor een brede productpagina, B voor verkeer uit ads op een specifieke sport. Gekozen: **A**.

**Tennis en padel**
Starten, stoppen, scherp draaien. Van de eerste bandeja tot de laatste chiquita houden de siliconen zones je voet vast in je schoen.
Link: Gripsokken voor tennis en padel **[HÏ GRIP: URL sportpagina]**

**Voetbal**
Versnellen, afremmen, draaien met de bal. Een onderzoek onder 11 voetballers vond een sneller slalomparcours met gripsokken (IJKHE 2023).
Link: Gripsokken voor voetbal **[HÏ GRIP: URL sportpagina]**

**Rugby**
Sidestep, sprint, contact. Je voet blijft vast in je schoen als je van richting wisselt.
Link: Gripsokken voor rugby **[HÏ GRIP: URL sportpagina]**

**Regel onder de drie kaarten**
Ook te dragen bij pilates, fitness en basketbal. Ontdek jouw sport. (Link: /pages/ontdek-jouw-sport)

**Psychologie (sporten)**
- *Identiteit en unity (Cialdini):* de bezoeker herkent zijn sport en zijn jargon (bandeja, chiquita, sidestep).
- *Relevantie (Kahneman):* een bekende situatie (starten, stoppen, draaien) laat het voordeel in één zin landen.
- Geen sportspecifieke prestatieclaim zonder bron; alleen de voetbal-regel heeft een studie.
- Asymmetrische layout (niet drie gelijke kaarten) is een zaak voor de Design Agent.

---

## B5. Bezwaren-FAQ (8 vragen)

**Kop, twee varianten**

**Variant A: Zekerheid**
Alles wat je wilt weten voor je bestelt.

**Variant B: Bezwaar**
Twijfel je? Dit vragen sporters.

**Aanbeveling:** A voor lezers die al bijna kopen, B voor koud verkeer. Gekozen: **A**.

**1. Werkt het echt?**
Gripsokken verhogen de statische wrijvingscoëfficiënt van 0,60 (gewone sok) naar 1,17. Dat is 95% meer grip (Apps et al. 2022, Journal of Sports Sciences). In dat onderzoek liepen sporters ook sneller een slalomparcours en verschoof de voorvoet minder bij het afremmen. Het gaat om onderzoek naar gripsokken in het algemeen, niet om een test van de HÏ Grip-sok zelf. Lees ook wat sporters zeggen: de keuze van 3500+ sporters, 4,6 ★ op Trustpilot.

**2. Welke maat kies ik?**
Je kiest op je schoenmaat: 35-38, 39-42 of 43-47. Schoenmaat 39 is dus maat 39-42, schoenmaat 43 is maat 43-47. Zit je op de grens of heb je een halve maat, bijvoorbeeld 38,5? Kies dan de grotere maat. Past hij toch niet? Je hebt 30 dagen om te retourneren.

**3. Hoe was ik mijn gripsokken?**
Was ze bij voorkeur met de hand in koud of lauw water, of in de wasmachine op een zacht programma (30-40°C) met een mild wasmiddel. Doe ze altijd binnenstebuiten, dat beschermt de antislip. Laat ze aan de lucht drogen en gebruik geen droger: hitte kan de elasticiteit en de grip aantasten. Wring ze niet uit, dat vervormt het grippatroon.
**[HÏ GRIP]** Wasvoorschrift vergelijken met het etiket; ik heb de huidige paginatekst herschreven in de je-vorm en met spaties hersteld.

**4. In welke schoen kan ik ze dragen?**
In de sportschoen die je al hebt: voetbalschoenen, tennis- en padelschoenen, rugbyschoenen en zaalschoenen. Trek de sok glad aan, zodat er geen plooien onder je voet zitten. Controleer dat de gripzones onder je voetzool liggen, en trek daarna pas je schoen aan.
**[HÏ GRIP]** Bevestig of de dikte van de sok in smalle of strakke schoenen (bijvoorbeeld klim- of schaatsschoenen) een beperking is.

**5. Wat is het verschil met de 1.0?**
De 2.0 heeft 15-20 mmHg compressie, is naadloos gebreid en heeft 30% Coolmax®. De 2.0 komt in drie maten (35-38, 39-42, 43-47), de 1.0 in twee (34-39 en 40-46), waardoor de maatvoering nauwkeuriger is en de sok strakker aansluit. De 2.0 kost €17,95 per paar, de 1.0 vanaf €14,95. De 1.0 is een gripsok met versterkte zool. Wil je compressie en een naadloze pasvorm, kies dan de 2.0.
**[HÏ GRIP]** De volledige specificaties van de 1.0 zijn niet vastgelegd in de vault. Vul aan welke van de zeven zones de 1.0 niet heeft.

**6. Krijg ik blaren van gripsokken?**
Wij beloven geen blaarvrije voeten, want dat hangt ook af van je schoen en je maat. Wat we wel doen: de sok is rondom gebreid zonder stiksels, de hiel is extra dik en Coolmax® voert vocht van je huid af. Dat haalt een deel van de wrijving weg. Kies de maat die bij je schoenmaat hoort en trek de sok glad aan.
**[HÏ GRIP]** De productnotitie staat "geen blaren" toe als voordeel-taal. Ik heb voor een voorzichtigere formulering gekozen (risico op een absolute belofte). Lars beslist.

**7. Hoe snel is het binnen en wat kost verzending?**
Je bestelling wordt binnen 1 werkdag verzonden. Verzending kost €4,50 en is gratis vanaf €35. Verzend je naar België, Duitsland, Oostenrijk, Frankrijk, het Verenigd Koninkrijk, Italië, Luxemburg, Portugal of Zwitserland? Dan kost verzenden €5,00 en geldt ook daar gratis vanaf €35.
**[HÏ GRIP]** Levertijd na verzending en de vervoerder zijn niet in de vault (de huidige tekst noemt PostNL). Laat het weg tot het bevestigd is. Zet pas een link naar het verzendbeleid zodra `/policies/shipping-policy` ook "binnen 1 werkdag verzonden" zegt.

**8. Kan ik retourneren?**
Ja. Je kunt je bestelling binnen 30 dagen na ontvangst retourneren. Start je retour via de retourpagina. **[HÏ GRIP: bevestig retourvoorwaarden en dat `/policies/refund-policy` is aangepast aan 30 dagen zonder 25% herbevoorradingskosten voordat deze tekst live gaat.]**

**Extra regels in de actievariant (alleen tot 30-11-2026 23:59)**
- Bij 2 (maat): **[HÏ GRIP]** welke maat krijgt het gratis actiepaar?
- Bij 7 (verzending): Gratis verzending vanaf €35 geldt op wat je betaalt. **[HÏ GRIP: bevestig dat het gratis actiepaar niet meetelt.]**
- Bij 8 (retour): **[HÏ GRIP]** retourregel voor het gratis actiepaar.

**Psychologie (FAQ)**
- *Bezwaren wegnemen* in de volgorde van twijfel: werkt het, past het, onderhoud, schoen, versie, blaren, levering, retour. De koopdrempel zit bij "past het" en "krijg ik gedoe": die staan hoog.
- *Loss aversion:* de angst voor een verkeerde maat of een tegenvaller wordt weggenomen met 30 dagen retour.
- *Transparantie:* "geen belofte van blaarvrije voeten" en "geen test van de HÏ Grip-sok" bouwen vertrouwen.
- Bij uitvoering: FAQPage-schema is een taak van de SEO Agent en moet exact deze tekst volgen.

---

## B6. Slot-CTA

### Zonder actie

**Kop, twee varianten**

**Variant A: Identiteit**
Ga door waar anderen stoppen.

**Variant B: Risk reversal**
30 dagen om het zelf te merken.

**Aanbeveling:** A voor lezers die al overtuigd zijn (merktagline, vaste schrijfwijze), B voor lezers die twijfelden bij de FAQ. Gekozen: **A**.

**Subregel**
Performance Gripsokken 2.0, vanaf €17,95 per paar. Binnen 1 werkdag verzonden, 30 dagen retour.

**Knoptekst, twee varianten**
**Variant A: Bestel** Bestel
**Variant B: Maat** Kies je maat
**Aanbeveling:** A bij een voorgeselecteerde maat, B als de maat nog niet gekozen is.

### Met actie (tot 30-11-2026 23:59)

**Kop, twee varianten**

**Variant A: Urgentie (echt)**
Nog tot 30 november: verdubbel je order.

**Variant B: Identiteit**
Ga door waar anderen stoppen. Nu x2.

**Aanbeveling:** A voor bezoekers die via de balk komen, B voor merkbezoekers. Gekozen: **B als kop, A als regel eronder.**

**Subregel**
Je krijgt hetzelfde aantal paar gratis erbij. Actie tot 30 november 23:59. Binnen 1 werkdag verzonden, 30 dagen retour.

**Knoptekst, twee varianten**
**Variant A** Verdubbel
**Variant B** Pak x2

**Psychologie (slot)**
- *Commitment:* de bezoeker heeft het bewijs, de FAQ en de reviews gelezen; de slotactie is klein en één.
- *Identiteit:* de tagline werkt omdat de lezer zichzelf al als sporter ziet.
- *Loss aversion (actie):* alleen de echte deadline en het echte aanbod (hetzelfde aantal paar gratis).
- *Risk reversal:* 30 dagen retour staat in de subregel, vlak naast de knop.

---

# C. Overzicht psychologie per blok

| Blok | Principe | Toepassing | Wat er niet in zit |
|---|---|---|---|
| Koopblok | Anchoring, default, social proof, risk reversal | Prijs per paar daalt per pack; 3-pack voorgeselecteerd; 4,6 ★ Trustpilot en 3500+; retour onder knop | Geen voorraadclaims, geen "bestel nu" |
| Actie (x2) | Loss aversion, reciprocity, framing | Echte deadline 30-11 23:59; gratis paar zit al in de winkelwagen | Geen timer die zich herhaalt, geen "laatste kans" |
| Wat je merkt | Systeem 1 voor Systeem 2, klant is de held | Benefit eerst, spec daarna | Geen onbewezen belofte (blessures, "altijd") |
| Bewijs | Autoriteit, pratfall, social proof | Bron bij elk getal; "geen test van de HÏ Grip-sok" | Geen "HÏ Grip getest", geen verzonnen reviews |
| Sporten | Unity, relevantie | Sportjargon per beachhead | Geen sportspecifieke claim zonder bron |
| FAQ | Bezwaren, loss aversion | 8 vragen in volgorde van twijfel | Geen belofte van blaarvrije voeten |
| Slot-CTA | Commitment, identiteit, risk reversal | Eén actie, tagline of 30 dagen | Geen dubbele CTA |

---

# D. Openstaande feiten en beslissingen

**[HÏ GRIP] ontbreekt of is niet bevestigd:**
1. Werkomschrijving special cushioning (Lars).
2. Sterren per review (productnotitie: [CHECK]) en welk model elke review betreft; toestemming volledige namen.
3. Bijsturing van de verklaring over blaren: "geen blaren" (vault) of de voorzichtige formulering (mijn voorstel).
4. Specificaties van de 1.0 om het verschil objectief te maken.
5. Materiaalsamenstelling en wasvoorschrift tegen het etiket.
6. Vervoerder en levertijd na verzending.
7. Bevestigen dat `/policies/shipping-policy` en `/policies/refund-policy` zijn gelijkgetrokken (1 werkdag, 30 dagen, geen 25%). Zolang dat niet zo is: geen link naar die pagina's vanuit de productpagina.
8. Sportpagina-URL's voor tennis/padel, voetbal en rugby en de URL van de maat-blog.
9. Kunnen packs verschillende maten bevatten?
10. Actie: kleur en maat van het gratis paar; retour van het gratis paar; telt het mee voor €35?
11. Packkorting exact (€8,90 en €19,80) of afgerond (€9,- en €20,-): beslissing Lars/Timo.
12. Doorgestreepte €19,95 laten staan of niet: beslissing Lars/Timo (Omnibus-risico).
13. Eigen meetrapport van de HÏ Grip-sok: dan mag de claim anders.

**Gesignaleerd aan andere agents (niet door mij uit te voeren):**
- SEO Agent: FAQPage-schema, meta, link-teksten; Apps 2020 als bron controleren.
- Design Agent: Josefin Sans, Trustpilot-groene schaduw, blauwe gradiënt, knopvorm reviews, kleur van foto's.

---

# E. Pagina wit: wat anders is

Dezelfde copy, met deze verschillen:
- H1: Performance Gripsokken 2.0 Wit. Alle andere kopteksten, claims en prijzen gelijk.
- Foto's, alt-teksten en kleurkeuze (het kleurblok toont wit als actief).
- SKU's PGSW201/202/203 en barcodes 9110024809211/-228/-235 (uit de EAN-lijst; de `.js` van wit kon ik niet ophalen: [CHECK]).
- Bundel-ID's en packfoto's: in `hi-bundle` heeft wit eigen ID's en eigen packafbeeldingen (`..._Wit_3-pack_...`).
- De audit hierboven is voor wit **niet los** op live gecontroleerd. In het werkthema delen beide producten dezelfde sjabloonlogica; afwijkingen op de live wit-pagina (voorraad, reviews, aanvullende tekst) moeten nog worden nagelopen.

---

# F. Gekozen headlines en CTA's (voor het prototype)

| Blok | Gekozen | Alternatief (A/B-test) |
|---|---|---|
| Subregel koopblok | B: 95% meer grip dan een gewone sok.* (met bronregel) | A: Je voet blijft staan. Jij niet. |
| Knop koopblok | A: In winkelwagen | B: Pak grip |
| Actiekop | A: Verdubbel je grip. (regel eronder: x2 tot 30 november 23:59.) | B: x2 tot 30 november 23:59. |
| Knop actie | A: Verdubbel | B: Pak x2 |
| Wat je merkt | A: Zeven zones. Eén sok. | B: Dit merk je als het erop aankomt. |
| Bewijs | A: 95% meer grip. (en B boven de reviews: De keuze van 3500+ sporters.) | B: De keuze van 3500+ sporters. |
| Sporten | A: Gemaakt voor jouw sport. | B: Waar glijd jij nu nog? |
| FAQ | A: Alles wat je wilt weten voor je bestelt. | B: Twijfel je? Dit vragen sporters. |
| Slot (zonder actie) | A: Ga door waar anderen stoppen. | B: 30 dagen om het zelf te merken. |
| Slot (met actie) | B als kop: Ga door waar anderen stoppen. Nu x2. (regel: nog tot 30 november) | A: Nog tot 30 november: verdubbel je order. |
| Knop slot | A: Bestel | B: Kies je maat |
