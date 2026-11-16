---
id: 2026-11-16-seo-conversietest-run-8
titel: "SEO- en conversietest run 8 — auditblok B (producten en collecties), collectiebeschrijving verdwenen"
kerntitel: "Collectiebeschrijving /collections/gripsokken (RUN 2) verdwenen na thema-wissel"
datum: 2026-11-16
bron: routine
routine: "seo-conversietest"
categorie: CRO
status: nieuw
prioriteit: P1
samenvatting: "De collectiebeschrijving van 222 woorden die RUN 2 op 19 oktober live kreeg, staat niet meer op /collections/gripsokken en de pagina linkt niet meer intern naar de sportpagina's — vermoedelijk verloren bij de volledige thema-wissel van begin november; Claude heeft een nieuwe conceptversie met interne links geschreven in het logboek. Shopify Analytics laat herstel zien na de lege week van 9 nov (0 → 3 orders, €0 → €91,16 omzet), al dalen de sessies nog fors na het aflopen van de betaalde campagne; nieuw gevonden: alle zes 2.0-varianten tonen negatieve voorraad terwijl het Product-schema nog InStock meldt."
gerelateerd: [2026-11-16-regressiecheck, 2026-11-09-seo-conversietest-run-7]
vervangt: []
bronbestand: "https://admin.shopify.com/store/raqds3-tb/pages/168287895879"
deadline: ""
---
# SEO- en conversietest run 8 — auditblok B (producten en collecties), collectiebeschrijving verdwenen

> Map: [[Waar staat wat]]

## In het kort

Achtste run van de wekelijkse SEO- en conversietest (modus CONCEPT: niets live gewijzigd). Auditblok deze run: **B — producten en collecties** (rotatie B→C→D→B, vorige run blok D op 9 nov; volgende run weer blok D). Belangrijkste bevinding: de collectiebeschrijving van `/collections/gripsokken` (222 woorden, geschreven in RUN 2 op 28 sep, bevestigd live op 19 okt en nog aanwezig op 9 nov) is live gecontroleerd op 16 nov niet meer te vinden — de pagina heeft geen collectietekst meer en linkt niet meer intern naar de sportpagina's (padel, tennis, voetbal, rugby) of de vergelijkingspagina. SEO-titel, meta description en de alt-teksten van RUN 2 staan nog wel overeind. Waarschijnlijke oorzaak: de volledige thema-wissel van begin november (zie RUN 7) nam dit contentblok niet over uit de oude themalijn. Claude heeft een nieuwe conceptversie (161 woorden, met interne links) plus een kortere SEO-titel geschreven in het logboek — niets live gezet. Daarnaast: alle zes varianten van de Performance Gripsokken 2.0 (zwart en wit) tonen een negatieve voorraad in de Shopify Admin API, terwijl het Product-schema nog InStock meldt — een nieuw risico voor Google Shopping. Productdata voor Google Shopping/AI-agents (vendor, productType, GTIN) is verder in orde en bevestigt RUN 5. Shopify Analytics laat herstel zien na de lege week van 9 nov: omzet van €0 naar €91,16, orders van 0 naar 3, al dalen de sessies nog fors (−59,1%) na het aflopen van de betaalde social-campagne.

## Kerncijfers

- **161** · sessies laatste 7 volledige dagen (9–15 nov) · vorige 7 dagen (2–8 nov) 394, −59,1%
- **€91,16** · omzet laatste 7 volledige dagen · vorige 7 dagen €0
- **3** · orders laatste 7 volledige dagen · vorige 7 dagen 0
- **1,86%** · conversieratio · vorige 7 dagen 0%

## Acties

- [ ] P1 · [conversietest] Besluit: collectiebeschrijving + kortere SEO-titel voor `/collections/gripsokken` teruggeven aan het thema — concept (161 woorden, interne links naar de 4 sportpagina's + vergelijkingspagina, titel 57 tekens) staat klaar in het logboek, RUN 8, sectie 9.2
- [ ] P1 · [conversietest] Besluit: alle 6 varianten van Performance Gripsokken 2.0 (zwart + wit) tonen negatieve voorraad in de Shopify Admin API terwijl het Product-schema InStock meldt — voorraadstatus en schema-risico voor Google Shopping uitzoeken
- [ ] P3 · [conversietest] Besluit: collectietekst terugzetten als los contentblok (zoals RUN 2) of als `descriptionHtml` van de collectie, afhankelijk van hoe het huidige thema (MAIN 203954520391) dit rendert — concepttekst bevat een `[CHECK]` hierover

## Bevindingen

### Instellingen

Winkel HÏ Grip bevestigd via `get-shop-info` (www.higrip.nl, EUR, Basic-plan). Thema's gecontroleerd via GraphQL: MAIN is nog steeds **"Live website 04-11-2026"** (`203954520391`), ongewijzigd t.o.v. 9 nov. Logboek: verborgen pagina `seo-routine-logboek` (`gid://shopify/Page/168287895879`), RUN 8 toegevoegd als sectie 9.

### Auditblok B — producten en collecties (diep, rotatie)

1. **Collectiebeschrijving `/collections/gripsokken` verdwenen (nieuw, 16 nov 2026).** Live gecontroleerd: geen `<p>`-blok of tekstsectie met beschrijvende copy over de collectie, geen interne links naar `/pages/gripsokken-voor-padel`/`-tennis`/`-voetbal`/`-rugby` of `/pages/gripsokken-vergelijken`. De pagina bestaat nu alleen uit een productkiezer, een "twijfel je nog"-vergelijkingsblok en reviews. SEO-titel (61 tekens, 1 te lang) en meta description (148 tekens) zijn wel nog aanwezig, net als de beschrijvende alt-teksten op de productfoto's.
2. **SEO-titel 1 teken te lang.** De huidige titel van `/collections/gripsokken` is 61 tekens (max 60); concept-titel (57 tekens) staat in het logboek.
3. **Productdata Google Shopping/AI-agents: in orde, geen nieuwe bevinding.** Via de Shopify Admin API bevestigd: alle drie producten hebben `vendor` "HÏ Grip" en `productType` "Gripsokken"; de 2.0-varianten (zwart en wit, alle drie maten) hebben een barcode die exact overeenkomt met de EAN-lijst uit het feitenbestand (bv. PGSZ201 → 9110024809242, PGSW201 → 9110024809211). Dit bevestigt het al op 9 nov gemelde resultaat van RUN 5.
4. **Nieuw risico: negatieve voorraad op de 2.0-varianten.** Alle zes varianten (PGSZ201/202/203, PGSW201/202/203) tonen een negatieve `inventoryQuantity` in de Shopify Admin API (bv. PGSZ203 43–47: −30), terwijl `totalInventory` per product 0 toont — wijst op doorverkopen bij backorder. Relevant omdat het Product-schema nog steeds InStock meldt (al bekend open punt) terwijl er feitelijk niets op voorraad is: het risico op een Google Shopping-afkeuring wordt daardoor groter. Claude wijzigt geen voorraad; dit is alleen een melding voor het team.

### Gebouwd (concept)

Nieuwe collectiebeschrijving (161 woorden, Nederlands, met interne links) en een kortere SEO-titel (57 tekens) voor `/collections/gripsokken`, geschreven in het logboek, RUN 8 sectie 9.2. De tekst herhaalt de kernclaims uit het feitenbestand (3500+ sporters, siliconen grip, 15–20 mmHg compressie 2.0, Coolmax, maten 35–47, gratis verzending vanaf €35, binnen 1 werkdag verzonden, 30 dagen retour) en linkt naar de vier sportpagina's en de vergelijkingspagina. Bevat een `[CHECK]`: hoe dit technisch terug moet (los contentblok zoals voorheen, of `descriptionHtml`), afhankelijk van hoe het huidige thema collectiebeschrijvingen rendert.

### Meten (Shopify Analytics, 7 dagen / 7 daarvoor)

GA4 kon deze run niet als kruisverwijzing gebruikt worden (tool geblokkeerd, zie de regressiecheck van vandaag). Shopify Analytics, laatste 7 volledige dagen (9–15 nov) tegenover de 7 daarvoor (2–8 nov):

| Metric | 9–15 nov | 2–8 nov |
|---|---|---|
| Sessies | 161 | 394 |
| Orders | 3 | 0 |
| Omzet (total_sales) | €91,16 | €0 |
| Bereikte checkout | 7 | 1 |
| Voltooide checkout | 3 | 0 |
| Conversieratio | 1,86% | 0% |

Herstel van de lege week die op 9 nov werd gemeld: omzet en orders zijn terug, maar sessies dalen nog fors (−59,1%) na het aflopen van de betaalde social-campagne begin november. Top landingspagina's (7 dagen, rollend venster): `/` (88), `/en` (29), `/products/performance-gripsokken-2-0-zwart` (7), het nieuwste blogartikel (6), `/products/performance-gripsokken` (4). Belangrijkste bronnen: direct (81), zoekmachines (54), social (23).

### Evaluatie lopende testplannen

- **RUN 2 (`/collections/gripsokken`, SEO-titels/meta's/collectiebeschrijving/alt-teksten):** label bijgesteld van **werkt (voorlopig)** naar **werkt niet meer zoals gemeten** — de collectietekst die de positieverbetering (12,1→7,6, zie RUN 7) mee onderbouwde, is verdwenen. Titel/meta/alt-teksten staan nog. Nieuwe meting pas zinvol zodra de tekst is teruggezet.
- **RUN 5 (productType/GTIN 2.0-varianten):** label blijft **live, te vroeg voor evaluatie** — ongewijzigd bevestigd (zie Auditblok B, punt 3).
- **Waardebalk (`hi-pack-value-bar`):** label blijft **te vroeg**; het risico uit RUN 7 (alleen in het verlaten testthema 200249901383, niet in de huidige unpublished kopie 204029296967) is ongewijzigd, nog niet herbouwd.

### Wat Team HÏ Grip zelf moet doen

- Besluiten over de twee nieuwe P1-punten hierboven (collectietekst teruggeven, voorraadstatus 2.0-varianten).
- Bestaande open besluiten (iDEAL/Wero-icoon, sporters-claim, Organization-schema, reviewapp) blijven ongewijzigd open — niet opnieuw genoemd, zie de regressiecheck van vandaag en de backlog.

## Wat niet lukte

Search Console (module B) kon deze run niet gedraaid worden: `google_data.py` werd door de privacyplugin van deze cloudsessie geblokkeerd (zie de regressiecheck van vandaag). Daardoor ook geen GA4-kruisverwijzing voor de meting hierboven, en geen doorwerkingscheck van eerdere SEO-titel/schema-wijzigingen op posities deze week.

## Bronnen

- Shopify Admin API (producten, varianten, barcodes, thema's, pagina's) via de Shopify-connector, 16 november 2026.
- `run-analytics-query` (Shopify Analytics), 16 november 2026.
- Live site: curl op `/collections/gripsokken`, 16 november 2026.
- Logboek: Shopify-pagina `seo-routine-logboek` (https://admin.shopify.com/store/raqds3-tb/pages/168287895879), RUN 8.
- Feitenbestand: `00_Brand_Core/Feiten & Actuele Staat.md` en `00_Brand_Core/Performance Grip Socks 2.0.md`.

## Aantekeningen
