// Runs the worker against fake Shopify, Turnstile and KV: `node --test`
import { test, beforeEach } from 'node:test';
import assert from 'node:assert/strict';

const worker = (await import('../src/index.js')).default;
const ORIGIN = 'https://www.higrip.nl';

let calls, shopifyReply, turnstileReply, store;

function env(extra = {}) {
  return {
    SHOPIFY_SHOP: 'raqds3-tb', SHOPIFY_CLIENT_ID: 'id', SHOPIFY_CLIENT_SECRET: 'secret',
    TURNSTILE_SECRET: 'ts', IP_SALT: 'salt', DAILY_CAP: '100', PER_VISITOR_PER_DAY: '3',
    CODES_KV: {
      get: async (k) => store.get(k) ?? null,
      put: async (k, v) => { store.set(k, v); }
    },
    ...extra
  };
}

function ask(body = { token: 'ok' }, origin = ORIGIN, ip = '1.2.3.4') {
  return new Request('https://higrip-codes.example.workers.dev/code', {
    method: 'POST',
    headers: { Origin: origin, 'Content-Type': 'application/json', 'CF-Connecting-IP': ip },
    body: JSON.stringify(body)
  });
}

beforeEach(() => {
  calls = [];
  store = new Map();
  turnstileReply = { success: true, action: 'flitsinterview', hostname: 'www.higrip.nl' };
  shopifyReply = () => ({ data: { discountCodeBasicCreate: { codeDiscountNode: { id: 'gid://x' }, userErrors: [] } } });
  globalThis.fetch = async (url, init) => {
    calls.push({ url: String(url), init });
    if (String(url).includes('turnstile')) return Response.json(turnstileReply);
    if (String(url).endsWith('/admin/oauth/access_token')) return Response.json({ access_token: 'tok', expires_in: 86399 });
    if (String(url).includes('/graphql.json')) return Response.json(shopifyReply(JSON.parse(init.body)));
    throw new Error('unexpected ' + url);
  };
});

test('lets a shared code be used by the first USES_PER_CODE customers', async () => {
  const res = await worker.fetch(ask(), env({ USES_PER_CODE: '3' }));
  assert.equal(res.status, 200);
  const input = JSON.parse(calls.find((c) => c.url.includes('graphql')).init.body).variables.input;
  assert.equal(input.usageLimit, 3);
  assert.equal(input.appliesOncePerCustomer, true);
});

test('serves a share page that keeps the code in og:url and forwards to the shop', async () => {
  const url = 'https://higrip-codes.example.workers.dev/d/HI30-ABCD2345';
  const res = await worker.fetch(new Request(url), env({ SHARE_REDIRECT: '/pages/collection', USES_PER_CODE: '3' }));
  assert.equal(res.status, 200);
  const html = await res.text();
  assert.ok(html.includes(`<meta property="og:url" content="${url}">`));
  assert.ok(html.includes('location.replace("https://www.higrip.nl/discount/HI30-ABCD2345?redirect=%2Fpages%2Fcollection")'));
  assert.ok(html.includes('Geldig voor 3 bestellingen'));
  assert.ok(!/http-equiv="refresh"/i.test(html), 'no meta refresh for preview bots');
  assert.equal(calls.length, 0, 'no Shopify or Turnstile calls');
  for (const bad of ['/d/HI30-ABC', '/d/HI30-ABCD2345"><script>', '/d/']) {
    assert.equal((await worker.fetch(new Request('https://x' + bad), env())).status, 404);
  }
});

test('names the shop address as og:url when reached through the app proxy', async () => {
  const proxied = 'https://higrip-codes.example.workers.dev/d/HI30-ABCD2345?shop=raqds3-tb.myshopify.com&path_prefix=%2Fa%2Fdeel&timestamp=1&signature=x';
  const html = await (await worker.fetch(new Request(proxied), env())).text();
  assert.ok(html.includes('<meta property="og:url" content="https://www.higrip.nl/a/deel/HI30-ABCD2345">'));
  const forged = 'https://higrip-codes.example.workers.dev/d/HI30-ABCD2345?path_prefix=%2F%2Fevil.example';
  const plain = await (await worker.fetch(new Request(forged), env())).text();
  assert.ok(plain.includes('<meta property="og:url" content="https://higrip-codes.example.workers.dev/d/HI30-ABCD2345">'));
});

test('creates a unique, shareable single-use code', async () => {
  const res = await worker.fetch(ask(), env());
  assert.equal(res.status, 200);
  assert.equal(res.headers.get('Access-Control-Allow-Origin'), ORIGIN);
  const { code, endsAt } = await res.json();
  assert.match(code, /^HI30-[A-HJ-NP-Z2-9]{8}$/);
  const input = JSON.parse(calls.find((c) => c.url.includes('graphql')).init.body).variables.input;
  assert.equal(input.code, code);
  assert.equal(input.usageLimit, 1);
  assert.equal(input.appliesOncePerCustomer, true);
  assert.deepEqual(input.context, { all: 'ALL' });
  assert.equal(input.customerGets.value.percentage, 0.3);
  assert.equal(input.endsAt, endsAt);
  assert.ok(Math.abs(new Date(endsAt) - Date.now() - 30 * 864e5) < 60e3);
  assert.ok(![...store.keys()].some((k) => k.includes('1.2.3.4')), 'no raw IP in storage');
});

test('rejects a failed or foreign Turnstile check', async () => {
  turnstileReply = { success: false };
  assert.equal((await worker.fetch(ask(), env())).status, 403);
  turnstileReply = { success: true, action: 'flitsinterview', hostname: 'evil.example' };
  assert.equal((await worker.fetch(ask(), env())).status, 403);
  assert.equal((await worker.fetch(ask({}), env())).status, 403);
  assert.ok(!calls.some((c) => c.url.includes('graphql')), 'no code created');
});

test('rejects other origins without CORS', async () => {
  const res = await worker.fetch(ask(undefined, 'https://evil.example'), env());
  assert.equal(res.status, 403);
  assert.equal(res.headers.get('Access-Control-Allow-Origin'), null);
});

test('answers the CORS preflight for the shop only', async () => {
  const pre = (origin) => new Request('https://x/code', { method: 'OPTIONS', headers: { Origin: origin } });
  assert.equal((await worker.fetch(pre(ORIGIN), env())).status, 204);
  assert.equal((await worker.fetch(pre('https://evil.example'), env())).status, 403);
});

test('caps codes per visitor and per day', async () => {
  for (let i = 0; i < 3; i++) assert.equal((await worker.fetch(ask(), env())).status, 200);
  const blocked = await worker.fetch(ask(), env());
  assert.equal(blocked.status, 429);
  assert.equal((await blocked.json()).error, 'limit');
  assert.equal((await worker.fetch(ask(undefined, ORIGIN, '5.6.7.8'), env({ DAILY_CAP: '3' }))).status, 429);
});

test('retries when a code is already taken', async () => {
  let n = 0;
  shopifyReply = () => (n++ === 0
    ? { data: { discountCodeBasicCreate: { codeDiscountNode: null, userErrors: [{ code: 'TAKEN', field: ['basicCodeDiscount', 'code'], message: 'taken' }] } } }
    : { data: { discountCodeBasicCreate: { codeDiscountNode: { id: 'gid://x' }, userErrors: [] } } });
  const res = await worker.fetch(ask(), env());
  assert.equal(res.status, 200);
  assert.equal(n, 2);
});

test('reports Shopify errors without counting them against the visitor', async () => {
  shopifyReply = () => ({ data: { discountCodeBasicCreate: { codeDiscountNode: null, userErrors: [{ code: 'INVALID', field: ['x'], message: 'nope' }] } } });
  const res = await worker.fetch(ask(), env());
  assert.equal(res.status, 502);
  assert.equal(store.size, 0);
});

test('answers before the counters are written, and never lets the code be cached', async () => {
  const pending = [];
  const res = await worker.fetch(ask(), env(), { waitUntil: (p) => pending.push(p) });
  assert.equal(res.status, 200);
  assert.equal(res.headers.get('Cache-Control'), 'no-store');
  assert.equal(pending.length, 1);
  await Promise.all(pending);
  assert.equal(store.size, 2);
});

test('spends no KV reads on a failed bot check', async () => {
  let reads = 0;
  turnstileReply = { success: false };
  const e = env();
  const get = e.CODES_KV.get;
  e.CODES_KV.get = (k) => { reads++; return get(k); };
  assert.equal((await worker.fetch(ask(), e)).status, 403);
  assert.equal(reads, 0);
});
