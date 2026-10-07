---
id: 2026-10-02-obsidian-structuur-ai-agents
titel: "Obsidian-structuren voor AI-agents en onze vault ernaast gelegd"
kerntitel: "Sterke structuur voor agents, maar geen vangnet voor verouderde feiten"
datum: 2026-10-02
bron: los
routine: ""
categorie: Techniek
status: nieuw
prioriteit: P2
samenvatting: "De vault is voor agents goed opgezet (korte CLAUDE.md, één feitenbestand, 0 kapotte links, frontmatter op alle kennisnotities), maar mist een vangnet voor verouderde informatie: alle 170 bijgewerkt-stempels zijn een bulkdatum, er is geen status voor archief en geen automatische controle op vervallen waarden. Voor higrip.nl betekent dat dat een besluit zoals de vervallen 22:00-belofte alleen via een handmatige review overal doorkomt, en dat OneDrive, Google Drive en een autosave elke 2 minuten onnodig op dezelfde map schrijven."
gerelateerd: [2026-10-02-vault-review, 2026-09-28-optimalisatiecheck-werkwijze-routines-en-dashboard, 2026-09-07-compliance-todo, 2026-10-07-notebooklm-ai-agent-tiktoks]
vervangt: []
bronbestand: ""
deadline: ""
---
# Obsidian-structuren voor AI-agents en onze vault ernaast gelegd

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[Waar staat wat]] · [[Home]]

## In het kort

- **Wat de bronnen zeggen.** Een goede agent-vault heeft vijf dingen: een korte ingang (CLAUDE.md of AGENTS.md), drie gescheiden lagen (ruwe bronnen die niemand wijzigt, een wiki die de agent bijhoudt, een schema met de regels), voorspelbare paden met vaste frontmatter, ophalen via index en wikilinks in plaats van een vectordatabase, en duidelijke schrijfrechten met git als geschiedenis. Veroudering is het faalpunt dat het vaakst terugkomt.
- **Wat bij ons goed is.** De ingang is kort (88 regels), er is één feitenbestand met een rangorde bij tegenspraak, 0 kapotte links op 243 notities, een navigatieregel op vrijwel elke notitie, frontmatter op alle 170 kennisnotities en scripts die de machinestaat beheren (nav, build, acties). Geheimen: 0 treffers.
- **Waar het wringt.** Actualiteit is niet machineleesbaar, logs en kopieën groeien zonder plafond, twee grote documenten zijn uit elkaar gegroeid, de globale CLAUDE.md is ruim 2× te lang, en de vault wordt door OneDrive, Google Drive en obsidian-git tegelijk beschreven (nu zonder schade: `git fsck` is schoon).
- **Wat te doen.** Eerst status en echte datum op elke kennisnotitie (P1); daarna een lint-script, archiefmap, schrijfrechten, rustiger autosave en twee besluiten (waar de vault staat, welke compliance-lijst de bron is).

## Kerncijfers

- **0** · Kapotte of dubbelzinnige wikilinks op 243 notities
- **170/170** · Kennisnotities met bijgewerkt van 1 of 2 oktober (bulkstempel)
- **54%** · Van de laatste 400 commits is een automatische vault backup
- **458** · Niet-lege regels in de globale CLAUDE.md (richtlijn Anthropic: onder 200)

## Acties

- [ ] P1 · Status en echte datum op alle notities in 00–04: voeg `status` toe (actueel, concept of archief), zet `bijgewerkt` terug naar de laatste inhoudelijke wijziging uit git (nu staat overal 1 of 2 oktober) en leg in `CLAUDE.md` vast dat notities met status archief alleen gelezen worden als erom gevraagd wordt
- [ ] P2 · `vault_lint.py` naast `vault_nav.py`: meldt vervallen waarden uit de Wijzigingslog van het feitenbestand, notities zonder status, `bijgewerkt` dat niet klopt met git en bestanden boven 15 KB buiten `05_Research`; de Actiecontrole draait het en maakt van afwijkingen een backlogpunt
- [ ] P2 · Besluit: waar staat de vault — laten staan in OneDrive met Google Drive erbij, verhuizen naar een map zonder clouddienst, of alleen de `.git`-map verplaatsen met `git init --separate-git-dir` (git en GitHub zijn al de sync; `fsck` is nu schoon)
- [ ] P2 · Besluit: één bron voor compliance — de lijst in `00_Brand_Core/Compliance` en notitie 2026-09-07-compliance-todo overlappen 74 tot 83 procent en lopen uit elkaar; voorstel: de lijst in 00 is de bron en de notitie wordt een korte registratie met alleen de acties
- [ ] P2 · Map `99_Archief` in de vault voor ruwe en achterhaalde bestanden (SEO-audit 2026-09-25 findings 256 KB, weekoverzichten tot 14-09, origineel Denzel-weekoverzicht, werkdossier 04-09), uitsluiten in Obsidian via Excluded files en in `CLAUDE.md`, en de `bronbestand`-verwijzingen meeverhuizen
- [ ] P2 · Globale `CLAUDE.md` van 458 naar onder 200 niet-lege regels: §9 tot §14 en §5 naar de Shopify-skills (laden alleen als ze nodig zijn) of naar `~/.claude/rules`, §2 tot §4 vervangen door een verwijzing naar de vault-`CLAUDE.md`, daarna `/doctor prompt-audit` draaien vanuit een terminal
- [ ] P2 · Schrijfrechten per map: tabel in `CLAUDE.md` (wie mag waar schrijven) en deny-regels in `.claude/settings.json` voor `05_Research/_backlog/*.json`, `05_Research/_data/*.json` en `register.js`, zodat alleen `acties.py` en `build_register.py` die bestanden wijzigen; testen in een routine-run
- [ ] P2 · obsidian-git rustiger afstellen: autosave van 2 naar 15 minuten, pull van 2 naar 10, bericht `autosave` met bestandslijst in de body; de instellingen staan in git en gelden voor Lars, Tigo en Timo, dus eerst afstemmen; core-plugin Sync uitzetten (staat aan zonder configuratie)
- [ ] P3 · Notitie Zoek Script & Gids inkorten van 110 KB (circa 31.000 tokens) naar een gids van hooguit 5 KB; het script zelf staat al in de setup-repo
- [ ] P3 · `bronbestand` en andere paden in 32 notities vault-relatief maken in plaats van absolute `C:\Users\Test`-paden, zodat verhuizen of werken op een andere pc niets breekt

## Bevindingen

### Bronnen 1: het instructiebestand is de ingang, geen kennisbank

- Claude Code leest `CLAUDE.md` elke sessie. De documentatie van Anthropic noemt als richtlijn onder 200 regels per bestand; langere bestanden kosten context en verlagen de naleving.
- Imports met `@pad` besparen geen context, want ze laden bij de start mee. Wat maar voor een deel van het werk geldt, hoort in een skill of in `.claude/rules/` met een `paths`-filter. Een `CLAUDE.md` in een submap laadt pas als Claude bestanden uit die map leest. Blok-HTML-commentaar wordt eruit gehaald voordat het in de context komt, dus onderhoudsnotities kosten geen tokens.
- Het is context, geen afdwingbare configuratie. Wat hard moet (niet schrijven in map X) hoort in een hook of deny-regel.
- HumanLayer houdt het eigen root-bestand onder 60 regels, wil verwijzingen in plaats van kopieën, en rekent met zo'n 150 tot 200 instructies die een model betrouwbaar volgt, waarvan ongeveer 50 al in de systeemprompt zitten. Dat is een rekenregel van een derde partij, geen cijfer van Anthropic.
- Tegenstrijdige instructies: Claude kiest er volgens de documentatie willekeurig een. Loop de bestanden periodiek na; `/doctor prompt-audit` (Claude Code 2.1.283 of nieuwer) doet dat en stelt wijzigingen voor zonder ze door te voeren.

### Bronnen 2: drie lagen, een index en een log (Karpathy, 4 april 2026)

- **Ruwe bronnen** (onveranderlijk, het model leest ze maar schrijft er niet in), **de wiki** (markdownmap die het model bijhoudt) en **het schema** (een `CLAUDE.md` met structuur, namen en werkwijzen).
- Twee vaste bestanden: `index.md` (catalogus per categorie, bijgewerkt bij elke invoer) en `log.md` (alleen toevoegen, chronologisch, met een parseerbaar voorvoegsel).
- Drie handelingen: invoeren, vragen (goede antwoorden gaan terug als wikipagina) en **controleren**: tegenstrijdigheden, verouderde beweringen, wezen en ontbrekende kruisverwijzingen.
- Obsidian is de editor eromheen: grafiek, Web Clipper, Dataview op frontmatter, git voor geschiedenis. Karpathy houdt het schema bewust abstract en laat het meegroeien met wat werkt.

### Bronnen 3: voorspelbare paden en vaste bouwstenen

- Een praktijkvault (okhlopkov) geeft elk project dezelfde vier bouwstenen (`overview`, `tasks`, `ideas`, `ai-docs/`) en zegt: moet de agent raden waar iets hoort, dan is de structuur te slim. Ruwe invoer blijft ongemoeid, de AI-synthese staat ernaast. Genoemde fouten: te complexe mappen, ruwe notities bewerken (herkomst weg), geheimen en geheugen mengen, lange regelboeken, zoeken belangrijker maken dan de werkstroom.
- Een tweede voorbeeld (Luna-chan): `raw/` (alleen toevoegen), `wiki/` (mens en agent), `projects/` en `output/`. Frontmatter met `title`, `tags`, `status` (active, archived, draft), `updated` en `related`. Met `status: active` zoekt een agent gericht in de actuele kennis.

### Bronnen 4: ophalen via index en wikilinks, niet via een vectordatabase

- De agentic doc harness gebruikt een gegenereerde `VAULT_INDEX.md`, routeert naar een ingangsnotitie en volgt dan uitgaande wikilinks. Op een synthetische vault van 99 notities (15 synthesetaken, beoordeeld door een model) scoorde alleen-wikilinks hoger op onderbouwing (2,53 tegen 2,13) en inzichtwaarde (2,33 tegen 1,53) dan een vector-RAG-basislijn; de hybride variant scoorde overal het hoogst. Kanttekening: klein, synthetisch en een eigen evaluatie.
- Meerdere gidsen geven hetzelfde advies: begin met platte markdown en git, voeg een MCP-server pas toe voor gestructureerde bewerkingen (backlinks, frontmatter-veilig bewerken).
- Onze vault is ongeveer 528.000 tokens (schatting, bytes gedeeld door 3,6): te veel om te laden, goed genoeg voor index, hubs en links.

### Bronnen 5: schrijfrechten, back-ups en herkomst

- Mappen met eigenaar (ruwe bronnen, menselijke notities, agent-uitvoer), deny-regels in de projectinstellingen voor bronmappen, plan mode voor een eerste inventaris, `git diff` nalopen en een onafhankelijke back-up (aident.ai).
- Herkomst is het zwakke punt van markdown: het weet niet welke agent welke regel schreef, heeft zonder git geen revisiegeschiedenis en kent geen reviewpoort (calmara). Meerdere schrijvers op dezelfde notitie geven conflictkopieën in plaats van een foutmelding; houd agents in eigen mappen en laat een mens samenvoegen.

### Bronnen 6: geheugen veroudert stil

- Volgens een zoekresultaat van aiweekly drijft markdown-geheugen weg zonder foutmelding: contextbestanden groeien en spreken zichzelf tegen, en de agent negeert ze zonder dat iemand het ziet. Die pagina was niet te openen, zie "Wat niet lukte".
- Oplossingen die overal terugkomen: een eigenaar per bestand, een vervaldatum of status, periodiek samenvoegen, en wijzigingen via een voorstel dat een mens goedkeurt.

### Bronnen 7: één synchronisatiemethode per vault

- Obsidian zelf waarschuwt: synchroniseer dezelfde vault niet via meerdere diensten, want dat geeft data-conflicten of corruptie. Gebruikersmeldingen over git-repo's in OneDrive of iCloud noemen `bad object`-fouten bij push en pull.

### Bronnen 8: Obsidian-eigen hulpmiddelen voor agents

- `kepano/obsidian-skills` (Steph Ango) leert agents het bestandsformaat: Obsidian Flavored Markdown, Bases, JSON Canvas, de Obsidian CLI en defuddle (schone markdown uit webpagina's). Installatie via de plugin-marketplace of door de inhoud in `.claude/` in de vault te zetten.
- Bases (core-plugin, bij ons al aan) maakt gefilterde tabellen op frontmatter. Handig voor mensen, maar geen ophaalmethode voor agents; die lezen beter de gewone index.

### Scorekaart: de bronnen naast onze vault

| Eigenschap | Onze stand (gemeten 2-10-2026) | Oordeel |
|---|---|---|
| Korte ingang | `CLAUDE.md` in de vault: 88 regels, 7,7 KB, met rangorde bij tegenspraak, harde grenzen en gitregels | goed |
| Instructies buiten de vault | globale `CLAUDE.md`: 574 regels (458 niet-leeg), 24,8 KB | zwak |
| Drie lagen | schema = `CLAUDE.md`, wiki = 00–04; ruwe laag bestaat (SEO-audit findings, `bronbestand`) maar is niet gelabeld | matig |
| Index en log | automatische indexen per map, Wijzigingslog in het feitenbestand, Update Log; geen vaste log voor kennis | matig |
| Voorspelbare paden | genummerd per agent, 5 niveaus diep; 10 bestandsnamen dubbel (42 bestanden) | matig |
| Frontmatter | 170 van 170 in 00–04, maar `type` is bij 81% `kennis` en `bijgewerkt` is een bulkdatum | matig |
| Ophalen | hubs en navigatieregel overal, 0 kapotte links, 7,2 echte uitgaande links per notitie | goed |
| Controle (lint) | `vault_nav.py` (wezen), `build_register.py --check` (onderzoek), handmatige review; niets op vervallen feiten | zwak |
| Schrijfrechten | regels in tekst, scripts voor machinestaat, geen deny-regels | matig |
| Herkomst | git, maar 54% van de commits is een autosave onder de naam Lars | matig |
| Geheimen | 0 treffers op 7 patronen; `_prive/` en `agenda.json` genegeerd | goed |
| Synchronisatie | OneDrive, Google Drive en obsidian-git elke 2 minuten op dezelfde map | risico |

### Goed: de ingang, het feitenbestand en de rangorde

- [[Feiten & Actuele Staat]] is één bestand van 10 KB (ongeveer 2.900 tokens) met een Wijzigingslog, een formuleringsregel voor grip-claims en de claimbron met DOI (Apps et al. 2022). `CLAUDE.md` verwijst ernaar in plaats van feiten te kopiëren, precies het "pointers boven kopieën" uit de bronnen.
- De navigatieregel staat op alle notities behalve `Home` en `00 Brand Core` zelf. Er zijn geen kapotte of dubbelzinnige wikilinks; de hubs zijn Brand Voice (63 inkomende links), Brand Identity (56) en Update Log (55).
- Een deel van de "lint" uit het Karpathy-patroon bestaat al: wezen-rapport in `vault_nav.py`, `build_register.py --check`, de Actiecontrole en de handmatige review van 2-10.

### Goed: scripts beheren de machinestaat, het model het oordeel

- `acties.py`, `build_register.py` en `vault_nav.py` schrijven `BEHEER.json`, `OPDRACHTEN.json`, `CONTROLE.json`, het register en de navigatie: deterministisch, idempotent, met hash-id's en een vaste conflictregel (de vault wint bij een latere wijziging). Dat is het sterkste patroon uit de bronnen.
- Geheugen per routine in `05_Research/_geheugen/` met een vaste regel, plus een `MEMORY.md` van 9 regels: overleeft cloudruns en blijft klein.

### Zwak: actualiteit is niet machineleesbaar

- 168 van 170 kennisnotities hebben `bijgewerkt: 2026-10-01`, twee hebben 2026-10-02. Dat is een bulkstempel: de frontmatter is er, maar zegt niets over versheid. `type: kennis` staat bij 137 van de 170 (81%), `status` bij 2 en `laatst-geverifieerd` bij 2 ([[Feiten & Actuele Staat]] en de productwaarheid).
- Gevolg: een agent kan "vervallen" niet scheiden van "actueel". De tekenreeks 22:00 staat in 26 bestanden (65 plekken, waarvan 38 regels in 17 bestanden buiten gedateerde notities), maar dat zijn vermeldingen en geen actieve beloftes: uitleg dat de belofte vervalt (Home, Feiten, backlog, vault-review en deze notitie), historische vermeldingen in gedateerde stukken (Werkdossier 04-09, Update Log, Agent Werk & Kwaliteit Overzicht) en de open afwijking op de live site (gedeeld metafield, regressiecheck 28-9, niet opnieuw gecontroleerd). Alleen in de ruwe SEO-audit-findings leest 22:00 nog als geldende regel of aanbeveling (onder meer `content.md` regel 87 en `sxo.md` regel 96), terwijl alleen het Actieplan het als achterhaald markeert. Een telling meet dus vermeldingen en geen fouten; een agent kan ze niet uit elkaar houden zonder `status` en `vervangen-door`. Het besluit van 25-9 kwam daardoor pas bij de handmatige review van 2-10 in alle zeven sportgidsen aan ([[2026-10-02-vault-review]]).
- 36 bestanden buiten gedateerde notities noemen pilates. Een deel is terecht (strategie, hashtags), maar zonder status kan een agent dat niet weten.

### Zwak: logs en kopieën groeien zonder plafond

- `ACTIEBACKLOG.md` is 34 KB (circa 9.600 tokens, 25 open koppen, 4 afgevinkt) en wordt door elke routine gelezen. [[Zoek Script & Gids]] is 110 KB (circa 31.000 tokens, 6% van alle tokens in de vault) en bevat de back-up van een script.
- [[Agent Werk & Kwaliteit Overzicht]] (33 KB), `API & Tool Connections` (27 KB), [[Feedback & Iteratie Log]] (26 KB) en `Stappenplan — Verdere Bouw` (19 KB) maken van `04_Agent_Infrastructuur` 477 KB: groter dan 00, 01 en 02 samen (403 KB).
- SEO-audit 2026-09-25: 16 bestanden, 256 KB ruwe subagent-uitvoer midden in `03_Website_Agent/Analyse`, waarvan 11 zonder echte inkomende link. Dat is de ruwe laag uit het Karpathy-patroon, maar ongelabeld en met waarden die al achterhaald zijn.
- `05_Research` groeit met ongeveer 2 notities per dag (40 in de 18 dagen sinds 15-9). Begin 2027 zijn dat ruim 200 notities, en de automatische lijst in `Waar staat wat` groeit mee.

### Zwak: dubbele documenten lopen uit elkaar

- Compliance: notitie 2026-09-07-compliance-todo (36 KB, 392 regels) en [[Compliance To-Do Lijst]] (31 KB, 350 regels). 74% van de regels uit de notitie staat ook in de lijst, 83% omgekeerd; elk heeft eigen regels (97 en 55). Dit is de situatie waar het feitenbestand voor bedoeld was: twee kopieën, geen bron.
- `Home` heeft een eigen "Waar staat wat"-tabel naast de kaart in `05_Research/Waar staat wat` en een Opschoonstatus-log (8,5 KB, tegen 4 KB voor de Brand Core).
- 14× `identiteit.md`, 11× `_Werkplek.md`, 3× `soul.md` en vier routineprompts met dezelfde naam als hun geheugenbestand: kale wikilinks zijn dubbelzinnig. 14 routineprompts en `Verbeterlus` hebben daardoor geen echte inkomende wikilink en worden alleen via de automatische index en de Routines-README gevonden.

### Zwak: de globale instructielaag is te groot en herhaalt de vault

- `~/.claude/CLAUDE.md` (574 regels, ongeveer 7.000 tokens) laadt in elke sessie, ook bij vaultwerk zoals dit. §9 tot §14 (prompttemplates, layoutpatronen, Nike-, Gymshark- en Oura-patronen, workflows) beslaan regel 192 tot 545: 62% van het bestand en alleen relevant bij Shopify-ontwerpwerk.
- §2 tot §4 herhaalt kleuren, fonts en tone of voice uit de vault. Dat dubbele werk drijft weg: op 2-10 bevatte dit exemplaar nog oude waarden (€30 verzenddrempel, "vandaag verzonden", 1.500+, gele CTA), zie [[2026-10-02-vault-review]].
- De `CLAUDE.md` in de vault zelf is 88 regels en goed. Houd hem zo.

### Risico: de vault wordt door meerdere dingen tegelijk beschreven

- De vaultmap en `.git` zijn OneDrive-reparsepunten, dus OneDrive synchroniseert ook `.git`. `GoogleDriveFS` draait en de map `.tmp.driveupload` (25 bestanden van 151 tot 12.892 bytes, de grootte van git-objecten en index) is bijgewerkt op precies de commit-tijden 22:09:57, 22:12:06 en 22:14:09. Google Drive pakt de vault dus waarschijnlijk ook op.
- Daarbovenop commit, pusht en pullt obsidian-git elke 2 minuten (`syncMethod: merge`) terwijl cloudroutines naar dezelfde branch pushen. Een autosave kan een half afgemaakte wijziging van een agent vastleggen.
- Stand: `git fsck` geeft exitcode 0 (16 dangling objecten, normaal), geen conflictmarkers, geen conflictkopieën. Het is dus een latent risico, geen schade. GitHub houdt de geschiedenis veilig; bij schade is opnieuw clonen het herstel.
- Herkomst: 215 van de laatste 400 commits (24-6 tot 2-10) zijn "vault backup", ook als de wijziging van een lokale Claude-sessie komt. Auteurs: Lars 282, Claude 24, Denzel (Hermes) 5, HÏ Grip 1. Wie wat schreef is niet af te lezen en de git-log kan niet als wijzigingslog dienen.
- `.obsidian/` staat in git (behalve `workspace.json`), dus plugin-instellingen gelden voor iedereen die de vault ophaalt.
- `.claude/settings.local.json` bevat alleen allow-regels. "Nooit met de hand" voor `BEHEER.json`, `OPDRACHTEN.json` en `CONTROLE.json` staat in de procedure maar wordt niet afgedwongen. Routines mogen bovendien het feitenbestand bijwerken (rangorde 2 in `CLAUDE.md`) zonder tweede bron of reviewpoort.

### Kleinere punten

- De core-plugin Sync van Obsidian staat aan, maar er is geen `sync.json`: niet geconfigureerd. Uitzetten voorkomt een per ongeluk gestarte tweede sync.
- 32 notities bevatten absolute `C:\Users\Test`-paden, onder meer in `bronbestand`. Dat breekt bij verhuizen en werkt niet op de pc van Lars of Tigo.
- `register.js` (799 KB) is een gegenereerd bestand dat in git staat en bij elke build verandert.
- Bronnen voor claims staan als DOI of URL in het feitenbestand; de documenten zelf staan niet in de vault. Voor publieke papers is dat prima, voor bestanden in `Downloads` (zoals het merkdocument) niet.

## Wat niet lukte

- Stap B (dashboard naar vault) en de publicatie van het dashboard zijn overgeslagen: het dashboard is van info@ en deze sessie draait op een persoonlijk account. De volgende routine-run of `/research-sync` vanaf info@ neemt deze notitie mee.
- De pagina van aiweekly over "prompt debt" gaf HTTP 403. De bewering over stil verouderend markdown-geheugen komt uit een zoekresultaat en is niet aan de bron gecontroleerd.
- Niet vastgesteld of Google Drive de map Documenten werkelijk back-upt; dat is afgeleid uit `.tmp.driveupload` en de tijdstippen. Controle: Google Drive, Instellingen, Mappen van je computer.
- Niet getest of cloudroutines deny-regels uit `.claude/settings.json` van de repo toepassen.
- Het getal van 150 tot 200 instructies is van HumanLayer en de evaluatie van de doc harness is eigen werk op een synthetische vault; beide zijn richting, geen bewijs.

## Bronnen

- Anthropic, hoe Claude Code geheugen laadt: https://code.claude.com/docs/en/memory
- Karpathy, LLM Wiki (4 april 2026): https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f, samenvatting: https://www.noze.it/en/insights/llm-wiki/
- HumanLayer, een goede CLAUDE.md schrijven: https://humanlayer.com/blog/writing-a-good-claude-md
- Agentic doc harness voor Obsidian: https://dev.to/nickyeolk/think-with-your-second-brain-a-proper-claude-code-harness-for-obsidian-2c0o
- Agent-leesbare vault (okhlopkov): https://okhlopkov.com/second-brain-obsidian-claude-code/
- Vault voor mens en agent (Luna-chan): https://dev.to/luna_chan/a-practical-obsidian-vault-for-human-ai-agent-collaboration-2bkp
- Claude Code zonder notities te verliezen: https://aident.ai/blog/claude-code-obsidian-without-losing-notes
- Waar de vault-aanpak stopt (herkomst): https://calmara.app/blog/shared-memory-for-ai-assistants
- Obsidian-skills van Steph Ango: https://github.com/kepano/obsidian-skills
- Obsidian over synchroniseren: https://obsidian.md/help/sync-notes
- Niet geopend (403), alleen zoekresultaat: https://aiweekly.co/alerts/markdown-agent-memory-accumulates-prompt-debt
- Eigen metingen op 2-10-2026: scan van alle Markdown-notities (links, frontmatter, grootte, vervallen waarden, geheimen), `git fsck`, `git log` over 400 commits en `.obsidian/plugins/obsidian-git/data.json`
- [[Agent Bestandsschema (Soul, Identiteit, User)]] voor de opzet van identiteit en soul

## Aantekeningen
