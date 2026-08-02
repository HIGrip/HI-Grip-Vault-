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

## Nog aan te vullen

- GA4-koppeling (Google-official `google-analytics-mcp`, vereist gcloud-login door lars — zie [[Stappenplan — Verdere Bouw]])
- Overige tool/API-koppelingen zodra ze ontstaan

---

## Gerelateerde bestanden

- [[Agent Hiërarchie & Structuurschema]]
- [[Agent Bestandsschema (Soul, Identiteit, User)]]
- [[Technische Procedures]] — De uiteindelijke werkende procedure (Shopify CLI + native login) die uit dit hele uitzoekproces kwam
