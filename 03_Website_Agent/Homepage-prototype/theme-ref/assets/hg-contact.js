/* HÏ Grip — contactpagina: kopieerknoppen, onderwerp-afhankelijke velden, validatie. */
(function () {
  function copyInit(root) {
    root.querySelectorAll('[data-hgc-copy]').forEach(function (btn) {
      if (btn.dataset.hgcReady) return;
      btn.dataset.hgcReady = 'true';
      btn.addEventListener('click', function () {
        var text = btn.getAttribute('data-hgc-copy');
        var done = btn.getAttribute('data-copied') || '';
        var old = btn.textContent;
        var ok = function () { btn.textContent = done; setTimeout(function () { btn.textContent = old; }, 1600); };
        var fallback = function () {
          var card = btn.closest('.hgc-ch');
          var el = card && card.querySelector('.hgc-ch__value');
          if (!el) return;
          var r = document.createRange(); r.selectNodeContents(el);
          var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
        };
        try { navigator.clipboard.writeText(text).then(ok, fallback); } catch (e) { fallback(); }
      });
    });
  }

  function formInit(wrap) {
    var form = wrap.querySelector('form');
    if (!form || form.dataset.hgcReady) return;
    form.dataset.hgcReady = 'true';
    var list = function (v) { return (v || '').split(',').map(function (x) { return parseInt(x, 10); }).filter(Boolean); };
    var orderFor = list(wrap.getAttribute('data-order-for'));
    var bizFor = list(wrap.getAttribute('data-business-for'));
    var orderField = form.querySelector('[data-hgc-order]');
    var hint = form.querySelector('[data-hgc-hint]');
    var radios = Array.prototype.slice.call(form.querySelectorAll('input[type="radio"]'));

    function sync() {
      var idx = radios.findIndex(function (r) { return r.checked; }) + 1;
      if (orderField) orderField.hidden = orderFor.length > 0 && orderFor.indexOf(idx) === -1;
      if (hint) hint.hidden = bizFor.indexOf(idx) === -1;
    }
    radios.forEach(function (r) { r.addEventListener('change', sync); });
    sync();

    function mark(box, bad) { if (box) box.setAttribute('aria-invalid', bad ? 'true' : 'false'); }
    form.addEventListener('submit', function (e) {
      var mail = form.querySelector('[name="contact[email]"]');
      var msg = form.querySelector('[name="contact[body]"]');
      var pv = form.querySelector('[data-hgc-privacy]');
      var mailBad = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail.value.trim());
      var msgBad = msg.value.trim().length === 0;
      var pvBad = !!pv && !pv.checked;
      mark(mail.closest('.hgc-field'), mailBad);
      mark(msg.closest('.hgc-field'), msgBad);
      if (pv) mark(pv.closest('.hgc-check'), pvBad);
      if (mailBad || msgBad || pvBad) {
        e.preventDefault();
        (mailBad ? mail : msgBad ? msg : pv).focus();
      }
    });
  }

  function init(scope) {
    var root = scope || document;
    copyInit(root);
    root.querySelectorAll('[data-hgc-form]').forEach(formInit);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { init(); });
  else init();
  document.addEventListener('shopify:section:load', function (e) { init(e.target); });
})();