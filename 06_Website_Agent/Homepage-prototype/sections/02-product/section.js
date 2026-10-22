/* 02 PRODUCT · flip-knop: wisselt per kaart naar het tweede beeld zonder te navigeren (tik-variant van de hover). */
(function () {
  'use strict';
  var root = document.querySelector('[data-hp="02"]');
  if (!root) return;

  Array.prototype.forEach.call(root.querySelectorAll('[data-hp-02-card]'), function (card) {
    var btn = card.querySelector('.hp-02-flip');
    if (!btn) return;
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var on = btn.getAttribute('aria-pressed') !== 'true';
      btn.setAttribute('aria-pressed', String(on));
      card.classList.toggle('is-flipped', on);
    });
  });
})();
