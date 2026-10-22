/* 12 INSPIRATIE · scroll-gekoppeld, alleen terwijl de sectie in beeld is.
   p loopt van 1 (sectie komt onder binnen) via 0 (midden) naar -1 (verlaat boven).
   - masker: regel 1 komt omhoog als de kop het onderste derde in schuift, regel 2 iets later
   - eerst gecentreerd en leesbaar; vanaf ~35% van de doorloop schuiven ze uit elkaar tot ±1,6·A (A = 18% / 12% van de breedte)
   - pill: --hp-12-k van 0 naar 1 terwijl de regels uit elkaar gaan (chevron loopt mee) */
(function () {
  'use strict';
  var root = document.querySelector('[data-hp="12"]');
  if (!root || window.hpReduced()) return;
  var title = root.querySelector('.hp-12-title');
  var active = false;
  function clamp(v) { return Math.max(0, Math.min(1, v)); }
  function out(t) { return 1 - Math.pow(1 - t, 3); }
  function update() {
    if (!active) return;
    var r = root.getBoundingClientRect(), vh = window.innerHeight, vw = window.innerWidth;
    var p = Math.max(-1, Math.min(1, (r.top + r.height / 2 - vh / 2) / ((vh + r.height) / 2)));
    var A = vw * (vw >= 769 ? 0.18 : 0.12), s = clamp((1 - p) / 2), k = out(clamp((s - 0.35) / 0.65));
    var t = vh - title.getBoundingClientRect().top;
    root.style.setProperty('--hp-12-r1', ((1 - out(clamp((t - vh * 0.04) / (vh * 0.3)))) * 110).toFixed(2) + '%');
    root.style.setProperty('--hp-12-r2', ((1 - out(clamp((t - vh * 0.14) / (vh * 0.3)))) * 110).toFixed(2) + '%');
    root.style.setProperty('--hp-12-x1', (-A * 1.6 * k).toFixed(1) + 'px');
    root.style.setProperty('--hp-12-x2', (A * 1.6 * k).toFixed(1) + 'px');
    root.style.setProperty('--hp-12-k', k.toFixed(3));
  }
  window.hpInView(root, function () { active = true; update(); }, function () { active = false; });
  window.hpOnScroll(update);
  window.hpOnResize(update);
})();
