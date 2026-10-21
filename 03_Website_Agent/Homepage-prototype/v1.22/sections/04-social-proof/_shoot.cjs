// Screenshots + interactiechecks voor 04 SOCIAL PROOF (1.2). Draai vanuit v1.2: node sections/04-social-proof/_shoot.cjs
const { launch, BASE } = require('../../tools/pw.cjs');
const path = require('path');
const fs = require('fs');
const OUT = path.join(__dirname, 'shots');
const URL = BASE + 'preview.html?s=04';

async function open(b, vp, extra = {}) {
  const ctx = await b.newContext({ viewport: vp, ...extra });
  const p = await ctx.newPage();
  const errs = [];
  p.on('pageerror', e => errs.push(String(e)));
  p.on('console', m => m.type() === 'error' && errs.push(m.text()));
  p.on('requestfailed', r => errs.push('FAIL ' + r.url()));
  await p.goto(URL, { waitUntil: 'networkidle' });
  await p.waitForSelector('[data-hp="04"] .hp-04-photo');
  await p.evaluate(() => document.fonts.ready);
  await p.mouse.move(5, 5);
  await p.evaluate(() => { const s = document.querySelector('[data-hp="04"]'); window.scrollTo(0, s.querySelector('.hp-04-head').getBoundingClientRect().top + scrollY - 40); });
  await p.waitForTimeout(400);
  await p.evaluate(() => Promise.all([...document.querySelectorAll('[data-hp="04"] img')].map(i => i.decode().catch(() => null))));
  await p.waitForTimeout(200);
  return { ctx, p, errs };
}
const belt = p => p.evaluate(() => document.querySelector('.hp-04-belt').style.transform);
const pressed = p => p.evaluate(() => [...document.querySelectorAll('[data-hp="04"] .hp-04-photo[aria-pressed="true"]')].length);
const shot = (p, name) => p.screenshot({ path: path.join(OUT, name) });
const log = (...a) => console.log(...a);
// foto (origineel) die het dichtst bij het midden van het scherm staat
const centerPhoto = p => p.evaluate(() => {
  const vw = innerWidth; let best = -1, d = 1e9;
  [...document.querySelectorAll('[data-hp="04"] .hp-04-item:not(.is-clone) .hp-04-photo')].forEach((b, i) => {
    const r = b.getBoundingClientRect(); const dd = Math.abs(r.left + r.width / 2 - vw / 2);
    if (r.left > 0 && r.right < vw && dd < d) { d = dd; best = i; }
  });
  return best;
});

(async () => {
  fs.readdirSync(OUT).forEach(f => fs.unlinkSync(path.join(OUT, f)));
  const b = await launch();

  // ---------- 1440 ----------
  {
    const { ctx, p, errs } = await open(b, { width: 1440, height: 900 });
    await shot(p, '1440.png');
    const t0 = await belt(p);
    await p.waitForTimeout(2000);
    const t1 = await belt(p);
    log('loop', t0, '->', t1);
    await shot(p, '1440-loop-t2s.png');
    log('1440 hscroll', await p.evaluate(() => document.documentElement.scrollWidth > innerWidth));

    // hover pauzeert
    const ci = await centerPhoto(p);
    const ph = p.locator('.hp-04-item:not(.is-clone) .hp-04-photo').nth(ci);
    let bb = await ph.boundingBox();
    await p.mouse.move(bb.x + bb.width / 2, bb.y + bb.height / 2);
    await p.waitForTimeout(300);
    const h0 = await belt(p); await p.waitForTimeout(1000); const h1 = await belt(p);
    log('hover paused', h0 === h1);
    await shot(p, '1440-hover.png');

    // klik zoomt in
    await p.mouse.click(bb.x + bb.width / 2, bb.y + bb.height / 2);
    await p.waitForTimeout(700);
    log('zoom pressed', await pressed(p), 'focus', await p.evaluate(() => document.activeElement.getAttribute('aria-pressed')));
    await p.mouse.move(5, 5);
    await p.waitForTimeout(800);
    const z0 = await belt(p); await p.waitForTimeout(600); const z1 = await belt(p);
    log('zoom paused (mouse away)', z0 === z1);
    await shot(p, '1440-zoom.png');
    await p.keyboard.press('Escape');
    await p.waitForTimeout(700);
    log('esc: pressed', await pressed(p), 'focus on photo', await p.evaluate(() => document.activeElement.classList.contains('hp-04-photo')));
    await shot(p, '1440-esc.png');

    // nog een klik op de foto en klik ernaast
    bb = await ph.boundingBox();
    await p.mouse.click(bb.x + bb.width / 2, bb.y + bb.height / 2); await p.waitForTimeout(600);
    const zb = await ph.boundingBox();
    await p.mouse.click(zb.x + zb.width / 2, zb.y + zb.height / 2); await p.waitForTimeout(600);
    log('second click closes', (await pressed(p)) === 0);
    bb = await ph.boundingBox();
    await p.mouse.click(bb.x + bb.width / 2, bb.y + bb.height / 2); await p.waitForTimeout(600);
    await p.mouse.click(1400, 60); await p.waitForTimeout(600);
    log('click beside closes', (await pressed(p)) === 0);

    // sleep: rij verschuift, geen zoom
    await p.mouse.move(5, 5); await p.waitForTimeout(300);
    const vp = await p.locator('.hp-04-viewport').boundingBox();
    const y = vp.y + 200;
    const before = await p.evaluate(() => document.querySelector('.hp-04-item:not(.is-clone)').getBoundingClientRect().left);
    await p.mouse.move(1000, y); await p.mouse.down();
    for (let i = 1; i <= 16; i++) { await p.mouse.move(1000 - i * 30, y); await p.waitForTimeout(16); }
    await p.mouse.up();
    await p.waitForTimeout(150);
    log('drag: zoom after drag', await pressed(p));
    await shot(p, '1440-drag.png');
    await p.waitForTimeout(900);
    const after = await p.evaluate(() => document.querySelector('.hp-04-item:not(.is-clone)').getBoundingClientRect().left);
    log('drag moved row by', Math.round(after - before), 'track', await p.evaluate(() => document.querySelector('.hp-04-track').style.transform));
    await p.mouse.move(5, 5);
    const d0 = await belt(p); await p.waitForTimeout(800); const d1 = await belt(p);
    log('loop resumes after drag', d0 !== d1);

    // klik op een kopie zoomt het origineel in
    const cloneInView = () => p.evaluate(() => [...document.querySelectorAll('[data-hp="04"] .is-clone .hp-04-photo')].some(b => b.getBoundingClientRect().left > 100 && b.getBoundingClientRect().right < innerWidth - 100));
    for (let k = 0; k < 8 && !(await cloneInView()); k++) {
      await p.mouse.move(1300, y); await p.mouse.down();
      for (let i = 1; i <= 20; i++) { await p.mouse.move(1300 - i * 40, y); await p.waitForTimeout(20); }
      await p.waitForTimeout(120); await p.mouse.up(); await p.waitForTimeout(900);
    }
    await p.mouse.move(5, 5);
    log('after big drags belt', await belt(p));
    const cloneIdx = await p.evaluate(() => {
      const all = [...document.querySelectorAll('[data-hp="04"] .hp-04-photo')];
      return all.findIndex(b => b.closest('.is-clone') && b.getBoundingClientRect().left > 100 && b.getBoundingClientRect().right < innerWidth - 100);
    });
    if (cloneIdx > -1) {
      const cb = await p.locator('[data-hp="04"] .hp-04-photo').nth(cloneIdx).boundingBox();
      await p.mouse.click(cb.x + cb.width / 2, cb.y + cb.height / 2); await p.waitForTimeout(600);
      log('clone click → original zoomed', await p.evaluate(() => { const z = document.querySelector('.hp-04-photo[aria-pressed="true"]'); return !!z && !z.closest('.is-clone'); }));
      await p.keyboard.press('Escape'); await p.waitForTimeout(500);
    } else log('no clone in view');
    log('1440 errors', errs);
    await ctx.close();
  }

  // ---------- 375 ----------
  {
    const { ctx, p, errs } = await open(b, { width: 375, height: 812 }, { hasTouch: true, isMobile: true, deviceScaleFactor: 2 });
    await shot(p, '375.png');
    log('375 hscroll', await p.evaluate(() => document.documentElement.scrollWidth > innerWidth));
    const ci = await centerPhoto(p);
    const ph = p.locator('.hp-04-item:not(.is-clone) .hp-04-photo').nth(Math.max(0, ci));
    const bb = await ph.boundingBox();
    await p.touchscreen.tap(bb.x + bb.width / 2, bb.y + bb.height / 2);
    await p.waitForTimeout(700);
    log('tap zoom', await pressed(p));
    await shot(p, '375-tap-zoom.png');
    await p.touchscreen.tap(bb.x + bb.width / 2, bb.y + bb.height / 2);
    await p.waitForTimeout(600);
    log('tap again closes', (await pressed(p)) === 0);
    log('375 hscroll after', await p.evaluate(() => document.documentElement.scrollWidth > innerWidth));
    log('375 errors', errs);
    await ctx.close();
  }

  // ---------- 375 reduced ----------
  {
    const { ctx, p, errs } = await open(b, { width: 375, height: 812 }, { hasTouch: true, isMobile: true, deviceScaleFactor: 2, reducedMotion: 'reduce' });
    const r0 = await belt(p); await p.waitForTimeout(1500); const r1 = await belt(p);
    log('reduced: no loop', r0 === r1);
    await shot(p, '375-reduced.png');
    const bb = await p.locator('.hp-04-item:not(.is-clone) .hp-04-photo').nth(0).boundingBox();
    await p.touchscreen.tap(bb.x + bb.width / 2, bb.y + bb.height / 2);
    await p.waitForTimeout(100);
    log('reduced tap zoom', await pressed(p));
    log('reduced errors', errs);
    await ctx.close();
  }
  await b.close();
})().catch(e => { console.error(e); process.exit(1); });
