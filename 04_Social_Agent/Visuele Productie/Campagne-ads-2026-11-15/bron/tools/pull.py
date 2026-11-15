"""Copy selected originals to a local working folder at half resolution.

python -I pull.py <out_dir> <src_dir> <stem> [<stem> ...]
JPEG draft decode at 1/2 (6000 -> 3000 px), EXIF orientation applied, saved q95.
PNG files are copied as-is (converted to RGBA PNG).
"""
import sys, pathlib
from PIL import Image, ImageOps

out, src = pathlib.Path(sys.argv[1]), pathlib.Path(sys.argv[2])
out.mkdir(parents=True, exist_ok=True)
stems = set(sys.argv[3:])
for p in sorted(src.iterdir()):
    if p.stem not in stems:
        continue
    im = Image.open(p)
    if p.suffix.lower() in (".jpg", ".jpeg"):
        im.draft("RGB", (im.width // 2, im.height // 2))
        im = ImageOps.exif_transpose(im).convert("RGB")
        im.save(out / f"{p.stem}.jpg", quality=95)
    else:
        im.convert("RGBA").save(out / f"{p.stem}.png")
    print(p.stem, im.size)
