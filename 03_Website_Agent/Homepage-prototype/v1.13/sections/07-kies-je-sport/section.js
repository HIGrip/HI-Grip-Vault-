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
  var segs = Array.prototype.slice.call(root.querySelectorAll('.hp-07-seg'));

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

  /* Focus binnen een overflow:hidden-rij kan de browser laten scrollen; de positie komt alleen van hpDrag. */
  viewport.addEventListener('scroll', function () { if (viewport.scrollLeft) viewport.scrollLeft = 0; });
})();

