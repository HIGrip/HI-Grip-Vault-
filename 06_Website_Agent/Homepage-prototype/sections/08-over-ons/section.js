/* 08 OVER ONS · looptekst. Elke regel springt hard (klasse, geen transition) naar de volgende letterstaat,
   van boven naar onder met 80 ms verschil; elke staat staat ±0,8 s. Loopt alleen in beeld, staat stil bij reduced motion. */
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

  window.hpInView(root, start, stop);
})();
