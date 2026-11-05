"""v2.1 (flitsinterview): bouwt het CWILL-mailblok en de preview uit dezelfde mailtemplate."""
import base64
import pathlib

HERE = pathlib.Path(__file__).parent
SPORTS = [("padel", "Padel"), ("tennis", "Tennis"), ("voetbal", "Voetbal"), ("rugby", "Rugby"), ("pilates", "Pilates")]
QUESTIONS = ["Wat gaf de doorslag?", "Hoe heb je ons gevonden?", "Wat zocht je vóór deze sok?"]
# categorieknoppen in de footer, zoals MUD\WTR; alle URL's live gecontroleerd op 26-10-2026
FOOTER = [
    ("Performance Gripsokken 2.0", "https://www.higrip.nl/products/performance-gripsokken-2-0-zwart"),
    ("Performance Gripsokken 1.0", "https://www.higrip.nl/products/performance-gripsokken"),
    ("Voor je club of team", "https://www.higrip.nl/pages/zakelijk"),
    ("Ons verhaal", "https://www.higrip.nl/pages/over-ons"),
]
HERO_URL = "https://www.higrip.nl/cdn/shop/files/flitsinterview.gif"  # na upload naar Shopify Files
PAGE_URL = "https://www.higrip.nl/pages/survey"  # pagina bestaat nog niet
F_HEAD = "'Poppins','Arial Black',Arial,sans-serif"
F_BODY = "'Poppins',Arial,sans-serif"


def data_uri(path, mime):
    return f"data:{mime};base64," + base64.b64encode((HERE / path).read_bytes()).decode()


def buttons(preview):
    rows = []
    for key, label in SPORTS:
        href = f'href="#pagina" data-sport="{key}"' if preview else f'href="{PAGE_URL}?sport={key}"'
        rows.append(f"""        <tr>
          <td style="padding:0 0 10px 0;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
              <td style="border:2px solid #0A0A0A;border-radius:40px;background-color:#FFFFFF;">
                <a {href} style="display:block;padding:15px 24px;font-family:{F_HEAD};font-weight:800;font-size:18px;line-height:22px;letter-spacing:-0.3px;text-transform:uppercase;color:#0A0A0A;text-decoration:none;">{label}<span style="float:right;font-weight:700;font-size:22px;line-height:22px;">&rsaquo;</span></a>
              </td>
            </tr></table>
          </td>
        </tr>""")
    return "\n".join(rows)


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
    tpl = (HERE / "mail-block-2.1.tpl.html").read_text(encoding="utf-8")
    hero = data_uri("mail-assets/flitsinterview.gif", "image/gif") if preview else HERO_URL
    parts = {"{{HERO}}": hero, "{{BUTTONS}}": buttons(preview), "{{QUESTIONS}}": questions(), "{{FOOTER}}": footer()}
    for key, value in parts.items():
        tpl = tpl.replace(key, value)
    return tpl


(HERE / "sendwill-survey-mail-2.1.html").write_text(mail(False), encoding="utf-8")

page = (HERE / "survey-preview-2.1.src.html").read_text(encoding="utf-8")
page = page.replace("__MAIL__", mail(True)).replace("__LOGO__", data_uri("_img/logo-128.png", "image/png"))
for key in ("padel", "tennis", "voetbal"):
    page = page.replace(f"__IMG_{key.upper()}__", data_uri(f"_img/{key}-crop.jpg", "image/jpeg"))
(HERE / "flitsinterview-2.1.html").write_text(page, encoding="utf-8")

head = '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"></head><body>'
(HERE / "_test.html").write_text(head + page + "</body></html>", encoding="utf-8")
print("ok", len(page))
