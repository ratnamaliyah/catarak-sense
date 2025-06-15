import { loginUser } from './api.js';

export default function renderLoginPage() {
  setTimeout(() => {
    const form = document.getElementById('form-login');
    if (form) {
      form.onsubmit = async function(e) {
        e.preventDefault();
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;
        const result = document.getElementById('login-result');
        result.innerHTML = '<div class="alert alert-info">Memproses...</div>';
        try {
          const data = await loginUser(username, password);
          if (data.status === 'success') {
            localStorage.setItem('user', JSON.stringify(data.user));
            result.innerHTML = '<div class="alert alert-success">Login berhasil! Mengarahkan ke deteksi...</div>';
            setTimeout(() => {
              window.location.hash = '#deteksi';
              window.dispatchEvent(new HashChangeEvent('hashchange'));
            }, 1000);
          } else {
            result.innerHTML = '<div class="alert alert-danger">' + (data.message || 'Login gagal') + '</div>';
          }
        } catch (err) {
          result.innerHTML = '<div class="alert alert-danger">Terjadi kesalahan koneksi ke server.</div>';
        }
      };
    }
  }, 0);

  return `
    <section class="container py-5 d-flex justify-content-center align-items-center" style="min-height:70vh;">
      <div class="card shadow p-4 w-100" style="max-width:400px;">
        <h2 class="mb-3 text-primary text-center">Masuk</h2>
        <form id="form-login" class="mb-3">
          <div class="mb-3">
            <label for="loginUsername" class="form-label">Username</label>
            <input type="text" id="loginUsername" class="form-control" required />
          </div>
          <div class="mb-3">
            <label for="loginPassword" class="form-label">Kata Sandi</label>
            <input type="password" id="loginPassword" class="form-control" required />
          </div>
          <div class="d-grid">
            <button type="submit" class="btn btn-primary">Masuk</button>
          </div>
        </form>
        <div id="login-result" class="mt-2"></div>
        <div class="text-center mt-3">
          Belum punya akun? <a href="#register">Daftar</a>
        </div>
      </div>
    </section>
  `;
}
