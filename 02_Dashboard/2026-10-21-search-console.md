---
id: 2026-10-21-search-console
titel: "Search Console & rankings — week 43"
kerntitel: "28-dagentrend positief, 7 dagen daalt scherp, voetbalpagina verslechtert al 3 weken"
datum: 2026-10-21
bron: routine
routine: "search-console"
categorie: SEO
status: nieuw
prioriteit: P2
samenvatting: "7 dagen: klikken −30% en CTR van 4,78% naar 2,94% (bevestigd door GA4: organic sessions −48,9%); 28 dagen blijft juist verbeteren (klikken +12,4%, positie 2,0 beter naar 8,1). Hoofdkeyword 'gripsokken' rankt nu voor 100% op de oude URL (was 96-97%). Geen nieuwe CTR-problemen — de vier eerder gemelde (punt 19, 21, 22, 25, 26) en de kannibalisatie van 'grip socks'/'grip sokken' (punt 18) staan onveranderd open. Nieuw: `/pages/gripsokken-voor-voetbal` (NL) verslechtert nu drie metingen op rij (positie 6,4 → 12,2 → 15,7) zonder dat de kernterm zelf kannibaliseert — backlogpunt 27."
gerelateerd: [2026-10-14-search-console, 2026-10-19-seo-conversietest-run-5, 2026-10-19-regressiecheck, 2026-10-20-growth-radar-seo-content]
vervangt: []
bronbestand: ""
deadline: ""
---
# Search Console & rankings — week 43

> Map: [[Waar staat wat]]

## In het kort

Vijfde meting van deze routine. `check` gaf eerst `ModuleNotFoundError` voor beide Google-koppelingen: `pip`/`python3` wezen naar verschillende Python-versies (3.13 vs. 3.11) en de benodigde pakketten (`google-api-python-client`, `google-auth`, `cryptography`/`cffi`, `google-analytics-data`) stonden niet voor de 3.11-interpreter geïnstalleerd die `python3 google_data.py` daadwerkelijk gebruikt. Opgelost door ze met `python3 -m pip install --user` opnieuw te installeren voor die interpreter; daarna gaf `check` "ok" voor zowel Search Console als GA4. De volledige meting (7 en 28 dagen, GSC + GA4) is daarna gedraaid. Kernbeeld: de 28-dagentrend zet de verbetering van de vorige twee metingen voort, maar de laatste 7 dagen laten een scherpe terugval zien in klikken en CTR — bevestigd door GA4 (organic sessions ook fors lager). Geen nieuwe lage-CTR-pagina's; wel een pagina (`/pages/gripsokken-voor-voetbal`, NL) die al drie weken op rij verder wegzakt in positie, zonder duidelijke oorzaak in de zoektermdata zelf — nieuw backlogpunt.

## Kerncijfers

- **154** · Klikken (28 dagen) · +12,4%
- **4.089** · Vertoningen (28 dagen) · +4,6%
- **3,77%** · CTR (28 dagen) · +0,27 pt
- **8,1** · Gemiddelde positie (28 dagen) · 2,0 beter

## Acties

- [ ] P2 · [search-console] Positieval `/pages/gripsokken-voor-voetbal` (NL) uitzoeken: positie 6,4 → 12,2 → 15,7 over drie metingen op rij, op vergelijkbaar volume (64-80 vertoningen/7 dagen); geen kannibalisatie op de kernterm zelf

## Bevindingen

### Kerncijfers — totaal higrip.nl

| Periode | Klikken | Vertoningen | CTR | Gem. positie |
|---|---|---|---|---|
| Laatste 7 dagen (12–18 okt) | 35 | 1.192 | 2,94% | 8,6 |
| Vorige 7 dagen (5–11 okt) | 50 | 1.046 | 4,78% | 8,3 |
| Verschil | **−30,0%** | +14,0% | −1,84 pt | −0,3 (iets slechter) |
| Laatste 28 dagen (21 sep–18 okt) | 154 | 4.089 | 3,77% | 8,1 |
| Vorige 28 dagen (24 aug–20 sep) | 137 | 3.909 | 3,5% | 10,1 |
| Verschil | **+12,4%** | +4,6% | +0,27 pt | +2,0 (beter) |

Search Console-data loopt 2–3 dagen achter. De 7-dagenterugval (klikken −30%, CTR bijna gehalveerd) is groter dan de normale schommeling van vorige week (−0,5 positie) en wordt bevestigd door GA4.

**GA4 ter controle:** 7 dagen totaal 66 sessies (vorige 100, −34%), keyEvents 1 (vorige 4), omzet €89,90 (vorige €131,26). Het kanaal Organic Search daalt van 45 naar 23 sessies (−48,9% w/w) — synchroon met de GSC-klikdaling, dus geen kanaal-misattributie dit keer maar een echte terugval. Op 28 dagen is het beeld andersom: totaal 348 sessies (vorige 298, +16,8%), Organic Search 158 sessies (vorige 101, +56,4%). Dezelfde tweedeling als bij GSC: de maand is positief, de laatste week niet. Geen duidelijke oorzaak zichtbaar in Search Console zelf (geen nieuwe fouten, geen massale positieval op de kernkeywords); mogelijk een tijdelijke schommeling op dit volume (goed voor CRO/analytics om te volgen, buiten de rol van deze routine).

### Kernkeywords (7 dagen tenzij anders vermeld)

| Zoekterm | Positie | Vorige positie | Verschil | Vertoningen | Rankende URL |
|---|---|---|---|---|---|
| gripsokken | 5,4 | 5,9 | +0,5 | 255 | `/products/hi-grip-gripsokken-1` (oude URL, **100%** van de 255) |
| gripsokken (28 dagen) | 5,8 | 7,8 | +2,0 | 514 | zelfde oude URL, 509 van de 514 (99%) |
| grip socks | 10,6 | 10,4 | −0,2 | 93 | verdeeld over 6 URL's (zie Kannibalisatie) |
| grip socks (28 dagen) | ≈11,2 (handmatig berekend, zie Wat niet lukte) | — | — | ≈255 | verdeeld over 10 URL's |
| grip sokken | 10,7 | 14,3 | +3,6 | 28 | verdeeld over 4 URL's (zie Kannibalisatie) |
| grip sokken (28 dagen) | niet beschikbaar (zie Wat niet lukte) | — | — | — | — |
| gripsokken kopen | 14,7 | — | — | 4 (te weinig) | `/products/hi-grip-gripsokken-1` |
| gripsokken voetbal | 27,4 | 41,8 | +14,4 | 14 (te weinig) | `/pages/gripsokken-voor-voetbal` — juiste pagina, geen kannibalisatie |
| gripsokken padel / tennis / rugby | geen data | — | — | 0 | — |
| antislip sokken | geen data | — | — | 0 | — |

Alle aantallen onder de 100 vertoningen: geen conclusie, alleen volgen. "Gripsokken" blijft het enige kernkeyword met voldoende volume: verbetert verder op beide periodes, en rankt nu voor 100% (7 dagen) op de oude URL — nog geconcentreerder dan de 96-97% van de vorige metingen.

### Nieuwe zoektermen

7 dagen: 3 van de 50 gemeten termen zijn nieuw met ≥ 3 vertoningen — **"grip sokken voetbal"** (4 vert., positie 29, NL-longtail van de kernterm), **"geipsokken"** (3 vert., typo) en **"grip socks pack"** (3 vert.). 28 dagen: 6 nieuwe termen met ≥ 3 vertoningen, waarvan **"football grip socks"** (22 vert., positie 6,0) en **"gript socks"** (21 vert., positie 6,5) het meeste volume hebben — allebei schrijfvarianten van bestaande kernkeywords, geen nieuw patroon. Verder opvallend maar niet-gerelateerd: **"fibromyalgie drukpunten"** (5 vert., 28 dagen) — vindt waarschijnlijk een drukpunten-blogpost, geen actie.

### Kansen

**Striking distance (positie 5–20, ≥ 20 vertoningen):**

| Zoekterm | Periode | Positie | Vertoningen |
|---|---|---|---|
| gripsokken | 7 dagen | 5,4 | 255 |
| gripsokken | 28 dagen | 5,8 | 514 |
| grip socks | 7 dagen | 10,6 | 93 |
| hi grip | 28 dagen | 5,2 | 65 |
| football grip socks | 28 dagen | 6,0 | 22 |
| gript socks | 28 dagen | 6,5 | 21 |

Allemaal al gevolgde kernkeywords of merkvarianten — geen nieuwe actie.

**Lage CTR — alleen bevestiging van al bekende punten, geen nieuwe actie:**

| Pagina | Periode | Vertoningen | CTR | Positie | Bekend via |
|---|---|---|---|---|---|
| `/products/hi-grip-gripsokken-1` | 28 dagen | 1.353 | 1,11% | 7,0 | backlogpunt 17 |
| `/collections/all` | 28 dagen | 374 | 0,8% | 7,7 | backlog P2 (ontbrekende meta description) |
| `/en/collections/gripsokken` | 28 dagen | 232 | 0,86% | 9,8 | backlogpunt 18 (kannibalisatie) |
| `/blogs/hi-grip/hoe-zorg-ik-voor-mijn-gripsokken` | 28 dagen | 185 | 1,08% | 5,1 | backlogpunt 21 |
| `/en/products/performance-gripsokken` | 28 dagen | 177 | 1,13% | 6,6 | backlogpunt 26 |
| `/blogs/hi-grip/waarom-hi-grip-gripsokken` | 28 dagen | 170 | 0% | 7,6 | backlogpunt 22 |
| `/en/pages/gripsokken-voor-voetbal` | 28 dagen | 141 | 0,71% | 7,0 | backlogpunt 25 (CTR iets verbeterd t.o.v. vorige meting, nog steeds onder de 1%) |
| `/en/blogs/hi-grip/hoe-zorg-ik-voor-mijn-gripsokken` | 28 dagen | 126 | 0% | 7,5 | backlogpunt 21 |

Geen nieuwe lage-CTR-pagina deze week — alle acht bekende problemen staan onveranderd open.

### Kannibalisatie

**"gripsokken"** (hoofdkeyword, NL) rankt nog steeds (nu voor 100%) via de oude URL `/products/hi-grip-gripsokken-1` in plaats van `/products/performance-gripsokken`. Al backlogpunt 17, bevestigd, geen nieuwe actie.

**"grip socks"** blijft verdeeld over meerdere eigen URL's: op 7 dagen over 6 URL's (`/en` 67 vert., `/en/products/performance-gripsokken` 10, `/` 9, `/en/collections/gripsokken` 7, plus 2 met 1 vert.); op 28 dagen over 10 URL's (`/en` 145, `/en/collections/gripsokken` 31, `/` 25, `/en/products/performance-gripsokken` 22, `/collections/all` 15, en 5 kleinere). Al backlogpunt 18, bevestigd, geen nieuwe actie.

**"grip sokken"** (NL-variant): op 7 dagen verdeeld over 4 URL's (`/products/hi-grip-gripsokken-1` 13 vert., `/collections/all` 11, `/` 3, 1 variant-URL 1) — zelfde patroon als vorige meting, al onderdeel van backlogpunt 18 (update 14 okt).

### Pagina's (top 15 op klikken, 7 dagen)

| Pagina | Klikken | Vertoningen | CTR | Positieverschil |
|---|---|---|---|---|
| `/` | 21 | 110 | 19,09% | −3,3 |
| `/en` | 5 | 187 | 2,67% | −1,2 |
| `/products/hi-grip-gripsokken-1` | 2 | 476 | 0,42% | +0,3 |
| `/en/products/performance-gripsokken` | 2 | 79 | 2,53% | −1,0 |
| `/en/collections/gripsokken` | 1 | 65 | 1,54% | −1,6 |
| `/en/pages/gripsokken-voor-voetbal` | 1 | 34 | 2,94% | +1,8 |
| `/pages/gripsokken-voor-padel` | 1 | 25 | 4,0% | +0,1 |
| `/pages/over-ons` | 1 | 15 | 6,67% | — |
| `/pages/gripsokken-voor-tennis` | 1 | 9 | 11,11% | — |

Overige pagina's uit de top 50: 0 klikken deze week. Grootste daler (≥ 10 vertoningen, 7 dagen): `/collections/gripsokken` (NL), positie −5,9 op 11 vertoningen. Grootste stijger: `/pages/onze-missie`, +9,1 op 10 vertoningen. Op 28 dagen: top op klikken is `/` (88 klikken/527 vert., +5,8), `/en` (25/614, −1,8), `/products/hi-grip-gripsokken-1` (15/1.353, +1,6). Grootste daler (28 dagen, ≥ 10 vert.): `/en/products/hi-grip-gripsokken-1` (de oude Engelse productURL, −10,5 op 14 vertoningen — laag volume, geen conclusie). Grootste stijger (28 dagen): `/en/blogs/hi-grip/de-wetenschap-achter-gripsokken` (+11,0 op 21 vertoningen).

**`/pages/gripsokken-voor-voetbal` (NL)** valt opnieuw op: positie 15,7 deze week (vorige 12,2, −3,5) op 80 vertoningen — de derde meting op rij met een duidelijke verslechtering (6,4 → 12,2 → 15,7). De kernterm "gripsokken voetbal" zelf rankt wél nog op deze juiste pagina en verbeterde zelfs (positie 41,8 → 27,4), maar dat is op te weinig volume (14 vertoningen) voor een conclusie — de algehele paginapositie daalt dus door de bredere mix van zoektermen die er binnenkomen, niet door één kannibaliserende term. Nieuw backlogpunt 27.

### Indexering

Niet te meten: `google_data.py` heeft geen commando voor het Index Coverage-rapport. Zelfde beperking als de vier vorige metingen.

### Doorwerking van eerdere verbeteringen

**Eigen backlogpunten van deze routine, nog steeds open:**
- **Punt 19** (`/pages/ontdek-jouw-sport`): niet in de top-15-op-klikken of top-50-zoektermen van deze meting verschenen — geen nieuwe cijfers deze week om te vergelijken; blijft open zoals vastgelegd.
- **Punt 21** (blog "hoe zorg ik voor mijn gripsokken", NL+EN): NL 185 vertoningen/1,08% CTR (28 dagen), EN 126 vertoningen/0% CTR — beide onveranderd problematisch.
- **Punt 22** (blog "waarom HÏ Grip gripsokken"): 170 vertoningen/0% CTR (28 dagen) — onveranderd.
- **Punt 25/26** (`/en/pages/gripsokken-voor-voetbal`, `/en/products/performance-gripsokken`): CTR licht verbeterd (0,71% resp. 1,13%, was 0% bij beide), maar ruim onder wat de positie (6,6-7,0) zou moeten opleveren — problemen blijven open.
- **Punt 17/18** (oude URL / kannibalisatie "grip socks"/"grip sokken"): bevestigd onveranderd, zie Kannibalisatie hierboven.

**Wijzigingen van andere routines (uit `_geheugen/seo-conversietest.md` en `CONTROLE.json`):** de SEO-titels/meta's voor `/collections/gripsokken` en de 2.0-producten (zwart/wit) staan sinds 11 oktober 2026 live (bevestigd door de actiecontrole, `2026-09-23-seo-conversietest-run-1#52494c22`). Dat is nu 10 dagen geleden — nog steeds te vroeg voor een volwaardige CTR-evaluatie (de procedure van `seo-conversietest.md` rekent met 4 weken, dus vanaf ±8 november), maar wel al zichtbaar: `/collections/gripsokken` (NL) staat met 59 vertoningen/28 dagen en 3,39% CTR niet in de lage-CTR-lijst — een voorzichtig positief signaal, nog geen conclusie.

## Wat niet lukte

- **Google-koppeling faalde eerst door een pakketmismatch:** `python3 02_Dashboard/_tools/google_data.py check` gaf `ModuleNotFoundError` voor `googleapiclient` en `google.analytics`. `pip`/`python3 -m pip` wezen naar twee verschillende Python-installaties (3.13 vs. 3.11); de benodigde pakketten stonden alleen voor 3.13 geïnstalleerd, terwijl het script onder 3.11 draait. Opgelost met `python3 -m pip install --user google-api-python-client google-auth cryptography cffi google-analytics-data google-analytics-admin` — daarna werkte `check` direct. Gemeld voor het geval dit bij de volgende cloudrun terugkomt (de vorige meting had een vergelijkbaar maar net ander symptoom: daar werkte `python3.13` wel en `python3` niet; dit keer was het net andersom qua welke interpreter de pakketten had. Een vast, al-geïnstalleerd image met deze pakketten voor de interpreter die het script daadwerkelijk gebruikt zou dit struikelblok permanent oplossen).
- **"grip socks" (28 dagen) en "grip sokken" (7 én 28 dagen) staan niet in de top-50-lijst per zoekterm:** de Search Console-API retourneert bij een `rowLimit` de rijen met de meeste klikken, niet de meeste vertoningen; de tool sorteert daarna pas op vertoningen. Bij een term met 0 klikken maar veel vertoningen (zoals deze twee) kan dat betekenen dat de term niet in de opgehaalde set zit, ook al zou hij op vertoningen bovenaan staan. Voor "grip socks" (28 dagen) is het cijfer in de kernkeywordtabel daarom handmatig berekend als vertoningsgewogen gemiddelde over de zoekterm+pagina-combinaties (≈11,2 over 255 vertoningen/10 URL's). Voor "grip sokken" (28 dagen) was zelfs die combinatie niet beschikbaar binnen de opgehaalde top-100 zoekterm+pagina-rijen — geen cijfer te geven, alleen de 7-dagencijfers. Dezelfde tool-inconsistentie als de vorige drie metingen; geen tool gerepareerd (buiten de rol van deze routine).
- **Generatieve-AI-impressierapport (AI Overviews/AI Mode):** niet ondersteund door `google_data.py`. Blijft open als backlogpunt 15 (P2) — geen nieuwe actie.
- **Indexeringsstatus:** zelfde beperking, geen commando beschikbaar.

## Bronnen

- `python3 02_Dashboard/_tools/google_data.py check|gsc --dagen 7 --top 50|gsc --dagen 28 --top 50|ga4 --dagen 7|ga4 --dagen 28` (21 okt 2026)
- `00_Brand_Core/Feiten & Actuele Staat.md`
- `02_Dashboard/_geheugen/search-console.md`, `02_Dashboard/_geheugen/seo-conversietest.md`, `02_Dashboard/_geheugen/actiecontrole.md`
- `02_Dashboard/_backlog/ACTIEBACKLOG.md`, `02_Dashboard/_backlog/CONTROLE.json`

## Aantekeningen
