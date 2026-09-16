# Claude SEO Plugin — Skills & Agents

> Vastgelegd 2026-09-16. Dit is de technische documentatie van de **`claude-seo` Claude Code plugin** (open-source, [`AgriciDaniel/claude-seo`](https://github.com/AgriciDaniel/claude-seo)) — een losstaande, veel zwaardere laag bovenop de bestaande `/shopify-seo` skill. Installatie-stappen voor het team staan in de `HI-Grip-claude-setup`-repo ([[Technische Procedures]] · zie "Waar staat wat" op [[Home]]).

---

## Wat het is

25 sub-skills en 18 specialist-(sub)agents die parallel draaien voor technische SEO, contentkwaliteit (E-E-A-T), Schema.org, AI-zoekoptimalisatie (GEO/AI Overviews), lokale SEO, e-commerce en internationale SEO. Elke audit levert een geprioriteerd actieplan met een falsifieerbaarheids-check per aanbeveling ("hoe weten we dat dit niet gewerkt heeft?").

Dit vervangt `/shopify-seo` niet: `/shopify-seo` blijft de HÏ Grip-specifieke skill (merk-brede strategie, Shopify Admin-praktijk, verwijst naar [[SEO Strategie & Keywords]]). `claude-seo` is de generieke, veel diepere audit-motor — gebruik hem om bevindingen te genereren, en verwerk de HÏ Grip-relevante uitkomsten daarna terug in [[SEO Strategie & Keywords]].

## Hoofdcommando

Alles loopt via `/seo <subcommando> <url/topic>`. Eerste keer per machine: `/seo setup` (bouwt een geïsoleerde Python-omgeving + Playwright Chromium in Claude's eigen plugin-data, raakt niets globaals aan). Status checken: `/seo doctor`.

## Sub-skills / commando's (32 totaal)

| Commando | Doel |
|---|---|
| `/seo audit <url>` | Volledige site-audit, parallelle sub-agents |
| `/seo page <url>` | Diepe analyse van één pagina |
| `/seo technical <url>` | Technische SEO (crawlability, indexability, security, CWV, JS-rendering, IndexNow — 9 categorieën) |
| `/seo content <url>` | E-E-A-T en contentkwaliteit, incl. AI-typische fraseringen/watermerken opschonen |
| `/seo content-brief <topic>` | Contentbrief: doel-keywords, outline, interne links, per-sectie woordentelling |
| `/seo schema <url>` | Schema.org (JSON-LD) detecteren, valideren, genereren |
| `/seo geo <url>` | AI Overviews / Generative Engine Optimization (ChatGPT, Perplexity, Bing Copilot) |
| `/seo sitemap <url\|generate>` | Sitemaps analyseren of genereren |
| `/seo images <url>` | Beeldoptimalisatie (alt-tekst, formaat, CLS, WebP/AVIF) |
| `/seo plan <type>` | Strategische SEO-planning (saas/local/ecommerce/publisher/agency) |
| `/seo programmatic <url>` | Programmatische SEO op schaal |
| `/seo competitor-pages <url>` | Vergelijkingspagina's ("X vs Y", alternatieven) |
| `/seo local <url>` | Lokale SEO (GBP, NAP, citations, reviews, map pack) |
| `/seo maps [cmd]` | Maps-intelligence (geo-grid ranking, GBP-audit, concurrenten in straal) |
| `/seo hreflang <url>` | Hreflang / i18n-audit en -generatie |
| `/seo google [cmd]` | Google Search Console, PageSpeed, CrUX, Indexing API, GA4 |
| `/seo backlinks <url>` | Backlinkprofiel (Moz, Bing Webmaster, Common Crawl) |
| `/seo cluster <keyword>` | SERP-gebaseerde topic clustering (hub-and-spoke) |
| `/seo sxo <url>` | Search Experience Optimization — pagina-type mismatches, persona-scoring |
| `/seo drift baseline\|compare\|history <url>` | SEO-regressie monitoren (SQLite-snapshots) |
| `/seo ecommerce <url>` | Marketplace/e-commerce SEO (Google Shopping, Amazon, product-schema) |
| `/seo flow [stage]` | FLOW-framework prompts (Find → Leverage → Optimize → Win) |

Volledige lijst incl. extensies (Firecrawl, DataForSEO, Ahrefs, SE Ranking, Profound, Bing Webmaster, Unlighthouse, image-gen): zie de plugin-README lokaal in `~/.claude/plugins/marketplaces/AgriciDaniel-claude-seo/README.md`, of `docs/COMMANDS.md` daarin.

## Vereisten & extensies

- Basis werkt zonder extra API's: Python 3.10+ en Claude Code zelf, `/seo setup` regelt de rest.
- Optioneel: Playwright Chromium (SPA-rendering/screenshots), Google API-credentials (GSC/PageSpeed/CrUX/GA4 via `/seo google setup`).
- Optionele MCP-extensies voor live data (elk los te installeren, plugin-core werkt zonder): **DataForSEO** (SERP/keywords/backlinks/AI-visibility), **Firecrawl** (full-site crawl), **Banana** (AI-beeldgeneratie voor OG/hero-images), **Ahrefs**, **SE Ranking**, **Profound**, **Bing Webmaster**, **Unlighthouse**.
- Zware agents (`seo-content`, `seo-geo`, `seo-sxo`, `seo-cluster`, `seo-drift`) draaien op Opus — een volledige `/seo audit` kost dus meer dan de losse sub-commando's.

## Installatie voor het team

Zie de stap-voor-stap installatie-instructies in de `HI-Grip-claude-setup`-repo: `claude-seo-setup.md` (README verwijst ernaar onder "Wat zit er in"). Kort: `/plugin marketplace add AgriciDaniel/claude-seo` → `/plugin install claude-seo@agricidaniel-claude-seo` → `/seo setup`.

## Relatie tot de vault

- HÏ Grip-specifieke keyword-prioriteiten en beslissingen blijven in [[SEO Strategie & Keywords]] — `claude-seo` is een analyse-tool, geen bron van waarheid voor merkkeuzes.
- Grote audit-uitkomsten die tot een strategiewijziging leiden: verwerk de conclusie in [[SEO Strategie & Keywords]], niet alleen in een losse chatsessie.
- Sub-agent-overzicht (wie/wanneer): zie de plugin-README zelf voor de volledige 18-agent-lijst; deze notitie documenteert vooral *dat en hoe* het beschikbaar is, niet elke agent-body 1-op-1.

## Gerelateerde bestanden

- [[SEO Strategie & Keywords]]
- [[Website Structuur & Sitemap]]
- [[Technische Procedures]]
