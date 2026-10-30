---
id: 2026-10-27-seo-audit-higrip-nl
titel: "SEO-audit nieuwe live site higrip.nl — oktober 2026"
kerntitel: "Retour- en verzendbeloftes en claims op de site wijken af van de feiten"
datum: 2026-10-27
bron: los
routine: ""
categorie: SEO
status: nieuw
prioriteit: P1
samenvatting: "De technische basis van higrip.nl is op de steekproef in orde, maar de tekst op de retour- en verzendpagina's en enkele claims wijken af van het vastgestelde beleid en de bronnen. Dat raakt vertrouwen en compliance meer dan vindbaarheid; de onafhankelijke QA is nog niet gedaan."
gerelateerd: [2026-10-11-concurrentie-seo-per-merk, 2026-10-30-snelheid-code-audit-homepage]
vervangt: []
bronbestand: ""
deadline: ""
---
# SEO-audit nieuwe live site higrip.nl — oktober 2026

> Map: [[Waar staat wat]]

## In het kort

Alleen-lezen audit door de Website Agent (technisch, on-page, eigen steekproef van 10 URL's). Kernpagina's (NL/EN home, product performance-gripsokken, collectie, over-ons) geven 200, zijn self-canonical, hebben wederkerige hreflang en JSON-LD zonder aggregateRating; robots.txt en sitemap.xml zijn bereikbaar, 404 werkt, HTTPS-headers staan goed. De P1-punten zijn inhoudelijk: beloftes en claims die niet kloppen met `Feiten & Actuele Staat`.

**Onafhankelijke QA: niet voltooid (ESCALEER).** De reviewer stopte omdat de skill `higrip-vault` in het Website-profiel nog naar de oude vault verwijst. Alle bevindingen zijn dus eigen steekproef, geen onafhankelijk geverifieerd oordeel.

## Acties

- [ ] P1 · Besluit: retourtekst gelijktrekken: refund-policy noemt 14 dagen en 25% herbevoorradingskosten, vastgesteld beleid is 30 dagen (juridische toets aanbevolen)
- [ ] P1 · Besluit: verzendbelofte gelijktrekken: shipping-policy zegt vóór 16:00 dezelfde dag, feitenbestand zegt binnen 1 werkdag; oude policy-links op product, FAQ en 2.0-pagina's
- [x] P1 · Claims over blessurerisico en de 95% onderbouwen of begrenzen met bron direct erbij (op /pages/collection staat wel een bronregel)
- [x] P1 · Verifiëren: /en (gratis verzending boven €30, voor 22:00) en 2.0-zwart (€14,99/€17,99, voor 22:00) vergelijken met actuele bron
- [ ] P2 · Sportersaantal harmoniseren: collectie 3000+, /en 1000+, vastgesteld 3500+ (over-ons mijlpaal blijft); homepage-meta eerst herchecken
- [x] P2 · /en heeft Nederlandse hero/H1: vertaling en FAQPage controleren in broncode
- [ ] P2 · Besluit: A/B-testpagina's /pages/gripsokken-2-0-a en -b (noindex,nofollow) staan in de sitemap; doel bevestigen voordat iets verandert
- [x] P2 · ProductGroup.description ("Wetenschappelijk bewezen effectiviteit") vergelijken met zichtbare tekst en bronnen
- [ ] P2 · Koopintentie /pages/collection versus /collections/gripsokken onderzoeken met Search Console-data; geen redirect of canonical zonder bewijs
- [ ] P2 · Besluit: adviesprijs €19,95 (homepage retailblok) en €14,99/€17,99 (2.0-zwart) tegenover €17,95 in feitenbestand: Lars/Timo beslissen, niets automatisch wijzigen
- [ ] P1 · Besluit: Website-profiel `higrip-vault`-skill corrigeren (verwijst naar oude vault) en daarna onafhankelijke QA op deze audit herhalen

## Bevindingen

### Technisch (P2/P3)
- `/en` heeft een Nederlandse H1 en FAQPage; interne links gaan terug naar NL.
- NL-paginasitemap bevat `/pages/gripsokken-2-0-a` en `-b` (200, noindex,nofollow).
- ProductGroup.description op `/products/performance-gripsokken` noemt "Wetenschappelijk bewezen effectiviteit" zonder onderscheid tussen algemene studie en eigen producttest.
- Oude handle `hi-grip-gripsokken-1` gaat via 301 naar `hi-grip-gripsokken` en dan naar `performance-gripsokken` (redirectketen). `http://higrip.nl/` loopt via 301 naar https en naar www (ketenlengte 2).

### On-page (P1/P2/P3)
- Shipping-policy: vóór 16:00 dezelfde dag; refund-policy: 14 dagen, ongeopend, 25% kosten. FAQ linkt de oude shipping-policy (refund-link niet bewezen); alle drie producten linken de oude shipping-policy.
- Product 1.0 noemt 95% zonder directe bron; FAQ noemt minder blessurerisico zonder onderbouwing in het feitenbestand.
- Homepage-meta en collectie noemen 3000+ in plaats van 3500+; retailblok €19,95 versus €17,95.
- `/pages/collection` en `/collections/gripsokken` hebben eigen canonicals en overlappende koopintentie; kannibalisatie niet gemeten.
- Blog `/blogs/hi-grip/wat-zijn-gripsokken` heeft geen interne links in main; collectie verwijst naar oude producthandles; generieke productalts; 2.0-kleurplaatjes missen alt.

### Tegenstrijdigheden
Het feitenbestand noemt alleen oude policies als conflict; de steekproef suggereert bredere afwijkingen (/en, 2.0-zwart). Dat kan nieuwere content of een oudere extractie zijn: actuele broncontrole nodig. Geen kant gekozen.

## Wat niet lukte

Geen volledige crawl, Search Console, GA4, zoekvolumes, backlinks, rich-resultvalidator of Core Web Vitals (PageSpeed: CrUX No Data). Broncode-export (schema, canonicals, robots) mislukte. Volledige EN- en bloginventaris en mobiele visuele QA niet gedaan. Onafhankelijke QA geblokkeerd door het padconflict in de Website-skill.

## Bronnen

Kanban-taken t_b69ef6cd (technisch), t_dfa6ef0a (on-page), t_e9d2ff5f (QA/rapport) van de Website Agent, 27-10-2026. Bestaande open voorstellen (kleurcollecties, voetbalkeuzegids, blogmeta): [[2026-10-11-concurrentie-seo-per-merk]] regels 38–42; niet opnieuw voorgesteld.

## Aantekeningen
