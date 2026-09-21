# Website Structuur & Sitemap — HÏ Grip

> Baseline vastgelegd 2026-07-14, **gecorrigeerd 2026-09-16** op basis van de volledige `/seo audit` via claude-seo (12 deelaudits, incl. root-cause-onderzoek) — een deel van de 07-14-baseline klopte niet meer (assortiment gegroeid incl. een ongewenste duplicate, sitemap-omvang, footer heeft 4 kolommen, sport-pagina's beperkter dan gedacht). Volledige audit + actieplan: [[Claude SEO Plugin — Skills & Agents]] (`03_Website_Agent/SEO/Technisch`). Voor SEO-koppeling: zie [[SEO Strategie & Keywords]]. Voor het merkverhaal achter de structuur: zie [[Brand Identity Overview]].

---

## Uitgangspunt: merk-breed, niet per sport — **VERVANGEN 2026-09-21: sportfocus**

> **Besluit lars 2026-09-21:** de site is nu bewust méér sportgericht. Sportlandingspagina's (tennis, voetbal, padel live; rugby volgt) zijn primaire content-pijlers en horen intern gelinkt te worden vanuit menu/footer, collecties, productpagina's en blogs. Zie [[SEO Strategie & Keywords]]. De alinea hieronder is historisch.

HÏ Grip is een **merk voor performance sportswear**, niet een single-sport merk. De site-architectuur en SEO moeten daarom rond **merk + productcategorie** gebouwd worden ("HÏ Grip", "gripsokken"), niet rond losse sport-silo's (tennis/rugby/hockey/badminton). Sport-categorieën blijven bestaan als filter/navigatie, niet als primaire content-pijler.

Dit is ook waarom de structuur uitbreidbaar moet zijn: er komt op termijn een **tweede productlijn (skisokken)** bij. De sitemap moet daar nu al ruimte voor open houden (bv. `/collections/gripsokken` en `/collections/skisokken` naast elkaar, in plaats van alles plat onder één ongedifferentieerde catalogus).

> **Beachhead-strategie (vanaf 16-9-2026):** de skisokken-lancering is uitgesteld en marketing focust nu op tennis, rugby en voetbal (zie [[Doelgroep & Persona's]]). De site-architectuur zelf verandert hierdoor niet automatisch — zie de open vraag in [[SEO Strategie & Keywords]] over of tennis/rugby/voetbal wel eigen landingspagina's/URL's moeten krijgen. Wat wel meteen kan zonder structuurwijziging: binnen bestaande secties (zoals "Sport-specifieke voordelen" op de homepage, zie [[Homepage Copy & Structuur]]) en de Sportgidsen tennis/rugby/voetbal vooraan/prominent zetten t.o.v. padel/basketbal/hardlopen/fitness/futsal. Let op: er is nog geen rugby-sportgids (`Content/Sportgidsen/`) — alleen tennis en voetbal bestaan al.

---

## Huidige structuur (live-audit 2026-07-14)

**Hoofdnavigatie:** Home, Shop, Over ons, Zakelijk, Blogs
**Taal:** Nederlands/Engels toggle
**Overig in header:** Account, winkelwagen, zoekfunctie

**Homepage — sectievolgorde:**
1. Navigatie & taalkeuze
2. Promotionele banner (actie + countdown)
3. Hoe het werkt (3-stappen uitleg)
4. Productvoordelen & Trustpilot-score
5. Prijsopbouw visualisatie
6. Kernwaarden: Comfort, Vertrouwen, Innovatie
7. "Ons verhaal" teaser
8. Performance gripsokken productshowcase
9. Sport-specifieke voordelen
10. Team HÏ Grip introductie
11. Zakelijke oplossingen ("HÏ GRIP BIJ JOU OP LOCATIE?")
12. Partner-logo's
13. FAQ (6 vragen incl. wetenschappelijke bronnen)
14. Footer

**Bekende URL's (gecorrigeerd 2026-09-16, bron: volledige sitemap-audit, ±55 URL's totaal, alle 200 OK):**
- Homepage: `/`
- Collecties: `/collections/all` (bestaat, niet geoptimaliseerd — title is kaal "Producten") en `/collections/gripsokken`
- Producten (3 bedoeld, 4 live): `/products/hi-grip-gripsokken-1`, `/products/performance-gripsokken-2-0-wit`, `/products/performance-gripsokken-2-0-zwart` (handles gecorrigeerd 21-9-2026), plus een **ongewenste duplicate** `/products/performance-grip-socks-2-0-wit-1` (identieke titel, allebei indexeerbaar — [LARS]-actie: verwijderen/301-redirecten, zie [[Claude SEO Plugin — Skills & Agents]])
- Sport-specifieke pagina's: **beperkter dan eerder aangenomen** — alleen `/pages/gripsokken-padel` en een pilates-pagina bestaan live als aparte pagina's. De 7 Sportgidsen in de vault (`Content/Sportgidsen/`) zijn contentkennis, geen 1-op-1 live pagina's. Geen "gripsokken voetbal"-pagina, terwijl 7 van 10 SERP-resultaten voor het hoofd-keywordcluster voetbal-gericht zijn — open [LARS]-beslissing, botst met het merk-brede-principe hierboven, zie [[SEO Strategie & Keywords]]
- Overig: `/pages/over-ons`, `/pages/zakelijk`, `/pages/blogs`, `/pages/ontdek-jouw-sport`, `/pages/veelgestelde-vragen`, `/pages/contact`, `/pages/privacybeleid`, `/pages/retourbeleid`, `/policies/terms-of-service`

**Footer-structuur (4 kolommen, gecorrigeerd 2026-09-16):**
- Algemeen/Legal: voorwaarden, verklaring, verzending, retour, betaling, privacy
- HÏ Grip/Bedrijf: FAQ, over ons, zakelijk, contact, reviews, voordelen
- Social media: Facebook, Instagram, TikTok, LinkedIn + contactgegevens (info@higrip.nl, +31 6 24 56 65 47)
- Betaalmethoden: 11 betaalopties (iDEAL, Klarna, PayPal, e.a.)
- KVK 97210129, BTW NL867952283B01

> **Update 21-9-2026 — sportpagina's:** er zijn sportlandingspagina's gebouwd voor tennis, rugby, voetbal en padel ("Gripsokken voor <sport>", nu concept, template `page.sport-*`; bedoelde URL's `/pages/gripsokken-voor-<sport>`, handles nog te verifiëren) plus een homepage-teaser. Details: [[Sportlanding-systeem (21-9-2026)]]; meta's: [[Sportpagina Meta's (21-9-2026)]].

---

## Aandachtspunten voor sitemap-uitbreiding

- Nieuwe productlijn (skisokken) krijgt eigen collectie-pad, niet vermengd met gripsokken-catalogus
- Sport-categorieën (tennis/rugby/hockey/badminton) worden nav-filters, geen aparte SEO-landingspagina's per sport
- Overweeg blog-sectie te koppelen aan long-tail zoekverkeer op categorie-niveau (bv. "grip in de sport", niet per sporttak)

---

## Gerelateerde bestanden

- [[SEO Strategie & Keywords]] — Zoekwoordstrategie op merk/categorie-niveau
- [[Claude SEO Plugin — Skills & Agents]] — Volledige audit + actieplan (16-09-2026), bron van de correcties hierboven
- [[Brand Identity Overview]] — Merkverhaal en positionering
- [[Doelgroep & Persona's]] — B2C/B2B doelgroepen per sectie
