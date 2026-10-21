/* 07 KIES JE SPORT · rij via hpDrag (center) als visuele lus: de vier sporten staan drie keer in de rij (kopieën via JS,
   aria-hidden), na elke wissel springt de rij ongezien terug naar de middelste set. Tint en status volgen de echte sport.
   Klik op de centrale kaart = naar de sportpagina; klik op een buurkaart = eerst centreren.
   1.2 ronde 2: sportkleur = merkaccent van de sportpagina; elke wissel loopt als golf vanuit de actieve kaart over de sectie;
   bij reduced motion direct. */
(function () {
  'use strict';
  var root = document.querySelector('[data-hp="07"]');
  if (!root) return;

  var viewport = root.querySelector('.hp-07-viewport');
  var track = root.querySelector('.hp-07-track');
  var real = Array.prototype.slice.call(track.querySelectorAll('.hp-07-item'));
  var n = real.length;
  var prev = root.querySelector('.hp-07-prev');
  var next = root.querySelector('.hp-07-next');
  var status = root.querySelector('.hp-07-status');
  var current = -1;
  var wave = root.querySelector('.hp-07-wave');

  /* Kleurgolf: de sectie neemt de nieuwe sportkleur (en inkt) direct over; de golf legt de vorige kleur eroverheen
     en opent daarin een rond gat vanuit de actieve kaart tot de hele sectie de nieuwe kleur heeft. */
  function paint(sport) {
    var old = root.dataset.sport;
    if (sport === old) return;
    root.dataset.sport = sport;
    if (window.hpReduced()) return;
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

  prev.addEventListener('click', function () { drag.prev(); });
  next.addEventListener('click', function () { drag.next(); });

  /* Focus binnen een overflow:hidden-rij kan de browser laten scrollen; de positie komt alleen van hpDrag. */
  viewport.addEventListener('scroll', function () { if (viewport.scrollLeft) viewport.scrollLeft = 0; });
})();

/* 07 · grippatroon: een mozaïek van driehoekjes (op/neer om en om, met tussenruimte) over de hele sectie.
   Dekking per driehoek uit een vaste reeks (pseudo-random, dus elke keer hetzelfde patroon); de vertraging groeit met de
   afstand tot het midden, zodat een sportwissel als golf vanuit de actieve kaart over het patroon loopt. */
(function () {
  'use strict';
  var root = document.querySelector('[data-hp="07"]');
  if (!root) return;
  var svg = root.querySelector('.hp-07-mosaic');
  var NS = svg.namespaceURI, OP = [0.14, 0.22, 0.32, 0.46, 0.64, 0.82, 1];
  var seed = 7;
  function rnd() { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }

  function draw() {
    var w = root.clientWidth, h = root.clientHeight;
    var s = w < 769 ? 34 : 52, th = s * 0.866, gap = 0.74;
    var cols = Math.ceil(w / (s / 2)) + 2, rows = Math.ceil(h / th) + 1;
    var cx = w / 2, cy = h * 0.55, maxD = Math.hypot(cx, cy), frag = document.createDocumentFragment();
    seed = 7;
    svg.setAttribute('viewBox', '0 0 ' + w + ' ' + h);
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    for (var r = 0; r < rows; r++) {
      for (var c = 0; c < cols; c++) {
        var x = (c - 1) * s / 2, y = r * th, up = (r + c) % 2 === 0;
        var pts = up ? [[x, y + th], [x + s / 2, y], [x + s, y + th]] : [[x, y], [x + s, y], [x + s / 2, y + th]];
        var mx = (pts[0][0] + pts[1][0] + pts[2][0]) / 3, my = (pts[0][1] + pts[1][1] + pts[2][1]) / 3;
        var p = document.createElementNS(NS, 'polygon');
        p.setAttribute('points', pts.map(function (q) { return (mx + (q[0] - mx) * gap).toFixed(1) + ',' + (my + (q[1] - my) * gap).toFixed(1); }).join(' '));
        p.setAttribute('class', 'hp-07-tri');
        p.setAttribute('style', '--o:' + OP[Math.floor(Math.pow(rnd(), 1.4) * OP.length)] + ';--d:' + (Math.hypot(mx - cx, my - cy) / maxD * 5).toFixed(2));
        frag.appendChild(p);
      }
    }
    svg.appendChild(frag);
  }
  window.hpOnResize(draw);
  draw();
})();
