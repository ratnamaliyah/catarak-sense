export default function renderAboutPage() {
  return `
    <section class="container py-5" style="min-height:70vh;">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <h2 class="mb-4 text-primary text-center">Tentang CatarakSense</h2>
          <p class="lead text-center">
            <strong>CatarakSense</strong> adalah aplikasi web yang membantu deteksi katarak secara digital melalui citra mata. 
            Aplikasi ini dirancang untuk mempermudah masyarakat dalam mengenali gejala katarak lebih awal dengan bantuan teknologi Machine Learning.
          </p>
          <p class="mt-3 text-center">
            Kami percaya bahwa pencegahan dan deteksi dini adalah kunci dari penanganan katarak secara efektif.
            CatarakSense dibangun oleh tim multidisipliner yang terdiri dari pengembang web dan ahli Machine Learning untuk memberikan solusi yang akurat dan mudah diakses.
          </p>
        </div>
      </div>
    </section>
  `;
}
