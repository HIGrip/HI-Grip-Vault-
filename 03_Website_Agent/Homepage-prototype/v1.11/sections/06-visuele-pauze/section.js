/* 06 VISUELE PAUZE · brandvideo als triptiek (1.9).
   Lus = de video tot CUT (vlak voor zijn eigen tekst-einde) + HOLD seconden eindbeeld "PRESTATIE TELT" (is-end), dan opnieuw.
   De zijpanelen lopen een vaste fractie van CUT voor op de hoofdvideo (data-offset), springen zelf terug als ze CUT halen,
   en worden uitgelijnd bij de start van elke ronde. Alles speelt alleen in beeld; pauze bevriest ook het eindbeeld.
   Geluid hoort bij de hoofdvideo. Reduced motion: geen autoplay, de knop start. */
(function () {
  'use strict';
  var root = document.querySelector('[data-hp="06"]');
  if (!root) return;

  var CUT = 9.55, HOLD = 5; /* 9,55 s: einde van het sokkenduo, vlak voor de eigen tekst van de video (9,6 s) */
  var vids = Array.prototype.slice.call(root.querySelectorAll('.hp-06-vid'));
  var main = root.querySelector('.hp-06-vid--main');
  var toggle = root.querySelector('.hp-06-toggle'), sound = root.querySelector('.hp-06-sound');
  var now = root.querySelector('.hp-06-tc__now');
  var userPaused = window.hpReduced(), visible = false, raf = 0;
  var ending = false, endElapsed = 0, last = 0;

  function sides() { return vids.filter(function (v) { return v !== main && v.offsetParent !== null; }); }
  function align() {
    sides().forEach(function (v) {
      var want = (main.currentTime + CUT * parseFloat(v.dataset.offset)) % CUT;
      if (v.readyState > 0 && Math.abs(v.currentTime - want) > 0.6) v.currentTime = want;
    });
  }
  function playing() { return visible && !userPaused; }
  function setVideos(on) {
    [main].concat(sides()).forEach(function (v) {
      if (on) { var p = v.play(); if (p && p.catch) p.catch(function () {}); } else v.pause();
    });
  }
  function startEnd() { ending = true; endElapsed = 0; setVideos(false); root.classList.add('is-end'); }
  function stopEnd() {
    ending = false; root.classList.remove('is-end');
    main.currentTime = 0; align();
    if (playing()) setVideos(true);
  }
  function sync() {
    var on = playing();
    if (!ending) { setVideos(on); if (on) align(); }
    toggle.setAttribute('aria-pressed', String(userPaused));
    toggle.setAttribute('aria-label', userPaused ? toggle.dataset.labelPlay : toggle.dataset.labelPause);
    last = performance.now();
    if (on && !raf) raf = requestAnimationFrame(tick);
  }
  function tick(t) {
    var dt = Math.min(0.1, (t - last) / 1000); last = t;
    if (ending) {
      endElapsed += dt;
      if (endElapsed >= HOLD) stopEnd();
    } else {
      if (main.currentTime >= CUT) startEnd();
      sides().forEach(function (v) { if (v.currentTime >= CUT) v.currentTime = v.currentTime - CUT + 0.05; });
    }
    var shown = ending ? CUT + endElapsed : main.currentTime;
    root.style.setProperty('--hp-06-p', Math.min(1, shown / (CUT + HOLD)).toFixed(4));
    now.textContent = '00:' + ('0' + Math.floor(shown)).slice(-2);
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
  main.addEventListener('ended', function () { if (!ending) startEnd(); });
  vids.forEach(function (v) { v.addEventListener('loadedmetadata', align); });
  window.hpInView(root, function () { visible = true; sync(); }, function () { visible = false; sync(); }, { threshold: [0.33] });
  window.hpOnResize(sync);
  sync();
})();
