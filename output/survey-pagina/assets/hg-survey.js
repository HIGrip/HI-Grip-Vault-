/* HÏ Grip — flitsinterview: één vraag per scherm, antwoorden gaan mee in het contactformulier.
   Opties, teksten en sporten komen uit de sectie (blokken); dit script regelt alleen het verloop. */
(function () {
  var root = document.querySelector('.hgs');
  if (!root) return;

  var STORE = 'hg-survey-sport';
  var CODE_STORE = 'hg-survey-code';
  var SENT_STORE = 'hg-survey-sent';
  var params = new URLSearchParams(window.location.search);
  var photos = {};
  try { photos = JSON.parse(root.querySelector('[data-hgs-photos]').textContent); } catch (e) {}
  var $ = function (sel) { return root.querySelector(sel); };
  var $$ = function (sel) { return [].slice.call(root.querySelectorAll(sel)); };

  function remember(key, value) { try { sessionStorage.setItem(key, value); } catch (e) {} }
  function recall(key) { try { return sessionStorage.getItem(key); } catch (e) { return null; } }
  // eindscherm alleen na echt versturen: ?contact_posted=true kan iedereen intikken; zonder opslag geven we het voordeel van de twijfel
  function sent() {
    try { return Date.now() - (+sessionStorage.getItem(SENT_STORE) || 0) < 6 * 36e5; } catch (e) { return true; }
  }
  // de code blijft ook na het sluiten van het tabblad bewaard; v2 laat de ongeldige popupcodes van vóór de codegenerator achter
  var KEEP_STORE = 'hg-survey-code-v2';
  function keep(value) { try { localStorage.setItem(KEEP_STORE, value); } catch (e) {} }
  function kept() { try { return localStorage.getItem(KEEP_STORE); } catch (e) { return null; } }
  var CODE_RE = /^[A-Za-z0-9][A-Za-z0-9_-]{3,39}$/;

  // foto bovenin: de gekozen sport, anders de teamfoto
  function showPhoto(sport) {
    var hero = $('[data-hgs-hero]');
    var photo = photos[sport] || photos.team;
    if (hero && photo) hero.style.backgroundImage = 'url("' + photo + '")';
  }

  // vaste menubalk van het thema meetellen, anders valt de vraag eronder
  function headerOffset() {
    var el = document.elementFromPoint(window.innerWidth / 2, 2);
    while (el && el !== document.body && !root.contains(el)) {
      var pos = getComputedStyle(el).position;
      if (pos === 'fixed' || pos === 'sticky') return Math.max(0, el.getBoundingClientRect().bottom);
      el = el.parentElement;
    }
    return 0;
  }

  // nieuwe vraag: altijd terug naar de bovenkant van de vragen; direct, want het thema scrolt standaard 'smooth'
  // en een lopende scroll kan de sprong dan onderbreken
  function toTop() {
    var top = Math.max(0, root.getBoundingClientRect().top + window.pageYOffset - headerOffset());
    if (window.pageYOffset > top + 2) window.scrollTo({ top: top, behavior: 'instant' });
  }

  // thema-editor: alles zichtbaar laten
  if (root.classList.contains('hgs--editor')) return;

  // persoonlijke code uit de maillink; een niet-ingevulde mailtag ({{…}}, %…%) telt niet
  var linkCode = (params.get('code') || '').trim();
  if (CODE_RE.test(linkCode)) remember(CODE_STORE, linkCode);

  // code op de pagina zetten; de knop past hem via /discount/ meteen toe op de winkelwagen
  function showCode(code) {
    var box = $('[data-hgs-codebox]');
    $('[data-hgs-code]').textContent = code;
    box.hidden = false;
    if (box.classList.contains('is-loading')) box.classList.add('is-in');
    box.classList.remove('is-loading');
    $('[data-hgs-nocode]').hidden = true;
    var claim = $('[data-hgs-claimbox]');
    if (claim) claim.hidden = true;
    var shopbox = $('[data-hgs-shopbox]');
    if (shopbox) shopbox.hidden = false;
    var shop = $('[data-hgs-shop]');
    if (shop) shop.href = '/discount/' + encodeURIComponent(code) + '?redirect=' + encodeURIComponent(shop.dataset.redirect || '/collections/all');
    apply(code);
  }

  // code meteen in de sessie zetten, zodat hij ook zonder de Shop-knop in de kassa staat
  var applied;
  function apply(code) {
    if (applied === code || !window.fetch) return;
    applied = code;
    fetch('/discount/' + encodeURIComponent(code) + '?redirect=%2Fcart.js', { credentials: 'same-origin' }).catch(function () {});
  }

  // SendWILL zet de geclaimde code in cookie ecomsend_discount_code<popup-id>
  function popupCode() {
    if (!root.dataset.popupId) return null;
    var name = 'ecomsend_discount_code' + root.dataset.popupId + '=';
    var hit = document.cookie.split('; ').filter(function (c) { return c.indexOf(name) === 0; })[0];
    if (!hit) return null;
    try { var code = decodeURIComponent(hit.slice(name.length)).trim(); } catch (e) { return null; }
    return CODE_RE.test(code) ? code : null;
  }

  // cookies geven geen seintje, dus kort blijven kijken tot de klant heeft geclaimd
  function watchPopup() {
    if (!root.dataset.popupId) return;
    var timer = setInterval(function () {
      var code = popupCode();
      if (!code) return;
      clearInterval(timer);
      keep(code);
      showCode(code);
    }, 500);
  }

  // popup lukt niet: reservecode tonen, of zonder reservecode vragen om nog eens te klikken
  function fallback() {
    var reserve = (root.dataset.reserveCode || '').trim();
    if (CODE_RE.test(reserve)) return showCode(reserve);
    stopLoading();
    var claimBox = $('[data-hgs-claimbox]');
    if (claimBox) claimBox.hidden = false;
    $('[data-hgs-nocode]').hidden = false;
  }

  // codegenerator bezig: lege codekaart met laadbalk in plaats van de claimknop
  function loading() {
    var box = $('[data-hgs-codebox]');
    $('[data-hgs-code]').textContent = '';
    box.classList.add('is-loading');
    box.hidden = false;
    var claimBox = $('[data-hgs-claimbox]');
    if (claimBox) claimBox.hidden = true;
  }
  function stopLoading() {
    var box = $('[data-hgs-codebox]');
    if (!box.classList.contains('is-loading')) return;
    box.classList.remove('is-loading');
    box.hidden = true;
  }

  // SendWILL opent de popup op de hash en haalt hem daarna weg; blijft hij staan, dan is er niets geopend
  var HASH = 'Ecomsend_popups_open_';
  var waiting;
  function openPopup() {
    if (!root.dataset.popupId) return;
    $('[data-hgs-nocode]').hidden = true;
    var bare = location.pathname + location.search;
    history.replaceState(null, '', bare);
    location.hash = HASH + root.dataset.popupId;
    // SendWILL laadt uitgesteld, dus ruim wachten voordat we het opgeven
    clearTimeout(waiting);
    waiting = setTimeout(function () {
      if (popupCode() || location.hash.indexOf(HASH) < 0) return;
      history.replaceState(null, '', bare);
      fallback();
    }, 10000);
  }

  // daglimiet bereikt (429): nog een keer klikken helpt niet, dus melding zonder claimknop
  function limited() {
    var note = $('[data-hgs-limit]');
    if (!note) return fallback();
    stopLoading();
    var claimBox = $('[data-hgs-claimbox]');
    if (claimBox) claimBox.hidden = true;
    $('[data-hgs-nocode]').hidden = true;
    note.hidden = false;
  }

  // codegenerator: Turnstile geeft een token, de worker maakt er één unieke code voor aan
  var busy = false;
  function withTurnstile(cb) {
    if (window.turnstile) return cb();
    var s = document.createElement('script');
    s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    s.async = true;
    s.onload = cb;
    s.onerror = function () { busy = false; fallback(); };
    document.head.appendChild(s);
  }

  function requestCode() {
    if (busy) return;
    busy = true;
    $('[data-hgs-nocode]').hidden = true;
    loading();
    withTurnstile(function () {
      var box = $('[data-hgs-turnstile]');
      var widget;
      var stop = function () { clearTimeout(timer); busy = false; if (widget !== undefined) window.turnstile.remove(widget); };
      // geen antwoord van Turnstile: niet eindeloos laden, de claimknop terugzetten
      var timer = setTimeout(function () { stop(); fallback(); }, 15000);
      widget = window.turnstile.render(box, {
        sitekey: root.dataset.turnstile,
        action: 'flitsinterview',
        appearance: 'interaction-only',
        'before-interactive-callback': function () { clearTimeout(timer); },
        'unsupported-callback': function () { stop(); fallback(); },
        callback: function (token) {
          clearTimeout(timer);
          fetch(root.dataset.codeEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ token: token }) })
            .then(function (r) { return r.ok ? r.json() : Promise.reject(r.status); })
            .then(function (data) {
              if (!CODE_RE.test(data.code || '')) throw new Error('code');
              keep(data.code);
              showCode(data.code);
            })
            .catch(function (status) { if (status === 429) limited(); else fallback(); })
            .then(stop);
        },
        'error-callback': function () { stop(); fallback(); }
      });
    });
  }

  function claim() {
    if (root.dataset.codeEndpoint) requestCode();
    else openPopup();
  }

  // na versturen: teamfoto en code, zonder code er meteen een ophalen
  var done = $('[data-hgs-done]');
  if (done) {
    var personal = recall(CODE_STORE) || popupCode() || kept();
    if (!personal && !sent()) return location.replace(location.pathname);
    root.classList.add('is-done');
    showPhoto('team');
    toTop();
    if (personal) showCode(personal);
    else claim();
    watchPopup();
    var claimBtn = $('[data-hgs-claim]');
    if (claimBtn) claimBtn.addEventListener('click', function (e) { e.preventDefault(); claim(); });
    done.querySelector('.hgs__h').focus({ preventScroll: true });
    // delen: telefoon opent het deelmenu, computer kopieert tekst + link
    var share = $('[data-hgs-share]');
    if (share) share.addEventListener('click', function () {
      var code = $('[data-hgs-code]').textContent.trim();
      if (!CODE_RE.test(code)) return;
      // /community/korting/<code> is de app proxy naar de codegenerator (/d/<code>): Snapchat e.d. vervangen een
      // doorstuurlink door de og:url van de winkelpagina, en dan valt de code weg
      var shopLink = $('[data-hgs-shop]');
      var url = root.dataset.codeEndpoint
        ? location.origin + '/community/korting/' + encodeURIComponent(code)
        : location.origin + '/discount/' + encodeURIComponent(code) + '?redirect=' + encodeURIComponent((shopLink && shopLink.dataset.redirect) || '/');
      var text = (share.dataset.text || '').replace('[code]', code);
      if (navigator.share) {
        navigator.share({ text: text, url: url }).catch(function () {});
        return;
      }
      var label = share.querySelector('span');
      var initial = label.textContent;
      try {
        navigator.clipboard.writeText(text + ' ' + url).then(function () {
          label.textContent = share.dataset.copied;
          setTimeout(function () { label.textContent = initial; }, 1600);
        }, function () { window.prompt(initial, url); });
      } catch (e) { window.prompt(initial, url); }
    });

    var copy = $('[data-hgs-copy]');
    if (copy) copy.addEventListener('click', function () {
      var label = copy.querySelector('span');
      var initial = label.textContent;
      var code = $('[data-hgs-code]');
      var select = function () {
        var r = document.createRange(); r.selectNodeContents(code);
        var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
      };
      var ok = function () { label.textContent = copy.dataset.copied; setTimeout(function () { label.textContent = initial; }, 1600); };
      try { navigator.clipboard.writeText(code.textContent.trim()).then(ok, select); } catch (e) { select(); }
    });
    return;
  }

  var form = $('form');
  if (!form) return;

  var max = +root.dataset.max || 2;
  var state = { sport: null, sportLabel: '', reden: [], bron: null, freq: null };
  var step = 0;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var opts = function (key) { return $$('[data-hgs-q="' + key + '"] .hgs-opt'); };

  // volgorde husselen tegen positie-effect in twee kolommen, per groep; "iets anders" blijft onderaan
  function shuffle(key) {
    $$('[data-hgs-q="' + key + '"]').forEach(function (list) {
      var items = [].slice.call(list.children);
      var rest = items.filter(function (li) { return !li.hasAttribute('data-other-opt'); });
      for (var i = rest.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = rest[i]; rest[i] = rest[j]; rest[j] = t; }
      rest.concat(items.filter(function (li) { return li.hasAttribute('data-other-opt'); })).forEach(function (li) { list.appendChild(li); });
    });
  }

  // cijfertoetsen: nummers pas na het husselen zetten
  function number() {
    $$('[data-hgs-keys]').forEach(function (list) {
      [].slice.call(list.querySelectorAll('.hgs-opt__k')).forEach(function (k, i) { k.textContent = i + 1; });
    });
  }

  // vraag 2: meerkeuze tot het maximum, de rest gaat op slot
  opts('reden').forEach(function (b) {
    b.addEventListener('click', function () {
      var i = state.reden.indexOf(b);
      if (i >= 0) state.reden.splice(i, 1);
      else if (state.reden.length < max) state.reden.push(b);
      else return;
      b.setAttribute('aria-pressed', String(i < 0));
      sync();
    });
  });

  function sync() {
    var full = state.reden.length >= max;
    opts('reden').forEach(function (x) { x.disabled = full && x.getAttribute('aria-pressed') !== 'true'; });
    $('[data-hgs-other="reden"]').hidden = !state.reden.some(function (b) { return b.hasAttribute('data-other'); });
    $('[data-hgs-next="reden"]').disabled = !state.reden.length;
    $('[data-hgs-picked]').textContent = root.dataset.pickedLabel.replace('[aantal]', state.reden.length).replace('[max]', max);
  }

  // vraag 3: één keuze, door naar de volgende vraag
  opts('bron').forEach(function (b) {
    b.addEventListener('click', function () {
      state.bron = b;
      opts('bron').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      var other = $('[data-hgs-other="bron"]');
      other.hidden = !b.hasAttribute('data-other');
      if (!other.hidden) { other.querySelector('input').focus(); return; }
      setTimeout(function () { go(step + 1); }, reduce ? 0 : 200);
    });
  });

  // vraag 4: één keuze, door naar de open vraag
  opts('freq').forEach(function (b) {
    b.addEventListener('click', function () {
      state.freq = b;
      opts('freq').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      setTimeout(function () { go(step + 1); }, reduce ? 0 : 200);
    });
  });

  function go(n) {
    var back = n < step;
    step = n;
    $$('.hgs-step[data-step]').forEach(function (s) {
      var on = +s.dataset.step === n;
      s.hidden = !on;
      s.classList.toggle('is-back', on && back);
    });
    showPhoto(n > 0 ? state.sport : null);
    $('.hgs-step[data-step="' + n + '"] .hgs__h').focus({ preventScroll: true });
    toTop();
  }

  // laptop: cijfer kiest het zoveelste antwoord van de open vraag
  document.addEventListener('keydown', function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey || !/^[1-9]$/.test(e.key)) return;
    if (e.target.closest && e.target.closest('input, textarea, select, [contenteditable]')) return;
    var current = $('.hgs-step[data-step="' + step + '"]');
    if (!current || current.hidden) return;
    var picks = [].slice.call(current.querySelectorAll('[data-hgs-keys] .hgs-opt, [data-hgs-sport]'));
    var b = picks[+e.key - 1];
    if (b && !b.disabled) { e.preventDefault(); b.click(); }
  });

  function setSport(tile) {
    state.sport = tile.dataset.hgsSport;
    state.sportLabel = tile.dataset.label;
    remember(STORE, state.sport);
    showPhoto(state.sport);
    $('[data-hgs-sport-ask]').hidden = state.sport !== 'anders';
  }

  $$('[data-hgs-sport]').forEach(function (b) {
    b.addEventListener('click', function () { setSport(b); go(1); });
  });
  $$('[data-hgs-goto]').forEach(function (b) {
    b.addEventListener('click', function () { go(+b.dataset.hgsGoto); });
  });
  $$('[data-hgs-next]').forEach(function (b) {
    b.addEventListener('click', function () { go(step + 1); });
  });

  // Enter in een los tekstveld (op mobiel de Ga-toets) zou het formulier halverwege versturen: dan naar de volgende vraag
  form.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' || e.target.tagName !== 'INPUT') return;
    e.preventDefault();
    var next = e.target.closest('.hgs-step').querySelector('[data-hgs-next]');
    if (next && !next.disabled) next.click();
  });

  // vóór versturen: leesbare velden voor de mail op info@; alleen vanaf de laatste vraag
  var last = $$('.hgs-step[data-step]').length - 1;
  form.addEventListener('submit', function (e) {
    if (step !== last) { e.preventDefault(); return; }
    remember(SENT_STORE, String(Date.now()));
    var labels = function (list) { return list.map(function (b) { return b.dataset.label; }).join(', '); };
    var fields = {
      sport: state.sportLabel || state.sport || '',
      reden: labels(state.reden),
      feature: state.reden.some(function (b) { return b.hasAttribute('data-feature'); }) ? 'ja' : 'nee',
      bron: state.bron ? state.bron.dataset.label : '',
      freq: state.freq ? state.freq.dataset.label : ''
    };
    fields.body = 'Flitsinterview · sport: ' + fields.sport + ' · doorslag: ' + fields.reden + ' · feature: ' + fields.feature + ' · per week: ' + fields.freq;
    Object.keys(fields).forEach(function (k) { $('[data-hgs-field="' + k + '"]').value = fields[k]; });
  });

  if (root.dataset.shuffleReasons === 'true') shuffle('reden');
  if (root.dataset.shuffleSources === 'true') shuffle('bron');
  number();
  sync();

  // sport uit de link vergelijken, niet in een selector plakken: ?sport=a"] liet anders de hele survey leeg
  var linkSport = (params.get('sport') || '').toLowerCase();
  var fromLink = $$('[data-hgs-sport]').filter(function (b) { return b.dataset.hgsSport === linkSport; })[0];
  if (fromLink) { setSport(fromLink); step = 1; }
  else showPhoto(null);
  $$('.hgs-step[data-step]').forEach(function (s) { s.hidden = +s.dataset.step !== step; });
})();
