// Toont console-fouten en JS-excepties van een pagina: node errors.js <url> [breedte]
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: +(process.argv[3] || 1440), height: 900 } });
  p.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') console.log('console', m.type(), m.text()); });
  p.on('pageerror', (e) => console.log('pageerror', e.message));
  await p.goto(process.argv[2], { waitUntil: 'load' });
  await p.waitForTimeout(1500);
  const r = await p.evaluate(() => Array.from(document.querySelectorAll('[data-hp]')).map((e) => e.getAttribute('data-hp') + ':' + (e.__hpInit ? 'init' : '-')).join(' '));
  console.log(r);
  await b.close();
})();
