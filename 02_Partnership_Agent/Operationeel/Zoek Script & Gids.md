# Zoek Script & Gids — HÏ Grip Influencer Zoek Agent

> Bijgewerkt: 2026-06-24
> Zie ook: [[Evaluatiecriteria]] · [[Influencer Database]] · [[Outreach Templates]] · [[Pipeline Tracker]]

---

## Wat doet het script?

Het Python-script `create_influencer_list.py` genereert een opgemaakte Excel-werkmap met twee tabbladen:

1. **Influencer Lijst** — alle gevonden en te zoeken accounts, per sport gesectioneerd, met directe Instagram-links
2. **Zoekgids** — verificatiechecklist, zoektermen per sport, en alle gevonden accounts met te-checken-punten

**Output:** `C:\Users\lars\Downloads\HiGrip_Nano_Influencers_NL.xlsx`

---

## Script uitvoeren

```
pip install openpyxl
python C:\Users\lars\create_influencer_list.py
```

---

## Zoektermen per sport

### Tennis

| Kanaal             | Zoektermen                                                               |
| ------------------ | ------------------------------------------------------------------------ |
| Instagram hashtags | #tennisnederland · #tennisnl · #tennismatch · #tennislife · #tennisreels |
| TikTok             | tennis vlog nl · tennis journey nederland · tennis training              |
| Slimste plek       | Kijk wie reageert op @timtopspin / @tennistomy posts                     |

### Padel

| Kanaal | Zoektermen |
|---|---|
| Instagram hashtags | #padelnederland · #padelholland · #padellife · #padelmatch · #padelnl · #padelrotterdam · #padelen |
| TikTok | padel vlog nl · padel progressie nederland · padel journey |
| Slimste plek | Kijk bij comments op @menno.nolten reels |

### Voetbal

| Kanaal             | Zoektermen                                                                                |
| ------------------ | ----------------------------------------------------------------------------------------- |
| Instagram hashtags | #voetbalnederland · #skillsnl · #zaalvoetbal · #futsalnl · #pannavoetbal · #straatvoetbal |
| TikTok             | voetbal vlog nl · zaalvoetbal training · freestyle voetbal nederland                      |
| Slimste plek       |                                                                                           |

### Rugby

| Kanaal             | Zoektermen                                                                 |
| ------------------ | -------------------------------------------------------------------------- |
| Instagram hashtags | #rugbynederland · #rugbynl · #damesrugby · #rugbylife                      |
| TikTok             | rugby nederland vlog · rugby training nl · rugby speler                    |
| Slimste plek       | Kijk bij @rugby.nederland / @ereklasserugby — kleine creators die reageren |

### Basketball

| Kanaal             | Zoektermen                                                 |
| ------------------ | ---------------------------------------------------------- |
| Instagram hashtags | #basketballnl · #dutchhoops · #streetballnl · #3x3nl       |
| TikTok             | basketball nederland · streetball nl · 3x3 basketball vlog |
| Slimste plek       | Kijk bij @3x3nl volgers — actieve kleine creators          |

---

## Slimste zoektruc

> Zoek niet alleen op hashtag — **kijk wie reageert op posts van al bekende creators.**
> Kleine actieve commenters zijn vaak zelf ook creators.

Referentie-accounts om reacties te scannen:

- Tennis: @timtopspin
- Padel: @menno.nolten · @jospadel
- Voetbal: @finnpicard_ · @iamyasinflits · @abelfreestylevoetbal
- Rugby: @rugby.nederland · @ereklasserugby
- Basketball: @3x3nl · @basketballnederland

---

## Python script (volledige broncode)

```python
import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

wb = openpyxl.Workbook()

COLOR_BG    = "111111"
COLOR_GREEN = "1B5E20"; COLOR_GREEN_L = "C8E6C9"
COLOR_BLUE  = "1565C0"; COLOR_BLUE_L  = "BBDEFB"
COLOR_ORG   = "E65100"; COLOR_ORG_L   = "FFE0B2"
COLOR_GOLD  = "F57F17"; COLOR_GOLD_L  = "FFF9C4"
COLOR_PURP  = "E8EAF6"

thin   = Side(style="thin",   color="DDDDDD")
medium = Side(style="medium", color="999999")
tb     = Border(left=thin, right=thin, top=thin, bottom=thin)
hb     = Border(left=medium, right=medium, top=medium, bottom=medium)

ws = wb.active
ws.title = "Influencer Lijst"

headers = [
    "Status", "Account", "Platform", "Volgers (max 5K)", "Gem. views/likes",
    "Sport", "Wat maakt hun content goed", "Merkfit HI GRIP",
    "Content idee", "Contact", "Prioriteit", "Notities",
]

ws.row_dimensions[1].height = 36
for ci, h in enumerate(headers, 1):
    c = ws.cell(row=1, column=ci, value=h)
    c.font = Font(name="Calibri", bold=True, color="FFFFFF", size=11)
    c.fill = PatternFill("solid", fgColor=COLOR_BG)
    c.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
    c.border = hb

for i, w in enumerate([14, 26, 14, 14, 20, 16, 32, 34, 34, 20, 12, 30], 1):
    ws.column_dimensions[get_column_letter(i)].width = w


def plain(ws, row, col, value, bg="FFFFFF", bold=False, color="222222"):
    c = ws.cell(row=row, column=col, value=value)
    c.font = Font(name="Calibri", size=10, bold=bold, color=color)
    c.fill = PatternFill("solid", fgColor=bg)
    c.alignment = Alignment(horizontal="left", vertical="center", wrap_text=True)
    c.border = tb
    return c


def section_header(ws, row, label, color):
    for ci in range(1, len(headers)+1):
        c = ws.cell(row=row, column=ci, value=label if ci == 1 else "")
        c.font = Font(name="Calibri", bold=True, size=10, color="222222")
        c.fill = PatternFill("solid", fgColor=color)
        c.border = tb
        c.alignment = Alignment(horizontal="left", vertical="center")
    ws.row_dimensions[row].height = 20


def add_row(ws, row, status, ig_handle, platform, volgers, views,
            sport, content_goed, merkfit, idee, contact, prio, notities):
    ws.row_dimensions[row].height = 22
    bg = "FFFFFF" if row % 2 == 0 else "F7F7F7"

    if "Bevestigd" in status:
        s_bg, s_col, bold = COLOR_GREEN_L, COLOR_GREEN, True
    elif "Gevonden" in status:
        s_bg, s_col, bold = COLOR_BLUE_L, COLOR_BLUE, True
    elif "Verifieer" in status:
        s_bg, s_col, bold = COLOR_PURP, "4527A0", False
    elif "Zoeken" in status:
        s_bg, s_col, bold = COLOR_GOLD_L, COLOR_GOLD, False
    else:
        s_bg, s_col, bold = bg, "222222", False
    plain(ws, row, 1, status, s_bg, bold, s_col)

    if ig_handle and ig_handle != "→ vul in":
        handle_clean = ig_handle.lstrip("@")
        url = f"https://www.instagram.com/{handle_clean}/"
        c = ws.cell(row=row, column=2)
        c.value = f'=HYPERLINK("{url}","{ig_handle}")'
        c.font = Font(name="Calibri", size=10, color="1565C0", underline="single")
        c.fill = PatternFill("solid", fgColor=bg)
        c.alignment = Alignment(horizontal="left", vertical="center")
        c.border = tb
    else:
        plain(ws, row, 2, ig_handle, bg)

    plain(ws, row, 3, platform, bg)
    plain(ws, row, 4, volgers, bg)
    plain(ws, row, 5, views, bg)
    plain(ws, row, 6, sport, bg)
    plain(ws, row, 7, content_goed, bg)
    plain(ws, row, 8, merkfit, bg)
    plain(ws, row, 9, idee, bg)
    plain(ws, row, 10, contact, bg)

    prio_map = {
        "Zeer hoog": (COLOR_GREEN_L, COLOR_GREEN),
        "Hoog":      (COLOR_BLUE_L,  COLOR_BLUE),
        "Medium":    (COLOR_ORG_L,   COLOR_ORG),
    }
    p_bg, p_col = prio_map.get(prio, (bg, "222222"))
    plain(ws, row, 11, prio, p_bg, prio in prio_map, p_col)
    plain(ws, row, 12, notities, bg)


r = 2

# TENNIS
section_header(ws, r, "── TENNIS ──", "FFF9C4"); r += 1
add_row(ws, r, "✅ Bevestigd", "@timtopspin", "Instagram", "verifieer <5K", "verifieer >5K",
    "Tennis", "Voelt als je vriend die tennist — eigen gezicht in alles, vertelt zijn verhaal",
    "Dé contentstijl die HI GRIP zoekt: authentiek, herkenbaar, niet te commercieel",
    "Slow-mo footwork: HI GRIP zool in beeld, 'deel van mijn kit'",
    "DM Instagram", "Zeer hoog", "Referentie-account — alle andere creators hierop matchen"); r += 1
add_row(ws, r, "🔎 Verifieer", "@vanrallytotrose", "Instagram", "verifieer", "verifieer",
    "Tennis", "Naam suggereert tennis-journey content — gevonden via #tennisnl",
    "Potentieel: persoonlijke tennis-journey is perfecte HI GRIP fit",
    "Journey-reel: 'van beginner naar competitie — HI GRIP al vanaf dag 1 in mijn kit'",
    "DM Instagram", "Hoog", "Gevonden #tennisnl. Check: eigen gezicht? video-first? NL? <5K? views >5K?"); r += 1
add_row(ws, r, "🔎 Verifieer", "@talithabijland", "Instagram", "verifieer", "verifieer",
    "Tennis", "NL naam, gevonden via #tennisnl — persoonlijk tennis-account",
    "Persoonlijke NL creator = directe HI GRIP fit als het content klopt",
    "Match-reel: voetbeweging close-up — HI GRIP zool zichtbaar",
    "DM Instagram", "Hoog", "Gevonden #tennisnl. Check: eigen gezicht? video-first? NL? <5K? views >5K?"); r += 1
add_row(ws, r, "🔎 Verifieer", "@jurrebraaf", "Instagram", "verifieer", "verifieer",
    "Tennis", "NL naam, gevonden via #tennisnederland — klinkt als persoonlijke creator",
    "NL tenniscreator met eigen naam = authentieke merkfit",
    "Trainingsvlog: footwork-routine met HI GRIP in beeld",
    "DM Instagram", "Hoog", "Gevonden #tennisnederland. Check: eigen gezicht? video-first? NL? <5K? views >5K?"); r += 1
add_row(ws, r, "🔎 Verifieer", "@wiboplijnaar", "Instagram", "verifieer", "verifieer",
    "Tennis", "Nederlandse naam, gevonden via #tennisnederland",
    "NL tenniscreator — als video-first en eigen gezicht klopt dan directe match",
    "Slow-mo footwork: HI GRIP zool in iedere stap",
    "DM Instagram", "Medium", "Gevonden #tennisnederland. Check: eigen gezicht? video-first? NL? <5K? views >5K?"); r += 1
add_row(ws, r, "🔎 Verifieer", "@karsten_tennis", "Instagram", "verifieer", "verifieer",
    "Tennis", "Persoonlijk account met tennis in naam — gevonden via #tennisnl",
    "Eigen naam + tennis = herkenbaarheid, past bij HI GRIP authentiek profiel",
    "Tip-reel: bewegingsdetail met HI GRIP",
    "DM Instagram", "Medium", "Gevonden #tennisnl. Check: eigen gezicht? video-first? NL? <5K? views >5K?"); r += 1
add_row(ws, r, "🔎 Verifieer", "@effensii", "Instagram", "~229 volgers ✓", "~692 views",
    "Tennis", "Gevonden via #tennisreels — 692 gem. views, 229 volgers, 10 reels",
    "Kleine account met verrassend goede views per reel = authentiek bereik",
    "Reel: rallymomenten met HI GRIP zool bij elke beweging close-up",
    "DM Instagram", "Hoog", "Scraper: 229 volgers, 692 views, 10 reels ✓. Check: NL? eigen gezicht? video-first?"); r += 1
add_row(ws, r, "🔎 Verifieer", "@shereenstennis", "Instagram", "~700 volgers ✓", "verifieer",
    "Tennis", "Shereen — NL naam, persoonlijk account met tennis in naam, gevonden via #tennisreels",
    "Persoonlijke NL tennis-creator = directe HI GRIP fit als views en content kloppen",
    "Match-reel: voetbeweging close-up — HI GRIP zool zichtbaar bij elke afzet",
    "DM Instagram", "Hoog", "Scraper: ~700 volgers ✓, views niet geladen. Check: eigen gezicht? views >5K? actief?"); r += 1
add_row(ws, r, "🔍 Zoeken", "→ vul in", "Instagram / TikTok", "<5K", ">5K views",
    "Tennis — vlog / progressie", "Eigen gezicht in iedere reel, deelt zijn tennis-leven — zelfde vibe als @timtopspin",
    "Journey-content: speler groeit mee met HI GRIP als vaste kit-keuze",
    "Trainingsvlog: 'deze week gefocust op footwork — HI GRIP maakt echt verschil'",
    "DM platform", "Hoog", "Kijk wie reageert op @timtopspin content — kleine actieve volgers zijn zelf creators"); r += 1

# PADEL
section_header(ws, r, "── PADEL ──", "E8F5E9"); r += 1
add_row(ws, r, "📌 Referentie", "@jospadel", "Instagram", "verifieer <5K", "verifieer >5K",
    "Padel", "Jo's Padel Pointers — tips, uitleg, eigen persoonlijkheid op court",
    "Persoonlijke padel-uitleg = HI GRIP past als performance-detail in iedere tip-reel",
    "Tip-reel: 'voor deze beweging heb je grip nodig — HI GRIP is mijn keuze'",
    "DM Instagram", "Zeer hoog", "REFERENTIE voor stijl — zoek NL versie: tips + eigen gezicht + court"); r += 1
add_row(ws, r, "🔎 Gevonden", "@menno.nolten", "Instagram", "~3K ✓", "verifieer >5K",
    "Padel", "Post eigen wedstrijdclips en trainingsmomentjes — geen grote show, gewoon zijn spel",
    "Klein maar geloofwaardig — meerdere merksponsordeals, publiek vertrouwt zijn keuzes",
    "Match close-up: snelle diagonaal + HI GRIP zool: 'mijn geheim voor grip in de hoek'",
    "DM Instagram", "Hoog", "Menno Nolten, ~3K volgers ✓. Verifieer: views >5K per reel?"); r += 1
add_row(ws, r, "🔎 Verifieer", "@shez_n_padel", "Instagram", "verifieer", "verifieer >5K",
    "Padel", "Gevonden via #padelnederland — nog te checken of content-stijl persoonlijk is",
    "Potentieel goede NL padel-creator als content klopt",
    "Court-reel: HI GRIP zool zichtbaar bij iedere stap",
    "DM Instagram", "Hoog", "Alles te verifiëren: <5K? Eigen gezicht? Reels? NL publiek?"); r += 1
add_row(ws, r, "🔎 Verifieer", "@alainappelboom", "Instagram", "~671 volgers ✓", "~988 views",
    "Padel", "NL naam (appelboom), 671 volgers, ~1K gem. views — gevonden via #padelnederland, 12 reels",
    "NL naam + padel + bijna 1K views per reel = sterke merkfit als content persoonlijk is",
    "Padel tip-reel: explosieve stap — 'grip begint bij je zool' met HI GRIP zichtbaar",
    "DM Instagram", "Hoog", "Scraper: 671 volgers, 988 views, 12 reels ✓. Check: eigen gezicht? NL? actief?"); r += 1
add_row(ws, r, "🔎 Verifieer", "@padelverde_herten", "Instagram", "~732 volgers ✓", "~869 views",
    "Padel", "Padel account uit Herten (NL, Limburg) — 732 volgers, 869 gem. views",
    "Lokale NL creator met goede views = authentiek publiek, geografisch bereik past bij HI GRIP",
    "Court-reel: eigen stijl op de baan — HI GRIP zool bij iedere sidestep in beeld",
    "DM Instagram", "Hoog", "Scraper: 732 volgers, 869 views, 12 reels ✓. Herten = NL ✓. Check: eigen gezicht?"); r += 1
add_row(ws, r, "🔎 Verifieer", "@padelbroeders", "Instagram", "~538 volgers ✓", "verifieer",
    "Padel", "'Broeders' = NL woord, 538 volgers, gevonden via #padelnl",
    "Duo/broers-format = herkenbaar en persoonlijk, groot potentieel als views kloppen",
    "Challenge-reel: broer vs broer op de baan — HI GRIP als kit-detail in de prep",
    "DM Instagram", "Medium", "Scraper: 538 volgers ✓, views niet geladen. Check: views per reel? eigen gezicht?"); r += 1
add_row(ws, r, "🔎 Verifieer", "@padelbarendrecht", "Instagram", "~650 volgers ✓", "verifieer",
    "Padel", "Padel account uit Barendrecht (NL, Zuid-Holland) — 650 volgers",
    "Lokale NL padel-creator — geografisch NL publiek gegarandeerd als account persoonlijk is",
    "Match clip: snelle beweging op court — HI GRIP zool zichtbaar bij elke cut",
    "DM Instagram", "Medium", "Scraper: 650 volgers ✓, views niet geladen. Barendrecht = NL ✓. Check: eigen gezicht?"); r += 1
add_row(ws, r, "🔎 Verifieer", "@padel25haarlem", "Instagram", "~741 volgers ✓", "verifieer",
    "Padel", "Padel account uit Haarlem (NL) — 741 volgers",
    "Haarlem-based padel creator = NL publiek ✓, klopt qua doelgroep als content persoonlijk is",
    "Court-reel: wedstrijdmoment — HI GRIP als kit-detail in iedere afzet",
    "DM Instagram", "Medium", "Scraper: 741 volgers ✓, views niet geladen. Haarlem = NL ✓. Check: eigen gezicht?"); r += 1
add_row(ws, r, "🔍 Zoeken", "→ vul in", "Instagram / TikTok", "<5K", ">5K views",
    "Padel — tips / journey NL", "NL versie van @jospadel: tips geven met eigen gezicht, progressie tonen",
    "Tip + HI GRIP = organische samenwerking: het product past in de tip",
    "Tip-reel: 'stap sneller zetten? Grip begint bij je zool' — HI GRIP in beeld",
    "DM platform", "Zeer hoog", "Zoek #padelnl — kijk wie reageert op @menno.nolten content"); r += 1

# VOETBAL
section_header(ws, r, "── VOETBAL ──", "E3F2FD"); r += 1
add_row(ws, r, "✅ Bevestigd", "@finnpicard_", "Instagram", "verifieer <5K", "verifieer >5K",
    "Voetbal / Sport", "Eigen karakter in iedere post — sportcontent met een persoonlijk gezicht",
    "Authentieke personal creator — HI GRIP past als vanzelfsprekend kit-detail",
    "Skills clip: eigen benen, eigen zool — HI GRIP zichtbaar in de beweging",
    "DM Instagram", "Hoog", "Door lars aangedragen. Verifieer: <5K volgers? Views >5K per video?"); r += 1
add_row(ws, r, "🔎 Verifieer", "@iamyasinflits", "Instagram", "verifieer", "verifieer",
    "Voetbal / Panna", "'Yasine Flits' — panna/straatvoetbal creator met persoonlijke branding",
    "Panna + eigen naam + NL = sterke authentieke fit voor HI GRIP",
    "Panna-clip: voetplaatsing close-up — 'de grip in mijn zool geeft me die fractie extra control'",
    "DM Instagram", "Zeer hoog", "Gevonden #pannavoetbal. Check: eigen gezicht? video-first? NL? <5K? views >5K?"); r += 1
add_row(ws, r, "🔎 Verifieer", "@joelvandun", "Instagram", "verifieer", "verifieer",
    "Voetbal / Straatvoetbal", "Joel van Dun — NL naam, gevonden via #straatvoetbal",
    "NL straatvoetbal met eigen naam = geloofwaardig en herkenbaar profiel",
    "Straatvoetbal clip: eigen stijl op court — HI GRIP als kit-detail",
    "DM Instagram", "Hoog", "Gevonden #straatvoetbal. Check: eigen gezicht? video-first? NL? <5K? views >5K?"); r += 1
add_row(ws, r, "🔎 Verifieer", "@boazsmits11", "Instagram", "verifieer", "verifieer",
    "Voetbal / Straatvoetbal", "Boaz Smits — typisch NL naam, gevonden via #straatvoetbal",
    "Persoonlijke creator met eigen voetbalstijl = HI GRIP fit als content klopt",
    "Voetbal clip: moves op straat — HI GRIP zool in iedere afzet zichtbaar",
    "DM Instagram", "Hoog", "Gevonden #straatvoetbal. Check: eigen gezicht? video-first? NL? <5K? views >5K?"); r += 1
add_row(ws, r, "🔎 Verifieer", "@bergdelano27", "Instagram", "verifieer", "verifieer",
    "Voetbal / Straatvoetbal", "Delano Berg — NL naam, gevonden via #straatvoetbal",
    "Straatvoetbal creator met persoonlijke stijl — goede merkfit als views en content kloppen",
    "Street skills clip: HI GRIP zool bij iedere cut en afzet in beeld",
    "DM Instagram", "Medium", "Gevonden #straatvoetbal. Check: eigen gezicht? video-first? NL? <5K? views >5K?"); r += 1
add_row(ws, r, "🔍 Zoeken", "→ vul in", "Instagram / TikTok", "<5K", ">5K views",
    "Voetbal — panna / street", "Panna-content: straatvoetbal-moves, eigen stijl, eigen karakter",
    "Panna-beweging = voetafzet + grip — HI GRIP zool zichtbaar bij iedere move",
    "Panna-clip: 'de sleutel is je voetplaatsing — HI GRIP geeft je die control'",
    "DM platform", "Zeer hoog", "Kijk wie reageert op @finnpicard_ en @iamyasinflits content"); r += 1
add_row(ws, r, "🔍 Zoeken", "→ vul in", "TikTok / Instagram", "<5K", ">5K views",
    "Voetbal — training / matchvlog", "Creator die zijn voetbalseizon deelt — trainingen, wedstrijden, progressie",
    "Serieuze speler = serieuze kit — HI GRIP als vast onderdeel van zijn prep",
    "Matchvlog: 'mijn routine voor de wedstrijd' — HI GRIP als eerste onderdeel van aankleden",
    "TikTok DM", "Hoog", "Zoek: #voetbalnederland #voetbaltraining — iemand die zijn seizoen documenteert"); r += 1
add_row(ws, r, "🔍 Zoeken", "→ vul in", "TikTok", "<5K", ">5K views",
    "Zaalvoetbal / Futsal", "Indoor creator — wedstrijdvlog, training, eigen stem voor de camera",
    "Indoor court = gripsokken IN zaalschoen: sterkste productuse case van alle voetbalformats",
    "Prep-vlog: 'mijn ritual voor de wedstrijd' — HI GRIP als eerste ding dat aangetrokken wordt",
    "TikTok DM", "Zeer hoog", "Zoek: #zaalvoetbal #futsalnl — verhaal-creator, niet alleen tricks"); r += 1

# RUGBY
section_header(ws, r, "── RUGBY ──", "F3E5F5"); r += 1
add_row(ws, r, "🔍 Zoeken", "→ vul in", "Instagram / TikTok", "<5K", ">5K views",
    "Rugby — speler vlog", "Rugby-speler die zijn wedstrijd- en trainingsleven deelt",
    "Rugby = grip-sport nummer 1: explosieve start, tackle, run — HI GRIP use case zit overal",
    "Wedstrijdvlog: warme fase + 'zo kleed ik me aan' — HI GRIP als prep-detail",
    "DM platform", "Hoog", "Vorige kandidaat (@monty_lev) bleek privé-account. Zoek via @rugby.nederland @ereklasserugby followers"); r += 1
add_row(ws, r, "🔍 Zoeken", "→ vul in", "Instagram / TikTok", "<5K", ">5K views",
    "Rugby — speler vlog", "Speler die zijn rugby-leven deelt — training, wedstrijd, humor in de kleedkamer",
    "Rugby = grip-sport nummer 1: voetstand bij tackle en run = HI GRIP use case",
    "Wedstrijdvlog: warme fase + HI GRIP als prep-detail — 'zo bereid ik me voor'",
    "DM platform", "Hoog", "Zoek via @rugby.nederland @ereklasserugby — kijk wie er reageert op hun posts"); r += 1
add_row(ws, r, "🔍 Zoeken", "→ vul in", "Instagram / TikTok", "<5K", ">5K views",
    "Rugby — female", "Vrouwelijke rugby-creator — sport-lifestyle, eigen karakter, NL-gebaseerd",
    "Groeiende doelgroep + niche-fit: rugbyvrouwen zijn nog weinig bereikt door sportmerken",
    "Kit-video: 'mijn outfit voor de wedstrijd — inclusief HI GRIP want grip is alles in rugby'",
    "DM platform", "Hoog", "Zoek: #damesrugby #rugbygirl #rugbynederland — kijk bij Pleuni Kievit / Famke Deelstra comments"); r += 1

# BASKETBALL
section_header(ws, r, "── BASKETBALL ──", "FCE4EC"); r += 1
add_row(ws, r, "🔍 Zoeken", "→ vul in", "TikTok", "<5K", ">5K views",
    "Basketball — skills / vlog", "Eigen persoonlijkheid op court — praat naar camera, deelt zijn basketball-leven",
    "Court-cuts op hardcourt = sterkste visuele HI GRIP use case: grip bij iedere stop en cut",
    "Court-vlog: 'wat zit er in mijn tas' — HI GRIP als vast onderdeel van zijn kit",
    "TikTok DM", "Zeer hoog", "Basketball <5K NL creators zijn schaars. Zoek via @3x3nl @basketballnederland"); r += 1
add_row(ws, r, "🔍 Zoeken", "→ vul in", "TikTok / Instagram", "<5K", ">5K views",
    "Streetball / 3x3", "Outdoor court, urban energie, casual maar eigen stijl — geen highlight-reel maar echt verhaal",
    "Urban vibe matcht HI GRIP look: zwart/wit, performance, street",
    "Session-vlog op outdoor court: HI GRIP zool bij iedere stop en cut in beeld",
    "DM platform", "Hoog", "Zoek: #streetballnl #3x3nl — kijk bij @3x3nl followers, klein en actief"); r += 1

ws.freeze_panes = "B2"
ws.auto_filter.ref = f"A1:{get_column_letter(len(headers))}{r - 1}"

output_path = r"C:\Users\lars\Downloads\HiGrip_Nano_Influencers_NL.xlsx"
wb.save(output_path)
print(f"Saved: {output_path}")
```

---

## Gerelateerde bestanden

- [[Evaluatiecriteria]] — Alle selectie- en verificatiecriteria
- [[Influencer Database]] — Overzicht van alle gevonden accounts
- [[Pipeline Tracker]] — Status per account (benaderd, in gesprek, actief)
- [[Outreach Templates]] — DM templates per situatie
