// Screenshots voor 09: eigen headless browser via tools/pw.cjs.
const path = require('path');
const { launch, BASE } = require('../../tools/pw.cjs');
const OUT = path.join(__dirname, 'shots');
const URL = BASE + 'preview.html?s=09';

(async () => {
  const browser = await launch();
  const errors = [];
  async function page(w, h, opts = {}) {
    const ctx = await browser.newContext({ viewport: { width: w, height: h }, hasTouch: !!opts.touch, isMobile: !!opts.touch, reducedMotion: opts.reduced ? 'reduce' : 'no-preference' });
    const p = await ctx.newPage();
    p.on('console', m => { if (m.type() === 'error') errors.push(`${w}: ${m.text()}`); });
    p.on('pageerror', e => errors.push(`${w}: ${e.message}`));
    await p.goto(URL, { waitUntil: 'networkidle' });
    await p.waitForSelector('[data-hp="09"] img');
    await p.evaluate(() => Promise.all([...document.querySelectorAll('[data-hp="09"] img')].map(i => { i.loading = 'eager'; return i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; }); })));
    await p.evaluate(() => document.fonts.ready);
    await p.waitForTimeout(300);
    return { p, ctx };
  }
  const sec = p => p.locator('[data-hp="09"]');

  let { p, ctx } = await page(1440, 900);
  await sec(p).screenshot({ path: path.join(OUT, '1440.png') });
  await p.hover('.hp-09-name:has(img[src*="spirit"])');
  await p.waitForTimeout(700);
  await sec(p).screenshot({ path: path.join(OUT, '1440-hover-logo.png') });
  const ow = await p.evaluate(() => document.documentElement.scrollWidth);
  await ctx.close();

  ({ p, ctx } = await page(375, 812, { touch: true }));
  await sec(p).screenshot({ path: path.join(OUT, '375.png') });
  const ow375 = await p.evaluate(() => document.documentElement.scrollWidth);
  await p.tap('.hp-09-name:has(img[src*="sport2000"])');
  await p.waitForTimeout(700);
  await sec(p).screenshot({ path: path.join(OUT, '375-tap-logo.png') });
  await ctx.close();

  ({ p, ctx } = await page(375, 812, { touch: true, reduced: true }));
  await sec(p).screenshot({ path: path.join(OUT, '375-reduced.png') });
  await ctx.close();

  await browser.close();
  console.log('scrollWidth 1440:', ow, '375:', ow375);
  console.log(errors.length ? 'CONSOLE-ERRORS:\n' + errors.join('\n') : 'geen console-errors');
})();
