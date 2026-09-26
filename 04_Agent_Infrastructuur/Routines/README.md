# Routines — overzicht en rolverdeling

> Alle routines draaien (straks) als cloudroutine op het account **info@higrip.nl**, zodat ze altijd draaien en iedereen ze ziet. De prompt van elke routine staat in deze map; de routine op claude.ai/code/routines bevat alleen een korte verwijzing naar het promptbestand. Een prompt wijzigen = dit bestand wijzigen en committen, niet de routine zelf.
>
> Besloten op 25 september 2026, zie [[2026-09-25-evaluatie-routines]]. Uitgebreid op 26 september 2026 met zes nieuwe routines, de Uitvoerder en werken vanuit het dashboard.

## Rolverdeling — elke routine één taak, geen overlap

| Routine | Rol | Doet NIET |
|---|---|---|
| **Actiecontrole** (dagelijks 05:00) | **De enige die automatisch afvinkt:** alle open acties controleren met bewijs (`CONTROLE.json`), dubbelen markeren, backlogkop bijwerken, zondag opruimen. Daarnaast: dashboard-sync, eenmalig per actie beoordelen of Claude hem kan doen (`UITVOERBAAR.json`) en de dashboardcijfers verversen (`_data/`) | Onderzoek, notities, nieuwe acties, actieteksten wijzigen |
| **Growth Radar** (dagelijks 05:30) | Nieuws en trends uit de markt (SEO, AI-search, CRO, social) vertalen naar HÏ Grip | De eigen site controleren |
| **Uitvoerder** (dagelijks 06:15) | Goedgekeurde opdrachten van het dashboard uitvoeren binnen de grenzen: concepten in de vault, code in het testthema, met een resultaat en de stap voor een mens | Live zetten, versturen, afvinken, eigen onderzoek |
| **SEO-regressiecheck** (maandag) | **De enige technische controle van de site:** status, titels, H1, canonicals, schema, redirects, sitemap, theme check | Verbeteringen bouwen, trends zoeken, bestaande backlogpunten opnieuw controleren of afvinken |
| **SEO- en conversietest** (maandag) | Meten → verbeteringen bouwen als concept in Shopify → testen of eerdere verbeteringen werken | Technische regressies zoeken |
| **Search Console & rankings** (woensdag) | Posities, klikken, vertoningen, zoektermen, stijgers/dalers per pagina | Site-techniek |
| **Denzel-weekoverzicht** (maandag) | Samenvatten wat alle routines vonden, B2B en partnerships, GA4-weekrapport, besluiten voor Lars | Een eigen SEO- of site-check, kansen herhalen |
| **Verbanden & kansen** (zaterdag; 1e zaterdag = maandeditie) | Verbanden tussen notities die geen routine los ziet → kansen met bewijs; opgepakte kansen naar de backlog; maandeditie met 3–5 strategische stappen. **Vervangt de maandelijkse strategiesynthese** | Nieuw webonderzoek, samenvatten per routine |
| **Klantstem** (1e en 15e) | Reviews en gesprekken over HÏ Grip en concurrenten → top 5 klachten en wensen in klanttaal → copy, FAQ, product | Prijzen en ads van concurrenten, productkansen doorrekenen |
| **Website-UX** (4e en 18e) | higrip.nl op mobiel + voorbeelden van buiten + CWV → één ontwerpvoorstel met code-snippet per run | Bouwen in een thema, techniek, SEO-teksten |
| **Productradar** (8e) | Nieuwe productkansen (clubsokken, kindermaten, per sport, lengtes, skisokken-voorbereiding), max 3 met rekensom en goedkoopste test | Reviews verzamelen, concurrenten volgen, leveranciers zoeken |
| **Concurrentie-monitor** (8e en 22e) | Concurrenten: prijzen, producten, pagina's, **Meta Ad Library** → input voor eigen ads | Reviews, eigen site, rankings |
| **Materialen & productie** (22e) | Gripmaterialen, wasbestendigheid, garens, certificering, leveranciers/MOQ, EU-regels (met primaire bronnen) | Productkansen doorrekenen, claims op de site aanpassen, leveranciers benaderen |
| **Backlinks & Merchant Center** (1e) | Nieuwe en verloren links, link-kansen, Google Shopping-status en -fouten | On-page SEO, rankings |

**Afvinken** gebeurt alleen door de actiecontrole (met bewijs) of door een mens via het dashboard of de vault. De andere routines lezen `05_Research/_backlog/CONTROLE.json`, controleren bestaande acties niet opnieuw en stellen niets voor wat daar als gedaan of dubbel staat.

**Tweewekelijks en maandelijks** draaien met een guard: staat in het eigen geheugen een run van minder dan 10 dagen (tweewekelijks) of 25 dagen (maandelijks) geleden, dan stopt de routine direct met "overgeslagen". Kan de planner op info@ geen dagen van de maand aan, zet de routine dan wekelijks op de terugvaldag uit de tabel: de guard zorgt voor het juiste ritme.

## Status

Alle tijden zijn Nederlandse tijd. Ze staan bewust vroeg: zo begint het gebruiksvenster van 5 uur op info@ rond 05:30 en reset het rond 10:30.

| Routine (naam op info@) | Promptbestand | Wanneer (terugval) | Model | Status |
|---|---|---|---|---|
| HÏ Grip — Actiecontrole | `Actiecontrole.md` | dagelijks 05:00 | Sonnet 5 | ✅ Cloud op info@ (sinds 26-09) |
| HÏ Grip — Growth Radar | `Growth Radar.md` | dagelijks 05:30 | Sonnet 5 | ✅ Cloud op info@ (sinds 25-09) |
| HÏ Grip — Uitvoerder | `Uitvoerder.md` | dagelijks 06:15 | Sonnet 5 | Nog aanmaken op info@ |
| HÏ Grip — SEO-regressiecheck | `SEO-regressiecheck.md` | maandag 06:00 | Sonnet 5 | ✅ Cloud op info@ |
| Denzel-weekoverzicht | `Denzel-weekoverzicht.md` (oude prompt: `Denzel-weekoverzicht — origineel tot 2026-09-25.md`) | maandag 06:45 | Sonnet 5 | ✅ Cloud op info@ |
| HÏ Grip — SEO- en conversietest | `SEO- en conversietest.md` | maandag 07:30 | Sonnet 5 | ✅ Cloud op info@ |
| HÏ Grip — Search Console & rankings | `Search Console & rankings.md` | woensdag 06:00 | Sonnet 5 | ✅ Cloud op info@, getest 25-09 (GS-01) |
| HÏ Grip — Verbanden & kansen | `Verbanden & kansen.md` | zaterdag 06:30 | Opus | Nog aanmaken op info@ |
| HÏ Grip — Klantstem | `Klantstem.md` | 1e en 15e 06:45 (donderdag) | Sonnet 5 | Nog aanmaken op info@ |
| HÏ Grip — Website-UX | `Website-UX.md` | 4e en 18e 06:45 (vrijdag) | Sonnet 5 | Nog aanmaken op info@ |
| HÏ Grip — Productradar | `Productradar.md` | 8e 07:15 (dinsdag) | Opus | Nog aanmaken op info@ |
| HÏ Grip — Concurrentie-monitor | `Concurrentie-monitor.md` | 8e en 22e 06:30 (dinsdag) | Sonnet 5 | Nog aanmaken op info@ |
| HÏ Grip — Materialen & productie | `Materialen & productie.md` | 22e 07:15 (donderdag) | Opus | Nog aanmaken op info@ |
| HÏ Grip — Backlinks & Merchant Center | `Backlinks & Merchant Center.md` | 1e 07:30 (woensdag) | Sonnet 5 | Nog aanmaken op info@ |
| ~~Maandelijkse strategiesynthese~~ | — | — | — | Vervallen: opgegaan in de maandeditie van Verbanden & kansen |

De lokale taken op de pc van Timo (`~/.claude/scheduled-tasks/`) staan sinds 25-09 **uit**, zodat niets dubbel draait.

**Instellingen per cloudroutine:** repository `HIGrip/HI-Grip-Vault-` met schrijfrechten, de omgeving met `GOOGLE_SA_JSON_B64` en het setup-script, netwerk "Full", auto-fix PR uit, notify aan. De verwijzingsprompt is altijd: *"Lees en volg `04_Agent_Infrastructuur/Routines/<bestand>.md` in de HÏ Grip-vault, volledig en in de volgorde die daar staat."*

**Connectors per routine** (alleen aanzetten wat nodig is: elke connector kost tokens per run):

| Routine | Aan | Uit |
|---|---|---|
| Actiecontrole, Uitvoerder, SEO- en conversietest, Denzel | Shopify | de rest |
| Productradar, Backlinks & Merchant Center | Shopify (alleen lezen) | de rest |
| Concurrentie-monitor | Meta | de rest |
| Growth Radar, Klantstem, Website-UX, Materialen, Verbanden, regressiecheck, Search Console | geen | alle |

## Werken vanuit het dashboard

Het dashboard (https://claude.ai/artifact/KVXyNSCNEbKcj2EQGqkpuV) schrijft alleen wensen in zijn eigen database. De **sync** (`acties.py importeer`, zie `PROCEDURE.md` B) zet ze in de vault; de vault blijft de waarheid. De sync draait aan het begin van de Actiecontrole (05:00) en de Uitvoerder (06:15) en aan het eind van elke onderzoeksroutine.

- **Afvinken, status, aantekening** → notitie of `ACTIEBACKLOG.md`.
- **Beheer** (eigenaar, uitstellen tot, niet doen met reden, prioriteit) → `_backlog/BEHEER.json`. De Actiecontrole slaat acties op "niet doen" of met uitstel over.
- **Nieuwe actie** → een nieuw punt in `ACTIEBACKLOG.md` onder de gekozen P, met "Gevonden op: dashboard, <naam>, <datum>".
- **Laat Claude dit doen** → alleen bij acties die de Actiecontrole als `ja` of `deels` beoordeelde (`_backlog/UITVOERBAAR.json`, met "wat Claude doet" en "wat jij doet"). Goedkeuren met een toelichting → `_backlog/OPDRACHTEN.json` (`goedgekeurd`) → de **Uitvoerder** voert hem de volgende ochtend uit (max 5 per dag) → het resultaat (samenvatting, links, "voor jou") staat daarna op het dashboard. Intrekken kan zolang de opdracht nog niet `bezig` is. Live zetten en versturen doet altijd een mens.
- **Kansen** (uit Verbanden & kansen) → oppakken, parkeren of afwijzen → `BEHEER.json`. Opgepakte kansen zet Verbanden & kansen de zaterdag erna als backlogpunt `[kans]`; afgewezen kansen komen niet terug.
- **Cijfers en agenda** (`05_Research/_data/`) ververst de Actiecontrole elke ochtend: GA4 en Search Console per week, kernwoorden, agenda, Core Web Vitals, koppelingen en Shopify-totalen. Doelen en kernwoorden beheer je met de hand in `_data/instellingen.json`.

## Wat elke cloudroutine op info@ nodig heeft

1. **Bron:** de vault-repo `github.com/HIGrip/HI-Grip-Vault-`, met schrijfrechten (commit en push).
2. **Netwerk:** een omgeving met toegang tot higrip.nl en het open web. De verwijderde routine "website" faalde omdat higrip.nl geblokkeerd was.
3. **Connectors:** per routine aanzetten volgens de tabel hierboven, want wat niet aan staat bestaat niet voor de routine. Koppelen doe je als info@ op claude.ai → Instellingen → Connectors. De actuele stand per bron staat op het dashboard onder Koppelingen (`_data/koppelingen.json`).
4. **Google (servicesleutel, alleen lezen):** claude.ai heeft geen connector voor GA4, Search Console, Agenda, PageSpeed of Merchant Center. De routines gebruiken `python 05_Research/_tools/google_data.py` met de servicesleutel `ga4-mcp@higrip-analytics.iam.gserviceaccount.com`. In de cloudomgeving op info@ zet je daarvoor:
   - **Setup-script:** `pip install cffi google-analytics-data google-api-python-client google-auth`. Zonder `cffi` crasht de import in de cloudcontainer. Gebruik **geen** `--upgrade` en noem `cryptography` niet, want de systeemversie (Debian) kan niet vervangen worden en dan faalt het hele setup-script.
   - **Omgevingsvariabele:** `GOOGLE_SA_JSON_B64` = de base64-versie van het sleutelbestand (zie de uitleg hieronder). Optioneel `PAGESPEED_API_KEY`.
   - **Per bron eenmalig** (de exacte stappen staan ook in `_data/koppelingen.json`):
     - Search Console: de **Google Search Console API** aan in Cloud-project `higrip-analytics` en het serviceaccount als gebruiker aan de property higrip.nl.
     - Agenda: de **Google Calendar API** aan en de agenda van info@higrip.nl delen met het serviceaccount ("Alle afspraakdetails bekijken").
     - Core Web Vitals: de **PageSpeed Insights API** aan, of een API-sleutel als `PAGESPEED_API_KEY`.
     - Merchant Center: de **Merchant API** aan, het serviceaccount toevoegen onder Mensen en toegang, en het account-ID invullen in `05_Research/_data/instellingen.json` (`merchant.account_id`).
5. **Skills:** in de vault onder `.claude/skills/`, zodat ze ook in de cloud beschikbaar zijn.
6. **Geheugen:** `05_Research/_geheugen/<routine>.md` volgens de regel in `_geheugen/README.md`.

### Google-sleutel in de cloud zetten (eenmalig)
1. Op de pc met het sleutelbestand, in PowerShell. Dit kopieert de sleutel naar je klembord zonder hem te tonen:
   `[Convert]::ToBase64String([IO.File]::ReadAllBytes("C:\Users\Test\.claude\ga4-mcp-key.json")) | Set-Clipboard`
2. Ingelogd als info@: claude.ai/code → instellingen van de omgeving → omgevingsvariabelen → naam `GOOGLE_SA_JSON_B64`, waarde = plakken (`Ctrl + V`). Setup-script zoals hierboven. Opslaan.
3. Plak de sleutel nergens anders (niet in een chat, niet in de vault).
4. Test het met een routine of sessie in die omgeving: `python 05_Research/_tools/google_data.py check` moet bij beide "ok" geven, en `... dashboard` toont per onderdeel de status.
