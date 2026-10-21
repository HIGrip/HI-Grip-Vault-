/* 04 SOCIAL PROOF · horizontale baan. De sectie krijgt de hoogte die nodig is om de hele baan voorbij te laten komen;
   verticale scroll wordt horizontale verschuiving. Klik of tik op een foto opent hem groot in de lightbox. */
(function () {
  'use strict';
  var root = document.querySelector('[data-hp="04"]');
  if (!root) return;

  var track = root.querySelector('.hp-04-track');
  var btns = Array.prototype.slice.call(root.querySelectorAll('.hp-04-btn'));
  var items = btns.map(function (b) {
    var img = b.querySelector('img');
    return { src: img.getAttribute('src'), srcset: img.getAttribute('srcset'), alt: img.alt, caption: b.parentNode.querySelector('.hp-04-cap').textContent };
  });
  btns.forEach(function (b, i) {
    b.addEventListener('click', function () { window.hpLightbox.open(items, i, b, { close: 'Sluiten', prev: 'Vorige', next: 'Volgende' }); });
  });

  if (window.hpReduced() || !document.documentElement.classList.contains('hp-motion')) return;
  root.classList.add('is-pinned');
  var dist = 0, on = false;

  function measure() {
    dist = Math.max(0, track.scrollWidth - window.innerWidth);
    root.style.height = (window.innerHeight + dist) + 'px';
    update();
  }
  function update() {
    var r = root.getBoundingClientRect();
    var t = dist ? Math.min(1, Math.max(0, -r.top / dist)) : 0;
    root.style.setProperty('--hp-04-t', t.toFixed(4));
    root.style.setProperty('--hp-04-x', (-t * dist).toFixed(1) + 'px');
  }
  window.hpInView(root, function () { on = true; update(); }, function () { on = false; }, { rootMargin: '50% 0px' });
  window.hpOnScroll(function () { if (on) update(); });
  window.hpOnResize(measure);
  measure();
  Array.prototype.forEach.call(track.querySelectorAll('img'), function (img) { if (!img.complete) img.addEventListener('load', measure, { once: true }); });
})();
