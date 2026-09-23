#!/usr/bin/env python3
"""Build het research-register voor het HÏ Grip Research Dashboard.

Leest alle notities in 05_Research\\*.md plus de growth-radar-backlog, valideert
ze en schrijft register.js (window.HI_RESEARCH). Alleen stdlib, Python 3.

    python build_register.py          # valideren + bouwen
    python build_register.py --check  # alleen valideren

Deterministisch: dezelfde input geeft dezelfde output, op `gebouwd` na.
"""

import hashlib
import json
import re
import sys
import urllib.parse
from datetime import date, datetime, timedelta, timezone
from pathlib import Path

# ── Paden en constanten ────────────────────────────────────────────────────────
# Fase 2: de growth-radar-map verhuist naar de vault — dan alleen BACKLOG_PATH aanpassen.
BACKLOG_PATH = Path(r"C:\Users\Test\.claude\research\growth-radar\ACTIEBACKLOG.md")

VAULT = Path(__file__).resolve().parents[2]
RESEARCH_DIR = VAULT / "05_Research"
OUTPUT_PATH = RESEARCH_DIR / "_build" / "register.js"
KAART_PATH = RESEARCH_DIR / "Waar staat wat.md"
GITHUB_BRANCH = "HÏ-Grip-Vault-obsidian"
GITHUB_BASE = "https://github.com/HIGrip/HI-Grip-Vault-/blob/" + urllib.parse.quote(GITHUB_BRANCH) + "/"

SKIP_DIRS = {".git", ".obsidian", ".vscode", "_build", "_dashboard"}

REQUIRED_KEYS = [
    "id", "titel", "datum", "bron", "routine", "categorie", "status",
    "prioriteit", "samenvatting", "gerelateerd", "vervangt", "bronbestand", "deadline",
]
ALLOWED = {
    "bron": {"los", "routine"},
    "routine": {"", "growth-radar", "seo-regressiecheck", "denzel-week", "seo-conversietest"},
    "categorie": {"SEO", "CRO", "Social", "Product", "B2B", "Merk", "Compliance", "Techniek"},
    "status": {"nieuw", "bekeken", "in-uitvoering", "verwerkt", "gearchiveerd"},
    "prioriteit": {"P1", "P2", "P3"},
}
LIST_KEYS = {"gerelateerd", "vervangt"}
DATE_RE = re.compile(r"^\d{4}-\d{2}-\d{2}$")
ID_RE = re.compile(r"^\d{4}-\d{2}-\d{2}-[a-z0-9][a-z0-9-]*$")
ACTION_RE = re.compile(r"^- \[( |x)\] (P[123]) · (.+?)\s*$")
WIKILINK_RE = re.compile(r"\[\[([^\]|#]+)(?:#[^\]|]*)?(?:\|([^\]]+))?\]\]")


class BuildError(Exception):
    pass


# ── Frontmatter (bewuste YAML-subset: platte keys, "strings", [a, b]) ──────────
def _strip_comment(value: str) -> str:
    """Verwijder een trailing # commentaar dat niet binnen aanhalingstekens staat."""
    in_quote = False
    for i, ch in enumerate(value):
        if ch == '"' and (i == 0 or value[i - 1] != "\\"):
            in_quote = not in_quote
        elif ch == "#" and not in_quote and (i == 0 or value[i - 1].isspace()):
            return value[:i].rstrip()
    return value.rstrip()


def _parse_scalar(raw: str) -> str:
    raw = raw.strip()
    if raw.startswith('"') and raw.endswith('"') and len(raw) >= 2:
        return raw[1:-1].replace('\\"', '"').replace("\\\\", "\\")
    return raw


def _parse_list(raw: str, key: str, name: str) -> list:
    raw = raw.strip()
    if not (raw.startswith("[") and raw.endswith("]")):
        raise BuildError(f"{name}: '{key}' moet een inline lijst zijn, bijv. [a, b]")
    inner = raw[1:-1].strip()
    if not inner:
        return []
    return [_parse_scalar(item) for item in inner.split(",") if item.strip()]


def parse_frontmatter(text: str, name: str):
    lines = text.splitlines()
    if not lines or lines[0].strip() != "---":
        raise BuildError(f"{name}: begint niet met '---' (frontmatter ontbreekt)")
    try:
        end = next(i for i in range(1, len(lines)) if lines[i].strip() == "---")
    except StopIteration:
        raise BuildError(f"{name}: sluitende '---' van de frontmatter ontbreekt")
    meta = {}
    for line in lines[1:end]:
        if not line.strip() or line.lstrip().startswith("#"):
            continue
        if ":" not in line:
            raise BuildError(f"{name}: frontmatter-regel zonder 'key: waarde' → {line!r}")
        key, _, value = line.partition(":")
        key = key.strip()
        value = _strip_comment(value)
        meta[key] = _parse_list(value, key, name) if key in LIST_KEYS else _parse_scalar(value)
    body = "\n".join(lines[end + 1:]).strip("\n")
    return meta, body


def validate_meta(meta: dict, stem: str, name: str):
    missing = [k for k in REQUIRED_KEYS if k not in meta]
    if missing:
        raise BuildError(f"{name}: verplichte velden ontbreken: {', '.join(missing)}")
    if meta["id"] != stem:
        raise BuildError(f"{name}: id '{meta['id']}' wijkt af van de bestandsnaam '{stem}'")
    if not ID_RE.match(meta["id"]):
        raise BuildError(f"{name}: id moet JJJJ-MM-DD-slug zijn (kleine letters, cijfers, streepjes)")
    for key, allowed in ALLOWED.items():
        if meta[key] not in allowed:
            raise BuildError(f"{name}: '{key}' = {meta[key]!r}, toegestaan: {sorted(allowed)}")
    if meta["bron"] == "los" and meta["routine"] != "":
        raise BuildError(f"{name}: bron 'los' hoort bij routine \"\"")
    if meta["bron"] == "routine" and meta["routine"] == "":
        raise BuildError(f"{name}: bron 'routine' vereist een routine-naam")
    if not DATE_RE.match(meta["datum"]):
        raise BuildError(f"{name}: datum moet JJJJ-MM-DD zijn")
    if meta["deadline"] and not DATE_RE.match(meta["deadline"]):
        raise BuildError(f"{name}: deadline moet JJJJ-MM-DD of \"\" zijn")
    for key in ("titel", "samenvatting"):
        if not meta[key].strip():
            raise BuildError(f"{name}: '{key}' is leeg")
    for d in (meta["datum"], meta["deadline"]):
        if d:
            try:
                date.fromisoformat(d)
            except ValueError:
                raise BuildError(f"{name}: ongeldige datum {d}")


# ── Wikilinks → GitHub-links ───────────────────────────────────────────────────
def index_vault() -> dict:
    """Map van bestandsnaam-zonder-extensie (en relatief pad) naar relatief pad."""
    index = {}
    for path in sorted(VAULT.rglob("*.md")):
        rel = path.relative_to(VAULT)
        if any(part in SKIP_DIRS for part in rel.parts):
            continue
        rel_posix = rel.as_posix()
        index.setdefault(path.stem, rel_posix)
        index.setdefault(rel_posix[:-3], rel_posix)  # pad-stijl links zonder .md
    return index


def github_url(rel_posix: str) -> str:
    return GITHUB_BASE + urllib.parse.quote(rel_posix)


def convert_wikilinks(text: str, index: dict) -> str:
    def repl(match):
        target = match.group(1).strip()
        label = (match.group(2) or target.rsplit("/", 1)[-1]).strip()
        rel = index.get(target) or index.get(target.rsplit("/", 1)[-1])
        if rel:
            return f"[{label}]({github_url(rel)})"
        return label
    return WIKILINK_RE.sub(repl, text)


def bronbestand_url(raw: str):
    if not raw:
        return None
    if raw.startswith("http://") or raw.startswith("https://"):
        return raw
    try:
        rel = Path(raw).resolve().relative_to(VAULT)
    except (ValueError, OSError):
        return None
    return github_url(rel.as_posix())


# ── Acties ─────────────────────────────────────────────────────────────────────
def normalize(text: str) -> str:
    return re.sub(r"\s+", " ", text).strip()


def short_hash(text: str) -> str:
    return hashlib.sha1(normalize(text).encode("utf-8")).hexdigest()[:8]


def section(body: str, heading: str) -> str:
    """Tekst onder een '## heading' tot de volgende '## '."""
    lines = body.splitlines()
    out, inside = [], False
    for line in lines:
        if line.startswith("## "):
            inside = line[3:].strip().lower() == heading.lower()
            continue
        if inside:
            out.append(line)
    return "\n".join(out)


def parse_actions(body: str, note_id: str, name: str) -> list:
    acties = []
    for line in section(body, "Acties").splitlines():
        if not line.startswith("- ["):
            continue
        m = ACTION_RE.match(line)
        if not m:
            raise BuildError(f"{name}: actie past niet in het formaat '- [ ] P1 · tekst' → {line!r}")
        tekst = m.group(3)
        acties.append({
            "id": f"{note_id}#{short_hash(tekst)}",
            "tekst": tekst,
            "prioriteit": m.group(2),
            "afgevinkt": m.group(1) == "x",
        })
    ids = [a["id"] for a in acties]
    if len(ids) != len(set(ids)):
        raise BuildError(f"{name}: twee acties met dezelfde tekst")
    return acties


# ── Backlog ────────────────────────────────────────────────────────────────────
BACKLOG_FIELDS = ("Waarom", "Waar", "Wat", "Gevonden op")


def parse_backlog(path: Path) -> list:
    if not path.exists():
        print(f"waarschuwing: backlog niet gevonden op {path} — backlog blijft leeg", file=sys.stderr)
        return []
    items, current, prio = [], None, None
    for line in path.read_text(encoding="utf-8").splitlines():
        m = re.match(r"^## (P[123])\b", line)
        if m:
            prio = m.group(1)
            current = None
            continue
        if line.startswith("## "):
            prio, current = None, None
            continue
        m = re.match(r"^### \[( |x)\] (.+?)\s*$", line)
        if m and prio:
            kop = m.group(2)
            current = {
                "id": "backlog#" + short_hash(kop),
                "kop": kop,
                "prioriteit": prio,
                "afgevinkt": m.group(1) == "x",
                "velden": {},
                "body_md": "",
            }
            items.append(current)
            continue
        if current is not None:
            current["body_md"] += line + "\n"
            m = re.match(r"^\*\*(Waarom|Waar|Wat|Gevonden op):\*\*\s*(.*)$", line)
            if m:
                current["velden"][m.group(1)] = m.group(2).strip()
    for item in items:
        item["body_md"] = item["body_md"].strip("\n")
    return items


# ── Statistieken ───────────────────────────────────────────────────────────────
def iso_week_label(d: date) -> str:
    y, w, _ = d.isocalendar()
    return f"{y}-W{w:02d}"


def build_stats(notities: list, backlog: list) -> dict:
    open_per_p = {"P1": 0, "P2": 0, "P3": 0}
    for n in notities:
        for a in n["acties"]:
            if not a["afgevinkt"]:
                open_per_p[a["prioriteit"]] += 1
    for b in backlog:
        if not b["afgevinkt"]:
            open_per_p[b["prioriteit"]] += 1

    per_categorie = {}
    for n in notities:
        per_categorie[n["categorie"]] = per_categorie.get(n["categorie"], 0) + 1

    # 12 ISO-weken, verankerd op de nieuwste notitie zodat de output deterministisch blijft
    per_week = []
    if notities:
        newest = max(date.fromisoformat(n["datum"]) for n in notities)
        monday = newest - timedelta(days=newest.weekday())
        counts = {}
        for n in notities:
            label = iso_week_label(date.fromisoformat(n["datum"]))
            counts[label] = counts.get(label, 0) + 1
        for i in range(11, -1, -1):
            wk = monday - timedelta(weeks=i)
            label = iso_week_label(wk)
            per_week.append({"week": label, "start": wk.isoformat(), "aantal": counts.get(label, 0)})

    return {
        "open_per_prioriteit": open_per_p,
        "totaal_notities": len(notities),
        "per_categorie": dict(sorted(per_categorie.items())),
        "per_week": per_week,
    }


# ── Hoofdprogramma ─────────────────────────────────────────────────────────────
def load_notes(index: dict) -> list:
    notities = []
    files = sorted(p for p in RESEARCH_DIR.glob("*.md") if p.name != KAART_PATH.name)
    for path in files:
        name = path.name
        meta, body = parse_frontmatter(path.read_text(encoding="utf-8"), name)
        validate_meta(meta, path.stem, name)
        note = dict(meta)
        note["acties"] = parse_actions(body, meta["id"], name)
        note["body_md"] = convert_wikilinks(body, index)
        note["bronbestand_url"] = bronbestand_url(meta["bronbestand"])
        note["vault_url"] = github_url(f"05_Research/{name}")
        notities.append(note)

    ids = {n["id"] for n in notities}
    for n in notities:
        for key in LIST_KEYS:
            for ref in n[key]:
                if ref not in ids:
                    raise BuildError(f"{n['id']}.md: '{key}' verwijst naar onbekende notitie '{ref}'")
                if ref == n["id"]:
                    raise BuildError(f"{n['id']}.md: '{key}' verwijst naar zichzelf")
    notities.sort(key=lambda n: (n["datum"], n["id"]), reverse=True)
    return notities


def main(argv) -> int:
    check_only = "--check" in argv
    for stream in (sys.stdout, sys.stderr):  # Windows-console is vaak cp1252
        try:
            stream.reconfigure(encoding="utf-8", errors="replace")
        except (AttributeError, ValueError):
            pass
    try:
        if not RESEARCH_DIR.is_dir():
            raise BuildError(f"map ontbreekt: {RESEARCH_DIR}")
        if not KAART_PATH.exists():
            raise BuildError(f"ontbreekt: {KAART_PATH.name}")
        index = index_vault()
        notities = load_notes(index)
        backlog = parse_backlog(BACKLOG_PATH)
    except BuildError as e:
        print(f"FOUT: {e}", file=sys.stderr)
        return 1

    if len(notities) == 0:
        print("FOUT: geen notities gevonden", file=sys.stderr)
        return 1

    print(f"OK: {len(notities)} notities, {len(backlog)} backlog-items")
    if check_only:
        return 0

    register = {
        "gebouwd": datetime.now(timezone.utc).replace(microsecond=0).isoformat(),
        "vault_branch": GITHUB_BRANCH,
        "notities": notities,
        "backlog": backlog,
        "kaart_md": convert_wikilinks(KAART_PATH.read_text(encoding="utf-8"), index),
        "stats": build_stats(notities, backlog),
    }
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    payload = json.dumps(register, ensure_ascii=False, indent=1, sort_keys=True)
    OUTPUT_PATH.write_text("window.HI_RESEARCH = " + payload + ";\n", encoding="utf-8", newline="\n")
    print(f"geschreven: {OUTPUT_PATH.relative_to(VAULT)}")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
