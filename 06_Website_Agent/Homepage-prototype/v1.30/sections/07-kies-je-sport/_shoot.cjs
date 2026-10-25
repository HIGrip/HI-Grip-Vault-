// Screenshots en interactietests voor 07 KIES JE SPORT. Draai vanuit deze map: node _shoot.cjs
const path = require('path');
const { launch, BASE } = require('../../tools/pw.cjs');
const OUT = path.join(__dirname, 'shots');
const URL = BASE + 'preview.html?s=07';
const wait = ms => new Promise(r => setTimeout(r, ms));

async function open(browser, opts) {
  const ctx = await browser.newContext(opts);
  const page = await ctx.newPage();
  const errs = [];
  page.on('pageerror', e => errs.push(String(e)));
  page.on('console', m => m.type() === 'error' && errs.push(m.text()));
  page.on('requestfailed', r => errs.push('FAILED ' + r.url()));
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForSelector('[data-hp="07"] .hp-07-status:not(:empty)', { state: 'attached' });
  // Navigatie onderscheppen: alleen kliks die niemand tegenhield worden gelogd en daarna geblokkeerd.
  await page.evaluate(() => {
    window.__nav = [];
    document.addEventListener('click', e => {
      const a = e.target.closest('a');
      if (a && !e.defaultPrevented) { window.__nav.push(a.href); e.preventDefault(); }
    });
  });
  const sec = page.locator('[data-hp="07"]');
  await sec.scrollIntoViewIfNeeded();
  await page.evaluate(async () => {
    const imgs = [...document.querySelectorAll('[data-hp="07"] img')];
    imgs.forEach(i => { i.loading = 'eager'; });
    await Promise.all(imgs.map(i => i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; })));
  });
  await wait(300);
  return { ctx, page, sec, errs };
}
const state = page => page.evaluate(() => {
  const s = document.querySelector('[data-hp="07"]');
  return { sport: s.dataset.sport, bg: getComputedStyle(s).backgroundColor, status: s.querySelector('.hp-07-status').textContent, nav: window.__nav.slice(), sw: document.documentElement.scrollWidth, vw: innerWidth };
});
const center = async (page, sel) => {
  const b = await page.locator(sel).boundingBox();
  return { x: b.x + b.width / 2, y: b.y + b.height / 2, b };
};

(async () => {
  const browser = await launch();
  const log = [];

  // ---------- 1440 ----------
  {
    const { ctx, page, sec, errs } = await open(browser, { viewport: { width: 1440, height: 900 } });
    await sec.screenshot({ path: path.join(OUT, '1440.png') });
    log.push(['1440 start', await state(page)]);

    // hover op de centrale kaart
    const c = await center(page, '.hp-07-item.is-active .hp-07-card');
    await page.mouse.move(c.x, c.y);
    await wait(500);
    await sec.screenshot({ path: path.join(OUT, '1440-hover-card.png') });

    // klik op de centrale kaart: moet naar de padel-URL willen
    await page.mouse.click(c.x, c.y);
    await wait(100);
    log.push(['1440 klik centrale kaart', await state(page)]);

    // één shot per sport in rust (volgende, golf laten uitlopen)
    await page.mouse.move(5, 5);
    await sec.screenshot({ path: path.join(OUT, '1440-padel.png') });
    for (const sp of ['tennis', 'voetbal', 'rugby']) {
      await page.click('.hp-07-next');
      log.push(['1440 ' + sp + ' direct na klik (bg moet al wisselen)', await state(page)]);
      if (sp === 'tennis' || sp === 'voetbal') {
        // golf halverwege: alle lopende transities (gat + inkt) bevriezen op 220 ms
        await page.evaluate(() => document.getAnimations().forEach(a => { a.pause(); a.currentTime = 220; }));
        await page.mouse.move(5, 5);
        await sec.screenshot({ path: path.join(OUT, '1440-wave' + (sp === 'voetbal' ? '-voetbal' : '') + '.png') });
        await page.evaluate(() => document.getAnimations().forEach(a => a.play()));
      }
      await wait(1300);
      await page.mouse.move(5, 5);
      await sec.screenshot({ path: path.join(OUT, '1440-' + sp + '.png') });
      log.push(['1440 ' + sp, await state(page), await page.evaluate(() => { const s = document.querySelector('[data-hp="07"]'); const q = c => getComputedStyle(s.querySelector(c)); return { ink: getComputedStyle(s).color, name: q('.hp-07-item.is-active .hp-07-name').color, chevBg: q('.hp-07-item.is-active .hp-07-chev').backgroundColor, chev: q('.hp-07-item.is-active .hp-07-chev').color, btn: q('.hp-07-next').borderTopColor, waveRun: s.querySelector('.hp-07-wave').classList.contains('is-run') }; })]);
      if (sp === 'voetbal') {
        await page.hover('.hp-07-next'); await wait(300);
        await sec.screenshot({ path: path.join(OUT, '1440-hover-btn-voetbal.png') });
        await page.mouse.move(5, 5); await wait(300);
      }
    }
    await page.click('.hp-07-next');
    await wait(1300);
    log.push(['1440 terug op padel', await state(page)]);

    // volgende
    await page.click('.hp-07-next');
    await wait(1300);
    await page.mouse.move(5, 5);
    await wait(200);
    await sec.screenshot({ path: path.join(OUT, '1440-next.png') });
    log.push(['1440 na volgende', await state(page)]);

    // slepen naar links over de centrale kaart: screenshot tijdens het slepen, daarna loslaten
    await page.evaluate(() => { document.querySelector('[data-hp="07"]').scrollIntoView(); scrollBy(0, 200); });
    await wait(200);
    const d = await center(page, '.hp-07-item.is-active .hp-07-card');
    const navBefore = (await state(page)).nav.length;
    await page.mouse.move(d.x, d.y);
    await page.mouse.down();
    await page.mouse.move(d.x - 200, d.y, { steps: 8 });
    await page.mouse.move(d.x - 640, d.y, { steps: 12 });
    await wait(550);
    // page.screenshot met clip: een element-screenshot laat de lopende sleep los
    const sb = await sec.boundingBox();
    await page.screenshot({ path: path.join(OUT, '1440-drag.png'), clip: { x: 0, y: Math.max(0, sb.y), width: 1440, height: Math.min(900, sb.height) } });
    log.push(['1440 tijdens slepen', await state(page), await page.evaluate(() => document.querySelector('.hp-07-track').style.transform)]);
    await page.mouse.up();
    await wait(1300);
    const afterDrag = await state(page);
    log.push(['1440 na slepen (nav mag niet groeien: ' + navBefore + ')', afterDrag]);

    // pijltjestoets
    await page.focus('.hp-07-viewport');
    await page.keyboard.press('ArrowRight');
    await wait(1300);
    log.push(['1440 na ArrowRight', await state(page)]);
    // lus: voorbij rugby komt padel, de rij staat daarna weer op de echte set (index 4)
    await page.keyboard.press('ArrowRight');
    await wait(1300);
    log.push(['1440 lus rugby -> padel', await state(page), await page.evaluate(() => [...document.querySelectorAll('.hp-07-item')].findIndex(i => i.classList.contains('is-active')))]);
    log.push(['1440 errors', errs]);
    await ctx.close();
  }

  // ---------- 375 ----------
  {
    const { ctx, page, sec, errs } = await open(browser, { viewport: { width: 375, height: 812 }, hasTouch: true, isMobile: true, deviceScaleFactor: 2 });
    await sec.screenshot({ path: path.join(OUT, '375.png') });
    log.push(['375 start', await state(page)]);
    for (const sp of ['tennis', 'voetbal', 'rugby']) {
      await page.locator('.hp-07-next').tap();
      await wait(1300);
      await page.locator('.hp-07-h2').tap(); // tik weg van de knop: anders legt Playwright de :active-staat op de knop vast in de shot
      await wait(400);
      // pagina-shot met clip: een element-shot zet na een tik even de :active-staat terug op de knop (Playwright-artefact)
      const bb = await sec.boundingBox();
      const sy = await page.evaluate(() => scrollY);
      await page.screenshot({ path: path.join(OUT, '375-' + sp + '.png'), fullPage: true, clip: { x: 0, y: bb.y + sy, width: 375, height: bb.height } });
      log.push(['375 ' + sp, await state(page)]);
    }
    await page.locator('.hp-07-next').tap();
    await wait(1300);

    // swipe met touch (CDP)
    const cdp = await ctx.newCDPSession(page);
    const c = await center(page, '.hp-07-item.is-active .hp-07-card');
    const touch = (type, x, y) => cdp.send('Input.dispatchTouchEvent', { type, touchPoints: type === 'touchEnd' ? [] : [{ x, y }] });
    await touch('touchStart', c.x + 120, c.y);
    for (let k = 1; k <= 10; k++) { await touch('touchMove', c.x + 120 - k * 18, c.y + k); await wait(40); }
    await touch('touchEnd');
    await wait(1300);
    await sec.screenshot({ path: path.join(OUT, '375-swipe.png') });
    log.push(['375 na swipe (nav moet leeg)', await state(page)]);

    // tik op een niet-centrale kaart (de rechterbuur die net in beeld piept)
    const nb = await page.locator('.hp-07-item.is-after .hp-07-card').first().boundingBox();
    const navBefore = (await state(page)).nav.length;
    await page.touchscreen.tap(Math.min(370, nb.x + 10), nb.y + nb.height / 2);
    await wait(1300);
    await sec.screenshot({ path: path.join(OUT, '375-tap-card.png') });
    log.push(['375 tik buurkaart (nav blijft ' + navBefore + ')', await state(page)]);

    // tik op de centrale kaart: moet navigeren
    const cc = await center(page, '.hp-07-item.is-active .hp-07-card');
    await page.touchscreen.tap(cc.x, cc.y);
    await wait(150);
    log.push(['375 tik centrale kaart', await state(page)]);
    log.push(['375 errors', errs]);
    await ctx.close();
  }

  // ---------- 375 reduced motion ----------
  {
    const { ctx, page, sec, errs } = await open(browser, { viewport: { width: 375, height: 812 }, hasTouch: true, isMobile: true, deviceScaleFactor: 2, reducedMotion: 'reduce' });
    await page.click('.hp-07-next');
    await wait(60);
    const st = await state(page);
    const tf = await page.evaluate(() => ({ track: getComputedStyle(document.querySelector('.hp-07-track')).transitionDuration, bg: getComputedStyle(document.querySelector('[data-hp="07"]')).transitionDuration }));
    await sec.screenshot({ path: path.join(OUT, '375-reduced.png'), animations: 'allow' });
    log.push(['375 reduced na volgende (60ms)', st, tf]);
    log.push(['375 reduced errors', errs]);
    await ctx.close();
  }

  await browser.close();
  for (const l of log) console.log(JSON.stringify(l));
})();
