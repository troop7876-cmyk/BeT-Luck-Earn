import { auth, db } from "./firebase.js";
import { questions } from "./question.js";
import { doc, getDoc, updateDoc, addDoc, collection } 
from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

let currentAnswer = "";
let contestAmount = 0;

window.startContest = async (amount) => {
  contestAmount = amount;

  const user = auth.currentUser;
  if (!user) {
    alert("Please login");
    return;
  }

  const ref = doc(db, "users", user.uid);
  const snap = await getDoc(ref);

  if (!snap.exists() || snap.data().wallet < amount) {
    alert("Insufficient wallet balance");
    return;
  }

  const q = questions[Math.floor(Math.random() * questions.length)];
  currentAnswer = q.a.toLowerCase();

  document.getElementById("question").innerText = q.q;
  document.getElementById("quizBox").style.display = "block";
};

window.submitQuiz = async () => {
  const ans = document.getElementById("answer").value.toLowerCase().trim();
  const user = auth.currentUser;

  let reward = ans === currentAnswer ? contestAmount * 2 : 0;

  const ref = doc(db, "users", user.uid);
  const snap = await getDoc(ref);

  await updateDoc(ref, {
    wallet: snap.data().wallet - contestAmount + reward
  });

  await addDoc(collection(db, "leaderboard"), {
    user: user.email,
    score: reward,
    time: new Date()
  });

  alert(ans === currentAnswer ? "Correct! You won ₹" + reward : "Wrong answer");
  document.getElementById("quizBox").style.display = "none";
};
