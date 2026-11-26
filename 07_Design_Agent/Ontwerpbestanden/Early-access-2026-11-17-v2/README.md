# Early-access v2 (17-11-2026), beeldgedreven, concept

Zes mails: a1-a3 (aanmelden), c1-c3 (kortingscode). Bewerkbaar: `a1.html` … `c3.html` + `assets/ea.css`. Copy ongewijzigd uit `06_Website_Agent/E-mail Marketing/2026-11-17-early-access-zes-concepten.md`.

## Beeld (eigen productbeeld, geen personen, geen derdenmerken)
Bron (alleen lezen): `<HiGripMedia>/Content - HÏ Grip/Productfoto's/PERFORMANCE GRIP SOCKS 2.0/`
- pack-w5 / pack-w3 / pack-b3 / pack-b5: vrijstaande 5- en 3-pack (png met alpha) uit "… 5-pack/3-pack productfoto ZA.png"
- sock-b1 + macro-sole/-mid/-cuff: uit "Performance Gripsokken 2.0 Zwart voorkant.jpg" (achtergrond naar wit, multiply)
Afgeleiden maken: `python tools/make_assets.py <map>` (HIGRIP_MEDIA_ROOT instelbaar). Renderen: `python tools/render.py <uitvoermap>` en `python tools/gallery.py <uitvoermap>`.

| Mail | Compositie |
|---|---|
| A1 | lichte hero, 3-regelige hook, witte 5-pack overlapt "grip." |
| A2 | donker, 4-regelige hook, 3-pack schuin, wit schuin paneel |
| A3 | donker, schuine hook, zwart 3-pack, 3 macro's als strip |
| C1 | zwart-wit macro-foto + hook, wit paneel, code dominant |
| C2 | licht, schuine sok, hook + zwarte balk hoogte, code-kader |
| C3 | wit, 5-pack, zwart codeblok, code dominant |

Open: A2-invulveld voor aanmeldstappen blijft zichtbaar. Alle [INVUL]/[BEVESTIG]-velden zijn gestippeld omrand.

> Map: [[07 Design Agent — Index]]
