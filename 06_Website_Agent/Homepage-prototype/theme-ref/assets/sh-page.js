function shInit() {
  var d = document;
  var rm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var img = d.querySelector('[data-img-20]');
  if (!img) return;
  var imgs = { zwart: img.getAttribute('data-src-zwart') || img.src, wit: img.getAttribute('data-src-wit') };
  if (imgs.wit) new Image().src = imgs.wit;
  var lbl = d.querySelector('[data-sw-lbl]');
  var links = [d.querySelector('[data-cta-20]'), d.querySelector('[data-name-20]'), d.querySelector('[data-media-20]')];
  var sws = [].slice.call(d.querySelectorAll('.sh-sw__a'));
  sws.forEach(function (a) {
    if (a.getAttribute('data-bound')) return;
    a.setAttribute('data-bound', '1');
    a.addEventListener('click', function (ev) {
      ev.preventDefault();
      if (a.getAttribute('aria-current') === 'true') return;
      var c = a.getAttribute('data-c');
      sws.forEach(function (x) { x.setAttribute('aria-current', x === a ? 'true' : 'false'); });
      links.forEach(function (l) { if (l) l.href = a.href; });
      if (lbl) lbl.textContent = a.getAttribute('data-label') || c;
      img.classList.add('sh-swap');
      setTimeout(function () {
        if (imgs[c]) img.src = imgs[c];
        img.alt = img.getAttribute('data-alt-' + c) || img.alt;
        img.classList.remove('sh-swap');
      }, rm ? 0 : 200);
    });
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', shInit); else shInit();
document.addEventListener('shopify:section:load', shInit);
