---
id: 2026-09-16-seo-onderzoek-cloud-routine-website
titel: "SEO-onderzoek cloud-routine \"website\" — publieke data, 16 september 2026"
datum: 2026-09-16
bron: los
routine: ""
categorie: SEO
status: bekeken
prioriteit: P3
samenvatting: "De dagelijkse cloud-routine \"website\" maakte op 16 september een SEO/CRO-rapport op basis van alleen publieke data (Google-index, Trustpilot) — higrip.nl zelf was geblokkeerd. Nieuw en bruikbaar: verouderde numerieke URL's in de index, een hreflang-check NL/EN en een maattabel-widget; vijf claims spreken geverifieerde vault-feiten tegen en zijn hier gemarkeerd."
gerelateerd: [2026-09-15-seo-audit, 2026-09-04-werkdossier-stand-van-zaken, 2026-09-15-growth-radar-seo-content, 2026-09-16-growth-radar-ai-search, 2026-09-22-growth-radar-seo-content]
vervangt: []
bronbestand: "https://claude.ai/artifact/H5KiVWmh665yX9yTTKUseH"
deadline: ""
---
# SEO-onderzoek cloud-routine "website" — publieke data, 16 september 2026

## In het kort

Rapport van de claude.ai-routine "website" (`trig_01BKt9WCeR9H92FDcS9HtPvV`, dagelijks 23:30 UTC, run `cse_016RYYiEW6zpxYL4gdBoz47n`). De routine had geen Shopify-toegang en geen netwerktoegang tot higrip.nl, dus alles is afgeleid van wat Google en Trustpilot tonen. Het rapport bevat twee content-drafts (padel-landingspagina, blog "gripsokken vs. sportsokken") en een actieplan. Geregistreerd op 17 september via `/research-nieuw` als eerste echte run van dat command.

**Tegenstrijdig met geverifieerde vault-feiten — niet overnemen:**

| Claim in het rapport | Wat de vault (geverifieerd) zegt |
|---|---|
| Trustpilot 4,5★ over 15 reviews | 4,6 uit 5 op 17 reviews (bij de bron opgehaald 3 sep, [[Stand van Zaken — Werkdossier 2026-09-04]]) |
| "Geen sport-specifieke landingspagina's" | `/pages/gripsokken-padel` bestaat en is goed (SEO-audit 15 sep); voetbalpagina staat lokaal klaar |
| Alleen witte sok, twee maten 34-39 / 40-46 | Gripsok 1.0 (34-39/40-46) én 2.0 wit/zwart in 35-38/39-42/43-47 ([[Performance Grip Socks 2.0]]) |
| "Structured data ontbreekt vermoedelijk; voeg Product-schema met aggregateRating toe" | Organization/WebSite/FAQPage zijn gebouwd; `aggregateRating` is juist **verwijderd** omdat er geen zichtbare reviews zijn — eerst reviewapp, dan schema (backlog punt 2) |
| FAQPage-schema als groeihefboom | Google toont sinds 7 mei 2026 geen FAQ rich results meer ([[2026-09-15-growth-radar-seo-content]]) |

Concurrent "Trusox" komt in de vault niet voor (wel FitSockr, Tapedesign, Optigrip, Proskary) — onbevestigd.

## Bevindingen

### Wat wél nieuw is

- **Verouderde URL-patronen in de Google-index.** Naast nette Shopify-slugs staan er pagina's zonder `/pages/`-prefix (`/algemene-voorwaarden`, `/winkel`) en URL's met een numeriek ID vóór de slug (`/2697390_hi-grip-zaalvoetbalsokken`, `/blogs/2630309_gripsokken-tijdens-pilates-yoga…`) — vermoedelijk restanten van het platform vóór Shopify. Ook minstens twee blog-handles (`/blogs/hi-grip/…` en `/blogs/trends/…`). Versnippert linkwaarde; controleren welke nog 200 geven en 301'en naar de Shopify-equivalenten.
- **hreflang NL/EN.** `higrip.nl` en `higrip.nl/en` bestaan naast elkaar; het rapport vraagt om een check of `hreflang` en canonicals goed staan. Het werkdossier adviseert de Engelse versie uit te zetten — dat besluit staat nog open (beslispunt 4).
- **Maatkeuze als afhaakreden.** Voorstel: maattabel-widget met schoenmaat-omrekening direct bij de variant-selector, niet alleen op de FAQ-pagina.
- **Contentclusters die ontbreken volgens de index:** vergelijking (gripsokken vs. sportsokken, vs. concurrenten), onderhoud/gebruik (wassen, hoe vaak dragen), maatgids als eigen pagina, kids/jeugd. Sluit aan bij de hub-and-spoke-strategie uit het werkdossier.

### Wat het rapport bevestigt (al in de vault)

- Reviews opschalen via post-purchase-flow en zichtbaar op de productpagina (backlog punt 2).
- Sport-specifieke landingspagina's (SEO-audit: 8 van 10 nog te vullen via `hi-sport-landing`).
- Core Web Vitals / app-bloat auditen (werkdossier: 241 requests, 70 script-tags).
- AI-zoekmachines: vraag-antwoordblokken, consistente feiten op één canonieke pagina, merkvermeldingen bij derden (basislijn §2, ai-search).
- Bundel/herhaalaankoop en interne links blog ↔ product.

### Content-drafts in het rapport

Twee kant-en-klare drafts: een padel-landingspagina (SEO-titel "Gripsokken voor Padel | Maximale Grip & Stabiliteit — HÏ Grip") en een blogartikel "Gripsokken vs. gewone sportsokken" (~650 woorden, vraag/antwoord-opbouw). Beide gebruiken de verouderde productfeiten (2 maten, wit) en missen de merkstem (geen 1,17 / 95%, geen "jij/je"-toon consequent) — vóór gebruik herschrijven volgens [[Brand Voice & Tone of Voice]] en de vaste cijfers uit het werkdossier.

### Actieplan van het rapport

Week 1 redirects + hreflang · week 1-2 structured data · week 2 drafts publiceren en meten in Search Console · week 2-3 reviewflow · week 3-4 maattabel-widget + bundel · doorlopend CWV-audit en 1 contentcluster per maand.

## Acties

- [ ] P3 · Verouderde URL's met numeriek ID en zonder `/pages/`-prefix in de Google-index controleren (HTTP-status) en 301'en naar de Shopify-equivalenten
- [ ] P3 · hreflang en canonicals tussen higrip.nl en /en controleren — of besluit 4 uit het werkdossier (Engels uitzetten) nemen
- [ ] P3 · Maattabel-widget met schoenmaat-omrekening bij de variant-selector overwegen
- [ ] P3 · Cloud-routine "website" (`trig_01BKt9WCeR9H92FDcS9HtPvV`) uitzetten of voorzien van repo + egress-toegang tot higrip.nl — draait nu dagelijks zonder de site te kunnen bereiken

## Bronnen

- Rapport-artifact: https://claude.ai/artifact/H5KiVWmh665yX9yTTKUseH (16 sep 2026)
- Routine-run: `cse_016RYYiEW6zpxYL4gdBoz47n` (claude.ai/code/routines → "website")
- Shopify — Latest SEO Trends in 2026: https://www.shopify.com/blog/seo-trends
- Ice Cube Digital — Shopify SEO Checklist 2026: https://www.icecubedigital.com/blog/shopify-seo-checklist-2026/
- SpearPoint — SEO for Shopify 2026: https://www.thespearpoint.com/blog/seo-for-shopify-complete-guide

## Aantekeningen
