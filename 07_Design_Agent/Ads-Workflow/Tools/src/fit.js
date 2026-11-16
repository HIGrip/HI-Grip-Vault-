/* fit.js v3 (ads-v6): kop-fontgrootte (1 maat per kop), blok (breedte data-bw, uitlijning data-align), frame-hoogte, skew-compensatie, meting -> <title>. */
(function () {
  var TAN8 = Math.tan(8 * Math.PI / 180), M = 72, W = 1080;
  function fit() {
    var kop = document.querySelector('.kop');
    if (kop) {
      var lines = kop.querySelectorAll('.t'), maxw = 0, kw = parseFloat(kop.dataset.w) || (W - 2 * M);
      lines.forEach(function (l) { l.style.fontSize = '100px'; maxw = Math.max(maxw, l.getBoundingClientRect().width); });
      var fs = Math.min(parseFloat(kop.dataset.max) || 150, kw * 100 / maxw);
      lines.forEach(function (l) { l.style.fontSize = fs.toFixed(2) + 'px'; });
    }
    var blk = document.querySelector('.block');
    if (blk) {
      var sp = blk.querySelector('span'); sp.style.fontSize = '100px';
      var w100 = sp.getBoundingClientRect().width, bmax = parseFloat(blk.dataset.max) || 112;
      var BW = parseFloat(blk.dataset.bw) || (W - 2 * M), BH = parseFloat(blk.dataset.bh) || 1.75;
      var fsb = bmax;
      for (var i = 0; i < 5; i++) {
        var h = fsb * BH, sh = h / 2 * TAN8, avail = BW - 2 * sh - 88;
        fsb = Math.min(bmax, avail * 100 / w100);
      }
      var hh = Math.round(fsb * BH), s = hh / 2 * TAN8, al = blk.dataset.align || 'left';
      sp.style.fontSize = fsb.toFixed(2) + 'px'; blk.style.height = hh + 'px';
      blk.style.width = (BW - 2 * s).toFixed(1) + 'px';
      blk.style.marginLeft = (al === 'right' ? (W - 2 * M) - BW + s : s).toFixed(1) + 'px';
    }
    var fr = document.querySelector('.frame'), st = document.querySelector('.stack');
    if (fr && st) { fr.style.height = Math.round(st.getBoundingClientRect().top - 40) + 'px'; }
    document.documentElement.setAttribute('data-fitted', '1');
    var out = [];
    document.querySelectorAll('[data-m]').forEach(function (el) {
      var r = el.getBoundingClientRect(), cs = getComputedStyle(el);
      out.push({ m: el.dataset.m, txt: (el.textContent || '').trim().slice(0, 60), x: Math.round(r.left), y: Math.round(r.top), w: Math.round(r.width), h: Math.round(r.height), col: cs.color, fs: cs.fontSize });
    });
    var b = document.querySelector('.block') || {dataset: {}};
    document.title = 'RECTS' + JSON.stringify({ poppins: document.fonts.check('italic 900 40px Poppins'), layout: document.body.dataset.layout, align: b.dataset.align || 'left', bw: b.dataset.bw || '936', rects: out });
  }
  if (location.search.indexOf('notext') > -1) document.documentElement.classList.add('notext');
  Promise.all([document.fonts.load('italic 900 100px Poppins'), document.fonts.load('normal 500 32px Poppins')]).then(function () { return document.fonts.ready; }).then(fit);
})();
