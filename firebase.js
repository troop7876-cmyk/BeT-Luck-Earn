// Firebase CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "bet-luck-earn.firebaseapp.com",
  projectId: "bet-luck-earn",
  storageBucket: "bet-luck-earn.appspot.com",
  messagingSenderId: "1029867508970",
  appId: "1:1029867508970:web:72ca7c13b2004927d33393"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
