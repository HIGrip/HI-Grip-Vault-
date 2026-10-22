/* 10 ZAKELIJK · typografische index. Hover (muis), focus (toetsenbord) of tik kiest een rij: de rij loopt vol,
   klapt open en rechts schuift het beeld erbij. Op touch opent de eerste tik de rij, de tweede volgt de link. */
(function () {
  'use strict';
  var root = document.querySelector('[data-hp="10"]');
  if (!root) return;

  var rows = root.querySelectorAll('.hp-10-row');
  var frames = root.querySelectorAll('.hp-10-frame');
  var big = root.querySelector('.hp-10-big'), bigN = root.querySelector('.hp-10-big__n');
  var current = 0;

  function set(i) {
    if (i === current) return;
    current = i;
    for (var k = 0; k < rows.length; k++) {
      rows[k].classList.toggle('is-current', k === i);
      frames[k].classList.toggle('is-current', k === i);
    }
    bigN.textContent = '0' + (i + 1);
    big.classList.remove('is-swap');
    void big.offsetWidth;
    big.classList.add('is-swap');
  }

  Array.prototype.forEach.call(rows, function (row, i) {
    var link = row.querySelector('.hp-10-link');
    var touch = false;
    link.addEventListener('pointerdown', function (e) { touch = e.pointerType !== 'mouse'; });
    link.addEventListener('pointerenter', function (e) { if (e.pointerType === 'mouse') set(i); });
    link.addEventListener('focus', function () { if (!touch) set(i); });
    link.addEventListener('click', function (e) {
      if (touch && current !== i) { e.preventDefault(); set(i); }
      touch = false;
    });
  });
})();
