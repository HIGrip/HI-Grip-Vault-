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

Alleen 'gedaan' vinkt af in de bron; de actie wordt gezocht op id (hash opnieuw berekend), nooit
op positie. Tekst en kop blijven ongewijzigd, dus het id ook.
Testen zonder de echte vault te raken: kopieer 05_Research naar <tmp>/vault/05_Research en draai
daar de kopie van dit script; alle paden volgen dan de kopie.
"""

import argparse
import json
import sys
from datetime import date, datetime
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
    args = p.parse_args(argv)
    try:
        args.fn(args)
    except (Fout, br.BuildError) as e:
        print(f"FOUT: {e}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
