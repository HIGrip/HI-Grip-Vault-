/* 04 SOCIAL PROOF (1.2) · oneindige fotorij met autoloop, slepen via hpDrag en inzoomen op de plek.
   Opbouw: viewport > belt (lus-offset) > track (hpDrag). De set staat drie keer in de track (origineel in het midden);
   na elke sleep wordt de hpDrag-verschuiving in de lus-offset gevouwen, zodat er nooit een begin of eind is. */
(function () {
  'use strict';
  var root = document.querySelector('[data-hp="04"]');
  if (!root) return;

  var viewport = root.querySelector('.hp-04-viewport');
  var belt = root.querySelector('.hp-04-belt');
  var track = root.querySelector('.hp-04-track');
  var originals = Array.prototype.slice.call(track.children);
  var n = originals.length;
  var reduced = window.hpReduced();

  /* Kopieën ervoor en erna: decoratief, niet focusbaar, niet voorgelezen. */
  function cloneSet() {
    var frag = document.createDocumentFragment();
    originals.forEach(function (li) {
      var c = li.cloneNode(true);
      c.setAttribute('aria-hidden', 'true');
      c.classList.add('is-clone');
      var b = c.querySelector('.hp-04-photo');
      b.tabIndex = -1;
      b.addEventListener('mousedown', function (e) { e.preventDefault(); });
      c.querySelector('img').loading = 'eager';
      frag.appendChild(c);
    });
    return frag;
  }
  track.insertBefore(cloneSet(), track.firstChild);
  track.appendChild(cloneSet());
  var items = Array.prototype.slice.call(track.children);
  var photos = originals.map(function (li) { return li.querySelector('.hp-04-photo'); });
  var allBtns = items.map(function (li) { return li.querySelector('.hp-04-photo'); });

  /* ---------- maten ---------- */
  var setW = 1, step = 1, inset = 0, vw = 1;
  function measure() {
    vw = viewport.clientWidth;
    setW = items[n].offsetLeft - items[0].offsetLeft || 1;
    step = items[1].offsetLeft - items[0].offsetLeft || 1;
    inset = root.querySelector('.hp-04-h2').getBoundingClientRect().left - viewport.getBoundingClientRect().left;
  }

  /* ---------- lus ---------- */
  var offset = 0;                 // hoeveel de belt naar links staat; 0..setW (of net onder 0 bij Tab-focus)
  var speed = 0;                  // px per seconde, gezet in measure-afhankelijke setSpeed
  var pause = { hover: false, focus: false, drag: false, zoom: false, touch: false, out: true };
  function paused() { return reduced || pause.hover || pause.focus || pause.drag || pause.zoom || pause.touch || pause.out; }
  function setSpeed() { speed = vw < 769 ? 28 : 42; }
  function wrap() {
    if (offset >= setW) offset -= setW;
    if (offset < -setW) offset += setW;
  }
  function paintBelt() { belt.style.transform = 'translate3d(' + (-offset).toFixed(2) + 'px,0,0)'; }

  /* hpDrag op de track; start op de eerste originele foto (midden van de drie sets). */
  var dragX0 = 0;
  var drag = window.hpDrag(viewport, track, {
    align: 'start',
    start: n,
    onChange: function () { if (reduced) requestAnimationFrame(fold); },
    onDragStart: function () { pause.drag = true; allBtns.forEach(function (b) { b.classList.remove('is-press'); }); },
    onDragEnd: function () { if (reduced) fold(); else setTimeout(fold, 650); }
  });
  function trackX() {
    var m = /translate3d\((-?[\d.]+)px/.exec(track.style.transform || '');
    return m ? parseFloat(m[1]) : 0;
  }
  function liveTrackX() {
    var t = getComputedStyle(track).transform;
    if (!t || t === 'none') return 0;
    var m = t.match(/matrix(3d)?\(([^)]+)\)/);
    if (!m) return 0;
    var v = m[2].split(',');
    return parseFloat(m[1] ? v[12] : v[4]) || 0;
  }
  /* Vouw de sleepverschuiving in de lus-offset en zet hpDrag terug op zijn startpunt: beeld blijft gelijk. */
  function fold() {
    if (viewport.classList.contains('is-dragging')) return;
    var x = trackX();
    var d = x - dragX0;
    if (Math.abs(d) > 0.5 || drag.index() !== n) {
      offset -= d;
      wrap();
      paintBelt();
      drag.go(n, true);
    }
    pause.drag = false;
  }
  track.addEventListener('transitionend', function (e) {
    if (e.target === track && e.propertyName === 'transform') fold();
  });

  /* ---------- beweging per frame: lus + positie-afhankelijke schaal en parallax ---------- */
  var figs = items.map(function (li) { return li.querySelector('.hp-04-fig'); });
  var imgs = items.map(function (li) { return li.querySelector('.hp-04-img'); });
  var lefts = [], itemW = 1;
  function measureItems() {
    lefts = items.map(function (li) { return li.offsetLeft; });
    itemW = items[0].offsetWidth || 1;
  }
  function paintItems() {
    if (reduced) return;
    var base = -offset + liveTrackX();
    var half = vw / 2;
    for (var i = 0; i < items.length; i++) {
      var c = base + lefts[i] + itemW / 2;
      if (c < -itemW || c > vw + itemW) continue;
      var p = (c - half) / half;                       // -1 links, 0 midden, 1 rechts
      var a = Math.min(1, Math.abs(p));
      figs[i].style.setProperty('--hp-04-s', (1 - 0.06 * a * a).toFixed(4));
      imgs[i].style.setProperty('--hp-04-px', (-p * 5).toFixed(2) + '%');
    }
  }
  var last = 0, raf = 0;
  function frame(t) {
    raf = 0;
    var dt = last ? Math.min(64, t - last) : 16;
    last = t;
    if (!paused()) { offset += speed * dt / 1000; wrap(); paintBelt(); }
    paintItems();
    if (!pause.out) raf = requestAnimationFrame(frame);
  }
  function startLoop() { if (!raf && !reduced) { last = 0; raf = requestAnimationFrame(frame); } }

  function layout() {
    measure();
    measureItems();
    setSpeed();
    dragX0 = -(lefts[n]);
    drag.go(n, true);
    dragX0 = trackX();
    wrap();
    paintBelt();
    paintItems();
  }
  layout();
  offset = -inset;            // in rust staat de eerste foto op de lijn van de kop; links steekt de lus al uit
  paintBelt();
  paintItems();
  window.hpOnResize(function () { unzoom(false); layout(); });

  window.hpInView(root, function () {
    pause.out = false;
    originals.forEach(function (li) { li.querySelector('img').loading = 'eager'; });
    startLoop();
  }, function () {
    pause.out = true;
    unzoom(false);
  }, { rootMargin: '200px 0px' });

  /* ---------- pauze: hover, focus (toetsenbord), aanraken ---------- */
  viewport.addEventListener('pointerenter', function (e) { if (e.pointerType === 'mouse') pause.hover = true; });
  viewport.addEventListener('pointerleave', function (e) { if (e.pointerType === 'mouse') pause.hover = false; });
  viewport.addEventListener('pointerdown', function (e) { if (e.pointerType !== 'mouse') pause.touch = true; });
  function touchEnd(e) {
    if (e.pointerType === 'mouse') return;
    setTimeout(function () { pause.touch = false; }, 1200);
  }
  viewport.addEventListener('pointerup', touchEnd);
  viewport.addEventListener('pointercancel', touchEnd);
  root.addEventListener('focusin', function (e) {
    pause.focus = viewport.contains(e.target) && e.target.matches(':focus-visible');
  });
  root.addEventListener('focusout', function (e) {
    if (!viewport.contains(e.relatedTarget)) pause.focus = false;
    if (zoomed && !(e.relatedTarget && zoomed.contains(e.relatedTarget)) && e.relatedTarget !== zoomed) unzoom(false);
  });

  /* Tab naar een foto buiten beeld: zet de lus zo dat hij op de lijn van de kop staat (geen native scroll). */
  photos.forEach(function (btn, k) {
    btn.addEventListener('focus', function () {
      var r = btn.getBoundingClientRect();
      var v = viewport.getBoundingClientRect();
      if (r.left >= v.left && r.right <= v.right) return;
      fold();
      offset = k * step - inset;
      paintBelt();
      paintItems();
    });
  });

  /* Tik-variant van hover. */
  allBtns.forEach(function (btn) {
    btn.addEventListener('pointerdown', function () { btn.classList.add('is-press'); });
    ['pointerup', 'pointercancel', 'pointerleave'].forEach(function (t) {
      btn.addEventListener(t, function () { btn.classList.remove('is-press'); });
    });
  });

  /* ---------- inzoomen op de plek ---------- */
  var zoomed = null;
  function zoom(btn) {
    var li = btn.closest('.hp-04-item');
    var fig = li.querySelector('.hp-04-fig');
    var s = parseFloat(fig.style.getPropertyValue('--hp-04-s')) || 1;
    var r = btn.getBoundingClientRect();
    var v = viewport.getBoundingClientRect();
    var target = Math.min(1.5, (vw - 2 * Math.max(16, inset)) / r.width);
    var dx = (v.left + vw / 2) - (r.left + r.width / 2);
    btn.style.setProperty('--hp-04-zx', (dx / s).toFixed(1) + 'px');
    btn.style.setProperty('--hp-04-zs', (target).toFixed(3));
    btn.setAttribute('aria-pressed', 'true');
    li.classList.add('is-zoomed');
    root.classList.add('is-zoomed');
    pause.zoom = true;
    zoomed = btn;
    btn.focus({ preventScroll: true });
  }
  function unzoom(refocus) {
    if (!zoomed) return;
    var btn = zoomed;
    zoomed = null;
    btn.style.removeProperty('--hp-04-zx');
    btn.style.removeProperty('--hp-04-zs');
    btn.setAttribute('aria-pressed', 'false');
    root.classList.remove('is-zoomed');
    var li = btn.closest('.hp-04-item');
    /* z-index pas weghalen als de foto terug is, anders schuift hij onder zijn buren door */
    setTimeout(function () { if (zoomed !== btn) li.classList.remove('is-zoomed'); }, reduced ? 0 : 500);
    pause.zoom = false;
    if (refocus) btn.focus({ preventScroll: true });
  }

  /* Eén klikhandler voor de sectie: ingezoomd sluit elke klik (ook op de foto zelf); anders zoomt een foto in.
     Een sleep komt hier niet aan: hpDrag blokkeert die klik in de capture-fase. */
  root.addEventListener('click', function (e) {
    var btn = e.target.closest('.hp-04-photo');
    if (zoomed) { var was = zoomed; unzoom(false); if (btn === was || !btn) was.focus({ preventScroll: true }); return; }
    if (!btn) return;
    /* Een kopie aangeklikt: schuif de lus precies één set, zodat het origineel op dezelfde plek staat, en zoom dat in. */
    fold();
    var i = allBtns.indexOf(btn);
    if (i < n) offset += setW;
    else if (i >= 2 * n) offset -= setW;
    if (i < n || i >= 2 * n) { paintBelt(); paintItems(); }
    zoom(photos[i % n]);
  });
  root.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && zoomed) { e.preventDefault(); unzoom(true); }
  });
})();
