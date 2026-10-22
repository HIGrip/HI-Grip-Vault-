/* HÏ Grip - over-ons-pagina: één script voor alle about-* secties.
   Elke sectie heeft data-ab="<type>"; init per sectie, één gedeelde scroll-loop,
   herinit bij shopify:section:load. Respecteert prefers-reduced-motion en de "animaties"-instelling. */
(function () {
  if (window.HiAbout) return;
  var doc = document;
  doc.documentElement.classList.add('ab-js');
  var rmQuery = window.matchMedia ? matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };
  var items = [];
  var inits = {};

  function clamp(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
  // voortgang 0..1 terwijl de bovenrand van el van a×vh naar b×vh beweegt
  function prog(el, a, b) { var t = el.getBoundingClientRect().top, vh = innerHeight; return clamp((vh * a - t) / (vh * (a - b))); }
  function isStatic(el) { return rmQuery.matches || el.getAttribute('data-anim') === 'false'; }
  function narrow(px) { return matchMedia('(max-width:' + px + 'px)').matches; }
  function all(el, sel) { return [].slice.call(el.querySelectorAll(sel)); }

  /* ---- fade-up bij in beeld komen ---- */
  function reveal(el) {
    var rvs = all(el, '.rv');
    if (isStatic(el) || !('IntersectionObserver' in window)) { rvs.forEach(function (e) { e.classList.add('in'); }); return; }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.15 });
    rvs.forEach(function (e) { if (e.getBoundingClientRect().top < innerHeight) e.classList.add('in'); else io.observe(e); });
  }

  /* ---- hero ---- */
  inits.hero = function (el) {
    var media = el.querySelector('.ab-hero__media'), zoom = el.getAttribute('data-zoom') === 'true';
    return { update: function () {
      if (!media) return;
      if (!zoom || isStatic(el)) { media.style.transform = ''; return; }
      var f = el.querySelector('.ab-hero__frame');
      var hp = clamp(-f.getBoundingClientRect().top / f.offsetHeight);
      media.style.transform = 'translateY(' + (hp * 18) + '%) scale(' + (1.08 - hp * .08) + ')';
    } };
  };

  /* ---- tijdlijn ---- */
  inits.timeline = function (el) {
    var tl = el.querySelector('.ab-tl'), ms = all(el, '.ab-ms');
    return { update: function () {
      var lp = isStatic(el) ? 1 : prog(tl, .8, .35);
      tl.style.setProperty('--ab-p', lp);
      ms.forEach(function (m, i) { m.classList.toggle('on', lp >= (ms.length > 1 ? i / (ms.length - 1) : 0) - .02); });
    } };
  };

  /* ---- foto-strook ---- */
  inits.strip = function (el) {
    var vp = el.querySelector('.ab-strip__vp'), strip = el.querySelector('.ab-strip');
    return { update: function () {
      if (isStatic(el)) { vp.removeAttribute('data-moving'); strip.style.transform = ''; return; }
      vp.setAttribute('data-moving', '');
      var bp = prog(el, 1, -.6);
      strip.style.transform = 'translateX(' + (-bp * Math.max(0, strip.scrollWidth - innerWidth + 40)) + 'px)';
    } };
  };

  /* ---- founders ---- */
  inits.founders = function (el) {
    var cards = all(el, '.ab-card'), track = el.querySelector('.ab-cards');
    var prev = el.querySelector('[data-prev]'), next = el.querySelector('[data-next]'), count = el.querySelector('[data-count]');
    function open(c) { cards.forEach(function (x) { x.classList.toggle('is-open', x === c); }); }
    cards.forEach(function (c) {
      c.addEventListener('mouseenter', function () { open(c); });
      c.addEventListener('focus', function () { open(c); });
      c.addEventListener('click', function () { open(c); });
    });
    function cur() {
      var x = track.scrollLeft, best = 0, bd = 1e9;
      cards.forEach(function (c, i) { var d = Math.abs(c.offsetLeft - cards[0].offsetLeft - x); if (d < bd) { bd = d; best = i; } });
      return best;
    }
    function go(i) {
      i = Math.max(0, Math.min(cards.length - 1, i));
      track.scrollTo({ left: cards[i].offsetLeft - cards[0].offsetLeft, behavior: rmQuery.matches ? 'auto' : 'smooth' });
    }
    function upd() {
      var i = cur();
      if (count) count.textContent = (i + 1) + ' / ' + cards.length;
      if (prev) prev.disabled = i === 0;
      if (next) next.disabled = i === cards.length - 1;
    }
    if (prev) prev.addEventListener('click', function () { go(cur() - 1); });
    if (next) next.addEventListener('click', function () { go(cur() + 1); });
    track.addEventListener('scroll', function () { requestAnimationFrame(upd); }, { passive: true });
    el.addEventListener('ab:select', function (e) { open(e.detail); });
    upd();
    return { update: function () {}, resize: upd };
  };

  /* ---- missie ---- */
  inits.mission = function (el) {
    var h = el.querySelector('[data-reveal]'), bar = el.querySelector('.ab-ms-bar i'), stick = el.querySelector('.ab-ms-stick');
    var speeds = all(el, '.speedbg i'), words = [];
    (function split() {
      function walk(node, accent) {
        [].slice.call(node.childNodes).forEach(function (n) {
          if (n.nodeType === 3) {
            var parts = n.textContent.split(/(\s+)/), frag = doc.createDocumentFragment();
            parts.forEach(function (p) {
              if (!p) return;
              if (/^\s+$/.test(p)) { frag.appendChild(doc.createTextNode(' ')); return; }
              var s = doc.createElement('span'); s.className = 'w' + (accent ? ' v' : ''); s.textContent = p;
              frag.appendChild(s); words.push(s);
            });
            n.parentNode.replaceChild(frag, n);
          } else if (n.nodeType === 1) {
            if (n.tagName === 'BR') return;
            walk(n, accent || n.tagName === 'EM');
          }
        });
      }
      walk(h, false);
      // <em> is alleen nog een wrapper: kleur komt via .w.v
      all(h, 'em').forEach(function (em) { var p = em.parentNode; while (em.firstChild) p.insertBefore(em.firstChild, em); p.removeChild(em); });
    })();
    function light(p) { var n = Math.round(p * words.length); words.forEach(function (w, i) { w.classList.toggle('on', i < n); }); }
    return { update: function () {
      if (isStatic(el)) { light(1); bar.style.width = '100%'; speeds.forEach(function (s) { s.style.transform = 'translateX(-80vw)'; }); return; }
      var hh = parseFloat(getComputedStyle(stick).top) || 0;
      var mr = el.getBoundingClientRect(), mp = clamp(-(mr.top - hh) / (mr.height - stick.offsetHeight));
      light(mp * 1.25); bar.style.width = (mp * 100) + '%';
      speeds.forEach(function (s, i) { var f = +s.getAttribute('data-s'); s.style.transform = 'translateX(' + (((mp * f * 240) + i * 37) % 260 - 80) + 'vw)'; });
    } };
  };

  /* ---- eerste stap: polaroids ---- */
  inits.firststep = function (el) {
    var polas = all(el, '.ab-pola'), hov = null, n = polas.length;
    function upd() { if (window.HiAbout) window.HiAbout.tick(); }
    polas.forEach(function (p) {
      p.addEventListener('mouseenter', function () { hov = p; p.classList.add('hov'); upd(); });
      p.addEventListener('mouseleave', function () { if (hov === p) hov = null; p.classList.remove('hov'); upd(); });
      p.addEventListener('click', function () { hov = (hov === p ? null : p); polas.forEach(function (q) { q.classList.toggle('hov', q === hov); }); upd(); });
    });
    var grid = el.querySelector('.ab-polas');
    return { update: function () {
      var kp = isStatic(el) ? 1 : prog(el, .9, .35);
      polas.forEach(function (p, i) {
        var t = n > 1 ? (i / (n - 1)) * 2 - 1 : 0;
        var rot = t === 0 ? 2 : 9 * t, x = 62 * t * kp, r = rot * kp, y = (1 - kp) * (18 + i * 10), s = 1;
        var z = Math.round(10 - Math.abs(t) * 5);
        if (p === hov) { r = 0; s = 1.12; y -= 4; z = 30; }
        p.style.transform = 'translate(calc(-50% + ' + x + '%),calc(-50% + ' + y + '%)) rotate(' + r + 'deg) scale(' + s + ')';
        p.style.zIndex = z;
      });
    } };
  };

  /* ---- waarden ---- */
  inits.values = function (el) {
    var vps = all(el, '.ab-vp'), fill = el.querySelector('.ab-logo--fill'), cols = [];
    function rgb(node) {
      var c = getComputedStyle(node).getPropertyValue('--c').trim(), t = doc.createElement('i');
      t.style.color = c; el.appendChild(t);
      var m = getComputedStyle(t).color.match(/[\d.]+/g) || [204, 255, 0]; el.removeChild(t);
      return [+m[0], +m[1], +m[2]];
    }
    function colors() { cols = vps.map(rgb); }
    colors();
    return { update: function () {
      if (isStatic(el)) {
        vps.forEach(function (v) { v.querySelector('.ab-vp__big').style.setProperty('--p', 1); v.classList.add('on'); });
        if (fill && cols.length) fill.style.setProperty('--lc', 'rgb(' + cols[cols.length - 1].join(',') + ')');
        return;
      }
      var t = 0, last = Math.max(0, vps.length - 1);
      vps.forEach(function (v, i) {
        var q = prog(v, .85, .55);
        v.querySelector('.ab-vp__big').style.setProperty('--p', q);
        v.classList.toggle('on', q > .5);
        if (i > 0) t += prog(v, .9, .2);
      });
      if (!fill || !cols.length) return;
      t = Math.min(last, t);
      var a = Math.floor(t), f = t - a, c0 = cols[a], c1 = cols[Math.min(last, a + 1)];
      fill.style.setProperty('--lc', 'rgb(' + c0.map(function (x, k) { return Math.round(x + (c1[k] - x) * f); }).join(',') + ')');
    }, resize: colors };
  };

  /* ---- outro ---- */
  inits.outro = function (el) {
    var mark = el.querySelector('.ab-mark'), letters = [].slice.call(mark.children);
    return { update: function () {
      var op = isStatic(el) ? 1 : prog(mark, 1.05, .7);
      letters.forEach(function (l, i) {
        var lp = clamp(op * 1.6 - i * .08);
        l.style.transform = 'translateY(' + ((1 - lp) * 60) + '%)';
        l.style.opacity = .5 + lp * .5;
      });
    } };
  };

  /* ---- loop ---- */
  var ticking = false;
  function tick() { items.forEach(function (it) { if (it.el.isConnected) it.api.update(); }); }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(function () { ticking = false; tick(); }); } }
  function onResize() { items.forEach(function (it) { if (it.el.isConnected && it.api.resize) it.api.resize(); }); tick(); }
  // Het thema scrolt in een eigen container (.page-wrapper) i.p.v. het venster:
  // in de capture-fase vangen we scroll-events van elk element op.
  doc.addEventListener('scroll', onScroll, { passive: true, capture: true });
  addEventListener('resize', onResize);
  if (rmQuery.addEventListener) rmQuery.addEventListener('change', tick);

  function init(root) {
    all(root, '[data-ab]').concat(root.matches && root.matches('[data-ab]') ? [root] : []).forEach(function (el) {
      if (el._abReady) return;
      var type = el.getAttribute('data-ab');
      if (!inits[type]) return;
      el._abReady = true;
      var api = inits[type](el);
      items.push({ el: el, api: api });
      reveal(el);
      api.update();
    });
    items = items.filter(function (it) { return it.el.isConnected; });
  }

  window.HiAbout = { init: init, tick: tick };
  function boot() { init(doc); }
  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', boot); else boot();
  addEventListener('load', tick);

  doc.addEventListener('shopify:section:load', function (e) { init(e.target); });
  doc.addEventListener('shopify:block:select', function (e) {
    var card = e.target.closest && e.target.closest('.ab-card');
    var sec = e.target.closest && e.target.closest('[data-ab="founders"]');
    if (card && sec) sec.dispatchEvent(new CustomEvent('ab:select', { detail: card }));
  });
})();
