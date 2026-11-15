"""Fast contact sheets of club shoots (JPEG draft decode at 1/8 scale).

python -I contact.py <out_dir> <label> <step> <folder>
Writes <out_dir>/<label>_<n>.jpg sheets of 4x3 thumbs with file names.
"""
import sys, pathlib
from PIL import Image, ImageDraw, ImageOps

out, label, step, folder = pathlib.Path(sys.argv[1]), sys.argv[2], int(sys.argv[3]), pathlib.Path(sys.argv[4])
out.mkdir(parents=True, exist_ok=True)
files = sorted(p for p in folder.rglob("*") if p.suffix.lower() in (".jpg", ".jpeg", ".png"))[::step]
TW, TH, COLS, ROWS = 420, 300, 4, 3
thumbs = []
for p in files:
    try:
        im = Image.open(p)
        im.draft("RGB", (im.width // 8, im.height // 8))
        im = ImageOps.exif_transpose(im).convert("RGB")
        im.thumbnail((TW, TH - 18))
        thumbs.append((p.name, im))
    except Exception as e:
        print("skip", p.name, e)
per = COLS * ROWS
for i in range(0, len(thumbs), per):
    sheet = Image.new("RGB", (COLS * TW, ROWS * TH), (30, 30, 30))
    d = ImageDraw.Draw(sheet)
    for j, (name, im) in enumerate(thumbs[i:i + per]):
        x, y = (j % COLS) * TW, (j // COLS) * TH
        sheet.paste(im, (x + (TW - im.width) // 2, y))
        d.text((x + 6, y + TH - 16), name, fill=(255, 255, 0))
    sheet.save(out / f"{label}_{i // per + 1}.jpg", quality=80)
print(label, len(files), "files ->", (len(thumbs) + per - 1) // per, "sheets")
