---
id: 2026-11-02-backlinks-merchant
titel: "Backlinks & Merchant Center — 2026-11-02 (eerste run)"
kerntitel: "Merchant Center niet gekoppeld; geen backlinks of vermeldingen van HÏ Grip gevonden"
datum: 2026-11-02
bron: routine
routine: "backlinks-merchant"
categorie: SEO
status: nieuw
prioriteit: P2
samenvatting: "Eerste run van deze module: Merchant Center is niet gekoppeld aan de servicesleutel, dus er zijn geen productstatussen of feedfouten te meten. Vier zoekopdrachten naar backlinks en merkvermeldingen van HÏ Grip leverden niets op — geen vermelding, geen link — wat past bij een klein, nieuw merk zonder actieve linkopbouw."
gerelateerd: [2026-11-02-regressiecheck, 2026-11-04-growth-radar-ai-search]
vervangt: []
bronbestand: ""
deadline: ""
---
# Backlinks & Merchant Center — 2026-11-02 (eerste run)

> Map: [[Waar staat wat]]

## In het kort

Eerste run van module D. De guard (laatste `| run |`-regel in het geheugen) gaf geen uitvoer, dus dit is per definitie de eerste keer dat deze module draait — geen 25-dagentermijn om tegen te toetsen, geen linkinventaris om "verloren" tegen te checken, en geen voorgaande Merchant-stand om een trend tegen af te zetten.

## Kerncijfers

- **0** · Merchant Center-producten gemeten (niet gekoppeld)
- **0** · gevonden backlinks of merkvermeldingen van HÏ Grip buiten de eigen site
- **4** · websearches uitgevoerd (van maximaal 6)

## Acties

- [ ] P2 · [merchant] Merchant Center koppelen aan de servicesleutel (`ga4-mcp@higrip-analytics.iam.gserviceaccount.com`) — zonder koppeling blijft deze module elke maand blind voor productstatussen en feedfouten

## Bevindingen

### Merchant Center

`python3.13 02_Dashboard/_tools/google_data.py merchant` geeft aan dat er geen `merchant.account_id` staat in `02_Dashboard/_data/instellingen.json` en dat de servicesleutel geen toegang heeft in Merchant Center. Geen productstatussen (goedgekeurd/afgekeurd/beperkt), geen probleemgroepering en geen GTIN-/merk-controle mogelijk zolang dit niet is opgelost. Benodigd om te koppelen: (1) Merchant API aanzetten in het Google Cloud-project `higrip-analytics`, (2) de servicesleutel toevoegen als lezer onder Merchant Center → Instellingen → Mensen en toegang, (3) het Merchant Center-account-ID invullen als `merchant.account_id` in `instellingen.json`.

### Backlinks

Geen Ahrefs- of Similarweb-connector beschikbaar. De linkinventaris in het geheugen is leeg (eerste run), dus er was niets om op "verloren" te controleren. Vier websearches uitgevoerd (binnen het maximum van 6):

| Zoekopdracht | Resultaat |
|---|---|
| `"higrip.nl" -site:higrip.nl` | Geen vermelding van het domein; alleen ongerelateerde "HI-GRIP"-slangklemmen (RS Components) en een bosbouwmachine. |
| `"HÏ Grip" OR "HI Grip" gripsokken -site:higrip.nl` | Geen vermelding van het merk; alleen Decathlon-gripsokken en ongerelateerde "HI-GRIP"-producten. |
| `"HÏ Grip" sokken OR socks review` | Geen enkele review of vermelding van het merk. |
| `FitSockr backlinks "fitsockr.nl" voetbalclub OR bond OR vergelijk` (zoekrichting concurrent) | Geen bruikbaar backlinkprofiel zonder gespecialiseerd tool; alleen Decathlon-marketplace- en reviewplatform-vermeldingen (Trustpilot, Trusted Shops), geen club-, bond- of vergelijker-links gevonden. |

**Resultaat:** nul nieuwe links, nul verloren links (niets om te verliezen), nul link-kansen gevonden. Voor een klein, nieuw merk zonder outreach is dit een verwachte uitkomst, geen zorgsignaal op zich — maar het betekent ook dat linkopbouw nog niet begonnen is. Concurrentenonderzoek (FitSockr) leverde geen bruikbare zoekrichting op zonder een eigen backlink-tool (Ahrefs/Semrush/Majestic); dat blijft een structurele beperking van deze module zolang zo'n tool niet gekoppeld is.

### Doorwerking

Niet van toepassing — eerste run, niets om tegen af te zetten.

## Wat niet lukte

- **Merchant Center-meting**: niet gekoppeld (zie boven).
- **Backlinkprofiel van de eigen site en concurrenten**: geen Ahrefs/Similarweb/Semrush-tool beschikbaar; alleen losse websearches mogelijk, die geen volledig profiel geven.

## Bronnen

- `python3.13 02_Dashboard/_tools/google_data.py merchant`, 2 november 2026.
- Websearch (4 zoekopdrachten, zie tabel), 2 november 2026.
- Feitenbestand: `00_Brand_Core/Feiten & Actuele Staat.md` (concurrentenlijst).

## Aantekeningen
