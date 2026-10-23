from gen import section_basics, button, jr
from cssedit import fsize, color

SID = '06'
FILE = 'hp-06-brandvideo'
NAME = 'HÏ 06 · Brandvideo'
TEMPLATE = '06-visuele-pauze.liquid'
CSS = '06-visuele-pauze.css'
JS = '06-visuele-pauze.js'

V_D = 'https://cdn.shopify.com/videos/c/o/v/d2774d181fd441c3b28a5d486760c9eb.mp4'
V_M = 'https://cdn.shopify.com/videos/c/o/v/739650e8f7bc4cf193acce847e5ee7bc.mp4'
V_LO = 'https://cdn.shopify.com/videos/c/o/v/78f88303e40b44c8be2efa7d886c4e31.mp4'


def settings(sp):
    sp.header('Video')
    sp.text('label', 'Toegankelijke naam', 'HÏ Grip brandvideo')
    sp.video('video_d', 'Video laptop (breed)', info='Kies uit Bestanden; leeg = de link hieronder. Het ontwerp gebruikt één breed bestand met de drie panelen erin.')
    sp.text('video_d_url', 'Video laptop: directe mp4-link', V_D)
    sp.image('poster_d', 'Startbeeld laptop', 'shopify://shop_images/hp-higrip-brandvideo-desktop-poster.jpg')
    sp.video('video_m', 'Video mobiel (staand)', info='Leeg = de links hieronder.')
    sp.text('video_m_url', 'Video mobiel: directe mp4-link', V_M)
    sp.text('video_lo_url', 'Video mobiel, lichte versie (trage verbinding): mp4-link', V_LO)
    sp.image('poster_m', 'Startbeeld mobiel', 'shopify://shop_images/hp-higrip-brandvideo-poster.jpg')
    sp.text('sr_1', 'Tekst voor schermlezers (1)', 'Je schoen grijpt de vloer. HÏ Grip zorgt dat je voet je schoen grijpt. Minder schuiven bij elke stop, elke draai en elke sprint, tot de laatste bal.', multiline=True)
    sp.text('sr_2', 'Tekst voor schermlezers (2)', 'Ga door waar anderen stoppen.')

    sp.header('Tijdlijn')
    sp.add({'type': 'number', 'id': 'cut', 'label': 'Knip naar zwart na (milliseconden)', 'default': 9550, 'info': 'Vlak voor de eigen eindtekst van de video.'})
    sp.add({'type': 'number', 'id': 'fade', 'label': 'Vervagen vóór de knip (milliseconden)', 'default': 320})
    sp.add({'type': 'number', 'id': 'black', 'label': 'Zwart moment (milliseconden)', 'default': 500})
    sp.add({'type': 'number', 'id': 'hold', 'label': 'Eindbeeld blijft staan (milliseconden)', 'default': 5000})

    sp.header('Eindbeeld')
    sp.text('end_big', 'Grote tekst', 'Prestatie')
    sp.text('end_sub', 'Tweede regel', 'telt.')
    sp.size('end_big', 'Grote tekst: grootte', '--hp-06-big-k', '.hp-06-end__big')
    sp.paint('end_big_c', 'Grote tekst: kleur', '.hp-06-end__big')
    sp.size('end_sub', 'Tweede regel: grootte', '--hp-06-sub-k', '.hp-06-end__sub')
    sp.paint('end_sub_c', 'Tweede regel: kleur', '.hp-06-end__sub')
    sp.paint('end_bg', 'Achtergrond eindbeeld', '.hp-06-end', 'backgroundColor')
    sp.color('leak', 'Lichtvlek', '#CCFF00', '--hp-06-leak')

    sp.header('Bediening')
    sp.check('show_hud', 'Merk, tijd en voortgangsbalk tonen', True)
    sp.text('brand', 'Merk linksboven', 'HÏ Grip')
    sp.text('total', 'Totale tijd (rechtsboven)', '00:15')
    sp.size('brand', 'Merk: grootte', '--hp-06-brand-k', '.hp-06-brand')
    sp.size('hud', 'Tijd: grootte', '--hp-06-hud-k', '.hp-06-tc')
    sp.paint('hud_c', 'Merk en tijd: kleur', '.hp-06-tc', target='.hp-06-brand, .hp-06-tc')
    sp.paint('prog_bg', 'Voortgangsbalk: achtergrond', '.hp-06-progress', 'backgroundColor')
    sp.paint('prog_fg', 'Voortgangsbalk: vulling', '.hp-06-progress__fill', 'backgroundColor')
    sp.paint('btn6_bg', 'Pauze/geluid: achtergrond', '.hp-06-btn', 'backgroundColor')
    sp.paint('btn6_fg', 'Pauze/geluid: icoon', '.hp-06-btn')
    sp.paint('snd_on', 'Geluid aan: achtergrond', '', 'backgroundColor', target='.hp-06 .hp-06-sound[aria-pressed="true"]', default='#CCFF00')
    sp.text('l_play', 'Label "afspelen"', 'Speel de film af')
    sp.text('l_pause', 'Label "pauze"', 'Pauzeer de film')
    sp.text('l_sound_on', 'Label "geluid aan"', 'Zet het geluid aan')
    sp.text('l_sound_off', 'Label "geluid uit"', 'Zet het geluid uit')
    sp.text('cta_label', 'Knop: tekst', 'Shop de 2.0')
    sp.url('cta_link', 'Knop: link', '/products/performance-gripsokken-2-0-zwart')
    sp.range('near', 'Knop verschijnt binnen (afstand cursor)', 40, 400, 10, 'px', 160)
    sp.range('far', 'Knop verdwijnt na (afstand cursor)', 60, 500, 10, 'px', 220)
    sp.size('btn', 'Knoptekst grootte', '--hp-btn-k', '.hp-06-cta')

    section_basics(sp, '#0A0A0A', '#FFFFFF', pad=False)
    sp.range('h_m', 'Hoogte mobiel (% van het scherm)', 40, 100, 1, '%', 100, '--hp-06-hm', fmt='{v}svh')
    sp.range('maxh_m', 'Maximale hoogte mobiel', 400, 1400, 20, 'px', 980, '--hp-06-maxm')
    sp.range('maxh_d', 'Maximale hoogte laptop', 400, 1600, 20, 'px', 1100, '--hp-06-maxd')
    sp.color_alpha('dim', 'Zijpanelen gedimd (laptop)', '#0A0A0A', 32, '--hp-06-dim')
    button(sp, light=True)


def css(sh):
    color(sh, '.hp-06', 'background', '--hp-06-bg')
    color(sh, '.hp-06', 'color', '--hp-06-fg')
    fsize(sh, '.hp-06-end__big', '--hp-06-big-k')
    fsize(sh, '.hp-06-end__sub', '--hp-06-sub-k')
    fsize(sh, '.hp-06-brand', '--hp-06-brand-k')
    fsize(sh, '.hp-06-hud', '--hp-06-hud-k')
    fsize(sh, '.hp-06-cta', '--hp-btn-k')
    sh.edit('.hp-06-end__leak', 'background', lambda v: v.replace('var(--hi-yellow)', 'var(--hp-06-leak, var(--hi-yellow))'))
    sh.edit('.hp-06-dim', 'background', lambda v: 'var(--hp-06-dim, var(--hi-scrim))')
    sh.edit('.hp-06-stage', 'height', lambda v: 'min(var(--hp-06-hm, 100svh), var(--hp-06-maxm, 980px))' if '980px' in v else v.replace('1100px', 'var(--hp-06-maxd, 1100px)'), count=2)


def js(src):
    src = jr(src, "  var CUT = 9.55, FADE = 0.32, BLACK = 0.5, HOLD = 5;",
             "  function num(a, d) { var v = parseFloat(root.getAttribute(a)); return isNaN(v) ? d : v; }\n"
             "  var CUT = num('data-cut', 9.55), FADE = num('data-fade', 0.32), BLACK = num('data-black', 0.5), HOLD = num('data-hold', 5);")
    src = jr(src, "  var cta = root.querySelector('.hp-06-cta'), NEAR = 160, FAR = 220;",
             "  var cta = root.querySelector('.hp-06-cta'), NEAR = num('data-near', 160), FAR = num('data-far', 220);")
    src = jr(src, "  root.addEventListener('pointermove', function (e) {\n    if (e.pointerType !== 'mouse') return;",
             "  root.addEventListener('pointermove', function (e) {\n    if (e.pointerType !== 'mouse' || !cta) return;")
    src = jr(src, "    fill.style.transform = 'scaleX(' + Math.min(1, shown / (CUT + BLACK + HOLD)).toFixed(4) + ')';",
             "    if (fill) fill.style.transform = 'scaleX(' + Math.min(1, shown / (CUT + BLACK + HOLD)).toFixed(4) + ')';")
    src = jr(src, "    if (sec !== lastSec) { lastSec = sec; now.textContent = '00:' + ('0' + sec).slice(-2); }",
             "    if (sec !== lastSec) { lastSec = sec; if (now) now.textContent = '00:' + ('0' + sec).slice(-2); }")
    return src
