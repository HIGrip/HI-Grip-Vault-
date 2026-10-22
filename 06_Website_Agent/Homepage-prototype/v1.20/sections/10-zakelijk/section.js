/* 10 ZAKELIJK · de cijfers (150 en 6 paar) tellen één keer op als de kaarten in beeld komen. Zonder JS staat het eindgetal er al. */
(function () {
  'use strict';
  var root = document.querySelector('[data-hp="10"]');
  if (!root || window.hpReduced()) return;

  var stats = root.querySelectorAll('[data-count]');
  var dur = (parseFloat(getComputedStyle(root).getPropertyValue('--hp-dur-3')) || 900) * 1.6;
  var done = false;

  function run() {
    if (done) return;
    done = true;
    var t0 = performance.now();
    Array.prototype.forEach.call(stats, function (el) {
      var end = parseInt(el.dataset.count, 10), tail = el.textContent.replace(/^\d+/, '');
      (function step(now) {
        var p = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.max(1, Math.round(end * e)) + tail;
        if (p < 1) requestAnimationFrame(step);
      })(t0);
    });
  }
  window.hpInView(root.querySelector('.hp-10-cards'), run, null, { threshold: [0.3] });
})();
