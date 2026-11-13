---
id: 2026-11-13-growth-radar-social
titel: "Growth Radar — Social naar website: Meta's conversiemeting op klantapparaten"
kerntitel: "Meta's nieuwe conversiemeting bestaat echt, EU-uitsluiting nog onbevestigd"
datum: 2026-11-13
bron: routine
routine: growth-radar
categorie: Social
status: nieuw
prioriteit: P2
samenvatting: "Meta's Pixel-instelling 'Measure conversions on customer devices' bestaat echt (bevestigd via Meta's eigen Business Help Center) en zou sinds 12 november 2026 geleidelijk standaard aan gaan, maar meerdere onderling consistente ad-tech-bronnen melden dat ze niet actief is voor mensen in de EU en het VK — dat laatste kon niet rechtstreeks in Meta's eigen tekst gelezen worden. Relevant voor backlogpunt 10 (CAPI): als de EU-uitsluiting klopt, verandert dit niets aan de meting van de lopende NL-campagne, maar dat moet in Events Manager zelf gecontroleerd worden vóór Black Friday-cijfers binnenkomen."
gerelateerd: [2026-11-06-growth-radar-social, 2026-10-30-growth-radar-social, 2026-10-29-ads-funnel-en-snelheid-productpagina, 2026-11-06-meta-plan-minimaal-2-weken]
vervangt: []
bronbestand: ""
deadline: ""
---
# Growth Radar — Social naar website: Meta's conversiemeting op klantapparaten

> Map: [[Waar staat wat]]

## In het kort
Meta's pixelinstelling "Measure conversions on customer devices" is geen gerucht: Meta's eigen Business Help Center heeft er een pagina over. Of de gemelde EU/VK-uitsluiting en de datum van 12 november klopt, staat niet in de tekst die opgehaald kon worden (laadt via JavaScript) — wel steeds hetzelfde gemeld door meerdere onafhankelijke ad-tech-bronnen. Dit vervolgt het signaal dat op 6 november (via één Franse bron) nog is afgewezen.

## Bevindingen
### Meta: pixelinstelling "conversies op klantapparaten" — bestaat, details nog secundair
- **Bevestigd op de primaire bron:** `facebook.com/business/help/4237575203200036` bestaat en heeft als titel "About measuring conversions on customer devices" — Meta heeft dus zelf zo'n instelling. De volledige artikeltekst laadt via JavaScript en kon niet opgehaald worden.
- **Wat de instelling doet (secundair, consistent gemeld door PPC Land 27 okt, Stape 22 okt en Relevant Audience 28 okt):** koppelt een advertentievertoning aan een aankoop op het eigen apparaat van de klant, met gegevens die de klant al aan de winkel gaf (bijv. e-mailadres) plus tijdelijke, niet-identificerende apparaatgegevens. Werkt naast een bestaande pixel/CAPI-opzet, vervangt geen van beide. Vereist waarschijnlijk dat de checkout inloggen met e-mail of mobiel nummer vraagt — bij een gast-checkout zou de instelling dan niet gelden [CHECK voor higrip.nl].
- **Timing:** dezelfde bronnen melden dat Events Manager zelf 12 november 2026 als startdatum toont voor geleidelijke uitrol naar in aanmerking komende pixels, standaard aan. Geen van Meta's eigen pagina's bevestigt die datum in tekst die hier gelezen kon worden.
- **EU/VK-uitsluiting:** diezelfde bronnen melden dat Meta's hulptekst zegt dat de instelling "niet actief is voor mensen die zich in de EU en het VK bevinden". Niet op Meta's eigen tekst te verifiëren in deze run. Als dit klopt, raakt de wijziging een Nederlandse (EU-)campagne niet.
- **Opt-out:** gemeld als per-pixel aan/uit te zetten in Events Manager → Databronnen → pixel → Instellingen, onder de sectie Meta Pixel-instellingen.

> **Voor higrip.nl:** de lopende Meta-campagne (zie [[2026-11-06-meta-plan-minimaal-2-weken]]) optimaliseert op een klein budget met al broze meting (zie [[2026-10-29-ads-funnel-en-snelheid-productpagina]]: 0 conversies op het ingestelde event). Een instelling die na 12 november méér conversies telt dan voorheen zou, als ze wél actief is, de eerste resultaten vervuilen — juist in de dagen rond de dag-7/dag-14-beslispoorten uit het Meta-plan. Als de EU-uitsluiting klopt, is er niets te doen; zo niet, telt Meta vanaf nu mogelijk conversies mee die niet uit een advertentieklik komen.

**Actie:** zie backlogpunt 10 (CAPI) in de backlog, met deze bevinding als update: controleer de toggle "Measure conversions on customer devices" rechtstreeks in Events Manager in plaats van op secundaire bronnen te vertrouwen, vóórdat de dag-7/dag-14-cijfers van de lopende campagne beoordeeld worden.

### Gecontroleerd, niet opgenomen
- **CAPI/click-through-attributie algemeen:** geen novemberwijziging op een toegestane bron; alle vondsten herhalen de al bekende wijzigingen van januari/maart/april 2026.
- **Advantage+ creative:** geen update na de algemene beschikbaarheid van 6 oktober 2026 (al in het geheugen en backlogpunt 7).
- **TikTok for Business / TikTok Shop NL:** geen artikel met een novemberdatum; de nieuwste berichten blijven over de lancering van 15/30 juni 2026 gaan.
- **Shopify app-pixel-changelog:** geen entry met een novemberdatum over pixels; de novembersectie van de changelog gaat over POS-extensies en het uitfaseren van de Global Catalog REST API, niet relevant voor higrip.nl.
- **Paid-social-vakpers (Search Engine Land, Marketingfacts, Emerce, Twinkle, Thuiswinkel.org):** geen artikel met een novemberdatum over Meta- of TikTok-advertenties gevonden.

## Wat niet lukte
Meta's eigen Help Center-artikel (`facebook.com/business/help/4237575203200036`) rendert zijn tekst via JavaScript; alleen de paginatitel kon opgehaald worden, niet de volledige inhoud. Daardoor blijven de EU/VK-uitsluiting en de exacte 12-november-datum afhankelijk van onderling consistente, maar niet op de bronlijst van deze routine staande, ad-tech-bronnen (PPC Land, Stape, Relevant Audience) in plaats van Meta's eigen woorden.

## Bronnen
- [Meta Business Help Center — "About measuring conversions on customer devices"](https://www.facebook.com/business/help/4237575203200036) (titel bevestigd, volledige tekst niet opgehaald)
- [PPC Land, 27 okt 2026](https://ppc.land/meta-pixel-will-count-more-conversions-from-nov-12-unless-advertisers-opt-out/)
- [Stape, 22 okt 2026](https://stape.io/news/meta-on-device-conversion-measurement)
- [Relevant Audience, 28 okt 2026](https://www.relevantaudience.com/meta/meta-pixel-measure-conversions-on-customer-devices/)
- [Shopify changelog](https://changelog.shopify.com/), geraadpleegd 13 nov 2026 (geen novemberentry over pixels)

## Aantekeningen
