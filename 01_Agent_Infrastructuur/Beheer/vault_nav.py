"""Vault-navigatie (mindmap): elke notitie krijgt EEN korte regel naar de index van de eigen map.

Wat het doet (idempotent, veilig om vaak te draaien):
1. Elke notitie krijgt een regel '> Map: [[<index van de eigen map>]]'.
   - Brand Core, de indexen en Home-achtige root: '> Map: [[Home]]'.
   - In 02_Dashboard staat de regel direct onder de H1 (de build rendert de body); elders onderaan.
   - Bestanden die beginnen met 'Agents ' houden hun eigen regel naar Brand Core (daar hoort die).
2. Oude navigatieregels ('> **Brand Core (00):** ...') en de automatische sectie
   'Gerelateerd onderzoek (automatisch)' worden verwijderd. Geen kruislinks tussen notities.
3. Elke map-index krijgt een compacte, automatische lijst van de notities in die map
   (02_Dashboard: alleen de structuur met aantallen, nooit 150 losse links).
4. Rapport van notities zonder inkomende link (wezen).

Slaat over: .git/.obsidian/.trash/.claude/.vscode/.playwright-mcp, prototype- en themamappen, Home.md,
SCHEMA.md, CLAUDE.md, log.md (root-bestanden krijgen geen regel; een oude regel wordt wel weggehaald).

Gebruik:  python "01_Agent_Infrastructuur/Beheer/vault_nav.py" [--dry-run]
"""
import re
import subprocess
import sys
from pathlib import Path

VAULT = Path(__file__).resolve().parents[2]
DRY = "--dry-run" in sys.argv

OLD_PREFIX = "> **Brand Core (00):**"
NAV_PREFIX = "> Map:"
AUTO_HEADING = "## Alle notities in deze map (automatisch)"
RESEARCH_HEADING = "## Gerelateerd onderzoek (automatisch)"
SKIP_PATH = re.compile(r"(^|/)(\.git|\.obsidian|\.trash|\.claude|\.vscode|\.playwright-mcp|node_modules)(/|$)|prototype|theme-ref")
ROOT_SKIP = {"Home.md", "SCHEMA.md", "CLAUDE.md", "log.md", "conflict-files-obsidian-git.md"}

HUBS = {
    "01_Agent_Infrastructuur": "01_Agent_Infrastructuur/01 Agent Infrastructuur \u2014 Index.md",
    "02_Dashboard": "02_Dashboard/Waar staat wat.md",
    "03_Denzel": "03_Denzel/03 Denzel \u2014 Index.md",
    "04_Social_Agent": "04_Social_Agent/04 Social Agent \u2014 Index.md",
    "05_Partnership_Agent": "05_Partnership_Agent/05 Partnership Agent \u2014 Index.md",
    "06_Website_Agent": "06_Website_Agent/06 Website Agent \u2014 Index.md",
    "07_Design_Agent": "07_Design_Agent/07 Design Agent \u2014 Index.md",
    "08_Operations_Agent": "08_Operations_Agent/08 Operations Agent \u2014 Index.md",
}


def git_notes():
    out = subprocess.check_output(["git", "-c", "core.quotepath=false", "ls-files", "*.md"],
                                  cwd=VAULT, text=True, encoding="utf-8").splitlines()
    return [n for n in out if not SKIP_PATH.search(n)]


def read(rel):
    b = (VAULT / rel).read_bytes()
    bom = b.startswith(b"\xef\xbb\xbf")
    t = b.decode("utf-8-sig")
    crlf = "\r\n" in t
    return t.replace("\r\n", "\n"), bom, crlf


def write(rel, text, bom, crlf):
    if crlf:
        text = text.replace("\n", "\r\n")
    data = text.encode("utf-8")
    if bom:
        data = b"\xef\xbb\xbf" + data
    old = (VAULT / rel).read_bytes()
    if old == data:
        return False
    if not DRY:
        (VAULT / rel).write_bytes(data)
    return True


def hub_stem(top):
    return HUBS[top].rsplit("/", 1)[-1][:-3]


def nav_for(rel):
    top = rel.split("/", 1)[0] if "/" in rel else ""
    if top in HUBS and rel not in HUBS.values():
        return f"{NAV_PREFIX} [[{hub_stem(top)}]]"
    return f"{NAV_PREFIX} [[Home]]"


def strip_lines(text, keep_old):
    out = []
    for ln in text.split("\n"):
        if ln.startswith(NAV_PREFIX) or (ln.startswith(OLD_PREFIX) and not keep_old):
            continue
        out.append(ln)
    return "\n".join(out)


def strip_section(text, heading):
    i = text.find(heading)
    if i == -1:
        return text
    j = text.find("\n## ", i + len(heading))
    return (text[:i].rstrip() + ("\n\n" + text[j + 1:] if j != -1 else "\n"))


def place_top(text, nav):
    lines = text.split("\n")
    start = 0
    if lines and lines[0].strip() == "---":
        for j in range(1, len(lines)):
            if lines[j].strip() == "---":
                start = j + 1
                break
    at = start
    for j in range(start, min(start + 15, len(lines))):
        if lines[j].startswith("# "):
            at = j + 1
            break
        if lines[j].startswith("## "):
            break
    block = ["", nav] if at > 0 else [nav]
    if at >= len(lines) or lines[at].strip() != "":
        block.append("")
    return "\n".join(lines[:at] + block + lines[at:])


def tidy(text):
    return re.sub(r"\n{3,}", "\n\n", text).rstrip() + "\n"


def link_for(rel, stems):
    stem = rel.rsplit("/", 1)[-1][:-3]
    if stems.get(stem.lower(), 0) == 1:
        return f"[[{stem}]]"
    return f"[[{rel[:-3]}|{'/'.join(rel[:-3].split('/')[-2:])}]]"


def listing(top, notes, stems):
    hub = HUBS[top]
    members = [n for n in notes if n.startswith(top + "/") and n != hub]
    out = [AUTO_HEADING, "", "Automatisch (`vault_nav.py`), niet met de hand bewerken.", ""]
    if top == "02_Dashboard":
        sub = {}
        for n in members:
            parts = n[len(top) + 1:].split("/")
            key = parts[0] if len(parts) > 1 else "Onderzoeksnotities (datum-id in de bestandsnaam)"
            sub[key] = sub.get(key, 0) + 1
        out.append("Zoek gericht; lees dit niet in zijn geheel.")
        out.append("")
        out.extend(f"- {k}: {v} notities" for k, v in sorted(sub.items()))
        return "\n".join(out) + "\n"
    groups = {}
    for n in members:
        s = n[len(top) + 1:].rsplit("/", 1)[0] if n.count("/") > 1 else ""
        groups.setdefault(s, []).append(n)
    for s in sorted(groups):
        out.append(f"### {s or 'Hoofdmap'}")
        out.extend(f"- {link_for(n, stems)}" for n in sorted(groups[s]))
        out.append("")
    return "\n".join(out).rstrip() + "\n"


def main():
    notes = git_notes()
    stems = {}
    for n in notes:
        k = n.rsplit("/", 1)[-1][:-3].lower()
        stems[k] = stems.get(k, 0) + 1
    changed, created = [], []
    for rel in HUBS.values():
        if not (VAULT / rel).exists():
            title = rel.rsplit("/", 1)[-1][:-3]
            if not DRY:
                (VAULT / rel).write_text(f"---\ntype: index\nbijgewerkt: 2026-10-25\n---\n\n# {title}\n", encoding="utf-8")
            created.append(rel)
            if rel not in notes:
                notes.append(rel)
    for rel in notes:
        top = rel.split("/", 1)[0] if "/" in rel else ""
        if rel in ROOT_SKIP:
            continue
        if not (VAULT / rel).exists():
            continue  # dry-run: index bestaat nog niet = rel.rsplit("/", 1)[-1].startswith("Agents ")
        new = strip_lines(text, keep_old)
        new = strip_section(new, RESEARCH_HEADING)
        is_hub = top in HUBS and rel == HUBS[top]
        if is_hub:
            new = strip_section(new, AUTO_HEADING)
            new = tidy(new) + "\n" + listing(top, notes, stems)
        new = tidy(new)
        if not keep_old:
            new = place_top(new, nav_for(rel)) if top == "02_Dashboard" else new.rstrip() + "\n\n" + nav_for(rel) + "\n"
            new = tidy(new)
        if write(rel, new, bom, crlf):
            changed.append(rel)
    # root: oude regel weg
    for rel in ROOT_SKIP:
        if rel == "Home.md" or not (VAULT / rel).exists():
            continue
        text, bom, crlf = read(rel)
        new = tidy(strip_lines(text, False))
        if new != tidy(text) and write(rel, new, bom, crlf):
            changed.append(rel)
    print(("DRY-RUN: " if DRY else "") + f"notities={len(notes)} gewijzigd={len(changed)} nieuwe indexen={created}")
    bc = [c for c in changed if c.startswith("00_Brand_Core/")]
    print("waarvan Brand Core:", len(bc))
    # wezen
    incoming = set()
    for rel in notes:
        try:
            t = read(rel)[0]
        except Exception:
            continue
        for m in re.findall(r"\[\[([^\]|#]+)", t):
            incoming.add(m.strip().rsplit("/", 1)[-1].lower())
    orphans = [n for n in notes if n.rsplit("/", 1)[-1][:-3].lower() not in incoming and not n.startswith("02_Dashboard/2")]
    print("wezen (zonder inkomende link, excl. onderzoeksnotities):", len(orphans))


if __name__ == "__main__":
    main()
