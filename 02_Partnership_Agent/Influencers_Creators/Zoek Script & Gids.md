# Zoek Script & Gids — HÏ Grip Influencer Zoek Agent

> Bijgewerkt: 2026-08-25 (v4.6 — bio-extractie in DOM-fallback gefixt (was 0/166) + parse_count las duizendtal-getallen fout ("1.594" → 1))
> Zie ook: [[Evaluatiecriteria]] · [[Influencer Database]] · [[Outreach Templates]] · [[Pipeline Tracker]]

---

## Wat doet het script?

Het Python-script [`scripts/ig_find_creators.py`](https://github.com/HIGrip/HI-Grip-claude-setup/blob/main/scripts/ig_find_creators.py) (in de `HI-Grip-claude-setup` git-repo) is de samengevoegde v4: hashtag-scan, following-lijst-scan, commenter-scan én NL-creator-following-scan zitten nu in één script.
**Vier bronnen per run:**

1. **Hashtags** — posts per sport-hashtag openen, auteur-username ophalen.
2. **Following-lijst van seed-accounts** — de following-lijst van een account scannen (bedoeld voor het eigen HÏ Grip-account, dat bewust influencers volgt als curated shortlist — zie de IG-following-strategie in Claude Code memory). `SEED_ACCOUNTS` staat standaard leeg; vul het eigen handle in om deze bron te activeren.
3. **Commenters op referentie-accounts** — wie reageert op reels van bekende referentie-accounts per sport is vaak zelf ook creator.
4. **Following-lijsten van NL creator-accounts** — wie NL creators zoals @iamyasinflits volgen zijn vaak kleine creators in dezelfde niche die via hashtags moeilijk te vinden zijn. Ingesteld via `CREATOR_FOLLOW_LISTS`.

**Profielbeoordeling:** i.p.v. tekst uitlezen uit de zichtbare pagina (taal-afhankelijk, kwetsbaar voor UI-wijzigingen), haalt het script profieldata op via Instagram's eigen `web_profile_info` JSON-endpoint: exacte volgers, bio, en per recente post de like-/comment-count, post-datum en caption-tekst. Faalt dat endpoint (rate limit / blocked), dan valt het script terug op de oude DOM-scraping methode zodat een los profiel de hele run niet laat crashen — wel zonder ER%/activiteit-cijfers en zonder captions in dat geval.

**Sport-fit / concurrentie-check:** géén losse LLM-API-call in het script (dat kost apart geld, los van je Claude-abonnement). In plaats daarvan verzamelt het script bio + laatste captions per kandidaat in de output, zodat de sport/lifestyle-fit en concurrentie-check uit [[Evaluatiecriteria]] achteraf handmatig of door Claude Code beoordeeld worden — gratis onder het abonnement, gewoon even vragen na een run.

**Onbemand draaien:** met de vlag `--unattended` (bv. vanuit een geplande Windows-taak) stopt het script netjes zodra Instagram een 2FA/verificatiescherm toont, in plaats van voor altijd te wachten op een ENTER die nooit komt.

**Bekende fix (2026-08-20):** de following-lijst-scan (bron 2) vond structureel maar een fractie van de echte lijst (bv. 9 van 74 accounts van @lars_a.i.h) — de scroll-code mikte op een `div[style*="overflow"]`-selector die niet meer matcht met Instagram's huidige dialoog-DOM, dus scrollde er in de praktijk niets en werd alleen de eerste, ongescrolde batch gelezen. Nu zoekt het script het echte scrollbare element dynamisch. Daarnaast telde `0 gemeten views` altijd als harde afwijzing ("te weinig views"), terwijl dat net zo goed een foto-only account (zoals partner @jaidenpadel, 0 Reels) of een meetfout kan zijn — dat gaat nu naar status "review" i.p.v. automatisch weggefilterd worden.

**Bekende fix (2026-08-25):** na de vorige fix bleek de "review"-lijst nog vol rotzooi te staan (nagelstudio's, wildlife-fotografie, grote merkaccounts) — lars merkte dit zelf op na een volle run. Oorzaak: de bio-selector in `fetch_profile_dom_fallback` (`section main header section span`) gaf bij een volle run 0 van de 166 profielen een bio terug, waardoor de NL- en sport-content-filters (die alleen draaien als er tekst is) voor praktisch elk fallback-profiel werden overgeslagen. Geverifieerd tegen live profielen dat de bio wél gewoon in `header.innerText` staat; die wordt nu geparsed. Los daarvan bleek `parse_count()` duizendtal-genoteerde hele getallen fout te lezen — "1.594" (NL) of "1,594" (US) werden allebei afgekapt tot 1, "10.900" tot 10 - dat trof vrijwel elk DOM-fallback-gescraped volgers-/views-getal. Beide gefixt en losstaand tegen live accounts geverifieerd vóór het syncen.

**Filters (uit [[Evaluatiecriteria]]):**

| Filter | Waarde |
|---|---|
| Volgers | 300 – 50.000 (ondergrens per 2026-08-05 verlaagd op basis van echte partnerdata: @jaidenpadel heeft maar 815 volgers) |
| Gem. views per post | ≥ 1.000 |
| Engagement rate (ER%) | ≥ 2% |
| Activiteit | ≥ 3 posts in de laatste 21 dagen |
| Taal | NL-signaal in bio → anders status "review" i.p.v. automatisch afwijzen |
| Dedupe | Handles die al in [[Influencer Database]] staan worden overgeslagen |

**Output:** `C:\Users\lars\Downloads\HiGrip_Creators.txt`, met aparte secties "KANDIDATEN" en "HANDMATIG CHECKEN (taal onduidelijk)".

**Huidige hashtag-configuratie (voetbal + basketbal — seizoensgebonden, zie [[Evaluatiecriteria]]):**
- Voetbal_vlog: voetbalvlog, voetbalvlogger, voetballer
- Voetbal_amateur: amateurvoetbal, wedstrijddag, voetbalseizoen
- Voetbal_training: voetbaltraining, jongevoetballer, voetballife
- Voetbal_wedstrijd: voetbalmatch, matchdaynl, voetbalwedstrijd
- Zaalvoetbal: zaalvoetbal, futsalnederland, futsalspeler
- Basketbal: basketballnl, streetballnl, 3x3nl (dutchhoops verwijderd: internationale/niet-sport tag, gaf ruis)

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
| Slimste plek       | Kijk wie reageert op  posts                                                               |

### Rugby

| Kanaal             | Zoektermen                                              |
| ------------------ | ---------------------------------------------------- |
| Instagram hashtags | #rugbynederland · #rugbynl · #damesrugby · #rugbylife   |
| TikTok             | rugby nederland vlog · rugby training nl · rugby speler |
| Slimste plek       | Kijk wie reageert op @prorugby_nl posts               |

### Basketball

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

## Bijlage: volledige broncode (back-up)

> Bron van waarheid zijn de bestanden in `scripts/` van de [`HI-Grip-claude-setup`](https://github.com/HIGrip/HI-Grip-claude-setup) repo. Deze bijlage is een back-up-kopie voor het geval GitHub niet bereikbaar is — bij een update van een script moet deze kopie mee-geüpdatet worden (memory-regel `feedback_ig_script_sync` in Claude Code).

> Bijgewerkt 2026-09-09: het zoeken is gesplitst in vier bestanden. Aanleiding was de run van 08-09 die 24 uur draaide, 1.508 profielen langsliep en 8 bruikbare creators opleverde — met alle metingen via de trage DOM-route omdat het JSON-endpoint geblokkeerd was.

### ig_zoek_trapAB.py

Zoek-pijplijn trap A + B (nieuw 2026-09-09). Vindt kandidaten via Instagram's eigen `discover/chaining`-graaf en zeeft ze op volgers, bio en categorie via `users/{pk}/info/`. Vervangt het per-profiel browsen.

```python
"""
HI Grip - zoek-pijplijn trap A + B (2026-09-09).

Vervangt de dure "bezoek elk profiel met de browser"-aanpak door twee
API-trappen die vanuit de ingelogde paginacontext draaien:

  Trap A - vinden    : /api/v1/discover/chaining/?target_id={pk}
                       1 request -> 40-80 vergelijkbare accounts, inclusief pk
  Trap B - zeven     : /api/v1/users/{pk}/info/
                       1 request (~0,5s) -> volgers, bio, categorie, naam

Trap C (views/ER/postdatums) zit hier bewust NIET in: die is duur en hoort
alleen te draaien voor wie trap B overleeft. Dit script levert de shortlist.

Gemeten op 2026-09-09, kort na een run van 24 uur:
  - /api/v1/users/web_profile_info/  -> 429 (geblokkeerd)
  - /api/v1/users/{pk}/info/         -> 200 in 468ms
  - /api/v1/discover/chaining/       -> 200 in ~900ms
De limieten staan dus per endpoint los van elkaar.

Alles wordt per profiel direct weggeschreven (JSONL), inclusief afwijzingen
met reden - een run van uren mag nooit meer een alles-of-niets-gok zijn.

Gebruik:
    python ig_zoek_trapAB.py                # volledige run
    python ig_zoek_trapAB.py --limit 40     # eerst even proeven
    python ig_zoek_trapAB.py --alleen-trapA # alleen verzamelen, niet zeven
"""
import json, os, re, sys, time
from datetime import datetime

sys.stdout.reconfigure(encoding="utf-8")

from playwright.sync_api import sync_playwright
from playwright_stealth import Stealth

from ig_beoordeling import beoordeel

_HOME = os.path.expanduser("~")
SESSION_FILE = os.path.join(_HOME, ".ig_session.json")
DATABASE_FILE = os.path.join(_HOME, "Documents", "ObsidianVault", "02_Partnership_Agent",
                             "Influencers_Creators", "Influencer Database.md")
BEOORDEELD_FILE = os.path.join(_HOME, ".ig_al_beoordeeld.json")
_STAMP = datetime.now().strftime("%Y-%m-%d_%H%M")
UIT_JSONL = os.path.join(_HOME, "Downloads", f"HiGrip_trapAB_{_STAMP}.jsonl")
UIT_LOG = os.path.join(_HOME, "Downloads", f"HiGrip_trapAB_{_STAMP}.log")

IG_APP_ID = "936619743392459"

# Seeds voor trap A. Bewust gekozen op CONTENT, niet op relatie: chaining
# weerspiegelt de gevestigde volgersgraaf, en loopt dus achter op een creator
# die recent van niche wisselde (gemeten op @jayjay.wav - actieve partner die
# nu voetbalcontent maakt, maar wiens graaf nog vol DJ-accounts zit).
# Lage opbrengst wordt gemeld, NOOIT automatisch verwijderd.
SEEDS = [
    "esmaastyle",          # freestyle/panna/futsal NL - beste chaining-opbrengst gemeten
    "perrrypanna",         # partner, panna
    "aya.rmx",             # wereldkampioen panna, HFC
    "saifeljackson",       # panna, El Jackson-netwerk
    "duncan.g9",           # zaalvoetbal Heracles
    "jessemarlet",         # freestyle football NL
    "klaas.clipper",       # freestyle NL
    "ayoubboukhari10",     # futsal international NL
    "fabriciorpaiva",      # futsal BR-NL
    "akkamist",            # bestaand referentie-account voetbal
    "boersma_goalkeeping", # keepers
    "boazsmits11",         # voetbal
]

THROTTLE_TRAP_A = 3.0    # seconden tussen chaining-calls
THROTTLE_TRAP_B = 1.5    # seconden tussen info-calls
MAX_OPEENVOLGENDE_FOUTEN = 5   # daarna: stoppen, niet degraderen

ARGS = sys.argv[1:]
LIMIET = None
if "--limit" in ARGS:
    LIMIET = int(ARGS[ARGS.index("--limit") + 1])
ALLEEN_A = "--alleen-trapA" in ARGS


_logfile = open(UIT_LOG, "w", encoding="utf-8")


def log(msg=""):
    print(msg)
    _logfile.write(msg + "\n")
    _logfile.flush()


def laad_bekende_handles():
    """Dedupe: alles wat al in de Influencer Database staat of al beoordeeld is."""
    handles = set()
    try:
        with open(DATABASE_FILE, encoding="utf-8") as f:
            text = f.read()
        for m in re.finditer(r"\[@([\w.]+)\]\(https://www\.instagram\.com/", text):
            handles.add(m.group(1).lower())
        log(f"{len(handles)} accounts uit de Influencer Database geladen (dedupe)")
    except Exception as e:
        log(f"Influencer Database niet leesbaar ({e}) - ga verder zonder")
    try:
        with open(BEOORDEELD_FILE, encoding="utf-8") as f:
            eerder = json.load(f)
        handles |= {h.lower() for h in eerder}
        log(f"{len(eerder)} eerder beoordeelde accounts geladen (dedupe over runs heen)")
    except Exception:
        log("Nog geen eerder-beoordeeld-lijst - die wordt na deze run aangemaakt")
    return handles


# ── API-aanroepen vanuit de paginacontext ────────────────────────────────────

JS_CHAINING = """
async (a) => {
    const t0 = performance.now();
    const resp = await fetch('/api/v1/discover/chaining/?target_id=' + a.pk,
        {credentials: 'include', headers: {'x-ig-app-id': a.appId}});
    const txt = await resp.text();
    let body = null;
    try { body = JSON.parse(txt); }
    catch (e) { return {ok: false, status: resp.status, ms: Math.round(performance.now()-t0),
                        reden: 'geen JSON (waarschijnlijk geblokkeerd)'}; }
    return {ok: resp.ok, status: resp.status, ms: Math.round(performance.now()-t0),
            melding: body.message || null,
            users: (body.users || []).map(u => ({
                pk: String(u.pk), username: u.username, full_name: u.full_name,
                is_private: !!u.is_private, is_verified: !!u.is_verified}))};
}
"""

JS_INFO = """
async (a) => {
    const t0 = performance.now();
    const resp = await fetch('/api/v1/users/' + a.pk + '/info/',
        {credentials: 'include', headers: {'x-ig-app-id': a.appId}});
    const txt = await resp.text();
    let body = null;
    try { body = JSON.parse(txt); }
    catch (e) { return {ok: false, status: resp.status, ms: Math.round(performance.now()-t0),
                        reden: 'geen JSON (waarschijnlijk geblokkeerd)'}; }
    const u = body.user || {};
    return {ok: resp.ok, status: resp.status, ms: Math.round(performance.now()-t0),
            profiel: {
                username: u.username, full_name: u.full_name,
                biography: u.biography, category: u.category,
                follower_count: u.follower_count, following_count: u.following_count,
                media_count: u.media_count, is_private: !!u.is_private,
                is_verified: !!u.is_verified, is_business: !!u.is_business,
                external_url: u.external_url}};
}
"""


def pk_van_seed(page, username):
    """Seeds hebben nog geen pk - die staat in de profielpagina zelf."""
    try:
        page.goto(f"https://www.instagram.com/{username}/",
                  wait_until="domcontentloaded", timeout=25000)
        time.sleep(2)
        html = page.content()
        for pat in [r'"profilePage_(\d+)"', r'"user_id":"(\d+)"', r'"id":"(\d{6,})"']:
            m = re.search(pat, html)
            if m:
                return m.group(1)
    except Exception as e:
        log(f"    kon @{username} niet laden: {e}")
    return None


def main():
    bekend = laad_bekende_handles()
    gevonden = {}          # username -> {pk, full_name, ...}
    seed_opbrengst = {}
    fouten_op_rij = 0
    uit = open(UIT_JSONL, "w", encoding="utf-8")

    with sync_playwright() as p:
        browser = p.chromium.launch(
            headless=False,
            args=["--disable-blink-features=AutomationControlled", "--no-sandbox"],
            ignore_default_args=["--enable-automation"],
        )
        # Geen user_agent-override: die zette de UA op Chrome/124 terwijl de
        # browser via client hints Chromium 148 meldt. Die mismatch is een
        # bekend detectiesignaal en levert niets op.
        context = browser.new_context(viewport={"width": 1280, "height": 900})
        try:
            with open(SESSION_FILE, encoding="utf-8-sig") as f:
                context.add_cookies(json.load(f))
        except Exception as e:
            log(f"Kon sessie niet laden: {e}")
            return
        page = context.new_page()
        Stealth().apply_stealth_sync(page)

        page.goto("https://www.instagram.com/", wait_until="domcontentloaded", timeout=30000)
        time.sleep(3)
        if "login" in page.url:
            log("Niet ingelogd - sessie is geflagd. Vraag Lars om een verse cookie-export.")
            browser.close()
            return

        # ── TRAP A ──
        log(f"\n{'='*66}\nTRAP A - vergelijkbare accounts ophalen ({len(SEEDS)} seeds)\n{'='*66}")
        for seed in SEEDS:
            pk = pk_van_seed(page, seed)
            if not pk:
                log(f"  @{seed:22s} geen pk gevonden - overgeslagen")
                continue
            r = page.evaluate(JS_CHAINING, {"pk": pk, "appId": IG_APP_ID})
            if not r.get("ok"):
                fouten_op_rij += 1
                log(f"  @{seed:22s} status {r.get('status')} - {r.get('reden') or r.get('melding')}")
                if fouten_op_rij >= MAX_OPEENVOLGENDE_FOUTEN:
                    log(f"\n!! {fouten_op_rij} fouten op rij in trap A - gestopt in plaats van "
                        f"door te gaan op halve kracht.")
                    break
                time.sleep(THROTTLE_TRAP_A)
                continue
            fouten_op_rij = 0
            users = r.get("users") or []
            nieuw = 0
            for u in users:
                un = (u["username"] or "").lower()
                if not un or un in bekend or un in gevonden:
                    continue
                gevonden[un] = u
                nieuw += 1
            seed_opbrengst[seed] = {"terug": len(users), "nieuw": nieuw}
            log(f"  @{seed:22s} {len(users):3d} accounts, {nieuw:3d} nieuw  ({r['ms']}ms)")
            time.sleep(THROTTLE_TRAP_A)

        log(f"\nTrap A klaar: {len(gevonden)} unieke nieuwe accounts")

        # Lage opbrengst melden, nooit zelf een seed schrappen.
        mager = [s for s, v in seed_opbrengst.items() if v["nieuw"] <= 3]
        if mager:
            log(f"\nLET OP - deze seeds leverden weinig nieuws op: {', '.join('@'+s for s in mager)}")
            log("  Dat kan betekenen dat hun volgersgraaf achterloopt op hun huidige content")
            log("  (zoals bij @jayjay.wav). Beoordeel zelf of ze seed moeten blijven -")
            log("  het script verwijdert ze bewust niet.")

        # Trap A ALTIJD eerst wegschrijven, voor trap B ook maar begint. In de
        # eerste proefrun stond hier alleen een schrijfactie achter --alleen-trapA,
        # waardoor een run met --limit 60 de andere 665 gevonden accounts liet
        # verdampen. Exact dezelfde fout als het oude script maakte.
        trapA_bestand = UIT_JSONL.replace(".jsonl", "_trapA.jsonl")
        with open(trapA_bestand, "w", encoding="utf-8") as fa:
            for un, u in gevonden.items():
                fa.write(json.dumps({"fase": "trapA", **u}, ensure_ascii=False) + "\n")
        log(f"Trap A weggeschreven -> {trapA_bestand}")

        if ALLEEN_A:
            uit.close()
            browser.close()
            return

        # ── TRAP B ──
        kandidaten = list(gevonden.items())
        if LIMIET:
            kandidaten = kandidaten[:LIMIET]
        log(f"\n{'='*66}\nTRAP B - zeven op volgers/bio/categorie ({len(kandidaten)} accounts)\n{'='*66}")

        tellers = {}
        tijden = []
        beoordeeld_deze_run = set()
        fouten_op_rij = 0
        t_start = time.time()

        for i, (un, basis) in enumerate(kandidaten, 1):
            if basis.get("is_private"):
                # is_private MOET mee: zonder dat veld is de regel niet
                # zelfbeschrijvend en komt een prive-account bij het offline
                # herbeoordelen als GEEN_DATA terug in plaats van als afwijzing.
                regel = {"fase": "trapB", "username": un, "pk": basis["pk"],
                         "full_name": basis.get("full_name"), "is_private": True,
                         "bucket": "WEG", "score": -99, "labels": ["prive account"],
                         "bron": "chaining"}
                uit.write(json.dumps(regel, ensure_ascii=False) + "\n")
                uit.flush()
                tellers["WEG"] = tellers.get("WEG", 0) + 1
                beoordeeld_deze_run.add(un)
                continue

            r = page.evaluate(JS_INFO, {"pk": basis["pk"], "appId": IG_APP_ID})
            if not r.get("ok"):
                fouten_op_rij += 1
                log(f"  [{i:3d}/{len(kandidaten)}] @{un:24s} status {r.get('status')} - {r.get('reden')}")
                uit.write(json.dumps({"fase": "trapB", "username": un, "pk": basis["pk"],
                                      "bucket": "FOUT", "status": r.get("status")},
                                     ensure_ascii=False) + "\n")
                uit.flush()
                if fouten_op_rij >= MAX_OPEENVOLGENDE_FOUTEN:
                    log(f"\n!! {fouten_op_rij} fouten op rij na {i} profielen "
                        f"({time.time()-t_start:.0f}s) - GESTOPT.")
                    log("   Dit is precies waar de oude opzet stilletjes terugviel op de "
                        "trage DOM-route en 24 uur doorging met slechte data.")
                    break
                time.sleep(THROTTLE_TRAP_B * 3)
                continue

            fouten_op_rij = 0
            tijden.append(r["ms"])
            prof = r["profiel"]
            bucket, score, labels = beoordeel(prof)
            tellers[bucket] = tellers.get(bucket, 0) + 1

            regel = {"fase": "trapB", "username": un, "pk": basis["pk"],
                     "bucket": bucket, "score": score, "labels": labels,
                     "bron": "chaining", **prof}
            uit.write(json.dumps(regel, ensure_ascii=False) + "\n")
            uit.flush()
            beoordeeld_deze_run.add(un)

            if bucket in ("HOUDEN", "TWIJFEL"):
                vlg = f"{prof.get('follower_count') or 0:,}".replace(",", ".")
                log(f"  [{i:3d}/{len(kandidaten)}] {bucket:8s} @{un:24s} {vlg:>8s} vlg "
                    f"| score {score:2d} | {', '.join(labels)}")

            time.sleep(THROTTLE_TRAP_B)

        uit.close()
        duur = time.time() - t_start

        # ── samenvatting ──
        log(f"\n{'='*66}\nSAMENVATTING\n{'='*66}")
        for b in ("HOUDEN", "TWIJFEL", "WEG", "GEEN_DATA", "FOUT"):
            if tellers.get(b):
                log(f"  {b:10s} {tellers[b]:4d}")
        if tijden:
            log(f"\n  trap B: {len(tijden)} gelukte calls, gemiddeld {sum(tijden)//len(tijden)}ms")
            log(f"  totale duur trap B: {duur/60:.1f} min "
                f"({duur/max(len(tijden),1):.1f}s per profiel incl. throttle)")
        log(f"\n  per profiel weggeschreven -> {UIT_JSONL}")
        log(f"  log -> {UIT_LOG}")

        # dedupe-lijst bijwerken zodat afwijzingen niet elke run terugkomen
        try:
            eerder = set()
            if os.path.exists(BEOORDEELD_FILE):
                with open(BEOORDEELD_FILE, encoding="utf-8") as f:
                    eerder = set(json.load(f))
            # Alleen wie daadwerkelijk beoordeeld is. Bij een vroegtijdige stop
            # (rate limit) mogen de niet-bereikte accounts niet als "al gezien"
            # gemarkeerd worden - dan zou je ze nooit meer tegenkomen.
            eerder |= beoordeeld_deze_run
            with open(BEOORDEELD_FILE, "w", encoding="utf-8") as f:
                json.dump(sorted(eerder), f)
            log(f"  al-beoordeeld-lijst nu {len(eerder)} accounts -> {BEOORDEELD_FILE}")
        except Exception as e:
            log(f"  kon al-beoordeeld-lijst niet bijwerken: {e}")

        browser.close()
    _logfile.close()


if __name__ == "__main__":
    main()
```

### ig_zoek_trapC.py

Zoek-pijplijn trap C (nieuw 2026-09-09). Meet views, engagement rate, activiteit en captions voor wie trap B overleefde, door het antwoord op Instagram's eigen posts- en reels-query te onderscheppen in plaats van een eigen request na te bouwen.

```python
"""
HI Grip - zoek-pijplijn trap C (2026-09-09).

Meet views, engagement rate, activiteit en captions voor de profielen die
trap B overleefd hebben. Draait dus over tientallen profielen, niet duizenden.

Waarom niet gewoon web_profile_info: dat endpoint geeft al sinds de run van
08-09 een 429 (opnieuw geverifieerd op 09-09 om 12:00). Handmatig een
GraphQL-POST nabouwen is ook geen optie - die vereist sessie-specifieke
tokens (fb_dtsg, lsd, __spin_*, jazoest) die per pagina-load verschillen.

De gekozen route: navigeer naar het profiel en ONDERSCHEP het antwoord op de
query die de pagina zelf al doet (herkenbaar aan de header
x-fb-friendly-name). Daarmee gebruiken we exact wat Instagram's eigen frontend
gebruikt - dat blijft werken als het doc_id verandert, en er is geen los
request dat opvalt.

Er zijn TWEE navigaties nodig, want geen van beide bronnen heeft alles:
  /{user}/reels/  -> play_count, maar geen enkel datumveld
  /{user}/        -> taken_at, like_count, comment_count, captions,
                     maar play_count ontbreekt en view_count is overal null

Kosten: ~7s per profiel. Voor 77 profielen ongeveer 9 minuten.

Gebruik:
    python ig_zoek_trapC.py                       # HOUDEN uit de nieuwste trap B
    python ig_zoek_trapC.py --ook-twijfel         # ook de TWIJFEL-bak
    python ig_zoek_trapC.py --bestand <jsonl>     # specifieke trap B-uitvoer
    python ig_zoek_trapC.py --limit 5             # proeven
"""
import glob, json, os, sys, time
from datetime import datetime, timezone

sys.stdout.reconfigure(encoding="utf-8")

from playwright.sync_api import sync_playwright
from playwright_stealth import Stealth

_HOME = os.path.expanduser("~")
SESSION_FILE = os.path.join(_HOME, ".ig_session.json")
_STAMP = datetime.now().strftime("%Y-%m-%d_%H%M")
UIT_JSONL = os.path.join(_HOME, "Downloads", f"HiGrip_trapC_{_STAMP}.jsonl")
UIT_TXT = os.path.join(_HOME, "Downloads", f"HiGrip_eindlijst_{_STAMP}.txt")

# Criteria uit Evaluatiecriteria.md
MIN_AVG_VIEWS = 1_000
MAX_AVG_VIEWS = 30_000
MIN_ER_PCT = 2.0
MAX_INACTIVE_DAYS = 21
MIN_RECENT_POSTS = 3

THROTTLE = 2.0
MAX_OPEENVOLGENDE_FOUTEN = 6

ARGS = sys.argv[1:]
OOK_TWIJFEL = "--ook-twijfel" in ARGS
LIMIET = int(ARGS[ARGS.index("--limit") + 1]) if "--limit" in ARGS else None
BESTAND = ARGS[ARGS.index("--bestand") + 1] if "--bestand" in ARGS else None


def nieuwste_trapB():
    # Let op de suffix-check: "_trapA" als losse substring sluit ook
    # "HiGrip_trapAB_..." uit, want daar zit "_trapA" gewoon in.
    kand = [f for f in glob.glob(os.path.join(_HOME, "Downloads", "HiGrip_trapAB_*.jsonl"))
            if not f.endswith("_trapA.jsonl")]
    if not kand:
        raise SystemExit("Geen trap B-uitvoer gevonden - draai eerst ig_zoek_trapAB.py")
    return sorted(kand)[-1]


def _friendly(resp):
    try:
        if "/graphql/query" not in resp.url:
            return ""
        return resp.request.headers.get("x-fb-friendly-name", "")
    except Exception:
        return ""


def is_reels_query(resp):
    return "ReelsTabContent" in _friendly(resp)


def is_posts_query(resp):
    return "PolarisProfilePosts" in _friendly(resp)


def zoek_edges(obj):
    """De respons nest de posts onder een lange xdt_api__v1__feed__...-sleutel."""
    if isinstance(obj, dict):
        if isinstance(obj.get("edges"), list) and obj["edges"]:
            return obj["edges"]
        for v in obj.values():
            r = zoek_edges(v)
            if r:
                return r
    elif isinstance(obj, list):
        for v in obj:
            r = zoek_edges(v)
            if r:
                return r
    return None


def meet(node):
    """Haalt de cijfers uit één post.

    De reels-tab verpakt elke post nog een laag dieper (node.media); de
    profielgrid doet dat niet. Views zitten in play_count - `view_count` is
    in beide bronnen null en dus onbruikbaar.
    """
    m = node.get("media") if isinstance(node.get("media"), dict) else node

    # Als de maker like- en view-tellingen verbergt, is like_count een
    # betekenisloos restje (@joranengelen toont 3 likes op een reel met 2.810
    # afspelingen). Dan mag er geen ER uit berekend worden.
    verborgen = bool(m.get("like_and_view_counts_disabled"))

    likes = m.get("like_count")
    if likes is None:
        likes = (m.get("edge_liked_by") or m.get("edge_media_preview_like") or {}).get("count")
    comments = m.get("comment_count")
    if comments is None:
        comments = (m.get("edge_media_to_comment") or {}).get("count")
    views = (m.get("play_count") or m.get("ig_play_count")
             or m.get("video_view_count")
             or (m.get("clips_metadata") or {}).get("play_count"))
    ts = m.get("taken_at") or m.get("taken_at_timestamp")
    cap = m.get("caption")
    if isinstance(cap, dict):
        cap = cap.get("text")
    elif cap is None:
        edges = (m.get("edge_media_to_caption") or {}).get("edges") or []
        cap = ((edges[0].get("node") or {}).get("text") if edges else None)
    # Wie is de auteur? Bij collab-posts staat hier een ANDER account, en dan
    # horen de cijfers ook bij dat account. @joelvdwilt (4.136 volgers) leverde
    # zo 18,9 miljoen gemiddelde views en ER 3.760% op, want zijn grid bevat
    # collabs van @almerecityfc_academy en @gino_gk1.
    eigenaar = ((m.get("user") or {}).get("username") or "").lower() or None

    return {"likes": int(likes or 0), "comments": int(comments or 0),
            "views": int(views) if views else None, "ts": ts,
            "caption": (cap or "")[:200], "verborgen": verborgen,
            "eigenaar": eigenaar}


def _haal(page, url, matcher):
    try:
        with page.expect_response(matcher, timeout=20000) as info:
            page.goto(url, wait_until="domcontentloaded", timeout=25000)
        return zoek_edges(info.value.json().get("data") or {})
    except Exception:
        return None


def doormeten(page, username, volgers):
    """Twee bronnen, want geen van beide heeft alles.

    - reels-tab    : play_count (de enige plek met echte afspeelcijfers),
                     maar bevat GEEN enkel datumveld
    - profielgrid  : taken_at, like_count en comment_count, maar play_count
                     staat er niet in (view_count is overal null)

    Een account zonder reels (zoals partner @jaidenpadel, 0 reels) levert bij
    de eerste bron niets op; dan blijft het profielgrid over en meten we geen
    views. Dat is een vlag, geen afwijzing.
    """
    nu = datetime.now(timezone.utc).timestamp()
    doel = username.lower()
    views, verborgen_n, posts_reels, vreemd = [], 0, 0, 0

    def van_iemand_anders(p):
        # Alleen uitsluiten als we de eigenaar KENNEN en die iemand anders is.
        return p["eigenaar"] is not None and p["eigenaar"] != doel

    reels = _haal(page, f"https://www.instagram.com/{username}/reels/", is_reels_query)
    if reels:
        posts_reels = len(reels)
        for e in reels:
            p = meet(e.get("node") or {})
            if van_iemand_anders(p):
                vreemd += 1
                continue
            if p["verborgen"]:
                verborgen_n += 1
            if p["views"]:
                views.append(p["views"])
        time.sleep(1.5)

    grid = _haal(page, f"https://www.instagram.com/{username}/", is_posts_query)
    engagements, recent, captions, posts_grid = [], 0, [], 0
    if grid:
        posts_grid = len(grid)
        for e in grid:
            p = meet(e.get("node") or {})
            if van_iemand_anders(p):
                vreemd += 1
                continue
            if p["verborgen"]:
                verborgen_n += 1
            else:
                engagements.append(p["likes"] + p["comments"])
            if p["ts"] and (nu - float(p["ts"])) / 86400 <= MAX_INACTIVE_DAYS:
                recent += 1
            if p["caption"]:
                captions.append(p["caption"])

    if not reels and not grid:
        return {"gemeten": False, "reden": "geen posts-respons opgevangen"}

    gem_views = int(sum(views) / len(views)) if views else 0
    er = None
    if engagements and volgers:
        er = round((sum(engagements) / len(engagements) / volgers) * 100, 2)

    return {"gemeten": True,
            "bron": ("reels+grid" if reels and grid else ("reels" if reels else "grid")),
            "posts_bekeken": max(posts_reels, posts_grid),
            # beide bronnen samen, want de verborgen-teller loopt over allebei
            "posts_totaal": posts_reels + posts_grid,
            "avg_views": gem_views, "posts_met_views": len(views),
            "er_pct": er, "tellingen_verborgen": verborgen_n,
            "activiteit_gemeten": bool(grid),
            "collab_posts_overgeslagen": vreemd,
            "recent_posts": recent, "captions": captions[:5]}


def onmogelijk(m, volgers):
    """Laatste vangnet: cijfers die niet kunnen kloppen nooit als feit melden.

    Zelfs met de eigenaar-filter kan er data doorglippen (bij reels is het
    user-veld niet altijd gevuld). Een ER boven de 100% betekent meer
    interacties dan volgers, en een views/volgers-verhouding boven ~60 is voor
    een nano-creator geen meting maar een meetfout.
    """
    if m.get("er_pct") is not None and m["er_pct"] > 100:
        return f"ER van {m['er_pct']}% kan niet - meer interacties dan volgers"
    if volgers and m.get("avg_views") and m["avg_views"] / volgers > 60:
        return (f"{m['avg_views']:,} gem. views op {volgers:,} volgers "
                f"(factor {m['avg_views']//volgers}) - vrijwel zeker cijfers van "
                f"een collab-partner").replace(",", ".")
    return None


def toets(m, volgers):
    """Past de criteria toe. Niet gemeten is NIET hetzelfde als niet gehaald."""
    redenen, vlaggen = [], []
    if not m.get("gemeten"):
        return "ONGEMETEN", [m.get("reden", "onbekend")]

    fout = onmogelijk(m, volgers)
    if fout:
        return "ONGEMETEN", [fout]

    if m.get("collab_posts_overgeslagen"):
        vlaggen.append(f"{m['collab_posts_overgeslagen']} collab-posts van andere "
                       f"accounts niet meegeteld")

    if m["posts_met_views"] == 0:
        vlaggen.append("geen views meetbaar (mogelijk foto-first account, zoals partner @jaidenpadel)")
    elif m["avg_views"] < MIN_AVG_VIEWS:
        redenen.append(f"te weinig views ({m['avg_views']:,})".replace(",", "."))
    elif m["avg_views"] > MAX_AVG_VIEWS:
        vlaggen.append(f"veel views ({m['avg_views']:,})".replace(",", "."))

    # ER alleen toepassen als hij echt meetbaar was. Een maker die zijn
    # tellingen verbergt mag niet afvallen op een cijfer dat niet bestaat -
    # dat is dezelfde fout als de oude "ER te laag (0.0%)"-afwijzing die
    # partner @perrrypanna wegfilterde.
    if m.get("tellingen_verborgen"):
        vlaggen.append(f"maker verbergt like-/viewtellingen op "
                       f"{m['tellingen_verborgen']} van {m.get('posts_totaal') or m['posts_bekeken']} posts - "
                       f"ER niet te bepalen")
    elif m["er_pct"] is None:
        vlaggen.append("ER niet te berekenen")
    elif m["er_pct"] < MIN_ER_PCT:
        redenen.append(f"ER te laag ({m['er_pct']}%)")

    if not m.get("activiteit_gemeten"):
        vlaggen.append("activiteit niet gemeten (geen profielgrid-respons)")
    elif m["recent_posts"] < MIN_RECENT_POSTS:
        vlaggen.append(f"weinig recente posts ({m['recent_posts']} in {MAX_INACTIVE_DAYS}d)")

    if redenen:
        return "AFGEVALLEN", redenen
    return ("GESLAAGD" if not vlaggen else "GESLAAGD_MET_VLAG"), vlaggen


def main():
    bron = BESTAND or nieuwste_trapB()
    rows = [json.loads(l) for l in open(bron, encoding="utf-8")]
    buckets = ("HOUDEN", "TWIJFEL") if OOK_TWIJFEL else ("HOUDEN",)
    lijst = [r for r in rows if r.get("bucket") in buckets]
    lijst.sort(key=lambda r: -(r.get("score") or 0))
    if LIMIET:
        lijst = lijst[:LIMIET]
    print(f"Bron: {bron}")
    print(f"{len(lijst)} profielen doormeten (buckets: {', '.join(buckets)})\n")

    uit = open(UIT_JSONL, "w", encoding="utf-8")
    resultaten, fouten_op_rij, ongemeten = [], 0, 0

    with sync_playwright() as p:
        browser = p.chromium.launch(
            headless=False,
            args=["--disable-blink-features=AutomationControlled", "--no-sandbox"],
            ignore_default_args=["--enable-automation"])
        ctx = browser.new_context(viewport={"width": 1280, "height": 900})
        with open(SESSION_FILE, encoding="utf-8-sig") as f:
            ctx.add_cookies(json.load(f))
        page = ctx.new_page()
        Stealth().apply_stealth_sync(page)
        page.goto("https://www.instagram.com/", wait_until="domcontentloaded", timeout=30000)
        time.sleep(3)
        if "login" in page.url:
            print("Niet ingelogd - sessie is geflagd. Vraag Lars om een verse cookie-export.")
            browser.close()
            return

        t0 = time.time()
        for i, r in enumerate(lijst, 1):
            un = r["username"]
            volgers = r.get("follower_count") or 0
            m = doormeten(page, un, volgers)
            status, notities = toets(m, volgers)

            regel = {**r, **m, "trapC_status": status, "trapC_notities": notities}
            uit.write(json.dumps(regel, ensure_ascii=False) + "\n")
            uit.flush()
            resultaten.append(regel)

            if status == "ONGEMETEN":
                ongemeten += 1
                fouten_op_rij += 1
            else:
                fouten_op_rij = 0

            v = f"{m.get('avg_views') or 0:,}".replace(",", ".")
            er = f"{m['er_pct']}%" if m.get("er_pct") is not None else "?"
            print(f"  [{i:3d}/{len(lijst)}] {status:18s} @{un:24s} "
                  f"{v:>7s} views | ER {er:>6s} | {m.get('recent_posts', '?')} recent"
                  + (f" | {notities[0]}" if notities else ""))

            # Niet stilletjes doorgaan als het meten structureel mislukt.
            if fouten_op_rij >= MAX_OPEENVOLGENDE_FOUTEN:
                print(f"\n!! {fouten_op_rij} keer op rij niets kunnen meten - GESTOPT na {i} profielen.")
                print("   Doorgaan levert een lijst zonder cijfers op, en dat is precies")
                print("   de fout die de run van 08-09 24 uur lang maakte.")
                break
            time.sleep(THROTTLE)

        browser.close()
    uit.close()
    duur = time.time() - t0

    # ── eindlijst ──
    volgorde = {"GESLAAGD": 0, "GESLAAGD_MET_VLAG": 1, "AFGEVALLEN": 2, "ONGEMETEN": 3}
    resultaten.sort(key=lambda r: (volgorde.get(r["trapC_status"], 9), -(r.get("avg_views") or 0)))
    with open(UIT_TXT, "w", encoding="utf-8") as f:
        f.write("HI GRIP - eindlijst na trap C (views, ER, activiteit)\n")
        f.write(f"Gemeten: {datetime.now():%Y-%m-%d %H:%M} | bron: {os.path.basename(bron)}\n")
        f.write(f"Criteria: >= {MIN_AVG_VIEWS:,} views | >= {MIN_ER_PCT}% ER | "
                f">= {MIN_RECENT_POSTS} posts / {MAX_INACTIVE_DAYS}d\n".replace(",", "."))
        f.write("=" * 74 + "\n")
        for status in ("GESLAAGD", "GESLAAGD_MET_VLAG", "AFGEVALLEN", "ONGEMETEN"):
            groep = [r for r in resultaten if r["trapC_status"] == status]
            if not groep:
                continue
            f.write(f"\n\n-- {status} ({len(groep)}) --\n")
            for r in groep:
                v = f"{r.get('avg_views') or 0:,}".replace(",", ".")
                vlg = f"{r.get('follower_count') or 0:,}".replace(",", ".")
                er = f"{r['er_pct']}%" if r.get("er_pct") is not None else "onbekend"
                f.write(f"\n  @{r['username']:26s} {vlg:>8s} vlg | {v:>7s} views | ER {er}\n")
                f.write(f"  https://www.instagram.com/{r['username']}/\n")
                f.write(f"  trap B: score {r.get('score')} - {', '.join(r.get('labels') or [])}\n")
                if r.get("trapC_notities"):
                    f.write(f"  let op: {'; '.join(r['trapC_notities'])}\n")
                bio = (r.get("biography") or "").replace("\n", " ")[:150]
                if bio:
                    f.write(f"  bio: {bio}\n")
                for c in (r.get("captions") or [])[:2]:
                    f.write(f"  caption: {c[:120]}\n")

    telling = {}
    for r in resultaten:
        telling[r["trapC_status"]] = telling.get(r["trapC_status"], 0) + 1
    print(f"\n{'='*66}\nSAMENVATTING\n{'='*66}")
    for k, n in sorted(telling.items()):
        print(f"  {k:20s} {n:3d}")
    print(f"\n  {len(resultaten)} profielen in {duur/60:.1f} min "
          f"({duur/max(len(resultaten),1):.1f}s per profiel)")
    if ongemeten:
        print(f"  {ongemeten} niet kunnen meten - die zijn NIET afgewezen, alleen ongemeten")
    print(f"\n  eindlijst -> {UIT_TXT}")
    print(f"  ruwe data -> {UIT_JSONL}")


if __name__ == "__main__":
    main()
```

### ig_beoordeling.py

De beoordelaar (nieuw 2026-09-09). Bepaalt HOUDEN / TWIJFEL / WEG / GEEN_DATA op de goedkope velden, zonder LLM. Afgesteld op 242 handmatig beoordeelde profielen; harde afwijzing alleen op prive-account, volgersband en het categorieveld van Instagram zelf.

```python
"""
HI Grip - beoordeling van een profiel op de goedkope velden.

Gebruikt alleen wat trap B (`/api/v1/users/{pk}/info/`) teruggeeft: bio,
full_name, categorie, volgers, prive-vlag. Geen LLM, geen extra requests.

Ontwerpregels (gemeten op 242 handmatig beoordeelde profielen, 2026-09-09):

1. HARDE AFWIJZING alleen op wat machinaal zeker is: prive-account,
   volgersband, en het categorieveld van Instagram zelf. Elke andere harde
   regel die geprobeerd is produceerde valse afwijzingen - waaronder twee
   profielen uit de GOED-lijst.
2. AL HET ANDERE IS EEN GEWICHT, geen veto. Een onterechte afwijzing zie je
   nooit meer terug; een onterechte doorlater kost drie seconden lezen. Dus
   royaal afstellen.
3. LEEFTIJD IS EEN LABEL, geen afwijzing - de categorie "prima, alleen jong"
   bestaat (bv. @klaas.clipper, beste cijfers van de hele run van 08-09).
4. CREATOR-SIGNALEN WEGEN OP tegen organisatie-signalen. "Contact:
   naam@management.com" wijst op een professionele creator, niet op een bedrijf.
5. GEEN OORDEEL OP NAAMHERKOMST. De niche van HI Grip (street football, panna,
   futsal) is sterk multicultureel: @esmaastyle, @ayoubboukhari10 en
   @saifeljackson staan alle drie op de GOED-lijst. Filteren op naamherkomst
   zou precies de doelgroep wegsnijden. Alleen niet-Latijns SCHRIFT telt als
   signaal, en dan nog als gewicht, niet als veto.
"""
import re
import unicodedata

# ── harde grenzen (de enige veto's) ──────────────────────────────────────────
MIN_VOLGERS = 300
MAX_VOLGERS = 50_000

# Instagram's eigen categorieveld. Deze waarden zijn per definitie geen
# persoonlijke creator. Gemeten: 10 terechte afwijzingen op 1 onterechte.
CATEGORIE_AFWIJZEN = {
    "sportclub", "sportbond", "sportevenement", "sportteam",
    "kleding (merk)", "merk", "product/dienst", "webshop", "winkel",
    "supermarkt", "restaurant", "school", "onderwijs",
    "non-profitorganisatie", "religieuze organisatie", "overheidsorganisatie",
    "sports club", "sports league", "sports team", "clothing (brand)",
    "product/service", "grocery store", "nonprofit organization",
    # Toegevoegd 2026-09-09 op basis van waarden die de proefrun echt teruggaf -
    # niet bedacht maar waargenomen. Deze lieten @telstar1963nv (voetbalclub),
    # @psvinsideofficial (fanmedia) en @voetbal_nutrition_official (supplementen)
    # ten onrechte door als TWIJFEL/HOUDEN.
    "professioneel sportteam", "media", "media-/nieuwsbedrijf",
    "nieuws- en mediawebsite", "sportwinkel", "vitaminen/supplementen",
    "community", "tijdschrift", "podcast", "professional sports team",
    "media/news company", "news & media website", "sporting goods store",
}

# ── gewichten ────────────────────────────────────────────────────────────────
# Niche bewust ZONDER \b aan het eind: "futsal" moet ook matchen binnen
# @heraclesalmelofutsal - daarop sneuvelde @duncan.g9 in de eerste versie.
NICHE_HOOG = re.compile(
    r"(voetbal|football|soccer|panna|futsal|zaalvoetbal|freestyle|"
    r"keeper|goalkeep|doelman|basketbal|basketball|streetball|dribbl)"
    # Emoji tellen mee als niche-signaal: in deze niche is de bio vaak vooral
    # emoji. @isabella.lim_ had letterlijk "⚽️⚽️⚽️" als hele bio en werd
    # daardoor afgewezen op "geen sportwoord gevonden".
    r"|⚽|\U0001F945|\U0001F3C0|\U0001F9E4", re.I)
NICHE_NORMAAL = re.compile(
    r"(tennis|padel|rugby|gym|fitness|running|hardlopen|pilates|yoga|"
    r"ironman|triatlon|atleet|athlete|sport)"
    r"|\U0001F3BE|\U0001F3C9|\U0001F3CB|\U0001F3C3|\U0001F9D8", re.I)

# Nederlandse clubnamen bevatten vaak geen sportwoord, waardoor een bio als
# "@gaeagles_vrouwen" (Go Ahead Eagles) of "Creative @rscanderlecht" op
# "geen sportwoord" sneuvelde terwijl het juist raak is.
CLUB_VERMELDING = re.compile(
    r"@\w*(ajax|psv|feyenoord|az\b|utrecht|twente|vitesse|heracles|willem2|"
    r"nec\b|sparta|excelsior|fortuna|rkc|nac|dordrecht|cambuur|emmen|"
    r"eagles|graafschap|telstar|volendam|zwolle|groningen|heerenveen|"
    r"anderlecht|genk|brugge|standard|antwerp|gent)\w*", re.I)

NL_SIGNAAL = re.compile(
    r"(nederland|nederlandse|dutch|holland|belgie|belgië|belgisch|"
    r"amsterdam|rotterdam|utrecht|eindhoven|tilburg|almere|leiden|delft|"
    r"groningen|sneek|zoetermeer|aalsmeer|breda|nijmegen|arnhem|haarlem|"
    r"eredivisie|knvb|knltb|oranje)"
    r"|\.nl\b|\bnl\b"
    r"|\U0001F1F3\U0001F1F1|\U0001F1E7\U0001F1EA", re.I)

# Alleen SCHRIFT en expliciete plaats/land-claims - nooit naamherkomst.
NIET_LATIJNS = re.compile(r"[؀-ۿЀ-ӿ가-힯一-鿿֐-׿]")
BUITENLAND = re.compile(
    r"\U0001F1E7\U0001F1F7|\U0001F1F5\U0001F1ED|\U0001F1F2\U0001F1FE|"
    r"\U0001F1EE\U0001F1F7|\U0001F1F6\U0001F1E6|\U0001F1EF\U0001F1F4|"
    r"\U0001F1F1\U0001F1F9|\U0001F1E8\U0001F1ED|\U0001F1F0\U0001F1F7|"
    r"\U0001F1EA\U0001F1F8|\U0001F1F5\U0001F1F9|\U0001F1EC\U0001F1E7|"
    # Toegevoegd na de run van 11:16: AR, PL, MX, UY, EE, TR, DK, US, IT
    # kwamen er allemaal doorheen (@maximasifs, @pawelskora28, @m3mofs,
    # @fbarba_gk1, @karlhynerson).
    r"\U0001F1E6\U0001F1F7|\U0001F1F5\U0001F1F1|\U0001F1F2\U0001F1FD|"
    r"\U0001F1FA\U0001F1FE|\U0001F1EA\U0001F1EA|\U0001F1F9\U0001F1F7|"
    r"\U0001F1E9\U0001F1F0|\U0001F1FA\U0001F1F8|\U0001F1EE\U0001F1F9|"
    r"\b(barcelona|madrid|london|malaysia|malaysian|jordanian|qatari|"
    r"brasil|brazil|switzerland|suisse|hong kong|scotland|geordie|"
    r"philippines|lithuania|uruguayo|california|mistrz|campeon|"
    r"latino americano|"
    # Taal is wél een geldig signaal (in tegenstelling tot naamherkomst, zie
    # regel 5 boven): een bio in het Portugees of Spaans betekent een
    # Portugees/Spaanstalig publiek, en dus niet de NL-markt. Zonder dit kwamen
    # 7 van de 16 eindkandidaten uit Brazilie.
    r"atleta|goleiro|zagueiro|lateral direito|preparador|consultoria|"
    r"sonho|futebol|jogador|treinador|profissional|educação|"
    r"jugador|entrenador|equipo|seleccion|deportista)\b", re.I)

CREATOR_SIGNAAL = re.compile(
    r"(creator|content|vlog|maker van reel|digitale maker|collab|samenwerking|"
    r"linktr|link in bio|tiktok|youtube|snapchat|management|"
    r"\bdm\b|📩|📨|📧|contact:|booking)", re.I)
PERSOON_SIGNAAL = re.compile(
    r"(player|speler|atleet|athlete|freestyler|champion|kampioen|"
    r"i play|ik ben|my |mijn |pro |ex-pro|ex\. pro|prof)", re.I)
ORGANISATIE = re.compile(
    r"(official account|officieel account|opgericht|voetbalschool|academie|"
    r"academy|vereniging|stichting|foundation|organized by|register now|"
    r"the world.s leading|join to connect|premier .{0,20}team|"
    r"burgemeester|\bstraat \d|openingstijden|"
    # Makelaars/management-bureaus zijn geen creator (@hugovliese).
    r"licensed football agent|spelersmakelaar|player manager|"
    r"officiële pagina|official page|landskampioen \d{4})", re.I)
MERK_PROMO = re.compile(
    r"(dutch sneaker brand|a padel brand|% off|\bdiscount\b|try for free|"
    r"shot & edited with|gebruik code|use code|bestel nu|shop now)", re.I)

JONG_SIGNAAL = re.compile(
    r"(born in 20\d\d|geboren 20\d\d|\b\d{1,2} years old\b|\b\d{1,2} jaar\b|"
    r"\b\d{1,2} ?y/?o\b|\bjeugd\b|\btalent u ?\d\d\b|"
    r"(managed|run) by (my )?(mom|dad|mother|father)|beheerd door|"
    r"\bu ?1[0-8]\b|\bo1[0-8]\b|\bjo1[0-8]\b|lichting 20\d\d)", re.I)

# Concurrerende gripsokken-merken (Evaluatiecriteria: uitsluiting)
CONCURRENT = re.compile(
    r"(trusox|tapedesign|gripsock|grip sock|gripsokken|soxpro|liiteguard|gripmode|gripgrab|nonbi|storelli|falke grip)", re.I)

DREMPEL_HOUDEN = 7
DREMPEL_TWIJFEL = 2


def beoordeel(profiel):
    """
    profiel: dict met keys username, full_name, biography, category,
             follower_count, is_private.

    Retourneert (bucket, score, labels) waarbij bucket een van:
      HOUDEN     - kandidaat, door naar trap C (views/ER meten)
      TWIJFEL    - door naar trap C, maar met lagere prioriteit
      WEG        - afgewezen, met reden
      GEEN_DATA  - te weinig informatie om over te oordelen
    """
    labels = []
    bio = (profiel.get("biography") or "").strip()
    naam = (profiel.get("full_name") or "").strip()
    cat = (profiel.get("category") or "").strip()
    volgers = profiel.get("follower_count")

    # ── veto 1: prive ──
    if profiel.get("is_private"):
        return "WEG", -99, ["prive account"]

    # ── veto 2: categorieveld van Instagram zelf ──
    if cat and cat.lower() in CATEGORIE_AFWIJZEN:
        return "WEG", -99, [f"IG-categorie: {cat}"]

    # ── veto 3: volgersband ──
    if volgers is not None and volgers > 0:
        if volgers < MIN_VOLGERS:
            return "WEG", -99, [f"te weinig volgers ({volgers:,})".replace(",", ".")]
        if volgers > MAX_VOLGERS:
            return "WEG", -99, [f"te veel volgers ({volgers:,})".replace(",", ".")]

    # ── vanaf hier: alleen gewichten ──
    # Instagram-bio's staan vol wiskundige/schreefloze unicode-varianten
    # (𝗢𝗳𝗳... i.p.v. gewone letters). Zonder normalisatie matcht geen enkele
    # regex daarop: zo kwam @svdso_zoetermeer ("Officieel account van SV DSO")
    # met score 11 als HOUDEN binnen.
    def _norm(s):
        return unicodedata.normalize('NFKC', s or '')
    bio, naam, cat = _norm(bio), _norm(naam), _norm(cat)
    tekst = f"{bio} {naam} {cat}"
    if not bio and not cat:
        return "GEEN_DATA", 0, ["geen bio en geen categorie opgehaald"]

    # Een bio van een paar tekens ("ye") of alleen een @vermelding zegt niets.
    # Die hoort in GEEN_DATA, niet in WEG: we hebben geen bewijs, geen oordeel.
    kaal = re.sub(r"[@\w.]+", "", bio).strip()
    if len(bio) < 12 and not NICHE_HOOG.search(tekst) and not NICHE_NORMAAL.search(tekst):
        return "GEEN_DATA", 0, ["bio te kort om over te oordelen"]

    score = 0

    if NICHE_HOOG.search(tekst):
        score += 4
        labels.append("niche hoog")
    elif NICHE_NORMAAL.search(tekst):
        score += 2
        labels.append("niche normaal")
    elif CLUB_VERMELDING.search(tekst):
        score += 3
        labels.append("clubvermelding")
    else:
        score -= 3
        labels.append("geen sportwoord gevonden")

    nl = bool(NL_SIGNAAL.search(tekst))
    if nl:
        score += 3
        labels.append("NL-signaal")
    if NIET_LATIJNS.search(tekst):
        score -= 2 if not nl else 0
        labels.append("niet-Latijns schrift")
    if BUITENLAND.search(tekst):
        score -= 3 if not nl else 1
        labels.append("buitenlandsignaal")

    creator = bool(CREATOR_SIGNAAL.search(tekst))
    if creator:
        score += 3
        labels.append("creator-signaal")
    if PERSOON_SIGNAAL.search(tekst):
        score += 2
        labels.append("persoon")

    if ORGANISATIE.search(tekst):
        if creator:
            score -= 1
            labels.append("organisatiewoorden, maar ook creator-signaal")
        else:
            score -= 4
            labels.append("organisatie")
    if MERK_PROMO.search(tekst):
        score -= 3
        labels.append("merk/promo")

    if CONCURRENT.search(tekst):
        return "WEG", -99, ["promoot een concurrerend gripsokken-merk"]

    # Label, bewust geen aftrek (regel 3).
    if JONG_SIGNAAL.search(tekst):
        labels.append("LET OP: mogelijk jong")

    if volgers and 2000 <= volgers <= 30000:
        score += 1
        labels.append("ideale volgersband")

    if score >= DREMPEL_HOUDEN:
        return "HOUDEN", score, labels
    if score >= DREMPEL_TWIJFEL:
        return "TWIJFEL", score, labels
    return "WEG", score, labels
```

### ig_find_creators.py

Het oorspronkelijke script. Blijft in gebruik voor de content-gebaseerde bronnen (hashtags, commenters op partner-reels) en voor het doormeten van views/ER, maar niet meer voor breed zoeken.

```python
"""
HI Grip - Instagram creator zoek-script (v4, samengevoegd).

Combineert vier bronnen in een script:
  1. Hashtag-scan per sport
  2. Following-lijst van eigen/seed-accounts (curated shortlist)
  3. Commenters op referentie-accounts per sport
  4. Following-lijsten van NL creator-accounts (wie volgt iamyasinflits e.d.)

Profielbeoordeling gebeurt via Instagram's eigen web_profile_info JSON-endpoint
(exacte cijfers, inclusief like/comment-counts en post-datums) i.p.v. het
uitlezen van zichtbare, taal-afhankelijke tekst in de pagina. Als dat endpoint
een keer faalt/geblokkeerd wordt, valt het script terug op de oudere
DOM-scraping methode zodat een los profiel nooit de hele run laat crashen.

Filters volgen Evaluatiecriteria.md in de Obsidian vault. Alles hier is een harde,
deterministische cijferfilter (snel, gratis, geen LLM nodig):
  - Volgers: 300 - 50.000
  - Gem. views per post: minimaal MIN_AVG_VIEWS
  - Engagement rate (ER%): minimaal MIN_ER_PCT
  - Activiteit: minimaal MIN_RECENT_POSTS posts in de laatste MAX_INACTIVE_DAYS dagen
  - Taal: NL-signaal in bio (anders "review" i.p.v. automatische afwijzing)
  - Dedupe tegen de bestaande Influencer Database (al gevonden/benaderd wordt overgeslagen)

Het script verzamelt ook bio + recente captions per kandidaat (in de output),
zodat de sport/lifestyle-fit en concurrentie-check (zie Evaluatiecriteria.md)
achteraf handmatig of door Claude Code beoordeeld kunnen worden - geen losse
Anthropic API-key/kosten nodig voor dit script zelf.

Draai met `--unattended` (bv. vanuit een geplande taak) om de handmatige
2FA/verificatie-pauze over te slaan: het script stopt dan netjes i.p.v. voor
altijd te wachten op een ENTER die nooit komt.
"""
import sys, time, json, os, re
from datetime import datetime, timezone

sys.stdout.reconfigure(encoding="utf-8")

from playwright.sync_api import sync_playwright
from playwright_stealth import Stealth

UNATTENDED = "--unattended" in sys.argv


class LoginRequiresVerification(Exception):
    pass


class SystemExit_Degradatie(Exception):
    """JSON-endpoint geblokkeerd; doorgaan levert alleen schijnresultaat."""
    pass

_HOME         = os.path.expanduser("~")
SESSION_FILE  = os.path.join(_HOME, ".ig_session.json")
OUTPUT_FILE   = os.path.join(_HOME, "Downloads", "HiGrip_Creators.txt")
DATABASE_FILE = os.path.join(_HOME, "Documents", "ObsidianVault", "02_Partnership_Agent",
                             "Influencers_Creators", "Influencer Database.md")

IG_APP_ID = "936619743392459"  # publieke web-app-id die instagram.com zelf gebruikt

# ── Bronnen ──────────────────────────────────────────────────────────────────

# Following-lijst van deze account(s) scannen (het account waarmee is ingelogd —
# dat volgt bewust influencers op als curated shortlist). Leeg = overslaan.
SEED_ACCOUNTS = ["lars_a.i.h"]

# Following-lijsten van NL creators scannen: wie zij volgen zijn vaak kleine creators
# in dezelfde niche die anders moeilijk te vinden zijn via hashtags of commenters.
CREATOR_FOLLOW_LISTS = []  # iamyasinflits volgt profvoetballers (Ziyech, Güler) — niet bruikbaar
CREATOR_FOLLOW_MAX   = 150   # max accounts te verwerken per creator-following lijst

# Scan commenters op reels van accounts die dit account volgt.
# lars_a.i.h volgt bewust voetbal-influencers als curated shortlist — commenters
# op hun content zijn veel gerichter dan willekeurige hashtag-posters.
#
# INGEPERKT 2026-09-09 na meting op de run van 08-09: deze bron leverde 1.221
# van de 1.810 profielen (67% van de looptijd, ~44 min alleen al voor het
# verzamelen) en daaruit kwam GEEN ENKELE bruikbare creator. Reageerders op
# reels zijn overwegend gewone volgers, geen makers.
# Niet geschrapt maar ingeperkt: voor een creator die recent van niche wisselde
# (zoals partner @jayjay.wav, die nu voetbalcontent maakt terwijl zijn
# volgersgraaf nog vol DJ-accounts zit) is een content-gebaseerde bron juist
# actueler dan de graaf-gebaseerde chaining uit ig_zoek_trapAB.py.
# Breed zoeken hoort nu in ig_zoek_trapAB.py; dit is de gerichte variant.
COMMENTER_SEED_ACCOUNTS  = ["lars_a.i.h"]
COMMENTER_SEED_FOLLOW_MAX = 8    # was 60 - alleen de dichtstbijzijnde accounts
REELS_PER_COMMENTER_SEED  = 3    # reels per gevolgd account

HASHTAGS = {
    "Voetbal_vlog":      ["voetbalvlog", "voetbalvlogger", "voetballer"],
    "Voetbal_amateur":   ["amateurvoetbal", "wedstrijddag", "voetbalseizoen"],
    "Voetbal_training":  ["voetbaltraining", "jongevoetballer", "voetballife"],
    "Voetbal_wedstrijd": ["voetbalmatch", "matchdaynl", "voetbalwedstrijd"],
    "Zaalvoetbal":       ["zaalvoetbal", "futsalnederland", "futsalspeler"],
    # Seizoensstart eind zomer (~aug/sep) - zie Evaluatiecriteria.md.
    "Basketbal":         ["basketballnl", "streetballnl", "3x3nl"],
}
POSTS_PER_TAG = 20

# Referentie-accounts per sport: wie reageert op hun reels is vaak zelf creator.
# LET OP: finnpicard_ hoort hier NIET in (bevestigd geen voetbal-account).
REFERENCE_ACCOUNTS = {
    "Voetbal":    ["akkamist", "iamyasinflits", "boersma_goalkeeping", "boazsmits11"],
    "Basketbal":  ["tweeboomcourt", "3x3nl"],
    # Bestaande HI Grip-samenwerkingen - qua grootte/stijl exact het gewenste profiel.
    "Partners":   ["perrrypanna", "jaidenpadel", "jayjay.wav"],
}
REELS_PER_REF_ACCOUNT = 5

# Accounts die nooit meegenomen mogen worden, ongeacht bron.
EXCLUDED_ACCOUNTS = {
    "finnpicard_",        # geen voetbal-account
    "fienvermeulen",      # lifestyle, geen sport
    "luukornstein",       # filmmaker, geen sport
    "skillafootball",     # te groot
    "de_voetbal_vlog",    # account van een kind
    "joshuaagteres",      # geen voetbalcontent
    "ninourbann",         # geen video's, geen voetbal
    "luca_van_ammers",    # stemacteur, Frans, geen voetbal
    "michiel_pilaar",     # vis-contentcreator, geen sport
    "voetbalgiveaways_",  # giveaway-account, geen creator
    "footballculture_com",# media-pagina, geen persoonlijke creator
    "fcdeifferdeng03",    # voetbalclub, geen persoonlijke creator
    "sprotselaar",        # voetbalclub (Sp. Rotselaar), geen persoonlijke creator
    "klyralierse",        # voetbalclub (K Lyra Lierse), geen persoonlijke creator
}

# Usernames die wijzen op media/nieuws/giveaway-accounts — geen persoonlijke creators.
EXCLUDED_USERNAME_PATTERNS = re.compile(
    r"(giveaway|nieuws|news|alert|update|club|fc[._]|vv[._]|official|culture_com|"
    r"magazine|media|tv[._]|highlight|scout|transfer|fanpage|community|"
    r"^fc[a-z]|^vv[a-z]|^kfc|^rksv|^kvv)",
    re.I,
)

# ── filters (Evaluatiecriteria.md) ───────────────────────────────────────────

MIN_FOLLOWERS     = 300   # verlaagd: echte partner @jaidenpadel heeft maar 815 volgers
MAX_FOLLOWERS     = 50_000   # tussen nano/micro sweet spot (30k) en officiele 100k-plafond
MIN_AVG_VIEWS     = 1_000
MAX_AVG_VIEWS     = 30_000    # boven dit: te groot voor micro-creator
MIN_ER_PCT        = 2.0
MAX_INACTIVE_DAYS = 21   # "3 posts in de afgelopen 3 weken"
MIN_RECENT_POSTS  = 3

DUTCH_HINTS = re.compile(
    r"\b(en|de|het|een|met|voor|niet|jij|jouw|mijn|wij|onze|nederland|nederlandse|"
    r"amsterdam|rotterdam|utrecht|eindhoven|nl|holland|belgie|belgië)\b"
    r"|\U0001F1F3\U0001F1F1|\U0001F1E7\U0001F1EA",  # vlag-emoji NL / BE - vaak gebruikt ipv tekst
    re.I,
)

SPORT_HINTS = re.compile(
    r"\b(voetbal|football|soccer|keeper|doelman|panna|futsal|zaalvoetbal|"
    r"basketbal|basketball|tennis|padel|rugby|sport|training|wedstrijd|"
    r"skills?|goals?|assist|match|coach|speler|player|"
    r"kick|dribbl|shoot|penalty|striker|midfielder|verdediger|aanvaller)\b",
    re.I,
)

MAX_CAPTIONS_STORED = 5


# ── auth ─────────────────────────────────────────────────────────────────────

def dismiss_cookies(page):
    for sel in [
        "button:has-text('Alle cookies toestaan')",
        "button:has-text('Allow all cookies')",
        "button:has-text('Accepteren')",
    ]:
        try:
            page.click(sel, timeout=3000)
            time.sleep(1)
            return
        except Exception:
            pass


def is_logged_in(page):
    try:
        page.wait_for_selector(
            'a[href="/direct/inbox/"], svg[aria-label="Direct"], nav a[href="/"]',
            timeout=5000,
        )
        return True
    except Exception:
        return False


def login(context, page):
    from ig_search_higrip import USERNAME, PASSWORD

    page.goto("https://www.instagram.com/", wait_until="domcontentloaded", timeout=30000)
    time.sleep(3)
    dismiss_cookies(page)
    try:
        page.wait_for_load_state("networkidle", timeout=10000)
    except Exception:
        pass
    time.sleep(2)

    if is_logged_in(page):
        print("Ingelogd via sessie\n")
        return

    page.goto("https://www.instagram.com/accounts/login/", timeout=30000)
    try:
        page.wait_for_load_state("networkidle", timeout=10000)
    except Exception:
        pass
    time.sleep(2)
    dismiss_cookies(page)
    time.sleep(1)

    for sel in ['input[name="username"]', 'input[autocomplete="username"]', 'input[type="text"]']:
        try:
            page.wait_for_selector(sel, timeout=6000)
            page.fill(sel, USERNAME)
            break
        except Exception:
            pass
    time.sleep(0.5)
    for sel in ['input[name="password"]', 'input[type="password"]']:
        try:
            page.wait_for_selector(sel, timeout=4000)
            page.fill(sel, PASSWORD)
            break
        except Exception:
            pass
    time.sleep(0.5)
    for sel in ['button[type="submit"]', "button:has-text('Aanmelden')", "button:has-text('Log in')"]:
        try:
            page.click(sel, timeout=3000)
            break
        except Exception:
            pass

    try:
        page.wait_for_load_state("networkidle", timeout=20000)
    except Exception:
        pass
    time.sleep(4)

    print(f"  URL na login: {page.url}")
    if any(x in page.url for x in ("challenge", "two_factor", "checkpoint", "verify", "accounts/login")):
        if UNATTENDED:
            raise LoginRequiresVerification(
                "Instagram vraagt om verificatie - kan niet onbemand doorgaan"
            )
        print("\nVerificatie vereist. Los op in de browser en druk ENTER.")
        input("ENTER om door te gaan...")
        time.sleep(3)

    for label in ["Niet nu", "Not Now", "Nu niet"]:
        try:
            page.click(f"text={label}", timeout=3000)
            break
        except Exception:
            pass

    try:
        saved = context.cookies()
        has_session = any(c.get("name") == "sessionid" for c in saved)
        with open(SESSION_FILE, "w", encoding="utf-8", newline="") as f:
            json.dump(saved, f)
        if has_session:
            print("Ingelogd - sessie opgeslagen\n")
        else:
            print("WAARSCHUWING: sessionid ontbreekt in cookies — login mogelijk niet compleet\n")
    except Exception as e:
        print(f"Kon sessie niet opslaan: {e}\n")


# ── helpers ──────────────────────────────────────────────────────────────────

def parse_count(text):
    """Parseert een volgers/views-getal, incl. duizendtal-notatie.

    Instagram toont hele getallen als "1.594" (NL, punt als duizendtal-
    scheiding) of "1,594" (EN/US, komma als duizendtal-scheiding) - beide
    zonder decimalen. K/M-afkortingen ("4.9K") gebruiken altijd een punt als
    decimaalteken. De oude implementatie verving elke "," blind door "." en
    parste het resultaat als decimaal getal, waardoor "1.594" en "10.900"
    werden afgekapt tot 1 en 10 (99,9% dataverlies) - precies het soort getal
    dat de meeste DOM-fallback-profielen opleverden.
    """
    if not text:
        return 0
    text = str(text).strip().replace("\xa0", "").replace(" ", "")
    m = re.search(r"([\d.,]+)\s*([KkMm]?)", text)
    if not m:
        return 0
    num_str, suf = m.group(1), m.group(2).upper()

    if re.fullmatch(r"\d{1,3}([.,]\d{3})+", num_str):
        # Duizendtal-gegroepeerd heel getal (elke groep exact 3 cijfers) -
        # scheidingstekens zijn geen decimaalteken, gewoon weghalen.
        num_str = re.sub(r"[.,]", "", num_str)
    else:
        num_str = num_str.replace(",", ".")

    try:
        num = float(num_str)
    except Exception:
        return 0
    if suf == "K":
        num *= 1_000
    elif suf == "M":
        num *= 1_000_000
    return int(num)


def load_known_handles():
    """Leest bestaande handles uit de Influencer Database (dedupe: al gevonden/benaderd)."""
    handles = set()
    try:
        with open(DATABASE_FILE, encoding="utf-8") as f:
            text = f.read()
        for m in re.finditer(r"\[@([\w.]+)\]\(https://www\.instagram\.com/", text):
            handles.add(m.group(1).lower())
        print(f"{len(handles)} bekende accounts geladen uit Influencer Database (dedupe)\n")
    except Exception as e:
        print(f"Kon Influencer Database niet lezen voor dedupe ({e}) - ga verder zonder\n")
    return handles


# ── profiel-check: JSON-endpoint (robuust) met DOM-fallback ─────────────────

def fetch_profile_json(page, username):
    """Haalt profieldata op via JS fetch() vanuit de Instagram-paginacontext.

    Navigeert eerst naar het profiel zodat de browser volledig in de instagram.com
    context zit, dan doet een async fetch() naar de API via page.evaluate(). De browser
    stuurt dan automatisch alle sessie-cookies en Instagram-specifieke headers mee.
    """
    try:
        page.goto(
            f"https://www.instagram.com/{username}/",
            wait_until="domcontentloaded",
            timeout=15000,
        )
        time.sleep(1)

        data = page.evaluate(
            """
            async (args) => {
                const resp = await fetch(
                    '/api/v1/users/web_profile_info/?username=' + args.username,
                    {
                        credentials: 'include',
                        headers: {'x-ig-app-id': args.appId}
                    }
                );
                if (!resp.ok) return null;
                return await resp.json();
            }
            """,
            {"username": username, "appId": IG_APP_ID},
        )

        if not data:
            return None
        return (data.get("data") or {}).get("user")
    except Exception:
        return None


def fetch_profile_dom_fallback(page, username):
    """
    Oudere DOM-scraping methode, alleen als fallback wanneer het JSON-endpoint
    faalt. Geeft geen ER%/activiteit terug (die info zit niet los in de DOM),
    wel volgers/bio/gem. views zodat een profiel niet zomaar overgeslagen wordt.
    """
    try:
        page.goto(f"https://www.instagram.com/{username}/", wait_until="domcontentloaded", timeout=15000)
        time.sleep(2)
        try:
            body_text = page.inner_text("body")
        except Exception:
            body_text = ""

        if "Dit account is privé" in body_text or "This Account is Private" in body_text:
            return {"is_private": True}

        followers = 0
        m_fol = re.search(r"([\d.,\xa0]+\s*[KkMm]?)\s*(volgers?|followers?)", body_text, re.I)
        if m_fol:
            followers = parse_count(m_fol.group(1))

        # De oude "section main header section span"-selector bleek bij een volle
        # run vrijwel altijd leeg (0 bio's op 166 review-items) - waardoor de NL-
        # en sport-content-check verderop niets hadden om op te filteren en
        # duidelijke rotzooi (nagelstudio's, wildlife-fotografie, grote merk-
        # accounts) gewoon meeliep als "review". Geverifieerd (2026-08-25) dat
        # de bio wél gewoon in header.innerText zit, als platte tekstregel(s) na
        # de "X volgend/following"-regel, tot een bekende afsluiter ("meer",
        # "Volgen(d)", "Gevolgd door...", "Chatbericht sturen"). og:description
        # bleek voor ingelogde NL-sessies GEEN bio te bevatten (alleen "X
        # volgers, Y volgend, Z berichten - ..."), dus niet bruikbaar hiervoor.
        bio = ""
        try:
            header_text = page.evaluate(
                "() => { const h = document.querySelector('header'); return h ? h.innerText : ''; }"
            )
            lines = [l.strip() for l in (header_text or "").split("\n") if l.strip()]
            stop_re = re.compile(
                r"^(meer|more|volgen|volgend|volg|gevolgd door.*|chatbericht sturen|"
                r"message|follow|bekijk professioneel dashboard)$",
                re.I,
            )
            start = None
            for i, l in enumerate(lines):
                if re.search(r"\bvolgend\b|\bfollowing\b", l, re.I):
                    start = i + 1
                    break
            if start is not None:
                bio_lines = []
                for l in lines[start:start + 3]:
                    if stop_re.match(l) or l.lower() == username.lower():
                        break
                    bio_lines.append(l)
                bio = " ".join(bio_lines).strip()[:150]
        except Exception:
            pass

        avg_views = 0
        try:
            page.goto(f"https://www.instagram.com/{username}/reels/", wait_until="domcontentloaded", timeout=12000)
            time.sleep(2)
            raw = page.evaluate("""
                () => {
                    const links = document.querySelectorAll('a[href*="/reel/"]');
                    const out = [];
                    for (const lnk of links) {
                        const spans = lnk.querySelectorAll('span');
                        for (const s of spans) {
                            const t = s.textContent.trim();
                            if (/^\\d+(\\.\\d+)?\\s*[KkMm]?$/.test(t) && !s.children.length) {
                                out.push(t);
                                break;
                            }
                        }
                        if (out.length >= 6) break;
                    }
                    return out;
                }
            """)
            counts = [parse_count(v) for v in (raw or []) if parse_count(v) > 100]
            if counts:
                avg_views = int(sum(counts) / len(counts))
        except Exception:
            pass

        return {
            "is_private": False,
            "edge_followed_by": {"count": followers},
            "biography": bio,
            "_dom_fallback": True,
            "_avg_views": avg_views,
        }
    except Exception:
        return None


def evaluate_profile(page, username):
    """
    Beoordeelt een profiel tegen alle criteria uit Evaluatiecriteria.md.
    Retourneert een dict met status "candidate" / "review" / "reject",
    of None als het profiel helemaal niet geladen kon worden.
    """
    if username in EXCLUDED_ACCOUNTS:
        return {"status": "reject", "reason": "uitgesloten account", "handle": f"@{username}"}

    if EXCLUDED_USERNAME_PATTERNS.search(username):
        return {"status": "reject", "reason": f"username-patroon wijst op media/club/giveaway-account", "handle": f"@{username}"}

    user = fetch_profile_json(page, username)
    used_fallback = False
    if user is None:
        user = fetch_profile_dom_fallback(page, username)
        used_fallback = True
    if user is None:
        return None

    if user.get("is_private"):
        return {"status": "reject", "reason": "privé account", "handle": f"@{username}"}

    followers = int((user.get("edge_followed_by") or {}).get("count") or 0)
    bio = (user.get("biography") or "").strip()

    captions = []
    if used_fallback:
        avg_views = user.get("_avg_views", 0)
        er_pct = None
        recent_count = None
    else:
        posts = (user.get("edge_owner_to_timeline_media") or {}).get("edges") or []
        now = datetime.now(timezone.utc).timestamp()

        views, engagements, recent_count = [], [], 0
        for edge in posts:
            node = edge.get("node", {})
            taken_at = node.get("taken_at_timestamp") or 0
            age_days = (now - taken_at) / 86400 if taken_at else 9999
            if age_days <= MAX_INACTIVE_DAYS:
                recent_count += 1

            likes = int((node.get("edge_liked_by") or {}).get("count") or 0)
            comments = int((node.get("edge_media_to_comment") or {}).get("count") or 0)
            engagements.append(likes + comments)

            if node.get("is_video"):
                # Instagram stuurt video views soms als video_view_count, soms als play_count
                vc = (node.get("video_view_count") or node.get("play_count") or
                      (node.get("clips_metadata") or {}).get("play_count") or 0)
                if vc:
                    views.append(int(vc))

            cap_edges = (node.get("edge_media_to_caption") or {}).get("edges") or []
            if cap_edges:
                cap_text = (cap_edges[0].get("node") or {}).get("text", "")
                if cap_text:
                    captions.append(cap_text[:300])

        avg_views = int(sum(views) / len(views)) if views else 0

        # Als JSON geen views geeft (veld hernoemd of leeg), DOM-reels-pagina gebruiken
        if avg_views == 0:
            try:
                page.goto(f"https://www.instagram.com/{username}/reels/", wait_until="domcontentloaded", timeout=12000)
                time.sleep(2)
                raw = page.evaluate("""
                    () => {
                        const links = document.querySelectorAll('a[href*="/reel/"]');
                        const out = [];
                        for (const lnk of links) {
                            const spans = lnk.querySelectorAll('span');
                            for (const s of spans) {
                                const t = s.textContent.trim();
                                if (/^\\d+(\\.\\d+)?\\s*[KkMm]?$/.test(t) && !s.children.length) {
                                    out.push(t);
                                    break;
                                }
                            }
                            if (out.length >= 6) break;
                        }
                        return out;
                    }
                """)
                dom_counts = [parse_count(v) for v in (raw or []) if parse_count(v) > 100]
                if dom_counts:
                    avg_views = int(sum(dom_counts) / len(dom_counts))
            except Exception:
                pass
        avg_engagement = (sum(engagements) / len(engagements)) if engagements else 0
        er_pct = round((avg_engagement / followers) * 100, 2) if followers else 0.0

    is_dutch = bool(DUTCH_HINTS.search(bio))

    result = {
        "status": "candidate",
        "handle": f"@{username}",
        "url": f"https://www.instagram.com/{username}/",
        # full_name en category werden nooit opgeslagen, terwijl ze wél in de
        # respons zitten. Bij de handmatige beoordeling van 09-09 bleken 46 van
        # de 47 "niet nederlands"-oordelen op de NAAM te berusten, en het
        # categorieveld ("Sportclub", "Media-/nieuwsbedrijf") wijst organisaties
        # direct aan. Zie ig_beoordeling.py, dat op deze velden werkt.
        "full_name": (user.get("full_name") or "").strip(),
        "category": (user.get("category") or user.get("category_name") or "").strip(),
        "followers": followers,
        "avg_views": avg_views,
        "er_pct": er_pct,
        "recent_posts": recent_count,
        "bio": bio[:150],
        "captions": captions[:MAX_CAPTIONS_STORED],
        "is_dutch_bio": is_dutch,
        "fallback": used_fallback,
    }

    if followers > MAX_FOLLOWERS or (followers > 0 and followers < MIN_FOLLOWERS):
        result["status"] = "reject"
        result["reason"] = f"volgers buiten bereik ({followers:,})"
        return result

    # Onbekende follower-count + hoge views = waarschijnlijk mega-account
    if followers == 0 and avg_views > 20_000:
        result["status"] = "reject"
        result["reason"] = f"volgers onbekend maar views te hoog ({avg_views:,}) — waarschijnlijk te groot"
        return result

    # avg_views == 0 is dubbelzinnig: kan een echt foto-only account zijn (zoals
    # bestaande partner @jaidenpadel, 0 reels) of een meetfout (JSON/DOM-fallback
    # vond geen bruikbare cijfers). Dat is geen hard "te weinig", dus -> review i.p.v.
    # reject. Een gemeten, niet-nul aantal ONDER de grens blijft wel een echte reject.
    views_reason = None
    if avg_views < MIN_AVG_VIEWS:
        if avg_views == 0:
            views_reason = "geen meetbare views (mogelijk foto-only account of meetfout) - handmatig beoordelen"
        else:
            result["status"] = "reject"
            result["reason"] = f"te weinig views ({avg_views:,})"
            return result

    if avg_views > MAX_AVG_VIEWS:
        result["status"] = "reject"
        result["reason"] = f"te veel views — geen micro-creator ({avg_views:,})"
        return result

    if er_pct is not None and er_pct < MIN_ER_PCT:
        result["status"] = "reject"
        result["reason"] = f"ER te laag ({er_pct}%)"
        return result

    if recent_count is not None and recent_count < MIN_RECENT_POSTS:
        result["status"] = "reject"
        result["reason"] = f"te weinig recente activiteit ({recent_count} posts / {MAX_INACTIVE_DAYS}d)"
        return result

    # Sport-content check: bio + captions moeten sport-keywords bevatten.
    # Alleen toepassen als er tekst beschikbaar is (bij fallback kan dit leeg zijn).
    all_text = " ".join([bio] + captions).strip()
    if all_text and not SPORT_HINTS.search(all_text):
        result["status"] = "reject"
        result["reason"] = "geen sport-content in bio/captions"
        return result

    reasons = [views_reason] if views_reason else []
    if not is_dutch:
        reasons.append("geen NL-signaal in bio - handmatig checken")

    if reasons:
        result["status"] = "review"
        result["reason"] = " + ".join(reasons)

    return result


# ── bron 1: hashtags ──────────────────────────────────────────────────────────

def get_post_usernames(page, hashtag):
    """Open hashtagpagina, klik posts open, pak username uit overlay."""
    url = f"https://www.instagram.com/explore/tags/{hashtag}/"
    print(f"  #{hashtag}")
    try:
        page.goto(url, wait_until="domcontentloaded", timeout=20000)
    except Exception:
        try:
            page.goto(url, timeout=20000)
        except Exception:
            return []
    time.sleep(3)
    dismiss_cookies(page)
    time.sleep(1)

    usernames = []
    seen = set()

    for _ in range(2):
        try:
            page.evaluate("window.scrollBy(0, 800)")
        except Exception:
            pass
        time.sleep(1.5)

    # Instagram toont nu voornamelijk Reels op hashtag-pagina's (/reel/), niet meer /p/
    post_links = page.query_selector_all("a[href*='/p/'], a[href*='/reel/']")
    print(f"    {len(post_links)} post/reel-links gevonden")

    for link in post_links[:POSTS_PER_TAG]:
        try:
            href = link.get_attribute("href") or ""
            if "/p/" not in href and "/reel/" not in href:
                continue
            link.click()
            time.sleep(2.5)

            uname = None
            for sel in [
                "article header a[href]:not([href*='/p/']):not([href*='/reel/'])",
                "div[role='dialog'] header a[href]:not([href*='/p/']):not([href*='/reel/'])",
                "div[role='dialog'] a[role='link'][href^='/']:not([href*='/p/']):not([href*='/reel/'])",
                "header section a[href^='/']:not([href*='/p/']):not([href*='/reel/'])",
            ]:
                try:
                    el = page.query_selector(sel)
                    if el:
                        h = (el.get_attribute("href") or "").strip("/").split("/")[0]
                        if h and len(h) > 1 and "." not in h and h not in seen:
                            uname = h
                            break
                except Exception:
                    pass

            if not uname:
                try:
                    cur_url = page.url
                    m = re.search(r"instagram\.com/([^/]+)/(p|reel)/", cur_url)
                    if m:
                        uname = m.group(1)
                except Exception:
                    pass

            if uname and uname not in seen:
                seen.add(uname)
                usernames.append(uname)
                print(f"    -> @{uname}")

            page.keyboard.press("Escape")
            time.sleep(1)
        except Exception:
            try:
                page.keyboard.press("Escape")
            except Exception:
                pass
            time.sleep(0.5)

    return usernames


# ── bron 2: following-lijst van seed-accounts ────────────────────────────────

def get_following_list(page, username, max_scroll=40):
    """Open de following-lijst van een account, scroll erdoor, pak usernames."""
    print(f"\n  Following van @{username} scannen...")
    try:
        page.goto(f"https://www.instagram.com/{username}/following/", wait_until="domcontentloaded", timeout=15000)
        time.sleep(3)

        page.goto(f"https://www.instagram.com/{username}/", wait_until="domcontentloaded", timeout=12000)
        time.sleep(3)

        clicked = False
        for sel in ['a:has-text("volgend")', 'a:has-text("following")']:
            try:
                page.click(sel, timeout=4000)
                clicked = True
                break
            except Exception:
                pass

        if not clicked:
            print("    Kon following-knop niet klikken")
            return []

        time.sleep(2.5)

        try:
            page.wait_for_selector('div[role="dialog"]', timeout=5000)
        except Exception:
            print("    Dialog niet verschenen na klik")
            return []

        following = []
        seen = {username}
        stale_rounds = 0

        for i in range(max_scroll):
            raw = page.evaluate("""
                () => {
                    const container = document.querySelector('div[role="dialog"]')
                        || document.querySelector('main') || document.body;
                    const links = container.querySelectorAll('a[href^="/"]');
                    const out = [];
                    for (const l of links) {
                        let h = (l.getAttribute('href') || '');
                        h = h.replace(/^[/]+|[/]+$/g, '');
                        if (h && !h.includes('/') && !h.includes('?') && !h.includes('.')
                            && h.length >= 2 && h.length <= 30) {
                            out.push(h);
                        }
                    }
                    return out;
                }
            """)

            new_count = 0
            for h in (raw or []):
                if h not in seen:
                    seen.add(h)
                    following.append(h)
                    new_count += 1

            # Pas na 3 opeenvolgende scrolls zonder nieuwe namen echt stoppen -
            # een paar trage/nog-ladende batches mogen niet de hele scan afkappen.
            stale_rounds = stale_rounds + 1 if new_count == 0 else 0
            if stale_rounds >= 3 and i > 4:
                break

            try:
                # Zoek het echte scrollbare element in de dialog i.p.v. te gokken op een
                # inline style="overflow..." selector - die matcht Instagram's huidige DOM
                # niet meer, waardoor scrollTop nooit het juiste element raakte en de lijst
                # na de eerste, ongescrolde batch (~9-12 namen) al "klaar" leek.
                scrolled = page.evaluate("""
                    () => {
                        const d = document.querySelector('div[role="dialog"]');
                        if (!d) return false;
                        let target = null;
                        for (const el of d.querySelectorAll('*')) {
                            if (el.scrollHeight > el.clientHeight + 40 && el.clientHeight > 100) {
                                target = el;
                                break;
                            }
                        }
                        if (!target) target = d;
                        target.scrollTop = target.scrollTop + 700;
                        return true;
                    }
                """)
                if not scrolled:
                    print("    Kon scrollcontainer niet vinden")
            except Exception:
                pass
            time.sleep(2.2)

        try:
            page.keyboard.press("Escape")
        except Exception:
            pass

        print(f"    {len(following)} accounts gevonden in following-lijst")
        return following

    except Exception as e:
        print(f"    Fout: {e}")
        return []


# ── bron 3: commenters op referentie-accounts ────────────────────────────────

SKIP_PATHS = {
    "explore", "accounts", "about", "privacy", "terms", "p", "reel", "tv",
    "stories", "live", "locations", "directory", "hashtag", "challenge",
    "audio", "reels", "direct", "inbox", "ar", "music", "nametag", "login",
    "signup", "legal", "help", "press", "api", "blog", "jobs", "shop",
}


def get_reel_urls(page, username, limit):
    print(f"    @{username} - reels ophalen...")
    try:
        page.goto(f"https://www.instagram.com/{username}/reels/", wait_until="domcontentloaded", timeout=15000)
        time.sleep(2)
        links = page.query_selector_all("a[href*='/reel/']")
        hrefs = []
        for lnk in links[:limit]:
            h = lnk.get_attribute("href") or ""
            if "/reel/" in h and h not in hrefs:
                hrefs.append(h)
        print(f"      {len(hrefs)} reels gevonden")
        return hrefs
    except Exception:
        return []


def get_commenters_from_reel(page, reel_href):
    url = f"https://www.instagram.com{reel_href}" if reel_href.startswith("/") else reel_href
    try:
        page.goto(url, wait_until="domcontentloaded", timeout=15000)
        time.sleep(2)

        for label in ["Bekijk alle", "View all", "alle opmerkingen"]:
            try:
                btn = page.locator(f"text={label}").first
                if btn.is_visible(timeout=2000):
                    btn.click()
                    time.sleep(1.5)
                    break
            except Exception:
                pass

        for _ in range(5):
            try:
                page.evaluate("""
                    () => {
                        const scrollable = [...document.querySelectorAll('div')]
                            .find(d => d.scrollHeight > d.clientHeight + 50
                                   && d.clientHeight > 200
                                   && d.clientHeight < 900);
                        if (scrollable) scrollable.scrollTop += 700;
                        window.scrollBy(0, 500);
                    }
                """)
            except Exception:
                pass
            time.sleep(1.2)

        commenters = page.evaluate(
            """
            (skipSet) => {
                const links = document.querySelectorAll('a[href^="/"]');
                const users = new Set();
                for (const lnk of links) {
                    const href = (lnk.getAttribute('href') || '').replace(/\\/$/, '');
                    const parts = href.split('/').filter(p => p);
                    if (parts.length === 1) {
                        const u = parts[0];
                        if (/^[a-zA-Z0-9._]{2,30}$/.test(u) && !skipSet.includes(u)) {
                            users.add(u);
                        }
                    }
                }
                return Array.from(users);
            }
            """,
            list(SKIP_PATHS),
        )
        return commenters or []
    except Exception:
        return []


# ── main ──────────────────────────────────────────────────────────────────────

def new_context(p):
    browser = p.chromium.launch(
        headless=False,
        args=["--disable-blink-features=AutomationControlled", "--no-sandbox"],
        ignore_default_args=["--enable-automation"],
    )
    # Geen user_agent-override meer (2026-09-09). Die stond op Chrome/124 terwijl
    # de browser via Sec-CH-UA client hints Chromium 148 meldt - Playwright werkt
    # de client hints namelijk niet bij als je alleen de UA-string overschrijft.
    # Zo'n mismatch is een bekend detectiesignaal. In een A/B-test gaven beide
    # varianten hetzelfde resultaat (429), dus het leverde niets op en kostte
    # alleen risico.
    context = browser.new_context(viewport={"width": 1280, "height": 900})
    if os.path.exists(SESSION_FILE):
        try:
            with open(SESSION_FILE, encoding="utf-8-sig") as f:
                context.add_cookies(json.load(f))
            print("Sessie geladen")
        except Exception as e:
            print(f"Kon sessie niet laden: {e}")
    page = context.new_page()
    Stealth().apply_stealth_sync(page)
    return browser, context, page


def main():
    known_handles = load_known_handles()
    seen = set(known_handles)
    results = {"candidate": [], "review": []}

    # Per profiel direct wegschrijven, inclusief afwijzingen mét reden.
    # De run van 08-09 draaide 24 uur en hield alles in geheugen tot het eind;
    # bij afbreken was alles weg (die is uiteindelijk met een debugger uit het
    # levende proces gered). Bovendien waren de ~1.266 afwijzingen alleen naar
    # de console geprint, zodat achteraf niet te controleren was of de filters
    # goede kandidaten weggooiden.
    stamp = datetime.now().strftime("%Y-%m-%d_%H%M")
    jsonl_path = os.path.join(_HOME, "Downloads", f"HiGrip_profielen_{stamp}.jsonl")
    jsonl = open(jsonl_path, "w", encoding="utf-8")
    print(f"Live-uitvoer per profiel -> {jsonl_path}\n")

    # Als het JSON-endpoint structureel faalt, valt het script terug op de
    # DOM-route. Die is 3x trager én levert geen ER/activiteit/captions op,
    # waardoor de helft van de criteria stilzwijgend niet meer wordt toegepast.
    # Op 08-09 gebeurde dat voor 242 van 242 profielen, 24 uur lang.
    fallback_teller = {"n": 0, "totaal": 0}

    with sync_playwright() as p:
        browser, context, page = new_context(p)
        try:
            page.goto("https://www.instagram.com/", wait_until="domcontentloaded", timeout=25000)
            time.sleep(3)
        except Exception:
            pass
        try:
            login(context, page)
        except LoginRequiresVerification as e:
            print(f"\nGestopt: {e}")
            browser.close()
            return
        print("Browser open\n")

        candidates_by_source = {}

        # Bron 1: following-lijst van seed-accounts
        for seed in SEED_ACCOUNTS:
            names = get_following_list(page, seed)
            candidates_by_source[f"Following_{seed}"] = names

        # Bron 1b: following-lijsten van NL creator-accounts
        for creator in CREATOR_FOLLOW_LISTS:
            names = get_following_list(page, creator)
            candidates_by_source[f"CreatorFollowing_{creator}"] = names[:CREATOR_FOLLOW_MAX]

        # Bron 2: hashtags per sport
        for sport, tags in HASHTAGS.items():
            print(f"\n{'='*40}\nSPORT (hashtag): {sport}\n{'='*40}")
            sport_users = []
            for tag in tags:
                sport_users.extend(get_post_usernames(page, tag))
                time.sleep(2)
            candidates_by_source[sport] = sport_users

        # Bron 3: commenters op reels van accounts die lars_a.i.h volgt
        for seed_account in COMMENTER_SEED_ACCOUNTS:
            print(f"\n{'='*40}\nCOMMENTERS via following @{seed_account}\n{'='*40}")
            followed = get_following_list(page, seed_account)
            seed_commenters = []
            for followed_account in followed[:COMMENTER_SEED_FOLLOW_MAX]:
                for href in get_reel_urls(page, followed_account, REELS_PER_COMMENTER_SEED):
                    commenters = get_commenters_from_reel(page, href)
                    seed_commenters.extend(u for u in commenters if u != followed_account)
                time.sleep(1.5)
            candidates_by_source[f"FollowingCommenters_{seed_account}"] = seed_commenters

        # Bron 4: commenters op referentie-accounts per sport
        for sport, refs in REFERENCE_ACCOUNTS.items():
            print(f"\n{'='*40}\nSPORT (commenters): {sport}\n{'='*40}")
            sport_commenters = []
            for ref in refs:
                for href in get_reel_urls(page, ref, REELS_PER_REF_ACCOUNT):
                    commenters = get_commenters_from_reel(page, href)
                    sport_commenters.extend(u for u in commenters if u not in refs)
                    time.sleep(1.5)
            candidates_by_source[f"{sport}_commenters"] = sport_commenters

        # Evalueer alle unieke kandidaten uit alle bronnen
        print(f"\n{'='*40}\nPROFIELEN EVALUEREN\n{'='*40}")
        try:
          for source, usernames in candidates_by_source.items():
              unique = []
              for u in usernames:
                  if u not in seen:
                      seen.add(u)
                      unique.append(u)
              if not unique:
                  continue
              print(f"\n  {len(unique)} unieke profielen checken voor {source}...")

              for idx, uname in enumerate(unique):
                  time.sleep(2.5)
                  if idx > 0 and idx % 8 == 0:
                      # Korte pauze + terug naar homepage om rate-limit te vermijden
                      print(f"    [pauze na {idx} profielen]")
                      try:
                          page.goto("https://www.instagram.com/", wait_until="domcontentloaded", timeout=15000)
                      except Exception:
                          pass
                      time.sleep(8)

                  result = evaluate_profile(page, uname)
                  if result is None:
                      print(f"    ! @{uname} - kon niet laden")
                      jsonl.write(json.dumps({"handle": f"@{uname}", "source": source,
                                              "status": "niet_geladen"},
                                             ensure_ascii=False) + "\n")
                      jsonl.flush()
                      continue

                  result["source"] = source

                  # Degradatie bewaken: bij >50% fallback op een redelijke steekproef
                  # klopt er iets niet en is doorgaan zinloos - dan meet je alleen
                  # nog volgers en lever je zwakke kandidaten zonder dat iemand het ziet.
                  fallback_teller["totaal"] += 1
                  if result.get("fallback"):
                      fallback_teller["n"] += 1
                  if fallback_teller["totaal"] >= 25:
                      aandeel = fallback_teller["n"] / fallback_teller["totaal"]
                      if aandeel > 0.5:
                          print(f"\n!! GESTOPT: {fallback_teller['n']} van "
                                f"{fallback_teller['totaal']} profielen viel terug op de "
                                f"DOM-route ({aandeel:.0%}).")
                          print("   Het JSON-endpoint is geblokkeerd. ER, activiteit en")
                          print("   captions worden dan niet gemeten, dus de helft van de")
                          print("   criteria wordt niet toegepast. Doorgaan levert alleen")
                          print("   schijnresultaat op. Probeer het later opnieuw.")
                          raise SystemExit_Degradatie()

                  # Alles wegschrijven, ook de afwijzingen - die zijn nodig om
                  # achteraf te kunnen controleren of de filters te streng waren.
                  jsonl.write(json.dumps(result, ensure_ascii=False) + "\n")
                  jsonl.flush()

                  if result["status"] == "reject":
                      print(f"    x  @{uname} - {result['reason']}")
                      continue

                  results[result["status"]].append(result)
                  fol_str = f"{result['followers']:,}" if result["followers"] else "?"
                  view_str = f"{result['avg_views']:,}" if result["avg_views"] else "?"
                  er_str = f"{result['er_pct']}%" if result["er_pct"] is not None else "onbekend"
                  mark = "OK" if result["status"] == "candidate" else "??"
                  print(f"    {mark} @{uname} - {fol_str} volgers | {view_str} gem. views | ER {er_str}")

        except SystemExit_Degradatie:
            print("   Wat al beoordeeld is staat in het JSONL-bestand en"
                  " komt hieronder ook in het tekstrapport.")
        browser.close()

    # ── output schrijven ──
    try:
        with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
            f.write("HIGRIP - Gevonden creators op Instagram\n")
            f.write(
                f"Filters: {MIN_FOLLOWERS:,}-{MAX_FOLLOWERS:,} volgers | "
                f">= {MIN_AVG_VIEWS:,} gem. views | >= {MIN_ER_PCT}% ER | "
                f">= {MIN_RECENT_POSTS} posts / {MAX_INACTIVE_DAYS}d\n"
            )
            f.write("=" * 60 + "\n")

            for status, label in [("candidate", "KANDIDATEN"), ("review", "HANDMATIG CHECKEN (taal onduidelijk)")]:
                items = results[status]
                f.write(f"\n\n-- {label} ({len(items)}) --\n")
                for r in items:
                    fol_str = f"{r['followers']:,}" if r["followers"] else "onbekend"
                    view_str = f"{r['avg_views']:,}" if r["avg_views"] else "onbekend"
                    er_str = f"{r['er_pct']}%" if r["er_pct"] is not None else "onbekend (fallback-methode gebruikt)"
                    f.write(f"\n  {r['handle']:30s} bron: {r['source']}\n")
                    f.write(f"  {r['url']}\n")
                    f.write(f"  {fol_str} volgers | {view_str} gem. views | ER {er_str} | recente posts: {r['recent_posts']}\n")
                    if r["bio"]:
                        f.write(f"  Bio: {r['bio']}\n")
                    for cap in r.get("captions") or []:
                        f.write(f"  Caption: {cap}\n")
                    if r.get("reason"):
                        f.write(f"  Let op: {r['reason']}\n")

        print(f"\n\n{len(results['candidate'])} kandidaten, {len(results['review'])} om handmatig te checken -> {OUTPUT_FILE}")
    except Exception as e:
        print(f"\nKon output niet wegschrijven: {e}")
        print(json.dumps(results, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
```
