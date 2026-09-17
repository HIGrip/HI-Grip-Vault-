---
id: 2026-09-15-growth-radar-basislijn
titel: "Growth Radar — Basislijn (nulmeting zes thema's)"
datum: 2026-09-15
bron: routine
routine: "growth-radar"
categorie: SEO
status: bekeken
prioriteit: P2
samenvatting: "Nulmeting over zes thema's: Google-updates 2026, AI-zoeken, structured data, conversie, social en funnel. Grootste kans: de eigen meetdata (1,17 / 95%) staan nergens in een vindbare, citeerbare pagina; grootste lek: 48% winkelwagenverlating door onverwachte verzendkosten bij het 1-pack van €14,99."
gerelateerd: [2026-09-15-growth-radar-seo-content, 2026-09-16-growth-radar-ai-search, 2026-09-15-seo-audit]
vervangt: []
bronbestand: "C:\\Users\\Test\\.claude\\research\\growth-radar\\rapporten\\2026-09-15-basislijn.md"
deadline: ""
---
# Growth Radar — Basislijn (nulmeting zes thema's)

## In het kort

Startmeting van de dagelijkse Growth Radar-routine; vult het `LEDGER.md` zodat dagelijkse runs niet dezelfde koppen herhalen. Zes secties met per sectie een "Voor higrip.nl"-vertaling. Let op: sectie 3 noemt AggregateRating als ontbrekend — de audit van dezelfde dag heeft juist een verzonnen `aggregateRating` verwijderd; de juiste volgorde (eerst reviewapp, dan schema) staat in de backlog.

## Bevindingen

**15 september 2026 · nulmeting over alle zes thema's**

Dit is de startmeting. Vanaf 16 september draait de routine dagelijks met één focus per dag. Deze basislijn vult het `LEDGER.md`, zodat de dagelijkse runs niet dezelfde koppen blijven herhalen.

---

### 1. Wat er in 2026 is veranderd aan Google

Google deed tussen februari en juni vijf bevestigde updates. Drie daarvan raken jou:

**Core update februari — alleen voor Discover.** Eerste keer dat Google een update uitsluitend op Discover richtte. Relevant als je blogcontent gaat bouwen: Discover wordt een apart kanaal met eigen regels, niet langer een bijproduct van je rankings.

**Brede core update 27 maart – 8 april.** Twaalf dagen uitrol, wereldwijd, alle branches. Het patroon is eenduidig: webshops met eigen materiaal — eigen testdata, echte klantinzichten, expertreviews — wonnen gemiddeld ~22% zichtbaarheid. AI-contentfarms verloren 60–80% van hun verkeer.

**Spamupdate juni.** Snelste in de geschiedenis van Google. Richt zich op schaalbare contentproductie, site reputation abuse en onnatuurlijke links.

> **Voor higrip.nl:** jouw voorsprong is dat je echte meetdata hebt — de 1.17 wrijvingscoëfficiënt, de 95%-claim. Dat is precies het type eigen materiaal dat deze updates belonen, en wat FitSockr, Tapedesign en Optigrip niet hebben. Maar die cijfers staan nu alleen in campagnesecties, niet in een vindbare, citeerbare pagina. Dat is het grootste onbenutte SEO-bezit dat je hebt.

---

### 2. AI-zoeken is geen zijspoor meer

De cijfers die ertoe doen:

| Meting | Waarde |
|---|---|
| Amerikanen die generatieve AI voor zoeken gebruiken (2026) | 31% |
| Shopping-vragen per dag in ChatGPT | ~50 miljoen |
| Conversie van LLM-verkeer | 5,53% |
| Conversie van regulier organisch verkeer | 3,7% |
| Aandeel AI-merkvermeldingen dat uit derden komt (reviews, community's) | ~85% |

Bezoekers die via een AI-assistent binnenkomen converteren dus ongeveer anderhalf keer zo goed als gewone zoekers. Ze arriveren met een aanbeveling in hun hoofd in plaats van een lijst met tien opties.

De belangrijkste nuance uit het onderzoek: dit is **80% strategisch, 20% technisch**. Schema toevoegen is niet genoeg. Waar het echt op draait is of je genoemd wordt op plekken waar de modellen lezen — vergelijkingsartikelen, fora, reviewsites.

> **Voor higrip.nl:** "wat zijn gripsokken" en "tapedesign alternatief" staan al in je keywordlijst. Dat zijn precies vraagvormige zoekopdrachten — het type dat in AI-antwoorden terechtkomt. Schrijf ze antwoord-eerst: de conclusie in de eerste twee zinnen, daarna pas de onderbouwing. Modellen lichten de opening eruit.

---

### 3. Structured data wordt hard afgedwongen

Twee concrete ontwikkelingen:

**Vanaf maart 2026** krijgen producten met afwijkende attributen onder één ID te maken met verwerkingsproblemen, minder zichtbaarheid of afkeuringen in Merchant Center. Jij hebt zes varianten (2 maten × 3 packs) onder één product — dit raakt je direct als je Merchant Center gebruikt of gaat gebruiken.

**Universal Commerce Protocol.** Google standaardiseert hoe productdata en checkout-mogelijkheden worden gedeeld met AI-agents. Gestructureerde productdata is de toegangseis. Er is ook een "Universal Cart" aangekondigd.

Eén technisch detail dat vaak fout gaat: structured data moet in de HTML staan die de server teruggeeft. Door JavaScript gegenereerde markup na het laden telt niet.

> **Voor higrip.nl:** je hebt `product-schema.liquid` al staan en die rendert server-side — goed. Wat ontbreekt is `AggregateRating`. Zonder dat krijg je geen sterren in Shopping-resultaten, terwijl je wel 4,8★ en 1.500+ sporters claimt.

---

### 4. Conversie: waar het geld weglekt

Benchmarks 2026:

| Meting | Waarde |
|---|---|
| Mediane Shopify-conversie | 1,4% |
| Bovenste 20% | 3,2% |
| Add-to-cart, gemiddeld | 8–10% |
| Add-to-cart, best-in-class | 12–15% |
| Verlaat winkelwagen na toevoegen | 60–70% |

Redenen voor winkelwagenverlating in Nederland: **onverwachte verzendkosten 48%**, verplicht account aanmaken 24%, te ingewikkeld checkout 18%.

Twee tactieken met het hardste bewijs:
- Een productvideo van 30–60 seconden: **+10 tot 30% conversie**, consistent.
- Algoritmische aanbevelingen in plaats van handmatige: **+15 tot 25%**.

Core Web Vitals-drempels: LCP ≤2,5s · INP ≤200ms · CLS ≤0,1.

> **Voor higrip.nl:** die 48% is jouw grootste enkele lek. Je hebt gratis verzending vanaf €30, maar je 1-pack kost €14,99 — een klant die één pack koopt loopt recht in de verrassing. Toon de drempel op de productpagina zelf ("nog €15,01 tot gratis verzending"), niet pas in de winkelwagen.

---

### 5. Social naar website: waar de conversie zit

| Kanaal | Conversie |
|---|---|
| TikTok Shop | 4,7% |
| Instagram Shopping | 2,1% |
| Facebook Shops | 1,8% |
| Livestream-sessies | 10–18% |
| Gemiddelde webshop | 2–3% |

Nederlandse context: **34% van de consumenten tussen 18 en 35** heeft minstens één aankoop via social media gedaan. Nederlandse retailers met livesessies rapporteren 10–15% conversie.

De rolverdeling die in 2026 werkt: **TikTok maakt de vonk, Instagram voedt het verlangen, YouTube bevestigt de aankoopbeslissing.**

Creator-samenwerkingen zijn verschoven van vaste vergoedingen naar prestatiegericht: open plan op 10–12% commissie om verkoopsnelheid en reviews op gang te krijgen, daarna gerichte plannen op 18–25% voor wie het echt doet.

> **Voor higrip.nl:** padel is visueel, kort en herhaalbaar — de slide-out op de baan, de sok die grip houdt. Dat is TikTok-materiaal. Je hebt met 876.000 NL-padellers een doelgroep die op één platform zit. Een open commissieplan met padel-creators is goedkoper dan advertenties en levert tegelijk de reviews op die je AI-zichtbaarheid voeden (zie punt 2 — 85% van AI-vermeldingen komt uit derde partijen).

---

### 6. Funnel en meten

De Meta-playbook is verschoven van `koud verkeer → retargeting → korting` naar `creatives filteren op intentie → geconsolideerd advertentie-account → retentie`.

Wat je technisch nodig hebt: **Conversions API (CAPI)**. Zonder server-side signalen krijgt Meta geen post-purchase data (retourpercentages, klantwaarde) en optimaliseert het algoritme op incomplete informatie. Dynamische remarketing levert bij volwassen DTC-merken 30–50% van de omzet.

Creatief testen: één variabele per test, 7–14 dagen minimum.

> **Voor higrip.nl:** je WK-keyvisual uit v7 is al als PNG exporteerbaar voor Meta-creatives. Dat is een gratis eerste testbatch.

---

### Bronnen

- [Imaginaire — Biggest Google Algorithm Updates 2026 for Ecommerce](https://www.imaginaire.co.uk/blog/the-biggest-google-algorithm-updates-so-far-in-2026/)
- [Eyeful Media — Google Algorithm Updates 2026](https://www.eyefulmedia.com/blog/2026-google-algorithm-updates)
- [Elogic — AI Search Visibility: Ecommerce GEO Guide](https://elogic.co/blog/ai-search-visibility-ecommerce/)
- [ALM Corp — AEO and GEO Playbook 2026 for Retailers](https://almcorp.com/blog/aeo-geo-playbook-retail-ai-search-2026/)
- [ALM Corp — Google Product ID Requirements 2026](https://almcorp.com/blog/google-product-id-requirements-2026/)
- [Google Search Central — Merchant Listing Structured Data](https://developers.google.com/search/docs/appearance/structured-data/merchant-listing)
- [Blend Commerce — Ecommerce Conversion Rate Benchmarks 2026](https://blendcommerce.com/blogs/shopify/ecommerce-conversion-rate-benchmarks-2026)
- [Shopify — Ecommerce Conversion Rate Benchmarks](https://www.shopify.com/blog/ecommerce-conversion-rate)
- [Digital Applied — TikTok Shop 2026 Social Commerce Guide](https://www.digitalapplied.com/blog/tiktok-shop-2026-social-commerce-guide)
- [Opklopper — Conversie Webshop Verhogen: benchmarks NL](https://opklopper.nl/blog/conversie-webshop-verhogen)
- [Providence IT — E-commerce Trends 2026 Nederland](https://providenceit.nl/kennisbank/ecommerce-trends-2026)
- [Stackmatix — Meta Ads Funnel Strategy 2026](https://www.stackmatix.com/blog/meta-ads-funnel-strategy)

## Acties

_Acties uit dit rapport staan in de growth-radar-backlog (`ACTIEBACKLOG.md`) en komen via het dashboard onder NU AANDACHT binnen — hier niet gedupliceerd._

## Bronnen

- Origineel: `C:\Users\Test\.claude\research\growth-radar\rapporten\2026-09-15-basislijn.md`
- Bronnen per bevinding: zie de lijst onderaan Bevindingen

## Aantekeningen
