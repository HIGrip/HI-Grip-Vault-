// Meet berekende stijlen in het prototype: node measure.js targets.json url out.json
const { chromium } = require('playwright');
const fs = require('fs');
(async () => {
  const [,, tf, url, out] = process.argv;
  const targets = JSON.parse(fs.readFileSync(tf, 'utf8'));
  const b = await chromium.launch();
  const res = {};
  for (const [name, vw, vh] of [['m', 390, 844], ['d', 1440, 900]]) {
    const p = await b.newPage({ viewport: { width: vw, height: vh } });
    await p.goto(url, { waitUntil: 'load' });
    await p.evaluate(() => document.fonts.ready);
    res[name] = await p.evaluate((targets) => {
      const o = {};
      for (const [key, sel, prop] of targets) {
        const m = sel.match(/^(.*?)(::before|::after)?$/);
        const el = document.querySelector(m[1]);
        if (!el) { o[key] = null; continue; }
        o[key] = getComputedStyle(el, m[2] || null)[prop];
      }
      return o;
    }, targets);
    await p.close();
  }
  await b.close();
  fs.writeFileSync(out, JSON.stringify(res, null, 1));
})();
