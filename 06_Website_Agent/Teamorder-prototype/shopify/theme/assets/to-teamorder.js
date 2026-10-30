/* HÏ Grip teamorderpagina: binnenkomst-animaties en de samensteller (sectie to-03). Vanilla JS, geen afhankelijkheden. */
(function () {
  var root = (window.Shopify && window.Shopify.routes && window.Shopify.routes.root) || '/';
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var eur = function (cents) { return '€ ' + (cents / 100).toLocaleString('nl-NL', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); };
  var fill = function (tpl, map) { return esc(tpl).replace(/\[(\w+)\]/g, function (m, k) { return k in map ? map[k] : m; }); };

  // binnenkomst
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
  }, { threshold: 0.08 }) : null;
  function reveal(scope) {
    scope.querySelectorAll('.to-rv, .to-hero, .to-ig').forEach(function (el) { io ? io.observe(el) : el.classList.add('is-in'); });
  }

  function Builder(el) {
    var cfg; try { cfg = JSON.parse(el.querySelector('[data-to-cfg]').textContent); } catch (e) { return; }
    // elk blok is één kleur; blokken met dezelfde soknaam worden één sok
    var groups = [];
    cfg.groups.forEach(function (b) {
      var g = groups.filter(function (x) { return x.name === b.name; })[0];
      if (!g) { g = { name: b.name, colors: [] }; groups.push(g); }
      if (b.v.length) g.colors.push({ label: b.label, sw: b.sw, v: b.v });
    });
    groups = groups.filter(function (g) { return g.colors.length; });
    var t = cfg.t, tiers = cfg.tiers.slice().sort(function (a, b) { return a.m - b.m; });
    if (!groups.length) return;
    var $ = function (r) { return el.querySelector('[data-r="' + r + '"]'); };
    var vmap = {};
    groups.forEach(function (g, gi) { g.colors.forEach(function (c, ci) { c.v.forEach(function (v) { vmap[v.id] = { g: gi, c: ci, v: v }; }); }); });
    var qty = {}, cur = 0, col = groups.map(function () { return 0; }), last = null;

    function tierIx(n) { var k = -1; tiers.forEach(function (tr, j) { if (n >= tr.m) k = j; }); return k; }
    function unit(v, k) { return k < 0 ? v.p : Math.max(0, v.p - tiers[k].o); }
    function ids() { return Object.keys(qty).filter(function (id) { return qty[id] > 0; }); }
    function total() { return ids().reduce(function (s, id) { return s + qty[id]; }, 0); }
    function setQ(id, n) { n = Math.max(0, Math.min(999, Math.round(+n) || 0)); if (n) { qty[id] = n; last = id; } else delete qty[id]; }
    function minP(g) { var m = Infinity; g.colors.forEach(function (c) { c.v.forEach(function (v) { if (v.p < m) m = v.p; }); }); return m; }

    function drawPicker() {
      var g = groups[cur], c = g.colors[col[cur]];
      $('types').innerHTML = groups.map(function (x, i) {
        return '<button type="button" data-t="' + i + '" aria-pressed="' + (i === cur) + '">' + esc(x.name) + (tiers.length ? ' <small>' + esc(t.from) + ' ' + eur(Math.max(0, minP(x) - tiers[0].o)) + '</small>' : '') + '</button>';
      }).join('');
      $('types').closest('.to-fld').hidden = groups.length < 2;
      $('colors').innerHTML = g.colors.map(function (x, i) {
        return '<button type="button" data-c="' + i + '" aria-pressed="' + (i === col[cur]) + '"><i style="--c:' + esc(x.sw) + '"></i>' + esc(x.label) + '</button>';
      }).join('');
      $('sizes').innerHTML = c.v.map(function (v) {
        var q = qty[v.id] || 0, name = g.name + ' ' + c.label + ' ' + v.s;
        return '<div class="to-sz"><div><b>' + esc(v.s) + '</b>' + (v.a ? '' : '<small>' + esc(t.soldout) + '</small>') + '</div><div class="to-qs' + (q ? ' has' : '') + '" data-id="' + v.id + '">' +
          '<button type="button" data-d="-1" aria-label="' + esc(t.less + ' ' + name) + '">&minus;</button>' +
          '<input type="number" inputmode="numeric" min="0" max="999" value="' + q + '" aria-label="' + esc(t.count + ' ' + name) + '"' + (v.a ? '' : ' disabled') + '>' +
          '<button type="button" data-d="1" aria-label="' + esc(t.more + ' ' + name) + '"' + (v.a ? '' : ' disabled') + '>+</button></div></div>';
      }).join('');
    }

    function render(skip) {
      if (!skip) drawPicker();
      var n = total(), k = tierIx(n), next = k + 1 < tiers.length ? k + 1 : -1, sum = 0, single = 0, used = {};
      var list = ids().sort(function (a, b) { var x = vmap[a], y = vmap[b]; return x.g - y.g || x.c - y.c || a - b; });
      $('items').innerHTML = list.length ? list.map(function (id) {
        var m = vmap[id], g = groups[m.g], c = g.colors[m.c], q = qty[id], u = unit(m.v, k);
        sum += q * u; single += q * m.v.p; used[m.g] = 1;
        var name = g.name + ' ' + c.label.toLowerCase() + ' · ' + m.v.s;
        return '<li class="to-it"><i style="--c:' + esc(c.sw) + '"></i><div><b>' + esc(name) + '</b><small>' + q + ' × ' + eur(u) + '</small></div><span class="to-p">' + eur(q * u) + '</span><button class="to-x" type="button" data-rm="' + id + '" aria-label="' + esc(t.remove + ' ' + name) + '">&times;</button></li>';
      }).join('') : '<li class="to-empty">' + esc(t.empty) + '</li>';
      $('count').textContent = n + ' ' + t.pairs;
      $('save').textContent = single - sum > 0 ? '− ' + eur(single - sum) : eur(0);
      $('total').textContent = eur(sum);

      var gs = Object.keys(used), need = 0, txt;
      if (!tiers.length) txt = '';
      else if (n < tiers[0].m) { need = tiers[0].m - n; txt = fill(t.nStart, { n: '<b>' + need + '</b>' }); }
      else if (next > 0) {
        need = tiers[next].m - n;
        // per sok tonen: een gemiddelde verschuift mee met de mix
        var p = gs.map(function (gi) {
          var g = groups[gi], v = g.colors[0].v[0];
          ids().some(function (id) { if (vmap[id].g === +gi) { v = vmap[id].v; return true; } });
          return (gs.length > 1 ? esc(g.name) + ' ' : '') + '<b>' + eur(unit(v, next)) + '</b>';
        }).join(', ');
        txt = fill(t.nNext, { n: need, p: p });
      } else {
        txt = fill(t.nMax, { m: tiers[k].m });
        if (cfg.zak.url && cfg.zak.label) txt += ' <a href="' + esc(cfg.zak.url) + '">' + esc(cfg.zak.label) + '</a>';
      }
      $('ntxt').innerHTML = txt;
      $('nudge').hidden = !txt;
      $('nbtn').hidden = !need;
      $('nbtn').textContent = '+' + need;
      $('nbtn').setAttribute('aria-label', fill(t.nAdd, { n: need }));

      if ($('tiers')) $('tiers').innerHTML = tiers.map(function (tr, j) {
        return '<tr class="' + (j === k ? 'on' : '') + '"><td>' + tr.m + '+</td>' + groups.map(function (g) { return '<td>' + eur(Math.max(0, minP(g) - tr.o)) + '</td>'; }).join('') + '</tr>';
      }).join('');
      $('buy').setAttribute('aria-disabled', String(n < cfg.minOrder));
      if (bar) {
        bar.querySelector('[data-r="btop"]').textContent = n + ' ' + t.pairs + ' · ' + eur(sum);
        bar.querySelector('[data-r="bsub"]').innerHTML = need ? fill(t.barSub, { n: '<b>' + need + '</b>' }) : esc(n ? t.barMax : t.barEmpty);
      }
      if (body) body.value = summary(n, k, sum);
    }

    function summary(n, k, sum) {
      var lines = ids().map(function (id) { var m = vmap[id], g = groups[m.g]; return '- ' + qty[id] + ' x ' + g.name + ' ' + g.colors[m.c].label + ' maat ' + m.v.s + ' (' + eur(unit(m.v, k)) + ')'; });
      return ['Teamorder via ' + location.pathname, '', 'Order (' + n + ' paar):'].concat(lines, ['', 'Totaal: ' + eur(sum)]).join('\n');
    }

    $('types').addEventListener('click', function (e) { var b = e.target.closest('button'); if (b) { cur = +b.dataset.t; render(); } });
    $('colors').addEventListener('click', function (e) { var b = e.target.closest('button'); if (b) { col[cur] = +b.dataset.c; render(); } });
    $('sizes').addEventListener('click', function (e) {
      var b = e.target.closest('button[data-d]'); if (!b || b.disabled) return;
      var box = b.parentNode, id = box.dataset.id; setQ(id, (qty[id] || 0) + +b.dataset.d);
      box.querySelector('input').value = qty[id] || 0; box.classList.toggle('has', !!qty[id]); render(true);
    });
    $('sizes').addEventListener('input', function (e) {
      if (e.target.type !== 'number') return; var box = e.target.parentNode;
      setQ(box.dataset.id, e.target.value); box.classList.toggle('has', !!qty[box.dataset.id]); render(true);
    });
    $('sizes').addEventListener('focusout', function (e) { if (e.target.type === 'number') e.target.value = qty[e.target.parentNode.dataset.id] || 0; });
    $('items').addEventListener('click', function (e) { var b = e.target.closest('[data-rm]'); if (b) { delete qty[b.dataset.rm]; render(); } });
    $('nbtn').addEventListener('click', function () {
      var c = groups[cur].colors[col[cur]], v = c.v[Math.min(1, c.v.length - 1)];
      var id = qty[last] ? last : String(v.id), n = total(), k = tierIx(n);
      var to = n < tiers[0].m ? tiers[0].m : tiers[k + 1].m;
      setQ(id, (qty[id] || 0) + (to - n)); render();
    });

    var msg = $('msg');
    function say(text, ok) { msg.hidden = false; msg.textContent = text; msg.classList.toggle('to-msg--ok', !!ok); }
    $('buy').addEventListener('click', function (e) {
      e.preventDefault();
      var n = total(), b = this;
      if (n < cfg.minOrder) { say(fill(t.minMsg, { m: cfg.minOrder }).replace(/<[^>]+>/g, '')); return; }
      if (b.dataset.busy) return; b.dataset.busy = '1'; say(t.busy);
      var items = ids().map(function (id) { return { id: +id, quantity: qty[id] }; });
      fetch(root + 'cart/add.js', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ items: items }) })
        .then(function (r) { return r.json().then(function (d) { if (!r.ok) throw d; return d; }); })
        .then(function () {
          var k = tierIx(n), code = k < 0 ? '' : tiers[k].c, target = root + (cfg.after === 'cart' ? 'cart' : 'checkout');
          location.href = code ? root + 'discount/' + encodeURIComponent(code) + '?redirect=' + encodeURIComponent(target) : target;
        })
        .catch(function (d) { delete b.dataset.busy; say((d && (d.description || d.message)) || t.addErr); });
    });

    var ask = $('ask'), box = $('req'), form = box ? box.querySelector('form') : null, body = form ? form.querySelector('textarea') : null;
    if (ask && form) {
      // na versturen (bedankt of fout) laadt de pagina opnieuw: dan het formulier open laten
      if (box.querySelector('.to-msg--ok, .errors')) { box.hidden = false; ask.setAttribute('aria-expanded', 'true'); box.scrollIntoView({ block: 'center' }); }
      ask.addEventListener('click', function () {
        var open = box.hidden; box.hidden = !open; ask.setAttribute('aria-expanded', String(open));
        if (open) form.querySelector('input:not([type=hidden])').focus();
      });
      form.addEventListener('submit', function (e) {
        var bad = false;
        form.querySelectorAll('[data-check]').forEach(function (inp) {
          var ok = new RegExp(inp.dataset.check).test(inp.value.trim()); inp.parentNode.classList.toggle('bad', !ok); if (!ok) bad = true;
        });
        if (!total()) { bad = true; say(t.emptyCart); }
        if (bad) e.preventDefault(); else render(true);
      });
    }

    var bar = el.querySelector('.to-mbar'), cart = $('cart');
    if (bar && 'IntersectionObserver' in window) {
      var vis = { s: false, c: false };
      var bo = new IntersectionObserver(function (es) {
        es.forEach(function (e) { vis[e.target === cart ? 'c' : 's'] = e.isIntersecting; });
        bar.classList.toggle('is-on', vis.s && !vis.c);
      });
      bo.observe(el); bo.observe(cart);
    }
    render();
  }

  function init(scope) {
    reveal(scope);
    scope.querySelectorAll('[data-to-builder]').forEach(function (el) { if (!el.dataset.ready) { el.dataset.ready = '1'; Builder(el); } });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { init(document); });
  else init(document);
  document.addEventListener('shopify:section:load', function (e) { init(e.target); });
})();
