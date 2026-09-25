# Denzel-weekoverzicht aanpassen op info@ (te doen door iemand die op info@higrip.nl is ingelogd)

> Denzel draait als cloudroutine onder **info@higrip.nl** (`trig_01D9XwMiVvuq1FWr7CLoYTmN`). Vanaf andere accounts is de routine niet te bewerken; de API geeft daar een 404. Tot deze aanpassing is doorgevoerd, schrijft Denzel het weekoverzicht naar de oude map en verschijnt het niet vanzelf op het dashboard.

## Stappen

1. Log in als info@higrip.nl en ga naar https://claude.ai/code/routines. Open de Denzel-weekroutine.
2. **Vervang de hele prompt** door deze ene regel:

   > Lees en volg `04_Agent_Infrastructuur/Beheer/Denzel Weekoverzicht — Routine.md` in de vault-repo. Lees vóór alles `CLAUDE.md`, `00_Brand_Core/Feiten & Actuele Staat.md` en `05_Research/_geheugen/denzel-week.md`, en volg de geheugenregel in `05_Research/_geheugen/README.md`.

   Daarmee staat de werking voortaan in de vault. Een wijziging aan Denzel is dan een commit, geen bewerking op claude.ai.
3. Controleer bij de routine:
   - **Repository:** `HIGrip/HI-Grip-Vault-`, met schrijfrechten.
   - **Connectors aan:** Google (Analytics + Search Console) en Shopify.
   - **Netwerk:** toegang tot higrip.nl en het open web.
4. Klik op "Run now" en controleer of er een notitie `05_Research/JJJJ-MM-DD-weekoverzicht.md` verschijnt.

## Wat er in de werking van Denzel verandert (al verwerkt in `Denzel Weekoverzicht — Routine.md`)

- **Stap 4 en 5 (live-site- en SEO-check) vervallen.** Denzel leest in plaats daarvan de nieuwste `*-regressiecheck.md` en vat die samen. De technische controle hoort bij de regressiecheck (zie de rolverdeling in `README.md`).
- **Stap 9:** het weekoverzicht gaat als notitie naar `05_Research/` (dit stond al klaar sinds 17 sep).
- **Nieuw:** het geheugen staat in `05_Research/_geheugen/denzel-week.md`. Punten die al openstaan meld je als "staat X weken open", niet als nieuwe bevinding.
