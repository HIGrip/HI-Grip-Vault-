---
id: 2026-10-14-search-console
titel: "Search Console & rankings — week 42"
kerntitel: "Klikken stijgen fors, maar twee Engelse pagina's met goede positie trekken 0% CTR"
datum: 2026-10-14
bron: routine
routine: "search-console"
categorie: SEO
status: nieuw
prioriteit: P2
samenvatting: "Klikken en vertoningen stegen op zowel 7 als 28 dagen (28 dagen: klikken +33,3%, vertoningen +10,5%, positie 2,6 beter naar 8,1), vooral gedragen door het hoofdkeyword 'gripsokken' en merknaam. Twee nieuwe lage-CTR-kansen op Engelse pagina's met prima positie (voetbalpagina en productpagina) komen erbij, en de drie eerder gemelde CTR-problemen (punt 19, 21, 22) en de kannibalisatie-/oude-URL-problemen (punt 17, 18) staan onverminderd open — punt 18 (kannibalisatie 'grip socks') blijkt zich ook bij de Nederlandse variant 'grip sokken' voor te doen."
gerelateerd: [2026-09-30-search-console, 2026-10-08-search-console, 2026-10-11-seo-audit-weekdelta, 2026-10-12-blogs-stappenplan, 2026-10-13-growth-radar-seo-content, 2026-10-13-homepage-redesign]
vervangt: []
bronbestand: ""
deadline: ""
---
# Search Console & rankings — week 42

> Map: [[Waar staat wat]]

## In het kort

Vierde meting van deze routine. `check` gaf eerst weer `ModuleNotFoundError` voor beide Google-koppelingen onder het standaard `python`-interpreter (3.11); de benodigde pakketten (`google-api-python-client`, `google-auth`, …) stonden wél geïnstalleerd, maar onder het systeem-Python 3.13. Draaien met `python3.13 02_Dashboard/_tools/google_data.py …` gaf direct "ok" voor zowel Search Console als GA4 — geen installatie nodig, alleen het juiste interpreter. Daarna is de volledige meting (7 en 28 dagen, GSC + GA4) gedraaid. Klikken en vertoningen stijgen op beide periodes; twee nieuwe lage-CTR-pagina's (Engelstalig) komen bovenop drie al bekende CTR-problemen uit eerdere runs van deze routine. Dashboard-sync (stap B) kon niet uitgevoerd worden: `ArtifactData` stond niet in de directe toolset van deze sessie en is niet opnieuw geladen binnen de beschikbare tijd — zie Wat niet lukte.

## Kerncijfers

- **156** · Klikken (28 dagen) · +33,3%
- **3.962** · Vertoningen (28 dagen) · +10,5%
- **3,94%** · CTR (28 dagen) · +0,68 pt
- **8,1** · Gemiddelde positie (28 dagen) · 2,6 beter

## Acties

- [ ] P2 · [search-console] Titel/meta van `/en/pages/gripsokken-voor-voetbal` herschrijven: positie 7,3–7,6 over 65–107 vertoningen (7/28 dagen), 0% CTR — Engelse zoekintentie dekken (o.a. "football grip socks", "grip socks football")
- [ ] P2 · [search-console] Titel/meta van `/en/products/performance-gripsokken` herschrijven: positie 5,9–6,3 over 58–98 vertoningen (7/28 dagen), 0% CTR

## Bevindingen

### Kerncijfers — totaal higrip.nl

| Periode | Klikken | Vertoningen | CTR | Gem. positie |
|---|---|---|---|---|
| Laatste 7 dagen (5–11 okt) | 50 | 1.046 | 4,78% | 8,3 |
| Vorige 7 dagen (28 sep–4 okt) | 45 | 940 | 4,79% | 7,8 |
| Verschil | **+11,1%** | +11,3% | −0,01 pt | −0,5 (iets slechter) |
| Laatste 28 dagen (14 sep–11 okt) | 156 | 3.962 | 3,94% | 8,1 |
| Vorige 28 dagen (17 aug–13 sep) | 117 | 3.586 | 3,26% | 10,7 |
| Verschil | **+33,3%** | +10,5% | +0,68 pt | +2,6 (beter) |

De 28-dagentrend is voor de tweede meting op rij duidelijk positief op alle vier de metrics. De 7-dagenpositie is licht slechter dan vorige week (8,3 vs. 7,8), maar dat is normale schommeling op dit volume — de maandtrend is het stabielere signaal. Search Console-data loopt 2–3 dagen achter.

**GA4 ter controle (7 dagen):** totaal 100 sessies (vorige 97, +3,1%), 4 keyEvents (vorige 2), omzet €131,26 (vorige €50,27). Opvallend: het kanaal Organic Search daalt in GA4 van 67 naar 44 sessies (−34,3% w/w), terwijl Direct juist stijgt (19→42). Dat loopt niet synchroon met de GSC-klikgroei (+11,1%). Mogelijke verklaring is kanaal-misattributie (zie het al openstaande punt over de sessiemeetbreuk van 21–23 sep) of ruis op dit volume (100 sessies/week) — geen conclusie, buiten de rol van deze routine (dat is CRO-terrein), alleen gemeld als signaal.

### Kernkeywords (7 dagen tenzij anders vermeld)

| Zoekterm | Positie | Vorige positie | Verschil | Vertoningen | Rankende URL |
|---|---|---|---|---|---|
| gripsokken | 5,9 | 6,9 | +1,0 | 111 | `/products/hi-grip-gripsokken-1` (oude URL, 107 van de 111) |
| gripsokken (28 dagen) | 6,4 | 8,7 | +2,4 | 336 | zelfde oude URL (330 van de 336) |
| grip sokken | 14,3 | 12,0 | −2,3 | 23 | verdeeld: `/collections/all` (14), oude productURL (6), `/` (3) — kannibalisatie, zie onder |
| grip socks | 10,4 | 12,4 | +2,0 | 73 | verdeeld over 6+ URL's (zie Kannibalisatie) |
| grip socks (28 dagen) | ≈10,9 (handmatig berekend, zie Wat niet lukte) | — | — | ≈312 | verdeeld over 9 URL's |
| gripsocks (28 dagen) | 8,6 | 9,6 | +1,0 | 104 | — |
| gripsokken kopen | 1,0 | — | — | 1 (te weinig) | `/collections/all` |
| gripsokken voetbal | 41,8 | 27,0 | −14,8 | 6 (te weinig) | `/pages/gripsokken-voor-voetbal` — juiste pagina, geen kannibalisatie, maar wel een forse positieval op minimaal volume |
| gripsokken padel / tennis / rugby | geen data | — | — | 0 (7 én 28 dagen) | — |
| antislip sokken (28 dagen) | 2,0 | 1,0 | −1,0 | 2 (te weinig) | — |

Alle aantallen onder de 100 vertoningen: geen conclusie, alleen volgen. "Gripsokken" (hoofdkeyword) is het enige kernkeyword met voldoende volume voor een echte uitspraak: solide verbetering op beide periodes, nog steeds bijna volledig op de oude URL (zie Kannibalisatie).

### Nieuwe zoektermen (7 dagen)

26 van de 50 gemeten termen zijn nieuw, de meeste met 1–4 vertoningen — overwegend schrijfvarianten en NL-voetbalgerelateerde long-tails. Met iets meer volume: **"grip sokken zwart"** (6 vertoningen, positie 16,3), **"grip sportsokken"**, **"grip voetbalsokken"** en **"grips socks"** (elk 4 vertoningen), **"highgrip"**, **"grip socks price"** en **"gripsocken"** (elk 3 vertoningen). Allemaal te weinig volume voor een conclusie of actie; geen patroon dat afwijkt van eerdere metingen (vooral schrijf- en merkvarianten).

### Kansen

**Striking distance (positie 5–20, ≥ 20 vertoningen):**

| Zoekterm | Periode | Positie | Vertoningen |
|---|---|---|---|
| gripsokken | 7 dagen | 5,9 | 111 |
| gripsokken | 28 dagen | 6,4 | 336 |
| grip socks | 7 dagen | 10,4 | 73 |
| grip socks football | 7 dagen | 6,8 | 26 |
| grip sokken | 7 dagen | 14,3 | 23 |
| gripsocks | 28 dagen | 8,6 | 104 |

Allemaal al gevolgde kernkeywords of al bekende kannibalisatieterm — geen nieuwe actie.

**Lage CTR, nieuw gevonden deze week (≥ 50 vertoningen, 0% CTR, goede positie):**

| Pagina | Periode | Vertoningen | CTR | Positie |
|---|---|---|---|---|
| `/en/pages/gripsokken-voor-voetbal` | 7 dagen | 65 | 0% | 7,6 |
| `/en/pages/gripsokken-voor-voetbal` | 28 dagen | 107 | 0% | 7,3 |
| `/en/products/performance-gripsokken` | 7 dagen | 58 | 0% | 5,9 |
| `/en/products/performance-gripsokken` | 28 dagen | 98 | 0% | 6,3 |

Beide zijn Engelse pagina's die goed genoeg ranken om klikken te verdienen (positie 5,9–7,6) maar in geen van beide periodes één klik trekken. Nieuwe acties hierboven.

**Lage CTR, al bekend (≥ 100 vertoningen, 28 dagen) — alleen bevestiging, geen nieuwe actie:**

| Pagina | Vertoningen | CTR | Positie | Bekend via |
|---|---|---|---|---|
| `/products/hi-grip-gripsokken-1` | 1.170 | 1,2% | 7,6 | backlogpunt 17 |
| `/collections/all` | 383 | 1,57% | 7,0 | backlog P2 (ontbrekende meta description) |
| `/en/collections/gripsokken` | 340 | 0,59% | 9,3 | backlogpunt 18 |
| `/products/performance-grip-socks-2-0-zwart` | 226 | 0,44% | 5,9 | SEO-titels sinds 11 okt live, nog geen 4 weken data |
| `/blogs/hi-grip/hoe-zorg-ik-voor-mijn-gripsokken` | 199 | 1,01% | 4,9 | backlogpunt 21 |
| `/blogs/hi-grip/waarom-hi-grip-gripsokken` | 174 | 0% | 7,6 | backlogpunt 22 |
| `/en/blogs/hi-grip/hoe-zorg-ik-voor-mijn-gripsokken` | 166 | 0% | 7,6 | backlogpunt 21 |
| `/collections/gripsokken` | 107 | 1,87% | 8,4 | SEO-titel sinds 11 okt live, nog geen 4 weken data |

### Kannibalisatie

**"gripsokken"** (hoofdkeyword, NL) rankt nog steeds vrijwel volledig via de oude URL `/products/hi-grip-gripsokken-1` in plaats van de canonieke `/products/performance-gripsokken` — 107 van de 111 vertoningen (7 dagen), 330 van de 336 (28 dagen). De nieuwe URL haalt voor deze term 0 vertoningen in beide periodes. Al backlogpunt 17, bevestigd, geen nieuwe actie.

**"grip socks"** blijft verdeeld over meerdere eigen URL's: op 28 dagen over negen URL's (`/en/collections/gripsokken` 118 vert., `/en` 79, `/collections/gripsokken` 45, `/collections/all` 28, `/` 20, `/en/products/performance-gripsokken` 12, `/products/performance-grip-socks-2-0-zwart` 6, `/en/pages/gripsokken-voor-padel` 3, `/en/pages/gripsokken-voor-voetbal` 1). Al backlogpunt 18, bevestigd, geen nieuwe actie.

**Nieuw opgemerkt — dezelfde kannibalisatie geldt voor de Nederlandse variant "grip sokken":** verdeeld over `/collections/all` (14 vert., positie 19,4), de oude productURL (6 vert., positie 7,7) en `/` (3 vert., positie 3,3). Dit is hetzelfde patroon als backlogpunt 18, maar dan voor de NL-term in plaats van de EN-term — update toegevoegd aan dat punt in de backlog in plaats van een nieuw punt.

### Pagina's (top 15 op klikken, 7 dagen)

| Pagina | Klikken | Vertoningen | Positieverschil |
|---|---|---|---|
| `/` | 24 | 139 | +0,3 |
| `/en` | 12 | 192 | −0,3 |
| `/products/hi-grip-gripsokken-1` | 6 | 358 | +0,6 |
| `/pages/zakelijk` | 2 | 17 | +4,6 |
| `/collections/all` | 1 | 94 | −1,0 |
| `/blogs/hi-grip/hoe-zorg-ik-voor-mijn-gripsokken` | 1 | 41 | −1,3 |
| `/blogs/hi-grip/de-wetenschap-achter-gripsokken` | 1 | 25 | +2,9 |
| `/pages/over-ons` | 1 | 25 | −0,2 |
| `/pages/gripsokken-voor-padel` | 1 | 22 | +0,6 |
| `/pages/gripsokken-voor-tennis` | 1 | 14 | −4,0 |

Overige pagina's uit de top 50: 0 klikken deze week. Op 28 dagen is het beeld vergelijkbaar maar met meer volume: `/` 88 klikken op 587 vertoningen (positie 8,4, +7,5 t.o.v. vorige periode), `/en` 28 klikken op 533 vertoningen. Grootste daler (≥ 10 vertoningen, 7 dagen): `/pages/gripsokken-voor-voetbal` (NL), van positie 6,4 naar 12,2 (−5,8) op 64 vertoningen — op dit volume een echt signaal, geen ruis, maar zonder duidelijke oorzaak zichtbaar in Search Console zelf; de Engelse tegenhanger bleef stabiel (−0,6). Geen directe actie, wel iets om volgende week te volgen. Grootste stijger: `/pages/zakelijk` (+4,6, van positie 9 naar 4,4).

### Indexering

Niet te meten: `google_data.py` heeft geen commando voor het Index Coverage-rapport. Zelfde beperking als de drie vorige metingen.

### Doorwerking van eerdere verbeteringen

**Eigen backlogpunten van deze routine, nog steeds open:**
- **Punt 19** (`/pages/ontdek-jouw-sport`, titel/meta): nog steeds 0% CTR op positie 4,3 (28 dagen) — en de vertoningen daalden zelfs van 106 naar 73 (−31,1%). Probleem onopgelost en verslechterend.
- **Punt 21** (`/blogs/hi-grip/hoe-zorg-ik-voor-mijn-gripsokken`, NL+EN): NL-CTR daalde verder van 2,18% naar 1,01% (2 klikken op 199 vertoningen, was 5 op 229). EN-versie kreeg voor het eerst echt volume (166 vertoningen, was 1) maar nog steeds 0% CTR. Probleem onopgelost.
- **Punt 22** (`/blogs/hi-grip/waarom-hi-grip-gripsokken`): CTR daalde naar 0% (was 0,98%), 0 klikken op 174 vertoningen (was 2 op 204). Probleem onopgelost en verslechterend.
- **Punt 17/18** (oude URL / kannibalisatie "grip socks"): bevestigd onveranderd, zie Kannibalisatie hierboven.

**Wijzigingen van andere routines (uit `_geheugen/seo-conversietest.md` en `CONTROLE.json`):** de SEO-titels/meta's voor `/collections/gripsokken` en de 2.0-producten staan sinds 11 oktober 2026 live (bevestigd door de actiecontrole, `2026-09-23-seo-conversietest-run-1#52494c22` en `#070e0039`). Dat is pas 3 dagen voor Search Console-data beschikbaar is — te vroeg voor een CTR-evaluatie (de procedure in `seo-conversietest.md` rekent zelf ook met 4 weken). Geen conclusie deze week, wel een vinger aan de pols voor de volgende meting. Het waardebalk-thema-blok (gratis-verzendingsdrempel + prijs per paar) staat nog niet gepubliceerd — niets te meten.

## Wat niet lukte

- **Google-koppeling faalde eerst onder het verkeerde interpreter:** `python 02_Dashboard/_tools/google_data.py check` gaf `ModuleNotFoundError` voor zowel `google` als `googleapiclient` onder het systeem-`python` (3.11). De benodigde pakketten stonden wél geïnstalleerd, maar onder `python3.13`. Opgelost door het script met `python3.13` aan te roepen in plaats van `python`; geen installatie nodig. Gemeld voor het geval dit bij de volgende cloudrun terugkomt — handig om in de routine-instructie `--data-map`/interpreter-pad vast te leggen als dit blijft voorkomen.
- **Dashboard-sync (stap B) niet gedraaid:** `ArtifactData` stond niet in de direct beschikbare tools van deze sessie; binnen de beschikbare tijd niet via `ToolSearch` geladen en uitgevoerd. Geen wijzigingen uit het dashboard naar de vault gehaald deze run.
- **Generatieve-AI-impressierapport (AI Overviews/AI Mode):** niet ondersteund door `google_data.py`. Blijft open als backlogpunt 15 (P2) — geen nieuwe actie.
- **Indexeringsstatus:** zelfde beperking, geen commando beschikbaar.
- **Aggregatie van "grip socks" (28 dagen) ontbreekt in de top-50-lijst op zoekterm:** de losse combinatie zoekterm+pagina toont in totaal wél ≈312 vertoningen verdeeld over 9 URL's (zie Kannibalisatie), maar de term zelf staat niet in de top-50-lijst per zoekterm — dezelfde inconsistentie die de meting van 8 oktober al meldde voor andere termen. De positie van 10,9 in de kernkeywordtabel is handmatig berekend als het vertoningsgewogen gemiddelde over de 9 URL's, niet rechtstreeks door de tool geleverd. Geen tool gerepareerd (buiten de rol van deze routine), wel gemeld zodat dit cijfer met een korrel zout wordt gelezen.

## Bronnen

- `python3.13 02_Dashboard/_tools/google_data.py check|gsc --dagen 7 --top 50|gsc --dagen 28 --top 50|ga4` (14 okt 2026)
- `00_Brand_Core/Feiten & Actuele Staat.md`
- `02_Dashboard/_geheugen/search-console.md`, `02_Dashboard/_geheugen/seo-conversietest.md`
- `02_Dashboard/_backlog/ACTIEBACKLOG.md`, `02_Dashboard/_backlog/CONTROLE.json`

## Aantekeningen
