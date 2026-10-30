---
id: "2026-10-30-ads-agent-onderzoek"
titel: "Ads Agent: structuur, toegang en gecontroleerde proef"
kerntitel: "Eerst meetbetrouwbaarheid toetsen, geen Ads-uitvoering door agents"
datum: "2026-10-30"
bron: "los"
routine: ""
categorie: "Techniek"
status: "nieuw"
prioriteit: "P2"
samenvatting: "Een tijdelijke read-only proef kan de behoefte aan een aparte Ads-hoofdagent onderbouwen. Beide opties vereisen menselijke vrijgave; accounts, meting en kosten zijn nog niet gevalideerd."
gerelateerd: [2026-10-03-dashboard-agenda-mail-ads-leveranciers]
vervangt: []
bronbestand: ""
deadline: ""
---
# Ads Agent: structuur, toegang en gecontroleerde proef
> Map: [[Waar staat wat]]

## In het kort
**Conceptonderzoek, ter onafhankelijke toetsing. Geen implementatie, autorisatie of definitief oordeel.** Operations bundelt briefing `t_8e7ea13e`, Meta-onderzoek `t_25e60a28` en Google-onderzoek `t_2a662cc0`. Peildatum: **30 oktober 2026**. De brononderzoekers raadpleegden de officiële bronnen op die datum; Operations controleerde de handoffs en vaultpassages, niet opnieuw alle websites of live accounts.

**Aanbeveling, geen besluit:** eerst fase 0 afronden; daarna desgewenst een tijdelijke read-only workflow met menselijk aangeleverde totalen. Beslis pas na de proef of een aparte Ads-hoofdagent de extra coördinatie waard is. Meta en Google zijn afzonderlijke opties, geen gekozen kanalen. Geen advertentie-uitgaven in fasen 0–2. Overige kanalen blijven buiten de proef tot eigen officiële broncontrole; beschikbaarheid en resultaten van ChatGPT Ads zijn hier **niet bevestigd**.

## Acties
Geen nieuwe actiechecklists: dit is de uitwerking van het bestaande Ads-dossier in [[Stappenplan — Verdere Bouw]] §6 en [[ACTIEBACKLOG]] punten 10 en 24, geen tweede backlog. Ook [[2026-10-03-dashboard-agenda-mail-ads-leveranciers]] bevat een open voorstel voor Meta-maandbudget/doel-CPA (regel 41). Die notitie vermeldt historisch “Meta nu, TikTok later” (regels 24–28); actualiteit en reikwijdte voor deze proef zijn niet opnieuw bevestigd, dus geen nieuwe kanaalkeuze of uitvoeringsmandaat afgeleid. Geen bestaande taak afgevinkt. Bestaande onbeoordeelde voorstellen blijven staan; herinneringshistorie is onbekend. Denzel controleert vóór een eventuele eenmalige herinnering of die al is gegeven.

## Bevindingen
### 1. Bestaande besluiten, open keuzes en bronspanning
Het bouwplan noemt al een ADS-hoofdagent met Ads-analyse, Ads-creator en eigen ADS-QA. Dit onderzoek werkt dat uit en vergelijkt een tijdelijke tussenstap; het verleent geen nieuwe bevoegdheden.

De backlog vermeldt op 26 oktober het besluit om die week met Ads te starten. Punt 10 bevat daarnaast conditionele tekst over een budgetbeslissing en platformkeuze; punt 24 doet hetzelfde. De regel “Wachten op” verwijst inmiddels naar het genomen besluit. **Belangrijk:** oudere conditionele tekst blijft verwarrend; de update is geen exact budget, kanaalkeuze, accountrecht of uitvoeringsmandaat. Operations wijzigt of herinterpreteert het besluit niet. De oude dashboardtekst over automatisch bijsturen is evenmin toestemming. Historische pixelstatus, rendementen en beschikbaarheidsclaims uit de backlog zijn niet als actuele feiten overgenomen.

Nog te beslissen via Denzel: Lars óf Timo over structuur, tools/rechten en proefvrijgave; bevoegde kanaaleigenaar over het kanaal. Nodig zijn proefscope, toegestane databronnen, menselijke eigenaar, looptijd/einddatum, kostenplafond en beoordelingscriteria. Er is geen deadline aangeleverd. Een toekomstig campagnebudget vergt een afzonderlijk besluit, niet opnieuw een generieke vraag of Ads überhaupt gewenst is.

### 2. Structurele opties
| Optie                            | Inrichting en voordeel                                                                                                                                                                                                                                                     | Nadeel / keuzevoorwaarde                                                                                                                                                                         |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| A. Aparte Ads-hoofdagent         | Ads-hoofdagent bundelt betaald-verkeeranalyse en conceptbriefs. Ads-analyse bewaakt definities/reconciliatie; Ads-creator maakt uitsluitend copy-/creatieve concepten; onafhankelijke Ads-QA toetst zonder herstelwerk. Eén herkenbaar aanspreekpunt voor betaald verkeer. | Extra overdrachten, context- en QA-kosten; risico op overlap met Social/Website. Alleen bouwen na expliciet structuurakkoord en aantoonbaar terugkerend werk. Geen profielbouw in deze opdracht. |
| B. Tijdelijke read-only workflow | Bestaande Website-analyse voor meting, Social voor betaalde conceptinput, Design voor uitwerking; bundeling door Operations van aangeleverde delen. Bestaande onafhankelijke domein-QA. Eerst handmatige geaggregeerde exports; API optioneel.                             | Versnipperd eigenaarschap; Denzel moet één proefverantwoordelijke aanwijzen binnen bestaand mandaat. Geen stilzwijgende uitbreiding van de bestaande rollen.                                     |
| C. Niet starten / pauzeren       | Alleen deze documentatie bewaren; geen toegang, toolinrichting of dataverwerking.                                                                                                                                                                                          | Geen leerresultaat uit accounts; passend zolang toestemming, data of betrouwbare meting ontbreekt.                                                                                               |

Voorgestelde keuzeproef: registreer werkelijke uren, overdrachten, correcties en terugkerende analyses; geen fictieve besparing of numerieke succesdrempel. Lars/Timo stellen vóór de proef vast welke belasting een aparte tak rechtvaardigt. Optie B wijzigt het eerdere structuurvoornemen niet zelfstandig.

### 3. Voorgestelde RACI en QA-grens
R = uitvoerend voor het genoemde **concept/onderzoek**; A = inhoudelijk eindverantwoordelijk; C = geraadpleegd; I = geïnformeerd. Dit schema is een voorstel, geen mandaat. Menselijke vrijgave blijft apart van inhoudelijk eigenaarschap.

| Werkpakket                                                            | R                     | A                                           | C                              | I                          |
| --------------------------------------------------------------------- | --------------------- | ------------------------------------------- | ------------------------------ | -------------------------- |
| Betaalde analyse, kanaalvergelijking, concept-testplan                | Ads-analyse           | Ads-hoofdagent                              | Website, Social                | Design, Operations, Denzel |
| Betaalde conceptcopy en creative-brief                                | Ads-creator           | Ads-hoofdagent                              | Social, Design, Website        | Operations, Denzel         |
| Visuele conceptuitwerking                                             | Design                | Design                                      | Ads-creator, Social            | Ads-hoofdagent, Website    |
| Organische planning/content                                           | Social                | Social                                      | Design; Ads voor hergebruik    | Ads-hoofdagent, Operations |
| Trackingdiagnose, landingspagina/CRO-voorstel, GA4/Shopify-definities | Website               | Website                                     | Ads-analyse, Design            | Social, Operations         |
| Onafhankelijk Ads-verdict                                             | Ads-QA                | Ads-QA                                      | Domein-QA voor eigen onderdeel | Ads-hoofdagent én Denzel   |
| Structuur/rechten/tools/proefvrijgave                                 | Bevoegde mens         | Lars óf Timo                                | Denzel, betrokken hoofdagents  | Operations                 |
| Kanaalkeuze en eventuele latere campagnevrijgave                      | Bevoegde mens         | Bevoegde kanaaleigenaar                     | Ads, Website, Social, Design   | Denzel, Operations         |
| Publicatie, betaling, account-/campagne-instellingen                  | Menselijke uitvoerder | Bevoegde menselijke beslisser per onderwerp | Betrokken hoofdagent           | Operations, Denzel         |

In optie B vervallen de nog niet bestaande Ads-rollen: Website levert meetanalyse, Social levert conceptinput, Design beeld; hun eigen QA toetst onafhankelijk. Denzel bepaalt de coördinatie, Operations neemt geen kanaaleigenaarschap over. Website behoudt SEO en CRO; Ads signaleert, maar wijzigt geen landingspagina, tracking of organische strategie. Hergebruik van organisch materiaal vereist controle van rechten voor betaald gebruik.

Ads-QA levert **GOED / CORRIGEER / ESCALEER**, bewijs en beperkingen; verdict ongewijzigd naar hoofdagent en Denzel, geen herstel door de reviewer. Maximaal twee correctierondes. GOED geeft geen publicatie- of budgetrecht. Voor dit onderzoek volgen bestaande kaarten `t_18486768` (Website-QA) en `t_f336a036` (Social/Meta-QA); verwerking en definitieve status pas in `t_a46a1470`. Geen Ads-QA-agent aangemaakt.

### 4. Meta: platformbevindingen uit t_25e60a28
- Toegang vraagt app, accountautorisatie en voor rapportage `ads_read`; `ads_management` omvat beheer en is geen proefvereiste. Permission-levels standard/advanced zijn niet hetzelfde als Marketing API-tiers Limited/Full. Limited is voor ontwikkeling; Full vraagt App Review. Eigen/andermans accounts en gevoelige data beïnvloeden review/verificatie [M1]. **Accounttoegang, appstatus en feitelijke rechten van HÏ Grip onbekend.**
- Insights kent onder meer impressions, spend, actions en website_purchase_roas. Sommige metrics zijn geschat; niet elke breakdowncombinatie kan [M3]. Quota hangen af van account, app en rekenlast: geen universeel verzoekenquotum [M2]. Een latere koppeling moet headers, backoff en caching ondersteunen.
- **Blokkerend vóór API-proef:** Best Practices meldt vanaf 10 juni 2025 genegeerde `action_report_time` en `use_unified_attribution_setting`, met mixed rapportagetijd/adset-attributie; referentie en slotadvies spreken dit tegen [M3–M4]. Geen parameterkeuze aannemen. Een implementatie-expert moet de actuele versie, documentatie en toegestane read-only respons tegen Ads Manager toetsen. Recente cijfers kunnen dagen veranderen.
- Pixel/CAPI: dezelfde consentlogica; deduplicatie via overeenkomende `event_name` en `event_id` [M5]. Dit is een vereiste voor eventuele latere menselijk uitgevoerde inrichting, geen opdracht om CAPI aan te zetten.
- Review omvat creative, targeting en bestemming; doorgaans binnen 24 uur maar niet gegarandeerd en herreview mogelijk [M6]. Geen misleiding of impliciete medische/persoonlijke kenmerken van de kijker [M7]. Interne QA toetst ook beeld-/muziekrechten en bestemming. Algemene gripsokkenstudies zijn geen eigen HÏ Grip-producttest; claims vereisen actuele verificatie in [[Feiten & Actuele Staat]] §Claims.

### 5. Google, GA4 en Shopify: bevindingen uit t_2a662cc0
- De op 30 oktober gelezen documentatiebody meldt dat developer tokens op 9 september 2026 vervielen en toegang via Cloud-project/OAuth loopt [G1]. Samenvattingsblokken noemen nog oude eisen. **Documentatieconflict: niet op deze samenvatting een token aanvragen of koppeling bouwen.** Laat de actuele toegangsroute vóór een proef valideren.
- Toegangsniveaus volgens dezelfde onderzoekskaart: Test alleen testaccounts; Explorer productie tot 2.880 operaties/dag; Basic 15.000; Standard geen dagvolumelimiet maar wel overige limieten. Nieuwe Basic/Standard-aanvragen vereisen brand verification; Standard handmatige beoordeling. Reporting-permissible-use betreft Basic én Standard [G2] (gecorrigeerd na Website-QA t_18486768). Geen conclusie over bestaande HÏ Grip-toegang of noodzakelijke tier.
- Geen aparte read-only OAuth-scope: Ads-gebruikersrol en managerhiërarchie bepalen effectieve rechten [G3]. Voorstel: effectief read-only accountrecht plus alleen `Search`/`SearchStream` op de allowlist, geen mutaties. Nieuwe rechten of Cloud-inrichting uitsluitend door een bevoegde mens, buiten deze opdracht.
- GA4 dedupliceert webaankopen op een unieke niet-lege `transaction_id`; Ads binnen dezelfde conversieactie [G4–G5]. Directe Ads-conversies naast GA4-import kunnen daarom dubbeltellen. Leg primaire conversieactie, aankoopstatus en refunds vast. Geen transactie-ID's of klantregels in de vault; Website controleert waar nodig aan de bron en levert alleen totalen.
- Attributiemodel, kanaaldefinitie, venster, tijdzone, klikdatum versus conversiedatum en meetvertraging verklaren verschillen [G6–G8]. Geen gelijkheid tussen Ads, GA4 en Shopify veronderstellen; geen kanaal-ROAS optellen als unieke omzet.
- Shopify noemt voor EER-advertentiepersonalisatie Consent Mode v2 en geldig consent [G9]; Google advanced consent mode kan cookieless pings sturen bij weigering [G10]. Dit is **geen compliancegarantie of juridisch advies**. Website/privacy-expert valideert de werkelijke werking vóór datagebruik; agents veranderen niets.

### 6. Datacontract en kosten
Voorgesteld datacontract per bron/export: periode inclusief einddatum, extractietijd, tijdzone, valuta, bron, filters, attribuut-/conversiedefinitie, model/venster, rapportagedatumtype, afronding en voorlopige/definitieve status. Alleen geaggregeerde dag-/kanaaltotalen; geen persoonsgegevens, sleutels, klantlijsten of ruwe eventexports.

Meta: vertoningen, klikken met expliciete klikdefinitie, spend, aankoopacties/-waarde en attributiecontext. Google: vertoningen, klikken, kosten, aankoopconversies/-waarde; CTR/CPC/CPA/ROAS uitsluitend uit geldige bronwaarden met formule/noemer. GA4: sessies en aankoopsessies. Shopify: ordertotalen, omzet en AOV, met status/refunds/btw/verzending consistent gedefinieerd. Ontbrekende of nulnoemer betekent “niet berekenbaar”, geen schatting. Menselijk aangeleverde totalen zijn de terugvaloptie als API-toegang ontbreekt; geen koppeling afdwingen.

| Kostenpost                    | Bekend / ontbrekend                                                                     | Poort                                                       |
| ----------------------------- | --------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| Google Ads API                | API-gebruik kosteloos volgens [G11]; geen bewijs dat overige diensten gratis zijn       | Cloud-/toolkeuze vooraf laten toetsen                       |
| Meta API                      | Geen tariefbedrag vastgesteld in aangeleverde bronnen                                   | Geen gratis gebruik of vaste prijs aannemen                 |
| Connector, hosting, licenties | Keuze en bedragen onbekend                                                              | Mens keurt offerte en plafond goed                          |
| AI-gebruik                    | Model, volume, tarief en toegestaan gebruik onbekend                                    | Alleen binnen expliciet bestaande afspraak; anders stoppen  |
| Implementatie en beheer       | Uren/rate onbekend; ook QA, rechtenbeheer en onderhoud begroten                         | Eerst raming door uitvoerder, dan menselijk akkoord         |
| Advertenties                  | **Nul nieuwe uitgaven in deze onderzoeks-/proeffasen**; geen campagnebudget vastgesteld | Afzonderlijk kanaal-/budgetbesluit en menselijke uitvoering |

Geen rendement, besparing, CPA of ROAS voorspeld. Gratis API-toegang betekent niet een gratis workflow.

### 7. Fasen 0–2 en harde approval-poorten
Dit zijn voorgestelde tests, niet uitgevoerde accounttests.

| Fase | Bewijs en testcriteria | Menselijke poort / stop |
|---|---|---|
| 0. Documentatie, niet starten | Eén notitie, twee kanaalonderzoeken, RACI, bronconflicten, kostenonbekenden; onafhankelijke QA zonder open blokkerende bevindingen vóór vervolg | Lars/Timo kiest structuur of tijdelijke proef. Geen profiel, account, autorisatie of instellingen aanmaken. |
| 1. Geaggregeerde read-only proef | Vooraf bronselectie, eigenaar, looptijd en toegangsgrond vastleggen. Rechtenbewijs zonder geheimen; query-/toolinventaris bevat geen schrijfroute. Zelfde periode/valuta/tijdzone; Meta versus Ads Manager, Google versus Ads-interface; daarna verschillen naar GA4/Shopify verklaren. Binnen dezelfde bron moeten dezelfde filters/definities aansluiten; afronding expliciet. Tussen bronnen geen verzonnen tolerantie: vooraf door mens/expert vastleggen, elke onverklaarde afwijking blokkeert conclusie. | Alleen na apart vastgelegd akkoord, betrouwbare consent-/conversiedefinities en opgeloste relevante bronconflicten. Stop bij persoonsgegevens, onverklaarde afwijking, onverwachte kosten, ruimere rechten of noodzakelijke instellingenwijziging. Geen echte mutatie uitvoeren om read-only te “testen”. |
| 2. Schaduwrapport en conceptreview | Herhaal rapport met vastgelegde definities; benoem meetvertraging en revisies. Conceptbrief controleert claims, betaald-gebruikrechten en bestemming. Onafhankelijke QA heeft geen blokkerende bevindingen; meet uren, overdrachten/correcties en rapporteer beperkingen. Geen live experiment. | Nieuwe menselijke go/no-go na fase 1. Alleen concepten; geen advertentie aanmaken, inplannen of publiceren. Eindbesluit over structurele optie blijft menselijk. |

**Altijd gesloten zonder mens:** geld uitgeven, campagnes/budgetten/rechten/instellingen wijzigen, publicatie of installatie. Akkoord op analyse is geen akkoord op inrichting; akkoord op een concept is geen opdracht aan een agent om het live te zetten. Ook na een later akkoord blijven externe uitvoering en publicatie bij een mens. Dashboardpublicatie valt buiten deze kaart.

### 8. Risicoregister en terugvalplan
| Risico / ernst | Signaal en beheersing | Eigenaar voor vervolg / terugval |
|---|---|---|
| Rechten- of budgetoverschrijding / blokkerend | Ontbrekende vrijgave, schrijfrecht of onverwachte kosten: direct stoppen, geen vervolgcall | Menselijke accounteigenaar; terug naar documentatie of handmatige totalen |
| Onbetrouwbare attributie/dubbeltelling / blokkerend | Meta-documentatieconflict, dubbele primaire conversies of onverklaard verschil | Website + Ads-analyse; geen optimalisatieadvies, behouden laatste gecontroleerde rapport met peildatum |
| Verouderde Google-toegangsroute / blokkerend | Tegenstrijdige token-/projectdocumentatie | Implementatie-expert/mens; geen API-inrichting, handmatige export indien apart toegestaan |
| Privacy/consent / blokkerend | Identificeerbare data, onvoldoende bewijs of onduidelijke pings | Website + privacy-expert; geen verdere verwerking, alleen toegestane totalen; geen juridisch oordeel door agent |
| Claims/rechten/policy / blokkerend | Onbewezen productclaim, ongeoorloofde muziek/beelden, persoonlijke kenmerken | Domein-QA en mens; concept tegenhouden, niet publiceren |
| Overlap en onbeoordeelde stapel / belangrijk | Dubbel concept, eigenaar ontbreekt, bestaand voorstel wacht | Denzel; bestaand dossier gebruiken, hoogstens één herinnering |
| Quota/API-wijziging/meetvertraging / belangrijk | Throttling, ontbrekende velden of veranderende recente cijfers | Analist; stoppen met ophalen, later backoff/hercontrole binnen toestemming; rapport als voorlopig markeren |

Terugvalvolgorde: werk stoppen en bewijs zonder geheimen noteren; geen mislukte actie via andere tool omzeilen; Denzel informeren; laatst gecontroleerde snapshot alleen met oorspronkelijke peildatum behouden; mens laat eventuele toegang intrekken of instellingen herstellen. De agent reset/verwijdert/wijzigt niets. Geen bestaande campagnes pauzeren vanuit dit onderzoek. Bij twee mislukte correctierondes escaleren, geen derde poging. Bij geweigerde push, bestandsconflict of grensoverschrijding stoppen, nooit forceren.

### 9. Zelfcheck Operations (geen onafhankelijk QA-verdict)
| Criterium | Uitkomst en bewijs |
|---|---|
| Scope en structurele opties | ✅ Secties 1–3: opties A/B/C, Meta/Google gescheiden, overige kanalen onbevestigd; briefing t_8e7ea13e verwerkt. |
| Rollen en menselijke poorten | ✅ RACI, fasen en QA-route; user.md regels 14–37 en 68–79 gecontroleerd. Geen nieuw mandaat. |
| Toegang, meting en kosten | ✅ Secties 4–7 met M-/G-bronnen uit beide kaarten, onzekerheden expliciet. ⚠️ Geen live validatie. |
| Risico en terugval | ✅ Sectie 8 benoemt eigenaar, stoptrigger en veilige terugval; geen automatische wijzigingen. |
| Bestaand dossier en brontraceerbaarheid | ✅ Bouwplan §6, backlog punten 10/24 en dashboardtekst §Ads gelezen; geen duplicaat-acties of actuele accountclaims uit oude vaulttekst. |
| Administratieve oplevering | ✅ Eén nieuwe onderzoeksnotitie, één wederzijds verband en automatische dashboardindex bijgewerkt. `build_register.py --check`: OK (78 notities, 32 backlog-items); `vault_nav.py` uitgevoerd, laatste dry-run: 0 wijzigingen, 0 Brand Core; `git diff --check`: exit 0. ⚠️ Validator meldt onbekende historische actie-id's in beheerbestanden; niet hersteld binnen deze opdracht. Onafhankelijke QA, dashboard-sync/publicatie en definitieve status blijven open. |

## Wat niet lukte
Accounttoegang, actuele API-runtime, tags, consent, meetreconciliatie en kosten zijn niet getest. Dashboard-sync via ArtifactData is in deze run niet uitgevoerd; geen volledige sync geclaimd. Geen dashboardpublicatie. De gebundelde bronfeiten wachten op de reeds geplande onafhankelijke QA. De generieke execute_code-tool werd door unattended-beleid geweigerd; geen code uitgevoerd, verdere verwerking via reguliere toegestane bestandstools.

## Bronnen
**Raadpleegdatum officiële bronnen: 30-10-2026 door de makers van de twee onderzoekskaarten.** Paginadata hieronder zijn hun gerapporteerde zichtbare datums; geen API-versie of runtimevalidatie afgeleid. Samengevat, geen ruwe derdengegevens opgenomen.

Meta, kaart `t_25e60a28`:
- [M1 Authorization](https://developers.facebook.com/documentation/ads-commerce/marketing-api/get-started/authorization), 05-05-2026.
- [M2 Rate limiting](https://developers.facebook.com/documentation/ads-commerce/marketing-api/overview/rate-limiting), 19-08-2026.
- [M3 Ad Account Insights](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/insights), 07-04-2026.
- [M4 Insights best practices](https://developers.facebook.com/documentation/ads-commerce/marketing-api/insights/best-practices), 05-05-2026; conflicterende passage over 10-06-2025.
- [M5 CAPI end-to-end implementation](https://developers.facebook.com/documentation/ads-commerce/conversions-api/guides/end-to-end-implementation), 30-06-2026.
- [M6 Advertising Standards](https://transparency.meta.com/policies/ad-standards/), ongedateerd.
- [M7 Personal attributes](https://transparency.meta.com/policies/ad-standards/objectionable-content/privacy-violations-personal-attributes/), 27-06-2024.

Google/Shopify, kaart `t_2a662cc0`:
- [G1 Developer-token migratie](https://developers.google.com/google-ads/api/docs/api-policy/developer-token), 19-10-2026; body en samenvatting inconsistent.
- [G2 Access levels](https://developers.google.com/google-ads/api/docs/api-policy/access-levels), 19-10-2026.
- [G3 OAuth access model](https://developers.google.com/google-ads/api/docs/oauth/access-model), 14-10-2026.
- [G4 GA4 transaction IDs](https://support.google.com/analytics/answer/12313109).
- [G5 Google Ads transaction IDs](https://support.google.com/google-ads/answer/6386790).
- [G6 GA4 attribution](https://support.google.com/analytics/answer/10597962).
- [G7 Conversion reporting](https://support.google.com/google-ads/answer/6270625).
- [G8 Data freshness](https://support.google.com/google-ads/answer/2544985).
- [G9 Shopify customer privacy](https://help.shopify.com/en/manual/privacy-and-security/privacy/customer-privacy-settings/understanding-customer-privacy-settings).
- [G10 Consent mode](https://support.google.com/google-ads/answer/10000067).
- [G11 Cloud project / API-kosten](https://developers.google.com/google-ads/api/docs/oauth/cloud-project), 14-10-2026.
G4–G10: geen zichtbare updatedatum gerapporteerd.

Interne broncontrole Operations, 30-10-2026: `t_8e7ea13e` volledige briefing; `t_c5c6d4e3` opdracht en Denzel-commentaar; `01_Agent_Infrastructuur/Beheer/user.md` regels 14–37, 68–79; `Agents en het dashboard.md` regels 43, 57; `08_Operations_Agent/Stappenplan — Verdere Bouw.md` regels 73–75; `02_Dashboard/_backlog/ACTIEBACKLOG.md` regels 79–86, 247–252; `00_Brand_Core/Feiten & Actuele Staat.md` regels 71–72; `Leerregels per Agent.md` algemeen, Stafchef en Conversie & Analyse. Bestaand onbeoordeeld werk is ook zichtbaar in `Agent Werk & Kwaliteit Overzicht.md`; hier niet opnieuw opgedragen.

## Aantekeningen
**QA-status 30-10-2026 (verwerkt door Denzel, omdat de Stafchef-worker van t_a46a1470 twee keer crashte):**
- Website-QA `t_18486768`: **GOED**. Google/GA4/Shopify G1–G5, G9, G10 tegen officiële bronnen geverifieerd. Niet geverifieerd: G6, G7, G8, G11 en M1–M7. Feitelijke correctie verwerkt (permissible use: Basic én Standard). Zelfcheck-✅ in §9 is geen onafhankelijk verdict; de QA-toets op de Google-feiten is nu wel gedaan.
- Social/Meta-QA `t_f336a036`: **CORRIGEER (licht, niet blokkerend)**. Meta-feiten M1/M4/M6/M7 kloppen; M4-conflict bevestigd. Nog te herstellen door de domeinmaker (ronde 1 van max. 2): (1) rate-limit in §4 vaag, officiële bron noemt 60/9000 punten per tier; (2) Social-scope in optie B (§3) te ruim/onduidelijk; (3) M5-claim over deduplicatie staat niet op de genoemde end-to-end-pagina, bronverwijzing aanpassen; (4) notitie is ±22 KB, vaultregel ±15 KB, dus Google-deel afsplitsen. Niet door QA gecontroleerd: live accounts/API-runtime, volledig M6-beleid, eerdere herinneringen.
- Status blijft **concept / nieuw**; herkeuring na herstel nog niet gedaan.

Deze notitie is geen toestemming voor Ads, agentbouw, API-inrichting of dashboardpublicatie.
