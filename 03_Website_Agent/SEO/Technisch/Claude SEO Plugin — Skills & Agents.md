# Claude SEO Plugin — Skills & Agents

> Documentatie van de `claude-seo` Claude Code-plugin (AgriciDaniel/claude-seo) én het resultaat van de eerste volledige audit op higrip.nl (16-09-2026). Installatiedetails staan in [[API & Tool Connections]] (`04_Agent_Infrastructuur/Beheer`). Dit bestand is de inhoudelijke laag: wat de audit vond en wat ermee gedaan is.

---

## Wat de plugin is

24 sub-skills + 18 specialist-agents voor technische SEO, content-kwaliteit (E-E-A-T), schema-markup, sitemaps, performance (CWV/INP), GEO/AI-search, i18n, e-commerce SEO en backlinks. Veel breder dan `/shopify-seo` — die laatste blijft de HÏ Grip-specifieke operationele laag (merk-brede strategie, waar title/meta leven, bestaande structured-data-status). Gebruik `/seo <subcommando>` voor de brede audit-tooling, `/shopify-seo` voor het vertalen naar HÏ Grip-acties.

---

## Audit 16-09-2026 — SEO Health Score: 59/100

Volledig overzicht (score-breakdown, alle 12 deelaudits, roadmap): **[HÏ Grip SEO Audit — Artifact](https://claude.ai/artifact/J4pGSpFe1TmWN5HLBqgMm3)**

| Categorie | Score |
|---|---|
| Technisch | 78/100 |
| Content-kwaliteit | 58/100 |
| On-page | ~50/100 (geschat) |
| Schema | ~40/100 (geschat) |
| Performance (CWV) | 44/100 |
| AI search (GEO) | 62/100 |
| Afbeeldingen | 75/100 |
| SXO (gap score) | 51/100 |
| Backlinks | geen data (geen Moz/Bing-key) |
| Hreflang | correct, geen issues |
| Sitemap | gezond, geen issues |

### Kritieke bevindingen → actieplan (16-09-2026)

Elk Critical-punt is vergeleken tegen het **werktheme** (`#200269168967`, live is `#200269398343` — check altijd `shopify theme list`, ID's schuiven op) om te weten wat al is opgelost zodra het theme live gaat, en wat los van de theme-launch moet.

| # | Punt | Root cause | Status na onderzoek |
|---|---|---|---|
| 1 | Duplicate product (`performance-grip-socks-2-0-wit` / `-wit-1`) | Productdata in Admin, theme-onafhankelijk | **[LARS]** — verwijderen of 301-redirecten in Admin |
| 2 | SKU/GTIN ontbreekt op alle varianten | Productdata in Admin | **[LARS]** — invullen in Admin → Products → Varianten |
| 3 | Teamgrootte-tegenstrijdigheid (3 vs 4 "sporters") | Verouderde content op een deel van de site | ✅ **Al consistent in het werktheme** (`index.json`, `product.json`, `faq-schema.liquid` zeggen overal "4 sporters"/"2.000+") — lost zichzelf op bij publicatie |
| 4 | Verzendcutoff (16:00 vs 22:00) | Theme-content zegt overal 22:00; de losse Shopify-**Pagina** `/pages/veelgestelde-vragen` (Admin, niet theme-gebonden) bevat zelf beide waarden | **[LARS]** — Pagina bewerken in Admin → Pages, blijft anders bestaan ook na theme-launch |
| 5 | Gratis verzending (€30 vs €35) | Zelfde Pagina, zelfde oorzaak als #4 | **[LARS]** — meteen meenemen bij de Pagina-fix hierboven |
| 6 | Product-JSON-LD leeg op één productpagina | SEOAnt-app-blok (`seoant-ai-seo`) staat aan in zowel live als werktheme — app-configuratieprobleem, geen theme-bug | **[LARS]** — SEOAnt-appdashboard checken, niet theme-code |
| 7 | Hardcoded dev-tunnel-URL (trycloudflare.com) in productiecode | **Root cause gevonden**: Amose-app (`Amose: Bundle, Quantity Breaks`, 4,6★/44 reviews, actief onderhouden) injecteert `window.amoseBundleData.appUrl` inline per product. Op 2 producten (`performance-grip-socks-2-0-wit`, `hi-grip-gripsokken-1`) staat daar nog een vergeten test-tunnel i.p.v. de correcte productie-URL (`amosebundle-production.up.railway.app`, al wel de fallback in het script zelf). App-blok stond **niet** in het werktheme (per-product config, niet theme-Liquid). | **[LARS]** — bundle-config van die 2 producten opnieuw opslaan in de Amose-app. **Geen overstap naar andere app nodig** — Amose is prima, dit was gewoon een vergeten dev-waarde. |

### Bijvangst: oud "Bundler"-app-blok verwijderd

Bij het vergelijken werd een tweede, inactieve bundle-app (`shopify://apps/bundler/...`, apps.shopify.com/bundler-product-bundles) gevonden in het werktheme — leeg geconfigureerd. Lars bevestigde: lang geleden gebruikt, **slechter dan Amose**, mag weg. **Verwijderd uit `config/settings_data.json` van het werktheme (16-09-2026)** — niet van live, dus veilig getest voor publicatie. Amose blijft de gekozen bundle-app.

### Overige High/Medium-bevindingen

Zie het [audit-artifact](https://claude.ai/artifact/J4pGSpFe1TmWN5HLBqgMm3) voor de volledige lijst (cookiebanner mobiel, homepage-title/H1, performance-sanering, FAQPage/BreadcrumbList-schema, collectiepagina "gripsokken voetbal" — **let op: dit laatste botst met het merk-brede-i.p.v.-sport-specifieke principe, zie [[SEO Strategie & Keywords]], nog een open [LARS]-beslissing**, ontbrekende merkvermelding buiten eigen kanalen, te dunne blogs).

---

## Gerelateerde bestanden

- [[SEO Strategie & Keywords]]
- [[API & Tool Connections]] — installatie/technische opzet van de plugin
- Werkplek: `04_Agent_Infrastructuur/Website Agent/Strategie/SEO Agent/_Werkplek.md`
