// Screenshots voor 11: eigen headless browser via tools/pw.cjs.
const path = require('path');
const { launch, BASE } = require('../../tools/pw.cjs');
const OUT = path.join(__dirname, 'shots');
const URL = BASE + 'preview.html?s=11';

(async () => {
  const browser = await launch();
  const errors = [];
  async function page(w, h, opts = {}) {
    const ctx = await browser.newContext({ viewport: { width: w, height: h }, hasTouch: !!opts.touch, isMobile: !!opts.touch, reducedMotion: opts.reduced ? 'reduce' : 'no-preference' });
    const p = await ctx.newPage();
    p.on('console', m => { if (m.type() === 'error') errors.push(`${w}: ${m.text()}`); });
    p.on('pageerror', e => errors.push(`${w}: ${e.message}`));
    await p.goto(URL, { waitUntil: 'networkidle' });
    await p.waitForSelector('[data-hp="11"] details');
    await p.evaluate(() => document.fonts.ready);
    await p.waitForTimeout(300);
    return { p, ctx };
  }
  const sec = p => p.locator('[data-hp="11"]');
  const sum = (p, i) => p.locator('[data-hp="11"] .hp-11-sum').nth(i);

  let { p, ctx } = await page(1440, 900);
  const ld = await p.evaluate(() => {
    const s = document.querySelectorAll('[data-hp="11"] script[type="application/ld+json"]');
    const j = JSON.parse(s[0].textContent);
    const dom = [...document.querySelectorAll('[data-hp="11"] details')].map(d => [d.querySelector('.hp-11-q').textContent, d.querySelector('.hp-11-a').textContent]);
    const same = j.mainEntity.every((q, i) => q.name === dom[i][0] && q.acceptedAnswer.text === dom[i][1]);
    return { scripts: s.length, type: j['@type'], n: j.mainEntity.length, dom: dom.length, same };
  });
  await sec(p).screenshot({ path: path.join(OUT, '1440.png') });
  await sum(p, 2).hover();
  await p.waitForTimeout(400);
  const shift = await sum(p, 2).evaluate(e => getComputedStyle(e).paddingLeft);
  await sec(p).screenshot({ path: path.join(OUT, '1440-hover-q.png') });
  await p.mouse.move(5, 5);
  await sum(p, 1).click();
  await p.waitForTimeout(700);
  await sec(p).screenshot({ path: path.join(OUT, '1440-open.png') });
  await sum(p, 1).click();
  await p.waitForTimeout(300);
  await p.mouse.move(5, 5);
  await sum(p, 0).focus();
  await p.keyboard.press('Tab');
  await p.waitForTimeout(300);
  const focused = await p.evaluate(() => document.activeElement.className);
  await sec(p).screenshot({ path: path.join(OUT, '1440-focus.png') });
  const ow = await p.evaluate(() => document.documentElement.scrollWidth);
  await ctx.close();

  ({ p, ctx } = await page(375, 812, { touch: true }));
  await sec(p).screenshot({ path: path.join(OUT, '375.png') });
  const ow375 = await p.evaluate(() => document.documentElement.scrollWidth);
  await sum(p, 4).tap();
  await p.waitForTimeout(700);
  await sec(p).screenshot({ path: path.join(OUT, '375-tap-open.png') });
  await ctx.close();

  ({ p, ctx } = await page(375, 812, { touch: true, reduced: true }));
  await sum(p, 0).tap();
  const tr = await sum(p, 0).evaluate(e => getComputedStyle(e, '::after').transitionDuration);
  await sec(p).screenshot({ path: path.join(OUT, '375-reduced.png') });
  await ctx.close();

  await browser.close();
  console.log('JSON-LD:', JSON.stringify(ld));
  console.log('hover padding-left:', shift, '| focus:', focused, '| reduced ::after duration:', tr);
  console.log('scrollWidth 1440:', ow, '375:', ow375);
  console.log(errors.length ? 'CONSOLE-ERRORS:\n' + errors.join('\n') : 'geen console-errors');
})();
