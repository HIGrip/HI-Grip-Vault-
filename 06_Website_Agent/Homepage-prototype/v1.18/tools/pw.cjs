// Gedeelde Playwright-loader voor agents: eigen browser per proces (de Playwright-MCP is één gedeelde browser).
const path = 'C:/Users/Test/AppData/Local/npm-cache/_npx/9833c18b2d85bc59/node_modules/playwright';
const { chromium } = require(path);
async function launch() {
  for (const opt of [{ channel: 'chrome' }, { channel: 'msedge' }, {}]) {
    try { return await chromium.launch({ headless: true, ...opt }); } catch (e) { /* volgende proberen */ }
  }
  throw new Error('Geen Chromium/Chrome/Edge gevonden voor Playwright');
}
module.exports = { launch, BASE: 'http://localhost:8766/' };
