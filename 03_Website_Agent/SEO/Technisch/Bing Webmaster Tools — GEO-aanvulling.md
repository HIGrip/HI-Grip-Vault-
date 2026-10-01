# Bing Webmaster Tools — GEO-aanvulling

**Gekoppeld:** 2026-09-28 · **Site:** https://www.higrip.nl/ (geverifieerd in Bing)
**API-key:** staat lokaal in `_prive/API-keys.md` (gitignored, niet op GitHub) en in `~/.config/claude-seo/backlinks-api.json`.

## Waarom
Bing Webmaster Tools is er om de **GEO** (vindbaarheid in AI-zoekmachines) van HÏ Grip te verbeteren. Microsoft Copilot haalt zijn antwoorden uit de Bing-index, en ook ChatGPT Search leunt deels op Bing. In het [[GEO Plan (2026-09-21)]] stond Bing Copilot op 50/100 met "positie in Bing-index onbekend". Met deze koppeling kunnen we die positie nu wel zien.

## Aanvulling, geen vervanging
Google Analytics (GA4, via `analytics-mcp`) blijft de hoofdbron. Bing vult aan:

| Vraag | Bron |
|---|---|
| Wat doen bezoekers op de site en wat levert het op (sessies, funnel, conversie)? | **GA4** |
| Hoeveel verkeer komt er uit AI-bronnen (copilot.com, chatgpt.com, perplexity.ai als referral)? | **GA4** (kanaal/bron-rapport) |
| Staat HÏ Grip in de Bing-index, op welke zoekwoorden, met hoeveel vertoningen? | **Bing Webmaster** |
| Welke sites linken naar ons volgens Bing? | **Bing Webmaster** |
| Nieuwe/aangepaste pagina's snel laten indexeren (IndexNow)? | **Bing Webmaster** (IndexNow nog niet ingesteld) |

Dus: Bing laat zien of we **gevonden** worden (in de index die Copilot gebruikt). GA4 laat zien wat dat verkeer **doet**. Kijk bij GEO-vragen altijd naar allebei.

## Eerste meting (2026-09-28)
Periode 18-2-2026 t/m 25-9-2026:
- **502 vertoningen, 19 klikken** in Bing
- 104 unieke zoektermen. De top bestaat vooral uit **merkzoektermen** (hi grip 91, highgrip 15, hi-grip 6, high grips 5). Het enige niet-merkgebonden zoekwoord met volume is **grip sokken (40)**.
- Merkvarianten zonder umlaut en met tikfouten ("highgrip", "high grips") komen vaak voor. Dat is een signaal voor entiteitsherkenning (sameAs/Organization-schema, consistente naam).
- **Backlinks volgens Bing: 0**. Dat bevestigt de zwakke autoriteit uit de SEO-audit.
- Er komen ook oude blog-zoektermen voorbij ("plantaardige sportvoeding trends"), die buiten de beachhead-focus vallen.

**GA4 ter vergelijking** (1-8 t/m 27-9-2026, AI- en Bing-bronnen): chatgpt.com 3 sessies, bing 2 sessies, 0 aankopen. Copilot, Perplexity en Gemini kwamen niet voor. AI-verkeer is dus nog verwaarloosbaar. Dit is de nulmeting.

## Gebruik
- Via de Claude SEO-plugin: `/seo bing links https://www.higrip.nl/` of `/seo backlinks` (neemt Bing mee)
- De `seo-agent` (via `/website-agent`) kan dit automatisch doorzetten naar `claude-seo:seo-backlinks`
- Nog open: **IndexNow-key** instellen (key-bestand publiceren op higrip.nl), zodat nieuwe sportpagina's direct bij Bing/Copilot binnenkomen

Zie ook: [[Claude SEO Plugin — Skills & Agents]], [[GEO Plan (2026-09-21)]]

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[03 Website Agent — Index]] · [[Home]]
