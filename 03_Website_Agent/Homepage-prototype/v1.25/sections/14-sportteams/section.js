/* 14 SPORTTEAMS · de spelers staan verspringend en schuiven tijdens het scrollen naar één lijn.
   Posities worden alleen bij resize gemeten; per frame alleen transform. Reduced motion: de line-up staat meteen recht. */
(function () {
  'use strict';
  var root = document.querySelector('[data-hp="14"]');
  if (!root || window.hpReduced()) return;

  var stage = root.querySelector('.hp-14-stage');
  var players = Array.prototype.slice.call(root.querySelectorAll('.hp-14-player'));
  var offs = players.map(function (p) { return parseFloat(p.style.getPropertyValue('--o')) || 0; });
  var top = 0, h = 0, vh = 0, k = 1, last = -1;

  function measure() {
    var r = stage.getBoundingClientRect();
    top = r.top + window.scrollY;
    h = r.height;
    vh = window.innerHeight;
    k = window.innerWidth < 900 ? 0.5 : 1;
    last = -1;
    update();
  }

  function update() {
    // 0 als de line-up onderaan binnenkomt, 1 als het midden op 55% van het scherm staat
    var mid = top + h / 2 - window.scrollY;
    var t = Math.min(1, Math.max(0, (vh + h / 2 - mid) / (vh * 0.45 + h / 2)));
    var p = t * t * (3 - 2 * t);
    if (Math.abs(p - last) < 0.002) return;
    last = p;
    for (var i = 0; i < players.length; i++) {
      players[i].style.transform = 'translate3d(0,' + (offs[i] * k * (1 - p)).toFixed(1) + 'px,0)';
    }
  }

  window.hpOnResize(measure);
  window.hpOnScroll(update);
  measure();
})();
