/* 06 VISUELE PAUZE · brandvideo als triptiek (1.9).
   Lus = de video tot CUT (vlak voor zijn eigen tekst-einde) + BLACK seconden zwart (is-black) + HOLD seconden eindbeeld "PRESTATIE TELT" (is-end), dan opnieuw.
   De zijpanelen lopen een vaste fractie van CUT voor op de hoofdvideo (data-offset), springen zelf terug als ze CUT halen,
   en worden uitgelijnd bij de start van elke ronde. Alles speelt alleen in beeld; pauze bevriest ook het eindbeeld.
   Geluid hoort bij de hoofdvideo. Reduced motion: geen autoplay, de knop start. */
(function () {
  'use strict';
  var root = document.querySelector('[data-hp="06"]');
  if (!root) return;

  /* 9,55 s: einde van het sokkenduo, vlak voor de eigen tekst van de video (9,6 s); 1.14: 0,5 s zwart vóór het eindbeeld */
  var CUT = 9.55, FADE = 0.32, BLACK = 0.5, HOLD = 5; /* 1.15: FADE s voor de knip vervaagt het beeld al naar zwart */
  var vids = Array.prototype.slice.call(root.querySelectorAll('.hp-06-vid'));
  var main = root.querySelector('.hp-06-vid--main');
  var toggle = root.querySelector('.hp-06-toggle'), sound = root.querySelector('.hp-06-sound');
  var now = root.querySelector('.hp-06-tc__now');
  var userPaused = window.hpReduced(), visible = false, raf = 0;
  var ending = false, endElapsed = 0, last = 0, lastSec = -1;
  var fill = root.querySelector('.hp-06-progress__fill');

  /* 1.18 (snelheid): welke zijpanelen zichtbaar zijn wordt gemeten bij start en resize, niet elk frame. */
  var sideList = [];
  function measureSides() { sideList = vids.filter(function (v) { return v !== main && v.offsetParent !== null; }); }
  function sides() { return sideList; }
  function align() {
    sides().forEach(function (v) {
      var want = (main.currentTime + CUT * parseFloat(v.dataset.offset)) % CUT;
      if (v.readyState > 0 && Math.abs(v.currentTime - want) > 0.6) v.currentTime = want;
    });
  }
  function playing() { return visible && !userPaused; }
  /* Starten: eerst de hoofdvideo, de zijpanelen 0,3 s later, zodat drie decoders niet in hetzelfde frame opstarten. */
  var sideTimer = 0;
  function play(v) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
  function setVideos(on) {
    clearTimeout(sideTimer);
    if (!on) { main.pause(); sides().forEach(function (v) { v.pause(); }); return; }
    play(main);
    sideTimer = setTimeout(function () { if (playing() && !ending) sides().forEach(play); }, 300);
  }
  function startEnd() { ending = true; endElapsed = 0; setVideos(false); root.classList.add('is-black'); }
  function stopEnd() {
    ending = false; root.classList.remove('is-end', 'is-black', 'is-fade');
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
      if (endElapsed >= BLACK && root.classList.contains('is-black')) { root.classList.remove('is-black'); root.classList.add('is-end'); }
      if (endElapsed >= BLACK + HOLD) stopEnd();
    } else {
      if (main.currentTime >= CUT - FADE) root.classList.add('is-fade');
      if (main.currentTime >= CUT) startEnd();
      sides().forEach(function (v) { if (v.currentTime >= CUT) v.currentTime = v.currentTime - CUT + 0.05; });
    }
    var shown = ending ? CUT + endElapsed : main.currentTime;
    fill.style.transform = 'scaleX(' + Math.min(1, shown / (CUT + BLACK + HOLD)).toFixed(4) + ')';
    var sec = Math.floor(shown);
    if (sec !== lastSec) { lastSec = sec; now.textContent = '00:' + ('0' + sec).slice(-2); }
    raf = playing() ? requestAnimationFrame(tick) : 0;
  }

  /* Koopknop: komt naar voren zodra de cursor binnen NEAR px van de knop komt, weg na FAR px (geen geflikker op de rand). */
  var cta = root.querySelector('.hp-06-cta'), NEAR = 160, FAR = 220;
  root.addEventListener('pointermove', function (e) {
    if (e.pointerType !== 'mouse') return;
    var r = cta.getBoundingClientRect();
    var dx = Math.max(r.left - e.clientX, 0, e.clientX - r.right), dy = Math.max(r.top - e.clientY, 0, e.clientY - r.bottom);
    var d = Math.hypot(dx, dy), near = root.classList.contains('is-near');
    if (!near && d < NEAR) root.classList.add('is-near');
    else if (near && d > FAR) root.classList.remove('is-near');
  });
  root.addEventListener('pointerleave', function () { root.classList.remove('is-near'); });

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
  window.hpOnResize(function () { measureSides(); sync(); });
  /* Al een scherm vóór de sectie beginnen de video's te laden, zodat ze bij aankomst direct kunnen spelen. */
  window.hpInView(root, function () { vids.forEach(function (v, n) { if (v.preload !== 'auto' && v.paused && !v.currentTime) setTimeout(function () { v.preload = 'auto'; v.load(); }, n * 350); }); }, null, { rootMargin: '100% 0px' });
  measureSides();
  sync();
})();
