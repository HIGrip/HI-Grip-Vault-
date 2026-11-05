"""v3.0 (flitsinterview, fotoversie): bouwt het CWILL-mailblok en de preview uit dezelfde mailtemplate."""
import base64
import pathlib

HERE = pathlib.Path(__file__).parent
TILES = [("padel", "Padel"), ("tennis", "Tennis"), ("voetbal", "Voetbal")]
PILLS = [("rugby", "Rugby"), ("pilates", "Pilates")]
QUESTIONS = ["Wat gaf de doorslag?", "Hoe heb je ons gevonden?", "Wat zocht je vóór deze sok?"]
# categorieknoppen in de footer, zoals MUD\WTR; alle URL's live gecontroleerd op 26-10-2026
FOOTER = [
    ("Performance Gripsokken 2.0", "https://www.higrip.nl/products/performance-gripsokken-2-0-zwart"),
    ("Performance Gripsokken 1.0", "https://www.higrip.nl/products/performance-gripsokken"),
    ("Voor je club of team", "https://www.higrip.nl/pages/zakelijk"),
    ("Ons verhaal", "https://www.higrip.nl/pages/over-ons"),
]
# na upload naar Shopify Files staan ze onder dezelfde naam op deze CDN
FILES = "https://www.higrip.nl/cdn/shop/files/"
ASSETS = {
    "HERO": ("flitsinterview-3.gif", "image/gif"),
    "SOK": ("fi3-sok.jpg", "image/jpeg"),
    "TEAM": ("fi3-team.jpg", "image/jpeg"),
    "padel": ("fi3-padel.jpg", "image/jpeg"),
    "tennis": ("fi3-tennis.jpg", "image/jpeg"),
    "voetbal": ("fi3-voetbal.jpg", "image/jpeg"),
}
PAGE_URL = "https://www.higrip.nl/pages/survey"  # pagina bestaat nog niet
F_HEAD = "'Poppins','Arial Black',Arial,sans-serif"
F_BODY = "'Poppins',Arial,sans-serif"


def src(key, preview):
    name, mime = ASSETS[key]
    if not preview:
        return FILES + name
    return f"data:{mime};base64," + base64.b64encode((HERE / "mail-assets" / name).read_bytes()).decode()


def href(sport, preview):
    if preview:
        return f'href="#pagina" data-sport="{sport}"'
    return f'href="{PAGE_URL}?sport={sport}"' if sport else f'href="{PAGE_URL}"'


def tiles(preview):
    cells = []
    for i, (key, label) in enumerate(TILES):
        pad = "0 6px 0 0" if i == 0 else "0 0 0 6px" if i == len(TILES) - 1 else "0 3px"
        cells.append(f"""          <td width="33%" valign="top" style="padding:{pad};">
            <a {href(key, preview)} style="display:block;text-decoration:none;color:#0A0A0A;">
              <img src="{src(key, preview)}" width="176" alt="{label}" style="display:block;width:100%;max-width:176px;height:auto;border:0;border-radius:12px;">
              <span style="display:block;padding:10px 2px 0 2px;font-family:{F_HEAD};font-weight:800;font-size:13px;line-height:18px;letter-spacing:-0.2px;text-transform:uppercase;white-space:nowrap;color:#0A0A0A;">{label} &rsaquo;</span>
            </a>
          </td>""")
    return "\n".join(cells)


def pills(preview):
    cells = []
    for i, (key, label) in enumerate(PILLS):
        pad = "0 6px 0 0" if i == 0 else "0 0 0 6px"
        cells.append(f"""          <td width="50%" style="padding:{pad};">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
              <td style="border:2px solid #0A0A0A;border-radius:40px;">
                <a {href(key, preview)} style="display:block;padding:13px 20px;font-family:{F_HEAD};font-weight:800;font-size:16px;line-height:20px;letter-spacing:-0.3px;text-transform:uppercase;color:#0A0A0A;text-decoration:none;">{label}<span style="float:right;font-weight:700;">&rsaquo;</span></a>
              </td>
            </tr></table>
          </td>""")
    return "\n".join(cells)


def questions():
    rows = []
    for nr, text in enumerate(QUESTIONS, start=2):
        rows.append(f"""        <tr>
          <td width="36" valign="top" style="padding:10px 0;border-top:1px solid #0A0A0A;font-family:{F_HEAD};font-weight:900;font-style:italic;font-size:18px;line-height:24px;color:#0A0A0A;">{nr}</td>
          <td valign="top" style="padding:10px 0;border-top:1px solid #0A0A0A;font-family:{F_BODY};font-weight:400;font-size:16px;line-height:24px;color:#0A0A0A;">{text}</td>
        </tr>""")
    return "\n".join(rows)


def footer():
    rows = []
    for label, url in FOOTER:
        rows.append(f"""        <tr>
          <td style="padding:0 0 10px 0;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
              <td align="center" style="border:1px solid #FFFFFF;border-radius:40px;">
                <a href="{url}" target="_blank" style="display:block;padding:12px 16px;font-family:{F_BODY};font-weight:600;font-size:14px;line-height:18px;color:#FFFFFF;text-decoration:none;">{label} &rsaquo;</a>
              </td>
            </tr></table>
          </td>
        </tr>""")
    return "\n".join(rows)


def mail(preview):
    tpl = (HERE / "mail-block-3.0.tpl.html").read_text(encoding="utf-8")
    parts = {
        "{{START}}": href("", preview),
        "{{HERO}}": src("HERO", preview),
        "{{SOK}}": src("SOK", preview),
        "{{TEAM}}": src("TEAM", preview),
        "{{TILES}}": tiles(preview),
        "{{PILLS}}": pills(preview),
        "{{QUESTIONS}}": questions(),
        "{{FOOTER}}": footer(),
    }
    for key, value in parts.items():
        tpl = tpl.replace(key, value)
    return tpl


(HERE / "sendwill-survey-mail-3.0.html").write_text(mail(False), encoding="utf-8")

page = (HERE / "survey-preview-3.0.src.html").read_text(encoding="utf-8").replace("__MAIL__", mail(True))
page = page.replace("__LOGO__", "data:image/png;base64," + base64.b64encode((HERE / "_img" / "logo-128.png").read_bytes()).decode())
for key in ("padel", "tennis", "voetbal"):
    page = page.replace(f"__IMG_{key.upper()}__", src(key, True))
(HERE / "flitsinterview-3.0.html").write_text(page, encoding="utf-8")

head = '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"></head><body>'
(HERE / "_test.html").write_text(head + page + "</body></html>", encoding="utf-8")
print("ok", len(page))
