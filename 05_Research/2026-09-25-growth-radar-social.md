---
id: 2026-09-25-growth-radar-social
titel: "Growth Radar — Social naar website (Google-pixel op Optimized, geen Meta-pixel, Creator Hub)"
datum: 2026-09-25
bron: routine
routine: "growth-radar"
categorie: Social
status: nieuw
prioriteit: P1
samenvatting: "De Google & YouTube-pixel op higrip.nl (GA4 + Merchant Center, incl. purchase) staat op Shopify's Optimized-stand, waarin Shopify de datadeling stil mag pauzeren. Dat is een concrete kandidaat-oorzaak voor GA4 keyEvents = 0. Er draait geen Meta- of TikTok-pixel, dus bij een advertentiestart direct Always on + CAPI; Meta Creator Hub en Meta als AI-kanaal (alleen VS) zijn nog alleen iets om te volgen."
gerelateerd: [2026-09-03-analytics-kpi-meetgat, 2026-09-18-growth-radar-social, 2026-09-17-growth-radar-cro, 2026-09-23-growth-radar-ai-search]
vervangt: []
bronbestand: "C:\\Users\\Test\\.claude\\research\\growth-radar\\rapporten\\2026-09-25-social.md"
deadline: ""
---
# Growth Radar — Social naar website (Google-pixel op Optimized, geen Meta-pixel, Creator Hub)

## In het kort
De belangrijkste vondst van vandaag ligt niet op TikTok of Instagram. Hij zit in de eigen broncode van higrip.nl. De Google & YouTube-pixel, die GA4 én Merchant Center voedt met `purchase`, staat op Shopify's "Optimized"-stand. Shopify mag de datadeling van zo'n pixel dan stilletjes pauzeren. Dat is een concrete kandidaat-verklaring voor de `keyEvents = 0` die al sinds 15 september op P1 staat. Daarnaast staat er geen Meta- of TikTok-pixel op de site: social verkeer is nu alleen via GA4 zichtbaar. Meta bouwt verder aan creator-advertenties (Creator Marketing Hub, 17 sep) en is sinds 8 sep ook een AI-kanaal in Shopify, maar beide zijn voor nu alleen iets om te volgen.

## Bevindingen
### Je Google-pixel staat op "Optimized", en Shopify mag hem dan pauzeren

Op 13 januari 2026 veranderde Shopify de standaardinstelling voor marketing-app-pixels van "Always on" naar "Optimized". Die stand kijkt naar verkeer en verkoop. Ziet Shopify dagen of weken geen attributiesignalen, dan stopt de datadeling naar die pixel tot er weer signalen komen. Custom pixels en server-side koppelingen (Meta CAPI, GA4 Measurement Protocol, TikTok Events API) vallen erbuiten. Tot 29 juni 2026 liet zo'n pauze geen enkel spoor achter. Sinds die datum is er een activity log per app-pixel, met geschiedenis vanaf 3 juni 2026.

Vanochtend is de broncode van `/products/performance-gripsokken` gecontroleerd. De `webPixelsConfigList` bevat twee app-pixels, en beide hebben `"dataSharingState":"optimized"`:

| Pixel | Wat hij stuurt | Stand |
|---|---|---|
| Google & YouTube-app (`G-MP0982HHKM`, `GT-NCGVWN62`) | GA4-events incl. `purchase`, `begin_checkout`, `add_to_cart` + Merchant Center (`MC-8TZQW9T6Q7`) | optimized |
| Tweede app-pixel (account `raqds3-tb`, de shop-ID) | analytics + marketing | optimized |

Een Meta-pixel of TikTok-pixel is nergens te vinden. Er komt geen `fbq`, geen `connect.facebook.net` en geen `analytics.tiktok.com` in de pagina voor.

> **Voor higrip.nl:** Het P1-punt "GA4 key event voor `purchase` staat nog steeds uit" en P1-punt 11 (trackingscripts na Checkout Extensibility) zoeken allebei naar de reden dat GA4 al weken nul conversies toont. De Optimized-stand is een derde, heel concrete kandidaat. Tijdens een stille periode kan Shopify de Google-pixel gepauzeerd hebben, en dan komen er geen `purchase`-events meer binnen. Zonder events is er ook niets om als key event te markeren. Dezelfde pixel levert conversies aan Merchant Center, dus backlogpunt 4 (feed en AI Mode-shopping) hangt er ook aan. Of de pixel echt gepauzeerd is geweest, zie je alleen in de activity log. Het past bij de notitie over het meetgat van 3 september: nul `purchase`-events in de volledige GA4-historie, en 43% van de sessies als "Direct". Dat laatste is vrijwel zeker social verkeer zonder UTM-tags.

**Actie:** Instellingen → Klantgebeurtenissen → App-pixels: activity log van de Google & YouTube-pixel bekijken en de stand op "Always on" zetten. Toegevoegd aan P1-punt 11, als eerste controle.

---

### Geen Meta- of TikTok-pixel: social verkeer is alleen via GA4 zichtbaar

Omdat er geen Meta- of TikTok-pixel draait, weet higrip.nl van bezoekers uit Instagram, TikTok of creatorlinks alleen wat GA4 via de referrer of UTM-tags opvangt. Voor organische social is dat genoeg, zolang links in bio's en creatorposts UTM-tags hebben. Voor betaalde social is het niet genoeg.

De Optimized-stand is juist voor een nieuwe pixel riskant. Een Meta-pixel die je installeert vóór de eerste campagne loopt, ziet dagen of weken geen advertentiesignalen. Dat is precies het profiel dat Shopify pauzeert. Meta heeft sinds 15 april 2026 ook een one-click Conversions API in Events Manager, en verrijkt pixel-events automatisch met product- en paginadata. Die verrijking stond na ~30 dagen standaard aan.

> **Voor higrip.nl:** Dit scherpt P3-punt 10 (CAPI instellen) aan. Als de advertentiebeslissing valt, installeer je de Meta-app, zet je de pixel meteen op "Always on" en koppel je CAPI vanaf dag 1. Anders kan de pixel gepauzeerd zijn precies op het moment dat de eerste campagne start. Hetzelfde geldt voor een TikTok-pixel als punt 13 (TikTok Shop) doorgaat.

**Actie:** Punt 10 in de backlog bijgewerkt. Verder alleen volgen, want er lopen geen advertenties.

---

### Meta Creator Marketing Hub: creatorposts worden met één klik advertenties

Marketing Dive meldde op 17 september 2026 dat Meta Creator Marketplace en Partnership Ads Hub samenvoegt tot één Creator Marketing Hub. Die rolt wereldwijd uit tot het einde van 2026. Nieuw daarin:
- zoekfilters die creators tonen die producten zoals het jouwe al laten zien
- contentrechten per post met een vervaldatum
- bewerkingstools die auteursrechtelijk beschermde muziek en stickers verwijderen, zodat een post als advertentie kan draaien
- advertenties aanmaken met één klik vanuit de Hub

Instagram voegt vanaf 29 september ook live-video-advertenties toe. Meta heeft geen prestatiecijfers voor partnership ads gepubliceerd.

> **Voor higrip.nl:** P3-punt 9 (padel-creators op commissiebasis) gaat nu uit van twee routes: doorklik naar higrip.nl, of TikTok Shop. Met de Hub komt er een derde bij. Een goed presterende creatorpost van een padelspeler wordt dan, met diens toestemming, een partnership ad vanaf het HÏ Grip-account, gericht op de productpagina. Dat werkt pas met punt 10 (pixel + CAPI) op orde. Het zoekfilter kan wel nu al helpen om Nederlandse padel-creators te vinden die gripsokken of padelschoenen laten zien.

**Actie:** Alleen volgen — nog niet handelen. Kort genoteerd bij punt 9.

---

### Meta is sinds 8 september een AI-kanaal in Shopify, maar alleen in de VS

Volgens de Shopify-changelog staat Meta sinds 8 september 2026 tussen de AI-kanalen in Agentic Storefronts. Dat viel samen met de VS-lancering van Meta's persoonlijke AI-agent Muse. Producten worden standaard via Shopify Catalog met Meta gedeeld. Uitzetten kan via Verkoopkanalen → Agentic.

> **Voor higrip.nl:** Dit hoort bij de bestaande VS-check in P2-punt 8. Daar staan ChatGPT en Copilot al, nu komt Meta erbij. Voor NL-kopers verandert er niets. Wel handig: bij de 5-minutencheck van Agentic zie je Meta nu ook in de lijst.

**Actie:** Alleen volgen. Punt 8 met één regel aangevuld.

---

### Gecontroleerd, niet opgenomen
- **Meta Andromeda / creatieve diversiteit** (8–12 echt verschillende concepten per campagne): er lopen geen advertenties, en het is vooral creatie-advies zonder nieuwe primaire bron. Dat hoort bij de zaterdagfocus.
- **Instagram shoppable Reels-links** (tot 30 productlinks per Reel): nog niet live in Nederland (VS, Brazilië, India, Indonesië, Thailand).

## Acties
Geen nieuwe acties. Alle vervolgstappen zijn verwerkt in bestaande backlogpunten 11 (pixel op Always on, begin hier), 10, 9 en 8.

## Bronnen
- [New default setting for marketing pixel data sharing — Shopify Changelog (13 jan 2026)](https://changelog.shopify.com/posts/new-default-setting-for-pixel-data-sharing)
- [App pixels — Shopify Help Center](https://help.shopify.com/en/manual/promoting-marketing/pixels/app-pixels)
- [Shopify App Pixel Activity Log — WeltPixel](https://weltpixel.com/blogs/news/shopify-app-pixel-activity-log-what-it-records-and-how-to-use-it)
- [Meta Changed How Conversions Are Counted in 2026 — WeltPixel](https://weltpixel.com/blogs/news/meta-changed-how-conversions-are-counted-in-2026-what-shopify-merchants-should-know)
- [Meta streamlines creator, brand tie-ups with new marketing hub — Marketing Dive (17 sep 2026)](https://www.marketingdive.com/news/meta-streamlines-creator-brand-tie-ups-with-new-marketing-hub/830593/)
- [Meta is now an AI channel in your admin — Shopify Changelog (8 sep 2026)](https://changelog.shopify.com/posts/meta-is-now-an-ai-channel-in-your-admin)
- Eigen controle: broncode `https://www.higrip.nl/products/performance-gripsokken`, 25 sep 2026 (`webPixelsConfigList`)

## Aantekeningen
