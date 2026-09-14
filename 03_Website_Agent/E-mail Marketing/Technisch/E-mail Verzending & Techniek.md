# E-mail Verzending & Techniek — HÏ Grip

> Vastgelegd 2026-09-14, op basis van input van lars. Dit bestand is de technische tegenhanger van [[E-mail Design & Stijlgids]] (dat gaat over hoe een e-mail eruitziet, dit over hoe hij verstuurd wordt en hoe content erin automatisch meebeweegt).

---

## Verzendplatform

**SendWILL** — hier verstuurt lars de HÏ Grip-e-mails vandaan (bevestigd door lars, 2026-09-14).

**[LARS]** Dit moet nog gereconcilieerd worden met een eerdere aanname in [[E-mail Mailflows Artifact]]: daar staat dat het "echte doel" een Shopify Messaging "Custom Liquid"-sectie was (met Shopify's eigen `abandoned_checkout.*`/`abandoned_visit.*`-objectvariabelen). Onduidelijk of SendWILL:
- een los verzendplatform is dat losstaat van Shopify Messaging (dan is de eerdere Shopify-Liquid-aanname achterhaald), of
- de tool is waar die Shopify-Liquid-secties uiteindelijk in landen/vandaan verstuurd worden (dan bestaat beide naast elkaar)

Graag bevestigen zodat dit bestand niet met verouderde/tegenstrijdige aannames blijft staan.

---

## Dynamische content — links en velden die automatisch meebewegen

Een deel van de e-mailinhoud mag niet statisch getypt worden, maar moet automatisch de juiste waarde tonen per ontvanger/moment — bijvoorbeeld:
- Productlink + productfoto van het specifieke product dat iemand achterliet (verlaten winkelwagen)
- Prijs/aantal van dat product
- Kortingscode + vervaldatum (persoonlijk, niet hardcoded)
- Klantnaam, ordernummer, verzendstatus

**Waarom dit techniek is, geen ontwerpkeuze:** dit soort velden moet als **merge-tag/variabele** in de template staan (niet als platte tekst), zodat het platform ze bij verzending automatisch invult per ontvanger. Fout hierin = dezelfde link/foto/code voor iedereen, of een lege/kapotte plek in de mail.

**Al bekend uit eerdere bouw (Shopify-kant, zie [[E-mail Mailflows Artifact]]):**
- `abandoned_checkout.url` / `.line_items[].product_title|variant_title|quantity|image_url` / `.total_price|money` / `.item_count` / `.remaining_products_count`
- `abandoned_visit.url` / `.products_added_to_cart[].title|…` / `.remaining_cart_products_count` (geen prijs)
- Elke variabele is `null` buiten zijn eigen automation — één sectie kan dus op beide vertakken (if/else in Liquid).

**[LARS]** Nog te bevestigen: gebruikt SendWILL dezelfde Shopify-objectvariabelen (als het op Shopify-orderdata draait), of een eigen merge-tag-syntax (bv. `{{first_name}}`-stijl)? Dit bepaalt of bovenstaande lijst 1-op-1 herbruikbaar is of dat er een SendWILL-specifieke variabelenlijst bij moet.

---

## Open technisch punt: e-mail ontbreekt als kanaal in GA4

Bij de funnel-analyse van deze week (zie [[Week 2026-09-14]]) kwam in het kanalenoverzicht geen **"Email"**-kanaal voor — alleen Direct, Organic Search, Organic Social, Referral, Cross-network, Unassigned, AI Assistant. Twee mogelijke verklaringen:
1. Er is simpelweg nog te weinig e-mailverkeer geweest in de gemeten periode, of
2. **Links in SendWILL-mails hebben geen (juiste) UTM-parameters**, waardoor GA4 kliks vanuit e-mail niet als "Email"-kanaal herkent maar wegschrijft onder Direct/Unassigned.

**Actiepunt:** checken of SendWILL automatisch UTM's toevoegt aan links (`utm_source=email`/`utm_medium=email`/`utm_campaign=...`), en zo niet, dit inschakelen — anders is elke toekomstige e-mail-ROI-meting (zie [[E-mail Marketing Benchmarks]]) onmogelijk te onderscheiden van overig verkeer.

---

## Gerelateerde bestanden

- [[E-mail Design & Stijlgids]]
- [[E-mail Mailflows Artifact]]
- [[E-mail Lijst Strategie]]
- [[E-mail Marketing Benchmarks]]
- [[Week 2026-09-14]] — kanalenoverzicht waar het ontbrekende Email-kanaal opviel
