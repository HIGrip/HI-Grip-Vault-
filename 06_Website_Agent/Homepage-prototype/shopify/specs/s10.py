from gen import section_basics, button, jr
from cssedit import fsize, color

SID = '10'
FILE = 'hp-10-zakelijk'
NAME = 'HÏ 10 · Zakelijk'
TEMPLATE = '10-zakelijk.liquid'
CSS = '10-zakelijk.css'
JS = '10-zakelijk.js'


def ends(cls):
    return lambda sels: any(x.endswith(cls) for x in sels)


def settings(sp):
    sp.header('Kop')
    sp.text('heading', 'Kop', 'HÏ Grip voor je club, winkel of studio')
    sp.select('heading_tag', 'Kopniveau (SEO)', [('h2', 'H2'), ('h1', 'H1'), ('p', 'Gewone tekst')], 'h2')
    sp.text('lead', 'Intro', 'Eigen kleuren voor je club, grip in je schap of een eigen ontwerp voor je studio. Je begint met een gratis sample.', multiline=True)
    sp.size('h2', 'Kop grootte', '--hp-10-h2-k', '.hp-10-h2', bp=900)
    sp.paint('h2_c', 'Kop kleur', '.hp-10-h2')
    sp.size('lead', 'Intro grootte', '--hp-10-lead-k', '.hp-10-lead', bp=900)
    sp.paint('lead_c', 'Intro kleur', '.hp-10-lead')

    sp.header('Sample-ticket')
    sp.check('show_ticket', 'Ticket tonen', True)
    sp.text('ticket_big', 'Grote tekst', 'Gratis sample')
    sp.text('ticket_sub', 'Onderregel', 'binnen 1 werkdag verzonden')
    sp.text('ticket_cta', 'Knoptekst', 'Vraag een gratis sample')
    sp.url('ticket_link', 'Link', '/pages/zakelijk')
    sp.paint('ticket_bg', 'Achtergrond', '.hp-10-ticket', 'backgroundColor')
    sp.paint('ticket_fg', 'Tekst', '.hp-10-ticket')
    sp.paint('ticket_sub_c', 'Onderregel kleur', '.hp-10-ticket__sub')
    sp.size('ticket_big', 'Grote tekst: grootte', '--hp-10-tb-k', '.hp-10-ticket__big', bp=900)
    sp.size('ticket_sub', 'Onderregel: grootte', '--hp-10-ts-k', '.hp-10-ticket__sub', bp=900)
    sp.size('btn', 'Knoptekst grootte', '--hp-btn-k', '.hp-10-ticket__cta')
    button(sp, light=False, label='Ticketknop')

    sp.header('Kaarten')
    sp.para('Drie kaarten (blokken). Op mobiel staat de derde kaart breed bovenaan, de andere twee eronder naast elkaar.')
    sp.check('count', 'Cijfers tellen op bij binnenkomst', True)
    sp.size('title', 'Titel grootte', '--hp-10-title-k', '.hp-10-title', bp=900)
    sp.paint('title_c', 'Titel kleur', '.hp-10-title')
    sp.size('text', 'Tekst grootte', '--hp-10-text-k', '.hp-10-text', bp=900)
    sp.paint('text_c', 'Tekst kleur (laptop)', '.hp-10-text')
    sp.size('cue', 'Linktekst grootte', '--hp-10-cue-k', '.hp-10-cue', bp=900)
    sp.size('stat_v', 'Feit op het beeld: grootte', '--hp-10-sv-k', '.hp-10-stat__v', bp=900)
    sp.paint('stat_bg', 'Feit op het beeld: achtergrond', '.hp-10-stat', 'backgroundColor')
    sp.paint('stat_fg', 'Feit op het beeld: tekst', '.hp-10-stat')
    sp.paint('stat_k_c', 'Feit op het beeld: bovenregel', '.hp-10-stat__k')
    sp.paint('media_light', 'Lichte beeldvlakken: achtergrond', '.hp-10-media--light', 'backgroundColor')
    sp.size('img_r', 'Afronding', '--hp-10-r-k', '.hp-10-media', prop='borderTopLeftRadius', bp=900)

    section_basics(sp, '#0A0A0A', '#FFFFFF')


BLOCKS = [{'type': 'card', 'name': 'Kaart', 'settings': [
    {'type': 'image_picker', 'id': 'image', 'label': 'Beeld'},
    {'type': 'text', 'id': 'alt', 'label': 'Alt-tekst (leeg = alt van het bestand)'},
    {'type': 'select', 'id': 'img_style', 'label': 'Beeldweergave', 'options': [{'value': 'cover', 'label': 'Foto (vult het vlak)'}, {'value': 'contain', 'label': 'Product vrijstaand (licht vlak)'}, {'value': 'sheet', 'label': 'Overzichtsplaat (licht vlak, ingezoomd)'}], 'default': 'cover'},
    {'type': 'text', 'id': 'stat_k', 'label': 'Feit: bovenregel', 'default': 'vanaf'},
    {'type': 'text', 'id': 'stat_v', 'label': 'Feit: waarde', 'default': '150 paar'},
    {'type': 'checkbox', 'id': 'stat_count', 'label': 'Getal optellen bij binnenkomst', 'default': True},
    {'type': 'text', 'id': 'title', 'label': 'Titel', 'default': 'Sportclubs'},
    {'type': 'textarea', 'id': 'text', 'label': 'Tekst'},
    {'type': 'text', 'id': 'cue', 'label': 'Linktekst', 'default': 'Voor clubs'},
    {'type': 'url', 'id': 'link', 'label': 'Link'},
]}]
MAX_BLOCKS = 3
DEFAULT_BLOCKS = [
    ('card', {'image': 'shopify://shop_images/hp-b2b-club-spirit-1000.webp', 'alt': 'Speler van V.V. Spirit in gele clubsokken met witte HÏ Grip-gripsokken eronder', 'img_style': 'cover', 'stat_k': 'vanaf', 'stat_v': '150 paar', 'stat_count': True, 'title': 'Sportclubs', 'text': 'Eigen logo en kleuren vanaf 150 paar. Eén uitstraling op het veld, voor al je teams.', 'cue': 'Voor clubs', 'link': '/pages/zakelijk#clubs'}),
    ('card', {'image': 'shopify://shop_images/hp-b2b-sok-zwart-900.webp', 'alt': 'Performance Grip Socks 2.0 in zwart, vrijstaand', 'img_style': 'contain', 'stat_k': 'vanaf', 'stat_v': '6 paar', 'stat_count': True, 'title': 'Sportwinkels', 'text': 'Staffelprijzen vanaf 6 paar en een adviesprijs van €19,95. Je klant voelt het verschil zodra hij hem aantrekt.', 'cue': 'Voor winkels', 'link': '/pages/zakelijk#retailers'}),
    ('card', {'image': 'shopify://shop_images/hp-b2b-sokhoogtes-900.webp', 'alt': 'Zes soklengtes van no show tot over-the-calf, te personaliseren met eigen kleur en logo', 'img_style': 'sheet', 'stat_k': 'voor jouw merk', 'stat_v': 'eigen ontwerp', 'stat_count': False, 'title': 'Personalisatie', 'text': 'Wij maken de sok naar jouw ontwerp: kleur, lengte, logo en verpakking.', 'cue': 'Personaliseer', 'link': '/pages/zakelijk#clubs'}),
]


def css(sh):
    color(sh, '.hp-10', 'background', '--hp-10-bg')
    color(sh, '.hp-10', 'color', '--hp-10-fg')
    fsize(sh, '.hp-10-h2', '--hp-10-h2-k')
    fsize(sh, '.hp-10-lead', '--hp-10-lead-k')
    fsize(sh, '.hp-10-ticket__big', '--hp-10-tb-k')
    fsize(sh, '.hp-10-ticket__sub', '--hp-10-ts-k')
    fsize(sh, ends('.hp-10-title'), '--hp-10-title-k')
    fsize(sh, ends('.hp-10-text'), '--hp-10-text-k')
    fsize(sh, ends('.hp-10-cue'), '--hp-10-cue-k')
    fsize(sh, ends('.hp-10-stat__v'), '--hp-10-sv-k')
    for sel in ('.hp-10-media', '.hp-10-ticket', '.hp-10-card'):
        try:
            sh.edit(sel, 'border-radius', lambda v: f'calc({v} * var(--hp-10-r-k, 1))')
        except SystemExit:
            pass


def js(src):
    src = jr(src, "  var stats = root.querySelectorAll('[data-count]');",
             "  if (root.getAttribute('data-counting') === 'off') return;\n  var stats = root.querySelectorAll('[data-count]');")
    return src
