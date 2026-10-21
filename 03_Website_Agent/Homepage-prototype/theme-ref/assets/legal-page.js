/* HÏ Grip — juridische pagina's: inhoudsopgave (open op desktop, inklapbaar op mobiel) + actieve sectie markeren. */
(function () {
  var wide = window.matchMedia('(min-width: 769px)');

  function init(root) {
    var toc = root.querySelector('[data-legal-toc]');
    if (!toc || toc.dataset.legalReady) return;
    toc.dataset.legalReady = 'true';

    var details = toc.querySelector('details');
    var links = Array.prototype.slice.call(toc.querySelectorAll('a[href^="#"]'));

    function sync() {
      if (details && wide.matches) details.open = true;
    }
    sync();
    if (wide.addEventListener) wide.addEventListener('change', sync);

    links.forEach(function (a) {
      a.addEventListener('click', function () {
        if (details && !wide.matches) details.open = false;
      });
    });

    if (!('IntersectionObserver' in window)) return;
    var byId = {};
    links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting || !byId[en.target.id]) return;
        links.forEach(function (l) { l.classList.remove('is-active'); });
        byId[en.target.id].classList.add('is-active');
      });
    }, { rootMargin: '-20% 0px -70% 0px' });

    root.querySelectorAll('[data-legal-section][id]').forEach(function (s) { io.observe(s); });
  }

  function initAll(scope) {
    (scope || document).querySelectorAll('[data-legal-body]').forEach(init);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { initAll(); });
  } else {
    initAll();
  }
  document.addEventListener('shopify:section:load', function (e) { initAll(e.target); });
})();
