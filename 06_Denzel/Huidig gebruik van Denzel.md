---
type: kennis
gebied: denzel
bijgewerkt: 2026-10-02
status: stand van zaken per 2026-10-02 — controleer bij gebruik tegen de bron
---

# Huidig gebruik van Denzel

> Wat we weten over hoe Denzel nu daadwerkelijk wordt gebruikt, per 2 oktober 2026. Bedoeld als uitgangspunt voor de herinrichting van [[06 Denzel — Index]]. Bij elk punt staat de bron. Wat ik **niet** heb kunnen zien, staat onderaan. Dit is geen beleid: het beschrijft de praktijk. Wat Denzel hoort te doen: [[Identiteit Denzel]] en [[Soul Denzel]].

## 1. Hoe Denzel wordt aangeroepen

| Manier | Wat er gebeurt | Bron |
|---|---|---|
| **`/denzel <opdracht>`** in Claude Code | Een command (geen sub-agent, omdat een command andere agents kan starten). Het leest als eerste actie Denzels identiteit en soul uit de vault en routeert dan naar `/website-agent`, `/content-agent` of `/partnership-agent`. Raakt de opdracht meerdere hoofdagents, dan worden ze allemaal geactiveerd en bundelt Denzel de uitkomst tot één verslag | `HI-Grip-claude-setup/commands/denzel.md` (gesynct naar `~/.claude/commands`) |
| **`/denzel weekoverzicht`** | Spiegelt de maandagroutine on-demand | Dezelfde |
| **Cloudroutine "Denzel-weekoverzicht"** | Elke maandag 06:45 Nederlandse tijd op het account info@higrip.nl, model `claude-sonnet-5-5`. De routine bevat alleen een verwijzing naar het promptbestand in de vault | `04_Agent_Infrastructuur/Routines/README.md`, [[Denzel-weekoverzicht]] |
| **Hermes-skill `higrip-denzel`** | Het [[Opdrachtprotocol]] verwijst naar deze skill en naar een briefingsjabloon in `higrip-denzel/references/sub-agents.md` | Opdrachtprotocol. **Zelf niet gezien**, zie onderaan |
| **Plugin `agent-orchestration`** (sinds 17 sept) | Drie hulpmiddelen voor Denzels eigen werk: de agent `context-manager`, het command `/improve-agent` en `/multi-agent-optimize` | `commands/denzel.md`, [[Identiteit Denzel]] |

Wie hem gebruikt: Lars. Het opdrachtprotocol noemt Tigo en Timo ook als opdrachtgevers.

## 2. Wat Denzel nu feitelijk doet

**Wekelijks (routine).** Sinds 24 augustus zijn er zes weekoverzichten geschreven (24 aug, 31 aug, 7, 14, 21 en 28 sept), nu als notitie in `05_Research/`. Een run bevat de stappen uit [[Denzel-weekoverzicht]]. Daarnaast houdt de routine een eigen geheugen bij in `05_Research/_geheugen/denzel-week.md` om niet dezelfde bevinding steeds opnieuw te melden.

**Zelf uitgevoerd door Denzel, volgens "Zelf doen" (mandaat sinds 14 sept):**
- Zoekacties naar nieuwe B2B-kandidaten en event-kandidaten als de lijst langer dan een à twee weken stil staat (bijvoorbeeld 24 aug, 7 sept, 21 sept)
- Alle openstaande kandidaten beoordelen tegen de evaluatiecriteria (21 sept: 13 B2B en 17 events)
- Een vervolgzoekactie naar contactgegevens voor retailers met een hoge score (28 sept: TennisFirst Rotterdam nu outreach-klaar)
- Een wekelijks contentvoorstel (21 en 28 sept)
- Kant-en-klare fixes uitschrijven voor wat de routine zelf niet kan doorvoeren, omdat de cloudroutine geen Shopify-CLI of inlog heeft (titel en meta, JSON-LD)
- GA4-funnelcheck met benchmarks, AI-ontwikkelingen en een vooruitblik voor de komende week

**Via `/denzel` in een sessie (voorbeelden uit het kwaliteitsoverzicht):**
- 17 sept: herstelpakket voor de structured-data-regressie (Website Agent, SEO Agent en Design Agent). Denzel draaide beide diffs zelf na en vond de 22:00-afwijking in `faq-schema`
- 30 sept: rugbypartnerlijst van 75 kandidaten door drie Partnership-sub-agents parallel. Denzel controleerde een steekproef van vier, corrigeerde twee kleine fouten zelf en meldde een structureel toolgat (de Influencer & Creator Agent heeft geen zoektool)

**Het dashboard.** Denzel houdt [[Agent Werk & Kwaliteit Overzicht]] bij: één rij per (sub-)agent, met status en toelichting. Dat gebeurt in elke sessie waarin de kwaliteitscontrole-loop wordt doorlopen, niet alleen op maandag.

**Realiteitschecks.** Bij "⏳ Wacht op Lars" stelt Denzel een korte ja/nee-vraag. Voorbeelden: 17 sept (nog niemand benaderd, pilates gestopt) en 30 sept (GA4-tracking klopt, de contentvoorstellen van 21 en 28 sept zijn beoordeeld).

## 3. Afspraken die uit het gebruik zijn gekomen

| Wanneer | Afspraak |
|---|---|
| 21 aug | Denzel bepaalt zelf het tempo van "Zelf doen"-taken |
| 25 aug | Realiteitscheck bij "wacht op Lars" |
| 14 sept | Mandaat: hij voert "Zelf doen"-stappen echt uit in plaats van alleen te signaleren |
| 21 sept | Een kandidaat is pas outreach-klaar met een contactpersoon. Tigo beoordeelt contentideeën vóór ze naar Buffer gaan |
| 25 sept | Routine naar info@. Denzel leest de website-stand uit andere routines en controleert de site niet meer zelf. De actiecontrole is de enige die afvinkt |
| 1 okt | Stapelrem: staat een content-voorstel nog onbeoordeeld, dan geen nieuw voorstel maar herinneren |

## 4. Waar het wringt

Elk punt hieronder is onderbouwd met een bron, geen vermoeden.

| Wat | Onderbouwing |
|---|---|
| **Eén sessie doet alles:** routeren, toetsen, bijhouden, doorgeven, weekoverzicht en onderzoek | Zijn oude soul en identiteit noemen routeren, tempo bepalen, toetsen, dashboard bijhouden, consistentie en overlap bewaken en het weekoverzicht. Het weekoverzicht zelf heeft stappen 0 tot en met 11, inclusief een eigen zoekactie |
| **Toetsing is een steekproef.** Bij de rugbylijst van 75 kandidaten controleerde Denzel er vier | Kwaliteitsoverzicht, 30 sept |
| **Voorstellen blijven liggen en stapelen.** De contentvoorstellen van 21 en 28 sept waren lang onbeoordeeld | Kwaliteitsoverzicht, 28 en 30 sept; de stapelrem van 1 okt |
| **Dingen blijven weken open.** De titel/meta-fix stond zes weken open voor die op 30 sept live bleek | Kwaliteitsoverzicht, 31 aug tot 30 sept. De routine kon het niet zelf doorvoeren |
| **Het dashboard is onleesbaar geworden:** één tabel met tientallen lange rijen | [[Agent Werk & Kwaliteit Overzicht]] |
| **Structurele gaten worden pas laat gezien.** Een agent zonder zoektool kon geen handles of volgersaantallen vinden | Kwaliteitsoverzicht, 30 sept |
| **Er is geen vooruitblik op evenementen en regels.** De routine kijkt een week vooruit | [[Denzel-weekoverzicht]], stap 8 |
| **Het command is uit de pas met de vault.** Zie hieronder | `commands/denzel.md` naast de vault |

## 5. Drift tussen het command en de vault

Gevonden bij het nalopen van `commands/denzel.md`:

- Het command noemt de weekroutine nog "maandag 06:05 UTC" met trigger `trig_01D9XwMiVvuq1FWr7CLoYTmN`. Sinds 25 sept draait de routine op info@ op maandag 06:45 Nederlandse tijd. Die oude trigger gaf op 17 sept al een 404 via de API.
- Het noemt "de 7 checks" uit [[Denzel Weekoverzicht — Routine]]. De routine heeft inmiddels stappen 0 tot en met 11.
- Het leest `04_Agent_Infrastructuur/identiteit Denzel.md` en `soul Denzel.md`. Na de verhuizing naar `06_Denzel` moet dat naar de nieuwe paden.
- De agentbestanden in `~/.claude/agents/` zijn dunne verwijzingen (alleen frontmatter) en bestaan voor de 11 sub-agents van de hoofdagents. Voor Denzels vijf nieuwe sub-agents bestaat nog niets.

## 6. Beperkingen die bekend zijn

- Een lokale Claude Code-sessie kan niet pushen naar de vault-repo: de classifier blokkeert dat, ook na akkoord (vastgesteld 9 sept). De cloudroutine kan dat wel (14 sept). Wat Denzel lokaal schrijft, bereikt de routine dus pas na een push door Lars of de Obsidian-plugin.
- De cloudroutine heeft geen Shopify-CLI of inlog en kan niets in het thema aanpassen.
- Een wijziging aan de routineprompt gebeurt in het promptbestand in de vault. De routine op info@ verwijst daarheen.
- De routine mag nooit outreach versturen, publiceren, voorwaarden of prijzen bespreken, of live zetten.

## 7. Wat ik niet weet of niet heb gezien

- **De Hermes-skill `higrip-denzel`.** Op deze machine bestaat alleen `~/.hermes/config.yaml` (provider Anthropic). Ik heb de skill en het briefingsjabloon niet gelezen. Het is dus onbekend of die overeenkomt met het opdrachtprotocol.
- **Hoe vaak `/denzel` handmatig wordt gebruikt**, en door wie. Ik zie alleen wat in het kwaliteitsoverzicht staat.
- **Of de routine op info@ sinds 28 sept daadwerkelijk blijft draaien.** Het laatste weekoverzicht in de vault is dat van 28 sept.
- **Hoe Tigo en Timo Denzel gebruiken**, buiten wat het protocol zegt.
- **Het model en de kosten per run** voor interactief gebruik.

Aanvullen of corrigeren kan door Lars, Tigo of Timo: alleen zij weten hoe het in de praktijk loopt.

> **Brand Core (00):** [[00 Brand Core]] · [[Feiten & Actuele Staat|Feiten]] · [[Brand Identity Overview|Identiteit]] · [[Brand Voice & Tone of Voice|Tone of voice]] · [[Doelgroep & Persona's|Doelgroep]] · [[Strategische Keuzes|Strategie]] — **Map:** [[Home]]
