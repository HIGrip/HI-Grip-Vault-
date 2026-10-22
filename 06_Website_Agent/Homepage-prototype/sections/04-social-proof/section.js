/* 04 SOCIAL PROOF · sleepbare fotorij (hpDrag) en grote foto (hpLightbox).
   Een sleep opent niets: hpDrag blokkeert de klik na een sleepbeweging. */
(function () {
  'use strict';
  var root = document.querySelector('[data-hp="04"]');
  if (!root) return;

  var viewport = root.querySelector('.hp-04-viewport');
  var track = root.querySelector('.hp-04-track');
  var photos = Array.prototype.slice.call(root.querySelectorAll('.hp-04-photo'));
  var progress = root.querySelector('.hp-04-progress');
  var labels = {
    close: root.dataset.labelClose,
    prev: root.dataset.labelPrev,
    next: root.dataset.labelNext,
    count: root.dataset.labelCount
  };

  /* Voortgangslijn: breedte = zichtbaar deel van de rij, positie = huidige verschuiving. */
  function currentX() {
    var m = /translate3d\((-?[\d.]+)px/.exec(track.style.transform || '');
    return m ? parseFloat(m[1]) : 0;
  }
  function sync() {
    var vw = viewport.clientWidth;
    var tw = track.scrollWidth;
    var range = Math.max(1, tw - vw);
    var thumb = Math.min(1, vw / tw);
    var p = Math.min(1, Math.max(0, -currentX() / range));
    progress.style.setProperty('--hp-04-thumb', (thumb * 100).toFixed(2) + '%');
    progress.style.setProperty('--hp-04-pos', ((1 / thumb - 1) * p * 100).toFixed(2) + '%');
  }

  var drag = window.hpDrag(viewport, track, {
    align: 'start',
    onChange: function () { requestAnimationFrame(sync); },
    onDragStart: function () { photos.forEach(function (b) { b.classList.remove('is-press'); }); },
    onDragEnd: function () { requestAnimationFrame(sync); }
  });
  viewport.addEventListener('pointermove', function () { if (viewport.classList.contains('is-dragging')) sync(); });
  track.addEventListener('transitionend', sync);
  window.hpOnResize(sync);
  sync();

  /* Focus met Tab: de browser mag de viewport niet zelf scrollen; hpDrag schuift naar de gefocuste foto. */
  viewport.addEventListener('scroll', function () { viewport.scrollLeft = 0; });
  photos.forEach(function (btn, i) {
    btn.addEventListener('focus', function () {
      viewport.scrollLeft = 0;
      var r = btn.getBoundingClientRect();
      var v = viewport.getBoundingClientRect();
      if (r.left < v.left || r.right > v.right) drag.go(i);
    });
  });

  /* Tik-variant van hover: dezelfde staat via een klasse. */
  photos.forEach(function (btn) {
    btn.addEventListener('pointerdown', function () { btn.classList.add('is-press'); });
    ['pointerup', 'pointercancel', 'pointerleave'].forEach(function (t) {
      btn.addEventListener(t, function () { btn.classList.remove('is-press'); });
    });
  });

  /* Lightbox: grote variant met srcset, vorige/volgende binnen de 8 foto's. */
  var items = photos.map(function (btn) {
    var img = btn.querySelector('img');
    var cap = btn.parentNode.querySelector('.hp-04-cap');
    return {
      src: btn.dataset.full,
      srcset: btn.dataset.srcset,
      alt: img.alt,
      caption: cap ? cap.textContent : '',
      w: +btn.dataset.w,
      h: +btn.dataset.h
    };
  });
  photos.forEach(function (btn, i) {
    btn.addEventListener('click', function () { window.hpLightbox.open(items, i, btn, labels); });
  });

  /* Lazy-beelden buiten de viewport laden pas bij in beeld slepen; zodra de sectie nadert, alles meteen laden. */
  window.hpInView(root, function () {
    photos.forEach(function (btn) { btn.querySelector('img').loading = 'eager'; });
  }, null, { rootMargin: '600px 0px' });
})();
