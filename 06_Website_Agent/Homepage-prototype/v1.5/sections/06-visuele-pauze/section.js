/* 06 VISUELE PAUZE · de codefilm. Speelt alleen als hij voor de helft in beeld is; de knop pauzeert en hervat.
   Timecode en voortgang lezen de tijd van de film zelf (de animatie van scène 1), zodat ze nooit uit de pas lopen. */
(function () {
  'use strict';
  var root = document.querySelector('[data-hp="06"]');
  if (!root || window.hpReduced()) return;

  var toggle = root.querySelector('.hp-06-toggle');
  var now = root.querySelector('.hp-06-tc__now');
  var clock = root.querySelector('.hp-06-s1');
  var userPaused = false, visible = false, raf = 0;

  function loopMs() {
    return (parseFloat(getComputedStyle(root).getPropertyValue('--hp-dur-3')) || 900) * 16;
  }
  function tick() {
    var a = clock.getAnimations ? clock.getAnimations()[0] : null;
    if (a && a.currentTime != null) {
      var T = loopMs(), t = a.currentTime % T;
      root.style.setProperty('--hp-06-p', (t / T).toFixed(4));
      now.textContent = '00:' + ('0' + Math.floor(t / 1000)).slice(-2);
    }
    raf = playing() ? requestAnimationFrame(tick) : 0;
  }
  function playing() { return visible && !userPaused; }
  function sync() {
    root.classList.toggle('is-paused', !playing());
    toggle.setAttribute('aria-pressed', String(userPaused));
    toggle.setAttribute('aria-label', userPaused ? toggle.dataset.labelPlay : toggle.dataset.labelPause);
    if (playing() && !raf) raf = requestAnimationFrame(tick);
  }

  toggle.addEventListener('click', function () { userPaused = !userPaused; sync(); });
  window.hpInView(root, function () { visible = true; sync(); }, function () { visible = false; sync(); }, { threshold: [0.5] });
  sync();
})();
