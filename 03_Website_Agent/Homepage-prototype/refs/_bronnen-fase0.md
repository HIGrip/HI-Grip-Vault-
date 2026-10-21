# Bronnen Fase 0 (werknotitie Denzel, 18-10-2026)

## Bronthema
- `shopify theme list` (18-10): "Bijgewerkte kopie van AI website workspace 2.0" = #202398040391, unpublished, één keer aanwezig.
- Read-only gepulld naar `theme-ref/`. Live thema = #202667458887 (niet aangeraakt).

## Sport-URL's (theme-ref/templates/index.json)
| Sport | URL | Regel |
|---|---|---|
| Tennis | /pages/gripsokken-voor-tennis | 743 |
| Voetbal | /pages/gripsokken-voor-voetbal | 751 |
| Padel | /pages/gripsokken-voor-padel | 759 |
| Rugby | /pages/gripsokken-voor-rugby | 767 |
Templates: page.sport-padel/-tennis/-voetbal/-rugby.json. Live-check (404 of niet) volgt in Fase 2.

## Zakelijke pagina (theme-ref/templates/page.zakelijk.json)
- URL: /pages/zakelijk (enige B2B-bestemming).
- Ankers: #vertrouwd (109), #route (184), #product (282), #retailers (358), #clubs (438), #proces (531), #bewijs (549), #faq (640), #aanvragen (661). Geen pilates-anker.
- Voetbalclubs: "Onder meer bij SVS, V.V. Spirit, V.V. Lyra en Concordia." (regel 446, sectie club)
- Retail: "Al in het schap bij Sport 2000 — Naaldwijk en Nootdorp" (374–375, sectie retail)
- Logo's "Vertrouwd door" (69–96): Hogeschool Rotterdam, V.V. Spirit, SYTH (Say Yes To Health), Sport 2000.
- **Geen** kopjes Voetbal / Retail / Gecustomised en **geen** pilates-klanten met naam in het thema.
- Afwijking: retail-tag adviesprijs €19,95 (regel 367) ≠ feitenbestand €17,95.
- FAQ: sectie zk-faq (7 vragen, schema_markup true), regel 577 e.v.

## Live /pages/zakelijk (curl 18-10)
- Andere opbouw dan het thema: tegels SPORTCLUBS · RETAIL · PILATES, stappen 1–6, FAQ met 3 vragen, "VETROUWD DOOR" (typfout live) zonder leesbare namen.
- Ankers #retailers / #clubs bestaan live niet (pas na livegang van het thema).

## Referenties (Artifact read, 18-10) — alle vijf leesbaar, eigendom, ruwe HTML
- 7fnrgk9AMRRo4BhHtW41cg: keuzepagina; v3 = schets-3-draai.html (hero 70svh foto + "Elke zone heeft een taak" met 360°-frames f360/sNNN.webp).
- V9rrUz6EWAPMmavz3JSC8N: homepage-versie met "Op de baan, het veld en in de gym" (track) en statement "Je schoen grijpt de vloer…".
- QL6Whv59zVzW4rKgVgKJ94: 360°-draaitafel, 411 frames f360/sNNN.webp (413 bestanden).
- 2E6u9cpF5q9vDPE1ELJ2fq: vergelijkpagina, sectie "2.0. Ultieme performance." met callouts + pt-markers.
- 9jFG8a6fQshr9bkpZFL8vJ: afgekeurd prototype, outro "Ga door waar anderen stoppen" (sectie 18).

## Lokale foto's
- Gevonden: `…/Content - HÏ Grip/OVER ONS FOTOS/Teamfoto - HÏ Grip.jpg` (2,6 MB). Geen bestand "Teamfoto 3".
- Battleface-screenshot: niet gevonden.

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[03 Website Agent — Index]] · [[Home]]
