// Controleert instellingen die alleen in combinatie of na een handeling zichtbaar worden
// (menu open, hover, logo-afbeelding, rand + randbreedte, animaties uit).
//   node combo_test.js <prototype-root> <cases.json>
// cases.json: [{ "name", "sec": "01", "ov": { "hp_01": {...} }, "base": { ... } (optioneel),
//               "vp": [390, 844], "click": "selector", "hover": "selector", "motion": true,
//               "computed": { "sel": "...", "prop": "animationName" } }]
const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');
const pixelmatch = require('pixelmatch');

const root = process.argv[2];
const cases = JSON.parse(fs.readFileSync(process.argv[3], 'utf8'));

function render(ov, out) {
  const f = path.join(__dirname, 'ov-combo.json');
  fs.writeFileSync(f, JSON.stringify(ov || {}));
  execFileSync('node', [path.join(__dirname, 'render.js'), root, f, out]);
}

(async () => {
  const b = await chromium.launch();
  async function look(file, c) {
    const p = await b.newPage({ viewport: { width: c.vp[0], height: c.vp[1] } });
    if (!c.motion) await p.emulateMedia({ reducedMotion: 'reduce' });
    await p.goto('http://localhost:8801/' + file + '?t=' + Date.now(), { waitUntil: 'load' });
    await p.addStyleTag({ content: 'html, body { height: auto !important; overflow: visible !important; } .page-wrapper { height: auto !important; overflow: visible !important; }' });
    await p.evaluate(async () => {
      document.querySelectorAll('img[loading="lazy"]').forEach((i) => { i.loading = 'eager'; });
      await document.fonts.ready;
      for (let t = 0; t < 60; t++) { await new Promise((r) => setTimeout(r, 50)); if (Array.from(document.images).every((i) => i.complete)) break; }
    });
    const el = p.locator(`[data-hp="${c.sec}"]`).first();
    await el.scrollIntoViewIfNeeded();
    await p.waitForTimeout(350);
    if (c.cls) { await el.evaluate((n, cls) => n.classList.add(...cls.split(' ')), c.cls); await p.waitForTimeout(900); }
    if (c.click) { await el.locator(c.click).first().click({ force: true }); await p.waitForTimeout(500); }
    if (c.hover) { await el.locator(c.hover).first().hover({ force: true }); await p.waitForTimeout(400); }
    let res;
    if (c.computed) {
      res = await p.evaluate(([sel, prop]) => Array.from(document.querySelectorAll(sel)).map((e) => prop.startsWith('--') ? getComputedStyle(e).getPropertyValue(prop) : getComputedStyle(e)[prop]).join(' | '), [c.computed.sel, c.computed.prop]);
    } else {
      res = PNG.sync.read(await el.screenshot({ animations: 'disabled' }));
    }
    await p.close();
    return res;
  }
  for (const c of cases) {
    render(c.base, 'combo-base.html');
    const a = await look('combo-base.html', c);
    render(Object.assign({}, c.base || {}, c.ov), 'combo-test.html');
    // ov en base kunnen dezelfde sectie raken: voeg per sectie samen
    if (c.base) {
      const m = JSON.parse(JSON.stringify(c.base));
      for (const k of Object.keys(c.ov)) m[k] = Object.assign({}, m[k] || {}, c.ov[k]);
      render(m, 'combo-test.html');
    }
    const t = await look('combo-test.html', c);
    if (c.computed) {
      console.log(`${a !== t ? 'OK  ' : 'GEEN'} ${c.name}: standaard [${a}] → test [${t}]`);
    } else {
      const n = a.width !== t.width || a.height !== t.height ? 1e9 : pixelmatch(a.data, t.data, null, a.width, a.height, { threshold: 0.05 });
      console.log(`${n > 0 ? 'OK  ' : 'GEEN'} ${c.name}: ${n}`);
    }
  }
  await b.close();
})();
