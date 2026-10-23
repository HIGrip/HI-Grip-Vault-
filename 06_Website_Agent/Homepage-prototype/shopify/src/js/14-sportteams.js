/* 14 SPORTTEAMS · het clubbeeld schuift licht mee met de scroll (alleen transform, positie gemeten bij resize).
   Reduced motion: de foto staat stil. */
(function () {
  'use strict';
  var root = document.querySelector('[data-hp="14"]');
  if (!root) return;
  window.hpReveal(root.querySelector('.hp-14-bloks')); /* 1.36: de treden rijzen na elkaar op */
  if (window.hpReduced()) return;

  var media = root.querySelector('.hp-14-media');
  var img = root.querySelector('.hp-14-img');
  var top = 0, h = 0, vh = 0;

  function measure() {
    var r = media.getBoundingClientRect();
    top = r.top + window.scrollY;
    h = r.height;
    vh = window.innerHeight;
    update();
  }
  function update() {
    // -1 als het beeld onderaan binnenkomt, 1 als het bovenaan weggaat; 4% van de beeldhoogte speelruimte
    var t = Math.min(1, Math.max(-1, ((top + h / 2 - window.scrollY) - vh / 2) / (vh / 2 + h / 2)));
    img.style.transform = 'translate3d(0,' + (t * h * 0.04).toFixed(1) + 'px,0)';
  }
  window.hpOnResize(measure);
  window.hpOnScroll(update);
  measure();
})();
