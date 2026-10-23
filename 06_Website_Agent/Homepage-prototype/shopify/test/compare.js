// Vergelijkt per sectie het prototype met de Shopify-weergave: node compare.js <baseurl> [secties] [motion]
// Schrijft out/<vp>-<nn>-{proto,shop,diff}.png en een samenvatting. Standaard reduced motion (alles in eindstand).
const { chromium } = require('playwright');
const fs = require('fs');
const { PNG } = require('pngjs');
const pixelmatch = require('pixelmatch');
const base = process.argv[2];
const only = (process.argv[3] || '').split(',').filter(Boolean);
const motion = process.argv[4] === 'motion';
fs.mkdirSync(__dirname + '/out', { recursive: true });

async function shots(b, url, vp) {
  const p = await b.newPage({ viewport: { width: vp[0], height: vp[1] }, deviceScaleFactor: 1 });
  if (!motion) await p.emulateMedia({ reducedMotion: 'reduce' });
  await p.goto(url, { waitUntil: 'load' });
  // Voor de schermafdrukken scrolt de pagina via het venster (Playwright knipt elementen in een geneste scroller mis);
  // de echte .page-wrapper-scroller wordt apart getest (scrolltest.js).
  await p.addStyleTag({ content: 'html, body { height: auto !important; overflow: visible !important; } .page-wrapper { height: auto !important; overflow: visible !important; }' });
  await p.evaluate(async () => {
    document.querySelectorAll('img[loading="lazy"]').forEach((i) => { i.loading = 'eager'; });
    await document.fonts.ready;
    for (let t = 0; t < 100; t++) {
      await new Promise((r) => setTimeout(r, 100));
      if (Array.from(document.images).every((i) => i.complete && (i.naturalWidth > 0 || !i.currentSrc))) break;
    }
    await Promise.all(Array.from(document.images).map((i) => (i.decode ? i.decode().catch(() => {}) : 0)));
  });
  await p.waitForTimeout(motion ? 2500 : 600);
  const ids = await p.evaluate(() => Array.from(document.querySelectorAll('[data-hp]')).map((e) => e.getAttribute('data-hp')));
  const out = {};
  for (const id of ids) {
    if (only.length && !only.includes(id)) continue;
    const el = p.locator(`[data-hp="${id}"]`).first();
    await el.scrollIntoViewIfNeeded();
    await p.waitForTimeout(motion ? 1500 : 500);
    const box = await el.boundingBox();
    out[id] = { png: await el.screenshot({ animations: 'disabled' }), h: box && box.height };
  }
  await p.close();
  return out;
}

(async () => {
  const b = await chromium.launch();
  const report = [];
  const VPS = process.env.VPS ? process.env.VPS.split(';').map((x) => { const [w, h] = x.split('x').map(Number); return [x, [w, h]]; }) : [['m', [390, 844]], ['d', [1440, 900]]];
  for (const [name, vp] of VPS) {
    const a = await shots(b, base + '/index.html', vp);
    const s = await shots(b, base + '/shopify.html', vp);
    for (const id of Object.keys(a)) {
      if (!s[id]) { report.push(`${name} ${id}: ONTBREEKT in Shopify-weergave`); continue; }
      fs.writeFileSync(`${__dirname}/out/${name}-${id}-proto.png`, a[id].png);
      fs.writeFileSync(`${__dirname}/out/${name}-${id}-shop.png`, s[id].png);
      const A = PNG.sync.read(a[id].png), S = PNG.sync.read(s[id].png);
      if (A.width !== S.width || A.height !== S.height) { report.push(`${name} ${id}: MAAT ${A.width}x${A.height} vs ${S.width}x${S.height}`); continue; }
      const D = new PNG({ width: A.width, height: A.height });
      const n = pixelmatch(A.data, S.data, D.data, A.width, A.height, { threshold: 0.1 });
      fs.writeFileSync(`${__dirname}/out/${name}-${id}-diff.png`, PNG.sync.write(D));
      report.push(`${name} ${id}: ${n} px verschil (${(100 * n / (A.width * A.height)).toFixed(3)}%)`);
    }
  }
  await b.close();
  console.log(report.join('\n'));
})();
