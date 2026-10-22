/* HÏ Grip — Gripsocks 2.0: gedeelde live countdown (vanilla, ondersteunt meerdere instanties per pagina) */
(() => {
  const pad = (n) => String(n).padStart(2, '0');

  document.querySelectorAll('[data-g2-countdown]').forEach((el) => {
    const end = Date.parse(el.dataset.end);
    if (Number.isNaN(end)) return;

    const days = el.querySelector('[data-g2-days]');
    const hours = el.querySelector('[data-g2-hours]');
    const minutes = el.querySelector('[data-g2-minutes]');
    const seconds = el.querySelector('[data-g2-seconds]');
    const timer = el.querySelector('.g2-countdown__timer');
    const expiredMsg = el.querySelector('.g2-countdown__expired');

    const tick = () => {
      const diff = end - Date.now();
      if (diff <= 0) {
        clearInterval(intervalId);
        if (timer) timer.hidden = true;
        if (expiredMsg) expiredMsg.hidden = false;
        return;
      }
      const total = Math.floor(diff / 1000);
      if (days) days.textContent = pad(Math.floor(total / 86400));
      if (hours) hours.textContent = pad(Math.floor((total % 86400) / 3600));
      if (minutes) minutes.textContent = pad(Math.floor((total % 3600) / 60));
      if (seconds) seconds.textContent = pad(total % 60);
    };

    const intervalId = setInterval(tick, 1000);
    tick();
  });
})();
