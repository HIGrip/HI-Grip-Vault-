"""Zwarte variant van de Bol-vergelijking 'VOEL HET VERSCHIL'.

Neemt de witte versie als basis en vervangt alleen de sok in het HÏ Grip-paneel.
Gebruik: py make_vs_sok_zwart.py <witte-versie.webp> <zwarte-sok.jpg>
"""
from PIL import Image, ImageDraw
import os, sys

HERE = os.path.dirname(os.path.abspath(__file__))
base_path, sock_path = sys.argv[1], sys.argv[2]

img = Image.open(base_path).convert("RGB")
assert img.size == (2000, 2000)

# witte sok wegvegen; label "HÏ GRIP 2.0" (x < 1060) en de VS-knop blijven staan
ImageDraw.Draw(img).rectangle((1080, 370, 1840, 1150), fill=(255, 255, 255))

src = Image.open(sock_path).convert("RGB")
# grijzige studio-achtergrond (~244) naar puur wit, zodat hij wegvalt in het paneel
lut = [min(255, round(v * 255 / 240)) for v in range(256)] * 3
PAD = 24
sock = src.crop((561 - PAD, 149 - PAD, 1478 + PAD, 1896 + PAD)).point(lut)

# zelfde hoogte en middelpunt als de witte sok (393–1134, midden x 1366)
k = 745 / (1896 - 149)
sock = sock.resize((round(sock.width * k), round(sock.height * k)), Image.LANCZOS)
sx = 1366 - sock.width // 2
sy = 393 - round(PAD * k)
img.paste(sock, (sx, sy))

out = os.path.join(HERE, "higrip-vs-normale-sok-zwart.png")
img.save(out, optimize=True)
print("ok", out)
