// Screenshots voor sectie 05 (1.2) met een eigen headless browser (tools/pw.cjs, BASE 8766). Gebruik: node _shoot.cjs
const path = require('path');
const { launch, BASE } = require('../../tools/pw.cjs');
const OUT = path.join(__dirname, 'shots');
// SHOT_BASE kan naar een eigen server wijzen als de gedeelde 8766 overbelast is (ERR_CONNECTION_REFUSED).
const URL = (process.env.SHOT_BASE || BASE) + 'preview.html?s=05';
const wait = ms => new Promise(r => setTimeout(r, ms));

async function open(b, vp, opts = {}) {
  const ctx = await b.newContext({ viewport: vp, deviceScaleFactor: 1, hasTouch: !!opts.touch, isMobile: !!opts.touch, reducedMotion: opts.reduced ? 'reduce' : 'no-preference' });
  const p = await ctx.newPage();
  const errs = [], reqs = [];
  p.on('pageerror', e => errs.push('pageerror: ' + e));
  p.on('console', m => m.type() === 'error' && errs.push('console: ' + m.text()));
  p.on('requestfailed', r => errs.push('failed: ' + r.url()));
  p.on('request', r => { if (r.url().includes('/f360/')) reqs.push(r.url().split('/').pop()); });
  // Zoals op de echte pagina: 05 ligt ver onder de vouw (vorige buurstrook 3000px hoog), om lazy laden te meten.
  await p.addInitScript(() => { document.addEventListener('DOMContentLoaded', () => { const el = document.getElementById('pv-prev'); if (el) el.style.height = '3000px'; }); });
  await p.goto(URL, { waitUntil: 'networkidle' });
  await p.waitForSelector('[data-hp="05"] .hp-05-stage');
  await wait(300);
  return { ctx, p, errs, reqs, framesAtLoad: new Set(reqs).size };
}
const tweenMs = p => p.getAttribute('[data-hp="05"]', 'data-hp-05-tween');
async function scrollTo(p, sel, block) {
  await p.evaluate(([s, bl]) => document.querySelector(s).scrollIntoView({ block: bl }), [sel, block]);
}
async function tapFeature(p, f) {
  // mobiel: beeld bovenaan in beeld, kaartenrij eronder (zoals een bezoeker het ziet)
  await p.evaluate(() => {
    const st = document.querySelector('.hp-05-stage');
    window.scrollBy(0, st.getBoundingClientRect().top - 24);
  });
  await wait(300);
  await p.tap(`.hp-05-feat[data-f="${f}"]`);
}

(async () => {
  const b = await launch();
  const log = [];

  // 1440
  {
    const s = await open(b, { width: 1440, height: 900 });
    log.push(`1440 frames bij paginalading: ${s.framesAtLoad}`);
    await scrollTo(s.p, '.hp-05-stage', 'center');
    await wait(4200);
    log.push(`1440 frames na binnenscrollen: ${new Set(s.reqs).size}; intro-tween ${await tweenMs(s.p)} ms, actief: ${await s.p.getAttribute('.hp-05-feat[aria-pressed="true"]', 'data-f')}`);
    await s.p.locator('[data-hp="05"]').screenshot({ path: path.join(OUT, '1440.png') });
    // automatische doorloop: na ±4,5 s hoort feature 2 actief te zijn
    await s.p.mouse.move(5, 5);
    await wait(5600);
    log.push(`1440 auto na 5,6 s: actief ${await s.p.getAttribute('.hp-05-feat[aria-pressed="true"]', 'data-f')}, is-auto ${await s.p.evaluate(() => document.querySelector('[data-hp="05"]').classList.contains('is-auto'))}`);
    await s.p.screenshot({ path: path.join(OUT, '1440-auto.png') });
    const ov = await s.p.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    log.push(`1440 horizontale overflow: ${ov}`);
    for (const f of ['compressie', 'hiel', 'ademend', 'coolmax', 'naadloos', 'cushioning', 'materialen', 'grip']) {
      await s.p.hover(`.hp-05-feat[data-f="${f}"]`);
      await wait(1500);
      log.push(`1440 hover ${f}: tween ${await tweenMs(s.p)} ms`);
      await s.p.screenshot({ path: path.join(OUT, `1440-hover-${f}.png`) });
    }
    await s.p.hover('.hp-05-feat[data-f="hiel"]');
    await wait(1500);
    await s.p.hover('.hp-05-feat[data-f="compressie"]');
    await wait(70 + 110);
    await s.p.screenshot({ path: path.join(OUT, '1440-tween-mid.png') });
    await wait(1200);
    // snel wisselen: geen sprong (positie moet continu blijven)
    const jumps = await s.p.evaluate(async () => {
      const st = document.querySelector('.hp-05-stage');
      const vals = [], ts = [];
      let run = true;
      (function rec(t) { vals.push(+st.getAttribute('aria-valuenow')); ts.push(performance.now()); if (run) requestAnimationFrame(rec); })();
      const fire = f => document.querySelector(`.hp-05-feat[data-f="${f}"]`).click();
      fire('compressie'); await new Promise(r => setTimeout(r, 180));
      fire('grip'); await new Promise(r => setTimeout(r, 180));
      fire('materialen'); await new Promise(r => setTimeout(r, 1000));
      run = false;
      let max = 0, gap = 0;
      for (let i = 1; i < vals.length; i++) { let d = Math.abs(vals[i] - vals[i - 1]); d = Math.min(d, 360 - d); max = Math.max(max, d); gap = Math.max(gap, ts[i] - ts[i - 1]); }
      return { max, gap: Math.round(gap), n: vals.length };
    });
    log.push(`1440 snel wisselen: grootste stap ${jumps.max}° per beeldje, langste beeldje ${jumps.gap} ms (${jumps.n} beeldjes)`);
    // slepen
    const box = await s.p.locator('.hp-05-stage').boundingBox();
    const y = box.y + box.height * 0.45;
    await s.p.mouse.move(box.x + box.width * 0.7, y);
    await s.p.mouse.down();
    for (let i = 1; i <= 20; i++) { await s.p.mouse.move(box.x + box.width * 0.7 - i * 10, y); await wait(16); }
    await s.p.mouse.up();
    await wait(1200);
    await s.p.screenshot({ path: path.join(OUT, '1440-drag.png') });
    log.push('1440 errors: ' + JSON.stringify(s.errs));
    await s.ctx.close();
  }

  // 375
  {
    const s = await open(b, { width: 375, height: 812 }, { touch: true });
    log.push(`375 frames bij paginalading: ${s.framesAtLoad}`);
    await scrollTo(s.p, '.hp-05-stage', 'center');
    await wait(4200);
    await scrollTo(s.p, '[data-hp="05"]', 'start');
    await wait(300);
    await s.p.screenshot({ path: path.join(OUT, '375.png') });
    await s.p.locator('[data-hp="05"]').screenshot({ path: path.join(OUT, '375-full.png') });
    await s.p.evaluate(() => window.scrollBy(0, document.querySelector('.hp-05-stage').getBoundingClientRect().top - 24));
    await wait(300);
    await s.p.screenshot({ path: path.join(OUT, '375-stage.png') });
    const ov = await s.p.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    log.push(`375 horizontale overflow: ${ov}`);
    for (const f of ['compressie', 'coolmax', 'cushioning', 'materialen']) {
      await tapFeature(s.p, f);
      await wait(1500);
      log.push(`375 tik ${f}: actief ${await s.p.getAttribute('.hp-05-feat[aria-pressed="true"]', 'data-f')}`);
      await s.p.screenshot({ path: path.join(OUT, `375-tap-${f}.png`) });
    }
    // swipe in de kaartenrij: touch-pointerdown + horizontaal scrollen → de kaart die op de startpositie landt wordt actief
    await s.p.evaluate(() => {
      const l = document.querySelector('.hp-05-list');
      l.dispatchEvent(new PointerEvent('pointerdown', { pointerType: 'touch', bubbles: true }));
      const li = document.querySelector('.hp-05-feat[data-f="naadloos"]').parentNode;
      l.scrollTo({ left: li.offsetLeft - parseFloat(getComputedStyle(l).paddingLeft) });
    });
    await wait(1600);
    log.push(`375 swipe naar naadloos: actief ${await s.p.getAttribute('.hp-05-feat[aria-pressed="true"]', 'data-f')}`);
    await s.p.screenshot({ path: path.join(OUT, '375-swipe-naadloos.png') });
    log.push('375 errors: ' + JSON.stringify(s.errs));
    await s.ctx.close();
  }

  // 375 reduced motion
  {
    const s = await open(b, { width: 375, height: 812 }, { touch: true, reduced: true });
    await scrollTo(s.p, '.hp-05-stage', 'center');
    await wait(800);
    log.push('375 reduced na binnenscrollen actief: ' + await s.p.getAttribute('.hp-05-feat[aria-pressed="true"]', 'data-f') + ', tween-attr: ' + await tweenMs(s.p));
    await tapFeature(s.p, 'materialen');
    await wait(250);
    await s.p.screenshot({ path: path.join(OUT, '375-reduced.png') });
    log.push('375 reduced errors: ' + JSON.stringify(s.errs));
    await s.ctx.close();
  }

  await b.close();
  console.log(log.join('\n'));
})().catch(e => { console.error(e); process.exit(1); });
