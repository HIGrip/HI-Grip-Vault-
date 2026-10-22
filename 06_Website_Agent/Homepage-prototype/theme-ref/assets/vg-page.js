function mvAsset(n){return (window.MV_ASSETS||{})[n]||('img/'+n);}

function vgInit() {
  var d = document;
  
  var rm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  function all(s) { return [].slice.call(d.querySelectorAll(s)); }

  // fade-up en meter bij in beeld komen
  var obs = all('.vg-rv, [data-meter]');
  if (rm || !('IntersectionObserver' in window)) obs.forEach(function (e) { e.classList.add('vg-in'); });
  else {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('vg-in'); io.unobserve(e.target); } }); }, { threshold: 0.2 });
    obs.forEach(function (e) { if (e.getBoundingClientRect().top < innerHeight * .9) e.classList.add('vg-in'); else io.observe(e); });
  }

  // kleurwissel 2.0: swatches zijn echte links; beeld en alle 2.0-links wisselen mee
  var imgs = { zwart: mvAsset('sok-20-zwart.webp'), wit: mvAsset('sok-20-wit.webp') };
  new Image().src = imgs.wit;
  var img = d.querySelector('[data-img-20]'), img2 = d.querySelector('[data-img-20b]'), links = all('[data-link-20]'), sws = all('.vg-sw__a');
  sws.forEach(function (a) {
    a.addEventListener('click', function (ev) {
      ev.preventDefault();
      if (a.getAttribute('aria-current') === 'true') return;
      var c = a.getAttribute('data-c');
      sws.forEach(function (x) { x.setAttribute('aria-current', x === a ? 'true' : 'false'); });
      links.forEach(function (l) { l.href = a.href; });
      img.classList.add('vg-swap');
      setTimeout(function () { img.src = imgs[c]; img2.src = imgs[c]; img.alt = 'Performance Gripsokken 2.0 in ' + c + ', zijaanzicht met grippatroon'; img.classList.remove('vg-swap'); }, rm ? 0 : 200);
    });
  });

  // techniek: callout en punt op de sok lichten samen op
  var cos = all('.vg-co'), pts = all('.vg-pt');
  function on(p) { cos.concat(pts).forEach(function (e) { e.classList.toggle('vg-on', e.getAttribute('data-p') === p); }); }
  cos.forEach(function (c) { ['mouseenter', 'focus', 'click'].forEach(function (t) { c.addEventListener(t, function () { on(c.getAttribute('data-p')); }); }); });
  var tg = d.querySelector('.vg-tech__grid'); if (tg) tg.addEventListener('mouseleave', function () { on(null); });

  // keuzehulp
  var R = {
    '10': { n: '1.0', why: 'Betrouwbare grip voor je trainingen, voor de scherpste prijs.', img: mvAsset('sok-10.webp'), href: 'https://www.higrip.nl/products/performance-gripsokken', cta: 'Shop 1.0' },
    '20': { n: '2.0', why: 'Je vraagt veel van je voeten. De 2.0 geeft grip plus compressie, Coolmax® en een naadloze, versterkte afwerking.', img: mvAsset('sok-20-zwart.webp'), href: 'https://www.higrip.nl/products/performance-gripsokken-2-0-zwart', cta: 'Shop 2.0' }
  };
  var res = d.querySelector('[data-res]'), cur = '10';
  function pick() {
    var vaak = d.querySelector('input[name=vaak]:checked').value, voor = d.querySelector('input[name=voor]:checked').value;
    var k = (vaak === 'hoog' || voor === 'wedstrijd') ? '20' : '10', r = R[k];
    if (k === cur) return; cur = k;
    d.querySelector('[data-res-name]').textContent = r.n;
    d.querySelector('[data-res-why]').textContent = r.why;
    d.querySelector('[data-res-img]').src = r.img;
    d.querySelector('[data-res-link]').href = r.href;
    d.querySelector('[data-res-cta]').textContent = r.cta;
    if (!rm) { res.classList.remove('vg-swap'); void res.offsetWidth; res.classList.add('vg-swap'); }
  }
  all('.vg-q input').forEach(function (i) { i.addEventListener('change', pick); });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', vgInit); else vgInit();
document.addEventListener('shopify:section:load', vgInit);
