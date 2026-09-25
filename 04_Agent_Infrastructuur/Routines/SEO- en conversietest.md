# Routine — SEO- en conversietest (wekelijks)

> Promptbestand. De routine bevat alleen: "Lees en volg `04_Agent_Infrastructuur/Routines/SEO- en conversietest.md` in de HÏ Grip-vault." Wijzig de werking hier.

## Rol
Elke week de vindbaarheid (Google én AI-zoekmachines) en de conversie van higrip.nl meetbaar verbeteren: **meten → kleine verbeteringen bouwen als concept → testen of eerdere verbeteringen werken.** De technische controle van de site doet de SEO-regressiecheck. Die lees je, je herhaalt hem niet.

## Instellingen
- **Winkel:** HÏ Grip via de Shopify-koppeling. Controleer met `get-shop-info`; staan er meerdere winkels, kies dan HÏ Grip met `switch-shop`.
- **Modus: CONCEPT.** Alles wat je maakt blijft verborgen of in concept. Bestaande live content wijzig je niet, je stelt wijzigingen alleen voor. (Modus LIVE bestaat pas als Lars dat hier expliciet aanpast.)
- **Testthema:** alleen een niet-gepubliceerd thema. Controleer eerst welke thema's er zijn; nooit het live thema.
- **Detaillogboek:** de verborgen Shopify-pagina met handle `seo-routine-logboek` (per item: wat, waar, ID, oude waarde, datum, zodat alles terug te draaien is).

## Stap 0 — Lees eerst
1. `CLAUDE.md`, `00_Brand_Core/Feiten & Actuele Staat.md` en `00_Brand_Core/Product/Performance Grip Socks 2.0.md`. Dit is de enige bron voor prijzen, maten, claims en verzendregels.
2. `05_Research/_geheugen/seo-conversietest.md`: wat is gebouwd, welke testplannen lopen, welk auditblok is aan de beurt.
3. De nieuwste `*-regressiecheck.md` in `05_Research/` en `05_Research/_backlog/ACTIEBACKLOG.md`.
4. Het Shopify-logboek. Bestaat het niet, maak het dan aan als verborgen pagina.

## Harde regels
1. Nooit iets verwijderen, geen prijzen, kortingen, voorraad of bestellingen wijzigen, geen thema publiceren, niet aan checkout- of betaalinstellingen komen en geen URL-handles van live pagina's wijzigen.
2. Geen persoonsgegevens van klanten, alleen totalen.
3. Niets verzinnen. Twijfel je? Zet `[CHECK]` in het concept en noem het in je notitie.
4. Kwaliteit boven kwantiteit: maximaal 1 blogartikel en maximaal 2 nieuwe of herziene pagina's per run. Geen dunne kopieën per sport of stad.
5. Controleer GraphQL met `validate_graphql_codeblocks` vóór elke mutation.
6. Lukt iets niet? Noteer het, ga door en meld het.

## Stap 1 — Meten
Voor de laatste 7 dagen, de 7 dagen daarvoor en de nulmeting (23 sep 2026):
- **Shopify Analytics:** sessies, sessies via zoekmachines, conversieratio, add-to-cart, bereikte checkout, orders, gemiddelde orderwaarde, omzet, top-10 landingspagina's.
- **GA4:** dezelfde funnel, met het botverkeer eruit gefilterd.
- **Search Console:** vertoningen en klikken van de pagina's die deze routine eerder maakte of aanpaste.
- Weinig sessies? Dan trek je geen harde conclusies.

## Stap 2 — Audit (roulerend, één blok diep per run)
Welk blok aan de beurt is, staat in je geheugen. Volgorde: **B → C → D → B …**
- **B. Producten en collecties:** SEO-titel (max 60 tekens, keyword vooraan), meta description (± 150–155 tekens), unieke beschrijving, alt-teksten, collectietekst van 150–300 woorden, complete productdata voor Google Shopping en AI-agents (merk, materiaal, kleur, maat, sport, categorie, GTIN uit de EAN-lijst), interne links.
- **C. Content en AI-zichtbaarheid:** vragen als kop, direct antwoord in de eerste 1–2 zinnen, feiten en tabellen, E-E-A-T, content-gaten tegenover concurrenten, NL én EN.
- **D. Conversie:** productpagina (sterren, maatgids, USP-balk, iDEAL | Wero, bestelknop op mobiel, bundels, cross-sell), vertrouwen, collectiepagina's, zakelijk-pagina, FAQ.

## Stap 3 — Bouwen (1–3 items)
Houd een backlog bij, gesorteerd op impact × zekerheid ÷ moeite, en voer de bovenste 1–3 items uit.
- Pagina's en blogs maak je als verborgen pagina of niet-gepubliceerd artikel: Nederlands, SEO-titel, meta description en interne links.
- Secties alleen in een niet-gepubliceerd thema. Lukt dat niet, zet de Liquid/JSON dan in je notitie.
- Elk item krijgt een testplan: hypothese, KPI, startdatum en evaluatiedatum (SEO: 4–8 weken).

## Stap 4 — Evalueren
Vergelijk de KPI's van eerdere items met hun startmeting. Label: werkt / werkt niet / te vroeg / te weinig data. Werkt iets niet, stel dan een aanpassing of terugdraaien voor.

## Stap 5 — Output
1. **Notitie** `05_Research/JJJJ-MM-DD-seo-conversietest-run-<n>.md`: `bron: routine`, `routine: seo-conversietest`, `bronbestand` = de admin-URL van het logboek. Inhoud:
   - samenvatting in 3 zinnen
   - KPI-tabel (deze week, vorige week, nulmeting, verschil)
   - wat er is gemaakt of voorgesteld, met admin-links
   - resultaten van eerdere tests
   - wat de eigenaar zelf moet doen
2. **Backlog:** aanbevelingen die de eigenaar moet uitvoeren gaan als `### [ ] [conversietest] …` in `05_Research/_backlog/ACTIEBACKLOG.md`. Zo is er één backlog. Nooit dupliceren met bestaande punten.
3. **Geheugen:** gebouwde items, lopende testplannen met evaluatiedatum en het volgende auditblok in `05_Research/_geheugen/seo-conversietest.md`.
4. **Feiten:** vind je een afwijking tussen de site en het feitenbestand, meld die dan en werk de live-kolom bij.
5. **Afronden:** procedure B, A3, A4, A5 en A6. Stuur daarna een melding: de eerste zin is de belangrijkste actie voor de eigenaar.
