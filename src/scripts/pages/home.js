export default function renderHomePage() {
  setTimeout(() => {
    const slider = document.getElementById('artikelSlider');
    const prev = document.getElementById('prevArtikelMobile');
    const next = document.getElementById('nextArtikelMobile');
    const cardWidth = 340 + 32;

    if (prev && next && slider) {
      prev.onclick = () => slider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      next.onclick = () => slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }

    // Animasi fade-in saat scroll
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('.fade-in-section').forEach(sec => {
      observer.observe(sec);
    });
  }, 0);

  return `
    <!-- Hero Section -->
    <section class="hero-custom d-flex align-items-center min-vh-100 position-relative overflow-hidden">
      <div class="container">
        <div class="row align-items-center flex-column-reverse flex-lg-row">
          <!-- Konten Judul di kiri -->
          <div class="col-lg-6 text-center text-lg-start position-relative z-2">
            <span class="badge bg-primary bg-opacity-10 text-primary mb-3 fs-6 px-3 py-2 rounded-pill shadow-sm">Deteksi Dini Katarak</span>
            <h1 class="display-4 fw-bold text-primary mb-3">CatarakSense - Solusi Digital Deteksi Katarak dari Citra Mata</h1>
            <p class="lead mb-4 text-secondary">Deteksi katarak secara cepat, mudah, dan akurat hanya dengan foto mata Anda. Dapatkan hasil analisis instan berbasis AI!</p>
            <a href="#deteksi" class="btn btn-primary btn-lg px-4 shadow">Mulai Deteksi Sekarang</a>
          </div>
          <!-- Gambar Mata di kanan -->
          <div class="col-lg-6 position-relative mb-4 mb-lg-0">
            <div class="hero-img-wrapper">
              <img src="/assets/eyes.jpg" alt="Ilustrasi Mata" class="img-fluid hero-img-main shadow-lg" />
              <!-- Ornamen SVG/shape -->
              <svg class="hero-ornamen" width="120" height="120" viewBox="0 0 120 120" fill="none">
                <circle cx="60" cy="60" r="60" fill="#0d8abc" fill-opacity="0.10"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Wave Divider -->
    <div class="wave-divider">
      <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#f8fafc" d="M0,64 C480,120 960,0 1440,64 L1440,80 L0,80 Z"></path>
      </svg>
    </div>

    <!-- Perbandingan Mata Normal & Katarak -->
    <section class="eye-compare-bg bg-light py-5 fade-in-section position-relative">
      <div class="container">
        <h2 class="text-center mb-5 text-primary fw-bold">Perbandingan Mata Normal & Katarak</h2>
        <div class="row justify-content-center align-items-center g-4">
          <div class="col-md-5">
            <div class="eye-compare-card text-center">
              <img src="/assets/mata-normal.jpeg" alt="Foto Mata Normal" />
              <div class="eye-compare-label">Mata Normal</div>
              <div class="text-muted small mt-2">Lensa mata jernih, tidak ada bercak putih atau keruh.</div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="eye-compare-card text-center">
              <img src="/assets/mata-katarak.jpeg" alt="Foto Mata Katarak" />
              <div class="eye-compare-label">Mata Katarak</div>
              <div class="text-muted small mt-2">Lensa mata tampak keruh/putih, penglihatan buram.</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Katarak Info Section -->
    <section class="katarak-info-section py-5 fade-in-section">
      <div class="container">
        <div class="katarak-info-card mx-auto p-4 p-md-5 shadow-sm bg-white rounded-4" style="max-width: 820px;">
          <div class="d-flex align-items-center gap-2 mb-3 justify-content-center">
            <h2 class="mb-0 fw-bold text-primary" style="font-size:2rem;">Apa itu Katarak?</h2>
          </div>
          <p class="text-center mb-4 fs-5 text-secondary">
            Katarak adalah kondisi ketika lensa mata yang seharusnya jernih menjadi keruh, sehingga membuat penglihatan menjadi buram, berkabut, atau silau. Masalah ini paling sering terjadi karena proses penuaan, namun bisa juga disebabkan oleh faktor lain seperti cedera, penyakit tertentu, atau kelainan sejak lahir.
          </p>
          <div class="mb-4">
            <div class="fw-bold text-primary mb-2" style="font-size:1.1rem;">
              <span class="border-start border-4 border-primary ps-2">Gejala Katarak yang Perlu Diwaspadai:</span>
            </div>
            <ul class="katarak-list list-unstyled ps-0">
              <li><span class="katarak-bullet"></span>Penglihatan tampak buram atau seperti berkabut</li>
              <li><span class="katarak-bullet"></span>Silau saat melihat cahaya terang, terutama di siang hari</li>
              <li><span class="katarak-bullet"></span>Warna terlihat pudar atau kekuningan</li>
              <li><span class="katarak-bullet"></span>Kesulitan melihat jelas saat malam hari</li>
            </ul>
          </div>
          <div class="text-center mt-4">
            <span class="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-2">Solusi Digital</span><br>
            <span class="text-secondary">CatarakSense hadir sebagai solusi digital inovatif untuk membantu deteksi dini katarak melalui analisis citra mata, dengan cara yang praktis dan cepat.</span>
          </div>
        </div>
      </div>
      <!-- Ornamen SVG -->
      <svg class="katarak-info-ornamen" width="120" height="120" viewBox="0 0 120 120" fill="none">
        <circle cx="60" cy="60" r="60" fill="#0d8abc" fill-opacity="0.08"/>
      </svg>
    </section>

    <!-- Artikel Section (Slider) -->
    <section id="artikel" class="artikel-section py-5 fade-in-section">
      <div class="container">
        <h2 class="mb-4 text-primary text-center fw-bold" style="font-size:2rem;">Artikel Mengenai Katarak</h2>
        <div class="artikel-grid row g-4 justify-content-center">
          <div class="col-md-6 col-lg-4">
            <div class="artikel-card shadow-sm h-100 border-0">
              <img src="/assets/mitra.jpg" alt="Apa itu Katarak?" class="artikel-img-top" />
              <div class="p-3">
                <span class="badge artikel-badge bg-theme mb-2">Info Katarak</span>
                <h5 class="fw-bold text-primary mb-2">Apa itu Katarak?</h5>
                <p class="mb-2 text-secondary">Mengenal Katarak, Gangguan Mata Lansia yang Menyebabkan Kebutaan.</p>
                <a href="https://www.mitrakeluarga.com/artikel/katarak-adalah" target="_blank" rel="noopener" class="btn btn-outline-primary btn-sm rounded-pill px-3">Baca Selengkapnya</a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="artikel-card shadow-sm h-100 border-0">
              <img src="/assets/alo.jpg" alt="Gejala Katarak" class="artikel-img-top" />
              <div class="p-3">
                <span class="badge artikel-badge bg-theme mb-2">Gejala</span>
                <h5 class="fw-bold text-primary mb-2">Gejala Katarak</h5>
                <p class="mb-2 text-secondary">Gejala Katarak Tahap Awal: Kenali Tanda-Tandanya Sebelum Terlambat.</p>
                <a href="https://www.alodokter.com/katarak-pada-manula" target="_blank" rel="noopener" class="btn btn-outline-primary btn-sm rounded-pill px-3">Baca Selengkapnya</a>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="artikel-card shadow-sm h-100 border-0">
              <img src="/assets/jec.jpg" alt="Cara Mencegah Katarak" class="artikel-img-top" />
              <div class="p-3">
                <span class="badge artikel-badge bg-theme mb-2">Pencegahan</span>
                <h5 class="fw-bold text-primary mb-2">Cara Mencegah Katarak</h5>
                <p class="mb-2 text-secondary">Cara Pencegahan Katarak yang Paling Efektif untuk Menjaga Kesehatan Mata.</p>
                <a href="https://jec.co.id/id/article/3-cara-pencegahan-katarak-yang-paling-efektif" target="_blank" rel="noopener" class="btn btn-outline-primary btn-sm rounded-pill px-3">Baca Selengkapnya</a>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center text-light mt-4">
          <a href="#artikel" class="btn btn-theme px-4 py-2 rounded-pill fw-bold">Lihat Semua Artikel</a>
        </div>
      </div>
    </section>
  `;
}
