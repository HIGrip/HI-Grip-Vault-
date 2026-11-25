---
type: voorstel
gebied: website-agent
status: voorstel, niet in Shopify gezet
bijgewerkt: 2026-11-24
---

# Orderbevestiging

> Map: [[E-mail Marketing]]

Opdracht: [[2026-11-24-orderbevestiging-drie-opties-prompt]]. Gekozen: **optie D "Statusbalk"** (25-11-2026, akkoord Lars). Opties A tot en met C hieronder zijn afgewezen ("allemaal slecht") en blijven alleen als archief.

## Optie D: Statusbalk (gekozen)

Bestand: `optie-d-statusbalk.html`, gegenereerd door `_build/bouw_d.py` (beelden: `_build/beelden_d.py`). Pas de bouwers aan en draai ze; bewerk de HTML niet met de hand. Plakken: Shopify > Instellingen > Meldingen > Orderbevestiging > Code bewerken. De HTML is door Lars in Shopify gezet.

Opbouw: logo, titel "JE BESTELLING IS BEVESTIGD.", introzin, statusbalk (Bevestigd, Verzonden, Bezorgd; bij afhalen Klaar, Opgehaald; bij lokale levering Onderweg), knop "Bekijk je bestelling", paneel met begroeting (voornaam vet), bestelnummer, artikelen en totalen, paneel met overzicht en compacte adressen, persoonlijke noot van Lars Cretz (co-founder) met Instagram-knop, servicebalk (1 werkdag verzonden, 30 dagen retour, vragen), footer.

**Donkere modus (belangrijkste les).** De Gmail-app op iPhone keert in donkere modus alle kleuren om, ook donkere achtergronden; met CSS is dat niet uit te zetten. Afbeeldingen worden niet omgekeerd. Daarom:
- Alles wat vast is, is een JPG (geen PNG: Gmail kan daar een filter over leggen): logo, titel, intro, statusbalk, knoppen, noot, servicebalk, footer. Elk beeld is aanklikbaar waar het een link was.
- De achtergrond is een afbeelding (`higrip-orderbev-achtergrond.jpg`) op body en buitenste tabel.
- Alleen de twee panelen met ordergegevens zijn tekst. Die mogen in de Gmail-app wit worden; daarom staat er in de panelen alleen wit en grijs, geen Volt (ook het totaal is wit).
- Verder dezelfde opzet als de SendWILL-mails: `color-scheme: light` en per kleur één regel `.x, [data-ogsc] .x, [data-ogsb] .x`.
- Bronnen: courier.com/blog/dark-mode-email-design, emailens.dev/blog/dark-mode-email-guide, campaignmonitor.com/resources/guides/dark-mode-in-email.

**Beelden in Shopify Bestanden. Niet verwijderen of hernoemen, anders worden de vakken leeg:** `HI_GRIP_logo_-removebg-preview_1.png` (bestond al) en alle `higrip-orderbev-*.jpg` (22 stuks: achtergrond, logo, titel, intro-{verzending,afhalen,lokaal}, status-{verzending,afhalen,lokaal}, knop-{bestelling,instagram}, notitie, usp-{verzending,retour,vragen}, link-{verzending,retour,bestelling,mail,instagram,site}, voet). Bronbestanden staan in `assets/`. Tekst in een beeld wijzigen: pas `beelden_d.py` aan, draai het en upload het beeld opnieuw onder dezelfde naam.

Ook geüpload maar niet meer gebruikt: `higrip-orderbev-check.png`.

**Getest:** lokaal met drie testorders (korting, België, afhalen) en een kale order zonder bezorggegevens; desktop en mobiel zonder horizontale scroll; alle beelden laden vanaf de Shopify-CDN. In de echte mailapp in donkere modus bekeken door Lars: akkoord. Niet getest: Outlook voor Windows.

**Open:** TikTok-link (URL staat niet in de vault).

---

## Archief: opties A tot en met C

Voorstel voor Shopify > Instellingen > Meldingen > Orderbevestiging.

| Bestand | Skelet | Waarom dit skelet | Werkt het best als |
|---|---|---|---|
| `optie-a-bonnetje.html` | Wit en typografisch: grote titel, gestippelde bon met kleine thumbnails, bezorging en betaling in twee kolommen, knop, zwart merkblok onderaan | Een bonnetje leest het snelst als er niets anders om aandacht vraagt | je de rustigste, meest zakelijke bon wilt die overal goed rendert |
| `optie-b-dark-hero.html` | Zwarte hero met Volt-glow, grip-dots en status-pill, knop in de hero, witte bonkaart op zwart, zwarte footer | Sluit aan op het bestaande dark-hero-systeem, zodat de bon in de familie van de andere mails valt | je merkherkenning boven rust zet |
| `optie-c-raster.html` | Zwarte kop met één halftone raster-grid, meta-strook (bestelling, datum, artikelen), grote productfoto's in een 2-koloms grid, bezorging en totalen naast elkaar | Gebruikt het raster als signature, zoals de stijlgids voor de volgende iteratie voorstelt; het product krijgt de ruimte | het product de hoofdrol moet krijgen en je de nieuwe richting wilt testen |

Plakken in Shopify: kopieer de volledige inhoud van één `optie-*.html` naar de code van de melding. De bestanden worden gegenereerd door `_build/bouw.py`: pas `bouw.py` aan en draai `python bouw.py`, niet de HTML zelf.

## Feiten en bron

| Feit in de mail | Bron |
|---|---|
| Binnen 1 werkdag verzonden (alleen bij verzending, niet bij afhalen of lokale levering) | `00_Brand_Core/Feiten & Actuele Staat.md`, tabel Verzending en retour |
| 30 dagen retour, link `/pages/retourbeleid` | idem |
| Link `/pages/verzendbeleid` | idem |
| Tagline "Ga door waar anderen stoppen." | `CLAUDE.md` (merk) en de opdracht |
| info@higrip.nl | `~/.claude/CLAUDE.md` (contact) |
| Instagram `https://www.instagram.com/higrip.nl/` | opdracht (handle `@higrip.nl` in CLAUDE.md) |
| Kleuren `#0A0A0A`, `#FFFFFF`, Onyx `#111111`, Carbon Black `#1A1A1A`, Titanium `#909194` (alleen op zwart), Volt `#CCFF00` | `07_Design_Agent/Logo & Kleurenpalet.md` |
| Volt als accent: hoofdaccent voor alles wat niet aan één sport hangt | idem ("Volt is het hoofdaccent voor alles wat niet aan één sport hangt") |
| Max. 1 rasterelement | `07_Design_Agent/Design Elementen.md` |
| Logo minimaal 24 px; op zwart in een wit "muntje" | `Logo & Kleurenpalet.md`, `E-mail Design & Stijlgids.md` |

Bewust niet in de mail: sportersaantal, grip-claims, reviews, sterren. Een bon verkoopt niet.

## Open punten [CHECK]

- **TikTok-URL** staat niet in de vault. Weggelaten; er staat een Liquid-commentaar op de plek in de footer.
- **`shop.email` en `shop.address`** staan niet in Shopify's lijst met notificatievariabelen (help.shopify.com, *Email notification variables*, gecontroleerd op 24-11-2026). Daarom staat info@higrip.nl als vaste tekst. **Het bedrijfsadres staat niet in de vault**, dus er staat geen adres in de footer. Aanvullen als Lars het adres vastlegt in het feitenbestand.
- **Eyebrow-pill in optie B**: de opdracht vraagt erom, maar `WORKFLOW-Email` §3 zegt "geen eyebrows". Ik heb hem in B laten staan als status ("Bevestigd · datum") en in A en C weggelaten. Lars beslist.
- **Titel van de bundelkorting**: de packs zijn Section Store-volumekortingen (gecontroleerd via Section Store, 3 actieve bundels: 1-, 3- en 5-pack met vaste prijs). Ze komen binnen als één regel met aantal 3 of 5 en een automatische korting. De mail toont dat op de regel ("Aantal 3", korting met titel en bedrag). Welke titel Shopify dan meegeeft (de dealtitel of de appnaam) is pas te zien met een echte testorder.
- **Kopgewicht**: het palet noemt koppen in Poppins Black in hoofdletters; hier staat 800 in zinshoofdletters, omdat een bon rustig moet blijven. Kan in één regel worden omgezet.

## Gebruikte Liquid-variabelen

Gecontroleerd tegen help.shopify.com *Email notification variables* (orderbevestiging) en shopify.dev, Liquid-object `transaction`.

`name`, `created_at` (met `date`), `subtotal_line_items`, `line.product.title`, `line.title`, `line.variant.title`, `line.quantity`, `line.image` (met `img_url`), `line.original_line_price`, `line.final_line_price`, `line.discount_allocations` → `discount_allocation.amount`, `discount_application.title`, `discount_application.target_selection`, `line.groups` → `display_title`, `discount_applications` → `.type`, `.title`, `subtotal_price`, `shipping_price`, `tax_price`, `total_price`, `item_count` (alleen C), `shipping_address` (met `format_address`), `shipping_address.first_name`, `billing_address.first_name`, `shipping_method.title`, `delivery_agreements` → `delivery_method_type`, `delivery_instructions`, `transactions` → `kind`, `status`, `gateway_display_name`, `payment_details.credit_card_last_four_digits`, `order_status_url`.

Rekenlogica: Subtotaal = som van `final_line_price` (na packkorting). Korting = Subtotaal min `subtotal_price` (alleen orderkorting, met code(s) erbij), zodat de packkorting niet twee keer telt. Verzending "Gratis" bij 0. Btw-regel alleen als `tax_price > 0`. Datum in het Nederlands via een maandenlijst, omdat `%B` in Shopify Engels geeft.

## Rendering en screenshots

Lokaal gerenderd met python-liquid (Shopify-filters nagebootst) en Playwright: `_build/render_test.py`. Screenshots staan in `screenshots/` (desktop 680 px viewport met de 600 px mail, mobiel 375 px).

- **order1**: 2 regels (3-pack 40-46 en 1 paar 34-39), code TESTCODE −€5,00, gratis verzending, iDEAL.
- **order2**: 1 regel, België, verzending €5,00, Visa eindigend op 4242.
- **afhalen**: aparte tak voor afhalen (alleen mobiel).

Uitkomst: alle 15 renders zonder horizontale scroll (`scrollWidth` ≤ viewport). Totalen nagerekend door Website-QA.

**Niet getest:** echte mailclients (Gmail, Outlook, Apple Mail), echte Shopify-preview, en de tak voor lokale levering met een render. Doe vóór livegang de *Testmelding versturen* in Shopify met een echte testorder.

## Website-QA

Eerste ronde: CORRIGEER. Afgehandeld:
- Blokkerend, dark mode: lichte vlakken werden in Apple Mail donker terwijl de tekst donker bleef. Oplossing: de mail meldt alleen `color-scheme: light`; de Gmail-hooks houden wit wit en zwart zwart (één regel per klasse).
- Intro zonder voornaam begon met een kleine letter: opgelost.
- Lokale levering zei toch "binnen 1 werkdag verzonden": de verzendbelofte staat nu alleen bij echte verzending. De afhaalbelofte ("zodra hij klaarligt", geen bron) is geschrapt.
- "incl. €0,00 btw": de btw-regel staat er nu alleen als er btw is.
- Optie B had een dubbel class-attribuut: opgelost. De kop "is binnen" (kan als "bezorgd" gelezen worden) is nu "Bestelling #… staat."
- Optie C had 7 secties en een dubbel totaal: samengevoegd tot 5 (kop met strook, intro met producten, details met totalen en knop, footer); de strook toont nu het aantal artikelen.
- Optie A: de eyebrow boven de kop is nu een datumregel eronder.

Niet onafhankelijk bewezen: QA draaide in dezelfde sessie als de bouwer.

## Kwaliteitskaart per optie

| Criterium | A | B | C |
|---|---|---|---|
| Elk feit uit het feitenbestand, bron hierboven | ja | ja | ja |
| Geen 2000+, oranje knop, → of — | ja | ja | ja |
| CTA zwart/wit pill met chevron, Outlook-VML | ja (zwart) | ja (wit op zwart) | ja (zwart) |
| Liquid-variabelen in Shopify-docs | ja, behalve bewust vermeden `shop.email`/`shop.address` | idem | idem |
| Rendert met beide testorders | ja | ja | ja |
| Eigen skelet | ja | ja | ja |
| Mobiel 375 px zonder horizontale scroll | ja | ja | ja |
| Max. 5 secties (E8) | ja (5) | ja (4) | ja (5) |
| Eén merkzin | ja | ja | ja |
| Max. 1 rasterelement | n.v.t. | grip-dots (bestaand systeem) | ja, 1 |
| Eén geheel (E15) | zwakst: harde snede naar het zwarte blok, bewust als "bonvoet" | sterk: witte kaart op doorlopend zwart | middel: zwarte kop en voet omsluiten de witte bon |
| Anti-slop: geen generieke zinnen, emoji, verzonnen beloftes | ja | ja | ja |
| Niets in Shopify gezet of verstuurd | ja | ja | ja |

Mijn voorkeur: **B**, omdat de witte bon op doorlopend zwart het meest als één geheel leest en het dichtst bij de bestaande mails staat. **A** is de veiligste keuze voor Outlook.
