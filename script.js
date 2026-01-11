function signup(){
  play("click");
  let u=username.value, p=password.value;
  if(!u||!p){msg.innerText="Fill all fields";return;}
  localStorage.setItem("user_"+u,p);
  localStorage.setItem("wallet_"+u,0);
  msg.innerText="Signup successful. Login now.";
}

function login(){
  play("click");
  let u=username.value, p=password.value;
  if(localStorage.getItem("user_"+u)==p){
    localStorage.setItem("loggedUser",u);
    location="dashboard.html";
  }else msg.innerText="Wrong username or password";
}
