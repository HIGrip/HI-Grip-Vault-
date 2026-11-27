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
Volledige doorlichting van campagne `HG_NL_Rugby_Voetbal_Product_2026-11-20` (ID 120247407556860449) over 07-11 t/m 26-11, met Meta (alleen-lezen koppeling), GA4 en Shopify naast elkaar, getoetst aan hoe Meta-bureaus in 2026 werken. De advertenties zelf doen wat ze moeten doen: een link-CTR van 1,53% en geen vermoeidheid. Wat niet werkt, zit eromheen. (1) De opzet versnippert het signaal: drie identieke adsets met één doelgroep op €45 per dag, waardoor geen adset uit de leerfase kan. (2) Advantage audience stuurt het budget naar 45+, die wel klikken maar niet kopen. (3) Meta telt 27 winkelwagens (22 na een klik, 5 na alleen zien), terwijl Shopify er 7 ziet en GA4 4: Meta optimaliseert op een winkelwagenmeting die niet gelijkloopt met de winkel. (4) Na de klik haakt bijna iedereen binnen seconden af. Het uitgavenplafond is later op 27-11 verhoogd naar €1.876,18 (€1.035 ruimte). Heranalyse met alle gegevens en de aanbeveling: bevinding 10.

## Kerncijfers
- **1,53%** · Link-CTR (293 klikken op 19.195 vertoningen) · stabiel per dag
- **27 / 7 / 4** · Winkelwagens volgens Meta / Shopify-sessies / GA4
- **12 s** · Actieve tijd per sessie vanuit deze campagne (GA4, 166 sessies)
- **0** · Shopify-bestellingen met Facebook of Instagram als herkomst (07-11 t/m 27-11, 14 bestellingen totaal)

## Acties
- [ ] P1 · Besluit: uitgavenplafond account (€876,18, nog €42,63) verhogen zodat de campagne niet stilvalt vóór het einde van Performance Days op 30-11, of bewust laten stoppen
- [ ] P1 · Besluit: tot en met 30-11 niets aan deze campagne wijzigen; vanaf 01-12 de drie adsets vervangen door één nieuwe adset (breed NL, 5 tot 6 advertenties) en daarna 7 dagen niets wijzigen
- [ ] P3 · Besluit: attributie op "7 dagen na klik" zetten; nu komen 5 van de 27 winkelwagens uit alleen zien (1 dag na weergave)
- [ ] P2 · Besluit: leeftijd niet hard begrenzen; hooguit 45 tot 54 uitsluiten als test vanaf 01-12 (de andere leeftijdsverschillen komen van een paar bezoekers)
- [ ] P1 · In Events Manager controleren of AddToCart dubbel binnenkomt (pixel én Conversions API zonder deduplicatie): Meta telt 22 winkelwagens na een klik, Shopify ziet 7 sessies met winkelwagen
- [ ] P2 · Bij de volgende run de hook rate, ThruPlay en kwaliteitsrankings per advertentie meenemen (kan sinds de uitbreiding van de koppeling op 27-11)
- [ ] P2 · Elke week 2 nieuwe concepten aanleveren (Design Agent) die echt anders zijn: grip-demo op video, vergelijking gewone sok tegen HÏ Grip, aanbod x2, sociaal bewijs; de zwakste advertentie eruit
- [ ] P2 · Alle advertenties dezelfde UTM-opbouw met namen in plaats van {{campaign.id}}: nu komt deze campagne onder twee utm_campaign-waarden binnen
- [ ] P2 · Meten op Shopify-omzet gedeeld door advertentie-uitgaven (MER) per week naast Meta-ROAS met attributie alleen klik
- [ ] P1 · Website Agent: uitzoeken welke app of welk blok extra AddToCart-events afvuurt (één paar, een 3-pack en een x2-pack los testen in Gebeurtenissen testen) en zorgen dat één klik op Toevoegen één event geeft
- [ ] P3 · Vanaf 01-12 Facebook Stories, rechterkolom, Marketplace, zoeken, notificaties en instream uitzetten (samen minder dan €10, geen resultaat)
- [ ] P2 · Brief aan Design voor Nooit meer: de video stopt mensen (12,3% kijkt) maar 4% kijkt door en er komt geen winkelwagen; product en prijs eerder in beeld
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

45+ klikt het vaakst (CTR 2,0 tot 2,2%) maar zet zelden iets in de winkelwagen. Statistisch sterk (z ≈ 4,7). Voorbehoud: dit zijn Meta-winkelwagens, die niet gelijklopen met Shopify (zie 6). Mannen krijgen 72% van het budget; vrouwen leveren per euro meer winkelwagens, maar dat verschil is ruis.

### 5. Creatives en vermoeidheid
- **Geen vermoeidheid.** Frequentie per advertentie maximaal 1,69, CTR per dag stabiel. Alleen "Wat houd je tegen" daalde van 2,55% naar 0,70%, maar op minder dan 15 klikken per dag en zonder hogere frequentie: niet significant.
- **Meta verdeelt het budget scheef.** Sinds alle advertenties live staan (23 tot 26-11): Founders rugby 40%, Wat houd je tegen 20%, Lifestyle voetbal 16%; vijf advertenties kregen samen €38,78 en zijn dus nooit echt getest.
- **Verschillen tussen advertenties zijn ruis.** Bij 27 winkelwagens en 2 aankopen zijn de intervallen per advertentie te breed. Lichte aanwijzingen: Founders rugby (7 winkelwagens, CTR 1,62%), Lifestyle voetbal versie C (6, €5,28), Wat houd je tegen (de enige met checkouts). Zwak: Checklist voetbal (CTR 0,78%) en Nooit meer (€28, 0 winkelwagens, CTR 1,19%).
- **Te weinig echte variatie.** De negen advertenties zijn drie concepten (lifestyle, founders-brief, product/checklist) in sportversies. Wat ontbreekt: een video die de grip laat zien, een directe vergelijking, het aanbod x2 en klantreviews.
- **Plaatsing.** Reels geven goedkope klikken (€0,91 tot €1,04) maar 3 winkelwagens op €95,46 en de laagste klik-naar-pagina (53 tot 56%). Instagram feed levert breed (10 winkelwagens). Instagram stories: 10 winkelwagens uit 17 paginaweergaven, opvallend veel; past bij dubbel getelde winkelwagens of toewijzing via weergave.

### 6. Tracking: Meta telt meer dan er is
| Bron | Sessies | Winkelwagens | Checkout | Aankopen |
|---|---|---|---|---|
| Meta, na een klik (7 dagen) | 185 paginaweergaven | 22 | 4 | 2 |
| Meta, na alleen zien (1 dag) | | 5 | 0 | 0 |
| Shopify (UTM, 20-11 t/m 27-11) | 173 | 7 sessies | 1 | 0 |
| GA4 (20-11 t/m 27-11) | 166 | 4 | 1 | 0 |

- Toewijzing via weergave verklaart maar 5 van de 27 winkelwagens (attributie per venster, opgehaald na de uitbreiding van de koppeling). Het grote gat (22 na een klik tegen 7 in Shopify) wijst op dubbel gemeten AddToCart-events of op bezoekers die Shopify niet aan de UTM koppelt (in-app browser). Gaat het om dubbele events, dan optimaliseert Meta op een opgeblazen signaal en ligt de werkelijke prijs per winkelwagen eerder rond €45 dan €12,66.
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
| Optimalisatie | Ja | Winkelwagen houden, eerst AddToCart-meting in Events Manager rechtzetten; naar aankoop vanaf ongeveer 25 tot 50 klikaankopen per week |
| Doelgroep | Ja, als test | Leeftijd 25 tot 54 hard, 7 dagen meten |
| Budget | Plafond ja, dagbudget nee | Plafond verhogen tot het einde van Performance Days; dagbudget pas verhogen (stappen van maximaal 20%) als er klikaankopen zijn |
| Advertenties | Deels | 5 tot 6 houden (Founders rugby, Lifestyle voetbal C, Wat houd je tegen, Vergelijking + aanbod x2 + grip-video); Checklist voetbal en Nooit meer eruit |
| Concepten en visuals | Ja | Elke week 2 echt nieuwe concepten; product groot, gripzones en prijs in beeld; 9:16-versies voor Reels en Stories |
| Vermoeidheid | Nee | Regel voor later: verversen bij frequentie boven 2,5 op 7 dagen plus CTR 20% onder het 14-daags gemiddelde |
| Pagina na de klik | Ja | Grootste hefboom; route via Website Agent (aparte CRO-taak) |

### 9. Aanvulling na uitbreiding van de koppeling (27-11, later op de dag)
- **Attributie per venster:** winkelwagens 22 na een klik (7 dagen) en 5 na alleen zien (1 dag); checkouts (4), aankopen (2) en paginaweergaven (185) allemaal na een klik. Dit corrigeert de eerdere aanname dat de meeste winkelwagens uit weergaven kwamen.
- **Wijzigingsgeschiedenis 26-11:** tussen 16:53 en 17:38 zijn 15 afbeeldingen toegevoegd en 14 bewerkt in de bibliotheek, en alle 9 advertenties bijgewerkt; daarna gingen 15 advertentieversies opnieuw van start. Nieuwe beelden in een lopende advertentie zijn een grote wijziging: de leerfase begon op 26-11 opnieuw.
- **Kwaliteitsrankings:** voor alle advertenties "onbekend" (Meta geeft ze pas bij meer vertoningen per advertentie).
- **Uitgaande klikken:** gelijk aan linkklikken (273 in 20 tot 26-11); unieke uitgaande klikken Founders rugby 64 van 70.
- **Video:** Founders rugby 56 videoweergaven van 3 seconden op 4.323 vertoningen (1,3%), 1 ThruPlay; de advertenties zijn vrijwel alleen beeld, dus hook rate is hier geen bruikbare maat.

### 10. Heranalyse met alle gegevens en aanbeveling (27-11, avond)
Opnieuw gedraaid met koppeling 1.1.0 (27 Meta-datasets), GA4 en Shopify, langs de vaste lijst in [[Agents Ads Agent]]. Door de Ads Agent opgesteld, door de hoofdsessie nagerekend.

**Wat er nieuw bij komt**
- **Uitgavenplafond:** €1.876,18 met €840,75 uitgegeven, dus €1.035 ruimte. Het plafond is op 27-11 verhoogd; stilvallen vóór 30-11 is geen risico meer.
- **Nooit rustig gedraaid:** grote wijzigingen op 20-11 (budget €20 naar €45, pauze en herstart), 22-11 (campagne hernoemd van een 3-pack-campagne, twee adsets en negen advertenties nieuw) en 26-11 (nieuwe beelden in alle advertenties). Geen enkele periode is een stabiele meting.
- **34% van de uitgaven (€117,86) zit op verwijderde advertenties**, met 7 van de 27 winkelwagens.
- **Winkelwagens komen in pieken:** 19 van de 27 op 23 en 25-11, 15 in twee uren (12:00 en 22:00). iPhone: 21 winkelwagens, 0 aankopen; Android: 6 winkelwagens, 2 aankopen. Samen met Shopify (6 sessies met winkelwagen tegen Meta 27) wijst dit op dubbel of herhaald gemeten AddToCart.
- **Leeftijd zwakker dan gedacht:** 6 van de 14 winkelwagens bij 25 tot 34 komen van één advertentie op €7,44 uitgaven (waarschijnlijk één of twee mensen). Alleen 45 tot 54 is redelijk aannemelijk zwak (1 winkelwagen op 60 klikken).
- **Video:** Nooit meer 12,3% hook rate (208 van 1.685), Wat houd je tegen 6,5%; ThruPlay onder 4% van de starts, gemiddeld 2 tot 3 seconden kijken. De rest is beeld.
- **Stories-succes is één advertentie:** Wat houd je tegen haalde 5 winkelwagens en beide aankopen op €5,61 in Instagram Stories; sinds 25-11 krijgt die advertentie bijna geen budget meer.
- **Rankings** onbekend (te weinig vertoningen), **leerfase-status** en **frequentieverdeling** geeft Meta niet terug.
- **GA4 07-11 t/m 27-11:** 179 sessies, 12 seconden actief per sessie, 4 winkelwagens, 0 aankopen; terugkerende bezoekers (12 sessies) leveren 3 van de 4 winkelwagens.
- **Concurrentie in het account:** naast deze campagne lopen de 3-pack-campagne (NL, €112 tot nu toe, ROAS 0,40) en sinds 27-11 een Black Friday-campagne op leads.

**Aanbeveling**
1. *Tot en met 30-11 (Performance Days):* niets aan deze campagne wijzigen (elke wijziging zet de leerfase weer op nul en er is net op 26-11 gereset), budget €45 per dag laten staan. Wel nu: in Events Manager AddToCart controleren (pixel én Conversions API, deduplicatie via event_id) en besluiten of drie campagnes tegelijk op NL moeten blijven bieden.
2. *01-12 tot 07-12:* AddToCart-meting laten rechtzetten (Website), dan één nieuwe CBO-adset breed NL met 4 tot 6 advertenties (Founders rugby, Wat houd je tegen, Lifestyle voetbal, Nooit meer en een nieuw concept), Checklist voetbal en Founders voetbal uit, kleine plaatsingen uit, €45 per dag, 7 dagen niet aanraken. Optimaliseren op winkelwagen houden.
3. *Daarna:* pas naar ongeveer €90 per dag (stappen van maximaal 20%) als Shopify echte aankopen vanuit Meta laat zien; elke week twee echt andere concepten (grip-video, vergelijking, aanbod, reviews), meten op Shopify-omzet gedeeld door uitgaven.
4. *Grootste hefboom blijft de pagina:* 179 sessies, 0 bestellingen. Break-even vraagt ongeveer 4% van de paginaweergaven naar aankoop bij een 3-pack (€1,85 per paginaweergave / €44,95). Dat is werk voor de Website Agent.

### 11. Events Manager-export AddToCart (pixel, 20 t/m 26-11)
Export uit Events Manager (27-11, aantallen per uur, browser tegen server, vóór ontdubbeling), naast Shopify-sessies met winkelwagen (hele site):
| Dag | Browser (pixel) | Server (CAPI) | Shopify-sessies met winkelwagen |
|---|---|---|---|
| 20-11 | 3 | 3 | 1 |
| 21-11 | 1 | 1 | 1 |
| 22-11 | 4 | 4 | 4 |
| 23-11 | 73 | 73 | 15 |
| 24-11 | 15 | 18 | 7 |
| 25-11 | 16 | 31 | 6 |
| 26-11 | 6 | 11 | 6 |
- Pixel en server sturen elk event allebei (normaal bij de Shopify-koppeling van Meta). Tot en met 23-11 precies 1 op 1, wat past bij werkende ontdubbeling: Meta rapporteerde voor de campagne 27 winkelwagens, niet honderden. Het ontdubbelingspercentage zelf staat niet in de export.
- **Meerdere events per winkelwagen-sessie:** 118 browser-events tegen 40 sessies met winkelwagen (ongeveer 3 per sessie), op 23-11 zelfs 73 tegen 15 (28 in één uur, 13:00). Vermoedelijk vuurt het toevoegen van een pack (bundelblok) een event per paar, of voegen mensen meerdere keren toe.
- **Sinds 24-11 extra events alleen via de server:** 23 meer dan via de pixel, vooral 25-11 tussen 20:00 en 23:00 (26 server tegen 11 browser). Dat valt samen met de winkelwagen-piek die Meta deze campagne op 25-11 rond 22:00 toerekende. Vermoedelijk voegt een app (Verdubbel-app met het gratis actiepaar, of de bundel-app) via de server regels toe, die Meta als winkelwagen telt zonder dat de bezoeker iets deed.
- Gevolg: Meta optimaliseert deze campagne op een winkelwagensignaal dat per echte winkelwagen 1 tot 5 keer telt en deels door apps ontstaat.

## Wat niet lukte
De GA4-koppeling (analytics-mcp) startte niet; GA4 is direct via de Data API met de service-account van de koppeling uitgelezen. Tijdens de analyse gaf de Meta-koppeling geen ThruPlay, hook rate, rankings of attributie per venster; de koppeling is daarna uitgebreid (zie 9). Leerfase-status geeft Meta voor deze adsets niet terug, ook niet na de uitbreiding. Ads-QA is overgeslagen (geen QA-agent voor het Ads-domein beschikbaar in deze sessie); de cijfers zijn wel tegen elkaar gelegd (Meta-dagsommen = totalen, GA4 en Shopify naast Meta). Stap B (research-sync) en publicatie van het dashboard overgeslagen: dat lukt alleen vanaf info@, deze sessie draait op het persoonlijke account.

## Bronnen
- Meta, alleen-lezen koppeling (meta_campaigns, meta_adsets, meta_ads, meta_insights met dag-, leeftijd-, geslacht-, plaatsing- en apparaatsplitsing, meta_account_info, meta_pixels), 07-11 t/m 26-11, peildatum 27-11-2026
- GA4-property www.higrip.nl (476032345), Data API, 20-11 t/m 27-11: sessionCampaignName, sessionSourceMedium, sessionManualAdContent, landingPage, deviceCategory, newVsReturning, eventName
- Shopify Analytics (ShopifyQL): sessions per utm_campaign en sales per order_referrer, 20-11 t/m 27-11
- Werkwijze bureaus: [Skaleit, post-Andromeda structuur](https://skaleit.agency/blog/post-andromeda-meta-ads-strategy-consolidated-adsets-43-roas/) · [SEM Dispatch, Andromeda en accountstructuur](https://semdispatch.com/paid-media/social-media-advertising/andromeda-account-structure-post-2025) · [Jetfuel, ABO en CBO voor DTC](https://jetfuel.agency/meta-ads-campaign-structure-in-2026-abo-vs-cbo-and-budget-architecture-for-dtc-brands/) · [Flighted, structuur kleine merken](https://www.flighted.co/blog/best-meta-ads-account-structure-for-small-brands) · [Jon Loomer, leerfase 10 of 50](https://www.jonloomer.com/learning-phase/) · [TheOptimizer, creative-vermoeidheid](https://theoptimizer.io/blog/meta-ads-creative-fatigue-how-to-detect-it-early-and-what-to-do-about-it) · [Madgicx, Meta creative burnout](https://madgicx.com/blog/meta-creative-burnout-prevention) · [Motion, creative metrics](https://motionapp.com/blog/key-creative-performance-metrics) · [WeltPixel, event bij weinig orders](https://weltpixel.com/blogs/news/which-event-should-a-low-volume-shopify-store-optimize-for)

## Aantekeningen
