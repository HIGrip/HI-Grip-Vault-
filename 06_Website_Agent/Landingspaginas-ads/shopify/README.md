---
type: kennis
gebied: website-agent
bijgewerkt: 2026-11-26
---

# Ad-landingspagina's in Shopify (live sinds 26-11-2026)

Shopify-versie van prototype v1.8. Bron van de bestanden in deze map; na de eerste push is de **theme-editor** de bron van de inhoud.

## Links voor de ads

| Ad | Link |
|---|---|
| 01 Alles beweegt | https://higrip.nl/pages/gripsokken-voetbal?ad=01 |
| 02 Checklist voetbal | https://higrip.nl/pages/gripsokken-voetbal?ad=02 |
| 03 Founderbrief voetballer | https://higrip.nl/pages/gripsokken-voetbal?ad=03 |
| 04 Checklist rugby | https://higrip.nl/pages/gripsokken-rugby?ad=04 |
| 05 Founderbrief rugbyspeler | https://higrip.nl/pages/gripsokken-rugby?ad=05 |
| 09 Geef geen meter weg | https://higrip.nl/pages/gripsokken-rugby?ad=09 |
| 06 Niet elke sok | https://higrip.nl/pages/performance-gripsokken?ad=06 |
| 07 Nooit meer | https://higrip.nl/pages/performance-gripsokken?ad=07 |
| 08 Wat houdt je tegen | https://higrip.nl/pages/performance-gripsokken?ad=08 |

## Hoe het in elkaar zit

- **Pagina's** (Online Store → Pagina's): template `page.ad-voetbal`, `page.ad-rugby`, `page.ad-product`. Metafield `seo.hidden = 1`: noindex en niet in de sitemap. Niet in een menu.
- **Secties** (alle instellingen in de editor): `hi-adl-buy` (koopblok met blokken *Ad-variant* en *Galerijfoto*), `hi-adl-athletes`, `hi-adl-reviews`, `hi-adl-tiles`, `hi-adl-science`, `hi-adl-faq`, `hi-adl-offer`. Stijl `assets/hi-adl.css`, gedrag `assets/hi-adl.js`, snippets `hi-adl-image` en `hi-adl-stars`.
- **Ad-variant:** `?ad=<code>` kiest het blok met die code (kop, subtekst, post-it, bezwaren, ad-foto als derde beeld). Zonder code: het eerste blok.
- **Winkelwagen:** zelfde route als de productpagina: `hi-bundle` (1/3/5-pack, prijzen uit `hi-pack-data`) + Horizon `product-form-component`. Bundelkorting en Black Friday-actiepaar komen uit de winkelwagen zelf. Getest 26-11: 3-pack zwart → €44,95 + gratis actiepaar.
- **Foto's:** Shopify Bestanden, naam `adl-*` (30 stuks, met alt-tekst). Vervangen kan per instelling in de editor.

## Thema's

Gepusht (alleen nieuwe bestanden, `--only`, niets overschreven) naar live `205415153991` "BLACK FRIDAY werkthema 24-11-2026" en `205362889031` "Kopie van Live website 23-11-2026". In de Kopie ontbrak `snippets/hi-pack-data.liquid` (bundelkeuze werkte daar ook op de productpagina niet); die is daar toegevoegd.

Bij een nieuw live thema (kopie van een oud thema): eerst `shopify theme list`, dan deze map pushen met `--only "sections/hi-adl-*" --only "snippets/hi-adl-*" --only "assets/hi-adl.*"`. Templates alleen pushen als het doelthema ze nog niet heeft, anders gaan editorwijzigingen verloren. `_build_templates.py` maakt de templates opnieuw uit de prototype-inhoud.

## Open

- Toestemming van de vier Oranje-spelers voor naam, foto en quote op de rugbypagina.
- De links in de 9 Meta-ads omzetten (doet een mens in Ads Manager).

> Map: [[06 Website Agent — Index]]
