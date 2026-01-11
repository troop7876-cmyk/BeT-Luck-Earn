function signup(){
  play("click");
  const u=username.value.trim(), p=password.value.trim();
  if(!u||!p){msg.innerText="Fill all fields";return;}
  localStorage.setItem("user_"+u,p);
  localStorage.setItem("wallet_"+u,"0");
  msg.innerText="Registered! Login now.";
}
function login(){
  play("click");
  const u=username.value.trim(), p=password.value.trim();
  if(localStorage.getItem("user_"+u)===p){
    localStorage.setItem("loggedUser",u);
    location="dashboard.html";
  }else msg.innerText="Wrong details";
}
