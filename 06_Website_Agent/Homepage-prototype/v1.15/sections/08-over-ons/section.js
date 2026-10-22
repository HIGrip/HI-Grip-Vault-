/* 08 OVER ONS (1.2) · looptekst + scroll.
   Looptekst: elke regel springt hard (klasse, geen transition) naar de volgende letterstaat, van boven naar onder met 80 ms
   verschil; elke staat staat ±0,8 s. Loopt alleen in beeld.
   Scroll: --hp-08-p loopt van 0 (foto net onder in beeld) naar 1 (foto-bovenrand op 55% van het scherm, dan staat de mobiele foto al helemaal in beeld); de foto opent
   daarbij vanaf de splitnaad en zoomt naar zijn crop. Reduced motion: geen lus, geen scroll, alles in de eindstand. */
(function () {
  'use strict';
  var root = document.querySelector('[data-hp="08"]');
  if (!root) return;
  var lines = Array.prototype.slice.call(root.querySelectorAll('.hp-08-line'));
  var REST = 2;
  var ORDER = { 1: 2, 2: 3, 3: 1 }; // dun → zwaar → cursief → dun
  var STAGGER = 80;
  var PERIOD = 870; // eerste regel tot eerste regel: 0,8 s staan + golf; cyclus ±2,6 s

  /* De dunne en de cursieve snede worden pas bij de eerste wissel gebruikt: vooraf laden, anders flitst daar de fallback. */
  if (document.fonts && document.fonts.load) {
    ['300 1em Poppins', '900 1em Poppins', 'italic 800 1em Poppins'].forEach(function (f) { document.fonts.load(f).catch(function () {}); });
  }

  /* Tik op de pill: dezelfde staat als hover (cirkel schuift mee, woord rolt), al tijdens het indrukken. */
  var cta = root.querySelector('.hp-08-cta');
  var tapTimer = 0;
  cta.addEventListener('pointerdown', function (e) {
    if (e.pointerType === 'mouse') return;
    cta.classList.add('is-tap');
    clearTimeout(tapTimer);
    tapTimer = setTimeout(function () { cta.classList.remove('is-tap'); }, 1200);
  });
  cta.addEventListener('pointercancel', function () { cta.classList.remove('is-tap'); });

  function setAll(s) { lines.forEach(function (l) { l.dataset.s = s; }); }
  if (window.hpReduced()) { setAll(REST); return; }

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
    if (running) return;
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
    if (!visible) return;
    var r = media.getBoundingClientRect();
    var vh = window.innerHeight;
    var p = Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.45)));
    media.style.setProperty('--hp-08-p', p.toFixed(4));
  }
  window.hpOnScroll(progress);
  window.hpOnResize(progress);

  window.hpInView(root, function () { visible = true; progress(); start(); }, function () { visible = false; stop(); });
})();

/* 08 · de pill volgt de cursor over de teamfoto (alleen fijne pointer met hover, niet bij reduced motion) */
(function () {
  'use strict';
  var root = document.querySelector('[data-hp="08"]');
  if (!root || window.hpReduced() || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  var fig = root.querySelector('.hp-08-media'), cta = fig.querySelector('.hp-08-cta');
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
})();
