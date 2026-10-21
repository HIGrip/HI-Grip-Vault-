/* HÏ Grip — Zakelijk (zk-*): tellers, subnav, productkleur, staffelcalculator, bewijs, proces, formulier. */
(function () {
  var RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var LANG = document.documentElement.lang || 'nl';
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var clamp = function (v, a, b) { return Math.min(b == null ? 1 : b, Math.max(a == null ? 0 : a, v)); };
  var nf = function (n, dec) { return n.toLocaleString(LANG, { minimumFractionDigits: dec, maximumFractionDigits: dec }); };
  var ease = function (t) { return t >= 1 ? 1 : 1 - Math.pow(2, -10 * t); };

  function tween(from, to, ms, apply) {
    if (RM) { apply(to); return; }
    var t0 = performance.now();
    (function step(now) {
      var t = clamp((now - t0) / ms);
      apply(from + (to - from) * ease(t));
      if (t < 1) requestAnimationFrame(step);
    })(t0);
  }

  /* Tellers */
  function counters(root) {
    var els = $$('[data-zk-count]', root).filter(function (e) { return !e.dataset.zkReady; });
    if (RM || !('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target, to = parseFloat(el.dataset.to), dec = parseInt(el.dataset.dec || '0', 10);
        var final = el.dataset.final, pre = (final.match(/^[^\d]*/) || [''])[0], suf = (final.match(/[^\d]*$/) || [''])[0];
        tween(0, to, 1600, function (v) { el.textContent = pre + nf(v, dec).replace(/\.(?=\d{3})/g, '') + suf; });
        setTimeout(function () { el.textContent = final; }, 1900);
        io.unobserve(el);
      });
    }, { threshold: 0.4 });
    els.forEach(function (el) {
      el.dataset.zkReady = 'true';
      el.dataset.final = el.textContent;
      var final = el.dataset.final, pre = (final.match(/^[^\d]*/) || [''])[0], suf = (final.match(/[^\d]*$/) || [''])[0];
      el.textContent = pre + nf(0, parseInt(el.dataset.dec || '0', 10)) + suf;
      io.observe(el);
    });
  }

  /* Productkleur */
  function stages(root) {
    $$('[data-zk-stage]', root).forEach(function (st) {
      if (st.dataset.zkReady) return; st.dataset.zkReady = 'true';
      var imgs = $$('img[data-sock]', st), btns = $$('.zk-swatch', st);
      btns.forEach(function (b) {
        b.addEventListener('click', function () {
          btns.forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
          imgs.forEach(function (i) { i.classList.toggle('is-on', i.dataset.sock === b.dataset.sock); });
        });
      });
    });
  }

  /* Staffelcalculator */
  function calcs(root) {
    $$('[data-zk-calc]', root).forEach(function (c) {
      if (c.dataset.zkReady) return; c.dataset.zkReady = 'true';
      var cur = c.dataset.currency || '€';
      var eur = function (n, d) { return cur + nf(n, d == null ? 2 : d); };
      var tabs = $$('[data-zk-tab]', c);
      var modes = tabs.map(function (t) {
        var rows = (t.dataset.rows || '').split(';').map(function (r) { return r.trim(); }).filter(Boolean).map(function (r) {
          var p = r.split('|').map(function (x) { return x.trim(); });
          return { from: parseFloat(p[0]), to: p[1] === '' || p[1] == null ? Infinity : parseFloat(p[1]), price: parseFloat(p[2]), paper: p[3] ? parseFloat(p[3]) : null, header: p[4] ? parseFloat(p[4]) : null };
        });
        return { id: t.dataset.zkTab, head: t.dataset.head || t.textContent, min: parseInt(t.dataset.min, 10), max: parseInt(t.dataset.max, 10), start: parseInt(t.dataset.start, 10), rows: rows };
      });
      var qty = c.querySelector('[data-zk-qty]'), out = c.querySelector('[data-zk-qty-out]');
      var priceEl = c.querySelector('[data-zk-price]'), totalEl = c.querySelector('[data-zk-total]');
      var tiersEl = c.querySelector('[data-zk-tiers]'), head = c.querySelector('[data-zk-tier-head]');
      var extras = c.querySelector('[data-zk-extras]'), extrasTxt = c.querySelector('[data-zk-extras-txt]');
      var perPair = c.dataset.perPair || '', template = c.dataset.extrasTemplate || '';
      var mode = 0, lastP = null, lastT = null;

      function tierFor(m, n) {
        var rows = modes[m].rows;
        for (var i = 0; i < rows.length; i++) {
          var r = rows[i];
          if (n >= r.from && (n <= r.to || (i < rows.length - 1 && n < rows[i + 1].from))) return r;
        }
        return rows[rows.length - 1];
      }
      function label(r) { return r.to === Infinity ? r.from + '+' : r.from + '–' + r.to; }
      function build() {
        head.textContent = modes[mode].head + (perPair ? ' · ' + perPair : '');
        tiersEl.innerHTML = modes[mode].rows.map(function (r) { return '<tr><td>' + label(r) + '</td><td>' + eur(r.price) + '</td></tr>'; }).join('');
      }
      function render(animate) {
        var m = modes[mode], n = parseInt(qty.value, 10), row = tierFor(mode, n), price = row.price, total = n * price;
        out.textContent = nf(n, 0);
        qty.style.setProperty('--p', ((n - m.min) / Math.max(m.max - m.min, 1) * 100).toFixed(1) + '%');
        $$('tr', tiersEl).forEach(function (tr, i) { tr.classList.toggle('is-on', m.rows[i] === row); });
        var showP = function (v) { priceEl.textContent = eur(v); }, showT = function (v) { totalEl.textContent = eur(v, 0); };
        if (animate && lastP !== null && lastP !== price) tween(lastP, price, 450, showP); else showP(price);
        if (animate && lastT !== null) tween(lastT, total, 350, showT); else showT(total);
        lastP = price; lastT = total;
        if (row.paper != null) {
          extras.hidden = false;
          extrasTxt.textContent = template.replace('{paper}', eur(row.paper)).replace('{header}', eur(row.header));
        } else extras.hidden = true;
      }
      function setMode(i, keepQty) {
        mode = i;
        var m = modes[i];
        qty.min = m.min; qty.max = m.max;
        if (!keepQty || parseInt(qty.value, 10) < m.min) qty.value = Math.max(m.min, keepQty ? parseInt(qty.value, 10) : m.start);
        tabs.forEach(function (t, k) { t.setAttribute('aria-selected', String(k === i)); });
        build(); render(true);
      }
      tabs.forEach(function (t, i) { t.addEventListener('click', function () { setMode(i, false); }); });
      qty.addEventListener('input', function () { render(true); });
      $$('[data-zk-calc-mode]').forEach(function (a) {
        a.addEventListener('click', function () {
          var i = modes.findIndex(function (m) { return m.id === a.dataset.zkCalcMode; });
          if (i > -1) setMode(i, true);
        });
      });
      qty.min = modes[0].min; qty.max = modes[0].max; qty.value = modes[0].start;
      build(); render(false);
    });
  }

  /* Bewijs (balk bij in beeld), proces en subnav (scroll) */
  var scrollers = [];
  function scrollInit(root) {
    $$('[data-zk-meter]', root).forEach(function (m) {
      if (m.dataset.zkReady) return; m.dataset.zkReady = 'true';
      if (RM || !('IntersectionObserver' in window)) return;
      m.classList.add('is-js');
      $$('[data-to]', m).forEach(function (b) { b.dataset.final = b.textContent; b.textContent = nf(0, 2); });
      var io = new IntersectionObserver(function (es) {
        if (!es[0].isIntersecting) return;
        m.classList.add('is-in');
        $$('[data-to]', m).forEach(function (b) {
          var to = parseFloat(b.dataset.to), final = b.dataset.final;
          tween(0, to, 1600, function (v) { b.textContent = nf(v, 2); });
          setTimeout(function () { b.textContent = final; }, 1700);
        });
        io.disconnect();
      }, { threshold: 0.35 });
      io.observe(m);
    });
    $$('[data-zk-steps]', root).forEach(function (box) {
      if (box.dataset.zkReady) return; box.dataset.zkReady = 'true';
      if (RM) return;
      box.classList.add('is-js');
      var line = box.querySelector('.zk-steps__line i'), steps = $$('.zk-step', box);
      scrollers.push(function () {
        var r = box.getBoundingClientRect();
        line.style.transform = 'scaleY(' + clamp((innerHeight * 0.62 - r.top) / r.height) + ')';
        steps.forEach(function (s) { s.classList.toggle('is-on', s.getBoundingClientRect().top < innerHeight * 0.62); });
      });
    });
    $$('[data-zk-nav]', root).forEach(function (nav) {
      if (nav.dataset.zkReady) return; nav.dataset.zkReady = 'true';
      var links = $$('a[href^="#"]', nav).filter(function (a) { return a.getAttribute('href').length > 1; });
      var targets = links.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); });
      scrollers.push(function () {
        var active = -1;
        targets.forEach(function (t, i) { if (t && t.getBoundingClientRect().top <= innerHeight * 0.4) active = i; });
        links.forEach(function (a, i) { a.classList.toggle('is-active', i === active); });
      });
    });
    run();
  }
  var queued = false;
  function run() { queued = false; scrollers.forEach(function (f) { f(); }); }
  var queue = function () { if (!queued) { queued = true; requestAnimationFrame(run); } };
  // Op desktop scrolt het thema in .page-wrapper i.p.v. het venster: luister naar scroll op elk element
  document.addEventListener('scroll', queue, { passive: true, capture: true });
  window.addEventListener('resize', queue);

  /* Kopieerknoppen */
  function copies(root) {
    $$('[data-zk-copy]', root).forEach(function (b) {
      if (b.dataset.zkReady) return; b.dataset.zkReady = 'true';
      b.addEventListener('click', function () {
        var old = b.textContent, done = b.dataset.copied || old;
        var ok = function () { b.textContent = done; setTimeout(function () { b.textContent = old; }, 1800); };
        try { navigator.clipboard.writeText(b.dataset.zkCopy).then(ok, function () {}); } catch (e) {}
      });
    });
  }

  /* Formulier */
  function forms(root) {
    $$('[data-zk-segment]', root.ownerDocument ? root.ownerDocument : document).forEach(function (a) {
      if (a.dataset.zkReady) return; a.dataset.zkReady = 'true';
      a.addEventListener('click', function () {
        var r = document.querySelector('[data-zk-seg="' + a.dataset.zkSegment + '"]');
        if (r) r.checked = true;
      });
    });
    $$('form[data-zk-form]', root).forEach(function (f) {
      if (f.dataset.zkReady) return; f.dataset.zkReady = 'true';
      f.addEventListener('submit', function (e) {
        var first = null;
        $$('[data-zk-req]', f).forEach(function (el) {
          var v = el.value.trim();
          var bad = el.type === 'email' ? !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) : v.length < 2;
          var box = el.closest('.zk-field'), err = box && box.querySelector('.zk-field__err');
          if (box) box.classList.toggle('is-bad', bad);
          if (err) err.textContent = bad ? (el.dataset.error || '') : '';
          el.setAttribute('aria-invalid', String(bad));
          if (bad && !first) first = el;
        });
        if (first) { e.preventDefault(); first.focus(); }
      });
    });
  }

  function init(root) {
    root = root || document;
    counters(root); stages(root); calcs(root); scrollInit(root); copies(root); forms(root);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { init(); });
  else init();
  document.addEventListener('shopify:section:load', function (e) { init(e.target); });
})();