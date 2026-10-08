---
type: feiten
status: in-gebruik
laatst-geverifieerd: 2026-10-01
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
| Live thema-ID | Wisselt. **Altijd `shopify theme list` draaien** en live beschermen op rol (`live`/`main`), niet op nummer. Het laatst bekende werk- en live-ID staat alleen in [[Technische Procedures]]. Nooit naartoe pushen zonder opdracht van Lars. | zie [[Technische Procedures]] |
| Talen | NL (hoofd) + EN op `/en/` (sinds sep 2026, hreflang nl/en/x-default) | 2026-09-21 |
| GA4-property | `476032345` | 2026-09-15 |
| Search Console | Ingesteld voor higrip.nl, sitemap ingediend | 2026-09-15 |
| Reviews | Trustpilot: https://nl.trustpilot.com/review/higrip.nl — **geen** reviewapp op de site, dus **geen `aggregateRating` in schema** | 2026-09-21 |

## Producten en prijzen (consument, incl. btw)

| Product                          | Handle                             | Maten                 | Prijs                                                     | Geverifieerd                      |
| -------------------------------- | ---------------------------------- | --------------------- | --------------------------------------------------------- | --------------------------------- |
| Performance Gripsokken (1.0)     | `performance-gripsokken`           | 34–39 · 40–46         | 1-pack **€14,95** · 3-pack **€41,95** · 5-pack **€64,95** | 2026-10-01 (Shopify-koppeling) |
| Performance Gripsokken 2.0 Zwart | `performance-gripsokken-2-0-zwart` | 35–38 · 39–42 · 43–47 | **€17,95**                                                | 2026-10-01 (Shopify-koppeling)    |
| Performance Gripsokken 2.0 Wit   | `performance-gripsokken-2-0-wit`   | 35–38 · 39–42 · 43–47 | **€17,95**                                                | 2026-10-01 (Shopify-koppeling)    |

- Prijsverloop 1.0: rond 24-9 tijdelijk €13,49 / €39,95 / €61,95, sinds de update van 28-9 weer €14,95 / €41,95 / €64,95 (per paar €14,95 / €13,98 / €12,99).
- Voorraad 2.0 (zwart en wit) staat op 1-10 op 0, met negatieve aantallen per maat: controleer of de producten niet doorverkocht worden.
- Adviesprijs retail 2.0: **€17,95**, gelijk aan de webshopprijs (besluit Lars 2-10-2026; de one-pagers noemden €17,99).
- Oude handles redirecten: `hi-grip-gripsokken-1` → `hi-grip-gripsokken` → `performance-gripsokken` (2 stappen, 25 sep). Gebruik altijd de nieuwe handle.

## Verzending en retour — vastgesteld door Lars op 25 sep 2026

| Feit | Vastgestelde waarde | Live staat (laatst gezien 28 sep, regressiecheck) |
| --- | --- | --- |
| Verzendkosten | **€4,50** | `/policies/terms-of-service` zegt nog €4,25; de nieuwe `/pages/verzendbeleid` noemt geen bedrag → **conflict** |
| Gratis verzending vanaf | **€35** | Announcementbar €35; `/pages/verzendbeleid` noemt geen drempel; FAQ op de productpagina zei op 25 sep €30 → **conflict** |
| Verzendtijd | **Binnen 1 werkdag verzonden** | `/policies/shipping-policy` zegt "vóór 16:00"; "vóór 22:00 vandaag verzonden" staat via een gedeeld metafield op meerdere pagina's → **conflict**. De 22:00-belofte vervalt. |
| Retour | **30 dagen** | `/pages/retourbeleid` zegt 30 dagen, maar nog "ongeopend" en 25% herbevoorradingskosten; `/policies/refund-policy` zegt 14 dagen → **conflict**, ook juridisch (zie [[Compliance To-Do Lijst]] §4.2) |

Actuele stand en de bijbehorende actie: zie de backlog (`05_Research/_backlog/ACTIEBACKLOG.md`, punt "Nieuwe verzend-/retour-/betalingspagina's").

Bron: besluit van Lars van 25 sep 2026, vastgelegd in [[Performance Grip Socks 2.0]] §1 (vervangt de waarden uit [[Update Log]] van 4 sep). Gelijktrekken op: productpagina + FAQ-blok, homepage- en productmeta's, algemene voorwaarden, verzend- en retourbeleid, en daarna pas `shippingDetails` / `hasMerchantReturnPolicy` in het Product-schema.

## Claims

| Claim | Waarde | Status |
|---|---|---|
| Aantal sporters | **3000+** | Bevestigd door Lars 15 sep. Oude teksten zeggen 1.500+ of 2.000+ — niet meer gebruiken. |
| Wrijvingscoëfficiënt | 1,17 (tegen 0,60 bij gewone sokken) | Peer-reviewed: Apps et al. 2022, *Journal of Sports Sciences* (doi 10.1080/02640414.2022.2080163). Friedl et al. 2023 is **gemengd** bewijs (alleen +9,3% benutte tractie bij afremmen citeren). Details: [[Performance Grip Socks 2.0]] §3 |
| Meer grip | 95% meer grip | Afgeleid: 1,17 ÷ 0,60 = 1,95. Zelfde bron. **Alleen met de formuleringsregel hieronder** |
| Reviewscore | **4,6 ★** (Trustpilot, 17 reviews op 3 sep) | Het cijfer voor drukwerk, pitch en ads (besluit Lars 2-10-2026). Altijd met bron "Trustpilot"; nooit als schema-rating. De reviews op higrip.nl zelf staan op 4,5 / 5 (15 sep): noem dat cijfer niet als merkscore. |
| Vertrouwd door | 10+ organisaties | Niet geteld; voorzichtig gebruiken |

> [!danger] Formuleringsregel voor grip-claims (verplicht in elke uiting)
> Het onderzoek gaat over gripsokken in het algemeen, niet over een test van de HÏ Grip-sok zelf. Schrijf dus: *"Wetenschappelijk aangetoond: gripsokken verhogen de statische wrijvingscoëfficiënt van 0,60 naar 1,17 — 95% meer grip (Apps et al. 2022)"*. Nooit: *"HÏ Grip getest: 95% meer grip"*, tenzij er een eigen meetrapport ligt. Zet de bronregel bij elk getal.

## Markt en focus

> Merk, strategie en doelen volgen sinds 30-9-2026 het Canva-document *MERK & STRATEGIE — HÏ Grip* (https://canva.link/a48n60z2ay1g7bp). Uitwerking: [[Strategische Keuzes]] en [[Beachhead Strategie]].

- **Doelgroep:** de prestatiegerichte sporter (de HÏ Grip sporter, zie [[Doelgroep & Persona's]]).
- **Kernsporten (beachheads):** tennis/padel (één beachhead), voetbal, rugby. We testen op alle drie en kiezen er daarna één. Omvang volgens het Canva-document: tennis/padel 40.000–60.000 actieve sporters per maand · voetbal 10.000–50.000 · rugby 17.000 bij 101 clubs.
- **Team:** drie founders (Lars, Timo, Tigo), naast hun studie. Kanaaleigenaren: zie [[Strategische Keuzes]].
- **Kanalen:** SEO/e-mail · organisch/Meta ads/influencers/guerilla · koude acquisitie B2B · bol.com/TikTok Shop. Secundair: events en toernooien, mond-op-mond, presenteren.
- **Nieuwsbrief:** elke drie weken een waardevolle mail naar alle adressen (automatiseringsmails staan al).
- **Hoofdkeyword:** "gripsokken" (één woord). Long-tails: "waarom glijdt mijn voet in mijn padelschoen", "tapedesign alternatief", "wat zijn gripsokken".
- **Concurrenten:** FitSockr, Tapedesign, Optigrip, Proskary. Op "gripsokken kopen" ook Decathlon, Match Fit Shop, Stanno, 11teamsports, Voetbalshop en bol.com.
- **Productnamen:** in communicatie PERFORMANCE GRIP SOCKS (1.0) en PERFORMANCE GRIP SOCKS 2.0; op higrip.nl, marketplaces en feeds PERFORMANCE GRIPSOKKEN en PERFORMANCE GRIPSOKKEN 2.0. Zie [[Brand Voice & Tone of Voice]].
- **Binnenkort:** Performance Tubes (voetloze kousen) en Performance Ski Socks · ALPINE PRO (skisokken; op de site: Performance Skisokken). Mag als "binnenkort" genoemd worden, zoals in de pitch. **Geen lanceringsdatum en geen productclaims** noemen tot die hier staan.

## Waar data vandaan komt

| Bron | Toegang |
|---|---|
| Shopify (producten, orders, analytics, pagina's) | Shopify-connector op het info@-account |
| Google Analytics 4 · Search Console | Geen claude.ai-connector. Gebruik `python 05_Research/_tools/google_data.py` met de servicesleutel `ga4-mcp@higrip-analytics.iam.gserviceaccount.com`, in de cloud via de omgevingsvariabele `GOOGLE_SA_JSON_B64`; lokaal kan ook `analytics-mcp`. |
| Meta (Ads, Ad Library, pixel) | Meta-koppeling op het info@-account |
| Live site | Direct ophalen (curl/WebFetch); de cloudomgeving moet netwerktoegang tot higrip.nl hebben |

## Wijzigingslog

- 2026-10-02 — Besluiten Lars: reviewscore 4,6 (Trustpilot) is het merkcijfer; adviesprijs retail 2.0 = €17,95, gelijk aan de webshop.
- 2026-10-02 — Vault-review: thema-ID alleen nog in [[Technische Procedures]]; live staat verzending/retour bijgewerkt naar de regressiecheck van 28-9; claimbronnen gelijkgetrokken met [[Performance Grip Socks 2.0]] §3 en formuleringsregel toegevoegd; beide reviewcijfers met bron (keuze `[CHECK]` bij Lars).
- 2026-09-30 — Markt en focus gelijkgetrokken met het Canva-document *MERK & STRATEGIE* (leidend): tennis/padel als één beachhead, doelgroep, team, kanalen, nieuwsbriefritme 3 weken, productnamen, skisokken van "uitgesteld" naar "binnenkort, geen datum".

- 2026-09-25 — Verzendtijd gecorrigeerd naar "binnen 1 werkdag" (besluit Lars, stond vast in een losse branch en is nu samengevoegd).
- 2026-09-25 — Bestand aangemaakt uit het projectgeheugen, [[Performance Grip Socks 2.0]], [[Update Log]] en een live controle van prijzen en handles.

## Gerelateerd onderzoek (automatisch)

Onderzoek uit `05_Research/` dat naar deze notitie verwijst, nieuwste eerst. Bijgewerkt door `vault_nav.py`; niet met de hand bewerken.

- [[2026-10-08-seo-aeo-geo-aio-sxo-audit]] — Audit higrip.nl — SEO, AEO, GEO, AIO en SXO op 8 oktober
- [[2026-10-08-audit-higrip-nl-seo-aeo-geo-aio-sxo-nieuwe-run]] — Audit higrip.nl — SEO, AEO, GEO, AIO en SXO, nieuwe run 8 oktober (met Search Console en GA4)
- [[2026-10-07-shoppagina-keuzepagina]] — Shoppagina higrip.nl — keuzepagina 1.0 vs 2.0, SEO-keuzes en concept
- [[2026-10-07-missie-visie-pagina]] — Missie & Visie-pagina higrip.nl — onderzoek, SEO-keuzes en concept
- [[2026-10-03-dashboard-agenda-mail-ads-leveranciers]] — Dashboard — Agenda, Mail, Ads (Meta + Hermes) en Leveranciers toegevoegd, plus 20 features voor later
- [[2026-10-02-vault-review]] — Vault-review — koppelingen, dubbelingen en foutieve informatie
- [[2026-10-02-obsidian-structuur-ai-agents]] — Obsidian-structuren voor AI-agents en onze vault ernaast gelegd
- [[2026-09-25-seo-audit]] — SEO-audit higrip.nl 25 september — 54/100, padel-regressie en rugby ontbreekt

> **Brand Core (00):** [[00 Brand Core]] · [[Home]]
