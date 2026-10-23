// Sectie 12 met beweging aan: lettergrootte van de titel en de verschuivingen op verschillende scrollposities,
// prototype tegenover Shopify-render (zelfde scrollpositie van de sectie ten opzichte van het scherm).
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  for (const vp of [[390, 844], [1440, 900]]) {
    for (const [name, url] of [['proto', process.argv[2]], ['shop', 'http://localhost:8801/st-12.html']]) {
      const p = await b.newPage({ viewport: { width: vp[0], height: vp[1] } });
      await p.goto(url, { waitUntil: 'load' });
      await p.evaluate(() => document.fonts.ready);
      const out = [];
      for (const f of [0.9, 0.5, 0.1, -0.3]) {
        await p.evaluate((f) => {
          const el = document.querySelector('[data-hp="12"]');
          const sc = document.querySelector('.page-wrapper');
          const useWrap = sc && sc.scrollHeight > sc.clientHeight + 5 && getComputedStyle(sc).overflowY !== 'visible';
          const top = el.getBoundingClientRect().top - innerHeight * f;
          if (useWrap) sc.scrollBy(0, top); else window.scrollBy(0, top);
        }, f);
        await p.waitForTimeout(1500);
        out.push(await p.evaluate(() => {
          const t = document.querySelector('.hp-12-title'), l1 = document.querySelector('.hp-12-l--1'), ch = document.querySelector('.hp-12-cta__chev');
          return getComputedStyle(t).fontSize + ' k=' + document.querySelector('[data-hp="12"]').style.getPropertyValue('--hp-12-k') + ' ' + getComputedStyle(l1).transform.replace('matrix', 'm') + ' chev ' + getComputedStyle(ch).transform.replace('matrix', 'm');
        }));
      }
      console.log(vp.join('x'), name.padEnd(5), out.join(' || '));
      await p.close();
    }
  }
  await b.close();
})();
