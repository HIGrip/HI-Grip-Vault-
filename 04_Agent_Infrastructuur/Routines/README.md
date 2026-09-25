# Routines — overzicht en rolverdeling

> Alle routines draaien (straks) als cloudroutine op het account **info@higrip.nl**, zodat ze altijd draaien en iedereen ze ziet. De prompt van elke routine staat in deze map; de routine op claude.ai/code/routines bevat alleen een korte verwijzing naar het promptbestand. Een prompt wijzigen = dit bestand wijzigen en committen, niet de routine zelf.
>
> Besloten op 25 september 2026, zie [[2026-09-25-evaluatie-routines]].

## Rolverdeling — elke routine één taak, geen overlap

| Routine | Rol | Doet NIET |
|---|---|---|
| **Growth Radar** (dagelijks) | Nieuws en trends uit de markt (SEO, AI-search, CRO, social) vertalen naar HÏ Grip | De eigen site controleren |
| **SEO-regressiecheck** (maandag) | **De enige technische controle van de site:** status, titels, H1, canonicals, schema, redirects, sitemap, theme check | Verbeteringen bouwen, trends zoeken |
| **SEO- en conversietest** (wekelijks) | Meten → verbeteringen bouwen als concept in Shopify → testen of eerdere verbeteringen werken | Technische regressies zoeken (dat doet de regressiecheck) |
| **Search Console & rankings** (wekelijks) | Posities, klikken, vertoningen, zoektermen, stijgers/dalers per pagina | Site-techniek |
| **Backlinks & Merchant Center** (maandelijks) | Autoriteit, nieuwe en verloren links, Google Shopping-status en -fouten | On-page SEO |
| **Denzel-weekoverzicht** (maandag) | Samenvatten wat alle routines vonden, partnerships, GA4-weekrapport, beslissingen voor Lars | Een eigen SEO- of site-check (leest de regressiecheck) |
| **Maandelijkse strategiesynthese** (1e maandag) | Alle notities van de maand → 3–5 onderbouwde strategische stappen | Nieuw onderzoek |
| **Concurrentie-monitor** (tweewekelijks) | Concurrenten: prijzen, pagina's, content, **Meta Ad Library** → input voor eigen ads | Eigen site |

## Status

Alle tijden zijn Nederlandse tijd. Ze staan bewust vroeg: zo begint het gebruiksvenster van 5 uur op info@ rond 05:30 en reset het rond 10:30.

| Routine (naam op info@) | Promptbestand | Wanneer | Status |
|---|---|---|---|
| HÏ Grip — Growth Radar | `Growth Radar.md` | dagelijks 05:30 | ✅ Cloud op info@ (sinds 25-09) |
| HÏ Grip — SEO-regressiecheck | `SEO-regressiecheck.md` | maandag 06:00 | ✅ Cloud op info@ |
| Denzel-weekoverzicht | `Denzel-weekoverzicht.md` (oude prompt: `Denzel-weekoverzicht — origineel tot 2026-09-25.md`) | maandag 06:45 | ✅ Cloud op info@ |
| HÏ Grip — SEO- en conversietest | `SEO- en conversietest.md` | maandag 07:30 | ✅ Cloud op info@ |
| HÏ Grip — Search Console & rankings | `Search Console & rankings.md` | woensdag 06:00 | ✅ Cloud op info@, getest 25-09 (GS-01) |
| Backlinks & Merchant Center | `Backlinks & Merchant Center.md` | maandelijks | Nog te bouwen (#2) |
| Maandelijkse strategiesynthese | `Strategiesynthese maandelijks.md` | 1e maandag (Opus) | Nog te bouwen (#3) |
| Concurrentie-monitor | `Concurrentie-monitor.md` | tweewekelijks | Nog te bouwen (#4) |

De lokale taken op de pc van Timo (`~/.claude/scheduled-tasks/`) staan sinds 25-09 **uit**, zodat niets dubbel draait. Instellingen per cloudroutine: repository `HI-Grip-Vault-`, de omgeving met `GOOGLE_SA_JSON_B64`, model Sonnet 5, Shopify aan, BigQuery uit, auto-fix PR uit, notify aan.

## Wat elke cloudroutine op info@ nodig heeft

1. **Bron:** de vault-repo `github.com/HIGrip/HI-Grip-Vault-`, met schrijfrechten (commit en push).
2. **Netwerk:** een omgeving met toegang tot higrip.nl en het open web. De verwijderde routine "website" faalde omdat higrip.nl geblokkeerd was.
3. **Connectors:** per routine aanzetten, want wat niet aan staat bestaat niet voor de routine. Zie de tabel "Waar data vandaan komt" in [[Feiten & Actuele Staat]].
4. **Google Analytics + Search Console:** claude.ai heeft hiervoor geen connector. De routines halen de cijfers op met `python 05_Research/_tools/google_data.py ga4|gsc|check`, via de servicesleutel `ga4-mcp@higrip-analytics.iam.gserviceaccount.com` (alleen-lezen). In de cloudomgeving op info@ zet je daarvoor:
   - **Setup-script:** `pip install cffi google-analytics-data google-api-python-client google-auth`. Zonder `cffi` crasht de import in de cloudcontainer. Gebruik **geen** `--upgrade` en noem `cryptography` niet, want de systeemversie (Debian) kan niet vervangen worden en dan faalt het hele setup-script.
   - **Omgevingsvariabele:** `GOOGLE_SA_JSON_B64` = de base64-versie van het sleutelbestand (zie de uitleg hieronder)
5. **Skills:** in de vault onder `.claude/skills/`, zodat ze ook in de cloud beschikbaar zijn.

### Google-sleutel in de cloud zetten (eenmalig)
1. Op de pc met het sleutelbestand, in PowerShell. Dit kopieert de sleutel naar je klembord zonder hem te tonen:
   `[Convert]::ToBase64String([IO.File]::ReadAllBytes("C:\Users\Test\.claude\ga4-mcp-key.json")) | Set-Clipboard`
2. Ingelogd als info@: claude.ai/code → instellingen van de omgeving → omgevingsvariabelen → naam `GOOGLE_SA_JSON_B64`, waarde = plakken (`Ctrl + V`). Setup-script zoals hierboven. Opslaan.
3. Plak de sleutel nergens anders (niet in een chat, niet in de vault).
4. Test het met een routine of sessie in die omgeving: `python 05_Research/_tools/google_data.py check` moet bij beide "ok" geven.

Search Console werkt pas als (a) de **Google Search Console API** aan staat in Google Cloud-project `higrip-analytics` en (b) het serviceaccount als gebruiker aan de property higrip.nl is toegevoegd.
5. **Geheugen:** `05_Research/_geheugen/<routine>.md` volgens de regel in `_geheugen/README.md`.
