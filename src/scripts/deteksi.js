import { deteksiCatarak } from './api.js';

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

  return `
    <section class="container py-5" style="min-height:70vh;">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <h2 class="mb-4 text-primary text-center">Deteksi Katarak</h2>
          <form id="deteksiForm" class="mb-4">
            <div class="mb-3">
              <label>Upload Foto Mata</label>
              <input type="file" name="file" class="form-control" accept="image/*" required />
            </div>
            <div class="d-grid">
              <button type="submit" class="btn btn-primary">Deteksi</button>
            </div>
          </form>
          <div id="deteksiResult" class="mt-4"></div>
        </div>
      </div>
    </section>
  `;
}

window.afterDeteksiRender = function() {
  const form = document.getElementById('deteksiForm');
  const resultDiv = document.getElementById('deteksiResult');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      resultDiv.innerHTML = `
        <div class="d-flex justify-content-center align-items-center">
          <div class="spinner-border text-primary" role="status" aria-hidden="true"></div>
          <span class="ms-2">Memproses gambar...</span>
        </div>
      `;
      const fileInput = form.file;
      if (!fileInput.files.length) {
        resultDiv.innerHTML = `<div class="alert alert-danger">Pilih gambar terlebih dahulu</div>`;
        return;
      }
      const formData = new FormData();
      formData.append('file', fileInput.files[0]);
      try {
        const result = await deteksiCatarak(formData);
        if (result.status === 'success') {
          resultDiv.innerHTML = `
            <div class="card shadow-sm border-success">
              <div class="card-body text-center">
                <h5 class="card-title mb-3">Hasil Deteksi</h5>
                <span class="badge bg-primary fs-5 px-4 py-2">${result.data.result}</span>
                <div class="mt-3">
                  <span class="badge bg-success">Confidence: ${(result.data.confidence * 100).toFixed(2)}%</span>
                </div>
              </div>
            </div>
          `;
        } else {
          resultDiv.innerHTML = `<div class="alert alert-danger">${result.message || 'Gagal mendeteksi'}</div>`;
        }
      } catch (err) {
        resultDiv.innerHTML = `<div class="alert alert-danger">Terjadi kesalahan server</div>`;
      }
    });
  }
};
