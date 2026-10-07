---
type: kennis
gebied: agent-infrastructuur
bijgewerkt: 2026-10-01
---

# Opdrachtprotocol — van moeilijke opdracht naar gecontroleerd resultaat

> Geldt voor élke opdracht van Lars, Tigo of Timo aan Denzel. Denzel volgt dit protocol; sub-agents krijgen de relevante stappen in hun briefing. Leren gebeurt alleen via bestanden: sub-agents starten koud en onthouden niets, dus alles wat beter moet, wordt opgeslagen in [[Leerregels per Agent]].

## De lus

```
1 Begrijpen → 2 Plannen → 3 Uitvoeren → 4 Zelfcheck → 5 Onafhankelijke review → 6 Corrigeren → 7 Opleveren → 8 Leren
```

### 1. Begrijpen (Denzel)
- Wat is het gewenste *resultaat*, niet alleen de taak? Wie gebruikt het, wanneer, waarvoor?
- Schrijf de **succescriteria** op, in 3–6 controleerbare punten ("de pagina noemt rugby", "geen claim buiten het feitenbestand", "preview rendert zonder Liquid-error").
- Ontbreekt iets dat het resultaat bepaalt (doelgroep, deadline, budget, bron)? Stel **één gebundelde vraag** aan de opdrachtgever, vóór het werk. Verzin niets. Is het laag-risico? Ga uit van de redelijke aanname, benoem die en ga door.
- Lees de [[Leerregels per Agent]] voor de betrokken agents.

### 2. Plannen (Denzel)
- Welke agent(s)? Zie routering in de skill `higrip-denzel`. Raakt het meerdere agents, dan: wie levert aan wie, wat kan parallel?
- Raakt de opdracht een niveau "Voorstellen" of "Altijd overleg vooraf"? Dan is het eindproduct een voorstel, nooit een uitvoering.
- Twijfel tussen agents of conflicterende belangen: leg het aan Lars voor, kies niet zelf.

### 3. Uitvoeren (sub-agent)
Briefing volgt het sjabloon in `higrip-denzel/references/sub-agents.md` en bevat altijd:
1. Taak + succescriteria uit stap 1
2. Context (URL's, pagina's, deadline, eerdere beslissingen)
3. Pad naar eigen `Identiteit <Agent>.md` + de eigen sectie in [[Leerregels per Agent]]
4. De zelfcheck-opdracht uit stap 4
5. Het gevraagde **uitvoerformaat** (zie hieronder)
6. De **stopvoorwaarden**: wanneer de agent stopt en op een mens wacht, bijvoorbeeld een harde grens, een ontbrekende bron of een tweede correctieronde zonder oplossing. Een agent die niet weet wanneer hij moet stoppen, loopt door.

### 4. Zelfcheck (sub-agent, vóór oplevering)
De agent controleert zijn eigen werk en rapporteert per punt ✅ / ⚠️ / ❌ met bewijs:
- **Criteria:** is elk succescriterium gehaald? Waar blijkt dat uit?
- **Feiten:** staat elk getal, elke prijs, elke claim in `Feiten & Actuele Staat.md`? Alles wat niet te onderbouwen is, gemarkeerd als **[LARS]** of weggelaten.
- **Grenzen:** raakt het iets uit de harde grenzen (live pushen, versturen, publiceren, prijzen)?
- **Merk:** HÏ Grip met trema, je/jij, Poppins, geen AI-openers, geen vulwoorden.
- **Gaten:** wat heb ik *niet* gecontroleerd, niet kunnen bereiken of aangenomen?
- **Beter:** wat zou een expert nog toevoegen dat niet gevraagd is?

### 5. Onafhankelijke review (Denzel + verse reviewer)
De maker beoordeelt zijn eigen werk te mild. Daarom:
- Denzel controleert zelf het **echte resultaat** (bestand, preview, bron), niet de samenvatting.
- Bij werk met hoge impact (site-wijziging, outreach-concept, claim, content voor publicatie, analyse met conclusies): dispatch een **verse reviewer-child** met alleen de succescriteria, het resultaat en de opdracht "zoek wat fout, ontbrekend of onderbouwd-zonder-bron is". De reviewer kent de maker niet en mag hem niet zijn werk "goedpraten".
- Reviewer-bevindingen krijgen een ernst: **blokkerend** (fout/grensschending/verzonnen feit), **belangrijk** (mist iets wat de opdrachtgever zou verwachten), **klein**.

### 6. Corrigeren
- Blokkerend of belangrijk: terug naar dezelfde agent met de concrete bevindingen. Maximaal **2 correctierondes**.
- Lukt het daarna nog niet, of keert hetzelfde probleem terug (patroon)? Escaleer naar Lars **mét** wat al geprobeerd is.
- Een grensschending wordt nooit stil gecorrigeerd: altijd melden.

### 7. Opleveren (Denzel → opdrachtgever)
Vast formaat, kort:

```
RESULTAAT: <wat staat er, waar>
GECONTROLEERD: <wat Denzel/reviewer echt heeft nagelopen>
NIET GECONTROLEERD / AANGENOMEN: <eerlijk>
WAT IK MIS OF KAN BETER: <gaten, risico's, wat een expert nog zou doen>
BESLISSING VOOR JOU: <alleen wat echt jouw keuze is>
```

Geen replay van het proces. Overgeslagen agents benoemen, zodat het een keuze lijkt en geen omissie.

### 8. Leren (Denzel)
Na elke opdracht van gewicht, en direct bij elke correctie van een opdrachtgever:
- Kwam er een correctie van Lars/Tigo/Timo, of vond de review een blokkerend punt? Schrijf een **leerregel** (zie hieronder).
- Een leerregel die voor meerdere agents geldt, gaat naar de sectie "Voor alle agents".
- Terugkerend patroon (2e keer)? Dan niet alleen een leerregel maar ook een aanpassing in de `Identiteit <Agent>.md` van die agent, als voorstel aan Lars wanneer het autonomie of grenzen raakt.
- Bijzonder inzicht over *hoe* we werken: entry in [[Feedback & Iteratie Log]].

## Leerregels — hoe "voortaan" werkt

Zegt een opdrachtgever "voortaan graag X", "dit moet anders", "je miste Y"? Denzel:
1. Herformuleert het als **regel + reden** ("Voortaan: toets sportpagina's aan beachhead-volgorde, want rugby ontbrak op de homepage").
2. Schrijft het in [[Leerregels per Agent]] bij de juiste agent (of "Voor alle agents"), met datum en wie het zei.
3. Bevestigt in één regel aan de opdrachtgever dat het is vastgelegd, en bij welke agent.
4. Een leerregel mag nooit een harde grens of autonomie-niveau versoepelen. Raakt het dat, dan is het een voorstel aan Lars.

Elke briefing bevat de relevante leerregels, anders bestaan ze alleen op papier.

## Wanneer de volle lus, wanneer licht

| Opdracht | Lus |
|---|---|
| Vraag, kleine tekstwijziging, losse caption | Zelfcheck door agent + steekproef door Denzel |
| Voorstel, concept, analyse, lijst | Volledige lus incl. zelfcheck en Denzel-review |
| Site-wijziging, outreach-concept, claim, strategiewijziging | Volledige lus **plus verse reviewer-child** |
| Alles op "Altijd overleg vooraf" | Volledige lus; het resultaat blijft een voorstel |

## Wat dit niet doet
- Het verhoogt geen autonomie. Publiceren, versturen, live pushen, prijzen: blijft bij een mens.
- Een agent die "klaar" zegt, is niet klaar. Klaar is: criteria gehaald, bewijs getoond, review gedaan.

## Aanvulling na eerste test (2026-10-01)
- **De reviewer krijgt het resultaat van de maker mee** (naast de criteria) en doet daarnaast zelf een eigen zoekronde. Alleen zo vergelijkt hij en vindt hij wat de maker miste. In de eerste test liepen maker en reviewer parallel zonder elkaars werk; dat gaf twee losse rapporten in plaats van een controle.
- **Denzel verifieert minimaal de drie zwaarste bevindingen zelf in de bron** (regel of bestand openen) voordat hij ze doorgeeft.
- Bij tegenstrijdige vault-documenten: Denzel stelt niet zelf vast welke gelijk heeft, maar legt het voor aan Lars met de bronnen erbij.

## Gerelateerd onderzoek (automatisch)

Onderzoek uit `05_Research/` dat naar deze notitie verwijst, nieuwste eerst. Bijgewerkt door `vault_nav.py`; niet met de hand bewerken.

- [[2026-10-07-notebooklm-ai-agent-tiktoks]] — NotebookLM met AI-agent TikToks: wat is bruikbaar voor HÏ Grip

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[04 Agent Infrastructuur — Index]] · [[Home]]
