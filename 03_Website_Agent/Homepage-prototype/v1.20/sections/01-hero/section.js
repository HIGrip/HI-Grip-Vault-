/* 01 HERO · mobiel menu en de schermvullende foto die zich bij het scrollen vastzet (108% → 100%). */
(function () {
  'use strict';
  var root = document.querySelector('[data-hp="01"]');
  if (!root) return;

  /* Menu (alleen zichtbaar onder 769 px) */
  var bar = root.querySelector('.hp-01-bar');
  var btn = root.querySelector('.hp-01-menu');
  var label = btn.querySelector('.hp-01-menu__label');
  function setMenu(open) {
    bar.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', String(open));
    label.textContent = open ? btn.dataset.labelClose : btn.dataset.labelOpen;
  }
  btn.addEventListener('click', function () { setMenu(btn.getAttribute('aria-expanded') !== 'true'); });
  root.querySelector('.hp-01-nav').addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  bar.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && bar.classList.contains('is-open')) { setMenu(false); btn.focus(); }
  });

  /* Scroll: de foto staat iets ingezoomd en zet zich vast terwijl het frame omhoog schuift.
     Gekoppeld aan scrollpositie, dus geen transition; bij reduced motion blijft hij op 100%. */
  if (window.hpReduced()) return;
  var media = root.querySelector('[data-hp-01-media]');
  var active = false;
  function update() {
    if (!active) return;
    var r = media.getBoundingClientRect();
    var p = Math.min(1, Math.max(0, -r.top / (r.height * 0.6)));
    media.style.setProperty('--hp-01-zoom', (1.08 - 0.08 * p).toFixed(4));
  }
  media.style.setProperty('--hp-01-zoom', '1.08');
  /* 1.18 (snelheid): uit beeld staat ook de ademende zoom stil. */
  window.hpInView(media, function () { active = true; media.classList.remove('is-still'); update(); }, function () { active = false; media.classList.add('is-still'); });
  window.hpOnScroll(update);
})();
