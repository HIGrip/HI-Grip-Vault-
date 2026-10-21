from PIL import Image, ImageDraw, ImageFont, ImageChops, ImageFilter
import os, sys

HERE = os.path.dirname(os.path.abspath(__file__))
F = lambda n, s: ImageFont.truetype(os.path.join(HERE, "fonts", f"Poppins-{n}.ttf"), s)
DEBUG = "--debug" in sys.argv

S = 2
W = H = 2000 * S
M = 110 * S

BG     = (238, 236, 233)
SHELL  = (228, 226, 222)
WHITE  = (255, 255, 255)
BLACK  = (0, 0, 0)
GRAPH  = (92, 93, 95)
TITAN  = (144, 145, 148)
LINE   = (214, 211, 206)
VOLT   = (204, 255, 0)

img = Image.new("RGB", (W, H), BG)
d = ImageDraw.Draw(img)

def tw(s, font, tr=0):
    return sum(font.getlength(c) for c in s) + tr * (len(s) - 1) if tr else font.getlength(s)

def text(xy, s, font, fill, anchor="la", tr=0):
    if not tr:
        d.text(xy, s, font=font, fill=fill, anchor=anchor)
        return
    x, y = xy
    if anchor[0] == "r":
        x -= tw(s, font, tr)
    elif anchor[0] == "m":
        x -= tw(s, font, tr) / 2
    for c in s:
        d.text((x, y), c, font=font, fill=fill, anchor="l" + anchor[1])
        x += font.getlength(c) + tr

def soft_shadow(box, radius, blur=50 * S, alpha=16, dy=18 * S):
    global img, d
    sh = Image.new("L", (W, H), 0)
    ImageDraw.Draw(sh).rounded_rectangle((box[0], box[1] + dy, box[2], box[3] + dy), radius, fill=alpha)
    sh = sh.filter(ImageFilter.GaussianBlur(blur))
    img = Image.composite(Image.new("RGB", (W, H), (60, 55, 50)), img, sh)
    d = ImageDraw.Draw(img)

def bezel(box, r_out=52 * S, pad=12 * S):
    soft_shadow(box, r_out)
    d.rounded_rectangle(box, r_out, fill=SHELL)
    inner = (box[0] + pad, box[1] + pad, box[2] - pad, box[3] - pad)
    d.rounded_rectangle(inner, r_out - pad, fill=WHITE)
    return inner

# --- header -------------------------------------------------------------
h1 = F("BlackItalic", 118 * S)
text((M - 8 * S, M - 20 * S), "MEER DAN ALLEEN GRIP.", h1, BLACK)
lab = F("SemiBold", 26 * S)
text((W - M, M + 4 * S), "PERFORMANCE", lab, GRAPH, "ra", 2 * S)
text((W - M, M + 44 * S), "GRIPSOKKEN 2.0", lab, GRAPH, "ra", 2 * S)
assert M - 8 * S + tw("MEER DAN ALLEEN GRIP.", h1) < W - M - tw("GRIPSOKKEN 2.0", lab, 2 * S) - 40 * S, "kop te breed"

# --- productpaneel ------------------------------------------------------
TOP = 320 * S
BOT = H - M
P = bezel((M, TOP, M + 720 * S, BOT))

lut = [min(255, round(v * 255 / 251)) for v in range(256)] * 3
PAD = 30
src = Image.open(os.path.join(HERE, "..", "images", "2.webp")).convert("RGB")
SX0, SY0 = 594 - PAD, 146 - PAD
sock = src.crop((SX0, SY0, 1525 + PAD, 1927 + PAD)).point(lut)
k = 1250 * S / sock.height
sock = sock.resize((round(sock.width * k), round(sock.height * k)), Image.LANCZOS)
sx = (P[0] + P[2]) // 2 - sock.width // 2
sy = (P[1] + P[3]) // 2 - sock.height // 2 + 40 * S
base = img.crop((sx, sy, sx + sock.width, sy + sock.height))
img.paste(ImageChops.multiply(base, sock), (sx, sy))
d = ImageDraw.Draw(img)

def on_sock(x, y):  # bronpixel -> canvas
    return sx + (x - SX0) * k, sy + (y - SY0) * k

text((P[0] + 44 * S, P[1] + 40 * S), "HÏ GRIP 2.0", F("Bold", 28 * S), BLACK, tr=2 * S)

def marker(cx, cy, n, r=27 * S, ring=6 * S):
    d.ellipse((cx - r - ring, cy - r - ring, cx + r + ring, cy + r + ring), fill=WHITE)
    d.ellipse((cx - r, cy - r, cx + r, cy + r), fill=BLACK)
    text((cx, cy + 1 * S), str(n), F("SemiBold", 27 * S), WHITE, "mm")

# zones op de sok, in bronpixels van 2.webp
zones = {1: (1060, 700), 2: (1400, 1330), 3: (1000, 1060),
         4: (700, 1790), 5: (1150, 1520), 6: (905, 370)}

# --- vergelijkingstabel -------------------------------------------------
features = [
    ("Compressie",            "15–20 mmHg ondersteunt je doorbloeding", "tijdens inspanning."),
    ("Grip op drukpunten",    "Siliconen zones precies waar je voet", "duwt. Je voet blijft staan."),
    ("Coolmax®",              "Voert vocht direct af. Droge voeten", "tot de laatste minuut."),
    ("Naadloos",              "Rondom gebreid zonder stiksels.", "Geen wrijving, geen blaren."),
    ("Special cushioning",    "Anatomisch gevormde demping onder", "hiel en voorvoet."),
    ("Hoogwaardige materialen", "Een eigen materiaalmix: comfort", "en prestaties in één sok."),
]

TX = P[2] + 12 * S + 70 * S           # start tabel
GR = W - M
GL = GR - 170 * S                      # HÏ Grip-kolom
GX = (GL + GR) // 2
NX = GL - 105 * S                      # kolom normale gripsok
TEXT_R = NX - 80 * S
HEAD = 110 * S
TT = TOP
RH = (BOT - TT - HEAD) // len(features)

soft_shadow((GL, TT, GR, BOT), 40 * S, blur=40 * S, alpha=12)
d.rounded_rectangle((GL, TT, GR, BOT), 40 * S, fill=WHITE)

hs = F("SemiBold", 21 * S)
text((NX, TT + 38 * S), "NORMALE", hs, TITAN, "mm", 2 * S)
text((NX, TT + 68 * S), "GRIPSOK", hs, TITAN, "mm", 2 * S)
hb = F("Bold", 21 * S)
text((GX, TT + 38 * S), "HÏ GRIP", hb, BLACK, "mm", 2 * S)
text((GX, TT + 68 * S), "2.0", hb, BLACK, "mm", 2 * S)

ft = F("SemiBold", 42 * S)
fd = F("Regular", 27 * S)
BADGE = 44 * S
LX = TX + BADGE + 26 * S
for i, (title, l1, l2) in enumerate(features):
    top = TT + HEAD + i * RH
    cy = top + RH // 2
    d.line((TX, top, NX + 60 * S, top), fill=LINE, width=2 * S)
    d.line((GL + 30 * S, top, GR - 30 * S, top), fill=(236, 234, 230), width=2 * S)
    for s, f in ((title, ft), (l1, fd), (l2, fd)):
        assert LX + tw(s, f) <= TEXT_R + 40 * S, f"te breed: {s}"
    # badge, optisch op de kop uitgelijnd
    ty = cy - 58 * S
    marker(TX + BADGE // 2, ty + 2 * S, i + 1, r=BADGE // 2, ring=0)
    text((LX, ty), title, ft, BLACK, "lm")
    text((LX, ty + 50 * S), l1, fd, GRAPH, "lm")
    text((LX, ty + 88 * S), l2, fd, GRAPH, "lm")
    a = 15 * S
    for p in [((NX - a, cy - a), (NX + a, cy + a)), ((NX - a, cy + a), (NX + a, cy - a))]:
        d.line(p, fill=TITAN, width=5 * S)
    r = 32 * S
    d.ellipse((GX - r, cy - r, GX + r, cy + r), fill=BLACK)
    pts = [(GX - 13 * S, cy + 1 * S), (GX - 4 * S, cy + 10 * S), (GX + 14 * S, cy - 9 * S)]
    d.line(pts, fill=VOLT, width=7 * S, joint="curve")
    for p in (pts[0], pts[2]):
        d.ellipse((p[0] - 3.5 * S, p[1] - 3.5 * S, p[0] + 3.5 * S, p[1] + 3.5 * S), fill=VOLT)

for n, (x, y) in zones.items():
    marker(*on_sock(x, y), n)

out = img.resize((2000, 2000), Image.LANCZOS)
out.save(os.path.join(HERE, "higrip-vs-normale-gripsok.png"), optimize=True)
print("ok", RH / S)
