/* 02 PRODUCT (1.2) · tik wisselt naar het sfeerbeeld, staaltjes wisselen kleur + link,
   en de kaarten schuiven scroll-gekoppeld tegen elkaar in (--hp-02-q: 1 = schuin en verschoven, 0 = rust). */
(function () {
  'use strict';
  var root = document.querySelector('[data-hp="02"]');
  if (!root) return;
  var cards = Array.prototype.slice.call(root.querySelectorAll('[data-hp-02-card]'));

  cards.forEach(function (card) {
    var media = card.querySelector('.hp-02-media');
    media.addEventListener('click', function () {
      media.setAttribute('aria-pressed', String(media.getAttribute('aria-pressed') !== 'true'));
    });

    var swatches = card.querySelectorAll('.hp-02-swatch');
    if (!swatches.length) return;
    var cta = card.querySelector('[data-hp-02-cta]');
    var prods = card.querySelectorAll('.hp-02-media__prod');
    Array.prototype.forEach.call(swatches, function (sw) {
      sw.addEventListener('click', function () {
        var color = sw.dataset.color;
        card.dataset.color = color;
        Array.prototype.forEach.call(swatches, function (s) { s.setAttribute('aria-pressed', String(s === sw)); });
        Array.prototype.forEach.call(prods, function (img) {
          img.setAttribute('aria-hidden', String(!img.classList.contains('hp-02-media__prod--' + color)));
        });
        cta.href = sw.dataset.href;
        media.setAttribute('aria-pressed', 'false');
      });
    });
  });

  /* Scroll: elke kaart heeft zijn eigen voortgang; in rust (q = 0) staan ze recht naast elkaar. */
  if (!document.documentElement.classList.contains('hp-motion')) return;
  var list = root.querySelector('[data-hp-02-list]');
  var active = false;
  function update() {
    if (!active) return;
    var vh = window.innerHeight;
    var listTop = list.getBoundingClientRect().top;
    cards.forEach(function (card) {
      /* layoutpositie (offsetTop) in plaats van de getransformeerde rect, zodat de beweging zichzelf niet meet */
      var top = listTop + card.offsetTop - list.offsetTop;
      var p = Math.min(1, Math.max(0, (vh - top) / (vh * 0.5)));
      var q = 1 - p * p * (3 - 2 * p);
      card.style.setProperty('--hp-02-q', q.toFixed(4));
    });
  }
  window.hpInView(root, function () { active = true; update(); }, function () { active = false; }, { rootMargin: '20% 0px' });
  window.hpOnScroll(update);
  window.hpOnResize(update);
})();
