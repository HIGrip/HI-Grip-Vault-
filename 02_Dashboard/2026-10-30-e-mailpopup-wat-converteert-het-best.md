---
id: 2026-10-30-e-mailpopup-wat-converteert-het-best
titel: "E-mailpopup: wat converteert het best"
kerntitel: "Popup verschijnt na 30 s, de slechtst converterende timing in twee grote datasets"
datum: 2026-10-30
bron: los
routine: ""
categorie: CRO
status: nieuw
prioriteit: P1
samenvatting: "De grootste winst zit niet in een spelletje maar in de instellingen: de popup verschijnt pas na 30 seconden, terwijl 6 tot 15 seconden in twee datasets (samen ruim 2 miljard vertoningen) het best scoort, en 21 tot 60 seconden het slechtst. Eerst timing, frequentie, doelgroep en de merkconforme knop goedzetten, daarna een gamified variant (EcomSend heeft spin-the-wheel en games) via een A/B-test tegen die verbeterde basis zetten."
gerelateerd: [2026-10-29-ads-funnel-en-snelheid-productpagina]
vervangt: []
bronbestand: ""
deadline: ""
---
# E-mailpopup: wat converteert het best

## In het kort
De vraag was: welke e-mailpopup converteert het best, en is een gamified popup (vallende balletjes, rad) echt beter? Een spelelement geeft in elke dataset meer aanmeldingen, maar hoeveel meer verschilt sterk per leverancier (van +75% tot +640%), en alle cijfers komen van partijen die popups verkopen. De huidige popup laat duidelijkere winst liggen: hij verschijnt na 30 seconden, tot twee keer per dag, aan alle bezoekers, en de knop is een gevuld blauw vlak (tegen de merkregel). Advies: eerst de basis goedzetten, dan A/B-testen tegen een gamified variant, en meten op aanmeldingen per vertoning én op orders met de code.

## Kerncijfers
- **30 s** · Huidige vertraging voordat de popup verschijnt (EcomSend-config, live 30-10)
- **2 per dag** · Huidige maximale frequentie per bezoeker
- **15%** · Huidige korting, zonder minimum en zonder vervaldatum

## Acties
- [ ] P1 · Besluit: EcomSend-popup na 8 tot 12 seconden tonen in plaats van na 30 seconden
- [ ] P1 · EcomSend-abonnement controleren: het gratis plan stopt bij 30 nieuwe inschrijvers per maand, Essential bij 150
- [ ] P2 · EcomSend-frequentie terugbrengen van 2 keer per dag naar 1 keer per 7 dagen na wegklikken
- [ ] P2 · EcomSend-popup alleen tonen aan nieuwe bezoekers en niet aan ingelogde klanten
- [ ] P2 · Paginaregels in EcomSend herstellen: ze verwijzen naar /products/performance-grip-socks-1 en -2, die 404 geven
- [ ] P2 · Popupknop merkconform maken: pill met chevron, wit op zwart, in plaats van gevuld blauw (#0011A7)
- [ ] P2 · Besluit: A/B-test verbeterde standaardpopup tegen EcomSend spin-the-wheel, minimaal 3.800 vertoningen per variant
- [ ] P3 · Juridisch laten checken of een rad of Plinko met kansuitkomst onder de Gedragscode Promotionele Kansspelen valt, vóór livegang

## Bevindingen

### Huidige popup (live gemeten op 30-10)
- EcomSend-popup "HÏ Grip E-MAILMARKETING POP-UP" (id 307271), template opt-in, één veld (e-mail).
- Tekst: "15% KORTING", "ONTVANG TIPS OVER PRESTATIES, KORTING EN MEER", knop "WORD LID VAN DE PERFORMANCE ACADEMY", afwijslink "Nee, ik wil geen korting".
- Trigger: na 30 seconden, alle apparaten, alle bezoekers, maximaal 2 keer per dag. Zijbalkwidget rechts staat aan (dat is al een teaser).
- Korting: 15%, geen minimum, geen vervaldatum, voor alle producten.
- Paginaregels verwijzen naar `/products/performance-grip-socks-1` en `-2`. Die URL's bestaan niet (404); de echte handles staan in [[Feiten & Actuele Staat]]. Op `/products/performance-gripsokken-2-0-zwart` verscheen de popup gewoon. Wat de regel moest doen (uitsluiten of alleen daar tonen) is niet te zien.
- Knopkleur `#0011A7` gevuld: botst met de merkregel dat een CTA nooit met een accentkleur gevuld is.
- De centreerfout op mobiel is dezelfde dag opgelost in het thema (zie [[Update Log]]).

### Timing is de grootste hefboom
- Omnisend (1,24 mld vertoningen, 2025): 6 tot 10 s geeft 2,4%, 16 tot 30 s 1,9%, 31 tot 60 s 1,8%.
- Wisepops (circa 1 mld vertoningen): 11 tot 15 s 6,45%, 6 tot 10 s 5,98%, 21 tot 30 s 1,53%. Na 2 bekeken pagina's 9,84%.
- Beide datasets zetten 30 seconden bij de slechtste timings. Dit komt van platforms zonder belang bij een bepaalde timing, dus dit is het betrouwbaarste signaal van het onderzoek.
- De vertraging verandert niets aan het laden: het EcomSend-script (1,4 s bootup) laadt nu al direct, zie [[2026-10-29-ads-funnel-en-snelheid-productpagina]].

### Gamified popups: richting zeker, grootte onzeker
- Omnisend: Wheel of Fortune 3,5% tegen 2,0% zonder (ongeveer +75%).
- Claspo (779 mln vertoningen): gamified 9,18% tegen 3,53% voor alle aanmeldformulieren; kraskaart 11,29%, rad 9,25%, cadeaudoos 7,26%.
- Sleeknote: rad 8,67% tegen 3,70%.
- Wisepops: rad 29,99% tegen 4,04%; uitschieter, niet gebruiken als verwachting.
- Alle bronnen verkopen gamified popups; Omnisend is de grootste dataset en geeft het voorzichtigste effect. Voor HÏ Grip realistisch: ongeveer 1,5 tot 2 keer zoveel aanmeldingen, met een lijst die meer op korting gericht is.
- EcomSend ondersteunt spin-the-wheel en games (app-pagina; de config heeft al wielkleuren), dus een test kan zonder nieuwe app. Of EcomSend A/B-testen ondersteunt, staat niet op de app-pagina.

### Overige factoren
- Korting: met korting 2,4% tegen 1,7% zonder (Omnisend), 7,45% tegen 4,60% (Wisepops). Korting houden.
- Velden: 1 tot 2 velden is optimaal; vanaf 4 velden daalt het (Omnisend 1,5%). E-mail alleen is goed.
- Mobiel converteert niet slechter: Omnisend mobiel 2,2% tegen desktop 1,4%; Wisepops 4,98% tegen 3,67%.
- Doelgroep: alleen nieuwe bezoekers 8,30% tegen alle bezoekers 4,60% (Wisepops).
- Positie: midden scoort bij Wisepops het best (6,84%), onderaan het slechtst (2,65 tot 3,41%). Een bottom sheet is dus niet vanzelf beter; huidige middenpositie houden.
- Meerdere stappen: kleine winst, 2,3% tegen 2,0% (Omnisend) en 5,17% tegen 4,62% (Wisepops).
- Afbeelding: +43% bij Wisepops, neutraal bij Omnisend. Afteltimer: +171% bij Wisepops, licht negatief bij Omnisend. Tegenstrijdig, niet op bouwen.

### Risico's van een spelpopup
- Merk: referentiemerken (Nike, Gymshark, HOKA) gebruiken dit niet; past eerder bij kortingswinkels.
- Lijstkwaliteit: trekt kortingszoekers. Meet daarom ook orders met de code en uitschrijvingen, niet alleen aanmeldingen.
- Juridisch: een spel met kansuitkomst valt mogelijk onder de Gedragscode Promotionele Kansspelen. Een spel dat als toeval oogt terwijl iedereen hetzelfde wint, kan misleidend zijn. Niet juridisch getoetst.

### Testopzet
- Variant A: huidige popup met de basisverbeteringen (10 s, 1 keer per 7 dagen, nieuwe bezoekers, pill-knop).
- Variant B: dezelfde instellingen, maar spin-the-wheel of game.
- Om 2% tegen 3% aanmelding te onderscheiden (95% betrouwbaarheid, 80% power) zijn ongeveer 3.800 vertoningen per variant nodig.
- Meten: aanmeldingen per vertoning, orders met de popupcode binnen 30 dagen, uitschrijvingen na de welkomstmail.

## Wat niet lukte
De database van het Research Dashboard was vanaf dit account (persoonlijk) niet bereikbaar; de sync en de publicatie van het dashboard zijn overgeslagen en volgen bij de volgende routine-run op info@. Het EcomSend-abonnement en de A/B-functie zijn niet te zien vanaf de voorkant van de site. Onafhankelijk (niet door een popupleverancier gefinancierd) onderzoek naar gamified popups is niet gevonden.

## Bronnen
- Omnisend, Email popup statistics 2025 (1,24 mld vertoningen): https://www.omnisend.com/blog/email-popup-statistics/
- Wisepops, Popup stats 2026 (circa 1 mld vertoningen): https://wisepops.com/blog/popup-stats
- Claspo, Popup statistics (779 mln vertoningen): https://claspo.io/blog/popup-statistics/
- Sleeknote, Popup statistics 2026: https://sleeknote.com/blog/popup-statistics
- EcomSend in de Shopify App Store (functies, plannen): https://apps.shopify.com/ecomsend
- CMS, Gewijzigde Gedragscode Promotionele Kansspelen: https://cms.law/nl/nld/publication/gewijzigde-gedragscode-promotionele-kansspelen-op-1-januari-2014-in-werking-getreden
- Live meting EcomSend-config op higrip.nl, 30-10-2026 (browser, `window.EcomSendApps`)

## Aantekeningen
