---
type: ontwerpoplevering
gebied: design-agent
datum: 2026-11-20
status: voorstel, niet verzonden, niet onafhankelijk getoetst (review door subagent op hetzelfde model)
---

# VOORSTEL: E5 'Dubbel' (early access is live)

Bestanden staan in de map `mail-e5-dubbel` onder Downloads > HI-Grip-early-access-mails (lokaal, niet in de vault). Niets verstuurd, geüpload of gepubliceerd. Werkwijze en valkuilen: skill higrip-email-design-build.

## Concept in één zin
Zwarte wereld, kop als beeld, één uitgeknipte voetballer met een zachte Volt speed-trail (1+1: jij en je echo), een wit code-ticket, drie donkere dealkaarten met oplopend aantal sokken en een slot met twee grote sokken: zichtbaar anders dan e4c (beige papier, zwarte kaart, stilstaand packshot).

## Bestanden (in mail-e5-dubbel)
- `mail-e5-dubbel.html`, `assets/` (hero, slot, 3 dealtegels, barcode), `bron/` (bouwscripts).
- Screenshots: `e5-desktop.png` (mail 600 px op 800 px pagina, 2x), `e5-mobiel.png` (390 px, 2x), plus `-overzicht.png` (2 kolommen). Alle rondes in `shots/` (r1 t/m r10).

## Cijfers laatste review (ronde 9, 1-10)
Niveau 7, eigenheid 8, art-direction 7, typografie 8, focus 7, mobiel 8, leerregels 8, sport eerste seconde 8. Doel was overal 8+: niveau, art-direction en focus staan op 7. Na deze review is nog één aanpassing gedaan (afgesneden 'HÏ GR'-tekst op de sokken in het slot weggehaald); die is niet opnieuw door de reviewer beoordeeld, wel door Denzel bekeken. Verloop: ronde 2 6/8/6/6/7/7/7/8; ronde 5 7/7/7/6/8/7/6/8; ronde 7 7/7/7/7/8/8/7/8.

## Wat nog zwakker is
- Hero-uitsnede: dunne Volt-outline en lichte korrel bij hoofd en rug. Bal bewust onscherp (leesbaar ander merk op de bal).
- Dealkaarten: op desktop blijft de rechterhelft deels leeg.
- Slotbeeld is een rechthoek met een iets zichtbare rand tegen de zwarte pagina.
- Ticket links zwaarder dan rechts.

## Aannames (niet in Feiten & Actuele Staat)
1. Performance Days, 1+1 / 3+3 / 5+5, 2/6/10 paar, prijzen (2.0 €17,95; 1.0 €14,95; 3x en 5x uitgerekend), verzending €4,50 en gratis verzending, "woensdag 25 november mag iedereen bestellen" en "twee dagen eerder" komen uit de e4-mails en Lars' eigen prompt. De vault-briefing noemt 1+1 anders (2 kopen = 2 gratis; 3 kopen = 3 gratis). Het ene bestand zegt "twee dagen eerder", het andere "vier dagen eerder". Lars beslist.
2. De sokken op de dealtegels zijn illustratief (1, 2, 3 stuks); het aantal in beeld klopt niet per se met 2/6/10 paar.

## Niet gecontroleerd
- Outlook, Gmail (ook donkere modus), Apple Mail: alleen Chrome-render. Hero en slot zijn afbeeldingen met de kop erin (alt-tekst aanwezig); bij geblokkeerde beelden verdwijnt de kop.
- Merge-tags `{{ discount_code }}` en `{{ unsubscribe_url }}` en de knoplink `[URL PERFORMANCE DAYS]` (met UTM) zijn niet bevestigd voor SendWILL.
- Beeldgewicht totaal ongeveer 0,8 MB: boven de eerdere richtlijn van 600 KB.
- Persoon op de hero: voetbalbeeld sport-voetbal-2000 uit de e-mailmap src/cut (bron: Drive Content - HÏ Grip > Sporten > VOETBAL). Toestemming niet gecontroleerd.
- Merklogo's van andere merken: bal weggeblurd; schoenen en sokken op deze resolutie niet leesbaar gemerkt, maar niet 100% uit te sluiten: hero op 100% bekijken voor verzending.
- De reviewer is een subagent op hetzelfde model als de maker: geen volledig onafhankelijke review. Hij opende niet alle crops en niet alle referenties (ref-frzn-1 en ref-dore niet).

## Wat Lars invult of beslist
Deal en data bevestigen, knoplink invullen, merge-tags bevestigen, bedrijfsgegevens in de footer, toestemming voor de foto, welke versie hij wil.
