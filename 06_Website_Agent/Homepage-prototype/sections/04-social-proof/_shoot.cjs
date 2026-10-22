// Screenshots + interactiechecks voor 04 SOCIAL PROOF. Draai: node sections/04-social-proof/_shoot.cjs
const { launch, BASE } = require('../../tools/pw.cjs');
const path = require('path');
const OUT = path.join(__dirname, 'shots');
const URL = BASE + 'preview.html?s=04';

async function open(b, vp, extra = {}) {
  const ctx = await b.newContext({ viewport: vp, ...extra });
  const p = await ctx.newPage();
  const errs = [];
  p.on('pageerror', e => errs.push(String(e)));
  p.on('console', m => m.type() === 'error' && errs.push(m.text()));
  await p.goto(URL, { waitUntil: 'networkidle' });
  await p.waitForSelector('[data-hp="04"] .hp-04-photo');
  await p.evaluate(() => document.fonts.ready);
  const sec = p.locator('[data-hp="04"]');
  await sec.scrollIntoViewIfNeeded();
  await p.evaluate(() => { const s = document.querySelector('[data-hp="04"]'); window.scrollTo(0, s.querySelector('.hp-04-head').getBoundingClientRect().top + scrollY - 40); });
  await p.waitForTimeout(400);
  await p.evaluate(() => Promise.all([...document.querySelectorAll('[data-hp="04"] img')].map(i => i.decode().catch(() => null))));
  await p.waitForTimeout(200);
  return { ctx, p, errs, sec };
}
const tx = p => p.evaluate(() => document.querySelector('.hp-04-track').style.transform);
const lbOpen = p => p.evaluate(() => !!document.querySelector('dialog.hp-lightbox[open]'));
const shot = (p, name, full) => p.screenshot({ path: path.join(OUT, name), fullPage: !!full });
const log = (...a) => console.log(...a);

(async () => {
  const b = await launch();

  // ---------- 1440 ----------
  {
    const { ctx, p, errs } = await open(b, { width: 1440, height: 900 });
    await shot(p, '1440.png');
    log('1440 hscroll', await p.evaluate(() => document.documentElement.scrollWidth > innerWidth));

    const first = p.locator('.hp-04-photo').nth(0);
    const box = await first.boundingBox();
    await p.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await p.waitForTimeout(600);
    await shot(p, '1440-hover-photo.png');

    // sleep: rij verschuift, geen lightbox
    const vp = await p.locator('.hp-04-viewport').boundingBox();
    const y = vp.y + 200;
    await p.mouse.move(1100, y); await p.mouse.down();
    for (let i = 1; i <= 20; i++) { await p.mouse.move(1100 - i * 35, y); await p.waitForTimeout(16); }
    await p.mouse.up();
    await p.waitForTimeout(700);
    log('drag transform', await tx(p), 'lightbox open after drag', await lbOpen(p));
    await p.mouse.move(700, 40);
    await p.waitForTimeout(500);
    await shot(p, '1440-drag.png');

    // klik opent lightbox
    const sec2 = p.locator('.hp-04-photo').nth(2);
    const bb = await sec2.boundingBox();
    const clickX = Math.max(vp.x + 20, Math.min(bb.x + bb.width / 2, vp.x + vp.width - 20));
    await p.mouse.click(clickX, bb.y + bb.height / 2);
    await p.waitForTimeout(500);
    log('lightbox open', await lbOpen(p), 'lock', await p.evaluate(() => document.documentElement.classList.contains('hp-lock')));
    log('cap', await p.locator('.hp-lightbox__cap').textContent());
    const sy = await p.evaluate(() => scrollY);
    await p.mouse.wheel(0, 600); await p.waitForTimeout(300);
    log('scroll locked', (await p.evaluate(() => scrollY)) === sy);
    await p.waitForFunction(() => { const i = document.querySelector('.hp-lightbox__img'); return i.complete && i.naturalWidth > 0; });
    await shot(p, '1440-lightbox.png');
    await p.locator('.hp-lightbox__next').click();
    await p.waitForTimeout(300);
    await p.waitForFunction(() => { const i = document.querySelector('.hp-lightbox__img'); return i.complete && i.naturalWidth > 0; });
    log('next cap', await p.locator('.hp-lightbox__cap').textContent());
    await shot(p, '1440-lightbox-next.png');
    await p.keyboard.press('Escape');
    await p.waitForTimeout(400);
    log('after esc open', await lbOpen(p), 'focus', await p.evaluate(() => document.activeElement && document.activeElement.className), 'lock', await p.evaluate(() => document.documentElement.classList.contains('hp-lock')));
    await shot(p, '1440-esc.png');

    // klik buiten sluit
    await p.locator('.hp-04-photo').nth(2).focus();
    await p.keyboard.press('Enter');
    await p.waitForTimeout(300);
    log('enter opens', await lbOpen(p));
    await p.mouse.click(8, 450);
    await p.waitForTimeout(300);
    log('outside click closes', !(await lbOpen(p)));

    // Tab naar een foto buiten beeld
    await p.locator('.hp-04-photo').nth(7).focus();
    await p.waitForTimeout(700);
    log('tab to last: scrollLeft', await p.evaluate(() => document.querySelector('.hp-04-viewport').scrollLeft), await tx(p));
    log('1440 errors', errs);
    await ctx.close();
  }

  // ---------- 375 ----------
  {
    const mobile = { width: 375, height: 812 };
    const { ctx, p, errs } = await open(b, mobile, { hasTouch: true, isMobile: true, deviceScaleFactor: 2 });
    await shot(p, '375.png');
    log('375 hscroll', await p.evaluate(() => document.documentElement.scrollWidth > innerWidth), await p.evaluate(() => document.documentElement.scrollWidth));

    // swipe via CDP touch
    const cdp = await ctx.newCDPSession(p);
    const vp = await p.locator('.hp-04-viewport').boundingBox();
    const y = vp.y + 120;
    const touch = (type, x) => cdp.send('Input.dispatchTouchEvent', { type, touchPoints: type === 'touchEnd' ? [] : [{ x, y }] });
    await touch('touchStart', 320);
    for (let i = 1; i <= 14; i++) { await touch('touchMove', 320 - i * 20); await p.waitForTimeout(16); }
    await touch('touchEnd');
    await p.waitForTimeout(700);
    log('swipe transform', await tx(p), 'lightbox after swipe', await lbOpen(p));
    await shot(p, '375-swipe.png');

    await p.evaluate(() => document.querySelector('.hp-04-track').style.transform);
    const target = p.locator('.hp-04-photo').nth(1);
    const bb = await target.boundingBox();
    await p.touchscreen.tap(Math.max(30, Math.min(bb.x + bb.width / 2, 345)), bb.y + bb.height / 2);
    await p.waitForTimeout(500);
    await p.waitForFunction(() => { const i = document.querySelector('.hp-lightbox__img'); return i && i.complete && i.naturalWidth > 0; });
    log('tap opens', await lbOpen(p), await p.locator('.hp-lightbox__cap').textContent());
    await shot(p, '375-tap-lightbox.png');
    log('375 errors', errs);
    await ctx.close();
  }

  // ---------- 375 reduced ----------
  {
    const { ctx, p, errs } = await open(b, { width: 375, height: 812 }, { hasTouch: true, isMobile: true, deviceScaleFactor: 2, reducedMotion: 'reduce' });
    await shot(p, '375-reduced.png');
    log('reduced motion class', await p.evaluate(() => document.documentElement.classList.contains('hp-motion')));
    await p.locator('.hp-04-photo').nth(0).tap();
    await p.waitForTimeout(300);
    log('reduced tap opens', await lbOpen(p));
    log('reduced errors', errs);
    await ctx.close();
  }
  await b.close();
})().catch(e => { console.error(e); process.exit(1); });
