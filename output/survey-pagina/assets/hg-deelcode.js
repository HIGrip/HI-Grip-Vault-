// Deel-link /discount/<code>: Shopify onthoudt de code alleen in een cookie en past hem pas bij het afrekenen toe.
// Dit script zet de code in de winkelwagen zodra er iets in ligt, zodat de ontvanger de korting meteen ziet.
(function () {
  var KEY = 'hg-deelcode';
  var DAYS = 30;
  var CODE_RE = /^HI30-[A-Z0-9]{8}$/i;

  function cookieCode() {
    var hit = document.cookie.split('; ').filter(function (c) { return c.indexOf('discount_code=') === 0; })[0];
    if (!hit) return null;
    try { var code = decodeURIComponent(hit.slice(14)).trim(); } catch (e) { return null; }
    return CODE_RE.test(code) ? code.toUpperCase() : null;
  }

  // de cookie verdwijnt na het bezoek; de code blijft 30 dagen in deze browser bewaard
  function storedCode() {
    var fresh = cookieCode();
    try {
      if (fresh) {
        localStorage.setItem(KEY, JSON.stringify({ code: fresh, until: Date.now() + DAYS * 864e5 }));
        return fresh;
      }
      var saved = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (saved && saved.until > Date.now() && CODE_RE.test(saved.code)) return saved.code;
      localStorage.removeItem(KEY);
    } catch (e) {}
    return fresh;
  }

  function forget() { try { localStorage.removeItem(KEY); } catch (e) {} }

  // /cart.js en Shopify.actions geven de winkelwagen in twee vormen
  function codesOf(cart) { return cart.discount_codes || cart.discountCodes || []; }
  function countOf(cart) { return cart.item_count != null ? cart.item_count : cart.totalQuantity; }
  function hasCode(cart, code) {
    return codesOf(cart).some(function (d) { return d.code.toUpperCase() === code && d.applicable; });
  }

  // de winkelwagen-drawer is van Section Store; via die app ververst hij meteen mee
  function apply(code) {
    var drawer = window.SectionStoreCart;
    if (drawer && drawer.applyDiscount) {
      return Promise.resolve(drawer.ready).then(function () { return drawer.applyDiscount(code); });
    }
    return Shopify.actions.updateCart({ discountCodes: [code] }).then(function (res) { return res && res.cart; });
  }

  var busy = false;
  function ensure(cart) {
    var code = storedCode();
    if (!code || busy || !cart || !countOf(cart)) return;
    if (hasCode(cart, code)) return;
    // een andere geldige code van de klant zelf laten we staan
    if (codesOf(cart).some(function (d) { return d.applicable; })) return;

    busy = true;
    apply(code)
      .then(function (after) {
        // gebruikt of verlopen: niet blijven proberen
        if (after && !hasCode(after, code)) forget();
      })
      .catch(function () {})
      .then(function () { busy = false; });
  }

  function check() {
    if (!storedCode()) return;
    fetch('/cart.js', { credentials: 'same-origin' })
      .then(function (r) { return r.json(); })
      .then(ensure)
      .catch(function () {});
  }

  // toevoegen via het thema of via de drawer van Section Store
  document.addEventListener('shopify:cart:lines-update', function (event) {
    if (event.promise) event.promise.then(function (res) { ensure(res && res.cart); }).catch(function () {});
  });
  window.addEventListener('section-store:cart:updated', function (event) {
    ensure(event.detail && event.detail.cart);
  });

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', check);
  else check();
})();
