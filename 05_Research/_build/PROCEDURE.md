# PROCEDURE — Research registreren en synchroniseren

> Eén bron, drie afnemers: de commands `/research-nieuw` en `/research-sync`, de lokale routines (`higrip-growth-radar`, `higrip-seo-regressiecheck`) en de Denzel-weekroutine verwijzen hiernaar met "lees en volg PROCEDURE.md". Wijzig de procedure hier, nergens anders.
>
> **De vault is de waarheid.** Het dashboard (https://claude.ai/artifact/KVXyNSCNEbKcj2EQGqkpuV) toont het gebouwde register; wat mensen daar afvinken, wijzigen of noteren komt via stap B terug in de vault.

## Vaste paden

| Wat | Pad |
|---|---|
| Vault | `C:\Users\Test\OneDrive\Documents\HI-Grip-Vault-` — branch `HÏ-Grip-Vault-obsidian` (er is geen `main`) |
| Notities | `05_Research\<id>.md` — `id` = `JJJJ-MM-DD-slug` |
| Build | `python 05_Research\_build\build_register.py` (`--check` = alleen valideren) → `05_Research\_build\register.js` |
| Dashboard-bron | `05_Research\_dashboard\index.html` (canoniek — nooit terugwerken vanuit het gelezen artifact) |
| Backlog (fase 1) | `C:\Users\Test\.claude\research\growth-radar\ACTIEBACKLOG.md` — fase 2: verhuist naar de vault, dan alleen `BACKLOG_PATH` in het buildscript aanpassen |
| Dashboard-URL | https://claude.ai/artifact/KVXyNSCNEbKcj2EQGqkpuV |

## Notitieformaat

```yaml
---
id: 2026-09-15-seo-audit
titel: "SEO-audit higrip.nl — september 2026"
datum: 2026-09-15
bron: los                # los | routine
routine: ""              # growth-radar | seo-regressiecheck | denzel-week | seo-conversietest | "" bij los
categorie: SEO           # SEO | CRO | Social | Product | B2B | Merk | Compliance | Techniek
status: nieuw            # nieuw | bekeken | in-uitvoering | verwerkt | gearchiveerd
prioriteit: P1           # P1 | P2 | P3
samenvatting: "Twee zinnen. Wat is gevonden en wat betekent het voor higrip.nl."
gerelateerd: []          # lijst van ids
vervangt: []             # lijst van ids die door deze notitie achterhaald zijn
bronbestand: "C:\\pad\\naar\\origineel.md"   # pad of URL, "" als geen (backslashes dubbel)
deadline: ""             # JJJJ-MM-DD of ""
---
# Titel
## In het kort
## Bevindingen
## Acties
- [ ] P1 · Actietekst — één regel
- [x] P2 · Afgeronde actie
## Bronnen
## Aantekeningen
```

Regels: platte keys, strings tussen dubbele aanhalingstekens, lijsten inline `[a, b]`. Wikilinks `[[Notitienaam]]` zijn gewenst — de build zet ze om naar GitHub-links. Acties uitsluitend in het formaat `- [ ] P? · tekst`; het actie-id is `<note-id>#<8 hex sha1 van de genormaliseerde tekst>` en verandert dus als je de tekst wijzigt. `## Aantekeningen` wordt door de sync gevuld als `- **Naam · JJJJ-MM-DD HH:MM** — tekst`.

**Backlog-items niet kopiëren** naar notities — die komen via de backlog-parser binnen (`backlog#<8 hex van de kop>`).

---

## A. Nieuw onderzoek registreren

Verplicht na élk onderzoek: een routine-run óf een losse vraag (bijv. "TikTok Shop-optimalisatie", een audit, een concurrentieanalyse). Naslag of procedure zonder gedateerde bevindingen is geen onderzoek.

1. **Eerst B draaien** (dashboard-wijzigingen ophalen) zodat je op de actuele staat werkt.
2. **Notitie aanmaken** volgens het formaat, met de volledige inhoud: bevindingen, redenering, bronnen, acties met P-code. `bronbestand` = het origineel als dat er is (rapport, memory-bestand, artifact-URL).
3. **Verbanden verwerken**: zoek notities in dezelfde categorie of met dezelfde onderwerpen (`grep -il` op `05_Research\*.md`). Vul `gerelateerd` in **beide richtingen**. Is een oudere notitie achterhaald → zet haar id in `vervangt`, zet haar `status: gearchiveerd`, en vink vervallen acties in die oudere notitie af met één regel waarom (`- [x] P2 · … — vervallen: <reden>`).
4. **Build**: `python 05_Research\_build\build_register.py` — moet exit 0 geven. Fout → repareer de notitie, niet het script.
5. **Publiceren**: `Artifact read` op de dashboard-URL, dan `Artifact list scope:files` op die URL, dan `Artifact publish` met `url` = dashboard-URL, `file_path` = `05_Research\_dashboard\index.html`, `files: {"data/register.js": "05_Research/_build/register.js"}`. Geen `capabilities`/`favicon` meegeven (blijven behouden). Publish-conflict → stoppen en melden.
6. **Commit**: `git add 05_Research` (+ andere aangeraakte notities) → `git commit -m "research: <id> geregistreerd"` → `git push`.
7. **Afsluiten** met één regel: wat geregistreerd, hoeveel verbanden bijgewerkt, dashboard-URL.

---

## B. Dashboard-wijzigingen naar de vault (`/research-sync`)

Ook stap 1 van A en het slot van elke routine.

1. **Ophalen**: laad `ArtifactData` via ToolSearch en doe `list` op de collecties `status`, `checks` en `aantekeningen` van de dashboard-URL. Doc-vormen:
   - `status/{noteId}` → `{status, naam, ts}`
   - `checks/{actionId met # als ~}` → `{actionId, afgevinkt, naam, ts}` — `backlog~…` hoort bij `ACTIEBACKLOG.md`
   - `aantekeningen/{noteId}_{ms}` → `{noteId, naam, ts, tekst}`
2. **Toepassen**, per doc:
   - status → `status:` in de frontmatter van `05_Research\{noteId}.md`.
   - check → zoek de actie **op actie-id** (herbereken: sha1 van de genormaliseerde tekst, eerste 8 hex), nooit op positie; zet `[ ]`↔`[x]` in de notitie of in `ACTIEBACKLOG.md` (`### [ ]`/`### [x]`). Onvindbaar id (tekst gewijzigd) → melden, niet gokken, doc laten staan.
   - aantekening → regel toevoegen onder `## Aantekeningen`: `- **Naam · JJJJ-MM-DD HH:MM** — tekst` (tijd in Europe/Amsterdam). Tekst letterlijk overnemen, geen markdown-opmaak toevoegen.
   - **Conflictregel**: is het bronbestand ná de override-`ts` gewijzigd (`git log -1 --format=%cI -- <bestand>` en werkboomstatus), dan wint de vault: override niet toepassen, wél in het rapport melden.
3. **Opruimen**: verwijder de verwerkte docs uit de db (`delete`); genegeerde/onvindbare docs blijven staan en worden gemeld.
4. **Build → publish → commit** `research: sync dashboard → vault (n wijzigingen)` → push (zelfde stappen als A4–A6).
5. **Rapport**: aantallen per type (status/check/aantekening), conflicten, genegeerde overrides, onvindbare actie-id's.

Geen docs in de db → alleen dat melden; geen build of publish nodig tenzij de notities zelf gewijzigd zijn.

---

## Wie doet wat

| Afnemer | Wat |
|---|---|
| `/research-nieuw <titel>` | voert A uit; vraagt alleen wat niet uit de sessie af te leiden is |
| `/research-sync` | voert B uit |
| `higrip-growth-radar` (dagelijks) | stap 5E: dagrapport óók als notitie `JJJJ-MM-DD-growth-radar-<focus>` (`bron: routine`, `routine: growth-radar`), daarna A4–A6 en B. Zondag: alleen B + build + publish |
| `higrip-seo-regressiecheck` (maandag) | zelfde patroon, id `JJJJ-MM-DD-regressiecheck`, `routine: seo-regressiecheck` |
| Denzel-weekroutine (cloud, maandag) | schrijft het weekoverzicht als `05_Research\JJJJ-MM-DD-weekoverzicht.md` (`routine: denzel-week`), voert A3, A4 en A6 uit — **geen publish** (dat doet de dagelijkse lokale routine) |
| `website-seo-en-cconversietest` (wekelijks) | id `JJJJ-MM-DD-seo-conversietest-run-<n>`, `routine: seo-conversietest`; volledig rapport staat in de verborgen Shopify-pagina `seo-routine-logboek`, daarna A3–A6 |
| Stop-hook `research-check.py` | vangnet: meldt niet-gecommitte wijzigingen in `05_Research` bij het einde van een sessie |
