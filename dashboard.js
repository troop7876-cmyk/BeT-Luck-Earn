uname.innerText=localStorage.getItem("login");

function deposit(){
  play('deposit');
  box.innerHTML=`
    <h3>Deposit via UPI</h3>
    <p><b>UPI:</b> 7876746456@ptsbi</p>
    <p><b>GPay:</b> 7876746456</p>
    <img src="assets/qr.png" width="200">
    <p>Send & wait approval</p>
  `;
}

function withdraw(){
  play('withdraw');
  box.innerHTML=`
    <h3>Withdraw</h3>
    <input id="amt" placeholder="Amount">
    <button onclick="sendReq()">Request</button>
  `;
}

function sendReq(){
  let w=JSON.parse(localStorage.getItem("withdraw")||"[]");
  w.push({user:uname.innerText,amt:amt.value,status:"Pending"});
  localStorage.setItem("withdraw",JSON.stringify(w));
  alert("Request sent");
}
