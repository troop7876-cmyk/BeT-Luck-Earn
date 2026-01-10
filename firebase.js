// Firebase SDK
const firebaseConfig = {
  apiKey: "AIzaSyAmJtO_ucih8U9KBf4tgFDM...",
  authDomain: "bet-luck-earn.firebaseapp.com",
  projectId: "bet-luck-earn",
  storageBucket: "bet-luck-earn.appspot.com",
  messagingSenderId: "1029867508970",
  appId: "1:1029867508970:web:72ca7c13b2004927d33393",
  measurementId: "G-7FHXTMS67M"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
