/* 06 VISUELE PAUZE · de woorden lopen één voor één van grijs naar zwart, gekoppeld aan de scrollpositie. */
(function () {
  'use strict';
  var root = document.querySelector('[data-hp="06"]');
  if (!root || !document.documentElement.classList.contains('hp-motion') || window.hpReduced()) return;

  var st = root.querySelector('[data-hp-06-words]');
  var parts = st.textContent.trim().split(/[ \t\r\n]+/); /* geen \s: de &nbsp; in HÏ Grip houdt de merknaam bijeen */
  st.textContent = '';
  parts.forEach(function (w, i) {
    var span = document.createElement('span');
    span.className = 'hp-06-w';
    span.textContent = w;
    st.appendChild(span);
    if (i < parts.length - 1) st.appendChild(document.createTextNode(' '));
  });
  var words = st.querySelectorAll('.hp-06-w');
  var active = false;

  /* 0 als de alinea op 85% van het scherm binnenkomt, 1 als de onderkant de helft passeert. */
  function update() {
    var vh = window.innerHeight;
    var r = st.getBoundingClientRect();
    var p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.35)));
    var n = Math.round(p * words.length);
    for (var i = 0; i < words.length; i++) words[i].classList.toggle('is-lit', i < n);
  }
  window.hpInView(root, function () { active = true; update(); }, function () { active = false; update(); });
  window.hpOnScroll(function () { if (active) update(); });
  window.hpOnResize(function () { if (active) update(); });
  update();
})();
