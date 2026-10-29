/* HÏ Grip homepage 1.36 · Shopify. Gebouwd met shopify/build.py; niet met de hand bewerken. */
(function () {
if (window.__hpHome) return;
window.__hpHome = true;
/* HÏ Grip homepage-prototype · base.js
   Gedeelde helpers. Secties gebruiken deze in plaats van eigen versies en registreren zelf geen globale listeners.
   - hpDrag(viewport, track, opts)  slepen/swipen met snap, pijltjestoetsen; een swipe telt niet als klik
   - hpReveal(el, opts)             zet .is-in als el in beeld komt; pagina is compleet in rust (geen opacity:0-wachtstanden)
   - hpInView(el, onEnter, onLeave) voor lussen die alleen in beeld mogen lopen
   - hpLightbox.open(items, index, trigger)  Esc en klik buiten sluiten, focus-trap, scroll-lock, nooit wegnavigeren
   - hpOnResize(fn)                 één gedeelde resize-listener
   - hpOnScroll(fn)                 één gedeelde scroll-listener (passief, per frame gebundeld)
   - hpReduced()                    true bij prefers-reduced-motion */
(function () {
  'use strict';
  /* Shopify: het script staat in elke HÏ-sectie; alleen de eerste keer telt. */
  if (window.hpRegister) return;
  var root = document.documentElement;
  var mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  function hpReduced() { return mqReduce.matches; }

  /* Motion staat pas aan als IO bestaat en de bezoeker geen reduced motion vraagt. Zonder deze klasse ziet alles er uit als de eindstand. */
  if ('IntersectionObserver' in window && !hpReduced()) root.classList.add('hp-motion');

  /* ---------- resize ---------- */
  var resizeFns = [];
  var resizeRaf = 0;
  window.addEventListener('resize', function () {
    if (resizeRaf) return;
    resizeRaf = requestAnimationFrame(function () { resizeRaf = 0; resizeFns.forEach(function (fn) { fn(); }); });
  });
  function hpOnResize(fn) { resizeFns.push(fn); }

  /* ---------- scroll (één gedeelde passieve listener, rAF-gebundeld) ---------- */
  var scrollFns = [];
  var scrollRaf = 0;
  /* Shopify (Horizon): vanaf 990 px scrolt .page-wrapper in plaats van het venster. Een capture-listener op document
     vangt beide (een element-scroll bubbelt niet, maar loopt wel door de capture-fase). */
  document.addEventListener('scroll', function () {
    if (scrollRaf) return;
    scrollRaf = requestAnimationFrame(function () { scrollRaf = 0; scrollFns.forEach(function (fn) { fn(); }); });
  }, { passive: true, capture: true });
  function hpOnScroll(fn) { scrollFns.push(fn); }
  /* scrollpositie van de pagina, ook als .page-wrapper de scroller is */
  var pageWrap = null;
  function hpScrollY() {
    if (pageWrap === null) pageWrap = document.querySelector('.page-wrapper') || false;
    if (pageWrap && pageWrap.scrollHeight > pageWrap.clientHeight + 1) {
      var o = getComputedStyle(pageWrap).overflowY;
      if (o === 'auto' || o === 'scroll') return pageWrap.scrollTop;
    }
    return window.scrollY;
  }

  /* ---------- reveal ---------- */
  var revealIO = null;
  var revealSet = [];
  function hpReveal(el, opts) {
    opts = opts || {};
    if (!el) return;
    if (!root.classList.contains('hp-motion')) { el.classList.add('is-in'); return; }
    if (!revealIO) {
      revealIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          e.target.classList.add('is-in');
          revealIO.unobserve(e.target);
        });
      }, { rootMargin: opts.rootMargin || '0px 0px -12% 0px', threshold: 0 });
    }
    revealSet.push(el);
    revealIO.observe(el);
  }
  /* Vangnet: als een observer om wat voor reden niet vuurt, staat alles na 2,5 s alsnog in de eindstand. */
  window.addEventListener('load', function () {
    setTimeout(function () { revealSet.forEach(function (el) { el.classList.add('is-in'); }); }, 2500);
  });

  function hpInView(el, onEnter, onLeave, opts) {
    if (!('IntersectionObserver' in window)) { onEnter && onEnter(); return function () {}; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { onEnter && onEnter(e); } else { onLeave && onLeave(e); }
      });
    }, { rootMargin: (opts && opts.rootMargin) || '0px', threshold: (opts && opts.threshold) || 0 });
    io.observe(el);
    return function () { io.disconnect(); };
  }

  /* ---------- drag ----------
     viewport: element met overflow:hidden (krijgt touch-action:pan-y en tabindex=0)
     track:    het element dat verschuift (transform), met de items als kinderen
     opts: { items: selector (default ':scope > *'), align: 'start'|'center', loop: false,
             onChange(index), onDragStart(), onDragEnd() }
     Geeft terug: { go(i, instant), next(), prev(), index(), refresh(), destroy() } */
  function hpDrag(viewport, track, opts) {
    opts = opts || {};
    var align = opts.align || 'start';
    var items = [];
    var stops = [];
    var minX = 0, maxX = 0;
    var x = 0, idx = 0;
    var dragging = false, moved = false, startX = 0, startY = 0, startPos = 0, lastX = 0, lastT = 0, vel = 0, pid = null, axis = null;
    var THRESH = 6;

    viewport.style.touchAction = 'pan-y';
    if (!viewport.hasAttribute('tabindex')) viewport.setAttribute('tabindex', '0');
    track.style.willChange = 'transform';

    function measure() {
      items = Array.prototype.slice.call(track.querySelectorAll(opts.items || ':scope > *'));
      var vw = viewport.clientWidth;
      var trackW = track.scrollWidth;
      stops = items.map(function (it) {
        var left = it.offsetLeft, w = it.offsetWidth;
        return align === 'center' ? -(left + w / 2 - vw / 2) : -left;
      });
      if (align === 'center') {
        maxX = stops[0] || 0; minX = stops[stops.length - 1] || 0;
      } else {
        maxX = 0; minX = Math.min(0, vw - trackW);
        stops = stops.map(function (s) { return Math.max(minX, s); });
      }
    }
    function apply(animate) {
      track.style.transition = animate && !hpReduced() ? 'transform var(--hp-dur-2) var(--hp-ease)' : 'none';
      track.style.transform = 'translate3d(' + x + 'px,0,0)';
    }
    function nearest(pos) {
      var best = 0, d = Infinity;
      stops.forEach(function (s, i) { var dd = Math.abs(s - pos); if (dd < d) { d = dd; best = i; } });
      return best;
    }
    function go(i, instant) {
      measure();
      var n = items.length;
      if (!n) return;
      i = opts.loop ? ((i % n) + n) % n : Math.max(0, Math.min(n - 1, i));
      var changed = i !== idx;
      idx = i;
      x = stops[i];
      apply(!instant);
      if (changed && opts.onChange) opts.onChange(idx);
    }

    function onDown(e) {
      if (e.button !== undefined && e.button !== 0) return;
      measure();
      dragging = true; moved = false; axis = null;
      startX = lastX = e.clientX; startY = e.clientY; startPos = x; lastT = performance.now(); vel = 0; pid = e.pointerId;
      track.style.transition = 'none';
    }
    function onMove(e) {
      if (!dragging || e.pointerId !== pid) return;
      var dx = e.clientX - startX, dy = e.clientY - startY;
      if (!axis) {
        if (Math.abs(dx) < THRESH && Math.abs(dy) < THRESH) return;
        axis = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
        if (axis === 'y') { dragging = false; return; }
        moved = true;
        try { viewport.setPointerCapture(pid); } catch (err) {}
        viewport.classList.add('is-dragging');
        if (opts.onDragStart) opts.onDragStart();
      }
      var now = performance.now();
      vel = (e.clientX - lastX) / Math.max(8, now - lastT);
      lastX = e.clientX; lastT = now;
      var next = startPos + dx;
      if (next > maxX) next = maxX + (next - maxX) * 0.35;
      if (next < minX) next = minX + (next - minX) * 0.35;
      x = next;
      track.style.transform = 'translate3d(' + x + 'px,0,0)';
    }
    function onUp(e) {
      if (e.pointerId !== pid) return;
      var wasMoved = moved;
      dragging = false; pid = null;
      viewport.classList.remove('is-dragging');
      if (!wasMoved) return;
      var projected = x + vel * 180;
      var target = nearest(projected);
      if (target === idx && Math.abs(vel) > 0.35) target = idx + (vel < 0 ? 1 : -1);
      go(target);
      if (opts.onDragEnd) opts.onDragEnd();
    }
    /* Een sleepbeweging mag geen klik worden: blokkeer de eerstvolgende click in de capture-fase. */
    function onClickCapture(e) {
      if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; }
    }
    function onKey(e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); go(idx + 1); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); go(idx - 1); }
      else if (e.key === 'Home') { e.preventDefault(); go(0); }
      else if (e.key === 'End') { e.preventDefault(); go(items.length - 1); }
    }
    function onDragStartNative(e) { e.preventDefault(); }

    viewport.addEventListener('pointerdown', onDown);
    viewport.addEventListener('pointermove', onMove);
    viewport.addEventListener('pointerup', onUp);
    viewport.addEventListener('pointercancel', onUp);
    viewport.addEventListener('click', onClickCapture, true);
    viewport.addEventListener('keydown', onKey);
    viewport.addEventListener('dragstart', onDragStartNative);
    hpOnResize(function () { go(idx, true); });

    measure();
    go(opts.start || 0, true);

    return {
      go: go,
      next: function () { go(idx + 1); },
      prev: function () { go(idx - 1); },
      index: function () { return idx; },
      count: function () { return items.length; },
      refresh: function () { go(idx, true); },
      destroy: function () {
        viewport.removeEventListener('pointerdown', onDown);
        viewport.removeEventListener('pointermove', onMove);
        viewport.removeEventListener('pointerup', onUp);
        viewport.removeEventListener('pointercancel', onUp);
        viewport.removeEventListener('click', onClickCapture, true);
        viewport.removeEventListener('keydown', onKey);
        viewport.removeEventListener('dragstart', onDragStartNative);
      }
    };
  }

  /* ---------- lightbox ----------
     items: [{ src, srcset?, alt, caption?, w?, h? }], index: start, trigger: element dat focus terugkrijgt.
     labels: { close, prev, next, count } uit copy.json van de aanroepende sectie. */
  var lb = null;
  function chev(dir) {
    var d = dir === 'l' ? 'M9 2.5 4.5 7 9 11.5' : dir === 'r' ? 'M5 2.5 9.5 7 5 11.5' : 'M3 3l8 8M11 3l-8 8';
    return '<svg viewBox="0 0 14 14" aria-hidden="true"><path d="' + d + '" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>';
  }
  function buildLightbox() {
    var d = document.createElement('dialog');
    d.className = 'hp-lightbox';
    d.innerHTML =
      '<figure class="hp-lightbox__fig"><img class="hp-lightbox__img" alt=""><figcaption class="hp-lightbox__cap"></figcaption></figure>' +
      '<button type="button" class="hp-lightbox__btn hp-lightbox__close">' + chev('x') + '</button>' +
      '<button type="button" class="hp-lightbox__btn hp-lightbox__prev">' + chev('l') + '</button>' +
      '<button type="button" class="hp-lightbox__btn hp-lightbox__next">' + chev('r') + '</button>';
    document.body.appendChild(d);
    var state = { d: d, img: d.querySelector('img'), cap: d.querySelector('figcaption'), close: d.querySelector('.hp-lightbox__close'), prev: d.querySelector('.hp-lightbox__prev'), next: d.querySelector('.hp-lightbox__next'), items: [], i: 0, trigger: null, labels: {} };
    function shut() { if (d.open) d.close(); }
    d.addEventListener('close', function () {
      root.classList.remove('hp-lock');
      if (state.trigger && document.contains(state.trigger)) state.trigger.focus({ preventScroll: true });
    });
    d.addEventListener('cancel', function (e) { e.preventDefault(); shut(); });
    d.addEventListener('click', function (e) { if (e.target === d) shut(); });
    state.close.addEventListener('click', shut);
    state.prev.addEventListener('click', function () { show(state.i - 1); });
    state.next.addEventListener('click', function () { show(state.i + 1); });
    d.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); show(state.i + 1); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); show(state.i - 1); }
    });
    function show(i) {
      var n = state.items.length;
      state.i = ((i % n) + n) % n;
      var it = state.items[state.i];
      state.img.src = it.src;
      if (it.srcset) state.img.srcset = it.srcset; else state.img.removeAttribute('srcset');
      state.img.alt = it.alt || '';
      if (it.w && it.h) { state.img.width = it.w; state.img.height = it.h; }
      var count = state.labels.count ? state.labels.count.replace('{n}', state.i + 1).replace('{total}', n) : '';
      state.cap.textContent = [it.caption, n > 1 ? count : ''].filter(Boolean).join(' · ');
    }
    state.show = show;
    return state;
  }
  var hpLightbox = {
    open: function (items, index, trigger, labels) {
      if (!lb) lb = buildLightbox();
      lb.items = items; lb.trigger = trigger || document.activeElement; lb.labels = labels || {};
      lb.close.setAttribute('aria-label', lb.labels.close || '');
      lb.prev.setAttribute('aria-label', lb.labels.prev || '');
      lb.next.setAttribute('aria-label', lb.labels.next || '');
      lb.prev.hidden = lb.next.hidden = items.length < 2;
      lb.show(index || 0);
      root.classList.add('hp-lock');
      lb.d.showModal();
      lb.close.focus({ preventScroll: true });
    },
    close: function () { if (lb && lb.d.open) lb.d.close(); },
    isOpen: function () { return !!(lb && lb.d.open); }
  };

  /* Shopify: elke sectie registreert een init-functie per root; in de thema-editor opnieuw bij shopify:section:load. */
  var registry = {};
  function initIn(scope, id) {
    Array.prototype.forEach.call(scope.querySelectorAll(id ? '[data-hp="' + id + '"]' : '[data-hp]'), function (el) {
      var fn = registry[el.getAttribute('data-hp')];
      if (!fn || el.__hpInit) return;
      el.__hpInit = true;
      try { fn(el); } catch (err) { if (window.console) console.error('HÏ sectie ' + el.getAttribute('data-hp'), err); }
    });
  }
  function hpRegister(id, fn) { registry[id] = fn; initIn(document, id); }
  document.addEventListener('shopify:section:load', function (e) { initIn(e.target); });

  window.hpRegister = hpRegister;
  window.hpScrollY = hpScrollY;
  window.hpDrag = hpDrag;
  window.hpReveal = hpReveal;
  window.hpInView = hpInView;
  window.hpLightbox = hpLightbox;
  window.hpOnResize = hpOnResize;
  window.hpOnScroll = hpOnScroll;
  window.hpReduced = hpReduced;
})();


/* ---- 01 hp-01-hero ---- */
/* 01 HERO · mobiel menu en de schermvullende foto die zich bij het scrollen vastzet (108% → 100%). */
window.hpRegister('01', function (root) {
(function (root) {
  'use strict';

  /* Menu (alleen zichtbaar onder 769 px); de kopbalk kan in de editor uit staan */
  var bar = root.querySelector('.hp-01-bar');
  var btn = root.querySelector('.hp-01-menu');
  if (bar && btn) {
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
  }

  /* Scroll: de foto staat iets ingezoomd en zet zich vast terwijl het frame omhoog schuift.
     Gekoppeld aan scrollpositie, dus geen transition; bij reduced motion blijft hij op 100%. */
  if (window.hpReduced() || root.getAttribute('data-hp-01-zoom') === 'off') return;
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


})(root);
});

/* ---- 02 hp-02-kies-je-paar ---- */
/* 02 PRODUCT (1.2) · tik wisselt naar het sfeerbeeld, staaltjes wisselen kleur + link,
   en de kaarten schuiven scroll-gekoppeld tegen elkaar in (--hp-02-q: 1 = schuin en verschoven, 0 = rust). */
window.hpRegister('02', function (root) {
(function (root) {
  'use strict';
  var cards = Array.prototype.slice.call(root.querySelectorAll('[data-hp-02-card]'));

  cards.forEach(function (card) {
    var media = card.querySelector('.hp-02-media');
    media.addEventListener('click', function () {
      media.setAttribute('aria-pressed', String(media.getAttribute('aria-pressed') !== 'true'));
    });

    var swatches = card.querySelectorAll('.hp-02-swatch');
    if (!swatches.length) return;
    var cta = card.querySelector('[data-hp-02-cta]');
    var prods = card.querySelectorAll('.hp-02-media__prod');
    Array.prototype.forEach.call(swatches, function (sw) {
      sw.addEventListener('click', function () {
        var color = sw.dataset.color;
        card.dataset.color = color;
        Array.prototype.forEach.call(swatches, function (s) { s.setAttribute('aria-pressed', String(s === sw)); });
        Array.prototype.forEach.call(prods, function (img) {
          img.setAttribute('aria-hidden', String(!img.classList.contains('hp-02-media__prod--' + color)));
        });
        cta.href = sw.dataset.href;
        media.setAttribute('aria-pressed', 'false');
      });
    });
  });

  /* Scroll: elke kaart heeft zijn eigen voortgang; in rust (q = 0) staan ze recht naast elkaar. */
  if (!document.documentElement.classList.contains('hp-motion')) return;
  var list = root.querySelector('[data-hp-02-list]');
  var active = false;
  function update() {
    if (!active) return;
    var vh = window.innerHeight;
    var listTop = list.getBoundingClientRect().top;
    cards.forEach(function (card) {
      /* layoutpositie (offsetTop) in plaats van de getransformeerde rect, zodat de beweging zichzelf niet meet */
      var top = listTop + card.offsetTop - list.offsetTop;
      var p = Math.min(1, Math.max(0, (vh - top) / (vh * 0.5)));
      var q = 1 - p * p * (3 - 2 * p);
      card.style.setProperty('--hp-02-q', q.toFixed(4));
    });
  }
  window.hpInView(root, function () { active = true; update(); }, function () { active = false; }, { rootMargin: '20% 0px' });
  window.hpOnScroll(update);
  window.hpOnResize(update);


})(root);
});

/* ---- 03 hp-03-bewijsbalk ---- */
/* 03 · marquee: twee rijen tegen elkaar in. Scrollen versnelt ze, draait ze mee met de scrollrichting
   en laat de typografie kantelen in de looprichting; afremmen bij hover/focus/tik; 3500 telt op bij binnenkomst. */
window.hpRegister('03', function (root) {
(function (sec) {
  'use strict';
  if (window.hpReduced()) return;

  var SPEED = parseFloat(sec.getAttribute('data-speed')); if (isNaN(SPEED)) SPEED = 52; // px per seconde
  var MAX_SKEW = parseFloat(sec.getAttribute('data-skew')); if (isNaN(MAX_SKEW)) MAX_SKEW = 9; // graden
  var rows = Array.prototype.map.call(sec.querySelectorAll('.hp-03-row'), function (row, i) {
    return { row: row, track: row.querySelector('.hp-03-track'), set: row.querySelector('.hp-03-set'), dir: Number(row.dataset.dir), speed: SPEED * (i ? 0.75 : 1), x: 0, w: 0 };
  });
  var hover = false, focus = false, tapped = false, paused = false;
  var running = false, raf = 0, last = 0, factor = 1, boost = 0, skew = 0, scrollDir = 1;
  var lastY = window.hpScrollY();

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
    var y = window.hpScrollY(), d = y - lastY;
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
    var items = Array.prototype.map.call(counts, function (c) {
      var rest = c.textContent;
      return { el: c, rest: rest, target: parseInt(rest, 10), suffix: rest.replace(/^\d+/, '') };
    }).filter(function (o) { return !isNaN(o.target); });
    items.forEach(function (o) { o.el.style.minWidth = o.el.getBoundingClientRect().width + 'px'; });
    var t0 = 0, D = 1400;
    function step(t) {
      t0 = t0 || t;
      var p = Math.min((t - t0) / D, 1), e = 1 - Math.pow(1 - p, 3);
      items.forEach(function (o) { o.el.textContent = p < 1 ? Math.round(o.target * e) + o.suffix : o.rest; });
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  measure();
  if (document.fonts) document.fonts.ready.then(measure);
  window.hpInView(sec, function () { start(); if (!counted) count(); }, stop, { threshold: 0.2 });


})(root);
});

/* ---- 05 hp-05-features ---- */
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
window.hpRegister('05', function (root) {
(function (root) {
  'use strict';

  var stage = root.querySelector('.hp-05-stage');
  var canvas = root.querySelector('.hp-05-stage__canvas');
  var ctx = canvas.getContext('2d');
  var mark = root.querySelector('.hp-05-mark');
  var markNo = root.querySelector('.hp-05-mark__no');
  var list = root.querySelector('.hp-05-list');
  var feats = Array.prototype.slice.call(root.querySelectorAll('.hp-05-feat'));
  var reduced = window.hpReduced();

  /* assets.json → frames360: 137 frames (elke 3e van 411), 1600×1600. Preset.frame is het originele framenummer. */
  var N = parseInt(root.getAttribute('data-n'), 10) || 137, SRC = 1600, STEP = parseInt(root.getAttribute('data-step'), 10) || 3, ANG = Math.PI * 2 / N, AXIS = 0.5;
  var FBASE = root.getAttribute('data-frames') || '';
  /* 1.7: de hele sok blijft in beeld (geen inzoom per zone); alleen het draaiframe en de marker wisselen */
  /* Shopify: draaiposities en markers komen uit de feature-blokken (data-frame, data-mark). */
  var PRESETS = { totaal: { frame: 0, zoom: 1, cx: 0.5, cy: 0.5 } };
  var FEATURES = {};
  feats.forEach(function (b) {
    var k = b.dataset.f;
    PRESETS[k] = { frame: parseFloat(b.dataset.frame) || 0, zoom: 1, cx: 0.5, cy: 0.5 };
    FEATURES[k] = { preset: k, mark: (b.dataset.mark || '0.5,0.5,0.1').split(',').map(Number) };
  });

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
  function src(i) { return FBASE.replace(/\d{3}(\.webp)$/i, ('00' + i * STEP).slice(-3) + '$1'); }
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
    var S = im.naturalWidth || SRC;
    ctx.drawImage(im, v.x0 * S, v.y0 * S, v.sw * S, v.sw * S, 0, 0, canvas.width, canvas.height);
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
  function startAuto() { if (!autoStopped && root.getAttribute('data-auto') !== 'off') root.classList.add('is-auto'); }
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
    goTo(feats[0].dataset.f, root.getAttribute('data-intro') !== 'off', startAuto);
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

  /* ---------- 1.4: reuzennaam en uitleg (mobiel) volgen de actieve zone ---------- */
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
    root.querySelector('.hp-05-detail').textContent = b.querySelector('.hp-05-feat__text').textContent;
  }


})(root);
});

/* ---- 06 hp-06-brandvideo ---- */
/* 06 VISUELE PAUZE · brandvideo (1.36: één bestand per scherm).
   Lus = de video tot CUT (vlak voor zijn eigen tekst-einde) + BLACK seconden zwart (is-black) + HOLD seconden eindbeeld "PRESTATIE TELT" (is-end), dan opnieuw.
   Laptop: één breed bestand met de drie panelen erin; mobiel: één staand bestand (720 px, of 480 px bij trage verbinding of databesparing).
   De film laadt pas als de sectie anderhalf scherm weg is en speelt alleen in beeld. Pauze bevriest ook het eindbeeld.
   Geluid hoort bij de film. Reduced motion: geen autoplay, de knop start. */
window.hpRegister('06', function (root) {
(function (root) {
  'use strict';

  /* 9,55 s: einde van het sokkenduo, vlak voor de eigen tekst van de video (9,6 s); 1.14: 0,5 s zwart vóór het eindbeeld */
  function num(a, d) { var v = parseFloat(root.getAttribute(a)); return isNaN(v) ? d : v; }
  var CUT = num('data-cut', 9.55), FADE = num('data-fade', 0.32), BLACK = num('data-black', 0.5), HOLD = num('data-hold', 5); /* 1.15: FADE s voor de knip vervaagt het beeld al naar zwart */
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
    if (fill) fill.style.transform = 'scaleX(' + Math.min(1, shown / (CUT + BLACK + HOLD)).toFixed(4) + ')';
    var sec = Math.floor(shown);
    if (sec !== lastSec) { lastSec = sec; if (now) now.textContent = '00:' + ('0' + sec).slice(-2); }
    raf = playing() ? requestAnimationFrame(tick) : 0;
  }

  /* Koopknop: komt naar voren zodra de cursor binnen NEAR px van de knop komt, weg na FAR px (geen geflikker op de rand). */
  var cta = root.querySelector('.hp-06-cta'), NEAR = num('data-near', 160), FAR = num('data-far', 220);
  root.addEventListener('pointermove', function (e) {
    if (e.pointerType !== 'mouse' || !cta) return;
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


})(root);
});

/* ---- 07 hp-07-kies-je-sport ---- */
/* 07 KIES JE SPORT · rij via hpDrag (center) als visuele lus: de vier sporten staan drie keer in de rij (kopieën via JS,
   aria-hidden), na elke wissel springt de rij ongezien terug naar de middelste set. Tint en status volgen de echte sport.
   Klik op de centrale kaart = naar de sportpagina; klik op een buurkaart = eerst centreren.
   1.2 ronde 2: sportkleur = merkaccent van de sportpagina; elke wissel loopt als golf vanuit de actieve kaart over de sectie;
   bij reduced motion direct. */
window.hpRegister('07', function (root) {
(function (root) {
  'use strict';

  var viewport = root.querySelector('.hp-07-viewport');
  var track = root.querySelector('.hp-07-track');
  var real = Array.prototype.slice.call(track.querySelectorAll('.hp-07-item'));
  var n = real.length;
  var prev = root.querySelector('.hp-07-prev');
  var next = root.querySelector('.hp-07-next');
  var status = root.querySelector('.hp-07-status');
  var current = -1;
  var wave = root.querySelector('.hp-07-wave');
  var streaks = root.querySelector('.hp-07-streaks');
  var segs = Array.prototype.slice.call(root.querySelectorAll('.hp-07-seg'));

  /* Kleurgolf: de sectie neemt de nieuwe sportkleur (en inkt) direct over; de golf legt de vorige kleur eroverheen
     en opent daarin een rond gat vanuit de actieve kaart tot de hele sectie de nieuwe kleur heeft. */
  function paint(sport) {
    var old = root.dataset.sport;
    if (sport === old) return;
    root.dataset.sport = sport;
    /* Shopify: sportkleur komt uit het blok (data-c) */
    var src = track.querySelector('.hp-07-item[data-sport="' + sport + '"]');
    if (src && src.dataset.c) root.style.setProperty('--hp-07-c', src.dataset.c);
    if (window.hpReduced()) return;
    streaks.classList.remove('is-run'); void streaks.offsetWidth; streaks.classList.add('is-run');
    var sec = root.getBoundingClientRect();
    /* de actieve kaart staat altijd in het midden van de rij: horizontaal het midden van de rij, verticaal het midden van de foto */
    var v = viewport.getBoundingClientRect();
    var f = track.querySelector('.hp-07-frame').getBoundingClientRect();
    var x = v.left + v.width / 2 - sec.left, y = f.top + f.height / 2 - sec.top;
    var r = Math.ceil(Math.hypot(Math.max(x, sec.width - x), Math.max(y, sec.height - y)));
    wave.classList.remove('is-open');
    wave.dataset.sport = old;
    wave.style.setProperty('--hp-07-wx', x + 'px');
    wave.style.setProperty('--hp-07-wy', y + 'px');
    wave.style.setProperty('--hp-07-wd', 2 * r + 'px');
    wave.style.setProperty('--hp-07-ws', r + 4 + 'px');
    wave.classList.add('is-run');
    void wave.offsetWidth;
    wave.classList.add('is-open');
  }
  wave.addEventListener('transitionend', function (e) {
    if (e.propertyName !== 'width' || !wave.classList.contains('is-open')) return;
    wave.classList.remove('is-run', 'is-open');
  });

  /* Kopieën voor en na de echte set; onzichtbaar voor schermlezers en buiten de tabvolgorde. */
  function copy(it) {
    var c = it.cloneNode(true);
    c.setAttribute('aria-hidden', 'true');
    c.dataset.clone = '';
    c.querySelectorAll('[id]').forEach(function (el) { el.removeAttribute('id'); });
    var a = c.querySelector('.hp-07-card');
    a.removeAttribute('aria-describedby');
    a.tabIndex = -1;
    return c;
  }
  real.slice().reverse().forEach(function (it) { track.insertBefore(copy(it), track.firstChild); });
  real.forEach(function (it) { track.appendChild(copy(it)); });
  var items = Array.prototype.slice.call(track.querySelectorAll('.hp-07-item'));

  function realOf(k) { return ((k % n) + n) % n; }

  /* Zet de centrale kaart: tint, kaartstaten, tabvolgorde. announce = ook de live-regio bijwerken. */
  function setActive(k, announce) {
    var r = realOf(k);
    if (current >= 0 && k !== current) streaks.dataset.dir = k > current ? 'next' : 'prev';
    paint(real[r].dataset.sport);
    if (k !== current) {
      var hadFocus = items.some(function (it) { return it.contains(document.activeElement); });
      current = k;
      items.forEach(function (it, j) {
        it.classList.toggle('is-active', j === k);
        it.classList.toggle('is-before', j < k);
        it.classList.toggle('is-after', j > k);
      });
      real.forEach(function (it, j) { it.querySelector('.hp-07-card').tabIndex = j === r ? 0 : -1; });
      segs.forEach(function (s, j) { s.setAttribute('aria-pressed', String(j === r)); });
      if (hadFocus) real[r].querySelector('.hp-07-card').focus({ preventScroll: true });
    }
    if (announce) {
      status.textContent = status.dataset.template
        .replace('{sport}', real[r].querySelector('.hp-07-name').textContent.trim())
        .replace('{n}', r + 1)
        .replace('{total}', n);
    }
  }

  /* Na het landen op een kopie: zonder animatie naar dezelfde sport in de middelste set. */
  function settle() {
    var k = drag.index();
    if (k >= n && k < 2 * n) return;
    root.classList.add('is-jumping');
    drag.go(n + realOf(k), true);
    void track.offsetWidth;
    requestAnimationFrame(function () { root.classList.remove('is-jumping'); });
  }

  var drag = window.hpDrag(viewport, track, {
    align: 'center',
    start: n,
    onChange: function (k) {
      setActive(k, true);
      if (drag && window.hpReduced()) settle();
    },
    onDragEnd: function () { setActive(drag.index(), true); }
  });
  setActive(drag.index(), true);
  track.addEventListener('transitionend', function (e) {
    if (e.target === track && e.propertyName === 'transform') settle();
  });

  /* Tijdens het slepen: de kaart die het dichtst bij het midden staat bepaalt al de tint.
     De kaartstaten volgen pas bij het loslaten, zodat de rij onder de vinger rustig blijft. */
  viewport.addEventListener('pointermove', function () {
    if (!viewport.classList.contains('is-dragging')) return;
    var mid = viewport.getBoundingClientRect();
    var cx = mid.left + mid.width / 2;
    var best = 0, d = Infinity;
    items.forEach(function (it, j) {
      var r = it.getBoundingClientRect();
      var dd = Math.abs(r.left + r.width / 2 - cx);
      if (dd < d) { d = dd; best = j; }
    });
    paint(items[best].dataset.sport);
  });

  /* Buurkaart: eerst centreren. Een sleep is al door hpDrag in de capture-fase tegengehouden. */
  track.addEventListener('click', function (e) {
    var item = e.target.closest('.hp-07-item');
    if (!item) return;
    var j = items.indexOf(item);
    if (j !== drag.index()) { e.preventDefault(); drag.go(j); }
  });

  /* Kiezer: naar dezelfde sport in de middelste set, de kortste weg. */
  segs.forEach(function (s, j) { s.addEventListener('click', function () { drag.go(n + j); }); });
  prev.addEventListener('click', function () { drag.prev(); });
  next.addEventListener('click', function () { drag.next(); });

  /* 1.18 (snelheid): een scherm vóór de sectie worden alle sportfoto's (ook de kopieën in de lus) alvast gedecodeerd,
     zodat de eerste wissel niet op het decoderen hoeft te wachten. Eén voor één, met een korte pauze ertussen. */
  window.hpInView(root, function () {
    var imgs = Array.prototype.slice.call(root.querySelectorAll('.hp-07-img')), k = 0;
    (function next() { var im = imgs[k++]; if (!im) return; im.loading = 'eager'; (im.decode ? im.decode() : Promise.resolve()).catch(function () {}).then(function () { setTimeout(next, 30); }); })();
  }, null, { rootMargin: '100% 0px' });

  /* Focus binnen een overflow:hidden-rij kan de browser laten scrollen; de positie komt alleen van hpDrag. */
  viewport.addEventListener('scroll', function () { if (viewport.scrollLeft) viewport.scrollLeft = 0; });


})(root);
});

/* ---- 08 hp-08-over-ons ---- */
/* 08 OVER ONS (1.2) · looptekst + scroll.
   Looptekst: elke regel springt hard (klasse, geen transition) naar de volgende letterstaat, van boven naar onder met 80 ms
   verschil; elke staat staat ±0,8 s. Loopt alleen in beeld.
   Scroll: --hp-08-p loopt van 0 (foto net onder in beeld) naar 1 (foto-bovenrand op 55% van het scherm, dan staat de mobiele foto al helemaal in beeld); de foto opent
   daarbij vanaf de splitnaad en zoomt naar zijn crop. Reduced motion: geen lus, geen scroll, alles in de eindstand. */
window.hpRegister('08', function (root) {
(function (root) {
  'use strict';
  var lines = Array.prototype.slice.call(root.querySelectorAll('.hp-08-line'));
  var REST = 2;
  var ORDER = { 1: 2, 2: 3, 3: 1 }; // dun → zwaar → cursief → dun
  var STAGGER = parseFloat(root.getAttribute('data-stagger')); if (isNaN(STAGGER)) STAGGER = 80;
  var PERIOD = parseFloat(root.getAttribute('data-period')); if (isNaN(PERIOD)) PERIOD = 870; // eerste regel tot eerste regel: 0,8 s staan + golf; cyclus ±2,6 s

  /* De dunne en de cursieve snede worden pas bij de eerste wissel gebruikt: vooraf laden, anders flitst daar de fallback. */
  if (document.fonts && document.fonts.load) {
    ['300 1em Poppins', '900 1em Poppins', 'italic 800 1em Poppins'].forEach(function (f) { document.fonts.load(f).catch(function () {}); });
  }

  /* Tik op de pill: dezelfde staat als hover (cirkel schuift mee, woord rolt), al tijdens het indrukken. */
  var cta = root.querySelector('.hp-08-cta');
  var tapTimer = 0;
  if (cta) cta.addEventListener('pointerdown', function (e) {
    if (e.pointerType === 'mouse') return;
    cta.classList.add('is-tap');
    clearTimeout(tapTimer);
    tapTimer = setTimeout(function () { cta.classList.remove('is-tap'); }, 1200);
  });
  if (cta) cta.addEventListener('pointercancel', function () { cta.classList.remove('is-tap'); });

  function setAll(s) { lines.forEach(function (l) { l.dataset.s = s; }); }
  if (window.hpReduced()) { setAll(REST); return; }
  var cycleOn = root.getAttribute('data-cycle') !== 'off', revealOn = root.getAttribute('data-reveal') !== 'off';

  var state = REST;
  var timers = [];
  var running = false;

  function wave() {
    timers = []; // de vorige golf is afgelopen
    state = ORDER[state];
    var s = state;
    lines.forEach(function (l, i) {
      timers.push(setTimeout(function () { l.dataset.s = s; }, i * STAGGER));
    });
    timers.push(setTimeout(wave, PERIOD));
  }
  function start() {
    if (running || !cycleOn) return;
    running = true;
    timers.push(setTimeout(wave, PERIOD));
  }
  function stop() {
    if (!running) return;
    running = false;
    timers.forEach(clearTimeout);
    timers = [];
    setAll(state); // een halve golf afmaken, zodat de tekst in één staat pauzeert
  }

  /* scroll: alleen rekenen zolang de sectie in beeld is */
  var media = root.querySelector('.hp-08-media');
  var visible = false;
  function progress() {
    if (!visible || !revealOn) return;
    var r = media.getBoundingClientRect();
    var vh = window.innerHeight;
    var p = Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.45)));
    media.style.setProperty('--hp-08-p', p.toFixed(4));
  }
  window.hpOnScroll(progress);
  window.hpOnResize(progress);

  window.hpInView(root, function () { visible = true; progress(); start(); }, function () { visible = false; stop(); });

  // /* 08 · de pill volgt de cursor over de teamfoto (alleen fijne pointer met hover, niet bij reduced motion) */
})(root);
(function (root) {
  'use strict';
  if (window.hpReduced() || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  if (root.getAttribute('data-follow') === 'off') return;
  var fig = root.querySelector('.hp-08-media'), cta = fig.querySelector('.hp-08-cta');
  if (!cta) return;
  var x = 0, y = 0, tx = 0, ty = 0, raf = 0, inside = false;
  fig.classList.add('is-follow');

  function rest() {
    var pad = parseFloat(getComputedStyle(root).getPropertyValue('--hp-space-md')) || 32;
    tx = pad; ty = fig.clientHeight - cta.offsetHeight - pad;
  }
  function step() {
    x += (tx - x) * 0.18; y += (ty - y) * 0.18;
    fig.style.setProperty('--hp-08-fx', x.toFixed(1) + 'px');
    fig.style.setProperty('--hp-08-fy', y.toFixed(1) + 'px');
    raf = (Math.abs(tx - x) > 0.3 || Math.abs(ty - y) > 0.3) ? requestAnimationFrame(step) : 0;
  }
  function go() { if (!raf) raf = requestAnimationFrame(step); }

  fig.addEventListener('pointermove', function (e) {
    var r = fig.getBoundingClientRect();
    tx = Math.max(8, Math.min(r.width - cta.offsetWidth - 8, e.clientX - r.left - cta.offsetWidth / 2));
    ty = Math.max(8, Math.min(r.height - cta.offsetHeight - 8, e.clientY - r.top - cta.offsetHeight / 2));
    if (!inside) { inside = true; cta.classList.add('is-tap'); }
    go();
  });
  fig.addEventListener('pointerleave', function () { inside = false; cta.classList.remove('is-tap'); rest(); go(); });
  fig.addEventListener('click', function (e) { if (!cta.contains(e.target)) cta.click(); });
  window.hpOnResize(function () { if (!inside) { rest(); x = tx; y = ty; step(); } });
  rest(); x = tx; y = ty; step();


})(root);
});

/* ---- 14 hp-14-teamorders ---- */
/* 14 SPORTTEAMS · het clubbeeld schuift licht mee met de scroll (alleen transform, positie gemeten bij resize).
   Reduced motion: de foto staat stil. */
window.hpRegister('14', function (root) {
(function (root) {
  'use strict';
  window.hpReveal(root.querySelector('.hp-14-bloks')); /* 1.36: de treden rijzen na elkaar op */
  if (window.hpReduced() || root.getAttribute('data-parallax') === 'off') return;

  var media = root.querySelector('.hp-14-media');
  var img = root.querySelector('.hp-14-img');
  var top = 0, h = 0, vh = 0;

  function measure() {
    var r = media.getBoundingClientRect();
    top = r.top + window.hpScrollY();
    h = r.height;
    vh = window.innerHeight;
    update();
  }
  function update() {
    // -1 als het beeld onderaan binnenkomt, 1 als het bovenaan weggaat; 4% van de beeldhoogte speelruimte
    var t = Math.min(1, Math.max(-1, ((top + h / 2 - window.hpScrollY()) - vh / 2) / (vh / 2 + h / 2)));
    img.style.transform = 'translate3d(0,' + (t * h * 0.04).toFixed(1) + 'px,0)';
  }
  window.hpOnResize(measure);
  window.hpOnScroll(update);
  measure();


})(root);
});

/* ---- 09 hp-09-logoband ---- */
/* 09 TUSSENSECTIE ZAKELIJK (1.2 ronde 2) · rustige logo-lus (rAF, alleen in beeld) met spotlight: logo's in het midden van de band krijgen kleur.
   Pauze bij hover/focus en zolang een getikt logo in kleur staat. Reduced motion: stil, alles in kleur. */
window.hpRegister('09', function (root) {
(function (root) {
  'use strict';

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

  if (!document.documentElement.classList.contains('hp-motion') || hpReduced() || root.getAttribute('data-loop') === 'off') {
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
  var SPEED = parseFloat(root.getAttribute('data-speed')); if (isNaN(SPEED)) SPEED = 42; /* px per seconde */

  /* Posities één keer meten (en bij resize), niet elk frame: zo hoeft de browser tijdens de lus nooit layout te doen. */
  var centers = [], vpW = 0, base = 0, lit = [];
  function measure() {
    period = track.scrollWidth / COPIES;
    vpW = viewport.clientWidth;
    base = track.getBoundingClientRect().left - viewport.getBoundingClientRect().left - x;
    centers = items.map(function (it) { return it.offsetLeft + it.offsetWidth / 2; });
  }
  measure();
  hpOnResize(measure);

  viewport.addEventListener('pointerenter', function (e) { if (e.pointerType === 'mouse') hover = true; });
  viewport.addEventListener('pointerleave', function () { hover = false; });
  viewport.addEventListener('focusin', function () { focus = true; });
  viewport.addEventListener('focusout', function () { focus = false; });

  function spotlight() {
    var mid = vpW / 2, reach = Math.max(140, vpW * 0.2);
    for (var i = 0; i < items.length; i++) {
      var on = Math.abs(base + x + centers[i] - mid) < reach;
      if (on !== lit[i]) { lit[i] = on; items[i].classList.toggle('is-lit', on); }
    }
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


})(root);
});

/* ---- 10 hp-10-zakelijk ---- */
/* 10 ZAKELIJK · de cijfers (150 en 6 paar) tellen één keer op als de kaarten in beeld komen. Zonder JS staat het eindgetal er al. */
window.hpRegister('10', function (root) {
(function (root) {
  'use strict';
  if (window.hpReduced()) return;

  if (root.getAttribute('data-counting') === 'off') return;
  var stats = root.querySelectorAll('[data-count]');
  var dur = (parseFloat(getComputedStyle(root).getPropertyValue('--hp-dur-3')) || 900) * 1.6;
  var done = false;

  function run() {
    if (done) return;
    done = true;
    var t0 = performance.now();
    Array.prototype.forEach.call(stats, function (el) {
      var end = parseInt(el.dataset.count, 10), tail = el.textContent.replace(/^\d+/, '');
      (function step(now) {
        var p = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.max(1, Math.round(end * e)) + tail;
        if (p < 1) requestAnimationFrame(step);
      })(t0);
    });
  }
  window.hpInView(root.querySelector('.hp-10-cards'), run, null, { threshold: [0.3] });


})(root);
});

/* ---- 12 hp-12-slogan ---- */
/* 12 INSPIRATIE · scroll-gekoppeld, alleen terwijl de sectie in beeld is.
   1.13: geen sticky meer (de pagina mag niet vertragen); s loopt van 0 (komt binnen) naar 1 (verdwijnt boven).
   - masker: regel 1 komt omhoog als de kop het onderste derde in schuift, regel 2 iets later
   - eerst gecentreerd en leesbaar; vanaf het midden van het beeld schuiven ze rustig uit elkaar tot ±0,9·A (A = 18% / 12% van de breedte)
   - pill: --hp-12-k van 0 naar 1 terwijl de regels uit elkaar gaan (chevron loopt mee) */
window.hpRegister('12', function (root) {
(function (root) {
  'use strict';
  if (window.hpReduced()) return;
  if (root.getAttribute('data-motion') === 'off') return;
  function num(a, d) { var v = parseFloat(root.getAttribute(a)); return isNaN(v) ? d : v; }
  var SPREAD_D = num('data-spread-d', 18) / 100, SPREAD_M = num('data-spread-m', 12) / 100;
  var title = root.querySelector('.hp-12-title');
  var active = false;
  function clamp(v) { return Math.max(0, Math.min(1, v)); }
  function out(t) { return 1 - Math.pow(1 - t, 3); }
  function inout(t) { return t * t * (3 - 2 * t); }
  function update() {
    if (!active) return;
    var r = root.getBoundingClientRect(), vh = window.innerHeight, vw = window.innerWidth;
    /* s: 0 als de sectie onderin binnenkomt, 0,5 midden in beeld, 1 als hij boven verdwijnt. Geen vastzetten: de pagina
       scrollt normaal door. De regels staan stil tot ze midden in beeld staan en schuiven daarna over de rest van de
       doorloop rustig uit elkaar (smoothstep, ±0,9·A), zo'n vijfde van de scrollsnelheid. */
    var s = clamp((vh - r.top) / (vh + r.height));
    var A = vw * (vw >= 769 ? SPREAD_D : SPREAD_M), k = inout(clamp((s - 0.45) / 0.55));
    var t = vh - title.getBoundingClientRect().top;
    root.style.setProperty('--hp-12-r1', ((1 - out(clamp((t - vh * 0.04) / (vh * 0.3)))) * 110).toFixed(2) + '%');
    root.style.setProperty('--hp-12-r2', ((1 - out(clamp((t - vh * 0.14) / (vh * 0.3)))) * 110).toFixed(2) + '%');
    root.style.setProperty('--hp-12-x1', (-A * 0.9 * k).toFixed(1) + 'px');
    root.style.setProperty('--hp-12-x2', (A * 0.9 * k).toFixed(1) + 'px');
    root.style.setProperty('--hp-12-k', k.toFixed(3));
  }
  window.hpInView(root, function () { active = true; update(); }, function () { active = false; });
  window.hpOnScroll(update);
  window.hpOnResize(update);


})(root);
});

})();
