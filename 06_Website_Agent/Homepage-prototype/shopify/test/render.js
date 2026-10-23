// Rendert theme/templates/index.json lokaal met liquidjs (Shopify-filters nagebootst) tot één HTML-pagina,
// in een omgeving met de element-regels van het thema (theme-sim.css). Gebruik:
//   node render.js <map van het prototype-server-root> [overrides.json]
// overrides.json: { "hp_01": { "h1_c": "#ff0000" } } om instellingen te testen.
const { Liquid, Tag } = require('liquidjs');
const fs = require('fs');
const path = require('path');

const THEME = path.join(__dirname, '..', 'theme');
const root = process.argv[2];
const overrides = process.argv[3] && process.argv[3] !== '-' ? JSON.parse(fs.readFileSync(process.argv[3], 'utf8')) : {};
const outName = process.argv[4] || 'shopify.html';
const media = JSON.parse(fs.readFileSync(path.join(__dirname, 'media.json'), 'utf8'));
const CDN = { // CDN-bestanden uit index.json -> lokaal
  'd2774d181fd441c3b28a5d486760c9eb.mp4': 'video/higrip-brandvideo-desktop-1920.mp4',
  '739650e8f7bc4cf193acce847e5ee7bc.mp4': 'video/higrip-brandvideo-mobiel-720.mp4',
  '78f88303e40b44c8be2efa7d886c4e31.mp4': 'video/higrip-brandvideo-mobiel-480.mp4',
};

function img(ref) {
  if (!ref || typeof ref !== 'string' || !ref.startsWith('shopify://shop_images/')) return ref;
  const n = ref.slice('shopify://shop_images/'.length);
  // met HP_INDEX (een index.json uit de winkel) mogen onbekende foto's een vervanger krijgen
  const m = media[n] || (process.env.HP_INDEX ? media['hp-sh-sq-padel.webp'] : null);
  if (!m) throw new Error('onbekende afbeelding ' + n);
  return { ...m, __img: true, toString() { return m.src; } };
}
function resolve(settings) {
  const o = {};
  for (const [k, v] of Object.entries(settings || {})) {
    let val = img(v);
    if (typeof val === 'string') for (const [c, l] of Object.entries(CDN)) if (val.includes(c)) val = l;
    o[k] = val;
  }
  return o;
}

const engine = new Liquid({ root: [path.join(THEME, 'sections')], partials: path.join(THEME, 'snippets'), extname: '.liquid', strictFilters: true, jsTruthy: false });
engine.registerTag('schema', class extends Tag {
  constructor(token, remain, liquid) { super(token, remain, liquid); this.tpls = []; const stream = liquid.parser.parseStream(remain); stream.on('tag:endschema', () => stream.stop()).on('template', () => {}).on('end', () => { throw new Error('schema niet gesloten'); }); stream.start(); }
  * render() {}
});
engine.registerFilter('image_url', (im) => (im && im.src) || '');
engine.registerFilter('asset_url', (n) => 'theme-assets/' + n);
engine.registerFilter('file_url', (n) => { const m = media[n]; if (!m) throw new Error('file_url ' + n); return m.src; });
engine.registerFilter('stylesheet_tag', (u) => `<link href="${u}" rel="stylesheet" type="text/css" media="all" />`);
engine.registerFilter('color_modify', (c, what, val) => {
  if (what !== 'alpha') throw new Error('color_modify ' + what);
  const h = String(c).replace('#', '');
  const r = parseInt(h.slice(0, 2), 16), g = parseInt(h.slice(2, 4), 16), b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${+(+val).toFixed(3)})`;
});
engine.registerFilter('handleize', (v) => String(v || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''));
engine.registerFilter('money', (v) => '€' + (Number(v) / 100).toFixed(2).replace('.', ','));
engine.registerFilter('times', (a, b) => Number(a) * Number(b));
engine.registerFilter('divided_by', (a, b) => Number(a) / Number(b));

(async () => {
  const index = JSON.parse(fs.readFileSync(process.env.HP_INDEX || path.join(THEME, 'templates', 'index.json'), 'utf8'));
  let body = '';
  for (const key of index.order) {
    const sec = index.sections[key];
    if (sec.disabled) continue;
    // net als Shopify: ontbrekende instellingen krijgen de standaardwaarde uit het schema
    const src = fs.readFileSync(path.join(THEME, 'sections', sec.type + '.liquid'), 'utf8');
    const schema = JSON.parse(src.split('{% schema %}')[1].split('{% endschema %}')[0]);
    const defs = (list) => Object.fromEntries((list || []).filter((x) => x.id && x.default !== undefined).map((x) => [x.id, x.default]));
    const settings = resolve({ ...defs(schema.settings), ...sec.settings, ...(overrides[key] || {}) });
    const blockDefs = (type) => defs(((schema.blocks || []).find((x) => x.type === type) || {}).settings);
    const blocks = (sec.block_order || []).map((id) => ({ id, type: sec.blocks[id].type, settings: resolve({ ...blockDefs(sec.blocks[id].type), ...sec.blocks[id].settings, ...((overrides[key + '.' + id]) || {}) }), shopify_attributes: '' }));
    const ctx = { section: { id: key, settings, blocks, shopify_attributes: '' }, routes: { root_url: '/' }, request: { design_mode: false }, template: { name: 'index' }, shop: { url: 'https://www.higrip.nl' } };
    const html = await engine.renderFile(sec.type, ctx);
    body += `<div id="shopify-section-${key}" class="shopify-section hp-shopify-section">${html}</div>\n`;
  }
  const page = `<!doctype html><html lang="nl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"><title>HÏ Grip Shopify-test</title>
<link rel="stylesheet" href="theme-sim.css"></head><body class="page-width-narrow"><div class="page-wrapper"><div id="header-group"><div style="height:60px;background:#eee">THEMA-HEADER</div></div><main id="MainContent" class="content-for-layout">${body}</main><footer><div style="height:200px;background:#ddd">THEMA-FOOTER</div></footer></div></body></html>`;
  fs.writeFileSync(path.join(root, outName), page);
  fs.mkdirSync(path.join(root, 'theme-assets'), { recursive: true });
  for (const f of fs.readdirSync(path.join(THEME, 'assets'))) fs.copyFileSync(path.join(THEME, 'assets', f), path.join(root, 'theme-assets', f));
  fs.copyFileSync(path.join(__dirname, 'theme-sim.css'), path.join(root, 'theme-sim.css'));
  console.log('geschreven', outName, body.length);
})().catch((e) => { console.error(e); process.exit(1); });
