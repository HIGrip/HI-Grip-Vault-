/* 06 VISUELE PAUZE · brandvideo als triptiek. De buitenste panelen lopen een vaste fractie van de lus voor op de hoofdvideo
   (data-offset); ze worden uitgelijnd bij de start en bij elke herhaling van de hoofdvideo. Zijpanelen gebruiken een
   lichte, stille 480p-versie zodat drie video's tegelijk soepel blijven. Alles speelt alleen als de
   sectie voor een derde in beeld is; de knop pauzeert, de geluidsknop zet alleen de hoofdvideo aan. Reduced motion: geen
   autoplay, de knop start de hoofdvideo. */
(function () {
  'use strict';
  var root = document.querySelector('[data-hp="06"]');
  if (!root) return;

  var vids = Array.prototype.slice.call(root.querySelectorAll('.hp-06-vid'));
  var main = root.querySelector('.hp-06-vid--main');
  var toggle = root.querySelector('.hp-06-toggle'), sound = root.querySelector('.hp-06-sound');
  var now = root.querySelector('.hp-06-tc__now');
  var reduced = window.hpReduced();
  var userPaused = reduced, visible = false, raf = 0;

  function sides() { return vids.filter(function (v) { return v !== main && v.offsetParent !== null; }); }
  function align() {
    var d = main.duration;
    if (!d) return;
    sides().forEach(function (v) {
      var want = (main.currentTime + d * parseFloat(v.dataset.offset)) % d;
      if (Math.abs(v.currentTime - want) > 0.6) v.currentTime = want;
    });
  }
  function playing() { return visible && !userPaused; }
  function sync() {
    var on = playing();
    [main].concat(sides()).forEach(function (v) {
      if (on) { var p = v.play(); if (p && p.catch) p.catch(function () {}); } else v.pause();
    });
    if (on) align();
    toggle.setAttribute('aria-pressed', String(userPaused));
    toggle.setAttribute('aria-label', userPaused ? toggle.dataset.labelPlay : toggle.dataset.labelPause);
    if (on && !raf) raf = requestAnimationFrame(tick);
  }
  var lastAlign = 0; /* vorige tijd van de hoofdvideo: springt hij terug (lus), dan opnieuw uitlijnen */
  function tick(t) {
    var d = main.duration || 1;
    root.style.setProperty('--hp-06-p', (main.currentTime / d).toFixed(4));
    now.textContent = '00:' + ('0' + Math.floor(main.currentTime)).slice(-2);
    var ct = main.currentTime;
    if (ct < lastAlign) align();
    lastAlign = ct;
    raf = playing() ? requestAnimationFrame(tick) : 0;
  }

  toggle.addEventListener('click', function () { userPaused = !userPaused; sync(); });
  sound.addEventListener('click', function () {
    var on = main.muted;
    main.muted = !on;
    sound.setAttribute('aria-pressed', String(on));
    sound.setAttribute('aria-label', on ? sound.dataset.labelOff : sound.dataset.labelOn);
    if (on && userPaused) { userPaused = false; sync(); }
  });
  vids.forEach(function (v) { v.addEventListener('loadedmetadata', align); });
  window.hpInView(root, function () { visible = true; sync(); }, function () { visible = false; sync(); }, { threshold: [0.33] });
  window.hpOnResize(sync);
  sync();
})();
