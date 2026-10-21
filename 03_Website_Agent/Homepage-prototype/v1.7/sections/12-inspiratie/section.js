/* 12 INSPIRATIE · de lopende regels staan stil zolang de sectie buiten beeld is. */
(function () {
  'use strict';
  var root = document.querySelector('[data-hp="12"]');
  if (!root || window.hpReduced()) return;
  window.hpInView(root, function () { root.classList.remove('is-off'); }, function () { root.classList.add('is-off'); });
})();
