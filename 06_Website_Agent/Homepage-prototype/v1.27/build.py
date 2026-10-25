"""Bouwt index.html uit het contract en de secties.

Gebruik:
  py -3 build.py                 # alle secties uit rhythm.json die een map hebben
  py -3 build.py 01 05           # alleen deze secties
  py -3 build.py --csp 01        # met het CSP-testblok onder de secties (skelet)

Volgorde: tokens → base.css → secties (css) → transitions.css → html → base.js → sectie-js.
CSS en JS staan inline; beelden blijven relatieve paden en gaan als files mee bij publicatie
(zie publish-files.json, dat dit script ook schrijft).
"""
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
rd = lambda *p: open(os.path.join(HERE, *p), encoding='utf8').read()

args = [a for a in sys.argv[1:] if not a.startswith('--')]
csp = '--csp' in sys.argv
rhythm = json.loads(rd('contract', 'rhythm.json'))['sections']
assets = json.loads(rd('contract', 'assets.json'))

sections = []
for s in rhythm:
    d = os.path.join(HERE, 'sections', f"{s['id']}-{s['name']}")
    if os.path.isdir(d) and (not args or s['id'] in args):
        sections.append((s, d))

css_parts = ['/* @hp:tokens */', rd('contract', 'tokens.css'), '/* @hp:end */', '/* @hp:base */', rd('contract', 'base.css'), '/* @hp:end */']
html_parts, js_parts = [], [rd('contract', 'base.js')]
for s, d in sections:
    css_parts.append(f"/* ---- {s['id']} {s['name']} ---- */\n" + open(os.path.join(d, 'section.css'), encoding='utf8').read())
    html_parts.append(open(os.path.join(d, 'section.html'), encoding='utf8').read())
    js = open(os.path.join(d, 'section.js'), encoding='utf8').read().strip()
    if js:
        js_parts.append(f"/* ---- {s['id']} {s['name']} ---- */\n" + js)
tr = os.path.join(HERE, 'transitions.css')
if os.path.exists(tr):
    css_parts.append('/* ---- transitions ---- */\n' + rd('transitions.css'))

csp_block = ''
if csp:
    css_parts.append('.hp-csp { background: var(--hi-white); } .hp-csp__grid { display: grid; gap: var(--hp-space-sm); } @media (min-width: 769px) { .hp-csp__grid { grid-template-columns: 1fr 1fr; } } .hp-csp__log { font-size: var(--hp-type-small); color: var(--hi-graphite); white-space: pre-wrap; }')
    csp_block = '''<section class="hp-section hp-csp" aria-label="CSP-test"><div class="hp-container hp-csp__grid">
<figure class="hp-media" style="--hp-ar: 2000 / 924"><img id="hp-csp-team" src="teamfoto.jpg" alt="" width="2000" height="924" loading="lazy"></figure>
<figure class="hp-media" style="--hp-ar: 1 / 1"><img id="hp-csp-frame" src="f360/s096.webp" alt="" width="1600" height="1600" loading="lazy"></figure>
<p class="hp-csp__log" id="hp-csp-log">CSP-test laadt</p></div></section>'''
    js_parts.append('''(function () {
  var log = document.getElementById('hp-csp-log'), r = {};
  function show() { log.textContent = 'CSP-test\\n' + Object.keys(r).map(function (k) { return k + ': ' + r[k]; }).join('\\n'); }
  function watch(id, sel) { var i = document.querySelector(sel); if (!i) return; i.loading = 'eager';
    var done = function (ok) { r[id] = ok ? 'geladen (' + i.naturalWidth + 'px)' : 'GEBLOKKEERD'; show(); };
    if (i.complete && i.naturalWidth) done(true); else { i.onload = function () { done(true); }; i.onerror = function () { done(false); }; } }
  watch('hero (img/, meegepubliceerd)', '.hp-01-media__el'); watch('teamfoto (meegepubliceerd)', '#hp-csp-team'); watch('360-frame (server-side gekopieerd)', '#hp-csp-frame');
  document.fonts.ready.then(function () { r['Poppins 900 italic'] = document.fonts.check('italic 900 40px Poppins') ? 'geladen' : 'NIET geladen'; show(); });
})();''')

head = '''<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>HÏ Grip Homepage 1.27</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="icon" href="data:,">
<meta name="description" content="Performance gripsokken voor sporters. HÏ Grip, ga door waar anderen stoppen.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,800;1,900&display=swap">
'''
page = (head + '<style>\n' + '\n'.join(css_parts) + '\n</style>\n<main>\n' + '\n'.join(html_parts) + csp_block +
        '\n</main>\n<script>\n' + '\n'.join(js_parts) + '\n</script>\n')
open(os.path.join(HERE, 'index.html'), 'w', encoding='utf8').write(page)

# Welke files moeten mee bij publicatie: alles wat de pagina noemt.
files = {}
for p in assets['photos']:
    for f in p['files']:
        if f['path'] in page:
            files[f['path']] = os.path.join(HERE, f['path'])
for l in assets['local']:
    if l['path'] in page:
        files[l['path']] = os.path.join(HERE, l['path'])
frames = [f for f in assets['frames360']['paths'] if f in page or any(s['id'] == '05' for s, _ in sections)]
for f in frames:
    files[f] = {'artifact': assets['frames360']['bron_artifact'], 'path': f}
json.dump(files, open(os.path.join(HERE, 'publish-files.json'), 'w', encoding='utf8'), indent=1)
print(f"index.html: {len(page) // 1024} KB, secties: {[s['id'] for s, _ in sections]}, files: {len(files)}")
