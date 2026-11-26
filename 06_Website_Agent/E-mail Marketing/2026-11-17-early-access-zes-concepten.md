---
type: concept
gebied: website-agent
datum: 2026-11-17
status: concept, correctieronde 1 uitgevoerd, wacht op herkeuring door onafhankelijke Website-QA; niet zelf GOED claimen
eigenaar: Website Agent
bron-kaart: t_fab06fb6
correctie-kaart: t_112492e0
briefing: 02_Dashboard/2026-11-17-briefing-early-access-emails.md
---

# Early access: zes e-mailconcepten (B2C)

Alleen concept. Niets verstuurd, ingepland of aangemaakt; geen klantdata of lijst gelezen; geen kortingscode of instelling gemaakt. Alles tussen `[INVUL: ...]` is een open feit dat Team HÏ Grip vaststelt. `[BEVESTIG Vn]` verwijst naar een aanname in sectie 6. Geen merge-tags geraden: de SendWILL-syntax is niet bevestigd ([[E-mail Verzending & Techniek]]).

**Herkomst (eerlijk).** De eerste versie (t_fab06fb6) is door de Website Agent hoofdagent zelf geschreven, zonder sub-agent. Dat was een procesafwijking tegen Agents Website Agent (regel 15 en 36: de hoofdagent doet het werk van een sub-agent niet zelf). Correctieronde 1 (t_112492e0) is uitgevoerd door een E-mail Marketing/Copy sub-agent, aangestuurd door de Website Agent, na een CORRIGEER van onafhankelijke QA (deleg_97bd7504). Herkeuring is nog niet gedaan; die volgt van een onafhankelijk Website-QA-profiel. Dit bestand claimt geen QA-GOED.

## 1. Vaste elementen in alle zes

- Tutoyeren, kort, geen eyebrows, geen emoji, geen countdown.
- Eén primaire CTA per mail, geen tweede knop of tweede link met dezelfde functie. De CTA-knop krijgt nooit de accentkleur (Leerregel Design Agent, 05-11); de tegenstrijdige regel in Design Elementen is al gemeld en niet opgelost.
- Footer in elke mail: `[INVUL: afzender]`, `[INVUL: bedrijfsgegevens]`, `[INVUL: afmeldlink]`.
- Aanhef: `Hoi [INVUL: voornaam],`.
- Productnaam in communicatie: PERFORMANCE GRIP SOCKS 2.0 (alleen noemen als het aanbod het vraagt).

## 2. Aanmeldmail: uitnodiging voor bestaande klanten

Doel: aanmelden voor early access. Eén primaire CTA naar `[INVUL: aanmeldlink]`.

### A1: erkenning

- **Invalshoek:** Wederkerigheid en erkenning: wie al klant is wordt als eerste benaderd, dat maakt aanmelden een logische vervolgstap.
- **Onderwerp:** `[INVUL: voornaam]`, jij koos al voor grip
- **Preheader:** Meld je aan voor early access bij HÏ Grip.
- **Kop:** Jij koos al voor grip.
- **Volgorde:** kop, twee zinnen, CTA, één regel over het moment.
- **Body:**
  Hoi `[INVUL: voornaam]`,
  Je koos HÏ Grip al. Daarom nodigen we jou uit voor early access.
  `[INVUL: wat early access inhoudt, één zin]`
- **CTA:** Meld je aan
- **Onder de knop:** `[INVUL: early-access-datum of moment]`

### A2: kleine stap (herschreven in correctieronde 1)

- **Invalshoek:** Kleine commitment: aanmelden is een kleine eerste stap in plaats van een aankoop. Het voordeel van die stap staat vooraan, zodat de klant weet wat het oplevert. Geen belofte over gemak of snelheid.
- **Onderwerp:** Early access: `[INVUL: wat de klant krijgt door aan te melden]`
- **Preheader:** Meld je aan en ontvang `[INVUL: wat de klant krijgt door aan te melden]`. Aanmelden is [BEVESTIG V1: vrijblijvend].
- **Kop:** Dit krijg je met early access.
- **Volgorde:** kop, voordeel (invulveld), wat aanmelden inhoudt (invulveld), CTA, regel over vrijblijvendheid.
- **Body:**
  Hoi `[INVUL: voornaam]`,
  Als je je aanmeldt, krijg je: `[INVUL: wat de klant krijgt door aan te melden]`
  Zo werkt aanmelden: `[INVUL: wat de klant doet bij het aanmelden, en wat daarna volgt en wanneer; alleen invullen als vastgesteld]`
  Aanmelden is [BEVESTIG V1: vrijblijvend].
- **CTA:** Aanmelden
- Genummerde stappen zijn vervallen: de inhoud ervan is onbekend. Staan de stappen vast, dan mogen ze terug als lijst, mits de kop waar blijft.

### A3: identiteit

- **Invalshoek:** Identiteit en ambitie: de uitnodiging past bij de sporter die doorgaat, met merkstem en het sportersaantal als sociale norm.
- **Onderwerp:** Ga door waar anderen stoppen
- **Preheader:** Early access voor sporters die HÏ Grip al dragen.
- **Kop:** Ga door waar anderen stoppen.
- **Volgorde:** kop, korte regel, bewijsregel (3500+), uitnodiging, CTA.
- **Body:**
  Hoi `[INVUL: voornaam]`,
  Jij blijft gaan. Daarom nodigen we jou uit voor early access.
  De keuze van 3500+ sporters. More grip, better performance.
  `[INVUL: wat early access inhoudt, één zin]`
- **CTA:** Doe mee

## 3. Codemail: voor wie zich heeft aangemeld

Doel: de code afleveren en naar de shop leiden. Eén primaire CTA naar `[INVUL: shoplink]`. Of de code automatisch wordt toegepast via de link is onbekend `[INVUL: ja/nee]`.

### C1: helderheid

- **Invalshoek:** Frictieverlaging: code vooraan, twee stappen om hem te gebruiken, geen zoeken.
- **Onderwerp:** Je code voor early access staat klaar
- **Preheader:** `[INVUL: kortingshoogte]` met code `[INVUL: kortingscode]`.
- **Kop:** Dit is je code.
- **Volgorde:** kop, codeblok (code, hoogte, geldigheid), twee gebruiksstappen, voorwaarden, CTA.
- **Body:**
  Hoi `[INVUL: voornaam]`,
  Je staat op de lijst voor early access.
  Jouw code: `[INVUL: kortingscode]` (`[INVUL: kortingshoogte]`)
  1. Kies je sokken.
  2. Vul de code in bij het afrekenen.
  Geldig: `[INVUL: periode of einddatum, alleen als vastgesteld]`
  Voorwaarden: `[INVUL: producten, combinatie met bundelkorting, minimum, eenmalig gebruik]`
- **CTA:** Shop met je code
- De verzendregel is geschrapt (zie sectie 6, V6).

### C2: bedankt en vervolg (herschreven in correctieronde 1)

- **Invalshoek:** Commitment en consistentie: de klant zei al ja tegen early access, de code is de logische beloning voor die stap. Het voordeel staat zichtbaar vooraan.
- **Onderwerp:** Aangemeld: `[INVUL: kortingshoogte]` met je early-access-code
- **Preheader:** Bedankt, `[INVUL: voornaam]`. Je code `[INVUL: kortingscode]` staat klaar.
- **Kop:** Bedankt. Jouw voordeel: `[INVUL: kortingshoogte]`.
- **Volgorde:** kop met voordeel, bevestiging wat de klant gekozen heeft, wat early access nu is, code, CTA.
- **Body:**
  Hoi `[INVUL: voornaam]`,
  Je zei ja tegen early access. Wij leggen de basis, jij presteert.
  Jouw voordeel: `[INVUL: kortingshoogte]` met code `[INVUL: kortingscode]`
  Dit staat verder voor je klaar: `[INVUL: wat early access inhoudt, datum of moment]`
  Voorwaarden: `[INVUL: aanbodvoorwaarden]`
- **CTA:** Koop met early access
- Geen schaarste, geen deadline, geen waarden verzonnen. De CTA benoemt de koopactie en verschilt van C1 (Shop met je code) en C3 (Gebruik je code).

### C3: sociaal bewijs

- **Invalshoek:** Sociaal bewijs: aantal sporters en Trustpilot-score maken de code tot een veilige, normale keuze.
- **Onderwerp:** De keuze van 3500+ sporters. Nu met jouw code.
- **Preheader:** Je early-access-code: `[INVUL: kortingscode]`
- **Kop:** De keuze van 3500+ sporters.
- **Volgorde:** kop, bewijsregel met bron, code, voorwaarden, CTA.
- **Body:**
  Hoi `[INVUL: voornaam]`,
  Sporters kiezen voor grip. Beoordeeld met 4,6 op Trustpilot. [BEVESTIG V4: actuele score]
  Jouw code voor early access: `[INVUL: kortingscode]` (`[INVUL: kortingshoogte]`)
  Geldig: `[INVUL: periode of einddatum, alleen als vastgesteld]`
  Voorwaarden: `[INVUL: aanbodvoorwaarden]`
- **CTA:** Gebruik je code

## 4. Overdrachtsblok voor Design

Briefing aan de Design Agent, geen beeldkeuze van mij. Wijzigingen van ronde 1 oud en nieuw naast elkaar: [[2026-11-17-early-access-overdracht-design-ronde1]].

- Zes mails: A1 tot en met A3 zonder code, C1 tot en met C3 met een codeblok. Per mail eerst een skelet kiezen, dan kleur ([[E-mail Design & Stijlgids]]); niet drie keer hetzelfde skelet.
- Inhoudsvolgorde en tekst staan hierboven per optie. Hou de tekst zo kort als hier; liever beeld, icoon of symbool dan extra regels.
- Het codeblok in C1 tot en met C3 moet de code als prominent element tonen. Bestaand signature-element: ticket-stub coupon-card (stijlgids); Design bepaalt of dat past. Een statisch element mag er niet uitzien als een klok.
- Eén CTA per mail; de knop nooit in accentkleur. Geen eyebrows.
- Open feiten blijven zichtbare plaatsmarkering in de previews (`[INVUL: ...]`), geen verzonnen waarden.
- Beeld alleen uit de vault of `<HiGripMedia>/`.
- Footer met afmeldlink moet in het ontwerp ruimte hebben.
- A3 en C3 gebruiken 3500+ en 4,6 Trustpilot: tonen met bron zoals in de tekst.
- Nieuw in ronde 1: A2 heeft geen genummerde stappen meer (voordeelblok plus uitlegregel). C2 toont het voordeel (`[INVUL: kortingshoogte]`) in kop en codeblok. C1 heeft geen verzendregel meer.

## 5. Status campagnebesluiten (gericht gezocht)

- **Early access en kortingscodes:** staan als strategie in [[Strategische Keuzes]] en [[E-mail Lijst Strategie]] (Canva leidend): kortingscodes, early access en campagnes, eerst feedback dan korting; Performance Academy-members krijgen early access op drops en lanceringen. Status: strategie, geen uitgewerkt campagnebesluit (korting, datum, voorwaarden niet vastgelegd).
- **Black Friday en Performance Days:** bestaan als concept/advies (`06_Website_Agent/Strategie/2026-11-05-performance-days-website-email-meetplan.md`, status concept, Black Friday 27-11-2026; briefing Operations 05-11). Besluiten staan open in `02_Dashboard/2026-11-10-ads-plan-bereik-conversie-sales.md` (o.a. budget, aanbod 3+3, stapelen). Geen vaststelling gevonden dat early access of deze codemails daaraan gekoppeld zijn. Er is dus **geen koppeling aangenomen** en niets in de teksten verwijst ernaar.
- **Open vraag aan Team HÏ Grip:** staat de codemail los van Performance Days, of moet de code ermee samenvallen of er niet mee stapelen? Zie ook testgeval T9 in het meetplan (code plus actie stapelt niet automatisch).

## 6. Aannames en open punten

- V1: Aanmelden is vrijblijvend en gratis. Niet in de vault; bevestigen voordat A2 de claim gebruikt.
- V2: Wat early access inhoudt en wanneer. Onbekend, invulveld. Geldt ook voor het voordeel van aanmelden in A2.
- V3: Wie ontvangt A (bestaande klanten met expliciete marketingtoestemming) en wie C (aangemelden). Bepaalt Team HÏ Grip; ik heb geen lijst gelezen. Orderbevestiging is geen marketingtoestemming ([[E-mail Lijst Strategie]]).
- V4: 4,6 Trustpilot: stand 5-11-2026 in [[Feiten & Actuele Staat]] (laatst geverifieerd 11-10, rij 5-11). Voor verzending opnieuw lezen en het cijfer met bron tonen; nooit als schema-rating.
- V5: 3500+ sporters uit Feiten (besluit Lars 11-10-2026).
- V6 (aangepast): De verzendregel is uit C1 geschrapt. Reden: Feiten (rij 53 tot 55) noemt €4,50 voor Nederland, €5,00 buiten Nederland (BE, DE, AT, FR, GB, IT, LU, PT, CH) en gratis vanaf €35. Een regel met alleen €4,50 negeerde het buitenland. Bovendien rekent Shopify de drempel op het winkelwagentotaal na korting (meetplan Performance Days, bevinding 1), dus met een code kan een klant onder €35 uitkomen. Voor een codemail is de regel niet nodig. Elders in het bestand stond geen verzendregel; alleen sectie 6, 7 en 8 verwezen ernaar en zijn aangepast.
- V7: Korting, code, geldigheid, voorwaarden, link: niet vastgesteld; niet zelf invullen.
- V8: Afzender, afmeldlink, bedrijfsgegevens: invulveld. UTM op SendWILL-links nog niet bevestigd (meting).
- Geen grip-claim (95%) gebruikt; als Team HÏ Grip die wil, verplicht met de formuleringsregel en bron Apps et al. 2022 uit Feiten.
- Geen schaarste, exclusiviteit, deadline of conversiebelofte verzonnen. Geen gemakbelofte ("één stap", "in 10 seconden", "makkelijk") zolang de aanmeldstappen niet vaststaan. Onderwerpregels zijn niet getest.

## 7. Zelfcheck tegen de briefing (maker, geen QA)

| # | Criterium | Status | Bewijs |
|---|---|---|---|
| 1 | Exact 3 aanmeld- en 3 codeopties, genummerd | OK | A1 tot A3 en C1 tot C3 in sectie 2 en 3 |
| 2 | Per optie onderwerp, preheader, body, één CTA | OK | Elke optie heeft die vier; één CTA per optie; A1 heeft een regel onder de knop met het moment, geen tweede CTA |
| 3 | Eigen invalshoek in één zin, geen conversieclaims | OK | Zes verschillende: erkenning, kleine commitment, identiteit, helderheid, commitment en consistentie, sociaal bewijs. Geen percentages of benchmarks |
| 4 | Visuele previews en bronbestanden (Design) | Niet gedaan | Hoort bij Design Agent; overdrachtsblok en ronde-1-overdracht klaar |
| 5 | Feiten en merk, invulvelden | OK met gaten | Alleen 3500+ en Trustpilot 4,6 uit Feiten; verzendregel geschrapt (V6); de rest invulveld. V1 en V4 vragen controle |
| 6 | QA vóór goedkeuringsclaim | Niet gedaan | Ronde 1 verwerkt; herkeuring door onafhankelijke Website-QA en Design-QA nog niet gedraaid. Dit is klaar ter herkeuring, niet goedgekeurd |

Niet gecontroleerd: render in e-mailclients, dark-mode, SendWILL, spamfilters, spelling door een tweede lezer, lengte van onderwerpen op mobiel (A2 en C2 zijn langer geworden), de vier TikTok-referenties (niet geanalyseerd, niet gebruikt; een referentieanalyse volgt op screenshots of transcript van Lars).

Wat een expert nog zou toevoegen: tweede onderwerpregel per optie voor een test (pas zinvol met voldoende lijstgrootte), een juridische blik op "vrijblijvend" en kortingsvoorwaarden, en een check van de afmeld- en toestemmingsroute.

## 8. Beslissingen voor Team HÏ Grip

1. Korting, code, geldigheid, voorwaarden en of de code vast of per persoon is.
2. Wat early access inhoudt, het voordeel van aanmelden (A2), datum en aanmeldlink.
3. Mag de aanmelding vrijblijvend genoemd worden (V1).
4. Staat dit los van Performance Days (sectie 5)?
5. Welk contact mag marketingmail krijgen (V3).
6. Verzendregel in C1: geschrapt. Wil Team HÏ Grip er toch een, dan alleen met Nederland €4,50, buiten Nederland €5,00 (BE, DE, AT, FR, GB, IT, LU, PT, CH), gratis vanaf €35 op het winkelwagentotaal na korting, en opnieuw laten toetsen (V6).

## 9. Wijzigingslog correctieronde 1 (t_112492e0)

1. **C1 (blokkerend):** regel "Verzending: gratis vanaf €35, anders €4,50 ..." geschrapt. V6, sectie 8 punt 6 en zelfcheck rij 5 aangepast. Geen andere verzendregel in het bestand.
2. **A2 (belangrijk):** onderwerp, preheader, kop, volgorde en body herschreven. "Eén stap. Dat is alles." en "Eén stap naar early access" vervallen. Drie genummerde stappen vervangen door een uitleg-invulveld omdat de inhoud onbekend is. Voordeel toegevoegd als invulveld in onderwerp, preheader en body. V1-markering en invalshoek kleine commitment behouden.
3. **C2 (belangrijk):** onderwerp, preheader, kop en body tonen `[INVUL: kortingshoogte]` en de code; CTA "Bekijk early access" vervangen door "Koop met early access". Commitment en consistentie behouden.
4. **Herkomst:** status, frontmatter, herkomstblok en zelfcheck rij 6 aangepast; `correctie-kaart` toegevoegd.
5. **Ongewijzigd:** A1, A3, C3 volledig; C1 behalve punt 1. Sectie 4 kreeg een regel over ronde 1 en een verwijzing.

> Map: [[06 Website Agent — Index]]
