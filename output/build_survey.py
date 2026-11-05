"""Bouwt het CWILL-mailblok en de preview-artifact uit dezelfde mailtemplate."""
import base64
import pathlib

HERE = pathlib.Path(__file__).parent
SPORTS = [("padel", "Padel"), ("tennis", "Tennis"), ("voetbal", "Voetbal"), ("rugby", "Rugby"), ("pilates", "Pilates")]
HERO_URL = "https://www.higrip.nl/cdn/shop/files/survey-hero-padel.jpg"  # na upload naar Shopify Files
PAGE_URL = "https://higrip.nl/pages/survey"  # pagina bestaat nog niet


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
                <a {href} style="display:block;padding:15px 24px;font-family:'Poppins','Arial Black',Arial,sans-serif;font-weight:800;font-size:18px;line-height:22px;letter-spacing:-0.3px;text-transform:uppercase;color:#0A0A0A;text-decoration:none;">{label}<span style="float:right;font-weight:700;font-size:22px;line-height:22px;">&rsaquo;</span></a>
              </td>
            </tr></table>
          </td>
        </tr>""")
    return "\n".join(rows)


def mail(preview):
    tpl = (HERE / "mail-block.tpl.html").read_text(encoding="utf-8")
    hero = data_uri("_img/mail-hero-preview.jpg", "image/jpeg") if preview else HERO_URL
    return tpl.replace("{{HERO}}", hero).replace("{{BUTTONS}}", buttons(preview))


(HERE / "sendwill-survey-mail.html").write_text(mail(False), encoding="utf-8")

page = (HERE / "survey-preview.src.html").read_text(encoding="utf-8")
page = page.replace("__MAIL__", mail(True)).replace("__LOGO__", data_uri("_img/logo-128.png", "image/png"))
for key in ("padel", "tennis", "voetbal"):
    page = page.replace(f"__IMG_{key.upper()}__", data_uri(f"_img/{key}-crop.jpg", "image/jpeg"))
(HERE / "doorslag-survey.html").write_text(page, encoding="utf-8")

head = '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"></head><body>'
(HERE / "_test.html").write_text(head + page + "</body></html>", encoding="utf-8")
print("ok", len(page))
