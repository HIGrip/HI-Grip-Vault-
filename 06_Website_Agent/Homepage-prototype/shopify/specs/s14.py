from gen import section_basics, button, jr
from cssedit import fsize, color

SID = '14'
FILE = 'hp-14-teamorders'
NAME = 'HÏ 14 · Teamorders'
TEMPLATE = '14-sportteams.liquid'
CSS = '14-sportteams.css'
JS = '14-sportteams.js'


def settings(sp):
    sp.header('Kop')
    sp.text('heading_a', 'Kop, deel 1', 'Bestel als team.')
    sp.text('heading_b', 'Kop, deel 2 (accentkleur)', 'Bespaar per paar.')
    sp.select('heading_tag', 'Kopniveau (SEO)', [('h2', 'H2'), ('h1', 'H1'), ('p', 'Gewone tekst')], 'h2')
    sp.size('h2', 'Kop grootte', '--hp-14-h2-k', '.hp-14-h2', bp=900)
    sp.paint('h2a_c', 'Kop deel 1: kleur', '.hp-14-h2__a')
    sp.paint('h2b_c', 'Kop deel 2: kleur', '.hp-14-h2__b')

    sp.header('Grote foto')
    sp.image('image', 'Foto', 'shopify://shop_images/hp-ai-teamorder-800.webp')
    sp.text('alt', 'Alt-tekst (leeg = alt van het bestand)')
    sp.text('lead', 'Tekst op de foto', 'Eén bestelling voor je hele team. Hoe meer paar, hoe lager de prijs per paar, en iedereen krijgt de maat die past.', multiline=True)
    sp.size('lead', 'Tekst grootte', '--hp-14-lead-k', '.hp-14-lead', bp=900)
    sp.paint('lead_c', 'Tekst kleur', '.hp-14-media')
    sp.text('cta_label', 'Knop: tekst', 'Ontdek teamorders')
    sp.url('cta_link', 'Knop: link', '/pages/teamorder')
    sp.range('pos_y', 'Focuspunt verticaal', 0, 100, 1, '%', 52, '--hp-14-py', fmt='{v}%')
    sp.range('minh_d', 'Minimale hoogte (laptop)', 300, 900, 10, 'px', 560, '--hp-14-minh')
    sp.color_alpha('grad', 'Verloop onder op de foto', '#0A0A0A', 86, '--hp-14-grad')
    sp.check('parallax', 'Foto schuift licht mee bij scrollen', True)
    sp.size('img_r', 'Afronding', '--hp-14-r-k', '.hp-14-media', prop='borderTopLeftRadius')

    sp.header('Blokken')
    sp.para('Elk blok heeft een sportfoto, nummer, titel en regel.')
    sp.paint('blok_bg', 'Blok: achtergrond', '.hp-14-blok', 'backgroundColor')
    sp.paint('blok_fg', 'Blok: tekst', '.hp-14-blok')
    sp.paint('no_c', 'Nummer: kleur', '.hp-14-no')
    sp.size('no', 'Nummer grootte', '--hp-14-no-k', '.hp-14-no', bp=900)
    sp.size('tt', 'Titel grootte', '--hp-14-tt-k', '.hp-14-tt', bp=900)
    sp.size('td', 'Regel grootte', '--hp-14-td-k', '.hp-14-td', bp=900)
    sp.range('td_o', 'Regel dekking', 0, 100, 1, '%', 72, '--hp-14-td-o', fmt='calc({v} / 100)')
    sp.range('gap', 'Ruimte tussen de vlakken', 0, 40, 1, 'px', 12, '--hp-14-gap')
    sp.check('rise', 'Blokken rijzen na elkaar op', True)

    section_basics(sp, '#FFFFFF', '#0A0A0A')
    sp.size('btn', 'Knoptekst grootte', '--hp-btn-k', '.hp-14-cta')
    button(sp, light=True)
    sp.css("{%- unless s.rise -%}SEL .hp-14-blok { transform: none !important; }{%- endunless -%}")


BLOCKS = [{'type': 'blok', 'name': 'Blok', 'settings': [
    {'type': 'image_picker', 'id': 'image', 'label': 'Foto'},
    {'type': 'range', 'id': 'pos_x', 'label': 'Focuspunt horizontaal', 'min': 0, 'max': 100, 'step': 1, 'unit': '%', 'default': 50},
    {'type': 'range', 'id': 'pos_y', 'label': 'Focuspunt verticaal', 'min': 0, 'max': 100, 'step': 1, 'unit': '%', 'default': 50},
    {'type': 'text', 'id': 'no', 'label': 'Nummer', 'default': '01'},
    {'type': 'text', 'id': 'title', 'label': 'Titel', 'default': 'Staffelkorting'},
    {'type': 'text', 'id': 'text', 'label': 'Regel', 'default': 'Meer paar, lagere prijs per paar.'},
]}]
MAX_BLOCKS = 4
DEFAULT_BLOCKS = [
    ('blok', {'image': 'shopify://shop_images/hp-sport-rugby-900.webp', 'pos_x': 50, 'pos_y': 40, 'no': '01', 'title': 'Staffelkorting', 'text': 'Meer paar, lagere prijs per paar.'}),
    ('blok', {'image': 'shopify://shop_images/hp-sp-voetbal-zool-900.webp', 'pos_x': 50, 'pos_y': 60, 'no': '02', 'title': 'Snelle levering', 'text': 'Je teamorder snel in huis.'}),
    ('blok', {'image': 'shopify://shop_images/hp-sp-padel-voeten-900.webp', 'pos_x': 50, 'pos_y': 55, 'no': '03', 'title': 'Eigen maat', 'text': 'Per speler, van 35 t/m 47.'}),
]


def css(sh):
    color(sh, '.hp-14', 'background', '--hp-14-bg')
    color(sh, '.hp-14', 'color', '--hp-14-fg')
    fsize(sh, '.hp-14-h2', '--hp-14-h2-k')
    fsize(sh, '.hp-14-lead', '--hp-14-lead-k')
    fsize(sh, '.hp-14-no', '--hp-14-no-k')
    fsize(sh, '.hp-14-tt', '--hp-14-tt-k')
    fsize(sh, '.hp-14-td', '--hp-14-td-k')
    sh.edit('.hp-14-td', 'opacity', lambda v: f'var(--hp-14-td-o, {v})')
    sh.edit('.hp-14-img', 'object-position', lambda v: f'50% var(--hp-14-py, 52%)')
    sh.edit('.hp-14-media', 'min-height', lambda v: f'var(--hp-14-minh, {v})')
    sh.edit('.hp-14-media::after', 'background', lambda v: v.replace('var(--hi-scrim-strong) 34%', 'var(--hp-14-grad, var(--hi-scrim-strong)) 34%'))
    sh.edit('.hp-14-media', 'border-radius', lambda v: f'calc({v} * var(--hp-14-r-k, 1))')
    sh.edit('.hp-14-blok', 'border-radius', lambda v: f'calc({v} * var(--hp-14-r-k, 1))')
    for sel in ('.hp-14-bento', '.hp-14-bloks'):
        sh.edit(sel, 'gap', lambda v: f'var(--hp-14-gap, {v})')


def js(src):
    src = jr(src, "    top = r.top + window.scrollY;", "    top = r.top + window.hpScrollY();")
    src = jr(src, "    var t = Math.min(1, Math.max(-1, ((top + h / 2 - window.scrollY) - vh / 2) / (vh / 2 + h / 2)));",
             "    var t = Math.min(1, Math.max(-1, ((top + h / 2 - window.hpScrollY()) - vh / 2) / (vh / 2 + h / 2)));")
    src = jr(src, "  if (window.hpReduced()) return;\n\n  var media", "  if (window.hpReduced() || root.getAttribute('data-parallax') === 'off') return;\n\n  var media")
    return src
