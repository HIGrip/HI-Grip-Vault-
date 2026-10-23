"""Bouwt de Shopify-themabestanden voor de HÏ-homepage uit het 1.36-prototype.

  python3 build.py --measure   meet de ontwerpwaarden in het prototype (http://localhost:8801/index.html)
  python3 build.py             schrijft theme/ (sections, snippets, assets, templates/index.json)

Elke sectie heeft een spec in specs/sNN.py: instellingen (schema + CSS-variabelen), CSS-bewerkingen, JS-aanpassingen,
blokken en de standaardinhoud. De standaarden zijn exact de waarden van het ontwerp.
"""
import importlib
import json
import os
import re
import subprocess
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
sys.path.insert(0, os.path.join(HERE, 'specs'))
import gen  # noqa: E402
import cssedit  # noqa: E402

ORDER = ['01', '02', '03', '04', '05', '06', '07', '08', '14', '09', '10', '11', '12', '13']
OUT = os.path.join(HERE, 'theme')
SRC = os.path.join(HERE, 'src')


def rd(*p):
    return open(os.path.join(*p), encoding='utf8').read()


def wr(path, text):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    open(path, 'w', encoding='utf8').write(text)


def load_specs():
    specs = []
    for sid in ORDER:
        p = os.path.join(HERE, 'specs', f's{sid}.py')
        if os.path.exists(p):
            specs.append(importlib.import_module(f's{sid}'))
    return specs


def collect(specs):
    out = []
    for m in specs:
        sp = gen.Spec(m.SID)
        m.settings(sp)
        out.append((m, sp))
    return out


def measure(specs):
    targets = []
    for m, sp in collect(specs):
        for key, (sel, prop) in sp.measure_keys.items():
            targets.append([key, sel, prop])
    tf = os.path.join(HERE, 'test', 'targets.json')
    wr(tf, json.dumps(targets, indent=1))
    subprocess.run(['node', os.path.join(HERE, 'test', 'measure.js'), tf, 'http://localhost:8801/index.html',
                    os.path.join(HERE, 'test', 'measure.json')], check=True)
    res = json.load(open(os.path.join(HERE, 'test', 'measure.json')))
    missing = [k for k in res['m'] if res['m'][k] is None]
    print('gemeten:', len(targets), 'ontbrekend:', missing)


def schema(m, sp):
    d = {'name': m.NAME, 'tag': 'div', 'class': 'hp-shopify-section', 'settings': sp.settings}
    if getattr(m, 'BLOCKS', None):
        d['blocks'] = m.BLOCKS
        d['max_blocks'] = getattr(m, 'MAX_BLOCKS', 16)
    preset = {'name': m.NAME}
    if getattr(m, 'DEFAULT_BLOCKS', None):
        preset['blocks'] = [{'type': t, 'settings': {k: v for k, v in st.items() if not str(v).startswith('shopify://') and k not in getattr(m, 'NO_PRESET', [])}} for t, st in m.DEFAULT_BLOCKS]
    d['presets'] = [preset]
    return d


def main():
    specs = load_specs()
    if '--measure' in sys.argv:
        measure(specs)
        return
    pairs = collect(specs)
    # CSS
    css = ['/* HÏ Grip homepage 1.36 · Shopify. Gebouwd met shopify/build.py uit het prototype; niet met de hand bewerken. */',
           rd(SRC, 'css', '00-tokens.css'), rd(SRC, 'css', '00-base.css')]
    js = [rd(SRC, 'js', '00-base.js')]
    index = {'sections': {}, 'order': []}
    for m, sp in pairs:
        sh = cssedit.Sheet(rd(SRC, 'css', m.CSS), m.SID)
        # ruimte boven/onder van de sectie zelf
        root = f'.hp-{m.SID}'
        for prop in ('padding-block', 'padding-top', 'padding-bottom'):
            try:
                if prop == 'padding-block':
                    sh.edit(root, prop, cssedit.pad(('--hp-pt-k', '--hp-pb-k'), ('--hp-pt-add', '--hp-pb-add')))
                elif prop == 'padding-top':
                    sh.edit(root, prop, lambda v: f'calc({v} * var(--hp-pt-k, 1) + var(--hp-pt-add, 0px))')
                else:
                    sh.edit(root, prop, lambda v: f'calc({v} * var(--hp-pb-k, 1) + var(--hp-pb-add, 0px))')
            except SystemExit:
                pass
        m.css(sh)
        if sp.append_css:
            sh.append('/* Shopify: kleuren uit de sectie-instellingen (standaard = ontwerp) */\n' + '\n'.join(sp.append_css))
        css.append(f'/* ---- {m.SID} {m.FILE} ---- */\n' + sh.text())
        if getattr(m, 'JS', None):
            src = rd(SRC, 'js', m.JS)
            src = m.js(src)
            js.append(f'/* ---- {m.SID} {m.FILE} ---- */\n' + wrap_js(src, m.SID))
        tpl = rd(SRC, 'sections', m.TEMPLATE)
        tpl = tpl.replace('{%- comment -%}HP:STYLE{%- endcomment -%}', sp.style_block())
        sch = json.dumps(schema(m, sp), ensure_ascii=False, indent=2)
        tpl = tpl.replace('{%- comment -%}HP:SCHEMA{%- endcomment -%}', '{% schema %}\n' + sch + '\n{% endschema %}')
        assert 'HP:' not in tpl, m.SID
        wr(os.path.join(OUT, 'sections', m.FILE + '.liquid'), tpl)
        # index.json
        key = 'hp_' + m.SID
        entry = {'type': m.FILE, 'settings': sp.defaults}
        if getattr(m, 'DEFAULT_BLOCKS', None):
            entry['blocks'] = {}
            entry['block_order'] = []
            for i, (t, st) in enumerate(m.DEFAULT_BLOCKS):
                bid = f'{t}_{i + 1}'
                entry['blocks'][bid] = {'type': t, 'settings': st}
                entry['block_order'].append(bid)
        index['sections'][key] = entry
        index['order'].append(key)
    css_text = '\n'.join(css)
    wr(os.path.join(OUT, 'assets', 'hp-home.css'), css_text)
    js_text = '/* HÏ Grip homepage 1.36 · Shopify. Gebouwd met shopify/build.py; niet met de hand bewerken. */\n' + \
        '(function () {\nif (window.__hpHome) return;\nwindow.__hpHome = true;\n' + '\n'.join(js) + '\n})();\n'
    wr(os.path.join(OUT, 'assets', 'hp-home.js'), js_text)
    for f in os.listdir(os.path.join(SRC, 'snippets')):
        wr(os.path.join(OUT, 'snippets', f), rd(SRC, 'snippets', f))
    wr(os.path.join(OUT, 'templates', 'index.json'), json.dumps(index, ensure_ascii=False, indent=2))
    # controle: elke CSS-variabele die een instelling zet, moet in de CSS gebruikt worden
    for m, sp in pairs:
        for var, _ in sp.root_vars + sp.m_vars + sp.d_vars + [x for l in sp.bp_vars.values() for x in l]:
            if f'var({var}' not in css_text:
                raise SystemExit(f'{m.SID}: variabele {var} wordt nergens in de CSS gebruikt')
    print('klaar:', ', '.join(m.SID for m, _ in pairs), '| css', len(css_text), 'js', len(js_text))


def wrap_js(src, sid):
    """Prototype-IIFE's met document.querySelector('[data-hp="NN"]') -> één hpRegister('NN', function (root) {...}),
    met elk oorspronkelijk blok als eigen functie (zodat een vroege return alleen dat blok stopt)."""
    blocks = re.split(r'(?m)^\(function \(\) \{\n', src)
    head, parts = blocks[0], []
    for b in blocks[1:]:
        m = re.match(r"  'use strict';\n  var (\w+) = document\.querySelector\('\[data-hp=\"" + sid + r"\"\]'\);\n  if \(!\1(.*?)\) return;\n", b)
        if not m:
            raise SystemExit(f'{sid}: onbekende JS-kop: {b[:160]!r}')
        name, cond = m.group(1), m.group(2)
        body = b[m.end():]
        cut = body.rfind('})();')
        if cut < 0:
            raise SystemExit(f'{sid}: einde van het JS-blok niet gevonden')
        body = body[:cut] + '\n' + '\n'.join('  // ' + l.strip() for l in body[cut + 5:].strip().splitlines() if l.strip())
        extra = f'  if ({cond.strip().lstrip("|").strip()}) return;\n' if cond.strip() else ''
        parts.append(f"(function ({name}) {{\n  'use strict';\n{extra}{body}\n}})(root);")
    return head + f"window.hpRegister('{sid}', function (root) {{\n" + '\n'.join(parts) + '\n});\n'


if __name__ == '__main__':
    main()
