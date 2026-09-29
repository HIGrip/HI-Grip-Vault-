---
id: 2026-09-29-crm-dashboard-voorstel
titel: "CRM-module HÏ Grip-dashboard — onderzoek en voorstel"
kerntitel: "Eén relatielijst met status; Vercel Pro en een Claude API-sleutel zijn nodig"
datum: 2026-09-29
bron: los
routine: ""
categorie: B2B
status: nieuw
prioriteit: P1
samenvatting: "Bouw het CRM als één relatielijst met een status (zoals HubSpot en Attio), met een vast opvolgritme en een Vandaag-scherm, en laat facturen via Moneybird lopen in plaats van ze zelf te maken. Twee aannames kloppen niet: Vercel Hobby mag niet voor een bedrijfsdashboard (neem Pro, $20/mnd) en Hermes en de app moeten op een Claude API-sleutel draaien, niet op Claude Max."
gerelateerd: [2026-09-24-financieel-plan-2027-2031-bmc-2031, 2026-09-26-dashboard-ux-onderzoek, 2026-09-26-onderzoek-nieuwe-routines]
vervangt: []
bronbestand: "C:\\Users\\Test\\.claude\\plans\\crm-onderzoek-prompt.md"
deadline: "2026-12-31"
---
# CRM-module HÏ Grip-dashboard — onderzoek en voorstel

## In het kort

- **Eén relatielijst met een status.** Geen aparte lijsten voor huidig en potentieel: zo doen HubSpot en Attio het ook. "Huidig" en "potentieel" uit het Canva-ontwerp worden opgeslagen weergaven. Een club die klant wordt, verhuist niet; alleen de status verandert.
- **Het opvolgritme uit Canva wordt drie uitkomstknoppen plus een herbenaderdatum.** Elke relatie heeft altijd één volgende actie met een datum, en het scherm Vandaag toont wat verlopen is. Dat pakt het grootste pijnpunt aan: vergeten opvolging.
- **Facturen bouw je niet zelf.** Het CRM maakt de offerte met de staffel of de klantprijs. Moneybird maakt en verstuurt de factuur en meldt via een webhook wanneer er betaald is. Het fiscale risico ligt dan bij het pakket: nummering, btw verlegd voor België, bewaarplicht.
- **Twee aannames uit de vragenronde kloppen niet.**
  - Vercel Hobby is volgens de voorwaarden alleen voor niet-commercieel gebruik. Neem Vercel Pro: $20/mnd, en alleen de bouwer betaalt een plek.
  - Hermes en de app mogen niet op Claude Max draaien. Gebruik een Claude API-sleutel, naar schatting $10–40/mnd [aanname].
  - Hermes draait continu en heeft daarom een kleine server nodig: Hetzner, ± € 6,60/mnd.
- **Planning (schatting ± 64 bouwuren):**
  - Bij 8 uur per week is de eerste bruikbare versie er rond 20 oktober, en is alles af eind november. Met uitloop wordt dat half december.
  - Bij 4 uur per week is de eerste versie er rond 3 november, en schuift het AI- en Hermes-deel naar januari.
  - Het fundament ligt er in beide gevallen ruim vóór het herbestelseizoen van de clubs (voorjaar).

## Acties

- [ ] P1 · Besluit: Vercel Pro ($20/mnd, alleen de bouwer betaalt een plek) in plaats van Vercel Hobby
- [ ] P1 · Besluit: Hermes en de AI in het dashboard via een Claude API-sleutel, niet via Claude Max; laat ook toetsen of Max of het Team-plan past bij zakelijk gebruik door jullie drieën
- [ ] P1 · Besluit: overstappen van e-Boekhouden naar Moneybird (vanaf € 15/mnd, facturen en betaalstatus via de API)
- [ ] P1 · Besluit: definitie van vaste klant, voorstel: minstens 2 orders, waarvan de laatste in de afgelopen 12 maanden
- [ ] P1 · Bigin-data exporteren (CSV per module plus Data Backup) en versleuteld bewaren vóór de overstap
- [ ] P1 · Fase 0 bouwen: Next.js-basis, Google-login, Neon Frankfurt, kerndatamodel en een dagelijkse back-up
- [ ] P2 · Google Workspace-verwerkersovereenkomst (CDPA) laten accepteren door de superadmin
- [ ] P2 · Afwegingstoets gerechtvaardigd belang en privacytekst opstellen vóór de eerste koude benadering vanuit het CRM
- [ ] P2 · Boekhouder laten bevestigen: factuurtekst voor btw verlegd bij Belgische B2B-klanten, en of koude mail naar persoonlijke adressen (jan@club.nl) mag

## Bevindingen

### 1. Wat de grote CRM's goed doen, en wat we overnemen

Onderzocht: HubSpot, Pipedrive, Attio, Teamleader en Twenty grondig. Salesforce, Folk, Copper, Bigin en de wholesale-tools (Shopify B2B, Faire, RepSpark/Brandwise) alleen op de punten die voor HÏ Grip relevant zijn.

| Onderdeel | Hoe de grote CRM's het doen | Voor HÏ Grip |
|---|---|---|
| Datamodel | Bedrijf, persoon, deal en activiteit, bij alle CRM's | **Nu**, maar zonder apart deal-object (zie 3) |
| Levenscyclus | HubSpot: één stage per record, schuift automatisch alleen vooruit. Attio: één object met weergaven per status | **Nu**: één lijst met status |
| Apart lead-object | Salesforce (conversie is onomkeerbaar), Pipedrive (leads zonder pijplijn) | **Nooit**: het geeft conversiegedoe |
| Volgende stap verplicht | Pipedrive vraagt na elke afgeronde activiteit om de volgende | **Nu** |
| Stilstand-signaal | Pipedrive "rotting": een deal kleurt rood na X dagen stilte | **Nu**, maar op "volgende actie verlopen", want rotting negeert geplande acties |
| Vandaag-scherm | Attio Home, Pipedrive Focus, Folk-reminders | **Nu**, als startscherm |
| Sequences | Pipedrive en HubSpot: max 10 stappen, stopt bij een reactie | **Nu**, als mini-versie van jullie ritme (zie 4) |
| Herbenaderdatum | HubSpot "Bad timing", Folk-reminders | **Nu** |
| Snel toevoegen op mobiel | Pipedrive (visitekaartscan), HubSpot (QR) | **Nu**, met 3 velden |
| Dubbelcontrole | HubSpot (op e-mail en domein), Attio (voorstel om samen te voegen) | **Nu**, op KvK-nummer, domein en e-mail |
| Verrijking | Teamleader vult KvK-gegevens automatisch in | **Later**, via de KvK-API (€ 6,40/mnd + € 0,02 per profiel) |
| E-mailsync | Pipedrive, Attio, Folk, Copper | **Fase 3**: laatste contact plus concepten |
| WhatsApp loggen | Folk (QR-koppeling), Pipedrive (bèta, via de Business-API) | **Later**. Nu een knop "Log contact" |
| Prijsafspraken per klant | Teamleader (prijslijst per bedrijf); HubSpot heeft het niet standaard | **Nu**, als eigen tabel |
| Offerte → factuur | Teamleader, HubSpot Commerce | **Nu**, via Moneybird, niet zelf gebouwd |
| Herbestelportaal | Shopify B2B "easy reorders", sinds 2 april 2026 in alle betaalde plannen | **Later**, via Shopify B2B in plaats van zelf bouwen |
| Rapportage | Pipedrive-goals, Attio-rapporten | **Nu** 5 tellers, meer later |
| AI | HubSpot Breeze, Attio, Pipedrive AI, Salesforce Agentforce | **Nu**: samenvatten, concepten, voorstellen. Nooit zelf versturen |

### 2. Ontwerpregels: de Bigin-les

Bigin scoort 4,7 op Capterra om de snelle start. De klachten komen zodra je tegen de grenzen aanloopt: beperkte automatisering, weinig eigen rapportage, alleen goede koppelingen binnen Zoho, en een aparte site. Samen met jullie eigen ervaring leidt dat tot deze regels:

1. Het CRM zit ín het dashboard: geen aparte site, één login.
2. Het startscherm is **Vandaag**: verlopen, vandaag, reacties en voorstellen. Bovenaan staan maximaal 5 punten "Eerst doen" (les uit [[2026-09-26-dashboard-ux-onderzoek]]).
3. Elke relatie heeft één volgende actie met een datum, of expliciet "geen, want …".
4. Geen workflowbouwer, maar ± 10 vaste automatiseringen met een aan/uit-knop.
5. Snel toevoegen vraagt maximaal 3 velden. Lege velden blijven verborgen.
6. Het CRM-menu heeft maximaal 5 onderdelen. Een nieuw veld komt er pas bij als het drie keer gemist is.
7. Kleur alleen voor status en urgentie; verder rustig en ruim. Dan helpt kleur, in plaats van dat het onrustig wordt.
8. De AI levert concepten met één knop "goedkeuren" en verstuurt nooit zelf.
9. Export en API zijn altijd beschikbaar. Het zijn jullie data, zonder plan-muren.

### 3. Datamodel

**Dashboardbreed**, gedeeld door alle modules: gebruikers, organisaties, personen, activiteiten (de tijdlijn), taken (vervangt Google Tasks), bestanden (links naar Google Drive), producten (artikelcodes uit [[Performance Grip Socks 2.0]]), labels, voorstellen (de AI-wachtrij) en meldingen.

**CRM-specifiek:**

| Object | Belangrijkste velden |
|---|---|
| Organisatie | naam, soort (sportclub, pilates/sportschool, retail, event, leverancier; later ook inkooporganisatie), sport, regio, status, prioriteit (HOOG/MIDDEL/LAAG uit [[Evaluatiecriteria (B2B Klanten)]]), eigenaar, bron, KvK-nummer, btw-nummer + VIES-controle, domein, prijslijst (Retail of Clubwear/Pilates), volgende actie + datum, herbenader op. Automatisch: laatste contact, herbestelcheck |
| Creator | naam, soort (influencer of atleet), platform + handle, volgers, gem. views, ER, sport, status, kortingscode, volgende actie. Eigen lijst, want creators zijn personen zonder organisatie met andere velden; wel hetzelfde statusmodel |
| Persoon | naam, organisatie, rol (voorzitter, inkoper, eigenaar, trainer, materiaalman), zakelijk e-mailadres en telefoonnummer, voorkeurskanaal, actief ja/nee (clubbesturen wisselen), bron, informatieplicht gemeld op |
| Prijsafspraak | organisatie, product, prijs per paar, vanaf aantal, geldig van/tot, bron. Mag afwijken van de standaardstaffel; het CRM toont het verschil |
| Offerte | organisatie, regels, prijsbasis (staffel of prijsafspraak), status (concept, verstuurd, geaccepteerd, afgewezen), geldig tot |
| Order | organisatie, datum, regels (product, maat, aantal), personalisatie (logo, paper wrap, header card), status (besteld, geleverd, gefactureerd, betaald), Moneybird-id + factuurnummer, eventueel Shopify-order-id |
| Sample | organisatie of creator, product, maat, verstuurd op, uitkomst |
| Kortingscode | code, organisatie of creator, Shopify-id, omzet en aantal orders (elke nacht gesynchroniseerd) |
| Leveranciersafspraak | leverancier, product of mogelijkheid, prijs, MOQ, levertijd, geldig van/tot. Inkooporders zelf horen in de module financiën & voorraad |
| Blokkadelijst | hash van e-mailadres of telefoonnummer, kanaal, datum, reden. Alleen bedoeld om te blokkeren |
| Doel | jaar, aantal vaste klanten (uit [[Strategische Keuzes]]) |

**Waarom er geen deal-object is.** Grote CRM's hebben deals nodig omdat één bedrijf daar vaak meerdere kansen tegelijk heeft. Bij 10–40 klanten dekt de combinatie van status en offerte dat. Komen parallelle kansen per klant vaak voor, dan kan een deal-object er later alsnog bij.

### 4. Status, opvolgritme en klantfases

Eén statusveld, hetzelfde voor organisaties en creators:

| Status | Betekenis | Weergave uit Canva |
|---|---|---|
| Gevonden | Kandidaat, nog niet benaderd. Agents vullen dit aan, na goedkeuring | Potentieel |
| Benaderd | De eerste benadering is gedaan | Potentieel |
| In gesprek | Er kwam een positieve reactie | Potentieel |
| Klant | Minstens 1 order (bij een creator: de samenwerking loopt) | Huidig |
| Vaste klant | Voorstel: minstens 2 orders, waarvan de laatste in de afgelopen 12 maanden | Huidig |
| Later opnieuw | Gepauzeerd, met een herbenaderdatum | Potentieel |
| Nooit meer | Staat op de blokkadelijst | — |

Twee klantsignalen zijn geen aparte status maar een kleurlabel: **Herbestelling nodig** (de herbestelcheck is verstreken) en **Slapend** (12 maanden geen order).

**Het opvolgritme, precies zoals in Canva:**

1. Je logt de eerste benadering. De status wordt Benaderd, en er komt een herinneringstaak over 7 dagen.
2. Bij elk contact kies je een uitkomst:
   - **Positief:** de status wordt In gesprek, en je vult verplicht een volgende actie in.
   - **Negatief:** je kiest Nooit meer (naar de blokkadelijst) of Opnieuw over 6 maanden, 1 jaar of 2 jaar. De status wordt dan Later opnieuw, met die datum.
   - **Geen reactie**, ook niet na de herinnering: de status wordt Later opnieuw, standaard over 6 maanden.
3. Is de herbenaderdatum bereikt, dan komt er een taak "opnieuw benaderen" op Vandaag en gaat de status terug naar Gevonden.

**Herbestelcheck.** De datum is de laatste order plus een interval. Heeft een klant 2 of meer orders, dan gebruikt het CRM het eigen gemiddelde van die klant. Daarvoor geldt een standaard per soort, die je zelf instelt [aanname]: pilates/sportschool ± 3 maanden, retail ± 2 maanden. Sportclubs krijgen een vaste check in februari en juni, omdat clubs in voorjaar en zomer bestellen ([[2026-09-26-onderzoek-nieuwe-routines]]).

### 5. Schermen en navigatie (om in Canva te tekenen)

**Dashboardniveau**, aansluitend op het Canva-ontwerp: een homepagina met daaronder CRM, Research, To-do en Content. De homepagina toont per module de hoofdpunten. Het CRM levert daarvoor: verlopen acties, herbestelsignalen, wachtende voorstellen en datameldingen.

**Het CRM-menu heeft 5 onderdelen:**

1. **Vandaag:** verlopen acties (rood), acties voor vandaag, nieuwe reacties en mails, en herbestelsignalen. Bovenaan maximaal 5 punten "Eerst doen".
2. **Relaties:** tabs Sales · Creators · Leveranciers, met opgeslagen weergaven Huidig · Potentieel · Later opnieuw · Nooit meer. Je wisselt tussen tabel en kanban (de kolommen zijn de statussen).
3. **Offertes & orders:** status, betaalstatus en samples.
4. **Voorstellen:** de AI-wachtrij, waar je goedkeurt, aanpast of afwijst.
5. **Doelen:** vaste klanten (x van 10 in 2026, x van 20 in 2027), nieuwe klanten per maand, doorstroom per status, en omzet via kortingscodes.

**De relatiepagina:**
- **Boven:** naam, soort, status (kleurchip), eigenaar, **volgende actie + datum**, en de knoppen "Log contact" en "Offerte".
- **Midden:** de tijdlijn met alle contact, notities, mails en orders, te filteren per soort.
- **Rechts:** contactpersonen, prijsafspraken, orders en samples, kortingscode + omzet, en bestanden (Drive).

**Mobiel (PWA):** een tabbalk met Vandaag · Relaties · ＋ · Voorstellen · Meer. De ＋ opent snel toevoegen: organisatie of creator, kanaal + uitkomst, notitie. Op de iPhone kun je met een PWA niet delen naar de app. Daar komt een plakveld, en later een e-mailadres om berichten naar door te sturen.

**Kleur, alleen voor status:**
- volt = klant of actief (chip met zwarte tekst)
- royal blue = in gesprek
- pumpkin = actie nodig of herbestelling
- rood = verlopen
- grijs = later of nooit

Achtergronden zijn wit of warm off-white (#EAE8E5), en alles is in Poppins.

### 6. Automatiseringen (vast, elk met een aan/uit-knop)

1. **Eerste benadering** → herinnering na 7 dagen. Die vervalt als er een reactie komt.
2. **Uitkomst negatief** → je kiest: Nooit meer, of opnieuw over 6 maanden, 1 jaar of 2 jaar.
3. **Herbenaderdatum bereikt** → taak op Vandaag, en de status wordt Gevonden.
4. **Statuswissel of afgeronde taak** → een volgende actie is verplicht.
5. **Order geleverd** → de herbestelcheck wordt berekend. Is die datum bereikt, dan komt er een taak "herbestelling bespreken".
6. **Tweede order** → de status wordt Vaste klant (alleen vooruit, zoals bij HubSpot). **12 maanden geen order** → label Slapend, plus een AI-concept voor een heractivatiebericht.
7. **Moneybird meldt "betaald"** → de order staat op betaald. Een factuur over de vervaldatum geeft een melding; de herinneringen zelf stuurt Moneybird.
8. **Omzet per kortingscode** → wordt elke nacht per club en creator uit Shopify gehaald.
9. **Elke maandag** → agents stellen nieuwe kandidaten voor. Eén klik voegt ze toe als Gevonden.
10. **Datacontrole elke nacht** → meldingen op de homepagina bij:
    - dubbele relaties (zelfde KvK-nummer, domein of e-mail)
    - een relatie zonder volgende actie
    - een klant zonder prijsafspraak
    - een prijsafspraak onder de laagste staffel
    - een persoon zonder bron
    - "Later opnieuw" dat ouder is dan 24 maanden (AVG)

### 7. AI en agents

**Twee lagen:**
- **De AI-assistent in het dashboard** (Vercel AI SDK + Claude API) kan:
  - vragen aan je data beantwoorden, zoals "welke clubs hebben dit jaar nog niet besteld?"
  - een tijdlijn samenvatten
  - conceptberichten schrijven
  - een volgende stap voorstellen
  - leads scoren op de [[Evaluatiecriteria (B2B Klanten)]]

  Sonnet 5.5 schrijft de concepten ($2 in / $10 uit per miljoen tokens). Haiku 4.5 doet de eenvoudige controles ($1 / $5).
- **Hermes Agent** (Nous Research, open source) doet het achtergrondwerk: wekelijkse kandidaten en research. Hermes draait continu en kan daarom niet op Vercel. Zet het op een Hetzner-VPS (CX23, ± € 6,60/mnd). Hermes ondersteunt MCP.

**Goedkeuringsflow:**
1. Het dashboard krijgt een eigen MCP-endpoint met alleen lees- en voorsteltools (`read_*`, `propose_*`). Hermes krijgt een token per agent. Shopify- en Gmail-sleutels staan niet op de VPS.
2. Elk voorstel komt in de tabel Voorstellen, met soort, inhoud, agent, status en wie er besliste.
3. Een mens keurt goed, past aan of wijst af in het scherm Voorstellen, en krijgt daarvan een pushmelding.
4. Pas daarna voert de server de actie uit, met het account van die mens. Een mail wordt eerst een Gmail-concept; versturen is een aparte klik.
5. Alles komt in een wijzigingslog.

**Beveiliging.** Inkomende mail en DM's zijn onbetrouwbare input (prompt-injectie). Agents krijgen daarom nooit tools om te versturen. De Hermes-versie wordt vastgezet: v0.21.5 op 24-9-2026, en het project verandert snel.

**Claude Max.**
- Anthropic's documentatie zegt dat ontwikkelaars API-sleutels moeten gebruiken, en dat verzoeken via Free-, Pro- of Max-credentials namens gebruikers niet zijn toegestaan.
- Het beleid rond tools van derden is in 2026 vier keer veranderd.
- Hermes rekent via OAuth bovendien af als "extra usage", los van je gewone abonnementstegoed.
- De onderzoeksagent vond in de consumentenvoorwaarden ook een beperking op zakelijk gebruik [CHECK]. Laat toetsen of het Team-plan ($20–25 per plek, minimaal 2) beter past bij jullie drieën.

### 8. Techniek, koppelingen en kosten

**Stack:**
- **App en login:** Next.js + shadcn/ui + Better Auth. Google-login alleen voor @higrip.nl, met het consentscherm op "Internal", dus zonder Google-verificatie.
- **Database en hosting:** Drizzle + Postgres (Neon, Frankfurt) op Vercel Pro, in de functieregio fra1.
- **Back-up:** elke nacht een database-dump naar de Hetzner-VPS, 30 dagen bewaard. Test één keer of terugzetten werkt.
- **Bestanden** blijven in Google Drive; het CRM bewaart alleen links.
- **Twenty** (open-source CRM) dient als voorbeeld voor het datamodel. De code nemen we niet over: die valt onder de AGPL-licentie.

| Onderdeel | Keuze | Per maand | Goedkoper alternatief en wat je inlevert |
|---|---|---|---|
| Hosting | Vercel Pro (1 betaalde plek; de andere twee loggen in op de app zelf) | $20 | Hobby: niet toegestaan. Netlify of Cloudflare: minder bekend terrein voor Claude Code |
| Database | Neon Frankfurt: Free tijdens de bouw, Launch bij livegang | € 0–5 | Supabase Pro $25: wel ingebouwde back-ups en opslag |
| Server voor Hermes en back-ups | Hetzner CX23 | ± € 6,60 | Eigen pc: die staat niet 24/7 aan |
| AI | Claude API-sleutel | $10–40 [aanname] | — |
| Boekhouding | Moneybird Start (Groei € 29 bij meer dan 20 banktransacties/mnd) | € 15 excl. btw | e-Boekhouden met factureren: € 24, zonder webhooks |
| Login, Gmail, Calendar, Tasks, Drive, Shopify-API | — | € 0 | — |

Nieuw per maand: ± € 25–30 voor techniek plus € 10–35 AI-gebruik. De boekhouding vervangt een bestaande kostenpost.

| Koppeling | Fase | Wat | Let op |
|---|---|---|---|
| Shopify Admin API | 3 | Omzet per kortingscode, orders lezen; later draft orders met betaallink | Nieuwe custom apps via het Dev Dashboard (client credentials). B2B-functies zijn sinds 2 april 2026 niet meer alleen voor Plus |
| Gmail | 3 | Laatste contact en concepten; niet versturen | Een interne Workspace-app heeft geen Google-verificatie nodig |
| Google Tasks + Calendar | 3 | Tasks eenmalig importeren in de to-do-module; afspraken tonen | Gratis binnen de quota |
| Moneybird | 4 | Conceptfactuur, offerte, betaalstatus | Webhooks bij betaling |
| KvK | later | Gegevens automatisch invullen | € 6,40/mnd + € 0,02 per profiel |
| WhatsApp Cloud API | later | Berichten loggen | Meta-verificatie, templates, ± $0,16 per NL-marketingbericht. Tot die tijd: "Log contact" |
| Instagram-DM | later | DM's loggen | Werkt alleen voor het eigen account, antwoorden alleen binnen 24 uur |
| Buffer | contentmodule | Posts en ideeën | API-sleutel werkt alleen voor het eigen account; OAuth is dicht voor nieuwe ontwikkelaars |
| Sendcloud / MyParcel | niet | Tracking | Tracking komt uit de Shopify-fulfillments |

### 9. Facturatie en btw

- **Flow:**
  1. Het CRM bepaalt klant, regels, prijs (staffel of prijsafspraak) en btw-code.
  2. Moneybird maakt de factuur: nummer, btw, pdf, verzending en herinneringen.
  3. Een webhook zet de betaalstatus terug in het CRM.
- **Nederlandse eisen** regelt Moneybird: een uniek, opeenvolgend factuurnummer, btw-id, KvK-nummer en 7 jaar bewaren.
- **België, bij een btw-plichtige klant:**
  - controleer het btw-nummer in VIES vóór je factureert, en bewaar de afdruk;
  - factureer 0% met de vermelding btw verlegd, en zet beide btw-nummers op de factuur;
  - bewaar het transportbewijs en doe de ICP-opgaaf.
- **Belgische vzw zonder geldig btw-nummer:** geen 0%, maar Nederlandse btw tot € 10.000 EU-omzet per jaar.
- Laat de exacte factuurtekst door de boekhouder bevestigen.
- **Moneybird tegenover e-Boekhouden:**
  - Moneybird doet facturen, offertes (online te accepteren), relaties, webhooks bij betaling en automatische herinneringen.
  - e-Boekhouden heeft een API voor facturen en relaties, maar er zijn geen webhooks gevonden. Het CRM moet dan dagelijks navragen. Factureren kost daar € 24/mnd.

### 10. AVG-regels voor het CRM

Dit is geen juridisch advies.

1. **Grondslag:** gerechtvaardigd belang. Leg de afwegingstoets schriftelijk vast.
2. **Alleen zakelijke gegevens:** organisatie, functie, zakelijk e-mailadres en telefoonnummer, kanaal, bron en datums. Geen privénummers en geen volledige chats; alleen een samenvatting plus de uitkomst.
3. **Informatieplicht** bij het eerste contact, uiterlijk binnen 1 maand: wie je bent, de bron, het doel en het recht om bezwaar te maken. Het veld "informatieplicht gemeld op" houdt dit bij.
4. **Bezwaar** = direct stoppen en op de blokkadelijst zetten. Die bewaart alleen een hash, het kanaal, de datum en de reden.
5. **Bewaartermijnen** [voorstel]: "geen reactie" 12 maanden, "later opnieuw" maximaal 24 maanden na het laatste contact, daarna verwijderen. Factuurgegevens 7 jaar.
6. **Koude mail:**
   - Het veiligst is een algemeen adres (info@) van een vereniging of bv, met duidelijke afzender en afmeldlink.
   - Voor persoonlijke adressen en voor eenmanszaken of vof's is toestemming nodig, tenzij het adres publiek voor zakelijk contact bedoeld is [onzeker, laten toetsen].
   - Koude WhatsApp verbiedt het WhatsApp-beleid zonder opt-in.
7. **Verwerkers:**
   - De verwerkersovereenkomst van Vercel geldt alleen voor Pro, nog een reden voor Pro.
   - Kies bij de database een EU-regio. De verwerkersovereenkomst van Neon is niet onderzocht [CHECK].
   - Google Workspace: de CDPA moet je handmatig accepteren.
   - Stuur zo min mogelijk persoonsgegevens mee naar de Claude API.
8. **Persoonsgegevens** komen nooit in de vault of in git.

### 11. Overstap

1. **Exporteer Bigin:** CSV per module plus een Data Backup. De downloadlink is 7 dagen geldig.
2. **Verzamel de andere bronnen:**
   - het voetbalclubbestand en het cold-acquisitiebestand als CSV;
   - uit de vault: [[Actieve Samenwerkingen (B2B Klanten)]] en [[Influencer Database]];
   - WhatsApp alleen voor de topleads, en dan alleen samenvatting, datum en uitkomst;
   - Gmail importeer je niet; de koppeling vult later het laatste contact.
3. **Blokkeren en ontdubbelen:** zet eerst afgewezen contacten en bezwaren op de blokkadelijst. Ontdubbel daarna in een tussentabel, in deze volgorde: KvK-nummer → domein → e-mail → telefoon → naam + plaats.
4. **Importeer eerst een proef van 20 records**, daarna de rest. Zet Bigin 2 weken op alleen-lezen en zeg het daarna op.
5. **Ruim de vault op:** [[Pipeline Tracker]], de Retailer Database en de Merk & Bedrijf Database gaan naar het CRM verwijzen. Ze zijn nu toch leeg.

### 12. Bouwvolgorde

Uren zijn een schatting [aanname], met Claude Code en door iemand die het naast ander werk doet. Startdatum is 30 september.

| Fase | Uren | Wat je daarna kunt | Klaar bij 8 u/week | Klaar bij 4 u/week |
|---|---|---|---|---|
| 0 · Fundament | 8 | Login, database, online zetten, back-up | 6 okt | 13 okt |
| 1 · CRM-kern | 12 | Relaties, relatiepagina, volgende actie, Vandaag, snel toevoegen, import. **Eerste bruikbare versie; Bigin kan uit** | 20 okt | 3 nov |
| 2 · Opvolgritme en klantbeheer | 10 | Uitkomstknoppen, herbenaderen, blokkadelijst, orders, prijsafspraken, herbestelcheck | 27 okt | 24 nov |
| 3 · Koppelingen | 12 | Shopify, Gmail, Tasks, Calendar | 10 nov | 15 dec |
| 4 · Offerte → factuur | 10 | Offertes, Moneybird, VIES, samples | 17 nov | 29 dec |
| 5 · AI en agents | 12 | Assistent, Voorstellen, MCP, Hermes, weekkandidaten, datacontroles, Doelen | 24 nov | januari 2027 |

Reken bij tegenvallers op anderhalf keer zoveel tijd:
- **Bij 8 uur per week** is alles dan af rond 22 december, nog steeds vóór de deadline.
- **Bij 4 uur per week** schuiven fase 4 en 5 naar januari of februari. Fase 0–2 zijn dan wel ruim vóór het herbestelseizoen van de clubs klaar.

### 13. Succescriteria

**Na 1 maand gebruik:**
- Bigin is uit. Alle relaties uit Bigin, de Sheets en de vault staan in het CRM.
- Elke relatie heeft een volgende actie, of de status Later opnieuw of Nooit meer.
- Alle drie loggen hun contact in het CRM.

**Na 3 maanden:**
- Er is geen verlopen actie ouder dan 7 dagen.
- Elke benaderde prospect is binnen 7 dagen opgevolgd.
- Elke klant heeft een prijsafspraak en een herbestelcheck.
- B2B-facturen lopen via het CRM naar Moneybird.
- Het scherm Doelen toont de stand ten opzichte van 10 vaste klanten, zonder handwerk.

### 14. Risico's

1. **Bouwtijd naast ander werk.** Fase 1 is al bruikbaar, en elke fase levert iets op. Loopt de bouw vast, dan is Twenty Cloud ($9 per gebruiker per maand) een noodoptie met hetzelfde soort datamodel.
2. **Hermes en prompt-injectie.** Hermes verandert snel, en inkomende berichten kunnen prompt-injectie bevatten. Zet de versie vast en geef alleen voorsteltools.
3. **Veranderend beleid rond Claude-abonnementen.** Met een API-sleutel staat het dashboard daar los van.
4. **Dataverlies bij zelf bouwen.** Nachtelijke dump plus het herstel van Neon. Test één keer of terugzetten werkt.
5. **AVG bij koude acquisitie.** Regel sectie 10 vóór de eerste koude benadering vanuit het CRM.

## Wat niet lukte

- **Niet bereikbaar:** Reddit. G2, de prijspagina van Pipedrive, de supportpagina's van Teamleader en de pagina van de AP gaven 403. Gebruikersoordelen komen daarom uit Capterra en Trustpilot; de prijzen van Pipedrive zijn niet geverifieerd.
- **Niet bevestigd:** de API-documentatie van e-Boekhouden was niet leesbaar, dus webhooks en betaalstatus zijn onbekend. Over het plan waarin Attio sequences zit, spreken de bronnen elkaar tegen.
- **Niet onderzocht:** de verwerkersovereenkomst van Neon.
- **Niet gedaan:** de dashboard-sync (stap B) en de publicatie (stap A5). Deze sessie draait op het persoonlijke account; doe beide vanaf info@.

## Bronnen

- Onderzoeksopdracht: `C:\Users\Test\.claude\plans\crm-onderzoek-prompt.md` en het Canva-ontwerp HÏ GRIP DASHBOARD VISUAL (https://www.canva.com/design/DAHWeZ1loP8), pagina 1
- **CRM's:**
  - HubSpot: https://knowledge.hubspot.com/records/use-lifecycle-stages · https://knowledge.hubspot.com/records/understand-the-default-record-layout · https://www.hubspot.com/pricing/sales
  - Pipedrive: https://support.pipedrive.com/en/article/the-rotting-feature · https://support.pipedrive.com/en/article/sequences · https://support.pipedrive.com/en/article/leads-vs-deals · https://support.pipedrive.com/en/article/automation-limits
  - Attio: https://attio.com/help/reference/attio-101/attios-data-model/define-your-data-model-objects-lists-and-views · https://attio.com/help/reference/productivity-collaborating/tasks · https://attio.com/pricing
  - Overig: https://twenty.com/pricing · https://www.teamleader.eu/pricing · https://help.folk.app/en/articles/5007315-track-interactions-emails-calendar-events-whatsapp-conversations · https://www.capterra.com/p/204998/Bigin-by-Zoho-CRM/reviews/ · https://help.shopify.com/en/manual/b2b/getting-started/plan-features
- **Techniek:**
  - Vercel: https://vercel.com/docs/limits/fair-use-guidelines · https://vercel.com/docs/plans/hobby · https://vercel.com/legal/dpa
  - Database en server: https://neon.com/pricing · https://supabase.com/pricing · https://docs.hetzner.com/general/infrastructure-and-availability/price-adjustment/
  - Google: https://support.google.com/cloud/answer/13464323 · https://developers.google.com/workspace/gmail/api/auth/scopes
  - Login en mobiel: https://www.better-auth.com/docs/authentication/google · https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados/
  - Shopify en overige koppelingen: https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/client-credentials-grant · https://developers.buffer.com/guides/getting-started.html · https://developers.kvk.nl/nl/pricing · https://developers.facebook.com/docs/whatsapp/pricing
- **AI:**
  - Hermes: https://hermes-agent.nousresearch.com/docs/ · https://github.com/NousResearch/hermes-agent/releases · https://github.com/NousResearch/hermes-agent/issues/40014
  - Anthropic: https://code.claude.com/docs/en/legal-and-compliance · https://www.anthropic.com/legal/consumer-terms · https://support.claude.com/en/articles/15036540-use-the-claude-agent-sdk-with-your-claude-plan · https://support.claude.com/en/articles/9266767-what-is-the-team-plan · https://platform.claude.com/docs/en/about-claude/pricing
  - Goedkeuringsflow: https://ai-sdk.dev/docs/ai-sdk-ui/chatbot-tool-usage
- **Facturatie:**
  - Belastingdienst: https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/administratie_bijhouden/facturen_maken/factuureisen/factuureisen · https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/zakendoen_met_het_buitenland/goederen_en_diensten_naar_andere_eu_landen/btw_berekenen_bij_export_goederen_naar_eu_landen
  - KVK: https://www.kvk.nl/internationaal/alles-over-btw-en-internationaal-zakendoen/
  - Pakketten: https://www.moneybird.nl/prijzen/ · https://developer.moneybird.com/webhooks/events · https://www.e-boekhouden.nl/prijzen
- **AVG:** https://zoek.officielebekendmakingen.nl/kst-35421-3.html · https://whatsappbusiness.com/policy/ · https://gdpr-info.eu/art-14-gdpr/ · https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/direct-marketing-guidance/respect-peoples-preferences/ · https://knowledge.workspace.google.com/admin/compliance/privacy-compliance-and-records-for-google-workspace-and-cloud-identity
- **Overstap:** https://help.zoho.com/portal/en/kb/bigin/data-administration/articles/exporting-data · https://help.zoho.com/portal/en/kb/bigin/data-administration/articles/data-backup

## Aantekeningen
