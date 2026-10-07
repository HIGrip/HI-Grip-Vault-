---
id: 2026-10-06-dashboard-v4-opruimen-focusvensters
titel: "Dashboard v4 — opruimen op een kopie: focusvensters, live Shopify en alle modules zonder tabbladen"
kerntitel: "v4 vervangt tabbladen door focusvensters en haalt de webshop live uit Shopify"
datum: 2026-10-06
bron: los
routine: ""
categorie: Techniek
status: nieuw
prioriteit: P3
samenvatting: "Het prototype is in stap 1 t/m 9 opgeruimd op een kopie (v4), zodat v3.1 als origineel terug kan: elk blok opent een focusvenster in plaats van een pagina, en elke module heeft één lijst met hooguit één wissel. De webshop leest nu live uit Shopify (alleen lezen), de voorraad blijft centraal in het dashboard en het handboek is bijgewerkt. Daarmee is het prototype klaar om als ontwerp voor de echte app te dienen, met Supabase als opslag."
gerelateerd: [2026-10-04-dashboard-efferd-volgorde-cijfers, 2026-10-04-dashboard-bruikbaarheidsaudit, 2026-10-04-dashboard-herindeling-ai-mail-koppelingen, 2026-10-03-dashboard-agenda-mail-ads-leveranciers, 2026-10-07-dashboard-stand-doel-optimalisaties, 2026-10-07-dashboard-v4-controle-ui-snelheid, 2026-10-07-dashboard-v4-animaties-apple]
vervangt: []
bronbestand: "https://claude.ai/artifact/YUpv4tvpeUfNxQ2Bj3ahYj"
deadline: ""
---
# Dashboard v4 — opruimen op een kopie: focusvensters, live Shopify en alle modules zonder tabbladen

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[Waar staat wat]] · [[Home]]

## In het kort

- **Werkwijze:** Timo wil dat het origineel altijd terug kan. v3.1 (https://claude.ai/artifact/XPnRocf1ZcG1J7pb82QBHy) blijft daarom ongewijzigd; alle opruimwerk zit in een kopie, v4 (https://claude.ai/artifact/YUpv4tvpeUfNxQ2Bj3ahYj). Het plan staat in `plans/dashboard-v4-plan.md`.
- **Regels voor v4:** één hoofdknop per pagina, hooguit 3 filters plus zoeken, elke actie in maximaal 2 klikken, geen informatie op twee plekken (een cijfer mag dubbel staan als het naar één bron klikt, een lijst niet).
- **Stap 1 t/m 9 zijn af (4 t/m 6 oktober).** De bouwstand staat in plan §7.

## Kerncijfers
- **210** · geslaagde regels in de functionele test van v4 (`test.py`)
- **22** · geslaagde regels in de AI-test met nagemaakte AI (`_harness_ai.js`)
- **9** · geslaagde regels in de test van de live Shopify-paden met een nagemaakte connector (`_harness_live.js`)
- **0** · fouten in alle drie de testruns (ERRS:0, gemeten 7 oktober)

## Acties

- [ ] P3 · Besluit: wordt v4 het enige prototype dat we verder uitwerken, en zetten we het (met het v4-handboek) op het gedeelde info@-account?

## Bevindingen

### Doorklikken is dieper, geen nieuwe pagina
- Elk blok opent een **groot focusvenster** (`layer.js`). Klik je daarin verder, dan ga je een laag dieper; ← gaat één laag terug, Esc sluit.
- Voorbeeld: Omzet → maand → klant → order.
- Relaties, orders, teamorders, leveranciers, notities en routines zijn ook focusvensters. Een link ernaartoe opent het venster ter plekke, over de pagina waar je bent.
- Op de telefoon sluit elke laag met de terugknop, omlaag vegen of een vaste Sluiten-balk. Tabellen worden kaarten met de kolomnaam bij elk getal.

### Wacht op jou in plaats van een Inbox
- Een icoon met teller in de bovenbalk opent een paneel van rechts met *Akkoord nodig* en *Signalen*.
- AI-mailantwoorden keur je goed in Mail zelf, niet in het paneel.

### Modules na stap 3 t/m 9
| Stap | Module | Resultaat |
|---|---|---|
| 2–3 | To do, Home | Eén lijst met wissel Lijst ↔ Bord; Home = 4 KPI's, omzet als vlakgrafiek, donut, Vraagt aandacht, dagagenda en snelle acties |
| 4 | CRM | Eigen fases per soort: B2B met Offerte, creators, partnerships & events; bord ↔ lijst |
| 5 | Orders | Webshop en B2B in één lijst; Financiën › Facturen is erin opgegaan |
| 6 | Webshop | Analyse · Producten · Klanten · Site & SEO, live uit Shopify |
| 7 | Mail, Agenda, Notities, Content | Zonder tabbladen; Agenda ook per dag, afspraak met voorbereiding en actiepunten die naar To do gaan |
| 8 | Ads, Inkoop, Financiën | Ads = Campagnes · Concurrenten; Financiën is één pagina met uitgaventabel |
| 9 | Research, Bestanden, AI, Instellingen | Research = Onderzoeken · Acties & besluiten; Instellingen heeft nog 6 onderdelen |

### Webshop live uit Shopify
- De pagina leest via de Shopify-koppeling van wie kijkt (capability `mcp`, alleen-lezen tools `list-orders`, `get-order`, `run-analytics-query`, `search_products`, `list-customers`) en ververst elke 2 minuten. Er wordt niets opgeslagen in het dashboard en niets in Shopify gewijzigd.
- Zonder koppeling toont de pagina de vault-stand met uitleg.
- **Voorraad blijft centraal in het dashboard.** Shopify houdt geen voorraad bij, dus negatieve aantallen daar zijn geen probleem. Webshop › Producten toont alleen de centrale voorraad.
- Klantnamen tonen is akkoord van Timo. In de echte app mag Shopify ook schrijven; dat akkoord geeft Timo zelf.

### Pagina's die naar elkaar doorkoppelen
- Een contentidee heeft *Uitwerking en notities* en *Productie*: een shootdag in de agenda en voorbereidingstaken in To do, die terug linken naar de post.
- De omzetvensters op Home hebben een knop naar Financiën, met openstaand, uitgaven en saldo een laag dieper.
- Een B2B-relatie heeft *Afspraken & gegevens*: prijslijst en korting, betaaltermijn, levertijd, minimum, verzending en een afsprakenlog.

### Techniek en afspraken
- Nieuwe bronbestanden in `prototype-bron/v4` o.a. `layer.js`, `drag.js`, `orders.js`, `webshop.js`, `v4.css`. De data gaat in de echte app via Supabase, niet Neon.
- Let op naambotsingen bij nieuwe bestanden (`nf`, `UI.mf`, `.day`, `.mbar`).
- Het handboek v4 staat los van het v3-handboek: https://claude.ai/artifact/UDYtF4nrKv813joETE8pSq.

## Wat niet lukte
Volledige crawl (alle routes, 1440 en 500 px) is bij deze registratie niet opnieuw gedraaid; een volledige run duurt meer dan 15 minuten per drie routes. Het Research Dashboard (info@) is niet bijgewerkt: deze registratie liep vanaf het persoonlijke account, dat het artifact niet kan lezen. Publiceren en `/research-sync` moeten vanaf info@.

## Bronnen
- Plan en bouwstand: `C:\Users\Test\.claude\plans\dashboard-v4-plan.md` (§7), modules in `plans\modules\`.
- Prototype v4: https://claude.ai/artifact/YUpv4tvpeUfNxQ2Bj3ahYj · origineel v3.1: https://claude.ai/artifact/XPnRocf1ZcG1J7pb82QBHy
- Vervolg: [[2026-10-07-dashboard-stand-doel-optimalisaties]], [[2026-10-07-dashboard-v4-controle-ui-snelheid]]
- Eerder: [[2026-10-04-dashboard-efferd-volgorde-cijfers]], [[2026-10-04-dashboard-bruikbaarheidsaudit]], [[2026-10-04-dashboard-herindeling-ai-mail-koppelingen]], [[2026-10-03-dashboard-agenda-mail-ads-leveranciers]]

## Aantekeningen
