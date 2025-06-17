export default function renderAboutPage() {
  return `
    <section class="container-fluid py-5 min-vh-100">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <!-- Header Section -->
            <div class="text-center mb-5">
              <div class="d-inline-flex align-items-center mb-3">
                <h1 class="display-5 fw-bold text-primary mb-0">CatarakSense</h1>
              </div>
              <p class="lead text-muted">Deteksi Katarak Cerdas untuk Kesehatan Mata yang Lebih Baik</p>
            </div>

            <!-- Main Content -->
            <div class="row g-4 mb-5">
              <div class="col-md-6">
                <div class="card h-100 border-0 shadow-sm">
                  <div class="card-body p-4">
                    <div class="d-flex align-items-start mb-3">
                      <h3 class="h5 mb-0 text-primary">Apa itu CatarakSense?</h3>
                    </div>
                    <p class="text-muted mb-0">
                      CatarakSense adalah aplikasi web inovatif yang menggunakan teknologi Machine Learning untuk membantu deteksi katarak melalui analisis citra mata. Dengan interface yang user-friendly, aplikasi ini memungkinkan deteksi dini katarak secara mudah dan akurat.
                    </p>
                  </div>
                </div>
              </div>
              
              <div class="col-md-6">
                <div class="card h-100 border-0 shadow-sm">
                  <div class="card-body p-4">
                    <div class="d-flex align-items-center mb-3">
                      <h3 class="h5 mb-0 text-success">Misi Kami</h3>
                    </div>
                    <p class="text-muted mb-0">
                      Memberikan akses mudah dan terjangkau untuk deteksi dini katarak, sehingga masyarakat dapat mengambil langkah pencegahan yang tepat sebelum kondisi memburuk. Kesehatan mata adalah prioritas kami.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Features Section -->
            <div class="row mb-5">
              <div class="col-12">
                <h3 class="text-center text-primary mb-4">Keunggulan CatarakSense</h3>
                <div class="row g-3">
                  <div class="col-md-4">
                    <div class="text-center p-3">
                      <div class="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width: 70px; height: 70px;">
                        <i class="fas fa-brain text-primary" style="font-size: 1.8rem;"></i>
                      </div>
                      <h5 class="text-primary">AI-Powered</h5>
                      <p class="text-muted small mb-0">Menggunakan algoritma Machine Learning canggih dengan akurasi tinggi</p>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="text-center p-3">
                      <div class="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width: 70px; height: 70px;">
                        <i class="fas fa-clock text-success" style="font-size: 1.8rem;"></i>
                      </div>
                      <h5 class="text-success">Deteksi Cepat</h5>
                      <p class="text-muted small mb-0">Hasil analisis dalam hitungan detik untuk efisiensi maksimal</p>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="text-center p-3">
                      <div class="bg-info bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width: 70px; height: 70px;">
                        <i class="fas fa-mobile-alt text-info" style="font-size: 1.8rem;"></i>
                      </div>
                      <h5 class="text-info">Mudah Digunakan</h5>
                      <p class="text-muted small mb-0">Interface intuitif yang dapat diakses dari berbagai perangkat</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Team Section -->
            <div class="row">
              <div class="col-12">
                <div class="card border-0 shadow-sm">
                  <div class="card-body p-4">
                    <div class="text-center mb-4">
                      <i class="fas fa-users text-primary mb-3" style="font-size: 2rem;"></i>
                      <h3 class="text-primary">Our Team</h3>
                    </div>
                    <p class="text-muted text-center mb-3">
                      CatarakSense dikembangkan oleh tim yang terdiri dari:
                    </p>
                    <div class="row text-center">
                      <div class="col-md-4 mb-3">
                        <h6 class="text-primary">Front-End Developer</h6>
                        <small class="text-muted">Mengembangkan interface dan user experience</small>
                      </div>
                      <div class="col-md-4 mb-3">
                        <h6 class="text-primary">Back-End Developer</h6>
                        <small class="text-muted">Memastikan data yang di input user masuk ke database</small>
                      </div>
                      <div class="col-md-4 mb-3">
                        <h6 class="text-primary">ML Engineer</h6>
                        <small class="text-muted">Membangun model deteksi katarak yang akurat</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}