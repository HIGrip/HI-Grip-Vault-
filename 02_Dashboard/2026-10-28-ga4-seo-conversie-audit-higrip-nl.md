---
id: 2026-10-28-ga4-seo-conversie-audit-higrip-nl
titel: "GA4 SEO- en conversie-audit higrip.nl — oktober 2026"
kerntitel: "Meting eerst valideren: 7 aankopen in 28 dagen, desktop 0 van 220 sessies"
datum: 2026-10-28
bron: los
routine: ""
categorie: CRO
status: nieuw
prioriteit: P1
samenvatting: "Eerst meetvalidatie tegen Shopify-orders: 7 aankopen op ongeveer 417 sessies (28 dagen) en 0 aankopen op desktop (220 sessies) zijn te klein en te onzeker voor conclusies. De grootste lekken in de eventfunnel zijn view_item naar add_to_cart (75,7% afval) en de stap naar add_payment_info (50%); 7 van 10 weken zitten onder 100 sessies, dus alles is indicatief."
gerelateerd: [2026-10-27-seo-audit-higrip-nl, 2026-10-11-concurrentie-seo-per-merk]
vervangt: []
bronbestand: "C:\\Users\\lars\\AppData\\Local\\hermes\\cache\\scratch\\ga4_audit_2026_10_28_data.json"
deadline: ""
---
# GA4 SEO- en conversie-audit higrip.nl — oktober 2026

## In het kort

Onafhankelijke QA (Website, kaart t_370b3ad0): **CORRIGEER LICHT**. 12 getallen nagerekend en correct. Periode GA4: laatste 28 dagen t/m 27-10 (property 476032345); GSC 28-09 t/m 25-10. Perioden verschillen, dus geen directe klik-sessiereconciliatie. Het zijn eventcounts, geen geordende sessiefunnel. W11: 7 van 10 weken onder 100 sessies, alles indicatief, geen trendclaim. Technische en on-page SEO staan in [[2026-10-27-seo-audit-higrip-nl]] en worden hier niet herhaald.

## Kerncijfers

- **7** · Aankopen, ongeveer 417 sessies (28 dagen)
- **3,55%** · Mobiel (7 van 197 sessies); desktop 0 van 220
- **1,78%** · Organic Search (3 van 169 sessies)
- **75,7%** · Afval view_item naar add_to_cart (189 naar 46)

## Acties

- [ ] P1 · Meetvalidatie: vergelijk GA4 met Shopify-orders (aantal, conversie, AOV circa € 38,78, geordende funnel) voordat er op deze cijfers wordt besloten
- [ ] P1 · GA4-filters instellen of controleren voor intern, preview en admin-verkeer (circa 21 sessies, admin.shopify.com 11, Unassigned 11, landing (not set) 22)
- [ ] P1 · Pieken 26-27 oktober onderzoeken: 92 sessies, 0 aankopen (bot, campagne of preview)
- [ ] P1 · Checkout-walkthrough desktop en mobiel (0 aankopen desktop; 50% afval bij add_payment_info; view_cart slechts 2)
- [ ] P2 · Key events en consent controleren (instellingen ontbreken in de export; niet bewezen uitgeschakeld)
- [ ] P2 · Herkomst /en-verkeer uitzoeken (23 sessies, 0 carts) voordat het als conversieprobleem wordt behandeld
- [ ] P2 · Verkeer uit de VS onderzoeken: 84 sessies, 0 aankopen (NL 259 sessies met alle 7 aankopen)
- [ ] P2 · SERP-intentie controleren voor "gripsokken" (606 vertoningen, CTR 1,32%, positie 5,7) en "grip socks" (368, 0,54%, positie 10,3)
- [ ] P2 · Branded versus non-branded rapport maken in GSC (ondergrens branded 39,5 tot 44,4% van de klikken; "high grip" en "highgrip" ambigu)
- [ ] P2 · Redirect-/URL-verschil nagaan: /products/hi-grip-gripsokken-1 heeft 1.463 vertoningen en 15 klikken in GSC maar staat niet in GA4 organic (de koppeling met de redirect is een aanname; keten staat in Feiten & Actuele Staat r46)
- [ ] P3 · Dit onderzoek herhalen na 4 weken, met meer sessies en gevalideerde meting
- [ ] P1 · Besluit: eerst meetvalidatie (acties hierboven) of direct inzetten op 2.0 zwart en 1.0 (tegenstrijdigheid B in de QA); uitkomst bepaalt volgorde, prijsbesluit 2.0 blijft bij Lars en Timo

## Bevindingen

### Kanalen en apparaat
Sessies/aankopen: Organic Search 169/3, Direct 145/2, Referral 18/2 (linktr.ee 16/2), Organic Social 38/0, Paid Social 16/0. Mobiel 197 sessies, 32 cart-events, 19 checkouts, 7 aankopen. Desktop 220/14/5/0. Bij 7 aankopen is er geen bewezen apparaat- of kanaalwinnaar; desktop 0 is een meet- of UX-vraag tot Shopify het bevestigt.

### Funnel (eventcounts)
session_start 412 → view_item 189 (45,9%) → add_to_cart 46 (24,3%) → begin_checkout 24 (52,2%) → add_shipping_info 20 (83,3%) → add_payment_info 10 (50,0%) → purchase 7 (70,0%). Users: 300, 112, 26, 17, 11, 8, 6. Sessie naar aankoop 1,7% (events) of 2,0% (users). Berekening: Denzel, door de QA nagerekend.

### Meetkwaliteit
22 landingen (not set), waarvan 9 organic; Unassigned 11; admin.shopify.com als referral 11; previewparameters aanwezig; view_cart slechts 2 (drawer, direct checkout of meetgat). Zeven purchase-events bij zes gebruikers bewijzen geen duplicaten. Week 35 telt maar 4 sessies. De oude notitie "geen purchase ooit" ([[2026-09-03-analytics-kpi-meetgat]]) is achterhaald.

### SEO x conversie
- /en: GSC 31 klikken/812 vertoningen; GA4 22 tot 23 sessies, 0 add-to-carts; "grip socks" naar /en 260 vertoningen, CTR 0,77%, positie 9,2. Versterkt de bestaande EN-actie, bewijst geen conversieprobleem.
- /collections/all: 325 vertoningen, CTR 0,62%, positie 8,3.
- GA4 organic: /collections/gripsokken 2 sessies/0 engaged/0 carts; 2.0 zwart 5/2/1; /products/performance-gripsokken 9 sessies/0 carts. Te klein voor conclusies.
- Page-niveau 2.0 zwart (12 sessies, 1 cart) en product 1.0 (15 sessies, 1 cart) zijn onderzoekskandidaten, geen bewezen zwakste pagina's.

### Tegenstrijdigheden uit de QA
A: /en als conversieprobleem tegenover herkomst nog onbekend. B: 2.0 zwart/1.0 aanpakken tegenover eerst meetvalidatie. Redirect-koppeling is een aanname.

### Niet opnieuw voorgesteld
Kleurcollecties, voetbalkeuzegids en blogmeta staan al open in [[2026-10-11-concurrentie-seo-per-merk]]. Het EN-punt en de 2.0-zwart/1.0-LIFT-punten staan bij de eerdere audit; hier alleen als bewijs bijgevoegd.

## Wat niet lukte

Niet gecontroleerd: Shopify-orders, bots, consent, live UX, SERP, kpi-meetgat-notitie, Feiten r46, onafhankelijke GA4/GSC-reconciliatie. Het volledige QA-rapport (top-10 en Besluit) stond alleen in de sessie-uitvoer van t_370b3ad0; de acties hierboven zijn gereconstrueerd uit het completion-resultaat en de kaarten t_45e2cb0c en t_eda2c7b1. Eventuele ontbrekende details: aanvullen via Denzel.

## Bronnen

- GA4-ruwe data: `C:\Users\lars\AppData\Local\hermes\cache\scratch\ga4_audit_2026_10_28_data.json`
- GSC-ruwe data: `C:\Users\lars\AppData\Local\hermes\cache\scratch\gsc_audit_2026_10_28.json`
- Kaarten t_370b3ad0 (QA), t_45e2cb0c (funnel/conversie), t_eda2c7b1 (SEO x conversie)

## Aantekeningen
