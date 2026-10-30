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
      lazyIO ? lazyIO.observe(el) : run(el);
    });
  }
  /* Secties starten pas als ze binnen anderhalf scherm komen: minder werk bij het laden, klonen en video's pas bij naderen. */
  function run(el) {
    var fn = registry[el.getAttribute('data-hp')];
    try { fn(el); } catch (err) { if (window.console) console.error('HÏ sectie ' + el.getAttribute('data-hp'), err); }
  }
  var lazyIO = 'IntersectionObserver' in window && new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { lazyIO.unobserve(e.target); run(e.target); } });
  }, { rootMargin: '150% 0px' });
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

