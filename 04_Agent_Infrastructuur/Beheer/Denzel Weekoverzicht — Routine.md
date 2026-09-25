# Denzel Weekoverzicht — Routine

> Technische opzet van het wekelijkse, geautomatiseerde Denzel-overzicht. Vastgesteld 21 augustus 2026 op verzoek van lars: hij wil niet meer zelf hoeven aansturen hoe vaak een terugkerende taak (bv. een B2B-/Events-zoekactie) gebeurt, en wil één wekelijks moment met Denzel over voortgang/doelen — geautomatiseerd, niet iets wat hij zelf hoeft te starten. Zie [[soul Denzel]] en `identiteit Denzel.md` voor het mandaat zelf.
>
> **Live sinds 21 augustus 2026:** https://claude.ai/code/routines/trig_01D9XwMiVvuq1FWr7CLoYTmN — eerste run maandag 24 augustus 2026, 06:05 UTC (08:05 Amsterdam-tijd).

---

## Wat de routine doet (elke maandag)

1. Clonet de vault-repo (`github.com/HIGrip/HI-Grip-Vault-`) vers.
2. Leest de voortgang tegen de doelen: [[Stappenplan — Verdere Bouw]], [[Feedback & Iteratie Log]], en de status-velden in elk hoofdagent-`identiteit.md`.
3. Beslist zelf (binnen de "Zelf doen"-grens van de betreffende hoofdagent, nooit hoger) of een terugkerende zoekactie deze week aan de beurt is — op dit moment concreet: B2B Klanten Agent en Partnerships & Events Agent (websearch-methode, zie hun eigen vault-bestanden). Zo ja: voert die zelf uit en verwerkt de resultaten in de juiste vault-bestanden (Voorbeelden Gevonden Organisaties, in het vaste output-format).
0. **Eerst lezen** (sinds 25-09-2026): `CLAUDE.md`, `00_Brand_Core/Feiten & Actuele Staat.md` en je geheugen `05_Research/_geheugen/denzel-week.md`. Volg de geheugenregel in `05_Research/_geheugen/README.md`: punten die al openstaan meld je als "staat X weken open", niet als nieuwe bevinding.
4. **Website-stand** (sinds 25-09-2026, vervangt de eigen live-site- en SEO-check): lees de nieuwste `05_Research/*-regressiecheck.md`, `*-seo-conversietest-run-*.md` en `*-search-console.md` en vat samen wat er deze week speelt. Controleer de site niet zelf: dat doet de regressiecheck (rolverdeling: `04_Agent_Infrastructuur/Routines/README.md`).
5. *(vervallen op 25-09-2026: opgenomen in stap 4)*
6. **GA4-funnel-check** (sinds 14-09-2026): via `python 05_Research/_tools/google_data.py ga4` (sinds 25-09-2026; werkt in de cloud via de omgevingsvariabele `GOOGLE_SA_JSON_B64`, zie `04_Agent_Infrastructuur/Routines/README.md`) (property 476032345) een rapport van de laatste 7 dagen t.o.v. de 7 dagen ervoor — sessies, gebruikers, paginaweergaven, top-kanalen, en de conversiefunnel `view_item → add_to_cart → begin_checkout → add_shipping_info → purchase`. Elke stap wordt afgezet tegen algemene e-commerce-benchmarks (o.a. Baymard Institute: gemiddelde cart-abandonment ~70%, checkout-abandonment ~17-20% bovenop, gemiddelde sessie→purchase-conversie ~2-3%). Puur signaleren, geen wijzigingen doorvoeren. Vermeld altijd expliciet als het sessievolume te laag is voor een betrouwbare vergelijking (vuistregel: onder de ~100 sessies/week zijn ratio's op stapniveau indicatief, geen trend).
7. Zoekt naar recente AI-ontwikkelingen die relevant zijn voor HÏ Grip's manier van werken (contentcreatie, marketing-automatisering, e-commerce, beeld/video-generatie, agent-tooling) — geen generiek AI-nieuws, alleen wat concreet toepasbaar is.
8. Bepaalt een concrete vooruitblik voor komende week (3-5 actiegerichte punten), gebaseerd op het Stappenplan, logische vervolgstappen op eigen acties deze week, en naderende deadlines.
9. Schrijft het weekoverzicht als **onderzoeksnotitie** in `05_Research/JJJJ-MM-DD-weekoverzicht.md` (sinds 17 september 2026; tot en met Week 2026-09-14 stond dit in `04_Agent_Infrastructuur/Beheer/Weekoverzicht/`), volgens het notitieformaat uit `05_Research/_build/PROCEDURE.md`: frontmatter met `bron: routine`, `routine: denzel-week`, `categorie: Merk` tenzij een ander thema domineert (bijv. `CRO` bij een checkout-week), `prioriteit` naar het urgentste punt, `vervangt: [<id van vorige week>]` en `gerelateerd` in beide richtingen. Inhoud onder `## Bevindingen`: voortgang per hoofdagent, wat Denzel deze week zelf heeft opgepakt, openstaande beslissingen voor lars, **vooruitblik komende week**, de **GA4-funnel-check t.o.v. benchmarks**, en het AI-nieuws-overzicht. Openstaande beslissingen als `## Acties` (`- [ ] P? · tekst`). Daarna procedure **A3** (verbanden; vorige week → `status: gearchiveerd`, overgenomen acties daar afvinken), **A4** (`python 05_Research/_build/build_register.py`, moet exit 0 geven) en **A6** (commit + push). **Geen publish** — dat doet de dagelijkse lokale Growth Radar-routine.
10. Werkt [[Agent Werk & Kwaliteit Overzicht]] bij.
11. Commit + push naar de vault-repo.

**Nooit door de routine:** outreach versturen, content publiceren, voorwaarden/prijzen bespreken of toezeggen, of iets anders dat in een hoofdagent's soul.md boven "Zelf doen" staat. De routine rapporteert en doet uitsluitend het onderzoekswerk dat al "Zelf doen" is — de beslissing/actie erop blijft bij lars.

**Wijziging 24 augustus 2026 (op verzoek van lars):** het eerste weekoverzicht toonde alleen wat er gedaan was, niet wat er nog moet gebeuren. De sectie "Vooruitblik — komende week" is daarom een vast, verplicht onderdeel geworden vanaf de volgende run (31 augustus 2026). De routine leest voortaan ook het weekoverzicht van de vorige week, zodat de vooruitblik van toen kan worden meegenomen bij het bepalen van wat er deze week is gebeurd.

**Wijziging 25 augustus 2026 (op verzoek van lars, "automatiseer meer bestaande sub-agents"):** de routine voert nu ook een lichte, wekelijkse live-site-check uit (WebFetch op higrip.nl: bereikbaarheid, of de structured data van 2026-08-02 inmiddels naar live is gekopieerd, opvallende merk-inconsistenties). Dit operationaliseert regels die al in [[Agent Takenverdeling & Grenzen]] stonden ("Live site monitoren — Wekelijks", "Design-consistentie checken — Wekelijks") maar nog nooit waren uitgevoerd sinds ze zijn vastgelegd (14 juli 2026). De routine mag hierbij nooit zelf iets aan de site/theme aanpassen — alleen signaleren met een voorstel, net als bij een gevonden probleem in de kwaliteitscontrole-loop.

**Wijziging 25 augustus 2026, later dezelfde dag:** ook een lichte SEO-check toegevoegd voor SEO Agent — meta title/description, sitemap.xml, FAQPage-inhoud. lars wilde hetzelfde patroon eerst ook voor Content Agent (periodieke content-ideeën als voorstel), maar dat is bewust **niet** gebouwd: hij wil dit eerst intern afstemmen met de content-afdeling van HÏ Grip. Niet vanzelf oppakken totdat lars daarop terugkomt.

**Wijziging 17 september 2026 (Research Dashboard):** stap 9 schrijft het weekoverzicht voortaan naar `05_Research/` als notitie in het vaste formaat en voert de registratiestappen A3/A4/A6 uit `05_Research/_build/PROCEDURE.md` uit, zodat elke week automatisch op het [HÏ Grip Research Dashboard](https://claude.ai/artifact/KVXyNSCNEbKcj2EQGqkpuV) verschijnt. De oude map `Weekoverzicht/` blijft staan als archief (Week 2026-08-24 t/m 2026-09-14 zijn als notities gemigreerd). **Let op:** de routine-id `trig_01D9XwMiVvuq1FWr7CLoYTmN` gaf op 17-09 een 404 via de API; de routine-prompt kon dus niet automatisch worden bijgewerkt. De te plakken prompttekst staat in [[Denzel Weekoverzicht — Routineprompt stap 9 (2026-09-17)]] — handmatig doorvoeren op https://claude.ai/code/routines.

**Wijziging 14 september 2026 (op verzoek van lars, "wil dat dit overzicht elke week wordt toegevoegd"):** de GA4-funnel-check is een vast, wekelijks onderdeel geworden (stap 6 hierboven). Aanleiding: bij het Week 2026-09-14-overzicht bleek uit deze check dat de webshop die week 0 orders/€0 omzet had — een reëel checkout-conversieprobleem (7x `begin_checkout`, 0x `purchase`), bevestigd door lars als géén trackingprobleem. Sindsdien hoort de sessies/kanalen/funnel-vergelijking t.o.v. benchmarks structureel bij elke week, niet alleen als incident-check. Zie [[Week 2026-09-14]] voor het format.

**Wijziging 21 september 2026 (feedback van lars op Week 2026-09-21):**
- **GA4-weekrapport is een verplicht, apart onderdeel** van elk weekoverzicht (naast de funnel-check): sessies/gebruikers t.o.v. vorige week, kanalen + bronnen (`sessionSource/Medium`), landingspagina's, apparaat, land, en per funnelstap waar bezoekers afhaken. **Filter altijd botverkeer eruit of vermeld het expliciet** (bv. Direct-sessies uit VS/China met <5% engagement) — in week 14-20 sept was ~60 van de 123 sessies bot. Format: zie [[Week 2026-09-21]] sectie "GA4-weekrapport".
- **Uitgangspunt B2B:** voor de 8 tennisretailers wordt eerst een **contactpersoon** gezocht (vervolgzoekactie, B2B Klanten Agent) voordat de HOOG-score outreach-klaar heet.
- **Uitgangspunt Content:** content-ideeën worden **beoordeeld door Tigo van de content-afdeling** vóór ze richting Buffer gaan; de routine stelt alleen voor. (Dit is de interne afstemming waar lars eerder op wachtte.)
- **GEO** (zichtbaarheid in AI-zoekmachines) is belangrijker dan eerder gedacht: plan wordt gemaakt met de GEO-sub-agent, zie [[GEO Plan (2026-09-21)]]. De routine geeft in "AI-ontwikkelingen" voortaan ook aan wat GEO raakt.
- **Partnership-kandidatenlijst** komt als dashboard (lars levert die in de week van 21-09); tot dan blijft de lijst in de vault leidend.
- **Shopify-wijzigingen uit dit overzicht zijn door lars goedgekeurd om door te pushen** (structured data live gezet op 21-09; titel/meta en FAQ-tekst 16:00 → 22:00 past lars zelf aan).

---

## Planning

- **Schema:** elke maandag 06:00 UTC = 08:00 Amsterdam-tijd (zomertijd). Let op: in de winter (wintertijd) komt dit uit op 07:00 lokale tijd — cron staat vast in UTC, dus dit schuift automatisch mee met de klok-wissel. Melden als dat een probleem wordt.
- **Model:** claude-sonnet-5.
- **Omgeving:** Anthropic cloud (default environment) — de routine draait los van lars' eigen laptop, heeft dus geen toegang tot lokale bestanden buiten wat via git gecloned wordt.

## Bekende risico's / nog te checken

- **Schrijftoegang tot de vault-repo:** de routine moet kunnen `git push`. Als de cloud-omgeving geen schrijftoegang tot deze (privé?) repo heeft, faalt de laatste stap — dan moet dat eerst geregeld worden via de omgeving-instellingen.
- **Kwaliteit van de "Zelf doen"-beslissing:** de routine bepaalt zelf of een zoekactie "aan de beurt" is; als dat te vaak/te weinig blijkt, bijstellen in de routine-prompt (via `update`).
- **GA4-toegang vanuit de cloud-omgeving (ongeverifieerd, sinds 14-09-2026):** de GA4-funnel-check (stap 6) is toegevoegd en getest vanuit lars' eigen laptop-sessie (waar `analytics-mcp` werkt), niet vanuit de Denzel-cloud-routine zelf. Nog niet bevestigd of de cloud-omgeving dezelfde `analytics-mcp`-toegang (met het `ga4-mcp-key.json`-service-account) heeft. Als de eerstvolgende maandag-run deze sectie niet kan vullen, is dit de oorzaak — dan moet GA4-toegang eerst in de cloud-omgeving geregeld worden, net als het git-push-punt hierboven.

---

## Gerelateerde bestanden

- [[soul Denzel]] — Het mandaat waar deze routine uitvoering aan geeft
- [[Stappenplan — Verdere Bouw]]
- [[Feedback & Iteratie Log]]
- [[Evaluatiecriteria (B2B Klanten)]], [[Voorwaarden Samenwerking]] — Criteria die de routine gebruikt bij een zoekactie
