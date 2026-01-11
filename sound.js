function play(n){ new Audio("sounds/"+n+".mp3").play(); }
function bgMusic(){
 let m=new Audio("sounds/bg.mp3");
 m.loop=true; m.volume=0.4; m.play();
}
