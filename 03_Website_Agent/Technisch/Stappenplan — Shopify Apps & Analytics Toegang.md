# Stappenplan — Shopify Apps & Analytics Toegang

> Twee losse checklists om de laatste twee open punten uit Fase 2 af te ronden. Beide vereisen een admin-login die de agent niet zelf heeft — dus voor lars om in te vullen. Zie [[Shopify App Stack]] en [[Analytics & KPI Dashboard]] voor waar het resultaat naartoe gaat.

---

## Deel 1 — Welke apps draaien er op de live store?

**Doel:** [[Shopify App Stack]] aanvullen met de klant-facing apps (reviews, e-mail, chat, upsell, etc.) die nu niet in de vault staan.

- [ ] Log in op Shopify Admin → **Apps**
- [ ] Loop de lijst langs en vul de tabel hieronder in, per app: naam, waarvoor, nog in gebruik
- [ ] Ingevulde tabel doorgeven (plak 'm in de chat, of vul 'm hier direct in) — dan verwerk ik 'm in [[Shopify App Stack]]

| App                         | Waarvoor (reviews / e-mail / chat / upsell / subscripties / anders) | Nog in gebruik?                         |
| --------------------------- | ------------------------------------------------------------------- | --------------------------------------- |
| Translate & Adapt           | translate van de website naar engels                                | ja                                      |
| Bundler                     | voor het creeren van bundels op productpagina                       | nee                                     |
| Forms                       | Voor het maken van een vragen lijst/ enquete                        | nee                                     |
| Trustpilot Reviews          | koppeling met trustpilot reviews                                    | nee                                     |
| Section Store               | voor mooie kant en klare sectie                                     | ja                                      |
| MyParcel NL                 | verzending door koppelen naar software                              | ben ik bezig met koppelen (doe ik zelf) |
| CWILL(SendWILL) Popup Email | voor pop up op de webshop en e-mail marketing                       | ja                                      |
|                             |                                                                     |                                         |

---

## Deel 2 — GA4-toegang afronden

**Doel:** [[Analytics & KPI Dashboard]] van de blocker af halen. Stappen komen uit [[API & Tool Connections]] — daar staat de volledige uitleg per stap.

- [ ] **Stap 1:** `gcloud init` uitvoeren — inloggen, Google Cloud-project kiezen of aanmaken
- [ ] **Stap 2:** In dat project 2 API's enablen: **Google Analytics Admin API** + **Google Analytics Data API**
- [ ] **Stap 3:** Uitvoeren:
  ```
  gcloud auth application-default login --scopes=https://www.googleapis.com/auth/analytics.readonly,https://www.googleapis.com/auth/cloud-platform
  ```
  Credentials-pad dat verschijnt ("Credentials saved to file: ...") noteren: `_______________________________`
- [ ] **Stap 4:** In GA4 zelf (Beheer → Property Access Management) checken dat je Google-account minimaal **Viewer** is op de higrip.nl-property
- [ ] **Stap 5:** GA4 **Property-ID** opzoeken (Beheer → Property-instellingen): `_______________________________`
- [ ] **Stap 6:** Google Cloud **Project-ID** noteren (stond bij stap 1): `_______________________________`
- [ ] **Stap 7:** Deze 3 waarden (credentials-pad, Property-ID, Project-ID) doorgeven → agent registreert de `analytics-mcp`-server en [[Analytics & KPI Dashboard]] kan gevuld worden

---

## Gerelateerde bestanden

- [[Shopify App Stack]] — Waar Deel 1 naartoe gaat
- [[Analytics & KPI Dashboard]] — Waar Deel 2 naartoe gaat
- [[API & Tool Connections]] — Volledige technische achtergrond van beide routes
- [[Stappenplan — Verdere Bouw]] — Fase 2 in de bredere agent-opbouw
