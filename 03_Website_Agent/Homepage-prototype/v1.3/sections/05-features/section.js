/* 05 TECHNISCHE FEATURES (1.2 ronde 2) · 360°-beeld van de 2.0 met acht zones.
   - Binnenscrollen: de sok draait één keer rond en landt op feature 1 (Maximale grip).
   - Daarna loopt hij zelf de acht zones langs (lijn van de actieve feature vult zich, 4,5 s per zone).
     Pauze zolang de muis boven model of lijst is, de focus in de sectie is of de sectie uit beeld is; elke eigen keuze (hover, tik, swipe, slepen) stopt de doorloop.
   - Mobiel: de features staan in een swipebare kaartenrij; swipen naar een kaart draait het model mee.
   - Hover (muis) of tik: vloeiende draai over de frames naar de zone (kortste weg, 600–900 ms, --hp-ease),
     zoom en middelpunt tweenen mee; opeenvolgende frames worden overgemengd, dus geen haperen.
   - Een genummerde marker staat op de zone en draait met het model mee (eenvoudig draaimodel rond een verticale as).
   - Slepen en pijltjes draaien vrij; de marker blijft meebewegen.
   Frames (137) laden pas als de sectie nadert, presets eerst. Reduced motion: geen rondgang, alles springt, slepen werkt. */
(function () {
  'use strict';
  var root = document.querySelector('[data-hp="05"]');
  if (!root) return;

  var stage = root.querySelector('.hp-05-stage');
  var canvas = root.querySelector('.hp-05-stage__canvas');
  var ctx = canvas.getContext('2d');
  var mark = root.querySelector('.hp-05-mark');
  var markNo = root.querySelector('.hp-05-mark__no');
  var list = root.querySelector('.hp-05-list');
  var feats = Array.prototype.slice.call(root.querySelectorAll('.hp-05-feat'));
  var reduced = window.hpReduced();

  /* assets.json → frames360: 137 frames (elke 3e van 411), 1600×1600. Preset.frame is het originele framenummer. */
  var N = 137, SRC = 1600, STEP = 3, ANG = Math.PI * 2 / N, AXIS = 0.5;
  var PRESETS = {
    totaal: { frame: 0, zoom: 1, cx: 0.5, cy: 0.5 },
    hiel: { frame: 6, zoom: 1.75, cx: 0.62, cy: 0.62 },
    grip: { frame: 96, zoom: 1.6, cx: 0.5, cy: 0.68 },
    ademend: { frame: 300, zoom: 1.65, cx: 0.47, cy: 0.62 },
    teen: { frame: 336, zoom: 1.45, cx: 0.5, cy: 0.66 },
    materialen: { frame: 0, zoom: 1.15, cx: 0.5, cy: 0.5 },
    /* Zelf gekozen (staan niet in assets.json, door Lars te bevestigen) */
    compressie: { frame: 264, zoom: 1.45, cx: 0.5, cy: 0.45 }, /* zijaanzicht: geribde band rond enkel en schacht */
    coolmax: { frame: 360, zoom: 1.5, cx: 0.5, cy: 0.4 },      /* vooraanzicht: het gebreide garen van de schacht */
    cushioning: { frame: 216, zoom: 1.5, cx: 0.5, cy: 0.68 }   /* schuin van achter-opzij: de zool met de dempingzones */
  };
  /* Feature → preset en markerpunt [x, y, diepte richting camera] in het presetframe (fractie van het frame). */
  var FEATURES = {
    grip: { preset: 'grip', mark: [0.5, 0.74, 0.1] },
    compressie: { preset: 'compressie', mark: [0.41, 0.43, 0.08] },
    hiel: { preset: 'hiel', mark: [0.755, 0.5, 0.04] },
    ademend: { preset: 'ademend', mark: [0.35, 0.6, 0.08] },
    coolmax: { preset: 'coolmax', mark: [0.49, 0.3, 0.1] },
    naadloos: { preset: 'teen', mark: [0.48, 0.88, 0.12] },
    cushioning: { preset: 'cushioning', mark: [0.46, 0.84, 0.06] },
    materialen: { preset: 'materialen', mark: [0.56, 0.5, 0.1] }
  };

  /* Motion uit de tokens */
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
  var frames = new Array(N), requested = new Array(N), tries = new Array(N), loadedCount = 0;
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
      while (busy < 6 && next < order.length) {
        var i = order[next++];
        if (requested[i]) continue;
        requested[i] = true; busy++;
        (function (i) {
          var im = new Image();
          im.decoding = 'async';
          im.onload = function () {
            var ready = im.decode ? im.decode() : Promise.resolve();
            busy--; pump();
            ready.catch(function () {}).then(function () { frames[i] = im; loadedCount++; requestDraw(); onFrames(); });
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
  var cssW = 0, active = null, idle = true, live = false;
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
  function blit(im, v, alpha) {
    ctx.globalAlpha = alpha;
    ctx.drawImage(im, v.x0 * SRC, v.y0 * SRC, v.sw * SRC, v.sw * SRC, 0, 0, canvas.width, canvas.height);
  }
  function draw() {
    var base = Math.floor(st.pos), frac = st.pos - base;
    var a = frames[mod(base)], b = frames[mod(base + 1)];
    var v = view();
    if (!a || frac > 0.5 && !b) a = nearest(mod(Math.round(st.pos)));
    if (a) {
      blit(a, v, 1);
      /* overmengen met het volgende frame: draaien loopt vloeiend, ook tussen twee opnameposities */
      if (b && frac > 0.02 && b !== a) blit(b, v, frac);
      ctx.globalAlpha = 1;
      if (!live) { live = true; stage.classList.add('is-live'); }
    }
    var i = mod(Math.round(st.pos));
    root.style.setProperty('--hp-05-turn', (i / N).toFixed(4));
    var deg = Math.round(i / N * 360) % 360;
    stage.setAttribute('aria-valuenow', deg);
    stage.setAttribute('aria-valuetext', deg + '°');
    root.classList.toggle('is-moved', !idle && (!!active || i !== 0 || st.zoom > 1.01));
    placeMark(v);
  }
  /* Marker: punt draait om een verticale as (x = AXIS) mee met het model; achterkant gedimd, buiten beeld weg. */
  function placeMark(v) {
    if (!active) return;
    var f = FEATURES[active], m = f.mark;
    var th = (st.pos - PRESETS[f.preset].frame / STEP) * ANG;
    var px = m[0] - AXIS, pz = m[2];
    var x = AXIS + px * Math.cos(th) - pz * Math.sin(th);
    var z = px * Math.sin(th) + pz * Math.cos(th);
    var sx = (x - v.x0) / v.sw, sy = (m[1] - v.y0) / v.sw;
    var inside = sx > 0.04 && sx < 0.96 && sy > 0.04 && sy < 0.96;
    mark.style.setProperty('--hp-05-mx', (sx * cssW).toFixed(1) + 'px');
    mark.style.setProperty('--hp-05-my', (sy * cssW).toFixed(1) + 'px');
    mark.style.setProperty('--hp-05-mo', inside ? (z >= -0.01 ? '1' : '0.35') : '0');
    mark.style.setProperty('--hp-05-ms', z >= -0.01 ? '1' : '0.8');
  }
  var drawRaf = 0;
  function requestDraw() {
    if (drawRaf) return;
    drawRaf = requestAnimationFrame(function () { drawRaf = 0; draw(); });
  }

  /* ---------- tween: start altijd vanaf de huidige stand ---------- */
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
      var k = (now - t0) / dur, e = ease(k);
      st.pos = from.pos + (to.pos - from.pos) * e;
      st.zoom = from.zoom + (to.zoom - from.zoom) * e;
      st.cx = from.cx + (to.cx - from.cx) * e;
      st.cy = from.cy + (to.cy - from.cy) * e;
      draw();
      if (k < 1) { raf = requestAnimationFrame(step); return; }
      raf = 0;
      root.setAttribute('data-hp-05-tween', String(Math.round(now - t0)));
      settle();
      if (done) done();
    }
    raf = requestAnimationFrame(step);
  }
  function shortest(target) {
    var d = mod(target - st.pos);
    return d > N / 2 ? d - N : d;
  }
  /* 600 ms voor een kleine draai, tot --hp-dur-3 (900 ms) voor een halve slag */
  function durFor(d) { return DUR * (2 / 3 + Math.min(1, Math.abs(d) / (N / 2)) / 3); }

  /* ---------- features ---------- */
  function setActive(key) {
    active = key;
    root.classList.toggle('has-active', !!key);
    feats.forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.f === key)); });
    if (key) {
      markNo.textContent = root.querySelector('.hp-05-feat[data-f="' + key + '"]').dataset.no;
      mark.classList.add('is-on');
      paint(key);
    } else {
      mark.classList.remove('is-on');
    }
  }
  function goTo(key, spin, done) {
    var p = PRESETS[FEATURES[key].preset];
    var d = shortest(p.frame / STEP);
    var dur = durFor(d);
    if (spin && !reduced) { d += d < 0 ? -N : N; dur = DUR * 2; }
    setActive(key);
    showCard(key);
    tween({ pos: st.pos + d, zoom: p.zoom, cx: p.cx, cy: p.cy }, dur, done);
  }
  function activate(key) {
    idle = false;
    stopAuto();
    if (active === key) return;
    goTo(key, false);
  }
  function reset() {
    idle = false;
    stopAuto();
    setActive(null);
    var p = PRESETS.totaal;
    var d = shortest(p.frame);
    tween({ pos: st.pos + d, zoom: p.zoom, cx: p.cx, cy: p.cy }, durFor(d));
  }
  /* Hover-intentie: pas na 70 ms, zodat langs de lijst bewegen het model niet laat trippen */
  var hoverT = 0;
  feats.forEach(function (b) {
    b.addEventListener('pointerenter', function (e) {
      if (e.pointerType !== 'mouse') return;
      clearTimeout(hoverT);
      hoverT = setTimeout(function () { activate(b.dataset.f); }, 70);
    });
    b.addEventListener('pointerleave', function () { clearTimeout(hoverT); });
    b.addEventListener('click', function () { clearTimeout(hoverT); rowUser = false; activate(b.dataset.f); });
  });
  root.querySelector('.hp-05-reset').addEventListener('click', reset);

  /* ---------- vrij draaien: slepen (horizontaal), pijltjes; actieve marker draait mee ---------- */
  function free() { idle = false; stopAuto(); stop(); }
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
    var ppf = Math.max(2, cssW / 68);
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
    if (reduced || Math.abs(d.v) < 0.008) { settle(); return; }
    var v = clamp(d.v, -0.24, 0.24), last = performance.now();
    function glide(now) {
      var dt = now - last; last = now;
      st.pos += v * dt;
      v *= Math.pow(0.93, dt / 16);
      draw();
      if (Math.abs(v) > 0.006) raf = requestAnimationFrame(glide); else { raf = 0; settle(); }
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
      st.pos = mod(Math.round(st.pos) + (e.key === 'ArrowRight' ? 2 : -2));
      draw();
    } else if (e.key === 'Home') {
      e.preventDefault();
      reset();
    }
  });

  /* ---------- mobiel: kaartenrij volgt de actieve feature, en swipen kiest een feature ---------- */
  var progScroll = false, rowTimer = 0, rowUser = false;
  function isRow() { return list.scrollWidth > list.clientWidth + 2; }
  function showCard(key) {
    if (!isRow()) return;
    var li = root.querySelector('.hp-05-feat[data-f="' + key + '"]').parentNode;
    var left = li.offsetLeft - parseFloat(getComputedStyle(list).paddingLeft);
    if (Math.abs(list.scrollLeft - clamp(left, 0, list.scrollWidth - list.clientWidth)) < 2) return;
    progScroll = !rowUser;
    list.scrollTo({ left: left, behavior: reduced ? 'auto' : 'smooth' });
  }
  function rowSettled() {
    if (progScroll) { progScroll = false; return; }
    if (!rowUser || !isRow()) return;
    var pad = parseFloat(getComputedStyle(list).paddingLeft), best = null, bd = Infinity;
    feats.forEach(function (b) {
      var d = Math.abs(b.parentNode.offsetLeft - pad - list.scrollLeft);
      if (d < bd) { bd = d; best = b; }
    });
    rowUser = false;
    if (best) activate(best.dataset.f);
  }
  list.addEventListener('pointerdown', function (e) { if (e.pointerType !== 'mouse') { rowUser = true; progScroll = false; stopAuto(); } });
  list.addEventListener('scroll', function () { clearTimeout(rowTimer); rowTimer = setTimeout(rowSettled, 140); }, { passive: true });

  /* ---------- automatische doorloop: CSS-lijn bepaalt het tempo (animationend), pauzeert met .is-hold ---------- */
  var autoStopped = reduced, holds = { hover: false, focus: false, out: true };
  function hold() { root.classList.toggle('is-hold', holds.hover || holds.focus || holds.out); }
  function startAuto() { if (!autoStopped) root.classList.add('is-auto'); }
  function stopAuto() { autoStopped = true; root.classList.remove('is-auto'); }
  root.addEventListener('animationend', function (e) {
    if (e.animationName !== 'hp-05-fill' || !root.classList.contains('is-auto') || !active) return;
    var i = feats.findIndex(function (b) { return b.dataset.f === active; });
    goTo(feats[(i + 1) % feats.length].dataset.f, false);
  });
  /* pauze bij muis boven het model of de lijst (niet boven de hele sectie: daar rust de cursor vaak tijdens het scrollen) */
  [stage, list].forEach(function (el) {
    el.addEventListener('pointerenter', function (e) { if (e.pointerType === 'mouse') { holds.hover = true; hold(); } });
    el.addEventListener('pointerleave', function () { holds.hover = false; hold(); });
  });
  root.addEventListener('focusin', function () { holds.focus = true; hold(); });
  root.addEventListener('focusout', function (e) { if (!root.contains(e.relatedTarget)) { holds.focus = false; hold(); } });
  window.hpInView(root, function () { holds.out = false; hold(); }, function () { holds.out = true; hold(); });
  hold();

  /* ---------- binnenscrollen: één rondgang, landen op feature 1 ---------- */
  var introWanted = false, introDone = false, introTimer = 0;
  function runIntro() {
    if (introDone || !idle) return;
    introDone = true;
    clearTimeout(introTimer);
    goTo(feats[0].dataset.f, true, startAuto);
    idle = false;
  }
  function onFrames() {
    if (introWanted && loadedCount >= Math.round(N * 0.85)) runIntro();
  }
  window.hpInView(stage, function (e) {
    if (introWanted || (e && e.intersectionRatio < 0.4)) return;
    introWanted = true;
    if (reduced) { runIntro(); return; }
    onFrames();
    introTimer = setTimeout(runIntro, 1500);
  }, null, { threshold: [0.45] });

  /* Frames pas laden als de sectie binnen ~anderhalf scherm komt */
  var loading = false;
  window.hpInView(root, function () { if (!loading) { loading = true; loadAll(); } }, null, { rootMargin: '150% 0px' });
  window.hpOnResize(size);
  size();

  /* ---------- 1.3: de scroll-film. Nummer, reuzennaam en uitleg volgen de actieve zone;
     zolang het podium vastzit kiest de scroll de zone (acht gelijke stukken). ---------- */
  function paint(key) {
    var b = root.querySelector('.hp-05-feat[data-f="' + key + '"]');
    var giant = root.querySelector('.hp-05-giant'), giantIn = root.querySelector('.hp-05-giant__in');
    var name = b.querySelector('.hp-05-feat__name').textContent;
    if (giantIn.textContent !== name) {
      giantIn.textContent = name;
      giant.classList.remove('is-swap');
      void giant.offsetWidth;
      giant.classList.add('is-swap');
    }
    root.querySelector('.hp-05-count__no').textContent = ('0' + b.dataset.no).slice(-2);
    root.querySelector('.hp-05-detail').textContent = b.querySelector('.hp-05-feat__text').textContent;
  }
  if (!reduced && document.documentElement.classList.contains('hp-motion')) {
    var scrolled = -1, filmOn = false;
    var film = function () {
      var vh = window.innerHeight, r = root.getBoundingClientRect();
      var t = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height - vh)));
      var x = t * feats.length, i = Math.min(feats.length - 1, Math.floor(x));
      root.style.setProperty('--hp-05-t', t.toFixed(4));
      root.style.setProperty('--hp-05-sub', (x - i).toFixed(3));
      if (r.top > 2 || r.bottom < vh - 2 || i === scrolled) return;
      scrolled = i;
      idle = false;
      introDone = true;
      stopAuto();
      if (active !== feats[i].dataset.f) goTo(feats[i].dataset.f, i === 0 && active === null);
    };
    window.hpInView(root, function () { filmOn = true; film(); }, function () { filmOn = false; });
    window.hpOnScroll(function () { if (filmOn) film(); });
  }
})();
