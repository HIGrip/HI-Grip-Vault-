---
type: kennis
gebied: denzel
bijgewerkt: 2026-10-02
status: concept — ter beoordeling door Lars
---

# Toetslijst Website-QA

> Het domein van de Website Agent: thema, SEO, paginacopy, analyse en e-mail. Naast de gedeelde basis uit [[Toetsregels]]. Wijzigingen aan deze lijst gaan via Denzel en Lars. Voeg een controle toe zodra een fout voor de tweede keer terugkomt (zie [[Leerregels per Agent]]).

| # | Controle | Bewijs | Bij falen |
|---|---|---|---|
| W1 | **Thema.** Het werk zit in het werkthema, niet in het thema met rol `live`. Thema-ID gecontroleerd met `shopify theme list` | Uitvoer van `theme list` met de rol | Blokkerend |
| W2 | **Preview.** De pagina rendert zonder Liquid-fouten in de preview | `theme check` zonder fouten en een geladen preview-URL | Belangrijk. Blokkerend als het de checkout of homepage raakt |
| W3 | **Structured data.** JSON-LD is geldig en klopt met de pagina. Geen `aggregateRating` zonder echte, zichtbare reviews | JSON-LD uit de pagina gehaald en gevalideerd | Blokkerend bij verzonnen rating, anders belangrijk |
| W4 | **Beleid in teksten.** Verzend- en retourbeloftes in copy, FAQ en schema komen overeen met het feitenbestand | Tekst naast [[Feiten & Actuele Staat]] gelegd, ook de FAQPage-JSON-LD | Blokkerend |
| W5 | **Claims.** Geen claim sterker dan de vault onderbouwt ("wetenschappelijk bewezen" zonder bron). Productclaims uit [[Brand Voice & Tone of Voice]] | Zin met bron of **[LARS]** | Blokkerend |
| W6 | **Klantenaantal en ratings.** Overal identiek, nooit zelf een cijfer gekozen | Vergelijking over de pagina's | Blokkerend |
| W7 | **SEO-titel en -meta.** Lengte binnen de bandbreedte uit de SEO-strategie, specifiek in plaats van "Bestel nu". Aanpassing in Shopify Admin is geen themewijziging, dus het voorstel zegt wie het doorvoert | Aantal tekens en tekst | Belangrijk |
| W8 | **Sportfocus.** Sportpagina's en homepage volgen de beachhead-volgorde. Rugby ontbrak eerder in de sport-grid | De volledige sectielijst gelezen, niet half | Belangrijk |
| W9 | **Merkstem op de pagina.** HÏ Grip met trema, je/jij, kopstijl volgens de merkregels, geen AI-openers | Citaat van de afwijkende zin | Klein tot belangrijk |
| W10 | **E-mail.** Concept, niets verstuurd. Platform genoemd (SendWILL of Shopify Messaging) en als **[LARS]** gemarkeerd tot bevestigd. Geen claims als "getest door tennissers" zonder bron | Het concept zelf | Blokkerend bij verzonnen claim |
| W11 | **Analyse.** Onder circa 100 echte sessies per week zijn cijfers indicatief, geen trend. Botverkeer gefilterd. 0 conversies in GA4 is een meetprobleem tot Shopify Analytics het tegenspreekt | Het getal naast de bron | Belangrijk |
| W12 | **EN-versie.** Is er een Engelse pagina, dan dezelfde controles en geen dubbele H1 of onvertaalde hero | De EN-pagina bekeken | Belangrijk |
| W13 | **Gaten.** Wat is niet bekeken (mobiel, andere pagina's, andere talen)? | — | — |

## Typisch bewijs per type controle

| Type | Bewijs |
|---|---|
| Thema | Uitvoer van `shopify theme list` en `shopify theme check` |
| Live pagina | `curl` of `web_extract` met de relevante regels |
| Schema | JSON-LD uit de pagina met de uitkomst van de validator |
| Tekst | Letterlijk citaat met bestandsnaam of URL |

## Bekende valkuilen

- Een wijziging die alleen via Shopify Admin kan (titel en meta) wordt als themewijziging voorgesteld. Dat is een planningsfout, geen inhoudelijke fout.
- Het werkthema en live lopen uit elkaar. Een verschil is eerst een bevinding over de status, daarna pas over het werk.
- Een thema-ID wisselt. Nooit uit het geheugen, altijd uit `theme list`.

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[06 Denzel — Index]] · [[Home]]
