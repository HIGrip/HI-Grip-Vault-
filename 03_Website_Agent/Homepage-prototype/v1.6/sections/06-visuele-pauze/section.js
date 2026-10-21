/* 06 VISUELE PAUZE · de codefilm. Speelt alleen als hij voor de helft in beeld is; de knop pauzeert en hervat.
   De tijd komt uit de film zelf (de animatie van scène 1): timecode, voortgang en het ontcijferen van de labels
   (elk .hp-06-scr op zijn moment --s in de lus) lopen daardoor altijd gelijk met het beeld. Zonder JS staat de tekst er gewoon. */
(function () {
  'use strict';
  var root = document.querySelector('[data-hp="06"]');
  if (!root || window.hpReduced()) return;

  var toggle = root.querySelector('.hp-06-toggle');
  var now = root.querySelector('.hp-06-tc__now');
  var clock = root.querySelector('.hp-06-s1');
  var GLYPHS = 'ABCDEFGHIJKLMNOPRSTUVWXYZ0123456789';
  var scr = Array.prototype.map.call(root.querySelectorAll('.hp-06-scr'), function (el) {
    return { el: el, text: el.textContent, at: parseFloat(el.style.getPropertyValue('--s')) || 0, t0: -1 };
  });
  var SCR_MS = 520;
  var userPaused = false, visible = false, raf = 0, prev = -1;

  function loopMs() { return (parseFloat(getComputedStyle(root).getPropertyValue('--hp-dur-3')) || 900) * 16; }
  function crossed(a, b, at) { return a < 0 ? false : (a <= b ? at > a && at <= b : at > a || at <= b); }

  function scramble(item, ms) {
    var p = Math.min(1, ms / SCR_MS), shown = Math.floor(item.text.length * p), out = '';
    for (var i = 0; i < item.text.length; i++) {
      var c = item.text.charAt(i);
      out += (i < shown || !/[A-Za-zÀ-ÿ0-9]/.test(c)) ? c : GLYPHS.charAt(Math.floor(Math.random() * GLYPHS.length));
    }
    item.el.textContent = out;
    if (p >= 1) item.t0 = -1;
  }

  function tick(stamp) {
    var a = clock.getAnimations ? clock.getAnimations()[0] : null;
    if (a && a.currentTime != null) {
      var T = loopMs(), t = (a.currentTime % T) / T;
      root.style.setProperty('--hp-06-p', t.toFixed(4));
      now.textContent = '00:' + ('0' + Math.floor(t * T / 1000)).slice(-2);
      scr.forEach(function (it) {
        if (crossed(prev, t, it.at)) it.t0 = stamp;
        if (it.t0 >= 0) scramble(it, stamp - it.t0);
      });
      prev = t;
    }
    raf = playing() ? requestAnimationFrame(tick) : 0;
  }
  function playing() { return visible && !userPaused; }
  function sync() {
    root.classList.toggle('is-paused', !playing());
    toggle.setAttribute('aria-pressed', String(userPaused));
    toggle.setAttribute('aria-label', userPaused ? toggle.dataset.labelPlay : toggle.dataset.labelPause);
    if (playing() && !raf) raf = requestAnimationFrame(tick);
    if (!playing()) scr.forEach(function (it) { it.el.textContent = it.text; it.t0 = -1; });
  }

  toggle.addEventListener('click', function () { userPaused = !userPaused; sync(); });
  window.hpInView(root, function () { visible = true; sync(); }, function () { visible = false; sync(); }, { threshold: [0.5] });
  sync();
})();
