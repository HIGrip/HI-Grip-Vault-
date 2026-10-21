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
async function pause(page) { await page.clock.pauseAt(await page.evaluate(() => Date.now()) + 1000); }
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
    panel: (() => { const m = r(s.querySelector('.hp-08-panel')); return Math.round(m.width) + 'x' + Math.round(m.height); })(),
    sectionH: +r(s).height.toFixed(2),
    widestLine: Math.max(...lines.map(l => { const g = document.createRange(); g.selectNodeContents(l); return Math.ceil(g.getBoundingClientRect().width); })),
    column: Math.round(s.querySelector('.hp-08-panel').clientWidth - parseFloat(getComputedStyle(s.querySelector('.hp-08-panel')).paddingLeft) - parseFloat(getComputedStyle(s.querySelector('.hp-08-panel')).paddingRight)),
    fontPx: parseFloat(getComputedStyle(s.querySelector('.hp-08-loop')).fontSize).toFixed(1),
    p: getComputedStyle(s.querySelector('.hp-08-media')).getPropertyValue('--hp-08-p') || '(1)',
    media: (() => { const m = r(s.querySelector('.hp-08-media')); return Math.round(m.width) + 'x' + Math.round(m.height); })(),
    scrollW: document.documentElement.scrollWidth, vw: innerWidth
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
    log.push(['1440 rust (staat 2)', await measure(page)]);
    await until(page, s => s === '3333');
    log.push(['1440 staat 3', await measure(page)]);
    const hold3 = await until(page, s => s[0] === '1');
    await until(page, s => s === '1111');
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
    const ctaGeo = () => page.evaluate(() => {
      const r = el => el.getBoundingClientRect();
      const a = r(document.querySelector('.hp-08-cta')), c = r(document.querySelector('.hp-08-cta__chev')), l = r(document.querySelector('.hp-08-cta__label'));
      return { pill: Math.round(a.left) + '-' + Math.round(a.right) + ' h' + Math.round(a.height), chev: Math.round(c.left) + '-' + Math.round(c.right), label: Math.round(l.left) + '-' + Math.round(l.right), panel: Math.round(r(document.querySelector('.hp-08-panel')).right) };
    });
    log.push(['1440 cta rust', await ctaGeo()]);
    await page.hover('.hp-08-cta');
    // halverwege: alle lopende transities bevriezen op 120 ms
    await wait(30);
    await page.evaluate(() => document.getAnimations().forEach(a => { a.pause(); a.currentTime = 120; }));
    await sec.screenshot({ path: path.join(OUT, '1440-hover-cta-mid.png') });
    await page.evaluate(() => document.getAnimations().forEach(a => a.play()));
    await wait(700);
    await page.clock.runFor(400);
    await sec.screenshot({ path: path.join(OUT, '1440-hover-cta.png') });
    log.push(['1440 hover cta (cirkel rechts tegen de pillrand)', await ctaGeo()]);
    await page.mouse.move(5, 5); await wait(700);
    await page.focus('.hp-08-cta'); await page.keyboard.press('Shift'); await wait(700);
    log.push(['1440 focus cta', await ctaGeo(), await page.evaluate(() => document.querySelector('.hp-08-cta').matches(':focus-visible'))]);
    log.push(['1440 errors', errs]);
    await ctx.close();
  }

  // ---------- 1440 scroll: de foto opent vanaf de splitnaad ----------
  {
    const { ctx, page, errs } = await open(browser, { viewport: { width: 1440, height: 900 } });
    await page.evaluate(() => { document.body.style.paddingTop = '1200px'; });
    const top = await page.evaluate(() => document.querySelector('[data-hp="08"]').getBoundingClientRect().top + scrollY);
    for (const [name, off] of [['scroll-15', 900 * 0.15], ['scroll-30', 900 * 0.3]]) {
      await page.evaluate(y => scrollTo(0, y), top - 900 + off);
      await wait(250);
      const p = await page.evaluate(() => getComputedStyle(document.querySelector('.hp-08-media')).getPropertyValue('--hp-08-p'));
      await page.screenshot({ path: path.join(OUT, '1440-' + name + '.png') });
      log.push(['1440 ' + name + ' p', p]);
    }
    log.push(['1440 scroll errors', errs]);
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
    // foto helemaal in beeld scrollen (bovenrand op 40% van het scherm), zodat de scrollbeweging in de eindstand staat
    await page.evaluate(() => { document.body.style.paddingBottom = '1000px'; const m = document.querySelector('[data-hp="08"] .hp-08-media'); scrollBy(0, m.getBoundingClientRect().top - innerHeight * 0.4); });
    await wait(300); // vóór pause: de rAF-gebundelde scrollhandler draait op de nepklok
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

  // ---------- 375 tik op de pill (pointerdown touch zet .is-tap) ----------
  {
    const { ctx, page, errs } = await open(browser, { viewport: { width: 375, height: 812 }, hasTouch: true, isMobile: true, deviceScaleFactor: 2 });
    await page.evaluate(() => document.querySelector('.hp-08-cta').scrollIntoView({ block: 'center' }));
    await wait(300);
    const clip = async () => { const b = await page.locator('.hp-08-panel').boundingBox(); const sy = await page.evaluate(() => scrollY); return { x: 0, y: b.y + sy, width: 375, height: b.height }; };
    await page.screenshot({ path: path.join(OUT, '375-cta.png'), fullPage: true, clip: await clip() });
    await page.evaluate(() => document.querySelector('.hp-08-cta').dispatchEvent(new PointerEvent('pointerdown', { pointerType: 'touch', bubbles: true })));
    await wait(700);
    await page.screenshot({ path: path.join(OUT, '375-tap-cta.png'), fullPage: true, clip: await clip() });
    log.push(['375 tik cta', await page.evaluate(() => { const r = el => el.getBoundingClientRect(); const a = r(document.querySelector('.hp-08-cta')), c = r(document.querySelector('.hp-08-cta__chev')); return { tap: document.querySelector('.hp-08-cta').classList.contains('is-tap'), pill: Math.round(a.left) + '-' + Math.round(a.right), chev: Math.round(c.left) + '-' + Math.round(c.right), sw: document.documentElement.scrollWidth }; })]);
    await wait(900);
    log.push(['375 tik cta na 1,6 s (is-tap weer weg)', await page.evaluate(() => document.querySelector('.hp-08-cta').classList.contains('is-tap'))]);
    log.push(['375 tik errors', errs]);
    await ctx.close();
  }

  // ---------- 375 reduced motion ----------
  {
    const { ctx, page, sec, errs } = await open(browser, { viewport: { width: 375, height: 812 }, hasTouch: true, isMobile: true, deviceScaleFactor: 2, reducedMotion: 'reduce' });
    await page.evaluate(() => { const m = document.querySelector('[data-hp="08"] .hp-08-media'); scrollBy(0, m.getBoundingClientRect().top - innerHeight * 0.9); });
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
