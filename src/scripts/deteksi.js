import { deteksiMata } from './api.js';

export default function renderDeteksiPage(isLoggedIn) {
  // Render HTML
  if (!isLoggedIn) {
    return `
      <section class="container py-5 d-flex justify-content-center align-items-center" style="min-height:70vh;">
        <div class="card shadow p-4 w-100" style="max-width:400px;">
          <h2 class="mb-3 text-primary text-center">Yuk, Masuk atau Daftar Dulu</h2>
          <p class="mb-4 text-center">Untuk menggunakan fitur deteksi katarak, silakan masuk ke akun Anda atau daftar terlebih dahulu.</p>
          <div class="d-flex gap-2 justify-content-center">
            <a href="#login" class="btn btn-outline-primary">Masuk</a>
            <a href="#register" class="btn btn-primary">Daftar</a>
          </div>
        </div>
      </section>
    `;
  }

  // Form deteksi
  setTimeout(() => {
    const form = document.getElementById('form-deteksi');
    if (form) {
      form.onsubmit = async function(e) {
        e.preventDefault();
        const fileInput = document.getElementById('imageInput');
        const result = document.getElementById('result');
        if (!fileInput.files[0]) {
          result.innerHTML = '<div class="alert alert-danger">Silakan pilih gambar terlebih dahulu.</div>';
          return;
        }
        result.innerHTML = '<div class="alert alert-info">Memproses gambar...</div>';
        try {
          const data = await deteksiMata(fileInput.files[0]);
          if (data.status === 'success') {
            result.innerHTML = '<div class="alert alert-success">Hasil Deteksi: ' + data.result + '</div>';
          } else {
            result.innerHTML = '<div class="alert alert-danger">Gagal mendeteksi. Coba lagi.</div>';
          }
        } catch (err) {
          result.innerHTML = '<div class="alert alert-danger">Terjadi kesalahan koneksi ke server.</div>';
        }
      };
    }
  }, 0);

  return `
    <section class="container py-5" style="min-height:70vh;">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <h2 class="mb-4 text-primary text-center">Deteksi Katarak</h2>
          <form id="form-deteksi" class="mb-4">
            <div class="mb-3">
              <label for="imageInput" class="form-label">Unggah Foto Mata:</label>
              <input type="file" id="imageInput" class="form-control" accept="image/*" required />
            </div>
            <div class="d-grid">
              <button type="submit" class="btn btn-success">Deteksi</button>
            </div>
          </form>
          <div id="result" class="mt-3 text-center"></div>
        </div>
      </div>
    </section>
  `;
}
