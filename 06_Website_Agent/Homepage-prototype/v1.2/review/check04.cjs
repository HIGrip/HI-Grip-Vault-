const { launch, BASE } = require('../tools/pw.cjs');
(async () => {
  const b = await launch(); const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto(BASE + 'index.html', { waitUntil: 'networkidle' });
  await p.locator('[data-hp="04"]').scrollIntoViewIfNeeded(); await p.waitForTimeout(3000);
  const st = await p.evaluate(() => [...document.querySelectorAll('[data-hp="04"] img')].map(i => { const r = i.getBoundingClientRect(); return { inView: r.right > 0 && r.left < innerWidth, done: i.complete && i.naturalWidth > 0, lazy: i.loading }; }));
  console.log('in beeld:', st.filter(s => s.inView).length, 'geladen in beeld:', st.filter(s => s.inView && s.done).length, 'totaal', st.length, 'niet geladen totaal', st.filter(s => !s.done).length);
  await p.screenshot({ path: __dirname + '/fase2/1440-04-echt.png' });
  await p.waitForTimeout(4000);
  const st2 = await p.evaluate(() => [...document.querySelectorAll('[data-hp="04"] img')].filter(i => { const r = i.getBoundingClientRect(); return r.right > 0 && r.left < innerWidth; }).map(i => i.complete && i.naturalWidth > 0));
  console.log('na 4s in beeld geladen:', st2.filter(Boolean).length, '/', st2.length);
  await b.close();
})();
