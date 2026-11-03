---
id: "2026-10-30-ads-agent-onderzoek"
titel: "Ads Agent: structuur, toegang en gecontroleerde proef"
kerntitel: "Ads is adviserend en read-only; eerst meetbetrouwbaarheid toetsen"
datum: "2026-10-30"
bron: "los"
routine: ""
categorie: "Techniek"
status: "nieuw"
prioriteit: "P2"
samenvatting: "Ads is een adviserende, read-only hoofdagent: analyse, voorstellen, plannen en checklists voor mensen. Geen content, geen uitvoering. Accounts, meting en kosten zijn nog niet gevalideerd; alles vereist menselijke vrijgave."
gerelateerd: [2026-10-03-dashboard-agenda-mail-ads-leveranciers]
vervangt: []
bronbestand: ""
deadline: ""
---
# Ads Agent: structuur, toegang en gecontroleerde proef

> Map: [[Waar staat wat]]

## Harde grens: Ads is adviserend en read-only
Besluit van Lars (30-10-2026, herbevestigd 01-11-2026). Dit staat boven al het andere in deze notitie.

| Ads-agent DOET | Ads-agent DOET NIET |
|---|---|
| Analyses van aangeleverde totalen | Content, creatives, captions, copy, beelden, varianten of kant-en-klare advertenties maken |
| Verbeter- en optimalisatievoorstellen | Campagnes of advertenties aanmaken of wijzigen |
| Meta Ads-plannen en testplannen | Iets uploaden, inplannen of publiceren |
| Implementatie-instructies en checklists voor Team HÏ Grip | Budgetten, accountrechten of instellingen wijzigen |
| Risico's en bronconflicten signaleren | Externe handelingen uitvoeren (mens voert altijd zelf uit) |

Er komt geen Ads-creator (geen rol, geen subagent). Account, data, proefscope, tools en kosten vereisen elk een voorafgaande, afzonderlijke, expliciete menselijke vrijgave. Deze notitie verleent geen toegang of bevoegdheid.

## In het kort
**Conceptonderzoek, ter onafhankelijke toetsing. Geen implementatie, autorisatie of definitief oordeel.** Peildatum **30 oktober 2026**. Bronnen: briefing `t_8e7ea13e`, Meta-onderzoek `t_25e60a28`, Google-onderzoek `t_2a662cc0`. De brononderzoekers raadpleegden de officiële bronnen; Operations controleerde de handoffs, niet opnieuw alle websites of live accounts.

**Aanbeveling, geen besluit:** eerst fase 0 afronden; daarna desgewenst een tijdelijke read-only workflow met menselijk aangeleverde totalen. Meta en Google zijn afzonderlijke opties, geen gekozen kanalen. Geen advertentie-uitgaven in fasen 0–2. Overige kanalen (o.a. ChatGPT Ads) zijn **niet bevestigd** en blijven buiten de proef.

## Acties
Geen nieuwe actiechecklists: dit werkt het bestaande Ads-dossier uit in [[Stappenplan — Verdere Bouw]] §6 en [[ACTIEBACKLOG]] punten 10 en 24. [[2026-10-03-dashboard-agenda-mail-ads-leveranciers]] bevat een open voorstel voor Meta-maandbudget/doel-CPA (regel 41) en vermeldt historisch "Meta nu, TikTok later"; actualiteit is niet bevestigd, dus geen kanaalkeuze of mandaat afgeleid. Geen bestaande taak afgevinkt. Denzel controleert vóór een eventuele herinnering of die al is gegeven.

## Bevindingen
### 1. Besluiten, open keuzes en bronspanning
Het bouwplan noemde een Ads-hoofdagent met analyse, creator en eigen QA. De creator-rol vervalt (zie harde grens). De backlog (26 oktober) meldt het besluit om met Ads te starten; punt 10 en 24 bevatten nog conditionele tekst over budget en platformkeuze. Dat is geen exact budget, kanaalkeuze, accountrecht of uitvoeringsmandaat. Operations herinterpreteert het besluit niet. Historische pixelstatus en rendementen uit de backlog zijn niet als actuele feiten overgenomen.

Nog te beslissen via Denzel (Lars óf Timo): structuur, tools/rechten, proefvrijgave; kanaal door de bevoegde kanaaleigenaar. Nodig: proefscope, toegestane databronnen, menselijke eigenaar, looptijd/einddatum, kostenplafond, beoordelingscriteria. Een toekomstig campagnebudget is een afzonderlijk besluit.

### 2. Structurele opties
| Optie | Inrichting | Nadeel / voorwaarde |
|---|---|---|
| A. Aparte Ads-hoofdagent (read-only) | Eén aanspreekpunt voor betaald-verkeeranalyse: analyses, plannen, checklists; onafhankelijke Ads-QA toetst zonder herstelwerk | Extra overdrachten en QA-kosten; overlap met Social/Website. Alleen na expliciet structuurakkoord en aantoonbaar terugkerend werk. Geen profielbouw in deze opdracht |
| B. Tijdelijke read-only workflow | Website levert meetanalyse; Operations bundelt aangeleverde delen; bestaande domein-QA toetst. Eerst handmatige geaggregeerde exports | Versnipperd eigenaarschap; Denzel wijst één proefverantwoordelijke aan binnen bestaand mandaat. Geen stilzwijgende rolverbreding |
| C. Niet starten | Alleen documentatie bewaren | Geen leerresultaat; passend zolang toestemming, data of meting ontbreekt |

**Scope Social en Design in optie B (aangescherpt na Meta-QA):** Social levert uitsluitend organische prestatie-inzichten en een overzicht van hergebruikbaar materiaal (met rechtencontrole voor betaald gebruik). Social en Design maken in deze proef géén advertentiecontent of creatives; dat valt buiten fasen 0–2 en vraagt een afzonderlijk besluit van Lars. Dit is een voorstel van Operations, nog te bevestigen.

Keuzeproef: registreer werkelijke uren, overdrachten, correcties en terugkerende analyses; geen fictieve besparing of succesdrempel. Lars/Timo bepalen vooraf welke belasting een aparte tak rechtvaardigt.

### 3. Rollen (voorstel, geen mandaat)
R = uitvoerend voor analyse/onderzoek; A = eindverantwoordelijk.

| Werkpakket | R | A |
|---|---|---|
| Betaalde analyse, kanaalvergelijking, testplan | Ads-analyse (optie A) of Website (optie B) | Ads-hoofdagent / Website |
| Trackingdiagnose, landingspagina/CRO, GA4/Shopify-definities | Website | Website |
| Organische inzichten, hergebruikoverzicht | Social | Social |
| Onafhankelijk verdict (GOED / CORRIGEER / ESCALEER) | Domein-QA | Domein-QA |
| Structuur, rechten, tools, proefvrijgave | Bevoegde mens | Lars óf Timo |
| Kanaalkeuze, latere campagnevrijgave | Bevoegde mens | Bevoegde kanaaleigenaar |
| Publicatie, betaling, account-/campagne-instellingen | Menselijke uitvoerder | Bevoegde menselijke beslisser |

Website behoudt SEO en CRO; Ads signaleert maar wijzigt geen landingspagina, tracking of organische strategie. QA geeft een verdict met bewijs en beperkingen, zonder herstel door de reviewer; maximaal twee correctierondes; GOED geeft geen publicatie- of budgetrecht. Operations neemt geen kanaaleigenaarschap over.

### 4. Meta (bron `t_25e60a28`)
- Toegang vraagt app, accountautorisatie en voor rapportage `ads_read`; `ads_management` omvat beheer en is geen proefvereiste. Limited is voor ontwikkeling; Full vraagt App Review [M1]. **Accounttoegang, appstatus en rechten van HÏ Grip onbekend.**
- Insights kent o.a. impressions, spend, actions en website_purchase_roas; sommige metrics zijn geschat en niet elke breakdowncombinatie kan [M3].
- **Rate limits (aangescherpt na Meta-QA):** quota hangen af van account, app en rekenlast; er is geen universeel verzoekenquotum [M2]. Bevestigd door Meta-QA herkeuring (02-11-2026): 60 punten (tier Limited/development, blokkade 300 s) en 9000 punten (tier Full, blokkade 60 s) volgens de officiële rate-limitpagina. Een latere koppeling moet headers, backoff en caching ondersteunen.
- **Blokkerend vóór API-proef:** Best Practices meldt vanaf 10 juni 2025 genegeerde `action_report_time` en `use_unified_attribution_setting`, terwijl referentie en slotadvies dit tegenspreken [M3–M4]. Geen parameterkeuze aannemen; een implementatie-expert toetst de actuele documentatie tegen Ads Manager.
- **Pixel/CAPI en deduplicatie (aangescherpt na Meta-QA):** de bewering dat deduplicatie via `event_name` en `event_id` verloopt staat niet op de genoemde end-to-end-pagina [M5]. Status: **onbevestigd op die pagina**; de juiste bron is volgens Meta-QA de pagina "Deduplicate pixel and server events" (developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events/), waar `event_id` + `event_name` bevestigd zijn. Het is alleen een vereiste voor eventuele latere menselijke inrichting, geen opdracht om CAPI aan te zetten.
- Review omvat creative, targeting en bestemming, doorgaans binnen 24 uur maar niet gegarandeerd [M6]. Geen misleiding of persoonlijke kenmerken van de kijker [M7]. Productclaims vereisen verificatie in [[Feiten & Actuele Staat]] §Claims.

### 5. Google, GA4 en Shopify (bron `t_2a662cc0`)
- Developer tokens zouden op 9 september 2026 zijn vervallen en toegang loopt via Cloud-project/OAuth [G1]; samenvattingsblokken noemen nog oude eisen. **Documentatieconflict: geen token aanvragen of koppeling bouwen; laat de actuele route eerst valideren.**
- Toegangsniveaus: Test alleen testaccounts; Explorer 2.880 operaties/dag; Basic 15.000; Standard geen dagvolumelimiet. Basic/Standard vragen brand verification, Standard handmatige beoordeling; reporting-permissible-use geldt voor Basic én Standard [G2]. Geen conclusie over bestaande toegang.
- Geen aparte read-only OAuth-scope: gebruikersrol en managerhiërarchie bepalen rechten [G3]. Voorstel: effectief read-only accountrecht en alleen `Search`/`SearchStream`, geen mutaties; inrichting uitsluitend door een bevoegde mens.
- GA4 dedupliceert aankopen op een unieke `transaction_id`; directe Ads-conversies naast GA4-import kunnen dubbeltellen [G4–G5]. Leg primaire conversieactie, aankoopstatus en refunds vast; geen transactie-ID's of klantregels in de vault.
- Attributiemodel, venster, tijdzone, klik- versus conversiedatum en meetvertraging verklaren verschillen [G6–G8]. Geen gelijkheid tussen Ads, GA4 en Shopify veronderstellen en geen kanaal-ROAS optellen als unieke omzet.
- Shopify noemt voor advertentiepersonalisatie Consent Mode v2 en geldig consent [G9]; Google advanced consent mode kan cookieless pings sturen [G10]. Geen compliancegarantie of juridisch advies; Website/privacy-expert valideert.

### 6. Datacontract en kosten
Per bron/export vastleggen: periode, extractietijd, tijdzone, valuta, bron, filters, conversiedefinitie, model/venster, datumtype, afronding en voorlopig/definitief. Alleen geaggregeerde dag-/kanaaltotalen; geen persoonsgegevens, sleutels, klantlijsten of ruwe eventexports. Ratio's (CTR/CPC/CPA/ROAS) alleen uit geldige bronwaarden; ontbrekende of nulnoemer is "niet berekenbaar". Menselijk aangeleverde totalen zijn de terugvaloptie.

| Kostenpost | Stand | Poort |
|---|---|---|
| Google Ads API | Kosteloos volgens [G11]; overige diensten onbekend | Cloud-/toolkeuze vooraf toetsen |
| Meta API | Geen tarief vastgesteld | Geen gratis gebruik aannemen |
| Connector, hosting, licenties | Onbekend | Mens keurt offerte en plafond goed |
| AI-gebruik | Model, volume, tarief onbekend | Alleen binnen bestaande afspraak |
| Implementatie en beheer | Uren onbekend | Eerst raming, dan menselijk akkoord |
| Advertenties | **Nul nieuwe uitgaven in fasen 0–2** | Afzonderlijk budgetbesluit, menselijke uitvoering |

Geen rendement, besparing, CPA of ROAS voorspeld.

### 7. Fasen 0–2 en menselijke vrijgavepoorten
Voorgestelde tests, niet uitgevoerd.

| Fase | Bewijs | Menselijke poort / stop |
|---|---|---|
| 0. Documentatie | Notitie, twee kanaalonderzoeken, rollen, bronconflicten, kostenonbekenden; QA zonder blokkerende bevindingen | Lars/Timo kiest structuur of proef. Geen profiel, account of autorisatie aanmaken |
| 1. Geaggregeerde read-only proef | Vooraf bronselectie, eigenaar, looptijd en toegangsgrond vastleggen; geen schrijfroute in de toolinventaris; Meta versus Ads Manager, Google versus Ads-interface, verschillen naar GA4/Shopify verklaren; onverklaarde afwijking blokkeert conclusie | Alleen na apart akkoord, betrouwbare consent-/conversiedefinities en opgeloste bronconflicten. Stop bij persoonsgegevens, onverwachte kosten, ruimere rechten of noodzakelijke instellingenwijziging. Geen echte mutatie om read-only te "testen" |
| 2. Schaduwrapport | Herhaald rapport met vaste definities; meet uren, overdrachten en correcties. Geen live experiment, geen concepten van advertenties | Nieuwe menselijke go/no-go na fase 1. Eindbesluit over structuur blijft menselijk |

**Altijd gesloten zonder mens:** geld uitgeven, campagnes/budgetten/rechten/instellingen wijzigen, publicatie of installatie. Akkoord op analyse is geen akkoord op inrichting.

### 8. Risico's en terugval
| Risico | Beheersing | Eigenaar / terugval |
|---|---|---|
| Rechten- of budgetoverschrijding (blokkerend) | Direct stoppen, geen vervolgcall | Menselijke accounteigenaar; handmatige totalen |
| Attributie/dubbeltelling (blokkerend) | Meta-conflict of dubbele conversies: geen optimalisatieadvies | Website; laatste gecontroleerde rapport met peildatum |
| Verouderde Google-toegangsroute (blokkerend) | Geen API-inrichting | Implementatie-expert/mens |
| Privacy/consent (blokkerend) | Geen verdere verwerking, alleen toegestane totalen | Website + privacy-expert; geen juridisch oordeel door agent |
| Claims/rechten/policy (blokkerend) | Onbewezen claim, ongeoorloofde muziek of beelden: tegenhouden | Domein-QA en mens |
| Overlap, onbeoordeelde stapel (belangrijk) | Bestaand dossier gebruiken, hoogstens één herinnering | Denzel |
| Quota, API-wijziging, meetvertraging (belangrijk) | Stoppen met ophalen; rapport als voorlopig markeren | Analist |

Terugval: stoppen, bewijs zonder geheimen noteren, geen mislukte actie via een andere tool omzeilen, Denzel informeren. De agent reset of wijzigt niets en pauzeert geen bestaande campagnes. Na twee mislukte correctierondes escaleren. Bij geweigerde push of grensoverschrijding stoppen, nooit forceren.

### 9. Zelfcheck Operations (geen onafhankelijk QA-verdict)
| Criterium | Uitkomst |
|---|---|
| Harde grens bovenaan, concreet en toetsbaar | ✅ Tabel DOET / DOET NIET |
| Geen Ads-creator als voorgestelde rol | ✅ Alleen genoemd als vervallen |
| Menselijke vrijgavepoorten behouden | ✅ Harde grens, §1, §6, §7 |
| Meta-QA-punten (rate-limit, scope, M5, omvang) | ⚠️ Verwerkt in §2, §4; rate-limitcijfers en M5-bron niet zelf bij de bron nagelopen |
| Live validatie | ⚠️ Geen accounts, API-runtime, tags, consent of kosten getest |

## Aantekeningen
**QA-status 30-10-2026:** Website-QA `t_18486768`: **GOED** (G1–G5, G9, G10 geverifieerd; G6–G8, G11, M1–M7 niet). Social/Meta-QA `t_f336a036`: **CORRIGEER (licht)**: punten rate-limit, Social-scope, M5-bron en omvang zijn in deze versie verwerkt (ronde 1 van max. 2); herkeuring door Meta-QA nog niet gedaan. De notitie is ingekort tot ±16 KB (Meta-QA: acceptabel); het Google-deel is niet afgesplitst maar samengevat, details staan in kaart `t_2a662cc0`. Status blijft **concept / nieuw**.

Bronnen (raadpleegdatum 30-10-2026 door de makers van de onderzoekskaarten; geen API-versie of runtimevalidatie afgeleid):
- Meta: [M1](https://developers.facebook.com/documentation/ads-commerce/marketing-api/get-started/authorization) · [M2](https://developers.facebook.com/documentation/ads-commerce/marketing-api/overview/rate-limiting) · [M3](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/insights) · [M4](https://developers.facebook.com/documentation/ads-commerce/marketing-api/insights/best-practices) · [M5](https://developers.facebook.com/documentation/ads-commerce/conversions-api/guides/end-to-end-implementation) · [M6](https://transparency.meta.com/policies/ad-standards/) · [M7](https://transparency.meta.com/policies/ad-standards/objectionable-content/privacy-violations-personal-attributes/)
- Google/Shopify: [G1](https://developers.google.com/google-ads/api/docs/api-policy/developer-token) · [G2](https://developers.google.com/google-ads/api/docs/api-policy/access-levels) · [G3](https://developers.google.com/google-ads/api/docs/oauth/access-model) · [G4](https://support.google.com/analytics/answer/12313109) · [G5](https://support.google.com/google-ads/answer/6386790) · [G6](https://support.google.com/analytics/answer/10597962) · [G7](https://support.google.com/google-ads/answer/6270625) · [G8](https://support.google.com/google-ads/answer/2544985) · [G9](https://help.shopify.com/en/manual/privacy-and-security/privacy/customer-privacy-settings/understanding-customer-privacy-settings) · [G10](https://support.google.com/google-ads/answer/10000067) · [G11](https://developers.google.com/google-ads/api/docs/oauth/cloud-project)

Interne bronnen: `t_8e7ea13e`, `t_c5c6d4e3`, `01_Agent_Infrastructuur/Beheer/user.md`, `08_Operations_Agent/Stappenplan — Verdere Bouw.md`, `02_Dashboard/_backlog/ACTIEBACKLOG.md`, `00_Brand_Core/Feiten & Actuele Staat.md` (alleen gelezen).

Deze notitie is geen toestemming voor Ads, agentbouw, API-inrichting of dashboardpublicatie.
