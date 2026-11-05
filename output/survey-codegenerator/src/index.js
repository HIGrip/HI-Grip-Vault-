// HÏ Grip flitsinterview: one unique, shareable discount code per completed survey.
// Turnstile keeps bots out, KV holds per-visitor and daily caps, Shopify creates the code.

const ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // no 0/O or 1/I, easy to type over
const CREATE = `mutation Create($input: DiscountCodeBasicInput!) {
  discountCodeBasicCreate(basicCodeDiscount: $input) {
    codeDiscountNode { id }
    userErrors { field code message }
  }
}`;

let cachedToken = null; // per isolate; client-credentials tokens live 24h

export default {
  async fetch(request, env, ctx) {
    const origin = request.headers.get('Origin') || '';
    const allowed = origins(env).includes(origin);
    const cors = allowed ? { 'Access-Control-Allow-Origin': origin, Vary: 'Origin' } : {};

    // share link: apps like Snapchat swap a redirecting link for the og:url of the page it lands on,
    // which drops the code, so this page names itself as og:url and only then forwards to the shop
    const shared = new URL(request.url).pathname.match(/^\/d\/([A-Za-z0-9]{2,10}-[A-Za-z0-9]{8})$/);
    if (request.method === 'GET' && shared) return sharePage(env, shared[1].toUpperCase(), publicUrl(env, request, shared[1].toUpperCase()));

    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: allowed ? 204 : 403,
        headers: { ...cors, 'Access-Control-Allow-Methods': 'POST', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Max-Age': '86400' }
      });
    }
    if (request.method !== 'POST' || new URL(request.url).pathname !== '/code') return json({ error: 'not_found' }, 404, cors);
    if (!allowed) return json({ error: 'origin' }, 403, cors);

    let body;
    try { body = await request.json(); } catch { return json({ error: 'bad_request' }, 400, cors); }

    const ip = request.headers.get('CF-Connecting-IP') || '';
    // bot check first: a flood of fake tokens must not use up the daily KV reads
    if (!(await humanCheck(env, body && body.token, ip))) return json({ error: 'bot' }, 403, cors);

    const day = new Date().toISOString().slice(0, 10);
    const visitorKey = `ip:${day}:${await hash((env.IP_SALT || '') + ip)}`;
    const dayKey = `day:${day}`;
    const [visitorCount, dayCount] = await Promise.all([count(env, visitorKey), count(env, dayKey)]);
    if (visitorCount >= num(env.PER_VISITOR_PER_DAY, 20)) return json({ error: 'limit' }, 429, cors);
    if (dayCount >= num(env.DAILY_CAP, 100)) return json({ error: 'cap' }, 429, cors);

    try {
      const result = await createCode(env);
      // the caps are soft (KV is eventually consistent), so the code need not wait for the writes
      const bumps = Promise.all([bump(env, visitorKey, visitorCount), bump(env, dayKey, dayCount)]);
      if (ctx && ctx.waitUntil) ctx.waitUntil(bumps);
      else await bumps;
      return json(result, 200, cors);
    } catch (e) {
      console.error('create failed:', e.message);
      return json({ error: 'shopify' }, 502, cors);
    }
  }
};

async function createCode(env) {
  const now = new Date();
  const endsAt = new Date(now.getTime() + num(env.VALID_DAYS, 30) * 864e5);
  const percentage = num(env.PERCENTAGE, 30) / 100;

  // a clash with an existing code is unlikely (32^8), but retry instead of failing the visitor
  for (let attempt = 0; attempt < 3; attempt++) {
    const code = `${env.CODE_PREFIX || 'HI30'}-${randomPart(8)}`;
    const data = await admin(env, CREATE, {
      input: {
        title: `Flitsinterview ${Math.round(percentage * 100)}% · ${code}`,
        code,
        startsAt: now.toISOString(),
        endsAt: endsAt.toISOString(),
        // shared code: the first USES_PER_CODE orders get it, each customer once
        usageLimit: num(env.USES_PER_CODE, 1),
        appliesOncePerCustomer: true,
        context: { all: 'ALL' },
        customerGets: { value: { percentage }, items: { all: true } },
        combinesWith: { orderDiscounts: false, productDiscounts: false, shippingDiscounts: env.COMBINE_SHIPPING === 'true' },
        tags: ['flitsinterview']
      }
    });
    const errors = data.discountCodeBasicCreate.userErrors;
    if (!errors.length) return { code, endsAt: endsAt.toISOString() };
    if (!errors.some((e) => e.code === 'TAKEN' || e.code === 'DUPLICATE')) throw new Error(JSON.stringify(errors));
  }
  throw new Error('code clash three times in a row');
}

async function admin(env, query, variables, retried = false) {
  const version = env.SHOPIFY_API_VERSION || '2026-10';
  const res = await fetch(`https://${env.SHOPIFY_SHOP}.myshopify.com/admin/api/${version}/graphql.json`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Shopify-Access-Token': await accessToken(env) },
    body: JSON.stringify({ query, variables })
  });
  if (res.status === 401 && !retried && !env.SHOPIFY_ADMIN_TOKEN) {
    cachedToken = null;
    return admin(env, query, variables, true);
  }
  if (!res.ok) throw new Error(`admin api ${res.status}`);
  const payload = await res.json();
  if (payload.errors) throw new Error(JSON.stringify(payload.errors));
  return payload.data;
}

// Dev Dashboard app on our own store: exchange client id + secret for a 24h token
async function accessToken(env) {
  if (env.SHOPIFY_ADMIN_TOKEN) return env.SHOPIFY_ADMIN_TOKEN;
  if (cachedToken && cachedToken.expires > Date.now() + 60e3) return cachedToken.value;
  const res = await fetch(`https://${env.SHOPIFY_SHOP}.myshopify.com/admin/oauth/access_token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    // trim: a pasted secret easily carries a trailing space or newline
    body: new URLSearchParams({ grant_type: 'client_credentials', client_id: (env.SHOPIFY_CLIENT_ID || '').trim(), client_secret: (env.SHOPIFY_CLIENT_SECRET || '').trim() })
  });
  if (!res.ok) {
    // Shopify names the reason in a JSON error or in the <title> of an HTML page
    const text = await res.text().catch(() => '');
    const reason = (text.match(/"error(?:_description)?"\s*:\s*"([^"]+)"/) || text.match(/<title>([^<]+)<\/title>/) || [])[1] || '';
    throw new Error(`token ${res.status} ${reason}`.trim());
  }
  const data = await res.json();
  cachedToken = { value: data.access_token, expires: Date.now() + (data.expires_in || 3600) * 1000 };
  return cachedToken.value;
}

async function humanCheck(env, token, ip) {
  if (!token || typeof token !== 'string') return false;
  const form = new FormData();
  form.append('secret', (env.TURNSTILE_SECRET || '').trim());
  form.append('response', token);
  if (ip) form.append('remoteip', ip);
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body: form });
  // a bad secret answers 400 with error codes in the body, so read it either way
  const result = await res.json().catch(() => ({ success: false, 'error-codes': [`http-${res.status}`] }));
  const hosts = origins(env).map((o) => new URL(o).hostname);
  const ok = result.success === true && result.action === 'flitsinterview' && hosts.includes(result.hostname);
  if (!ok) console.warn('turnstile rejected:', JSON.stringify({ success: result.success, errors: result['error-codes'], action: result.action, hostname: result.hostname }));
  return ok;
}

function sharePage(env, code, self) {
  const target = `${origins(env)[0]}/discount/${code}?redirect=${encodeURIComponent(env.SHARE_REDIRECT || '/')}`;
  const uses = num(env.USES_PER_CODE, 1);
  const title = `${num(env.PERCENTAGE, 30)}% korting bij HÏ Grip`;
  const text = uses > 1
    ? `Code ${code} staat al in je winkelwagen. Geldig voor ${uses} bestellingen.`
    : `Code ${code} staat al in je winkelwagen.`;
  const image = env.SHARE_IMAGE ? `<meta property="og:image" content="${esc(env.SHARE_IMAGE)}">` : '';
  // no meta refresh: link-preview bots would follow it to the shop page and lose the code again
  const html = `<!doctype html><html lang="nl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title><meta name="robots" content="noindex">
<meta property="og:type" content="website"><meta property="og:url" content="${esc(self)}">
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(text)}">${image}
<script>location.replace(${JSON.stringify(target)})</script></head>
<body style="margin:0;padding:24px;font:16px/1.6 system-ui,sans-serif;background:#fff;color:#0a0a0a"><a href="${esc(target)}" style="color:#0a0a0a">${esc(title)}</a></body></html>`;
  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'public, max-age=300',
      'X-Content-Type-Options': 'nosniff', 'X-Robots-Tag': 'noindex', 'Referrer-Policy': 'strict-origin-when-cross-origin'
    }
  });
}

// via the Shopify app proxy (higrip.nl/a/deel/<code>) the public address is the shop's, not this worker's;
// Shopify passes the proxy path as path_prefix, and the check keeps og:url on our own shop domain
function publicUrl(env, request, code) {
  const url = new URL(request.url);
  const prefix = url.searchParams.get('path_prefix') || '';
  return /^\/(a|apps|community|tools)\/[\w-]{1,30}$/.test(prefix) ? `${origins(env)[0]}${prefix}/${code}` : `${url.origin}${url.pathname}`;
}

function esc(value) {
  return String(value).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
}

function origins(env) {
  return (env.ALLOWED_ORIGINS || 'https://www.higrip.nl,https://higrip.nl').split(',').map((o) => o.trim()).filter(Boolean);
}

function randomPart(length) {
  const bytes = crypto.getRandomValues(new Uint8Array(length));
  return Array.from(bytes, (b) => ALPHABET[b % ALPHABET.length]).join('');
}

// visitor key is a salted hash, so no IP addresses end up in storage
async function hash(value) {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value));
  return Array.from(new Uint8Array(digest).slice(0, 12), (b) => b.toString(16).padStart(2, '0')).join('');
}

async function count(env, key) {
  return parseInt((await env.CODES_KV.get(key)) || '0', 10);
}

function bump(env, key, current) {
  return env.CODES_KV.put(key, String(current + 1), { expirationTtl: 172800 });
}

function num(value, fallback) {
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? n : fallback;
}

function json(data, status, headers) {
  // a code is personal: never let a browser or proxy keep a copy
  return new Response(JSON.stringify(data), {
    status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff', ...headers }
  });
}
