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
samenvatting: "Bouw het CRM als één relatielijst met een status (zoals HubSpot en Attio), met een vast opvolgritme en een CRM-home met taken voor nu, en laat facturen via Moneybird lopen in plaats van ze zelf te maken. Twee aannames kloppen niet: Vercel Hobby mag niet voor een bedrijfsdashboard (neem Pro, $20/mnd) en Hermes en de app moeten op een Claude API-sleutel draaien, niet op Claude Max."
gerelateerd: [2026-09-24-financieel-plan-2027-2031-bmc-2031, 2026-09-26-dashboard-ux-onderzoek, 2026-09-26-onderzoek-nieuwe-routines]
vervangt: []
bronbestand: "C:\\Users\\Test\\.claude\\plans\\crm-onderzoek-prompt.md"
deadline: "2026-12-31"
---
# CRM-module HÏ Grip-dashboard — onderzoek en voorstel

## In het kort

- **Eén relatielijst met een status.** Geen aparte lijsten voor huidig en potentieel: zo doen HubSpot en Attio het ook. "Huidig" en "potentieel" uit het Canva-ontwerp worden opgeslagen weergaven. Een club die klant wordt, verhuist niet; alleen de status verandert.
- **Een funnel per klanttype met een vaste reeks** (bijgewerkt 30-09). AI vult een kandidatenpool en zet de beste door naar Nieuw. AI schrijft ook de mail, de herinneringen en het belscript; jij keurt de reeks één keer goed. Geen reactie is het standaardpad: herinneringen op dag 7 en 14, bellen op dag 21. Bij een reactie kies je positief, later of negatief. Alles wat terugvalt, krijgt een wachtdatum. Dat pakt het grootste pijnpunt aan: vergeten opvolging.
- **Facturen bouw je niet zelf.** Het CRM maakt de offerte met de staffel of de klantprijs. Moneybird maakt en verstuurt de factuur en meldt via een webhook wanneer er betaald is. Het fiscale risico ligt dan bij het pakket: nummering, btw verlegd voor België, bewaarplicht.
- **Twee aannames uit de vragenronde kloppen niet.**
  - Vercel Hobby is volgens de voorwaarden alleen voor niet-commercieel gebruik. Neem Vercel Pro: $20/mnd, en alleen de bouwer betaalt een plek.
  - Hermes en de app mogen niet op Claude Max draaien. Gebruik een Claude API-sleutel, naar schatting $10–40/mnd [aanname].
  - Hermes draait continu en heeft daarom een kleine server nodig: Hetzner, ± € 6,60/mnd.
- **Planning (schatting ± 74 bouwuren, bijgewerkt 30-09):**
  - Eerst de kern zonder AI. De eerste bruikbare versie is er rond 20 oktober (8 u/week) of 10 november (4 u/week).
  - Daarna werk je 4–6 weken met de hand en meet je. Intussen bouw je de Gmail-koppeling en Moneybird.
  - AI-mail en Hermes komen na die meetperiode: bij 8 u/week vóór 2027, bij 4 u/week in het eerste kwartaal van 2027.

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
| Vandaag-scherm | Attio Home, Pipedrive Focus, Folk-reminders | **Nu**, als startscherm: CRM-home |
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
2. Het startscherm is **CRM-home**: verlopen, vandaag, reacties en voorstellen. Bovenaan staan maximaal 5 punten "Eerst doen" (les uit [[2026-09-26-dashboard-ux-onderzoek]]).
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

**Aanvullingen (30-09):**
- **Statusgeschiedenis** (van, naar, door, op), vanaf dag 1. Die is nodig voor doorstroom en doorlooptijd.
- **Reeks:** stappen, goedgekeurd door, gestopt door.
- **Relatie:** krijgt type, wachtdatum + wachtreden, score, bron en een vastgepinde notitie.
- **Events:** krijgen een eventdatum.
- **Deal actief:** kortingscode + startdatum. Hiermee wordt een club Klant zonder eigen order.

### 4. Status, funnel en klantfases (bijgewerkt 30-09)

Het volledige model, met alle overgangen en termijnen, staat op Canva pagina 2 en in het structuurdocument (`plans/crm-structuur.md` bij de bouwer).

| Status | Betekenis |
|---|---|
| Kandidaat | Door AI gevonden. Staat in de kandidatenpool (de AI-map), nog niet in de funnel |
| Nieuw | Klaar om te benaderen |
| Benaderd | Eerste contact gedaan; de reeks loopt |
| In gesprek | Positieve reactie; gesprekken lopen |
| Huidig (per type) | Klant / Vaste klant · Actief / Ambassadeur · Bevestigd / Uitgevoerd / Terugkerend · Huidige leverancier |
| Wacht op datum | Tijdelijk uit de funnel, met reden: geen reactie · later · negatief |
| Geen contact | Wil niet meer benaderd worden → blokkadelijst |

- **Route B (geen reactie) is het standaardpad, geen keuze.** Na goedkeuring loopt de reeks: mail (dag 0) → herinnering 1 (dag 7) → herinnering 2 (dag 14) → belherinnering (dag 21) → geen reactie (dag 28) → wacht op datum. Een reactie stopt de reeks, en dan kies je:
  - **A · Positief** → In gesprek, met een verplichte volgende actie. Veel heen-en-weer mailen vraagt geen keuze. Pas na 30 dagen *zonder* contact komt het label Stil.
  - **C · Later** → wacht op datum: de afgesproken datum of het volgende benadervenster (standaard 6 mnd). Het eerste gesprek komt in een vastgepinde notitie.
  - **D · Negatief** → wacht op datum over 1 of 2 jaar, met de reden erbij.
- **Datum bereikt** → terug in Nieuw met het label Opnieuw. De geschiedenis blijft.
- **Wil geen contact** kan vanuit elke stap, met een knop op de relatiepagina.
- **Kandidatenpool:** AI zet elke maandag per type de beste kandidaten door naar Nieuw, tot maximaal 20. Vooraf checkt AI op dubbelen en de blokkadelijst.
- **De wachtdatum volgt het seizoen.** Per type is er een benadervenster, bijvoorbeeld sportclubs november–februari en events 3–6 maanden vóór de eventdatum.

**Klanten (verfijnt het voorstel in de besluit-actie hierboven):**
- **Klant** = eerste order **óf** een actieve clubdeal met omzet via de kortingscode.
- **Vaste klant** = 2e order binnen 12 maanden, of een clubdeal die 12 maanden actief is met omzet.
- **De status gaat alleen vooruit.** 12 maanden stil geeft het label Slapend. Het doel telt vaste klanten zonder dat label.
- **Herbestellen (na een order):**
  - Het herbestelmoment is de eerste die bestaat: 1) de afgesproken datum (veld op de order) → 2) een termijn die je per klant instelt → 3) de standaard per type.
  - Op dat moment staat er een concept-herbestelmail klaar in *Wacht op akkoord*, met de laatste order (aantallen, maten, personalisatie) en de actuele prijs. Jij verstuurt, of maakt er met één klik een offerte van.
  - Daarna: een nieuwe order → het moment wordt opnieuw berekend; "later" → een nieuwe afgesproken datum; 7 dagen niets → taak bellen [voorstel].
  - Tot fase 6 komt de mail uit een sjabloon; daarna maakt AI hem persoonlijker.
  - Relaties met alleen een clubdeal krijgen geen herbestelmail.

| Type | Na In gesprek | Huidig vanaf |
|---|---|---|
| Sportclubs · Pilates & sportscholen · Retail (later Inkooporganisaties) | Klant → Vaste klant | Klant |
| Creators | Product verstuurd → Actief → Ambassadeur | Actief (eerste content live) |
| Events | Bevestigd → Uitgevoerd → Terugkerend | Bevestigd; evaluatietaak 1 week na het event |
| Leveranciers | Aangevraagd → Vergelijken → Huidige leverancier | Huidige leverancier; geen verkoopreeks, wel een offerte-aanvraag |

### 5. Schermen en navigatie (bijgewerkt 30-09)

**Menu:** CRM-home · Funnels · Huidige relaties · Offertes & orders · Instellingen. De schetsen staan op Canva pagina 3.

- **CRM-home:**
  - eerst doen (max 5)
  - wacht op akkoord (AI-reeksen, offertes)
  - stats (vaste klanten x/10, nieuwe klanten, benaderd deze week, code-omzet)
  - mini-funnels per type
  - signalen (herbestelling, stil, opnieuw benaderen, datameldingen)
- **Funnels:** één scherm met labels Sportclubs · Pilates & sportscholen · Retail · Creators · Events · Leveranciers · Alle (later Inkooporganisaties).
  - Kanban: Nieuw → Benaderd → In gesprek → Huidig deze maand. Ingeklapt daaronder: Wacht op datum en Kandidatenpool.
  - **Benader ›** opent het benaderpaneel: actuele punten met bronnen, het concept voor de mail of het belscript, de reeks, en de knoppen "Keur reeks goed" en "Ik bel".
- **Relatiepagina:**
  - **boven:** naam · type · status · eigenaar · wachtdatum, plus de volgende actie;
  - **midden:** de vastgepinde notitie en de tijdlijn;
  - **rechts:** contactpersonen, prijsafspraken, orders & samples, kortingscode + omzet, bestanden.

  Onder "Meer" staat "Wil geen contact".
- **Huidige relaties:** labels Klanten · Creators · Events · Leveranciers.
- **Instellingen:** termijnen, benadervensters, maximum per type, AI-aanvoer en automatiseringen aan/uit.
- **Mobiel (PWA):** een tabbalk met Home · Funnels · ＋ · Akkoord · Meer.
- **Kleur alleen voor status:**
  - wit met rand = Nieuw/Benaderd
  - royal blue = In gesprek
  - volt = huidig
  - pumpkin = actie nodig
  - rood = verlopen / geen contact
  - warm grijs = wacht op datum / kandidaat

### 6. Automatiseringen (bijgewerkt 30-09, vast, elk met een aan/uit-knop)

1. **Elke maandag:** de kandidatenpool gaat door naar Nieuw (max 20 per type, na een check op dubbelen en de blokkadelijst).
2. **De reeks:** herinnering 1 (dag 7), herinnering 2 (dag 14), belherinnering (dag 21). Die stopt bij een reactie. Vóór de Gmail-koppeling zijn het taken met de tekst al klaar.
3. **Dag 28 zonder reactie** → wacht op datum (het volgende venster, minstens 6 maanden).
4. **Wachtdatum bereikt** → Nieuw, met het label Opnieuw en een taak.
5. **In gesprek, 30 dagen geen contact** → label Stil. Alleen een signaal.
6. **Herbestelmoment bereikt** (afgesproken datum → termijn per klant → standaard per type) → label Herbestelling nodig + een concept-herbestelmail in Wacht op akkoord. Verstuurd en 7 dagen niets → taak bellen. Een nieuwe order berekent het moment opnieuw.
7. **2e order of 12 maanden actieve deal** → Vaste klant. **12 maanden stil** → label Slapend + een AI-concept voor heractivatie.
8. **Moneybird meldt "betaald"** → de order staat op betaald.
9. **Omzet per kortingscode** → elke nacht uit Shopify.
10. **Datacontrole elke nacht** → meldingen bij dubbelen, een ontbrekende volgende actie, een prijs onder de staffel, of Wacht op datum voorbij de bewaartermijn (wachtdatum + 3 mnd).

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
3. Een mens keurt goed, past aan of wijst af in het blok Wacht op akkoord op CRM-home, en krijgt daarvan een pushmelding.
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

### 12. Bouwvolgorde (bijgewerkt 30-09)

De uren zijn een schatting [aanname]: gebouwd met Claude Code, door iemand die het naast ander werk doet. Start is 30 september.

| Fase | Inhoud | Uren | Klaar bij 8 u/week | Klaar bij 4 u/week |
|---|---|---|---|---|
| 1 | Fundament: login, database, online zetten, back-up | 8 | 6 okt | 13 okt |
| 2 | Lijsten per type, statussen, wachtdatum, relatiepagina, CRM-home, import. **Zonder AI; Bigin kan uit** | 14 | 20 okt | 10 nov |
| 3 | Reeks als taken, termijnen, labels, statusgeschiedenis, Instellingen | 10 | 27 okt | 24 nov |
| — | **4–6 weken met de hand werken en meten; intussen fase 4 en 5** | | | |
| 4 | Gmail: reeks echt versturen, reactie herkennen, reeks stoppen | 10 | 10 nov | 15 dec |
| 5 | Offertes & orders, Moneybird, kortingscode-omzet, herbestelmoment + herbestelmail uit sjabloon | 14 | 17 nov | 12 jan |
| 6 | AI: actuele punten, mail en belscript, reeks-goedkeuring | 8 | ± 8 dec | ± 26 jan |
| 7 | Hermes: kandidatenpool, score, aanvulling op maandag | 10 | ± 22 dec | ± feb 2027 |

Reken bij tegenvallers op ongeveer anderhalf keer zoveel tijd. Bij 4 u/week staat de kern (fase 1–4) vóór 2027; AI en Hermes volgen in het eerste kwartaal.

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
- De stats op CRM-home tonen de stand ten opzichte van 10 vaste klanten, zonder handwerk.

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
