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
> Kleine actieve commenters zijn vaak zelf ook creators. Zoek daarnaast ook tussen de volgers ze volgen elkaar ook vaak.

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

---

## Bijlage: volledige broncode (back-up)

> Bron van waarheid is [`scripts/ig_find_creators.py`](https://github.com/HIGrip/HI-Grip-claude-setup/blob/main/scripts/ig_find_creators.py) in `HI-Grip-claude-setup`. Deze bijlage is een back-up-kopie voor het geval GitHub niet bereikbaar is — bij een update van het script moet deze kopie mee-geüpdatet worden.

```python
"""
HiGrip — Instagram creator zoeker via echte browser.
Primair filter: gem. views per reel > 5K.
Secundair: volgers <= 5K.
Focus: persoonlijke video-creators (eigen gezicht, eigen content).
"""
import sys, time, json, os, re
sys.stdout.reconfigure(encoding="utf-8")

from playwright.sync_api import sync_playwright
from playwright_stealth import Stealth

SESSION_FILE = r"C:\Users\lars\.ig_session.json"
OUTPUT_FILE  = r"C:\Users\lars\Downloads\HiGrip_Creators_Voetbal.txt"

HASHTAGS = {
    "Voetbal_vlog":     ["voetbalvlog", "matchdayvlog", "voetbaljourney"],
    "Voetbal_panna":    ["pannavoetbal", "pannacup", "pannanederland"],
    "Zaalvoetbal":      ["zaalvoetbal", "futsalnl", "futsalnederland"],
    "Straatvoetbal":    ["straatvoetbal", "streetvoetbal", "voetbalstraat"],
}

POSTS_PER_TAG  = 25
MIN_AVG_VIEWS  = 3_000   # primair filter
MAX_FOLLOWERS  = 20_000  # max 20K


# ── helpers ──────────────────────────────────────────────────────────────────

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
        except:
            pass


def is_logged_in(page):
    try:
        page.wait_for_selector(
            'a[href="/direct/inbox/"], svg[aria-label="Direct"], nav a[href="/"]',
            timeout=5000,
        )
        return True
    except:
        return False


def login(context, page):
    from ig_search_higrip import USERNAME, PASSWORD

    page.goto("https://www.instagram.com/", timeout=30000)
    time.sleep(3)
    dismiss_cookies(page)
    try:
        page.wait_for_load_state("networkidle", timeout=10000)
    except:
        pass
    time.sleep(2)

    if is_logged_in(page):
        print("✅ Ingelogd via sessie\n")
        return

    page.goto("https://www.instagram.com/accounts/login/", timeout=30000)
    try:
        page.wait_for_load_state("networkidle", timeout=10000)
    except:
        pass
    time.sleep(2)
    dismiss_cookies(page)
    time.sleep(1)

    for sel in ['input[name="username"]', 'input[autocomplete="username"]', 'input[type="text"]']:
        try:
            page.wait_for_selector(sel, timeout=6000)
            page.fill(sel, USERNAME)
            break
        except:
            pass
    time.sleep(0.5)
    for sel in ['input[name="password"]', 'input[type="password"]']:
        try:
            page.wait_for_selector(sel, timeout=4000)
            page.fill(sel, PASSWORD)
            break
        except:
            pass
    time.sleep(0.5)
    for sel in ['button[type="submit"]', "button:has-text('Aanmelden')", "button:has-text('Log in')"]:
        try:
            page.click(sel, timeout=3000)
            break
        except:
            pass

    try:
        page.wait_for_load_state("networkidle", timeout=20000)
    except:
        pass
    time.sleep(4)

    if "challenge" in page.url or "two_factor" in page.url:
        print("\n⚠️  Verificatie vereist. Los op in de browser en druk ENTER.")
        input("ENTER om door te gaan...")
        time.sleep(3)

    for label in ["Niet nu", "Not Now", "Nu niet"]:
        try:
            page.click(f"text={label}", timeout=3000)
            break
        except:
            pass

    with open(SESSION_FILE, "w") as f:
        json.dump(context.cookies(), f)
    print(f"✅ Ingelogd — sessie opgeslagen\n")


def parse_count(text):
    if not text:
        return 0
    text = str(text).strip().replace(",", ".").replace("\xa0", "").replace(" ", "")
    # Verwijder punten als duizendtalscheiding (bijv. "1.234" → "1234")
    # maar bewaar "1.2K" etc.
    m = re.search(r"([\d]+(?:[.,][\d]+)?)\s*([KkMm]?)", text)
    if not m:
        return 0
    num_str = m.group(1).replace(",", ".")
    try:
        num = float(num_str)
    except:
        return 0
    suf = m.group(2).upper()
    if suf == "K":
        num *= 1_000
    elif suf == "M":
        num *= 1_000_000
    return int(num)


# ── profiel data ──────────────────────────────────────────────────────────────

def get_reel_views(page, username):
    """
    Open /reels/ tab van het profiel.
    Methode 1: pak view-counts uit de thumbnail-overlays via JS.
    Methode 2 (fallback): open individuele reels en lees views uit body-tekst.
    Geeft gemiddelde views van laatste ≤6 reels terug (0 = geen data).
    """
    try:
        page.goto(
            f"https://www.instagram.com/{username}/reels/",
            wait_until="domcontentloaded",
            timeout=12000,
        )
        time.sleep(2)

        # Methode 1 — view-counts zitten als tekst in de thumbnail-links
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
            avg = int(sum(counts) / len(counts))
            print(f"      views (grid): {counts} → gem. {avg:,}")
            return avg

        # Methode 2 — klik tot 4 individuele reels open
        reel_links = page.query_selector_all("a[href*='/reel/']")
        if not reel_links:
            return 0

        counts = []
        for link in reel_links[:4]:
            try:
                href = link.get_attribute("href") or ""
                if not href.startswith("/"):
                    href = "/" + href.lstrip("/")
                page.goto(
                    f"https://www.instagram.com{href}",
                    wait_until="domcontentloaded",
                    timeout=12000,
                )
                time.sleep(2)

                body = page.inner_text("body")
                # Instagram toont "X weergaven" of "X views" of "X keer bekeken"
                m_v = re.search(
                    r"([\d.,]+\s*[KkMm]?)\s*(weergaven?|views?|keer bekeken)",
                    body, re.I,
                )
                if m_v:
                    c = parse_count(m_v.group(1))
                    if c > 0:
                        counts.append(c)

                # Also try: big number right before a play/like section
                # Sometimes shown as plain number in a span
                js_view = page.evaluate("""
                    () => {
                        // Views often appear in a specific section near video controls
                        const all = document.querySelectorAll('span[class]');
                        for (const el of all) {
                            const t = el.textContent.trim();
                            if (/^\\d+(\\.\\d+)?[KkMm]?$/.test(t) && !el.children.length) {
                                return t;
                            }
                        }
                        return null;
                    }
                """)
                if js_view and not counts:
                    c = parse_count(js_view)
                    if c > 100:
                        counts.append(c)

                page.go_back()
                time.sleep(1)
            except:
                try:
                    page.go_back()
                except:
                    pass
                time.sleep(0.5)

        if counts:
            avg = int(sum(counts) / len(counts))
            print(f"      views (individueel): {counts} → gem. {avg:,}")
            return avg

    except Exception as e:
        pass

    return 0


def get_profile_data(page, username):
    """
    Laad het profiel, check privé, pak volgers en gem. reel-views.
    Returns: (followers, avg_views, bio, is_private)
    """
    try:
        page.goto(
            f"https://www.instagram.com/{username}/",
            wait_until="domcontentloaded",
            timeout=15000,
        )
        time.sleep(2)

        # Privé-check
        try:
            body_text = page.inner_text("body")
        except:
            body_text = ""

        if "Dit account is privé" in body_text or "This Account is Private" in body_text:
            return None, None, None, True

        # Volgers uit zichtbare body-tekst
        followers = 0
        m_fol = re.search(
            r"([\d.,\xa0]+\s*[KkMm]?)\s*(volgers?|followers?)",
            body_text, re.I,
        )
        if m_fol:
            followers = parse_count(m_fol.group(1))

        # Fallback: page title
        if followers == 0:
            try:
                title = page.title()
                m_t = re.search(r"([\d.,]+[KkMm]?)\s*(volgers?|followers?)", title, re.I)
                if m_t:
                    followers = parse_count(m_t.group(1))
            except:
                pass

        # Bio
        bio = ""
        try:
            bio_el = page.query_selector("section main header section span")
            if bio_el:
                bio = bio_el.inner_text().strip()[:120]
        except:
            pass

        # Reel views (dit is de kernmeting)
        avg_views = get_reel_views(page, username)

        return followers, avg_views, bio, False

    except Exception as e:
        return None, None, None, False


# ── hashtag scrapen ───────────────────────────────────────────────────────────

def get_post_usernames(page, hashtag):
    """Open hashtagpagina, klik posts open, pak username uit overlay."""
    url = f"https://www.instagram.com/explore/tags/{hashtag}/"
    print(f"  📷 #{hashtag}")
    try:
        page.goto(url, wait_until="domcontentloaded", timeout=20000)
    except:
        page.goto(url, timeout=20000)
    time.sleep(3)
    dismiss_cookies(page)
    time.sleep(1)

    usernames = []
    seen = set()

    for _ in range(2):
        page.evaluate("window.scrollBy(0, 800)")
        time.sleep(1.5)

    post_links = page.query_selector_all("a[href*='/p/']")
    print(f"    {len(post_links)} post-links gevonden")

    for link in post_links[:POSTS_PER_TAG]:
        try:
            href = link.get_attribute("href") or ""
            if "/p/" not in href:
                continue
            link.click()
            time.sleep(2.5)

            uname = None
            for sel in [
                "article header a[href]:not([href*='/p/'])",
                "div[role='dialog'] header a[href]:not([href*='/p/'])",
                "div[role='dialog'] a[role='link'][href^='/']:not([href*='/p/'])",
                "header section a[href^='/']:not([href*='/p/'])",
            ]:
                try:
                    el = page.query_selector(sel)
                    if el:
                        h = (el.get_attribute("href") or "").strip("/").split("/")[0]
                        if h and len(h) > 1 and "." not in h and h not in seen:
                            uname = h
                            break
                except:
                    pass

            if not uname:
                try:
                    cur_url = page.url
                    m = re.search(r"instagram\.com/([^/]+)/p/", cur_url)
                    if m:
                        uname = m.group(1)
                except:
                    pass

            if uname and uname not in seen:
                seen.add(uname)
                usernames.append(uname)
                print(f"    → @{uname}")

            page.keyboard.press("Escape")
            time.sleep(1)
        except Exception:
            try:
                page.keyboard.press("Escape")
            except:
                pass
            time.sleep(0.5)

    return usernames


# ── main ──────────────────────────────────────────────────────────────────────

def main():
    results = []
    seen_profiles = set()

    with sync_playwright() as p:
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
            with open(SESSION_FILE) as f:
                context.add_cookies(json.load(f))
            print(f"Sessie geladen")

        page = context.new_page()
        Stealth().apply_stealth_sync(page)
        page.goto("https://www.instagram.com/", wait_until="domcontentloaded", timeout=25000)
        time.sleep(3)
        print("✅ Browser open")

        for sport, tags in HASHTAGS.items():
            print(f"\n{'='*40}")
            print(f"SPORT: {sport}")
            print(f"{'='*40}")

            sport_users = []
            for tag in tags:
                unames = get_post_usernames(page, tag)
                sport_users.extend(unames)
                time.sleep(2)

            unique_users = []
            for u in sport_users:
                if u not in seen_profiles:
                    seen_profiles.add(u)
                    unique_users.append(u)

            print(f"\n  🔍 {len(unique_users)} unieke profielen checken voor {sport}...")

            for uname in unique_users:
                time.sleep(1.5)
                followers, avg_views, bio, is_private = get_profile_data(page, uname)

                if is_private:
                    print(f"    🔒 @{uname} — privé")
                    continue
                if followers is None:
                    print(f"    ⚠️  @{uname} — laden mislukt")
                    continue

                views_ok     = avg_views >= MIN_AVG_VIEWS
                followers_ok = followers == 0 or followers <= MAX_FOLLOWERS
                # (followers == 0 = kon niet uitlezen, niet direct afwijzen)

                if not views_ok:
                    views_str = f"{avg_views:,}" if avg_views else "?"
                    print(f"    ✗  @{uname} — {views_str} gem. views (te weinig)")
                    continue

                if followers > 0 and followers > MAX_FOLLOWERS:
                    print(f"    ✗  @{uname} — {followers:,} volgers (te veel)")
                    continue

                result = {
                    "sport":      sport,
                    "handle":     f"@{uname}",
                    "url":        f"https://www.instagram.com/{uname}/",
                    "followers":  followers,
                    "avg_views":  avg_views,
                    "bio":        bio or "",
                }
                results.append(result)
                fol_str  = f"{followers:,}" if followers else "?"
                view_str = f"{avg_views:,}" if avg_views else "?"
                print(f"    ✅ @{uname} — {fol_str} volgers | {view_str} gem. views | {bio[:50]}")

            time.sleep(3)

        browser.close()

    # ── output schrijven ──
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write("HIGRIP — Gevonden creators op Instagram\n")
        f.write("Primair filter: gem. reel-views > 5K | Secundair: volgers ≤ 5K\n")
        f.write("=" * 60 + "\n\n")
        for sport in HASHTAGS:
            sport_results = [r for r in results if r["sport"] == sport]
            f.write(f"\n── {sport.upper()} ({len(sport_results)} gevonden) ──\n")
            for r in sport_results:
                fol_str  = f"{r['followers']:,}" if r["followers"] else "onbekend"
                view_str = f"{r['avg_views']:,}" if r["avg_views"] else "onbekend"
                f.write(f"  {r['handle']:30s} {fol_str:>8} volgers | {view_str:>8} gem. views\n")
                f.write(f"  {r['url']}\n")
                if r["bio"]:
                    f.write(f"  Bio: {r['bio']}\n")
                f.write("\n")

    print(f"\n\n✅ {len(results)} creators gevonden → {OUTPUT_FILE}")
    for r in results:
        fol_str  = f"{r['followers']:,}" if r["followers"] else "?"
        view_str = f"{r['avg_views']:,}" if r["avg_views"] else "?"
        print(f"  {r['sport']:12} {r['handle']:28} {fol_str:>7} volgers | {view_str:>8} gem. views  {r['url']}")


if __name__ == "__main__":
    main()
```
