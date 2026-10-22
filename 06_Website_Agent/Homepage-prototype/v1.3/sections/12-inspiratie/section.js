/* 12 INSPIRATIE · alles gekoppeld aan de scrollpositie, alleen terwijl de sectie in beeld is.
   p loopt van 1 (sectie komt onder binnen) via 0 (midden in beeld) naar -1 (sectie verlaat boven).
   - foto: schaal 1.12 → 1.0, verschuiving p·8% (de laag is 24% hoger dan de sectie, dus nooit een rand)
   - masker: regel 1 komt omhoog terwijl de kop het onderste derde van het venster in schuift, regel 2 iets later
   - drift (≥769px): regel 1 op A·(1+p), regel 2 op A·(1−p), beide tussen 0 en 2A; A = min(vrije ruimte/2, 6% containerbreedte), dus nooit buiten de container */
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
  function clamp(v) { return Math.max(0, Math.min(1, v)); }
  function out(t) { return 1 - Math.pow(1 - t, 3); }
  function measure() {
    var free = Math.min(title.clientWidth - l1.offsetWidth, title.clientWidth - l2.offsetWidth);
    amp = mqDesk.matches ? Math.max(0, Math.min(free / 2, title.clientWidth * 0.06)) : 0;
  }
  function update() {
    if (!active) return;
    var r = root.getBoundingClientRect();
    var vh = window.innerHeight;
    var p = Math.max(-1, Math.min(1, (r.top + r.height / 2 - vh / 2) / ((vh + r.height) / 2)));
    root.style.setProperty('--hp-12-s', (1 + 0.06 * (p + 1)).toFixed(4));
    root.style.setProperty('--hp-12-y', (p * 8).toFixed(3));
    var t = vh - title.getBoundingClientRect().top;
    root.style.setProperty('--hp-12-r1', ((1 - out(clamp((t - vh * 0.04) / (vh * 0.3)))) * 110).toFixed(2) + '%');
    root.style.setProperty('--hp-12-r2', ((1 - out(clamp((t - vh * 0.14) / (vh * 0.3)))) * 110).toFixed(2) + '%');
    root.style.setProperty('--hp-12-x1', (amp * (1 + p)).toFixed(2) + 'px');
    root.style.setProperty('--hp-12-x2', (amp * (1 - p)).toFixed(2) + 'px');
  }
  function refresh() { measure(); update(); }
  window.hpInView(root, function () { active = true; refresh(); }, function () { active = false; });
  window.hpOnScroll(update);
  window.hpOnResize(refresh);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);
})();
