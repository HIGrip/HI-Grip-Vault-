---
id: "2026-11-04-ads-resultaten-verbeteringen"
titel: "Ads-resultaten tot nu toe en wat beter kan"
kerntitel: "Meta-test gaf 288 klikken en 0 verkopen: eerst funnel en meetsignaal, dan pas creatives"
datum: "2026-11-04"
bron: "los"
routine: ""
categorie: "Social"
status: "nieuw"
prioriteit: "P1"
samenvatting: "De enige advertentie-uitkomst die in de vault staat, is de Meta A/B-test van €70: 288 linkklikken, 116 landingspaginaweergaven, 5 add-to-carts en 0 verkopen. De grootste winst zit niet in andere advertenties maar in drie dingen eromheen: de pagina sneller laden, de campagne op een event laten optimaliseren dat wél voorkomt, en de test beoordelen op meer dan CTR. Let op: dit rapport is gebaseerd op de notities in de vault; er is geen toegang tot Ads Manager, dus uitgaven, CPM, CTR en kosten per resultaat zijn niet gezien."
gerelateerd: [2026-10-29-ads-funnel-en-snelheid-productpagina, 2026-10-25-ab-test-ads-features-vs-beste, 2026-10-25-ads-onderzoek-bewezen-grip-sock-ads, 2026-11-02-weekoverzicht, 2026-10-30-ads-agent-onderzoek, 2026-11-05-performance-days-marketingplan, 2026-11-05-meta-opbouw-statische-ads-voetbal-en-rugby, 2026-11-05-meta-plan-35-euro-per-dag]
vervangt: []
bronbestand: ""
deadline: ""
---
# Ads-resultaten tot nu toe en wat beter kan

> Map: [[Waar staat wat]]

## In het kort
De Meta-test is de enige advertentie-uitkomst die in de vault staat. Het resultaat is nog geen oordeel over de advertenties zelf, want de test had drie obstakels: een trage landingspagina, een optimalisatie-event zonder resultaten en een te klein budget om te leren. De uitslag zegt dus vooral iets over de funnel.

**Wat dit rapport niet is:** een analyse van Ads Manager. Uitgaven, bereik, CPM, CTR per ad, kosten per klik en per resultaat staan niet in de vault. De Ads Agent is aangemaakt maar niet geactiveerd en heeft geen koppeling. Alle conclusies hieronder volgen uit de funnel-getallen die Lars of Timo uit Ads Manager hebben overgenomen, en moeten met een echte export worden bevestigd.

## Kerncijfers
- **288** · Linkklikken uit de A/B-test (Meta)
- **116** · Landingspaginaweergaven · 40% van de klikken
- **5** · Toevoegingen aan winkelwagen · 4,3% van de landingspaginaweergaven
- **0** · Verkopen uit de test

## Acties
- [ ] P1 · Besluit: stuur een Ads Manager-export (per ad: uitgaven, vertoningen, bereik, CTR, kosten per linkklik, landingspaginaweergaven, add-to-carts) naar Denzel, zodat dit rapport met echte kosten wordt aangevuld
- [ ] P1 · Voor elke volgende campagne een vaste startcontrole: pagina-LCP op mobiel onder 3 s gemeten, event-test in Events Manager, UTM-check in GA4 (twee minuten werk, voorkomt weer een test op een trage pagina)
- [ ] P1 · Beoordeel de volgende test op een vaste trechter: kosten per landingspaginaweergave, aandeel add-to-cart, kosten per add-to-cart, niet op CTR alleen
- [ ] P2 · Maak één 9:16-video in UGC-stijl rond de sceptische sporter als nieuwe hoek (alle 8 testadvertenties waren statisch)
- [ ] P2 · Leg per advertentie de sport en de belofte vast in de advertentienaam (bijvoorbeeld padel_feature_4x5), zodat de UTM-content in GA4 direct leesbaar is
- [ ] P2 · Controleer of de Conversions API sinds de start van de campagne actief is en dedupliceert met de pixel; leg de uitkomst vast in de vault
- [ ] P3 · Zet een vaste wekelijkse leesronde op de Meta-cijfers (15 minuten, vaste kolommen) tot de Ads Agent is geactiveerd

## Bevindingen
### 1. Het grootste verlies zit vóór de pagina
Van 288 klikken zijn 116 een landingspaginaweergave (40%). 60% van het betaalde verkeer verdwijnt dus tijdens het laden. Op mobiel gaf de live productpagina een Lighthouse-score van 35–38 en een hoofdfoto na 5–8 s (zie [[2026-10-29-ads-funnel-en-snelheid-productpagina]]). Elke euro die je in advertenties steekt, betaalt voor klikken waarvan 6 op de 10 nooit iets zien. De snelheidsfix is daarmee de beste "advertentie-optimalisatie" die er nu is, en weegt zwaarder dan elke nieuwe creative. De fix staat in het testthema; zolang die niet live is, koop je klikken op de trage pagina.

Voorbehoud: een verschil tussen klikken en landingspaginaweergaven kan ook komen door dubbele of per ongeluk klikken en de in-app-browser van Instagram. Snelheid is de meest waarschijnlijke oorzaak, niet de enige bewezen.

### 2. De campagne leerde van een event zonder resultaten
De campagne optimaliseerde op "Betaalproces starten" en dat had 0 resultaten. Meta kan dan niet bijsturen en toont de advertenties tot het budget op is zonder te leren wie waarschijnlijk koopt. De geplande overstap naar "Content bekijken" is een goede eerste stap, maar levert vooral veel goedkope bezoekers op. Als de pagina sneller is en er per week genoeg add-to-carts zijn, is "Toevoegen aan winkelwagen" het logischere doel, omdat het dichter bij een aankoop zit. Dat vraagt een volume dat nu (5 in de test) nog ver ontbreekt; begin dus met Content bekijken en schuif door zodra het signaal er is.

### 3. Het budget is te klein om te leren, dus beperk de opzet
De test draaide 2 advertenties van €5 per dag. De leerdrempel van Meta ligt rond 50 conversies per week per ad set; daar zit dit ver onder, en onder die drempel wordt een aankoop volgens Meta ongeveer 28% duurder (zie [[ACTIEBACKLOG]], update 30 okt). Praktisch: liever één campagne met één of twee ad sets en een iets hoger dagbudget dan veel sets met te weinig budget. Een rekenregel uit de backlog: weekbudget gedeeld door (kosten per resultaat × 50) = het aantal ad sets dat het budget boven de leerdrempel houdt. Bij een klein budget komt dat uit op één.

### 4. Beoordeel een test op meer dan CTR
De A/B-test ging over CTR: concrete features tegen "de beste gripsok". Twee beperkingen uit [[2026-10-25-ab-test-ads-features-vs-beste]] blijven staan:
- Bij 3.000 vertoningen per variant is het verschil tussen 1,0% en 1,5% CTR statistisch nog niet zeker; reken op ongeveer 3.800 per variant.
- Een advertentie die meer klikt, hoeft niet beter te verkopen. Specifieke tekst haalt soms minder klikken maar betere kopers.
Met 288 klikken in totaal over de hele test zijn er te weinig gegevens om een winnaar aan te wijzen. Lees de uitkomst als richting, en meet voortaan ook kosten per landingspaginaweergave en per add-to-cart.

### 5. De claim "de beste gripsok" niet opschalen
Variant A van elk paar gebruikt een superlatief die niet te onderbouwen is. Dat mag in een test, maar als hij beter scoort, vervang hem dan in de opvolger door een onderbouwde claim uit [[Feiten & Actuele Staat]] (met de bron erbij, zoals Trustpilot bij de beoordeling).

### 6. Het creatieve aanbod is smal
Alle acht testadvertenties zijn statische beelden met een grote kop. De advertenties die bij concurrenten het langst draaiden (zie [[2026-10-25-ads-onderzoek-bewezen-grip-sock-ads]]) zijn vooral video in UGC-stijl: de sceptische sporter die overstag gaat, bezwaren wegnemen, probleemhoek ("schuiven, glijden, blaren"), sociaal bewijs. Looptijd is slechts een benadering van prestaties, geen meting, maar het wijst op hoeken die nog niet zijn getest: video en de probleemhoek. Voor de kernsporten padel, voetbal en rugby is er in Nederland nog bijna geen merk-advertentie, dus de ruimte is er.

### 7. Meting: hou de bronnen naast elkaar
GA4 telt de Meta-campagne te laag (niet op alle thema-versies gekoppeld) en Shopify toont botverkeer. Vergelijk daarom altijd Meta, GA4 en Shopify naast elkaar, en tel nooit de ROAS van kanalen op als unieke omzet. Meta rapporteert sinds 2026 ook engage-through-attributie (likes, shares, saves, video-views van 5+ seconden); controleer in Ads Manager welke attributie je leest, anders lijkt de ROAS hoger dan de echte kliks-conversie. Voor de weekomzet geldt: 4 bestellingen (€195,80, Shopify) in dezelfde week als de campagnestart zijn niet aantoonbaar uit de advertenties gekomen.

### 8. Wat wel goed ging
- De UTM-parameters zijn correct, dus het verkeer is in GA4 per advertentie te volgen.
- De testopzet is netjes: één variabele per paar, gelijk beeld en CTA.
- Er is al een stappenplan met hoeken en een swipe file, en een besluit om met Ads te starten en CAPI vanaf het begin in te richten.

## Wat niet lukte
Geen toegang tot Ads Manager of de Meta-koppeling; uitgaven, CPM, CTR per ad en kosten per resultaat zijn daarom niet beoordeeld. Er zijn alleen funnel-getallen uit eerdere notities gebruikt. De conclusie over snelheid als hoofdoorzaak is niet bevestigd met een vergelijking vóór en ná de fix op echt advertentieverkeer.

## Bronnen
- [[2026-10-29-ads-funnel-en-snelheid-productpagina]] (funnel 288 → 116 → 5 → 0, Lighthouse-metingen)
- [[2026-10-25-ab-test-ads-features-vs-beste]] (testopzet, steekproefberekening)
- [[2026-10-25-ads-onderzoek-bewezen-grip-sock-ads]] (concurrentieadvertenties, stappenplan)
- [[2026-11-02-weekoverzicht]] (verkeer en bestellingen week 26 okt–1 nov)
- [[ACTIEBACKLOG]] (leerdrempel, CAPI, attributie)

## Aantekeningen
