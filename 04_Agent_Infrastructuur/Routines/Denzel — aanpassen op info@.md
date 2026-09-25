# Denzel-weekoverzicht aanpassen op info@ (te doen door iemand die op info@higrip.nl is ingelogd)

> Denzel draait als cloudroutine onder **info@higrip.nl**. Vanaf andere accounts is de routine niet te bewerken.

## Gaat er iets verloren?
Nee. De volledige oude prompt staat letterlijk als back-up in [[Denzel-weekoverzicht — origineel tot 2026-09-25]]. Alles daaruit (mandaat 2b en 2c, fix-voorbereiding, sjabloon, kwaliteitsdashboard, harde grenzen) is overgenomen in het nieuwe promptbestand [[Denzel-weekoverzicht]], aangevuld met de afspraken van 21 en 25 september.

## Stappen
1. Log in als info@higrip.nl en ga naar https://claude.ai/code/routines. Open de Denzel-routine.
2. Vervang de hele prompt door deze ene regel:

   ```
   Lees en volg 04_Agent_Infrastructuur/Routines/Denzel-weekoverzicht.md in de vault-repo, volledig en in de volgorde die daar staat.
   ```

3. Controleer bij de routine:
   - **Repository:** `HIGrip/HI-Grip-Vault-`, met schrijfrechten
   - **Omgeving:** die met `GOOGLE_SA_JSON_B64`, het setup-script en netwerk "Full"
   - **Connector:** Shopify aan
4. Opslaan. Na de eerstvolgende maandag-run hoort er een notitie `05_Research/JJJJ-MM-DD-weekoverzicht.md` te staan.
