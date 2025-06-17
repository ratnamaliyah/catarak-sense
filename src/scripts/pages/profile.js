// scripts/pages/profile.js

// Event handlers dan utility functions (di luar render function)
class ProfileManager {
    static editProfile() {
      const modal = new bootstrap.Modal(document.getElementById('editProfileModal'));
      modal.show();
    }
  
    static handleProfileFormSubmit(e) {
      e.preventDefault();
      
      const name = document.getElementById('editName').value.trim();
      const email = document.getElementById('editEmail').value.trim();
      const avatar = document.getElementById('editAvatar').value.trim();
  
      if (!name || !email) {
        alert('Nama dan email harus diisi!');
        return;
      }
  
      // Update user data
      const currentUser = JSON.parse(localStorage.getItem('user') || '{}');
      const updatedUser = {
        ...currentUser,
        name: name,
        email: email,
        avatar: avatar || currentUser.avatar
      };
  
      localStorage.setItem('user', JSON.stringify(updatedUser));
      
      // Close modal
      const modal = bootstrap.Modal.getInstance(document.getElementById('editProfileModal'));
      modal.hide();
      
      // Refresh page
      window.location.reload();
    }
  
    // Initialize event listeners (dipanggil sekali setelah DOM ready)
    static init() {
      // Expose ke global scope untuk onclick handler
      window.editProfile = this.editProfile;
      
      // Add event listener untuk form
      const form = document.getElementById('editProfileForm');
      if (form) {
        form.addEventListener('submit', this.handleProfileFormSubmit);
      }
    }
  }
  
  function renderProfilePage(isLoggedIn, user = null) {
    if (!isLoggedIn) {
      return `
        <div class="min-vh-100 d-flex align-items-center justify-content-center bg-light">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-5">
                <div class="card border-0 shadow-lg" style="backdrop-filter: blur(10px); background: rgba(255, 255, 255, 0.95); border-radius: 24px;">
                  <div class="card-body p-5 text-center">
                    <div class="mb-4">
                      <div class="d-inline-flex align-items-center justify-content-center rounded-circle mb-3" style="width: 80px; height: 80px; background: linear-gradient(135deg, #ff6b6b, #ee5a24);">
                        <i class="fas fa-lock text-white" style="font-size: 32px;"></i>
                      </div>
                    </div>
                    <h3 class="fw-bold mb-3" style="color: #2c3e50;">Akses Terbatas</h3>
                    <p class="text-muted mb-4">Silakan login terlebih dahulu untuk mengakses halaman profil Anda.</p>
                    <a href="#login" class="btn btn-lg px-4 py-3 border-0 shadow-sm" style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; border-radius: 16px; font-weight: 600; transition: all 0.3s ease;">
                      <i class="fas fa-sign-in-alt me-2"></i>Masuk Sekarang
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      }
  
      // Ambil data user dari localStorage jika tidak diberikan
      if (!user) {
        const userData = localStorage.getItem('user');
        if (userData) {
          try {
            user = JSON.parse(userData);
          } catch (e) {
            console.error('Error parsing user data:', e);
            user = {};
          }
        } else {
          user = {};
        }
      }
  
      // Utility functions
      const formatDate = (dateString) => {
        if (!dateString || dateString === 'undefined') return 'Tidak tersedia';
        try {
          const date = new Date(dateString);
          if (isNaN(date.getTime())) return 'Invalid Date';
          return date.toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        } catch (e) {
          return 'Invalid Date';
        }
      };
  
      const safeValue = (value, defaultValue = 'Tidak tersedia') => {
        return (value && value !== 'undefined' && value !== 'null') ? value : defaultValue;
      };
  
      const displayName = safeValue(user.name || user.username, 'Pengguna');
      const email = safeValue(user.email);
      const userId = safeValue(user.id || user.userId);
      const joinDate = formatDate(user.joinDate || user.createdAt || user.registrationDate);
      const avatarUrl = user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=0D8ABC&color=fff`;
  
      // Return hanya HTML, tanpa script tag
      return `
        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="card shadow bg-white">
                <div class="card-header" style="border-bottom: 1px solid #dee2e6 !important; background-color: transparent;">
                  <h2 class="card-title mb-0 text-center">
                    Profil Pengguna
                  </h2>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-4 text-center mb-4">
                      <img src="${avatarUrl}" alt="Avatar" class="rounded-circle mb-3" width="120" height="120">
                      <h4 class="text-primary">${displayName}</h4>
                    </div>
                    <div class="col-md-8">
                      <div class="row mb-3">
                        <div class="col-sm-4">
                          <strong>Email:</strong>
                        </div>
                        <div class="col-sm-8">
                          ${email}
                        </div>
                      </div>
                      <div class="row mb-3">
                        <div class="col-sm-4">
                          <strong>ID Pengguna:</strong>
                        </div>
                        <div class="col-sm-8">
                          ${userId}
                        </div>
                      </div>
                      <div class="row mb-3">
                        <div class="col-sm-4">
                          <strong>Tanggal Bergabung:</strong>
                        </div>
                        <div class="col-sm-8">
                          ${joinDate}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <hr>
                  
                  <div class="row">
                    <div class="col-12 text-center">
                      <button class="btn btn-outline-secondary btn-lg ms-2" onclick="editProfile()">
                        Edit Profil
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Modal Edit Profile -->
        <div class="modal fade" id="editProfileModal" tabindex="-1" aria-labelledby="editProfileModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="editProfileModalLabel">Edit Profil</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form id="editProfileForm">
                <div class="modal-body">
                  <div class="mb-3">
                    <label for="editName" class="form-label">Nama</label>
                    <input type="text" class="form-control" id="editName" value="${displayName}" required>
                  </div>
                  <div class="mb-3">
                    <label for="editEmail" class="form-label">Email</label>
                    <input type="email" class="form-control" id="editEmail" value="${user.email || ''}" required>
                  </div>
                  <div class="mb-3">
                    <label for="editAvatar" class="form-label">URL Avatar (Opsional)</label>
                    <input type="url" class="form-control" id="editAvatar" value="${user.avatar || ''}" placeholder="https://example.com/avatar.jpg">
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                  <button type="submit" class="btn btn-primary">Simpan Perubahan</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      `;
  }
  
  // Export kedua function dan class
  export default renderProfilePage;
  export { ProfileManager };