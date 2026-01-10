const clickSound = new Audio("https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg");
const winSound = new Audio("https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg");
const loseSound = new Audio("https://actions.google.com/sounds/v1/cartoon/boing.ogg");

function playClick(){
  clickSound.play();
}

function playWin(){
  winSound.play();
}

function playLose(){
  loseSound.play();
}
