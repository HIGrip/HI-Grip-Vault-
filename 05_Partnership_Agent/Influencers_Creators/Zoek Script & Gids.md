---
type: kennis
gebied: partnership-agent
bijgewerkt: 2026-10-01
---

# Zoek Script & Gids — HÏ Grip Influencer Zoek Agent

> Bijgewerkt: 2026-08-25 (v4.6 — bio-extractie in DOM-fallback gefixt (was 0/166) + parse_count las duizendtal-getallen fout ("1.594" → 1))
> Zie ook: [[Evaluatiecriteria]] · [[Influencer Database]] · [[Outreach Templates]] · [[Pipeline Tracker]]

---

## Wat doet het script?

Het Python-script [`scripts/ig_find_creators.py`](https://github.com/HIGrip/HI-Grip-claude-setup/blob/main/scripts/ig_find_creators.py) (in de `HI-Grip-claude-setup` git-repo) is de samengevoegde v4: hashtag-scan, following-lijst-scan, commenter-scan én NL-creator-following-scan zitten nu in één script.
**Vier bronnen per run:**

1. **Hashtags** — posts per sport-hashtag openen, auteur-username ophalen.
2. **Following-lijst van seed-accounts** — de following-lijst van een account scannen (bedoeld voor het eigen HÏ Grip-account, dat bewust influencers volgt als curated shortlist — zie de IG-following-strategie in Claude Code memory). `SEED_ACCOUNTS` staat op `lars_a.i.h` (teruggezet 23-09-2026).
3. **Commenters op referentie-accounts** — wie reageert op reels van bekende referentie-accounts per sport is vaak zelf ook creator.
4. **Following-lijsten van NL creator-accounts** — wie NL creators zoals @iamyasinflits volgen zijn vaak kleine creators in dezelfde niche die via hashtags moeilijk te vinden zijn. Ingesteld via `CREATOR_FOLLOW_LISTS`.

**Profielbeoordeling:** i.p.v. tekst uitlezen uit de zichtbare pagina (taal-afhankelijk, kwetsbaar voor UI-wijzigingen), leest het script de GraphQL-antwoorden die de profielpagina zelf ophaalt (sinds 23-09-2026; het oude `web_profile_info`-endpoint geeft sinds ~15-09 structureel 429): exacte volgers, bio, categorie, en per recente post de like-/comment-count, post-datum en caption-tekst. Views komen uit de reels-tab (`play_count`), en het script neemt de **mediaan** i.p.v. het gemiddelde, zodat een paar virale reels een micro-creator niet over de views-grens duwen. Lukt dat niet, dan valt het script terug op `web_profile_info` en daarna op de oude DOM-scraping methode zodat een los profiel de hele run niet laat crashen — wel zonder ER%/activiteit-cijfers en zonder captions in dat geval.

**Sport-fit / concurrentie-check:** géén losse LLM-API-call in het script (dat kost apart geld, los van je Claude-abonnement). In plaats daarvan verzamelt het script bio + laatste captions per kandidaat in de output, zodat de sport/lifestyle-fit en concurrentie-check uit [[Evaluatiecriteria]] achteraf handmatig of door Claude Code beoordeeld worden — gratis onder het abonnement, gewoon even vragen na een run.

**Onbemand draaien:** met de vlag `--unattended` (bv. vanuit een geplande Windows-taak) stopt het script netjes zodra Instagram een 2FA/verificatiescherm toont, in plaats van voor altijd te wachten op een ENTER die nooit komt.

**Bekende fix (2026-08-20):** de following-lijst-scan (bron 2) vond structureel maar een fractie van de echte lijst (bv. 9 van 74 accounts van @lars_a.i.h) — de scroll-code mikte op een `div[style*="overflow"]`-selector die niet meer matcht met Instagram's huidige dialoog-DOM, dus scrollde er in de praktijk niets en werd alleen de eerste, ongescrolde batch gelezen. Nu zoekt het script het echte scrollbare element dynamisch. Daarnaast telde `0 gemeten views` altijd als harde afwijzing ("te weinig views"), terwijl dat net zo goed een foto-only account (zoals partner @jaidenpadel, 0 Reels) of een meetfout kan zijn — dat gaat nu naar status "review" i.p.v. automatisch weggefilterd worden.

**Bekende fix (2026-08-25):** na de vorige fix bleek de "review"-lijst nog vol rotzooi te staan (nagelstudio's, wildlife-fotografie, grote merkaccounts) — lars merkte dit zelf op na een volle run. Oorzaak: de bio-selector in `fetch_profile_dom_fallback` (`section main header section span`) gaf bij een volle run 0 van de 166 profielen een bio terug, waardoor de NL- en sport-content-filters (die alleen draaien als er tekst is) voor praktisch elk fallback-profiel werden overgeslagen. Geverifieerd tegen live profielen dat de bio wél gewoon in `header.innerText` staat; die wordt nu geparsed. Los daarvan bleek `parse_count()` duizendtal-genoteerde hele getallen fout te lezen — "1.594" (NL) of "1,594" (US) werden allebei afgekapt tot 1, "10.900" tot 10 - dat trof vrijwel elk DOM-fallback-gescraped volgers-/views-getal. Beide gefixt en losstaand tegen live accounts geverifieerd vóór het syncen.

**Filters (uit [[Evaluatiecriteria]]):**

| Filter | Waarde |
|---|---|
| Volgers | 300 – 50.000 (ondergrens per 2026-08-05 verlaagd op basis van echte partnerdata: @jaidenpadel heeft maar 815 volgers) |
| Views per reel (mediaan) | ≥ 1.000 |
| Organisatie-categorie (Sportclub, Community, media e.d.) | afgewezen |
| ER > 50% | niet afgewezen, wel naar handmatig checken |
| Engagement rate (ER%) | ≥ 2% |
| Activiteit | ≥ 3 posts in de laatste 21 dagen |
| Taal | NL-signaal in bio → anders status "review" i.p.v. automatisch afwijzen |
| Dedupe | Handles die al in [[Influencer Database]] staan worden overgeslagen |

**Output:** `C:\Users\lars\Downloads\HiGrip_Creators.txt`, met aparte secties "KANDIDATEN" en "HANDMATIG CHECKEN (taal onduidelijk)".

> **Beachhead-strategie (Canva *MERK & STRATEGIE*, leidend sinds 30-9-2026):** kernsporten zijn tennis/padel, voetbal en rugby (zie
> [[Evaluatiecriteria]] en [[Doelgroep & Persona's]]). **TODO:** de hashtag-configuratie hieronder
> is de laatst bekende scriptstand (voetbal + basketbal) en moet in `ig_find_creators.py` nog worden
> aangepast: basketbal-hashtags eruit, tennis-, padel- en rugby-hashtags (zie sport-tabellen verderop in dit
> document) erin. Vergeet niet ook de bijlage-codeblock onderaan dit bestand mee te updaten.

**Huidige hashtag-configuratie (voetbal + basketbal — verouderd, zie TODO hierboven):**
- Voetbal_vlog: voetbalvlog, voetbalvlogger, voetballer
- Voetbal_amateur: amateurvoetbal, wedstrijddag, voetbalseizoen
- Voetbal_training: voetbaltraining, jongevoetballer, voetballife
- Voetbal_wedstrijd: voetbalmatch, matchdaynl, voetbalwedstrijd
- Zaalvoetbal: zaalvoetbal, futsalnederland, futsalspeler
- ~~Basketbal: basketballnl, streetballnl, 3x3nl~~ — te vervangen door tennis-, padel- en rugby-hashtags (basketbal is geen kernsport)

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

> Prioriteitsvolgorde vanaf de beachhead-strategie: **Voetbal, Rugby, Tennis** eerst; Padel en Basketball alleen bij overcapaciteit.

### Tennis — ⭐ beachhead-prioriteit

| Kanaal             | Zoektermen                                                               |
| ------------------ | ------------------------------------------------------------------------ |
| Instagram hashtags | #tennisnederland · #tennisnl · #tennismatch · #tennislife · #tennisreels |
| TikTok             | tennis vlog nl · tennis journey nederland · tennis training              |
| Slimste plek       | Kijk wie reageert op @timtopspin / @tennistomy posts                     |

### Padel — kernsport (tennis/padel, Canva *MERK & STRATEGIE*)

| Kanaal | Zoektermen |
|---|---|
| Instagram hashtags | #padelnederland · #padelholland · #padellife · #padelmatch · #padelnl · #padelrotterdam · #padelen |
| TikTok | padel vlog nl · padel progressie nederland · padel journey |
| Slimste plek | Kijk bij comments op @menno.nolten reels |

### Voetbal — ⭐ beachhead-prioriteit

| Kanaal             | Zoektermen                                                                                |
| ------------------ | ----------------------------------------------------------------------------------------- |
| Instagram hashtags | #voetbalnederland · #skillsnl · #zaalvoetbal · #futsalnl · #pannavoetbal · #straatvoetbal |
| TikTok             | voetbal vlog nl · zaalvoetbal training · freestyle voetbal nederland                      |
| Slimste plek       | Kijk wie reageert op  posts                                                               |

### Rugby — ⭐ beachhead-prioriteit

| Kanaal             | Zoektermen                                              |
| ------------------ | ---------------------------------------------------- |
| Instagram hashtags | #rugbynederland · #rugbynl · #damesrugby · #rugbylife   |
| TikTok             | rugby nederland vlog · rugby training nl · rugby speler |
| Slimste plek       | Kijk wie reageert op @prorugby_nl posts               |

### Basketball — geen kernsport

| Kanaal             | Zoektermen                                                 |
| ------------------ | ---------------------------------------------------------- |
| Instagram hashtags | #basketballnl · #dutchhoops · #streetballnl · #3x3nl       |
| TikTok             | basketball nederland · streetball nl · 3x3 basketball vlog |
| Slimste plek       | Kijk wie reageert op @tweeboomcourt / @3x3nl posts         |

---

## Slimste zoektruc

> Zoek niet alleen op hashtag — **kijk wie reageert op posts van al bekende creators.**
> Kleine actieve commenters zijn vaak zelf ook creators. Zoek daarnaast ook tussen de volgers ze volgen elkaar ook vaak.

Referentie-accounts die het script scant (`REFERENCE_ACCOUNTS` in de code):

- Voetbal: @akkamist · @iamyasinflits · @boersma_goalkeeping · @boazsmits11
- Basketbal: @tweeboomcourt · @3x3nl
- Partners (bestaande samenwerkingen, ijkpunt voor gewenste grootte/stijl): @perrrypanna (Perry Hoogerheijde, 4.207 volgers) · @jaidenpadel (Jaiden Tolenaar, 815 volgers) · @jayjay.wav (3.077 volgers, geverifieerd 2026-08-25 — begon oorspronkelijk als DJ/artiest maar maakt sinds kort ook voetbalcontent; actieve samenwerking, zie [[Influencer Database]] en de zoekcalibratie-historie in Claude Code memory)

NL creator following-lijsten (`CREATOR_FOLLOW_LISTS`):

- Momenteel leeg — @iamyasinflits bleek profvoetballers te volgen (Ziyech, Güler), niet bruikbaar als discovery vector.
---

## Gerelateerde bestanden

- [[Evaluatiecriteria]] — Alle selectie- en verificatiecriteria
- [[Influencer Database]] — Overzicht van alle gevonden accounts (ook de bron voor automatische dedupe in het script)
- [[Pipeline Tracker]] — Status per account (benaderd, in gesprek, actief)
- [[Outreach Templates]] — DM templates per situatie

---

## Bijlage: broncode

De volledige broncode (back-up van `ig_zoek_trapAB.py`, `ig_zoek_trapC.py`, `ig_beoordeling.py`, `ig_find_creators.py`) staat in [[Zoek Script — broncode (back-up)]]. Bron van waarheid zijn de bestanden in `scripts/` van de `HI-Grip-claude-setup` repo; bij een scriptupdate moet de back-up mee-geüpdatet worden. Open de back-up alleen als je het script zelf aanpast.

> Map: [[05 Partnership Agent — Index]]
