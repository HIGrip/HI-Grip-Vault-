// Screenshots voor 09 (1.2): eigen headless browser via tools/pw.cjs (BASE 8766).
const path = require('path');
const { launch, BASE } = require('../../tools/pw.cjs');
const OUT = path.join(__dirname, 'shots');
const URL = BASE + 'preview.html?s=09';

// Middelpunt van een zichtbaar, nog niet gekleurd logo-item binnen de band
const pick = () => {
  const vp = document.querySelector('[data-hp-09-viewport]').getBoundingClientRect();
  const all = [...document.querySelectorAll('[data-hp="09"] .hp-09-item')].filter(el => {
    const b = el.getBoundingClientRect();
    return el.querySelector('img') && b.left > vp.left + 20 && b.right < vp.right - 20;
  });
  const it = all.find(el => !el.classList.contains('is-lit')) || all[0];
  const b = it.getBoundingClientRect();
  return { x: b.left + b.width / 2, y: b.top + b.height / 2 };
};

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
    await p.locator('[data-hp="09"]').scrollIntoViewIfNeeded();
    await p.waitForTimeout(1500);
    return { p, ctx };
  }
  const shot = (p, name) => p.locator('[data-hp="09"]').screenshot({ path: path.join(OUT, name) });
  const report = [];

  let { p, ctx } = await page(1440, 900);
  await shot(p, '1440.png');
  report.push('hoogte 1440: ' + await p.evaluate(() => document.querySelector('[data-hp="09"]').offsetHeight));
  const pt = await p.evaluate(pick);
  await p.mouse.move(pt.x, pt.y);
  await p.waitForTimeout(1600);
  await shot(p, '1440-hover-logo.png');
  report.push('scrollWidth 1440: ' + await p.evaluate(() => document.documentElement.scrollWidth));
  await ctx.close();

  ({ p, ctx } = await page(375, 812, { touch: true }));
  await shot(p, '375.png');
  report.push('hoogte 375: ' + await p.evaluate(() => document.querySelector('[data-hp="09"]').offsetHeight));
  report.push('scrollWidth 375: ' + await p.evaluate(() => document.documentElement.scrollWidth));
  const pt2 = await p.evaluate(pick);
  await p.touchscreen.tap(pt2.x, pt2.y);
  await p.waitForTimeout(1200);
  await shot(p, '375-tap-logo.png');
  await ctx.close();

  ({ p, ctx } = await page(375, 812, { touch: true, reduced: true }));
  await shot(p, '375-reduced.png');
  report.push('hoogte 375 reduced: ' + await p.evaluate(() => document.querySelector('[data-hp="09"]').offsetHeight));
  await ctx.close();

  await browser.close();
  console.log(report.join('\n'));
  console.log(errors.length ? 'CONSOLE-ERRORS:\n' + errors.join('\n') : 'geen console-errors');
})();
