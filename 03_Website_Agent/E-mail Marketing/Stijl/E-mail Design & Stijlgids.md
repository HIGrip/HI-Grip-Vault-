# E-mail Design & Stijlgids — HÏ Grip

> Vastgelegd 2026-09-14. Elke nieuwe e-mail moet qua stijl aansluiten bij de 5 eerder gemaakte e-mailontwerpen — zie [[E-mail Mailflows Artifact]] voor het overzicht/de links.
>
> **[LARS]** De productie-HTML van die 5 ontwerpen zelf stond alleen in een tijdelijke scratchpad en is niet bewaard in de vault — alleen het artifact-overzicht is er nog. Voor een nieuwe e-mail moet het artifact (of de export daarvan) eerst opnieuw geraadpleegd/opgehaald worden als stijlbron; onderstaande punten zijn de losse ontwerpregels die daarbij wél al vastliggen.

---

## Visueel systeem (uit de iteratieronde van 2026-08-25, definitief bevestigd)

- **Accentkleuren zijn pop-kleuren op een donkere/neutrale ondergrond, nooit vulkleuren.** Een volledig verzadigd lime- of oranje-vlak (half de mail) oogde goedkoop/onvolwassen en is expliciet afgekeurd — de kleuren werken als glow, headline-woord, knop, badge-dot of codetekst, nooit als dominante achtergrond van een hele sectie.
- **Herbruikbare signature-elementen** (niet opnieuw verzinnen):
  - **Ticket-stub coupon-card** — de kortingscode in een "afgescheurd ticket"-vorm: effen accentkleur-tab met een "%"-glyph, gestippelde verticale scheidingslijn, code op een donkere kaart.
  - **Grip-dot micro-textuur** — zeer lage-opacity stippenpatroon (`radial-gradient(circle, rgba(255,255,255,.05) 1px, transparent 1.3px)`, ~15px tegel) onder de accent-glow in elke donkere hero — verwijst naar het echte grippatroon op de zool.
  - **Dark-hero/radial-glow/dot-eyebrow-pill-systeem** als basisopmaak voor de meeste mails.
- **Skeleton per e-mail bepalen vóór kleur/detail** — de fout die eerder werd afgekeurd was hetzelfde skelet (foto boven, donkere hero eronder) 3x hergebruiken met alleen een andere kleur. Beslis eerst structuur (welke secties, in welke volgorde, licht/donker, foto/typografisch) per e-mail, dán pas kleur.
- **Kortingscode-ontvangen (definitief):** volledige-breedte foto als CSS-achtergrond in de hero (donkere lineaire-gradient-scrim erover, licht boven → bijna zwart onder) + de accent-glow erbovenop, tekst/ticket-stub-kaart direct op de foto — niet naast een smalle side-column-foto (werkte niet, te smal/onbalans).
- **Herinnering-mail (definitief):** volledig donker, foto-vrij (bewust typografisch), één groot (~52px) typografisch moment op de verloopdatum, scherpe (niet afgeronde) codebox zodat het als gestempeld document leest, logo in een klein wit rond "muntje"-badge voor leesbaarheid op zwart.
- **Foto-resolutie bepaalt of iets full-bleed-achtergrond kan worden** — check de native breedte vóór een foto als hero-achtergrond gekozen wordt: een ~536px-breed beeld kan mild opgeschaald worden (~1,12x) en blijft scherp, een ~220px-breed beeld (bv. de staande sok-closeup) wordt bij ~2,7x zichtbaar wazig.
- **Nooit dezelfde base64-foto dubbel embedden** (zowel in een legacy `background="..."`-HTML-attribuut als in de CSS `background-image`) — verdubbelt het bestand zonder enig voordeel, want beide zitten al in dezelfde `[if !mso]`-conditional.

## Vaste ontwerpregels (uit eerdere e-mailbouw)

- **Donkere hero blijft de standaard** — bewuste keuze, sluit aan bij de merkidentiteit. Alleen in nieuwe Outlook mét dark theme (kleine minderheid) is er een leesbaarheidsissue, niet oplosbaar via CSS — geaccepteerd als edge case, dus dit is geen reden om het ontwerp aan te passen.
- **Gmail dark-mode CSS-hooks gecombineerd houden**: `.foo, [data-ogsc] .foo, [data-ogsb] .foo` moet als **één** CSS-regel blijven staan. Los splitsen draaide Gmail's kleuren eerder om (zwart/wit verwisseld).
- **Geen nep-countdown/nep-mechanismen** — een statisch (merge-tag-)element mag nooit de visuele grammatica krijgen van een live klok/countdown/mechanisme als het dat niet daadwerkelijk is (bv. een groot cijfer dat er als aflopende klok uitziet, maar bij later openen niet meer klopt). Geldt voor elke e-mail, niet alleen kortingsacties.

## Merk-stijl (bron: Brand Core, hetzelfde brandbook als de rest van de site)

> De e-mailontwerpen tot nu toe (dark-hero/radial-glow-systeem) zijn in de praktijk ontstaan, los van het onderstaande brandbook. Ze komen grotendeels overeen met de brandbook-regels (donker, accent als glow niet als vulling, performance-gevoel), maar zijn er nooit expliciet naast gelegd — bij een volgende ontwerpronde dit wél doen, met name het halftone-raster en de iconenset hieronder zijn nog niet gebruikt in e-mail.

- Merknaam altijd **HÏ Grip** (umlaut), nooit "HI Grip"/"Hi Grip"
- **Merkverhaal/missie/visie/waarden:** [[Brand Identity Overview]] — de kern-driehoek **comfort · vertrouwen · innovatie** hoort in elk ontwerp herkenbaar terug te komen, ook in e-mail
- **Toon:** energiek, direct, zelfverzekerd, geen corporate taal — [[Brand Voice & Tone of Voice]]
- **Kleuren/logo/typografie:** [[Logo & Kleurenpalet]]
- **De 5 designprincipes** (elk ontwerp hierop toetsen — [[Design Elementen]]): 01 Performance (scherp, in beweging, nooit statisch), 02 Whitespace (genoeg lucht), 03 Emoties, 04 Branding (de driehoek), 05 Stijl (volwassen/sportief/energiek, grid patterns als handtekening)
- **Halftone-raster** (het grid van de sok als dots — de merk-handtekening): max. 1 rasterelement per uiting, wit-op-zwart is standaard, dotafstand nooit ongelijk oprekken — zie [[Design Elementen]]. Nog niet toegepast in de bestaande e-mails; kandidaat voor een volgende iteratie i.p.v. alleen de radial-glow
- **Fotografie:** sportieve, dynamische angles, hard gericht licht, macro-detail op grip/mesh, cinematisch hoog contrast — nooit vlak studiolicht, geen stockfoto-poses, geen wit-tafel-productshots — [[Fotografie & Art-Direction]]
- **Iconografie:** witte line-art op zwart, gelijke stroke, **outline is de standaard variant** (fill/motion/triangle alleen voor gerichte nadruk) — de webshop-categorie (11 iconen: performance/comfort/verzending/vinkje/kruisje) is het meest relevant voor e-mail-USP-balken — [[Iconografie]]
- **Audio/geur** ([[Brand Symbolen]]) — niet relevant voor statische e-mail, wel voor eventuele video-content in een mail
- Caption/copy-stijl (geen AI-hypetaal, geen geforceerde CTA's, kort/feitelijk/rustig) geldt ook voor e-mailcopy

## Werkwijze bij een nieuwe e-mail

1. Eerst het bestaande artifact ([[E-mail Mailflows Artifact]]) raadplegen voor de stijl (layout, kleurgebruik, blokopbouw) — nooit een nieuwe stijl verzinnen los daarvan.
2. Content komt uit [[E-mail Lijst Strategie]] (welke flow/pijler) en, bij een relationele mail, uit de bijbehorende blogpost (zie [[Conversie Optimalisatie Checklist]] § Blog-structuur & content).
3. CSS-regels hierboven altijd toepassen (Gmail-hooks gecombineerd, geen nep-countdown).
4. Dynamische velden (productlink, prijs, kortingscode e.d.) als merge-tag/variabele opnemen, nooit hardcoded — zie [[E-mail Verzending & Techniek]] voor het verzendplatform (SendWILL) en welke variabelen al bekend zijn.
5. Nooit zelf versturen — output is een voorstel, zie de autonomie-tabel bij de sub-agent in identiteit.md van Website Agent.

---

## Gerelateerde bestanden

- [[E-mail Mailflows Artifact]]
- [[E-mail Lijst Strategie]]
- [[E-mail Marketing Benchmarks]]
- [[Brand Identity Overview]]
- [[Brand Voice & Tone of Voice]]
- [[Logo & Kleurenpalet]]
- [[Design Elementen]]
- [[Fotografie & Art-Direction]]
- [[Iconografie]]
- [[Brand Symbolen]]
