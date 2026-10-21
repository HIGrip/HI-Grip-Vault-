"""Lint voor het HÏ Grip homepage-prototype.

Gebruik:
  py -3 contract/lint.py sections/NN-naam      # één sectie (verplicht groen vóór oplevering)
  py -3 contract/lint.py --page index.html     # de samengestelde pagina (Fase 2)

Faalt (exit 1) bij: hex/rgb/hsl buiten tokens.css, een font anders dan Poppins, selectors zonder .hp-NN-,
dubbele ID's, transition/animation zonder var(--hp-ease) en var(--hp-dur-*), letter-spacing > 0.1em,
radial-gradient, rotate() op badges/tags/labels, externe scripts, tekst die niet in copy/facts/assets staat,
links die niet in facts.json staan, beelden buiten assets.json, inline <style>/<script> in section.html,
fetchpriority buiten de hero, <img> zonder loading="lazy" of zonder width/height.
"""
import json
import os
import re
import sys
from html.parser import HTMLParser

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)


def load(name):
    with open(os.path.join(HERE, name), encoding='utf8') as f:
        return json.load(f)


def strings(obj, out):
    if isinstance(obj, str):
        out.append(obj)
    elif isinstance(obj, dict):
        for k, v in obj.items():
            if not k.startswith('_'):
                strings(v, out)
    elif isinstance(obj, list):
        for v in obj:
            strings(v, out)
    return out


def norm(s):
    s = s.replace(' ', ' ').replace('&nbsp;', ' ')
    return re.sub(r'\s+', ' ', s).strip().lower()


COPY, FACTS, ASSETS = load('copy.json'), load('facts.json'), load('assets.json')
CORPUS = [norm(s) for s in strings(COPY, []) + strings(FACTS, []) + strings(ASSETS, [])]
CORPUS_BLOB = '\n'.join(CORPUS)
LINKS = {s for s in strings(FACTS, []) if s.startswith(('http', '#'))}
IMG_PATHS = set()
for p in ASSETS['photos']:
    for f in p['files']:
        IMG_PATHS.add(f['path'])
for l in ASSETS['local']:
    IMG_PATHS.add(l['path'])
for f in ASSETS['frames360']['paths']:
    IMG_PATHS.add(f)


class Collector(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids, self.hrefs, self.imgs, self.texts, self.scripts, self.styles = [], [], [], [], [], 0
        self.skip = 0
        self.attr_texts = []
        self.fetchprio = 0
        self.inline_scripts = 0
        self.jsonld = 0
        self._in_script = None

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if 'id' in a:
            self.ids.append(a['id'])
        if tag == 'a' and 'href' in a:
            self.hrefs.append(a['href'])
        if tag in ('img', 'source'):
            self.imgs.append(a)
            if a.get('fetchpriority'):
                self.fetchprio += 1
        for k in ('alt', 'aria-label', 'title', 'placeholder'):
            if a.get(k):
                self.attr_texts.append(a[k])
        if tag == 'script':
            self.skip += 1
            if a.get('src'):
                self.scripts.append(a['src'])
            elif a.get('type') == 'application/ld+json':
                self.jsonld += 1
            else:
                self.inline_scripts += 1
        if tag == 'style':
            self.skip += 1
            self.styles += 1

    def handle_endtag(self, tag):
        if tag in ('script', 'style') and self.skip:
            self.skip -= 1

    def handle_data(self, data):
        if not self.skip and data.strip():
            self.texts.append(data)


def strip_comments(css):
    return re.sub(r'/\*.*?\*/', '', css, flags=re.S)


def iter_rules(css):
    """Yield (selector, body) for style rules, descending into @media/@supports, skipping @keyframes/@font-face."""
    i, n = 0, len(css)
    while i < n:
        j = css.find('{', i)
        if j < 0:
            return
        head = css[i:j].strip()
        depth, k = 1, j + 1
        while k < n and depth:
            if css[k] == '{':
                depth += 1
            elif css[k] == '}':
                depth -= 1
            k += 1
        body = css[j + 1:k - 1]
        if head.startswith('@media') or head.startswith('@supports') or head.startswith('@container') or head.startswith('@layer'):
            yield from iter_rules(body)
        elif head.startswith('@keyframes') or head.startswith('@-webkit-keyframes'):
            yield ('@keyframes', head)
        elif head.startswith('@'):
            pass
        else:
            yield (head, body)
        i = k


def decls(body):
    for part in body.split(';'):
        if ':' in part:
            p, v = part.split(':', 1)
            yield p.strip().lower(), v.strip()


def check_css(css, nn, errs, where):
    css = strip_comments(css)
    if re.search(r'#[0-9a-fA-F]{3,8}\b', css):
        errs.append(f'{where}: hex-kleur buiten tokens.css')
    if re.search(r'\b(rgba?|hsla?)\(', css):
        errs.append(f'{where}: rgb()/hsl() buiten tokens.css, gebruik een --hi-* token')
    if 'radial-gradient' in css:
        errs.append(f'{where}: radial-gradient (rasters/stippen verboden)')
    if ':root' in css:
        errs.append(f'{where}: :root in een sectie; tokens alleen in tokens.css')
    for sel, body in iter_rules(css):
        if sel == '@keyframes':
            if nn and not re.search(rf'@(-webkit-)?keyframes\s+hp-{nn}-', body):
                errs.append(f'{where}: keyframes-naam moet beginnen met hp-{nn}- ({body})')
            continue
        for s in sel.split(','):
            s = s.strip()
            if nn:
                ok = re.match(rf'^((html)?\.hp-motion\s+|html\s+)?(\.hp-{nn}(\b|-|\.|:|\[|\s|$)|\[data-hp="{nn}"\])', s)
                if not ok:
                    errs.append(f'{where}: selector zonder .hp-{nn}-: "{s}"')
            if re.search(r'(badge|sticker|tag|label|chip)', s) and 'rotate(' in body:
                errs.append(f'{where}: rotate() op badge/tag/label: "{s}"')
        for p, v in decls(body):
            if p in ('font-family',) and 'poppins' not in v.lower() and 'var(--hp-type-family)' not in v and v not in ('inherit',):
                errs.append(f'{where}: font-family "{v}" (alleen Poppins)')
            if p == 'font' and v not in ('inherit',) and 'var(--hp-type-family)' not in v and 'poppins' not in v.lower():
                errs.append(f'{where}: font-shorthand zonder var(--hp-type-family): "{v}"')
            v0 = v.replace('!important', '').strip()
            if p in ('transition', 'animation') and v0 not in ('none', ''):
                if 'var(--hp-ease)' not in v or 'var(--hp-dur-' not in v:
                    errs.append(f'{where}: {p} zonder var(--hp-ease) en var(--hp-dur-*): "{sel}" → {v}')
            elif p in ('transition-duration', 'animation-duration', 'transition-delay', 'animation-delay') and not v0.startswith(('var(--hp-dur', 'calc(var(--hp-dur', '0s', '0ms')):
                errs.append(f'{where}: {p} met losse waarde "{v}" (gebruik var(--hp-dur-*))')
            elif p in ('transition-timing-function', 'animation-timing-function') and v0 not in ('var(--hp-ease)', 'steps(1, end)', 'step-end', 'step-start', 'linear'):
                errs.append(f'{where}: {p} "{v}" (gebruik var(--hp-ease))')
            if p == 'letter-spacing':
                m = re.match(r'(-?[\d.]+)(em|px|rem)?', v)
                if m:
                    val, unit = float(m.group(1)), m.group(2) or 'em'
                    if (unit in ('em', 'rem') and val > 0.1) or (unit == 'px' and val > 1.6):
                        errs.append(f'{where}: letter-spacing {v} > 0.1em')
            if 'rotate(' in v and re.search(r'(badge|sticker|tag|chip)', sel):
                errs.append(f'{where}: rotate() op badge')


def check_js(js, nn, errs, where):
    code = re.sub(r'/\*.*?\*/', '', js, flags=re.S)
    code = re.sub(r'(^|[^:])//.*$', r'\1', code, flags=re.M)
    if re.search(r'#[0-9a-fA-F]{6}\b|#[0-9a-fA-F]{3}\b(?![\w-])', code) and nn:
        for m in re.finditer(r'[\'"]#[0-9a-fA-F]{3,8}[\'"]', code):
            errs.append(f'{where}: hex-kleur in JS {m.group(0)}')
    if re.search(r'\bimport\s*\(|\bfetch\s*\(\s*[\'"]https?:', code):
        errs.append(f'{where}: extern laden in JS')
    if re.search(r'\b(window|document)\.addEventListener\s*\(', code) and nn:
        errs.append(f'{where}: globale listener (gebruik hpOnResize / base.js)')
    if nn and f'[data-hp="{nn}"]' not in code and code.strip():
        errs.append(f'{where}: JS werkt niet vanuit [data-hp="{nn}"]')
    for m in re.finditer(r'transition\s*=\s*[\'"]([^\'"]*)[\'"]', code):
        v = m.group(1)
        if v != 'none' and ('var(--hp-ease)' not in v or 'var(--hp-dur-' not in v):
            errs.append(f'{where}: transition in JS zonder tokens: "{v}"')
    if 'http' in code:
        for u in re.findall(r'https?://[^\s\'"`)]+', code):
            if u not in LINKS:
                errs.append(f'{where}: URL in JS niet in facts.json: {u}')


def text_known(t):
    t = norm(t)
    if not t or re.fullmatch(r'[\W\d_·•|/–—-]+', t):
        return True
    return t in CORPUS_BLOB


def check_html(html, nn, errs, where, page=False):
    c = Collector()
    c.feed(html)
    if not page:
        if c.styles:
            errs.append(f'{where}: <style> in section.html (zet CSS in section.css)')
        if c.inline_scripts:
            errs.append(f'{where}: <script> in section.html (zet JS in section.js; alleen JSON-LD mag)')
        if not re.search(rf'<section[^>]*data-hp="{nn}"', html):
            errs.append(f'{where}: geen <section data-hp="{nn}">')
    seen = set()
    for i in c.ids:
        if i in seen:
            errs.append(f'{where}: dubbele id "{i}"')
        seen.add(i)
    for s in c.scripts:
        if s.startswith('http') or s.startswith('//'):
            errs.append(f'{where}: extern script {s}')
    for h in c.hrefs:
        if h.startswith('#') and h[1:] in seen and page:
            continue
        if h not in LINKS:
            errs.append(f'{where}: link niet in facts.json: {h}')
    for a in c.imgs:
        src = a.get('src')
        if src and src not in IMG_PATHS:
            errs.append(f'{where}: beeld niet in assets.json: {src}')
        for part in (a.get('srcset') or '').split(','):
            p = part.strip().split(' ')[0]
            if p and p not in IMG_PATHS:
                errs.append(f'{where}: srcset-beeld niet in assets.json: {p}')
        if 'alt' not in a and a.get('src'):
            errs.append(f'{where}: <img> zonder alt: {src}')
        if a.get('src'):
            if not (a.get('width') and a.get('height')):
                errs.append(f'{where}: <img> zonder width/height: {src}')
            if a.get('fetchpriority') != 'high' and a.get('loading') != 'lazy':
                errs.append(f'{where}: <img> zonder loading="lazy": {src}')
    if c.fetchprio and nn not in ('01', None):
        errs.append(f'{where}: fetchpriority buiten de hero')
    for t in c.texts + c.attr_texts:
        if not text_known(t):
            errs.append(f'{where}: tekst niet in copy/facts/assets: "{t.strip()[:70]}"')
    if re.search(r'#[0-9a-fA-F]{3,8}\b', re.sub(r'href="[^"]*"', '', html)) and not page:
        errs.append(f'{where}: hex-kleur in HTML')
    if re.search(r'style="[^"]*(font-family|transition|animation)', html):
        errs.append(f'{where}: inline style met font/transition/animation')


def lint_section(d):
    d = os.path.abspath(d)
    name = os.path.basename(d.rstrip('\\/'))
    m = re.match(r'(\d\d)-', name)
    if not m:
        sys.exit(f'Map moet NN-naam heten: {name}')
    nn = m.group(1)
    errs = []
    for req in ('section.html', 'section.css', 'section.js', 'meta.json'):
        if not os.path.exists(os.path.join(d, req)):
            errs.append(f'ontbreekt: {req}')
    shots = os.path.join(d, 'shots')
    for req in ('1440.png', '375.png'):
        if not os.path.exists(os.path.join(shots, req)):
            errs.append(f'ontbreekt: shots/{req}')
    rd = lambda f: open(os.path.join(d, f), encoding='utf8').read() if os.path.exists(os.path.join(d, f)) else ''
    check_html(rd('section.html'), nn, errs, 'section.html')
    check_css(rd('section.css'), nn, errs, 'section.css')
    check_js(rd('section.js'), nn, errs, 'section.js')
    if os.path.exists(os.path.join(d, 'meta.json')):
        try:
            meta = json.loads(rd('meta.json'))
            bg = next((s['bg'] for s in load('rhythm.json')['sections'] if s['id'] == nn), None)
            if meta.get('bg') != bg:
                errs.append(f'meta.json: bg "{meta.get("bg")}" ≠ rhythm.json "{bg}"')
        except Exception as e:
            errs.append(f'meta.json: {e}')
    return errs


def lint_page(path):
    html = open(path, encoding='utf8').read()
    errs = []
    # tokens-blok overslaan voor de kleurcontrole
    body = re.sub(r'/\* @hp:(tokens|base) \*/.*?/\* @hp:end \*/', '', html, flags=re.S)
    styles = '\n'.join(re.findall(r'<style>(.*?)</style>', body, flags=re.S))
    check_css(styles, None, errs, 'page-css')
    scripts = '\n'.join(re.findall(r'<script>(.*?)</script>', body, flags=re.S))
    check_js(scripts, None, errs, 'page-js')
    check_html(html, None, errs, 'page', page=True)
    if 'fonts.googleapis.com' in html:
        for fam in re.findall(r'family=([A-Za-z+]+)', html):
            if fam != 'Poppins':
                errs.append(f'page: font {fam} geladen')
    return errs


if __name__ == "__main__":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    if sys.argv[1] == '--page':
        errs = lint_page(sys.argv[2])
    else:
        errs = lint_section(sys.argv[1])
    if errs:
        print(f'LINT ROOD · {len(errs)} fout(en)')
        for e in errs:
            print('  -', e)
        sys.exit(1)
    print('LINT GROEN')
