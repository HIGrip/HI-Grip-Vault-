---
type: feiten
status: in-gebruik
laatst-geverifieerd: 2026-09-25
---

# Feiten & Actuele Staat — HÏ Grip

> [!important] Waarom dit bestand bestaat
> Prijzen, URL's, ID's en claims stonden hardcoded in routine-prompts, geheugenbestanden en notities, en liepen daar achter op de werkelijkheid. Dit is vanaf 25 september 2026 **de enige plek** voor operationele feiten. Routines en agents lezen dit bestand bij de start. Zet feiten nooit meer in een prompt.
>
> Productspecificaties (maten 2.0, EAN, B2B-prijzen, materiaal) staan in [[Performance Grip Socks 2.0]]. Merkregels staan in `CLAUDE.md` in de hoofdmap van de vault.

## Zo gebruik je dit bestand

1. **Lezen vóór je begint.** Elke routine en agent leest dit bestand in stap 1.
2. **Live verifiëren waar het kan.** Prijzen via `https://www.higrip.nl/products/<handle>.js` of de Shopify-koppeling, thema's via `shopify theme list`. Wijkt de live waarde af van dit bestand, dan geldt de live waarde. Meld de afwijking in je rapport en werk de rij hieronder bij, met datum.
3. **Nooit verzinnen.** Staat iets niet hier of in [[Performance Grip Socks 2.0]], en kun je het niet live controleren? Dan zet je `[CHECK]` in je output.

---

## Webshop

| Feit | Waarde | Geverifieerd |
|---|---|---|
| Domein | https://www.higrip.nl (higrip.nl redirect naar www) | 2026-09-25 |
| Shopify-winkel | `hi-grip.myshopify.com` · admin-slug `raqds3-tb` | 2026-09-23 |
| Thema | Horizon (Online Store 2.0) | 2026-09-15 |
| Live thema-ID | Wisselt. **Altijd `shopify theme list` draaien**, nooit een ID uit een document vertrouwen. Laatst bekend: `199814873415` (4 sep). Nooit naartoe pushen zonder opdracht van Lars. | 2026-09-04 |
| Talen | NL (hoofd) + EN op `/en/` (sinds sep 2026, hreflang nl/en/x-default) | 2026-09-21 |
| GA4-property | `476032345` | 2026-09-15 |
| Search Console | Ingesteld voor higrip.nl, sitemap ingediend | 2026-09-15 |
| Reviews | Trustpilot: https://nl.trustpilot.com/review/higrip.nl — **geen** reviewapp op de site, dus **geen `aggregateRating` in schema** | 2026-09-21 |

## Producten en prijzen (consument, incl. btw)

| Product | Handle | Maten | Prijs | Geverifieerd |
|---|---|---|---|---|
| Performance Gripsokken (1.0) | `performance-gripsokken` | 34–39 · 40–46 | 1-pack **€13,49** · 3-pack **€39,95** · 5-pack **€61,95** | 2026-09-25 (live `.js`) |
| Performance Gripsokken 2.0 Zwart | `performance-gripsokken-2-0-zwart` | 35–38 · 39–42 · 43–47 | **€14,95** | 2026-09-25 (live `products.json`) |
| Performance Gripsokken 2.0 Wit | `performance-gripsokken-2-0-wit` | 35–38 · 39–42 · 43–47 | **€14,95** | 2026-09-25 (live `products.json`) |

- Adviesprijs retail 2.0: €17,99 (zie [[Performance Grip Socks 2.0]]).
- Oude handles redirecten: `hi-grip-gripsokken-1` → `hi-grip-gripsokken` → `performance-gripsokken` (2 stappen, 25 sep). Gebruik altijd de nieuwe handle.

## Verzending en retour — vastgesteld door Lars op 25 sep 2026

| Feit | Vastgestelde waarde | Live staat op 25 sep |
|---|---|---|
| Verzendkosten | **€4,50** | Algemene voorwaarden zeggen €4,25 → **conflict** |
| Gratis verzending vanaf | **€35** | FAQ op de productpagina zegt €30 → **conflict** |
| Verzendtijd | **Binnen 1 werkdag verzonden** | FAQ-pagina zegt "vóór 16:00 dezelfde dag", homepage/meta "vóór 22:00 vandaag verzonden" → **conflict**. De 22:00-belofte vervalt. |
| Retour | **30 dagen** | Retourbeleid zegt 14 dagen, ongeopend, 25% herbevoorradingskosten → **conflict**, ook juridisch (zie [[Compliance To-Do Lijst]] §4.2) |

Bron: besluit van Lars van 25 sep 2026, vastgelegd in [[Performance Grip Socks 2.0]] §1 (vervangt de waarden uit [[Update Log]] van 4 sep). Gelijktrekken op: productpagina + FAQ-blok, homepage- en productmeta's, algemene voorwaarden, verzend- en retourbeleid, en daarna pas `shippingDetails` / `hasMerchantReturnPolicy` in het Product-schema.

## Claims

| Claim | Waarde | Status |
|---|---|---|
| Aantal sporters | **3000+** | Bevestigd door Lars 15 sep. Oude teksten zeggen 1.500+ of 2.000+ — niet meer gebruiken. |
| Wrijvingscoëfficiënt | 1,17 (tegen 0,60 bij gewone sokken) | Onderbouwd: Apps et al. 2020 en 2022, Friedl et al. 2023 |
| Meer grip | 95% meer grip | In gebruik in merkmateriaal; afgeleid van de wrijvingscoëfficiënt |
| Reviewscore | 4,6 ★ (Trustpilot, 17 reviews op 3 sep) | Alleen noemen met bron; nooit als schema-rating |
| Vertrouwd door | 10+ organisaties | Niet geteld; voorzichtig gebruiken |

## Markt en focus

- **Beachhead-sporten (sinds 16 sep 2026):** tennis, rugby, voetbal. Padel blijft een groeimarkt (876.000 NL-spelers).
- **Hoofdkeyword:** "gripsokken" (één woord). Long-tails: "waarom glijdt mijn voet in mijn padelschoen", "tapedesign alternatief", "wat zijn gripsokken".
- **Concurrenten:** FitSockr, Tapedesign, Optigrip, Proskary. Op "gripsokken kopen" ook Decathlon, Match Fit Shop, Stanno, 11teamsports, Voetbalshop en bol.com.
- **Skisokken met gelprotection:** lancering uitgesteld; niet in content of ads meenemen.

## Waar data vandaan komt

| Bron | Toegang |
|---|---|
| Shopify (producten, orders, analytics, pagina's) | Shopify-connector op het info@-account |
| Google Analytics 4 · Search Console | Geen claude.ai-connector. Gebruik `python 05_Research/_tools/google_data.py` met de servicesleutel `ga4-mcp@higrip-analytics.iam.gserviceaccount.com`, in de cloud via de omgevingsvariabele `GOOGLE_SA_JSON_B64`; lokaal kan ook `analytics-mcp`. |
| Meta (Ads, Ad Library, pixel) | Meta-koppeling op het info@-account |
| Live site | Direct ophalen (curl/WebFetch); de cloudomgeving moet netwerktoegang tot higrip.nl hebben |

## Wijzigingslog

- 2026-09-25 — Verzendtijd gecorrigeerd naar "binnen 1 werkdag" (besluit Lars, stond vast in een losse branch en is nu samengevoegd).
- 2026-09-25 — Bestand aangemaakt uit het projectgeheugen, [[Performance Grip Socks 2.0]], [[Update Log]] en een live controle van prijzen en handles.
