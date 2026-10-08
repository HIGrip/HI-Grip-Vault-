---
id: 2026-10-08-search-console
titel: "Search Console & rankings — week 41"
datum: 2026-10-08
bron: routine
routine: "search-console"
categorie: SEO
status: nieuw
prioriteit: P2
kerntitel: "Klikken bijna verdubbeld door merknaam; twee blogs ranken goed maar krijgen geen klik"
samenvatting: "Klikken en vertoningen stegen fors op zowel 7 als 28 dagen (28 dagen: klikken +89,7%, vertoningen +26,6%, positie 2,9 beter), grotendeels gedragen door merkzoektermen ('higrip'/'hi grip') en bevestigd door GA4 (Organic Search-sessies +235% w/w). Twee contentblogs ranken goed (positie 4,7 en 7,2) maar trekken op 200 resp. 189 vertoningen bijna geen klik — nieuwe kans. De twee bekende kannibalisatie-/oude-URL-problemen (backlogpunt 17 en 18) staan onverminderd open."
gerelateerd: [2026-09-30-search-console, 2026-10-07-missie-visie-pagina, 2026-10-07-shoppagina-keuzepagina, 2026-10-08-audit-higrip-nl-seo-aeo-geo-aio-sxo-nieuwe-run]
vervangt: []
bronbestand: ""
deadline: ""
---
# Search Console & rankings — week 41

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[Waar staat wat]] · [[Home]]

## In het kort

Derde meting van deze routine. `check` gaf aanvankelijk een `ModuleNotFoundError` voor beide Google-koppelingen (ontbrekende Python-pakketten in deze cloudomgeving); na het installeren van `cffi google-analytics-data google-api-python-client google-auth` voor het juiste interpreter gaven zowel Search Console als GA4 "ok". Daarna kon de volledige meting draaien. Klikken en vertoningen stijgen fors op beide periodes, grotendeels gedragen door merkzoektermen. Twee contentblogs vallen op met een goede positie maar vrijwel 0% CTR — nieuwe kans, zie Bevindingen. Dashboard-sync (stap B) leverde niets op: alle 7 collecties waren leeg.

## Kerncijfers

- **165** · Klikken (28 dagen) · +89,7%
- **3.998** · Vertoningen (28 dagen) · +26,6%
- **4,13%** · CTR (28 dagen) · +1,37 pt
- **8,3** · Gemiddelde positie (28 dagen) · 2,9 beter

## Bevindingen

### Kerncijfers — totaal higrip.nl

| Periode | Klikken | Vertoningen | CTR | Gem. positie |
|---|---|---|---|---|
| Laatste 7 dagen (29 sep–5 okt) | 53 | 956 | 5,54% | 8,0 |
| Vorige 7 dagen (22–28 sep) | 23 | 878 | 2,62% | 7,6 |
| Verschil | **+130,4%** | +8,9% | +2,92 pt | −0,4 (iets slechter) |
| Laatste 28 dagen (8 sep–5 okt) | 165 | 3.998 | 4,13% | 8,3 |
| Vorige 28 dagen (11 aug–7 sep) | 87 | 3.157 | 2,76% | 11,2 |
| Verschil | **+89,7%** | +26,6% | +1,37 pt | +2,9 (beter) |

Beide periodes laten nu een duidelijke klikstijging zien — in tegenstelling tot de vorige twee metingen, waarin de weektrend juist daalde terwijl de maandtrend positief was. GA4 bevestigt het beeld onafhankelijk: Organic Search-sessies stegen van 20 naar 67 (+235% w/w), tegenover Direct dat juist daalde (54→23). Let op: Search Console-data loopt 3 dagen achter, de meest recente dagen van elke periode zijn dus nog niet compleet.

**Herkomst van de klikgroei:** van de 53 klikken (7 dagen) komen 23 uit de top 50 gemeten zoektermen, waarvan 22 op merknaam ("higrip" 15 klikken/pos. 1,6, "hi grip" 7 klikken/pos. 6,1). De resterende ~30 klikken vallen buiten de top 50 (zoektermen met weinig vertoningen maar wel een klik, of afgeschermde queries) en zijn niet uit te splitsen. Op paginaniveau is de stijging wel zichtbaar: de homepage trekt in 7 dagen 35 van de 53 klikken (147 vertoningen, CTR 23,8%) en de EN-homepage 10 (123 vertoningen, CTR 8,1%) — samen bijna 85% van alle klikken deze week.

### Kernkeywords (7 dagen tenzij anders vermeld)

| Zoekterm | Positie | Vorige positie | Verschil | Vertoningen | Rankende URL |
|---|---|---|---|---|---|
| gripsokken | 6,4 | 6,9 | +0,5 | 66 | `/products/hi-grip-gripsokken-1` (oude URL, 65 van de 66) |
| grip sokken | 13,3 | 8,5 | −4,9 | 27 | verdeeld (zie Kannibalisatie) |
| grip socks (28 dagen, meer volume) | — | — | — | — | geen data: term valt dit keer buiten de top 50 op 28 dagen (zie Wat niet lukte) |
| grip socks (7 dagen) | 12,7 | 11,5 | −1,2 | 30 | verdeeld over 4+ URL's (zie Kannibalisatie) |
| gripsokken kopen | 4,0 | 14,0 | +10,0 | 1 (te weinig) | `/products/hi-grip-gripsokken-1` |
| gripsokken voetbal | 26,2 | 36,7 | +10,5 | 5 (te weinig) | `/pages/gripsokken-voor-voetbal` — **juiste pagina, geen kannibalisatie** |
| gripsokken padel / tennis / rugby | geen data | — | — | 0 (7 én 28 dagen) | — |
| antislip sokken (28 dagen) | 2,0 | 1,0 | −1,0 | 2 (te weinig) | — |

Alle aantallen onder de 100 vertoningen: geen conclusie, alleen volgen. Positief: "gripsokken voetbal" rankt — anders dan eerdere metingen soms lieten zien bij andere sportfilters — via de juiste, specifieke voetbalpagina, niet via de homepage of een collectiepagina.

### Nieuwe zoektermen (7 dagen)

26 van de 50 gemeten termen zijn nieuw, de meeste met 1 vertoning (tikfout- of synoniemvarianten zoals "gribsocks", "grip stocks", "gripper socks" — geen nieuws). Twee nieuwe termen met echt volume, beide via de Engelse voetbalpagina: **"grip socks football"** (19 vertoningen, positie 4,8) en **"football grip socks"** (12 vertoningen, positie 6) — de EN-voetbalpagina lijkt zichtbaarheid op te bouwen in de Engelstalige voetbalmarkt. Ook "gripsokken hardlopen" duikt nieuw op (6 vertoningen, positie 7,5) — te weinig volume voor actie, wel een signaal dat hardlopen als zoekcluster naast de drie kernsporten leeft.

### Kansen

**Striking distance (positie 5–20, ≥ 20 vertoningen):**

| Zoekterm | Periode | Positie | Vertoningen |
|---|---|---|---|
| gripsokken | 7 dagen | 6,4 | 66 |
| gripsokken | 28 dagen | 6,5 | 284 |
| gripsocks | 7 dagen | 7,7 | 40 |
| gripsocks | 28 dagen | 8,2 | 114 |
| grip socks | 7 dagen | 12,7 | 30 |
| grip sokken | 7 dagen | 13,3 | 27 |

Allemaal al gevolgde kernkeywords — geen nieuwe actie, wel bevestiging dat "gripsokken" nu solide op twee cijfers scoort (6,4–6,5), al blijft dat op de oude URL.

**Lage CTR (28 dagen, ≥ 100 vertoningen) — twee nieuwe kansen:**

| Pagina | Vertoningen | CTR | Positie |
|---|---|---|---|
| `/blogs/hi-grip/hoe-zorg-ik-voor-mijn-gripsokken` | 200 | **1,0%** | 4,7 |
| `/en/blogs/hi-grip/hoe-zorg-ik-voor-mijn-gripsokken` | 154 | **0%** | 7,8 |
| `/blogs/hi-grip/waarom-hi-grip-gripsokken` | 189 | **1,06%** | 7,2 |
| `/products/hi-grip-gripsokken-1` | 1.091 | 0,82% | 7,7 |
| `/en/collections/gripsokken` | 558 | 0,36% | 9,9 |
| `/collections/all` | 427 | 1,17% | 7,1 |
| `/products/performance-grip-socks-2-0-zwart` | 240 | 0,42% | 5,5 |
| `/pages/collection` | 118 | 0% | 1,6 |

De laatste vier zijn al bekend via openstaande backlogpunten (17, 18, de ontbrekende meta description van `/collections/all`, en de nog-op-concept-staande SEO-titels van de 2.0-producten) — geen nieuwe actie. `/pages/collection` is geen nieuwe kans: de 0% CTR daar komt vrijwel volledig van de merkzoektermen "higrip" en "hi grip" (zie Kannibalisatie) — dezelfde pagina als in het al openstaande punt over een ontbrekende redirect; dit bevestigt dat punt, geen aanvullende titelactie nodig. **Nieuw en nog niet gemeld:** de twee content-blogs over sokonderhoud ("hoe zorg ik voor mijn gripsokken", NL + EN) en "waarom HÏ Grip gripsokken" ranken op een goede positie (4,7 en 7,2) maar krijgen vrijwel geen klik — actie hieronder.

### Kannibalisatie

**"grip socks"** blijft verdeeld over meerdere eigen URL's: `/en/collections/gripsokken` (9 vert., pos. 13,2), `/en/products/performance-gripsokken` (7 vert.), `/` (5 vert.), `/en` (5 vert.), `/products/performance-grip-socks-2-0-zwart` (2 vert.) en `/collections/all` (1 vert.) — al backlogpunt 18, niet opnieuw voorgesteld, wel bevestigd dat het nog niet is opgelost.

**"gripsokken"** (hoofdkeyword, NL) rankt nog steeds vrijwel volledig (65 van 66 vertoningen) via de oude URL `/products/hi-grip-gripsokken-1` in plaats van de canonieke `/products/performance-gripsokken` — al backlogpunt 17, bevestigd, geen nieuwe actie.

**"higrip"/"hi grip"** (merknaam) verschijnen dit keer voor dezelfde zoekopdracht op zowel `/` (hoofdresultaat, de meeste klikken) als `/pages/collection` (16 resp. 7 vertoningen, positie 1, 0 klikken) — geen echte kannibalisatie van een commercieel keyword, maar wel het bewijs dat `/pages/collection` meedraait in Google's resultaten voor de merknaam zonder zelf ooit een klik te krijgen. Ondersteunt het al openstaande punt dat deze pagina moet worden doorgestuurd of omgebouwd.

### Pagina's (top 15 op klikken, 7 dagen)

| Pagina | Klikken | Vertoningen | Positieverschil |
|---|---|---|---|
| `/` | 35 | 147 | −1,5 (iets slechter) |
| `/en` | 10 | 123 | −1,2 |
| `/products/hi-grip-gripsokken-1` | 1 | 269 | +0,8 |
| `/collections/all` | 1 | 90 | +0,2 |
| `/blogs/hi-grip/hoe-zorg-ik-voor-mijn-gripsokken` | 1 | 38 | +2,5 |
| `/pages/gripsokken-voor-padel` | 1 | 26 | +1,1 |
| `/collections/gripsokken` | 1 | 19 | +1,3 |
| `/pages/contact` | 1 | 6 | +1,8 |
| `/pages/veelgestelde-vragen` | 1 | 4 | −1,2 |
| `/en/collections/frontpage` | 1 | 2 | +4,5 |

Op 28 dagen is het beeld steviger: `/` steeg van gem. positie 17,2 naar 9,0 (+8,2) met 101 klikken op 646 vertoningen; `/collections/all` steeg van 11,3 naar 7,1 (+4,2). Nieuw zichtbaar met data: `/pages/gripsokken-voor-voetbal` (52 vertoningen, positie 6,6) en de EN-tegenhanger (50 vertoningen, positie 7,1) — beide hadden vorige meting nog geen `vorige_positie`, dus staan voor het eerst met volume in de resultaten. Grootste daler (7 dagen, ≥10 vertoningen): `/en/collections/all` (−2,0). Grootste stijger: `/en/collections/frontpage` (+4,5, op maar 2 vertoningen — ruis).

### Indexering

Niet te meten: `google_data.py` heeft geen commando voor het Index Coverage-rapport. Zelfde beperking als de twee vorige metingen.

### Doorwerking van eerdere verbeteringen

`CONTROLE.json` bevestigt sinds 25 september 2026 (`2026-09-21-weekoverzicht#fded3395`) dat de nieuwe homepage-titel en meta description live staan. De trend blijft positief: 28-dagenpositie van `/` nu 9,0 (was 17,2 vorige 28-dagenperiode, en 11,9 bij de meting van 30 sep) — een derde week op rij verbetering. De 7-dagenpositie schommelt sterker (8,8 deze week, was 6,6 vorige meting) bij een klein aantal vertoningen; dat hoort bij deze schaal en is geen trendbreuk.

Overige concepten uit `_geheugen/seo-conversietest.md` (SEO-titels 2.0-producten, collectiebeschrijving, alt-teksten, het nieuwe waardebalk-blok) staan nog op CONCEPT/niet gepubliceerd — niets nieuws om op te meten.

## Wat niet lukte

- **Google-koppeling faalde eerst:** `check` gaf `ModuleNotFoundError` voor zowel `google` als `googleapiclient` — de benodigde Python-pakketten stonden niet geïnstalleerd voor het interpreter dat `google_data.py` gebruikt. Opgelost door `cffi google-analytics-data google-api-python-client google-auth` te installeren; daarna werkte de meting volledig. Gemeld voor het geval dit bij de volgende cloudrun terugkomt.
- **Generatieve-AI-impressierapport (AI Overviews/AI Mode):** niet ondersteund door `google_data.py`. Blijft open als backlogpunt 15 (P2) — geen nieuwe actie.
- **Indexeringsstatus:** zelfde beperking, geen commando beschikbaar.
- **Data-inconsistentie opgemerkt, niet opgelost:** de exacte term "grip socks" (30 vertoningen in de laatste 7 dagen) en de pagina `/pages/ontdek-jouw-sport` (12 vertoningen in de laatste 7 dagen) komen voor in de top-50-lijst van 7 dagen, maar ontbreken volledig in de top-50-lijst van 28 dagen — ondanks dat de 28-dagenperiode de 7-dagenperiode volledig omvat en de 28-dagenlijst termen met slechts 1 vertoning bevat. Dit wijst erop dat `google_data.py` de top 50 niet op vertoningen sorteert maar op een andere (vermoedelijk API-eigen, bij nul klikken niet-deterministieve) volgorde. Geen tool gerepareerd (buiten de rol van deze routine) — wel gemeld, zodat cijfers voor exact deze twee gevallen met een korrel zout worden gelezen.

## Acties

- [ ] P2 · [search-console] Titel/meta van `/blogs/hi-grip/hoe-zorg-ik-voor-mijn-gripsokken` (NL + EN) herschrijven: NL rankt op gem. positie 4,7 over 200 vertoningen (28 dagen) met maar 1,0% CTR, EN op positie 7,8 over 154 vertoningen met 0% CTR
- [ ] P2 · [search-console] Titel/meta van `/blogs/hi-grip/waarom-hi-grip-gripsokken` herschrijven: positie 7,2 over 189 vertoningen (28 dagen), CTR 1,06%

## Bronnen

- `python 05_Research/_tools/google_data.py check|gsc --dagen 7 --top 50|gsc --dagen 28 --top 50|ga4 --dagen 7|ga4 --dagen 28` (8 okt 2026)
- `00_Brand_Core/Feiten & Actuele Staat.md`
- `05_Research/_geheugen/search-console.md`, `05_Research/_geheugen/seo-conversietest.md`
- `05_Research/_backlog/ACTIEBACKLOG.md`, `05_Research/_backlog/CONTROLE.json`
- Dashboard-database (`ArtifactData`, 7 collecties): alle leeg, niets gesynchroniseerd

## Aantekeningen
