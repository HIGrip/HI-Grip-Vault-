# Technische Procedures — Website Agent

> Hoe de agent daadwerkelijk in Shopify-code werkt. Voor wie dit mag beoordelen/goedkeuren: zie [[Agent Takenverdeling & Grenzen]] en [[Goedkeuringsworkflow]]. Voor hoe de toegang tot stand kwam (en wat NIET werkte): zie [[API & Tool Connections]] in 04_Agent_Infrastructuur/Beheer.

---

## Harde regel — theme-ID's (nooit negeren)

> **⚠️ TE VERIFIËREN (2026-08-30):** onderstaande ID's zijn vastgelegd op 2026-08-02. Volgens de werkafspraak kan het werkthema inmiddels een opvolger hebben (kandidaat: `199814873415`) en kan ook het live-ID gewijzigd zijn. Draai `shopify theme list --store hi-grip.myshopify.com` en werk deze tabel bij. **Dit is de enige plek waar de ID's staan** — [[Shopify App Stack]] en [[Goedkeuringsworkflow]] verwijzen hiernaar, dupliceren ze niet.

| Theme | ID | Rol | Mag de agent bewerken? |
|---|---|---|---|
| HÏ Grip website AI Workspace | `198505464135` | unpublished | **Ja — het enige toegestane thema** |
| HÏ Grip WEBSITE | `198094127431` | **live** | **NOOIT, onder geen enkele voorwaarde** |
| Horizon oude thema (×2), HÏ Grip WEBSITE oude, Kopie van HÏ Grip WEBSITE, Test website van HÏ Grip WEBSITE, SHOPIFY TS \| HÏ Grip WEBSITE, HÏ Grip WEBSITE WK Campagne (×2) | overige 8 | unpublished | **Nee** — oude/losse duplicaten, geen actieve werkkopie |

Vastgelegd door lars op 2026-08-02 na `shopify theme list`. Vóór elke theme-actie (pull/push) dit ID controleren — nooit "een" unpublished theme aannemen, er zijn er 9.

**Publiceren naar live gebeurt nooit door de agent**, ook niet na inhoudelijke goedkeuring — lars kopieert zelf over. Zie [[Goedkeuringsworkflow]]. Dit geldt onverkort, ook al is bewerken van het AI Workspace-thema nu "zelf doen"-niveau.

---

## Toegang — hoe het werkt

Geen Admin API-token, geen custom app. Het Starter-Shopify-abonnement blokkeert dat spoor volledig (zie [[API & Tool Connections]] voor de volledige uitzoekgeschiedenis). Wat wél werkt: **Shopify CLI met normale merchant-login**.

**Eenmalig al geregeld op lars' machine:**
- Shopify CLI globaal geïnstalleerd (`npm install -g @shopify/cli`)
- Officiële VS Code-extensie `Shopify.theme-check-vscode`
- PowerShell execution policy op `RemoteSigned` (`CurrentUser`-scope) — anders blokkeert Windows de npm-gegenereerde `shopify.ps1`-wrapper
- Login gebeurt via device-code + browser (`shopify theme list --store hi-grip.myshopify.com` triggert dit vanzelf als er nog geen sessie is) — **moet door lars zelf in een zichtbare terminal**, de agent kan geen interactieve browser-login starten
- Eenmaal ingelogd blijft de sessie lokaal bewaard en is hij ook bruikbaar vanuit de agent's eigen (niet-interactieve) commando's op dezelfde Windows-gebruiker — geen nieuwe login per keer nodig

---

## Werkwijze per wijziging

1. **Pull** het AI Workspace-thema lokaal (map: `C:\Users\lars\shopify-ai-workspace-theme`):
   ```
   shopify theme pull --store hi-grip.myshopify.com --theme 198505464135
   ```
2. **Bewerk** de relevante bestanden lokaal (Liquid/JSON) — inhoud altijd baseren op wat er echt in de theme-bestanden staat (bv. `templates/index.json` voor sectie-content, `config/settings_data.json` voor instellingen als logo), niet op aannames of een verouderde site-audit.
3. **Lint** vóór het pushen:
   ```
   shopify theme check
   ```
   Let op: bij lange output via een niet-interactieve shell kan de voortgangsbalk de tekst verminken — bij twijfel de output naar een bestand redirecten (`> check.txt 2>&1`) en daar doorheen zoeken i.p.v. vertrouwen op wat er direct in de terminal verschijnt.
4. **Push** — altijd expliciet het theme-ID meegeven, en waar mogelijk scopen tot alleen de gewijzigde bestanden:
   ```
   shopify theme push --store hi-grip.myshopify.com --theme 198505464135 --only <bestand> --only <bestand>
   ```
   **Nooit** `--live` of een publish-commando gebruiken.
5. **Verifiëren** op de preview-URL (niet zomaar aannemen dat het werkt):
   ```
   https://hi-grip.myshopify.com?preview_theme_id=198505464135
   ```
   Check op "Liquid error" in de pagina-inhoud en dat de bedoelde wijziging (bv. een nieuw `application/ld+json`-blok) er echt staat. Live fetches op `www.higrip.nl` zelf geven vaak 429 (rate-limited door een bot-check) — de `.myshopify.com`-preview-URL werkt hiervoor betrouwbaarder.
6. **Presenteren aan lars** (preview-link + wat er veranderd is) — pas na zijn goedkeuring kopieert hij het zelf naar live. De agent publiceert nooit.

---

## Precedent: Organization/WebSite + FAQPage schema (2026-08-02)

Eerste keer dat deze procedure is toegepast — zie [[Conversie Optimalisatie Checklist]] voor de volledige inhoud/context. Kort:
- Nieuwe bestanden: `snippets/organization-schema.liquid`, `snippets/faq-schema.liquid`
- Gewijzigd: `layout/theme.liquid` (rendert beide snippets, alleen op `template == 'index'`)
- FAQ-tekst en logo kwamen 1-op-1 uit `templates/index.json` en `config/settings_data.json` — niet verzonnen
- Social-links (`sameAs`) bewust leeg gelaten, want nergens in de theme-instellingen ingevuld — code pakt ze automatisch op zodra lars ze wel invult
- Getest: `theme check` schoon (geen nieuwe offenses tov de 38 al bestaande, ongerelateerde), preview-URL bevestigd zonder Liquid-errors

---

## Gerelateerde bestanden

- [[Agent Takenverdeling & Grenzen]] — Wie dit mag beoordelen/goedkeuren
- [[Goedkeuringsworkflow]] — Hoe een wijziging van test-theme naar live gaat
- [[Conversie Optimalisatie Checklist]] — Inhoudelijke checklist die deze procedure uitvoert
- [[Shopify App Stack]] — Overige technische basis (nog te vullen)
- [[Update Log]] — Datumgewijze log van doorgevoerde wijzigingen
