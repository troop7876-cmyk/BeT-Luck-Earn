function signup(){
  let u=user.value, p=pass.value;
  if(!u||!p){msg.innerText="Fill all";return;}
  localStorage.setItem("user_"+u,p);
  msg.innerText="Signup success";
}

function login(){
  let u=user.value, p=pass.value;
  if(localStorage.getItem("user_"+u)==p){
    localStorage.setItem("login",u);
    window.location="dashboard.html";
  }else msg.innerText="Wrong details";
}
