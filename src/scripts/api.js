export const API_BASE_URL = 'https://cataractsense-api.up.railway.app';

// fungsi login
export async function loginUser(username, password) {
  const response = await fetch(API_BASE_URL + '/users/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ username, password })
  });
  return response.json();
}

// fungsi register
export async function registerUser(username, email, password) {
  const response = await fetch(API_BASE_URL + '/users/register', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ username, email, password })
  });
  return response.json();
}

// fungsi deteksi mata
export async function deteksiMata(imageFile) {
  const formData = new FormData();
  formData.append('image', imageFile);
  const response = await fetch(API_BASE_URL + 'deteksi', {
    method: 'POST',
    body: formData
  });
  return response.json();
}