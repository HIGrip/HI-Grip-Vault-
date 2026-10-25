// Screenshots voor sectie 02 (1.2): node sections/02-product/_shoot.cjs (vanuit v1.2)
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
  p.on('requestfailed', r => errs.push('FAIL ' + r.url()));
  await p.goto(URL, { waitUntil: 'networkidle' });
  await p.waitForSelector('[data-hp="02"] .hp-02-card');
  await p.evaluate(async () => {
    const imgs = [...document.querySelectorAll('[data-hp="02"] img')];
    imgs.forEach(i => { i.loading = 'eager'; });
    await Promise.all(imgs.map(i => i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; })));
    await document.fonts.ready;
  });
  return { ctx, p, errs };
}
// Geen fullPage: Chromium zet dan de touch-emulatie terug. Viewport is hoog genoeg voor de hele sectie.
async function shot(p, name) {
  await p.evaluate(() => window.scrollTo(0, document.querySelector('[data-hp="02"]').offsetTop));
  await p.waitForTimeout(250);
  const r = await p.locator('[data-hp="02"]').evaluate(el => { const b = el.getBoundingClientRect(); return { x: b.x, y: b.y, width: b.width, height: Math.min(b.height, innerHeight - b.y) }; });
  await p.screenshot({ path: path.join(OUT, name), clip: r });
}
const overflow = p => p.evaluate(() => document.documentElement.scrollWidth > innerWidth);

(async () => {
  const b = await launch();
  const out = {};

  let { ctx, p, errs } = await open(b, { width: 1440, height: 1500 });
  await shot(p, '1440.png');
  const q = await p.evaluate(() => [...document.querySelectorAll('.hp-02-card')].map(c => c.style.getPropertyValue('--hp-02-q')));
  await p.locator('.hp-02-media').nth(0).hover(); await p.waitForTimeout(1000);
  await shot(p, '1440-hover-10.png');
  await p.locator('.hp-02-media').nth(1).hover(); await p.waitForTimeout(1000);
  await shot(p, '1440-hover-20.png');
  await p.mouse.move(5, 5);
  await p.locator('.hp-02-swatch--wit').click(); await p.waitForTimeout(700);
  await p.mouse.move(5, 5); await p.waitForTimeout(500);
  await shot(p, '1440-swatch-wit.png');
  const href = await p.locator('[data-hp-02-cta]').getAttribute('href');
  out['1440'] = { errs, q, href, overflow: await overflow(p) };
  await ctx.close();

  // mid-scroll: de kaarten schuiven schuin in
  ({ ctx, p, errs } = await open(b, { width: 1440, height: 900 }));
  // in de preview staat 02 bijna bovenaan; een tijdelijke hero-hoge ruimte erboven simuleert de echte pagina
  await p.evaluate(() => { document.getElementById('pv-prev').style.height = '900px'; });
  await p.evaluate(() => { const l = document.querySelector('[data-hp-02-list]'); window.scrollTo(0, l.getBoundingClientRect().top + scrollY - innerHeight * 0.8); });
  await p.waitForTimeout(400);
  await p.screenshot({ path: path.join(OUT, '1440-scroll.png') });
  out['1440-scroll'] = { errs, q: await p.evaluate(() => [...document.querySelectorAll('.hp-02-card')].map(c => c.style.getPropertyValue('--hp-02-q'))) };
  await ctx.close();

  ({ ctx, p, errs } = await open(b, { width: 375, height: 1900 }, { touch: true }));
  await shot(p, '375.png');
  const before = p.url();
  await p.locator('.hp-02-media').nth(0).tap(); await p.waitForTimeout(1000);
  await shot(p, '375-tap.png');
  out['375'] = { errs, navigated: p.url() !== before, pressed: await p.locator('.hp-02-media').nth(0).getAttribute('aria-pressed'), overflow: await overflow(p) };
  await ctx.close();

  ({ ctx, p, errs } = await open(b, { width: 375, height: 1900 }, { touch: true, reduced: true }));
  await p.locator('.hp-02-media').nth(1).tap(); await p.waitForTimeout(80);
  await shot(p, '375-reduced.png');
  out['375-reduced'] = { errs, motionClass: await p.evaluate(() => document.documentElement.classList.contains('hp-motion')), q: await p.evaluate(() => document.querySelector('.hp-02-card').style.getPropertyValue('--hp-02-q')) };
  await ctx.close();

  await b.close();
  console.log(JSON.stringify(out));
})();
