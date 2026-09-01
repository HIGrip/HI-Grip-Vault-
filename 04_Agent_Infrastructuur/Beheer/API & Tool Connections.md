# API & Tool Connections

> Technische tool-regels die voor meerdere agents (kunnen) gelden — niet gebonden aan één hoofdagent. Agent-specifieke tool-afspraken (bv. het IG-zoekscript) blijven in het `soul.md` van die agent staan; hier komt het pas bij zodra een regel breder relevant wordt.

---

## Browser-automatisering — Chrome-kill regel

**Regel:** nooit alle Chrome-processen killen. Alleen het PID bijhouden van een door de agent zelf gestarte Chrome-instantie, en uitsluitend dat proces sluiten.

**Why:** een eerdere poging killte alle openstaande Chrome-vensters, inclusief die lars zelf open had staan — dat mag nooit meer gebeuren.

**Geldt nu voor:** Partnership Agent / Influencer & Creator Agent (IG-zoekscript). Van toepassing op elke toekomstige agent die zelf een browser aanstuurt.

---

## Shopify — Dev MCP (docs/Liquid-validatie)

**Status:** klaargezet 2026-08-01, wordt actief na herstart van de sessie/MCP-verbinding (zelfde patroon als de higrip-vault-fix).

- Wrapper: `C:\Users\lars\.claude\shopify-dev-mcp.cmd` → `npx -y @shopify/dev-mcp@latest`
- Geregistreerd in `C:\Users\lars\.claude\mcp.json` onder de naam `shopify-dev`
- Geen authenticatie nodig — alleen documentatie/GraphQL-schema/Liquid-validatie, **geen** toegang tot echte storedata of theme-bestanden

## Shopify — Admin API (theme-bewerking, nog niet actief)

**Status:** wachten op input van lars, kan niet door de agent zelf opgezet worden (vereist zijn Shopify-adminlogin).

**Waarom geen kant-en-klare MCP-server:** de bekendste community-server (GeLi2001/shopify-mcp) ondersteunt alleen producten/klanten/orders/metafields/inventory/tags — geen theme-assets.

**Correctie 2026-08-01 (2x):**
- Eerste poging (custom app via Dev Dashboard, OAuth client ID/secret) bleek onnodig omslachtig — tokens verlopen na 24 uur, scopes zitten verstopt in de "Versions"-pagina.
- Tweede doodlopend spoor: het "App-automatiseringstoken" (App Automation Token) uit de Dev Dashboard — dat is uitsluitend voor Shopify CLI om app-code/extensies te deployen, geeft geen store-/thema-data-toegang.
- **Uiteindelijke, simpele weg: de officiële Shopify App Store-app "Theme Access".** Geen Dev Dashboard, geen OAuth, geen scopes-scherm.

**Wat lars moet doen (eenmalig, ±2 min):**
1. Shopify App Store → zoek "Theme Access" → App toevoegen → installeren op de higrip.nl-store (gewone app-install)
2. In de app: "Create theme password" → genereert een token (`shptka_...`), scope is standaard `write_themes` (bevat ook read)
3. Token **niet** in vault/chat plakken — als lokale environment variable zetten, bv. `[Environment]::SetEnvironmentVariable("SHOPIFY_THEME_TOKEN","shptka_xxx","User")`, daarna sessie herstarten
4. Shop-domein (`iets.myshopify.com`) en het theme-ID van het duplicate/testtheme (Horizon 4.1.3) doorgeven — theme-ID staat in de URL van de Theme Editor

Deze token werkt zowel als `X-Shopify-Access-Token`-header voor directe Admin REST Asset API-calls als voor Shopify CLI (`SHOPIFY_CLI_THEME_TOKEN`) — geen verval zoals bij de OAuth-route hierboven. De eerder aangemaakte custom app in de Dev Dashboard is niet meer nodig, mag blijven staan of verwijderd worden.

**Root cause gevonden 2026-08-02: geblokkeerd door het Shopify-abonnement, niet door het token.** HÏ Grip staat op het **Starter-abonnement** (goedkoopste tier). Getest met 2 verse Theme Access-tokens, zowel via directe Admin REST-calls als via de officiële Shopify CLI — allebei gaven exact dezelfde 401 "invalid access token", ook al was de app correct geïnstalleerd en het wachtwoord correct via de e-maillink onthuld. Shopify-docs bevestigen: op Starter is maar één thema (**Spotlight**) volledig bruikbaar en is er geen volledige thema-personalisatie/API-toegang — Shopify blokkeert dit blijkbaar met een generieke auth-fout i.p.v. een duidelijke "niet beschikbaar op je plan"-melding. Het huidige concept-thema **Horizon 4.1.3** valt hier dus buiten.

**Consequentie:** programmatische thema-bewerking via API/CLI zit vast totdat het abonnement wordt geüpgraded (Basic of hoger). Tot die tijd: checklist-content (title-tag, JSON-LD, alt-teksten, FAQ-schema) moet handmatig door lars in de Shopify Theme Editor/code-editor geplakt worden — die blijft wel gewoon werken, alleen de 3rd-party Admin API/CLI-route niet.

**Doorbraak 2026-08-02: native CLI-login werkt wel.** Niet via een Theme Access-apptoken, maar via `shopify theme list --store hi-grip.myshopify.com` zonder `--password`-flag — dit triggert een normale device-code browserlogin als lars zelf (`shopify auth login`-stijl), geen appinstallatie nodig. Dat spoor werd NIET geblokkeerd door het Starter-abonnement (in tegenstelling tot de Theme Access-app). Voorwaarden om dit te laten werken:
- Shopify CLI globaal geïnstalleerd (`npm install -g @shopify/cli`) — gedaan
- Officieel Shopify Liquid VS Code-extensie (`Shopify.theme-check-vscode`) — gedaan
- PowerShell execution policy stond op Restricted, blokkeerde de npm-gegenereerde `shopify.ps1`-wrapper — opgelost met `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`
- Login gebeurt interactief via device-code + browser, moet dus door lars zelf in zijn eigen zichtbare terminal (niet iets wat de agent zelf non-interactief kan draaien)

**Thema-lijst opgehaald (2026-08-02) — zie [[Technische Procedures]] voor de volledige, dwingende regel:** de store heeft 10 thema's. Alleen **#198505464135 "HÏ Grip website AI Workspace"** mag bewerkt worden. Live (**#198094127431**, nooit aanraken) en de overige 8 oude/duplicate thema's zijn allemaal uitgesloten.

**Belangrijke beperking:** Shopify kent geen "alleen theme X"-scope — een token met `write_themes` kan technisch elk theme bewerken, ook het live theme. De grens "nooit live, altijd apart theme" blijft dus afspraak/discipline (zie [[Technische Procedures]] en [[Goedkeuringsworkflow]]), geen technische restrictie van Shopify zelf.

## Google Analytics 4 (GA4) — ✅ ACTIEF sinds 2026-08-30

> Koppeling `analytics-mcp` draait en is getest (`/mcp`: connected). Runbook + from-scratch-stappen: `analytics-mcp-setup.md` in de HI-Grip-claude-setup repo. De uitzoekgeschiedenis hieronder blijft staan als context.

**Eindopzet (2026-08-30):**

| Onderdeel | Waarde |
|---|---|
| Server | `analytics-mcp` 0.7.0 (officiële `google-analytics-mcp` van Google), via `pipx` → `C:\Users\lars\.local\bin\google-analytics-mcp.exe` |
| Wrapper | `C:\Users\lars\.claude\analytics-mcp.cmd` (zet `GOOGLE_APPLICATION_CREDENTIALS` + `GOOGLE_CLOUD_PROJECT`) |
| Config | geregistreerd in **`C:\Users\lars\.claude.json`** (dat leest de VS Code-extensie) én in `C:\Users\lars\.claude\mcp.json` (CLI/SDK) |
| Auth | **service account** `ga4-mcp@higrip-analytics.iam.gserviceaccount.com`, key op `C:\Users\lars\.claude\ga4-mcp-key.json` (secret — niet in vault/repo), toegevoegd als Viewer op de GA4-property |
| Cloud project | `higrip-analytics` — API's aan: `analyticsdata.googleapis.com`, `analyticsadmin.googleapis.com` |
| GA4 property | `www.higrip.nl` = `properties/476032345` |
| Tools | `run_report`, `run_realtime_report`, `run_funnel_report`, `run_conversions_report`, `get_account_summaries`, `get_property_details`, `get_custom_dimensions_and_metrics`, `list_google_ads_links`, `list_property_annotations` |

**Afwijkingen van het oorspronkelijke plan:**
- **Geen `gcloud auth application-default login`** (stap 3 van de oude checklist). Google blokkeert de scope `analytics.readonly` voor de gedeelde gcloud client-ID ("deze app is geblokkeerd"). Daarom een **service account met JSON-key** — omzeilt de scope-blokkade en is robuuster voor een achtergrond-MCP (geen token-verval).
- **Nieuwe MCP-servers moeten in `~/.claude.json`**, niet (alleen) in `~/.claude/mcp.json` — de VS Code-extensie leest `~/.claude.json`. Kostte een extra herstart-ronde om te vinden.
- Server start traag (~15-20s door z'n ADK-framework); bij connect-timeout `MCP_TIMEOUT=60000`.

**Datagat ontdekt bij de eerste test:** de GA4-property is niet nieuw — er zit data in van **~2025-03-13 t/m 2025-12-31** (~250 sessies/mnd), daarna **dood vanaf ~2026-01-01** (tag verdween, waarschijnlijk door een thema-republicatie / app-wijziging) tot heropgekoppeld op 2026-08-30 via de Shopify Google & YouTube-integratie. Lars' waarneming "geen data over 28 dagen" klopte dus. Verse data van 30-8 verschijnt pas na 24-48u in de standaardrapporten (realtime werkte meteen: 2 users). Kanaalmix mrt–dec 2025: Direct 1083 / Organic Search 829 / Organic Social 360 / Referral 258 sessies — hoge Direct-share = vermoedelijk untagged social/influencer (raakt het kanaal→identiteit-gat uit [[Website Doel & KPI's]]).

**Aanvullend: Microsoft Clarity** (via de gratis "Microsoft Clarity: AI Insights" Shopify-app) is los hiervan opgezet als kwalitatieve laag (sessierecordings, heatmaps, AI-frictiesamenvattingen) en gekoppeld aan GA4. Vervangt GA4 niet — het is de "waarom"-laag naast GA4's "wat". Cookies (`_clck`, `_clsk`) → moet in de cookiebanner / achter consent (AVG).

---

### Uitzoekgeschiedenis (context, afgerond)

**Status 2026-08-02:** al gedaan door de agent (geen login voor nodig): `pipx` geïnstalleerd, **Google Cloud CLI (`gcloud`)** geïnstalleerd via winget.

**Nog te doen door lars zelf (browser-login, kan niet door de agent):**
1. `gcloud init` — inloggen, Google Cloud-project kiezen/aanmaken
2. In dat project 2 API's enablen: **Google Analytics Admin API** + **Google Analytics Data API**
3. `gcloud auth application-default login --scopes=https://www.googleapis.com/auth/analytics.readonly,https://www.googleapis.com/auth/cloud-platform` — print een **"Credentials saved to file: ..."**-pad, dat heeft de agent nodig
4. In GA4 zelf (Beheer → Property Access Management) checken dat lars' Google-account minimaal Viewer is op de higrip.nl-property
5. GA4 **Property-ID** opzoeken (Beheer → Property-instellingen)

Zodra lars project-ID, credentials-pad en Property-ID doorgeeft: agent registreert de `analytics-mcp`-server (pipx-package, zelfde `mcp.json`-patroon als `shopify-dev`) en de koppeling is actief.

**Doel:** dit voedt de diagnostische KPI-laag uit [[Website Doel & KPI's]] (funnel-drop-off, cart-abandonment, etc.) — los van maar aanvullend op de Shopify-thema-toegang in [[Technische Procedures]].

**Correctie 2026-08-21 — het alternatief "gewoon Shopify's eigen orderdata/reports gebruiken" bleek geen shortcut:**
- De eerder genoemde `shopify store execute`/`shopify store auth` bestaat niet (meer) — het juiste commando is **`shopify app execute`**, en dat vereist een geregistreerde custom app met scopes, geïnstalleerd op de store (dezelfde soort custom-app-setup als de afgevallen OAuth-poging hierboven, niet de simpele native theme-login).
- Shopify's eigen Reports/ShopifyQL-API (`shopifyqlQuery`) — die de Analytics-rapporten (sessies, funnel, top-pagina's) programmatisch zou kunnen ontsluiten — vereist naast de `read_reports`-scope ook **"Level 2 access to protected customer data"**: hetzelfde goedkeuringsproces bij Shopify als voor `read_orders`/`read_customers`. Geen garantie op snelheid of uitkomst.
- lars stelde voor om Shopify's Analytics-dashboard (in de Admin, zelf aan te klikken: sessies per pagina, funnel) gewoon handmatig te exporteren (CSV) i.p.v. een API-koppeling te bouwen — dat werkt, maar is niet automatisch.
- Onderzocht: betaalde Shopify-reporting-apps (bv. Better Reports, €5–30/mnd) kunnen wél automatisch een CSV mailen op schema — reële, terugkerende kosten, en vereist nog een stap om die e-mail bij de agent te krijgen.
- **Beslissing 2026-08-21 (lars):** toch GA4 opzetten (zie hieronder) — vermoedelijk de goedkoopste échte automatische route, want de Google Cloud-"betaalstap" is naar verwachting een kaart-op-bestand-vereiste zonder echte kosten bij dit gebruiksniveau, niet een abonnement.

## Buffer (social planning + ideeën) — ✅ ACTIEF sinds 2026-09-01

> MCP-koppeling `buffer` staat en is getest (token geverifieerd, `get_account` gaf het HÏ Grip-account terug). Wordt volledig actief in Claude Code na een herstart (zelfde patroon als GA4 / `shopify-dev`); tot die tijd bereikbaar via directe JSON-RPC-calls naar de endpoint.

**Waarvoor de Content Agent Buffer gebruikt:**
- **Planning / inplannen** — de échte contentkalender staat hier, niet in de vault (zie [[Content Kalender Template]]). Posts plannen en herschikken per kanaal.
- **Ideeën wegzetten** — losse content-ideeën in de idea-kolommen (idea groups), optioneel met tags.
- **Vastleggen wat een idee nodig heeft** — per idee noteren welke copy / beeld / video nog gemaakt moet worden voordat het ingepland kan worden.
- **Analytics uitlezen** — geaggregeerde post-metrics per kanaal over een periode (feedbackbron, zie kwaliteitsreview 25-08).

**Eindopzet (2026-09-01):**

| Onderdeel | Waarde |
|---|---|
| Server | `buffer` — HTTP MCP-transport, endpoint `https://mcp.buffer.com/mcp` (officiële Buffer MCP-server, gelanceerd 27 mei 2026, werkt op elk abonnement incl. gratis) |
| Auth | **API-key als Bearer-token** (aangemaakt op `https://publish.buffer.com/settings/api`). Opgeslagen als `headers.Authorization` in `C:\Users\lars\.mcp.json` én `C:\Users\lars\.claude\mcp.json`, en als env `BUFFER_ACCESS_TOKEN` in `C:\Users\lars\.claude\settings.local.json`. Secret — **niet in vault/repo**. |
| Config | geregistreerd als `buffer` in beide `mcp.json`-bestanden (zelfde patroon als `shopify-dev` / `analytics-mcp`). Als de VS Code-extensie 'm niet oppikt: ook in `C:\Users\lars\.claude.json` zetten (zoals bij `analytics-mcp` bleek). |
| Account | HÏ Grip (`info@higrip.nl`), org-id `69b6d476e4bc4b63e1f6854d`, tijdzone Europe/Amsterdam, week start maandag |
| Planlimieten | 3 kanalen, 10 geplande posts, 3 tags, 100 ideeën |
| Tools | `get_account`, `list_channels`, `get_channel`, `list_posts`, `get_post`, `create_post`, `edit_post`, `delete_post`, `list_idea_groups`, `list_ideas`, `create_idea`, `get_aggregated_post_metrics`, `list_post_templates` + `get_` / `create_` / `update_` / `delete_post_template`, `introspect_schema`, `execute_query`, `execute_mutation` |

**Grens:** publiceren blijft **"altijd overleg vooraf"** — de Content Agent mag posts/ideeën opstellen, plannen en analytics lezen, maar zet nooit zelf de publiceer-stap (zie soul.md Content Agent en [[Agent Takenverdeling & Grenzen — Content Agent]]). `create_post` als directe publish-actie en `delete_post` alleen na akkoord van lars.

**Sluit twee bekende blockers:**
- "Buffer ✗" uit de kritische kwaliteitsreview van 25-08 → nu de 2e van de 3 ontbrekende feedbackbronnen dicht (GA4 ✅ / Buffer ✅ / volledige Shopify-data ✗).
- De reden waarom Content Agent's contentkalender-automatisering niet gebouwd kon worden (zie [[Stappenplan — Verdere Bouw]]) — de routine kan nu wél zien wat er al gepland staat. De inhoudelijke reden (lars wil eerst intern afstemmen) staat los daarvan nog open.

---

## Nog aan te vullen

- Overige tool/API-koppelingen zodra ze ontstaan

---

## Gerelateerde bestanden

- [[Agent Hiërarchie & Structuurschema]]
- [[Agent Bestandsschema (Soul, Identiteit, User)]]
- [[Technische Procedures]] — De uiteindelijke werkende procedure (Shopify CLI + native login) die uit dit hele uitzoekproces kwam
