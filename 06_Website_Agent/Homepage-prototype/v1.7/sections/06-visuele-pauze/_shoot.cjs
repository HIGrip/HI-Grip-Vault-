// Screenshots voor sectie 06 met een eigen headless browser (tools/pw.cjs). Gebruik: node _shoot.cjs
const path = require('path');
const { launch, BASE } = require('../../tools/pw.cjs');
const OUT = path.join(__dirname, 'shots');
const URL = BASE + 'preview.html?s=06';
const wait = ms => new Promise(r => setTimeout(r, ms));

async function open(b, vp, opts = {}) {
  const ctx = await b.newContext({ viewport: vp, deviceScaleFactor: 1, hasTouch: !!opts.touch, isMobile: !!opts.touch, reducedMotion: opts.reduced ? 'reduce' : 'no-preference' });
  const p = await ctx.newPage();
  const errs = [];
  p.on('pageerror', e => errs.push('pageerror: ' + e));
  p.on('console', m => m.type() === 'error' && errs.push('console: ' + m.text()));
  p.on('requestfailed', r => errs.push('failed: ' + r.url()));
  // Alleen in de test: extra hoogte rond de sectie, zodat er echt gescrold kan worden.
  await p.addInitScript(() => { document.addEventListener('DOMContentLoaded', () => {
    ['pv-prev', 'pv-next'].forEach(id => { const el = document.getElementById(id); if (el) el.style.height = '1400px'; });
  }); });
  await p.goto(URL, { waitUntil: 'networkidle' });
  await p.waitForSelector('[data-hp="06"] .hp-06-statement');
  await p.evaluate(() => document.fonts.ready);
  return { ctx, p, errs };
}
// Scroll zodat de voortgang (zelfde formule als section.js) gelijk is aan t.
async function scrollTo(p, t) {
  await p.evaluate(t => {
    const st = document.querySelector('.hp-06-statement');
    const vh = innerHeight, r = st.getBoundingClientRect();
    const top = vh * 0.9 - t * (r.height + vh * 0.1);
    scrollBy(0, r.top - top);
  }, t);
  await wait(1100);
}
async function state(p) {
  return p.evaluate(() => {
    const w = document.querySelectorAll('.hp-06-w');
    const lit = document.querySelectorAll('.hp-06-w.is-lit').length;
    const c = getComputedStyle(document.querySelector('.hp-06-statement').firstElementChild || document.querySelector('.hp-06-statement')).color;
    const m = [...document.querySelectorAll(".hp-06-mark")].map(e => getComputedStyle(e, "::before").transform).join(" | ");
    return `marks ${m}; ${lit}/${w.length} verlicht, eerste woord ${c}, overflow ${document.documentElement.scrollWidth - document.documentElement.clientWidth}`;
  });
}

(async () => {
  const b = await launch();
  const log = [];
  for (const [w, h, touch] of [[1440, 900, false], [375, 812, true]]) {
    const s = await open(b, { width: w, height: h }, { touch });
    await scrollTo(s.p, 0);
    log.push(`${w} start: ` + await state(s.p));
    await scrollTo(s.p, 0.4);
    log.push(`${w} mid: ` + await state(s.p));
    await s.p.screenshot({ path: path.join(OUT, `${w}-scroll-mid.png`) });
    await scrollTo(s.p, 1);
    log.push(`${w} eind: ` + await state(s.p));
    await s.p.screenshot({ path: path.join(OUT, `${w}.png`) });
    // voorbij de sectie en terug: blijft zwart zolang je eronder bent
    await s.p.evaluate(() => scrollBy(0, innerHeight * 2)); await wait(300);
    log.push(`${w} voorbij: ` + await state(s.p));
    log.push(`${w} errors: ` + JSON.stringify(s.errs));
    await s.ctx.close();
  }
  {
    const s = await open(b, { width: 375, height: 812 }, { touch: true, reduced: true });
    await scrollTo(s.p, 0.3);
    log.push('375 reduced: ' + await state(s.p) + ', hp-motion=' + await s.p.evaluate(() => document.documentElement.classList.contains('hp-motion')));
    await s.p.screenshot({ path: path.join(OUT, '375-reduced.png') });
    log.push('375 reduced errors: ' + JSON.stringify(s.errs));
    await s.ctx.close();
  }
  await b.close();
  console.log(log.join('\n'));
})().catch(e => { console.error(e); process.exit(1); });
