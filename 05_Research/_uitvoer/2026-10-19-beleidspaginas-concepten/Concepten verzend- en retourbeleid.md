---
type: uitvoer
gebied: website-agent
status: concept — wacht op Lars
bijgewerkt: 2026-10-19
---

# Concepten verzend- en retourbeleid

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[Waar staat wat]] · [[Home]]

Bron van inhoud en cijfers: de goede NL-pagina's `/pages/verzendbeleid` en `/pages/retourbeleid` (live gelezen op 19-10-2026) en de tabel "Verzending en retour" in [[Feiten & Actuele Staat|Feiten]] (besluit Lars 25-9-2026). Niets is live gezet.

**Let op bij het ophalen:** `web_extract` gaf voor `/pages/*` een oude, gecachete versie (22:00, 25%, ongeopend). De browser toont de echte, goede tekst. Die is hier gebruikt.

Alles met **[CHECK]** is een punt waar Lars moet bevestigen. Haal de markering weg vóór plakken.

---

## 1. https://www.higrip.nl/policies/shipping-policy (NL)

```
Verzendbeleid

Verzendtijd
We verzenden alle bestellingen binnen 1 werkdag. Zo heb je je gripsokken snel in huis en sta je snel weer op het veld.

Let op: deze verzendtijd geldt niet voor pre-orders. De levertijd van een pre-order staat bij het product.

Verzendkosten
Verzending kost €4,50 per bestelling.
Vanaf €35 verzenden we gratis.
We leveren voorlopig alleen binnen Nederland.

Bezorging
We kiezen voor PostNL vanwege hun betrouwbare en snelle bezorging. Zodra je pakket onderweg is, krijg je een trackingnummer waarmee je je bestelling kunt volgen.

We verwerken elke bestelling snel en zorgvuldig, zodat hij in perfecte staat bij je aankomt.

Vraag over dit beleid?
Mail info@higrip.nl of bel +31 6 24 56 65 47.
```

**Wijzigingen t.o.v. live**
- "Vóór 16:00 dezelfde dag verzonden" vervangen door "binnen 1 werkdag".
- U-vorm vervangen door je/jij.
- Toegevoegd (uit de goede NL-pagina): verzendkosten €4,50, gratis vanaf €35, alleen levering binnen Nederland.
- Uitleg over pre-orders aangevuld met "levertijd staat bij het product" (zoals op de goede pagina).
- Vulzinnen ("grote waarde aan een snelle en betrouwbare levering", "Team HÏ Grip staat altijd klaar") geschrapt; contactgegevens uit de goede pagina toegevoegd.
- [CHECK] Telefoonnummer en "alleen Nederland" staan op de goede pagina; de laatste regel staat niet in het feitenbestand.

---

## 2. https://www.higrip.nl/policies/refund-policy (NL)

```
Retourbeleid

Retour aanvragen
1. Vraag je retour aan. Binnen 30 dagen na ontvangst, via ons contactformulier.
2. Je krijgt een retourlabel. Met instructies over hoe en waar je het pakket naartoe stuurt.
3. Stuur het pakket terug. Bewaar het verzendbewijs van je retourzending.
4. Je krijgt je geld terug. Binnen 14 dagen na je retourmelding, inclusief de verzendkosten van je bestelling.

Start je retour: [Start je retour](/pages/contact)

Artikelen die we terugkrijgen zonder dat er een retour is aangevraagd, nemen we niet aan. Retourneren via MyParcel kan ook: https://myparcel.me/returns/create

Voorwaarden
Je mag het product uitpakken en bekijken zoals je dat in een winkel zou doen. Is het meer gebruikt dan nodig was om het te beoordelen, dan mogen we de waardevermindering verrekenen.
Gepersonaliseerde producten (zoals bedrukkingen) kun je niet retourneren.
De kosten van het terugsturen zijn voor jou.

Schade of verkeerd artikel
Controleer je bestelling direct bij ontvangst. Is het product beschadigd of heb je het verkeerde artikel gekregen? Neem dan meteen contact met ons op. We lossen het voor je op.

Betalingen
Alle betalingen lopen via Mollie. Je kunt betalen met iDEAL (alleen in Nederland), creditcard (Visa, Mastercard, American Express), Klarna, Bancontact en Apple Pay. [CHECK]

Vraag over dit beleid?
Mail info@higrip.nl of bel +31 6 24 56 65 47.
```

**Wijzigingen t.o.v. live**
- 14 dagen retour vervangen door 30 dagen na ontvangst.
- "Ongeopend"-eis, "geen sporen van gebruik" en 25% herbevoorradingskosten geschrapt; voorwaarden volgen nu de goede pagina (uitpakken mag, waardevermindering alleen bij meer gebruik dan nodig).
- Terugbetaling nu zoals op de goede pagina: binnen 14 dagen na retourmelding, inclusief verzendkosten. Live stond: 14 dagen na ontvangst en controle van het product.
- U-vorm vervangen door je/jij; kapotte zin ("uw performance naar het hoogste niveau") weg.
- Functioneel behouden: retourlink (zie hieronder) en het blok over betalingen, ingekort en in je-vorm.
- [CHECK] Terugbetaling "binnen 14 dagen na je retourmelding" is strenger dan "na ontvangst en controle". Dat staat zo op de goede pagina, maar Lars bevestigt dat dit de bedoeling is.
- [CHECK] Het blok Betalingen (Mollie, betaalmethoden) staat niet op de goede NL-pagina en niet in het feitenbestand. Het is overgenomen van de oude live tekst; Lars bevestigt dat de lijst klopt, of schrapt het blok. PCI DSS-claim bewust weggelaten (juridische claim zonder bron in de vault).
- [CHECK] Kosten retourzending voor klant en uitsluiting gepersonaliseerde producten komen van de goede pagina; geen bron in het feitenbestand.

**Functionele onderdelen (apart)**
- Retourlink "Start je retour" naar `/pages/contact` (goede pagina). Live op de oude pagina verwees "hier" naar `https://myparcel.me/returns/create`; dat is nu de alternatieve route in de tekst.
- Contactgegevens info@higrip.nl en +31 6 24 56 65 47.
- Op `/policies/*` werkt alleen gewone tekst en links; de inhoudsopgave ("Op deze pagina") bestaat alleen op `/pages/*`.

---

## 3. EN-versie verzendbeleid
Voor https://www.higrip.nl/en/policies/shipping-policy en (na controle) https://www.higrip.nl/en/pages/verzendbeleid

```
Shipping policy

Shipping time
We ship every order within 1 business day. So you get your grip socks quickly and you're back on the court in no time.

Note: this shipping time does not apply to pre-orders. The delivery time for a pre-order is shown on the product page.

Shipping costs
Shipping costs €4.50 per order.
Orders of €35 and over ship free.
For now, we only deliver within the Netherlands.

Delivery
We use PostNL for reliable, fast delivery. As soon as your parcel is on its way, you get a tracking number so you can follow your order.

We process every order quickly and carefully, so it reaches you in perfect condition.

Questions about this policy?
Email info@higrip.nl or call +31 6 24 56 65 47.
```

**Wijzigingen t.o.v. live**
- Live EN-tekst was Nederlands (onvertaald, u-vorm, "vóór 16:00"); nu volledige Engelse tekst met 1 werkdag, €4,50 en €35.
- Op `/en/pages/verzendbeleid` was de inhoud ook Nederlands; dezelfde tekst kan daar in.
- "On the court" i.p.v. letterlijk "field": de NL-tekst zegt "veld" en de doelgroep is tennis/padel. [CHECK] houd "on the field" aan als Lars dat liever heeft.
- Vulzinnen geschrapt, "you" overal.

---

## 4. EN-versie retourbeleid
Voor https://www.higrip.nl/en/policies/refund-policy en https://www.higrip.nl/en/pages/retourbeleid

```
Return policy

How to return an order
1. Request your return within 30 days of receiving your order, using our contact form.
2. You get a return label, with instructions on how and where to send the parcel.
3. Send the parcel back. Keep the proof of postage for your return.
4. You get your money back within 14 days of your return request, including the shipping costs of your order.

Start your return: [Start your return](/en/pages/contact)

We don't accept items sent back without a return request. You can also return via MyParcel: https://myparcel.me/returns/create

Conditions
You can unpack and try the product the way you would in a shop. If it has been used more than needed to judge it, we may deduct the loss in value.
Personalised products (such as prints) cannot be returned.
You pay the cost of sending the item back.

Damaged or wrong item
Check your order as soon as it arrives. Is the product damaged, or did you get the wrong item? Contact us right away and we'll sort it out.

Payments
All payments go through Mollie. You can pay with iDEAL (Netherlands only), credit card (Visa, Mastercard, American Express), Klarna, Bancontact and Apple Pay. [CHECK]

Questions about this policy?
Email info@higrip.nl or call +31 6 24 56 65 47.
```

**Wijzigingen t.o.v. live**
- Live EN-refund-tekst: 14 dagen, "unopened", 25% restocking; nu 30 dagen, geen ongeopend-eis, geen herbevoorradingskosten.
- Terugbetaling zoals op de goede NL-pagina (14 dagen na retourmelding, incl. verzendkosten).
- `/en/pages/retourbeleid` was onvertaald (Nederlands); dezelfde tekst kan daar in.
- Retourlink verwijst naar `/en/pages/contact` (de EN-variant van de contactlink, zoals de EN-pagina die nu al gebruikt voor het contactformulier). Op de huidige EN-pagina wijst "Start je retour" nog naar `/pages/contact` (NL); dat hoort ook `/en/pages/contact` te zijn.
- Zelfde [CHECK]-punten als bij NL (terugbetaalmoment, blok Betalingen).

---

## Plakinstructie voor Lars

**Let op: ik heb dit niet in Shopify kunnen controleren. Waar ik het niet zeker weet, staat dat erbij.**

1. **NL `/policies/shipping-policy` en `/policies/refund-policy`:** Shopify admin, Instellingen, Beleid (Settings > Policies). Plak tekst 1 bij Verzendbeleid en tekst 2 bij Terugbetalingsbeleid. Let op: de tekst met stappen 1 tot 4 en kopjes kan de rich text-editor anders opmaken; kijk na het opslaan op de live pagina.
2. **EN `/en/policies/*`:** zeker weet ik het niet. Meest waarschijnlijk via de app Translate & Adapt (of de vertaal-app die je gebruikt) onder Vertalingen (Shopify admin, Instellingen, Talen, Vertalingen beheren, taal English, beleid). Zoek bij beleidsteksten naar "Shipping policy" en "Refund policy" en plak tekst 3 en 4.
3. **EN `/en/pages/verzendbeleid` en `/en/pages/retourbeleid`:** dit zijn pagina's, geen beleid. Ik weet niet of ze in de Vertalingen-app of in Translate & Adapt staan. Open dezelfde app, kies Pagina's, taal English, en vervang de Nederlandse tekst door tekst 3 en 4. Als de tekst in een Section Store of theme-sectie staat (de NL-pagina heeft een inhoudsopgave en stappenblok), moet de vertaling mogelijk in de theme-vertalingen staan. Dan eerst kijken of de Design Agent dit moet doen.
4. Na plakken: alle [CHECK]-markeringen weghalen, vier URL's openen, en cijfers controleren (€4,50, €35, 1 werkdag, 30 dagen).
5. Daarna: Feiten & Actuele Staat bijwerken (conflict opgelost) en pas daarna `shippingDetails` / `hasMerchantReturnPolicy` aan (SEO Agent).
