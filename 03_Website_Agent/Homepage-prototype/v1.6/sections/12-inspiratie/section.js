/* 12 INSPIRATIE · de lopende regels krijgen een duw van de scroll: verschuiving met de positie (--hp-12-o) en een helling
   met de scrollsnelheid (--hp-12-k), die per frame terugveert naar 0. Buiten beeld staat de lus stil. */
(function () {
  'use strict';
  var root = document.querySelector('[data-hp="12"]');
  if (!root || window.hpReduced()) return;

  var on = false, lastY = window.scrollY, k = 0, raf = 0;
  function frame() {
    var y = window.scrollY, v = y - lastY;
    lastY = y;
    k += (Math.max(-12, Math.min(12, v * 0.35)) - k) * 0.18;
    var r = root.getBoundingClientRect();
    root.style.setProperty('--hp-12-o', ((window.innerHeight - r.top) * 0.35).toFixed(1));
    root.style.setProperty('--hp-12-k', k.toFixed(2));
    raf = on ? requestAnimationFrame(frame) : 0;
  }
  window.hpInView(root, function () { on = true; root.classList.remove('is-off'); if (!raf) raf = requestAnimationFrame(frame); }, function () { on = false; root.classList.add('is-off'); });
})();
