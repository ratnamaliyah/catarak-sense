import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';

import renderHomePage from './scripts/home';
import renderDeteksiPage from './scripts/deteksi.js';
import renderAboutPage from './scripts/about';
import renderLoginPage from './scripts/login.js';
import renderRegisterPage from './scripts/register.js';

const app = document.querySelector('#app');

function isLoggedIn() {
  return !!localStorage.getItem('user');
}

function handleRouting() {
  const hash = window.location.hash.replace('#', '');
  let html = '';

  switch (hash.split('?')[0]) {
    case 'deteksi':
      html = renderDeteksiPage(isLoggedIn());
      break;
    case 'about':
      html = renderAboutPage();
      break;
    case 'login':
      html = renderLoginPage();
      break;
    case 'register':
      html = renderRegisterPage();
      break;
    default:
      html = renderHomePage();
  }

  app.innerHTML = html;
}

// Jalankan routing saat hash berubah
window.addEventListener('hashchange', handleRouting);

// Jalankan routing saat pertama kali load
window.dispatchEvent(new HashChangeEvent('hashchange'));

document.addEventListener('click', function (e) {
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const isNavLink = e.target.classList.contains('nav-link');

  if (navbarCollapse && navbarCollapse.classList.contains('show') && isNavLink) {
    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
    bsCollapse.hide();
  }
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}
