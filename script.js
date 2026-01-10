function getBalance(){
  return parseInt(localStorage.getItem("wallet")) || 0;
}

function setBalance(b){
  localStorage.setItem("wallet", b);
}

function updateBalance(){
  document.querySelectorAll("#balance").forEach(el=>{
    el.innerText = getBalance();
  });
}

updateBalance();

function joinContest(fee){
  let bal = getBalance();
  if(bal < fee){
    alert("Not enough balance. Please deposit first.");
    return;
  }
  setBalance(bal - fee);
  updateBalance();
  localStorage.setItem("entryFee", fee);
  window.location.href = "contest.html";
}
