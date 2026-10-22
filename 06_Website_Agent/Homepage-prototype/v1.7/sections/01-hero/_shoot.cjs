// 01 HERO 1.2 ronde 2 · screenshots (Denzel)
const { launch, BASE } = require('../../tools/pw.cjs');
const D = __dirname + '/shots/';
(async () => {
  const b = await launch();
  const errs = [];
  for (const [w, h] of [[1440, 900], [375, 812]]) {
    const p = await b.newPage({ viewport: { width: w, height: h } });
    p.on('pageerror', e => errs.push(String(e)));
    await p.goto(BASE + 'preview.html?s=01', { waitUntil: 'networkidle' });
    await p.evaluate(() => { const s = document.createElement('div'); s.style.height = '1600px'; document.body.appendChild(s); });
    await p.waitForTimeout(1800);
    await p.screenshot({ path: D + `${w}.png` });
    const m = await p.evaluate(() => { const s = document.querySelector('[data-hp="01"]').getBoundingClientRect(); const i = document.querySelector('.hp-01-media').getBoundingClientRect(); return { sec: [s.x, s.y, s.width, s.height], media: [i.x, i.y, i.width, i.height], vw: innerWidth }; });
    if (w < 769) { await p.click('.hp-01-menu'); await p.waitForTimeout(300); await p.screenshot({ path: D + `${w}-menu.png` }); }
    const ov = await p.evaluate(() => [document.documentElement.scrollWidth, document.documentElement.clientWidth]);
    console.log(w, JSON.stringify(m), 'overflow:', ov);
    await p.close();
  }
  console.log('errors', errs);
  await b.close();
})();
