---
type: kennis
gebied: social-agent
bijgewerkt: 2026-10-30
datum: 2026-10-30
bron: "Kanban t_3973ff61; overdracht t_484dece9"
---

# Video-agent Nulmeting

## Doel en testscope
Technische nulmeting voor videoproductie op de laptop, op basis van de geverifieerde bevindingen uit de bronkaart. Operations heeft deze overgenomen, niet opnieuw gemeten. De rendertest gebruikt uitsluitend zelfgemaakte `lavfi testsrc2`: 30 seconden, 1080×1920, 30 fps. Dit is geen test met echte opnamen of een volledige HÏ Grip-montage.

## Aanwezig in FFmpeg
**FFmpeg 9.0.1 full build, gyan.dev.** Configure meldt `enable-libx264`, `enable-libx265`, `enable-amf`, `enable-libass`, `enable-freetype` en `enable-whisper`.

- `ffmpeg -filters` bevestigde: `drawtext`, `ass`, `subtitles`, `whisper`, `scdet`, `loudnorm`, `lut3d`, `xfade`, `crop`, `scale`, `zoompan`, `sidechaincompress`.
- `ffmpeg -encoders` bevestigde: `libx264`, `libx265`, `h264_amf`, `hevc_amf`.

Aanwezigheid in deze lijsten is geen praktische validatie van elke functie.

## Gemeten uitvoer
| Test | Resultaat |
|---|---|
| `libx264`, preset `medium` | `real 6.562s`; 25,088,223 bytes; uitvoerduur 30 s |
| `h264_amf` | `real 5.021s`; encode voltooid zonder error |
| Contactsheet en sampleframes | Eén contactsheet en drie sampled JPG-frames succesvol gemaakt uit `testsrc2` met `select`/`scale`/`tile`; aanwezigheid bevestigd via bestandslisting |

De AMF-tijd is indicatief: hardware-initialisatie, daadwerkelijke hardwareversnelling en eventuele fallback op de echte laptop zijn niet vastgesteld. De tijden vormen geen gelijkwaardige codec- of kwaliteitsvergelijking; overige instellingen en herhaalmetingen zijn niet aangeleverd. Een bestandslisting bewijst geen visuele kwaliteitscontrole.

## Beperkingen en niet gemeten
- **Poppins:** in het gecontroleerde Windows Fonts-pad geen bestandsnaam-match gevonden. Dit bewijst niet dat het font nergens anders aanwezig is.
- **Whisper:** `command -v` voor `faster-whisper`, `whisper`, `whisper-cli` en `main` leverde geen executables op. Het FFmpeg-filter is aanwezig, maar model/runtime-pad en praktische transcriptie zijn niet gevalideerd. Geen uitspraak over tools buiten het doorzochte PATH.
- **Piek-RAM en CPU:** niet gemeten.
- **Tokengebruik:** niet meetbaar via de beschikbare sessie-indicator en niet gerapporteerd; geen schatting.
- Geen representatieve productiemontage, transcriptie- of merktypografietest. Hardwaregegevens, ruwe logs en uitvoerbestandspaden zijn niet meegeleverd in de overdracht.

## Bron en conclusie
Bron: Kanban-taak `t_3973ff61` (uitvoering door Content), met volledige bevindingen overgedragen in `t_484dece9` (vastlegging door Operations). De synthetische encode en beeldextractie zijn geslaagd; productiegeschiktheid, AMF-hardwaregebruik en transcriptie blijven onbevestigd. Geen installatie, publicatie of vrijgave voor productie onderdeel van deze nulmeting.

> Map: [[04 Social Agent — Index]]
