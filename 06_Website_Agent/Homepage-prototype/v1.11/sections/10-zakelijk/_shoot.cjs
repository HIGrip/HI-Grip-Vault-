// Screenshots voor 10 (v1.2 ronde 2, stapelkaarten): eigen headless browser via tools/pw.cjs.
// Viewport-shots op vaste scrollposities zodat de stapeling zichtbaar is, plus hover, tik en reduced motion.
const fs = require('fs');
const path = require('path');
const { launch, BASE } = require('../../tools/pw.cjs');
const OUT = path.join(__dirname, 'shots');
const URL = (process.env.HP_BASE || BASE) + 'preview.html?s=10';
fs.mkdirSync(OUT, { recursive: true });
for (const f of fs.readdirSync(OUT)) if (f.endsWith('.png')) fs.unlinkSync(path.join(OUT, f));

(async () => {
  const browser = await launch();
  const errors = [];
  const log = [];
  async function page(w, h, opts = {}) {
    const ctx = await browser.newContext({ viewport: { width: w, height: h }, hasTouch: !!opts.touch, isMobile: !!opts.touch, reducedMotion: opts.reduced ? 'reduce' : 'no-preference' });
    const p = await ctx.newPage();
    p.on('console', m => { if (m.type() === 'error') errors.push(`${w}: ${m.text()}`); });
    p.on('pageerror', e => errors.push(`${w}: ${e.message}`));
    await p.goto(URL, { waitUntil: 'networkidle' });
    await p.waitForSelector('[data-hp="10"] img');
    await p.evaluate(() => Promise.all([...document.querySelectorAll('[data-hp="10"] img')].map(i => { i.loading = 'eager'; return i.decode().catch(() => 0); })));
    await p.evaluate(() => document.fonts.ready);
    // Alleen in de test: nooit echt wegnavigeren, wel loggen waar een klik heen zou gaan
    await p.evaluate(() => {
      window.__clicks = [];
      document.querySelector('[data-hp="10"]').addEventListener('click', e => {
        const a = e.target.closest('a'); if (!a) return;
        window.__clicks.push(a.getAttribute('href'));
        e.preventDefault();
      });
    });
    await p.waitForTimeout(300);
    return { p, ctx };
  }
  // scrollpositie waarop kaart i (0-based) voor fractie f over de vorige ligt; i = 0, f = 0 → sectie net binnen
  const scrollTo = async (p, i, f) => {
    await p.evaluate(([i, f]) => {
      const items = [...document.querySelectorAll('.hp-10-item')];
      // de stickies tijdelijk uit om de natuurlijke positie te meten
      items.forEach(it => { it.style.position = 'relative'; it.style.top = 'auto'; });
      const nat = items.map(it => it.getBoundingClientRect().top + scrollY);
      items.forEach(it => { it.style.position = ''; it.style.top = ''; });
      const tops = items.map(it => parseFloat(getComputedStyle(it).top));
      const h = items[0].getBoundingClientRect().height;
      let y;
      if (i === 0) y = document.querySelector('[data-hp="10"]').getBoundingClientRect().top + scrollY + f * 400;
      else y = nat[i] - tops[i] - (1 - f) * h;
      window.scrollTo(0, Math.max(0, y));
    }, [i, f]);
    await p.waitForTimeout(700);
  };
  const state = p => p.evaluate(() => ({
    current: [...document.querySelectorAll('.hp-10-item')].findIndex(i => i.classList.contains('is-current')),
    cover: [...document.querySelectorAll('.hp-10-item')].map(i => i.style.getPropertyValue('--hp-10-cover') || '-'),
    in: [...document.querySelectorAll('.hp-10-item')].map(i => i.style.getPropertyValue('--hp-10-in') || '-'),
    scrollW: document.documentElement.scrollWidth,
  }));

  for (const [w, h, tag, touch] of [[1440, 900, '1440', false], [375, 812, '375', true]]) {
    const { p, ctx } = await page(w, h, { touch });
    if (w === 1440) log.push('hrefs:\n  ' + (await p.$$eval('[data-hp="10"] a', as => as.map(a => `${(a.getAttribute('aria-labelledby') || 'cta')} → ${a.getAttribute('href')}`))).join('\n  '));
    for (const [name, i, f] of [['stack-1', 0, w === 1440 ? 0.25 : 0], [ '', 1, 0.55], ['stack-2', 1, 1], ['stack-3', 2, 0.6], ['stack-4', 2, 1]]) {
      await scrollTo(p, i, f);
      const file = name ? `${tag}-${name}.png` : `${tag}.png`;
      await p.screenshot({ path: path.join(OUT, file) });
      log.push(`${file}: ` + JSON.stringify(await state(p)));
    }
    if (w === 1440) {
      await scrollTo(p, 1, 1);
      await p.hover('.hp-10-item--retail .hp-10-media');
      await p.waitForTimeout(700);
      await p.screenshot({ path: path.join(OUT, '1440-hover-retail.png') });
      await p.click('.hp-10-item--retail .hp-10-media');
      // na de stapel: de sectie loopt door naar 11
      await p.evaluate(() => { const s = document.querySelector('[data-hp="10"]').getBoundingClientRect(); window.scrollTo(0, s.bottom + scrollY - innerHeight + 120); });
      await p.waitForTimeout(600);
      await p.screenshot({ path: path.join(OUT, '1440-end.png') });
    } else {
      await scrollTo(p, 1, 1);
      await p.$eval('.hp-10-item--retail .hp-10-card', c => c.dispatchEvent(new PointerEvent('pointerdown', { pointerType: 'touch', bubbles: true })));
      await p.waitForTimeout(500);
      await p.screenshot({ path: path.join(OUT, '375-tap-retail.png') });
      log.push('375 tik: ' + await p.$eval('.hp-10-item--retail', i => i.className));
      await p.$eval('.hp-10-item--retail .hp-10-card', c => c.dispatchEvent(new PointerEvent('pointerup', { pointerType: 'touch', bubbles: true })));
      await p.tap('.hp-10-item--retail .hp-10-title');
      await p.evaluate(() => { const s = document.querySelector('[data-hp="10"]').getBoundingClientRect(); window.scrollTo(0, s.bottom + scrollY - innerHeight + 120); });
      await p.waitForTimeout(600);
      await p.screenshot({ path: path.join(OUT, '375-end.png') });
    }
    log.push(`${tag} kliks: ` + JSON.stringify(await p.evaluate(() => window.__clicks)));
    await ctx.close();
  }

  // reduced motion: gewone lijst, hele sectie
  for (const [w, h] of [[375, 812], [1440, 900]]) {
    const { p, ctx } = await page(w, h, { touch: w < 900, reduced: true });
    await p.locator('[data-hp="10"]').screenshot({ path: path.join(OUT, `${w}-reduced.png`) });
    log.push(`${w} reduced: ` + JSON.stringify(await p.evaluate(() => ({ pos: getComputedStyle(document.querySelector('.hp-10-item')).position, transform: getComputedStyle(document.querySelector('.hp-10-card')).transform, cover: document.querySelector('.hp-10-item').style.getPropertyValue('--hp-10-cover') || '(niet gezet)' }))));
    await ctx.close();
  }

  await browser.close();
  console.log(log.join('\n'));
  console.log(errors.length ? 'CONSOLE-ERRORS:\n' + errors.join('\n') : 'geen console-errors');
})();
