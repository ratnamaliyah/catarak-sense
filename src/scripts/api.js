const BASE_URL = 'https://cataractsense-api.up.railway.app'; // ganti dengan domain backend FastAPI kamu

// Fungsi register
export async function registerUser(data) {
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
}

// Fungsi login
export async function loginUser(data) {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
}

// Fungsi deteksi
export async function deteksiCatarak(formData) {
  const response = await fetch(`${BASE_URL}/predict`, {
    method: 'POST',
    body: formData, // FormData untuk upload gambar
  });
  return response.json();
}