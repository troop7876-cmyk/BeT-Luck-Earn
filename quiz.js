let currentAnswer = "";
let wallet = 0;

function startContest(amount){
  if(wallet < amount){
    alert("Insufficient balance");
    return;
  }

  wallet -= amount;
  updateWallet();

  const q = questions[Math.floor(Math.random()*questions.length)];
  currentAnswer = q.a.toLowerCase();

  document.getElementById("question").innerText = q.q;
  document.getElementById("quizBox").style.display = "block";
}

function submitQuiz(){
  const userAns = document.getElementById("answer").value.toLowerCase().trim();

  if(userAns === currentAnswer){
    alert("Correct 🎉 +20 points");
    wallet += 20;
    saveScore(20);
  }else{
    alert("Wrong ❌");
    saveScore(0);
  }

  updateWallet();
  document.getElementById("quizBox").style.display = "none";
  document.getElementById("answer").value = "";
}

function updateWallet(){
  document.getElementById("wallet").innerText = wallet;
}

function saveScore(score){
  const user = auth.currentUser;
  if(!user) return;

  db.collection("leaderboard").add({
    email: user.email,
    score: score,
    time: firebase.firestore.FieldValue.serverTimestamp()
  });
}
