export default function renderFooter() {
    return `
    <!-- Footer Section -->
    <footer class="footer-cataraksense pt-5 pb-4">
      <div class="container">
        <div class="row gy-4 border-bottom pb-4 mb-4">
          <!-- Kiri: Logo & Kontak -->
          <div class="col-lg-4">
            <div class="mb-3 d-flex align-items-center gap-2">
              <img src="/assets/catarak.png" alt="CatarakSense" width="38" height="38" />
              <span class="fs-3 fw-bold text-primary">CatarakSense</span>
            </div>
            <div class="d-flex flex-wrap gap-2 mb-3">
              <span class="footer-badge"><img src="/assets/icon-ai.png" width="20" class="me-1" />AI Deteksi</span>
              <span class="footer-badge"><img src="/assets/icon-info.png" width="20" class="me-1" />Info Katarak</span>
              <span class="footer-badge"><img src="/assets/icon-edu.png" width="20" class="me-1" />Edukasi</span>
            </div>
            <div class="footer-contact mb-2">
              <i class="bi bi-envelope me-2"></i> cataraksense@gmail.com
            </div>
            <div class="footer-contact">
              <i class="bi bi-telephone me-2"></i> 0812-3456-7890
            </div>
          </div>
          <!-- Tengah: Bantuan & Panduan -->
          <div class="col-6 col-lg-2 ps-lg-4 px-3">
            <div class="footer-title">Bantuan</div>
            <ul class="footer-list">
              <li><a href="#" class="fw-normal">Pusat Bantuan</a></li>
              <li><a href="#" class="fw-normal">Syarat & Ketentuan</a></li>
              <li><a href="#" class="fw-normal">Kebijakan Privasi</a></li>
            </ul>
          </div>
          <!-- Tengah: Tentang -->
          <div class="col-6 col-lg-2 ps-lg-4 px-3">
            <div class="footer-title">Tentang</div>
            <ul class="footer-list">
              <li><a href="#about" class="fw-normal">Tentang Kami</a></li>
              <li><a href="#" class="fw-normal">Tim CatarakSense</a></li>
              <li><a href="#" class="fw-normal">Blog</a></li>
            </ul>
          </div>
          <!-- Kanan: Kolaborasi -->
          <div class="col-12 col-lg-4 ps-lg-4">
            <div class="footer-title">Kolaborasi</div>
            <ul class="footer-list">
              <li><a href="#" class="fw-normal">Gabung Relawan</a></li>
              <li><a href="#" class="fw-normal">Partner Rumah Sakit</a></li>
              <li><a href="#" class="fw-normal">Program Edukasi</a></li>
            </ul>
          </div>
        </div>
        <div class="text-center mt-4 text-secondary small">
          &copy; 2025 CatarakSense. All rights reserved.
        </div>
      </div>
    </footer>
    `
}