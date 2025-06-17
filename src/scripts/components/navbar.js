export default function renderNavbar() {
    return `
        <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
            <div class="container">
                <a class="navbar-brand fw-bold text-primary d-flex align-items-center" href="#home">
                    <img src="/assets/catarak.png" alt="Logo CatarakSense" width="32" height="32" class="me-2" />
                    CatarakSense
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <ul class="navbar-nav gap-3">
                        <li class="nav-item"><a class="nav-link fw-semibold" href="#home">Beranda</a></li>
                        <li class="nav-item"><a class="nav-link fw-semibold" href="#artikel">Artikel</a></li>
                        <li class="nav-item"><a class="nav-link fw-semibold" href="#deteksi">Deteksi</a></li>
                        <li class="nav-item"><a class="nav-link fw-semibold" href="#about">About Us</a></li>
                    </ul>
                    <div class="d-flex gap-2" id="auth-actions">
                        <a href="#login" class="btn btn-outline-primary">Masuk</a>
                        <a href="#register" class="btn btn-primary">Daftar</a>
                    </div>
                </div>
            </div>
        </nav>
  `;
}