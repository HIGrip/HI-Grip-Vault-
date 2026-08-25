# Denzel Weekoverzicht — Routine

> Technische opzet van het wekelijkse, geautomatiseerde Denzel-overzicht. Vastgesteld 21 augustus 2026 op verzoek van lars: hij wil niet meer zelf hoeven aansturen hoe vaak een terugkerende taak (bv. een B2B-/Events-zoekactie) gebeurt, en wil één wekelijks moment met Denzel over voortgang/doelen — geautomatiseerd, niet iets wat hij zelf hoeft te starten. Zie [[soul Denzel]] en `identiteit Denzel.md` voor het mandaat zelf.
>
> **Live sinds 21 augustus 2026:** https://claude.ai/code/routines/trig_01D9XwMiVvuq1FWr7CLoYTmN — eerste run maandag 24 augustus 2026, 06:05 UTC (08:05 Amsterdam-tijd).

---

## Wat de routine doet (elke maandag)

1. Clonet de vault-repo (`github.com/HIGrip/HI-Grip-Vault-`) vers.
2. Leest de voortgang tegen de doelen: [[Stappenplan — Verdere Bouw]], [[Feedback & Iteratie Log]], en de status-velden in elk hoofdagent-`identiteit.md`.
3. Beslist zelf (binnen de "Zelf doen"-grens van de betreffende hoofdagent, nooit hoger) of een terugkerende zoekactie deze week aan de beurt is — op dit moment concreet: B2B Klanten Agent en Partnerships & Events Agent (websearch-methode, zie hun eigen vault-bestanden). Zo ja: voert die zelf uit en verwerkt de resultaten in de juiste vault-bestanden (Voorbeelden Gevonden Organisaties, in het vaste output-format).
4. **Live-site-check** (sinds 25-08-2026): WebFetch op higrip.nl — bereikbaarheid, status van de structured data (2026-08-02, nog niet naar live gekopieerd), opvallende merk-inconsistenties. Alleen signaleren, nooit zelf de site/theme aanpassen.
5. Zoekt naar recente AI-ontwikkelingen die relevant zijn voor HÏ Grip's manier van werken (contentcreatie, marketing-automatisering, e-commerce, beeld/video-generatie, agent-tooling) — geen generiek AI-nieuws, alleen wat concreet toepasbaar is.
6. Bepaalt een concrete vooruitblik voor komende week (3-5 actiegerichte punten), gebaseerd op het Stappenplan, logische vervolgstappen op eigen acties deze week, en naderende deadlines.
7. Schrijft een nieuwe, gedateerde notitie in `04_Agent_Infrastructuur/Beheer/Weekoverzicht/Week YYYY-MM-DD.md` met: voortgang per hoofdagent, wat Denzel deze week zelf heeft opgepakt, openstaande beslissingen voor lars, **vooruitblik komende week**, en het AI-nieuws-overzicht.
8. Werkt [[Agent Werk & Kwaliteit Overzicht]] bij.
9. Commit + push naar de vault-repo.

**Nooit door de routine:** outreach versturen, content publiceren, voorwaarden/prijzen bespreken of toezeggen, of iets anders dat in een hoofdagent's soul.md boven "Zelf doen" staat. De routine rapporteert en doet uitsluitend het onderzoekswerk dat al "Zelf doen" is — de beslissing/actie erop blijft bij lars.

**Wijziging 24 augustus 2026 (op verzoek van lars):** het eerste weekoverzicht toonde alleen wat er gedaan was, niet wat er nog moet gebeuren. De sectie "Vooruitblik — komende week" is daarom een vast, verplicht onderdeel geworden vanaf de volgende run (31 augustus 2026). De routine leest voortaan ook het weekoverzicht van de vorige week, zodat de vooruitblik van toen kan worden meegenomen bij het bepalen van wat er deze week is gebeurd.

**Wijziging 25 augustus 2026 (op verzoek van lars, "automatiseer meer bestaande sub-agents"):** de routine voert nu ook een lichte, wekelijkse live-site-check uit (WebFetch op higrip.nl: bereikbaarheid, of de structured data van 2026-08-02 inmiddels naar live is gekopieerd, opvallende merk-inconsistenties). Dit operationaliseert regels die al in [[Agent Takenverdeling & Grenzen]] stonden ("Live site monitoren — Wekelijks", "Design-consistentie checken — Wekelijks") maar nog nooit waren uitgevoerd sinds ze zijn vastgelegd (14 juli 2026). De routine mag hierbij nooit zelf iets aan de site/theme aanpassen — alleen signaleren met een voorstel, net als bij een gevonden probleem in de kwaliteitscontrole-loop.

---

## Planning

- **Schema:** elke maandag 06:00 UTC = 08:00 Amsterdam-tijd (zomertijd). Let op: in de winter (wintertijd) komt dit uit op 07:00 lokale tijd — cron staat vast in UTC, dus dit schuift automatisch mee met de klok-wissel. Melden als dat een probleem wordt.
- **Model:** claude-sonnet-5.
- **Omgeving:** Anthropic cloud (default environment) — de routine draait los van lars' eigen laptop, heeft dus geen toegang tot lokale bestanden buiten wat via git gecloned wordt.

## Bekende risico's / nog te checken

- **Schrijftoegang tot de vault-repo:** de routine moet kunnen `git push`. Als de cloud-omgeving geen schrijftoegang tot deze (privé?) repo heeft, faalt de laatste stap — dan moet dat eerst geregeld worden via de omgeving-instellingen.
- **Kwaliteit van de "Zelf doen"-beslissing:** de routine bepaalt zelf of een zoekactie "aan de beurt" is; als dat te vaak/te weinig blijkt, bijstellen in de routine-prompt (via `update`).

---

## Gerelateerde bestanden

- [[soul Denzel]] — Het mandaat waar deze routine uitvoering aan geeft
- [[Stappenplan — Verdere Bouw]]
- [[Feedback & Iteratie Log]]
- [[Evaluatiecriteria (B2B Klanten)]], [[Voorwaarden Samenwerking]] — Criteria die de routine gebruikt bij een zoekactie
