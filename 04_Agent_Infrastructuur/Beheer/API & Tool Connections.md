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

**Waarom geen kant-en-klare MCP-server:** de bekendste community-server (GeLi2001/shopify-mcp) ondersteunt alleen producten/klanten/orders/metafields/inventory/tags — geen theme-assets. Voor theme-bestanden (title-tag, JSON-LD, alt-teksten, FAQ-schema) is direct de Shopify Admin REST Asset API nodig, aangeroepen vanuit Bash/PowerShell met een custom-app-token — geen aparte MCP-server voor nodig.

**Wat lars moet doen (eenmalig, ±5 min):**
1. Shopify admin → Instellingen → Apps en verkoopkanalen → App-ontwikkeling → App maken (**custom app**, niet public — public apps hebben sinds Admin API 2023-04 geen Asset API write meer, custom apps wel)
2. Admin API scopes: minimaal `read_themes`, `write_themes`
3. App installeren → Admin API access token verschijnt éénmalig (`shpat_...`) — meteen kopiëren
4. Token **niet** in vault/chat plakken (blijft anders permanent in git-historie/geheugen staan) — als lokale environment variable zetten, bv. `[Environment]::SetEnvironmentVariable("SHOPIFY_ADMIN_TOKEN","shpat_xxx","User")`, daarna sessie herstarten
5. Shop-domein (`iets.myshopify.com`) en het theme-ID van het duplicate/testtheme doorgeven (theme-ID staat in de URL van de Theme Editor)

**Belangrijke beperking:** Shopify kent geen "alleen theme X"-scope — een token met `write_themes` kan technisch elk theme bewerken, ook het live theme. De grens "nooit live, altijd apart theme" blijft dus afspraak/discipline (zie [[shopify-theme-workflow]]), geen technische restrictie van Shopify zelf.

## Nog aan te vullen

- GA4-koppeling (Google-official `google-analytics-mcp`, vereist gcloud-login door lars — zie [[Stappenplan — Verdere Bouw]])
- Overige tool/API-koppelingen zodra ze ontstaan

---

## Gerelateerde bestanden

- [[Agent Hiërarchie & Structuurschema]]
- [[Agent Bestandsschema (Soul, Identiteit, User)]]
