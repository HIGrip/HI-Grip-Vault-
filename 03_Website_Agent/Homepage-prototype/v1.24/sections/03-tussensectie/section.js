/* 03 · marquee: twee rijen tegen elkaar in. Scrollen versnelt ze, draait ze mee met de scrollrichting
   en laat de typografie kantelen in de looprichting; afremmen bij hover/focus/tik; 3500 telt op bij binnenkomst. */
(function () {
  'use strict';
  var sec = document.querySelector('[data-hp="03"]');
  if (!sec || window.hpReduced()) return;

  var SPEED = 52; // px per seconde
  var MAX_SKEW = 9; // graden
  var rows = Array.prototype.map.call(sec.querySelectorAll('.hp-03-row'), function (row, i) {
    return { row: row, track: row.querySelector('.hp-03-track'), set: row.querySelector('.hp-03-set'), dir: Number(row.dataset.dir), speed: SPEED * (i ? 0.75 : 1), x: 0, w: 0 };
  });
  var hover = false, focus = false, tapped = false, paused = false;
  var running = false, raf = 0, last = 0, factor = 1, boost = 0, skew = 0, scrollDir = 1;
  var lastY = window.scrollY;

  function measure() {
    rows.forEach(function (r) {
      var next = r.set.nextElementSibling;
      r.w = next ? next.offsetLeft - r.set.offsetLeft : r.set.getBoundingClientRect().width;
      r.x = r.w ? r.x % r.w : 0;
      place(r);
    });
  }
  function place(r) {
    // dir -1 loopt naar links, dir 1 naar rechts; de kanteling volgt de werkelijke looprichting
    var t = r.dir < 0 ? -r.x : r.x - r.w;
    var k = -skew * r.dir * scrollDir;
    r.track.style.transform = 'translate3d(' + t.toFixed(2) + 'px,0,0) skewX(' + k.toFixed(2) + 'deg)';
  }
  function sync() {
    paused = hover || focus || tapped;
    sec.classList.toggle('is-paused', paused);
  }
  function frame(t) {
    var dt = last ? Math.min((t - last) / 1000, 0.05) : 0;
    last = t;
    factor += ((paused ? 0 : 1) - factor) * Math.min(dt * 6, 1);
    boost *= Math.pow(0.04, dt);
    skew += (Math.min(boost * 2.2, MAX_SKEW) * factor - skew) * Math.min(dt * 8, 1);
    rows.forEach(function (r) {
      if (!r.w) return;
      var v = r.speed * (1 + boost) * factor * scrollDir;
      r.x = ((r.x + v * dt) % r.w + r.w) % r.w;
      place(r);
    });
    raf = running ? requestAnimationFrame(frame) : 0;
  }
  function start() { if (running) return; running = true; last = 0; raf = requestAnimationFrame(frame); }
  function stop() { running = false; if (raf) cancelAnimationFrame(raf); raf = 0; }

  window.hpOnScroll(function () {
    var y = window.scrollY, d = y - lastY;
    lastY = y;
    if (!running || !d) return;
    scrollDir = d > 0 ? 1 : -1;
    boost = Math.min(boost + Math.abs(d) * 0.05, 6);
  });
  window.hpOnResize(measure);

  var canHover = window.matchMedia('(hover: hover)');
  sec.addEventListener('pointerenter', function (e) { if (e.pointerType === 'mouse' && canHover.matches) { hover = true; sync(); } });
  sec.addEventListener('pointerleave', function (e) { if (e.pointerType === 'mouse') { hover = false; sync(); } });
  sec.addEventListener('focusin', function (e) {
    focus = true;
    // de focusbare link zit in de eerste set: zet hem midden in beeld
    var r = rows[0], a = e.target.closest('a');
    if (a && r.w) {
      var mid = a.getBoundingClientRect().left - r.track.getBoundingClientRect().left + a.offsetWidth / 2;
      var want = mid - r.row.clientWidth / 2;
      r.x = ((want % r.w) + r.w) % r.w;
      skew = 0; place(r);
    }
    sync();
  });
  sec.addEventListener('focusout', function () { focus = false; sync(); });
  // tik-variant van hover: tik op de strook (niet op de link) pauzeert of hervat
  sec.addEventListener('pointerup', function (e) {
    if (e.pointerType === 'mouse' || e.target.closest('a')) return;
    tapped = !tapped; sync();
  });

  // 3500 telt op bij binnenkomst; in rust en zonder JS staat er 3500+
  var counts = sec.querySelectorAll('.hp-03-count');
  var counted = false;
  function count() {
    counted = true;
    if (!counts.length) return;
    var rest = counts[0].textContent, target = parseInt(rest, 10), suffix = rest.replace(/^\d+/, '');
    Array.prototype.forEach.call(counts, function (c) { c.style.minWidth = c.getBoundingClientRect().width + 'px'; });
    var t0 = 0, D = 1400;
    function step(t) {
      t0 = t0 || t;
      var p = Math.min((t - t0) / D, 1), e = 1 - Math.pow(1 - p, 3);
      var txt = p < 1 ? Math.round(target * e) + suffix : rest;
      Array.prototype.forEach.call(counts, function (c) { c.textContent = txt; });
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  measure();
  if (document.fonts) document.fonts.ready.then(measure);
  window.hpInView(sec, function () { start(); if (!counted) count(); }, stop, { threshold: 0.2 });
})();
