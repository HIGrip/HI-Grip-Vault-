// Kleurwissel in sectie 02: beelden van de 2.0-kaart vóór, tijdens en na een klik op "wit" (beweging aan).
const { chromium } = require('playwright');
(async () => {
  const [page, out] = process.argv.slice(2);
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  await p.goto('http://localhost:8801/' + page, { waitUntil: 'load' });
  await p.addStyleTag({ content: 'html, body { height: auto !important; overflow: visible !important; } .page-wrapper { height: auto !important; overflow: visible !important; }' });
  await p.evaluate(async () => { document.querySelectorAll('img[loading="lazy"]').forEach((i) => { i.loading = 'eager'; }); await document.fonts.ready; for (let t = 0; t < 60; t++) { await new Promise((r) => setTimeout(r, 50)); if (Array.from(document.images).every((i) => i.complete)) break; } });
  const card = p.locator('[data-hp="02"] .hp-02-card--20');
  await card.scrollIntoViewIfNeeded(); await p.waitForTimeout(1200);
  const media = card.locator('.hp-02-media');
  await media.screenshot({ path: out + '-0.png' });
  await card.locator('.hp-02-swatch--wit').click();
  await p.waitForTimeout(200); await media.screenshot({ path: out + '-1.png' });
  await p.waitForTimeout(700); await media.screenshot({ path: out + '-2.png' });
  console.log(await card.evaluate((c) => [...c.querySelectorAll('.hp-02-media__prod')].map((i) => i.className.split('--')[1] + ' ' + getComputedStyle(i).translate + ' ' + getComputedStyle(i).clipPath).join(' | ')));
  await b.close();
})();
