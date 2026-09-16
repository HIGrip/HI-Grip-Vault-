# Website Structuur & Sitemap — HÏ Grip

> Baseline vastgelegd 2026-07-14, **gecorrigeerd 2026-09-16** op basis van de volledige `/seo audit` via claude-seo (12 deelaudits, incl. root-cause-onderzoek) — een deel van de 07-14-baseline klopte niet meer (assortiment gegroeid incl. een ongewenste duplicate, sitemap-omvang, footer heeft 4 kolommen, sport-pagina's beperkter dan gedacht). Volledige audit + actieplan: [[Claude SEO Plugin — Skills & Agents]] (`03_Website_Agent/SEO/Technisch`). Voor SEO-koppeling: zie [[SEO Strategie & Keywords]]. Voor het merkverhaal achter de structuur: zie [[Brand Identity Overview]].

---

## Uitgangspunt: merk-breed, niet per sport

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

**Bekende URL's:**
- Homepage: `/`
- Collectie: `/collections/all`
- Product: `/products/hi-grip-gripsokken-1` (enige gevonden product-URL — bevestigt dat het huidige assortiment klein is)

**Footer-structuur:**
- Legal: voorwaarden, verklaring, verzending, retour, betaling, privacy
- Bedrijf: FAQ, over ons, zakelijk, contact, reviews, voordelen
- Social: Facebook, Instagram, TikTok, LinkedIn
- Contact: info@higrip.nl, +31 6 24 56 65 47
- KVK 97210129, BTW NL867952283B01

---

## Aandachtspunten voor sitemap-uitbreiding

- Nieuwe productlijn (skisokken) krijgt eigen collectie-pad, niet vermengd met gripsokken-catalogus
- Sport-categorieën (tennis/rugby/hockey/badminton) worden nav-filters, geen aparte SEO-landingspagina's per sport
- Overweeg blog-sectie te koppelen aan long-tail zoekverkeer op categorie-niveau (bv. "grip in de sport", niet per sporttak)

---

## Gerelateerde bestanden

- [[SEO Strategie & Keywords]] — Zoekwoordstrategie op merk/categorie-niveau
- [[Brand Identity Overview]] — Merkverhaal en positionering
- [[Doelgroep & Persona's]] — B2C/B2B doelgroepen per sectie
