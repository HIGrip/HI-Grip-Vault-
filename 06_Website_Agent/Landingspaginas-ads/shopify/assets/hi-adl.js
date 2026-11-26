// Ad-landingspagina's: kiest de ad-variant via ?ad=, schakelt kleur en galerij, en toont de sticky balk op mobiel.
// Winkelwagen en bundelkorting lopen via hi-bundle.js en Horizon's product-form-component.
class AdlBuy extends HTMLElement {
  connectedCallback() {
    const code = (new URLSearchParams(location.search).get('ad') || '').padStart(2, '0');
    const ads = [...this.querySelectorAll('.adl-ad')];
    const ad = ads.find((el) => el.dataset.ad === code) || ads[0];
    this.adCode = ad ? ad.dataset.ad : '';

    this.querySelectorAll('[data-ad]').forEach((el) => {
      el.hidden = el.dataset.ad !== this.adCode;
    });
    this.note = this.querySelector(`.adl-note[data-ad="${this.adCode}"]`);
    if (this.note) setTimeout(() => this.note.classList.add('is-ticked'), 1400);

    this.querySelectorAll('.adl-gal__set').forEach((set) => this.orderSet(set));
    this.thumbs = this.querySelector('.adl-gal__thumbs');
    this.thumbs?.addEventListener('click', (event) => {
      const button = event.target.closest('button');
      if (button) this.showSlide(Number(button.dataset.index));
    });

    this.querySelectorAll('.adl-sw input').forEach((input) => {
      input.addEventListener('change', () => this.setColor(input.value));
    });
    const checked = this.querySelector('.adl-sw input:checked');
    this.setColor(checked ? checked.value : 'wit');

    this.fillShipDay();
    this.initSticky();
  }

  // De ad-foto komt als derde beeld, zodat een standaard productfoto altijd eerst staat
  orderSet(set) {
    const slides = [...set.querySelectorAll('.adl-gal__slide')];
    let lead = null;
    slides.forEach((slide) => {
      if (!slide.dataset.lead) return;
      if (slide.dataset.lead === this.adCode && !lead) lead = slide;
      else slide.remove();
    });
    if (!lead) return;
    // dezelfde foto niet twee keer tonen
    set.querySelectorAll('.adl-gal__slide:not([data-lead])').forEach((slide) => {
      if (slide.dataset.thumb === lead.dataset.thumb) slide.remove();
    });
    const rest = [...set.querySelectorAll('.adl-gal__slide')].filter((slide) => slide !== lead);
    const order = [rest[0], rest[1], lead, ...rest.slice(2)].filter(Boolean).slice(0, 4);
    rest.forEach((slide) => {
      if (!order.includes(slide)) slide.remove();
    });
    order.forEach((slide) => set.append(slide));
  }

  setColor(color) {
    this.color = color;
    this.querySelectorAll('.adl-gal__set, .adl-buy__panel').forEach((el) => {
      el.hidden = el.dataset.color !== color;
    });
    const name = this.querySelector('[data-color-name]');
    const input = this.querySelector(`.adl-sw input[value="${color}"]`);
    if (name && input) name.textContent = input.dataset.label;

    const set = this.querySelector(`.adl-gal__set[data-color="${color}"]`);
    this.slides = set ? [...set.querySelectorAll('.adl-gal__slide')] : [];
    if (this.thumbs) {
      this.thumbs.replaceChildren(
        ...this.slides.map((slide, index) => {
          const img = slide.querySelector('img');
          const button = document.createElement('button');
          button.type = 'button';
          button.dataset.index = index;
          button.dataset.fit = slide.dataset.fit;
          button.setAttribute('aria-label', `Foto ${index + 1}: ${img ? img.alt : ''}`);
          button.innerHTML = `<img src="${slide.dataset.thumb}" alt="" loading="lazy" width="72" height="72">`;
          return button;
        })
      );
    }
    this.showSlide(0);
  }

  showSlide(index) {
    this.slides.forEach((slide, i) => {
      slide.hidden = i !== index;
      if (i === index) slide.querySelector('img')?.setAttribute('loading', 'eager');
    });
    this.thumbs?.querySelectorAll('button').forEach((button, i) => {
      button.setAttribute('aria-pressed', String(i === index));
    });
    if (this.note) this.note.hidden = index !== 0;
  }

  // Binnen 1 werkdag verzonden: in het weekend gaat het pakket dinsdag de deur uit
  fillShipDay() {
    const target = this.querySelector('[data-ship-day]');
    if (!target) return;
    const days = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
    const now = new Date();
    const weekday = now.getDay();
    const add = weekday === 5 || weekday === 6 ? 3 : weekday === 0 ? 2 : 1;
    now.setDate(now.getDate() + add);
    target.textContent = days[now.getDay()];
  }

  initSticky() {
    const sticky = this.querySelector('.adl-sticky');
    const form = this.querySelector('.adl-buy__form');
    if (!sticky || !form) return;
    const toggle = (show) => {
      sticky.classList.toggle('is-shown', show);
      sticky.setAttribute('aria-hidden', String(!show));
      sticky.querySelector('a')?.setAttribute('tabindex', show ? '0' : '-1');
    };
    new IntersectionObserver(([entry]) => toggle(!entry.isIntersecting)).observe(form);
  }
}

// Actie: eigen aftelling (zelfde notatie als hg-pd-timer.js) en verbergen zodra de eindtijd voorbij is
const adlDeals = [...document.querySelectorAll('[data-deal-end]')];
const adlPad = (n) => String(n).padStart(2, '0');
const adlTick = () => {
  adlDeals.forEach((el) => {
    const left = Number(el.dataset.dealEnd) - Date.now();
    if (left <= 0) {
      el.hidden = true;
      return;
    }
    const s = Math.floor(left / 1000);
    const text = `${Math.floor(s / 86400)}d ${adlPad(Math.floor((s % 86400) / 3600))}u ${adlPad(Math.floor((s % 3600) / 60))}m ${adlPad(s % 60)}s`;
    el.querySelectorAll('[data-pd-cd]').forEach((cd) => {
      cd.textContent = text;
    });
  });
};
if (adlDeals.length) {
  adlTick();
  setInterval(adlTick, 1000);
}

if (!customElements.get('adl-buy')) customElements.define('adl-buy', AdlBuy);
