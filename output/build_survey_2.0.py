"""v2.0 (flitsinterview): bouwt het CWILL-mailblok en de preview uit dezelfde mailtemplate."""
import base64
import pathlib

HERE = pathlib.Path(__file__).parent
SPORTS = [("padel", "Padel"), ("tennis", "Tennis"), ("voetbal", "Voetbal"), ("rugby", "Rugby"), ("pilates", "Pilates")]
SHOP = [
    ("2.0 Zwart", "https://www.higrip.nl/products/performance-gripsokken-2-0-zwart"),
    ("2.0 Wit", "https://www.higrip.nl/products/performance-gripsokken-2-0-wit"),
    ("1.0", "https://www.higrip.nl/products/performance-gripsokken"),
]
HERO_URL = "https://www.higrip.nl/cdn/shop/files/flitsinterview.gif"  # na upload naar Shopify Files
PAGE_URL = "https://www.higrip.nl/pages/survey"  # pagina bestaat nog niet
F_HEAD = "'Poppins','Arial Black',Arial,sans-serif"


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


def shop():
    cells = []
    for i, (label, url) in enumerate(SHOP):
        pad = "0 4px 0 0" if i == 0 else "0 0 0 4px" if i == len(SHOP) - 1 else "0 4px"
        cells.append(f"""          <td width="33%" style="padding:{pad};">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
              <td align="center" style="background-color:#0A0A0A;border-radius:40px;">
                <a href="{url}" target="_blank" style="display:block;padding:12px 6px;font-family:{F_HEAD};font-weight:800;font-size:13px;line-height:16px;text-transform:uppercase;color:#FFFFFF;text-decoration:none;white-space:nowrap;">{label} &rsaquo;</a>
              </td>
            </tr></table>
          </td>""")
    return "\n".join(cells)


def mail(preview):
    tpl = (HERE / "mail-block-2.0.tpl.html").read_text(encoding="utf-8")
    hero = data_uri("mail-assets/flitsinterview.gif", "image/gif") if preview else HERO_URL
    return tpl.replace("{{HERO}}", hero).replace("{{BUTTONS}}", buttons(preview)).replace("{{SHOP}}", shop())


(HERE / "sendwill-survey-mail-2.0.html").write_text(mail(False), encoding="utf-8")

page = (HERE / "survey-preview-2.0.src.html").read_text(encoding="utf-8")
page = page.replace("__MAIL__", mail(True)).replace("__LOGO__", data_uri("_img/logo-128.png", "image/png"))
for key in ("padel", "tennis", "voetbal"):
    page = page.replace(f"__IMG_{key.upper()}__", data_uri(f"_img/{key}-crop.jpg", "image/jpeg"))
(HERE / "flitsinterview-2.0.html").write_text(page, encoding="utf-8")

head = '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"></head><body>'
(HERE / "_test.html").write_text(head + page + "</body></html>", encoding="utf-8")
print("ok", len(page))
