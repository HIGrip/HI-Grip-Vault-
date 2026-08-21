# Denzel Weekoverzicht — Routine

> Technische opzet van het wekelijkse, geautomatiseerde Denzel-overzicht. Vastgesteld 21 augustus 2026 op verzoek van lars: hij wil niet meer zelf hoeven aansturen hoe vaak een terugkerende taak (bv. een B2B-/Events-zoekactie) gebeurt, en wil één wekelijks moment met Denzel over voortgang/doelen — geautomatiseerd, niet iets wat hij zelf hoeft te starten. Zie [[soul Denzel]] en `identiteit Denzel.md` voor het mandaat zelf.

---

## Wat de routine doet (elke maandag)

1. Clonet de vault-repo (`github.com/HIGrip/HI-Grip-Vault-`) vers.
2. Leest de voortgang tegen de doelen: [[Stappenplan — Verdere Bouw]], [[Feedback & Iteratie Log]], en de status-velden in elk hoofdagent-`identiteit.md`.
3. Beslist zelf (binnen de "Zelf doen"-grens van de betreffende hoofdagent, nooit hoger) of een terugkerende zoekactie deze week aan de beurt is — op dit moment concreet: B2B Klanten Agent en Partnerships & Events Agent (websearch-methode, zie hun eigen vault-bestanden). Zo ja: voert die zelf uit en verwerkt de resultaten in de juiste vault-bestanden (Voorbeelden Gevonden Organisaties, in het vaste output-format).
4. Zoekt naar recente AI-ontwikkelingen die relevant zijn voor HÏ Grip's manier van werken (contentcreatie, marketing-automatisering, e-commerce, beeld/video-generatie, agent-tooling) — geen generiek AI-nieuws, alleen wat concreet toepasbaar is.
5. Schrijft een nieuwe, gedateerde notitie in `04_Agent_Infrastructuur/Beheer/Weekoverzicht/Week YYYY-MM-DD.md` met: voortgang per hoofdagent, wat Denzel deze week zelf heeft opgepakt, openstaande beslissingen voor lars, en het AI-nieuws-overzicht.
6. Commit + push naar de vault-repo.

**Nooit door de routine:** outreach versturen, content publiceren, voorwaarden/prijzen bespreken of toezeggen, of iets anders dat in een hoofdagent's soul.md boven "Zelf doen" staat. De routine rapporteert en doet uitsluitend het onderzoekswerk dat al "Zelf doen" is — de beslissing/actie erop blijft bij lars.

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
