/* HÏ Grip — vergelijkpagina (vg2), gegenereerd uit de goedgekeurde artifact. */
(function () {
  if (window.__vg2) return; window.__vg2 = true;
  var IMG = window.VG2_IMG || {};

  var d = document;
  [].forEach.call(d.querySelectorAll('.vg2'), function (e) { e.classList.add('js'); });
  var rm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  function all(s) { return [].slice.call(d.querySelectorAll(s)); }

  // fade-up en meter bij in beeld komen
  var obs = all('.rv, [data-meter]');
  if (rm || !('IntersectionObserver' in window)) obs.forEach(function (e) { e.classList.add('in'); });
  else {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { threshold: 0.2 });
    obs.forEach(function (e) { if (e.getBoundingClientRect().top < innerHeight * .9) e.classList.add('in'); else io.observe(e); });
  }

  // kleurwissel 2.0: swatches zijn echte links; beeld en alle 2.0-links wisselen mee
  var imgs = { zwart: IMG['sok-20-zwart.webp'], wit: IMG['sok-20-wit.webp'] };
  new Image().src = imgs.wit;
  var img = d.querySelector('[data-img-20]'), img2 = d.querySelector('[data-img-20b]'), links = all('[data-link-20]'), sws = all('.sw__a');
  sws.forEach(function (a) {
    a.addEventListener('click', function (ev) {
      ev.preventDefault();
      if (a.getAttribute('aria-current') === 'true') return;
      var c = a.getAttribute('data-c');
      sws.forEach(function (x) { x.setAttribute('aria-current', x === a ? 'true' : 'false'); });
      links.forEach(function (l) { l.href = a.href; });
      img.classList.add('swap');
      setTimeout(function () { img.src = imgs[c]; img2.src = imgs[c]; img.alt = 'Performance Gripsokken 2.0 in ' + c + ', zijaanzicht met grippatroon'; img.classList.remove('swap'); }, rm ? 0 : 200);
    });
  });

  // techniek: callout en punt op de sok lichten samen op
  var cos = all('.co'), pts = all('.pt');
  function on(p) { cos.concat(pts).forEach(function (e) { e.classList.toggle('on', e.getAttribute('data-p') === p); }); }
  cos.forEach(function (c) { ['mouseenter', 'focus', 'click'].forEach(function (t) { c.addEventListener(t, function () { on(c.getAttribute('data-p')); }); }); });
  d.querySelector('.tech__grid').addEventListener('mouseleave', function () { on(null); });

  // keuzehulp
  var U = { '10': 'https://www.higrip.nl/products/performance-gripsokken', '20z': 'https://www.higrip.nl/products/performance-gripsokken-2-0-zwart', '20w': 'https://www.higrip.nl/products/performance-gripsokken-2-0-wit' };
  var IM = { '10': IMG['sok-10.webp'], '20z': IMG['sok-20-zwart.webp'], '20w': IMG['sok-20-wit.webp'] };
  var COMP = { voetbal: 'voetbal', padel: 'padel', tennis: 'tennis', rugby: 'rugby' };
  var res = d.querySelector('[data-res]'), sig = '10z';
  function v(n) { var e = d.querySelector('input[name=' + n + ']:checked'); return e ? e.value : ''; }
  function v1(n) { return n <= 39 ? '34–39' : '40–46'; }
  function v2(n) { return n <= 38 ? '35–38' : n <= 42 ? '39–42' : '43–47'; }
  function pick() {
    var sport = v('sport'), vaak = v('vaak'), voor = v('voor'), blaren = v('blaren'), prio = v('prio'), maat = parseInt(v('maat'), 10) || 0, kleur = v('kleur');
    var score = 0, r20 = [], r10 = [], note = '';
    if (voor === 'wedstrijd') { score += 2; r20.push('Je draagt ze voor wedstrijden, daarvoor is de 2.0 gemaakt'); }
    if (COMP[sport]) { score += 1; r20.push('De 2.0 is ideaal voor ' + COMP[sport]); }
    if (vaak === 'hoog') { score += 2; r20.unshift('Je sport 3 keer of vaker: de 2.0 met versterkte hiel gaat langer mee'); }
    var force20 = vaak === 'hoog';
    if (blaren === 'vaak') { score += 2; } else if (blaren === 'soms') { score += 1; }
    if (blaren !== 'nee') r20.push('Naadloze teenzone en versterkte hiel tegen blaren');
    if (prio === 'comfort') { score += 2; r20.push('Compressie (15–20 mmHg) en 30% Coolmax® voor vochtafvoer'); }
    if (prio === 'prijs') { score -= 1; r10.push('De scherpste prijs voor siliconen grip: €14,95 per paar'); }
    if (sport === 'pilates' || sport === 'yoga') r10.push('Voor ' + sport + ' is de 1.0 ideaal: training, pilates en recreatief sporten');
    var k = (score >= 2 || force20) ? '20' : '10';
    if (kleur === 'zwart') { k = '20'; r20.unshift('Zwart bestaat alleen in de 2.0'); }
    if (maat === 47) { k = '20'; r20.unshift('Maat 47 bestaat alleen in de 2.0 (maten 35–47)'); }
    if (maat === 34) { k = '10'; r10.unshift('Maat 34 bestaat alleen in de 1.0 (maten 34–46)'); if (kleur === 'zwart') note = 'Zwart is er alleen in de 2.0, en die begint bij maat 35. De 1.0 is er in wit.'; }
    var why = (k === '20' ? r20 : r10).slice(0, 3);
    if (!why.length) why = [k === '20' ? 'Grip plus compressie, Coolmax® en een naadloze afwerking' : 'Betrouwbare siliconen grip voor je trainingen'];
    var key = k === '10' ? '10' : (kleur === 'wit' ? '20w' : '20z');
    d.querySelector('[data-res-name]').textContent = k === '10' ? '1.0' : '2.0';
    d.querySelector('[data-res-price]').textContent = k === '10' ? '€14,95' : '€17,95';
    d.querySelector('[data-res-tag]').textContent = k === '10' ? 'Prijsvriendelijk' : 'Ultieme performance';
    var ul = d.querySelector('[data-res-why]'); ul.innerHTML = ''; why.forEach(function (t) { var li = d.createElement('li'); li.textContent = t; ul.appendChild(li); });
    var sz = d.querySelector('[data-res-size]');
    if (maat) { sz.hidden = false; sz.textContent = 'Jouw maat ' + maat + ': kies de variant ' + (k === '10' ? v1(maat) : v2(maat)) + '.'; } else { sz.hidden = true; }
    var nt = d.querySelector('[data-res-note]'); nt.textContent = note; nt.hidden = !note;
    var lk = d.querySelector('[data-res-link]'); lk.href = U[key]; lk.className = 'btn ' + (k === '10' ? 'btn--k' : 'btn--y');
    d.querySelector('[data-res-cta]').textContent = k === '10' ? 'Shop 1.0' : 'Shop 2.0';
    var alt = d.querySelector('[data-res-alt]');
    if (k === '10') { alt.textContent = 'Bekijk ook de 2.0'; alt.href = U['20z']; } else { alt.textContent = 'Bekijk ook de 1.0'; alt.href = U['10']; }
    var im = d.querySelector('[data-res-img]'); im.src = IM[key]; im.alt = 'Performance Gripsokken ' + (k === '10' ? '1.0' : '2.0' + (key === '20w' ? ' in wit' : ' in zwart'));
    res.classList.toggle('res--20', k === '20');
    if (key !== sig) { sig = key; if (!rm) { res.classList.remove('swap'); void res.offsetWidth; res.classList.add('swap'); } }
  }
  all('.q input').forEach(function (i) { i.addEventListener('change', pick); });
  pick();
})();
