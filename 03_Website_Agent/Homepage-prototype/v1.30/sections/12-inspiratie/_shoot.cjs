// Screenshots sectie 12. Draai: node sections/12-inspiratie/_shoot.cjs (server op :8766, v1.2)
const { launch, BASE } = require('../../tools/pw.cjs');
const out = __dirname + '/shots/';
const URL = BASE + 'preview.html?s=12';

async function open(browser, w, h, reduced) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, reducedMotion: reduced ? 'reduce' : 'no-preference' });
  const page = await ctx.newPage();
  const errors = [];
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', e => errors.push(String(e)));
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForSelector('[data-hp="12"]');
  await page.evaluate(() => document.fonts.ready);
  // test: transitions.css van de samengestelde 1.2-pagina erbij (pill schuift (x1+x2)/2 mee)
  await page.evaluate(() => new Promise(res => { const l = document.createElement('link'); l.rel = 'stylesheet'; l.href = 'transitions.css'; l.onload = l.onerror = res; document.head.appendChild(l); }));
  await page.evaluate(() => Promise.all([...document.querySelectorAll('[data-hp="12"] img')].map(i => { i.loading = 'eager'; return i.decode().catch(() => {}); })));
  // tijdelijk hoogte rond de sectie, zodat er te scrollen valt
  await page.evaluate(() => {
    const s = document.querySelector('[data-hp="12"]');
    for (const where of ['beforebegin', 'afterend']) {
      const d = document.createElement('div'); d.style.height = '1400px'; s.insertAdjacentElement(where, d);
    }
  });
  return { ctx, page, errors };
}
async function scrollTo(page, p) {
  // p: gewenste --hp-12-p (1 = komt binnen, 0 = midden, -1 = gaat weg)
  await page.evaluate(p => {
    const s = document.querySelector('[data-hp="12"]');
    const r = s.getBoundingClientRect(); const vh = innerHeight;
    const top = r.top + scrollY; const span = (vh + r.height) / 2;
    window.scrollTo(0, top + r.height / 2 - vh / 2 - p * span);
  }, p);
  await page.waitForTimeout(250);
}
async function titleAt(page, y) {
  // zet de bovenkant van de kop op y px in het venster (scroll-in: laag, scroll-out: hoog)
  await page.evaluate(y => { const t = document.querySelector('.hp-12-title'); window.scrollTo(0, t.getBoundingClientRect().top + scrollY - y); }, y);
  await page.waitForTimeout(250);
}
async function state(page) {
  return page.evaluate(() => {
    const s = document.querySelector('[data-hp="12"]');
    const l = [...s.querySelectorAll('.hp-12-l, .hp-12-in, .hp-12-bg')].map(e => getComputedStyle(e).transform.replace(/matrix\((.*)\)/, '$1'));
    return { p: s.style.getPropertyValue('--hp-12-p'), l, sw: document.documentElement.scrollWidth, cw: document.documentElement.clientWidth };
  });
}

async function boxes(page) {
  return page.evaluate(() => {
    const s = document.querySelector('[data-hp="12"]');
    const c = s.querySelector('.hp-12-inner').getBoundingClientRect();
    const cs = getComputedStyle(s.querySelector('.hp-12-inner'));
    const cl = c.left + parseFloat(cs.paddingLeft), cr = c.right - parseFloat(cs.paddingRight);
    const r = [...s.querySelectorAll('.hp-12-l, .hp-12-cta')].map(e => e.getBoundingClientRect());
    const pill = [Math.round(r[2].left), Math.round(r[2].right)];
    const ok = r.every(b => b.left >= cl - 0.5 && b.right <= cr + 0.5);
    return { container: [Math.round(cl), Math.round(cr)], l1: [Math.round(r[0].left), Math.round(r[0].right)], l2: [Math.round(r[1].left), Math.round(r[1].right)], pill, ok };
  });
}

(async () => {
  const browser = await launch();
  const log = [];
  for (const w of [1440, 1024]) { // uiterste scrollstanden: sectie net binnenkomend (p≈1) en net verlaten (p≈-1)
    const { ctx, page } = await open(browser, w, 900);
    for (const p of [0.999, 0, -0.999]) { await scrollTo(page, p); log.push([`box ${w} p=${p}`, await boxes(page)]); }
    await ctx.close();
  }
  { // 1440
    const { ctx, page, errors } = await open(browser, 1440, 900);
    await scrollTo(page, 0); log.push(['1440', await state(page)]);
    await page.screenshot({ path: out + '1440.png' });
    await titleAt(page, 600); log.push(['1440-scroll-in', await state(page)]);
    await page.screenshot({ path: out + '1440-scroll-in.png' });
    await titleAt(page, 690); log.push(['1440-reveal', await state(page)]);
    await page.screenshot({ path: out + '1440-reveal.png' });
    await titleAt(page, 40); log.push(['1440-scroll-out', await state(page)]);
    await page.screenshot({ path: out + '1440-scroll-out.png' });
    await scrollTo(page, 0);
    await page.hover('.hp-12-cta'); await page.waitForTimeout(300);
    await page.screenshot({ path: out + '1440-hover-cta.png' });
    log.push(['1440 errors', errors]);
    await ctx.close();
  }
  { // 375
    const { ctx, page, errors } = await open(browser, 375, 812);
    await scrollTo(page, 0.3); log.push(['375', await state(page)]);
    await scrollTo(page, 0);
    await page.screenshot({ path: out + '375.png' });
    log.push(['375 errors', errors]);
    await ctx.close();
  }
  { // 375 reduced
    const { ctx, page, errors } = await open(browser, 375, 812, true);
    await scrollTo(page, 0.4); log.push(['375-reduced', await state(page)]);
    await page.screenshot({ path: out + '375-reduced.png' });
    log.push(['375-reduced errors', errors]);
    await ctx.close();
  }
  { // 1440 reduced: regels moeten recht staan, ook buiten het midden
    const { ctx, page, errors } = await open(browser, 1440, 900, true);
    await titleAt(page, 600); log.push(['1440-reduced', await state(page)]);
    log.push(['1440-reduced errors', errors]);
    await ctx.close();
  }
  await browser.close();
  for (const [k, v] of log) console.log(k, JSON.stringify(v));
})();
