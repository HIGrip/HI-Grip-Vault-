from gen import section_basics, button, jr
from cssedit import fsize, color

SID = '12'
FILE = 'hp-12-slogan'
NAME = 'HÏ 12 · Slogan'
TEMPLATE = '12-inspiratie.liquid'
CSS = '12-inspiratie.css'
JS = '12-inspiratie.js'


def settings(sp):
    sp.header('Tekst')
    sp.text('line_1', 'Regel 1', 'Ga door waar')
    sp.text('line_2', 'Regel 2', 'anderen stoppen.')
    sp.select('heading_tag', 'Kopniveau (SEO)', [('h2', 'H2'), ('h1', 'H1'), ('p', 'Gewone tekst')], 'h2')
    sp.size('title', 'Grootte', '--hp-12-k', '.hp-12-title')
    sp.paint('l1_c', 'Regel 1: kleur', '.hp-12-l--1')
    sp.paint('l2_c', 'Regel 2: kleur', '.hp-12-l--2')
    sp.check('motion', 'Regels komen omhoog en schuiven uit elkaar bij scrollen', True)
    sp.range('spread_d', 'Uit elkaar schuiven (laptop, % van de breedte)', 0, 40, 1, '%', 18)
    sp.range('spread_m', 'Uit elkaar schuiven (mobiel, % van de breedte)', 0, 40, 1, '%', 12)

    sp.header('Knop')
    sp.text('cta_label', 'Tekst', 'Shop gripsokken')
    sp.url('cta_link', 'Link', '/collections/gripsokken')
    sp.size('btn', 'Tekstgrootte', '--hp-btn-k', '.hp-12-cta')
    sp.range('cta_w', 'Breedte', 240, 900, 10, 'px', 560, '--hp-12-w')

    section_basics(sp, '#0A0A0A', '#FFFFFF')
    sp.range('minh', 'Minimale hoogte (% van het scherm)', 0, 100, 1, '%', 90, '--hp-12-minh', fmt='{v}svh')
    button(sp, light=True)


def css(sh):
    color(sh, '.hp-12', 'background', '--hp-12-bg')
    color(sh, '.hp-12', 'color', '--hp-12-fg')
    fsize(sh, '.hp-12-title', '--hp-12-k')
    fsize(sh, '.hp-12-cta', '--hp-btn-k')
    sh.edit('.hp-12', 'min-height', lambda v: 'min(var(--hp-12-minh, 90svh), 900px)')
    sh.edit('.hp-12-cta', 'width', lambda v: 'min(var(--hp-12-w, 560px), calc(100vw - 32px))')


def js(src):
    src = jr(src, "    var A = vw * (vw >= 769 ? 0.18 : 0.12), k = inout(clamp((s - 0.45) / 0.55));",
             "    var A = vw * (vw >= 769 ? SPREAD_D : SPREAD_M), k = inout(clamp((s - 0.45) / 0.55));")
    src = jr(src, "  var title = root.querySelector('.hp-12-title');",
             "  if (root.getAttribute('data-motion') === 'off') return;\n"
             "  function num(a, d) { var v = parseFloat(root.getAttribute(a)); return isNaN(v) ? d : v; }\n"
             "  var SPREAD_D = num('data-spread-d', 18) / 100, SPREAD_M = num('data-spread-m', 12) / 100;\n"
             "  var title = root.querySelector('.hp-12-title');")
    return src
