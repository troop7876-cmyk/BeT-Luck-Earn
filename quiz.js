let selected = [];
let score = 0;
let time = 60;
let timer;

function loadQuiz(){
  selected = questions.sort(() => 0.5 - Math.random()).slice(0, 10);
  let html = "";

  selected.forEach((q,i)=>{
    html += `<p><b>${i+1}. ${q.q}</b></p>`;
    q.a.forEach((op,j)=>{
      html += `
        <label>
          <input type="radio" name="q${i}" value="${j}"> ${op}
        </label><br>`;
    });
  });

  document.getElementById("quiz").innerHTML = html;
  startTimer();
}

function startTimer(){
  timer = setInterval(()=>{
    time--;
    document.getElementById("time").innerText = time;
    if(time <= 0){
      clearInterval(timer);
      submitQuiz();
    }
  },1000);
}

function submitQuiz(){
  clearInterval(timer);
  score = 0;

  selected.forEach((q,i)=>{
    let ans = document.querySelector(`input[name=q${i}]:checked`);
    if(ans && parseInt(ans.value) === q.c){
      score++;
    }
  });

  saveScore(score);
  alert("Quiz Finished!\nScore: " + score + "/10");
  window.location.href = "leaderboard.html";
}

loadQuiz();
