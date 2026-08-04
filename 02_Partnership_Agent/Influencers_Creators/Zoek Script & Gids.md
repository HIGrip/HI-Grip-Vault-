# Zoek Script & Gids — HÏ Grip Influencer Zoek Agent

> Bijgewerkt: 2026-08-02 (v4.3)
> Zie ook: [[Evaluatiecriteria]] · [[Influencer Database]] · [[Outreach Templates]] · [[Pipeline Tracker]]

---

## Wat doet het script?

Het Python-script [`scripts/ig_find_creators.py`](https://github.com/HIGrip/HI-Grip-claude-setup/blob/main/scripts/ig_find_creators.py) (in de `HI-Grip-claude-setup` git-repo) is de samengevoegde v4: hashtag-scan, following-lijst-scan, commenter-scan én NL-creator-following-scan zitten nu in één script.
**Vier bronnen per run:**

1. **Hashtags** — posts per sport-hashtag openen, auteur-username ophalen.
2. **Following-lijst van seed-accounts** — de following-lijst van een account scannen (bedoeld voor het eigen HÏ Grip-account, dat bewust influencers volgt als curated shortlist — zie [[project_ig_following]]). `SEED_ACCOUNTS` staat standaard leeg; vul het eigen handle in om deze bron te activeren.
3. **Commenters op referentie-accounts** — wie reageert op reels van bekende referentie-accounts per sport is vaak zelf ook creator.
4. **Following-lijsten van NL creator-accounts** — wie NL creators zoals @iamyasinflits volgen zijn vaak kleine creators in dezelfde niche die via hashtags moeilijk te vinden zijn. Ingesteld via `CREATOR_FOLLOW_LISTS`.

**Profielbeoordeling:** i.p.v. tekst uitlezen uit de zichtbare pagina (taal-afhankelijk, kwetsbaar voor UI-wijzigingen), haalt het script profieldata op via Instagram's eigen `web_profile_info` JSON-endpoint: exacte volgers, bio, en per recente post de like-/comment-count, post-datum en caption-tekst. Faalt dat endpoint (rate limit / blocked), dan valt het script terug op de oude DOM-scraping methode zodat een los profiel de hele run niet laat crashen — wel zonder ER%/activiteit-cijfers en zonder captions in dat geval.

**Sport-fit / concurrentie-check:** géén losse LLM-API-call in het script (dat kost apart geld, los van je Claude-abonnement). In plaats daarvan verzamelt het script bio + laatste captions per kandidaat in de output, zodat de sport/lifestyle-fit en concurrentie-check uit [[Evaluatiecriteria]] achteraf handmatig of door Claude Code beoordeeld worden — gratis onder het abonnement, gewoon even vragen na een run.

**Onbemand draaien:** met de vlag `--unattended` (bv. vanuit een geplande Windows-taak) stopt het script netjes zodra Instagram een 2FA/verificatiescherm toont, in plaats van voor altijd te wachten op een ENTER die nooit komt.

**Filters (uit [[Evaluatiecriteria]]):**

| Filter | Waarde |
|---|---|
| Volgers | 500 – 50.000 (nano/micro sweet spot 5k-30k als voorkeur; tot 50k toegestaan, 100k-plafond per 2026-08-02 verlaagd) |
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

> Bron van waarheid is [`scripts/ig_find_creators.py`](https://github.com/HIGrip/HI-Grip-claude-setup/blob/main/scripts/ig_find_creators.py) in `HI-Grip-claude-setup`. Deze bijlage is een back-up-kopie voor het geval GitHub niet bereikbaar is — bij een update van het script moet deze kopie mee-geüpdatet worden (zie [[feedback_ig_script_sync]]).

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
  - Volgers: 500 - 30.000
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

_HOME         = os.path.expanduser("~")
SESSION_FILE  = os.path.join(_HOME, ".ig_session.json")
OUTPUT_FILE   = os.path.join(_HOME, "Downloads", "HiGrip_Creators.txt")
DATABASE_FILE = os.path.join(_HOME, "Documents", "ObsidianVault", "02_Partnership_Agent",
                             "Influencers_Creators", "Influencer Database.md")

IG_APP_ID = "936619743392459"  # publieke web-app-id die instagram.com zelf gebruikt

# ── Bronnen ──────────────────────────────────────────────────────────────────

# Following-lijst van deze account(s) scannen (bv. het eigen HI Grip account —
# dat volgt bewust influencers op als curated shortlist). Leeg = overslaan.
SEED_ACCOUNTS = []

# Following-lijsten van NL creators scannen: wie zij volgen zijn vaak kleine creators
# in dezelfde niche die anders moeilijk te vinden zijn via hashtags of commenters.
CREATOR_FOLLOW_LISTS = []  # iamyasinflits volgt profvoetballers (Ziyech, Güler) — niet bruikbaar
CREATOR_FOLLOW_MAX   = 150   # max accounts te verwerken per creator-following lijst

# Scan commenters op reels van accounts die dit account volgt.
# lars_a.i.h volgt bewust voetbal-influencers als curated shortlist — commenters
# op hun content zijn veel gerichter dan willekeurige hashtag-posters.
COMMENTER_SEED_ACCOUNTS  = ["lars_a.i.h"]
COMMENTER_SEED_FOLLOW_MAX = 60   # max accounts uit de following-lijst te scannen
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
}

# Usernames die wijzen op media/nieuws/giveaway-accounts — geen persoonlijke creators.
EXCLUDED_USERNAME_PATTERNS = re.compile(
    r"(giveaway|nieuws|news|alert|update|club|fc[._]|vv[._]|official|culture_com|"
    r"magazine|media|tv[._]|highlight|scout|transfer|fanpage|community)",
    re.I,
)

# ── filters (Evaluatiecriteria.md) ───────────────────────────────────────────

MIN_FOLLOWERS     = 500
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
    if not text:
        return 0
    text = str(text).strip().replace(",", ".").replace("\xa0", "").replace(" ", "")
    m = re.search(r"([\d]+(?:[.,][\d]+)?)\s*([KkMm]?)", text)
    if not m:
        return 0
    num_str = m.group(1).replace(",", ".")
    try:
        num = float(num_str)
    except Exception:
        return 0
    suf = m.group(2).upper()
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

        bio = ""
        try:
            bio_el = page.query_selector("section main header section span")
            if bio_el:
                bio = bio_el.inner_text().strip()[:150]
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

    if avg_views < MIN_AVG_VIEWS:
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

    if not is_dutch:
        result["status"] = "review"
        result["reason"] = "geen NL-signaal in bio - handmatig checken"

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

def get_following_list(page, username, max_scroll=15):
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

            if new_count == 0 and i > 2:
                break

            try:
                page.evaluate("""
                    () => {
                        const d = document.querySelector('div[role="dialog"]');
                        if (!d) return;
                        const s = d.querySelector('div[style*="overflow"]') || d;
                        s.scrollTop += 600;
                    }
                """)
            except Exception:
                pass
            time.sleep(1.5)

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
    context = browser.new_context(
        viewport={"width": 1280, "height": 900},
        user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    )
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
                    continue

                result["source"] = source

                if result["status"] == "reject":
                    print(f"    x  @{uname} - {result['reason']}")
                    continue

                results[result["status"]].append(result)
                fol_str = f"{result['followers']:,}" if result["followers"] else "?"
                view_str = f"{result['avg_views']:,}" if result["avg_views"] else "?"
                er_str = f"{result['er_pct']}%" if result["er_pct"] is not None else "onbekend"
                mark = "OK" if result["status"] == "candidate" else "??"
                print(f"    {mark} @{uname} - {fol_str} volgers | {view_str} gem. views | ER {er_str}")

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
