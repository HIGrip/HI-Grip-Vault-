# Geheugen — actiecontrole

Zie [README](README.md) voor de geheugenregel. Afwijking: de actiecontrole maakt geen notitie en houdt geen logregel per run bij. De uitkomst per actie staat in `../_backlog/CONTROLE.json`. Dit bestand bewaart alleen wat de volgende run tokens scheelt. Houd het kort: werk bestaande regels bij in plaats van nieuwe te stapelen.

---

## Werkt per soort actie

Format: `soort actie | methode | hoe (URL of commando) | laatst gebruikt JJJJ-MM-DD`

- live pagina (title, meta, canonical, hreflang, JSON-LD, zichtbare tekst) | site | `curl -sL -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0 Safari/537.36" -H "Accept: text/html,application/xhtml+xml"`; kale `Mozilla/5.0` geeft 403 "Verifying your connection" | 2026-09-25
- verzend/retour/garantie/ODR/KvK | site | `/policies/shipping-policy`, `/policies/refund-policy`, `/policies/terms-of-service`, `/policies/privacy-policy`, `/pages/veelgestelde-vragen`, FAQ-blok productpagina, footer | 2026-09-25
- redirects | site | `curl -s -o /dev/null -w "%{http_code} -> %{redirect_url}"` per oude URL (lijst: `2026-09-23-seo-conversietest-run-1` §51–52) | 2026-09-25
- welke pagina's/artikelen bestaan, gepubliceerd, templateSuffix | shopify | één GraphQL-query `pages(first:60)` + `collections(first:20){productsCount seo templateSuffix}` + `articles(first:60)` | 2026-09-25
- productdata (productType, SKU, barcode, SEO) | shopify | `products(first:20){productType seo variants{sku barcode}}` | 2026-09-25
- key events / purchase-tracking / botverkeer / funnel | ga4 | `google_data.py keyevents` en `google_data.py ga4 --dagen 28` (bevat funnel en vermoedelijk_bot) | 2026-09-25
- routine-inrichting (uitgezet, namen, tijden) | vault | `Routines/README.md` statustabel + `list_scheduled_tasks` (lokale taken staan uit); cloudtriggers staan op info@, niet via RemoteTrigger van dit account | 2026-09-25
- compliance-administratie, outreach, besluiten van Lars, financieel plan (offertes, leningen) | geen | `handmatig`, niet opnieuw controleren | 2026-09-25

## Kan niet of lukt niet

Format: `JJJJ-MM-DD | bron | wat niet lukt | gevolg voor de controle`

2026-09-25 | gsc | Geen tool voor het AI Overviews-rapport en de indexeringsstatus (zie `search-console.md`) | acties daarover: `open`, "niet te controleren"
2026-09-25 | site | Popup- en cookiebannergedrag (EcomSend, Consent Mode) alleen zichtbaar na JavaScript-rendering | `open`, "niet te controleren"; niet elke dag opnieuw proberen zonder browser
2026-09-25 | shopify | Merchant Center-feed, Meta pixel/CAPI en het Additional Scripts-veld niet via de connector te lezen | `open`, "niet te controleren"
2026-09-25 | vault | RemoteTrigger van het lokale account ziet de info@-routines niet (list = leeg) | routinestatus via README en lokale scheduled tasks
