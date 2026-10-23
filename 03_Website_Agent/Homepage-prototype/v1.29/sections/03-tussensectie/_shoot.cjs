// Screenshots voor sectie 03 (1.2 ronde 2, alleen typografie): node sections/03-tussensectie/_shoot.cjs
const path = require('path');
const { launch, BASE } = require('../../tools/pw.cjs');
const OUT = path.join(__dirname, 'shots');
const URL = BASE + 'preview.html?s=03';
const S = '[data-hp="03"]';

async function open(b, vp, opts = {}) {
  const ctx = await b.newContext({ viewport: vp, hasTouch: !!opts.touch, isMobile: !!opts.touch, reducedMotion: opts.reduced ? 'reduce' : 'no-preference' });
  const p = await ctx.newPage();
  const errs = [];
  p.on('pageerror', e => errs.push(String(e)));
  p.on('console', m => m.type() === 'error' && errs.push(m.text()));
  await p.goto(URL, { waitUntil: 'networkidle' });
  await p.waitForSelector(S + ' .hp-03-track', { state: 'attached' });
  await p.evaluate(async (S) => {
    document.querySelectorAll(S + ' img').forEach(i => { i.loading = 'eager'; });
    await Promise.all([...document.querySelectorAll(S + ' img')].map(i => i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; })));
    await document.fonts.ready;
  }, S);
  return { ctx, p, errs };
}
// echte buren (02 en 04) in plaats van de labelstroken, alleen voor de contextshots
async function neighbours(p) {
  await p.evaluate(async () => {
    const put = async (id, dir) => {
      const el = document.getElementById(id);
      if (!el) return;
      const css = document.createElement('link'); css.rel = 'stylesheet'; css.href = `sections/${dir}/section.css`;
      document.head.appendChild(css);
      await new Promise(r => { css.onload = css.onerror = r; });
      el.outerHTML = await (await fetch(`sections/${dir}/section.html`)).text();
      const js = document.createElement('script'); js.src = `sections/${dir}/section.js`; document.body.appendChild(js);
      await new Promise(r => { js.onload = js.onerror = r; });
    };
    await put('pv-prev', '02-product');
    await put('pv-next', '04-social-proof');
    document.querySelectorAll('img').forEach(i => { i.loading = 'eager'; });
    await Promise.all([...document.querySelectorAll('img')].map(i => i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; })));
  });
}
async function shot(p, file, pad = 0) {
  await p.locator(S).scrollIntoViewIfNeeded();
  const r = await p.locator(S).evaluate(el => { const b = el.getBoundingClientRect(); return { x: b.x + scrollX, y: b.y + scrollY, width: b.width, height: b.height, doc: document.documentElement.scrollHeight }; });
  const y = Math.max(0, r.y - pad);
  await p.screenshot({ path: path.join(OUT, file), fullPage: pad > 0, clip: { x: r.x, y, width: r.width, height: Math.min(r.height + pad * 2, r.doc - y) } });
}
const info = p => p.evaluate((S) => {
  const s = document.querySelector(S);
  const tr = [...s.querySelectorAll('.hp-03-track')].map(t => t.style.transform);
  return {
    h: Math.round(s.getBoundingClientRect().height),
    tracks: tr,
    paused: s.classList.contains('is-paused'),
    count: s.querySelector('.hp-03-count').textContent,
    overflow: document.documentElement.scrollWidth > innerWidth,
  };
}, S);

(async () => {
  const b = await launch();
  const all = [];

  // 1440: rust, 2 s later, hover
  let { ctx, p, errs } = await open(b, { width: 1440, height: 900 });
  await p.locator(S).scrollIntoViewIfNeeded();
  await p.waitForTimeout(1600); // optellen klaar
  await shot(p, '1440.png');
  const i0 = await info(p);
  await p.waitForTimeout(2000);
  await shot(p, '1440-t2s.png');
  const i2 = await info(p);
  { const bb = await p.locator(S + ' .hp-03-row--a').boundingBox(); await p.mouse.move(bb.x + bb.width / 2, bb.y + bb.height / 2); }
  await p.waitForTimeout(900);
  const ih = await info(p);
  await shot(p, '1440-hover.png');
  await p.mouse.move(5, 5);
  await p.waitForTimeout(900);
  all.push(['1440', errs, { i0, i2, ih }]);
  await ctx.close();

  ({ ctx, p, errs } = await open(b, { width: 1440, height: 900 }));
  await neighbours(p);
  await p.waitForTimeout(1600);
  await shot(p, '1440-context.png', 260);
  all.push(['1440-context', errs, await info(p)]);
  // scroll omlaag: versnellen + kantelen (shot midden in de beweging, sectie blijft in beeld)
  await p.evaluate((S) => { const s = document.querySelector(S); scrollTo(0, s.getBoundingClientRect().top + scrollY - 300); }, S);
  await p.waitForTimeout(400);
  for (let k = 0; k < 4; k++) { await p.mouse.wheel(0, 60); await p.waitForTimeout(30); }
  await p.waitForTimeout(60);
  { const r = await p.locator(S).boundingBox(); await p.screenshot({ path: path.join(OUT, '1440-scroll.png'), clip: { x: 0, y: Math.max(0, r.y), width: r.width, height: r.height } }); }
  const is = await info(p);
  // scroll omhoog: richting wisselt
  await p.waitForTimeout(1500);
  const iu0 = await info(p);
  for (let k = 0; k < 4; k++) { await p.mouse.wheel(0, -50); await p.waitForTimeout(30); }
  await p.waitForTimeout(400);
  all.push(['1440-scroll', errs, { is, iu0, iu: await info(p) }]);
  await ctx.close();

  // 375 touch: rust, tik = pauze
  ({ ctx, p, errs } = await open(b, { width: 375, height: 812 }, { touch: true }));
  await p.locator(S).scrollIntoViewIfNeeded();
  await p.waitForTimeout(1600);
  await shot(p, '375.png');
  await p.locator(S + ' .hp-03-row--b').tap();
  await p.waitForTimeout(900);
  await shot(p, '375-tap.png');
  all.push(['375', errs, await info(p)]);
  await ctx.close();

  ({ ctx, p, errs } = await open(b, { width: 375, height: 812 }, { touch: true }));
  await neighbours(p);
  await p.waitForTimeout(1600);
  await shot(p, '375-context.png', 200);
  await ctx.close();

  // 375 reduced motion
  ({ ctx, p, errs } = await open(b, { width: 375, height: 812 }, { touch: true, reduced: true }));
  await shot(p, '375-reduced.png');
  const ir = await info(p);
  await p.waitForTimeout(1000);
  all.push(['375-reduced', errs, { ir, still: JSON.stringify(ir.tracks) === JSON.stringify((await info(p)).tracks) }]);
  await ctx.close();

  ({ ctx, p, errs } = await open(b, { width: 1440, height: 900 }, { reduced: true }));
  await shot(p, '1440-reduced.png');
  all.push(['1440-reduced', errs, await info(p)]);
  await ctx.close();

  await b.close();
  console.log(JSON.stringify(all));
})();
