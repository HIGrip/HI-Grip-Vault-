from gen import section_basics, jr
from cssedit import fsize, color

SID = '09'
FILE = 'hp-09-logoband'
NAME = 'HÏ 09 · Logoband'
TEMPLATE = '09-tussensectie-zakelijk.liquid'
CSS = '09-tussensectie-zakelijk.css'
JS = '09-tussensectie-zakelijk.js'


def settings(sp):
    sp.header('Kop')
    sp.text('heading', 'Kop', "Clubs, winkels en studio's gingen je voor")
    sp.select('heading_tag', 'Kopniveau (SEO)', [('h2', 'H2'), ('h1', 'H1'), ('p', 'Gewone tekst')], 'h2')
    sp.size('h2', 'Kop grootte', '--hp-09-h2-k', '.hp-09-h2')
    sp.paint('h2_c', 'Kop kleur', '.hp-09-h2')

    sp.header('Logoband')
    sp.para("Elk logo is een blok. Schaal en verhouding maken logo's optisch even groot; met de uitsnede snijd je lege randen uit het bestand weg.")
    sp.check('loop', 'Band loopt (anders staan de logo\'s stil in een raster)', True)
    sp.range('speed', 'Snelheid (px per seconde)', 0, 200, 2, 'px', 42)
    sp.range('logo_h_m', 'Logohoogte (mobiel)', 20, 160, 2, 'px', 56, '--hp-09-h-set', where='m')
    sp.range('logo_h_d', 'Logohoogte (laptop)', 20, 200, 2, 'px', 76, '--hp-09-h-set', where='d')
    sp.range('gap_m', 'Ruimte tussen logo\'s (mobiel)', 0, 200, 2, 'px', 48, '--hp-09-gap-set', where='m')
    sp.range('gap_d', 'Ruimte tussen logo\'s (laptop)', 0, 200, 2, 'px', 64, '--hp-09-gap-set', where='d')
    sp.check('gray', 'Logo\'s grijs, in kleur in het midden en bij hover', True, info='Geldt als de band loopt; staat hij stil, dan zijn de logo\'s altijd in kleur.')
    sp.range('dim', 'Dekking van grijze logo\'s', 0, 100, 1, '%', 60, '--hp-09-dim', fmt='calc({v} / 100)')
    section_basics(sp, '#F7F7F7', '#0A0A0A')
    sp.css("{%- unless s.gray -%}SEL .hp-09-logo { filter: none !important; opacity: 1 !important; }{%- endunless -%}")


BLOCKS = [{'type': 'logo', 'name': 'Logo', 'settings': [
    {'type': 'image_picker', 'id': 'image', 'label': 'Logo'},
    {'type': 'text', 'id': 'alt', 'label': 'Naam (alt-tekst)'},
    {'type': 'url', 'id': 'link', 'label': 'Link (optioneel)'},
    {'type': 'range', 'id': 'scale', 'label': 'Schaal', 'min': 20, 'max': 200, 'step': 2, 'unit': '%', 'default': 100},
    {'type': 'text', 'id': 'ratio', 'label': 'Verhouding beeldvlak (breed / hoog)', 'default': '1', 'info': 'Bijv. 1 (vierkant), 600 / 150 (breed woordmerk).'},
    {'type': 'range', 'id': 'radius', 'label': 'Afronding', 'min': 0, 'max': 50, 'step': 1, 'unit': '%', 'default': 0},
    {'type': 'header', 'content': 'Uitsnede (lege rand wegsnijden)'},
    {'type': 'number', 'id': 'crop_x', 'label': 'Links (%)', 'default': 0},
    {'type': 'number', 'id': 'crop_y', 'label': 'Boven (%)', 'default': 0},
    {'type': 'number', 'id': 'crop_w', 'label': 'Breedte (%)', 'default': 100},
    {'type': 'number', 'id': 'crop_h', 'label': 'Hoogte (%)', 'default': 100},
]}]
MAX_BLOCKS = 16
_L = lambda img, alt, scale, ratio, radius=0, cx=0, cy=0, cw=100, ch=100: ('logo', {'image': f'shopify://shop_images/{img}', 'alt': alt, 'scale': scale, 'ratio': ratio, 'radius': radius, 'crop_x': cx, 'crop_y': cy, 'crop_w': cw, 'crop_h': ch})
DEFAULT_BLOCKS = [
    _L('hp-logo-spirit-252.webp', 'V.V. Spirit', 108, '252 / 300'),
    _L('hp-logo-syth-512.webp', 'Say Yes To Health (SYTH)', 84, '1', 12),
    _L('hp-logo-sport2000-240.webp', 'Sport 2000', 96, '1'),
    _L('hp-logo-concordia-360.webp', 'Concordia', 108, '234 / 282', 0, -27.35, -13.48, 153.85, 122.34),
    _L('hp-logo-myhealthclub-600.webp', 'MyHealth Club', 50, '600 / 150', 0, 0, -166.67, 100, 400),
    _L('hp-logo-hr-500.webp', 'Hogeschool Rotterdam', 84, '1', 12),
]


def css(sh):
    color(sh, '.hp-09', 'background', '--hp-09-bg')
    color(sh, '.hp-09', 'color', '--hp-09-fg')
    fsize(sh, '.hp-09-h2', '--hp-09-h2-k')
    sh.edit('.hp-09', '--hp-09-h', lambda v: f'var(--hp-09-h-set, {v})')
    sh.edit('.hp-09', '--hp-09-gap', lambda v: f'var(--hp-09-gap-set, {v})')
    sh.edit('.hp-09-logo', 'opacity', lambda v: f'var(--hp-09-dim, {v})')
    # stilstaande band (looping uit of minder beweging): vaste hoogte schaalt mee met de instelling
    sh.edit('.hp-09.is-static', '--hp-09-h', lambda v: 'calc(var(--hp-09-h-set, 56px) * 44 / 56)', media=None)
    sh.edit('.hp-09.is-static', '--hp-09-h', lambda v: 'calc(var(--hp-09-h-set, 76px) * 64 / 76)', media='769')


def js(src):
    src = jr(src, "  if (!document.documentElement.classList.contains('hp-motion') || hpReduced()) {",
             "  if (!document.documentElement.classList.contains('hp-motion') || hpReduced() || root.getAttribute('data-loop') === 'off') {")
    src = jr(src, "  var SPEED = 42; /* px per seconde */",
             "  var SPEED = parseFloat(root.getAttribute('data-speed')); if (isNaN(SPEED)) SPEED = 42; /* px per seconde */")
    return src
