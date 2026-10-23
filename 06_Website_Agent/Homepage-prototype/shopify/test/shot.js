// Schermafdruk van één sectie: node shot.js <pagina> <sectie> <uit.png> [breedte] [hoogte] [motion]
const { chromium } = require('playwright');
(async () => {
  const [page, sec, out, w = 390, h = 844, motion] = process.argv.slice(2);
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: +w, height: +h } });
  if (!motion) await p.emulateMedia({ reducedMotion: 'reduce' });
  await p.goto('http://localhost:8801/' + page, { waitUntil: 'load' });
  await p.addStyleTag({ content: 'html, body { height: auto !important; overflow: visible !important; } .page-wrapper { height: auto !important; overflow: visible !important; }' });
  await p.evaluate(async () => { document.querySelectorAll('img[loading="lazy"]').forEach((i) => { i.loading = 'eager'; }); await document.fonts.ready; for (let t = 0; t < 60; t++) { await new Promise((r) => setTimeout(r, 50)); if (Array.from(document.images).every((i) => i.complete)) break; } });
  const el = p.locator(`[data-hp="${sec}"]`).first();
  await el.scrollIntoViewIfNeeded(); await p.waitForTimeout(600);
  await el.screenshot({ path: out, animations: 'disabled' });
  await b.close();
})();
