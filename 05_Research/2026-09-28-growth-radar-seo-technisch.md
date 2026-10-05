---
id: 2026-09-28-growth-radar-seo-technisch
titel: "Growth Radar — SEO Technisch (28 september 2026)"
kerntitel: "Content API voor Shopping geeft al 410-fouten — Merchant API-migratie checken"
datum: 2026-09-28
bron: routine
routine: "growth-radar"
categorie: SEO
status: nieuw
prioriteit: P1
samenvatting: "Google's oude Content API for Shopping (die de Merchant Center-feed voedt) geeft sinds 1 september 2026 al progressieve 410-fouten voor wie niet is overgezet naar de nieuwe Merchant API, met volledige uitschakeling begin 2027 — en dat loopt via dezelfde Google & YouTube-app die op higrip.nl al op de riskante Optimized-stand staat. Daarnaast twee kleinere signalen om te volgen: een normale Google-spamupdate (24 sep, ~2 weken rollout) en een nieuw multimodaal filter in Search Console voor zoekopdrachten via afbeeldingen, Lens en Circle to Search."
gerelateerd: [2026-09-21-growth-radar-seo-technisch, 2026-09-25-growth-radar-social, 2026-09-16-growth-radar-ai-search, 2026-10-05-growth-radar-seo-technisch]
vervangt: []
bronbestand: ""
deadline: ""
---
# Growth Radar — SEO Technisch (28 september 2026)

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[Waar staat wat]] · [[Home]]

## In het kort
De belangrijkste vondst van vandaag raakt niet de site zelf, maar de leidingen eronder: Google's oude Content API for Shopping — de weg waarlangs Shopify je Merchant Center-feed vult — geeft sinds 1 september 2026 al progressieve fouten voor wie nog niet is overgezet naar de nieuwe Merchant API, met volledige uitschakeling begin 2027. Dat loopt via dezelfde Google & YouTube-app die vorige week al op de riskante "Optimized"-pixelstand bleek te staan. Daarnaast twee kleinere ontwikkelingen om te volgen, geen van beide met eigen actie nu: een normale Google-spamupdate en een nieuw multimodaal filter in Search Console.

## Acties
_Geen nieuwe backlogpunten vandaag. Eén bestaand P1-punt (4) is bijgewerkt met een extra controlepunt — niet hier herhaald._

## Bevindingen

### 1. Content API for Shopping faalt al sinds 1 september; Merchant API-migratie is de kern van backlogpunt 4

Google's Content API for Shopping — de klassieke weg waarlangs productdata in Merchant Center terechtkomt — is per 18 augustus 2026 vervangen door de nieuwe Merchant API. Sinds 1 september 2026 geven aanvragen zonder goedgekeurde uitzondering al periodiek een HTTP 410-fout, en Google heeft de volledige uitfasering van alle endpoints voor begin 2027 aangekondigd. Voor winkels die hun feed via een custom integratie, een oudere feed-app of een script laten lopen, moet die koppeling nu over naar de Merchant API of de datastroom stopt. Wie handmatig of via een Google Sheet uploadt, is niet geraakt.

Voor winkels die het native Shopify "Google & YouTube"-kanaal gebruiken — zoals higrip.nl — loopt de migratie via een gefaseerde uitrol van diezelfde app, die al bezig is. Een concreet aandachtspunt daarbij: product-ID's kunnen tijdens de migratie wijzigen, wat een lopende Shopping-ads-opzet kan raken.

> **Voor higrip.nl:** Dit is dezelfde Google & YouTube-app (`MC-8TZQW9T6Q7`, account `raqds3-tb`) die de Growth Radar van 25 september al op de "Optimized"-pixelstand aantrof — een stand waarin Shopify de datadeling zelf al kan pauzeren. Een migratieprobleem boven op een gepauzeerde pixel zou de Merchant Center-feed dubbel kunnen raken: geen productdata én geen conversiesignaal. Backlogpunt 4 (variant-ID's tegen de Merchant Center-eis) gaat al over deze feed en is de logische plek om dit erbij te controleren, niet een nieuw punt.

**Actie:** Backlogpunt 4 bijgewerkt met een extra controlepunt: nagaan of de migratie van de Google & YouTube-app naar de Merchant API is voltooid, en of product-ID's daarbij zijn gewijzigd.

### 2. Google's september-spamupdate: normale update, geen nieuw beleid — alleen volgen

Google rolde op 24 september 2026 om 9:15 uur Pacific-tijd de "September 2026 spam update" uit, wereldwijd en in alle talen, met een verwachte rolloutduur tot twee weken (langer dan de drie eerdere spamupdates van dit jaar). Google noemt het expliciet een normale update: geen nieuwe spambeleidsregels, en niet gericht op linkspam specifiek.

> **Voor higrip.nl:** Geen enkele eerdere melding over spamgerelateerde risico's op de site. Een normale update zonder nieuw beleid raakt in de praktijk vrijwel nooit een compliant webshop.

**Actie:** Alleen volgen — nog niet handelen. Pas relevant als de Search Console & rankings-routine na afronding van de rollout (rond 8 oktober) een ongewone positieverandering signaleert; dat is niet iets wat Growth Radar zelf controleert.

### 3. Search Console: nieuw multimodaal filter voor zoekopdrachten via afbeeldingen, Lens en Circle to Search

Samen met de spamupdate voegde Google Search Console een multimodaal filter toe waarmee je zoekopdrachten via afbeeldingen, Google Lens en Circle to Search apart kunt bekijken, met data vanaf 10 september 2026.

> **Voor higrip.nl:** Een nieuwe, gratis dimensie in bestaande Search Console-data — geen eigen actie voor Growth Radar, maar wel een filter dat de moeite waard is om mee te nemen zodra de kernwoorden-analyse (Search Console & rankings, woensdag) weer draait, gezien de productfoto's al ruim aan de Merchant Center-beeldeisen voldoen.

**Actie:** Alleen volgen — geen eigen sitecheck, dat hoort bij de Search Console & rankings-routine.

## Wat niet lukte
Stap B (dashboard → vault via `ArtifactData`) gaf dezelfde foutmelding als bij de weekonderhoud-run van 27 september: "shared with you from another organization" — geen db-toegang voor deze cloudsessie op de `status`-collectie. Niet opnieuw geprobeerd voor de overige zes collecties, om dezelfde fout niet zes keer te herhalen. Build en publish zijn gedaan vanuit de bestaande vaultstand.

## Bronnen
- [Migrate from Content API for Shopping to Merchant API — Google for Developers](https://developers.google.com/merchant/api/guides/compatibility/overview)
- [Google's Content API Shuts Down August 18: What Shopify Merchants Actually Need to Check — Simple Product Feeds](https://www.simpleproductfeeds.com/blog/content-api-for-shopping-sunset-shopify)
- [Shopify Merchant Google & YouTube API Migration — Channable](https://www.channable.com/blog/shopify-google-youtube-app-migration)
- [Google September 2026 Spam Update Is Rolling Out — Search Engine Roundtable](https://www.seroundtable.com/google-september-2026-spam-update-42163.html)
- [Google Releases September 2026 Spam Update — Search Engine Watch](https://searchenginewatch.com/google-releases-september-2026-spam-update/)

## Aantekeningen
