import { registerUser } from './api.js';

export default function renderRegisterPage() {
  setTimeout(() => {
    const form = document.getElementById('form-register');
    if (form) {
      form.onsubmit = async function(e) {
        e.preventDefault();
        const username = document.getElementById('registerUsername').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const result = document.getElementById('register-result');
        result.innerHTML = '<div class="alert alert-info">Memproses...</div>';
        try {
          const data = await registerUser(username, email, password);
          if (data.status === 'success') {
            result.innerHTML = '<div class="alert alert-success">Registrasi berhasil! Mengarahkan ke halaman login...</div>';
            setTimeout(() => {
              window.location.hash = '#login';
              window.dispatchEvent(new HashChangeEvent('hashchange'));
            }, 1000);
          } else {
            result.innerHTML = '<div class="alert alert-danger">' + (data.message || 'Registrasi gagal') + '</div>';
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
        <h2 class="mb-3 text-primary text-center">Daftar</h2>
        <form id="form-register" class="mb-3">
          <div class="mb-3">
            <label for="registerUsername" class="form-label">Username</label>
            <input type="text" id="registerUsername" class="form-control" required />
          </div>
          <div class="mb-3">
            <label for="registerEmail" class="form-label">Email</label>
            <input type="email" id="registerEmail" class="form-control" required />
          </div>
          <div class="mb-3">
            <label for="registerPassword" class="form-label">Kata Sandi</label>
            <input type="password" id="registerPassword" class="form-control" required />
          </div>
          <div class="d-grid">
            <button type="submit" class="btn btn-primary">Daftar</button>
          </div>
        </form>
        <div id="register-result" class="mt-2"></div>
        <div class="text-center mt-3">
          Sudah punya akun? <a href="#login">Masuk</a>
        </div>
      </div>
    </section>
  `;
}
