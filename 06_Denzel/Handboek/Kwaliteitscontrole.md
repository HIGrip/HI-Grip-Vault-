---
type: kennis
gebied: denzel
bijgewerkt: 2026-10-02
status: concept — ter beoordeling door Lars
---

# Kwaliteitscontrole

> Hoe Denzel kwaliteit bewaakt zonder zelf alles te lezen. Bouwt voort op stap 5 en 6 van het [[Opdrachtprotocol]]; de toetslijsten per domein staan bij de QA-agents ([[Toetsregels]]).

## Principe

Wie maakt, beoordeelt zijn eigen werk te mild. Daarom toetst iemand anders, met alleen het **echte resultaat** en de succescriteria, nooit de samenvatting. De QA-agents zijn die vaste, onafhankelijke toetsers: elk met de lijst van zijn eigen domein. Denzel leest geen volledige toetsing meer, maar het verdict, en het stuk zelf als dat afwijkt.

## Risiconiveau — bepaalt hoe diep er getoetst wordt

Denzel bepaalt het niveau bij het begin van de opdracht en legt het vast in de briefing.

| Niveau | Voorbeelden | Wie toetst |
|---|---|---|
| **Laag** | Interne onderzoeksnotitie, ruwe kandidatenlijst, vault-documentatie | Zelfcheck door de maker en een steekproef door Denzel. De QA-agent alleen op feiten als er cijfers in staan |
| **Midden** | Contentvoorstel, caption, websitecopy, e-mailconcept, SEO-titel en meta | De QA-agent van het domein: feiten, merk en grenzen |
| **Hoog** | Alles wat live kan, naar buiten gaat of geld of claims raakt: themawijziging, outreachtekst, publicatie, partnerbenadering, regelgeving | De QA-agent volledig, en de Stafchef bewaakt dat het daarna op Lars wacht. Bij een claim of nieuwe regel: ook een bron van buiten de vault |

Twijfel tussen twee niveaus: neem het hogere.

## De route

```
Hoofdagent levert → Denzel kiest niveau → QA-agent toetst (alleen lezen) → verdict
   GOED       → naar Lars of klaar bij "Zelf doen"; Denzel hoeft niet te lezen
   CORRIGEER  → terug naar de hoofdagent met regel en bewijs; maximaal 2 rondes
   ESCALEER   → Denzel beslist en meldt zo nodig aan Lars
→ Stafchef legt vast in het kwaliteitslog
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

## Wat Denzel doet met een verdict

| Verdict | Denzel |
|---|---|
| GOED | Leest niets. Eens per week een steekproef van enkele GOED-verdicten: komt het stuk echt overeen? *(voorstel: aantal door Denzel te bepalen, begin met twee per week)* |
| CORRIGEER | Leest verdict en stuk. Stuurt de regel en het bewijs naar de hoofdagent, via het postvak. Geen "maak het beter" |
| ESCALEER | Leest alles. Lukt oplossen binnen de hoofdagent, dan doet hij dat. Anders naar Lars, met wat er geprobeerd is |

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

- De technische sitecontrole (SEO-regressiecheck) en het afvinken van acties (actiecontrole) blijven bij die routines.
- Geen toetsing van smaak of strategie. Dat is een besluit voor Lars.

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[Home]]
