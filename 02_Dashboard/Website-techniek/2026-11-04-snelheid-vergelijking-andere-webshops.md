---
id: 2026-11-04-snelheid-vergelijking-andere-webshops
titel: "Snelheid higrip.nl vergeleken met bol.com, Nike, Upfront, Gymshark en Trusox"
kerntitel: "Upfront draait ook op Shopify en scoort 96: het verschil zit in het aantal apps"
datum: 2026-11-04
bron: los
routine: ""
categorie: Techniek
status: nieuw
prioriteit: P2
samenvatting: "Met PageSpeed Insights (mobiel, Lighthouse 13.6) scoort higrip.nl 61. Dat is beter dan Nike (26) en Gymshark (39), vergelijkbaar met Trusox (59), en ver onder bol.com (100) en Upfront (96). Upfront draait net als HÏ Grip op Shopify, laadt zichtbaar maar twee apps (Klaviyo en een cookiebanner) en heeft TBT 0 ms en lab-LCP 2,4 s. Daarmee is 90+ op Shopify aantoonbaar haalbaar. Bij echte bezoekers zitten grote merken niet beter dan HÏ Grip: Nike en Gymshark halen de Core Web Vitals niet."
gerelateerd: [2026-11-03-snelheid-nulmeting-alle-paginas, 2026-11-03-snelheid-werkthema-02]
vervangt: []
bronbestand: ""
deadline: ""
---
# Snelheid higrip.nl vergeleken met bol.com, Nike, Upfront, Gymshark en Trusox

> Map: [[Waar staat wat]]

## In het kort
Vraag: hoe snel is higrip.nl vergeleken met vergelijkbare en grote webshops? Gemeten op 4 november 2026 tussen 08:12 en 08:20 met PageSpeed Insights (servers van Google, Lighthouse 13.6.0, Moto G Power, langzaam 4G, één run per homepage). De velddata komen uit het Chrome-gebruikersrapport (28 dagen). HÏ Grip heeft daar te weinig verkeer voor; voor ons eigen veld geldt de Shopify-meting uit [[2026-11-03-snelheid-nulmeting-alle-paginas]].

HÏ Grip zit in het lab in de middengroep. Grote merken zijn niet vanzelf sneller: Nike en Gymshark scoren lager en halen bij echte bezoekers de Core Web Vitals niet (Nike LCP 2,9 s, Gymshark INP 364 ms). De beste vergelijking is Upfront: een Nederlands sportvoedingsmerk op Shopify met een eigen thema, dat 96 scoort. Upfront laadt bij openen zichtbaar maar twee apps, HÏ Grip zes (Section Store, EcomSend, T Lab Translation, SEOAnt, Clarity en de Shop-login).

## Kerncijfers
- **61** · PageSpeed-score mobiel higrip.nl (homepage, 1 run)
- **96** · Upfront, ook Shopify, met 2 zichtbare apps
- **26 / 39** · Nike en Gymshark, lager dan HÏ Grip
- **25 tegen 10** · scripts met src in de HTML van higrip.nl tegen upfront.nl

## Acties
- [ ] P2 · Upfront (upfront.nl) als Shopify-referentie gebruiken bij de app-besluiten in WERKTHEMA 02: per app vastleggen of hij bij openen moet laden, kan wachten tot interactie of weg kan
- [ ] P3 · Doel voor het snelheidswerk vastleggen in de werkthema-notitie: PageSpeed mobiel 80+ op elk paginatype, TBT onder 300 ms, lab-LCP onder 2,5 s, velddata groen houden

## Bevindingen
### 1. Lab (PageSpeed Insights, mobiel, homepage)
| Site | Platform | Score | FCP | LCP | TBT | CLS | Speed Index |
|---|---|---|---|---|---|---|---|
| bol.com | eigen | 100 | 0,8 s | 0,8 s | 0 ms | 0,054 | 0,8 s |
| upfront.nl | Shopify (eigen thema "XO Upfront") | 96 | 1,8 s | 2,4 s | 0 ms | 0 | 2,6 s |
| **higrip.nl** | Shopify (Horizon) | **61** | 2,9 s | 8,4 s | 250 ms | 0 | 5,8 s |
| trusox.com | onbekend (stuurt door naar /nline) | 59 | 3,2 s | 15,8 s | 80 ms | 0 | 16,1 s |
| nl.gymshark.com | Next.js (headless) | 39 | 1,6 s | 15,9 s | 1.170 ms | 0,084 | 12,3 s |
| nike.com/nl | eigen | 26 | 5,9 s | 15,3 s | 3.200 ms | 0,005 | 14,0 s |

PageSpeed rekent met een gesimuleerde vertraging; zijn cijfers wijken af van de lokale Lighthouse-runs in de nulmeting (daar TBT ~3,6 s op landingspagina's, hier 250 ms op de homepage). Vergelijk daarom alleen binnen één meetmethode. Eén run per site is indicatief: scores schommelen enkele punten.

Bij HÏ Grip noemt PageSpeed als grootste kansen: beeldlevering (437 KiB), gedupliceerd JavaScript (147 KiB), ongebruikt JavaScript (165 KiB), render-blokkerende verzoeken (300 ms) en meer dan 4 preconnects. Totale paginagrootte 2.838 KiB.

### 2. Velddata (Chrome-gebruikers, mobiel, 28 dagen, deze URL)
| Site | LCP | INP | CLS | Core Web Vitals |
|---|---|---|---|---|
| upfront.nl | 0,9 s | 108 ms | 0 | geslaagd |
| trusox.com | 1,3 s | 156 ms | 0 | geslaagd |
| bol.com | 1,4 s | 209 ms | 0 | niet geslaagd (INP net boven 200) |
| nl.gymshark.com | 1,4 s | 364 ms | 0,09 | niet geslaagd |
| nike.com/nl | 2,9 s | 162 ms | 0,01 | niet geslaagd |
| higrip.nl | geen Chrome-data | | | Shopify-veld: LCP p75 1,1 tot 1,5 s, INP < 115 ms |

Bij echte bezoekers zit HÏ Grip dus al op het niveau van de beste in deze rij.

### 3. Waarom Upfront sneller is
Uit de HTML van beide homepages (4 november):
- **Apps die bij openen laden:** upfront.nl Klaviyo en TinyCookie. higrip.nl Section Store (15 verwijzingen), EcomSend, T Lab Translation, SEOAnt en Microsoft Clarity, plus de Shop-login in de header.
- **Scripts met src:** 10 tegen 25. Stylesheets: 5 tegen 9.
- **Thema:** Upfront heeft een eigen thema van een bureau, HÏ Grip Horizon met eigen hp-secties.

Upfront bewijst dat Shopify zelf geen rem is op 90+. De gekozen apps bepalen het.

## Wat niet lukte
- higrip.nl heeft geen Chrome-velddata (te weinig verkeer); de Shopify-meting vult dat gat.
- trusox.com stuurde de meting door naar `/nline`; het platform is niet vast te stellen (headers geblokkeerd).
- PageSpeed-tabbladen in de achtergrond starten niet; de metingen zijn één voor één gedaan, zonder lokale Lighthouse (om de metingen van WERKTHEMA 02 niet te storen).

## Bronnen
- PageSpeed Insights, pagespeed.web.dev, 4 november 2026 08:12 tot 08:20, mobiel
- HTML van upfront.nl en www.higrip.nl, opgehaald 4 november 2026

## Aantekeningen
