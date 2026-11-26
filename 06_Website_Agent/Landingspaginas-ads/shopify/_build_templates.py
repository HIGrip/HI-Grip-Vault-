# Bouwt templates/page.ad-*.json uit de prototype-inhoud van v1.8. Daarna is de editor de bron.
import json, pathlib

OUT = pathlib.Path(__file__).parent / 'templates'
OUT.mkdir(exist_ok=True)
img = lambda n: f'shopify://shop_images/adl-{n}'
WIT, ZWART = 'performance-gripsokken-2-0-wit', 'performance-gripsokken-2-0-zwart'
LETTER = ('Wij zijn drie founders die naast onze studie een sportmerk bouwen. Eén sok waar we alles in stoppen: '
          'gripzones, compressie, naadloos, Coolmax en special cushioning. 3500+ sporters gingen je voor. Nu ben jij aan de beurt.')


def ad(code, heading, style='italic', light='', strike='', sub='', signature='', note=None, note_color='volt',
       lead=None, lead_color='wit', qa=''):
    s = {'code': code, 'style': style, 'heading_light': light, 'heading': heading, 'strike_words': strike, 'sub': sub,
         'signature': signature, 'note_title': 'Checklist voor de wedstrijd', 'note_items': '\n'.join(note or []),
         'note_last': 'HÏ Grip Performance Grip Socks 2.0', 'note_color': note_color, 'lead_color': lead_color, 'qa': qa}
    if lead:
        s['lead_image'] = img(lead)
    return {'type': 'ad', 'settings': s}


def photo(name, color, fit):
    return {'type': 'photo', 'settings': {'image': img(name), 'color': color, 'fit': fit}}


def photos(wit, zwart):
    base = [photo('bol-wit.webp', 'wit', 'cover'), photo('pack3-wit.webp', 'wit', 'contain'), photo('p-wit-achter.webp', 'wit', 'contain')]
    base += [photo(n, 'wit', 'cover') for n in wit]
    base += [photo('bol-zwart.webp', 'zwart', 'cover'), photo('pack3-zwart.webp', 'zwart', 'contain'), photo('p-zwart-achter.webp', 'zwart', 'contain')]
    base += [photo(n, 'zwart', 'cover') for n in zwart]
    return base


def buy(start, blocks, athlete=False):
    s = {'product_wit': WIT, 'product_zwart': ZWART, 'start_color': start,
         'swatch_wit': img('t-sok-wit.webp'), 'swatch_zwart': img('t-sok-zwart.webp'),
         'rating_text': '4,6 uit 21 reviews · 3500+ sporters', 'signature_mark': img('mark-zwart.png'),
         'ship_text': 'Bestel je nu, dan gaat je pakket uiterlijk [dag] de deur uit',
         'usps': 'Gratis|verzending vanaf €35\n30 dagen|retour\n1 werkdag|verzonden',
         'show_sticky': True, 'sticky_text': 'Gratis verzonden · 30 dagen retour', 'sticky_label': 'Kies je maat',
         'athlete_quote': '', 'athlete_name': '', 'athlete_role': ''}
    if athlete:
        s.update(athlete_quote='Ik heb ze tegen Roemenië gebruikt en vond ze heel prettig zitten!',
                 athlete_name='Mike Hansen', athlete_role='Oranje',
                 athlete_avatar_1=img('av-atleet-1.webp'), athlete_avatar_2=img('av-atleet-2.webp'))
    return {'type': 'hi-adl-buy', 'settings': s, 'blocks': blocks}


TILE_TXT = [('Siliconen gripzones', 'Op de drukpunten van je voet. Je voet blijft staan in je schoen.'),
            ('Compressie 15–20 mmHg', 'Steviger om je kuit.'),
            ('Coolmax 30%', 'Voert vocht af van je huid.'),
            ('Naadloos en gedempt', 'Geen naden die schuren, extra laag onder je hiel.')]


def tiles(color, first):
    names = [first, f'd-{color}-rib.jpg', f'd-{color}-mesh.jpg', f'd-{color}-hiel.jpg']
    return {'type': 'hi-adl-tiles', 'settings': {'heading': 'Wat je krijgt'},
            'blocks': [{'type': 'tile', 'settings': {'image': img(n), 'title': t, 'text': x}} for n, (t, x) in zip(names, TILE_TXT)]}


REVIEWS = [
    ('De sokken doen echt wat er beloofd word, je merkt echt verschil in vergelijking met andere sokken, de grip maakt het verschil. Kwaliteit ook super na diverse keren wassen.', 'Adri N.', '31 aug 2025'),
    ('Het zijn goede sokken met een tof design en de website werkt handig. Ik heb meteen 3 paar gekocht voor kerstcadeaus. Iedereen blij.', 'Rox', '18 dec 2025'),
    ('Gripsokken zitten lekker en grip werkt top! Team heeft passie voor hun onderneming.', 'Priscilla V.', '8 mei 2025'),
    ('Sokken zitten uitstekend en sterke stof met goede grip. Ook voor wandelen fijne sokken. Snelle levering.', 'Dick', '12 jun 2025'),
    ('Wat een top service! Snel geleverd en goede kwaliteit!', 'Sharon B.', '4 sep 2025'),
    ('De sokken zitten echt super lekker! Heb absoluut geen spijt van de aankoop.', 'Lydia', '13 jan 2026')]


def reviews(clubs):
    return {'type': 'hi-adl-reviews',
            'settings': {'score': '4,6', 'score_label': '21 reviews op Trustpilot', 'heading': '3500+ sporters gingen je voor.', 'clubs': clubs},
            'blocks': [{'type': 'review', 'settings': {'quote': q, 'name': n, 'date': d}} for q, n, d in REVIEWS]}


SCIENCE = {'type': 'hi-adl-science', 'settings': {}}
FAQ = {'type': 'hi-adl-faq', 'settings': {'heading': 'Vragen'}, 'blocks': [
    {'type': 'question', 'settings': {'question': q, 'answer': f'<p>{a}</p>'}} for q, a in [
        ('Welke maat kies ik?', 'Kies de maat waar je schoenmaat in valt: 35–38, 39–42 of 43–47.'),
        ('Heb ik ze op tijd voor de wedstrijd?', 'We versturen je bestelling binnen 1 werkdag.'),
        ('Wat als hij niet past?', 'Je hebt 30 dagen om je bestelling te retourneren.'),
        ('Wat kost verzending?', 'Vanaf €35 is verzending gratis, dus het 3-pack en 5-pack altijd. Daaronder kost het binnen Nederland €4,50.'),
        ('Hoe kan ik betalen?', 'Met Klarna, PayPal, Apple Pay, Google Pay, Bancontact, Visa, Mastercard of Maestro.')]]}


def offer(bg, slogan, color):
    return {'type': 'hi-adl-offer', 'settings': {
        'background': img(bg), 'heading': slogan, 'product': WIT if color == 'wit' else ZWART,
        'pack_image': img(f't-pack3-{color}.webp'), 'subline': 'gratis verzonden · 30 dagen retour', 'button': 'Kies je maat'}}


ATHLETES = {'type': 'hi-adl-athletes', 'settings': {
    'heading': 'Gedragen door spelers van Oranje.', 'text': 'Vier rugbyspelers spelen op HÏ Grip. In hun eigen woorden.',
    'team_image': img('oranje-team.webp'), 'note': 'Onze athletes krijgen producten van HÏ Grip. Teamfoto: Rugby-Shots.'},
    'blocks': [{'type': 'athlete', 'settings': s} for s in [
        {'image': img('atleet-1-portret.webp'), 'quote': 'Vind het super fijne sokken. Ze zitten lekker en veel grip.', 'name': 'Vikas Meijer', 'role': 'Flyhalf · Oranje'},
        {'image': img('atleet-2-uitsnede.webp'), 'quote': 'Ik heb ze tegen Roemenië gebruikt en vond ze heel prettig zitten!', 'name': 'Mike Hansen', 'role': 'Voorwaarts · Cardiff Met, Oranje'},
        {'quote': 'Ze bevallen erg goed. Ik heb ze ook al aangeraden bij teamgenoten.', 'name': 'Daan van der Avoird', 'role': "Vleugel · RC 't Gooi, Oranje"},
        {'quote': 'Het zit erg goed.', 'name': 'Juun Pieters', 'role': 'Rugby'}]]}

PAGES = {
    'ad-voetbal': [
        ('buy', buy('wit', [
            ad('01', 'Jouw voet niet.', light='Alles beweegt.', sub='Siliconen gripzones houden je voet vast in je schoen. Bij elke kap, draai en sprint.', lead='v-trap.jpg'),
            ad('02', 'Vink hem af.', sub='Het anatomisch gevormde grippatroon houdt je voet vast in je schoen. Zaterdag sta je er klaar voor.', note=['Voetbalschoenen', 'Scheenbeschermers', 'Tenue'], lead='v-grip.jpg'),
            ad('03', 'Beste voetballer,', style='letter', sub=LETTER, signature='Team HÏ Grip', lead='g-grip-wit.jpg'),
        ] + photos(['v-trap.jpg', 'vb-zool-bal.jpg'], ['g-trap-zwart.jpg']))),
        ('reviews', reviews('<p>Gedragen bij onder meer <strong>V.V. Lyra</strong>, <strong>V.V. Spirit</strong>, <strong>SVS</strong> en <strong>Concordia</strong>, en te koop bij <strong>Sport 2000</strong>.</p>')),
        ('tiles', tiles('wit', 'vb-zool-bal.jpg')),
        ('science', SCIENCE), ('faq', FAQ),
        ('offer', offer('v-grip.jpg', 'Alles beweegt.\nJouw voet niet.', 'wit'))],
    'ad-rugby': [
        ('buy', buy('wit', [
            ad('04', 'Vink hem af.', sub='Voor scrum, ruck, sprint en sidesteps: anatomisch gevormde gripzones houden je voet vast in je schoen.', note=['Bitje', 'Tape', 'Schoenen'], note_color='red'),
            ad('05', 'Beste rugbyspeler,', style='letter', sub=LETTER, signature='Team HÏ Grip'),
            ad('09', 'Geef geen meter weg.', style='plain', sub='Anatomisch gevormd grippatroon. Coolmax 30%. Binnen 1 werkdag verzonden.'),
        ] + photos(['rb-zool-wit.jpg'], ['rb-zwart-veld.jpg']), athlete=True)),
        ('athletes', ATHLETES),
        ('reviews', reviews('')),
        ('tiles', tiles('wit', 'rb-zool-wit.jpg')),
        ('science', SCIENCE), ('faq', FAQ),
        ('offer', offer('rb-zwart-veld.jpg', 'Geef geen\nmeter weg.', 'wit'))],
    'ad-product': [
        ('buy', buy('zwart', [
            ad('06', 'Niet elke sok houdt je vast.', sub='Eén voor de wedstrijd. Twee en drie voor de training.'),
            ad('07', 'Nooit meer', strike='schuiven.,glijden.,blaren.', sub='Ons anatomisch gevormde grippatroon is gebaseerd op de drukpunten van je voet. Zo sta jij stevig in je schoenen.'),
            ad('08', 'Wat houdt je nog tegen?', qa='Werkt het echt?|3500+ sporters gingen je voor.\nIs het niet te duur?|€9 korting bij 3 paar.\nZaterdag al nodig?|Binnen 1 werkdag verstuurd.\nWat als hij niet past?|30 dagen retour.'),
        ] + photos(['v-trap.jpg'], ['g-trap-zwart.jpg']))),
        ('reviews', reviews('<p>Gedragen bij voetbal- en rugbyclubs en te koop bij <strong>Sport 2000</strong>.</p>')),
        ('tiles', tiles('zwart', 'd-zwart-grip.jpg')),
        ('science', SCIENCE), ('faq', FAQ),
        ('offer', offer('g-trap-zwart.jpg', 'Niet elke sok\nhoudt je vast.', 'zwart'))],
}

for name, secs in PAGES.items():
    sections, order = {}, []
    for key, sec in secs:
        sec = json.loads(json.dumps(sec))
        if 'blocks' in sec:
            ids = [f'{b["type"]}_{i + 1}' for i, b in enumerate(sec['blocks'])]
            sec['block_order'] = ids
            sec['blocks'] = dict(zip(ids, sec['blocks']))
        sections[key] = sec
        order.append(key)
    data = {'sections': sections, 'order': order}
    (OUT / f'page.{name}.json').write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding='utf-8')
    print('ok', name)
