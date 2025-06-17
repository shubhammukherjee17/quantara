// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUU3g81UCX4gctOY2SQBcw0ITjaeWK-Yc",
  authDomain: "quantari.firebaseapp.com",
  projectId: "quantari",
  storageBucket: "quantari.firebasestorage.app",
  messagingSenderId: "220823860789",
  appId: "1:220823860789:web:4741bfa4da2e8b69ff237c",
  measurementId: "G-0L2GSZXZH5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };

//firebase deploy