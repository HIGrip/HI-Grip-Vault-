---
type: kennis
gebied: denzel
bijgewerkt: 2026-10-21
status: concept — ter beoordeling door Lars
---

# Kwaliteitscontrole

> Hoe Denzel kwaliteit bewaakt zonder zelf alles te lezen. Bouwt voort op stap 5 en 6 van het [[Opdrachtprotocol]]; de toetslijsten per domein staan bij de QA-agents ([[Toetsregels]]).

## Principe

Wie maakt, beoordeelt zijn eigen werk te mild. Daarom toetst iemand anders, met alleen het **echte resultaat** en de succescriteria, nooit de samenvatting. De QA-agents zijn die vaste, onafhankelijke toetsers: elk met de lijst van zijn eigen domein. Sinds 21-10-2026 hangt elke QA-agent onder zijn eigen hoofdagent (Website-QA onder de Website Agent, enzovoort). Het verdict gaat naar die hoofdagent en altijd als kopie naar Denzel. De hoofdagent mag een verdict niet aanpassen of tegenhouden. Denzel leest geen volledige toetsing. Hij checkt de kopie van het verdict, snel, en leest het stuk zelf alleen bij een escalatie (besloten door Lars op 12-10-2026).

## Risiconiveau — bepaalt hoe diep er getoetst wordt

Denzel bepaalt het niveau bij het begin van de opdracht en legt het vast in de briefing. De hoofdagent houdt zich eraan.

| Niveau | Voorbeelden | Wie toetst |
|---|---|---|
| **Laag** | Interne onderzoeksnotitie, ruwe kandidatenlijst, vault-documentatie | Zelfcheck door de maker en een steekproef door Denzel. De QA-agent alleen op feiten als er cijfers in staan |
| **Midden** | Contentvoorstel, caption, websitecopy, e-mailconcept, SEO-titel en meta | De QA-agent van het domein: feiten, merk en grenzen |
| **Hoog** | Alles wat live kan, naar buiten gaat of geld of claims raakt: themawijziging, outreachtekst, publicatie, partnerbenadering, regelgeving | De QA-agent volledig, en de Stafchef (Operations Agent) bewaakt dat het daarna op Lars wacht. Bij een claim of nieuwe regel: ook een bron van buiten de vault |

Twijfel tussen twee niveaus: neem het hogere.

## De route

```
Denzel kiest niveau → hoofdagent levert → eigen QA-agent toetst (alleen lezen) → verdict naar de hoofdagent, kopie naar Denzel
   GOED       → naar Lars of klaar bij "Zelf doen"; Denzel hoeft niet te lezen
   CORRIGEER  → de hoofdagent stuurt regel en bewijs terug naar de maker; maximaal 2 rondes
   ESCALEER   → Denzel beslist en meldt zo nodig aan Lars
→ Stafchef (Operations Agent) legt vast in het kwaliteitslog
```

## Het verdict

Elke QA-agent geeft één verdict per stuk werk, in dit formaat:

```
bewaker: <naam van de QA-agent>
oordeel: GOED | CORRIGEER | ESCALEER
regel: <welke regel of welk bestand geschonden is, met pad>
bewijs: <wat er is aangetroffen, met plek of uitkomst>
advies: <wat de maker moet doen>
ernst: blokkerend | belangrijk | klein
gecontroleerd: <wat echt is nagelopen>
niet gecontroleerd: <wat niet kon of niet is gedaan>
```

- **Blokkerend:** fout, grensschending of verzonnen of onbronde feiten. Altijd CORRIGEER of ESCALEER.
- **Belangrijk:** mist iets wat de opdrachtgever zou verwachten. CORRIGEER.
- **Klein:** noteren in het verdict, geen ronde waard. Het werk kan door.
- Een verdict zonder "niet gecontroleerd" is onvolledig. Een QA-agent die niets kan opnoemen heeft waarschijnlijk te weinig gecontroleerd.

## Wat de hoofdagent en Denzel doen met een verdict

De hoofdagent handelt het verdict af. Denzel krijgt altijd een kopie en doet het volgende:

| Verdict | Denzel |
|---|---|
| GOED | Leest niets. Eens per week een steekproef van enkele GOED-verdicten: komt het stuk echt overeen? *(voorstel: aantal door Denzel te bepalen, begin met twee per week)* |
| CORRIGEER | Leest alleen het verdict: staan er een regel en bewijs bij? De hoofdagent stuurt het zelf terug naar de maker, met die regel en dat bewijs. Geen "maak het beter". Denzel grijpt alleen in als de hoofdagent het verdict negeert, als het na twee rondes niet goed is, of als hetzelfde probleem terugkomt. Het stuk zelf leest hij niet |
| ESCALEER | Leest alles. Lukt oplossen binnen de hoofdagent, dan laat hij die het oplossen. Anders naar Lars, met wat er geprobeerd is |

## Correctierondes

- Maximaal **twee** rondes. Daarna ESCALEER, met wat er al geprobeerd is.
- Keert hetzelfde probleem terug (patroon, tweede keer)? Niet alleen corrigeren: een leerregel schrijven of aanscherpen volgens [[Verbeterlus]], en bij een structureel gat een voorstel aan Lars (bijvoorbeeld een ontbrekende tool voor een agent).
- Een **grensschending wordt nooit stil gecorrigeerd.** Altijd melden aan Lars.

## Bewijs, geen mening

Een toets noemt altijd waar het uit blijkt: een bestandspad, een curl-uitkomst, een thema-check, een bronlink. Voorbeelden van bewijs per domein staan in de toetslijsten. "Ziet er goed uit" is geen verdict.

## Wanneer QA en hoofdagent het oneens zijn

- Gaat het over een **regel** (feit, grens, merkregel): de regel wint. Denzel beslist niet over de regel zelf.
- Gaat het over een **inhoudelijke keuze** (welke invalshoek, welke prioriteit): Denzel beslist niet namens de hoofdagent. Hij legt het voor aan Lars.
- Is de regel zelf onduidelijk of verouderd: melden en laten vaststellen, en de QA-lijst daarna aanpassen.

## Vastleggen

- Elk verdict komt als rij in het kwaliteitslog: [[Kwaliteitslog Overzicht]]. Nieuwe rij of statuswijziging, nooit een oude rij overschrijven.
- Statuslegenda: ✅ OK, 🔁 Teruggestuurd, ✅ Opgelost na correctie, 🚩 Geëscaleerd naar Lars, ⏳ Wacht op Lars, ⏹ Gestopt. Zie [[Agent Werk & Kwaliteit Overzicht]] voor de volledige betekenis.
- Scorekaart per agent (eerste keer goed, correctierondes, herhaalde fouten, onbronde feiten): [[Verbeterlus]].

## Wat deze controle niet doet

- De technische sitecontrole blijft bij de SEO-regressiecheck. Afvinken doen de actiecontrole (met bewijs) en de Stafchef van de Operations Agent (in het dashboard, met bewijs).
- Geen toetsing van smaak of strategie. Dat is een besluit voor Lars.

> Map: [[03 Denzel — Index]]
