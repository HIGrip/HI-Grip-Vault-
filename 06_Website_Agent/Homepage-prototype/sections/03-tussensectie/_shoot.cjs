// Screenshots voor sectie 03: node sections/03-tussensectie/_shoot.cjs
const path = require('path');
const { launch, BASE } = require('../../tools/pw.cjs');
const OUT = path.join(__dirname, 'shots');
const URL = BASE + 'preview.html?s=03';

async function open(b, vp, touch) {
  const ctx = await b.newContext({ viewport: vp, hasTouch: !!touch, isMobile: !!touch });
  const p = await ctx.newPage();
  const errs = [];
  p.on('pageerror', e => errs.push(String(e)));
  p.on('console', m => m.type() === 'error' && errs.push(m.text()));
  await p.goto(URL, { waitUntil: 'networkidle' });
  await p.waitForSelector('[data-hp="03"] .hp-03-list');
  await p.evaluate(() => document.fonts.ready);
  return { ctx, p, errs };
}
// pad = extra ruimte boven/onder zodat de buurstroken zichtbaar zijn
async function shot(p, file, pad = 0) {
  const r = await p.locator('[data-hp="03"]').evaluate(el => { const b = el.getBoundingClientRect(); return { x: b.x + scrollX, y: b.y + scrollY, width: b.width, height: b.height }; });
  await p.screenshot({ path: path.join(OUT, file), clip: { x: r.x, y: Math.max(0, r.y - pad), width: r.width, height: r.height + pad * 2 } });
}
const info = p => p.evaluate(() => {
  const s = document.querySelector('[data-hp="03"]');
  const items = [...s.querySelectorAll('.hp-03-item')].map(i => Math.round(i.getBoundingClientRect().top));
  const star = getComputedStyle(s.querySelector('.hp-03-star'));
  return { h: Math.round(s.getBoundingClientRect().height), itemTops: items, starPx: star.fontSize, starColor: star.color, overflow: document.documentElement.scrollWidth > innerWidth };
});

(async () => {
  const b = await launch();
  const all = [];

  let { ctx, p, errs } = await open(b, { width: 1440, height: 900 });
  await p.locator('[data-hp="03"]').scrollIntoViewIfNeeded();
  await shot(p, '1440.png');
  await shot(p, '1440-context.png', 160);
  await p.locator('.hp-03-link').hover();
  await p.waitForTimeout(300);
  await shot(p, '1440-hover-trustpilot.png');
  const deco = await p.evaluate(() => getComputedStyle(document.querySelector('.hp-03-link')).textDecorationColor);
  all.push(['1440', errs, { ...(await info(p)), hoverDeco: deco }]);
  await ctx.close();

  ({ ctx, p, errs } = await open(b, { width: 375, height: 812 }, true));
  await p.locator('[data-hp="03"]').scrollIntoViewIfNeeded();
  await shot(p, '375.png');
  await shot(p, '375-context.png', 120);
  // tikstaat: focus + :active (muis ingedrukt houden zonder los te laten = geen navigatie)
  await p.locator('.hp-03-link').focus();
  const bx = await p.locator('.hp-03-link').boundingBox();
  await p.mouse.move(bx.x + bx.width / 2, bx.y + bx.height / 2);
  await p.mouse.down();
  await p.waitForTimeout(300);
  await shot(p, '375-tap-trustpilot.png');
  const deco375 = await p.evaluate(() => getComputedStyle(document.querySelector('.hp-03-link')).textDecorationColor);
  await p.mouse.up().catch(() => {});
  all.push(['375', errs, { ...(await info(p)), tapDeco: deco375, url: p.url() }]);
  await ctx.close();

  await b.close();
  console.log(JSON.stringify(all, null, 1));
})();
