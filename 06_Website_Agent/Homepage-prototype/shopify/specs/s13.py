from gen import section_basics
from cssedit import fsize, color

SID = '13'
FILE = 'hp-13-footer'
NAME = 'HÏ 13 · Footer'
TEMPLATE = '13-footer.liquid'
CSS = '13-footer.css'
JS = None


def settings(sp):
    sp.header('Algemeen')
    sp.check('hide_theme_footer', 'Standaard themafooter verbergen op deze pagina', True,
             info='Zo staat alleen deze footer onder de homepage, zoals in het ontwerp.')
    sp.text('line', 'Merkregel', 'Performance Grip Socks voor de sporter die doorgaat waar anderen stoppen.', multiline=True)
    sp.text('slogan', 'Slogan', 'More grip, better performance.')
    sp.size('line', 'Merkregel grootte', '--hp-13-line-k', '.hp-13-line')
    sp.paint('line_c', 'Merkregel kleur', '.hp-13-line')
    sp.paint('slogan_c', 'Slogan kleur', '.hp-13-slogan')

    sp.header('Kolommen')
    sp.para('Kolommen zijn blokken. Links per regel als "Tekst | /link", of kies een menu. De brede kolom heeft ook contactgegevens.')
    sp.size('title', 'Kolomtitel grootte', '--hp-13-title-k', '.hp-13-title')
    sp.paint('title_c', 'Kolomtitel kleur', '.hp-13-title')
    sp.size('link', 'Link grootte', '--hp-13-link-k', '.hp-13-grid .hp-13-link')
    sp.paint('link_c', 'Link kleur', '.hp-13-grid .hp-13-link', target='.hp-13-grid .hp-13-link, .hp-13-contact__val, .hp-13-meta dd')
    sp.paint('meta_c', 'KVK/BTW-label kleur', '.hp-13-meta')

    sp.header('Onderregel')
    sp.text('copyright', 'Copyright', '© 2026 HÏ Grip · higrip.nl')
    sp.text('legal', 'Juridische links ("Tekst | /link" per regel)', 'Algemene voorwaarden | /policies/terms-of-service\nWettelijke kennisgeving | /policies/legal-notice\nBetalingsbeleid | /pages/terugbetalingsbeleid\nPrivacybeleid | /pages/privacybeleid', multiline=True)
    sp.text('pay_title', 'Titel betaalmethoden', 'Betaalmethoden')
    sp.text('pay', 'Betaalmethoden (één per regel)', 'American Express\nApple Pay\nGoogle Pay\niDEAL Wero\nKlarna\nMaestro\nMastercard\nPayPal\nUnion Pay\nVisa', multiline=True)
    sp.paint('base_c', 'Tekstkleur onderregel', '.hp-13-base', target='.hp-13-base, .hp-13-legal .hp-13-link, .hp-13-pay__title, .hp-13-pay__list li:not(:last-child)::after')
    sp.paint('pay_c', 'Betaalmethoden kleur', '.hp-13-pay__list')
    sp.paint('base_line', 'Lijn boven de onderregel', '.hp-13-base', 'borderTopColor')

    sp.header('Woordmerk')
    sp.text('mark', 'Woordmerk onderaan', 'HÏ Grip')
    sp.range('mark_f', 'Woordmerk: breedtefactor', 250, 450, 2, None, 334, '--hp-13-mark-f', fmt='calc({v} / 100)',
             info='Lager = groter. Bij "HÏ Grip" is 334 precies rand tot rand; bij een andere tekst stel je hem hier bij.')
    sp.paint('mark_c', 'Woordmerk kleur', '.hp-13-mark')
    section_basics(sp, '#111111', '#FFFFFF')


BLOCKS = [
    {'type': 'column', 'name': 'Linkkolom', 'settings': [
        {'type': 'text', 'id': 'title', 'label': 'Titel', 'default': 'Shop'},
        {'type': 'link_list', 'id': 'menu', 'label': 'Menu (optioneel, vervangt de links hieronder)'},
        {'type': 'textarea', 'id': 'links', 'label': 'Links ("Tekst | /link" per regel)', 'default': 'Alle gripsokken | /collections/gripsokken'},
    ]},
    {'type': 'contact', 'name': 'Socials en contact', 'limit': 1, 'settings': [
        {'type': 'text', 'id': 'title', 'label': 'Titel', 'default': 'Volg ons'},
        {'type': 'textarea', 'id': 'links', 'label': 'Links ("Tekst | link" per regel)', 'default': 'Instagram | https://instagram.com/higrip.nl'},
        {'type': 'text', 'id': 'email', 'label': 'E-mail', 'default': 'info@higrip.nl'},
        {'type': 'text', 'id': 'phone', 'label': 'Telefoon'},
        {'type': 'text', 'id': 'kvk_label', 'label': 'Label KVK', 'default': 'KVK'},
        {'type': 'text', 'id': 'kvk', 'label': 'KVK-nummer'},
        {'type': 'text', 'id': 'btw_label', 'label': 'Label BTW', 'default': 'BTW'},
        {'type': 'text', 'id': 'btw', 'label': 'BTW-nummer'},
    ]},
]
MAX_BLOCKS = 8
NO_PRESET = ['phone', 'kvk', 'btw']
DEFAULT_BLOCKS = [
    ('column', {'title': 'Shop', 'links': 'Alle gripsokken | /collections/gripsokken\n2.0 Zwart | /products/performance-gripsokken-2-0-zwart\n2.0 Wit | /products/performance-gripsokken-2-0-wit\nPerformance Gripsokken | /products/performance-gripsokken'}),
    ('column', {'title': 'Sporten', 'links': 'Padel | /pages/gripsokken-voor-padel\nTennis | /pages/gripsokken-voor-tennis\nVoetbal | /pages/gripsokken-voor-voetbal\nRugby | /pages/gripsokken-voor-rugby'}),
    ('column', {'title': 'HÏ Grip', 'links': 'Over ons | /pages/over-ons\nZakelijk | /pages/zakelijk\nWaarom HÏ Grip | /blogs/hi-grip/waarom-hi-grip-gripsokken\nReviews | https://nl.trustpilot.com/review/higrip.nl'}),
    ('column', {'title': 'Service', 'links': 'Veelgestelde vragen | /pages/veelgestelde-vragen\nVerzending | /pages/verzendbeleid\nRetourneren | /pages/retourbeleid\nContact | /pages/contact'}),
    ('contact', {'title': 'Volg ons', 'links': 'Instagram | https://instagram.com/higrip.nl\nTikTok | https://tiktok.com/@higrip.nl\nLinkedIn | https://linkedin.com/company/h%C3%AF-grip/about/\nFacebook | https://facebook.com/profile.php?id=61569860846565', 'email': 'info@higrip.nl', 'phone': '+31 6 24 56 65 47', 'kvk_label': 'KVK', 'kvk': '97210129', 'btw_label': 'BTW', 'btw': 'NL867952283B01'}),
]


def css(sh):
    color(sh, '.hp-13', 'background', '--hp-13-bg')
    color(sh, '.hp-13', 'color', '--hp-13-fg')
    fsize(sh, '.hp-13-line', '--hp-13-line-k')
    fsize(sh, '.hp-13-title', '--hp-13-title-k')
    fsize(sh, '.hp-13-link', '--hp-13-link-k')
    fsize(sh, '.hp-13-contact__val', '--hp-13-link-k')
    sh.edit('.hp-13-mark', 'font-size', lambda v: v.replace('3.34', 'var(--hp-13-mark-f, 3.34)') if '3.34' in v else v)
