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
  }, 0);

  return `
    <!-- Hero Section -->
    <section id="home" class="bg-white d-flex align-items-center justify-content-center min-vh-100">
      <div class="container text-center">
        <h1 class="display-4 fw-bold text-primary mb-3">CatarakSense - Solusi Digital Deteksi Katarak dari Citra Mata</h1>
        <p class="lead mb-4 text-secondary">Solusi Digital Deteksi Katarak dari Citra Mata</p>
      </div>
    </section>

    <!-- Gambar Perbandingan -->
    <section class="bg-light py-5">
      <div class="container">
        <div class="row justify-content-center align-items-center g-4">
          <div class="col-md-5 text-center">
            <img src="src/assets/mata-normal.jpeg" alt="Foto Mata Normal" class="img-fluid rounded shadow" style="max-height:220px;">
            <p class="mt-2 fw-semibold">Mata Normal</p>
          </div>
          <div class="col-md-5 text-center">
            <img src="src/assets/mata-katarak.jpeg" alt="Foto Mata Katarak" class="img-fluid rounded shadow" style="max-height:220px;">
            <p class="mt-2 fw-semibold">Mata Katarak</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Intro Section -->
    <section class="bg-white py-5">
      <div class="container">
        <h2 class="text-primary mb-3 text-center">Apa itu Katarak?</h2>
        <p class="text-center mb-4">Katarak adalah kondisi ketika lensa mata yang seharusnya jernih menjadi keruh, sehingga membuat penglihatan menjadi buram, berkabut, atau silau. Masalah ini paling sering terjadi karena proses penuaan, namun bisa juga disebabkan oleh faktor lain seperti cedera, penyakit tertentu, atau kelainan sejak lahir.</p>
        <h4 class="text-primary mb-2">Gejala Katarak yang Perlu Diwaspadai:</h4>
        <ul>
          <li>Penglihatan tampak buram atau seperti berkabut</li>
          <li>Silau saat melihat cahaya terang, terutama di siang hari</li>
          <li>Warna terlihat pudar atau kekuningan</li>
          <li>Kesulitan melihat jelas saat malam hari</li>
        </ul>
        <p class="mt-4">CatarakSense hadir sebagai solusi digital inovatif untuk membantu deteksi dini katarak melalui analisis citra mata, dengan cara yang praktis dan cepat.</p>
      </div>
    </section>

    <!-- Artikel Section (Slider) -->
    <section id="artikel" class="bg-light py-5">
      <div class="container">
        <h2 class="mb-4 text-primary text-center">Artikel Mengenai Katarak</h2>
        <div id="artikelSlider" class="d-flex overflow-hidden" style="scroll-behavior:smooth;">
          <div class="flex-shrink-0 p-2" style="width:340px; min-width:340px;">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h5 class="card-title text-primary">Apa itu Katarak?</h5>
                <p class="card-text">Mengenal Katarak, Gangguan Mata Lansia yang Menyebabkan Kebutaan.</p>
                <a href="https://www.mitrakeluarga.com/artikel/katarak-adalah" target="_blank" rel="noopener" class="btn btn-outline-primary btn-sm">Baca Selengkapnya</a>
              </div>
            </div>
          </div>
          <div class="flex-shrink-0 p-2" style="width:340px; min-width:340px;">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h5 class="card-title text-primary">Gejala Katarak</h5>
                <p class="card-text">Gejala Katarak Tahap Awal: Kenali Tanda-Tandanya Sebelum Terlambat.</p>
                <a href="https://www.alodokter.com/katarak-pada-manula" target="_blank" rel="noopener" class="btn btn-outline-primary btn-sm">Baca Selengkapnya</a>
              </div>
            </div>
          </div>
          <div class="flex-shrink-0 p-2" style="width:340px; min-width:340px;">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h5 class="card-title text-primary">Cara Mencegah Katarak</h5>
                <p class="card-text">Cara Pencegahan Katarak yang Paling Efektif untuk Menjaga Kesehatan Mata</p>
                <a href="https://jec.co.id/id/article/3-cara-pencegahan-katarak-yang-paling-efektif" target="_blank" rel="noopener" class="btn btn-outline-primary btn-sm">Baca Selengkapnya</a>
              </div>
            </div>
          </div>
          <div class="flex-shrink-0 p-2" style="width:340px; min-width:340px;">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h5 class="card-title text-primary">Cara Mencegah Katarak</h5>
                <p class="card-text">Katarak Bisa Menyerang Di Usia Muda?</p>
                <a href="https://rsislamaysha.com/2023/01/17/katarak-bisa-menyerang-di-usia-muda/" target="_blank" rel="noopener" class="btn btn-outline-primary btn-sm">Baca Selengkapnya</a>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center gap-3 mt-3">
          <button id="prevArtikelMobile" class="btn btn-outline-primary">
            &lt;
          </button>
          <button id="nextArtikelMobile" class="btn btn-outline-primary">
            &gt;
          </button>
        </div>
      </div>
    </section>
  `;
}
