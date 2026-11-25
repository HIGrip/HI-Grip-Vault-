# Optie D "Statusbalk": donker, gecentreerd, naar de opbouw van Lars' referenties (24-11-2026).
# Gebruik: python bouw_d.py  -> ../optie-d-statusbalk.html
from bouw import (IG, OUT, FONT, PRELUDE, INTRO, preheader, head, button, coin, footer_links,
                  line_meta, VOLT, TITANIUM, WHITE, INK, SITE)

# Logo: wit HÏ Grip-logo uit Shopify Bestanden.
# Daarna klopt deze map-URL (zelfde map als het logo).
ASSETS = "https://cdn.shopify.com/s/files/1/0935/0918/9959/files/"
LOGO = ASSETS + "HI_GRIP_logo_-removebg-preview_1.png"  
BG, PANEL, LINE, MUTED = "#0A0A0A", "#1A1A1A", "#2C2C2E", TITANIUM


def label(t, align="left"):
    return ('<div style="font-size:11px;line-height:16px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:'
            + MUTED + ';text-align:' + align + ';">' + t + '</div>')


def kv(k, v):
    return ('<tr><td style="padding:3px 12px 3px 0;font-size:14px;line-height:22px;color:' + MUTED + ';white-space:nowrap;">' + k +
            '</td><td style="padding:3px 0;font-size:14px;line-height:22px;color:#FFFFFF;" class="keep-white">' + v + '</td></tr>')


def trow(k, v, extra=""):
    return ('<tr><td align="right" style="padding:4px 16px 4px 0;font-size:14px;line-height:22px;color:' + MUTED + ';' + extra + '">' + k +
            '</td><td align="right" width="110" style="width:110px;padding:4px 0;font-size:14px;line-height:22px;color:#FFFFFF;white-space:nowrap;' + extra + '" class="keep-white">' + v + '</td></tr>')


def knop(label="Bekijk je bestelling", width=260):
    return (
        '<!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="{{ order_status_url }}" '
        'style="height:52px;v-text-anchor:middle;width:' + str(width) + 'px;" arcsize="50%" strokecolor="#FFFFFF" strokeweight="2px" filled="f"><w:anchorlock/>'
        '<center style="color:#FFFFFF;font-family:Arial,sans-serif;font-size:15px;font-weight:bold;">' + label + ' &rsaquo;</center></v:roundrect><![endif]-->'
        '<!--[if !mso]><!--><a href="{{ order_status_url }}" class="btn keep-white" style="display:inline-block;border:2px solid #FFFFFF;color:#FFFFFF;'
        'font-family:' + FONT + ';font-size:15px;line-height:20px;font-weight:600;text-decoration:none;border-radius:999px;padding:14px 30px;mso-hide:all;">'
        + label + '&nbsp;&nbsp;<span style="font-size:18px;line-height:20px;">&rsaquo;</span></a><!--<![endif]-->')


def vergrendel(html):
    """Zelfde dark-mode-opzet als de SendWILL-mails: color-scheme light, en per kleur één klasse
    met de hooks [data-ogsc]/[data-ogsb] in één regel."""
    import re
    for kleur, klas in (("#0A0A0A", "bg-ink"), ("#1A1A1A", "bg-panel")):
        html = re.sub(r'(<(?:table|td)[^>]*bgcolor="' + kleur + r'"[^>]*?)( class="([^"]*)")?(\s*style=)',
                      lambda m: m.group(1) + ' class="' + ((m.group(3) + " ") if m.group(3) else "") + klas + '"' + m.group(4), html)
    return html


def beeld(naam, w, h, alt, href=None, extra=""):
    img = ('<img src="' + ASSETS + 'higrip-orderbev-' + naam + '.jpg" width="' + str(w) + '" height="' + str(h) + '" alt="' + alt +
           '" style="display:block;width:' + str(w) + 'px;max-width:100%;height:auto;border:0;margin:0 auto;' + extra + '">')
    return ('<a href="' + href + '" style="text-decoration:none;">' + img + '</a>') if href else img


def optie_d():
    css = """:root{color-scheme:light;supported-color-schemes:light;}
body{background-color:#0A0A0A;}
.bg-ink, [data-ogsc] .bg-ink, [data-ogsb] .bg-ink{background-color:#0A0A0A!important;}
.bg-panel, [data-ogsc] .bg-panel, [data-ogsb] .bg-panel{background-color:#1A1A1A!important;}
.keep-white, [data-ogsc] .keep-white, [data-ogsb] .keep-white{color:#FFFFFF!important;}
.keep-volt, [data-ogsc] .keep-volt, [data-ogsb] .keep-volt{color:#CCFF00!important;}
@media only screen and (max-width:620px){.qty{display:none!important;}.thumb{width:56px!important;height:56px!important;}.usp td{padding:16px 8px!important;}.usp .big{font-size:18px!important;white-space:nowrap;}.stack-gap{border-left:0!important;}.ov td{font-size:13px!important;line-height:20px!important;}.h1{font-size:32px!important;line-height:36px!important;}}
"""
    status = ('<tr><td align="center" style="padding:30px 40px 0;" class="px">'
              + '{%- if is_pickup -%}' + beeld("status-afhalen", 335, 60, "Bevestigd. Daarna: klaar, opgehaald.")
              + '{%- elsif is_local -%}' + beeld("status-lokaal", 335, 60, "Bevestigd. Daarna: onderweg, bezorgd.")
              + '{%- else -%}' + beeld("status-verzending", 335, 60, "Bevestigd. Daarna: verzonden, bezorgd.") + '{%- endif -%}</td></tr>')
    status = status.replace('\\"', '"')

    items = r"""{%- for line in subtotal_line_items -%}
<tr>
<td valign="middle" style="padding:16px 0;border-top:1px solid """ + LINE + r""";">
<table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
<td valign="middle" width="72" style="width:72px;">{% if line.image %}<img class="thumb" src="{{ line.image | img_url: '160x160' }}" width="72" height="72" alt="{{ line.product.title | default: line.title | escape }}" style="display:block;width:72px;height:72px;border-radius:12px;object-fit:cover;">{% endif %}</td>
<td valign="middle" style="padding-left:16px;"><div class="keep-white" style="font-size:15px;line-height:22px;font-weight:600;color:#FFFFFF;">{{ line.product.title | default: line.title }}</div>""" + line_meta(MUTED) + r"""</td>
</tr></table></td>
<td valign="middle" align="right" width="90" style="width:90px;padding:16px 0;border-top:1px solid """ + LINE + r""";">{%- if line.original_line_price != line.final_line_price -%}<div style="font-size:13px;line-height:20px;color:""" + MUTED + r""";text-decoration:line-through;">{{ line.original_line_price | money }}</div>{%- endif -%}<div class="keep-white" style="font-size:15px;line-height:22px;font-weight:600;color:#FFFFFF;white-space:nowrap;">{{ line.final_line_price | money }}</div></td>
</tr>
{%- endfor -%}"""

    totals = ('<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">'
              + trow("Subtotaal", "{{ regels_totaal | money }}")
              + "{% if orderkorting > 0 %}" + trow("Korting{% if codes != '' %} ({{ codes }}){% endif %}", "&minus;{{ orderkorting | money }}") + "{% endif %}"
              + trow("{% if is_pickup %}Afhalen{% else %}Verzending{% endif %}", "{% if shipping_price == 0 %}Gratis{% else %}{{ shipping_price | money }}{% endif %}")
              + '<tr><td colspan="2" style="padding-top:10px;border-bottom:1px solid ' + LINE + ';font-size:0;line-height:0;">&nbsp;</td></tr>'
              + '<tr><td align="right" style="padding:14px 16px 0 0;font-size:16px;line-height:24px;font-weight:600;color:#FFFFFF;" class="keep-white">Totaal</td>'
              + '<td align="right" style="padding:14px 0 0;font-size:28px;line-height:32px;font-weight:800;color:#FFFFFF;white-space:nowrap;" class="keep-white">{{ total_price | money }}</td></tr>'
              + '{% if tax_price > 0 %}<tr><td colspan="2" align="right" style="padding:4px 0 0;font-size:12px;line-height:18px;color:' + MUTED + ';">incl. {{ tax_price | money }} btw{% if betaling != "" %} &middot; {{ betaling }}{% endif %}</td></tr>{% endif %}'
              + '</table>')

    usp_cell = lambda big, small, href=None: (
        '<td width="33%" valign="top" align="center" style="width:33%;padding:20px 12px;border-left:1px solid ' + LINE + ';">'
        + '<div class="big keep-volt" style="font-size:26px;line-height:30px;font-weight:800;color:' + VOLT + ';">' + big + '</div>'
        + '<div style="font-size:12px;line-height:18px;color:' + MUTED + ';padding-top:4px;">'
        + (('<a href="' + href + '" style="color:' + MUTED + ';text-decoration:underline;">' + small + '</a>') if href else small) + '</div></td>')

    body = PRELUDE + preheader() + r"""
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" background=\"""" + ASSETS + r"""higrip-orderbev-achtergrond.jpg" bgcolor=\"""" + BG + r"""" style="background-color:""" + BG + r""";background-image:url(""" + ASSETS + r"""higrip-orderbev-achtergrond.jpg);background-repeat:repeat;">
<tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" class="wrap" style="width:600px;max-width:600px;font-family:""" + FONT + r""";">

<tr><td align="center" style="padding:40px 40px 0;">""" + beeld("logo", 44, 36, "HÏ Grip", SITE) + r"""</td></tr>

<tr><td align="center" class="px" style="padding:40px 48px 0;">

<div style="padding-top:12px;">""" + beeld("titel", 520, 96, "Je bestelling is bevestigd.") + r"""</div>
<div style="padding-top:14px;">{%- if is_pickup -%}""" + beeld("intro-afhalen", 335, 52, "Je bestelling is rond. Je koos voor afhalen.") + r"""{%- elsif is_local -%}""" + beeld("intro-lokaal", 335, 52, "Je bestelling is rond. Je koos voor lokale levering.") + r"""{%- else -%}""" + beeld("intro-verzending", 335, 52, "Je bestelling is rond. Binnen 1 werkdag gaat hij de deur uit.") + r"""{%- endif -%}</div>
</td></tr>
""" + status + r"""
<tr><td align="center" style="padding:34px 40px 44px;">""" + beeld("knop-bestelling", 280, 52, "Bekijk je bestelling", "{{ order_status_url }}") + r"""</td></tr>

<tr><td class="px" style="padding:0 24px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor=\"""" + PANEL + r"""" style="background-color:""" + PANEL + r""";border-radius:18px;border-collapse:separate;">
<tr><td class="px" style="padding:22px 28px 26px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
<tr><td colspan="2" style="padding-bottom:18px;"><div class="keep-white" style="font-size:16px;line-height:24px;color:#FFFFFF;">{% if voornaam != blank %}Hoi <strong style="font-weight:700;">{{ voornaam }}</strong>, hier is je bestelling.{% else %}Hier is je bestelling.{% endif %}</div><div style="font-size:13px;line-height:20px;color:""" + MUTED + r""";">Bestelling {{ name }} &middot; {{ besteldatum }}</div></td></tr>
<tr><td style="padding-bottom:12px;">""" + label("Artikelen") + r"""</td><td width="90" style="width:90px;padding-bottom:12px;">""" + label("Prijs", "right") + r"""</td></tr>
""" + items + r"""
</table>
<div style="border-top:1px solid """ + LINE + r""";padding-top:14px;">""" + totals + r"""</div>
</td></tr></table>
</td></tr>

<tr><td class="px" style="padding:16px 24px 0;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor=\"""" + PANEL + r"""" style="background-color:""" + PANEL + r""";border-radius:18px;border-collapse:separate;">
<tr><td class="px" style="padding:24px 28px;">
""" + label("Overzicht") + r"""
<table role="presentation" class="ov" cellpadding="0" cellspacing="0" border="0" style="margin-top:8px;">""" + kv("Bestelling", "{{ name }}") + kv("Datum", "{{ besteldatum }}") + kv("Totaal", "{{ total_price | money }}") + r"""</table>
<div style="border-top:1px solid """ + LINE + r""";margin-top:16px;font-size:0;line-height:0;">&nbsp;</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td width="50%" valign="top" style="width:50%;padding:14px 12px 0 0;"><div style="font-size:10px;line-height:14px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:""" + MUTED + r""";">{% if is_pickup %}Afhalen{% elsif is_local %}Lokale levering{% else %}Bezorgadres{% endif %}</div><div class="keep-white" style="font-size:12px;line-height:18px;color:#D6D6D9;padding-top:4px;">{%- if is_pickup -%}{{ shipping_method.title }}{%- else -%}{{ shipping_address.name }}<br><span style="color:#909194;">{{ shipping_address.address1 }}{% if shipping_address.address2 and shipping_address.address2 != '' %} {{ shipping_address.address2 }}{% endif %}, {{ shipping_address.zip }} {{ shipping_address.city }}{% if shipping_address.country != "Nederland" and shipping_address.country != "Netherlands" %}, {{ shipping_address.country }}{% endif %}</span>{%- endif -%}{%- if is_local and delivery_instructions != blank -%}<br>{{ delivery_instructions }}{%- endif -%}</div></td><td width="50%" valign="top" style="width:50%;padding:14px 12px 0 0;"><div style="font-size:10px;line-height:14px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:""" + MUTED + r""";">Factuuradres</div><div class="keep-white" style="font-size:12px;line-height:18px;color:#D6D6D9;padding-top:4px;">{%- if billing_address == blank or billing_address.address1 == shipping_address.address1 and billing_address.zip == shipping_address.zip -%}Gelijk aan bezorgadres{%- else -%}{{ billing_address.name }}<br><span style="color:#909194;">{{ billing_address.address1 }}{% if billing_address.address2 and billing_address.address2 != '' %} {{ billing_address.address2 }}{% endif %}, {{ billing_address.zip }} {{ billing_address.city }}{% if billing_address.country != "Nederland" and billing_address.country != "Netherlands" %}, {{ billing_address.country }}{% endif %}</span>{%- endif -%}</div></td></tr><tr><td width="50%" valign="top" style="width:50%;padding:14px 12px 0 0;"><div style="font-size:10px;line-height:14px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:""" + MUTED + r""";">Verzendmethode</div><div class="keep-white" style="font-size:12px;line-height:18px;color:#D6D6D9;padding-top:4px;">{{ shipping_method.title | default: "-" }}</div></td><td width="50%" valign="top" style="width:50%;padding:14px 12px 0 0;"><div style="font-size:10px;line-height:14px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:""" + MUTED + r""";">Betaalmethode</div><div class="keep-white" style="font-size:12px;line-height:18px;color:#D6D6D9;padding-top:4px;">{%- if betaling != "" -%}{{ betaling }}{%- else -%}-{%- endif -%}</div></td></tr></table>
</td></tr></table>
</td></tr>

<tr><td class="px" align="center" style="padding:40px 48px 8px;">""" + beeld("notitie", 335, 178, "Fijn dat je voor HÏ Grip kiest. Vraag over je maat of je bestelling? Mail ons op info@higrip.nl, dan helpen we je verder. Vriendelijke groet, Lars Cretz, co-founder HÏ Grip", "mailto:info@higrip.nl") + r"""
<div style="padding-top:22px;">""" + beeld("knop-instagram", 236, 44, "Volg ons op Instagram", IG) + r"""</div>
</td></tr></table>
</td></tr>

<tr><td class="px" style="padding:16px 24px 0;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="usp" style="border-top:1px solid """ + LINE + r""";border-bottom:1px solid """ + LINE + r""";"><tr>
<td width="33%" align="center" style="width:33%;">""" + beeld("usp-verzending", 110, 84, "1 werkdag verzonden", SITE + "/pages/verzendbeleid") + r"""</td><td width="34%" align="center" style="width:34%;border-left:1px solid """ + LINE + r""";">""" + beeld("usp-retour", 110, 84, "30 dagen retour", SITE + "/pages/retourbeleid") + r"""</td><td width="33%" align="center" style="width:33%;border-left:1px solid """ + LINE + r""";">""" + beeld("usp-vragen", 110, 84, "Vragen? info@higrip.nl", "mailto:info@higrip.nl") + r"""</td>
</tr></table>
</td></tr>

<tr><td class="px" style="padding:40px 24px 0;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid """ + LINE + r""";"><tr><td align="center" style="padding:32px 16px 40px;font-family:""" + FONT + r""";">
<table role="presentation" align="center" cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;"><tr><td style="padding:0 7px;">""" + beeld("link-verzending", 69, 20, "Verzending", SITE + "/pages/verzendbeleid") + r"""</td><td style="padding:0 7px;">""" + beeld("link-retour", 77, 20, "Retourneren", SITE + "/pages/retourbeleid") + r"""</td><td style="padding:0 7px;">""" + beeld("link-bestelling", 86, 20, "Mijn bestelling", "{{ order_status_url }}") + r"""</td></tr></table>
<table role="presentation" align="center" cellpadding="0" cellspacing="0" border="0" style="margin:8px auto 0;"><tr><td style="padding:0 7px;">""" + beeld("link-mail", 84, 20, "info@higrip.nl", "mailto:info@higrip.nl") + r"""</td><td style="padding:0 7px;">""" + beeld("link-instagram", 65, 20, "Instagram", IG) + r"""</td><td style="padding:0 7px;">""" + beeld("link-site", 49, 20, "higrip.nl", SITE) + r"""</td></tr></table>
<div style="padding-top:20px;">""" + beeld("voet", 335, 76, "Ga door waar anderen stoppen. Je ontvangt deze e-mail omdat je een bestelling plaatste op higrip.nl. HÏ Grip") + r"""</div>
</td></tr></table>
</td></tr>
</table>
</td></tr></table>
</body></html>"""
    body = body.replace('\\"', '"')
    html = head(BG, css).replace('<body style="margin:0;padding:0;background-color:' + BG + ';"', '<body style="margin:0;padding:0;background-color:' + BG + ';background-image:url(' + ASSETS + 'higrip-orderbev-achtergrond.jpg);"') + body
    return vergrendel(html)


if __name__ == "__main__":
    (OUT / "optie-d-statusbalk.html").write_text(optie_d(), encoding="utf-8")
    print("geschreven optie-d-statusbalk.html")
