// Screenshots + checks voor 13 FOOTER. Draai vanuit HP: node sections/13-footer/_shoot.cjs
const path = require('path');
const fs = require('fs');
const { launch, BASE } = require('../../tools/pw.cjs');
const OUT = path.join(__dirname, 'shots');
const facts = JSON.parse(fs.readFileSync(path.join(__dirname, '../../contract/facts.json'), 'utf8'));
const want = facts.footer.groups.flatMap(g => g.links.map(l => l.url));

(async () => {
  const b = await launch();
  const errs = [];
  const open = async (w, h, opts = {}) => {
    const ctx = await b.newContext({ viewport: { width: w, height: h }, ...opts });
    const p = await ctx.newPage();
    p.on('pageerror', e => errs.push(String(e)));
    p.on('console', m => m.type() === 'error' && errs.push(m.text()));
    await p.goto(BASE + 'preview.html?s=13', { waitUntil: 'networkidle' });
    await p.waitForSelector('[data-hp="13"]');
    await p.evaluate(() => document.fonts.ready);
    return p;
  };
  const sec = p => p.locator('[data-hp="13"]');

  // 1440
  let p = await open(1440, 900);
  await sec(p).screenshot({ path: path.join(OUT, '1440.png') });
  const hrefs = await p.$$eval('[data-hp="13"] a', as => as.map(a => a.getAttribute('href')));
  console.log('hrefs', hrefs.length);
  hrefs.forEach(h => console.log('  ', want.includes(h) ? 'OK ' : 'XX ', h));
  console.log('missend uit facts:', want.filter(u => !hrefs.includes(u)));
  await p.locator('.hp-13-link', { hasText: 'Over ons' }).hover();
  await p.waitForTimeout(300);
  await sec(p).screenshot({ path: path.join(OUT, '1440-hover-link.png') });
  await p.context().close();

  // 375
  p = await open(375, 812, { hasTouch: true, isMobile: true });
  await sec(p).screenshot({ path: path.join(OUT, '375.png') });
  const m = await p.evaluate(() => ({
    sw: document.documentElement.scrollWidth,
    minLink: Math.min(...[...document.querySelectorAll('[data-hp="13"] a')].map(a => a.getBoundingClientRect().height)),
  }));
  console.log('375 scrollWidth', m.sw, 'kleinste linkhoogte', m.minLink);
  await p.keyboard.press('Shift');
  await p.locator('.hp-13-link', { hasText: 'Retourbeleid' }).focus();
  await p.waitForTimeout(300);
  await sec(p).screenshot({ path: path.join(OUT, '375-focus-link.png') });
  await p.context().close();

  // 375 reduced
  p = await open(375, 812, { reducedMotion: 'reduce', hasTouch: true, isMobile: true });
  await sec(p).screenshot({ path: path.join(OUT, '375-reduced.png') });
  await p.context().close();

  console.log('console-errors', errs);
  await b.close();
})();
