# Prompt: 3 ads HÏ Performance Days (Verdubbel je order)

Plak alles onder de streep in een nieuwe Claude Code-sessie in de vault (Opus 5.5). Gemaakt 23-11-2026.

---

Je bent de creative director en de designer van het beste ad-bureau ter wereld, in één persoon. Je maakt 3 statische ads voor de HÏ Performance Days van HÏ Grip, elk in reel- en feedformaat. Doel per ad: stoppen, klikken of kopen, met nul fouten. Werk snel en zuinig: lees alleen wat hieronder staat, bouw zelf, geen subagents.

## Vaststaand (niet opnieuw uitzoeken)

- **Aanbod:** "Verdubbel je order". Elke order x2: wat je koopt, krijg je nog een keer gratis. Alle aantallen, 1.0 en 2.0. Loopt van vrijdag 27-11 t/m maandag 30-11-2026 (Black Friday t/m Cyber Monday). Besluit Team HÏ Grip 23-11; staat nog niet in het feitenbestand, dus deze regel is de bron.
- **Doelgroep:** sportneutraal (alle sporters). Geen sportspecifiek jargon, geen sportaccentkleur; volt alleen als detail op donker.
- **Formaten, dubbele resolutie:** feed 4:5 = **2160×2700**, reel 9:16 = **2160×3840**. Bouw in HTML op 1080 breed en render met Playwright op `deviceScaleFactor: 2`. Fonts: `Meta-batch-2026-11/fonts/` (Poppins, lokaal laden, nooit Google Fonts).
- **Logo:** volledig lockup gecentreerd bovenaan. `_logo/logo_lockup_wit.png` op donker, `_logo/logo_lockup_zwart.png` op licht.
- **Map:** `04_Social_Agent/Visuele Productie/Performance-Days-2026-11/` met `html/`, `png/`, `bron/`. Bestandsnamen: `pd_<nr>_<concept>_feed.png` en `pd_<nr>_<concept>_reel.png`.

## Stap 1: lezen (max 10 minuten)

1. `Ads Bouwboek — bewezen elementen.md` in deze map: secties 2, 3, 4, 6 en 8. Dit is je stijlgids en je examen.
2. `00_Brand_Core/Feiten & Actuele Staat.md`: alleen de prijstabel, verzending, Trustpilot-score, het sporters-aantal en de toegestane claims. Gebruik nergens een getal dat daar niet staat.
3. Skills, alleen het deel dat je nodig hebt: `marketing-psychology` (aanbodkadering, verliesaversie, anker, deadline) en `copywriting` (koppen). Geen `canvas-design`-filosofiebestand schrijven; het beeld volgt uit het Bouwboek.

## Stap 2: kort onderzoek (max 3 zoekacties, max 10 minuten)

Open in de ingebouwde browser de Meta Ad Library (NL, actieve ads) en zoek "1+1 gratis" en "Black Friday" bij 2 à 3 sterke sport- of DTC-merken. Noteer per voorbeeld in één regel wat het aanbod in één blik leesbaar maakt. Kopieer niets: geen layout, beeld of tekst. Daarna stoppen met onderzoeken.

## Stap 3: concepten (standaard, alleen afwijken als het onderzoek een duidelijk betere route laat zien)

Elke ad heeft één laag, één idee en één focuspunt. Het aanbod moet zonder lezen te snappen zijn: de kijker ziet de verdubbeling voordat hij de tekst leest.

| Nr | Laag | Idee | Psychologie |
|---|---|---|---|
| 1 | Stoppen (bereik) | **De verdubbeling als beeld.** Eén paar sokken en precies hetzelfde paar ernaast, op een echte foto of echt product met licht en diepte. Kop "VERDUBBEL JE ORDER." Visuele herhaling is de pattern interrupt. | Von Restorff, vloeiendheid (aanbod in 1 seconde begrepen) |
| 2 | Klikken | **Native object: de pakbon.** Een echte, gedrukte pakbon op een tafel of in een doos. De regel "Performance Grip Socks 2.0 · 3 paar" en daaronder "+3 paar · GRATIS" in het accent; het totaal blijft gelijk. Geen nagemaakte app-schermen. | Wet 3 (lijkt niet op een ad), endowment (je ziet je bestelling al), merk in de pointe |
| 3 | Kopen | **Rekensom en deadline.** Prijs per paar als anker: normaal tegenover nu, berekend uit de echte prijzen (bijvoorbeeld 3-pack 2.0 → 6 paar). Onderin de echte einddatum "t/m maandag 30-11". Geen countdown-klok. | Anker, verliesaversie, echte schaarste in tijd |

Reken elk bedrag twee keer na met de prijzen uit het feitenbestand en rond af zoals Shopify doet (op de cent, komma als decimaalteken). Ad 3 stuurt op het 3-pack (6 paar): daar zit de marge.

## Stap 4: beeld

Kies per ad het beeld dat het hardst werkt (Bouwboek wet 2: de winnaars staan op een echte foto). Volgorde van zoeken:
1. Eigen shoot- en productfoto's in `Losse-ads-2026-11-15/bron/`, `Meta-batch-2026-11/` en `ADS-Live-9x16-2026-11-23/`.
2. Clubshoots in `H:\Gedeelde drives\HÏ GRIP WORKSPACE\B2B - HÏ Grip\SPORTCLUBS\` (lokaal lezen met PIL, eerst een contactsheet, keuze naar `bron/` op max 2400px). Sportneutraal: kies uitsneden van voet en onderbeen, geen clubshirts of logo's in beeld.
3. Productfoto's van higrip.nl.

Alleen beelden met geregelde rechten voor betaald gebruik. Geen AI-gegenereerde sokken of mensen. Is er voor een concept geen goed beeld, kies dan een native object (concept 2) in plaats van een kale uitsnede op een leeg vlak.

## Stap 5: bouwen

- Raster uit het Bouwboek (D6): marge 72, kop rond top 176, op 1080 breed.
- **Reel-veilige zone:** op 1080×1920 blijft alle tekst en het product tussen y 250 en y 1340 en binnen x 72–1008 (Instagram-interface boven, caption en knoppen onder en rechts). Logo op y ≈ 250. Het reelformaat is geen uitgerekte feed: herschik de compositie.
- Typografie: Poppins 800–900 UPPERCASE voor koppen, dragende tekst minimaal 26px op 1080 breed.
- Kleur: `#111111` of `#0A0A0A` donker, `#FFFFFF` licht. Volt `#CCFF00` alleen op het ene detail dat betekenis draagt (de "x2", het woord GRATIS of de nieuwe prijs per paar), alleen op donker. Trustpilot-groen alleen bij sterren.
- Knop in beeld alleen bij ad 3: pill met chevron, wit op zwart of zwart op wit, nooit gevuld met volt. Tekst max 2 woorden ("Shop nu").
- Verboden (AI-slop volgens het team): stippenraster, schuine sticker-badges, volt onderstreepstrepen, eyebrow-labels met wijde spatiëring, rijtjes van drie cursieve cijfers, volle volt- of blauwe vlakken, prominente voetnoten, gloed-effecten, gradiënten anders dan het donker aflopen van een foto.

## Stap 6: copy (één versie per ad)

Per ad één primaire tekst (max 125 tekens vóór "meer") en één kop (max 40 tekens). Geen A/B-varianten. Nederlands, "jij/je", geen "u", geen "Zeker!", geen "geweldig/fantastisch", geen gedachtestreepjes of pijlen, emoji hooguit één. **Geen "95% meer grip" en geen andere percentages over grip**, niet in beeld en niet in de copy: het aanbod en de herkenning doen het werk. Schrijf de copy in `Performance-Days-2026-11/COPY.md` met per ad: laag, primaire tekst, kop.

## Stap 7: QA (verplicht, pas daarna opleveren)

1. Render beide formaten, open elke PNG en bekijk hem ook verkleind tot telefoonformaat (360 breed). Is de verdubbeling in 1 seconde zichtbaar? Anders terug naar stap 5.
2. Scoor elke feed-ad met de beoordelingskaart (Bouwboek sectie 8). **Minder dan 16 van 20 = opnieuw bouwen.** Noteer de score per punt.
3. Poortcheck, elk "nee" blokkeert: Poppins; alleen merkkleuren; CTA niet gevuld; elk getal en elke claim staat in het feitenbestand of in "Vaststaand"; bedragen nagerekend; "HÏ Grip" overal met trema (behalve in URL's); geen nagemaakte functies; rechten beelden; reel-veilige zone gerespecteerd; exacte pixelmaat 2160×2700 en 2160×3840 (controleer met PIL).
4. Spellingscheck op elke zichtbare tekst.

## Oplevering

- 6 PNG's, `COPY.md`, en een `overzicht.jpg` met alle 6 naast elkaar.
- Eindbericht van max 10 regels: per ad de laag, het idee in één zin en de score. Plus wat nog open is (bijvoorbeeld: het aanbod moet in het feitenbestand, verzendregel voor kleine orders).
- Niets uploaden naar Meta, niets publiceren, niet committen zonder vraag.

> Map: [[04 Social Agent — Index]]
