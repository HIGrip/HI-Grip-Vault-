# -*- coding: utf-8 -*-
"""Genereert mail.html voor 3 concepten (A, B, C) uit gedeelde bouwstenen. Eén kopschaal, één bodyschaal, één spacing-systeem.
Gebruik: python gen_mails_v2_20261120.py <uitvoermap>   (verwacht <uitvoermap>/<A|B|C>/assets/*)"""
import sys, os

FILL = lambda s: '<span class="hg-fill">[INVUL: %s]</span>' % s
F = "'Poppins',Arial,Helvetica,sans-serif"
VOLT = "#CCFF00"

CSS = """
 body{margin:0;padding:0;background:%(bg)s;-webkit-text-size-adjust:100%%;}
 table{border-collapse:collapse;} img{border:0;display:block;} a{text-decoration:none;}
 .hg-bg,[data-ogsb] .hg-bg,[data-ogsc] .hg-bg{background-color:%(bg)s !important;}
 .hg-fill{border:1.5px dashed %(dash)s;padding:1px 6px;border-radius:6px;font-weight:600;white-space:nowrap;}
 @media (max-width:620px){
  .hg-w{width:100%% !important;}
  .hg-p{padding-left:24px !important;padding-right:24px !important;}
  .hg-h1{font-size:50px !important;line-height:48px !important;}
  .hg-h2{font-size:26px !important;line-height:30px !important;}
  .hg-code{font-size:36px !important;line-height:44px !important;}
  .hg-stack{display:block !important;width:100%% !important;padding:0 0 6px 0 !important;}
  .hg-fit{width:100%% !important;height:auto !important;}
 }
"""


def head(title, pre, bg, dash):
    return ("""<!doctype html>
<html lang="nl" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="dark light"><meta name="supported-color-schemes" content="dark light">
<title>%s</title>
<!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;1,900&display=swap" rel="stylesheet">
<style>%s</style>
</head>
<body class="hg-bg" style="margin:0;padding:0;background:%s;">
<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;color:%s;">%s&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;</div>
<table role="presentation" width="100%%" cellpadding="0" cellspacing="0" border="0" bgcolor="%s" class="hg-bg" style="background:%s;"><tr><td align="center">
<table role="presentation" class="hg-w hg-bg" width="640" cellpadding="0" cellspacing="0" border="0" bgcolor="%s" style="width:640px;max-width:640px;background:%s;font-family:%s;">
""" % (title, CSS % dict(bg=bg, dash=dash), bg, bg, pre, bg, bg, bg, bg, F))


FOOT = "</table>\n</td></tr></table>\n</body>\n</html>\n"


def h1(txt, color, extra=""):
    return ("<h1 class=\"hg-h1\" style=\"margin:%sfont:900 italic 76px/72px %s;letter-spacing:-.03em;word-spacing:.14em;color:%s;text-transform:uppercase;\">%s<span style=\"color:%s;\">.</span></h1>"
            % (extra or "0;", F, color, txt, VOLT))


def h2(txt, color, mt="0"):
    return ("<h2 class=\"hg-h2\" style=\"margin:%s 0 0;font:900 italic 28px/32px %s;letter-spacing:-.02em;color:%s;text-transform:uppercase;\">%s<span style=\"color:%s;\">.</span></h2>"
            % (mt, F, color, txt, VOLT))


def p(txt, color, mt=16, size=17, lh=27, weight=400):
    return "<p style=\"margin:%dpx 0 0;font:%d %dpx/%dpx %s;color:%s;\">%s</p>" % (mt, weight, size, lh, F, color, txt)


def code(color, mt=12):
    return ("<div class=\"hg-code\" style=\"margin-top:%dpx;font:900 italic 52px/60px %s;letter-spacing:.01em;color:%s;white-space:nowrap;\">%s</div>"
            % (mt, F, color, FILL("kortingscode")))


def details(color, rule, mt=24, lead=None):
    def td(pr):
        return 'class="hg-stack" valign="top" width="50%%" style="padding:16px %s 0 0;font:600 17px/24px %s;color:%s;"' % (pr, F, color)
    return ('<table role="presentation" width="100%%" cellpadding="0" cellspacing="0" border="0" style="margin-top:%dpx;border-top:1px solid %s;"><tr>'
            '<td %s>%s korting</td><td %s>Geldig tot %s</td></tr></table>'
            % (mt, rule, td("12px"), FILL("percentage of bedrag"), td("0"), FILL("einddatum")))


def button(bg, fg, chev_bg, chev_fg, mt=32):
    link = "[INVUL: link naar de webshop]"
    vml = ("<!--[if mso]><v:roundrect xmlns:v=\"urn:schemas-microsoft-com:vml\" href=\"%s\" style=\"height:64px;v-text-anchor:middle;width:560px;\" arcsize=\"50%%\" stroke=\"f\" fillcolor=\"%s\">"
           "<center style=\"color:%s;font-family:Arial,sans-serif;font-size:17px;font-weight:bold;\">Shop met jouw code &#8250;</center></v:roundrect><![endif]-->" % (link, bg, fg))
    return (vml + "<!--[if !mso]><!--><div style=\"margin-top:%dpx;\"><a href=\"%s\" style=\"display:block;background:%s;border-radius:40px;color:%s;\">"
            "<table role=\"presentation\" width=\"100%%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\"><tr>"
            "<td style=\"padding:0 0 0 32px;height:64px;font:600 17px/64px %s;color:%s;\">Shop met jouw code</td>"
            "<td width=\"64\" align=\"center\" style=\"width:64px;padding:0 8px 0 0;\"><table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" align=\"center\"><tr>"
            "<td width=\"44\" height=\"44\" align=\"center\" valign=\"middle\" style=\"width:44px;height:44px;background:%s;border-radius:22px;font:700 24px/42px Arial,sans-serif;color:%s;\">&#8250;</td></tr></table></td>"
            "</tr></table></a></div><!--<![endif]-->" % (mt, link, bg, fg, F, fg, chev_bg, chev_fg))


def logo(emb, color):
    return ("<table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\"><tr>"
            "<td valign=\"middle\" style=\"padding-right:10px;\"><img src=\"assets/%s\" width=\"26\" alt=\"\" style=\"display:block;width:26px;height:auto;\"></td>"
            "<td valign=\"middle\" style=\"font:900 italic 20px/24px %s;color:%s;letter-spacing:-.02em;\">H&Iuml; GRIP</td></tr></table>" % (emb, F, color))


def fullimg(src, alt):
    return "<img class=\"hg-fit\" src=\"assets/%s\" width=\"640\" alt=\"%s\" style=\"display:block;width:100%%;height:auto;\">" % (src, alt)


def row(inner, cls="hg-bg hg-p", bg="#0A0A0A", pad="0 36px", extra=""):
    return "<tr><td class=\"%s\" bgcolor=\"%s\" style=\"padding:%s;%s\">%s</td></tr>\n" % (cls, bg, pad, extra, inner)


def imgrow(src, alt, bg):
    return "<tr><td class=\"hg-bg\" bgcolor=\"%s\" style=\"padding:0;line-height:0;font-size:0;\">%s</td></tr>\n" % (bg, fullimg(src, alt))


ALT_HERO = "Tennisser in actie op een gravelbaan onder een bewolkte hemel."
ALT_DETAIL = "Zwarte Performance Grip Socks 2.0 in witte tennisschoenen op gravel, van bovenaf in zijlicht."
ALT_PACK = "Drie paar witte Performance Grip Socks 2.0."
PROOF = "3500+ sporters kiezen voor H&Iuml; Grip. <span style=\"font-weight:400;color:%s;\">Beoordeeld met 4,6 op Trustpilot.</span>"
INTRO = "Je meldde je aan voor early access. Daarom krijg je eerder toegang: " + FILL("early-access-moment")
USE = "Vul de code in bij het afrekenen. " + FILL("code automatisch toegepast? ja/nee")
COND = FILL("voorwaarden")
EXTRA = FILL("extra informatie, 1 tot 3 punten")
SIGN = "Veel plezier, en tot op het veld.<br>Team H&Iuml; Grip"
PRE = "Eerder toegang, extra informatie en je code. Voor wie zich aanmeldde."


def footer(color, rule, bg, pad_top=40):
    return row("<span class=\"hg-fill\">[INVUL: afzender]</span> &middot; <span class=\"hg-fill\">[INVUL: bedrijfsgegevens]</span><br>"
               "<span style=\"display:block;padding-top:10px;\">Je krijgt deze mail omdat je je aanmeldde voor early access bij H&Iuml; Grip.</span>"
               "<span style=\"display:block;padding-top:8px;\"><span class=\"hg-fill\">[INVUL: afmeldlink]</span></span>",
               bg=bg, pad="%dpx 36px 56px 36px" % pad_top, extra="font:400 12px/19px %s;color:%s;" % (F, color))


def A():
    bg = "#0A0A0A"
    o = head("Jij bent als eerste binnen | H&Iuml; Grip", PRE, bg, "#8C8C8C")
    o += row(logo("emblem.png", "#FFFFFF") + p("Hoi " + FILL("voornaam") + ",", "#BDBDBD", 56, 17, 26, 600) + h1("Jij bent er<br>als eerste<br>bij", "#FFFFFF", "10px 0 0;"), pad="32px 36px 0 36px")
    o += "<tr><td class=\"hg-bg\" bgcolor=\"%s\" style=\"padding:8px 0 0 0;line-height:0;font-size:0;\">%s</td></tr>\n" % (bg, fullimg("hero.jpg", ALT_HERO))
    o += row(p(INTRO, "#CFCFCF", 0) + h2("Jouw code", "#FFFFFF", "64px") + code("#FFFFFF", 16) + details("#FFFFFF", "#2E2E2E", 24)
             + p(USE, "#B3B3B3", 16, 15, 24) + button("#FFFFFF", "#0A0A0A", "#0A0A0A", "#FFFFFF", 32) + p(COND, "#7C7C7C", 16, 12, 18))
    o += "<tr><td class=\"hg-bg\" bgcolor=\"%s\" style=\"padding:72px 0 0 0;line-height:0;font-size:0;\">%s</td></tr>\n" % (bg, fullimg("detail.jpg", ALT_DETAIL))
    o += row(h2("Jij ziet het eerder<br>dan de rest", "#FFFFFF") + p("Dit weet jij nu al, voordat het voor iedereen open staat:", "#CFCFCF", 16) + p(EXTRA, "#CFCFCF", 8)
             + p(SIGN, "#FFFFFF", 32, 17, 27, 600))
    o += row("<div style=\"border-top:1px solid #2E2E2E;font-size:0;line-height:0;height:1px;\">&nbsp;</div>" + p(PROOF % "#9A9A9A", "#FFFFFF", 24, 15, 24, 600), pad="56px 36px 0 36px")
    o += footer("#7C7C7C", "#2E2E2E", bg)
    return o + FOOT


def B():
    bg = "#0A0A0A"; M = 40
    o = head("Jij bent als eerste binnen | H&Iuml; Grip", PRE, bg, "#8C8C8C").replace("padding-left:24px", "padding-left:24px")
    hero_inner = ("<table role=\"presentation\" width=\"100%%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\"><tr><td class=\"hg-p\" style=\"padding:32px %dpx 0 %dpx;\">%s</td></tr>"
                  "<tr><td style=\"padding:0;line-height:0;font-size:0;\"><img class=\"hg-fit\" src=\"assets/spacer-hero.png\" width=\"640\" height=\"330\" alt=\"%s\" style=\"display:block;width:100%%;height:auto;\"></td></tr>"
                  "<tr><td class=\"hg-p\" style=\"padding:0 %dpx 0 %dpx;\">%s%s</td></tr></table>"
                  % (M, M, logo("emblem.png", "#FFFFFF"), ALT_HERO, M, M, p("Hoi " + FILL("voornaam") + ",", "#BDBDBD", 0, 17, 26, 600), h1("Jij bent er<br>als eerste bij", "#FFFFFF", "10px 0 0;")))
    o += ("<tr><td class=\"hg-bg\" bgcolor=\"%s\" background=\"assets/hero.jpg\" valign=\"top\" style=\"background:%s url('assets/hero.jpg') no-repeat center top;background-size:100%% auto;\">"
          "<!--[if gte mso 9]><v:rect xmlns:v=\"urn:schemas-microsoft-com:vml\" fill=\"true\" stroke=\"false\" style=\"width:640px;height:650px;\"><v:fill type=\"frame\" src=\"assets/hero.jpg\" color=\"%s\"/><v:textbox inset=\"0,0,0,0\"><![endif]-->%s<!--[if gte mso 9]></v:textbox></v:rect><![endif]-->"
          "</td></tr>\n" % (bg, bg, bg, hero_inner))
    o += p("", "#fff", 0).replace("<p", "<!--").replace("</p>", "-->") if False else ""
    o += "<tr><td class=\"hg-bg\" bgcolor=\"%s\" style=\"padding:24px 0 0 0;line-height:0;font-size:0;\">%s</td></tr>\n" % (bg, fullimg("pack.jpg", ALT_PACK))
    card = ("<tr><td class=\"hg-bg\" bgcolor=\"%s\" style=\"padding:0 16px;\"><table role=\"presentation\" width=\"100%%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\"><tr>"
            "<td bgcolor=\"#FFFFFF\" style=\"background:#FFFFFF;border-radius:0 0 28px 28px;padding:0 24px 32px 24px;\">%s</td></tr></table></td></tr>\n")
    inner = (p(INTRO, "#333333", 0) + h2("Jouw code", "#0A0A0A", "48px") + code("#0A0A0A", 12) + details("#0A0A0A", "#D9D9D9", 24)
             + p(USE, "#6B6B6B", 16, 15, 24) + button("#0A0A0A", "#FFFFFF", "#FFFFFF", "#0A0A0A", 32) + p(COND, "#8A8A8A", 16, 12, 18))
    o += card % (bg, inner)
    o += row(h2("Jij ziet het eerder<br>dan de rest", "#FFFFFF") + p("Dit weet jij nu al, voordat het voor iedereen open staat:", "#CFCFCF", 16) + p(EXTRA, "#CFCFCF", 8)
             + p(SIGN, "#FFFFFF", 32, 17, 27, 600), pad="72px %dpx 0 %dpx" % (M, M))
    o += row("<div style=\"border-top:1px solid #2E2E2E;font-size:0;line-height:0;height:1px;\">&nbsp;</div>" + p(PROOF % "#9A9A9A", "#FFFFFF", 24, 15, 24, 600), pad="56px %dpx 0 %dpx" % (M, M))
    o += footer("#7C7C7C", "#2E2E2E", bg)
    return o + FOOT


def C():
    bg = "#ECEAE4"; ink = "#0A0A0A"; mut = "#5E5C57"
    o = head("Jij bent als eerste binnen | H&Iuml; Grip", PRE, bg, "#8A8780")
    o += row(logo("emblem.png", ink), bg=bg, pad="32px 36px 24px 36px")
    o += "<tr><td class=\"hg-bg\" bgcolor=\"%s\" style=\"padding:0;line-height:0;font-size:0;\">%s</td></tr>\n" % (bg, fullimg("hero.jpg", ALT_HERO))
    o += row(p("Hoi " + FILL("voornaam") + ",", mut, 0, 17, 26, 600) + h1("Jij bent er<br>als eerste<br>bij", ink, "10px 0 0;"), bg=bg, pad="8px 36px 0 36px")
    blk = ("<tr><td class=\"hg-bg hg-p\" bgcolor=\"%s\" style=\"padding:48px 16px 0 16px;\"><table role=\"presentation\" width=\"100%%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\"><tr>"
           "<td bgcolor=\"#0A0A0A\" style=\"background:#0A0A0A;border-radius:28px;padding:40px 24px 32px 24px;\">%s</td></tr></table></td></tr>\n")
    inner = (h2("Jouw code", "#FFFFFF") + code("#FFFFFF", 12) + details("#FFFFFF", "#333333", 24) + p(USE, "#A6A6A6", 16, 15, 24)
             + button("#FFFFFF", "#0A0A0A", "#0A0A0A", "#FFFFFF", 32) + p(COND, "#8A8A8A", 16, 12, 18))
    o += (blk % (bg, inner)).replace("padding:48px 16px 0 16px", "padding:40px 16px 0 16px")
    o += row(p(INTRO, ink, 0), bg=bg, pad="32px 36px 0 36px")
    o += "<tr><td class=\"hg-bg\" bgcolor=\"%s\" style=\"padding:64px 0 0 0;line-height:0;font-size:0;\">%s</td></tr>\n" % (bg, fullimg("detail.jpg", ALT_DETAIL))
    o += row(h2("Jij ziet het eerder<br>dan de rest", ink) + p("Dit weet jij nu al, voordat het voor iedereen open staat:", "#2B2A27", 16) + p(EXTRA, "#2B2A27", 8)
             + p(SIGN, ink, 32, 17, 27, 600), bg=bg)
    o += row("<div style=\"border-top:1px solid #C9C6BE;font-size:0;line-height:0;height:1px;\">&nbsp;</div>" + p(PROOF % mut, ink, 24, 15, 24, 600), bg=bg, pad="56px 36px 0 36px")
    o += footer("#77746D", "#C9C6BE", bg)
    return o + FOOT


if __name__ == "__main__":
    out = sys.argv[1]
    for k, fn in (("A", A), ("B", B), ("C", C)):
        d = os.path.join(out, k); os.makedirs(os.path.join(d, "assets"), exist_ok=True)
        open(os.path.join(d, "mail.html"), "w", encoding="utf-8").write(fn())
        print(k, "ok")
