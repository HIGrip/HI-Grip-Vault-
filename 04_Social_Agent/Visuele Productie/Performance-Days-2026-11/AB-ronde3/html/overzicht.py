"""Maakt overzicht.jpg (6 feeds boven, 6 reels eronder) en per ad een controlebeeld feed+reel (scratch)."""
import glob
import pathlib
import sys

from PIL import Image

P = pathlib.Path(__file__).resolve().parent.parent
feeds = sorted(f for f in glob.glob(str(P / "png" / "r3_*_feed.png")))
reels = sorted(f for f in glob.glob(str(P / "png" / "r3_*_reel.png")))


def overzicht():
    fw, fh, rw, rh = 360, 450, 253, 450
    sheet = Image.new("RGB", (6 * (fw + 16) + 16, fh + rh + 48), (40, 40, 40))
    for i, f in enumerate(feeds):
        sheet.paste(Image.open(f).convert("RGB").resize((fw, fh), Image.LANCZOS), (16 + i * (fw + 16), 16))
    for i, f in enumerate(reels):
        sheet.paste(Image.open(f).convert("RGB").resize((rw, rh), Image.LANCZOS), (16 + i * (fw + 16) + (fw - rw) // 2, fh + 32))
    sheet.save(P / "overzicht.jpg", quality=90)


def paar(nr, scratch):
    f = [x for x in feeds if f"r3_{nr}_" in x][0]
    r = [x for x in reels if f"r3_{nr}_" in x][0]
    a = Image.open(f).convert("RGB").resize((720, 900), Image.LANCZOS)
    b = Image.open(r).convert("RGB").resize((506, 900), Image.LANCZOS)
    s = Image.new("RGB", (720 + 506 + 30, 900 + 20), (40, 40, 40))
    s.paste(a, (10, 10))
    s.paste(b, (740, 10))
    out = pathlib.Path(scratch) / f"check_{nr}.jpg"
    s.save(out, quality=88)
    print(out)


if __name__ == "__main__":
    if len(sys.argv) > 2 and sys.argv[1] == "paar":
        paar(sys.argv[2], sys.argv[3])
    else:
        overzicht()
