/* 05 TECHNISCHE FEATURES · 360°-beeld van de 2.0 met zones.
   Hover (muis) of tik op een feature draait en zoomt naar de zone en zet een ring op de plek; slepen en pijltjes draaien vrij.
   Tot de eerste interactie draait de sok mee met scroll. Frames laden pas als de sectie nadert: eerst de presets, dan de rest.
   Reduced motion: geen scrolldraai en geen uitrollen, presets springen, slepen werkt. */
(function () {
  'use strict';
  var root = document.querySelector('[data-hp="05"]');
  if (!root) return;

  var stage = root.querySelector('.hp-05-stage');
  var canvas = root.querySelector('.hp-05-stage__canvas');
  var ctx = canvas.getContext('2d');
  var mark = root.querySelector('.hp-05-mark');
  var markNo = root.querySelector('.hp-05-mark__no');
  var feats = Array.prototype.slice.call(root.querySelectorAll('.hp-05-feat'));
  var reduced = window.hpReduced();

  /* assets.json → frames360: 69 frames (elke 6e van 411), 1600×1600. Preset.frame is het originele framenummer. */
  var N = 69, SRC = 1600, STEP = 6;
  var PRESETS = {
    totaal: { frame: 0, zoom: 1, cx: 0.5, cy: 0.5 },
    hiel: { frame: 6, zoom: 1.75, cx: 0.62, cy: 0.62 },
    grip: { frame: 96, zoom: 1.6, cx: 0.5, cy: 0.68 },
    ademend: { frame: 300, zoom: 1.65, cx: 0.47, cy: 0.62 },
    teen: { frame: 336, zoom: 1.45, cx: 0.5, cy: 0.66 }
  };
  /* Feature → preset. mark: punt op de zone (fractie van het frame). turn: één rondgang, voor wat in de hele sok zit. */
  var FEATURES = {
    compressie: { preset: 'totaal', turn: true },
    coolmax: { preset: 'totaal', turn: true },
    ademend: { preset: 'ademend', mark: [0.39, 0.56] },
    naadloos: { preset: 'teen', mark: [0.47, 0.885] },
    hiel: { preset: 'hiel', mark: [0.755, 0.5] },
    grip: { preset: 'grip', mark: [0.5, 0.74] },
    cushioning: { preset: 'grip' }
  };

  /* Motion uit de tokens: --hp-ease en --hp-dur-3 */
  var cs = getComputedStyle(root);
  var DUR = parseFloat(cs.getPropertyValue('--hp-dur-3')) || 900;
  var bez = (cs.getPropertyValue('--hp-ease').match(/[\d.]+/g) || [0.2, 0.7, 0.1, 1]).map(Number);
  function ease(x) {
    if (x <= 0) return 0;
    if (x >= 1) return 1;
    function c(t, a, b) { var u = 1 - t; return 3 * u * u * t * a + 3 * u * t * t * b + t * t * t; }
    var lo = 0, hi = 1, t = x;
    for (var i = 0; i < 24; i++) { t = (lo + hi) / 2; if (c(t, bez[0], bez[2]) < x) lo = t; else hi = t; }
    return c(t, bez[1], bez[3]);
  }

  function mod(i) { return ((i % N) + N) % N; }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }

  /* ---------- frames ---------- */
  var frames = new Array(N);
  var requested = new Array(N);
  var tries = new Array(N);
  function src(i) { return 'f360/s' + ('00' + i * STEP).slice(-3) + '.webp'; }
  function nearest(i) {
    for (var d = 0; d <= N / 2; d++) {
      if (frames[mod(i + d)]) return frames[mod(i + d)];
      if (frames[mod(i - d)]) return frames[mod(i - d)];
    }
    return null;
  }
  function loadAll() {
    var order = [0];
    Object.keys(PRESETS).forEach(function (k) { var f = PRESETS[k].frame / STEP; if (order.indexOf(f) < 0) order.push(f); });
    for (var d = 1; d <= N / 2; d++) [d, N - d].forEach(function (f) { if (order.indexOf(f) < 0) order.push(f); });
    var next = 0, busy = 0;
    function pump() {
      while (busy < 4 && next < order.length) {
        var i = order[next++];
        if (requested[i]) continue;
        requested[i] = true; busy++;
        (function (i) {
          var im = new Image();
          im.decoding = 'async';
          im.onload = function () {
            var ready = im.decode ? im.decode() : Promise.resolve();
            ready.catch(function () {}).then(function () { frames[i] = im; busy--; requestDraw(); pump(); });
          };
          /* Mislukt een frame (drukke server), probeer het later nog twee keer; tot dan tekent nearest() het buurframe. */
          im.onerror = function () {
            busy--;
            tries[i] = (tries[i] || 0) + 1;
            if (tries[i] < 3) setTimeout(function () { requested[i] = false; order.push(i); pump(); }, 600 * tries[i]);
            pump();
          };
          im.src = src(i);
        })(i);
      }
    }
    pump();
  }

  /* ---------- tekenen ---------- */
  var st = { pos: 0, zoom: 1, cx: 0.5, cy: 0.5 };
  var cssW = 0, markOn = null, active = null, idle = true, live = false;
  function view() {
    var sw = 1 / st.zoom;
    return { sw: sw, x0: clamp(st.cx - sw / 2, 0, 1 - sw), y0: clamp(st.cy - sw / 2, 0, 1 - sw) };
  }
  function size() {
    var r = stage.getBoundingClientRect();
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    cssW = r.width;
    canvas.width = Math.round(r.width * dpr);
    canvas.height = Math.round(r.height * dpr);
    draw();
  }
  function draw() {
    var i = mod(Math.round(st.pos));
    var im = nearest(i);
    var v = view();
    if (im) {
      ctx.drawImage(im, v.x0 * SRC, v.y0 * SRC, v.sw * SRC, v.sw * SRC, 0, 0, canvas.width, canvas.height);
      if (!live) { live = true; stage.classList.add('is-live'); }
    }
    root.style.setProperty('--hp-05-turn', (i / N).toFixed(4));
    var deg = Math.round(i / N * 360);
    stage.setAttribute('aria-valuenow', deg);
    stage.setAttribute('aria-valuetext', deg + '°');
    root.classList.toggle('is-moved', !idle && (!!active || i !== 0 || st.zoom > 1.01));
    if (markOn) {
      mark.style.setProperty('--hp-05-mx', ((markOn[0] - v.x0) / v.sw * cssW).toFixed(1) + 'px');
      mark.style.setProperty('--hp-05-my', ((markOn[1] - v.y0) / v.sw * cssW).toFixed(1) + 'px');
    }
  }
  var drawRaf = 0;
  function requestDraw() {
    if (drawRaf) return;
    drawRaf = requestAnimationFrame(function () { drawRaf = 0; draw(); });
  }

  /* ---------- beweging ---------- */
  var raf = 0;
  function stop() { if (raf) cancelAnimationFrame(raf); raf = 0; }
  function settle() { st.pos = mod(Math.round(st.pos)); draw(); }
  function tween(to, dur, done) {
    stop();
    if (reduced || !dur) {
      st.pos = to.pos; st.zoom = to.zoom; st.cx = to.cx; st.cy = to.cy;
      settle(); if (done) done();
      return;
    }
    var from = { pos: st.pos, zoom: st.zoom, cx: st.cx, cy: st.cy };
    var t0 = performance.now();
    function step(now) {
      var e = ease((now - t0) / dur);
      st.pos = from.pos + (to.pos - from.pos) * e;
      st.zoom = from.zoom + (to.zoom - from.zoom) * e;
      st.cx = from.cx + (to.cx - from.cx) * e;
      st.cy = from.cy + (to.cy - from.cy) * e;
      draw();
      if (e < 1) { raf = requestAnimationFrame(step); } else { raf = 0; settle(); if (done) done(); }
    }
    raf = requestAnimationFrame(step);
  }
  function shortest(target) {
    var d = mod(target - st.pos);
    return d > N / 2 ? d - N : d;
  }

  /* ---------- features ---------- */
  function showMark(f, no) {
    markOn = f.mark || null;
    if (!markOn) return;
    markNo.textContent = no;
    draw();
    mark.classList.add('is-on');
  }
  function hideMark() { markOn = null; mark.classList.remove('is-on'); }
  function setActive(key) {
    active = key;
    root.classList.toggle('has-active', !!key);
    feats.forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.f === key)); });
  }
  function activate(btn) {
    var key = btn.dataset.f;
    idle = false;
    if (active === key) return;
    setActive(key);
    hideMark();
    var f = FEATURES[key], p = PRESETS[f.preset];
    var d = shortest(p.frame / STEP);
    if (f.turn && !reduced) d += d < 0 ? -N : N;
    tween({ pos: st.pos + d, zoom: p.zoom, cx: p.cx, cy: p.cy }, f.turn ? DUR * 1.5 : DUR, function () { if (active === key) showMark(f, btn.dataset.no); });
  }
  function reset() {
    idle = false;
    setActive(null);
    hideMark();
    var p = PRESETS.totaal;
    tween({ pos: st.pos + shortest(p.frame), zoom: p.zoom, cx: p.cx, cy: p.cy }, DUR);
  }
  feats.forEach(function (b) {
    b.addEventListener('pointerenter', function (e) { if (e.pointerType === 'mouse') activate(b); });
    b.addEventListener('click', function () { activate(b); });
  });
  root.querySelector('.hp-05-reset').addEventListener('click', reset);

  /* ---------- vrij draaien: slepen (horizontaal), pijltjes ---------- */
  function free() {
    idle = false;
    stop();
    if (active) { setActive(null); hideMark(); }
  }
  var drag = null;
  stage.addEventListener('pointerdown', function (e) {
    if (e.button !== 0) return;
    drag = { id: e.pointerId, x: e.clientX, y: e.clientY, axis: null, pos: st.pos, lx: e.clientX, lt: performance.now(), v: 0 };
  });
  stage.addEventListener('pointermove', function (e) {
    if (!drag || e.pointerId !== drag.id) return;
    if (!drag.axis) {
      var dx0 = e.clientX - drag.x, dy0 = e.clientY - drag.y;
      if (Math.abs(dx0) < 6 && Math.abs(dy0) < 6) return;
      if (Math.abs(dy0) > Math.abs(dx0)) { drag = null; return; }
      drag.axis = 'x';
      try { stage.setPointerCapture(e.pointerId); } catch (err) {}
      free();
      stage.classList.add('is-dragging');
      drag.x = e.clientX; drag.pos = st.pos;
    }
    var ppf = Math.max(4, cssW / 34);
    var now = performance.now();
    drag.v = -(e.clientX - drag.lx) / ppf / Math.max(8, now - drag.lt);
    drag.lx = e.clientX; drag.lt = now;
    st.pos = drag.pos - (e.clientX - drag.x) / ppf;
    requestDraw();
  });
  function end(e) {
    if (!drag || e.pointerId !== drag.id) return;
    var d = drag;
    drag = null;
    stage.classList.remove('is-dragging');
    if (d.axis !== 'x') return;
    if (reduced || Math.abs(d.v) < 0.004) { settle(); return; }
    var v = clamp(d.v, -0.12, 0.12), last = performance.now();
    function glide(now) {
      var dt = now - last; last = now;
      st.pos += v * dt;
      v *= Math.pow(0.93, dt / 16);
      draw();
      if (Math.abs(v) > 0.003) raf = requestAnimationFrame(glide); else { raf = 0; settle(); }
    }
    stop();
    raf = requestAnimationFrame(glide);
  }
  stage.addEventListener('pointerup', end);
  stage.addEventListener('pointercancel', end);
  stage.addEventListener('dragstart', function (e) { e.preventDefault(); });
  stage.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      free();
      st.pos = mod(Math.round(st.pos) + (e.key === 'ArrowRight' ? 1 : -1));
      draw();
    } else if (e.key === 'Home') {
      e.preventDefault();
      reset();
    }
  });

  /* ---------- scroll: tot de eerste interactie draait de sok een kwartslag mee ---------- */
  var inView = false;
  function onScroll() {
    if (!idle || !inView || reduced || raf) return;
    var r = stage.getBoundingClientRect();
    var vh = document.documentElement.clientHeight;
    var p = clamp((vh - r.top) / (vh + r.height), 0, 1);
    st.pos = (p - 0.5) * N * 0.5;
    requestDraw();
  }
  window.hpInView(stage, function () { inView = true; onScroll(); }, function () { inView = false; });
  window.hpOnScroll(onScroll);

  /* Frames pas laden als de sectie binnen ~een scherm komt */
  var loading = false;
  window.hpInView(root, function () { if (!loading) { loading = true; loadAll(); } }, null, { rootMargin: '100% 0px' });
  window.hpOnResize(size);
  size();
})();
