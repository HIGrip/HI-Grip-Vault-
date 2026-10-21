// Fase 2: test van de samengevoegde index.html (Denzel). Draai vanuit Homepage-prototype: node tools/fase2.cjs
const { launch, BASE } = require('./pw.cjs');
const fs = require('fs');
const path = require('path');
const OUT = path.join(__dirname, '..', 'review', 'fase2');
fs.mkdirSync(OUT, { recursive: true });
const rhythm = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'contract', 'rhythm.json'), 'utf8')).sections;
const report = { errors: [], checks: {} };
const ok = (k, v, info) => { report.checks[k] = { ok: !!v, info }; };

(async () => {
  const b = await launch();
  for (const [w, h] of [[1440, 900], [375, 812]]) {
    const ctx = await b.newContext({ viewport: { width: w, height: h }, hasTouch: w < 769, isMobile: w < 769 });
    const p = await ctx.newPage();
    p.on('pageerror', e => report.errors.push(`${w}: ${e}`));
    p.on('console', m => m.type() === 'error' && report.errors.push(`${w}: ${m.text()}`));
    p.on('response', r => r.status() >= 400 && report.errors.push(`${w}: ${r.status()} ${r.url()}`));
    await p.goto(BASE + 'index.html', { waitUntil: 'networkidle' });
    await p.waitForTimeout(800);
    // volledige scroll in stappen, zodat lazy beelden en scroll-motion meedraaien
    const H = await p.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y < H; y += Math.round(h * 0.8)) { await p.evaluate(y => scrollTo(0, y), y); await p.waitForTimeout(250); }
    await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(500);
    await p.screenshot({ path: path.join(OUT, `${w}-full.png`), fullPage: true });
    // overflow
    const ov = await p.evaluate(() => [document.documentElement.scrollWidth, document.documentElement.clientWidth]);
    ok(`${w} geen horizontale scroll`, ov[0] <= ov[1], ov);
    // achtergronden en CTA's per sectie
    const secs = await p.evaluate(() => [...document.querySelectorAll('[data-hp]')].map(s => {
      const cs = getComputedStyle(s); return { id: s.dataset.hp, bg: cs.backgroundColor, pills: s.querySelectorAll('.hp-pill').length };
    }));
    const tok = await p.evaluate(names => { const r = {}; const d = document.createElement('div'); document.body.appendChild(d); for (const n of names) { d.style.background = `var(${n})`; r[n] = getComputedStyle(d).backgroundColor; } d.remove(); return r; }, [...new Set(rhythm.map(s => s.bg))]);
    for (const s of rhythm) {
      const got = secs.find(x => x.id === s.id);
      ok(`${w} achtergrond ${s.id}`, got && got.bg === tok[s.bg], { verwacht: `${s.bg} ${tok[s.bg]}`, kreeg: got && got.bg });
      ok(`${w} max 1 pill ${s.id}`, got && got.pills <= 1, got && got.pills);
    }
    if (w === 1440) {
      // 04: slepen + lightbox + Esc
      const s4 = p.locator('[data-hp="04"]'); await s4.scrollIntoViewIfNeeded(); await p.waitForTimeout(400);
      const vp4 = await s4.locator('[tabindex="0"]').first().boundingBox();
      const tr4 = async () => p.evaluate(() => { const t = [...document.querySelectorAll('[data-hp="04"] *')].find(e => e.style.transform && e.style.transform.includes('translate3d')); return t ? t.style.transform : null; });
      const before4 = await tr4();
      await p.mouse.move(vp4.x + vp4.width * 0.6, vp4.y + vp4.height / 2); await p.mouse.down();
      for (let i = 1; i <= 12; i++) { await p.mouse.move(vp4.x + vp4.width * 0.6 - i * 30, vp4.y + vp4.height / 2); await p.waitForTimeout(16); }
      await p.mouse.up(); await p.waitForTimeout(700);
      const lbAfterDrag = await p.evaluate(() => hpLightbox.isOpen());
      ok('04 slepen verschuift rij', (await tr4()) !== before4, { before4, after: await tr4() });
      ok('04 slepen opent geen lightbox', !lbAfterDrag);
      const vis = await s4.locator('button').filter({ has: p.locator('img') }).evaluateAll(bs => bs.findIndex(b => { const r = b.getBoundingClientRect(); return r.left >= 0 && r.right <= innerWidth; }));
      await s4.locator('button').filter({ has: p.locator('img') }).nth(Math.max(0, vis)).click(); await p.waitForTimeout(500);
      ok('04 klik opent lightbox', await p.evaluate(() => hpLightbox.isOpen()));
      await p.screenshot({ path: path.join(OUT, '1440-04-lightbox.png') });
      // lightbox en sportslider blokkeren elkaar niet: pijltjes in lightbox mogen 07 niet verschuiven
      const st07 = async () => p.evaluate(() => document.querySelector('[data-hp="07"] [aria-live]')?.textContent);
      const s07before = await st07();
      await p.keyboard.press('ArrowRight'); await p.waitForTimeout(300);
      ok('lightbox-pijltje verschuift 07 niet', (await st07()) === s07before, { s07before, after: await st07() });
      await p.keyboard.press('Escape'); await p.waitForTimeout(400);
      ok('04 Esc sluit lightbox', !(await p.evaluate(() => hpLightbox.isOpen())));
      ok('scroll-lock weg na sluiten', !(await p.evaluate(() => document.documentElement.classList.contains('hp-lock'))));
      // 05: hover op een feature
      const s5 = p.locator('[data-hp="05"]'); await s5.scrollIntoViewIfNeeded(); await p.waitForTimeout(800);
      const feat = s5.locator('button, [tabindex="0"]').filter({ hasText: 'Maximale grip' }).first();
      await feat.hover(); await p.waitForTimeout(1400);
      await p.screenshot({ path: path.join(OUT, '1440-05-hover-grip.png') });
      ok('05 hover activeert feature', await feat.evaluate(e => e.matches('.is-active, [aria-pressed="true"], [aria-current="true"]') || !!e.closest('.is-active')), null);
      // 07: volgende → kleurwissel, sleep → geen navigatie, klik → URL
      const s7 = p.locator('[data-hp="07"]'); await s7.scrollIntoViewIfNeeded(); await p.waitForTimeout(500);
      const bg = async () => s7.evaluate(e => getComputedStyle(e).backgroundColor);
      const bg1 = await bg();
      await s7.getByRole('button', { name: 'Volgende sport' }).click(); await p.waitForTimeout(900);
      const bg2 = await bg();
      ok('07 volgende wisselt achtergrond', bg1 !== bg2, { bg1, bg2 });
      await p.screenshot({ path: path.join(OUT, '1440-07-next.png') });
      const urlBefore = p.url();
      const vp7 = await s7.locator('[tabindex="0"]').first().boundingBox();
      await p.mouse.move(vp7.x + vp7.width / 2, vp7.y + vp7.height / 2); await p.mouse.down();
      for (let i = 1; i <= 12; i++) { await p.mouse.move(vp7.x + vp7.width / 2 - i * 35, vp7.y + vp7.height / 2); await p.waitForTimeout(16); }
      await p.mouse.up(); await p.waitForTimeout(900);
      ok('07 sleep navigeert niet', p.url() === urlBefore, p.url());
      ok('07 sleep wisselt achtergrond', (await bg()) !== bg2, { bg2, nu: await bg() });
      // klik op centrale kaart: onderschep navigatie
      let navTo = null;
      await p.route('**/pages/gripsokken-voor-*', r => { navTo = r.request().url(); r.fulfill({ status: 200, body: 'ok' }); });
      const center = await p.evaluate(() => { const vp = document.querySelector('[data-hp="07"] [tabindex="0"]').getBoundingClientRect(); return { x: vp.x + vp.width / 2, y: vp.y + vp.height / 2 }; });
      await p.mouse.click(center.x, center.y); await p.waitForTimeout(1200);
      ok('07 klik op centrale kaart → sportpagina', !!navTo, navTo);
      if (navTo) { await p.goBack({ waitUntil: 'networkidle' }).catch(() => {}); }
      await p.unroute('**/pages/gripsokken-voor-*');
      // 11: FAQ open/dicht
      await p.goto(BASE + 'index.html', { waitUntil: 'networkidle' });
      const s11 = p.locator('[data-hp="11"]'); await s11.scrollIntoViewIfNeeded();
      const d2 = s11.locator('details').nth(1); await d2.locator('summary').click(); await p.waitForTimeout(400);
      ok('11 FAQ opent', await d2.evaluate(e => e.open));
      await p.screenshot({ path: path.join(OUT, '1440-11-open.png') });
      await d2.locator('summary').click(); await p.waitForTimeout(300);
      ok('11 FAQ sluit', !(await d2.evaluate(e => e.open)));
      // JSON-LD
      const ld = await p.evaluate(() => [...document.querySelectorAll('script[type="application/ld+json"]')].map(s => { try { const j = JSON.parse(s.textContent); return j['@type'] + ':' + (j.mainEntity || []).length; } catch (e) { return 'PARSEFOUT'; } }));
      ok('JSON-LD geldig, 1 FAQPage', ld.filter(x => x.startsWith('FAQPage')).length === 1 && !ld.includes('PARSEFOUT'), ld);
    } else {
      // 375: tik-varianten en swipe op 07
      const s7 = p.locator('[data-hp="07"]'); await s7.scrollIntoViewIfNeeded(); await p.waitForTimeout(500);
      const bg1 = await s7.evaluate(e => getComputedStyle(e).backgroundColor);
      await s7.getByRole('button', { name: 'Volgende sport' }).tap(); await p.waitForTimeout(900);
      ok('375 07 tik volgende wisselt achtergrond', bg1 !== await s7.evaluate(e => getComputedStyle(e).backgroundColor));
      const s4 = p.locator('[data-hp="04"]'); await s4.scrollIntoViewIfNeeded(); await p.waitForTimeout(300);
      await s4.locator('button').filter({ has: p.locator('img') }).first().tap(); await p.waitForTimeout(500);
      ok('375 04 tik opent lightbox', await p.evaluate(() => hpLightbox.isOpen()));
      await p.screenshot({ path: path.join(OUT, '375-04-lightbox.png') });
      await p.keyboard.press('Escape'); await p.waitForTimeout(300);
    }
    await ctx.close();
  }
  // reduced motion: alles in rust, geen errors
  const ctx = await b.newContext({ viewport: { width: 375, height: 812 }, reducedMotion: 'reduce' });
  const p = await ctx.newPage();
  p.on('pageerror', e => report.errors.push(`rm: ${e}`));
  await p.goto(BASE + 'index.html', { waitUntil: 'networkidle' });
  await p.screenshot({ path: path.join(OUT, '375-reduced-top.png') });
  await ctx.close();
  await b.close();
  const fails = Object.entries(report.checks).filter(([, v]) => !v.ok);
  fs.writeFileSync(path.join(OUT, 'fase2-report.json'), JSON.stringify(report, null, 1));
  console.log(`checks: ${Object.keys(report.checks).length}, mislukt: ${fails.length}, errors: ${report.errors.length}`);
  fails.forEach(([k, v]) => console.log('FAIL', k, JSON.stringify(v.info)));
  report.errors.slice(0, 20).forEach(e => console.log('ERR', e));
})();
