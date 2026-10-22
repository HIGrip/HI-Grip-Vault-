/* 12 INSPIRATIE · scroll-gekoppeld, alleen terwijl de sectie in beeld is.
   1.12: het beeld staat sticky in een baan van 260svh; q loopt van 0 (vast) naar 1 (los).
   - masker: regel 1 komt omhoog als de kop het onderste derde in schuift, regel 2 iets later
   - eerst gecentreerd en leesbaar; vanaf q 0,12 schuiven ze rustig uit elkaar tot ±1,25·A (A = 18% / 12% van de breedte)
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
    /* q: 0 zodra het beeld vastzit, 1 als het loslaat. Eerst rust (tot 0,12), dan uit elkaar tot 0,9. */
    var q = clamp(-r.top / Math.max(1, r.height - vh));
    var A = vw * (vw >= 769 ? 0.18 : 0.12), k = inout(clamp((q - 0.12) / 0.78));
    var t = vh - title.getBoundingClientRect().top;
    root.style.setProperty('--hp-12-r1', ((1 - out(clamp((t - vh * 0.04) / (vh * 0.3)))) * 110).toFixed(2) + '%');
    root.style.setProperty('--hp-12-r2', ((1 - out(clamp((t - vh * 0.14) / (vh * 0.3)))) * 110).toFixed(2) + '%');
    root.style.setProperty('--hp-12-x1', (-A * 1.25 * k).toFixed(1) + 'px');
    root.style.setProperty('--hp-12-x2', (A * 1.25 * k).toFixed(1) + 'px');
    root.style.setProperty('--hp-12-k', k.toFixed(3));
  }
  window.hpInView(root, function () { active = true; update(); }, function () { active = false; });
  window.hpOnScroll(update);
  window.hpOnResize(update);
})();
