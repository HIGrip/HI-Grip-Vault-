from gen import section_basics, button, jr, head_layout
from cssedit import fsize, color

SID = '07'
FILE = 'hp-07-kies-je-sport'
NAME = 'HÏ 07 · Kies je sport'
TEMPLATE = '07-kies-je-sport.liquid'
CSS = '07-kies-je-sport.css'
JS = '07-kies-je-sport.js'


def settings(sp):
    sp.header('Tekst')
    sp.text('heading', 'Kop', 'Kies je sport')
    sp.select('heading_tag', 'Kopniveau (SEO)', [('h2', 'H2'), ('h1', 'H1'), ('p', 'Gewone tekst')], 'h2')
    sp.text('lead', 'Intro', 'Elke sport vraagt iets anders van je voet. Kies de jouwe en lees waarom grip daar telt.', multiline=True)
    head_layout(sp, '.hp-07-head')
    sp.text('anchor', 'Anker (voor links als #sporten)', 'sporten')
    sp.size('h2', 'Kop grootte', '--hp-h2-k', '.hp-07-h2')
    sp.paint('h2_c', 'Kop kleur', '.hp-07-h2')
    sp.size('lead', 'Intro grootte', '--hp-lead-k', '.hp-07-lead')
    sp.paint('lead_c', 'Intro kleur', '.hp-07-lead')

    sp.header('Sportkaarten')
    sp.para('Elke sport is een blok met eigen kleur, foto, tekst en link. De rij loopt rond en de actieve kaart staat in het midden.')
    sp.text('go_label', 'Knop op de kaart: tekst', 'Bekijk', info='Op laptop volgt de sportnaam, bijv. "Bekijk padel".')
    sp.size('name', 'Sportnaam grootte', '--hp-07-name-k', '.hp-07-name')
    sp.paint('name_c', 'Sportnaam kleur', '.hp-07-name')
    sp.size('line', 'Regel grootte', '--hp-07-line-k', '.hp-07-line')
    sp.paint('line_c', 'Regel kleur', '.hp-07-line')
    sp.size('img_r', 'Afronding foto\'s', '--hp-07-r-k', '.hp-07-frame', prop='borderTopLeftRadius')
    sp.range('gap_m', 'Ruimte tussen kaarten (mobiel)', 0, 60, 1, 'px', 10, '--hp-07-gap-set', where='m')
    sp.range('gap_d', 'Ruimte tussen kaarten (laptop)', 0, 100, 1, 'px', 32, '--hp-07-gap-set', where='d')
    sp.check('streaks', 'Snelheidsstrepen bij een wissel', True)
    sp.check('tilt', 'Buurkaarten kantelen (3D) en staan zwart-wit', True)
    sp.text('row_label', 'Rij: toegankelijke naam', 'Sporten, sleep of gebruik de pijltjes')
    sp.text('segs_label', 'Kiezer: toegankelijke naam', 'Kies een sport')
    sp.text('prev_label', 'Vorige: toegankelijke naam', 'Vorige sport')
    sp.text('next_label', 'Volgende: toegankelijke naam', 'Volgende sport')
    sp.text('status_tpl', 'Melding voor schermlezers', '{sport}, sport {n} van {total}')
    sp.paint('arrow_c', 'Pijltjesknoppen: kleur', '.hp-07-btn')
    sp.size('seg', 'Kiezer: tekstgrootte', '--hp-07-seg-k', '.hp-07-seg__name')

    section_basics(sp, '#111111', '#FFFFFF')
    sp.size('btn', 'Knoptekst grootte', '--hp-btn-k', '.hp-07-go')
    button(sp, light=True)
    sp.css("{%- unless s.tilt -%}SEL .hp-07 .hp-07-item.is-before .hp-07-card, SEL .hp-07 .hp-07-item.is-after .hp-07-card { transform: scale(0.9) !important; } SEL .hp-07-item:not(.is-active) .hp-07-img { filter: none !important; }{%- endunless -%}")
    sp.css("{%- unless s.streaks -%}SEL .hp-07-streaks { display: none; }{%- endunless -%}")


SPORT = [
    {'type': 'text', 'id': 'name', 'label': 'Sport', 'default': 'Padel'},
    {'type': 'textarea', 'id': 'line', 'label': 'Regel', 'default': 'Uit het glas, terug naar het net. Je voet blijft staan als jij afremt.'},
    {'type': 'image_picker', 'id': 'image', 'label': 'Foto'},
    {'type': 'text', 'id': 'alt', 'label': 'Alt-tekst (leeg = alt van het bestand)'},
    {'type': 'url', 'id': 'link', 'label': 'Link'},
    {'type': 'text', 'id': 'aria', 'label': 'Link: toegankelijke naam', 'default': 'Gripsokken voor padel'},
    {'type': 'color', 'id': 'color', 'label': 'Sportkleur', 'default': '#0011A7'},
    {'type': 'color', 'id': 'ink', 'label': 'Tekst op de sportkleur (kiezer)', 'default': '#FFFFFF'},
    {'type': 'header', 'content': 'Uitsnede'},
    {'type': 'range', 'id': 'pos_x', 'label': 'Focuspunt horizontaal', 'min': 0, 'max': 100, 'step': 1, 'unit': '%', 'default': 50},
    {'type': 'range', 'id': 'pos_y', 'label': 'Focuspunt verticaal', 'min': 0, 'max': 100, 'step': 1, 'unit': '%', 'default': 50},
    {'type': 'range', 'id': 'zoom_m', 'label': 'Inzoomen (mobiel)', 'min': 100, 'max': 200, 'step': 1, 'unit': '%', 'default': 100},
    {'type': 'range', 'id': 'zoom_d', 'label': 'Inzoomen (laptop)', 'min': 100, 'max': 200, 'step': 1, 'unit': '%', 'default': 100},
    {'type': 'range', 'id': 'om_x', 'label': 'Zoompunt mobiel: horizontaal', 'min': 0, 'max': 100, 'step': 1, 'unit': '%', 'default': 50},
    {'type': 'range', 'id': 'om_y', 'label': 'Zoompunt mobiel: verticaal', 'min': 0, 'max': 100, 'step': 1, 'unit': '%', 'default': 50},
    {'type': 'range', 'id': 'od_x', 'label': 'Zoompunt laptop: horizontaal', 'min': 0, 'max': 100, 'step': 1, 'unit': '%', 'default': 50},
    {'type': 'range', 'id': 'od_y', 'label': 'Zoompunt laptop: verticaal', 'min': 0, 'max': 100, 'step': 1, 'unit': '%', 'default': 50},
]
BLOCKS = [{'type': 'sport', 'name': 'Sport', 'settings': SPORT}]
MAX_BLOCKS = 8
DEFAULT_BLOCKS = [
    ('sport', {'name': 'Padel', 'line': 'Uit het glas, terug naar het net. Je voet blijft staan als jij afremt.', 'image': 'shopify://shop_images/hp-sport-padel-2000.webp', 'alt': 'Padelspeler in witte gripsokken op een blauwe padelbaan', 'link': '/pages/gripsokken-voor-padel', 'aria': 'Gripsokken voor padel', 'color': '#0011A7', 'ink': '#FFFFFF', 'pos_x': 30, 'pos_y': 60, 'zoom_m': 120, 'zoom_d': 145, 'om_x': 34, 'om_y': 72, 'od_x': 35, 'od_y': 64}),
    ('sport', {'name': 'Tennis', 'line': 'Split-step, landen, wegduwen. Geen speling in je schoen bij de eerste stap.', 'image': 'shopify://shop_images/hp-sport-tennis-2048.webp', 'alt': 'Tennisser in witte gripsokken op een gravelbaan', 'link': '/pages/gripsokken-voor-tennis', 'aria': 'Gripsokken voor tennis', 'color': '#FF6A00', 'ink': '#0A0A0A', 'pos_x': 45, 'pos_y': 70, 'zoom_m': 100, 'zoom_d': 100, 'om_x': 50, 'om_y': 50, 'od_x': 50, 'od_y': 50}),
    ('sport', {'name': 'Voetbal', 'line': 'Wegdraaien bij je man zonder dat je voet in je schoen meedraait.', 'image': 'shopify://shop_images/hp-sport-voetbal-2000.webp', 'alt': 'Voetballer in HÏ Grip-shirt haalt uit op een kunstgrasveld', 'link': '/pages/gripsokken-voor-voetbal', 'aria': 'Gripsokken voor voetbal', 'color': '#CCFF00', 'ink': '#0A0A0A', 'pos_x': 56, 'pos_y': 50, 'zoom_m': 100, 'zoom_d': 100, 'om_x': 50, 'om_y': 50, 'od_x': 50, 'od_y': 50}),
    ('sport', {'name': 'Rugby', 'line': 'Duwen in de scrum tot de bal eruit is. Je voet geeft geen centimeter weg.', 'image': 'shopify://shop_images/hp-sport-rugby-1600.webp', 'alt': 'Rugbyspelers in een scrum op een grasveld', 'link': '/pages/gripsokken-voor-rugby', 'aria': 'Gripsokken voor rugby', 'color': '#E10600', 'ink': '#FFFFFF', 'pos_x': 58, 'pos_y': 60, 'zoom_m': 100, 'zoom_d': 100, 'om_x': 50, 'om_y': 50, 'od_x': 50, 'od_y': 50}),
]


def css(sh):
    color(sh, '.hp-07', 'background-color', '--hp-07-bg')
    color(sh, '.hp-07', 'color', '--hp-07-fg')
    sh.edit('.hp-07-viewport::before', 'background', lambda v: v.replace('var(--hi-near-black)', 'var(--hp-07-bg, var(--hi-near-black))'))
    fsize(sh, '.hp-07-name', '--hp-07-name-k')
    fsize(sh, '.hp-07-line', '--hp-07-line-k')
    fsize(sh, '.hp-07-go', '--hp-btn-k')
    fsize(sh, '.hp-07-seg__name', '--hp-07-seg-k')
    sh.edit('.hp-07-frame', 'border-radius', lambda v: f'calc({v} * var(--hp-07-r-k, 1))')
    sh.edit('.hp-07', '--hp-07-gap', lambda v: f'var(--hp-07-gap-set, {v})', media='any')
    # uitsnede per sport via variabelen op het blok (inline), met de oude waarden als terugval
    sh.edit('.hp-07-item[data-sport="padel"] .hp-07-img', '--hp-07-zoom', lambda v: f'var(--hp-07-zm, {v})', media=None)
    sh.edit('.hp-07-item[data-sport="padel"] .hp-07-img', 'object-position', lambda v: f'var(--hp-07-pos, {v})')
    sh.edit('.hp-07-item[data-sport="padel"] .hp-07-img', 'transform-origin', lambda v: f'var(--hp-07-om, {v})', media=None)
    sh.edit('.hp-07-item[data-sport="padel"] .hp-07-img', '--hp-07-zoom', lambda v: f'var(--hp-07-zd, {v})', media='769')
    sh.edit('.hp-07-item[data-sport="padel"] .hp-07-img', 'transform-origin', lambda v: f'var(--hp-07-od, {v})', media='769')
    for sport in ('tennis', 'voetbal', 'rugby'):
        sh.edit(f'.hp-07-item[data-sport="{sport}"] .hp-07-img', 'object-position', lambda v: f'var(--hp-07-pos, {v})')
    sh.append('/* Shopify: uitsnede voor elke sport (ook nieuwe) uit de blokinstellingen */\n'
              '.hp-07-item .hp-07-img { --hp-07-zoom: var(--hp-07-zm, 1); object-position: var(--hp-07-pos, 50% 50%); transform-origin: var(--hp-07-om, 50% 50%); }\n'
              '@media (min-width: 769px) { .hp-07-item .hp-07-img { --hp-07-zoom: var(--hp-07-zd, 1); transform-origin: var(--hp-07-od, 50% 50%); } }')


def js(src):
    src = jr(src, """  function paint(sport) {
    var old = root.dataset.sport;
    if (sport === old) return;
    root.dataset.sport = sport;""", """  function paint(sport) {
    var old = root.dataset.sport;
    if (sport === old) return;
    root.dataset.sport = sport;
    /* Shopify: sportkleur komt uit het blok (data-c) */
    var src = track.querySelector('.hp-07-item[data-sport="' + sport + '"]');
    if (src && src.dataset.c) root.style.setProperty('--hp-07-c', src.dataset.c);""")
    return src
