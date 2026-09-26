# PROCEDURE — Research registreren en synchroniseren

> Eén bron voor alle afnemers: de commands `/research-nieuw` en `/research-sync` en alle routines in `04_Agent_Infrastructuur\Routines\` verwijzen hiernaar met "lees en volg PROCEDURE.md". Wijzig de procedure hier, nergens anders.
>
> **De vault is de waarheid.** Het dashboard (https://claude.ai/artifact/KVXyNSCNEbKcj2EQGqkpuV) toont het gebouwde register; wat mensen daar afvinken, wijzigen, noteren, goedkeuren of toevoegen komt via stap B terug in de vault.

## Vaste paden

| Wat | Pad |
|---|---|
| Vault | `C:\Users\Test\OneDrive\Documents\HI-Grip-Vault-` — branch `HÏ-Grip-Vault-obsidian` (er is geen `main`) |
| Notities | `05_Research\<id>.md` — `id` = `JJJJ-MM-DD-slug` |
| Build | `python 05_Research\_build\build_register.py` (`--check` = alleen valideren) → `05_Research\_build\register.js` |
| Dashboard-bron | `05_Research\_dashboard\index.html` (canoniek — nooit terugwerken vanuit het gelezen artifact) |
| Backlog | `05_Research\_backlog\ACTIEBACKLOG.md` (+ `AFGEROND.md`, en `CONTROLE.json` van de actiecontrole, zie C) — sinds 25-09-2026 in de vault, één backlog voor alle routines |
| Dashboardwerk | `05_Research\_backlog\BEHEER.json`, `OPDRACHTEN.json`, `UITVOERBAAR.json` — alleen via `acties.py`, zie D |
| Dashboardcijfers | `05_Research\_data\*.json` — zie D1 |
| Uitvoer van opdrachten | `05_Research\_uitvoer\<actie-id met # als ~>\` — concepten van de Uitvoerder |
| Geheugen routines | `05_Research\_geheugen\<routine>.md` — regels in `_geheugen\README.md` |
| Feiten | `00_Brand_Core\Feiten & Actuele Staat.md` — prijzen, handles, URL's, ID's, claims; nooit in prompts |
| Routine-prompts | `04_Agent_Infrastructuur\Routines\` — rolverdeling in `README.md` |
| Dashboard-URL | https://claude.ai/artifact/KVXyNSCNEbKcj2EQGqkpuV |

## Notitieformaat

```yaml
---
id: 2026-09-15-seo-audit
titel: "SEO-audit higrip.nl — september 2026"
kerntitel: "Productpagina mist schema en rankt op een oude URL"   # optioneel, max 90 tekens
datum: 2026-09-15
bron: los                # los | routine
routine: ""              # growth-radar | seo-regressiecheck | denzel-week | seo-conversietest | search-console | backlinks-merchant | concurrentie | klantstem | productradar | materialen | website-ux | verbanden | "" bij los
categorie: SEO           # SEO | CRO | Social | Product | B2B | Merk | Compliance | Techniek
status: nieuw            # nieuw | bekeken | in-uitvoering | verwerkt | gearchiveerd
prioriteit: P1           # P1 | P2 | P3
samenvatting: "Twee zinnen. De eerste is de belangrijkste conclusie, de tweede wat het betekent voor higrip.nl."
gerelateerd: []          # lijst van ids
vervangt: []             # lijst van ids die door deze notitie achterhaald zijn
bronbestand: "C:\\pad\\naar\\origineel.md"   # pad of URL, "" als geen (backslashes dubbel)
deadline: ""             # JJJJ-MM-DD of ""
---
# Titel
## In het kort
## Kerncijfers
- **139** · Klikken (28 dagen) · +139,7%
- **8,4** · Gemiddelde positie
## Acties
- [ ] P1 · Actietekst — één regel
- [ ] P1 · Besluit: beslissing voor Lars — één regel
- [x] P2 · Afgeronde actie
## Kansen
- [K] Kans in één zin · impact: hoog · bewijs: 2026-09-25-search-console, 2026-09-15-seo-audit · stap: eerste stap in één zin
## Bevindingen
### Per bevinding een kop
## Wat niet lukte
## Bronnen
## Aantekeningen
```

Regels: platte keys, strings tussen dubbele aanhalingstekens, lijsten inline `[a, b]`. Wikilinks `[[Notitienaam]]` zijn gewenst — de build zet ze om naar GitHub-links. Acties uitsluitend in het formaat `- [ ] P? · tekst`; het actie-id is `<note-id>#<8 hex sha1 van de genormaliseerde tekst>` en verandert dus als je de tekst wijzigt (afvinken, `[ ]`↔`[x]`, verandert het id niet). `## Aantekeningen` wordt door de sync gevuld als `- **Naam · JJJJ-MM-DD HH:MM** — tekst`.

Sjabloon voor nieuwe notities (sinds 25-09-2026; oudere notities blijven geldig):
- **`kerntitel`** (optioneel): de bevinding in maximaal 90 tekens, zonder reeksnaam of datum. Langer = buildfout. Het dashboard toont de notitie als reeksnaam + volgnummer (bijv. "Search Console 01") met de kerntitel eronder; zonder kerntitel valt het terug op de titel.
- **`samenvatting`:** de eerste zin is de belangrijkste conclusie. Het dashboard markeert die zin.
- **`## Kerncijfers`** (optioneel): 2–4 regels `- **<waarde>** · <label> · <verschil>`, verschil mag weg. Alleen echte, gemeten cijfers; heb je die niet, laat de sectie dan weg. Een regel die niet in dit formaat past, of een lege sectie, geeft een buildfout.
- **Volgorde:** `## In het kort` → `## Kerncijfers` → `## Acties` → `## Kansen` → `## Bevindingen` (een `###` per bevinding) → `## Wat niet lukte` → `## Bronnen` → `## Aantekeningen`.
- **Besluiten:** een actie die een beslissing van Lars vraagt, begint met `Besluit:` (`- [ ] P1 · Besluit: …`). Het dashboard toont die apart; alle acties uit het Denzel-weekoverzicht gelden als besluit.
- **`## Kansen`** (optioneel, alleen Verbanden & kansen): exact formaat en regels in D4. Een regel die niet past, geeft een buildfout.
- **`## Wat niet lukte`** (optioneel): wat niet lukte en waarom (geen toegang, tool faalde, bron onbereikbaar), in platte tekst. Het dashboard toont de eerste 400 tekens. Alles ging goed? Laat de sectie weg.

**Backlog-items niet kopiëren** naar notities — die komen via de backlog-parser binnen (`backlog#<8 hex van de kop>`).

---

## A. Nieuw onderzoek registreren

Verplicht na élk onderzoek: een routine-run óf een losse vraag (bijv. "TikTok Shop-optimalisatie", een audit, een concurrentieanalyse). Naslag of procedure zonder gedateerde bevindingen is geen onderzoek.

1. **Eerst B draaien** (dashboard-wijzigingen ophalen) zodat je op de actuele staat werkt. Routines lezen daarnaast eerst hun geheugen (`_geheugen\`) en het feitenbestand, en schrijven hun geheugen aan het eind bij.
2. **Notitie aanmaken** volgens het formaat, met de volledige inhoud: bevindingen, redenering, bronnen, acties met P-code. `bronbestand` = het origineel als dat er is (rapport, memory-bestand, artifact-URL).
3. **Verbanden verwerken**: zoek notities in dezelfde categorie of met dezelfde onderwerpen (`grep -il` op `05_Research\*.md`). Vul `gerelateerd` in **beide richtingen**. Is een oudere notitie achterhaald → zet haar id in `vervangt` en zet haar `status: gearchiveerd`. Vink haar acties niet af en wijzig hun tekst niet: acties uit gearchiveerde notities tellen niet mee in de actiecontrole en op het dashboard. Nog geldige acties neem je over in de nieuwe notitie.
4. **Build**: `python 05_Research\_build\build_register.py` — moet exit 0 geven. Fout → repareer de notitie, niet het script.
5. **Publiceren**: `Artifact read` op de dashboard-URL, dan `Artifact list scope:files` op die URL, dan `Artifact publish` met `url` = dashboard-URL, `file_path` = `05_Research\_dashboard\index.html`, `files: {"data/register.js": "05_Research/_build/register.js"}`. Geen `capabilities`/`favicon` meegeven (blijven behouden). Publish-conflict → stoppen en melden.
6. **Commit**: `git add 05_Research` (+ andere aangeraakte notities) → `git commit -m "research: <id> geregistreerd"` → `git pull --rebase origin HÏ-Grip-Vault-obsidian` → `git push origin HEAD:HÏ-Grip-Vault-obsidian`. **Nooit** alleen naar een `claude/...`-branch pushen: dan mist de vault het werk en verdwijnt het bij de volgende build van het dashboard.
7. **Afsluiten** met één regel: wat geregistreerd, hoeveel verbanden bijgewerkt, dashboard-URL.

---

## B. Dashboard naar de vault (`/research-sync`)

Ook stap 1 van A en het slot van elke routine. Het dashboard schrijft alleen wensen in zijn eigen database; `acties.py importeer` past ze deterministisch toe. Nooit met de hand toepassen.

1. **Ophalen**: laad `ArtifactData` via ToolSearch. Doe voor elk van de 7 collecties `list` op de dashboard-URL met `query: {limit: 1000}` en `out_dir` = een tijdelijke map buiten de vault (bijv. `/tmp/sync/db`). Elk doc komt in `<out_dir>/<collectie>/<doc_id>.json`. Geeft een resultaat `next_cursor`, haal dan de volgende pagina op.

   | Collectie / doc-id | Velden | Wordt in de vault |
   |---|---|---|
   | `status/{noteId}` | `status, naam, ts` | `status:` in de frontmatter |
   | `checks/{actionId met # als ~}` | `actionId, afgevinkt, naam, ts` | `[ ]`↔`[x]` in de notitie of `ACTIEBACKLOG.md`, gezocht op actie-id |
   | `aantekeningen/{noteId}_{ms}` | `noteId, naam, ts, tekst` | regel `- **Naam · JJJJ-MM-DD HH:MM** — tekst` onder `## Aantekeningen` |
   | `beheer/{actionId met # als ~}` | `actionId, eigenaar?, uitgesteld_tot?, niet_doen?: {reden}\|null, prioriteit?, naam, ts` | `BEHEER.json` → `acties` |
   | `nieuwe_acties/{ms}` | `kop, prioriteit, wat, waarom, naam, ts` | nieuw `### [ ]`-punt in `ACTIEBACKLOG.md` onder de gekozen P, met **Wat**, **Waarom** en **Gevonden op:** dashboard, naam, datum |
   | `opdrachten/{actionId met # als ~}` | `actionId, titel, toelichting, status: goedgekeurd\|ingetrokken, naam, ts` | `OPDRACHTEN.json` (`goedgekeurd`; intrekken = `geweigerd`) |
   | `kansen/{kansId met # als ~}` | `kansId, status, notitie?, naam, ts` | `BEHEER.json` → `kansen` |

2. **Toepassen**: `python 05_Research/_tools/acties.py importeer <out_dir> --door <routine of naam>`. Uitvoer: JSON `{"toegepast": [...], "te_verwijderen": ["collectie/doc_id", ...], "overgeslagen": [{"doc", "reden"}]}`. Het script schrijft ook `_data/sync.json` en werkt de backlogkop bij als er nieuwe acties zijn. Idempotent: twee keer draaien kan geen kwaad.
   - **Conflictregel:** is de betreffende regel in de vault (of het item in `BEHEER.json`/`OPDRACHTEN.json`) ná de `ts` van het doc gewijzigd, dan wint de vault. Het doc gaat weg en staat met reden in `overgeslagen`.
   - Een onvindbaar actie-id (tekst intussen gewijzigd) of een ongeldig doc blijft in de db staan en staat in `overgeslagen`.
3. **Opruimen**: verwijder precies `te_verwijderen` met `ArtifactData batch` (`op: delete`, max 50 per batch). Niets anders verwijderen.
4. **Build → publish → commit** `research: sync dashboard → vault (<n> wijzigingen)` → push (A4–A6). Een routine die toch al bouwt, doet dit één keer aan het eind.
5. **Rapport**: aantal toegepast per collectie, en elk overgeslagen doc met de reden.

Geen docs in de db, of niets toegepast → alleen dat melden; geen build of publish nodig tenzij de notities zelf gewijzigd zijn.

---

## C. Actiecontrole (`CONTROLE.json` en `acties.py`)

Elke ochtend om 05:00 controleert de routine **Actiecontrole** (`04_Agent_Infrastructuur\Routines\Actiecontrole.md`) alle open acties, uit de backlog en uit niet-gearchiveerde notities: zijn ze gedaan? Dat is boekhouding, geen onderzoek, dus er komt geen notitie.

- **`05_Research\_backlog\CONTROLE.json`**: per actie-id de laatste uitkomst (`gedaan` | `open` | `handmatig` | `dubbel`) met methode, wat er gecontroleerd is, het bewijs en de datum, plus `laatste_run` en de laatste 14 runs. Alleen de actiecontrole schrijft dit bestand, via `acties.py`, nooit met de hand. De build zet de uitkomst als `controle` op elke actie in het register.
- **`python 05_Research\_tools\acties.py`**: `open` (alle open acties als JSON), `start`, `resultaat <id> …`, `kop` (datum- en tellerregel bovenaan de backlog), `opruimen` (zondag: `[x]`-punten naar `AFGEROND.md`), en voor het dashboard `importeer`, `beheer`, `opdracht`, `uitvoerbaar` en `kans` (zie B en D). Het gebruik staat bovenaan het script.

Regels:
1. **Afvinken doet alleen de actiecontrole** (bij `gedaan`, met bewijs) **of een mens** (via het dashboard en stap B, of in de vault). `acties.py` zet dan `[ ]` → `[x]`, en bij een backlogpunt de regel `**Bevestigd:** <datum> door actiecontrole — <bewijs>` onder de kop.
2. `handmatig` (mensenwerk) wordt nooit automatisch afgevinkt. `dubbel` wijzigt de bron niet: het dashboard verbergt de actie en toont "zie <ander>".
3. **Andere routines** lezen `CONTROLE.json` (en `AFGEROND.md`) vóór ze acties voorstellen. Ze stellen niets voor wat daar als gedaan of dubbel staat, controleren bestaande acties niet opnieuw en vinken niets af. Wie backlogpunten toevoegt, draait daarna `acties.py kop --door <routine>`.
4. **Kop en actietekst niet aanpassen** om iets bij te werken. Die bepalen het id: een nieuwe kop is een nieuw id, en dan begint de controle opnieuw. Updates horen in de body van een backlogpunt, met datum.

---

## D. Werken vanuit het dashboard: data, beheer, opdrachten en kansen

### D1. Datamap `05_Research\_data\`
Alle bestanden zijn UTF-8 JSON met indent 1. Ontbreekt een bestand, dan is het veld in het register `null` en toont het dashboard "nog geen data"; dat is geen fout.

| Bestand | Schrijver | Wanneer | Inhoud |
|---|---|---|---|
| `instellingen.json` | een mens | bij wijziging | doelen per jaar, kernwoorden (uit het feitenbestand), agenda-ID, Merchant-account-ID, team |
| `kpi.json` | `google_data.py dashboard` | Actiecontrole, dagelijks | 12 ISO-weken GA4 + Search Console (laatste = lopende week t/m gisteren) en de posities van de kernwoorden |
| `agenda.json` | idem | idem | komende 14 dagen uit de agenda, of `status: niet_gekoppeld` met uitleg |
| `cwv.json` | idem, of `google_data.py cwv` | idem, en Website-UX | PageSpeed mobiel: score, LCP, INP, CLS voor homepage, productpagina en een collectie |
| `koppelingen.json` | idem | idem | per bron (Google, connectors) de status en hoe je hem koppelt |
| `shopify.json` | Actiecontrole via de Shopify-connector | dagelijks | orders en omzet per dag (90 dagen) en sinds 1 januari; alleen totalen, nooit klantgegevens |
| `sync.json` | `acties.py importeer` | bij elke sync | tijdstip, door wie, aantal toegepast en overgeslagen |

`google_data.py dashboard` laat elk onderdeel los falen (status in het bestand) en geeft alleen exit 1 als alles faalt.

### D2. Vaultbestanden voor dashboardwerk (alleen via `acties.py`)
- **`_backlog\BEHEER.json`**: `{"acties": {"<actie-id>": {eigenaar?, uitgesteld_tot?, niet_doen?: {reden, door, datum}, prioriteit?, door, ts}}, "kansen": {"<kans-id>": {status: oppakken|parkeren|afwijzen, door, ts, notitie?}}}`. Schrijvers: `importeer`, `beheer`, `kans`. De build zet `beheer` en `prioriteit_effectief` op elke actie.
- **`_backlog\OPDRACHTEN.json`**: `{"<actie-id>": {actie_id, titel, toelichting, aangevraagd_door, goedgekeurd_door, goedgekeurd_ts, status, resultaat?: {samenvatting, links: [{label, url}], voor_mens}, bijgewerkt}}`. Status: `goedgekeurd` → `bezig` → `klaar` | `mislukt`, of `geweigerd` (buiten de grenzen of ingetrokken). Schrijvers: `importeer` (goedkeuren, intrekken) en de Uitvoerder met `acties.py opdracht <id> --status … [--resultaat-json @bestand]`.
- **`_backlog\UITVOERBAAR.json`**: `{"<actie-id>": {claude: ja|deels|nee, wat_claude_doet, wat_jij_doet, beoordeeld}}`. De Actiecontrole beoordeelt elke actie één keer (`acties.py uitvoerbaar`); een gewijzigde tekst is een nieuw id en dus een nieuwe beoordeling.
  **Grens:** Claude mag concepten maken (tekst, meta's, code in het testthema, e-mailconcepten, onderzoek, bestanden in de vault), maar zet nooit iets live, verstuurt niets en wijzigt geen prijzen, kortingen, voorraad, bestellingen of checkout. Live zetten of versturen staat altijd in `wat_jij_doet`.
  `ja` = Claude doet het hele werk binnen de grens, de mens controleert en zet live. `deels` = Claude bereidt een wezenlijk deel voor, er is meer mensenwerk nodig dan goedkeuren. `nee` = puur mensenwerk of buiten de grens.

### D3. De opdrachtenstroom
Dashboard "Laat Claude dit doen" (alleen bij `ja`/`deels`) → doc in `opdrachten` → sync → `OPDRACHTEN.json` `goedgekeurd` → **Uitvoerder** (dagelijks 06:15, max 5) → `bezig` → concepten in `05_Research\_uitvoer\<actie-id met # als ~>\`, code alleen in het testthema → `klaar`/`mislukt`/`geweigerd` met resultaat → build → dashboard. De Uitvoerder vinkt niets af: de Actiecontrole controleert de volgende ochtend of de actie gedaan is.

### D4. Het formaat van `## Kansen`
Alleen Verbanden & kansen schrijft deze sectie. Eén regel per kans, exact:
```
- [K] <titel> · impact: hoog|middel|laag · bewijs: <note-id>, <note-id> · stap: <eerste stap>
```
- `id` = `<note-id>#k<8 hex sha1 van de titel>`; een andere titel is een ander id.
- Elke regel onder `## Kansen` die niet past, geeft een buildfout. Een onbekend note-id in `bewijs` ook.
- Titel en stap bevatten zelf geen ` · `. Twee kansen met dezelfde titel in één notitie mag niet.
- De status (oppakken, parkeren, afwijzen) zet een mens op het dashboard; die komt in `BEHEER.json` → `kansen`. Afgewezen kansen komen niet terug; opgepakte kansen zet Verbanden & kansen als backlogpunt `[kans]`.

---

## Wie doet wat

| Afnemer | Wat |
|---|---|
| `/research-nieuw <titel>` | voert A uit; vraagt alleen wat niet uit de sessie af te leiden is |
| `/research-sync` | voert B uit |
| Actiecontrole (dagelijks 05:00) | B1–B3, dan C: `acties.py start` → `open` → `resultaat` per actie → `opruimen` (zondag) → `kop`; daarna `uitvoerbaar` voor nieuwe acties, `google_data.py dashboard` en `_data/shopify.json`, en A4–A6 met commit `controle: <n> afgevinkt, <m> open`. Geen notitie |
| Growth Radar (dagelijks 05:30) | notitie `JJJJ-MM-DD-growth-radar-<focus>`, daarna B, A3–A6. Zondag: alleen B + build + publish |
| Uitvoerder (dagelijks 06:15) | B1–B3, dan de goedgekeurde opdrachten (D3), daarna A4–A6 met commit `uitvoerder: …`. Geen notitie per opdracht |
| SEO-regressiecheck (maandag) | notitie `JJJJ-MM-DD-regressiecheck` (`routine: seo-regressiecheck`), daarna A3–A6 |
| Denzel-weekoverzicht (maandag) | notitie `JJJJ-MM-DD-weekoverzicht` (`routine: denzel-week`), besluiten als `Besluit:`, daarna A3–A6 |
| SEO- en conversietest (maandag) | notitie `JJJJ-MM-DD-seo-conversietest-run-<n>`; volledig rapport in de verborgen Shopify-pagina `seo-routine-logboek`, daarna A3–A6 |
| Search Console & rankings (woensdag) | notitie `JJJJ-MM-DD-search-console`, daarna B, A3–A6 |
| Verbanden & kansen (zaterdag) | notitie `JJJJ-MM-DD-verbanden` (1e zaterdag: `-verbanden-maand`) met `## Kansen` (D4), `gerelateerd` in beide richtingen, daarna B, A4–A6 |
| Klantstem, Website-UX, Productradar, Concurrentie-monitor, Materialen & productie, Backlinks & Merchant Center | notitie `JJJJ-MM-DD-<routine-key>`, daarna B, A3–A6. Starten met een guard (geheugen: vorige run < 10 of < 25 dagen → overgeslagen) |
| Stop-hook `research-check.py` | vangnet: meldt niet-gecommitte wijzigingen in `05_Research` bij het einde van een sessie |
