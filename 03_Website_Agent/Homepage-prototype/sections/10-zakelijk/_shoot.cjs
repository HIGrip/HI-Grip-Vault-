// Screenshots voor 10: eigen headless browser via tools/pw.cjs.
const fs = require('fs');
const path = require('path');
const { launch, BASE } = require('../../tools/pw.cjs');
const OUT = path.join(__dirname, 'shots');
const URL = BASE + 'preview.html?s=10';
fs.mkdirSync(OUT, { recursive: true });

(async () => {
  const browser = await launch();
  const errors = [];
  async function page(w, h, opts = {}) {
    const ctx = await browser.newContext({ viewport: { width: w, height: h }, hasTouch: !!opts.touch, isMobile: !!opts.touch, reducedMotion: opts.reduced ? 'reduce' : 'no-preference' });
    const p = await ctx.newPage();
    p.on('console', m => { if (m.type() === 'error') errors.push(`${w}: ${m.text()}`); });
    p.on('pageerror', e => errors.push(`${w}: ${e.message}`));
    await p.goto(URL, { waitUntil: 'networkidle' });
    await p.waitForSelector('[data-hp="10"] img');
    await p.evaluate(() => Promise.all([...document.querySelectorAll('[data-hp="10"] img')].map(i => { i.loading = 'eager'; return i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; }); })));
    await p.evaluate(() => document.fonts.ready);
    // Alleen in de test: links niet laten wegnavigeren, wel de href loggen
    await p.evaluate(() => {
      window.__clicked = [];
      document.querySelector('[data-hp="10"]').addEventListener('click', e => { const a = e.target.closest('a'); if (a) { e.preventDefault(); window.__clicked.push(a.href); } }, true);
    });
    await p.waitForTimeout(300);
    return { p, ctx };
  }
  // Viewport even zo hoog als de pagina, zodat de elementshot niet buiten de viewport hoeft te renderen
  const sec = p => ({ screenshot: async o => {
    const vp = p.viewportSize();
    const h = await p.evaluate(() => document.documentElement.scrollHeight);
    await p.setViewportSize({ width: vp.width, height: h });
    await p.waitForTimeout(200);
    await p.locator('[data-hp="10"]').screenshot(o);
    await p.setViewportSize(vp);
  } });

  let { p, ctx } = await page(1440, 900);
  const hrefs = await p.$$eval('[data-hp="10"] a', as => as.map(a => `${a.className.split(' ').slice(-1)[0]} → ${a.getAttribute('href')}`));
  await sec(p).screenshot({ path: path.join(OUT, '1440.png') });
  await p.hover('.hp-10-card--retail');
  await p.waitForTimeout(800);
  await sec(p).screenshot({ path: path.join(OUT, '1440-hover-card.png') });
  const widths = await p.$$eval('.hp-10-item', els => els.map(e => Math.round(e.getBoundingClientRect().width)));
  await p.hover('.hp-10-cta');
  await p.waitForTimeout(500);
  await p.locator('.hp-10-cta').screenshot({ path: path.join(OUT, '1440-hover-cta-el.png') });
  await sec(p).screenshot({ path: path.join(OUT, '1440-hover-cta.png') });
  fs.unlinkSync(path.join(OUT, '1440-hover-cta-el.png'));
  const ow = await p.evaluate(() => document.documentElement.scrollWidth);
  await ctx.close();

  ({ p, ctx } = await page(375, 812, { touch: true }));
  await sec(p).screenshot({ path: path.join(OUT, '375.png') });
  const ow375 = await p.evaluate(() => document.documentElement.scrollWidth);
  await p.locator('.hp-10-card--club').scrollIntoViewIfNeeded();
  await p.tap('.hp-10-card--club');
  await p.waitForTimeout(800);
  const tapped = await p.evaluate(() => ({ on: [...document.querySelectorAll('.hp-10-item.is-on .hp-10-card')].map(a => a.getAttribute('href')), clicked: window.__clicked }));
  await p.locator('.hp-10-item:first-child').screenshot({ path: path.join(OUT, '375-tap-card.png') });
  await ctx.close();

  ({ p, ctx } = await page(375, 812, { touch: true, reduced: true }));
  await p.locator('.hp-10-card--retail').scrollIntoViewIfNeeded();
  await p.tap('.hp-10-card--retail');
  await p.waitForTimeout(300);
  const reducedTransform = await p.$eval('.hp-10-sock--zwart', el => getComputedStyle(el).transform);
  await sec(p).screenshot({ path: path.join(OUT, '375-reduced.png') });
  await ctx.close();

  await browser.close();
  console.log('hrefs:\n  ' + hrefs.join('\n  '));
  console.log('breedtes bij hover retail:', widths.join(' / '));
  console.log('tik 375:', JSON.stringify(tapped));
  console.log('reduced sok-zwart transform na tik:', reducedTransform);
  console.log('scrollWidth 1440:', ow, '375:', ow375);
  console.log(errors.length ? 'CONSOLE-ERRORS:\n' + errors.join('\n') : 'geen console-errors');
})();
