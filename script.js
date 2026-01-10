function saveScore(score){
  let scores = JSON.parse(localStorage.getItem("scores")) || [];
  scores.push(score);
  scores.sort((a,b)=>b-a);
  scores = scores.slice(0,10);
  localStorage.setItem("scores", JSON.stringify(scores));
}

function loadLeaderboard(){
  let scores = JSON.parse(localStorage.getItem("scores")) || [];
  let html = "";
  scores.forEach((s,i)=>{
    html += `<li>Rank ${i+1} : ${s} points</li>`;
  });
  let el = document.getElementById("board");
  if(el) el.innerHTML = html;
}

loadLeaderboard();
