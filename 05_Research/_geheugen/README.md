# Geheugen van de routines

Elke routine heeft hier één geheugenbestand. Omdat het in de vault staat (git), overleeft het elke run, ook in de cloud, en kan iedereen die met de vault werkt het lezen.

| Bestand | Routine |
|---|---|
| `actiecontrole.md` | Actiecontrole: welke controlemethode per soort actie werkt, wat niet te controleren is |
| `growth-radar.md` | Growth Radar: behandelde onderwerpen (anti-herhaling) |
| `uitvoerder.md` | Uitvoerder: uitgevoerde opdrachten en werkwijzen die werkten |
| `seo-regressiecheck.md` | SEO-regressiecheck: wat per URL is gecontroleerd, openstaande afwijkingen |
| `seo-conversietest.md` | SEO- en conversietest: gebouwde items, testplannen, evaluatiedata |
| `denzel-week.md` | Denzel-weekoverzicht: wat is gesignaleerd en hoe lang het al openstaat |
| `search-console.md` | Search Console & rankings: kerncijfers per week, behandelde keywords en kansen |
| `verbanden.md` | Verbanden & kansen: gegeven kansen, maandedities, opgepakte kansen naar de backlog |
| `klantstem.md` | Klantstem: thema's (klachten en wensen) en de bronrotatie |
| `website-ux.md` | Website-UX: voorstellen per paginatype en welk type aan de beurt is |
| `productradar.md` | Productradar: behandelde kansen en hun uitkomst |
| `concurrentie.md` | Concurrentie-monitor: laatste prijzen, gemelde producten, pagina's en ads, rotatie |
| `materialen.md` | Materialen & productie: gevolgde deadlines en het diepte-onderwerp aan de beurt |
| `backlinks-merchant.md` | Backlinks & Merchant Center: linkinventaris en Merchant-stand |
| `strategie-maand.md` | Vervallen: opgegaan in `verbanden.md` (maandeditie van Verbanden & kansen) |

## De vaste geheugenregel (geldt voor élke routine)

1. **Lees eerst** je eigen geheugenbestand, `../_backlog/ACTIEBACKLOG.md` en `00_Brand_Core/Feiten & Actuele Staat.md`. Pas daarna ga je zoeken of meten.
2. **Alleen nieuwe punten.** Wat al in je geheugen of in de backlog staat, meld je niet opnieuw als nieuws, ook niet in andere woorden.
3. **Uitzondering: oude punten die veranderd of verlopen zijn.** Dan werk je het bestaande punt bij (backlog of geheugen) met datum en wat er veranderd is. Je maakt geen tweede punt aan.
4. **Niets nieuws gevonden?** Dat is een geldige uitkomst. Schrijf het kort op en verzin geen vulling.
5. **Schrijf aan het eind** per behandeld onderwerp één regel in je geheugenbestand: `JJJJ-MM-DD | thema | onderwerp | notitie-id`. Commit en push samen met je notitie.
6. **Feiten horen niet in het geheugen.** Een veranderde prijs, URL of claim gaat naar `Feiten & Actuele Staat.md`. Het geheugen houdt alleen bij wat je al behandeld hebt.
7. **Runregel voor de guard.** Routines die om de twee weken of maandelijks draaien, schrijven als laatste regel `JJJJ-MM-DD | run | <uitkomst> | <notitie-id>`. Aan het begin leest de guard de laatste runregel (`grep -E "^[0-9]{4}-[0-9]{2}-[0-9]{2} [|] run [|]" <bestand> | tail -1`) en stopt bij een run van minder dan 10 dagen (tweewekelijks) of 25 dagen (maandelijks) geleden. Zo kan de routine ook op een wekelijks schema staan.
