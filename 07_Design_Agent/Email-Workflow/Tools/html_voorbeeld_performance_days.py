# Ronde 6 (max 5 secties: hero, deal, inschrijf/bestelkaart, slotbeeld, footer). Ronde 5: twee mails in hetzelfde premium systeem (feedback Lars 17-11).
# A = inschrijven voor early access. B = early-access-code ontvangen (nu bestellen). Assets: assets5.py.
import html, pathlib

import os
OUT = pathlib.Path(os.environ.get("EMAIL_WORK", "."))
ASSET = "assets/"  # PRODUCTIE: uploaden naar Shopify Files en hier de CDN-map invullen
SIGNUP = "[URL AANMELDPAGINA]?email={{ email }}&utm_source=email&utm_medium=email&utm_campaign=performance-days-aanmelden"
SHOP = "[URL PERFORMANCE DAYS]?utm_source=email&utm_medium=email&utm_campaign=performance-days-early-access"
DATE = "[DATUM]"
BLACK, WHITE, VOLT, MUTE, LINE, CARD = "#0A0A0A", "#FFFFFF", "#CCFF00", "#A9A9AB", "#232323", "#141414"
F = "'Poppins', Arial, Helvetica, sans-serif"
DISPLAY = f"font-family:{F};font-weight:900;font-style:italic;text-transform:uppercase;letter-spacing:-0.045em;margin:0;"
BODY = f"font-family:{F};font-weight:400;letter-spacing:-0.01em;margin:0;"
CAP = f"font-family:{F};font-weight:600;text-transform:uppercase;letter-spacing:0.2em;margin:0;"
TERMS = ("1+1, 2+2 of 3+3: koop 1, 2 of 3 paar en je krijgt er evenveel gratis bij. Verzending €4,50, gratis vanaf €35 na korting. "
         "30 dagen retour.")


def img(name, w, alt):
    return f'<img src="{ASSET}{name}" width="{w}" alt="{html.escape(alt)}" style="display:block;width:100%;max-width:{w}px;height:auto;border:0;">'


def gap(h):
    return f'<div style="height:{h}px;line-height:{h}px;font-size:1px;">&nbsp;</div>'


def row(inner, pad="0 40px", align="left"):
    return f'<tr><td class="hg-p" align="{align}" style="padding:{pad};">{inner}</td></tr>'


def full_img(name, alt, pad="0"):
    return f'<tr><td style="padding:{pad};line-height:0;font-size:0;">{img(name, 600, alt)}</td></tr>'


def big_button(text, href):
    """Grote knop over de volle breedte, wit met zwarte tekst en Volt-pijl: direct duidelijk."""
    return f"""<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
<td bgcolor="{WHITE}" align="center" style="background:{WHITE};border-radius:999px;">
<!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" href="{href}" style="height:68px;v-text-anchor:middle;width:520px;" arcsize="50%" stroke="f" fillcolor="{WHITE}"><center style="color:{BLACK};font-family:Arial;font-size:17px;font-weight:bold;letter-spacing:2px;">{text.upper()}</center></v:roundrect><![endif]-->
<!--[if !mso]><!--><a href="{href}" style="display:block;padding:22px 24px;font-family:{F};font-weight:900;font-style:italic;font-size:19px;letter-spacing:0.02em;text-transform:uppercase;color:{BLACK};text-align:center;">{text}<span style="display:inline-block;margin-left:14px;width:30px;height:30px;line-height:30px;border-radius:50%;background:{BLACK};color:{VOLT};text-align:center;font-size:15px;font-style:normal;vertical-align:middle;">&#8599;</span></a><!--<![endif]-->
</td></tr></table>"""


def section_head(title, tag):
    return row(f"""<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
<td valign="bottom"><p style="{DISPLAY}font-size:34px;line-height:34px;color:{WHITE};">{title}</p></td>
<td valign="bottom" align="right"><span style="{CAP}font-size:9px;color:{WHITE};border:1px solid #5A5A5A;border-radius:999px;padding:6px 12px;white-space:nowrap;">{tag}</span></td>
</tr></table>""", pad="0 40px 22px")


def deal():
    tiers = [("r5-tier-1.jpg", "1+1 GRATIS", "2 PAAR", "2.0: €17,95<br>1.0: €14,95", "+ €4,50 verzending"),
             ("r5-tier-2.jpg", "2+2 GRATIS", "4 PAAR", "2.0: €35,90<br>1.0: €29,90", "2.0: gratis verzending"),
             ("r5-tier-3.jpg", "3+3 GRATIS", "6 PAAR", "2.0: €53,85<br>1.0: €44,85", "gratis verzending")]
    cells = ""
    for n, label, pairs, price, ship in tiers:
        cells += f"""<td width="33.33%" valign="top" style="padding:0 6px;">
{img(n, 168, label + ", " + pairs + " PERFORMANCE GRIP SOCKS")}
<p style="{CAP}font-size:8px;letter-spacing:0.14em;color:{MUTE};margin-top:14px;">{label}</p>
<p style="{DISPLAY}font-size:20px;color:{WHITE};margin-top:6px;letter-spacing:-0.02em;">{pairs}</p>
<p style="{BODY}font-size:11px;line-height:16px;color:{WHITE};margin-top:6px;">{price}</p>
<p style="{BODY}font-size:10px;line-height:15px;color:{MUTE};margin-top:2px;">{ship}</p></td>"""
    return section_head("DE DEAL", "1+1 &nbsp;/&nbsp; 2+2 &nbsp;/&nbsp; 3+3") + row(
        f'<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>{cells}</tr></table>', pad="0 34px 8px")


def cta_card(title_html, sub, button_text, href, image, alt, field=False):
    fld = email_field() if field else ""
    return row(f"""<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="{CARD}" style="background:{CARD};border-radius:24px;border:1px solid #262626;"><tr>
<td class="hg-cardtxt" valign="middle" style="padding:38px 34px 38px 34px;">
<p class="hg-l" style="{DISPLAY}font-size:44px;line-height:42px;color:{WHITE};">{title_html}</p>
<p style="{BODY}font-size:14px;line-height:22px;color:{MUTE};margin-top:16px;">{sub}</p>
{gap(22)}{fld}<table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr><td bgcolor="{WHITE}" style="background:{WHITE};border-radius:999px;">
<a href="{href}" style="display:inline-block;padding:15px 22px;font-family:{F};font-weight:900;font-style:italic;font-size:14px;text-transform:uppercase;color:{BLACK};">{button_text} <span style="display:inline-block;margin-left:6px;width:22px;height:22px;line-height:22px;border-radius:50%;background:{BLACK};color:{VOLT};text-align:center;font-size:12px;font-style:normal;">&#8599;</span></a></td></tr></table>
</td>
</tr></table>""", pad="0 40px")


def email_field():
    """Vooringevuld e-mailveld. Echte formulieren werken niet in Gmail/Outlook, dus: adres staat er al, één klik schrijft in."""
    return f"""<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:12px;"><tr>
<td style="border:1.5px solid {VOLT};border-radius:14px;padding:11px 16px;background:#0A0A0A;">
<p style="{CAP}font-size:8px;color:{MUTE};">JOUW E-MAIL</p>
<a href="{SIGNUP}" style="display:block;font-family:{F};font-weight:600;font-size:14px;line-height:20px;color:{WHITE};margin-top:3px;word-break:break-all;">{{{{ email }}}}</a></td></tr></table>"""


def steps(items, tag="01 / 03"):
    rows = ""
    for i, (n, title, sub) in enumerate(items):
        border = "" if i == len(items) - 1 else f"border-bottom:1px solid {LINE};"
        rows += f"""<tr><td style="padding:24px 0;{border}">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
<td width="104" valign="top"><span style="font-family:{F};font-weight:900;font-style:italic;font-size:64px;line-height:58px;letter-spacing:-0.05em;color:{VOLT};-webkit-text-fill-color:{BLACK};-webkit-text-stroke:1.5px {VOLT};">{n}</span></td>
<td valign="top" style="padding-top:6px;"><p style="{DISPLAY}font-size:24px;line-height:27px;color:{WHITE};">{title}</p>
<p style="{BODY}font-size:14px;line-height:22px;color:{MUTE};margin-top:8px;">{sub}</p></td></tr></table></td></tr>"""
    return section_head("ZO WERKT HET", tag) + row(
        f'<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid {LINE};">{rows}</table>', pad="0 40px 8px")


def grid():
    top = "".join(f'<td width="50%" style="padding:0 6px;">{img(n, 254, a)}</td>'
                  for n, a in [("r5-g1.jpg", "Tennisser in HÏ Grip-shirt in de slag"), ("r5-g2.jpg", "Voet in HÏ Grip-sok trapt de bal")])
    bot = "".join(f'<td width="33.33%" style="padding:0 6px;">{img(n, 165, a)}</td>'
                  for n, a in [("r5-g3.jpg", "Tennisser in de slag"), ("r5-g4.jpg", "Padelspeler met HÏ Grip-sokken"), ("r5-g5.jpg", "Voetballer haalt uit")])
    return row(f"""<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>{top}</tr></table>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:12px;"><tr>{bot}</tr></table>""", pad="0 34px")


def statement(line1, line2):
    return row(f"""<p class="hg-l" style="{DISPLAY}font-size:46px;line-height:44px;color:{WHITE};">{line1}</p>
<p class="hg-l" style="{DISPLAY}font-size:48px;line-height:52px;color:{VOLT};">{line2}</p>""", pad="0 40px 32px", align="center")


def head(title, pre):
    return f"""<!doctype html>
<html lang="nl" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="dark"><meta name="supported-color-schemes" content="dark">
<title>{html.escape(title)}</title>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;0,700;0,900;1,900&display=swap" rel="stylesheet">
<style>
 body{{margin:0;padding:0;background:{BLACK};-webkit-font-smoothing:antialiased;}}
 .hg-bg, [data-ogsc] .hg-bg, [data-ogsb] .hg-bg {{ background-color:{BLACK} !important; }}
 a{{text-decoration:none;}}
 @media (max-width:620px){{
  .hg-w{{width:100% !important;}}
  .hg-p{{padding-left:22px !important;padding-right:22px !important;}}
  .hg-l{{font-size:38px !important;line-height:38px !important;}}
  .hg-code{{font-size:30px !important;line-height:36px !important;letter-spacing:0.04em !important;}}
  .hg-stack{{display:block !important;width:100% !important;}}
  .hg-cardtxt{{padding:30px 26px 10px 26px !important;width:auto !important;}}
  .hg-stack img{{max-width:280px !important;margin:0 auto !important;border-radius:0 0 24px 24px !important;}}
 }}
</style></head>
<body class="hg-bg" style="margin:0;padding:0;background:{BLACK};">
<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;color:{BLACK};">{html.escape(pre)}&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="{BLACK}" class="hg-bg" style="background:{BLACK};"><tr><td align="center">
<table role="presentation" class="hg-w" width="600" cellpadding="0" cellspacing="0" border="0" bgcolor="{BLACK}" style="width:600px;max-width:600px;background:{BLACK};">
""" + row(f"""<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
<td valign="middle"><span style="{DISPLAY}font-size:22px;color:{WHITE};">H&Iuml; GRIP</span></td>
<td valign="middle" align="center"><span style="{CAP}font-size:9px;color:{MUTE};">[ EARLY ACCESS ]</span></td>
<td valign="middle" align="right" width="80"><img src="{ASSET}r4-barcode.png" width="76" alt="" style="display:inline-block;width:76px;height:auto;border:0;opacity:.8;"></td>
</tr></table>""", pad="24px 40px 18px")


def footer(extra):
    return row(f"""<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid {LINE};"><tr>
<td valign="top" style="padding-top:22px;">
<p style="{CAP}font-size:8px;line-height:16px;color:{MUTE};">[ HÏ PERFORMANCE DAYS ]<br>BLACK FRIDAY 27.11 T/M CYBER MONDAY 30.11.2026</p>
<p style="{BODY}font-size:11px;line-height:18px;color:#7C7C7F;margin-top:12px;max-width:330px;">{TERMS} {extra}</p></td>
<td valign="top" align="right" style="padding-top:22px;">
<p style="{CAP}font-size:8px;line-height:18px;">
<a href="https://www.higrip.nl" style="color:{WHITE};">HIGRIP.NL</a><br>
<a href="https://www.instagram.com/higrip.nl" style="color:{MUTE};">INSTAGRAM</a><br>
<a href="https://www.tiktok.com/@higrip.nl" style="color:{MUTE};">TIKTOK</a><br>
<a href="[UITSCHRIJFLINK]" style="color:{MUTE};">UITSCHRIJVEN</a></p></td>
</tr></table>""", pad="40px 40px 48px") + "</table></td></tr></table></body></html>\n"


# =============================================================== MAIL A: INSCHRIJVEN
def mail_a():
    s = head("Early access HÏ Performance Days", "Black Friday begint voor jou eerder. Schrijf je nu in.")
    s += full_img("r5-hero-a.jpg", "EARLY ACCESS HÏ PERFORMANCE DAYS. Voetballer in HÏ Grip-shirt haalt uit. 1+1, 2+2 en 3+3 gratis.")
    s += row(big_button("Schrijf je nu in", SIGNUP), pad="8px 40px 0")
    s += row(f"""<p style="{DISPLAY}font-size:22px;line-height:27px;color:{VOLT};">BLACK FRIDAY START VOOR JOU OP {DATE}.</p>
<p style="{BODY}font-size:15px;line-height:25px;color:{MUTE};margin-top:14px;max-width:440px;">Op 27 november gaan de HÏ Performance Days open voor iedereen. Op de lijst ben je eerder binnen. <span style="color:{WHITE};">Koop 1, 2 of 3 paar en krijg er evenveel gratis bij. Jij kiest als eerste je maat.</span></p>""", pad="34px 40px 40px")
    s += deal() + row(gap(56))
    s += cta_card("SCHRIJF JE<br>NU IN.", f"Je e-mail staat er al in. Eén klik en je staat op de lijst. Op {DATE} krijg je jouw code.", "Schrijf je nu in", SIGNUP,
                  "r5-cta-a.jpg", "Padelspeler in HÏ Grip-sokken met groene rand", field=True) + row(gap(64))
    s += full_img("r5-closer-a.jpg", "GA DOOR WAAR ANDEREN STOPPEN. Tennisser op gravel met groene rand.")
    s += row(big_button("Schrijf je nu in", SIGNUP), pad="8px 40px 24px")
    s += footer("Je krijgt deze mail omdat je je hebt aangemeld voor nieuws van HÏ Grip.")
    return s


# =============================================================== MAIL B: KORTINGSCODE (NU BESTELLEN)
def code_ticket():
    return f"""<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="{WHITE}" style="background:{WHITE};border-radius:22px;border:3px solid {VOLT};"><tr>
<td align="center" style="padding:26px 24px 24px;">
<p style="{CAP}font-size:9px;color:#6E6E6E;">{{{{ first_name }}}} &nbsp;/&nbsp; JOUW EARLY ACCESS CODE</p>
<p class="hg-code" style="white-space:nowrap;font-family:{F};font-weight:900;font-size:42px;line-height:48px;letter-spacing:0.08em;color:{BLACK};margin:10px 0 14px;">{{{{ discount_code }}}}</p>
<img src="{ASSET}barcode-wit.png" width="260" alt="" style="display:block;width:260px;max-width:100%;height:auto;border:0;margin:0 auto;">
<p style="{CAP}font-size:8px;color:#6E6E6E;margin-top:14px;">GELDIG VANAF {DATE} T/M 30.11.2026</p>
</td></tr></table>"""


def mail_b():
    s = head("Je early access code is binnen", "Jouw code voor de HÏ Performance Days. 1+1, 2+2 of 3+3 gratis.")
    s += full_img("r5-hero-b.jpg", "EARLY ACCESS HÏ PERFORMANCE DAYS. Tennisser in HÏ Grip-shirt met groene rand. 1+1, 2+2 en 3+3 gratis.")
    s += row(code_ticket() + gap(18) + big_button("Nu bestellen", SHOP), pad="8px 40px 0")
    s += row(f"""<p style="{DISPLAY}font-size:22px;line-height:27px;color:{VOLT};">JE BENT BINNEN. DE REST NOG NIET.</p>
<p style="{BODY}font-size:15px;line-height:25px;color:{MUTE};margin-top:14px;max-width:440px;">Jouw code werkt vanaf {DATE}, vóór de publieke start op 27 november. <span style="color:{WHITE};">Koop 1, 2 of 3 paar en krijg er evenveel gratis bij. Zet het aantal in je mandje, de gratis paren zet je er zelf bij.</span></p>""", pad="34px 40px 40px")
    s += deal() + row(gap(56))
    s += cta_card("NU<br>BESTELLEN.", "Kopieer je code, kies 1+1, 2+2 of 3+3 en reken af vóór de rest. Geldig t/m 30.11.2026.", "Nu bestellen", SHOP,
                  "r5-cta-b.jpg", "Padelspeler in HÏ Grip-sokken met groene rand") + row(gap(64))
    s += full_img("r5-closer-b.jpg", "GA DOOR WAAR ANDEREN STOPPEN. Voetballer in HÏ Grip-shirt met groene rand.")
    s += row(big_button("Nu bestellen", SHOP), pad="8px 40px 24px")
    s += footer("Deze code is voor jou omdat je je hebt aangemeld voor early access.")
    return s


if __name__ == "__main__":
    for fn, f in [("mail-a-early-access-inschrijven.html", mail_a), ("mail-b-early-access-code.html", mail_b)]:
        (OUT / fn).write_text(f(), encoding="utf-8")
        print(fn, round((OUT / fn).stat().st_size / 1024, 1), "KB")
