import { questions } from "./question.js";

let wallet = 100;
let correctAnswer = "";

const walletEl = document.getElementById("wallet");

window.startContest = function(amount){
  if(wallet < amount){
    alert("Not enough wallet balance");
    return;
  }

  wallet -= amount;
  walletEl.innerText = wallet;

  const q = questions[Math.floor(Math.random() * questions.length)];
  correctAnswer = q.a.toLowerCase();

  document.getElementById("question").innerText = q.q;
  document.getElementById("quizBox").style.display = "block";
};

window.submitQuiz = function(){
  const ans = document.getElementById("answer").value.toLowerCase().trim();
  const box = document.getElementById("quizBox");

  if(ans === correctAnswer){
    box.style.boxShadow = "0 0 25px #00ff9d";
    alert("🎉 Correct! You Won");
    wallet += 20;
  } else {
    box.style.boxShadow = "0 0 25px red";
    alert("❌ Wrong Answer");
  }

  walletEl.innerText = wallet;
  document.getElementById("answer").value = "";

  setTimeout(()=>{
    box.style.display = "none";
    box.style.boxShadow = "none";
  },600);
};
