---
type: kennis
gebied: agent-infrastructuur
status: concept
bijgewerkt: 2026-11-05
---

# Mediabibliotheek (lokale kopie van de gedeelde Drive)

> Concept door Denzel, op verzoek van Lars (5-11-2026). Geldt voor: Social (`content`), Design, Ads en Website. Elke agent gebruikt het beeld op zijn eigen manier, voor het visuele ID van HÏ Grip.

## Waar

`C:\Users\lars\HiGripMedia\`

- Dit is een **lokale kopie** van de gedeelde Drive "HÏ GRIP WORKSPACE", niet de vault (te groot voor git).
- Gesynchroniseerd: `Content - HÏ Grip` (Sporten, Over Ons, Designen, Productfoto's, Campagnes & Events, Soundtracks & FX, Emailmarketing, Infographics, Ads, Social Proof) en `Inspiratie - HÏ Grip`.
- Bewust **niet** gesynchroniseerd: Geheim, Finance, Juridisch, RBS, R&D/Product, `Influencers` en `Leveranciers`.
- Google-documenten (bijv. de kleurenlijst) worden niet gedownload; die staan in de vault of in Canva.

## Hoe het bijblijft

- Een script (`higrip_drive_sync.py`, in de Hermes-map `scripts`) haalt elk uur **nieuw of gewijzigd** materiaal binnen. Het is alleen-lezen en eenrichtingsverkeer.
- Lars krijgt een Telegram-bericht zodra er nieuw materiaal binnenkomt.
- Verwijderd in de Drive betekent **niet** automatisch verwijderd lokaal.

## Spelregels voor agents

1. **Originelen blijven onaangeroerd.** Niet verplaatsen, hernoemen, overschrijven of verwijderen. Een volgende synchronisatie kan wijzigingen terugzetten of dubbelen.
2. **Bewerkt werk gaat naar `HiGripMedia\_Output\<agent>\`** (bijv. `_Output\social\`, `_Output\design\`). Nooit in de Drive-mappen zelf.
3. **Alleen lezen en lokaal bewerken.** Niets uploaden of delen. Afgerond werk uploadt Lars zelf (schrijftoegang tot de Drive is er niet).
4. **Foto's en video's met personen of derden:** niets overnemen in vault, memory of briefing. Alleen gebruiken voor het opgedragen werk.
5. **Inspiratie (Nike, adidas e.d.) is referentie, geen eigen content.** Niet kopiëren of hergebruiken in eigen uitingen.
6. **Beoordeling van stijl:** zie [[Inspiratie Beeld-stijlanalyse]] en [[Inspiratie Video-stijlanalyse]] in `07_Design_Agent/Inspiratie/`. Basis: donker, hoog contrast, warm alleen als licht of accent.
7. **Groot bestand of twijfel over wat mag:** vraag het Denzel of Lars. Niet zelf omzeilen.

## Per agent (gebruik op eigen manier)

| Agent | Gebruikt het voor |
|---|---|
| Social (`content`) | Video's monteren (ffmpeg-motor, EDL), clips kiezen, reels en stories |
| Design | Posts, thumbnails, e-mailontwerp, brandelementen |
| Ads | Advertentiebeeld en -video, varianten per sport |
| Website | Productfoto's, banners en sfeerbeeld voor higrip.nl |

## Open punten

- Rechten per agent zijn nog niet aangepast. Eerst akkoord van Lars op deze notitie, daarna een voorstel via de Stafchef (één regel in de skill `higrip-vault` van elk betrokken profiel).
- Eerste volledige synchronisatie (ca. 23 GB) loopt; tot die klaar is staat de uurlijkse taak gepauzeerd.

## Verwijzingen

[[Inspiratie Beeld-stijlanalyse]] · [[Inspiratie Video-stijlanalyse]] · [[Editing Stijl Gids Video]] · [[07 Design Agent — Index]]

> Map: [[01 Agent Infrastructuur — Index]]
