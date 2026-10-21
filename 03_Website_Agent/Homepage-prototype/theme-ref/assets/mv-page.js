function mvAsset(n){return (window.MV_ASSETS||{})[n]||('img/'+n);}

/* Zelfde opzet als assets/about-page.js op Over ons: init per [data-ab]-sectie, één gedeelde scroll-loop,
   respecteert prefers-reduced-motion. */
(function () {
  var doc = document;
  var rm = window.matchMedia ? matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };
  var items = [];
  function clamp(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
  // voortgang 0..1 terwijl de bovenrand van el van a×vh naar b×vh beweegt
  function prog(el, a, b) { var t = el.getBoundingClientRect().top, vh = innerHeight; return clamp((vh * a - t) / (vh * (a - b))); }
  function all(el, sel) { return [].slice.call(el.querySelectorAll(sel)); }

  function reveal() {
    var rvs = all(doc, '.mv-rv');
    if (rm.matches || !('IntersectionObserver' in window)) { rvs.forEach(function (e) { e.classList.add('mv-in'); }); return; }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('mv-in'); io.unobserve(e.target); } });
    }, { threshold: 0.15 });
    rvs.forEach(function (e) { if (e.getBoundingClientRect().top < innerHeight) e.classList.add('mv-in'); else io.observe(e); });
  }

  var inits = {
    strip: function (el) {
      var vp = el.querySelector('.mv-perf__vp'), tr = el.querySelector('.mv-perf__track');
      return function () {
        if (rm.matches) { vp.classList.remove('mv-moving'); tr.style.transform = ''; return; }
        vp.classList.add('mv-moving');
        var bp = prog(el, 1, -.6);
        tr.style.transform = 'translateX(' + (-bp * Math.max(0, tr.scrollWidth - vp.clientWidth)) + 'px)';
      };
    },
    panels: function (el) {
      var cards = all(el, '.mv-panel');
      function open(c) { cards.forEach(function (x) { x.classList.toggle('mv-is-open', x === c); }); }
      cards.forEach(function (c) { ['mouseenter', 'focus', 'click'].forEach(function (ev) { c.addEventListener(ev, function () { open(c); }); }); });
      return function () {};
    },
    hero: function (el) {
      var media = el.querySelector('.mv-hero__media'), frame = el.querySelector('.mv-hero__frame');
      return function () {
        if (rm.matches) { media.style.transform = ''; return; }
        var hp = clamp(-frame.getBoundingClientRect().top / frame.offsetHeight);
        media.style.transform = 'translateY(' + (hp * 18) + '%) scale(' + (1.08 - hp * .08) + ')';
      };
    },
    principles: function (el) {
      var prs = all(el, '.mv-pr');
      return function () { prs.forEach(function (p) { p.style.setProperty('--p', rm.matches ? 1 : prog(p, .85, .5)); }); };
    },
    who: function (el) {
      var img = el.querySelector('.mv-who__strip img');
      return function () { img.style.transform = rm.matches ? '' : 'translateX(' + (-prog(el, 1, -.4) * 12) + '%)'; };
    },
    statement: function (el) {
      var h = el.querySelector('[data-reveal]'), bar = el.querySelector('.mv-st__bar i'), stick = el.querySelector('.mv-st__stick');
      var speeds = all(el, '.mv-speedbg i'), words = [];
      (function split(node, accent) {
        [].slice.call(node.childNodes).forEach(function (n) {
          if (n.nodeType === 3) {
            var frag = doc.createDocumentFragment();
            n.textContent.split(/(\s+)/).forEach(function (p) {
              if (!p) return;
              if (/^\s+$/.test(p)) { frag.appendChild(doc.createTextNode(' ')); return; }
              var s = doc.createElement('span'); s.className = 'mv-w' + (accent ? ' mv-v' : ''); s.textContent = p;
              frag.appendChild(s); words.push(s);
            });
            n.parentNode.replaceChild(frag, n);
          } else if (n.nodeType === 1) { split(n, accent || n.tagName === 'EM'); }
        });
      })(h, false);
      all(h, 'em').forEach(function (em) { var p = em.parentNode; while (em.firstChild) p.insertBefore(em.firstChild, em); p.removeChild(em); });
      function light(p) { var n = Math.round(p * words.length); words.forEach(function (w, i) { w.classList.toggle('mv-on', i < n); }); }
      return function () {
        if (rm.matches) { light(1); bar.style.width = '100%'; return; }
        var r = el.getBoundingClientRect(), mp = clamp(-r.top / (r.height - stick.offsetHeight));
        light(mp * 1.25); bar.style.width = (mp * 100) + '%';
        speeds.forEach(function (s, i) { var f = +s.getAttribute('data-s'); s.style.transform = 'translateX(' + (((mp * f * 240) + i * 37) % 260 - 80) + 'vw)'; });
      };
    },
    horizon: function (el) {
      var hz = el.querySelector('.mv-horizon'), stops = all(el, '.mv-stop');
      return function () {
        var p = rm.matches ? 1 : prog(hz, .8, .35);
        hz.style.setProperty('--p', p);
        stops.forEach(function (s, i) { s.classList.toggle('mv-on', p >= i / (stops.length - 1) - .02); });
      };
    },
    outro: function (el) {
      var t = el.querySelector('[data-words]'), parts = [];
      (function wrap(node) {
        [].slice.call(node.childNodes).forEach(function (n) {
          if (n.nodeType === 3) {
            var frag = doc.createDocumentFragment();
            n.textContent.split(/(\s+)/).forEach(function (p) {
              if (!p) return;
              if (/^\s+$/.test(p)) { frag.appendChild(doc.createTextNode(' ')); return; }
              var o = doc.createElement('span'), i = doc.createElement('span'); o.className = 'mv-wr'; i.textContent = p;
              o.appendChild(i); frag.appendChild(o); parts.push(i);
            });
            n.parentNode.replaceChild(frag, n);
          } else if (n.nodeType === 1) { wrap(n); }
        });
      })(t);
      return function () {
        var op = rm.matches ? 1 : prog(t, 1.05, .6);
        parts.forEach(function (s, i) { var lp = clamp(op * 1.6 - i * .08); s.style.transform = 'translateY(' + ((1 - lp) * 100) + '%)'; });
      };
    }
  };

  var ticking = false;
  function tick() { items.forEach(function (fn) { fn(); }); }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(function () { ticking = false; tick(); }); } }
  doc.addEventListener('scroll', onScroll, { passive: true, capture: true });
  addEventListener('resize', tick);
  if (rm.addEventListener) rm.addEventListener('change', tick);

  function boot() {
    all(doc, '[data-ab]').forEach(function (el) { if (el.getAttribute('data-mv-init')) return; el.setAttribute('data-mv-init', '1'); var f = inits[el.getAttribute('data-ab')]; if (f) items.push(f(el)); });
    reveal(); tick();
  }
  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', boot); else boot();
  addEventListener('load', tick);
  doc.addEventListener('shopify:section:load', function () { boot(); });
})();

