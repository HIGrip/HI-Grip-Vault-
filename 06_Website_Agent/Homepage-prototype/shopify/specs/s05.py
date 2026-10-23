from gen import section_basics, button, jr
from cssedit import fsize, color

SID = '05'
FILE = 'hp-05-features'
NAME = 'HÏ 05 · Features (360°)'
TEMPLATE = '05-features.liquid'
CSS = '05-features.css'
JS = '05-features.js'


def settings(sp):
    sp.header('Tekst')
    sp.text('heading', 'Kop (onzichtbaar, voor SEO en schermlezers)', 'De features van de Performance Gripsokken 2.0')
    sp.select('heading_tag', 'Kopniveau (SEO)', [('h2', 'H2'), ('h1', 'H1'), ('p', 'Gewone tekst')], 'h2')
    sp.size('giant', 'Grote featurenaam: grootte', '--hp-05-giant-k', '.hp-05-giant')
    sp.paint('giant_c', 'Grote featurenaam: kleur', '.hp-05-giant')
    sp.text('cta_label', 'Knop: tekst', 'Shop de 2.0')
    sp.url('cta_link', 'Knop: link', '/products/performance-gripsokken-2-0-zwart')
    sp.text('reset_label', 'Knop "hele sok"', 'Hele sok')

    sp.header('360°-opname')
    sp.text('frame_prefix', 'Bestandsnaam frames (zonder nummer)', 'hp-f360-s',
            info='Frames staan in Instellingen > Bestanden als <naam>000.webp, <naam>003.webp, … (3 cijfers).')
    sp.add({'type': 'number', 'id': 'frame_count', 'label': 'Aantal frames', 'default': 137, 'info': 'Het ontwerp gebruikt 137 frames (elke 3e van 411).'})
    sp.range('frame_step', 'Stap in de nummering', 1, 10, 1, None, 3)
    sp.range('frame_size', 'Framegrootte (px, vierkant)', 400, 2400, 100, 'px', 1600)
    sp.text('stage_label', 'Draaiknop: toegankelijke naam', 'Sleep om te draaien')
    sp.text('stage_alt', 'Alt-tekst eerste frame', '360-gradenopname van de Performance Gripsokken 2.0 in wit. Sleep om te draaien.')
    sp.check('intro', 'Bij binnenkomst één keer rond draaien', True)
    sp.check('auto', 'Daarna zelf de features langslopen', True)
    sp.range('cycle', 'Tijd per feature', 1, 15, 0.5, 's', 4.5, '--hp-05-cycle', fmt='{v}s')

    sp.header('Features')
    sp.para('Elke feature is een blok (maximaal 8: op laptop 1–4 links en 5–8 rechts). Frame = draaipositie; marker = punt op de sok in dat frame (% van het beeld).')
    sp.size('fname', 'Naam grootte', '--hp-05-fname-k', '.hp-05-feat__name')
    sp.size('fspec', 'Kerngegeven grootte (laptop)', '--hp-05-fspec-k', '.hp-05-feat__spec', mn_frac=0.0)
    sp.size('ftext', 'Uitleg grootte', '--hp-05-ftext-k', '.hp-05-feat__text', mn_frac=0.0)
    sp.paint('feat_c', 'Feature: kleur', '.hp-05-feat')
    sp.paint('feat_on', 'Actieve feature: kleur', '.hp-05-feat', target='.hp-05 .hp-05-feat[aria-pressed="true"], .hp-05 .hp-05-feat[aria-pressed="true"] .hp-05-feat__no, .hp-05 .hp-05-feat[aria-pressed="true"] .hp-05-feat__spec, .hp-05 .hp-05-feat[aria-pressed="true"] .hp-05-feat__text', default='#0A0A0A')
    sp.paint('spec_c', 'Kerngegeven: kleur (laptop)', '.hp-05-feat__spec', target='.hp-05-feat__spec')
    sp.paint('line_c', 'Lijn naar de sok (laptop)', '', target='.hp-05-list > li::after', prop='backgroundColor', default=('#0A0A0A', 0.12))
    sp.paint('line_on', 'Lijn naar de sok, actief (laptop)', '', target='.hp-05-list > li:has(.hp-05-feat[aria-pressed="true"])::after', prop='backgroundColor', default='#0A0A0A')
    sp.paint('detail_c', 'Uitleg onder de sok (mobiel)', '.hp-05-detail')
    sp.size('detail', 'Uitleg onder de sok (mobiel): grootte', '--hp-05-detail-k', '.hp-05-detail')
    sp.paint('mark_ring', 'Marker: ring', '', 'borderColor', target='.hp-05-mark__ring', default='#0A0A0A')
    sp.paint('mark_bg', 'Marker: cijfer achtergrond', '.hp-05-mark__no', 'backgroundColor')
    sp.paint('mark_fg', 'Marker: cijfer', '.hp-05-mark__no')
    sp.paint('reset_bg', 'Knop "hele sok": achtergrond', '.hp-05-reset', 'backgroundColor')
    sp.paint('reset_fg', 'Knop "hele sok": tekst', '.hp-05-reset')

    section_basics(sp, '#F7F7F7', '#0A0A0A', pad=False)
    sp.size('pin_pt', 'Ruimte boven', '--hp-05-pt-k', '.hp-05-pin', prop='paddingTop')
    sp.size('pin_pb', 'Ruimte onder', '--hp-05-pb-k', '.hp-05-pin', prop='paddingBottom')
    sp.size('btn', 'Knoptekst grootte', '--hp-btn-k', '.hp-05-cta')
    button(sp, light=False)


FEAT = [
    {'type': 'text', 'id': 'name', 'label': 'Naam', 'default': 'Maximale grip'},
    {'type': 'text', 'id': 'spec', 'label': 'Kerngegeven (laptop)', 'default': 'Siliconen zones'},
    {'type': 'textarea', 'id': 'text', 'label': 'Uitleg', 'default': 'Siliconen zones houden je voet vast in je schoen'},
    {'type': 'number', 'id': 'frame', 'label': 'Draaipositie (framenummer 0–408)', 'default': 0},
    {'type': 'number', 'id': 'mark_x', 'label': 'Marker: horizontaal (%)', 'default': 50},
    {'type': 'number', 'id': 'mark_y', 'label': 'Marker: verticaal (%)', 'default': 50},
    {'type': 'number', 'id': 'mark_z', 'label': 'Marker: diepte richting camera (%)', 'default': 10},
]
BLOCKS = [{'type': 'feature', 'name': 'Feature', 'settings': FEAT}]
MAX_BLOCKS = 8
DEFAULT_BLOCKS = [
    ('feature', {'name': 'Maximale grip', 'spec': 'Siliconen zones', 'text': 'Siliconen zones houden je voet vast in je schoen', 'frame': 96, 'mark_x': 50, 'mark_y': 74, 'mark_z': 10}),
    ('feature', {'name': 'Compressie', 'spec': '15–20 mmHg', 'text': '15–20 mmHg ondersteunt je doorbloeding tijdens inspanning', 'frame': 264, 'mark_x': 41, 'mark_y': 43, 'mark_z': 8}),
    ('feature', {'name': 'Versterkte hiel', 'spec': 'Extra dikte', 'text': 'Extra dikte precies onder je hiel', 'frame': 6, 'mark_x': 75.5, 'mark_y': 50, 'mark_z': 4}),
    ('feature', {'name': 'Ademend', 'spec': 'Open structuur', 'text': 'Open structuur bovenop de voet', 'frame': 300, 'mark_x': 35, 'mark_y': 60, 'mark_z': 8}),
    ('feature', {'name': 'Coolmax®', 'spec': '30% Coolmax', 'text': '30% Coolmax voert vocht direct af van de huid', 'frame': 360, 'mark_x': 49, 'mark_y': 30, 'mark_z': 10}),
    ('feature', {'name': 'Naadloos', 'spec': 'Zonder stiksels', 'text': 'Rondom gebreid zonder stiksels, naadloze teenzone', 'frame': 336, 'mark_x': 48, 'mark_y': 88, 'mark_z': 12}),
    ('feature', {'name': 'Special cushioning', 'spec': 'Dempingzones', 'text': 'Speciale dempingzones onder de voet', 'frame': 216, 'mark_x': 46, 'mark_y': 84, 'mark_z': 6}),
    ('feature', {'name': 'Hoogwaardige materialen', 'spec': 'Gekozen garens', 'text': 'Zorgvuldig gekozen garens voor meer comfort, wedstrijd na wedstrijd', 'frame': 0, 'mark_x': 56, 'mark_y': 50, 'mark_z': 10}),
]


def css(sh):
    color(sh, '.hp-05', 'background', '--hp-05-bg')
    color(sh, '.hp-05', 'color', '--hp-05-fg')
    fsize(sh, '.hp-05-giant', '--hp-05-giant-k')
    fsize(sh, '.hp-05-feat__name', '--hp-05-fname-k')
    fsize(sh, '.hp-05-feat__spec', '--hp-05-fspec-k')
    fsize(sh, '.hp-05-feat__text', '--hp-05-ftext-k')
    fsize(sh, '.hp-05-detail', '--hp-05-detail-k')
    sh.edit('.hp-05-pin', 'padding', lambda v: f'calc({_first(v)} * var(--hp-05-pt-k, 1)) {_mid(v)} calc({_third(v)} * var(--hp-05-pb-k, 1)) {_last(v)}', count=2)
    sh.edit('.hp-05-pin', 'padding-block', lambda v: f'calc({v} * var(--hp-05-pt-k, 1)) calc({v} * var(--hp-05-pb-k, 1))')
    sh.edit('.hp-05.is-auto .hp-05-feat[aria-pressed="true"]::after', 'animation-duration', lambda v: f'var(--hp-05-cycle, {v})')


def _parts(v):
    from cssedit import _split_ws
    p = _split_ws(v)
    assert len(p) == 4, v
    return p


def _first(v): return _parts(v)[0]
def _mid(v): return _parts(v)[1]
def _third(v): return _parts(v)[2]
def _last(v): return _parts(v)[3]


def js(src):
    src = jr(src, "  var N = 137, SRC = 1600, STEP = 3, ANG = Math.PI * 2 / N, AXIS = 0.5;",
             "  var N = parseInt(root.getAttribute('data-n'), 10) || 137, SRC = 1600, STEP = parseInt(root.getAttribute('data-step'), 10) || 3, ANG = Math.PI * 2 / N, AXIS = 0.5;\n"
             "  var FBASE = root.getAttribute('data-frames') || '';")
    start = src.index('  var PRESETS = {')
    end = src.index('  /* Motion uit de tokens */')
    src = src[:start] + """  /* Shopify: draaiposities en markers komen uit de feature-blokken (data-frame, data-mark). */
  var PRESETS = { totaal: { frame: 0, zoom: 1, cx: 0.5, cy: 0.5 } };
  var FEATURES = {};
  feats.forEach(function (b) {
    var k = b.dataset.f;
    PRESETS[k] = { frame: parseFloat(b.dataset.frame) || 0, zoom: 1, cx: 0.5, cy: 0.5 };
    FEATURES[k] = { preset: k, mark: (b.dataset.mark || '0.5,0.5,0.1').split(',').map(Number) };
  });

""" + src[end:]
    src = jr(src, "  function src(i) { return 'f360/s' + ('00' + i * STEP).slice(-3) + '.webp'; }",
             "  function src(i) { return FBASE.replace(/\\d{3}(\\.webp)$/i, ('00' + i * STEP).slice(-3) + '$1'); }")
    src = jr(src, "    ctx.drawImage(im, v.x0 * SRC, v.y0 * SRC, v.sw * SRC, v.sw * SRC, 0, 0, canvas.width, canvas.height);",
             "    var S = im.naturalWidth || SRC;\n    ctx.drawImage(im, v.x0 * S, v.y0 * S, v.sw * S, v.sw * S, 0, 0, canvas.width, canvas.height);")
    src = jr(src, "  function startAuto() { if (!autoStopped) root.classList.add('is-auto'); }",
             "  function startAuto() { if (!autoStopped && root.getAttribute('data-auto') !== 'off') root.classList.add('is-auto'); }")
    src = jr(src, "    goTo(feats[0].dataset.f, true, startAuto);",
             "    goTo(feats[0].dataset.f, root.getAttribute('data-intro') !== 'off', startAuto);")
    return src
