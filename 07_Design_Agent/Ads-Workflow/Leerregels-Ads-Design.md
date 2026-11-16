---
type: leerregels
bijgewerkt: 2026-11-16
---

# Leerregels Ads-Design

> Map: [[07 Design Agent — Index]]

Eén rij per regel. Nieuwe correctie van Lars: onderaan toevoegen met datum en reden. Lees dit vóór elke ads-ronde. Toepassing in [[WORKFLOW]].

| # | Regel | Datum | Reden |
|---|---|---|---|
| 1 | De stijl en de Poppins-lettertypen (Black Italic kop/blok, Medium bewijsregel, Volt #CCFF00) zijn goed; behouden, niet herontwerpen. Variatie zit in de indeling, niet in de stijl. | 16-11-2026 | Lars over ads v5: stijl en fonts kloppen; het ging mis op het sportlabel, de donkere sfeer en de eentonigheid. |
| 2 | Geen sportlabel (VOETBAL/RUGBY) op elke ad, ook geen uitzondering op 1 ad per sport. | 16-11-2026 | Lars: niet op elke ad. Foto, alt-tekst en kanaal tonen de sport al; het label kostte een element. |
| 3 | Licht en donker mengen: wit paneel, strip of kader tegen donkere foto en zwart; streef ~30% licht / 70% donker (meetdrempel licht 12–40%, donker >= 40%). | 16-11-2026 | Lars: hoog contrast met behoud van de donkere sfeer. Alles donker gaf grijze, tekstzware ads. |
| 4 | Indeling per ad laten variëren (layout-klassen P, K, S, F), stijl gelijk houden; per sport/formaat max 2 gelijke klassen. | 16-11-2026 | Lars: alle ads zien er hetzelfde uit. Stijl blijft één campagne, indeling wisselt. |
| 5 | Agents bouwen ads alleen met HTML/CSS + headless Chrome. Canva is niet voor AI-agents: alleen lezen (design-ID's), nooit wijzigen of kopiëren. | 16-11-2026 | Besluit Lars na pilot: Canva-route gaf dubbele tekstlagen, verwisselde lagen, ~8 rondes zonder schoon resultaat. HTML is herhaalbaar en meetbaar. |
| 6 | Een echte review letterlijk gebruiken (bron en datum erbij), nooit een placeholder zoals "[ECHTE REVIEW HIER]" en nooit een verzonnen quote. | 16-11-2026 | Lars' Canva-ad gebruikt een echte Trustpilot-review (Lydia, 13-01-2026); de agent-ad had een placeholder. Harde grens: geen nep-reviews. |
| 7 | Echt product of echte sporter in kleur als held; geen afgesneden silhouet, geen kale grijze sok. 1 held, >= 55% van het vlak waar de foto het toelaat. | 16-11-2026 | Verschilanalyse: product ontbrak in situatie-, 3.500+- en vergelijkingsads; Lars' held vult het beeld. |
| 8 | Geen verzonnen claims, cijfers of keurmerken; alleen uit Feiten & Actuele Staat. 95%-claim alleen met de verplichte formulering ("Wetenschappelijk aangetoond: gripsokken…", Apps et al. 2022) + vlag juridisch toetsen. | 16-11-2026 | Harde grens HÏ Grip; het onderzoek gaat over gripsokken in het algemeen, niet over een test van de HÏ Grip-sok. |
| 9 | Eén groot Volt-blok (>= 85% breed, >= 11% vlak) en weinig tekst (max 6 elementen). | 16-11-2026 | Lars' Canva-ads winnen op één held, één groot blok, minimale tekst; je snapt de ad in 1 seconde. |
| 10 | Afgekeurd in ads-html fase 1–4: foto in grayscale of te donker; tabel met 3 rijen; kleine bronregel; "GA DOOR WAAR ANDEREN STOPPEN." onderin elke ad; kop in 3 regels met 3 stijlen (wit/Volt/grijs); //-merkteken; korrel/halftone; rood accent voor rugby; elke ad een eigen look. Niet herhalen. | 16-11-2026 | Verschilanalyse Canva vs. HTML (Denzel, 16-11): dit maakte de agent-ads donker, grijs en tekstgedreven. |
| 11 | Elke ad een eigen unieke foto waar het kan; rugby heeft nu 1 foto, daarom 4 crops. Na de rugbyshoot (17-11) nieuwe foto's gebruiken. | 16-11-2026 | QA v6: rugby-pool is 1 foto; mogelijk derde-merk-bal. Open vlag voor Team HÏ Grip. |
| 12 | Vision-modellen nooit als enig bewijs: altijd PIL-meting (check.py) of rects (probe.py) plus eigen blik. | 16-11-2026 | Vision verzon ad-namen en noemde twee verschillende ads identiek (v5 en v6). |
| 13 | Drempels alleen verruimen met reden en vastlegging in WORKFLOW §3. | 16-11-2026 | In v6 zijn R10 en R14 na de eerste meting verruimd (tekstzware klassen, 9:16 safe zones); dat moet zichtbaar blijven. |
| 14 | Bronregel/kleine tekst moet op 400 px breed leesbaar blijven (QA: ~11 px is te klein). | 16-11-2026 | QA v6 (CORRIGEER licht): zwaarste punt. Oplossing nog open, zie VERBETERPLAN. |
