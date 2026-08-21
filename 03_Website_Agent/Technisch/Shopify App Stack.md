# Shopify App Stack — HÏ Grip

> Technische basis waarmee de Website Agent werkt. Voor de werkwijze zelf: zie [[Technische Procedures]]. Voor hoe deze toegang tot stand kwam (en wat niet werkte): zie [[API & Tool Connections]] in 04_Agent_Infrastructuur/Beheer.

---

## Store & abonnement

- **Store:** hi-grip.myshopify.com (higrip.nl)
- **Abonnement:** Starter — goedkoopste tier. Blokkeert volledige thema-personalisatie/API-toegang (alleen het Spotlight-thema is op dit plan volledig bruikbaar); dit is de reden dat de Theme Access-app en Admin API-tokens een 401 gaven. Zie [[API & Tool Connections]] voor de volledige uitzoekgeschiedenis.
- **Consequentie:** programmatische thema-bewerking via de officiële Admin API/Theme Access-app zit vast tot een upgrade naar Basic of hoger.

## Thema's (10 totaal)

| Thema | ID | Rol | Mag de agent bewerken? |
|---|---|---|---|
| HÏ Grip website AI Workspace | `198505464135` | unpublished | **Ja — het enige toegestane thema** |
| HÏ Grip WEBSITE | `198094127431` | **live** | **Nooit** |
| Overige 8 (Horizon oude thema's ×2, HÏ Grip WEBSITE oude, Kopie van HÏ Grip WEBSITE, Test website van HÏ Grip WEBSITE, SHOPIFY TS \| HÏ Grip WEBSITE, HÏ Grip WEBSITE WK Campagne ×2) | overige 8 | unpublished | Nee — oude/losse duplicaten |

Volledige regels rond bewerken/publiceren: zie [[Technische Procedures]] en [[Goedkeuringsworkflow]].

## Technische tooling (werkend, in gebruik)

| Tool | Doel | Status |
|---|---|---|
| **Shopify CLI** (`npm install -g @shopify/cli`) + native device-code login | Thema pullen/pushen/linten voor het AI Workspace-thema | Werkend sinds 2026-08-02 — de route die het Starter-abonnement wél toelaat |
| **Shopify.theme-check-vscode** (officiële VS Code-extensie) | Liquid-linting lokaal | Geïnstalleerd |
| **Shopify Dev MCP** (`shopify-dev-mcp.cmd` → `npx @shopify/dev-mcp@latest`) | Documentatie/GraphQL-schema/Liquid-validatie opzoeken | Actief sinds 2026-08-01 — geen storedata-toegang, alleen docs |
| PowerShell execution policy `RemoteSigned` (CurrentUser) | Vereist om de npm-gegenereerde `shopify.ps1`-wrapper te laten draaien | Eenmalig ingesteld |

## Geprobeerd, niet in gebruik

| Route | Waarom afgevallen |
|---|---|
| Theme Access-app (Shopify App Store) | 401 op Starter-abonnement, ook met vers token |
| Custom app + OAuth (Dev Dashboard) | Tokens verlopen na 24u, onnodig omslachtig; ook geblokkeerd door Starter |
| App Automation Token | Alleen voor CLI app-deploys, geen store-/thema-toegang |
| Community Admin API MCP-server (GeLi2001/shopify-mcp) | Dekt geen theme-assets, alleen producten/klanten/orders/metafields/inventory/tags |

## Google Analytics 4 — in opzet

`pipx` en Google Cloud CLI (`gcloud`) staan al geïnstalleerd. Wacht nog op input van lars (gcloud-login, GA4 Property-ID, credentials-pad) voordat de `analytics-mcp`-server geregistreerd kan worden. Checklist om dit af te ronden: zie [[Stappenplan — Shopify Apps & Analytics Toegang]], Deel 2. Voedt straks [[Analytics & KPI Dashboard]] — die notitie staat om deze reden nog leeg.

---

## Openstaand — nog niet in kaart gebracht

Dit bestand documenteert de **technische/ontwikkel-tooling** van de agent (CLI, MCP, thema-toegang). Wat nog ontbreekt: een overzicht van de **daadwerkelijk geïnstalleerde Shopify-apps op de live store** (bv. reviews, e-mailmarketing, upsell/cross-sell, chat/klantenservice, subscripties) — dat weet ik niet en heb ik nergens in de vault kunnen terugvinden. Checklist om dit in te vullen: zie [[Stappenplan — Shopify Apps & Analytics Toegang]], Deel 1.

---

## Gerelateerde bestanden

- [[Technische Procedures]] — De werkende procedure (pull → bewerk → lint → push → verifiëren)
- [[API & Tool Connections]] — Volledige uitzoekgeschiedenis van elke toegangsroute
- [[Goedkeuringsworkflow]] — Hoe een wijziging van test-theme naar live gaat
- [[Update Log]] — Datumgewijze log van doorgevoerde wijzigingen
- [[Analytics & KPI Dashboard]] — Wacht op GA4-toegang
