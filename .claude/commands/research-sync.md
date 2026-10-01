---
description: Zet wat mensen op het HÏ Grip Research Dashboard deden (vinkjes, status, aantekeningen, beheer, nieuwe acties, opdrachten, kansen) in de vault, ruimt de database op, bouwt en publiceert het dashboard en commit. Gebruik bij "nog niet in vault", aan het begin van /research-nieuw of aan het eind van een routine.
---

Je synchroniseert het HÏ Grip Research Dashboard naar de vault.

**Lees en volg `05_Research/_build/PROCEDURE.md`, sectie B.** Die procedure is de bron; dit command herhaalt haar niet. De dashboard-URL staat in `CLAUDE.md` (§1).

Kort:
1. `ArtifactData` laden via ToolSearch → `list` op alle 7 collecties (`status`, `checks`, `aantekeningen`, `beheer`, `nieuwe_acties`, `opdrachten`, `kansen`) met `query: {limit: 1000}` en `out_dir` in een tijdelijke map buiten de vault.
2. `python 05_Research/_tools/acties.py importeer <out_dir> --door <naam>`. Nooit met de hand toepassen.
3. Precies de docs uit `te_verwijderen` verwijderen met `ArtifactData batch`. De bestandsnaam op schijf kan afwijken van het doc-id (`~` in het id); gebruik het id uit het `list`-resultaat.
4. Build → publish → commit `research: sync dashboard → vault (<n> wijzigingen)` → `git pull --rebase` → push naar `HÏ-Grip-Vault-obsidian` (PROCEDURE A4–A6).

Grenzen:
- Geen docs in de db → melden en stoppen (geen lege build, publish of commit).
- Geeft `ArtifactData` "no access" of "another organization"? Dan werk je op een account dat niet de eigenaar van het dashboard is. Stop en meld het: syncen kan alleen vanaf info@.
- Publish-conflict of geweigerde push → stoppen en melden, niet forceren.

Rapport: aantal toegepast per collectie, overgeslagen docs met reden, commit-hash.
