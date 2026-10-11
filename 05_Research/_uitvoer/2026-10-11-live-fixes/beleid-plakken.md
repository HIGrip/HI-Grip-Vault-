# Beleidsteksten om te plakken — 11-10-2026

Waarom plakken: de Shopify-koppeling van Claude mist het recht `write_legal_policies`, en de Shopify CLI kan geen beleid wijzigen. Plakken duurt een paar minuten.

**Waar:** Shopify-admin → Instellingen → Beleid. Per blok: klik het beleid, zet de editor op HTML (`<>`-knop), vervang alles, Opslaan.
**Terugzetten kan:** de oude teksten staan in `backup/policies-voor-11-10.md`.

Waarden uit het feitenbestand: verzendkosten €4,50, gratis vanaf €35, binnen 1 werkdag verzonden, 30 dagen retour. "Ongeopend" en 25% herbevoorradingskosten zijn geschrapt (zie de wettelijke toelichting onderaan).

---

## 1. Terugbetalingsbeleid (Refund policy)

```html
<h2>Retourbeleid</h2>
<p>We hopen dat je <strong>performance</strong> naar het hoogste niveau gaat met je aankoop bij HÏ Grip. Is het product toch niet helemaal wat je verwachtte? Geen probleem: je kunt je bestelling binnen <strong>30 dagen na ontvangst</strong> retourneren, zonder opgave van reden.</p>
<h3>Voorwaarden voor retour</h3>
<ul>
<li>Je meldt je retour aan binnen 30 dagen na ontvangst van je bestelling.</li>
<li>Je mag het product uitpakken en bekijken zoals je dat in een winkel zou doen. Is het product meer gebruikt dan nodig was om het te beoordelen, dan mogen we de waardevermindering verrekenen.</li>
<li>Gepersonaliseerde producten (zoals bedrukkingen) kun je niet retourneren.</li>
<li>De kosten van het terugsturen zijn voor jouw rekening. Bewaar het verzendbewijs van je retourzending.</li>
</ul>
<h3>Klik <a href="https://myparcel.me/returns/create" title="hier"><em>hier</em></a> om je retour te starten</h3>
<p>Na je aanmelding ontvang je een retourlabel met instructies over hoe en waar je het pakket naartoe stuurt. Artikelen die zonder aanmelding worden teruggestuurd, kunnen we niet verwerken.</p>
<p>Je kunt je retour ook melden met het modelformulier voor herroeping hieronder: kopieer het in een mail naar <a href="mailto:info@higrip.nl">info@higrip.nl</a>.</p>
<h3>Modelformulier voor herroeping</h3>
<p>Aan: HÏ Grip, IJsseldijk-Noord 48, 2935 BH Ouderkerk aan den IJssel, info@higrip.nl<br>
Ik deel u hierbij mede dat ik onze overeenkomst betreffende de verkoop van de volgende producten herroep: [product]<br>
Besteld op / ontvangen op: [datum]<br>
Bestelnummer: [nummer]<br>
Naam: [naam]<br>
Adres: [adres]<br>
Datum: [datum]</p>
<p><strong>Schade en problemen</strong><br>Controleer je bestelling bij ontvangst en neem direct contact met ons op als het product beschadigd is of als je het verkeerde artikel hebt ontvangen. Team HÏ Grip lost het graag voor je op.</p>
<h3>Wanneer krijg ik mijn geld terug?</h3>
<p>Binnen <strong>14 dagen</strong> nadat je je retour hebt aangemeld, betalen we het aankoopbedrag terug, inclusief de verzendkosten die je bij je bestelling hebt betaald (de standaardverzending). We mogen wachten met terugbetalen tot we het product hebben ontvangen of tot je kunt aantonen dat je het hebt teruggestuurd.</p>
<h2>Betalingsbeleid</h2>
<p>Bij HÏ Grip verwerken we alle betalingen via <strong>Mollie</strong>, een betrouwbare en veilige betalingsprovider. We accepteren de volgende betaalmethoden:</p>
<ul>
<li><strong>iDEAL</strong> – direct en gemakkelijk betalen via je eigen bank (alleen in Nederland).</li>
<li><strong>Creditcard</strong> – de gangbare creditcards zoals Visa, Mastercard en American Express.</li>
<li><strong>Klarna</strong> – achteraf of in termijnen betalen, afhankelijk van de mogelijkheden die Klarna in jouw land biedt.</li>
<li><strong>Bancontact</strong> – een populaire betaalmethode in België voor snelle en veilige betalingen.</li>
<li><strong>Apple Pay</strong> – eenvoudig en veilig betalen met Apple.</li>
</ul>
<p>Mollie voldoet aan de hoogste veiligheidsstandaarden en is gecertificeerd volgens de <strong>Payment Card Industry Data Security Standard (PCI DSS)</strong>. Je betalingen zijn dus altijd veilig en beschermd.</p>
<p><strong>Team HÏ Grip</strong> staat voor je klaar. Vragen over retourneren, annuleren of betalen? Mail ons via <strong><a href="mailto:info@higrip.nl">info@higrip.nl</a></strong>.</p>
```

## 2. Verzendbeleid (Shipping policy)

```html
<p>Bij HÏ Grip wil je zo snel mogelijk spelen. Daarom wordt elke bestelling <strong>binnen 1 werkdag verzonden</strong> via PostNL*. Zodra je pakket onderweg is, ontvang je een trackingnummer waarmee je je bestelling kunt volgen.</p>
<h3>Verzendkosten</h3>
<ul>
<li><strong>€4,50</strong> per bestelling</li>
<li><strong>Gratis verzending</strong> vanaf €35</li>
</ul>
<p>We kiezen voor PostNL vanwege de betrouwbare en snelle bezorging. Elke bestelling wordt zorgvuldig verwerkt, zodat hij snel en in perfecte staat bij je aankomt.</p>
<p>Vragen? Mail of bel ons, Team HÏ Grip staat voor je klaar.</p>
<p><em>* Let op: deze verzendtijd geldt niet voor pre-orders. Bij een pre-order staat de levertijd bij het product.</em></p>
```

## 3. Algemene voorwaarden — alleen artikel 4 en 6 vervangen

Zoek in de HTML de blokken "Artikel 4" en "Artikel 6" en vervang alleen de `<ol>…</ol>` eronder.

Artikel 4 – Bestelling en levering:
```html
<ol>
<li><span>Bestellingen worden, mits op voorraad, binnen 1 werkdag verzonden (werkdagen zijn maandag t/m vrijdag).</span></li>
<li><span>Levering vindt vooralsnog uitsluitend plaats binnen Nederland.</span></li>
<li><span>De verzendkosten bedragen €4,50 per bestelling. Bij bestellingen vanaf €35 is de verzending gratis.</span></li>
<li><span>Bij pre-orders geldt een afwijkende levertijd die per product wordt vermeld.</span></li>
</ol>
```

Artikel 6 – Herroepingsrecht:
```html
<ol>
<li><span>De consument kan de overeenkomst binnen 30 dagen na ontvangst van het product zonder opgave van redenen ontbinden. Deze termijn is ruimer dan de wettelijke bedenktijd van 14 dagen.</span></li>
<li><span>De termijn verstrijkt 30 dagen na de dag waarop de consument, of een door hem aangewezen derde, het product heeft ontvangen.</span></li>
<li><span>Tijdens deze termijn gaat de consument zorgvuldig om met het product en de verpakking. Het product mag slechts in die mate worden uitgepakt of gebruikt voor zover dat nodig is om de aard, kenmerken en werking vast te stellen. Bij verder gebruik is de consument aansprakelijk voor de waardevermindering.</span></li>
<li><span>Uitzondering: gepersonaliseerde producten (zoals bedrukkingen) zijn uitgesloten van het herroepingsrecht.</span></li>
<li><span>De kosten voor het retourneren zijn voor rekening van de consument.</span></li>
<li><span>HÏ Grip betaalt binnen 14 dagen na de melding van de herroeping alle betalingen terug, inclusief de kosten van de standaardlevering. HÏ Grip mag wachten met terugbetalen tot het product is ontvangen of tot de consument aantoont dat het is teruggezonden.</span></li>
<li><span>De consument kan de herroeping melden via info@higrip.nl, via het retourportaal of met het modelformulier voor herroeping in het retourbeleid.</span></li>
</ol>
```

---

## Wettelijke toelichting (geen juridisch advies)

| Punt | Regel (Burgerlijk Wetboek) | In de nieuwe tekst |
|---|---|---|
| Bedenktijd | Minimaal 14 dagen na ontvangst (art. 6:230o). Langer mag. | 30 dagen, met de vermelding dat dit ruimer is dan de wet |
| "Alleen ongeopend" | Mag niet: de klant mag het product hanteren zoals in een winkel (art. 6:230s lid 3) | Geschrapt; alleen waardevermindering bij meer gebruik |
| 25% herbevoorradingskosten | Mag niet: alleen de directe retourkosten en eventuele waardevermindering mogen bij de klant (art. 6:230s) | Geschrapt |
| Terugbetaling | Binnen 14 dagen na de melding, inclusief de standaard heenverzending; wachten tot ontvangst of bewijs van terugzending mag (art. 6:230r) | Opgenomen |
| Retourkosten bij de klant | Mag, als je het vooraf duidelijk vermeldt (art. 6:230s lid 2) | Staat in beleid en voorwaarden |
| Gepersonaliseerde producten | Uitzondering toegestaan (art. 6:230p) | Opgenomen |
| Modelformulier voor herroeping | Moet je aanbieden (art. 6:230m) | Toegevoegd in het retourbeleid |

Nog open, niet in deze wijziging: artikel 8 van de algemene voorwaarden noemt een garantie van 1 maand. Naast de wettelijke conformiteit (in de praktijk minstens 2 jaar redelijke verwachting) is dat misleidend (Compliance To-Do §4.3). Advies: laat de voorwaarden één keer juridisch toetsen (bijv. via een keurmerk of jurist).
