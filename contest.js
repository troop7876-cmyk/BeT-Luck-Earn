function join(amount){
  if(amount>50000){alert("Limit exceeded");return;}
  play('click');

  let total=amount*10;       // demo joined
  let prize=total*0.7;       // 70%

  setTimeout(()=>{
    play('win');
    alert("🎉 You Won ₹"+prize);
  },2000);
}
