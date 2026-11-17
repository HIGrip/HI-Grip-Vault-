---
id: 2026-11-16-horizon-4-5-update-check
titel: "Horizon-update 4.4.0 naar 4.5.0: controle van de bijgewerkte kopie"
kerntitel: "Horizon 4.5.0: 14 templates breken, quick add krijgt eindelijk een maatkeuze"
datum: 2026-11-16
bron: los
routine: ""
categorie: Techniek
status: nieuw
prioriteit: P1
samenvatting: "De Shopify-update naar Horizon 4.5.0 (kopie 204874187079) houdt alle eigen HÏ-code intact, maar overschrijft 14 templates: de A/B-pagina's verliezen hun productsectie en knop In winkelwagen, de blog verliest het eigen overzicht, artikelen staan er dubbel en 10 pagina's krijgen een tweede H1. Na het terugzetten van die templates uit live is de kopie gelijk aan live, plus een quick add met maatkeuze en snellere collectiepagina's; live is niet aangeraakt."
gerelateerd: [2026-11-04-horizon-4-4-update-check]
vervangt: []
bronbestand: ""
deadline: ""
---
# Horizon-update 4.4.0 naar 4.5.0: controle van de bijgewerkte kopie

> Map: [[Waar staat wat]]

## In het kort
Shopify maakte op 16-11 de kopie "Bijgewerkte kopie van Live website 04-11-2026" (`204874187079`, Horizon 4.5.0) van live (`203954520391`, Horizon 4.4.0). Ik heb die vergeleken met live in de code (git in `<gebruikersmap>\Werk\theme-snelheid\update-45`) en in de preview getest: foutscan op 15 pagina's (telefoon en desktop), sectiehoogtes, winkelwagenflow, quick add, en snelheid met echte vertraging.

Conclusie: dezelfde fout als bij 4.4, maar groter. De update zet Horizon-standaardsecties in onze templates. Na het terugzetten van 14 templates is de update goed bruikbaar.

## Kerncijfers
- **14** · templates overschreven door de update (12 pagina's, blog, artikel)
- **0** · JavaScript- of Liquid-fouten op 15 pagina's, telefoon en desktop
- **7,9 → 2,6 s** · LCP collectiepagina op telefoon (mediaan van 3 runs)
- **2** · maten in de quick add, waar live er geen toont

## Acties
- [x] P1 · Update-kopie 204874187079: 14 templates (page.*.json, blog.json, article.json) terugzetten uit live, alleen die bestanden pushen, daarna opnieuw testen
- [ ] P1 · Besluit: update-kopie 204874187079 live zetten na de hertest (vooraf controleren dat live sinds 16-11 niet is gewijzigd)
- [ ] P2 · Na livegang: quick add op /collections/all met beide maten testen tot in de winkelwagen
- [ ] P3 · Instelling "winkelvoorraad tonen" (show_physical_stores) in het blok Koopknoppen uitzetten; scheelt het laden van local-pickup.js op elke productpagina
- [ ] P3 · Na livegang de snelheid van de collectiepagina opnieuw meten (5 runs) om de LCP-winst te bevestigen

## Bevindingen
### Wat goed blijft
Alle eigen HÏ-bestanden (padel, mvv, hi-compare, hg-ab, cart-summary, cart-drawer, scripts.liquid, predictive-search.js) verschillen alleen in regeleindes. Ook de titelfix van 4-11 (`2fr 1fr` in product-information-content.liquid) en de lazy-fix in product-media-gallery staan er nog. Homepage, productpagina's, collectie en padelpagina zijn op telefoon en desktop per sectie even hoog als live. Winkelwagen: 3-pack 2.0 zwart geeft in beide thema's €44,95, met korting, verzending, afrekenknop.

### Wat stuk gaat: 14 templates
- **A/B-pagina's** (`page.ab-a`, `page.ab-b`; /pages/gripsokken-2-1 en -2-0): `hg-ab-product` vervangen door `main-page`. Product, pakketten en In winkelwagen weg; pagina 1870 px korter (5983 → 4116 px op telefoon).
- **Blog** (`blog.json`): `hg-blog-overzicht` vervangen door `main-blog`. De eigen hero is weg; de kop wordt "ALGEMEEN".
- **Artikel** (`article.json`): `main-blog-post` vóór `hg-artikel` gezet. Het hele artikel staat er twee keer, met twee H1's (+2600 px).
- **10 pagina's** (shop, contact, zakelijk, teamorder, survey, gripsokken-vergelijken, vier beleidspagina's): extra `main-page` met de paginatitel als tweede H1 (80 tot 192 px).

Oplossing: de templates uit live terugzetten. Ze zijn niet versiegebonden. Blog en artikel zijn nieuw ten opzichte van 4.4; dit gaat bij elke update opnieuw mis zolang Shopify templates naar de standaardstructuur migreert.

### Wat beter wordt
- **Quick add met maatkeuze.** Op live toont de pop-up op de collectiepagina alleen prijs en knop, zonder maat. In 4.5 vult Horizon de pop-up uit een nieuwe sectie (`section-rendering-quick-add`) als de productpagina niet alles levert: maat 34-39/40-46, aantal en snelle betaalknoppen. Dit lost een fout op die nu op live staat.
- **Afbeeldingen:** `resource-image` laadt afbeeldingen vanaf de vierde sectie lazy en geeft betere `sizes` op mobiel. Collectiepagina telefoon: LCP 7,9 → 2,6 s, load 12,0 → 5,5 s (3 runs, ruisgevoelig).
- **Toegankelijkheid:** nieuw snippet `link-label` geeft links naar producten, pagina's en collecties een naam voor schermlezers (hero, image, kaarten).
- **Desktop-PDP:** extra `min-width: 0` op de detailsgroep voorkomt overlopende tekst.

### Wat anders is
- **Koopknoppen:** nieuwe instelling `show_physical_stores` (standaard aan) toont voorraad in fysieke winkels. Geen zichtbaar effect, maar `local-pickup.js` laadt nu op elke productpagina (1 extra verzoek).
- **Locales:** nieuwe teksten voor winkelvoorraad en linklabels in 83 taalbestanden.

### Snelheid
Telefoon, 150 ms latency, 1,6 Mbit/s, CPU 4x vertraagd, cache uit. Mediaan.

| Pagina | Meting | Live | Update |
|---|---|---|---|
| Home (3 runs) | LCP | 4,31 s | 4,20 s |
| Home (3 runs) | Load | 8,32 s | 7,22 s |
| PDP (5 runs) | LCP | 2,56 s | 2,42 s |
| PDP (5 runs) | Load | 5,57 s | 5,47 s |
| Collectie (3 runs) | LCP | 7,93 s | 2,62 s |

De eerste PDP-meting (3 runs) gaf 6,9 → 11,7 s load; met 5 runs bleek dat ruis.

### Hersteld (16/17-11)
De kopie `204874187079` (unpublished, gecontroleerd met `theme list`) is hersteld. Alleen de 14 templates zijn gepusht, teruggezet uit live. Daarna verschilt de kopie van live alleen nog in de code van 4.5.

Hertest na het herstel, 14 pagina's op telefoon en desktop naast live:
- **Secties:** per pagina dezelfde secties met dezelfde hoogte als live (0 verschillen).
- **H1:** precies 1 per pagina, ook op blog en artikel.
- **A/B-pagina's:** productsectie en In winkelwagen terug.
- **Foutscan:** geen JS- of Liquid-fouten.

## Wat niet lukte
Theme Check (linter) is door Claude Code gestopt wegens geheugentekort op de computer en niet opnieuw gestart. De foutscan in de browser en de volledige code-diff zijn wel gedaan. Niet getest: een echte bestelling afronden en de thema-editor. Het dashboard is niet gepubliceerd: dat kan alleen vanaf info@.

## Bronnen
- Preview-tests met Playwright op www.higrip.nl met `?preview_theme_id=` voor 203954520391 en 204874187079
- Codevergelijking: `<gebruikersmap>\Werk\theme-snelheid\update-45` (git: live, kopie zoals Shopify hem maakte, herstel)
- [[2026-11-04-horizon-4-4-update-check]]

## Aantekeningen
