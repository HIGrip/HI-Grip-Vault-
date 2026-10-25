---
type: kennis
gebied: denzel
bijgewerkt: 2026-10-02
status: concept — ter beoordeling door Lars
---

# Ritmes — wat Denzel wanneer doet, en wat de Operations Agent daarbij doet

> De vaste momenten. De routines op info@ (zie `02_Dashboard/Routines/README.md`) leveren de input; dit bestand zegt wat Denzel en de Operations Agent daarmee doen. De technische opzet van het weekoverzicht: [[Denzel Weekoverzicht — Routine]] en het promptbestand [[Denzel-weekoverzicht]].

## Overzicht

| Wanneer | Wie | Wat | Waar het landt |
|---|---|---|---|
| Elke sessie, bij het begin | Denzel | Lezen in vaste volgorde, realiteitscheck op "wacht op Lars" | Kwaliteitslog |
| Bij elke opdracht van gewicht | Denzel, Operations (Stafchef), hoofdagent met eigen QA | Lus uit het [[Opdrachtprotocol]] en [[Kwaliteitscontrole]] | Postvak, kwaliteitslog |
| Wekelijks, maandag 06:45 | Denzel (routine) | Weekoverzicht volgens de bestaande stappen van de routine | `02_Dashboard/JJJJ-MM-DD-weekoverzicht.md` |
| Wekelijks | Operations: Stafchef | Open lussen en wat langer dan een week wacht; blik over hoofdagents heen op tegenstrijdigheden en dubbel werk | Kwaliteitslog, melding aan Denzel |
| Wekelijks | Operations: Vooruitblik | Scan op evenementen, regels en veranderingen | Lijst van de komende 90 dagen |
| Wekelijks | Denzel | Steekproef van GOED-verdicten uit de kopieën *(voorstel)* | Kwaliteitslog |
| Maandelijks, eerste maandag | Denzel | Systeemreview volgens [[Verbeterlus]] | Notitie in `02_Dashboard/` |
| Maandelijks | Operations: Vooruitblik | Overzicht van de komende 90 dagen als onderzoeksnotitie | `02_Dashboard/` en de lijst in de eigen map |

## Elke sessie

1. Lees de bronnen in de volgorde van [[03 Denzel — Index]]: `CLAUDE.md`, [[Feiten & Actuele Staat]], [[Identiteit Denzel]], [[Soul Denzel]], de leerregels.
2. Kijk in het kwaliteitslog naar "wacht op Lars" en stel de realiteitscheck-vraag ([[Escalatie en besluiten]]).
3. Pak de opdracht met de lus uit het opdrachtprotocol.
4. Sluit af met een regel in het logboek, en een leerregel als er een correctie was.

## Wekelijks: maandagoverzicht

De cloudroutine draait elke maandag. Het weekoverzicht bevat, in deze volgorde: lezen van vorige week, voortgang per hoofdagent tegen het Stappenplan, de zoekactie B2B en events als de lijst te oud is (Denzel doet dit zelf, "Zelf doen"), de website-stand uit de andere routines (hij controleert de site niet zelf), de GA4-funnelcheck, AI-ontwikkelingen, de vooruitblik voor de komende week en de openstaande beslissingen voor Lars.

**Wie wat doet (sinds 21-10-2026 via de Operations Agent):**
- De **Stafchef** stelt de opbouw samen: wat er openstaat, wat te laat dreigt, wat het kwaliteitslog zegt.
- De **Vooruitblik-agent** levert het blok "komende 30 tot 90 dagen" en kan de AI-ontwikkelingen overnemen.
- **Denzel** doet de eindredactie en schrijft de besluiten voor Lars.
- De routine zelf blijft staan zoals hij is, tot Lars de nieuwe samenstelling goedkeurt. Een wijziging aan de werking gebeurt in het promptbestand, niet in de routine op claude.ai.

**Altijd bij het weekoverzicht:** de vier vragen uit [[Verbeterlus]]: welke fout kwam voor de tweede keer terug, welke agent kreeg de meeste correcties, wat kostte onnodig veel tijd, welk voorstel van Lars is onbeoordeeld.

## Wat Denzel van de routines leest

Denzel controleert zelf niets wat een routine al controleert. Hij leest de nieuwste:
- `*-regressiecheck.md` (technische controle van de site)
- `*-seo-conversietest-run-*.md`
- `*-search-console.md`
- Growth Radar en de andere notities in `02_Dashboard/`

Of acties gedaan zijn, controleert de dagelijkse actiecontrole via `02_Dashboard/_backlog/CONTROLE.json`. Denzel vinkt niets af.

## Maandelijks: systeemreview

Eerste maandag, na het weekoverzicht. Volgens [[Verbeterlus]]:
1. Leerregels opschonen: dubbele samenvoegen, achterhaalde schrappen, regels ouder dan 90 dagen opnieuw toetsen aan de vault
2. Scorekaart per agent bijwerken en de trend benoemen
3. Drift controleren: kloppen identiteiten, skills en routineprompts nog met de werkelijkheid (thema-ID's, tools, modellen, status)
4. Top drie verbeteringen voorstellen die Lars moet goedkeuren

Het resultaat gaat als notitie in `02_Dashboard/` volgens `PROCEDURE.md`, met acties als `- [ ] P? · tekst`. Nieuwe acties komen in de ene actiebacklog, niet in het postvak.

## Voor de sub-agents die vroeger onder Denzel hingen

| Agent | Ritme |
|---|---|
| Stafchef (Operations) | Per opdracht een briefing, wekelijks de lussen en de consistentieblik, maandelijks de scorekaart |
| Vooruitblik (Operations) | Wekelijks scannen, maandelijks het 90-dagenoverzicht. Nooit een item later dan 30 dagen vóór de datum voor het eerst melden |
| QA-agents (onder hun hoofdagent) | Alleen op afroep van hun hoofdagent, nooit op een eigen schema |

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[03 Denzel — Index]] · [[Home]]
