/* 06 VISUELE PAUZE · woorden lopen één voor één van grijs naar zwart op de scroll; "grijpt" krijgt zijn volt markering als het oplicht. */
(function () {
  'use strict';
  var root = document.querySelector('[data-hp="06"]');
  if (!root || !document.documentElement.classList.contains('hp-motion') || window.hpReduced()) return;

  var st = root.querySelector('[data-hp-06-words]');
  /* Splits alleen tekstknopen op gewone spaties (de &nbsp; houdt HÏ Grip bijeen); de markeringen blijven één woord. */
  Array.prototype.slice.call(st.childNodes).forEach(function (node) {
    if (node.nodeType === 1) { node.classList.add('hp-06-w'); return; }
    if (node.nodeType !== 3) return;
    var frag = document.createDocumentFragment();
    node.textContent.split(/([ \t\r\n]+)/).forEach(function (part) {
      if (!part) return;
      if (/^[ \t\r\n]+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
      var span = document.createElement('span');
      span.className = 'hp-06-w';
      span.textContent = part;
      frag.appendChild(span);
    });
    st.replaceChild(frag, node);
  });
  var words = st.querySelectorAll('.hp-06-w');
  var active = false;

  /* 0 als de alinea op 90% van het scherm binnenkomt, 1 als de onderkant op 80% staat: dan staat de hele grote alinea zwart in beeld. */
  function update() {
    var vh = window.innerHeight;
    var r = st.getBoundingClientRect();
    var p = Math.min(1, Math.max(0, (vh * 0.9 - r.top) / (r.height + vh * 0.1)));
    var n = Math.round(p * words.length);
    for (var i = 0; i < words.length; i++) words[i].classList.toggle('is-lit', i < n);
  }
  window.hpInView(root, function () { active = true; update(); }, function () { active = false; update(); });
  window.hpOnScroll(function () { if (active) update(); });
  window.hpOnResize(function () { if (active) update(); });
  update();
})();
