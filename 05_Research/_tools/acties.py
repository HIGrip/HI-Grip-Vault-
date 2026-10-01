#!/usr/bin/env python3
"""Actiecontrole: open acties opvragen, uitkomsten vastleggen en de backlog bijhouden.

Alleen stdlib, Python 3. Hergebruikt de parse- en hashfuncties uit _build/build_register.py,
zodat een actie-id hier precies hetzelfde is als op het dashboard. Schrijft _backlog/CONTROLE.json.

    python 05_Research/_tools/acties.py open        # JSON: alle open acties + vorige uitkomst
    python 05_Research/_tools/acties.py start       # begin van een run: laatste_run en runs bijwerken
    python 05_Research/_tools/acties.py resultaat <id> --uitkomst gedaan|open|handmatig|dubbel \\
           --methode site|ga4|gsc|shopify|vault|geen --controle "..." --bewijs "..." [--dubbel-van <id>]
    python 05_Research/_tools/acties.py kop         # teller- en datumregel bovenaan ACTIEBACKLOG.md
    python 05_Research/_tools/acties.py opruimen    # zondag: [x]-items naar AFGEROND.md (--altijd: ook op andere dagen)

Werk vanuit het dashboard (PROCEDURE.md sectie B):
    python 05_Research/_tools/acties.py importeer <map> --door <routine>
        <map> = de out_dir van ArtifactData list: <map>/<collectie>/<doc_id>.json. Past status, checks,
        aantekeningen, nieuwe_acties, beheer, kansen en opdrachten toe en print JSON
        {toegepast, te_verwijderen, overgeslagen}. Verwijder daarna precies te_verwijderen uit de db.
        Idempotent. Conflict = de betreffende regel (git blame) of het BEHEER/OPDRACHTEN-item is na de
        ts van de override gewijzigd: de vault wint en het doc gaat weg. Onvindbare of ongeldige docs
        blijven staan. Schrijft _data/sync.json.
    python 05_Research/_tools/acties.py beheer <id> [--eigenaar X] [--uitgesteld-tot JJJJ-MM-DD] [--prioriteit P1]
           [--niet-doen "reden" | --wel-doen] [--door naam]      # "" wist een veld; zonder opties: tonen
    python 05_Research/_tools/acties.py opdracht <actie-id> --status goedgekeurd|bezig|klaar|mislukt|geweigerd
           [--resultaat-json '{"samenvatting":"..","links":[{"label":"..","url":".."}],"voor_mens":".."}' | @bestand]
    python 05_Research/_tools/acties.py uitvoerbaar <id> --claude ja|deels|nee --claude-doet ".." --jij-doet ".."
    python 05_Research/_tools/acties.py kans <kans-id> --status oppakken|parkeren|afwijzen [--notitie ..] [--door naam]

Alleen 'gedaan' vinkt af in de bron; de actie wordt gezocht op id (hash opnieuw berekend), nooit
op positie. Tekst en kop blijven ongewijzigd, dus het id ook.
Testen zonder de echte vault te raken: kopieer 05_Research naar <tmp>/vault/05_Research en draai
daar de kopie van dit script; alle paden volgen dan de kopie.
"""

import argparse
import json
import re
import subprocess
import sys
from datetime import date, datetime, timezone
from pathlib import Path

sys.dont_write_bytecode = True  # geen __pycache__ in de vault
sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "_build"))
import build_register as br  # noqa: E402

try:
    from zoneinfo import ZoneInfo
    TZ = ZoneInfo("Europe/Amsterdam")
except Exception:  # geen tzdata: lokale tijdzone
    TZ = None

MAANDEN = ("januari", "februari", "maart", "april", "mei", "juni", "juli",
           "augustus", "september", "oktober", "november", "december")
MAX_RUNS = 14
VOLGENDE_RUN = "dagelijks 05:00"
BACKLOG_VELDEN = ("Waarom", "Waar", "Wat")


class Fout(Exception):
    pass


# ── Hulpfuncties ───────────────────────────────────────────────────────────────
def nu() -> datetime:
    moment = datetime.now(TZ) if TZ else datetime.now().astimezone()
    return moment.replace(microsecond=0)


def lang(d: date) -> str:
    return f"{d.day} {MAANDEN[d.month - 1]} {d.year}"


def lees_regels(path: Path) -> list:
    return path.read_text(encoding="utf-8").split("\n")


def schrijf_regels(path: Path, lines: list):
    path.write_text("\n".join(lines), encoding="utf-8", newline="\n")


def laad():
    notities = br.load_notes({})  # wikilinks zijn hier niet nodig
    backlog = br.parse_backlog(br.BACKLOG_PATH)
    return notities, backlog, br.load_controle(br.CONTROLE_PATH)


def controle_of_nieuw(controle) -> dict:
    if controle is None:
        return {"laatste_run": "", "volgende_run": VOLGENDE_RUN, "runs": [], "resultaten": {}}
    return controle


def schrijf_controle(data: dict):
    tekst = json.dumps(data, ensure_ascii=False, indent=1, sort_keys=True) + "\n"
    br.CONTROLE_PATH.write_text(tekst, encoding="utf-8", newline="\n")


# ── Commando's ─────────────────────────────────────────────────────────────────
def cmd_open(args):
    notities, backlog, controle = laad()
    resultaten = controle_of_nieuw(controle)["resultaten"]
    beheer, uitvoerbaar = br.load_beheer()["acties"], br.load_uitvoerbaar()
    uit = []
    for bron, bron_titel, actie in br.alle_acties(notities, backlog):
        if actie["afgevinkt"]:
            continue
        is_backlog = bron == "backlog"
        uit.append({
            "id": actie["id"],
            "bron": bron,
            "bron_titel": bron_titel,
            "prioriteit": actie["prioriteit"],
            "tekst": actie["kop"] if is_backlog else actie["tekst"],
            "velden": {k: v for k, v in actie["velden"].items() if k in BACKLOG_VELDEN} if is_backlog else {},
            "vorige": resultaten.get(actie["id"]),
            "beheer": beheer.get(actie["id"]),
            "uitvoerbaar": uitvoerbaar.get(actie["id"]),
        })
    print(json.dumps(uit, ensure_ascii=False, indent=1))


def cmd_start(args):
    data = controle_of_nieuw(br.load_controle(br.CONTROLE_PATH))
    moment = nu()
    dag = moment.date().isoformat()
    data["laatste_run"] = moment.isoformat()
    data["volgende_run"] = data.get("volgende_run") or VOLGENDE_RUN
    data["runs"] = sorted({d for d in data["runs"] if d != dag} | {dag})[-MAX_RUNS:]
    schrijf_controle(data)
    print(f"start: laatste_run {data['laatste_run']}, {len(data['runs'])} run(s) bewaard")


def vink_notitie_af(note_id: str, actie_id: str):
    path = br.RESEARCH_DIR / f"{note_id}.md"
    lines = lees_regels(path)
    for i in br.section_indices(lines, "Acties") or []:
        m = br.ACTION_RE.match(lines[i])
        if m and f"{note_id}#{br.short_hash(m.group(3))}" == actie_id:
            if m.group(1) == " ":
                lines[i] = "- [x]" + lines[i][len("- [ ]"):]
                schrijf_regels(path, lines)
            return
    raise Fout(f"actie {actie_id} niet teruggevonden in {path.name}")


def vink_backlog_af(actie_id: str, bewijs: str, dag: date):
    lines = lees_regels(br.BACKLOG_PATH)
    for start, _, _, afgevinkt, kop in br.scan_backlog(lines):
        if br.backlog_id(kop) != actie_id:
            continue
        if not afgevinkt:
            lines[start] = "### [x]" + lines[start][len("### [ ]"):]
            regel = f"**Bevestigd:** {lang(dag)} door actiecontrole — {bewijs}"
            if start + 1 < len(lines) and lines[start + 1].startswith("**Bevestigd:**"):
                lines[start + 1] = regel
            else:
                lines.insert(start + 1, regel)
            schrijf_regels(br.BACKLOG_PATH, lines)
        return
    raise Fout(f"backlog-item {actie_id} niet teruggevonden in {br.BACKLOG_PATH.name}")


def cmd_resultaat(args):
    controle_tekst, bewijs = br.normalize(args.controle), br.normalize(args.bewijs)
    if not controle_tekst:
        raise Fout("--controle is leeg")
    if args.uitkomst == "gedaan" and not bewijs:
        raise Fout("'gedaan' vereist --bewijs")
    if (args.uitkomst == "dubbel") != bool(args.dubbel_van):
        raise Fout("--dubbel-van hoort bij (en alleen bij) --uitkomst dubbel")

    notities, backlog, controle = laad()
    acties = {a["id"]: (bron, a) for bron, _, a in br.alle_acties(notities, backlog, ook_gearchiveerd=True)}
    if args.id not in acties:
        raise Fout(f"onbekend actie-id {args.id} — niets geschreven")
    if args.dubbel_van and (args.dubbel_van not in acties or args.dubbel_van == args.id):
        raise Fout(f"--dubbel-van {args.dubbel_van} is geen ander bestaand actie-id — niets geschreven")

    data = controle_of_nieuw(controle)
    vorige = data["resultaten"].get(args.id) or {}
    moment = nu()
    dag = moment.date().isoformat()
    resultaat = {"uitkomst": args.uitkomst, "methode": args.methode, "controle": controle_tekst,
                 "bewijs": bewijs, "gecontroleerd": dag}
    if args.uitkomst == "gedaan":
        resultaat["sinds"] = vorige.get("sinds") if vorige.get("uitkomst") == "gedaan" and vorige.get("sinds") else dag
    if args.uitkomst == "dubbel":
        resultaat["dubbel_van"] = args.dubbel_van

    # Eerst de bron, dan CONTROLE.json: mislukt het afvinken, dan claimt CONTROLE.json niets
    bron, actie = acties[args.id]
    afgevinkt = args.uitkomst == "gedaan" and not actie["afgevinkt"]
    if afgevinkt:
        if bron == "backlog":
            vink_backlog_af(args.id, bewijs, moment.date())
        else:
            vink_notitie_af(bron, args.id)
    data["resultaten"][args.id] = resultaat
    schrijf_controle(data)
    print(f"{args.id}: {args.uitkomst}" + (" — afgevinkt in de bron" if afgevinkt else ""))


def werk_kop_bij(door: str) -> str:
    backlog = br.parse_backlog(br.BACKLOG_PATH)
    resultaten = controle_of_nieuw(br.load_controle(br.CONTROLE_PATH))["resultaten"]

    def is_dubbel(item):
        return (resultaten.get(item["id"]) or {}).get("uitkomst") == "dubbel"

    open_ = sum(1 for b in backlog if not b["afgevinkt"] and not is_dubbel(b))
    dubbel = sum(1 for b in backlog if not b["afgevinkt"] and is_dubbel(b))
    afgevinkt = sum(1 for b in backlog if b["afgevinkt"])
    afgerond = 0
    if br.AFGEROND_PATH.exists():
        afgerond = sum(1 for line in lees_regels(br.AFGEROND_PATH) if br.BACKLOG_KOP_RE.match(line))

    telregel = f"Open: {open_} · Afgerond: {afgerond}"
    extra = []
    if afgevinkt:
        extra.append(f"{afgevinkt} afgevinkt, wordt zondag verplaatst naar AFGEROND.md")
    if dubbel:
        extra.append(f"{dubbel} dubbel, zie dashboard")
    if extra:
        telregel += " (" + "; ".join(extra) + ")"
    nieuw = {"Laatst bijgewerkt:": f"Laatst bijgewerkt: {lang(nu().date())} ({door})", "Open:": telregel}

    lines = lees_regels(br.BACKLOG_PATH)
    kop_einde = next((i for i, line in enumerate(lines) if line.startswith("## ")), len(lines))
    for prefix, regel in nieuw.items():
        i = next((i for i in range(kop_einde) if lines[i].startswith(prefix)), None)
        if i is None:
            raise Fout(f"regel '{prefix} …' niet gevonden bovenaan {br.BACKLOG_PATH.name}")
        lines[i] = regel
    schrijf_regels(br.BACKLOG_PATH, lines)
    return telregel


def cmd_kop(args):
    print(werk_kop_bij(args.door))


def cmd_opruimen(args):
    moment = nu()
    if moment.weekday() != 6 and not args.altijd:
        print("opruimen: vandaag is geen zondag — niets gedaan (--altijd om toch te draaien)")
        return
    dag = moment.date().isoformat()
    controle = br.load_controle(br.CONTROLE_PATH)
    resultaten = controle_of_nieuw(controle)["resultaten"]

    lines = lees_regels(br.BACKLOG_PATH)
    blokken, blijft = [], 0
    for start, end, prio, afgevinkt, kop in reversed(br.scan_backlog(lines)):
        if not afgevinkt:
            continue
        aid = br.backlog_id(kop)
        # vandaag bevestigd: een week laten staan, zodat het dashboard het als 'vandaag gedaan' toont
        if (resultaten.get(aid) or {}).get("sinds") == dag:
            blijft += 1
            continue
        laatste = end - 1
        while laatste > start and lines[laatste].strip() in ("", "---"):
            laatste -= 1
        stop = laatste + 1
        if stop < len(lines) and not lines[stop].strip():
            stop += 1  # de lege scheidingsregel gaat mee, '---' blijft staan
        blokken.insert(0, (aid, prio, lines[start:laatste + 1]))
        del lines[start:stop]

    if not blokken:
        print(f"opruimen: niets te verplaatsen ({blijft} vandaag bevestigd, blijft staan)")
        return

    bestaand = lees_regels(br.AFGEROND_PATH) if br.AFGEROND_PATH.exists() else ["# HÏ Grip — Afgeronde acties", "", "---"]
    afg = [line for line in bestaand if not line.startswith("*(Nog geen afgeronde punten")]
    nieuw = []
    for _, prio, blok in blokken:
        nieuw += blok + [f"**Stond op:** {prio}", ""]
    datumkop = f"## {lang(moment.date())}"
    sep = next((i for i, line in enumerate(afg) if line.strip() == "---"), None)
    if sep is None:
        afg += ["", "---"]
        sep = len(afg) - 1
    j = sep + 1
    while j < len(afg) and not afg[j].strip():
        j += 1
    if j < len(afg) and afg[j] == datumkop:
        afg[j + 1:j + 1] = [""] + nieuw
    else:
        afg[sep + 1:sep + 1] = ["", datumkop, ""] + nieuw
    # dubbele lege regels samenvoegen, precies één afsluitende newline
    schoon = [line for i, line in enumerate(afg) if line.strip() or (i and afg[i - 1].strip())]
    while schoon and not schoon[-1].strip():
        schoon.pop()

    # AFGEROND eerst: gaat daarna iets mis, dan staat een item hooguit dubbel, niet nergens
    schrijf_regels(br.AFGEROND_PATH, schoon + [""])
    schrijf_regels(br.BACKLOG_PATH, lines)
    verplaatst = {aid for aid, _, _ in blokken}
    if controle is not None and verplaatst & set(resultaten):
        for aid in verplaatst:
            resultaten.pop(aid, None)  # het bewijs staat in de Bevestigd-regel in AFGEROND.md
        schrijf_controle(controle)
    telregel = werk_kop_bij("weekonderhoud")
    print(f"opruimen: {len(blokken)} item(s) naar AFGEROND.md, {blijft} vandaag bevestigd blijft staan — {telregel}")

# ── Werk vanuit het dashboard ──────────────────────────────────────────────────
COLLECTIES = ("status", "checks", "aantekeningen", "nieuwe_acties", "beheer", "kansen", "opdrachten")
SYNC_PATH = br.DATA_DIR / "sync.json"


def schrijf_json(path: Path, data: dict):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=1, sort_keys=True) + "\n",
                    encoding="utf-8", newline="\n")


def parse_ts(waarde):
    """ISO-tijdstip (dashboard: toISOString, dus UTC 'Z') → aware datetime, of None."""
    try:
        moment = datetime.fromisoformat(str(waarde).strip().replace("Z", "+00:00"))
    except ValueError:
        return None
    return moment if moment.tzinfo else moment.replace(tzinfo=TZ or timezone.utc)


def lokaal(moment: datetime) -> datetime:
    return moment.astimezone(TZ) if TZ else moment.astimezone()


def alle_actie_ids(notities, backlog) -> dict:
    return {a["id"]: (bron, a) for bron, _, a in br.alle_acties(notities, backlog, ook_gearchiveerd=True)}


def actie_tekst(bron: str, actie: dict) -> str:
    return actie["kop"] if bron == "backlog" else actie["tekst"]


def pas_beheer_toe(bestaand: dict, velden: dict, door: str, moment: datetime):
    """Nieuw BEHEER-item: veld met None/"" wist, afwezig veld blijft. None als er niets overblijft."""
    b = {k: v for k, v in (bestaand or {}).items() if k not in ("door", "ts")}
    for k in ("eigenaar", "uitgesteld_tot", "prioriteit"):
        if k not in velden:
            continue
        v = br.normalize(str(velden[k] or ""))
        if not v:
            b.pop(k, None)
            continue
        if k == "prioriteit" and v not in br.PRIORITEITEN:
            raise Fout(f"prioriteit {v!r}, toegestaan: {list(br.PRIORITEITEN)}")
        if k == "uitgesteld_tot":
            try:
                date.fromisoformat(v)
            except ValueError:
                raise Fout(f"uitgesteld_tot {v!r} is geen JJJJ-MM-DD")
        b[k] = v
    if "niet_doen" in velden:
        nd = velden["niet_doen"]
        reden = br.normalize(str((nd.get("reden") if isinstance(nd, dict) else nd) or ""))
        if not reden:
            b.pop("niet_doen", None)
        elif (b.get("niet_doen") or {}).get("reden") != reden:  # zelfde reden: oorspronkelijke door/datum houden
            b["niet_doen"] = {"reden": reden, "door": door, "datum": lokaal(moment).date().isoformat()}
    if not b:
        return None
    b.update(door=door, ts=moment.isoformat())
    return b


def beheer_kern(b) -> dict:
    """BEHEER-item zonder wie/wanneer, om 'ongewijzigd' te herkennen."""
    kern = {k: v for k, v in (b or {}).items() if k not in ("door", "ts")}
    if kern.get("niet_doen"):
        kern["niet_doen"] = kern["niet_doen"].get("reden")
    return kern


def lees_resultaat(raw: str) -> dict:
    if raw.startswith("@"):
        raw = Path(raw[1:]).read_text(encoding="utf-8")
    try:
        r = json.loads(raw)
    except json.JSONDecodeError as e:
        raise Fout(f"--resultaat-json is geen geldige JSON ({e})")
    links = r.get("links", []) if isinstance(r, dict) else None
    if not (isinstance(r, dict) and isinstance(r.get("samenvatting", ""), str) and isinstance(links, list)
            and all(isinstance(x, dict) and isinstance(x.get("label"), str) and isinstance(x.get("url"), str)
                    for x in links) and isinstance(r.get("voor_mens", ""), str)):
        raise Fout("--resultaat-json moet {samenvatting, links: [{label, url}], voor_mens} zijn")
    return {"samenvatting": r.get("samenvatting", ""), "links": links, "voor_mens": r.get("voor_mens", "")}


class Regeltijden:
    """Laatste wijziging per regel (git blame, committer-time) zoals het bestand vóór de import was.

    Niet-gecommitte regels, en bestanden buiten git, krijgen de mtime van het bestand. Regels uit een
    boundary-commit (root, of de grens van een shallow clone in de cloud) tellen als oud: daar is de
    echte datum onbekend en anders zou elke override in een shallow clone een conflict zijn."""

    def __init__(self):
        self.cache = {}

    def _blame(self, path: Path):
        try:
            rel = path.resolve().relative_to(br.VAULT).as_posix()
            out = subprocess.run(["git", "-C", str(br.VAULT), "blame", "--line-porcelain", "--", rel],
                                 capture_output=True, timeout=60)
        except (OSError, ValueError, subprocess.TimeoutExpired):
            return None
        if out.returncode != 0:
            return None
        tijden, sha, tijd, grens = [], "", None, False
        for line in out.stdout.decode("utf-8", "replace").split("\n"):
            if line.startswith("\t"):
                tijden.append(None if set(sha) == {"0"} else 0.0 if grens else tijd)
            elif line.startswith("committer-time "):
                tijd = float(line.split()[1])
            elif line == "boundary":
                grens = True
            elif re.match(r"^[0-9a-f]{40} ", line):
                sha, grens = line[:40], False
        return tijden

    def na(self, path: Path, index: int, moment: datetime) -> bool:
        """Is regel `index` van `path` na `moment` gewijzigd?"""
        if path not in self.cache:
            self.cache[path] = (self._blame(path), path.stat().st_mtime)
        tijden, mtime = self.cache[path]
        tijd = tijden[index] if tijden and index < len(tijden) and tijden[index] is not None else mtime
        return tijd > moment.timestamp()


def lees_docs(map_: Path) -> list:
    """(collectie, doc_id, velden) uit de out_dir van ArtifactData; tolerant voor een omhullend object."""
    docs = []
    for col in COLLECTIES:
        for f in sorted((map_ / col).glob("*.json")) if (map_ / col).is_dir() else []:
            try:
                obj = json.loads(f.read_text(encoding="utf-8"))
            except (ValueError, UnicodeDecodeError):
                obj = None
            for sleutel in ("data", "fields", "document", "value"):
                if isinstance(obj, dict) and isinstance(obj.get(sleutel), dict) and "ts" not in obj:
                    obj = obj[sleutel]
            docs.append((col, f.stem, obj))
    # binnen een collectie op tijd, zodat aantekeningen in volgorde onder elkaar komen
    return sorted(docs, key=lambda d: (COLLECTIES.index(d[0]), str(d[2].get("ts", "")) if isinstance(d[2], dict) else "", d[1]))


class Import:
    def __init__(self, door: str):
        self.door = door
        self.notities, self.backlog, _ = laad()
        self.acties = alle_actie_ids(self.notities, self.backlog)
        self.note_ids = {n["id"] for n in self.notities}
        self.kans_ids = {k["id"] for n in self.notities for k in n["kansen"]}
        self.beheer = br.load_beheer()
        self.opdrachten = br.load_opdrachten()
        self.bestanden, self.json_gewijzigd = {}, set()
        self.tijden = Regeltijden()
        self.toegepast, self.te_verwijderen, self.overgeslagen = [], [], []
        self.nieuw_in_backlog = 0
        self.afgerond = None

    # boekhouding
    def regels(self, path: Path) -> list:
        if path not in self.bestanden:
            self.bestanden[path] = lees_regels(path)
        return self.bestanden[path]

    def klaar(self, doc: str, wat: str):
        self.toegepast.append(f"{doc}: {wat}")
        self.te_verwijderen.append(doc)

    def sla_over(self, doc: str, reden: str, weg: bool = False):
        self.overgeslagen.append({"doc": doc, "reden": reden + (" (doc wordt verwijderd)" if weg else "")})
        if weg:
            self.te_verwijderen.append(doc)

    def conflict(self, doc: str, path: Path, i: int, moment: datetime) -> bool:
        if self.tijden.na(path, i, moment):
            self.sla_over(doc, f"conflict: {path.name} regel {i + 1} is na {moment.isoformat()} gewijzigd, de vault wint", True)
            return True
        return False

    # per collectie; elk geeft False als het doc is afgehandeld (toegepast of overgeslagen)
    def status(self, doc, doc_id, d, moment):
        waarde = d.get("status")
        if doc_id not in self.note_ids:
            return self.sla_over(doc, f"onbekende notitie {doc_id}")
        if waarde not in br.ALLOWED["status"]:
            return self.sla_over(doc, f"ongeldige status {waarde!r}")
        path = br.RESEARCH_DIR / f"{doc_id}.md"
        lines = self.regels(path)
        eind = next((i for i in range(1, len(lines)) if lines[i].strip() == "---"), 0)
        i = next((i for i in range(1, eind) if re.match(r"^status\s*:", lines[i])), None)
        if i is None:
            return self.sla_over(doc, "geen status-regel in de frontmatter")
        m = re.match(r'^(status\s*:\s*)("?)([^"#\s]*)("?)(.*)$', lines[i])
        if m.group(3) == waarde:
            return self.klaar(doc, f"status stond al op {waarde}")
        if self.conflict(doc, path, i, moment):
            return
        lines[i] = m.group(1) + m.group(2) + waarde + m.group(4) + m.group(5)
        self.klaar(doc, f"status {m.group(3)} → {waarde}")

    def checks(self, doc, doc_id, d, moment):
        aid, afgevinkt = d.get("actionId") or doc_id.replace("~", "#"), d.get("afgevinkt")
        if not isinstance(afgevinkt, bool):
            return self.sla_over(doc, "afgevinkt is geen true/false")
        if aid not in self.acties:
            return self.sla_over(doc, f"onvindbaar actie-id {aid} (tekst gewijzigd?)")
        bron = self.acties[aid][0]
        if bron == "backlog":
            path, prefix = br.BACKLOG_PATH, "### ["
            lines = self.regels(path)
            i = next((st for st, _, _, _, kop in br.scan_backlog(lines) if br.backlog_id(kop) == aid), None)
        else:
            path, prefix = br.RESEARCH_DIR / f"{bron}.md", "- ["
            lines = self.regels(path)
            i = next((i for i in br.section_indices(lines, "Acties") or []
                      if (m := br.ACTION_RE.match(lines[i])) and f"{bron}#{br.short_hash(m.group(3))}" == aid), None)
        if i is None:
            return self.sla_over(doc, f"actie {aid} niet teruggevonden in {path.name}")
        teken = "x" if afgevinkt else " "
        if lines[i][len(prefix)] == teken:
            return self.klaar(doc, f"stond al op [{teken}]")
        if self.conflict(doc, path, i, moment):
            return
        lines[i] = prefix + teken + lines[i][len(prefix) + 1:]
        self.klaar(doc, f"[{teken}]")

    def aantekeningen(self, doc, doc_id, d, moment):
        note_id = d.get("noteId") or doc_id.rsplit("_", 1)[0]
        tekst = re.sub(r"\s*\n\s*", " ", str(d.get("tekst") or "")).strip()
        naam = br.normalize(str(d.get("naam") or "Onbekend")).replace("*", "")
        if not tekst:
            return self.sla_over(doc, "lege aantekening", True)
        if note_id not in self.note_ids:
            return self.sla_over(doc, f"onbekende notitie {note_id}")
        regel = f"- **{naam} · {lokaal(moment):%Y-%m-%d %H:%M}** — {tekst}"
        lines = self.regels(br.RESEARCH_DIR / f"{note_id}.md")
        if regel in lines:
            return self.klaar(doc, "aantekening stond er al")
        kop = next((i for i, line in enumerate(lines)
                    if line.startswith("## ") and line[3:].strip().lower() == "aantekeningen"), None)
        if kop is None:
            while lines and not lines[-1].strip():
                lines.pop()
            lines += ["", "## Aantekeningen", regel, ""]
        else:
            idx = br.section_indices(lines, "Aantekeningen") or []
            laatste = max((i for i in idx if lines[i].strip()), default=kop)
            lines.insert(laatste + 1, regel)
        self.klaar(doc, "aantekening toegevoegd")

    def nieuwe_acties(self, doc, doc_id, d, moment):
        kop = re.sub(r"^(#+\s*)?(\[[ xX]\]\s*)?", "", br.normalize(str(d.get("kop") or "")))
        prio = d.get("prioriteit")
        if not kop or prio not in br.PRIORITEITEN:
            return self.sla_over(doc, "kop ontbreekt of prioriteit is geen P1/P2/P3")
        aid = br.backlog_id(kop)
        if self.afgerond is None:
            regels = lees_regels(br.AFGEROND_PATH) if br.AFGEROND_PATH.exists() else []
            self.afgerond = {br.backlog_id(m.group(2)) for line in regels if (m := br.BACKLOG_KOP_RE.match(line))}
        if aid in self.acties or aid in self.afgerond:
            return self.klaar(doc, f"backlogpunt {aid} bestond al")
        lines = self.regels(br.BACKLOG_PATH)
        start = next((i for i, line in enumerate(lines) if re.match(rf"^## {prio}\b", line)), None)
        if start is None:
            return self.sla_over(doc, f"sectie '## {prio}' niet gevonden in {br.BACKLOG_PATH.name}")
        eind = next((i for i in range(start + 1, len(lines)) if lines[i].startswith("## ")), len(lines))
        laatste = eind - 1
        while laatste > start and lines[laatste].strip() in ("", "---"):
            laatste -= 1
        blok = ["", f"### [ ] {kop}"]
        for veld, sleutel in (("Waarom", "waarom"), ("Wat", "wat")):
            waarde = br.normalize(str(d.get(sleutel) or ""))
            if waarde:
                blok.append(f"**{veld}:** {waarde}")
        naam = br.normalize(str(d.get("naam") or "onbekend"))
        blok.append(f"**Gevonden op:** dashboard, {naam}, {lang(lokaal(moment).date())}")
        lines[laatste + 1:laatste + 1] = blok
        self.acties[aid] = ("backlog", {"id": aid, "kop": kop, "prioriteit": prio, "afgevinkt": False})
        self.nieuw_in_backlog += 1
        self.klaar(doc, f"{prio} · {kop} → {aid}")

    def _ouder_dan_vault(self, doc, bestaand, moment) -> bool:
        vault_ts = parse_ts((bestaand or {}).get("ts", ""))
        if vault_ts and vault_ts > moment:
            self.sla_over(doc, f"conflict: vault-item is gewijzigd op {vault_ts.isoformat()}, de vault wint", True)
            return True
        return False

    def beheer_(self, doc, doc_id, d, moment):
        aid = d.get("actionId") or doc_id.replace("~", "#")
        if aid not in self.acties:
            return self.sla_over(doc, f"onvindbaar actie-id {aid}")
        acties = self.beheer["acties"]
        if self._ouder_dan_vault(doc, acties.get(aid), moment):
            return
        velden = {k: d[k] for k in ("eigenaar", "uitgesteld_tot", "prioriteit", "niet_doen") if k in d}
        try:
            nieuw = pas_beheer_toe(acties.get(aid), velden, str(d.get("naam") or "dashboard"), moment)
        except Fout as e:
            return self.sla_over(doc, str(e))
        if beheer_kern(nieuw) == beheer_kern(acties.get(aid)):
            return self.klaar(doc, "beheer ongewijzigd")
        if nieuw is None:
            acties.pop(aid, None)
        else:
            acties[aid] = nieuw
        self.json_gewijzigd.add("beheer")
        self.klaar(doc, "beheer bijgewerkt" if nieuw else "beheer gewist")

    def kansen(self, doc, doc_id, d, moment):
        kid, status = d.get("kansId") or doc_id.replace("~", "#"), d.get("status")
        if kid not in self.kans_ids:
            return self.sla_over(doc, f"onbekende kans {kid}")
        if status not in br.KANS_STATUS:
            return self.sla_over(doc, f"ongeldige status {status!r}")
        kansen = self.beheer["kansen"]
        if self._ouder_dan_vault(doc, kansen.get(kid), moment):
            return
        nieuw = {"status": status, "door": br.normalize(str(d.get("naam") or "dashboard")), "ts": moment.isoformat()}
        notitie = br.normalize(str(d.get("notitie") or ""))
        if notitie:
            nieuw["notitie"] = notitie
        oud = kansen.get(kid) or {}
        if oud.get("status") == status and oud.get("notitie", "") == notitie:
            return self.klaar(doc, f"kans stond al op {status}")
        kansen[kid] = nieuw
        self.json_gewijzigd.add("beheer")
        self.klaar(doc, f"kans → {status}")

    def opdrachten_(self, doc, doc_id, d, moment):
        aid, status = d.get("actionId") or doc_id.replace("~", "#"), d.get("status")
        naam = br.normalize(str(d.get("naam") or "dashboard"))
        if aid not in self.acties:
            return self.sla_over(doc, f"onvindbaar actie-id {aid}")
        o = self.opdrachten.get(aid)
        goedgekeurd = parse_ts((o or {}).get("goedgekeurd_ts", ""))
        if status == "goedgekeurd":
            if goedgekeurd and goedgekeurd >= moment:
                return self.klaar(doc, f"goedkeuring al verwerkt (opdracht {o['status']})")
            if o and o["status"] == "bezig":
                return self.sla_over(doc, "opdracht is bezig; nieuwe goedkeuring wacht tot die klaar is")
            bron, actie = self.acties[aid]
            self.opdrachten[aid] = {
                "actie_id": aid, "titel": br.normalize(str(d.get("titel") or actie_tekst(bron, actie))),
                "toelichting": str(d.get("toelichting") or "").strip(), "aangevraagd_door": naam,
                "goedgekeurd_door": naam, "goedgekeurd_ts": moment.isoformat(), "status": "goedgekeurd",
                "bijgewerkt": nu().isoformat()}
            self.json_gewijzigd.add("opdrachten")
            return self.klaar(doc, "opdracht goedgekeurd")
        if status == "ingetrokken":
            if not o or o["status"] == "geweigerd":
                return self.klaar(doc, "niets in te trekken")
            if goedgekeurd and goedgekeurd > moment:
                return self.sla_over(doc, "intrekking is ouder dan de laatste goedkeuring", True)
            if o["status"] != "goedgekeurd":
                return self.sla_over(doc, f"opdracht is al {o['status']}, intrekken kan niet meer", True)
            o.update(status="geweigerd", ingetrokken_door=naam, bijgewerkt=nu().isoformat())
            self.json_gewijzigd.add("opdrachten")
            return self.klaar(doc, "opdracht ingetrokken")
        self.sla_over(doc, f"ongeldige status {status!r}")

    def verwerk(self, docs: list):
        # status en checks eerst: die vervangen regels, aantekeningen en nieuwe acties voegen regels toe
        # (git blame kijkt naar het bestand op schijf, dus de regelnummers moeten dan nog kloppen)
        doen = {"status": self.status, "checks": self.checks, "aantekeningen": self.aantekeningen,
                "nieuwe_acties": self.nieuwe_acties, "beheer": self.beheer_, "kansen": self.kansen,
                "opdrachten": self.opdrachten_}
        for col, doc_id, d in docs:
            doc = f"{col}/{doc_id}"
            if not isinstance(d, dict):
                self.sla_over(doc, "geen geldig JSON-object")
                continue
            moment = parse_ts(d.get("ts", ""))
            if moment is None:
                self.sla_over(doc, f"ongeldige ts {d.get('ts')!r}")
                continue
            doen[col](doc, doc_id, d, moment)

    def schrijf(self):
        # eerst de bronbestanden, dan de JSON-bestanden
        for path, lines in self.bestanden.items():
            if lines != lees_regels(path):
                schrijf_regels(path, lines)
        if "beheer" in self.json_gewijzigd:
            schrijf_json(br.BEHEER_PATH, {"acties": self.beheer["acties"], "kansen": self.beheer["kansen"]})
        if "opdrachten" in self.json_gewijzigd:
            schrijf_json(br.OPDRACHTEN_PATH, self.opdrachten)
        if self.nieuw_in_backlog:
            werk_kop_bij(self.door)
        schrijf_json(SYNC_PATH, {"laatste_sync": nu().isoformat(), "door": self.door,
                                 "toegepast": len(self.toegepast), "overgeslagen": len(self.overgeslagen)})


def cmd_importeer(args):
    map_ = Path(args.map)
    if not map_.is_dir():
        raise Fout(f"map {map_} bestaat niet")
    imp = Import(args.door)
    imp.verwerk(lees_docs(map_))
    imp.schrijf()
    print(json.dumps({"toegepast": imp.toegepast, "te_verwijderen": imp.te_verwijderen,
                      "overgeslagen": imp.overgeslagen}, ensure_ascii=False, indent=1))


def bestaande_actie(aid: str) -> tuple:
    notities, backlog, _ = laad()
    acties = alle_actie_ids(notities, backlog)
    if aid not in acties:
        raise Fout(f"onbekend actie-id {aid} — niets geschreven")
    return acties[aid]


def cmd_beheer(args):
    bestaande_actie(args.id)
    beheer = br.load_beheer()
    velden = {k: getattr(args, k) for k in ("eigenaar", "uitgesteld_tot", "prioriteit") if getattr(args, k) is not None}
    if args.niet_doen is not None or args.wel_doen:
        velden["niet_doen"] = None if args.wel_doen else {"reden": args.niet_doen}
    if not velden:
        print(json.dumps(beheer["acties"].get(args.id), ensure_ascii=False, indent=1))
        return
    nieuw = pas_beheer_toe(beheer["acties"].get(args.id), velden, args.door, nu())
    if nieuw is None:
        beheer["acties"].pop(args.id, None)
    else:
        beheer["acties"][args.id] = nieuw
    schrijf_json(br.BEHEER_PATH, beheer)
    print(f"{args.id}: " + (json.dumps(nieuw, ensure_ascii=False) if nieuw else "beheer gewist"))


def cmd_opdracht(args):
    opdrachten = br.load_opdrachten()
    o = opdrachten.get(args.id)
    moment = nu().isoformat()
    if o is None:
        if args.status != "goedgekeurd":
            raise Fout(f"geen opdracht {args.id} in {br.OPDRACHTEN_PATH.name} — alleen 'goedgekeurd' maakt er een")
        bron, actie = bestaande_actie(args.id)
        o = opdrachten[args.id] = {"actie_id": args.id, "titel": actie_tekst(bron, actie), "toelichting": "",
                                   "aangevraagd_door": args.door, "goedgekeurd_door": args.door,
                                   "goedgekeurd_ts": moment}
    elif args.status == "goedgekeurd":  # opnieuw goedkeuren: vorig resultaat vervalt
        o.update(goedgekeurd_door=args.door, goedgekeurd_ts=moment)
        o.pop("resultaat", None)
    o.update(status=args.status, bijgewerkt=moment)
    if args.resultaat_json:
        o["resultaat"] = lees_resultaat(args.resultaat_json)
    schrijf_json(br.OPDRACHTEN_PATH, opdrachten)
    print(f"{args.id}: opdracht {args.status}")


def cmd_uitvoerbaar(args):
    bestaande_actie(args.id)
    data = br.load_uitvoerbaar()
    data[args.id] = {"claude": args.claude, "wat_claude_doet": br.normalize(args.claude_doet),
                     "wat_jij_doet": br.normalize(args.jij_doet), "beoordeeld": nu().date().isoformat()}
    schrijf_json(br.UITVOERBAAR_PATH, data)
    print(f"{args.id}: uitvoerbaar = {args.claude}")


def cmd_kans(args):
    notities = br.load_notes({})
    if args.id not in {k["id"] for n in notities for k in n["kansen"]}:
        raise Fout(f"onbekende kans {args.id} — niets geschreven")
    beheer = br.load_beheer()
    item = {"status": args.status, "door": args.door, "ts": nu().isoformat()}
    if args.notitie:
        item["notitie"] = br.normalize(args.notitie)
    beheer["kansen"][args.id] = item
    schrijf_json(br.BEHEER_PATH, beheer)
    print(f"{args.id}: kans {args.status}")


# ── Hoofdprogramma ─────────────────────────────────────────────────────────────
def main(argv) -> int:
    for stream in (sys.stdout, sys.stderr):  # Windows-console is vaak cp1252
        try:
            stream.reconfigure(encoding="utf-8", errors="replace")
        except (AttributeError, ValueError):
            pass
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = p.add_subparsers(dest="cmd", required=True)
    sub.add_parser("open").set_defaults(fn=cmd_open)
    sub.add_parser("start").set_defaults(fn=cmd_start)
    r = sub.add_parser("resultaat")
    r.add_argument("id")
    r.add_argument("--uitkomst", required=True, choices=br.UITKOMSTEN)
    r.add_argument("--methode", required=True, choices=br.METHODEN)
    r.add_argument("--controle", required=True)
    r.add_argument("--bewijs", required=True)
    r.add_argument("--dubbel-van", default="")
    r.set_defaults(fn=cmd_resultaat)
    k = sub.add_parser("kop")
    k.add_argument("--door", default="actiecontrole", help="naam tussen haakjes achter de datum")
    k.set_defaults(fn=cmd_kop)
    o = sub.add_parser("opruimen")
    o.add_argument("--altijd", action="store_true", help="ook draaien als het geen zondag is")
    o.set_defaults(fn=cmd_opruimen)
    i = sub.add_parser("importeer", help="dashboard-docs (ArtifactData out_dir) naar de vault")
    i.add_argument("map")
    i.add_argument("--door", required=True, help="naam van de routine, voor de kop en sync.json")
    i.set_defaults(fn=cmd_importeer)
    b = sub.add_parser("beheer", help="eigenaar, uitstel, niet doen of prioriteit van een actie")
    b.add_argument("id")
    b.add_argument("--eigenaar")
    b.add_argument("--uitgesteld-tot")
    b.add_argument("--prioriteit")
    b.add_argument("--niet-doen", metavar="REDEN")
    b.add_argument("--wel-doen", action="store_true", help="niet_doen weghalen")
    b.add_argument("--door", default="claude")
    b.set_defaults(fn=cmd_beheer)
    od = sub.add_parser("opdracht", help="status van een goedgekeurde opdracht bijwerken")
    od.add_argument("id", help="actie-id (= opdracht-id)")
    od.add_argument("--status", required=True, choices=br.OPDRACHT_STATUS)
    od.add_argument("--resultaat-json", help="JSON of @bestand")
    od.add_argument("--door", default="claude")
    od.set_defaults(fn=cmd_opdracht)
    u = sub.add_parser("uitvoerbaar", help="kan Claude deze actie doen? (eenmalig per actie)")
    u.add_argument("id")
    u.add_argument("--claude", required=True, choices=br.UITVOERBAAR_WAARDEN)
    u.add_argument("--claude-doet", required=True)
    u.add_argument("--jij-doet", required=True)
    u.set_defaults(fn=cmd_uitvoerbaar)
    kn = sub.add_parser("kans", help="een kans oppakken, parkeren of afwijzen")
    kn.add_argument("id")
    kn.add_argument("--status", required=True, choices=br.KANS_STATUS)
    kn.add_argument("--notitie", default="")
    kn.add_argument("--door", default="claude")
    kn.set_defaults(fn=cmd_kans)
    args = p.parse_args(argv)
    try:
        args.fn(args)
    except (Fout, br.BuildError, OSError) as e:
        print(f"FOUT: {e}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
