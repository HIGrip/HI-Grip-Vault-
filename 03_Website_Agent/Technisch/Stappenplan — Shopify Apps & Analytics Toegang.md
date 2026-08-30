# Stappenplan — Shopify Apps & Analytics Toegang

> Twee losse checklists om de laatste twee open punten uit Fase 2 af te ronden. Beide vereisen een admin-login die de agent niet zelf heeft — dus voor lars om in te vullen. Zie [[Shopify App Stack]] en [[Analytics & KPI Dashboard]] voor waar het resultaat naartoe gaat.

---

## Deel 1 — Welke apps draaien er op de live store?

**Doel:** [[Shopify App Stack]] aanvullen met de klant-facing apps (reviews, e-mail, chat, upsell, etc.) die nu niet in de vault staan.

- [x] Log in op Shopify Admin → **Apps**
- [x] Loop de lijst langs en vul de tabel hieronder in, per app: naam, waarvoor, nog in gebruik
- [x] Ingevulde tabel doorgeven — verwerkt in [[Shopify App Stack]] op 2026-08-20

**Deel 1 is afgerond.**

| App                         | Waarvoor (reviews / e-mail / chat / upsell / subscripties / anders) | Nog in gebruik?                                       |
| --------------------------- | ------------------------------------------------------------------- | ----------------------------------------------------- |
| Translate & Adapt           | translate van de website naar engels                                | ja                                                    |
| Bundler                     | voor het creeren van bundels op productpagina                       | nee                                                   |
| Forms                       | Voor het maken van een vragen lijst/ enquete                        | nee                                                   |
| Trustpilot Reviews          | koppeling met trustpilot reviews                                    | nee                                                   |
| Section Store               | voor mooie kant en klare sectie                                     | ja                                                    |
| MyParcel NL                 | verzending door koppelen naar software                              | ben ik bezig met koppelen (doe ik zelf)               |
| CWILL(SendWILL) Popup Email | voor pop up op de webshop en e-mail marketing                       | ja                                                    |
| SEOWILL (SEOAnt) - AI SEO   | geeft suggesties voor verbeteringen van seo                         | (af en toe mag vervangen worden door een beter agent) |
| Canva Connect               | het koppelen van Canva desgins naar de website.                     | ja                                                    |
| FD Product Groups           | het switchen van wit product naar zwart op product pagina           | ja                                                    |

---

## Deel 2 — GA4-toegang afronden

**Doel:** [[Analytics & KPI Dashboard]] van de blocker af halen. Stappen komen uit [[API & Tool Connections]] — daar staat de volledige uitleg per stap.

**Beslissing 2026-08-21:** lars koos voor GA4 boven de alternatieven (handmatige export uit Shopify Analytics, of een betaalde Shopify-reporting-app) — vermoedelijk de goedkoopste échte automatische route, zie [[API & Tool Connections]] voor de volledige afweging.

**✅ Deel 2 is afgerond op 2026-08-30.** De koppeling `analytics-mcp` draait en is getest. Volledige eindopzet + from-scratch-runbook: [[API & Tool Connections]] (sectie GA4) en `analytics-mcp-setup.md` in de HI-Grip-claude-setup repo.

Kort wat er uiteindelijk gebeurde (afweek van de checklist hieronder):
- **Geen `gcloud auth application-default login`** — Google blokkeert de `analytics.readonly`-scope voor de standaard gcloud client-ID. In plaats daarvan een **service account** (`ga4-mcp@higrip-analytics.iam.gserviceaccount.com`) met JSON-key, toegevoegd als Viewer op de property.
- Cloud-project: `higrip-analytics` · GA4 Property-ID: **`properties/476032345`** (`www.higrip.nl`)
- MCP-server geregistreerd in `~/.claude.json` (niet alleen `~/.claude/mcp.json` — dát leest de VS Code-extensie).
- Bij de eerste test bleek de tag rond 1 jan 2026 gestopt te zijn; data loopt mrt–dec 2025 en daarna pas weer vanaf 30-8-2026. Zie [[API & Tool Connections]].

<details><summary>Oorspronkelijke checklist (achterhaald, ter referentie)</summary>

- [x] **Stap 1:** Google Cloud-project aanmaken (`higrip-analytics`)
- [x] **Stap 2:** API's enablen: Google Analytics Admin API + Data API
- [x] **Stap 3:** ~~`gcloud auth application-default login`~~ → vervangen door service-account-key
- [x] **Stap 4:** Service account als Viewer op de higrip.nl-property gezet
- [x] **Stap 5:** GA4 Property-ID: `properties/476032345`
- [x] **Stap 6:** Google Cloud Project-ID: `higrip-analytics`
- [x] **Stap 7:** `analytics-mcp`-server geregistreerd en getest

</details>

---

## Gerelateerde bestanden

- [[Shopify App Stack]] — Waar Deel 1 naartoe gaat
- [[Analytics & KPI Dashboard]] — Waar Deel 2 naartoe gaat
- [[API & Tool Connections]] — Volledige technische achtergrond van beide routes
- [[Stappenplan — Verdere Bouw]] — Fase 2 in de bredere agent-opbouw
