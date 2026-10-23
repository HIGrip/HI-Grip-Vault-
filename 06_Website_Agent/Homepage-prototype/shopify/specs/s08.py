from gen import section_basics, button, jr
from cssedit import fsize, color

SID = '08'
FILE = 'hp-08-over-ons'
NAME = 'HÏ 08 · Over ons'
TEMPLATE = '08-over-ons.liquid'
CSS = '08-over-ons.css'
JS = '08-over-ons.js'


def settings(sp):
    sp.header('Looptekst')
    sp.text('lines', 'Regels (één per regel)', 'Sportswear\nis het\nfundament van\npresteren.', multiline=True)
    sp.select('heading_tag', 'Kopniveau (SEO)', [('h2', 'H2'), ('h1', 'H1'), ('p', 'Gewone tekst')], 'h2')
    sp.text('sr_prefix', 'Voorvoegsel voor schermlezers', 'Over HÏ Grip:')
    sp.paint('loop_c', 'Kleur', '.hp-08-loop')
    sp.size('loop', 'Grootte', '--hp-08-loop-k', '.hp-08-loop')
    sp.check('cycle', 'Letters verspringen (dun → zwaar → cursief)', True)
    sp.range('period', 'Tempo: tijd per staat', 300, 3000, 30, 'ms', 870)
    sp.range('stagger', 'Vertraging per regel', 0, 400, 10, 'ms', 80)
    sp.paint('panel_bg', 'Paneel: achtergrond', '.hp-08-panel', 'backgroundColor')
    sp.select('loop_align', 'Uitlijning', [('center', 'Midden'), ('left', 'Links'), ('right', 'Rechts')], 'center')
    sp.css("{%- if s.loop_align != 'center' -%}SEL .hp-08-loop { text-align: {{ s.loop_align }}; justify-self: {% if s.loop_align == 'left' %}start{% else %}end{% endif %}; }{%- endif -%}")

    sp.header('Foto')
    sp.image('image', 'Foto', 'shopify://shop_images/hp-teamfoto-2000.webp')
    sp.text('alt', 'Alt-tekst (leeg = alt van het bestand)')
    sp.select('photo_side', 'Foto op laptop', [('right', 'Rechts'), ('left', 'Links')], 'right')
    sp.range('scale_m', 'Inzoomen (mobiel)', 100, 300, 2, '%', 190, '--hp-08-sm', fmt='calc({v} / 100)', where='m')
    sp.range('scale_d', 'Inzoomen (laptop)', 100, 300, 2, '%', 120, '--hp-08-sm', fmt='calc({v} / 100)', where='d')
    sp.range('orig_y_m', 'Zoompunt verticaal (mobiel)', 0, 100, 1, '%', 22, '--hp-08-oy', fmt='{v}%', where='m')
    sp.range('orig_y_d', 'Zoompunt verticaal (laptop)', 20, 70, 0.5, '%', 45.5, '--hp-08-oy', fmt='{v}%', where='d')
    sp.range('orig_x', 'Zoompunt horizontaal', 0, 100, 1, '%', 50, '--hp-08-ox', fmt='{v}%')
    sp.check('reveal', 'Foto opent bij scrollen vanaf de naad', True)
    sp.paint('media_bg', 'Achtergrond achter de foto', '.hp-08-media', 'backgroundColor')

    sp.header('Knop')
    sp.text('cta_label', 'Tekst', 'Ons verhaal')
    sp.url('cta_link', 'Link', '/pages/over-ons')
    sp.check('follow', 'Knop volgt de cursor over de foto (laptop)', True)
    sp.size('cta', 'Tekstgrootte', '--hp-08-cta-k', '.hp-08-cta')

    section_basics(sp, '#0A0A0A', '#FFFFFF', pad=False)
    sp.range('h_d', 'Hoogte laptop (% van het scherm)', 40, 100, 1, '%', 100, '--hp-08-hd', fmt='{v}svh')
    button(sp, light=True)
    sp.css("{%- unless s.reveal -%}SEL .hp-08-media { clip-path: none !important; } SEL .hp-08-media__img { transform: scale(var(--hp-08-s)) !important; }{%- endunless -%}")


def css(sh):
    color(sh, '.hp-08', 'background', '--hp-08-bg')
    color(sh, '.hp-08', 'color', '--hp-08-fg')
    fsize(sh, '.hp-08-loop', '--hp-08-loop-k')
    fsize(sh, '.hp-08 .hp-08-cta', '--hp-08-cta-k')
    sh.edit('.hp-08-media', '--hp-08-s', lambda v: f'var(--hp-08-sm, {v})', count=2)
    sh.edit('.hp-08-media__img', 'transform-origin', lambda v: f'var(--hp-08-ox, 50%) var(--hp-08-oy, {v.split()[1]})', count=2)
    sh.edit('.hp-08-split', 'height', lambda v: f'var(--hp-08-hd, {v})')
    sh.append('/* Shopify: foto links op laptop (spiegelt ook de opening vanaf de naad) */\n'
              '@media (min-width: 769px) { .hp-08--photo-left .hp-08-media { order: -1; clip-path: inset(0 calc((1 - var(--hp-08-p, 1)) * 28%) 0 0); } }')


def js(src):
    src = jr(src, "  var STAGGER = 80;\n  var PERIOD = 870; // eerste regel tot eerste regel: 0,8 s staan + golf; cyclus ±2,6 s",
             "  var STAGGER = parseFloat(root.getAttribute('data-stagger')); if (isNaN(STAGGER)) STAGGER = 80;\n"
             "  var PERIOD = parseFloat(root.getAttribute('data-period')); if (isNaN(PERIOD)) PERIOD = 870; // eerste regel tot eerste regel: 0,8 s staan + golf; cyclus ±2,6 s")
    src = jr(src, "  if (window.hpReduced()) { setAll(REST); return; }",
             "  if (window.hpReduced()) { setAll(REST); return; }\n"
             "  var cycleOn = root.getAttribute('data-cycle') !== 'off', revealOn = root.getAttribute('data-reveal') !== 'off';")
    src = jr(src, "  function start() {\n    if (running) return;", "  function start() {\n    if (running || !cycleOn) return;")
    src = jr(src, "  function progress() {\n    if (!visible) return;", "  function progress() {\n    if (!visible || !revealOn) return;")
    src = jr(src, "  var cta = root.querySelector('.hp-08-cta');\n  var tapTimer = 0;\n  cta.addEventListener",
             "  var cta = root.querySelector('.hp-08-cta');\n  var tapTimer = 0;\n  if (cta) cta.addEventListener")
    src = jr(src, "  cta.addEventListener('pointercancel', function () { cta.classList.remove('is-tap'); });",
             "  if (cta) cta.addEventListener('pointercancel', function () { cta.classList.remove('is-tap'); });")
    src = jr(src, "  if (!root || window.hpReduced() || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;\n  var fig = root.querySelector('.hp-08-media'), cta = fig.querySelector('.hp-08-cta');",
             "  if (!root || window.hpReduced() || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;\n  if (root.getAttribute('data-follow') === 'off') return;\n  var fig = root.querySelector('.hp-08-media'), cta = fig.querySelector('.hp-08-cta');\n  if (!cta) return;")
    return src
