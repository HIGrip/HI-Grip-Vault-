from gen import section_basics, button, jr
from cssedit import k, font_k, cvar, const, pad

SID = '01'
FILE = 'hp-01-hero'
NAME = 'HÏ 01 · Hero'
TEMPLATE = '01-hero.liquid'
CSS = '01-hero.css'
JS = '01-hero.js'


def settings(sp):
    sp.header('Kopbalk')
    sp.check('show_bar', 'Eigen kopbalk tonen (logo + menu op de foto)', True)
    sp.check('hide_theme_header', 'Standaard themakop verbergen op deze pagina', True,
             info='Verbergt de header en aankondigingsbalk van het thema, zodat de foto tot bovenaan loopt (zoals het ontwerp).')
    sp.text('logo_text', 'Logo (tekst)', 'HÏ Grip')
    sp.image('logo_image', 'Logo (afbeelding, optioneel)', info='Leeg = het tekstlogo hierboven.')
    sp.range('logo_h', 'Hoogte logo-afbeelding', 12, 80, 1, 'px', 28, '--hp-01-logo-h')
    sp.text('logo_label', 'Logo: toegankelijke naam', 'HÏ Grip, naar de homepage')
    sp.url('logo_link', 'Logo: link', '/')
    sp.text('nav_label', 'Menu: toegankelijke naam', 'Hoofdmenu')
    sp.text('menu_open', 'Menuknop (mobiel): tekst', 'Menu')
    sp.text('menu_close', 'Menuknop (mobiel): tekst als open', 'Sluit menu')
    sp.size('logo', 'Logo tekstgrootte', '--hp-01-logo-k', '.hp-01-logo')
    sp.size('nav', 'Menu tekstgrootte', '--hp-01-nav-k', '.hp-01-menu')
    sp.color('menu_bg', 'Uitklapmenu (mobiel): achtergrond', '#FFFFFF', '--hp-01-menu-bg')
    sp.color('menu_fg', 'Uitklapmenu (mobiel): tekst', '#0A0A0A', '--hp-01-menu-fg')

    sp.header('Foto')
    sp.image('image', 'Foto', 'shopify://shop_images/hp-hero-padel-zool-2400.webp')
    sp.image('image_mobile', 'Foto mobiel (optioneel)', info='Leeg = dezelfde foto als op laptop.')
    sp.text('image_alt', 'Alt-tekst (leeg = alt van het bestand)')
    sp.range('pos_m_x', 'Focuspunt mobiel: horizontaal', 0, 100, 1, '%', 52, '--hp-01-px', fmt='{v}%', where='m')
    sp.range('pos_m_y', 'Focuspunt mobiel: verticaal', 0, 100, 1, '%', 50, '--hp-01-py', fmt='{v}%', where='m', info='Werkt alleen in de richting waarin de foto wordt bijgesneden (bij een liggende foto op mobiel: horizontaal).')
    sp.range('pos_d_x', 'Focuspunt laptop: horizontaal', 0, 100, 1, '%', 50, '--hp-01-px', fmt='{v}%', where='d', info='Werkt alleen in de richting waarin de foto wordt bijgesneden (bij een brede foto op laptop: verticaal).')
    sp.range('pos_d_y', 'Focuspunt laptop: verticaal', 0, 100, 1, '%', 42, '--hp-01-py', fmt='{v}%', where='d')
    sp.color_alpha('scrim_t', 'Verloop boven', '#0A0A0A', 32, '--hp-01-scrim-t')
    sp.color_alpha('scrim_b', 'Verloop onder', '#0A0A0A', 86, '--hp-01-scrim-b')
    sp.check('anim_breathe', 'Foto ademt langzaam (Ken Burns)', True)
    sp.check('anim_zoom', 'Foto zoomt mee bij scrollen', True)
    sp.check('anim_rise', 'Tekst schuift in bij laden', True)

    sp.header('Tekst')
    sp.text('heading', 'Kop', 'Performance gripsokken voor sporters')
    sp.select('heading_tag', 'Kopniveau (SEO)', [('h1', 'H1'), ('h2', 'H2'), ('p', 'Gewone tekst')], 'h1')
    sp.text('sub', 'Subregel', 'Je voet blijft op zijn plek in je schoen. Bij elke rem, draai en sprint.', multiline=True)
    sp.text('def', 'Definitiezin (klein)', 'HÏ Grip is een Nederlands sportmerk voor performance gripsokken, voor padel, tennis, voetbal en rugby.', multiline=True)
    sp.text('cta_label', 'Knop: tekst', 'Shop gripsokken')
    sp.url('cta_link', 'Knop: link', '/collections/gripsokken')
    sp.select('align', 'Uitlijning tekst', [('left', 'Links'), ('center', 'Midden')], 'left')
    sp.size('h1', 'Kop grootte', '--hp-01-h1-k', '.hp-01-h1')
    sp.range('h1_mw_m', 'Kop: max. breedte mobiel (in tekens)', 6, 30, 1, 'ch', 13, '--hp-01-h1-mw', fmt='{v}ch', where='m')
    sp.range('h1_mw_d', 'Kop: max. breedte laptop (in tekens)', 6, 30, 1, 'ch', 12, '--hp-01-h1-mw', fmt='{v}ch', where='d')
    sp.color('h1_c', 'Kop kleur', '#FFFFFF', '--hp-01-h1-c')
    sp.size('sub', 'Subregel grootte', '--hp-01-sub-k', '.hp-01-sub')
    sp.color('sub_c', 'Subregel kleur', '#FFFFFF', '--hp-01-sub-c')
    sp.size('def', 'Definitiezin grootte', '--hp-01-def-k', '.hp-01-def')
    sp.color('def_c', 'Definitiezin kleur', '#FFFFFF', '--hp-01-def-c')
    sp.range('def_o', 'Definitiezin dekking', 0, 100, 1, '%', 72, '--hp-01-def-o', fmt='calc({v} / 100)')

    section_basics(sp, '#111111', '#FFFFFF', pad=False)
    sp.range('h_svh', 'Hoogte (% van het scherm)', 40, 100, 1, '%', 100, '--hp-01-h', fmt='{v}svh')
    sp.range('minh_m', 'Minimale hoogte mobiel', 300, 900, 10, 'px', 560, '--hp-01-minh', where='m')
    sp.range('minh_d', 'Minimale hoogte laptop', 300, 1100, 10, 'px', 640, '--hp-01-minh', where='d')
    sp.range('maxh', 'Maximale hoogte', 600, 1600, 20, 'px', 1100, '--hp-01-maxh')
    sp.space('stage_pb', 'Ruimte onder de tekst', '--hp-01-spb-k', '--hp-01-spb-add', '.hp-01-stage', 'paddingBottom')
    sp.size('btn', 'Knoptekst grootte', '--hp-btn-k', '.hp-01-cta')
    button(sp, light=True)

    # uitlijning midden
    sp.css("{%- if s.align == 'center' -%}SEL .hp-01-copy { justify-items: center; text-align: center; } SEL .hp-01-h1, SEL .hp-01-sub, SEL .hp-01-def { margin-inline: auto; } @media (min-width: 769px) { SEL .hp-01-copy { grid-template-columns: minmax(0, 1fr); } SEL .hp-01-cta { grid-column: 1; grid-row: auto; justify-self: center; margin-top: var(--hp-space-xs); } }{%- endif -%}")
    sp.css("{%- unless s.anim_rise -%}SEL .hp-01-h1, SEL .hp-01-sub, SEL .hp-01-cta { animation: none !important; }{%- endunless -%}")
    sp.css("{%- unless s.anim_breathe -%}SEL .hp-01-media__el { animation: none !important; }{%- endunless -%}")


BLOCKS = [{
    'type': 'link', 'name': 'Menulink',
    'settings': [
        {'type': 'text', 'id': 'label', 'label': 'Tekst', 'default': 'Shop'},
        {'type': 'url', 'id': 'link', 'label': 'Link'},
    ]}]
MAX_BLOCKS = 8
DEFAULT_BLOCKS = [
    ('link', {'label': 'Shop', 'link': '/collections/gripsokken'}),
    ('link', {'label': 'Sporten', 'link': '#sporten'}),
    ('link', {'label': 'Over ons', 'link': '/pages/over-ons'}),
    ('link', {'label': 'Zakelijk', 'link': '/pages/zakelijk'}),
]


def css(sh):
    sh.edit('.hp-01', 'background', cvar('--hp-01-bg'))
    sh.edit('.hp-01', 'color', cvar('--hp-01-fg'))
    sh.edit('.hp-01', 'height', const('--hp-01-h', '100svh'))
    sh.edit('.hp-01', 'min-height', lambda v: f'var(--hp-01-minh, {v})', count=2)
    sh.edit('.hp-01', 'max-height', lambda v: f'var(--hp-01-maxh, {v})')
    sh.edit('.hp-01-bar', 'color', cvar('--hp-01-fg'))
    sh.edit('.hp-01-logo', 'font', font_k('--hp-01-logo-k'))
    sh.edit('.hp-01-logo', 'font-size', k('--hp-01-logo-k'))
    sh.edit('.hp-01-nav a', 'font', font_k('--hp-01-nav-k'))
    sh.edit('.hp-01-menu', 'font', font_k('--hp-01-nav-k'))
    sh.edit('.hp-01-bar.is-open .hp-01-nav', 'background', cvar('--hp-01-menu-bg'))
    sh.edit('.hp-01-bar.is-open .hp-01-nav', 'color', cvar('--hp-01-menu-fg'))
    sh.edit('.hp-01-bar.is-open .hp-01-nav a', 'font-size', k('--hp-01-nav-k'))
    sh.edit('.hp-01-media__el', 'object-position', lambda v: f'var(--hp-01-px, {v.split()[0]}) var(--hp-01-py, {v.split()[1]})', count=2)
    sh.edit('.hp-01-media::after', 'background', lambda v: v.replace('var(--hi-scrim) 0%', 'var(--hp-01-scrim-t, var(--hi-scrim)) 0%').replace('var(--hi-scrim-strong) 100%', 'var(--hp-01-scrim-b, var(--hi-scrim-strong)) 100%'))
    sh.edit('.hp-01-stage', 'padding-bottom', lambda v: f'calc({v} * var(--hp-01-spb-k, 1) + var(--hp-01-spb-add, 0px))', count=2)
    sh.edit('.hp-01-h1', 'font-size', k('--hp-01-h1-k'), count=2)
    sh.edit('.hp-01-h1', 'max-width', lambda v: f'var(--hp-01-h1-mw, {v})', count=2)
    sh.edit('.hp-01-sub', 'font-size', k('--hp-01-sub-k'), count=2)
    sh.edit('.hp-01-def', 'font-size', k('--hp-01-def-k'), count=2)
    sh.edit('.hp-01-def', 'color', cvar('--hp-01-def-c'))
    sh.edit('.hp-01-def', 'opacity', const('--hp-01-def-o', '0.72'))
    sh.append('/* Shopify: instelbare kleuren en logo-afbeelding */\n'
              '.hp-01-h1 { color: var(--hp-01-h1-c, inherit); }\n'
              '.hp-01-sub { color: var(--hp-01-sub-c, inherit); }\n'
              '.hp-01-logo__img { display: block; width: auto; height: var(--hp-01-logo-h, 28px); }\n'
              '.hp-01[data-hp-01-breathe="off"] .hp-01-media__el { animation: none; }')


def js(src):
    src = jr(src, """  /* Menu (alleen zichtbaar onder 769 px) */
  var bar = root.querySelector('.hp-01-bar');
  var btn = root.querySelector('.hp-01-menu');
  var label = btn.querySelector('.hp-01-menu__label');""", """  /* Menu (alleen zichtbaar onder 769 px); de kopbalk kan in de editor uit staan */
  var bar = root.querySelector('.hp-01-bar');
  var btn = root.querySelector('.hp-01-menu');
  if (bar && btn) {
  var label = btn.querySelector('.hp-01-menu__label');""")
    src = jr(src, """  bar.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && bar.classList.contains('is-open')) { setMenu(false); btn.focus(); }
  });""", """  bar.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && bar.classList.contains('is-open')) { setMenu(false); btn.focus(); }
  });
  }""")
    src = jr(src, """  if (window.hpReduced()) return;
  var media""", """  if (window.hpReduced() || root.getAttribute('data-hp-01-zoom') === 'off') return;
  var media""")
    return src
