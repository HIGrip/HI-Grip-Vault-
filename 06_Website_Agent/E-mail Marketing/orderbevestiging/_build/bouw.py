# Bouwt de drie orderbevestiging-opties uit gedeelde Liquid-logica.
# Gebruik: python bouw.py  -> schrijft ../optie-*.html
from pathlib import Path

OUT = Path(__file__).resolve().parent.parent
LOGO = "https://cdn.shopify.com/s/files/1/0935/0918/9959/files/HI_Grip_logo_high_res.png?width=96"
IG = "https://www.instagram.com/higrip.nl/"
SITE = "https://www.higrip.nl"
FONT = "'Poppins',Arial,Helvetica,sans-serif"

# ---------- gedeelde Liquid (geen opmaak) ----------
PRELUDE = r"""{%- comment -%} HÏ Grip orderbevestiging. Feiten: 00_Brand_Core/Feiten & Actuele Staat.md. [CHECK] TikTok-URL en vestigingsadres staan niet in de vault; shop.email en shop.address zijn geen gedocumenteerde notificatievariabelen. {%- endcomment -%}
{%- assign maanden = "januari,februari,maart,april,mei,juni,juli,augustus,september,oktober,november,december" | split: "," -%}
{%- assign m_idx = created_at | date: "%-m" | minus: 1 -%}
{%- capture besteldatum -%}{{ created_at | date: "%-d" }} {{ maanden[m_idx] }} {{ created_at | date: "%Y" }}{%- endcapture -%}
{%- assign delivery_types = delivery_agreements | map: 'delivery_method_type' | uniq | join: ',' -%}
{%- assign is_pickup = false -%}{%- if delivery_types contains 'pick-up' -%}{%- assign is_pickup = true -%}{%- endif -%}
{%- assign is_local = false -%}{%- if delivery_types contains 'local' -%}{%- assign is_local = true -%}{%- endif -%}
{%- assign is_shipping = true -%}{%- if is_pickup or is_local -%}{%- assign is_shipping = false -%}{%- endif -%}
{%- assign voornaam = shipping_address.first_name | default: billing_address.first_name -%}
{%- assign codes = '' -%}{%- for d in discount_applications -%}{%- if d.type == 'discount_code' -%}{%- if codes != '' -%}{%- assign codes = codes | append: ', ' -%}{%- endif -%}{%- assign codes = codes | append: d.title -%}{%- endif -%}{%- endfor -%}
{%- assign regels_totaal = 0 -%}{%- for line in subtotal_line_items -%}{%- assign regels_totaal = regels_totaal | plus: line.final_line_price -%}{%- endfor -%}
{%- assign orderkorting = regels_totaal | minus: subtotal_price -%}
{%- assign betaling = '' -%}{%- for t in transactions -%}{%- if betaling == '' -%}{%- if t.status == 'success' or t.status == 'pending' -%}{%- if t.kind == 'sale' or t.kind == 'authorization' or t.kind == 'capture' -%}{%- capture betaling -%}{{ t.gateway_display_name }}{% if t.payment_details.credit_card_last_four_digits and t.payment_details.credit_card_last_four_digits != '' %} eindigend op {{ t.payment_details.credit_card_last_four_digits }}{% endif %}{%- endcapture -%}{%- endif -%}{%- endif -%}{%- endif -%}{%- endfor -%}
"""

INTRO = r"""{% if voornaam != blank %}Hoi {{ voornaam }}, je{% else %}Je{% endif %} bestelling is rond. {% if is_pickup %}Je koos voor afhalen: {{ shipping_method.title }}.{% elsif is_local %}Je koos voor lokale levering.{% else %}Binnen 1 werkdag gaat hij de deur uit.{% endif %}"""

PREHEADER = r"""Bestelling {{ name }} van {{ besteldatum }}. {% if is_shipping %}Binnen 1 werkdag verzonden.{% endif %} 30 dagen retour."""


def line_meta(muted):
    return r"""{%- unless line.variant.title == blank or line.variant.title == 'Default Title' -%}<div style="font-size:13px;line-height:20px;color:""" + muted + r""";">Maat {{ line.variant.title }}</div>{%- endunless -%}
<div style="font-size:13px;line-height:20px;color:""" + muted + r""";">Aantal {{ line.quantity }}</div>
{%- if line.groups.size > 0 -%}<div style="font-size:13px;line-height:20px;color:""" + muted + r""";">Onderdeel van {{ line.groups.first.display_title }}</div>{%- endif -%}
{%- for a in line.discount_allocations -%}{%- if a.discount_application.target_selection != 'all' -%}<div style="font-size:13px;line-height:20px;color:""" + muted + r""";">{{ a.discount_application.title }} (&minus;{{ a.amount | money }})</div>{%- endif -%}{%- endfor -%}"""


def line_title(ink):
    return r"""<div style="font-size:15px;line-height:22px;font-weight:600;color:""" + ink + r""";">{{ line.product.title | default: line.title }}</div>"""


def line_price(ink, muted):
    return r"""{%- if line.original_line_price != line.final_line_price -%}<div style="font-size:13px;line-height:20px;color:""" + muted + r""";text-decoration:line-through;">{{ line.original_line_price | money }}</div>{%- endif -%}<div style="font-size:15px;line-height:22px;font-weight:600;color:""" + ink + r""";white-space:nowrap;">{{ line.final_line_price | money }}</div>"""


def totals(ink, muted, line, big=26):
    row = lambda label, val, extra="": (
        '<tr><td style="padding:6px 0;font-size:14px;line-height:20px;color:' + muted + ';' + extra + '">' + label +
        '</td><td align="right" style="padding:6px 0;font-size:14px;line-height:20px;color:' + ink + ';white-space:nowrap;' + extra + '">' + val + '</td></tr>')
    return ('<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">'
            + row("Subtotaal", "{{ regels_totaal | money }}")
            + "{% if orderkorting > 0 %}" + row("Korting{% if codes != '' %} ({{ codes }}){% endif %}", "&minus;{{ orderkorting | money }}") + "{% endif %}"
            + row("{% if is_pickup %}Afhalen{% else %}Verzending{% endif %}", "{% if shipping_price == 0 %}Gratis{% else %}{{ shipping_price | money }}{% endif %}")
            + '<tr><td colspan="2" style="padding-top:10px;border-bottom:1px solid ' + line + ';font-size:0;line-height:0;">&nbsp;</td></tr>'
            + '<tr><td style="padding:14px 0 0;font-size:16px;line-height:24px;font-weight:600;color:' + ink + ';">Totaal</td>'
            + '<td align="right" style="padding:14px 0 0;font-size:' + str(big) + 'px;line-height:' + str(big + 6) + 'px;font-weight:800;color:' + ink + ';white-space:nowrap;">{{ total_price | money }}</td></tr>'
            + '{% if tax_price > 0 %}<tr><td colspan="2" align="right" style="padding:2px 0 0;font-size:12px;line-height:18px;color:' + muted + ';">incl. {{ tax_price | money }} btw</td></tr>{% endif %}'
            + "</table>")


def delivery(ink, muted, link):
    return r"""<div style="font-size:12px;line-height:18px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:""" + muted + r""";padding-bottom:6px;">{% if is_pickup %}Afhalen{% elsif is_local %}Lokale levering{% else %}Bezorging{% endif %}</div>
<div style="font-size:14px;line-height:22px;color:""" + ink + r""";">
{%- if is_pickup -%}{{ shipping_method.title }}
{%- elsif is_local -%}{{ shipping_address | format_address }}{% if delivery_instructions != blank %}<br>{{ delivery_instructions }}{% endif %}
{%- else -%}{{ shipping_address | format_address }}<br><span style="color:""" + muted + r""";">{{ shipping_method.title }}</span>{%- endif -%}
</div>"""


def payment(ink, muted):
    return r"""{%- if betaling != '' -%}<div style="font-size:12px;line-height:18px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:""" + muted + r""";padding-bottom:6px;">Betaling</div>
<div style="font-size:14px;line-height:22px;color:""" + ink + r""";">{{ betaling }}</div>{%- endif -%}"""


def facts(ink, muted, link):
    return (r"""{% if is_shipping %}<a href=\"""" + SITE + r"""/pages/verzendbeleid" style="color:""" + link + r""";text-decoration:underline;">Binnen 1 werkdag verzonden</a><span style="color:""" + muted + r""";">&nbsp;&nbsp;&middot;&nbsp;&nbsp;</span>{% endif %}<a href=\"""" + SITE + r"""/pages/retourbeleid" style="color:""" + link + r""";text-decoration:underline;">30 dagen retour</a>""").replace('\\"', '"')


def button(bg, fg, label="Bekijk je bestelling", width=260):
    return (
        '<!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="{{ order_status_url }}" '
        'style="height:52px;v-text-anchor:middle;width:' + str(width) + 'px;" arcsize="50%" stroke="f" fillcolor="' + bg + '"><w:anchorlock/>'
        '<center style="color:' + fg + ';font-family:Arial,sans-serif;font-size:15px;font-weight:bold;">' + label + ' &rsaquo;</center></v:roundrect><![endif]-->'
        '<!--[if !mso]><!--><a href="{{ order_status_url }}" class="btn" style="display:inline-block;background-color:' + bg + ';color:' + fg +
        ';font-family:' + FONT + ';font-size:15px;line-height:20px;font-weight:600;text-decoration:none;border-radius:999px;padding:16px 30px;mso-hide:all;">'
        + label + '&nbsp;&nbsp;<span style="font-size:18px;line-height:20px;">&rsaquo;</span></a><!--<![endif]-->')


def coin(size=36):
    return ('<table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr><td width="' + str(size) + '" height="' + str(size) +
            '" align="center" valign="middle" bgcolor="#FFFFFF" style="width:' + str(size) + 'px;height:' + str(size) + 'px;border-radius:50%;background-color:#FFFFFF;">'
            '<img src="' + LOGO + '" width="' + str(size - 10) + '" height="' + str(size - 10) + '" alt="HÏ Grip" style="display:block;border:0;width:' + str(size - 10) + 'px;height:' + str(size - 10) + 'px;"></td>'
            '<td style="padding-left:10px;font-family:' + FONT + ';font-size:17px;line-height:20px;font-weight:600;color:#FFFFFF;letter-spacing:-.01em;" class="keep-white">HÏ Grip</td></tr></table>')


def lockup_dark_on_light():
    return ('<table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr><td><img src="' + LOGO + '" width="28" height="28" alt="HÏ Grip" style="display:block;border:0;width:28px;height:28px;"></td>'
            '<td style="padding-left:8px;font-family:' + FONT + ';font-size:16px;line-height:20px;font-weight:600;color:#0A0A0A;" class="lt-tx">HÏ Grip</td></tr></table>')


def footer_links(color):
    return ('<a href="mailto:info@higrip.nl" style="color:' + color + ';text-decoration:none;">info@higrip.nl</a>'
            '<span style="color:' + color + ';">&nbsp;&nbsp;&middot;&nbsp;&nbsp;</span>'
            '<a href="' + IG + '" style="color:' + color + ';text-decoration:none;">Instagram</a>'
            '<span style="color:' + color + ';">&nbsp;&nbsp;&middot;&nbsp;&nbsp;</span>'
            '<a href="' + SITE + '" style="color:' + color + ';text-decoration:none;">higrip.nl</a>'
            '{%- comment -%} [CHECK] TikTok-link toevoegen zodra de URL in het feitenbestand staat. {%- endcomment -%}')


def head(bodybg, extra_css=""):
    return r"""<!DOCTYPE html>
<html lang="nl" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="x-apple-disable-message-reformatting">
<meta name="format-detection" content="telephone=no,address=no,email=no,date=no">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<title>Bestelling {{ name }} bevestigd | HÏ Grip</title>
<!--[if mso]><noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript><style>body,table,td,a,div,span{font-family:Arial,Helvetica,sans-serif !important;}</style><![endif]-->
<!--[if !mso]><!--><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap" rel="stylesheet"><!--<![endif]-->
<style>
body{margin:0;padding:0;width:100%!important;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;}
table{border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;}
img{border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;}
a[x-apple-data-detectors]{color:inherit!important;text-decoration:none!important;}
@media only screen and (max-width:620px){
.wrap{width:100%!important;}
.px{padding-left:20px!important;padding-right:20px!important;}
.stack{display:block!important;width:100%!important;}
.stack-gap{padding-top:22px!important;padding-left:0!important;}
.h1{font-size:32px!important;line-height:36px!important;}
.btn{display:block!important;text-align:center!important;}
.hide-m{display:none!important;}
}
""" + extra_css + r"""
</style>
</head>
<body style="margin:0;padding:0;background-color:""" + bodybg + r""";" bgcolor=\"""" .replace('\\"', '"') + bodybg + r"""">
"""


def preheader():
    return ('<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;color:transparent;opacity:0;">'
            + PREHEADER + '&#847; &zwnj; &nbsp; &#847; &zwnj; &nbsp; &#847; &zwnj; &nbsp; &#847; &zwnj; &nbsp;</div>')


DARK_KEEP = """:root{color-scheme:light;supported-color-schemes:light;}
.lt-bg, [data-ogsc] .lt-bg, [data-ogsb] .lt-bg{background-color:#FFFFFF!important;}
.lt-tx, [data-ogsc] .lt-tx, [data-ogsb] .lt-tx{color:#0A0A0A!important;}
.keep-white, [data-ogsc] .keep-white, [data-ogsb] .keep-white{color:#FFFFFF!important;}
"""

INK, ONYX, CARBON, MUTED_LIGHT, LINE_LIGHT = "#0A0A0A", "#111111", "#1A1A1A", "#55565A", "#E4E4E6"
# Op wit: lopende tekst in Onyx/Carbon; secundaire tekst #55565A (zelfde grijsfamilie, 7,4:1 op wit). Titanium alleen op zwart.
TITANIUM, VOLT, WHITE = "#909194", "#CCFF00", "#FFFFFF"


def lines_small(ink, muted, line, img=64, imgbg="#F4F4F5"):
    return (r"""{%- for line in subtotal_line_items -%}
<tr><td style="padding:16px 0;border-top:1px solid """ + line + r""";" class="lt-ln">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
<td width=\"""" + str(img) + r"""" valign="top" style="width:""" + str(img) + r"""px;">{% if line.image %}<img src="{{ line.image | img_url: '160x160' }}" width=\"""" + str(img) + r"""" height=\"""" + str(img) + r"""" alt="{{ line.product.title | default: line.title | escape }}" style="display:block;width:""" + str(img) + r"""px;height:""" + str(img) + r"""px;border-radius:10px;background-color:""" + imgbg + r""";object-fit:cover;">{% endif %}</td>
<td valign="top" style="padding-left:16px;">""" + line_title(ink) + line_meta(muted) + r"""</td>
<td valign="top" align="right" style="padding-left:12px;">""" + line_price(ink, muted) + r"""</td>
</tr></table></td></tr>
{%- endfor -%}""").replace('\\"', '"')


# ---------- OPTIE A: Bonnetje ----------
def optie_a():
    css = DARK_KEEP
    body = PRELUDE + preheader() + r"""
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#FFFFFF" class="lt-bg" style="background-color:#FFFFFF;">
<tr><td align="center" style="padding:0;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" class="wrap" style="width:600px;max-width:600px;font-family:""" + FONT + r""";">

<tr><td class="px" style="padding:40px 48px 0;">""" + lockup_dark_on_light() + r"""</td></tr>

<tr><td class="px" style="padding:48px 48px 0;">
<div class="h1 lt-tx" style="font-size:44px;line-height:48px;font-weight:800;letter-spacing:-.02em;color:""" + INK + r""";">Bestelling {{ name }}</div>
<div class="lt-mu" style="font-size:14px;line-height:20px;color:""" + MUTED_LIGHT + r""";padding-top:6px;">Geplaatst op {{ besteldatum }}</div>
<div class="lt-tx" style="font-size:16px;line-height:26px;color:""" + CARBON + r""";padding-top:16px;">""" + INTRO + r"""</div>
</td></tr>

<tr><td class="px" style="padding:36px 48px 0;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-bottom:2px dashed """ + INK + r""";" class="lt-ln">
<tr><td style="border-top:2px dashed """ + INK + r""";padding:0;font-size:0;line-height:0;" class="lt-ln">&nbsp;</td></tr>
""" + lines_small(ONYX, MUTED_LIGHT, LINE_LIGHT) + r"""
<tr><td style="padding:16px 0 22px;border-top:1px solid """ + LINE_LIGHT + r""";" class="lt-ln">""" + totals(INK, MUTED_LIGHT, LINE_LIGHT, 30) + r"""</td></tr>
</table>
</td></tr>

<tr><td class="px" style="padding:32px 48px 0;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
<td class="stack" width="50%" valign="top" style="width:50%;padding-right:16px;">""" + delivery(ONYX, MUTED_LIGHT, INK) + r"""</td>
<td class="stack stack-gap" width="50%" valign="top" style="width:50%;padding-left:16px;">""" + payment(ONYX, MUTED_LIGHT) + r"""</td>
</tr></table>
</td></tr>

<tr><td class="px" style="padding:36px 48px 48px;">""" + button(INK, WHITE) + r"""
<div class="lt-mu" style="font-size:13px;line-height:22px;color:""" + MUTED_LIGHT + r""";padding-top:18px;">""" + facts(ONYX, MUTED_LIGHT, ONYX) + r"""</div>
</td></tr>

<tr><td style="padding:0 12px 12px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#0A0A0A" style="background-color:#0A0A0A;border-radius:18px;border-collapse:separate;">
<tr><td class="px" style="padding:32px 36px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
<td valign="middle">""" + coin(36) + r"""</td>
</tr></table>
<div style="font-size:20px;line-height:26px;font-weight:800;color:#FFFFFF;padding-top:22px;"><span class="keep-white" style="color:#FFFFFF;">Ga door waar anderen stoppen</span><span style="color:""" + VOLT + r""";">.</span></div>
<div style="font-size:12px;line-height:20px;color:""" + TITANIUM + r""";padding-top:22px;">""" + footer_links(TITANIUM) + r"""</div>
</td></tr></table>
</td></tr>

</table>
</td></tr></table>
</body></html>"""
    return head("#FFFFFF", css) + body


# ---------- OPTIE B: Dark hero ----------
def optie_b():
    css = DARK_KEEP + """.hero{background-color:#0A0A0A;background-image:radial-gradient(ellipse 70% 60% at 85% 0%,rgba(204,255,0,.22) 0%,rgba(204,255,0,0) 70%),radial-gradient(circle,rgba(255,255,255,.05) 1px,transparent 1.3px);background-size:100% 100%,15px 15px;}
"""
    body = PRELUDE + preheader() + r"""
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#0A0A0A" style="background-color:#0A0A0A;">
<tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" class="wrap" style="width:600px;max-width:600px;font-family:""" + FONT + r""";">

<tr><td class="hero px" bgcolor="#0A0A0A" style="padding:40px 44px 44px;">
""" + coin(36) + r"""
<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:56px;border-collapse:separate;"><tr><td style="border:1px solid #2A2A2A;border-radius:999px;padding:6px 14px 6px 12px;font-size:12px;line-height:16px;font-weight:600;color:#FFFFFF;" class="keep-white"><span style="color:""" + VOLT + r""";font-size:14px;">&#9679;</span>&nbsp; Bevestigd &middot; {{ besteldatum }}</td></tr></table>
<div class="h1 keep-white" style="font-size:46px;line-height:50px;font-weight:800;letter-spacing:-.025em;color:#FFFFFF;padding-top:20px;">Bestelling<br>{{ name }} staat.</div>
<div style="font-size:16px;line-height:26px;color:""" + TITANIUM + r""";padding-top:16px;max-width:440px;">""" + INTRO + r"""</div>
<div style="padding-top:30px;">""" + button(WHITE, INK) + r"""</div>
</td></tr>

<tr><td style="padding:0 16px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#FFFFFF" class="lt-bg" style="background-color:#FFFFFF;border-radius:20px;border-collapse:separate;">
<tr><td class="px" style="padding:30px 32px 8px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
<td style="font-size:12px;line-height:18px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:""" + MUTED_LIGHT + r""";" class="lt-mu">Bestelling</td>
<td align="right" style="font-size:15px;line-height:18px;font-weight:600;color:""" + INK + r""";" class="lt-tx">{{ name }}</td></tr></table>
</td></tr>
<tr><td class="px" style="padding:12px 32px 0;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">""" + lines_small(ONYX, MUTED_LIGHT, LINE_LIGHT) + r"""
<tr><td style="padding:16px 0 24px;border-top:1px solid """ + LINE_LIGHT + r""";" class="lt-ln">""" + totals(INK, MUTED_LIGHT, LINE_LIGHT, 26) + r"""</td></tr></table></td></tr>
<tr><td class="px" bgcolor="#F4F4F5" style="background-color:#F4F4F5;padding:26px 32px;border-radius:0 0 20px 20px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
<td class="stack" width="55%" valign="top" style="width:55%;padding-right:14px;">""" + delivery(ONYX, MUTED_LIGHT, INK) + r"""</td>
<td class="stack stack-gap" width="45%" valign="top" style="width:45%;padding-left:14px;">""" + payment(ONYX, MUTED_LIGHT) + r"""</td>
</tr></table>
</td></tr>
</table>
</td></tr>

<tr><td class="px" style="padding:36px 44px 44px;">
<div style="font-size:13px;line-height:22px;color:#FFFFFF;" class="keep-white">""" + facts(WHITE, TITANIUM, WHITE) + r"""</div>
<div style="font-size:20px;line-height:26px;font-weight:800;letter-spacing:-.01em;color:#FFFFFF;padding-top:28px;" class="keep-white">Ga door waar anderen stoppen<span style="color:""" + VOLT + r""";">.</span></div>
<div style="font-size:12px;line-height:20px;color:""" + TITANIUM + r""";padding-top:14px;">""" + footer_links(TITANIUM) + r"""</div>
</td></tr>

</table>
</td></tr></table>
</body></html>"""
    return head("#0A0A0A", css) + body


# ---------- OPTIE C: Raster ----------
def optie_c():
    css = DARK_KEEP + """.raster{background-color:#0A0A0A;background-image:radial-gradient(circle,#FFFFFF 1.6px,transparent 1.9px);background-size:12px 12px;background-position:6px 6px;}
@media only screen and (max-width:620px){.card{display:block!important;width:100%!important;padding:0 0 16px 0!important;}.cimg{width:100%!important;height:auto!important;}.raster-cell{width:96px!important;}.strip{padding:14px 12px!important;}.strip div+div{font-size:14px!important;}}
"""
    cell = lambda label, val, extra="": ('<td class="strip" valign="top" style="padding:18px 20px;border-left:1px solid ' + INK + ';' + extra + '">'
                                           '<div class="lt-mu" style="font-size:11px;line-height:16px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:' + MUTED_LIGHT + ';">' + label + '</div>'
                                           '<div class="lt-tx" style="font-size:17px;line-height:24px;font-weight:600;color:' + INK + ';padding-top:4px;">' + val + '</div></td>')
    cards = r"""{%- for line in subtotal_line_items -%}
{%- assign col = forloop.index0 | modulo: 2 -%}
{%- if col == 0 -%}<tr>{%- endif -%}
<td class="card" width="50%" valign="top" style="width:50%;padding:0 {% if col == 0 %}8px{% else %}0{% endif %} 16px {% if col == 1 %}8px{% else %}0{% endif %};">
{% if line.image %}<img class="cimg" src="{{ line.image | img_url: '560x560' }}" width="252" height="252" alt="{{ line.product.title | default: line.title | escape }}" style="display:block;width:252px;height:252px;background-color:#F4F4F5;object-fit:cover;">{% endif %}
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:2px solid """ + INK + r""";" class="lt-ln"><tr>
<td valign="top" style="padding-top:12px;">""" + line_title(ONYX) + line_meta(MUTED_LIGHT) + r"""</td>
<td valign="top" align="right" style="padding:12px 0 0 10px;">""" + line_price(ONYX, MUTED_LIGHT) + r"""</td></tr></table>
</td>
{%- if col == 1 or forloop.last -%}{%- if col == 0 -%}<td class="card hide-m" width="50%" style="width:50%;padding-left:8px;">&nbsp;</td>{%- endif -%}</tr>{%- endif -%}
{%- endfor -%}"""
    body = PRELUDE + preheader() + r"""
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#FFFFFF" class="lt-bg" style="background-color:#FFFFFF;">
<tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" class="wrap" style="width:600px;max-width:600px;font-family:""" + FONT + r""";">

<tr><td bgcolor="#0A0A0A" style="background-color:#0A0A0A;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
<td class="px" valign="top" style="padding:36px 0 40px 40px;">
""" + coin(36) + r"""
<div class="h1 keep-white" style="font-size:42px;line-height:46px;font-weight:800;letter-spacing:-.025em;color:#FFFFFF;padding-top:44px;">Bestelling<br>bevestigd.</div>
</td>
<td class="raster raster-cell" width="190" bgcolor="#0A0A0A" style="width:190px;">&nbsp;</td>
</tr></table>
</td></tr>

<tr><td style="padding:0;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-bottom:1px solid """ + INK + r""";" class="lt-ln"><tr>
""" + cell("Bestelling", "{{ name }}", "border-left:0;") + cell("Datum", "{{ besteldatum }}") + cell("Artikelen", "{{ item_count }}") + r"""
</tr></table>
</td></tr>

<tr><td class="px" style="padding:28px 40px 0;">
<div class="lt-tx" style="font-size:16px;line-height:26px;color:""" + CARBON + r""";padding-bottom:24px;">""" + INTRO + r"""</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">""" + cards + r"""</table>
</td></tr>

<tr><td class="px" style="padding:8px 40px 0;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
<td class="stack" width="50%" valign="top" style="width:50%;padding:18px 16px 18px 0;border-top:2px solid """ + INK + r""";" >""" + delivery(ONYX, MUTED_LIGHT, INK) + "<div style=\"height:18px;line-height:18px;font-size:0;\">&nbsp;</div>" + payment(ONYX, MUTED_LIGHT) + r"""</td>
<td class="stack stack-gap" width="50%" valign="top" style="width:50%;padding:12px 0 18px 16px;border-top:2px solid """ + INK + r""";">""" + totals(INK, MUTED_LIGHT, LINE_LIGHT, 26) + r"""</td>
</tr></table>
<div style="padding:28px 0 40px;">""" + button(INK, WHITE) + r"""
<div class="lt-mu" style="font-size:13px;line-height:22px;color:""" + MUTED_LIGHT + r""";padding-top:18px;">""" + facts(ONYX, MUTED_LIGHT, ONYX) + r"""</div></div>
</td></tr>

<tr><td bgcolor="#0A0A0A" class="px" style="background-color:#0A0A0A;padding:30px 40px;">
<div class="keep-white" style="font-size:18px;line-height:24px;font-weight:800;color:#FFFFFF;">Ga door waar anderen stoppen.</div>
<div style="font-size:12px;line-height:20px;color:""" + TITANIUM + r""";padding-top:12px;">""" + footer_links(TITANIUM) + r"""</div>
</td></tr>

</table>
</td></tr></table>
</body></html>"""
    return head("#FFFFFF", css) + body


if __name__ == "__main__":
    for naam, fn in [("optie-a-bonnetje.html", optie_a), ("optie-b-dark-hero.html", optie_b), ("optie-c-raster.html", optie_c)]:
        (OUT / naam).write_text(fn(), encoding="utf-8")
        print("geschreven", naam)
