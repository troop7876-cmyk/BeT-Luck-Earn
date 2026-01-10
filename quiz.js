let score = 0;
let current = [];

function loadQuiz(){
  current = questions.sort(()=>0.5-Math.random()).slice(0,10);
  let html="";
  current.forEach((q,i)=>{
    html+=`<p>${i+1}. ${q.q}</p>`;
    q.a.forEach((op,j)=>{
      html+=`<input type="radio" name="q${i}" value="${j}">${op}<br>`;
    });
  });
  document.getElementById("quiz").innerHTML=html;
}
loadQuiz();

function submitQuiz(){
  current.forEach((q,i)=>{
    let sel=document.querySelector(`input[name=q${i}]:checked`);
    if(sel && parseInt(sel.value)==q.c) score++;
  });
  alert("Your Score: "+score+"/10");
}
