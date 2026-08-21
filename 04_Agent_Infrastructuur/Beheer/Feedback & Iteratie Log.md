# Feedback & Iteratie Log

> Bevindingen uit het bouwen/gebruiken van sub-agents — vastgelegd per iteratie, zodat de volgende sub-agent niet dezelfde uitzoek-omweg hoeft te maken. Zie [[Stappenplan — Verdere Bouw]] voor de fasering.

---

## 2026-08-08/09 — Eerste 5 sub-agent-skills (Design, SEO, Copy, CRO, Video)

**Wat er gebeurde:** Design Agent werd als pilot gekozen (Website Agent had als enige al een complete autonomie-tabel en goedkeuringsworkflow — kortste afstand tot bruikbaar). Na de eerste skill bleek het patroon zo direct herbruikbaar dat dezelfde dag nog 4 andere sub-agents zijn gedaan.

**Bevindingen:**
- **Skills horen niet in de vault, maar in een aparte, gedeelde repo.** Eerste versie was een onderzoeksoverzicht (Artifact) van wát een skill zou moeten bevatten — dat bleek niet wat lars bedoelde. Het echte werk is een `.md`-bestand in `commands/` van `HI-Grip-claude-setup`, direct `/`-activeerbaar, net als het bestaande `/marketing-psychology`. Les: bij "skill" navragen/checken of een bestaande skill-repo-conventie al bestaat vóórdat je een nieuw format verzint.
- **Een skill heeft twee lagen nodig, niet één.** Eerste versies bevatten alleen HÏ Grip-operationele content (regels, huidige status). Lars vroeg expliciet om ook "pure stof" — algemene vaktheorie los van HÏ Grip, zoals `/marketing-psychology` die heeft (Kahneman, Cialdini, etc. staan daar zonder HÏ Grip-koppeling). Elke skill is daarna aangevuld met een theorie-sectie (hoe SEO/CRO/copywriting/montage/Liquid-rendering *echt* werkt) plus een symptoom→oorzaak-tabel, in dezelfde stijl als `/marketing-psychology`.
- **Niet elke sub-agent heeft een dedicated skill nodig.** Caption & Copy Agent en Content Strategie & Planning Agent bleken al grotendeels gedekt door de generieke `/social-content`- en `/content-strategy`-skills (die al in de repo stonden, niet HÏ Grip-specifiek). Een nieuwe skill bouwen was daar dubbel werk geweest — eerst checken wat een bestaande generieke skill al dekt, vóór een dedicated versie te bouwen.
- **Partnership Agent-sub-agents zijn geen skills.** Influencer & Creator / B2B Klanten / Partnerships & Events zijn workflow/automatisering (zoals het bestaande IG-zoekscript), geen taak die je handmatig met een `/`-commando aanroept. Onderscheid: een skill is voor terugkerend, door lars geïnitieerd werk; een workflow draait op een trigger/schema.
- **Git-hygiëne bij een gedeelde repo:** bij het committen bleek er al een niet-gerelateerde lokale wijziging (`ig_find_creators.py`) te staan — die is bewust buiten de commit gehouden. Les: bij een gedeelde repo altijd `git status` checken en alleen de eigen bestanden stagen, nooit een brede `git add -A`.

**Resultaat:** [[Stappenplan — Verdere Bouw]] Fase 3 is hiermee inhoudelijk afgerond — niet met één pilot zoals gepland, maar met 5 tegelijk zodra het patroon zich bewees. Zie de sub-agent-status in [[Agent Hiërarchie & Structuurschema]] en de individuele `_Werkplek.md`-bestanden voor details per sub-agent.

---

## 2026-08-19 — Grenzen-formulieren Partnership Agent, Content Agent, Denzel (Fase 1 afgerond)

**Wat er gebeurde:** Alle 3 resterende grenzen-formulieren van Fase 1 zijn ingevuld. Voor Partnership Agent en Content Agent leverde het gebruikelijke vragen-format (per taakcategorie: zelf doen / voorstellen / altijd overleg) meteen een bruikbare tabel op. Bij Denzel ging de eerste ronde mis: die vragen gingen alleen over vault-onderhoud en het aanpassen van andermans grenzen — geen van beide is Denzel's kernrol.

**Bevindingen:**
- **Bij een orchestrator-achtige agent dekt het standaard taakcategorie-format niet automatisch de kernrol.** Voor de 3 hoofdagents is "wat mag je zelf, wat moet overleg" een directe vertaling van hun identiteit.md-scope (content maken, outreach sturen, etc.). Bij Denzel — wiens werk juist over de ándere agents gaat — was de eerste vragenronde te smal: hij miste "hoofdagents proactief aan het werk zetten" en "hun werk controleren voordat het bij lars komt", terwijl dat letterlijk in Denzel's eigen Rol-omschrijving staat ("hoofd van alle agents"). Les: bij een grenzen-formulier eerst de Rol/Missie-tekst in identiteit.md naast de conceptvragen leggen — dekken de vragen echt de kernfunctie, of alleen de zijkanten (administratie, edge cases)?
- **lars corrigeerde dit zelf** ("Denzel is de hoofd van alle agents die moet ze ook soort van aan het werk zetten, controleren") — geen fout die ik zelf had opgemerkt vóór het afronden. Tweede vragenronde voegde 4 gerichte vragen toe (proactief starten, kwaliteitscontrole, wat bij afwijking, controle-moment) en breidde identiteit.md's Scope en soul.md's Autonomie/Werkwijze navenant uit.
- **Resultaat qua niveaus:** vaste/terugkerende taken proactief starten = zelf doen; werk van een hoofdagent controleren tegen Brand Core/soul.md-grenzen = zelf doen; bij afwijking eerst terugsturen naar de hoofdagent voor correctie, pas escaleren naar lars als het niet lukt of een patroon wordt; controle-moment = bij élk voorstel/overleg-punt van een hoofdagent, vóórdat lars het ziet.

**Resultaat:** [[Stappenplan — Verdere Bouw]] Fase 1 is nu volledig afgerond (Website Agent, Partnership Agent, Content Agent, Denzel). Denzel's volledige tabel staat direct in `soul Denzel.md` (geen aparte Beheer-tabel nodig, want geen sub-agents en geen eigen content/code).

---

## 2026-08-21 — B2B Klanten Agent (eerste Fase 5 sub-agent, idee → in ontwikkeling)

**Wat er gebeurde:** Bij het kiezen van een eerste sub-agent voor Fase 5 bleek er al een kant-en-klaar, door lars geschreven criteria-document te bestaan (`HiGrip_B2B_Samenwerking_Criteria.docx`, OneDrive/Documents, versie 2.0) dat nergens in de vault was verwerkt — alleen indirect genoemd als bronverwijzing in [[Voorbeelden Gevonden Organisaties (B2B Klanten)]]. Docx kon niet met de standaard Read-tool geopend worden (binair bestand); omweg: kopiëren naar .zip, uitpakken met PowerShell `Expand-Archive`, `word/document.xml` uitlezen en XML-tags strippen met regex. Werkte in één keer.

**Bevindingen:**
- **Bij "hier is een extern brondocument" eerst checken of het al in de vault is overgezet, vóór je zelf criteria gaat verzinnen.** Dit document bestond al, dekte zowel Lijn A (B2B Klanten) als Lijn B (Samenwerkingen & Events) in één bestand — Deel 2 ligt klaar voor wanneer de Partnerships & Events Agent aan de beurt is, hoeft niet opnieuw uitgezocht te worden.
- **Niet elke sub-agent heeft een script/API nodig om "gebouwd" te zijn.** Vergeleken met het IG-zoekscript (draait ongevraagd op schema, geen LLM-call, kost geld) stelde lars zelf voor: "kan jij niet gewoon Google gebruiken?" — een gewone websearch, on-demand door de agent uitgevoerd, zonder API-key of Google Cloud-account. Dit is ook inhoudelijk logischer: B2B-kandidaten zijn een kleiner, lager-frequent zoekvolume dan de duizenden Instagram-accounts die het IG-script doorzoekt. Les: bij "hoe wordt dit gevonden/aangeroepen" niet automatisch naar het zwaarste patroon (script + API) grijpen — eerst checken of een simpelere, al beschikbare tool (hier: WebSearch) volstaat.
- **Direct getest, niet alleen beschreven:** een echte websearch op "pilates studio sportschool Rotterdam regio" (hoogste prioriteit uit [[Partnership Strategie]] én [[Evaluatiecriteria (B2B Klanten)]]'s locatie-prioriteit) leverde 5 bruikbare, echte kandidaten op, verwerkt in het vaste output-format uit de criteria (naam, type, locatie, website, doel, prioriteit, reden, status). Zonder direct contact is een score "HOOG" zelden te onderbouwen — realistische standaard is MIDDEL tot na eerste contact.
- **Legacy-bestanden gevonden die vermoedelijk overbodig zijn:** [[Merk & Bedrijf Database]] en [[Retailer Database]] stonden leeg en lijken gedekt door de al bestaande, actief gebruikte combinatie [[Voorbeelden Gevonden Organisaties (B2B Klanten)]] + [[Actieve Samenwerkingen (B2B Klanten)]] + [[Pipeline Tracker]]. Niet verwijderd — geflagd voor bevestiging door lars, zelfde voorzichtige aanpak als eerder bij twijfelachtige content.

**Resultaat:** B2B Klanten Agent staat op "in ontwikkeling". Nog niet getest: daadwerkelijke outreach en pipeline-doorstroom (het volgende logische vervolg zodra lars klaar is om een van deze 5 kandidaten te benaderen).

**Vervolg, zelfde dag:** bij het doorpakken naar Partnerships & Events Agent bleek de aanname hierboven ("kan dit patroon direct hergebruiken") achterhaald — dit was al gedaan, en beter dan verwacht. [[Voorwaarden Samenwerking]] (= Deel 2 van de docx) stond al gevuld, mét een eigen scoreformule-uitbreiding (budget-check) en concrete afwijs-voorbeelden (WISH Streetball Courts, Padelclub Rotterdam) die niet uit de docx komen — dus eerder al eigen werk. [[Zoek Script & Gids (Samenwerkingen)]] beschreef exact dezelfde websearch-aanpak die ik zonet voor B2B Klanten Agent "ontdekte", per organisatietype met concrete zoektermen. En [[Voorbeelden Gevonden Organisaties (Events)]] had al 4 HOOG-kandidaten mét telefoon/e-mail/Instagram (Powerleague Rotterdam, Panna Knock Out, Rotterdam Basketbal 3x3, Sport Ondernemers Expo — dat laatste op 4 nov 2026, tijdgevoelig). **Les, aanvullend op eerdere Fase 2-ervaring:** bij élke sub-agent/hoofdagent eerst de bestaande bestanden in de map zelf doorlezen vóórdat je "gaat bouwen" — status-velden in identiteit.md ("idee") zijn niet betrouwbaar bijgewerkt gebleken, twee keer nu (Content/Partnership vakinhoud in Fase 2, en nu Partnerships & Events Agent in Fase 5).

---

## Gerelateerde bestanden

- [[Stappenplan — Verdere Bouw]]
- [[Agent Hiërarchie & Structuurschema]]
- [[Agent Bestandsschema (Soul, Identiteit, User)]]
