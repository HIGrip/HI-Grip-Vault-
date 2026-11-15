"""Maakt ../png/overzicht.jpg: alle 16 ads met bestandsnaam (python -I contactsheet.py)."""
import pathlib

from PIL import Image, ImageDraw, ImageFont

HERE = pathlib.Path(__file__).resolve().parent
PNG = HERE.parent / "png"
FONT = ImageFont.truetype(str(HERE.parent / "fonts" / "Poppins-SemiBold.ttf"), 15)
TITEL = ImageFont.truetype(str(HERE.parent / "fonts" / "Poppins-ExtraBold.ttf"), 22)
HOEKEN = ["probleem", "klantwoord", "aanbod", "vergelijking"]
TW, GAP, M = 300, 24, 30
H45, H916 = round(TW * 1350 / 1080), round(TW * 1920 / 1080)
blokh = 44 + H45 + 26 + 12 + H916 + 26 + 20
W = M * 2 + 4 * TW + 3 * GAP
sheet = Image.new("RGB", (W, M + 2 * blokh), (245, 245, 245))
d = ImageDraw.Draw(sheet)
for bi, sport in enumerate(["voetbal", "rugby"]):
    y0 = M + bi * blokh
    d.text((M, y0), sport.upper(), font=TITEL, fill=(10, 10, 10))
    for ci, hoek in enumerate(HOEKEN):
        x = M + ci * (TW + GAP)
        y = y0 + 44
        for fmt, hh in (("4x5", H45), ("9x16", H916)):
            name = f"{sport}_{hoek}_{fmt}"
            im = Image.open(PNG / f"{name}.png").convert("RGB").resize((TW, hh), Image.LANCZOS)
            sheet.paste(im, (x, y))
            d.rectangle((x, y, x + TW - 1, y + hh - 1), outline=(190, 190, 190))
            d.text((x, y + hh + 4), name, font=FONT, fill=(60, 60, 60))
            y += hh + 26 + 12
sheet.save(PNG / "overzicht.jpg", quality=90)
print(sheet.size)
