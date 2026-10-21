/* HÏ Grip — WK-campagne: countdown + reveal + count-up (vanilla, geen libs) */
(() => {
  const pad = (n) => String(n).padStart(2, '0');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Countdown ───────────────────────────────────────────────── */
  document.querySelectorAll('[data-wk-countdown]').forEach((el) => {
    const end = Date.parse(el.dataset.end);
    if (Number.isNaN(end)) return;

    const days = el.querySelector('[data-wk-days]');
    const hours = el.querySelector('[data-wk-hours]');
    const minutes = el.querySelector('[data-wk-minutes]');
    const seconds = el.querySelector('[data-wk-seconds]');
    const section = el.closest('.hi-wk');
    const expiredMsg = el.querySelector('.hi-wk__expired');

    const tick = () => {
      const diff = end - Date.now();
      if (diff <= 0) {
        clearInterval(timer);
        if (section) section.classList.add('hi-wk--expired');
        if (expiredMsg) expiredMsg.hidden = false;
        return;
      }
      const total = Math.floor(diff / 1000);
      days.textContent = pad(Math.floor(total / 86400));
      hours.textContent = pad(Math.floor((total % 86400) / 3600));
      minutes.textContent = pad(Math.floor((total % 3600) / 60));
      seconds.textContent = pad(total % 60);
    };
    const timer = setInterval(tick, 1000);
    tick();
  });

  /* ── Count-up voor de stats ──────────────────────────────────── */
  const countUp = (el) => {
    const finalText = el.textContent.trim();
    const m = finalText.match(/^(\D*?)([\d.,]+)(\D*)$/);
    if (!m) return;
    const prefix = m[1], numStr = m[2], suffix = m[3];
    let target, decimals = 0, thousands = false, tsep = '.', dsep = '.';

    if (/^\d{1,3}([.,]\d{3})+$/.test(numStr)) {
      thousands = true;
      tsep = numStr.indexOf('.') > -1 ? '.' : ',';
      target = parseInt(numStr.replace(/[.,]/g, ''), 10);
    } else {
      const dm = numStr.match(/[.,](\d+)$/);
      if (dm) { decimals = dm[1].length; dsep = numStr.includes(',') ? ',' : '.'; target = parseFloat(numStr.replace(',', '.')); }
      else { target = parseInt(numStr, 10); }
    }
    if (Number.isNaN(target)) return;

    const fmt = (v) => {
      let str;
      if (thousands) str = Math.round(v).toString().replace(/\B(?=(\d{3})+(?!\d))/g, tsep);
      else { str = v.toFixed(decimals); if (dsep === ',') str = str.replace('.', ','); }
      return prefix + str + suffix;
    };

    const dur = 1100, t0 = performance.now();
    const step = (now) => {
      const p = Math.min(1, (now - t0) / dur);
      el.textContent = fmt(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = finalText;
    };
    requestAnimationFrame(step);
  };

  const counters = document.querySelectorAll('.hi-wk [data-count]');
  if (counters.length && !reduce && 'IntersectionObserver' in window) {
    const cio = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { countUp(entry.target); cio.unobserve(entry.target); }
      });
    }, { threshold: 0.4 });
    counters.forEach((el) => cio.observe(el));
  }

  /* ── Reveal — fail-safe: alles zichtbaar na 2,5s ─────────────── */
  const revealEls = document.querySelectorAll('.hi-wk [data-wk-reveal]');
  if (revealEls.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('is-inview'); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    revealEls.forEach((el) => io.observe(el));
    document.querySelectorAll('.hi-wk').forEach((s) => s.classList.add('js-reveal'));

    setTimeout(() => {
      io.disconnect();
      revealEls.forEach((el) => el.classList.add('is-inview'));
    }, 2500);
  }

  /* ── Marquee: vul + dupliceer zodat de loop bij elke breedte naadloos is ── */
  const buildMarquee = (track) => {
    const mq = track.closest('.hi-wk__marquee') || track.parentElement;
    if (!track.dataset.base) track.dataset.base = track.innerHTML;
    const base = track.dataset.base;
    if (!base.trim()) return;
    track.innerHTML = base;
    const cw = (mq && mq.clientWidth) || document.documentElement.clientWidth || 1;
    let guard = 0;
    while (track.scrollWidth < cw && guard < 80) { track.insertAdjacentHTML('beforeend', base); guard++; }
    const run = track.scrollWidth;
    track.insertAdjacentHTML('beforeend', track.innerHTML);
    track.style.setProperty('--mq-dur', Math.max(16, Math.round(run / 90)) + 's');
  };
  const marquees = document.querySelectorAll('.hi-wk [data-wk-marquee]');
  if (marquees.length) {
    marquees.forEach(buildMarquee);
    let rt;
    window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => marquees.forEach(buildMarquee), 150); });
  }
})();
