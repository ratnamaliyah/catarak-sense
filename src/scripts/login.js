import { loginUser } from './api.js';

export default function renderLoginPage() {
  setTimeout(() => {
    const form = document.getElementById('form-login');
    if (form) {
      form.onsubmit = async function(e) {
        e.preventDefault();
        const username = form.username.value;
        const password = form.password.value;
        const result = await loginUser({ username, password });
        if (result.access_token) {
          const username = result.username || result.user?.username || form.username.value;
          const email = result.email || result.user?.email || '';
          localStorage.setItem('user', JSON.stringify({
            name: username,
            email: email,
            access_token: result.access_token
          }));
          window.location.hash = '#home';
        } else {
          alert(result.detail || 'Login gagal');
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
            <input type="text" id="loginUsername" name="username" class="form-control" required />
          </div>
          <div class="mb-3">
            <label for="loginPassword" class="form-label">Kata Sandi</label>
            <input type="password" id="loginPassword" name="password" class="form-control" required />
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

// Misal di handle submit register
function handleRegisterSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('registerName').value;
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;
  // ...proses validasi dan simpan ke backend...

  // Setelah register sukses:
  localStorage.setItem('user', JSON.stringify({ name, email }));
  window.location.hash = '#home'; // redirect ke home
}
