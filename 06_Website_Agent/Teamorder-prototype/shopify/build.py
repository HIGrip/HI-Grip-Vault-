"""Bouwt de teamorderpagina (prototype v1.25) als Shopify-secties: theme/sections/to-*.liquid en templates/page.teamorder.json.

De Liquid staat hieronder per sectie; de instellingen die elke sectie deelt (kleuren, ruimte, kopmaat, breedte,
uitlijning, animatie) komen uit common(), zodat ze overal dezelfde naam en werking hebben.
Gebruik: python build.py
"""
import json
import os

HERE = os.path.dirname(os.path.abspath(__file__))
THEME = os.path.join(HERE, 'theme')
IMG = 'shopify://shop_images/'

LIGHT = dict(bg='#FFFFFF', fg='#0A0A0A', mu='#55565A', ac='#0A0A0A')
ONYX = dict(bg='#111111', fg='#FFFFFF', mu='#909194', ac='#CCFF00')
CARBON = dict(bg='#1A1A1A', fg='#FFFFFF', mu='#D6D6D6', ac='#CCFF00')
BLACK = dict(bg='#0A0A0A', fg='#FFFFFF', mu='#D1D1D1', ac='#CCFF00')

CHEV = '<span class="to-pill__chev" aria-hidden="true"><svg viewBox="0 0 14 14"><path d="M5 2.5 9.5 7 5 11.5" fill="none" stroke="currentColor" stroke-width="2"/></svg></span>'
ACC = "| escape | replace: '[', '<span class=\"to-ac\">' | replace: ']', '</span>'"


def hd(text):
    return {'type': 'header', 'content': text}


def rng(id, label, mn, mx, step, default, unit='px', info=None):
    d = {'type': 'range', 'id': id, 'label': label, 'min': mn, 'max': mx, 'step': step, 'default': default}
    if unit:
        d['unit'] = unit
    if info:
        d['info'] = info
    return d


def color(id, label, default):
    return {'type': 'color', 'id': id, 'label': label, 'default': default}


def text(id, label, default='', info=None, kind='text'):
    d = {'type': kind, 'id': id, 'label': label}
    if default != '':
        d['default'] = default
    if info:
        d['info'] = info
    return d


def common(c, pt, pb, h=None, lead=None, align=True, width=True):
    """pt/pb = (mobiel, desktop); h = (mobiel, desktop) kopmaat; lead = (mobiel, desktop) tekstmaat."""
    out = [hd('Kleuren'), color('bg', 'Achtergrond', c['bg']), color('fg', 'Tekst', c['fg']),
           color('mu', 'Tweede tekstkleur', c['mu']), color('ac', 'Accentwoord', c['ac'])]
    out += [hd('Ruimte'), rng('pt_m', 'Boven (mobiel)', 0, 200, 4, pt[0]), rng('pb_m', 'Onder (mobiel)', 0, 200, 4, pb[0]),
            rng('pt_d', 'Boven (desktop)', 0, 240, 4, pt[1]), rng('pb_d', 'Onder (desktop)', 0, 240, 4, pb[1])]
    if h or lead or align or width:
        out.append(hd('Tekst en layout'))
    if h:
        out += [rng('h_m', 'Kopmaat (mobiel)', 16, 120, 2, h[0]), rng('h_d', 'Kopmaat (desktop)', 20, 200, 2, h[1])]
    if lead:
        out += [rng('lead_m', 'Tekstmaat (mobiel)', 12, 24, 1, lead[0]), rng('lead_d', 'Tekstmaat (desktop)', 12, 28, 1, lead[1])]
    if align:
        out.append({'type': 'select', 'id': 'align', 'label': 'Uitlijning', 'default': 'left',
                    'options': [{'value': 'left', 'label': 'Links'}, {'value': 'center', 'label': 'Midden'}]})
    if width:
        out.append(rng('w', 'Maximale breedte inhoud', 900, 1600, 20, 1240))
    out.append({'type': 'checkbox', 'id': 'anim', 'label': 'Binnenkomst-animatie', 'default': True})
    return out


def open_tag(cls, extra_style='', label=''):
    """Opent de sectie met de gedeelde klassen en variabelen."""
    style = f' style="{extra_style}"' if extra_style else ''
    aria = f' aria-labelledby="{label}-{{{{ section.id }}}}"' if label else ''
    return (f'<section class="to {cls}{{% if s.align == \'center\' %}} to-c{{% endif %}}"{{% if s.anim %}} data-anim{{% endif %}}{style}{aria}>')


def section(name, body, settings, blocks=None, max_blocks=None):
    schema = {'name': name, 'tag': 'div', 'class': 'to-shopify-section', 'settings': settings}
    if blocks:
        schema['blocks'] = blocks
    if max_blocks:
        schema['max_blocks'] = max_blocks
    head = "{%- liquid\n  assign s = section.settings\n-%}\n{%- render 'to-base' -%}\n"
    return head + body.strip() + '\n\n{% schema %}\n' + json.dumps(schema, ensure_ascii=False, indent=2) + '\n{% endschema %}\n'


S = {}

# ---------------------------------------------------------------- 01 hero
S['to-01-hero'] = section('HÏ Team 01 · Hero', """
{%- render 'to-vars', s: s, id: section.id, h: 168, ref: 1600 -%}
{%- capture pos -%}--to-pos-d: {{ s.pos_x }}% {{ s.pos_y }}%; --to-pos-m: {{ s.pos_x_m }}% {{ s.pos_y_m }}%; --to-ov: {{ s.overlay }}%; --to-hero-h-m: {{ s.hero_h_m }}svh; --to-hero-h-d: {{ s.hero_h_d }}px;{%- endcapture -%}
<section class="to to-hero{% if s.align == 'center' %} to-c{% endif %}"{% if s.anim %} data-anim{% endif %} style="{{ pos }}" aria-labelledby="to-h1-{{ section.id }}">
  {%- render 'to-img', image: s.image, class: 'to-hero__img', alt: s.alt, priority: true, sizes: '100vw' -%}
  <div class="to-wrap">
    <h1 id="to-h1-{{ section.id }}">{{ s.heading | escape | replace: '[', '<span class="to-ac">' | replace: ']', '</span>' | newline_to_br }}</h1>
    <div class="to-hero__f">
      {%- if s.sub != blank -%}<p>{{ s.sub }}</p>{%- endif -%}
      {%- if s.btn_label != blank -%}<a class="to-pill{% if s.btn_style == 'light' %} to-pill--w{% endif %}" href="{{ s.btn_link | default: '#samenstellen' }}">{{ s.btn_label }}""" + CHEV + """</a>{%- endif -%}
    </div>
  </div>
</section>
""", [hd('Foto'), {'type': 'image_picker', 'id': 'image', 'label': 'Foto'}, text('alt', 'Alt-tekst', 'Spelers van Concordia met witte HÏ Grip gripsokken en ballen op kunstgras'),
      rng('pos_x', 'Uitsnede horizontaal (desktop)', 0, 100, 1, 50, '%'), rng('pos_y', 'Uitsnede verticaal (desktop)', 0, 100, 1, 60, '%'),
      rng('pos_x_m', 'Uitsnede horizontaal (mobiel)', 0, 100, 1, 56, '%'), rng('pos_y_m', 'Uitsnede verticaal (mobiel)', 0, 100, 1, 60, '%'),
      rng('overlay', 'Donker verloop onderaan', 0, 100, 5, 90, '%'),
      rng('hero_h_m', 'Hoogte (mobiel, % van scherm)', 50, 100, 2, 86, '%'), rng('hero_h_d', 'Maximale hoogte (desktop)', 400, 1000, 10, 760),
      hd('Tekst'), text('heading', 'Kop', 'Heel je team\nop grip.', 'Nieuwe regel = regelafbreking. Zet een woord tussen [ ] voor de accentkleur.', 'textarea'),
      text('sub', 'Tekst onder de kop', 'Teamorder vanaf 5 paar. Hoe meer paar, hoe lager je prijs per paar.'),
      text('btn_label', 'Knop', 'Stel samen'), {'type': 'url', 'id': 'btn_link', 'label': 'Knoplink', 'info': 'Leeg = naar de samensteller (#samenstellen)'},
      {'type': 'select', 'id': 'btn_style', 'label': 'Knopstijl', 'default': 'light', 'options': [{'value': 'light', 'label': 'Wit'}, {'value': 'dark', 'label': 'Zwart'}]}]
    + common(BLACK, (0, 0), (40, 72), (52, 168), (15, 18)))

# ---------------------------------------------------------------- 02 service
ICONS = {
    'truck': '<path d="M2.5 6.5h11v9h-11zM13.5 9.5h4l3 3v3h-7z"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',
    'clock': '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    'return': '<path d="M4 9h11a5 5 0 0 1 0 10H9"/><path d="M8 5 4 9l4 4"/>',
    'shield': '<path d="M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6z"/><path d="m9 12 2 2 4-4"/>',
    'star': '<path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z"/>',
}
icon_liquid = '{%- case b.icon -%}' + ''.join(f"{{%- when '{k}' -%}}{v}" for k, v in ICONS.items()) + '{%- endcase -%}'
S['to-02-service'] = section('HÏ Team 02 · Service', """
{%- render 'to-vars', s: s, id: section.id, h: 26, ref: 1300 -%}
<section class="to to-svc{% if s.align == 'center' %} to-c{% endif %}" style="--to-ic-m: {{ s.ic_m }}px; --to-ic-d: {{ s.ic_d }}px;" aria-label="{{ s.label | escape }}">
  <ul class="to-wrap">
    {%- for block in section.blocks -%}
      {%- assign b = block.settings -%}
      <li {{ block.shopify_attributes }}><span class="to-svc__ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">""" + icon_liquid + """</svg></span><div><b>{{ b.title }}</b><span>{{ b.text }}</span></div></li>
    {%- endfor -%}
  </ul>
</section>
""", [text('label', 'Naam voor schermlezers', 'Service'), rng('ic_m', 'Icoonmaat (mobiel)', 16, 64, 2, 32), rng('ic_d', 'Icoonmaat (desktop)', 16, 80, 2, 42)]
    + common(LIGHT, (28, 40), (28, 40), (18, 26), None, True, True),
    [{'type': 'usp', 'name': 'Voordeel', 'settings': [
        {'type': 'select', 'id': 'icon', 'label': 'Icoon', 'default': 'truck', 'options': [{'value': k, 'label': l} for k, l in
                                                                                         [('truck', 'Verzending'), ('clock', 'Klok'), ('return', 'Retour'), ('shield', 'Schild'), ('star', 'Ster')]]},
        text('title', 'Titel', 'Gratis'), text('text', 'Tekst', 'verzending')]}], 4)

# ---------------------------------------------------------------- 03 samensteller
S['to-03-samensteller'] = section('HÏ Team 03 · Samensteller', """
{%- render 'to-vars', s: s, id: section.id, h: 60 -%}
{%- assign groups = '' -%}{%- assign tiers = '' -%}{%- assign warn = '' -%}{%- assign shown = '' -%}
{%- for block in section.blocks -%}
  {%- assign b = block.settings -%}
  {%- if block.type == 'sok' and b.product != blank -%}
    {%- capture gj -%}{"name":{{ b.name | json }},"label":{{ b.label | json }},"sw":{{ b.swatch | append: '' | json }},"v":[{%- for v in b.product.variants -%}{"id":{{ v.id }},"s":{{ v.title | json }},"p":{{ v.price }},"a":{{ v.available }}}{%- unless forloop.last -%},{%- endunless -%}{%- endfor -%}]}{%- endcapture -%}
    {%- assign groups = groups | append: gj | append: ',' -%}
  {%- elsif block.type == 'staffel' -%}
    {%- assign off = b.off | replace: ',', '.' | times: 100 | round -%}
    {%- assign code = b.code | strip -%}
    {%- capture tj -%}{"m":{{ b.min | default: 0 }},"o":{{ off }},"c":{{ code | json }}}{%- endcapture -%}
    {%- assign tiers = tiers | append: tj | append: ',' -%}
    {%- if code == blank -%}{%- assign warn = warn | append: b.min | append: '+ ' -%}{%- endif -%}
  {%- endif -%}
{%- endfor -%}
{%- assign groups = groups | remove_last: ',' -%}{%- assign tiers = tiers | remove_last: ',' -%}
<section class="to to-bld-sec{% if s.align == 'center' %} to-c{% endif %}"{% if s.anim %} data-anim{% endif %} id="samenstellen" data-to-builder style="--to-card-bg: {{ s.card_bg }}; --to-card-fg: {{ s.card_fg }}; --to-card-mu: {{ s.card_mu }}; --to-on-bg: {{ s.on_bg }}; --to-on-fg: {{ s.on_fg }}; --to-nd-bg: {{ s.nd_bg }}; --to-nd-fg: {{ s.nd_fg }}; --to-nd-ac: {{ s.nd_ac }}; --to-cart-w: {{ s.cart_w }}px;" aria-labelledby="to-b-{{ section.id }}">
  <div class="to-wrap">
    <h2 class="to-h2 to-rv" id="to-b-{{ section.id }}">{{ s.heading | escape | replace: '[', '<span class="to-ac">' | replace: ']', '</span>' }}</h2>
    {%- if s.lead != blank -%}<p class="to-lead to-rv" style="--d:60ms">{{ s.lead }}</p>{%- endif -%}
    <div class="to-bld{% if s.cart_side == 'left' %} to-bld--rev{% endif %}">
      <div class="to-card to-rv" style="--d:100ms">
        <div class="to-fld"><p class="to-fld__l">{{ s.l_type }}</p><div class="to-seg" data-r="types" role="group" aria-label="{{ s.l_type | escape }}"></div></div>
        <div class="to-fld"><p class="to-fld__l">{{ s.l_color }}</p><div class="to-seg" data-r="colors" role="group" aria-label="{{ s.l_color | escape }}"></div></div>
        <div class="to-fld"><p class="to-fld__l">{{ s.l_size }}</p><div data-r="sizes"></div></div>
        {%- if s.hint != blank -%}<p class="to-hint">{{ s.hint }}</p>{%- endif -%}
        {%- if request.design_mode and warn != blank -%}<p class="to-warn">Alleen zichtbaar in de editor: staffel {{ warn }}heeft nog geen kortingscode. Zonder code betaalt de klant bij het afrekenen de normale prijs.</p>{%- endif -%}
      </div>

      <aside class="to-card to-cart to-rv" style="--d:160ms" data-r="cart" id="winkelwagen-{{ section.id }}" aria-labelledby="to-c-{{ section.id }}">
        <div class="to-cart__h"><h3 id="to-c-{{ section.id }}">{{ s.cart_title }}</h3><span data-r="count">0 {{ s.t_pairs }}</span></div>
        <ul class="to-items" data-r="items" aria-live="polite"></ul>
        <dl class="to-tot">
          <dt>{{ s.l_save }}</dt><dd data-r="save">€ 0,00</dd>
          {%- if s.l_ship != blank -%}<dt>{{ s.l_ship }}</dt><dd>{{ s.v_ship }}</dd>{%- endif -%}
          <dt class="to-lbl">{{ s.l_total }}</dt><dd class="to-big" data-r="total">€ 0,00</dd>
        </dl>
        <div class="to-nudge" data-r="nudge"><p data-r="ntxt"></p><button type="button" data-r="nbtn"></button></div>
        <button type="button" class="to-pill to-buy" data-r="buy">{{ s.buy }}""" + CHEV + """</button>
        {%- if s.show_req -%}
          <button class="to-ask" type="button" data-r="ask" aria-expanded="false" aria-controls="to-req-{{ section.id }}">{{ s.ask }} <u>{{ s.ask_u }}</u></button>
          <div class="to-req" data-r="req" id="to-req-{{ section.id }}" hidden>
          {%- form 'contact', id: 'to-req-form', novalidate: 'novalidate' -%}
            {{ form.errors | default_errors }}
            {%- if form.posted_successfully? -%}<p class="to-msg to-msg--ok" role="status">{{ s.req_ok }}</p>{%- endif -%}
            <p>{{ s.req_text }}</p>
            <input type="hidden" name="contact[Bron]" value="Teamorderpagina">
            <div class="to-f"><label for="to-r-club-{{ section.id }}">{{ s.f_club }}</label><input id="to-r-club-{{ section.id }}" name="contact[Club of team]" autocomplete="organization"></div>
            <div class="to-f"><label for="to-r-mail-{{ section.id }}">{{ s.f_mail }}</label><input id="to-r-mail-{{ section.id }}" name="contact[email]" type="email" autocomplete="email" required data-check="^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$"><span class="to-err">{{ s.e_mail }}</span></div>
            <div class="to-f"><label for="to-r-tel-{{ section.id }}">{{ s.f_tel }}</label><input id="to-r-tel-{{ section.id }}" name="contact[Telefoon]" type="tel" autocomplete="tel" required data-check="^[+\\d][\\d\\s-]{7,}$"><span class="to-err">{{ s.e_tel }}</span></div>
            <textarea name="contact[body]" hidden aria-hidden="true" tabindex="-1"></textarea>
            <button class="to-pill" type="submit">{{ s.req_btn }}""" + CHEV + """</button>
          {%- endform -%}
          </div>
        {%- endif -%}
        <p class="to-msg" data-r="msg" role="status" hidden></p>
        {%- if s.show_tiers -%}
          <details class="to-st"><summary>{{ s.l_tiers }}</summary>
            <table><thead><tr><th>{{ s.l_pairs }}</th>{%- for block in section.blocks -%}{%- if block.type == 'sok' and block.settings.product != blank -%}{%- unless shown contains block.settings.name -%}<th>{{ block.settings.name }}</th>{%- assign shown = shown | append: block.settings.name | append: '|' -%}{%- endunless -%}{%- endif -%}{%- endfor -%}</tr></thead><tbody data-r="tiers"></tbody></table>
            {%- if s.tiers_note != blank -%}<p>{{ s.tiers_note }}</p>{%- endif -%}
          </details>
        {%- endif -%}
      </aside>
    </div>
  </div>
  {%- if s.mbar -%}
    <div class="to-mbar" aria-hidden="true"><a href="#winkelwagen-{{ section.id }}" tabindex="-1"><span class="to-mbar__t"><b data-r="btop">0 {{ s.t_pairs }}</b><span data-r="bsub"></span></span><span class="to-mbar__go">{{ s.cart_title }}</span></a></div>
  {%- endif -%}
  <script type="application/json" data-to-cfg>{"groups":[{{ groups }}],"tiers":[{{ tiers }}],"minOrder":{{ s.min_order }},"after":{{ s.after | json }},"zak":{"url":{{ s.zak_link | json }},"label":{{ s.zak_label | json }}},"t":{"from":{{ s.t_from | json }},"pairs":{{ s.t_pairs | json }},"empty":{{ s.empty | json }},"soldout":{{ s.t_soldout | json }},"less":"Eén paar minder,","more":"Eén paar meer,","count":"Aantal","remove":"Verwijder","nStart":{{ s.n_start | json }},"nNext":{{ s.n_next | json }},"nMax":{{ s.n_max | json }},"nAdd":"[n] paar toevoegen","minMsg":{{ s.min_msg | json }},"busy":{{ s.t_busy | json }},"addErr":{{ s.t_err | json }},"emptyCart":{{ s.t_emptycart | json }},"barSub":{{ s.bar_sub | json }},"barMax":{{ s.bar_max | json }},"barEmpty":{{ s.bar_empty | json }}}}</script>
</section>
""", [hd('Kop'), text('heading', 'Kop', 'Stel je [teamorder] samen.', 'Zet een woord tussen [ ] voor de accentkleur.'),
      text('lead', 'Intro', 'Kies je sok en kleur, tik per maat hoeveel paar. Alle paren tellen samen voor je staffelprijs.', kind='textarea'),
      hd('Kiezen'), text('l_type', 'Label sok', 'Sok'), text('l_color', 'Label kleur', 'Kleur'), text('l_size', 'Label maten', 'Aantal per maat'),
      text('t_from', 'Woord voor de laagste prijs', 'vanaf'), text('t_soldout', 'Tekst bij uitverkochte maat', 'Uitverkocht'),
      text('hint', 'Tip onder de maten', 'Ook een andere kleur of sok erbij? Wissel hierboven en tel verder. Je winkelwagen onthoudt alles.', kind='textarea'),
      hd('Winkelwagen'), text('cart_title', 'Titel', 'Winkelwagen'), text('t_pairs', 'Woord voor paar', 'paar'), text('empty', 'Lege winkelwagen', 'Nog leeg. Tik op + bij een maat.'),
      text('l_save', 'Label korting', 'Staffelkorting'), text('l_ship', 'Label verzending', 'Verzending', 'Leeg = regel verbergen'), text('v_ship', 'Waarde verzending', 'Gratis'),
      text('l_total', 'Label totaal', 'Totaal'),
      text('n_start', 'Duwtje onder de eerste staffel', 'Nog [n] paar tot teamprijs.', '[n] = aantal paar dat nog nodig is'),
      text('n_next', 'Duwtje naar de volgende staffel', '+[n] paar en elk paar wordt [p].', '[n] = aantal paar, [p] = nieuwe prijs per paar'),
      text('n_max', 'Tekst bij de hoogste staffel', 'Meer dan [m] paar? Vraag je clubprijs aan via', '[m] = hoogste staffel; de link hieronder komt erachter'),
      text('zak_label', 'Linktekst zakelijk', 'HÏ Grip Zakelijk.'), {'type': 'url', 'id': 'zak_link', 'label': 'Link zakelijk'},
      text('buy', 'Knop afrekenen', 'Afrekenen'),
      {'type': 'select', 'id': 'after', 'label': 'Na de knop naar', 'default': 'checkout', 'options': [{'value': 'checkout', 'label': 'Kassa'}, {'value': 'cart', 'label': 'Winkelwagen'}]},
      rng('min_order', 'Minimaal aantal paar om af te rekenen', 1, 20, 1, 5, None),
      text('min_msg', 'Melding onder het minimum', 'Kies minimaal [m] paar voor de teamprijs.'), text('t_busy', 'Melding tijdens toevoegen', 'Even geduld, we zetten je order klaar...'),
      text('t_err', 'Melding bij een fout', 'Dat lukte niet. Probeer het opnieuw of mail ons via info@higrip.nl.'),
      hd('Staffeltabel'), {'type': 'checkbox', 'id': 'show_tiers', 'label': 'Toon de staffeltabel', 'default': True},
      text('l_tiers', 'Titel', 'Bekijk de staffel'), text('l_pairs', 'Kolom aantal', 'Paar'), text('tiers_note', 'Regel onder de tabel', 'Prijs per paar. De korting staat bij het afrekenen op je bestelling.'),
      hd('Aanvraag zonder afrekenen'), {'type': 'checkbox', 'id': 'show_req', 'label': 'Toon het aanvraagformulier', 'default': True,
                                         'info': 'Gaat via het Shopify-contactformulier naar het winkel-e-mailadres, met de order erbij.'},
      text('ask', 'Vraag', 'Liever persoonlijk contact?'), text('ask_u', 'Link', 'Laat je gegevens achter'),
      text('req_text', 'Uitleg', 'Laat je gegevens achter. Wij krijgen je order per mail en regelen het persoonlijk met je, binnen 1 werkdag.', kind='textarea'),
      text('f_club', 'Veld club', 'Club of team'), text('f_mail', 'Veld e-mail', 'E-mailadres'), text('e_mail', 'Fout e-mail', 'Vul een geldig e-mailadres in.'),
      text('f_tel', 'Veld telefoon', 'Telefoonnummer'), text('e_tel', 'Fout telefoon', 'Vul je telefoonnummer in.'), text('req_btn', 'Knop', 'Verstuur aanvraag'),
      text('req_ok', 'Bedankt-melding', 'Dank je! We hebben je aanvraag en nemen binnen 1 werkdag contact met je op.'),
      text('t_emptycart', 'Melding bij lege order', 'Je winkelwagen is nog leeg.'),
      hd('Mobiele balk'), {'type': 'checkbox', 'id': 'mbar', 'label': 'Toon de balk onderin op mobiel', 'default': True},
      text('bar_sub', 'Balk: nog nodig', 'Nog [n] voor een lagere prijs'), text('bar_max', 'Balk: hoogste staffel', 'Laagste prijs bereikt'), text('bar_empty', 'Balk: leeg', 'Tik op + bij een maat'),
      hd('Layout'), {'type': 'select', 'id': 'cart_side', 'label': 'Winkelwagen op desktop', 'default': 'right', 'options': [{'value': 'right', 'label': 'Rechts'}, {'value': 'left', 'label': 'Links'}]},
      rng('cart_w', 'Breedte winkelwagen (desktop)', 320, 520, 10, 400),
      hd('Kleuren kaarten'), color('card_bg', 'Kaart achtergrond', '#FFFFFF'), color('card_fg', 'Kaart tekst', '#0A0A0A'), color('card_mu', 'Kaart tweede tekst', '#55565A'),
      color('on_bg', 'Gekozen knop achtergrond', '#0A0A0A'), color('on_fg', 'Gekozen knop tekst', '#FFFFFF'),
      color('nd_bg', 'Duwtje achtergrond', '#0A0A0A'), color('nd_fg', 'Duwtje tekst', '#FFFFFF'), color('nd_ac', 'Duwtje accent', '#CCFF00')]
    + common(ONYX, (72, 128), (72, 128), (34, 60), (15, 17)),
    [{'type': 'sok', 'name': 'Sok en kleur', 'settings': [
        {'type': 'paragraph', 'content': 'Eén blok per kleur. Blokken met dezelfde soknaam vormen samen één sok met meerdere kleuren. Prijs en maten komen uit het product.'},
        text('name', 'Soknaam', '2.0'), text('label', 'Kleur', 'Zwart'), color('swatch', 'Kleurbolletje', '#0A0A0A'),
        {'type': 'product', 'id': 'product', 'label': 'Product'}]},
     {'type': 'staffel', 'name': 'Staffel', 'settings': [
        {'type': 'paragraph', 'content': 'Vanaf dit aantal paar (alle sokken samen) gaat dit bedrag van elk paar af. De kortingscode zet de korting bij het afrekenen op de bestelling: maak hem in Shopify aan als vast bedrag per artikel met hetzelfde minimum aantal.'},
        {'type': 'number', 'id': 'min', 'label': 'Vanaf aantal paar', 'default': 5},
        text('off', 'Korting per paar in euro', '4,00', 'Bijvoorbeeld 4,00'),
        text('code', 'Kortingscode in Shopify', '', 'Leeg = geen korting bij het afrekenen')]}])

# ---------------------------------------------------------------- 04 stappen
S['to-04-stappen'] = section('HÏ Team 04 · Stappen', """
{%- render 'to-vars', s: s, id: section.id, h: 60 -%}
<section class="to to-steps-sec{% if s.align == 'center' %} to-c{% endif %}"{% if s.anim %} data-anim{% endif %} style="--to-cols: {{ section.blocks.size | at_least: 1 }};" aria-labelledby="to-w-{{ section.id }}">
  <div class="to-wrap">
    <h2 class="to-h2 to-rv" id="to-w-{{ section.id }}">{{ s.heading | escape | replace: '[', '<span class="to-ac">' | replace: ']', '</span>' }}</h2>
    <ol class="to-steps">
      {%- for block in section.blocks -%}
        <li class="to-rv" style="--d:{{ forloop.index0 | times: 80 }}ms" {{ block.shopify_attributes }}><span class="to-steps__n">{{ forloop.index }}</span><h3>{{ block.settings.title }}</h3><p>{{ block.settings.text }}</p></li>
      {%- endfor -%}
    </ol>
  </div>
</section>
""", [text('heading', 'Kop', 'In vier stappen [geregeld.]', 'Zet een woord tussen [ ] voor de accentkleur.')]
    + common(LIGHT, (48, 88), (48, 88), (34, 60)),
    [{'type': 'step', 'name': 'Stap', 'settings': [text('title', 'Titel', 'Stel samen'), text('text', 'Tekst', 'Kies je sok en kleur, en per maat het aantal paar.', kind='textarea')]}], 6)

# ---------------------------------------------------------------- 05 de sok
S['to-05-sok'] = section('HÏ Team 05 · De sok', """
{%- render 'to-vars', s: s, id: section.id, h: 58, ref: 1526 -%}
<section class="to to-feat{% if s.media_side == 'left' %} to-feat--rev{% endif %}{% if s.align == 'center' %} to-c{% endif %}"{% if s.anim %} data-anim{% endif %} id="sok" style="--to-tile: {{ s.tile }}; --to-stat: clamp({{ s.stat_m }}px, {{ s.stat_d | times: 100.0 | divided_by: 1240 | round: 2 }}vw, {{ s.stat_d }}px);" aria-labelledby="to-s-{{ section.id }}">
  <div class="to-wrap">
    <div class="to-rv">
      <h2 class="to-h2" id="to-s-{{ section.id }}">{{ s.heading | escape | replace: '[', '<span class="to-ac">' | replace: ']', '</span>' | replace: '((', '<span class="to-nw">' | replace: '))', '</span>' }}</h2>
      {%- if s.stat != blank -%}<div class="to-f95"><b>{{ s.stat }}</b><span>{{ s.stat_text }}</span></div>{%- endif -%}
    </div>
    <div>
      <div class="to-ig to-rv" style="--d:120ms"{% if s.mark != blank %} data-mark="{{ s.mark | escape }}"{% endif %}>
        {%- render 'to-img', image: s.image, alt: s.alt, sizes: '(min-width: 1024px) 26vw, 68vw' -%}
        {%- for block in section.blocks -%}
          {%- assign b = block.settings -%}
          <div class="to-co to-co--{{ b.side }}" style="--x:{{ b.x }}%;--y:{{ b.y }}%;--d:{{ forloop.index0 | times: 60 }}ms" {{ block.shopify_attributes }}><div><b>{{ b.title }}</b><span>{{ b.text }}</span></div></div>
        {%- endfor -%}
      </div>
      <ul class="to-fm">
        {%- for block in section.blocks -%}<li><b>{{ block.settings.title }}</b><span>{{ block.settings.text }}</span></li>{%- endfor -%}
      </ul>
    </div>
  </div>
  {%- if s.source != blank -%}<p class="to-wrap to-src">{{ s.source }}</p>{%- endif -%}
</section>
""", [hd('Kop'), text('heading', 'Kop', 'Performance ((gripsokken [2.0]))', '[ ] = accentkleur, (( )) = niet afbreken'),
      text('stat', 'Groot cijfer', '95%'), text('stat_text', 'Tekst bij het cijfer', 'meer grip dan gewone sportsokken*'),
      rng('stat_m', 'Cijfermaat (mobiel)', 40, 160, 2, 84), rng('stat_d', 'Cijfermaat (desktop)', 40, 200, 2, 136),
      text('source', 'Bronregel', '* Gripsokken als categorie t.o.v. gewone sportsokken. Bron: Apps et al. 2022.', kind='textarea'),
      hd('Productbeeld'), {'type': 'image_picker', 'id': 'image', 'label': 'Productfoto (vrijstaand)'}, text('alt', 'Alt-tekst', 'Performance Grip Socks 2.0 in wit'),
      text('mark', 'Grote omlijnde tekst achter de sok', '2.0', 'Leeg = geen'),
      {'type': 'select', 'id': 'media_side', 'label': 'Sok op desktop', 'default': 'right', 'options': [{'value': 'right', 'label': 'Rechts'}, {'value': 'left', 'label': 'Links'}]},
      color('tile', 'Tegels op mobiel', '#1A1A1A')]
    + common(ONYX, (72, 128), (72, 128), (36, 58)),
    [{'type': 'point', 'name': 'Kenmerk', 'settings': [text('title', 'Titel', 'Compressie'), text('text', 'Tekst', '15-20 mmHg steun rond je voet'),
                                                      {'type': 'select', 'id': 'side', 'label': 'Kant (desktop)', 'default': 'l', 'options': [{'value': 'l', 'label': 'Links'}, {'value': 'r', 'label': 'Rechts'}]},
                                                      rng('x', 'Lijn tot (horizontaal)', 0, 100, 1, 46, '%'), rng('y', 'Hoogte', 0, 100, 1, 22, '%')]}], 8)

# ---------------------------------------------------------------- 06 op het veld
S['to-06-op-het-veld'] = section('HÏ Team 06 · Op het veld', """
{%- render 'to-vars', s: s, id: section.id, h: 96, ref: 1500 -%}
<section class="to to-con{% if s.align == 'center' %} to-c{% endif %}"{% if s.anim %} data-anim{% endif %} id="op-het-veld" style="--to-lh: 0.88; --to-row: {{ s.row }}px;" aria-labelledby="to-k-{{ section.id }}">
  <div class="to-wrap">
    <h2 class="to-h2 to-rv" id="to-k-{{ section.id }}">{{ s.heading | escape | replace: '[', '<span class="to-ac">' | replace: ']', '</span>' | newline_to_br }}</h2>
    {%- if s.lead != blank -%}<p class="to-lead to-rv" style="--d:60ms">{{ s.lead }}</p>{%- endif -%}
    <div class="to-gal to-rv" style="--d:120ms" role="list" aria-label="{{ s.label | escape }}">
      {%- for block in section.blocks -%}
        {%- assign b = block.settings -%}
        <figure class="{% if b.ls %}is-ls{% endif %}" role="listitem" style="--cs:{{ b.cols }};--rs:{{ b.rows }};--p:{{ b.px }}% {{ b.py }}%" {{ block.shopify_attributes }}>
          {%- render 'to-img', image: b.image, alt: b.alt, sizes: '(min-width: 981px) 50vw, 90vw' -%}
        </figure>
      {%- endfor -%}
    </div>
  </div>
</section>
""", [text('heading', 'Kop', 'Op het veld\nbij [Concordia.]', 'Nieuwe regel = regelafbreking; [ ] = accentkleur', 'textarea'),
      text('lead', 'Intro', 'Geen studio. Een avondtraining in Delft, onder de lampen, op kunstgras. Zo spelen teams met HÏ Grip.', kind='textarea'),
      text('label', 'Naam voor schermlezers', 'Sfeerbeelden van de shootdag bij Concordia'), rng('row', 'Rijhoogte raster (desktop)', 60, 200, 4, 120)]
    + common(LIGHT, (72, 128), (12, 12), (40, 96), (15, 17)),
    [{'type': 'photo', 'name': 'Foto', 'settings': [{'type': 'image_picker', 'id': 'image', 'label': 'Foto'}, text('alt', 'Alt-tekst'),
                                                   rng('cols', 'Breedte op desktop (van 12)', 2, 12, 1, 4, None), rng('rows', 'Hoogte op desktop (rijen)', 1, 6, 1, 3, None),
                                                   {'type': 'checkbox', 'id': 'ls', 'label': 'Liggend op mobiel', 'default': False},
                                                   rng('px', 'Uitsnede horizontaal', 0, 100, 1, 50, '%'), rng('py', 'Uitsnede verticaal', 0, 100, 1, 50, '%')]}], 12)

# ---------------------------------------------------------------- 07 trustpilot
STAR = '<svg viewBox="0 0 16 16"><path fill="currentColor" d="M8 .6l2.2 4.9 5.3.5-4 3.6 1.2 5.3L8 12.1l-4.7 2.8 1.2-5.3-4-3.6 5.3-.5z"/></svg>'
S['to-07-trustpilot'] = section('HÏ Team 07 · Trustpilot', """
{%- render 'to-vars', s: s, id: section.id, h: 148, ref: 1480 -%}
<section class="to to-tp-sec"{% if s.anim %} data-anim{% endif %} style="--to-pos-d: {{ s.pos_x }}% {{ s.pos_y }}%; --to-pos-m: {{ s.pos_x_m }}% {{ s.pos_y_m }}%; --to-ov: {{ s.overlay }}%; --to-tp-h: {{ s.min_h }}px;">
  <div class="to-wrap">
    <div class="to-tp to-rv" role="group" aria-label="Trustpilot">
      {%- render 'to-img', image: s.image, alt: s.alt, sizes: '(min-width: 1240px) 1160px, 100vw' -%}
      <p class="to-tp__score">{{ s.score }}</p>
      <div class="to-tp__side">
        {%- assign full = s.stars | floor -%}{%- assign rest = s.stars | minus: full -%}{%- assign half_at = full | plus: 1 -%}
        <div class="to-stars" role="img" aria-label="{{ s.score | escape }} van 5 sterren">
          {%- for i in (1..5) -%}<i class="{% if i > full %}{% if i == half_at and rest > 0 %}is-half{% else %}is-off{% endif %}{% endif %}">""" + STAR + """</i>{%- endfor -%}
        </div>
        <b>{{ s.title }}</b>
        <p>{{ s.text }} {% if s.link_label != blank %}<a href="{{ s.link }}" target="_blank" rel="noopener">{{ s.link_label }}</a>{% endif %}</p>
      </div>
    </div>
  </div>
</section>
""", [text('score', 'Score', '4,6', 'Neem de score over van Trustpilot'),
      {'type': 'range', 'id': 'stars', 'label': 'Sterren', 'min': 0, 'max': 5, 'step': 0.5, 'default': 4.5},
      text('title', 'Titel', 'Op Trustpilot'), text('text', 'Tekst', 'Gemiddelde score op Trustpilot.'),
      text('link_label', 'Linktekst', 'Lees de reviews'), {'type': 'url', 'id': 'link', 'label': 'Link'},
      hd('Foto'), {'type': 'image_picker', 'id': 'image', 'label': 'Achtergrondfoto'}, text('alt', 'Alt-tekst'),
      rng('pos_x', 'Uitsnede horizontaal (desktop)', 0, 100, 1, 50, '%'), rng('pos_y', 'Uitsnede verticaal (desktop)', 0, 100, 1, 64, '%'),
      rng('pos_x_m', 'Uitsnede horizontaal (mobiel)', 0, 100, 1, 12, '%'), rng('pos_y_m', 'Uitsnede verticaal (mobiel)', 0, 100, 1, 64, '%'),
      rng('overlay', 'Donker verloop', 0, 100, 2, 88, '%'), rng('min_h', 'Hoogte blok', 200, 600, 10, 380)]
    + common(LIGHT, (0, 0), (0, 0), (88, 148), None, False, True))

# ---------------------------------------------------------------- 08 logo's
S['to-08-logos'] = section("HÏ Team 08 · Logo's", """
{%- render 'to-vars', s: s, id: section.id, h: 36, ref: 1385 -%}
<section class="to to-lg-sec"{% if s.anim %} data-anim{% endif %} style="--to-lh: 1; --to-speed: {{ s.speed }}s; --to-logo-w: {{ s.logo_w }}px; --to-logo-hh: {{ s.logo_h }}px; --to-lg-h: {{ s.head_w }}px;" aria-labelledby="to-cl-{{ section.id }}">
  <div class="to-wrap to-lg">
    <h2 class="to-h2 to-rv" id="to-cl-{{ section.id }}">{{ s.heading | escape | replace: '[', '<span class="to-ac">' | replace: ']', '</span>' }}</h2>
    <div class="to-mq{% if s.grey %} to-mq--grey{% endif %} to-rv">
      <ul>
        {%- for pass in (1..2) -%}
          {%- for block in section.blocks -%}
            <li{% if pass == 2 %} aria-hidden="true"{% else %} {{ block.shopify_attributes }}{% endif %}>
              {%- if pass == 2 -%}{%- render 'to-img', image: block.settings.image, decorative: true, sizes: '120px' -%}{%- else -%}{%- render 'to-img', image: block.settings.image, alt: block.settings.alt, sizes: '120px' -%}{%- endif -%}
            </li>
          {%- endfor -%}
        {%- endfor -%}
      </ul>
    </div>
  </div>
</section>
""", [text('heading', 'Kop', 'Clubs en retailers kiezen al voor [HÏ Grip.]', 'Zet een woord tussen [ ] voor de accentkleur.'),
      {'type': 'checkbox', 'id': 'grey', 'label': "Logo's in grijstinten (kleur bij hover)", 'default': True},
      rng('speed', 'Snelheid (seconden per ronde)', 10, 80, 2, 32, 's'), rng('logo_w', 'Logobreedte (desktop)', 60, 200, 2, 104), rng('logo_h', 'Logohoogte (desktop)', 30, 120, 2, 64),
      rng('head_w', 'Breedte kop (desktop)', 240, 640, 10, 440)]
    + common(LIGHT, (48, 80), (72, 128), (26, 36), None, False, True),
    [{'type': 'logo', 'name': 'Logo', 'settings': [{'type': 'image_picker', 'id': 'image', 'label': 'Logo'}, text('alt', 'Naam (alt-tekst)')]}], 20)

# ---------------------------------------------------------------- 09 voor clubs
S['to-09-voor-clubs'] = section('HÏ Team 09 · Voor clubs', """
{%- render 'to-vars', s: s, id: section.id, h: 96, ref: 1500 -%}
<section class="to to-vc{% if s.align == 'center' %} to-c{% endif %}"{% if s.anim %} data-anim{% endif %} id="clubs" style="--to-lh: 0.88; --to-tile-h: {{ s.tile_h }}px;" aria-labelledby="to-v-{{ section.id }}">
  <div class="to-wrap">
    <div class="to-vc-h">
      <h2 class="to-h2 to-rv" id="to-v-{{ section.id }}"{% if s.h_ac %} style="color: var(--to-ac)"{% endif %}>{{ s.heading | escape | replace: '[', '<span class="to-ac">' | replace: ']', '</span>' }}</h2>
      {%- if s.lead != blank -%}<p class="to-lead to-rv" style="--d:60ms">{{ s.lead }}</p>{%- endif -%}
    </div>
    <div class="to-vgrid{% if s.big_side == 'left' %} to-vgrid--rev{% endif %}">
      {%- for block in section.blocks -%}
        {%- assign b = block.settings -%}
        <article class="to-vt{% if b.big %} to-vt--big{% endif %} to-rv" style="--d:{{ forloop.index0 | times: 80 }}ms;--p:{{ b.px }}% {{ b.py }}%" {{ block.shopify_attributes }}>
          {%- render 'to-img', image: b.image, alt: b.alt, sizes: '(min-width: 900px) 50vw, 50vw' -%}
          <div>
            <h3>{{ b.title | escape | newline_to_br }}</h3>
            {%- if b.text != blank -%}<p>{{ b.text }}</p>{%- endif -%}
            {%- if b.chips != blank -%}<div class="to-vt__mini">{%- assign chips = b.chips | split: ',' -%}{%- for c in chips -%}<span>{{ c | strip }}</span>{%- endfor -%}</div>{%- endif -%}
            {%- if b.btn_label != blank -%}<a class="to-pill to-pill--w" href="{{ b.btn_link }}"><span>{% if b.btn_pre != blank %}<span class="to-d-only">{{ b.btn_pre }} </span>{% endif %}{{ b.btn_label }}</span>""" + CHEV + """</a>{%- endif -%}
          </div>
        </article>
      {%- endfor -%}
    </div>
  </div>
</section>
""", [text('heading', 'Kop', 'Voor clubs', 'Zet een woord tussen [ ] voor de accentkleur.'), {'type': 'checkbox', 'id': 'h_ac', 'label': 'Hele kop in accentkleur', 'default': True},
      text('lead', 'Intro', 'Meer dan één team? Met HÏ Grip Zakelijk regel je de hele club, met of zonder eigen logo.', kind='textarea'),
      {'type': 'select', 'id': 'big_side', 'label': 'Grote tegel', 'default': 'right', 'options': [{'value': 'right', 'label': 'Rechts'}, {'value': 'left', 'label': 'Links'}]},
      rng('tile_h', 'Tegelhoogte (mobiel)', 140, 400, 10, 230)]
    + common(CARBON, (72, 128), (72, 128), (40, 96), (15, 17)),
    [{'type': 'tile', 'name': 'Tegel', 'settings': [{'type': 'image_picker', 'id': 'image', 'label': 'Foto'}, text('alt', 'Alt-tekst'),
                                                   rng('px', 'Uitsnede horizontaal', 0, 100, 1, 50, '%'), rng('py', 'Uitsnede verticaal', 0, 100, 1, 50, '%'),
                                                   text('title', 'Titel', 'Jouw logo op de sok', 'Nieuwe regel = regelafbreking', 'textarea'), text('text', 'Tekst (desktop)', kind='textarea'),
                                                   text('chips', 'Labels (desktop)', '', 'Komma tussen de labels, bijv. 35-38, 39-42'),
                                                   {'type': 'checkbox', 'id': 'big', 'label': 'Grote tegel', 'default': False},
                                                   text('btn_pre', 'Knop: voorwoord (alleen desktop)'), text('btn_label', 'Knop'), {'type': 'url', 'id': 'btn_link', 'label': 'Knoplink'}]}], 3)

# ---------------------------------------------------------------- 10 verkopen
S['to-10-verkopen'] = section('HÏ Team 10 · Verkopen', """
{%- render 'to-vars', s: s, id: section.id, h: 60 -%}
<section class="to to-zk{% if s.img_side == 'right' %} to-zk--rev{% endif %}{% if s.align == 'center' %} to-c{% endif %}"{% if s.anim %} data-anim{% endif %} id="verkopen" style="--to-pos-d: {{ s.pos_x }}% {{ s.pos_y }}%; --to-pos-m: {{ s.pos_x }}% {{ s.pos_y }}%; --to-zk-h: {{ s.min_h }}px;" aria-labelledby="to-z-{{ section.id }}">
  <div class="to-zk__img">{%- render 'to-img', image: s.image, alt: s.alt, sizes: '(min-width: 981px) 50vw, 100vw' -%}</div>
  <div class="to-zk__t to-rv">
    <h2 class="to-h2" id="to-z-{{ section.id }}">{{ s.heading | escape | replace: '[', '<span class="to-ac">' | replace: ']', '</span>' }}</h2>
    {%- if s.lead != blank -%}<p class="to-lead">{{ s.lead }}</p>{%- endif -%}
    {%- if section.blocks.size > 0 -%}
      <ul class="to-rt">
        {%- for block in section.blocks -%}<li {{ block.shopify_attributes }}>{%- render 'to-img', image: block.settings.image, alt: block.settings.alt, sizes: '140px' -%}<span>{{ block.settings.label }}</span></li>{%- endfor -%}
      </ul>
    {%- endif -%}
    {%- if s.btn_label != blank -%}<a class="to-pill{% if s.btn_style == 'light' %} to-pill--w{% endif %}" href="{{ s.btn_link }}">{{ s.btn_label }}""" + CHEV + """</a>{%- endif -%}
  </div>
</section>
""", [hd('Foto'), {'type': 'image_picker', 'id': 'image', 'label': 'Foto'}, text('alt', 'Alt-tekst', 'Voetballer in zwarte HÏ Grip gripsokken haalt uit naar de bal'),
      rng('pos_x', 'Uitsnede horizontaal', 0, 100, 1, 50, '%'), rng('pos_y', 'Uitsnede verticaal', 0, 100, 1, 40, '%'),
      {'type': 'select', 'id': 'img_side', 'label': 'Foto op desktop', 'default': 'left', 'options': [{'value': 'left', 'label': 'Links'}, {'value': 'right', 'label': 'Rechts'}]},
      rng('min_h', 'Minimale hoogte (desktop)', 320, 900, 10, 560),
      hd('Tekst'), text('heading', 'Kop', 'Zelf HÏ Grip [verkopen?]', 'Zet een woord tussen [ ] voor de accentkleur.'),
      text('lead', 'Intro', 'Sportwinkel, clubshop of sportschool? Zet HÏ Grip in je schap. Via HÏ Grip Zakelijk krijg je een eigen inkoopstaffel en een vast aanspreekpunt.', kind='textarea'),
      text('btn_label', 'Knop', 'Word verkooppunt'), {'type': 'url', 'id': 'btn_link', 'label': 'Knoplink'},
      {'type': 'select', 'id': 'btn_style', 'label': 'Knopstijl', 'default': 'dark', 'options': [{'value': 'dark', 'label': 'Zwart'}, {'value': 'light', 'label': 'Wit'}]}]
    + common(LIGHT, (40, 96), (40, 96), (34, 60), (15, 17)),
    [{'type': 'product', 'name': 'Producttegel', 'settings': [{'type': 'image_picker', 'id': 'image', 'label': 'Productfoto'}, text('alt', 'Alt-tekst'), text('label', 'Label', '2.0 zwart')]}], 4)

# ---------------------------------------------------------------- 11 faq
S['to-11-faq'] = section('HÏ Team 11 · FAQ', """
{%- render 'to-vars', s: s, id: section.id, h: 60 -%}
<section class="to to-faq{% if s.align == 'center' %} to-c{% endif %}"{% if s.anim %} data-anim{% endif %} id="faq" aria-labelledby="to-f-{{ section.id }}">
  <div class="to-wrap">
    <div class="to-faq__h to-rv">
      <h2 class="to-h2" id="to-f-{{ section.id }}">{{ s.heading | escape | replace: '[', '<span class="to-ac">' | replace: ']', '</span>' }}</h2>
      {%- if s.lead != blank -%}<div class="to-lead">{{ s.lead }}</div>{%- endif -%}
    </div>
    <div class="to-faq__l to-rv" style="--d:80ms">
      {%- for block in section.blocks -%}
        <details class="to-qa" {{ block.shopify_attributes }}><summary>{{ block.settings.question }}</summary><div class="to-qa__a">{{ block.settings.answer }}</div></details>
      {%- endfor -%}
    </div>
  </div>
  {%- if s.schema and section.blocks.size > 0 -%}
    <script type="application/ld+json">{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{%- for block in section.blocks -%}{"@type":"Question","name":{{ block.settings.question | json }},"acceptedAnswer":{"@type":"Answer","text":{{ block.settings.answer | strip_html | strip | json }}}}{%- unless forloop.last -%},{%- endunless -%}{%- endfor -%}]}</script>
  {%- endif -%}
</section>
""", [text('heading', 'Kop', 'Vragen over je [teamorder.]', 'Zet een woord tussen [ ] voor de accentkleur.'),
      {'type': 'richtext', 'id': 'lead', 'label': 'Intro', 'default': '<p>Staat je vraag er niet tussen? Mail ons via <a href="mailto:info@higrip.nl">info@higrip.nl</a>, je hoort binnen 1 werkdag van ons.</p>'},
      {'type': 'checkbox', 'id': 'schema', 'label': 'Vragen als FAQPage-data voor Google', 'default': True, 'info': 'Zet uit als dezelfde vragen al elders op deze pagina als FAQPage staan.'}]
    + common(ONYX, (72, 128), (72, 128), (34, 60), (15, 17)),
    [{'type': 'qa', 'name': 'Vraag', 'settings': [text('question', 'Vraag', 'Hoe werkt de staffelprijs?'), {'type': 'richtext', 'id': 'answer', 'label': 'Antwoord', 'default': '<p>Antwoord</p>'}]}], 20)


# ---------------------------------------------------------------- template
def blocks(items):
    order, out = [], {}
    for i, (typ, st) in enumerate(items, 1):
        k = f'{typ}_{i}'
        order.append(k)
        out[k] = {'type': typ, 'settings': st}
    return {'blocks': out, 'block_order': order}


TIERS = [(5, '4,00'), (10, '4,20'), (15, '4,45'), (20, '4,65'), (25, '4,90'), (30, '5,10'), (35, '5,35'), (40, '5,55'), (45, '5,80'), (50, '6,00')]
FAQ = [
    ('Hoe werkt de staffelprijs?', '<p>Alle paren in je order tellen samen. Vanaf 5 paar betaal je een teamprijs, en elke 5 paar extra gaat er weer een stukje af, tot 50 paar. De korting zie je direct in de winkelwagen en staat bij het afrekenen op je bestelling.</p>'),
    ('Wij hebben meer dan 50 paar nodig.', '<p>Dan is HÏ Grip Zakelijk de beste route. Je krijgt een eigen clubprijs en een vast aanspreekpunt. <a href="/pages/zakelijk">Naar HÏ Grip Zakelijk</a></p>'),
    ('Kan ik maten, kleuren en sokken combineren?', '<p>Ja. Zet 2.0 zwart, 2.0 wit en 1.0 wit in één bestelling, in elke maat die je team nodig heeft. Alles telt mee voor dezelfde staffel.</p>'),
    ('Welke maten zijn er?', '<p>De 2.0 komt in 35-38, 39-42 en 43-47. De 1.0 komt in 34-39 en 40-46.</p>'),
    ('Wanneer heb ik de sokken?', '<p>We verzenden binnen 1 werkdag. Een teamorder verzenden we altijd gratis.</p>'),
    ('Past een maat niet?', '<p>Je hebt 30 dagen om het retour te sturen.</p>'),
    ('Mag ik gripsokken dragen in een wedstrijd?', '<p>In het amateurvoetbal kijkt de scheidsrechter vooral naar de kleur van je kousen boven de schoen. Met een sleeve in clubkleur over je gripsok zit je bij de meeste competities goed. Twijfel je, check dan het reglement van je bond of club.</p>'),
    ('Kan ons clublogo op de sok?', '<p>Ja, vanaf 150 stuks via HÏ Grip Zakelijk. Je betaalt dan € 8,70 tot € 6,30 per stuk, afhankelijk van het aantal.</p>'),
    ('Hoe was ik gripsokken zodat de grip blijft?', '<p>Binnenstebuiten, koud of lauw, en niet in de droger.</p>'),
]

T = {'sections': {}, 'order': []}


def add(key, typ, settings, b=None):
    T['sections'][key] = dict({'type': typ, 'settings': settings}, **(b or {}))
    T['order'].append(key)


add('hero', 'to-01-hero', {'image': IMG + 'to-con-0277.webp'})
add('service', 'to-02-service', {}, blocks([('usp', {'icon': 'truck', 'title': 'Gratis', 'text': 'verzending'}),
                                            ('usp', {'icon': 'clock', 'title': '1 werkdag', 'text': 'tot verzending'}),
                                            ('usp', {'icon': 'return', 'title': '30 dagen', 'text': 'retour'})]))
add('samensteller', 'to-03-samensteller', {'zak_link': 'shopify://pages/zakelijk'}, blocks(
    [('sok', {'name': '2.0', 'label': 'Zwart', 'swatch': '#0A0A0A', 'product': 'performance-gripsokken-2-0-zwart'}),
     ('sok', {'name': '2.0', 'label': 'Wit', 'swatch': '#FFFFFF', 'product': 'performance-gripsokken-2-0-wit'}),
     ('sok', {'name': '1.0', 'label': 'Wit', 'swatch': '#FFFFFF', 'product': 'performance-gripsokken'})]
    + [('staffel', {'min': m, 'off': o, 'code': f'TEAM{m}'}) for m, o in TIERS]))
add('stappen', 'to-04-stappen', {}, blocks([('step', {'title': 'Stel samen', 'text': 'Kies je sok en kleur, en per maat het aantal paar.'}),
                                           ('step', {'title': 'Reken af of vraag aan', 'text': 'Betaal direct, of laat ons eerst meekijken met je order.'}),
                                           ('step', {'title': 'Wij verzenden', 'text': 'Binnen 1 werkdag onderweg, zonder verzendkosten.'}),
                                           ('step', {'title': 'Iedereen presteert', 'text': 'Niemand glijdt meer weg. Past een maat niet? 30 dagen retour.'})]))
add('sok', 'to-05-sok', {'image': IMG + 'to-p20-wit-site.webp'}, blocks([
    ('point', {'title': 'Compressie', 'text': '15-20 mmHg steun rond je voet', 'side': 'l', 'x': 46, 'y': 22}),
    ('point', {'title': 'Coolmax', 'text': '30%, voert vocht direct af', 'side': 'r', 'x': 56, 'y': 38}),
    ('point', {'title': 'Ademend', 'text': 'Open structuur bovenop je voet', 'side': 'l', 'x': 42, 'y': 56}),
    ('point', {'title': 'Versterkte hiel', 'text': 'Extra dikte onder je hiel', 'side': 'r', 'x': 62, 'y': 66}),
    ('point', {'title': 'Naadloos', 'text': 'Geen stiksels bij je tenen', 'side': 'l', 'x': 36, 'y': 88}),
    ('point', {'title': 'Maximale grip', 'text': 'Siliconen zones onder de zool', 'side': 'r', 'x': 64, 'y': 86})]))
add('op_het_veld', 'to-06-op-het-veld', {}, blocks([
    ('photo', {'image': IMG + 'to-con-0168.webp', 'alt': 'Clublogo van Concordia Delft op een zwart trainingsshirt', 'cols': 3, 'rows': 3}),
    ('photo', {'image': IMG + 'to-con-0268.webp', 'alt': 'Spelers met ballen op het veld onder de lichtmasten', 'cols': 6, 'rows': 3, 'ls': True}),
    ('photo', {'image': IMG + 'to-con-0220.webp', 'alt': 'Witte HÏ Grip gripsokken in voetbalschoenen op kunstgras', 'cols': 3, 'rows': 3}),
    ('photo', {'image': IMG + 'to-con-0174.webp', 'alt': 'Team van Concordia loopt in tijdens de avondtraining', 'cols': 4, 'rows': 3}),
    ('photo', {'image': IMG + 'to-con-0210.webp', 'alt': 'Benen van spelers tussen pionnen tijdens de warming-up', 'cols': 4, 'rows': 3}),
    ('photo', {'image': IMG + 'to-con-0226.webp', 'alt': 'Close-up van witte HÏ Grip sokken bij een speler', 'cols': 4, 'rows': 3})]))
add('trustpilot', 'to-07-trustpilot', {'image': IMG + 'to-con-0271.webp', 'link': 'https://nl.trustpilot.com/review/higrip.nl'})
add('logos', 'to-08-logos', {}, blocks([('logo', {'image': IMG + f'hp-logo-{f}.webp', 'alt': a}) for f, a in
                                        [('concordia-360', 'Concordia'), ('spirit-252', 'V.V. Spirit'), ('sport2000-240', 'Sport 2000'),
                                         ('myhealthclub-600', 'MyHealth Club'), ('syth-512', 'Say Yes To Health'), ('hr-500', 'Hogeschool Rotterdam')]]))
add('voor_clubs', 'to-09-voor-clubs', {}, blocks([
    ('tile', {'image': IMG + 'hp-b2b-club-spirit-1000.webp', 'alt': 'Witte HÏ Grip gripsokken onder gele clubkousen van V.V. Spirit', 'py': 62,
              'title': 'Jouw logo op de sok', 'text': 'Eigen logo en kleuren vanaf 150 stuks, van € 8,70 tot € 6,30 per stuk.'}),
    ('tile', {'image': IMG + 'to-con-0220.webp', 'alt': 'Witte HÏ Grip gripsokken in voetbalschoenen op kunstgras', 'py': 70,
              'title': 'Elke speler zijn maat', 'text': 'Je verdeelt de bestelling per speler, zwart of wit.', 'chips': '35-38, 39-42, 43-47'}),
    ('tile', {'image': IMG + 'to-con-0171.webp', 'alt': 'Het team van Concordia samen op het veld tijdens de avondtraining', 'py': 66, 'big': True,
              'title': 'Van jeugd tot\neerste elftal.', 'text': 'Eén bestelling en één vast aanspreekpunt bij HÏ Grip Zakelijk.',
              'btn_pre': 'Naar HÏ Grip', 'btn_label': 'Zakelijk', 'btn_link': 'shopify://pages/zakelijk'})]))
add('verkopen', 'to-10-verkopen', {'image': IMG + 'to-b2b-voetbal-1142.webp', 'btn_link': 'shopify://pages/zakelijk'}, blocks([
    ('product', {'image': IMG + 'to-p20-zwart-voor-900.webp', 'alt': 'Performance Grip Socks 2.0 in zwart', 'label': '2.0 zwart'}),
    ('product', {'image': IMG + 'to-p20-wit-voor-900.webp', 'alt': 'Performance Grip Socks 2.0 in wit', 'label': '2.0 wit'}),
    ('product', {'image': IMG + 'to-p10-zij-900.webp', 'alt': 'Performance Grip Socks 1.0 in wit', 'label': '1.0 wit'})]))
add('faq', 'to-11-faq', {}, blocks([('qa', {'question': q, 'answer': a}) for q, a in FAQ]))

if __name__ == '__main__':
    os.makedirs(os.path.join(THEME, 'sections'), exist_ok=True)
    os.makedirs(os.path.join(THEME, 'templates'), exist_ok=True)
    for name, src in S.items():
        with open(os.path.join(THEME, 'sections', name + '.liquid'), 'w', encoding='utf-8', newline='\n') as f:
            f.write(src)
    with open(os.path.join(THEME, 'templates', 'page.teamorder.json'), 'w', encoding='utf-8', newline='\n') as f:
        json.dump(T, f, ensure_ascii=False, indent=2)
    print(len(S), 'secties + templates/page.teamorder.json')
