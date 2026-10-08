---
id: 2026-10-08-seo-aeo-geo-aio-sxo-audit
titel: "Audit higrip.nl — SEO, AEO, GEO, AIO en SXO op 8 oktober"
kerntitel: "Vooruitgang sinds 25-9, maar rugby 404, demo-tekst en dunne entiteit blijven staan"
datum: 2026-10-08
bron: los
routine: ""
categorie: SEO
status: nieuw
prioriteit: P1
samenvatting: "De sportpagina's voor padel, tennis en voetbal zijn sinds 25-9 hersteld (630–650 woorden, FAQPage), titels en meta's zijn overal ingevuld en de verzend- en retourwaarden op de site komen overeen met het feitenbestand. Wat nog open staat, kost vooral vertrouwen en AI-zichtbaarheid: rugby geeft nog 404 terwijl drie pagina's het beloven, de demo-tekst op /pages/ons-verhaal staat live, de Organization-entiteit is kaal en het merk is in drie externe zoekopdrachten niet te vinden."
gerelateerd: [2026-09-25-seo-audit, 2026-09-23-seo-conversietest-run-1, 2026-09-30-growth-radar-ai-search, 2026-10-05-seo-conversietest-run-3, 2026-10-05-regressiecheck, 2026-10-07-missie-visie-pagina, 2026-10-07-shoppagina-keuzepagina, 2026-09-21-beachhead-rugby]
vervangt: []
bronbestand: ""
deadline: ""
---
# Audit higrip.nl — SEO, AEO, GEO, AIO en SXO op 8 oktober

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[Waar staat wat]] · [[Home]]

## In het kort

Losse audit van 8 oktober 2026 langs vijf lenzen: **SEO** (vindbaarheid in Google), **AEO** (antwoordmachines en featured snippets), **GEO** (genoemd en geciteerd worden door ChatGPT, Perplexity, Gemini), **AIO** (Google AI Overviews / AI Mode) en **SXO** (zoekintentie tot conversie). Het is een delta op [[2026-09-25-seo-audit]] (54/100). Er is geen nieuw totaalcijfer: de audit is smaller (zie *Wat niet lukte*), dus een score zou niet vergelijkbaar zijn.

**Vooruit sinds 25-9:** padel-, tennis- en voetbalpagina's hebben 630–650 woorden, `FAQPage` en `WebPage`-schema (padel was 249 woorden). Elke pagina heeft een canonical, `hreflang` nl/en/x-default en (op één na) een meta description van 114–160 tekens. De homepage heeft een H1 en de titel noemt nu "Performance gripsokken: voetbal, tennis & padel". Verzending (€35 gratis, binnen 1 werkdag) en 30 dagen retour staan op de productpagina's, FAQ en verzendbeleid gelijk aan [[Feiten & Actuele Staat]]; "22:00", "€30" en "€4,25" kwamen op geen enkele gecontroleerde pagina meer voor.

**Nog open en het zwaarst:** rugby (404), de demo-tekst onder de oprichters, een niet onderbouwde blessureclaim die ook in het `FAQPage`-schema staat, een kale entiteit voor AI-systemen, en geen zichtbaarheid in AI- en zoekresultaten op de kerntermen.

## Kerncijfers

- **26** · Nederlandse pagina's technisch gecontroleerd (HTML, schema, koppen)
- **1** · beloofde sportpagina die nog 404 geeft (rugby) · open sinds 25-9
- **6** · beleids- en B2B-pagina's met 0 of 3 H1's
- **630–650** · woorden per sportpagina (padel, tennis, voetbal) · padel was 249

## Acties

Open acties uit [[2026-09-25-seo-audit]] (rugby aanmaken, demo-tekst, `/blogs/intern`, Organization.url, `http://schema.org`, retourbeleid gelijktrekken) gelden nog en staan niet opnieuw hieronder. Dit zijn alleen nieuwe punten.

- [ ] P1 · Besluit: het aantal oprichters vastleggen (het feitenbestand zegt drie, /pages/over-ons zegt "de vier founders", /pages/ons-verhaal toont vier namen en de titel "4 sporters") en alle pagina's en het Organization-schema daarop gelijktrekken
- [ ] P1 · De claim "minder risico op blessures" verwijderen uit de FAQPage-antwoorden van de homepage en uit de tekst op de productpagina's en /pages/over-ons: het onderzoek meet wrijving, geen blessures, en wat in schema staat wordt letterlijk door AI-systemen overgenomen
- [ ] P1 · Besluit: alle drie de varianten van 2.0 melden `InStock` in het Product-schema, terwijl het feitenbestand op 1-10 voorraad 0 met negatieve aantallen noemt; vaststellen of doorverkopen bij voorraad 0 bewust aanstaat en zo niet de beschikbaarheid corrigeren
- [ ] P2 · Rugby: tot de pagina live staat de belofte weghalen uit de titel van /collections/gripsokken, de FAQ ("voetbal, tennis, padel en rugby") en /pages/ontdek-jouw-sport, of de pagina vandaag publiceren (nu 13 dagen een belofte zonder pagina)
- [ ] P2 · Organization-schema uitbreiden met `description`, `foundingDate`, `founder` (Person), `sameAs` (Instagram, TikTok, Trustpilot, LinkedIn), `contactPoint` en KvK-nummer; dit is de entiteitsbron voor GEO en nu alleen naam, logo en url
- [ ] P2 · Product-schema aanvullen met `gtin` (EAN uit [[Performance Grip Socks 2.0]]), `itemCondition` en `variesBy`; `aggregateRating` blijft weg tot er een echte reviewapp met zichtbare reviews is
- [ ] P2 · Titels van 15–33 tekens ("HÏ Grip | Over Ons", "HÏ Grip | Zakelijk") vervangen door keyword-titels van 50–60 tekens; /pages/terugbetalingsbeleid heeft titel "Betalingsbeleid" en geen meta description
- [ ] P2 · H1 toevoegen op /pages/retourbeleid, /pages/terugbetalingsbeleid, /pages/retail en /pages/pilates, en de dubbele H1's op /pages/verzendbeleid en /pages/privacybeleid terugbrengen naar één
- [ ] P2 · De hoofdgids "Wat zijn gripsokken?" (nu ±400 woorden, geen auteur, geen bron, geen link naar een product of sportpagina, datum 15-12-2025) herschrijven antwoord-eerst met auteur, `dateModified`, bron Apps et al. 2022 en links naar de vier sportpagina's
- [ ] P2 · /pages/retail, /pages/pilates en /pages/clubwear (95–110 woorden) uitbreiden voor de B2B-zoeker: doelgroep, minimale afname, prijsindicatie uit het feitenbestand, contactformulier en een duidelijke vervolgstap
- [ ] P2 · AI-zichtbaarheid wekelijks meten met een vaste set van 10 vragen in ChatGPT, Perplexity, Gemini en Google AI Mode (zonder VS-beperking) en noteren of HÏ Grip genoemd of geciteerd wordt; de nulmeting van vandaag is "niet gevonden"
- [ ] P3 · Op /en/ de Nederlandse URL-slugs en alt-teksten ("Gripsokken bedrukken") vertalen, en nagaan of /en/pages/gripsokken-voor-padel inmiddels Engelse tekst heeft (niet geverifieerd)

## Bevindingen

### SEO — technisch en on-page

- **Indexatie en crawl zijn in orde.** `robots.txt` (Shopify-standaard) staat alles toe en noemt de sitemap; die bevat NL en `/en/` per type (producten, pagina's, collecties, blogs, artikelen). Elke pagina heeft een canonical op zichzelf en drie `hreflang`-links. Geen pagina met `noindex`.
- **Sitemap vervuiling.** De blog-sitemap bevat nog `/blogs/intern`, een interne blog die publiek staat. Rugby staat er terecht niet in omdat de pagina niet bestaat.
- **Thin content op B2B- en overzichtspagina's.** `/pages/collection` 37 woorden, `/pages/contact` 46, `/pages/retail` 95, `/pages/pilates` 101, `/pages/clubwear` 110. De sportpagina's (630–650) en productpagina's (1.140–1.250) zijn voldoende.
- **Koppen.** Homepage en productpagina's hebben één H1. De theme-koppen "Taal" (×2), "Je winkelwagen is leeg" (×2) en "Zoekopdracht" staan nog als H2 op elke pagina, waardoor de echte H2's tussen ruis staan.
- **Kannibalisatie.** Het v1-product heeft titel "Gripsokken | Maximale Grip voor Elke Sport | HÏ Grip" en concurreert met de collectie op de kernterm "gripsokken". De collectie-titel noemt "rugby" zonder rugbypagina.
- **Afbeeldingen.** Op de meeste pagina's mist één afbeelding een alt-tekst (was 29% op 25-9). Alleen op de homepage (4) en de sportpagina's (3–4) is het nog meer dan één.
- **Prestaties (indicatief).** Serverresponstijd 0,35–0,9 s en een homepage-HTML van 353 KB. Een productpagina laadt 67 scripts, 41–59 afbeeldingen en nauwelijks WebP/AVIF in de markup. Een echte Lighthouse- of CrUX-meting heb ik niet gedraaid; de lab-LCP van 5,5–7,8 s uit [[2026-09-25-seo-audit]] is dus niet opnieuw bevestigd.

### AEO — antwoordmachines en featured snippets

- **Sterk:** homepage, FAQ-pagina en de drie sportpagina's hebben `FAQPage`-schema, en de sportpagina's hebben vraag-H2's ("Waarom grip het verschil maakt in padel", "Zo kies je de juiste gripsok").
- **Zwak:** de blog "Wat zijn gripsokken?", de pagina die op de belangrijkste informatieve vraag moet scoren, geeft wel een directe definitie in zin 1, maar heeft ±400 woorden, geen auteur, geen bron en geen interne links naar product of sport. Concurrent FitSockr heeft al een post op dezelfde vraag ([[2026-09-30-growth-radar-ai-search]]).
- **Risico in het schema.** De eerste FAQ-vraag op de homepage ("Wat zijn de voordelen van gripsokken?") belooft "minder risico op blessures of blaren" en "ontworpen door professionals". Dat is niet onderbouwd en staat in machineleesbare vorm, dus een AI-antwoord kan het als HÏ Grip-claim overnemen.

### GEO — genoemd worden door AI-systemen

- **Entiteit is kaal.** `Organization` bevat alleen naam, logo en url (en op sportpagina's nog de verkeerde url, zie [[2026-09-25-seo-audit]]). Geen `sameAs`, geen omschrijving, geen oprichters, geen contactgegevens. AI-systemen kunnen het merk daardoor niet koppelen aan Instagram, TikTok of Trustpilot.
- **`/llms.txt` is Shopify-standaard en gaat over bestellen door agents** (UCP/MCP, Shop-skill), niet over wie HÏ Grip is. Dat helpt agent-checkout, niet merkherkenning. Het bestand valt buiten het theme; merkuitleg hoort daarom op de site zelf (over-ons, missie) en in het schema.
- **Crawlers.** `robots.txt` blokkeert geen AI-bot (geen regels voor GPTBot, ClaudeBot, PerplexityBot of Google-Extended). Dat is goed voor GEO; er is geen reden om dit te wijzigen.
- **Externe aanwezigheid.** In drie zoekopdrachten (`gripsokken kopen`, `wat zijn gripsokken padel voetbal HÏ Grip higrip.nl`, `beste gripsokken voor padel tennis welk merk`) kwam higrip.nl niet voor. Decathlon, FOLD Reformer en bol.com domineren. Beperking: de zoektool zoekt alleen in de VS, dus dit is een signaal, geen meting van Nederlandse resultaten.
- **Citeerbare feiten ontbreken als blok.** De wrijvingswaarden (0,60 naar 1,17, Apps et al. 2022) staan wel op alle sportpagina's, maar als lopende tekst. Een korte vergelijkingstabel "gripsok versus gewone sok" met de bron erbij is het formaat dat AI-systemen het vaakst overnemen.

### AIO — Google AI Overviews en AI Mode

- **Structuur die AI Overviews belonen is grotendeels aanwezig** op de sportpagina's (vraag-kop, direct antwoord, FAQ). De blogartikelen missen die structuur, en 20 daarvan sturen naar `/collections/all` ([[2026-09-25-seo-audit]]).
- **Productfeed.** AI Mode en winkelen via AI leunen op Merchant Center. In het Product-schema ontbreken `gtin`, verzend- en retourdata, en de beschikbaarheid (`InStock` op alle drie de 2.0-varianten) wijkt af van het feitenbestand. Dat kan afkeuringen of verkeerde weergave veroorzaken. Zie ook de Merchant Center-punten in `05_Research/_backlog/ACTIEBACKLOG.md`.
- **Reviews.** Er is geen `aggregateRating`. Dat is correct zolang er geen reviewapp en geen zichtbare reviews zijn.

### SXO — van zoekintentie naar aankoop

- **Intentie sluit goed aan op de sportpagina's.** Een zoeker op "gripsokken voor padel" landt op een pagina met een eigen H1, uitleg waarom grip ertoe doet, een inline productkaart (2.0 wit) en een keuzehulp.
- **Het vertrouwen wordt ondermijnd** door `/pages/ons-verhaal`: de oprichters hebben als tekst Shopify-voorbeeldtekst ("overtreft deze kenmerkende bestseller alle verwachtingen", "We kunnen voor bepaalde artikelen geen retouren accepteren"). Voor een koper die twijfelt over een onbekend merk is dat de eerste plek waar hij kijkt.
- **Beleid is niet meer tegenstrijdig tussen product en FAQ**, maar `/pages/retourbeleid` zegt nog "ongeopend" en 25% herbevoorradingskosten naast "30 dagen". Dat staat haaks op de productpagina ("30 dagen retour") en is een conversie- en juridisch risico (zie [[2026-09-07-compliance-todo]]).
- **B2B-zoekers** komen op pagina's van ±100 woorden zonder prijs- of afnamerichting.

## Wat niet lukte

Na ±26 verzoeken blokkeerde Shopify's botbescherming mijn verbinding (HTTP 403 "Verifying your connection"). Daardoor heb ik de 23 blogartikelen, `/blogs/*`, `/pages/gripsokken-voor-rugby` en `/en/*` niet allemaal met de crawler kunnen ophalen; rugby (404), de blog "Wat zijn gripsokken?" en de EN-homepage heb ik wel via WebFetch gecontroleerd. De overige artikelen en `/en/pages/*` zijn dus niet opnieuw beoordeeld. Er is geen Lighthouse-run, geen Search Console- of GA4-export gedraaid, dus er zijn geen prestatie- en ranking-cijfers. De AI-zichtbaarheidscheck gebruikte een zoektool die alleen in de VS zoekt. Het beleid op `/policies/refund-policy` (14 dagen op 28-9) is niet opnieuw gecontroleerd: `[CHECK]`.

## Bronnen

- Live crawl van www.higrip.nl op 8-10-2026 (26 NL-pagina's: HTML, koppen, meta's, canonical, hreflang, JSON-LD), `robots.txt`, `sitemap.xml`, `llms.txt`
- WebFetch: `/pages/gripsokken-voor-rugby`, `/blogs/hi-grip/wat-zijn-gripsokken`, `/en/`
- Websearch (VS-only): `gripsokken kopen`, `wat zijn gripsokken padel voetbal HÏ Grip higrip.nl`, `beste gripsokken voor padel tennis welk merk`
- Vault: [[Feiten & Actuele Staat]], [[2026-09-25-seo-audit]], [[2026-10-05-regressiecheck]], `05_Research/_backlog/ACTIEBACKLOG.md`

## Aantekeningen
