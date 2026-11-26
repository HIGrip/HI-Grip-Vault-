# Copy en QA: HÏ Performance Days (Verdubbel je order)

Gemaakt 23-11-2026 volgens `PROMPT.md`. Aanbod: elke order x2, vrijdag 27-11 t/m maandag 30-11-2026 (besluit Team HÏ Grip 23-11). Bouw: `html/build.py`, render op 2x met headless Chrome (Playwright voor Python is niet geïnstalleerd; zelfde resultaat).

## Ad 1 · Verdubbeling (stoppen)

- **Primaire tekst:** Wat je bestelt, krijg je twee keer. HÏ Performance Days: vrijdag 27 t/m maandag 30 november.
- **Kop:** Verdubbel je order
- **Beeld:** twee identieke paren 2.0 wit (eigen packshot), "Jij bestelt" en "Gratis erbij" (volt).

## Ad 2 · Pakbon (klikken)

- **Primaire tekst:** Bestel 3 paar en er komen er 6 in je doos. Je totaal blijft gelijk. Alleen t/m maandag 30-11.
- **Kop:** Bestel 3. Krijg 6.
- **Beeld:** pakbon 3-pack 2.0 wit €44,95, regel "+3 paar · GRATIS" (volt op zwarte balk), verzending gratis, totaal €44,95.

## Ad 3 · Rekensom (kopen)

- **Primaire tekst:** Pak het 3-pack 2.0 en krijg 6 paar voor €44,95. Dat is €7,49 per paar. Alleen t/m maandag 30-11.
- **Kop:** €7,49 per paar, t/m maandag
- **Beeld:** twee 3-packs 2.0 zwart (3 + 3), €7,49 per paar (volt), normaal €14,98 doorgestreept, knop "Shop nu".

## Nagerekend (feitenbestand, 2.0)

- 3-pack €44,95 (gratis verzending bij packs). 44,95 / 3 = 14,983 → **€14,98** per paar (staat zo in het feitenbestand).
- Met verdubbeling 6 paar: 44,95 / 6 = 7,4917 → **€7,49** per paar. Tweede keer: 7,49 × 6 = 44,94 (afronding, klopt).

## Beoordelingskaart (feed, 0/1/2)

| # | Vraag | 1 | 2 | 3 |
|---|---|---|---|---|
| 1 | Eén focuspunt | 2 | 2 | 2 |
| 2 | Native format | 0 | 2 | 1 |
| 3 | Herkenning | 1 | 2 | 1 |
| 4 | Eén idee | 2 | 2 | 2 |
| 5 | Beeld en kop zeggen hetzelfde | 2 | 2 | 2 |
| 6 | Echt beeld | 1 | 1 | 1 |
| 7 | Accent op betekenis | 2 | 2 | 2 |
| 8 | Merk in de pointe | 2 | 2 | 2 |
| 9 | Past bij de laag | 2 | 2 | 2 |
| 10 | Leesbaar op telefoon | 2 | 2 | 2 |
| | **Totaal** | **16** | **19** | **17** |

Ad 3 scoorde in de eerste versie 15 (één pack, beeld deed de som niet); herbouwd met twee packs en het merk in de rekenregel. Punt 6 is overal 1: echte packshots met licht en schaduw, maar geen shootfoto. Clubshoots bewust niet gebruikt (sportneutraal, en rechten voor betaald gebruik per club en persoon niet vastgelegd).

## Poortcheck

- Poppins (lokaal), alleen merkkleuren, volt alleen op donker: ja
- CTA pill met chevron, wit op zwart, niet gevuld met volt: ja (alleen ad 3)
- Getallen uit feitenbestand of "Vaststaand": ja (€44,95, €14,98, €7,49, data 27 t/m 30-11); geen gripclaims of percentages
- HÏ Grip met trema: ja
- Geen nagemaakte functies (geen app-schermen, geen countdown): ja; de pakbon is een papieren object zonder knoppen
- Rechten beelden: eigen packshots HÏ Grip
- Reel-veilige zone (y 250 tot 1340, x 72 tot 1008 op 1080×1920): ja, laagste element ad 3-knop op 1308
- Pixelmaat met PIL: 2160×2700 en 2160×3840, alle 6
- Spelling gecontroleerd op alle zichtbare tekst

## Open

- Aanbod staat nog niet in `Feiten & Actuele Staat.md`.
- Kleine orders: een los paar (€17,95, x2) blijft onder €35 en betaalt €4,50 verzending; ad 2 en 3 tonen alleen het 3-pack, maar check of de shop "gratis" bij het x2-aanbod niet suggereert.
- Pakbon-datum 27-11-2026 en maat 43-47 zijn illustratief.

> Map: [[04 Social Agent — Index]]
