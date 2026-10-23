/* 14 SPORTTEAMS · de maten schrijven zich één keer rij voor rij in als het formulier in beeld komt (vertraging via --i in CSS);
   het beeld schuift licht mee met de scroll (alleen transform, positie gemeten bij resize). Reduced motion: alles staat stil en ingevuld. */
(function () {
  'use strict';
  var root = document.querySelector('[data-hp="14"]');
  if (!root || window.hpReduced()) return;

  window.hpInView(root.querySelector('.hp-14-table'), function () { root.classList.add('is-on'); }, null, { threshold: [0.5] });

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
    // -1 als het beeld onderaan binnenkomt, 1 als het bovenaan weggaat; 5% van de beeldhoogte speelruimte
    var t = Math.min(1, Math.max(-1, ((top + h / 2 - window.scrollY) - vh / 2) / (vh / 2 + h / 2)));
    img.style.transform = 'translate3d(0,' + (t * h * 0.05).toFixed(1) + 'px,0)';
  }
  window.hpOnResize(measure);
  window.hpOnScroll(update);
  measure();
})();
