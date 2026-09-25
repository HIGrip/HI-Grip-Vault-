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

| # | Routine | Promptbestand | Status |
|---|---|---|---|
| — | Growth Radar | `Growth Radar.md` | Draait lokaal (brug); verhuist naar info@ |
| — | SEO-regressiecheck | `SEO-regressiecheck.md` | Draait lokaal (brug); verhuist naar info@ |
| — | SEO- en conversietest | `SEO- en conversietest.md` | Draait lokaal (brug); verhuist naar info@ |
| — | Denzel-weekoverzicht | [[Denzel Weekoverzicht — Routine]] | Draait op info@; stap 9 moet nog worden bijgewerkt |
| 1 | Search Console & rankings | `Search Console & rankings.md` | Nieuw, eerste in de rij |
| 2 | Backlinks & Merchant Center | `Backlinks & Merchant Center.md` | Nieuw |
| 3 | Maandelijkse strategiesynthese | `Strategiesynthese maandelijks.md` | Nieuw |
| 4 | Concurrentie-monitor | `Concurrentie-monitor.md` | Nieuw |

## Wat elke cloudroutine op info@ nodig heeft

1. **Bron:** de vault-repo `github.com/HIGrip/HI-Grip-Vault-`, met schrijfrechten (commit en push).
2. **Netwerk:** een omgeving met toegang tot higrip.nl en het open web. De verwijderde routine "website" faalde omdat higrip.nl geblokkeerd was.
3. **Connectors:** per routine aanzetten, want wat niet aan staat bestaat niet voor de routine. Zie de tabel "Waar data vandaan komt" in [[Feiten & Actuele Staat]].
4. **Skills:** in de vault onder `.claude/skills/`, zodat ze ook in de cloud beschikbaar zijn.
5. **Geheugen:** `05_Research/_geheugen/<routine>.md` volgens de regel in `_geheugen/README.md`.
