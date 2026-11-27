---
id: 2026-11-27-meta-campagne-diagnose-rugby-voetbal-product
titel: "Diagnose Meta-campagne HG_NL_Rugby_Voetbal_Product (Meta + GA4 + Shopify, t/m 26-11)"
kerntitel: "De ads trekken genoeg klikken; signaal, doelgroep en de pagina na de klik remmen"
datum: 2026-11-27
bron: los
routine: ""
categorie: Social
status: nieuw
prioriteit: P1
samenvatting: "€341,77 leverde 293 linkklikken (CTR 1,53%, CPC €1,17, CPM €17,81) en geen enkele aankoop met een advertentieklik als laatste bezoek; creative-vermoeidheid is er niet (frequentie per ad max 1,69). Het probleem zit in de opzet: drie gelijke adsets delen €45 per dag en halen elk maar 6 tot 13 winkelwagens per week, Meta stuurt 54% van het budget naar 45+ (22% van de winkelwagens), Meta telt 27 winkelwagens waar Shopify er 7 en GA4 er 4 ziet, en bezoekers zijn 12 seconden actief op de pagina."
gerelateerd: [2026-11-23-meta-campagnerapport, 2026-11-27-meta-ads-verblijftijd-productpagina, 2026-11-23-funnel-ga4-verkeersbronnen, 2026-11-24-landingspaginas-live-ads-message-match, 2026-11-27-landingspaginas-ads-effectmeting-dag-1]
vervangt: []
bronbestand: ""
deadline: "2026-11-30"
---
# Diagnose Meta-campagne HG_NL_Rugby_Voetbal_Product

> Map: [[Waar staat wat]]

## In het kort
Volledige doorlichting van campagne `HG_NL_Rugby_Voetbal_Product_2026-11-20` (ID 120247407556860449) over 07-11 t/m 26-11, met Meta (alleen-lezen koppeling), GA4 en Shopify naast elkaar, getoetst aan hoe Meta-bureaus in 2026 werken. De advertenties zelf doen wat ze moeten doen: een link-CTR van 1,53% en geen vermoeidheid. Wat niet werkt, zit eromheen. (1) De opzet versnippert het signaal: drie identieke adsets met één doelgroep op €45 per dag, waardoor geen adset uit de leerfase kan. (2) Advantage audience stuurt het budget naar 45+, die wel klikken maar niet kopen. (3) Meta optimaliseert op winkelwagens die voor een groot deel niet uit klikken komen. (4) Na de klik haakt bijna iedereen binnen seconden af. Daarbij bereikt het uitgavenplafond van het account vandaag of morgen zijn grens, midden in HÏ Performance Days (tot 30-11).

## Kerncijfers
- **1,53%** · Link-CTR (293 klikken op 19.195 vertoningen) · stabiel per dag
- **27 / 7 / 4** · Winkelwagens volgens Meta / Shopify-sessies / GA4
- **12 s** · Actieve tijd per sessie vanuit deze campagne (GA4, 166 sessies)
- **€42,63** · Ruimte onder het uitgavenplafond van het account (27-11)

## Acties
- [ ] P1 · Besluit: uitgavenplafond account (€876,18, nog €42,63) verhogen zodat de campagne niet stilvalt vóór het einde van Performance Days op 30-11, of bewust laten stoppen
- [ ] P1 · Besluit: de drie adsets (Voetbal, Rugby, Product) samenvoegen tot één adset met breed NL en 5 tot 6 advertenties, en daarna 7 dagen niets wijzigen
- [ ] P1 · Besluit: attributie van de adset op "7 dagen na klik" zetten (zonder 1 dag na weergave en betrokken videoweergave), zodat Meta leert van winkelwagens na een klik
- [ ] P1 · Besluit: leeftijd begrenzen op 25 tot 54 jaar als harde grens (Advantage audience uit voor leeftijd of minimumleeftijd in de accountinstellingen), 7 dagen meten tegen de huidige €/winkelwagen per leeftijd
- [ ] P2 · In Events Manager controleren of AddToCart dubbel binnenkomt (pixel én Conversions API zonder deduplicatie): Meta 27 tegen Shopify 7 sessies met winkelwagen
- [ ] P2 · In Ads Manager per advertentie het format, hook rate (3s-weergaven gedeeld door vertoningen) en ThruPlay aflezen; de koppeling geeft dat niet
- [ ] P2 · Elke week 2 nieuwe concepten aanleveren (Design Agent) die echt anders zijn: grip-demo op video, vergelijking gewone sok tegen HÏ Grip, aanbod x2, sociaal bewijs; de zwakste advertentie eruit
- [ ] P2 · Alle advertenties dezelfde UTM-opbouw met namen in plaats van {{campaign.id}}: nu komt deze campagne onder twee utm_campaign-waarden binnen
- [ ] P2 · Meten op Shopify-omzet gedeeld door advertentie-uitgaven (MER) per week naast Meta-ROAS met attributie alleen klik
- [ ] P3 · Advertenties naar de ad-landingspagina's (/pages/gripsokken-voetbal, /pages/gripsokken-rugby) laten verwijzen en na 7 dagen verblijftijd en winkelwagens per pagina vergelijken met de productpagina

## Bevindingen

### 1. Hoe goede Meta-bureaus dit aanpakken (2026)
Bronnen staan onderaan. Het zijn vooral bureau- en toolblogs met eigen belangen; de lijn is wel eensgezind.
- **Samenvoegen.** Sinds Meta's Andromeda-systeem: weinig campagnes, breed of Advantage+ audience, CBO, veel advertenties per adset. Bureaus brengen accounts met tien of meer adsets terug naar één of twee campagnes.
- **Variatie in concepten, niet in versies.** Tien advertenties met dezelfde hook en een andere achtergrondkleur zijn voor het systeem één idee. Variatie zit in probleem, bewijs en format.
- **Leerfase.** Meta's eigen richtlijn: ongeveer 50 optimalisatie-events per adset in de 7 dagen na de laatste grote wijziging. Grote wijzigingen (targeting, event, nieuwe advertentie, flinke budgetsprong) zetten de teller op nul.
- **Optimalisatie-event bij kleine aantallen.** Met minder dan ongeveer 50 aankopen per week: optimaliseren op winkelwagen of checkout, en naar aankoop zodra die regelmatig binnenkomen.
- **Vermoeidheid.** Geen officiële drempel van Meta. Bureaus gebruiken frequentie boven 2,5 tot 3 op 7 dagen samen met een CTR die 15 tot 25% onder het 14-daags gemiddelde zakt. Eerste signaal: de CPM loopt 4 tot 7 dagen vóór de CTR op.
- **Diagnose in volgorde.** CPM (veiling en doelgroep) → CTR (creative) → klik naar paginaweergave (snelheid en in-app browser) → conversie op de pagina (pagina en aanbod) → orderwaarde. Een goede hook met slechte conversie wijst op de pagina of het aanbod, niet op de advertentie.
- **Testen.** Bij grotere budgetten een aparte testcampagne (ABO) en winnaars naar CBO. Bij €45 per dag kan dat niet: dan één adset en elke week de zwakste advertentie vervangen.

### 2. Toegepast op deze campagne, per stap van de keten
| Stap | Waarde | Oordeel |
|---|---|---|
| CPM | €17,81, van €16,4 (20-11) naar €19,9 (26-11) | Loopt op, deels Black Friday-veiling |
| Link-CTR | 1,53%, per dag 1,3 tot 2,0% | Goed, geen daling |
| CPC (link) | €1,17 | Door de CPM, niet door de creative |
| Klik → paginaweergave | 63% (185 van 293) | Zwak; 98,8% loopt via de in-app browser |
| Actief op de pagina | 12 s per sessie, 10% scrolt door, 1,33 pagina's | Zwak; Google organisch 56 s, e-mail 66 s (GA4, zelfde periode) |
| Winkelwagen → aankoop na klik | 0 aankopen met advertentieklik als laatste bezoek | Hier zit het grootste verlies |

De advertentie trekt de aandacht; daarna gaat het mis. Rekenvoorbeeld: bij €1,17 per klik en 2% conversie kost een aankoop €58, meer dan de orderwaarde van ongeveer €45 (3-pack €44,95). Winst komt dus van een hogere conversie op de pagina, een hogere orderwaarde (aanbod x2) en goedkopere klikken van de juiste doelgroep. Een andere hook alleen is niet genoeg.

### 3. Structuur en leerfase
- Drie adsets met dezelfde instellingen (NL, 18 tot 65, Advantage audience, alle Facebook- en Instagram-plaatsingen, optimalisatie op winkelwagen) delen een CBO-budget van €45.
- Winkelwagens in de laatste 7 dagen: Voetbal 11 tot 13, Rugby 8, Product 6. Dat is 12 tot 26% van de 50 per adset. Eén samengevoegde adset haalt bij €45 per dag ongeveer 25 per week: nog onder de 50, maar twee tot vier keer zoveel signaal per adset als nu.
- 25% van het bereik is dubbel tussen de adsets (somreach 10.993 tegen campagnereach 8.248).
- Alle advertenties zijn op 26-11 tussen 17:03 en 17:19 opnieuw opgeslagen. Dat zet de leerfase waarschijnlijk opnieuw op nul.
- De 3-pack-campagne (actief, €112,07) loopt op dezelfde NL-doelgroep en concurreert in dezelfde veiling.

### 4. Doelgroep: leeftijd is het sterkste signaal
| Leeftijd | Uitgaven | Aandeel | Winkelwagens | €/winkelwagen |
|---|---|---|---|---|
| 18 tot 24 | €38,42 | 11% | 0 | n.v.t. |
| 25 tot 34 | €63,28 | 19% | 14 | €4,52 |
| 35 tot 44 | €56,36 | 17% | 7 | €8,05 |
| 45 tot 54 | €73,07 | 21% | 1 | €73,07 |
| 55 tot 64 | €59,51 | 17% | 2 | €29,76 |
| 65+ | €51,00 | 15% | 3 | €17,00 |

45+ klikt het vaakst (CTR 2,0 tot 2,2%) maar zet zelden iets in de winkelwagen. Statistisch sterk (z ≈ 4,7). Voorbehoud: een deel van de winkelwagens is toewijzing via weergave (zie 6). Mannen krijgen 72% van het budget; vrouwen leveren per euro meer winkelwagens, maar dat verschil is ruis.

### 5. Creatives en vermoeidheid
- **Geen vermoeidheid.** Frequentie per advertentie maximaal 1,69, CTR per dag stabiel. Alleen "Wat houd je tegen" daalde van 2,55% naar 0,70%, maar op minder dan 15 klikken per dag en zonder hogere frequentie: niet significant.
- **Meta verdeelt het budget scheef.** Sinds alle advertenties live staan (23 tot 26-11): Founders rugby 40%, Wat houd je tegen 20%, Lifestyle voetbal 16%; vijf advertenties kregen samen €38,78 en zijn dus nooit echt getest.
- **Verschillen tussen advertenties zijn ruis.** Bij 27 winkelwagens en 2 aankopen zijn de intervallen per advertentie te breed. Lichte aanwijzingen: Founders rugby (7 winkelwagens, CTR 1,62%), Lifestyle voetbal versie C (6, €5,28), Wat houd je tegen (de enige met checkouts). Zwak: Checklist voetbal (CTR 0,78%) en Nooit meer (€28, 0 winkelwagens, CTR 1,19%).
- **Te weinig echte variatie.** De negen advertenties zijn drie concepten (lifestyle, founders-brief, product/checklist) in sportversies. Wat ontbreekt: een video die de grip laat zien, een directe vergelijking, het aanbod x2 en klantreviews.
- **Plaatsing.** Reels geven goedkope klikken (€0,91 tot €1,04) maar 3 winkelwagens op €95,46 en de laagste klik-naar-pagina (53 tot 56%). Instagram feed levert breed (10 winkelwagens). Instagram stories: 10 winkelwagens uit 17 paginaweergaven, vrijwel zeker deels toewijzing via weergave.

### 6. Tracking: Meta telt meer dan er is
| Bron | Sessies | Winkelwagens | Checkout | Aankopen |
|---|---|---|---|---|
| Meta (attributie 7d klik + 1d weergave) | 185 paginaweergaven | 27 | 4 | 2 |
| Shopify (UTM, 20-11 t/m 27-11) | 173 | 7 sessies | 1 | 0 |
| GA4 (20-11 t/m 27-11) | 166 | 4 | 1 | 0 |

- Meta optimaliseert dus op een signaal dat voor ongeveer driekwart niet uit klikken komt. Met attributie alleen klik leert het systeem van echte bezoekers. Met 7 klikwinkelwagens per week is de werkelijke prijs per winkelwagen eerder €45 dan €12,66.
- Mogelijke dubbele telling door pixel plus Conversions API: na te kijken in Events Manager.
- Deze campagne komt in GA4 en Shopify onder twee namen binnen: `HG_NL_Rugby_Voetbal_Product_2026-11-20` (81 sessies) en `120247407556860449` (85 sessies, ads met {{campaign.id}} in de UTM).
- Shopify: 11 bestellingen sinds 20-11 (€361,67); geen enkele met Facebook of Instagram als herkomst.

### 7. Na de klik (GA4)
- 94% van de sessies is mobiel. De 8 desktopsessies hadden 0 seconden activiteit (vermoedelijk bots).
- Productpagina wit: 111 sessies, 3 winkelwagens; zwart: 36 sessies, 0. De ad-landingspagina's (live sinds 26-11) kregen nog maar 10 sessies: te vroeg om te beoordelen.
- Terugkerende bezoekers (11 sessies) leverden 3 van de 4 GA4-winkelwagens: de campagne werkt nu vooral als herinnering, niet als eerste verkoop.

### 8. Wat de conclusie betekent per onderdeel
| Onderdeel | Aanpassen? | Wat |
|---|---|---|
| Structuur | Ja | Eén adset breed NL, één CBO-campagne; 3-pack-campagne opnemen als advertentie in plaats van eigen campagne |
| Optimalisatie | Ja | Winkelwagen houden, attributie alleen klik; naar aankoop vanaf ongeveer 25 tot 50 klikaankopen per week |
| Doelgroep | Ja, als test | Leeftijd 25 tot 54 hard, 7 dagen meten |
| Budget | Plafond ja, dagbudget nee | Plafond verhogen tot het einde van Performance Days; dagbudget pas verhogen (stappen van maximaal 20%) als er klikaankopen zijn |
| Advertenties | Deels | 5 tot 6 houden (Founders rugby, Lifestyle voetbal C, Wat houd je tegen, Vergelijking + aanbod x2 + grip-video); Checklist voetbal en Nooit meer eruit |
| Concepten en visuals | Ja | Elke week 2 echt nieuwe concepten; product groot, gripzones en prijs in beeld; 9:16-versies voor Reels en Stories |
| Vermoeidheid | Nee | Regel voor later: verversen bij frequentie boven 2,5 op 7 dagen plus CTR 20% onder het 14-daags gemiddelde |
| Pagina na de klik | Ja | Grootste hefboom; route via Website Agent (aparte CRO-taak) |

## Wat niet lukte
De GA4-koppeling (analytics-mcp) startte niet; GA4 is direct via de Data API met de service-account van de koppeling uitgelezen. De Meta-koppeling geeft geen leerfase-status, creative-inhoud, ThruPlay, hook rate of attributie per venster. Ads-QA is overgeslagen (geen QA-agent voor het Ads-domein beschikbaar in deze sessie); de cijfers zijn wel tegen elkaar gelegd (Meta-dagsommen = totalen, GA4 en Shopify naast Meta). Stap B (research-sync) en publicatie van het dashboard overgeslagen: dat lukt alleen vanaf info@, deze sessie draait op het persoonlijke account.

## Bronnen
- Meta, alleen-lezen koppeling (meta_campaigns, meta_adsets, meta_ads, meta_insights met dag-, leeftijd-, geslacht-, plaatsing- en apparaatsplitsing, meta_account_info, meta_pixels), 07-11 t/m 26-11, peildatum 27-11-2026
- GA4-property www.higrip.nl (476032345), Data API, 20-11 t/m 27-11: sessionCampaignName, sessionSourceMedium, sessionManualAdContent, landingPage, deviceCategory, newVsReturning, eventName
- Shopify Analytics (ShopifyQL): sessions per utm_campaign en sales per order_referrer, 20-11 t/m 27-11
- Werkwijze bureaus: [Skaleit, post-Andromeda structuur](https://skaleit.agency/blog/post-andromeda-meta-ads-strategy-consolidated-adsets-43-roas/) · [SEM Dispatch, Andromeda en accountstructuur](https://semdispatch.com/paid-media/social-media-advertising/andromeda-account-structure-post-2025) · [Jetfuel, ABO en CBO voor DTC](https://jetfuel.agency/meta-ads-campaign-structure-in-2026-abo-vs-cbo-and-budget-architecture-for-dtc-brands/) · [Flighted, structuur kleine merken](https://www.flighted.co/blog/best-meta-ads-account-structure-for-small-brands) · [Jon Loomer, leerfase 10 of 50](https://www.jonloomer.com/learning-phase/) · [TheOptimizer, creative-vermoeidheid](https://theoptimizer.io/blog/meta-ads-creative-fatigue-how-to-detect-it-early-and-what-to-do-about-it) · [Madgicx, Meta creative burnout](https://madgicx.com/blog/meta-creative-burnout-prevention) · [Motion, creative metrics](https://motionapp.com/blog/key-creative-performance-metrics) · [WeltPixel, event bij weinig orders](https://weltpixel.com/blogs/news/which-event-should-a-low-volume-shopify-store-optimize-for)

## Aantekeningen
