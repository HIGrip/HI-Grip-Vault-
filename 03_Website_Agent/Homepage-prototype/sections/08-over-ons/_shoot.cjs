// Screenshots en metingen voor 08 OVER ONS. Draai vanuit deze map: node _shoot.cjs
// De staten worden vastgezet met Playwright's nepklok (page.clock), zodat elke opname exact één moment in de lus is.
const path = require('path');
const { launch, BASE } = require('../../tools/pw.cjs');
const OUT = path.join(__dirname, 'shots');
const URL = BASE + 'preview.html?s=08';
const wait = ms => new Promise(r => setTimeout(r, ms));

async function open(browser, opts, { clock = false } = {}) {
  const ctx = await browser.newContext(opts);
  const page = await ctx.newPage();
  const errs = [];
  page.on('pageerror', e => errs.push(String(e)));
  page.on('console', m => m.type() === 'error' && errs.push(m.text()));
  page.on('requestfailed', r => errs.push('FAILED ' + r.url()));
  if (clock) await page.clock.install();
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForSelector('[data-hp="08"] .hp-08-line', { state: 'attached' });
  await page.evaluate(async () => {
    const img = document.querySelector('[data-hp="08"] img');
    img.loading = 'eager';
    if (!img.complete) await new Promise(r => { img.onload = img.onerror = r; });
    await Promise.all(['300 1em Poppins', '900 1em Poppins', 'italic 800 1em Poppins'].map(f => document.fonts.load(f)));
    await document.fonts.ready;
  });
  const sec = page.locator('[data-hp="08"]');
  await sec.scrollIntoViewIfNeeded();
  return { ctx, page, sec, errs };
}


const statesOf = page => page.evaluate(() => [...document.querySelectorAll('[data-hp="08"] .hp-08-line')].map(l => l.dataset.s).join(''));
// Nepklok pauzeren en in stapjes van 10 ms doorlopen tot de regels in de gevraagde combinatie staan.
async function pause(page) { await page.clock.pauseAt(await page.evaluate(() => Date.now()) + 1); }
async function until(page, test, max = 4000) {
  for (let t = 0; t < max; t += 10) { if (test(await statesOf(page))) return t; await page.clock.runFor(10); }
  throw new Error('staat niet bereikt');
}

const measure = page => page.evaluate(() => {
  const s = document.querySelector('[data-hp="08"]');
  const lines = [...s.querySelectorAll('.hp-08-line')];
  const r = el => el.getBoundingClientRect();
  return {
    states: lines.map(l => l.dataset.s).join(''),
    linesH: +r(s.querySelector('.hp-08-lines')).height.toFixed(2),
    textH: +r(s.querySelector('.hp-08-text')).height.toFixed(2),
    sectionH: +r(s).height.toFixed(2),
    widestLine: Math.max(...lines.map(l => { const g = document.createRange(); g.selectNodeContents(l); return Math.ceil(g.getBoundingClientRect().width); })),
    column: Math.round(r(s.querySelector('.hp-08-text')).width),
    media: (() => { const m = r(s.querySelector('.hp-08-media')); return Math.round(m.width) + 'x' + Math.round(m.height); })(),
    scrollW: document.documentElement.scrollWidth, vw: innerWidth,
    // uitlijning: looptekst links gelijk met body; looptekst boven gelijk met foto; pill onder gelijk met foto
    lijn: (() => { const L = r(s.querySelector('.hp-08-lines')), B = r(s.querySelector('.hp-08-body')), F = r(s.querySelector('.hp-08-foot')), M = r(s.querySelector('.hp-08-media')); return { links: Math.round(L.left - B.left), boven: Math.round(L.top - M.top), onder: Math.round(M.bottom - F.bottom) }; })()
  };
});

(async () => {
  const browser = await launch();
  const log = [];

  // ---------- 1440 met nepklok: de drie staten en een wissel halverwege ----------
  {
    const { ctx, page, sec, errs } = await open(browser, { viewport: { width: 1440, height: 900 } }, { clock: true });
    await pause(page);
    await until(page, s => s === '2222');
    await sec.screenshot({ path: path.join(OUT, '1440.png') });
    await sec.screenshot({ path: path.join(OUT, '1440-state-2.png') });
    log.push(['1440 rust (staat 2)', await measure(page)]);
    await until(page, s => s === '3333');
    await sec.screenshot({ path: path.join(OUT, '1440-state-3.png') });
    log.push(['1440 staat 3', await measure(page)]);
    const hold3 = await until(page, s => s[0] === '1');
    await until(page, s => s === '1111');
    await sec.screenshot({ path: path.join(OUT, '1440-state-1.png') });
    log.push(['1440 staat 1 (staat 3 stond ' + hold3 + ' ms na volledig)', await measure(page)]);
    // wissel naar staat 2 halverwege: bovenste regels al zwaar, onderste nog dun
    await until(page, s => s === '2221');
    await sec.screenshot({ path: path.join(OUT, '1440-switch.png') });
    log.push(['1440 wissel', await measure(page)]);
    const lastLine = await until(page, s => s === '2222');
    log.push(['1440 laatste regel volgt na ms', lastLine]);
    // hover op de pill
    await page.clock.runFor(400);
    await until(page, s => s === '2222');
    await page.hover('.hp-08-cta');
    await wait(400);
    await page.clock.runFor(400);
    await sec.screenshot({ path: path.join(OUT, '1440-hover-cta.png') });
    log.push(['1440 hover chevron', await page.evaluate(() => getComputedStyle(document.querySelector('.hp-08-cta .hp-pill__chev')).transform)]);
    log.push(['1440 errors', errs]);
    await ctx.close();
  }

  // ---------- 1440 echte klok: lus loopt in beeld, pauzeert erbuiten ----------
  {
    const { ctx, page, errs } = await open(browser, { viewport: { width: 1440, height: 900 } });
    const seen = await page.evaluate(() => new Promise(res => {
      const s = new Set(); const t0 = performance.now();
      (function tick() { s.add([...document.querySelectorAll('[data-hp="08"] .hp-08-line')].map(l => l.dataset.s).join('')); performance.now() - t0 < 3000 ? requestAnimationFrame(tick) : res([...s]); })();
    }));
    log.push(['1440 echte klok, combinaties in 3 s', seen]);
    await page.evaluate(() => scrollTo(0, 0));
    await page.evaluate(() => { document.body.style.paddingBottom = '3000px'; scrollTo(0, document.querySelector('[data-hp="08"]').getBoundingClientRect().bottom + scrollY + 1200); });
    await wait(400);
    const a = await measure(page); await wait(2000); const b = await measure(page);
    log.push(['1440 buiten beeld (moet gelijk blijven)', a.states, b.states]);
    log.push(['1440 echte klok errors', errs]);
    await ctx.close();
  }

  // ---------- 375 ----------
  {
    const { ctx, page, sec, errs } = await open(browser, { viewport: { width: 375, height: 812 }, hasTouch: true, isMobile: true, deviceScaleFactor: 2 }, { clock: true });
    await pause(page);
    await until(page, s => s === '2222');
    await sec.screenshot({ path: path.join(OUT, '375.png') });
    log.push(['375 staat 2', await measure(page)]);
    await until(page, s => s === '3333');
    log.push(['375 staat 3', await measure(page)]);
    await until(page, s => s === '1111');
    log.push(['375 staat 1', await measure(page)]);
    log.push(['375 errors', errs]);
    await ctx.close();
  }

  // ---------- 375 reduced motion ----------
  {
    const { ctx, page, sec, errs } = await open(browser, { viewport: { width: 375, height: 812 }, hasTouch: true, isMobile: true, deviceScaleFactor: 2, reducedMotion: 'reduce' });
    const a = await measure(page);
    await wait(3000);
    const b = await measure(page);
    await sec.screenshot({ path: path.join(OUT, '375-reduced.png') });
    log.push(['375 reduced (staat 2, stil)', a.states, b.states]);
    log.push(['375 reduced errors', errs]);
    await ctx.close();
  }

  // ---------- breedtes: past de breedste staat overal in de kolom? (reduced motion = geen lus, staten met de hand) ----------
  for (const w of [320, 375, 768, 800, 1024, 1199, 1200, 1440, 1920]) {
    const { ctx, page, errs } = await open(browser, { viewport: { width: w, height: 900 }, reducedMotion: 'reduce' });
    const row = {};
    for (const s of ['1', '2', '3']) {
      await page.evaluate(s => document.querySelectorAll('[data-hp="08"] .hp-08-line').forEach(l => { l.dataset.s = s; }), s);
      await wait(100); // reduced motion zet transition-duration 0.01ms op alles: computed waarden volgen pas na een frame
      const m = await measure(page);
      row['s' + s] = m.widestLine + '/' + m.column + ' h' + m.linesH + ' sw' + m.scrollW;
      if (m.widestLine > m.column || m.scrollW > m.vw) row.fout = true;
    }
    log.push(['breedte ' + w, row, errs]);
    await ctx.close();
  }

  await browser.close();
  for (const l of log) console.log(JSON.stringify(l));
})();
