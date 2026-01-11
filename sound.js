function play(n){
  const a=new Audio("sounds/"+n+".mp3"); a.volume=.6; a.play().catch(()=>{});
}
function bgMusic(){
  const m=new Audio("sounds/bg.mp3"); m.loop=true; m.volume=.3; m.play().catch(()=>{});
}
