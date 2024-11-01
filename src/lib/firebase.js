import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-f964e.firebaseapp.com",
  projectId: "reactchat-f964e",
  storageBucket: "reactchat-f964e.firebasestorage.app",
  messagingSenderId: "34930960277",
  appId: "1:34930960277:web:e83cea3dfe9261c649b89c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()