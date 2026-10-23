import json
import os
from gen import section_basics
from cssedit import fsize, color

SID = '11'
FILE = 'hp-11-faq'
NAME = 'HÏ 11 · FAQ'
TEMPLATE = '11-faq.liquid'
CSS = '11-faq.css'
JS = None


def settings(sp):
    sp.header('Kop')
    sp.text('heading', 'Kop', 'Veelgestelde vragen')
    sp.select('heading_tag', 'Kopniveau (SEO)', [('h2', 'H2'), ('h1', 'H1'), ('p', 'Gewone tekst')], 'h2')
    sp.size('h2', 'Kop grootte', '--hp-11-h2-k', '.hp-11-h2')
    sp.paint('h2_c', 'Kop kleur', '.hp-11-h2')
    sp.check('schema', 'FAQ-gegevens voor Google (FAQPage JSON-LD) uit deze vragen', True)

    sp.header('Vragen')
    sp.para('Elke vraag is een blok. Het antwoord mag opmaak en links bevatten; onder het antwoord kunnen twee losse links.')
    sp.size('q', 'Vraag grootte', '--hp-11-q-k', '.hp-11-q')
    sp.paint('q_c', 'Vraag kleur', '.hp-11-q')
    sp.size('no', 'Nummer grootte', '--hp-11-no-k', '.hp-11-sum::before')
    sp.paint('no_c', 'Nummer kleur', '.hp-11-sum::before')
    sp.size('a', 'Antwoord grootte', '--hp-11-a-k', '.hp-11-a')
    sp.paint('a_c', 'Antwoord kleur', '.hp-11-a')
    sp.paint('open_bg', 'Open vraag: achtergrond', '.hp-11-a', 'backgroundColor', target='.hp-11-a, .hp-11 .hp-11-item[open] .hp-11-sum')
    sp.paint('btn_c', 'Plus-knop: kleur', '.hp-11-sum::after', 'borderTopColor', target='.hp-11-sum::after', default='#0A0A0A')
    sp.paint('line_top', 'Lijn boven de lijst', '.hp-11-list', 'borderTopColor')
    sp.paint('line_c', 'Lijnen tussen de vragen', '.hp-11-item', 'borderBottomColor')
    section_basics(sp, '#FFFFFF', '#0A0A0A')


BLOCKS = [{'type': 'faq', 'name': 'Vraag', 'settings': [
    {'type': 'text', 'id': 'q', 'label': 'Vraag', 'default': 'Wat zijn gripsokken?'},
    {'type': 'richtext', 'id': 'a', 'label': 'Antwoord', 'default': '<p>Antwoord</p>'},
    {'type': 'checkbox', 'id': 'open', 'label': 'Standaard open', 'default': False},
    {'type': 'text', 'id': 'l1_label', 'label': 'Link 1: tekst'},
    {'type': 'url', 'id': 'l1_url', 'label': 'Link 1: adres'},
    {'type': 'checkbox', 'id': 'l1_tab', 'label': 'Link 1 in nieuw tabblad', 'default': False},
    {'type': 'text', 'id': 'l2_label', 'label': 'Link 2: tekst'},
    {'type': 'url', 'id': 'l2_url', 'label': 'Link 2: adres'},
    {'type': 'checkbox', 'id': 'l2_tab', 'label': 'Link 2 in nieuw tabblad', 'default': False},
]}]
MAX_BLOCKS = 30
DEFAULT_BLOCKS = [('faq', d) for d in json.load(open(os.path.join(os.path.dirname(__file__), 'faq_default.json')))]


def css(sh):
    color(sh, '.hp-11', 'background', '--hp-11-bg')
    color(sh, '.hp-11', 'color', '--hp-11-fg')
    fsize(sh, '.hp-11-h2', '--hp-11-h2-k')
    fsize(sh, '.hp-11-q', '--hp-11-q-k')
    fsize(sh, '.hp-11-sum::before', '--hp-11-no-k')
    fsize(sh, '.hp-11-a', '--hp-11-a-k')
    # plus-knop: rand en streepjes volgen dezelfde kleur
    sh.append('.hp-11-sum::after { color: var(--hp-11-btn_c); }\n.hp-11 .hp-11-item[open] .hp-11-sum::after { background-color: var(--hp-11-btn_c); color: var(--hp-11-bg, #FFFFFF); }\n'
              '/* Shopify: hi-headings.css zet h3 in hoofdletters (behalve klassen op __q); de vraag blijft gewone letters */\n.hp-11 .hp-11-q { text-transform: none; }')
