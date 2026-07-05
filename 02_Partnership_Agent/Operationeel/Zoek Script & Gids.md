# Zoek Script & Gids — HÏ Grip Influencer Zoek Agent

> Bijgewerkt: 2026-06-24
> Zie ook: [[Evaluatiecriteria]] · [[Influencer Database]] · [[Outreach Templates]] · [[Pipeline Tracker]]

---

## Wat doet het script?

Het Python-script [`scripts/ig_find_creators.py`](https://github.com/HIGrip/HI-Grip-claude-setup/blob/main/scripts/ig_find_creators.py) (in de `HI-Grip-claude-setup` git-repo) zoekt via een echte browser (Playwright) automatisch naar Instagram-creators op hashtags per sport, en filtert op:

1. **Primair:** gemiddelde reel-views per creator (`MIN_AVG_VIEWS` = 3.000)
2. **Secundair:** aantal volgers (`MAX_FOLLOWERS` = 20.000)

Voor elke hashtag worden posts geopend om de auteur-username op te halen; per uniek profiel worden vervolgens volgers en gem. reel-views gescraped. Resultaten die aan de filters voldoen worden per sport weggeschreven naar een tekstbestand.

**Output:** `C:\Users\lars\Downloads\HiGrip_Creators_Voetbal.txt`

**Huidige hashtag-configuratie (alleen voetbal):**
- Voetbal_vlog: voetbalvlog, matchdayvlog, voetbaljourney
- Voetbal_panna: pannavoetbal, pannacup, pannanederland
- Zaalvoetbal: zaalvoetbal, futsalnl, futsalnederland
- Straatvoetbal: straatvoetbal, streetvoetbal, voetbalstraat

---

## Script uitvoeren

```
pip install playwright playwright-stealth
playwright install chromium
python "$env:USERPROFILE\HI-Grip-claude-setup\scripts\ig_find_creators.py"
```

Vereist een opgeslagen IG-sessie in `C:\Users\lars\.ig_session.json` (automatisch aangemaakt bij eerste login) en inloggegevens (`USERNAME`/`PASSWORD`) in `ig_search_higrip.py` (lokaal, niet in de git-repo — bevat inloggegevens).

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

| Kanaal             | Zoektermen                                              |
| ------------------ | ------------------------------------------------------- |
| Instagram hashtags | #rugbynederland · #rugbynl · #damesrugby · #rugbylife   |
| TikTok             | rugby nederland vlog · rugby training nl · rugby speler |
| Slimste plek       |                                                         |

### Basketball

| Kanaal             | Zoektermen                                                 |
| ------------------ | ---------------------------------------------------------- |
| Instagram hashtags | #basketballnl · #dutchhoops · #streetballnl · #3x3nl       |
| TikTok             | basketball nederland · streetball nl · 3x3 basketball vlog |
| Slimste plek       |                                                            |

---

## Slimste zoektruc

> Zoek niet alleen op hashtag — **kijk wie reageert op posts van al bekende creators.**
> Kleine actieve commenters zijn vaak zelf ook creators.

Referentie-accounts om reacties te scannen:

- Tennis: @timtopspin
- Padel: @menno.nolten · @jospadel
- Voetbal: 
- Rugby:
- Basketball: 

---

## Python script (broncode)

De volledige broncode staat niet meer hier, maar in de git-repo: [`scripts/ig_find_creators.py`](https://github.com/HIGrip/HI-Grip-claude-setup/blob/main/scripts/ig_find_creators.py) in `HI-Grip-claude-setup`.

---

## Gerelateerde bestanden

- [[Evaluatiecriteria]] — Alle selectie- en verificatiecriteria
- [[Influencer Database]] — Overzicht van alle gevonden accounts
- [[Pipeline Tracker]] — Status per account (benaderd, in gesprek, actief)
- [[Outreach Templates]] — DM templates per situatie
