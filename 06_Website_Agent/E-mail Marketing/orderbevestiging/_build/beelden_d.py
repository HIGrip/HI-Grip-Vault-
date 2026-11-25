# Vaste onderdelen van optie D als afbeelding (mailapps kleuren afbeeldingen nooit om).
# Alles op 2x, achtergrond #0A0A0A. Gebruik: python beelden_d.py  -> ../assets/higrip-orderbev-*.png
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

F = Path(__file__).resolve().parents[4] / "04_Social_Agent/Visuele Productie/Meta-batch-2026-11/fonts"
OUT = Path(__file__).resolve().parent.parent / "assets"
X = 2
BG, WHITE, VOLT, GREY, LINE, RING = (10, 10, 10), (255, 255, 255), (204, 255, 0), (144, 145, 148), (44, 44, 46), (85, 86, 90)


def font(w, size):
    return ImageFont.truetype(str(F / f"Poppins-{w}.ttf"), size * X)


def canvas(w, h, bg=BG):
    im = Image.new("RGB", (w * X, h * X), bg)
    return im, ImageDraw.Draw(im)


def save(im, name):
    im.save(OUT / f"higrip-orderbev-{name}.jpg", quality=92, subsampling=0)
    print(name, im.size[0] // X, "x", im.size[1] // X)


def tw(d, t, f):
    b = d.textbbox((0, 0), t, font=f)
    return b[2] - b[0]


def titel():
    im, d = canvas(520, 96)
    f = font("ExtraBold", 40)
    for i, regel in enumerate(["JE BESTELLING IS", "BEVESTIGD"]):
        w = tw(d, regel + ("." if i else ""), f)
        x = (520 * X - w) // 2
        d.text((x, i * 46 * X), regel, font=f, fill=WHITE)
        if i:
            d.text((x + tw(d, regel, f), i * 46 * X), ".", font=f, fill=VOLT)
    save(im, "titel")


def check(d, cx, cy, r):
    d.ellipse((cx - r, cy - r, cx + r, cy + r), fill=VOLT)
    k = r / 12
    d.line([(cx - 5 * k, cy), (cx - 1.5 * k, cy + 3.5 * k), (cx + 5.5 * k, cy - 4 * k)], fill=BG, width=int(2.6 * k), joint="curve")


def status(naam, labels):
    W, H = 335, 60
    im, d = canvas(W, H)
    xs = [52, 167, 283]
    cy, r = 12 * X, 12 * X
    for a, b in zip(xs, xs[1:]):
        d.line([((a + 12) * X + 6, cy), ((b - 12) * X - 6, cy)], fill=LINE, width=2 * X)
    check(d, xs[0] * X, cy, r)
    for x in xs[1:]:
        d.ellipse((x * X - r, cy - r, x * X + r, cy + r), outline=RING, width=2 * X)
    for i, (x, t) in enumerate(zip(xs, labels)):
        f = font("SemiBold" if i == 0 else "Regular", 13)
        d.text((x * X - tw(d, t, f) // 2, 34 * X), t, font=f, fill=VOLT if i == 0 else GREY)
    save(im, "status-" + naam)


def pill(naam, tekst, w, h, size):
    im, d = canvas(w, h)
    d.rounded_rectangle((X, X, w * X - X, h * X - X), radius=h * X // 2, outline=WHITE, width=2 * X)
    f, fc = font("SemiBold", size), font("SemiBold", size + 4)
    t2 = "›"
    tot = tw(d, tekst, f) + 8 * X + tw(d, t2, fc)
    x = (w * X - tot) // 2
    y = (h * X - size * X * 1.45) // 2
    d.text((x, y), tekst, font=f, fill=WHITE)
    d.text((x + tw(d, tekst, f) + 8 * X, y - 3 * X), t2, font=fc, fill=WHITE)
    save(im, naam)


def notitie():
    W = 335
    im, d = canvas(W, 178)
    f, fb, fs = font("Regular", 15), font("Bold", 15), font("Regular", 13)
    y = 0
    for t in ["Fijn dat je voor HÏ Grip kiest. Vraag", "over je maat of je bestelling? Mail ons"]:
        d.text((0, y), t, font=f, fill=GREY); y += 24 * X
    a, mail, b = "op ", "info@higrip.nl", ", dan helpen we je verder."
    d.text((0, y), a, font=f, fill=GREY); x = tw(d, a, f)
    d.text((x, y), mail, font=f, fill=WHITE)
    d.line([(x, y + 21 * X), (x + tw(d, mail, f), y + 21 * X)], fill=WHITE, width=X)
    d.text((x + tw(d, mail, f), y), b, font=f, fill=GREY)
    y += 42 * X
    d.text((0, y), "Vriendelijke groet,", font=f, fill=GREY); y += 26 * X
    d.text((0, y), "Lars Cretz", font=fb, fill=WHITE); y += 22 * X
    d.text((0, y), "Co-founder HÏ Grip", font=fs, fill=GREY)
    save(im, "notitie")


def usp(naam, groot, klein):
    W, H = 110, 84
    im, d = canvas(W, H)
    fg, fk = font("ExtraBold", 18), font("Regular", 12)
    d.text(((W * X - tw(d, groot, fg)) // 2, 18 * X), groot, font=fg, fill=VOLT)
    x = (W * X - tw(d, klein, fk)) // 2
    d.text((x, 48 * X), klein, font=fk, fill=GREY)
    d.line([(x, 64 * X), (x + tw(d, klein, fk), 64 * X)], fill=GREY, width=X)
    save(im, "usp-" + naam)


def link(naam, tekst):
    f = font("Regular", 12)
    tmp = ImageDraw.Draw(Image.new("RGB", (1, 1)))
    w = tw(tmp, tekst, f) // X + 2
    im, d = canvas(w, 20)
    d.text((0, 1 * X), tekst, font=f, fill=GREY)
    save(im, "link-" + naam)


def voet():
    W = 335
    regels = ["Ga door waar anderen stoppen.", "Je ontvangt deze e-mail omdat je een", "bestelling plaatste op higrip.nl.", "© HÏ Grip"]
    im, d = canvas(W, 19 * len(regels))
    f = font("Regular", 11)
    for i, t in enumerate(regels):
        d.text(((W * X - tw(d, t, f)) // 2, i * 19 * X), t, font=f, fill=GREY)
    save(im, "voet")


def logo():
    src = Image.open(Path(r"C:/Users/lars/AppData/Local/Temp/claude/9da07703859d2f9f/bc88aaf3-c061-4cd7-9e94-180d2043a6c9/scratchpad/l1.png")).convert("RGBA")
    im, d = canvas(44, 36)
    lg = src.resize((44 * X, 36 * X), Image.LANCZOS)
    im.paste(lg, (0, 0), lg)
    save(im, "logo")


def intro(naam, regels):
    W = 335
    im, d = canvas(W, 26 * len(regels))
    f = font("Regular", 15)
    for i, t in enumerate(regels):
        d.text(((W * X - tw(d, t, f)) // 2, i * 25 * X), t, font=f, fill=GREY)
    save(im, "intro-" + naam)


if __name__ == "__main__":
    logo()
    intro("verzending", ["Je bestelling is rond.", "Binnen 1 werkdag gaat hij de deur uit."])
    intro("afhalen", ["Je bestelling is rond.", "Je koos voor afhalen."])
    intro("lokaal", ["Je bestelling is rond.", "Je koos voor lokale levering."])
    titel()
    status("verzending", ["Bevestigd", "Verzonden", "Bezorgd"])
    status("afhalen", ["Bevestigd", "Klaar", "Opgehaald"])
    status("lokaal", ["Bevestigd", "Onderweg", "Bezorgd"])
    pill("knop-bestelling", "Bekijk je bestelling", 280, 52, 15)
    pill("knop-instagram", "Volg ons op Instagram", 236, 44, 14)
    notitie()
    usp("verzending", "1 werkdag", "verzonden")
    usp("retour", "30 dagen", "retour")
    usp("vragen", "Vragen?", "info@higrip.nl")
    for n, t in [("verzending", "Verzending"), ("retour", "Retourneren"), ("bestelling", "Mijn bestelling"),
                 ("mail", "info@higrip.nl"), ("instagram", "Instagram"), ("site", "higrip.nl")]:
        link(n, t)
    voet()
