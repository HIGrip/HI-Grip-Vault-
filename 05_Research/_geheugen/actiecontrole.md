# Geheugen — actiecontrole

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[Waar staat wat]] · [[Home]]

Zie [README](README.md) voor de geheugenregel. Afwijking: de actiecontrole maakt geen notitie en houdt geen logregel per run bij. De uitkomst per actie staat in `../_backlog/CONTROLE.json`. Dit bestand bewaart alleen wat de volgende run tokens scheelt. Houd het kort: werk bestaande regels bij in plaats van nieuwe te stapelen.

---

## Werkt per soort actie

Format: `soort actie | methode | hoe (URL of commando) | laatst gebruikt JJJJ-MM-DD`

- live pagina (title, meta, canonical, hreflang, JSON-LD, zichtbare tekst) | site | `curl -sL -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Safari/537.36" -H "Accept: text/html,application/xhtml+xml"`; kale `Mozilla/5.0` geeft 403 "Verifying your connection". **Val niet voor `grep -c PATROON bestand.flat.html`** na `tr -d '\n'`: het hele bestand is dan 1 regel, dus `-c` telt 0 of 1 i.p.v. het aantal treffers. Gebruik `grep -o PATROON bestand | wc -l`, of liever een kleine Python-regex op het originele (niet-geflatte) bestand voor exacte counts (alt-teksten, "u/uw", schema-types). | 2026-10-11
- verzend/retour/garantie/ODR/KvK | site | `/policies/shipping-policy`, `/policies/refund-policy`, `/policies/terms-of-service`, `/policies/privacy-policy`, `/pages/veelgestelde-vragen`, FAQ-blok productpagina, footer; ook `/pages/verzendbeleid`, `/pages/retourbeleid`, `/pages/terugbetalingsbeleid` (nieuwe pagina's sinds 28-9, nog niet gelijk aan de oude policies) | 2026-10-11
- redirects | site | `curl -s -o /dev/null -w "%{http_code} -> %{redirect_url}"` per oude URL (lijst: `2026-09-23-seo-conversietest-run-1` §51–52); `-L` + `-w "%{http_code} %{url_effective}"` toont de eind-URL na een keten | 2026-09-25
- welke pagina's/artikelen bestaan, gepubliceerd, templateSuffix | shopify | één GraphQL-query `pages(first:50)` + `collections(first:20){productsCount seo templateSuffix}` + `articles(first:50)` + `themes(first:10){name role}` (max `first:50`, niet 60) | 2026-10-11
- productdata (productType, SKU, barcode, SEO) | shopify | `products(first:20){handle productType seo{title description} variants{sku barcode}}` | 2026-10-11
- key events / purchase-tracking / botverkeer / funnel | ga4 | `google_data.py keyevents` en `google_data.py ga4 --dagen 28` (bevat funnel en vermoedelijk_bot) | 2026-09-25
- dashboardcijfers (kpi/agenda/cwv/koppelingen) | vault | `google_data.py dashboard` faalt in een verse cloudsessie met `No module named 'google'/'googleapiclient'/'requests'` (packages niet preinstalled) **en** na `pip install` met een conflict tussen het systeem-`cryptography` (Rust/pyo3, python3.13) en het pip-`cryptography` voor `python3` (/usr/local, python3.11): `No module named '_cffi_backend'` / `pyo3_runtime.PanicException`. Oplossing die werkte: `python3 -m pip install --ignore-installed --target=/tmp/<run>/pylibs cryptography cffi google-analytics-data google-auth google-api-python-client requests`, dan draaien met `PYTHONPATH=/tmp/<run>/pylibs python3 05_Research/_tools/google_data.py dashboard`. Nooit `pip install` zonder `--target`/`PYTHONPATH`-fix proberen: dat raakt de systeem-cryptography niet en blijft falen. | 2026-10-11
- routine-inrichting (uitgezet, namen, tijden) | vault | `Routines/README.md` statustabel + `list_scheduled_tasks` (lokale taken staan uit); cloudtriggers staan op info@, niet via RemoteTrigger van dit account | 2026-09-25
- compliance-administratie, outreach, besluiten van Lars, financieel plan (offertes, leningen), "Besluit:"-acties | geen | `handmatig`, niet opnieuw controleren | 2026-10-11
- dashboard/CRM-prototype-project (v4, Next.js, blauwdruk, bronmap) | geen | niet in deze vault/repository, dus `niet te controleren` (methode vault) tenzij het specifiek over een vault-bestand gaat | 2026-10-11
- thema-bestanden (liquid/json-snippets, FAQ/schema-inhoud) | shopify | `theme(id:"gid://shopify/OnlineStoreTheme/<id>"){ files(filenames:[...], first:20){ nodes{ filename body{ ... on OnlineStoreThemeFileBodyText{content} } } userErrors{filename code} } }`; `code: NOT_FOUND` = bestand bestaat niet. Max ~6 bestanden per call anders "exceeds maximum allowed tokens" (resultaat gaat dan naar een bestand in tool-results, lees dat met Bash/python). Live-theme-ID en testthema-ID staan in [[Technische Procedures]]/feitenbestand; op 2026-10-12 was het live-thema 201132507463 en het testthema 201133490503. | 2026-10-12
- Shopify-orders/omzet voor vergelijkingen (niet het dashboardbestand) | shopify | `run-analytics-query`: `FROM sales SHOW orders, total_sales SINCE -28d UNTIL today` (alleen totalen, geen klantgegevens) | 2026-10-12

## Kan niet of lukt niet

Format: `JJJJ-MM-DD | bron | wat niet lukt | gevolg voor de controle`

2026-09-25 | gsc | Geen tool voor het AI Overviews-rapport en de indexeringsstatus (zie `search-console.md`) | acties daarover: `open`, "niet te controleren"
2026-09-25 | site | Popup- en cookiebannergedrag (EcomSend, Consent Mode) alleen zichtbaar na JavaScript-rendering | `open`, "niet te controleren"; niet elke dag opnieuw proberen zonder browser
2026-09-25 | shopify | Merchant Center-feed, Meta pixel/CAPI en het Additional Scripts-veld niet via de connector te lezen | `open`, "niet te controleren"
2026-09-25 | vault | RemoteTrigger van het lokale account ziet de info@-routines niet (list = leeg) | routinestatus via README en lokale scheduled tasks
2026-10-11 | vault | CONTROLE.json stond sinds 26-9 stil (geen run tussendoor); deze run heeft alle 88 toen nog open acties herchecked plus 93 nieuwe + 42 Besluit-acties plus 120 ontbrekende `uitvoerbaar`-beoordelingen in één keer verwerkt | eenmalige inhaalslag; vanaf nu weer dagelijks bij te houden
2026-10-11 | vault | Geen `acties.py`-commando om een losse verweesde actie-id (bv. `2026-09-25-seo-audit#118b76a0`) uit `CONTROLE.json`/`UITVOERBAAR.json` te knippen | backlogpunt `#035b0bdd` blijft `open` tot het script die optie krijgt
2026-10-12 | ga4 | PageSpeed Insights API blijft 429 (quotum, staat nog niet aan in higrip-analytics) | INP/CWV-acties: `open`, "niet te controleren"
2026-10-12 | geen | Geen tool voor cookiebanner-/popupgedrag, mobiele rendering of accessibility-audit (JS/viewport nodig) | zulke acties: `open`, "niet te controleren"
