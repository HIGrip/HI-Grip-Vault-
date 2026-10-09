"""Vault-navigatie: houdt de hele vault binnen één linkstructuur.

Wat het doet (idempotent, veilig om vaak te draaien):
1. Elke notitie krijgt één navigatieregel die begint met '> **Brand Core (00):**'.
   Die linkt naar [[00 Brand Core]], de kernbestanden en de index van de eigen map.
   - In 05_Research staat de regel direct onder de H1 (de build rendert de body en
     de backlog-parser leest tot het einde van het bestand; onderaan zou hij in de
     laatste sectie belanden).
   - Overal elders staat hij onderaan.
2. Elke map-index (01–04 en 'Waar staat wat' voor 05) krijgt een automatisch
   bijgewerkte sectie met links naar alle notities in die map.
3. Elke kennisnotitie (00–04) waar een onderzoeksnotitie uit 05_Research naar linkt,
   krijgt onderaan een sectie 'Gerelateerd onderzoek (automatisch)' met de nieuwste
   niet-gearchiveerde notities. Links in de navigatieregel tellen niet mee.
4. Aan het eind: een rapport van notities zonder inkomende links (wezen).

Slaat over: bestanden met mergeconflicten, Home.md, 00 Brand Core.md (handmatig),
en .git/.obsidian/.trash/.claude/_dashboard.

Gebruik:  python "04_Agent_Infrastructuur/Beheer/vault_nav.py" [--dry-run]
"""
import os
import re
import subprocess
import sys
from pathlib import Path

VAULT = Path(__file__).resolve().parents[2]
SKIP_DIRS = {".git", ".obsidian", ".trash", ".vscode", ".claude", "_dashboard", "node_modules"}  # .claude = gegenereerde skills/agents (desktop-sync.py), geen notities
SKIP_FILES = {"Home.md", "conflict-files-obsidian-git.md", "00_Brand_Core/00 Brand Core.md"}
NAV_PREFIX = "> **Brand Core (00):**"
AUTO_HEADING = "## Alle notities in deze map (automatisch)"
RESEARCH_HEADING = "## Gerelateerd onderzoek (automatisch)"
RESEARCH_MAX = 8
RESEARCH_NOTE_RE = re.compile(r"^05_Research/\d{4}-\d{2}-\d{2}-[^/]+\.md$")

HUBS = {
    "01_Content_Agent": "01_Content_Agent/01 Content Agent — Index.md",
    "02_Partnership_Agent": "02_Partnership_Agent/02 Partnership Agent — Index.md",
    "03_Website_Agent": "03_Website_Agent/03 Website Agent — Index.md",
    "04_Agent_Infrastructuur": "04_Agent_Infrastructuur/04 Agent Infrastructuur — Index.md",
    "05_Research": "05_Research/Waar staat wat.md",
    "06_Denzel": "06_Denzel/06 Denzel — Index.md",
}
HUB_INTRO = {
    "01_Content_Agent": "Kennisbank voor social content: copy, strategie en planning, visuele productie.",
    "02_Partnership_Agent": "Kennisbank voor B2B-klanten (Lijn A), samenwerkingen en events (Lijn B) en influencers.",
    "03_Website_Agent": "Kennisbank voor higrip.nl: doel en KPI's, copy, SEO, techniek, conversie, e-mail.",
    "04_Agent_Infrastructuur": "Het agent-systeem: Denzel, de hoofdagents en sub-agents (identiteit, soul, werkplek), de gedeelde regels en de routine-prompts.",
    "06_Denzel": "Kernmap van Denzel, de Orchestrator Agent: wat hij doet en hoe, zijn handboek en zijn vijf eigen sub-agents.",
}

CORE_LINKS = ("[[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · "
              "[[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · "
              "[[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]]")
LINK_RE = re.compile(r"\[\[([^\]\|#\^]+)(?:[#\^][^\]\|]*)?(?:\|[^\]]*)?\]\]")


def conflicted() -> set:
    try:
        out = subprocess.run(["git", "-c", "core.quotepath=off", "diff", "--name-only", "--diff-filter=U"],
                             cwd=VAULT, capture_output=True, text=True, encoding="utf-8").stdout
        return {line.strip() for line in out.splitlines() if line.strip()}
    except OSError:
        return set()


def all_notes() -> list:
    notes = []
    for dp, dns, fns in os.walk(VAULT):
        dns[:] = sorted(d for d in dns if d not in SKIP_DIRS)
        for f in sorted(fns):
            if f.endswith(".md"):
                notes.append((Path(dp) / f).relative_to(VAULT).as_posix())
    return notes


def read(rel):
    raw = (VAULT / rel).read_bytes()
    bom = raw.startswith(b"\xef\xbb\xbf")
    text = raw.decode("utf-8-sig")
    crlf = "\r\n" in text
    return text.replace("\r\n", "\n"), bom, crlf


def write(rel, text, bom, crlf, dry):
    if crlf:
        text = text.replace("\n", "\r\n")
    data = text.encode("utf-8")
    if bom:
        data = b"\xef\xbb\xbf" + data
    if (VAULT / rel).exists() and (VAULT / rel).read_bytes() == data:
        return False
    if not dry:
        (VAULT / rel).write_bytes(data)
    return True


def link_for(rel, basenames) -> str:
    stem = rel.rsplit("/", 1)[-1][:-3]
    if basenames.get(stem.lower(), 0) == 1:
        return f"[[{stem}]]"
    parts = rel[:-3].split("/")
    label = "/".join(parts[-2:])
    return f"[[{rel[:-3]}|{label}]]"


def hub_stem(top):
    return HUBS[top].rsplit("/", 1)[-1][:-3]


def nav_line(rel) -> str:
    top = rel.split("/", 1)[0] if "/" in rel else ""
    if top == "00_Brand_Core":
        return f"{NAV_PREFIX} [[00 Brand Core]] · [[Home]]"
    if rel in HUBS.values() or top not in HUBS:
        return f"{NAV_PREFIX} {CORE_LINKS} — **Map:** [[Home]]"
    return f"{NAV_PREFIX} {CORE_LINKS} — **Map:** [[{hub_stem(top)}]] · [[Home]]"


def strip_nav(text: str) -> str:
    lines = text.split("\n")
    out, i = [], 0
    while i < len(lines):
        if lines[i].startswith(NAV_PREFIX):
            # ook de lege regel die we erna zetten weghalen
            if i + 1 < len(lines) and lines[i + 1].strip() == "" and out and out[-1].strip() == "":
                i += 1
            i += 1
            continue
        out.append(lines[i])
        i += 1
    return "\n".join(out)


def place_top(text: str, nav: str) -> str:
    lines = text.split("\n")
    start = 0
    if lines and lines[0].strip() == "---":
        for j in range(1, len(lines)):
            if lines[j].strip() == "---":
                start = j + 1
                break
    insert_at = start
    for j in range(start, min(start + 15, len(lines))):
        if lines[j].startswith("# "):
            insert_at = j + 1
            break
        if lines[j].startswith("## "):
            break
    block = ["", nav] if insert_at > 0 else [nav]
    if insert_at >= len(lines) or lines[insert_at].strip() != "":
        block.append("")
    return "\n".join(lines[:insert_at] + block + lines[insert_at:])


def place_bottom(text: str, nav: str) -> str:
    return text.rstrip() + "\n\n" + nav + "\n"


def hub_listing(top, notes, basenames) -> str:
    hub = HUBS[top]
    members = [n for n in notes if n.startswith(top + "/") and n != hub]
    groups = {}
    for n in members:
        sub = n[len(top) + 1:].rsplit("/", 1)[0] if n.count("/") > 1 else ""
        groups.setdefault(sub, []).append(n)
    out = [AUTO_HEADING, "",
           "Bijgewerkt door `04_Agent_Infrastructuur/Beheer/vault_nav.py`. Niet met de hand bewerken; draai het script opnieuw.", ""]
    for sub in sorted(groups):
        items = groups[sub]
        if top == "05_Research" and sub == "":
            items = sorted(items, reverse=True)
        out.append(f"### {sub or 'Hoofdmap'}")
        out.extend(f"- {link_for(n, basenames)}" for n in items)
        out.append("")
    return "\n".join(out).rstrip() + "\n"


def update_hub(top, notes, basenames, dry) -> bool:
    rel = HUBS[top]
    if (VAULT / rel).exists():
        text, bom, crlf = read(rel)
    else:
        title = hub_stem(top)
        text = (f"# {title}\n\n> {HUB_INTRO[top]} Alles in deze map bouwt voort op de Brand Core: [[00 Brand Core]].\n\n"
                f"Terug naar [[Home]].\n")
        bom, crlf = False, False
    idx = text.find(AUTO_HEADING)
    if idx != -1:
        text = text[:idx]
    text = strip_nav(text)
    text = place_top(text, nav_line(rel)) if top == "05_Research" else text
    text = text.rstrip() + "\n\n" + hub_listing(top, notes, basenames)
    if top != "05_Research":
        text = place_top(text, nav_line(rel))
    return write(rel, text, bom, crlf, dry)


def resolver(notes):
    basemap = {}
    for n in notes:
        basemap.setdefault(n.rsplit("/", 1)[-1][:-3].lower(), []).append(n)

    def resolve(target):
        t = target.strip().lower()
        if t.endswith(".md"):
            t = t[:-3]
        if "/" in t:
            return next((x for x in notes if x[:-3].lower().endswith(t)), None)
        hits = basemap.get(t, [])
        return hits[0] if len(hits) == 1 else None  # dubbelzinnige naam: niet raden
    return resolve


def frontmatter(text) -> dict:
    meta = {}
    lines = text.split("\n")
    if not lines or lines[0].strip() != "---":
        return meta
    for line in lines[1:]:
        if line.strip() == "---":
            break
        if ":" in line and not line.startswith(" "):
            key, val = line.split(":", 1)
            meta[key.strip()] = val.strip().strip('"')
    return meta


def research_index(notes) -> dict:
    """kennisnotitie -> [(datum, id, titel)] van onderzoeksnotities die ernaar linken."""
    resolve = resolver(notes)
    index = {}
    for n in notes:
        if not RESEARCH_NOTE_RE.match(n):
            continue
        text, _, _ = read(n)
        meta = frontmatter(text)
        if meta.get("status") == "gearchiveerd":
            continue
        body = "\n".join(l for l in text.split("\n") if not l.startswith(NAV_PREFIX))
        entry = (meta.get("datum", ""), n.rsplit("/", 1)[-1][:-3], meta.get("titel", ""))
        for m in LINK_RE.finditer(body):
            tgt = resolve(m.group(1))
            if tgt and not tgt.startswith("05_Research/") and tgt not in SKIP_FILES and tgt not in HUBS.values():
                index.setdefault(tgt, set()).add(entry)
    return {k: sorted(v, reverse=True) for k, v in index.items()}


def strip_research(text: str) -> str:
    # alleen een echte kop aan het begin van een regel, niet de tekst ergens in een zin
    found = re.search(r"^" + re.escape(RESEARCH_HEADING) + r"[ \t]*$", text, re.M)
    if not found:
        return text
    idx = found.start()
    rest = text[found.end():]
    nxt = re.search(r"^## ", rest, re.M)
    tail = rest[nxt.start():] if nxt else ""
    return text[:idx].rstrip() + ("\n\n" + tail if tail else "\n")


def research_section(entries) -> str:
    out = [RESEARCH_HEADING, "",
           "Onderzoek uit `05_Research/` dat naar deze notitie verwijst, nieuwste eerst. Bijgewerkt door `vault_nav.py`; niet met de hand bewerken.", ""]
    for datum, nid, titel in entries[:RESEARCH_MAX]:
        out.append(f"- [[{nid}]]" + (f" — {titel}" if titel else ""))
    if len(entries) > RESEARCH_MAX:
        out.append(f"- … en {len(entries) - RESEARCH_MAX} oudere (zie [[Waar staat wat]])")
    return "\n".join(out)


def orphans(notes) -> list:
    basemap = {}
    for n in notes:
        basemap.setdefault(n.rsplit("/", 1)[-1][:-3].lower(), n)
    incoming = {n: 0 for n in notes}
    for n in notes:
        text = (VAULT / n).read_text(encoding="utf-8", errors="ignore")
        for m in LINK_RE.finditer(text):
            t = m.group(1).strip()
            tgt = None
            if "/" in t:
                tgt = next((x for x in notes if x[:-3].lower().endswith(t.lower())), None)
            else:
                tgt = basemap.get(t.lower())
            if tgt and tgt != n:
                incoming[tgt] += 1
    return [n for n, c in incoming.items() if c == 0]


def main():
    dry = "--dry-run" in sys.argv
    skip = conflicted()
    notes = all_notes()
    # hubs die nog niet bestaan meenemen in de lijst
    for hub in HUBS.values():
        if hub not in notes:
            notes.append(hub)
    basenames = {}
    for n in notes:
        stem = n.rsplit("/", 1)[-1][:-3].lower()
        basenames[stem] = basenames.get(stem, 0) + 1

    related = research_index(notes)

    changed, skipped = [], []
    for top in HUBS:
        if HUBS[top] in skip:
            skipped.append(HUBS[top])
        elif update_hub(top, notes, basenames, dry):
            changed.append(HUBS[top])

    for rel in notes:
        if rel in SKIP_FILES or rel in HUBS.values():
            continue
        if rel in skip:
            skipped.append(rel)
            continue
        text, bom, crlf = read(rel)
        if re.search(r"^<<<<<<< ", text, re.M):
            skipped.append(rel)
            continue
        text = strip_nav(text)
        nav = nav_line(rel)
        if not rel.startswith("05_Research/"):
            text = strip_research(text)
            if rel in related:
                text = text.rstrip() + "\n\n" + research_section(related[rel]) + "\n"
        text = place_top(text, nav) if rel.startswith("05_Research/") else place_bottom(text, nav)
        if write(rel, text, bom, crlf, dry):
            changed.append(rel)

    print(f"{'(dry-run) ' if dry else ''}{len(changed)} bestanden bijgewerkt, {len(skipped)} overgeslagen (mergeconflict).")
    for s in skipped:
        print(f"  overgeslagen: {s}")
    if not dry:
        left = [o for o in orphans(all_notes()) if o not in SKIP_FILES and o != "Home.md"]
        print(f"Notities zonder inkomende link: {len(left)}")
        for o in left:
            print(f"  wees: {o}")


if __name__ == "__main__":
    main()
