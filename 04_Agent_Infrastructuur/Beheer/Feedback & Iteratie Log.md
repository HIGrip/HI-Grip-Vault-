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

## Gerelateerde bestanden

- [[Stappenplan — Verdere Bouw]]
- [[Agent Hiërarchie & Structuurschema]]
- [[Agent Bestandsschema (Soul, Identiteit, User)]]
