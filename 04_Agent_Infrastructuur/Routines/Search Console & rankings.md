# Routine — Search Console & rankings (wekelijks, woensdag)

> Promptbestand. De routine bevat alleen: "Lees en volg `04_Agent_Infrastructuur/Routines/Search Console & rankings.md` in de HÏ Grip-vault." Nieuw, eerste in de rij (besluit 25 sep 2026).

## Rol
Laten zien hoe higrip.nl het in Google doet: posities, vertoningen, klikken en zoektermen, en wat er deze week veranderd is. Daarnaast bewaken of de verbeteringen van andere routines in Google iets opleveren. Je controleert geen site-techniek (dat doet de regressiecheck) en je bouwt niets (dat doet de conversietest).

## Benodigd
- **Search Console + GA4:** `python 05_Research/_tools/google_data.py gsc --dagen 7 --top 50` (en `--dagen 28`) en `... ga4`. Draai eerst `... check`. Geeft Search Console "FOUT"? Meld dan de foutmelding in je notitie en stop het Search Console-deel. Verzin geen cijfers.
- Websearch, en schrijfrechten op de vault.

## Stap 1 — Lees eerst
`CLAUDE.md`, `00_Brand_Core/Feiten & Actuele Staat.md` (hoofdkeyword, long-tails, concurrenten), `05_Research/_geheugen/search-console.md`, de backlog en `05_Research/_backlog/CONTROLE.json` (wat de actiecontrole als gedaan, open, handmatig of dubbel heeft vastgelegd). Volg de geheugenregel. Je vinkt zelf niets af.

## Stap 2 — Meten (Search Console, laatste 7 dagen tegenover de 7 dagen daarvoor, plus 28 dagen)
1. **Totaal:** klikken, vertoningen, CTR en gemiddelde positie. Kijk ook apart naar AI Overviews/AI Mode als het generatieve-AI-rapport beschikbaar is.
2. **Zoektermen:** top 25 op vertoningen. Markeer voor elk: nieuw (niet in het geheugen), gestegen of gedaald (≥ 3 posities), en merk of niet-merk (bevat "hi grip"/"higrip").
3. **Kernkeywords volgen:** "gripsokken", "gripsokken kopen", "gripsokken voetbal", "gripsokken padel", "gripsokken tennis", "gripsokken rugby", "antislip sokken", "grip socks", plus de long-tails uit het feitenbestand. Noteer per keyword de positie en de rankende URL.
4. **Pagina's:** top 15 op klikken en de grootste stijgers en dalers. Controleer of de juiste pagina rankt: rankt `/` op "gripsokken voetbal" terwijl er een sportpagina is, dan is dat **kannibalisatie**.
5. **Kansen:** zoektermen op positie 5–20 met ≥ 20 vertoningen ("striking distance"), en pagina's met veel vertoningen maar een CTR onder 2% (titel of meta verbeteren).
6. **Indexering:** het aantal geïndexeerde tegenover niet-geïndexeerde pagina's, met de redenen. Staan er nieuwe fouten in "Pagina's"?
7. **Doorwerking:** zoek in `_geheugen/seo-conversietest.md` welke pagina's zijn aangepast, en rapporteer hun trend sinds de startdatum. Doe hetzelfde voor acties die de actiecontrole als gedaan bevestigde (`sinds` in `CONTROLE.json`, of de regel `**Bevestigd:**` in `AFGEROND.md`).

Te weinig data (bijvoorbeeld minder dan 100 vertoningen per zoekterm)? Zeg dat en trek geen conclusies.

## Stap 3 — Output
1. **Notitie** `05_Research/JJJJ-MM-DD-search-console.md`: `bron: routine`, `routine: search-console`, `categorie: SEO`, volgens het sjabloon in `PROCEDURE.md` (`kerntitel`, vaste volgorde). Klikken, vertoningen, CTR en positie gaan in `## Kerncijfers`, de tabellen onder `## Bevindingen`. Inhoud:
   - tabel met de totalen (deze week, vorige week, verschil)
   - tabel met kernkeywords (positie, verschil, URL)
   - nieuwe zoektermen
   - kansen (striking distance, lage CTR)
   - kannibalisatie
   - doorwerking van eerdere verbeteringen
2. **Backlog:** maximaal 3 nieuwe punten per week, alleen concrete kansen (bijvoorbeeld "titel /collections/gripsokken herschrijven: 340 vertoningen, CTR 0,6%"). Prefix `[search-console]`. Stel niets voor wat al in de backlog staat of in `CONTROLE.json` als `gedaan` of `dubbel` staat. Werk daarna de tellerregel bij met `python 05_Research/_tools/acties.py kop --door search-console`.
3. **Geheugen:** per week één regel met de kerncijfers, plus een regel per nieuw behandeld keyword of kans. Bij de volgende run vergelijk je hiermee.
4. **Afronden:** procedure B, A3, A4, A5 en A6. Op het dashboard verschijnt dit als reeks **GS · Search Console & rankings**.
