// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIRBASE_KEY,
  authDomain: "aman-stor.firebaseapp.com",
  projectId: "aman-stor",
  storageBucket: "aman-stor.firebasestorage.app",
  messagingSenderId: "313136386468",
  appId: "1:313136386468:web:62241f6498c330556d3131"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);