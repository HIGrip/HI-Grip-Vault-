/* 10 ZAKELIJK · 1.2 ronde 2: stapelkaarten.
   - Per kaart: --hp-10-in (0 → 1 terwijl hij binnenschuift; het beeld zoomt van 1.14 naar 1)
     en --hp-10-cover (hoeveel kaarten er al overheen liggen; de kaart schaalt terug en wordt donkerder).
   - De bovenste kaart en de index links krijgen is-current.
   - Tik (touch/pen) zet is-pressed: dezelfde staat als hover, daarna volgt de link gewoon. */
(function () {
  'use strict';
  var root = document.querySelector('[data-hp="10"]');
  if (!root) return;
  var items = Array.prototype.slice.call(root.querySelectorAll('.hp-10-item'));
  var marks = Array.prototype.slice.call(root.querySelectorAll('.hp-10-index__i'));
  var motion = !window.hpReduced();
  var tops = [];
  var current = 0;

  items.forEach(function (item) {
    var card = item.querySelector('.hp-10-card');
    var timer = 0;
    card.addEventListener('pointerdown', function (e) {
      if (e.pointerType === 'mouse') return;
      clearTimeout(timer);
      item.classList.add('is-pressed');
    });
    function release() {
      clearTimeout(timer);
      timer = setTimeout(function () { item.classList.remove('is-pressed'); }, 360);
    }
    card.addEventListener('pointerup', release);
    card.addEventListener('pointercancel', release);
    card.addEventListener('pointerleave', release);
  });

  function measure() {
    tops = items.map(function (it) { return parseFloat(getComputedStyle(it).top) || 0; });
  }

  function setCurrent(n) {
    if (n === current) return;
    current = n;
    items.forEach(function (it, i) { it.classList.toggle('is-current', i === n); });
    marks.forEach(function (m, i) { m.classList.toggle('is-current', i === n); });
  }

  var active = false;
  function update() {
    if (!active) return;
    var vh = window.innerHeight;
    var rects = items.map(function (it) { return it.getBoundingClientRect(); });
    var n = 0;
    var arrive = rects.map(function (r, i) {
      var span = Math.max(1, vh - tops[i]);
      if (r.top <= tops[i] + 2) n = i;
      return Math.min(1, Math.max(0, (vh - r.top) / span));
    });
    if (rects[0].top > vh * 0.6) n = 0;
    setCurrent(n);
    if (!motion) return;
    items.forEach(function (it, i) {
      var cover = 0;
      for (var j = i + 1; j < items.length; j++) {
        var h = rects[j].height || 1;
        cover += Math.min(1, Math.max(0, 1 - (rects[j].top - tops[j]) / h));
      }
      it.style.setProperty('--hp-10-in', arrive[i].toFixed(3));
      it.style.setProperty('--hp-10-cover', cover.toFixed(3));
    });
  }

  measure();
  window.hpInView(root, function () { active = true; update(); }, function () { active = false; });
  window.hpOnScroll(update);
  window.hpOnResize(function () { measure(); update(); });
})();
