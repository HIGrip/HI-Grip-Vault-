from PIL import Image, ImageDraw, ImageFont, ImageChops
import os

HERE = os.path.dirname(os.path.abspath(__file__))
F = lambda n, s: ImageFont.truetype(os.path.join(HERE, "fonts", f"Poppins-{n}.ttf"), s)

S = 2
W = H = 2000 * S
M = 110 * S

NEAR   = (17, 17, 17)      # --hi-near-black
RAISED = (28, 28, 28)
SHELL  = (34, 34, 34)
WHITE  = (255, 255, 255)
BLACK  = (0, 0, 0)
TITAN  = (144, 145, 148)   # titanium, tekstgrijs op zwart
DIM    = (165, 166, 169)
SOFT   = (222, 223, 225)
LINE   = (44, 44, 44)
VOLT   = (204, 255, 0)

img = Image.new("RGB", (W, H), NEAR)
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

def fits(x, s, font, right):
    assert x + tw(s, font) <= right, f"te breed: {s}"

def check(cx, cy, r=30 * S, bg=VOLT, fg=BLACK):
    d.ellipse((cx - r, cy - r, cx + r, cy + r), fill=bg)
    u = r / 30
    pts = [(cx - 12 * u, cy + 1 * u), (cx - 4 * u, cy + 9 * u), (cx + 13 * u, cy - 8 * u)]
    d.line(pts, fill=fg, width=round(6.5 * u), joint="curve")
    for p in (pts[0], pts[2]):
        d.ellipse((p[0] - 3.2 * u, p[1] - 3.2 * u, p[0] + 3.2 * u, p[1] + 3.2 * u), fill=fg)

def cross(cx, cy, a=13 * S, w=4 * S, fill=DIM):
    for p in [((cx - a, cy - a), (cx + a, cy + a)), ((cx - a, cy + a), (cx + a, cy - a))]:
        d.line(p, fill=fill, width=w)

# --- kop ----------------------------------------------------------------
h1 = F("BlackItalic", 116 * S)
x = M - 8 * S
text((x, M - 22 * S), "MEER DAN ALLEEN ", h1, WHITE)
text((x + tw("MEER DAN ALLEEN ", h1), M - 22 * S), "GRIP.", h1, VOLT)

# --- productpaneel (dubbele rand) ---------------------------------------
TOP, BOT = 300 * S, H - M
shell = (M, TOP, M + 720 * S, BOT)
d.rounded_rectangle(shell, 52 * S, fill=SHELL)
P = (shell[0] + 12 * S, shell[1] + 12 * S, shell[2] - 12 * S, shell[3] - 12 * S)
d.rounded_rectangle(P, 40 * S, fill=WHITE)

lut = [min(255, round(v * 255 / 236)) for v in range(256)] * 3
PAD = 30
src = Image.open(os.path.join(HERE, "..", "images", "3.jpg")).convert("RGB")
SX0, SY0 = 563 - PAD, 151 - PAD
sock = src.crop((SX0, SY0, 1476 + PAD, 1885 + PAD)).point(lut)
k = 1260 * S / (1781 + 2 * PAD)
sock = sock.resize((round(sock.width * k), round(sock.height * k)), Image.LANCZOS)
sx = (P[0] + P[2]) // 2 - sock.width // 2
sy = (P[1] + P[3]) // 2 - sock.height // 2 + 36 * S
base = img.crop((sx, sy, sx + sock.width, sy + sock.height))
img.paste(ImageChops.multiply(base, sock), (sx, sy))
d = ImageDraw.Draw(img)

pf = F("Bold", 26 * S)
text((P[0] + 44 * S, P[1] + 40 * S), "HÏ GRIP PERFORMANCE", pf, BLACK, tr=2 * S)
text((P[0] + 44 * S, P[1] + 76 * S), "GRIPSOKKEN 2.0", pf, BLACK, tr=2 * S)

def marker(cx, cy, n, r=26 * S, ring=6 * S, bg=BLACK, fg=WHITE, ringc=WHITE):
    if ring:
        d.ellipse((cx - r - ring, cy - r - ring, cx + r + ring, cy + r + ring), fill=ringc)
    d.ellipse((cx - r, cy - r, cx + r, cy + r), fill=bg)
    text((cx, cy + 1 * S), str(n), F("SemiBold", round(r * 1.0)), fg, "mm")

zones_wit = {1: (1060, 700), 2: (1400, 1330), 3: (1000, 1060),
             4: (700, 1790), 5: (1150, 1520), 6: (905, 370)}
# zelfde pose, andere uitsnede: zones omrekenen van de witte naar de zwarte foto
zones = {n: (563 + (x - 594) * 913 / 931, 151 + (y - 146) * 1734 / 1781)
         for n, (x, y) in zones_wit.items()}

# --- vergelijking -------------------------------------------------------
rows = [
    ("Compressie",         ("15–20 mmHg ondersteunt je", "doorbloeding bij inspanning."),
                           ("Geen compressie,", "geen ondersteuning")),
    ("Grip op drukpunten", ("Siliconen zones waar je voet", "duwt. Jij staat stil."),
                           ("Standaard noppen,", "geen drukpunten")),
    ("Coolmax®",           ("Voert vocht direct af. Droog", "tot de laatste minuut."),
                           ("Gewoon garen,", "vocht blijft hangen")),
    ("Naadloos",           ("Rondom gebreid, zonder", "stiksels. Geen blaren."),
                           ("Naden die", "kunnen schuren")),
    ("Special cushioning", ("Anatomische demping onder", "hiel en voorvoet."),
                           ("Dunne zool,", "weinig demping")),
    ("Premium materialen", ("Eigen materiaalmix voor", "comfort én prestaties."),
                           ("Basismateriaal,", "standaard kwaliteit")),
]

HX0 = shell[2] + 50 * S                # HÏ Grip-kolom (verhoogd vlak)
NX1 = W - M                            # kolom normale gripsok
NX0 = NX1 - 330 * S
HX1 = NX0 - 36 * S
HEAD = 104 * S
RH = (BOT - TOP - HEAD) // len(rows)

d.rounded_rectangle((HX0, TOP, HX1, BOT), 40 * S, fill=RAISED)

# kolomkoppen
ptxt = "HÏ GRIP PERFORMANCE GRIPSOKKEN 2.0"
size = 24
while tw(ptxt, F("Bold", size * S), 1.5 * S) + 52 * S > HX1 - HX0 - 72 * S:
    size -= 1
pill = F("Bold", size * S)
print("pill", size)
pw = tw(ptxt, pill, 1.5 * S) + 52 * S
px, py = HX0 + 36 * S, TOP + 30 * S
d.rounded_rectangle((px, py, px + pw, py + 52 * S), 26 * S, fill=VOLT)
text((px + 26 * S, py + 27 * S), ptxt, pill, BLACK, "lm", 1.5 * S)
text((NX0 + 4 * S, py + 27 * S), "NORMALE GRIPSOK", F("SemiBold", 22 * S), DIM, "lm", 2 * S)

ft = F("SemiBold", 40 * S)
fd = F("Regular", 26 * S)
nt = F("Medium", 24 * S)
BADGE = 40 * S
TX = HX0 + 36 * S
LX = TX + BADGE + 22 * S
CHX = HX1 - 36 * S - 30 * S            # midden vinkje
for i, (title, (a1, a2), (n1, n2)) in enumerate(rows):
    top = TOP + HEAD + i * RH
    cy = top + RH // 2
    d.line((HX0 + 36 * S, top, HX1 - 36 * S, top), fill=LINE, width=2 * S)
    d.line((NX0, top, NX1, top), fill=(32, 32, 32), width=2 * S)
    for s, f in ((title, ft), (a1, fd), (a2, fd)):
        fits(LX, s, f, CHX - 30 * S - 24 * S)
    ty = cy - 54 * S
    marker(TX + BADGE // 2, ty + 2 * S, i + 1, r=BADGE // 2, ring=0, bg=WHITE, fg=BLACK)
    text((LX, ty), title, ft, WHITE, "lm")
    text((LX, ty + 48 * S), a1, fd, SOFT, "lm")
    text((LX, ty + 84 * S), a2, fd, SOFT, "lm")
    check(CHX, cy)
    # normale gripsok: gedimd
    cross(NX0 + 14 * S, cy)
    for s in (n1, n2):
        fits(NX0 + 44 * S, s, nt, NX1)
    text((NX0 + 44 * S, cy - 18 * S), n1, nt, DIM, "lm")
    text((NX0 + 44 * S, cy + 18 * S), n2, nt, DIM, "lm")

for n, (x, y) in zones.items():
    marker(sx + (x - SX0) * k, sy + (y - SY0) * k, n, bg=WHITE, fg=BLACK, ring=5 * S, ringc=BLACK)

out = img.resize((2000, 2000), Image.LANCZOS)
out.save(os.path.join(HERE, "higrip-vs-normale-gripsok-v3-zwart.png"), optimize=True)
print("ok", RH / S)
