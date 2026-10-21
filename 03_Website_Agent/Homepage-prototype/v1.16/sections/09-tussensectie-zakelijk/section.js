/* 09 TUSSENSECTIE ZAKELIJK (1.2 ronde 2) · rustige logo-lus (rAF, alleen in beeld) met spotlight: logo's in het midden van de band krijgen kleur.
   Pauze bij hover/focus en zolang een getikt logo in kleur staat. Reduced motion: stil, alles in kleur. */
(function () {
  'use strict';
  var root = document.querySelector('[data-hp="09"]');
  if (!root) return;

  var viewport = root.querySelector('[data-hp-09-viewport]');
  var track = root.querySelector('[data-hp-09-track]');

  /* Tik-variant van hover: één logo in kleur, nog een tik of ernaast zet terug */
  var tapped = null;
  root.addEventListener('pointerup', function (e) {
    if (e.pointerType === 'mouse') return;
    var hit = e.target.closest('.hp-09-item');
    tapped = hit && hit !== tapped ? hit : null;
    Array.prototype.forEach.call(root.querySelectorAll('.hp-09-item'), function (n) { n.classList.toggle('is-on', n === tapped); });
  });

  if (!document.documentElement.classList.contains('hp-motion') || hpReduced()) {
    root.classList.add('is-static');
    return;
  }

  /* Twee extra sets voor een naadloze lus (één set is smaller dan de band); alleen visueel */
  var COPIES = 3;
  var originals = Array.prototype.slice.call(track.children);
  for (var n = 1; n < COPIES; n++) {
    originals.forEach(function (li) {
      var c = li.cloneNode(true);
      c.setAttribute('aria-hidden', 'true');
      c.querySelectorAll('img').forEach(function (img) { img.alt = ''; });
      track.appendChild(c);
    });
  }
  root.classList.add('is-running');
  if (!viewport.hasAttribute('tabindex')) viewport.setAttribute('tabindex', '0');

  var items = Array.prototype.slice.call(track.querySelectorAll('.hp-09-item'));
  var period = 0, x = 0, speed = 0, last = 0, raf = 0, hover = false, focus = false;
  var SPEED = 42; /* px per seconde */

  function measure() { period = track.scrollWidth / COPIES; }
  measure();
  hpOnResize(measure);

  viewport.addEventListener('pointerenter', function (e) { if (e.pointerType === 'mouse') hover = true; });
  viewport.addEventListener('pointerleave', function () { hover = false; });
  viewport.addEventListener('focusin', function () { focus = true; });
  viewport.addEventListener('focusout', function () { focus = false; });

  function spotlight() {
    var r = viewport.getBoundingClientRect();
    var mid = r.left + r.width / 2;
    var reach = Math.max(140, r.width * 0.2);
    items.forEach(function (it) {
      var b = it.getBoundingClientRect();
      it.classList.toggle('is-lit', Math.abs(b.left + b.width / 2 - mid) < reach);
    });
  }

  function frame(t) {
    var dt = last ? Math.min(0.05, (t - last) / 1000) : 0;
    last = t;
    var target = hover || focus || tapped ? 0 : SPEED;
    speed += (target - speed) * Math.min(1, dt * 4);
    x -= speed * dt;
    if (period && -x >= period) x += period;
    track.style.transform = 'translate3d(' + x.toFixed(2) + 'px,0,0)';
    spotlight();
    raf = requestAnimationFrame(frame);
  }

  hpInView(root, function () {
    if (!raf) { last = 0; raf = requestAnimationFrame(frame); }
  }, function () {
    cancelAnimationFrame(raf); raf = 0;
  });
})();
