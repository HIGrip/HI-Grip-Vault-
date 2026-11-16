"""Writes the .dc.html artboards for Voetbal 7-8 and Rugby 6-8 (Voetbal 6 is hand-written).

python -I gen6.py   -> ../canvas/project/*.dc.html
Layer images are referenced as /_blob/<file>; check.py maps them to ../ads6 locally,
publish step swaps them for real blob ids.
"""
import pathlib

OUT = pathlib.Path(__file__).resolve().parent.parent / "canvas" / "project"
INK, WHITE, VOLT, RED, ONYX = "#0A0A0A", "#FFFFFF", "#CCFF00", "#E10600", "#111111"
LOGO_W, LOGO_B = "fda1d877a6f4e53b46d1846880536316", "ca9b562f04354672820ddb842bd4599d"

HEAD = """<!doctype html>
<html lang="nl">
<head>
<meta charset="utf-8">
<title>{title}</title>
<script src="./support.js"></script>
</head>
<body>
<x-dc>
<helmet>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,800;1,900&amp;display=swap">
<style>
body{{margin:0}}
</style>
</helmet>
<div style="position: relative; width: 1080px; height: 1350px; overflow: hidden; background: {bg}; font-family: 'Poppins', system-ui, sans-serif; color: {fg}">
"""
TAIL = """</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{"$preview":{"width":1080,"height":1350}}'>
class Component extends DCLogic {
  renderVals() {
    return {};
  }
}
</script>
</body>
</html>
"""


def logo(dark_bg=True):
    blob, col = (LOGO_W, WHITE) if dark_bg else (LOGO_B, INK)
    return (f'<div style="position: absolute; left: 72px; top: 72px; display: flex; align-items: center; gap: 14px">\n'
            f'<img src="/_blob/{blob}" alt="" style="width: 44px; height: 40px; display: block">\n'
            f'<span style="font-size: 26px; font-weight: 800; letter-spacing: 0.5px; line-height: 1; color: {col}">HÏ GRIP</span>\n</div>\n')


def cta(label, pos, dark_bg=True, accent=VOLT):
    pill, txt, dot = (WHITE, INK, INK) if dark_bg else (INK, WHITE, WHITE)
    return (f'<div style="position: absolute; {pos}; display: flex; align-items: center; gap: 20px; height: 80px; box-sizing: border-box; '
            f'padding: 0 12px 0 36px; border-radius: 40px; background: {pill}; color: {txt}">\n'
            f'<span style="font-size: 28px; font-weight: 700; line-height: 1">{label}</span>\n'
            f'<span style="width: 56px; height: 56px; border-radius: 28px; background: {dot}; display: flex; align-items: center; justify-content: center">'
            f'<svg width="14" height="22" viewBox="0 0 14 22" aria-hidden="true" style="display: block"><path d="M3.5 3l8 8-8 8" '
            f'style="fill: none; stroke: {accent}; stroke-width: 3.2; stroke-linecap: round; stroke-linejoin: round"></path></svg></span>\n</div>\n')


def headline(lines, top, size, color, left=72, extra=""):
    spans = "".join(f'<span style="display: block{";" + c if c else ""}">{t}</span>' for t, c in lines)
    return (f'<h1 style="position: absolute; left: {left}px; top: {top}px; margin: 0; font-size: {size}px; font-weight: 900; '
            f'font-style: italic; line-height: 0.86; letter-spacing: -0.035em; text-transform: uppercase; color: {color}; '
            f'white-space: nowrap{extra}">{spans}</h1>\n')


def full(img, alt=""):
    return (f'<img src="/_blob/{img}" alt="{alt}" style="position: absolute; left: 0; top: 0; width: 1080px; height: 1350px; '
            f'display: block{"; pointer-events: none" if not alt else ""}">\n')


def framed_proof(title, photo, alt, head_lines, anchor, dark, line_col, keyline, label, sub, cta_label, accent, fname):
    """Format B: headline, rounded photo frame, one hairline callout that leaves the frame."""
    bg, fg = (ONYX, WHITE) if dark else (WHITE, INK)
    ax, ay = anchor
    y_turn, r = 1150, 11
    path = f"M{ax:.1f} {ay + r + 3:.1f} V{y_turn} H72"
    keyl = (f'<path d="{path}" style="fill: none; stroke: {keyline}; stroke-width: 5; stroke-linejoin: round"></path>'
            f'<circle cx="{ax:.1f}" cy="{ay:.1f}" r="{r}" style="fill: none; stroke: {keyline}; stroke-width: 5"></circle>') if keyline else ""
    svg = (f'<svg width="1080" height="1350" viewBox="0 0 1080 1350" aria-hidden="true" style="position: absolute; left: 0; top: 0; display: block">'
           f'{keyl}<path d="{path}" style="fill: none; stroke: {line_col}; stroke-width: 2; stroke-linejoin: round"></path>'
           f'<circle cx="{ax:.1f}" cy="{ay:.1f}" r="{r}" style="fill: none; stroke: {line_col}; stroke-width: 2"></circle></svg>\n')
    muted = "rgba(255,255,255,0.72)" if dark else "rgba(10,10,10,0.66)"
    body = (HEAD.format(title=title, bg=bg, fg=fg) + logo(dark)
            + headline([(t, "") for t in head_lines], 168, 112, fg)
            + f'<div style="position: absolute; left: 72px; top: 440px; width: 936px; height: 624px; border-radius: 24px; overflow: hidden; background: #000">'
              f'<img src="/_blob/{photo}" alt="{alt}" style="width: 936px; height: 624px; display: block"></div>\n'
            + svg
            + f'<div style="position: absolute; left: 72px; top: 1178px; width: 560px">\n'
              f'<p style="margin: 0; font-size: 28px; font-weight: 700; line-height: 1.3">{label}</p>\n'
              f'<p style="margin: 4px 0 0; font-size: 24px; font-weight: 400; line-height: 1.35; color: {muted}">{sub}</p>\n</div>\n'
            + cta(cta_label, "right: 72px; top: 1198px", dark, accent)
            + TAIL)
    (OUT / fname).write_text(body, encoding="utf-8")


def brand_still(title, img, alt, dark_logo_bg, fname):
    """Format C: full-bleed image, brand line only. No price, no button (Meta adds its own)."""
    body = (HEAD.format(title=title, bg=INK, fg=WHITE) + full(img, alt) + logo(dark_logo_bg)
            + headline([("Ga door", ""), ("waar anderen", ""), ("stoppen.", "")], 989, 112, WHITE)
            + TAIL)
    (OUT / fname).write_text(body, encoding="utf-8")


# Voetbal 7 · framed proof on onyx, volt hairline with ink keyline (crosses the white sole)
framed_proof("Voetbal 7 · Grip die je niet ziet", "v7_photo.jpg",
             "Hiel komt los van het kunstgras: de zool van de witte HÏ Grip-sok met zwarte siliconen driehoeken",
             ["Grip die je", "niet ziet."], (741.9, 738.5), True, VOLT, INK,
             "Siliconen zones", "houden je voet vast in je schoen.", "Shop nu", VOLT, "Voetbal-7-Grip-die-je-niet-ziet.dc.html")

# Rugby 7 · same format on white, tangerine hairline
framed_proof("Rugby 7 · Onzichtbaar in de ruck", "r7_photo.jpg",
             "Macro van de siliconen grip-driehoeken op de zool van een witte HÏ Grip-sok",
             ["Onzichtbaar", "in de ruck."], (733.9, 789.2), False, RED, WHITE,
             "Siliconen zones", "houden je voet vast in je schoen.", "Shop nu", RED, "Rugby-7-Onzichtbaar-in-de-ruck.dc.html")

# Rugby 6 · scrum call, last line in tangerine, sock in front of the type
r6 = (HEAD.format(title="Rugby 6 · Crouch bind set", bg=INK, fg=WHITE)
      + full("r6_bg.jpg", "Witte HÏ Grip-sok staand op zwart, zool met grip-driehoeken naar de camera")
      + headline([("Crouch.", ""), ("Bind.", ""), ("Set.", f" color: {RED}")], 470, 136, WHITE)
      + full("r6_fg.png")
      + logo(True)
      + '<p style="position: absolute; left: 72px; top: 1084px; width: 480px; margin: 0; font-size: 26px; font-weight: 400; line-height: 1.4; color: rgba(255,255,255,0.88)">'
        'Siliconen zones houden je voet vast in je schoen. Ook in de scrum.</p>\n'
      + cta("Shop nu", "left: 72px; top: 1198px", True, RED)
      + TAIL)
(OUT / "Rugby-6-Crouch-bind-set.dc.html").write_text(r6, encoding="utf-8")

brand_still("Voetbal 8 · Ga door", "v8_bg.jpg",
            "Speler in een zwart HÏ Grip-shirt dribbelt over het kunstgras, van achteren gezien", True,
            "Voetbal-8-Ga-door.dc.html")
brand_still("Rugby 8 · Ga door", "r8_bg.jpg",
            "Twee witte HÏ Grip-sokken in elkaar gehaakt op zwart, grip-driehoeken zichtbaar", True,
            "Rugby-8-Ga-door.dc.html")
print("written")
