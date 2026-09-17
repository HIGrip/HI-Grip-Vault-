---
id: 2026-09-03-analytics-kpi-meetgat
titel: "GA4 — het meetgat en de eerste cijfers"
datum: 2026-09-03
bron: los
routine: ""
categorie: CRO
status: bekeken
prioriteit: P2
samenvatting: "GA4 draait weer sinds 30 augustus 2026, maar de property heeft in de volledige historie nul purchase-events en de data van januari–augustus 2026 is definitief verloren. Direct is 43% van de sessies (mrt–dec 2025) — vrijwel zeker untagged social- en nieuwsbriefverkeer zonder UTM's."
gerelateerd: [2026-09-04-werkdossier-stand-van-zaken, 2026-09-14-weekoverzicht, 2026-09-15-seo-audit]
vervangt: []
bronbestand: "C:\\Users\\Test\\OneDrive\\Documents\\HI-Grip-Vault-\\03_Website_Agent\\Analyse\\Analytics & KPI Dashboard.md"
deadline: ""
---
# GA4 — het meetgat en de eerste cijfers

## In het kort

Bij ~12 sessies per dag kan A/B-testen niet en komen er nooit echte Core Web Vitals-velddata; werk met voor/na-metingen plus kwalitatief onderzoek (Clarity, klantstem). Shopify Analytics blijft de bron voor omzet en orders.

## Bevindingen

> **GA4-toegang is live sinds 2026-08-30** via de `analytics-mcp`-koppeling (zie [[API & Tool Connections]]). Dit bestand wordt gevuld volgens de KPI-aanpak uit [[Website Doel & KPI's]]: resultaat-KPI's (omzet, conversie, AOV, omzet/bezoeker) + een diagnostische laag over *waarom* bezoekers wel/niet kopen. Shopify Analytics blijft bron van waarheid voor omzet/orders; GA4 is voor gedrags-/funnelinzicht.

### Databeschikbaarheid — let op het gat

| Periode | Status |
|---|---|
| ~2025-03-13 t/m 2025-12-31 | GA4-data aanwezig (~250 sessies/mnd) |
| ~2026-01-01 t/m 2026-08-29 | **geen data** — GA4-tag lag stil (waarschijnlijk door thema-republicatie/app-wijziging) |
| vanaf 2026-08-30 | opnieuw gekoppeld via Shopify Google & YouTube-integratie; verse data zit met 24-48u vertraging in de standaardrapporten |

Gevolg: voor trend/vergelijking is alleen mrt–dec 2025 bruikbaar in GA4. Voor de tussenliggende maanden en de lange-termijn-omzettrend → Shopify Analytics.

### Eerste cijfers (GA4, 2025-03-13 – 2026-01-04)

**Kanaalverdeling (sessies / gebruikers):**

| Kanaal | Sessies | Gebruikers |
|---|---|---|
| Direct | 1.083 | 713 |
| Organic Search | 829 | 403 |
| Organic Social | 360 | 287 |
| Referral | 258 | 93 |

**Sessies per maand:** mrt 192 · apr 134 · mei 429 · jun 272 · jul 216 · aug 164 · sep 266 · okt 292 · nov 334 · dec 233.

**Eerste observaties (nog te verdiepen):**
- **Direct = 43% van de sessies.** Onwaarschijnlijk hoog voor een webshop van deze omvang — vrijwel zeker deels untagged social/influencer/nieuwsbrief-verkeer zonder UTM-parameters. Raakt de "kanaal → identiteit"-mapping uit [[Website Doel & KPI's]] en [[Conversie Optimalisatie Checklist]]. → Voorstel: UTM-discipline op alle uitgaande links (bio, posts, influencer-briefings, e-mail).
- Laag volume (~250 sessies/mnd) → kleine-steekproef-ruis; behandel korte-periode-verschillen als hypothese, niet als bewijs.

### Het purchase-gat (vastgesteld 2026-09-03)

**Er zijn nul purchase-events in de volledige historie van deze property.** Niet nul deze week — nul sinds februari 2025, ook in de maanden met 266 tot 334 sessies. Conversieratio, omzet per bezoeker en kanaalattributie zijn in GA4 dus niet *laag* maar *onbestaand*, en alle CRO-conclusies die op GA4 leunen zijn tot die tijd ongeldig.

Sinds het herstel op 30-08 om 19:42 vuren alle andere e-commerce-events wel (`view_item`, `view_item_list`, `add_to_cart`, `begin_checkout`). Alleen het event op de bedankpagina na betaling ontbreekt — de tag zit dus niet aan de Shopify-checkout vast. Dit koppelen is beslispunt 2 uit [[Stand van Zaken — Werkdossier 2026-09-04]] en blokkeert alles wat met meten te maken heeft.

**Twee gevolgen van het huidige volume (~12 sessies/dag) die niet weggaan als de meting klopt:**
- **A/B-testen kan niet.** Voor 20% verbetering op ~2% conversie zijn circa 20.000 sessies per variant nodig — ruim vier jaar per variant. Werk met voor/na op grote wijzigingen plus kwalitatief onderzoek (Clarity, klantstem).
- **Echte Core Web Vitals komen er nooit** — Google's drempel voor veldgegevens wordt bij dit volume niet gehaald. Labmetingen zijn het enige dat er ooit zal zijn.

### Nog te doen

- [ ] Zodra ~2 weken verse data binnen is: resultaat-KPI's opzetten (conversieratio, AOV, omzet/bezoeker) met Shopify Analytics als omzetbron
- [ ] Funnel-rapport (product → cart → checkout → betaling) via `run_funnel_report` — grootste absolute drop-off zoeken
- [x] ~~Controleren of de nieuwe koppeling `purchase`/e-commerce-events doorgeeft~~ → **gecontroleerd 2026-09-03, en het antwoord is nee.** Zie hieronder.
- [ ] Microsoft Clarity (kwalitatieve laag) koppelen aan de diagnoses: bij een funnel-drop → recordings/heatmaps erbij pakken voor het *waarom*
- [ ] Achterhalen waarom de tag rond 1-1-2026 stopte, zodat het niet opnieuw gebeurt

### Gerelateerde bestanden

- [[Website Doel & KPI's]] — De KPI-filosofie die dit dashboard invult
- [[Conversie Optimalisatie Checklist]] — Openstaande CRO-punten
- [[Stappenplan — Shopify Apps & Analytics Toegang]] — Hoe de GA4-toegang is afgerond
- [[Shopify App Stack]] — Technische stand van zaken
- [[API & Tool Connections]] — Volledige achtergrond + eindopzet van de GA4-route

## Acties

- [ ] P2 · Resultaat-KPI's opzetten (conversieratio, AOV, omzet/bezoeker) met Shopify Analytics als omzetbron
- [ ] P2 · Funnel-rapport product → cart → checkout → betaling via `run_funnel_report`; grootste absolute drop-off zoeken
- [x] P2 · UTM-discipline op alle uitgaande links (bio, posts, influencer-briefings, e-mail)
- [ ] P3 · Microsoft Clarity koppelen aan de diagnoses: bij een funnel-drop recordings/heatmaps erbij pakken
- [ ] P3 · Achterhalen waarom de GA4-tag rond 1 januari 2026 stopte
- [x] P2 · Controleren of de koppeling purchase-events doorgeeft — gecontroleerd 3 september: nee

## Bronnen

- Origineel: [[Analytics & KPI Dashboard]]
- [[API & Tool Connections]] § GA4 · GA4-property 476032345

## Aantekeningen
