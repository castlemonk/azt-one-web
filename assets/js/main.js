// Redirect foundation.azt.one to /foundation/ path
(function() {
  const h = location.hostname.toLowerCase();
  if (h === 'foundation.azt.one' && !location.pathname.startsWith('/foundation/')) {
    location.replace(location.protocol + '//' + location.host + '/foundation/');
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
