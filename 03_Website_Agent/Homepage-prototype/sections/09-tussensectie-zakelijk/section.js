/* 09 TUSSENSECTIE ZAKELIJK · tik-variant van de hover: een tik zet één naam in focus (logo in kleur),
   nog een tik of een tik ernaast in de sectie zet hem terug. */
(function () {
  'use strict';
  var root = document.querySelector('[data-hp="09"]');
  if (!root) return;

  var list = root.querySelector('[data-hp-09-groups]');
  var names = Array.prototype.slice.call(root.querySelectorAll('.hp-09-name'));

  function set(target) {
    names.forEach(function (n) { n.classList.toggle('is-on', n === target); });
    list.classList.toggle('is-focus', !!target);
  }

  root.addEventListener('pointerup', function (e) {
    if (e.pointerType === 'mouse') return;
    var hit = e.target.closest('.hp-09-name');
    set(hit && !hit.classList.contains('is-on') ? hit : null);
  });
})();
