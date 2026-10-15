---
type: kennis
gebied: website-agent
bijgewerkt: 2026-10-15
status: voorstel (wacht op akkoord van Lars)
---

# E-mail Review-verzoek Template — HÏ Grip

> Concept van de E-mail Marketing Agent via Denzel, 15-10-2026. **Voorstel, nooit zelf verzenden.** HTML: [[E-mail Review-verzoek Template.html]] (zelfde map). Past in de post-aankoop-flow uit [[E-mail Lijst Strategie]]: bedankmail, verzorgingstips, **review-verzoek**. Stijl volgt [[E-mail Design & Stijlgids]] en de Brand Core van 30-9-2026.

## Onderwerp (kies één, of A/B)

- A: Hoe presteren je sokken, {{first_name}}?
- B: 30 seconden voor de volgende sporter
- C: Jouw ervaring telt, {{first_name}}

**Preheader:** 30 seconden van je tijd. Jouw ervaring helpt de volgende sporter kiezen.

## Merge-tags

| Tag | Inhoud |
|---|---|
| `{{first_name}}` | voornaam |
| `{{product_name}}` | gekocht product |
| `{{review_url}}` | persoonlijke link naar het reviewplatform |
| `{{hero_image_url}}` | actiefoto 1200x740 op de CDN (sok + logo zichtbaar) |
| `{{shop_url}}` `{{instagram_url}}` `{{tiktok_url}}` `{{shop_address}}` `{{unsubscribe_url}}` | footer |

Syntax is overgenomen uit de bestaande mailflows en **nog niet bevestigd voor SendWILL** (zie [[E-mail Verzending & Techniek]]).

## Keuzes en waarom

- **CTA is wit op zwart met chevron, niet Volt-gevuld.** Design Elementen (leidend sinds 30-9) zegt "nooit gevuld met accentkleur". De oude review-mail uit het Mailflows Artifact had een Volt-knop; die is hier aangepast.
- **Koppen in Poppins Black Italic, hoofdletters; labels in SemiBold met ruime tracking**, volgens [[Logo & Kleurenpalet]].
- **Eén accentkleur (Volt)** als glow op zwart, één rasterelement (grip-dot textuur).
- **Quote-mark** voor het waarom-blok, **3500+ sporters** (Feiten, besluit 11-10-2026; de oude mail had 1.000+).
- **Merk-driehoek** (comfort, vertrouwen, innovatie) zichtbaar aan het eind.
- **Geen gedachtestreepjes** in de mailtekst.
- **Geen beloning of korting voor een review.** Reviewplatformen verbieden meestal incentives; die regel is niet in de vault vastgelegd, controleer de voorwaarden van het gekozen platform.
- De support-regel ("mail ons op info@higrip.nl") staat bij **iedereen**, de reviewknop ook. Geen selectie op tevreden klanten.

## Open punten voor Lars

1. **Welk platform?** Feiten noemt Trustpilot (4,6 ★) en "geen reviewapp op de site". `{{review_url}}` moet naar één plek wijzen.
2. **Timing:** advies ongeveer 10 dagen na bezorging, zodat de sok daadwerkelijk gedragen is. Niet vastgelegd in de vault.
3. **Actiefoto:** de huidige foto komt uit het Mailflows Artifact (base64). Voor productie op de CDN zetten en `{{hero_image_url}}` vullen.
4. **Merge-tag-syntax** SendWILL bevestigen en **UTM's** (`utm_source=email`, `utm_medium=email`, `utm_campaign=review`) op `{{review_url}}`.
5. **Productnaam in de kop:** komt de tag als "PERFORMANCE GRIP SOCKS" of "PERFORMANCE GRIPSOKKEN"? Communicatie gebruikt de eerste, de webshop de tweede.
6. **Niet getest** in echte mailclients (Gmail dark mode, Outlook). Alleen gerenderd in Chrome.
