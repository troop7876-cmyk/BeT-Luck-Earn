let wallet = 100;
let correctAnswer = "";

const questions = [
  {q:"5 + 5 = ?", a:"10"},
  {q:"10 - 3 = ?", a:"7"},
  {q:"Capital of India?", a:"delhi"},
  {q:"Sun is a ?", a:"star"}
];

window.startContest = function(amount){
  if(wallet < amount){
    playLose();
    alert("Insufficient balance");
    return;
  }

  wallet -= amount;
  document.getElementById("wallet").innerText = wallet;

  const q = questions[Math.floor(Math.random()*questions.length)];
  correctAnswer = q.a.toLowerCase();

  document.getElementById("question").innerText = q.q;
  document.getElementById("quizBox").style.display = "block";
};

window.submitQuiz = function(){
  const ans = document.getElementById("answer").value.toLowerCase().trim();

  if(ans === correctAnswer){
    playWin();
    alert("🎉 Correct! You Won");
    wallet += 20;
  }else{
    playLose();
    alert("❌ Wrong Answer");
  }

  document.getElementById("wallet").innerText = wallet;
  document.getElementById("answer").value = "";
  document.getElementById("quizBox").style.display = "none";
};
