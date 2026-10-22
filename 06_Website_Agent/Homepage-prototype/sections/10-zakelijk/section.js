/* 10 ZAKELIJK · tik-variant van de hover: bij aanraken krijgt de kaart dezelfde staat (.is-on).
   Een scrollgebaar (pointercancel) of de kaart uit beeld zet hem terug. De link zelf navigeert gewoon. */
(function () {
  'use strict';
  var root = document.querySelector('[data-hp="10"]');
  if (!root) return;
  var items = Array.prototype.slice.call(root.querySelectorAll('.hp-10-item'));

  function setOn(item) {
    items.forEach(function (it) { it.classList.toggle('is-on', it === item); });
  }

  items.forEach(function (item) {
    var card = item.querySelector('.hp-10-card');
    card.addEventListener('pointerdown', function (e) {
      if (e.pointerType === 'mouse') return;
      setOn(item);
    });
    card.addEventListener('pointercancel', function () { item.classList.remove('is-on'); });
    window.hpInView(item, null, function () { item.classList.remove('is-on'); });
  });
})();
