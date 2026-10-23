// Controleert of elke opmaak-instelling (kleur, schuif, getal, vinkje, keuze) ook echt iets verandert:
// render met één afwijkende waarde, maak een schermafdruk van die sectie en vergelijk met de standaard.
//   node settings_test.js <prototype-root> [secties] > rapport.txt
const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');
const pixelmatch = require('pixelmatch');

const root = process.argv[2];
const only = (process.argv[3] || '').split(',').filter(Boolean);
const TAG = only.length ? only.join('') + '-' : '';
const THEME = path.join(__dirname, '..', 'theme');
const index = JSON.parse(fs.readFileSync(path.join(THEME, 'templates', 'index.json'), 'utf8'));

function schemaOf(type) {
  const src = fs.readFileSync(path.join(THEME, 'sections', type + '.liquid'), 'utf8');
  return JSON.parse(src.split('{% schema %}')[1].split('{% endschema %}')[0]);
}
function testValue(st, cur) {
  switch (st.type) {
    case 'color': return String(cur).toUpperCase() === '#FF00FF' ? '#00FFFF' : '#FF00FF';
    case 'range': return Number(cur) === st.max ? st.min : st.max;
    case 'number': return Number(cur) * 1.6 + 7;
    case 'checkbox': return !cur;
    case 'select': return st.options.map((o) => o.value).find((v) => v !== cur);
    default: return undefined;
  }
}
// welke viewport(s) een instelling raakt
function vps(id) {
  if (/_m$/.test(id) && !/_d$/.test(id)) return [[390, 844]];
  if (/_d$/.test(id)) return [[1440, 900]];
  return [[390, 844], [1440, 900]];
}

(async () => {
  const b = await chromium.launch();
  const ctxs = {};
  async function shot(file, id, vp, hover) {
    const key = vp.join('x');
    if (!ctxs[key]) { ctxs[key] = await b.newPage({ viewport: { width: vp[0], height: vp[1] } }); await ctxs[key].emulateMedia({ reducedMotion: 'reduce' }); }
    const p = ctxs[key];
    await p.goto('http://localhost:8801/' + file + '?t=' + Date.now(), { waitUntil: 'load' });
    await p.addStyleTag({ content: 'html, body { height: auto !important; overflow: visible !important; } .page-wrapper { height: auto !important; overflow: visible !important; }' });
    await p.evaluate(async () => {
      document.querySelectorAll('img[loading="lazy"]').forEach((i) => { i.loading = 'eager'; });
      await document.fonts.ready;
      for (let t = 0; t < 60; t++) { await new Promise((r) => setTimeout(r, 50)); if (Array.from(document.images).every((i) => i.complete)) break; }
    });
    const el = p.locator(`[data-hp="${id}"]`).first();
    await el.scrollIntoViewIfNeeded();
    await p.waitForTimeout(350);
    if (hover) {
      // eerst een knop in beeld (bij carrousels staat de eerste kopie soms buiten beeld)
      for (const sel of ['.is-active ' + hover, hover]) {
        const h = el.locator(sel).first();
        if (!(await h.count())) continue;
        try { await h.hover({ force: true, timeout: 2000 }); break; } catch (e) { /* volgende proberen */ }
      }
      await p.waitForTimeout(250);
    }
    return PNG.sync.read(await el.screenshot({ animations: 'disabled' }));
  }
  function diff(a, c) {
    if (a.width !== c.width || a.height !== c.height) return 1e9;
    return pixelmatch(a.data, c.data, null, a.width, a.height, { threshold: 0.05 });
  }
  const lines = [];
  for (const key of index.order) {
    const sec = index.sections[key];
    const id = key.replace('hp_', '');
    if (only.length && !only.includes(id)) continue;
    const sch = schemaOf(sec.type);
    // standaard
    execFileSync('node', [path.join(__dirname, 'render.js'), root, '-', TAG + 'st-base.html']);
    const base = {};
    for (const vp of [[390, 844], [1440, 900]]) base[vp.join('x')] = await shot(TAG + 'st-base.html', id, vp);
    for (const st of sch.settings) {
      const cur = sec.settings[st.id] !== undefined ? sec.settings[st.id] : st.default;
      const v = testValue(st, cur);
      if (v === undefined) continue;
      const ov = { [key]: { [st.id]: v } };
      fs.writeFileSync(path.join(__dirname, TAG + 'ov.json'), JSON.stringify(ov));
      execFileSync('node', [path.join(__dirname, 'render.js'), root, path.join(__dirname, TAG + 'ov.json'), TAG + 'st-test.html']);
      let best = 0;
      const hover = /_h(bg|fg|bd|cbg|cfg)$/.test(st.id) ? '.hp-pill' : null;
      for (const vp of vps(st.id)) {
        let a = base[vp.join('x')];
        if (hover) a = await shot(TAG + 'st-base.html', id, vp, hover);
        const c = await shot(TAG + 'st-test.html', id, vp, hover);
        best = Math.max(best, diff(a, c));
      }
      lines.push(`${id} ${st.type.padEnd(8)} ${st.id.padEnd(16)} ${best > 0 ? 'OK  ' : 'GEEN'} ${best}`);
      console.error(lines[lines.length - 1]);
    }
  }
  await b.close();
  console.log(lines.join('\n'));
})();
