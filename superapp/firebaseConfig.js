import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDtfZ0SJPJJOc_YU4_oabTfyFCxxTBKBHg",
  authDomain: "appclase-74350.firebaseapp.com",
  projectId: "appclase-74350",
  storageBucket: "appclase-74350.firebasestorage.app",
  messagingSenderId: "140748402199",
  appId: "1:140748402199:web:01f31c411a3e81a4f33652",
  measurementId: "G-HHV9Z4L9LF"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
export const db = getFirestore(app);