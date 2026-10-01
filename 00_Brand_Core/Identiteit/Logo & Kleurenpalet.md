# Logo & Kleurenpalet — HÏ Grip

> Visuele identiteit van HÏ Grip: logo system, naam, kleuren en typografie. **Bron (leidend sinds 30-9-2026):** Canva-document *MERK & STRATEGIE — HÏ Grip*, hoofdstuk 03–05: https://canva.link/a48n60z2ay1g7bp. Voor merkverhaal en waarden: zie [[Brand Identity Overview]]. Voor raster, vormen en sjablonen: zie [[Design Elementen]].

---

## Het embleem

Een abstract zwart-wit symbool in de vorm van een driehoek, waarin een **H** en een **G** te zien zijn. De driehoek staat voor de drie elementen die samen de basis vormen voor optimale prestaties: **comfort, innovatie en vertrouwen**.

Twee uitvoeringen: **wit op zwart** en **zwart op wit**.

### Lockups & wordmarks

Het embleem en de wordmark vormen samen de lockups.

| Variant | Gebruik |
|---|---|
| **Horizontale lockup** | Embleem + wordmark naast elkaar. |
| **Wordmark + tagline** | Wordmark met de tagline eronder. |
| **Wordmark solo** | Alleen HÏ GRIP. |

### Vrije ruimte en minimumformaat

Houd rondom het logo **minimaal de hoogte van de piek** vrij. Minimaal 24 px digitaal; favicon 16 px, en daar alleen het embleem, nooit de lockup.

**Logo-bestanden:** alle varianten staan in het Canva-merkmateriaal.

---

## Zo schrijven we onze naam

- ✓ **HÏ GRIP** in kapitalen, of **HÏ Grip** in lopende tekst.
- ✓ In URL's en handles **zonder trema en spatie**: `higrip.nl` en `@higrip.nl`.
- ✕ Geen spatie weglaten tussen HÏ en GRIP.
- ✕ Nooit "Hi Grip", "HI GRIP" of "Higrip" zonder trema.
- ✕ Zoekvarianten als *higrip* en *hi grip* alleen als zoekwoord in ads, **nooit in zichtbare tekst**.

---

## Kleurenpalet — zwart, wit & performance

Primair werken we in **wit en zwart**. Twee tekstgrijzen brengen rust en hiërarchie. Vier accentkleuren staan voor performance en brengen energie.

### Primair

| Kleur | Hex | RGB | CSS-variabele |
|---|---|---|---|
| **Lichtwit** | `#FFFFFF` | 255 · 255 · 255 | `--hi-white` |
| **Donkerzwart** | `#000000` | 0 · 0 · 0 | `--hi-black` |

### Secundair — tekstgrijzen

| Kleur | Hex | RGB | Contrast |
|---|---|---|---|
| **Graphite** (donkergrijs) | `#5C5D5F` | 92 · 93 · 95 | 6,6:1 op wit · 3,2:1 op zwart → tekstgrijs op **wit** |
| **Titanium** (lichtgrijs) | `#909194` | 144 · 145 · 148 | 3,2:1 op wit · 6,7:1 op zwart → tekstgrijs op **zwart** |

### Performance-accenten

| # | Naam | Hex | RGB | CSS-variabele |
|---|---|---|---|---|
| 01 | **Volt** | `#CCFF00` | 204 · 255 · 0 | `--hi-yellow` |
| 02 | **Royal Blue** | `#0011A7` | 0 · 17 · 167 | `--hi-blue` |
| 03 | **Pumpkin** | `#FF6A00` | 255 · 106 · 0 | `--hi-orange` |
| 04 | **Tangerine** | `#E10600` | 225 · 6 · 0 | `--hi-red` |

**Regels**
- Accenten brengen energie; wit en zwart dragen de uiting. Kleur komt binnen als accent, nooit als vlakvulling over de hele uiting (zie [[Design Elementen]]).
- Is kleur nodig in een raster- of lichtelement, dan **één** accentkleur voor het hele element.
- Voor tekst: wit op zwart, of zwart op wit; grijze tekst in Graphite (op wit) of Titanium (op zwart).
- In code en Liquid heten de kleuren `--hi-*` (zie de kolom hierboven). Zelfde hexwaarden, andere naam: gebruik in CSS **altijd de variabele**, nooit een losse hex.

---

## Typografie — één font: Poppins

Poppins draagt alle tekstuele communicatie. **Krachtig en compact voor koppen, clean en luchtig voor body.** Vaste regels voor hoofdletters en letterspacing houden het merk consistent.

### De twee basisregels

| Regel | Toepassing | Tracking |
|---|---|---|
| **Poppins Black · letterspacing −40** | Koppen en display, in hoofdletters. Compact en krachtig. | −0,04 em |
| **Poppins Regular · letterspacing −20** | Body en lopende tekst. Strak en leesbaar, ook klein. | −0,02 em |

### Hoofdletters

- **Altijd in hoofdletters:** H1, H2, H3 en caption/label. Zonder uitzondering, ook in presentaties, captions en op de webshop.
- **Body: vrij.** Body zetten we in normale zinsopbouw met kleine letters. Hoofdletters mogen als het beter werkt, bijvoorbeeld bij een kort statement.

### Type-scale & hiërarchie — zes niveaus, één font

| Niveau | Gewicht | Tracking | Vorm | Voorbeeld |
|---|---|---|---|---|
| **H1 · Display** | Black Italic 900 | −40 (−0,04 em) | HOOFDLETTERS | *MADE FOR WINNING* |
| **H2 · Kop** | ExtraBold 800 | −40 (−0,04 em) | HOOFDLETTERS | RESULTAAT TELT. |
| **H3 · Subkop** | Bold 700 | −30 (−0,03 em) | HOOFDLETTERS | WIJ LEGGEN DE BASIS, JIJ PRESTEERT |
| **Ondertiteling** | Black 900 | −60 (−0,06 em) | HOOFDLETTERS | GA DOOR WAAR ANDEREN STOPPEN. |
| **Caption / label** | SemiBold 600 | +240 (+0,24 em) | HOOFDLETTERS | PERFORMANCE SPORTSWEAR |
| **Body** | Regular 400 | −20 (−0,02 em) | Normale zinsopbouw | Comfort is de reden dat sporters kunnen blijven presteren… |

### Beschikbare gewichten

Light 300 · Regular 400 · Medium 500 · SemiBold 600 · Bold 700 · ExtraBold 800 · Black 900 · Black Italic

### Fallback — alleen in stories

Kan Poppins echt niet, bijvoorbeeld bij een snelle Instagram-story? Gebruik dan een van deze drie Instagram-lettertypes: **Strong**, **Literature** of **Directional**. Nergens anders een ander font.

---

## Gerelateerde bestanden

- [[Design Elementen]] — Bouwpakket, raster, vormen, licht, interface, sjablonen
- [[Iconografie]] — De iconenset (86 iconen)
- [[Fotografie & Art-Direction]] — Beeldregels
- [[Brand Identity Overview]] — Merkverhaal, missie, visie, waarden
- [[Brand Voice & Tone of Voice]] — Verbale stijl, slogans, productnamen
- [[Brand Symbolen]] — Geluid en geur

> **Brand Core (00):** [[00 Brand Core]] · [[Home]]
