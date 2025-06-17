import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import renderHomePage from './scripts/pages/home';
import renderDeteksiPage from './scripts/pages/deteksi.js';
import renderAboutPage from './scripts/pages/about.js';
import renderLoginPage from './scripts/pages/login.js';
import renderRegisterPage from './scripts/pages/register.js';
import renderNavbar from './scripts/components/navbar.js';
import renderFooter from './scripts/components/footer.js';
import renderProfilePage from './scripts/pages/profile.js';

const app = document.querySelector('#app');

function isLoggedIn() {
  return !!localStorage.getItem('user');
}

function handleRouting() {
  const hash = window.location.hash.replace('#', '');
  let html = '';

  switch (hash.split('?')[0]) {
    case 'profile':
      if (isLoggedIn()) {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        html = renderProfilePage(isLoggedIn(), user);
      } else {
        html = renderProfilePage(isLoggedIn());
      }
      break;
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

  // Tambahkan ini agar event listener form deteksi aktif
  if (hash.split('?')[0] === 'deteksi' && typeof window.afterDeteksiRender === 'function') {
    window.afterDeteksiRender();
  }

  // Update tombol auth di navbar
  renderAuthActions();
}

function renderAuthActions() {
  const authActions = document.getElementById('auth-actions');
  if (!authActions) return;
  if (isLoggedIn()) {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const displayName = user.name ? user.name : 'Pengguna';
    const avatarUrl = user.avatar || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(displayName) + '&background=0D8ABC&color=fff';
    authActions.innerHTML = `
      <div class="dropdown">
        <a href="#" class="d-flex align-items-center text-decoration-none dropdown-toggle" id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false">
          <span class="me-2">${displayName}</span>
          <img src="${avatarUrl}" alt="avatar" width="32" height="32" class="rounded-circle" />
        </a>
        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
          <li><a class="dropdown-item" href="#profile">Profile</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><button class="dropdown-item text-danger" id="logoutBtn">Logout</button></li>
        </ul>
      </div>
    `;
    // Event listener logout
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('user');
        window.location.hash = '#login';
        renderAuthActions();
      });
    }
  } else {
    authActions.innerHTML = `
      <a href="#login" class="btn btn-outline-primary">Masuk</a>
      <a href="#register" class="btn btn-primary">Daftar</a>
    `;
  }
}

function showRegisterPage() {
  document.getElementById('app').innerHTML = renderRegisterPage();
  // Event handler akan terpasang karena form sudah ada di DOM
}

function showLoginPage() {
  document.getElementById('app').innerHTML = renderLoginPage();
  // Event handler akan terpasang karena form sudah ada di DOM
}

// Jalankan routing saat hash berubah
window.addEventListener('hashchange', () => {
  handleRouting();
  renderAuthActions();
});

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

window.addEventListener('DOMContentLoaded', () => {
  // Pastikan header dan footer tersedia
  const header = document.getElementById('header-container');
  const footer = document.getElementById('footer-container');

  if (header) header.innerHTML = renderNavbar();
  if (footer) footer.innerHTML = renderFooter();

  handleRouting();

  // Routing saat hash berubah
  window.addEventListener('hashchange', handleRouting);

  // Collapse navbar saat link diklik
  document.addEventListener('click', (e) => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const isNavLink = e.target.classList.contains('nav-link');

    if (navbarCollapse && navbarCollapse.classList.contains('show') && isNavLink) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse);
      bsCollapse.hide();
    }
  });
  // Render auth actions
  renderAuthActions();
}
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}
