// Draait Shopify Theme Check (theme-check-node) op de map theme/ en toont de bevindingen.
const path = require('path');
(async () => {
  const tc = require('@shopify/theme-check-node');
  const root = path.join(__dirname, '..', 'theme');
  const res = await tc.themeCheckRun(root, undefined, () => {});
  const offenses = res.offenses || res;
  for (const o of offenses) {
    const f = (o.uri || '').split('/theme/')[1] || o.uri;
    console.log(`${o.severity === 0 ? 'ERROR' : o.severity === 1 ? 'WARN ' : 'INFO '} ${o.check} ${f}:${(o.start && o.start.line + 1) || ''} ${o.message}`);
  }
  console.log('totaal', offenses.length);
})().catch((e) => { console.error(e); process.exit(1); });
