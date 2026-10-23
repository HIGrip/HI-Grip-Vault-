"""Helpers om sectie-instellingen (schema), de bijbehorende CSS-variabelen en de standaardwaarden in één keer te
beschrijven. Elke instelling die de opmaak raakt, zet een CSS-variabele die in de (bewerkte) CSS van de sectie wordt
gebruikt; de standaardwaarde is exact de ontwerpwaarde van homepage 1.36, gemeten in het prototype.
"""
import json
import math
import os
import re

HERE = os.path.dirname(os.path.abspath(__file__))
MEASURE = {}
_mp = os.path.join(HERE, 'test', 'measure.json')
if os.path.exists(_mp):
    MEASURE = json.load(open(_mp))

BP_M = '(max-width: 768px)'
BP_D = '(min-width: 769px)'


def px(v):
    if v is None:
        raise SystemExit('meting ontbreekt')
    if isinstance(v, (int, float)):
        return float(v)
    v = v.strip()
    if v.endswith('px'):
        return float(v[:-2])
    if v in ('normal', 'auto', 'none'):
        return 0.0
    return float(v)


class Spec:
    """Verzamelt instellingen en de variabelen die ze zetten."""

    def __init__(self, sid):
        self.sid = sid
        self.settings = []
        self.root_vars = []      # (css-var, liquid-expressie)
        self.m_vars = []         # alleen mobiel
        self.d_vars = []         # alleen desktop
        self.extra_css = []      # vrije Liquid-CSS (bijv. uitlijning)
        self.measure_keys = {}   # key -> (selector, prop)
        self.pre = []            # Liquid-assigns vóór het style-blok
        self.append_css = []     # vaste CSS die achter de sectie-CSS komt (gebruikt de variabelen)
        self.bp_vars = {}        # media-query -> [(var, expr)] voor afwijkende breekpunten
        self.defaults = {}       # id -> standaardwaarde (voor index.json)

    # ---------- basis ----------
    def add(self, st):
        self.settings.append(st)
        if 'default' in st and 'id' in st:
            self.defaults[st['id']] = st['default']
        return st

    def header(self, text, info=None):
        d = {'type': 'header', 'content': text}
        if info:
            d['info'] = info
        self.settings.append(d)

    def para(self, text):
        self.settings.append({'type': 'paragraph', 'content': text})

    def text(self, id, label, default=None, info=None, multiline=False):
        d = {'type': 'textarea' if multiline else 'text', 'id': id, 'label': label}
        if default is not None:
            d['default'] = default
        if info:
            d['info'] = info
        return self.add(d)

    def inline(self, id, label, default=None, info=None):
        d = {'type': 'inline_richtext', 'id': id, 'label': label}
        if default is not None:
            d['default'] = default
        if info:
            d['info'] = info
        return self.add(d)

    def rich(self, id, label, default=None):
        d = {'type': 'richtext', 'id': id, 'label': label}
        if default is not None:
            d['default'] = default
        return self.add(d)

    def url(self, id, label, value, info=None):
        """url-instellingen kennen geen vrije standaard; de waarde komt in index.json."""
        d = {'type': 'url', 'id': id, 'label': label}
        if info:
            d['info'] = info
        self.settings.append(d)
        self.defaults[id] = value
        return d

    def image(self, id, label, value=None, info=None):
        d = {'type': 'image_picker', 'id': id, 'label': label}
        if info:
            d['info'] = info
        self.settings.append(d)
        if value:
            self.defaults[id] = value
        return d

    def video(self, id, label, info=None):
        d = {'type': 'video', 'id': id, 'label': label}
        if info:
            d['info'] = info
        self.settings.append(d)
        return d

    def check(self, id, label, default, info=None):
        d = {'type': 'checkbox', 'id': id, 'label': label, 'default': default}
        if info:
            d['info'] = info
        return self.add(d)

    def select(self, id, label, options, default, info=None):
        d = {'type': 'select', 'id': id, 'label': label,
             'options': [{'value': v, 'label': l} for v, l in options], 'default': default}
        if info:
            d['info'] = info
        return self.add(d)

    # ---------- opmaak ----------
    def color(self, id, label, default, var, info=None):
        d = {'type': 'color', 'id': id, 'label': label, 'default': default}
        if info:
            d['info'] = info
        self.add(d)
        self.root_vars.append((var, f'{{{{ s.{id} }}}}'))

    def color_alpha(self, id, label, default, alpha, var):
        """Kleur + dekking (%) -> rgba() via color_modify."""
        self.add({'type': 'color', 'id': id, 'label': label, 'default': default})
        self.add({'type': 'range', 'id': id + '_a', 'label': label + ': dekking', 'min': 0, 'max': 100, 'step': 1,
                  'unit': '%', 'default': alpha})
        self.pre.append(f"{{%- assign hp_a_{id} = s.{id}_a | divided_by: 100.0 -%}}")
        self.root_vars.append((var, f"{{{{ s.{id} | color_modify: 'alpha', hp_a_{id} }}}}"))

    def range(self, id, label, mn, mx, step, unit, default, var=None, fmt='{v}px', where='root', info=None):
        d = {'type': 'range', 'id': id, 'label': label, 'min': mn, 'max': mx, 'step': step, 'default': default}
        if unit:
            d['unit'] = unit
        if info:
            d['info'] = info
        _check_range(d)
        self.add(d)
        if var:
            expr = fmt.replace('{v}', f'{{{{ s.{id} }}}}')
            {'root': self.root_vars, 'm': self.m_vars, 'd': self.d_vars}[where].append((var, expr))

    def measure(self, key, selector, prop):
        self.measure_keys[f'{self.sid}.{key}'] = (selector, prop)

    def size(self, key, label, var, selector=None, prop='fontSize', unit='px', mn_frac=0.3, bp=769):
        """Twee schuifjes (mobiel/laptop) in px; de standaard is de gemeten ontwerpwaarde. Zet --var = waarde/standaard,
        waarmee de CSS de oorspronkelijke (vloeiende) waarde vermenigvuldigt."""
        if selector:
            self.measure(key, selector, prop)
        if bp == 769:
            groups = (('m', self.m_vars, 'mobiel'), ('d', self.d_vars, 'laptop'))
        else:
            groups = (('m', self.bp_vars.setdefault(f'(max-width: {bp - 1}px)', []), 'mobiel'),
                      ('d', self.bp_vars.setdefault(f'(min-width: {bp}px)', []), 'laptop'))
        for bp, where, lab in groups:
            ref = _ref(f'{self.sid}.{key}', bp)
            mn, mx, step, dflt = _grid(ref, mn_frac)
            sid = f'{key}_{bp}'
            self.add({'type': 'range', 'id': sid, 'label': f'{label} ({lab})', 'min': mn, 'max': mx, 'step': step,
                      'unit': unit, 'default': dflt})
            if dflt == 0 and MEASURE:
                raise SystemExit(f'{self.sid} {key}: ontwerpwaarde 0 kan niet geschaald worden')
            where.append((var, f'{{{{ s.{sid} | times: 1.0 | divided_by: {dflt} }}}}'))

    def space(self, key, label, kvar, addvar, selector, prop):
        """Ruimte (padding/gap): bij een ontwerpwaarde > 0 schalen, bij 0 optellen (px)."""
        self.measure(key, selector, prop)
        for bp, where, lab in (('m', self.m_vars, 'mobiel'), ('d', self.d_vars, 'laptop')):
            ref = _ref(f'{self.sid}.{key}', bp)
            if ref is None:
                ref = 10.0  # eerste doorgang: nog niet gemeten
            sid = f'{key}_{bp}'
            if round(ref) <= 0:
                self.add({'type': 'range', 'id': sid, 'label': f'{label} ({lab})', 'min': 0, 'max': 200, 'step': 2,
                          'unit': 'px', 'default': 0})
                where.append((addvar, f'{{{{ s.{sid} }}}}px'))
                where.append((kvar, '1'))
            else:
                mn, mx, step, dflt = _grid(ref, 0.0)
                self.add({'type': 'range', 'id': sid, 'label': f'{label} ({lab})', 'min': mn, 'max': mx, 'step': step,
                          'unit': 'px', 'default': dflt})
                where.append((kvar, f'{{{{ s.{sid} | times: 1.0 | divided_by: {dflt} }}}}'))
                where.append((addvar, '0px'))

    def paint(self, key, label, selector, prop='color', target=None, info=None, default=None):
        """Kleurinstelling met de gemeten ontwerpkleur als standaard (apart voor mobiel en laptop als die verschillen).
        Voegt achter de sectie-CSS `target { prop: var(--hp-NN-key) }` toe."""
        var = f'--hp-{self.sid}-{key}'
        if default:  # vaste ontwerpkleur (bijv. een staat die bij het meten niet actief is)
            cm = cd = (default, 1.0) if isinstance(default, str) else default
        else:
            self.measure(key, selector, prop)
            cm, cd = _ref_color(f'{self.sid}.{key}', 'm'), _ref_color(f'{self.sid}.{key}', 'd')
        css_prop = re.sub(r'([A-Z])', lambda m: '-' + m.group(1).lower(), prop)
        self.append_css.append(f'{target or selector} {{ {css_prop}: var({var}); }}')
        if cm == cd:
            self._paint_one(key, label, cm, var, 'root')
        else:
            self._paint_one(key + '_m', label + ' (mobiel)', cm, var, 'm')
            self._paint_one(key + '_d', label + ' (laptop)', cd, var, 'd')

    def _paint_one(self, id, label, rgba, var, where):
        hexc, a = rgba
        lst = {'root': self.root_vars, 'm': self.m_vars, 'd': self.d_vars}[where]
        if a >= 0.999:
            self.add({'type': 'color', 'id': id, 'label': label, 'default': hexc})
            lst.append((var, f'{{{{ s.{id} }}}}'))
        else:
            self.add({'type': 'color', 'id': id, 'label': label, 'default': hexc})
            self.add({'type': 'range', 'id': id + '_a', 'label': label + ': dekking', 'min': 0, 'max': 100, 'step': 1,
                      'unit': '%', 'default': int(round(a * 100))})
            self.pre.append(f"{{%- assign hp_a_{id} = s.{id}_a | divided_by: 100.0 -%}}")
            lst.append((var, f"{{{{ s.{id} | color_modify: 'alpha', hp_a_{id} }}}}"))

    def css(self, liquid_css):
        """Vrije, Liquid-gestuurde CSS; SEL wordt de sectie-wrapper."""
        self.extra_css.append(liquid_css)

    # ---------- uitvoer ----------
    def style_block(self):
        sel = '#shopify-section-{{ section.id }}'
        out = list(self.pre) + ['<style>']
        if self.root_vars:
            out.append(sel + ' {' + ' '.join(f'{v}: {e};' for v, e in self.root_vars) + '}')
        if self.m_vars:
            out.append('@media ' + BP_M + ' { ' + sel + ' {' + ' '.join(f'{v}: {e};' for v, e in self.m_vars) + '} }')
        if self.d_vars:
            out.append('@media ' + BP_D + ' { ' + sel + ' {' + ' '.join(f'{v}: {e};' for v, e in self.d_vars) + '} }')
        for mq, lst in self.bp_vars.items():
            out.append('@media ' + mq + ' { ' + sel + ' {' + ' '.join(f'{v}: {e};' for v, e in lst) + '} }')
        for c in self.extra_css:
            out.append(c.replace('SEL', sel))
        out.append('</style>')
        return '\n'.join(out)


def _ref(key, bp):
    if key not in MEASURE.get(bp, {}):
        return None
    return px(MEASURE[bp][key])


def _ref_color(key, bp):
    v = MEASURE.get(bp, {}).get(key)
    if not v:
        return ('#000000', 1.0)
    m = re.match(r'rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\)', v)
    if not m:
        raise SystemExit(f'kleur {key}: {v}')
    r, g, b = (int(round(float(x))) for x in m.groups()[:3])
    a = float(m.group(4)) if m.group(4) is not None else 1.0
    return ('#%02X%02X%02X' % (r, g, b), a)


def _grid(ref, mn_frac):
    """Kies min/max/stap zo dat (max-min)/stap <= 100 en de standaard (ref, afgerond) op het raster ligt."""
    if ref is None:
        return 0, 100, 1, 1
    for step in (1, 2, 4, 5, 10, 20, 25, 50):
        mn = int(math.floor(ref * mn_frac / step) * step)
        mx = mn + step * 100
        if mx >= ref * 2.2 + step and mx >= 24:
            dflt = mn + int(round((ref - mn) / step)) * step
            if dflt <= 0:
                dflt = mn + step
            return mn, mx, step, dflt
    raise SystemExit(f'geen raster voor {ref}')


def _check_range(d):
    n = (d['max'] - d['min']) / d['step']
    if n > 101 or abs(n - round(n)) > 1e-9:
        raise SystemExit(f"range {d['id']}: {n} stappen")
    r = (d['default'] - d['min']) / d['step']
    if abs(r - round(r)) > 1e-6 or not (d['min'] <= d['default'] <= d['max']):
        raise SystemExit(f"range {d['id']}: standaard {d['default']} niet op raster")


# ---------- veelgebruikte groepen ----------

def section_basics(sp, bg, fg, pad=True, bg_var=None, fg_var=None):
    sp.header('Sectie')
    sp.color('bg', 'Achtergrond', bg, bg_var or f'--hp-{sp.sid}-bg')
    sp.color('fg', 'Tekstkleur', fg, fg_var or f'--hp-{sp.sid}-fg')
    if pad:
        sel = f'.hp-{sp.sid}'
        sp.space('pt', 'Ruimte boven', '--hp-pt-k', '--hp-pt-add', sel, 'paddingTop')
        sp.space('pb', 'Ruimte onder', '--hp-pb-k', '--hp-pb-add', sel, 'paddingBottom')


def button(sp, light=True, label='Knop', prefix='btn'):
    """Kleuren en vorm van de pill-knoppen in de sectie (zie .hp-pill in de basis-CSS)."""
    bg, fg, cbg, cfg = ('#FFFFFF', '#0A0A0A', '#0A0A0A', '#FFFFFF') if light else ('#0A0A0A', '#FFFFFF', '#FFFFFF', '#0A0A0A')
    sp.header(f'{label}stijl')
    sp.color(f'{prefix}_bg', 'Achtergrond', bg, '--hp-btn-bg')
    sp.color(f'{prefix}_fg', 'Tekst', fg, '--hp-btn-fg')
    sp.color(f'{prefix}_cbg', 'Pijlcirkel', cbg, '--hp-btn-cbg')
    sp.color(f'{prefix}_cfg', 'Pijl', cfg, '--hp-btn-cfg')
    sp.color(f'{prefix}_bd', 'Rand', bg, '--hp-btn-bd')
    sp.range(f'{prefix}_bw', 'Randdikte', 0, 6, 1, 'px', 0, '--hp-btn-bw')
    sp.range(f'{prefix}_r', 'Afronding', 0, 100, 1, 'px', 100, '--hp-btn-r', fmt='{v}px',
             info='100 = volledig rond (pill)')
    sp.color(f'{prefix}_hbg', 'Hover: achtergrond', bg, '--hp-btn-hbg')
    sp.color(f'{prefix}_hfg', 'Hover: tekst', fg, '--hp-btn-hfg')
    sp.color(f'{prefix}_hbd', 'Hover: rand', bg, '--hp-btn-hbd')
    sp.color(f'{prefix}_hcbg', 'Hover: pijlcirkel', cbg, '--hp-btn-hcbg')
    sp.color(f'{prefix}_hcfg', 'Hover: pijl', cfg, '--hp-btn-hcfg')


def align(sp, id, label, default, selector, options=None):
    """Uitlijning: zet text-align en justify-* op de doelelementen, alleen als het afwijkt van de standaard."""
    options = options or [('left', 'Links'), ('center', 'Midden'), ('right', 'Rechts')]
    sp.select(id, label, options, default)
    m = {'left': ('left', 'start', 'flex-start', '0 auto 0 0'), 'center': ('center', 'center', 'center', '0 auto'),
         'right': ('right', 'end', 'flex-end', '0 0 0 auto')}
    parts = []
    for v, (ta, ji, jc, mi) in m.items():
        if v == default:
            continue
        parts.append(f"{{%- if s.{id} == '{v}' -%}}SEL {selector} {{ text-align: {ta}; justify-items: {ji}; justify-content: {jc}; justify-self: {ji}; align-items: {jc}; }} SEL {selector} > * {{ margin-inline: {mi}; justify-self: {ji}; }}{{%- endif -%}}")
    sp.css('\n'.join(parts))


def jr(src, a, b, n=1):
    """Vervang in JS-bron; faalt als de oorspronkelijke tekst niet precies n keer voorkomt."""
    c = src.count(a)
    if c != n:
        raise SystemExit(f'JS-vervanging: {c} treffers voor {a[:70]!r}')
    return src.replace(a, b)


def head_layout(sp, sel_head, default='split'):
    """Kopblok (.hp-head): kop en intro naast elkaar op laptop (ontwerp), onder elkaar, of gecentreerd."""
    sp.select('head_layout', 'Kop en intro: opbouw', [('split', 'Naast elkaar (laptop)'), ('stack', 'Onder elkaar'),
                                                      ('center', 'Gecentreerd')], default)
    sp.css("{%- if s.head_layout == 'stack' -%}@media (min-width: 769px) { SEL " + sel_head + " { grid-template-columns: minmax(0, 1fr); } SEL " + sel_head + " .hp-lead { justify-self: start; } }{%- endif -%}"
           "{%- if s.head_layout == 'center' -%}SEL " + sel_head + " { justify-items: center; text-align: center; } SEL " + sel_head + " > * { margin-inline: auto; } @media (min-width: 769px) { SEL " + sel_head + " { grid-template-columns: minmax(0, 1fr); } SEL " + sel_head + " .hp-lead { justify-self: center; } }{%- endif -%}")
