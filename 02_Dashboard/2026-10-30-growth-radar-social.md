---
id: 2026-10-30-growth-radar-social
titel: "Growth Radar — Social naar website: Meta's peak-season-advies verklaart de 0 verkopen uit de lopende A/B-test"
kerntitel: "Leerdrempel van ~50 conversies/week verklaart waarom 'Betaalproces starten' niets leert"
datum: 2026-10-30
bron: routine
routine: "growth-radar"
categorie: Social
status: nieuw
prioriteit: P2
samenvatting: "Meta's eigen peak-season-gids (22 okt 2026) geeft het cijfer achter het probleem dat al zichtbaar was in de lopende A/B-test: een ad set onder de leerdrempel van ongeveer 50 conversies per week draait zo'n 28% duurder per aankoop, en de huidige campagne optimaliseert op een event ('Betaalproces starten') met 0 resultaten. Daarnaast geeft Meta nu algemeen beschikbare AI-videogeneratie uit bestaande productfoto's — een gratis tussenstap voor videocreatives vóór de geplande eigen opname."
gerelateerd: [2026-10-09-growth-radar-social, 2026-10-25-ab-test-ads-features-vs-beste, 2026-10-29-ads-funnel-en-snelheid-productpagina]
vervangt: []
bronbestand: ""
deadline: ""
---
# Growth Radar — Social naar website: Meta's peak-season-advies verklaart de 0 verkopen uit de lopende A/B-test

> Map: [[Waar staat wat]]

## In het kort
Meta publiceerde op 22 oktober 2026 zelf een peak-season-gids met harde vuistregels voor campagnestructuur, leerfase en attributie — en die vuistregels verklaren vrij precies waarom de lopende Instagram-A/B-test (zie [[2026-10-29-ads-funnel-en-snelheid-productpagina]]) op 0 verkopen uitkomt. Daarnaast kondigde Meta op 6 oktober 2026 algemeen beschikbare AI-videogeneratie uit bestaande productfoto's aan (Advantage+ creative), een gratis tussenstap voor videomateriaal.

## Bevindingen
### Meta's eigen leerdrempel-cijfer bevestigt het probleem achter "0 verkopen"
Meta's businessblog (You Don't Beat The Auction. You Brief It., 22 okt 2026) geeft een concrete vuistregel: een ad set die onder de leerdrempel van ongeveer **50 conversies per week** blijft, draait circa **28% duurder** per aankoop dan een ad set die erboven zit. De gids raadt ook aan om het grootste lopende campagne-optimalisatiedoel te controleren ("optimaliseert hij op wat je bedrijf omzet oplevert?") en om het attributiemodel (standaard/incrementeel/custom) bewust te kiezen in plaats van de standaardinstelling te laten staan — en daarna minstens een maand niet meer aan te passen, omdat elke wijziging de leerfase herstart en de oude instelling tijdens het wachten blijft uitgeven.
De lopende HÏ Grip-test optimaliseert op "Betaalproces starten", een event met **0 resultaten** op 288 linkklikken en 5 add-to-carts — exact het scenario dat Meta hier beschrijft: zonder conversies op het gekozen event heeft het algoritme geen leersignaal, wat ook los van de creativevraag al genoeg verklaart waarom geen van de vier paren een winnaar laat zien.

> **Voor higrip.nl:** Dit bevestigt het al geplande besluit in [[2026-10-29-ads-funnel-en-snelheid-productpagina]] om het event na 3 november te wijzigen naar "Content bekijken", en geeft er een harde reden bij. Voor de herstart na de A/B-test is ook de ad-set-vuistregel relevant: weekbudget ÷ (kosten per resultaat × 50) = het aantal ad sets dat het budget boven de leerdrempel kan houden. Bij een testbudget van €70/week kan dat al snel maar 1 ad set zijn — minder, grotere ad sets in plaats van vier parallelle paren met elk een eigen budgetje.
**Actie:** zie bijgewerkt backlogpunt 10 (P1, CAPI/Ads Manager-inrichting) — de ad-set-vuistregel en de attributiemodelkeuze zijn daar als blijvende richtlijn toegevoegd voor de herstart na 3 november.

### Advantage+ creative genereert nu algemeen beschikbaar video uit bestaande productfoto's
Op Meta's Advertising Week New York-aankondiging (6 okt 2026) is "Advantage+ creative" — videogeneratie uit bestaande statische productfoto's, direct in Ads Manager — gemarkeerd als **algemeen beschikbaar** (niet in test). Een losse "product video for catalog advertisers"-functie zit nog in beta. Advantage+ creative zelf niet.

> **Voor higrip.nl:** Backlogpunt 7 (eigen productvideo, +10-30% conversie) staat nog open en vraagt een dag opname. Deze functie werkt met de foto's die al gebruikt zijn voor de lopende A/B-test (zie [[2026-10-25-ab-test-ads-features-vs-beste]]) en levert dus zonder extra opname of kosten een videovariant op die in de volgende testronde meegenomen kan worden, vooruitlopend op de eigen opname.
**Actie:** zie bijgewerkt backlogpunt 7 — Advantage+ creative toegevoegd als gratis tussenstap, geen vervanging van de geplande opname.

### Incrementality-testen wordt in 2026 agencypraktijk — bij HÏ Grip's volume nog niet haalbaar
Meta's businessblog (19 okt 2026) laat vier bureaus (Tinuiti, WPP Media, C-4 Analytics, AdYogi) aan het woord over lift-tests die meten wat advertenties werkelijk toevoegen, los van platformgerapporteerde conversies. Onafhankelijk hiervan bevestigen meerdere incrementality-aanbieders dat het volume de belangrijkste beperking is: een Meta Conversion Lift-test of geo-holdout heeft een schaal nodig die ver boven de huidige 288 kliks/week ligt.

> **Voor higrip.nl:** Niet uitvoerbaar bij het huidige testbudget en volume, en dus geen actie nu. Relevant zodra het advertentiebudget en de conversies opschalen (en de GA4-meetgaten uit [[2026-09-03-analytics-kpi-meetgat]] zijn gedicht) — dan geeft een lift-test een eerlijker beeld dan de platformgerapporteerde ROAS, zeker met de engage-through-attributie die sinds maart 2026 standaard aanstaat (zie 9 okt 2026).
**Actie:** volgen, nog niet handelen.

## Wat niet lukte
Geen primaire Meta- of TikTok-bron gevonden voor een oktober-2026-wijziging aan TikTok-attributievensters (alleen tegenstrijdige, niet-gedateerde vendorblogs); DTC CAC/ROAS-benchmarks voor 2026 blijven tegenstrijdig tussen bronnen (geen Emerce/Twinkle/Marketingfacts-publicatie gevonden) en zijn daarom niet overgenomen. Meta's "Brand Building Summit" (15 okt 2026, Ads Super Burst, First Impression Ads) is gericht op grotere merkbudgetten en heeft nog geen concrete koppeling aan higrip.nl's schaal.

## Bronnen
- [Meta Business News — You Don't Beat The Auction. You Brief It.](https://www.facebook.com/business/news/you-dont-beat-the-auction-you-brief-it) (22 okt 2026)
- [Meta Business News — Advertising Week New York 2026: New AI Capabilities to Guide Campaigns and Reach Customers](https://www.facebook.com/business/news/advertising-week-new-york-2026) (6 okt 2026)
- [Meta Business News — Performance Spotlight: How Agencies Are Testing for Incrementality](https://www.facebook.com/business/news) (19 okt 2026, teaser; volledig artikel niet los bereikbaar)
- [Meta Business News — overzichtspagina](https://www.facebook.com/business/news) (geraadpleegd 30 okt 2026)

## Aantekeningen
