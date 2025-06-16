import { registerUser } from './api.js';

export default function renderRegisterPage() {
  setTimeout(() => {
    const form = document.getElementById('form-register');
    if (form) {
      form.onsubmit = async function (e) {
        e.preventDefault();
        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        const result = await registerUser({ username, email, password });
        if (result.msg) {
          // Setelah register/login sukses
          // Jangan simpan localStorage di sini!
          window.location.hash = '#login';
        } else {
          alert(result.detail || result.message || 'Registrasi gagal');
        }
      };
    }
  }, 0);

  return `
    <section class="container py-5 d-flex justify-content-center align-items-center" style="min-height:70vh;">
      <div class="card shadow p-4 w-100" style="max-width:400px;">
        <h2 class="mb-3 text-primary text-center">Register</h2>
        <form id="form-register" class="mb-3">
          <div class="mb-3">
            <label for="registerUsername" class="form-label">Username</label>
            <input type="text" id="registerUsername" name="username" class="form-control" required />
          </div>
          <div class="mb-3">
            <label for="registerEmail" class="form-label">Email</label>
            <input type="email" id="registerEmail" name="email" class="form-control" required />
          </div>
          <div class="mb-3">
            <label for="registerPassword" class="form-label">Password</label>
            <input type="password" id="registerPassword" name="password" class="form-control" required />
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
