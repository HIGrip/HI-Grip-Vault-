/* HÏ Grip — sport-fotohero (sticky CTA) en wrijvingscijfers (tellen op). */
(function () {
  var RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var LANG = document.documentElement.lang || 'nl';
  var fmt = function (v) { return v.toLocaleString(LANG, { minimumFractionDigits: 2, maximumFractionDigits: 2 }); };

  function init(root) {
    root.querySelectorAll('[data-spf-sticky]').forEach(function (bar) {
      if (bar.dataset.ready) return; bar.dataset.ready = 'true';
      var cta = document.querySelector('[data-spf-cta]');
      if (!cta || !('IntersectionObserver' in window)) return;
      new IntersectionObserver(function (e) {
        var on = !e[0].isIntersecting && e[0].boundingClientRect.top < 0;
        bar.classList.toggle('is-on', on);
        bar.setAttribute('aria-hidden', String(!on));
        var a = bar.querySelector('a'); if (a) a.tabIndex = on ? 0 : -1;
      }).observe(cta);
    });
    if (RM || !('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target, to = parseFloat(el.dataset.count), t0 = performance.now();
        (function tick(t) {
          var p = Math.min(1, (t - t0) / 1400), e = 1 - Math.pow(1 - p, 4);
          el.textContent = fmt(to * e);
          if (p < 1) requestAnimationFrame(tick); else el.textContent = el.dataset.final;
        })(t0);
        io.unobserve(el);
      });
    }, { threshold: 0.5 });
    root.querySelectorAll('[data-count]').forEach(function (el) {
      if (el.dataset.ready) return; el.dataset.ready = 'true';
      el.dataset.final = el.textContent;
      if (el.getBoundingClientRect().top > innerHeight) { el.textContent = fmt(0); io.observe(el); }
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { init(document); });
  else init(document);
  document.addEventListener('shopify:section:load', function (e) { init(e.target); });
})();