/* 06 VISUELE PAUZE · brandvideo (1.36: één bestand per scherm).
   Lus = de video tot CUT (vlak voor zijn eigen tekst-einde) + BLACK seconden zwart (is-black) + HOLD seconden eindbeeld "PRESTATIE TELT" (is-end), dan opnieuw.
   Laptop: één breed bestand met de drie panelen erin; mobiel: één staand bestand (720 px, of 480 px bij trage verbinding of databesparing).
   De film laadt pas als de sectie anderhalf scherm weg is en speelt alleen in beeld. Pauze bevriest ook het eindbeeld.
   Geluid hoort bij de film. Reduced motion: geen autoplay, de knop start. */
(function () {
  'use strict';
  var root = document.querySelector('[data-hp="06"]');
  if (!root) return;

  /* 9,55 s: einde van het sokkenduo, vlak voor de eigen tekst van de video (9,6 s); 1.14: 0,5 s zwart vóór het eindbeeld */
  var CUT = 9.55, FADE = 0.32, BLACK = 0.5, HOLD = 5; /* 1.15: FADE s voor de knip vervaagt het beeld al naar zwart */
  var vids = Array.prototype.slice.call(root.querySelectorAll('.hp-06-vid'));
  var main = null;
  var toggle = root.querySelector('.hp-06-toggle'), sound = root.querySelector('.hp-06-sound');
  var now = root.querySelector('.hp-06-tc__now');
  var userPaused = window.hpReduced(), visible = false, raf = 0, soundOn = false, near = false;
  var ending = false, endElapsed = 0, last = 0, lastSec = -1;
  var fill = root.querySelector('.hp-06-progress__fill');

  /* Welke film hoort bij dit scherm: de zichtbare. Bij een resize over het breakpunt wisselt de actieve film. */
  function pick() {
    var v = vids.filter(function (x) { return x.offsetParent !== null; })[0] || vids[0];
    if (v === main) return;
    if (main) main.pause();
    main = v;
    main.muted = !soundOn;
    if (near) load(main);
  }
  /* 1.36: bron kiezen en pas laden als de sectie dichtbij komt. Trage verbinding of databesparing: de lichte versie. */
  function load(v) {
    if (v.getAttribute('src')) return;
    var c = navigator.connection || {};
    var slow = c.saveData || /(^|-)(2g|3g)$/.test(c.effectiveType || '');
    v.src = (slow && v.dataset.srcLo) ? v.dataset.srcLo : v.dataset.src;
    v.preload = 'auto';
    v.load();
  }
  function playing() { return visible && !userPaused; }
  function play(v) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
  function setVideo(on) {
    if (!on) { main.pause(); return; }
    load(main);
    play(main);
  }
  function startEnd() { ending = true; endElapsed = 0; setVideo(false); root.classList.add('is-black'); }
  function stopEnd() {
    ending = false; root.classList.remove('is-end', 'is-black', 'is-fade');
    main.currentTime = 0;
    if (playing()) setVideo(true);
  }
  function sync() {
    var on = playing();
    if (!ending) setVideo(on);
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
    var d = Math.hypot(dx, dy), isNear = root.classList.contains('is-near');
    if (!isNear && d < NEAR) root.classList.add('is-near');
    else if (isNear && d > FAR) root.classList.remove('is-near');
  });
  root.addEventListener('pointerleave', function () { root.classList.remove('is-near'); });

  toggle.addEventListener('click', function () { userPaused = !userPaused; sync(); });
  sound.addEventListener('click', function () {
    soundOn = !soundOn;
    main.muted = !soundOn;
    sound.setAttribute('aria-pressed', String(soundOn));
    sound.setAttribute('aria-label', soundOn ? sound.dataset.labelOff : sound.dataset.labelOn);
    if (soundOn && userPaused) { userPaused = false; sync(); }
  });
  vids.forEach(function (v) { v.addEventListener('ended', function () { if (v === main && !ending) startEnd(); }); });
  window.hpInView(root, function () { visible = true; sync(); }, function () { visible = false; sync(); }, { threshold: [0.33] });
  window.hpOnResize(function () { pick(); sync(); });
  /* Anderhalf scherm voor de sectie beginnen we te laden, zodat de film bij aankomst direct kan spelen. */
  window.hpInView(root, function () { near = true; load(main); }, null, { rootMargin: '150% 0px' });
  pick();
  sync();
})();
