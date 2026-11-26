---
type: ontwerpoplevering
gebied: design-agent
datum: 2026-11-20
status: VERWORPEN door Lars 20-11-2026 (leest als sjabloon, geen echte inhoud); referentie is Downloads/HI-Grip-early-access-mails/mail-e4a, e4b, e4c. Niet gebruiken.
gebouwd_door: Denzel (op uitdrukkelijk verzoek van Lars), met tekstloze artworks van de Design Agent (kaart t_aea76b5d)
---

# Early-access openingsmail 23-11, v4 (drie versies, sport-uitstraling)

Waarom v4: v1 t/m v3 lazen als webshop-sjabloon. Lars' eigen voorbeelden (Emailmarketing, o.a. RESULTAAT TELT., NEW SUBSCRIBERS #2) werken met een beeld dat het hele scherm vult, een enorme kop erop en code als typografie zonder dozen. v4 volgt dat.

Copy en feiten: [[2026-11-23-early-access-opening-brief]] (ongewijzigd). Alles wat Lars invult staat als gestippelde `[INVUL: ...]`.

## De drie versies

| Map | Idee | Beelden |
|---|---|---|
| v1 | Veld. Voetballer van achteren, full-bleed, zwart + volt, halftone-bol, code als groot volt-element op het gras. | VOETBAL IMG_2564 (persoon: toestemming niet gecontroleerd) |
| v2 | Sok-held. Tennisserve in sepia, de drie sokken lopen over de sectiegrens het oranje halftone-vlak in, code zwart op oranje. | Tennisfoto TVB Open 2026 (20260719-KC8A0054-2), productfoto 3-pack ZA (persoon: toestemming niet gecontroleerd) |
| v3 | Strip. Drie schuine actiebeelden onder elkaar met een volt-streep als verbinder: kop, code, extra informatie, elk op een eigen beeld. | TVB Open 2026 KC8A0054 (hardloper/tennis), VOETBAL IMG_3675, HARDLOPEN Zwart 2.0 IMG_3968 (personen: toestemming niet gecontroleerd) |

Leesroute in alle drie: kop (belofte), code, knop.

## Per map
`mail.html`, `assets/` (v1 139 KB, v2 183 KB, v3 222 KB), `preview/` met desktop 640 px en mobiel 375 px (2x). Bestanden met `-voorbeeld` tonen invulwaarden als neutrale teststrings (EARLY-XXXX, XX%), zodat de uitstraling te beoordelen is; zonder dat achtervoegsel zie je de echte `[INVUL]`-markeringen.

## Technisch
- Kop, code, tekst en knop zijn live tekst op een achtergrondafbeelding (td met bgcolor-fallback). Zijn beelden geblokkeerd, dan staat witte tekst op zwart (v2: zwarte tekst op oranje bgcolor).
- Beelden zijn tekstloze artworks; elk afzonderlijk onder 150 KB.
- Mobiel: één media-query schaalt hoogtes en lettergroottes naar 375 px.

## Zwakke punten (eerlijk)
1. Niet getest: echte mailclients (Gmail, Outlook, Apple Mail), dark mode, spamtest, SendWILL-import. In Outlook verschijnt de achtergrondafbeelding waarschijnlijk niet (geen VML-fallback gebouwd); de mail blijft dan leesbaar maar zonder foto.
2. Geen schone atleet-uitsnede: de uitknipmaskers van de Design Agent gaven halo's en zijn afgekeurd. De sok-uitsnede in v2 is wel schoon. v1 en v3 gebruiken full-bleed foto's in plaats van uitgeknipte atleten.
3. v2: op de tennisfoto is een derde-merklogo op de broek en reclametekst op het bord zichtbaar. Beslissing voor Lars of dat zo kan blijven.
4. v1: onderin de foto is een donkere strook zonder inhoud; op mobiel loopt het codeblok krap tegen de onderkant van het beeld als de invulwaarden lang zijn.
5. Aandachtsvolgorde (belofte, code, knop) niet gemeten met blur/verkleining; alleen visueel beoordeeld. De bewering dat dit sportief oogt is een beoordeling, geen bewijs; de smaaktoets is aan Lars.
6. 3500+ en Trustpilot 4,6: Lars controleert Trustpilot vlak voor verzending (zie brief).
7. Personen op foto's: schriftelijke toestemming per persoon is niet gecontroleerd.

## Wat Lars invult / uploadt
Invullen: voornaam, early-access-moment, kortingscode, percentage of bedrag, geldig tot, code automatisch toegepast ja/nee, voorwaarden, extra informatie (1 tot 3 punten), afzender, bedrijfsgegevens, afmeldlink, link van de knop.
Uploaden: de afbeeldingen in `assets/` online hosten en de paden in `mail.html` vervangen door de gehoste URL's.

## Aanbeveling
v2 voor de sterkste merkherkenning (sok als held, één wow-beweging), v1 als je het product niet centraal wilt. v3 is het zwakst. Lars kiest.

> Map: [[07 Design Agent — Index]]
