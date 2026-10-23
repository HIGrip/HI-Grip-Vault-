from gen import section_basics, jr
from cssedit import fsize, color, k

SID = '03'
FILE = 'hp-03-bewijsbalk'
NAME = 'HÏ 03 · Bewijsbalk'
TEMPLATE = '03-tussensectie.liquid'
CSS = '03-tussensectie.css'
JS = '03-tussensectie.js'


def settings(sp):
    sp.header('Strook')
    sp.text('label', 'Toegankelijke naam', 'Waarom sporters voor HÏ Grip kiezen')
    sp.para('Voeg cijfers en regels toe als blokken; na elk item komt automatisch een scheidingsstreep.')
    sp.range('speed', 'Snelheid (px per seconde)', 0, 200, 2, 'px', 52)
    sp.select('dir', 'Looprichting', [('-1', 'Naar links'), ('1', 'Naar rechts')], '-1')
    sp.range('skew', 'Kanteling bij snel scrollen', 0, 30, 1, '°', 9)
    sp.size('item', 'Tekstgrootte', '--hp-03-k', '.hp-03-stat')
    sp.paint('item_c', 'Tekstkleur', '.hp-03-stat', target='.hp-03-item, .hp-03-stat, .hp-03-line')
    sp.paint('sep_c', 'Scheidingsstreep: kleur', '.hp-03-sep', 'backgroundColor')
    sp.range('sep_o', 'Scheidingsstreep: dekking', 0, 100, 1, '%', 50, '--hp-03-sep-o', fmt='calc({v} / 100)')
    sp.range('sep_gap', 'Ruimte rond de streep', 4, 80, 1, 'px', 28, '--hp-03-sep-gap')
    section_basics(sp, '#CCFF00', '#0A0A0A')


BLOCKS = [
    {'type': 'stat', 'name': 'Cijfer', 'settings': [
        {'type': 'text', 'id': 'big', 'label': 'Cijfer', 'default': '3500+'},
        {'type': 'checkbox', 'id': 'count', 'label': 'Optellen bij binnenkomst', 'default': False, 'info': 'Alleen voor een getal aan het begin, bijv. 3500+.'},
        {'type': 'checkbox', 'id': 'star', 'label': 'Ster ervoor (★)', 'default': False},
        {'type': 'text', 'id': 'small', 'label': 'Tekst ernaast', 'default': 'sporters gingen je voor'},
        {'type': 'url', 'id': 'link', 'label': 'Link (optioneel)'},
        {'type': 'checkbox', 'id': 'new_tab', 'label': 'Link in nieuw tabblad', 'default': True},
    ]},
    {'type': 'line', 'name': 'Regel', 'settings': [
        {'type': 'text', 'id': 'text', 'label': 'Tekst', 'default': 'Binnen 1 werkdag verzonden'},
    ]},
]
MAX_BLOCKS = 8
DEFAULT_BLOCKS = [
    ('stat', {'big': '3500+', 'count': True, 'star': False, 'small': 'sporters gingen je voor', 'new_tab': True}),
    ('stat', {'big': '4,6', 'count': False, 'star': True, 'small': 'op Trustpilot', 'link': 'https://nl.trustpilot.com/review/higrip.nl', 'new_tab': True}),
    ('line', {'text': 'Binnen 1 werkdag verzonden'}),
]


def css(sh):
    color(sh, '.hp-03', 'background', '--hp-03-bg')
    color(sh, '.hp-03', 'color', '--hp-03-fg')
    sh.edit('.hp-03', '--hp-03-size', k('--hp-03-k'))
    sh.edit('.hp-03-sep', 'opacity', lambda v: f'var(--hp-03-sep-o, {v})')
    sh.edit('.hp-03-sep', 'margin-inline', lambda v: f'var(--hp-03-sep-gap, {v})')


def js(src):
    src = jr(src, "  var SPEED = 52; // px per seconde\n  var MAX_SKEW = 9; // graden",
             "  var SPEED = parseFloat(sec.getAttribute('data-speed')); if (isNaN(SPEED)) SPEED = 52; // px per seconde\n"
             "  var MAX_SKEW = parseFloat(sec.getAttribute('data-skew')); if (isNaN(MAX_SKEW)) MAX_SKEW = 9; // graden")
    src = jr(src, "  var lastY = window.scrollY;", "  var lastY = window.hpScrollY();")
    src = jr(src, "    var y = window.scrollY, d = y - lastY;", "    var y = window.hpScrollY(), d = y - lastY;")
    # optellen per element (Shopify: meerdere cijfers mogelijk), zelfde verloop als het prototype
    src = jr(src, """    var rest = counts[0].textContent, target = parseInt(rest, 10), suffix = rest.replace(/^\\d+/, '');
    Array.prototype.forEach.call(counts, function (c) { c.style.minWidth = c.getBoundingClientRect().width + 'px'; });
    var t0 = 0, D = 1400;
    function step(t) {
      t0 = t0 || t;
      var p = Math.min((t - t0) / D, 1), e = 1 - Math.pow(1 - p, 3);
      var txt = p < 1 ? Math.round(target * e) + suffix : rest;
      Array.prototype.forEach.call(counts, function (c) { c.textContent = txt; });
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);""", """    var items = Array.prototype.map.call(counts, function (c) {
      var rest = c.textContent;
      return { el: c, rest: rest, target: parseInt(rest, 10), suffix: rest.replace(/^\\d+/, '') };
    }).filter(function (o) { return !isNaN(o.target); });
    items.forEach(function (o) { o.el.style.minWidth = o.el.getBoundingClientRect().width + 'px'; });
    var t0 = 0, D = 1400;
    function step(t) {
      t0 = t0 || t;
      var p = Math.min((t - t0) / D, 1), e = 1 - Math.pow(1 - p, 3);
      items.forEach(function (o) { o.el.textContent = p < 1 ? Math.round(o.target * e) + o.suffix : o.rest; });
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);""")
    return src
