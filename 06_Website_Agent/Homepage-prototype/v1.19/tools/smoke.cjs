const { launch, BASE } = require('./pw.cjs');
(async () => {
  const b = await launch(); const p = await b.newPage({ viewport: { width: 375, height: 812 } });
  const errs = []; p.on('pageerror', e => errs.push(String(e))); p.on('console', m => m.type() === 'error' && errs.push(m.text()));
  await p.goto(BASE + 'preview.html?s=' + (process.argv[2] || '01'), { waitUntil: 'networkidle' });
  console.log('ok', await p.title(), b.version(), errs);
  await b.close();
})();
