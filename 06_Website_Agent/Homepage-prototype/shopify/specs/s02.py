from gen import section_basics, button, jr
from cssedit import fsize, color, cvar

SID = '02'
FILE = 'hp-02-kies-je-paar'
NAME = 'HÏ 02 · Kies je paar'
TEMPLATE = '02-product.liquid'
CSS = '02-product.css'
JS = '02-product.js'


def settings(sp):
    sp.header('Tekst')
    sp.text('heading', 'Kop', 'Kies je paar')
    sp.select('heading_tag', 'Kopniveau (SEO)', [('h2', 'H2'), ('h1', 'H1'), ('p', 'Gewone tekst')], 'h2')
    sp.size('h2', 'Kop grootte', '--hp-02-h2-k', '.hp-02-h2')
    sp.paint('h2_c', 'Kop kleur', '.hp-02-h2')
    sp.text('colors_label', 'Kleurkiezer: toegankelijke naam', 'Kleur')

    sp.header('Kaarten')
    sp.para('Elke kaart is een blok: voeg kaarten toe, sleep ze in volgorde of verwijder ze. Met een tweede productfoto krijgt een kaart kleurstaaltjes.')
    sp.size('img_r', 'Afronding beelden', '--hp-02-r-k', '.hp-02-media', prop='borderTopLeftRadius')
    sp.paint('media_bg', 'Beeldvlak achtergrond', '.hp-02-media', 'backgroundColor')
    sp.size('tag', 'Label op beeld: grootte', '--hp-02-tag-k', '.hp-02-tag')
    sp.paint('tag_bg', 'Label op beeld: achtergrond', '.hp-02-tag', 'backgroundColor')
    sp.paint('tag_fg', 'Label op beeld: tekst', '.hp-02-tag', 'color', target='.hp-02-tag:not(.hp-02-tag--volt)')
    sp.paint('tag_volt', 'Label op beeld (accent): tekst', '.hp-02-tag--volt', 'color')
    sp.size('title', 'Titel grootte', '--hp-02-title-k', '.hp-02-title')
    sp.paint('title_c', 'Titel kleur', '.hp-02-title')
    sp.size('price', 'Prijs grootte', '--hp-02-price-k', '.hp-02-price')
    sp.paint('price_c', 'Prijs kleur', '.hp-02-price')
    sp.size('sub', 'Onderregel grootte', '--hp-02-sub-k', '.hp-02-sub')
    sp.paint('sub_c', 'Onderregel kleur', '.hp-02-sub')
    sp.size('bul', 'Opsomming grootte', '--hp-02-bul-k', '.hp-02-bullets')
    sp.paint('bul_c', 'Opsomming kleur', '.hp-02-bullets')
    sp.paint('dot_c', 'Opsomming: bolletje', '.hp-02-bullets li::before', 'backgroundColor')
    sp.size('sizes', 'Maten grootte', '--hp-02-sizes-k', '.hp-02-sizes')
    sp.paint('sizes_c', 'Maten kleur', '.hp-02-sizes')
    sp.paint('cname_c', 'Kleurnaam naast staaltjes', '.hp-02-colorname')
    sp.check('anim_cards', 'Kaarten schuiven in bij scrollen', True)
    sp.check('anim_mood', 'Sfeerbeeld bij hover/tik', True)

    sp.header('Vergelijkknop')
    sp.check('show_compare', 'Vergelijkknop tonen', True)
    sp.url('compare_link', 'Link', '/pages/gripsokken-vergelijken')
    sp.text('compare_aria', 'Toegankelijke naam', 'Vergelijk de Performance Gripsokken 1.0 en 2.0')
    sp.text('compare_k', 'Bovenregel', 'Twijfel je?')
    sp.text('compare_v', 'Tekst', 'Leg ze naast elkaar')
    sp.text('vs', 'Tekst tussen de schijven', 'vs')
    sp.image('disc_a', 'Schijf 1: foto', 'shopify://shop_images/hp-sh-sok-10.webp')
    sp.image('disc_b', 'Schijf 2: foto', 'shopify://shop_images/hp-sh-sok-20-zwart.webp')
    sp.paint('duel_bg', 'Achtergrond', '.hp-02-duel', 'backgroundColor')
    sp.paint('duel_fg', 'Tekst', '.hp-02-duel', 'color')
    sp.paint('duel_k_c', 'Bovenregel kleur', '.hp-02-duel__k')
    sp.size('duel_k', 'Bovenregel grootte', '--hp-02-duelk-k', '.hp-02-duel__k')
    sp.size('duel_v', 'Tekst grootte', '--hp-02-duelv-k', '.hp-02-duel__v')
    sp.paint('duel_disc', 'Schijf achtergrond', '.hp-02-duel__disc', 'backgroundColor')
    sp.paint('duel_cbg', 'Pijlcirkel', '.hp-02-duel .hp-pill__chev', 'backgroundColor')
    sp.paint('duel_cfg', 'Pijl', '.hp-02-duel .hp-pill__chev', 'color')
    sp.paint('duel_vs_bg', '"vs": achtergrond', '.hp-02-duel__vs', 'backgroundColor')
    sp.paint('duel_vs_fg', '"vs": tekst', '.hp-02-duel__vs', 'color')
    sp.check('anim_duel', 'Schijven wisselen van plek (animatie)', True)

    section_basics(sp, '#111111', '#FFFFFF')
    sp.size('btn', 'Knoptekst grootte', '--hp-btn-k', '.hp-02-cta')
    button(sp, light=True)

    sp.css("{%- unless s.anim_cards -%}SEL .hp-02-card { transform: none !important; }{%- endunless -%}")
    sp.css("{%- unless s.anim_mood -%}SEL .hp-02-media__mood { display: none; } SEL .hp-02-media .hp-02-media__prod { transform: none !important; }{%- endunless -%}")
    sp.css("{%- unless s.anim_duel -%}SEL .hp-02-duel__disc { animation: none !important; }{%- endunless -%}")


CARD = [
    {'type': 'header', 'content': 'Beeld'},
    {'type': 'image_picker', 'id': 'image', 'label': 'Productfoto'},
    {'type': 'image_picker', 'id': 'image_b', 'label': 'Productfoto tweede kleur (optioneel)', 'info': 'Met een tweede foto verschijnen kleurstaaltjes in plaats van de maten.'},
    {'type': 'image_picker', 'id': 'mood', 'label': 'Sfeerbeeld (bij hover/tik)'},
    {'type': 'text', 'id': 'media_label', 'label': 'Beeld: toegankelijke naam'},
    {'type': 'text', 'id': 'tag', 'label': 'Label op het beeld'},
    {'type': 'select', 'id': 'tag_style', 'label': 'Label: stijl', 'options': [{'value': 'wit', 'label': 'Wit'}, {'value': 'volt', 'label': 'Accent (volt)'}], 'default': 'wit'},
    {'type': 'header', 'content': 'Tekst'},
    {'type': 'text', 'id': 'title', 'label': 'Titel', 'default': 'Performance Gripsokken'},
    {'type': 'text', 'id': 'price', 'label': 'Prijs (tekst)', 'info': 'Leeg = de prijs van het gekoppelde product.'},
    {'type': 'product', 'id': 'product', 'label': 'Product (optioneel, voor de prijs)'},
    {'type': 'text', 'id': 'sub', 'label': 'Onderregel'},
    {'type': 'textarea', 'id': 'bullets', 'label': 'Opsomming (één punt per regel)', 'info': 'Op mobiel staat alleen het eerste punt.'},
    {'type': 'text', 'id': 'sizes', 'label': 'Maten (zonder kleurstaaltjes)'},
    {'type': 'header', 'content': 'Knop'},
    {'type': 'text', 'id': 'cta_label', 'label': 'Knop: tekst', 'default': 'Shop'},
    {'type': 'url', 'id': 'cta_link', 'label': 'Knop: link'},
    {'type': 'text', 'id': 'cta_aria', 'label': 'Knop: toegankelijke naam'},
    {'type': 'header', 'content': 'Kleurstaaltjes'},
    {'type': 'text', 'id': 'name_a', 'label': 'Kleur 1: naam', 'default': 'Zwart'},
    {'type': 'color', 'id': 'swatch_a', 'label': 'Kleur 1: staaltje', 'default': '#0A0A0A'},
    {'type': 'url', 'id': 'link_a', 'label': 'Kleur 1: link'},
    {'type': 'text', 'id': 'name_b', 'label': 'Kleur 2: naam', 'default': 'Wit'},
    {'type': 'color', 'id': 'swatch_b', 'label': 'Kleur 2: staaltje', 'default': '#FFFFFF'},
    {'type': 'url', 'id': 'link_b', 'label': 'Kleur 2: link'},
]
BLOCKS = [{'type': 'card', 'name': 'Productkaart', 'settings': CARD}]
MAX_BLOCKS = 6
DEFAULT_BLOCKS = [
    ('card', {
        'image': 'shopify://shop_images/hp-sh-sok-10.webp', 'mood': 'shopify://shop_images/hp-sh-sq-padel.webp',
        'media_label': 'Padelspeler strikt zijn schoen, witte gripsokken op een blauwe baan', 'tag': 'Prijsvriendelijk',
        'tag_style': 'wit', 'title': 'Performance Gripsokken 1.0', 'price': '€14,95', 'sub': 'Grip voor de scherpste prijs',
        'bullets': 'Siliconen gripzones onder de voet\nKatoenmix voor elke dag en elke training\nIdeaal voor training, pilates en recreatief sporten',
        'sizes': 'Maat 34–39 · 40–46', 'cta_label': 'Shop 1.0', 'cta_link': '/products/performance-gripsokken',
        'cta_aria': 'Shop de Performance Gripsokken 1.0', 'name_a': 'Zwart', 'swatch_a': '#0A0A0A', 'name_b': 'Wit', 'swatch_b': '#FFFFFF'}),
    ('card', {
        'image': 'shopify://shop_images/hp-sh-sok-20-zwart.webp', 'image_b': 'shopify://shop_images/hp-sh-sok-20-wit.webp',
        'mood': 'shopify://shop_images/hp-sh-sq-tennis.webp', 'media_label': 'Tennisser in gripsokken op de baan',
        'tag': 'Ultieme performance', 'tag_style': 'volt', 'title': 'Performance Gripsokken 2.0', 'price': '€17,95',
        'sub': 'Zeven features in één sok',
        'bullets': '15–20 mmHg compressie en 30% Coolmax®\nNaadloos, met versterkte hiel\nGebouwd voor wedstrijd en intensieve training',
        'sizes': '', 'cta_label': 'Shop 2.0', 'cta_link': '/products/performance-gripsokken-2-0-zwart',
        'cta_aria': 'Shop de Performance Gripsokken 2.0', 'name_a': 'Zwart', 'swatch_a': '#0A0A0A',
        'link_a': '/products/performance-gripsokken-2-0-zwart', 'name_b': 'Wit', 'swatch_b': '#FFFFFF',
        'link_b': '/products/performance-gripsokken-2-0-wit'}),
]


def css(sh):
    color(sh, '.hp-02', 'background', '--hp-02-bg')
    color(sh, '.hp-02', 'color', '--hp-02-fg')
    fsize(sh, '.hp-02-h2', '--hp-02-h2-k')
    fsize(sh, '.hp-02-tag', '--hp-02-tag-k')
    fsize(sh, '.hp-02-title', '--hp-02-title-k')
    fsize(sh, '.hp-02-price', '--hp-02-price-k')
    fsize(sh, '.hp-02-sub', '--hp-02-sub-k')
    fsize(sh, '.hp-02-bullets', '--hp-02-bul-k')
    fsize(sh, '.hp-02-sizes', '--hp-02-sizes-k')
    fsize(sh, '.hp-02-card .hp-02-cta', '--hp-btn-k')
    fsize(sh, '.hp-02-duel__k', '--hp-02-duelk-k')
    fsize(sh, '.hp-02-duel__v', '--hp-02-duelv-k')
    sh.edit('.hp-02-media', 'border-radius', lambda v: f'calc({v} * var(--hp-02-r-k, 1))')
    # staaltjes: kleuren per kaart (inline --hp-02-sw-a/b)
    sh.edit('.hp-02-swatch::before', 'background', cvar('--hp-02-sw-a', '--hi-black'), count=2)
    sh.edit('.hp-02-swatch--wit::before', 'background', cvar('--hp-02-sw-b', '--hi-white'), count=2)


def js(src):
    return src
