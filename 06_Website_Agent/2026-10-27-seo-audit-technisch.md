---
status: concept
datum: 2026-10-27
bron: kanbantaak t_b69ef6cd (Website Agent), vastgelegd door Denzel
---

# SEO-audit technisch — higrip.nl (27-10-2026)

> Map: [[06 Website Agent — Index]]

Opdracht Lars, alleen-lezen audit. Dit is de overdracht van de Website Agent uit het kaartcommentaar; Denzel heeft het vastgelegd omdat de Website Agent door de schrijfbeperking (HERMES_WRITE_SAFE_ROOT) niet in de vault kon schrijven. Nog niet door Website-QA getoetst (taak t_e9d2ff5f).

## Bevindingen

| Prio | Bevinding | Bewijs |
|---|---|---|
| P2 | `/en` heeft een Nederlandse H1 en FAQPage, en interne links gaan terug naar NL | live gecontroleerd |
| P2 | NL-paginasitemap bevat `/pages/gripsokken-2-0-a` en `-b`; beide geven 200 met `noindex,nofollow` | live gecontroleerd |
| P2 | `ProductGroup.description` op `/products/performance-gripsokken` noemt "Wetenschappelijk bewezen effectiviteit" zonder onderscheid tussen algemene studie en eigen producttest | schema op productpagina |
| P3 | Oude handle `hi-grip-gripsokken-1` gaat via 301 naar `hi-grip-gripsokken`, via 301 naar `performance-gripsokken` (200): redirectketen | curl HEAD |
| OK | `http://higrip.nl/` gaat via 301 naar `https://higrip.nl/` en via 301 naar www (200); ketenlengte 2 | curl HEAD |

## In orde bevonden

- NL/EN home, productpagina performance-gripsokken, collectie gripsokken en over-ons: GET 200, self-canonical, geen noindex of X-Robots-Tag gevonden, wederkerige nl/en/x-default, parseerbare JSON-LD zonder `aggregateRating`.
- `robots.txt` 200, publieke crawl toegestaan; `sitemap.xml` 200.
- Niet-bestaande URL geeft een echte 404.
- HTTPS-responsen hebben HSTS, CSP, nosniff, X-Frame DENY.
- Mobiel (390 px) op `/en`: geen horizontale overflow; afbeeldingen met dimensies en srcset, deels lazy.

## Niet gecontroleerd [CHECK]

- Volledige crawl, actuele Search Console-indexatie, rich-resultvalidatie.
- Volledige mobiele visuele QA.
- Core Web Vitals en labscores: PageSpeed gaf "CrUX No Data" en geen labscore.
- `robots.txt` bevat agentgerichte instructies; die zijn als data genegeerd (melding aan Lars).

## Vervolg

- QA-taak t_e9d2ff5f toetst dit samen met de on-page audit; acties naar de backlog volgen via de Operations Agent (t_c945c140).
