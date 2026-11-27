---
id: 2026-11-26-productpagina-2-0-onderzoek-en-prototype
titel: "Productpagina Performance Gripsokken 2.0 — onderzoek en prototype v2.0"
kerntitel: "Huidige productpagina telt 47 fouten; prototype v2.0 zet koop, bewijs en maat bovenaan"
datum: 2026-11-26
bron: los
routine: ""
categorie: CRO
status: nieuw
prioriteit: P1
samenvatting: "De huidige 2.0-productpagina bevat 47 fouten (claims zonder bron, u-vorm, oude reviews, verouderde beleidslinks) en 89% van de bezoekers haakt af tussen productweergave en winkelwagen. Prototype v2.0 lost dit op met een koopblok met packs en maat in één blik, bewijs met bron, echte reviews, sporttabs, een 360-anatomie, een maatvinder en volledig schema zonder aggregateRating."
gerelateerd: [2026-11-23-funnel-ga4-verkeersbronnen, 2026-11-24-landingspaginas-live-ads-message-match]
vervangt: []
bronbestand: "https://claude.ai/artifact/J45n42xLo4RJbfhnbNDDRo"
deadline: ""
---
# Productpagina Performance Gripsokken 2.0 — onderzoek en prototype v2.0

> Map: [[Waar staat wat]]

## In het kort
Onderzoek via de Website Agent (copy, CRO, SEO, design) naar de beste productpagina voor de Performance Gripsokken 2.0, met een werkend prototype als artifact. Bron en uitwerking: `06_Website_Agent/Productpagina-prototype/v2.0/` (`_src/COPY.md`, `_src/CRO.md`, `_src/SEO.md`, `_src/ld-product.json`). Website-QA ronde 1 gaf CORRIGEER; alle punten zijn verwerkt, behalve de besluiten hieronder.

## Kerncijfers
- **47** · Fouten in de huidige productpaginacopy
- **89%** · Afhakers tussen view_item en add_to_cart (GA4, 28 dagen)
- **81%** · Productsessies op mobiel
- **4,9%** · Mobiele sessies die 90% scrolldiepte halen

## Acties
- [ ] P1 · Besluit: prototype v2.0 goedkeuren als basis voor de productpagina in het werkthema
- [ ] P1 · Besluit: besparingslabels exact (€8,90 / €19,80) of afgerond, en de doorhaalprijs €19,95 op het 1-pack schrappen
- [ ] P1 · Besluit: voorwaarden gratis actiepaar Performance Days (kleur en maat, retour, telt mee voor €35)
- [ ] P2 · Besluit: toestemming atleten en clubs voor quotes en logo's op de productpagina vastleggen
- [ ] P2 · Beschrijving speciale demping en wasvoorschrift controleren tegen het label
- [ ] P2 · Advies "op de grens kies de grotere maat" toetsen bij klantenservice-ervaring
- [x] P2 · Schemafouten live thema herstellen (http-context, Organization zonder sameAs, Product zonder GTIN en verzend- en retourgegevens)
- [ ] P3 · Beleidspagina's verzending en retour bijwerken zodat de productpagina ernaar kan linken

## Bevindingen
### Huidige pagina
Belangrijkste fouten: blessureclaim zonder bron, "u/uw" in de FAQ, ★★★★½ zonder bron, reviews uit 2025 die waarschijnlijk over de 1.0 gaan, links naar verouderd beleid, hardgecodeerd "Nu op voorraad", padel en rugby ontbreken, afgeronde kortingslabels.

### Concurrenten
FitSockr (€19,95, packs zonder echte korting, "morgen in huis", geen bewijscijfers), Proskary (€14,99, "vóór 23:00 besteld, morgen in huis"), Stepzz (4,7 uit 2.885 reviews, 3+3 en 5+5 packs met prijs per paar). Optigrip niet bereikbaar (bol.com blokkeert).

### Wat werkt op productpagina's (Baymard e.a.)
Prijs per stuk tonen (81% van de sites doet het niet), retourbeleid op de productpagina (60% zoekt het daar), een concrete verzenddag, alle kosten vooraf (extra kosten = 40% van de afhakers), een decoy-pack in het midden, reviews dicht bij de koopknop, thumbnails op mobiel. Sticky koopknop: bewijs gemengd, A/B-testen.

### Prototype v2.0
Koopblok boven de vouw op 1440 en 375: kleur, packs met prijs per paar, maat in de gekozen kaart (mobiel), koopknop, verzenddag, retour. Daarna bewijs (Apps et al. 2022, IJKHE 2023, Friedl 2023 met beperking), echte reviews, sporttabs (padel, voetbal, rugby, tennis), 360-anatomie met 7 zones, eerlijke vergelijkingstabel, maatvinder, FAQ (8), slot. Schakelaar met en zonder actie.

## Wat niet lukte
higrip.nl gaf HTTP 429 aan de agents; de copy-audit gebruikte de copy uit het werkthema. De SEO-agent stopte op zijn turnlimiet; meta's en schema zijn daarna zelf samengesteld uit de audit van 25-09. Dashboard publiceren lukt alleen vanaf info@.

## Bronnen
- Prototype: https://claude.ai/artifact/J45n42xLo4RJbfhnbNDDRo
- `06_Website_Agent/Productpagina-prototype/v2.0/_src/` (COPY, CRO, SEO, ld-product.json)
- Apps et al. 2022, Journal of Sports Sciences; Baymard Institute product page research

## Aantekeningen
