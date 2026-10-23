"""Kleine CSS-bewerker voor de Shopify-omzetting van de homepage.

Parseert een stylesheet in regels (selector + declaraties, genest in @media), laat je declaraties gericht
aanpassen en schrijft het geheel terug. Elke bewerking moet minstens één declaratie raken (of precies `count`),
anders faalt de build: zo kan een instelling nooit stil niets doen.
"""
import re


def _split_top(s, sep):
    out, depth, cur = [], 0, ''
    for ch in s:
        if ch == '(':
            depth += 1
        elif ch == ')':
            depth -= 1
        if ch == sep and depth == 0:
            out.append(cur)
            cur = ''
        else:
            cur += ch
    out.append(cur)
    return out


class Rule:
    def __init__(self, prelude, body, at=False):
        self.prelude, self.body, self.at = prelude, body, at


def parse(css):
    """Geeft een lijst items: str (commentaar/witruimte) of Rule; @media-regels hebben body = lijst items."""
    items, i, n = [], 0, len(css)
    buf = ''
    while i < n:
        if css.startswith('/*', i):
            j = css.index('*/', i) + 2
            buf += css[i:j]
            i = j
            continue
        ch = css[i]
        if ch == '{':
            # prelude = tekst sinds het laatste commentaar/witruimte-blok
            m = re.search(r'([^;}]*)$', buf, re.S)
            pre = m.group(1)
            if '*/' in pre:
                pre = pre[pre.rindex('*/') + 2:]
            lead = buf[:len(buf) - len(pre)]
            # behoud voorafgaande witruimte apart
            ws = re.match(r'\s*', pre).group(0)
            if lead + ws:
                items.append(lead + ws)
            pre = pre[len(ws):]
            depth, j = 1, i + 1
            while depth:
                if css.startswith('/*', j):
                    j = css.index('*/', j) + 2
                    continue
                if css[j] == '{':
                    depth += 1
                elif css[j] == '}':
                    depth -= 1
                j += 1
            inner = css[i + 1:j - 1]
            if pre.strip().startswith('@media') or pre.strip().startswith('@supports'):
                items.append(Rule(pre, parse(inner), at=True))
            else:
                items.append(Rule(pre, inner))
            buf = ''
            i = j
            continue
        buf += ch
        i += 1
    if buf:
        items.append(buf)
    return items


def serialize(items):
    out = ''
    for it in items:
        if isinstance(it, str):
            out += it
        elif it.at:
            out += it.prelude + '{' + serialize(it.body) + '}'
        else:
            out += it.prelude + '{' + it.body + '}'
    return out


def _walk(items, media=None):
    for it in items:
        if isinstance(it, Rule):
            if it.at:
                yield from _walk(it.body, it.prelude.strip())
            else:
                yield it, media


def _sel_list(prelude):
    return [s.strip() for s in _split_top(prelude.strip(), ',')]


class Sheet:
    def __init__(self, css, name=''):
        self.items = parse(css)
        self.name = name

    def text(self):
        return serialize(self.items)

    def edit(self, selector, prop, fn, media='any', count=None):
        """selector: exacte selector (één uit de lijst), of callable(sel)->bool. media: 'any', None (geen @media) of
        een substring van de media-prelude. fn(value) -> nieuwe waarde."""
        hits = 0
        for rule, med in _walk(self.items):
            if media != 'any':
                if media is None and med is not None:
                    continue
                if media is not None and (med is None or media not in med):
                    continue
            sels = _sel_list(rule.prelude)
            ok = selector(sels) if callable(selector) else selector in sels
            if not ok:
                continue
            decls = _split_top(rule.body, ';')
            changed = False
            for di, d in enumerate(decls):
                m = re.match(r'(\s*)([-\w]+)(\s*:\s*)(.*?)(\s*)$', d, re.S)
                if not m or m.group(2) != prop:
                    continue
                nv = fn(m.group(4))
                if nv != m.group(4):
                    decls[di] = m.group(1) + m.group(2) + m.group(3) + nv + m.group(5)
                    changed = True
                    hits += 1
            if changed:
                rule.body = ';'.join(decls)
        if hits == 0 or (count is not None and hits != count):
            raise SystemExit(f'[{self.name}] edit {selector!r} {prop} media={media}: {hits} treffers')
        return hits

    def append(self, css):
        self.items.append('\n' + css + '\n')


# ---------- waarde-transformaties ----------

def k(var):
    """Vermenigvuldig een lengte (of clamp/var) met een schaalfactor."""
    return lambda v: f'calc({v} * var({var}, 1))'


def font_k(var):
    """Pas alleen de grootte in een font-shorthand aan: 'italic 900 22px/1 var(--fam)'."""
    def f(v):
        parts = _split_ws(v)
        # familie = laatste deel; grootte = het deel ervoor (eventueel met /regelhoogte)
        idx = len(parts) - 2
        size = parts[idx]
        if '/' in size and not size.startswith('calc('):
            sz, lh = _split_top(size, '/')[0], '/'.join(_split_top(size, '/')[1:])
            parts[idx] = f'calc({sz} * var({var}, 1))/{lh}'
        else:
            # grootte en regelhoogte kunnen gescheiden staan: '22px / 1'
            parts[idx] = f'calc({size} * var({var}, 1))'
        return ' '.join(parts)
    return f


def _split_ws(v):
    out, depth, cur = [], 0, ''
    for ch in v.strip():
        if ch == '(':
            depth += 1
        elif ch == ')':
            depth -= 1
        if ch.isspace() and depth == 0:
            if cur:
                out.append(cur)
            cur = ''
        else:
            cur += ch
    if cur:
        out.append(cur)
    return out


def cvar(var, token=None):
    """Vervang een kleurtoken (var(--hi-x)) door var(--var, var(--hi-x)). Zonder token: elk --hi-token in de waarde,
    maar dan moet er precies één in staan."""
    def f(v):
        toks = re.findall(r'var\(--hi-[\w-]+\)', v)
        if token:
            t = f'var({token})'
            if t not in v:
                return v
            return v.replace(t, f'var({var}, {t})')
        if len(toks) != 1:
            raise SystemExit(f'cvar {var}: {len(toks)} tokens in {v!r}')
        return v.replace(toks[0], f'var({var}, {toks[0]})')
    return f


def const(var, original):
    """Een vaste waarde (geen token) vervangen door een variabele met de oude waarde als terugval."""
    def f(v):
        if original not in v:
            return v
        return v.replace(original, f'var({var}, {original})')
    return f


def pad(kvar, addvar):
    """Ruimte: schaal de ontwerpwaarde en tel er px bij op. Werkt per waarde in padding-block (1 of 2 waarden)."""
    def one(x, kv, av):
        return f'calc({x} * var({kv}, 1) + var({av}, 0px))'
    def f(v):
        parts = _split_ws(v)
        if len(parts) == 1:
            parts = [parts[0], parts[0]]
        if len(parts) != 2:
            raise SystemExit(f'pad: onverwachte waarde {v!r}')
        return f"{one(parts[0], kvar[0], addvar[0])} {one(parts[1], kvar[1], addvar[1])}"
    return f


def _wrap(var):
    return lambda v: v if v.startswith(f'var({var},') else f'var({var}, {v})'


class _Help:
    pass


def fsize(sh, selector, var, media='any'):
    """Schaal elke font-size en elke grootte in een font-shorthand van selector (alle media)."""
    hits = 0
    for prop, fn in (('font-size', k(var)), ('font', font_k(var))):
        try:
            hits += sh.edit(selector, prop, fn, media=media)
        except SystemExit:
            pass
    if not hits:
        raise SystemExit(f'[{sh.name}] fsize {selector}: geen font-size')
    return hits


def color(sh, selector, prop, var, media='any'):
    """Wikkel elke declaratie selector/prop in var(--var, origineel)."""
    return sh.edit(selector, prop, _wrap(var), media=media)
