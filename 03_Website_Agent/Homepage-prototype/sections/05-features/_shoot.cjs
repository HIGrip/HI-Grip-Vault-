// Screenshots voor sectie 05 met een eigen headless browser (tools/pw.cjs). Gebruik: node _shoot.cjs
const path = require('path');
const { launch, BASE } = require('../../tools/pw.cjs');
const OUT = path.join(__dirname, 'shots');
const URL = BASE + 'preview.html?s=05';
const wait = ms => new Promise(r => setTimeout(r, ms));

async function open(b, vp, opts = {}) {
  const ctx = await b.newContext({ viewport: vp, deviceScaleFactor: 1, hasTouch: !!opts.touch, isMobile: !!opts.touch, reducedMotion: opts.reduced ? 'reduce' : 'no-preference' });
  const p = await ctx.newPage();
  const errs = [], reqs = [];
  p.on('pageerror', e => errs.push('pageerror: ' + e));
  p.on('console', m => m.type() === 'error' && errs.push('console: ' + m.text()));
  p.on('request', r => { if (r.url().includes('/f360/')) reqs.push(r.url().split('/').pop()); });
  p.on('requestfailed', r => errs.push('failed: ' + r.url()));
  // Zoals op de echte pagina: 05 ligt ver onder de vouw (vorige buurstrook 3000px hoog), om lazy laden te meten.
  if (opts.far) await p.addInitScript(() => { document.addEventListener('DOMContentLoaded', () => { const el = document.getElementById('pv-prev'); if (el) el.style.height = '3000px'; }); });
  await p.goto(URL, { waitUntil: 'networkidle' });
  await p.waitForSelector('[data-hp="05"] .hp-05-stage');
  const framesAtLoad = reqs.length;
  return { ctx, p, errs, reqs, framesAtLoad };
}
async function toSection(p) {
  await p.evaluate(() => document.querySelector('[data-hp="05"]').scrollIntoView({ block: 'start' }));
  await wait(400);
  await p.waitForLoadState('networkidle');
  await wait(300);
}
async function centerStage(p) {
  await p.evaluate(() => document.querySelector('.hp-05-stage').scrollIntoView({ block: 'center' }));
  await wait(400);
}
async function shotSection(p, name) {
  await p.locator('[data-hp="05"]').screenshot({ path: path.join(OUT, name) });
}

(async () => {
  const b = await launch();
  const log = [];

  // 1440 rust
  {
    const s = await open(b, { width: 1440, height: 900 }, { far: true });
    log.push(`1440 frames bij paginalading: ${s.framesAtLoad}`);
    await toSection(s.p);
    await centerStage(s.p);
    await s.p.waitForLoadState('networkidle');
    await wait(300);
    log.push(`1440 frames na naderen: ${s.reqs.length}`);
    await shotSection(s.p, '1440.png');
    const ov = await s.p.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    log.push(`1440 horizontale overflow: ${ov}`);

    for (const f of ['hiel', 'grip', 'ademend', 'compressie']) {
      await s.p.hover(`.hp-05-feat[data-f="${f}"]`);
      await wait(1700);
      await s.p.screenshot({ path: path.join(OUT, `1440-hover-${f}.png`) });
    }

    // slepen
    await s.p.click('.hp-05-reset');
    await wait(1100);
    const box = await s.p.locator('.hp-05-stage').boundingBox();
    const y = box.y + box.height * 0.45;
    await s.p.mouse.move(box.x + box.width * 0.7, y);
    await s.p.mouse.down();
    for (let i = 1; i <= 20; i++) { await s.p.mouse.move(box.x + box.width * 0.7 - i * 12, y); await wait(16); }
    await s.p.mouse.up();
    await wait(1200);
    await s.p.screenshot({ path: path.join(OUT, '1440-drag.png') });
    log.push('1440 na slepen aria-valuenow: ' + await s.p.getAttribute('.hp-05-stage', 'aria-valuenow'));
    log.push(`1440 frames aan het eind: ${new Set(s.reqs).size}`);
    log.push('1440 errors: ' + JSON.stringify(s.errs));
    await s.ctx.close();
  }

  // 375 rust + tik
  {
    const s = await open(b, { width: 375, height: 812 }, { touch: true });
    log.push(`375 frames bij paginalading: ${s.framesAtLoad}`);
    await toSection(s.p);
    await s.p.screenshot({ path: path.join(OUT, '375.png') });
    await shotSection(s.p, '375-full.png');
    const ov = await s.p.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    log.push(`375 horizontale overflow: ${ov}`);
    // tik op grip: scroll zo dat de feature onder het sticky beeld staat
    await s.p.evaluate(() => {
      const el = document.querySelector('.hp-05-feat[data-f="grip"]');
      const r = el.getBoundingClientRect();
      window.scrollBy(0, r.top - window.innerHeight * 0.62);
    });
    await wait(400);
    await s.p.tap('.hp-05-feat[data-f="grip"]');
    await wait(1600);
    await s.p.screenshot({ path: path.join(OUT, '375-tap-grip.png') });
    await s.p.evaluate(() => {
      const el = document.querySelector('.hp-05-feat[data-f="naadloos"]');
      const r = el.getBoundingClientRect();
      window.scrollBy(0, r.top - window.innerHeight * 0.6);
    });
    await wait(400);
    await s.p.tap('.hp-05-feat[data-f="naadloos"]');
    await wait(1600);
    await s.p.screenshot({ path: path.join(OUT, '375-tap-naadloos.png') });
    log.push('375 errors: ' + JSON.stringify(s.errs));
    await s.ctx.close();
  }

  // 375 reduced motion
  {
    const s = await open(b, { width: 375, height: 812 }, { touch: true, reduced: true });
    await toSection(s.p);
    await s.p.evaluate(() => {
      const el = document.querySelector('.hp-05-feat[data-f="hiel"]');
      const r = el.getBoundingClientRect();
      window.scrollBy(0, r.top - window.innerHeight * 0.62);
    });
    await wait(300);
    await s.p.tap('.hp-05-feat[data-f="hiel"]');
    await wait(250);
    await s.p.screenshot({ path: path.join(OUT, '375-reduced.png') });
    log.push('375 reduced aria-valuenow na tik hiel: ' + await s.p.getAttribute('.hp-05-stage', 'aria-valuenow'));
    log.push('375 reduced errors: ' + JSON.stringify(s.errs));
    await s.ctx.close();
  }

  await b.close();
  console.log(log.join('\n'));
})().catch(e => { console.error(e); process.exit(1); });
