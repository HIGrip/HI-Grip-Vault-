/**
 * HÏ Grip — Sticky Add-to-Cart
 * Voeg toe aan: assets/product-sticky-atc.js
 * Include onderaan sections/main-product.liquid via:
 * <script src="{{ 'product-sticky-atc.js' | asset_url }}" defer></script>
 */
(function () {
  'use strict';

  const SELECTORS = {
    mainATC: '.product-form__submit, [name="add"], button[type="submit"].product-form__submit',
    stickyBar: '#hi-sticky-atc',
    stickyBtn: '#hi-sticky-atc-btn',
    stickyPrice: '#hi-sticky-price',
    variantRadios: '.hi-pack-option input[type="radio"]',
    mainPrice: '.price__current, .price-item--regular, [data-product-price]',
  };

  function init() {
    const mainATC = document.querySelector(SELECTORS.mainATC);
    const stickyBar = document.querySelector(SELECTORS.stickyBar);
    const stickyBtn = document.querySelector(SELECTORS.stickyBtn);

    if (!mainATC || !stickyBar) return;

    // Show/hide sticky bar based on main ATC visibility
    const observer = new IntersectionObserver(
      function (entries) {
        var isVisible = entries[0].isIntersecting;
        stickyBar.classList.toggle('hi-sticky-atc--visible', !isVisible);
      },
      { threshold: 0.5 }
    );
    observer.observe(mainATC);

    // Clicking sticky btn triggers main ATC
    if (stickyBtn) {
      stickyBtn.addEventListener('click', function () {
        mainATC.click();
      });
    }

    // Sync price when variant changes
    syncPriceOnVariantChange();
  }

  function syncPriceOnVariantChange() {
    var stickyPrice = document.querySelector(SELECTORS.stickyPrice);
    if (!stickyPrice) return;

    // Listen for Shopify variant change events
    document.addEventListener('variant:change', function (e) {
      if (e.detail && e.detail.variant && e.detail.variant.price) {
        stickyPrice.textContent = formatMoney(e.detail.variant.price);
      }
    });

    // Fallback: watch for DOM price changes
    var mainPriceEl = document.querySelector(SELECTORS.mainPrice);
    if (mainPriceEl && window.MutationObserver) {
      var priceObserver = new MutationObserver(function () {
        stickyPrice.textContent = mainPriceEl.textContent.trim();
      });
      priceObserver.observe(mainPriceEl, { childList: true, subtree: true, characterData: true });
    }
  }

  function formatMoney(cents) {
    return '€' + (cents / 100).toFixed(2).replace('.', ',');
  }

  // Handle pack selector: sync with Shopify variant selector
  function initPackSelector() {
    var packOptions = document.querySelectorAll(SELECTORS.variantRadios);
    if (!packOptions.length) return;

    packOptions.forEach(function (radio) {
      radio.addEventListener('change', function () {
        var variantId = this.value;
        if (!variantId) return;

        // Update Shopify's native variant selector if present
        var nativeSelect = document.querySelector('select[name="id"]');
        if (nativeSelect) {
          nativeSelect.value = variantId;
          nativeSelect.dispatchEvent(new Event('change', { bubbles: true }));
        }

        // Also try updating via Shopify's section rendering API
        updateVariantURL(variantId);
      });
    });
  }

  function updateVariantURL(variantId) {
    var url = new URL(window.location.href);
    url.searchParams.set('variant', variantId);
    window.history.replaceState({}, '', url.toString());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      init();
      initPackSelector();
    });
  } else {
    init();
    initPackSelector();
  }
})();
