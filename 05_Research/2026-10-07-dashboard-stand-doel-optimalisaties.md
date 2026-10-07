---
id: 2026-10-07-dashboard-stand-doel-optimalisaties
titel: "Dashboard — stand tegenover het doel, wat nog moet en waar het sneller of beter kan"
kerntitel: "Het prototype is af; de echte app is nog niet begonnen en de routines lopen achter"
datum: 2026-10-07
bron: los
routine: ""
categorie: Techniek
status: nieuw
prioriteit: P1
samenvatting: "Het prototype (v4, stap 1–9) is klaar en getest, maar van de echte app (± 180 uur, blok A–J) is nog niets gebouwd, en het CRM op eind december haalt het team bij 8 uur per week alleen als blok A deze maand start. Daarnaast draait de Actiecontrole sinds 26 september niet, 8 van de 14 routines bestaan nog niet en de blauwdruk spreekt v4 tegen op voorraad en schermopbouw: die drie punten eerst rechtzetten maakt het bouwen sneller en het Research Dashboard weer actueel."
gerelateerd: [2026-10-06-dashboard-v4-opruimen-focusvensters, 2026-10-04-dashboard-efferd-volgorde-cijfers, 2026-09-28-optimalisatiecheck-werkwijze-routines-en-dashboard, 2026-10-07-dashboard-v4-controle-ui-snelheid]
vervangt: []
bronbestand: "C:\\Users\\Test\\.claude\\plans\\dashboard-blauwdruk.md"
deadline: ""
---
# Dashboard — stand tegenover het doel, wat nog moet en waar het sneller of beter kan

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[Waar staat wat]] · [[Home]]

## In het kort

- **Doel (blauwdruk 01-10):** één app voor het team van drie, op laptop en telefoon, die Bigin, Google Tasks en het Research Dashboard vervangt. Techniek: Next.js, Supabase, Vercel en Hetzner. Omvang ± 180 uur in blokken A–J. Bij 8 uur per week staat het CRM eind december en de rest half april 2027.
- **Stand:** het prototype is klaar (v4, stap 1–9, alle tests 0 fouten, handboek v4). Aan de echte app is nog niets gebouwd: geen repository, geen Supabase-project, geen bouwplan.
- **Wat vooral telt:** blok A (fundament) en B (CRM) zijn samen ± 80 uur, ongeveer 10 weken bij 8 uur per week. Er zijn nog ongeveer 12 weken tot eind december, dus starten moet deze maand.
- **Wat eerst rechtgezet moet:** de Actiecontrole, de ontbrekende routines en de blauwdruk die v4 tegenspreekt.

## Kerncijfers
- **26-09** · laatste run van de Actiecontrole volgens `CONTROLE.json` (11 dagen geleden)
- **8 van 14** · routines die volgens de routinelijst nog op info@ aangemaakt moeten worden
- **± 180 uur** · geschatte bouwtijd van de echte app (blauwdruk §12), 0 uur gebouwd
- **58** · tijdelijke hulpbestanden (`_*`) in de v4-bronmap naast de echte bronbestanden

## Acties
- [ ] P1 · Besluit: startdatum en uren per week voor blok A (fundament: repository, Supabase-project in de EU, Google-login, kern-tabellen); zonder start in oktober schuift het CRM voorbij eind december
- [ ] P1 · Bouwplan voor de echte app schrijven op basis van de blauwdruk en v4: schema afleiden uit de prototypedata (`data.js`, de collecties in `S`), per blok de schermen uit v4, Supabase in plaats van Neon
- [ ] P2 · Blauwdruk bijwerken naar v4: focusvensters in plaats van de zes schermsjablonen en volledige detailpagina's, Shopify live in plaats van elke nacht, klantnamen tonen, en voorraad die niet naar Shopify gaat (§5 zegt nog "dashboard → Shopify")
- [ ] P3 · v4-bronmap opruimen: de 58 tijdelijke `_*`-bestanden (oude fixscripts, testuitvoer) naar een map `_archief` zodat alleen bron, build en tests overblijven
- [ ] P3 · Verweesde actie-id `2026-09-25-seo-audit#118b76a0` uit `CONTROLE.json` en `UITVOERBAAR.json` laten halen door de Actiecontrole (de build waarschuwt er bij elke run over)

## Bevindingen

### 1. Wat er van het doel af is
| Onderdeel uit de blauwdruk | Stand |
|---|---|
| Ontwerp alle 13 modules | Klaar in het prototype v4, met handboek |
| Datamodel en stromen S1–S10 | Uitgewerkt in het prototype met voorbeelddata; nog niet als database |
| Echte data | Webshop live uit Shopify, research en routines uit de vault. CRM, taken, mail, agenda, content, ads, voorraad en financiën zijn voorbeelddata |
| Gedeelde opslag voor het team | Nee: wat je in het prototype doet, blijft in je eigen browser |
| Koppelingen | Shopify, GA4 en Search Console werken. Niet gekoppeld: Google Agenda, Gmail, PageSpeed, Moneybird, Buffer, Meta, Sendwill |
| Echte app (blok A–J) | Niet begonnen |

### 2. Wat het werk nu tegenhoudt
- **De Actiecontrole draait niet.** `CONTROLE.json` noemt als laatste run 26-09 en `_data/kpi.json` is sinds 26-09 niet ververst. Daardoor vinkt niemand automatisch af en staan de GA4- en Search Console-cijfers op het Research Dashboard stil. De oorzaak staat al als P1-actie in [[2026-09-28-optimalisatiecheck-werkwijze-routines-en-dashboard]] (repository met schrijfrechten aan de routine toevoegen).
- **De Uitvoerder bestaat nog niet.** "Laat Claude dit doen" op het Research Dashboard leidt dus nergens heen. Ook dat besluit staat al in dezelfde notitie.
- **Zeven andere routines** (Verbanden & kansen, Klantstem, Website-UX, Productradar, Concurrentie-monitor, Materialen & productie, Backlinks & Merchant Center) staan op "nog aanmaken".
- **Het Research Dashboard loopt achter** op de vault zolang publiceren alleen vanaf info@ kan. De notities van 6 en 7 oktober staan er nog niet op.

### 3. Waar de blauwdruk v4 tegenspreekt
- **Voorraad:** de blauwdruk laat het dashboard de voorraad in Shopify zetten. Na 5 oktober geldt: Shopify houdt geen voorraad bij, de voorraad leeft alleen in het dashboard.
- **Schermopbouw:** de blauwdruk heeft zes schermsjablonen met volledige detailpagina's. v4 gebruikt focusvensters met lagen en één lijst per module.
- **Webshopdata:** de blauwdruk leest Shopify elke nacht. v4 leest live; in de echte app kan dat met de Admin API plus een webhook bij elke order.
- **Klantnamen:** het plan adviseerde alleen totalen, Timo koos namen tonen. In de echte app kan dat binnen de AVG zolang de data in de EU staat (Supabase Frankfurt), met een verwerkersovereenkomst en de wijzigingslog. Nooit in de vault of in git.

### 4. Optimalisaties
**Bouwen (tijd besparen):**
- **Schema uit het prototype halen.** De collecties in `data.js` (relaties, taken, orders, mails, afspraken, posts, notities, sjablonen, inkoop) zijn al onderling consistent en getest. Daaruit het Supabase-schema maken scheelt een groot deel van blok A.
- **Supabase breder inzetten.** Met Supabase Auth (Google), Row Level Security, Edge Functions en cron vervalt een deel van Vercel Cron en de Hetzner-worker. Minder losse onderdelen is minder onderhoud; Hetzner blijft voor Hermes.
- **Componenten:** de open beslissing over shadcn/ui in [[2026-10-04-dashboard-efferd-volgorde-cijfers]] bepaalt hoeveel van `kit.js` opnieuw gebouwd moet worden. Met shadcn passen de Efferd-blokken direct. Dat besluit is nodig vóór blok A.
- **Tests overnemen.** De harnassen (`_harness.js`, AI en live) beschrijven al wat elke module moet kunnen. Als Playwright-tests in de echte app vormen ze meteen de acceptatietests.

**Volgorde (sneller iets bruikbaars):**
- Afgesproken is CRM eerst. Overweeg wel om in blok A meteen de **Research-module** mee te nemen (18 uur). Die vervangt het artifact, lost het probleem met info@ en het persoonlijke account op en hangt niet van nieuwe koppelingen af.
- Bouw per module eerst de "eerste bruikbare versie" uit blauwdruk §12 en laat de extra's uit v4 (AI-knoppen, flows, slepen in de tijdlijn) voor later.

**Prototype (alleen nog onderhoud):**
- De volledige klikcrawler duurt meer dan 15 minuten per drie routes. Een vaste steekproef per module (`crawl.py 1440 routes 4`) is genoeg zolang het prototype alleen ontwerp is.
- Geen nieuwe functies meer in het prototype bouwen. Elke nieuwe wens gaat naar de backlog van de echte app, anders groeit het verschil met de blauwdruk verder.

## Bronnen
- Blauwdruk: `C:\Users\Test\.claude\plans\dashboard-blauwdruk.md` (§1, §5, §11, §12, §13, §16f)
- Plan v4: `C:\Users\Test\.claude\plans\dashboard-v4-plan.md` (§0a, §6, §7)
- Vault: `05_Research\_backlog\CONTROLE.json` (laatste_run), `05_Research\_data\` (git-datums), `04_Agent_Infrastructuur\Routines\README.md`
- Eerder: [[2026-10-06-dashboard-v4-opruimen-focusvensters]], [[2026-09-28-optimalisatiecheck-werkwijze-routines-en-dashboard]]

## Aantekeningen
