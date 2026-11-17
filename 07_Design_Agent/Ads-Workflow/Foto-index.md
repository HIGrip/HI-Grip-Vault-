---
type: index-foto
bijgewerkt: 2026-11-16
---

# Foto-index ads v6

Welke bronfoto bij welke ad hoort. De foto's staan op de gedeelde Drive (HiGripMedia) en zijn NIET in de vault gekopieerd. Pad = relatief aan `MEDIA_ROOT` (omgevingsvariabele `HIGRIP_MEDIA_ROOT`, lokale kopie van de Drive). Het resultaat reproduceer je met `python Tools/build.py <id>`; de bron staat ook in `Tools/ads.json`. Regels: [[WORKFLOW]].

| Ad | Klasse | Drive-submap | Bestandsnaam | Held-bbox (x0,y0,x1,y1) | Doel 4:5 | Doel 9:16 | Kop | Blok | Bewijs |
|---|---|---|---|---|---|---|---|---|---|
| vb-a-situatie | P | Content - HÏ Grip/Sporten/VOETBAL/ | IMG_1975.JPG | [0.28, 0.22, 0.95, 0.65] | [0.17, 0.5] | [0.14, 0.46] | JE VOET SCHUIFT / IN JE SCHOEN. | BIJ ELKE DRAAI. | nee |
| vb-b-sporters | K | Content - HÏ Grip/Sporten/VOETBAL/ | IMG_3702.JPG | [0.0, 0.3, 0.45, 0.55] | [0.17, 0.5] | [0.14, 0.46] | 3.500+ / SPORTERS | DRAGEN HÏ GRIP. | nee |
| vb-c-vergelijking | S | Content - HÏ Grip/Sporten/VOETBAL/ | IMG_1479.JPG | [0.0, 0.3, 0.55, 0.6] | [0.15, 0.5] | [0.14, 0.46] | ZONDER GRIP / GLIJDT. | 95% MEER GRIP* | ja |
| vb-d-top | F | Content - HÏ Grip/Sporten/VOETBAL/ | IMG_1483.JPG | [0.45, 0.05, 0.75, 0.45] | [0.17, 0.5] | [0.14, 0.46] | JE DRAAIT. / JE VOET NIET. | DAT IS HOUVAST. | nee |
| rb-a-situatie | S | Content - HÏ Grip/Sporten/RUGBY/ | HI_Grip_Instagram_Post_1080x1350.png | [0.35, 0.45, 0.92, 0.9] | [0.1, 0.58] | [0.14, 0.46] | JE VOET SCHUIFT / IN JE SCHOEN. | BIJ ELKE TACKLE. | nee |
| rb-b-sporters | P | Content - HÏ Grip/Sporten/RUGBY/ | HI_Grip_Instagram_Post_1080x1350.png | [0.2, 0.1, 0.7, 0.75] | [0.08, 0.58] | [0.12, 0.5] | 3.500+ / SPORTERS | DRAGEN HÏ GRIP. | nee |
| rb-c-vergelijking | F | Content - HÏ Grip/Sporten/RUGBY/ | HI_Grip_Instagram_Post_1080x1350.png | [0.55, 0.62, 0.92, 0.88] | [0.12, 0.52] | [0.14, 0.46] | ZONDER GRIP / GLIJDT. | 95% MEER GRIP* | ja |
| rb-d-top | K | Content - HÏ Grip/Sporten/RUGBY/ | HI_Grip_Instagram_Post_1080x1350.png | [0.33, 0.5, 0.55, 0.92] | [0.12, 0.52] | [0.14, 0.46] | KRACHT BEGINT / ONDERAAN. | BIJ HOUVAST. | nee |

*Bewijsregel (verplichte formulering uit Feiten & Actuele Staat, niet wijzigen): zie `PROOF` in `Tools/ads.json`.

## Opmerkingen
- Held-bbox = bounding box van de held in de bronfoto (fracties 0–1); doel = waar de held op het canvas staat (fractie van de hoogte): boven en onder.
- Rugby: alle vier de ads gebruiken dezelfde Instagram-post (mogelijk derde-merk-bal in beeld, bestaande overlay). Vlag voor Team HÏ Grip; nieuwe foto's na de rugbyshoot van 17-11.
- Voetbalfoto's: op enkele is een bal van een ander merk zichtbaar (QA-vlag).
- Nieuwe foto toevoegen: raster met `Tools/gridsheet.py`, bbox in `Tools/ads.json`, rij hier bijwerken.

> Map: [[07 Design Agent — Index]]
