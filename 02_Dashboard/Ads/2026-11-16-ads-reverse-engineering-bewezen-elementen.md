---
id: 2026-11-16-ads-reverse-engineering-bewezen-elementen
titel: "Reverse engineering van 22 eigen ads: welke design- en psychologie-elementen werken"
kerntitel: "Psychologie zit in het format, visueel in het beeld: vastgelegd als Ads Bouwboek"
datum: 2026-11-16
bron: los
routine: ""
categorie: Social
status: nieuw
prioriteit: P2
samenvatting: "Team HÏ Grip beoordeelde 22 eigen feed-ads. De psychologie-winnaars zijn in beide sporten dezelfde vijf formats: checklist, kleedkamerbord, founderbrief, chat met probleem en oplossing, en vergelijking. De visuele winnaars bij voetbal staan allemaal op een echte shootfoto, met bewegingscontrast (voetbal 9) als topper; rugby blijft zonder eigen foto's op prima. De ontleding staat als Ads Bouwboek in 04_Social_Agent, met formats, maten, anti-patronen, een beoordelingskaart en hypothesen per maatstaf. Het bouwboek is gekoppeld aan de Ads Agent, de Content Maker, Content-QA, de leerregels en de vault-CLAUDE.md. Geen van de 22 ads heeft gedraaid, dus alles is team-oordeel tot er Meta-data is."
gerelateerd: [2026-11-16-ads-funnel-trio-rugby-voetbal, 2026-11-15-ads-campagne-zes-foto-ads-merkstijl, 2026-11-15-ads-tien-losse-ads-rugby-voetbal]
vervangt: []
bronbestand: "C:\\Users\\Test\\Werk\\HI-Grip-Vault-\\04_Social_Agent\\Visuele Productie\\Ads Bouwboek — bewezen elementen.md"
deadline: ""
---
# Reverse engineering van 22 eigen ads: welke design- en psychologie-elementen werken

> Map: [[Waar staat wat]]

## In het kort
**Gevraagd.** Leg de design- en psychologie-elementen van de goed beoordeelde ads via reverse engineering vast in de juiste agents en plekken, zodat er herhaalbaar meer goede ads gemaakt kunnen worden.

**Beoordeling door het team (16-11-2026):**
- Psychologie erg goed, bij zowel voetbal als rugby: 1, 3, 4, 10 en 11.
- Visueel erg goed bij voetbal: 1, 3, 4, 6 en 9, vooral 9.
- Visueel prima bij rugby: 1, 3, 4, 9, 10 en 11.

**Uitkomst.** Eén bron, [[Ads Bouwboek — bewezen elementen]], met zeven formats, zeven design-elementen, anti-patronen, een beoordelingskaart en hypothesen per maatstaf. Daar verwijzen deze plekken naar:

| Plek | Wat er nu staat |
|---|---|
| Ads Agent (`Ads Skill — higrip-ads-analyse`, de enige ingang tot zijn kennis) | Een rij in de kennistabel: eigen creatives toetsen met secties 8 en 9 |
| `09 Ads Agent — Index` | Een verwijzing onder eigen kennis |
| `Agents Social Agent`, bij Content Maker | Feedbeeld: eerst een bewezen format, dan bouwen, dan toetsen |
| `Agents Social Agent`, bij Caption & Copy | De pointe noemt het merk |
| `Agents Social Agent`, Content-QA | Toetspunt C14: beoordelingskaart en poort bij feedbeelden |
| `Agents Design Agent` (sectie 3 en toetslijst) | Stijlbron voor social feedbeelden; toetspunt D13: beoordelingskaart en poort |
| `.claude/agents/content-maker-agent.md` | Lees het bouwboek vóór je een feedbeeld bouwt |
| `Leerregels per Agent` | Twee regels voor de Content Maker; een nieuwe sectie Ads met twee regels voor de Ads Agent |
| Vault-`CLAUDE.md`, "Waar staat wat" | Een rij voor ads maken of beoordelen, zodat elke sessie het bouwboek vindt |
| `Template Overzicht` | Een verwijzing onder de vaste formats |

Geen agent krijgt de bevoegdheid om advertentiecontent te maken; die grens uit [[Agent Hiërarchie & Structuurschema]] blijft staan. Het bouwboek dient:
- wie ads maakt (een mens, eventueel met Claude in de hoofdsessie);
- de Ads Agent, om te beoordelen;
- de Content Maker, voor organische feedposts.

## Acties
- [ ] P2 · Besluit: de beoordelingskaart uit het Ads Bouwboek vaststellen als vaste toets vóór livegang, met drempels 12 en 16 van 20 (voorstel Ads Agent, niet getest)
- [ ] P2 · Eerste creatieve test in Meta: native formats (borden 1, 3, 4) tegen specificatie en prijs (borden 2, 5), met dezelfde doelgroep en hetzelfde budget, beslissen op link-CTR
- [ ] P2 · Borden 1 en 3 (voetbal en rugby) opnieuw exporteren uit het canvas, want de PNG's in `Losse-ads-2026-11-15/png/` tonen nog de oude tekst
- [x] P3 · `.claude/agents/content-maker-agent.md` en `caption-copy-agent.md` laten verwijzen naar een bestaand identiteitsbestand; ze wijzen nu naar `01_Agent_Infrastructuur/Content Agent/`, dat niet bestaat

## Bevindingen

### Drie wetten
1. **Psychologie zit in het format, niet in de sport.** De psychologielijst is voor beide sporten gelijk. Alle vijf de winnaars kent een sporter al: een checklist, een kleedkamerbord, een brief, een chat, een vergelijking.
2. **Visueel zit in het beeld.** Alle visuele winnaars bij voetbal staan op een echte shootfoto. Voetbal 10 en 11 hebben geen foto en staan er niet tussen. Rugby heeft geen eigen foto's en blijft overal op "prima".
3. **De zwakke ads zijn productinformatie of een slogan.** Dat zijn de specificaties (2), de prijs vóór de reden (5), het kleine ingelijste detail met een dunne lijn (7) en de slogan (8). Ze vragen niets en de kijker herkent zichzelf er niet in.

### Waarom voetbal 9 de topper is
- Alles in beeld beweegt, behalve één voet: scherpte trekt meer aandacht dan kleur.
- De kop doet hetzelfde: dun met een spoor tegenover zwaar en stil.
- Er staan weinig elementen in beeld, en de kop heeft geen accent, zodat niets met de voet concurreert.

Voetbal 9 stopt de kijker, maar overtuigt niet. Daarom staat hij niet in de psychologielijst, en dat past bij de bovenlaag.

### Wat het team zelf aanpaste
In het canvas noemen bord 1 (het lege vakje) en bord 3 (regel 3) nu het merk of het product bij naam. Daaruit is de regel "de pointe noemt het merk" afgeleid. Het team gaf daar geen reden bij, dus het blijft een afleiding.

### Ontleding gecontroleerd en gecorrigeerd
De Ads Agent (alleen lezen) leverde de eerste ontleding. Die is in de hoofdsessie tegen de beelden en de canvasbron gelegd:
- **Knop in beeld.** Volgens de ontleding hebben de borden 1 tot 5 een eigen knop. In werkelijkheid hebben 1 tot 4 er geen. De winnaars werken dus zonder knop in beeld (element D7).
- **Rugby 6.** Rugby 6 stond als bewijs in de ontleding, terwijl het team dat bord niet noemde. Het is overal weggehaald; dit is nu een leerregel.
- **Volt vlak.** Een vol volt vlak (de post-it van bord 1) scoort toch, omdat het een echt object is en geen decoratie. Dat is als nuance opgenomen bij element D3.
- **Trustpilot.** De ontleding zag een tegenspraak met de funnel-set. Het feitenbestand staat het reviewcijfer in ads toe: 4,6 ★, altijd met de bron Trustpilot (besluit 2-10-2026). De fout zat in de funnel-notitie en de funnel-COPY.md; beide zijn gecorrigeerd.

### Meta-check
De Ads Agent las via `meta-ads` (peildatum 16-11-2026) het account, de campagnes, de ads en de insights over de hele looptijd. Geen van de 22 ads, en ook geen ad met een vergelijkbare naam, heeft gedraaid. De beoordeling is dus een team-oordeel; sectie 9 van het bouwboek noemt per element de maatstaf om het te bewijzen.

### Wat open blijft en al elders staat
- Rugbyshoot plannen: [[2026-11-15-ads-campagne-zes-foto-ads-merkstijl]].
- Toestemming van Concordia en LYRA voor betaald gebruik: de COPY.md-bestanden van de sets en [[2026-11-16-ads-funnel-trio-rugby-voetbal]].

Deze punten zijn niet opnieuw als actie opgenomen.

## Bronnen
- Canvas "HÏ Grip Ads Rugby + Voetbal": https://claude.ai/artifact/N4maEbA75Z1jNPQgwrrTKG
- [[Ads Bouwboek — bewezen elementen]], [[Ads Kennis — Lessen media buyers (TikTok)]]
- Claims: [[Feiten & Actuele Staat]]

## Aantekeningen
