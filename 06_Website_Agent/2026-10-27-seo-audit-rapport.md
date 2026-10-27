---
status: concept
datum: 2026-10-27
bron: kanbantaak t_e9d2ff5f (Website Agent), vastgelegd door Denzel
---

# SEO-audit higrip.nl — gebundeld rapport (27-10-2026)

> Map: [[06 Website Agent — Index]]

Onderdelen: [[2026-10-27-seo-audit-technisch]] en [[2026-10-27-seo-audit-on-page]]. Alleen-lezen audit; niets gewijzigd aan site, thema, prijzen of backlog.

**QA-status: ESCALEER.** De onafhankelijke Website-QA is niet voltooid: de reviewer stopte omdat de skill `higrip-vault` in het Website-profiel nog naar de oude vault verwijst en lezen in `ObsidianVault` verbiedt. De Website Agent deed wel een eigen steekproef van 10 URL's via web_extract (geen volledige crawl; extracties kunnen delen weglaten of oudere versies tonen). Dit rapport is dus niet onafhankelijk getoetst.

## Top-10 acties (prioriteit = risico/volgorde, geen bewezen SEO-opbrengst)

| Nr | Prio | Actie | Impact / inspanning | Wie na akkoord |
|---|---|---|---|---|
| 1 | P1 | Retourtekst actualiseren: refund-policy noemt 14 dagen en 25% herbevoorradingskosten, vastgesteld beleid is 30 dagen. Bestaande retouractie uitbreiden. | Hoog / middel | Copy + Team; juridische toets aanbevolen |
| 2 | P1 | Verzendbelofte gelijktrekken: shipping-policy zegt vóór 16:00 dezelfde dag, feitenbestand zegt binnen 1 werkdag; oude policy-links op product, FAQ, 2.0-pagina's. | Hoog / middel | Copy + Website; mens publiceert |
| 3 | P1 | Blessurerisico- en prestatieclaims onderbouwen of begrenzen; 95%-claim op 1.0 eerst verifiëren (op /pages/collection staat wel een bronregel Apps et al. 2022). | Hoog / middel | Copy + SEO; inhoudsexpert |
| 4 | P1 | [CHECK] Mogelijk bredere afwijkingen: /en (gratis verzending boven €30, voor 22:00) en 2.0-zwart (€14,99/€17,99, voor 22:00) vergelijken met actuele bron; verificatie, geen aparte herstelactie. | Mogelijk hoog / laag-middel | Website + Copy; Team bevestigt beleid |
| 5 | P2 | Sportersaantal harmoniseren: collectie 3000+, /en 1000+, vastgesteld 3500+ (over-ons mijlpaal blijft). Homepage-meta eerst herchecken. | Middel / laag | Copy + SEO |
| 6 | P2 | /en heeft Nederlandse hero/H1; FAQPage en teruglinks naar NL als [CHECK] in broncode. | Middel / middel | Copy + SEO + Website |
| 7 | P2 | [CHECK] Testpagina's /pages/gripsokken-2-0-a/-b (noindex,nofollow) staan in de sitemap; eerst doel bevestigen, niet blind noindex verwijderen. | Middel / middel | SEO + Website; Team beslist |
| 8 | P2 | [CHECK] ProductGroup.description ("Wetenschappelijk bewezen effectiviteit") en FAQPage vergelijken met zichtbare tekst en bronnen. | Middel / middel | SEO + Copy |
| 9 | P2 | Koopintentie /pages/collection vs /collections/gripsokken onderzoeken met Search Console-data; geen redirect of canonicalwissel zonder bewijs. | Niet gemeten / middel | SEO |
| 10 | P2 | [CHECK] Adviesprijs €19,95 (homepage retailblok) en €14,99/€17,99 (2.0-zwart) tegenover €17,95 in feitenbestand: alleen verschil melden, Lars/Timo beslissen. | Potentieel hoog / laag | Website signaleert; Lars/Timo |

Dedupliceren door Operations: kleurcollecties, voetbalkeuzegids en blogmeta staan al open in `02_Dashboard/Onderzoek/2026-10-11-concurrentie-seo-per-merk.md` (regels 38–42); het feitenbestand verwijst naar een bestaande actie voor verzend-/retourpagina's. Actie 4 hoort bij 1 en 2; actie 8 raakt 3.

## Tegenstrijdigheden (niet zelf opgelost)

- Technisch "in orde" (A) en tekstuele fouten (B) spreken elkaar niet tegen.
- Feitenbestand noemt alleen oude policies als conflict; de steekproef suggereert bredere afwijkingen. Kan nieuwere content of een oudere extractie zijn: actuele broncontrole nodig.
- Oorspronkelijk: FAQ linkt beide oude policies. Bevestigd is alleen de shipping-link; refund-link [CHECK].

## Niet gecontroleerd

Volledige crawl, Search Console, GA4, zoekvolumes, backlinks, rich-resultvalidator, Core Web Vitals (PageSpeed: CrUX No Data), volledige EN- en bloginventaris, mobiele visuele QA, checkout, actuele product-API-prijzen, alle afbeeldingen. Broncode-export (schema, canonicals, robots) is mislukt.

## Beslissing voor Lars

- Beleid (retour/verzending) en prijscommunicatie bevestigen; livegang en prijzen blijven bij Lars/Timo.
- Onafhankelijke QA laten herhalen nadat het pad-conflict in de skill is opgelost.
