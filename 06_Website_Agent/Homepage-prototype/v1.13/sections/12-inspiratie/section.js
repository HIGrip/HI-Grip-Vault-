/* 12 INSPIRATIE · scroll-gekoppeld, alleen terwijl de sectie in beeld is.
   1.13: geen sticky meer (de pagina mag niet vertragen); s loopt van 0 (komt binnen) naar 1 (verdwijnt boven).
   - masker: regel 1 komt omhoog als de kop het onderste derde in schuift, regel 2 iets later
   - eerst gecentreerd en leesbaar; vanaf het midden van het beeld schuiven ze rustig uit elkaar tot ±0,9·A (A = 18% / 12% van de breedte)
   - pill: --hp-12-k van 0 naar 1 terwijl de regels uit elkaar gaan (chevron loopt mee) */
(function () {
  'use strict';
  var root = document.querySelector('[data-hp="12"]');
  if (!root || window.hpReduced()) return;
  var title = root.querySelector('.hp-12-title');
  var active = false;
  function clamp(v) { return Math.max(0, Math.min(1, v)); }
  function out(t) { return 1 - Math.pow(1 - t, 3); }
  function inout(t) { return t * t * (3 - 2 * t); }
  function update() {
    if (!active) return;
    var r = root.getBoundingClientRect(), vh = window.innerHeight, vw = window.innerWidth;
    /* s: 0 als de sectie onderin binnenkomt, 0,5 midden in beeld, 1 als hij boven verdwijnt. Geen vastzetten: de pagina
       scrollt normaal door. De regels staan stil tot ze midden in beeld staan en schuiven daarna over de rest van de
       doorloop rustig uit elkaar (smoothstep, ±0,9·A), zo'n vijfde van de scrollsnelheid. */
    var s = clamp((vh - r.top) / (vh + r.height));
    var A = vw * (vw >= 769 ? 0.18 : 0.12), k = inout(clamp((s - 0.45) / 0.55));
    var t = vh - title.getBoundingClientRect().top;
    root.style.setProperty('--hp-12-r1', ((1 - out(clamp((t - vh * 0.04) / (vh * 0.3)))) * 110).toFixed(2) + '%');
    root.style.setProperty('--hp-12-r2', ((1 - out(clamp((t - vh * 0.14) / (vh * 0.3)))) * 110).toFixed(2) + '%');
    root.style.setProperty('--hp-12-x1', (-A * 0.9 * k).toFixed(1) + 'px');
    root.style.setProperty('--hp-12-x2', (A * 0.9 * k).toFixed(1) + 'px');
    root.style.setProperty('--hp-12-k', k.toFixed(3));
  }
  window.hpInView(root, function () { active = true; update(); }, function () { active = false; });
  window.hpOnScroll(update);
  window.hpOnResize(update);
})();
