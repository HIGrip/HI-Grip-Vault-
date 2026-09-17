---
id: 2026-09-16-growth-radar-ai-search
titel: "Growth Radar — AI-search (checkout in AI is dood, feed is de ingang)"
datum: 2026-09-16
bron: routine
routine: "growth-radar"
categorie: SEO
status: bekeken
prioriteit: P2
samenvatting: "ChatGPT's Instant Checkout is gestopt (3× slechtere conversie dan doorklik bij Walmart): \"ontdekken in AI, kopen op eigen site\" wint. Schema alleen verhoogt AI-citaties niet, concrete cijfers in de tekst wel; de Merchant Center-feed wordt ook de ingang voor Google AI Mode; Perplexity Merchant Program alleen bij VS-verzending."
gerelateerd: [2026-09-15-growth-radar-basislijn, 2026-09-15-growth-radar-seo-content, 2026-09-15-seo-audit, 2026-09-16-seo-onderzoek-cloud-routine-website]
vervangt: []
bronbestand: "C:\\Users\\Test\\.claude\\research\\growth-radar\\rapporten\\2026-09-16-ai-search.md"
deadline: ""
---
# Growth Radar — AI-search (checkout in AI is dood, feed is de ingang)

## In het kort

Vier bevindingen die vooral bestaande prioriteiten bevestigen: bewijspagina, gratis-verzendingsdrempel, productvideo en variant-ID's (verplaatst naar P1). Eén open vraag: verzendt higrip.nl naar de VS?

## Bevindingen

**16 september 2026 · woensdag**

### In het kort
Het grootste nieuws is dat ChatGPT's native checkout dood is: OpenAI stopte Instant Checkout in maart 2026 nadat het bij Walmart drie keer slechter converteerde dan een gewone doorklik. Het model dat wint is "ontdekken in AI, kopen op je eigen site" — dat bevestigt de bestaande backlogprioriteiten in plaats van nieuwe te creëren. Daarnaast is er een concreet gratis kanaal (Perplexity Merchant Program) dat mogelijk niet inzetbaar is zolang HÏ Grip niet naar de VS verzendt.

---

### ChatGPT's native checkout is gestopt — "ontdekken in AI, kopen op je eigen site" wint
OpenAI lanceerde Instant Checkout op 29 september 2025, eerst met Etsy en daarna met Shopify-merken als Glossier, Vuori en Spanx. In maart 2026 werd de functie alweer stopgezet. Walmart mat dat checkout binnen ChatGPT ongeveer drie keer slechter converteerde dan doorklikken naar de eigen site — ook al leverde ChatGPT wel ongeveer twee keer zoveel nieuwe klanten op als reguliere zoekopdrachten.

Het model dat nu standaard is: AI-assistenten (ChatGPT, Google AI Mode, Perplexity) doen de productontdekking en aanbeveling, maar de daadwerkelijke aankoop gebeurt op de eigen webshop van de retailer. De onderliggende protocollen (ACP van Stripe/OpenAI, UCP van Shopify/Google) faciliteren vooral productdata-uitwisseling voor die aanbevelingen, niet een volledige in-chat kassa.

> **Voor higrip.nl:** Dit betekent dat je geen tijd hoeft te steken in een native AI-checkout-integratie. De winst zit op twee plekken die al in je backlog staan: geciteerd worden in het AI-gesprek (backlogpunt 4, bewijspagina) én een productpagina die converteert zodra iemand doorklikt vanuit ChatGPT of Gemini (backlogpunt 1, gratis-verzendingsdrempel, en punt 6, productvideo). Deze vondst verhoogt het belang van die punten, ze zijn niet langer "aardig om te hebben" maar de kern van je AI-zichtbaarheidsstrategie.

**Actie:** Alleen volgen — geen nieuwe actie, wel prioriteitsbevestiging voor bestaande punten 1, 4 en 6.

---

### Schema-markup verhoogt AI-citaties zelf niet — specifieke cijfers en attribuutrijke data wel
Ahrefs volgde 1.885 pagina's die tussen augustus 2025 en maart 2026 JSON-LD-schema toevoegden en vond geen betekenisvolle stijging in citaties door Google AI Overviews, AI Mode of ChatGPT. Belangrijke kanttekening: de onderzochte pagina's hadden vooraf al 100+ AI Overview-citaties, dus de conclusie geldt vooral voor pagina's die al zichtbaar zijn — niet per se voor een pagina die nog moet doorbreken.

Wel bleek dat attribuutrijke schema — met ingevulde prijs, rating, specificaties — de citatiekans voor domeinen met lager gezag bijna verdubbelt, terwijl generieke schema niets doet. De sterkste hefboom blijft je organische positie zelf, gevolgd door het toevoegen van citeerbare bronnen, concrete cijfers en naam-en-toenaam-citaten in de tekst.

> **Voor higrip.nl:** Dit onderbouwt met data waarom de volgorde in je backlog klopt: eerst echte reviews zichtbaar maken en dan pas `aggregateRating` vullen (punt 2), en een bewijspagina bouwen rond je eigen meetdata (punt 4). Niet het schema zelf overtuigt AI-modellen — de concrete cijfers erachter (1.17 wrijvingscoëfficiënt, 95% meer grip) doen dat, mits ze leesbaar in de tekst staan én, zodra je reviews live zijn, volledig ingevuld zijn in het schema.

**Actie:** Geen nieuwe actie — bevestigt bestaande prioriteit van punt 2 en 4. Zorg dat het `aggregateRating`-schema straks volledig ingevuld is (rating, aantal, geen lege velden) zodra de reviewapp staat.

---

### Google Merchant Center wordt ook de ingang voor AI Mode-shopping, niet alleen voor Shopping-ads
Op NRF 2026 kondigde Google vier AI-shoppingfuncties aan die allemaal op Merchant Center-feeddata leunen: Universal Commerce Protocol, Native Checkout, Business Agent en Direct Offers. Universal Cart laat gebruikers producten toevoegen vanuit Search, Gemini, YouTube of Gmail — weer gevoed door dezelfde productfeed. Eerste deelnemers zijn onder meer geselecteerde Shopify-winkels.

> **Voor higrip.nl:** Backlogpunt 7 (variant-ID's controleren tegen de Merchant Center-eis van maart 2026) stond er al vanuit feed-compliance, maar diezelfde feed is nu ook de poort naar zichtbaarheid in Google's AI Mode-shoppinglaag. Eén foutieve of ontbrekende variant-ID kost je dus niet alleen een Shopping-ad, maar ook een aanbeveling in AI Mode.

**Actie:** Punt 7 verplaatst van P2 naar P1 — zie bijgewerkte backlog.

---

### Perplexity's Merchant Program is gratis voor Shopify — mits je naar de VS verzendt
Perplexity's Merchant Program kost niets: geen listingkosten, geen commissie. Shopify-winkels in de VS krijgen automatische productsynchronisatie zonder aparte aanmelding. "Buy with Pro" is een one-click checkout voor Perplexity Pro-gebruikers met gratis verzending — betaald door Perplexity, niet door de verkoper. Perplexity meldt 45 miljoen maandelijkse gebruikers en een vijfvoudige stijging in shopping-intentie-zoekopdrachten sinds de functie verder open ging dan alleen Pro-gebruikers.

De voorwaarde is scherp: bedrijven moeten verkopen én verzenden naar de VS om in aanmerking te komen.

> **Voor higrip.nl:** Onbekend of higrip.nl momenteel naar de VS verzendt — dat is nu de enige vraag die bepaalt of dit kanaal open staat. Zo niet, dan is dit een kanaal om te volgen voor het moment dat internationale verzending een overweging wordt, niet iets om nu op te bouwen.

**Actie:** Controleer of higrip.nl naar de VS verzendt. Zo ja: gratis aanmelden bij het Perplexity Merchant Program. Zo nee: alleen volgen — nieuw backlogpunt toegevoegd onder voorbehoud.

---

### Bronnen
- [Why AI Checkout Stalled: Discover in AI, Buy on Site](https://www.digitalapplied.com/blog/ai-agentic-commerce-discover-in-ai-buy-on-site-2026)
- [Stripe powers Instant Checkout in ChatGPT and releases Agentic Commerce Protocol](https://stripe.com/newsroom/news/stripe-openai-instant-checkout)
- [We Tracked 1,885 Pages Adding Schema. AI Citations Barely Moved. — Ahrefs](https://ahrefs.com/blog/schema-ai-citations/)
- [Does Schema Markup Predict AI Citation? — SSRN](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6284518)
- [Google's AI Shopping Announcements: What They Mean — Brainlabs](https://www.brainlabsdigital.com/google-2026-ai-shopping-announcements-explained/)
- [Google unveils shopping ads in AI Mode — ppc.land](https://ppc.land/google-unveils-shopping-ads-in-ai-mode-doubling-down-on-conversational-commerce/)
- [Perplexity Shopping: How to Optimize Your Store for AI — Shopify](https://www.shopify.com/blog/perplexity-shopping)
- [Perplexity Merchant Program: What Most Sellers Miss (2026)](https://alhena.ai/blog/perplexity-shopping-merchants-setup-guide/)

## Acties

_Acties uit dit rapport staan in de growth-radar-backlog (`ACTIEBACKLOG.md`) en komen via het dashboard onder NU AANDACHT binnen — hier niet gedupliceerd._

## Bronnen

- Origineel: `C:\Users\Test\.claude\research\growth-radar\rapporten\2026-09-16-ai-search.md`

## Aantekeningen
