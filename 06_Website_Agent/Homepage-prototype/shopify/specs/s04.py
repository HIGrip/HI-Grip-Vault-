from gen import section_basics, head_layout
from cssedit import fsize, color, k

SID = '04'
FILE = 'hp-04-fotoraster'
NAME = 'HÏ 04 · Fotoraster'
TEMPLATE = '04-social-proof.liquid'
CSS = '04-social-proof.css'
JS = None


def settings(sp):
    sp.header('Tekst')
    sp.text('heading', 'Kop', 'Op de baan, het veld en in de gym')
    sp.select('heading_tag', 'Kopniveau (SEO)', [('h2', 'H2'), ('h1', 'H1'), ('p', 'Gewone tekst')], 'h2')
    sp.text('lead', 'Intro', 'Echte sporters, echte wedstrijden.', multiline=True)
    head_layout(sp, '.hp-04-head')
    sp.size('h2', 'Kop grootte', '--hp-h2-k', '.hp-04-h2')
    sp.paint('h2_c', 'Kop kleur', '.hp-04-h2')
    sp.size('lead', 'Intro grootte', '--hp-lead-k', '.hp-04-lead')
    sp.paint('lead_c', 'Intro kleur', '.hp-04-lead')

    sp.header('Fotoraster')
    sp.para('Vier foto-blokken: 1 = groot links, 2 en 3 = klein rechtsboven, 4 = breed rechtsonder (op laptop).')
    sp.range('grid_h', 'Hoogte raster (laptop, % van het scherm)', 30, 100, 1, '%', 78, '--hp-04-gh', fmt='{v}svh')
    sp.range('grid_hw', 'Hoogte raster (laptop, max. % van de breedte)', 20, 80, 1, '%', 52, '--hp-04-gw', fmt='{v}vw')
    sp.range('gap', 'Ruimte tussen foto\'s', 0, 40, 1, 'px', 12, '--hp-04-gap')
    sp.size('img_r', 'Afronding foto\'s', '--hp-04-r-k', '.hp-04-card', prop='borderTopLeftRadius')
    sp.size('sport', 'Sportnaam grootte (grote foto)', '--hp-04-sport-a-k', '.hp-04-cell--a .hp-04-sport')
    sp.size('sport_s', 'Sportnaam grootte (kleine foto\'s)', '--hp-04-sport-k', '.hp-04-cell--b .hp-04-sport')
    sp.size('go', 'Linktekst grootte', '--hp-04-go-k', '.hp-04-cell--a .hp-04-go')
    sp.paint('label_c', 'Tekst op de foto', '.hp-04-card', target='.hp-04-card')
    sp.paint('chev_bg', 'Pijlcirkel', '.hp-04-chev', 'backgroundColor')
    sp.paint('chev_fg', 'Pijl', '.hp-04-chev', 'color')
    sp.color_alpha('scrim', 'Verloop onder op de foto', '#0A0A0A', 86, '--hp-04-scrim')
    sp.range('scrim_h', 'Verloop: hoogte', 0, 100, 1, '%', 46, '--hp-04-scrim-h', fmt='{v}%')
    sp.check('zoom', 'Foto zoomt bij hover/tik', True)
    section_basics(sp, '#0A0A0A', '#FFFFFF')
    sp.css("{%- unless s.zoom -%}SEL .hp-04-card .hp-04-img { scale: 1 !important; }{%- endunless -%}")


BLOCKS = [{'type': 'photo', 'name': 'Foto', 'settings': [
    {'type': 'image_picker', 'id': 'image', 'label': 'Foto'},
    {'type': 'text', 'id': 'alt', 'label': 'Alt-tekst (leeg = alt van het bestand)'},
    {'type': 'range', 'id': 'pos_x', 'label': 'Focuspunt horizontaal', 'min': 0, 'max': 100, 'step': 1, 'unit': '%', 'default': 50},
    {'type': 'range', 'id': 'pos_y', 'label': 'Focuspunt verticaal', 'min': 0, 'max': 100, 'step': 1, 'unit': '%', 'default': 50},
    {'type': 'text', 'id': 'sport', 'label': 'Grote tekst (sport)', 'default': 'Padel'},
    {'type': 'text', 'id': 'go', 'label': 'Linktekst', 'default': 'Gripsokken voor padel'},
    {'type': 'url', 'id': 'link', 'label': 'Link'},
]}]
MAX_BLOCKS = 4
DEFAULT_BLOCKS = [
    ('photo', {'image': 'shopify://shop_images/hp-sp-padel-voeten-1800.webp', 'alt': 'Padelspeler strikt zijn schoen, witte gripsokken, racket en ballen op een blauwe baan', 'pos_x': 66, 'pos_y': 50, 'sport': 'Padel', 'go': 'Gripsokken voor padel', 'link': '/pages/gripsokken-voor-padel'}),
    ('photo', {'image': 'shopify://shop_images/hp-sp-tennis-wit-1179.webp', 'alt': 'Tennisser in witte gripsokken op de baan', 'pos_x': 50, 'pos_y': 50, 'sport': 'Tennis', 'go': 'Gripsokken voor tennis', 'link': '/pages/gripsokken-voor-tennis'}),
    ('photo', {'image': 'shopify://shop_images/hp-sp-voetbal-zool-1800.webp', 'alt': 'Voetballer op kunstgras, witte gripsokken met grippatroon onder de zool', 'pos_x': 68, 'pos_y': 50, 'sport': 'Voetbal', 'go': 'Gripsokken voor voetbal', 'link': '/pages/gripsokken-voor-voetbal'}),
    ('photo', {'image': 'shopify://shop_images/hp-sp-gym-1800.webp', 'alt': 'Sporter in witte gripsokken traint met een halterstang in de gym', 'pos_x': 50, 'pos_y': 50, 'sport': 'Gym', 'go': 'Performance gripsokken', 'link': '/collections/gripsokken'}),
]


def css(sh):
    color(sh, '.hp-04', 'background', '--hp-04-bg')
    color(sh, '.hp-04', 'color', '--hp-04-fg')
    sh.edit('.hp-04-grid', 'height', lambda v: 'min(var(--hp-04-gh, 78svh), var(--hp-04-gw, 52vw))')
    sh.edit('.hp-04-grid', 'gap', lambda v: f'var(--hp-04-gap, {v})', count=1)
    sh.edit('.hp-04-card', 'border-radius', lambda v: f'calc({v} * var(--hp-04-r-k, 1))')
    sh.edit('.hp-04-card::after', 'background', lambda v: 'linear-gradient(to top, var(--hp-04-scrim, var(--hi-scrim-strong)) 0%, transparent var(--hp-04-scrim-h, 46%))')
    fsize(sh, '.hp-04-sport', '--hp-04-sport-k')
    fsize(sh, '.hp-04-cell--a .hp-04-sport', '--hp-04-sport-a-k')
    fsize(sh, '.hp-04-cell--b .hp-04-sport', '--hp-04-sport-k')
    fsize(sh, '.hp-04-go', '--hp-04-go-k')
    fsize(sh, '.hp-04-cell--b .hp-04-go', '--hp-04-go-k')
    sh.append('/* Shopify: de grote foto volgt op mobiel dezelfde schaal als de kleine (ontwerp: één maat) */\n'
              '@media (max-width: 768px) { .hp-04-cell--a .hp-04-sport, .hp-04-cell--d .hp-04-sport { font-size: calc(clamp(28px, 4vw, 64px) * var(--hp-04-sport-a-k, 1)); } }')
