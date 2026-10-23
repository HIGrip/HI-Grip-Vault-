/* 14 SPORTTEAMS · de opstelling vult zich één keer als hij in beeld komt; de teller loopt mee naar 16/16. Zonder JS of met reduced motion staat alles al vol. */
(function () {
  'use strict';
  var root = document.querySelector('[data-hp="14"]');
  if (!root || window.hpReduced()) return;

  var count = root.querySelector('.hp-14-sheet__count');
  var n = root.querySelectorAll('.hp-14-dot').length;
  var cs = getComputedStyle(root);
  var step = parseFloat(cs.getPropertyValue('--hp-dur-1')) || 160;
  var land = (parseFloat(cs.getPropertyValue('--hp-dur-2')) || 480) * 0.5;
  var done = false;

  count.textContent = '0/' + n;

  function run() {
    if (done) return;
    done = true;
    root.classList.add('is-on');
    for (var i = 0; i < n; i++) {
      (function (k) {
        setTimeout(function () { count.textContent = (k + 1) + '/' + n; }, step * k + land);
      })(i);
    }
  }
  window.hpInView(root.querySelector('.hp-14-sheet'), run, null, { threshold: [0.4] });
})();
