"""Bewegende opener voor de flitsinterview-mail (v2.0): titel, dan de sporten om de beurt."""
import pathlib
from PIL import Image, ImageDraw, ImageFont, ImageEnhance

HERE = pathlib.Path(__file__).parent
ADS = HERE.parent / "05_Social_Agent" / "Visuele Productie" / "Ads AB-test features vs beste"
FONTS = ADS / "fonts"
W, H = 600, 400
BLACK, WHITE, VOLT = (10, 10, 10), (255, 255, 255), (204, 255, 0)

black_italic = lambda s: ImageFont.truetype(str(FONTS / "Poppins-BlackItalic.ttf"), s)
semibold = lambda s: ImageFont.truetype(str(FONTS / "Poppins-SemiBold.ttf"), s)

# bijsnede rond de sok, (links, boven, rechts, onder) in het origineel
CROPS = {
    "padel": (0, 380, 1080, 1100),
    "voetbal": (0, 330, 1080, 1050),
    "tennis": (0, 1100, 1080, 1820),
}


def photo(name):
    im = Image.open(ADS / "img" / f"{name}.jpg").convert("RGB").crop(CROPS[name]).resize((W, H), Image.LANCZOS)
    return ImageEnhance.Brightness(im).enhance(0.55)


def word_frame(bg, word):
    im = bg.copy() if isinstance(bg, Image.Image) else Image.new("RGB", (W, H), BLACK)
    d = ImageDraw.Draw(im)
    f = black_italic(92)
    d.text((32, H - 40), word, font=f, fill=WHITE, anchor="ls")
    return im


def title_frame():
    im = Image.new("RGB", (W, H), BLACK)
    d = ImageDraw.Draw(im)
    d.text((32, 168), "FLITS-", font=black_italic(84), fill=WHITE, anchor="ls")
    d.text((32, 252), "INTERVIEW", font=black_italic(84), fill=WHITE, anchor="ls")
    d.text((36, 318), "Vier vragen. Eén minuut.", font=semibold(26), fill=VOLT, anchor="ls")
    return im


def light_frame(word, bg, with_sock):
    im = Image.new("RGB", (W, H), bg)
    if with_sock:
        sock = Image.open(ADS / "img" / "sok-zwart-cut.png").convert("RGBA")
        sock.thumbnail((360, 360), Image.LANCZOS)
        im.paste(sock, (W - sock.width - 10, (H - sock.height) // 2), sock)
    ImageDraw.Draw(im).text((32, H - 40), word, font=black_italic(92), fill=BLACK, anchor="ls")
    return im


frames, durations = [title_frame()], [1800]
for name, word in [("padel", "PADEL?"), ("voetbal", "VOETBAL?"), ("tennis", "TENNIS?")]:
    frames.append(word_frame(photo(name), word))
    durations.append(650)
frames += [light_frame("RUGBY?", WHITE, True), light_frame("PILATES?", (234, 232, 229), False)]
durations += [650, 650]

pal = [f.quantize(colors=128, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.FLOYDSTEINBERG) for f in frames]
out = HERE / "mail-assets" / "flitsinterview.gif"
pal[0].save(out, save_all=True, append_images=pal[1:], duration=durations, loop=0, optimize=True, disposal=1)
frames[0].save(HERE / "_img" / "gif-frame0.png")
print(out, out.stat().st_size)
