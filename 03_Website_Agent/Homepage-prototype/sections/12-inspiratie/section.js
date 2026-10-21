/* 12 INSPIRATIE · de twee regels drijven tegen elkaar in, gekoppeld aan de scrollpositie (alleen desktop, alleen in beeld).
   p loopt van 1 (sectie komt onder binnen) via 0 (midden in beeld) naar -1 (sectie verlaat boven).
   Regel 1 staat op A·(1+p), regel 2 op A·(1−p): beide tussen 0 en 2A, dus nooit links van de container.
   A = de helft van de kleinste vrije ruimte naast een regel, begrensd op 6% van de containerbreedte; zo komt ook rechts niets buiten de container. */
(function () {
  'use strict';
  var root = document.querySelector('[data-hp="12"]');
  if (!root || window.hpReduced()) return;
  var title = root.querySelector('.hp-12-title');
  var l1 = root.querySelector('.hp-12-l--1');
  var l2 = root.querySelector('.hp-12-l--2');
  var mqDesk = window.matchMedia('(min-width: 769px)');
  var active = false;
  var amp = 0;
  function measure() {
    var free = Math.min(title.clientWidth - l1.offsetWidth, title.clientWidth - l2.offsetWidth);
    amp = Math.max(0, Math.min(free / 2, title.clientWidth * 0.06));
  }
  function update() {
    if (!active || !mqDesk.matches) return;
    var r = root.getBoundingClientRect();
    var vh = window.innerHeight;
    var p = (r.top + r.height / 2 - vh / 2) / ((vh + r.height) / 2);
    p = Math.max(-1, Math.min(1, p));
    root.style.setProperty('--hp-12-x1', (amp * (1 + p)).toFixed(2) + 'px');
    root.style.setProperty('--hp-12-x2', (amp * (1 - p)).toFixed(2) + 'px');
  }
  function refresh() { measure(); update(); }
  window.hpInView(root, function () { active = true; refresh(); }, function () { active = false; });
  window.hpOnScroll(update);
  window.hpOnResize(refresh);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);
})();
