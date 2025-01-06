// Login API call
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithCustomToken } from 'firebase/auth';

// Firebase config
const firebaseConfig = {
  apiKey: 'AIzaSyABHPxxg3QlcFnFWWY1PvcCSuemtXWRoms',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'cratedigger-36f34',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: '655433315810',
  appId: 'YOUR_APP_ID',
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const login = async (email, password) => {
  const response = await fetch('http://localhost:3000/api/user/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to login');
  }

  const { token } = await response.json(); // Custom Token

  // Exchange the Custom Token for an ID Token
  const userCredential = await signInWithCustomToken(auth, token);
  const idToken = await userCredential.user.getIdToken(); // ID Token

  // The ID Token will now be included in requests via cookies (if using HttpOnly cookies)
};

// Register API call
export const register = async (email, password) => {
  const response = await fetch('http://localhost:3000/api/user/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
    credentials: 'include', // Include cookies with the request
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to register');
  }
};

// Logout API call
export const logout = async () => {
  const response = await fetch('http://localhost:3000/api/user/logout', {
    method: 'POST',
    credentials: 'include', // Include cookies with the request
  });

  if (!response.ok) {
    throw new Error('Failed to logout');
  }
};

// Fetch user session ("/me" endpoint)
export const getUser = async () => {
  const response = await fetch('http://localhost:3000/api/user/me', {
    credentials: 'include', // Include cookies with the request
  });

  if (!response.ok) {
    throw new Error('Failed to fetch user');
  }

  return response.json(); // Return user data
};