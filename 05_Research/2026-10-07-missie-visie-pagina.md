---
id: 2026-10-07-missie-visie-pagina
titel: "Missie & Visie-pagina higrip.nl — onderzoek, SEO-keuzes en concept"
kerntitel: "Missie & Visie mikt op 'missie en visie HÏ Grip', want Over ons heeft de merknaam al"
datum: 2026-10-07
bron: los
routine: ""
categorie: SEO
status: nieuw
prioriteit: P2
samenvatting: "Over ons rankt in Search Console al op positie 1 voor 'hi grip' en 'higrip', dus de nieuwe Missie & Visie-pagina krijgt 'missie en visie HÏ Grip' als primair keyword en 'Nederlands sportsokkenmerk' en 'gripsokkenmerk' als secundair. Het concept staat als artifact klaar met volledige head, AboutPage/Organization/Breadcrumb/FAQPage-schema en de drie founders, en wacht op quotes, foto-akkoord en socialprofielen van Lars."
gerelateerd: [2026-09-25-seo-audit, 2026-09-04-werkdossier-stand-van-zaken]
vervangt: []
bronbestand: "https://claude.ai/artifact/Dy7Vmadcqj1N4iEYbeZx87"
deadline: ""
---
# Missie & Visie-pagina higrip.nl — onderzoek, SEO-keuzes en concept

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[Waar staat wat]] · [[Home]]

## In het kort

Opdracht van 7-10 via `/denzel`: een Missie & Visie-pagina voor higrip.nl, opgeleverd als één artifact, zonder het Shopify-thema aan te raken. Missie, visie, kernwaarden en tagline komen letterlijk uit het Canva-document *MERK & STRATEGIE* en [[Brand Identity Overview]] (die zijn gelijk; de visie bestond, er was geen placeholder nodig). Het concept staat op https://claude.ai/artifact/Dy7Vmadcqj1N4iEYbeZx87, bedoelde URL `https://www.higrip.nl/pages/missie-visie` (nu 404).

## Kerncijfers

- **52** · Vertoningen 'hi grip' op /pages/over-ons, positie 1 (90 dagen)
- **172** · Vertoningen 'higrip' sitebreed, positie 2,9 (90 dagen)
- **0** · Vertoningen op 'missie', 'merk' of 'wie zit achter' (90 dagen)

## Acties

- [ ] P2 · Besluit: quotes van Lars, Tigo en Timo aanleveren ("waarom ik hierin geloof") voor de Missie & Visie-pagina
- [ ] P2 · Besluit: foto-akkoord founders (de actiefoto's uit de pitch, of echte portretten) en bevestigen dat "ontstaan in september 2024, Rotterdam Business School" klopt
- [ ] P2 · Besluit: Instagram, TikTok en LinkedIn van HÏ Grip in het feitenbestand zetten, zodat ze in `sameAs` mogen
- [ ] P3 · Over ons gelijktrekken met Canva: de pagina noemt nog vier founders, het merkdocument drie

## Bevindingen

### Keyword-keuze: niet concurreren met Over ons
Search Console (7-7 t/m 4-10) laat zien dat `/pages/over-ons` op positie 1 staat voor "hi grip" (52 vertoningen) en ook vertoond wordt op "higrip". De merkzoekopdrachten zijn sitebreed de sterkste: "higrip" 172 vertoningen (ctr 47,7%), "hi grip" 151 (ctr 37,8%). Daarom krijgt Missie & Visie **niet** de kale merknaam als primair keyword, maar **"missie en visie HÏ Grip"** (merk + intentie). Secundair: "Nederlands sportsokkenmerk", "gripsokkenmerk", "wie zit achter HÏ Grip". Op de categoriewoorden en "wie zit achter" is in 90 dagen geen enkele vertoning gemeten: dat zijn verwachtingen, geen bewezen vraag.

### Voorbeeldsites (bekeken in de browser op 7-10)
| Site | Patroon | SEO-opbouw |
|---|---|---|
| Nike (about.nike.com/en/mission) | Eén oversized missiezin als hero, verbreed naar iedere sporter | Geen H1, geen JSON-LD, ~340 woorden |
| On (on.com/en-us/explore/about-on) | Oprichtersverhaal, portretten, waarden als houding | H1 = slogan, beschrijvende alt-teksten per founder, geen JSON-LD, ~760 woorden |
| Adidas (annual report, purpose & mission) | Purpose → mission, zichtbare breadcrumb | Tekst grotendeels in beeld (~40 crawlbare woorden), geen JSON-LD |

Geen van de drie heeft schema op deze pagina. HÏ Grip kan hier voorlopen met AboutPage + Organization als entiteit.

### SEO-keuzes in het concept
- Title (53): "Missie en visie: Nederlands sportsokkenmerk | HÏ Grip". Description (150 tekens).
- H1 = eyebrow "Missie & visie van HÏ Grip" + de missiezin. Zeven H2's, elk geopend met één zelfstandige zin van 42–50 woorden (citeerbaar voor AI-zoekmachines).
- JSON-LD: AboutPage → Organization (`@id` `https://www.higrip.nl/#organization`, founders als Person met `jobTitle` Co-founder, `sameAs` alleen Trustpilot), BreadcrumbList (Home → Over ons → Missie & Visie), FAQPage. Geen rating of review.
- Interne links: Over ons, Performance Gripsokken (1.0) en 2.0 zwart, homepage. Gripclaim met de verplichte formulering en bron Apps et al. 2022.
- ~1.270 woorden. Geen overflow gemeten op 375 en 1440 px.

### Controle (seo-schema, seo-geo, seo-content)
Schema geldig; GEO 78/100; content 9 van 11 geslaagd, daarna opgelost (homepagelink in de tekst, samenstellingen). Bewust niet overgenomen: de grip-claim afzwakken (de formulering is verplicht volgens [[Feiten & Actuele Staat]]) en socials in `sameAs` (staan niet in het feitenbestand). De schema-agent stelt dat Google FAQ-rich-results sinds mei 2026 voor alle sites heeft stopgezet; niet geverifieerd. Het FAQPage-blok blijft staan omdat het 1-op-1 met de zichtbare tekst overeenkomt.

### Founders
Namen, sporten en focusgebieden komen uit de investeringspitch van 6-10 (slide "Wij zijn HÏ Grip"); foto's uit `Pitch/fotos` (Lars voetbal, Tigo voetbal, Timo snowboarden). De pitch-notities zeggen zelf dat portretten beter zijn.

## Wat niet lukte

Het concept-artifact van de nieuwe Over ons (NhEKihrG6Y9MrWe1TM8smz) was niet leesbaar vanaf het persoonlijke account; aansluiting is gemaakt op de Over ons in het thema (live-snapshot) en op de Brand Core. Visuele screenshots op 375/1440 lukten niet (browserpane verborgen, headless Edge geblokkeerd); de layout is gecontroleerd met metingen in iframes van exact 375 en 1440 px. Het Research Dashboard is niet gesynct of opnieuw gepubliceerd: het is van info@ en dat mag niet vanaf het persoonlijke account.

## Bronnen

- Canva *MERK & STRATEGIE — HÏ Grip*, pagina 1–12 (gelezen via de Canva-koppeling)
- [[Brand Identity Overview]] · [[Brand Voice & Tone of Voice]] · [[Strategische Keuzes]] · [[Feiten & Actuele Staat]]
- Search Console via `05_Research/_tools/google_data.py` (gsc en pagina, 90 dagen)
- Investeringspitch `Pitch/HI-Grip-Investeringspitch-2026-v2.pptx`, slide 10
- about.nike.com/en/mission · on.com/en-us/explore/about-on · report.adidas-group.com/2024/en/at-a-glance/our-purpose-and-mission.html

## Aantekeningen
