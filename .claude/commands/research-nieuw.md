---
description: Registreert een afgerond HÏ Grip-onderzoek als notitie in 05_Research, legt verbanden, bouwt het register, publiceert het Research Dashboard en commit. Gebruik direct na elk onderzoek (routine of losse vraag), met de titel van de notitie als argument.
argument-hint: <titel van de notitie>
---

Je registreert een afgerond onderzoek voor HÏ Grip in de vault. Titel: `$ARGUMENTS`. Ontbreekt de titel, vraag er dan om.

**Lees en volg `05_Research/_build/PROCEDURE.md`, sectie A.** Begin met sectie B (`/research-sync`). De dashboard-URL staat in `CLAUDE.md` (§1).

Afleiden, niet vragen:
- `datum` = vandaag; `id` = `JJJJ-MM-DD-<slug van de titel>`.
- `bron`/`routine`: `los`, tenzij je in een routine draait.
- `categorie`, `prioriteit`, `samenvatting`, bevindingen, bronnen en acties: uit het onderzoek dat je net deed.
- `bronbestand`: het rapport of artifact waar het onderzoek al stond, anders `""`.
- `gerelateerd`/`vervangt`: door bestaande notities in `05_Research/` te doorzoeken.

Alleen vragen wat niet af te leiden is: een onduidelijke deadline, of een oudere notitie echt achterhaald is.

Grenzen:
- Backlog-items uit `ACTIEBACKLOG.md` niet naar de notitie kopiëren. Acties alleen als `- [ ] P? · tekst`.
- Geen acties uit oudere notities overnemen (nieuw id = vinkje kwijt, zie PROCEDURE A3).
- Nooit een notitie verwijderen; achterhaald = `status: gearchiveerd`.
- `build_register.py` moet exit 0 geven vóór publiceren.
- De vaultkopie van `index.html` is canoniek; werk nooit terug vanuit het gelezen artifact.
- Publish-conflict of geweigerde push → stoppen en melden.
- Kan dit account niet publiceren (dashboard is van info@)? Registreer en commit dan wel; het dashboard wordt bij de volgende routine-run bijgewerkt. Meld dat.

Afsluiting: één regel met welke notitie, hoeveel verbanden en de dashboard-URL.
