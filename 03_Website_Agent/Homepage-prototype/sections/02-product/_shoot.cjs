// Screenshots voor sectie 02: node sections/02-product/_shoot.cjs
const path = require('path');
const { launch, BASE } = require('../../tools/pw.cjs');
const OUT = path.join(__dirname, 'shots');
const URL = BASE + 'preview.html?s=02';

async function open(b, vp, opts = {}) {
  const ctx = await b.newContext({ viewport: vp, hasTouch: !!opts.touch, isMobile: !!opts.touch, reducedMotion: opts.reduced ? 'reduce' : 'no-preference' });
  const p = await ctx.newPage();
  const errs = [];
  p.on('pageerror', e => errs.push(String(e)));
  p.on('console', m => m.type() === 'error' && errs.push(m.text()));
  await p.goto(URL, { waitUntil: 'networkidle' });
  await p.waitForSelector('[data-hp="02"] .hp-02-card');
  await p.evaluate(async () => {
    document.querySelectorAll('[data-hp="02"] img').forEach(i => { i.loading = 'eager'; });
    await Promise.all([...document.querySelectorAll('[data-hp="02"] img')].map(i => i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; })));
    await document.fonts.ready;
  });
  return { ctx, p, errs };
}
const sec = p => ({ screenshot: async (o) => {
  const r = await p.locator('[data-hp="02"]').evaluate(el => { const b = el.getBoundingClientRect(); return { x: b.x + scrollX, y: b.y + scrollY, width: b.width, height: b.height }; });
  // geen fullPage: Chromium zet bij fullPage de touch-emulatie terug (pointer: fine), dan verdwijnt de flip-knop
  await p.screenshot({ ...o, clip: r });
}, scrollIntoViewIfNeeded: async () => {} });

(async () => {
  const b = await launch();
  const all = [];

  // 1440 rust + hover kaart + hover cta
  let { ctx, p, errs } = await open(b, { width: 1440, height: 1100 });
  await sec(p).scrollIntoViewIfNeeded();
  await sec(p).screenshot({ path: path.join(OUT, '1440.png') });
  await p.locator('.hp-02-card').nth(0).hover();
  await p.waitForTimeout(700);
  await sec(p).screenshot({ path: path.join(OUT, '1440-hover-card.png') });
  await p.locator('.hp-02-card').nth(2).hover();
  await p.waitForTimeout(700);
  await sec(p).screenshot({ path: path.join(OUT, '1440-hover-card-10.png') });
  await p.locator('.hp-02-cta').hover();
  await p.waitForTimeout(400);
  await sec(p).screenshot({ path: path.join(OUT, '1440-hover-cta.png') });
  await p.mouse.move(5, 5);
  const flipVisible = await p.locator('.hp-02-flip').first().isVisible();
  const overflow = await p.evaluate(() => document.documentElement.scrollWidth > innerWidth);
  all.push(['1440', errs, { flipVisible, overflow }]);
  await ctx.close();

  // 375 touch: rust + tik op flip (geen navigatie)
  ({ ctx, p, errs } = await open(b, { width: 375, height: 1400 }, { touch: true }));
  await sec(p).screenshot({ path: path.join(OUT, '375.png') });
  const before = p.url();
  await p.locator('.hp-02-flip').nth(0).tap();
  await p.waitForTimeout(700);
  const after = p.url();
  const pressed = await p.locator('.hp-02-flip').nth(0).getAttribute('aria-pressed');
  await sec(p).screenshot({ path: path.join(OUT, '375-tap-flip.png') });
  const overflow375 = await p.evaluate(() => document.documentElement.scrollWidth > innerWidth);
  all.push(['375', errs, { navigated: before !== after, pressed, overflow: overflow375 }]);
  await ctx.close();

  // 375 reduced motion: tik wisselt direct
  ({ ctx, p, errs } = await open(b, { width: 375, height: 1400 }, { touch: true, reduced: true }));
  await p.locator('.hp-02-flip').nth(2).tap();
  await p.waitForTimeout(60);
  await sec(p).screenshot({ path: path.join(OUT, '375-reduced.png') });
  const dur = await p.evaluate(() => getComputedStyle(document.querySelector('.hp-02-card__img--back')).transitionDuration);
  all.push(['375-reduced', errs, { dur }]);
  await ctx.close();

  // 1024 tussenmaat (controle, geen verplichte shot)
  ({ ctx, p, errs } = await open(b, { width: 900, height: 1100 }));
  await sec(p).screenshot({ path: path.join(OUT, '900-check.png') });
  all.push(['900', errs, { overflow: await p.evaluate(() => document.documentElement.scrollWidth > innerWidth) }]);
  await ctx.close();

  await b.close();
  console.log(JSON.stringify(all, null, 1));
})();
