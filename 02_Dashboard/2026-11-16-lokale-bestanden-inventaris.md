---
id: 2026-11-16-lokale-bestanden-inventaris
titel: "Inventaris: belangrijke bestanden die alleen buiten de vault staan"
kerntitel: "Skills, scripts en SOUL-bestanden staan alleen lokaal; Ads-Workflow is nu wel gedekt"
datum: 2026-11-16
bron: los
routine: ""
categorie: Techniek
status: nieuw
prioriteit: P1
samenvatting: "Alleen-lokaal staan de Hermes-skills (higrip-*, ads-*), de scripts in de Hermes-map, de SOUL-bestanden per profiel en 420 MB uitvoer in HiGripMedia/_Output; de beste ads (v6) en de bouwcode staan sinds vandaag wel in de vault. Dit is een alleen-lezen inventaris: niets is verplaatst of verwijderd."
gerelateerd: []
vervangt: []
bronbestand: ""
deadline: ""
---
# Inventaris: belangrijke bestanden die alleen buiten de vault staan

## In het kort
Opdracht Lars, 16-11-2026 (basisregel 16 in [[user]]). Gekeken naar de scripts-map van Hermes, de skills higrip-* en ads-*, SOUL/config per profiel en HiGripMedia/_Output. Niet bekeken: de privé-map, .env, tokens en mcp-tokens. Pad-types staan zonder gebruikerspad: `<hermes>` = de Hermes-installatiemap van Lars, `<media>` = de lokale kopie van HiGripMedia. Ik heb niets verplaatst; de voorstellen zijn aan Lars.

## Acties
- [ ] P1 · Besluit: de Hermes-skills (higrip-vault, higrip-denzel, higrip-content-agent, higrip-website-agent, higrip-partnership-agent en de 9 ads-skills) staan alleen lokaal en per profiel dubbel; kopie als naslag in de vault zetten (voorstel: `01_Agent_Infrastructuur/Hermes-skills/`, één masterkopie, zonder `__pycache__`)?
- [ ] P1 · Besluit: scripts uit `<hermes>/scripts` naar `01_Agent_Infrastructuur/Hermes-scripts/` voor de gedeelde (drive-sync, kanban-archief, meta-ads-readonly-MCP met test) en de rest lokaal laten?
- [ ] P2 · Besluit: de SOUL.md van elk profiel (design, content, partnership, website, operations) naast het bestaande Ads-SOUL in de vault leggen, zodat het profiel op een andere laptop opnieuw opgebouwd kan worden? config.yaml niet (kan sleutels bevatten).
- [ ] P2 · Besluit: HiGripMedia/_Output (420 MB) als lokale werkmap behandelen en alleen de ads-v6 en de ad-library-v2 naar de Drive-map `_Output` laten kopiëren?
- [ ] P2 · Controleren of `<media>/_Output/design/ads-v6` en `Ads-Workflow/Voorbeelden` dezelfde v6-ads bevatten (Design Agent).
- [ ] P3 · De 254 bestanden in de vault-root `output/` (o.a. build_survey-scripts) naar een domeinmap verplaatsen of uit de vault halen; hoort niet in de root (Operations, na akkoord Lars).
- [ ] P3 · Cron-opdrachten per profiel (`<hermes>/profiles/*/cron`) laten beschrijven in `01_Agent_Infrastructuur/Routines/`, zodat ze zonder deze laptop opnieuw ingesteld kunnen worden.

## Bevindingen
### Lijst
| Item | Pad-type | Belang | Staat elders? | Voorstel |
|---|---|---|---|---|
| Skills higrip-vault (72 KB, 6 kopieën), -denzel (144 KB), -content-agent, -website-agent, -partnership-agent | `<hermes>/skills/higrip/` en `<hermes>/profiles/*/skills/higrip/` | hoog | Nee voor de Hermes-versies; Claude Code-varianten staan wel in `.claude/skills/` (denzel, content-agent, partnership-agent) | naar vault |
| Ads-skills (ads, ads-meta, ads-plan, ads-budget, ads-math, ads-attribution, ads-test, ads-server-side-tracking, higrip-ads-analyse) | `<hermes>/profiles/ads/skills/ads/` | hoog | Deels: `ads_naar_vault_2026-11-03.py` zette inhoud als naslagnotities in `09_Ads_Agent/Kennis` | naar vault (check dekking) |
| `meta_ads_readonly_mcp.py` + test | `<hermes>/scripts/` | hoog | Nee | naar vault (geen token in script; log niet meenemen) |
| `higrip_drive_sync.py`, `higrip_drive_notify.py` | `<hermes>/scripts/` | hoog | Nee; sync Drive naar lokaal, alleen lezen | naar vault, zonder state |
| `archive_done_kanban.py` | `<hermes>/scripts/` | midden | Nee | naar vault |
| `ads_v5/v6_telegram_melding.py` + notify-state | `<hermes>/scripts/` | laag | Nee | lokaal laten (eenmalige keten) |
| `ads_naar_vault_…`, `fix_profielskills_…`, `vault_controle_naar_2wekelijks.py` | `<hermes>/scripts/` | laag | Nee | lokaal laten (eenmalig, gedaan) |
| SOUL.md + profile.yaml per profiel | `<hermes>/profiles/<profiel>/` | hoog | Alleen Ads (`09_Ads_Agent/Profiel/Ads Profiel — SOUL`); rest onbekend | SOUL naar vault; config.yaml lokaal |
| Cron-opdrachten per profiel | `<hermes>/profiles/*/cron/` | midden | Nee | beschrijven in vault |
| `_Output/design/ads-v6` (146 bestanden, 71 MB) | `<media>/_Output/` | midden | Beste 10 ads + code in `Ads-Workflow/` | op Drive of lokaal; beste staat al in vault |
| `_Output/design/ads-html` (525, 224 MB), `ads-v5` (182, 96 MB) | `<media>/_Output/` | laag | Vervangen door v6 | lokaal laten (render- en tussenbestanden) |
| `_Output/design/ads-voetbal-rugby` + `-v2` (53, 15 MB) | `<media>/_Output/` | laag | Onderdeel van oudere rondes | lokaal laten |
| `_Output/content/ad-library-v2` (8, 5 MB), `ad-library-2026-11-09` (14, 1 MB) | `<media>/_Output/` | midden | Nee | op Drive (map _Output) |
| Losse ad_foto_*.jpg in `_Output/design` (5, 11 MB) | `<media>/_Output/` | laag | Bron staat op de Drive | lokaal laten |
| `_Output/ads`, `social`, `website` | `<media>/_Output/` | n.v.t. | Leeg | niets |
| `_sync` (manifest, logs) | `<media>/_sync/` | laag | Nee | lokaal laten |

### Wat al goed staat
`07_Design_Agent/Ads-Workflow/` (27 bestanden, 2,7 MB): navigatieregel en 0 computerpaden bevestigd, geen bestand boven 1 MB, geen `__pycache__` of logs, geen tokens. Foto's staan als verwijzing in `Foto-index.md`.

### Structuur gecontroleerd en gedaan
- Basisregel 16 toegevoegd aan [[user]] (opdracht Lars).
- Leerregel Design Agent vastgelegd in [[Leerregels per Agent]].
- Regel toegevoegd aan [[Agents Design Agent]]; link in [[07 Design Agent — Index]]. `vault_nav.py` kan Ads-Workflow pas in de lijst zetten als obsidian-git de map heeft vastgelegd (het script leest `git ls-files`).

## Wat niet lukte
Geen toegang tot de gedeelde Drive zelf; of `_Output` daar al staat, is niet gecontroleerd. De vault bevat onopgeloste merge-conflicten (o.a. Feedback & Iteratie Log, Agent Werk & Kwaliteit Overzicht); ik heb die niet aangeraakt.

## Bronnen
Lokale mappen zoals hierboven beschreven; `07_Design_Agent/Ads-Workflow/README`.

## Aantekeningen
