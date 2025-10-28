
document.addEventListener('DOMContentLoaded', () => {
  const h = location.hostname.toLowerCase();
  if (h === 'foundation.azt.one') {
    const target = location.protocol + '//' + location.host + '/foundation/';
    if (!location.pathname.startsWith('/foundation/')) {
      location.replace(target);
      return;
    }
  }
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
