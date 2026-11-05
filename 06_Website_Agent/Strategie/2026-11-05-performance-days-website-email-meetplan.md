---
type: plan
gebied: website
datum: 2026-11-05
status: concept
eigenaar: Website Agent
bron-kaart: t_2f4e813f
briefing: 08_Operations_Agent/2026-11-05-briefing-performance-days.md
---

# HÏ Performance Days (BF 27-11-2026): website, e-mail en meetplan

> Map: [[06 Website Agent — Index]]

Alleen advies, read-only. Niets live gewijzigd, geen kortingen aangemaakt, geen campagnecontent gepubliceerd, geen financiële data gelezen. Ads Manager valt buiten dit plan (Ads Agent, niet geactiveerd); vragen daarover staan als [ADS-ONGETOETST]. Externe bronnen (Shopify Help Center, ACM Leidraad) zijn alleen als data gebruikt.

## 1. Kernbevindingen (ernst hoog naar laag)

1. **HOOG: korting en €35-drempel gaan niet samen bij 1.0.** Shopify toetst prijsgebaseerde verzendtarieven op het winkelwagentotaal na kortingen (Shopify Help Center, troubleshooting shipping rates). Gratis-verzenddrempel op onze site is €35 (Feiten). Rekenvoorbeeld uit prijzen in Feiten:

| Mandje | Betaald incl. btw | Per paar | Verzending |
|---|---|---|---|
| 1.0, 2 kopen + 2 gratis (4 paar) | €29,90 | €7,48 | €4,50 (onder €35) |
| 1.0, 3 + 3 (6 paar) | €44,85 | €7,48 | gratis |
| 2.0, 2 + 2 (4 paar) | €35,90 | €8,98 | gratis (€0,90 boven drempel) |
| 2.0, 3 + 3 (6 paar) | €53,85 | €8,98 | gratis |

Gevolg: de meest waarschijnlijke instapbestelling (1.0, 4 paar) betaalt toch €4,50 verzending terwijl de site "gratis boven €35" belooft op een mandje van €59,80 vóór korting. Dat is een verrassing in de checkout, de stap die in GA4 al 50% afval heeft (add_payment_info). Opties (besluit Lars/Timo, zie sectie 9): A laten staan en eerlijk tonen; B een aparte actie "gratis verzending vanaf 4 paar" (Shopify-verzendkorting op aantal, in Admin te controleren); C drempel tijdelijk verlagen. Mijn voorstel: A als standaard, B alleen als sectie 6 een positieve winstbijdrage laat zien; C afraden (raakt alle bestellingen).

2. **HOOG: de bestaande bundelkorting botst.** 3-pack 1.0 is €35,95 (€11,98 per paar) en 5-pack €54,95 (€10,99). Met de actie koopt iemand 4 paar voor €29,90, goedkoper dan het 3-pack. Shopify: producten in een Buy X get Y-korting krijgen op niet-Plus geen verdere productkorting; bij een code geldt het beste voordeel (Shopify Help Center, combining discounts). Hoe het Section Store-bundelblok zijn prijs toepast (eigen mechaniek of kortingsregel) is niet gecontroleerd. Test T8 beslist; voorstel: bundelblok op 1.0 tijdens de actie verbergen.

3. **HOOG: meetbasis is te klein voor A/B of significantie.** GA4 28 dagen: 7 aankopen, ~417 sessies; Meta-test: 288 klikken, 116 landingsweergaven, 5 add-to-carts, 0 verkopen (audit 28-10; ads-notitie 04-11). 2+2 tegen 3+3 live testen is dus niet haalbaar; kies op rekenwerk en rapporteer absolute aantallen met n.

4. **MIDDEN: gratis items worden nooit automatisch toegevoegd** (Shopify). De klant moet zelf 4 of 6 paar in het mandje zetten, en de korting werkt niet op de post-purchase-pagina. Zonder duidelijke "voeg nog 2 toe, die zijn gratis" in landing, productpagina en cart haalt het aanbod zijn conversie niet.

5. **MIDDEN: voorraad.** Live gecontroleerd (05-11): 2.0 zwart heeft voorraadbeheer UIT (`inventory_management` null), dus altijd "beschikbaar" en nooit uitverkocht; 1.0 wordt wel gevolgd. Op 12-10 stond 2.0 negatief (Feiten). Bij 50% gratis uitgeleverde paren is oververkoop een echt risico. Controle live in Shopify door een mens.

6. **MIDDEN: beleidspagina's conflicteren.** Live 05-11: `/pages/verzendbeleid` noemt "vóór 22:00 dezelfde dag verzonden" en geen €4,50 of €35; vastgesteld is "binnen 1 werkdag" (Feiten). `/policies/refund-policy` (14 dagen + 25%) en `/policies/shipping-policy` ("vóór 16:00") stonden op 19-10 nog fout; opnieuw nakijken. Checkout linkt naar de Shopify-beleidspagina's. Vóór de actie rechtzetten; juridisch oordeel is niet van mij ([[Compliance To-Do Lijst]]).

7. **MIDDEN: retourregel voor gratis paren ontbreekt.** Retour is 30 dagen (Feiten). Wat geldt als iemand 1 betaald paar terugstuurt en de gratis paren houdt? Voorstel voor voorwaarden: terugbetaling naar het werkelijk betaalde bedrag gedeeld over alle paren; retour van een deel kan de korting laten vervallen. Juridische formulering: [HÏ GRIP] / doorverwijzen.

8. **LAAG: referentieprijzen.** 2.0 toont nu €19,95 doorgestreept naast €17,95 (live). Geen nieuwe "was-prijzen" voor de actie verzinnen; prijsverlaging-aanduiding (Omnibus) en het woord "gratis" laten toetsen. ACM Leidraad: "gratis" alleen als het waar is en bijkomende kosten (hier verzending onder €35) vooraf duidelijk melden.

## 2. Aanbodscope (open, niet vastgelegd in vault)

Vraag aan Lars/Timo: geldt de actie voor 1.0, 2.0 of beide; mogen 1.0 en 2.0 gemengd; sluit je B2B, teamorders en ambassadeurs uit? Voorstel: collectie "Performance Days" met 1.0 en 2.0 gemengd (gratis = goedkoopste paren, test T7), B2B en teamorder uitgesloten, maximum 1 gebruik per bestelling in tiers (zie T3 t/m T6). Uitvoering van kortingen blijft bij een mens in Shopify Admin na akkoord.

## 3. Funnel en landingspagina

Baseline (GA4 28 dagen, eventcounts, indicatief): sessie 412, view_item 189 (45,9%), add_to_cart 46 (24,3%), begin_checkout 24 (52,2%), shipping 20 (83,3%), payment 10 (50,0%), purchase 7 (70,0%). Ads-test: klik naar landingsweergave 40% (trage pagina: Lighthouse mobiel 35-38).

Campagnefunnel (stappen die gemeten moeten worden): advertentieklik, landingsweergave (LCP mobiel), aanbod gezien, eerste paar in mandje, mandje op 4+ of 6+ paar (korting actief), begin_checkout, verzendkosten zichtbaar, betaling, aankoop. Drie stappen zijn nieuw en vragen een event: aanbod gezien, mandje gekwalificeerd, verzendkosten getoond. Een event toevoegen is een wijziging aan meting op de live site: eerst werkthema, daarna akkoord.

Landingspagina (bouw in werkthema "HÏ Grip website AI Workspace", `shopify theme list` vooraf; uiterlijk via Design Agent, tekst via Website Copy Agent, geen eyebrows, weinig tekst):
- Boven de vouw: aanbod in één regel, keuze 1.0 of 2.0, maat, aantal-stappen die de korting zichtbaar maken (4 of 6 paar), directe knop "In mandje" die alle paren tegelijk toevoegt.
- Einddatum eerlijk en gelijk aan de kortingsinstelling; geen nep-aftelklok.
- Bewijs alleen uit Feiten: 3500+ sporters, Trustpilot 4,6 met bronvermelding, grip-claim met formuleringsregel en bron.
- Voorwaarden kort onder de knop: verzending €4,50 onder €35 na korting, retour 30 dagen, wat er bij gedeeltelijke retour gebeurt, uitgesloten producten.
- Performance: pagina's voor betaald verkeer eerst door de snelheidsfix (LCP mobiel onder 3 s gemeten) of niet gebruiken als landing.

## 4. Cart en checkout

- Cart-concept 7932 (staat uit) krijgt een campagnestand: tekst "nog 2 paar toevoegen, deze zijn gratis", regel per item met "gratis", verzendbalk berekend op het gekortingde totaal (niet op de lijstprijs). Het Section Store-cart is een app: de rekenbasis van de balk is niet gecontroleerd (test T10).
- Checkout wijzig ik niet (harde grens). Controle alleen: kortingsregel leesbaar benoemd (titel van de automatische korting is klantzichtbaar, bv. "HÏ Performance Days"), verzendkosten correct, Shop Pay/Apple Pay werken met de korting (T11).

## 5. Testgevallen Shopify Buy X get Y (alleen in testomgeving of na akkoord uitvoeren)

Configuratie-voorstel: twee automatische kortingen op collectie "Performance Days": D1 koop 2, krijg 2 gratis; D2 koop 3, krijg 3 gratis; elk maximaal 1 gebruik per bestelling; geen combinatie met codes tenzij anders besloten. Shopify: bij gelijke collectie krijgt het goedkoopste gekozen paar de korting. Max 25 actieve automatische kortingen; kortingsstart volgt de tijdzone van de Admin.

| # | Mandje | Verwacht |
|---|---|---|
| T1 | 1 paar 1.0 | geen korting, €4,50 verzending |
| T2 | 2 paar 1.0 | geen gratis paren, cart toont "voeg 2 toe" |
| T3 | 4 paar 1.0 | €29,90, 2 gratis, verzending €4,50 |
| T4 | 4 paar 2.0 | €35,90, verzending gratis |
| T5 | 6 paar 1.0 | D2 geldt: €44,85, 3 gratis |
| T6 | 5 paar 1.0 | D1: 2 gratis, €44,85 (zelfde prijs als 6 paar: 6e paar kost niets; communicatie hierop afstemmen) |
| T7 | 2x 1.0 + 2x 2.0 | goedkoopste 2 (1.0) gratis: €35,90 |
| T8 | 3-pack bundelblok + D1 | geen dubbele korting, geen prijs lager dan bedoeld |
| T9 | extra code (bv. welkomstcode) | geen stapeling op actieproducten (niet-Plus), beste voordeel wint; plan (Plus of niet) is [HÏ GRIP] |
| T10 | aantal 4 naar 3 in cart | korting verdwijnt direct, verzendbalk klopt |
| T11 | Shop Pay, Apple Pay, gast | zelfde totaal als cart |
| T12 | /en en buiten NL | zelfde regels, juiste verzendzone en taal |
| T13 | gedeeltelijke retour (testorder) | terugbetaling zoals in voorwaarden; bedrag controleren |
| T14 | uitverkochte maat, 2.0 zonder voorraadtracking | geen oververkoop van gratis paren |
| T15 | B2B-klant, teamorder | actie niet van toepassing |
| T16 | GA4 purchase na korting | value = betaald bedrag; kortingsnaam beschikbaar in Shopify-order, in GA4 [CHECK] |

Nieuwe-klant-beperking: of een korting alleen voor nieuwe klanten afdwingbaar is (klantsegment vereist een herkende klant) is niet bevestigd [CHECK in Admin]. Valt dit tegen, dan sturen op kanaal en meten, niet blokkeren.

## 6. Winstbijdrage met onbekenden

Per bestelling (alle bedragen excl. btw tenzij anders vermeld; b = btw-tarief, aanname 21% [CHECK]):

CM1 = P/(1+b) + V/(1+b) - n x c - W - (φ x (P+V) + f) - h - ρ x L

- P betaald voor paren incl. btw (hierboven: 29,90 / 44,85 / 35,90 / 53,85), V betaalde verzending incl. btw, n aantal paren
- c inkoop per paar incl. invoer en verpakking **[HÏ GRIP]**, W werkelijke verzendkosten **[HÏ GRIP]**, φ en f betaalkosten **[HÏ GRIP]**, h pick en pack **[HÏ GRIP]**, ρ retourkans **[HÏ GRIP]**, L verlies per retour **[HÏ GRIP]**

Bekend: netto omzet per paar is €6,18 (1.0) of €7,42 (2.0) tegen €12,36 en €14,83 zonder actie. De actie halveert de omzet per paar; de rest van de kosten per paar blijft gelijk. Winstgevend per bestelling alleen als CM1 positief is bij de verwachte AOV.

Campagne: Resultaat = som over nieuwe klanten (CM1 - CAC) + som over bestaande klanten (CM1 - basisverwachting zonder actie) + LTV60-aandeel. CAC = advertentiekosten / aantal nieuwe klanten; break-even ROAS = omzet incl. btw per bestelling / CM1. Subsidiekosten bestaande klanten = som (lijstprijs - betaald) x (1 - i), i = aandeel dat ook zonder actie kocht [onbekend]. Hoeveel gratis paren een nieuwe klant per euro CAC mag kosten kan pas na invulling van de [HÏ GRIP]-waarden; zonder die cijfers geen go op winst.

## 7. Nieuwe klanten, meting en retentie 7/30/60

- **Nieuwe klant:** klant zonder eerdere betaalde bestelling op het (genormaliseerde) e-mailadres op het moment van bestellen. Uitsluiten: B2B, teamorders, interne en testorders, ambassadeur- en cadeaubestellingen, geannuleerd of geheel terugbetaald. Bron: Shopify (waarheid voor orders en klantstatus), GA4 voor funnel, Meta alleen voor toegeschreven resultaat. Nooit ROAS van kanalen optellen; alleen aantallen, geen namen of adressen in notities (AVG).
- **Dubbeltelling:** zelfde klant met twee e-mailadressen, gastcheckout en later account, retourzending en omruil. Eén regel: eerste betaalde order telt, rest niet.
- **Retentie:** cohort = nieuwe klanten met eerste order in het actievenster. R7, R30, R60 = aandeel met minstens 1 extra betaalde, niet-terugbetaalde order binnen 7, 30, 60 dagen na de eerste order. Laatste uitlezing 60 dagen na het einde van het venster. Verwachting als hypothese: lage herhaling in 60 dagen omdat 4 tot 6 paar de behoefte vult. Toets daarom ook e-mailklik, review en tweede-product, en rapporteer n; onder n=30 per cohort alleen aantallen, geen percentages (indicatief, zie leerregel over kleine steekproeven).
- Dagrapport tijdens actie: sessies per bron, mandjes met korting, checkouts, aankopen, nieuwe klanten, gemiddelde bestelwaarde, verzendkosten betaald, retouren, voorraad. Bron per getal erbij.

## 8. E-mail (alleen concepten, SendWILL verstuurt via een mens; B2C en B2B gescheiden)

Platformverdeling: Shopify transactiemails, SendWILL automatiseringen en campagnes (leerregel 12-10). Merge-tag-syntax SendWILL onbevestigd; kortingen als automatische korting, dus geen code in mail. Nieuwsbriefritme is elke 3 weken: datum laatste nieuwsbrief controleren zodat de actie-mail niet botst [CHECK].

| Moment | Mail | Doel |
|---|---|---|
| Preheat vanaf 16-11 (voorstel) | Aanmelding "vroege toegang" via bestaand formulier | lijst opbouwen, nieuwe adressen taggen |
| 26-11 avond of 27-11 ochtend | Lancering, alle B2C-adressen | actie met eerlijke einddatum |
| Dag 2 of 3 | Herinnering aan niet-kopers | alleen als einddatum nog loopt |
| Laatste dag | Laatste kans | alleen bij echte einddatum |
| Flow verlaten mandje | aanpassen: toont mandjeinhoud, link herstelt aantallen (korting alleen zichtbaar bij volledig mandje) | herstel |
| Na aankoop dag 0 | Shopify-orderbevestiging toont gratis regels en verzending | duidelijkheid, minder support |
| Dag 3 | Gebruik, maat en wassen | eerste ervaring |
| Dag 14 | Reviewverzoek (bestaande template) | bewijs |
| Dag 45 tot 55 | Herbestel- of teammailing, zonder korting tenzij besloten | R60 meten |

Ontbrekend: lijstomvang B2C, gezondheid van de lijst, SendWILL-sjablonen, einddatum actie. Copy: Website Copy en E-mail Marketing Agent na akkoord op scope.

## 9. Go/no-go

Poorten, elk met eigenaar:
1. **Meting** (Conversie & Analyse + Lars): GA4 gesynchroniseerd met Shopify-orders, UTM-schema vast, nieuwe events getest, purchase-value na korting. Rood = geen start.
2. **Snelheid landingspagina** (Website Agent bouwt, mens zet live): mobiele LCP onder 3 s gemeten.
3. **Beleid** (Lars/Timo): verzendbeleid, retourbeleid en actievoorwaarden gelijk getrokken, inclusief gedeeltelijke retour; juridische blik door Team.
4. **Mechaniek** (Website Agent test, mens akkoord): T1 t/m T16 geslaagd, bundelblok opgelost, plan (Plus of niet) bekend.
5. **Rendement** (Lars/Timo): invullen van c, W, φ, f, h, ρ, L; CM1 positief per aangeboden tier; maximale CAC bepaald.
6. **Voorraad** (Timo): dekking voor verwachte paren inclusief gratis; 2.0-voorraadtracking besluit.
7. **E-mail** (E-mail Marketing + Lars): concepten akkoord, consent en lijst gecontroleerd.

Besluit nu: **oranje**. Go alleen als 1, 3, 4 en 5 groen zijn; 2, 6 en 7 groen of bewust geaccepteerd. Stopregels tijdens de actie (eigenaar Lars/Timo): meting valt uit, CM1 op werkelijke cijfers negatief, voorraad op, of verzendklachten door onverwachte €4,50.

## 10. Niet gecontroleerd

Admin-instellingen (Shopify-plan, verzendzones, kortingsopties, Section Store-bundelmechaniek), werkelijke kortingsgedrag (T1 t/m T16 niet uitgevoerd), cart-app rekenbasis, SendWILL, financiële gegevens (niet gelezen), juridische toetsing, Ads. Website-QA volgt apart.

## Bronnen (data)

Shopify Help Center: Buy X get Y, Combining discounts, Troubleshooting shipping rates, Free shipping discounts. ACM: Leidraad Bescherming online consument. Vault: Feiten & Actuele Staat, GA4-audit 28-10, ads-resultaten 04-11, briefing 05-11. Live: higrip.nl productfeeds en /pages/verzendbeleid, 05-11-2026.
